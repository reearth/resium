// Fails the build if a named class expression shadows an import alias.
//
// A class that references itself by name compiles to `X = class e {...}`. If
// the minifier picks a name already bound to an import, Webpack resolves the
// self-reference to the import instead of the class — silently `undefined`.
// That shipped in six releases as a crash on `<Viewer>` mount (#806). Source
// tests can't see it, so assert on the build output.

import { readFileSync } from "node:fs";

export const BUNDLES = ["dist/resium.js", "dist/resium.cjs"];

/** Every identifier an import/require is bound to at module scope. */
export function importAliases(source) {
  const aliases = new Set();
  // ESM named: import { a as b, c } from "x"
  for (const [, names] of source.matchAll(/import\s*\{([^}]*)\}\s*from\s*["'][^"']+["']/g)) {
    for (const part of names.split(",")) {
      const name = part.includes(" as ") ? part.split(" as ")[1] : part;
      if (name.trim()) aliases.add(name.trim());
    }
  }
  // ESM default/namespace: import x from "y" / import * as x from "y"
  for (const [, name] of source.matchAll(
    /import\s+(?:\*\s+as\s+)?([A-Za-z_$][\w$]*)\s*(?:,|from)/g,
  )) {
    aliases.add(name);
  }
  // CJS destructured: const { a: b } = require("x")
  for (const [, names] of source.matchAll(/(?:const|let|var)\s*\{([^}]*)\}\s*=\s*require\(/g)) {
    for (const part of names.split(",")) {
      const name = part.includes(":") ? part.split(":")[1] : part;
      if (name.trim()) aliases.add(name.trim());
    }
  }
  // CJS namespace: let e = require("x"), t = require("y")
  for (const [, name] of source.matchAll(/([A-Za-z_$][\w$]*)\s*=\s*require\(/g)) {
    aliases.add(name);
  }
  return aliases;
}

/** Names of named class expressions that shadow an import alias. */
export function findCollisions(source) {
  const aliases = importAliases(source);
  const named = [
    ...source.matchAll(/=\s*class\s+([A-Za-z_$][\w$]*)\s*(?:extends\s+[^{]+?)?\{/g),
  ].map(m => m[1]);
  return [...new Set(named.filter(name => aliases.has(name)))];
}

function main() {
  let failed = false;

  for (const bundle of BUNDLES) {
    let source;
    try {
      source = readFileSync(bundle, "utf8");
    } catch {
      console.error(`check-bundle: ${bundle} not found — run the build first.`);
      failed = true;
      continue;
    }

    const collisions = findCollisions(source);
    if (collisions.length > 0) {
      failed = true;
      console.error(
        `check-bundle: ${bundle} emits a named class expression whose name collides ` +
          `with an import alias: ${collisions.map(c => `\`class ${c}\``).join(", ")}.\n` +
          `  A consumer bundler may resolve the class's self-reference to the import ` +
          `instead of the class (see issue #806).\n` +
          `  Fix at the source: stop referencing the class by name inside its own body — ` +
          `hoist the shared value to a module-level constant.`,
      );
    } else {
      console.log(`check-bundle: ${bundle} ok`);
    }
  }

  if (failed) process.exit(1);
}

// Only run when invoked as a script, so the helpers stay importable from tests.
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  main();
}
