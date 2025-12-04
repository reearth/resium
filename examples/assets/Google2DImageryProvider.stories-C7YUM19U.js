import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as r}from"./ImageryLayer-BBfJl7Zr.js";import{V as o}from"./Viewer-DDvsarIF.js";import"./component-C4acxoSN.js";import"./index-Ch-GWmDW.js";const w={title:"Google2DImageryProvider",component:r},a={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:"satellite"})})})},s={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:"terrain"})})})},i={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({mapType:"roadmap"})})})},m={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromUrl({overlayLayerType:"layerRoadmap",styles:[{stylers:[{hue:"#00ffe6"},{saturation:-20}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]}]})})})},n={render:()=>e.jsx(o,{full:!0,children:e.jsx(r,{imageryProvider:Cesium.Google2DImageryProvider.fromIonAssetId({assetId:"3830184"})})})};var t,l,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "satellite"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var y,p,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "terrain"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,c,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromUrl({
      mapType: "roadmap"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...(v=(c=i.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var f,I,P;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var x,C,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={CesiumGoogle2DImageryProvider.fromIonAssetId({
      assetId: "3830184"
    }) as Promise<ImageryProvider>} />
    </Viewer>
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const S=["Satellite","Terrain","Roadmap","RoadmapOverlayWithCustomStyles","FromCesiumIon"];export{n as FromCesiumIon,i as Roadmap,m as RoadmapOverlayWithCustomStyles,a as Satellite,s as Terrain,S as __namedExportsOrder,w as default};
