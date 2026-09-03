import { describe, expect, it } from "vitest";

import { findCollisions, importAliases } from "./bundle-collisions.mjs";

// Fixtures are the real shapes that shipped broken in #806. Without these, a
// regression in the matching would let the guard pass silently.
describe("importAliases", () => {
  it("collects ESM named import aliases", () => {
    const aliases = importAliases(
      `import { createContext as e, forwardRef as t, useRef as l } from "react"`,
    );
    expect(aliases).toContain("e");
    expect(aliases).toContain("t");
    expect(aliases).toContain("l");
  });

  it("collects CJS namespace requires", () => {
    const aliases = importAliases(`let e=require("react"),t=require("cesium");`);
    expect(aliases).toContain("e");
    expect(aliases).toContain("t");
  });

  it("collects CJS destructured requires", () => {
    expect(importAliases(`const { useRef: r } = require("react");`)).toContain("r");
  });
});

describe("findCollisions", () => {
  it("flags the ESM shape that shipped in #806", () => {
    const source = `import { createContext as e } from "react";
      let Xe = class e { static eventTypeMap = { onClick: 1 }; };`;
    expect(findCollisions(source)).toEqual(["e"]);
  });

  it("flags the CJS shape that shipped in #806", () => {
    const source = `let e=require("react");var v=class e{static eventTypeMap={onClick:1}};`;
    expect(findCollisions(source)).toEqual(["e"]);
  });

  it("passes a named class expression that shadows nothing", () => {
    const source = `import { createContext as e } from "react";
      let Xe = class Inner { static map = {}; };`;
    expect(findCollisions(source)).toEqual([]);
  });

  it("passes the fixed shape — a module-scope constant, no named class", () => {
    const source = `import { createContext as e } from "react";
      let Xe = { onClick: 1 }; let Ye = class { commit() { return Xe.onClick; } };`;
    expect(findCollisions(source)).toEqual([]);
  });

  it("still flags a collision on a class that extends another", () => {
    const source = `import { Component as e } from "react";
      let A = class e extends Base { static m = {}; };`;
    expect(findCollisions(source)).toEqual(["e"]);
  });
});
