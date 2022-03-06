var j=Object.defineProperty,w=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var f=(e,r,o)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))N.call(r,o)&&f(e,o,r[o]);if(m)for(var o of m(r))O.call(r,o)&&f(e,o,r[o]);return e},h=(e,r)=>w(e,B(r));import{j as y,s as a,r as x,R as K,a as U}from"./vendor.196f8f05.js";const S=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};S();var T="/ui-poc/dist/assets/logo.ecc203fb.svg";const t=y.exports.jsx,d=y.exports.jsxs,C=a("div")`
    background-color: ${e=>e.theme.tile||"#cccccc"};
    width: 100%;
    min-height: 50px;
    margin: 0;
    user-select: none;
    border-bottom: 1px black dotted;
    &:hover {
        background-color: #555555;
        color: white

    }
    &.open {
        background-color: red;
    }
`,R=a("img")`
margin: 0;
padding: 0;
background-color: black;
min-height: 100%;
    width:50px;
`,A=a("span")`
padding-left: 7px;
`;function b({name:e="N/A",icon:r=T,isOpen:o=!1,onClick:l,iconOnly:s=!1,theme:n={}}){return d(C,{theme:n,className:o?"open":"",onClick:l,children:[t(R,{src:r}),!s&&t(A,{children:e})]})}const I=a("div")`
  background-color: ${e=>e.theme.bar||"yellow"};
  width: 100%;
  display: block;
  &.icons {
    width: 50px;
  }
`;function $({userBundles:e=[],isOpen:r=!0,onClick:o,theme:l={}}){return e.length?d(I,{theme:l,className:r?"":"icons",children:["User data:",t("br",{}),e.map(s=>t(b,{theme:l,name:s,iconOnly:!r,onClick:()=>o(s)},s))]}):null}const D=a("main")`
  user-select: none;
  background-color: '#c5c5c5';
  width: 100%;
  display: 'inline-block';
  padding: 20px;
  text-align: 'center'
`,g=a("button")`
  color: green;
    &::before {
      content: '[+] '
    }
  &.inUse {
    color: red;
    &::before {
      content: '[X] '
    }
  }
`,k=["Haku","Karttatasot","Karttaselitteet","Karttajulkaisu","Teemakartat","Analyysi","K\xE4ytt\xF6ohje","Koordinaattimuunnos","Inspire"],E=["Lis\xE4\xE4 kohde","Lis\xE4\xE4 n\xE4kym\xE4","Lis\xE4\xE4 aineisto","Lis\xE4\xE4 analyysi","Lis\xE4\xE4 tilasto","Omat tiedot"];function F({config:e={},onChange:r}){const o=n=>{const i=e.bundles.indexOf(n);r(i===-1?h(u({},e),{bundles:[...e.bundles,n]}):h(u({},e),{bundles:e.bundles.filter(p=>p!==n)}))},l=n=>{const i=e.userBundles.indexOf(n);r(i===-1?h(u({},e),{userBundles:[...e.userBundles,n]}):h(u({},e),{userBundles:e.userBundles.filter(p=>p!==n)}))},s=(n,i)=>{r(h(u({},e),{theme:h(u({},e.theme),{[n]:i})}))};return d(D,{children:[t("h2",{children:"K\xE4ynnist\xE4/sammuta bundleja"}),k.map(n=>{const i=e.bundles.includes(n);return t("div",{children:t(g,{className:i?"inUse":"",onClick:()=>o(n),children:n},n)})}),t("h2",{children:"K\xE4ynnist\xE4/sammuta k\xE4ytt\xE4j\xE4sis\xE4lt\xF6toiminnallisuuksia"}),E.map(n=>{const i=e.userBundles.includes(n);return t("div",{children:t(g,{className:i?"inUse":"",onClick:()=>l(n),children:n},n)})}),t("h2",{children:"Vaihda v\xE4rej\xE4"}),"Palkki: ",t("input",{type:"color",onChange:n=>s("bar",n.target.value),value:e.theme.bar}),t("br",{}),"Tile: ",t("input",{type:"color",onChange:n=>s("tile",n.target.value),value:e.theme.tile})]})}function M({isLogged:e=!1,login:r}){return e?d("div",{children:["Etunimi",t("br",{}),"Sukunimi",t("br",{}),t("a",{href:"#",onClick:()=>r(!1),children:"Kirjaudu ulos"}),t("br",{}),t("br",{})]}):d("div",{children:[t("input",{placeholder:"tunnus"}),t("br",{}),t("input",{placeholder:"passu"}),t("br",{}),t("a",{href:"#",onClick:()=>r(!0),children:"Kirjaudu sis\xE4\xE4n"}),t("br",{}),t("br",{})]})}var P="/ui-poc/dist/assets/ptilogo.42bc1c58.svg";const _=a("div")`
  display: flex;
  height: 100%;
`,q=a("nav")`
  background-color: ${e=>e.theme.bar||"yellow"};
  width: 20vw;
  display: inline-block;
  &.icons {
    width: 50px;
  }
`,H=a("div")`
  overflow: hidden;
  background-color: #000;
  width: 100%;
  min-height: 50px;
  margin: 0;
  padding: 10px;
  user-select: none;
  padding-bottom: 5px;
`;function V(){const[e,r]=x.exports.useState(!1),[o,l]=x.exports.useState({bundles:k,userBundles:E,theme:{tile:"#1ea8df",bar:"#aaaaaa"}}),[s,n]=x.exports.useState(!1),[i,p]=x.exports.useState(!0),v=c=>{c==s?n(!1):n(c)},L=c=>{alert("open: "+c)};return d(_,{children:[d(q,{className:i?"":"icons",theme:o.theme,children:[t(H,{children:t("img",{src:P})}),o.bundles.map(c=>t(b,{name:c,theme:o.theme,iconOnly:!i,isOpen:c===s,onClick:()=>v(c)},c)),t($,{userBundles:o.userBundles,theme:o.theme,isOpen:i,onClick:L}),t("br",{}),t("br",{}),t("button",{onClick:()=>p(!i),children:"Toggle"}),t("br",{}),t("br",{}),t(M,{isLogged:e,login:r}),d("div",{children:[t(b,{name:"Sovelluskohtaista",isOpen:!0,iconOnly:!i}),t(b,{name:"K\xE4ytt\xF6ohje",theme:o.theme})]})]}),t(F,{config:o,onChange:l})]})}K.render(t(U.StrictMode,{children:t(V,{})}),document.getElementById("root"));
