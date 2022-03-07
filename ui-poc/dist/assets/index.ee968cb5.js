var O=Object.defineProperty,j=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var y=(t,r,s)=>r in t?O(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,u=(t,r)=>{for(var s in r||(r={}))N.call(r,s)&&y(t,s,r[s]);if(k)for(var s of k(r))K.call(r,s)&&y(t,s,r[s]);return t},h=(t,r)=>j(t,w(r));import{j as v,s as d,R as f,r as b,a as S}from"./vendor.3b202245.js";const U=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};U();var C="/ui-poc/dist/assets/logo.ecc203fb.svg";const e=v.exports.jsx,c=v.exports.jsxs,R=d("div")`
    background-color: ${t=>t.theme.tile||"#cccccc"};
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
`,A=d("img")`
margin: 0;
padding: 0;
background-color: black;
min-height: 100%;
    width:50px;
`,F=d("span")`
padding-left: 7px;
`;function p({name:t="N/A",icon:r=C,isOpen:s=!1,onClick:l,iconOnly:o=!1,theme:n={}}){return c(R,{theme:n,className:s?"open":"",onClick:l,children:[e(A,{src:r}),!o&&e(F,{children:t})]})}const I=d("div")`
  background-color: ${t=>t.theme.bar||"yellow"};
  width: 100%;
  display: block;
  &.icons {
    width: 50px;
  }
`;function M({userBundles:t=[],isOpen:r=!0,onClick:s,theme:l={}}){return t.length?c(I,{theme:l,className:r?"":"icons",children:["User data:",e("br",{}),t.map(o=>e(p,{theme:l,name:o,iconOnly:!r,onClick:()=>s(o)},o))]}):null}const $=d("main")`
  user-select: none;
  background-color: '#c5c5c5';
  width: 100%;
  display: 'inline-block';
  padding: 20px;
  text-align: 'center'
`,E=d("button")`
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
`,L=["Haku","Karttatasot","Karttaselitteet","Karttajulkaisu","Teemakartat","Analyysi","K\xE4ytt\xF6ohje","Koordinaattimuunnos","Inspire"],D=["Lis\xE4\xE4 kohde","Lis\xE4\xE4 n\xE4kym\xE4","Lis\xE4\xE4 aineisto","Lis\xE4\xE4 analyysi","Lis\xE4\xE4 tilasto","Omat tiedot"];function P({config:t={},onChange:r}){const s=n=>{const i=t.bundles.indexOf(n);r(i===-1?h(u({},t),{bundles:[...t.bundles,n]}):h(u({},t),{bundles:t.bundles.filter(m=>m!==n)}))},l=n=>{const i=t.userBundles.indexOf(n);r(i===-1?h(u({},t),{userBundles:[...t.userBundles,n]}):h(u({},t),{userBundles:t.userBundles.filter(m=>m!==n)}))},o=(n,i)=>{r(h(u({},t),{theme:h(u({},t.theme),{[n]:i})}))};return c($,{children:[e("h2",{children:"K\xE4ynnist\xE4/sammuta bundleja"}),L.map(n=>{const i=t.bundles.includes(n);return e("div",{children:e(E,{className:i?"inUse":"",onClick:()=>s(n),children:n},n)})}),e("h2",{children:"K\xE4ynnist\xE4/sammuta k\xE4ytt\xE4j\xE4sis\xE4lt\xF6toiminnallisuuksia"}),D.map(n=>{const i=t.userBundles.includes(n);return e("div",{children:e(E,{className:i?"inUse":"",onClick:()=>l(n),children:n},n)})}),e("h2",{children:"Vaihda v\xE4rej\xE4"}),"Palkki: ",e("input",{type:"color",onChange:n=>o("bar",n.target.value),value:t.theme.bar}),e("br",{}),"Tile: ",e("input",{type:"color",onChange:n=>o("tile",n.target.value),value:t.theme.tile})]})}function _({isLogged:t=!1,login:r}){return t?c("div",{children:["Etunimi",e("br",{}),"Sukunimi",e("br",{}),e("a",{href:"#",onClick:()=>r(!1),children:"Kirjaudu ulos"}),e("br",{}),e("br",{})]}):c("div",{children:[e("input",{placeholder:"tunnus"}),e("br",{}),e("input",{placeholder:"passu"}),e("br",{}),e("a",{href:"#",onClick:()=>r(!0),children:"Kirjaudu sis\xE4\xE4n"}),e("br",{}),e("br",{})]})}var q="/ui-poc/dist/assets/ptilogo.42bc1c58.svg";function H({onCancel:t,iconOnly:r=!1,theme:s={}}){return c(f.Fragment,{children:[e("button",{onClick:()=>t(),children:"Takaisin"}),e(p,{name:"Aineistohaku"}),e(p,{name:"Taulukko"}),e(p,{name:"Diagrammi"})]})}const V=d("div")`
  display: flex;
  height: 100%;
`,X=d("nav")`
  background-color: ${t=>t.theme.bar||"yellow"};
  width: 20vw;
  display: inline-block;
  &.icons {
    width: 50px;
  }
`,z=d("div")`
  overflow: hidden;
  background-color: #000;
  width: 100%;
  min-height: 50px;
  margin: 0;
  padding: 10px;
  user-select: none;
  padding-bottom: 5px;
`;function G(){const[t,r]=b.exports.useState(!1),[s,l]=b.exports.useState(""),[o,n]=b.exports.useState({bundles:L,userBundles:[],theme:{tile:"#1ea8df",bar:"#aaaaaa"}}),[i,m]=b.exports.useState(!1),[x,T]=b.exports.useState(!0),g=a=>{a==i?(m(!1),a==="Teemakartat"&&l()):(m(a),a==="Teemakartat"&&l(a))},B=a=>{alert("open: "+a)};return c(V,{children:[c(X,{className:x?"":"icons",theme:o.theme,children:[e(z,{children:e("img",{src:q})}),s&&e(H,{onCancel:()=>{g("Teemakartat")}}),!s&&c(f.Fragment,{children:[o.bundles.map(a=>e(p,{name:a,theme:o.theme,iconOnly:!x,isOpen:a===i,onClick:()=>g(a)},a)),e(M,{userBundles:o.userBundles,theme:o.theme,isOpen:x,onClick:B}),e("br",{}),e("br",{}),e("button",{onClick:()=>T(!x),children:"Toggle"}),e("br",{}),e("br",{}),e(_,{isLogged:t,login:r}),c("div",{children:[e(p,{name:"Sovelluskohtaista",isOpen:!0,iconOnly:!x}),e(p,{name:"K\xE4ytt\xF6ohje",theme:o.theme})]})]})]}),e(P,{config:o,onChange:n})]})}S.render(e(f.StrictMode,{children:e(G,{})}),document.getElementById("root"));
