var $e=Object.defineProperty;var be=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var J=(e,t,n)=>(be(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function S(){}const ve=e=>e;function pe(e){return e()}function se(){return Object.create(null)}function L(e){e.forEach(pe)}function ee(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ke(e){return Object.keys(e).length===0}function ie(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const ge=typeof window<"u";let Ce=ge?()=>window.performance.now():()=>Date.now(),te=ge?e=>requestAnimationFrame(e):S;const W=new Set;function ye(e){W.forEach(t=>{t.c(e)||(W.delete(t),t.f())}),W.size!==0&&te(ye)}function Se(e){let t;return W.size===0&&te(ye),{promise:new Promise(n=>{W.add(t={c:e,f:n})}),abort(){W.delete(t)}}}function f(e,t){e.appendChild(t)}function _e(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Ue(e){const t=w("style");return t.textContent="/* empty */",Ae(_e(e),t),t.sheet}function Ae(e,t){return f(e.head||e,t),t.sheet}function R(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function C(){return P(" ")}function Pe(){return P("")}function T(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ee(e){return Array.from(e.childNodes)}function z(e,t){t=""+t,e.data!==t&&(e.data=t)}function xe(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}const V=new Map;let H=0;function Ie(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Oe(e,t){const n={stylesheet:Ue(t),rules:{}};return V.set(e,n),n}function We(e,t,n,o,r,s,a,l=0){const d=16.666/o;let i=`{
`;for(let g=0;g<=1;g+=d){const u=t+(n-t)*s(g);i+=g*100+`%{${a(u,1-u)}}
`}const h=i+`100% {${a(n,1-n)}}
}`,c=`__svelte_${Ie(h)}_${l}`,y=_e(e),{stylesheet:m,rules:p}=V.get(y)||Oe(y,e);p[c]||(p[c]=!0,m.insertRule(`@keyframes ${c} ${h}`,m.cssRules.length));const _=e.style.animation||"";return e.style.animation=`${_?`${_}, `:""}${c} ${o}ms linear ${r}ms 1 both`,H+=1,c}function ae(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),r=n.length-o.length;r&&(e.style.animation=o.join(", "),H-=r,H||Me())}function Me(){te(()=>{H||(V.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&E(t)}),V.clear())})}let ne;function D(e){ne=e}const I=[],le=[];let M=[];const ue=[],Le=Promise.resolve();let Y=!1;function Ne(){Y||(Y=!0,Le.then(we))}function G(e){M.push(e)}const Q=new Set;let x=0;function we(){if(x!==0)return;const e=ne;do{try{for(;x<I.length;){const t=I[x];x++,D(t),Te(t.$$)}}catch(t){throw I.length=0,x=0,t}for(D(null),I.length=0,x=0;le.length;)le.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];Q.has(n)||(Q.add(n),n())}M.length=0}while(I.length);for(;ue.length;)ue.pop()();Y=!1,Q.clear(),D(e)}function Te(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function je(e){const t=[],n=[];M.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),M=t}let N;function Be(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function ce(e,t,n){e.dispatchEvent(xe(`${t?"intro":"outro"}${n}`))}const q=new Set;let U;function De(){U={r:0,c:[],p:U}}function Re(){U.r||L(U.c),U=U.p}function A(e,t){e&&e.i&&(q.delete(e),e.i(t))}function O(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),U.c.push(()=>{q.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}const Ge={duration:0};function Fe(e,t,n){const o={direction:"in"};let r=t(e,n,o),s=!1,a,l,d=0;function i(){a&&ae(e,a)}function h(){const{delay:y=0,duration:m=300,easing:p=ve,tick:_=S,css:g}=r||Ge;g&&(a=We(e,0,1,m,y,p,g,d++)),_(0,1);const u=Ce()+y,$=u+m;l&&l.abort(),s=!0,G(()=>ce(e,!0,"start")),l=Se(b=>{if(s){if(b>=$)return _(1,0),ce(e,!0,"end"),i(),s=!1;if(b>=u){const k=p((b-u)/m);_(k,1-k)}}return s})}let c=!1;return{start(){c||(c=!0,ae(e),ee(r)?(r=r(o),Be().then(h)):h())},invalidate(){c=!1},end(){s&&(i(),s=!1)}}}function F(e){e&&e.c()}function j(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),G(()=>{const s=e.$$.on_mount.map(pe).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...s):L(s),e.$$.on_mount=[]}),r.forEach(G)}function B(e,t){const n=e.$$;n.fragment!==null&&(je(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(I.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,o,r,s,a=null,l=[-1]){const d=ne;D(e);const i=e.$$={fragment:null,ctx:[],props:s,update:S,not_equal:r,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:se(),dirty:l,skip_bound:!1,root:t.target||d.$$.root};a&&a(i.root);let h=!1;if(i.ctx=n?n(e,t.props||{},(c,y,...m)=>{const p=m.length?m[0]:y;return i.ctx&&r(i.ctx[c],i.ctx[c]=p)&&(!i.skip_bound&&i.bound[c]&&i.bound[c](p),h&&qe(e,c)),y}):[],i.update(),h=!0,L(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const c=Ee(t.target);i.fragment&&i.fragment.l(c),c.forEach(E)}else i.fragment&&i.fragment.c();t.intro&&A(e.$$.fragment),j(e,t.target,t.anchor),we()}D(d)}class re{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){B(this,1),this.$destroy=S}$on(t,n){if(!ee(n))return S;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ze);function Ve(e){const t=e-1;return t*t*t+1}function He(e,{delay:t=0,duration:n=400,easing:o=Ve,x:r=0,y:s=0,opacity:a=0}={}){const l=getComputedStyle(e),d=+l.opacity,i=l.transform==="none"?"":l.transform,h=d*(1-a),[c,y]=ie(r),[m,p]=ie(s);return{delay:t,duration:n,easing:o,css:(_,g)=>`
			transform: ${i} translate(${(1-_)*c}${y}, ${(1-_)*m}${p});
			opacity: ${d-h*g}`}}function fe(e){let t,n,o,r,s,a,l,d;return{c(){t=w("main"),n=w("div"),o=w("h2"),r=P(e[1]),s=C(),a=w("p"),l=P(e[0]),v(o,"class","svelte-kk2ifb"),v(a,"class","svelte-kk2ifb"),v(t,"class","svelte-kk2ifb")},m(i,h){R(i,t,h),f(t,n),f(n,o),f(o,r),f(n,s),f(n,a),f(a,l)},p(i,h){h&2&&z(r,i[1]),h&1&&z(l,i[0])},i(i){i&&(d||G(()=>{d=Fe(t,He,{y:-200,duration:500}),d.start()}))},o:S,d(i){i&&E(t)}}}function Ke(e){let t=e[2],n,o=fe(e);return{c(){o.c(),n=Pe()},m(r,s){o.m(r,s),R(r,n,s)},p(r,[s]){s&4&&K(t,t=r[2])?(De(),O(o,1,1,S),Re(),o=fe(r),o.c(),A(o,1),o.m(n.parentNode,n)):o.p(r,s)},i(r){A(o)},o(r){O(o)},d(r){r&&E(n),o.d(r)}}}function Ze(e,t,n){let{prompt:o=""}=t,{category:r=""}=t,{key:s=-1}=t;return e.$$set=a=>{"prompt"in a&&n(0,o=a.prompt),"category"in a&&n(1,r=a.category),"key"in a&&n(2,s=a.key)},[o,r,s]}class X extends re{constructor(t){super(),oe(this,t,Ze,Ke,K,{prompt:0,category:1,key:2})}}function Je(e){let t,n,o,r,s,a,l,d=String(Math.floor(e[0]/60)).padStart(2,"0")+"",i,h,c=(e[0]%60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})+"",y,m,p,_,g,u,$;return{c(){t=w("main"),n=w("button"),n.textContent="^",o=C(),r=w("div"),s=w("button"),s.textContent="▶",a=C(),l=w("h1"),i=P(d),h=P(":"),y=P(c),m=C(),p=w("button"),p.textContent="↺",_=C(),g=w("button"),g.textContent="⌄",v(n,"class","svelte-cucafg"),v(s,"class","svelte-cucafg"),v(l,"class","svelte-cucafg"),v(p,"class","svelte-cucafg"),v(r,"class","subtimer svelte-cucafg"),v(g,"class","svelte-cucafg"),v(t,"class","timer svelte-cucafg")},m(b,k){R(b,t,k),f(t,n),f(t,o),f(t,r),f(r,s),f(r,a),f(r,l),f(l,i),f(l,h),f(l,y),f(r,m),f(r,p),f(t,_),f(t,g),u||($=[T(n,"click",e[2]),T(s,"click",e[1]),T(p,"click",e[4]),T(g,"click",e[3])],u=!0)},p(b,[k]){k&1&&d!==(d=String(Math.floor(b[0]/60)).padStart(2,"0")+"")&&z(i,d),k&1&&c!==(c=(b[0]%60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})+"")&&z(y,c)},i:S,o:S,d(b){b&&E(t),u=!1,L($)}}}function Qe(e,t,n){let o=1200,r,s=new Audio("bell.ogg");function a(){clearInterval(r),r=setInterval(()=>{n(0,o--,o),o===0&&(clearInterval(r),s.play())},1e3)}function l(){n(0,o+=60)}function d(){o>60&&n(0,o-=60)}function i(){clearInterval(r),n(0,o=20*60)}return[o,a,l,d,i]}class Xe extends re{constructor(t){super(),oe(this,t,Qe,Je,K,{})}}const de=['Walking through a forest with a light wind blowing through the pines, sometimes called Shinrin-yoku or "forest bathing"',"Zoom into an object near you and write about it in detail","Imagine you are 1000 years in the past","Imagine you are 1000 years in the future","Use a special place for inspiration (like the woods or Costco)","Write from the perspective of an animal of your choice","Explore inside and outside the box","Write about something you saw or bought at the thrift store or online marketplace","Alternate between frozen, flowing, falling, and flooding. Be like water my friend","Alternate between slow motion and timelapse","Flip to a random page in a book and use a word or sentence as inspiration.","A picture you recently took is now your album art. Turn the image into music","Choose an object in your immediate environment. If it could speak, what would be its story? What wisdom does it have to share with you?","Use your song to say goodbye","Describe something in microscopic detail. Could be electrons and quarks… cell walls and macrophages… the chemical structure of the H20 contained in my tears… etc","Write about writing songs.","Choose at random 1. Type of weather (eg. thunder storm), 2. A colour (eg. fluorescent yellow), 3. A feeling (eg. inferiority) and 4. A place (eg. the bathroom). Work these four elements into your song.","Pick a character from Alice in Wonderland to star in your song.","Tune into your body. Close your eyes and take a breath. Let your body or a body part speak. What does it want to tell you? What secrets is it holding?","Reference a fairytale you remember from your childhood (ie. Goldilocks, Sleeping Beauty, Red Riding Hood, Three Little Pigs etc).","Choose a random word and find a synonym for it. Is it really a synonym? What's different between the two words?"],he=["Don't rhyme at all","Write in Prose","A-B-C-D. (The song sections never repeat)","Write a story that starts at the end and flashes back.","Make it funny or absurd","Use numbers or fractions in your lyrics.","Use a verse/refrain structure.","Use the structure of a recipe to write your song.","Play with using more space and silence between chords or notes than you would normally feel comfortable with. See what happens.","Start with the chorus.","Write a rap or spoken word section for your song.","Use modulation (ie. change keys, change from bright to dark, etc.) in your song.","Use the unstable ABBA rhyme structure in your verse or chorus","Use wildly contrasting melodic phrases or rhythms in your song (ie. short, staccato phrasing in the verse with long held notes in the chorus). Go to extremes, further than you would normally.","Use rhyming couplets throughout your song.","Use 20 words only in your song.","verse 1 = the past, verse 2 = the present, verse 3 = the future."],me=["Use one chord or one note only… consider a drone.","Use irresponsible key changes","The verse and chorus have reverse chord progressions","Write the melody first without accompaniment.","Use dissonance in your song (eg. a melodic note that clashes with the chord or vice versa)","Use a descending bass line in your song.","Change time signatures in your song","Use two chords or two notes only in your song.","Consider using wildly contrasting rhythms between your verse and chorus (ie. long held notes vs short, staccato phrases).","Consider dynamics - build energy musically throughout the song."];function Ye(e){let t,n,o,r,s,a,l,d,i,h,c,y,m,p,_,g;return s=new X({props:{key:e[0],prompt:e[1][0],category:"Contextual"}}),l=new X({props:{key:e[0],prompt:e[1][1],category:"Structural"}}),i=new X({props:{key:e[0],prompt:e[1][2],category:"Musical"}}),m=new Xe({}),{c(){t=C(),n=w("main"),o=w("div"),r=w("div"),F(s.$$.fragment),a=C(),F(l.$$.fragment),d=C(),F(i.$$.fragment),h=C(),c=w("button"),c.textContent="↺",y=C(),F(m.$$.fragment),document.title="Prompt Generator",v(r,"class","prompts svelte-ofrn2j"),v(o,"class","prompt_section svelte-ofrn2j"),v(n,"class","svelte-ofrn2j")},m(u,$){R(u,t,$),R(u,n,$),f(n,o),f(o,r),j(s,r,null),f(r,a),j(l,r,null),f(r,d),j(i,r,null),f(o,h),f(o,c),f(n,y),j(m,n,null),p=!0,_||(g=T(c,"click",e[2]),_=!0)},p(u,[$]){const b={};$&1&&(b.key=u[0]),$&2&&(b.prompt=u[1][0]),s.$set(b);const k={};$&1&&(k.key=u[0]),$&2&&(k.prompt=u[1][1]),l.$set(k);const Z={};$&1&&(Z.key=u[0]),$&2&&(Z.prompt=u[1][2]),i.$set(Z)},i(u){p||(A(s.$$.fragment,u),A(l.$$.fragment,u),A(i.$$.fragment,u),A(m.$$.fragment,u),p=!0)},o(u){O(s.$$.fragment,u),O(l.$$.fragment,u),O(i.$$.fragment,u),O(m.$$.fragment,u),p=!1},d(u){u&&(E(t),E(n)),B(s),B(l),B(i),B(m),_=!1,g()}}}function et(e,t,n){let o=0,r=["♯","♮","♭"];function s(){n(0,o++,o),n(1,r=[de[Math.floor(Math.random()*de.length)],he[Math.floor(Math.random()*he.length)],me[Math.floor(Math.random()*me.length)]])}return[o,r,s]}class tt extends re{constructor(t){super(),oe(this,t,et,Ye,K,{})}}new tt({target:document.getElementById("app")});
