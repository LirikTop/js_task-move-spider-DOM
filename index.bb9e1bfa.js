var t=document.querySelector(".wall"),e=document.querySelector(".spider"),n=t.clientHeight,c=t.clientWidth,i=e.clientHeight,l=e.clientWidth,o=function(t,e,n){return Math.max(0,Math.min(e-n,t))};document.addEventListener("click",function(t){var a=t.target.closest(".wall");if(a){var r=t.clientY-a.getBoundingClientRect().y-i/2,d=t.clientX-a.getBoundingClientRect().x-l/2;e.style.top="".concat(o(r,n,i),"px"),e.style.left="".concat(o(d,c,l),"px")}});
//# sourceMappingURL=index.bb9e1bfa.js.map