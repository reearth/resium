import{j as t}from"./iframe-C6gT_53K.js";import{c as n}from"./component-JLmv1WeE.js";import{V as o}from"./Viewer-BpQEPut0.js";import{C as i}from"./CameraFlyTo-vw8grLiH.js";import"./preload-helper-PPVm8Dsz.js";import"./CameraOperation-DGWI4JAc.js";const m=["density","enabled","heightFalloff","heightScalar","maxHeight","minimumBrightness","renderable","screenSpaceErrorFactor","visualDensityScalar"],a=n({name:"Fog",create(r){if(!r.scene)return;const e=new Cesium.Fog;return r.scene.fog=e,e},destroy(r,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.fog=new Cesium.Fog)},cesiumProps:m,setCesiumPropsAfterCreate:!0}),f={title:"Fog",component:a},s={args:{enabled:!0},render:r=>t.jsxs(o,{full:!0,children:[t.jsx(i,{destination:Cesium.Cartesian3.fromDegrees(0,0,1e4),orientation:{pitch:Cesium.Math.toRadians(0)},duration:0}),t.jsx(a,{...r})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(0, 0, 10000)} orientation={{
      pitch: CesiumMath.toRadians(0)
    }} duration={0} />
      <Fog {...args} />
    </Viewer>
}`,...s.parameters?.docs?.source}}};const C=["Basic"];export{s as Basic,C as __namedExportsOrder,f as default};
