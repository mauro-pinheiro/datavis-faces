(this.webpackJsonpface=this.webpackJsonpface||[]).push([[0],{125:function(e,t,n){e.exports=n(133)},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(26),c=n.n(i),o=(n(130),n(131),n(7)),s=function(e){var t=e.cx,n=e.cy,r=e.radius,i=e.strokeWidth,c=e.fill,o=e.stroke;return a.a.createElement("circle",{cx:t,cy:n,r:r,strokeWidth:i,fill:c,stroke:o})},u=function(e){var t=e.radius,n=e.strokeWidth;return a.a.createElement(s,{radius:t,strokeWidth:n,fill:"yellow",stroke:"black"})},l=function(e){var t=e.offsetX,n=e.offsetY,r=e.radius;return a.a.createElement(s,{cx:t,cy:n,radius:r})},d=function(e){var t=e.eyeOffsetX,n=e.eyeOffsetY,r=e.radius;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{offsetX:-t,offsetY:-n,radius:r}),a.a.createElement(l,{offsetX:+t,offsetY:-n,radius:r}))},f=function(e){var t=e.children,n=e.width,r=e.height,i=e.centerX,c=e.centerY;return a.a.createElement("svg",{width:n,height:r},a.a.createElement("g",{transform:"translate(".concat(i,", ").concat(c,")")},t))},h=function(e){var t,n=e.innerRadius,r=e.outerRadius,i=e.startAngle,c=e.endAngle,s=Object(o.a)().innerRadius(n).outerRadius(r).startAngle(i).endAngle(c);return a.a.createElement("path",{d:null!==(t=s())&&void 0!==t?t:void 0})},m=function(e){var t=e.width,n=e.radius;return a.a.createElement(h,{innerRadius:n,outerRadius:n+t,startAngle:Math.PI/2,endAngle:3*Math.PI/2})},g=function(e){var t=e.width,n=e.height,r=e.centerX,i=e.centerY,c=e.eyeRadius,o=e.strokeWidth,s=e.eyeOffsetX,l=e.eyeOffsetY,h=e.mouthWidth,g=e.mouthRadius;return a.a.createElement(f,{width:t,height:n,centerX:r,centerY:i},a.a.createElement(u,{radius:i-o/2,strokeWidth:o}),a.a.createElement(d,{eyeOffsetX:s,eyeOffsetY:l,radius:c}),a.a.createElement(m,{width:h,radius:g}))},E=Object(o.b)(27),y=function(){return a.a.createElement(a.a.Fragment,null,E.map((function(e){return a.a.createElement(g,{key:e,width:200,height:200,centerX:100,centerY:100,eyeRadius:10,strokeWidth:10,eyeOffsetX:30,eyeOffsetY:30,mouthWidth:10,mouthRadius:40})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.cc1a069f.chunk.js.map