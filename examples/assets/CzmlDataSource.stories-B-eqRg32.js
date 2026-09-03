import{n as e,r as t}from"./iframe-aHNciSD_.js";import{n,t as r}from"./storybook--8pSha1L.js";import{n as i,t as a}from"./Viewer-DoIIFFlc.js";import{n as o,t as s}from"./CzmlDataSource-DsNdisw-.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=c((()=>{l=t(),n(),i(),o(),u=e(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`CzmlDataSource`,component:s},p=[{id:`document`,name:`CZML`,version:`1.0`},{id:`shape1`,name:`TOKYO`,position:{cartographicDegrees:[139.77,35.68,2e4]},ellipse:{semiMinorAxis:5e4,semiMajorAxis:5e4,height:2e4,material:{solidColor:{color:{rgba:[0,255,0,100]}}},outline:!0,outlineColor:{rgba:[255,0,0,0]}}}],m=d(`onLoad`),h=e=>{e.entities.values[0].name=`TOKYO!`,m(e)},g={args:{show:!0},render:e=>(0,u.jsx)(a,{full:!0,children:(0,u.jsx)(s,{...e,data:p,onLoad:h,onError:d(`onError`),...r})})},_=URL.createObjectURL(new Blob([JSON.stringify(p)],{type:`application/json`})),v=()=>(0,u.jsx)(`div`,{style:{position:`absolute`,top:8,left:8,padding:`4px 8px`,background:`#000a`,color:`#fff`},children:`Loading…`}),y={name:`Suspense`,args:{show:!0},render:e=>(0,u.jsx)(a,{full:!0,children:(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(v,{}),children:(0,u.jsx)(s,{...e,data:_,suspense:!0,onError:d(`onError`),...r})})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <CzmlDataSource {...args} data={czml} onLoad={onLoad} onError={action("onError")} {...events} />
    </Viewer>
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Suspense fallback={<Loading />}>
        <CzmlDataSource {...args} data={dataUrl} suspense onError={action("onError")} {...events} />
      </Suspense>
    </Viewer>
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`SuspenseStory`]})))()}x();export{g as Basic,y as SuspenseStory,b as __namedExportsOrder,f as default};