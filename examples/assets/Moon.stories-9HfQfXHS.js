import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./component-P3MpLVno.js";import{V as c}from"./Viewer-3OWF8io8.js";import"./index-yIsmwZOr.js";const d=["onlySunLighting","show","textureUrl"],l=["ellipsoid"],p=m({name:"Moon",create(s,e){if(!s.scene)return;const o=new Cesium.Moon(e);return s.scene.moon=o,o},destroy(s,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.moon=new Cesium.Moon)},cesiumProps:d,cesiumReadonlyProps:l}),u=p,h={title:"Moon",component:u},r={args:{show:!0},render:s=>n.jsx(c,{full:!0,children:n.jsx(u,{...s,ellipsoid:new Cesium.Ellipsoid(Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10)})})};var i,t,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => {
    const radius = 10;
    return <Viewer full>
        <Moon {...args} ellipsoid={new Ellipsoid(CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius)} />
      </Viewer>;
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const C=["Basic"];export{r as Basic,C as __namedExportsOrder,h as default};
