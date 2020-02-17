module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>jestSetup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/docs/.docz/"],
};
