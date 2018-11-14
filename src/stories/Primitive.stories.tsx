import React from "react";
import {
  Cartesian3,
  EllipseGeometry,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
  Material,
  Math as CesiumMath,
  VertexFormat,
} from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Primitive from "../Primitive";

const geometry = new GeometryInstance({
  geometry: new EllipseGeometry({
    center: Cartesian3.fromDegrees(-100.0, 20.0),
    semiMinorAxis: 500000.0,
    semiMajorAxis: 1000000.0,
    rotation: CesiumMath.PI_OVER_FOUR,
    vertexFormat: VertexFormat.POSITION_AND_ST,
  }) as Cesium.Geometry,
  id: "id",
});

const appearance = new EllipsoidSurfaceAppearance({
  material: Material.fromType("Checkerboard"),
});

export default () => {
  storiesOf("Primitive", module).add("default", () => (
    <Viewer full>
      <Primitive geometryInstances={geometry} appearance={appearance} />
    </Viewer>
  ));
};
