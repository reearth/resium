import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-yIsmwZOr.js";import{e as f}from"./storybook-lrzrXzR7.js";import{c as g}from"./component-P3MpLVno.js";import{V as T}from"./Viewer-3OWF8io8.js";import{C as y}from"./Clock-6CAZzq2X.js";import"./index-CjDrOnrV.js";import"./v4-Dz_GI0CC.js";const h=["clippingPlanes","maximumMemoryUsage","modelMatrix","shadows","show","style","intervals"],v=["clock","shading"],P=["onReady"],R={onFrameChange:"frameChanged"},k=g({name:"TimeDynamicPointCloud",create(o,e){var t;if(!o.cesiumWidget||!o.primitiveCollection||!((t=o.cesiumWidget)!=null&&t.clock))return;const n=new Cesium.TimeDynamicPointCloud({...e,clock:e.clock??o.cesiumWidget.clock});if(e.onReady){const i=()=>{var m;(m=e.onReady)==null||m.call(e,n),n.frameChanged.removeEventListener(i)};n.frameChanged.addEventListener(i)}return o.primitiveCollection.add(n),n},destroy(o,e){e.primitiveCollection&&!e.primitiveCollection.isDestroyed()&&e.primitiveCollection.remove(o),o.isDestroyed()||o.destroy()},cesiumProps:h,cesiumReadonlyProps:v,cesiumEventProps:R,otherProps:P,useCommonEvent:!0}),C=k,z={title:"TimeDynamicPointCloud",component:C},D=["pointcloud/0.pnts","pointcloud/1.pnts","pointcloud/2.pnts","pointcloud/3.pnts","pointcloud/4.pnts"],r=["2018-07-19T15:18:00Z","2018-07-19T15:18:00.5Z","2018-07-19T15:18:01Z","2018-07-19T15:18:01.5Z","2018-07-19T15:18:02Z","2018-07-19T15:18:02.5Z"],c=Cesium.JulianDate.fromIso8601(r[0]),w=Cesium.JulianDate.fromIso8601(r[r.length-1]),E=Cesium.TimeIntervalCollection.fromIso8601DateArray({iso8601Dates:r,dataCallback:(o,e)=>({uri:D[e]})}),O=new Cesium.Cesium3DTileStyle({pointSize:5}),s={args:{show:!0},render:o=>{const e=p.useRef(null);return a.jsxs(T,{full:!0,shouldAnimate:!0,ref:e,children:[a.jsx(y,{startTime:c,currentTime:c,stopTime:w,clockRange:Cesium.ClockRange.LOOP_STOP}),a.jsx(C,{...o,intervals:E,style:O,onReady:n=>{var t,i;(i=(t=e.current)==null?void 0:t.cesiumElement)==null||i.zoomTo(n,new Cesium.HeadingPitchRange(0,-.5,50))},...f})]})}};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const A=["Basic"];export{s as Basic,A as __namedExportsOrder,z as default};
