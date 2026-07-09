import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-LqKZThQS.js";import{n as i,t as a}from"./storybook-CEsrIiwO.js";import{t as o}from"./Viewer-TUIROWwx.js";import{t as s}from"./Viewer-DPPsWzV4.js";import{n as c,t as l}from"./Cesium3DTileset-Bfz5a7Yu.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=t(n(),1),i(),s(),c(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Cesium3DTileset`,component:l},m={render:e=>{let t=(0,u.useRef)(null);return(0,d.jsx)(o,{full:!0,ref:t,children:(0,d.jsx)(l,{...e,url:`./tileset/tileset.json`,onAllTilesLoad:f(`onAllTilesLoad`),onInitialTilesLoad:f(`onInitialTilesLoad`),onTileFailed:f(`onTileFailed`),onTileLoad:f(`onTileLoad`),onTileUnload:f(`onTileUnload`),onReady:e=>{t.current?.cesiumElement?.zoomTo(e)},...a})})}},h={render:e=>{let t=(0,u.useRef)(null),n=(0,u.useMemo)(()=>Cesium.IonResource.fromAssetId(96188),[]);return(0,d.jsx)(o,{full:!0,ref:t,children:(0,d.jsx)(l,{...e,url:n})})}},g={render:e=>{let t=(0,u.useRef)(null);return(0,d.jsx)(o,{full:!0,ref:t,children:(0,d.jsx)(l,{...e,url:`./tileset/tileset.json`,style:new Cesium.Cesium3DTileStyle({color:{conditions:[[`true`,`color('red')`]]}}),onReady:e=>{t.current?.cesiumElement?.zoomTo(e)}})})}},_={render:e=>{let t=(0,u.useRef)(null);return(0,d.jsx)(o,{full:!0,ref:t,children:(0,d.jsx)(l,{...e,url:`./tileset/tileset.json`,edgeDisplayMode:Cesium.EdgeDisplayMode.SURFACES_AND_EDGES,onReady:e=>{t.current?.cesiumElement?.zoomTo(e)}})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url="./tileset/tileset.json" onAllTilesLoad={action("onAllTilesLoad")} onInitialTilesLoad={action("onInitialTilesLoad")} onTileFailed={action("onTileFailed")} onTileLoad={action("onTileLoad")} onTileUnload={action("onTileUnload")} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} {...events} />
      </Viewer>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => IonResource.fromAssetId(96188), []);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url={url} />
      </Viewer>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url="./tileset/tileset.json" edgeDisplayMode={EdgeDisplayMode.SURFACES_AND_EDGES} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} />
      </Viewer>;
  }
}`,..._.parameters?.docs?.source},description:{story:"Demonstrates the new `edgeDisplayMode` prop (Cesium 1.142+). Visible effect\nrequires source tilesets containing the `EXT_mesh_primitive_edge_visibility`\nglTF extension. Most demo tilesets do not include edge data, so this story\ndocuments the prop wiring; swap `url` for an edge-equipped tileset locally\nto see CAD-style wireframe rendering.",..._.parameters?.docs?.description}}},v=[`Basic`,`Resource`,`Style`,`EdgeDisplay`]}))();export{m as Basic,_ as EdgeDisplay,h as Resource,g as Style,v as __namedExportsOrder,p as default};