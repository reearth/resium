import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./component-P3MpLVno.js";import{V as c}from"./Viewer-3OWF8io8.js";import{c as l}from"./PostProcessStage-Dj250Laf.js";import{E as d}from"./Entity-6JEZeUU-.js";import"./index-yIsmwZOr.js";const u=["enabled","selected"],p=["inputPreviousStageTexture","name","stages","uniforms"],g=m({name:"PostProcessStageComposite",create(s,e){if(!s.scene)return;const o=new Cesium.PostProcessStageComposite(e);return typeof e.enabled=="boolean"&&(o.enabled=e.enabled),e.selected&&(o.selected=e.selected),s.scene.postProcessStages.add(o),o},destroy(s,e){e.scene&&!e.scene.isDestroyed()&&e.scene.postProcessStages.remove(s),s.isDestroyed()||s.destroy()},cesiumProps:u,cesiumReadonlyProps:p}),f=l({name:"Bloom",create:(s,e)=>e.bloom,props:["brightness","contrast","delta","glowOnly","sigma","stepSize"],noMount:!0}),_={title:"PostProcessStageComposite",component:g},t={name:"Bloom",render:()=>r.jsxs(c,{full:!0,children:[r.jsx(f,{}),r.jsx(d,{position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),model:{uri:"Cesium_Air.glb"},tracked:!0})]})};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Bloom",
  render: () => <Viewer full>
      <Bloom />
      <Entity position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} model={{
      uri: "Cesium_Air.glb"
    }} tracked />
    </Viewer>
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const j=["BloomStory"];export{t as BloomStory,j as __namedExportsOrder,_ as default};
