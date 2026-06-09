import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-DBcQOIHP.js";import{t as i}from"./Viewer-CdXWYmOr.js";import{t as a}from"./Viewer-TUsGuJt-.js";import{t as o}from"./Entity-Bl1FkKPl.js";import{t as s}from"./Entity-CyfANWhT.js";import{n as c,t as l}from"./PointGraphics-D_3kJSph.js";import{i as u,n as d,r as f,t as p}from"./ScreenSpaceEvent-BWnwIAYk.js";var m=e((()=>{u()})),h,g,_,v,y;e((()=>{h=t(n(),1),s(),l(),m(),a(),d(),g=r(),_={title:`ScreenSpaceEvent`,component:p},v={render:()=>{let e=(0,h.useRef)(null),t=(0,h.useRef)(0),[n,r]=(0,h.useState)([]),[a,s]=(0,h.useState)([]),l=t=>{let n=e.current?.cesiumElement;if(!n)return;let r=n.camera.getPickRay(t);if(r)return n.scene.globe.pick(r,n.scene)??void 0},u=(e,n)=>i=>{if(!(`position`in i))return;s(t=>[...t.slice(-5),e]);let a=l(i.position);if(!a)return;let o=t.current++;r(t=>[...t.slice(-19),{id:o,position:a,color:n,label:e}])};return(0,g.jsxs)(i,{full:!0,ref:e,children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(p,{action:u(`LEFT_CLICK`,Cesium.Color.RED),type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),(0,g.jsx)(p,{action:u(`LEFT_CLICK + ALT`,Cesium.Color.YELLOW),modifier:Cesium.KeyboardEventModifier.ALT,type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),(0,g.jsx)(p,{action:u(`LEFT_CLICK + ALT + SHIFT`,Cesium.Color.CYAN),modifier:[Cesium.KeyboardEventModifier.ALT,Cesium.KeyboardEventModifier.SHIFT],type:Cesium.ScreenSpaceEventType.LEFT_CLICK})]}),n.map(e=>(0,g.jsx)(o,{position:e.position,children:(0,g.jsx)(c,{pixelSize:14,color:e.color,outlineColor:Cesium.Color.WHITE,outlineWidth:2})},e.id)),(0,g.jsxs)(`div`,{style:{position:`absolute`,top:16,left:16,padding:12,background:`rgba(0,0,0,0.75)`,color:`white`,fontFamily:`monospace`,fontSize:12,borderRadius:4,pointerEvents:`none`,minWidth:260},children:[(0,g.jsx)(`div`,{style:{marginBottom:8,fontWeight:600},children:`Try clicking the globe:`}),(0,g.jsxs)(`div`,{style:{opacity:.85,lineHeight:1.5},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{style:{color:`#ff6b6b`},children:`●`}),` plain click`]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{style:{color:`#ffe066`},children:`●`}),` ALT + click`]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{style:{color:`#66e0ff`},children:`●`}),` ALT + SHIFT + click (chord)`]})]}),(0,g.jsx)(`div`,{style:{marginTop:10,borderTop:`1px solid #444`,paddingTop:8},children:a.length===0?(0,g.jsx)(`div`,{style:{opacity:.6},children:`· no events yet`}):a.map((e,t)=>(0,g.jsxs)(`div`,{children:[`· `,e]},t))})]})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const viewerRef = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const counterRef = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [markers, setMarkers] = useState<Marker[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [log, setLog] = useState<string[]>([]);
    const pickGlobe = (screen: Cartesian2): Cartesian3 | undefined => {
      const viewer = viewerRef.current?.cesiumElement;
      if (!viewer) return undefined;
      const ray = viewer.camera.getPickRay(screen);
      if (!ray) return undefined;
      const hit = viewer.scene.globe.pick(ray, viewer.scene);
      return hit ?? undefined;
    };
    const handle = (label: string, color: Color) => (e: {
      position: Cartesian2;
    } | {
      startPosition: Cartesian2;
      endPosition: Cartesian2;
    }) => {
      if (!("position" in e)) return;
      setLog(prev => [...prev.slice(-5), label]);
      const position = pickGlobe(e.position);
      if (!position) return;
      const id = counterRef.current++;
      setMarkers(prev => [...prev.slice(-19), {
        id,
        position,
        color,
        label
      }]);
    };
    return <Viewer full ref={viewerRef}>
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent action={handle("LEFT_CLICK", Color.RED)} type={ScreenSpaceEventType.LEFT_CLICK} />
          <ScreenSpaceEvent action={handle("LEFT_CLICK + ALT", Color.YELLOW)} modifier={KeyboardEventModifier.ALT} type={ScreenSpaceEventType.LEFT_CLICK} />
          <ScreenSpaceEvent action={handle("LEFT_CLICK + ALT + SHIFT", Color.CYAN)} modifier={[KeyboardEventModifier.ALT, KeyboardEventModifier.SHIFT]} type={ScreenSpaceEventType.LEFT_CLICK} />
        </ScreenSpaceEventHandler>
        {markers.map(m => <Entity key={m.id} position={m.position}>
            <PointGraphics pixelSize={14} color={m.color} outlineColor={Color.WHITE} outlineWidth={2} />
          </Entity>)}
        <div style={{
        position: "absolute",
        top: 16,
        left: 16,
        padding: 12,
        background: "rgba(0,0,0,0.75)",
        color: "white",
        fontFamily: "monospace",
        fontSize: 12,
        borderRadius: 4,
        pointerEvents: "none",
        minWidth: 260
      }}>
          <div style={{
          marginBottom: 8,
          fontWeight: 600
        }}>
            Try clicking the globe:
          </div>
          <div style={{
          opacity: 0.85,
          lineHeight: 1.5
        }}>
            <div>
              <span style={{
              color: "#ff6b6b"
            }}>●</span> plain click
            </div>
            <div>
              <span style={{
              color: "#ffe066"
            }}>●</span> ALT + click
            </div>
            <div>
              <span style={{
              color: "#66e0ff"
            }}>●</span> ALT + SHIFT + click
              (chord)
            </div>
          </div>
          <div style={{
          marginTop: 10,
          borderTop: "1px solid #444",
          paddingTop: 8
        }}>
            {log.length === 0 ? <div style={{
            opacity: 0.6
          }}>· no events yet</div> : log.map((l, i) => <div key={i}>· {l}</div>)}
          </div>
        </div>
      </Viewer>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Demonstrates plain, single-modifier, and chord-modifier bindings on the same
event type. Each binding drops a colored point on the globe at the click
location, so it's obvious which combination fired:

- **Plain click** → red point
- **ALT + click** → yellow point
- **ALT + SHIFT + click** → cyan point (chord — requires Cesium 1.142+)

The overlay also logs the last few events for confirmation. Clicks that miss
the globe (e.g. above the horizon) only update the log.`,...v.parameters?.docs?.description}}},y=[`Chord`]}))();export{v as Chord,y as __namedExportsOrder,_ as default};