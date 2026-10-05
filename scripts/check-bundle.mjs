// Fails the build if a bundle contains a named class expression that shadows an
// import alias — see bundle-collisions.mjs and #806. Run from postbuild.
//
// No "am I the entrypoint?" guard on purpose: this file is only ever executed,
// never imported, and every idiom for that check has a silent-failure mode
// (percent-encoded paths, Windows separators, symlinked checkouts) that would
// skip the check while still exiting 0.

import { readFileSync } from "node:fs";

import { findCollisions } from "./bundle-collisions.mjs";

const BUNDLES = ["dist/resium.js", "dist/resium.cjs"];

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
