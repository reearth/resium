import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";

import ImageryLayerCollection, { ImageryLayerCollectionProps } from "./ImageryLayerCollection";

export default {
  title: "ImageryLayerCollection",
  component: ImageryLayerCollection,
} as Meta;

export const Basic: Story<ImageryLayerCollectionProps> = args => (
  <Viewer full>
    <ImageryLayerCollection
      {...args}
      onLayerAdd={action("onLayerAdd")}
      onLayerMove={action("onLayerMove")}
      onLayerRemove={action("onLayerRemove")}
      onLayerShowOrHide={action("onLayerShowOrHide")}
    />
  </Viewer>
);
