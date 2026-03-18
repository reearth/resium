import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D4wvS9R9.js";import{r as n,t as r}from"./core-D7dEvFYR.js";import{n as i,t as a}from"./storybook-D8QIrnEB.js";import{t as o}from"./Viewer-DBW4on7w.js";import{t as s}from"./Viewer--AfqXkNC.js";var c,l,u,d,f,p,m=e((()=>{r(),c=[`clustering`,`name`,`show`],l=[`canvas`,`camera`,`ellipsoid`,`clampToGround`,`sourceUri`,`credit`,`screenOverlayContainer`],u={onChange:`changedEvent`,onError:`errorEvent`,onLoading:`loadingEvent`,onRefresh:`refreshEvent`,onUnsupportedNode:`unsupportedNodeEvent`},d=[`onLoad`,`data`],f=(e,{data:t,onLoad:n,...r})=>{t&&e.load(t,r).then(e=>{n&&n(e)})},p=n({name:`KmlDataSource`,create(e,t){if(!e.scene||!e.dataSourceCollection||!e.scene)return;let n=new Cesium.KmlDataSource({camera:t.camera||e.scene.camera,canvas:t.canvas||e.scene.canvas,ellipsoid:t.ellipsoid,credit:t.credit});return t.clustering&&(n.clustering=t.clustering),typeof t.show==`boolean`&&(n.show=t.show),t.name!==void 0&&(n.name=t.name),e.dataSourceCollection.add(n),t.data&&f(n,t),n},update(e,t,n){t.data?n.show!==t.show&&(e.show=typeof t.show==`boolean`?t.show:!0):e.show=!1,t.data&&(n.data!==t.data||n.clampToGround!==t.clampToGround||n.ellipsoid!==t.ellipsoid||n.sourceUri!==t.sourceUri||n.credit!==t.credit)&&f(e,t)},destroy(e,t){t.dataSourceCollection&&!t.dataSourceCollection.isDestroyed()&&t.dataSourceCollection.remove(e)},provide(e){return{dataSource:e}},cesiumProps:c,cesiumReadonlyProps:l,cesiumEventProps:u,otherProps:d,useCommonEvent:!0})})),h,g,_,v,y,b,x,S;e((()=>{i(),s(),m(),h=t(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={title:`KmlDataSource`,component:p},v=new DOMParser().parseFromString(`<?xml version="1.0" encoding="utf-8"?>
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
</kml>`,`text/xml`),y=g(`onLoad`),b=e=>{let t=e.entities.values[4].polygon;t&&(t.material=Cesium.Color.RED),y(e)},x={args:{show:!0},render:e=>(0,h.jsx)(o,{full:!0,children:(0,h.jsx)(p,{...e,data:v,onLoad:b,onError:g(`onError`),...a})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <KmlDataSource {...args} data={data} onLoad={onLoad} onError={action("onError")} {...events} />
    </Viewer>
}`,...x.parameters?.docs?.source}}},S=[`Basic`]}))();export{x as Basic,S as __namedExportsOrder,_ as default};