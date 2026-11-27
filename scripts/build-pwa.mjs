import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const root = new URL("../", import.meta.url);
const template = await readFile(
  new URL("scripts/service-worker.template.js", root),
  "utf8",
);
const hash = createHash("sha256").update(template);
for (const file of [
  "public/offline.html",
  "public/documents/curriculo-thamires-queiroz.pdf",
  "public/icons/icon-192.png",
  "public/icons/icon-512.png",
  "public/icons/maskable-512.png",
  "public/icons/apple-touch-icon.png",
])
  hash.update(await readFile(new URL(file, root)));
const version = hash.digest("hex").slice(0, 12);
await writeFile(
  new URL("public/sw.js", root),
  template.replaceAll("__VERSION__", version),
);
console.log(
  "PWA preparado:",
  version,
  "em",
  fileURLToPath(new URL("public/sw.js", root)),
);
