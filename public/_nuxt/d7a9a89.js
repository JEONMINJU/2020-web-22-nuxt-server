(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(t,e,n){"use strict";n.r(e);e.default=function(){return{list:[],view:{}}}},125:function(t,e,n){"use strict";n.r(e),e.default={GET_LIST:function(t){return t.list},GET_VIEW:function(t){return t.view}}},126:function(t,e,n){"use strict";n.r(e),e.default={MUT_LIST:function(t,e){t.list=e},MUT_VIEW:function(t,e){t.view=e}}},127:function(t,e,n){"use strict";n.r(e);n(50);var r=n(8),c=n(198);e.default={ACT_LIST:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(c.a)();case 3:r=e.sent,data=r.data,n("MUT_LIST",data);case 6:case"end":return e.stop()}}),e)})))()}}},128:function(t,e,n){"use strict";n.r(e);var r={},c=(n(241),n(28)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-wrapper"},[n("h2",[t._v("Vue/Nuxt/Vuetify/Scss를 활용한 게시판"),n("br"),n("small",[t._v("BackEnd:"),n("span",{staticClass:"ml-2"},[t._v("Express/MySQL")])])])])}],!1,null,"0cf27c44",null);e.default=component.exports},172:function(t,e,n){},173:function(t,e,n){},179:function(t,e,n){},198:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));n(31),n(50);var r=n(8),c=n(52),o=n.n(c);function l(){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get("".concat(t.env.SERVER_HOST,":").concat(t.env.SERVER_PORT,"/api/list")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,n(102))},202:function(t,e,n){"use strict";var r=n(128),c={components:{Header:n(97).default,Title:r.default}},o=(n(257),n(28)),l=n(59),f=n.n(l),d=n(282),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{staticClass:"global-wrapper",attrs:{dark:""}},[e("Header"),e("Title"),e("nuxt",{staticClass:"nuxt-wrapper"})],1)}),[],!1,null,"1314dedb",null);e.a=component.exports;f()(component,{Header:n(97).default,Title:n(128).default}),f()(component,{VApp:d.a})},203:function(t,e,n){"use strict";var r=n(28),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("Nuxt")}),[],!1,null,null,null);e.a=component.exports},215:function(t,e,n){n(216),t.exports=n(217)},241:function(t,e,n){"use strict";n(172)},242:function(t,e,n){"use strict";n(173)},257:function(t,e,n){"use strict";n(179)},259:function(t,e,n){"use strict";n.r(e);var r=n(124);n.d(e,"state",(function(){return r.default}));var c=n(125);n.d(e,"getters",(function(){return c.default}));var o=n(126);n.d(e,"mutations",(function(){return o.default}));var l=n(127);n.d(e,"actions",(function(){return l.default}))},45:function(t,e,n){"use strict";var r={props:["error"],layout:"error",head:function(){},data:function(){return{}}},c=n(28),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[404===t.error.statusCode?n("h1",[t._v("Page not found")]):n("h1",[t._v("An error occured")]),n("NuxtLink",{attrs:{to:"/"}},[t._v("Home Page")])],1)}),[],!1,null,null,null);e.a=component.exports},97:function(t,e,n){"use strict";n.r(e);var r={name:"Headers"},c=(n(242),n(28)),o=n(59),l=n.n(o),f=n(277),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-wrapper"},[n("div",{staticClass:"logo py-2 px-4"},[n("nuxt-link",{attrs:{to:"/"}},[n("v-avatar",{attrs:{color:"booldook",size:"48"}},[t._v("BK")])],1)],1),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navi-wrapper"},[n("div",{staticClass:"navi"},[n("a",{attrs:{href:"http://15.165.194.171:3000"}},[t._v("Node/Express Board")])]),n("div",{staticClass:"navi"},[n("a",{attrs:{href:"http://15.165.194.171:7000"}},[t._v("React/Next Board")])])])}],!1,null,"1fe0c4f5",null);e.default=component.exports;l()(component,{Header:n(97).default}),l()(component,{VAvatar:f.a})}},[[215,10,5,11]]]);