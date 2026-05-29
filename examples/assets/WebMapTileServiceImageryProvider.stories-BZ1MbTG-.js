import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./iframe-Bq5y4kci.js";import{t as n}from"./Viewer-iJClT7PX.js";import{t as r}from"./Viewer-h29n-Aqn.js";import{t as i}from"./ImageryLayer-Cf1iTBnQ.js";import{t as a}from"./ImageryLayer-CvFlRQeD.js";var o,s,c,l,u;e((()=>{a(),r(),o=t(),s=`https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS`,c={title:`WebMapTileServiceImageryProvider`,component:i},l={render:()=>(0,o.jsx)(n,{full:!0,children:(0,o.jsx)(i,{imageryProvider:new Cesium.WebMapTileServiceImageryProvider({url:s,layer:`World_Imagery`,style:`default`,format:`image/jpeg`,tileMatrixSetID:`GoogleMapsCompatible`,tilingScheme:new Cesium.WebMercatorTilingScheme,maximumLevel:19,credit:new Cesium.Credit(`Powered by Esri`)})})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <ImageryLayer imageryProvider={new CesiumWebMapTileServiceImageryProvider({
      url: ESRI_WMTS_URL,
      layer: "World_Imagery",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible",
      tilingScheme: new WebMercatorTilingScheme(),
      maximumLevel: 19,
      credit: new Credit("Powered by Esri")
    })} />
    </Viewer>
}`,...l.parameters?.docs?.source}}},u=[`EsriWorldImagery`]}))();export{l as EsriWorldImagery,u as __namedExportsOrder,c as default};