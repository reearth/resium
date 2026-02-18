import{j as e}from"./iframe-CaYGMnUa.js";import{I as r}from"./ImageryLayer-Bm4tnm_i.js";import{V as o}from"./Viewer-Dc3jHWle.js";import"./preload-helper-PPVm8Dsz.js";import"./component-BQeqpCl1.js";const g={title:"Google2DImageryProvider",component:r},a={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:"satellite"})})})},s={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:"terrain"})})})},i={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:"roadmap"})})})},m={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({overlayLayerType:"layerRoadmap",styles:[{stylers:[{hue:"#00ffe6"},{saturation:-20}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]}]})})})},n={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromIonAssetId({assetId:"3830184"})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "satellite"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "terrain"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "roadmap"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      overlayLayerType: "layerRoadmap",
      styles: [{
        stylers: [{
          hue: "#00ffe6"
        }, {
          saturation: -20
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          lightness: 100
        }, {
          visibility: "simplified"
        }]
      }]
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromIonAssetId({
      assetId: "3830184"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...n.parameters?.docs?.source}}};const u=["Satellite","Terrain","Roadmap","RoadmapOverlayWithCustomStyles","FromCesiumIon"];export{n as FromCesiumIon,i as Roadmap,m as RoadmapOverlayWithCustomStyles,a as Satellite,s as Terrain,u as __namedExportsOrder,g as default};
