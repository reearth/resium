import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-D8yiWHZa.js";import{t as n}from"./Viewer-BlJPjoxY.js";import{t as r}from"./Viewer-BkOwuFvD.js";import{i,n as a,r as o,t as s}from"./BufferPoint-CUUprlln.js";import{t as c}from"./CameraFlyTo-5wrwc4A3.js";import{t as l}from"./CameraFlyTo-BaW7kmyM.js";var u=e((()=>{a()})),d,f,p,m,h,g,_;e((()=>{u(),l(),r(),i(),d=t(),f={title:`BufferPointCollection`,component:o},p=Array.from({length:50},(e,t)=>{let n=t/50*2*Math.PI;return Cesium.Cartesian3.fromDegrees(-95+.3*Math.cos(n),40+.3*Math.sin(n))}),m=new Cesium.BufferPointMaterial({color:Cesium.Color.CYAN,size:12}),h={render:()=>(0,d.jsxs)(n,{full:!0,children:[(0,d.jsx)(c,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,d.jsx)(o,{primitiveCountMax:p.length,children:p.map((e,t)=>(0,d.jsx)(s,{position:e,material:m},t))})]})},g={render:()=>{let e=new Cesium.BufferPointMaterial({color:Cesium.Color.RED.withAlpha(.35),outlineColor:Cesium.Color.YELLOW.withAlpha(.6),outlineWidth:2,size:16});return(0,d.jsxs)(n,{full:!0,children:[(0,d.jsx)(c,{destination:Cesium.Cartesian3.fromDegrees(-95,40,25e4),duration:0}),(0,d.jsx)(o,{primitiveCountMax:p.length,blendOption:Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT,children:p.map((t,n)=>(0,d.jsx)(s,{position:t,material:e},n))})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 250_000)} duration={0} />
      <BufferPointCollection primitiveCountMax={positions.length}>
        {positions.map((position, i) => <BufferPoint key={i} position={position} material={opaqueMaterial} />)}
      </BufferPointCollection>
    </Viewer>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Translucent variant — demonstrates the new `blendOption` ctor prop (Cesium 1.142+).\n`blendOption` alone is invisible without an alpha-aware material; the\n`BufferPointMaterial` here sets `color.alpha < 1` and `outlineColor.alpha < 1`\nto actually produce translucent points.",...g.parameters?.docs?.description}}},_=[`Opaque`,`Translucent`]}))();export{h as Opaque,g as Translucent,_ as __namedExportsOrder,f as default};