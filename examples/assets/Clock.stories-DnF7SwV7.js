import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{C as a}from"./Clock-C9FsIXiS.js";import{V as s}from"./Viewer-DDvsarIF.js";import{G as n}from"./Globe-DhyYvLVE.js";import"./component-C4acxoSN.js";import"./index-Ch-GWmDW.js";const d={title:"Clock",component:a},e={render:()=>o.jsxs(s,{full:!0,children:[o.jsx(n,{enableLighting:!0}),o.jsx(a,{startTime:Cesium.JulianDate.fromIso8601("2013-12-25"),currentTime:Cesium.JulianDate.fromIso8601("2013-12-25"),stopTime:Cesium.JulianDate.fromIso8601("2013-12-26"),clockRange:Cesium.ClockRange.LOOP_STOP,clockStep:Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,multiplier:4e3,shouldAnimate:!0})]})};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe enableLighting />
      <Clock startTime={JulianDate.fromIso8601("2013-12-25")} currentTime={JulianDate.fromIso8601("2013-12-25")} stopTime={JulianDate.fromIso8601("2013-12-26")} clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
    clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER} multiplier={4000} // how much time to advance each tick
    shouldAnimate // Animation on by default
    />
    </Viewer>
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const f=["Basic"];export{e as Basic,f as __namedExportsOrder,d as default};
