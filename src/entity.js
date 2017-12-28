import PropTypes from "prop-types";
import { Entity as CesiumEntity } from "cesium";

import CesiumComponent from "./cesium-component";
import { viewerType } from "./types";

export default class Entity extends CesiumComponent {

  static propTypes = {
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.object
  }

  static defaultProps = {

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

  onMount(options) {
    const { viewer } = this.context;

    const entity = new CesiumEntity({
      ...options,
      point: {
        pixelSize: 10
      }
    });

    viewer.entities.add(entity);

    return entity;
  }

  onUnmount(entity) {
    const { viewer } = this.context;
    if (viewer && !viewer.isDestroyed()) {
      viewer.entities.remove(entity);
    }
  }

}
