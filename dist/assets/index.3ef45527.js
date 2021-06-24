var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{e as o,D as n,R as u,a as c}from"./vendor.3bd61b33.js";const s=[{label:"1",order:9,type:"value",value:"1"},{label:"2",order:10,type:"value",value:"2"},{label:"3",order:11,type:"value",value:"3"},{label:"4",order:5,type:"value",value:"4"},{label:"5",order:6,type:"value",value:"5"},{label:"6",order:7,type:"value",value:"6"},{label:"7",order:1,type:"value",value:"7"},{label:"8",order:2,type:"value",value:"8"},{label:"9",order:3,type:"value",value:"9"},{label:"0",order:14,type:"value",value:"0"},{label:"DEL",extraClass:"calculator-button--action",order:4,type:"delete"},{label:"+",order:8,type:"value",value:"+"},{label:"-",order:12,type:"value",value:"-"},{label:"x",order:16,type:"value",value:"*"},{label:"/",order:15,type:"value",value:"/"},{label:"RESET",extraClass:"calculator-button--action button-reset",order:17,type:"reset"},{label:"=",order:18,extraClass:"calculator-button--result button-result",type:"result"},{label:".",order:13,type:"value",value:"."}].sort(((e,l)=>e.order-l.order)),d=["theme-dark","theme-light","theme-contrast"],i=document.querySelector("html"),m=[];let v=0,p=0,b=0,E=0,y=[],f=null;const h=e=>{const o=(l,a)=>{var t,r;let o=Math.abs(b-a);e.onRadioChange(l),f=l,p>=0&&p<=100-v&&(b>a?p-=v*o:b<a&&(p+=v*o),b=a),null==(r=document.querySelector(".radio-indicator"))||r.animate([{left:`${p}%`}],{duration:null!=(t=e.duration)?t:300,fill:"forwards"})};return n.exports.useEffect((()=>{if(f==e.value)return;const l=y.find((l=>l.value==e.value));(null==l?void 0:l.order)&&o(null==l?void 0:l.value,null==l?void 0:l.order)}),[e.value]),n.exports.useEffect((()=>{E=u.Children.toArray(e.children).length,v=Number((100/E).toFixed(2))}),[]),u.createElement("div",{className:"radio"},u.createElement("span",{className:"radio-label"},e.label),u.createElement("div",{className:"radio-group"},u.Children.map(e.children,((n,c)=>{var s;const d=((e,o)=>{for(var n in o||(o={}))a.call(o,n)&&r(e,n,o[n]);if(l)for(var n of l(o))t.call(o,n)&&r(e,n,o[n]);return e})({onRadioChange:o,name:null!=(s=e.name)?s:"radio",order:c},n.props);return y[c]=d,u.cloneElement(n,d)})),u.createElement("div",{className:"radio-wrapper"},u.createElement("div",{className:"radio-indicator"}))))},g=e=>{var l;return u.createElement("div",{className:`radio-item radio-item-${e.order}`},u.createElement("div",{className:"radio-item-label"},e.label),u.createElement("input",{type:"radio",onChange:l=>{const{value:a}=l.target;e.onRadioChange&&null!=e.order&&e.onRadioChange(a,e.order)},value:e.value,name:null==(l=e.name)?void 0:l.toLocaleLowerCase().replace(/\s/g,"")}))},N=()=>{const[e,l]=n.exports.useState("0"),[a,t]=n.exports.useState(null),[r,c]=n.exports.useState(d[0]),[v,p]=n.exports.useState(!1),b=((e,l,a)=>function(t,r,n=!1){let{value:u,type:c,label:s}=r;if(n&&a(!1),"reset"==c)e(null),l("0");else if("delete"==c){if(!t)return;let a="0";const r=t.length;r>1?(a=t.substring(0,r-1),e(a),l(a)):(e(null),l(a))}else if("result"==c){if(!t)return;try{const a=`${o(t)}`;e(a),l(a)}catch(d){l(d.message),e(null),a(!0)}}else if("value"==c){if(!u)return;t?t.length<14&&(e(`${t}${u}`),l(`${t}${s}`)):(e(`${u}`),l(`${s}`))}})(t,l,p);return n.exports.useEffect((()=>{c("theme-dark")}),[]),n.exports.useEffect((()=>{!function(e){i&&(i.dataset.theme=`${e}`);for(const l of m)document.querySelectorAll(l).forEach((l=>{l.dataset.theme=`${e}`}))}(r)}),[r]),n.exports.useEffect((()=>{}),[v]),u.createElement("div",{className:"calculator "+(v?"calculator--error":"")},u.createElement("div",{className:"calculator-header"},u.createElement("span",{className:"calculator-title"},"calc"),u.createElement("div",{className:""},u.createElement(h,{onRadioChange:c,value:r,label:"THEME"},d.map(((e,l)=>u.createElement(g,{label:l+1,value:e,key:l})))))),u.createElement("div",{className:"calculator-result"},u.createElement("span",null,e)),u.createElement("div",{className:"calculator-keyboard"},s.map(((e,l)=>u.createElement("button",{onClick:()=>{b(a,e,v)},key:l,className:`calculator-button ${e.extraClass}`},u.createElement("span",null,e.label))))))};function x(){return u.createElement("div",{className:"app"},u.createElement("div",{className:"container"},u.createElement(N,null)))}c.render(u.createElement(u.StrictMode,null,u.createElement(x,null)),document.getElementById("root"));
