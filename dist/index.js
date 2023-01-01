!function(){"use strict";var e={402:function(e,n,t){var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,".modal {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; \r\n  }\r\n  \r\n  .modal-content {\r\n    width: 500px;\r\n    background-color: #fff;\r\n    border-radius: 8px; \r\n  }\r\n  \r\n  .modal-header {\r\n    font-size: 24px;\r\n    background-color: #BDBDBD;\r\n    border-radius: 8px 8px 0 0;\r\n  }\r\n\r\n  .modal-header,\r\n  .modal-footer {\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .modal-title {\r\n    margin: 0;\r\n  }\r\n  \r\n  .modal-body {\r\n    padding: 10px;\r\n    border-top: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n    text-align: center;\r\n  }",""]),n.Z=i},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var r={};!function(){t.r(r),t.d(r,{Modal:function(){return b}});var e=require("react"),n=t.n(e),o=t(379),a=t.n(o),i=t(795),c=t.n(i),s=t(569),u=t.n(s),l=t(565),d=t.n(l),f=t(216),p=t.n(f),m=t(589),v=t.n(m),y=t(402),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=u().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),a()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;var b=function(t){var r=t.onClose,o=(0,e.useCallback)((function(e){27===(e.charCode||e.keyCode)&&r()}),[r]);return(0,e.useEffect)((function(){return document.body.addEventListener("keydown",o),function(){document.body.removeEventListener("keydown",o)}}),[o]),t.show?n().createElement("div",{className:"modal",onClick:t.onClose},n().createElement("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()}},n().createElement("div",{className:"modal-header"},n().createElement("h4",{className:"modal-title"},t.title)),n().createElement("div",{className:"modal-body"},t.children),n().createElement("div",{className:"modal-footer"},n().createElement("button",{onClick:t.onClose,className:"button"},"Close")))):null}}(),module.exports=r}();