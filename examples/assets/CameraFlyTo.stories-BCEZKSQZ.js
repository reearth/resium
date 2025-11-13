import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-yIsmwZOr.js";import{C as o}from"./CameraFlyTo-qmg1bvy4.js";import{V as d}from"./Viewer-3OWF8io8.js";import"./CameraOperation-CDUpAgP9.js";import"./component-P3MpLVno.js";const S={title:"CameraFlyTo",component:o},r={args:{duration:5},render:t=>e.jsx(d,{full:!0,children:e.jsx(o,{...t,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})})},n={args:{duration:5},render:t=>{const[s,p]=g.useState(!0);return e.jsxs(d,{full:!0,children:[e.jsxs("button",{style:{position:"absolute",top:"0",left:"0"},onClick:()=>p(f=>!f),children:["Once: ",s.toString()]}),e.jsx(o,{...t,duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100),once:s})]})}};var a,i,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => <Viewer full>
      <CameraFlyTo {...args} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [once, setOnce] = useState(true);
    return <Viewer full>
        <button style={{
        position: "absolute",
        top: "0",
        left: "0"
      }} onClick={() => setOnce(o => !o)}>
          Once: {once.toString()}
        </button>
        <CameraFlyTo {...args} duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} once={once} />
      </Viewer>;
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const V=["Basic","Once"];export{r as Basic,n as Once,V as __namedExportsOrder,S as default};
