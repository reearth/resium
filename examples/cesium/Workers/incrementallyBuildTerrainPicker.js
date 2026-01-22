/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.137.0
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

import{a as f}from"./chunk-ITDFUUP5.js";import{a as c}from"./chunk-QM7HI6IF.js";import"./chunk-4UHVCH4T.js";import{b as i}from"./chunk-5ELDAYCN.js";import"./chunk-6WLI3422.js";import{a as n}from"./chunk-G2EMNOST.js";import"./chunk-4VFKVGYI.js";import"./chunk-3WJNS2B6.js";import"./chunk-XCN226AA.js";var w=new n,T=new n,a=[new n,new n,new n],d=new c;function b(t,r){let l=new Float64Array(t.aabbs),m=Array.from({length:4},(e,o)=>{let s=n.unpack(l,o*6,w),B=n.unpack(l,o*6+3,T);return c.fromCorners(s,B,new c)}),g=new Float64Array(t.inverseTransform),p=i.unpack(g,0,new i),u=new Uint32Array(t.triangleIndices),A=new Float32Array(t.trianglePositions),y=Array.from({length:4},()=>[]);for(let e=0;e<u.length;e++){n.unpack(A,e*9,a[0]),n.unpack(A,e*9+3,a[1]),n.unpack(A,e*9+6,a[2]);let o=h(p,a);for(let s=0;s<4;s++)m[s].intersectAxisAlignedBoundingBox(o)&&y[s].push(u[e])}return{intersectingTrianglesArrays:y.map(e=>{let o=new Uint32Array(e);return r.push(o.buffer),o.buffer})}}function h(t,r){return i.multiplyByPoint(t,r[0],r[0]),i.multiplyByPoint(t,r[1],r[1]),i.multiplyByPoint(t,r[2],r[2]),c.fromPoints(r,d)}var M=f(b);export{M as default};
