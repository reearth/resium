import {
  Entity as CesiumEntity,
  TimeIntervalCollection,
  BillboardGraphics,
  BoxGraphics,
  CorridorGraphics,
  CylinderGraphics,
  Property,
  EllipseGraphics,
  EllipsoidGraphics,
  LabelGraphics,
  ModelGraphics,
  Matrix4,
  PathGraphics,
  PlaneGraphics,
  PropertyBag,
  Cartesian3,
  PositionProperty,
  PolylineVolumeGraphics,
  PolylineGraphics,
  PolygonGraphics,
  PointGraphics,
  RectangleGraphics,
  WallGraphics,
  Cesium3DTilesetGraphics,
} from "cesium";

import { createCesiumComponent, EventkeyMap, EventProps } from "../core";
/*
@summary
`Entity` is a basic component for geographical data visualization.

Entity can have one each, with the following components as children:

- [`EntityDescription`](/components/EntityDescription): renders description with React
- [`BillboardGraphics`](/components/BillboardGraphics): a billboard visualization
- [`BoxGraphics`](/components/BoxGraphics): a box visualization
- [`CorridorGraphics`](/components/CorridorGraphics): a corridor visualization
- [`CylinderGraphics`](/components/CylinderGraphics): a cylinder visualization
- [`EllipseGraphics`](/components/EllipseGraphics): a ellipse visualization
- [`EllipsoidGraphics`](/components/EllipsoidGraphics): a ellipsoid visualization
- [`LabelGraphics`](/components/LabelGraphics): a label visualization
- [`ModelGraphics`](/components/ModelGraphics): a model visualization
- [`PathGraphics`](/components/PathGraphics): a path visualization
- [`PlaneGraphics`](/components/PlaneGraphics): a plane visualization
- [`PointGraphics`](/components/PointGraphics): a point visualization
- [`PolygonGraphics`](/components/PolygonGraphics): a polygon visualization
- [`PolylineGraphics`](/components/PolylineGraphics): a polyline visualization
- [`PolylineVolumeGraphics`](/components/PolylineVolumeGraphics): a polyline visualization with volume
- [`RectangleGraphics`](/components/RectangleGraphics): a rectangle visualization
- [`WallGraphics`](/components/WallGraphics): a wall visualization

### Graphics components vs graphics properties

Conclusion: `Graphics` components are mostly recommended.

For example, Entity component has `point` property for point visualization. But PointGraphics component is also available. What is the differene?

```jsx
<Entity point={{ pixelSize: 10 }} />

<Entity>
  <BillboardGraphics pixelSize={10} />
</Entity>
```

That is same. However as changing only `pixelSize` property, situations will change. If you change `point` property, It happens recreating a PointGraphics object. It is equivalent to:

```js
const entity = new Entity({ point: { pixelSize: 10 } });

// change pixelSize property in point property of Entity
entity.point = new PointGraphics({ pixelSize: 20 });
// change pixelSize property of PointGraphics
entity.point.pixelSize = 20;
```

Updating pixelSize of PointGraphics is more simple and fast.
*/

/*
@scope
Either:
- Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component: the entity will be attached to the EntityCollection of the Viewer or CesiumWidget.
- Inside [CustomDataSource](/components/CustomDataSource) component: the entity will be attached to the EntityCollection of the CustomDataSource.
*/

export interface EntityCesiumProps {
  name?: string;
  availability?: TimeIntervalCollection;
  show?: boolean;
  description?: Property | string;
  position?: PositionProperty | Cartesian3;
  orientation?: Property | Matrix4;
  viewFrom?: Property;
  parent?: CesiumEntity;
  billboard?: BillboardGraphics | BillboardGraphics.ConstructorOptions;
  box?: BoxGraphics | BoxGraphics.ConstructorOptions;
  corridor?: CorridorGraphics | CorridorGraphics.ConstructorOptions;
  cylinder?: CylinderGraphics | CylinderGraphics.ConstructorOptions;
  ellipse?: EllipseGraphics | EllipseGraphics.ConstructorOptions;
  ellipsoid?: EllipsoidGraphics | EllipsoidGraphics.ConstructorOptions;
  label?: LabelGraphics | LabelGraphics.ConstructorOptions;
  model?: ModelGraphics | ModelGraphics.ConstructorOptions;
  tileset?: Cesium3DTilesetGraphics | Cesium3DTilesetGraphics.ConstructorOptions;
  path?: PathGraphics | PathGraphics.ConstructorOptions;
  plane?: PlaneGraphics | PlaneGraphics.ConstructorOptions;
  point?: PointGraphics | PointGraphics.ConstructorOptions;
  polygon?: PolygonGraphics | PolygonGraphics.ConstructorOptions;
  polyline?: PolylineGraphics | PolylineGraphics.ConstructorOptions;
  properties?:
    | PropertyBag
    | {
        [key: string]: any;
      };
  polylineVolume?: PolylineVolumeGraphics | PolylineVolumeGraphics.ConstructorOptions;
  rectangle?: RectangleGraphics | RectangleGraphics.ConstructorOptions;
  wall?: WallGraphics | WallGraphics.ConstructorOptions;
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
    EventProps<CesiumEntity> {
  children?: React.ReactNode;
  // If true, the entity will be selected. It works only inside Viewer not CesiumWidget.
  selected?: boolean;
  // If true, the entity will be tracked by the camera. It works only inside Viewer not CesiumWidget.
  tracked?: boolean;
}

const cesiumProps: (keyof EntityCesiumProps)[] = [
  "availability",
  "billboard",
  "box",
  "corridor",
  "cylinder",
  "description",
  "ellipse",
  "ellipsoid",
  "label",
  "model",
  "name",
  "orientation",
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

const cesiumReadonlyProps: (keyof EntityCesiumReadonlyProps)[] = ["id"];

const cesiumEventProps: EventkeyMap<CesiumEntity, EntityCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const Entity = createCesiumComponent<CesiumEntity, EntityProps>({
  name: "Entity",
  create(context, props) {
    if (!context.entityCollection) return;
    const element = new CesiumEntity(props as any); // WORKAROUND: orientation
    if (context.viewer && props.selected) {
      context.viewer.selectedEntity = element;
    }
    if (context.viewer && props.tracked) {
      context.viewer.trackedEntity = element;
    }
    context.entityCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.entityCollection) {
      context.entityCollection.remove(element);
    }
  },
  update(element, props, prevProps, context) {
    if (context.viewer) {
      if (props.selected !== prevProps.selected) {
        if (props.selected) {
          context.viewer.selectedEntity = element;
        } else if (context.viewer.selectedEntity === element) {
          context.viewer.selectedEntity = undefined;
        }
      }

      if (props.tracked !== prevProps.tracked) {
        if (props.tracked) {
          context.viewer.trackedEntity = element;
        } else if (context.viewer.trackedEntity === element) {
          context.viewer.trackedEntity = undefined;
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
  useCommonEvent: true,
});

export default Entity;
