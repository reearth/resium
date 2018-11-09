import Cesium, { EntityCollection, Entity as CesiumEntity } from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface EntityCesiumProps {
  availability: Cesium.TimeIntervalCollection;
  billboard: Cesium.BillboardGraphics;
  box: Cesium.BoxGraphics;
  corridor: Cesium.CorridorGraphics;
  cylinder: Cesium.CylinderGraphics;
  description: Cesium.Property;
  ellipse: Cesium.EllipseGraphics;
  ellipsoid: Cesium.EllipsoidGraphics;
  entityCollection: Cesium.EntityCollection;
  isShowing: boolean;
  label: Cesium.LabelGraphics;
  model: Cesium.ModelGraphics;
  name: string;
  orientation: Cesium.Property;
  parent: Cesium.Entity;
  path: Cesium.PathGraphics;
  plane: any;
  point: Cesium.PointGraphics;
  polygon: Cesium.PolygonGraphics;
  polyline: Cesium.PolylineGraphics;
  polylineVolume: Cesium.PolylineVolumeGraphics;
  position: Cesium.PositionProperty;
  properties: any;
  propertyNames: any[];
  rectangle: Cesium.RectangleGraphics;
  show: boolean;
  viewFrom: Cesium.Property;
  wall: Cesium.WallGraphics;
}

export interface EntityCesiumReadonlyProps {
  id?: string;
}

export interface EntityCesiumEvents {
  onDefinitionChange: () => void;
}

export interface EntityProps
  extends EntityCesiumProps,
    EntityCesiumReadonlyProps,
    EntityCesiumEvents {}

export interface EntityContext {
  entityCollection: EntityCollection;
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
  "isShowing",
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
  "propertyNames",
  "rectangle",
  "show",
  "viewFrom",
  "wall",
];

const cesiumReadonlyProps: Array<keyof EntityCesiumReadonlyProps> = ["id"];

const cesiumEventProps: EventkeyMap<CesiumEntity, keyof EntityCesiumEvents> = {
  definitionChanged: "onDefinitionChange",
};

const Entity = createCesiumComponent<CesiumEntity, EntityProps, EntityContext>({
  name: "Entity",
  create(cprops) {
    return new CesiumEntity(cprops);
  },
  mount(element, context) {
    context.entityCollection.add(element);
  },
  unmount(element, context) {
    context.entityCollection.remove(element);
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
