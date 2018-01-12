import PropTypes from "prop-types";
import { GeoJsonDataSource as CesiumGeoJsonDataSource } from "cesium";

import DataSource from "./DataSource";

export default class GeoJsonDataSource extends DataSource {

  static propTypes = {
    ...DataSource.propTypes,
    clampToGround: PropTypes.bool,
    data: PropTypes.object,
    describe: PropTypes.any,
    fill: PropTypes.any,
    markerColor: PropTypes.any,
    markerSize: PropTypes.number,
    markerSymbol: PropTypes.string,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onProgress: PropTypes.func,
    sourceUri: PropTypes.string,
    stroke: PropTypes.any,
    strokeWidth: PropTypes.number,
    url: PropTypes.string
  }

  static contextTypes = {
    ...DataSource.contextTypes
  }

  static cesiumProps = [
    ...DataSource.cesiumProps
  ]

  static cesiumEvents = [
    ...DataSource.cesiumEvents
  ]

  createCesiumElement(options) {
    return new CesiumGeoJsonDataSource(options.name);
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
    const {
      clampToGround,
      data,
      describe,
      fill,
      markerColor,
      markerSize,
      markerSymbol,
      onError,
      onLoad,
      onProgress,
      sourceUri,
      stroke,
      strokeWidth,
      url
    } = this.props;
    if (data || url) {
      this.cesiumElement.load(data || url, {
        clampToGround,
        describe,
        fill,
        markerColor,
        markerSize,
        markerSymbol,
        stroke,
        strokeWidth,
        sourceUri
      }).then(
        (...args) => {
          this.parent.add(args[0]); // args[0] === this.cesiumElement
          if (onLoad) return onLoad(...args);
          return undefined;
        },
        onError,
        onProgress
      );
    }
  }

}
