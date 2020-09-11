import React, { useState } from "react";
import { Cartesian3 } from "cesium";
import { Story, Meta } from "@storybook/react";

import Viewer from "../Viewer";
import CameraFlyTo, { CameraFlyToProps } from "./CameraFlyTo";

export default {
  title: "CameraFlyTo",
  component: CameraFlyTo,
} as Meta;

export const Basic: Story<CameraFlyToProps> = args => (
  <Viewer full>
    <CameraFlyTo {...args} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
  </Viewer>
);

Basic.args = { duration: 5 };

export const Once: Story<CameraFlyToProps> = args => {
  const [once, setOnce] = useState(true);
  return (
    <Viewer full>
      <button
        style={{ position: "absolute", top: "0", left: "0" }}
        onClick={() => setOnce(o => !o)}>
        Once: {once.toString()}
      </button>
      <CameraFlyTo
        {...args}
        duration={5}
        destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        once={once}
      />
    </Viewer>
  );
};

Once.args = { duration: 5 };
