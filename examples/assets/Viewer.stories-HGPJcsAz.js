import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{e as d}from"./storybook-DUM5ztUZ.js";import{V as o}from"./Viewer-DDvsarIF.js";import{E as l}from"./Entity-D-Yw-6cm.js";import"./index-CMCftnys.js";import"./v4-BOvFkHkt.js";import"./component-C4acxoSN.js";import"./index-Ch-GWmDW.js";const v={title:"Viewer",component:o},e={render:s=>t.jsx(o,{...s,full:!0})},r={render:s=>t.jsx(o,{...s,full:!0,...d,children:t.jsx(l,{name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})})};var i,n,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Viewer {...args} full />
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Viewer {...args} full {...events}>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const S=["Basic","Events"];export{e as Basic,r as Events,S as __namedExportsOrder,v as default};
