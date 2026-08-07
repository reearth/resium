import{n as e,r as t}from"./iframe-B1i0gkyj.js";import{n,t as r}from"./component-DA2-oKtp.js";import{n as i,t as a}from"./Viewer-Btv2bIgt.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d;function f(){return(f=o((()=>{n(),s=[`show`],c=[`minZoom`,`maxZoom`,`extent`,`featureIdProperty`,`url`],l=[`url`,`onReady`,`onError`],u=r({name:`MVTDataProvider`,async create(e,t){if(!e.primitiveCollection)return;let{url:n,minZoom:r,maxZoom:i,extent:a,featureIdProperty:o,onReady:s,onError:c}=t,l;try{l=await Cesium.MVTDataProvider.fromUrl(n,{minZoom:r,maxZoom:i,extent:a,featureIdProperty:o}),s?.(l)}catch(e){c?.(e);return}return e.primitiveCollection.add(l),l},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:s,cesiumReadonlyProps:c,otherProps:l}),d=e=>e.tileset})))()}var p,m,h,g,_,v,y,b,x,S;function C(){return(C=o((()=>{p=t(),i(),f(),m=e(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`MVTDataProvider`,component:u,argTypes:{url:{control:`text`,description:`MVT URL template ({z}/{x}/{y}). Most production vector tile services require an API key — paste your own key URL here to test against a known dataset.`}}},_=Cesium.Rectangle.fromDegrees(-74.05,40.65,-73.85,40.85),v=Cesium.Cartesian3.fromDegrees(-74,40.68,2500),y={heading:0,pitch:Cesium.Math.toRadians(-25),roll:0},b=new Cesium.Cesium3DTileStyle({color:{conditions:[["${class} === 'building'",`color('#bcaa90', 1.0)`],["regExp('^(water|ocean|river|lake|sea|bay|stream)$').test(${class})",`color('#3892c4', 0.85)`],["regExp('^(park|wood|forest|grass|farmland|cemetery|playground|garden|nature_reserve)$').test(${class})",`color('#7cc26b', 0.7)`],["regExp('^(motorway|trunk|primary|secondary|tertiary|major)$').test(${class})",`color('#fbd870', 0.95)`],["regExp('^(residential|commercial|industrial|retail|school|hospital|university)$').test(${class})",`color('#dec8a8', 0.55)`],[`true`,`color('#e8d8c0', 0.45)`]]}}),x={args:{url:`https://tiles.openfreemap.org/planet/latest/{z}/{x}/{y}.pbf`,maxZoom:12},render:e=>{let t=(0,p.useRef)(null);return e.url?(0,m.jsx)(a,{full:!0,ref:t,children:(0,m.jsx)(u,{...e,url:e.url,extent:_,onReady:e=>{h(`onReady`)(e);let n=d(e);n&&(n.style=b),t.current?.cesiumElement?.camera.flyTo({destination:v,orientation:y,duration:0})},onError:h(`onError`)})}):(0,m.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#111`,color:`white`,fontFamily:`monospace`,padding:24,textAlign:`center`},children:(0,m.jsxs)(`div`,{style:{maxWidth:540},children:[(0,m.jsxs)(`p`,{style:{fontSize:16,marginBottom:16},children:[`Paste an MVT URL into the `,(0,m.jsx)(`code`,{children:`url`}),` control to mount the wrapper against real tiles.`]}),(0,m.jsxs)(`p`,{style:{opacity:.8,fontSize:13,lineHeight:1.5},children:[`Example shape (your endpoint and key):`,(0,m.jsx)(`br`,{}),(0,m.jsx)(`code`,{children:`https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=YOUR_KEY`})]}),(0,m.jsx)(`p`,{style:{opacity:.6,fontSize:12,lineHeight:1.5,marginTop:16},children:`The story ships with an OpenFreeMap default + Manhattan extent; clear the URL arg to see this overlay.`})]})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    url: "https://tiles.openfreemap.org/planet/latest/{z}/{x}/{y}.pbf",
    maxZoom: 12
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const viewerRef = useRef<CesiumComponentRef<CesiumViewer>>(null);
    if (!args.url) {
      return <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        color: "white",
        fontFamily: "monospace",
        padding: 24,
        textAlign: "center"
      }}>
          <div style={{
          maxWidth: 540
        }}>
            <p style={{
            fontSize: 16,
            marginBottom: 16
          }}>
              Paste an MVT URL into the <code>url</code> control to mount the
              wrapper against real tiles.
            </p>
            <p style={{
            opacity: 0.8,
            fontSize: 13,
            lineHeight: 1.5
          }}>
              Example shape (your endpoint and key):
              <br />
              <code>{"https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=YOUR_KEY"}</code>
            </p>
            <p style={{
            opacity: 0.6,
            fontSize: 12,
            lineHeight: 1.5,
            marginTop: 16
          }}>
              The story ships with an OpenFreeMap default + Manhattan extent;
              clear the URL arg to see this overlay.
            </p>
          </div>
        </div>;
    }
    return <Viewer full ref={viewerRef}>
        <MVTDataProvider {...args} url={args.url} extent={NYC_EXTENT} onReady={provider => {
        action("onReady")(provider);
        const tileset = getTileset(provider);
        if (tileset) {
          tileset.style = VECTOR_TILE_STYLE;
        }
        viewerRef.current?.cesiumElement?.camera.flyTo({
          destination: NYC_VIEW,
          orientation: NYC_ORIENTATION,
          duration: 0
        });
      }} onError={action("onError")} />
      </Viewer>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Loads OpenFreeMap's OpenMapTiles dataset for the Manhattan area and renders
features styled per OpenMapTiles \`class\` (water blue, parks green, buildings
tan, major roads yellow, urban landuse beige). Camera is an oblique view from
lower Manhattan looking north so 3D-extruded building footprints are visible.

**About the constraints:** Cesium 1.142's \`MVTDataProvider\` is \`@experimental\`
and not yet performance-tuned for planet-scale rendering. Three things are
required for a useful demo:

1. **\`extent\`** — restrict the tile tree to a small geographic region.
   Without this, Cesium fetches tiles across the whole globe and the iframe
   becomes unresponsive.
2. **\`Cesium3DTileStyle\`** — apply per-feature color/show via the internal
   tileset (reached through \`getTileset(provider)\`). Without a style,
   decoded MVT features have no visible fill and you see nothing.
3. **Oblique camera** — a top-down view collapses 3D buildings into flat
   polygons; pitching the camera shows the extrusion.

Paste a different \`{z}/{x}/{y}\` MVT URL into the \`url\` control to swap data
sources (e.g. your MapTiler/Mapbox key URL). Network-dependent — does not
run under VRT.`,...x.parameters?.docs?.description}}},S=[`Basic`]})))()}C();export{x as Basic,S as __namedExportsOrder,g as default};