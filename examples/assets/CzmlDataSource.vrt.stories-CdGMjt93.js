import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-C5z0sm_V.js";import{n as i,t as a}from"./CzmlDataSource-BG84kqDv.js";import{n as o,t as s}from"./VrtViewer-DmiH-xWB.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),o(),i(),l=r(),u={title:`VRT/CzmlDataSource`,tags:[`vrt`],parameters:{layout:`fullscreen`,docs:{description:{component:"Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the\ntest runner can compare screenshots. Run `npm run storybook:build:vrt` then `npm run vrt`."}}}},d=URL.createObjectURL(new Blob([JSON.stringify([{id:`document`,name:`CZML`,version:`1.0`},{id:`point`,position:{cartographicDegrees:[-100,40,0]},point:{color:{rgba:[255,255,0,255]},pixelSize:20}}])],{type:`application/json`})),f={name:`Suspense`,render:()=>(0,l.jsx)(s,{children:(0,l.jsx)(c.Suspense,{fallback:null,children:(0,l.jsx)(a,{data:d,suspense:!0})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  render: () => <VrtViewer>
      <Suspense fallback={null}>
        <CzmlDataSource data={dataUrl} suspense />
      </Suspense>
    </VrtViewer>
}`,...f.parameters?.docs?.source}}},p=[`SuspenseStory`]}))();export{f as SuspenseStory,p as __namedExportsOrder,u as default};