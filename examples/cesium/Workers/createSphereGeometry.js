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

import{a as r}from"./chunk-WAIPHB3N.js";import"./chunk-IBQZCWHF.js";import{a as m}from"./chunk-ZXZD7KWX.js";import"./chunk-KSX6TRAS.js";import"./chunk-GMTHOMGW.js";import"./chunk-BELR52CD.js";import"./chunk-BNHFHP3L.js";import"./chunk-4UHVCH4T.js";import"./chunk-4NDD6KRQ.js";import"./chunk-5ELDAYCN.js";import"./chunk-N6BI774S.js";import"./chunk-TI35VBH7.js";import"./chunk-6WLI3422.js";import"./chunk-ICY67TC6.js";import{a as s}from"./chunk-G2EMNOST.js";import"./chunk-4VFKVGYI.js";import{b as p}from"./chunk-3WJNS2B6.js";import{e as c}from"./chunk-XCN226AA.js";function a(e){let t=e.radius??1,o={radii:new s(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new r(o),this._workerName="createSphereGeometry"}a.packedLength=r.packedLength;a.pack=function(e,t,n){return p.typeOf.object("value",e),r.pack(e._ellipsoidGeometry,t,n)};var l=new r,i={radius:void 0,radii:new s,vertexFormat:new m,stackPartitions:void 0,slicePartitions:void 0};a.unpack=function(e,t,n){let o=r.unpack(e,t,l);return i.vertexFormat=m.clone(o._vertexFormat,i.vertexFormat),i.stackPartitions=o._stackPartitions,i.slicePartitions=o._slicePartitions,c(n)?(s.clone(o._radii,i.radii),n._ellipsoidGeometry=new r(i),n):(i.radius=o._radii.x,new a(i))};a.createGeometry=function(e){return r.createGeometry(e._ellipsoidGeometry)};var d=a;function f(e,t){return c(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}var w=f;export{w as default};
