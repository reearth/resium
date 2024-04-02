import { Meta, StoryObj } from "@storybook/react";

import Viewer from "../Viewer";

import SkyAtmosphere from "./SkyAtmosphere";

type Story = StoryObj<typeof SkyAtmosphere>;

export default {
  title: "SkyAtmosphere",
  component: SkyAtmosphere,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <SkyAtmosphere {...args} hueShift={1} saturationShift={1} />
    </Viewer>
  ),
};
