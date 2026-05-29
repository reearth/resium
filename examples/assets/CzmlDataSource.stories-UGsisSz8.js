import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-CnOtSqsU.js";import{n as i,t as a}from"./storybook-CRLdXa1c.js";import{t as o}from"./Viewer-QmAkC9jI.js";import{t as s}from"./Viewer-CZKdeXI1.js";import{n as c,t as l}from"./CzmlDataSource-43QbUIFy.js";var u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{u=t(n(),1),i(),s(),c(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`CzmlDataSource`,component:l},m=[{id:`document`,name:`CZML`,version:`1.0`},{id:`shape1`,name:`TOKYO`,position:{cartographicDegrees:[139.77,35.68,2e4]},ellipse:{semiMinorAxis:5e4,semiMajorAxis:5e4,height:2e4,material:{solidColor:{color:{rgba:[0,255,0,100]}}},outline:!0,outlineColor:{rgba:[255,0,0,0]}}}],h=f(`onLoad`),g=e=>{e.entities.values[0].name=`TOKYO!`,h(e)},_={args:{show:!0},render:e=>(0,d.jsx)(o,{full:!0,children:(0,d.jsx)(l,{...e,data:m,onLoad:g,onError:f(`onError`),...a})})},v=URL.createObjectURL(new Blob([JSON.stringify(m)],{type:`application/json`})),y=()=>(0,d.jsx)(`div`,{style:{position:`absolute`,top:8,left:8,padding:`4px 8px`,background:`#000a`,color:`#fff`},children:`Loading…`}),b={name:`Suspense`,args:{show:!0},render:e=>(0,d.jsx)(o,{full:!0,children:(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(y,{}),children:(0,d.jsx)(l,{...e,data:v,suspense:!0,onError:f(`onError`),...a})})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <CzmlDataSource {...args} data={czml} onLoad={onLoad} onError={action("onError")} {...events} />
    </Viewer>
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Suspense fallback={<Loading />}>
        <CzmlDataSource {...args} data={dataUrl} suspense onError={action("onError")} {...events} />
      </Suspense>
    </Viewer>
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`SuspenseStory`]}))();export{_ as Basic,b as SuspenseStory,x as __namedExportsOrder,p as default};