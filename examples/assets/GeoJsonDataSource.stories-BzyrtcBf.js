import{n as e,r as t}from"./iframe-aHNciSD_.js";import{n,t as r}from"./storybook--8pSha1L.js";import{n as i,t as a}from"./Viewer-DoIIFFlc.js";import{n as o,t as s}from"./GeoJsonDataSource-D6tk90Bm.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=c((()=>{l=t(),n(),i(),o(),u=e(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`GeoJsonDataSource`,component:s},p={type:`Feature`,properties:{name:`Coors Field`,amenity:`Baseball Stadium`,popupContent:`This is where the Rockies play!`},geometry:{type:`Point`,coordinates:[-104.99404,39.75621]}},m=d(`onLoad`),h={args:{show:!0},render:e=>(0,u.jsx)(a,{full:!0,children:(0,u.jsx)(s,{...e,data:p,markerColor:Cesium.Color.RED,onLoad:e=>{e.entities.values[0].name=`Coors Field!`,m(e)},onError:d(`onError`),...r})})},g=URL.createObjectURL(new Blob([JSON.stringify(p)],{type:`application/json`})),_=()=>(0,u.jsx)(`div`,{style:{position:`absolute`,top:8,left:8,padding:`4px 8px`,background:`#000a`,color:`#fff`},children:`Loading…`}),v={name:`Suspense`,args:{show:!0},render:e=>(0,u.jsx)(a,{full:!0,children:(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(_,{}),children:(0,u.jsx)(s,{...e,data:g,suspense:!0,markerColor:Cesium.Color.RED,onError:d(`onError`),...r})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Suspense fallback={<Loading />}>
        <GeoJsonDataSource {...args} data={dataUrl} suspense markerColor={Color.RED} onError={action("onError")} {...events} />
      </Suspense>
    </Viewer>
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`SuspenseStory`]})))()}b();export{h as Basic,v as SuspenseStory,y as __namedExportsOrder,f as default};