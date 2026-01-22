import{j as r}from"./iframe-C6gT_53K.js";import{c as a}from"./component-JLmv1WeE.js";import{V as o}from"./Viewer-BpQEPut0.js";import"./preload-helper-PPVm8Dsz.js";const i=["bounceAnimationTime","enableCollisionDetection","enableInputs","enableLook","enableRotate","enableTilt","enableTranslate","enableZoom","inertiaSpin","inertiaTranslate","inertiaZoom","lookEventTypes","maximumMovementRatio","maximumZoomDistance","minimumCollisionTerrainHeight","minimumPickingTerrainHeight","minimumTrackBallHeight","minimumZoomDistance","rotateEventTypes","tiltEventTypes","translateEventTypes","zoomEventTypes","minimumPickingTerrainDistanceWithInertia","maximumTiltAngle","zoomFactor"],t=a({name:"ScreenSpaceCameraController",create:n=>n.scene?.screenSpaceCameraController,cesiumProps:i,setCesiumPropsAfterCreate:!0}),u={title:"ScreenSpaceCameraController",component:t},e={args:{enableZoom:!0,enableCollisionDetection:!0,enableInputs:!0,enableLook:!0,enableRotate:!0,enableTilt:!0,enableTranslate:!0},render:n=>r.jsx(o,{full:!0,children:r.jsx(t,{...n})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    enableZoom: true,
    enableCollisionDetection: true,
    enableInputs: true,
    enableLook: true,
    enableRotate: true,
    enableTilt: true,
    enableTranslate: true
  },
  render: args => <Viewer full>
      <ScreenSpaceCameraController {...args} />
    </Viewer>
}`,...e.parameters?.docs?.source}}};const p=["Basic"];export{e as Basic,p as __namedExportsOrder,u as default};
