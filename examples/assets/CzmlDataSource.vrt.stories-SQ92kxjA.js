import{n as e,r as t}from"./iframe-B1i0gkyj.js";import{n,t as r}from"./CzmlDataSource-H-8MvKL8.js";import{n as i,t as a}from"./VrtViewer-DcFhMcYf.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=t(),i(),n(),c=e(),l={title:`VRT/CzmlDataSource`,tags:[`vrt`],parameters:{layout:`fullscreen`,docs:{description:{component:"Stories tagged `vrt` are rendered deterministically (see `src/__vrt__`) so the\ntest runner can compare screenshots. Run `npm run storybook:build:vrt` then `npm run vrt`."}}}},u=URL.createObjectURL(new Blob([JSON.stringify([{id:`document`,name:`CZML`,version:`1.0`},{id:`point`,position:{cartographicDegrees:[-100,40,0]},point:{color:{rgba:[255,255,0,255]},pixelSize:20}}])],{type:`application/json`})),d={name:`Suspense`,render:()=>(0,c.jsx)(a,{children:(0,c.jsx)(s.Suspense,{fallback:null,children:(0,c.jsx)(r,{data:u,suspense:!0})})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  render: () => <VrtViewer>
      <Suspense fallback={null}>
        <CzmlDataSource data={dataUrl} suspense />
      </Suspense>
    </VrtViewer>
}`,...d.parameters?.docs?.source}}},f=[`SuspenseStory`]})))()}p();export{d as SuspenseStory,f as __namedExportsOrder,l as default};