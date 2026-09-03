import{n as e,r as t}from"./iframe-DBxvnLfe.js";import{n,t as r}from"./VrtViewer-BMEr5z7w.js";import{n as i,t as a}from"./KmlDataSource-D4NGjZEH.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=t(),n(),i(),c=e(),l={title:`VRT/KmlDataSource`,tags:[`vrt`],parameters:{layout:`fullscreen`,docs:{description:{component:"Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the\ntest runner can compare screenshots. Run `npm run storybook:build:vrt` then `npm run vrt`."}}}},u=URL.createObjectURL(new Blob([`<?xml version="1.0" encoding="UTF-8"?>
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
</Document></kml>`],{type:`application/vnd.google-earth.kml+xml`})),d={name:`Suspense`,render:()=>(0,c.jsx)(r,{children:(0,c.jsx)(s.Suspense,{fallback:null,children:(0,c.jsx)(a,{data:u,suspense:!0})})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  render: () => <VrtViewer>
      <Suspense fallback={null}>
        <KmlDataSource data={dataUrl} suspense />
      </Suspense>
    </VrtViewer>
}`,...d.parameters?.docs?.source}}},f=[`SuspenseStory`]})))()}p();export{d as SuspenseStory,f as __namedExportsOrder,l as default};