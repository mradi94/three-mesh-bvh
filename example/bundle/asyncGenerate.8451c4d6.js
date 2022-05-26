function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire4485;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire4485=i);var r,a,d=i("hGT0Q"),l={};r=l,a=function(){var e=function(){function n(e){return i.appendChild(e.dom),e}function t(e){for(var n=0;n<i.children.length;n++)i.children[n].style.display=n===e?"block":"none";o=e}var o=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",(function(e){e.preventDefault(),t(++o%i.children.length)}),!1);var r=(performance||Date).now(),a=r,d=0,l=n(new e.Panel("FPS","#0ff","#002")),s=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=n(new e.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:i,addPanel:n,showPanel:t,begin:function(){r=(performance||Date).now()},end:function(){d++;var e=(performance||Date).now();if(s.update(e-r,200),e>a+1e3&&(l.update(1e3*d/(e-a),100),a=e,d=0,c)){var n=performance.memory;c.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return e},update:function(){r=this.end()},domElement:i,setMode:t}};return e.Panel=function(e,n,t){var o=1/0,i=0,r=Math.round,a=r(window.devicePixelRatio||1),d=80*a,l=48*a,s=3*a,c=2*a,p=3*a,u=15*a,f=74*a,m=30*a,w=document.createElement("canvas");w.width=d,w.height=l,w.style.cssText="width:80px;height:48px";var h=w.getContext("2d");return h.font="bold "+9*a+"px Helvetica,Arial,sans-serif",h.textBaseline="top",h.fillStyle=t,h.fillRect(0,0,d,l),h.fillStyle=n,h.fillText(e,s,c),h.fillRect(p,u,f,m),h.fillStyle=t,h.globalAlpha=.9,h.fillRect(p,u,f,m),{dom:w,update:function(l,g){o=Math.min(o,l),i=Math.max(i,l),h.fillStyle=t,h.globalAlpha=1,h.fillRect(0,0,d,u),h.fillStyle=n,h.fillText(r(l)+" "+e+" ("+r(o)+"-"+r(i)+")",s,c),h.drawImage(w,p+a,u,f-a,m,p,u,f-a,m),h.fillRect(p+f-a,u,a,m),h.fillStyle=t,h.globalAlpha=.9,h.fillRect(p+f-a,u,a,r((1-l/g)*m))}}},e},"object"==typeof l?l=a():"function"==typeof define&&define.amd?define(a):r.Stats=a();var s=i("ghLil"),c=i("3C1cw"),p=i("aBPXg");d.Mesh.raycast=p.acceleratedRaycast;const u={useWebWorker:!0,radius:1,tube:.3,tubularSegments:500,radialSegments:500,p:3,q:5,displayHelper:!1,helperDepth:10};let f,m,w,h,g,y,x,b,v,S,M,T,H,B,R=!1;function C(){if(R)return;R=!0,h&&(h.material.dispose(),h.geometry.dispose(),b.remove(h),b.remove(x));const e=window.performance.now(),n=window.performance.now();h=new d.Mesh(new d.TorusKnotBufferGeometry(u.radius,u.tube,u.tubularSegments,u.radialSegments,u.p,u.q),new d.MeshStandardMaterial({color:new d.Color(5093036).convertSRGBToLinear(),roughness:.75}));const t=window.performance.now()-n,o=window.performance.now();let i;if(u.useWebWorker){const n=e=>{const n=(100*e).toFixed(0);M.style.visibility="visible",T.style.width=`${n}%`,H.innerText=`${n}%`};B.generate(h.geometry,{onProgress:n}).then((e=>{M.style.visibility="hidden",h.geometry.boundsTree=e,b.add(h);const n=window.performance.now()-o;R=!1,x=new p.MeshBVHVisualizer(h,0),x.depth=u.helperDepth,u.displayHelper&&x.update(),b.add(x),S.textContent=`Geometry Generation Time : ${t.toFixed(3)}ms\nBVH Generation Time : ${n.toFixed(3)}ms\nFrame Stall Time : ${i.toFixed(3)}`})),i=window.performance.now()-e}else{h.geometry.boundsTree=new p.MeshBVH(h.geometry),i=window.performance.now()-e,b.add(h);const n=window.performance.now()-o;R=!1,x=new p.MeshBVHVisualizer(h),x.depth=u.helperDepth,x.update(),b.add(x),S.textContent=`Geometry Generation Time : ${t.toFixed(3)}ms\nBVH Generation Time : ${n.toFixed(3)}ms\nFrame Stall Time : ${i.toFixed(3)}`}}!function(){S=document.getElementById("output"),M=document.getElementById("loading-container"),T=document.querySelector("#loading-container .bar"),H=document.querySelector("#loading-container .text"),f=new d.WebGLRenderer({antialias:!0}),f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),f.setClearColor(16763432,1),f.outputEncoding=d.sRGBEncoding,document.body.appendChild(f.domElement),w=new d.Scene,w.fog=new d.Fog(16763432,20,60);const n=new d.DirectionalLight(16777215,1);n.position.set(1,1,1),w.add(n),w.add(new d.AmbientLight(11583173,.8)),m=new d.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),m.position.set(0,0,4),m.far=100,m.updateProjectionMatrix(),g=new d.Clock,v=new(e(l)),document.body.appendChild(v.dom),b=new d.Group,w.add(b);for(let e=0;e<400;e++){const e=new d.Mesh(new d.SphereBufferGeometry(1,32,32),new d.MeshBasicMaterial);e.position.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(70),e.scale.setScalar(.3*Math.random()+.1),b.add(e)}B=new c.GenerateMeshBVHWorker,y=new s.GUI;const t=y.addFolder("helper");t.add(u,"displayHelper").name("enabled").onChange((e=>{e&&x&&x.update()})),t.add(u,"helperDepth",1,50,1).onChange((e=>{x&&(x.depth=e,x.update())})),t.open();const o=y.addFolder("knot");o.add(u,"useWebWorker"),o.add(u,"radius",.5,2,.01),o.add(u,"tube",.2,1.2,.01),o.add(u,"tubularSegments",50,2e3,1),o.add(u,"radialSegments",5,2e3,1),o.add(u,"p",1,10,1),o.add(u,"q",1,10,1),o.add({regenerateKnot:C},"regenerateKnot").name("regenerate"),o.open(),C(),window.addEventListener("resize",(function(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}),!1)}(),function e(){v.update(),requestAnimationFrame(e);let n=g.getDelta();b.rotation.x+=.4*n,b.rotation.y+=.6*n,x&&(x.visible=u.displayHelper);f.render(w,m)}();
//# sourceMappingURL=asyncGenerate.8451c4d6.js.map
