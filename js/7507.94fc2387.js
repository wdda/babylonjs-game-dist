"use strict";(self["webpackChunkmaze"]=self["webpackChunkmaze"]||[]).push([[7507],{7507:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return o}});var i=n(5626),o=function(t){var e,n,o,l,v=10*-f,p=0,m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(){return void 0!==e&&null!==e.parentElement},E=function(t){v=(0,i.q)(t),T(t)},w=function(t){v=(0,i.q)(t),b(t)},g=function(t){var e=(0,i.q)(t)-f;v<e&&T(t)},k=function(t){var e=(0,i.q)(t)-f;v<e&&b(t)},q=function(){clearTimeout(l),l=void 0,n&&(y(!1),n=void 0)},T=function(t){n||h()||(e=void 0,S(a(t),t))},b=function(t){S(void 0,t)},S=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var o=(0,i.p)(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||C(n,a,c),y(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var f=r(t)?0:u;t.classList.remove(s),l=setTimeout((function(){C(t,a,c),l=void 0}),f)}n=t}},C=function(t,e,n){p=Date.now(),t.classList.add(s);var i=m&&c(t);i&&i.addRipple&&(R(),o=i.addRipple(e,n))},R=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},y=function(t){R();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,o)}else e.classList.remove(s)}},z=document;z.addEventListener("ionScrollStart",(function(t){e=t.target,q()})),z.addEventListener("ionScrollEnd",(function(){e=void 0})),z.addEventListener("ionGestureCaptured",q),z.addEventListener("touchstart",E,!0),z.addEventListener("touchcancel",w,!0),z.addEventListener("touchend",w,!0),z.addEventListener("mousedown",g,!0),z.addEventListener("mouseup",k,!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=7507.94fc2387.js.map