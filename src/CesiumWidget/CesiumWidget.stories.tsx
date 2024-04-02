import { Meta, StoryObj } from "@storybook/react";

import { events } from "../core/storybook";

import CesiumWidget from "./CesiumWidget";

type Story = StoryObj<typeof CesiumWidget>;

export default {
  title: "CesiumWidget",
  component: CesiumWidget,
} as Meta;

export const Basic: Story = {
  render: args => <CesiumWidget {...args} full />,
};

export const Events: Story = {
  render: args => <CesiumWidget {...args} full {...events} />,
};
