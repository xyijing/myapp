(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c534cc"],{"6df8":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("ul",t._l(t.dataList,function(a){return i("li",{staticClass:"mov clearfix"},[i("div",{staticClass:"cover"},[i("img",{attrs:{src:"https://images.weserv.nl/?url="+a.cover.url,alt:""}})]),i("div",{staticClass:"text"},[i("p",[t._v(t._s(a.title))]),i("p",[t._v(t._s(a.actors))])])])}),0)])},e=[],c={data:function(){return{dataList:[]}},created:function(){this.getData();var t={title:"电影",navName:"movie"};this.$emit("changeActive",t)},methods:{getData:function(){var t=this,a="https://bird.ioliu.cn/v2?url=",i="https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.listStart}&count=10";axios.get(a+i).then(function(a){t.dataList=a.data.subject_collection_items,console.log(t.dataList)})}}},n=c,o=(i("ba61"),i("2877")),r=Object(o["a"])(n,s,e,!1,null,"9972412e",null);a["default"]=r.exports},"8b6c":function(t,a,i){},ba61:function(t,a,i){"use strict";var s=i("8b6c"),e=i.n(s);e.a}}]);
//# sourceMappingURL=chunk-35c534cc.87ee46ed.js.map