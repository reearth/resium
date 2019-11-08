import Cesium from "cesium";
import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

console.log(Cesium);

(Cesium as any).Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMmMxODRjYy1mYzFiLTQ5MTUtODE1MS02NGNkMzAyNTIyODciLCJpZCI6MTA2OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJhc3NldHMiOlsyLDMsNCwxXSwiaWF0IjoxNTU3MjA1NTM1fQ.5TYPEJKj_JzGX4r_a6GQjwSu7TIW2BIzeaIW8gFLUec";

addParameters({
  options: {
    theme: create({
      base: "dark",
      brandTitle: "Resium",
    }),
  },
});

const req = require.context("../src", true, /(.?stories|story)\.(?:j|t)sx?$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
