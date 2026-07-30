"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=o(function(_,l){
var q=require('@stdlib/number-float64-base-assert-is-almost-same-value/dist'),S=require('@stdlib/number-float32-base-assert-is-almost-same-value/dist'),E=require('@stdlib/complex-float64-reim/dist'),m=require('@stdlib/complex-float32-reim/dist');function f(e,r,a){var i,s,u,v,t;return u=e.BYTES_PER_ELEMENT,v=r.BYTES_PER_ELEMENT,u===4&&v===4?(t=S,i=m(e),s=m(r)):(t=q,i=E(e),s=E(r)),t(i[0],s[0],a)&&t(i[1],s[1],a)}l.exports=f
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
