import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D4wvS9R9.js";import{r as n,t as r}from"./core-D7dEvFYR.js";import{n as i,t as a}from"./storybook-D8QIrnEB.js";import{t as o}from"./Viewer-DBW4on7w.js";import{t as s}from"./Viewer--AfqXkNC.js";import{t as c}from"./CameraFlyTo-CRv9xAX6.js";import{t as l}from"./CameraFlyTo-cyKo8aR8.js";var u,d=e((()=>{r(),u=n({name:`PolylineCollection`,create(e,t){if(!e.primitiveCollection)return;let n=new Cesium.PolylineCollection({modelMatrix:t.modelMatrix,debugShowBoundingVolume:t.debugShowBoundingVolume,length:t.length,scene:e.scene});return e.primitiveCollection.add(n),n},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{polylineCollection:e}},cesiumProps:[`debugShowBoundingVolume`,`length`,`modelMatrix`,`show`]})})),f=e((()=>{d()})),p,m=e((()=>{r(),p=n({name:`Polyline`,create:(e,t)=>e.polylineCollection?.add(t),destroy(e,t){t.polylineCollection&&!t.polylineCollection.isDestroyed()&&t.polylineCollection.remove(e)},cesiumProps:[`distanceDisplayCondition`,`id`,`loop`,`material`,`positions`,`show`,`width`],useCommonEvent:!0})})),h,g,_,v,y,b,x;e((()=>{l(),i(),f(),s(),m(),h=t(),g={title:`Polyline`,component:p},_=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883),v=[new Cesium.Cartesian3(-75,35,0),new Cesium.Cartesian3(-125,35,0),new Cesium.Cartesian3(-125,135,0)],y={args:{width:10},render:e=>(0,h.jsxs)(o,{full:!0,children:[(0,h.jsx)(u,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(_),children:(0,h.jsx)(p,{...e,positions:v})}),(0,h.jsx)(c,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})},b={args:{width:10},render:e=>(0,h.jsxs)(o,{full:!0,children:[(0,h.jsx)(u,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(_),children:(0,h.jsx)(p,{...e,positions:v,...a})}),(0,h.jsx)(c,{duration:0,destination:Cesium.Cartesian3.fromDegrees(-75.6,40.04,1e3)})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    width: 10
  },
  render: args => <Viewer full>
      <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Polyline {...args} positions={positions} {...events} />
      </PolylineCollection>
      <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(-75.6, 40.04, 1000)} />
    </Viewer>
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`Events`]}))();export{y as Basic,b as Events,x as __namedExportsOrder,g as default};