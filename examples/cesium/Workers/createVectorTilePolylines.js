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

import{a as K}from"./chunk-J6FR5PFB.js";import{Da as G,K as R,j as F,l as t,s as B,u as _,v as L,z as M}from"./chunk-GWE2HRAQ.js";var O=32767,ct=new _,rt=new t;function it(n,o,p,b,s){let u=n.length/3,U=n.subarray(0,u),v=n.subarray(u,2*u),g=n.subarray(2*u,3*u);B.zigZagDeltaDecode(U,v,g);let D=new Float64Array(n.length);for(let f=0;f<u;++f){let e=U[f],A=v[f],h=g[f],k=F.lerp(o.west,o.east,e/O),I=F.lerp(o.south,o.north,A/O),E=F.lerp(p,b,h/O),y=_.fromRadians(k,I,E,ct),C=s.cartographicToCartesian(y,rt);t.pack(C,D,f*3)}return D}var Y=it;var X=new M,$=new L,j=new t,S={min:void 0,max:void 0};function at(n){n=new Float64Array(n);let o=0;S.min=n[o++],S.max=n[o++],M.unpack(n,o,X),o+=M.packedLength,L.unpack(n,o,$),o+=L.packedLength,t.unpack(n,o,j)}function dt(n){let o=n.length,p=new Uint32Array(o+1),b=0;for(let s=0;s<o;++s)p[s]=b,b+=n[s];return p[o]=b,p}var Z=new t,q=new t,J=new t,ut=new t,Q=new t;function ft(n,o){let p=new Uint16Array(n.positions),b=new Uint16Array(n.widths),s=new Uint32Array(n.counts),u=new Uint16Array(n.batchIds);at(n.packedBuffer);let U=X,v=$,g=j,D=S.min,f=S.max,e=Y(p,U,D,f,v),A=e.length/3,h=A*4-4,k=new Float32Array(h*3),I=new Float32Array(h*3),E=new Float32Array(h*3),y=new Float32Array(h*2),C=new Uint16Array(h),N=0,z=0,tt=0,r,l=0,H=s.length;for(r=0;r<H;++r){let a=s[r],nt=b[r],ot=u[r];for(let d=0;d<a;++d){let x;if(d===0){let c=t.unpack(e,l*3,Z),T=t.unpack(e,(l+1)*3,q);x=t.subtract(c,T,J),t.add(c,x,x)}else x=t.unpack(e,(l+d-1)*3,J);let W=t.unpack(e,(l+d)*3,ut),P;if(d===a-1){let c=t.unpack(e,(l+a-1)*3,Z),T=t.unpack(e,(l+a-2)*3,q);P=t.subtract(c,T,Q),t.add(c,P,P)}else P=t.unpack(e,(l+d+1)*3,Q);t.subtract(x,g,x),t.subtract(W,g,W),t.subtract(P,g,P);let et=d===0?2:0,st=d===a-1?2:4;for(let c=et;c<st;++c){t.pack(W,k,N),t.pack(x,I,N),t.pack(P,E,N),N+=3;let T=c-2<0?-1:1;y[z++]=2*(c%2)-1,y[z++]=T*nt,C[tt++]=ot}}l+=a}let i=R.createTypedArray(h,A*6-6),w=0,m=0;for(H=A-1,r=0;r<H;++r)i[m++]=w,i[m++]=w+2,i[m++]=w+1,i[m++]=w+1,i[m++]=w+2,i[m++]=w+3,w+=4;o.push(k.buffer,I.buffer,E.buffer),o.push(y.buffer,C.buffer,i.buffer);let V={indexDatatype:i.BYTES_PER_ELEMENT===2?R.UNSIGNED_SHORT:R.UNSIGNED_INT,currentPositions:k.buffer,previousPositions:I.buffer,nextPositions:E.buffer,expandAndWidth:y.buffer,batchIds:C.buffer,indices:i.buffer};if(n.keepDecodedPositions){let a=dt(s);o.push(e.buffer,a.buffer),V=G(V,{decodedPositions:e.buffer,decodedPositionOffsets:a.buffer})}return V}var xt=K(ft);export{xt as default};
