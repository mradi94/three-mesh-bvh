function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire4485;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},n.parcelRequire4485=i);var a,d,r=i("hGT0Q"),l=i("4EHgc"),s=i("c0AwW"),c={};a=c,d=function(){var e=function(){function n(e){return i.appendChild(e.dom),e}function t(e){for(var n=0;n<i.children.length;n++)i.children[n].style.display=n===e?"block":"none";o=e}var o=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",(function(e){e.preventDefault(),t(++o%i.children.length)}),!1);var a=(performance||Date).now(),d=a,r=0,l=n(new e.Panel("FPS","#0ff","#002")),s=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=n(new e.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:i,addPanel:n,showPanel:t,begin:function(){a=(performance||Date).now()},end:function(){r++;var e=(performance||Date).now();if(s.update(e-a,200),e>d+1e3&&(l.update(1e3*r/(e-d),100),d=e,r=0,c)){var n=performance.memory;c.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:t}};return e.Panel=function(e,n,t){var o=1/0,i=0,a=Math.round,d=a(window.devicePixelRatio||1),r=80*d,l=48*d,s=3*d,c=2*d,u=3*d,p=15*d,f=74*d,h=30*d,m=document.createElement("canvas");m.width=r,m.height=l,m.style.cssText="width:80px;height:48px";var w=m.getContext("2d");return w.font="bold "+9*d+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=t,w.fillRect(0,0,r,l),w.fillStyle=n,w.fillText(e,s,c),w.fillRect(u,p,f,h),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(u,p,f,h),{dom:m,update:function(l,y){o=Math.min(o,l),i=Math.max(i,l),w.fillStyle=t,w.globalAlpha=1,w.fillRect(0,0,r,p),w.fillStyle=n,w.fillText(a(l)+" "+e+" ("+a(o)+"-"+a(i)+")",s,c),w.drawImage(m,u+d,p,f-d,h,u,p,f-d,h),w.fillRect(u+f-d,p,d,h),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(u+f-d,p,d,a((1-l/y)*h))}}},e},"object"==typeof c?c=d():"function"==typeof define&&define.amd?define(d):a.Stats=d();var u=i("ghLil"),p=i("aBPXg"),f=i("W2bOH"),h=i("c0yzz"),m=i("3C1cw");let w,y,g,x,b,M,v,B,S,C=!1,R=null;const P={model:"Torus Knot",scale:.75,resolution:30,solid:!0,displayMesh:!0,displayBounds:!1,insideOnly:!1,rebuild:()=>C=!0},E={};!function(){M=document.getElementById("output"),w=new r.WebGLRenderer({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),w.setClearColor(1449501,1),w.outputEncoding=r.sRGBEncoding,document.body.appendChild(w.domElement),g=new r.Scene;const n=new r.DirectionalLight(16777215,1);n.position.set(3,6,9),g.add(n);const t=new r.DirectionalLight(16777215,.1);t.position.set(-3,-6,-9),g.add(t);const o=new r.AmbientLight(16777215,.25);g.add(o),y=new r.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),y.position.set(1,.5,1),y.far=100,y.updateProjectionMatrix(),B=new f.OrbitControls(y,w.domElement),b=new(e(c)),document.body.appendChild(b.dom);const i=new r.MeshBasicMaterial({transparent:!0,wireframe:!0,depthWrite:!1,opacity:.02});(new l.GLTFLoader).setMeshoptDecoder(s.MeshoptDecoder).load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/happy-buddha/buddha.glb",(e=>{const n=e.scene.children[0];n.geometry.center(),n.material=i,n.scale.setScalar(1.5),n.rotation.y=-Math.PI/2;(new m.GenerateMeshBVHWorker).generate(n.geometry).then((e=>{g.add(n),E.Buddha={model:n,bvh:e},"Buddha"===P.model&&(C=!0)}))})),(new l.GLTFLoader).setMeshoptDecoder(s.MeshoptDecoder).load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/stanford-bunny/bunny.glb",(e=>{const n=e.scene.children[0];n.geometry.center(),n.material=i,n.rotation.y=Math.PI/2,n.scale.setScalar(.65);(new m.GenerateMeshBVHWorker).generate(n.geometry).then((e=>{g.add(n),E.Bunny={model:n,bvh:e},"Bunny"===P.model&&(C=!0)}))}));{const e=new r.Mesh(new r.TorusKnotBufferGeometry(.3,.1,400,60),i),n=new p.MeshBVH(e.geometry);g.add(e),E["Torus Knot"]={bvh:n,model:e},C=!0}E.Buddha={model:null,bvh:null},E.Bunny={model:null,bvh:null};const a=new r.Mesh(new r.BoxBufferGeometry);S=new r.BoxHelper(a,16777215),S.material.opacity=.35,S.material.transparent=!0,g.add(S),x=new u.GUI,x.add(P,"model",Object.keys(E)).onChange((()=>{C=!0}));const d=x.addFolder("voxelize");d.add(P,"resolution",5,75,1).onChange((()=>{C=!0})),d.add(P,"scale",.1,4).onChange((()=>{C=!0})),d.add(P,"solid").onChange((()=>{C=!0})),d.add(P,"insideOnly").onChange((()=>{C=!0})),d.add(P,"rebuild");const h=x.addFolder("helpers");h.add(P,"displayMesh"),h.add(P,"displayBounds"),window.addEventListener("resize",(function(){y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}),!1)}(),function e(){b.update(),requestAnimationFrame(e),g.updateMatrixWorld(!0),C&&(R=function*(){const e=P.resolution,n=e**3,t=P.scale,o=t/e,i=new r.Color(16777215),a=new r.Color(16761095).convertSRGBToLinear();v&&v.instanceMatrix.count!==n&&(v.material.dispose(),v.dispose(),v.parent.remove(v),v=null);const{model:d,bvh:l}=E[P.model];if(!d)return;v||(v=new r.InstancedMesh(new h.RoundedBoxGeometry(1,1,1,4,.1),new r.MeshStandardMaterial,n),v.setColorAt(0,i),g.add(v));const s=-t/2+.5*o,c=new r.Vector3,u=new r.Quaternion,p=(new r.Vector3).setScalar(o),f=new r.Matrix4,m=new r.Box3,w=(new r.Matrix4).copy(d.matrixWorld).invert(),y=new r.Ray;y.direction.set(0,0,1);let x=0;for(let n=0;n<e;n++)for(let t=0;t<e;t++)for(let d=0;d<e;d++){c.set(s+t*o,s+n*o,s+d*o),m.min.setScalar(-.5*o).add(c),m.max.setScalar(.5*o).add(c);if(l.intersectsBox(m,w))P.insideOnly||(f.compose(c,u,p),v.setMatrixAt(x,f),v.setColorAt(x,i),v.instanceMatrix.needsUpdate=!0,v.instanceColor.needsUpdate=!0,x++);else if(P.solid){y.origin.copy(c).applyMatrix4(w);const e=l.raycastFirst(y,2);e&&e.face.normal.dot(y.direction)>0&&(f.compose(c,u,p),v.setMatrixAt(x,f),v.setColorAt(x,a),v.instanceMatrix.needsUpdate=!0,v.instanceColor.needsUpdate=!0,x++)}v.count=x,yield}v.count=x}(),C=!1);if(R){let e=window.performance.now();for(;window.performance.now()-e<16;){if(R.next().done){R=null;break}}}S&&(S.object.scale.setScalar(P.scale),S.object.updateMatrixWorld(!0),S.update());for(const e in E){const n=E[e];n.model&&(n.model.visible=!1)}const{model:n}=E[P.model];n&&(n.visible=P.displayMesh,S.visible=P.displayBounds);w.render(g,y)}();
//# sourceMappingURL=voxelize.6fe8603a.js.map
