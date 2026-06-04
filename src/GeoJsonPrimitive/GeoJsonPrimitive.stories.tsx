import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import {
  BufferPointMaterial,
  BufferPolygonMaterial,
  BufferPolylineMaterial,
  BufferPrimitive,
  Cartesian3,
  Color,
} from "cesium";
import { useMemo } from "react";

import CameraFlyTo from "../CameraFlyTo";
import Viewer from "../Viewer";

import type { GeoJsonPrimitiveShape } from "./GeoJsonPrimitive";
import GeoJsonPrimitive from "./GeoJsonPrimitive";

type Story = StoryObj<typeof GeoJsonPrimitive>;

export default {
  title: "GeoJsonPrimitive",
  component: GeoJsonPrimitive,
} as Meta;

const inlineGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-95.0, 40.0] },
      properties: { id: "p1" },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-96.0, 39.5],
          [-94.0, 40.5],
        ],
      },
      properties: { id: "l1" },
    },
  ],
};

/**
 * `GeoJsonPrimitive` populates its internal `BufferPoint/Polyline/PolygonCollection`s
 * from the GeoJSON features but does NOT apply default visible styling — points default
 * to ~0px and polygons render with no fill. This helper walks each collection and
 * assigns a visible material per feature. Apply it inside `onReady`.
 */
function applyVisibleStyle(
  primitive: GeoJsonPrimitiveShape,
  opts: {
    pointMaterial?: BufferPointMaterial;
    polylineMaterial?: BufferPolylineMaterial;
    polygonMaterial?: BufferPolygonMaterial;
  },
): void {
  const { pointMaterial, polylineMaterial, polygonMaterial } = opts;
  // Cesium's BufferPrimitiveCollection.get(index, result) writes onto a
  // reusable BufferPrimitive cursor — this is the documented iteration shape.
  const cursor = new BufferPrimitive();
  const collections = [
    [primitive.points, pointMaterial] as const,
    [primitive.polylines, polylineMaterial] as const,
    [primitive.polygons, polygonMaterial] as const,
  ];
  for (const [collection, material] of collections) {
    if (!collection || !material) continue;
    // primitiveCount is the public count getter on BufferPrimitiveCollection —
    // its d.ts surface omits `length`/`size`/array indexing.
    const count = (collection as unknown as { primitiveCount: number }).primitiveCount;
    for (let i = 0; i < count; i++) {
      collection.get(i, cursor);
      cursor.setMaterial(material);
    }
  }
}

/**
 * Loads an inline FeatureCollection (one Point + one LineString) and applies
 * visible materials in `onReady`. Without the post-mount styling, the point
 * would render at default ~0px size and be invisible — `GeoJsonPrimitive`'s
 * Buffer collections do not ship with visible defaults.
 */
export const Inline: Story = {
  render: args => (
    <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 1_000_000)} duration={0} />
      <GeoJsonPrimitive
        {...args}
        data={inlineGeoJson}
        onReady={primitive => {
          action("onReady")(primitive);
          applyVisibleStyle(primitive, {
            pointMaterial: new BufferPointMaterial({
              size: 18,
              color: Color.RED,
              outlineColor: Color.WHITE,
              outlineWidth: 2,
            }),
            polylineMaterial: new BufferPolylineMaterial({
              width: 4,
              color: Color.YELLOW,
            }),
          });
        }}
        onError={action("onError")}
      />
    </Viewer>
  ),
};

/**
 * Loads a GeoJSON FeatureCollection from a **blob URL** generated at story-init
 * time and renders it over the central United States. The blob carries an
 * 11x11 grid of Point features centered on (-95°, 40°) at 0.2° spacing — same
 * URL-fetching codepath as a real HTTPS endpoint, but self-contained so no
 * external service can break this story.
 *
 * The blob URL is memoized so re-renders don't refetch / rebuild the primitive.
 */
export const FromUrl: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => {
      const features = [];
      for (let lon = -96; lon <= -94; lon += 0.2) {
        for (let lat = 39; lat <= 41; lat += 0.2) {
          features.push({
            type: "Feature" as const,
            geometry: { type: "Point" as const, coordinates: [lon, lat] },
            properties: {},
          });
        }
      }
      const fc = { type: "FeatureCollection" as const, features };
      return URL.createObjectURL(
        new Blob([JSON.stringify(fc)], { type: "application/json" }),
      );
    }, []);
    return (
      <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 600_000)} duration={0} />
        <GeoJsonPrimitive
          {...args}
          url={url}
          onReady={primitive => {
            action("onReady")(primitive);
            applyVisibleStyle(primitive, {
              pointMaterial: new BufferPointMaterial({
                size: 14,
                color: Color.CYAN,
                outlineColor: Color.WHITE,
                outlineWidth: 2,
              }),
            });
          }}
          onError={action("onError")}
        />
      </Viewer>
    );
  },
};
