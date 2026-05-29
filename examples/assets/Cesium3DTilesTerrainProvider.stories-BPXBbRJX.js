import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-Co89mBoI.js";import{t as n}from"./Viewer-DhNArJQ_.js";import{t as r}from"./Viewer-akLBly8J.js";import{t as i}from"./Globe-60RwK24L.js";import{t as a}from"./Globe-CiGMa8Ao.js";var o,s,c,l,u,d,f;e((()=>{r(),a(),o=t(),s={title:`Cesium3DTilesTerrainProvider`,component:i},c={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956))})})},l={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956),{requestVertexNormals:!0})})})},u={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromIonAssetId(2732686,{requestVertexNormals:!0})})})},d={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{terrainProvider:Cesium.Cesium3DTilesTerrainProvider.fromUrl(Cesium.IonResource.fromAssetId(3956),{requestVertexNormals:!0,requestWaterMask:!0})})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956)) as Promise<TerrainProvider>} />
    </Viewer>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
      requestVertexNormals: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromIonAssetId(2732686, {
      requestVertexNormals: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <Globe terrainProvider={CesiumCesium3DTilesTerrainProvider.fromUrl(IonResource.fromAssetId(3956), {
      requestVertexNormals: true,
      requestWaterMask: true
    }) as Promise<TerrainProvider>} />
    </Viewer>
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`WithVertexNormals`,`GTOPO30`,`WithWaterMask`]}))();export{c as Basic,u as GTOPO30,l as WithVertexNormals,d as WithWaterMask,f as __namedExportsOrder,s as default};