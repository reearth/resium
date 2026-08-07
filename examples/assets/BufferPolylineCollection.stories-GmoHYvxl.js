import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./Viewer-Btv2bIgt.js";import{n as r,t as i}from"./CameraFlyTo-D5jTDV4_.js";import{i as a,n as o,r as s,t as c}from"./BufferPolyline-CDxEIocx.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=l((()=>{o(),r(),t(),a(),u=e(),d={title:`BufferPolylineCollection`,component:s},f=Cesium.Cartesian3.fromDegrees(-95.4,39.8),p=Cesium.Cartesian3.fromDegrees(-94.6,40.2),m=Cesium.Cartesian3.fromDegrees(-94.6,39.8),h=Cesium.Cartesian3.fromDegrees(-95.4,40.2),g=new Float64Array([f.x,f.y,f.z,p.x,p.y,p.z,m.x,m.y,m.z,h.x,h.y,h.z]),_=g.length/3,v=new Cesium.BufferPolylineMaterial({color:Cesium.Color.CYAN,width:5}),y={render:()=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,children:(0,u.jsx)(c,{positions:g,material:v})})]})},b={render:()=>{let e=new Cesium.BufferPolylineMaterial({color:Cesium.Color.RED.withAlpha(.4),width:6});return(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,blendOption:Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT,children:(0,u.jsx)(c,{positions:g,material:e})})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={vertexCount}>
        <BufferPolyline positions={positions} material={opaqueMaterial} />
      </BufferPolylineCollection>
    </Viewer>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const translucentMaterial = new BufferPolylineMaterial({
      color: Color.RED.withAlpha(0.4),
      width: 6
    });
    return <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
        <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={vertexCount} blendOption={BlendOption.OPAQUE_AND_TRANSLUCENT}>
          <BufferPolyline positions={positions} material={translucentMaterial} />
        </BufferPolylineCollection>
      </Viewer>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).\n`blendOption` alone is invisible without an alpha-aware material; the\n`BufferPolylineMaterial` here sets `color.alpha < 1` to actually produce\na translucent polyline.",...b.parameters?.docs?.description}}},x=[`Opaque`,`Translucent`]})))()}S();export{y as Opaque,b as Translucent,x as __namedExportsOrder,d as default};