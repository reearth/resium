import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3 } from "cesium";
import { useState } from "react";

import Viewer from "../Viewer";

import CameraFlyTo from "./CameraFlyTo";

type Story = StoryObj<typeof CameraFlyTo>;

export default {
  title: "CameraFlyTo",
  component: CameraFlyTo,
} as Meta;

export const Basic: Story = {
  args: { duration: 5 },
  render: args => (
    <Viewer full>
      <CameraFlyTo {...args} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
  ),
};

export const Once: Story = {
  args: { duration: 5 },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
};
