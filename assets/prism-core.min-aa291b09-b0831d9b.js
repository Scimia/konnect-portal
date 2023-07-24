import{$ as J,o as Q}from"./ApiDocumentationPage-4554d33e.js";import"./vue-62e5e94d.js";import"./index-ba3bee82.js";import"./kongponents-5a8d94e7.js";import"./getMessageFromError-0a4f3a23.js";import"./document-83d6e226.js";function V(y,O){for(var k=0;k<O.length;k++){const s=O[k];if(typeof s!="string"&&!Array.isArray(s)){for(const d in s)if(d!=="default"&&!(d in y)){const b=Object.getOwnPropertyDescriptor(s,d);b&&Object.defineProperty(y,d,b.get?b:{enumerable:!0,get:()=>s[d]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}};(function(y){var O=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},k=function(s){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,b=0,E={},o={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof m?new m(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++b}),t.__id},clone:function t(e,r){var n,a;switch(r=r||{},o.util.type(e)){case"Object":if(a=o.util.objId(e),r[a])return r[a];for(var l in n={},r[a]=n,e)e.hasOwnProperty(l)&&(n[l]=t(e[l],r));return n;case"Array":return a=o.util.objId(e),r[a]?r[a]:(n=[],r[a]=n,e.forEach(function(i,u){n[u]=t(i,r)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=d.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(d,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var n="no-"+e;t;){var a=t.classList;if(a.contains(e))return!0;if(a.contains(n))return!1;t=t.parentElement}return!!r}},languages:{plain:E,plaintext:E,text:E,txt:E,extend:function(t,e){var r=o.util.clone(o.languages[t]);for(var n in e)r[n]=e[n];return r},insertBefore:function(t,e,r,n){var a=(n=n||o.languages)[t],l={};for(var i in a)if(a.hasOwnProperty(i)){if(i==e)for(var u in r)r.hasOwnProperty(u)&&(l[u]=r[u]);r.hasOwnProperty(i)||(l[i]=a[i])}var g=n[t];return n[t]=l,o.languages.DFS(o.languages,function(c,P){P===g&&c!=t&&(this[c]=l)}),l},DFS:function t(e,r,n,a){a=a||{};var l=o.util.objId;for(var i in e)if(e.hasOwnProperty(i)){r.call(e,i,e[i],n||i);var u=e[i],g=o.util.type(u);g!=="Object"||a[l(u)]?g!=="Array"||a[l(u)]||(a[l(u)]=!0,t(u,r,i,a)):(a[l(u)]=!0,t(u,r,null,a))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var n={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),o.hooks.run("before-all-elements-highlight",n);for(var a,l=0;a=n.elements[l++];)o.highlightElement(a,e===!0,n.callback)},highlightElement:function(t,e,r){var n=o.util.getLanguage(t),a=o.languages[n];o.util.setLanguage(t,n);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(l,n);var i={element:t,language:n,grammar:a,code:t.textContent};function u(c){i.highlightedCode=c,o.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,o.hooks.run("after-highlight",i),o.hooks.run("complete",i),r&&r.call(i.element)}if(o.hooks.run("before-sanity-check",i),(l=i.element.parentElement)&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!i.code)return o.hooks.run("complete",i),void(r&&r.call(i.element));if(o.hooks.run("before-highlight",i),i.grammar)if(e&&s.Worker){var g=new Worker(o.filename);g.onmessage=function(c){u(c.data)},g.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))}else u(o.highlight(i.code,i.grammar,i.language));else u(o.util.encode(i.code))},highlight:function(t,e,r){var n={code:t,grammar:e,language:r};if(o.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=o.tokenize(n.code,n.grammar),o.hooks.run("after-tokenize",n),m.stringify(o.util.encode(n.tokens),n.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var n in r)e[n]=r[n];delete e.rest}var a=new D;return S(a,a.head,t),I(t,a,e,a.head,0),function(l){for(var i=[],u=l.head.next;u!==l.tail;)i.push(u.value),u=u.next;return i}(a)},hooks:{all:{},add:function(t,e){var r=o.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=o.hooks.all[t];if(r&&r.length)for(var n,a=0;n=r[a++];)n(e)}},Token:m};function m(t,e,r,n){this.type=t,this.content=e,this.alias=r,this.length=0|(n||"").length}function F(t,e,r,n){t.lastIndex=e;var a=t.exec(r);if(a&&n&&a[1]){var l=a[1].length;a.index+=l,a[0]=a[0].slice(l)}return a}function I(t,e,r,n,a,l){for(var i in r)if(r.hasOwnProperty(i)&&r[i]){var u=r[i];u=Array.isArray(u)?u:[u];for(var g=0;g<u.length;++g){if(l&&l.cause==i+","+g)return;var c=u[g],P=c.inside,$=!!c.lookbehind,q=!!c.greedy,Y=c.alias;if(q&&!c.pattern.global){var Z=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,Z+"g")}for(var B=c.pattern||c,f=n.next,h=a;f!==e.tail&&!(l&&h>=l.reach);h+=f.value.length,f=f.next){var x=f.value;if(e.length>t.length)return;if(!(x instanceof m)){var p,L=1;if(q){if(!(p=F(B,h,t,$))||p.index>=t.length)break;var _=p.index,K=p.index+p[0].length,v=h;for(v+=f.value.length;_>=v;)v+=(f=f.next).value.length;if(h=v-=f.value.length,f.value instanceof m)continue;for(var A=f;A!==e.tail&&(v<K||typeof A.value=="string");A=A.next)L++,v+=A.value.length;L--,x=t.slice(h,v),p.index-=h}else if(!(p=F(B,0,x,$)))continue;_=p.index;var j=p[0],C=x.slice(0,_),H=x.slice(_+j.length),N=h+x.length;l&&N>l.reach&&(l.reach=N);var M=f.prev;if(C&&(M=S(e,M,C),h+=C.length),G(e,M,L),f=S(e,M,new m(i,P?o.tokenize(j,P):j,Y,j)),H&&S(e,f,H),L>1){var z={cause:i+","+g,reach:N};I(t,e,r,f.prev,h,z),l&&z.reach>l.reach&&(l.reach=z.reach)}}}}}}function D(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function S(t,e,r){var n=e.next,a={value:r,prev:e,next:n};return e.next=a,n.prev=a,t.length++,a}function G(t,e,r){for(var n=e.next,a=0;a<r&&n!==t.tail;a++)n=n.next;e.next=n,n.prev=e,t.length-=a}if(s.Prism=o,m.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(g){n+=t(g,r)}),n}var a={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(a.classes,l):a.classes.push(l)),o.hooks.run("wrap",a);var i="";for(var u in a.attributes)i+=" "+u+'="'+(a.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+i+">"+a.content+"</"+a.tag+">"},!s.document)return s.addEventListener&&(o.disableWorkerMessageHandler||s.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,n=e.code,a=e.immediateClose;s.postMessage(o.highlight(n,o.languages[r],r)),a&&s.close()},!1)),o;var w=o.util.currentScript();function W(){o.manual||o.highlightAll()}if(w&&(o.filename=w.src,w.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var T=document.readyState;T==="loading"||T==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",W):window.requestAnimationFrame?window.requestAnimationFrame(W):window.setTimeout(W,16)}return o}(O);y.exports&&(y.exports=k),typeof J<"u"&&(J.Prism=k)})(R);var U=R.exports;const X=Q(U),oe=V({__proto__:null,default:X},[U]);export{oe as p};
