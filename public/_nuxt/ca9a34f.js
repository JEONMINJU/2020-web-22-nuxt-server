(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{448:function(t,e,n){"use strict";(function(t){n(31),n(50);var r=n(8),j=n(52),l=n.n(j),c=n(283),o=n.n(c),d=n(449);e.a={name:"detail.id",layout:"layout-default",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,l.a.get("http://15.165.194.171:3000/api/view/".concat(n.id));case 3:return r=e.sent,data=r.data,(j=data).wdate=o()(j.created).format("YYYY-MM-DD HH:mm:ss"),j.savefile&&(j.file=Object(d.a)(j.savefile),j.isImg=Object(d.b)(j.savefile)),e.abrupt("return",{list:j});case 9:case"end":return e.stop()}}),e)})))()},methods:{downloadLink:function(e){return"".concat(t.env.SERVER,"/api/download/").concat(e)}}}}).call(this,n(102))},449:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(31),n(47);var r=n(286),j=n.n(r),l=function(t){return[".jpg",".jpeg",".png",".gif"].includes(j.a.extname(t).toLocaleLowerCase())},c=function(e){return"".concat(t.env.SERVER,"/storages/").concat(e.substr(0,9),"/").concat(e)}}).call(this,n(102))},466:function(t,e,n){var map={"./af":292,"./af.js":292,"./ar":293,"./ar-dz":294,"./ar-dz.js":294,"./ar-kw":295,"./ar-kw.js":295,"./ar-ly":296,"./ar-ly.js":296,"./ar-ma":297,"./ar-ma.js":297,"./ar-sa":298,"./ar-sa.js":298,"./ar-tn":299,"./ar-tn.js":299,"./ar.js":293,"./az":300,"./az.js":300,"./be":301,"./be.js":301,"./bg":302,"./bg.js":302,"./bm":303,"./bm.js":303,"./bn":304,"./bn-bd":305,"./bn-bd.js":305,"./bn.js":304,"./bo":306,"./bo.js":306,"./br":307,"./br.js":307,"./bs":308,"./bs.js":308,"./ca":309,"./ca.js":309,"./cs":310,"./cs.js":310,"./cv":311,"./cv.js":311,"./cy":312,"./cy.js":312,"./da":313,"./da.js":313,"./de":314,"./de-at":315,"./de-at.js":315,"./de-ch":316,"./de-ch.js":316,"./de.js":314,"./dv":317,"./dv.js":317,"./el":318,"./el.js":318,"./en-au":319,"./en-au.js":319,"./en-ca":320,"./en-ca.js":320,"./en-gb":321,"./en-gb.js":321,"./en-ie":322,"./en-ie.js":322,"./en-il":323,"./en-il.js":323,"./en-in":324,"./en-in.js":324,"./en-nz":325,"./en-nz.js":325,"./en-sg":326,"./en-sg.js":326,"./eo":327,"./eo.js":327,"./es":328,"./es-do":329,"./es-do.js":329,"./es-mx":330,"./es-mx.js":330,"./es-us":331,"./es-us.js":331,"./es.js":328,"./et":332,"./et.js":332,"./eu":333,"./eu.js":333,"./fa":334,"./fa.js":334,"./fi":335,"./fi.js":335,"./fil":336,"./fil.js":336,"./fo":337,"./fo.js":337,"./fr":338,"./fr-ca":339,"./fr-ca.js":339,"./fr-ch":340,"./fr-ch.js":340,"./fr.js":338,"./fy":341,"./fy.js":341,"./ga":342,"./ga.js":342,"./gd":343,"./gd.js":343,"./gl":344,"./gl.js":344,"./gom-deva":345,"./gom-deva.js":345,"./gom-latn":346,"./gom-latn.js":346,"./gu":347,"./gu.js":347,"./he":348,"./he.js":348,"./hi":349,"./hi.js":349,"./hr":350,"./hr.js":350,"./hu":351,"./hu.js":351,"./hy-am":352,"./hy-am.js":352,"./id":353,"./id.js":353,"./is":354,"./is.js":354,"./it":355,"./it-ch":356,"./it-ch.js":356,"./it.js":355,"./ja":357,"./ja.js":357,"./jv":358,"./jv.js":358,"./ka":359,"./ka.js":359,"./kk":360,"./kk.js":360,"./km":361,"./km.js":361,"./kn":362,"./kn.js":362,"./ko":363,"./ko.js":363,"./ku":364,"./ku.js":364,"./ky":365,"./ky.js":365,"./lb":366,"./lb.js":366,"./lo":367,"./lo.js":367,"./lt":368,"./lt.js":368,"./lv":369,"./lv.js":369,"./me":370,"./me.js":370,"./mi":371,"./mi.js":371,"./mk":372,"./mk.js":372,"./ml":373,"./ml.js":373,"./mn":374,"./mn.js":374,"./mr":375,"./mr.js":375,"./ms":376,"./ms-my":377,"./ms-my.js":377,"./ms.js":376,"./mt":378,"./mt.js":378,"./my":379,"./my.js":379,"./nb":380,"./nb.js":380,"./ne":381,"./ne.js":381,"./nl":382,"./nl-be":383,"./nl-be.js":383,"./nl.js":382,"./nn":384,"./nn.js":384,"./oc-lnc":385,"./oc-lnc.js":385,"./pa-in":386,"./pa-in.js":386,"./pl":387,"./pl.js":387,"./pt":388,"./pt-br":389,"./pt-br.js":389,"./pt.js":388,"./ro":390,"./ro.js":390,"./ru":391,"./ru.js":391,"./sd":392,"./sd.js":392,"./se":393,"./se.js":393,"./si":394,"./si.js":394,"./sk":395,"./sk.js":395,"./sl":396,"./sl.js":396,"./sq":397,"./sq.js":397,"./sr":398,"./sr-cyrl":399,"./sr-cyrl.js":399,"./sr.js":398,"./ss":400,"./ss.js":400,"./sv":401,"./sv.js":401,"./sw":402,"./sw.js":402,"./ta":403,"./ta.js":403,"./te":404,"./te.js":404,"./tet":405,"./tet.js":405,"./tg":406,"./tg.js":406,"./th":407,"./th.js":407,"./tk":408,"./tk.js":408,"./tl-ph":409,"./tl-ph.js":409,"./tlh":410,"./tlh.js":410,"./tr":411,"./tr.js":411,"./tzl":412,"./tzl.js":412,"./tzm":413,"./tzm-latn":414,"./tzm-latn.js":414,"./tzm.js":413,"./ug-cn":415,"./ug-cn.js":415,"./uk":416,"./uk.js":416,"./ur":417,"./ur.js":417,"./uz":418,"./uz-latn":419,"./uz-latn.js":419,"./uz.js":418,"./vi":420,"./vi.js":420,"./x-pseudo":421,"./x-pseudo.js":421,"./yo":422,"./yo.js":422,"./zh-cn":423,"./zh-cn.js":423,"./zh-hk":424,"./zh-hk.js":424,"./zh-mo":425,"./zh-mo.js":425,"./zh-tw":426,"./zh-tw.js":426};function r(t){var e=j(t);return n(e)}function j(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=466},467:function(t,e,n){},486:function(t,e,n){"use strict";n(467)},530:function(t,e,n){"use strict";n.r(e);var r=n(448).a,j=(n(486),n(28)),l=n(59),c=n.n(l),o=n(481),d=n(471),m=n(431),v=n(526),f=n(474),h=n(533),k=n(527),component=Object(j.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-wrapper"},[n("v-card",{staticClass:"card-wrapper",attrs:{color:"white",elevation:"2"}},[n("v-card-title",[t._v(t._s(t.list.title))]),n("v-divider"),n("v-card-subtitle",{staticClass:"my-4 card-subtitle"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("span",{staticClass:"subtitle-2"},[t._v("작성자:")]),n("span",{staticClass:"subtitle-1 ml-2"},[t._v(t._s(t.list.writer))])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("span",{staticClass:"subtitle-2"},[t._v("작성일:")]),n("span",{staticClass:"subtitle-1 ml-2"},[t._v(t._s(t.list.wdate))])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("span",{staticClass:"subtitle-2"},[t._v("조회수:")]),n("span",{staticClass:"subtitle-1 ml-2"},[t._v(t._s(t.list.readnum))])])],1)],1),n("v-divider"),n("v-card-text",{staticClass:"card-content",domProps:{innerHTML:t._s(t.list.content)}}),t.list.savefile?n("div",[t.list.isImg?n("div",[n("v-img",{staticClass:"imgx",attrs:{src:t.list.file}})],1):t._e(),n("div",{staticClass:"my-4"},[n("v-divider",{staticClass:"mb-3"}),n("span",{staticClass:"subtitle-2"},[t._v("다운로드:")]),n("a",{staticClass:"subtitle-1 ml-2",attrs:{href:t.downloadLink(t.list.id)}},[t._v(t._s(t.list.orifile))])],1)]):t._e()],1),n("nuxt-link",{attrs:{to:"/"}},[n("v-btn",{staticClass:"my-4 mx-auto d-block",attrs:{color:"teal grey--text text--lighten-4"}},[t._v("LIST")])],1)],1)}),[],!1,null,"f9084024",null);e.default=component.exports;c()(component,{VBtn:o.a,VCard:d.a,VCardSubtitle:m.a,VCardText:m.b,VCardTitle:m.c,VCol:v.a,VDivider:f.a,VImg:h.a,VRow:k.a})}}]);