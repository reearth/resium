import{j as e}from"./iframe-CaYGMnUa.js";import{I as s}from"./ImageryLayer-Bm4tnm_i.js";import{V as o}from"./Viewer-Dc3jHWle.js";import"./preload-helper-PPVm8Dsz.js";import"./component-BQeqpCl1.js";const n={title:"ImageryLayer",component:s},r={render:a=>e.jsxs(o,{full:!0,children:[e.jsx(s,{...a,imageryProvider:Cesium.ArcGisMapServerImageryProvider.fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer")}),e.jsx(s,{alpha:.5,imageryProvider:Cesium.IonImageryProvider.fromAssetId(3812,{})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ImageryLayer {...args} imageryProvider={ArcGisMapServerImageryProvider.fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer")} />
      <ImageryLayer alpha={0.5} imageryProvider={IonImageryProvider.fromAssetId(3812, {})} />
    </Viewer>
}`,...r.parameters?.docs?.source}}};const d=["Basic"];export{r as Basic,d as __namedExportsOrder,n as default};
