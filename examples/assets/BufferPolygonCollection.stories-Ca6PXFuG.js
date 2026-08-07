import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C5z0sm_V.js";import{t as n}from"./Viewer-DPIcYzgi.js";import{t as r}from"./Viewer-DUdQ1NFJ.js";import{t as i}from"./CameraFlyTo-C_PlOIDc.js";import{t as a}from"./CameraFlyTo-D8w3OmPM.js";import{i as o,n as s,r as c,t as l}from"./BufferPolygon-DSECM8Cy.js";var u=e((()=>{s()})),d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),a(),r(),o(),d=t(),f={title:`BufferPolygonCollection`,component:c},p=Cesium.Cartesian3.fromDegrees(-95.4,39.8,0),m=Cesium.Cartesian3.fromDegrees(-94.6,39.8,0),h=Cesium.Cartesian3.fromDegrees(-95,40.2,0),g=new Float64Array([p.x,p.y,p.z,m.x,m.y,m.z,h.x,h.y,h.z]),_=new Uint32Array([0,1,2]),v=g.length/3,y=_.length,b={render:()=>(0,d.jsxs)(n,{full:!0,children:[(0,d.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,d.jsx)(c,{primitiveCountMax:1,vertexCountMax:v,triangleCountMax:y,children:(0,d.jsx)(l,{positions:g,triangles:_,material:new Cesium.BufferPolygonMaterial({color:Cesium.Color.CYAN})})})]})},x={render:()=>{let e=new Cesium.BufferPolygonMaterial({color:Cesium.Color.BLUE.withAlpha(.3)});return(0,d.jsxs)(n,{full:!0,children:[(0,d.jsx)(i,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,d.jsx)(c,{primitiveCountMax:1,vertexCountMax:v,triangleCountMax:y,blendOption:Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT,children:(0,d.jsx)(l,{positions:g,triangles:_,material:e})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPolygonCollection primitiveCountMax={1} vertexCountMax={vertexCount} triangleCountMax={triangleCount}>
        <BufferPolygon positions={positions} triangles={triangles} material={new BufferPolygonMaterial({
        color: Color.CYAN
      })} />
      </BufferPolygonCollection>
    </Viewer>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).\n`blendOption` alone is invisible without an alpha-aware material; the\n`BufferPolygonMaterial` here sets `color.alpha < 1` to actually produce\na translucent polygon.",...x.parameters?.docs?.description}}},S=[`Opaque`,`Translucent`]}))();export{b as Opaque,x as Translucent,S as __namedExportsOrder,f as default};