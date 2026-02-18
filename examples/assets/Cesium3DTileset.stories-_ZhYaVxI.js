import{r as a,j as o}from"./iframe-CaYGMnUa.js";import{e as m}from"./storybook-BoWeRQq6.js";import{C as u}from"./Cesium3DTileset-BJpdAjv2.js";import{V as c}from"./Viewer-Dc3jHWle.js";import"./preload-helper-PPVm8Dsz.js";import"./component-BQeqpCl1.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,x={title:"Cesium3DTileset",component:u},l={render:s=>{const e=a.useRef(null);return o.jsx(c,{full:!0,ref:e,children:o.jsx(u,{...s,url:"./tileset/tileset.json",onAllTilesLoad:n("onAllTilesLoad"),onInitialTilesLoad:n("onInitialTilesLoad"),onTileFailed:n("onTileFailed"),onTileLoad:n("onTileLoad"),onTileUnload:n("onTileUnload"),onReady:r=>{e.current?.cesiumElement?.zoomTo(r)},...m})})}},t={render:s=>{const e=a.useRef(null),r=a.useMemo(()=>Cesium.IonResource.fromAssetId(96188),[]);return o.jsx(c,{full:!0,ref:e,children:o.jsx(u,{...s,url:r})})}},i={render:s=>{const e=a.useRef(null);return o.jsx(c,{full:!0,ref:e,children:o.jsx(u,{...s,url:"./tileset/tileset.json",style:new Cesium.Cesium3DTileStyle({color:{conditions:[["true","color('red')"]]}}),onReady:r=>{e.current?.cesiumElement?.zoomTo(r)}})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url="./tileset/tileset.json" onAllTilesLoad={action("onAllTilesLoad")} onInitialTilesLoad={action("onInitialTilesLoad")} onTileFailed={action("onTileFailed")} onTileLoad={action("onTileLoad")} onTileUnload={action("onTileUnload")} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} {...events} />
      </Viewer>;
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => IonResource.fromAssetId(96188), []);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url={url} />
      </Viewer>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const L=["Basic","Resource","Style"];export{l as Basic,t as Resource,i as Style,L as __namedExportsOrder,x as default};
