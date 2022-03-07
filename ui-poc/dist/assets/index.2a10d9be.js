var S=Object.defineProperty,B=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var v=(t,o,r)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,x=(t,o)=>{for(var r in o||(o={}))N.call(o,r)&&v(t,r,o[r]);if(f)for(var r of f(o))C.call(o,r)&&v(t,r,o[r]);return t},m=(t,o)=>B(t,K(o));import{j,s as h,R as _,r as y,a as U}from"./vendor.e674a15f.js";const M=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};M();var n="/ui-poc/dist/assets/logo.70aa190a.svg";const e=j.exports.jsx,c=j.exports.jsxs,R=h("div")`
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
`,P=h("img")`
margin: 0;
padding: 0;
background-color: black;
min-height: 100%;
    width:50px;
`,A=h("span")`
padding-left: 7px;
`;function p({name:t="N/A",icon:o=n,isOpen:r=!1,onClick:d,iconOnly:a=!1,theme:i={}}){return c(R,{theme:i,className:r?"open":"",onClick:d,children:[e(P,{src:o}),!a&&e(A,{children:t})]})}const D=h("div")`
  background-color: ${t=>t.theme.bar||"yellow"};
  width: 100%;
  display: block;
  &.icons {
    width: 50px;
  }
`;function F({userBundles:t=[],isOpen:o=!0,onClick:r,theme:d={}}){return t.length?c(D,{theme:d,className:o?"":"icons",children:["User data:",e("br",{}),t.map(a=>e(p,{theme:d,name:a,iconOnly:!o,onClick:()=>r(a)},a))]}):null}const I=h("main")`
  user-select: none;
  background-color: '#c5c5c5';
  width: 100%;
  display: 'inline-block';
  padding: 20px;
  text-align: 'center'
`,w=h("button")`
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
`,T=["Haku","Karttatasot","Karttaselitteet","Karttajulkaisu","Teemakartat","Analyysi","K\xE4ytt\xF6ohje","Koordinaattimuunnos","Inspire"],$=["Lis\xE4\xE4 kohde","Lis\xE4\xE4 n\xE4kym\xE4","Lis\xE4\xE4 aineisto","Lis\xE4\xE4 analyysi","Lis\xE4\xE4 tilasto","Omat tiedot"];function V({config:t={},onChange:o}){const r=i=>{const s=t.bundles.indexOf(i);o(s===-1?m(x({},t),{bundles:[...t.bundles,i]}):m(x({},t),{bundles:t.bundles.filter(k=>k!==i)}))},d=i=>{const s=t.userBundles.indexOf(i);o(s===-1?m(x({},t),{userBundles:[...t.userBundles,i]}):m(x({},t),{userBundles:t.userBundles.filter(k=>k!==i)}))},a=(i,s)=>{o(m(x({},t),{theme:m(x({},t.theme),{[i]:s})}))};return c(I,{children:[e("h2",{children:"K\xE4ynnist\xE4/sammuta bundleja"}),T.map(i=>{const s=t.bundles.includes(i);return e("div",{children:e(w,{className:s?"inUse":"",onClick:()=>r(i),children:i},i)})}),e("h2",{children:"K\xE4ynnist\xE4/sammuta k\xE4ytt\xE4j\xE4sis\xE4lt\xF6toiminnallisuuksia"}),$.map(i=>{const s=t.userBundles.includes(i);return e("div",{children:e(w,{className:s?"inUse":"",onClick:()=>d(i),children:i},i)})}),e("h2",{children:"Vaihda v\xE4rej\xE4"}),"Palkki: ",e("input",{type:"color",onChange:i=>a("bar",i.target.value),value:t.theme.bar}),e("br",{}),"Tile: ",e("input",{type:"color",onChange:i=>a("tile",i.target.value),value:t.theme.tile})]})}function z({isLogged:t=!1,login:o}){return t?c("div",{children:["Etunimi",e("br",{}),"Sukunimi",e("br",{}),e("a",{href:"#",onClick:()=>o(!1),children:"Kirjaudu ulos"}),e("br",{}),e("br",{})]}):c("div",{children:[e("input",{placeholder:"tunnus"}),e("br",{}),e("input",{placeholder:"passu"}),e("br",{}),e("a",{href:"#",onClick:()=>o(!0),children:"Kirjaudu sis\xE4\xE4n"}),e("br",{}),e("br",{})]})}var H="/ui-poc/dist/assets/ptilogo.42bc1c58.svg";function q({onCancel:t,iconOnly:o=!1,theme:r={}}){return c(_.Fragment,{children:[e("button",{onClick:()=>t(),children:"Takaisin"}),e(p,{name:"Aineistohaku"}),e(p,{name:"Taulukko"}),e(p,{name:"Diagrammi"})]})}const b=h("div")`
border-top: 1px solid;
line-height: 10px;
padding: 0 10px;
`,l=h("div")`
display: inline-block;
cursor: pointer;
width: 32px;
height: 32px;
&:hover {
    background-color: black;
}
`;function X({name:t="N/A",icon:o=n,isOpen:r=!1,onCancel:d,iconOnly:a=!1,theme:i={}}){return c("div",{id:"toolbar",class:"toolbar_default",children:[c(b,{children:[e(l,{title:"Palaa alkutilaan",id:"oskari_toolbar_history_reset","data-icon":"tool-reset",children:e("img",{src:n})}),e(l,{title:"Siirry edelliseen n\xE4kym\xE4\xE4n",id:"oskari_toolbar_history_history_back","data-icon":"tool-history-back",children:e("img",{src:n})}),e(l,{title:"Siirry seuraavaan n\xE4kym\xE4\xE4n",id:"oskari_toolbar_history_history_forward","data-icon":"tool-history-forward",children:e("img",{src:n})})]}),c(b,{children:[e(l,{title:"L\xE4henn\xE4 karttaa",id:"oskari_toolbar_basictools_zoombox","data-icon":"tool-zoombox",children:e("img",{src:n})}),e(l,{title:"Siirr\xE4 karttaa hiirell\xE4 raahaamalla",id:"oskari_toolbar_basictools_select","data-icon":"tool-pan",children:e("img",{src:n})}),e(l,{title:"Mittaa et\xE4isyys pisteiden v\xE4lill\xE4",id:"oskari_toolbar_basictools_measureline","data-icon":"tool-measure-line",children:e("img",{src:n})}),e(l,{title:"Mittaa alueen pinta-ala",id:"oskari_toolbar_basictools_measurearea","data-icon":"tool-measure-area",children:e("img",{src:n})}),e(l,{title:"Maastoprofiili",id:"oskari_toolbar_basictools_TerrainProfile","data-icon":"tool-terrainprofile",children:e("img",{src:n})}),e(l,{title:"Vertaa ylint\xE4 karttatasoa alempiin karttatasoihin",id:"oskari_toolbar_basictools_LayerSwipe","data-icon":"tool-layer-swipe",children:e("img",{src:n})})]}),c(b,{children:[e(l,{title:"Tallenna n\xE4kym\xE4",id:"oskari_toolbar_viewtools_save_view","data-icon":"tool-save-view",children:e("img",{src:n})}),e(l,{title:"Tee linkki karttan\xE4kym\xE4\xE4n",id:"oskari_toolbar_viewtools_link","data-icon":"tool-link",children:e("img",{src:n})}),e(l,{title:"Tulosta nykyinen karttan\xE4kym\xE4 png-kuvaksi tai pdf-tiedostoon.",id:"oskari_toolbar_viewtools_print","data-icon":"tool-print",children:e("img",{src:n})})]}),c(b,{children:[e(l,{title:"Tee karttamerkint\xE4",id:"oskari_toolbar_selectiontools_addMarker","data-icon":"marker-share",children:e("img",{src:n})}),e(l,{title:"Piirr\xE4 geometria ja valitse sen avulla kohteet.",id:"oskari_toolbar_selectiontools_dialog","data-icon":"tool-feature-selection",children:e("img",{src:n})}),e(l,{title:"Klikkaa pistett\xE4 kartalla. Hakutuloksena saat pisteen koordinaatit ja pistett\xE4 l\xE4himm\xE4n osoitteen.",id:"oskari_toolbar_selectiontools_findbycoordinates","data-icon":"icon-find-nearest-address",children:e("img",{src:n})})]}),c(b,{children:[e(l,{title:"Piirr\xE4 piste ja lis\xE4\xE4 se omiin kohteisiin. Voit liitt\xE4\xE4 saman kohteeseen useampia pisteit\xE4. - Kirjaudu sis\xE4\xE4n, jotta voit lis\xE4t\xE4 kohteita.",id:"oskari_toolbar_myplaces_point","data-icon":"myplaces-draw-point",children:e("img",{src:n})}),e(l,{title:"Piirr\xE4 viiva ja lis\xE4\xE4 se omiin kohteisiin. - Kirjaudu sis\xE4\xE4n, jotta voit lis\xE4t\xE4 kohteita.",id:"oskari_toolbar_myplaces_line","data-icon":"myplaces-draw-line",children:e("img",{src:n})}),e(l,{title:"Piirr\xE4 alue ja lis\xE4\xE4 se omiin kohteisiin. - Kirjaudu sis\xE4\xE4n, jotta voit lis\xE4t\xE4 kohteita.",id:"oskari_toolbar_myplaces_area","data-icon":"myplaces-draw-area",children:e("img",{src:n})}),e(l,{title:"Omien aineistojen tuonti",id:"oskari_toolbar_myplaces_import","data-icon":"upload-material"})]}),e(b,{children:e(l,{title:"Siirry 3D-n\xE4kym\xE4\xE4n. K\xE4ytett\xE4viss\xE4 vain osa karttatasoista ja ty\xF6kaluista.",id:"oskari_toolbar_dimensionviews_DimensionChange","data-icon":"dimension-tool",children:e("img",{src:n})})})]})}const G=h("div")`
  display: flex;
  height: 100%;
`,J=h("nav")`
  background-color: ${t=>t.theme.bar||"yellow"};
  width: 20vw;
  display: inline-block;
  &.icons {
    width: 50px;
  }
`,Q=h("div")`
border-top: 1px solid black;
border-bottom: 1px solid black;
`,W=h("div")`
  overflow: hidden;
  background-color: #000;
  width: 100%;
  min-height: 50px;
  margin: 0;
  padding: 10px;
  user-select: none;
  padding-bottom: 5px;
`;function Y(){const[t,o]=y.exports.useState(!1),[r,d]=y.exports.useState(""),[a,i]=y.exports.useState({bundles:T,userBundles:[],theme:{tile:"#1ea8df",bar:"#aaaaaa"}}),[s,k]=y.exports.useState(!1),[E,L]=y.exports.useState(!0),g=u=>{u==s?(k(!1),u==="Teemakartat"&&d()):(k(u),u==="Teemakartat"&&d(u))},O=u=>{alert("open: "+u)};return c(G,{children:[c(J,{className:E?"":"icons",theme:a.theme,children:[e(W,{children:e("img",{src:H})}),r==="Teemakartat"&&e(q,{onCancel:()=>{g("Teemakartat")}}),!r&&c(_.Fragment,{children:[a.bundles.map(u=>e(p,{name:u,theme:a.theme,iconOnly:!E,isOpen:u===s,onClick:()=>g(u)},u)),e(F,{userBundles:a.userBundles,theme:a.theme,isOpen:E,onClick:O}),e("br",{}),e("br",{}),e("button",{onClick:()=>L(!E),children:"Toggle"}),e("br",{}),e("br",{}),e(z,{isLogged:t,login:o}),e(Q,{children:"Sovelluksen hallinnassa"}),e(p,{name:"Sovelluskohtaista",isOpen:!0,iconOnly:!E}),e(p,{name:"K\xE4ytt\xF6ohje",theme:a.theme})]}),e(X,{onCancel:()=>{g("Toolbar")},iconOnly:r==="Toolbar"})]}),e(V,{config:a,onChange:i})]})}U.render(e(_.StrictMode,{children:e(Y,{})}),document.getElementById("root"));
