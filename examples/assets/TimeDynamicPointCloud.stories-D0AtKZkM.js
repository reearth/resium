import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./iframe-D4wvS9R9.js";import{r as i,t as a}from"./core-D7dEvFYR.js";import{n as o,t as s}from"./storybook-D8QIrnEB.js";import{t as c}from"./Viewer-DBW4on7w.js";import{t as l}from"./Viewer--AfqXkNC.js";import{n as u,t as d}from"./Clock-uIT8pVze.js";var f=t((()=>{u()})),p,m,h,g,_,v=t((()=>{a(),p=[`clippingPlanes`,`maximumMemoryUsage`,`modelMatrix`,`shadows`,`show`,`style`,`intervals`],m=[`clock`,`shading`],h=[`onReady`],g={onFrameChange:`frameChanged`},_=i({name:`TimeDynamicPointCloud`,create(e,t){if(!e.cesiumWidget||!e.primitiveCollection||!e.cesiumWidget?.clock)return;let n=new Cesium.TimeDynamicPointCloud({...t,clock:t.clock??e.cesiumWidget.clock});if(t.onReady){let e=()=>{t.onReady?.(n),n.frameChanged.removeEventListener(e)};n.frameChanged.addEventListener(e)}return e.primitiveCollection.add(n),n},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:p,cesiumReadonlyProps:m,cesiumEventProps:g,otherProps:h,useCommonEvent:!0})})),y,b,x,S,C,w,T,E,D,O,k;t((()=>{y=e(n(),1),f(),o(),l(),v(),b=r(),x={title:`TimeDynamicPointCloud`,component:_},S=[`pointcloud/0.pnts`,`pointcloud/1.pnts`,`pointcloud/2.pnts`,`pointcloud/3.pnts`,`pointcloud/4.pnts`],C=[`2018-07-19T15:18:00Z`,`2018-07-19T15:18:00.5Z`,`2018-07-19T15:18:01Z`,`2018-07-19T15:18:01.5Z`,`2018-07-19T15:18:02Z`,`2018-07-19T15:18:02.5Z`],w=Cesium.JulianDate.fromIso8601(C[0]),T=Cesium.JulianDate.fromIso8601(C[C.length-1]),E=Cesium.TimeIntervalCollection.fromIso8601DateArray({iso8601Dates:C,dataCallback:(e,t)=>({uri:S[t]})}),D=new Cesium.Cesium3DTileStyle({pointSize:5}),O={args:{show:!0},render:e=>{let t=(0,y.useRef)(null);return(0,b.jsxs)(c,{full:!0,shouldAnimate:!0,ref:t,children:[(0,b.jsx)(d,{startTime:w,currentTime:w,stopTime:T,clockRange:Cesium.ClockRange.LOOP_STOP}),(0,b.jsx)(_,{...e,intervals:E,style:D,onReady:e=>{t.current?.cesiumElement?.zoomTo(e,new Cesium.HeadingPitchRange(0,-.5,50))},...s})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Basic`]}))();export{O as Basic,k as __namedExportsOrder,x as default};