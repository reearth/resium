import{j as r}from"./iframe-C6gT_53K.js";import{c as n}from"./component-JLmv1WeE.js";import{V as a}from"./Viewer-BpQEPut0.js";import{c as i}from"./PostProcessStage-Dq2rp0Fv.js";import{E as m}from"./Entity-C2gBlZNb.js";import"./preload-helper-PPVm8Dsz.js";const c=["enabled","selected"],l=["inputPreviousStageTexture","name","stages","uniforms"],d=n({name:"PostProcessStageComposite",create(s,e){if(!s.scene)return;const o=new Cesium.PostProcessStageComposite(e);return typeof e.enabled=="boolean"&&(o.enabled=e.enabled),e.selected&&(o.selected=e.selected),s.scene.postProcessStages.add(o),o},destroy(s,e){e.scene&&!e.scene.isDestroyed()&&e.scene.postProcessStages.remove(s),s.isDestroyed()||s.destroy()},cesiumProps:c,cesiumReadonlyProps:l}),u=i({name:"Bloom",create:(s,e)=>e.bloom,props:["brightness","contrast","delta","glowOnly","sigma","stepSize"],noMount:!0}),y={title:"PostProcessStageComposite",component:d},t={name:"Bloom",render:()=>r.jsxs(a,{full:!0,children:[r.jsx(u,{}),r.jsx(m,{position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),model:{uri:"Cesium_Air.glb"},tracked:!0})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Bloom",
  render: () => <Viewer full>
      <Bloom />
      <Entity position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} model={{
      uri: "Cesium_Air.glb"
    }} tracked />
    </Viewer>
}`,...t.parameters?.docs?.source}}};const b=["BloomStory"];export{t as BloomStory,b as __namedExportsOrder,y as default};
