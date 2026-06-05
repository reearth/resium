import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-D8yiWHZa.js";import{t as n}from"./Viewer-BlJPjoxY.js";import{t as r}from"./Viewer-BkOwuFvD.js";import{t as i}from"./CameraFlyTo-5wrwc4A3.js";import{t as a}from"./CameraFlyTo-BaW7kmyM.js";import{i as o,n as s,r as c,t as l}from"./BufferPolyline-Cwu91S3p.js";var u=e((()=>{s()})),d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),a(),r(),o(),d=t(),f={title:`BufferPolylineCollection`,component:c},p=Cesium.Cartesian3.fromDegrees(-95.4,39.8),m=Cesium.Cartesian3.fromDegrees(-94.6,40.2),h=Cesium.Cartesian3.fromDegrees(-94.6,39.8),g=Cesium.Cartesian3.fromDegrees(-95.4,40.2),_=new Float64Array([p.x,p.y,p.z,m.x,m.y,m.z,h.x,h.y,h.z,g.x,g.y,g.z]),v=_.length/3,y=new Cesium.BufferPolylineMaterial({color:Cesium.Color.CYAN,width:5}),b={render:()=>(0,d.jsxs)(n,{full:!0,children:[(0,d.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,d.jsx)(c,{primitiveCountMax:1,vertexCountMax:v,children:(0,d.jsx)(l,{positions:_,material:y})})]})},x={render:()=>{let e=new Cesium.BufferPolylineMaterial({color:Cesium.Color.RED.withAlpha(.4),width:6});return(0,d.jsxs)(n,{full:!0,children:[(0,d.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,d.jsx)(c,{primitiveCountMax:1,vertexCountMax:v,blendOption:Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT,children:(0,d.jsx)(l,{positions:_,material:e})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={vertexCount}>
        <BufferPolyline positions={positions} material={opaqueMaterial} />
      </BufferPolylineCollection>
    </Viewer>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).\n`blendOption` alone is invisible without an alpha-aware material; the\n`BufferPolylineMaterial` here sets `color.alpha < 1` to actually produce\na translucent polyline.",...x.parameters?.docs?.description}}},S=[`Opaque`,`Translucent`]}))();export{b as Opaque,x as Translucent,S as __namedExportsOrder,f as default};