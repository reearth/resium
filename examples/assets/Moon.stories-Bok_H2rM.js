import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D4wvS9R9.js";import{r as n,t as r}from"./core-D7dEvFYR.js";import{t as i}from"./Viewer-DBW4on7w.js";import{t as a}from"./Viewer--AfqXkNC.js";var o,s=e((()=>{r(),o=n({name:`Moon`,create(e,t){if(!e.scene)return;let n=new Cesium.Moon(t);return e.scene.moon=n,n},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&(t.scene.moon=new Cesium.Moon)},cesiumProps:[`onlySunLighting`,`show`,`textureUrl`],cesiumReadonlyProps:[`ellipsoid`]})})),c,l,u,d;e((()=>{a(),s(),c=t(),l={title:`Moon`,component:o},u={args:{show:!0},render:e=>(0,c.jsx)(i,{full:!0,children:(0,c.jsx)(o,{...e,ellipsoid:new Cesium.Ellipsoid(Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10)})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => {
    const radius = 10;
    return <Viewer full>
        <Moon {...args} ellipsoid={new Ellipsoid(CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius)} />
      </Viewer>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Basic`]}))();export{u as Basic,d as __namedExportsOrder,l as default};