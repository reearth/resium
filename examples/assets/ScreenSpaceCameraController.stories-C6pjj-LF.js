import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./component-P3MpLVno.js";import{V as s}from"./Viewer-3OWF8io8.js";import"./index-yIsmwZOr.js";const c=["bounceAnimationTime","enableCollisionDetection","enableInputs","enableLook","enableRotate","enableTilt","enableTranslate","enableZoom","inertiaSpin","inertiaTranslate","inertiaZoom","lookEventTypes","maximumMovementRatio","maximumZoomDistance","minimumCollisionTerrainHeight","minimumPickingTerrainHeight","minimumTrackBallHeight","minimumZoomDistance","rotateEventTypes","tiltEventTypes","translateEventTypes","zoomEventTypes","minimumPickingTerrainDistanceWithInertia","maximumTiltAngle","zoomFactor"],u=m({name:"ScreenSpaceCameraController",create:n=>{var r;return(r=n.scene)==null?void 0:r.screenSpaceCameraController},cesiumProps:c,setCesiumPropsAfterCreate:!0}),l=u,S={title:"ScreenSpaceCameraController",component:l},e={args:{enableZoom:!0,enableCollisionDetection:!0,enableInputs:!0,enableLook:!0,enableRotate:!0,enableTilt:!0,enableTranslate:!0},render:n=>t.jsx(s,{full:!0,children:t.jsx(l,{...n})})};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const g=["Basic"];export{e as Basic,g as __namedExportsOrder,S as default};
