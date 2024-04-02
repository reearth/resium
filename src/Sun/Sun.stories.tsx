import { Meta, StoryObj } from "@storybook/react";

import Viewer from "../Viewer";

import Sun from "./Sun";

type Story = StoryObj<typeof Sun>;

export default {
  title: "Sun",
  component: Sun,
} as Meta;

export const Basic: Story = {
  args: { glowFactor: 2, show: true },
  render: args => (
    <Viewer full>
      <Sun {...args} />
    </Viewer>
  ),
};
