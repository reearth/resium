import { CustomDataSource as CesiumCustomDataSource } from "cesium";

import DataSource from "./core/DataSource";

export default class CustomDataSource extends DataSource {
  static PropTypes = {
    ...DataSource.propTypes,
  };

  static contextTypes = {
    ...DataSource.contextTypes,
  };

  static cesiumProps = [...DataSource.cesiumProps];

  static cesiumEvents = [...DataSource.cesiumEvents];

  createCesiumElement(options) {
    return new CesiumCustomDataSource(options.name);
  }
}
