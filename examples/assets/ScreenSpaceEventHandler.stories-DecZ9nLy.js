import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-Co89mBoI.js";import{g as i,o as a,t as o}from"./core-BxKpaXN9.js";import{t as s}from"./Viewer-DhNArJQ_.js";import{t as c}from"./Viewer-akLBly8J.js";import{t as l}from"./Entity-vyZNfYqc.js";import{t as u}from"./Entity-C8QZ_bnd.js";var d,f,p=e((()=>{d=t(n(),1),o(),f=({action:e,modifier:t,type:n})=>{let r=i();return(0,d.useEffect)(()=>{if(!(!r.screenSpaceEventHandler||r.screenSpaceEventHandler.isDestroyed())){if(e)return r.screenSpaceEventHandler.setInputAction(e,n,t),()=>{!r.screenSpaceEventHandler||r.screenSpaceEventHandler.isDestroyed()||r.screenSpaceEventHandler.removeInputAction(n,t)};r.screenSpaceEventHandler.removeInputAction(n,t)}},[e,r.screenSpaceEventHandler,t,n]),null}})),m=e((()=>{p()})),h,g=e((()=>{o(),h=a({name:`ScreenSpaceEventHandler`,create(e,t){return t.useDefault?e.cesiumWidget?.screenSpaceEventHandler:e.scene?new Cesium.ScreenSpaceEventHandler(e.scene.canvas):void 0},destroy(e){e.isDestroyed()||e.destroy()},provide(e){return{screenSpaceEventHandler:e}}})})),_,v,y,b,x,S;e((()=>{u(),m(),c(),g(),_=r(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={title:`ScreenSpaceEventHandler`,component:h},b={render:e=>(0,_.jsx)(s,{full:!0,children:(0,_.jsxs)(h,{...e,children:[(0,_.jsx)(f,{action:v(`Left Click`),type:Cesium.ScreenSpaceEventType.LEFT_CLICK}),(0,_.jsx)(f,{action:v(`Right Click`),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK}),(0,_.jsx)(f,{action:v(`Left Double Click`),type:Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK}),(0,_.jsx)(f,{action:v(`Shift + Right Click`),type:Cesium.ScreenSpaceEventType.RIGHT_CLICK,modifier:Cesium.KeyboardEventModifier.SHIFT}),(0,_.jsx)(f,{action:v(`Mouse moved`),type:Cesium.ScreenSpaceEventType.MOUSE_MOVE})]})})},x={render:e=>(0,_.jsxs)(s,{full:!0,children:[(0,_.jsx)(h,{...e,useDefault:!0,children:(0,_.jsx)(f,{type:Cesium.ScreenSpaceEventType.LEFT_CLICK})}),(0,_.jsx)(l,{name:`test`,description:`test!!`,position:Cesium.Cartesian3.fromDegrees(-74.0707383,40.7117244,100),point:{pixelSize:10}})]})},x.name=`Disable click`,b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args}>
        <ScreenSpaceEvent action={action("Left Click")} type={ScreenSpaceEventType.LEFT_CLICK} />
        <ScreenSpaceEvent action={action("Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} />
        <ScreenSpaceEvent action={action("Left Double Click")} type={ScreenSpaceEventType.LEFT_DOUBLE_CLICK} />
        <ScreenSpaceEvent action={action("Shift + Right Click")} type={ScreenSpaceEventType.RIGHT_CLICK} modifier={KeyboardEventModifier.SHIFT} />
        <ScreenSpaceEvent action={action("Mouse moved")} type={ScreenSpaceEventType.MOUSE_MOVE} />
      </ScreenSpaceEventHandler>
    </Viewer>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Viewer full>
      <ScreenSpaceEventHandler {...args} useDefault>
        <ScreenSpaceEvent type={ScreenSpaceEventType.LEFT_CLICK} />
      </ScreenSpaceEventHandler>
      <Entity name="test" description="test!!" position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} point={{
      pixelSize: 10
    }} />
    </Viewer>
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`DisableClick`]}))();export{b as Basic,x as DisableClick,S as __namedExportsOrder,y as default};