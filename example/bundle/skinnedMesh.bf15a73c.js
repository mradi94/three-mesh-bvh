function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire4485;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire4485=o);var i,r,d=o("hGT0Q"),l=o("4EHgc"),s={};i=s,r=function(){var e=function(){function t(e){return o.appendChild(e.dom),e}function n(e){for(var t=0;t<o.children.length;t++)o.children[t].style.display=t===e?"block":"none";a=e}var a=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",(function(e){e.preventDefault(),n(++a%o.children.length)}),!1);var i=(performance||Date).now(),r=i,d=0,l=t(new e.Panel("FPS","#0ff","#002")),s=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:o,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){d++;var e=(performance||Date).now();if(s.update(e-i,200),e>r+1e3&&(l.update(1e3*d/(e-r),100),r=e,d=0,p)){var t=performance.memory;p.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:o,setMode:n}};return e.Panel=function(e,t,n){var a=1/0,o=0,i=Math.round,r=i(window.devicePixelRatio||1),d=80*r,l=48*r,s=3*r,p=2*r,c=3*r,u=15*r,f=74*r,w=30*r,m=document.createElement("canvas");m.width=d,m.height=l,m.style.cssText="width:80px;height:48px";var h=m.getContext("2d");return h.font="bold "+9*r+"px Helvetica,Arial,sans-serif",h.textBaseline="top",h.fillStyle=n,h.fillRect(0,0,d,l),h.fillStyle=t,h.fillText(e,s,p),h.fillRect(c,u,f,w),h.fillStyle=n,h.globalAlpha=.9,h.fillRect(c,u,f,w),{dom:m,update:function(l,g){a=Math.min(a,l),o=Math.max(o,l),h.fillStyle=n,h.globalAlpha=1,h.fillRect(0,0,d,u),h.fillStyle=t,h.fillText(i(l)+" "+e+" ("+i(a)+"-"+i(o)+")",s,p),h.drawImage(m,c+r,u,f-r,w,c,u,f-r,w),h.fillRect(c+f-r,u,r,w),h.fillStyle=n,h.globalAlpha=.9,h.fillRect(c+f-r,u,r,i((1-l/g)*w))}}},e},"object"==typeof s?s=r():"function"==typeof define&&define.amd?define(r):i.Stats=r();var p=o("ghLil"),c=o("aBPXg"),u=o("W2bOH");d.BufferGeometry.prototype.computeBoundsTree=c.computeBoundsTree;const f={display:!0,displayOriginal:!0,material:"wireframe",updatePositionOnly:!1,skeletonHelper:!1,bvhHelper:!0,bvhHelperDepth:10,autoUpdate:!0,updateRate:2.5,pause:!1,regenerate:()=>{L()}};let w,m,h,g,y,v,b,x,S,M,H,P,C,R,B,T,E,F,O=0,A=null;function L(){if(R){let e,t,n;n=window.performance.now(),B.generate(R.geometry),e=window.performance.now()-n,n=window.performance.now(),R.geometry.boundsTree?(R.geometry.boundsTree.refit(),t=(window.performance.now()-n).toFixed(2)):(R.geometry.computeBoundsTree(),t="-"),P.update(),O=0;const a=c.getBVHExtremes(R.geometry.boundsTree);null===A&&(A=a);let o=0,i=0;for(const e in a)o+=a[e].surfaceAreaScore,i+=A[e].surfaceAreaScore;const r=o/i-1;b.innerHTML=`mesh generation time: ${e.toFixed(2)} ms\nrefit time: ${t} ms\nbvh degradation: ${(100*r).toFixed(2)}%`}}!function(){b=document.getElementById("output"),w=new d.WebGLRenderer({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),w.setClearColor(1118481,1),w.shadowMap.enabled=!0,w.shadowMap.type=d.PCFSoftShadowMap,w.outputEncoding=d.sRGBEncoding,document.body.appendChild(w.domElement),h=new d.Scene;const t=new d.DirectionalLight(16777215,1);t.position.set(5,5,2.5),t.shadow.mapSize.setScalar(1024),t.shadow.normalBias=.01,t.castShadow=!0;const n=t.shadow.camera;n.left=n.bottom=-7.5,n.right=n.top=7.5,n.updateProjectionMatrix(),h.add(t),h.add(new d.AmbientLight(11583173,.8)),m=new d.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),m.position.set(10,0,0),m.far=100,m.updateProjectionMatrix(),x=new u.OrbitControls(m,w.domElement),g=new d.Clock,v=new(e(s)),document.body.appendChild(v.dom),(new l.GLTFLoader).load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/trex/scene.gltf",(e=>{H=e.scene;const t=[];H.traverse((e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1,t.push(e))})),H.updateMatrixWorld(!0),h.add(H),C=new d.SkeletonHelper(H),C.visible=!1,h.add(C);const n=e.animations;S=new d.AnimationMixer(H),M=S.clipAction(n[0]),M.play(),M.paused=f.pause;const a=new d.Box3;a.setFromObject(H),a.getCenter(x.target),a.getCenter(m.position),m.position.x=7.5,m.position.z=3.5,x.update(),B=new c.StaticGeometryGenerator(H),F=B.getMaterials(),E=F.map((e=>new d.MeshNormalMaterial({normalMap:e.normalMap}))),T=new d.MeshBasicMaterial({wireframe:!0,transparent:!0,opacity:.05,depthWrite:!1}),R=new d.Mesh(new d.BufferGeometry,T),R.receiveShadow=!0,h.add(R),P=new c.MeshBVHVisualizer(R,10),h.add(P),L()}));const a=new d.Mesh(new d.PlaneBufferGeometry,new d.ShadowMaterial({color:16777215,opacity:.025,transparent:!0}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,a.scale.setScalar(50),h.add(a),y=new p.GUI;const o=y.addFolder("static mesh");o.add(f,"display"),o.add(f,"displayOriginal"),o.add(f,"material",["wireframe","normal","original"]).onChange((e=>{if(R)switch(e){case"wireframe":R.material=T,R.castShadow=!1;break;case"normal":R.material=E,R.castShadow=!0;break;case"original":R.material=F,R.castShadow=!0}})),o.add(f,"updatePositionOnly").onChange((e=>{B.attributes=e?["position"]:["position","normal","tangent","uv","uv2"];const t=R.geometry;t.dispose();for(const e in t.attributes)t.deleteAttribute(e)})),o.open();const i=y.addFolder("helpers");i.add(f,"skeletonHelper"),i.add(f,"bvhHelper"),i.add(f,"bvhHelperDepth",1,20).onChange((e=>{P.depth=parseInt(e),P.update()})),i.open();const r=y.addFolder("bvh animation");r.add(f,"autoUpdate"),r.add(f,"updateRate",0,5,.001),r.add(f,"pause").onChange((e=>{M&&(M.paused=e)})),r.add(f,"regenerate"),r.open(),y.open(),window.addEventListener("resize",(function(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}),!1)}(),function e(){v.update(),requestAnimationFrame(e);const t=Math.min(g.getDelta(),.03);S&&(S.update(t),C.visible=f.skeletonHelper,R.visible=f.display,P.visible=f.bvhHelper,H.visible=f.displayOriginal);h.updateMatrixWorld(!0),f.autoUpdate&&!f.pause?(O>f.updateRate&&L(),O+=t):O=0;w.render(h,m)}();
//# sourceMappingURL=skinnedMesh.bf15a73c.js.map