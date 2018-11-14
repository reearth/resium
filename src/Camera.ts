import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

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
}

export interface CameraCesiumEventProps {
  onChange?: (areaPercentage: number) => void;
  onMoveEnd?: () => void;
  onMoveStart?: () => void;
}

export interface CameraProps extends CameraCesiumProps, CameraCesiumEventProps {}

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
];

const cesiumEventProps: EventkeyMap<Cesium.Camera, keyof CameraCesiumEventProps> = {
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
