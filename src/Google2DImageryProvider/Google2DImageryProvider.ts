import {
  Google2DImageryProvider as CesiumGoogle2DImageryProvider,
  Credit,
  Ellipsoid,
  Rectangle,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent } from "../core";

/*
@summary
`Google2DImageryProvider` provides 2D satellite imagery from Google Maps tile services.

This component loads Google 2D imagery asynchronously and can be used with the ImageryLayer component.
Google 2D Tiles can only be used with the Google geocoder.

Note: Requires Google API key. See Google Maps documentation for details.
*/

/*
@scope
Inside [ImageryLayer](/components/ImageryLayer) component.
*/

// Since Google2DImageryProvider uses static factory methods (fromUrl/fromIonAssetId),
// we manually define the props based on those method signatures
export type Google2DImageryProviderCesiumReadonlyProps = {
  /** The map type of the Google map imagery. Valid options are satellite, terrain, and roadmap. */
  mapType?: "satellite" | "terrain" | "roadmap";
  /** An IETF language tag that specifies the language used to display information on the tiles. */
  language?: string;
  /** A Common Locale Data Repository region identifier (two uppercase letters) that represents the physical location of the user. */
  region?: string;
  /** Returns a transparent overlay map with the specified layerType. */
  overlayLayerType?: "layerRoadmap" | "layerStreetview" | "layerTraffic";
  /** An array of JSON style objects that specify the appearance and detail level of map features. */
  styles?: any;
  /** The ellipsoid. If not specified, the default ellipsoid is used. */
  ellipsoid?: Ellipsoid;
  /** The minimum level-of-detail supported by the imagery provider. */
  minimumLevel?: number;
  /** The maximum level-of-detail supported by the imagery provider. */
  maximumLevel?: number;
  /** The rectangle, in radians, covered by the image. */
  rectangle?: Rectangle;
  /** A credit for the data source, which is displayed on the canvas. */
  credit?: Credit | string;
};

export type Google2DImageryProviderOtherProps = {
  children?: ReactNode;
  /** Calls when the imagery provider is successfully created. */
  onReady?: (imageryProvider: CesiumGoogle2DImageryProvider) => void;
  /** The Ion asset ID to load from Cesium Ion. Alternative to using mapType/key. */
  assetId?: string;
  /** The access token for Cesium Ion. Only needed if assetId is provided and different from default. */
  accessToken?: string;
  /** The API key to access Google 2D Tiles. If not provided, uses GoogleMaps.defaultApiKey. */
  key?: string;
};

export type Google2DImageryProviderProps = Google2DImageryProviderCesiumReadonlyProps &
  Google2DImageryProviderOtherProps;

const Google2DImageryProvider = createCesiumComponent<
  CesiumGoogle2DImageryProvider,
  Google2DImageryProviderProps
>({
  name: "Google2DImageryProvider",
  async create(_context, props) {
    const { onReady, assetId, accessToken, key, children, ...options } = props;

    let imageryProvider: CesiumGoogle2DImageryProvider;

    if (assetId !== undefined) {
      // Load from Cesium Ion
      const ionOptions: any = { ...options, assetId };
      if (accessToken !== undefined) {
        ionOptions.accessToken = accessToken;
      }
      imageryProvider = await CesiumGoogle2DImageryProvider.fromIonAssetId(ionOptions);
    } else {
      // Load from URL with provided options
      const urlOptions: any = { ...options };
      if (key !== undefined) {
        urlOptions.key = key;
      }
      imageryProvider = await CesiumGoogle2DImageryProvider.fromUrl(urlOptions);
    }

    if (onReady) {
      onReady(imageryProvider);
    }

    return imageryProvider;
  },
});

export default Google2DImageryProvider;
