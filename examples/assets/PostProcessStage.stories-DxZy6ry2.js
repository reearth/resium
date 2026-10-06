import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-QblWywmw.js";import{n as r,t as i}from"./component-BmYWgq9U.js";import{n as a,t as o}from"./PostProcessStage-D-_qMHpL.js";import{n as s,t as c}from"./Viewer-DQCuA5d5.js";import{n as l,t as u}from"./Cesium3DTileset-Dpos50ED.js";var d;function f(){return(f=e((()=>{a(),d=o({name:`Fxaa`,create:(e,t)=>t.fxaa,props:[]})})))()}var p,m,h;function g(){return(g=e((()=>{r(),p=[`enabled`,`selected`],m=[`clearColor`,`forcePowerOfTwo`,`fragmentShader`,`name`,`pixelDatatype`,`pixelFormat`,`sampleMode`,`scissorRectangle`,`textureScale`,`uniforms`],h=i({name:`PostProcessStage`,create(e,t){if(!e.scene)return;let n=new Cesium.PostProcessStage(t);return typeof t.enabled==`boolean`&&(n.enabled=t.enabled),t.selected&&(n.selected=t.selected),e.scene.postProcessStages.add(n),n},destroy(e,t){t.scene&&!t.scene.isDestroyed()&&t.scene.postProcessStages.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:p,cesiumReadonlyProps:m})})))()}var _;function v(){return(v=e((()=>{a(),_=o({name:`BlackAndWhiteStage`,props:[`gradations`],create:()=>Cesium.PostProcessStageLibrary.createBlackAndWhiteStage()})})))()}var y;function b(){return(b=e((()=>{a(),y=o({name:`LensFlareStage`,props:[`dirtTexture`,`starTexture`,`intensity`,`distortion`,`ghostDispersal`,`haloWidth`,`earthRadius`],create:()=>Cesium.PostProcessStageLibrary.createLensFlareStage()})})))()}var x;function S(){return(S=e((()=>{a(),x=o({name:`NightVisionStage`,props:[],create:()=>Cesium.PostProcessStageLibrary.createNightVisionStage()})})))()}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{C=n(),l(),s(),f(),g(),b(),S(),v(),w=t(),T={title:`PostProcessStage`,component:h},E=`
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
`,D={args:{enabled:!0},render:e=>(0,w.jsx)(c,{full:!0,children:(0,w.jsx)(h,{...e,fragmentShader:E})})},D.args={enabled:!0},O={args:{enabled:!0},render:e=>(0,w.jsx)(c,{full:!0,children:(0,w.jsx)(_,{...e})})},k={args:{enabled:!0,intensity:5},render:e=>(0,w.jsx)(c,{full:!0,children:(0,w.jsx)(y,{...e})})},A={args:{enabled:!0},render:e=>(0,w.jsx)(c,{full:!0,children:(0,w.jsx)(x,{...e})})},j={args:{enabled:!0},render:e=>{let t=(0,C.useRef)(null);return(0,w.jsxs)(c,{full:!0,ref:t,children:[(0,w.jsx)(u,{url:`./tileset/tileset.json`,onReady:e=>{t.current?.cesiumElement?.zoomTo(e)}}),(0,w.jsx)(d,{...e})]})}},M=[`Mosaic`,`BlackAndWhite`,`LensFlare`,`NightVison`,`Fxaa`]})))()}N();export{O as BlackAndWhite,j as Fxaa,k as LensFlare,D as Mosaic,A as NightVison,M as __namedExportsOrder,T as default};