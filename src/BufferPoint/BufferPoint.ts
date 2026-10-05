import type {
  BufferPointMaterial,
  Cartesian3} from "cesium";
import {
  BufferPoint as CesiumBufferPoint
} from "cesium";

import { createCesiumComponent } from "../core";

/*
@summary
`BufferPoint` is a single point primitive inside a `BufferPointCollection`.
Position and material are applied via setter methods (flyweight pattern).

Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Only inside [BufferPointCollection](/components/BufferPointCollection) component.
*/

export type BufferPointProps = {
  /** The position of the point in world coordinates. */
  position?: Cartesian3;
  /** The material (color, size, outline) for the point. */
  material?: BufferPointMaterial;
  /** Whether the point is visible. */
  show?: boolean;
  /** A feature identifier for picking. */
  featureId?: number;
  /**
   * Custom object returned by `scene.pick` for this point, in place of
   * Cesium's default `{ collection, index, primitive }` pick object. Fixed
   * at creation time: Cesium locks it once the point has been rendered. Only
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

const BufferPoint = createCesiumComponent<CesiumBufferPoint, BufferPointProps>({
  name: "BufferPoint",
  create(context, props) {
    if (!context.bufferPointCollection) return;
    // add() requires a result BufferPoint instance (flyweight pattern)
    const result = new CesiumBufferPoint();
    const element = context.bufferPointCollection.add(
      {
        show: props.show,
        position: props.position,
        material: props.material,
        pickObject: props.pickObject,
      },
      result,
    );
    // featureId is not in BufferPointOptions, set directly after add
    if (props.featureId !== undefined) element.featureId = props.featureId;
    return element;
  },
  destroy(element) {
    // BufferPointCollection has no remove() — it uses a fixed-size flyweight pattern.
    // Hide the point when the React component unmounts.
    element.show = false;
  },
  update(element, props, prevProps) {
    if (props.position !== prevProps.position && props.position !== undefined) {
      element.setPosition(props.position);
    }
    if (props.material !== prevProps.material && props.material !== undefined) {
      element.setMaterial(props.material);
    }
  },
  cesiumProps,
  otherProps: ["position", "material", "pickObject"],
});

export default BufferPoint;
