/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.145.0
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

import{a as T}from"./chunk-VZF5ZKSB.js";import"./chunk-HXD4BXHU.js";import{a as l}from"./chunk-7VA5PH7H.js";import"./chunk-LINIBQGU.js";import{a as G}from"./chunk-MMOHJWGL.js";import{a as C}from"./chunk-6BBZNYDX.js";import"./chunk-KRWMVIB7.js";import"./chunk-5ZC5RGYZ.js";import"./chunk-C2BJQ5BV.js";import"./chunk-RMA3XZED.js";import"./chunk-CM2CEKZH.js";import{a as L}from"./chunk-AE2X3VOY.js";import"./chunk-IU5DFVEB.js";import"./chunk-U6RTDYNE.js";import"./chunk-NVY6OTQX.js";import{a as w}from"./chunk-2X5O55FT.js";import{a as O}from"./chunk-CAOBKNCT.js";import{b,c as d,d as k}from"./chunk-4FYX2TIB.js";import{c as P}from"./chunk-GME3JRJ5.js";import"./chunk-H3LK4GAX.js";import"./chunk-NQ23OHF7.js";import"./chunk-YO6NOGYA.js";import{a as H}from"./chunk-6ZKGZZOJ.js";import"./chunk-7VKG2T2K.js";import"./chunk-PORF43EC.js";import{c as g}from"./chunk-LK26B6IJ.js";import{a as y,c as u}from"./chunk-2Z5ROPWA.js";import"./chunk-KGDHXBGK.js";import{b as m}from"./chunk-SLUQ566D.js";import{f}from"./chunk-K7WHNMF7.js";function E(o){let e=o.length,t=new Float64Array(e*3),i=w.createTypedArray(e,e*2),r=0,a=0;for(let n=0;n<e;n++){let p=o[n];t[r++]=p.x,t[r++]=p.y,t[r++]=p.z,i[a++]=n,i[a++]=(n+1)%e}let s=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:s,indices:i,primitiveType:b.LINES})}function c(o){o=o??u.EMPTY_OBJECT;let e=o.polygonHierarchy;m.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=l.computeHierarchyPackedLength(e,y)+1}c.fromPositions=function(o){o=o??u.EMPTY_OBJECT,m.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new c(e)};c.pack=function(o,e,t){return m.typeOf.object("value",o),m.defined("array",e),t=t??0,t=l.packPolygonHierarchy(o._polygonHierarchy,e,t,y),e[t]=o.packedLength,e};var v={polygonHierarchy:{}};c.unpack=function(o,e,t){m.defined("array",o),e=e??0;let i=l.unpackPolygonHierarchy(o,e,y);e=i.startingIndex,delete i.startingIndex;let r=o[e];return f(t)||(t=new c(v)),t._polygonHierarchy=i,t.packedLength=r,t};c.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=L(t,y.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let r=l.polygonOutlinesFromHierarchy(e,!1);if(r.length===0)return;let a=[];for(let p=0;p<r.length;p++){let _=new G({geometry:E(r[p])});a.push(_)}let s=C.combineInstances(a)[0],n=P.fromPoints(e.positions);return new d({attributes:s.attributes,indices:s.indices,primitiveType:s.primitiveType,boundingSphere:n})};var h=c;function A(o,e){return f(e)&&(o=h.unpack(o,e)),o._ellipsoid=g.clone(o._ellipsoid),h.createGeometry(o)}var Z=A;export{Z as default};
