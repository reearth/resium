import{n as e}from"./iframe-aHNciSD_.js";import{n as t,t as n}from"./component-rCHsMFAP.js";import{n as r,t as i}from"./storybook--8pSha1L.js";import{n as a,t as o}from"./Viewer-DoIIFFlc.js";import{n as s,t as c}from"./Entity-BOgVUGlF.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f;function p(){return(p=l((()=>{t(),u=[`clustering`,`name`,`show`,`clock`,`isLoading`],d={onChange:`changedEvent`,onError:`errorEvent`,onLoading:`loadingEvent`},f=n({name:`CustomDataSource`,create(e,t){if(!e.dataSourceCollection)return;let n=new Cesium.CustomDataSource(t.name);return t.clustering&&(n.clustering=t.clustering),typeof t.show==`boolean`&&(n.show=t.show),t.clock!==void 0&&(n.clock=t.clock),e.dataSourceCollection.add(n),n},destroy(e,t){t.dataSourceCollection&&!t.dataSourceCollection.isDestroyed()&&t.dataSourceCollection.remove(e)},provide(e){return{entityCollection:e.entities,dataSource:e}},cesiumProps:u,cesiumEventProps:d,useCommonEvent:!0})})))()}var m,h,g,_,v;function y(){return(y=l((()=>{r(),s(),a(),p(),m=e(),h={title:`CustomDataSource`,component:f},g={render:e=>(0,m.jsxs)(o,{full:!0,children:[(0,m.jsx)(f,{...e,name:`custom`,...i,children:(0,m.jsx)(c,{name:`added to custom data source`,description:`test`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,41.7117244,100),point:{pixelSize:10,color:Cesium.Color.RED}})}),(0,m.jsx)(f,{name:`hidden`,show:!1,...i,children:(0,m.jsx)(c,{name:`added to custom data source but hidden`,description:`test`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,39.7117244,100),point:{pixelSize:10,color:Cesium.Color.YELLOW}})}),(0,m.jsx)(c,{name:`added to default data source`,description:`test`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})]})},_={name:`Entity cluster`,render:e=>(0,m.jsx)(o,{full:!0,children:(0,m.jsx)(f,{...e,...i,clustering:new Cesium.EntityCluster({enabled:!0,pixelRange:50,minimumClusterSize:3,clusterPoints:!0}),children:Array(100).fill(0).map((e,t)=>(0,m.jsx)(c,{position:Cesium.Cartesian3.fromDegrees(Math.random()*180-90,Math.random()*360-180,100),point:{pixelSize:10,color:Cesium.Color.RED}},t))})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`UseEntityCluster`]})))()}y();export{g as Basic,_ as UseEntityCluster,v as __namedExportsOrder,h as default};