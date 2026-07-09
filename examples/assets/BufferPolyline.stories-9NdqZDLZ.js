import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-LqKZThQS.js";import{t as n}from"./Viewer-TUIROWwx.js";import{t as r}from"./Viewer-DPPsWzV4.js";import{i,n as a,r as o,t as s}from"./BufferPolyline-RV1S7F5b.js";var c=e((()=>{i()})),l,u,d,f,p,m,h;e((()=>{c(),r(),a(),l=t(),u=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883,0),d=Cesium.Cartesian3.fromDegrees(-74,40.5,0),f=new Float64Array([u.x,u.y,u.z,d.x,d.y,d.z]),p={title:`BufferPolyline`,component:s},m={render:e=>(0,l.jsx)(n,{full:!0,children:(0,l.jsx)(o,{primitiveCountMax:1,vertexCountMax:2,children:(0,l.jsx)(s,{...e,positions:f,material:new Cesium.BufferPolylineMaterial({color:Cesium.Color.YELLOW,width:5})})})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={2}>
        <BufferPolyline {...args} positions={positions} material={new BufferPolylineMaterial({
        color: Color.YELLOW,
        width: 5
      })} />
      </BufferPolylineCollection>
    </Viewer>
}`,...m.parameters?.docs?.source}}},h=[`Basic`]}))();export{m as Basic,h as __namedExportsOrder,p as default};