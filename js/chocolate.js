"use strict";$(function(){var a;document.getElementById("go-up").innerHTML+="<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >",(a=jQuery).fn.circleMagic=function(t){var o,n,r,i,e=!0,s=[],l=a.extend({color:"rgba(255,0,0,.5)",radius:10,density:.3,clearOffset:.2},t),d=this[0];function c(){if(e)for(var t in i.clearRect(0,0,o,n),s)s[t].draw();requestAnimationFrame(c)}function h(){var t=this;function e(){t.pos.x=Math.random()*o,t.pos.y=n+100*Math.random(),t.alpha=.1+Math.random()*l.clearOffset,t.scale=.1+.3*Math.random(),t.speed=Math.random(),"random"===l.color?t.color="rgba("+Math.floor(255*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.random().toPrecision(2)+")":t.color=l.color}t.pos={},e(),this.draw=function(){t.alpha<=0&&e(),t.pos.y-=t.speed,t.alpha-=5e-4,i.beginPath(),i.arc(t.pos.x,t.pos.y,t.scale*l.radius,0,2*Math.PI,!1),i.fillStyle=t.color,i.fill(),i.closePath()}}!function(){var t;o=d.offsetWidth,n=d.offsetHeight,(t=document.createElement("canvas")).id="canvas",t.style.top=0,t.style.zIndex=0,t.style.position="absolute",d.appendChild(t),t.parentElement.style.overflow="hidden",(r=document.getElementById("canvas")).width=o,r.height=n,i=r.getContext("2d");for(var e=0;e<o*l.density;e++){var a=new h;s.push(a)}c()}(),window.addEventListener("scroll",function(){e=!(document.body.scrollTop>n)},!1),window.addEventListener("resize",function(){o=d.clientWidth,n=d.clientHeight,d.height=n+"px",r.width=o,r.height=n},!1)},$("#page-header").circleMagic({radius:10,density:.2,color:"rgba(255,255,255,.4)",clearOffset:.99}),(new xkTool).footFish()});