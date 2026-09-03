import{n as e}from"./iframe-aHNciSD_.js";import{n as t,t as n}from"./component-rCHsMFAP.js";import{n as r,r as i,t as a}from"./Controller-WYEmYjHz.js";import{n as o,t as s}from"./Viewer-DoIIFFlc.js";import{n as c,t as l}from"./CameraFlyTo-BjTvRRLa.js";import{n as u,t as d}from"./ScreenSpaceCameraController-HuEWbcl3.js";import{n as f}from"./rolldown-runtime-DkW27tQK.js";var p;function m(){return(m=f((()=>{t(),a(),p=n({name:`ScreenSpaceElevatorCameraController`,create(e,t){let n=new Cesium.ScreenSpaceElevatorCameraController({dragInputs:t.dragInputs});if(r(e,n,t.priority))return n},destroy(e,t){i(t,e)},cesiumProps:[`enabled`,`inertiaEnabled`,`inertialDecay`,`maximumMovementRatio`,`panSpeed`,`pickWorldPosition`],cesiumReadonlyProps:[`dragInputs`,`priority`],setCesiumPropsAfterCreate:!0})})))()}var h,g,_,v;function y(){return(y=f((()=>{c(),u(),o(),m(),h=e(),g={title:`ScreenSpaceElevatorCameraController`,component:p},_={args:{panSpeed:10,inertiaEnabled:!0},render:e=>(0,h.jsxs)(s,{full:!0,children:[(0,h.jsx)(d,{enableInputs:!1,enableCollisionDetection:!1}),(0,h.jsx)(l,{destination:Cesium.Cartesian3.fromDegrees(139.767,35.681,1200),orientation:{pitch:Cesium.Math.toRadians(-12)},duration:0}),(0,h.jsx)(p,{...e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    panSpeed: 10,
    inertiaEnabled: true
  },
  render: args => <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo destination={Cartesian3.fromDegrees(139.767, 35.681, 1200)} orientation={{
      pitch: CesiumMath.toRadians(-12)
    }} duration={0} />
      <ScreenSpaceElevatorCameraController {...args} />
    </Viewer>
}`,..._.parameters?.docs?.source}}},v=[`Basic`]})))()}y();export{_ as Basic,v as __namedExportsOrder,g as default};