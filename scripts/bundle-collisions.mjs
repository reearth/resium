// Detects named class expressions in a bundle that shadow an import alias.
//
// A class that references itself by name compiles to `X = class e {...}`. If
// the minifier picks a name already bound to an import, Webpack resolves the
// self-reference to the import instead of the class — silently `undefined`.
// That shipped in six releases as a crash on `<Viewer>` mount (#806).
//
// Pure functions only, so the CLI in check-bundle.mjs can always run on import
// without the tests having to guard against its process.exit.

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
