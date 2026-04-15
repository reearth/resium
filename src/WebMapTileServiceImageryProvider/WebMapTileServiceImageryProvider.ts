import {
  WebMapTileServiceImageryProvider as CesiumWebMapTileServiceImageryProvider,
  Credit,
  Ellipsoid,
  GetFeatureInfoFormat,
  Rectangle,
  Resource,
  TilingScheme,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent } from "../core";

/*
@summary
`WebMapTileServiceImageryProvider` provides tiled imagery served by WMTS 1.0.0 compliant servers.
Supports HTTP KVP-encoded and RESTful GetTile requests.

This component can be used with the ImageryLayer component to display WMTS imagery in a Cesium scene.
*/

/*
@scope
Inside [ImageryLayer](/components/ImageryLayer) component.
*/

// Since WebMapTileServiceImageryProvider uses a synchronous constructor,
// we manually define the props based on the constructor signature.
export type WebMapTileServiceImageryProviderProps = {
  /** The base URL for the WMTS GetTile operation (for KVP-encoded requests) or the tile-URL template (for RESTful requests). */
  url: Resource | string;
  /** The layer name for WMTS requests. */
  layer: string;
  /** The style name for WMTS requests. */
  style: string;
  /** The identifier of the TileMatrixSet to use for WMTS requests. */
  tileMatrixSetID: string;
  /** The MIME type for images to retrieve from the server. Defaults to 'image/jpeg'. */
  format?: string;
  /** The tiling scheme corresponding to the organization of the tiles in the TileMatrixSet. */
  tilingScheme?: TilingScheme;
  /** The rectangle covered by the layer. */
  rectangle?: Rectangle;
  /** The minimum level-of-detail supported by the imagery provider. */
  minimumLevel?: number;
  /** The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. */
  maximumLevel?: number;
  /** The ellipsoid. If not specified, the WGS84 ellipsoid is used. */
  ellipsoid?: Ellipsoid;
  /** A credit for the data source, which is displayed on the canvas. */
  credit?: Credit | string;
  /** Additional parameters to include in GetTile requests. */
  parameters?: Record<string, string | number | boolean>;
  /** If true, pickFeatures will invoke the GetFeatureInfo service on the WMTS server. */
  enablePickFeatures?: boolean;
  /** The formats in which to try WMTS GetFeatureInfo requests. */
  getFeatureInfoFormats?: GetFeatureInfoFormat[];
  /** The GetFeatureInfo URL of the WMTS service. If not specified, the value of url is used. */
  getFeatureInfoUrl?: Resource | string;
  /** Additional parameters to include in GetFeatureInfo requests. */
  getFeatureInfoParameters?: Record<string, string | number | boolean>;
  /** React children. */
  children?: ReactNode;
  /** Calls when the imagery provider is successfully created. */
  onReady?: (provider: CesiumWebMapTileServiceImageryProvider) => void;
};

const WebMapTileServiceImageryProvider =
  createCesiumComponent<CesiumWebMapTileServiceImageryProvider, WebMapTileServiceImageryProviderProps>(
    {
      name: "WebMapTileServiceImageryProvider",
      create(_context, props) {
        const { onReady, children, ...options } = props;

        const imageryProvider = new CesiumWebMapTileServiceImageryProvider(options);

        if (onReady) {
          onReady(imageryProvider);
        }

        return imageryProvider;
      },
    },
  );

export default WebMapTileServiceImageryProvider;
