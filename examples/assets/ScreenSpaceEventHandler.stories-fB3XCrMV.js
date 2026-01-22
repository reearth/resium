import{r as E,j as n}from"./iframe-C6gT_53K.js";import{u as l,c as d}from"./component-JLmv1WeE.js";import{V as S}from"./Viewer-BpQEPut0.js";import{E as u}from"./Entity-C2gBlZNb.js";import"./preload-helper-PPVm8Dsz.js";const c=({action:e,modifier:t,type:i})=>{const r=l();return E.useEffect(()=>{if(!(!r.screenSpaceEventHandler||r.screenSpaceEventHandler.isDestroyed())){if(e)return r.screenSpaceEventHandler.setInputAction(e,i,t),()=>{!r.screenSpaceEventHandler||r.screenSpaceEventHandler.isDestroyed()||r.screenSpaceEventHandler.removeInputAction(i,t)};r.screenSpaceEventHandler.removeInputAction(i,t)}},[e,r.screenSpaceEventHandler,t,i]),null},o=d({name:"ScreenSpaceEventHandler",create(e,t){return t.useDefault?e.cesiumWidget?.screenSpaceEventHandler:e.scene?new Cesium.ScreenSpaceEventHandler(e.scene.canvas):void 0},destroy(e){e.isDestroyed()||e.destroy()},provide(e){return{screenSpaceEventHandler:e}}}),{action:a}=__STORYBOOK_MODULE_ACTIONS__,T={title:"ScreenSpaceEventHandler",component:o},p={render:e=>n.jsx(S,{full:!0,children:n.jsxs(o,{...e,children:[n.jsx(c,{action:a("Left Click"),type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),n.jsx(c,{action:a("Right Click"),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK}),n.jsx(c,{action:a("Left Double Click"),type:Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK}),n.jsx(c,{action:a("Shift + Right Click"),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK,modifier:Cesium.KeyboardEventModifier.SHIFT}),n.jsx(c,{action:a("Mouse moved"),type:Cesium.ScreenSpaceEventType.MOUSE_MOVE})]})})},s={render:e=>n.jsxs(S,{full:!0,children:[n.jsx(o,{...e,useDefault:!0,children:n.jsx(c,{type:Cesium.ScreenSpaceEventType.LEFT_CLICK})}),n.jsx(u,{name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})]})};s.name="Disable click";p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args}>
        <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
        <ScreenSpaceEvent action={action("Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} />
        <ScreenSpaceEvent action={action("Left Double Click")} type={ScreenSpaceEventType.LEFT_DOUBLE_CLICK} />
        <ScreenSpaceEvent action={action("Shift + Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} modifier={KeyboardEventModifier.SHIFT} />
        <ScreenSpaceEvent action={action("Mouse moved")} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
    </Viewer>
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args} useDefault>
        <ScreenSpaceEvent type={ScreenSpaceEventType.LEFT_CLICK} />
      </ScreenSpaceEventHandler>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...s.parameters?.docs?.source}}};const H=["Basic","DisableClick"];export{p as Basic,s as DisableClick,H as __namedExportsOrder,T as default};
