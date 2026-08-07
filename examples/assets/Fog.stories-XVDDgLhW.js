import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./component-DA2-oKtp.js";import{n as r,t as i}from"./Viewer-Btv2bIgt.js";import{n as a,t as o}from"./CameraFlyTo-D5jTDV4_.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c;function l(){return(l=s((()=>{t(),c=n({name:`Fog`,create(e){if(!e.scene)return;let t=new Cesium.Fog;return e.scene.fog=t,t},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&(t.scene.fog=new Cesium.Fog)},cesiumProps:[`density`,`enabled`,`heightFalloff`,`heightScalar`,`maxHeight`,`minimumBrightness`,`renderable`,`screenSpaceErrorFactor`,`visualDensityScalar`],setCesiumPropsAfterCreate:!0})})))()}var u,d,f,p;function m(){return(m=s((()=>{a(),r(),l(),u=e(),d={title:`Fog`,component:c},f={args:{enabled:!0},render:e=>(0,u.jsxs)(i,{full:!0,children:[(0,u.jsx)(o,{destination:Cesium.Cartesian3.fromDegrees(0,0,1e4),orientation:{pitch:Cesium.Math.toRadians(0)},duration:0}),(0,u.jsx)(c,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(0, 0, 10000)} orientation={{
      pitch: CesiumMath.toRadians(0)
    }} duration={0} />
      <Fog {...args} />
    </Viewer>
}`,...f.parameters?.docs?.source}}},p=[`Basic`]})))()}m();export{f as Basic,p as __namedExportsOrder,d as default};