import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./component-DA2-oKtp.js";import{n as r,t as i}from"./Viewer-Btv2bIgt.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o;function s(){return(s=a((()=>{t(),o=n({name:`Moon`,create(e,t){if(!e.scene)return;let n=new Cesium.Moon(t);return e.scene.moon=n,n},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&(t.scene.moon=new Cesium.Moon)},cesiumProps:[`onlySunLighting`,`show`,`textureUrl`],cesiumReadonlyProps:[`ellipsoid`]})})))()}var c,l,u,d;function f(){return(f=a((()=>{r(),s(),c=e(),l={title:`Moon`,component:o},u={args:{show:!0},render:e=>(0,c.jsx)(i,{full:!0,children:(0,c.jsx)(o,{...e,ellipsoid:new Cesium.Ellipsoid(Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10,Cesium.Math.LUNAR_RADIUS*10)})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => {
    const radius = 10;
    return <Viewer full>
        <Moon {...args} ellipsoid={new Ellipsoid(CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius, CesiumMath.LUNAR_RADIUS * radius)} />
      </Viewer>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Basic`]})))()}f();export{u as Basic,d as __namedExportsOrder,l as default};