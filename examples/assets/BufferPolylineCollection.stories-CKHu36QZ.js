import{n as e}from"./iframe-aHNciSD_.js";import{n as t,t as n}from"./Viewer-DoIIFFlc.js";import{n as r,t as i}from"./CameraFlyTo-BjTvRRLa.js";import{i as a,n as o,r as s,t as c}from"./BufferPolyline-Bmoy2Elw.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=l((()=>{o(),r(),t(),a(),u=e(),d={title:`BufferPolylineCollection`,component:s},f=Cesium.Cartesian3.fromDegrees(-95.4,39.8),p=Cesium.Cartesian3.fromDegrees(-94.6,40.2),m=Cesium.Cartesian3.fromDegrees(-94.6,39.8),h=Cesium.Cartesian3.fromDegrees(-95.4,40.2),g=new Float64Array([f.x,f.y,f.z,p.x,p.y,p.z,m.x,m.y,m.z,h.x,h.y,h.z]),_=g.length/3,v=new Cesium.BufferPolylineMaterial({color:Cesium.Color.CYAN,width:5}),y={render:()=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,children:(0,u.jsx)(c,{positions:g,material:v})})]})},b={render:()=>{let e=new Cesium.BufferPolylineMaterial({color:Cesium.Color.RED.withAlpha(.4),width:6});return(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,blendOption:Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT,children:(0,u.jsx)(c,{positions:g,material:e})})]})}},x=Cesium.Cartesian3.fromDegrees(-95.4,39.8,4e4),S=Cesium.Cartesian3.fromDegrees(-94.6,40.2,4e4),C=Cesium.Cartesian3.fromDegrees(-94.6,39.8,4e4),w=Cesium.Cartesian3.fromDegrees(-95.4,40.2,4e4),T=new Float64Array([x.x,x.y,x.z,S.x,S.y,S.z,C.x,C.y,C.z,w.x,w.y,w.z]),E={render:()=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,4e5),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,children:(0,u.jsx)(c,{positions:T,material:new Cesium.BufferPolylineMaterial({color:Cesium.Color.ORANGE,width:5})})})]})},D={render:()=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(s,{primitiveCountMax:1,vertexCountMax:_,widthUnits:`meters`,children:(0,u.jsx)(c,{positions:g,material:new Cesium.BufferPolylineMaterial({color:Cesium.Color.MAGENTA,width:2e3})})})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).\n`blendOption` alone is invisible without an alpha-aware material; the\n`BufferPolylineMaterial` here sets `color.alpha < 1` to actually produce\na translucent polyline.",...b.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 400_000)} duration={0} />
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={vertexCount} heightReference={HeightReference.CLAMP_TO_GROUND}>
        <BufferPolyline positions={highPositions} material={new BufferPolylineMaterial({
        color: Color.ORANGE,
        width: 5
      })} />
      </BufferPolylineCollection>
    </Viewer>
}`,...E.parameters?.docs?.source},description:{story:"Draping — demonstrates the `heightReference` ctor prop (Cesium 1.145+). The\npolyline vertices sit 40 km above the ellipsoid, but\n`HeightReference.CLAMP_TO_GROUND` drapes the collection onto the surface\nrather than drawing it as geometry of its own, so the lines render on the\nglobe instead of floating above it.\n\nDraping is a whole-collection decision fixed at construction time, not a\nper-primitive one. With a real terrain or 3D Tiles provider mounted,\n`CLAMP_TO_TERRAIN` / `CLAMP_TO_3D_TILE` target those surfaces specifically;\n`CLAMP_TO_GROUND` targets both.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolylineCollection primitiveCountMax={1} vertexCountMax={vertexCount} widthUnits="meters">
        <BufferPolyline positions={positions} material={new BufferPolylineMaterial({
        color: Color.MAGENTA,
        width: 2_000
      })} />
      </BufferPolylineCollection>
    </Viewer>
}`,...D.parameters?.docs?.source},description:{story:'World-space line width — demonstrates the `widthUnits` ctor prop (Cesium\n1.145+). The default `"pixels"` keeps a polyline the same thickness on screen\nat any zoom; `"meters"` measures the width in world space instead, so the\nline grows as you zoom in and shrinks as you zoom out.\n\nThe `width` still lives on the `BufferPolylineMaterial` — `widthUnits` only\nchanges how that number is interpreted, so the 2 000 here reads as 2 km\nrather than an unusable 2 000 px. Zoom the camera to see the difference\nagainst `Opaque`, which uses the pixel default.',...D.parameters?.docs?.description}}},O=[`Opaque`,`Translucent`,`Draped`,`WidthInMeters`]})))()}k();export{E as Draped,y as Opaque,b as Translucent,D as WidthInMeters,O as __namedExportsOrder,d as default};