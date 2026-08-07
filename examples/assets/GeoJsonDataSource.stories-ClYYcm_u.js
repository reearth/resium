import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-C5z0sm_V.js";import{n as i,t as a}from"./storybook-CEsrIiwO.js";import{t as o}from"./Viewer-DPIcYzgi.js";import{t as s}from"./Viewer-DUdQ1NFJ.js";import{n as c,t as l}from"./GeoJsonDataSource-C2RpsU2w.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{u=t(n(),1),i(),s(),c(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`GeoJsonDataSource`,component:l},m={type:`Feature`,properties:{name:`Coors Field`,amenity:`Baseball Stadium`,popupContent:`This is where the Rockies play!`},geometry:{type:`Point`,coordinates:[-104.99404,39.75621]}},h=f(`onLoad`),g={args:{show:!0},render:e=>(0,d.jsx)(o,{full:!0,children:(0,d.jsx)(l,{...e,data:m,markerColor:Cesium.Color.RED,onLoad:e=>{e.entities.values[0].name=`Coors Field!`,h(e)},onError:f(`onError`),...a})})},_=URL.createObjectURL(new Blob([JSON.stringify(m)],{type:`application/json`})),v=()=>(0,d.jsx)(`div`,{style:{position:`absolute`,top:8,left:8,padding:`4px 8px`,background:`#000a`,color:`#fff`},children:`Loading…`}),y={name:`Suspense`,args:{show:!0},render:e=>(0,d.jsx)(o,{full:!0,children:(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(v,{}),children:(0,d.jsx)(l,{...e,data:_,suspense:!0,markerColor:Cesium.Color.RED,onError:f(`onError`),...a})})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <GeoJsonDataSource {...args} data={data} markerColor={Color.RED} onLoad={g => {
      // You can process the data source here
      g.entities.values[0].name = "Coors Field!";
      onLoadAction(g);
    }} onError={action("onError")} {...events} />
    </Viewer>
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Suspense fallback={<Loading />}>
        <GeoJsonDataSource {...args} data={dataUrl} suspense markerColor={Color.RED} onError={action("onError")} {...events} />
      </Suspense>
    </Viewer>
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`SuspenseStory`]}))();export{g as Basic,y as SuspenseStory,b as __namedExportsOrder,p as default};