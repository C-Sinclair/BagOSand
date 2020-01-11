goog.provide('shadow.test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('shadow.test.env');
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
shadow.test.run_tests_block = (function shadow$test$run_tests_block(env,namespaces){
var summary = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)], null));
var merge_counters = (function (){
return summary.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__40522 = summary.cljs$core$IDeref$_deref$arity$1(null);
var G__40523 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
var fexpr__40521 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_);
return (fexpr__40521.cljs$core$IFn$_invoke$arity$2 ? fexpr__40521.cljs$core$IFn$_invoke$arity$2(G__40522,G__40523) : fexpr__40521.call(null,G__40522,G__40523));
})());
});
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.set_env_BANG_(env);
})], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ns){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((shadow.test.test_ns_block.cljs$core$IFn$_invoke$arity$2 ? shadow.test.test_ns_block.cljs$core$IFn$_invoke$arity$2(env,ns) : shadow.test.test_ns_block.call(null,env,ns)),merge_counters);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([namespaces], 0))),(function (){
var G__40532_40579 = cljs.core.deref(summary);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__40532_40579) : cljs.test.report.call(null,G__40532_40579));

var G__40534_40583 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(summary),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563));
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__40534_40583) : cljs.test.report.call(null,G__40534_40583));

return cljs.test.clear_env_BANG_();
}));
});
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__40537 = arguments.length;
switch (G__40537) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
return cljs.test.run_block(shadow.test.run_tests_block(env,namespaces));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__40548 = arguments.length;
switch (G__40548) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40539_SHARP_){
var or__4185__auto__ = (re == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40539_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);

shadow.test.test_all_vars_block = (function shadow$test$test_all_vars_block(ns){
var env = cljs.test.get_current_env();
var map__40552 = shadow.test.env.get_test_ns_info(ns);
var map__40552__$1 = (((((!((map__40552 == null))))?(((((map__40552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40552):map__40552);
var test_ns = map__40552__$1;
var fixtures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40552__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40552__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}

var temp__5735__auto___40601 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures);
if(cljs.core.truth_(temp__5735__auto___40601)){
var fix_40602 = temp__5735__auto___40601;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,fix_40602], 0));
} else {
}

var temp__5735__auto__ = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures);
if(cljs.core.truth_(temp__5735__auto__)){
var fix = temp__5735__auto__;
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,fix], 0));
} else {
return null;
}
})], null),cljs.test.test_vars_block(vars));
});
/**
 * Calls test-vars on every var with :test metadata interned in the
 *   namespace, with fixtures.
 */
shadow.test.test_all_vars = (function shadow$test$test_all_vars(ns){
return cljs.test.run_block(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.test.test_all_vars_block(ns),(function (){
var G__40563 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-all-vars","end-test-all-vars",548827253),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__40563) : cljs.test.report.call(null,G__40563));
})));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(env,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));

return cljs.test.block(shadow.test.test_all_vars_block(ns));
}),(function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
});
/**
 * If the namespace defines a function named test-ns-hook, calls that.
 *   Otherwise, calls test-all-vars on the namespace.  'ns' is a
 *   namespace object or a symbol.
 * 
 *   Internally binds *report-counters* to a ref initialized to
 *   *initial-report-counters*.  
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__40571 = arguments.length;
switch (G__40571) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
return cljs.test.run_block(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(shadow.test.test_ns_block(env,ns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.clear_env_BANG_();
})], null)));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
