import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-LqKZThQS.js";import{o as i,t as a}from"./core-Cezh18I-.js";import{n as o,t as s}from"./storybook-CEsrIiwO.js";import{t as c}from"./Viewer-TUIROWwx.js";import{t as l}from"./Viewer-DPPsWzV4.js";var u,d,f,p,m,h=e((()=>{a(),u=`show.modelMatrix.shadows.maximumScreenSpaceError.cullRequestsWhileMoving.cullRequestsWhileMovingMultiplier.preloadWhenHidden.preloadFlightDestinations.preferLeaves.progressiveResolutionHeightFraction.foveatedScreenSpaceError.foveatedConeSize.foveatedMinimumScreenSpaceErrorRelaxation.foveatedInterpolationCallback.foveatedTimeDelay.dynamicScreenSpaceError.dynamicScreenSpaceErrorDensity.dynamicScreenSpaceErrorFactor.dynamicScreenSpaceErrorHeightFalloff.edgeDisplayMode.skipLevelOfDetail.baseScreenSpaceError.skipScreenSpaceErrorFactor.skipLevels.immediatelyLoadDesiredLevelOfDetail.loadSiblings.clippingPlanes.clippingPolygons.lightColor.colorBlendAmount.colorBlendMode.debugFreezeFrame.debugColorizeTiles.debugWireframe.debugShowBoundingVolume.debugShowContentBoundingVolume.debugShowViewerRequestVolume.debugShowGeometricError.debugShowRenderingStatistics.debugShowMemoryUsage.debugShowUrl.style.backFaceCulling.showOutline.vectorClassificationOnly.vectorKeepDecodedPositions.splitDirection.customShader.imageBasedLighting.showCreditsOnScreen.featureIdLabel.instanceFeatureIdLabel.outlineColor.cacheBytes.maximumCacheOverflowBytes.enableCollision`.split(`.`),d=[`asynchronouslyLoadImagery`,`classificationType`,`cullWithChildrenBounds`,`debugHeatmapTilePropertyName`,`ellipsoid`,`enableDebugWireframe`,`heightReference`,`modelUpAxis`,`modelForwardAxis`,`projectTo2D`,`enableShowOutline`,`enablePick`,`environmentMapOptions`,`scene`],f={onAllTilesLoad:`allTilesLoaded`,onInitialTilesLoad:`initialTilesLoaded`,onLoadProgress:`loadProgress`,onTileFailed:`tileFailed`,onTileLoad:`tileLoad`,onTileUnload:`tileUnload`,onTileVisible:`tileVisible`},p=[`onReady`,`onError`,`apiKey`,`onlyUsingWithGoogleGeocoder`],m=i({name:`GooglePhotorealistic3DTileset`,async create(e,t){if(!e.primitiveCollection)return;let{apiKey:n,onlyUsingWithGoogleGeocoder:r}=t,i={};n!==void 0&&(i.key=n),r!==void 0&&(i.onlyUsingWithGoogleGeocoder=r);let a;try{a=await Cesium.createGooglePhotorealistic3DTileset(i,t),t.onReady?.(a)}catch(e){t.onError?.(e);return}return t.colorBlendAmount&&(a.colorBlendAmount=t.colorBlendAmount),t.colorBlendMode&&(a.colorBlendMode=t.colorBlendMode),t.style&&(a.style=t.style),e.primitiveCollection.add(a),a},destroy(e,t){t.primitiveCollection&&!t.primitiveCollection.isDestroyed()&&t.primitiveCollection.remove(e),e.isDestroyed()||e.destroy()},cesiumProps:u,cesiumReadonlyProps:d,cesiumEventProps:f,otherProps:p,useCommonEvent:!0})})),g,_,v,y,b,x;e((()=>{g=t(n(),1),o(),l(),h(),_=r(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={title:`GooglePhotorealistic3DTileset`,component:m,argTypes:{apiKey:{control:`text`,description:`Google Maps API key. Required to load photorealistic tiles. Paste your own key in the Storybook controls panel — none is shipped in source.`}}},b={args:{apiKey:``},render:e=>{let t=(0,g.useRef)(null);return e.apiKey?(0,_.jsx)(c,{full:!0,ref:t,children:(0,_.jsx)(m,{...e,apiKey:e.apiKey,onAllTilesLoad:v(`onAllTilesLoad`),onInitialTilesLoad:v(`onInitialTilesLoad`),onTileFailed:v(`onTileFailed`),onTileLoad:v(`onTileLoad`),onTileUnload:v(`onTileUnload`),onReady:e=>{t.current?.cesiumElement?.zoomTo(e)},onError:v(`onError`),...s})}):(0,_.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#111`,color:`white`,fontFamily:`monospace`,padding:24,textAlign:`center`},children:(0,_.jsxs)(`div`,{style:{maxWidth:540},children:[(0,_.jsxs)(`p`,{style:{fontSize:16,marginBottom:16},children:[`Paste your Google Maps API key into the `,(0,_.jsx)(`code`,{children:`apiKey`}),` `,`control to load the photorealistic tileset.`]}),(0,_.jsx)(`p`,{style:{opacity:.8,fontSize:13,lineHeight:1.5},children:`Without a key, Cesium's authentication handshake hangs waiting for credentials and the iframe locks up.`}),(0,_.jsxs)(`p`,{style:{opacity:.6,fontSize:12,lineHeight:1.5,marginTop:16},children:[`Get a key at`,` `,(0,_.jsx)(`code`,{children:`console.cloud.google.com → APIs & Services → Credentials`}),`, enable the `,(0,_.jsx)(`em`,{children:`Map Tiles API`}),`, then paste it above.`]})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    // Empty by default — paste your Google Maps API key into the controls panel.
    // See the JSDoc above for why no default key is shipped.
    apiKey: ""
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    if (!args.apiKey) {
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
              Paste your Google Maps API key into the <code>apiKey</code>{" "}
              control to load the photorealistic tileset.
            </p>
            <p style={{
            opacity: 0.8,
            fontSize: 13,
            lineHeight: 1.5
          }}>
              Without a key, Cesium's authentication handshake hangs waiting
              for credentials and the iframe locks up.
            </p>
            <p style={{
            opacity: 0.6,
            fontSize: 12,
            lineHeight: 1.5,
            marginTop: 16
          }}>
              Get a key at{" "}
              <code>console.cloud.google.com → APIs & Services → Credentials</code>,
              enable the <em>Map Tiles API</em>, then paste it above.
            </p>
          </div>
        </div>;
    }
    return <Viewer full ref={ref}>
        <GooglePhotorealistic3DTileset {...args} apiKey={args.apiKey} onAllTilesLoad={action("onAllTilesLoad")} onInitialTilesLoad={action("onInitialTilesLoad")} onTileFailed={action("onTileFailed")} onTileLoad={action("onTileLoad")} onTileUnload={action("onTileUnload")} onReady={tileset => {
        ref.current?.cesiumElement?.zoomTo(tileset);
      }} onError={action("onError")} {...events} />
      </Viewer>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Loads Google's photorealistic 3D tiles using the \`apiKey\` arg.

**Bring your own API key.** No key is shipped in the repo. Paste a Google
Maps API key into the \`apiKey\` control to mount the tileset. Without a key
the tileset request hangs waiting for authentication and the iframe locks up;
the story handles this by showing an instructional empty-state overlay until
a key is provided.

Get a key at https://console.cloud.google.com → APIs & Services → Credentials,
then enable the "Map Tiles API" and the "Photorealistic 3D Tiles" capability.`,...b.parameters?.docs?.description}}},x=[`Basic`]}))();export{b as Basic,x as __namedExportsOrder,y as default};