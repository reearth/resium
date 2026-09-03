import{n as e,r as t}from"./iframe-aHNciSD_.js";import{n,t as r}from"./Viewer-DoIIFFlc.js";import{n as i,t as a}from"./Globe-Tkqpn3hM.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=o((()=>{s=t(),n(),i(),c=e(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Globe`,component:a},d={render:e=>(0,c.jsx)(r,{full:!0,children:(0,c.jsx)(a,{...e,terrainProvider:new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:l(`onImageryLayersUpdate`),onTerrainProviderChange:l(`onTerrainProviderChange`)})})},f={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...t})=>(0,c.jsx)(s.StrictMode,{children:(0,c.jsx)(r,{full:!0,children:(0,c.jsx)(a,{...t,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:l(`onImageryLayersUpdate`),onTerrainProviderChange:l(`onTerrainProviderChange`)})})})},p={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...t})=>(0,c.jsx)(s.StrictMode,{children:(0,c.jsx)(r,{full:!0,children:(0,c.jsx)(a,{...t,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:l(`onImageryLayersUpdate`),onTerrainProviderChange:l(`onTerrainProviderChange`)})})})},m=({isTerrainEnabled:e,...t})=>{let n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{(async()=>{n.current?.cesiumElement&&(n.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider)})()},[n,e]),(0,c.jsx)(r,{full:!0,ref:n,children:(0,c.jsx)(a,{...t,onImageryLayersUpdate:l(`onImageryLayersUpdate`),onTerrainProviderChange:l(`onTerrainProviderChange`)})})},h={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>(0,c.jsx)(m,{...e})},g=({isTerrainEnabled:e,...t})=>{let n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{setTimeout(async()=>{n.current?.cesiumElement&&(n.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider)},1)},[n,e]),(0,c.jsx)(r,{full:!0,ref:n,children:(0,c.jsx)(a,{...t,onImageryLayersUpdate:l(`onImageryLayersUpdate`),onTerrainProviderChange:l(`onTerrainProviderChange`)})})},_={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>(0,c.jsx)(g,{...e})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Globe {...args} terrainProvider={new EllipsoidTerrainProvider()} onImageryLayersUpdate={action("onImageryLayersUpdate")} onTerrainProviderChange={action("onTerrainProviderChange")} />
    </Viewer>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    isTerrainEnabled,
    ...args
  }: any) => <StrictMode>
      <Viewer full>
        <Globe {...args} terrainProvider={isTerrainEnabled ? CesiumTerrainProvider.fromUrl(IonResource.fromAssetId(1), {
        requestVertexNormals: true,
        requestWaterMask: false
      }) : new EllipsoidTerrainProvider()} onImageryLayersUpdate={action("onImageryLayersUpdate")} onTerrainProviderChange={action("onTerrainProviderChange")} />
      </Viewer>
    </StrictMode>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    isTerrainEnabled,
    ...args
  }: any) => <StrictMode>
      <Viewer full>
        <Globe {...args} terrainProvider={isTerrainEnabled ? CesiumTerrainProvider.fromUrl(IonResource.fromAssetId(1), {
        requestVertexNormals: true,
        requestWaterMask: false
      }) : new EllipsoidTerrainProvider()} onImageryLayersUpdate={action("onImageryLayersUpdate")} onTerrainProviderChange={action("onTerrainProviderChange")} />
      </Viewer>
    </StrictMode>
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicComp {...args} />
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicStrictComp {...args} />
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`Promise`,`PromiseStrict`,`Dynamic`,`DynamicStrict`]})))()}y();export{d as Basic,h as Dynamic,_ as DynamicStrict,f as Promise,p as PromiseStrict,v as __namedExportsOrder,u as default};