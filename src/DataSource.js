import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { entityCollectionType, dataSourceCollectionType, viewerType } from "./types";

export default class DataSource extends CesiumComponent {

  static propTypes = {
    clock: PropTypes.any,
    clustering: PropTypes.any,
    name: PropTypes.string,
    onChanged: PropTypes.func,
    onError: PropTypes.func,
    onLoading: PropTypes.func,
    show: PropTypes.bool
  }

  static contextTypes = {
    dataSourceCollection: dataSourceCollectionType,
    viewer: viewerType
  }

  static childContextTypes = {
    entityCollection: entityCollectionType
  }

  static cesiumProps = [
    "clock",
    "clustering",
    "name",
    "show"
  ]

  static cesiumEvents = [
    "changedEvent",
    "errorEvent",
    "loadingEvent"
  ]

  getChildContext() {
    return {
      entityCollection: this.cesiumElement ? this.cesiumElement.entities : null
    };
  }

  componentWillMount() {
    super.componentWillMount();
    if (this.cesiumElement) {
      if (this.props.clock) {
        this.cesiumElement.clock = this.props.clock;
      }
      if (this.props.clustering) {
        this.cesiumElement.clustering = this.props.clustering;
      }
      if (this.props.name) {
        this.cesiumElement.name = this.props.name;
      }
      if (this.props.show === true || this.props.show === false) {
        this.cesiumElement.show = this.props.show;
      }
    }
  }

  get parent() {
    const { dataSourceCollection, viewer } = this.context;
    if (dataSourceCollection && !dataSourceCollection.isDestroyed()) {
      return dataSourceCollection;
    }
    if (viewer && !viewer.isDestroyed()) {
      return viewer.dataSourceDisplay.dataSources;
    }
    return null;
  }

  createCesiumElement() {
    throw new Error("DataSource#createCesiumElement is not implemented");
  }

  mountCesiumElement(entity) {
    this.parent.add(entity);
  }

  destroyCesiumElement(entity) {
    const p = this.parent;
    if (p) {
      p.remove(entity);
    }
  }

}
