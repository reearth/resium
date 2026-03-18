import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D4wvS9R9.js";import{r as n,t as r}from"./core-D7dEvFYR.js";import{n as i,t as a}from"./storybook-D8QIrnEB.js";import{t as o}from"./Viewer-DBW4on7w.js";import{t as s}from"./Viewer--AfqXkNC.js";var c,l=e((()=>{r(),c=n({name:`BillboardCollection`,create(e,t){if(!e.primitiveCollection)return;let n=new Cesium.BillboardCollection({modelMatrix:t.modelMatrix,debugShowBoundingVolume:t.debugShowBoundingVolume,scene:e.scene,blendOption:t.blendOption});return e.primitiveCollection.add(n),n},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{billboardCollection:e}},cesiumProps:[`blendOption`,`coarseDepthTestDistance`,`debugShowBoundingVolume`,`debugShowTextureAtlas`,`modelMatrix`,`show`,`threePointDepthTestDistance`],setCesiumPropsAfterCreate:!0})})),u=e((()=>{l()})),d,f=e((()=>{r(),d=n({name:`Billboard`,create(e,t){return e.billboardCollection?.add(t)},destroy(e,t){t.billboardCollection&&!t.billboardCollection.isDestroyed()&&t.billboardCollection.remove(e)},cesiumProps:[`alignedAxis`,`color`,`disableDepthTestDistance`,`distanceDisplayCondition`,`eyeOffset`,`height`,`heightReference`,`horizontalOrigin`,`image`,`pixelOffset`,`pixelOffsetScaleByDistance`,`position`,`rotation`,`scale`,`scaleByDistance`,`show`,`sizeInMeters`,`splitDirection`,`translucencyByDistance`,`verticalOrigin`,`width`,`id`],useCommonEvent:!0})})),p,m,h,g,_;e((()=>{u(),i(),s(),f(),p=t(),m={title:`Billboard`,component:c},h={args:{image:`example.png`,scale:.1},render:e=>(0,p.jsx)(o,{full:!0,children:(0,p.jsx)(c,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:[[Cesium.Color.ORANGE,new Cesium.Cartesian3(0,0,0)],[Cesium.Color.YELLOW,new Cesium.Cartesian3(1e6,0,0)],[Cesium.Color.GREEN,new Cesium.Cartesian3(0,1e6,0)],[Cesium.Color.CYAN,new Cesium.Cartesian3(0,0,1e6)]].map((t,n)=>(0,p.jsx)(d,{id:`billboard-${n}`,...e,color:t[0],position:t[1]},n))})})},g={args:{image:`example.png`,scale:.1},render:e=>(0,p.jsx)(o,{full:!0,children:(0,p.jsx)(c,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:(0,p.jsx)(d,{...e,color:Cesium.Color.ORANGE,position:new Cesium.Cartesian3(0,0,0),...a})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        {([[Color.ORANGE, new Cartesian3(0.0, 0.0, 0.0)], [Color.YELLOW, new Cartesian3(1000000.0, 0.0, 0.0)], [Color.GREEN, new Cartesian3(0.0, 1000000.0, 0.0)], [Color.CYAN, new Cartesian3(0.0, 0.0, 1000000.0)]] as const).map((p, i) => <Billboard key={i} id={\`billboard-\${i}\`} {...args} color={p[0]} position={p[1]} />)}
      </BillboardCollection>
    </Viewer>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        <Billboard {...args} color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} {...events} />
      </BillboardCollection>
    </Viewer>
}`,...g.parameters?.docs?.source}}},_=[`Basic`,`Events`]}))();export{h as Basic,g as Events,_ as __namedExportsOrder,m as default};