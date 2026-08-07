import{n as e,r as t}from"./iframe-B1i0gkyj.js";import{n,t as r}from"./VrtViewer-DcFhMcYf.js";import{n as i,t as a}from"./GeoJsonDataSource-BVhcJ0Q_.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f,p,m;function h(){return(h=o((()=>{s=t(),n(),i(),c=e(),l={title:`VRT/GeoJsonDataSource`,tags:[`vrt`],parameters:{layout:`fullscreen`,docs:{description:{component:"Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the\ntest runner can compare screenshots. Run `npm run storybook:build:vrt` then `npm run vrt`."}}}},u={type:`FeatureCollection`,features:[{type:`Feature`,properties:{},geometry:{type:`Point`,coordinates:[-100,40]}},{type:`Feature`,properties:{},geometry:{type:`Point`,coordinates:[-120,35]}}]},d={render:()=>(0,c.jsx)(r,{children:(0,c.jsx)(a,{data:u,markerColor:Cesium.Color.BLUE})})},f=URL.createObjectURL(new Blob([JSON.stringify(u)],{type:`application/json`})),p={name:`Suspense`,render:()=>(0,c.jsx)(r,{children:(0,c.jsx)(s.Suspense,{fallback:null,children:(0,c.jsx)(a,{data:f,suspense:!0,markerColor:Cesium.Color.LIME})})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <VrtViewer>
      <GeoJsonDataSource data={geojson} markerColor={Color.BLUE} />
    </VrtViewer>
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  render: () => <VrtViewer>
      <Suspense fallback={null}>
        <GeoJsonDataSource data={dataUrl} suspense markerColor={Color.LIME} />
      </Suspense>
    </VrtViewer>
}`,...p.parameters?.docs?.source}}},m=[`GeoJson`,`SuspenseStory`]})))()}h();export{d as GeoJson,p as SuspenseStory,m as __namedExportsOrder,l as default};