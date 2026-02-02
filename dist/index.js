"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=o(function(_,l){
var q=require('@stdlib/number-float64-base-assert-is-almost-same-value/dist'),S=require('@stdlib/number-float32-base-assert-is-almost-same-value/dist'),E=require('@stdlib/complex-float64-reim/dist'),m=require('@stdlib/complex-float32-reim/dist');function f(e,r,t){var a,i,u,v,s;return u=e.BYTES_PER_ELEMENT,v=r.BYTES_PER_ELEMENT,u===4&&v===4?(s=S,a=m(e),i=m(r)):(s=q,a=E(e),i=E(r)),s(a[0],i[0],t)&&s(a[1],i[1],t)}l.exports=f
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
