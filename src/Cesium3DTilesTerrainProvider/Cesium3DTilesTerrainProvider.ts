import {
  Cesium3DTilesTerrainProvider as CesiumCesium3DTilesTerrainProvider,
  Credit,
  Ellipsoid,
  Resource,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent } from "../core";

/*
@summary
⚠️ **EXPERIMENTAL** - This component wraps an experimental Cesium API that may change without notice.

`Cesium3DTilesTerrainProvider` loads 3D Tiles as terrain data.

This is an alternative to traditional terrain providers like CesiumTerrainProvider.
Note: Has limitations on the types of 3D Tiles that can be used as terrain.

**This feature is not final and is subject to change without Cesium's standard deprecation policy.**
*/

/*
@scope
Used with the [Globe](/components/Globe) component's `terrainProvider` prop.
*/

// Since Cesium3DTilesTerrainProvider uses static factory methods (fromUrl/fromIonAssetId),
// we manually define the props based on those method signatures
export type Cesium3DTilesTerrainProviderCesiumReadonlyProps = {
  /** The URL of the Cesium 3D Tiles terrain server. */
  url?: Resource | string | Promise<Resource> | Promise<string>;
  /** Request additional lighting information from the server, in the form of per vertex normals if available. */
  requestVertexNormals?: boolean;
  /** Request per tile water masks from the server, if available. */
  requestWaterMask?: boolean;
  /** The ellipsoid. If not specified, the WGS84 ellipsoid is used. */
  ellipsoid?: Ellipsoid;
  /** A credit for the data source, which is displayed on the canvas. */
  credit?: Credit | string;
};

export type Cesium3DTilesTerrainProviderOtherProps = {
  children?: ReactNode;
  /** Calls when the terrain provider is successfully created. */
  onReady?: (terrainProvider: CesiumCesium3DTilesTerrainProvider) => void;
  /** The Ion asset ID to load from Cesium Ion. Alternative to using url. */
  assetId?: number;
  /** The access token for Cesium Ion. Only needed if assetId is provided and different from default. */
  accessToken?: string;
};

export type Cesium3DTilesTerrainProviderProps = Cesium3DTilesTerrainProviderCesiumReadonlyProps &
  Cesium3DTilesTerrainProviderOtherProps;

const Cesium3DTilesTerrainProvider = createCesiumComponent<
  CesiumCesium3DTilesTerrainProvider,
  Cesium3DTilesTerrainProviderProps
>({
  name: "Cesium3DTilesTerrainProvider",
  async create(_context, props) {
    const { onReady, assetId, accessToken, url, children, ...options } = props;

    let terrainProvider: CesiumCesium3DTilesTerrainProvider;

    if (assetId !== undefined) {
      // Load from Cesium Ion
      terrainProvider = await CesiumCesium3DTilesTerrainProvider.fromIonAssetId(
        assetId,
        options,
      );
    } else if (url !== undefined) {
      // Load from URL with provided options
      terrainProvider = await CesiumCesium3DTilesTerrainProvider.fromUrl(url, options);
    } else {
      throw new Error(
        "Cesium3DTilesTerrainProvider requires either 'url' or 'assetId' prop to be provided",
      );
    }

    if (onReady) {
      onReady(terrainProvider);
    }

    return terrainProvider;
  },
});

export default Cesium3DTilesTerrainProvider;
