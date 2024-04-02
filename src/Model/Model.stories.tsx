import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Transforms, Cartesian3, Resource } from "cesium";

import CameraFlyTo from "../CameraFlyTo";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import Model from "./Model";

const origin = Cartesian3.fromDegrees(-95.0, 40.0, 200000.0);
const cameraDest = Cartesian3.fromDegrees(-95.0, 40.0, 210000);
const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);

type Story = StoryObj<typeof Model>;

export default {
  title: "Model",
  component: Model,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <CameraFlyTo destination={cameraDest} duration={0} />
      <Model
        {...args}
        url="Cesium_Air.glb"
        modelMatrix={modelMatrix}
        minimumPixelSize={128}
        maximumScale={20000}
        onReady={action("onReady")}
        {...events}
      />
    </Viewer>
  ),
};

export const FromPromiseResource: Story = {
  render: args => (
    <Viewer full>
      <CameraFlyTo destination={cameraDest} duration={0} />
      <Model
        {...args}
        url={Promise.resolve(new Resource("Cesium_Air.glb"))}
        modelMatrix={modelMatrix}
        minimumPixelSize={128}
        maximumScale={20000}
        onReady={action("onReady")}
        {...events}
      />
    </Viewer>
  ),
};
