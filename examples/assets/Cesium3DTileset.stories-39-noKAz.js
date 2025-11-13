import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{a as t}from"./index-CjDrOnrV.js";import{r as c}from"./index-yIsmwZOr.js";import{e as h}from"./storybook-lrzrXzR7.js";import{C as m}from"./Cesium3DTileset-CX4Ugqhj.js";import{V as d}from"./Viewer-3OWF8io8.js";import"./v4-Dz_GI0CC.js";import"./component-P3MpLVno.js";const A={title:"Cesium3DTileset",component:m},i={render:s=>{const e=c.useRef(null);return o.jsx(d,{full:!0,ref:e,children:o.jsx(m,{...s,url:"./tileset/tileset.json",onAllTilesLoad:t("onAllTilesLoad"),onInitialTilesLoad:t("onInitialTilesLoad"),onTileFailed:t("onTileFailed"),onTileLoad:t("onTileLoad"),onTileUnload:t("onTileUnload"),onReady:r=>{var n,l;(l=(n=e.current)==null?void 0:n.cesiumElement)==null||l.zoomTo(r)},...h})})}},a={render:s=>{const e=c.useRef(null),r=c.useMemo(()=>Cesium.IonResource.fromAssetId(96188),[]);return o.jsx(d,{full:!0,ref:e,children:o.jsx(m,{...s,url:r})})}},u={render:s=>{const e=c.useRef(null);return o.jsx(d,{full:!0,ref:e,children:o.jsx(m,{...s,url:"./tileset/tileset.json",style:new Cesium.Cesium3DTileStyle({color:{conditions:[["true","color('red')"]]}}),onReady:r=>{var n,l;(l=(n=e.current)==null?void 0:n.cesiumElement)==null||l.zoomTo(r)}})})}};var f,T,p;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url="./tileset/tileset.json" onAllTilesLoad={action("onAllTilesLoad")} onInitialTilesLoad={action("onInitialTilesLoad")} onTileFailed={action("onTileFailed")} onTileLoad={action("onTileLoad")} onTileUnload={action("onTileUnload")} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} {...events} />
      </Viewer>;
  }
}`,...(p=(T=i.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};var C,R,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => IonResource.fromAssetId(96188), []);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url={url} />
      </Viewer>;
  }
}`,...(x=(R=a.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var j,w,L;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url="./tileset/tileset.json" style={new Cesium3DTileStyle({
        color: {
          conditions: [["true", "color('red')"]]
        }
      })} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} />
      </Viewer>;
  }
}`,...(L=(w=u.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const b=["Basic","Resource","Style"];export{i as Basic,a as Resource,u as Style,b as __namedExportsOrder,A as default};
