import { GeoJsonPrimitive as CesiumGeoJsonPrimitive, Resource } from "cesium";

import type { EventProps, PickCesiumProps, SuspenseProps } from "../core";
import { createCesiumComponent, useSuspendedResource } from "../core";

// Cesium 1.142 ships `GeoJsonPrimitive` as @experimental and its .d.ts omits the
// runtime instance properties (notably `show`) from the class shape. Augment
// locally so PickCesiumProps can reflect `show` as a live wrapper prop.
type GeoJsonPrimitiveShape = CesiumGeoJsonPrimitive & { show: boolean };

/*
@summary
`GeoJsonPrimitive` is a high-throughput companion to `GeoJsonDataSource` that
loads GeoJSON directly into `BufferPointCollection`/`BufferPolylineCollection`/
`BufferPolygonCollection`, bypassing the entity/DataSource layer.

This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A GeoJsonPrimitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type GeoJsonPrimitiveCesiumProps = PickCesiumProps<
  GeoJsonPrimitiveShape,
  typeof cesiumProps
>;

export type GeoJsonPrimitiveCesiumReadonlyProps = {
  /** Ellipsoid used to project GeoJSON coordinates. Fixed at creation time. */
  ellipsoid?: ConstructorParameters<typeof CesiumGeoJsonPrimitive>[0] extends infer O
    ? O extends { ellipsoid?: infer E }
      ? E
      : never
    : never;
  /** Whether features in the primitive can be picked. Fixed at creation time. */
  allowPicking?: boolean;
  /** Factory invoked to build the picked-object payload. Fixed at creation time. */
  pickObjectFactory?: ConstructorParameters<typeof CesiumGeoJsonPrimitive>[0] extends infer O
    ? O extends { pickObjectFactory?: infer F }
      ? F
      : never
    : never;
};

export type GeoJsonPrimitiveOtherProps = EventProps<unknown> &
  SuspenseProps & {
    /** URL to fetch GeoJSON from. Mutually exclusive with `data` — if both are set, `url` wins. */
    url?: string | Resource;
    /** Inline GeoJSON FeatureCollection. Mutually exclusive with `url`. */
    data?: object;
    /** Fires once the primitive is constructed and added to the scene. */
    onReady?: (primitive: GeoJsonPrimitiveShape) => void;
    /** Fires if `fromUrl` rejects or the inline GeoJSON fails to parse. */
    onError?: (err: unknown) => void;
  };

export type GeoJsonPrimitiveProps = GeoJsonPrimitiveCesiumProps &
  GeoJsonPrimitiveCesiumReadonlyProps &
  GeoJsonPrimitiveOtherProps;

const cesiumProps = ["show"] as const;

const cesiumReadonlyProps = ["ellipsoid", "allowPicking", "pickObjectFactory"] as const;

export const otherProps = ["url", "data", "onReady", "onError", "suspense", "cacheKey"] as const;

const useResource = (
  props: GeoJsonPrimitiveProps,
): Partial<GeoJsonPrimitiveProps> | undefined => {
  const resolved = useSuspendedResource("geojson-primitive", props.url ?? props.data, props, url =>
    Resource.fetchJson({ url }),
  );
  return resolved ? { data: resolved as object } : undefined;
};

const GeoJsonPrimitive = createCesiumComponent<GeoJsonPrimitiveShape, GeoJsonPrimitiveProps>({
  name: "GeoJsonPrimitive",
  async create(context, props) {
    if (!context.primitiveCollection) return;

    const { url, data, ellipsoid, allowPicking, pickObjectFactory, show, onReady, onError } = props;

    let element: GeoJsonPrimitiveShape;
    try {
      if (url) {
        element = (await (CesiumGeoJsonPrimitive as unknown as {
          fromUrl: (
            url: string | Resource,
            options?: Record<string, unknown>,
          ) => Promise<CesiumGeoJsonPrimitive>;
        }).fromUrl(url, { ellipsoid, allowPicking, pickObjectFactory, show })) as GeoJsonPrimitiveShape;
      } else if (data) {
        element = new CesiumGeoJsonPrimitive({
          geoJson: data,
          ellipsoid,
          allowPicking,
          pickObjectFactory,
          show,
        } as ConstructorParameters<typeof CesiumGeoJsonPrimitive>[0]) as GeoJsonPrimitiveShape;
      } else {
        return;
      }
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
      // PrimitiveCollection.remove() handles cleanup; GeoJsonPrimitive (Cesium 1.142,
      // experimental) does not expose an explicit destroy()/isDestroyed() surface in
      // its d.ts.
      context.primitiveCollection.remove(element);
    }
  },
  useResource,
  cesiumProps,
  cesiumReadonlyProps,
  otherProps,
  useCommonEvent: true,
});

export default GeoJsonPrimitive;
