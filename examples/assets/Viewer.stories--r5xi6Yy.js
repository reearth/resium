import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./iframe-CtnL6KJg.js";import{n,t as r}from"./storybook-BaKYYFQR.js";import{n as i,t as a}from"./Viewer-LS8FfrH-.js";import{t as o}from"./Entity-TvaiDIpT.js";import{t as s}from"./Entity-noS6NxNR.js";var c,l,u,d,f;e((()=>{n(),s(),i(),c=t(),l={title:`Viewer`,component:a},u={render:e=>(0,c.jsx)(a,{...e,full:!0})},d={render:e=>(0,c.jsx)(a,{...e,full:!0,...r,children:(0,c.jsx)(o,{name:`test`,description:`test!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer {...args} full />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer {...args} full {...events}>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`Events`]}))();export{u as Basic,d as Events,f as __namedExportsOrder,l as default};