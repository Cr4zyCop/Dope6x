(()=>{var e={468:(e,t,a)=>{e.exports=a.p+"assets/facebook.svg"},639:(e,t,a)=>{e.exports=a.p+"assets/instagram.svg"},981:(e,t,a)=>{e.exports=a.p+"assets/pinterest.svg"},371:(e,t,a)=>{e.exports=a.p+"assets/telegram.svg"},509:(e,t,a)=>{e.exports=a.p+"assets/tiktok.svg"},876:(e,t,a)=>{e.exports=a.p+"assets/twitter.svg"},867:(e,t,a)=>{e.exports=a.p+"assets/whatsapp.svg"},559:(e,t,a)=>{e.exports=a.p+"assets/youtube.svg"},857:(e,t,a)=>{e.exports=a.p+"assets/contact-me.svg"},125:(e,t,a)=>{e.exports=a.p+"assets/privacy.svg"}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.p="/ubgwtf/",(()=>{"use strict";const e=React;var t=a.n(e);const n=ReactDOM;var r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const c="/gamebridge/v1",l="gamebridge-uid",o="utm_source",i="game-bridge-session-id",m="ads-tag-sdk";function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const g=e=>e.replace(/^\?/,"").split("&").reduce(((e,t)=>{let[a,n=""]=t.split("=");return a?d(d({},e),{},{[a]:n}):e}),{});let p;const f=()=>{if(p)return p;const e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),a=/(?:SymbianOS)/.test(e)||t,n=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),s=/(?:iPad|PlayBook)/.test(e)||n&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),c=/(?:iPhone)/.test(e)&&!s;return p={isTablet:s,isPhone:c,isAndroid:n,isPC:!(c||n||a||s)},p};let h;const y=()=>{if(h)return h;try{let e=navigator.userAgent.toLowerCase().match(/(msie|firefox|chrome|opera|version|safari).*?([\d.]+)/)[1].replace(/version/,"safari");return-1!==navigator.userAgent.toLowerCase().indexOf("edg")&&(e="edge"),h=e,h}catch(e){return h="",h}},E=()=>window.localStorage.getItem(l),w=()=>new Promise((e=>{let t=E();if(t)return e(t);const a=setInterval((()=>{t=E(),t&&(clearInterval(a),e(t))}),50)})),v=()=>window.localStorage.getItem("gamebridge-tid"),b=(e,t,a,n)=>{let r;if("number"==typeof t&&(r=t),"string"==typeof t)switch(t){case"small":r=130;break;case"large":default:r=280;break;case"oversized":r=430}a||n||(n=".jpeg"),n&&(e=e.replace(".webp",n));const{imgDomain:s}=N();return`${s}/image/${r}*${r}/${e}`},O=(e,t)=>t-5<=e&&t+5>=e,S=()=>{const e=g(window.location.search);e[o]&&window.localStorage.setItem(o,e[o])},P=()=>{const e=f(),t=e.isPhone||e.isAndroid;return new Promise(((e,a)=>{let n=document.querySelector("#ads-tag-sdk");if(n)return e(null);const{siteId:r,zoneMap:s}=N();n=document.createElement("script"),n.src="https://sdk.enjoy4fun.com/v1/ads-tag.js",n.id=m,n.setAttribute("data-site-id",r),n.onload=function(){window.addEventListener("beforeunload",(e=>{f().isPC&&(document.querySelector("[data-jump-page]").style.display="block",window.usePageshowEvent||(window.usePageshowEvent=!0,window.addEventListener("pageshow",(function(e){e.persisted&&(document.querySelector("[data-jump-page]").style.display="none")}))))})),window.adsTag.renderInterstitial(t?s.interstitial_mobile:s.interstitial_pc),s.anchor_mobile_bottom&&window.adsTag.renderAnchor(s.anchor_mobile_bottom),e(null)},n.onerror=()=>{a()},window.document.querySelector("head").appendChild(n)}))};function N(){return window.APP_PROPS.seoEnvMap}const k=e=>{try{const t=document.cookie.split("; "),a={};return t.forEach((e=>{const t=e.split("=");a[t[0]]=t[1]})),a[e]||""}catch(e){return console.error("cookie error",e),""}};const j=()=>{let e=Date.now();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4fun-xxxx-xxxxxxxxxxxx".replace(/[x]/g,(function(t){const a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)}))},x=()=>{let e=window.sessionStorage.getItem(i);return e||(e=`${(new Date).getTime()}-${j()}`,window.sessionStorage.setItem(i,e),e)},_=(e,t,a)=>{let n;n=a?document.querySelector(".search-content-main"):window;setTimeout((()=>{let r=[],s=document.querySelectorAll(e);const c=()=>{if(r.length===s.length)return void n.removeEventListener("scroll",c);let e=[],l=a?n.offsetHeight:n.innerHeight,o=a?n.scrollTop:n.scrollY;s.forEach((t=>{const a=t.getAttribute("data-size")||"small",n=t.getAttribute("data-grid-mark"),s=t.getAttribute("data-id");if(-1!==r.indexOf(s))return;const c=t.offsetTop,i=c+t.offsetHeight;c>=o&&i<=o+l&&(r.push(s),e.push({id:s,size:a,index:n}))})),e.length&&t(e)};c(),n.addEventListener("scroll",c)}))},C=e=>{function t(e){return e<10?"0"+e:e}let a;return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+((a=e.getMilliseconds())<10?"00"+a:a<100?"0"+a:a)},$=e=>{const t=document.querySelector("body");e?t.setAttribute("no-scroll",""):t.removeAttribute("no-scroll")},A=e=>e.map((e=>({id:e.game_id,icon:e.base_icon,path:e.game_path,name:e.game_name,icon_video:e.icon_video,new:e.new})));let z;const I=axios;var T=a.n(I);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const L=T().create();L.interceptors.request.use((e=>{const t=E(),a=v();return t&&(e.headers.uid=t),a&&(e.headers.tid=a),"/uid"===e.url?Promise.resolve(e):new Promise((t=>{w().then((a=>{e.headers.uid=a,t(e)}))}))})),L.interceptors.response.use((e=>e.data),(e=>{if(T().isCancel(e))return;let t="";var a,n,r,s;e.response?t=(null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||(null===(r=e.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.msg)||"服务器响应错误":t=e.request?e.request||"请求发生错误":e.message||"本地错误";throw Error(t)}));const G=new Proxy(L,{get(e,t){const{apiDomain:a}=N();return L.defaults.baseURL=`${a}${c}`,e[t]}});new Proxy(L,{get(e,t){const{apiDomain:a}=N();return L.defaults.baseURL=`${a}/gamebridge-user/v1`,e[t]}});function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const F=e=>new Promise(((t,a)=>{G.get(`/site/${N().siteId}/games/new`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=A(a),t(e)})).catch((e=>{a(e)}))})),R=e=>new Promise(((t,a)=>{G.get(`/site/${N().siteId}/games`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=A(a),t(e)})).catch((e=>{a(e)}))})),Y=(e,t,a)=>{let n;return n=window.top===window?window.location.href:document.referrer,{game_id:a,event_name:e,page_url:window.location.href,custom_data:q({cid:(z||(z=g(window.location.search).utm_source||window.localStorage.getItem("sdk-cid")||"default"),z),sessionId:x(),version:"1.9.8",referrer:n,_fbp:k("_fbp"),_fbc:k("_fbc"),utm_source:window.localStorage.getItem(o)||"3487216655"},t)}},J=(e,t,a)=>{((e,t)=>{const{apiDomain:a}=N();w().then((n=>{const r={},s=v();s&&(r.tid=s),r.uid=n,fetch(`${a}${c}${e}`,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",keepalive:!0,headers:r,referrerPolicy:"no-referrer",body:JSON.stringify(t)})}))})("/track",Y(e,t,a))},W=(e,t)=>{((e,t)=>{const a=new Date;w().then((n=>{const r={"#app_id":"856",data:[{"#type":"track","#time":C(a),"#timestamp":a.getTime(),"#account_id":"enjoy4fun","#event_name":e,"#uuid":j(),properties:M(M({},t),{},{game_id:null===(c=window.APP_PROPS.seoGame)||void 0===c?void 0:c.game_id,game_name:null===(s=window.APP_PROPS.seoGame)||void 0===s?void 0:s.game_name,uid:n,"#zone_offset":0-(new Date).getTimezoneOffset()/60})}]};var s,c;fetch("https://deapi.gmoneygame.xyz/v1/wgt/report/json",{method:"POST",mode:"cors",cache:"no-cache",body:JSON.stringify(r)})}))})(e,Y(e,t))};var V,U,B,K,Q=a(125),X=a.n(Q),Z=a(857),ee=a.n(Z),te=a(559),ae=a.n(te),ne=a(639),re=a.n(ne),se=a(876),ce=a.n(se),le=a(509),oe=a.n(le),ie=a(468),me=a.n(ie);function ue(a){const{envMap:n,language:r}=a,{languageList:s=[],imgDomain:c}=n,[l,o]=(0,e.useState)(!1),[i,m]=(0,e.useState)(null);(0,e.useEffect)((()=>(m(window.location.pathname),()=>{document.querySelector("body").removeAttribute("no-scroll")})),[]);const u=e=>{o(e),$(e)},d=e=>{const t=i.split("/");return t.some((e=>e===r))?(t[1]=e,t.join("/")):`/${e}${i}`};let g,p;return s.some((e=>{if(e.code===r)return g=e.icon,p=e.name,!0})),t().createElement("section",{className:"language-wrap"},t().createElement("div",{onClick:()=>u(!l),className:"language-icon"},t().createElement("img",{src:`${c}/image/36*36/${g}`}),t().createElement("p",null,p)),(e=>{if(!l||!i)return null;return t().createElement(t().Fragment,null,t().createElement("div",{className:"language-model"},t().createElement("div",{className:"language-title"},V||(V=t().createElement("h2",{className:"language-title"},"Select your language")),t().createElement(Le,{type:"delete",className:"close-action",onClick:()=>(o(!1),void $(!1))})),t().createElement("div",{className:"language-list"},s.map((e=>t().createElement("a",{href:d(e.code)},t().createElement("img",{src:`${c}/image/36*36/${e.icon}`,alt:""}),t().createElement("h3",null,e.name)))))),t().createElement("div",{className:"close-mask",onClick:()=>o(!1)}))})())}function de(a){const{language:n,envMap:r}=a,[s,c]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{window.addEventListener("scroll",(()=>{const e=document.body.offsetHeight,t=document.documentElement.scrollTop||document.body.scrollTop,a=window.innerHeight;c(a+t>e-40)}),!1)}),[]),t().createElement("section",{className:"footer","data-show":s},t().createElement("ul",{className:"footer-menu"},t().createElement("li",null,t().createElement("a",{href:`/${n}/policy.html`,className:"menu-privacy"},U||(U=t().createElement("img",{src:X(),loading:"lazy"})),"Privacy Policy")),t().createElement("li",null,t().createElement("a",{href:`/${n}/contact.html`,className:"menu-contact-me"},B||(B=t().createElement("img",{src:ee(),loading:"lazy"})),"Contact Me")),t().createElement("li",null,t().createElement(ue,{language:n,envMap:r}))),K||(K=t().createElement("div",{className:"footer-link"},t().createElement("div",{className:"link-bg"}),t().createElement("ul",null,t().createElement("li",null,t().createElement("a",{className:"youtube",target:"_blank",href:"https://www.youtube.com/channel/UCnKg8AQyd8WgsMevcmGvabA"},t().createElement("img",{src:ae(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"instagram",target:"_blank",href:"https://www.instagram.com/enjoy4fun_official/"},t().createElement("img",{src:re(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"twitter",target:"_blank",href:"https://twitter.com/enjoy4fun1"},t().createElement("img",{src:ce(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"tiktok",target:"_blank",href:"https://www.tiktok.com/@enjoy4fun.com"},t().createElement("img",{src:oe(),loading:"lazy"}))),t().createElement("li",null,t().createElement("a",{className:"facebook",target:"_blank",href:"https://www.facebook.com/Enjoy4fun-105558892193507"},t().createElement("img",{src:me(),loading:"lazy"})))))))}const ge=classNames;var pe,fe=a.n(ge);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ye(a){var n;const{useSPA:r,language:c,game:l,style:o,campaign:i,size:m="small",index:u,type:d="",useVideo:g,system:p,callback:f}=a;if(!l)return t().createElement(Ue,{useSPA:r,path:`/${c}`,className:"game-card card-wrap","data-size":m,"data-grid-mark":a.index});const{id:h,icon:E,path:w,name:v,icon_video:O}=l,[S,P]=(0,e.useState)(null),[k,j]=(0,e.useState)(null);(0,e.useEffect)((()=>{j(N().videoDomain),P("safari"!==y())}),[]);let x="";"topic"===d?x=E:null!==S&&(x=b(E,m,S));const _={};x&&(_.backgroundImage=`url(${x})`);const C=()=>(x&&({}.backgroundImage=`url(${x})`),p.isAndroid||p.isPhone?null:O&&g&&k?t().createElement("video",{className:"icon-video",loop:!0,muted:!0,preload:"metadata"},t().createElement("source",{src:`${k}/${O}`,type:"video/mp4"})):n||(n=t().createElement("h3",null,t().createElement("span",null,v))));let $=w;i&&($=`${w}?utm_campaign=${i}`);let A=m;"search"!==d&&"search-big"!==d||(A=d);const z=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o);return!l.new&&x&&(z.backgroundImage=`url(${x})`),t().createElement(Ue,{useSPA:r,path:`/${c}/${w}`,style:z,className:fe()("game-card",l.new?"":"card-wrap"),"data-size":"small"===A?void 0:A,"data-grid-mark":u,"data-id":h,onClick:e=>((e,t)=>{const a={campaign:i,isFirstScreen:t.pageY<=window.innerHeight?"true":"false"};"function"==typeof f&&f(w),J("GameIconClick",a,l.id)})(0,e),onMouseLeave:e=>(e=>{const t=e.currentTarget.querySelector("video");t&&t.pause()})(e),onMouseEnter:e=>(e=>{const t=e.currentTarget.querySelector("video");t&&(t.currentTime=0,t.play())})(e)},l.new?t().createElement(t().Fragment,null,t().createElement("p",{className:"card-wrap",style:_},C()),pe||(pe=t().createElement("div",{className:"game-flag"}))):C())}const Ee=t().memo(ye,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var we,ve;function be(a){const{language:n,style:r,campaign:s,size:c="small",category:l,index:o}=a,{path:i,icon:m,name:u}=l,[d,g]=(0,e.useState)(null);(0,e.useEffect)((()=>{g("safari"!==y())}),[]);let p="";null!==d&&(p=b(m,c,d));return t().createElement("a",{style:r,className:"category-card","data-size":"small"===c?void 0:c,"data-grid-mark":o,href:`/${n}/games/${i}`,onClick:e=>(e=>{const t={campaign:s,isFirstScreen:e.pageY<=window.innerHeight?"true":"false"};J("CategoryIconClick",t)})(e)},t().createElement("p",null,p?t().createElement("img",{src:p,alt:u,loading:"lazy"}):null),t().createElement("h3",null,u),"large"===c?t().createElement(t().Fragment,null,we||(we=t().createElement("div",{className:"large-bg-1"})),ve||(ve=t().createElement("div",{className:"large-bg-2"}))):null)}const Oe=t().memo(be,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var Se,Pe,Ne,ke,je,xe,_e,Ce,$e;let Ae,ze;function Ie(a){const{useSPA:n,language:r}=a,[s,c]=(0,e.useState)(null),[o,i]=(0,e.useState)(null),[m,u]=(0,e.useState)(null),[d,g]=(0,e.useState)(!1),[p,h]=(0,e.useState)(!1),[y,w]=(0,e.useState)(!1),[v,b]=(0,e.useState)(null),[O,S]=(0,e.useState)(""),[P,k]=(0,e.useState)(null),j=(0,e.useRef)(null);if((0,e.useEffect)((()=>{var e;b(f()),E()?m||new Promise(((e,t)=>{G.get("/recentgames").then((t=>{const{data:a=[]}=t||{};t.data=A(a),e(t)})).catch((e=>{t(e)}))})).then((e=>{u(e.data)})):G.get("/uid").then((e=>{var t;t=e.data,window.localStorage.setItem(l,t)})),s||G.get(`/site/${N().siteId}/categorys`).then((e=>{c(e.data)})),o||(e={page_size:12},new Promise(((t,a)=>{G.get(`/site/${N().siteId}/weekgames`,{params:e}).then((e=>{const{data:a=[]}=e||{};e.data=A(a),t(e)})).catch((e=>{a(e)}))}))).then((e=>{i(e.data)}))}),[]),(0,e.useEffect)((()=>{d?(_(".search-content-main .popular-this-week .game-card",(e=>{J("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"popular-this-week"})}),!0),_(".search-content-main .recently-played .game-card",(e=>{J("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"recently-played"})}),!0)):(ze="",S(""))}),[d]),!v)return null;const x=e=>{const t=!!e.trim()&&e.trim()===ze;if(J("TriggerSearch",{searchValue:e,repeatedText:t.toString()}),t)return;ze=e.trim(),h(!0);(ze?R:F)({term:ze,page_size:24}).then((e=>{k(e.data),h(!1),document.querySelector(".search-content-main").scrollTo(0,0),_(".search-content-main .search-result .game-card",(e=>{J("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"search-result"})}),!0)}))},C=e=>{const t=e.currentTarget.value;S(t),Ae&&clearTimeout(Ae),Ae=setTimeout((()=>{clearTimeout(Ae),x(t)}),500)};if(!v)return Se||(Se=t().createElement("div",{className:"game-search"},t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun")));const $=e=>{y||w(!0),J(e?"OpenSearch":"CloseSearch"),g(e),e&&setTimeout((()=>{j.current&&j.current.focus()}),100),e||k(null)},z=()=>s?t().createElement("div",{className:"category"},s.map((e=>t().createElement("a",{key:e.id,href:`/${r}/games/${e.path}`,onClick:e=>(e=>{const t={campaign:"hot",isFirstScreen:e.pageY<=window.innerHeight?"true":"false"};J("CategoryIconClick",t)})(e)},e.name)))):null,I=()=>y?t().createElement(t().Fragment,null,p?je||(je=t().createElement(Je,{className:"search-loading"})):null,t().createElement("div",{className:"search-content-main"},P?0===P.length?Pe||(Pe=t().createElement("div",{className:"search-result"},t().createElement("p",{className:"void-title"},"No search results yet"),t().createElement("p",{className:"void-text"},"Try searching for something else?"))):t().createElement("div",{className:"search-result"},t().createElement("p",{className:"result-title"},P.length," result:"),t().createElement("div",{className:"result-list"},P.map(((e,a)=>{const s=e.name.toLowerCase()===O.toLowerCase();return t().createElement(Ee,{useSPA:n,style:(v.isPC||v.isTablet)&&s?{gridArea:"1/1/3/3"}:{},language:r,game:e,key:e.id,type:s?"search-big":"search",size:s?"large":"small",index:a,campaign:`search&value=${O}`,callback:()=>g(!1),system:v})})))):null,z(),o&&o.length?t().createElement("div",{className:"popular-this-week"},Ne||(Ne=t().createElement("h2",{className:"popular-this-week-title"},"Popular this week")),t().createElement("div",{className:"popular-this-week-list"},o.map(((e,a)=>t().createElement(Ee,{useSPA:n,language:r,game:e,key:e.id,type:"search",index:a,campaign:"week-list",callback:()=>g(!1),system:v}))))):null,m&&m.length?t().createElement("div",{className:"recently-played"},ke||(ke=t().createElement("h2",{className:"recently-played-title"},"Recently played")),t().createElement("div",{className:"recently-played-list"},m.map(((e,a)=>t().createElement(Ee,{useSPA:n,language:r,game:e,key:e.id,type:"search",index:a,campaign:"played-list",callback:()=>g(!1),system:v}))))):null)):null;return v.isAndroid||v.isPhone?t().createElement("div",{className:"game-search"},t().createElement("a",{className:"logo",href:`/${r}/`,onClick:()=>J("LogoClick")},xe||(xe=t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun"))),t().createElement("div",{className:"home-and-search"},t().createElement("a",{href:`/${r}/`,className:"hs-ele-home",onClick:()=>J("HomeClick")},t().createElement(Le,{type:"home",style:{fontSize:24}})),t().createElement("span",{className:"hs-ele-search",onMouseDown:()=>$(!0)},t().createElement(Le,{type:"search",style:{fontSize:24}}))),d?t().createElement("div",{className:"search-content"},t().createElement("div",{className:"search-content-action"},t().createElement("div",{className:"search-go-back",onClick:()=>{$(!1)}},_e||(_e=t().createElement(Le,{type:"left"}))),t().createElement("div",{className:"search-main"},t().createElement("input",{className:"search-input",placeholder:"Search",ref:j,value:O,onChange:C}),t().createElement("button",{className:"search-action",onClick:()=>x(O)},t().createElement(Le,{type:"search",style:{fontSize:20,color:"#fff"}})))),I()):null):d?t().createElement("div",{className:"game-search pc-expand"},t().createElement("div",{className:"search-main"},t().createElement("input",{className:"search-input",placeholder:"Search",value:O,ref:j,onChange:C}),O?t().createElement(Le,{className:"clear-search",type:"delete",onClick:()=>{S("")}}):null,t().createElement("button",{className:"search-action",onClick:()=>x(O)},t().createElement(Le,{type:"search",style:{fontSize:32,color:"#fff"}}))),$e||($e=t().createElement("div",{className:"search-bg"})),d?t().createElement("div",{className:"content-bg",onClick:()=>$(!1)}):null,t().createElement("div",{className:"search-content","data-show":d},I())):t().createElement("div",{className:"game-search pc-normal"},t().createElement("a",{className:"logo",href:`/${r}/`,onClick:()=>J("LogoClick")},Ce||(Ce=t().createElement("h1",{title:"Enjoy4fun"},"Enjoy4fun"))),t().createElement("div",{className:"home-and-search"},t().createElement("a",{href:`/${r}/`,className:"hs-ele-home",onClick:()=>J("HomeClick")},t().createElement(Le,{type:"home",style:{fontSize:24}})),t().createElement("span",{className:"hs-ele-search",onMouseDown:()=>$(!0)},t().createElement(Le,{type:"search",style:{fontSize:24}}))))}function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Te.apply(this,arguments)}function De(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const Me=["type","style","className","onClick","id"];function Le(e){const{type:a,style:n,className:r="",onClick:s=(()=>{}),id:c}=e,l=De(e,Me);return t().createElement("i",Te({id:c,className:fe()("iconfont",`icon-${a}`,r),style:n},l,{onClick:s}))}function Ge(e){const{language:a,children:n,module:r,showMore:s,eventName:c,campaign:l}=e;let o=e.url;return l&&(o=`${o}?utm_campaign=${l}`),t().createElement("div",{className:"module-wrap"},t().createElement("h2",{className:"module-header","data-module":r},t().createElement("span",null,n)),s&&t().createElement("a",{className:"more",href:`/${a}/${o}`,onClick:()=>J(c)},"More"))}var He;function qe(e){var a,n,r,s,c;const{language:l,game_name:o="",description:i="",game_play:m="",categorys:u=[],seoAbout:d}=e;return t().createElement("section",{className:"about-area"},He||(He=t().createElement(Ge,{module:"blue"},"About Enjoy4fun")),t().createElement("div",{className:"about-content"},o?t().createElement(t().Fragment,null,a||(a=t().createElement("h2",null,o)),n||(n=t().createElement("h3",null,"About ",o)),r||(r=t().createElement("p",null,i)),s||(s=t().createElement("h3",null,"How to play ",o," online?")),c||(c=t().createElement("p",null,m)),t().createElement("div",{className:"category-list"},u.map(((e,a)=>t().createElement("a",{key:a,href:`/${l}/games/${e.path}`,onClick:e=>{(e=>{const t={campaign:"game",isFirstScreen:e.pageY<=window.innerHeight?"true":"false"};J("CategoryIconClick",t)})(e)}},e.name))))):t().createElement(t().Fragment,null,t().createElement("div",{dangerouslySetInnerHTML:{__html:d.body}}))))}const Fe=t().memo(qe,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var Re,Ye;function Je(e){const{style:a,className:n,jumpPage:r,disabledBG:s}=e;return t().createElement("section",{style:a,className:fe()("loading",n),"data-jump-page":r?"true":void 0},Re||(Re=t().createElement("div",{className:"loading-inner"})),s?null:Ye||(Ye=t().createElement("div",{className:"loading-bg"})))}function We(){return t().createElement(Je,{jumpPage:!0,style:{display:"none"}})}a(981),a(371),a(867);const Ve=["useSPA","path","children"];function Ue(e){const{useSPA:a,path:n,children:r}=e,s=De(e,Ve);return t().createElement("a",Te({href:n},s),r)}function Be(a){const{width:n}=a;return n?((0,e.useEffect)((()=>{P().then((()=>{window.adsTag.init({refreshAfter:e=>{W("adImpressions",e)}})}))}),[]),t().createElement(t().Fragment,null)):t().createElement(t().Fragment,null)}const Ke=t().memo(Be,((e,t)=>Object.keys(e).every((a=>e[a]===t[a]))));var Qe,Xe,Ze,et,tt,at;let nt=!1;function rt(a){const{seoLan:n,seoGames:r=[],seoExclusiveGames:s=[],seoCategory:c="",seoCategoryList:l=[],seoAbout:o,seoEnvMap:i}=a,[m,u]=(0,e.useState)(r),[d,g]=(0,e.useState)([]),[p,h]=(0,e.useState)([]),[y,E]=(0,e.useState)([]),[w,v]=(0,e.useState)(l),[b,P]=(0,e.useState)(null),[N,k]=(0,e.useState)({isPC:!1,isAndroid:!1,isPhone:!1,isTablet:!1}),j=(0,e.useRef)(null),[x,C]=(0,e.useState)(null);return(0,e.useEffect)((()=>{const e=f();k(e),(e=>{let t="";e.isPC&&(t="pc"),(e.isPhone||e.isAndroid)&&(t="mobile"),e.isTablet&&(t="pc"),document.querySelector("body").setAttribute("system",t)})(e),S(),C(j.current.offsetWidth),window.addEventListener("resize",(function(){x!==j.current.offsetWidth&&C(j.current.offsetWidth)}))}),[]),(0,e.useEffect)((()=>{x&&((e=>{const t=f(),a=t.isPhone||t.isAndroid;!a&&O(e,1788)&&(g(r.slice(0,9)),u(r.slice(9)),E(s.slice(0,9)),h(s.slice(9,63)),P(l.slice(0,9)),v(l.slice(9,45))),!a&&O(e,1588)&&(g(r.slice(0,9)),u(r.slice(9)),E(s.slice(0,8)),h(s.slice(8,72)),P(l.slice(0,8)),v(l.slice(8))),!a&&O(e,1388)&&(g(r.slice(0,8)),u(r.slice(8)),E(s.slice(0,7)),h(s.slice(7,63)),P(l.slice(0,7)),v(l.slice(7,42))),!a&&O(e,1288)&&(g(r.slice(0,6)),u(r.slice(6)),E(s.slice(0,7)),h(s.slice(7,70)),P(l.slice(0,6)),v(l.slice(6))),!a&&O(e,1188)&&(g(r.slice(0,6)),u(r.slice(6)),E(s.slice(0,6)),h(s.slice(6,66)),P(l.slice(0,6)),v(l.slice(6))),!a&&O(e,988)&&(g(r.slice(0,4)),u(r.slice(4)),E(s.slice(0,5)),h(s.slice(5,65)),P(l.slice(0,5)),v(l.slice(5,45))),!a&&O(e,788)&&(g(r.slice(0,4)),u(r.slice(4)),E(s.slice(0,4)),h(s.slice(4,68)),P(l.slice(0,4)),v(l.slice(4))),!a&&O(e,688)&&(g(r.slice(0,4)),u(r.slice(4)),E(s.slice(0,4)),h(s.slice(4,72)),P(l.slice(0,3)),v(l.slice(3))),a&&(g(r.slice(0,2)),u(r.slice(2)),h(s))})(x),nt||(W("heartbeat",{}),setInterval((()=>{document.hidden||W("heartbeat",{})}),1e4),J("PageView",{form:navigator.standalone||window.matchMedia("(display-mode: standalone)").matches?"app":"web"}),_(".game-area >.game-card",(e=>{J("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"list"})})),_(".exclusive-game .game-card",(e=>{J("GameImpression",{impressionGameList:JSON.stringify(e),campaign:"exclusive-game"})})),(e=>{const t=[];window.addEventListener("scroll",(function(){let a=Math.ceil(document.body.offsetHeight/window.innerHeight),n=Math.ceil(window.scrollY/window.innerHeight)+1;1!==n&&-1===t.indexOf(n)&&window.scrollY<=document.body.offsetHeight&&(t.push(n),e(n,a))}))})(((e,t)=>{J("PageSlip",{screen_current:e.toString(),screen_totals:t.toString()})})),nt=!0))}),[x]),t().createElement("div",{className:"games-wrap",ref:j},Qe||(Qe=t().createElement("div",{className:"bg-left"})),Xe||(Xe=t().createElement("div",{className:"bg-right"})),Ze||(Ze=t().createElement("div",{className:"bg-bottom"})),et||(et=t().createElement(We,null)),t().createElement("section",{className:"game-area"},t().createElement(Ie,{language:n}),t().createElement(Ke,{width:x}),t().createElement("div",{className:"now-categories"},c),m&&m.map(((e,a)=>t().createElement(Ee,{language:n,game:e,key:e.id,index:a,campaign:"list",system:N}))),d&&d.map(((e,a)=>t().createElement(Ee,{language:n,game:e,size:"large",key:e.id,index:a,campaign:"list",system:N,useVideo:!0})))),t().createElement("section",{className:"exclusive-game"},tt||(tt=t().createElement(Ge,{module:"purple"},"Exclusive Games")),t().createElement("div",{className:"exclusive-game-list"},p&&p.map(((e,a)=>t().createElement(Ee,{language:n,game:e,key:e.id,index:a,campaign:"exclusive-game",system:N}))),y&&y.map(((e,a)=>t().createElement(Ee,{language:n,game:e,size:"large",key:e.id,index:a,campaign:"exclusive-game",system:N}))))),t().createElement("section",{className:"recommended-categories"},at||(at=t().createElement(Ge,{module:"red"},"Recommended Categories")),t().createElement("div",{className:"recommended-categories-list"},b&&b.map((e=>t().createElement(Oe,{language:n,category:e,size:"large",campaign:"recommended-categories",key:e.id}))),w&&w.map((e=>t().createElement(Oe,{language:n,category:e,size:"small",campaign:"recommended-categories",key:e.id}))))),t().createElement(Fe,{seoAbout:o,language:n}),t().createElement(de,{language:n,envMap:i}))}let st=null;st=document.querySelector("#root"),st&&r().hydrate(t().createElement(rt,window.APP_PROPS||{}),document.querySelector("#root"))})()})();