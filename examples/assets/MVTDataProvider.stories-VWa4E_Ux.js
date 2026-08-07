import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-C5z0sm_V.js";import{o as i,t as a}from"./core-D9bcybvr.js";import{t as o}from"./Viewer-DPIcYzgi.js";import{t as s}from"./Viewer-DUdQ1NFJ.js";var c,l,u,d,f,p=e((()=>{a(),c=[`show`],l=[`minZoom`,`maxZoom`,`extent`,`featureIdProperty`,`url`],u=[`url`,`onReady`,`onError`],d=i({name:`MVTDataProvider`,async create(e,t){if(!e.primitiveCollection)return;let{url:n,minZoom:r,maxZoom:i,extent:a,featureIdProperty:o,onReady:s,onError:c}=t,l;try{l=await Cesium.MVTDataProvider.fromUrl(n,{minZoom:r,maxZoom:i,extent:a,featureIdProperty:o}),s?.(l)}catch(e){c?.(e);return}return e.primitiveCollection.add(l),l},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:c,cesiumReadonlyProps:l,otherProps:u}),f=e=>e.tileset})),m,h,g,_,v,y,b,x,S,C;e((()=>{m=t(n(),1),s(),p(),h=r(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={title:`MVTDataProvider`,component:d,argTypes:{url:{control:`text`,description:`MVT URL template ({z}/{x}/{y}). Most production vector tile services require an API key — paste your own key URL here to test against a known dataset.`}}},v=Cesium.Rectangle.fromDegrees(-74.05,40.65,-73.85,40.85),y=Cesium.Cartesian3.fromDegrees(-74,40.68,2500),b={heading:0,pitch:Cesium.Math.toRadians(-25),roll:0},x=new Cesium.Cesium3DTileStyle({color:{conditions:[["${class} === 'building'",`color('#bcaa90', 1.0)`],["regExp('^(water|ocean|river|lake|sea|bay|stream)$').test(${class})",`color('#3892c4', 0.85)`],["regExp('^(park|wood|forest|grass|farmland|cemetery|playground|garden|nature_reserve)$').test(${class})",`color('#7cc26b', 0.7)`],["regExp('^(motorway|trunk|primary|secondary|tertiary|major)$').test(${class})",`color('#fbd870', 0.95)`],["regExp('^(residential|commercial|industrial|retail|school|hospital|university)$').test(${class})",`color('#dec8a8', 0.55)`],[`true`,`color('#e8d8c0', 0.45)`]]}}),S={args:{url:`https://tiles.openfreemap.org/planet/latest/{z}/{x}/{y}.pbf`,maxZoom:12},render:e=>{let t=(0,m.useRef)(null);return e.url?(0,h.jsx)(o,{full:!0,ref:t,children:(0,h.jsx)(d,{...e,url:e.url,extent:v,onReady:e=>{g(`onReady`)(e);let n=f(e);n&&(n.style=x),t.current?.cesiumElement?.camera.flyTo({destination:y,orientation:b,duration:0})},onError:g(`onError`)})}):(0,h.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#111`,color:`white`,fontFamily:`monospace`,padding:24,textAlign:`center`},children:(0,h.jsxs)(`div`,{style:{maxWidth:540},children:[(0,h.jsxs)(`p`,{style:{fontSize:16,marginBottom:16},children:[`Paste an MVT URL into the `,(0,h.jsx)(`code`,{children:`url`}),` control to mount the wrapper against real tiles.`]}),(0,h.jsxs)(`p`,{style:{opacity:.8,fontSize:13,lineHeight:1.5},children:[`Example shape (your endpoint and key):`,(0,h.jsx)(`br`,{}),(0,h.jsx)(`code`,{children:`https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=YOUR_KEY`})]}),(0,h.jsx)(`p`,{style:{opacity:.6,fontSize:12,lineHeight:1.5,marginTop:16},children:`The story ships with an OpenFreeMap default + Manhattan extent; clear the URL arg to see this overlay.`})]})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Loads OpenFreeMap's OpenMapTiles dataset for the Manhattan area and renders
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
run under VRT.`,...S.parameters?.docs?.description}}},C=[`Basic`]}))();export{S as Basic,C as __namedExportsOrder,_ as default};