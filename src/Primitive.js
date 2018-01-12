import PropTypes from "prop-types";
import { Primitive as CesiumPrimitive } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { primitiveCollectionType, sceneType } from "./types";

export default class Primitive extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
    allowPicking: PropTypes.any,
    appearance: PropTypes.any,
    asynchronous: PropTypes.bool,
    compressVertices: PropTypes.bool,
    cull: PropTypes.bool,
    debugShowBoundingVolume: PropTypes.bool,
    depthFailAppearance: PropTypes.any,
    geometryInstances: PropTypes.any,
    interleave: PropTypes.bool,
    modelMatrix: PropTypes.any,
    releaseGeometryInstances: PropTypes.bool,
    shadows: PropTypes.any,
    show: PropTypes.bool
  }

  static contextTypes = {
    primitiveCollection: primitiveCollectionType,
    scene: sceneType
  }

  static cesiumProps = [
    "allowPicking",
    "appearance",
    "cull",
    "debugShowBoundingVolume",
    "depthFailAppearance",
    "modelMatrix",
    "shadows",
    "show"
  ]

  static cesiumReadOnlyProps = [
    "asynchronous",
    "compressVertices",
    "geometryInstances",
    "interleave",
    "releaseGeometryInstances"
  ]

  get parent() {
    const { premitiveCollection, scene } = this.context;
    if (premitiveCollection && !premitiveCollection.isDestroyed()) {
      return premitiveCollection;
    }
    if (scene && !scene.isDestroyed()) {
      return scene.primitives; // TODO: scene#groundPrimitives
    }
    return null;
  }

  createCesiumElement(options) {
    return new CesiumPrimitive(options);
  }

  mountCesiumElement(premitive) {
    this.parent.add(premitive);
  }

  destroyCesiumElement(premitive) {
    const p = this.parent;
    if (p) {
      p.remove(premitive);
    }
  }

}
