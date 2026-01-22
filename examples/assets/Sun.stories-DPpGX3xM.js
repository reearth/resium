import{j as n}from"./iframe-C6gT_53K.js";import{c as t}from"./component-JLmv1WeE.js";import{V as a}from"./Viewer-BpQEPut0.js";import"./preload-helper-PPVm8Dsz.js";const u=["glowFactor","show"],o=t({name:"Sun",create(r){if(!r.scene)return;const e=new Cesium.Sun;return r.scene.sun=e,e},destroy(r,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.sun=new Cesium.Sun)},cesiumProps:u,setCesiumPropsAfterCreate:!0}),l={title:"Sun",component:o},s={args:{glowFactor:2,show:!0},render:r=>n.jsx(a,{full:!0,children:n.jsx(o,{...r})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    glowFactor: 2,
    show: true
  },
  render: args => <Viewer full>
      <Sun {...args} />
    </Viewer>
}`,...s.parameters?.docs?.source}}};const d=["Basic"];export{s as Basic,d as __namedExportsOrder,l as default};
