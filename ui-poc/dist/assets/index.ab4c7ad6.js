var y=Object.defineProperty,E=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(n,r,o)=>r in n?y(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o,a=(n,r)=>{for(var o in r||(r={}))L.call(r,o)&&f(n,o,r[o]);if(b)for(var o of b(r))B.call(r,o)&&f(n,o,r[o]);return n},p=(n,r)=>E(n,v(r));import{j as m,s as d,r as h,R as N,a as O}from"./vendor.04eb56d4.js";const j=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};j();var w="/assets/logo.ecc203fb.svg";const t=m.exports.jsx,u=m.exports.jsxs,U=d("div")`
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
`;function x({name:n="N/A",icon:r=w,isOpen:o=!1,onClick:i,iconOnly:e=!1}){return u(U,{className:o?"open":"",onClick:i,children:[t(R,{src:r}),!e&&t(S,{children:n})]})}const K=d("div")`
  background-color: yellow;
  width: 100%;
  display: block;
  &.icons {
    width: 50px;
  }
`;function T({userBundles:n=[],isOpen:r=!0,onClick:o}){return n.length?u(K,{className:r?"":"icons",children:["User data:",t("br",{}),n.map(i=>t(x,{name:i,iconOnly:!r,onClick:()=>o(i)},i))]}):null}const C=d("main")`
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
`,I=["Karttatasot","Metadatahaku","Julkaisija","jee"],M=["Lis\xE4\xE4 kohde","Lis\xE4\xE4 n\xE4kym\xE4","Lis\xE4\xE4 aineisto","Lis\xE4\xE4 analyysi","Lis\xE4\xE4 tilasto","Omat tiedot"];function A({config:n={},onChange:r}){const o=e=>{const s=n.bundles.indexOf(e);r(s===-1?p(a({},n),{bundles:[...n.bundles,e]}):p(a({},n),{bundles:n.bundles.filter(l=>l!==e)}))},i=e=>{const s=n.userBundles.indexOf(e);r(s===-1?p(a({},n),{userBundles:[...n.userBundles,e]}):p(a({},n),{userBundles:n.userBundles.filter(l=>l!==e)}))};return u(C,{children:[t("h2",{children:"K\xE4ynnist\xE4/sammuta bundleja"}),I.map(e=>{const s=n.bundles.includes(e);return t("div",{children:t(g,{className:s?"inUse":"",onClick:()=>o(e),children:e},e)})}),t("h2",{children:"K\xE4ynnist\xE4/sammuta k\xE4ytt\xE4j\xE4sis\xE4lt\xF6toiminnallisuuksia"}),M.map(e=>{const s=n.userBundles.includes(e);return t("div",{children:t(g,{className:s?"inUse":"",onClick:()=>i(e),children:e},e)})})]})}const D=d("div")`
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
`;function _(){const[n,r]=h.exports.useState({bundles:[],userBundles:[]}),[o,i]=h.exports.useState(!1),[e,s]=h.exports.useState(!0),l=c=>{c==o?i(!1):i(c)},k=c=>{alert("open: "+c)};return u(D,{children:[u(F,{className:e?"":"icons",children:[t(P,{children:"Paikkatietoikkuna"}),n.bundles.map(c=>t(x,{name:c,iconOnly:!e,isOpen:c===o,onClick:()=>l(c)},c)),t(T,{userBundles:n.userBundles,isOpen:e,onClick:k}),t("br",{}),t("br",{}),t("button",{onClick:()=>s(!e),children:"Toggle"}),t("br",{}),t("br",{}),u("div",{children:["Etunimi",t("br",{}),"Sukunimi",t("br",{}),t("a",{href:"#",children:"Kirjaudu ulos"}),t("br",{}),t("br",{})]}),u("div",{children:[t("input",{placeholder:"tunnus"}),t("br",{}),t("input",{placeholder:"passu"}),t("br",{}),t("a",{href:"#",children:"Kirjaudu sis\xE4\xE4n"}),t("br",{}),t("br",{})]}),t("div",{children:t(x,{name:"K\xE4ytt\xF6ohje",isOpen:!0,iconOnly:!e})})]}),t(A,{config:n,onChange:r})]})}N.render(t(O.StrictMode,{children:t(_,{})}),document.getElementById("root"));
