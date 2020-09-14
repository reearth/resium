import React from "react";
import { Meta, Story } from "@storybook/react";
import { Cartesian3 } from "cesium";

import Viewer from "../Viewer";
import Entity from "../Entity";
import { PostProcessStageComposite, Bloom } from ".";
import { BloomProps } from "./Bloom";
import model from "assets/Cesium_Air.glb";

export default {
  title: "PostProcessStageComposite",
  component: PostProcessStageComposite,
} as Meta;

export const BloomStory: Story<BloomProps> = () => (
  <Viewer full>
    <Bloom />
    <Entity
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
      model={{ uri: model }}
      tracked
    />
  </Viewer>
);

BloomStory.storyName = "Bloom";
