"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[2866],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),m=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=m(r),c=a,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return r?n.createElement(k,i(i({ref:e},s),{},{components:r})):n.createElement(k,i({ref:e},s))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8521:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={title:"EllipsoidGraphics"},i="EllipsoidGraphics",p={unversionedId:"components/EllipsoidGraphics",id:"components/EllipsoidGraphics",title:"EllipsoidGraphics",description:"EllipsoidGraphics is a ellipsoid visualization for the entity.",source:"@site/docs/components/EllipsoidGraphics.mdx",sourceDirName:"components",slug:"/components/EllipsoidGraphics",permalink:"/components/EllipsoidGraphics",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/EllipsoidGraphics.mdx",tags:[],version:"current",frontMatter:{title:"EllipsoidGraphics"},sidebar:"docs",previous:{title:"EllipseGraphics",permalink:"/components/EllipseGraphics"},next:{title:"Entity",permalink:"/components/Entity"}},o={},m=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2},{value:"Cesium properties",id:"cesium-properties",level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",level:3},{value:"Cesium events",id:"cesium-events",level:3},{value:"Other properties",id:"other-properties",level:3}],s={toc:m};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ellipsoidgraphics"},"EllipsoidGraphics"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"EllipsoidGraphics")," is a ellipsoid visualization for the entity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,a.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html"},"EllipsoidGraphics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/ellipsoidgraphics--basic%22"},"EllipsoidGraphics"))),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"EllipsoidGraphics can be mounted only inside",(0,a.kt)("a",{parentName:"p",href:"/components/Entity"},"Entity")," components,\nand can not be mounted more than once for each entity."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"distanceDisplayCondition"),(0,a.kt)("td",{parentName:"tr",align:null},"DistanceDisplayCondition ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"heightReference"),(0,a.kt)("td",{parentName:"tr",align:null},"HeightReference ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fill"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"material"),(0,a.kt)("td",{parentName:"tr",align:null},"Color ","|"," MaterialProperty"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"outline"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"outlineColor"),(0,a.kt)("td",{parentName:"tr",align:null},"Color ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"outlineWidth"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shadows"),(0,a.kt)("td",{parentName:"tr",align:null},"Property ","|"," ShadowMode"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"radii"),(0,a.kt)("td",{parentName:"tr",align:null},"Cartesian3 ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"innerRadii"),(0,a.kt)("td",{parentName:"tr",align:null},"Cartesian3 ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minimumClock"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maximumClock"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minimumCone"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maximumCone"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stackPartitions"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"slicePartitions"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subdivisions"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onDefinitionChange"),(0,a.kt)("td",{parentName:"tr",align:null},"() =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"other-properties"},"Other properties"),(0,a.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);