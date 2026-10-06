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

import{a as H}from"./chunk-J6FR5PFB.js";import{B as E,H as W,K as Y,V as P,ca as j,ea as z,g as l,l as o,r as d}from"./chunk-GWE2HRAQ.js";function X(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var J=X;var S=new o,$=d.packedLength+o.packedLength,ee=d.packedLength+2,ne=d.packedLength+o.packedLength,te=o.packedLength+1,f={modelMatrix:new d,boundingVolume:new E};function oe(e,c){let n=c*$,i=o.unpack(e,n,S);n+=o.packedLength;let r=d.unpack(e,n,f.modelMatrix);d.multiplyByScale(r,i,r);let t=f.boundingVolume;return o.clone(o.ZERO,t.center),t.radius=Math.sqrt(3),f}function ce(e,c){let n=c*ee,i=e[n++],r=e[n++],t=o.fromElements(i,i,r,S),s=d.unpack(e,n,f.modelMatrix);d.multiplyByScale(s,t,s);let h=f.boundingVolume;return o.clone(o.ZERO,h.center),h.radius=Math.sqrt(2),f}function se(e,c){let n=c*ne,i=o.unpack(e,n,S);n+=o.packedLength;let r=d.unpack(e,n,f.modelMatrix);d.multiplyByScale(r,i,r);let t=f.boundingVolume;return o.clone(o.ZERO,t.center),t.radius=1,f}function ie(e,c){let n=c*te,i=e[n++],r=o.unpack(e,n,S),t=d.fromTranslation(r,f.modelMatrix);d.multiplyByUniformScale(t,i,t);let s=f.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=1,f}var de=new o;function R(e,c,n,i,r){if(!l(c))return;let t=n.length,s=i.attributes.position.values,h=i.indices,a=e.positions,x=e.vertexBatchIds,I=e.indices,m=e.batchIds,g=e.batchTableColors,T=e.batchedIndices,U=e.indexOffsets,v=e.indexCounts,L=e.boundingVolumes,F=e.modelMatrix,Z=e.center,V=e.positionOffset,B=e.batchIdIndex,O=e.indexOffset,D=e.batchedIndicesOffset;for(let w=0;w<t;++w){let C=r(c,w),k=C.modelMatrix;d.multiply(F,k,k);let M=n[w],A=s.length;for(let u=0;u<A;u+=3){let y=o.unpack(s,u,de);d.multiplyByPoint(k,y,y),o.subtract(y,Z,y),o.pack(y,a,V*3+u),x[B++]=M}let b=h.length;for(let u=0;u<b;++u)I[O+u]=h[u]+V;let p=w+D;T[p]=new J({offset:O,count:b,color:P.fromRgba(g[M]),batchIds:[M]}),m[p]=M,U[p]=O,v[p]=b,L[p]=E.transform(C.boundingVolume,k),V+=A/3,O+=b}e.positionOffset=V,e.batchIdIndex=B,e.indexOffset=O,e.batchedIndicesOffset+=t}var K=new o,Q=new d;function re(e){let c=new Float64Array(e),n=0;o.unpack(c,n,K),n+=o.packedLength,d.unpack(c,n,Q)}function le(e){let c=e.length,n=0;for(let i=0;i<c;++i)n+=P.packedLength+3+e[i].batchIds.length;return n}function ae(e,c,n){let i=n.length,r=2+i*E.packedLength+1+le(c),t=new Float64Array(r),s=0;t[s++]=e,t[s++]=i;for(let a=0;a<i;++a)E.pack(n[a],t,s),s+=E.packedLength;let h=c.length;t[s++]=h;for(let a=0;a<h;++a){let x=c[a];P.pack(x.color,t,s),s+=P.packedLength,t[s++]=x.offset,t[s++]=x.count;let I=x.batchIds,m=I.length;t[s++]=m;for(let g=0;g<m;++g)t[s++]=I[g]}return t}function ue(e,c){let n=l(e.boxes)?new Float32Array(e.boxes):void 0,i=l(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,r=l(e.cylinders)?new Float32Array(e.cylinders):void 0,t=l(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,s=l(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,h=l(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,a=l(e.spheres)?new Float32Array(e.spheres):void 0,x=l(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,I=l(n)?i.length:0,m=l(r)?t.length:0,g=l(s)?h.length:0,T=l(a)?x.length:0,U=W.getUnitBox(),v=j.getUnitCylinder(),L=z.getUnitEllipsoid(),F=U.attributes.position.values,Z=v.attributes.position.values,V=L.attributes.position.values,B=F.length*I;B+=Z.length*m,B+=V.length*(g+T);let O=U.indices,D=v.indices,w=L.indices,C=O.length*I;C+=D.length*m,C+=w.length*(g+T);let k=new Float32Array(B),M=new Uint16Array(B/3),A=Y.createTypedArray(B/3,C),b=I+m+g+T,p=new Uint16Array(b),u=new Array(b),y=new Uint32Array(b),q=new Uint32Array(b),_=new Array(b);re(e.packedBuffer);let G={batchTableColors:new Uint32Array(e.batchTableColors),positions:k,vertexBatchIds:M,indices:A,batchIds:p,batchedIndices:u,indexOffsets:y,indexCounts:q,boundingVolumes:_,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:Q,center:K};R(G,n,i,U,oe),R(G,r,t,v,ce),R(G,s,h,L,se),R(G,a,x,L,ie);let N=ae(A.BYTES_PER_ELEMENT,u,_);return c.push(k.buffer,M.buffer,A.buffer),c.push(p.buffer,y.buffer,q.buffer),c.push(N.buffer),{positions:k.buffer,vertexBatchIds:M.buffer,indices:A.buffer,indexOffsets:y.buffer,indexCounts:q.buffer,batchIds:p.buffer,packedBuffer:N.buffer}}var ge=H(ue);export{ge as default};
