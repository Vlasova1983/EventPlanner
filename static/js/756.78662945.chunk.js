"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[756],{4756:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a,r=n(1087),l=n(8019),o=n(9439),i=n(2791),c=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){var n=e.title,r=e.titleId,l=u(e,c);return i.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,a||(a=i.createElement("path",{d:"M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z",fill:"#7B61FF"})))}var d,f=i.forwardRef(h),g=(n.p,["title","titleId"]);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e,t){var n=e.title,a=e.titleId,r=m(e,g);return i.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,d||(d=i.createElement("path",{d:"M16 8L8 16M8.00003 8L16 16",stroke:"#7B61FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var j=i.forwardRef(b),_=(n.p,"SearchForm_form__wZjMy"),v="SearchForm_input__Braqb",x="SearchForm_deleteButton__tNBJM",y="SearchForm_searchButton__q9J3Q",w="SearchForm_icon__XQHxt",O=n(184),L=function(e){var t=e.onFilter,n=e.value,a=(0,i.useState)((function(){return JSON.parse(localStorage.getItem("filter"))||n})),r=(0,o.Z)(a,2),c=r[0],s=r[1],u=(0,l.J)().lang;return(0,O.jsxs)("form",{className:_,onSubmit:function(){t(c)},children:[(0,O.jsx)("button",{type:"submit",className:y,children:(0,O.jsx)(f,{className:w,"aria-label":"icon-search"})}),"en"===u?(0,O.jsx)("input",{className:v,type:"text",autoComplete:"off",value:c,placeholder:"Search event title",onChange:function(e){s(e.target.value.toLowerCase())},id:"search"}):(0,O.jsx)("input",{className:v,type:"text",autoComplete:"off",value:c,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u043e\u0434\u0456\u0457...",onChange:function(e){return s(e.target.value.toLowerCase())},id:"search"}),(0,O.jsx)("button",{type:"button",onClick:function(){t(""),s(""),window.location.reload()},className:x,id:"search",children:(0,O.jsx)(j,{className:w,"aria-label":"icon-cross",id:"search"})})]})},C=n(1523),N=n.n(C),k=n(6651),F={changeLanguageButton:"ChangeLanguage_changeLanguageButton__bxOwg",changeLanguageButtonn:"ChangeLanguage_changeLanguageButtonn__kQH06"},S=function(){var e=(0,l.J)(),t=e.lang,n=e.setLang;return(0,O.jsxs)("button",{className:F.changeLanguageButton,to:"event",type:"button",onClick:function(){n("uk"===t?"en":"uk"),window.location.reload()},children:["en"===t?(0,O.jsx)("p",{className:F.addButtonText,children:"UK"}):(0,O.jsx)("p",{className:F.addButtonText,children:"EN"}),(0,O.jsx)(N(),{path:k.CW,size:1,color:"#3F3F3F","aria-label":"icon-arrow-down"})]})},B="Layout_layoutConteiner__kRWjv",M="Layout_title__Xj8MQ",E="Layout_box1__IbatS",Z="Layout_box2__Ht9e6",I="Layout_box3__wlQZa",H="Layout_main__S5g0a",P=function(e){var t=e.children,n=e.onFilter,a=e.value,o=(0,l.J)().lang;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("header",{className:B,children:[(0,O.jsx)("div",{className:E,children:"en"===o?(0,O.jsx)(r.rU,{children:(0,O.jsx)("span",{className:M,children:"Event Planner"})}):(0,O.jsx)(r.rU,{children:(0,O.jsx)("span",{className:M,children:"\u041f\u043b\u0430\u043d\u0443\u0432\u0430\u043b\u044c\u043d\u0438\u043a \u043f\u043e\u0434\u0456\u0439"})})}),(0,O.jsx)("div",{className:Z,children:(0,O.jsx)(L,{onFilter:n,value:a})}),(0,O.jsx)("div",{className:I,children:(0,O.jsx)(S,{})})]}),(0,O.jsx)("main",{className:H,children:t})]})}}}]);
//# sourceMappingURL=756.78662945.chunk.js.map