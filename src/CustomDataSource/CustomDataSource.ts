import { CustomDataSource as CesiumCustomDataSource } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps, EventProps, EventTarget } from "../core";

export type { EventTarget } from "../core";

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
>;

export type CustomDataSourceCesiumEvents = {
  onChange?: (customDataSource: CesiumCustomDataSource) => void;
  onError?: (customDataSource: CesiumCustomDataSource, error: any) => void;
  onLoading?: (customDataSource: CesiumCustomDataSource, isLoaded: boolean) => void;
};

export type CustomDataSourceOtherProps = EventProps<EventTarget> & {
  children?: ReactNode;
};

export type CustomDataSourceProps = CustomDataSourceCesiumProps &
  CustomDataSourceCesiumEvents &
  CustomDataSourceOtherProps;

const cesiumProps = ["clustering", "name", "show", "clock", "isLoading"] as const;

export const cesiumEventProps = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
} as const;

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
  useCommonEvent: true,
});

export default CustomDataSource;
