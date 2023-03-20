import { Meta, Story } from "@storybook/react";
import { Cartesian3 } from "cesium";

import Entity from "../Entity";
import Viewer from "../Viewer";

import { BloomProps } from "./Bloom";

import { PostProcessStageComposite, Bloom } from ".";

export default {
  title: "PostProcessStageComposite",
  component: PostProcessStageComposite,
} as Meta;

export const BloomStory: Story<BloomProps> = () => (
  <Viewer full>
    <Bloom />
    <Entity
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
      model={{ uri: "Cesium_Air.glb" }}
      tracked
    />
  </Viewer>
);

BloomStory.storyName = "Bloom";
