import type {
  BufferPolygonMaterial,
  TypedArray} from "cesium";
import {
  BufferPolygon as CesiumBufferPolygon
} from "cesium";

import { createCesiumComponent } from "../core";

/*
@summary
`BufferPolygon` is a single polygon primitive inside a `BufferPolygonCollection`.
Positions, holes, triangles, and material are applied via setter methods (flyweight pattern).

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Only inside [BufferPolygonCollection](/components/BufferPolygonCollection) component.
*/

export type BufferPolygonProps = {
  /** The vertex positions of the polygon as a typed array. */
  positions?: TypedArray;
  /** The hole indices of the polygon as a typed array. */
  holes?: TypedArray;
  /** The triangle indices of the polygon as a typed array. */
  triangles?: TypedArray;
  /** The material for the polygon. */
  material?: BufferPolygonMaterial;
  /** Whether the polygon is visible. */
  show?: boolean;
  /** A feature identifier for picking. */
  featureId?: number;
  /**
   * Custom object returned by `scene.pick` for this polygon, in place of
   * Cesium's default `{ collection, index, primitive }` pick object. Fixed
   * at creation time: Cesium locks it once the polygon has been rendered. Only
   * returned when the parent collection sets `allowPicking`.
   *
   * Inside a `Viewer`, give the object an `id` (or `primitive`) property and
   * keep your data there, e.g. `{ id: myRecord }`: Cesium's built-in Viewer
   * click handler reads `picked.id ?? picked.primitive.id` and throws on an
   * object that has neither.
   */
  pickObject?: any;
};

const cesiumProps = ["show", "featureId"] as const;

const BufferPolygon = createCesiumComponent<CesiumBufferPolygon, BufferPolygonProps>({
  name: "BufferPolygon",
  create(context, props) {
    if (!context.bufferPolygonCollection) return;
    // add() requires a result BufferPolygon instance (flyweight pattern)
    const result = new CesiumBufferPolygon();
    const element = context.bufferPolygonCollection.add(
      {
        show: props.show,
        positions: props.positions,
        holes: props.holes,
        triangles: props.triangles,
        material: props.material,
        pickObject: props.pickObject,
      },
      result,
    );
    // featureId is not in BufferPolygonOptions, set directly after add
    if (props.featureId !== undefined) element.featureId = props.featureId;
    return element;
  },
  destroy(element) {
    // BufferPolygonCollection has no remove() — it uses a fixed-size flyweight pattern.
    // Hide the polygon when the React component unmounts.
    element.show = false;
  },
  update(element, props, prevProps) {
    if (props.positions !== prevProps.positions && props.positions !== undefined) {
      element.setPositions(props.positions);
    }
    if (props.holes !== prevProps.holes && props.holes !== undefined) {
      element.setHoles(props.holes);
    }
    if (props.triangles !== prevProps.triangles && props.triangles !== undefined) {
      element.setTriangles(props.triangles);
    }
    if (props.material !== prevProps.material && props.material !== undefined) {
      element.setMaterial(props.material);
    }
  },
  cesiumProps,
  otherProps: ["positions", "holes", "triangles", "material", "pickObject"],
});

export default BufferPolygon;
