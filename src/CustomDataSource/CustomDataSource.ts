import { CustomDataSource as CesiumCustomDataSource, DataSourceClock, EntityCluster } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

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

export type CustomDataSourceCesiumProps = PickCesiumProps<
  CesiumCustomDataSource,
  typeof cesiumProps
> & {
  clustering?: EntityCluster;
  name?: string;
  show?: boolean;
  clock?: DataSourceClock;
};

export type CustomDataSourceCesiumEvents = {
  onChange?: (customDataSource: CesiumCustomDataSource) => void;
  onError?: (customDataSource: CesiumCustomDataSource, error: any) => void;
  onLoading?: (customDataSource: CesiumCustomDataSource, isLoaded: boolean) => void;
};

export type CustomDataSourceProps = CustomDataSourceCesiumProps &
  CustomDataSourceCesiumEvents & {
    children?: React.ReactNode;
  };

const cesiumProps = ["clustering", "name", "show", "clock"] as const;

const cesiumEventProps: EventkeyMap<CesiumCustomDataSource, CustomDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumCustomDataSource,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
