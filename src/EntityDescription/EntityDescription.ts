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
`EntityDescription` provides a way to render description of the entity with React.

Its children will be rendered with `ReactDOM.renderToStaticMarkup` as HTML string of the description.

Note: This component depends on `react-dom/server.browser` module.
*/

/*
@scope
EntityDescription is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

const EntityDescription: React.FC = ({ children }) => {
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

export default EntityDescription;
