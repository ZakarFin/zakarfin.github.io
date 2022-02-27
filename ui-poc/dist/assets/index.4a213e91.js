var y=Object.defineProperty,E=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var f=(n,s,r)=>s in n?y(n,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[s]=r,a=(n,s)=>{for(var r in s||(s={}))L.call(s,r)&&f(n,r,s[r]);if(b)for(var r of b(s))O.call(s,r)&&f(n,r,s[r]);return n},p=(n,s)=>E(n,v(s));import{j as m,s as d,r as x,R as B,a as N}from"./vendor.196f8f05.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};j();var w="/ui-poc/dist/assets/logo.ecc203fb.svg";const t=m.exports.jsx,u=m.exports.jsxs,U=d("div")`
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
`,S=d("img")`
margin: 0;
padding: 0;
background-color: green;
min-height: 100%;
    width:50px;
`,R=d("span")`
padding-left: 7px;
`;function h({name:n="N/A",icon:s=w,isOpen:r=!1,onClick:i,iconOnly:e=!1}){return u(U,{className:r?"open":"",onClick:i,children:[t(S,{src:s}),!e&&t(R,{children:n})]})}const K=d("div")`
  background-color: yellow;
  width: 100%;
  display: block;
  &.icons {
    width: 50px;
  }
`;function T({userBundles:n=[],isOpen:s=!0,onClick:r}){return n.length?u(K,{className:s?"":"icons",children:["User data:",t("br",{}),n.map(i=>t(h,{name:i,iconOnly:!s,onClick:()=>r(i)},i))]}):null}const C=d("main")`
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
`,I=["Karttatasot","Metadatahaku","Julkaisija","jee"],M=["Lis\xE4\xE4 kohde","Lis\xE4\xE4 n\xE4kym\xE4","Lis\xE4\xE4 aineisto","Lis\xE4\xE4 analyysi","Lis\xE4\xE4 tilasto","Omat tiedot"];function A({config:n={},onChange:s}){const r=e=>{const o=n.bundles.indexOf(e);s(o===-1?p(a({},n),{bundles:[...n.bundles,e]}):p(a({},n),{bundles:n.bundles.filter(l=>l!==e)}))},i=e=>{const o=n.userBundles.indexOf(e);s(o===-1?p(a({},n),{userBundles:[...n.userBundles,e]}):p(a({},n),{userBundles:n.userBundles.filter(l=>l!==e)}))};return u(C,{children:[t("h2",{children:"K\xE4ynnist\xE4/sammuta bundleja"}),I.map(e=>{const o=n.bundles.includes(e);return t("div",{children:t(g,{className:o?"inUse":"",onClick:()=>r(e),children:e},e)})}),t("h2",{children:"K\xE4ynnist\xE4/sammuta k\xE4ytt\xE4j\xE4sis\xE4lt\xF6toiminnallisuuksia"}),M.map(e=>{const o=n.userBundles.includes(e);return t("div",{children:t(g,{className:o?"inUse":"",onClick:()=>i(e),children:e},e)})})]})}const D=d("div")`
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
`;function _(){const[n,s]=x.exports.useState({bundles:[],userBundles:[]}),[r,i]=x.exports.useState(!1),[e,o]=x.exports.useState(!0),l=c=>{c==r?i(!1):i(c)},k=c=>{alert("open: "+c)};return u(D,{children:[u(F,{className:e?"":"icons",children:[t(P,{children:"Paikkatietoikkuna"}),n.bundles.map(c=>t(h,{name:c,iconOnly:!e,isOpen:c===r,onClick:()=>l(c)},c)),t(T,{userBundles:n.userBundles,isOpen:e,onClick:k}),t("br",{}),t("br",{}),t("button",{onClick:()=>o(!e),children:"Toggle"}),t("br",{}),t("br",{}),u("div",{children:["Etunimi",t("br",{}),"Sukunimi",t("br",{}),t("a",{href:"#",children:"Kirjaudu ulos"}),t("br",{}),t("br",{})]}),u("div",{children:[t("input",{placeholder:"tunnus"}),t("br",{}),t("input",{placeholder:"passu"}),t("br",{}),t("a",{href:"#",children:"Kirjaudu sis\xE4\xE4n"}),t("br",{}),t("br",{})]}),u("div",{children:[t(h,{name:"Sovelluskohtaista",isOpen:!0,iconOnly:!e}),t(h,{name:"K\xE4ytt\xF6ohje",iconOnly:!e})]})]}),t(A,{config:n,onChange:s})]})}B.render(t(N.StrictMode,{children:t(_,{})}),document.getElementById("root"));
