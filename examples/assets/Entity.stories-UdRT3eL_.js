import{r as l,j as n}from"./iframe-CaYGMnUa.js";import{e as V}from"./storybook-BoWeRQq6.js";import{E as t}from"./Entity-U1g_xSCa.js";import{V as h}from"./Viewer-Dc3jHWle.js";import{r as z}from"./index-BjVplO9Q.js";import{c as o,u as U}from"./component-BQeqpCl1.js";import"./preload-helper-PPVm8Dsz.js";const $=["image","show","scale","horizontalOrigin","verticalOrigin","eyeOffset","pixelOffset","rotation","alignedAxis","width","height","color","scaleByDistance","translucencyByDistance","pixelOffsetScaleByDistance","imageSubRegion","sizeInMeters","heightReference","distanceDisplayCondition","disableDepthTestDistance","splitDirection"],K={onDefinitionChange:"definitionChanged"},R=o({name:"BillboardGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.BillboardGraphics(i);return e.entity.billboard=r,r},destroy(e,i){i.entity&&(i.entity.billboard=void 0)},cesiumProps:$,cesiumEventProps:K}),Y=["heightReference","dimensions","show","fill","material","outline","outlineColor","outlineWidth","shadows","distanceDisplayCondition"],k={onDefinitionChange:"definitionChanged"},j=o({name:"BoxGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.BoxGraphics(i);return e.entity.box=r,r},destroy(e,i){i.entity&&(i.entity.box=void 0)},cesiumProps:Y,cesiumEventProps:k}),F=["positions","width","cornerType","height","heightReference","extrudedHeight","extrudedHeightReference","show","fill","material","outline","outlineColor","outlineWidth","granularity","shadows","distanceDisplayCondition","zIndex","classificationType"],Q={onDefinitionChange:"definitionChanged"},b=o({name:"CorridorGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.CorridorGraphics(i);return i.classificationType&&(r.classificationType=i.classificationType),e.entity.corridor=r,r},destroy(e,i){i.entity&&(i.entity.corridor=void 0)},cesiumProps:F,cesiumEventProps:Q}),Z=["heightReference","length","topRadius","bottomRadius","show","fill","material","outline","outlineColor","outlineWidth","numberOfVerticalLines","slices","distanceDisplayCondition","shadows"],q={onDefinitionChange:"definitionChanged"},B=o({name:"CylinderGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.CylinderGraphics(i);return e.entity.cylinder=r,r},destroy(e,i){i.entity&&(i.entity.cylinder=void 0)},cesiumProps:Z,cesiumEventProps:q}),J=["semiMajorAxis","semiMinorAxis","height","heightReference","extrudedHeight","show","fill","material","outline","outlineColor","outlineWidth","numberOfVerticalLines","rotation","stRotation","granularity","shadows","distanceDisplayCondition","zIndex","classificationType","extrudedHeightReference"],X={onDefinitionChange:"definitionChanged"},A=o({name:"EllipseGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.EllipseGraphics(i);return e.entity.ellipse=r,r},destroy(e,i){i.entity&&(i.entity.ellipse=void 0)},cesiumProps:J,cesiumEventProps:X}),ee=["heightReference","radii","show","fill","innerRadii","material","maximumClock","maximumCone","minimumClock","minimumCone","outline","outlineColor","outlineWidth","subdivisions","stackPartitions","slicePartitions","shadows","distanceDisplayCondition"],ie={onDefinitionChange:"definitionChanged"},v=o({name:"EllipsoidGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.EllipsoidGraphics(i);return e.entity.ellipsoid=r,r},destroy(e,i){i.entity&&(i.entity.ellipsoid=void 0)},cesiumProps:ee,cesiumEventProps:ie});var ne=z();const w=({children:e,container:i,resizeInfoBox:r=!0})=>{const{viewer:s,entity:d}=U(),[m,C]=l.useState(!1),c=l.useMemo(()=>i??s?.infoBox.frame.contentDocument?.createElement("div"),[i,s?.infoBox.frame.contentDocument]);return l.useEffect(()=>{if(!s||!d)return;const a=p=>{C(!!p&&p.id===d.id)};return s.selectedEntityChanged.addEventListener(a),()=>{s.selectedEntityChanged.removeEventListener(a)}},[d,s]),l.useEffect(()=>{if(i||!c||!s)return;const a=s.infoBox?.frame,p=a?.contentDocument?.querySelector(".cesium-infoBox-description");if(!a||!p)return;let u;if(m){if(r){const W=p.getBoundingClientRect().height;a.style.height=W+"px",u=window.setInterval(()=>{const P=s.infoBox.container.querySelector(".cesium-infoBox.cesium-infoBox-visible");P&&(clearInterval(u),u=void 0,p.appendChild(c),P.classList.remove("cesium-infoBox-bodyless"),a.style.height=p.getBoundingClientRect().height+"px")},10)}}else c.parentElement===p&&p.removeChild(c);return u?()=>clearTimeout(u):void 0},[c,i,r,m,s]),c?n.jsx(n.Fragment,{children:ne.createPortal(n.jsx(n.Fragment,{children:!i||m?e:null}),c)}):null},re=["text","font","style","fillColor","outlineColor","outlineWidth","show","showBackground","backgroundColor","backgroundPadding","scale","horizontalOrigin","verticalOrigin","eyeOffset","pixelOffset","translucencyByDistance","pixelOffsetScaleByDistance","scaleByDistance","heightReference","distanceDisplayCondition","disableDepthTestDistance"],te={onDefinitionChange:"definitionChanged"},S=o({name:"LabelGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.LabelGraphics(i);return e.entity.label=r,r},destroy(e,i){i.entity&&(i.entity.label=void 0)},cesiumProps:re,cesiumEventProps:te}),se=["uri","show","scale","minimumPixelSize","maximumScale","incrementallyLoadTextures","runAnimations","clampAnimations","nodeTransformations","shadows","heightReference","distanceDisplayCondition","silhouetteColor","silhouetteSize","color","colorBlendMode","colorBlendAmount","clippingPlanes","imageBasedLightingFactor","lightColor","articulations","customShader","enableVerticalExaggeration","environmentMapOptions"],oe={onDefinitionChange:"definitionChanged"},T=o({name:"ModelGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.ModelGraphics(i);return e.entity.model=r,r},destroy(e,i){i.entity&&(i.entity.model=void 0)},cesiumProps:se,cesiumEventProps:oe}),ae=["leadTime","trailTime","show","width","material","resolution","distanceDisplayCondition"],le={onDefinitionChange:"definitionChanged"},O=o({name:"PathGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.PathGraphics(i);return e.entity.path=r,r},destroy(e,i){i.entity&&(i.entity.path=void 0)},cesiumProps:ae,cesiumEventProps:le}),ce=["plane","dimensions","show","fill","material","outline","outlineColor","outlineWidth","shadows","distanceDisplayCondition"],pe={onDefinitionChange:"definitionChanged"},M=o({name:"PlaneGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.PlaneGraphics(i);return e.entity.plane=r,r},destroy(e,i){i.entity&&(i.entity.plane=void 0)},cesiumProps:ce,cesiumEventProps:pe}),me=["color","pixelSize","outlineColor","outlineWidth","show","scaleByDistance","translucencyByDistance","heightReference","distanceDisplayCondition","disableDepthTestDistance","splitDirection"],he={onDefinitionChange:"definitionChanged"},H=o({name:"PointGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.PointGraphics(i);return e.entity.point=r,r},destroy(e,i){i.entity&&(i.entity.point=void 0)},cesiumProps:me,cesiumEventProps:he}),de=["arcType","hierarchy","height","heightReference","extrudedHeight","extrudedHeightReference","show","fill","material","outline","outlineColor","outlineWidth","stRotation","granularity","perPositionHeight","closeTop","closeBottom","shadows","distanceDisplayCondition","zIndex","classificationType","textureCoordinates"],ue={onDefinitionChange:"definitionChanged"},N=o({name:"PolygonGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.PolygonGraphics(i);return e.entity.polygon=r,r},destroy(e,i){i.entity&&(i.entity.polygon=void 0)},cesiumProps:de,cesiumEventProps:ue}),Ce=["arcType","classificationType","positions","clampToGround","width","show","material","depthFailMaterial","granularity","shadows","distanceDisplayCondition","zIndex"],ye={onDefinitionChange:"definitionChanged"},I=o({name:"PolylineGraphics",create(e,i){if(!e.entity)return;const r=new Cesium.PolylineGraphics(i);return e.entity.polyline=r,r},destroy(e,i){i.entity&&(i.entity.polyline=void 0)},cesiumProps:Ce,cesiumEventProps:ye}),{action:_}=__STORYBOOK_MODULE_ACTIONS__,Re={title:"Entity",component:t},L=()=>{const e=document.createElement("canvas");return e.width=100,e.height=100,e},ge=(e,i)=>{const r=e.getContext("2d");r&&(r.clearRect(0,0,e.width,e.height),r.fillStyle="rgba(100,0,0,0.8)",r.beginPath(),r.arc(e.width/2,e.height/2,i*e.width/2,0,Math.PI*2,!1),r.fill())},fe=e=>{const i=l.useMemo(L,[]),r=l.useMemo(L,[]),[s,d]=l.useState(),m=l.useRef(0);return l.useEffect(()=>{const C=window.setInterval(()=>{m.current=Math.min(m.current+.01,1),d(c=>{const a=c===i?r:i;return a&&ge(a,m.current),a}),m.current>=1&&clearInterval(C)},10);return()=>window.clearInterval(C)},[i,r]),n.jsx(t,{...e,billboard:{image:s}})},y={render:e=>n.jsx(h,{full:!0,children:n.jsx(t,{...e,name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})})},g={render:e=>{const[i,r]=l.useState(0);return n.jsxs(h,{full:!0,children:[n.jsx(t,{...e,name:"test1",position:Cesium.Cartesian3.fromDegrees(-74,40,100),point:{pixelSize:15,color:Cesium.Color.YELLOW},description:"Normal Description"}),n.jsx(t,{...e,name:"test3",position:Cesium.Cartesian3.fromDegrees(-74,30,100),point:{pixelSize:15,color:Cesium.Color.RED},children:n.jsx(w,{children:n.jsx("h1",{children:"Hello!"})})}),n.jsx(t,{...e,name:"test4",position:Cesium.Cartesian3.fromDegrees(-74,20,100),point:{pixelSize:15,color:Cesium.Color.ORANGE},children:n.jsxs(w,{children:[n.jsx("h1",{children:"Hello!"}),n.jsx("p",{children:"This is description. It can be described with React!"}),n.jsxs("button",{onClick:()=>r(s=>s+1),children:["counter: ",i]})]})})]})}},f={render:e=>n.jsx(h,{full:!0,children:n.jsx(t,{...e,name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10},selected:!0,tracked:!0})})},E={render:()=>n.jsx(h,{full:!0,children:n.jsx(fe,{name:"test",description:"test",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100)})})},G={render:e=>n.jsx(h,{full:!0,children:n.jsx(t,{...e,name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10},...V})})},D={render:e=>n.jsxs(h,{full:!0,onMouseEnter:_("mouseenter"),children:[n.jsx(t,{...e,name:"BillboardGraphics",description:"BillboardGraphics!!",position:Cesium.Cartesian3.fromDegrees(-40.0707383,40.7117244,100),selected:!0,children:n.jsx(R,{image:"example.png",scale:.05})}),n.jsx(t,{...e,name:"BoxGraphics",description:"BoxGraphics!!",position:Cesium.Cartesian3.fromDegrees(.0707383,40.7117244,100),children:n.jsx(j,{material:Cesium.Color.RED,dimensions:new Cesium.Cartesian3(4e5,3e5,5e5)})}),n.jsx(t,{...e,name:"CorridorGraphics",description:"CorridorGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(b,{material:Cesium.Color.YELLOW,positions:Cesium.Cartesian3.fromDegreesArray([-100,40,-105,40,-105,35]),height:2e5,extrudedHeight:1e5,width:2e5,cornerType:Cesium.CornerType.BEVELED,outline:!0,outlineColor:Cesium.Color.WHITE})}),n.jsx(t,{...e,name:"CylinderGraphics",description:"CylinderGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,20.7117244,100),children:n.jsx(B,{length:4e5,topRadius:2e5,bottomRadius:2e5,material:Cesium.Color.GREEN.withAlpha(.5),outline:!0,outlineColor:Cesium.Color.DARKGREEN})}),n.jsx(t,{...e,name:"EllipseGraphics",description:"EllipseGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,60.7117244,100),children:n.jsx(A,{material:Cesium.Color.RED,semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:.78539,outline:!0})}),n.jsx(t,{...e,name:"EllipsoidGraphics",description:"EllipsoidGraphics!!",position:Cesium.Cartesian3.fromDegrees(-14.0707383,.7117244,100),children:n.jsx(v,{material:Cesium.Color.BLUEVIOLET,radii:new Cesium.Cartesian3(3e5,3e5,3e5),fill:!0,outline:!0,outlineColor:new Cesium.Color(0,0,0,1)})}),n.jsx(t,{...e,name:"LabelGraphics",description:"LabelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,5.7117244,100),children:n.jsx(S,{text:"LabelGraphics",font:"24px Helvetica",fillColor:Cesium.Color.SKYBLUE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE})}),n.jsx(t,{...e,name:"ModelGraphics",description:"ModelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(T,{uri:"Cesium_Air.glb",minimumPixelSize:128,maximumScale:2e4})}),n.jsx(t,{...e,name:"PathGraphics",description:"PathGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(O,{material:Cesium.Color.RED,width:8,leadTime:10,trailTime:1e3,resolution:5})}),n.jsx(t,{...e,name:"PlaneGraphics",description:"PlaneGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,50.7117244,100),children:n.jsx(M,{plane:new Cesium.Plane(Cesium.Cartesian3.UNIT_Z,0),dimensions:new Cesium.Cartesian2(4e5,3e5),fill:!1,outline:!0,outlineColor:Cesium.Color.YELLOW})}),n.jsx(t,{...e,name:"PointGraphics",description:"PointGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,60.7117244,100),children:n.jsx(H,{color:Cesium.Color.BISQUE,pixelSize:10})}),n.jsx(t,{...e,name:"PolygonGraphics",description:"PolygonGraphics!!",children:n.jsx(N,{hierarchy:Cesium.Cartesian3.fromDegreesArray([-108,42,-100,42,-104,40]),material:Cesium.Color.GREEN})}),n.jsx(t,{...e,name:"PolylineGraphics",description:"PolylineGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(I,{positions:Cesium.Cartesian3.fromDegreesArrayHeights([-75,45,5e5,-125,45,5e5]),width:4,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.CYAN})})})]})},x={render:e=>n.jsx(l.StrictMode,{children:n.jsxs(h,{full:!0,onMouseEnter:_("mouseenter"),children:[n.jsx(t,{...e,name:"BillboardGraphics",description:"BillboardGraphics!!",position:Cesium.Cartesian3.fromDegrees(-40.0707383,40.7117244,100),selected:!0,children:n.jsx(R,{image:"example.png",scale:.05})}),n.jsx(t,{...e,name:"BoxGraphics",description:"BoxGraphics!!",position:Cesium.Cartesian3.fromDegrees(.0707383,40.7117244,100),children:n.jsx(j,{material:Cesium.Color.RED,dimensions:new Cesium.Cartesian3(4e5,3e5,5e5)})}),n.jsx(t,{...e,name:"CorridorGraphics",description:"CorridorGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(b,{material:Cesium.Color.YELLOW,positions:Cesium.Cartesian3.fromDegreesArray([-100,40,-105,40,-105,35]),height:2e5,extrudedHeight:1e5,width:2e5,cornerType:Cesium.CornerType.BEVELED,outline:!0,outlineColor:Cesium.Color.WHITE})}),n.jsx(t,{...e,name:"CylinderGraphics",description:"CylinderGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,20.7117244,100),children:n.jsx(B,{length:4e5,topRadius:2e5,bottomRadius:2e5,material:Cesium.Color.GREEN.withAlpha(.5),outline:!0,outlineColor:Cesium.Color.DARKGREEN})}),n.jsx(t,{...e,name:"EllipseGraphics",description:"EllipseGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,60.7117244,100),children:n.jsx(A,{material:Cesium.Color.RED,semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:.78539,outline:!0})}),n.jsx(t,{...e,name:"EllipsoidGraphics",description:"EllipsoidGraphics!!",position:Cesium.Cartesian3.fromDegrees(-14.0707383,.7117244,100),children:n.jsx(v,{material:Cesium.Color.BLUEVIOLET,radii:new Cesium.Cartesian3(3e5,3e5,3e5),fill:!0,outline:!0,outlineColor:new Cesium.Color(0,0,0,1)})}),n.jsx(t,{...e,name:"LabelGraphics",description:"LabelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,5.7117244,100),children:n.jsx(S,{text:"LabelGraphics",font:"24px Helvetica",fillColor:Cesium.Color.SKYBLUE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE})}),n.jsx(t,{...e,name:"ModelGraphics",description:"ModelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(T,{uri:"Cesium_Air.glb",minimumPixelSize:128,maximumScale:2e4})}),n.jsx(t,{...e,name:"PathGraphics",description:"PathGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(O,{material:Cesium.Color.RED,width:8,leadTime:10,trailTime:1e3,resolution:5})}),n.jsx(t,{...e,name:"PlaneGraphics",description:"PlaneGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,50.7117244,100),children:n.jsx(M,{plane:new Cesium.Plane(Cesium.Cartesian3.UNIT_Z,0),dimensions:new Cesium.Cartesian2(4e5,3e5),fill:!1,outline:!0,outlineColor:Cesium.Color.YELLOW})}),n.jsx(t,{...e,name:"PointGraphics",description:"PointGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,60.7117244,100),children:n.jsx(H,{color:Cesium.Color.BISQUE,pixelSize:10})}),n.jsx(t,{...e,name:"PolygonGraphics",description:"PolygonGraphics!!",children:n.jsx(N,{hierarchy:Cesium.Cartesian3.fromDegreesArray([-108,42,-100,42,-104,40]),material:Cesium.Color.GREEN})}),n.jsx(t,{...e,name:"PolylineGraphics",description:"PolylineGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(I,{positions:Cesium.Cartesian3.fromDegreesArrayHeights([-75,45,5e5,-125,45,5e5]),width:4,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.CYAN})})})]})})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} selected tracked />
    </Viewer>
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CanvasEntity name="test" description="test" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} />
    </Viewer>
}`,...E.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} {...events} />
    </Viewer>
}`,...G.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const je=["Basic","Description","SelectedAndTracked","AnimatedCanvas","Events","Graphics","Strict"];export{E as AnimatedCanvas,y as Basic,g as Description,G as Events,D as Graphics,f as SelectedAndTracked,x as Strict,je as __namedExportsOrder,Re as default};
