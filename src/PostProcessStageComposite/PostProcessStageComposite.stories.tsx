import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3 } from "cesium";

import Entity from "../Entity";
import Viewer from "../Viewer";

import { PostProcessStageComposite, Bloom } from ".";

type Story = StoryObj<typeof PostProcessStageComposite>;

export default {
  title: "PostProcessStageComposite",
  component: PostProcessStageComposite,
} as Meta;

export const BloomStory: Story = {
  storyName: "Bloom",
  render: () => (
    <Viewer full>
      <Bloom />
      <Entity
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        model={{ uri: "Cesium_Air.glb" }}
        tracked
      />
    </Viewer>
  ),
};
