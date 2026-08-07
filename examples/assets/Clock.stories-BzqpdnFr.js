import{n as e,r as t}from"./iframe-B1i0gkyj.js";import{n,t as r}from"./Viewer-Btv2bIgt.js";import{n as i,t as a}from"./Globe-DfmAru9f.js";import{n as o,t as s}from"./Clock-CxJVliOw.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p;function m(){return(m=c((()=>{l=t(),i(),n(),o(),u=e(),d={title:`Clock`,component:s},f={render:()=>{let e=(0,l.useRef)(null),t=(0,l.useMemo)(()=>Cesium.JulianDate.fromIso8601(`2013-12-25`),[]),n=(0,l.useMemo)(()=>Cesium.JulianDate.fromIso8601(`2013-12-26`),[]);return(0,l.useEffect)(()=>{e.current?.cesiumElement?.timeline?.zoomTo(t,n)},[t,n]),(0,u.jsxs)(r,{full:!0,ref:e,children:[(0,u.jsx)(a,{enableLighting:!0}),(0,u.jsx)(s,{startTime:t,currentTime:t,stopTime:n,clockRange:Cesium.ClockRange.LOOP_STOP,clockStep:Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,multiplier:4e3,shouldAnimate:!0})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Basic`]})))()}m();export{f as Basic,p as __namedExportsOrder,d as default};