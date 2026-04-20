import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-DXFqSddf.js";import{r as i,t as a}from"./core-CJ9frRFN.js";import{t as o}from"./Viewer-vipVb3FM.js";import{t as s}from"./Viewer-CpgZ-RsP.js";import{t as c}from"./CameraFlyTo-B-PpUE0P.js";import{t as l}from"./CameraFlyTo-BRGoJm8F.js";var u,d,f,p=t((()=>{a(),u=[`position`,`direction`,`up`,`right`,`frustum`,`defaultMoveAmount`,`defaultLookAmount`,`defaultRotateAmount`,`defaultZoomAmount`,`constrainedAxis`,`maximumZoomFactor`,`percentageChanged`],d={onChange:`changed`,onMoveEnd:`moveEnd`,onMoveStart:`moveStart`},f=i({name:`Camera`,create:e=>e.scene?.camera,cesiumProps:u,cesiumEventProps:d,setCesiumPropsAfterCreate:!0})})),m,h,g,_,v,y,b;t((()=>{m=e(n(),1),l(),s(),p(),h=r(),{actions:g}=__STORYBOOK_MODULE_ACTIONS__,_={title:`Camera`,component:f},v={render:e=>(0,h.jsxs)(o,{full:!0,children:[(0,h.jsx)(f,{...e,...g(`onMoveEnd`,`onMoveStart`,`onChange`)}),(0,h.jsx)(c,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})},y={render:e=>(0,h.jsx)(m.StrictMode,{children:(0,h.jsxs)(o,{full:!0,children:[(0,h.jsx)(f,{...e,...g(`onMoveEnd`,`onMoveStart`,`onChange`)}),(0,h.jsx)(c,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <StrictMode>
      <Viewer full>
        <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
        <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
      </Viewer>
    </StrictMode>
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Strict`]}))();export{v as Basic,y as Strict,b as __namedExportsOrder,_ as default};