import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./component-DA2-oKtp.js";import{n as r,r as i,t as a}from"./Controller-WYEmYjHz.js";import{n as o,t as s}from"./Viewer-Btv2bIgt.js";import{n as c,t as l}from"./CameraFlyTo-D5jTDV4_.js";import{n as u,t as d}from"./ScreenSpaceCameraController-DZI0qf7W.js";import{n as f,t as p}from"./ScreenSpaceTiltOrbitCameraController-DCIN6kwP.js";import{n as m,t as h}from"./ScreenSpaceZoomCameraController-CFBPxUpM.js";import{n as g}from"./rolldown-runtime-DkW27tQK.js";var _;function v(){return(v=g((()=>{t(),a(),_=n({name:`HybridScreenSpacePanCameraController`,create(e,t){let n=new Cesium.HybridScreenSpacePanCameraController;if(r(e,n,t.priority))return n},destroy(e,t){i(t,e)},cesiumProps:[`angleThreshold`,`enabled`],cesiumReadonlyProps:[`priority`],setCesiumPropsAfterCreate:!0})})))()}var y,b,x,S,C;function w(){return(w=g((()=>{c(),u(),f(),m(),o(),v(),y=e(),b={title:`HybridScreenSpacePanCameraController`,component:_},x={args:{angleThreshold:Cesium.Math.toRadians(45)},render:e=>(0,y.jsxs)(s,{full:!0,children:[(0,y.jsx)(d,{enableInputs:!1,enableCollisionDetection:!1}),(0,y.jsx)(l,{destination:Cesium.Cartesian3.fromDegrees(139.767,35.681,4e3),orientation:{pitch:Cesium.Math.toRadians(-75)},duration:0}),(0,y.jsx)(_,{...e})]})},S={args:{angleThreshold:Cesium.Math.toRadians(45)},render:e=>(0,y.jsxs)(s,{full:!0,children:[(0,y.jsx)(d,{enableInputs:!1,enableCollisionDetection:!1}),(0,y.jsx)(l,{destination:Cesium.Cartesian3.fromDegrees(139.767,35.681,2500),orientation:{pitch:Cesium.Math.toRadians(-35)},duration:0}),(0,y.jsx)(_,{...e}),(0,y.jsx)(p,{useDragPosition:!0}),(0,y.jsx)(h,{usePointerPosition:!0})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    angleThreshold: CesiumMath.toRadians(45)
  },
  render: args => <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo destination={Cartesian3.fromDegrees(139.767, 35.681, 4000)} orientation={{
      pitch: CesiumMath.toRadians(-75)
    }} duration={0} />
      <HybridScreenSpacePanCameraController {...args} />
    </Viewer>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    angleThreshold: CesiumMath.toRadians(45)
  },
  render: args => <Viewer full>
      <ScreenSpaceCameraController enableInputs={false} enableCollisionDetection={false} />
      <CameraFlyTo destination={Cartesian3.fromDegrees(139.767, 35.681, 2500)} orientation={{
      pitch: CesiumMath.toRadians(-35)
    }} duration={0} />
      <HybridScreenSpacePanCameraController {...args} />
      <ScreenSpaceTiltOrbitCameraController useDragPosition />
      <ScreenSpaceZoomCameraController usePointerPosition />
    </Viewer>
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`CombinedInspectionCamera`]})))()}w();export{x as Basic,S as CombinedInspectionCamera,C as __namedExportsOrder,b as default};