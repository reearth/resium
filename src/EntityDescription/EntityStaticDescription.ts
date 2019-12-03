import React, { useEffect } from "react";
import { ConstantProperty } from "cesium";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { renderToStaticMarkup } = require("react-dom/server.browser");
// WORKAROUND: import { renderToStaticMarkup } from "react-dom/server.browser";

import { useCesium } from "../core/context";
import { Entity } from "cesium";

// @noCesiumElement

/*
@summary
`EntityStaticDescription` provides a way to render description of the entity with React.

Its children will be rendered with `ReactDOM.renderToStaticMarkup` as HTML string of the description.

- Note: This component depends on `react-dom/server.browser` module.
- Note: Cannot use any event or dynamic state inside children of this component, because the content will be rendered as a static HTML string.
*/

/*
@scope
EntityStaticDescription is available only inside [Entity](/components/Entity) components,
and can not be used more than once or together with EntityDescription component for each entity.
*/

const EntityStaticDescription: React.FC = ({ children }) => {
  const entity = useCesium<{ entity?: Entity }>().entity;

  useEffect(() => {
    if (!entity || !children) return;
    entity.description = new ConstantProperty(renderToStaticMarkup(children));
    return () => {
      if (!entity) return;
      (entity.description as Cesium.Property | undefined) = undefined;
    };
  }, [children, entity]);

  return null;
};

export default EntityStaticDescription;
