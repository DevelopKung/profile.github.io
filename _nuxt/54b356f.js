(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{306:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));r(38),r(17),r(23),r(9),r(48),r(47),r(39),r(16),r(21),r(22);var n=r(2),o=r(6),c=(r(59),r(14),r(3));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m=/;(?![^(]*\))/g,v=/:(.*)/;function y(style){var t,e={},r=h(style.split(m));try{for(r.s();!(t=r.n()).done;){var n=t.value.split(v),l=Object(o.a)(n,2),d=l[0],f=l[1];(d=d.trim())&&("string"==typeof f&&(f=f.trim()),e[Object(c.c)(d)]=f)}}catch(t){r.e(t)}finally{r.f()}return e}function x(){for(var t,e={},i=arguments.length;i--;)for(var r=0,n=Object.keys(arguments[i]);r<n.length;r++)switch(t=n[r]){case"class":case"directives":arguments[i][t]&&(e[t]=S(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=_(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=O(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=d(d({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function _(t,source){return t?source?(t=Object(c.u)("string"==typeof t?y(t):t)).concat("string"==typeof source?y(source):source):t:source}function S(t,source){return source?t&&t?Object(c.u)(t).concat(source):source:t}function O(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var r in e)e[r]&&(t[r]?t[r]=[].concat(e[r],t[r]):t[r]=e[r])}return t}},308:function(t,e,r){t.exports=r.p+"img/me.ddd1b1f.jpg"},309:function(t,e,r){"use strict";r.r(e);var n=r(310),o=r.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},310:function(t,e){},314:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("7393b465",content,!0,{sourceMap:!1})},315:function(t,e,r){var n=r(28),o=r(33),c=r(37),l=n(!1),d=o(c);l.push([t.i,".home-page{z-index:2;position:absolute;top:60%;left:20%}.home-page .name{color:#45505b !important}.block-profile .pf-img{background:url("+d+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page{text-align:center !important;left:0;right:0}}.theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=l},316:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("40d03d44",content,!0,{sourceMap:!1})},317:function(t,e,r){var n=r(28),o=r(33),c=r(37),l=n(!1),d=o(c);l.push([t.i,".home-page{z-index:2;position:absolute;top:60%;left:20%}.home-page .name{color:#45505b !important}.block-profile .pf-img{background:url("+d+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page{text-align:center !important;left:0;right:0}}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(0.25, 0.8, 0.5, 1);flex:1 0 0px}",""]),t.exports=l},318:function(t,e,r){var content=r(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("27d08ea2",content,!0,{sourceMap:!1})},328:function(t,e,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("87fc290e",content,!0,{sourceMap:!1})},329:function(t,e,r){var n=r(28),o=r(33),c=r(37),l=n(!1),d=o(c);l.push([t.i,".home-page{z-index:2;position:absolute;top:60%;left:20%}.home-page .name{color:#45505b !important}.block-profile .pf-img{background:url("+d+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page{text-align:center !important;left:0;right:0}}.v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar img,.v-avatar svg,.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),t.exports=l},330:function(t,e,r){"use strict";r(318)},331:function(t,e,r){var n=r(28),o=r(33),c=r(37),l=n(!1),d=o(c);l.push([t.i,".home-page[data-v-b904ae82]{z-index:2;position:absolute;top:60%;left:20%}.home-page .name[data-v-b904ae82]{color:#45505b !important}.block-profile .pf-img[data-v-b904ae82]{background:url("+d+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img[data-v-b904ae82]{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data[data-v-b904ae82]{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page[data-v-b904ae82]{text-align:center !important;left:0;right:0}}.name[data-v-b904ae82]{padding:20px 0}",""]),t.exports=l},335:function(t,e,r){"use strict";r.d(e,"a",(function(){return x})),r.d(e,"b",(function(){return _}));r(14),r(9),r(16),r(21),r(22);var n=r(2),o=(r(57),r(328),r(68)),c=r(125),l=r(129),d=r(3),h=r(45);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(h.a)(o.a,c.a,l.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return m({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return m({height:Object(d.g)(this.size),minWidth:Object(d.g)(this.size),width:Object(d.g)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}}),y=r(349),x=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-md-center"},[e(v,{attrs:{color:"grey lighten-4",size:"200"}},[e(y.a,{attrs:{src:r(308),"lazy-src":r(308),"aspect-ratio":"1"}})],1),t._v(" "),t._m(0)],1)},_=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"name"},[e("h2",[t._v("ATIWAT SUTTISAK")]),t._v(" "),e("small",[e("b",[t._v("TUMKUNG Developer")])])])}]},339:function(t,e,r){"use strict";r.r(e);var n=r(335),o=r(309);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);r(330);var l=r(31),component=Object(l.a)(o.default,n.a,n.b,!1,null,"b904ae82",null);e.default=component.exports},349:function(t,e,r){"use strict";var n=r(5),o=(r(57),r(182),r(67),r(314),r(127)),c=(r(316),r(125)),l=r(45),d=r(3),h=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(d.l)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),f=r(66),m=r(306),v=r(7),y="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(h,f.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!y||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(v.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(d.l)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(m.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:y?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})}}]);