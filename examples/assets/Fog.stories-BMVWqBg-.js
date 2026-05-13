import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./iframe-DuFfgDSl.js";import{r as n,t as r}from"./core-DYu_jKpo.js";import{t as i}from"./Viewer-B3_iAsrV.js";import{t as a}from"./Viewer-CQC2VmpS.js";import{t as o}from"./CameraFlyTo-DszZ7kja.js";import{t as s}from"./CameraFlyTo-Do0-NCcm.js";var c,l=e((()=>{r(),c=n({name:`Fog`,create(e){if(!e.scene)return;let t=new Cesium.Fog;return e.scene.fog=t,t},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&(t.scene.fog=new Cesium.Fog)},cesiumProps:[`density`,`enabled`,`heightFalloff`,`heightScalar`,`maxHeight`,`minimumBrightness`,`renderable`,`screenSpaceErrorFactor`,`visualDensityScalar`],setCesiumPropsAfterCreate:!0})})),u,d,f,p;e((()=>{s(),a(),l(),u=t(),d={title:`Fog`,component:c},f={args:{enabled:!0},render:e=>(0,u.jsxs)(i,{full:!0,children:[(0,u.jsx)(o,{destination:Cesium.Cartesian3.fromDegrees(0,0,1e4),orientation:{pitch:Cesium.Math.toRadians(0)},duration:0}),(0,u.jsx)(c,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(0, 0, 10000)} orientation={{
      pitch: CesiumMath.toRadians(0)
    }} duration={0} />
      <Fog {...args} />
    </Viewer>
}`,...f.parameters?.docs?.source}}},p=[`Basic`]}))();export{f as Basic,p as __namedExportsOrder,d as default};