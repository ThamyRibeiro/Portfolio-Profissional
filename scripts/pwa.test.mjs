import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { runInNewContext } from "node:vm";
const root = new URL("../", import.meta.url);
const source = await readFile(new URL("public/sw.js", root), "utf8");
function worker() {
  const handlers = new Map();
  const stores = new Map();
  let online = true;
  const key = (value) =>
    new URL(
      typeof value === "string" ? value : value.url,
      "https://portfolio.test",
    ).pathname;
  const caches = {
    open: async (name) => {
      if (!stores.has(name)) stores.set(name, new Map());
      const store = stores.get(name);
      return {
        addAll: async (paths) => {
          for (const path of paths) {
            await access(new URL("public" + path, root));
            store.set(
              path,
              new Response(await readFile(new URL("public" + path, root))),
            );
          }
        },
        put: async (request, response) => store.set(key(request), response),
        match: async (request) => store.get(key(request))?.clone(),
      };
    },
    keys: async () => [...stores.keys()],
    delete: async (name) => stores.delete(name),
    match: async (request) => {
      for (const store of stores.values()) {
        const response = store.get(key(request));
        if (response) return response.clone();
      }
    },
  };
  runInNewContext(source, {
    self: {
      location: { origin: "https://portfolio.test" },
      clients: { claim: async () => {} },
      addEventListener: (name, handler) => handlers.set(name, handler),
    },
    caches,
    URL,
    Response,
    fetch: async () => {
      if (!online) throw Error("offline");
      return new Response("network");
    },
  });
  return {
    stores,
    caches,
    offline: () => {
      online = false;
    },
    install: async () => {
      let pending;
      handlers.get("install")({ waitUntil: (p) => (pending = p) });
      await pending;
    },
    activate: async () => {
      let pending;
      handlers.get("activate")({ waitUntil: (p) => (pending = p) });
      await pending;
    },
    request: async (path, extra = {}) => {
      let pending;
      handlers.get("fetch")({
        request: {
          url: new URL(path, "https://portfolio.test").href,
          method: "GET",
          mode: "cors",
          ...extra,
        },
        respondWith: (p) => (pending = p),
      });
      return pending ? await pending : null;
    },
  };
}
test("precache inclui arquivos existentes e PDF original", async () => {
  const w = worker();
  await w.install();
  const names = await w.caches.keys();
  assert.equal(names.length, 1);
  assert.match(names[0], /^thamires-static-[a-f0-9]{12}$/);
  w.offline();
  const pdf = await w.request("/documents/curriculo-thamires-queiroz.pdf");
  assert.equal((await pdf.text()).slice(0, 5), "%PDF-");
});
test("navegação usa rede e oferece página offline sem armazenar HTML dinâmico", async () => {
  const w = worker();
  await w.install();
  assert.equal(
    await (await w.request("/", { mode: "navigate" })).text(),
    "network",
  );
  w.offline();
  const response = await w.request("/", { mode: "navigate" });
  assert.match(await response.text(), /Você está offline/);
  assert.equal([...w.stores.values()][0].has("/"), false);
});
test("não intercepta API, RSC, POST ou outro domínio", async () => {
  const w = worker();
  await w.install();
  w.offline();
  for (const [path, extra] of [
    ["/api/data", {}],
    ["/?_rsc=abc", {}],
    ["/documents/curriculo-thamires-queiroz.pdf", { method: "POST" }],
    ["https://other.test/offline.html", {}],
  ])
    assert.equal(await w.request(path, extra), null);
});
test("ativação remove só caches antigos deste portfólio", async () => {
  const w = worker();
  await w.install();
  await w.caches.open("thamires-static-old");
  await w.caches.open("another-application");
  await w.activate();
  const names = await w.caches.keys();
  assert.equal(names.length, 2);
  assert.ok(names.includes("another-application"));
  assert.ok(!names.includes("thamires-static-old"));
});
