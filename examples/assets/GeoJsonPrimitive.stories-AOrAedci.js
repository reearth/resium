import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-DBcQOIHP.js";import{t as i}from"./Viewer-CdXWYmOr.js";import{t as a}from"./Viewer-TUsGuJt-.js";import{t as o}from"./CameraFlyTo-DBps_SqK.js";import{t as s}from"./CameraFlyTo-CLNGVUsf.js";import{n as c,t as l}from"./GeoJsonPrimitive-CVwzXmAQ.js";function u(e,t){let{pointMaterial:n,polylineMaterial:r,polygonMaterial:i}=t,a=new Cesium.BufferPrimitive,o=[[e.points,n],[e.polylines,r],[e.polygons,i]];for(let[e,t]of o){if(!e||!t)continue;let n=e.primitiveCount;for(let r=0;r<n;r++)e.get(r,a),a.setMaterial(t)}}var d,f,p,m,h,g,_,v;e((()=>{d=t(n(),1),s(),a(),c(),f=r(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`GeoJsonPrimitive`,component:l},h={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[-95,40]},properties:{id:`p1`}},{type:`Feature`,geometry:{type:`LineString`,coordinates:[[-96,39.5],[-94,40.5]]},properties:{id:`l1`}}]},g={render:e=>(0,f.jsxs)(i,{full:!0,children:[(0,f.jsx)(o,{destination:Cesium.Cartesian3.fromDegrees(-95,40,1e6),duration:0}),(0,f.jsx)(l,{...e,data:h,onReady:e=>{p(`onReady`)(e),u(e,{pointMaterial:new Cesium.BufferPointMaterial({size:18,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2}),polylineMaterial:new Cesium.BufferPolylineMaterial({width:4,color:Cesium.Color.YELLOW})})},onError:p(`onError`)})]})},_={render:e=>{let t=(0,d.useMemo)(()=>{let e=[];for(let t=-96;t<=-94;t+=.2)for(let n=39;n<=41;n+=.2)e.push({type:`Feature`,geometry:{type:`Point`,coordinates:[t,n]},properties:{}});let t={type:`FeatureCollection`,features:e};return URL.createObjectURL(new Blob([JSON.stringify(t)],{type:`application/json`}))},[]);return(0,f.jsxs)(i,{full:!0,children:[(0,f.jsx)(o,{destination:Cesium.Cartesian3.fromDegrees(-95,40,6e5),duration:0}),(0,f.jsx)(l,{...e,url:t,onReady:e=>{p(`onReady`)(e),u(e,{pointMaterial:new Cesium.BufferPointMaterial({size:14,color:Cesium.Color.CYAN,outlineColor:Cesium.Color.WHITE,outlineWidth:2})})},onError:p(`onError`)})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 1_000_000)} duration={0} />
      <GeoJsonPrimitive {...args} data={inlineGeoJson} onReady={primitive => {
      action("onReady")(primitive);
      applyVisibleStyle(primitive, {
        pointMaterial: new BufferPointMaterial({
          size: 18,
          color: Color.RED,
          outlineColor: Color.WHITE,
          outlineWidth: 2
        }),
        polylineMaterial: new BufferPolylineMaterial({
          width: 4,
          color: Color.YELLOW
        })
      });
    }} onError={action("onError")} />
    </Viewer>
}`,...g.parameters?.docs?.source},description:{story:"Loads an inline FeatureCollection (one Point + one LineString) and applies\nvisible materials in `onReady`. Without the post-mount styling, the point\nwould render at default ~0px size and be invisible — `GeoJsonPrimitive`'s\nBuffer collections do not ship with visible defaults.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => {
      const features = [];
      for (let lon = -96; lon <= -94; lon += 0.2) {
        for (let lat = 39; lat <= 41; lat += 0.2) {
          features.push({
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [lon, lat]
            },
            properties: {}
          });
        }
      }
      const fc = {
        type: "FeatureCollection" as const,
        features
      };
      return URL.createObjectURL(new Blob([JSON.stringify(fc)], {
        type: "application/json"
      }));
    }, []);
    return <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 600_000)} duration={0} />
        <GeoJsonPrimitive {...args} url={url} onReady={primitive => {
        action("onReady")(primitive);
        applyVisibleStyle(primitive, {
          pointMaterial: new BufferPointMaterial({
            size: 14,
            color: Color.CYAN,
            outlineColor: Color.WHITE,
            outlineWidth: 2
          })
        });
      }} onError={action("onError")} />
      </Viewer>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Loads a GeoJSON FeatureCollection from a **blob URL** generated at story-init
time and renders it over the central United States. The blob carries an
11x11 grid of Point features centered on (-95°, 40°) at 0.2° spacing — same
URL-fetching codepath as a real HTTPS endpoint, but self-contained so no
external service can break this story.

The blob URL is memoized so re-renders don't refetch / rebuild the primitive.`,..._.parameters?.docs?.description}}},v=[`Inline`,`FromUrl`]}))();export{_ as FromUrl,g as Inline,v as __namedExportsOrder,m as default};