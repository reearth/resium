import{j as s,r as m}from"./iframe-C6gT_53K.js";import{c as u}from"./PostProcessStage-Dq2rp0Fv.js";import{c as g}from"./component-JLmv1WeE.js";import{V as n}from"./Viewer-BpQEPut0.js";import{C as p}from"./Cesium3DTileset-CoBFRjEC.js";import"./preload-helper-PPVm8Dsz.js";const f=u({name:"Fxaa",create:(e,r)=>r.fxaa,props:[]}),S=["enabled","selected"],x=["clearColor","forcePowerOfTwo","fragmentShader","name","pixelDatatype","pixelFormat","sampleMode","scissorRectangle","textureScale","uniforms"],d=g({name:"PostProcessStage",create(e,r){if(!e.scene)return;const a=new Cesium.PostProcessStage(r);return typeof r.enabled=="boolean"&&(a.enabled=r.enabled),r.selected&&(a.selected=r.selected),e.scene.postProcessStages.add(a),a},destroy(e,r){r.scene&&!r.scene.isDestroyed()&&r.scene.postProcessStages.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:S,cesiumReadonlyProps:x}),h=u({name:"BlackAndWhiteStage",props:["gradations"],create:()=>Cesium.PostProcessStageLibrary.createBlackAndWhiteStage()}),P=u({name:"LensFlareStage",props:["dirtTexture","starTexture","intensity","distortion","ghostDispersal","haloWidth","earthRadius"],create:()=>Cesium.PostProcessStageLibrary.createLensFlareStage()}),V=u({name:"NightVisionStage",props:[],create:()=>Cesium.PostProcessStageLibrary.createNightVisionStage()}),R={title:"PostProcessStage",component:d},b=`
uniform sampler2D colorTexture;
in vec2 v_textureCoordinates;
const int KERNEL_WIDTH = 16;
void main(void)
{
    vec2 step = 1.0 / czm_viewport.zw;
    vec2 integralPos = v_textureCoordinates - mod(v_textureCoordinates, 8.0 * step);
    vec3 averageValue = vec3(0.0);
    for (int i = 0; i < KERNEL_WIDTH; i++)
    {
        for (int j = 0; j < KERNEL_WIDTH; j++)
        {
            averageValue += texture(colorTexture, integralPos + step * vec2(i, j)).rgb;
        }
    }
    averageValue /= float(KERNEL_WIDTH * KERNEL_WIDTH);
    out_FragColor = vec4(averageValue, 1.0);
}
`,t={args:{enabled:!0},render:e=>s.jsx(n,{full:!0,children:s.jsx(d,{...e,fragmentShader:b})})};t.args={enabled:!0};const o={args:{enabled:!0},render:e=>s.jsx(n,{full:!0,children:s.jsx(h,{...e})})},i={args:{enabled:!0,intensity:5},render:e=>s.jsx(n,{full:!0,children:s.jsx(P,{...e})})},c={args:{enabled:!0},render:e=>s.jsx(n,{full:!0,children:s.jsx(V,{...e})})},l={args:{enabled:!0},render:e=>{const r=m.useRef(null);return s.jsxs(n,{full:!0,ref:r,children:[s.jsx(p,{url:"./tileset/tileset.json",onReady:a=>{r.current?.cesiumElement?.zoomTo(a)}}),s.jsx(f,{...e})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <PostProcessStage {...args} fragmentShader={shader} />
    </Viewer>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <BlackAndWhiteStage {...args} />
    </Viewer>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true,
    intensity: 5
  },
  render: args => <Viewer full>
      <LensFlareStage {...args} />
    </Viewer>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <NightVisionStage {...args} />
    </Viewer>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset url="./tileset/tileset.json" onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} />
        <ResiumFxaa {...args} />
      </Viewer>;
  }
}`,...l.parameters?.docs?.source}}};const L=["Mosaic","BlackAndWhite","LensFlare","NightVison","Fxaa"];export{o as BlackAndWhite,l as Fxaa,i as LensFlare,t as Mosaic,c as NightVison,L as __namedExportsOrder,R as default};
