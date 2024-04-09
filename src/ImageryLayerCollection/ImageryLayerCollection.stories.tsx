import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import Viewer from "../Viewer";

import ImageryLayerCollection from "./ImageryLayerCollection";

type Story = StoryObj<typeof ImageryLayerCollection>;

export default {
  title: "ImageryLayerCollection",
  component: ImageryLayerCollection,
} as Meta;

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <ImageryLayerCollection
        {...args}
        onLayerAdd={action("onLayerAdd")}
        onLayerMove={action("onLayerMove")}
        onLayerRemove={action("onLayerRemove")}
        onLayerShowOrHide={action("onLayerShowOrHide")}
      />
    </Viewer>
  ),
};
