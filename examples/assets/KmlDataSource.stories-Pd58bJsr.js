import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./iframe-D8yiWHZa.js";import{n as i,t as a}from"./storybook-CRLdXa1c.js";import{t as o}from"./Viewer-BlJPjoxY.js";import{t as s}from"./Viewer-BkOwuFvD.js";import{n as c,t as l}from"./KmlDataSource-BKf_M85T.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u=t(n(),1),i(),s(),c(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`KmlDataSource`,component:l},m=`<?xml version="1.0" encoding="utf-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <Placemark>
    <name>Portland</name>
    <Point>
      <coordinates>-122.681944,45.52,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Rio de Janeiro</name>
    <Point>
      <coordinates>-43.196389,-22.908333,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Istanbul</name>
    <Point>
      <coordinates>28.976018,41.01224,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Reykjavik</name>
    <Point>
      <coordinates>-21.933333,64.133333,0</coordinates>
    </Point>
  </Placemark>
  <Placemark>
    <name>Simple Polygon</name>
    <Polygon>
      <outerBoundaryIs>
        <LinearRing>
          <coordinates>-122.681944,45.52,0
          -43.196389,-22.908333,0
          28.976018,41.01224,0
          -21.933333,64.133333,0
          -122.681944,45.52,0</coordinates>
        </LinearRing>
      </outerBoundaryIs>
    </Polygon>
  </Placemark>
</Document>
</kml>`,h=new DOMParser().parseFromString(m,`text/xml`),g=f(`onLoad`),_=e=>{let t=e.entities.values[4].polygon;t&&(t.material=Cesium.Color.RED),g(e)},v={args:{show:!0},render:e=>(0,d.jsx)(o,{full:!0,children:(0,d.jsx)(l,{...e,data:h,onLoad:_,onError:f(`onError`),...a})})},y=URL.createObjectURL(new Blob([m],{type:`application/vnd.google-earth.kml+xml`})),b=()=>(0,d.jsx)(`div`,{style:{position:`absolute`,top:8,left:8,padding:`4px 8px`,background:`#000a`,color:`#fff`},children:`Loading…`}),x={name:`Suspense`,args:{show:!0},render:e=>(0,d.jsx)(o,{full:!0,children:(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(b,{}),children:(0,d.jsx)(l,{...e,data:y,suspense:!0,onLoad:_,onError:f(`onError`),...a})})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    show: true
  },
  render: args => <Viewer full>
      <KmlDataSource {...args} data={data} onLoad={onLoad} onError={action("onError")} {...events} />
    </Viewer>
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Suspense",
  args: {
    show: true
  },
  render: args => <Viewer full>
      <Suspense fallback={<Loading />}>
        <KmlDataSource {...args} data={dataUrl} suspense onLoad={onLoad} onError={action("onError")} {...events} />
      </Suspense>
    </Viewer>
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`SuspenseStory`]}))();export{v as Basic,x as SuspenseStory,S as __namedExportsOrder,p as default};