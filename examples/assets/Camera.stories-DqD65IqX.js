import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as p}from"./index-CjDrOnrV.js";import{r as f}from"./index-yIsmwZOr.js";import{c as g}from"./component-P3MpLVno.js";import{V as C}from"./Viewer-3OWF8io8.js";import{C as l}from"./CameraFlyTo-qmg1bvy4.js";import"./v4-Dz_GI0CC.js";import"./CameraOperation-CDUpAgP9.js";const v=["position","direction","up","right","frustum","defaultMoveAmount","defaultLookAmount","defaultRotateAmount","defaultZoomAmount","constrainedAxis","maximumZoomFactor","percentageChanged"],x={onChange:"changed",onMoveEnd:"moveEnd",onMoveStart:"moveStart"},M=g({name:"Camera",create:r=>{var n;return(n=r.scene)==null?void 0:n.camera},cesiumProps:v,cesiumEventProps:x,setCesiumPropsAfterCreate:!0}),a=M,F={title:"Camera",component:a},o={render:r=>e.jsxs(C,{full:!0,children:[e.jsx(a,{...r,...p("onMoveEnd","onMoveStart","onChange")}),e.jsx(l,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})},t={render:r=>e.jsx(f.StrictMode,{children:e.jsxs(C,{full:!0,children:[e.jsx(a,{...r,...p("onMoveEnd","onMoveStart","onChange")}),e.jsx(l,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})})};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
      <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <StrictMode>
      <Viewer full>
        <Camera {...args} {...actions("onMoveEnd", "onMoveStart", "onChange")} />
        <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
      </Viewer>
    </StrictMode>
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const y=["Basic","Strict"];export{o as Basic,t as Strict,y as __namedExportsOrder,F as default};
