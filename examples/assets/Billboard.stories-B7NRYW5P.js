import{n as e}from"./iframe-aHNciSD_.js";import{n as t,t as n}from"./component-rCHsMFAP.js";import{n as r,t as i}from"./storybook--8pSha1L.js";import{n as a,t as o}from"./Viewer-DoIIFFlc.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c;function l(){return(l=s((()=>{t(),c=n({name:`BillboardCollection`,create(e,t){if(!e.primitiveCollection)return;let n=new Cesium.BillboardCollection({modelMatrix:t.modelMatrix,debugShowBoundingVolume:t.debugShowBoundingVolume,scene:e.scene,blendOption:t.blendOption});return e.primitiveCollection.add(n),n},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{billboardCollection:e}},cesiumProps:[`blendOption`,`coarseDepthTestDistance`,`debugShowBoundingVolume`,`debugShowTextureAtlas`,`modelMatrix`,`show`,`threePointDepthTestDistance`],setCesiumPropsAfterCreate:!0})})))()}var u;function d(){return(d=s((()=>{t(),u=n({name:`Billboard`,create(e,t){return e.billboardCollection?.add(t)},destroy(e,t){t.billboardCollection&&!t.billboardCollection.isDestroyed()&&t.billboardCollection.remove(e)},cesiumProps:[`alignedAxis`,`color`,`disableDepthTestDistance`,`distanceDisplayCondition`,`eyeOffset`,`height`,`heightReference`,`horizontalOrigin`,`image`,`pixelOffset`,`pixelOffsetScaleByDistance`,`position`,`rotation`,`scale`,`scaleByDistance`,`show`,`sizeInMeters`,`splitDirection`,`translucencyByDistance`,`verticalOrigin`,`width`,`id`],useCommonEvent:!0})})))()}var f,p,m,h,g;function _(){return(_=s((()=>{l(),r(),a(),d(),f=e(),p={title:`Billboard`,component:c},m={args:{image:`example.png`,scale:.1},render:e=>(0,f.jsx)(o,{full:!0,children:(0,f.jsx)(c,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:[[Cesium.Color.ORANGE,new Cesium.Cartesian3(0,0,0)],[Cesium.Color.YELLOW,new Cesium.Cartesian3(1e6,0,0)],[Cesium.Color.GREEN,new Cesium.Cartesian3(0,1e6,0)],[Cesium.Color.CYAN,new Cesium.Cartesian3(0,0,1e6)]].map((t,n)=>(0,f.jsx)(u,{id:`billboard-${n}`,...e,color:t[0],position:t[1]},n))})})},h={args:{image:`example.png`,scale:.1},render:e=>(0,f.jsx)(o,{full:!0,children:(0,f.jsx)(c,{modelMatrix:Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-75.59777,40.03883)),children:(0,f.jsx)(u,{...e,color:Cesium.Color.ORANGE,position:new Cesium.Cartesian3(0,0,0),...i})})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        {([[Color.ORANGE, new Cartesian3(0.0, 0.0, 0.0)], [Color.YELLOW, new Cartesian3(1000000.0, 0.0, 0.0)], [Color.GREEN, new Cartesian3(0.0, 1000000.0, 0.0)], [Color.CYAN, new Cartesian3(0.0, 0.0, 1000000.0)]] as const).map((p, i) => <Billboard key={i} id={\`billboard-\${i}\`} {...args} color={p[0]} position={p[1]} />)}
      </BillboardCollection>
    </Viewer>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    image: "example.png",
    scale: 0.1
  },
  render: args => <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(-75.59777, 40.03883))}>
        <Billboard {...args} color={Color.ORANGE} position={new Cartesian3(0.0, 0.0, 0.0)} {...events} />
      </BillboardCollection>
    </Viewer>
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`Events`]})))()}_();export{m as Basic,h as Events,g as __namedExportsOrder,p as default};