import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./iframe-BwrxWfGF.js";import{n,t as r}from"./storybook-BaKYYFQR.js";import{t as i}from"./Viewer-BagSEOJ5.js";import{t as a}from"./Viewer-CjLeMOA2.js";import{n as o,t as s}from"./GeoJsonDataSource-DZdDnnaZ.js";var c,l,u,d,f,p,m;e((()=>{n(),a(),o(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`GeoJsonDataSource`,component:s},d={type:`Feature`,properties:{name:`Coors Field`,amenity:`Baseball Stadium`,popupContent:`This is where the Rockies play!`},geometry:{type:`Point`,coordinates:[-104.99404,39.75621]}},f=l(`onLoad`),p={args:{show:!0},render:e=>(0,c.jsx)(i,{full:!0,children:(0,c.jsx)(s,{...e,data:d,markerColor:Cesium.Color.RED,onLoad:e=>{e.entities.values[0].name=`Coors Field!`,f(e)},onError:l(`onError`),...r})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Basic`]}))();export{p as Basic,m as __namedExportsOrder,u as default};