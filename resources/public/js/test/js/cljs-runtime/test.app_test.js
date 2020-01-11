goog.provide('test.app_test');
goog.require('cljs.core');
goog.require('cljs.test');
test.app_test.a_failing_test = (function test$app_test$a_failing_test(){
return cljs.test.test_var(test.app_test.a_failing_test.cljs$lang$var);
});
test.app_test.a_failing_test.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e40459){var t__8952__auto__ = e40459;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

(test.app_test.a_failing_test.cljs$lang$var = new cljs.core.Var(function(){return test.app_test.a_failing_test;},new cljs.core.Symbol("test.app-test","a-failing-test","test.app-test/a-failing-test",1479130526,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test.app-test","test.app-test",-448238787,null),new cljs.core.Symbol(null,"a-failing-test","a-failing-test",818569336,null),"test/app_test.cljs",24,1,4,4,cljs.core.List.EMPTY,null,(cljs.core.truth_(test.app_test.a_failing_test)?test.app_test.a_failing_test.cljs$lang$test:null)])));

//# sourceMappingURL=test.app_test.js.map
