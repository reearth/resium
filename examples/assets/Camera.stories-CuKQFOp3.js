import{n as e,r as t}from"./iframe-aHNciSD_.js";import{n,t as r}from"./component-rCHsMFAP.js";import{n as i,t as a}from"./Viewer-DoIIFFlc.js";import{n as o,t as s}from"./CameraFlyTo-BjTvRRLa.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d;function f(){return(f=c((()=>{n(),l=[`position`,`direction`,`up`,`right`,`frustum`,`defaultMoveAmount`,`defaultLookAmount`,`defaultRotateAmount`,`defaultZoomAmount`,`constrainedAxis`,`maximumZoomFactor`,`percentageChanged`],u={onChange:`changed`,onMoveEnd:`moveEnd`,onMoveStart:`moveStart`},d=r({name:`Camera`,create:e=>e.scene?.camera,cesiumProps:l,cesiumEventProps:u,setCesiumPropsAfterCreate:!0})})))()}var p,m,h,g,_,v,y;function b(){return(b=c((()=>{p=t(),o(),i(),f(),m=e(),{actions:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Camera`,component:d},_={render:e=>(0,m.jsxs)(a,{full:!0,children:[(0,m.jsx)(d,{...e,...h(`onMoveEnd`,`onMoveStart`,`onChange`)}),(0,m.jsx)(s,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})},v={render:e=>(0,m.jsx)(p.StrictMode,{children:(0,m.jsxs)(a,{full:!0,children:[(0,m.jsx)(d,{...e,...h(`onMoveEnd`,`onMoveStart`,`onChange`)}),(0,m.jsx)(s,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <StrictMode>
      <Viewer full>
        <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
        <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
      </Viewer>
    </StrictMode>
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Strict`]})))()}b();export{_ as Basic,v as Strict,y as __namedExportsOrder,g as default};