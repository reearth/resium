import { configure, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

const req = require.context("../src", true, /\.?stories\.js$/);

setAddon(JSXAddon);

configure(() => {
  req.keys().forEach(filename => req(filename).default());
}, module);
