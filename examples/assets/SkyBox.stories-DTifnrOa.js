import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./component-P3MpLVno.js";import{V as i}from"./Viewer-3OWF8io8.js";import{S as u}from"./Scene-CJD0QWbA.js";import"./index-yIsmwZOr.js";const p=["sources","show"],x=m({name:"SkyBox",create:e=>{var s;return(s=e.scene)==null?void 0:s.skyBox},cesiumProps:p,setCesiumPropsAfterCreate:!0}),c=x,k={title:"SkyBox",component:c},r={args:{show:!0},render:e=>o.jsxs(i,{full:!0,children:[o.jsx(u,{backgroundColor:Cesium.Color.CORNFLOWERBLUE}),o.jsx(c,{...e})]})};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Scene backgroundColor={Color.CORNFLOWERBLUE} />
      <SkyBox {...args} />
    </Viewer>
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const f=["Basic"];export{r as Basic,f as __namedExportsOrder,k as default};
