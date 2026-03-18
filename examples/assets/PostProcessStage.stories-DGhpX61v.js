import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./iframe-D4wvS9R9.js";import{n as i,r as a,t as o}from"./core-D7dEvFYR.js";import{t as s}from"./Viewer-DBW4on7w.js";import{t as c}from"./Viewer--AfqXkNC.js";import{n as l,t as u}from"./Cesium3DTileset-rsuf7Zb3.js";var d=t((()=>{l()})),f,p=t((()=>{o(),f=i({name:`Fxaa`,create:(e,t)=>t.fxaa,props:[]})})),m,h,g,_=t((()=>{o(),m=[`enabled`,`selected`],h=[`clearColor`,`forcePowerOfTwo`,`fragmentShader`,`name`,`pixelDatatype`,`pixelFormat`,`sampleMode`,`scissorRectangle`,`textureScale`,`uniforms`],g=a({name:`PostProcessStage`,create(e,t){if(!e.scene)return;let n=new Cesium.PostProcessStage(t);return typeof t.enabled==`boolean`&&(n.enabled=t.enabled),t.selected&&(n.selected=t.selected),e.scene.postProcessStages.add(n),n},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&t.scene.postProcessStages.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:m,cesiumReadonlyProps:h})})),v,y=t((()=>{o(),v=i({name:`BlackAndWhiteStage`,props:[`gradations`],create:()=>Cesium.PostProcessStageLibrary.createBlackAndWhiteStage()})})),b,x=t((()=>{o(),b=i({name:`LensFlareStage`,props:[`dirtTexture`,`starTexture`,`intensity`,`distortion`,`ghostDispersal`,`haloWidth`,`earthRadius`],create:()=>Cesium.PostProcessStageLibrary.createLensFlareStage()})})),S,C=t((()=>{o(),S=i({name:`NightVisionStage`,props:[],create:()=>Cesium.PostProcessStageLibrary.createNightVisionStage()})})),w=t((()=>{_(),y(),x(),C()})),T,E,D,O,k,A,j,M,N,P;t((()=>{T=e(n(),1),d(),c(),p(),w(),E=r(),D={title:`PostProcessStage`,component:g},O=`
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
`,k={args:{enabled:!0},render:e=>(0,E.jsx)(s,{full:!0,children:(0,E.jsx)(g,{...e,fragmentShader:O})})},k.args={enabled:!0},A={args:{enabled:!0},render:e=>(0,E.jsx)(s,{full:!0,children:(0,E.jsx)(v,{...e})})},j={args:{enabled:!0,intensity:5},render:e=>(0,E.jsx)(s,{full:!0,children:(0,E.jsx)(b,{...e})})},M={args:{enabled:!0},render:e=>(0,E.jsx)(s,{full:!0,children:(0,E.jsx)(S,{...e})})},N={args:{enabled:!0},render:e=>{let t=(0,T.useRef)(null);return(0,E.jsxs)(s,{full:!0,ref:t,children:[(0,E.jsx)(u,{url:`./tileset/tileset.json`,onReady:e=>{t.current?.cesiumElement?.zoomTo(e)}}),(0,E.jsx)(f,{...e})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <PostProcessStage {...args} fragmentShader={shader} />
    </Viewer>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <BlackAndWhiteStage {...args} />
    </Viewer>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true,
    intensity: 5
  },
  render: args => <Viewer full>
      <LensFlareStage {...args} />
    </Viewer>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <NightVisionStage {...args} />
    </Viewer>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Mosaic`,`BlackAndWhite`,`LensFlare`,`NightVison`,`Fxaa`]}))();export{A as BlackAndWhite,N as Fxaa,j as LensFlare,k as Mosaic,M as NightVison,P as __namedExportsOrder,D as default};