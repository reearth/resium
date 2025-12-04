import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./component-C4acxoSN.js";import{V as c}from"./Viewer-DDvsarIF.js";import{C as u}from"./CameraFlyTo-DszIrfEb.js";import"./index-Ch-GWmDW.js";import"./CameraOperation-BoxKsWt7.js";const d=["density","enabled","heightFalloff","heightScalar","maxHeight","minimumBrightness","renderable","screenSpaceErrorFactor","visualDensityScalar"],i=m({name:"Fog",create(r){if(!r.scene)return;const e=new Cesium.Fog;return r.scene.fog=e,e},destroy(r,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.fog=new Cesium.Fog)},cesiumProps:d,setCesiumPropsAfterCreate:!0}),F={title:"Fog",component:i},s={args:{enabled:!0},render:r=>t.jsxs(c,{full:!0,children:[t.jsx(u,{destination:Cesium.Cartesian3.fromDegrees(0,0,1e4),orientation:{pitch:Cesium.Math.toRadians(0)},duration:0}),t.jsx(i,{...r})]})};var a,n,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(0, 0, 10000)} orientation={{
      pitch: CesiumMath.toRadians(0)
    }} duration={0} />
      <Fog {...args} />
    </Viewer>
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const y=["Basic"];export{s as Basic,y as __namedExportsOrder,F as default};
