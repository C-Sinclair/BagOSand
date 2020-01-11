goog.provide('cljs_test_display.favicon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.dom');
/**
 * @define {string}
 */
cljs_test_display.favicon.link_id = goog.define("cljs_test_display.favicon.link_id","cljs-test-favicon");
cljs_test_display.favicon.html_collection__GT_seq = (function cljs_test_display$favicon$html_collection__GT_seq(html_coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40623_SHARP_){
return html_coll.item(p1__40623_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(html_coll.length));
});
cljs_test_display.favicon.find_existing_link = (function cljs_test_display$favicon$find_existing_link(){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (l){
var temp__5735__auto__ = l.rel;
if(cljs.core.truth_(temp__5735__auto__)){
var rel = temp__5735__auto__;
return cljs.core.some((function (p1__40628_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("icon",p1__40628_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(rel,/\s/));
} else {
return null;
}
}),cljs_test_display.favicon.html_collection__GT_seq(goog.dom.getElementsByTagName("link"))));
});
cljs_test_display.favicon.init_link_BANG_ = (function cljs_test_display$favicon$init_link_BANG_(l){
(l.id = cljs_test_display.favicon.link_id);

(l.rel = "shortcut icon");

(l.type = "image/png");

return (l.href = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4T2NMS0v7z0ABYBw1gGE0DBhGwwCYh4ZBOgAAcQUjIUXh8RYAAAAASUVORK5CYII=");
});
cljs_test_display.favicon.get_or_create_BANG_ = (function cljs_test_display$favicon$get_or_create_BANG_(){
var temp__5733__auto__ = goog.dom.getElement(cljs_test_display.favicon.link_id);
if(cljs.core.truth_(temp__5733__auto__)){
var favicon = temp__5733__auto__;
return favicon;
} else {
var temp__5733__auto____$1 = cljs_test_display.favicon.find_existing_link();
if(cljs.core.truth_(temp__5733__auto____$1)){
var favicon = temp__5733__auto____$1;
cljs_test_display.favicon.init_link_BANG_(favicon);

return favicon;
} else {
var favicon = goog.dom.createDom("link");
cljs_test_display.favicon.init_link_BANG_(favicon);

var G__40647_40677 = (function (){var G__40649 = goog.dom.getDocument();
var G__40650 = "head";
return goog.object.get(G__40649,G__40650);
})();
var G__40648_40678 = favicon;
goog.dom.appendChild(G__40647_40677,G__40648_40678);

return favicon;
}
}
});
cljs_test_display.favicon.color_data_url = (function cljs_test_display$favicon$color_data_url(color,size){
var cvs = (function (){var G__40653 = "canvas";
var G__40654 = ({"width": size, "height": size});
return goog.dom.createDom(G__40653,G__40654);
})();
var ctx_40683 = cvs.getContext("2d");
(ctx_40683.fillStyle = color);

ctx_40683.fillRect((0),(0),size,size);

return cvs.toDataURL();
});
cljs_test_display.favicon.change_to_color = (function cljs_test_display$favicon$change_to_color(color){
return (cljs_test_display.favicon.get_or_create_BANG_().href = cljs_test_display.favicon.color_data_url(color,(16)));
});
cljs_test_display.favicon.green = (function cljs_test_display$favicon$green(){
return cljs_test_display.favicon.change_to_color("#0d0");
});
cljs_test_display.favicon.red = (function cljs_test_display$favicon$red(){
return cljs_test_display.favicon.change_to_color("#d00");
});

//# sourceMappingURL=cljs_test_display.favicon.js.map
