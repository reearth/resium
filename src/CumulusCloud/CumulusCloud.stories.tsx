import React from "react";
import { Meta, Story } from "@storybook/react";
import { Cartesian2, Cartesian3 } from "cesium";

import Viewer from "../Viewer";
import CumulusCloud, { CumulusCloudProps } from "./CumulusCloud";
import CloudCollection from "../CloudCollection";
import CameraLookAt from "../CameraLookAt";

export default {
  title: "CumulusCloud",
  component: CumulusCloud,
} as Meta;

export const Basic: Story<CumulusCloudProps> = args => {
  return (
    <Viewer full>
      {args.position && (
        <CameraLookAt target={args.position} offset={new Cartesian3(30, 30, -10)} />
      )}
      <CloudCollection noiseDetail={16} noiseOffset={Cartesian3.ZERO}>
        <CumulusCloud {...args} />
      </CloudCollection>
    </Viewer>
  );
};

Basic.args = {
  show: true,
  position: Cartesian3.fromDegrees(-123.0744619, 44.0503706, 50),
  scale: new Cartesian2(25, 12),
  maximumSize: new Cartesian3(25, 12, 15),
  slice: 0.36,
  brightness: 1.0,
};
