import type { Rectangle, Resource, Cesium3DTileset } from "cesium";
import { MVTDataProvider as CesiumMVTDataProvider } from "cesium";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent } from "../core";

// Cesium 1.142 ships `MVTDataProvider` as @experimental and its .d.ts exposes
// only the static `fromUrl` (whose return type is incorrectly typed as `void`).
// At runtime the class has `show`, `tileset`, `update(frameState)`, `isDestroyed`,
// and `destroy` — see node_modules/@cesium/engine/Source/Scene/MVTDataProvider.js
// and its parent UrlTemplate3DTilesDataProvider.js. Augment locally so the
// wrapper can attach the provider to the primitive collection, react to `show`
// changes, and clean up on unmount.
export type MVTDataProviderShape = CesiumMVTDataProvider & {
  show: boolean;
  readonly tileset: Cesium3DTileset | undefined;
  update: (frameState: unknown) => void;
  isDestroyed: () => boolean;
  destroy: () => void;
};

/*
@summary
`MVTDataProvider` loads Mapbox Vector Tiles (MVT) as runtime-generated 3D Tiles.

Despite the "DataProvider" name, this class is **not** an `ImageryProvider` or
`TerrainProvider`. It implements its own `update(frameState)` and attaches
directly to `Scene#primitives`, like a `Cesium3DTileset`. Use it as a
top-level child of `<Viewer>`/`<CesiumWidget>`, **not** as a prop on an
`<ImageryLayer>`.

This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
An MVTDataProvider object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type MVTDataProviderCesiumProps = PickCesiumProps<
  MVTDataProviderShape,
  typeof cesiumProps
>;

export type MVTDataProviderCesiumReadonlyProps = {
  /** Minimum zoom level represented in the generated tileset. Fixed at creation time. */
  minZoom?: number;
  /** Maximum zoom level represented in the generated tileset. Fixed at creation time. */
  maxZoom?: number;
  /** Optional geographic extent (radians) constraining the generated tile tree. Fixed at creation time. */
  extent?: Rectangle;
  /** MVT property name to use as feature ID. Fixed at creation time. */
  featureIdProperty?: string;
};

export type MVTDataProviderOtherProps = {
  /** Required URL template containing `{z}`/`{x}`/`{y}` placeholders. */
  url: string | Resource;
  /** Fires once `fromUrl` resolves. Reach `provider.tileset` (or call `getTileset(provider)`) here to apply clipping/styling. */
  onReady?: (provider: MVTDataProviderShape) => void;
  /** Fires if `fromUrl` rejects. */
  onError?: (err: unknown) => void;
};

export type MVTDataProviderProps = MVTDataProviderCesiumProps &
  MVTDataProviderCesiumReadonlyProps &
  MVTDataProviderOtherProps;

const cesiumProps = ["show"] as const;

const cesiumReadonlyProps = ["minZoom", "maxZoom", "extent", "featureIdProperty"] as const;

// `url` is a user-supplied prop (not a real Cesium property), but treated as
// read-only so changing it at runtime triggers a destroy+recreate.
const cesiumReadonlyPropsWithUrl = [...cesiumReadonlyProps, "url"] as const;

export const otherProps = ["url", "onReady", "onError"] as const;

const MVTDataProvider = createCesiumComponent<MVTDataProviderShape, MVTDataProviderProps>({
  name: "MVTDataProvider",
  async create(context, props) {
    if (!context.primitiveCollection) return;

    const { url, minZoom, maxZoom, extent, featureIdProperty, onReady, onError } = props;
    let element: MVTDataProviderShape;
    try {
      // Cesium 1.142's MVTDataProvider.fromUrl is typed `void` in the d.ts.
      // At runtime it returns Promise<MVTDataProvider>. Cast to the augmented shape.
      element = await (CesiumMVTDataProvider.fromUrl(url, {
        minZoom,
        maxZoom,
        extent,
        featureIdProperty,
      }) as unknown as Promise<MVTDataProviderShape>);
      onReady?.(element);
    } catch (e) {
      onError?.(e);
      return;
    }

    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    // Explicit destroy guards the edge case where the provider is mounted into
    // a PrimitiveCollection with destroyPrimitives=false (in which case
    // remove() does not call destroy()). isDestroyed/destroy are part of the
    // augmented shape and present at runtime via UrlTemplate3DTilesDataProvider.
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps: cesiumReadonlyPropsWithUrl,
  otherProps,
});

export default MVTDataProvider;

/**
 * Typed accessor for the internal `Cesium3DTileset` that an `MVTDataProvider`
 * generates. Use inside `onReady` (or via a ref after mount) to apply clipping,
 * styling, or to call `zoomTo` on the tileset.
 */
export const getTileset = (provider: MVTDataProviderShape): Cesium3DTileset | undefined =>
  provider.tileset;
