import { Cesium3DTilesetGraphics as CesiumCesium3DTilesetGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`Cesium3DTilesetGraphics` is a 3D tileset visualization for the entity.
*/

/*
@scope
Cesium3DTilesetGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type Cesium3DTilesetGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumCesium3DTilesetGraphics, CesiumCesium3DTilesetGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type Cesium3DTilesetGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type Cesium3DTilesetGraphicsProps = Cesium3DTilesetGraphicsCesiumProps &
  Cesium3DTilesetGraphicsCesiumEvents;

const cesiumProps = ["show", "uri", "maximumScreenSpaceError"] as const;

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const Cesium3DTilesetGraphics = createCesiumComponent<
  CesiumCesium3DTilesetGraphics,
  Cesium3DTilesetGraphicsProps
>({
  name: "Cesium3DTilesetGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumCesium3DTilesetGraphics(props);
    context.entity.tileset = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.tileset = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default Cesium3DTilesetGraphics;
