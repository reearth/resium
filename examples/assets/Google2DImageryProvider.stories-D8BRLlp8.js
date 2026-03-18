import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D4wvS9R9.js";import{t as n}from"./Viewer-DBW4on7w.js";import{t as r}from"./Viewer--AfqXkNC.js";import{n as i,t as a}from"./ImageryLayer-BWyNeqcs.js";var o=e((()=>{i()})),s,c,l,u,d,f,p,m;e((()=>{r(),o(),s=t(),c={title:`Google2DImageryProvider`,component:a},l={render:()=>(0,s.jsx)(n,{full:!0,children:(0,s.jsx)(a,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:`satellite`})})})},u={render:()=>(0,s.jsx)(n,{full:!0,children:(0,s.jsx)(a,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:`terrain`})})})},d={render:()=>(0,s.jsx)(n,{full:!0,children:(0,s.jsx)(a,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:`roadmap`})})})},f={render:()=>(0,s.jsx)(n,{full:!0,children:(0,s.jsx)(a,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({overlayLayerType:`layerRoadmap`,styles:[{stylers:[{hue:`#00ffe6`},{saturation:-20}]},{featureType:`road`,elementType:`geometry`,stylers:[{lightness:100},{visibility:`simplified`}]}]})})})},p={render:()=>(0,s.jsx)(n,{full:!0,children:(0,s.jsx)(a,{imageryProvider:Cesium.Google2DImageryProvider.fromIonAssetId({assetId:`3830184`})})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "satellite"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "terrain"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "roadmap"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromIonAssetId({
      assetId: "3830184"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...p.parameters?.docs?.source}}},m=[`Satellite`,`Terrain`,`Roadmap`,`RoadmapOverlayWithCustomStyles`,`FromCesiumIon`]}))();export{p as FromCesiumIon,d as Roadmap,f as RoadmapOverlayWithCustomStyles,l as Satellite,u as Terrain,m as __namedExportsOrder,c as default};