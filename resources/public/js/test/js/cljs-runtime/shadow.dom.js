goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39854 = coll;
var G__39855 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39854,G__39855) : shadow.dom.lazy_native_coll_seq.call(null,G__39854,G__39855));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39875 = arguments.length;
switch (G__39875) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39883 = arguments.length;
switch (G__39883) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39891 = arguments.length;
switch (G__39891) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39901 = arguments.length;
switch (G__39901) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39906 = arguments.length;
switch (G__39906) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__39908 = document;
var G__39909 = shadow.dom.dom_node(el);
return goog.dom.contains(G__39908,G__39909);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__39910 = shadow.dom.dom_node(parent);
var G__39911 = shadow.dom.dom_node(el);
return goog.dom.contains(G__39910,G__39911);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__39912 = shadow.dom.dom_node(el);
var G__39913 = cls;
return goog.dom.classlist.add(G__39912,G__39913);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__39915 = shadow.dom.dom_node(el);
var G__39916 = cls;
return goog.dom.classlist.remove(G__39915,G__39916);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39919 = arguments.length;
switch (G__39919) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__39926 = shadow.dom.dom_node(el);
var G__39927 = cls;
return goog.dom.classlist.toggle(G__39926,G__39927);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39935){if((e39935 instanceof Object)){
var e = e39935;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39935;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39949 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39951 = null;
var count__39952 = (0);
var i__39953 = (0);
while(true){
if((i__39953 < count__39952)){
var el = chunk__39951.cljs$core$IIndexed$_nth$arity$2(null,i__39953);
var handler_40624__$1 = ((function (seq__39949,chunk__39951,count__39952,i__39953,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39949,chunk__39951,count__39952,i__39953,el))
;
var G__39973_40625 = el;
var G__39974_40626 = cljs.core.name(ev);
var G__39975_40627 = handler_40624__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39973_40625,G__39974_40626,G__39975_40627) : shadow.dom.dom_listen.call(null,G__39973_40625,G__39974_40626,G__39975_40627));


var G__40629 = seq__39949;
var G__40630 = chunk__39951;
var G__40631 = count__39952;
var G__40632 = (i__39953 + (1));
seq__39949 = G__40629;
chunk__39951 = G__40630;
count__39952 = G__40631;
i__39953 = G__40632;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39949);
if(temp__5735__auto__){
var seq__39949__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39949__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39949__$1);
var G__40633 = cljs.core.chunk_rest(seq__39949__$1);
var G__40634 = c__4609__auto__;
var G__40635 = cljs.core.count(c__4609__auto__);
var G__40636 = (0);
seq__39949 = G__40633;
chunk__39951 = G__40634;
count__39952 = G__40635;
i__39953 = G__40636;
continue;
} else {
var el = cljs.core.first(seq__39949__$1);
var handler_40637__$1 = ((function (seq__39949,chunk__39951,count__39952,i__39953,el,seq__39949__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39949,chunk__39951,count__39952,i__39953,el,seq__39949__$1,temp__5735__auto__))
;
var G__39981_40638 = el;
var G__39982_40639 = cljs.core.name(ev);
var G__39983_40640 = handler_40637__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39981_40638,G__39982_40639,G__39983_40640) : shadow.dom.dom_listen.call(null,G__39981_40638,G__39982_40639,G__39983_40640));


var G__40641 = cljs.core.next(seq__39949__$1);
var G__40642 = null;
var G__40643 = (0);
var G__40644 = (0);
seq__39949 = G__40641;
chunk__39951 = G__40642;
count__39952 = G__40643;
i__39953 = G__40644;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39988 = arguments.length;
switch (G__39988) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__39992 = shadow.dom.dom_node(el);
var G__39993 = cljs.core.name(ev);
var G__39994 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39992,G__39993,G__39994) : shadow.dom.dom_listen.call(null,G__39992,G__39993,G__39994));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__40001 = shadow.dom.dom_node(el);
var G__40002 = cljs.core.name(ev);
var G__40003 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__40001,G__40002,G__40003) : shadow.dom.dom_listen_remove.call(null,G__40001,G__40002,G__40003));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40005 = cljs.core.seq(events);
var chunk__40006 = null;
var count__40007 = (0);
var i__40008 = (0);
while(true){
if((i__40008 < count__40007)){
var vec__40021 = chunk__40006.cljs$core$IIndexed$_nth$arity$2(null,i__40008);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40021,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40660 = seq__40005;
var G__40661 = chunk__40006;
var G__40662 = count__40007;
var G__40663 = (i__40008 + (1));
seq__40005 = G__40660;
chunk__40006 = G__40661;
count__40007 = G__40662;
i__40008 = G__40663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40005);
if(temp__5735__auto__){
var seq__40005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40005__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40005__$1);
var G__40666 = cljs.core.chunk_rest(seq__40005__$1);
var G__40667 = c__4609__auto__;
var G__40668 = cljs.core.count(c__4609__auto__);
var G__40669 = (0);
seq__40005 = G__40666;
chunk__40006 = G__40667;
count__40007 = G__40668;
i__40008 = G__40669;
continue;
} else {
var vec__40024 = cljs.core.first(seq__40005__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40024,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40024,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40671 = cljs.core.next(seq__40005__$1);
var G__40672 = null;
var G__40673 = (0);
var G__40674 = (0);
seq__40005 = G__40671;
chunk__40006 = G__40672;
count__40007 = G__40673;
i__40008 = G__40674;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__40027 = cljs.core.seq(styles);
var chunk__40028 = null;
var count__40029 = (0);
var i__40030 = (0);
while(true){
if((i__40030 < count__40029)){
var vec__40047 = chunk__40028.cljs$core$IIndexed$_nth$arity$2(null,i__40030);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40047,(1),null);
var G__40050_40680 = dom;
var G__40051_40681 = cljs.core.name(k);
var G__40052_40682 = (((v == null))?"":v);
goog.style.setStyle(G__40050_40680,G__40051_40681,G__40052_40682);


var G__40684 = seq__40027;
var G__40685 = chunk__40028;
var G__40686 = count__40029;
var G__40687 = (i__40030 + (1));
seq__40027 = G__40684;
chunk__40028 = G__40685;
count__40029 = G__40686;
i__40030 = G__40687;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40027);
if(temp__5735__auto__){
var seq__40027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40027__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40027__$1);
var G__40689 = cljs.core.chunk_rest(seq__40027__$1);
var G__40690 = c__4609__auto__;
var G__40691 = cljs.core.count(c__4609__auto__);
var G__40692 = (0);
seq__40027 = G__40689;
chunk__40028 = G__40690;
count__40029 = G__40691;
i__40030 = G__40692;
continue;
} else {
var vec__40054 = cljs.core.first(seq__40027__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40054,(1),null);
var G__40058_40695 = dom;
var G__40059_40696 = cljs.core.name(k);
var G__40060_40697 = (((v == null))?"":v);
goog.style.setStyle(G__40058_40695,G__40059_40696,G__40060_40697);


var G__40699 = cljs.core.next(seq__40027__$1);
var G__40700 = null;
var G__40701 = (0);
var G__40702 = (0);
seq__40027 = G__40699;
chunk__40028 = G__40700;
count__40029 = G__40701;
i__40030 = G__40702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__40064_40703 = key;
var G__40064_40704__$1 = (((G__40064_40703 instanceof cljs.core.Keyword))?G__40064_40703.fqn:null);
switch (G__40064_40704__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40710 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_40710,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_40710,"aria-");
}
})())){
el.setAttribute(ks_40710,value);
} else {
(el[ks_40710] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__40076 = shadow.dom.dom_node(el);
var G__40077 = cls;
return goog.dom.classlist.contains(G__40076,G__40077);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40078){
var map__40079 = p__40078;
var map__40079__$1 = (((((!((map__40079 == null))))?(((((map__40079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40079):map__40079);
var props = map__40079__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40081 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40081,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40081,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40081,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40084 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40084,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40084;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40088 = arguments.length;
switch (G__40088) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40093){
var vec__40095 = p__40093;
var seq__40096 = cljs.core.seq(vec__40095);
var first__40097 = cljs.core.first(seq__40096);
var seq__40096__$1 = cljs.core.next(seq__40096);
var nn = first__40097;
var first__40097__$1 = cljs.core.first(seq__40096__$1);
var seq__40096__$2 = cljs.core.next(seq__40096__$1);
var np = first__40097__$1;
var nc = seq__40096__$2;
var node = vec__40095;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40099 = nn;
var G__40100 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40099,G__40100) : create_fn.call(null,G__40099,G__40100));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40101 = nn;
var G__40102 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40101,G__40102) : create_fn.call(null,G__40101,G__40102));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40105 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40105,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40105,(1),null);
var seq__40108_40739 = cljs.core.seq(node_children);
var chunk__40109_40740 = null;
var count__40110_40741 = (0);
var i__40111_40742 = (0);
while(true){
if((i__40111_40742 < count__40110_40741)){
var child_struct_40744 = chunk__40109_40740.cljs$core$IIndexed$_nth$arity$2(null,i__40111_40742);
var children_40745 = shadow.dom.dom_node(child_struct_40744);
if(cljs.core.seq_QMARK_(children_40745)){
var seq__40139_40746 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40745));
var chunk__40141_40747 = null;
var count__40142_40748 = (0);
var i__40143_40749 = (0);
while(true){
if((i__40143_40749 < count__40142_40748)){
var child_40751 = chunk__40141_40747.cljs$core$IIndexed$_nth$arity$2(null,i__40143_40749);
if(cljs.core.truth_(child_40751)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40751);


var G__40752 = seq__40139_40746;
var G__40753 = chunk__40141_40747;
var G__40754 = count__40142_40748;
var G__40755 = (i__40143_40749 + (1));
seq__40139_40746 = G__40752;
chunk__40141_40747 = G__40753;
count__40142_40748 = G__40754;
i__40143_40749 = G__40755;
continue;
} else {
var G__40757 = seq__40139_40746;
var G__40758 = chunk__40141_40747;
var G__40759 = count__40142_40748;
var G__40760 = (i__40143_40749 + (1));
seq__40139_40746 = G__40757;
chunk__40141_40747 = G__40758;
count__40142_40748 = G__40759;
i__40143_40749 = G__40760;
continue;
}
} else {
var temp__5735__auto___40763 = cljs.core.seq(seq__40139_40746);
if(temp__5735__auto___40763){
var seq__40139_40765__$1 = temp__5735__auto___40763;
if(cljs.core.chunked_seq_QMARK_(seq__40139_40765__$1)){
var c__4609__auto___40766 = cljs.core.chunk_first(seq__40139_40765__$1);
var G__40767 = cljs.core.chunk_rest(seq__40139_40765__$1);
var G__40768 = c__4609__auto___40766;
var G__40769 = cljs.core.count(c__4609__auto___40766);
var G__40770 = (0);
seq__40139_40746 = G__40767;
chunk__40141_40747 = G__40768;
count__40142_40748 = G__40769;
i__40143_40749 = G__40770;
continue;
} else {
var child_40771 = cljs.core.first(seq__40139_40765__$1);
if(cljs.core.truth_(child_40771)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40771);


var G__40772 = cljs.core.next(seq__40139_40765__$1);
var G__40773 = null;
var G__40774 = (0);
var G__40775 = (0);
seq__40139_40746 = G__40772;
chunk__40141_40747 = G__40773;
count__40142_40748 = G__40774;
i__40143_40749 = G__40775;
continue;
} else {
var G__40776 = cljs.core.next(seq__40139_40765__$1);
var G__40777 = null;
var G__40778 = (0);
var G__40779 = (0);
seq__40139_40746 = G__40776;
chunk__40141_40747 = G__40777;
count__40142_40748 = G__40778;
i__40143_40749 = G__40779;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40745);
}


var G__40781 = seq__40108_40739;
var G__40782 = chunk__40109_40740;
var G__40783 = count__40110_40741;
var G__40784 = (i__40111_40742 + (1));
seq__40108_40739 = G__40781;
chunk__40109_40740 = G__40782;
count__40110_40741 = G__40783;
i__40111_40742 = G__40784;
continue;
} else {
var temp__5735__auto___40786 = cljs.core.seq(seq__40108_40739);
if(temp__5735__auto___40786){
var seq__40108_40787__$1 = temp__5735__auto___40786;
if(cljs.core.chunked_seq_QMARK_(seq__40108_40787__$1)){
var c__4609__auto___40788 = cljs.core.chunk_first(seq__40108_40787__$1);
var G__40789 = cljs.core.chunk_rest(seq__40108_40787__$1);
var G__40790 = c__4609__auto___40788;
var G__40791 = cljs.core.count(c__4609__auto___40788);
var G__40792 = (0);
seq__40108_40739 = G__40789;
chunk__40109_40740 = G__40790;
count__40110_40741 = G__40791;
i__40111_40742 = G__40792;
continue;
} else {
var child_struct_40793 = cljs.core.first(seq__40108_40787__$1);
var children_40796 = shadow.dom.dom_node(child_struct_40793);
if(cljs.core.seq_QMARK_(children_40796)){
var seq__40152_40799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40796));
var chunk__40154_40800 = null;
var count__40155_40801 = (0);
var i__40156_40802 = (0);
while(true){
if((i__40156_40802 < count__40155_40801)){
var child_40803 = chunk__40154_40800.cljs$core$IIndexed$_nth$arity$2(null,i__40156_40802);
if(cljs.core.truth_(child_40803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40803);


var G__40804 = seq__40152_40799;
var G__40805 = chunk__40154_40800;
var G__40806 = count__40155_40801;
var G__40807 = (i__40156_40802 + (1));
seq__40152_40799 = G__40804;
chunk__40154_40800 = G__40805;
count__40155_40801 = G__40806;
i__40156_40802 = G__40807;
continue;
} else {
var G__40808 = seq__40152_40799;
var G__40809 = chunk__40154_40800;
var G__40810 = count__40155_40801;
var G__40811 = (i__40156_40802 + (1));
seq__40152_40799 = G__40808;
chunk__40154_40800 = G__40809;
count__40155_40801 = G__40810;
i__40156_40802 = G__40811;
continue;
}
} else {
var temp__5735__auto___40813__$1 = cljs.core.seq(seq__40152_40799);
if(temp__5735__auto___40813__$1){
var seq__40152_40814__$1 = temp__5735__auto___40813__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40152_40814__$1)){
var c__4609__auto___40815 = cljs.core.chunk_first(seq__40152_40814__$1);
var G__40816 = cljs.core.chunk_rest(seq__40152_40814__$1);
var G__40817 = c__4609__auto___40815;
var G__40818 = cljs.core.count(c__4609__auto___40815);
var G__40819 = (0);
seq__40152_40799 = G__40816;
chunk__40154_40800 = G__40817;
count__40155_40801 = G__40818;
i__40156_40802 = G__40819;
continue;
} else {
var child_40820 = cljs.core.first(seq__40152_40814__$1);
if(cljs.core.truth_(child_40820)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40820);


var G__40824 = cljs.core.next(seq__40152_40814__$1);
var G__40825 = null;
var G__40826 = (0);
var G__40827 = (0);
seq__40152_40799 = G__40824;
chunk__40154_40800 = G__40825;
count__40155_40801 = G__40826;
i__40156_40802 = G__40827;
continue;
} else {
var G__40828 = cljs.core.next(seq__40152_40814__$1);
var G__40829 = null;
var G__40830 = (0);
var G__40831 = (0);
seq__40152_40799 = G__40828;
chunk__40154_40800 = G__40829;
count__40155_40801 = G__40830;
i__40156_40802 = G__40831;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40796);
}


var G__40833 = cljs.core.next(seq__40108_40787__$1);
var G__40834 = null;
var G__40835 = (0);
var G__40836 = (0);
seq__40108_40739 = G__40833;
chunk__40109_40740 = G__40834;
count__40110_40741 = G__40835;
i__40111_40742 = G__40836;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__40169 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__40169);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40174 = cljs.core.seq(node);
var chunk__40175 = null;
var count__40176 = (0);
var i__40177 = (0);
while(true){
if((i__40177 < count__40176)){
var n = chunk__40175.cljs$core$IIndexed$_nth$arity$2(null,i__40177);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40847 = seq__40174;
var G__40848 = chunk__40175;
var G__40849 = count__40176;
var G__40850 = (i__40177 + (1));
seq__40174 = G__40847;
chunk__40175 = G__40848;
count__40176 = G__40849;
i__40177 = G__40850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40174);
if(temp__5735__auto__){
var seq__40174__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40174__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40174__$1);
var G__40851 = cljs.core.chunk_rest(seq__40174__$1);
var G__40852 = c__4609__auto__;
var G__40853 = cljs.core.count(c__4609__auto__);
var G__40854 = (0);
seq__40174 = G__40851;
chunk__40175 = G__40852;
count__40176 = G__40853;
i__40177 = G__40854;
continue;
} else {
var n = cljs.core.first(seq__40174__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40856 = cljs.core.next(seq__40174__$1);
var G__40857 = null;
var G__40858 = (0);
var G__40859 = (0);
seq__40174 = G__40856;
chunk__40175 = G__40857;
count__40176 = G__40858;
i__40177 = G__40859;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__40190 = shadow.dom.dom_node(new$);
var G__40191 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__40190,G__40191);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40195 = arguments.length;
switch (G__40195) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40202 = arguments.length;
switch (G__40202) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40218 = arguments.length;
switch (G__40218) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40880 = arguments.length;
var i__4790__auto___40881 = (0);
while(true){
if((i__4790__auto___40881 < len__4789__auto___40880)){
args__4795__auto__.push((arguments[i__4790__auto___40881]));

var G__40884 = (i__4790__auto___40881 + (1));
i__4790__auto___40881 = G__40884;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40229_40886 = cljs.core.seq(nodes);
var chunk__40230_40887 = null;
var count__40231_40888 = (0);
var i__40232_40889 = (0);
while(true){
if((i__40232_40889 < count__40231_40888)){
var node_40891 = chunk__40230_40887.cljs$core$IIndexed$_nth$arity$2(null,i__40232_40889);
fragment.appendChild(shadow.dom._to_dom(node_40891));


var G__40893 = seq__40229_40886;
var G__40894 = chunk__40230_40887;
var G__40895 = count__40231_40888;
var G__40896 = (i__40232_40889 + (1));
seq__40229_40886 = G__40893;
chunk__40230_40887 = G__40894;
count__40231_40888 = G__40895;
i__40232_40889 = G__40896;
continue;
} else {
var temp__5735__auto___40898 = cljs.core.seq(seq__40229_40886);
if(temp__5735__auto___40898){
var seq__40229_40899__$1 = temp__5735__auto___40898;
if(cljs.core.chunked_seq_QMARK_(seq__40229_40899__$1)){
var c__4609__auto___40900 = cljs.core.chunk_first(seq__40229_40899__$1);
var G__40901 = cljs.core.chunk_rest(seq__40229_40899__$1);
var G__40902 = c__4609__auto___40900;
var G__40903 = cljs.core.count(c__4609__auto___40900);
var G__40904 = (0);
seq__40229_40886 = G__40901;
chunk__40230_40887 = G__40902;
count__40231_40888 = G__40903;
i__40232_40889 = G__40904;
continue;
} else {
var node_40905 = cljs.core.first(seq__40229_40899__$1);
fragment.appendChild(shadow.dom._to_dom(node_40905));


var G__40908 = cljs.core.next(seq__40229_40899__$1);
var G__40909 = null;
var G__40910 = (0);
var G__40911 = (0);
seq__40229_40886 = G__40908;
chunk__40230_40887 = G__40909;
count__40231_40888 = G__40910;
i__40232_40889 = G__40911;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40227){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40227));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40239_40916 = cljs.core.seq(scripts);
var chunk__40240_40917 = null;
var count__40241_40918 = (0);
var i__40242_40919 = (0);
while(true){
if((i__40242_40919 < count__40241_40918)){
var vec__40254_40923 = chunk__40240_40917.cljs$core$IIndexed$_nth$arity$2(null,i__40242_40919);
var script_tag_40924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40254_40923,(0),null);
var script_body_40925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40254_40923,(1),null);
eval(script_body_40925);


var G__40926 = seq__40239_40916;
var G__40927 = chunk__40240_40917;
var G__40928 = count__40241_40918;
var G__40929 = (i__40242_40919 + (1));
seq__40239_40916 = G__40926;
chunk__40240_40917 = G__40927;
count__40241_40918 = G__40928;
i__40242_40919 = G__40929;
continue;
} else {
var temp__5735__auto___40932 = cljs.core.seq(seq__40239_40916);
if(temp__5735__auto___40932){
var seq__40239_40934__$1 = temp__5735__auto___40932;
if(cljs.core.chunked_seq_QMARK_(seq__40239_40934__$1)){
var c__4609__auto___40935 = cljs.core.chunk_first(seq__40239_40934__$1);
var G__40936 = cljs.core.chunk_rest(seq__40239_40934__$1);
var G__40937 = c__4609__auto___40935;
var G__40938 = cljs.core.count(c__4609__auto___40935);
var G__40939 = (0);
seq__40239_40916 = G__40936;
chunk__40240_40917 = G__40937;
count__40241_40918 = G__40938;
i__40242_40919 = G__40939;
continue;
} else {
var vec__40257_40941 = cljs.core.first(seq__40239_40934__$1);
var script_tag_40942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257_40941,(0),null);
var script_body_40943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257_40941,(1),null);
eval(script_body_40943);


var G__40944 = cljs.core.next(seq__40239_40934__$1);
var G__40945 = null;
var G__40946 = (0);
var G__40947 = (0);
seq__40239_40916 = G__40944;
chunk__40240_40917 = G__40945;
count__40241_40918 = G__40946;
i__40242_40919 = G__40947;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40266){
var vec__40267 = p__40266;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__40275 = shadow.dom.dom_node(el);
var G__40276 = cls;
return goog.dom.getAncestorByClass(G__40275,G__40276);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40282 = arguments.length;
switch (G__40282) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__40284 = shadow.dom.dom_node(el);
var G__40285 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__40284,G__40285);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__40286 = shadow.dom.dom_node(el);
var G__40287 = cljs.core.name(tag);
var G__40288 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__40286,G__40287,G__40288);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__40289 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__40289);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__40291 = shadow.dom.dom_node(dom);
var G__40292 = value;
return goog.dom.forms.setValue(G__40291,G__40292);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40297 = cljs.core.seq(style_keys);
var chunk__40298 = null;
var count__40299 = (0);
var i__40300 = (0);
while(true){
if((i__40300 < count__40299)){
var it = chunk__40298.cljs$core$IIndexed$_nth$arity$2(null,i__40300);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40971 = seq__40297;
var G__40972 = chunk__40298;
var G__40973 = count__40299;
var G__40974 = (i__40300 + (1));
seq__40297 = G__40971;
chunk__40298 = G__40972;
count__40299 = G__40973;
i__40300 = G__40974;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40297);
if(temp__5735__auto__){
var seq__40297__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40297__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40297__$1);
var G__40977 = cljs.core.chunk_rest(seq__40297__$1);
var G__40978 = c__4609__auto__;
var G__40979 = cljs.core.count(c__4609__auto__);
var G__40980 = (0);
seq__40297 = G__40977;
chunk__40298 = G__40978;
count__40299 = G__40979;
i__40300 = G__40980;
continue;
} else {
var it = cljs.core.first(seq__40297__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40982 = cljs.core.next(seq__40297__$1);
var G__40983 = null;
var G__40984 = (0);
var G__40985 = (0);
seq__40297 = G__40982;
chunk__40298 = G__40983;
count__40299 = G__40984;
i__40300 = G__40985;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k40302,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__40308 = k40302;
var G__40308__$1 = (((G__40308 instanceof cljs.core.Keyword))?G__40308.fqn:null);
switch (G__40308__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40302,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__40313){
var vec__40314 = p__40313;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40301){
var self__ = this;
var G__40301__$1 = this;
return (new cljs.core.RecordIter((0),G__40301__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__40327 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__40327(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40303,other40304){
var self__ = this;
var this40303__$1 = this;
return (((!((other40304 == null)))) && ((this40303__$1.constructor === other40304.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40303__$1.x,other40304.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40303__$1.y,other40304.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40303__$1.__extmap,other40304.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__40301){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__40333 = cljs.core.keyword_identical_QMARK_;
var expr__40334 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__40336 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__40337 = expr__40334;
return (pred__40333.cljs$core$IFn$_invoke$arity$2 ? pred__40333.cljs$core$IFn$_invoke$arity$2(G__40336,G__40337) : pred__40333.call(null,G__40336,G__40337));
})())){
return (new shadow.dom.Coordinate(G__40301,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40338 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__40339 = expr__40334;
return (pred__40333.cljs$core$IFn$_invoke$arity$2 ? pred__40333.cljs$core$IFn$_invoke$arity$2(G__40338,G__40339) : pred__40333.call(null,G__40338,G__40339));
})())){
return (new shadow.dom.Coordinate(self__.x,G__40301,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__40301),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__40301){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40301,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40305){
var extmap__4478__auto__ = (function (){var G__40350 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40305,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40305)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40350);
} else {
return G__40350;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40305),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40305),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__40354 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__40354);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__40357 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__40357);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__40362 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__40362);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k40365,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__40375 = k40365;
var G__40375__$1 = (((G__40375 instanceof cljs.core.Keyword))?G__40375.fqn:null);
switch (G__40375__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40365,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__40379){
var vec__40380 = p__40379;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40380,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40380,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40364){
var self__ = this;
var G__40364__$1 = this;
return (new cljs.core.RecordIter((0),G__40364__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__40406 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__40406(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40366,other40367){
var self__ = this;
var this40366__$1 = this;
return (((!((other40367 == null)))) && ((this40366__$1.constructor === other40367.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40366__$1.w,other40367.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40366__$1.h,other40367.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40366__$1.__extmap,other40367.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__40364){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__40409 = cljs.core.keyword_identical_QMARK_;
var expr__40410 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__40412 = new cljs.core.Keyword(null,"w","w",354169001);
var G__40413 = expr__40410;
return (pred__40409.cljs$core$IFn$_invoke$arity$2 ? pred__40409.cljs$core$IFn$_invoke$arity$2(G__40412,G__40413) : pred__40409.call(null,G__40412,G__40413));
})())){
return (new shadow.dom.Size(G__40364,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40414 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__40415 = expr__40410;
return (pred__40409.cljs$core$IFn$_invoke$arity$2 ? pred__40409.cljs$core$IFn$_invoke$arity$2(G__40414,G__40415) : pred__40409.call(null,G__40414,G__40415));
})())){
return (new shadow.dom.Size(self__.w,G__40364,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__40364),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__40364){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40364,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40369){
var extmap__4478__auto__ = (function (){var G__40417 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40369,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40417);
} else {
return G__40417;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40369),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40369),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__40418 = shadow.dom.dom_node(el);
return goog.style.getSize(G__40418);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__41087 = (i + (1));
var G__41088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41087;
ret = G__41088;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40424){
var vec__40425 = p__40424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40425,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40430 = arguments.length;
switch (G__40430) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__40438_41106 = new_node;
var G__40439_41107 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__40438_41106,G__40439_41107);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__40442_41108 = new_node;
var G__40443_41109 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__40442_41108,G__40443_41109);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__41110 = ps;
var G__41111 = (i + (1));
el__$1 = G__41110;
i = G__41111;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__40450 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__40450);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__40454 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__40454);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__40457 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__40457);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40461 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40461,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40461,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40461,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40465_41124 = cljs.core.seq(props);
var chunk__40466_41125 = null;
var count__40467_41126 = (0);
var i__40468_41127 = (0);
while(true){
if((i__40468_41127 < count__40467_41126)){
var vec__40477_41128 = chunk__40466_41125.cljs$core$IIndexed$_nth$arity$2(null,i__40468_41127);
var k_41129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40477_41128,(0),null);
var v_41130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40477_41128,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_41129);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41129),v_41130);


var G__41135 = seq__40465_41124;
var G__41136 = chunk__40466_41125;
var G__41137 = count__40467_41126;
var G__41138 = (i__40468_41127 + (1));
seq__40465_41124 = G__41135;
chunk__40466_41125 = G__41136;
count__40467_41126 = G__41137;
i__40468_41127 = G__41138;
continue;
} else {
var temp__5735__auto___41140 = cljs.core.seq(seq__40465_41124);
if(temp__5735__auto___41140){
var seq__40465_41141__$1 = temp__5735__auto___41140;
if(cljs.core.chunked_seq_QMARK_(seq__40465_41141__$1)){
var c__4609__auto___41142 = cljs.core.chunk_first(seq__40465_41141__$1);
var G__41143 = cljs.core.chunk_rest(seq__40465_41141__$1);
var G__41144 = c__4609__auto___41142;
var G__41145 = cljs.core.count(c__4609__auto___41142);
var G__41146 = (0);
seq__40465_41124 = G__41143;
chunk__40466_41125 = G__41144;
count__40467_41126 = G__41145;
i__40468_41127 = G__41146;
continue;
} else {
var vec__40483_41147 = cljs.core.first(seq__40465_41141__$1);
var k_41148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483_41147,(0),null);
var v_41149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483_41147,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_41148);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41148),v_41149);


var G__41156 = cljs.core.next(seq__40465_41141__$1);
var G__41157 = null;
var G__41158 = (0);
var G__41159 = (0);
seq__40465_41124 = G__41156;
chunk__40466_41125 = G__41157;
count__40467_41126 = G__41158;
i__40468_41127 = G__41159;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40490 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490,(1),null);
var seq__40493_41162 = cljs.core.seq(node_children);
var chunk__40495_41163 = null;
var count__40496_41164 = (0);
var i__40497_41165 = (0);
while(true){
if((i__40497_41165 < count__40496_41164)){
var child_struct_41167 = chunk__40495_41163.cljs$core$IIndexed$_nth$arity$2(null,i__40497_41165);
if((!((child_struct_41167 == null)))){
if(typeof child_struct_41167 === 'string'){
var text_41169 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41169),child_struct_41167].join(''));
} else {
var children_41170 = shadow.dom.svg_node(child_struct_41167);
if(cljs.core.seq_QMARK_(children_41170)){
var seq__40526_41171 = cljs.core.seq(children_41170);
var chunk__40528_41172 = null;
var count__40529_41173 = (0);
var i__40530_41174 = (0);
while(true){
if((i__40530_41174 < count__40529_41173)){
var child_41176 = chunk__40528_41172.cljs$core$IIndexed$_nth$arity$2(null,i__40530_41174);
if(cljs.core.truth_(child_41176)){
node.appendChild(child_41176);


var G__41179 = seq__40526_41171;
var G__41180 = chunk__40528_41172;
var G__41181 = count__40529_41173;
var G__41182 = (i__40530_41174 + (1));
seq__40526_41171 = G__41179;
chunk__40528_41172 = G__41180;
count__40529_41173 = G__41181;
i__40530_41174 = G__41182;
continue;
} else {
var G__41183 = seq__40526_41171;
var G__41184 = chunk__40528_41172;
var G__41185 = count__40529_41173;
var G__41186 = (i__40530_41174 + (1));
seq__40526_41171 = G__41183;
chunk__40528_41172 = G__41184;
count__40529_41173 = G__41185;
i__40530_41174 = G__41186;
continue;
}
} else {
var temp__5735__auto___41190 = cljs.core.seq(seq__40526_41171);
if(temp__5735__auto___41190){
var seq__40526_41191__$1 = temp__5735__auto___41190;
if(cljs.core.chunked_seq_QMARK_(seq__40526_41191__$1)){
var c__4609__auto___41192 = cljs.core.chunk_first(seq__40526_41191__$1);
var G__41197 = cljs.core.chunk_rest(seq__40526_41191__$1);
var G__41198 = c__4609__auto___41192;
var G__41199 = cljs.core.count(c__4609__auto___41192);
var G__41200 = (0);
seq__40526_41171 = G__41197;
chunk__40528_41172 = G__41198;
count__40529_41173 = G__41199;
i__40530_41174 = G__41200;
continue;
} else {
var child_41201 = cljs.core.first(seq__40526_41191__$1);
if(cljs.core.truth_(child_41201)){
node.appendChild(child_41201);


var G__41202 = cljs.core.next(seq__40526_41191__$1);
var G__41203 = null;
var G__41204 = (0);
var G__41205 = (0);
seq__40526_41171 = G__41202;
chunk__40528_41172 = G__41203;
count__40529_41173 = G__41204;
i__40530_41174 = G__41205;
continue;
} else {
var G__41207 = cljs.core.next(seq__40526_41191__$1);
var G__41208 = null;
var G__41209 = (0);
var G__41210 = (0);
seq__40526_41171 = G__41207;
chunk__40528_41172 = G__41208;
count__40529_41173 = G__41209;
i__40530_41174 = G__41210;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41170);
}
}


var G__41214 = seq__40493_41162;
var G__41215 = chunk__40495_41163;
var G__41216 = count__40496_41164;
var G__41217 = (i__40497_41165 + (1));
seq__40493_41162 = G__41214;
chunk__40495_41163 = G__41215;
count__40496_41164 = G__41216;
i__40497_41165 = G__41217;
continue;
} else {
var G__41218 = seq__40493_41162;
var G__41219 = chunk__40495_41163;
var G__41220 = count__40496_41164;
var G__41221 = (i__40497_41165 + (1));
seq__40493_41162 = G__41218;
chunk__40495_41163 = G__41219;
count__40496_41164 = G__41220;
i__40497_41165 = G__41221;
continue;
}
} else {
var temp__5735__auto___41222 = cljs.core.seq(seq__40493_41162);
if(temp__5735__auto___41222){
var seq__40493_41223__$1 = temp__5735__auto___41222;
if(cljs.core.chunked_seq_QMARK_(seq__40493_41223__$1)){
var c__4609__auto___41224 = cljs.core.chunk_first(seq__40493_41223__$1);
var G__41225 = cljs.core.chunk_rest(seq__40493_41223__$1);
var G__41226 = c__4609__auto___41224;
var G__41227 = cljs.core.count(c__4609__auto___41224);
var G__41228 = (0);
seq__40493_41162 = G__41225;
chunk__40495_41163 = G__41226;
count__40496_41164 = G__41227;
i__40497_41165 = G__41228;
continue;
} else {
var child_struct_41229 = cljs.core.first(seq__40493_41223__$1);
if((!((child_struct_41229 == null)))){
if(typeof child_struct_41229 === 'string'){
var text_41230 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41230),child_struct_41229].join(''));
} else {
var children_41231 = shadow.dom.svg_node(child_struct_41229);
if(cljs.core.seq_QMARK_(children_41231)){
var seq__40541_41232 = cljs.core.seq(children_41231);
var chunk__40543_41233 = null;
var count__40544_41234 = (0);
var i__40545_41235 = (0);
while(true){
if((i__40545_41235 < count__40544_41234)){
var child_41237 = chunk__40543_41233.cljs$core$IIndexed$_nth$arity$2(null,i__40545_41235);
if(cljs.core.truth_(child_41237)){
node.appendChild(child_41237);


var G__41240 = seq__40541_41232;
var G__41241 = chunk__40543_41233;
var G__41242 = count__40544_41234;
var G__41243 = (i__40545_41235 + (1));
seq__40541_41232 = G__41240;
chunk__40543_41233 = G__41241;
count__40544_41234 = G__41242;
i__40545_41235 = G__41243;
continue;
} else {
var G__41244 = seq__40541_41232;
var G__41245 = chunk__40543_41233;
var G__41246 = count__40544_41234;
var G__41247 = (i__40545_41235 + (1));
seq__40541_41232 = G__41244;
chunk__40543_41233 = G__41245;
count__40544_41234 = G__41246;
i__40545_41235 = G__41247;
continue;
}
} else {
var temp__5735__auto___41248__$1 = cljs.core.seq(seq__40541_41232);
if(temp__5735__auto___41248__$1){
var seq__40541_41249__$1 = temp__5735__auto___41248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40541_41249__$1)){
var c__4609__auto___41250 = cljs.core.chunk_first(seq__40541_41249__$1);
var G__41251 = cljs.core.chunk_rest(seq__40541_41249__$1);
var G__41252 = c__4609__auto___41250;
var G__41253 = cljs.core.count(c__4609__auto___41250);
var G__41254 = (0);
seq__40541_41232 = G__41251;
chunk__40543_41233 = G__41252;
count__40544_41234 = G__41253;
i__40545_41235 = G__41254;
continue;
} else {
var child_41255 = cljs.core.first(seq__40541_41249__$1);
if(cljs.core.truth_(child_41255)){
node.appendChild(child_41255);


var G__41261 = cljs.core.next(seq__40541_41249__$1);
var G__41262 = null;
var G__41263 = (0);
var G__41264 = (0);
seq__40541_41232 = G__41261;
chunk__40543_41233 = G__41262;
count__40544_41234 = G__41263;
i__40545_41235 = G__41264;
continue;
} else {
var G__41265 = cljs.core.next(seq__40541_41249__$1);
var G__41266 = null;
var G__41267 = (0);
var G__41268 = (0);
seq__40541_41232 = G__41265;
chunk__40543_41233 = G__41266;
count__40544_41234 = G__41267;
i__40545_41235 = G__41268;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41231);
}
}


var G__41269 = cljs.core.next(seq__40493_41223__$1);
var G__41270 = null;
var G__41271 = (0);
var G__41272 = (0);
seq__40493_41162 = G__41269;
chunk__40495_41163 = G__41270;
count__40496_41164 = G__41271;
i__40497_41165 = G__41272;
continue;
} else {
var G__41275 = cljs.core.next(seq__40493_41223__$1);
var G__41276 = null;
var G__41277 = (0);
var G__41278 = (0);
seq__40493_41162 = G__41275;
chunk__40495_41163 = G__41276;
count__40496_41164 = G__41277;
i__40497_41165 = G__41278;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__40555_41279 = shadow.dom._to_svg;
var G__40556_41280 = "string";
var G__40557_41281 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__40555_41279,G__40556_41280,G__40557_41281);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__40560_41292 = shadow.dom._to_svg;
var G__40561_41293 = "null";
var G__40562_41294 = (function (_){
return null;
});
goog.object.set(G__40560_41292,G__40561_41293,G__40562_41294);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41297 = arguments.length;
var i__4790__auto___41298 = (0);
while(true){
if((i__4790__auto___41298 < len__4789__auto___41297)){
args__4795__auto__.push((arguments[i__4790__auto___41298]));

var G__41299 = (i__4790__auto___41298 + (1));
i__4790__auto___41298 = G__41299;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40564){
var G__40565 = cljs.core.first(seq40564);
var seq40564__$1 = cljs.core.next(seq40564);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40565,seq40564__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40575 = arguments.length;
switch (G__40575) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__40580_41306 = shadow.dom.dom_node(el);
var G__40581_41307 = cljs.core.name(event);
var G__40582_41308 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40580_41306,G__40581_41307,G__40582_41308) : shadow.dom.dom_listen.call(null,G__40580_41306,G__40581_41307,G__40582_41308));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__38209__auto___41312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_40590){
var state_val_40591 = (state_40590[(1)]);
if((state_val_40591 === (1))){
var state_40590__$1 = state_40590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40590__$1,(2),once_or_cleanup);
} else {
if((state_val_40591 === (2))){
var inst_40587 = (state_40590[(2)]);
var inst_40588 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40590__$1 = (function (){var statearr_40594 = state_40590;
(statearr_40594[(7)] = inst_40587);

return statearr_40594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40590__$1,inst_40588);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__38109__auto__ = null;
var shadow$dom$state_machine__38109__auto____0 = (function (){
var statearr_40596 = [null,null,null,null,null,null,null,null];
(statearr_40596[(0)] = shadow$dom$state_machine__38109__auto__);

(statearr_40596[(1)] = (1));

return statearr_40596;
});
var shadow$dom$state_machine__38109__auto____1 = (function (state_40590){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_40590);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e40597){if((e40597 instanceof Object)){
var ex__38112__auto__ = e40597;
var statearr_40598_41319 = state_40590;
(statearr_40598_41319[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41320 = state_40590;
state_40590 = G__41320;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
shadow$dom$state_machine__38109__auto__ = function(state_40590){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__38109__auto____0.call(this);
case 1:
return shadow$dom$state_machine__38109__auto____1.call(this,state_40590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__38109__auto____0;
shadow$dom$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__38109__auto____1;
return shadow$dom$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_40600 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_40600[(6)] = c__38209__auto___41312);

return statearr_40600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
