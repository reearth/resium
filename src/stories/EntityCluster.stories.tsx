import React from "react";
import { storiesOf } from "@storybook/react";
import { Cartesian3 } from "cesium";

import Viewer from "../Viewer";
import EntityCluster from "../EntityCluster";
import CustomDataSource from "../CustomDataSource";
import Entity from "../Entity";

export default () => {
  storiesOf("EntityCluster", module).add("default", () => (
    <Viewer full>
      <CustomDataSource>
        <EntityCluster pixelRange={50} />
        <Entity
          name="Tokyo"
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
          point={{ pixelSize: 10 }}
        />
        <Entity
          name="Osaka"
          position={Cartesian3.fromDegrees(135.3112, 34.4111, 100)}
          point={{ pixelSize: 10 }}
        />
      </CustomDataSource>
    </Viewer>
  ));
};
