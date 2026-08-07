import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./Viewer-Btv2bIgt.js";import{n as r,t as i}from"./CameraFlyTo-D5jTDV4_.js";import{n as a,t as o}from"./ScreenSpaceCameraController-DZI0qf7W.js";import{n as s,t as c}from"./ScreenSpaceZoomCameraController-CFBPxUpM.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p;function m(){return(m=l((()=>{r(),a(),t(),s(),u=e(),d={title:`ScreenSpaceZoomCameraController`,component:c},f={args:{zoomSensitivity:1,usePointerPosition:!0,inertiaEnabled:!0},render:e=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(o,{enableInputs:!1,enableCollisionDetection:!1}),(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(139.767,35.681,9e3),orientation:{pitch:Cesium.Math.toRadians(-50)},duration:0}),(0,u.jsx)(c,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    zoomSensitivity: 1,
    usePointerPosition: true,
    inertiaEnabled: true
  },
  render: args => <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo destination={Cartesian3.fromDegrees(139.767, 35.681, 9000)} orientation={{
      pitch: CesiumMath.toRadians(-50)
    }} duration={0} />
      <ScreenSpaceZoomCameraController {...args} />
    </Viewer>
}`,...f.parameters?.docs?.source}}},p=[`Basic`]})))()}m();export{f as Basic,p as __namedExportsOrder,d as default};