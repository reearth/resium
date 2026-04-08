import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DXFqSddf.js";import{r as n,t as r}from"./core-CJ9frRFN.js";import{t as i}from"./Viewer-vipVb3FM.js";import{t as a}from"./Viewer-CpgZ-RsP.js";var o,s=e((()=>{r(),o=n({name:`Sun`,create(e){if(!e.scene)return;let t=new Cesium.Sun;return e.scene.sun=t,t},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&(t.scene.sun=new Cesium.Sun)},cesiumProps:[`glowFactor`,`show`],setCesiumPropsAfterCreate:!0})})),c,l,u,d;e((()=>{a(),s(),c=t(),l={title:`Sun`,component:o},u={args:{glowFactor:2,show:!0},render:e=>(0,c.jsx)(i,{full:!0,children:(0,c.jsx)(o,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    glowFactor: 2,
    show: true
  },
  render: args => <Viewer full>
      <Sun {...args} />
    </Viewer>
}`,...u.parameters?.docs?.source}}},d=[`Basic`]}))();export{u as Basic,d as __namedExportsOrder,l as default};