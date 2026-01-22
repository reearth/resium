import{j as o}from"./iframe-C6gT_53K.js";import{e as u}from"./storybook-BoWeRQq6.js";import{c as m}from"./component-JLmv1WeE.js";import{V as c}from"./Viewer-BpQEPut0.js";import{E as i}from"./Entity-C2gBlZNb.js";import"./preload-helper-PPVm8Dsz.js";const l=["clustering","name","show","clock","isLoading"],d={onChange:"changedEvent",onError:"errorEvent",onLoading:"loadingEvent"},a=m({name:"CustomDataSource",create(t,e){if(!t.dataSourceCollection)return;const r=new Cesium.CustomDataSource(e.name);return e.clustering&&(r.clustering=e.clustering),typeof e.show=="boolean"&&(r.show=e.show),typeof e.clock<"u"&&(r.clock=e.clock),t.dataSourceCollection.add(r),r},destroy(t,e){e.dataSourceCollection&&!e.dataSourceCollection.isDestroyed()&&e.dataSourceCollection.remove(t)},provide(t){return{entityCollection:t.entities,dataSource:t}},cesiumProps:l,cesiumEventProps:d,useCommonEvent:!0}),D={title:"CustomDataSource",component:a},n={render:t=>o.jsxs(c,{full:!0,children:[o.jsx(a,{...t,name:"custom",...u,children:o.jsx(i,{name:"added to custom data source",description:"test",position:Cesium.Cartesian3.fromDegrees(-74.0707383,41.7117244,100),point:{pixelSize:10,color:Cesium.Color.RED}})}),o.jsx(a,{name:"hidden",show:!1,...u,children:o.jsx(i,{name:"added to custom data source but hidden",description:"test",position:Cesium.Cartesian3.fromDegrees(-74.0707383,39.7117244,100),point:{pixelSize:10,color:Cesium.Color.YELLOW}})}),o.jsx(i,{name:"added to default data source",description:"test",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})]})},s={name:"Entity cluster",render:t=>o.jsx(c,{full:!0,children:o.jsx(a,{...t,...u,clustering:new Cesium.EntityCluster({enabled:!0,pixelRange:50,minimumClusterSize:3,clusterPoints:!0}),children:new Array(100).fill(0).map((e,r)=>o.jsx(i,{position:Cesium.Cartesian3.fromDegrees(Math.random()*180-90,Math.random()*360-180,100),point:{pixelSize:10,color:Cesium.Color.RED}},r))})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <CustomDataSource {...args} name="custom" {...events}>
        <Entity name="added to custom data source" description="test" position={Cartesian3.fromDegrees(-74.0707383, 41.7117244, 100)} point={{
        pixelSize: 10,
        color: Color.RED
      }} />
      </CustomDataSource>
      <CustomDataSource name="hidden" show={false} {...events}>
        <Entity name="added to custom data source but hidden" description="test" position={Cartesian3.fromDegrees(-74.0707383, 39.7117244, 100)} point={{
        pixelSize: 10,
        color: Color.YELLOW
      }} />
      </CustomDataSource>
      <Entity name="added to default data source" description="test" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Entity cluster",
  render: args => <Viewer full>
      <CustomDataSource {...args} {...events} clustering={new EntityCluster({
      enabled: true,
      pixelRange: 50,
      minimumClusterSize: 3,
      clusterPoints: true
    })}>
        {new Array(100).fill(0).map((_, i) => <Entity key={i} position={Cartesian3.fromDegrees(Math.random() * 180 - 90, Math.random() * 360 - 180, 100)} point={{
        pixelSize: 10,
        color: Color.RED
      }} />)}
      </CustomDataSource>
    </Viewer>
}`,...s.parameters?.docs?.source}}};const h=["Basic","UseEntityCluster"];export{n as Basic,s as UseEntityCluster,h as __namedExportsOrder,D as default};
