import Cesium from "cesium";
import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface EntityClusterCesiumProps {
  enabled?: boolean;
  pixelRange?: number;
  minimumClusterSize?: number;
  clusterBillboards?: boolean;
  clusterLabels?: boolean;
  clusterPoints?: boolean;
}

export interface EntityClusterProps extends EntityClusterCesiumProps {
  onClusterShow?: (
    clusteredEntities: Cesium.Entity[],
    cluster: { billboard: Cesium.Billboard; label: Cesium.Label; point: Cesium.PointPrimitive },
  ) => void;
}

export interface EntityClusterContext {
  dataSource?: Cesium.DataSource;
}

const cesiumProps: Array<keyof EntityClusterCesiumProps> = [
  "clusterBillboards",
  "clusterLabels",
  "clusterPoints",
  "enabled",
  "minimumClusterSize",
  "pixelRange",
];

const cesiumEventProps: EventkeyMap<Cesium.EntityCluster, keyof EntityClusterProps> = {
  clusterEvent: "onClusterShow",
};

const EntityCluster = createCesiumComponent<
  Cesium.EntityCluster,
  EntityClusterProps,
  EntityClusterContext
>({
  name: "EntityCluster",
  create(cprops) {
    return new Cesium.EntityCluster(cprops);
  },
  mount(element, context) {
    if (context.dataSource) {
      context.dataSource.clustering = element;
      element.pixelRange = 1;
      element.pixelRange = 50;
      console.log("oooo", element);
    }
  },
  unmount(element, context) {
    if (context.dataSource) {
      context.dataSource.clustering = new Cesium.EntityCluster();
    }
    element.destroy();
  },
  cesiumProps,
  cesiumEventProps,
});

EntityCluster.defaultProps = {
  enabled: true,
};

export default EntityCluster;
