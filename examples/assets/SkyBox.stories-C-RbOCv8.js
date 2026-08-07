import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C5z0sm_V.js";import{o as n,t as r}from"./core-D9bcybvr.js";import{t as i}from"./Viewer-DPIcYzgi.js";import{t as a}from"./Viewer-DUdQ1NFJ.js";import{n as o,t as s}from"./Scene-y8gDkusP.js";var c=e((()=>{o()})),l,u=e((()=>{r(),l=n({name:`SkyBox`,create:e=>e.scene?.skyBox,cesiumProps:[`sources`,`show`],setCesiumPropsAfterCreate:!0})})),d,f,p,m;e((()=>{c(),a(),u(),d=t(),f={title:`SkyBox`,component:l},p={args:{show:!0},render:e=>(0,d.jsxs)(i,{full:!0,children:[(0,d.jsx)(s,{backgroundColor:Cesium.Color.CORNFLOWERBLUE}),(0,d.jsx)(l,{...e})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Scene backgroundColor={Color.CORNFLOWERBLUE} />
      <SkyBox {...args} />
    </Viewer>
}`,...p.parameters?.docs?.source}}},m=[`Basic`]}))();export{p as Basic,m as __namedExportsOrder,f as default};