import { Meta, StoryObj } from "@storybook/react";
import { Credit, WebMapTileServiceImageryProvider as CesiumWebMapTileServiceImageryProvider } from "cesium";

import ImageryLayer from "../ImageryLayer";
import Viewer from "../Viewer";

// U.S. Geological Survey National Map — shaded relief with bathymetry
// Public domain, global coverage, no API key or TIME dimension required.
// This endpoint is also used in Cesium's own official documentation examples.
const USGS_URL =
  "https://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/WMTS";

type Story = StoryObj<typeof ImageryLayer>;

export default {
  title: "WebMapTileServiceImageryProvider",
  component: ImageryLayer,
} as Meta;

export const UsgsNationalMapShadedRelief: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          new CesiumWebMapTileServiceImageryProvider({
            url: USGS_URL,
            layer: "USGSShadedReliefOnly",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "default028mm",
            maximumLevel: 19,
            credit: new Credit("U. S. Geological Survey"),
          })
        }
      />
    </Viewer>
  ),
};
