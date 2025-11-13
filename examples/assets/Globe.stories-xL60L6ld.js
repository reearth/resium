import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{a}from"./index-CjDrOnrV.js";import{r as i}from"./index-yIsmwZOr.js";import{G as o}from"./Globe-6vMi2U61.js";import{V as d}from"./Viewer-3OWF8io8.js";import"./v4-Dz_GI0CC.js";import"./component-P3MpLVno.js";const N={title:"Globe",component:o},m={render:e=>r.jsx(d,{full:!0,children:r.jsx(o,{...e,terrainProvider:new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:a("onImageryLayersUpdate"),onTerrainProviderChange:a("onTerrainProviderChange")})})},l={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...s})=>r.jsx(i.StrictMode,{children:r.jsx(d,{full:!0,children:r.jsx(o,{...s,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:a("onImageryLayersUpdate"),onTerrainProviderChange:a("onTerrainProviderChange")})})})},u={args:{enableLighting:!0,isTerrainEnabled:!1},render:({isTerrainEnabled:e,...s})=>r.jsx(i.StrictMode,{children:r.jsx(d,{full:!0,children:r.jsx(o,{...s,terrainProvider:e?Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider,onImageryLayersUpdate:a("onImageryLayersUpdate"),onTerrainProviderChange:a("onTerrainProviderChange")})})})},j=({isTerrainEnabled:e,...s})=>{const n=i.useRef(null);return i.useEffect(()=>{(async()=>{var t;(t=n.current)!=null&&t.cesiumElement&&(n.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider)})()},[n,e]),r.jsx(d,{full:!0,ref:n,children:r.jsx(o,{...s,onImageryLayersUpdate:a("onImageryLayersUpdate"),onTerrainProviderChange:a("onTerrainProviderChange")})})},c={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>r.jsx(j,{...e})},V=({isTerrainEnabled:e,...s})=>{const n=i.useRef(null);return i.useEffect(()=>{(()=>{setTimeout(async()=>{var t;(t=n.current)!=null&&t.cesiumElement&&(n.current.cesiumElement.terrainProvider=e?await Cesium.CesiumTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(1),{requestVertexNormals:!0,requestWaterMask:!1}):new Cesium.EllipsoidTerrainProvider)},1)})()},[n,e]),r.jsx(d,{full:!0,ref:n,children:r.jsx(o,{...s,onImageryLayersUpdate:a("onImageryLayersUpdate"),onTerrainProviderChange:a("onTerrainProviderChange")})})},g={args:{enableLighting:!0,isTerrainEnabled:!1},render:({...e})=>r.jsx(V,{...e})};var p,f,y;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Globe {...args} terrainProvider={new EllipsoidTerrainProvider()} onImageryLayersUpdate={action("onImageryLayersUpdate")} onTerrainProviderChange={action("onTerrainProviderChange")} />
    </Viewer>
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var P,T,v;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var C,h,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(h=u.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var E,x,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicComp {...args} />
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var L,U,w;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    enableLighting: true,
    isTerrainEnabled: false
  } as any,
  render: ({
    ...args
  }: any) => <DynamicStrictComp {...args} />
}`,...(w=(U=g.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const W=["Basic","Promise","PromiseStrict","Dynamic","DynamicStrict"];export{m as Basic,c as Dynamic,g as DynamicStrict,l as Promise,u as PromiseStrict,W as __namedExportsOrder,N as default};
