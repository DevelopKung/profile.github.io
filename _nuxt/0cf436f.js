(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{302:function(t,e,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("2dd425b5",content,!0,{sourceMap:!1})},303:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("19efd2fb",content,!0,{sourceMap:!1})},304:function(t,e,r){var o=r(28),n=r(33),l=r(37),d=o(!1),c=n(l);d.push([t.i,".home-page{z-index:2;position:absolute;top:60%;left:20%}.home-page .name{color:#45505b !important}.block-profile .pf-img{background:url("+c+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page{text-align:center !important;left:0;right:0}}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:rgba(255,255,255,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0px;max-height:0px;border:solid;border-width:thin 0 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0px;width:0px;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=d},311:function(t,e,r){"use strict";r(302)},312:function(t,e,r){var o=r(28),n=r(33),l=r(37),d=o(!1),c=n(l);d.push([t.i,".home-page[data-v-0a622c3a]{z-index:2;position:absolute;top:60%;left:20%}.home-page .name[data-v-0a622c3a]{color:#45505b !important}.block-profile .pf-img[data-v-0a622c3a]{background:url("+c+") center no-repeat;background-size:cover;height:240px;position:relative}.block-profile .pf-img .img[data-v-0a622c3a]{position:absolute;bottom:-60px;margin-left:auto;margin-right:auto;left:0;right:0;border-radius:50%;padding:20px;border:2px solid #eee}.block-profile .pf-data[data-v-0a622c3a]{width:100%;margin-top:70px;text-align:center}@media only screen and (max-width: 960px){.home-page[data-v-0a622c3a]{text-align:center !important;left:0;right:0}}.title[data-v-0a622c3a]{font-weight:300;line-height:1.5 !important;letter-spacing:.2em !important;text-align:left !important}.detail[data-v-0a622c3a]{text-align:left !important}",""]),t.exports=d},313:function(t,e,r){"use strict";r.r(e);var o=r(324),n={props:{title:{type:String,default:""}}},l=(r(311),r(31)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.title?e("div",{staticClass:"title mb-3 grey--text"},[t._v("\r\n    "+t._s(t.title)+"\r\n    "),e(o.a)],1):t._e(),t._v(" "),e("div",{staticClass:"detail"},[t._t("default")],2)])}),[],!1,null,"0a622c3a",null);e.default=component.exports},324:function(t,e,r){"use strict";r(14),r(9),r(16),r(21),r(22);var o=r(2),n=(r(303),r(66));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},347:function(t,e,r){"use strict";r.r(e);var o=r(351),n=r(300),l=r(374),d=r(348),c=r(373),v={components:{Box:r(313).default},props:{data:{type:Object,default:function(){}}}},h=r(31),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("Box",[e(o.a,{attrs:{elevation:"0"}},[e(n.c,[t._v("Skill and Expertize")]),t._v(" "),e(n.b,[e(c.a,t._l(t.data.skill,(function(r,o){return e(l.a,{key:o,staticClass:"px-6",attrs:{cols:"12",sm:"6"}},[e("img",{class:0==o?"mb-2":"",attrs:{width:"20",src:r.img}}),t._v(" "),e("b",{staticClass:"ml-4"},[t._v(" "+t._s(r.text)+" ")]),t._v(" "),e(d.a,{attrs:{rounded:"",color:r.color,height:"10",value:r.power,striped:""}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,"9ef38160",null);e.default=component.exports}}]);