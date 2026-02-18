import{j as o}from"./iframe-CaYGMnUa.js";import{C as t}from"./Clock-D8zvJhuM.js";import{V as r}from"./Viewer-Dc3jHWle.js";import{G as i}from"./Globe-COKm6OGu.js";import"./preload-helper-PPVm8Dsz.js";import"./component-BQeqpCl1.js";const u={title:"Clock",component:t},e={render:()=>o.jsxs(r,{full:!0,children:[o.jsx(i,{enableLighting:!0}),o.jsx(t,{startTime:Cesium.JulianDate.fromIso8601("2013-12-25"),currentTime:Cesium.JulianDate.fromIso8601("2013-12-25"),stopTime:Cesium.JulianDate.fromIso8601("2013-12-26"),clockRange:Cesium.ClockRange.LOOP_STOP,clockStep:Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,multiplier:4e3,shouldAnimate:!0})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe enableLighting />
      <Clock startTime={JulianDate.fromIso8601("2013-12-25")} currentTime={JulianDate.fromIso8601("2013-12-25")} stopTime={JulianDate.fromIso8601("2013-12-26")} clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
    clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER} multiplier={4000} // how much time to advance each tick
    shouldAnimate // Animation on by default
    />
    </Viewer>
}`,...e.parameters?.docs?.source}}};const p=["Basic"];export{e as Basic,p as __namedExportsOrder,u as default};
