import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-yIsmwZOr.js";import{c as u}from"./PostProcessStage-Dj250Laf.js";import{c as T}from"./component-P3MpLVno.js";import{V as n}from"./Viewer-3OWF8io8.js";import{C as _}from"./Cesium3DTileset-CX4Ugqhj.js";const F=u({name:"Fxaa",create:(e,r)=>r.fxaa,props:[]}),D=["enabled","selected"],W=["clearColor","forcePowerOfTwo","fragmentShader","name","pixelDatatype","pixelFormat","sampleMode","scissorRectangle","textureScale","uniforms"],R=T({name:"PostProcessStage",create(e,r){if(!e.scene)return;const a=new Cesium.PostProcessStage(r);return typeof r.enabled=="boolean"&&(a.enabled=r.enabled),r.selected&&(a.selected=r.selected),e.scene.postProcessStages.add(a),a},destroy(e,r){r.scene&&!r.scene.isDestroyed()&&r.scene.postProcessStages.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:D,cesiumReadonlyProps:W}),N=u({name:"BlackAndWhiteStage",props:["gradations"],create:()=>Cesium.PostProcessStageLibrary.createBlackAndWhiteStage()}),k=u({name:"LensFlareStage",props:["dirtTexture","starTexture","intensity","distortion","ghostDispersal","haloWidth","earthRadius"],create:()=>Cesium.PostProcessStageLibrary.createLensFlareStage()}),A=u({name:"NightVisionStage",props:[],create:()=>Cesium.PostProcessStageLibrary.createNightVisionStage()}),$={title:"PostProcessStage",component:R},B=`
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
`,t={args:{enabled:!0},render:e=>s.jsx(n,{full:!0,children:s.jsx(R,{...e,fragmentShader:B})})};t.args={enabled:!0};const o={args:{enabled:!0},render:e=>s.jsx(n,{full:!0,children:s.jsx(N,{...e})})},i={args:{enabled:!0,intensity:5},render:e=>s.jsx(n,{full:!0,children:s.jsx(k,{...e})})},c={args:{enabled:!0},render:e=>s.jsx(n,{full:!0,children:s.jsx(A,{...e})})},l={args:{enabled:!0},render:e=>{const r=L.useRef(null);return s.jsxs(n,{full:!0,ref:r,children:[s.jsx(_,{url:"./tileset/tileset.json",onReady:a=>{var d,m;(m=(d=r.current)==null?void 0:d.cesiumElement)==null||m.zoomTo(a)}}),s.jsx(F,{...e})]})}};var g,p,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <PostProcessStage {...args} fragmentShader={shader} />
    </Viewer>
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var S,x,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <BlackAndWhiteStage {...args} />
    </Viewer>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var P,V,b;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    enabled: true,
    intensity: 5
  },
  render: args => <Viewer full>
      <LensFlareStage {...args} />
    </Viewer>
}`,...(b=(V=i.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var j,v,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <NightVisionStage {...args} />
    </Viewer>
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,y,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const q=["Mosaic","BlackAndWhite","LensFlare","NightVison","Fxaa"];export{o as BlackAndWhite,l as Fxaa,i as LensFlare,t as Mosaic,c as NightVison,q as __namedExportsOrder,$ as default};
