var t,e,r,n,o,i,a,c,u,s,l,f,p,h,d,v,m,g,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function w(t){return t&&t.__esModule?t.default:t}var _={},S={},O=b.parcelRequire3a11;null==O&&((O=function(t){if(t in _)return _[t].exports;if(t in S){var e=S[t];delete S[t];var r={id:t,exports:{}};return _[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){S[t]=e},b.parcelRequire3a11=O);var E={},j={},F=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
j=F("object"==typeof globalThis&&globalThis)||F("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
F("object"==typeof self&&self)||F("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||j||Function("return this")();var L={},x={};// Detect IE8's incomplete defineProperty implementation
L=!(x=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var M={},T={};T=!x(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var k=Function.prototype.call;M=T?k.bind(k):function(){return k.apply(k,arguments)};var P={}.propertyIsEnumerable,I=Object.getOwnPropertyDescriptor;i=I&&!P.call({1:2},1)?function(t){var e=I(this,t);return!!e&&e.enumerable}:P;var $={};$=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var N={},D={},z={},R=Function.prototype,C=R.call,A=T&&R.bind.bind(C,C),q={},H=(z=T?A:function(t){return function(){return C.apply(t,arguments)}})({}.toString),G=z("".slice);q=function(t){return G(H(t),8,-1)};var U=Object,B=z("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
D=x(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!U("z").propertyIsEnumerable(0)})?function(t){return"String"===q(t)?B(t,""):U(t)}:U;var W={},Y={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
Y=function(t){return null==t};var K=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
W=function(t){if(Y(t))throw K("Can't call method on "+t);return t},N=function(t){return D(W(t))};var V={},J={},Q={},X={},Z={},tt="object"==typeof document&&document.all,te=(Z={all:tt,IS_HTMLDDA:void 0===tt&&void 0!==tt}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
X=Z.IS_HTMLDDA?function(t){return"function"==typeof t||t===te}:function(t){return"function"==typeof t};var tr=Z.all;Q=Z.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:X(t)||t===tr}:function(t){return"object"==typeof t?null!==t:X(t)};var tn={},to={};to=function(t,e){var r;return arguments.length<2?(r=j[t],X(r)?r:void 0):j[t]&&j[t][e]};var ti={};ti=z({}.isPrototypeOf);var ta={},tc={},tu={},ts={};ts="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tl=j.process,tf=j.Deno,tp=tl&&tl.versions||tf&&tf.version,th=tp&&tp.v8;th&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(c=(a=th.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!c&&ts&&(!(a=ts.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ts.match(/Chrome\/(\d+)/))&&(c=+a[1]),tu=c;var tv=j.String;ta=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tc=!!Object.getOwnPropertySymbols&&!x(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tv(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tu&&tu<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tm=Object;tn=ta?function(t){return"symbol"==typeof t}:function(t){var e=to("Symbol");return X(e)&&ti(e.prototype,tm(t))};var tg={},ty={},tb={},tw=String;tb=function(t){try{return tw(t)}catch(t){return"Object"}};var t_=TypeError;// `Assert: IsCallable(argument) is true`
ty=function(t){if(X(t))return t;throw t_(tb(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tg=function(t,e){var r=t[e];return Y(r)?void 0:ty(r)};var tS={},tO=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tS=function(t,e){var r,n;if("string"===e&&X(r=t.toString)&&!Q(n=M(r,t))||X(r=t.valueOf)&&!Q(n=M(r,t))||"string"!==e&&X(r=t.toString)&&!Q(n=M(r,t)))return n;throw tO("Can't convert object to primitive value")};var tE={},tj={};tj=!1;var tF={},tL={},tx=Object.defineProperty;tL=function(t,e){try{tx(j,t,{value:e,configurable:!0,writable:!0})}catch(r){j[t]=e}return e};var tM="__core-js_shared__";tF=j[tM]||tL(tM,{}),(tE=function(t,e){return tF[t]||(tF[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.2",mode:tj?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tT={},tk={},tP=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tk=function(t){return tP(W(t))};var tI=z({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tT=Object.hasOwn||function(t,e){return tI(tk(t),e)};var t$={},tN=0,tD=Math.random(),tz=z(1..toString);t$=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tz(++tN+tD,36)};var tR=j.Symbol,tC=tE("wks"),tA=ta?tR.for||tR:tR&&tR.withoutSetter||t$,tq=TypeError,tH=(tT(tC,t="toPrimitive")||(tC[t]=tc&&tT(tR,t)?tR[t]:tA("Symbol."+t)),tC[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
J=function(t,e){if(!Q(t)||tn(t))return t;var r,n=tg(t,tH);if(n){if(void 0===e&&(e="default"),r=M(n,t,e),!Q(r)||tn(r))return r;throw tq("Can't convert object to primitive value")}return void 0===e&&(e="number"),tS(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
V=function(t){var e=J(t,"string");return tn(e)?e:e+""};var tG={},tU={},tB=j.document,tW=Q(tB)&&Q(tB.createElement);tU=function(t){return tW?tB.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tG=!L&&!x(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tU("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tY=Object.getOwnPropertyDescriptor;o=L?tY:function(t,e){if(t=N(t),e=V(e),tG)try{return tY(t,e)}catch(t){}if(tT(t,e))return $(!M(i,t,e),t[e])};var tK={},tV={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tV=L&&x(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tJ={},tQ=String,tX=TypeError;// `Assert: Type(argument) is Object`
tJ=function(t){if(Q(t))return t;throw tX(tQ(t)+" is not an object")};var tZ=TypeError,t0=Object.defineProperty,t1=Object.getOwnPropertyDescriptor,t2="enumerable",t3="configurable",t4="writable";u=L?tV?function(t,e,r){if(tJ(t),e=V(e),tJ(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t4 in r&&!r[t4]){var n=t1(t,e);n&&n[t4]&&(t[e]=r.value,r={configurable:t3 in r?r[t3]:n[t3],enumerable:t2 in r?r[t2]:n[t2],writable:!1})}return t0(t,e,r)}:t0:function(t,e,r){if(tJ(t),e=V(e),tJ(r),tG)try{return t0(t,e,r)}catch(t){}if("get"in r||"set"in r)throw tZ("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tK=L?function(t,e,r){return u(t,e,$(1,r))}:function(t,e,r){return t[e]=r,t};var t7={},t9={},t8=Function.prototype,t5=L&&Object.getOwnPropertyDescriptor,t6=tT(t8,"name")&&(!L||L&&t5(t8,"name").configurable),et={},ee=z(Function.toString);X(tF.inspectSource)||(tF.inspectSource=function(t){return ee(t)}),et=tF.inspectSource;var er={},en={},eo=j.WeakMap;en=X(eo)&&/native code/.test(String(eo));var ei={},ea=tE("keys");ei=function(t){return ea[t]||(ea[t]=t$(t))};var ec={};ec={};var eu="Object already initialized",es=j.TypeError,el=j.WeakMap;if(en||tF.state){var ef=tF.state||(tF.state=new el);/* eslint-disable no-self-assign -- prototype methods protection */ef.get=ef.get,ef.has=ef.has,ef.set=ef.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(t,e){if(ef.has(t))throw es(eu);return e.facade=t,ef.set(t,e),e},l=function(t){return ef.get(t)||{}},f=function(t){return ef.has(t)}}else{var ep=ei("state");ec[ep]=!0,s=function(t,e){if(tT(t,ep))throw es(eu);return e.facade=t,tK(t,ep,e),e},l=function(t){return tT(t,ep)?t[ep]:{}},f=function(t){return tT(t,ep)}}var eh=(er={set:s,get:l,has:f,enforce:function(t){return f(t)?l(t):s(t,{})},getterFor:function(t){return function(e){var r;if(!Q(e)||(r=l(e)).type!==t)throw es("Incompatible receiver, "+t+" required");return r}}}).enforce,ed=er.get,ev=String,em=Object.defineProperty,eg=z("".slice),ey=z("".replace),eb=z([].join),ew=L&&!x(function(){return 8!==em(function(){},"length",{value:8}).length}),e_=String(String).split("String"),eS=t9=function(t,e,r){"Symbol("===eg(ev(e),0,7)&&(e="["+ey(ev(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tT(t,"name")||t6&&t.name!==e)&&(L?em(t,"name",{value:e,configurable:!0}):t.name=e),ew&&r&&tT(r,"arity")&&t.length!==r.arity&&em(t,"length",{value:r.arity});try{r&&tT(r,"constructor")&&r.constructor?L&&em(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=eh(t);return tT(n,"source")||(n.source=eb(e_,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=eS(function(){return X(this)&&ed(this).source||et(this)},"toString"),t7=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(X(r)&&t9(r,i,n),n.global)o?t[e]=r:tL(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:u(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var eO={},eE={},ej={},eF={},eL={},ex={},eM=Math.ceil,eT=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
ex=Math.trunc||function(t){var e=+t;return(e>0?eT:eM)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eL=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:ex(e)};var ek=Math.max,eP=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
eF=function(t,e){var r=eL(t);return r<0?ek(r+e,0):eP(r,e)};var eI={},e$={},eN=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
e$=function(t){return t>0?eN(eL(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eI=function(t){return e$(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eD=function(t){return function(e,r,n){var o,i=N(e),a=eI(i),c=eF(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ez={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eD(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eD(!1)}.indexOf,eR=z([].push);ej=function(t,e){var r,n=N(t),o=0,i=[];for(r in n)!tT(ec,r)&&tT(n,r)&&eR(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)tT(n,r=e[o++])&&(~ez(i,r)||eR(i,r));return i};var eC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(t){return ej(t,eC)},h=Object.getOwnPropertySymbols;var eA=z([].concat);// all object keys, includes non-enumerable and symbols
eE=to("Reflect","ownKeys")||function(t){var e=p(tJ(t));return h?eA(e,h(t)):e},eO=function(t,e,r){for(var n=eE(e),i=0;i<n.length;i++){var a=n[i];tT(t,a)||r&&tT(r,a)||u(t,a,o(e,a))}};var eq={},eH=/#|\.prototype\./,eG=function(t,e){var r=eB[eU(t)];return r===eY||r!==eW&&(X(e)?x(e):!!e)},eU=eG.normalize=function(t){return String(t).replace(eH,".").toLowerCase()},eB=eG.data={},eW=eG.NATIVE="N",eY=eG.POLYFILL="P";eq=eG,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/E=function(t,e){var r,n,i,a,c,u=t.target,s=t.global,l=t.stat;if(r=s?j:l?j[u]||tL(u,{}):(j[u]||{}).prototype)for(n in e){// contained in target
if(a=e[n],i=t.dontCallGetSet?(c=o(r,n))&&c.value:r[n],!eq(s?n:u+(l?".":"#")+n,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;eO(a,i)}(t.sham||i&&i.sham)&&tK(a,"sham",!0),t7(r,n,a,t)}};var eK={},eV={},eJ=Function.prototype,eQ=eJ.apply,eX=eJ.call;// eslint-disable-next-line es/no-reflect -- safe
eV="object"==typeof Reflect&&Reflect.apply||(T?eX.bind(eQ):function(){return eX.apply(eQ,arguments)});var eZ={},e0={},e1=(e0=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===q(t))return z(t)})(e0.bind);// optional / simple context binding
eZ=function(t,e){return ty(t),void 0===e?t:T?e1(t,e):function(){return t.apply(e,arguments)}};var e2={};e2=to("document","documentElement");var e3={};e3=z([].slice);var e4={},e7=TypeError;e4=function(t,e){if(t<e)throw e7("Not enough arguments");return t};var e9={};// eslint-disable-next-line redos/no-vulnerable -- safe
e9=/(?:ipad|iphone|ipod).*applewebkit/i.test(ts);var e8={};e8="process"===q(j.process);var e5=j.setImmediate,e6=j.clearImmediate,rt=j.process,re=j.Dispatch,rr=j.Function,rn=j.MessageChannel,ro=j.String,ri=0,ra={},rc="onreadystatechange";x(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
d=j.location});var ru=function(t){if(tT(ra,t)){var e=ra[t];delete ra[t],e()}},rs=function(t){return function(){ru(t)}},rl=function(t){ru(t.data)},rf=function(t){// old engines have not location.origin
j.postMessage(ro(t),d.protocol+"//"+d.host)};e5&&e6||(e5=function(t){e4(arguments.length,1);var e=X(t)?t:rr(t),r=e3(arguments,1);return ra[++ri]=function(){eV(e,void 0,r)},v(ri),ri},e6=function(t){delete ra[t]},e8?v=function(t){rt.nextTick(rs(t))}:re&&re.now?v=function(t){re.now(rs(t))}:rn&&!e9?(g=(m=new rn).port2,m.port1.onmessage=rl,v=eZ(g.postMessage,g)):j.addEventListener&&X(j.postMessage)&&!j.importScripts&&d&&"file:"!==d.protocol&&!x(rf)?(v=rf,j.addEventListener("message",rl,!1)):v=rc in tU("script")?function(t){e2.appendChild(tU("script"))[rc]=function(){e2.removeChild(this),ru(t)}}:function(t){setTimeout(rs(t),0)});var rp=(eK={set:e5,clear:e6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
E({global:!0,bind:!0,enumerable:!0,forced:j.clearImmediate!==rp},{clearImmediate:rp});var rh=eK.set,rd={},rv={};/* global Bun -- Deno case */rv="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rm=j.Function,rg=/MSIE .\./.test(ts)||rv&&((e=j.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rd=function(t,e){var r=e?2:1;return rg?function(n,o/* , ...arguments */){var i=e4(arguments.length,1)>r,a=X(n)?n:rm(n),c=i?e3(arguments,r):[],u=i?function(){eV(a,this,c)}:a;return e?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var ry=j.setImmediate?rd(rh,!1):rh;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
E({global:!0,bind:!0,enumerable:!0,forced:j.setImmediate!==ry},{setImmediate:ry});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new L(i||[]),c=p,function(r,o){if(c===h)throw Error("Generator is already running");if(c===d){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v);var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(i,a);if(u){if(u===v)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var s=f(t,n,a);if("normal"===s.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=d,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=s.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function g(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};s(b,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==r&&n.call(_,a)&&// of the polyfill.
(b=_);var S=y.prototype=m.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function O(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
s.value=t,a(s)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function x(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return g.prototype=y,o(S,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},O(E.prototype),s(E.prototype,c,function(){return this}),t.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
O(S),s(S,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
s(S,a,function(){return this}),s(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=x,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),v}},t}({});try{regeneratorRuntime=rb}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const rw=async function(t){try{let e=fetch(t),r=await Promise.race([e,new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 second"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(t){throw t}},r_={recipe:{}},rS=async function(t){try{let e=await rw(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),{recipe:r}=e.data;r_.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients},console.log(r_.recipe)}catch(t){//temp error handling
console.error(`${t} 💥💥💥`)}};// import icons from '../img/icons.svg'; // Parcel 1
var rO={};rO=new URL(O("27Lyk").resolve("eyyUD"),import.meta.url).toString(),(Fraction=function(t,e){/* double argument invocation */if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,o=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var i=r.split("/");this.numerator=i[0],this.denominator=i[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));// fractions that are equal should have equal normalized forms
var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},n=function(t,e){if(!e)return Math.round(t);var r=Math.pow(10,e);return Math.round(t*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var t=n(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),//this.numerator *= scaleup;
this.numerator*=e}if(r(this.numerator)){var t=n(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*e),//this.numerator *= scaleup;
this.denominator*=e}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),o=Fraction.primeFactors(e);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(t){var e=o.indexOf(t);e>=0&&(r.push(t),o.splice(e,1))}),0===r.length)?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;// and increment
return 1!=e&&r.push(e),r;// Return the prime factors
},console.log(y=Fraction);class rE{#t=document.querySelector(".recipe");#e;render(t){this.#e=t;let e=this.#r();this.#n(),this.#t.insertAdjacentHTML("afterbegin",e)}#n(){this.#t.innerHTML=""}renderSpinner=function(){let t=`
    <div class="spinner">
    <svg>
      <use href="${/*@__PURE__*/w(rO)}#icon-loader"></use>
    </svg>
  </div>
  `;this.#t.innerHTML="",this.#t.insertAdjacentHTML("afterbegin",t)};addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}#r(){return`
    <figure class="recipe__fig">
    <img src="${this.#e.image}" alt="${this.#e.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this.#e.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/w(rO)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this.#e.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/w(rO)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this.#e.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${/*@__PURE__*/w(rO)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${/*@__PURE__*/w(rO)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${/*@__PURE__*/w(rO)}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${/*@__PURE__*/w(rO)}#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this.#e.ingredients.map(this.#o).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this.#e.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href= "${this.#e.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/w(rO)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `}#o(t){return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/w(rO)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${t.quantity?new y(t.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${t.unit}</span>
            ${t.description}
          </div>
        </li>
      `}}var rj=new rE;document.querySelector(".recipe");// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const rF=async function(){try{let t=window.location.hash.slice(1);if(console.log("this is the id:"+t),!t)return;rj.renderSpinner(),// 1) loading recipe
await rS(t),rj.render(r_.recipe)}catch(t){console.log(t)}};rj.addHandlerRender(rF);//multiple events has the  same function:
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
//solution
//# sourceMappingURL=index.5d6d552a.js.map

//# sourceMappingURL=index.5d6d552a.js.map
