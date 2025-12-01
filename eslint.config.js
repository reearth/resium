import reearth from "eslint-config-reearth";

export default [
  // Ignore patterns (equivalent to .eslintignore)
  {
    ignores: [
      "node_modules",
      "dist",
      "examples",
      "coverage",
      "docs/build",
      "docs/static",
      "docs/.docusaurus", // Generated Docusaurus files
    ],
  },
  // Base config for all files
  ...reearth(),
];
