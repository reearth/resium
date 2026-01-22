import{j as i}from"./iframe-C6gT_53K.js";import{e as p}from"./storybook-BoWeRQq6.js";import{c as l}from"./component-JLmv1WeE.js";import{V as a}from"./Viewer-BpQEPut0.js";import{C as m}from"./CameraFlyTo-vw8grLiH.js";import"./preload-helper-PPVm8Dsz.js";import"./CameraOperation-DGWI4JAc.js";const C=["debugShowBoundingVolume","length","modelMatrix","show"],d=l({name:"PolylineCollection",create(e,o){if(!e.primitiveCollection)return;const t=new Cesium.PolylineCollection({modelMatrix:o.modelMatrix,debugShowBoundingVolume:o.debugShowBoundingVolume,length:o.length,scene:e.scene});return e.primitiveCollection.add(t),t},destroy(e,o){o.primitiveCollection&&!o.primitiveCollection.isDestroyed()&&o.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{polylineCollection:e}},cesiumProps:C}),y=["distanceDisplayCondition","id","loop","material","positions","show","width"],s=l({name:"Polyline",create:(e,o)=>e.polylineCollection?.add(o),destroy(e,o){o.polylineCollection&&!o.polylineCollection.isDestroyed()&&o.polylineCollection.remove(e)},cesiumProps:y,useCommonEvent:!0}),F={title:"Polyline",component:s},c=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883),u=[new Cesium.Cartesian3(-75,35,0),new Cesium.Cartesian3(-125,35,0),new Cesium.Cartesian3(-125,135,0)],r={args:{width:10},render:e=>i.jsxs(a,{full:!0,children:[i.jsx(d,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(c),children:i.jsx(s,{...e,positions:u})}),i.jsx(m,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})},n={args:{width:10},render:e=>i.jsxs(a,{full:!0,children:[i.jsx(d,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(c),children:i.jsx(s,{...e,positions:u,...p})}),i.jsx(m,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} {...events} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...n.parameters?.docs?.source}}};const T=["Basic","Events"];export{r as Basic,n as Events,T as __namedExportsOrder,F as default};
