import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-Co89mBoI.js";import{n as i,t as a}from"./VrtViewer-C0RpuJ_9.js";import{n as o,t as s}from"./KmlDataSource-CCEd6D7F.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`VRT/KmlDataSource`,tags:[`vrt`],parameters:{layout:`fullscreen`,docs:{description:{component:"Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the\ntest runner can compare screenshots. Run `yarn storybook:build:vrt` then `yarn vrt`."}}}},d=URL.createObjectURL(new Blob([`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"><Document>
  <Placemark>
    <Style>
      <LineStyle><color>ff00ffff</color><width>3</width></LineStyle>
      <PolyStyle><color>7f00ff00</color></PolyStyle>
    </Style>
    <Polygon><outerBoundaryIs><LinearRing><coordinates>
      -110,45,0 -90,45,0 -90,35,0 -110,35,0 -110,45,0
    </coordinates></LinearRing></outerBoundaryIs></Polygon>
  </Placemark>
</Document></kml>`],{type:`application/vnd.google-earth.kml+xml`})),f={name:`Suspense`,render:()=>(0,l.jsx)(a,{children:(0,l.jsx)(c.Suspense,{fallback:null,children:(0,l.jsx)(s,{data:d,suspense:!0})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  render: () => <VrtViewer>
      <Suspense fallback={null}>
        <KmlDataSource data={dataUrl} suspense />
      </Suspense>
    </VrtViewer>
}`,...f.parameters?.docs?.source}}},p=[`SuspenseStory`]}))();export{f as SuspenseStory,p as __namedExportsOrder,u as default};