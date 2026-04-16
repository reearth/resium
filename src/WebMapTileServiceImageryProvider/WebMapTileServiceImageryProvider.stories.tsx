import { Meta, StoryObj } from "@storybook/react";
import {
  Credit,
  WebMapTileServiceImageryProvider as CesiumWebMapTileServiceImageryProvider,
  WebMercatorTilingScheme,
} from "cesium";

import ImageryLayer from "../ImageryLayer";
import Viewer from "../Viewer";

// ESRI World Imagery — public satellite basemap, no API key or TIME required.
// Uses the GoogleMapsCompatible (EPSG:3857) tile matrix set with standard
// Web Mercator tiling — no custom scheme needed.
const ESRI_WMTS_URL =
  "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS";

type Story = StoryObj<typeof ImageryLayer>;

export default {
  title: "WebMapTileServiceImageryProvider",
  component: ImageryLayer,
} as Meta;

export const EsriWorldImagery: Story = {
  render: () => (
    <Viewer full>
      <ImageryLayer
        imageryProvider={
          new CesiumWebMapTileServiceImageryProvider({
            url: ESRI_WMTS_URL,
            layer: "World_Imagery",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
            tilingScheme: new WebMercatorTilingScheme(),
            maximumLevel: 19,
            credit: new Credit("Powered by Esri"),
          })
        }
      />
    </Viewer>
  ),
};
