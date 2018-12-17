import Cesium, { Entity as CesiumEntity, CorridorGraphics } from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";
import EventManager, { EventProps } from "./core/EventManager";
import { BillboardGraphicsCesiumProps } from "./BillboardGraphics";
import { BoxGraphicsCesiumProps } from "./BoxGraphics";
import { CorridorGraphicsCesiumProps } from "./CorridorGraphics";
import { CylinderGraphicsCesiumProps } from "./CylinderGraphics";
import { EllipseGraphicsCesiumProps } from "./EllipseGraphics";
import { EllipsoidGraphicsCesiumProps } from "./EllipsoidGraphics";
import { LabelGraphicsCesiumProps } from "./LabelGraphics";
import { ModelGraphicsCesiumProps } from "./ModelGraphics";
import { PathGraphicsCesiumProps } from "./PathGraphics";
import { PlaneGraphicsCesiumProps } from "./PlaneGraphics";
import { PointGraphicsCesiumProps } from "./PointGraphics";
import { PolygonGraphicsCesiumProps } from "./PolygonGraphics";
import { PolylineGraphicsCesiumProps } from "./PolylineGraphics";
import { PolylineVolumeGraphicsCesiumProps } from "./PolylineVolumeGraphics";
import { RectangleGraphicsCesiumProps } from "./RectangleGraphics";
import { WallGraphicsCesiumProps } from "./WallGraphics";
export interface EntityCesiumProps {
  availability?: Cesium.TimeIntervalCollection;
  billboard?: Cesium.BillboardGraphics | BillboardGraphicsCesiumProps;
  box?: Cesium.BoxGraphics | BoxGraphicsCesiumProps;
  corridor?: Cesium.CorridorGraphics | CorridorGraphicsCesiumProps;
  cylinder?: Cesium.CylinderGraphics | CylinderGraphicsCesiumProps;
  description?: Cesium.Property | any;
  ellipse?: Cesium.EllipseGraphics | EllipseGraphicsCesiumProps;
  ellipsoid?: Cesium.EllipsoidGraphics | EllipsoidGraphicsCesiumProps;
  entityCollection?: Cesium.EntityCollection;
  label?: Cesium.LabelGraphics | LabelGraphicsCesiumProps;
  model?: Cesium.ModelGraphics | ModelGraphicsCesiumProps;
  name?: string;
  orientation?: Cesium.Property | Cesium.Matrix4;
  parent?: Cesium.Entity;
  path?: Cesium.PathGraphics | PathGraphicsCesiumProps;
  // @type Cesium.PlaneGraphics | PlaneGraphicsCesiumProps
  plane?:
    | {
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
      }
    | PlaneGraphicsCesiumProps;
  point?: Cesium.PointGraphics | PointGraphicsCesiumProps;
  polygon?: Cesium.PolygonGraphics | PolygonGraphicsCesiumProps;
  polyline?: Cesium.PolylineGraphics | PolylineGraphicsCesiumProps;
  polylineVolume?: Cesium.PolylineVolumeGraphics | PolylineVolumeGraphicsCesiumProps;
  position?: Cesium.PositionProperty | Cesium.Cartesian3;
  // @type Cesium.PropertyBag
  properties?: any;
  rectangle?: Cesium.RectangleGraphics | RectangleGraphicsCesiumProps;
  show?: boolean;
  viewFrom?: Cesium.Property | Cesium.Cartesian3;
  wall?: Cesium.WallGraphics | WallGraphicsCesiumProps;
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
