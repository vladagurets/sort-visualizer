var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}}let g;function v(t){g=t}function x(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const y=[],$=[],b=[],w=[],_=Promise.resolve();let k=!1;function q(t){b.push(t)}let A=!1;const j=new Set;function E(){if(!A){A=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];v(e),S(e.$$)}for(v(null),y.length=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];j.has(e)||(j.add(e),e())}b.length=0}while(y.length);for(;w.length;)w.pop()();k=!1,A=!1,j.clear()}}function S(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const T=new Set;function C(t,e){t&&t.i&&(T.delete(t),t.i(e))}function M(t,e,n,s){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push((()=>{T.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function P(t){t&&t.c()}function I(t,n,r){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,r),q((()=>{const n=l.map(e).filter(o);a?a.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(q)}function N(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,o,r,i,l,a,c=[-1]){const d=g;v(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:c,skip_bound:!1};let h=!1;if(f.ctx=r?r(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),h&&D(e,t)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();o.intro&&C(e.$$.fragment),I(e,o.target,o.anchor),E()}v(d)}class V{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const B=[];function O(e,n=t){let s;const o=[];function i(t){if(r(e,t)&&(e=t,s)){const t=!B.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),B.push(n,e)}if(t){for(let t=0;t<B.length;t+=2)B[t][0](B[t+1]);B.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,l=t){const a=[r,l];return o.push(a),1===o.length&&(s=n(i)||t),r(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}const R=[{value:"quick",label:"Quicksort"},{value:"bubble",label:"Bubble sort"},{value:"merge",label:"Merge sort"},{value:"insertion",label:"Insertion sort"}],z="s",L="c",H={[z]:"#4EDA8F",[L]:"#F2624F",p:"#33A9E0",d:"#FBFBF2"},J={padding:25,gridScale:20,colors:{grid:"#5f5f5f",main:"white"}};function U(){return{width:window.innerWidth,height:window.innerHeight,pixelRatio:window.devicePixelRatio}}function Q(t=50,e=150){return new Array(t).fill().map((()=>({value:K(1,e),status:"d"})))}function W(t,e){const n=parseInt((t/e).toFixed(0));return 10*Math.ceil(n/10)}function G(t){return JSON.parse(JSON.stringify(t))}function K(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}const X=O(U()),Y=O(null),Z=O(Q()),tt=O({drawDelay:200,elementsCount:50,maxElementValue:1e3,sortableArray:null,sortType:R[0].value,stepIndex:null,isPause:!1});class et{constructor(t){this.options=t,this.canvas=t.canvas,this.colors=t.colors,this.ctx=this.canvas.getContext("2d")}draw=()=>{const t=Math.max(...this.options.data.map((t=>t.value))),e=this.canvas.height-2*this.options.padding,n=this.canvas.width-2*this.options.padding;if(this.canvas.height>=300){let n=0;for(;n<=t;){const s=e*(1-n/t)+this.options.padding;this.drawLine(0,s,this.canvas.width,s,this.colors.grid),this.ctx.save(),this.ctx.fillStyle=this.colors.grid,this.ctx.font='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',this.ctx.fillText(n,0,s-2),this.ctx.restore(),n+=this.options.gridScale}}let s=0;const o=n/this.options.data.length;for(const n of this.options.data){const r=Math.round(e*n.value/t);this.drawBar(this.options.padding+s*o,this.canvas.height-r-this.options.padding,o-3,r,H[n.status]),s++}};drawLine=(t,e,n,s,o)=>{this.ctx.save(),this.ctx.strokeStyle=o,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(n,s),this.ctx.stroke(),this.ctx.restore()};drawBar=(t,e,n,s,o)=>{this.ctx.save(),this.ctx.fillStyle=o,this.ctx.fillRect(t,e,n,s),this.ctx.restore()}}function nt(e){let n,s,o;return{c(){n=c("canvas"),p(n,"width",s=.8*e[1].width),p(n,"height",o=.4*e[1].height)},m(t,s){a(t,n,s),e[3](n)},p(t,[e]){2&e&&s!==(s=.8*t[1].width)&&p(n,"width",s),2&e&&o!==(o=.4*t[1].height)&&p(n,"height",o)},i:t,o:t,d(t){t&&u(n),e[3](null)}}}function st(t,e,n){let s,o,r,l,a;function u(t){if(!a)return;a.getContext("2d").clearRect(0,0,a.width,a.height);new et({...J,gridScale:W(o.maxElementValue,5),canvas:r,data:t}).draw()}return i(t,Z,(t=>n(2,s=t))),i(t,tt,(t=>n(4,o=t))),i(t,Y,(t=>n(5,r=t))),i(t,X,(t=>n(1,l=t))),x((()=>{Y.set(a),u(s)})),t.$$.update=()=>{4&t.$$.dirty&&u(s)},[a,l,s,function(t){$[t?"unshift":"push"]((()=>{a=t,n(0,a)}))}]}class ot extends V{constructor(t){super(),F(this,t,st,nt,r,{})}}class rt{constructor(t,e){if(!t)throw new Error("Provide array");if(!e)throw new Error("Provide sortType");this.array=t,this.sortedArray=null,this.sortType=e,this.history=[],this.sort()}sort=()=>{if(!this[this.sortType])throw new Error("Provide correct sortType",this.sortType);this[this.sortType]()};bubble=()=>{const t=G(this.array);for(let e=1;e<t.length-1;e++){for(let n=0;n<t.length-e;n++)this.markMany(t,[{index:n+1,status:L},{index:n,status:z}]),t[n+1].value<t[n].value&&([t[n],t[n+1]]=[t[n+1],t[n]],this.markMany(t,[{index:n+1,status:z},{index:n,status:L}]));this.saveStep(t)}this.saveSortedArray(t)};quick=()=>{const t=G(this.array),e=[];for(e.push(0),e.push(t.length-1);e[e.length-1]>=0;){const n=e.pop(),s=e.pop(),o=this.partition(t,s,n);o-1>s&&(e.push(s),e.push(o-1)),o+1<n&&(e.push(o+1),e.push(n)),this.saveStep(t)}this.saveSortedArray(t)};markMany=(t,e)=>{const n=G(t);for(const t of e)n[t.index].status=t.status;this.saveStep(n)};saveSortedArray=t=>{this.sortedArray=G(t)};saveStep=t=>{this.history.push(G(t))};partition=(t,e,n)=>{const s=t[n];let o=e;for(let r=e;r<n;r++)this.markMany(t,[{index:n,status:"p"},{index:o,status:L},{index:r,status:z}]),t[r].value<s.value&&([t[r],t[o]]=[t[o],t[r]],this.markMany(t,[{index:n,status:"p"},{index:o,status:z},{index:r,status:L}]),o++);return[t[o],t[n]]=[t[n],t[o]],o}}function it(t,e,n){const s=t.slice();return s[19]=e[n],s}function lt(e){let n,s,o;return{c(){n=c("button"),n.textContent="Continue",p(n,"class","svelte-g5jq3d")},m(t,r){a(t,n,r),s||(o=h(n,"click",e[5]),s=!0)},p:t,d(t){t&&u(n),s=!1,o()}}}function at(e){let n,s,o;return{c(){n=c("button"),n.textContent="Pause",p(n,"class","svelte-g5jq3d")},m(t,r){a(t,n,r),s||(o=h(n,"click",e[4]),s=!0)},p:t,d(t){t&&u(n),s=!1,o()}}}function ut(t){let e,n,s,o,r;return{c(){e=c("button"),n=d("Sort"),e.disabled=s=!t[0].sortType,p(e,"class","svelte-g5jq3d")},m(s,i){a(s,e,i),l(e,n),o||(r=h(e,"click",t[3]),o=!0)},p(t,n){1&n&&s!==(s=!t[0].sortType)&&(e.disabled=s)},d(t){t&&u(e),o=!1,r()}}}function ct(e){let n,s,o=e[19].label+"";return{c(){n=c("option"),s=d(o),n.__value=e[19].value,n.value=n.__value},m(t,e){a(t,n,e),l(n,s)},p:t,d(t){t&&u(n)}}}function dt(e){let n,o,r,i,d,g,v,x,y,$,b,w,_,k,q,A,j,E,S,T,C,M,P,I,N,D,F,V,B,O,z,L,H,J;function U(t,e){return null==t[1]?ut:null==t[1]||t[2]?lt:at}let Q=U(e),W=Q(e),G=R,K=[];for(let t=0;t<G.length;t+=1)K[t]=ct(it(e,G,t));return{c(){n=c("div"),o=c("div"),W.c(),r=f(),i=c("button"),i.textContent="Reset",d=f(),g=c("br"),v=f(),x=c("div"),y=c("div"),$=c("label"),$.textContent="Algorithm:",b=f(),w=c("select"),_=c("option"),_.textContent="-";for(let t=0;t<K.length;t+=1)K[t].c();q=f(),A=c("div"),j=c("label"),j.textContent="Elements:",E=f(),S=c("input"),C=f(),M=c("div"),P=c("label"),P.textContent="Max value:",I=f(),N=c("input"),F=f(),V=c("div"),B=c("label"),B.textContent="Delay:",O=f(),z=c("input"),p(i,"class","svelte-g5jq3d"),p(o,"class","flex svelte-g5jq3d"),p($,"for","method"),p($,"class","svelte-g5jq3d"),_.__value="",_.value=_.__value,p(w,"name","method"),p(w,"class","svelte-g5jq3d"),p(y,"class","flex form-item svelte-g5jq3d"),p(j,"for","count"),p(j,"class","svelte-g5jq3d"),p(S,"name","count"),p(S,"type","number"),p(S,"min","10"),S.value=T=e[0].elementsCount,p(S,"class","svelte-g5jq3d"),p(A,"class","flex form-item svelte-g5jq3d"),p(P,"for","maxValue"),p(P,"class","svelte-g5jq3d"),p(N,"name","maxValue"),p(N,"type","number"),p(N,"min","10"),N.value=D=e[0].maxElementValue,p(N,"class","svelte-g5jq3d"),p(M,"class","flex form-item svelte-g5jq3d"),p(B,"for","delay"),p(B,"class","svelte-g5jq3d"),p(z,"name","delay"),p(z,"type","range"),p(z,"min","100"),p(z,"max","1000"),z.value=L=e[0].drawDelay,p(z,"class","svelte-g5jq3d"),p(V,"class","flex form-item svelte-g5jq3d"),p(x,"class","flex flex-column svelte-g5jq3d")},m(t,s){a(t,n,s),l(n,o),W.m(o,null),l(o,r),l(o,i),l(n,d),l(n,g),l(n,v),l(n,x),l(x,y),l(y,$),l(y,b),l(y,w),l(w,_);for(let t=0;t<K.length;t+=1)K[t].m(w,null);m(w,e[0].sortType),l(x,q),l(x,A),l(A,j),l(A,E),l(A,S),l(x,C),l(x,M),l(M,P),l(M,I),l(M,N),l(x,F),l(x,V),l(V,B),l(V,O),l(V,z),H||(J=[h(i,"click",e[6]),h(w,"change",e[10]),h(S,"change",e[7]),h(N,"change",e[8]),h(z,"change",e[9])],H=!0)},p(t,[e]){if(Q===(Q=U(t))&&W?W.p(t,e):(W.d(1),W=Q(t),W&&(W.c(),W.m(o,r))),0&e){let n;for(G=R,n=0;n<G.length;n+=1){const s=it(t,G,n);K[n]?K[n].p(s,e):(K[n]=ct(s),K[n].c(),K[n].m(w,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=G.length}1&e&&k!==(k=t[0].sortType)&&m(w,t[0].sortType),1&e&&T!==(T=t[0].elementsCount)&&(S.value=T),1&e&&D!==(D=t[0].maxElementValue)&&(N.value=D),1&e&&L!==(L=t[0].drawDelay)&&(z.value=L)},i:t,o:t,d(t){t&&u(n),W.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(K,t),H=!1,s(J)}}}function ft(t,e,n){let s,o,r,l,a,u,c,d,f;function h(){p("isPause",!c)}function p(t,e){tt.set({...d,[t]:e})}function m(){c||setTimeout((()=>{if(u&&a<u.history.length){const t=u.history[a];Z.set(t),tt.set({...d,stepIndex:a+1}),m()}}),r)}return i(t,tt,(t=>n(0,d=t))),i(t,Z,(t=>n(16,f=t))),t.$$.update=()=>{1&t.$$.dirty&&n(1,({elementsCount:s,maxElementValue:o,maxElementValue:o,drawDelay:r,sortType:l,stepIndex:a,sortableArray:u,isPause:c}=d),a,(n(2,c),n(0,d)))},[d,a,c,function(){p("sortableArray",new rt(f,l)),p("stepIndex",0),setTimeout((()=>{m()}),0)},h,function(){h(),setTimeout((()=>{m()}),0)},function(){p("isPause",!1),p("sortableArray",null),p("stepIndex",null),Z.set(Q(s,o))},function({target:{valueAsNumber:t}}){p("elementsCount",t)},function({target:{valueAsNumber:t}}){p("maxElementValue",t)},function({target:{valueAsNumber:t}}){p("drawDelay",t)},function({target:{value:t}}){p("sortType",t)}]}class ht extends V{constructor(t){super(),F(this,t,ft,dt,r,{})}}function pt(t){let e,n,s;return{c(){e=c("input"),p(e,"type","range"),p(e,"min","1"),p(e,"max",t[1]()),e.value=t[0],p(e,"class","svelte-9zvqmm")},m(o,r){a(o,e,r),n||(s=h(e,"input",t[2]),n=!0)},p(t,n){1&n&&(e.value=t[0])},d(t){t&&u(e),n=!1,s()}}}function mt(e){let n,s=e[0]>0&&pt(e);return{c(){n=c("div"),s&&s.c(),p(n,"class","svelte-9zvqmm")},m(t,e){a(t,n,e),s&&s.m(n,null)},p(t,[e]){t[0]>0?s?s.p(t,e):(s=pt(t),s.c(),s.m(n,null)):s&&(s.d(1),s=null)},i:t,o:t,d(t){t&&u(n),s&&s.d()}}}function gt(t,e,n){let s,o,r;return i(t,tt,(t=>n(3,r=t))),t.$$.update=()=>{8&t.$$.dirty&&n(0,({stepIndex:s,sortableArray:o}=r),s)},[s,function(){return o?o.history.length-1:0},function({target:{valueAsNumber:t}}){const e=o.history[s];Z.set(e),tt.set({...r,isPause:!0,stepIndex:t})},r]}class vt extends V{constructor(t){super(),F(this,t,gt,mt,r,{})}}function xt(e){let n,s;return{c:t,m(t,o){n||(s=h(window,"resize",e[0],{passive:!0}),n=!0)},p:t,i:t,o:t,d(t){n=!1,s()}}}function yt(t){return[function(t,e){let n=null;return function(){(!n||+new Date>n+e)&&t(...arguments),n=+new Date}}((function(){X.set(U())}),500)]}class $t extends V{constructor(t){super(),F(this,t,yt,xt,r,{})}}function bt(e){let n,s,o,r,i,d,h,m,g;return s=new vt({}),r=new ot({}),d=new ht({}),m=new $t({}),{c(){n=c("main"),P(s.$$.fragment),o=f(),P(r.$$.fragment),i=f(),P(d.$$.fragment),h=f(),P(m.$$.fragment),p(n,"class","svelte-rgvcok")},m(t,e){a(t,n,e),I(s,n,null),l(n,o),I(r,n,null),l(n,i),I(d,n,null),a(t,h,e),I(m,t,e),g=!0},p:t,i(t){g||(C(s.$$.fragment,t),C(r.$$.fragment,t),C(d.$$.fragment,t),C(m.$$.fragment,t),g=!0)},o(t){M(s.$$.fragment,t),M(r.$$.fragment,t),M(d.$$.fragment,t),M(m.$$.fragment,t),g=!1},d(t){t&&u(n),N(s),N(r),N(d),t&&u(h),N(m,t)}}}return new class extends V{constructor(t){super(),F(this,t,null,bt,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
