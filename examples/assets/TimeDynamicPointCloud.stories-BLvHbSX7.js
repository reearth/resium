import{r as c,j as i}from"./iframe-CaYGMnUa.js";import{e as l}from"./storybook-BoWeRQq6.js";import{c as u}from"./component-BQeqpCl1.js";import{V as d}from"./Viewer-Dc3jHWle.js";import{C as p}from"./Clock-D8zvJhuM.js";import"./preload-helper-PPVm8Dsz.js";const C=["clippingPlanes","maximumMemoryUsage","modelMatrix","shadows","show","style","intervals"],f=["clock","shading"],g=["onReady"],T={onFrameChange:"frameChanged"},m=u({name:"TimeDynamicPointCloud",create(o,e){if(!o.cesiumWidget||!o.primitiveCollection||!o.cesiumWidget?.clock)return;const n=new Cesium.TimeDynamicPointCloud({...e,clock:e.clock??o.cesiumWidget.clock});if(e.onReady){const r=()=>{e.onReady?.(n),n.frameChanged.removeEventListener(r)};n.frameChanged.addEventListener(r)}return o.primitiveCollection.add(n),n},destroy(o,e){e.primitiveCollection&&!e.primitiveCollection.isDestroyed()&&e.primitiveCollection.remove(o),o.isDestroyed()||o.destroy()},cesiumProps:C,cesiumReadonlyProps:f,cesiumEventProps:T,otherProps:g,useCommonEvent:!0}),Z={title:"TimeDynamicPointCloud",component:m},y=["pointcloud/0.pnts","pointcloud/1.pnts","pointcloud/2.pnts","pointcloud/3.pnts","pointcloud/4.pnts"],s=["2018-07-19T15:18:00Z","2018-07-19T15:18:00.5Z","2018-07-19T15:18:01Z","2018-07-19T15:18:01.5Z","2018-07-19T15:18:02Z","2018-07-19T15:18:02.5Z"],a=Cesium.JulianDate.fromIso8601(s[0]),h=Cesium.JulianDate.fromIso8601(s[s.length-1]),v=Cesium.TimeIntervalCollection.fromIso8601DateArray({iso8601Dates:s,dataCallback:(o,e)=>({uri:y[e]})}),P=new Cesium.Cesium3DTileStyle({pointSize:5}),t={args:{show:!0},render:o=>{const e=c.useRef(null);return i.jsxs(d,{full:!0,shouldAnimate:!0,ref:e,children:[i.jsx(p,{startTime:a,currentTime:a,stopTime:h,clockRange:Cesium.ClockRange.LOOP_STOP}),i.jsx(m,{...o,intervals:v,style:P,onReady:n=>{e.current?.cesiumElement?.zoomTo(n,new Cesium.HeadingPitchRange(0,-.5,50))},...l})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full shouldAnimate ref={ref}>
        <Clock startTime={start} currentTime={start} stopTime={stop} clockRange={ClockRange.LOOP_STOP} />
        <TimeDynamicPointCloud {...args} intervals={intervals} style={style} onReady={p => {
        ref.current?.cesiumElement?.zoomTo(p, new HeadingPitchRange(0.0, -0.5, 50.0));
      }} {...events} />
      </Viewer>;
  }
}`,...t.parameters?.docs?.source}}};const _=["Basic"];export{t as Basic,_ as __namedExportsOrder,Z as default};
