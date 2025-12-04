import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{G as e}from"./Globe-DhyYvLVE.js";import{V as a}from"./Viewer-DDvsarIF.js";import"./component-C4acxoSN.js";import"./index-Ch-GWmDW.js";const w={title:"Cesium3DTilesTerrainProvider",component:e},s={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956))})})},o={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956),{requestVertexNormals:!0})})})},i={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromIonAssetId(2732686,{requestVertexNormals:!0})})})},t={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956),{requestVertexNormals:!0,requestWaterMask:!0})})})};var n,m,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956)) as Promise<TerrainProvider>} />
    </Viewer>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
      requestVertexNormals: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var P,f,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromIonAssetId(2732686, {
      requestVertexNormals: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var p,v,C;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
      requestVertexNormals: true,
      requestWaterMask: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...(C=(v=t.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const h=["Basic","WithVertexNormals","GTOPO30","WithWaterMask"];export{s as Basic,i as GTOPO30,o as WithVertexNormals,t as WithWaterMask,h as __namedExportsOrder,w as default};
