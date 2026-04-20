/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.140.0
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

import{a as T}from"./chunk-OLZ3FYUM.js";import"./chunk-FC4ZZ65J.js";import{a as l}from"./chunk-S44JILQT.js";import"./chunk-6BD4U3VO.js";import{a as G}from"./chunk-UBOGZS7F.js";import{a as C}from"./chunk-2EQO3Q56.js";import"./chunk-SQMIIXB7.js";import"./chunk-M4HLDBCG.js";import"./chunk-IX4VMHEV.js";import"./chunk-7TVGLKQF.js";import"./chunk-L6QHHACZ.js";import{a as L}from"./chunk-F6PRE7D6.js";import"./chunk-V7QEYVP3.js";import"./chunk-CTHM3W6I.js";import"./chunk-5TJMAQVL.js";import{a as w}from"./chunk-W37FE5GR.js";import{a as O}from"./chunk-Q5BPHJQF.js";import{b,c as d,d as k}from"./chunk-NMVKML6W.js";import{c as P}from"./chunk-2TE5NTVD.js";import"./chunk-CUUSNIVQ.js";import"./chunk-BXMEEOCS.js";import"./chunk-23ZQ2IVV.js";import{a as H}from"./chunk-XUSCFAVF.js";import"./chunk-BTSYJ5XU.js";import"./chunk-EDVBB7SS.js";import{c as g}from"./chunk-FFBVWF2L.js";import{a as y,c as u}from"./chunk-QKUIYMGC.js";import"./chunk-WBOV35NL.js";import{b as m}from"./chunk-TNSUQXWK.js";import{e as f}from"./chunk-ILRYTWTP.js";function E(o){let e=o.length,t=new Float64Array(e*3),i=w.createTypedArray(e,e*2),r=0,a=0;for(let n=0;n<e;n++){let p=o[n];t[r++]=p.x,t[r++]=p.y,t[r++]=p.z,i[a++]=n,i[a++]=(n+1)%e}let s=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:s,indices:i,primitiveType:b.LINES})}function c(o){o=o??u.EMPTY_OBJECT;let e=o.polygonHierarchy;m.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=l.computeHierarchyPackedLength(e,y)+1}c.fromPositions=function(o){o=o??u.EMPTY_OBJECT,m.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new c(e)};c.pack=function(o,e,t){return m.typeOf.object("value",o),m.defined("array",e),t=t??0,t=l.packPolygonHierarchy(o._polygonHierarchy,e,t,y),e[t]=o.packedLength,e};var v={polygonHierarchy:{}};c.unpack=function(o,e,t){m.defined("array",o),e=e??0;let i=l.unpackPolygonHierarchy(o,e,y);e=i.startingIndex,delete i.startingIndex;let r=o[e];return f(t)||(t=new c(v)),t._polygonHierarchy=i,t.packedLength=r,t};c.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=L(t,y.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let r=l.polygonOutlinesFromHierarchy(e,!1);if(r.length===0)return;let a=[];for(let p=0;p<r.length;p++){let _=new G({geometry:E(r[p])});a.push(_)}let s=C.combineInstances(a)[0],n=P.fromPoints(e.positions);return new d({attributes:s.attributes,indices:s.indices,primitiveType:s.primitiveType,boundingSphere:n})};var h=c;function A(o,e){return f(e)&&(o=h.unpack(o,e)),o._ellipsoid=g.clone(o._ellipsoid),h.createGeometry(o)}var Z=A;export{Z as default};
