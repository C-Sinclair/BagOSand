goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36381){
var map__36382 = p__36381;
var map__36382__$1 = (((((!((map__36382 == null))))?(((((map__36382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36382):map__36382);
var m = map__36382__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36384_36743 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36385_36744 = null;
var count__36386_36745 = (0);
var i__36387_36746 = (0);
while(true){
if((i__36387_36746 < count__36386_36745)){
var f_36748 = chunk__36385_36744.cljs$core$IIndexed$_nth$arity$2(null,i__36387_36746);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36748], 0));


var G__36749 = seq__36384_36743;
var G__36750 = chunk__36385_36744;
var G__36751 = count__36386_36745;
var G__36752 = (i__36387_36746 + (1));
seq__36384_36743 = G__36749;
chunk__36385_36744 = G__36750;
count__36386_36745 = G__36751;
i__36387_36746 = G__36752;
continue;
} else {
var temp__5735__auto___36754 = cljs.core.seq(seq__36384_36743);
if(temp__5735__auto___36754){
var seq__36384_36756__$1 = temp__5735__auto___36754;
if(cljs.core.chunked_seq_QMARK_(seq__36384_36756__$1)){
var c__4609__auto___36759 = cljs.core.chunk_first(seq__36384_36756__$1);
var G__36760 = cljs.core.chunk_rest(seq__36384_36756__$1);
var G__36761 = c__4609__auto___36759;
var G__36762 = cljs.core.count(c__4609__auto___36759);
var G__36763 = (0);
seq__36384_36743 = G__36760;
chunk__36385_36744 = G__36761;
count__36386_36745 = G__36762;
i__36387_36746 = G__36763;
continue;
} else {
var f_36766 = cljs.core.first(seq__36384_36756__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36766], 0));


var G__36767 = cljs.core.next(seq__36384_36756__$1);
var G__36768 = null;
var G__36769 = (0);
var G__36770 = (0);
seq__36384_36743 = G__36767;
chunk__36385_36744 = G__36768;
count__36386_36745 = G__36769;
i__36387_36746 = G__36770;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36771 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36771], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36771)))?cljs.core.second(arglists_36771):arglists_36771)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36445_36777 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36446_36778 = null;
var count__36447_36779 = (0);
var i__36448_36780 = (0);
while(true){
if((i__36448_36780 < count__36447_36779)){
var vec__36465_36782 = chunk__36446_36778.cljs$core$IIndexed$_nth$arity$2(null,i__36448_36780);
var name_36783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465_36782,(0),null);
var map__36468_36784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465_36782,(1),null);
var map__36468_36785__$1 = (((((!((map__36468_36784 == null))))?(((((map__36468_36784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36468_36784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36468_36784):map__36468_36784);
var doc_36786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36468_36785__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36468_36785__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36783], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36787], 0));

if(cljs.core.truth_(doc_36786)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36786], 0));
} else {
}


var G__36791 = seq__36445_36777;
var G__36792 = chunk__36446_36778;
var G__36793 = count__36447_36779;
var G__36794 = (i__36448_36780 + (1));
seq__36445_36777 = G__36791;
chunk__36446_36778 = G__36792;
count__36447_36779 = G__36793;
i__36448_36780 = G__36794;
continue;
} else {
var temp__5735__auto___36795 = cljs.core.seq(seq__36445_36777);
if(temp__5735__auto___36795){
var seq__36445_36796__$1 = temp__5735__auto___36795;
if(cljs.core.chunked_seq_QMARK_(seq__36445_36796__$1)){
var c__4609__auto___36799 = cljs.core.chunk_first(seq__36445_36796__$1);
var G__36800 = cljs.core.chunk_rest(seq__36445_36796__$1);
var G__36801 = c__4609__auto___36799;
var G__36802 = cljs.core.count(c__4609__auto___36799);
var G__36803 = (0);
seq__36445_36777 = G__36800;
chunk__36446_36778 = G__36801;
count__36447_36779 = G__36802;
i__36448_36780 = G__36803;
continue;
} else {
var vec__36491_36805 = cljs.core.first(seq__36445_36796__$1);
var name_36806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36491_36805,(0),null);
var map__36494_36807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36491_36805,(1),null);
var map__36494_36808__$1 = (((((!((map__36494_36807 == null))))?(((((map__36494_36807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36494_36807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36494_36807):map__36494_36807);
var doc_36809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494_36808__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494_36808__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36806], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36810], 0));

if(cljs.core.truth_(doc_36809)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36809], 0));
} else {
}


var G__36819 = cljs.core.next(seq__36445_36796__$1);
var G__36820 = null;
var G__36821 = (0);
var G__36822 = (0);
seq__36445_36777 = G__36819;
chunk__36446_36778 = G__36820;
count__36447_36779 = G__36821;
i__36448_36780 = G__36822;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36506 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36507 = null;
var count__36508 = (0);
var i__36509 = (0);
while(true){
if((i__36509 < count__36508)){
var role = chunk__36507.cljs$core$IIndexed$_nth$arity$2(null,i__36509);
var temp__5735__auto___36824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36824__$1)){
var spec_36826 = temp__5735__auto___36824__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36826)], 0));
} else {
}


var G__36827 = seq__36506;
var G__36828 = chunk__36507;
var G__36829 = count__36508;
var G__36830 = (i__36509 + (1));
seq__36506 = G__36827;
chunk__36507 = G__36828;
count__36508 = G__36829;
i__36509 = G__36830;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36506);
if(temp__5735__auto____$1){
var seq__36506__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36506__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36506__$1);
var G__36854 = cljs.core.chunk_rest(seq__36506__$1);
var G__36855 = c__4609__auto__;
var G__36856 = cljs.core.count(c__4609__auto__);
var G__36857 = (0);
seq__36506 = G__36854;
chunk__36507 = G__36855;
count__36508 = G__36856;
i__36509 = G__36857;
continue;
} else {
var role = cljs.core.first(seq__36506__$1);
var temp__5735__auto___36862__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36862__$2)){
var spec_36865 = temp__5735__auto___36862__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36865)], 0));
} else {
}


var G__36870 = cljs.core.next(seq__36506__$1);
var G__36871 = null;
var G__36872 = (0);
var G__36873 = (0);
seq__36506 = G__36870;
chunk__36507 = G__36871;
count__36508 = G__36872;
i__36509 = G__36873;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36888 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36889 = cljs.core.ex_cause(t);
via = G__36888;
t = G__36889;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36594 = datafied_throwable;
var map__36594__$1 = (((((!((map__36594 == null))))?(((((map__36594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36594):map__36594);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36594__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36594__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36594__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36597 = cljs.core.last(via);
var map__36597__$1 = (((((!((map__36597 == null))))?(((((map__36597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36597):map__36597);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36597__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36597__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36597__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36598 = data;
var map__36598__$1 = (((((!((map__36598 == null))))?(((((map__36598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36598):map__36598);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36599 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36599__$1 = (((((!((map__36599 == null))))?(((((map__36599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36599):map__36599);
var top_data = map__36599__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36599__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36610 = phase;
var G__36610__$1 = (((G__36610 instanceof cljs.core.Keyword))?G__36610.fqn:null);
switch (G__36610__$1) {
case "read-source":
var map__36611 = data;
var map__36611__$1 = (((((!((map__36611 == null))))?(((((map__36611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36611):map__36611);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36611__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36611__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36616 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36616__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36616,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36616);
var G__36616__$2 = (cljs.core.truth_((function (){var fexpr__36618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36618.cljs$core$IFn$_invoke$arity$1 ? fexpr__36618.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36618.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36616__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36616__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36616__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36619 = top_data;
var G__36619__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36619);
var G__36619__$2 = (cljs.core.truth_((function (){var fexpr__36620 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36620.cljs$core$IFn$_invoke$arity$1 ? fexpr__36620.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36620.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36619__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36619__$1);
var G__36619__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36619__$2);
var G__36619__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36619__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36619__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36627 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(3),null);
var G__36631 = top_data;
var G__36631__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36631,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36631);
var G__36631__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36631__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36631__$1);
var G__36631__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36631__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36631__$2);
var G__36631__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36631__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36631__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36631__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36631__$4;
}

break;
case "execution":
var vec__36632 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36632,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36632,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36632,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36632,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36590_SHARP_){
var or__4185__auto__ = (p1__36590_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36641 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36641.cljs$core$IFn$_invoke$arity$1 ? fexpr__36641.cljs$core$IFn$_invoke$arity$1(p1__36590_SHARP_) : fexpr__36641.call(null,p1__36590_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36643 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36643__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36643,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36643);
var G__36643__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36643__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36643__$1);
var G__36643__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36643__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36643__$2);
var G__36643__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36643__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36643__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36643__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36643__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36610__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36655){
var map__36658 = p__36655;
var map__36658__$1 = (((((!((map__36658 == null))))?(((((map__36658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36658):map__36658);
var triage_data = map__36658__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36673 = phase;
var G__36673__$1 = (((G__36673 instanceof cljs.core.Keyword))?G__36673.fqn:null);
switch (G__36673__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36674 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36675 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36676 = loc;
var G__36677 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36679_36971 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36680_36972 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36681_36973 = true;
var _STAR_print_fn_STAR__temp_val__36682_36974 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36681_36973);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36682_36974);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36653_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36653_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36680_36972);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36679_36971);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36674,G__36675,G__36676,G__36677) : format.call(null,G__36674,G__36675,G__36676,G__36677));

break;
case "macroexpansion":
var G__36687 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36688 = cause_type;
var G__36689 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36690 = loc;
var G__36691 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36687,G__36688,G__36689,G__36690,G__36691) : format.call(null,G__36687,G__36688,G__36689,G__36690,G__36691));

break;
case "compile-syntax-check":
var G__36692 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36693 = cause_type;
var G__36694 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36695 = loc;
var G__36696 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36692,G__36693,G__36694,G__36695,G__36696) : format.call(null,G__36692,G__36693,G__36694,G__36695,G__36696));

break;
case "compilation":
var G__36700 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36701 = cause_type;
var G__36702 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36703 = loc;
var G__36704 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36700,G__36701,G__36702,G__36703,G__36704) : format.call(null,G__36700,G__36701,G__36702,G__36703,G__36704));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36707 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36708 = symbol;
var G__36709 = loc;
var G__36710 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36711_36987 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36712_36988 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36713_36989 = true;
var _STAR_print_fn_STAR__temp_val__36714_36990 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36713_36989);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36714_36990);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36654_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36654_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36712_36988);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36711_36987);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36707,G__36708,G__36709,G__36710) : format.call(null,G__36707,G__36708,G__36709,G__36710));
} else {
var G__36719 = "Execution error%s at %s(%s).\n%s\n";
var G__36720 = cause_type;
var G__36721 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36722 = loc;
var G__36723 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36719,G__36720,G__36721,G__36722,G__36723) : format.call(null,G__36719,G__36720,G__36721,G__36722,G__36723));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36673__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
