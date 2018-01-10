import PropTypes from "prop-types";
import { Entity as CesiumEntity } from "cesium";

import CesiumComponent from "./cesium-component";
import { viewerType } from "./types";

export default class Entity extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.object
  }

  static contextTypes = {
    viewer: viewerType
  }

  static cesiumProps = [
    "id",
    "name",
    "position",
    "description"
  ]

  static cesiumEvents = []

  createCesiumElement(options) {
    const entity = new CesiumEntity({
      ...options,
      point: {
        pixelSize: 10
      }
    });

    return entity;
  }

  mountCesiumElement(entity) {
    this.context.viewer.entities.add(entity);
  }

  destroyCesiumElement(entity) {
    const { viewer } = this.context;
    if (viewer && !viewer.isDestroyed()) {
      viewer.entities.remove(entity);
    }
  }

}
