// Ref: https://github.com/doczjs/docz/blob/v1.2.0/core/docz-theme-default/src/styles/responsive.ts
import facepaint from "facepaint";

export const breakpoints = {
  mobile: 420,
  tablet: 920,
  desktop: 1120,
};

export const mq = facepaint([
  `@media(min-width: ${breakpoints.mobile}px)`,
  `@media(min-width: ${breakpoints.tablet}px)`,
  `@media(min-width: ${breakpoints.desktop}px)`,
]);
