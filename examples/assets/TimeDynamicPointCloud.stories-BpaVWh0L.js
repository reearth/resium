import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-Ch-GWmDW.js";import{e as f}from"./storybook-DUM5ztUZ.js";import{c as g}from"./component-C4acxoSN.js";import{V as T}from"./Viewer-DDvsarIF.js";import{C as y}from"./Clock-C9FsIXiS.js";import"./index-CMCftnys.js";import"./v4-BOvFkHkt.js";const h=["clippingPlanes","maximumMemoryUsage","modelMatrix","shadows","show","style","intervals"],v=["clock","shading"],P=["onReady"],R={onFrameChange:"frameChanged"},C=g({name:"TimeDynamicPointCloud",create(o,e){var n;if(!o.cesiumWidget||!o.primitiveCollection||!((n=o.cesiumWidget)!=null&&n.clock))return;const t=new Cesium.TimeDynamicPointCloud({...e,clock:e.clock??o.cesiumWidget.clock});if(e.onReady){const i=()=>{var m;(m=e.onReady)==null||m.call(e,t),t.frameChanged.removeEventListener(i)};t.frameChanged.addEventListener(i)}return o.primitiveCollection.add(t),t},destroy(o,e){e.primitiveCollection&&!e.primitiveCollection.isDestroyed()&&e.primitiveCollection.remove(o),o.isDestroyed()||o.destroy()},cesiumProps:h,cesiumReadonlyProps:v,cesiumEventProps:R,otherProps:P,useCommonEvent:!0}),L={title:"TimeDynamicPointCloud",component:C},k=["pointcloud/0.pnts","pointcloud/1.pnts","pointcloud/2.pnts","pointcloud/3.pnts","pointcloud/4.pnts"],r=["2018-07-19T15:18:00Z","2018-07-19T15:18:00.5Z","2018-07-19T15:18:01Z","2018-07-19T15:18:01.5Z","2018-07-19T15:18:02Z","2018-07-19T15:18:02.5Z"],c=Cesium.JulianDate.fromIso8601(r[0]),D=Cesium.JulianDate.fromIso8601(r[r.length-1]),w=Cesium.TimeIntervalCollection.fromIso8601DateArray({iso8601Dates:r,dataCallback:(o,e)=>({uri:k[e]})}),E=new Cesium.Cesium3DTileStyle({pointSize:5}),s={args:{show:!0},render:o=>{const e=p.useRef(null);return a.jsxs(T,{full:!0,shouldAnimate:!0,ref:e,children:[a.jsx(y,{startTime:c,currentTime:c,stopTime:D,clockRange:Cesium.ClockRange.LOOP_STOP}),a.jsx(C,{...o,intervals:w,style:E,onReady:t=>{var n,i;(i=(n=e.current)==null?void 0:n.cesiumElement)==null||i.zoomTo(t,new Cesium.HeadingPitchRange(0,-.5,50))},...f})]})}};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const z=["Basic"];export{s as Basic,z as __namedExportsOrder,L as default};
