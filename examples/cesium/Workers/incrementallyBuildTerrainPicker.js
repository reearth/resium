/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.146.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as y}from"./chunk-J6FR5PFB.js";import{l as n,r as i,t as o}from"./chunk-GWE2HRAQ.js";var b=new n,d=new n,A=[new n,new n,new n],x=new o,f=new n(.5,.5,.5),g=new n(-.5,-.5,-.5);function h(t,r){let s=new Float64Array(t.aabbs),p=Array.from({length:4},(e,a)=>{let c=n.unpack(s,a*6,b),B=n.unpack(s,a*6+3,d);return o.fromCorners(c,B,new o)}),w=new Float64Array(t.inverseTransform),T=i.unpack(w,0,new i),l=new Uint32Array(t.triangleIndices),u=new Float64Array(t.trianglePositions),m=Array.from({length:4},()=>[]);for(let e=0;e<l.length;e++){n.unpack(u,e*9,A[0]),n.unpack(u,e*9+3,A[1]),n.unpack(u,e*9+6,A[2]);let a=k(T,A);for(let c=0;c<4;c++)p[c].intersectAxisAlignedBoundingBox(a)&&m[c].push(l[e])}return{intersectingTrianglesArrays:m.map(e=>{let a=new Uint32Array(e);return r.push(a.buffer),a.buffer})}}function k(t,r){i.multiplyByPoint(t,r[0],r[0]),i.multiplyByPoint(t,r[1],r[1]),i.multiplyByPoint(t,r[2],r[2]);let s=o.fromPoints(r,x);return n.clamp(s.minimum,g,f,s.minimum),n.clamp(s.maximum,g,f,s.maximum),s}var C=y(h);export{C as default};
