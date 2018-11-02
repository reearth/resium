import React from "react";
import { Cartesian3, Color } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import CustomDataSource from "../CustomDataSource";
import Entity from "../Entity";

export default () => {
  storiesOf("CustomDataSource", module).add("default", () => (
    <Viewer full>
      <CustomDataSource name="custom">
        <Entity
          name="added to custom data source"
          description="test"
          position={Cartesian3.fromDegrees(-74.0707383, 41.7117244, 100)}
          point={{ pixelSize: 10, color: Color.RED }}
        />
      </CustomDataSource>
      <CustomDataSource name="hidden" show={false}>
        <Entity
          name="added to custom data source but hidden"
          description="test"
          position={Cartesian3.fromDegrees(-74.0707383, 39.7117244, 100)}
          point={{ pixelSize: 10, color: Color.YELLOW }}
        />
      </CustomDataSource>
      <Entity
        name="added to default data source"
        description="test"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        point={{ pixelSize: 10 }}
      />
    </Viewer>
  ));
};
