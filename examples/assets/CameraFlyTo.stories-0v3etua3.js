import{j as e,r as u}from"./iframe-C6gT_53K.js";import{C as o}from"./CameraFlyTo-vw8grLiH.js";import{V as a}from"./Viewer-BpQEPut0.js";import"./preload-helper-PPVm8Dsz.js";import"./CameraOperation-DGWI4JAc.js";import"./component-JLmv1WeE.js";const C={title:"CameraFlyTo",component:o},r={args:{duration:5},render:t=>e.jsx(a,{full:!0,children:e.jsx(o,{...t,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})})},n={args:{duration:5},render:t=>{const[s,i]=u.useState(!0);return e.jsxs(a,{full:!0,children:[e.jsxs("button",{style:{position:"absolute",top:"0",left:"0"},onClick:()=>i(c=>!c),children:["Once: ",s.toString()]}),e.jsx(o,{...t,duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100),once:s})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => <Viewer full>
      <CameraFlyTo {...args} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const x=["Basic","Once"];export{r as Basic,n as Once,x as __namedExportsOrder,C as default};
