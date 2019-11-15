import { CustomDataSource as CesiumCustomDataSource } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`CustomDataSource` is a kind of data sources, but empty.
It can be thought of as a collection of entities in a sense.
It can have some Entity components as children.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface CustomDataSourceCesiumProps {
  clustering?: Cesium.EntityCluster;
  name?: string;
  show?: boolean;
  clock?: Cesium.DataSourceClock;
}

export interface CustomDataSourceCesiumEvents {
  onChange?: (customDataSource: Cesium.CustomDataSource) => void;
  onError?: (customDataSource: Cesium.CustomDataSource, error: any) => void;
  onLoading?: (customDataSource: Cesium.CustomDataSource, isLoaded: boolean) => void;
}

export interface CustomDataSourceProps
  extends CustomDataSourceCesiumProps,
    CustomDataSourceCesiumEvents {
  children?: React.ReactNode;
}

const cesiumProps: (keyof CustomDataSourceCesiumProps)[] = ["clustering", "name", "show", "clock"];

const cesiumEventProps: EventkeyMap<Cesium.CustomDataSource, CustomDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "ErrorEvent" as any,
  onLoading: "loadingEvent",
};

const CustomDataSource = createCesiumComponent<
  Cesium.CustomDataSource,
  CustomDataSourceProps,
  {
    dataSourceCollection?: Cesium.DataSourceCollection;
  }
>({
  name: "CustomDataSource",
  create(context, props) {
    if (!context.dataSourceCollection) return;
    const element = new CesiumCustomDataSource(props.name);
    if (props.clustering) {
      element.clustering = props.clustering;
    }
    if (typeof props.show === "boolean") {
      element.show = props.show;
    }
    if (typeof props.clock !== "undefined") {
      element.clock = props.clock;
    }
    context.dataSourceCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
      context.dataSourceCollection.remove(element);
    }
  },
  provide(element) {
    return {
      entityCollection: element.entities,
      dataSource: element,
    };
  },
  cesiumProps,
  cesiumEventProps,
});

export default CustomDataSource;
