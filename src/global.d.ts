declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "react-dom/server.browser" {
  import { renderToStaticMarkup } from "react-dom";
  export { renderToStaticMarkup };
}
