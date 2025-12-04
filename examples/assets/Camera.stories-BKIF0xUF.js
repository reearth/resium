import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as p}from"./index-CMCftnys.js";import{r as f}from"./index-Ch-GWmDW.js";import{c as g}from"./component-C4acxoSN.js";import{V as C}from"./Viewer-DDvsarIF.js";import{C as l}from"./CameraFlyTo-DszIrfEb.js";import"./v4-BOvFkHkt.js";import"./CameraOperation-BoxKsWt7.js";const v=["position","direction","up","right","frustum","defaultMoveAmount","defaultLookAmount","defaultRotateAmount","defaultZoomAmount","constrainedAxis","maximumZoomFactor","percentageChanged"],x={onChange:"changed",onMoveEnd:"moveEnd",onMoveStart:"moveStart"},a=g({name:"Camera",create:r=>{var n;return(n=r.scene)==null?void 0:n.camera},cesiumProps:v,cesiumEventProps:x,setCesiumPropsAfterCreate:!0}),D={title:"Camera",component:a},o={render:r=>e.jsxs(C,{full:!0,children:[e.jsx(a,{...r,...p("onMoveEnd","onMoveStart","onChange")}),e.jsx(l,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})},t={render:r=>e.jsx(f.StrictMode,{children:e.jsxs(C,{full:!0,children:[e.jsx(a,{...r,...p("onMoveEnd","onMoveStart","onChange")}),e.jsx(l,{duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})]})})};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const F=["Basic","Strict"];export{o as Basic,t as Strict,F as __namedExportsOrder,D as default};
