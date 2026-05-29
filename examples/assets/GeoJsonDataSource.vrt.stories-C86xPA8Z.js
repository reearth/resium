import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{n,t as r}from"./iframe-Bq5y4kci.js";import{n as i,t as a}from"./VrtViewer-Ck5UPR9c.js";import{n as o,t as s}from"./GeoJsonDataSource-B4JtIHUF.js";var c,l,u,d,f,p,m,h;t((()=>{c=e(n(),1),i(),o(),l=r(),u={title:`VRT/GeoJsonDataSource`,tags:[`vrt`],parameters:{layout:`fullscreen`,docs:{description:{component:"Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the\ntest runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`."}}}},d={type:`FeatureCollection`,features:[{type:`Feature`,properties:{},geometry:{type:`Point`,coordinates:[-100,40]}},{type:`Feature`,properties:{},geometry:{type:`Point`,coordinates:[-120,35]}}]},f={render:()=>(0,l.jsx)(a,{children:(0,l.jsx)(s,{data:d,markerColor:Cesium.Color.BLUE})})},p=URL.createObjectURL(new Blob([JSON.stringify(d)],{type:`application/json`})),m={name:`Suspense`,render:()=>(0,l.jsx)(a,{children:(0,l.jsx)(c.Suspense,{fallback:null,children:(0,l.jsx)(s,{data:p,suspense:!0,markerColor:Cesium.Color.LIME})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <VrtViewer>
      <GeoJsonDataSource data={geojson} markerColor={Color.BLUE} />
    </VrtViewer>
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  render: () => <VrtViewer>
      <Suspense fallback={null}>
        <GeoJsonDataSource data={dataUrl} suspense markerColor={Color.LIME} />
      </Suspense>
    </VrtViewer>
}`,...m.parameters?.docs?.source}}},h=[`GeoJson`,`SuspenseStory`]}))();export{f as GeoJson,m as SuspenseStory,h as __namedExportsOrder,u as default};