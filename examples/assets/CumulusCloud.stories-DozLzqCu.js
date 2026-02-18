import{j as s}from"./iframe-CaYGMnUa.js";import{c as r}from"./component-BQeqpCl1.js";import{V as n}from"./Viewer-Dc3jHWle.js";import{C as l}from"./CameraLookAt-BkkcIINe.js";import"./preload-helper-PPVm8Dsz.js";import"./CameraOperation-BvKojjd6.js";const a=["noiseDetail","noiseOffset","show","debugBillboards","debugEllipsoids"],u=r({name:"CloudCollection",create:e=>{if(!e.primitiveCollection)return;const o=new Cesium.CloudCollection;return e.primitiveCollection.add(o),o},destroy(e,o){o.primitiveCollection&&!o.primitiveCollection.isDestroyed()&&o.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide:e=>({cloudCollection:e}),cesiumProps:a,setCesiumPropsAfterCreate:!0}),m=["show","position","scale","maximumSize","slice","brightness","color"],t=r({name:"CumulusCloud",create:(e,o)=>e.cloudCollection?.add(o),destroy(e,o){o.cloudCollection&&!o.cloudCollection.isDestroyed()&&o.cloudCollection.remove(e)},cesiumProps:m}),w={title:"CumulusCloud",component:t},i={args:{show:!0,position:Cesium.Cartesian3.fromDegrees(-123.0744619,44.0503706,50),scale:new Cesium.Cartesian2(25,12),maximumSize:new Cesium.Cartesian3(25,12,15),slice:.36,brightness:1},render:e=>s.jsxs(n,{full:!0,children:[e.position&&s.jsx(l,{target:e.position,offset:new Cesium.Cartesian3(30,30,-10)}),s.jsx(u,{noiseDetail:16,noiseOffset:Cesium.Cartesian3.ZERO,children:s.jsx(t,{...e})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const h=["Basic"];export{i as Basic,h as __namedExportsOrder,w as default};
