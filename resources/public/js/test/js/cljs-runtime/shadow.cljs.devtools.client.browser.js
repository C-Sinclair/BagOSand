goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42294 = arguments.length;
var i__4790__auto___42295 = (0);
while(true){
if((i__4790__auto___42295 < len__4789__auto___42294)){
args__4795__auto__.push((arguments[i__4790__auto___42295]));

var G__42296 = (i__4790__auto___42295 + (1));
i__4790__auto___42295 = G__42296;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42120){
var G__42121 = cljs.core.first(seq42120);
var seq42120__$1 = cljs.core.next(seq42120);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42121,seq42120__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__42139){
var map__42140 = p__42139;
var map__42140__$1 = (((((!((map__42140 == null))))?(((((map__42140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42140):map__42140);
var src = map__42140__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42142 = cljs.core.seq(sources);
var chunk__42143 = null;
var count__42144 = (0);
var i__42145 = (0);
while(true){
if((i__42145 < count__42144)){
var map__42154 = chunk__42143.cljs$core$IIndexed$_nth$arity$2(null,i__42145);
var map__42154__$1 = (((((!((map__42154 == null))))?(((((map__42154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42154):map__42154);
var src = map__42154__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42154__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42154__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42154__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42154__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42157){var e_42297 = e42157;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42297);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42297.message)].join('')));
}

var G__42298 = seq__42142;
var G__42299 = chunk__42143;
var G__42300 = count__42144;
var G__42301 = (i__42145 + (1));
seq__42142 = G__42298;
chunk__42143 = G__42299;
count__42144 = G__42300;
i__42145 = G__42301;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42142);
if(temp__5735__auto__){
var seq__42142__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42142__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42142__$1);
var G__42302 = cljs.core.chunk_rest(seq__42142__$1);
var G__42303 = c__4609__auto__;
var G__42304 = cljs.core.count(c__4609__auto__);
var G__42305 = (0);
seq__42142 = G__42302;
chunk__42143 = G__42303;
count__42144 = G__42304;
i__42145 = G__42305;
continue;
} else {
var map__42159 = cljs.core.first(seq__42142__$1);
var map__42159__$1 = (((((!((map__42159 == null))))?(((((map__42159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42159):map__42159);
var src = map__42159__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42159__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42159__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42159__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42159__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42161){var e_42306 = e42161;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42306);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42306.message)].join('')));
}

var G__42307 = cljs.core.next(seq__42142__$1);
var G__42308 = null;
var G__42309 = (0);
var G__42310 = (0);
seq__42142 = G__42307;
chunk__42143 = G__42308;
count__42144 = G__42309;
i__42145 = G__42310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42162 = cljs.core.seq(js_requires);
var chunk__42163 = null;
var count__42164 = (0);
var i__42165 = (0);
while(true){
if((i__42165 < count__42164)){
var js_ns = chunk__42163.cljs$core$IIndexed$_nth$arity$2(null,i__42165);
var require_str_42311 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42311);


var G__42312 = seq__42162;
var G__42313 = chunk__42163;
var G__42314 = count__42164;
var G__42315 = (i__42165 + (1));
seq__42162 = G__42312;
chunk__42163 = G__42313;
count__42164 = G__42314;
i__42165 = G__42315;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42162);
if(temp__5735__auto__){
var seq__42162__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42162__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42162__$1);
var G__42316 = cljs.core.chunk_rest(seq__42162__$1);
var G__42317 = c__4609__auto__;
var G__42318 = cljs.core.count(c__4609__auto__);
var G__42319 = (0);
seq__42162 = G__42316;
chunk__42163 = G__42317;
count__42164 = G__42318;
i__42165 = G__42319;
continue;
} else {
var js_ns = cljs.core.first(seq__42162__$1);
var require_str_42320 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42320);


var G__42321 = cljs.core.next(seq__42162__$1);
var G__42322 = null;
var G__42323 = (0);
var G__42324 = (0);
seq__42162 = G__42321;
chunk__42163 = G__42322;
count__42164 = G__42323;
i__42165 = G__42324;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__42166 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__42166) : callback.call(null,G__42166));
} else {
var G__42167 = shadow.cljs.devtools.client.env.files_url();
var G__42168 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__42169 = "POST";
var G__42170 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__42171 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42167,G__42168,G__42169,G__42170,G__42171);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__42175){
var map__42176 = p__42175;
var map__42176__$1 = (((((!((map__42176 == null))))?(((((map__42176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42176):map__42176);
var msg = map__42176__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42176__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42176__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42178 = info;
var map__42178__$1 = (((((!((map__42178 == null))))?(((((map__42178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42178):map__42178);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42180(s__42181){
return (new cljs.core.LazySeq(null,(function (){
var s__42181__$1 = s__42181;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42181__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__42186 = cljs.core.first(xs__6292__auto__);
var map__42186__$1 = (((((!((map__42186 == null))))?(((((map__42186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42186):map__42186);
var src = map__42186__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42186__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42186__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__42181__$1,map__42186,map__42186__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42178,map__42178__$1,sources,compiled,map__42176,map__42176__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42180_$_iter__42182(s__42183){
return (new cljs.core.LazySeq(null,((function (s__42181__$1,map__42186,map__42186__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42178,map__42178__$1,sources,compiled,map__42176,map__42176__$1,msg,info,reload_info){
return (function (){
var s__42183__$1 = s__42183;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42183__$1);
if(temp__5735__auto____$1){
var s__42183__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42183__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42183__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42185 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42184 = (0);
while(true){
if((i__42184 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42184);
cljs.core.chunk_append(b__42185,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42325 = (i__42184 + (1));
i__42184 = G__42325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42185),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42180_$_iter__42182(cljs.core.chunk_rest(s__42183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42185),null);
}
} else {
var warning = cljs.core.first(s__42183__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42180_$_iter__42182(cljs.core.rest(s__42183__$2)));
}
} else {
return null;
}
break;
}
});})(s__42181__$1,map__42186,map__42186__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42178,map__42178__$1,sources,compiled,map__42176,map__42176__$1,msg,info,reload_info))
,null,null));
});})(s__42181__$1,map__42186,map__42186__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42178,map__42178__$1,sources,compiled,map__42176,map__42176__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42180(cljs.core.rest(s__42181__$1)));
} else {
var G__42326 = cljs.core.rest(s__42181__$1);
s__42181__$1 = G__42326;
continue;
}
} else {
var G__42327 = cljs.core.rest(s__42181__$1);
s__42181__$1 = G__42327;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__42188_42328 = cljs.core.seq(warnings);
var chunk__42189_42329 = null;
var count__42190_42330 = (0);
var i__42191_42331 = (0);
while(true){
if((i__42191_42331 < count__42190_42330)){
var map__42196_42332 = chunk__42189_42329.cljs$core$IIndexed$_nth$arity$2(null,i__42191_42331);
var map__42196_42333__$1 = (((((!((map__42196_42332 == null))))?(((((map__42196_42332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42196_42332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42196_42332):map__42196_42332);
var w_42334 = map__42196_42333__$1;
var msg_42335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42333__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42333__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42333__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42333__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42338)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42336),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42337),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42335__$1)].join(''));


var G__42339 = seq__42188_42328;
var G__42340 = chunk__42189_42329;
var G__42341 = count__42190_42330;
var G__42342 = (i__42191_42331 + (1));
seq__42188_42328 = G__42339;
chunk__42189_42329 = G__42340;
count__42190_42330 = G__42341;
i__42191_42331 = G__42342;
continue;
} else {
var temp__5735__auto___42343 = cljs.core.seq(seq__42188_42328);
if(temp__5735__auto___42343){
var seq__42188_42344__$1 = temp__5735__auto___42343;
if(cljs.core.chunked_seq_QMARK_(seq__42188_42344__$1)){
var c__4609__auto___42345 = cljs.core.chunk_first(seq__42188_42344__$1);
var G__42346 = cljs.core.chunk_rest(seq__42188_42344__$1);
var G__42347 = c__4609__auto___42345;
var G__42348 = cljs.core.count(c__4609__auto___42345);
var G__42349 = (0);
seq__42188_42328 = G__42346;
chunk__42189_42329 = G__42347;
count__42190_42330 = G__42348;
i__42191_42331 = G__42349;
continue;
} else {
var map__42198_42350 = cljs.core.first(seq__42188_42344__$1);
var map__42198_42351__$1 = (((((!((map__42198_42350 == null))))?(((((map__42198_42350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42198_42350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42198_42350):map__42198_42350);
var w_42352 = map__42198_42351__$1;
var msg_42353__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42198_42351__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42198_42351__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42198_42351__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42198_42351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42356)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42354),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42355),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42353__$1)].join(''));


var G__42357 = cljs.core.next(seq__42188_42344__$1);
var G__42358 = null;
var G__42359 = (0);
var G__42360 = (0);
seq__42188_42328 = G__42357;
chunk__42189_42329 = G__42358;
count__42190_42330 = G__42359;
i__42191_42331 = G__42360;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42200){
var map__42201 = p__42200;
var map__42201__$1 = (((((!((map__42201 == null))))?(((((map__42201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42201):map__42201);
var src = map__42201__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42201__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42201__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42203){
var map__42204 = p__42203;
var map__42204__$1 = (((((!((map__42204 == null))))?(((((map__42204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42204):map__42204);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42204__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42206){
var map__42207 = p__42206;
var map__42207__$1 = (((((!((map__42207 == null))))?(((((map__42207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42207):map__42207);
var rc = map__42207__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42207__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__42174_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42174_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__42209){
var map__42210 = p__42209;
var map__42210__$1 = (((((!((map__42210 == null))))?(((((map__42210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42210):map__42210);
var msg = map__42210__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42210__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42212 = cljs.core.seq(updates);
var chunk__42214 = null;
var count__42215 = (0);
var i__42216 = (0);
while(true){
if((i__42216 < count__42215)){
var path = chunk__42214.cljs$core$IIndexed$_nth$arity$2(null,i__42216);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42242_42361 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42245_42362 = null;
var count__42246_42363 = (0);
var i__42247_42364 = (0);
while(true){
if((i__42247_42364 < count__42246_42363)){
var node_42365 = chunk__42245_42362.cljs$core$IIndexed$_nth$arity$2(null,i__42247_42364);
var path_match_42366 = shadow.cljs.devtools.client.browser.match_paths(node_42365.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42366)){
var new_link_42367 = (function (){var G__42252 = node_42365.cloneNode(true);
G__42252.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42366),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42252;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42366], 0));

goog.dom.insertSiblingAfter(new_link_42367,node_42365);

goog.dom.removeNode(node_42365);


var G__42368 = seq__42242_42361;
var G__42369 = chunk__42245_42362;
var G__42370 = count__42246_42363;
var G__42371 = (i__42247_42364 + (1));
seq__42242_42361 = G__42368;
chunk__42245_42362 = G__42369;
count__42246_42363 = G__42370;
i__42247_42364 = G__42371;
continue;
} else {
var G__42372 = seq__42242_42361;
var G__42373 = chunk__42245_42362;
var G__42374 = count__42246_42363;
var G__42375 = (i__42247_42364 + (1));
seq__42242_42361 = G__42372;
chunk__42245_42362 = G__42373;
count__42246_42363 = G__42374;
i__42247_42364 = G__42375;
continue;
}
} else {
var temp__5735__auto___42376 = cljs.core.seq(seq__42242_42361);
if(temp__5735__auto___42376){
var seq__42242_42377__$1 = temp__5735__auto___42376;
if(cljs.core.chunked_seq_QMARK_(seq__42242_42377__$1)){
var c__4609__auto___42378 = cljs.core.chunk_first(seq__42242_42377__$1);
var G__42379 = cljs.core.chunk_rest(seq__42242_42377__$1);
var G__42380 = c__4609__auto___42378;
var G__42381 = cljs.core.count(c__4609__auto___42378);
var G__42382 = (0);
seq__42242_42361 = G__42379;
chunk__42245_42362 = G__42380;
count__42246_42363 = G__42381;
i__42247_42364 = G__42382;
continue;
} else {
var node_42383 = cljs.core.first(seq__42242_42377__$1);
var path_match_42384 = shadow.cljs.devtools.client.browser.match_paths(node_42383.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42384)){
var new_link_42385 = (function (){var G__42253 = node_42383.cloneNode(true);
G__42253.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42384),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42253;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42384], 0));

goog.dom.insertSiblingAfter(new_link_42385,node_42383);

goog.dom.removeNode(node_42383);


var G__42386 = cljs.core.next(seq__42242_42377__$1);
var G__42387 = null;
var G__42388 = (0);
var G__42389 = (0);
seq__42242_42361 = G__42386;
chunk__42245_42362 = G__42387;
count__42246_42363 = G__42388;
i__42247_42364 = G__42389;
continue;
} else {
var G__42390 = cljs.core.next(seq__42242_42377__$1);
var G__42391 = null;
var G__42392 = (0);
var G__42393 = (0);
seq__42242_42361 = G__42390;
chunk__42245_42362 = G__42391;
count__42246_42363 = G__42392;
i__42247_42364 = G__42393;
continue;
}
}
} else {
}
}
break;
}


var G__42394 = seq__42212;
var G__42395 = chunk__42214;
var G__42396 = count__42215;
var G__42397 = (i__42216 + (1));
seq__42212 = G__42394;
chunk__42214 = G__42395;
count__42215 = G__42396;
i__42216 = G__42397;
continue;
} else {
var G__42398 = seq__42212;
var G__42399 = chunk__42214;
var G__42400 = count__42215;
var G__42401 = (i__42216 + (1));
seq__42212 = G__42398;
chunk__42214 = G__42399;
count__42215 = G__42400;
i__42216 = G__42401;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42212);
if(temp__5735__auto__){
var seq__42212__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42212__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42212__$1);
var G__42402 = cljs.core.chunk_rest(seq__42212__$1);
var G__42403 = c__4609__auto__;
var G__42404 = cljs.core.count(c__4609__auto__);
var G__42405 = (0);
seq__42212 = G__42402;
chunk__42214 = G__42403;
count__42215 = G__42404;
i__42216 = G__42405;
continue;
} else {
var path = cljs.core.first(seq__42212__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42254_42406 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42257_42407 = null;
var count__42258_42408 = (0);
var i__42259_42409 = (0);
while(true){
if((i__42259_42409 < count__42258_42408)){
var node_42410 = chunk__42257_42407.cljs$core$IIndexed$_nth$arity$2(null,i__42259_42409);
var path_match_42411 = shadow.cljs.devtools.client.browser.match_paths(node_42410.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42411)){
var new_link_42412 = (function (){var G__42264 = node_42410.cloneNode(true);
G__42264.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42411),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42264;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42411], 0));

goog.dom.insertSiblingAfter(new_link_42412,node_42410);

goog.dom.removeNode(node_42410);


var G__42413 = seq__42254_42406;
var G__42414 = chunk__42257_42407;
var G__42415 = count__42258_42408;
var G__42416 = (i__42259_42409 + (1));
seq__42254_42406 = G__42413;
chunk__42257_42407 = G__42414;
count__42258_42408 = G__42415;
i__42259_42409 = G__42416;
continue;
} else {
var G__42417 = seq__42254_42406;
var G__42418 = chunk__42257_42407;
var G__42419 = count__42258_42408;
var G__42420 = (i__42259_42409 + (1));
seq__42254_42406 = G__42417;
chunk__42257_42407 = G__42418;
count__42258_42408 = G__42419;
i__42259_42409 = G__42420;
continue;
}
} else {
var temp__5735__auto___42421__$1 = cljs.core.seq(seq__42254_42406);
if(temp__5735__auto___42421__$1){
var seq__42254_42422__$1 = temp__5735__auto___42421__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42254_42422__$1)){
var c__4609__auto___42423 = cljs.core.chunk_first(seq__42254_42422__$1);
var G__42424 = cljs.core.chunk_rest(seq__42254_42422__$1);
var G__42425 = c__4609__auto___42423;
var G__42426 = cljs.core.count(c__4609__auto___42423);
var G__42427 = (0);
seq__42254_42406 = G__42424;
chunk__42257_42407 = G__42425;
count__42258_42408 = G__42426;
i__42259_42409 = G__42427;
continue;
} else {
var node_42428 = cljs.core.first(seq__42254_42422__$1);
var path_match_42429 = shadow.cljs.devtools.client.browser.match_paths(node_42428.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42429)){
var new_link_42430 = (function (){var G__42265 = node_42428.cloneNode(true);
G__42265.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42429),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42265;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42429], 0));

goog.dom.insertSiblingAfter(new_link_42430,node_42428);

goog.dom.removeNode(node_42428);


var G__42431 = cljs.core.next(seq__42254_42422__$1);
var G__42432 = null;
var G__42433 = (0);
var G__42434 = (0);
seq__42254_42406 = G__42431;
chunk__42257_42407 = G__42432;
count__42258_42408 = G__42433;
i__42259_42409 = G__42434;
continue;
} else {
var G__42435 = cljs.core.next(seq__42254_42422__$1);
var G__42436 = null;
var G__42437 = (0);
var G__42438 = (0);
seq__42254_42406 = G__42435;
chunk__42257_42407 = G__42436;
count__42258_42408 = G__42437;
i__42259_42409 = G__42438;
continue;
}
}
} else {
}
}
break;
}


var G__42439 = cljs.core.next(seq__42212__$1);
var G__42440 = null;
var G__42441 = (0);
var G__42442 = (0);
seq__42212 = G__42439;
chunk__42214 = G__42440;
count__42215 = G__42441;
i__42216 = G__42442;
continue;
} else {
var G__42443 = cljs.core.next(seq__42212__$1);
var G__42444 = null;
var G__42445 = (0);
var G__42446 = (0);
seq__42212 = G__42443;
chunk__42214 = G__42444;
count__42215 = G__42445;
i__42216 = G__42446;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__42266){
var map__42267 = p__42266;
var map__42267__$1 = (((((!((map__42267 == null))))?(((((map__42267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42267):map__42267);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42267__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__42269,done){
var map__42270 = p__42269;
var map__42270__$1 = (((((!((map__42270 == null))))?(((((map__42270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42270):map__42270);
var msg = map__42270__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42270__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42270__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42270__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42272){
var map__42273 = p__42272;
var map__42273__$1 = (((((!((map__42273 == null))))?(((((map__42273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42273):map__42273);
var src = map__42273__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42273__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e42275){var e = e42275;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__42276,done){
var map__42277 = p__42276;
var map__42277__$1 = (((((!((map__42277 == null))))?(((((map__42277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42277):map__42277);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42277__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42277__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__42279){
var map__42280 = p__42279;
var map__42280__$1 = (((((!((map__42280 == null))))?(((((map__42280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42280):map__42280);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42280__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42280__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__42282,done){
var map__42283 = p__42282;
var map__42283__$1 = (((((!((map__42283 == null))))?(((((map__42283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42283):map__42283);
var msg = map__42283__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42283__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__42285_42447 = type;
var G__42285_42448__$1 = (((G__42285_42447 instanceof cljs.core.Keyword))?G__42285_42447.fqn:null);
switch (G__42285_42448__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__42286 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__42287 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__42288 = "POST";
var G__42289 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__42290 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42286,G__42287,G__42288,G__42289,G__42290);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__42292 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__42291 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__42291.cljs$core$IFn$_invoke$arity$1 ? fexpr__42291.cljs$core$IFn$_invoke$arity$1(G__42292) : fexpr__42291.call(null,G__42292));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e42293){var e = e42293;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___42450 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___42450)){
var s_42451 = temp__5735__auto___42450;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_42451.onclose = (function (e){
return null;
}));

s_42451.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
