import{j as r,r as i}from"./iframe-C6gT_53K.js";import{G as o}from"./Globe-BYp6t2NS.js";import{V as t}from"./Viewer-BpQEPut0.js";import"./preload-helper-PPVm8Dsz.js";import"./component-JLmv1WeE.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,h={title:"Globe",component:o},d={render:e=>r.jsx(t,{full:!0,children:r.jsx(o,{...e,terrainProvider:new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:n("onImageryLayersUpdate"),onTerrainProviderChange:n("onTerrainProviderChange")})})},m={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...s})=>r.jsx(i.StrictMode,{children:r.jsx(t,{full:!0,children:r.jsx(o,{...s,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:n("onImageryLayersUpdate"),onTerrainProviderChange:n("onTerrainProviderChange")})})})},l={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...s})=>r.jsx(i.StrictMode,{children:r.jsx(t,{full:!0,children:r.jsx(o,{...s,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:n("onImageryLayersUpdate"),onTerrainProviderChange:n("onTerrainProviderChange")})})})},p=({isTerrainEnabled:e,...s})=>{const a=i.useRef(null);return i.useEffect(()=>{(async()=>a.current?.cesiumElement&&(a.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider))()},[a,e]),r.jsx(t,{full:!0,ref:a,children:r.jsx(o,{...s,onImageryLayersUpdate:n("onImageryLayersUpdate"),onTerrainProviderChange:n("onTerrainProviderChange")})})},u={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>r.jsx(p,{...e})},f=({isTerrainEnabled:e,...s})=>{const a=i.useRef(null);return i.useEffect(()=>{setTimeout(async()=>{a.current?.cesiumElement&&(a.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider)},1)},[a,e]),r.jsx(t,{full:!0,ref:a,children:r.jsx(o,{...s,onImageryLayersUpdate:n("onImageryLayersUpdate"),onTerrainProviderChange:n("onTerrainProviderChange")})})},c={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>r.jsx(f,{...e})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Globe {...args} terrainProvider={new EllipsoidTerrainProvider()} onImageryLayersUpdate={action("onImageryLayersUpdate")} onTerrainProviderChange={action("onTerrainProviderChange")} />
    </Viewer>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicComp {...args} />
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicStrictComp {...args} />
}`,...c.parameters?.docs?.source}}};const I=["Basic","Promise","PromiseStrict","Dynamic","DynamicStrict"];export{d as Basic,u as Dynamic,c as DynamicStrict,m as Promise,l as PromiseStrict,I as __namedExportsOrder,h as default};
