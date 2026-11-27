import { readdir, readFile, access } from "node:fs/promises";
import { resolve, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
const failures = [];
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries
        .filter(
          (e) =>
            ![
              "node_modules",
              ".git",
              ".next",
              ".agents",
              ".codex",
              "artifacts",
              "tmp",
            ].includes(e.name),
        )
        .map(async (e) =>
          e.isDirectory() ? walk(resolve(dir, e.name)) : [resolve(dir, e.name)],
        ),
    )
  ).flat();
}
const files = await walk(root);
for (const file of files) {
  const rel = relative(root, file).replaceAll("\\", "/");
  if (
    file.endsWith(".md") &&
    !rel.startsWith("docs/") &&
    !["README.md", "AGENTS.md"].includes(rel)
  )
    failures.push("Documentação fora de docs/: " + rel);
  if (!/\.[cm]?[jt]sx?$/.test(file) || !/^(shared|features)\//.test(rel))
    continue;
  const text = await readFile(file, "utf8");
  for (const match of text.matchAll(/(?:from\s*|import\s*)['"]([^'"]+)['"]/g)) {
    const spec = match[1];
    const target = spec.startsWith("@/")
      ? resolve(root, spec.slice(2))
      : spec.startsWith(".")
        ? resolve(dirname(file), spec)
        : null;
    if (!target) continue;
    const targetRel = relative(root, target).replaceAll("\\", "/");
    if (rel.startsWith("shared/") && /^(features|app)\//.test(targetRel))
      failures.push(rel + " depende de " + targetRel);
    if (rel.startsWith("features/")) {
      const feature = rel.split("/")[1];
      if (
        targetRel.startsWith("app/") ||
        (targetRel.startsWith("features/") &&
          targetRel.split("/")[1] !== feature)
      )
        failures.push(rel + " atravessa a fronteira de domínio: " + targetRel);
    }
  }
}
for (const name of [
  "rules.md",
  "architecture.md",
  "agent-harness.md",
  "design.md",
  "content.md",
  "pwa.md",
  "validation.md",
]) {
  try {
    await access(resolve(root, "docs", name));
  } catch {
    failures.push("Documento obrigatório ausente: " + name);
  }
}
for (const file of files.filter((f) => f.endsWith(".md"))) {
  const text = await readFile(file, "utf8");
  for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const href = match[1].split("#")[0];
    if (!href || /^[a-z]+:/i.test(href) || href.startsWith("/")) continue;
    try {
      await access(resolve(dirname(file), decodeURIComponent(href)));
    } catch {
      failures.push(
        "Link local inválido em " + relative(root, file) + ": " + href,
      );
    }
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    "Harness válido: documentação, links e fronteiras de dependência.",
  );
}
