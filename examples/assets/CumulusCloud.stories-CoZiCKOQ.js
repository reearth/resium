import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{c as a}from"./component-C4acxoSN.js";import{V as m}from"./Viewer-DDvsarIF.js";import{C}from"./CameraLookAt-B3mpBVMx.js";import"./index-Ch-GWmDW.js";import"./CameraOperation-BoxKsWt7.js";const c=["noiseDetail","noiseOffset","show","debugBillboards","debugEllipsoids"],d=a({name:"CloudCollection",create:e=>{if(!e.primitiveCollection)return;const o=new Cesium.CloudCollection;return e.primitiveCollection.add(o),o},destroy(e,o){o.primitiveCollection&&!o.primitiveCollection.isDestroyed()&&o.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide:e=>({cloudCollection:e}),cesiumProps:c,setCesiumPropsAfterCreate:!0}),p=["show","position","scale","maximumSize","slice","brightness","color"],u=a({name:"CumulusCloud",create:(e,o)=>{var r;return(r=e.cloudCollection)==null?void 0:r.add(o)},destroy(e,o){o.cloudCollection&&!o.cloudCollection.isDestroyed()&&o.cloudCollection.remove(e)},cesiumProps:p}),b={title:"CumulusCloud",component:u},i={args:{show:!0,position:Cesium.Cartesian3.fromDegrees(-123.0744619,44.0503706,50),scale:new Cesium.Cartesian2(25,12),maximumSize:new Cesium.Cartesian3(25,12,15),slice:.36,brightness:1},render:e=>s.jsxs(m,{full:!0,children:[e.position&&s.jsx(C,{target:e.position,offset:new Cesium.Cartesian3(30,30,-10)}),s.jsx(d,{noiseDetail:16,noiseOffset:Cesium.Cartesian3.ZERO,children:s.jsx(u,{...e})})]})};var t,n,l;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const j=["Basic"];export{i as Basic,j as __namedExportsOrder,b as default};
