import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./Viewer-Btv2bIgt.js";import{i as r,n as i,r as a,t as o}from"./BufferPoint-C4bbi7_a.js";import{n as s,t as c}from"./CameraFlyTo-D5jTDV4_.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g;function _(){return(_=l((()=>{i(),s(),t(),r(),u=e(),d={title:`BufferPointCollection`,component:a},f=Array.from({length:50},(e,t)=>{let n=t/50*2*Math.PI;return Cesium.Cartesian3.fromDegrees(-95+.3*Math.cos(n),40+.3*Math.sin(n))}),p=new Cesium.BufferPointMaterial({color:Cesium.Color.CYAN,size:12}),m={render:()=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(c,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(a,{primitiveCountMax:f.length,children:f.map((e,t)=>(0,u.jsx)(o,{position:e,material:p},t))})]})},h={render:()=>{let e=new Cesium.BufferPointMaterial({color:Cesium.Color.RED.withAlpha(.35),outlineColor:Cesium.Color.YELLOW.withAlpha(.6),outlineWidth:2,size:16});return(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(c,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,u.jsx)(a,{primitiveCountMax:f.length,blendOption:Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT,children:f.map((t,n)=>(0,u.jsx)(o,{position:t,material:e},n))})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPointCollection primitiveCountMax={positions.length}>
        {positions.map((position, i) => <BufferPoint key={i} position={position} material={opaqueMaterial} />)}
      </BufferPointCollection>
    </Viewer>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const translucentMaterial = new BufferPointMaterial({
      color: Color.RED.withAlpha(0.35),
      outlineColor: Color.YELLOW.withAlpha(0.6),
      outlineWidth: 2,
      size: 16
    });
    return <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
        <BufferPointCollection primitiveCountMax={positions.length} blendOption={BlendOption.OPAQUE_AND_TRANSLUCENT}>
          {positions.map((position, i) => <BufferPoint key={i} position={position} material={translucentMaterial} />)}
        </BufferPointCollection>
      </Viewer>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).\n`blendOption` alone is invisible without an alpha-aware material; the\n`BufferPointMaterial` here sets `color.alpha < 1` and `outlineColor.alpha < 1`\nto actually produce translucent points.",...h.parameters?.docs?.description}}},g=[`Opaque`,`Translucent`]})))()}_();export{m as Opaque,h as Translucent,g as __namedExportsOrder,d as default};