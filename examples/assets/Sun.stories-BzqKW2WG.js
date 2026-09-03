import{n as e}from"./iframe-aHNciSD_.js";import{n as t,t as n}from"./component-rCHsMFAP.js";import{n as r,t as i}from"./Viewer-DoIIFFlc.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o;function s(){return(s=a((()=>{t(),o=n({name:`Sun`,create(e){if(!e.scene)return;let t=new Cesium.Sun;return e.scene.sun=t,t},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&(t.scene.sun=new Cesium.Sun)},cesiumProps:[`glowFactor`,`show`],setCesiumPropsAfterCreate:!0})})))()}var c,l,u,d;function f(){return(f=a((()=>{r(),s(),c=e(),l={title:`Sun`,component:o},u={args:{glowFactor:2,show:!0},render:e=>(0,c.jsx)(i,{full:!0,children:(0,c.jsx)(o,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    glowFactor: 2,
    show: true
  },
  render: args => <Viewer full>
      <Sun {...args} />
    </Viewer>
}`,...u.parameters?.docs?.source}}},d=[`Basic`]})))()}f();export{u as Basic,d as __namedExportsOrder,l as default};