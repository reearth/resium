import{j as o}from"./iframe-CaYGMnUa.js";import{e as C}from"./storybook-BoWeRQq6.js";import{c as l}from"./component-BQeqpCl1.js";import{V as a}from"./Viewer-Dc3jHWle.js";import"./preload-helper-PPVm8Dsz.js";const p=["blendOption","debugShowBoundingVolume","modelMatrix","show"],m=l({name:"PointPrimitveCollection",create(i,e){if(!i.primitiveCollection)return;const s=new Cesium.PointPrimitiveCollection(e);return i.primitiveCollection.add(s),s},destroy(i,e){e.primitiveCollection&&!e.primitiveCollection.isDestroyed()&&e.primitiveCollection.remove(i),i.isDestroyed()||i.destroy()},provide(i){return{pointPrimitiveCollection:i}},cesiumProps:p}),d=["color","disableDepthTestDistance","distanceDisplayCondition","id","outlineColor","outlineWidth","pixelSize","position","scaleByDistance","show","splitDirection","translucencyByDistance"],r=l({name:"PointPrimitive",create:(i,e)=>i.pointPrimitiveCollection?.add(e),destroy(i,e){e.pointPrimitiveCollection&&!e.pointPrimitiveCollection.isDestroyed()&&e.pointPrimitiveCollection.remove(i)},cesiumProps:d,useCommonEvent:!0}),c=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883),x={title:"PointPrimitive",component:r},t={render:i=>o.jsx(a,{full:!0,children:o.jsxs(m,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(c),children:[o.jsx(r,{...i,color:Cesium.Color.ORANGE,position:new Cesium.Cartesian3(0,0,0)}),o.jsx(r,{...i,color:Cesium.Color.YELLOW,position:new Cesium.Cartesian3(1e6,0,0)}),o.jsx(r,{...i,color:Cesium.Color.GREEN,position:new Cesium.Cartesian3(0,1e6,0)}),o.jsx(r,{...i,color:Cesium.Color.CYAN,position:new Cesium.Cartesian3(0,0,1e6)})]})})},n={render:i=>o.jsx(a,{full:!0,children:o.jsx(m,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(c),children:o.jsx(r,{...i,color:Cesium.Color.ORANGE,position:new Cesium.Cartesian3(0,0,0),...C})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <PointPrimitiveCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <PointPrimitive {...args} color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} />
        <PointPrimitive {...args} color={Color.YELLOW} position={new Cartesian3(1000000.0, 0.0, 0.0)} />
        <PointPrimitive {...args} color={Color.GREEN} position={new Cartesian3(0.0, 1000000.0, 0.0)} />
        <PointPrimitive {...args} color={Color.CYAN} position={new Cartesian3(0.0, 0.0, 1000000.0)} />
      </PointPrimitiveCollection>
    </Viewer>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <PointPrimitiveCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <PointPrimitive {...args} color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} {...events} />
      </PointPrimitiveCollection>
    </Viewer>
}`,...n.parameters?.docs?.source}}};const E=["Basic","Events"];export{t as Basic,n as Events,E as __namedExportsOrder,x as default};
