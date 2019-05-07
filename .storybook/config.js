import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

addParameters({
  options: {
    theme: create({
      base: "dark",
      brandTitle: "Resium",
    }),
  },
});

const req = require.context("../src", true, /\.?stories\.(?:j|t)sx?$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
