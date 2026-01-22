import{j as n}from"./iframe-C6gT_53K.js";import{c as t}from"./component-JLmv1WeE.js";import{V as a}from"./Viewer-BpQEPut0.js";import"./preload-helper-PPVm8Dsz.js";const u=["onlySunLighting","show","textureUrl"],m=["ellipsoid"],i=t({name:"Moon",create(s,e){if(!s.scene)return;const o=new Cesium.Moon(e);return s.scene.moon=o,o},destroy(s,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.moon=new Cesium.Moon)},cesiumProps:u,cesiumReadonlyProps:m}),R={title:"Moon",component:i},r={args:{show:!0},render:s=>n.jsx(a,{full:!0,children:n.jsx(i,{...s,ellipsoid:new Cesium.Ellipsoid(Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10)})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => {
    const radius = 10;
    return <Viewer full>
        <Moon {...args} ellipsoid={new Ellipsoid(CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius)} />
      </Viewer>;
  }
}`,...r.parameters?.docs?.source}}};const M=["Basic"];export{r as Basic,M as __namedExportsOrder,R as default};
