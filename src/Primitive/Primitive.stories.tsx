import { Meta, StoryObj } from "@storybook/react";
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

import { events } from "../core/storybook";
import Viewer from "../Viewer";

import Primitive from "./Primitive";

type Story = StoryObj<typeof Primitive>;

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

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <Primitive {...args} geometryInstances={geometry} appearance={appearance} />
    </Viewer>
  ),
};

export const Events: Story = {
  render: args => (
    <Viewer full>
      <Primitive {...args} geometryInstances={geometry} appearance={appearance} {...events} />
    </Viewer>
  ),
};
