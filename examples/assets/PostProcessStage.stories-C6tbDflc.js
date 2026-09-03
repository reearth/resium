import{n as e,r as t}from"./iframe-DBxvnLfe.js";import{n,t as r}from"./component-B0RBfpgG.js";import{n as i,t as a}from"./PostProcessStage-DODEkDma.js";import{n as o,t as s}from"./Viewer-D3hDtTV2.js";import{n as c,t as l}from"./Cesium3DTileset-CzQgoDT1.js";import{n as u}from"./rolldown-runtime-DkW27tQK.js";var d;function f(){return(f=u((()=>{i(),d=a({name:`Fxaa`,create:(e,t)=>t.fxaa,props:[]})})))()}var p,m,h;function g(){return(g=u((()=>{n(),p=[`enabled`,`selected`],m=[`clearColor`,`forcePowerOfTwo`,`fragmentShader`,`name`,`pixelDatatype`,`pixelFormat`,`sampleMode`,`scissorRectangle`,`textureScale`,`uniforms`],h=r({name:`PostProcessStage`,create(e,t){if(!e.scene)return;let n=new Cesium.PostProcessStage(t);return typeof t.enabled==`boolean`&&(n.enabled=t.enabled),t.selected&&(n.selected=t.selected),e.scene.postProcessStages.add(n),n},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&t.scene.postProcessStages.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:p,cesiumReadonlyProps:m})})))()}var _;function v(){return(v=u((()=>{i(),_=a({name:`BlackAndWhiteStage`,props:[`gradations`],create:()=>Cesium.PostProcessStageLibrary.createBlackAndWhiteStage()})})))()}var y;function b(){return(b=u((()=>{i(),y=a({name:`LensFlareStage`,props:[`dirtTexture`,`starTexture`,`intensity`,`distortion`,`ghostDispersal`,`haloWidth`,`earthRadius`],create:()=>Cesium.PostProcessStageLibrary.createLensFlareStage()})})))()}var x;function S(){return(S=u((()=>{i(),x=a({name:`NightVisionStage`,props:[],create:()=>Cesium.PostProcessStageLibrary.createNightVisionStage()})})))()}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=u((()=>{C=t(),c(),o(),f(),g(),b(),S(),v(),w=e(),T={title:`PostProcessStage`,component:h},E=`
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
`,D={args:{enabled:!0},render:e=>(0,w.jsx)(s,{full:!0,children:(0,w.jsx)(h,{...e,fragmentShader:E})})},D.args={enabled:!0},O={args:{enabled:!0},render:e=>(0,w.jsx)(s,{full:!0,children:(0,w.jsx)(_,{...e})})},k={args:{enabled:!0,intensity:5},render:e=>(0,w.jsx)(s,{full:!0,children:(0,w.jsx)(y,{...e})})},A={args:{enabled:!0},render:e=>(0,w.jsx)(s,{full:!0,children:(0,w.jsx)(x,{...e})})},j={args:{enabled:!0},render:e=>{let t=(0,C.useRef)(null);return(0,w.jsxs)(s,{full:!0,ref:t,children:[(0,w.jsx)(l,{url:`./tileset/tileset.json`,onReady:e=>{t.current?.cesiumElement?.zoomTo(e)}}),(0,w.jsx)(d,{...e})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <PostProcessStage {...args} fragmentShader={shader} />
    </Viewer>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <BlackAndWhiteStage {...args} />
    </Viewer>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true,
    intensity: 5
  },
  render: args => <Viewer full>
      <LensFlareStage {...args} />
    </Viewer>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true
  },
  render: args => <Viewer full>
      <NightVisionStage {...args} />
    </Viewer>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Mosaic`,`BlackAndWhite`,`LensFlare`,`NightVison`,`Fxaa`]})))()}N();export{O as BlackAndWhite,j as Fxaa,k as LensFlare,D as Mosaic,A as NightVison,M as __namedExportsOrder,T as default};