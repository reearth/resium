import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-QblWywmw.js";import{n as r,t as i}from"./storybook--8pSha1L.js";import{n as a,t as o}from"./Viewer-DQCuA5d5.js";import{n as s,t as c}from"./KmlDataSource-B0IUKQ7o.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l=n(),r(),a(),s(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`KmlDataSource`,component:c},p=`<?xml version="1.0" encoding="utf-8"?>
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
</kml>`,m=new DOMParser().parseFromString(p,`text/xml`),h=d(`onLoad`),g=e=>{let t=e.entities.values[4].polygon;t&&(t.material=Cesium.Color.RED),h(e)},_={args:{show:!0},render:e=>(0,u.jsx)(o,{full:!0,children:(0,u.jsx)(c,{...e,data:m,onLoad:g,onError:d(`onError`),...i})})},v=URL.createObjectURL(new Blob([p],{type:`application/vnd.google-earth.kml+xml`})),y=()=>(0,u.jsx)(`div`,{style:{position:`absolute`,top:8,left:8,padding:`4px 8px`,background:`#000a`,color:`#fff`},children:`Loading…`}),b={name:`Suspense`,args:{show:!0},render:e=>(0,u.jsx)(o,{full:!0,children:(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(y,{}),children:(0,u.jsx)(c,{...e,data:v,suspense:!0,onLoad:g,onError:d(`onError`),...i})})})},x=[`Basic`,`SuspenseStory`]})))()}S();export{_ as Basic,b as SuspenseStory,x as __namedExportsOrder,f as default};