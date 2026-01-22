import{j as r}from"./iframe-C6gT_53K.js";import{c as o}from"./component-JLmv1WeE.js";import{V as i}from"./Viewer-BpQEPut0.js";import"./preload-helper-PPVm8Dsz.js";const a=["brightnessShift","hueShift","saturationShift","show","perFragmentAtmosphere","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"],s=o({name:"SkyAtmosphere",create:t=>t.scene?.skyAtmosphere,cesiumProps:a,setCesiumPropsAfterCreate:!0}),c={title:"SkyAtmosphere",component:s},e={render:t=>r.jsx(i,{full:!0,children:r.jsx(s,{...t,hueShift:1,saturationShift:1})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <SkyAtmosphere {...args} hueShift={1} saturationShift={1} />
    </Viewer>
}`,...e.parameters?.docs?.source}}};const f=["Basic"];export{e as Basic,f as __namedExportsOrder,c as default};
