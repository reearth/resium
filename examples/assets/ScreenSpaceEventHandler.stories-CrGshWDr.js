import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{a as s}from"./index-CjDrOnrV.js";import{u as C,c as y}from"./component-P3MpLVno.js";import{V as m}from"./Viewer-3OWF8io8.js";import{r as f}from"./index-yIsmwZOr.js";import{E as H}from"./Entity-6JEZeUU-.js";import"./v4-Dz_GI0CC.js";const T=({action:e,modifier:c,type:t})=>{const r=C();return f.useEffect(()=>{if(!(!r.screenSpaceEventHandler||r.screenSpaceEventHandler.isDestroyed())){if(e)return r.screenSpaceEventHandler.setInputAction(e,t,c),()=>{!r.screenSpaceEventHandler||r.screenSpaceEventHandler.isDestroyed()||r.screenSpaceEventHandler.removeInputAction(t,c)};r.screenSpaceEventHandler.removeInputAction(t,c)}},[e,r.screenSpaceEventHandler,c,t]),null},a=T,L=y({name:"ScreenSpaceEventHandler",create(e,c){var t;return c.useDefault?(t=e.cesiumWidget)==null?void 0:t.screenSpaceEventHandler:e.scene?new Cesium.ScreenSpaceEventHandler(e.scene.canvas):void 0},destroy(e){e.isDestroyed()||e.destroy()},provide(e){return{screenSpaceEventHandler:e}}}),o=L,k={title:"ScreenSpaceEventHandler",component:o},p={render:e=>n.jsx(m,{full:!0,children:n.jsxs(o,{...e,children:[n.jsx(a,{action:s("Left Click"),type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),n.jsx(a,{action:s("Right Click"),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK}),n.jsx(a,{action:s("Left Double Click"),type:Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK}),n.jsx(a,{action:s("Shift + Right Click"),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK,modifier:Cesium.KeyboardEventModifier.SHIFT}),n.jsx(a,{action:s("Mouse moved"),type:Cesium.ScreenSpaceEventType.MOUSE_MOVE})]})})},i={render:e=>n.jsxs(m,{full:!0,children:[n.jsx(o,{...e,useDefault:!0,children:n.jsx(a,{type:Cesium.ScreenSpaceEventType.LEFT_CLICK})}),n.jsx(H,{name:"test",description:"test!!",position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})]})};i.name="Disable click";var S,E,l;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args}>
        <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
        <ScreenSpaceEvent action={action("Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} />
        <ScreenSpaceEvent action={action("Left Double Click")} type={ScreenSpaceEventType.LEFT_DOUBLE_CLICK} />
        <ScreenSpaceEvent action={action("Shift + Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} modifier={KeyboardEventModifier.SHIFT} />
        <ScreenSpaceEvent action={action("Mouse moved")} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
    </Viewer>
}`,...(l=(E=p.parameters)==null?void 0:E.docs)==null?void 0:l.source}}};var d,u,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args} useDefault>
        <ScreenSpaceEvent type={ScreenSpaceEventType.LEFT_CLICK} />
      </ScreenSpaceEventHandler>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const h=["Basic","DisableClick"];export{p as Basic,i as DisableClick,h as __namedExportsOrder,k as default};
