import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C5z0sm_V.js";import{t as n}from"./Viewer-DPIcYzgi.js";import{t as r}from"./Viewer-DUdQ1NFJ.js";import{i,n as a,r as o,t as s}from"./BufferPolygon-DSECM8Cy.js";var c=e((()=>{i()})),l,u,d,f,p,m,h,g,_;e((()=>{c(),r(),a(),l=t(),u=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883,0),d=Cesium.Cartesian3.fromDegrees(-74.5,40.03883,0),f=Cesium.Cartesian3.fromDegrees(-75,40.5,0),p=new Float64Array([u.x,u.y,u.z,d.x,d.y,d.z,f.x,f.y,f.z]),m=new Uint32Array([0,1,2]),h={title:`BufferPolygon`,component:s},g={render:e=>(0,l.jsx)(n,{full:!0,children:(0,l.jsx)(o,{primitiveCountMax:1,vertexCountMax:3,triangleCountMax:3,children:(0,l.jsx)(s,{...e,positions:p,triangles:m,material:new Cesium.BufferPolygonMaterial({color:Cesium.Color.CYAN})})})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <BufferPolygonCollection primitiveCountMax={1} vertexCountMax={3} triangleCountMax={3}>
        <BufferPolygon {...args} positions={positions} triangles={triangles} material={new BufferPolygonMaterial({
        color: Color.CYAN
      })} />
      </BufferPolygonCollection>
    </Viewer>
}`,...g.parameters?.docs?.source}}},_=[`Basic`]}))();export{g as Basic,_ as __namedExportsOrder,h as default};