import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    name: "Resium",
    theme: themes.dark,
  },
});

const req = require.context("../src", true, /\.?stories\.(?:j|t)sx?$/);

configure(() => {
  req.keys().forEach(filename => req(filename).default());
}, module);
