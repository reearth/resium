import fs from "fs";
import path from "path";
import { inspect } from "util";

import { globbySync } from "globby";
import ts from "typescript";

import { parseDoc } from "./parser.mts";
import { renderDoc } from "./renderer.mts";

const { createProgram } = ts;
const name = process.argv.slice(2).filter(a => !a.startsWith("-"));
const options = process.argv.slice(2).filter(a => a.startsWith("-"));
const preview = options.includes("--preview") || options.includes("-p");
const dest = path.join("docs", "src", "content", "docs", "components");

console.log(
  `Generating documents...${name.length > 0 ? `: ${name.join(", ")}` : ""}${preview ? " (preview)" : ""}`,
);

// list component paths
const componentFiles = globbySync([
  "src/*/*.ts{,x}",
  "!src/*/index.ts{,x}",
  "!src/*/story.ts{,x}",
  "!src/*/*.stories.ts{,x}",
  "!src/*/test.ts{,x}",
  "!src/*/*.test.ts{,x}",
  "!src/core/**/*",
]).filter(cf => !name.length || name.includes(path.parse(cf).name));

if (componentFiles.length > 0) {
  try {
    fs.mkdirSync(dest, { recursive: true });
  } catch {
    // ignore - directory may already exist
  }
}

const program = createProgram(componentFiles, {});
const tc = program.getTypeChecker();

// generate and write document
componentFiles.forEach(cf => {
  const p = path.parse(cf);
  const name = p.name;

  const sourceFile = program.getSourceFile(cf);
  if (!sourceFile) return;

  const doc = parseDoc(sourceFile, tc);
  if (doc.ignored) return;

  if (preview && name) {
    console.log(inspect(doc, false, null, true));
    return;
  }
  if (doc) {
    const result = renderDoc(doc);
    // Output plain Markdown (`.md`): these pages contain no JSX/imports, and Astro's
    // MDX pipeline does not enable GFM tables by default (Markdown does), so `.md`
    // keeps the property tables rendering correctly.
    // Lowercase the filename so its slug matches the lowercased internal links
    // (Starlight routes are case-sensitive; keeping everything lowercase avoids broken links).
    fs.writeFileSync(path.join(dest, `${name.toLowerCase()}.md`), result);
  }
});

if (!preview) {
  console.log(`${componentFiles.length} documents genereted!`);
}
