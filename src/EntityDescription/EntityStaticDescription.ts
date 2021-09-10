import { useEffect, FC } from "react";
import { ConstantProperty } from "cesium";

import { useCesium } from "../core";

const { renderToStaticMarkup } = require("react-dom/server.browser");

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
EntityStaticDescription can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once or together with EntityDescription component for each entity.
*/

const EntityStaticDescription: FC = ({ children }) => {
  const { entity } = useCesium();

  useEffect(() => {
    if (!entity || !children) return;
    entity.description = new ConstantProperty(renderToStaticMarkup(children));
    return () => {
      if (!entity) return;
      entity.description = undefined;
    };
  }, [children, entity]);

  return null;
};

export default EntityStaticDescription;
