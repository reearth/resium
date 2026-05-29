import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./iframe-Bq5y4kci.js";import{n,t as r}from"./Entity-Cb0xg_Yz.js";import{n as i,t as a}from"./VrtViewer-Ck5UPR9c.js";import{n as o,t as s}from"./PointGraphics-ExBaTSjx.js";var c,l,u,d;e((()=>{i(),s(),n(),c=t(),l={title:`VRT/Entity`,tags:[`vrt`],parameters:{layout:`fullscreen`,docs:{description:{component:"Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the\ntest runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`."}}}},u={render:()=>(0,c.jsx)(a,{children:(0,c.jsx)(r,{position:Cesium.Cartesian3.fromDegrees(-100,40),children:(0,c.jsx)(o,{pixelSize:20,color:Cesium.Color.RED})})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <VrtViewer>
      <Entity position={Cartesian3.fromDegrees(-100, 40)}>
        <PointGraphics pixelSize={20} color={Color.RED} />
      </Entity>
    </VrtViewer>
}`,...u.parameters?.docs?.source}}},d=[`Entities`]}))();export{u as Entities,d as __namedExportsOrder,l as default};