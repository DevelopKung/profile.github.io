(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{303:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("19efd2fb",content,!0,{sourceMap:!1})},304:function(t,e,r){var n=r(28),o=r(33),c=r(37),l=n(!1),d=o(c);l.push([t.i,".home-page{z-index:2;position:absolute;top:60%;left:20%}.home-page .name{color:#45505b !important}.block-profile .pf-img{background:url("+d+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page{text-align:center !important;left:0;right:0}}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:rgba(255,255,255,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0px;max-height:0px;border:solid;border-width:thin 0 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0px;width:0px;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=l},306:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));r(38),r(17),r(23),r(9),r(48),r(47),r(39),r(16),r(21),r(22);var n=r(2),o=r(6),c=(r(59),r(14),r(3));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=/;(?![^(]*\))/g,m=/:(.*)/;function y(style){var t,e={},r=f(style.split(h));try{for(r.s();!(t=r.n()).done;){var n=t.value.split(m),l=Object(o.a)(n,2),d=l[0],v=l[1];(d=d.trim())&&("string"==typeof v&&(v=v.trim()),e[Object(c.c)(d)]=v)}}catch(t){r.e(t)}finally{r.f()}return e}function x(){for(var t,e={},i=arguments.length;i--;)for(var r=0,n=Object.keys(arguments[i]);r<n.length;r++)switch(t=n[r]){case"class":case"directives":arguments[i][t]&&(e[t]=w(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=O(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=j(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=d(d({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function O(t,source){return t?source?(t=Object(c.u)("string"==typeof t?y(t):t)).concat("string"==typeof source?y(source):source):t:source}function w(t,source){return source?t&&t?Object(c.u)(t).concat(source):source:t}function j(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var r in e)e[r]&&(t[r]?t[r]=[].concat(e[r],t[r]):t[r]=e[r])}return t}},307:function(t,e,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("3d8b7ce1",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";r(307)},321:function(t,e,r){var n=r(28),o=r(33),c=r(37),l=n(!1),d=o(c);l.push([t.i,".home-page[data-v-a66888be]{z-index:2;position:absolute;top:60%;left:20%}.home-page .name[data-v-a66888be]{color:#45505b !important}.block-profile .pf-img[data-v-a66888be]{background:url("+d+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img[data-v-a66888be]{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data[data-v-a66888be]{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page[data-v-a66888be]{text-align:center !important;left:0;right:0}}.title[data-v-a66888be]{font-weight:bold;line-height:1.5 !important;letter-spacing:.1em !important;text-align:left !important}.detail[data-v-a66888be]{text-align:left !important}",""]),t.exports=l},324:function(t,e,r){"use strict";r(14),r(9),r(16),r(21),r(22);var n=r(2),o=(r(303),r(66));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},325:function(t,e,r){"use strict";r.r(e);var n=r(324),o={props:{title:{type:String,default:""}}},c=(r(320),r(31)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.title?e("div",{staticClass:"title mb-8"},[t._v("\r\n    "+t._s(t.title)+"\r\n    "),e(n.a)],1):t._e(),t._v(" "),e("div",{staticClass:"detail"},[t._t("default")],2)])}),[],!1,null,"a66888be",null);e.default=component.exports},346:function(t,e,r){"use strict";r.r(e);var n=r(374),o=r(324),c=r(298),l=r(373),d={components:{Box:r(325).default},props:{data:{type:Object,default:function(){}}}},f=r(31),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("Box",{attrs:{title:"INFO"}},[t._l(t.data.contact,(function(r,n){return e("div",{key:n,staticClass:"py-0 px-2 d-flex"},[e(c.a,{staticClass:"mr-3",attrs:{color:"primary",size:"36"},domProps:{textContent:t._s(r.icon)}}),t._v(" "),e("div",{staticClass:"grey--text"},[e("b",[t._v(t._s(r.title))]),t._v(" "),e("div",[e("small",[t._v(t._s(r.value))])])])],1)})),t._v(" "),e("div",{staticClass:"mt-5"},[e(o.a),t._v(" "),e(l.a,{staticClass:"my-5"},t._l(t.data.items,(function(r,o){return e(n.a,{key:o,attrs:{cols:"auto"}},[e("div",{staticClass:"pa-2 text-center"},[e("img",{attrs:{width:"40px",src:r.img}}),t._v(" "),e("div",[t._v(t._s(r.text))])])])})),1)],1)],2)],1)}),[],!1,null,"02555a34",null);e.default=component.exports}}]);