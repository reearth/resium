import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import ImageryLayerCollection from "../ImageryLayerCollection";
import { action } from "@storybook/addon-actions";

export default () => {
  storiesOf("ImageryLayerCollection", module).add("default", () => (
    <Viewer full>
      <ImageryLayerCollection
        onLayerAdd={action("onLayerAdd")}
        onLayerMove={action("onLayerMove")}
        onLayerRemove={action("onLayerRemove")}
        onLayerShowOrHide={action("onLayerShowOrHide")}
      />
    </Viewer>
  ));
};
