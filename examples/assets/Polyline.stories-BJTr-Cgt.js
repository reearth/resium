import{n as e}from"./iframe-aHNciSD_.js";import{n as t,t as n}from"./component-rCHsMFAP.js";import{n as r,t as i}from"./storybook--8pSha1L.js";import{n as a,t as o}from"./Viewer-DoIIFFlc.js";import{n as s,t as c}from"./CameraFlyTo-BjTvRRLa.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u;function d(){return(d=l((()=>{t(),u=n({name:`PolylineCollection`,create(e,t){if(!e.primitiveCollection)return;let n=new Cesium.PolylineCollection({modelMatrix:t.modelMatrix,debugShowBoundingVolume:t.debugShowBoundingVolume,length:t.length,scene:e.scene});return e.primitiveCollection.add(n),n},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{polylineCollection:e}},cesiumProps:[`debugShowBoundingVolume`,`length`,`modelMatrix`,`show`]})})))()}var f;function p(){return(p=l((()=>{t(),f=n({name:`Polyline`,create:(e,t)=>{let n=e.polylineCollection?.add(t);if(n)return[n,{userMaterial:!!t.material}]},destroy(e,t,n,r){if(t.polylineCollection&&!t.polylineCollection.isDestroyed()){if(r?.userMaterial){let t=e.material;t&&!t.isDestroyed()&&(e.material=Cesium.Material.fromType(Cesium.Material.ColorType,{color:new Cesium.Color(1,1,1,1)}))}t.polylineCollection.remove(e)}},cesiumProps:[`distanceDisplayCondition`,`id`,`loop`,`material`,`positions`,`show`,`width`],useCommonEvent:!0})})))()}var m,h,g,_,v,y,b;function x(){return(x=l((()=>{s(),r(),d(),a(),p(),m=e(),h={title:`Polyline`,component:f},g=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883),_=[new Cesium.Cartesian3(-75,35,0),new Cesium.Cartesian3(-125,35,0),new Cesium.Cartesian3(-125,135,0)],v={args:{width:10},render:e=>(0,m.jsxs)(o,{full:!0,children:[(0,m.jsx)(u,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(g),children:(0,m.jsx)(f,{...e,positions:_})}),(0,m.jsx)(c,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})},y={args:{width:10},render:e=>(0,m.jsxs)(o,{full:!0,children:[(0,m.jsx)(u,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(g),children:(0,m.jsx)(f,{...e,positions:_,...i})}),(0,m.jsx)(c,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} {...events} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Events`]})))()}x();export{v as Basic,y as Events,b as __namedExportsOrder,h as default};