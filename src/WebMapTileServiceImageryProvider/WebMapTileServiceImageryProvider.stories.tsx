import { Meta, StoryObj } from "@storybook/react";
import {
  Cartesian2,
  Cartographic,
  GeographicTilingScheme,
  Math as CesiumMath,
  Rectangle,
  WebMapTileServiceImageryProvider as CesiumWebMapTileServiceImageryProvider,
} from "cesium";

import ImageryLayer from "../ImageryLayer";
import Viewer from "../Viewer";

// NASA GIBS (Global Imagery Browse Services) WMTS endpoint
// Serves MODIS Terra True Color at 250m resolution over EPSG:4326
// Documentation: https://nasa.github.io/gibs/docs/access-basics/
const GIBS_URL = "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi";

// GIBS 250m EPSG:4326 uses a non-standard tile count progression that does not
// follow powers-of-2 doubling. Cesium's built-in GeographicTilingScheme cannot
// represent it — we must override getNumberOfXTilesAtLevel, tileXYToRectangle,
// and positionToTileXY with the GIBS-specific values.
// Source: https://github.com/nasa-gibs/gibs-web-examples/blob/main/examples/cesium/gibs.js
const GIBS_LEVELS = [
  { width: 2, height: 1, resolution: 0.009817477042468103 },
  { width: 3, height: 2, resolution: 0.004908738521234052 },
  { width: 5, height: 3, resolution: 0.002454369260617026 },
  { width: 10, height: 5, resolution: 0.001227184630308513 },
  { width: 20, height: 10, resolution: 0.0006135923151542565 },
  { width: 40, height: 20, resolution: 0.00030679615757712823 },
  { width: 80, height: 40, resolution: 0.00015339807878856412 },
  { width: 160, height: 80, resolution: 0.00007669903939428206 },
  { width: 320, height: 160, resolution: 0.00003834951969714103 },
] as const;

// The tilingScheme geometry is computed with 320 "virtual" pixels per tile.
// (tileWidth/tileHeight on the imagery provider is the actual image size = 256.)
const GIBS_TILE_PIXELS = 320;

function createGibsEpsg4326TilingScheme(): GeographicTilingScheme {
  // Start from a base GeographicTilingScheme and override the four geometry
  // methods so Cesium uses GIBS's actual tile layout instead of standard 2× doubling.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scheme = new GeographicTilingScheme() as any;
  const rect = Rectangle.MAX_VALUE;

  scheme.getNumberOfXTilesAtLevel = (level: number) => GIBS_LEVELS[level]?.width ?? 2;
  scheme.getNumberOfYTilesAtLevel = (level: number) => GIBS_LEVELS[level]?.height ?? 1;

  scheme.tileXYToRectangle = (x: number, y: number, level: number, result?: Rectangle): Rectangle => {
    const { resolution } = GIBS_LEVELS[level];
    const tileSizeRad = resolution * GIBS_TILE_PIXELS;
    const west = x * tileSizeRad + rect.west;
    const east = (x + 1) * tileSizeRad + rect.west;
    const north = rect.north - y * tileSizeRad;
    const south = rect.north - (y + 1) * tileSizeRad;
    if (!result) result = new Rectangle(0, 0, 0, 0);
    result.west = west;
    result.south = south;
    result.east = east;
    result.north = north;
    return result;
  };

  scheme.positionToTileXY = (
    position: Cartographic,
    level: number,
    result?: Cartesian2,
  ): Cartesian2 | undefined => {
    if (!Rectangle.contains(rect, position)) return undefined;
    const { width, height, resolution } = GIBS_LEVELS[level];
    const tileSizeRad = resolution * GIBS_TILE_PIXELS;
    let longitude = position.longitude;
    if (rect.east < rect.west) longitude += CesiumMath.TWO_PI;
    let x = ((longitude - rect.west) / tileSizeRad) | 0;
    if (x >= width) x = width - 1;
    let y = ((rect.north - position.latitude) / tileSizeRad) | 0;
    if (y >= height) y = height - 1;
    if (!result) result = new Cartesian2(0, 0);
    result.x = x;
    result.y = y;
    return result;
  };

  return scheme as GeographicTilingScheme;
}

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
            style: "",
            tileMatrixSetID: "250m",
            format: "image/jpeg",
            tileWidth: 256,
            tileHeight: 256,
            tilingScheme: createGibsEpsg4326TilingScheme(),
            maximumLevel: 8,
            // GIBS MODIS layers are daily products and require a TIME dimension
            dimensions: { TIME: "2025-01-01" },
          })
        }
      />
    </Viewer>
  ),
};
