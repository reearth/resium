import { CzmlDataSource as CesiumCzmlDataSource } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  Merge,
  ValueOf,
} from "../core";

/*
@summary
`CzmlDataSource` provides the way to load and show CZML data into the scene.
CZML data can be loaded from a URL, string or raw object.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type CzmlDataSourceCesiumProps = PickCesiumProps<CesiumCzmlDataSource, typeof cesiumProps>;

export type CzmlDataSourceCesiumReadonlyProps = PickCesiumProps<
  Merge<
    Merge<CesiumCzmlDataSource, CesiumCzmlDataSource.LoadOptions>,
    NonNullable<Parameters<InstanceType<typeof CesiumCzmlDataSource>["load"]>[1]>
  >,
  typeof cesiumReadonlyProps
> & {
  data: Parameters<CesiumCzmlDataSource["load"]>[0];
};

export type CzmlDataSourceCesiumEvents = {
  onChange?: (CzmlDataSource: CesiumCzmlDataSource) => void;
  onError?: (CzmlDataSource: CesiumCzmlDataSource, error: any) => void;
  onLoading?: (CzmlDataSource: CesiumCzmlDataSource, isLoaded: boolean) => void;
};

export type CzmlDataSourceOtherProps = {
  /** Calls when the Promise for loading data is fullfilled. */
  onLoad?: (CzmlDataSouce: CesiumCzmlDataSource) => void;
};

export type CzmlDataSourceProps = CzmlDataSourceCesiumProps &
  CzmlDataSourceCesiumReadonlyProps &
  CzmlDataSourceCesiumEvents &
  CzmlDataSourceOtherProps;

const cesiumProps = ["clustering", "show"] as const;

const cesiumReadonlyProps = ["name", "data", "sourceUri", "credit"] as const;

const cesiumEventProps = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
} as const;

const load = (element: CesiumCzmlDataSource, { data, onLoad, ...options }: CzmlDataSourceProps) => {
  element.load(data, options).then(value => {
    if (onLoad) {
      onLoad(value);
    }
  });
};

const CzmlDataSource = createCesiumComponent<CesiumCzmlDataSource, CzmlDataSourceProps>({
  name: "CzmlDataSource",
  create(context, props) {
    if (!context.dataSourceCollection) return;
    const element = new CesiumCzmlDataSource(props.name);
    if (props.clustering) {
      element.clustering = props.clustering;
    }
    if (typeof props.show === "boolean") {
      element.show = props.show;
    }
    context.dataSourceCollection.add(element);
    if (props.data) {
      load(element, props);
    }
    return element;
  },
  update(element, props, prevProps) {
    if (!props.data) {
      element.show = false;
    } else if (prevProps.show !== props.show) {
      element.show = typeof props.show === "boolean" ? props.show : true;
    }
    if (
      props.data &&
      (prevProps.data !== props.data ||
        prevProps.sourceUri !== props.sourceUri ||
        prevProps.credit !== props.credit)
    ) {
      load(element, props);
    }
  },
  destroy(element, context) {
    if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
      context.dataSourceCollection.remove(element);
    }
  },
  provide(element) {
    return {
      dataSource: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default CzmlDataSource;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  Merge<
    Merge<CesiumCzmlDataSource, CesiumCzmlDataSource.LoadOptions>,
    NonNullable<Parameters<InstanceType<typeof CesiumCzmlDataSource>["load"]>[1]>
  >,
  keyof CzmlDataSourceProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
