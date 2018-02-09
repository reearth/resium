import PropTypes from "prop-types";
import { PointPrimitiveCollection as CesiumPointPrimitiveCollection } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { pointPrimitiveCollectionType, primitiveCollectionType, sceneType } from "./types";

export default class PointPrimitiveCollection extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    blendOption: PropTypes.any,
    debugShowBoundingVolume: PropTypes.bool,
    modelMatrix: PropTypes.any,
  };

  static contextTypes = {
    primitiveCollection: primitiveCollectionType,
    scene: sceneType,
  };

  static childContextTypes = {
    pointPrimitiveCollection: pointPrimitiveCollectionType,
  };

  static cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix"];

  getChildContext() {
    return {
      pointPrimitiveCollection: this.cesiumElement,
    };
  }

  get parent() {
    const { premitiveCollection, scene } = this.context;
    if (premitiveCollection && !premitiveCollection.isDestroyed()) {
      return premitiveCollection;
    }
    if (scene && !scene.isDestroyed()) {
      return scene.primitives;
    }
    return null;
  }

  createCesiumElement(options) {
    return new CesiumPointPrimitiveCollection(options);
  }

  mountCesiumElement(col) {
    this.parent.add(col);
  }

  destroyCesiumElement(col) {
    const p = this.parent;
    if (p && !p.isDestroyed()) {
      p.remove(col);
    }
    if (!col.isDestroyed()) {
      col.destroy();
    }
  }
}
