import { Meta, StoryObj } from "@storybook/react";
import {
  GeographicTilingScheme,
  WebMapTileServiceImageryProvider as CesiumWebMapTileServiceImageryProvider,
} from "cesium";

import ImageryLayer from "../ImageryLayer";
import Viewer from "../Viewer";

// NASA GIBS (Global Imagery Browse Services) WMTS endpoint
// Serves MODIS Terra True Color at 250m resolution over EPSG:4326
// Documentation: https://nasa.github.io/gibs/docs/access-basics/
const GIBS_URL = "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi";

type Story = StoryObj<typeof ImageryLayer>;

export default {
  title: "WebMapTileServiceImageryProvider",
  component: ImageryLayer,
} as Meta;

export const NasaGibsTrueColor: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          new CesiumWebMapTileServiceImageryProvider({
            url: GIBS_URL,
            layer: "MODIS_Terra_CorrectedReflectance_TrueColor",
            style: "default",
            tileMatrixSetID: "250m",
            format: "image/jpeg",
            tileWidth: 512,
            tileHeight: 512,
            tilingScheme: new GeographicTilingScheme(),
            maximumLevel: 7,
            // GIBS MODIS layers require a TIME dimension in every tile request
            dimensions: { TIME: "2025-01-01" },
          })
        }
      />
    </Viewer>
  ),
};
