import{n as e}from"./iframe-DBxvnLfe.js";import{n as t,t as n}from"./Viewer-D3hDtTV2.js";import{n as r,t as i}from"./Entity-D2P2FgEs.js";import{i as a,n as o,r as s,t as c}from"./ScreenSpaceEvent-DOf_LdHG.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h;function g(){return(g=l((()=>{r(),o(),t(),a(),u=e(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`ScreenSpaceEventHandler`,component:s},p={render:e=>(0,u.jsx)(n,{full:!0,children:(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(c,{action:d(`Left Click`),type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),(0,u.jsx)(c,{action:d(`Right Click`),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK}),(0,u.jsx)(c,{action:d(`Left Double Click`),type:Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK}),(0,u.jsx)(c,{action:d(`Shift + Right Click`),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK,modifier:Cesium.KeyboardEventModifier.SHIFT}),(0,u.jsx)(c,{action:d(`Mouse moved`),type:Cesium.ScreenSpaceEventType.MOUSE_MOVE})]})})},m={render:e=>(0,u.jsxs)(n,{full:!0,children:[(0,u.jsx)(s,{...e,useDefault:!0,children:(0,u.jsx)(c,{type:Cesium.ScreenSpaceEventType.LEFT_CLICK})}),(0,u.jsx)(i,{name:`test`,description:`test!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})]})},m.name=`Disable click`,p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args}>
        <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
        <ScreenSpaceEvent action={action("Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} />
        <ScreenSpaceEvent action={action("Left Double Click")} type={ScreenSpaceEventType.LEFT_DOUBLE_CLICK} />
        <ScreenSpaceEvent action={action("Shift + Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} modifier={KeyboardEventModifier.SHIFT} />
        <ScreenSpaceEvent action={action("Mouse moved")} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
    </Viewer>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args} useDefault>
        <ScreenSpaceEvent type={ScreenSpaceEventType.LEFT_CLICK} />
      </ScreenSpaceEventHandler>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...m.parameters?.docs?.source}}},h=[`Basic`,`DisableClick`]})))()}g();export{p as Basic,m as DisableClick,h as __namedExportsOrder,f as default};