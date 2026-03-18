import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./iframe-D4wvS9R9.js";import{t as i}from"./Viewer-DBW4on7w.js";import{t as a}from"./Viewer--AfqXkNC.js";import{n as o,t as s}from"./Globe-B_mA33Av.js";var c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{c=e(n(),1),a(),o(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Globe`,component:s},f={render:e=>(0,l.jsx)(i,{full:!0,children:(0,l.jsx)(s,{...e,terrainProvider:new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:u(`onImageryLayersUpdate`),onTerrainProviderChange:u(`onTerrainProviderChange`)})})},p={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...t})=>(0,l.jsx)(c.StrictMode,{children:(0,l.jsx)(i,{full:!0,children:(0,l.jsx)(s,{...t,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:u(`onImageryLayersUpdate`),onTerrainProviderChange:u(`onTerrainProviderChange`)})})})},m={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...t})=>(0,l.jsx)(c.StrictMode,{children:(0,l.jsx)(i,{full:!0,children:(0,l.jsx)(s,{...t,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:u(`onImageryLayersUpdate`),onTerrainProviderChange:u(`onTerrainProviderChange`)})})})},h=({isTerrainEnabled:e,...t})=>{let n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{(async()=>{n.current?.cesiumElement&&(n.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider)})()},[n,e]),(0,l.jsx)(i,{full:!0,ref:n,children:(0,l.jsx)(s,{...t,onImageryLayersUpdate:u(`onImageryLayersUpdate`),onTerrainProviderChange:u(`onTerrainProviderChange`)})})},g={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>(0,l.jsx)(h,{...e})},_=({isTerrainEnabled:e,...t})=>{let n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{setTimeout(async()=>{n.current?.cesiumElement&&(n.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider)},1)},[n,e]),(0,l.jsx)(i,{full:!0,ref:n,children:(0,l.jsx)(s,{...t,onImageryLayersUpdate:u(`onImageryLayersUpdate`),onTerrainProviderChange:u(`onTerrainProviderChange`)})})},v={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>(0,l.jsx)(_,{...e})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Globe {...args} terrainProvider={new EllipsoidTerrainProvider()} onImageryLayersUpdate={action("onImageryLayersUpdate")} onTerrainProviderChange={action("onTerrainProviderChange")} />
    </Viewer>
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicComp {...args} />
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicStrictComp {...args} />
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Promise`,`PromiseStrict`,`Dynamic`,`DynamicStrict`]}))();export{f as Basic,g as Dynamic,v as DynamicStrict,p as Promise,m as PromiseStrict,y as __namedExportsOrder,d as default};