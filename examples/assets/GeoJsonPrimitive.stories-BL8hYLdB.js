import{n as e,r as t}from"./iframe-aHNciSD_.js";import{n,t as r}from"./Viewer-DoIIFFlc.js";import{n as i,t as a}from"./CameraFlyTo-BjTvRRLa.js";import{n as o,t as s}from"./GeoJsonPrimitive-HQLifBSw.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";function l(e,t){let{pointMaterial:n,polylineMaterial:r,polygonMaterial:i}=t,a=new Cesium.BufferPrimitive,o=[[e.points,n],[e.polylines,r],[e.polygons,i]];for(let[e,t]of o){if(!e||!t)continue;let n=e.primitiveCount;for(let r=0;r<n;r++)e.get(r,a),a.setMaterial(t)}}var u,d,f,p,m,h,g,_,v,y;function b(){return(b=c((()=>{u=t(),i(),n(),o(),d=e(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`GeoJsonPrimitive`,component:s},m={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[-95,40]},properties:{id:`p1`}},{type:`Feature`,geometry:{type:`LineString`,coordinates:[[-96,39.5],[-94,40.5]]},properties:{id:`l1`}}]},h={render:e=>(0,d.jsxs)(r,{full:!0,children:[(0,d.jsx)(a,{destination:Cesium.Cartesian3.fromDegrees(-95,40,1e6),duration:0}),(0,d.jsx)(s,{...e,data:m,onReady:e=>{f(`onReady`)(e),l(e,{pointMaterial:new Cesium.BufferPointMaterial({size:18,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2}),polylineMaterial:new Cesium.BufferPolylineMaterial({width:4,color:Cesium.Color.YELLOW})})},onError:f(`onError`)})]})},g={render:e=>{let t=(0,u.useMemo)(()=>{let e=[];for(let t=-96;t<=-94;t+=.2)for(let n=39;n<=41;n+=.2)e.push({type:`Feature`,geometry:{type:`Point`,coordinates:[t,n]},properties:{}});let t={type:`FeatureCollection`,features:e};return URL.createObjectURL(new Blob([JSON.stringify(t)],{type:`application/json`}))},[]);return(0,d.jsxs)(r,{full:!0,children:[(0,d.jsx)(a,{destination:Cesium.Cartesian3.fromDegrees(-95,40,6e5),duration:0}),(0,d.jsx)(s,{...e,url:t,onReady:e=>{f(`onReady`)(e),l(e,{pointMaterial:new Cesium.BufferPointMaterial({size:14,color:Cesium.Color.CYAN,outlineColor:Cesium.Color.WHITE,outlineWidth:2})})},onError:f(`onError`)})]})}},_={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`LineString`,coordinates:[[-96,39.5,4e4],[-94,40.5,4e4]]},properties:{id:`l1`}},{type:`Feature`,geometry:{type:`Polygon`,coordinates:[[[-95.6,39.7,4e4],[-94.4,39.7,4e4],[-95,40.3,4e4],[-95.6,39.7,4e4]]]},properties:{id:`poly1`}}]},v={render:e=>(0,d.jsxs)(r,{full:!0,children:[(0,d.jsx)(a,{destination:Cesium.Cartesian3.fromDegrees(-95,40,1e6),duration:0}),(0,d.jsx)(s,{...e,data:_,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,onReady:e=>{f(`onReady`)(e),l(e,{polylineMaterial:new Cesium.BufferPolylineMaterial({width:4,color:Cesium.Color.ORANGE}),polygonMaterial:new Cesium.BufferPolygonMaterial({color:Cesium.Color.ORANGE.withAlpha(.5)})})},onError:f(`onError`)})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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

The blob URL is memoized so re-renders don't refetch / rebuild the primitive.`,...g.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <CameraFlyTo destination={Cartesian3.fromDegrees(-95.0, 40.0, 1_000_000)} duration={0} />
      <GeoJsonPrimitive {...args} data={highAltitudeGeoJson} heightReference={HeightReference.CLAMP_TO_GROUND} onReady={primitive => {
      action("onReady")(primitive);
      applyVisibleStyle(primitive, {
        polylineMaterial: new BufferPolylineMaterial({
          width: 4,
          color: Color.ORANGE
        }),
        polygonMaterial: new BufferPolygonMaterial({
          color: Color.ORANGE.withAlpha(0.5)
        })
      });
    }} onError={action("onError")} />
    </Viewer>
}`,...v.parameters?.docs?.source},description:{story:'Draping — demonstrates the `heightReference` prop (Cesium 1.145+). Every\ncoordinate here carries a 40 km altitude, but\n`HeightReference.CLAMP_TO_GROUND` drapes the decoded geometry onto the\nsurface, so it renders on the globe instead of floating above it. Compare\nagainst `Inline`, which draws its geometry as ordinary un-draped primitives.\n\nCesium requires a `Scene` alongside a clamping `heightReference`; resium\nsupplies the enclosing `Viewer`/`CesiumWidget` scene automatically, so\nthere is no `scene` prop to pass. With a real terrain or 3D Tiles provider\nmounted, `CLAMP_TO_TERRAIN` / `CLAMP_TO_3D_TILE` target those surfaces\nspecifically; `CLAMP_TO_GROUND` targets both.\n\n**Draping covers polylines and polygons, not points.** As of 1.145\n`GeoJsonPrimitive` builds its `BufferPointCollection` without a\n`heightReference` and never routes points through the scene\'s vector\nprovider, so `Point` features keep their original heights and Cesium logs a\none-time `"Clamped HeightReference unsupported on BufferPointCollection"`\nwarning. This story therefore uses a LineString and a Polygon only.\n\nMaterials are still applied in `onReady` — draping changes where geometry\nlands, not whether it has a visible style.',...v.parameters?.docs?.description}}},y=[`Inline`,`FromUrl`,`Draped`]})))()}b();export{v as Draped,g as FromUrl,h as Inline,y as __namedExportsOrder,p as default};