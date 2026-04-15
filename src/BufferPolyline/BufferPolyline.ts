import {
  BufferPolyline as CesiumBufferPolyline,
  BufferPolylineMaterial,
  TypedArray,
} from "cesium";

import { createCesiumComponent } from "../core";

/*
@summary
`BufferPolyline` is a single polyline primitive inside a `BufferPolylineCollection`.
Positions and material are applied via setter methods (flyweight pattern).

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Only inside [BufferPolylineCollection](/components/BufferPolylineCollection) component.
*/

export type BufferPolylineProps = {
  /** The vertex positions of the polyline as a typed array. */
  positions?: TypedArray;
  /** The material (color, outline, width) for the polyline. */
  material?: BufferPolylineMaterial;
  /** Whether the polyline is visible. */
  show?: boolean;
  /** A feature identifier for picking. */
  featureId?: number;
};

const cesiumProps = ["show", "featureId"] as const;

const BufferPolyline = createCesiumComponent<CesiumBufferPolyline, BufferPolylineProps>({
  name: "BufferPolyline",
  create(context, props) {
    if (!context.bufferPolylineCollection) return;
    // add() requires a result BufferPolyline instance (flyweight pattern)
    const result = new CesiumBufferPolyline();
    const element = context.bufferPolylineCollection.add(
      {
        show: props.show,
        positions: props.positions,
        material: props.material,
      },
      result,
    );
    // featureId is not in BufferPolylineOptions, set directly after add
    if (props.featureId !== undefined) element.featureId = props.featureId;
    return element;
  },
  destroy(element) {
    // BufferPolylineCollection has no remove() — it uses a fixed-size flyweight pattern.
    // Hide the polyline when the React component unmounts.
    element.show = false;
  },
  update(element, props, prevProps) {
    if (props.positions !== prevProps.positions && props.positions !== undefined) {
      element.setPositions(props.positions);
    }
    if (props.material !== prevProps.material && props.material !== undefined) {
      element.setMaterial(props.material);
    }
  },
  cesiumProps,
  otherProps: ["positions", "material"],
});

export default BufferPolyline;
