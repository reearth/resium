import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-D8yiWHZa.js";import{t as i}from"./Viewer-BlJPjoxY.js";import{t as a}from"./Viewer-BkOwuFvD.js";import{t as o}from"./Globe-Bidig78e.js";import{t as s}from"./Globe-DKmTKTYm.js";import{n as c,t as l}from"./Clock-DmyYPa5I.js";var u,d,f,p,m;e((()=>{u=t(n(),1),s(),a(),c(),d=r(),f={title:`Clock`,component:l},p={render:()=>{let e=(0,u.useRef)(null),t=(0,u.useMemo)(()=>Cesium.JulianDate.fromIso8601(`2013-12-25`),[]),n=(0,u.useMemo)(()=>Cesium.JulianDate.fromIso8601(`2013-12-26`),[]);return(0,u.useEffect)(()=>{e.current?.cesiumElement?.timeline?.zoomTo(t,n)},[t,n]),(0,d.jsxs)(i,{full:!0,ref:e,children:[(0,d.jsx)(o,{enableLighting:!0}),(0,d.jsx)(l,{startTime:t,currentTime:t,stopTime:n,clockRange:Cesium.ClockRange.LOOP_STOP,clockStep:Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,multiplier:4e3,shouldAnimate:!0})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const startTime = useMemo(() => JulianDate.fromIso8601("2013-12-25"), []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const stopTime = useMemo(() => JulianDate.fromIso8601("2013-12-26"), []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Zoom the bottom Timeline widget to the clock's time range so it is bound to the clock.
      ref.current?.cesiumElement?.timeline?.zoomTo(startTime, stopTime);
    }, [startTime, stopTime]);
    return <Viewer full ref={ref}>
        <Globe enableLighting />
        <Clock startTime={startTime} currentTime={startTime} stopTime={stopTime} clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
      clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER} multiplier={4000} // how much time to advance each tick
      shouldAnimate // Animation on by default
      />
      </Viewer>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Basic`]}))();export{p as Basic,m as __namedExportsOrder,f as default};