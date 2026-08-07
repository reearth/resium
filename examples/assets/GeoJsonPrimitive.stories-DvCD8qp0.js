import{n as e,r as t}from"./iframe-B1i0gkyj.js";import{n,t as r}from"./Viewer-Btv2bIgt.js";import{n as i,t as a}from"./CameraFlyTo-D5jTDV4_.js";import{n as o,t as s}from"./GeoJsonPrimitive-CZ3qZkTO.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";function l(e,t){let{pointMaterial:n,polylineMaterial:r,polygonMaterial:i}=t,a=new Cesium.BufferPrimitive,o=[[e.points,n],[e.polylines,r],[e.polygons,i]];for(let[e,t]of o){if(!e||!t)continue;let n=e.primitiveCount;for(let r=0;r<n;r++)e.get(r,a),a.setMaterial(t)}}var u,d,f,p,m,h,g,_;function v(){return(v=c((()=>{u=t(),i(),n(),o(),d=e(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`GeoJsonPrimitive`,component:s},m={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[-95,40]},properties:{id:`p1`}},{type:`Feature`,geometry:{type:`LineString`,coordinates:[[-96,39.5],[-94,40.5]]},properties:{id:`l1`}}]},h={render:e=>(0,d.jsxs)(r,{full:!0,children:[(0,d.jsx)(a,{destination:Cesium.Cartesian3.fromDegrees(-95,40,1e6),duration:0}),(0,d.jsx)(s,{...e,data:m,onReady:e=>{f(`onReady`)(e),l(e,{pointMaterial:new Cesium.BufferPointMaterial({size:18,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2}),polylineMaterial:new Cesium.BufferPolylineMaterial({width:4,color:Cesium.Color.YELLOW})})},onError:f(`onError`)})]})},g={render:e=>{let t=(0,u.useMemo)(()=>{let e=[];for(let t=-96;t<=-94;t+=.2)for(let n=39;n<=41;n+=.2)e.push({type:`Feature`,geometry:{type:`Point`,coordinates:[t,n]},properties:{}});let t={type:`FeatureCollection`,features:e};return URL.createObjectURL(new Blob([JSON.stringify(t)],{type:`application/json`}))},[]);return(0,d.jsxs)(r,{full:!0,children:[(0,d.jsx)(a,{destination:Cesium.Cartesian3.fromDegrees(-95,40,6e5),duration:0}),(0,d.jsx)(s,{...e,url:t,onReady:e=>{f(`onReady`)(e),l(e,{pointMaterial:new Cesium.BufferPointMaterial({size:14,color:Cesium.Color.CYAN,outlineColor:Cesium.Color.WHITE,outlineWidth:2})})},onError:f(`onError`)})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Loads an inline FeatureCollection (one Point + one LineString) and applies\nvisible materials in `onReady`. Without the post-mount styling, the point\nwould render at default ~0px size and be invisible — `GeoJsonPrimitive`'s\nBuffer collections do not ship with visible defaults.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Loads a GeoJSON FeatureCollection from a **blob URL** generated at story-init
time and renders it over the central United States. The blob carries an
11x11 grid of Point features centered on (-95°, 40°) at 0.2° spacing — same
URL-fetching codepath as a real HTTPS endpoint, but self-contained so no
external service can break this story.

The blob URL is memoized so re-renders don't refetch / rebuild the primitive.`,...g.parameters?.docs?.description}}},_=[`Inline`,`FromUrl`]})))()}v();export{g as FromUrl,h as Inline,_ as __namedExportsOrder,p as default};