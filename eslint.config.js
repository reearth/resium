import reearth from "eslint-config-reearth";

export default [
  // Ignore patterns (equivalent to .eslintignore)
  {
    ignores: [
      "node_modules",
      "dist",
      "examples",
      "coverage",
      ".worktrees/**", // Git worktrees
      ".claude/**", // Claude session files (including .claude/worktrees/)
      "docs/**", // Docusaurus docs use CommonJS
      "storybook-static/**", // Storybook/VRT build output
      "vrt/**", // VRT snapshots and diff output
      ".storybook/**", // Storybook config
      "**/*.stories.tsx", // Storybook stories
      "src/core/storybook.tsx", // Storybook utility
    ],
  },
  // Base config for all files
  ...reearth(),
  // Global rule overrides
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      // React Compiler rules (eslint-plugin-react-hooks v7) assume pure,
      // immutable components. Resium is a thin imperative wrapper around
      // Cesium: it mutates Cesium objects in place and exposes elements via
      // refs by design, so these rules don't apply. The classic hooks rules
      // (rules-of-hooks, exhaustive-deps) stay enabled.
      "react-hooks/immutability": "off",
      "react-hooks/refs": "off",
      "react-hooks/preserve-manual-memoization": "off",
    },
  },
  // Override for test files - allow {} type in type tests
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
    },
  },
];
