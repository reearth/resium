import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{a as Q}from"./index-CjDrOnrV.js";import{r as l}from"./index-yIsmwZOr.js";import{e as pe}from"./storybook-lrzrXzR7.js";import{E as r}from"./Entity-6JEZeUU-.js";import{V as h}from"./Viewer-3OWF8io8.js";import{r as me}from"./index-CZ_84MJS.js";import{c as a,u as he}from"./component-P3MpLVno.js";import"./v4-Dz_GI0CC.js";const de=["image","show","scale","horizontalOrigin","verticalOrigin","eyeOffset","pixelOffset","rotation","alignedAxis","width","height","color","scaleByDistance","translucencyByDistance","pixelOffsetScaleByDistance","imageSubRegion","sizeInMeters","heightReference","distanceDisplayCondition","disableDepthTestDistance","splitDirection"],ue={onDefinitionChange:"definitionChanged"},Ce=a({name:"BillboardGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.BillboardGraphics(i);return e.entity.billboard=t,t},destroy(e,i){i.entity&&(i.entity.billboard=void 0)},cesiumProps:de,cesiumEventProps:ue}),Z=Ce,ye=["heightReference","dimensions","show","fill","material","outline","outlineColor","outlineWidth","shadows","distanceDisplayCondition"],ge={onDefinitionChange:"definitionChanged"},fe=a({name:"BoxGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.BoxGraphics(i);return e.entity.box=t,t},destroy(e,i){i.entity&&(i.entity.box=void 0)},cesiumProps:ye,cesiumEventProps:ge}),q=fe,Ee=["positions","width","cornerType","height","heightReference","extrudedHeight","extrudedHeightReference","show","fill","material","outline","outlineColor","outlineWidth","granularity","shadows","distanceDisplayCondition","zIndex","classificationType"],Ge={onDefinitionChange:"definitionChanged"},De=a({name:"CorridorGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.CorridorGraphics(i);return i.classificationType&&(t.classificationType=i.classificationType),e.entity.corridor=t,t},destroy(e,i){i.entity&&(i.entity.corridor=void 0)},cesiumProps:Ee,cesiumEventProps:Ge}),J=De,xe=["heightReference","length","topRadius","bottomRadius","show","fill","material","outline","outlineColor","outlineWidth","numberOfVerticalLines","slices","distanceDisplayCondition","shadows"],Pe={onDefinitionChange:"definitionChanged"},we=a({name:"CylinderGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.CylinderGraphics(i);return e.entity.cylinder=t,t},destroy(e,i){i.entity&&(i.entity.cylinder=void 0)},cesiumProps:xe,cesiumEventProps:Pe}),X=we,Le=["semiMajorAxis","semiMinorAxis","height","heightReference","extrudedHeight","show","fill","material","outline","outlineColor","outlineWidth","numberOfVerticalLines","rotation","stRotation","granularity","shadows","distanceDisplayCondition","zIndex","classificationType","extrudedHeightReference"],Re={onDefinitionChange:"definitionChanged"},be=a({name:"EllipseGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.EllipseGraphics(i);return e.entity.ellipse=t,t},destroy(e,i){i.entity&&(i.entity.ellipse=void 0)},cesiumProps:Le,cesiumEventProps:Re}),ee=be,je=["heightReference","radii","show","fill","innerRadii","material","maximumClock","maximumCone","minimumClock","minimumCone","outline","outlineColor","outlineWidth","subdivisions","stackPartitions","slicePartitions","shadows","distanceDisplayCondition"],Be={onDefinitionChange:"definitionChanged"},Ae=a({name:"EllipsoidGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.EllipsoidGraphics(i);return e.entity.ellipsoid=t,t},destroy(e,i){i.entity&&(i.entity.ellipsoid=void 0)},cesiumProps:je,cesiumEventProps:Be}),ie=Ae,ve=({children:e,container:i,resizeInfoBox:t=!0})=>{const{viewer:s,entity:d}=he(),[m,C]=l.useState(!1),c=l.useMemo(()=>{var o;return i??((o=s==null?void 0:s.infoBox.frame.contentDocument)==null?void 0:o.createElement("div"))},[i,s==null?void 0:s.infoBox.frame.contentDocument]);return l.useEffect(()=>{if(!s||!d)return;const o=p=>{C(!!p&&p.id===d.id)};return s.selectedEntityChanged.addEventListener(o),()=>{s.selectedEntityChanged.removeEventListener(o)}},[d,s]),l.useEffect(()=>{var P,w;if(i||!c||!s)return;const o=(P=s.infoBox)==null?void 0:P.frame,p=(w=o==null?void 0:o.contentDocument)==null?void 0:w.querySelector(".cesium-infoBox-description");if(!o||!p)return;let u;if(m){if(t){const ce=p.getBoundingClientRect().height;o.style.height=ce+"px",u=window.setInterval(()=>{const L=s.infoBox.container.querySelector(".cesium-infoBox.cesium-infoBox-visible");L&&(clearInterval(u),u=void 0,p.appendChild(c),L.classList.remove("cesium-infoBox-bodyless"),o.style.height=p.getBoundingClientRect().height+"px")},10)}}else c.parentElement===p&&p.removeChild(c);return u?()=>clearTimeout(u):void 0},[c,i,t,m,s]),c?n.jsx(n.Fragment,{children:me.createPortal(n.jsx(n.Fragment,{children:!i||m?e:null}),c)}):null},R=ve,Se=["text","font","style","fillColor","outlineColor","outlineWidth","show","showBackground","backgroundColor","backgroundPadding","scale","horizontalOrigin","verticalOrigin","eyeOffset","pixelOffset","translucencyByDistance","pixelOffsetScaleByDistance","scaleByDistance","heightReference","distanceDisplayCondition","disableDepthTestDistance"],Te={onDefinitionChange:"definitionChanged"},Me=a({name:"LabelGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.LabelGraphics(i);return e.entity.label=t,t},destroy(e,i){i.entity&&(i.entity.label=void 0)},cesiumProps:Se,cesiumEventProps:Te}),ne=Me,He=["uri","show","scale","minimumPixelSize","maximumScale","incrementallyLoadTextures","runAnimations","clampAnimations","nodeTransformations","shadows","heightReference","distanceDisplayCondition","silhouetteColor","silhouetteSize","color","colorBlendMode","colorBlendAmount","clippingPlanes","imageBasedLightingFactor","lightColor","articulations","customShader","enableVerticalExaggeration","environmentMapOptions"],Oe={onDefinitionChange:"definitionChanged"},Ne=a({name:"ModelGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.ModelGraphics(i);return e.entity.model=t,t},destroy(e,i){i.entity&&(i.entity.model=void 0)},cesiumProps:He,cesiumEventProps:Oe}),te=Ne,$e=["leadTime","trailTime","show","width","material","resolution","distanceDisplayCondition"],Ie={onDefinitionChange:"definitionChanged"},We=a({name:"PathGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.PathGraphics(i);return e.entity.path=t,t},destroy(e,i){i.entity&&(i.entity.path=void 0)},cesiumProps:$e,cesiumEventProps:Ie}),re=We,Ve=["plane","dimensions","show","fill","material","outline","outlineColor","outlineWidth","shadows","distanceDisplayCondition"],_e={onDefinitionChange:"definitionChanged"},ze=a({name:"PlaneGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.PlaneGraphics(i);return e.entity.plane=t,t},destroy(e,i){i.entity&&(i.entity.plane=void 0)},cesiumProps:Ve,cesiumEventProps:_e}),se=ze,Ue=["color","pixelSize","outlineColor","outlineWidth","show","scaleByDistance","translucencyByDistance","heightReference","distanceDisplayCondition","disableDepthTestDistance","splitDirection"],Ke={onDefinitionChange:"definitionChanged"},Ye=a({name:"PointGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.PointGraphics(i);return e.entity.point=t,t},destroy(e,i){i.entity&&(i.entity.point=void 0)},cesiumProps:Ue,cesiumEventProps:Ke}),oe=Ye,ke=["arcType","hierarchy","height","heightReference","extrudedHeight","extrudedHeightReference","show","fill","material","outline","outlineColor","outlineWidth","stRotation","granularity","perPositionHeight","closeTop","closeBottom","shadows","distanceDisplayCondition","zIndex","classificationType","textureCoordinates"],Fe={onDefinitionChange:"definitionChanged"},Qe=a({name:"PolygonGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.PolygonGraphics(i);return e.entity.polygon=t,t},destroy(e,i){i.entity&&(i.entity.polygon=void 0)},cesiumProps:ke,cesiumEventProps:Fe}),ae=Qe,Ze=["arcType","classificationType","positions","clampToGround","width","show","material","depthFailMaterial","granularity","shadows","distanceDisplayCondition","zIndex"],qe={onDefinitionChange:"definitionChanged"},Je=a({name:"PolylineGraphics",create(e,i){if(!e.entity)return;const t=new Cesium.PolylineGraphics(i);return e.entity.polyline=t,t},destroy(e,i){i.entity&&(i.entity.polyline=void 0)},cesiumProps:Ze,cesiumEventProps:qe}),le=Je,pi={title:"Entity",component:r},b=()=>{const e=document.createElement("canvas");return e.width=100,e.height=100,e},Xe=(e,i)=>{const t=e.getContext("2d");t&&(t.clearRect(0,0,e.width,e.height),t.fillStyle="rgba(100,0,0,0.8)",t.beginPath(),t.arc(e.width/2,e.height/2,i*e.width/2,0,Math.PI*2,!1),t.fill())},ei=e=>{const i=l.useMemo(b,[]),t=l.useMemo(b,[]),[s,d]=l.useState(),m=l.useRef(0);return l.useEffect(()=>{const C=window.setInterval(()=>{m.current=Math.min(m.current+.01,1),d(c=>{const o=c===i?t:i;return o&&Xe(o,m.current),o}),m.current>=1&&clearInterval(C)},10);return()=>window.clearInterval(C)},[i,t]),n.jsx(r,{...e,billboard:{image:s}})},y={render:e=>n.jsx(h,{full:!0,children:n.jsx(r,{...e,name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})})},g={render:e=>{const[i,t]=l.useState(0);return n.jsxs(h,{full:!0,children:[n.jsx(r,{...e,name:"test1",position:Cesium.Cartesian3.fromDegrees(-74,40,100),point:{pixelSize:15,color:Cesium.Color.YELLOW},description:"Normal Description"}),n.jsx(r,{...e,name:"test3",position:Cesium.Cartesian3.fromDegrees(-74,30,100),point:{pixelSize:15,color:Cesium.Color.RED},children:n.jsx(R,{children:n.jsx("h1",{children:"Hello!"})})}),n.jsx(r,{...e,name:"test4",position:Cesium.Cartesian3.fromDegrees(-74,20,100),point:{pixelSize:15,color:Cesium.Color.ORANGE},children:n.jsxs(R,{children:[n.jsx("h1",{children:"Hello!"}),n.jsx("p",{children:"This is description. It can be described with React!"}),n.jsxs("button",{onClick:()=>t(s=>s+1),children:["counter: ",i]})]})})]})}},f={render:e=>n.jsx(h,{full:!0,children:n.jsx(r,{...e,name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10},selected:!0,tracked:!0})})},E={render:()=>n.jsx(h,{full:!0,children:n.jsx(ei,{name:"test",description:"test",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100)})})},G={render:e=>n.jsx(h,{full:!0,children:n.jsx(r,{...e,name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10},...pe})})},D={render:e=>n.jsxs(h,{full:!0,onMouseEnter:Q("mouseenter"),children:[n.jsx(r,{...e,name:"BillboardGraphics",description:"BillboardGraphics!!",position:Cesium.Cartesian3.fromDegrees(-40.0707383,40.7117244,100),selected:!0,children:n.jsx(Z,{image:"example.png",scale:.05})}),n.jsx(r,{...e,name:"BoxGraphics",description:"BoxGraphics!!",position:Cesium.Cartesian3.fromDegrees(.0707383,40.7117244,100),children:n.jsx(q,{material:Cesium.Color.RED,dimensions:new Cesium.Cartesian3(4e5,3e5,5e5)})}),n.jsx(r,{...e,name:"CorridorGraphics",description:"CorridorGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(J,{material:Cesium.Color.YELLOW,positions:Cesium.Cartesian3.fromDegreesArray([-100,40,-105,40,-105,35]),height:2e5,extrudedHeight:1e5,width:2e5,cornerType:Cesium.CornerType.BEVELED,outline:!0,outlineColor:Cesium.Color.WHITE})}),n.jsx(r,{...e,name:"CylinderGraphics",description:"CylinderGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,20.7117244,100),children:n.jsx(X,{length:4e5,topRadius:2e5,bottomRadius:2e5,material:Cesium.Color.GREEN.withAlpha(.5),outline:!0,outlineColor:Cesium.Color.DARKGREEN})}),n.jsx(r,{...e,name:"EllipseGraphics",description:"EllipseGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,60.7117244,100),children:n.jsx(ee,{material:Cesium.Color.RED,semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:.78539,outline:!0})}),n.jsx(r,{...e,name:"EllipsoidGraphics",description:"EllipsoidGraphics!!",position:Cesium.Cartesian3.fromDegrees(-14.0707383,.7117244,100),children:n.jsx(ie,{material:Cesium.Color.BLUEVIOLET,radii:new Cesium.Cartesian3(3e5,3e5,3e5),fill:!0,outline:!0,outlineColor:new Cesium.Color(0,0,0,1)})}),n.jsx(r,{...e,name:"LabelGraphics",description:"LabelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,5.7117244,100),children:n.jsx(ne,{text:"LabelGraphics",font:"24px Helvetica",fillColor:Cesium.Color.SKYBLUE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE})}),n.jsx(r,{...e,name:"ModelGraphics",description:"ModelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(te,{uri:"Cesium_Air.glb",minimumPixelSize:128,maximumScale:2e4})}),n.jsx(r,{...e,name:"PathGraphics",description:"PathGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(re,{material:Cesium.Color.RED,width:8,leadTime:10,trailTime:1e3,resolution:5})}),n.jsx(r,{...e,name:"PlaneGraphics",description:"PlaneGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,50.7117244,100),children:n.jsx(se,{plane:new Cesium.Plane(Cesium.Cartesian3.UNIT_Z,0),dimensions:new Cesium.Cartesian2(4e5,3e5),fill:!1,outline:!0,outlineColor:Cesium.Color.YELLOW})}),n.jsx(r,{...e,name:"PointGraphics",description:"PointGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,60.7117244,100),children:n.jsx(oe,{color:Cesium.Color.BISQUE,pixelSize:10})}),n.jsx(r,{...e,name:"PolygonGraphics",description:"PolygonGraphics!!",children:n.jsx(ae,{hierarchy:Cesium.Cartesian3.fromDegreesArray([-108,42,-100,42,-104,40]),material:Cesium.Color.GREEN})}),n.jsx(r,{...e,name:"PolylineGraphics",description:"PolylineGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(le,{positions:Cesium.Cartesian3.fromDegreesArrayHeights([-75,45,5e5,-125,45,5e5]),width:4,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.CYAN})})})]})},x={render:e=>n.jsx(l.StrictMode,{children:n.jsxs(h,{full:!0,onMouseEnter:Q("mouseenter"),children:[n.jsx(r,{...e,name:"BillboardGraphics",description:"BillboardGraphics!!",position:Cesium.Cartesian3.fromDegrees(-40.0707383,40.7117244,100),selected:!0,children:n.jsx(Z,{image:"example.png",scale:.05})}),n.jsx(r,{...e,name:"BoxGraphics",description:"BoxGraphics!!",position:Cesium.Cartesian3.fromDegrees(.0707383,40.7117244,100),children:n.jsx(q,{material:Cesium.Color.RED,dimensions:new Cesium.Cartesian3(4e5,3e5,5e5)})}),n.jsx(r,{...e,name:"CorridorGraphics",description:"CorridorGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(J,{material:Cesium.Color.YELLOW,positions:Cesium.Cartesian3.fromDegreesArray([-100,40,-105,40,-105,35]),height:2e5,extrudedHeight:1e5,width:2e5,cornerType:Cesium.CornerType.BEVELED,outline:!0,outlineColor:Cesium.Color.WHITE})}),n.jsx(r,{...e,name:"CylinderGraphics",description:"CylinderGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,20.7117244,100),children:n.jsx(X,{length:4e5,topRadius:2e5,bottomRadius:2e5,material:Cesium.Color.GREEN.withAlpha(.5),outline:!0,outlineColor:Cesium.Color.DARKGREEN})}),n.jsx(r,{...e,name:"EllipseGraphics",description:"EllipseGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,60.7117244,100),children:n.jsx(ee,{material:Cesium.Color.RED,semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:.78539,outline:!0})}),n.jsx(r,{...e,name:"EllipsoidGraphics",description:"EllipsoidGraphics!!",position:Cesium.Cartesian3.fromDegrees(-14.0707383,.7117244,100),children:n.jsx(ie,{material:Cesium.Color.BLUEVIOLET,radii:new Cesium.Cartesian3(3e5,3e5,3e5),fill:!0,outline:!0,outlineColor:new Cesium.Color(0,0,0,1)})}),n.jsx(r,{...e,name:"LabelGraphics",description:"LabelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-34.0707383,5.7117244,100),children:n.jsx(ne,{text:"LabelGraphics",font:"24px Helvetica",fillColor:Cesium.Color.SKYBLUE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE})}),n.jsx(r,{...e,name:"ModelGraphics",description:"ModelGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(te,{uri:"Cesium_Air.glb",minimumPixelSize:128,maximumScale:2e4})}),n.jsx(r,{...e,name:"PathGraphics",description:"PathGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(re,{material:Cesium.Color.RED,width:8,leadTime:10,trailTime:1e3,resolution:5})}),n.jsx(r,{...e,name:"PlaneGraphics",description:"PlaneGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,50.7117244,100),children:n.jsx(se,{plane:new Cesium.Plane(Cesium.Cartesian3.UNIT_Z,0),dimensions:new Cesium.Cartesian2(4e5,3e5),fill:!1,outline:!0,outlineColor:Cesium.Color.YELLOW})}),n.jsx(r,{...e,name:"PointGraphics",description:"PointGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,60.7117244,100),children:n.jsx(oe,{color:Cesium.Color.BISQUE,pixelSize:10})}),n.jsx(r,{...e,name:"PolygonGraphics",description:"PolygonGraphics!!",children:n.jsx(ae,{hierarchy:Cesium.Cartesian3.fromDegreesArray([-108,42,-100,42,-104,40]),material:Cesium.Color.GREEN})}),n.jsx(r,{...e,name:"PolylineGraphics",description:"PolylineGraphics!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),children:n.jsx(le,{positions:Cesium.Cartesian3.fromDegreesArrayHeights([-75,45,5e5,-125,45,5e5]),width:4,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.CYAN})})})]})})};var j,B,A;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...(A=(B=y.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var v,S,T;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(S=g.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var M,H,O;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} selected tracked />
    </Viewer>
}`,...(O=(H=f.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var N,$,I;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Viewer full>
      <CanvasEntity name="test" description="test" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} />
    </Viewer>
}`,...(I=($=E.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var W,V,_;G.parameters={...G.parameters,docs:{...(W=G.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <Entity {...args} name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} {...events} />
    </Viewer>
}`,...(_=(V=G.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var z,U,K;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(U=D.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Y,k,F;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(F=(k=x.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const mi=["Basic","Description","SelectedAndTracked","AnimatedCanvas","Events","Graphics","Strict"];export{E as AnimatedCanvas,y as Basic,g as Description,G as Events,D as Graphics,f as SelectedAndTracked,x as Strict,mi as __namedExportsOrder,pi as default};
