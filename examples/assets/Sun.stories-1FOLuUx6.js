import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{c}from"./component-C4acxoSN.js";import{V as i}from"./Viewer-DDvsarIF.js";import"./index-Ch-GWmDW.js";const m=["glowFactor","show"],u=c({name:"Sun",create(r){if(!r.scene)return;const e=new Cesium.Sun;return r.scene.sun=e,e},destroy(r,e){e.scene&&!e.scene.isDestroyed()&&(e.scene.sun=new Cesium.Sun)},cesiumProps:m,setCesiumPropsAfterCreate:!0}),f={title:"Sun",component:u},s={args:{glowFactor:2,show:!0},render:r=>n.jsx(i,{full:!0,children:n.jsx(u,{...r})})};var o,t,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    glowFactor: 2,
    show: true
  },
  render: args => <Viewer full>
      <Sun {...args} />
    </Viewer>
}`,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const g=["Basic"];export{s as Basic,g as __namedExportsOrder,f as default};
