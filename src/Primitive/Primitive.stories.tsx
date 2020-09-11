import React from "react";
import {
  Cartesian3,
  EllipseGeometry,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
  Material,
  Math as CesiumMath,
  VertexFormat,
  Geometry,
} from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import Primitive, { PrimitiveProps } from "./Primitive";
import { events } from "../core/storybook";

export default {
  title: "Primitive",
  component: Primitive,
} as Meta;

const geometry = new GeometryInstance({
  geometry: new EllipseGeometry({
    center: Cartesian3.fromDegrees(-100.0, 20.0),
    semiMinorAxis: 500000.0,
    semiMajorAxis: 1000000.0,
    rotation: CesiumMath.PI_OVER_FOUR,
    vertexFormat: VertexFormat.POSITION_AND_ST,
  }) as Geometry,
  id: "id",
});

const appearance = new EllipsoidSurfaceAppearance({
  material: Material.fromType("Checkerboard"),
});

export const Basic: Story<PrimitiveProps> = args => (
  <Viewer full>
    <Primitive {...args} geometryInstances={geometry} appearance={appearance} />
  </Viewer>
);

export const Events: Story<PrimitiveProps> = args => (
  <Viewer full>
    <Primitive {...args} geometryInstances={geometry} appearance={appearance} {...events} />
  </Viewer>
);
