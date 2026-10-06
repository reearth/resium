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

import{a as It}from"./chunk-J6FR5PFB.js";import{K as W,V as F,X as R,g as A,j as et,l as o,s as bt,u as nt,v as j,z}from"./chunk-GWE2HRAQ.js";var kt=new o,Bt=new j,Nt=new z,E={min:void 0,max:void 0,indexBytesPerElement:void 0};function Pt(s){let u=new Float64Array(s),n=0;E.indexBytesPerElement=u[n++],E.min=u[n++],E.max=u[n++],o.unpack(u,n,kt),n+=o.packedLength,j.unpack(u,n,Bt),n+=j.packedLength,z.unpack(u,n,Nt)}function Tt(s){let u=s.length,n=0;for(let y=0;y<u;++y)n+=F.packedLength+3+s[y].batchIds.length;return n}function Ct(s,u,n){let y=u.length,O=2+y*R.packedLength+1+Tt(n),c=new Float64Array(O),i=0;c[i++]=s,c[i++]=y;for(let x=0;x<y;++x)R.pack(u[x],c,i),i+=R.packedLength;let V=n.length;c[i++]=V;for(let x=0;x<V;++x){let B=n[x];F.pack(B.color,c,i),i+=F.packedLength,c[i++]=B.offset,c[i++]=B.count;let P=B.batchIds,w=P.length;c[i++]=w;for(let h=0;h<w;++h)c[i++]=P[h]}return c}var yt=32767,wt=new o,Ht=new o,St=new o,Ut=new o,Mt=new o,Lt=new nt,Ft=new z;function Rt(s,u){Pt(s.packedBuffer);let n;E.indexBytesPerElement===2?n=new Uint16Array(s.indices):n=new Uint32Array(s.indices);let O=new Uint16Array(s.positions),c=new Uint32Array(s.counts),i=new Uint32Array(s.indexCounts),V=new Uint32Array(s.batchIds),x=new Uint32Array(s.batchTableColors),B=new Array(c.length),P=kt,w=Bt,h=Nt,ot=E.min,st=E.max,T=s.minimumHeights,C=s.maximumHeights;A(T)&&A(C)&&(T=new Float32Array(T),C=new Float32Array(C));let t,f,l,N=O.length/2,ct=O.subarray(0,N),it=O.subarray(N,2*N);bt.zigZagDeltaDecode(ct,it);let rt=new Float64Array(N*3);for(t=0;t<N;++t){let e=ct[t],m=it[t],L=et.lerp(h.west,h.east,e/yt),k=et.lerp(h.south,h.north,m/yt),b=nt.fromRadians(L,k,0,Lt),Y=w.cartographicToCartesian(b,wt);o.pack(Y,rt,t*3)}let H=c.length,at=new Array(H),Z=new Array(H),ft=0,lt=0;for(t=0;t<H;++t)at[t]=ft,Z[t]=lt,ft+=c[t],lt+=i[t];let S=new Float32Array(N*3*2),_=new Uint16Array(N*2),D=new Uint32Array(Z.length),G=new Uint32Array(i.length),r=[],p={};for(t=0;t<H;++t)l=x[t],A(p[l])?(p[l].positionLength+=c[t],p[l].indexLength+=i[t],p[l].batchIds.push(t)):p[l]={positionLength:c[t],indexLength:i[t],offset:0,indexOffset:0,batchIds:[t]};let a,dt=0,ht=0;for(l in p)if(p.hasOwnProperty(l)){a=p[l],a.offset=dt,a.indexOffset=ht;let e=a.positionLength*2,m=a.indexLength*2+a.positionLength*6;dt+=e,ht+=m,a.indexLength=m}let U=[];for(l in p)p.hasOwnProperty(l)&&(a=p[l],U.push({color:F.fromRgba(parseInt(l)),offset:a.indexOffset,count:a.indexLength,batchIds:a.batchIds}));for(t=0;t<H;++t){l=x[t],a=p[l];let e=a.offset,m=e*3,L=e,k=at[t],b=c[t],Y=V[t],gt=ot,pt=st;A(T)&&A(C)&&(gt=T[t],pt=C[t]);let q=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY;for(f=0;f<b;++f){let g=o.unpack(rt,k*3+f*3,wt);w.scaleToGeodeticSurface(g,g);let I=w.cartesianToCartographic(g,Lt),M=I.latitude,mt=I.longitude;q=Math.min(M,q),J=Math.max(M,J),K=Math.min(mt,K),Q=Math.max(mt,Q);let xt=w.geodeticSurfaceNormal(g,Ht),v=o.multiplyByScalar(xt,gt,St),$=o.add(g,v,Ut);v=o.multiplyByScalar(xt,pt,v);let tt=o.add(g,v,Mt);o.subtract(tt,P,tt),o.subtract($,P,$),o.pack(tt,S,m),o.pack($,S,m+3),_[L]=Y,_[L+1]=Y,m+=6,L+=2}h=Ft,h.west=K,h.east=Q,h.south=q,h.north=J,B[t]=R.fromRectangle(h,ot,st,w);let d=a.indexOffset,X=Z[t],Ot=i[t];for(D[t]=d,f=0;f<Ot;f+=3){let g=n[X+f]-k,I=n[X+f+1]-k,M=n[X+f+2]-k;r[d++]=g*2+e,r[d++]=I*2+e,r[d++]=M*2+e,r[d++]=M*2+1+e,r[d++]=I*2+1+e,r[d++]=g*2+1+e}for(f=0;f<b;++f){let g=f,I=(f+1)%b;r[d++]=g*2+1+e,r[d++]=I*2+e,r[d++]=g*2+e,r[d++]=g*2+1+e,r[d++]=I*2+1+e,r[d++]=I*2+e}a.offset+=b*2,a.indexOffset=d,G[t]=d-D[t]}r=W.createTypedArray(S.length/3,r);let At=U.length;for(let e=0;e<At;++e){let m=U[e].batchIds,L=0,k=m.length;for(let b=0;b<k;++b)L+=G[m[b]];U[e].count=L}let Et=r.BYTES_PER_ELEMENT===2?W.UNSIGNED_SHORT:W.UNSIGNED_INT,ut=Ct(Et,B,U);return u.push(S.buffer,r.buffer,D.buffer,G.buffer,_.buffer,ut.buffer),{positions:S.buffer,indices:r.buffer,indexOffsets:D.buffer,indexCounts:G.buffer,batchIds:_.buffer,packedBuffer:ut.buffer}}var Dt=It(Rt);export{Dt as default};
