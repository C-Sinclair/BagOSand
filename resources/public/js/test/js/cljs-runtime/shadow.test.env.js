goog.provide('shadow.test.env');
goog.require('cljs.core');
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4582__auto__ = (function shadow$test$env$get_test_count_$_iter__39996(s__39997){
return (new cljs.core.LazySeq(null,(function (){
var s__39997__$1 = s__39997;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39997__$1);
if(temp__5735__auto__){
var s__39997__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39997__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39997__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39999 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39998 = (0);
while(true){
if((i__39998 < size__4581__auto__)){
var map__40009 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39998);
var map__40009__$1 = (((((!((map__40009 == null))))?(((((map__40009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40009):map__40009);
var test_ns = map__40009__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40009__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__39999,cljs.core.count(vars));

var G__40039 = (i__39998 + (1));
i__39998 = G__40039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39999),shadow$test$env$get_test_count_$_iter__39996(cljs.core.chunk_rest(s__39997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39999),null);
}
} else {
var map__40015 = cljs.core.first(s__39997__$2);
var map__40015__$1 = (((((!((map__40015 == null))))?(((((map__40015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40015):map__40015);
var test_ns = map__40015__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40015__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__39996(cljs.core.rest(s__39997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
