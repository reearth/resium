import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

/*
@summary
`Camera` can operate the camera of the scene.
All properties are applied to single camera of the scene.
*/

/*
@scope
Camera is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export interface CameraCesiumProps {
  position?: Cesium.Cartesian3;
  direction?: Cesium.Cartesian3;
  up?: Cesium.Cartesian3;
  right?: Cesium.Cartesian3;
  frustum?: Cesium.Frustum;
  defaultMoveAmount?: number;
  defaultLookAmount?: number;
  defaultRotateAmount?: number;
  defaultZoomAmount?: number;
  constrainedAxis?: Cesium.Cartesian3;
  maximumTranslateFactor?: number;
  maximumZoomFactor?: number;
  percentageChanged?: number;
}

export interface CameraCesiumEvents {
  onChange?: (areaPercentage: number) => void;
  onMoveEnd?: () => void;
  onMoveStart?: () => void;
}

export interface CameraProps extends CameraCesiumProps, CameraCesiumEvents {}

export interface CameraContext {
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof CameraCesiumProps> = [
  "position",
  "direction",
  "up",
  "right",
  "frustum",
  "defaultMoveAmount",
  "defaultLookAmount",
  "defaultRotateAmount",
  "defaultZoomAmount",
  "constrainedAxis",
  "maximumTranslateFactor",
  "maximumZoomFactor",
  "percentageChanged",
];

const cesiumEventProps: EventkeyMap<Cesium.Camera, keyof CameraCesiumEvents> = {
  changed: "onChange",
  moveEnd: "onMoveEnd",
  moveStart: "onMoveStart",
};

const Camera = createCesiumComponent<Cesium.Camera, CameraProps, CameraContext>({
  name: "camera",
  create(cprops, props, context) {
    return context.scene.camera;
  },
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Camera;
