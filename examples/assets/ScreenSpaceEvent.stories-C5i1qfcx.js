import{n as e,r as t}from"./iframe-aHNciSD_.js";import{n,t as r}from"./Viewer-DoIIFFlc.js";import{n as i,t as a}from"./Entity-BOgVUGlF.js";import{n as o,t as s}from"./PointGraphics-WlNhi5Qr.js";import{i as c,n as l,r as u,t as d}from"./ScreenSpaceEvent-Cbzl0ONw.js";import{n as f}from"./rolldown-runtime-DkW27tQK.js";var p,m,h,g,_;function v(){return(v=f((()=>{p=t(),i(),o(),c(),n(),l(),m=e(),h={title:`ScreenSpaceEvent`,component:d},g={render:()=>{let e=(0,p.useRef)(null),t=(0,p.useRef)(0),[n,i]=(0,p.useState)([]),[o,c]=(0,p.useState)([]),l=t=>{let n=e.current?.cesiumElement;if(!n)return;let r=n.camera.getPickRay(t);if(r)return n.scene.globe.pick(r,n.scene)??void 0},f=(e,n)=>r=>{if(!(`position`in r))return;c(t=>[...t.slice(-5),e]);let a=l(r.position);if(!a)return;let o=t.current++;i(t=>[...t.slice(-19),{id:o,position:a,color:n,label:e}])};return(0,m.jsxs)(r,{full:!0,ref:e,children:[(0,m.jsxs)(u,{children:[(0,m.jsx)(d,{action:f(`LEFT_CLICK`,Cesium.Color.RED),type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),(0,m.jsx)(d,{action:f(`LEFT_CLICK + ALT`,Cesium.Color.YELLOW),modifier:Cesium.KeyboardEventModifier.ALT,type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),(0,m.jsx)(d,{action:f(`LEFT_CLICK + ALT + SHIFT`,Cesium.Color.CYAN),modifier:[Cesium.KeyboardEventModifier.ALT,Cesium.KeyboardEventModifier.SHIFT],type:Cesium.ScreenSpaceEventType.LEFT_CLICK})]}),n.map(e=>(0,m.jsx)(a,{position:e.position,children:(0,m.jsx)(s,{pixelSize:14,color:e.color,outlineColor:Cesium.Color.WHITE,outlineWidth:2})},e.id)),(0,m.jsxs)(`div`,{style:{position:`absolute`,top:16,left:16,padding:12,background:`rgba(0,0,0,0.75)`,color:`white`,fontFamily:`monospace`,fontSize:12,borderRadius:4,pointerEvents:`none`,minWidth:260},children:[(0,m.jsx)(`div`,{style:{marginBottom:8,fontWeight:600},children:`Try clicking the globe:`}),(0,m.jsxs)(`div`,{style:{opacity:.85,lineHeight:1.5},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{style:{color:`#ff6b6b`},children:`●`}),` plain click`]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{style:{color:`#ffe066`},children:`●`}),` ALT + click`]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{style:{color:`#66e0ff`},children:`●`}),` ALT + SHIFT + click (chord)`]})]}),(0,m.jsx)(`div`,{style:{marginTop:10,borderTop:`1px solid #444`,paddingTop:8},children:o.length===0?(0,m.jsx)(`div`,{style:{opacity:.6},children:`· no events yet`}):o.map((e,t)=>(0,m.jsxs)(`div`,{children:[`· `,e]},t))})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Demonstrates plain, single-modifier, and chord-modifier bindings on the same
event type. Each binding drops a colored point on the globe at the click
location, so it's obvious which combination fired:

- **Plain click** → red point
- **ALT + click** → yellow point
- **ALT + SHIFT + click** → cyan point (chord — requires Cesium 1.142+)

The overlay also logs the last few events for confirmation. Clicks that miss
the globe (e.g. above the horizon) only update the log.`,...g.parameters?.docs?.description}}},_=[`Chord`]})))()}v();export{g as Chord,_ as __namedExportsOrder,h as default};