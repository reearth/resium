import{j as r}from"./iframe-C6gT_53K.js";import{e as m}from"./storybook-BoWeRQq6.js";import{c as d}from"./component-JLmv1WeE.js";import{V as u}from"./Viewer-BpQEPut0.js";import"./preload-helper-PPVm8Dsz.js";const f=["clustering","name","show"],g=["canvas","camera","ellipsoid","clampToGround","sourceUri","credit","screenOverlayContainer"],P={onChange:"changedEvent",onError:"errorEvent",onLoading:"loadingEvent",onRefresh:"refreshEvent",onUnsupportedNode:"unsupportedNodeEvent"},h=["onLoad","data"],t=(a,{data:e,onLoad:o,...s})=>{e&&a.load(e,s).then(l=>{o&&o(l)})},i=d({name:"KmlDataSource",create(a,e){if(!a.scene||!a.dataSourceCollection||!a.scene)return;const o=new Cesium.KmlDataSource({camera:e.camera||a.scene.camera,canvas:e.canvas||a.scene.canvas,ellipsoid:e.ellipsoid,credit:e.credit});return e.clustering&&(o.clustering=e.clustering),typeof e.show=="boolean"&&(o.show=e.show),typeof e.name<"u"&&(o.name=e.name),a.dataSourceCollection.add(o),e.data&&t(o,e),o},update(a,e,o){e.data?o.show!==e.show&&(a.show=typeof e.show=="boolean"?e.show:!0):a.show=!1,e.data&&(o.data!==e.data||o.clampToGround!==e.clampToGround||o.ellipsoid!==e.ellipsoid||o.sourceUri!==e.sourceUri||o.credit!==e.credit)&&t(a,e)},destroy(a,e){e.dataSourceCollection&&!e.dataSourceCollection.isDestroyed()&&e.dataSourceCollection.remove(a)},provide(a){return{dataSource:a}},cesiumProps:f,cesiumReadonlyProps:g,cesiumEventProps:P,otherProps:h,useCommonEvent:!0}),{action:c}=__STORYBOOK_MODULE_ACTIONS__,L={title:"KmlDataSource",component:i},w=new DOMParser().parseFromString(`
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
`.trim(),"text/xml"),S=c("onLoad"),E=a=>{const e=a.entities.values[4].polygon;e&&(e.material=Cesium.Color.RED),S(a)},n={args:{show:!0},render:a=>r.jsx(u,{full:!0,children:r.jsx(i,{...a,data:w,onLoad:E,onError:c("onError"),...m})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <KmlDataSource {...args} data={data} onLoad={onLoad} onError={action("onError")} {...events} />
    </Viewer>
}`,...n.parameters?.docs?.source}}};const R=["Basic"];export{n as Basic,R as __namedExportsOrder,L as default};
