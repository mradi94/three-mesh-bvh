var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire4485;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire4485=n),n.register("c0yzz",(function(e,t){var r,a,o,s;r=e.exports,a="RoundedBoxGeometry",o=()=>l,Object.defineProperty(r,a,{get:o,set:s,enumerable:!0,configurable:!0});var i=n("hGT0Q");const u=new i.Vector3;function c(e,t,r,n,a,o){const s=2*Math.PI*a/4,i=Math.max(o-2*a,0),c=Math.PI/4;u.copy(t),u[n]=0,u.normalize();const l=.5*s/(s+i),y=1-u.angleTo(e)/c;if(1===Math.sign(u[r]))return y*l;return i/(s+i)+l+l*(1-y)}class l extends i.BoxGeometry{constructor(e=1,t=1,r=1,n=2,a=.1){if(n=2*n+1,a=Math.min(e/2,t/2,r/2,a),super(1,1,1,n,n,n),1===n)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const s=new i.Vector3,u=new i.Vector3,l=new i.Vector3(e,t,r).divideScalar(2).subScalar(a),y=this.attributes.position.array,h=this.attributes.normal.array,x=this.attributes.uv.array,d=y.length/6,f=new i.Vector3,b=.5/n;for(let n=0,o=0;n<y.length;n+=3,o+=2){s.fromArray(y,n),u.copy(s),u.x-=Math.sign(u.x)*b,u.y-=Math.sign(u.y)*b,u.z-=Math.sign(u.z)*b,u.normalize(),y[n+0]=l.x*Math.sign(s.x)+u.x*a,y[n+1]=l.y*Math.sign(s.y)+u.y*a,y[n+2]=l.z*Math.sign(s.z)+u.z*a,h[n+0]=u.x,h[n+1]=u.y,h[n+2]=u.z;switch(Math.floor(n/d)){case 0:f.set(1,0,0),x[o+0]=c(f,u,"z","y",a,r),x[o+1]=1-c(f,u,"y","z",a,t);break;case 1:f.set(-1,0,0),x[o+0]=1-c(f,u,"z","y",a,r),x[o+1]=1-c(f,u,"y","z",a,t);break;case 2:f.set(0,1,0),x[o+0]=1-c(f,u,"x","z",a,e),x[o+1]=c(f,u,"z","x",a,r);break;case 3:f.set(0,-1,0),x[o+0]=1-c(f,u,"x","z",a,e),x[o+1]=1-c(f,u,"z","x",a,r);break;case 4:f.set(0,0,1),x[o+0]=1-c(f,u,"x","y",a,e),x[o+1]=1-c(f,u,"y","x",a,t);break;case 5:f.set(0,0,-1),x[o+0]=c(f,u,"x","y",a,e),x[o+1]=1-c(f,u,"y","x",a,t)}}}}}));
//# sourceMappingURL=characterMovement.2a378562.js.map