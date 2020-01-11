goog.provide('cljs_test_display.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
goog.require('cljs_test_display.favicon');
goog.require('cljs_test_display.notify');
/**
 * @define {string}
 */
cljs_test_display.core.root_node_id = goog.define("cljs_test_display.core.root_node_id","app");
/**
 * @define {boolean}
 */
cljs_test_display.core.change_favicon = goog.define("cljs_test_display.core.change_favicon",true);
/**
 * @define {boolean}
 */
cljs_test_display.core.notifications = goog.define("cljs_test_display.core.notifications",true);
/**
 * @define {boolean}
 */
cljs_test_display.core.printing = goog.define("cljs_test_display.core.printing",false);
if((typeof cljs_test_display !== 'undefined') && (typeof cljs_test_display.core !== 'undefined') && (typeof cljs_test_display.core.state !== 'undefined')){
} else {
cljs_test_display.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs_test_display.core.root_app_node = (function cljs_test_display$core$root_app_node(){
return goog.dom.getElement(cljs_test_display.core.root_node_id);
});
cljs_test_display.core.push_node_BANG_ = (function cljs_test_display$core$push_node_BANG_(node){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.List.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});
cljs_test_display.core.pop_node_BANG_ = (function cljs_test_display$core$pop_node_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.rest);
});
cljs_test_display.core.initialize_state_BANG_ = (function cljs_test_display$core$initialize_state_BANG_(){
cljs.core.reset_BANG_(cljs_test_display.core.state,cljs.core.PersistentArrayMap.EMPTY);

return cljs_test_display.core.push_node_BANG_(cljs_test_display.core.root_app_node());
});
cljs_test_display.core.current_node = (function cljs_test_display$core$current_node(){
return cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_test_display.core.state),new cljs.core.Keyword(null,"current-node","current-node",-814308842)));
});
cljs_test_display.core.current_node_parent = (function cljs_test_display$core$current_node_parent(){
return cljs.core.second(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_test_display.core.state),new cljs.core.Keyword(null,"current-node","current-node",-814308842)));
});
cljs_test_display.core.next_error_count = (function cljs_test_display$core$next_error_count(){
return new cljs.core.Keyword(null,"error-count","error-count",1790949450).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"error-count","error-count",1790949450),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))));
});


if((typeof cljs_test_display !== 'undefined') && (typeof cljs_test_display.core !== 'undefined') && (typeof cljs_test_display.core.register_document_events_BANG_ !== 'undefined')){
} else {
cljs_test_display.core.register_document_events_BANG_ = cljs.core.memoize((function (){
var G__40989 = goog.dom.getDocument();
var G__40990 = goog.events.EventType.KEYDOWN;
var G__40991 = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,goog.events.KeyCodes.P)){
return (cljs_test_display.core.click_toggle.cljs$core$IFn$_invoke$arity$1 ? cljs_test_display.core.click_toggle.cljs$core$IFn$_invoke$arity$1(e) : cljs_test_display.core.click_toggle.call(null,e));
} else {
return null;
}
});
return goog.events.listen(G__40989,G__40990,G__40991);
}));
}
var style_string_41346 = "body {\n    margin: 0px;\n}\n\n.container {\n    font-family: \"Lucida Grande\",\"Lucida Sans Unicode\",\"Lucida Sans\",Geneva,Arial,sans-serif!important;\n    font-size: 16px;\n    line-height: 1.4285;\n    margin: 0px auto;\n    padding: 0px 10px;\n}\n\n/* report header */\n\n#report-header {\n    background-color: #27437b;\n    color: white;\n}\n\n#report-header .report-body {\n    padding: 20px 10px;\n    /* hack */\n    padding-right: 0px;\n}\n\n#report-header.tests-fail {\n    background-color: #7b2727;\n}\n\n#report-header.tests-succeed {\n    background-color: #277b2d;\n}\n\n#report-header .page-title {\n    display: flex;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n#report-header .test-title {\n    font-size: 40px;\n    margin-left: 15px;\n}\n\n/* controls */\n\n.controls {\n    margin-top: 10px;\n    height: 10px;\n}\n\n.controls button {\n    float: right;\n    border-radius: 5px;\n    font-family: Arial;\n    color: #ffffff;\n    font-size: 11px;\n    background-color: #8e8e8e;\n    padding: 5px 10px 5px 10px;\n    text-decoration: none;\n    border: none;\n    letter-spacing: 0.8px;\n}\n\n.controls button:hover {\n    background: #a9a9a9;\n    text-decoration: none;\n}\n/* summary */\n\n.summary-body {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.summary-body .report-number {\n    margin-right: 20px;\n    font-family: monospace;\n    font-size: 2em;\n}\n\n.summary-body .total-tests {\n    font-size: 0.75em;\n    line-height: 1.2em;\n}\n\n.summary-body .test-counts {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.summary-body .test-counts > div {\n    margin-right: 10px;\n}\n\n/* namespace */\n\n.test-ns h2 {\n    font-weight: normal;\n    color: #333;\n}\n\n/* var line */\n\n.var-header {\n    color: #666;    \n    margin: 8px 0px;\n    border-bottom: 1px solid #e0e0e0;\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.test-var-line {\n    color: #999;\n    font-size: 0.7em;\n}\n\n.test-var-line span {\n    font-family: monospace;\n}\n\n/* passing test dot */\n\n.test-passing {\n    display: inline-block;\n    width: 12px;\n    height: 12px;    \n    border: 1px solid #98bd8b;\n    background-color: rgb(199, 225, 160);\n}\n\n.test-passing + .test-passing {\n    border-left: none;\n}\n\n/* ensure vertical space between passing tests and failing tests */\n\n.test-passing + .test-fail {\n    margin-top: 8px;\n}\n\n.test-fail + .test-passing {\n    margin-top: 14px;\n}\n\n/* failed tests */\n\n.test-fail {\n    color: #a94442;\n    border: 1px solid rgb(236, 196, 196);\n    border-left: 8px solid rgb(236, 196, 196);\n    background-color: rgb(254, 254, 244);\n}\n\n.fail-body {\n    padding: 10px 24px;\n}\n\n.contexts {\n    padding: 0px 5px;\n    font-size: 0.8em;\n    background-color: #f1f1f1;\n}\n\n.test-message {\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\npre {\n    margin: 0px;\n    word-break: normal;\n    word-wrap: normal;\n    overflow-x: scroll;\n    margin-top: 2px;\n    margin-bottom: 2px;    \n}\n\npre code {\n    font-size: 0.8em;\n    color: #333;\n    overflow-x: auto;\n}\n\n.actual {\n    position: relative;\n}\n\n.actual pre {\n    margin-left: 20px;\n}\n\n.actual .arrow {\n    position: absolute;\n    font-size: 0.8em;\n    top: 4px;\n}\n\n/* errors */\n\n.test-error {\n    border-left: 8px solid #b94848;\n}\n\n.error-prefix {\n    color: #a94442;\n    font-weight: bold;\n}\n\n.error-message {\n    font-size: 0.8em;\n}\n\n.view-stacktrace {\n    font-size: 0.8em;\n    color: #888;\n}\n\n/* footer */\n\n.footer {\n    margin-top: 30px;\n    min-height: 150px;\n    background-color: #ddd;\n}\n\n.footer .container {\n    padding-top: 30px;\n    color: #555;\n    font-size: 0.85em;\n    display: flex;\n    justify-content: center;\n}\n\n.control-key {\n    display: inline-block;\n    font-weight: bold;\n    background-color: white;\n    padding: 1px 4px;\n    border-radius: 2px;\n}\n\n/* responsive */\n\n@media (min-width: 576px) {\n    .container {\n\twidth: 576px;\n    }\n    .controls {\n\theight: 0px;\n    }\n}\n\n@media (min-width: 768px) {\n    .container {\n\twidth: 768px;\n    }\n}\n\n/* functionality */\n\n.hide-passing .test-passing + .test-fail,\n.hide-passing .test-fail + .test-passing{\n    margin-top: 0px;\n}\n\n.hide-passing .test-ns,\n.hide-passing .test-var,\n.hide-passing .test-passing {\n    display: none;\n}\n\n.hide-passing .test-ns.has-errors,\n.hide-passing .test-ns.has-failures,\n.hide-passing .test-var.has-errors,\n.hide-passing .test-var.has-failures {\n    display: block;\n}\n";
cljs_test_display.core.insert_style_BANG_ = (function cljs_test_display$core$insert_style_BANG_(){
if(cljs.core.truth_(goog.dom.getElement("cljs-test-display-style"))){
return null;
} else {
var node = (function (){var G__40999 = new cljs.core.Keyword(null,"style","style",-496642736);
var G__41000 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"cljs-test-display-style"], null);
var G__41001 = style_string_41346;
return (cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$3(G__40999,G__41000,G__41001) : cljs_test_display.core.n.call(null,G__40999,G__41000,G__41001));
})();
var head = (goog.dom.getElementsByTagName("head")[(0)]);
return goog.dom.appendChild(head,node);
}
});
cljs_test_display.core.n = (function cljs_test_display$core$n(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41349 = arguments.length;
var i__4790__auto___41350 = (0);
while(true){
if((i__4790__auto___41350 < len__4789__auto___41349)){
args__4795__auto__.push((arguments[i__4790__auto___41350]));

var G__41351 = (i__4790__auto___41350 + (1));
i__4790__auto___41350 = G__41351;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attributes,contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,cljs.core.name(tag),cljs.core.clj__GT_js(attributes),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
if((x instanceof HTMLElement)){
return x;
} else {
if(((typeof x === 'string') || ((x instanceof cljs.core.Symbol)))){
var G__41016 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
return goog.dom.createTextNode(G__41016);
} else {
var G__41017 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.dom.createTextNode(G__41017);

}
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,contents)));
}));

(cljs_test_display.core.n.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_test_display.core.n.cljs$lang$applyTo = (function (seq41003){
var G__41004 = cljs.core.first(seq41003);
var seq41003__$1 = cljs.core.next(seq41003);
var G__41005 = cljs.core.first(seq41003__$1);
var seq41003__$2 = cljs.core.next(seq41003__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41004,G__41005,seq41003__$2);
}));

cljs_test_display.core.magic_keyword__GT_attrs = (function cljs_test_display$core$magic_keyword__GT_attrs(k){
if((k instanceof cljs.core.Keyword)){
var classes = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),".");
var vec__41018 = ((clojure.string.starts_with_QMARK_(cljs.core.first(classes),"#"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(classes),(1)),cljs.core.rest(classes)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,classes], null));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41018,(0),null);
var classes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41018,(1),null);
var G__41024 = cljs.core.PersistentArrayMap.EMPTY;
var G__41024__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41024,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__41024);
if(cljs.core.truth_(cljs.core.not_empty(classes__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41024__$1,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes__$1));
} else {
return G__41024__$1;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
cljs_test_display.core.tag_fn = (function cljs_test_display$core$tag_fn(tag){
return (function() { 
var G__41358__delegate = function (klass,contents){
var vec__41025 = (((klass instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass,contents], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(klass,contents)], null));
var klass__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41025,(0),null);
var contents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41025,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs_test_display.core.n,tag,cljs_test_display.core.magic_keyword__GT_attrs(klass__$1),contents__$1);
};
var G__41358 = function (klass,var_args){
var contents = null;
if (arguments.length > 1) {
var G__41359__i = 0, G__41359__a = new Array(arguments.length -  1);
while (G__41359__i < G__41359__a.length) {G__41359__a[G__41359__i] = arguments[G__41359__i + 1]; ++G__41359__i;}
  contents = new cljs.core.IndexedSeq(G__41359__a,0,null);
} 
return G__41358__delegate.call(this,klass,contents);};
G__41358.cljs$lang$maxFixedArity = 1;
G__41358.cljs$lang$applyTo = (function (arglist__41360){
var klass = cljs.core.first(arglist__41360);
var contents = cljs.core.rest(arglist__41360);
return G__41358__delegate(klass,contents);
});
G__41358.cljs$core$IFn$_invoke$arity$variadic = G__41358__delegate;
return G__41358;
})()
;
});
cljs_test_display.core.div = cljs_test_display.core.tag_fn(new cljs.core.Keyword(null,"div","div",1057191632));
cljs_test_display.core.span = cljs_test_display.core.tag_fn(new cljs.core.Keyword(null,"span","span",1394872991));
cljs_test_display.core.code = (function cljs_test_display$core$code(var_args){
var G__41032 = arguments.length;
switch (G__41032) {
case 1:
return cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$1 = (function (code_str){
return cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$2(null,code_str);
}));

(cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$2 = (function (klass,code_str){
return cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pre","pre",2118456869),cljs_test_display.core.magic_keyword__GT_attrs(klass),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code_str], 0))], 0))], 0));
}));

(cljs_test_display.core.code.cljs$lang$maxFixedArity = 2);

cljs_test_display.core.current_var_info = (function cljs_test_display$core$current_var_info(){
var var$ = cljs.core.first(cljs.core.reverse(new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env())));
return cljs.core.meta(var$);
});
cljs_test_display.core.process_file_name = (function cljs_test_display$core$process_file_name(p__41037){
var map__41038 = p__41037;
var map__41038__$1 = (((((!((map__41038 == null))))?(((((map__41038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41038):map__41038);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41038__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),/\./)) + (1)),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,/[\/\\]/)))));
});
cljs_test_display.core.failed_QMARK_ = (function cljs_test_display$core$failed_QMARK_(m){
return (!(((new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)) === (0))));
});
cljs_test_display.core.pluralize = (function cljs_test_display$core$pluralize(s,n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"s"].join('');
}
});
cljs_test_display.core.click_toggle = (function cljs_test_display$core$click_toggle(e){
var G__41040 = cljs_test_display.core.root_app_node();
var G__41041 = "hide-passing";
return goog.dom.classlist.toggle(G__41040,G__41041);
});
cljs_test_display.core.header_node = (function cljs_test_display$core$header_node(){
var G__41046 = new cljs.core.Keyword(null,"#report-header","#report-header",960178800);
var G__41047 = (function (){var G__41048 = new cljs.core.Keyword(null,"container.report-body","container.report-body",-1022247291);
var G__41049 = (function (){var G__41051 = new cljs.core.Keyword(null,"page-title","page-title",-915898735);
var G__41052 = cljs_test_display.core.n(new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"src","src",-1651076051),"https://clojurescript.org/images/cljs-logo-120b.png"], null));
var G__41053 = (function (){var G__41054 = new cljs.core.Keyword(null,"test-title","test-title",-1204422017);
var G__41055 = "Test Run";
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41054,G__41055) : cljs_test_display.core.div.call(null,G__41054,G__41055));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41051,G__41052,G__41053) : cljs_test_display.core.div.call(null,G__41051,G__41052,G__41053));
})();
var G__41050 = (function (){var G__41056 = new cljs.core.Keyword(null,"#summary","#summary",-2110125213);
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1(G__41056) : cljs_test_display.core.div.call(null,G__41056));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41048,G__41049,G__41050) : cljs_test_display.core.div.call(null,G__41048,G__41049,G__41050));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41046,G__41047) : cljs_test_display.core.div.call(null,G__41046,G__41047));
});
cljs_test_display.core.add_header_node_BANG_ = (function cljs_test_display$core$add_header_node_BANG_(){
var G__41057_41364 = cljs_test_display.core.root_app_node();
var G__41058_41365 = cljs_test_display.core.header_node();
goog.dom.appendChild(G__41057_41364,G__41058_41365);

var G__41059 = cljs_test_display.core.root_app_node();
var G__41060 = (function (){var G__41061 = new cljs.core.Keyword(null,"controls.container","controls.container",102023298);
var G__41062 = cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-show",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs_test_display.core.click_toggle], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hide/Show Passing"], 0));
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41061,G__41062) : cljs_test_display.core.div.call(null,G__41061,G__41062));
})();
return goog.dom.appendChild(G__41059,G__41060);
});
cljs_test_display.core.contexts_node = (function cljs_test_display$core$contexts_node(){
if(cljs.core.seq(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
var G__41063 = new cljs.core.Keyword(null,"contexts","contexts",4351546);
var G__41064 = cljs.test.testing_contexts_str();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41063,G__41064) : cljs_test_display.core.div.call(null,G__41063,G__41064));
} else {
return null;
}
});
cljs_test_display.core.comparison = (function cljs_test_display$core$comparison(p__41065){
var map__41066 = p__41065;
var map__41066__$1 = (((((!((map__41066 == null))))?(((((map__41066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41066):map__41066);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var G__41068 = cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$1(expected);
var G__41069 = (function (){var G__41070 = new cljs.core.Keyword(null,"actual","actual",107306363);
var G__41071 = (function (){var G__41073 = new cljs.core.Keyword(null,"arrow","arrow",1071351425);
var G__41074 = "\u25B6";
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41073,G__41074) : cljs_test_display.core.div.call(null,G__41073,G__41074));
})();
var G__41072 = cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$1(actual);
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41070,G__41071,G__41072) : cljs_test_display.core.div.call(null,G__41070,G__41071,G__41072));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41068,G__41069) : cljs_test_display.core.div.call(null,G__41068,G__41069));
});
cljs_test_display.core.add_fail_node_BANG_ = (function cljs_test_display$core$add_fail_node_BANG_(m){
var formatter_fn = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.pr_str;
}
})();
var node = (function (){var G__41076 = new cljs.core.Keyword(null,"test-fail","test-fail",-1337227951);
var G__41077 = cljs_test_display.core.contexts_node();
var G__41078 = (function (){var G__41080 = new cljs.core.Keyword(null,"fail-body","fail-body",91617623);
var G__41081 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var message = temp__5735__auto__;
var G__41083 = new cljs.core.Keyword(null,"test-message","test-message",-398804094);
var G__41084 = message;
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41083,G__41084) : cljs_test_display.core.div.call(null,G__41083,G__41084));
} else {
return null;
}
})();
var G__41082 = cljs_test_display.core.comparison(m);
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41080,G__41081,G__41082) : cljs_test_display.core.div.call(null,G__41080,G__41081,G__41082));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41076,G__41077,G__41078) : cljs_test_display.core.div.call(null,G__41076,G__41077,G__41078));
})();
var curr_node = cljs_test_display.core.current_node();
goog.dom.classlist.add(curr_node,"has-failures");

var G__41085_41369 = cljs_test_display.core.current_node_parent();
var G__41086_41370 = "has-failures";
goog.dom.classlist.add(G__41085_41369,G__41086_41370);

return goog.dom.appendChild(curr_node,node);
});
cljs_test_display.core.error_comparison = (function cljs_test_display$core$error_comparison(p__41089){
var map__41091 = p__41089;
var map__41091__$1 = (((((!((map__41091 == null))))?(((((map__41091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41091):map__41091);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41091__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41091__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var G__41093 = cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$1(expected);
var G__41094 = (function (){var G__41095 = new cljs.core.Keyword(null,"cljs-test-actual","cljs-test-actual",45970177);
var G__41096 = (function (){var G__41100 = new cljs.core.Keyword(null,"error-prefix","error-prefix",-152896487);
var G__41101 = "Error: ";
return (cljs_test_display.core.span.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.span.cljs$core$IFn$_invoke$arity$2(G__41100,G__41101) : cljs_test_display.core.span.call(null,G__41100,G__41101));
})();
var G__41097 = (cljs.core.truth_(actual)?(function (){var G__41102 = new cljs.core.Keyword(null,"error-message","error-message",1756021561);
var G__41103 = actual.message;
return (cljs_test_display.core.span.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.span.cljs$core$IFn$_invoke$arity$2(G__41102,G__41103) : cljs_test_display.core.span.call(null,G__41102,G__41103));
})():null);
var G__41098 = (cljs.core.truth_(actual)?(function (){var error_number = cljs_test_display.core.next_error_count();
console.log("CLJS Test Error #",error_number);

console.error(actual);

var G__41104 = new cljs.core.Keyword(null,"view-stacktrace","view-stacktrace",-436229848);
var G__41105 = ["For stacktrace: See error number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_number)," in console"].join('');
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41104,G__41105) : cljs_test_display.core.div.call(null,G__41104,G__41105));
})():null);
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$4 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$4(G__41095,G__41096,G__41097,G__41098) : cljs_test_display.core.div.call(null,G__41095,G__41096,G__41097,G__41098));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41093,G__41094) : cljs_test_display.core.div.call(null,G__41093,G__41094));
});
cljs_test_display.core.add_error_node_BANG_ = (function cljs_test_display$core$add_error_node_BANG_(m){
var formatter_fn = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.pr_str;
}
})();
var node = (function (){var G__41112 = new cljs.core.Keyword(null,"test-fail.test-error","test-fail.test-error",-1508560269);
var G__41113 = cljs_test_display.core.contexts_node();
var G__41114 = (function (){var G__41116 = new cljs.core.Keyword(null,"fail-body","fail-body",91617623);
var G__41117 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var message = temp__5735__auto__;
var G__41120 = new cljs.core.Keyword(null,"test-message","test-message",-398804094);
var G__41121 = message;
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41120,G__41121) : cljs_test_display.core.div.call(null,G__41120,G__41121));
} else {
return null;
}
})();
var G__41118 = cljs_test_display.core.error_comparison(m);
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41116,G__41117,G__41118) : cljs_test_display.core.div.call(null,G__41116,G__41117,G__41118));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41112,G__41113,G__41114) : cljs_test_display.core.div.call(null,G__41112,G__41113,G__41114));
})();
var curr_node = cljs_test_display.core.current_node();
goog.dom.classlist.add(curr_node,"has-errors");

var G__41122_41374 = cljs_test_display.core.current_node_parent();
var G__41123_41375 = "has-errors";
goog.dom.classlist.add(G__41122_41374,G__41123_41375);

return goog.dom.appendChild(curr_node,node);
});
cljs_test_display.core.add_passing_node_BANG_ = (function cljs_test_display$core$add_passing_node_BANG_(m){
var G__41131 = cljs_test_display.core.current_node();
var G__41132 = (function (){var G__41134 = new cljs.core.Keyword(null,"test-passing","test-passing",473862722);
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1(G__41134) : cljs_test_display.core.div.call(null,G__41134));
})();
return goog.dom.appendChild(G__41131,G__41132);
});
cljs_test_display.core.add_ns_node_BANG_ = (function cljs_test_display$core$add_ns_node_BANG_(m){
var curr_node = cljs_test_display.core.current_node();
var new_current_node = (function (){var G__41150 = new cljs.core.Keyword(null,"container.test-ns","container.test-ns",187940407);
var G__41151 = cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)], 0));
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41150,G__41151) : cljs_test_display.core.div.call(null,G__41150,G__41151));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),(function (p1__41139_SHARP_){
return cljs.core.cons(new_current_node,p1__41139_SHARP_);
}));

return goog.dom.appendChild(curr_node,new_current_node);
});
cljs_test_display.core.add_var_node = (function cljs_test_display$core$add_var_node(m){
var curr_node = cljs_test_display.core.current_node();
var map__41166 = cljs_test_display.core.current_var_info();
var map__41166__$1 = (((((!((map__41166 == null))))?(((((map__41166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41166):map__41166);
var info = map__41166__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41166__$1,new cljs.core.Keyword(null,"line","line",212345235));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41166__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var node = (function (){var G__41177 = new cljs.core.Keyword(null,"test-var","test-var",-1105918373);
var G__41178 = (function (){var G__41187 = new cljs.core.Keyword(null,"var-header","var-header",-1763067997);
var G__41188 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var G__41189 = (cljs.core.truth_(line)?(function (){var G__41193 = new cljs.core.Keyword(null,"test-var-line","test-var-line",704473006);
var G__41194 = (cljs.core.truth_(file)?cljs_test_display.core.process_file_name(info):"line");
var G__41195 = ":";
var G__41196 = cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line], 0));
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$4 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$4(G__41193,G__41194,G__41195,G__41196) : cljs_test_display.core.div.call(null,G__41193,G__41194,G__41195,G__41196));
})():null);
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41187,G__41188,G__41189) : cljs_test_display.core.div.call(null,G__41187,G__41188,G__41189));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41177,G__41178) : cljs_test_display.core.div.call(null,G__41177,G__41178));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),(function (p1__41161_SHARP_){
return cljs.core.cons(node,p1__41161_SHARP_);
}));

return goog.dom.appendChild(curr_node,node);
});
cljs_test_display.core.summary = (function cljs_test_display$core$summary(p__41236){
var map__41238 = p__41236;
var map__41238__$1 = (((((!((map__41238 == null))))?(((((map__41238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41238):map__41238);
var m = map__41238__$1;
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41238__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41238__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41238__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var test__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41238__$1,new cljs.core.Keyword(null,"test","test",577538877));
var G__41256 = new cljs.core.Keyword(null,"summary-body","summary-body",42130351);
var G__41257 = (((!((fail === (0)))))?(function (){var G__41273 = new cljs.core.Keyword(null,"report-number","report-number",-333064129);
var G__41274 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize(" failure",fail))].join('');
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41273,G__41274) : cljs_test_display.core.div.call(null,G__41273,G__41274));
})():null);
var G__41258 = (((!((error === (0)))))?(function (){var G__41282 = new cljs.core.Keyword(null,"report-number","report-number",-333064129);
var G__41283 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(error),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize(" error",error))].join('');
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41282,G__41283) : cljs_test_display.core.div.call(null,G__41282,G__41283));
})():null);
var G__41259 = ((cljs_test_display.core.failed_QMARK_(m))?null:(function (){var G__41284 = new cljs.core.Keyword(null,"report-number","report-number",-333064129);
var G__41285 = "All Tests Passed";
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41284,G__41285) : cljs_test_display.core.div.call(null,G__41284,G__41285));
})());
var G__41260 = (function (){var G__41286 = new cljs.core.Keyword(null,"total-tests","total-tests",-219861496);
var G__41287 = (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1("Totals") : cljs_test_display.core.div.call(null,"Totals"));
var G__41288 = (function (){var G__41289 = new cljs.core.Keyword(null,"test-counts","test-counts",1975187961);
var G__41290 = (function (){var G__41296 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(test__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize(" Test",test__$1))].join('');
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1(G__41296) : cljs_test_display.core.div.call(null,G__41296));
})();
var G__41291 = (function (){var assertions = ((pass + fail) + error);
var G__41300 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(assertions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize(" Assertion",assertions))].join('');
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$1(G__41300) : cljs_test_display.core.div.call(null,G__41300));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41289,G__41290,G__41291) : cljs_test_display.core.div.call(null,G__41289,G__41290,G__41291));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$3(G__41286,G__41287,G__41288) : cljs_test_display.core.div.call(null,G__41286,G__41287,G__41288));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$5 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$5(G__41256,G__41257,G__41258,G__41259,G__41260) : cljs_test_display.core.div.call(null,G__41256,G__41257,G__41258,G__41259,G__41260));
});
cljs_test_display.core.display_summary_BANG_ = (function cljs_test_display$core$display_summary_BANG_(m){
var report_header = goog.dom.getElement("report-header");
var summary_node_SINGLEQUOTE_ = goog.dom.getElement("summary");
var G__41302_41393 = report_header;
var G__41303_41394 = ((cljs_test_display.core.failed_QMARK_(m))?"tests-fail":"tests-succeed");
goog.dom.classlist.add(G__41302_41393,G__41303_41394);

goog.dom.removeChildren(summary_node_SINGLEQUOTE_);

var G__41304 = summary_node_SINGLEQUOTE_;
var G__41305 = cljs_test_display.core.summary(m);
return goog.dom.appendChild(G__41304,G__41305);
});
cljs_test_display.core.print_comparison = (function cljs_test_display$core$print_comparison(m){
var formatter_fn = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.pr_str;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expected:",(function (){var G__41317 = new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__41317) : formatter_fn.call(null,G__41317));
})()], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  actual:",(function (){var G__41318 = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__41318) : formatter_fn.call(null,G__41318));
})()], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs_test_display.core.add_passing_node_BANG_(m);

return cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"pass","pass",1574159993));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null),(function (m){
cljs_test_display.core.add_ns_node_BANG_(m);

if(cljs_test_display.core.printing){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nTesting",cljs.core.name(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m))], 0));
} else {
return null;
}
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.rest);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (m){
return cljs_test_display.core.add_var_node(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.rest);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs_test_display.core.add_fail_node_BANG_(m);

cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",1706214930));

if(cljs_test_display.core.printing){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nFAIL in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__5735__auto___41399 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto___41399)){
var message_41400 = temp__5735__auto___41399;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message_41400], 0));
} else {
}

return cljs_test_display.core.print_comparison(m);
} else {
return null;
}
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nERROR in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__5735__auto___41401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto___41401)){
var message_41402 = temp__5735__auto___41401;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message_41402], 0));
} else {
}

cljs_test_display.core.print_comparison(m);

return cljs_test_display.core.add_error_node_BANG_(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (m){
if(cljs_test_display.core.change_favicon){
if(cljs_test_display.core.failed_QMARK_(m)){
cljs_test_display.favicon.red();
} else {
cljs_test_display.favicon.green();
}
} else {
}

if(cljs_test_display.core.notifications){
if(cljs_test_display.core.failed_QMARK_(m)){
cljs_test_display.notify.failure(m);
} else {
cljs_test_display.notify.success();
}
} else {
}

cljs_test_display.core.display_summary_BANG_(m);

var G__41323_41403 = cljs_test_display.core.root_app_node();
var G__41324_41404 = (function (){var G__41325 = new cljs.core.Keyword(null,"footer","footer",1606445390);
var G__41326 = (function (){var G__41327 = new cljs.core.Keyword(null,"container","container",-1736937707);
var G__41328 = (function (){var G__41329 = new cljs.core.Keyword(null,"tip","tip",1221810860);
var G__41330 = "Hit the ";
var G__41331 = (function (){var G__41333 = new cljs.core.Keyword(null,"control-key","control-key",-1287294483);
var G__41334 = "P";
return (cljs_test_display.core.span.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.span.cljs$core$IFn$_invoke$arity$2(G__41333,G__41334) : cljs_test_display.core.span.call(null,G__41333,G__41334));
})();
var G__41332 = " key to toggle the display of passing tests.";
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$4 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$4(G__41329,G__41330,G__41331,G__41332) : cljs_test_display.core.div.call(null,G__41329,G__41330,G__41331,G__41332));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41327,G__41328) : cljs_test_display.core.div.call(null,G__41327,G__41328));
})();
return (cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2 ? cljs_test_display.core.div.cljs$core$IFn$_invoke$arity$2(G__41325,G__41326) : cljs_test_display.core.div.call(null,G__41325,G__41326));
})();
goog.dom.appendChild(G__41323_41403,G__41324_41404);

if(cljs_test_display.core.printing){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nRan",new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)),"assertions."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m),"errors."], 0));
} else {
return null;
}
}));
cljs_test_display.core.empty_env = (function cljs_test_display$core$empty_env(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213));
});
/**
 * This function initializes the environment for a test run. It must
 *   be called before every test run.
 * 
 *   As a convenience it returns a cljs.test/empty-env initialized so
 *   that the test run will use the cljs-test-display formatter.
 * 
 *   This function takes an optional single argument: the id of the DOM
 *   node to mount.  It defaults to "app"
 * 
 *   Example Usage:
 * 
 *   (cljs.test/run-tests (cljs-test-display/init! "app")
 *                     'example.core-test
 *                     'example.core-other-test)
 */
cljs_test_display.core.init_BANG_ = (function cljs_test_display$core$init_BANG_(var_args){
var G__41336 = arguments.length;
switch (G__41336) {
case 0:
return cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app_node_id){
if((goog.global.document == null)){
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
} else {
if(cljs.core.truth_(app_node_id)){
if(((typeof app_node_id === 'string') || ((app_node_id instanceof cljs.core.Symbol)) || ((app_node_id instanceof cljs.core.Keyword)))){
} else {
throw (new Error(["Assert failed: ","Must provide an something we can call cljs.core/name on.","\n","(or (string? app-node-id) (symbol? app-node-id) (keyword? app-node-id))"].join('')));
}

(cljs_test_display.core.root_node_id = cljs.core.name(app_node_id));
} else {
}

if(cljs.core.truth_((function (){var G__41337 = cljs.core.name(cljs_test_display.core.root_node_id);
return goog.dom.getElement(G__41337);
})())){
} else {
throw (new Error(["Assert failed: ",["cljs-test-display: Element with id ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_test_display.core.root_node_id], 0))," does not exist."].join(''),"\n","(gdom/getElement (name root-node-id))"].join('')));
}

if(cljs_test_display.core.notifications){
cljs_test_display.notify.ask_permission_BANG_();
} else {
}

cljs_test_display.core.insert_style_BANG_();

(cljs_test_display.core.register_document_events_BANG_.cljs$core$IFn$_invoke$arity$0 ? cljs_test_display.core.register_document_events_BANG_.cljs$core$IFn$_invoke$arity$0() : cljs_test_display.core.register_document_events_BANG_.call(null));

(cljs_test_display.core.root_app_node().innerHTML = "");

cljs_test_display.core.add_header_node_BANG_();

cljs_test_display.core.initialize_state_BANG_();

return cljs_test_display.core.empty_env();
}
}));

(cljs_test_display.core.init_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=cljs_test_display.core.js.map
