import PropTypes from "prop-types";
import { PointPrimitiveCollection as CesiumPointPrimitiveCollection } from "cesium";

import CesiumComponent from "./CesiumComponent";
import {
  pointPrimitiveCollectionType,
  primitiveCollectionType,
  sceneType,
  viewerType
} from "./types";

export default class PointPrimitiveCollection extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
    blendOption: PropTypes.any,
    children: PropTypes.any,
    debugShowBoundingVolume: PropTypes.bool,
    modelMatrix: PropTypes.any
  }

  static contextTypes = {
    primitiveCollection: primitiveCollectionType,
    scene: sceneType,
    viewer: viewerType
  }

  static childContextTypes = {
    pointPrimitiveCollection: pointPrimitiveCollectionType
  }

  static cesiumProps = [
    "blendOption",
    "debugShowBoundingVolume",
    "modelMatrix"
  ]

  state = {
    mounted: false
  }

  getChildContext() {
    return {
      pointPrimitiveCollection: this.cesiumElement
    };
  }

  get parent() {
    const { premitiveCollection, scene, viewer } = this.context;
    if (premitiveCollection && !premitiveCollection.isDestroyed()) {
      return premitiveCollection;
    }
    if (scene && !scene.isDestroyed()) {
      return scene.primitives;
    }
    if (viewer && !viewer.isDestroyed()) {
      return viewer.scene.primitives;
    }
    return null;
  }

  createCesiumElement(options) {
    return new CesiumPointPrimitiveCollection(options);
  }

  mountCesiumElement(col) {
    this.parent.add(col);
    this.setState({ mounted: true });
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

  render() {
    const { children } = this.props;
    const { mounted } = this.state;
    return mounted ? children : null;
  }

}
