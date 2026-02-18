import{j as t}from"./iframe-CaYGMnUa.js";import{e as i}from"./storybook-BoWeRQq6.js";import{V as o}from"./Viewer-Dc3jHWle.js";import{E as n}from"./Entity-U1g_xSCa.js";import"./preload-helper-PPVm8Dsz.js";import"./component-BQeqpCl1.js";const u={title:"Viewer",component:o},e={render:s=>t.jsx(o,{...s,full:!0})},r={render:s=>t.jsx(o,{...s,full:!0,...i,children:t.jsx(n,{name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer {...args} full />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer {...args} full {...events}>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...r.parameters?.docs?.source}}};const f=["Basic","Events"];export{e as Basic,r as Events,f as __namedExportsOrder,u as default};
