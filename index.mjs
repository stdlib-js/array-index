// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-linked-list@v0.1.1-esm/index.mjs";function f(e,t){return u(t)?h(t,"persist")&&(e.persist=t.persist,!i(e.persist))?new TypeError(m("invalid option. `%s` option must be a boolean. Option: `%s`.","persist",e.persist)):null:new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",t))}var y=new v;function c(e){for(var t=y.first();t;){if(t.value.id===e)return t;t=t.next}return null}var j=-1;function b(){return(j+=1).toString()}function g(e){var a,d,l,u,h;if(!(this instanceof g))return arguments.length>1?new g(e,arguments[1]):new g(e);if(!n(e))throw new TypeError(m("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if("generic"===(l=o(e))||null===l)if(h=p(e)(e,0),i(h))u="bool";else{if(!s(h))throw new TypeError("invalid argument. First argument must be a valid index array.");u="int"}else if("int32"===l)u="int";else{if("uint8"!==l)throw new TypeError("invalid argument. First argument must be a valid index array.");u="mask"}if(a={persist:!1},arguments.length>1&&(d=f(a,arguments[1])))throw d;return y.push({id:b(),ref:this,data:e,type:u,dtype:l,persist:a.persist}),t(this,"_node",y.last()),r(this,"_invalidated",!1),this}t(g,"name","ArrayIndex"),t(g,"free",(function(e){var r,n;return null!==(r=c(e))&&(n=r.value,t(n.ref,"_invalidated",!0),y.remove(r),n.data=null,!0)})),t(g,"get",(function(e){var t,r,n;return null===(t=c(e))?null:(r={data:(n=t.value).data,type:n.type,dtype:n.dtype},n.persist||g.free(e),r)})),e(g.prototype,"data",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.data})),e(g.prototype,"dtype",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.dtype})),e(g.prototype,"id",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.id})),e(g.prototype,"isCached",(function(){return!this._invalidated})),e(g.prototype,"type",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.type})),t(g.prototype,"toString",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return"ArrayIndex<"+this._node.value.id+">"})),t(g.prototype,"toJSON",(function(){var e;if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return{type:"ArrayIndex",data:"generic"===(e=this._node.value).dtype||null===e.dtype?a(e.data)?l(e.data):e.data:d(e.data)}}));export{g as default};
//# sourceMappingURL=index.mjs.map
