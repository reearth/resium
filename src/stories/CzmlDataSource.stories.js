import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import CzmlDataSource from "../CzmlDataSource";

const czml = [{
  id: "document",
  name: "CZML",
  version: "1.0"
},
{
  id: "shape1",
  name: "TOKYO",
  position: {
    cartographicDegrees: [139.77, 35.68, 20000.0]
  },
  ellipse: {
    semiMinorAxis: 50000.0,
    semiMajorAxis: 50000.0,
    height: 20000,
    material: {
      solidColor: {
        color: {
          rgba: [0, 255, 0, 100]
        }
      }
    },
    outline: true,
    outlineColor: {
      rgba: [255, 0, 0, 0]
    }
  }
}];

export default () => {

  storiesOf("CzmlDataSource", module)
    .add("default", () => (
      <Viewer full>
        <CzmlDataSource
          czml={czml} />
      </Viewer>
    ));

};
