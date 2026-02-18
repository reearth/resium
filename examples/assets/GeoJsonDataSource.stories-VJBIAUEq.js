import{j as t}from"./iframe-CaYGMnUa.js";import{e as l}from"./storybook-BoWeRQq6.js";import{c as u}from"./component-BQeqpCl1.js";import{V as m}from"./Viewer-Dc3jHWle.js";import"./preload-helper-PPVm8Dsz.js";const h=["clustering","name","show"],f=["clampToGround","sourceUri","credit","markerSize","markerSymbol","markerColor","stroke","strokeWidth","fill","describe"],C={onChange:"changedEvent",onError:"errorEvent",onLoading:"loadingEvent"},S=["onLoad","data"],n=(r,{data:e,onLoad:o,...c})=>{e&&r.load(e,c).then(d=>{o&&o(d)})},i=u({name:"GeoJsonDataSource",create(r,e){if(!r.dataSourceCollection)return;const o=new Cesium.GeoJsonDataSource(e.name);return e.clustering&&(o.clustering=e.clustering),typeof e.show=="boolean"&&(o.show=e.show),r.dataSourceCollection.add(o),e.data&&n(o,e),o},update(r,e,o){e.data?o.show!==e.show&&(r.show=typeof e.show=="boolean"?e.show:!0):r.show=!1,e.data&&(o.data!==e.data||o.clampToGround!==e.clampToGround||o.sourceUri!==e.sourceUri||o.credit!==e.credit||o.markerSize!==e.markerSize||o.markerSymbol!==e.markerSymbol||o.markerColor!==e.markerColor||o.stroke!==e.stroke||o.strokeWidth!==e.strokeWidth||o.fill!==e.fill)&&n(r,e)},destroy(r,e){e.dataSourceCollection&&!e.dataSourceCollection.isDestroyed()&&e.dataSourceCollection.remove(r)},provide(r){return{dataSource:r}},cesiumProps:h,cesiumReadonlyProps:f,cesiumEventProps:C,otherProps:S,useCommonEvent:!0}),{action:s}=__STORYBOOK_MODULE_ACTIONS__,_={title:"GeoJsonDataSource",component:i},k={type:"Feature",properties:{name:"Coors Field",amenity:"Baseball Stadium",popupContent:"This is where the Rockies play!"},geometry:{type:"Point",coordinates:[-104.99404,39.75621]}},w=s("onLoad"),a={args:{show:!0},render:r=>t.jsx(m,{full:!0,children:t.jsx(i,{...r,data:k,markerColor:Cesium.Color.RED,onLoad:e=>{e.entities.values[0].name="Coors Field!",w(e)},onError:s("onError"),...l})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <GeoJsonDataSource {...args} data={data} markerColor={Color.RED} onLoad={g => {
      // You can process the data source here
      g.entities.values[0].name = "Coors Field!";
      onLoadAction(g);
    }} onError={action("onError")} {...events} />
    </Viewer>
}`,...a.parameters?.docs?.source}}};const b=["Basic"];export{a as Basic,b as __namedExportsOrder,_ as default};
