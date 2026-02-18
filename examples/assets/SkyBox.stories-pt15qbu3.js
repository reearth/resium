import{j as o}from"./iframe-CaYGMnUa.js";import{c as t}from"./component-BQeqpCl1.js";import{V as n}from"./Viewer-Dc3jHWle.js";import{S as a}from"./Scene-C9q5cRVL.js";import"./preload-helper-PPVm8Dsz.js";const c=["sources","show"],s=t({name:"SkyBox",create:e=>e.scene?.skyBox,cesiumProps:c,setCesiumPropsAfterCreate:!0}),l={title:"SkyBox",component:s},r={args:{show:!0},render:e=>o.jsxs(n,{full:!0,children:[o.jsx(a,{backgroundColor:Cesium.Color.CORNFLOWERBLUE}),o.jsx(s,{...e})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Scene backgroundColor={Color.CORNFLOWERBLUE} />
      <SkyBox {...args} />
    </Viewer>
}`,...r.parameters?.docs?.source}}};const d=["Basic"];export{r as Basic,d as __namedExportsOrder,l as default};
