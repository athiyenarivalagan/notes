(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(52)},50:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),u=n(19),i=n(3),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=n(5),s=n.n(f),p=" https://shielded-springs-25528.herokuapp.com/api/notes",d=function(){var t=s.a.get(p),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then(function(t){return t.data.concat(e)})},v=function(t){return s.a.post(p,t).then(function(t){return t.data})},E=function(t,e){return s.a.put("".concat(p,"/").concat(t),e).then(function(t){return t.data})},b=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2022"))},h=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),o=n[0],c=n[1],f=Object(a.useState)(""),s=Object(i.a)(f,2),p=s[0],h=s[1],g=Object(a.useState)(!0),O=Object(i.a)(g,2),j=O[0],S=O[1],k=Object(a.useState)(null),w=Object(i.a)(k,2),y=w[0],N=w[1];Object(a.useEffect)(function(){d().then(function(t){c(t)})},[]);var C=j?o:o.filter(function(t){return t.important});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:y}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return S(!j)}},"show ",j?"important":"all")),r.a.createElement("ul",null,C.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=o.find(function(e){return e.id===t}),n=Object(u.a)({},e,{important:!e.important});console.log(n),E(t,n).then(function(e){c(o.map(function(n){return n.id!==t?n:e}))}).catch(function(n){N("Note '".concat(e.content,"' was already removed from server")),setTimeout(function(){N(null)},5e3),c(o.filter(function(e){return e.id!==t}))})}(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:p,date:(new Date).toISOString(),important:Math.random()<.5};v(e).then(function(t){c(o.concat(t)),h("")})}},r.a.createElement("input",{value:p,onChange:function(t){h(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(b,null))};n(50);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(h,null))}},[[20,2,1]]]);
//# sourceMappingURL=main.ac763c18.chunk.js.map