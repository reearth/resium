import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./Viewer-Btv2bIgt.js";import{n as r,t as i}from"./CameraFlyTo-D5jTDV4_.js";import{i as a,n as o,r as s,t as c}from"./BufferPolygon-a42iZw8M.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=l((()=>{o(),r(),t(),a(),u=e(),d={title:`BufferPolygonCollection`,component:s},f=Cesium.Cartesian3.fromDegrees(-95.4,39.8,0),p=Cesium.Cartesian3.fromDegrees(-94.6,39.8,0),m=Cesium.Cartesian3.fromDegrees(-95,40.2,0),h=new Float64Array([f.x,f.y,f.z,p.x,p.y,p.z,m.x,m.y,m.z]),g=new Uint32Array([0,1,2]),_=h.length/3,v=g.length,y={render:()=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,triangleCountMax:v,children:(0,u.jsx)(c,{positions:h,triangles:g,material:new Cesium.BufferPolygonMaterial({color:Cesium.Color.CYAN})})})]})},b={render:()=>{let e=new Cesium.BufferPolygonMaterial({color:Cesium.Color.BLUE.withAlpha(.3)});return(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,triangleCountMax:v,blendOption:Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT,children:(0,u.jsx)(c,{positions:h,triangles:g,material:e})})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolygonCollection primitiveCountMax={1} vertexCountMax={vertexCount} triangleCountMax={triangleCount}>
        <BufferPolygon positions={positions} triangles={triangles} material={new BufferPolygonMaterial({
        color: Color.CYAN
      })} />
      </BufferPolygonCollection>
    </Viewer>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const translucentMaterial = new BufferPolygonMaterial({
      color: Color.BLUE.withAlpha(0.3)
    });
    return <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
        <BufferPolygonCollection primitiveCountMax={1} vertexCountMax={vertexCount} triangleCountMax={triangleCount} blendOption={BlendOption.OPAQUE_AND_TRANSLUCENT}>
          <BufferPolygon positions={positions} triangles={triangles} material={translucentMaterial} />
        </BufferPolygonCollection>
      </Viewer>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).\n`blendOption` alone is invisible without an alpha-aware material; the\n`BufferPolygonMaterial` here sets `color.alpha < 1` to actually produce\na translucent polygon.",...b.parameters?.docs?.description}}},x=[`Opaque`,`Translucent`]})))()}S();export{y as Opaque,b as Translucent,x as __namedExportsOrder,d as default};