import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DXFqSddf.js";import{t as n}from"./Viewer-vipVb3FM.js";import{t as r}from"./Viewer-CpgZ-RsP.js";import{t as i}from"./Globe-h_XzpejL.js";import{t as a}from"./Globe-3Mk_nhxu.js";import{n as o,t as s}from"./Clock-CAZLmMrK.js";var c,l,u,d;e((()=>{a(),r(),o(),c=t(),l={title:`Clock`,component:s},u={render:()=>(0,c.jsxs)(n,{full:!0,children:[(0,c.jsx)(i,{enableLighting:!0}),(0,c.jsx)(s,{startTime:Cesium.JulianDate.fromIso8601(`2013-12-25`),currentTime:Cesium.JulianDate.fromIso8601(`2013-12-25`),stopTime:Cesium.JulianDate.fromIso8601(`2013-12-26`),clockRange:Cesium.ClockRange.LOOP_STOP,clockStep:Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,multiplier:4e3,shouldAnimate:!0})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe enableLighting />
      <Clock startTime={JulianDate.fromIso8601("2013-12-25")} currentTime={JulianDate.fromIso8601("2013-12-25")} stopTime={JulianDate.fromIso8601("2013-12-26")} clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
    clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER} multiplier={4000} // how much time to advance each tick
    shouldAnimate // Animation on by default
    />
    </Viewer>
}`,...u.parameters?.docs?.source}}},d=[`Basic`]}))();export{u as Basic,d as __namedExportsOrder,l as default};