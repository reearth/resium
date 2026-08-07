import{n as e}from"./iframe-B1i0gkyj.js";import{n as t,t as n}from"./Viewer-Btv2bIgt.js";import{n as r,t as i}from"./ImageryLayer-BDkumycQ.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f,p;function m(){return(m=a((()=>{t(),r(),o=e(),s={title:`Google2DImageryProvider`,component:i},c={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:`satellite`})})})},l={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:`terrain`})})})},u={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:`roadmap`})})})},d={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({overlayLayerType:`layerRoadmap`,styles:[{stylers:[{hue:`#00ffe6`},{saturation:-20}]},{featureType:`road`,elementType:`geometry`,stylers:[{lightness:100},{visibility:`simplified`}]}]})})})},f={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{imageryProvider:Cesium.Google2DImageryProvider.fromIonAssetId({assetId:`3830184`})})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "satellite"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "terrain"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "roadmap"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromIonAssetId({
      assetId: "3830184"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...f.parameters?.docs?.source}}},p=[`Satellite`,`Terrain`,`Roadmap`,`RoadmapOverlayWithCustomStyles`,`FromCesiumIon`]})))()}m();export{f as FromCesiumIon,u as Roadmap,d as RoadmapOverlayWithCustomStyles,c as Satellite,l as Terrain,p as __namedExportsOrder,s as default};