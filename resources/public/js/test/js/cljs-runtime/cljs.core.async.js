goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38269 = arguments.length;
switch (G__38269) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38270 = (function (f,blockable,meta38271){
this.f = f;
this.blockable = blockable;
this.meta38271 = meta38271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38272,meta38271__$1){
var self__ = this;
var _38272__$1 = this;
return (new cljs.core.async.t_cljs$core$async38270(self__.f,self__.blockable,meta38271__$1));
}));

(cljs.core.async.t_cljs$core$async38270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38272){
var self__ = this;
var _38272__$1 = this;
return self__.meta38271;
}));

(cljs.core.async.t_cljs$core$async38270.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38270.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38271","meta38271",-515818019,null)], null);
}));

(cljs.core.async.t_cljs$core$async38270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38270");

(cljs.core.async.t_cljs$core$async38270.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38270.
 */
cljs.core.async.__GT_t_cljs$core$async38270 = (function cljs$core$async$__GT_t_cljs$core$async38270(f__$1,blockable__$1,meta38271){
return (new cljs.core.async.t_cljs$core$async38270(f__$1,blockable__$1,meta38271));
});

}

return (new cljs.core.async.t_cljs$core$async38270(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38275 = arguments.length;
switch (G__38275) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38277 = arguments.length;
switch (G__38277) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38279 = arguments.length;
switch (G__38279) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_39714 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39714) : fn1.call(null,val_39714));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39714) : fn1.call(null,val_39714));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38281 = arguments.length;
switch (G__38281) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___39722 = n;
var x_39723 = (0);
while(true){
if((x_39723 < n__4666__auto___39722)){
(a[x_39723] = x_39723);

var G__39724 = (x_39723 + (1));
x_39723 = G__39724;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38282 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38282 = (function (flag,meta38283){
this.flag = flag;
this.meta38283 = meta38283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38284,meta38283__$1){
var self__ = this;
var _38284__$1 = this;
return (new cljs.core.async.t_cljs$core$async38282(self__.flag,meta38283__$1));
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38284){
var self__ = this;
var _38284__$1 = this;
return self__.meta38283;
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38283","meta38283",-983454836,null)], null);
}));

(cljs.core.async.t_cljs$core$async38282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38282");

(cljs.core.async.t_cljs$core$async38282.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38282.
 */
cljs.core.async.__GT_t_cljs$core$async38282 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38282(flag__$1,meta38283){
return (new cljs.core.async.t_cljs$core$async38282(flag__$1,meta38283));
});

}

return (new cljs.core.async.t_cljs$core$async38282(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38285 = (function (flag,cb,meta38286){
this.flag = flag;
this.cb = cb;
this.meta38286 = meta38286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38287,meta38286__$1){
var self__ = this;
var _38287__$1 = this;
return (new cljs.core.async.t_cljs$core$async38285(self__.flag,self__.cb,meta38286__$1));
}));

(cljs.core.async.t_cljs$core$async38285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38287){
var self__ = this;
var _38287__$1 = this;
return self__.meta38286;
}));

(cljs.core.async.t_cljs$core$async38285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38286","meta38286",988736695,null)], null);
}));

(cljs.core.async.t_cljs$core$async38285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38285");

(cljs.core.async.t_cljs$core$async38285.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38285.
 */
cljs.core.async.__GT_t_cljs$core$async38285 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38285(flag__$1,cb__$1,meta38286){
return (new cljs.core.async.t_cljs$core$async38285(flag__$1,cb__$1,meta38286));
});

}

return (new cljs.core.async.t_cljs$core$async38285(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38288_SHARP_){
var G__38290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38288_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38290) : fret.call(null,G__38290));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38289_SHARP_){
var G__38291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38289_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38291) : fret.call(null,G__38291));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39752 = (i + (1));
i = G__39752;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39758 = arguments.length;
var i__4790__auto___39759 = (0);
while(true){
if((i__4790__auto___39759 < len__4789__auto___39758)){
args__4795__auto__.push((arguments[i__4790__auto___39759]));

var G__39760 = (i__4790__auto___39759 + (1));
i__4790__auto___39759 = G__39760;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38294){
var map__38295 = p__38294;
var map__38295__$1 = (((((!((map__38295 == null))))?(((((map__38295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38295):map__38295);
var opts = map__38295__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38292){
var G__38293 = cljs.core.first(seq38292);
var seq38292__$1 = cljs.core.next(seq38292);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38293,seq38292__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38298 = arguments.length;
switch (G__38298) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38209__auto___39770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38322){
var state_val_38323 = (state_38322[(1)]);
if((state_val_38323 === (7))){
var inst_38318 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38324_39773 = state_38322__$1;
(statearr_38324_39773[(2)] = inst_38318);

(statearr_38324_39773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (1))){
var state_38322__$1 = state_38322;
var statearr_38325_39776 = state_38322__$1;
(statearr_38325_39776[(2)] = null);

(statearr_38325_39776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (4))){
var inst_38301 = (state_38322[(7)]);
var inst_38301__$1 = (state_38322[(2)]);
var inst_38302 = (inst_38301__$1 == null);
var state_38322__$1 = (function (){var statearr_38326 = state_38322;
(statearr_38326[(7)] = inst_38301__$1);

return statearr_38326;
})();
if(cljs.core.truth_(inst_38302)){
var statearr_38327_39777 = state_38322__$1;
(statearr_38327_39777[(1)] = (5));

} else {
var statearr_38328_39778 = state_38322__$1;
(statearr_38328_39778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (13))){
var state_38322__$1 = state_38322;
var statearr_38329_39779 = state_38322__$1;
(statearr_38329_39779[(2)] = null);

(statearr_38329_39779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (6))){
var inst_38301 = (state_38322[(7)]);
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38322__$1,(11),to,inst_38301);
} else {
if((state_val_38323 === (3))){
var inst_38320 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38322__$1,inst_38320);
} else {
if((state_val_38323 === (12))){
var state_38322__$1 = state_38322;
var statearr_38330_39782 = state_38322__$1;
(statearr_38330_39782[(2)] = null);

(statearr_38330_39782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (2))){
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38322__$1,(4),from);
} else {
if((state_val_38323 === (11))){
var inst_38311 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
if(cljs.core.truth_(inst_38311)){
var statearr_38331_39786 = state_38322__$1;
(statearr_38331_39786[(1)] = (12));

} else {
var statearr_38332_39787 = state_38322__$1;
(statearr_38332_39787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (9))){
var state_38322__$1 = state_38322;
var statearr_38333_39789 = state_38322__$1;
(statearr_38333_39789[(2)] = null);

(statearr_38333_39789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (5))){
var state_38322__$1 = state_38322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38334_39791 = state_38322__$1;
(statearr_38334_39791[(1)] = (8));

} else {
var statearr_38335_39792 = state_38322__$1;
(statearr_38335_39792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (14))){
var inst_38316 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38336_39794 = state_38322__$1;
(statearr_38336_39794[(2)] = inst_38316);

(statearr_38336_39794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (10))){
var inst_38308 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38337_39795 = state_38322__$1;
(statearr_38337_39795[(2)] = inst_38308);

(statearr_38337_39795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (8))){
var inst_38305 = cljs.core.async.close_BANG_(to);
var state_38322__$1 = state_38322;
var statearr_38338_39796 = state_38322__$1;
(statearr_38338_39796[(2)] = inst_38305);

(statearr_38338_39796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_38339 = [null,null,null,null,null,null,null,null];
(statearr_38339[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_38339[(1)] = (1));

return statearr_38339;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_38322){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38322);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38340){if((e38340 instanceof Object)){
var ex__38112__auto__ = e38340;
var statearr_38341_39797 = state_38322;
(statearr_38341_39797[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39799 = state_38322;
state_38322 = G__39799;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_38322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_38322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38342 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38342[(6)] = c__38209__auto___39770);

return statearr_38342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__38343){
var vec__38344 = p__38343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38344,(1),null);
var job = vec__38344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38209__auto___39812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38351){
var state_val_38352 = (state_38351[(1)]);
if((state_val_38352 === (1))){
var state_38351__$1 = state_38351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38351__$1,(2),res,v);
} else {
if((state_val_38352 === (2))){
var inst_38348 = (state_38351[(2)]);
var inst_38349 = cljs.core.async.close_BANG_(res);
var state_38351__$1 = (function (){var statearr_38353 = state_38351;
(statearr_38353[(7)] = inst_38348);

return statearr_38353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38351__$1,inst_38349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0 = (function (){
var statearr_38354 = [null,null,null,null,null,null,null,null];
(statearr_38354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__);

(statearr_38354[(1)] = (1));

return statearr_38354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1 = (function (state_38351){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38351);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38355){if((e38355 instanceof Object)){
var ex__38112__auto__ = e38355;
var statearr_38356_39816 = state_38351;
(statearr_38356_39816[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39819 = state_38351;
state_38351 = G__39819;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = function(state_38351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1.call(this,state_38351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38357 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38357[(6)] = c__38209__auto___39812);

return statearr_38357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38358){
var vec__38359 = p__38358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38359,(1),null);
var job = vec__38359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___39822 = n;
var __39823 = (0);
while(true){
if((__39823 < n__4666__auto___39822)){
var G__38362_39824 = type;
var G__38362_39825__$1 = (((G__38362_39824 instanceof cljs.core.Keyword))?G__38362_39824.fqn:null);
switch (G__38362_39825__$1) {
case "compute":
var c__38209__auto___39829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39823,c__38209__auto___39829,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async){
return (function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = ((function (__39823,c__38209__auto___39829,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async){
return (function (state_38375){
var state_val_38376 = (state_38375[(1)]);
if((state_val_38376 === (1))){
var state_38375__$1 = state_38375;
var statearr_38377_39830 = state_38375__$1;
(statearr_38377_39830[(2)] = null);

(statearr_38377_39830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (2))){
var state_38375__$1 = state_38375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38375__$1,(4),jobs);
} else {
if((state_val_38376 === (3))){
var inst_38373 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38375__$1,inst_38373);
} else {
if((state_val_38376 === (4))){
var inst_38365 = (state_38375[(2)]);
var inst_38366 = process(inst_38365);
var state_38375__$1 = state_38375;
if(cljs.core.truth_(inst_38366)){
var statearr_38378_39831 = state_38375__$1;
(statearr_38378_39831[(1)] = (5));

} else {
var statearr_38379_39832 = state_38375__$1;
(statearr_38379_39832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (5))){
var state_38375__$1 = state_38375;
var statearr_38380_39833 = state_38375__$1;
(statearr_38380_39833[(2)] = null);

(statearr_38380_39833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (6))){
var state_38375__$1 = state_38375;
var statearr_38381_39834 = state_38375__$1;
(statearr_38381_39834[(2)] = null);

(statearr_38381_39834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (7))){
var inst_38371 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38382_39835 = state_38375__$1;
(statearr_38382_39835[(2)] = inst_38371);

(statearr_38382_39835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39823,c__38209__auto___39829,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async))
;
return ((function (__39823,switch__38108__auto__,c__38209__auto___39829,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0 = (function (){
var statearr_38383 = [null,null,null,null,null,null,null];
(statearr_38383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__);

(statearr_38383[(1)] = (1));

return statearr_38383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1 = (function (state_38375){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38375);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38384){if((e38384 instanceof Object)){
var ex__38112__auto__ = e38384;
var statearr_38385_39840 = state_38375;
(statearr_38385_39840[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39842 = state_38375;
state_38375 = G__39842;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = function(state_38375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1.call(this,state_38375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__;
})()
;})(__39823,switch__38108__auto__,c__38209__auto___39829,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async))
})();
var state__38211__auto__ = (function (){var statearr_38386 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38386[(6)] = c__38209__auto___39829);

return statearr_38386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
});})(__39823,c__38209__auto___39829,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async))
);


break;
case "async":
var c__38209__auto___39844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39823,c__38209__auto___39844,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async){
return (function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = ((function (__39823,c__38209__auto___39844,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async){
return (function (state_38399){
var state_val_38400 = (state_38399[(1)]);
if((state_val_38400 === (1))){
var state_38399__$1 = state_38399;
var statearr_38401_39846 = state_38399__$1;
(statearr_38401_39846[(2)] = null);

(statearr_38401_39846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38400 === (2))){
var state_38399__$1 = state_38399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38399__$1,(4),jobs);
} else {
if((state_val_38400 === (3))){
var inst_38397 = (state_38399[(2)]);
var state_38399__$1 = state_38399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38399__$1,inst_38397);
} else {
if((state_val_38400 === (4))){
var inst_38389 = (state_38399[(2)]);
var inst_38390 = async(inst_38389);
var state_38399__$1 = state_38399;
if(cljs.core.truth_(inst_38390)){
var statearr_38402_39847 = state_38399__$1;
(statearr_38402_39847[(1)] = (5));

} else {
var statearr_38403_39848 = state_38399__$1;
(statearr_38403_39848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38400 === (5))){
var state_38399__$1 = state_38399;
var statearr_38404_39851 = state_38399__$1;
(statearr_38404_39851[(2)] = null);

(statearr_38404_39851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38400 === (6))){
var state_38399__$1 = state_38399;
var statearr_38405_39853 = state_38399__$1;
(statearr_38405_39853[(2)] = null);

(statearr_38405_39853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38400 === (7))){
var inst_38395 = (state_38399[(2)]);
var state_38399__$1 = state_38399;
var statearr_38406_39856 = state_38399__$1;
(statearr_38406_39856[(2)] = inst_38395);

(statearr_38406_39856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39823,c__38209__auto___39844,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async))
;
return ((function (__39823,switch__38108__auto__,c__38209__auto___39844,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0 = (function (){
var statearr_38407 = [null,null,null,null,null,null,null];
(statearr_38407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__);

(statearr_38407[(1)] = (1));

return statearr_38407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1 = (function (state_38399){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38399);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38408){if((e38408 instanceof Object)){
var ex__38112__auto__ = e38408;
var statearr_38409_39861 = state_38399;
(statearr_38409_39861[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39862 = state_38399;
state_38399 = G__39862;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = function(state_38399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1.call(this,state_38399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__;
})()
;})(__39823,switch__38108__auto__,c__38209__auto___39844,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async))
})();
var state__38211__auto__ = (function (){var statearr_38410 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38410[(6)] = c__38209__auto___39844);

return statearr_38410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
});})(__39823,c__38209__auto___39844,G__38362_39824,G__38362_39825__$1,n__4666__auto___39822,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38362_39825__$1)].join('')));

}

var G__39863 = (__39823 + (1));
__39823 = G__39863;
continue;
} else {
}
break;
}

var c__38209__auto___39864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38432){
var state_val_38433 = (state_38432[(1)]);
if((state_val_38433 === (7))){
var inst_38428 = (state_38432[(2)]);
var state_38432__$1 = state_38432;
var statearr_38434_39865 = state_38432__$1;
(statearr_38434_39865[(2)] = inst_38428);

(statearr_38434_39865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (1))){
var state_38432__$1 = state_38432;
var statearr_38435_39866 = state_38432__$1;
(statearr_38435_39866[(2)] = null);

(statearr_38435_39866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (4))){
var inst_38413 = (state_38432[(7)]);
var inst_38413__$1 = (state_38432[(2)]);
var inst_38414 = (inst_38413__$1 == null);
var state_38432__$1 = (function (){var statearr_38436 = state_38432;
(statearr_38436[(7)] = inst_38413__$1);

return statearr_38436;
})();
if(cljs.core.truth_(inst_38414)){
var statearr_38437_39867 = state_38432__$1;
(statearr_38437_39867[(1)] = (5));

} else {
var statearr_38438_39868 = state_38432__$1;
(statearr_38438_39868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (6))){
var inst_38413 = (state_38432[(7)]);
var inst_38418 = (state_38432[(8)]);
var inst_38418__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38420 = [inst_38413,inst_38418__$1];
var inst_38421 = (new cljs.core.PersistentVector(null,2,(5),inst_38419,inst_38420,null));
var state_38432__$1 = (function (){var statearr_38439 = state_38432;
(statearr_38439[(8)] = inst_38418__$1);

return statearr_38439;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38432__$1,(8),jobs,inst_38421);
} else {
if((state_val_38433 === (3))){
var inst_38430 = (state_38432[(2)]);
var state_38432__$1 = state_38432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38432__$1,inst_38430);
} else {
if((state_val_38433 === (2))){
var state_38432__$1 = state_38432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38432__$1,(4),from);
} else {
if((state_val_38433 === (9))){
var inst_38425 = (state_38432[(2)]);
var state_38432__$1 = (function (){var statearr_38440 = state_38432;
(statearr_38440[(9)] = inst_38425);

return statearr_38440;
})();
var statearr_38441_39869 = state_38432__$1;
(statearr_38441_39869[(2)] = null);

(statearr_38441_39869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (5))){
var inst_38416 = cljs.core.async.close_BANG_(jobs);
var state_38432__$1 = state_38432;
var statearr_38442_39870 = state_38432__$1;
(statearr_38442_39870[(2)] = inst_38416);

(statearr_38442_39870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (8))){
var inst_38418 = (state_38432[(8)]);
var inst_38423 = (state_38432[(2)]);
var state_38432__$1 = (function (){var statearr_38443 = state_38432;
(statearr_38443[(10)] = inst_38423);

return statearr_38443;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38432__$1,(9),results,inst_38418);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0 = (function (){
var statearr_38444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__);

(statearr_38444[(1)] = (1));

return statearr_38444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1 = (function (state_38432){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38432);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38445){if((e38445 instanceof Object)){
var ex__38112__auto__ = e38445;
var statearr_38446_39872 = state_38432;
(statearr_38446_39872[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39873 = state_38432;
state_38432 = G__39873;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = function(state_38432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1.call(this,state_38432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38447 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38447[(6)] = c__38209__auto___39864);

return statearr_38447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


var c__38209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38485){
var state_val_38486 = (state_38485[(1)]);
if((state_val_38486 === (7))){
var inst_38481 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38487_39876 = state_38485__$1;
(statearr_38487_39876[(2)] = inst_38481);

(statearr_38487_39876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (20))){
var state_38485__$1 = state_38485;
var statearr_38488_39877 = state_38485__$1;
(statearr_38488_39877[(2)] = null);

(statearr_38488_39877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (1))){
var state_38485__$1 = state_38485;
var statearr_38489_39878 = state_38485__$1;
(statearr_38489_39878[(2)] = null);

(statearr_38489_39878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (4))){
var inst_38450 = (state_38485[(7)]);
var inst_38450__$1 = (state_38485[(2)]);
var inst_38451 = (inst_38450__$1 == null);
var state_38485__$1 = (function (){var statearr_38490 = state_38485;
(statearr_38490[(7)] = inst_38450__$1);

return statearr_38490;
})();
if(cljs.core.truth_(inst_38451)){
var statearr_38491_39879 = state_38485__$1;
(statearr_38491_39879[(1)] = (5));

} else {
var statearr_38492_39880 = state_38485__$1;
(statearr_38492_39880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (15))){
var inst_38463 = (state_38485[(8)]);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38485__$1,(18),to,inst_38463);
} else {
if((state_val_38486 === (21))){
var inst_38476 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38493_39881 = state_38485__$1;
(statearr_38493_39881[(2)] = inst_38476);

(statearr_38493_39881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (13))){
var inst_38478 = (state_38485[(2)]);
var state_38485__$1 = (function (){var statearr_38494 = state_38485;
(statearr_38494[(9)] = inst_38478);

return statearr_38494;
})();
var statearr_38495_39884 = state_38485__$1;
(statearr_38495_39884[(2)] = null);

(statearr_38495_39884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (6))){
var inst_38450 = (state_38485[(7)]);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38485__$1,(11),inst_38450);
} else {
if((state_val_38486 === (17))){
var inst_38471 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38471)){
var statearr_38496_39885 = state_38485__$1;
(statearr_38496_39885[(1)] = (19));

} else {
var statearr_38497_39886 = state_38485__$1;
(statearr_38497_39886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (3))){
var inst_38483 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38485__$1,inst_38483);
} else {
if((state_val_38486 === (12))){
var inst_38460 = (state_38485[(10)]);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38485__$1,(14),inst_38460);
} else {
if((state_val_38486 === (2))){
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38485__$1,(4),results);
} else {
if((state_val_38486 === (19))){
var state_38485__$1 = state_38485;
var statearr_38498_39887 = state_38485__$1;
(statearr_38498_39887[(2)] = null);

(statearr_38498_39887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (11))){
var inst_38460 = (state_38485[(2)]);
var state_38485__$1 = (function (){var statearr_38499 = state_38485;
(statearr_38499[(10)] = inst_38460);

return statearr_38499;
})();
var statearr_38500_39888 = state_38485__$1;
(statearr_38500_39888[(2)] = null);

(statearr_38500_39888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (9))){
var state_38485__$1 = state_38485;
var statearr_38501_39890 = state_38485__$1;
(statearr_38501_39890[(2)] = null);

(statearr_38501_39890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (5))){
var state_38485__$1 = state_38485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38502_39892 = state_38485__$1;
(statearr_38502_39892[(1)] = (8));

} else {
var statearr_38503_39893 = state_38485__$1;
(statearr_38503_39893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (14))){
var inst_38463 = (state_38485[(8)]);
var inst_38463__$1 = (state_38485[(2)]);
var inst_38464 = (inst_38463__$1 == null);
var inst_38465 = cljs.core.not(inst_38464);
var state_38485__$1 = (function (){var statearr_38504 = state_38485;
(statearr_38504[(8)] = inst_38463__$1);

return statearr_38504;
})();
if(inst_38465){
var statearr_38505_39894 = state_38485__$1;
(statearr_38505_39894[(1)] = (15));

} else {
var statearr_38506_39895 = state_38485__$1;
(statearr_38506_39895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (16))){
var state_38485__$1 = state_38485;
var statearr_38507_39896 = state_38485__$1;
(statearr_38507_39896[(2)] = false);

(statearr_38507_39896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (10))){
var inst_38457 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38508_39897 = state_38485__$1;
(statearr_38508_39897[(2)] = inst_38457);

(statearr_38508_39897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (18))){
var inst_38468 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38509_39898 = state_38485__$1;
(statearr_38509_39898[(2)] = inst_38468);

(statearr_38509_39898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (8))){
var inst_38454 = cljs.core.async.close_BANG_(to);
var state_38485__$1 = state_38485;
var statearr_38510_39900 = state_38485__$1;
(statearr_38510_39900[(2)] = inst_38454);

(statearr_38510_39900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0 = (function (){
var statearr_38511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__);

(statearr_38511[(1)] = (1));

return statearr_38511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1 = (function (state_38485){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38485);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38512){if((e38512 instanceof Object)){
var ex__38112__auto__ = e38512;
var statearr_38513_39902 = state_38485;
(statearr_38513_39902[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39903 = state_38485;
state_38485 = G__39903;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__ = function(state_38485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1.call(this,state_38485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38514 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38514[(6)] = c__38209__auto__);

return statearr_38514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));

return c__38209__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38516 = arguments.length;
switch (G__38516) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38518 = arguments.length;
switch (G__38518) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38520 = arguments.length;
switch (G__38520) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38209__auto___39917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38546){
var state_val_38547 = (state_38546[(1)]);
if((state_val_38547 === (7))){
var inst_38542 = (state_38546[(2)]);
var state_38546__$1 = state_38546;
var statearr_38548_39920 = state_38546__$1;
(statearr_38548_39920[(2)] = inst_38542);

(statearr_38548_39920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (1))){
var state_38546__$1 = state_38546;
var statearr_38549_39923 = state_38546__$1;
(statearr_38549_39923[(2)] = null);

(statearr_38549_39923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (4))){
var inst_38523 = (state_38546[(7)]);
var inst_38523__$1 = (state_38546[(2)]);
var inst_38524 = (inst_38523__$1 == null);
var state_38546__$1 = (function (){var statearr_38550 = state_38546;
(statearr_38550[(7)] = inst_38523__$1);

return statearr_38550;
})();
if(cljs.core.truth_(inst_38524)){
var statearr_38551_39928 = state_38546__$1;
(statearr_38551_39928[(1)] = (5));

} else {
var statearr_38552_39930 = state_38546__$1;
(statearr_38552_39930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (13))){
var state_38546__$1 = state_38546;
var statearr_38553_39932 = state_38546__$1;
(statearr_38553_39932[(2)] = null);

(statearr_38553_39932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (6))){
var inst_38523 = (state_38546[(7)]);
var inst_38529 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38523) : p.call(null,inst_38523));
var state_38546__$1 = state_38546;
if(cljs.core.truth_(inst_38529)){
var statearr_38554_39933 = state_38546__$1;
(statearr_38554_39933[(1)] = (9));

} else {
var statearr_38555_39934 = state_38546__$1;
(statearr_38555_39934[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (3))){
var inst_38544 = (state_38546[(2)]);
var state_38546__$1 = state_38546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38546__$1,inst_38544);
} else {
if((state_val_38547 === (12))){
var state_38546__$1 = state_38546;
var statearr_38556_39936 = state_38546__$1;
(statearr_38556_39936[(2)] = null);

(statearr_38556_39936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (2))){
var state_38546__$1 = state_38546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38546__$1,(4),ch);
} else {
if((state_val_38547 === (11))){
var inst_38523 = (state_38546[(7)]);
var inst_38533 = (state_38546[(2)]);
var state_38546__$1 = state_38546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38546__$1,(8),inst_38533,inst_38523);
} else {
if((state_val_38547 === (9))){
var state_38546__$1 = state_38546;
var statearr_38557_39941 = state_38546__$1;
(statearr_38557_39941[(2)] = tc);

(statearr_38557_39941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (5))){
var inst_38526 = cljs.core.async.close_BANG_(tc);
var inst_38527 = cljs.core.async.close_BANG_(fc);
var state_38546__$1 = (function (){var statearr_38558 = state_38546;
(statearr_38558[(8)] = inst_38526);

return statearr_38558;
})();
var statearr_38559_39943 = state_38546__$1;
(statearr_38559_39943[(2)] = inst_38527);

(statearr_38559_39943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (14))){
var inst_38540 = (state_38546[(2)]);
var state_38546__$1 = state_38546;
var statearr_38560_39947 = state_38546__$1;
(statearr_38560_39947[(2)] = inst_38540);

(statearr_38560_39947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (10))){
var state_38546__$1 = state_38546;
var statearr_38561_39950 = state_38546__$1;
(statearr_38561_39950[(2)] = fc);

(statearr_38561_39950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38547 === (8))){
var inst_38535 = (state_38546[(2)]);
var state_38546__$1 = state_38546;
if(cljs.core.truth_(inst_38535)){
var statearr_38562_39954 = state_38546__$1;
(statearr_38562_39954[(1)] = (12));

} else {
var statearr_38563_39955 = state_38546__$1;
(statearr_38563_39955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_38564 = [null,null,null,null,null,null,null,null,null];
(statearr_38564[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_38564[(1)] = (1));

return statearr_38564;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_38546){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38546);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38565){if((e38565 instanceof Object)){
var ex__38112__auto__ = e38565;
var statearr_38566_39966 = state_38546;
(statearr_38566_39966[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39971 = state_38546;
state_38546 = G__39971;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_38546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_38546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38567 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38567[(6)] = c__38209__auto___39917);

return statearr_38567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38588){
var state_val_38589 = (state_38588[(1)]);
if((state_val_38589 === (7))){
var inst_38584 = (state_38588[(2)]);
var state_38588__$1 = state_38588;
var statearr_38590_39980 = state_38588__$1;
(statearr_38590_39980[(2)] = inst_38584);

(statearr_38590_39980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38589 === (1))){
var inst_38568 = init;
var state_38588__$1 = (function (){var statearr_38591 = state_38588;
(statearr_38591[(7)] = inst_38568);

return statearr_38591;
})();
var statearr_38592_39984 = state_38588__$1;
(statearr_38592_39984[(2)] = null);

(statearr_38592_39984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38589 === (4))){
var inst_38571 = (state_38588[(8)]);
var inst_38571__$1 = (state_38588[(2)]);
var inst_38572 = (inst_38571__$1 == null);
var state_38588__$1 = (function (){var statearr_38593 = state_38588;
(statearr_38593[(8)] = inst_38571__$1);

return statearr_38593;
})();
if(cljs.core.truth_(inst_38572)){
var statearr_38594_39985 = state_38588__$1;
(statearr_38594_39985[(1)] = (5));

} else {
var statearr_38595_39987 = state_38588__$1;
(statearr_38595_39987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38589 === (6))){
var inst_38571 = (state_38588[(8)]);
var inst_38575 = (state_38588[(9)]);
var inst_38568 = (state_38588[(7)]);
var inst_38575__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38568,inst_38571) : f.call(null,inst_38568,inst_38571));
var inst_38576 = cljs.core.reduced_QMARK_(inst_38575__$1);
var state_38588__$1 = (function (){var statearr_38596 = state_38588;
(statearr_38596[(9)] = inst_38575__$1);

return statearr_38596;
})();
if(inst_38576){
var statearr_38597_39989 = state_38588__$1;
(statearr_38597_39989[(1)] = (8));

} else {
var statearr_38598_39990 = state_38588__$1;
(statearr_38598_39990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38589 === (3))){
var inst_38586 = (state_38588[(2)]);
var state_38588__$1 = state_38588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38588__$1,inst_38586);
} else {
if((state_val_38589 === (2))){
var state_38588__$1 = state_38588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38588__$1,(4),ch);
} else {
if((state_val_38589 === (9))){
var inst_38575 = (state_38588[(9)]);
var inst_38568 = inst_38575;
var state_38588__$1 = (function (){var statearr_38599 = state_38588;
(statearr_38599[(7)] = inst_38568);

return statearr_38599;
})();
var statearr_38600_39991 = state_38588__$1;
(statearr_38600_39991[(2)] = null);

(statearr_38600_39991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38589 === (5))){
var inst_38568 = (state_38588[(7)]);
var state_38588__$1 = state_38588;
var statearr_38601_39995 = state_38588__$1;
(statearr_38601_39995[(2)] = inst_38568);

(statearr_38601_39995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38589 === (10))){
var inst_38582 = (state_38588[(2)]);
var state_38588__$1 = state_38588;
var statearr_38602_40000 = state_38588__$1;
(statearr_38602_40000[(2)] = inst_38582);

(statearr_38602_40000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38589 === (8))){
var inst_38575 = (state_38588[(9)]);
var inst_38578 = cljs.core.deref(inst_38575);
var state_38588__$1 = state_38588;
var statearr_38603_40004 = state_38588__$1;
(statearr_38603_40004[(2)] = inst_38578);

(statearr_38603_40004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__38109__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38109__auto____0 = (function (){
var statearr_38604 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38604[(0)] = cljs$core$async$reduce_$_state_machine__38109__auto__);

(statearr_38604[(1)] = (1));

return statearr_38604;
});
var cljs$core$async$reduce_$_state_machine__38109__auto____1 = (function (state_38588){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38588);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38605){if((e38605 instanceof Object)){
var ex__38112__auto__ = e38605;
var statearr_38606_40014 = state_38588;
(statearr_38606_40014[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40017 = state_38588;
state_38588 = G__40017;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38109__auto__ = function(state_38588){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38109__auto____1.call(this,state_38588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38109__auto____0;
cljs$core$async$reduce_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38109__auto____1;
return cljs$core$async$reduce_$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38607 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38607[(6)] = c__38209__auto__);

return statearr_38607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));

return c__38209__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38613){
var state_val_38614 = (state_38613[(1)]);
if((state_val_38614 === (1))){
var inst_38608 = cljs.core.async.reduce(f__$1,init,ch);
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38613__$1,(2),inst_38608);
} else {
if((state_val_38614 === (2))){
var inst_38610 = (state_38613[(2)]);
var inst_38611 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38610) : f__$1.call(null,inst_38610));
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38613__$1,inst_38611);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__38109__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38109__auto____0 = (function (){
var statearr_38615 = [null,null,null,null,null,null,null];
(statearr_38615[(0)] = cljs$core$async$transduce_$_state_machine__38109__auto__);

(statearr_38615[(1)] = (1));

return statearr_38615;
});
var cljs$core$async$transduce_$_state_machine__38109__auto____1 = (function (state_38613){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38613);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38616){if((e38616 instanceof Object)){
var ex__38112__auto__ = e38616;
var statearr_38617_40037 = state_38613;
(statearr_38617_40037[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40038 = state_38613;
state_38613 = G__40038;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38109__auto__ = function(state_38613){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38109__auto____1.call(this,state_38613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38109__auto____0;
cljs$core$async$transduce_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38109__auto____1;
return cljs$core$async$transduce_$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38618 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38618[(6)] = c__38209__auto__);

return statearr_38618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));

return c__38209__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38620 = arguments.length;
switch (G__38620) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38645){
var state_val_38646 = (state_38645[(1)]);
if((state_val_38646 === (7))){
var inst_38627 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
var statearr_38647_40053 = state_38645__$1;
(statearr_38647_40053[(2)] = inst_38627);

(statearr_38647_40053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (1))){
var inst_38621 = cljs.core.seq(coll);
var inst_38622 = inst_38621;
var state_38645__$1 = (function (){var statearr_38648 = state_38645;
(statearr_38648[(7)] = inst_38622);

return statearr_38648;
})();
var statearr_38649_40057 = state_38645__$1;
(statearr_38649_40057[(2)] = null);

(statearr_38649_40057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (4))){
var inst_38622 = (state_38645[(7)]);
var inst_38625 = cljs.core.first(inst_38622);
var state_38645__$1 = state_38645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38645__$1,(7),ch,inst_38625);
} else {
if((state_val_38646 === (13))){
var inst_38639 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
var statearr_38650_40061 = state_38645__$1;
(statearr_38650_40061[(2)] = inst_38639);

(statearr_38650_40061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (6))){
var inst_38630 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
if(cljs.core.truth_(inst_38630)){
var statearr_38651_40062 = state_38645__$1;
(statearr_38651_40062[(1)] = (8));

} else {
var statearr_38652_40063 = state_38645__$1;
(statearr_38652_40063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (3))){
var inst_38643 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38645__$1,inst_38643);
} else {
if((state_val_38646 === (12))){
var state_38645__$1 = state_38645;
var statearr_38653_40065 = state_38645__$1;
(statearr_38653_40065[(2)] = null);

(statearr_38653_40065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (2))){
var inst_38622 = (state_38645[(7)]);
var state_38645__$1 = state_38645;
if(cljs.core.truth_(inst_38622)){
var statearr_38654_40066 = state_38645__$1;
(statearr_38654_40066[(1)] = (4));

} else {
var statearr_38655_40067 = state_38645__$1;
(statearr_38655_40067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (11))){
var inst_38636 = cljs.core.async.close_BANG_(ch);
var state_38645__$1 = state_38645;
var statearr_38656_40068 = state_38645__$1;
(statearr_38656_40068[(2)] = inst_38636);

(statearr_38656_40068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (9))){
var state_38645__$1 = state_38645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38657_40069 = state_38645__$1;
(statearr_38657_40069[(1)] = (11));

} else {
var statearr_38658_40070 = state_38645__$1;
(statearr_38658_40070[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (5))){
var inst_38622 = (state_38645[(7)]);
var state_38645__$1 = state_38645;
var statearr_38659_40071 = state_38645__$1;
(statearr_38659_40071[(2)] = inst_38622);

(statearr_38659_40071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (10))){
var inst_38641 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
var statearr_38660_40072 = state_38645__$1;
(statearr_38660_40072[(2)] = inst_38641);

(statearr_38660_40072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38646 === (8))){
var inst_38622 = (state_38645[(7)]);
var inst_38632 = cljs.core.next(inst_38622);
var inst_38622__$1 = inst_38632;
var state_38645__$1 = (function (){var statearr_38661 = state_38645;
(statearr_38661[(7)] = inst_38622__$1);

return statearr_38661;
})();
var statearr_38662_40073 = state_38645__$1;
(statearr_38662_40073[(2)] = null);

(statearr_38662_40073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_38663 = [null,null,null,null,null,null,null,null];
(statearr_38663[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_38663[(1)] = (1));

return statearr_38663;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_38645){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38645);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38664){if((e38664 instanceof Object)){
var ex__38112__auto__ = e38664;
var statearr_38665_40074 = state_38645;
(statearr_38665_40074[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40075 = state_38645;
state_38645 = G__40075;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_38645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_38645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38666 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38666[(6)] = c__38209__auto__);

return statearr_38666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));

return c__38209__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38667 = (function (ch,cs,meta38668){
this.ch = ch;
this.cs = cs;
this.meta38668 = meta38668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38669,meta38668__$1){
var self__ = this;
var _38669__$1 = this;
return (new cljs.core.async.t_cljs$core$async38667(self__.ch,self__.cs,meta38668__$1));
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38669){
var self__ = this;
var _38669__$1 = this;
return self__.meta38668;
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38668","meta38668",-1590398907,null)], null);
}));

(cljs.core.async.t_cljs$core$async38667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38667");

(cljs.core.async.t_cljs$core$async38667.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38667.
 */
cljs.core.async.__GT_t_cljs$core$async38667 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38667(ch__$1,cs__$1,meta38668){
return (new cljs.core.async.t_cljs$core$async38667(ch__$1,cs__$1,meta38668));
});

}

return (new cljs.core.async.t_cljs$core$async38667(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38209__auto___40094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_38804){
var state_val_38805 = (state_38804[(1)]);
if((state_val_38805 === (7))){
var inst_38800 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38806_40098 = state_38804__$1;
(statearr_38806_40098[(2)] = inst_38800);

(statearr_38806_40098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (20))){
var inst_38703 = (state_38804[(7)]);
var inst_38715 = cljs.core.first(inst_38703);
var inst_38716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38715,(0),null);
var inst_38717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38715,(1),null);
var state_38804__$1 = (function (){var statearr_38807 = state_38804;
(statearr_38807[(8)] = inst_38716);

return statearr_38807;
})();
if(cljs.core.truth_(inst_38717)){
var statearr_38808_40103 = state_38804__$1;
(statearr_38808_40103[(1)] = (22));

} else {
var statearr_38809_40104 = state_38804__$1;
(statearr_38809_40104[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (27))){
var inst_38672 = (state_38804[(9)]);
var inst_38745 = (state_38804[(10)]);
var inst_38747 = (state_38804[(11)]);
var inst_38752 = (state_38804[(12)]);
var inst_38752__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38745,inst_38747);
var inst_38753 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38752__$1,inst_38672,done);
var state_38804__$1 = (function (){var statearr_38810 = state_38804;
(statearr_38810[(12)] = inst_38752__$1);

return statearr_38810;
})();
if(cljs.core.truth_(inst_38753)){
var statearr_38811_40112 = state_38804__$1;
(statearr_38811_40112[(1)] = (30));

} else {
var statearr_38812_40119 = state_38804__$1;
(statearr_38812_40119[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (1))){
var state_38804__$1 = state_38804;
var statearr_38813_40120 = state_38804__$1;
(statearr_38813_40120[(2)] = null);

(statearr_38813_40120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (24))){
var inst_38703 = (state_38804[(7)]);
var inst_38722 = (state_38804[(2)]);
var inst_38723 = cljs.core.next(inst_38703);
var inst_38681 = inst_38723;
var inst_38682 = null;
var inst_38683 = (0);
var inst_38684 = (0);
var state_38804__$1 = (function (){var statearr_38814 = state_38804;
(statearr_38814[(13)] = inst_38722);

(statearr_38814[(14)] = inst_38684);

(statearr_38814[(15)] = inst_38681);

(statearr_38814[(16)] = inst_38682);

(statearr_38814[(17)] = inst_38683);

return statearr_38814;
})();
var statearr_38815_40124 = state_38804__$1;
(statearr_38815_40124[(2)] = null);

(statearr_38815_40124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (39))){
var state_38804__$1 = state_38804;
var statearr_38819_40125 = state_38804__$1;
(statearr_38819_40125[(2)] = null);

(statearr_38819_40125[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (4))){
var inst_38672 = (state_38804[(9)]);
var inst_38672__$1 = (state_38804[(2)]);
var inst_38673 = (inst_38672__$1 == null);
var state_38804__$1 = (function (){var statearr_38820 = state_38804;
(statearr_38820[(9)] = inst_38672__$1);

return statearr_38820;
})();
if(cljs.core.truth_(inst_38673)){
var statearr_38821_40126 = state_38804__$1;
(statearr_38821_40126[(1)] = (5));

} else {
var statearr_38822_40127 = state_38804__$1;
(statearr_38822_40127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (15))){
var inst_38684 = (state_38804[(14)]);
var inst_38681 = (state_38804[(15)]);
var inst_38682 = (state_38804[(16)]);
var inst_38683 = (state_38804[(17)]);
var inst_38699 = (state_38804[(2)]);
var inst_38700 = (inst_38684 + (1));
var tmp38816 = inst_38681;
var tmp38817 = inst_38682;
var tmp38818 = inst_38683;
var inst_38681__$1 = tmp38816;
var inst_38682__$1 = tmp38817;
var inst_38683__$1 = tmp38818;
var inst_38684__$1 = inst_38700;
var state_38804__$1 = (function (){var statearr_38823 = state_38804;
(statearr_38823[(18)] = inst_38699);

(statearr_38823[(14)] = inst_38684__$1);

(statearr_38823[(15)] = inst_38681__$1);

(statearr_38823[(16)] = inst_38682__$1);

(statearr_38823[(17)] = inst_38683__$1);

return statearr_38823;
})();
var statearr_38824_40134 = state_38804__$1;
(statearr_38824_40134[(2)] = null);

(statearr_38824_40134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (21))){
var inst_38726 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38828_40136 = state_38804__$1;
(statearr_38828_40136[(2)] = inst_38726);

(statearr_38828_40136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (31))){
var inst_38752 = (state_38804[(12)]);
var inst_38756 = done(null);
var inst_38757 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38752);
var state_38804__$1 = (function (){var statearr_38829 = state_38804;
(statearr_38829[(19)] = inst_38756);

return statearr_38829;
})();
var statearr_38830_40137 = state_38804__$1;
(statearr_38830_40137[(2)] = inst_38757);

(statearr_38830_40137[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (32))){
var inst_38746 = (state_38804[(20)]);
var inst_38745 = (state_38804[(10)]);
var inst_38744 = (state_38804[(21)]);
var inst_38747 = (state_38804[(11)]);
var inst_38759 = (state_38804[(2)]);
var inst_38760 = (inst_38747 + (1));
var tmp38825 = inst_38746;
var tmp38826 = inst_38745;
var tmp38827 = inst_38744;
var inst_38744__$1 = tmp38827;
var inst_38745__$1 = tmp38826;
var inst_38746__$1 = tmp38825;
var inst_38747__$1 = inst_38760;
var state_38804__$1 = (function (){var statearr_38831 = state_38804;
(statearr_38831[(22)] = inst_38759);

(statearr_38831[(20)] = inst_38746__$1);

(statearr_38831[(10)] = inst_38745__$1);

(statearr_38831[(21)] = inst_38744__$1);

(statearr_38831[(11)] = inst_38747__$1);

return statearr_38831;
})();
var statearr_38832_40146 = state_38804__$1;
(statearr_38832_40146[(2)] = null);

(statearr_38832_40146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (40))){
var inst_38772 = (state_38804[(23)]);
var inst_38776 = done(null);
var inst_38777 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38772);
var state_38804__$1 = (function (){var statearr_38833 = state_38804;
(statearr_38833[(24)] = inst_38776);

return statearr_38833;
})();
var statearr_38834_40147 = state_38804__$1;
(statearr_38834_40147[(2)] = inst_38777);

(statearr_38834_40147[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (33))){
var inst_38763 = (state_38804[(25)]);
var inst_38765 = cljs.core.chunked_seq_QMARK_(inst_38763);
var state_38804__$1 = state_38804;
if(inst_38765){
var statearr_38835_40148 = state_38804__$1;
(statearr_38835_40148[(1)] = (36));

} else {
var statearr_38836_40149 = state_38804__$1;
(statearr_38836_40149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (13))){
var inst_38693 = (state_38804[(26)]);
var inst_38696 = cljs.core.async.close_BANG_(inst_38693);
var state_38804__$1 = state_38804;
var statearr_38837_40150 = state_38804__$1;
(statearr_38837_40150[(2)] = inst_38696);

(statearr_38837_40150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (22))){
var inst_38716 = (state_38804[(8)]);
var inst_38719 = cljs.core.async.close_BANG_(inst_38716);
var state_38804__$1 = state_38804;
var statearr_38838_40151 = state_38804__$1;
(statearr_38838_40151[(2)] = inst_38719);

(statearr_38838_40151[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (36))){
var inst_38763 = (state_38804[(25)]);
var inst_38767 = cljs.core.chunk_first(inst_38763);
var inst_38768 = cljs.core.chunk_rest(inst_38763);
var inst_38769 = cljs.core.count(inst_38767);
var inst_38744 = inst_38768;
var inst_38745 = inst_38767;
var inst_38746 = inst_38769;
var inst_38747 = (0);
var state_38804__$1 = (function (){var statearr_38839 = state_38804;
(statearr_38839[(20)] = inst_38746);

(statearr_38839[(10)] = inst_38745);

(statearr_38839[(21)] = inst_38744);

(statearr_38839[(11)] = inst_38747);

return statearr_38839;
})();
var statearr_38840_40158 = state_38804__$1;
(statearr_38840_40158[(2)] = null);

(statearr_38840_40158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (41))){
var inst_38763 = (state_38804[(25)]);
var inst_38779 = (state_38804[(2)]);
var inst_38780 = cljs.core.next(inst_38763);
var inst_38744 = inst_38780;
var inst_38745 = null;
var inst_38746 = (0);
var inst_38747 = (0);
var state_38804__$1 = (function (){var statearr_38841 = state_38804;
(statearr_38841[(20)] = inst_38746);

(statearr_38841[(10)] = inst_38745);

(statearr_38841[(21)] = inst_38744);

(statearr_38841[(11)] = inst_38747);

(statearr_38841[(27)] = inst_38779);

return statearr_38841;
})();
var statearr_38842_40159 = state_38804__$1;
(statearr_38842_40159[(2)] = null);

(statearr_38842_40159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (43))){
var state_38804__$1 = state_38804;
var statearr_38843_40160 = state_38804__$1;
(statearr_38843_40160[(2)] = null);

(statearr_38843_40160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (29))){
var inst_38788 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38844_40161 = state_38804__$1;
(statearr_38844_40161[(2)] = inst_38788);

(statearr_38844_40161[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (44))){
var inst_38797 = (state_38804[(2)]);
var state_38804__$1 = (function (){var statearr_38845 = state_38804;
(statearr_38845[(28)] = inst_38797);

return statearr_38845;
})();
var statearr_38846_40162 = state_38804__$1;
(statearr_38846_40162[(2)] = null);

(statearr_38846_40162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (6))){
var inst_38736 = (state_38804[(29)]);
var inst_38735 = cljs.core.deref(cs);
var inst_38736__$1 = cljs.core.keys(inst_38735);
var inst_38737 = cljs.core.count(inst_38736__$1);
var inst_38738 = cljs.core.reset_BANG_(dctr,inst_38737);
var inst_38743 = cljs.core.seq(inst_38736__$1);
var inst_38744 = inst_38743;
var inst_38745 = null;
var inst_38746 = (0);
var inst_38747 = (0);
var state_38804__$1 = (function (){var statearr_38847 = state_38804;
(statearr_38847[(20)] = inst_38746);

(statearr_38847[(10)] = inst_38745);

(statearr_38847[(21)] = inst_38744);

(statearr_38847[(30)] = inst_38738);

(statearr_38847[(11)] = inst_38747);

(statearr_38847[(29)] = inst_38736__$1);

return statearr_38847;
})();
var statearr_38848_40164 = state_38804__$1;
(statearr_38848_40164[(2)] = null);

(statearr_38848_40164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (28))){
var inst_38763 = (state_38804[(25)]);
var inst_38744 = (state_38804[(21)]);
var inst_38763__$1 = cljs.core.seq(inst_38744);
var state_38804__$1 = (function (){var statearr_38849 = state_38804;
(statearr_38849[(25)] = inst_38763__$1);

return statearr_38849;
})();
if(inst_38763__$1){
var statearr_38850_40165 = state_38804__$1;
(statearr_38850_40165[(1)] = (33));

} else {
var statearr_38851_40166 = state_38804__$1;
(statearr_38851_40166[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (25))){
var inst_38746 = (state_38804[(20)]);
var inst_38747 = (state_38804[(11)]);
var inst_38749 = (inst_38747 < inst_38746);
var inst_38750 = inst_38749;
var state_38804__$1 = state_38804;
if(cljs.core.truth_(inst_38750)){
var statearr_38852_40167 = state_38804__$1;
(statearr_38852_40167[(1)] = (27));

} else {
var statearr_38853_40168 = state_38804__$1;
(statearr_38853_40168[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (34))){
var state_38804__$1 = state_38804;
var statearr_38854_40170 = state_38804__$1;
(statearr_38854_40170[(2)] = null);

(statearr_38854_40170[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (17))){
var state_38804__$1 = state_38804;
var statearr_38855_40171 = state_38804__$1;
(statearr_38855_40171[(2)] = null);

(statearr_38855_40171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (3))){
var inst_38802 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38804__$1,inst_38802);
} else {
if((state_val_38805 === (12))){
var inst_38731 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38856_40178 = state_38804__$1;
(statearr_38856_40178[(2)] = inst_38731);

(statearr_38856_40178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (2))){
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38804__$1,(4),ch);
} else {
if((state_val_38805 === (23))){
var state_38804__$1 = state_38804;
var statearr_38857_40180 = state_38804__$1;
(statearr_38857_40180[(2)] = null);

(statearr_38857_40180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (35))){
var inst_38786 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38858_40187 = state_38804__$1;
(statearr_38858_40187[(2)] = inst_38786);

(statearr_38858_40187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (19))){
var inst_38703 = (state_38804[(7)]);
var inst_38707 = cljs.core.chunk_first(inst_38703);
var inst_38708 = cljs.core.chunk_rest(inst_38703);
var inst_38709 = cljs.core.count(inst_38707);
var inst_38681 = inst_38708;
var inst_38682 = inst_38707;
var inst_38683 = inst_38709;
var inst_38684 = (0);
var state_38804__$1 = (function (){var statearr_38859 = state_38804;
(statearr_38859[(14)] = inst_38684);

(statearr_38859[(15)] = inst_38681);

(statearr_38859[(16)] = inst_38682);

(statearr_38859[(17)] = inst_38683);

return statearr_38859;
})();
var statearr_38860_40189 = state_38804__$1;
(statearr_38860_40189[(2)] = null);

(statearr_38860_40189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (11))){
var inst_38703 = (state_38804[(7)]);
var inst_38681 = (state_38804[(15)]);
var inst_38703__$1 = cljs.core.seq(inst_38681);
var state_38804__$1 = (function (){var statearr_38861 = state_38804;
(statearr_38861[(7)] = inst_38703__$1);

return statearr_38861;
})();
if(inst_38703__$1){
var statearr_38862_40192 = state_38804__$1;
(statearr_38862_40192[(1)] = (16));

} else {
var statearr_38863_40193 = state_38804__$1;
(statearr_38863_40193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (9))){
var inst_38733 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38864_40197 = state_38804__$1;
(statearr_38864_40197[(2)] = inst_38733);

(statearr_38864_40197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (5))){
var inst_38679 = cljs.core.deref(cs);
var inst_38680 = cljs.core.seq(inst_38679);
var inst_38681 = inst_38680;
var inst_38682 = null;
var inst_38683 = (0);
var inst_38684 = (0);
var state_38804__$1 = (function (){var statearr_38865 = state_38804;
(statearr_38865[(14)] = inst_38684);

(statearr_38865[(15)] = inst_38681);

(statearr_38865[(16)] = inst_38682);

(statearr_38865[(17)] = inst_38683);

return statearr_38865;
})();
var statearr_38866_40198 = state_38804__$1;
(statearr_38866_40198[(2)] = null);

(statearr_38866_40198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (14))){
var state_38804__$1 = state_38804;
var statearr_38867_40199 = state_38804__$1;
(statearr_38867_40199[(2)] = null);

(statearr_38867_40199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (45))){
var inst_38794 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38868_40204 = state_38804__$1;
(statearr_38868_40204[(2)] = inst_38794);

(statearr_38868_40204[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (26))){
var inst_38736 = (state_38804[(29)]);
var inst_38790 = (state_38804[(2)]);
var inst_38791 = cljs.core.seq(inst_38736);
var state_38804__$1 = (function (){var statearr_38869 = state_38804;
(statearr_38869[(31)] = inst_38790);

return statearr_38869;
})();
if(inst_38791){
var statearr_38870_40206 = state_38804__$1;
(statearr_38870_40206[(1)] = (42));

} else {
var statearr_38871_40207 = state_38804__$1;
(statearr_38871_40207[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (16))){
var inst_38703 = (state_38804[(7)]);
var inst_38705 = cljs.core.chunked_seq_QMARK_(inst_38703);
var state_38804__$1 = state_38804;
if(inst_38705){
var statearr_38872_40208 = state_38804__$1;
(statearr_38872_40208[(1)] = (19));

} else {
var statearr_38873_40210 = state_38804__$1;
(statearr_38873_40210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (38))){
var inst_38783 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38874_40211 = state_38804__$1;
(statearr_38874_40211[(2)] = inst_38783);

(statearr_38874_40211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (30))){
var state_38804__$1 = state_38804;
var statearr_38875_40212 = state_38804__$1;
(statearr_38875_40212[(2)] = null);

(statearr_38875_40212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (10))){
var inst_38684 = (state_38804[(14)]);
var inst_38682 = (state_38804[(16)]);
var inst_38692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38682,inst_38684);
var inst_38693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38692,(0),null);
var inst_38694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38692,(1),null);
var state_38804__$1 = (function (){var statearr_38876 = state_38804;
(statearr_38876[(26)] = inst_38693);

return statearr_38876;
})();
if(cljs.core.truth_(inst_38694)){
var statearr_38877_40215 = state_38804__$1;
(statearr_38877_40215[(1)] = (13));

} else {
var statearr_38878_40216 = state_38804__$1;
(statearr_38878_40216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (18))){
var inst_38729 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38879_40219 = state_38804__$1;
(statearr_38879_40219[(2)] = inst_38729);

(statearr_38879_40219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (42))){
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38804__$1,(45),dchan);
} else {
if((state_val_38805 === (37))){
var inst_38772 = (state_38804[(23)]);
var inst_38672 = (state_38804[(9)]);
var inst_38763 = (state_38804[(25)]);
var inst_38772__$1 = cljs.core.first(inst_38763);
var inst_38773 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38772__$1,inst_38672,done);
var state_38804__$1 = (function (){var statearr_38880 = state_38804;
(statearr_38880[(23)] = inst_38772__$1);

return statearr_38880;
})();
if(cljs.core.truth_(inst_38773)){
var statearr_38881_40220 = state_38804__$1;
(statearr_38881_40220[(1)] = (39));

} else {
var statearr_38882_40221 = state_38804__$1;
(statearr_38882_40221[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (8))){
var inst_38684 = (state_38804[(14)]);
var inst_38683 = (state_38804[(17)]);
var inst_38686 = (inst_38684 < inst_38683);
var inst_38687 = inst_38686;
var state_38804__$1 = state_38804;
if(cljs.core.truth_(inst_38687)){
var statearr_38883_40222 = state_38804__$1;
(statearr_38883_40222[(1)] = (10));

} else {
var statearr_38884_40223 = state_38804__$1;
(statearr_38884_40223[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__38109__auto__ = null;
var cljs$core$async$mult_$_state_machine__38109__auto____0 = (function (){
var statearr_38885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38885[(0)] = cljs$core$async$mult_$_state_machine__38109__auto__);

(statearr_38885[(1)] = (1));

return statearr_38885;
});
var cljs$core$async$mult_$_state_machine__38109__auto____1 = (function (state_38804){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_38804);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e38886){if((e38886 instanceof Object)){
var ex__38112__auto__ = e38886;
var statearr_38887_40225 = state_38804;
(statearr_38887_40225[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40226 = state_38804;
state_38804 = G__40226;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38109__auto__ = function(state_38804){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38109__auto____1.call(this,state_38804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38109__auto____0;
cljs$core$async$mult_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38109__auto____1;
return cljs$core$async$mult_$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_38888 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_38888[(6)] = c__38209__auto___40094);

return statearr_38888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38890 = arguments.length;
switch (G__38890) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40271 = arguments.length;
var i__4790__auto___40272 = (0);
while(true){
if((i__4790__auto___40272 < len__4789__auto___40271)){
args__4795__auto__.push((arguments[i__4790__auto___40272]));

var G__40273 = (i__4790__auto___40272 + (1));
i__4790__auto___40272 = G__40273;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38895){
var map__38896 = p__38895;
var map__38896__$1 = (((((!((map__38896 == null))))?(((((map__38896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38896):map__38896);
var opts = map__38896__$1;
var statearr_38898_40277 = state;
(statearr_38898_40277[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38899_40279 = state;
(statearr_38899_40279[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38900_40281 = state;
(statearr_38900_40281[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38891){
var G__38892 = cljs.core.first(seq38891);
var seq38891__$1 = cljs.core.next(seq38891);
var G__38893 = cljs.core.first(seq38891__$1);
var seq38891__$2 = cljs.core.next(seq38891__$1);
var G__38894 = cljs.core.first(seq38891__$2);
var seq38891__$3 = cljs.core.next(seq38891__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38892,G__38893,G__38894,seq38891__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38901 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38902){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38902 = meta38902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38903,meta38902__$1){
var self__ = this;
var _38903__$1 = this;
return (new cljs.core.async.t_cljs$core$async38901(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38902__$1));
}));

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38903){
var self__ = this;
var _38903__$1 = this;
return self__.meta38902;
}));

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38901.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38902","meta38902",-2052344888,null)], null);
}));

(cljs.core.async.t_cljs$core$async38901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38901");

(cljs.core.async.t_cljs$core$async38901.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38901.
 */
cljs.core.async.__GT_t_cljs$core$async38901 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38901(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38902){
return (new cljs.core.async.t_cljs$core$async38901(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38902));
});

}

return (new cljs.core.async.t_cljs$core$async38901(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38209__auto___40306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39005){
var state_val_39006 = (state_39005[(1)]);
if((state_val_39006 === (7))){
var inst_38920 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
var statearr_39007_40307 = state_39005__$1;
(statearr_39007_40307[(2)] = inst_38920);

(statearr_39007_40307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (20))){
var inst_38932 = (state_39005[(7)]);
var state_39005__$1 = state_39005;
var statearr_39008_40309 = state_39005__$1;
(statearr_39008_40309[(2)] = inst_38932);

(statearr_39008_40309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (27))){
var state_39005__$1 = state_39005;
var statearr_39009_40310 = state_39005__$1;
(statearr_39009_40310[(2)] = null);

(statearr_39009_40310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (1))){
var inst_38907 = (state_39005[(8)]);
var inst_38907__$1 = calc_state();
var inst_38909 = (inst_38907__$1 == null);
var inst_38910 = cljs.core.not(inst_38909);
var state_39005__$1 = (function (){var statearr_39010 = state_39005;
(statearr_39010[(8)] = inst_38907__$1);

return statearr_39010;
})();
if(inst_38910){
var statearr_39011_40317 = state_39005__$1;
(statearr_39011_40317[(1)] = (2));

} else {
var statearr_39012_40318 = state_39005__$1;
(statearr_39012_40318[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (24))){
var inst_38956 = (state_39005[(9)]);
var inst_38979 = (state_39005[(10)]);
var inst_38965 = (state_39005[(11)]);
var inst_38979__$1 = (inst_38956.cljs$core$IFn$_invoke$arity$1 ? inst_38956.cljs$core$IFn$_invoke$arity$1(inst_38965) : inst_38956.call(null,inst_38965));
var state_39005__$1 = (function (){var statearr_39013 = state_39005;
(statearr_39013[(10)] = inst_38979__$1);

return statearr_39013;
})();
if(cljs.core.truth_(inst_38979__$1)){
var statearr_39014_40321 = state_39005__$1;
(statearr_39014_40321[(1)] = (29));

} else {
var statearr_39015_40322 = state_39005__$1;
(statearr_39015_40322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (4))){
var inst_38923 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
if(cljs.core.truth_(inst_38923)){
var statearr_39016_40323 = state_39005__$1;
(statearr_39016_40323[(1)] = (8));

} else {
var statearr_39017_40324 = state_39005__$1;
(statearr_39017_40324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (15))){
var inst_38950 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
if(cljs.core.truth_(inst_38950)){
var statearr_39018_40325 = state_39005__$1;
(statearr_39018_40325[(1)] = (19));

} else {
var statearr_39019_40326 = state_39005__$1;
(statearr_39019_40326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (21))){
var inst_38955 = (state_39005[(12)]);
var inst_38955__$1 = (state_39005[(2)]);
var inst_38956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38955__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38955__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38955__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39005__$1 = (function (){var statearr_39020 = state_39005;
(statearr_39020[(9)] = inst_38956);

(statearr_39020[(12)] = inst_38955__$1);

(statearr_39020[(13)] = inst_38957);

return statearr_39020;
})();
return cljs.core.async.ioc_alts_BANG_(state_39005__$1,(22),inst_38958);
} else {
if((state_val_39006 === (31))){
var inst_38987 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
if(cljs.core.truth_(inst_38987)){
var statearr_39021_40328 = state_39005__$1;
(statearr_39021_40328[(1)] = (32));

} else {
var statearr_39022_40329 = state_39005__$1;
(statearr_39022_40329[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (32))){
var inst_38964 = (state_39005[(14)]);
var state_39005__$1 = state_39005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39005__$1,(35),out,inst_38964);
} else {
if((state_val_39006 === (33))){
var inst_38955 = (state_39005[(12)]);
var inst_38932 = inst_38955;
var state_39005__$1 = (function (){var statearr_39023 = state_39005;
(statearr_39023[(7)] = inst_38932);

return statearr_39023;
})();
var statearr_39024_40330 = state_39005__$1;
(statearr_39024_40330[(2)] = null);

(statearr_39024_40330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (13))){
var inst_38932 = (state_39005[(7)]);
var inst_38939 = inst_38932.cljs$lang$protocol_mask$partition0$;
var inst_38940 = (inst_38939 & (64));
var inst_38941 = inst_38932.cljs$core$ISeq$;
var inst_38942 = (cljs.core.PROTOCOL_SENTINEL === inst_38941);
var inst_38943 = ((inst_38940) || (inst_38942));
var state_39005__$1 = state_39005;
if(cljs.core.truth_(inst_38943)){
var statearr_39025_40331 = state_39005__$1;
(statearr_39025_40331[(1)] = (16));

} else {
var statearr_39026_40332 = state_39005__$1;
(statearr_39026_40332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (22))){
var inst_38964 = (state_39005[(14)]);
var inst_38965 = (state_39005[(11)]);
var inst_38963 = (state_39005[(2)]);
var inst_38964__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38963,(0),null);
var inst_38965__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38963,(1),null);
var inst_38966 = (inst_38964__$1 == null);
var inst_38967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38965__$1,change);
var inst_38968 = ((inst_38966) || (inst_38967));
var state_39005__$1 = (function (){var statearr_39027 = state_39005;
(statearr_39027[(14)] = inst_38964__$1);

(statearr_39027[(11)] = inst_38965__$1);

return statearr_39027;
})();
if(cljs.core.truth_(inst_38968)){
var statearr_39028_40340 = state_39005__$1;
(statearr_39028_40340[(1)] = (23));

} else {
var statearr_39029_40341 = state_39005__$1;
(statearr_39029_40341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (36))){
var inst_38955 = (state_39005[(12)]);
var inst_38932 = inst_38955;
var state_39005__$1 = (function (){var statearr_39030 = state_39005;
(statearr_39030[(7)] = inst_38932);

return statearr_39030;
})();
var statearr_39031_40343 = state_39005__$1;
(statearr_39031_40343[(2)] = null);

(statearr_39031_40343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (29))){
var inst_38979 = (state_39005[(10)]);
var state_39005__$1 = state_39005;
var statearr_39032_40344 = state_39005__$1;
(statearr_39032_40344[(2)] = inst_38979);

(statearr_39032_40344[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (6))){
var state_39005__$1 = state_39005;
var statearr_39033_40345 = state_39005__$1;
(statearr_39033_40345[(2)] = false);

(statearr_39033_40345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (28))){
var inst_38975 = (state_39005[(2)]);
var inst_38976 = calc_state();
var inst_38932 = inst_38976;
var state_39005__$1 = (function (){var statearr_39034 = state_39005;
(statearr_39034[(15)] = inst_38975);

(statearr_39034[(7)] = inst_38932);

return statearr_39034;
})();
var statearr_39035_40346 = state_39005__$1;
(statearr_39035_40346[(2)] = null);

(statearr_39035_40346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (25))){
var inst_39001 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
var statearr_39036_40348 = state_39005__$1;
(statearr_39036_40348[(2)] = inst_39001);

(statearr_39036_40348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (34))){
var inst_38999 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
var statearr_39037_40349 = state_39005__$1;
(statearr_39037_40349[(2)] = inst_38999);

(statearr_39037_40349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (17))){
var state_39005__$1 = state_39005;
var statearr_39038_40351 = state_39005__$1;
(statearr_39038_40351[(2)] = false);

(statearr_39038_40351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (3))){
var state_39005__$1 = state_39005;
var statearr_39039_40352 = state_39005__$1;
(statearr_39039_40352[(2)] = false);

(statearr_39039_40352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (12))){
var inst_39003 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39005__$1,inst_39003);
} else {
if((state_val_39006 === (2))){
var inst_38907 = (state_39005[(8)]);
var inst_38912 = inst_38907.cljs$lang$protocol_mask$partition0$;
var inst_38913 = (inst_38912 & (64));
var inst_38914 = inst_38907.cljs$core$ISeq$;
var inst_38915 = (cljs.core.PROTOCOL_SENTINEL === inst_38914);
var inst_38916 = ((inst_38913) || (inst_38915));
var state_39005__$1 = state_39005;
if(cljs.core.truth_(inst_38916)){
var statearr_39040_40355 = state_39005__$1;
(statearr_39040_40355[(1)] = (5));

} else {
var statearr_39041_40356 = state_39005__$1;
(statearr_39041_40356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (23))){
var inst_38964 = (state_39005[(14)]);
var inst_38970 = (inst_38964 == null);
var state_39005__$1 = state_39005;
if(cljs.core.truth_(inst_38970)){
var statearr_39042_40358 = state_39005__$1;
(statearr_39042_40358[(1)] = (26));

} else {
var statearr_39043_40359 = state_39005__$1;
(statearr_39043_40359[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (35))){
var inst_38990 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
if(cljs.core.truth_(inst_38990)){
var statearr_39044_40360 = state_39005__$1;
(statearr_39044_40360[(1)] = (36));

} else {
var statearr_39045_40361 = state_39005__$1;
(statearr_39045_40361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (19))){
var inst_38932 = (state_39005[(7)]);
var inst_38952 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38932);
var state_39005__$1 = state_39005;
var statearr_39046_40363 = state_39005__$1;
(statearr_39046_40363[(2)] = inst_38952);

(statearr_39046_40363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (11))){
var inst_38932 = (state_39005[(7)]);
var inst_38936 = (inst_38932 == null);
var inst_38937 = cljs.core.not(inst_38936);
var state_39005__$1 = state_39005;
if(inst_38937){
var statearr_39047_40368 = state_39005__$1;
(statearr_39047_40368[(1)] = (13));

} else {
var statearr_39048_40370 = state_39005__$1;
(statearr_39048_40370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (9))){
var inst_38907 = (state_39005[(8)]);
var state_39005__$1 = state_39005;
var statearr_39049_40371 = state_39005__$1;
(statearr_39049_40371[(2)] = inst_38907);

(statearr_39049_40371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (5))){
var state_39005__$1 = state_39005;
var statearr_39050_40372 = state_39005__$1;
(statearr_39050_40372[(2)] = true);

(statearr_39050_40372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (14))){
var state_39005__$1 = state_39005;
var statearr_39051_40373 = state_39005__$1;
(statearr_39051_40373[(2)] = false);

(statearr_39051_40373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (26))){
var inst_38965 = (state_39005[(11)]);
var inst_38972 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38965);
var state_39005__$1 = state_39005;
var statearr_39052_40374 = state_39005__$1;
(statearr_39052_40374[(2)] = inst_38972);

(statearr_39052_40374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (16))){
var state_39005__$1 = state_39005;
var statearr_39053_40376 = state_39005__$1;
(statearr_39053_40376[(2)] = true);

(statearr_39053_40376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (38))){
var inst_38995 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
var statearr_39054_40377 = state_39005__$1;
(statearr_39054_40377[(2)] = inst_38995);

(statearr_39054_40377[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (30))){
var inst_38956 = (state_39005[(9)]);
var inst_38957 = (state_39005[(13)]);
var inst_38965 = (state_39005[(11)]);
var inst_38982 = cljs.core.empty_QMARK_(inst_38956);
var inst_38983 = (inst_38957.cljs$core$IFn$_invoke$arity$1 ? inst_38957.cljs$core$IFn$_invoke$arity$1(inst_38965) : inst_38957.call(null,inst_38965));
var inst_38984 = cljs.core.not(inst_38983);
var inst_38985 = ((inst_38982) && (inst_38984));
var state_39005__$1 = state_39005;
var statearr_39055_40383 = state_39005__$1;
(statearr_39055_40383[(2)] = inst_38985);

(statearr_39055_40383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (10))){
var inst_38907 = (state_39005[(8)]);
var inst_38928 = (state_39005[(2)]);
var inst_38929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38928,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38928,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38928,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38932 = inst_38907;
var state_39005__$1 = (function (){var statearr_39056 = state_39005;
(statearr_39056[(7)] = inst_38932);

(statearr_39056[(16)] = inst_38931);

(statearr_39056[(17)] = inst_38930);

(statearr_39056[(18)] = inst_38929);

return statearr_39056;
})();
var statearr_39057_40391 = state_39005__$1;
(statearr_39057_40391[(2)] = null);

(statearr_39057_40391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (18))){
var inst_38947 = (state_39005[(2)]);
var state_39005__$1 = state_39005;
var statearr_39058_40396 = state_39005__$1;
(statearr_39058_40396[(2)] = inst_38947);

(statearr_39058_40396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (37))){
var state_39005__$1 = state_39005;
var statearr_39059_40400 = state_39005__$1;
(statearr_39059_40400[(2)] = null);

(statearr_39059_40400[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (8))){
var inst_38907 = (state_39005[(8)]);
var inst_38925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38907);
var state_39005__$1 = state_39005;
var statearr_39060_40405 = state_39005__$1;
(statearr_39060_40405[(2)] = inst_38925);

(statearr_39060_40405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__38109__auto__ = null;
var cljs$core$async$mix_$_state_machine__38109__auto____0 = (function (){
var statearr_39061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39061[(0)] = cljs$core$async$mix_$_state_machine__38109__auto__);

(statearr_39061[(1)] = (1));

return statearr_39061;
});
var cljs$core$async$mix_$_state_machine__38109__auto____1 = (function (state_39005){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39005);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39062){if((e39062 instanceof Object)){
var ex__38112__auto__ = e39062;
var statearr_39063_40407 = state_39005;
(statearr_39063_40407[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40408 = state_39005;
state_39005 = G__40408;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38109__auto__ = function(state_39005){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38109__auto____1.call(this,state_39005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38109__auto____0;
cljs$core$async$mix_$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38109__auto____1;
return cljs$core$async$mix_$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39064 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39064[(6)] = c__38209__auto___40306);

return statearr_39064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39066 = arguments.length;
switch (G__39066) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39069 = arguments.length;
switch (G__39069) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39067_SHARP_){
if(cljs.core.truth_((p1__39067_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39067_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39067_SHARP_.call(null,topic)))){
return p1__39067_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39067_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39070 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39071){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39071 = meta39071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39072,meta39071__$1){
var self__ = this;
var _39072__$1 = this;
return (new cljs.core.async.t_cljs$core$async39070(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39071__$1));
}));

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39072){
var self__ = this;
var _39072__$1 = this;
return self__.meta39071;
}));

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39070.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39071","meta39071",1696514562,null)], null);
}));

(cljs.core.async.t_cljs$core$async39070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39070");

(cljs.core.async.t_cljs$core$async39070.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39070.
 */
cljs.core.async.__GT_t_cljs$core$async39070 = (function cljs$core$async$__GT_t_cljs$core$async39070(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39071){
return (new cljs.core.async.t_cljs$core$async39070(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39071));
});

}

return (new cljs.core.async.t_cljs$core$async39070(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38209__auto___40428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39144){
var state_val_39145 = (state_39144[(1)]);
if((state_val_39145 === (7))){
var inst_39140 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39146_40431 = state_39144__$1;
(statearr_39146_40431[(2)] = inst_39140);

(statearr_39146_40431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (20))){
var state_39144__$1 = state_39144;
var statearr_39147_40432 = state_39144__$1;
(statearr_39147_40432[(2)] = null);

(statearr_39147_40432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (1))){
var state_39144__$1 = state_39144;
var statearr_39148_40433 = state_39144__$1;
(statearr_39148_40433[(2)] = null);

(statearr_39148_40433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (24))){
var inst_39123 = (state_39144[(7)]);
var inst_39132 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39123);
var state_39144__$1 = state_39144;
var statearr_39149_40434 = state_39144__$1;
(statearr_39149_40434[(2)] = inst_39132);

(statearr_39149_40434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (4))){
var inst_39075 = (state_39144[(8)]);
var inst_39075__$1 = (state_39144[(2)]);
var inst_39076 = (inst_39075__$1 == null);
var state_39144__$1 = (function (){var statearr_39150 = state_39144;
(statearr_39150[(8)] = inst_39075__$1);

return statearr_39150;
})();
if(cljs.core.truth_(inst_39076)){
var statearr_39151_40435 = state_39144__$1;
(statearr_39151_40435[(1)] = (5));

} else {
var statearr_39152_40436 = state_39144__$1;
(statearr_39152_40436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (15))){
var inst_39117 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39153_40437 = state_39144__$1;
(statearr_39153_40437[(2)] = inst_39117);

(statearr_39153_40437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (21))){
var inst_39137 = (state_39144[(2)]);
var state_39144__$1 = (function (){var statearr_39154 = state_39144;
(statearr_39154[(9)] = inst_39137);

return statearr_39154;
})();
var statearr_39155_40440 = state_39144__$1;
(statearr_39155_40440[(2)] = null);

(statearr_39155_40440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (13))){
var inst_39099 = (state_39144[(10)]);
var inst_39101 = cljs.core.chunked_seq_QMARK_(inst_39099);
var state_39144__$1 = state_39144;
if(inst_39101){
var statearr_39156_40441 = state_39144__$1;
(statearr_39156_40441[(1)] = (16));

} else {
var statearr_39157_40444 = state_39144__$1;
(statearr_39157_40444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (22))){
var inst_39129 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
if(cljs.core.truth_(inst_39129)){
var statearr_39158_40445 = state_39144__$1;
(statearr_39158_40445[(1)] = (23));

} else {
var statearr_39159_40446 = state_39144__$1;
(statearr_39159_40446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (6))){
var inst_39075 = (state_39144[(8)]);
var inst_39123 = (state_39144[(7)]);
var inst_39125 = (state_39144[(11)]);
var inst_39123__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39075) : topic_fn.call(null,inst_39075));
var inst_39124 = cljs.core.deref(mults);
var inst_39125__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39124,inst_39123__$1);
var state_39144__$1 = (function (){var statearr_39160 = state_39144;
(statearr_39160[(7)] = inst_39123__$1);

(statearr_39160[(11)] = inst_39125__$1);

return statearr_39160;
})();
if(cljs.core.truth_(inst_39125__$1)){
var statearr_39161_40447 = state_39144__$1;
(statearr_39161_40447[(1)] = (19));

} else {
var statearr_39162_40448 = state_39144__$1;
(statearr_39162_40448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (25))){
var inst_39134 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39163_40449 = state_39144__$1;
(statearr_39163_40449[(2)] = inst_39134);

(statearr_39163_40449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (17))){
var inst_39099 = (state_39144[(10)]);
var inst_39108 = cljs.core.first(inst_39099);
var inst_39109 = cljs.core.async.muxch_STAR_(inst_39108);
var inst_39110 = cljs.core.async.close_BANG_(inst_39109);
var inst_39111 = cljs.core.next(inst_39099);
var inst_39085 = inst_39111;
var inst_39086 = null;
var inst_39087 = (0);
var inst_39088 = (0);
var state_39144__$1 = (function (){var statearr_39164 = state_39144;
(statearr_39164[(12)] = inst_39110);

(statearr_39164[(13)] = inst_39085);

(statearr_39164[(14)] = inst_39087);

(statearr_39164[(15)] = inst_39088);

(statearr_39164[(16)] = inst_39086);

return statearr_39164;
})();
var statearr_39165_40451 = state_39144__$1;
(statearr_39165_40451[(2)] = null);

(statearr_39165_40451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (3))){
var inst_39142 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39144__$1,inst_39142);
} else {
if((state_val_39145 === (12))){
var inst_39119 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39166_40452 = state_39144__$1;
(statearr_39166_40452[(2)] = inst_39119);

(statearr_39166_40452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (2))){
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39144__$1,(4),ch);
} else {
if((state_val_39145 === (23))){
var state_39144__$1 = state_39144;
var statearr_39167_40453 = state_39144__$1;
(statearr_39167_40453[(2)] = null);

(statearr_39167_40453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (19))){
var inst_39075 = (state_39144[(8)]);
var inst_39125 = (state_39144[(11)]);
var inst_39127 = cljs.core.async.muxch_STAR_(inst_39125);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39144__$1,(22),inst_39127,inst_39075);
} else {
if((state_val_39145 === (11))){
var inst_39085 = (state_39144[(13)]);
var inst_39099 = (state_39144[(10)]);
var inst_39099__$1 = cljs.core.seq(inst_39085);
var state_39144__$1 = (function (){var statearr_39168 = state_39144;
(statearr_39168[(10)] = inst_39099__$1);

return statearr_39168;
})();
if(inst_39099__$1){
var statearr_39169_40455 = state_39144__$1;
(statearr_39169_40455[(1)] = (13));

} else {
var statearr_39170_40456 = state_39144__$1;
(statearr_39170_40456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (9))){
var inst_39121 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39171_40458 = state_39144__$1;
(statearr_39171_40458[(2)] = inst_39121);

(statearr_39171_40458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (5))){
var inst_39082 = cljs.core.deref(mults);
var inst_39083 = cljs.core.vals(inst_39082);
var inst_39084 = cljs.core.seq(inst_39083);
var inst_39085 = inst_39084;
var inst_39086 = null;
var inst_39087 = (0);
var inst_39088 = (0);
var state_39144__$1 = (function (){var statearr_39172 = state_39144;
(statearr_39172[(13)] = inst_39085);

(statearr_39172[(14)] = inst_39087);

(statearr_39172[(15)] = inst_39088);

(statearr_39172[(16)] = inst_39086);

return statearr_39172;
})();
var statearr_39173_40460 = state_39144__$1;
(statearr_39173_40460[(2)] = null);

(statearr_39173_40460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (14))){
var state_39144__$1 = state_39144;
var statearr_39177_40464 = state_39144__$1;
(statearr_39177_40464[(2)] = null);

(statearr_39177_40464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (16))){
var inst_39099 = (state_39144[(10)]);
var inst_39103 = cljs.core.chunk_first(inst_39099);
var inst_39104 = cljs.core.chunk_rest(inst_39099);
var inst_39105 = cljs.core.count(inst_39103);
var inst_39085 = inst_39104;
var inst_39086 = inst_39103;
var inst_39087 = inst_39105;
var inst_39088 = (0);
var state_39144__$1 = (function (){var statearr_39178 = state_39144;
(statearr_39178[(13)] = inst_39085);

(statearr_39178[(14)] = inst_39087);

(statearr_39178[(15)] = inst_39088);

(statearr_39178[(16)] = inst_39086);

return statearr_39178;
})();
var statearr_39179_40472 = state_39144__$1;
(statearr_39179_40472[(2)] = null);

(statearr_39179_40472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (10))){
var inst_39085 = (state_39144[(13)]);
var inst_39087 = (state_39144[(14)]);
var inst_39088 = (state_39144[(15)]);
var inst_39086 = (state_39144[(16)]);
var inst_39093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39086,inst_39088);
var inst_39094 = cljs.core.async.muxch_STAR_(inst_39093);
var inst_39095 = cljs.core.async.close_BANG_(inst_39094);
var inst_39096 = (inst_39088 + (1));
var tmp39174 = inst_39085;
var tmp39175 = inst_39087;
var tmp39176 = inst_39086;
var inst_39085__$1 = tmp39174;
var inst_39086__$1 = tmp39176;
var inst_39087__$1 = tmp39175;
var inst_39088__$1 = inst_39096;
var state_39144__$1 = (function (){var statearr_39180 = state_39144;
(statearr_39180[(13)] = inst_39085__$1);

(statearr_39180[(14)] = inst_39087__$1);

(statearr_39180[(15)] = inst_39088__$1);

(statearr_39180[(16)] = inst_39086__$1);

(statearr_39180[(17)] = inst_39095);

return statearr_39180;
})();
var statearr_39181_40476 = state_39144__$1;
(statearr_39181_40476[(2)] = null);

(statearr_39181_40476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (18))){
var inst_39114 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39182_40480 = state_39144__$1;
(statearr_39182_40480[(2)] = inst_39114);

(statearr_39182_40480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (8))){
var inst_39087 = (state_39144[(14)]);
var inst_39088 = (state_39144[(15)]);
var inst_39090 = (inst_39088 < inst_39087);
var inst_39091 = inst_39090;
var state_39144__$1 = state_39144;
if(cljs.core.truth_(inst_39091)){
var statearr_39183_40481 = state_39144__$1;
(statearr_39183_40481[(1)] = (10));

} else {
var statearr_39184_40482 = state_39144__$1;
(statearr_39184_40482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39185[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39185[(1)] = (1));

return statearr_39185;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39144){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39144);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39186){if((e39186 instanceof Object)){
var ex__38112__auto__ = e39186;
var statearr_39187_40486 = state_39144;
(statearr_39187_40486[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40487 = state_39144;
state_39144 = G__40487;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39188 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39188[(6)] = c__38209__auto___40428);

return statearr_39188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39190 = arguments.length;
switch (G__39190) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39192 = arguments.length;
switch (G__39192) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39194 = arguments.length;
switch (G__39194) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__38209__auto___40507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39233){
var state_val_39234 = (state_39233[(1)]);
if((state_val_39234 === (7))){
var state_39233__$1 = state_39233;
var statearr_39235_40514 = state_39233__$1;
(statearr_39235_40514[(2)] = null);

(statearr_39235_40514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (1))){
var state_39233__$1 = state_39233;
var statearr_39236_40515 = state_39233__$1;
(statearr_39236_40515[(2)] = null);

(statearr_39236_40515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (4))){
var inst_39197 = (state_39233[(7)]);
var inst_39199 = (inst_39197 < cnt);
var state_39233__$1 = state_39233;
if(cljs.core.truth_(inst_39199)){
var statearr_39237_40516 = state_39233__$1;
(statearr_39237_40516[(1)] = (6));

} else {
var statearr_39238_40517 = state_39233__$1;
(statearr_39238_40517[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (15))){
var inst_39229 = (state_39233[(2)]);
var state_39233__$1 = state_39233;
var statearr_39239_40518 = state_39233__$1;
(statearr_39239_40518[(2)] = inst_39229);

(statearr_39239_40518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (13))){
var inst_39222 = cljs.core.async.close_BANG_(out);
var state_39233__$1 = state_39233;
var statearr_39240_40519 = state_39233__$1;
(statearr_39240_40519[(2)] = inst_39222);

(statearr_39240_40519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (6))){
var state_39233__$1 = state_39233;
var statearr_39241_40520 = state_39233__$1;
(statearr_39241_40520[(2)] = null);

(statearr_39241_40520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (3))){
var inst_39231 = (state_39233[(2)]);
var state_39233__$1 = state_39233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39233__$1,inst_39231);
} else {
if((state_val_39234 === (12))){
var inst_39219 = (state_39233[(8)]);
var inst_39219__$1 = (state_39233[(2)]);
var inst_39220 = cljs.core.some(cljs.core.nil_QMARK_,inst_39219__$1);
var state_39233__$1 = (function (){var statearr_39242 = state_39233;
(statearr_39242[(8)] = inst_39219__$1);

return statearr_39242;
})();
if(cljs.core.truth_(inst_39220)){
var statearr_39243_40524 = state_39233__$1;
(statearr_39243_40524[(1)] = (13));

} else {
var statearr_39244_40525 = state_39233__$1;
(statearr_39244_40525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (2))){
var inst_39196 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39197 = (0);
var state_39233__$1 = (function (){var statearr_39245 = state_39233;
(statearr_39245[(7)] = inst_39197);

(statearr_39245[(9)] = inst_39196);

return statearr_39245;
})();
var statearr_39246_40533 = state_39233__$1;
(statearr_39246_40533[(2)] = null);

(statearr_39246_40533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (11))){
var inst_39197 = (state_39233[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39233,(10),Object,null,(9));
var inst_39206 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39197) : chs__$1.call(null,inst_39197));
var inst_39207 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39197) : done.call(null,inst_39197));
var inst_39208 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39206,inst_39207);
var state_39233__$1 = state_39233;
var statearr_39247_40536 = state_39233__$1;
(statearr_39247_40536[(2)] = inst_39208);


cljs.core.async.impl.ioc_helpers.process_exception(state_39233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (9))){
var inst_39197 = (state_39233[(7)]);
var inst_39210 = (state_39233[(2)]);
var inst_39211 = (inst_39197 + (1));
var inst_39197__$1 = inst_39211;
var state_39233__$1 = (function (){var statearr_39248 = state_39233;
(statearr_39248[(7)] = inst_39197__$1);

(statearr_39248[(10)] = inst_39210);

return statearr_39248;
})();
var statearr_39249_40538 = state_39233__$1;
(statearr_39249_40538[(2)] = null);

(statearr_39249_40538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (5))){
var inst_39217 = (state_39233[(2)]);
var state_39233__$1 = (function (){var statearr_39250 = state_39233;
(statearr_39250[(11)] = inst_39217);

return statearr_39250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39233__$1,(12),dchan);
} else {
if((state_val_39234 === (14))){
var inst_39219 = (state_39233[(8)]);
var inst_39224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39219);
var state_39233__$1 = state_39233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39233__$1,(16),out,inst_39224);
} else {
if((state_val_39234 === (16))){
var inst_39226 = (state_39233[(2)]);
var state_39233__$1 = (function (){var statearr_39251 = state_39233;
(statearr_39251[(12)] = inst_39226);

return statearr_39251;
})();
var statearr_39252_40547 = state_39233__$1;
(statearr_39252_40547[(2)] = null);

(statearr_39252_40547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (10))){
var inst_39201 = (state_39233[(2)]);
var inst_39202 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39233__$1 = (function (){var statearr_39253 = state_39233;
(statearr_39253[(13)] = inst_39201);

return statearr_39253;
})();
var statearr_39254_40549 = state_39233__$1;
(statearr_39254_40549[(2)] = inst_39202);


cljs.core.async.impl.ioc_helpers.process_exception(state_39233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39234 === (8))){
var inst_39215 = (state_39233[(2)]);
var state_39233__$1 = state_39233;
var statearr_39255_40550 = state_39233__$1;
(statearr_39255_40550[(2)] = inst_39215);

(statearr_39255_40550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39256[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39256[(1)] = (1));

return statearr_39256;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39233){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39233);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39257){if((e39257 instanceof Object)){
var ex__38112__auto__ = e39257;
var statearr_39258_40551 = state_39233;
(statearr_39258_40551[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40553 = state_39233;
state_39233 = G__40553;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39259 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39259[(6)] = c__38209__auto___40507);

return statearr_39259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39262 = arguments.length;
switch (G__39262) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38209__auto___40559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39294){
var state_val_39295 = (state_39294[(1)]);
if((state_val_39295 === (7))){
var inst_39273 = (state_39294[(7)]);
var inst_39274 = (state_39294[(8)]);
var inst_39273__$1 = (state_39294[(2)]);
var inst_39274__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39273__$1,(0),null);
var inst_39275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39273__$1,(1),null);
var inst_39276 = (inst_39274__$1 == null);
var state_39294__$1 = (function (){var statearr_39296 = state_39294;
(statearr_39296[(7)] = inst_39273__$1);

(statearr_39296[(8)] = inst_39274__$1);

(statearr_39296[(9)] = inst_39275);

return statearr_39296;
})();
if(cljs.core.truth_(inst_39276)){
var statearr_39297_40566 = state_39294__$1;
(statearr_39297_40566[(1)] = (8));

} else {
var statearr_39298_40567 = state_39294__$1;
(statearr_39298_40567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39295 === (1))){
var inst_39263 = cljs.core.vec(chs);
var inst_39264 = inst_39263;
var state_39294__$1 = (function (){var statearr_39299 = state_39294;
(statearr_39299[(10)] = inst_39264);

return statearr_39299;
})();
var statearr_39300_40568 = state_39294__$1;
(statearr_39300_40568[(2)] = null);

(statearr_39300_40568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39295 === (4))){
var inst_39264 = (state_39294[(10)]);
var state_39294__$1 = state_39294;
return cljs.core.async.ioc_alts_BANG_(state_39294__$1,(7),inst_39264);
} else {
if((state_val_39295 === (6))){
var inst_39290 = (state_39294[(2)]);
var state_39294__$1 = state_39294;
var statearr_39301_40569 = state_39294__$1;
(statearr_39301_40569[(2)] = inst_39290);

(statearr_39301_40569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39295 === (3))){
var inst_39292 = (state_39294[(2)]);
var state_39294__$1 = state_39294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39294__$1,inst_39292);
} else {
if((state_val_39295 === (2))){
var inst_39264 = (state_39294[(10)]);
var inst_39266 = cljs.core.count(inst_39264);
var inst_39267 = (inst_39266 > (0));
var state_39294__$1 = state_39294;
if(cljs.core.truth_(inst_39267)){
var statearr_39303_40572 = state_39294__$1;
(statearr_39303_40572[(1)] = (4));

} else {
var statearr_39304_40573 = state_39294__$1;
(statearr_39304_40573[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39295 === (11))){
var inst_39264 = (state_39294[(10)]);
var inst_39283 = (state_39294[(2)]);
var tmp39302 = inst_39264;
var inst_39264__$1 = tmp39302;
var state_39294__$1 = (function (){var statearr_39305 = state_39294;
(statearr_39305[(10)] = inst_39264__$1);

(statearr_39305[(11)] = inst_39283);

return statearr_39305;
})();
var statearr_39306_40576 = state_39294__$1;
(statearr_39306_40576[(2)] = null);

(statearr_39306_40576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39295 === (9))){
var inst_39274 = (state_39294[(8)]);
var state_39294__$1 = state_39294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39294__$1,(11),out,inst_39274);
} else {
if((state_val_39295 === (5))){
var inst_39288 = cljs.core.async.close_BANG_(out);
var state_39294__$1 = state_39294;
var statearr_39307_40577 = state_39294__$1;
(statearr_39307_40577[(2)] = inst_39288);

(statearr_39307_40577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39295 === (10))){
var inst_39286 = (state_39294[(2)]);
var state_39294__$1 = state_39294;
var statearr_39308_40578 = state_39294__$1;
(statearr_39308_40578[(2)] = inst_39286);

(statearr_39308_40578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39295 === (8))){
var inst_39273 = (state_39294[(7)]);
var inst_39274 = (state_39294[(8)]);
var inst_39264 = (state_39294[(10)]);
var inst_39275 = (state_39294[(9)]);
var inst_39278 = (function (){var cs = inst_39264;
var vec__39269 = inst_39273;
var v = inst_39274;
var c = inst_39275;
return (function (p1__39260_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39260_SHARP_);
});
})();
var inst_39279 = cljs.core.filterv(inst_39278,inst_39264);
var inst_39264__$1 = inst_39279;
var state_39294__$1 = (function (){var statearr_39309 = state_39294;
(statearr_39309[(10)] = inst_39264__$1);

return statearr_39309;
})();
var statearr_39310_40584 = state_39294__$1;
(statearr_39310_40584[(2)] = null);

(statearr_39310_40584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39311[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39311[(1)] = (1));

return statearr_39311;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39294){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39294);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39312){if((e39312 instanceof Object)){
var ex__38112__auto__ = e39312;
var statearr_39313_40593 = state_39294;
(statearr_39313_40593[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40595 = state_39294;
state_39294 = G__40595;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39314 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39314[(6)] = c__38209__auto___40559);

return statearr_39314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39316 = arguments.length;
switch (G__39316) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38209__auto___40603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39340){
var state_val_39341 = (state_39340[(1)]);
if((state_val_39341 === (7))){
var inst_39322 = (state_39340[(7)]);
var inst_39322__$1 = (state_39340[(2)]);
var inst_39323 = (inst_39322__$1 == null);
var inst_39324 = cljs.core.not(inst_39323);
var state_39340__$1 = (function (){var statearr_39342 = state_39340;
(statearr_39342[(7)] = inst_39322__$1);

return statearr_39342;
})();
if(inst_39324){
var statearr_39343_40604 = state_39340__$1;
(statearr_39343_40604[(1)] = (8));

} else {
var statearr_39344_40605 = state_39340__$1;
(statearr_39344_40605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (1))){
var inst_39317 = (0);
var state_39340__$1 = (function (){var statearr_39345 = state_39340;
(statearr_39345[(8)] = inst_39317);

return statearr_39345;
})();
var statearr_39346_40607 = state_39340__$1;
(statearr_39346_40607[(2)] = null);

(statearr_39346_40607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (4))){
var state_39340__$1 = state_39340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39340__$1,(7),ch);
} else {
if((state_val_39341 === (6))){
var inst_39335 = (state_39340[(2)]);
var state_39340__$1 = state_39340;
var statearr_39347_40608 = state_39340__$1;
(statearr_39347_40608[(2)] = inst_39335);

(statearr_39347_40608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (3))){
var inst_39337 = (state_39340[(2)]);
var inst_39338 = cljs.core.async.close_BANG_(out);
var state_39340__$1 = (function (){var statearr_39348 = state_39340;
(statearr_39348[(9)] = inst_39337);

return statearr_39348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39340__$1,inst_39338);
} else {
if((state_val_39341 === (2))){
var inst_39317 = (state_39340[(8)]);
var inst_39319 = (inst_39317 < n);
var state_39340__$1 = state_39340;
if(cljs.core.truth_(inst_39319)){
var statearr_39349_40609 = state_39340__$1;
(statearr_39349_40609[(1)] = (4));

} else {
var statearr_39350_40610 = state_39340__$1;
(statearr_39350_40610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (11))){
var inst_39317 = (state_39340[(8)]);
var inst_39327 = (state_39340[(2)]);
var inst_39328 = (inst_39317 + (1));
var inst_39317__$1 = inst_39328;
var state_39340__$1 = (function (){var statearr_39351 = state_39340;
(statearr_39351[(10)] = inst_39327);

(statearr_39351[(8)] = inst_39317__$1);

return statearr_39351;
})();
var statearr_39352_40611 = state_39340__$1;
(statearr_39352_40611[(2)] = null);

(statearr_39352_40611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (9))){
var state_39340__$1 = state_39340;
var statearr_39353_40612 = state_39340__$1;
(statearr_39353_40612[(2)] = null);

(statearr_39353_40612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (5))){
var state_39340__$1 = state_39340;
var statearr_39354_40613 = state_39340__$1;
(statearr_39354_40613[(2)] = null);

(statearr_39354_40613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (10))){
var inst_39332 = (state_39340[(2)]);
var state_39340__$1 = state_39340;
var statearr_39355_40614 = state_39340__$1;
(statearr_39355_40614[(2)] = inst_39332);

(statearr_39355_40614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39341 === (8))){
var inst_39322 = (state_39340[(7)]);
var state_39340__$1 = state_39340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39340__$1,(11),out,inst_39322);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39356[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39356[(1)] = (1));

return statearr_39356;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39340){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39340);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39357){if((e39357 instanceof Object)){
var ex__38112__auto__ = e39357;
var statearr_39358_40615 = state_39340;
(statearr_39358_40615[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40617 = state_39340;
state_39340 = G__40617;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39359 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39359[(6)] = c__38209__auto___40603);

return statearr_39359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39361 = (function (f,ch,meta39362){
this.f = f;
this.ch = ch;
this.meta39362 = meta39362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39363,meta39362__$1){
var self__ = this;
var _39363__$1 = this;
return (new cljs.core.async.t_cljs$core$async39361(self__.f,self__.ch,meta39362__$1));
}));

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39363){
var self__ = this;
var _39363__$1 = this;
return self__.meta39362;
}));

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39364 = (function (f,ch,meta39362,_,fn1,meta39365){
this.f = f;
this.ch = ch;
this.meta39362 = meta39362;
this._ = _;
this.fn1 = fn1;
this.meta39365 = meta39365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39366,meta39365__$1){
var self__ = this;
var _39366__$1 = this;
return (new cljs.core.async.t_cljs$core$async39364(self__.f,self__.ch,self__.meta39362,self__._,self__.fn1,meta39365__$1));
}));

(cljs.core.async.t_cljs$core$async39364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39366){
var self__ = this;
var _39366__$1 = this;
return self__.meta39365;
}));

(cljs.core.async.t_cljs$core$async39364.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39364.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39364.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39364.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39360_SHARP_){
var G__39367 = (((p1__39360_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39360_SHARP_) : self__.f.call(null,p1__39360_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39367) : f1.call(null,G__39367));
});
}));

(cljs.core.async.t_cljs$core$async39364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39362","meta39362",-469394059,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39361","cljs.core.async/t_cljs$core$async39361",-1049951851,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39365","meta39365",-599675321,null)], null);
}));

(cljs.core.async.t_cljs$core$async39364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39364");

(cljs.core.async.t_cljs$core$async39364.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39364.
 */
cljs.core.async.__GT_t_cljs$core$async39364 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39364(f__$1,ch__$1,meta39362__$1,___$2,fn1__$1,meta39365){
return (new cljs.core.async.t_cljs$core$async39364(f__$1,ch__$1,meta39362__$1,___$2,fn1__$1,meta39365));
});

}

return (new cljs.core.async.t_cljs$core$async39364(self__.f,self__.ch,self__.meta39362,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39368 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39368) : self__.f.call(null,G__39368));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39362","meta39362",-469394059,null)], null);
}));

(cljs.core.async.t_cljs$core$async39361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39361");

(cljs.core.async.t_cljs$core$async39361.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39361.
 */
cljs.core.async.__GT_t_cljs$core$async39361 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39361(f__$1,ch__$1,meta39362){
return (new cljs.core.async.t_cljs$core$async39361(f__$1,ch__$1,meta39362));
});

}

return (new cljs.core.async.t_cljs$core$async39361(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39369 = (function (f,ch,meta39370){
this.f = f;
this.ch = ch;
this.meta39370 = meta39370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39371,meta39370__$1){
var self__ = this;
var _39371__$1 = this;
return (new cljs.core.async.t_cljs$core$async39369(self__.f,self__.ch,meta39370__$1));
}));

(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39371){
var self__ = this;
var _39371__$1 = this;
return self__.meta39370;
}));

(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39370","meta39370",1376264025,null)], null);
}));

(cljs.core.async.t_cljs$core$async39369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39369");

(cljs.core.async.t_cljs$core$async39369.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39369.
 */
cljs.core.async.__GT_t_cljs$core$async39369 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39369(f__$1,ch__$1,meta39370){
return (new cljs.core.async.t_cljs$core$async39369(f__$1,ch__$1,meta39370));
});

}

return (new cljs.core.async.t_cljs$core$async39369(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39372 = (function (p,ch,meta39373){
this.p = p;
this.ch = ch;
this.meta39373 = meta39373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39374,meta39373__$1){
var self__ = this;
var _39374__$1 = this;
return (new cljs.core.async.t_cljs$core$async39372(self__.p,self__.ch,meta39373__$1));
}));

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39374){
var self__ = this;
var _39374__$1 = this;
return self__.meta39373;
}));

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39373","meta39373",-2064442577,null)], null);
}));

(cljs.core.async.t_cljs$core$async39372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39372");

(cljs.core.async.t_cljs$core$async39372.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39372.
 */
cljs.core.async.__GT_t_cljs$core$async39372 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39372(p__$1,ch__$1,meta39373){
return (new cljs.core.async.t_cljs$core$async39372(p__$1,ch__$1,meta39373));
});

}

return (new cljs.core.async.t_cljs$core$async39372(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39376 = arguments.length;
switch (G__39376) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38209__auto___40655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39397){
var state_val_39398 = (state_39397[(1)]);
if((state_val_39398 === (7))){
var inst_39393 = (state_39397[(2)]);
var state_39397__$1 = state_39397;
var statearr_39399_40656 = state_39397__$1;
(statearr_39399_40656[(2)] = inst_39393);

(statearr_39399_40656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (1))){
var state_39397__$1 = state_39397;
var statearr_39400_40657 = state_39397__$1;
(statearr_39400_40657[(2)] = null);

(statearr_39400_40657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (4))){
var inst_39379 = (state_39397[(7)]);
var inst_39379__$1 = (state_39397[(2)]);
var inst_39380 = (inst_39379__$1 == null);
var state_39397__$1 = (function (){var statearr_39401 = state_39397;
(statearr_39401[(7)] = inst_39379__$1);

return statearr_39401;
})();
if(cljs.core.truth_(inst_39380)){
var statearr_39402_40658 = state_39397__$1;
(statearr_39402_40658[(1)] = (5));

} else {
var statearr_39403_40659 = state_39397__$1;
(statearr_39403_40659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (6))){
var inst_39379 = (state_39397[(7)]);
var inst_39384 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39379) : p.call(null,inst_39379));
var state_39397__$1 = state_39397;
if(cljs.core.truth_(inst_39384)){
var statearr_39404_40664 = state_39397__$1;
(statearr_39404_40664[(1)] = (8));

} else {
var statearr_39405_40665 = state_39397__$1;
(statearr_39405_40665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (3))){
var inst_39395 = (state_39397[(2)]);
var state_39397__$1 = state_39397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39397__$1,inst_39395);
} else {
if((state_val_39398 === (2))){
var state_39397__$1 = state_39397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39397__$1,(4),ch);
} else {
if((state_val_39398 === (11))){
var inst_39387 = (state_39397[(2)]);
var state_39397__$1 = state_39397;
var statearr_39406_40670 = state_39397__$1;
(statearr_39406_40670[(2)] = inst_39387);

(statearr_39406_40670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (9))){
var state_39397__$1 = state_39397;
var statearr_39407_40675 = state_39397__$1;
(statearr_39407_40675[(2)] = null);

(statearr_39407_40675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (5))){
var inst_39382 = cljs.core.async.close_BANG_(out);
var state_39397__$1 = state_39397;
var statearr_39408_40676 = state_39397__$1;
(statearr_39408_40676[(2)] = inst_39382);

(statearr_39408_40676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (10))){
var inst_39390 = (state_39397[(2)]);
var state_39397__$1 = (function (){var statearr_39409 = state_39397;
(statearr_39409[(8)] = inst_39390);

return statearr_39409;
})();
var statearr_39410_40679 = state_39397__$1;
(statearr_39410_40679[(2)] = null);

(statearr_39410_40679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39398 === (8))){
var inst_39379 = (state_39397[(7)]);
var state_39397__$1 = state_39397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39397__$1,(11),out,inst_39379);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39411 = [null,null,null,null,null,null,null,null,null];
(statearr_39411[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39411[(1)] = (1));

return statearr_39411;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39397){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39397);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39412){if((e39412 instanceof Object)){
var ex__38112__auto__ = e39412;
var statearr_39413_40693 = state_39397;
(statearr_39413_40693[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40698 = state_39397;
state_39397 = G__40698;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39414 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39414[(6)] = c__38209__auto___40655);

return statearr_39414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39416 = arguments.length;
switch (G__39416) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39478){
var state_val_39479 = (state_39478[(1)]);
if((state_val_39479 === (7))){
var inst_39474 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
var statearr_39480_40708 = state_39478__$1;
(statearr_39480_40708[(2)] = inst_39474);

(statearr_39480_40708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (20))){
var inst_39444 = (state_39478[(7)]);
var inst_39455 = (state_39478[(2)]);
var inst_39456 = cljs.core.next(inst_39444);
var inst_39430 = inst_39456;
var inst_39431 = null;
var inst_39432 = (0);
var inst_39433 = (0);
var state_39478__$1 = (function (){var statearr_39481 = state_39478;
(statearr_39481[(8)] = inst_39432);

(statearr_39481[(9)] = inst_39430);

(statearr_39481[(10)] = inst_39455);

(statearr_39481[(11)] = inst_39433);

(statearr_39481[(12)] = inst_39431);

return statearr_39481;
})();
var statearr_39482_40711 = state_39478__$1;
(statearr_39482_40711[(2)] = null);

(statearr_39482_40711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (1))){
var state_39478__$1 = state_39478;
var statearr_39483_40712 = state_39478__$1;
(statearr_39483_40712[(2)] = null);

(statearr_39483_40712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (4))){
var inst_39419 = (state_39478[(13)]);
var inst_39419__$1 = (state_39478[(2)]);
var inst_39420 = (inst_39419__$1 == null);
var state_39478__$1 = (function (){var statearr_39484 = state_39478;
(statearr_39484[(13)] = inst_39419__$1);

return statearr_39484;
})();
if(cljs.core.truth_(inst_39420)){
var statearr_39485_40713 = state_39478__$1;
(statearr_39485_40713[(1)] = (5));

} else {
var statearr_39486_40714 = state_39478__$1;
(statearr_39486_40714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (15))){
var state_39478__$1 = state_39478;
var statearr_39490_40715 = state_39478__$1;
(statearr_39490_40715[(2)] = null);

(statearr_39490_40715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (21))){
var state_39478__$1 = state_39478;
var statearr_39491_40716 = state_39478__$1;
(statearr_39491_40716[(2)] = null);

(statearr_39491_40716[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (13))){
var inst_39432 = (state_39478[(8)]);
var inst_39430 = (state_39478[(9)]);
var inst_39433 = (state_39478[(11)]);
var inst_39431 = (state_39478[(12)]);
var inst_39440 = (state_39478[(2)]);
var inst_39441 = (inst_39433 + (1));
var tmp39487 = inst_39432;
var tmp39488 = inst_39430;
var tmp39489 = inst_39431;
var inst_39430__$1 = tmp39488;
var inst_39431__$1 = tmp39489;
var inst_39432__$1 = tmp39487;
var inst_39433__$1 = inst_39441;
var state_39478__$1 = (function (){var statearr_39492 = state_39478;
(statearr_39492[(8)] = inst_39432__$1);

(statearr_39492[(9)] = inst_39430__$1);

(statearr_39492[(11)] = inst_39433__$1);

(statearr_39492[(14)] = inst_39440);

(statearr_39492[(12)] = inst_39431__$1);

return statearr_39492;
})();
var statearr_39493_40717 = state_39478__$1;
(statearr_39493_40717[(2)] = null);

(statearr_39493_40717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (22))){
var state_39478__$1 = state_39478;
var statearr_39494_40719 = state_39478__$1;
(statearr_39494_40719[(2)] = null);

(statearr_39494_40719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (6))){
var inst_39419 = (state_39478[(13)]);
var inst_39428 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39419) : f.call(null,inst_39419));
var inst_39429 = cljs.core.seq(inst_39428);
var inst_39430 = inst_39429;
var inst_39431 = null;
var inst_39432 = (0);
var inst_39433 = (0);
var state_39478__$1 = (function (){var statearr_39495 = state_39478;
(statearr_39495[(8)] = inst_39432);

(statearr_39495[(9)] = inst_39430);

(statearr_39495[(11)] = inst_39433);

(statearr_39495[(12)] = inst_39431);

return statearr_39495;
})();
var statearr_39496_40720 = state_39478__$1;
(statearr_39496_40720[(2)] = null);

(statearr_39496_40720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (17))){
var inst_39444 = (state_39478[(7)]);
var inst_39448 = cljs.core.chunk_first(inst_39444);
var inst_39449 = cljs.core.chunk_rest(inst_39444);
var inst_39450 = cljs.core.count(inst_39448);
var inst_39430 = inst_39449;
var inst_39431 = inst_39448;
var inst_39432 = inst_39450;
var inst_39433 = (0);
var state_39478__$1 = (function (){var statearr_39497 = state_39478;
(statearr_39497[(8)] = inst_39432);

(statearr_39497[(9)] = inst_39430);

(statearr_39497[(11)] = inst_39433);

(statearr_39497[(12)] = inst_39431);

return statearr_39497;
})();
var statearr_39498_40724 = state_39478__$1;
(statearr_39498_40724[(2)] = null);

(statearr_39498_40724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (3))){
var inst_39476 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39478__$1,inst_39476);
} else {
if((state_val_39479 === (12))){
var inst_39464 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
var statearr_39499_40725 = state_39478__$1;
(statearr_39499_40725[(2)] = inst_39464);

(statearr_39499_40725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (2))){
var state_39478__$1 = state_39478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39478__$1,(4),in$);
} else {
if((state_val_39479 === (23))){
var inst_39472 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
var statearr_39500_40726 = state_39478__$1;
(statearr_39500_40726[(2)] = inst_39472);

(statearr_39500_40726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (19))){
var inst_39459 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
var statearr_39501_40727 = state_39478__$1;
(statearr_39501_40727[(2)] = inst_39459);

(statearr_39501_40727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (11))){
var inst_39430 = (state_39478[(9)]);
var inst_39444 = (state_39478[(7)]);
var inst_39444__$1 = cljs.core.seq(inst_39430);
var state_39478__$1 = (function (){var statearr_39502 = state_39478;
(statearr_39502[(7)] = inst_39444__$1);

return statearr_39502;
})();
if(inst_39444__$1){
var statearr_39503_40729 = state_39478__$1;
(statearr_39503_40729[(1)] = (14));

} else {
var statearr_39504_40730 = state_39478__$1;
(statearr_39504_40730[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (9))){
var inst_39466 = (state_39478[(2)]);
var inst_39467 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39478__$1 = (function (){var statearr_39505 = state_39478;
(statearr_39505[(15)] = inst_39466);

return statearr_39505;
})();
if(cljs.core.truth_(inst_39467)){
var statearr_39506_40731 = state_39478__$1;
(statearr_39506_40731[(1)] = (21));

} else {
var statearr_39507_40732 = state_39478__$1;
(statearr_39507_40732[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (5))){
var inst_39422 = cljs.core.async.close_BANG_(out);
var state_39478__$1 = state_39478;
var statearr_39508_40733 = state_39478__$1;
(statearr_39508_40733[(2)] = inst_39422);

(statearr_39508_40733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (14))){
var inst_39444 = (state_39478[(7)]);
var inst_39446 = cljs.core.chunked_seq_QMARK_(inst_39444);
var state_39478__$1 = state_39478;
if(inst_39446){
var statearr_39509_40737 = state_39478__$1;
(statearr_39509_40737[(1)] = (17));

} else {
var statearr_39510_40738 = state_39478__$1;
(statearr_39510_40738[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (16))){
var inst_39462 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
var statearr_39511_40743 = state_39478__$1;
(statearr_39511_40743[(2)] = inst_39462);

(statearr_39511_40743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (10))){
var inst_39433 = (state_39478[(11)]);
var inst_39431 = (state_39478[(12)]);
var inst_39438 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39431,inst_39433);
var state_39478__$1 = state_39478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39478__$1,(13),out,inst_39438);
} else {
if((state_val_39479 === (18))){
var inst_39444 = (state_39478[(7)]);
var inst_39453 = cljs.core.first(inst_39444);
var state_39478__$1 = state_39478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39478__$1,(20),out,inst_39453);
} else {
if((state_val_39479 === (8))){
var inst_39432 = (state_39478[(8)]);
var inst_39433 = (state_39478[(11)]);
var inst_39435 = (inst_39433 < inst_39432);
var inst_39436 = inst_39435;
var state_39478__$1 = state_39478;
if(cljs.core.truth_(inst_39436)){
var statearr_39512_40762 = state_39478__$1;
(statearr_39512_40762[(1)] = (10));

} else {
var statearr_39513_40764 = state_39478__$1;
(statearr_39513_40764[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38109__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38109__auto____0 = (function (){
var statearr_39514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39514[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38109__auto__);

(statearr_39514[(1)] = (1));

return statearr_39514;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38109__auto____1 = (function (state_39478){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39478);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39515){if((e39515 instanceof Object)){
var ex__38112__auto__ = e39515;
var statearr_39516_40780 = state_39478;
(statearr_39516_40780[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40785 = state_39478;
state_39478 = G__40785;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38109__auto__ = function(state_39478){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38109__auto____1.call(this,state_39478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38109__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38109__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39517 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39517[(6)] = c__38209__auto__);

return statearr_39517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));

return c__38209__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39519 = arguments.length;
switch (G__39519) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39521 = arguments.length;
switch (G__39521) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39523 = arguments.length;
switch (G__39523) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38209__auto___40837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39547){
var state_val_39548 = (state_39547[(1)]);
if((state_val_39548 === (7))){
var inst_39542 = (state_39547[(2)]);
var state_39547__$1 = state_39547;
var statearr_39549_40838 = state_39547__$1;
(statearr_39549_40838[(2)] = inst_39542);

(statearr_39549_40838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (1))){
var inst_39524 = null;
var state_39547__$1 = (function (){var statearr_39550 = state_39547;
(statearr_39550[(7)] = inst_39524);

return statearr_39550;
})();
var statearr_39551_40839 = state_39547__$1;
(statearr_39551_40839[(2)] = null);

(statearr_39551_40839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (4))){
var inst_39527 = (state_39547[(8)]);
var inst_39527__$1 = (state_39547[(2)]);
var inst_39528 = (inst_39527__$1 == null);
var inst_39529 = cljs.core.not(inst_39528);
var state_39547__$1 = (function (){var statearr_39552 = state_39547;
(statearr_39552[(8)] = inst_39527__$1);

return statearr_39552;
})();
if(inst_39529){
var statearr_39553_40844 = state_39547__$1;
(statearr_39553_40844[(1)] = (5));

} else {
var statearr_39554_40845 = state_39547__$1;
(statearr_39554_40845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (6))){
var state_39547__$1 = state_39547;
var statearr_39555_40846 = state_39547__$1;
(statearr_39555_40846[(2)] = null);

(statearr_39555_40846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (3))){
var inst_39544 = (state_39547[(2)]);
var inst_39545 = cljs.core.async.close_BANG_(out);
var state_39547__$1 = (function (){var statearr_39556 = state_39547;
(statearr_39556[(9)] = inst_39544);

return statearr_39556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39547__$1,inst_39545);
} else {
if((state_val_39548 === (2))){
var state_39547__$1 = state_39547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39547__$1,(4),ch);
} else {
if((state_val_39548 === (11))){
var inst_39527 = (state_39547[(8)]);
var inst_39536 = (state_39547[(2)]);
var inst_39524 = inst_39527;
var state_39547__$1 = (function (){var statearr_39557 = state_39547;
(statearr_39557[(7)] = inst_39524);

(statearr_39557[(10)] = inst_39536);

return statearr_39557;
})();
var statearr_39558_40855 = state_39547__$1;
(statearr_39558_40855[(2)] = null);

(statearr_39558_40855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (9))){
var inst_39527 = (state_39547[(8)]);
var state_39547__$1 = state_39547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39547__$1,(11),out,inst_39527);
} else {
if((state_val_39548 === (5))){
var inst_39524 = (state_39547[(7)]);
var inst_39527 = (state_39547[(8)]);
var inst_39531 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39527,inst_39524);
var state_39547__$1 = state_39547;
if(inst_39531){
var statearr_39560_40860 = state_39547__$1;
(statearr_39560_40860[(1)] = (8));

} else {
var statearr_39561_40861 = state_39547__$1;
(statearr_39561_40861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (10))){
var inst_39539 = (state_39547[(2)]);
var state_39547__$1 = state_39547;
var statearr_39562_40863 = state_39547__$1;
(statearr_39562_40863[(2)] = inst_39539);

(statearr_39562_40863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39548 === (8))){
var inst_39524 = (state_39547[(7)]);
var tmp39559 = inst_39524;
var inst_39524__$1 = tmp39559;
var state_39547__$1 = (function (){var statearr_39563 = state_39547;
(statearr_39563[(7)] = inst_39524__$1);

return statearr_39563;
})();
var statearr_39564_40864 = state_39547__$1;
(statearr_39564_40864[(2)] = null);

(statearr_39564_40864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39565[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39565[(1)] = (1));

return statearr_39565;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39547){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39547);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39566){if((e39566 instanceof Object)){
var ex__38112__auto__ = e39566;
var statearr_39567_40870 = state_39547;
(statearr_39567_40870[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40871 = state_39547;
state_39547 = G__40871;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39568 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39568[(6)] = c__38209__auto___40837);

return statearr_39568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39570 = arguments.length;
switch (G__39570) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38209__auto___40874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39608){
var state_val_39609 = (state_39608[(1)]);
if((state_val_39609 === (7))){
var inst_39604 = (state_39608[(2)]);
var state_39608__$1 = state_39608;
var statearr_39610_40875 = state_39608__$1;
(statearr_39610_40875[(2)] = inst_39604);

(statearr_39610_40875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (1))){
var inst_39571 = (new Array(n));
var inst_39572 = inst_39571;
var inst_39573 = (0);
var state_39608__$1 = (function (){var statearr_39611 = state_39608;
(statearr_39611[(7)] = inst_39572);

(statearr_39611[(8)] = inst_39573);

return statearr_39611;
})();
var statearr_39612_40876 = state_39608__$1;
(statearr_39612_40876[(2)] = null);

(statearr_39612_40876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (4))){
var inst_39576 = (state_39608[(9)]);
var inst_39576__$1 = (state_39608[(2)]);
var inst_39577 = (inst_39576__$1 == null);
var inst_39578 = cljs.core.not(inst_39577);
var state_39608__$1 = (function (){var statearr_39613 = state_39608;
(statearr_39613[(9)] = inst_39576__$1);

return statearr_39613;
})();
if(inst_39578){
var statearr_39614_40882 = state_39608__$1;
(statearr_39614_40882[(1)] = (5));

} else {
var statearr_39615_40883 = state_39608__$1;
(statearr_39615_40883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (15))){
var inst_39598 = (state_39608[(2)]);
var state_39608__$1 = state_39608;
var statearr_39616_40885 = state_39608__$1;
(statearr_39616_40885[(2)] = inst_39598);

(statearr_39616_40885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (13))){
var state_39608__$1 = state_39608;
var statearr_39617_40890 = state_39608__$1;
(statearr_39617_40890[(2)] = null);

(statearr_39617_40890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (6))){
var inst_39573 = (state_39608[(8)]);
var inst_39594 = (inst_39573 > (0));
var state_39608__$1 = state_39608;
if(cljs.core.truth_(inst_39594)){
var statearr_39618_40892 = state_39608__$1;
(statearr_39618_40892[(1)] = (12));

} else {
var statearr_39619_40897 = state_39608__$1;
(statearr_39619_40897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (3))){
var inst_39606 = (state_39608[(2)]);
var state_39608__$1 = state_39608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39608__$1,inst_39606);
} else {
if((state_val_39609 === (12))){
var inst_39572 = (state_39608[(7)]);
var inst_39596 = cljs.core.vec(inst_39572);
var state_39608__$1 = state_39608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39608__$1,(15),out,inst_39596);
} else {
if((state_val_39609 === (2))){
var state_39608__$1 = state_39608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39608__$1,(4),ch);
} else {
if((state_val_39609 === (11))){
var inst_39588 = (state_39608[(2)]);
var inst_39589 = (new Array(n));
var inst_39572 = inst_39589;
var inst_39573 = (0);
var state_39608__$1 = (function (){var statearr_39620 = state_39608;
(statearr_39620[(7)] = inst_39572);

(statearr_39620[(10)] = inst_39588);

(statearr_39620[(8)] = inst_39573);

return statearr_39620;
})();
var statearr_39621_40912 = state_39608__$1;
(statearr_39621_40912[(2)] = null);

(statearr_39621_40912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (9))){
var inst_39572 = (state_39608[(7)]);
var inst_39586 = cljs.core.vec(inst_39572);
var state_39608__$1 = state_39608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39608__$1,(11),out,inst_39586);
} else {
if((state_val_39609 === (5))){
var inst_39576 = (state_39608[(9)]);
var inst_39572 = (state_39608[(7)]);
var inst_39573 = (state_39608[(8)]);
var inst_39581 = (state_39608[(11)]);
var inst_39580 = (inst_39572[inst_39573] = inst_39576);
var inst_39581__$1 = (inst_39573 + (1));
var inst_39582 = (inst_39581__$1 < n);
var state_39608__$1 = (function (){var statearr_39622 = state_39608;
(statearr_39622[(12)] = inst_39580);

(statearr_39622[(11)] = inst_39581__$1);

return statearr_39622;
})();
if(cljs.core.truth_(inst_39582)){
var statearr_39623_40931 = state_39608__$1;
(statearr_39623_40931[(1)] = (8));

} else {
var statearr_39624_40933 = state_39608__$1;
(statearr_39624_40933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (14))){
var inst_39601 = (state_39608[(2)]);
var inst_39602 = cljs.core.async.close_BANG_(out);
var state_39608__$1 = (function (){var statearr_39626 = state_39608;
(statearr_39626[(13)] = inst_39601);

return statearr_39626;
})();
var statearr_39627_40940 = state_39608__$1;
(statearr_39627_40940[(2)] = inst_39602);

(statearr_39627_40940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (10))){
var inst_39592 = (state_39608[(2)]);
var state_39608__$1 = state_39608;
var statearr_39628_40948 = state_39608__$1;
(statearr_39628_40948[(2)] = inst_39592);

(statearr_39628_40948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39609 === (8))){
var inst_39572 = (state_39608[(7)]);
var inst_39581 = (state_39608[(11)]);
var tmp39625 = inst_39572;
var inst_39572__$1 = tmp39625;
var inst_39573 = inst_39581;
var state_39608__$1 = (function (){var statearr_39629 = state_39608;
(statearr_39629[(7)] = inst_39572__$1);

(statearr_39629[(8)] = inst_39573);

return statearr_39629;
})();
var statearr_39630_40952 = state_39608__$1;
(statearr_39630_40952[(2)] = null);

(statearr_39630_40952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39631[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39631[(1)] = (1));

return statearr_39631;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39608){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39608);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39632){if((e39632 instanceof Object)){
var ex__38112__auto__ = e39632;
var statearr_39633_40956 = state_39608;
(statearr_39633_40956[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40957 = state_39608;
state_39608 = G__40957;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39634 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39634[(6)] = c__38209__auto___40874);

return statearr_39634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39636 = arguments.length;
switch (G__39636) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38209__auto___40966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38210__auto__ = (function (){var switch__38108__auto__ = (function (state_39678){
var state_val_39679 = (state_39678[(1)]);
if((state_val_39679 === (7))){
var inst_39674 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39680_40967 = state_39678__$1;
(statearr_39680_40967[(2)] = inst_39674);

(statearr_39680_40967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (1))){
var inst_39637 = [];
var inst_39638 = inst_39637;
var inst_39639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39678__$1 = (function (){var statearr_39681 = state_39678;
(statearr_39681[(7)] = inst_39639);

(statearr_39681[(8)] = inst_39638);

return statearr_39681;
})();
var statearr_39682_40968 = state_39678__$1;
(statearr_39682_40968[(2)] = null);

(statearr_39682_40968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (4))){
var inst_39642 = (state_39678[(9)]);
var inst_39642__$1 = (state_39678[(2)]);
var inst_39643 = (inst_39642__$1 == null);
var inst_39644 = cljs.core.not(inst_39643);
var state_39678__$1 = (function (){var statearr_39683 = state_39678;
(statearr_39683[(9)] = inst_39642__$1);

return statearr_39683;
})();
if(inst_39644){
var statearr_39684_40969 = state_39678__$1;
(statearr_39684_40969[(1)] = (5));

} else {
var statearr_39685_40970 = state_39678__$1;
(statearr_39685_40970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (15))){
var inst_39668 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39686_40975 = state_39678__$1;
(statearr_39686_40975[(2)] = inst_39668);

(statearr_39686_40975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (13))){
var state_39678__$1 = state_39678;
var statearr_39687_40976 = state_39678__$1;
(statearr_39687_40976[(2)] = null);

(statearr_39687_40976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (6))){
var inst_39638 = (state_39678[(8)]);
var inst_39663 = inst_39638.length;
var inst_39664 = (inst_39663 > (0));
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39664)){
var statearr_39688_40981 = state_39678__$1;
(statearr_39688_40981[(1)] = (12));

} else {
var statearr_39689_40986 = state_39678__$1;
(statearr_39689_40986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (3))){
var inst_39676 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39678__$1,inst_39676);
} else {
if((state_val_39679 === (12))){
var inst_39638 = (state_39678[(8)]);
var inst_39666 = cljs.core.vec(inst_39638);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39678__$1,(15),out,inst_39666);
} else {
if((state_val_39679 === (2))){
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39678__$1,(4),ch);
} else {
if((state_val_39679 === (11))){
var inst_39646 = (state_39678[(10)]);
var inst_39642 = (state_39678[(9)]);
var inst_39656 = (state_39678[(2)]);
var inst_39657 = [];
var inst_39658 = inst_39657.push(inst_39642);
var inst_39638 = inst_39657;
var inst_39639 = inst_39646;
var state_39678__$1 = (function (){var statearr_39690 = state_39678;
(statearr_39690[(11)] = inst_39656);

(statearr_39690[(7)] = inst_39639);

(statearr_39690[(8)] = inst_39638);

(statearr_39690[(12)] = inst_39658);

return statearr_39690;
})();
var statearr_39691_40988 = state_39678__$1;
(statearr_39691_40988[(2)] = null);

(statearr_39691_40988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (9))){
var inst_39638 = (state_39678[(8)]);
var inst_39654 = cljs.core.vec(inst_39638);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39678__$1,(11),out,inst_39654);
} else {
if((state_val_39679 === (5))){
var inst_39639 = (state_39678[(7)]);
var inst_39646 = (state_39678[(10)]);
var inst_39642 = (state_39678[(9)]);
var inst_39646__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39642) : f.call(null,inst_39642));
var inst_39647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39646__$1,inst_39639);
var inst_39648 = cljs.core.keyword_identical_QMARK_(inst_39639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39649 = ((inst_39647) || (inst_39648));
var state_39678__$1 = (function (){var statearr_39692 = state_39678;
(statearr_39692[(10)] = inst_39646__$1);

return statearr_39692;
})();
if(cljs.core.truth_(inst_39649)){
var statearr_39693_40994 = state_39678__$1;
(statearr_39693_40994[(1)] = (8));

} else {
var statearr_39694_40996 = state_39678__$1;
(statearr_39694_40996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (14))){
var inst_39671 = (state_39678[(2)]);
var inst_39672 = cljs.core.async.close_BANG_(out);
var state_39678__$1 = (function (){var statearr_39696 = state_39678;
(statearr_39696[(13)] = inst_39671);

return statearr_39696;
})();
var statearr_39697_40998 = state_39678__$1;
(statearr_39697_40998[(2)] = inst_39672);

(statearr_39697_40998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (10))){
var inst_39661 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39698_41002 = state_39678__$1;
(statearr_39698_41002[(2)] = inst_39661);

(statearr_39698_41002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (8))){
var inst_39638 = (state_39678[(8)]);
var inst_39646 = (state_39678[(10)]);
var inst_39642 = (state_39678[(9)]);
var inst_39651 = inst_39638.push(inst_39642);
var tmp39695 = inst_39638;
var inst_39638__$1 = tmp39695;
var inst_39639 = inst_39646;
var state_39678__$1 = (function (){var statearr_39699 = state_39678;
(statearr_39699[(7)] = inst_39639);

(statearr_39699[(8)] = inst_39638__$1);

(statearr_39699[(14)] = inst_39651);

return statearr_39699;
})();
var statearr_39700_41006 = state_39678__$1;
(statearr_39700_41006[(2)] = null);

(statearr_39700_41006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38109__auto__ = null;
var cljs$core$async$state_machine__38109__auto____0 = (function (){
var statearr_39701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39701[(0)] = cljs$core$async$state_machine__38109__auto__);

(statearr_39701[(1)] = (1));

return statearr_39701;
});
var cljs$core$async$state_machine__38109__auto____1 = (function (state_39678){
while(true){
var ret_value__38110__auto__ = (function (){try{while(true){
var result__38111__auto__ = switch__38108__auto__(state_39678);
if(cljs.core.keyword_identical_QMARK_(result__38111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38111__auto__;
}
break;
}
}catch (e39702){if((e39702 instanceof Object)){
var ex__38112__auto__ = e39702;
var statearr_39703_41011 = state_39678;
(statearr_39703_41011[(5)] = ex__38112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41015 = state_39678;
state_39678 = G__41015;
continue;
} else {
return ret_value__38110__auto__;
}
break;
}
});
cljs$core$async$state_machine__38109__auto__ = function(state_39678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38109__auto____1.call(this,state_39678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38109__auto____0;
cljs$core$async$state_machine__38109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38109__auto____1;
return cljs$core$async$state_machine__38109__auto__;
})()
})();
var state__38211__auto__ = (function (){var statearr_39704 = (f__38210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38210__auto__.cljs$core$IFn$_invoke$arity$0() : f__38210__auto__.call(null));
(statearr_39704[(6)] = c__38209__auto___40966);

return statearr_39704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38211__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
