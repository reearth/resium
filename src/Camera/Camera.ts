import {
  Cartesian3,
  Camera as CesiumCamera,
  PerspectiveFrustum,
  PerspectiveOffCenterFrustum,
  OrthographicFrustum,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`Camera` can operate the camera of the scene.
All properties are applied to single camera of the scene.

**Note**: Following code is not recommended as occur extra rendering steps:

```
<Viewer>
  <Scene>
    <Globe>
      <Camera>
        <Entity />
      </Camera>
    </Globe>
  </Scene>
</Viewer>
```

`Camera` component's role is just changing fields of `Viewer#scene#camera`, so following code is recommended.

```
<Viewer>
  <Scene />
  <Globe />
  <Camera />
  <Entity />
</Viewer>
```

For details, refer to "Component location" chapter in [Guide](/guide).
*/

/*
@scope
Camera is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export interface CameraCesiumProps {
  position?: Cartesian3;
  direction?: Cartesian3;
  up?: Cartesian3;
  right?: Cartesian3;
  frustum?: PerspectiveFrustum | PerspectiveOffCenterFrustum | OrthographicFrustum;
  defaultMoveAmount?: number;
  defaultLookAmount?: number;
  defaultRotateAmount?: number;
  defaultZoomAmount?: number;
  constrainedAxis?: Cartesian3;
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

const cesiumProps: (keyof CameraCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumCamera, CameraCesiumEvents> = {
  onChange: "changed",
  onMoveEnd: "moveEnd",
  onMoveStart: "moveStart",
};

const Camera = createCesiumComponent<CesiumCamera, CameraProps>({
  name: "Camera",
  create: context => context.scene?.camera,
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Camera;
