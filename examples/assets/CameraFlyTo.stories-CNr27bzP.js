import{n as e,r as t}from"./iframe-B1i0gkyj.js";import{n,t as r}from"./Viewer-Btv2bIgt.js";import{n as i,t as a}from"./CameraFlyTo-D5jTDV4_.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=t(),n(),i(),c=e(),l={title:`CameraFlyTo`,component:a},u={args:{duration:5},render:e=>(0,c.jsx)(r,{full:!0,children:(0,c.jsx)(a,{...e,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100)})})},d={args:{duration:5},render:e=>{let[t,n]=(0,s.useState)(!0);return(0,c.jsxs)(r,{full:!0,children:[(0,c.jsxs)(`button`,{style:{position:`absolute`,top:`0`,left:`0`},onClick:()=>n(e=>!e),children:[`Once: `,t.toString()]}),(0,c.jsx)(a,{...e,duration:5,destination:Cesium.Cartesian3.fromDegrees(139.767052,35.681167,100),once:t})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => <Viewer full>
      <CameraFlyTo {...args} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)} />
    </Viewer>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`Once`]})))()}p();export{u as Basic,d as Once,f as __namedExportsOrder,l as default};