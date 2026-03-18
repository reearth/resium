import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./iframe-D4wvS9R9.js";import{t as i}from"./Viewer-DBW4on7w.js";import{t as a}from"./Viewer--AfqXkNC.js";import{n as o,t as s}from"./CameraFlyTo-CRv9xAX6.js";var c,l,u,d,f,p;t((()=>{c=e(n(),1),a(),o(),l=r(),u={title:`CameraFlyTo`,component:s},d={args:{duration:5},render:e=>(0,l.jsx)(i,{full:!0,children:(0,l.jsx)(s,{...e,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})})},f={args:{duration:5},render:e=>{let[t,n]=(0,c.useState)(!0);return(0,l.jsxs)(i,{full:!0,children:[(0,l.jsxs)(`button`,{style:{position:`absolute`,top:`0`,left:`0`},onClick:()=>n(e=>!e),children:[`Once: `,t.toString()]}),(0,l.jsx)(s,{...e,duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100),once:t})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => <Viewer full>
      <CameraFlyTo {...args} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Once`]}))();export{d as Basic,f as Once,p as __namedExportsOrder,u as default};