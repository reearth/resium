import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D4wvS9R9.js";import{r as n,t as r}from"./core-D7dEvFYR.js";import{t as i}from"./Viewer-DBW4on7w.js";import{t as a}from"./Viewer--AfqXkNC.js";import{t as o}from"./CameraLookAt-RHojvsds.js";import{t as s}from"./CameraLookAt-BXdm-Ldh.js";var c,l=e((()=>{r(),c=n({name:`CloudCollection`,create:e=>{if(!e.primitiveCollection)return;let t=new Cesium.CloudCollection;return e.primitiveCollection.add(t),t},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide:e=>({cloudCollection:e}),cesiumProps:[`noiseDetail`,`noiseOffset`,`show`,`debugBillboards`,`debugEllipsoids`],setCesiumPropsAfterCreate:!0})})),u=e((()=>{l()})),d,f=e((()=>{r(),d=n({name:`CumulusCloud`,create:(e,t)=>e.cloudCollection?.add(t),destroy(e,t){t.cloudCollection&&!t.cloudCollection.isDestroyed()&&t.cloudCollection.remove(e)},cesiumProps:[`show`,`position`,`scale`,`maximumSize`,`slice`,`brightness`,`color`]})})),p,m,h,g;e((()=>{s(),u(),a(),f(),p=t(),m={title:`CumulusCloud`,component:d},h={args:{show:!0,position:Cesium.Cartesian3.fromDegrees(-123.0744619,44.0503706,50),scale:new Cesium.Cartesian2(25,12),maximumSize:new Cesium.Cartesian3(25,12,15),slice:.36,brightness:1},render:e=>(0,p.jsxs)(i,{full:!0,children:[e.position&&(0,p.jsx)(o,{target:e.position,offset:new Cesium.Cartesian3(30,30,-10)}),(0,p.jsx)(c,{noiseDetail:16,noiseOffset:Cesium.Cartesian3.ZERO,children:(0,p.jsx)(d,{...e})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Basic`]}))();export{h as Basic,g as __namedExportsOrder,m as default};