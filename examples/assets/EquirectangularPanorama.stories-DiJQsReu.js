import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-D4wvS9R9.js";import{r as n,t as r}from"./core-D7dEvFYR.js";import{t as i}from"./Viewer-DBW4on7w.js";import{t as a}from"./Viewer--AfqXkNC.js";import{t as o}from"./CameraLookAt-RHojvsds.js";import{t as s}from"./Globe-B_mA33Av.js";import{t as c}from"./Globe-BnegU5oh.js";import{t as l}from"./CameraLookAt-BXdm-Ldh.js";import{t as u}from"./ScreenSpaceCameraController-Dq7DLOop.js";import{t as d}from"./ScreenSpaceCameraController-xe4h4kLv.js";var f,p=e((()=>{r(),f=n({name:`EquirectangularPanorama`,create(e,t){if(!e.primitiveCollection)return;let n=new Cesium.EquirectangularPanorama({transform:t.transform,image:t.image,radius:t.radius,repeatHorizontal:t.repeatHorizontal,repeatVertical:t.repeatVertical,credit:t.credit});return e.primitiveCollection.add(n),n},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},setCesiumPropsAfterCreate:!0,cesiumProps:[`show`],cesiumReadonlyProps:[`transform`,`image`,`radius`,`repeatHorizontal`,`repeatVertical`,`credit`]})})),m,h,g,_,v,y,b,x,S,C;e((()=>{l(),c(),d(),a(),p(),m=t(),h=Cesium.Cartesian3.fromDegrees(-122.4175,37.655,100),g=Cesium.Transforms.headingPitchRollToFixedFrame(h,new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(10),Cesium.Math.toRadians(-5),Cesium.Math.toRadians(2)),Cesium.Ellipsoid.WGS84,Cesium.Transforms.eastNorthUpToFixedFrame),_=`https://upload.wikimedia.org/wikipedia/commons/0/08/Laon_Cathedral_Interior_360x180%2C_Picardy%2C_France_-_Diliff.jpg`,v=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{show:!1}),(0,m.jsx)(o,{target:h,offset:new Cesium.HeadingPitchRange(0,0,2)}),(0,m.jsx)(u,{enableTranslate:!1,enableZoom:!1})]}),y={title:`EquirectangularPanorama`,component:f},b={args:{show:!0},render:e=>(0,m.jsxs)(i,{full:!0,children:[v,(0,m.jsx)(f,{...e,transform:g,image:_})]})},x={render:()=>(0,m.jsxs)(i,{full:!0,children:[(0,m.jsx)(o,{target:h,offset:new Cesium.HeadingPitchRange(0,Cesium.Math.toRadians(-20),400)}),(0,m.jsx)(u,{enableTranslate:!1,enableZoom:!1}),(0,m.jsx)(f,{transform:g,image:_,radius:100,show:!0})]})},S={render:()=>(0,m.jsxs)(i,{full:!0,children:[v,(0,m.jsx)(f,{transform:g,image:_,repeatHorizontal:3,repeatVertical:2,show:!0})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      {commonScene}
      <EquirectangularPanorama {...args} transform={transform} image={image} />
    </Viewer>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      {/* Keep the globe visible so the sphere is visible against the terrain */}
      <CameraLookAt target={position} offset={new HeadingPitchRange(0, CesiumMath.toRadians(-20), 400)} />
      <ScreenSpaceCameraController enableTranslate={false} enableZoom={false} />
      <EquirectangularPanorama transform={transform} image={image} radius={100} show />
    </Viewer>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      {commonScene}
      <EquirectangularPanorama transform={transform} image={image} repeatHorizontal={3} repeatVertical={2} show />
    </Viewer>
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`SmallRadius`,`TextureRepeat`]}))();export{b as Basic,x as SmallRadius,S as TextureRepeat,C as __namedExportsOrder,y as default};