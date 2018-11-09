import { configure } from "@storybook/react";

const req = require.context("../src", true, /\.?stories\.(?:j|t)sx?$/);

configure(() => {
  req.keys().forEach(filename => req(filename).default());
}, module);
