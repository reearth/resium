import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{e as g}from"./storybook-DUM5ztUZ.js";import{c as p}from"./component-C4acxoSN.js";import{V as u}from"./Viewer-DDvsarIF.js";import"./index-CMCftnys.js";import"./v4-BOvFkHkt.js";import"./index-Ch-GWmDW.js";const f=["blendOption","debugShowBoundingVolume","debugShowTextureAtlas","modelMatrix","show"],l=p({name:"BillboardCollection",create(e,o){if(!e.primitiveCollection)return;const r=new Cesium.BillboardCollection({modelMatrix:o.modelMatrix,debugShowBoundingVolume:o.debugShowBoundingVolume,scene:e.scene,blendOption:o.blendOption});return e.primitiveCollection.add(r),r},destroy(e,o){o.primitiveCollection&&!o.primitiveCollection.isDestroyed()&&o.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{billboardCollection:e}},cesiumProps:f}),w=["alignedAxis","color","disableDepthTestDistance","distanceDisplayCondition","eyeOffset","height","heightReference","horizontalOrigin","image","pixelOffset","pixelOffsetScaleByDistance","position","rotation","scale","scaleByDistance","show","sizeInMeters","splitDirection","translucencyByDistance","verticalOrigin","width","id"],b=p({name:"Billboard",create(e,o){var r;return(r=e.billboardCollection)==null?void 0:r.add(o)},destroy(e,o){o.billboardCollection&&!o.billboardCollection.isDestroyed()&&o.billboardCollection.remove(e)},cesiumProps:w,useCommonEvent:!0}),y={title:"Billboard",component:l},s={args:{image:"example.png",scale:.1},render:e=>i.jsx(u,{full:!0,children:i.jsx(l,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:[[Cesium.Color.ORANGE,new Cesium.Cartesian3(0,0,0)],[Cesium.Color.YELLOW,new Cesium.Cartesian3(1e6,0,0)],[Cesium.Color.GREEN,new Cesium.Cartesian3(0,1e6,0)],[Cesium.Color.CYAN,new Cesium.Cartesian3(0,0,1e6)]].map((o,r)=>i.jsx(b,{id:`billboard-${r}`,...e,color:o[0],position:o[1]},r))})})},a={args:{image:"example.png",scale:.1},render:e=>i.jsx(u,{full:!0,children:i.jsx(l,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:i.jsx(b,{...e,color:Cesium.Color.ORANGE,position:new Cesium.Cartesian3(0,0,0),...g})})})};var n,t,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        {([[Color.ORANGE, new Cartesian3(0.0, 0.0, 0.0)], [Color.YELLOW, new Cartesian3(1000000.0, 0.0, 0.0)], [Color.GREEN, new Cartesian3(0.0, 1000000.0, 0.0)], [Color.CYAN, new Cartesian3(0.0, 0.0, 1000000.0)]] as const).map((p, i) => <Billboard key={i} id={\`billboard-\${i}\`} {...args} color={p[0]} position={p[1]} />)}
      </BillboardCollection>
    </Viewer>
}`,...(m=(t=s.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,c,C;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        <Billboard {...args} color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} {...events} />
      </BillboardCollection>
    </Viewer>
}`,...(C=(c=a.parameters)==null?void 0:c.docs)==null?void 0:C.source}}};const N=["Basic","Events"];export{s as Basic,a as Events,N as __namedExportsOrder,y as default};
