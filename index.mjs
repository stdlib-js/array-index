// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.3.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.3.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-linked-list@v0.2.2-esm/index.mjs";var f=new v;function y(e){for(var t=f.first();t;){if(t.value.id===e)return t;t=t.next}return null}var c=-1;function j(e){var a,d,l,v,y;if(!(this instanceof j))return arguments.length>1?new j(e,arguments[1]):new j(e);if(!n(e))throw new TypeError(h("null2O",e));if("generic"===(l=o(e))||null===l)if(e.length>0)if(y=p(e)(e,0),i(y))v="bool";else{if(!s(y))throw new TypeError("invalid argument. First argument must be a valid index array.");v="int"}else v="int";else if("int32"===l)v="int";else if("uint8"===l)v="mask";else{if("bool"!==l)throw new TypeError("invalid argument. First argument must be a valid index array.");v="bool"}if(a={persist:!1},arguments.length>1&&(d=function(e,t){return m(t)?u(t,"persist")&&(e.persist=t.persist,!i(e.persist))?new TypeError(h("null2o","persist",e.persist)):null:new TypeError(h("null2V",t))}(a,arguments[1]),d))throw d;return f.push({id:(c+=1).toString(),ref:this,data:e,type:v,dtype:l,persist:a.persist}),t(this,"_node",f.last()),r(this,"_invalidated",!1),this}t(j,"name","ArrayIndex"),t(j,"free",(function(e){var r,n;return null!==(r=y(e))&&(n=r.value,t(n.ref,"_invalidated",!0),f.remove(r),n.data=null,!0)})),t(j,"get",(function(e){var t,r,n;return null===(t=y(e))?null:(r={data:(n=t.value).data,type:n.type,dtype:n.dtype},n.persist||j.free(e),r)})),e(j.prototype,"data",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.data})),e(j.prototype,"dtype",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.dtype})),e(j.prototype,"id",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.id})),e(j.prototype,"isCached",(function(){return!this._invalidated})),e(j.prototype,"type",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return this._node.value.type})),t(j.prototype,"toString",(function(){if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return"ArrayIndex<"+this._node.value.id+">"})),t(j.prototype,"toJSON",(function(){var e;if(this._invalidated)throw new Error("invalid operation. This array index instance has already been freed and can no longer be used.");return{type:"ArrayIndex",data:"generic"===(e=this._node.value).dtype||null===e.dtype?a(e.data)?l(e.data):e.data:d(e.data)}}));export{j as default};
//# sourceMappingURL=index.mjs.map
