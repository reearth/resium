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

import{a as A}from"./chunk-VF77DAIX.js";import{B as T,C as b,D as N,E as g,F,g as w,i as h,ia as k,ja as _,l as s,m as y,x as m}from"./chunk-GWE2HRAQ.js";var d=0,j=1;function P(e){h.typeOf.object("options",e),h.typeOf.object("options.frustum",e.frustum),h.typeOf.object("options.origin",e.origin),h.typeOf.object("options.orientation",e.orientation);let t=e.frustum,n=e.orientation,u=e.origin,r=e._drawNearPlane??!0,p,a;t instanceof _?(p=d,a=_.packedLength):t instanceof k&&(p=j,a=k.packedLength),this._frustumType=p,this._frustum=t.clone(),this._origin=s.clone(u),this._orientation=m.clone(n),this._drawNearPlane=r,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+a+s.packedLength+m.packedLength}P.pack=function(e,t,n){h.typeOf.object("value",e),h.defined("array",t),n=n??0;let u=e._frustumType,r=e._frustum;return t[n++]=u,u===d?(_.pack(r,t,n),n+=_.packedLength):(k.pack(r,t,n),n+=k.packedLength),s.pack(e._origin,t,n),n+=s.packedLength,m.pack(e._orientation,t,n),n+=m.packedLength,t[n]=e._drawNearPlane?1:0,t};var C=new _,E=new k,G=new m,R=new s;P.unpack=function(e,t,n){h.defined("array",e),t=t??0;let u=e[t++],r;u===d?(r=_.unpack(e,t,C),t+=_.packedLength):(r=k.unpack(e,t,E),t+=k.packedLength);let p=s.unpack(e,t,R);t+=s.packedLength;let a=m.unpack(e,t,G);t+=m.packedLength;let l=e[t]===1;if(!w(n))return new P({frustum:r,origin:p,orientation:a,_drawNearPlane:l});let o=u===n._frustumType?n._frustum:void 0;return n._frustum=r.clone(o),n._frustumType=u,n._origin=s.clone(p,n._origin),n._orientation=m.clone(a,n._orientation),n._drawNearPlane=l,n};P.createGeometry=function(e){let t=e._frustumType,n=e._frustum,u=e._origin,r=e._orientation,p=e._drawNearPlane,a=new Float64Array(24);A._computeNearFarPlanes(u,r,t,n,a);let l=new F({position:new g({componentDatatype:y.DOUBLE,componentsPerAttribute:3,values:a})}),o,c,O=p?2:1,i=new Uint16Array(8*(O+1)),f=p?0:1;for(;f<2;++f)o=p?f*8:0,c=f*4,i[o]=c,i[o+1]=c+1,i[o+2]=c+1,i[o+3]=c+2,i[o+4]=c+2,i[o+5]=c+3,i[o+6]=c+3,i[o+7]=c;for(f=0;f<2;++f)o=(O+f)*8,c=f*4,i[o]=c,i[o+1]=c+4,i[o+2]=c+1,i[o+3]=c+5,i[o+4]=c+2,i[o+5]=c+6,i[o+6]=c+3,i[o+7]=c+7;return new N({attributes:l,indices:i,primitiveType:b.LINES,boundingSphere:T.fromVertices(a)})};var L=P;function S(e,t){return w(t)&&(e=L.unpack(e,t)),L.createGeometry(e)}var V=S;export{V as default};
