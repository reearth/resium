import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-CnOtSqsU.js";import{t as i}from"./react-dom-D3AvHCGz.js";import{g as a,o,t as s}from"./core-BDAwn2p7.js";import{n as c,t as ee}from"./storybook-CRLdXa1c.js";import{t as l}from"./Viewer-QmAkC9jI.js";import{t as te}from"./Viewer-CZKdeXI1.js";import{n as ne,t as u}from"./Entity-BpHcNQDz.js";import{n as re,t as ie}from"./PointGraphics-BUqOHW58.js";var ae,oe,d,se=e((()=>{s(),ae=[`image`,`show`,`scale`,`horizontalOrigin`,`verticalOrigin`,`eyeOffset`,`pixelOffset`,`rotation`,`alignedAxis`,`width`,`height`,`color`,`scaleByDistance`,`translucencyByDistance`,`pixelOffsetScaleByDistance`,`imageSubRegion`,`sizeInMeters`,`heightReference`,`distanceDisplayCondition`,`disableDepthTestDistance`,`splitDirection`],oe={onDefinitionChange:`definitionChanged`},d=o({name:`BillboardGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.BillboardGraphics(t);return e.entity.billboard=n,n},destroy(e,t){t.entity&&(t.entity.billboard=void 0)},cesiumProps:ae,cesiumEventProps:oe})})),ce=e((()=>{se()})),le,ue,f,de=e((()=>{s(),le=[`heightReference`,`dimensions`,`show`,`fill`,`material`,`outline`,`outlineColor`,`outlineWidth`,`shadows`,`distanceDisplayCondition`],ue={onDefinitionChange:`definitionChanged`},f=o({name:`BoxGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.BoxGraphics(t);return e.entity.box=n,n},destroy(e,t){t.entity&&(t.entity.box=void 0)},cesiumProps:le,cesiumEventProps:ue})})),fe=e((()=>{de()})),p,pe,m,me=e((()=>{s(),p=[`positions`,`width`,`cornerType`,`height`,`heightReference`,`extrudedHeight`,`extrudedHeightReference`,`show`,`fill`,`material`,`outline`,`outlineColor`,`outlineWidth`,`granularity`,`shadows`,`distanceDisplayCondition`,`zIndex`,`classificationType`],pe={onDefinitionChange:`definitionChanged`},m=o({name:`CorridorGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.CorridorGraphics(t);return t.classificationType&&(n.classificationType=t.classificationType),e.entity.corridor=n,n},destroy(e,t){t.entity&&(t.entity.corridor=void 0)},cesiumProps:p,cesiumEventProps:pe})})),he=e((()=>{me()})),h,g,_,ge=e((()=>{s(),h=[`heightReference`,`length`,`topRadius`,`bottomRadius`,`show`,`fill`,`material`,`outline`,`outlineColor`,`outlineWidth`,`numberOfVerticalLines`,`slices`,`distanceDisplayCondition`,`shadows`],g={onDefinitionChange:`definitionChanged`},_=o({name:`CylinderGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.CylinderGraphics(t);return e.entity.cylinder=n,n},destroy(e,t){t.entity&&(t.entity.cylinder=void 0)},cesiumProps:h,cesiumEventProps:g})})),_e=e((()=>{ge()})),ve,ye,v,be=e((()=>{s(),ve=[`semiMajorAxis`,`semiMinorAxis`,`height`,`heightReference`,`extrudedHeight`,`show`,`fill`,`material`,`outline`,`outlineColor`,`outlineWidth`,`numberOfVerticalLines`,`rotation`,`stRotation`,`granularity`,`shadows`,`distanceDisplayCondition`,`zIndex`,`classificationType`,`extrudedHeightReference`],ye={onDefinitionChange:`definitionChanged`},v=o({name:`EllipseGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.EllipseGraphics(t);return e.entity.ellipse=n,n},destroy(e,t){t.entity&&(t.entity.ellipse=void 0)},cesiumProps:ve,cesiumEventProps:ye})})),xe=e((()=>{be()})),y,b,x,Se=e((()=>{s(),y=[`heightReference`,`radii`,`show`,`fill`,`innerRadii`,`material`,`maximumClock`,`maximumCone`,`minimumClock`,`minimumCone`,`outline`,`outlineColor`,`outlineWidth`,`subdivisions`,`stackPartitions`,`slicePartitions`,`shadows`,`distanceDisplayCondition`],b={onDefinitionChange:`definitionChanged`},x=o({name:`EllipsoidGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.EllipsoidGraphics(t);return e.entity.ellipsoid=n,n},destroy(e,t){t.entity&&(t.entity.ellipsoid=void 0)},cesiumProps:y,cesiumEventProps:b})})),Ce=e((()=>{Se()})),S,C,w,T,we=e((()=>{S=t(n(),1),C=i(),s(),w=r(),T=({children:e,container:t,resizeInfoBox:n=!0})=>{let{viewer:r,entity:i}=a(),[o,s]=(0,S.useState)(!1),c=(0,S.useMemo)(()=>t??r?.infoBox.frame.contentDocument?.createElement(`div`),[t,r?.infoBox.frame.contentDocument]);return(0,S.useEffect)(()=>{if(!r||!i)return;let e=e=>{s(!!e&&e.id===i.id)};return r.selectedEntityChanged.addEventListener(e),()=>{r.selectedEntityChanged.removeEventListener(e)}},[i,r]),(0,S.useEffect)(()=>{if(t||!c||!r)return;let e=r.infoBox?.frame,i=e?.contentDocument?.querySelector(`.cesium-infoBox-description`);if(!e||!i)return;let a;if(o){if(n){let t=i.getBoundingClientRect().height;e.style.height=t+`px`,a=window.setInterval(()=>{let t=r.infoBox.container.querySelector(`.cesium-infoBox.cesium-infoBox-visible`);t&&(clearInterval(a),a=void 0,i.appendChild(c),t.classList.remove(`cesium-infoBox-bodyless`),e.style.height=i.getBoundingClientRect().height+`px`)},10)}}else c.parentElement===i&&i.removeChild(c);return a?()=>clearTimeout(a):void 0},[c,t,n,o,r]),c?(0,w.jsx)(w.Fragment,{children:(0,C.createPortal)((0,w.jsx)(w.Fragment,{children:!t||o?e:null}),c)}):null}})),Te=e((()=>{we()})),E,D,O,Ee=e((()=>{s(),E=[`text`,`font`,`style`,`fillColor`,`outlineColor`,`outlineWidth`,`show`,`showBackground`,`backgroundColor`,`backgroundPadding`,`scale`,`horizontalOrigin`,`verticalOrigin`,`eyeOffset`,`pixelOffset`,`translucencyByDistance`,`pixelOffsetScaleByDistance`,`scaleByDistance`,`heightReference`,`distanceDisplayCondition`,`disableDepthTestDistance`],D={onDefinitionChange:`definitionChanged`},O=o({name:`LabelGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.LabelGraphics(t);return e.entity.label=n,n},destroy(e,t){t.entity&&(t.entity.label=void 0)},cesiumProps:E,cesiumEventProps:D})})),De=e((()=>{Ee()})),k,A,j,Oe=e((()=>{s(),k=[`uri`,`show`,`scale`,`minimumPixelSize`,`maximumScale`,`incrementallyLoadTextures`,`runAnimations`,`clampAnimations`,`nodeTransformations`,`shadows`,`heightReference`,`distanceDisplayCondition`,`silhouetteColor`,`silhouetteSize`,`color`,`colorBlendMode`,`colorBlendAmount`,`clippingPlanes`,`imageBasedLightingFactor`,`lightColor`,`articulations`,`customShader`,`enableVerticalExaggeration`,`environmentMapOptions`],A={onDefinitionChange:`definitionChanged`},j=o({name:`ModelGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.ModelGraphics(t);return e.entity.model=n,n},destroy(e,t){t.entity&&(t.entity.model=void 0)},cesiumProps:k,cesiumEventProps:A})})),ke=e((()=>{Oe()})),M,N,P,Ae=e((()=>{s(),M=[`leadTime`,`trailTime`,`show`,`width`,`material`,`resolution`,`distanceDisplayCondition`,`relativeTo`],N={onDefinitionChange:`definitionChanged`},P=o({name:`PathGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.PathGraphics(t);return e.entity.path=n,n},destroy(e,t){t.entity&&(t.entity.path=void 0)},cesiumProps:M,cesiumEventProps:N})})),je=e((()=>{Ae()})),F,I,L,Me=e((()=>{s(),F=[`plane`,`dimensions`,`show`,`fill`,`material`,`outline`,`outlineColor`,`outlineWidth`,`shadows`,`distanceDisplayCondition`],I={onDefinitionChange:`definitionChanged`},L=o({name:`PlaneGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.PlaneGraphics(t);return e.entity.plane=n,n},destroy(e,t){t.entity&&(t.entity.plane=void 0)},cesiumProps:F,cesiumEventProps:I})})),Ne=e((()=>{Me()})),R,z,B,Pe=e((()=>{s(),R=[`arcType`,`hierarchy`,`height`,`heightReference`,`extrudedHeight`,`extrudedHeightReference`,`show`,`fill`,`material`,`outline`,`outlineColor`,`outlineWidth`,`stRotation`,`granularity`,`perPositionHeight`,`closeTop`,`closeBottom`,`shadows`,`distanceDisplayCondition`,`zIndex`,`classificationType`,`textureCoordinates`],z={onDefinitionChange:`definitionChanged`},B=o({name:`PolygonGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.PolygonGraphics(t);return e.entity.polygon=n,n},destroy(e,t){t.entity&&(t.entity.polygon=void 0)},cesiumProps:R,cesiumEventProps:z})})),Fe=e((()=>{Pe()})),Ie,Le,V,Re=e((()=>{s(),Ie=[`arcType`,`classificationType`,`positions`,`clampToGround`,`width`,`show`,`material`,`depthFailMaterial`,`granularity`,`shadows`,`distanceDisplayCondition`,`zIndex`],Le={onDefinitionChange:`definitionChanged`},V=o({name:`PolylineGraphics`,create(e,t){if(!e.entity)return;let n=new Cesium.PolylineGraphics(t);return e.entity.polyline=n,n},destroy(e,t){t.entity&&(t.entity.polyline=void 0)},cesiumProps:Ie,cesiumEventProps:Le})})),ze=e((()=>{Re()})),H,U,W,Be,G,Ve,He,K,q,J,Y,X,Z,Q,$;e((()=>{H=t(n(),1),ce(),fe(),c(),he(),_e(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),ie(),Fe(),ze(),te(),ne(),U=r(),{action:W}=__STORYBOOK_MODULE_ACTIONS__,Be={title:`Entity`,component:u},G=()=>{let e=document.createElement(`canvas`);return e.width=100,e.height=100,e},Ve=(e,t)=>{let n=e.getContext(`2d`);n&&(n.clearRect(0,0,e.width,e.height),n.fillStyle=`rgba(100,0,0,0.8)`,n.beginPath(),n.arc(e.width/2,e.height/2,t*e.width/2,0,Math.PI*2,!1),n.fill())},He=e=>{let t=(0,H.useMemo)(G,[]),n=(0,H.useMemo)(G,[]),[r,i]=(0,H.useState)(),a=(0,H.useRef)(0);return(0,H.useEffect)(()=>{let e=window.setInterval(()=>{a.current=Math.min(a.current+.01,1),i(e=>{let r=e===t?n:t;return r&&Ve(r,a.current),r}),a.current>=1&&clearInterval(e)},10);return()=>window.clearInterval(e)},[t,n]),(0,U.jsx)(u,{...e,billboard:{image:r}})},K={render:e=>(0,U.jsx)(l,{full:!0,children:(0,U.jsx)(u,{...e,name:`test`,description:`test!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})})},q={render:e=>{let[t,n]=(0,H.useState)(0);return(0,U.jsxs)(l,{full:!0,children:[(0,U.jsx)(u,{...e,name:`test1`,position:Cesium.Cartesian3.fromDegrees(-74,40,100),point:{pixelSize:15,color:Cesium.Color.YELLOW},description:`Normal Description`}),(0,U.jsx)(u,{...e,name:`test3`,position:Cesium.Cartesian3.fromDegrees(-74,30,100),point:{pixelSize:15,color:Cesium.Color.RED},children:(0,U.jsx)(T,{children:(0,U.jsx)(`h1`,{children:`Hello!`})})}),(0,U.jsx)(u,{...e,name:`test4`,position:Cesium.Cartesian3.fromDegrees(-74,20,100),point:{pixelSize:15,color:Cesium.Color.ORANGE},children:(0,U.jsxs)(T,{children:[(0,U.jsx)(`h1`,{children:`Hello!`}),(0,U.jsx)(`p`,{children:`This is description. It can be described with React!`}),(0,U.jsxs)(`button`,{onClick:()=>n(e=>e+1),children:[`counter: `,t]})]})})]})}},J={render:e=>(0,U.jsx)(l,{full:!0,children:(0,U.jsx)(u,{...e,name:`test`,description:`test!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10},selected:!0,tracked:!0})})},Y={render:()=>(0,U.jsx)(l,{full:!0,children:(0,U.jsx)(He,{name:`test`,description:`test`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100)})})},X={render:e=>(0,U.jsx)(l,{full:!0,children:(0,U.jsx)(u,{...e,name:`test`,description:`test!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10},...ee})})},Z={render:e=>(0,U.jsxs)(l,{full:!0,onMouseEnter:W(`mouseenter`),children:[(0,U.jsx)(u,{...e,name:`BillboardGraphics`,description:`BillboardGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-40.0707383,40.7117244,100),selected:!0,children:(0,U.jsx)(d,{image:`example.png`,scale:.05})}),(0,U.jsx)(u,{...e,name:`BoxGraphics`,description:`BoxGraphics!!`,position:Cesium.Cartesian3.fromDegrees(.0707383,40.7117244,100),children:(0,U.jsx)(f,{material:Cesium.Color.RED,dimensions:new Cesium.Cartesian3(4e5,3e5,5e5)})}),(0,U.jsx)(u,{...e,name:`CorridorGraphics`,description:`CorridorGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(m,{material:Cesium.Color.YELLOW,positions:Cesium.Cartesian3.fromDegreesArray([-100,40,-105,40,-105,35]),height:2e5,extrudedHeight:1e5,width:2e5,cornerType:Cesium.CornerType.BEVELED,outline:!0,outlineColor:Cesium.Color.WHITE})}),(0,U.jsx)(u,{...e,name:`CylinderGraphics`,description:`CylinderGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,20.7117244,100),children:(0,U.jsx)(_,{length:4e5,topRadius:2e5,bottomRadius:2e5,material:Cesium.Color.GREEN.withAlpha(.5),outline:!0,outlineColor:Cesium.Color.DARKGREEN})}),(0,U.jsx)(u,{...e,name:`EllipseGraphics`,description:`EllipseGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-34.0707383,60.7117244,100),children:(0,U.jsx)(v,{material:Cesium.Color.RED,semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:.78539,outline:!0})}),(0,U.jsx)(u,{...e,name:`EllipsoidGraphics`,description:`EllipsoidGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-14.0707383,.7117244,100),children:(0,U.jsx)(x,{material:Cesium.Color.BLUEVIOLET,radii:new Cesium.Cartesian3(3e5,3e5,3e5),fill:!0,outline:!0,outlineColor:new Cesium.Color(0,0,0,1)})}),(0,U.jsx)(u,{...e,name:`LabelGraphics`,description:`LabelGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-34.0707383,5.7117244,100),children:(0,U.jsx)(O,{text:`LabelGraphics`,font:`24px Helvetica`,fillColor:Cesium.Color.SKYBLUE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE})}),(0,U.jsx)(u,{...e,name:`ModelGraphics`,description:`ModelGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(j,{uri:`Cesium_Air.glb`,minimumPixelSize:128,maximumScale:2e4})}),(0,U.jsx)(u,{...e,name:`PathGraphics`,description:`PathGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(P,{material:Cesium.Color.RED,width:8,leadTime:10,trailTime:1e3,resolution:5})}),(0,U.jsx)(u,{...e,name:`PlaneGraphics`,description:`PlaneGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,50.7117244,100),children:(0,U.jsx)(L,{plane:new Cesium.Plane(Cesium.Cartesian3.UNIT_Z,0),dimensions:new Cesium.Cartesian2(4e5,3e5),fill:!1,outline:!0,outlineColor:Cesium.Color.YELLOW})}),(0,U.jsx)(u,{...e,name:`PointGraphics`,description:`PointGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,60.7117244,100),children:(0,U.jsx)(re,{color:Cesium.Color.BISQUE,pixelSize:10})}),(0,U.jsx)(u,{...e,name:`PolygonGraphics`,description:`PolygonGraphics!!`,children:(0,U.jsx)(B,{hierarchy:Cesium.Cartesian3.fromDegreesArray([-108,42,-100,42,-104,40]),material:Cesium.Color.GREEN})}),(0,U.jsx)(u,{...e,name:`PolylineGraphics`,description:`PolylineGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(V,{positions:Cesium.Cartesian3.fromDegreesArrayHeights([-75,45,5e5,-125,45,5e5]),width:4,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.CYAN})})})]})},Q={render:e=>(0,U.jsx)(H.StrictMode,{children:(0,U.jsxs)(l,{full:!0,onMouseEnter:W(`mouseenter`),children:[(0,U.jsx)(u,{...e,name:`BillboardGraphics`,description:`BillboardGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-40.0707383,40.7117244,100),selected:!0,children:(0,U.jsx)(d,{image:`example.png`,scale:.05})}),(0,U.jsx)(u,{...e,name:`BoxGraphics`,description:`BoxGraphics!!`,position:Cesium.Cartesian3.fromDegrees(.0707383,40.7117244,100),children:(0,U.jsx)(f,{material:Cesium.Color.RED,dimensions:new Cesium.Cartesian3(4e5,3e5,5e5)})}),(0,U.jsx)(u,{...e,name:`CorridorGraphics`,description:`CorridorGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(m,{material:Cesium.Color.YELLOW,positions:Cesium.Cartesian3.fromDegreesArray([-100,40,-105,40,-105,35]),height:2e5,extrudedHeight:1e5,width:2e5,cornerType:Cesium.CornerType.BEVELED,outline:!0,outlineColor:Cesium.Color.WHITE})}),(0,U.jsx)(u,{...e,name:`CylinderGraphics`,description:`CylinderGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,20.7117244,100),children:(0,U.jsx)(_,{length:4e5,topRadius:2e5,bottomRadius:2e5,material:Cesium.Color.GREEN.withAlpha(.5),outline:!0,outlineColor:Cesium.Color.DARKGREEN})}),(0,U.jsx)(u,{...e,name:`EllipseGraphics`,description:`EllipseGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-34.0707383,60.7117244,100),children:(0,U.jsx)(v,{material:Cesium.Color.RED,semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:.78539,outline:!0})}),(0,U.jsx)(u,{...e,name:`EllipsoidGraphics`,description:`EllipsoidGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-14.0707383,.7117244,100),children:(0,U.jsx)(x,{material:Cesium.Color.BLUEVIOLET,radii:new Cesium.Cartesian3(3e5,3e5,3e5),fill:!0,outline:!0,outlineColor:new Cesium.Color(0,0,0,1)})}),(0,U.jsx)(u,{...e,name:`LabelGraphics`,description:`LabelGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-34.0707383,5.7117244,100),children:(0,U.jsx)(O,{text:`LabelGraphics`,font:`24px Helvetica`,fillColor:Cesium.Color.SKYBLUE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE})}),(0,U.jsx)(u,{...e,name:`ModelGraphics`,description:`ModelGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(j,{uri:`Cesium_Air.glb`,minimumPixelSize:128,maximumScale:2e4})}),(0,U.jsx)(u,{...e,name:`PathGraphics`,description:`PathGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(P,{material:Cesium.Color.RED,width:8,leadTime:10,trailTime:1e3,resolution:5})}),(0,U.jsx)(u,{...e,name:`PlaneGraphics`,description:`PlaneGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,50.7117244,100),children:(0,U.jsx)(L,{plane:new Cesium.Plane(Cesium.Cartesian3.UNIT_Z,0),dimensions:new Cesium.Cartesian2(4e5,3e5),fill:!1,outline:!0,outlineColor:Cesium.Color.YELLOW})}),(0,U.jsx)(u,{...e,name:`PointGraphics`,description:`PointGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,60.7117244,100),children:(0,U.jsx)(re,{color:Cesium.Color.BISQUE,pixelSize:10})}),(0,U.jsx)(u,{...e,name:`PolygonGraphics`,description:`PolygonGraphics!!`,children:(0,U.jsx)(B,{hierarchy:Cesium.Cartesian3.fromDegreesArray([-108,42,-100,42,-104,40]),material:Cesium.Color.GREEN})}),(0,U.jsx)(u,{...e,name:`PolylineGraphics`,description:`PolylineGraphics!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:(0,U.jsx)(V,{positions:Cesium.Cartesian3.fromDegreesArrayHeights([-75,45,5e5,-125,45,5e5]),width:4,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.CYAN})})})]})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    return <Viewer full>
        <Entity {...args} name="test1" position={Cartesian3.fromDegrees(-74, 40, 100)} point={{
        pixelSize: 15,
        color: Color.YELLOW
      }} description="Normal Description" />
        <Entity {...args} name="test3" position={Cartesian3.fromDegrees(-74, 30, 100)} point={{
        pixelSize: 15,
        color: Color.RED
      }}>
          <EntityDescription>
            <h1>Hello!</h1>
          </EntityDescription>
        </Entity>
        <Entity {...args} name="test4" position={Cartesian3.fromDegrees(-74, 20, 100)} point={{
        pixelSize: 15,
        color: Color.ORANGE
      }}>
          <EntityDescription>
            <h1>Hello!</h1>
            <p>This is description. It can be described with React!</p>
            <button onClick={() => setCount(i => i + 1)}>counter: {count}</button>
          </EntityDescription>
        </Entity>
      </Viewer>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} selected tracked />
    </Viewer>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CanvasEntity name="test" description="test" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} />
    </Viewer>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} {...events} />
    </Viewer>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full onMouseEnter={action("mouseenter")}>
      <Entity {...args} name="BillboardGraphics" description="BillboardGraphics!!" position={Cartesian3.fromDegrees(-40.0707383, 40.7117244, 100)} selected>
        <BillboardGraphics image="example.png" scale={0.05} />
      </Entity>
      <Entity {...args} name="BoxGraphics" description="BoxGraphics!!" position={Cartesian3.fromDegrees(0.0707383, 40.7117244, 100)}>
        <BoxGraphics material={Color.RED} dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)} />
      </Entity>
      <Entity {...args} name="CorridorGraphics" description="CorridorGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <CorridorGraphics material={Color.YELLOW} positions={Cartesian3.fromDegreesArray([-100.0, 40.0, -105.0, 40.0, -105.0, 35.0]) as any} // WORKAROUND
      height={200000.0} extrudedHeight={100000.0} width={200000.0} cornerType={CornerType.BEVELED} outline // height or extrudedHeight must be set for outlines to display
      outlineColor={Color.WHITE} />
      </Entity>
      <Entity {...args} name="CylinderGraphics" description="CylinderGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 20.7117244, 100)}>
        <CylinderGraphics length={400000.0} topRadius={200000.0} bottomRadius={200000.0} material={Color.GREEN.withAlpha(0.5)} outline outlineColor={Color.DARKGREEN} />
      </Entity>
      <Entity {...args} name="EllipseGraphics" description="EllipseGraphics!!" position={Cartesian3.fromDegrees(-34.0707383, 60.7117244, 100)}>
        <EllipseGraphics material={Color.RED} semiMinorAxis={150000.0} semiMajorAxis={300000.0} extrudedHeight={200000.0} rotation={0.78539} outline />
      </Entity>
      <Entity {...args} name="EllipsoidGraphics" description="EllipsoidGraphics!!" position={Cartesian3.fromDegrees(-14.0707383, 0.7117244, 100)}>
        <EllipsoidGraphics material={Color.BLUEVIOLET} radii={new Cartesian3(300000.0, 300000.0, 300000.0)} fill outline outlineColor={new Color(0, 0, 0, 1)} />
      </Entity>
      <Entity {...args} name="LabelGraphics" description="LabelGraphics!!" position={Cartesian3.fromDegrees(-34.0707383, 5.7117244, 100)}>
        <LabelGraphics text="LabelGraphics" font="24px Helvetica" fillColor={Color.SKYBLUE} outlineColor={Color.BLACK} outlineWidth={2} style={LabelStyle.FILL_AND_OUTLINE} />
      </Entity>
      <Entity {...args} name="ModelGraphics" description="ModelGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <ModelGraphics uri="Cesium_Air.glb" minimumPixelSize={128} maximumScale={20000} />
      </Entity>
      <Entity {...args} name="PathGraphics" description="PathGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <PathGraphics material={Color.RED} width={8} leadTime={10} trailTime={1000} resolution={5} />
      </Entity>
      <Entity {...args} name="PlaneGraphics" description="PlaneGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 50.7117244, 100)}>
        <PlaneGraphics plane={new Plane(Cartesian3.UNIT_Z, 0.0)} dimensions={new Cartesian2(400000.0, 300000.0)} fill={false} outline outlineColor={Color.YELLOW} />
      </Entity>
      <Entity {...args} name="PointGraphics" description="PointGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 60.7117244, 100)}>
        <PointGraphics color={Color.BISQUE} pixelSize={10} />
      </Entity>
      <Entity {...args} name="PolygonGraphics" description="PolygonGraphics!!">
        <PolygonGraphics hierarchy={Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]) as any} // WORKAROUND
      material={Color.GREEN} />
      </Entity>
      <Entity {...args} name="PolylineGraphics" description="PolylineGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <PolylineGraphics positions={Cartesian3.fromDegreesArrayHeights([-75, 45, 500000, -125, 45, 500000])} width={4} material={new PolylineDashMaterialProperty({
        color: Color.CYAN
      })} />
      </Entity>
      {/* <Entity
       {...args}
       name="PolylineVolumeGraphics"
       description="PolylineVolumeGraphics!!"
       position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
       <PolylineVolumeGraphics
        positions={Cartesian3.fromDegreesArrayHeights([
          -90.0, 32.0, 0.0, -90.0, 36.0, 100000.0, -94.0, 36.0, 0.0,
        ])}
        shape={[
          new Cartesian2(-50000, -50000),
          new Cartesian2(50000, -50000),
          new Cartesian2(50000, 50000),
          new Cartesian2(-50000, 50000),
        ]}
        cornerType={CornerType.BEVELED}
        material={Color.GREEN.withAlpha(0.5)}
        outline
        outlineColor={Color.BLACK}
       />
       </Entity> */}
      {/* <Entity
       {...args}
       name="RectangleGraphics"
       description="RectangleGraphics!!"
       position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
       <RectangleGraphics
        coordinates={Rectangle.fromDegrees(-140.0, 30.0, -100.0, 40.0)}
        material={Color.PEACHPUFF.withAlpha(0.5)}
        rotation={CesiumMath.toRadians(45)}
        extrudedHeight={300000.0}
        height={100000.0}
        outline // height must be set for outline to display
        outlineColor={Color.BLACK}
       />
       </Entity> */}
      {/* <Entity
       {...args}
       name="WallGraphics"
       description="WallGraphics!!"
       position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
       <WallGraphics
        positions={Cartesian3.fromDegreesArray([
          -115.0, 50.0, -112.5, 50.0, -110.0, 50.0, -107.5, 50.0, -105.0, 50.0, -102.5, 50.0,
          -100.0, 50.0, -97.5, 50.0, -95.0, 50.0, -92.5, 50.0, -90.0, 50.0,
        ])}
        maximumHeights={[
          100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000,
        ]}
        minimumHeights={[0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]}
        material={Color.BLUE.withAlpha(0.5)}
        outline
        outlineColor={Color.BLACK}
       />
       </Entity> */}
    </Viewer>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <StrictMode>
      <Viewer full onMouseEnter={action("mouseenter")}>
        <Entity {...args} name="BillboardGraphics" description="BillboardGraphics!!" position={Cartesian3.fromDegrees(-40.0707383, 40.7117244, 100)} selected>
          <BillboardGraphics image="example.png" scale={0.05} />
        </Entity>
        <Entity {...args} name="BoxGraphics" description="BoxGraphics!!" position={Cartesian3.fromDegrees(0.0707383, 40.7117244, 100)}>
          <BoxGraphics material={Color.RED} dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)} />
        </Entity>
        <Entity {...args} name="CorridorGraphics" description="CorridorGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <CorridorGraphics material={Color.YELLOW} positions={Cartesian3.fromDegreesArray([-100.0, 40.0, -105.0, 40.0, -105.0, 35.0]) as any} // WORKAROUND
        height={200000.0} extrudedHeight={100000.0} width={200000.0} cornerType={CornerType.BEVELED} outline // height or extrudedHeight must be set for outlines to display
        outlineColor={Color.WHITE} />
        </Entity>
        <Entity {...args} name="CylinderGraphics" description="CylinderGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 20.7117244, 100)}>
          <CylinderGraphics length={400000.0} topRadius={200000.0} bottomRadius={200000.0} material={Color.GREEN.withAlpha(0.5)} outline outlineColor={Color.DARKGREEN} />
        </Entity>
        <Entity {...args} name="EllipseGraphics" description="EllipseGraphics!!" position={Cartesian3.fromDegrees(-34.0707383, 60.7117244, 100)}>
          <EllipseGraphics material={Color.RED} semiMinorAxis={150000.0} semiMajorAxis={300000.0} extrudedHeight={200000.0} rotation={0.78539} outline />
        </Entity>
        <Entity {...args} name="EllipsoidGraphics" description="EllipsoidGraphics!!" position={Cartesian3.fromDegrees(-14.0707383, 0.7117244, 100)}>
          <EllipsoidGraphics material={Color.BLUEVIOLET} radii={new Cartesian3(300000.0, 300000.0, 300000.0)} fill outline outlineColor={new Color(0, 0, 0, 1)} />
        </Entity>
        <Entity {...args} name="LabelGraphics" description="LabelGraphics!!" position={Cartesian3.fromDegrees(-34.0707383, 5.7117244, 100)}>
          <LabelGraphics text="LabelGraphics" font="24px Helvetica" fillColor={Color.SKYBLUE} outlineColor={Color.BLACK} outlineWidth={2} style={LabelStyle.FILL_AND_OUTLINE} />
        </Entity>
        <Entity {...args} name="ModelGraphics" description="ModelGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <ModelGraphics uri="Cesium_Air.glb" minimumPixelSize={128} maximumScale={20000} />
        </Entity>
        <Entity {...args} name="PathGraphics" description="PathGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PathGraphics material={Color.RED} width={8} leadTime={10} trailTime={1000} resolution={5} />
        </Entity>
        <Entity {...args} name="PlaneGraphics" description="PlaneGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 50.7117244, 100)}>
          <PlaneGraphics plane={new Plane(Cartesian3.UNIT_Z, 0.0)} dimensions={new Cartesian2(400000.0, 300000.0)} fill={false} outline outlineColor={Color.YELLOW} />
        </Entity>
        <Entity {...args} name="PointGraphics" description="PointGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 60.7117244, 100)}>
          <PointGraphics color={Color.BISQUE} pixelSize={10} />
        </Entity>
        <Entity {...args} name="PolygonGraphics" description="PolygonGraphics!!">
          <PolygonGraphics hierarchy={Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]) as any} // WORKAROUND
        material={Color.GREEN} />
        </Entity>
        <Entity {...args} name="PolylineGraphics" description="PolylineGraphics!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PolylineGraphics positions={Cartesian3.fromDegreesArrayHeights([-75, 45, 500000, -125, 45, 500000])} width={4} material={new PolylineDashMaterialProperty({
          color: Color.CYAN
        })} />
        </Entity>
        {/* <Entity
         {...args}
         name="PolylineVolumeGraphics"
         description="PolylineVolumeGraphics!!"
         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
         <PolylineVolumeGraphics
         positions={Cartesian3.fromDegreesArrayHeights([
          -90.0, 32.0, 0.0, -90.0, 36.0, 100000.0, -94.0, 36.0, 0.0,
         ])}
         shape={[
          new Cartesian2(-50000, -50000),
          new Cartesian2(50000, -50000),
          new Cartesian2(50000, 50000),
          new Cartesian2(-50000, 50000),
         ]}
         cornerType={CornerType.BEVELED}
         material={Color.GREEN.withAlpha(0.5)}
         outline
         outlineColor={Color.BLACK}
         />
         </Entity> */}
        {/* <Entity
         {...args}
         name="RectangleGraphics"
         description="RectangleGraphics!!"
         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
         <RectangleGraphics
         coordinates={Rectangle.fromDegrees(-140.0, 30.0, -100.0, 40.0)}
         material={Color.PEACHPUFF.withAlpha(0.5)}
         rotation={CesiumMath.toRadians(45)}
         extrudedHeight={300000.0}
         height={100000.0}
         outline // height must be set for outline to display
         outlineColor={Color.BLACK}
         />
         </Entity> */}
        {/* <Entity
         {...args}
         name="WallGraphics"
         description="WallGraphics!!"
         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
         <WallGraphics
         positions={Cartesian3.fromDegreesArray([
          -115.0, 50.0, -112.5, 50.0, -110.0, 50.0, -107.5, 50.0, -105.0, 50.0, -102.5, 50.0,
          -100.0, 50.0, -97.5, 50.0, -95.0, 50.0, -92.5, 50.0, -90.0, 50.0,
         ])}
         maximumHeights={[
          100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000,
         ]}
         minimumHeights={[0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]}
         material={Color.BLUE.withAlpha(0.5)}
         outline
         outlineColor={Color.BLACK}
         />
         </Entity> */}
      </Viewer>
    </StrictMode>
}`,...Q.parameters?.docs?.source}}},$=[`Basic`,`Description`,`SelectedAndTracked`,`AnimatedCanvas`,`Events`,`Graphics`,`Strict`]}))();export{Y as AnimatedCanvas,K as Basic,q as Description,X as Events,Z as Graphics,J as SelectedAndTracked,Q as Strict,$ as __namedExportsOrder,Be as default};