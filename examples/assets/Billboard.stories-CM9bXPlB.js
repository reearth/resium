import{j as r}from"./iframe-CaYGMnUa.js";import{e as d}from"./storybook-BoWeRQq6.js";import{c as n}from"./component-BQeqpCl1.js";import{V as t}from"./Viewer-Dc3jHWle.js";import"./preload-helper-PPVm8Dsz.js";const c=["blendOption","debugShowBoundingVolume","debugShowTextureAtlas","modelMatrix","show"],l=n({name:"BillboardCollection",create(e,o){if(!e.primitiveCollection)return;const i=new Cesium.BillboardCollection({modelMatrix:o.modelMatrix,debugShowBoundingVolume:o.debugShowBoundingVolume,scene:e.scene,blendOption:o.blendOption});return e.primitiveCollection.add(i),i},destroy(e,o){o.primitiveCollection&&!o.primitiveCollection.isDestroyed()&&o.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{billboardCollection:e}},cesiumProps:c}),C=["alignedAxis","color","disableDepthTestDistance","distanceDisplayCondition","eyeOffset","height","heightReference","horizontalOrigin","image","pixelOffset","pixelOffsetScaleByDistance","position","rotation","scale","scaleByDistance","show","sizeInMeters","splitDirection","translucencyByDistance","verticalOrigin","width","id"],m=n({name:"Billboard",create(e,o){return e.billboardCollection?.add(o)},destroy(e,o){o.billboardCollection&&!o.billboardCollection.isDestroyed()&&o.billboardCollection.remove(e)},cesiumProps:C,useCommonEvent:!0}),w={title:"Billboard",component:l},s={args:{image:"example.png",scale:.1},render:e=>r.jsx(t,{full:!0,children:r.jsx(l,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:[[Cesium.Color.ORANGE,new Cesium.Cartesian3(0,0,0)],[Cesium.Color.YELLOW,new Cesium.Cartesian3(1e6,0,0)],[Cesium.Color.GREEN,new Cesium.Cartesian3(0,1e6,0)],[Cesium.Color.CYAN,new Cesium.Cartesian3(0,0,1e6)]].map((o,i)=>r.jsx(m,{id:`billboard-${i}`,...e,color:o[0],position:o[1]},i))})})},a={args:{image:"example.png",scale:.1},render:e=>r.jsx(t,{full:!0,children:r.jsx(l,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:r.jsx(m,{...e,color:Cesium.Color.ORANGE,position:new Cesium.Cartesian3(0,0,0),...d})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        {([[Color.ORANGE, new Cartesian3(0.0, 0.0, 0.0)], [Color.YELLOW, new Cartesian3(1000000.0, 0.0, 0.0)], [Color.GREEN, new Cartesian3(0.0, 1000000.0, 0.0)], [Color.CYAN, new Cartesian3(0.0, 0.0, 1000000.0)]] as const).map((p, i) => <Billboard key={i} id={\`billboard-\${i}\`} {...args} color={p[0]} position={p[1]} />)}
      </BillboardCollection>
    </Viewer>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        <Billboard {...args} color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} {...events} />
      </BillboardCollection>
    </Viewer>
}`,...a.parameters?.docs?.source}}};const x=["Basic","Events"];export{s as Basic,a as Events,x as __namedExportsOrder,w as default};
