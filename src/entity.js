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

  onMount(options, _, { viewer }) {
    const entity = new CesiumEntity({
      ...options,
      point: {
        pixelSize: 10
      }
    });

    viewer.entities.add(entity);

    return entity;
  }

  onUnmount(entity, _, { viewer }) {
    if (viewer && !viewer.isDestroyed()) {
      viewer.entities.remove(entity);
    }
  }

}
