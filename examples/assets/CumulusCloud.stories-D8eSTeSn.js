import{n as e}from"./iframe-DBxvnLfe.js";import{n as t,t as n}from"./component-B0RBfpgG.js";import{n as r,t as i}from"./Viewer-D3hDtTV2.js";import{n as a,t as o}from"./CameraLookAt-s8MIb12W.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c;function l(){return(l=s((()=>{t(),c=n({name:`CloudCollection`,create:e=>{if(!e.primitiveCollection)return;let t=new Cesium.CloudCollection;return e.primitiveCollection.add(t),t},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide:e=>({cloudCollection:e}),cesiumProps:[`noiseDetail`,`noiseOffset`,`show`,`debugBillboards`,`debugEllipsoids`],setCesiumPropsAfterCreate:!0})})))()}var u;function d(){return(d=s((()=>{t(),u=n({name:`CumulusCloud`,create:(e,t)=>e.cloudCollection?.add(t),destroy(e,t){t.cloudCollection&&!t.cloudCollection.isDestroyed()&&t.cloudCollection.remove(e)},cesiumProps:[`show`,`position`,`scale`,`maximumSize`,`slice`,`brightness`,`color`]})})))()}var f,p,m,h;function g(){return(g=s((()=>{a(),l(),r(),d(),f=e(),p={title:`CumulusCloud`,component:u},m={args:{show:!0,position:Cesium.Cartesian3.fromDegrees(-123.0744619,44.0503706,50),scale:new Cesium.Cartesian2(25,12),maximumSize:new Cesium.Cartesian3(25,12,15),slice:.36,brightness:1},render:e=>(0,f.jsxs)(i,{full:!0,children:[e.position&&(0,f.jsx)(o,{target:e.position,offset:new Cesium.Cartesian3(30,30,-10)}),(0,f.jsx)(c,{noiseDetail:16,noiseOffset:Cesium.Cartesian3.ZERO,children:(0,f.jsx)(u,{...e})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Basic`]})))()}g();export{m as Basic,h as __namedExportsOrder,p as default};