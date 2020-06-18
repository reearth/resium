import { Camera as CesiumCamera } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

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

export type CameraCesiumProps = PickCesiumProps<CesiumCamera, typeof cesiumProps>;

export type CameraCesiumEvents = {
  onChange?: (areaPercentage: number) => void;
  onMoveEnd?: () => void;
  onMoveStart?: () => void;
};

export type CameraProps = CameraCesiumProps & CameraCesiumEvents;

const cesiumProps = [
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
] as const;

const cesiumEventProps: EventkeyMap<CesiumCamera, CameraCesiumEvents> = {
  onChange: "changed",
  onMoveEnd: "moveEnd",
  onMoveStart: "moveStart",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumCamera,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps][]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const Camera = createCesiumComponent<CesiumCamera, CameraProps>({
  name: "Camera",
  create: context => context.scene?.camera,
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Camera;
