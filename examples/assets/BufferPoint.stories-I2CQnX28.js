import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DXFqSddf.js";import{r as n,t as r}from"./core-CJ9frRFN.js";import{t as i}from"./Viewer-vipVb3FM.js";import{t as a}from"./Viewer-CpgZ-RsP.js";var o,s=e((()=>{r(),o=n({name:`BufferPointCollection`,create(e,t){if(!e.primitiveCollection)return;let n=new Cesium.BufferPointCollection({primitiveCountMax:t.primitiveCountMax});return e.primitiveCollection.add(n),n},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},provide(e){return{bufferPointCollection:e}},cesiumProps:[`show`,`debugShowBoundingVolume`,`modelMatrix`],cesiumReadonlyProps:[`primitiveCountMax`]})})),c=e((()=>{s()})),l,u=e((()=>{r(),l=n({name:`BufferPoint`,create(e,t){if(!e.bufferPointCollection)return;let n=new Cesium.BufferPoint,r=e.bufferPointCollection.add({show:t.show,position:t.position,material:t.material},n);return t.featureId!==void 0&&(r.featureId=t.featureId),r},destroy(e){e.show=!1},update(e,t,n){t.position!==n.position&&t.position!==void 0&&e.setPosition(t.position),t.material!==n.material&&t.material!==void 0&&e.setMaterial(t.material)},cesiumProps:[`show`,`featureId`],otherProps:[`position`,`material`]})})),d,f,p,m,h,g,_,v;e((()=>{c(),a(),u(),d=t(),f=Cesium.Cartesian3.fromDegrees(-75.59777,40.03883),p=Cesium.Cartesian3.fromDegrees(-74.5,40.03883),m=Cesium.Cartesian3.fromDegrees(-75.59777,40.8),h=Cesium.Cartesian3.fromDegrees(-74.5,40.8),g={title:`BufferPoint`,component:l},_={render:()=>(0,d.jsx)(i,{full:!0,children:(0,d.jsxs)(o,{primitiveCountMax:4,children:[(0,d.jsx)(l,{show:!0,position:f,material:new Cesium.BufferPointMaterial({color:Cesium.Color.ORANGE,size:20})}),(0,d.jsx)(l,{show:!0,position:p,material:new Cesium.BufferPointMaterial({color:Cesium.Color.YELLOW,size:20})}),(0,d.jsx)(l,{show:!0,position:m,material:new Cesium.BufferPointMaterial({color:Cesium.Color.GREEN,size:20})}),(0,d.jsx)(l,{show:!0,position:h,material:new Cesium.BufferPointMaterial({color:Cesium.Color.CYAN,size:20})})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <BufferPointCollection primitiveCountMax={4}>
        <BufferPoint show position={p1} material={new BufferPointMaterial({
        color: Color.ORANGE,
        size: 20
      })} />
        <BufferPoint show position={p2} material={new BufferPointMaterial({
        color: Color.YELLOW,
        size: 20
      })} />
        <BufferPoint show position={p3} material={new BufferPointMaterial({
        color: Color.GREEN,
        size: 20
      })} />
        <BufferPoint show position={p4} material={new BufferPointMaterial({
        color: Color.CYAN,
        size: 20
      })} />
      </BufferPointCollection>
    </Viewer>
}`,..._.parameters?.docs?.source}}},v=[`Basic`]}))();export{_ as Basic,v as __namedExportsOrder,g as default};