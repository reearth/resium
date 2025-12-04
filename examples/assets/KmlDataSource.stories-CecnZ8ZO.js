import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{a as m}from"./index-CMCftnys.js";import{e as f}from"./storybook-DUM5ztUZ.js";import{c as g}from"./component-C4acxoSN.js";import{V as P}from"./Viewer-DDvsarIF.js";import"./v4-BOvFkHkt.js";import"./index-Ch-GWmDW.js";const h=["clustering","name","show"],w=["canvas","camera","ellipsoid","clampToGround","sourceUri","credit","screenOverlayContainer"],E={onChange:"changedEvent",onError:"errorEvent",onLoading:"loadingEvent",onRefresh:"refreshEvent",onUnsupportedNode:"unsupportedNodeEvent"},S=["onLoad","data"],t=(a,{data:e,onLoad:o,...d})=>{e&&a.load(e,d).then(u=>{o&&o(u)})},l=g({name:"KmlDataSource",create(a,e){if(!a.scene||!a.dataSourceCollection||!a.scene)return;const o=new Cesium.KmlDataSource({camera:e.camera||a.scene.camera,canvas:e.canvas||a.scene.canvas,ellipsoid:e.ellipsoid,credit:e.credit});return e.clustering&&(o.clustering=e.clustering),typeof e.show=="boolean"&&(o.show=e.show),typeof e.name<"u"&&(o.name=e.name),a.dataSourceCollection.add(o),e.data&&t(o,e),o},update(a,e,o){e.data?o.show!==e.show&&(a.show=typeof e.show=="boolean"?e.show:!0):a.show=!1,e.data&&(o.data!==e.data||o.clampToGround!==e.clampToGround||o.ellipsoid!==e.ellipsoid||o.sourceUri!==e.sourceUri||o.credit!==e.credit)&&t(a,e)},destroy(a,e){e.dataSourceCollection&&!e.dataSourceCollection.isDestroyed()&&e.dataSourceCollection.remove(a)},provide(a){return{dataSource:a}},cesiumProps:h,cesiumReadonlyProps:w,cesiumEventProps:E,otherProps:S,useCommonEvent:!0}),U={title:"KmlDataSource",component:l},k=new DOMParser().parseFromString(`
<?xml version="1.0" encoding="utf-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <Placemark>
    <name>Portland</name>
    <Point>
      <coordinates>-122.681944,45.52,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Rio de Janeiro</name>
    <Point>
      <coordinates>-43.196389,-22.908333,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Istanbul</name>
    <Point>
      <coordinates>28.976018,41.01224,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Reykjavik</name>
    <Point>
      <coordinates>-21.933333,64.133333,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Simple Polygon</name>
    <Polygon>
      <outerBoundaryIs>
        <LinearRing>
          <coordinates>-122.681944,45.52,0
          -43.196389,-22.908333,0
          28.976018,41.01224,0
          -21.933333,64.133333,0
          -122.681944,45.52,0</coordinates>
        </LinearRing>
      </outerBoundaryIs>
    </Polygon>
  </Placemark>
</Document>
</kml>
`.trim(),"text/xml"),v=m("onLoad"),y=a=>{const e=a.entities.values[4].polygon;e&&(e.material=Cesium.Color.RED),v(a)},n={args:{show:!0},render:a=>r.jsx(P,{full:!0,children:r.jsx(l,{...a,data:k,onLoad:y,onError:m("onError"),...f})})};var i,c,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <KmlDataSource {...args} data={data} onLoad={onLoad} onError={action("onError")} {...events} />
    </Viewer>
}`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const V=["Basic"];export{n as Basic,V as __namedExportsOrder,U as default};
