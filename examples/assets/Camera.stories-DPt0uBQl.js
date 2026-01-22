import{j as e,r as m}from"./iframe-C6gT_53K.js";import{c}from"./component-JLmv1WeE.js";import{V as n}from"./Viewer-BpQEPut0.js";import{C as s}from"./CameraFlyTo-vw8grLiH.js";import"./preload-helper-PPVm8Dsz.js";import"./CameraOperation-DGWI4JAc.js";const d=["position","direction","up","right","frustum","defaultMoveAmount","defaultLookAmount","defaultRotateAmount","defaultZoomAmount","constrainedAxis","maximumZoomFactor","percentageChanged"],u={onChange:"changed",onMoveEnd:"moveEnd",onMoveStart:"moveStart"},a=c({name:"Camera",create:r=>r.scene?.camera,cesiumProps:d,cesiumEventProps:u,setCesiumPropsAfterCreate:!0}),{actions:i}=__STORYBOOK_MODULE_ACTIONS__,S={title:"Camera",component:a},o={render:r=>e.jsxs(n,{full:!0,children:[e.jsx(a,{...r,...i("onMoveEnd","onMoveStart","onChange")}),e.jsx(s,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})},t={render:r=>e.jsx(m.StrictMode,{children:e.jsxs(n,{full:!0,children:[e.jsx(a,{...r,...i("onMoveEnd","onMoveStart","onChange")}),e.jsx(s,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <StrictMode>
      <Viewer full>
        <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
        <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
      </Viewer>
    </StrictMode>
}`,...t.parameters?.docs?.source}}};const v=["Basic","Strict"];export{o as Basic,t as Strict,v as __namedExportsOrder,S as default};
