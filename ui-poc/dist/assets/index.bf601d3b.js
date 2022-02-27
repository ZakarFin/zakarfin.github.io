var y=Object.defineProperty,E=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(n,s,o)=>s in n?y(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,a=(n,s)=>{for(var o in s||(s={}))L.call(s,o)&&f(n,o,s[o]);if(b)for(var o of b(s))B.call(s,o)&&f(n,o,s[o]);return n},p=(n,s)=>E(n,v(s));import{j as m,s as d,r as h,R as N,a as O}from"./vendor.196f8f05.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};j();var w="/ui-poc/dist/assets/logo.ecc203fb.svg";const t=m.exports.jsx,u=m.exports.jsxs,U=d("div")`
    background-color: #cccccc;
    width: 100%;
    min-height: 50px;
    margin: 0;
    user-select: none;
    border: 1px black dotted;
    &:hover {
        background-color: #555555;
        color: white

    }
    &.open {
        background-color: red;
    }
`,R=d("img")`
margin: 0;
padding: 0;
background-color: green;
min-height: 100%;
    width:50px;
`,S=d("span")`
padding-left: 7px;
`;function x({name:n="N/A",icon:s=w,isOpen:o=!1,onClick:i,iconOnly:e=!1}){return u(U,{className:o?"open":"",onClick:i,children:[t(R,{src:s}),!e&&t(S,{children:n})]})}const K=d("div")`
  background-color: yellow;
  width: 100%;
  display: block;
  &.icons {
    width: 50px;
  }
`;function T({userBundles:n=[],isOpen:s=!0,onClick:o}){return n.length?u(K,{className:s?"":"icons",children:["User data:",t("br",{}),n.map(i=>t(x,{name:i,iconOnly:!s,onClick:()=>o(i)},i))]}):null}const C=d("main")`
  user-select: none;
  background-color: '#c5c5c5';
  width: 100%;
  display: 'inline-block';
  padding: 20px;
  text-align: 'center'
`,g=d("button")`
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
`,I=["Karttatasot","Metadatahaku","Julkaisija","jee"],M=["Lis\xE4\xE4 kohde","Lis\xE4\xE4 n\xE4kym\xE4","Lis\xE4\xE4 aineisto","Lis\xE4\xE4 analyysi","Lis\xE4\xE4 tilasto","Omat tiedot"];function A({config:n={},onChange:s}){const o=e=>{const r=n.bundles.indexOf(e);s(r===-1?p(a({},n),{bundles:[...n.bundles,e]}):p(a({},n),{bundles:n.bundles.filter(l=>l!==e)}))},i=e=>{const r=n.userBundles.indexOf(e);s(r===-1?p(a({},n),{userBundles:[...n.userBundles,e]}):p(a({},n),{userBundles:n.userBundles.filter(l=>l!==e)}))};return u(C,{children:[t("h2",{children:"K\xE4ynnist\xE4/sammuta bundleja"}),I.map(e=>{const r=n.bundles.includes(e);return t("div",{children:t(g,{className:r?"inUse":"",onClick:()=>o(e),children:e},e)})}),t("h2",{children:"K\xE4ynnist\xE4/sammuta k\xE4ytt\xE4j\xE4sis\xE4lt\xF6toiminnallisuuksia"}),M.map(e=>{const r=n.userBundles.includes(e);return t("div",{children:t(g,{className:r?"inUse":"",onClick:()=>i(e),children:e},e)})})]})}const D=d("div")`
  display: flex;
  height: 100%;
`,F=d("nav")`
  background-color: yellow;
  width: 20%;
  display: inline-block;
  &.icons {
    width: 50px;
  }
`,P=d("div")`
overflow: hidden;
  background-color: #8df5a7;
  width: 100%;
  min-height: 50px;
  margin: 0;
  user-select: none;
  padding-bottom: 5px;
`;function _(){const[n,s]=h.exports.useState({bundles:[],userBundles:[]}),[o,i]=h.exports.useState(!1),[e,r]=h.exports.useState(!0),l=c=>{c==o?i(!1):i(c)},k=c=>{alert("open: "+c)};return u(D,{children:[u(F,{className:e?"":"icons",children:[t(P,{children:"Paikkatietoikkuna"}),n.bundles.map(c=>t(x,{name:c,iconOnly:!e,isOpen:c===o,onClick:()=>l(c)},c)),t(T,{userBundles:n.userBundles,isOpen:e,onClick:k}),t("br",{}),t("br",{}),t("button",{onClick:()=>r(!e),children:"Toggle"}),t("br",{}),t("br",{}),u("div",{children:["Etunimi",t("br",{}),"Sukunimi",t("br",{}),t("a",{href:"#",children:"Kirjaudu ulos"}),t("br",{}),t("br",{})]}),u("div",{children:[t("input",{placeholder:"tunnus"}),t("br",{}),t("input",{placeholder:"passu"}),t("br",{}),t("a",{href:"#",children:"Kirjaudu sis\xE4\xE4n"}),t("br",{}),t("br",{})]}),t("div",{children:t(x,{name:"K\xE4ytt\xF6ohje",isOpen:!0,iconOnly:!e})})]}),t(A,{config:n,onChange:s})]})}N.render(t(O.StrictMode,{children:t(_,{})}),document.getElementById("root"));
