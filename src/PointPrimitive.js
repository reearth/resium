import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { pointPrimitiveCollectionType } from "./types";

export default class PointPrimitive extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    color: PropTypes.any,
    disableDepthTestDistance: PropTypes.number,
    distanceDisplayCondition: PropTypes.any,
    id: PropTypes.any,
    outlineColor: PropTypes.any,
    outlineWidth: PropTypes.number,
    pixelSize: PropTypes.number,
    position: PropTypes.any,
    scaleByDistance: PropTypes.any,
    show: PropTypes.bool,
    translucencyByDistance: PropTypes.any,
  };

  static contextTypes = {
    pointPrimitiveCollection: pointPrimitiveCollectionType,
  };

  static cesiumProps = [
    "color",
    "disableDepthTestDistance",
    "distanceDisplayCondition",
    "id",
    "outlineColor",
    "outlineWidth",
    "pixelSize",
    "position",
    "scaleByDistance",
    "show",
    "translucencyByDistance",
  ];

  get parent() {
    const { pointPrimitiveCollection } = this.context;
    if (pointPrimitiveCollection && !pointPrimitiveCollection.isDestroyed()) {
      return pointPrimitiveCollection;
    }
    return null;
  }

  createCesiumElement(options) {
    this.initialOptions = options;
    return null;
  }

  mountCesiumElement() {
    this.cesiumElement = this.parent.add(this.initialOptions);
  }

  destroyCesiumElement(primitive) {
    const p = this.parent;
    if (p && !p.isDestroyed() && primitive) {
      p.remove(primitive);
    }
    this.initialOptions = null;
  }

  initialOptions = null;
}
