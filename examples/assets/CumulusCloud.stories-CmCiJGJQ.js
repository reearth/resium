import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D0XBDpze.js";import{r as n,t as r}from"./core-CXZChsxv.js";import{t as i}from"./Viewer-DlhsA89b.js";import{t as a}from"./Viewer-CV7FzIhu.js";import{n as o,t as s}from"./CameraLookAt-CweAR5zp.js";var c=e((()=>{o()})),l,u=e((()=>{r(),l=n({name:`CloudCollection`,create:e=>{if(!e.primitiveCollection)return;let t=new Cesium.CloudCollection;return e.primitiveCollection.add(t),t},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide:e=>({cloudCollection:e}),cesiumProps:[`noiseDetail`,`noiseOffset`,`show`,`debugBillboards`,`debugEllipsoids`],setCesiumPropsAfterCreate:!0})})),d=e((()=>{u()})),f,p=e((()=>{r(),f=n({name:`CumulusCloud`,create:(e,t)=>e.cloudCollection?.add(t),destroy(e,t){t.cloudCollection&&!t.cloudCollection.isDestroyed()&&t.cloudCollection.remove(e)},cesiumProps:[`show`,`position`,`scale`,`maximumSize`,`slice`,`brightness`,`color`]})})),m,h,g,_;e((()=>{c(),d(),a(),p(),m=t(),h={title:`CumulusCloud`,component:f},g={args:{show:!0,position:Cesium.Cartesian3.fromDegrees(-123.0744619,44.0503706,50),scale:new Cesium.Cartesian2(25,12),maximumSize:new Cesium.Cartesian3(25,12,15),slice:.36,brightness:1},render:e=>(0,m.jsxs)(i,{full:!0,children:[e.position&&(0,m.jsx)(s,{target:e.position,offset:new Cesium.Cartesian3(30,30,-10)}),(0,m.jsx)(l,{noiseDetail:16,noiseOffset:Cesium.Cartesian3.ZERO,children:(0,m.jsx)(f,{...e})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    show: true,
    position: Cartesian3.fromDegrees(-123.0744619, 44.0503706, 50),
    scale: new Cartesian2(25, 12),
    maximumSize: new Cartesian3(25, 12, 15),
    slice: 0.36,
    brightness: 1.0
  },
  render: args => {
    return <Viewer full>
        {args.position && <CameraLookAt target={args.position} offset={new Cartesian3(30, 30, -10)} />}
        <CloudCollection noiseDetail={16} noiseOffset={Cartesian3.ZERO}>
          <CumulusCloud {...args} />
        </CloudCollection>
      </Viewer>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Basic`]}))();export{g as Basic,_ as __namedExportsOrder,h as default};