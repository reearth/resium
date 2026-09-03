import{n as e}from"./iframe-DBxvnLfe.js";import{n as t,t as n}from"./Viewer-D3hDtTV2.js";import{n as r,t as i}from"./CameraFlyTo-C8HHFJjq.js";import{n as a,t as o}from"./ScreenSpaceCameraController-DZlok6oF.js";import{n as s,t as c}from"./ScreenSpaceTiltOrbitCameraController-DCsbW-Rm.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p;function m(){return(m=l((()=>{r(),a(),t(),s(),u=e(),d={title:`ScreenSpaceTiltOrbitCameraController`,component:c},f={args:{tiltEnabled:!1,orbitEnabled:!1,useDragPosition:!0,dampingEnabled:!0},render:e=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(o,{enableInputs:!1,enableCollisionDetection:!1}),(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(139.767,35.681,2500),orientation:{pitch:Cesium.Math.toRadians(-35)},duration:0}),(0,u.jsx)(c,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tiltEnabled: false,
    orbitEnabled: false,
    useDragPosition: true,
    dampingEnabled: true
  },
  render: args => <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo destination={Cartesian3.fromDegrees(139.767, 35.681, 2500)} orientation={{
      pitch: CesiumMath.toRadians(-35)
    }} duration={0} />
      <ScreenSpaceTiltOrbitCameraController {...args} />
    </Viewer>
}`,...f.parameters?.docs?.source}}},p=[`Basic`]})))()}m();export{f as Basic,p as __namedExportsOrder,d as default};