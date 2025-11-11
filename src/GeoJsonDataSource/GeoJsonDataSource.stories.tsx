import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Color } from "cesium";

import { events } from "../core/storybook";
import Viewer from "../Viewer";

import GeoJsonDataSource from "./GeoJsonDataSource";

type Story = StoryObj<typeof GeoJsonDataSource>;

export default {
  title: "GeoJsonDataSource",
  component: GeoJsonDataSource,
} as Meta;

const data = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};

const onLoadAction = action("onLoad");

export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      <GeoJsonDataSource
        {...args}
        data={data}
        markerColor={Color.RED}
        onLoad={g => {
          // You can process the data source here
          g.entities.values[0].name = "Coors Field!";
          onLoadAction(g);
        }}
        onError={action("onError")}
        {...events}
      />
    </Viewer>
  ),
};
