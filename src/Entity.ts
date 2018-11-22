import Cesium, { Entity as CesiumEntity } from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";
import EventManager, { EventProps } from "./core/eventManager";

export interface EntityCesiumProps {
  availability?: Cesium.TimeIntervalCollection;
  billboard?:
    | Cesium.BillboardGraphics
    | {
        image?: Cesium.Property | ImageData | string | HTMLCanvasElement;
        show?: Cesium.Property | boolean;
        scale?: Cesium.Property | number;
        horizontalOrigin?: Cesium.Property | Cesium.HorizontalOrigin;
        verticalOrigin?: Cesium.Property | Cesium.VerticalOrigin;
        eyeOffset?: Cesium.Property | Cesium.Cartesian3;
        pixelOffset?: Cesium.Property | Cesium.Cartesian2;
        rotation?: Cesium.Property | number;
        alignedAxis?: Cesium.Property | Cesium.Cartesian3;
        width?: Cesium.Property | number;
        height?: Cesium.Property | number;
        color?: Cesium.Property | Cesium.Color;
        scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
        translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
        pixelOffsetScaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
        imageSubRegion?: Cesium.Property | Cesium.BoundingRectangle;
        sizeInMeters?: Cesium.Property | boolean;
        heightReference?: Cesium.Property | Cesium.HeightReference;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        disableDepthTestDistance?: Cesium.Property | number;
      };
  box?:
    | Cesium.BoxGraphics
    | {
        heightReference?: Cesium.Property | Cesium.HeightReference;
        dimensions?: Cesium.Property;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | number;
        outlineWidth?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
      };
  corridor?:
    | Cesium.CorridorGraphics
    | {
        positions?: Cesium.Property | Cesium.Cartesian3;
        width?: Cesium.Property | number;
        cornerType?: Cesium.Property | Cesium.CornerType;
        height?: Cesium.Property | number;
        extrudedHeightReference?: Cesium.Property | Cesium.HeightReference;
        extrudedHeight?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        granularity?: Cesium.Property | number;
        shadows?: Cesium.Property | boolean;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        zIndex?: Cesium.ConstantProperty | number;
      };
  cylinder?:
    | Cesium.CylinderGraphics
    | {
        heightReference?: Cesium.Property | Cesium.HeightReference;
        length?: Cesium.Property | number;
        topRadius?: Cesium.Property | number;
        bottomRadius?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        numberOfVerticalLines?: Cesium.Property | number;
        slices?: Cesium.Property | number;
        shadowMode?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
      };
  description?: Cesium.Property | any;
  ellipse?:
    | Cesium.EllipseGraphics
    | {
        semiMajorAxis?: Cesium.Property | number;
        semiMinorAxis?: Cesium.Property | number;
        height?: Cesium.Property | number;
        heightReference?: Cesium.Property | Cesium.HeightReference;
        extrudedHeight?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        numberOfVerticalLines?: Cesium.Property | number;
        rotation?: Cesium.Property | number;
        stRotation?: Cesium.Property | number;
        granularity?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        zIndex?: Cesium.Property | number;
      };
  ellipsoid?:
    | Cesium.EllipsoidGraphics
    | {
        heightReference?: Cesium.Property | Cesium.HeightReference;
        radii?: Cesium.Property | Cesium.Cartesian3;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        subdivisions?: Cesium.Property | number;
        stackPartitions?: Cesium.Property | number;
        slicePartitions?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
      };
  entityCollection?: Cesium.EntityCollection;
  label?:
    | Cesium.LabelGraphics
    | {
        text?: Cesium.Property | string;
        font?: Cesium.Property | string;
        style?: Cesium.Property | Cesium.LabelStyle;
        fillColor?: Cesium.Property | Cesium.Color;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        showBackground?: Cesium.Property | boolean;
        backgroundColor?: Cesium.Property | Cesium.Color;
        backgroundPadding?: Cesium.Property | number;
        scale?: Cesium.Property | number;
        horizontalOrigin?: Cesium.Property | Cesium.HorizontalOrigin;
        verticalOrigin?: Cesium.Property | Cesium.VerticalOrigin;
        eyeOffset?: Cesium.Property | Cesium.Cartesian3;
        pixelOffset?: Cesium.Property | Cesium.Cartesian2;
        translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
        pixelOffsetScaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
        scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
        heightReference?: Cesium.Property | Cesium.HeightReference;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        disableDepthTestDistance?: Cesium.Property | number;
      };
  model?:
    | Cesium.ModelGraphics
    | {
        uri?: Cesium.Property | string;
        show?: Cesium.Property | boolean;
        scale?: Cesium.Property | number;
        minimumPixelSize?: Cesium.Property | number;
        maximumScale?: Cesium.Property | number;
        incrementallyLoadTextures?: Cesium.Property | boolean;
        runAnimations?: Cesium.Property | boolean;
        clampAnimations?: Cesium.Property | boolean;
        nodeTransformations?: Cesium.Property; // | { [name: string]: Cesium.TranslationRotationScale };
        shadows?: Cesium.Property | Cesium.ShadowMode;
        heightReference?: Cesium.Property | Cesium.HeightReference;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        silhouetteColor?: Cesium.Property | Cesium.Color;
        silhouetteSize?: Cesium.Property | number;
        color?: Cesium.Property | Cesium.Color;
        colorBlendMode?: Cesium.Property; // | Cesium.ColorBlendMode;
        colorBlendAmount?: Cesium.Property | number;
        clippingPlanes?: Cesium.Property; // | Cesium.ClippingPlaneCollection;
        imageBasedLightingFactor?: Cesium.Property | Cesium.Cartesian2;
        lightColor?: Cesium.Property | Cesium.Color;
      };
  name?: string;
  orientation?: Cesium.Property | Cesium.Matrix4;
  parent?: Cesium.Entity;
  path?:
    | Cesium.PathGraphics
    | {
        leadTime?: Cesium.Property | number;
        trailTime?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        width?: Cesium.Property | number;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        resolution?: Cesium.Property | number;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
      };
  plane?: {
    plane: Cesium.Property;
    dimensions: Cesium.Property | Cesium.Cartesian2;
    show: Cesium.Property | boolean;
    fill: Cesium.Property | boolean;
    material: Cesium.MaterialProperty | Cesium.Color | string;
    outline: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  }; // | Cesium.PlaneGraphics;
  point?:
    | Cesium.PointGraphics
    | {
        color?: Cesium.Property | Cesium.Color;
        pixelSize?: Cesium.Property | number;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
        translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
        heightReference?: Cesium.Property | Cesium.HeightReference;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        disableDepthTestDistance?: Cesium.Property | number;
      };
  polygon?:
    | Cesium.PolygonGraphics
    | {
        hierarchy?: Cesium.Property | Cesium.PolygonHierarchy;
        height?: Cesium.Property | number;
        heightReference?: Cesium.Property | Cesium.HeightReference;
        extrudedHeight?: Cesium.Property | number;
        extrudedHeightReference?: Cesium.Property | Cesium.HeightReference;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        stRotation?: Cesium.Property | number;
        granularity?: Cesium.Property | number;
        perPositionHeight?: Cesium.Property | boolean;
        closeTop?: boolean;
        closeBottom?: boolean;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        zIndex?: Cesium.Property | number;
      };
  polyline?:
    | Cesium.PolylineGraphics
    | {
        positions?: Cesium.Property | Cesium.Cartesian3[];
        followSurface?: Cesium.Property | boolean;
        clampToGround?: Cesium.Property | boolean;
        width?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        depthFailMaterial?: Cesium.MaterialProperty | Cesium.Color | string;
        granularity?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        zIndex?: Cesium.Property | number;
      };
  polylineVolume?:
    | Cesium.PolylineVolumeGraphics
    | {
        positions?: Cesium.Property | Cesium.Cartesian3[];
        shape?: Cesium.Property | Cesium.Cartesian2;
        cornerType?: Cesium.Property | Cesium.CornerType;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        granularity?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
      };
  position?: Cesium.PositionProperty | Cesium.Cartesian3;
  properties?: any; // Cesium.PropertyBag
  rectangle?:
    | Cesium.RectangleGraphics
    | {
        coordinates?: Cesium.Property | Cesium.Rectangle;
        height?: Cesium.Property | number;
        heightReference?: Cesium.Property | Cesium.HeightReference;
        extrudedHeight?: Cesium.Property | number;
        extrudedHeightReference?: Cesium.Property | Cesium.HeightReference;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        rotation?: Cesium.Property | number;
        stRotation?: Cesium.Property | number;
        granularity?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
        zIndex?: Cesium.Property | number;
      };
  show?: boolean;
  viewFrom?: Cesium.Property | Cesium.Cartesian3;
  wall?:
    | Cesium.WallGraphics
    | {
        positions?: Cesium.Property | Cesium.Cartesian3[];
        maximumHeights?: Cesium.Property | number;
        minimumHeights?: Cesium.Property | number;
        show?: Cesium.Property | boolean;
        fill?: Cesium.Property | boolean;
        material?: Cesium.MaterialProperty | Cesium.Color | string;
        outline?: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        granularity?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
      };
}

export interface EntityCesiumReadonlyProps {
  id?: string;
}

export interface EntityCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface EntityProps
  extends EntityCesiumProps,
    EntityCesiumReadonlyProps,
    EntityCesiumEvents,
    EventProps<Cesium.Entity> {
  children?: React.ReactNode;
  selected?: boolean;
  tracked?: boolean;
}

export interface EntityContext {
  entityCollection?: Cesium.EntityCollection;
  viewer?: Cesium.Viewer;
  __RESIUM_EVENT_MANAGER?: EventManager;
}

const cesiumProps: Array<keyof EntityCesiumProps> = [
  "availability",
  "billboard",
  "box",
  "corridor",
  "cylinder",
  "description",
  "ellipse",
  "ellipsoid",
  "entityCollection",
  "label",
  "model",
  "name",
  "orientation",
  "parent",
  "path",
  "plane",
  "point",
  "polygon",
  "polyline",
  "polylineVolume",
  "position",
  "properties",
  "rectangle",
  "show",
  "viewFrom",
  "wall",
];

const cesiumReadonlyProps: Array<keyof EntityCesiumReadonlyProps> = ["id"];

const cesiumEventProps: EventkeyMap<Cesium.Entity, keyof EntityCesiumEvents> = {
  definitionChanged: "onDefinitionChange",
};

const Entity = createCesiumComponent<Cesium.Entity, EntityProps, EntityContext>({
  name: "Entity",
  create(cprops) {
    return new CesiumEntity(cprops as any);
  },
  mount(element, context, props) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
    if (context.entityCollection) {
      context.entityCollection.add(element);
    }
    if (context.viewer && props.selected) {
      context.viewer.selectedEntity = element;
    }
    if (context.viewer && props.tracked) {
      context.viewer.trackedEntity = element;
    }
  },
  unmount(element, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.clearEvents(element);
    }
    if (context.entityCollection) {
      context.entityCollection.remove(element);
    }
  },
  update(element, props, prevProps, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }

    if (context.viewer) {
      if (props.selected !== prevProps.selected) {
        if (props.selected) {
          context.viewer.selectedEntity = element;
        } else if (context.viewer.selectedEntity === element) {
          (context.viewer as any).selectedEntity = undefined;
        }
      }

      if (props.tracked !== prevProps.tracked) {
        if (props.tracked) {
          context.viewer.trackedEntity = element;
        } else if (context.viewer.trackedEntity === element) {
          (context.viewer as any).trackedEntity = undefined;
        }
      }
    }
  },
  provide(element) {
    return {
      entity: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default Entity;
