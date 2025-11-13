import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{e as w}from"./storybook-lrzrXzR7.js";import{c as p}from"./component-P3MpLVno.js";import{V as C}from"./Viewer-3OWF8io8.js";import{C as y}from"./CameraFlyTo-qmg1bvy4.js";import"./index-CjDrOnrV.js";import"./v4-Dz_GI0CC.js";import"./index-yIsmwZOr.js";import"./CameraOperation-CDUpAgP9.js";const P=["debugShowBoundingVolume","length","modelMatrix","show"],x=p({name:"PolylineCollection",create(e,o){if(!e.primitiveCollection)return;const r=new Cesium.PolylineCollection({modelMatrix:o.modelMatrix,debugShowBoundingVolume:o.debugShowBoundingVolume,length:o.length,scene:e.scene});return e.primitiveCollection.add(r),r},destroy(e,o){o.primitiveCollection&&!o.primitiveCollection.isDestroyed()&&o.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{polylineCollection:e}},cesiumProps:P}),g=x,v=["distanceDisplayCondition","id","loop","material","positions","show","width"],F=p({name:"Polyline",create:(e,o)=>{var r;return(r=e.polylineCollection)==null?void 0:r.add(o)},destroy(e,o){o.polylineCollection&&!o.polylineCollection.isDestroyed()&&o.polylineCollection.remove(e)},cesiumProps:v,useCommonEvent:!0}),t=F,U={title:"Polyline",component:t},f=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883),h=[new Cesium.Cartesian3(-75,35,0),new Cesium.Cartesian3(-125,35,0),new Cesium.Cartesian3(-125,135,0)],n={args:{width:10},render:e=>i.jsxs(C,{full:!0,children:[i.jsx(g,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(f),children:i.jsx(t,{...e,positions:h})}),i.jsx(y,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})},s={args:{width:10},render:e=>i.jsxs(C,{full:!0,children:[i.jsx(g,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(f),children:i.jsx(t,{...e,positions:h,...w})}),i.jsx(y,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})};var l,a,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...(m=(a=n.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} {...events} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const b=["Basic","Events"];export{n as Basic,s as Events,b as __namedExportsOrder,U as default};
