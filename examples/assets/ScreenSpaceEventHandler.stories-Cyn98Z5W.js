import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C5z0sm_V.js";import{t as n}from"./Viewer-DPIcYzgi.js";import{t as r}from"./Viewer-DUdQ1NFJ.js";import{t as i}from"./Entity-B0IAO2V8.js";import{t as a}from"./Entity-Dy3NITSB.js";import{i as o,n as s,r as c,t as l}from"./ScreenSpaceEvent-BPk7TNUu.js";var u=e((()=>{s()})),d,f,p,m,h,g;e((()=>{a(),u(),r(),o(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`ScreenSpaceEventHandler`,component:c},m={render:e=>(0,d.jsx)(n,{full:!0,children:(0,d.jsxs)(c,{...e,children:[(0,d.jsx)(l,{action:f(`Left Click`),type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),(0,d.jsx)(l,{action:f(`Right Click`),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK}),(0,d.jsx)(l,{action:f(`Left Double Click`),type:Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK}),(0,d.jsx)(l,{action:f(`Shift + Right Click`),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK,modifier:Cesium.KeyboardEventModifier.SHIFT}),(0,d.jsx)(l,{action:f(`Mouse moved`),type:Cesium.ScreenSpaceEventType.MOUSE_MOVE})]})})},h={render:e=>(0,d.jsxs)(n,{full:!0,children:[(0,d.jsx)(c,{...e,useDefault:!0,children:(0,d.jsx)(l,{type:Cesium.ScreenSpaceEventType.LEFT_CLICK})}),(0,d.jsx)(i,{name:`test`,description:`test!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})]})},h.name=`Disable click`,m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args}>
        <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
        <ScreenSpaceEvent action={action("Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} />
        <ScreenSpaceEvent action={action("Left Double Click")} type={ScreenSpaceEventType.LEFT_DOUBLE_CLICK} />
        <ScreenSpaceEvent action={action("Shift + Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} modifier={KeyboardEventModifier.SHIFT} />
        <ScreenSpaceEvent action={action("Mouse moved")} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
    </Viewer>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args} useDefault>
        <ScreenSpaceEvent type={ScreenSpaceEventType.LEFT_CLICK} />
      </ScreenSpaceEventHandler>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`DisableClick`]}))();export{m as Basic,h as DisableClick,g as __namedExportsOrder,p as default};