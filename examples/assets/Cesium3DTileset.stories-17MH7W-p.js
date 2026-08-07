import{n as e,r as t}from"./iframe-B1i0gkyj.js";import{n,t as r}from"./storybook--8pSha1L.js";import{n as i,t as a}from"./Viewer-Btv2bIgt.js";import{n as o,t as s}from"./Cesium3DTileset-B8s7Amlr.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=c((()=>{l=t(),n(),i(),o(),u=e(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Cesium3DTileset`,component:s},p={render:e=>{let t=(0,l.useRef)(null);return(0,u.jsx)(a,{full:!0,ref:t,children:(0,u.jsx)(s,{...e,url:`./tileset/tileset.json`,onAllTilesLoad:d(`onAllTilesLoad`),onInitialTilesLoad:d(`onInitialTilesLoad`),onTileFailed:d(`onTileFailed`),onTileLoad:d(`onTileLoad`),onTileUnload:d(`onTileUnload`),onReady:e=>{t.current?.cesiumElement?.zoomTo(e)},...r})})}},m={render:e=>{let t=(0,l.useRef)(null),n=(0,l.useMemo)(()=>Cesium.IonResource.fromAssetId(96188),[]);return(0,u.jsx)(a,{full:!0,ref:t,children:(0,u.jsx)(s,{...e,url:n})})}},h={render:e=>{let t=(0,l.useRef)(null);return(0,u.jsx)(a,{full:!0,ref:t,children:(0,u.jsx)(s,{...e,url:`./tileset/tileset.json`,style:new Cesium.Cesium3DTileStyle({color:{conditions:[[`true`,`color('red')`]]}}),onReady:e=>{t.current?.cesiumElement?.zoomTo(e)}})})}},g={render:e=>{let t=(0,l.useRef)(null);return(0,u.jsx)(a,{full:!0,ref:t,children:(0,u.jsx)(s,{...e,url:`./tileset/tileset.json`,edgeDisplayMode:Cesium.EdgeDisplayMode.SURFACES_AND_EDGES,onReady:e=>{t.current?.cesiumElement?.zoomTo(e)}})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url="./tileset/tileset.json" onAllTilesLoad={action("onAllTilesLoad")} onInitialTilesLoad={action("onInitialTilesLoad")} onTileFailed={action("onTileFailed")} onTileLoad={action("onTileLoad")} onTileUnload={action("onTileUnload")} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} {...events} />
      </Viewer>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => IonResource.fromAssetId(96188), []);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url={url} />
      </Viewer>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url="./tileset/tileset.json" edgeDisplayMode={EdgeDisplayMode.SURFACES_AND_EDGES} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} />
      </Viewer>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Demonstrates the new `edgeDisplayMode` prop (Cesium 1.142+). Visible effect\nrequires source tilesets containing the `EXT_mesh_primitive_edge_visibility`\nglTF extension. Most demo tilesets do not include edge data, so this story\ndocuments the prop wiring; swap `url` for an edge-equipped tileset locally\nto see CAD-style wireframe rendering.",...g.parameters?.docs?.description}}},_=[`Basic`,`Resource`,`Style`,`EdgeDisplay`]})))()}v();export{p as Basic,g as EdgeDisplay,m as Resource,h as Style,_ as __namedExportsOrder,f as default};