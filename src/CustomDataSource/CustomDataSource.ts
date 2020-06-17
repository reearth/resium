import { CustomDataSource as CesiumCustomDataSource, DataSourceClock, EntityCluster } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

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
  clustering?: EntityCluster;
  name?: string;
  show?: boolean;
  clock?: DataSourceClock;
}

export interface CustomDataSourceCesiumEvents {
  onChange?: (customDataSource: CesiumCustomDataSource) => void;
  onError?: (customDataSource: CesiumCustomDataSource, error: any) => void;
  onLoading?: (customDataSource: CesiumCustomDataSource, isLoaded: boolean) => void;
}

export interface CustomDataSourceProps
  extends CustomDataSourceCesiumProps,
    CustomDataSourceCesiumEvents {
  children?: React.ReactNode;
}

const cesiumProps: (keyof CustomDataSourceCesiumProps)[] = ["clustering", "name", "show", "clock"];

const cesiumEventProps: EventkeyMap<CesiumCustomDataSource, CustomDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
};

const CustomDataSource = createCesiumComponent<CesiumCustomDataSource, CustomDataSourceProps>({
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
