import{j as r}from"./iframe-CaYGMnUa.js";import{G as e}from"./Globe-COKm6OGu.js";import{V as a}from"./Viewer-Dc3jHWle.js";import"./preload-helper-PPVm8Dsz.js";import"./component-BQeqpCl1.js";const c={title:"Cesium3DTilesTerrainProvider",component:e},s={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956))})})},o={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956),{requestVertexNormals:!0})})})},i={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromIonAssetId(2732686,{requestVertexNormals:!0})})})},t={render:()=>r.jsx(a,{full:!0,children:r.jsx(e,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956),{requestVertexNormals:!0,requestWaterMask:!0})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956)) as Promise<TerrainProvider>} />
    </Viewer>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
      requestVertexNormals: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromIonAssetId(2732686, {
      requestVertexNormals: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
      requestVertexNormals: true,
      requestWaterMask: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...t.parameters?.docs?.source}}};const P=["Basic","WithVertexNormals","GTOPO30","WithWaterMask"];export{s as Basic,i as GTOPO30,o as WithVertexNormals,t as WithWaterMask,P as __namedExportsOrder,c as default};
