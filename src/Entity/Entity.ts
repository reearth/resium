import { Entity as CesiumEntity } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";
import { EventProps } from "../core/EventManager";
import { BillboardGraphicsCesiumProps } from "../BillboardGraphics/BillboardGraphics";
import { BoxGraphicsCesiumProps } from "../BoxGraphics/BoxGraphics";
import { CorridorGraphicsCesiumProps } from "../CorridorGraphics/CorridorGraphics";
import { CylinderGraphicsCesiumProps } from "../CylinderGraphics/CylinderGraphics";
import { EllipseGraphicsCesiumProps } from "../EllipseGraphics/EllipseGraphics";
import { EllipsoidGraphicsCesiumProps } from "../EllipsoidGraphics/EllipsoidGraphics";
import { LabelGraphicsCesiumProps } from "../LabelGraphics/LabelGraphics";
import { ModelGraphicsCesiumProps } from "../ModelGraphics/ModelGraphics";
import { PathGraphicsCesiumProps } from "../PathGraphics/PathGraphics";
import { PlaneGraphicsCesiumProps } from "../PlaneGraphics/PlaneGraphics";
import { PointGraphicsCesiumProps } from "../PointGraphics/PointGraphics";
import { PolygonGraphicsCesiumProps } from "../PolygonGraphics/PolygonGraphics";
import { PolylineGraphicsCesiumProps } from "../PolylineGraphics/PolylineGraphics";
import { PolylineVolumeGraphicsCesiumProps } from "../PolylineVolumeGraphics/PolylineVolumeGraphics";
import { RectangleGraphicsCesiumProps } from "../RectangleGraphics/RectangleGraphics";
import { WallGraphicsCesiumProps } from "../WallGraphics/WallGraphics";

/*
@summary
`Entity` is a basic component for geographical data visualization.

Entity can have one each, with the following components as children:

- [`EntityDescription`](/components/EntityDescription): renders description with React
- [`BillboardGraphics`](/components/BillboardGraphics): a billboard visualization
- [`BoxGraphics`](/components/BoxGraphics): a box visualization
- [`CorriderGraphics`](/components/BillboardGraphics): a corrider visualization
- [`CylinderGraphics`](/components/BillboardGraphics): a cylinder visualization
- [`EllipseGraphics`](/components/BillboardGraphics): a ellipse visualization
- [`EllipsoidGraphics`](/components/BillboardGraphics): a ellipsoid visualization
- [`LabelGraphics`](/components/BillboardGraphics): a label visualization
- [`ModelGraphics`](/components/BillboardGraphics): a model visualization
- [`PathGraphics`](/components/BillboardGraphics): a path visualization
- [`PlaneGraphics`](/components/BillboardGraphics): a plane visualization
- [`PointGraphics`](/components/BillboardGraphics): a point visualization
- [`PolygonGraphics`](/components/BillboardGraphics): a polygon visualization
- [`PolylineGraphics`](/components/BillboardGraphics): a polyline visualization
- [`PolylineVolumeGraphics`](/components/BillboardGraphics): a polyline visualization with volume
- [`RectangleGraphics`](/components/BillboardGraphics): a rectangle visualization
- [`WallGraphics`](/components/BillboardGraphics): a wall visualization

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
  availability?: Cesium.TimeIntervalCollection;
  billboard?: Cesium.BillboardGraphics | BillboardGraphicsCesiumProps;
  box?: Cesium.BoxGraphics | BoxGraphicsCesiumProps;
  corridor?: Cesium.CorridorGraphics | CorridorGraphicsCesiumProps;
  cylinder?: Cesium.CylinderGraphics | CylinderGraphicsCesiumProps;
  description?: Cesium.Property | any;
  ellipse?: Cesium.EllipseGraphics | EllipseGraphicsCesiumProps;
  ellipsoid?: Cesium.EllipsoidGraphics | EllipsoidGraphicsCesiumProps;
  label?: Cesium.LabelGraphics | LabelGraphicsCesiumProps;
  model?: Cesium.ModelGraphics | ModelGraphicsCesiumProps;
  name?: string;
  orientation?: Cesium.Property | Cesium.Matrix4;
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

const cesiumEventProps: EventkeyMap<Cesium.Entity, EntityCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const Entity = createCesiumComponent<
  Cesium.Entity,
  EntityProps,
  {
    entityCollection?: Cesium.EntityCollection;
    viewer?: Cesium.Viewer;
  }
>({
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
          (context.viewer as any).selectedEntity = undefined; // WORKAROUND
        }
      }

      if (props.tracked !== prevProps.tracked) {
        if (props.tracked) {
          context.viewer.trackedEntity = element;
        } else if (context.viewer.trackedEntity === element) {
          (context.viewer as any).trackedEntity = undefined; // WORKAROUND
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
