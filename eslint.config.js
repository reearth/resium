import reearth from "eslint-config-reearth";

export default [
  // Ignore patterns (equivalent to .eslintignore)
  {
    ignores: [
      "node_modules",
      "dist",
      "examples",
      "coverage",
      "docs/**", // Docusaurus docs use CommonJS
      ".storybook/**", // Storybook config
      "**/*.stories.tsx", // Storybook stories
      "src/core/storybook.tsx", // Storybook utility
    ],
  },
  // Base config for all files
  ...reearth(),
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
