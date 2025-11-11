import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Transforms } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import { events } from "../core/storybook";
import PolylineCollection from "../PolylineCollection";
import Viewer from "../Viewer";

import Polyline from "./Polyline";

type Story = StoryObj<typeof Polyline>;

export default {
  title: "Polyline",
  component: Polyline,
} as Meta;

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
const positions = [
  new Cartesian3(-75, 35, 0),
  new Cartesian3(-125, 35, 0),
  new Cartesian3(-125, 135, 0),
];

export const Basic: Story = {
  args: { width: 10 },
  render: args => (
    <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
  ),
};

export const Events: Story = {
  args: { width: 10 },
  render: args => (
    <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} {...events} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
  ),
};
