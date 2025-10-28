import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./component-P3MpLVno.js";import{V as c}from"./Viewer-DzJqVukv.js";import{C as u}from"./CameraFlyTo-qmg1bvy4.js";import"./index-yIsmwZOr.js";import"./CameraOperation-CDUpAgP9.js";const d=["density","enabled","minimumBrightness","screenSpaceErrorFactor","renderable"],p=m({name:"Fog",create(r){if(!r.scene)return;const e=new Cesium.Fog;return r.scene.fog=e,e},destroy(r,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.fog=new Cesium.Fog)},cesiumProps:d,setCesiumPropsAfterCreate:!0}),i=p,j={title:"Fog",component:i},s={args:{enabled:!0},render:r=>o.jsxs(c,{full:!0,children:[o.jsx(u,{destination:Cesium.Cartesian3.fromDegrees(0,0,1e4),orientation:{pitch:Cesium.Math.toRadians(0)},duration:0}),o.jsx(i,{...r})]})};var n,t,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(0, 0, 10000)} orientation={{
      pitch: CesiumMath.toRadians(0)
    }} duration={0} />
      <Fog {...args} />
    </Viewer>
}`,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const w=["Basic"];export{s as Basic,w as __namedExportsOrder,j as default};
