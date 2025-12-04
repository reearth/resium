import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as s}from"./ImageryLayer-BBfJl7Zr.js";import{V as t}from"./Viewer-DDvsarIF.js";import"./component-C4acxoSN.js";import"./index-Ch-GWmDW.js";const y={title:"ImageryLayer",component:s},r={render:m=>e.jsxs(t,{full:!0,children:[e.jsx(s,{...m,imageryProvider:Cesium.ArcGisMapServerImageryProvider.fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer")}),e.jsx(s,{alpha:.5,imageryProvider:Cesium.IonImageryProvider.fromAssetId(3812,{})})]})};var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ImageryLayer {...args} imageryProvider={ArcGisMapServerImageryProvider.fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer")} />
      <ImageryLayer alpha={0.5} imageryProvider={IonImageryProvider.fromAssetId(3812, {})} />
    </Viewer>
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const l=["Basic"];export{r as Basic,l as __namedExportsOrder,y as default};
