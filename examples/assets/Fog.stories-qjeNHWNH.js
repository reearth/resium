import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./component-P3MpLVno.js";import{V as c}from"./Viewer-3OWF8io8.js";import{C as u}from"./CameraFlyTo-qmg1bvy4.js";import"./index-yIsmwZOr.js";import"./CameraOperation-CDUpAgP9.js";const d=["density","enabled","heightFalloff","heightScalar","maxHeight","minimumBrightness","renderable","screenSpaceErrorFactor","visualDensityScalar"],g=m({name:"Fog",create(r){if(!r.scene)return;const e=new Cesium.Fog;return r.scene.fog=e,e},destroy(r,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.fog=new Cesium.Fog)},cesiumProps:d,setCesiumPropsAfterCreate:!0}),i=g,y={title:"Fog",component:i},s={args:{enabled:!0},render:r=>t.jsxs(c,{full:!0,children:[t.jsx(u,{destination:Cesium.Cartesian3.fromDegrees(0,0,1e4),orientation:{pitch:Cesium.Math.toRadians(0)},duration:0}),t.jsx(i,{...r})]})};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(0, 0, 10000)} orientation={{
      pitch: CesiumMath.toRadians(0)
    }} duration={0} />
      <Fog {...args} />
    </Viewer>
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const j=["Basic"];export{s as Basic,j as __namedExportsOrder,y as default};
