import PropTypes from "prop-types";
import { KmlDataSource as CesiumKmlDataSource } from "cesium";

import DataSource from "./core/DataSource";
import { sceneType } from "./core/types";

export default class KmlDataSource extends DataSource {
  static propTypes = {
    ...DataSource.propTypes,
    clampToGround: PropTypes.bool,
    data: PropTypes.any,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onProgress: PropTypes.func,
    onRefresh: PropTypes.func,
    onUnsupportedNode: PropTypes.func,
    query: PropTypes.object,
    sourceUri: PropTypes.string,
    url: PropTypes.string,
  };

  static contextTypes = {
    ...DataSource.contextTypes,
    scene: sceneType,
  };

  static cesiumProps = [...DataSource.cesiumProps];

  static cesiumReadonlyProps = ["camera", "canvas", "proxy"];

  static cesiumEvents = [...DataSource.cesiumEvents, "refreshEvent", "unsupportedNodeEvent"];

  createCesiumElement(options) {
    const { scene } = this.context;
    return new CesiumKmlDataSource({
      camera: options.camera || (scene ? scene.camera : undefined),
      canvas: options.canvas || (scene ? scene.canvas : undefined),
      proxy: options.proxy,
    });
  }

  mountCesiumElement() {
    this._load();
  }

  updateCesiumElement(ds, prev) {
    const { data, url } = this.props;
    if (data !== prev.data || url !== prev.url) {
      this._load();
    }
  }

  _load() {
    const { clampToGround, data, query, onError, onLoad, onProgress, sourceUri, url } = this.props;
    if (data || url) {
      this.cesiumElement
        .load(data || url, {
          clampToGround,
          query,
          sourceUri,
        })
        .then(
          (...args) => {
            try {
              if (onLoad) onLoad(...args);
            } catch (e) {
              console.error(e);
              throw e;
            }
            this.parent.add(args[0]); // args[0] === this.cesiumElement
          },
          onError,
          onProgress,
        );
    }
  }
}
