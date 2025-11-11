import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { GeoJsonDataSource } from "cesium";

import { events } from "../core/storybook";
import Viewer from "../Viewer";

import CzmlDataSource from "./CzmlDataSource";

type Story = StoryObj<typeof CzmlDataSource>;

export default {
  title: "CzmlDataSource",
  component: CzmlDataSource,
} as Meta;

const czml = [
  {
    id: "document",
    name: "CZML",
    version: "1.0",
  },
  {
    id: "shape1",
    name: "TOKYO",
    position: {
      cartographicDegrees: [139.77, 35.68, 20000.0],
    },
    ellipse: {
      semiMinorAxis: 50000.0,
      semiMajorAxis: 50000.0,
      height: 20000,
      material: {
        solidColor: {
          color: {
            rgba: [0, 255, 0, 100],
          },
        },
      },
      outline: true,
      outlineColor: {
        rgba: [255, 0, 0, 0],
      },
    },
  },
];

const onLoadAction = action("onLoad");

const onLoad = (g: GeoJsonDataSource) => {
  // You can process the data source here
  g.entities.values[0].name = "TOKYO!";
  onLoadAction(g);
};

export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      <CzmlDataSource
        {...args}
        data={czml}
        onLoad={onLoad}
        onError={action("onError")}
        {...events}
      />
    </Viewer>
  ),
};
