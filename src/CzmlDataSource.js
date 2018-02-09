import PropTypes from "prop-types";
import { CzmlDataSource as CesiumCzmlDataSource } from "cesium";

import DataSource from "./DataSource";

export default class CzmlDataSource extends DataSource {
  static propTypes = {
    ...DataSource.propTypes,
    czml: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onProgress: PropTypes.func,
    query: PropTypes.object,
    sourceUri: PropTypes.string,
    url: PropTypes.string,
  };

  static contextTypes = {
    ...DataSource.contextTypes,
  };

  static cesiumProps = [...DataSource.cesiumProps];

  static cesiumEvents = [...DataSource.cesiumEvents];

  createCesiumElement(options) {
    return new CesiumCzmlDataSource(options.name);
  }

  mountCesiumElement() {
    this._load();
  }

  updateCesiumElement(ds, prev) {
    const { czml, url } = this.props;
    if (czml !== prev.czml || url !== prev.url) {
      this._load();
    }
  }

  _load() {
    const { czml, onError, onLoad, onProgress, query, sourceUri, url } = this.props;
    if (czml || url) {
      this.cesiumElement.load(czml || url, { sourceUri, query }).then(
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
