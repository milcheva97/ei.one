(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function V0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Wf={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function k0(){if($g)return Co;$g=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var p in l)p!=="key"&&(f[p]=l[p])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:f}}return Co.Fragment=t,Co.jsx=i,Co.jsxs=i,Co}var ev;function X0(){return ev||(ev=1,Wf.exports=k0()),Wf.exports}var c=X0(),qf={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function W0(){if(tv)return tt;tv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(U,ne,_e){this.props=U,this.context=ne,this.refs=M,this.updater=_e||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function B(){}B.prototype=x.prototype;function N(U,ne,_e){this.props=U,this.context=ne,this.refs=M,this.updater=_e||A}var z=N.prototype=new B;z.constructor=N,w(z,x.prototype),z.isPureReactComponent=!0;var ie=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function D(U,ne,_e){var q=_e.ref;return{$$typeof:o,type:U,key:ne,ref:q!==void 0?q:null,props:_e}}function C(U,ne){return D(U.type,ne,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function ce(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ne[_e]})}var oe=/\/+/g;function me(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?ce(""+U.key):ne.toString(36)}function de(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,ne,_e,q,le){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var Ee=!1;if(U===null)Ee=!0;else switch(ye){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(U.$$typeof){case o:case t:Ee=!0;break;case _:return Ee=U._init,L(Ee(U._payload),ne,_e,q,le)}}if(Ee)return le=le(U),Ee=q===""?"."+me(U,0):q,ie(le)?(_e="",Ee!=null&&(_e=Ee.replace(oe,"$&/")+"/"),L(le,ne,_e,"",function(nt){return nt})):le!=null&&(G(le)&&(le=C(le,_e+(le.key==null||U&&U.key===le.key?"":(""+le.key).replace(oe,"$&/")+"/")+Ee)),ne.push(le)),1;Ee=0;var He=q===""?".":q+":";if(ie(U))for(var Fe=0;Fe<U.length;Fe++)q=U[Fe],ye=He+me(q,Fe),Ee+=L(q,ne,_e,ye,le);else if(Fe=E(U),typeof Fe=="function")for(U=Fe.call(U),Fe=0;!(q=U.next()).done;)q=q.value,ye=He+me(q,Fe++),Ee+=L(q,ne,_e,ye,le);else if(ye==="object"){if(typeof U.then=="function")return L(de(U),ne,_e,q,le);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function W(U,ne,_e){if(U==null)return U;var q=[],le=0;return L(U,q,"","",function(ye){return ne.call(_e,ye,le++)}),q}function Z(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:W,forEach:function(U,ne,_e){W(U,function(){ne.apply(this,arguments)},_e)},count:function(U){var ne=0;return W(U,function(){ne++}),ne},toArray:function(U){return W(U,function(ne){return ne})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return tt.Activity=y,tt.Children=be,tt.Component=x,tt.Fragment=i,tt.Profiler=l,tt.PureComponent=N,tt.StrictMode=s,tt.Suspense=g,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,tt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},tt.cache=function(U){return function(){return U.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(U,ne,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var q=w({},U.props),le=U.key;if(ne!=null)for(ye in ne.key!==void 0&&(le=""+ne.key),ne)!J.call(ne,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ne.ref===void 0||(q[ye]=ne[ye]);var ye=arguments.length-2;if(ye===1)q.children=_e;else if(1<ye){for(var Ee=Array(ye),He=0;He<ye;He++)Ee[He]=arguments[He+2];q.children=Ee}return D(U.type,le,q)},tt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:f,_context:U},U},tt.createElement=function(U,ne,_e){var q,le={},ye=null;if(ne!=null)for(q in ne.key!==void 0&&(ye=""+ne.key),ne)J.call(ne,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(le[q]=ne[q]);var Ee=arguments.length-2;if(Ee===1)le.children=_e;else if(1<Ee){for(var He=Array(Ee),Fe=0;Fe<Ee;Fe++)He[Fe]=arguments[Fe+2];le.children=He}if(U&&U.defaultProps)for(q in Ee=U.defaultProps,Ee)le[q]===void 0&&(le[q]=Ee[q]);return D(U,ye,le)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(U){return{$$typeof:p,render:U}},tt.isValidElement=G,tt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:Z}},tt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},tt.startTransition=function(U){var ne=P.T,_e={};P.T=_e;try{var q=U(),le=P.S;le!==null&&le(_e,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(H,Me)}catch(ye){Me(ye)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),P.T=ne}},tt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},tt.use=function(U){return P.H.use(U)},tt.useActionState=function(U,ne,_e){return P.H.useActionState(U,ne,_e)},tt.useCallback=function(U,ne){return P.H.useCallback(U,ne)},tt.useContext=function(U){return P.H.useContext(U)},tt.useDebugValue=function(){},tt.useDeferredValue=function(U,ne){return P.H.useDeferredValue(U,ne)},tt.useEffect=function(U,ne){return P.H.useEffect(U,ne)},tt.useEffectEvent=function(U){return P.H.useEffectEvent(U)},tt.useId=function(){return P.H.useId()},tt.useImperativeHandle=function(U,ne,_e){return P.H.useImperativeHandle(U,ne,_e)},tt.useInsertionEffect=function(U,ne){return P.H.useInsertionEffect(U,ne)},tt.useLayoutEffect=function(U,ne){return P.H.useLayoutEffect(U,ne)},tt.useMemo=function(U,ne){return P.H.useMemo(U,ne)},tt.useOptimistic=function(U,ne){return P.H.useOptimistic(U,ne)},tt.useReducer=function(U,ne,_e){return P.H.useReducer(U,ne,_e)},tt.useRef=function(U){return P.H.useRef(U)},tt.useState=function(U){return P.H.useState(U)},tt.useSyncExternalStore=function(U,ne,_e){return P.H.useSyncExternalStore(U,ne,_e)},tt.useTransition=function(){return P.H.useTransition()},tt.version="19.2.7",tt}var nv;function rh(){return nv||(nv=1,qf.exports=W0()),qf.exports}var Ji=rh();const q0=V0(Ji);var Yf={exports:{}},wo={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function Y0(){return iv||(iv=1,(function(o){function t(L,W){var Z=L.length;L.push(W);e:for(;0<Z;){var Me=Z-1>>>1,be=L[Me];if(0<l(be,W))L[Me]=W,L[Z]=be,Z=Me;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var W=L[0],Z=L.pop();if(Z!==W){L[0]=Z;e:for(var Me=0,be=L.length,U=be>>>1;Me<U;){var ne=2*(Me+1)-1,_e=L[ne],q=ne+1,le=L[q];if(0>l(_e,Z))q<be&&0>l(le,_e)?(L[Me]=le,L[q]=Z,Me=q):(L[Me]=_e,L[ne]=Z,Me=ne);else if(q<be&&0>l(le,Z))L[Me]=le,L[q]=Z,Me=q;else break e}}return W}function l(L,W){var Z=L.sortIndex-W.sortIndex;return Z!==0?Z:L.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var g=[],m=[],_=1,y=null,S=3,E=!1,A=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function z(L){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=L)s(m),W.sortIndex=W.expirationTime,t(g,W);else break;W=i(m)}}function ie(L){if(w=!1,z(L),!A)if(i(g)!==null)A=!0,H||(H=!0,ce());else{var W=i(m);W!==null&&de(ie,W.startTime-L)}}var H=!1,P=-1,J=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<J)}function G(){if(M=!1,H){var L=o.unstable_now();D=L;var W=!0;try{e:{A=!1,w&&(w=!1,B(P),P=-1),E=!0;var Z=S;try{t:{for(z(L),y=i(g);y!==null&&!(y.expirationTime>L&&C());){var Me=y.callback;if(typeof Me=="function"){y.callback=null,S=y.priorityLevel;var be=Me(y.expirationTime<=L);if(L=o.unstable_now(),typeof be=="function"){y.callback=be,z(L),W=!0;break t}y===i(g)&&s(g),z(L)}else s(g);y=i(g)}if(y!==null)W=!0;else{var U=i(m);U!==null&&de(ie,U.startTime-L),W=!1}}break e}finally{y=null,S=Z,E=!1}W=void 0}}finally{W?ce():H=!1}}}var ce;if(typeof N=="function")ce=function(){N(G)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=G,ce=function(){me.postMessage(null)}}else ce=function(){x(G,0)};function de(L,W){P=x(function(){L(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var Z=S;S=W;try{return L()}finally{S=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=S;S=L;try{return W()}finally{S=Z}},o.unstable_scheduleCallback=function(L,W,Z){var Me=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Me+Z:Me):Z=Me,L){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,L={id:_++,callback:W,priorityLevel:L,startTime:Z,expirationTime:be,sortIndex:-1},Z>Me?(L.sortIndex=Z,t(m,L),i(g)===null&&L===i(m)&&(w?(B(P),P=-1):w=!0,de(ie,Z-Me))):(L.sortIndex=be,t(g,L),A||E||(A=!0,H||(H=!0,ce()))),L},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(L){var W=S;return function(){var Z=S;S=W;try{return L.apply(this,arguments)}finally{S=Z}}}})(Kf)),Kf}var av;function Z0(){return av||(av=1,Zf.exports=Y0()),Zf.exports}var Qf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function K0(){if(sv)return Mn;sv=1;var o=rh();function t(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function f(g,m,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:g,containerInfo:m,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mn.createPortal=function(g,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return f(g,m,null,_)},Mn.flushSync=function(g){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=m,s.p=_,s.d.f()}},Mn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Mn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Mn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var _=m.as,y=p(_,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:E}):_==="script"&&s.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=p(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Mn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,y=p(_,m.crossOrigin);s.d.L(g,_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(g,m){if(typeof g=="string")if(m){var _=p(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Mn.requestFormReset=function(g){s.d.r(g)},Mn.unstable_batchedUpdates=function(g,m){return g(m)},Mn.useFormState=function(g,m,_){return h.H.useFormState(g,m,_)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.2.7",Mn}var rv;function Q0(){if(rv)return Qf.exports;rv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=K0(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function J0(){if(ov)return wo;ov=1;var o=Z0(),t=rh(),i=Q0();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return g(u),e;if(d===r)return g(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=d;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,r=d;break}if(b===r){v=!0,r=u,a=d;break}b=b.sibling}if(!v){for(b=d.child;b;){if(b===a){v=!0,a=d,r=u;break}if(b===r){v=!0,r=d,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var de=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function U(e){return{current:e}}function ne(e){0>be||(e.current=Me[be],Me[be]=null,be--)}function _e(e,n){be++,Me[be]=e.current,e.current=n}var q=U(null),le=U(null),ye=U(null),Ee=U(null);function He(e,n){switch(_e(ye,n),_e(le,e),_e(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Mg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Mg(n),e=Eg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(q),_e(q,e)}function Fe(){ne(q),ne(le),ne(ye)}function nt(e){e.memoizedState!==null&&_e(Ee,e);var n=q.current,a=Eg(n,e.type);n!==a&&(_e(le,e),_e(q,a))}function Lt(e){le.current===e&&(ne(q),ne(le)),Ee.current===e&&(ne(Ee),bo._currentValue=Z)}var j,Vt;function ut(e){if(j===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);j=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+j+e+Vt}var yt=!1;function Ge(e,n){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(se){var $=se}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(se){$=se}e.call(pe.prototype)}}else{try{throw Error()}catch(se){$=se}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(se){if(se&&$&&typeof se.stack=="string")return[se.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),v=d[0],b=d[1];if(v&&b){var I=v.split(`
`),Q=b.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===Q.length)for(r=I.length-1,u=Q.length-1;1<=r&&0<=u&&I[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==Q[u]){var ue=`
`+I[r].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=r&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return ut("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var et=Object.prototype.hasOwnProperty,O=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,ae=o.unstable_shouldYield,Se=o.unstable_requestPaint,ve=o.unstable_now,xe=o.unstable_getCurrentPriorityLevel,We=o.unstable_ImmediatePriority,De=o.unstable_UserBlockingPriority,Le=o.unstable_NormalPriority,it=o.unstable_LowPriority,Ae=o.unstable_IdlePriority,Oe=o.log,ht=o.unstable_setDisableYieldValue,Ke=null,we=null;function Ye(e){if(typeof Oe=="function"&&ht(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Ke,e)}catch{}}var Ze=Math.clz32?Math.clz32:Re,zt=Math.log,V=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(zt(e)/V|0)|0}var he=256,ge=262144,Ce=4194304;function ke(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~d,r!==0?u=ke(r):(v&=b,v!==0?u=ke(v):a||(a=b&~e,a!==0&&(u=ke(a))))):(b=r&~d,b!==0?u=ke(b):v!==0?u=ke(v):a||(a=r&~e,a!==0&&(u=ke(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function an(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),e}function Bn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xo(e,n,a,r,u,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=v&~a;0<a;){var ue=31-Ze(a),pe=1<<ue;b[ue]=0,I[ue]=-1;var $=Q[ue];if($!==null)for(Q[ue]=null,ue=0;ue<$.length;ue++){var se=$[ue];se!==null&&(se.lane&=-536870913)}a&=~pe}r!==0&&vi(e,r,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~n))}function vi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ze(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Es(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ze(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Or(e,n){var a=n&-n;return a=(a&42)!==0?1:bs(a),(a&(e.suspendedLanes|n))!==0?0:a}function bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function na(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Wg(e.type))}function Fa(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var si=Math.random().toString(36).slice(2),Qt="__reactFiber$"+si,_n="__reactProps$"+si,ia="__reactContainer$"+si,zr="__reactEvents$"+si,R="__reactListeners$"+si,k="__reactHandles$"+si,ee="__reactResources$"+si,te="__reactMarker$"+si;function Y(e){delete e[Qt],delete e[_n],delete e[zr],delete e[R],delete e[k]}function Te(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ia]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ng(e);e!==null;){if(a=e[Qt])return a;e=Ng(e)}return n}e=a,a=e.parentNode}return null}function Ne(e){if(e=e[Qt]||e[ia]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Pe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ze(e){var n=e[ee];return n||(n=e[ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[te]=!0}var Je=new Set,qe={};function ct(e,n){At(e,n),At(e+"Capture",n)}function At(e,n){for(qe[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xn={},xt={};function Ve(e){return et.call(xt,e)?!0:et.call(xn,e)?!1:Ft.test(e)?xt[e]=!0:(xn[e]=!0,!1)}function Xt(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ir(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ht(e){if(!e._valueTracker){var n=yn(e)?"checked":"value";e._valueTracker=Ir(e,n,""+e[n])}}function ri(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=yn(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rn=/[\n"\\]/g;function Sn(e){return e.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Br(e,n,a,r,u,d,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Fc(e,v,sn(n)):a!=null?Fc(e,v,sn(a)):r!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+sn(b):e.removeAttribute("name")}function jr(e,n,a,r,u,d,v,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ht(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ht(e)}function Fc(e,n,a){n==="number"&&aa(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ts(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function vh(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function _h(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ht(e)}function As(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var B_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||B_.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&xh(e,u,r)}else for(var d in n)n.hasOwnProperty(d)&&xh(e,d,n[d])}function Hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return F_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ri(){}var Gc=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,Cs=null;function Sh(e){var n=Ne(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(Br(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[_n]||null;if(!u)throw Error(s(90));Br(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&ri(r)}break e;case"textarea":vh(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ts(e,!!a.multiple,n,!1)}}}var kc=!1;function Mh(e,n,a){if(kc)return e(n,a);kc=!0;try{var r=e(n);return r}finally{if(kc=!1,(Rs!==null||Cs!==null)&&(Ll(),Rs&&(n=Rs,e=Cs,Cs=Rs=null,Sh(n),e)))for(n=0;n<e.length;n++)Sh(e[n])}}function Fr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Ci)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Xc=!1}var sa=null,Wc=null,qo=null;function Eh(){if(qo)return qo;var e,n=Wc,a=n.length,r,u="value"in sa?sa.value:sa.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[d-r];r++);return qo=u.slice(e,1<r?1-r:void 0)}function Yo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function bh(){return!1}function Cn(e){function n(a,r,u,d,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zo:bh,this.isPropagationStopped=bh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=Cn(Ha),Gr=y({},Ha,{view:0,detail:0}),H_=Cn(Gr),qc,Yc,Vr,Qo=y({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(qc=e.screenX-Vr.screenX,Yc=e.screenY-Vr.screenY):Yc=qc=0,Vr=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:Yc}}),Th=Cn(Qo),G_=y({},Qo,{dataTransfer:0}),V_=Cn(G_),k_=y({},Gr,{relatedTarget:0}),Zc=Cn(k_),X_=y({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),W_=Cn(X_),q_=y({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y_=Cn(q_),Z_=y({},Ha,{data:0}),Ah=Cn(Z_),K_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=J_[e])?!!n[e]:!1}function Kc(){return $_}var ex=y({},Gr,{key:function(e){if(e.key){var n=K_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tx=Cn(ex),nx=y({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Cn(nx),ix=y({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),ax=Cn(ix),sx=y({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=Cn(sx),ox=y({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=Cn(ox),cx=y({},Ha,{newState:0,oldState:0}),ux=Cn(cx),fx=[9,13,27,32],Qc=Ci&&"CompositionEvent"in window,kr=null;Ci&&"documentMode"in document&&(kr=document.documentMode);var dx=Ci&&"TextEvent"in window&&!kr,Ch=Ci&&(!Qc||kr&&8<kr&&11>=kr),wh=" ",Nh=!1;function Dh(e,n){switch(e){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function hx(e,n){switch(e){case"compositionend":return Uh(n);case"keypress":return n.which!==32?null:(Nh=!0,wh);case"textInput":return e=n.data,e===wh&&Nh?null:e;default:return null}}function px(e,n){if(ws)return e==="compositionend"||!Qc&&Dh(e,n)?(e=Eh(),qo=Wc=sa=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ch&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mx[e.type]:n==="textarea"}function Oh(e,n,a,r){Rs?Cs?Cs.push(r):Cs=[r]:Rs=r,n=Fl(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Xr=null,Wr=null;function gx(e){gg(e,0)}function Jo(e){var n=Pe(e);if(ri(n))return e}function Ph(e,n){if(e==="change")return n}var zh=!1;if(Ci){var Jc;if(Ci){var $c="oninput"in document;if(!$c){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),$c=typeof Ih.oninput=="function"}Jc=$c}else Jc=!1;zh=Jc&&(!document.documentMode||9<document.documentMode)}function Bh(){Xr&&(Xr.detachEvent("onpropertychange",jh),Wr=Xr=null)}function jh(e){if(e.propertyName==="value"&&Jo(Wr)){var n=[];Oh(n,Wr,e,Vc(e)),Mh(gx,n)}}function vx(e,n,a){e==="focusin"?(Bh(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",jh)):e==="focusout"&&Bh()}function _x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(Wr)}function xx(e,n){if(e==="click")return Jo(n)}function yx(e,n){if(e==="input"||e==="change")return Jo(n)}function Sx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Sx;function qr(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!et.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function Fh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hh(e,n){var a=Fh(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fh(a)}}function Gh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=aa(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=aa(e.document)}return n}function eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Mx=Ci&&"documentMode"in document&&11>=document.documentMode,Ns=null,tu=null,Yr=null,nu=!1;function kh(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Ns==null||Ns!==aa(r)||(r=Ns,"selectionStart"in r&&eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&qr(Yr,r)||(Yr=r,r=Fl(tu,"onSelect"),0<r.length&&(n=new Ko("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ns)))}function Ga(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},iu={},Xh={};Ci&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Va(e){if(iu[e])return iu[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xh)return iu[e]=n[a];return e}var Wh=Va("animationend"),qh=Va("animationiteration"),Yh=Va("animationstart"),Ex=Va("transitionrun"),bx=Va("transitionstart"),Tx=Va("transitioncancel"),Zh=Va("transitionend"),Kh=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function oi(e,n){Kh.set(e,n),ct(n,[e])}var $o=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Us=0,su=0;function el(){for(var e=Us,n=su=Us=0;n<e;){var a=Zn[n];Zn[n++]=null;var r=Zn[n];Zn[n++]=null;var u=Zn[n];Zn[n++]=null;var d=Zn[n];if(Zn[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}d!==0&&Qh(a,u,d)}}function tl(e,n,a,r){Zn[Us++]=e,Zn[Us++]=n,Zn[Us++]=a,Zn[Us++]=r,su|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ru(e,n,a,r){return tl(e,n,a,r),nl(e)}function ka(e,n){return tl(e,null,null,n),nl(e)}function Qh(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,r=d.alternate,r!==null&&(r.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ze(a),e=d.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),d):null}function nl(e){if(50<vo)throw vo=0,gf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ls={};function Ax(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,n,a,r){return new Ax(e,n,a,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wi(e,n){var a=e.alternate;return a===null?(a=Fn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function il(e,n,a,r,u,d){var v=0;if(r=e,typeof e=="function")ou(e)&&(v=1);else if(typeof e=="string")v=D0(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Fn(31,a,n,u),e.elementType=D,e.lanes=d,e;case w:return Xa(a.children,u,d,n);case M:v=8,u|=24;break;case x:return e=Fn(12,a,n,u|2),e.elementType=x,e.lanes=d,e;case ie:return e=Fn(13,a,n,u),e.elementType=ie,e.lanes=d,e;case H:return e=Fn(19,a,n,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break e;case B:v=9;break e;case z:v=11;break e;case P:v=14;break e;case J:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Fn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=d,n}function Xa(e,n,a,r){return e=Fn(7,e,r,n),e.lanes=a,e}function lu(e,n,a){return e=Fn(6,e,null,n),e.lanes=a,e}function $h(e){var n=Fn(18,null,null,0);return n.stateNode=e,n}function cu(e,n,a){return n=Fn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ep=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},ep.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var Os=[],Ps=0,al=null,Zr=0,Qn=[],Jn=0,ra=null,_i=1,xi="";function Ni(e,n){Os[Ps++]=Zr,Os[Ps++]=al,al=e,Zr=n}function tp(e,n,a){Qn[Jn++]=_i,Qn[Jn++]=xi,Qn[Jn++]=ra,ra=e;var r=_i;e=xi;var u=32-Ze(r)-1;r&=~(1<<u),a+=1;var d=32-Ze(n)+u;if(30<d){var v=u-u%5;d=(r&(1<<v)-1).toString(32),r>>=v,u-=v,_i=1<<32-Ze(n)+u|a<<u|r,xi=d+e}else _i=1<<d|a<<u|r,xi=e}function uu(e){e.return!==null&&(Ni(e,1),tp(e,1,0))}function fu(e){for(;e===al;)al=Os[--Ps],Os[Ps]=null,Zr=Os[--Ps],Os[Ps]=null;for(;e===ra;)ra=Qn[--Jn],Qn[Jn]=null,xi=Qn[--Jn],Qn[Jn]=null,_i=Qn[--Jn],Qn[Jn]=null}function np(e,n){Qn[Jn++]=_i,Qn[Jn++]=xi,Qn[Jn++]=ra,_i=n.id,xi=n.overflow,ra=e}var hn=null,It=null,vt=!1,oa=null,$n=!1,du=Error(s(519));function la(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(Kn(n,e)),du}function ip(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Qt]=e,n[_n]=r,a){case"dialog":dt("cancel",n),dt("close",n);break;case"iframe":case"object":case"embed":dt("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)dt(xo[a],n);break;case"source":dt("error",n);break;case"img":case"image":case"link":dt("error",n),dt("load",n);break;case"details":dt("toggle",n);break;case"input":dt("invalid",n),jr(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":dt("invalid",n);break;case"textarea":dt("invalid",n),_h(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||yg(n.textContent,a)?(r.popover!=null&&(dt("beforetoggle",n),dt("toggle",n)),r.onScroll!=null&&dt("scroll",n),r.onScrollEnd!=null&&dt("scrollend",n),r.onClick!=null&&(n.onclick=Ri),n=!0):n=!1,n||la(e,!0)}function ap(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:hn=hn.return}}function zs(e){if(e!==hn)return!1;if(!vt)return ap(e),vt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Df(e.type,e.memoizedProps)),a=!a),a&&It&&la(e),ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));It=wg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));It=wg(e)}else n===27?(n=It,Ma(e.type)?(e=zf,zf=null,It=e):It=n):It=hn?ti(e.stateNode.nextSibling):null;return!0}function Wa(){It=hn=null,vt=!1}function hu(){var e=oa;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),oa=null),e}function Kr(e){oa===null?oa=[e]:oa.push(e)}var pu=U(null),qa=null,Di=null;function ca(e,n,a){_e(pu,n._currentValue),n._currentValue=a}function Ui(e){e._currentValue=pu.current,ne(pu)}function mu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function gu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=u;for(var I=0;I<n.length;I++)if(b.context===n[I]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),mu(d.return,a,e),r||(v=null);break e}d=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),mu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Is(e,n,a,r){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;jn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===Ee.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}u=u.return}e!==null&&gu(n,e,a,r),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){qa=e,Di=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return sp(qa,e)}function rl(e,n){return qa===null&&Ya(e),sp(e,n)}function sp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Di===null){if(e===null)throw Error(s(308));Di=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Di=Di.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Cx=o.unstable_scheduleCallback,wx=o.unstable_NormalPriority,Jt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new Rx,data:new Map,refCount:0}}function Qr(e){e.refCount--,e.refCount===0&&Cx(wx,function(){e.controller.abort()})}var Jr=null,_u=0,Bs=0,js=null;function Nx(e,n){if(Jr===null){var a=Jr=[];_u=0,Bs=Mf(),js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return _u++,n.then(rp,rp),n}function rp(){if(--_u===0&&Jr!==null){js!==null&&(js.status="fulfilled");var e=Jr;Jr=null,Bs=0,js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Dx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var op=L.S;L.S=function(e,n){km=ve(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(e,n),op!==null&&op(e,n)};var Za=U(null);function xu(){var e=Za.current;return e!==null?e:Ot.pooledCache}function ol(e,n){n===null?_e(Za,Za.current):_e(Za,n.pool)}function lp(){var e=xu();return e===null?null:{parent:Jt._currentValue,pool:e}}var Fs=Error(s(460)),yu=Error(s(474)),ll=Error(s(542)),cl={then:function(){}};function cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ri,Ri),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e;default:if(typeof n.status=="string")n.then(Ri,Ri);else{if(e=Ot,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e}throw Qa=n,Fs}}function Ka(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,Fs):a}}var Qa=null;function fp(){if(Qa===null)throw Error(s(459));var e=Qa;return Qa=null,e}function dp(e){if(e===Fs||e===ll)throw Error(s(483))}var Hs=null,$r=0;function ul(e){var n=$r;return $r+=1,Hs===null&&(Hs=[]),up(Hs,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function hp(e){function n(X,F){if(e){var K=X.deletions;K===null?(X.deletions=[F],X.flags|=16):K.push(F)}}function a(X,F){if(!e)return null;for(;F!==null;)n(X,F),F=F.sibling;return null}function r(X){for(var F=new Map;X!==null;)X.key!==null?F.set(X.key,X):F.set(X.index,X),X=X.sibling;return F}function u(X,F){return X=wi(X,F),X.index=0,X.sibling=null,X}function d(X,F,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<F?(X.flags|=67108866,F):K):(X.flags|=67108866,F)):(X.flags|=1048576,F)}function v(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function b(X,F,K,fe){return F===null||F.tag!==6?(F=lu(K,X.mode,fe),F.return=X,F):(F=u(F,K),F.return=X,F)}function I(X,F,K,fe){var Xe=K.type;return Xe===w?ue(X,F,K.props.children,fe,K.key):F!==null&&(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ka(Xe)===F.type)?(F=u(F,K.props),eo(F,K),F.return=X,F):(F=il(K.type,K.key,K.props,null,X.mode,fe),eo(F,K),F.return=X,F)}function Q(X,F,K,fe){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=cu(K,X.mode,fe),F.return=X,F):(F=u(F,K.children||[]),F.return=X,F)}function ue(X,F,K,fe,Xe){return F===null||F.tag!==7?(F=Xa(K,X.mode,fe,Xe),F.return=X,F):(F=u(F,K),F.return=X,F)}function pe(X,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=lu(""+F,X.mode,K),F.return=X,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case E:return K=il(F.type,F.key,F.props,null,X.mode,K),eo(K,F),K.return=X,K;case A:return F=cu(F,X.mode,K),F.return=X,F;case J:return F=Ka(F),pe(X,F,K)}if(de(F)||ce(F))return F=Xa(F,X.mode,K,null),F.return=X,F;if(typeof F.then=="function")return pe(X,ul(F),K);if(F.$$typeof===N)return pe(X,rl(X,F),K);fl(X,F)}return null}function $(X,F,K,fe){var Xe=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xe!==null?null:b(X,F,""+K,fe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Xe?I(X,F,K,fe):null;case A:return K.key===Xe?Q(X,F,K,fe):null;case J:return K=Ka(K),$(X,F,K,fe)}if(de(K)||ce(K))return Xe!==null?null:ue(X,F,K,fe,null);if(typeof K.then=="function")return $(X,F,ul(K),fe);if(K.$$typeof===N)return $(X,F,rl(X,K),fe);fl(X,K)}return null}function se(X,F,K,fe,Xe){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return X=X.get(K)||null,b(F,X,""+fe,Xe);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case E:return X=X.get(fe.key===null?K:fe.key)||null,I(F,X,fe,Xe);case A:return X=X.get(fe.key===null?K:fe.key)||null,Q(F,X,fe,Xe);case J:return fe=Ka(fe),se(X,F,K,fe,Xe)}if(de(fe)||ce(fe))return X=X.get(K)||null,ue(F,X,fe,Xe,null);if(typeof fe.then=="function")return se(X,F,K,ul(fe),Xe);if(fe.$$typeof===N)return se(X,F,K,rl(F,fe),Xe);fl(F,fe)}return null}function Be(X,F,K,fe){for(var Xe=null,St=null,je=F,st=F=0,mt=null;je!==null&&st<K.length;st++){je.index>st?(mt=je,je=null):mt=je.sibling;var Mt=$(X,je,K[st],fe);if(Mt===null){je===null&&(je=mt);break}e&&je&&Mt.alternate===null&&n(X,je),F=d(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt,je=mt}if(st===K.length)return a(X,je),vt&&Ni(X,st),Xe;if(je===null){for(;st<K.length;st++)je=pe(X,K[st],fe),je!==null&&(F=d(je,F,st),St===null?Xe=je:St.sibling=je,St=je);return vt&&Ni(X,st),Xe}for(je=r(je);st<K.length;st++)mt=se(je,X,st,K[st],fe),mt!==null&&(e&&mt.alternate!==null&&je.delete(mt.key===null?st:mt.key),F=d(mt,F,st),St===null?Xe=mt:St.sibling=mt,St=mt);return e&&je.forEach(function(Ra){return n(X,Ra)}),vt&&Ni(X,st),Xe}function Qe(X,F,K,fe){if(K==null)throw Error(s(151));for(var Xe=null,St=null,je=F,st=F=0,mt=null,Mt=K.next();je!==null&&!Mt.done;st++,Mt=K.next()){je.index>st?(mt=je,je=null):mt=je.sibling;var Ra=$(X,je,Mt.value,fe);if(Ra===null){je===null&&(je=mt);break}e&&je&&Ra.alternate===null&&n(X,je),F=d(Ra,F,st),St===null?Xe=Ra:St.sibling=Ra,St=Ra,je=mt}if(Mt.done)return a(X,je),vt&&Ni(X,st),Xe;if(je===null){for(;!Mt.done;st++,Mt=K.next())Mt=pe(X,Mt.value,fe),Mt!==null&&(F=d(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return vt&&Ni(X,st),Xe}for(je=r(je);!Mt.done;st++,Mt=K.next())Mt=se(je,X,st,Mt.value,fe),Mt!==null&&(e&&Mt.alternate!==null&&je.delete(Mt.key===null?st:Mt.key),F=d(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return e&&je.forEach(function(G0){return n(X,G0)}),vt&&Ni(X,st),Xe}function Ut(X,F,K,fe){if(typeof K=="object"&&K!==null&&K.type===w&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:e:{for(var Xe=K.key;F!==null;){if(F.key===Xe){if(Xe=K.type,Xe===w){if(F.tag===7){a(X,F.sibling),fe=u(F,K.props.children),fe.return=X,X=fe;break e}}else if(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ka(Xe)===F.type){a(X,F.sibling),fe=u(F,K.props),eo(fe,K),fe.return=X,X=fe;break e}a(X,F);break}else n(X,F);F=F.sibling}K.type===w?(fe=Xa(K.props.children,X.mode,fe,K.key),fe.return=X,X=fe):(fe=il(K.type,K.key,K.props,null,X.mode,fe),eo(fe,K),fe.return=X,X=fe)}return v(X);case A:e:{for(Xe=K.key;F!==null;){if(F.key===Xe)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(X,F.sibling),fe=u(F,K.children||[]),fe.return=X,X=fe;break e}else{a(X,F);break}else n(X,F);F=F.sibling}fe=cu(K,X.mode,fe),fe.return=X,X=fe}return v(X);case J:return K=Ka(K),Ut(X,F,K,fe)}if(de(K))return Be(X,F,K,fe);if(ce(K)){if(Xe=ce(K),typeof Xe!="function")throw Error(s(150));return K=Xe.call(K),Qe(X,F,K,fe)}if(typeof K.then=="function")return Ut(X,F,ul(K),fe);if(K.$$typeof===N)return Ut(X,F,rl(X,K),fe);fl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(X,F.sibling),fe=u(F,K),fe.return=X,X=fe):(a(X,F),fe=lu(K,X.mode,fe),fe.return=X,X=fe),v(X)):a(X,F)}return function(X,F,K,fe){try{$r=0;var Xe=Ut(X,F,K,fe);return Hs=null,Xe}catch(je){if(je===Fs||je===ll)throw je;var St=Fn(29,je,null,X.mode);return St.lanes=fe,St.return=X,St}finally{}}}var Ja=hp(!0),pp=hp(!1),ua=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Et&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=nl(e),Qh(e,null,a),n}return tl(e,r,n,a),nl(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Es(e,a)}}function Eu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function no(){if(bu){var e=js;if(e!==null)throw e}}function io(e,n,a,r){bu=!1;var u=e.updateQueue;ua=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,Q=I.next;I.next=null,v===null?d=Q:v.next=Q,v=I;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,b=ue.lastBaseUpdate,b!==v&&(b===null?ue.firstBaseUpdate=Q:b.next=Q,ue.lastBaseUpdate=I))}if(d!==null){var pe=u.baseState;v=0,ue=Q=I=null,b=d;do{var $=b.lane&-536870913,se=$!==b.lane;if(se?(pt&$)===$:(r&$)===$){$!==0&&$===Bs&&(bu=!0),ue!==null&&(ue=ue.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Be=e,Qe=b;$=n;var Ut=a;switch(Qe.tag){case 1:if(Be=Qe.payload,typeof Be=="function"){pe=Be.call(Ut,pe,$);break e}pe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Qe.payload,$=typeof Be=="function"?Be.call(Ut,pe,$):Be,$==null)break e;pe=y({},pe,$);break e;case 2:ua=!0}}$=b.callback,$!==null&&(e.flags|=64,se&&(e.flags|=8192),se=u.callbacks,se===null?u.callbacks=[$]:se.push($))}else se={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ue===null?(Q=ue=se,I=pe):ue=ue.next=se,v|=$;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;se=b,b=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ue===null&&(I=pe),u.baseState=I,u.firstBaseUpdate=Q,u.lastBaseUpdate=ue,d===null&&(u.shared.lanes=0),va|=v,e.lanes=v,e.memoizedState=pe}}function mp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mp(a[e],n)}var Gs=U(null),dl=U(0);function vp(e,n){e=Hi,_e(dl,e),_e(Gs,n),Hi=e|n.baseLanes}function Tu(){_e(dl,Hi),_e(Gs,Gs.current)}function Au(){Hi=dl.current,ne(Gs),ne(dl)}var Hn=U(null),ei=null;function ha(e){var n=e.alternate;_e(Zt,Zt.current&1),_e(Hn,e),ei===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(ei=e)}function Ru(e){_e(Zt,Zt.current),_e(Hn,e),ei===null&&(ei=e)}function _p(e){e.tag===22?(_e(Zt,Zt.current),_e(Hn,e),ei===null&&(ei=e)):pa()}function pa(){_e(Zt,Zt.current),_e(Hn,Hn.current)}function Gn(e){ne(Hn),ei===e&&(ei=null),ne(Zt)}var Zt=U(0);function hl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Li=0,at=null,Nt=null,$t=null,pl=!1,Vs=!1,$a=!1,ml=0,ao=0,ks=null,Ux=0;function Wt(){throw Error(s(321))}function Cu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function wu(e,n,a,r,u,d){return Li=d,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?tm:ku,$a=!1,d=a(r,u),$a=!1,Vs&&(d=yp(n,a,r,u)),xp(e),d}function xp(e){L.H=oo;var n=Nt!==null&&Nt.next!==null;if(Li=0,$t=Nt=at=null,pl=!1,ao=0,ks=null,n)throw Error(s(300));e===null||en||(e=e.dependencies,e!==null&&sl(e)&&(en=!0))}function yp(e,n,a,r){at=e;var u=0;do{if(Vs&&(ks=null),ao=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,$t=Nt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=nm,d=n(a,r)}while(Vs);return d}function Lx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Nt!==null?Nt.memoizedState:null)!==e&&(at.flags|=1024),n}function Nu(){var e=ml!==0;return ml=0,e}function Du(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Uu(e){if(pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}pl=!1}Li=0,$t=Nt=at=null,Vs=!1,ao=ml=0,ks=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?at.memoizedState=$t=e:$t=$t.next=e,$t}function Kt(){if(Nt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Nt.next;var n=$t===null?at.memoizedState:$t.next;if(n!==null)$t=n,Nt=e;else{if(e===null)throw at.alternate===null?Error(s(467)):Error(s(310));Nt=e,e={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},$t===null?at.memoizedState=$t=e:$t=$t.next=e}return $t}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ao;return ao+=1,ks===null&&(ks=[]),e=up(ks,e,n),n=at,($t===null?n.memoizedState:$t.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?tm:ku),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===N)return pn(e)}throw Error(s(438,String(e)))}function Lu(e){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=at.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gl(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Oi(e,n){return typeof n=="function"?n(e):n}function _l(e){var n=Kt();return Ou(n,Nt,e)}function Ou(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,d=r.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}n.baseQueue=u=d,r.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var b=v=null,I=null,Q=n,ue=!1;do{var pe=Q.lane&-536870913;if(pe!==Q.lane?(pt&pe)===pe:(Li&pe)===pe){var $=Q.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pe===Bs&&(ue=!0);else if((Li&$)===$){Q=Q.next,$===Bs&&(ue=!0);continue}else pe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=pe,v=d):I=I.next=pe,at.lanes|=$,va|=$;pe=Q.action,$a&&a(d,pe),d=Q.hasEagerState?Q.eagerState:a(d,pe)}else $={lane:pe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=$,v=d):I=I.next=$,at.lanes|=pe,va|=pe;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?v=d:I.next=b,!jn(d,e.memoizedState)&&(en=!0,ue&&(a=js,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=I,r.lastRenderedState=d}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Pu(e){var n=Kt(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do d=e(d,v.action),v=v.next;while(v!==u);jn(d,n.memoizedState)||(en=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,r]}function Sp(e,n,a){var r=at,u=Kt(),d=vt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!jn((Nt||u).memoizedState,a);if(v&&(u.memoizedState=a,en=!0),u=u.queue,Bu(bp.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||$t!==null&&$t.memoizedState.tag&1){if(r.flags|=2048,Xs(9,{destroy:void 0},Ep.bind(null,r,u,a,n),null),Ot===null)throw Error(s(349));d||(Li&127)!==0||Mp(r,n,a)}return a}function Mp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=gl(),at.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ep(e,n,a,r){n.value=a,n.getSnapshot=r,Tp(n)&&Ap(e)}function bp(e,n,a){return a(function(){Tp(n)&&Ap(e)})}function Tp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function Ap(e){var n=ka(e,2);n!==null&&Ln(n,e,2)}function zu(e){var n=Tn();if(typeof e=="function"){var a=e;if(e=a(),$a){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},n}function Rp(e,n,a,r){return e.baseState=a,Ou(e,Nt,typeof r=="function"?r:Oi)}function Ox(e,n,a,r,u){if(Sl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};L.T!==null?a(!0):d.isTransition=!1,r(d),a=n.pending,a===null?(d.next=n.pending=d,Cp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Cp(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var d=L.T,v={};L.T=v;try{var b=a(u,r),I=L.S;I!==null&&I(v,b),wp(e,n,b)}catch(Q){Iu(e,n,Q)}finally{d!==null&&v.types!==null&&(d.types=v.types),L.T=d}}else try{d=a(u,r),wp(e,n,d)}catch(Q){Iu(e,n,Q)}}function wp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Np(e,n,r)},function(r){return Iu(e,n,r)}):Np(e,n,a)}function Np(e,n,a){n.status="fulfilled",n.value=a,Dp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cp(e,a)))}function Iu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Dp(n),n=n.next;while(n!==r)}e.action=null}function Dp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Up(e,n){return n}function Lp(e,n){if(vt){var a=Ot.formState;if(a!==null){e:{var r=at;if(vt){if(It){t:{for(var u=It,d=$n;u.nodeType!==8;){if(!d){u=null;break t}if(u=ti(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){It=ti(u.nextSibling),r=u.data==="F!";break e}}la(r)}r=!1}r&&(n=a[0])}}return a=Tn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:n},a.queue=r,a=Jp.bind(null,at,r),r.dispatch=a,r=zu(!1),d=Vu.bind(null,at,!1,r.queue),r=Tn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Ox.bind(null,at,u,d,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Op(e){var n=Kt();return Pp(n,Nt,e)}function Pp(e,n,a){if(n=Ou(e,n,Up)[0],e=_l(Oi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(v){throw v===Fs?ll:v}else r=n;n=Kt();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(at.flags|=2048,Xs(9,{destroy:void 0},Px.bind(null,u,a),null)),[r,d,e]}function Px(e,n){e.action=n}function zp(e){var n=Kt(),a=Nt;if(a!==null)return Pp(n,a,e);Kt(),n=n.memoizedState,a=Kt();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Xs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=at.updateQueue,n===null&&(n=gl(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Ip(){return Kt().memoizedState}function xl(e,n,a,r){var u=Tn();at.flags|=e,u.memoizedState=Xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function yl(e,n,a,r){var u=Kt();r=r===void 0?null:r;var d=u.memoizedState.inst;Nt!==null&&r!==null&&Cu(r,Nt.memoizedState.deps)?u.memoizedState=Xs(n,d,a,r):(at.flags|=e,u.memoizedState=Xs(1|n,d,a,r))}function Bp(e,n){xl(8390656,8,e,n)}function Bu(e,n){yl(2048,8,e,n)}function zx(e){at.flags|=4;var n=at.updateQueue;if(n===null)n=gl(),at.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function jp(e){var n=Kt().memoizedState;return zx({ref:n,nextImpl:e}),function(){if((Et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Fp(e,n){return yl(4,2,e,n)}function Hp(e,n){return yl(4,4,e,n)}function Gp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vp(e,n,a){a=a!=null?a.concat([e]):null,yl(4,4,Gp.bind(null,n,e),a)}function ju(){}function kp(e,n){var a=Kt();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Cu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Xp(e,n){var a=Kt();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Cu(n,r[1]))return r[0];if(r=e(),$a){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[r,n],r}function Fu(e,n,a){return a===void 0||(Li&1073741824)!==0&&(pt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Wm(),at.lanes|=e,va|=e,a)}function Wp(e,n,a,r){return jn(a,n)?a:Gs.current!==null?(e=Fu(e,a,r),jn(e,n)||(en=!0),e):(Li&42)===0||(Li&1073741824)!==0&&(pt&261930)===0?(en=!0,e.memoizedState=a):(e=Wm(),at.lanes|=e,va|=e,n)}function qp(e,n,a,r,u){var d=W.p;W.p=d!==0&&8>d?d:8;var v=L.T,b={};L.T=b,Vu(e,!1,n,a);try{var I=u(),Q=L.S;if(Q!==null&&Q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ue=Dx(I,r);ro(e,n,ue,Xn(e))}else ro(e,n,r,Xn(e))}catch(pe){ro(e,n,{then:function(){},status:"rejected",reason:pe},Xn())}finally{W.p=d,v!==null&&b.types!==null&&(v.types=b.types),L.T=v}}function Ix(){}function Hu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Yp(e).queue;qp(e,u,n,Z,a===null?Ix:function(){return Zp(e),a(r)})}function Yp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zp(e){var n=Yp(e);n.next===null&&(n=e.alternate.memoizedState),ro(e,n.next.queue,{},Xn())}function Gu(){return pn(bo)}function Kp(){return Kt().memoizedState}function Qp(){return Kt().memoizedState}function Bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();e=fa(a);var r=da(n,e,a);r!==null&&(Ln(r,n,a),to(r,n,a)),n={cache:vu()},e.payload=n;return}n=n.return}}function jx(e,n,a){var r=Xn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(e)?$p(n,a):(a=ru(e,n,a,r),a!==null&&(Ln(a,e,r),em(a,n,r)))}function Jp(e,n,a){var r=Xn();ro(e,n,a,r)}function ro(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))$p(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,b=d(v,a);if(u.hasEagerState=!0,u.eagerState=b,jn(b,v))return tl(e,n,u,0),Ot===null&&el(),!1}catch{}finally{}if(a=ru(e,n,u,r),a!==null)return Ln(a,e,r),em(a,n,r),!0}return!1}function Vu(e,n,a,r){if(r={lane:2,revertLane:Mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(n)throw Error(s(479))}else n=ru(e,a,r,2),n!==null&&Ln(n,e,2)}function Sl(e){var n=e.alternate;return e===at||n!==null&&n===at}function $p(e,n){Vs=pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function em(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Es(e,a)}}var oo={readContext:pn,use:vl,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt};oo.useEffectEvent=Wt;var tm={readContext:pn,use:vl,useCallback:function(e,n){return Tn().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Bp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xl(4194308,4,Gp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xl(4194308,4,e,n)},useInsertionEffect:function(e,n){xl(4,2,e,n)},useMemo:function(e,n){var a=Tn();n=n===void 0?null:n;var r=e();if($a){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Tn();if(a!==void 0){var u=a(n);if($a){Ye(!0);try{a(n)}finally{Ye(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=jx.bind(null,at,e),[r.memoizedState,e]},useRef:function(e){var n=Tn();return e={current:e},n.memoizedState=e},useState:function(e){e=zu(e);var n=e.queue,a=Jp.bind(null,at,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=Tn();return Fu(a,e,n)},useTransition:function(){var e=zu(!1);return e=qp.bind(null,at,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=at,u=Tn();if(vt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ot===null)throw Error(s(349));(pt&127)!==0||Mp(r,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Bp(bp.bind(null,r,d,e),[e]),r.flags|=2048,Xs(9,{destroy:void 0},Ep.bind(null,r,d,a,n),null),a},useId:function(){var e=Tn(),n=Ot.identifierPrefix;if(vt){var a=xi,r=_i;a=(r&~(1<<32-Ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ux++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Gu,useFormState:Lp,useActionState:Lp,useOptimistic:function(e){var n=Tn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,at,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lu,useCacheRefresh:function(){return Tn().memoizedState=Bx.bind(null,at)},useEffectEvent:function(e){var n=Tn(),a={impl:e};return n.memoizedState=a,function(){if((Et&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ku={readContext:pn,use:vl,useCallback:kp,useContext:pn,useEffect:Bu,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:_l,useRef:Ip,useState:function(){return _l(Oi)},useDebugValue:ju,useDeferredValue:function(e,n){var a=Kt();return Wp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=_l(Oi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Sp,useId:Kp,useHostTransitionStatus:Gu,useFormState:Op,useActionState:Op,useOptimistic:function(e,n){var a=Kt();return Rp(a,Nt,e,n)},useMemoCache:Lu,useCacheRefresh:Qp};ku.useEffectEvent=jp;var nm={readContext:pn,use:vl,useCallback:kp,useContext:pn,useEffect:Bu,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:Pu,useRef:Ip,useState:function(){return Pu(Oi)},useDebugValue:ju,useDeferredValue:function(e,n){var a=Kt();return Nt===null?Fu(a,e,n):Wp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=Pu(Oi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Sp,useId:Kp,useHostTransitionStatus:Gu,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var a=Kt();return Nt!==null?Rp(a,Nt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:Qp};nm.useEffectEvent=jp;function Xu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Xn(),u=fa(r);u.payload=n,a!=null&&(u.callback=a),n=da(e,u,r),n!==null&&(Ln(n,e,r),to(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Xn(),u=fa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(e,u,r),n!==null&&(Ln(n,e,r),to(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xn(),r=fa(a);r.tag=2,n!=null&&(r.callback=n),n=da(e,r,a),n!==null&&(Ln(n,e,a),to(n,e,a))}};function im(e,n,a,r,u,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,v):n.prototype&&n.prototype.isPureReactComponent?!qr(a,r)||!qr(u,d):!0}function am(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Wu.enqueueReplaceState(n,n.state,null)}function es(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function sm(e){$o(e)}function rm(e){console.error(e)}function om(e){$o(e)}function Ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function lm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qu(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(e,n)},a}function cm(e){return e=fa(e),e.tag=3,e}function um(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;e.payload=function(){return u(d)},e.callback=function(){lm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){lm(n,a,r),typeof u!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Fx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,u,!0),a=Hn.current,a!==null){switch(a.tag){case 31:case 13:return ei===null?Ol():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),xf(e,r,u)),!1;case 22:return a.flags|=65536,r===cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),xf(e,r,u)),!1}throw Error(s(435,a.tag))}return xf(e,r,u),Ol(),!1}if(vt)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==du&&(e=Error(s(422),{cause:r}),Kr(Kn(e,a)))):(r!==du&&(n=Error(s(423),{cause:r}),Kr(Kn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Kn(r,a),u=qu(e.stateNode,r,u),Eu(e,u),qt!==4&&(qt=2)),!1;var d=Error(s(520),{cause:r});if(d=Kn(d,a),go===null?go=[d]:go.push(d),qt!==4&&(qt=2),n===null)return!0;r=Kn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=qu(a.stateNode,r,e),Eu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(_a===null||!_a.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cm(u),um(u,e,a,r),Eu(a,u),!1}a=a.return}while(a!==null);return!1}var Yu=Error(s(461)),en=!1;function mn(e,n,a,r){n.child=e===null?pp(n,null,a,r):Ja(n,e.child,a,r)}function fm(e,n,a,r,u){a=a.render;var d=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return Ya(n),r=wu(e,n,a,v,d,u),b=Nu(),e!==null&&!en?(Du(e,n,u),Pi(e,n,u)):(vt&&b&&uu(n),n.flags|=1,mn(e,n,r,u),n.child)}function dm(e,n,a,r,u){if(e===null){var d=a.type;return typeof d=="function"&&!ou(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,hm(e,n,d,r,u)):(e=il(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!nf(e,u)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(v,r)&&e.ref===n.ref)return Pi(e,n,u)}return n.flags|=1,e=wi(d,r),e.ref=n.ref,e.return=n,n.child=e}function hm(e,n,a,r,u){if(e!==null){var d=e.memoizedProps;if(qr(d,r)&&e.ref===n.ref)if(en=!1,n.pendingProps=r=d,nf(e,u))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,Pi(e,n,u)}return Zu(e,n,a,r,u)}function pm(e,n,a,r){var u=r.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~d}else r=0,n.child=null;return mm(e,n,d,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(n,d!==null?d.cachePool:null),d!==null?vp(n,d):Tu(),_p(n);else return r=n.lanes=536870912,mm(e,n,d!==null?d.baseLanes|a:a,a,r)}else d!==null?(ol(n,d.cachePool),vp(n,d),pa(),n.memoizedState=null):(e!==null&&ol(n,null),Tu(),pa());return mn(e,n,u,a),n.child}function lo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mm(e,n,a,r,u){var d=xu();return d=d===null?null:{parent:Jt._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&ol(n,null),Tu(),_p(n),e!==null&&Is(e,n,r,!0),n.childLanes=u,null}function El(e,n){return n=Tl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function gm(e,n,a){return Ja(n,e.child,null,a),e=El(n,n.pendingProps),e.flags|=2,Gn(n),n.memoizedState=null,e}function Hx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(vt){if(r.mode==="hidden")return e=El(n,r),n.lanes=536870912,lo(null,e);if(Ru(n),(e=It)?(e=Cg(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ra!==null?{id:_i,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=$h(e),a.return=n,n.child=a,hn=n,It=null)):e=null,e===null)throw la(n);return n.lanes=536870912,null}return El(n,r)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(Ru(n),u)if(n.flags&256)n.flags&=-257,n=gm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(en||Is(e,n,a,!1),u=(a&e.childLanes)!==0,en||u){if(r=Ot,r!==null&&(v=Or(r,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,ka(e,v),Ln(r,e,v),Yu;Ol(),n=gm(e,n,a)}else e=d.treeContext,It=ti(v.nextSibling),hn=n,vt=!0,oa=null,$n=!1,e!==null&&np(n,e),n=El(n,r),n.flags|=4096;return n}return e=wi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Zu(e,n,a,r,u){return Ya(n),a=wu(e,n,a,r,void 0,u),r=Nu(),e!==null&&!en?(Du(e,n,u),Pi(e,n,u)):(vt&&r&&uu(n),n.flags|=1,mn(e,n,a,u),n.child)}function vm(e,n,a,r,u,d){return Ya(n),n.updateQueue=null,a=yp(n,r,a,u),xp(e),r=Nu(),e!==null&&!en?(Du(e,n,d),Pi(e,n,d)):(vt&&r&&uu(n),n.flags|=1,mn(e,n,a,d),n.child)}function _m(e,n,a,r,u){if(Ya(n),n.stateNode===null){var d=Ls,v=a.contextType;typeof v=="object"&&v!==null&&(d=pn(v)),d=new a(r,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Wu,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=r,d.state=n.memoizedState,d.refs={},Su(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?pn(v):Ls,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Xu(n,a,v,r),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Wu.enqueueReplaceState(d,d.state,null),io(n,r,d,u),no(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,I=es(a,b);d.props=I;var Q=d.context,ue=a.contextType;v=Ls,typeof ue=="object"&&ue!==null&&(v=pn(ue));var pe=a.getDerivedStateFromProps;ue=typeof pe=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ue||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||Q!==v)&&am(n,d,r,v),ua=!1;var $=n.memoizedState;d.state=$,io(n,r,d,u),no(),Q=n.memoizedState,b||$!==Q||ua?(typeof pe=="function"&&(Xu(n,a,pe,r),Q=n.memoizedState),(I=ua||im(n,a,I,r,$,Q,v))?(ue||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),d.props=r,d.state=Q,d.context=v,r=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{d=n.stateNode,Mu(e,n),v=n.memoizedProps,ue=es(a,v),d.props=ue,pe=n.pendingProps,$=d.context,Q=a.contextType,I=Ls,typeof Q=="object"&&Q!==null&&(I=pn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==pe||$!==I)&&am(n,d,r,I),ua=!1,$=n.memoizedState,d.state=$,io(n,r,d,u),no();var se=n.memoizedState;v!==pe||$!==se||ua||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof b=="function"&&(Xu(n,a,b,r),se=n.memoizedState),(ue=ua||im(n,a,ue,r,$,se,I)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,se,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,se,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=se),d.props=r,d.state=se,d.context=I,r=ue):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return d=r,bl(e,n),r=(n.flags&128)!==0,d||r?(d=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&r?(n.child=Ja(n,e.child,null,u),n.child=Ja(n,null,a,u)):mn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Pi(e,n,u),e}function xm(e,n,a,r){return Wa(),n.flags|=256,mn(e,n,a,r),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(e){return{baseLanes:e,cachePool:lp()}}function Ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=kn),e}function ym(e,n,a){var r=n.pendingProps,u=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Zt.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(vt){if(u?ha(n):pa(),(e=It)?(e=Cg(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ra!==null?{id:_i,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=$h(e),a.return=n,n.child=a,hn=n,It=null)):e=null,e===null)throw la(n);return Pf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(pa(),u=n.mode,b=Tl({mode:"hidden",children:b},u),r=Xa(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(e,v,a),n.memoizedState=Ku,lo(null,r)):(ha(n),$u(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(d)n.flags&256?(ha(n),n.flags&=-257,n=ef(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),b=r.fallback,u=n.mode,r=Tl({mode:"visible",children:r.children},u),b=Xa(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,Ja(n,e.child,null,a),r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(e,v,a),n.memoizedState=Ku,n=lo(null,r));else if(ha(n),Pf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var Q=v.dgst;v=Q,r=Error(s(419)),r.stack="",r.digest=v,Kr({value:r,source:null,stack:null}),n=ef(e,n,a)}else if(en||Is(e,n,a,!1),v=(a&e.childLanes)!==0,en||v){if(v=Ot,v!==null&&(r=Or(v,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,ka(e,r),Ln(v,e,r),Yu;Of(b)||Ol(),n=ef(e,n,a)}else Of(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,It=ti(b.nextSibling),hn=n,vt=!0,oa=null,$n=!1,e!==null&&np(n,e),n=$u(n,r.children),n.flags|=4096);return n}return u?(pa(),b=r.fallback,u=n.mode,I=e.child,Q=I.sibling,r=wi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,Q!==null?b=wi(Q,b):(b=Xa(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,lo(null,r),r=n.child,b=e.child.memoizedState,b===null?b=Qu(a):(u=b.cachePool,u!==null?(I=Jt._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=lp(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=Ju(e,v,a),n.memoizedState=Ku,lo(e.child,r)):(ha(n),a=e.child,e=a.sibling,a=wi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function $u(e,n){return n=Tl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tl(e,n){return e=Fn(22,e,null,n),e.lanes=0,e}function ef(e,n,a){return Ja(n,e.child,null,a),e=$u(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),mu(e.return,n,a)}function tf(e,n,a,r,u,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:d}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=d)}function Mm(e,n,a){var r=n.pendingProps,u=r.revealOrder,d=r.tail;r=r.children;var v=Zt.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,_e(Zt,v),mn(e,n,r,a),r=vt?Zr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sm(e,a,n);else if(e.tag===19)Sm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&hl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),tf(n,!1,u,a,d,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&hl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}tf(n,!0,a,null,d,r);break;case"together":tf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Pi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function Gx(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),ca(n,Jt,e.memoizedState.cache),Wa();break;case 27:case 5:nt(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(e,n,a):(ha(n),e=Pi(e,n,a),e!==null?e.sibling:null);ha(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Is(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Mm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(Zt,Zt.current),r)break;return null;case 22:return n.lanes=0,pm(e,n,a,n.pendingProps);case 24:ca(n,Jt,e.memoizedState.cache)}return Pi(e,n,a)}function Em(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!nf(e,a)&&(n.flags&128)===0)return en=!1,Gx(e,n,a);en=(e.flags&131072)!==0}else en=!1,vt&&(n.flags&1048576)!==0&&tp(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Ka(n.elementType),n.type=e,typeof e=="function")ou(e)?(r=es(e,r),n.tag=1,n=_m(null,n,e,r,a)):(n.tag=0,n=Zu(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===z){n.tag=11,n=fm(null,n,e,r,a);break e}else if(u===P){n.tag=14,n=dm(null,n,e,r,a);break e}}throw n=me(e)||e,Error(s(306,n,""))}}return n;case 0:return Zu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=es(r,n.pendingProps),_m(e,n,r,u,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var d=n.memoizedState;u=d.element,Mu(e,n),io(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ca(n,Jt,r),r!==d.cache&&gu(n,[Jt],a,!0),no(),r=v.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=xm(e,n,r,a);break e}else if(r!==u){u=Kn(Error(s(424)),n),Kr(u),n=xm(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(It=ti(e.firstChild),hn=n,vt=!0,oa=null,$n=!0,a=pp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Wa(),r===u){n=Pi(e,n,a);break e}mn(e,n,r,a)}n=n.child}return n;case 26:return bl(e,n),e===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:vt||(a=n.type,e=n.pendingProps,r=Hl(ye.current).createElement(a),r[Qt]=n,r[_n]=e,gn(r,a,e),Ie(r),n.stateNode=r):n.memoizedState=Og(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&vt&&(r=n.stateNode=Dg(n.type,n.pendingProps,ye.current),hn=n,$n=!0,u=It,Ma(n.type)?(zf=u,It=ti(r.firstChild)):It=u),mn(e,n,n.pendingProps.children,a),bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&vt&&((u=r=It)&&(r=_0(r,n.type,n.pendingProps,$n),r!==null?(n.stateNode=r,hn=n,It=ti(r.firstChild),$n=!1,u=!0):u=!1),u||la(n)),nt(n),u=n.type,d=n.pendingProps,v=e!==null?e.memoizedProps:null,r=d.children,Df(u,d)?r=null:v!==null&&Df(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=wu(e,n,Lx,null,null,a),bo._currentValue=u),bl(e,n),mn(e,n,r,a),n.child;case 6:return e===null&&vt&&((e=a=It)&&(a=x0(a,n.pendingProps,$n),a!==null?(n.stateNode=a,hn=n,It=null,e=!0):e=!1),e||la(n)),null;case 13:return ym(e,n,a);case 4:return He(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ja(n,null,r,a):mn(e,n,r,a),n.child;case 11:return fm(e,n,n.type,n.pendingProps,a);case 7:return mn(e,n,n.pendingProps,a),n.child;case 8:return mn(e,n,n.pendingProps.children,a),n.child;case 12:return mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ca(n,n.type,r.value),mn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Ya(n),u=pn(u),r=r(u),n.flags|=1,mn(e,n,r,a),n.child;case 14:return dm(e,n,n.type,n.pendingProps,a);case 15:return hm(e,n,n.type,n.pendingProps,a);case 19:return Mm(e,n,a);case 31:return Hx(e,n,a);case 22:return pm(e,n,a,n.pendingProps);case 24:return Ya(n),r=pn(Jt),e===null?(u=xu(),u===null&&(u=Ot,d=vu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:r,cache:u},Su(n),ca(n,Jt,u)):((e.lanes&a)!==0&&(Mu(e,n),io(n,null,null,a),no()),u=e.memoizedState,d=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,Jt,r)):(r=d.cache,ca(n,Jt,r),r!==u.cache&&gu(n,[Jt],a,!0))),mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function zi(e){e.flags|=4}function af(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Km())e.flags|=8192;else throw Qa=cl,yu}else e.flags&=-16777217}function bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(n))if(Km())e.flags|=8192;else throw Qa=cl,yu}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?_t():536870912,e.lanes|=n,Zs|=n)}function co(e,n){if(!vt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Vx(e,n,a){var r=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(n),null;case 1:return Bt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ui(Jt),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zs(n)?zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hu())),Bt(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(zi(n),d!==null?(Bt(n),bm(n,d)):(Bt(n),af(n,u,null,r,a))):d?d!==e.memoizedState?(zi(n),Bt(n),bm(n,d)):(Bt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&zi(n),Bt(n),af(n,u,e,r,a)),null;case 27:if(Lt(n),a=ye.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Bt(n),null}e=q.current,zs(n)?ip(n):(e=Dg(u,r,a),n.stateNode=e,zi(n))}return Bt(n),null;case 5:if(Lt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Bt(n),null}if(d=q.current,zs(n))ip(n);else{var v=Hl(ye.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?d.multiple=!0:r.size&&(d.size=r.size);break;default:d=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}d[Qt]=n,d[_n]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=d;e:switch(gn(d,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&zi(n)}}return Bt(n),af(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ye.current,zs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=hn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||yg(e.nodeValue,a)),e||la(n,!0)}else e=Hl(e).createTextNode(r),e[Qt]=n,n.stateNode=e}return Bt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=zs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qt]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Bt(n),e=!1}else a=hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Gn(n),n):(Gn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Bt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=zs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Qt]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Bt(n),u=!1}else u=hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gn(n),n):(Gn(n),null)}return Gn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),Bt(n),null);case 4:return Fe(),e===null&&Af(n.stateNode.containerInfo),Bt(n),null;case 10:return Ui(n.type),Bt(n),null;case 19:if(ne(Zt),r=n.memoizedState,r===null)return Bt(n),null;if(u=(n.flags&128)!==0,d=r.rendering,d===null)if(u)co(r,!1);else{if(qt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=hl(e),d!==null){for(n.flags|=128,co(r,!1),e=d.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jh(a,e),a=a.sibling;return _e(Zt,Zt.current&1|2),vt&&Ni(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&ve()>Dl&&(n.flags|=128,u=!0,co(r,!1),n.lanes=4194304)}else{if(!u)if(e=hl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!d.alternate&&!vt)return Bt(n),null}else 2*ve()-r.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,u=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(d.sibling=n.child,n.child=d):(e=r.last,e!==null?e.sibling=d:n.child=d,r.last=d)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ve(),e.sibling=null,a=Zt.current,_e(Zt,u?a&1|2:a&1),vt&&Ni(n,r.treeForkCount),e):(Bt(n),null);case 22:case 23:return Gn(n),Au(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Bt(n),n.subtreeFlags&6&&(n.flags|=8192)):Bt(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ui(Jt),Bt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function kx(e,n){switch(fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ui(Jt),Fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Lt(n),null;case 31:if(n.memoizedState!==null){if(Gn(n),n.alternate===null)throw Error(s(340));Wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(Zt),null;case 4:return Fe(),null;case 10:return Ui(n.type),null;case 22:case 23:return Gn(n),Au(),e!==null&&ne(Za),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ui(Jt),null;case 25:return null;default:return null}}function Tm(e,n){switch(fu(n),n.tag){case 3:Ui(Jt),Fe();break;case 26:case 27:case 5:Lt(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&Gn(n);break;case 13:Gn(n);break;case 19:ne(Zt);break;case 10:Ui(n.type);break;case 22:case 23:Gn(n),Au(),e!==null&&ne(Za);break;case 24:Ui(Jt)}}function uo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var d=a.create,v=a.inst;r=d(),v.destroy=r}a=a.next}while(a!==u)}}catch(b){Ct(n,n.return,b)}}function ma(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var d=u.next;r=d;do{if((r.tag&e)===e){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var I=a,Q=b;try{Q()}catch(ue){Ct(u,I,ue)}}}r=r.next}while(r!==d)}}catch(ue){Ct(n,n.return,ue)}}function Am(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gp(n,a)}catch(r){Ct(e,e.return,r)}}}function Rm(e,n,a){a.props=es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ct(e,n,r)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ct(e,n,u)}}function yi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ct(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ct(e,n,u)}else a.current=null}function Cm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ct(e,e.return,u)}}function sf(e,n,a){try{var r=e.stateNode;d0(r,e.type,a,n),r[_n]=n}catch(u){Ct(e,e.return,u)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function of(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ri));else if(r!==4&&(r===27&&Ma(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(of(e,n,a),e=e.sibling;e!==null;)of(e,n,a),e=e.sibling}function Rl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rl(e,n,a),e=e.sibling;e!==null;)Rl(e,n,a),e=e.sibling}function Nm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);gn(n,r,a),n[Qt]=e,n[_n]=a}catch(d){Ct(e,e.return,d)}}var Ii=!1,tn=!1,lf=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,un=null;function Xx(e,n){if(e=e.containerInfo,wf=Yl,e=Vh(e),eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,b=-1,I=-1,Q=0,ue=0,pe=e,$=null;t:for(;;){for(var se;pe!==a||u!==0&&pe.nodeType!==3||(b=v+u),pe!==d||r!==0&&pe.nodeType!==3||(I=v+r),pe.nodeType===3&&(v+=pe.nodeValue.length),(se=pe.firstChild)!==null;)$=pe,pe=se;for(;;){if(pe===e)break t;if($===a&&++Q===u&&(b=v),$===d&&++ue===r&&(I=v),(se=pe.nextSibling)!==null)break;pe=$,$=pe.parentNode}pe=se}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:e,selectionRange:a},Yl=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,r=a.stateNode;try{var Be=es(a.type,u);e=r.getSnapshotBeforeUpdate(Be,d),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qe){Ct(a,a.return,Qe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Lf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function Um(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),r&4&&uo(5,a);break;case 1:if(ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ct(a,a.return,v)}else{var u=es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ct(a,a.return,v)}}r&64&&Am(a),r&512&&fo(a,a.return);break;case 3:if(ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(e,n)}catch(v){Ct(a,a.return,v)}}break;case 27:n===null&&r&4&&Nm(a);case 26:case 5:ji(e,a),n===null&&r&4&&Cm(a),r&512&&fo(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),r&4&&Pm(e,a);break;case 13:ji(e,a),r&4&&zm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=e0.bind(null,a),y0(e,a))));break;case 22:if(r=a.memoizedState!==null||Ii,!r){n=n!==null&&n.memoizedState!==null||tn,u=Ii;var d=tn;Ii=r,(tn=n)&&!d?Fi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Ii=u,tn=d}break;case 30:break;default:ji(e,a)}}function Lm(e){var n=e.alternate;n!==null&&(e.alternate=null,Lm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Y(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Gt=null,wn=!1;function Bi(e,n,a){for(a=a.child;a!==null;)Om(e,n,a),a=a.sibling}function Om(e,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:tn||yi(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||yi(a,n);var r=Gt,u=wn;Ma(a.type)&&(Gt=a.stateNode,wn=!1),Bi(e,n,a),So(a.stateNode),Gt=r,wn=u;break;case 5:tn||yi(a,n);case 6:if(r=Gt,u=wn,Gt=null,Bi(e,n,a),Gt=r,wn=u,Gt!==null)if(wn)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(a.stateNode)}catch(d){Ct(a,n,d)}else try{Gt.removeChild(a.stateNode)}catch(d){Ct(a,n,d)}break;case 18:Gt!==null&&(wn?(e=Gt,Ag(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ir(e)):Ag(Gt,a.stateNode));break;case 4:r=Gt,u=wn,Gt=a.stateNode.containerInfo,wn=!0,Bi(e,n,a),Gt=r,wn=u;break;case 0:case 11:case 14:case 15:ma(2,a,n),tn||ma(4,a,n),Bi(e,n,a);break;case 1:tn||(yi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Rm(a,n,r)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:tn=(r=tn)||a.memoizedState!==null,Bi(e,n,a),tn=r;break;default:Bi(e,n,a)}}function Pm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ir(e)}catch(a){Ct(n,n.return,a)}}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ir(e)}catch(a){Ct(n,n.return,a)}}function Wx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dm),n;default:throw Error(s(435,e.tag))}}function Cl(e,n){var a=Wx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=t0.bind(null,e,r);r.then(u,u)}})}function Nn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],d=e,v=n,b=v;e:for(;b!==null;){switch(b.tag){case 27:if(Ma(b.type)){Gt=b.stateNode,wn=!1;break e}break;case 5:Gt=b.stateNode,wn=!1;break e;case 3:case 4:Gt=b.stateNode.containerInfo,wn=!0;break e}b=b.return}if(Gt===null)throw Error(s(160));Om(d,v,u),Gt=null,wn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Im(n,e),n=n.sibling}var li=null;function Im(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nn(n,e),Dn(e),r&4&&(ma(3,e,e.return),uo(3,e),ma(5,e,e.return));break;case 1:Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),r&64&&Ii&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=li;if(Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),r&4){var d=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":d=u.getElementsByTagName("title")[0],(!d||d[te]||d[Qt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(r),u.head.insertBefore(d,u.querySelector("head > title"))),gn(d,r,a),d[Qt]=e,Ie(d),r=d;break e;case"link":var v=Ig("link","href",u).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(d=v[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break t}}d=u.createElement(r),gn(d,r,a),u.head.appendChild(d);break;case"meta":if(v=Ig("meta","content",u).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(d=v[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break t}}d=u.createElement(r),gn(d,r,a),u.head.appendChild(d);break;default:throw Error(s(468,r))}d[Qt]=e,Ie(d),r=d}e.stateNode=r}else Bg(u,e.type,e.stateNode);else e.stateNode=zg(u,r,e.memoizedProps);else d!==r?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,r===null?Bg(u,e.type,e.stateNode):zg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),a!==null&&r&4&&sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),e.flags&32){u=e.stateNode;try{As(u,"")}catch(Be){Ct(e,e.return,Be)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,sf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(lf=!0);break;case 6:if(Nn(n,e),Dn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Be){Ct(e,e.return,Be)}}break;case 3:if(kl=null,u=li,li=Gl(n.containerInfo),Nn(n,e),li=u,Dn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(Be){Ct(e,e.return,Be)}lf&&(lf=!1,Bm(e));break;case 4:r=li,li=Gl(e.stateNode.containerInfo),Nn(n,e),Dn(e),li=r;break;case 12:Nn(n,e),Dn(e);break;case 31:Nn(n,e),Dn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 13:Nn(n,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=ve()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=Ii,ue=tn;if(Ii=Q||u,tn=ue||I,Nn(n,e),tn=ue,Ii=Q,Dn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ii||tn||ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=I.stateNode;var pe=I.memoizedProps.style,$=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;b.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Be){Ct(I,I.return,Be)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Be){Ct(I,I.return,Be)}}}else if(n.tag===18){if(a===null){I=n;try{var se=I.stateNode;u?Rg(se,!0):Rg(I.stateNode,!1)}catch(Be){Ct(I,I.return,Be)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Cl(e,a))));break;case 19:Nn(n,e),Dn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 30:break;case 21:break;default:Nn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(wm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=rf(e);Rl(e,d,u);break;case 5:var v=a.stateNode;a.flags&32&&(As(v,""),a.flags&=-33);var b=rf(e);Rl(e,b,v);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=rf(e);of(e,Q,I);break;default:throw Error(s(161))}}catch(ue){Ct(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Um(e,n.alternate,n),n=n.sibling}function ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),ts(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rm(n,n.return,a),ts(n);break;case 27:So(n.stateNode);case 26:case 5:yi(n,n.return),ts(n);break;case 22:n.memoizedState===null&&ts(n);break;case 30:ts(n);break;default:ts(n)}e=e.sibling}}function Fi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:Fi(u,d,a),uo(4,d);break;case 1:if(Fi(u,d,a),r=d,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Ct(r,r.return,Q)}if(r=d,u=r.updateQueue,u!==null){var b=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)mp(I[u],b)}catch(Q){Ct(r,r.return,Q)}}a&&v&64&&Am(d),fo(d,d.return);break;case 27:Nm(d);case 26:case 5:Fi(u,d,a),a&&r===null&&v&4&&Cm(d),fo(d,d.return);break;case 12:Fi(u,d,a);break;case 31:Fi(u,d,a),a&&v&4&&Pm(u,d);break;case 13:Fi(u,d,a),a&&v&4&&zm(u,d);break;case 22:d.memoizedState===null&&Fi(u,d,a),fo(d,d.return);break;case 30:break;default:Fi(u,d,a)}n=n.sibling}}function cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qr(a))}function uf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e))}function ci(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jm(e,n,a,r),n=n.sibling}function jm(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ci(e,n,a,r),u&2048&&uo(9,n);break;case 1:ci(e,n,a,r);break;case 3:ci(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e)));break;case 12:if(u&2048){ci(e,n,a,r),e=n.stateNode;try{var d=n.memoizedProps,v=d.id,b=d.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ct(n,n.return,I)}}else ci(e,n,a,r);break;case 31:ci(e,n,a,r);break;case 13:ci(e,n,a,r);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?ci(e,n,a,r):ho(e,n):d._visibility&2?ci(e,n,a,r):(d._visibility|=2,Ws(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&cf(v,n);break;case 24:ci(e,n,a,r),u&2048&&uf(n.alternate,n);break;default:ci(e,n,a,r)}}function Ws(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,v=n,b=a,I=r,Q=v.flags;switch(v.tag){case 0:case 11:case 15:Ws(d,v,b,I,u),uo(8,v);break;case 23:break;case 22:var ue=v.stateNode;v.memoizedState!==null?ue._visibility&2?Ws(d,v,b,I,u):ho(d,v):(ue._visibility|=2,Ws(d,v,b,I,u)),u&&Q&2048&&cf(v.alternate,v);break;case 24:Ws(d,v,b,I,u),u&&Q&2048&&uf(v.alternate,v);break;default:Ws(d,v,b,I,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:ho(a,r),u&2048&&cf(r.alternate,r);break;case 24:ho(a,r),u&2048&&uf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function qs(e,n,a){if(e.subtreeFlags&po)for(e=e.child;e!==null;)Fm(e,n,a),e=e.sibling}function Fm(e,n,a){switch(e.tag){case 26:qs(e,n,a),e.flags&po&&e.memoizedState!==null&&U0(a,li,e.memoizedState,e.memoizedProps);break;case 5:qs(e,n,a);break;case 3:case 4:var r=li;li=Gl(e.stateNode.containerInfo),qs(e,n,a),li=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,qs(e,n,a),po=r):qs(e,n,a));break;default:qs(e,n,a)}}function Hm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];un=r,Vm(r,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&ma(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,wl(e)):mo(e);break;default:mo(e)}}function wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];un=r,Vm(r,e)}Hm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ma(8,n,n.return),wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wl(n));break;default:wl(n)}e=e.sibling}}function Vm(e,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,un=r;else e:for(a=e;un!==null;){r=un;var u=r.sibling,d=r.return;if(Lm(r),r===a){un=null;break e}if(u!==null){u.return=d,un=u;break e}un=d}}}var qx={getCacheForType:function(e){var n=pn(Jt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return pn(Jt).controller.signal}},Yx=typeof WeakMap=="function"?WeakMap:Map,Et=0,Ot=null,ft=null,pt=0,Rt=0,Vn=null,ga=!1,Ys=!1,ff=!1,Hi=0,qt=0,va=0,ns=0,df=0,kn=0,Zs=0,go=null,Un=null,hf=!1,Nl=0,km=0,Dl=1/0,Ul=null,_a=null,rn=0,xa=null,Ks=null,Gi=0,pf=0,mf=null,Xm=null,vo=0,gf=null;function Xn(){return(Et&2)!==0&&pt!==0?pt&-pt:L.T!==null?Mf():Pr()}function Wm(){if(kn===0)if((pt&536870912)===0||vt){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),kn=e}else kn=536870912;return e=Hn.current,e!==null&&(e.flags|=32),kn}function Ln(e,n,a){(e===Ot&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)&&(Qs(e,0),ya(e,pt,kn,!1)),vn(e,a),((Et&2)===0||e!==Ot)&&(e===Ot&&((Et&2)===0&&(ns|=a),qt===4&&ya(e,pt,kn,!1)),Si(e))}function qm(e,n,a){if((Et&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Pt(e,n),u=r?Qx(e,n):_f(e,n,!0),d=r;do{if(u===0){Ys&&!r&&ya(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Zx(a)){u=_f(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var b=e;u=go;var I=b.current.memoizedState.isDehydrated;if(I&&(Qs(b,v).flags|=256),v=_f(b,v,!1),v!==2){if(ff&&!I){b.errorRecoveryDisabledLanes|=d,ns|=d,u=4;break e}d=Un,Un=u,d!==null&&(Un===null?Un=d:Un.push.apply(Un,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){Qs(e,0),ya(e,n,0,!0);break}e:{switch(r=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ya(r,n,kn,!ga);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nl+300-ve(),10<u)){if(ya(r,n,kn,!ga),lt(r,0,!0)!==0)break e;Gi=n,r.timeoutHandle=bg(Ym.bind(null,r,a,Un,Ul,hf,n,kn,ns,Zs,ga,d,"Throttled",-0,0),u);break e}Ym(r,a,Un,Ul,hf,n,kn,ns,Zs,ga,d,null,-0,0)}}break}while(!0);Si(e)}function Ym(e,n,a,r,u,d,v,b,I,Q,ue,pe,$,se){if(e.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ri},Fm(n,d,pe);var Be=(d&62914560)===d?Nl-ve():(d&4194048)===d?km-ve():0;if(Be=L0(pe,Be),Be!==null){Gi=d,e.cancelPendingCommit=Be(ng.bind(null,e,n,d,a,r,u,v,b,I,ue,pe,null,$,se)),ya(e,d,v,!Q);return}}ng(e,n,d,a,r,u,v,b,I)}function Zx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],d=u.getSnapshot;u=u.value;try{if(!jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(e,n,a,r){n&=~df,n&=~ns,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var d=31-Ze(u),v=1<<d;r[d]=-1,u&=~v}a!==0&&vi(e,a,n)}function Ll(){return(Et&6)===0?(_o(0),!1):!0}function vf(){if(ft!==null){if(Rt===0)var e=ft.return;else e=ft,Di=qa=null,Uu(e),Hs=null,$r=0,e=ft;for(;e!==null;)Tm(e.alternate,e),e=e.return;ft=null}}function Qs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,m0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gi=0,vf(),Ot=e,ft=a=wi(e.current,null),pt=n,Rt=0,Vn=null,ga=!1,Ys=Pt(e,n),ff=!1,Zs=kn=df=ns=va=qt=0,Un=go=null,hf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ze(r),d=1<<u;n|=e[u],r&=~d}return Hi=n,el(),a}function Zm(e,n){at=null,L.H=oo,n===Fs||n===ll?(n=fp(),Rt=3):n===yu?(n=fp(),Rt=4):Rt=n===Yu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,ft===null&&(qt=1,Ml(e,Kn(n,e.current)))}function Km(){var e=Hn.current;return e===null?!0:(pt&4194048)===pt?ei===null:(pt&62914560)===pt||(pt&536870912)!==0?e===ei:!1}function Qm(){var e=L.H;return L.H=oo,e===null?oo:e}function Jm(){var e=L.A;return L.A=qx,e}function Ol(){qt=4,ga||(pt&4194048)!==pt&&Hn.current!==null||(Ys=!0),(va&134217727)===0&&(ns&134217727)===0||Ot===null||ya(Ot,pt,kn,!1)}function _f(e,n,a){var r=Et;Et|=2;var u=Qm(),d=Jm();(Ot!==e||pt!==n)&&(Ul=null,Qs(e,n)),n=!1;var v=qt;e:do try{if(Rt!==0&&ft!==null){var b=ft,I=Vn;switch(Rt){case 8:vf(),v=6;break e;case 3:case 2:case 9:case 6:Hn.current===null&&(n=!0);var Q=Rt;if(Rt=0,Vn=null,Js(e,b,I,Q),a&&Ys){v=0;break e}break;default:Q=Rt,Rt=0,Vn=null,Js(e,b,I,Q)}}Kx(),v=qt;break}catch(ue){Zm(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Di=qa=null,Et=r,L.H=u,L.A=d,ft===null&&(Ot=null,pt=0,el()),v}function Kx(){for(;ft!==null;)$m(ft)}function Qx(e,n){var a=Et;Et|=2;var r=Qm(),u=Jm();Ot!==e||pt!==n?(Ul=null,Dl=ve()+500,Qs(e,n)):Ys=Pt(e,n);e:do try{if(Rt!==0&&ft!==null){n=ft;var d=Vn;t:switch(Rt){case 1:Rt=0,Vn=null,Js(e,n,d,1);break;case 2:case 9:if(cp(d)){Rt=0,Vn=null,eg(n);break}n=function(){Rt!==2&&Rt!==9||Ot!==e||(Rt=7),Si(e)},d.then(n,n);break e;case 3:Rt=7;break e;case 4:Rt=5;break e;case 7:cp(d)?(Rt=0,Vn=null,eg(n)):(Rt=0,Vn=null,Js(e,n,d,7));break;case 5:var v=null;switch(ft.tag){case 26:v=ft.memoizedState;case 5:case 27:var b=ft;if(v?jg(v):b.stateNode.complete){Rt=0,Vn=null;var I=b.sibling;if(I!==null)ft=I;else{var Q=b.return;Q!==null?(ft=Q,Pl(Q)):ft=null}break t}}Rt=0,Vn=null,Js(e,n,d,5);break;case 6:Rt=0,Vn=null,Js(e,n,d,6);break;case 8:vf(),qt=6;break e;default:throw Error(s(462))}}Jx();break}catch(ue){Zm(e,ue)}while(!0);return Di=qa=null,L.H=r,L.A=u,Et=a,ft!==null?0:(Ot=null,pt=0,el(),qt)}function Jx(){for(;ft!==null&&!ae();)$m(ft)}function $m(e){var n=Em(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,n===null?Pl(e):ft=n}function eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,pt);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,pt);break;case 5:Uu(n);default:Tm(a,n),n=ft=Jh(n,Hi),n=Em(a,n,Hi)}e.memoizedProps=e.pendingProps,n===null?Pl(e):ft=n}function Js(e,n,a,r){Di=qa=null,Uu(n),Hs=null,$r=0;var u=n.return;try{if(Fx(e,u,n,a,pt)){qt=1,Ml(e,Kn(a,e.current)),ft=null;return}}catch(d){if(u!==null)throw ft=u,d;qt=1,Ml(e,Kn(a,e.current)),ft=null;return}n.flags&32768?(vt||r===1?e=!0:Ys||(pt&536870912)!==0?e=!1:(ga=e=!0,(r===2||r===9||r===3||r===6)&&(r=Hn.current,r!==null&&r.tag===13&&(r.flags|=16384))),tg(n,e)):Pl(n)}function Pl(e){var n=e;do{if((n.flags&32768)!==0){tg(n,ga);return}e=n.return;var a=Vx(n.alternate,n,Hi);if(a!==null){ft=a;return}if(n=n.sibling,n!==null){ft=n;return}ft=n=e}while(n!==null);qt===0&&(qt=5)}function tg(e,n){do{var a=kx(e.alternate,e);if(a!==null){a.flags&=32767,ft=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ft=e;return}ft=e=a}while(e!==null);qt=6,ft=null}function ng(e,n,a,r,u,d,v,b,I){e.cancelPendingCommit=null;do zl();while(rn!==0);if((Et&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=su,Xo(e,a,d,v,b,I),e===Ot&&(ft=Ot=null,pt=0),Ks=n,xa=e,Gi=a,pf=d,mf=u,Xm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,n0(Le,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,u=W.p,W.p=2,v=Et,Et|=4;try{Xx(e,n,a)}finally{Et=v,W.p=u,L.T=r}}rn=1,ig(),ag(),sg()}}function ig(){if(rn===1){rn=0;var e=xa,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=W.p;W.p=2;var u=Et;Et|=4;try{Im(n,e);var d=Nf,v=Vh(e.containerInfo),b=d.focusedElem,I=d.selectionRange;if(v!==b&&b&&b.ownerDocument&&Gh(b.ownerDocument.documentElement,b)){if(I!==null&&eu(b)){var Q=I.start,ue=I.end;if(ue===void 0&&(ue=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ue,b.value.length);else{var pe=b.ownerDocument||document,$=pe&&pe.defaultView||window;if($.getSelection){var se=$.getSelection(),Be=b.textContent.length,Qe=Math.min(I.start,Be),Ut=I.end===void 0?Qe:Math.min(I.end,Be);!se.extend&&Qe>Ut&&(v=Ut,Ut=Qe,Qe=v);var X=Hh(b,Qe),F=Hh(b,Ut);if(X&&F&&(se.rangeCount!==1||se.anchorNode!==X.node||se.anchorOffset!==X.offset||se.focusNode!==F.node||se.focusOffset!==F.offset)){var K=pe.createRange();K.setStart(X.node,X.offset),se.removeAllRanges(),Qe>Ut?(se.addRange(K),se.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),se.addRange(K))}}}}for(pe=[],se=b;se=se.parentNode;)se.nodeType===1&&pe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pe.length;b++){var fe=pe[b];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Yl=!!wf,Nf=wf=null}finally{Et=u,W.p=r,L.T=a}}e.current=n,rn=2}}function ag(){if(rn===2){rn=0;var e=xa,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=W.p;W.p=2;var u=Et;Et|=4;try{Um(e,n.alternate,n)}finally{Et=u,W.p=r,L.T=a}}rn=3}}function sg(){if(rn===4||rn===3){rn=0,Se();var e=xa,n=Ks,a=Gi,r=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,Ks=xa=null,rg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(_a=null),na(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,u=W.p,W.p=2,L.T=null;try{for(var d=e.onRecoverableError,v=0;v<r.length;v++){var b=r[v];d(b.value,{componentStack:b.stack})}}finally{L.T=n,W.p=u}}(Gi&3)!==0&&zl(),Si(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===gf?vo++:(vo=0,gf=e):vo=0,_o(0)}}function rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qr(n)))}function zl(){return ig(),ag(),sg(),og()}function og(){if(rn!==5)return!1;var e=xa,n=pf;pf=0;var a=na(Gi),r=L.T,u=W.p;try{W.p=32>a?32:a,L.T=null,a=mf,mf=null;var d=xa,v=Gi;if(rn=0,Ks=xa=null,Gi=0,(Et&6)!==0)throw Error(s(331));var b=Et;if(Et|=4,Gm(d.current),jm(d,d.current,v,a),Et=b,_o(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ke,d)}catch{}return!0}finally{W.p=u,L.T=r,rg(e,n)}}function lg(e,n,a){n=Kn(a,n),n=qu(e.stateNode,n,2),e=da(e,n,2),e!==null&&(vn(e,2),Si(e))}function Ct(e,n,a){if(e.tag===3)lg(e,e,a);else for(;n!==null;){if(n.tag===3){lg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_a===null||!_a.has(r))){e=Kn(a,e),a=cm(2),r=da(n,a,2),r!==null&&(um(a,r,n,e),vn(r,2),Si(r));break}}n=n.return}}function xf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Yx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(ff=!0,u.add(a),e=$x.bind(null,e,n,a),n.then(e,e))}function $x(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ot===e&&(pt&a)===a&&(qt===4||qt===3&&(pt&62914560)===pt&&300>ve()-Nl?(Et&2)===0&&Qs(e,0):df|=a,Zs===pt&&(Zs=0)),Si(e)}function cg(e,n){n===0&&(n=_t()),e=ka(e,n),e!==null&&(vn(e,n),Si(e))}function e0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(e,a)}function t0(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),cg(e,a)}function n0(e,n){return O(e,n)}var Il=null,$s=null,yf=!1,Bl=!1,Sf=!1,Sa=0;function Si(e){e!==$s&&e.next===null&&($s===null?Il=$s=e:$s=$s.next=e),Bl=!0,yf||(yf=!0,a0())}function _o(e,n){if(!Sf&&Bl){Sf=!0;do for(var a=!1,r=Il;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var d=0;else{var v=r.suspendedLanes,b=r.pingedLanes;d=(1<<31-Ze(42|e)+1)-1,d&=u&~(v&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,hg(r,d))}else d=pt,d=lt(r,r===Ot?d:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(d&3)===0||Pt(r,d)||(a=!0,hg(r,d));r=r.next}while(a);Sf=!1}}function i0(){ug()}function ug(){Bl=yf=!1;var e=0;Sa!==0&&p0()&&(e=Sa);for(var n=ve(),a=null,r=Il;r!==null;){var u=r.next,d=fg(r,n);d===0?(r.next=null,a===null?Il=u:a.next=u,u===null&&($s=a)):(a=r,(e!==0||(d&3)!==0)&&(Bl=!0)),r=u}rn!==0&&rn!==5||_o(e),Sa!==0&&(Sa=0)}function fg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ze(d),b=1<<v,I=u[v];I===-1?((b&a)===0||(b&r)!==0)&&(u[v]=an(b,n)):I<=n&&(e.expiredLanes|=b),d&=~b}if(n=Ot,a=pt,a=lt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&T(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&T(r),na(a)){case 2:case 8:a=De;break;case 32:a=Le;break;case 268435456:a=Ae;break;default:a=Le}return r=dg.bind(null,e),a=O(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&T(r),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zl()&&e.callbackNode!==a)return null;var r=pt;return r=lt(e,e===Ot?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qm(e,r,n),fg(e,ve()),e.callbackNode!=null&&e.callbackNode===a?dg.bind(null,e):null)}function hg(e,n){if(zl())return null;qm(e,n,!0)}function a0(){g0(function(){(Et&6)!==0?O(We,i0):ug()})}function Mf(){if(Sa===0){var e=Bs;e===0&&(e=he,he<<=1,(he&261888)===0&&(he=256)),Sa=e}return Sa}function pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function s0(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var d=pg((u[_n]||null).action),v=r.submitter;v&&(n=(n=v[_n]||null)?pg(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var b=new Ko("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Sa!==0){var I=v?mg(u,v):new FormData(u);Hu(a,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=v?mg(u,v):new FormData(u),Hu(a,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var Ef=0;Ef<au.length;Ef++){var bf=au[Ef],r0=bf.toLowerCase(),o0=bf[0].toUpperCase()+bf.slice(1);oi(r0,"on"+o0)}oi(Wh,"onAnimationEnd"),oi(qh,"onAnimationIteration"),oi(Yh,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(Ex,"onTransitionRun"),oi(bx,"onTransitionStart"),oi(Tx,"onTransitionCancel"),oi(Zh,"onTransitionEnd"),At("onMouseEnter",["mouseout","mouseover"]),At("onMouseLeave",["mouseout","mouseover"]),At("onPointerEnter",["pointerout","pointerover"]),At("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function gg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var d=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],I=b.instance,Q=b.currentTarget;if(b=b.listener,I!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=Q;try{d(u)}catch(ue){$o(ue)}u.currentTarget=null,d=I}else for(v=0;v<r.length;v++){if(b=r[v],I=b.instance,Q=b.currentTarget,b=b.listener,I!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=Q;try{d(u)}catch(ue){$o(ue)}u.currentTarget=null,d=I}}}}function dt(e,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var r=e+"__bubble";a.has(r)||(vg(n,e,2,!1),a.add(r))}function Tf(e,n,a){var r=0;n&&(r|=4),vg(a,e,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Af(e){if(!e[jl]){e[jl]=!0,Je.forEach(function(a){a!=="selectionchange"&&(l0.has(a)||Tf(a,!1,e),Tf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Tf("selectionchange",!1,n))}}function vg(e,n,a,r){switch(Wg(n)){case 2:var u=z0;break;case 8:u=I0;break;default:u=Hf}a=u.bind(null,n,a,e),u=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Rf(e,n,a,r,u){var d=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=r.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=Te(b),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){r=d=v;continue e}b=b.parentNode}}r=r.return}Mh(function(){var Q=d,ue=Vc(a),pe=[];e:{var $=Kh.get(e);if($!==void 0){var se=Ko,Be=e;switch(e){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":se=tx;break;case"focusin":Be="focus",se=Zc;break;case"focusout":Be="blur",se=Zc;break;case"beforeblur":case"afterblur":se=Zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=V_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=ax;break;case Wh:case qh:case Yh:se=W_;break;case Zh:se=rx;break;case"scroll":case"scrollend":se=H_;break;case"wheel":se=lx;break;case"copy":case"cut":case"paste":se=Y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Rh;break;case"toggle":case"beforetoggle":se=ux}var Qe=(n&4)!==0,Ut=!Qe&&(e==="scroll"||e==="scrollend"),X=Qe?$!==null?$+"Capture":null:$;Qe=[];for(var F=Q,K;F!==null;){var fe=F;if(K=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||K===null||X===null||(fe=Fr(F,X),fe!=null&&Qe.push(yo(F,fe,K))),Ut)break;F=F.return}0<Qe.length&&($=new se($,Be,null,a,ue),pe.push({event:$,listeners:Qe}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",$&&a!==Gc&&(Be=a.relatedTarget||a.fromElement)&&(Te(Be)||Be[ia]))break e;if((se||$)&&($=ue.window===ue?ue:($=ue.ownerDocument)?$.defaultView||$.parentWindow:window,se?(Be=a.relatedTarget||a.toElement,se=Q,Be=Be?Te(Be):null,Be!==null&&(Ut=f(Be),Qe=Be.tag,Be!==Ut||Qe!==5&&Qe!==27&&Qe!==6)&&(Be=null)):(se=null,Be=Q),se!==Be)){if(Qe=Th,fe="onMouseLeave",X="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=Rh,fe="onPointerLeave",X="onPointerEnter",F="pointer"),Ut=se==null?$:Pe(se),K=Be==null?$:Pe(Be),$=new Qe(fe,F+"leave",se,a,ue),$.target=Ut,$.relatedTarget=K,fe=null,Te(ue)===Q&&(Qe=new Qe(X,F+"enter",Be,a,ue),Qe.target=K,Qe.relatedTarget=Ut,fe=Qe),Ut=fe,se&&Be)t:{for(Qe=c0,X=se,F=Be,K=0,fe=X;fe;fe=Qe(fe))K++;fe=0;for(var Xe=F;Xe;Xe=Qe(Xe))fe++;for(;0<K-fe;)X=Qe(X),K--;for(;0<fe-K;)F=Qe(F),fe--;for(;K--;){if(X===F||F!==null&&X===F.alternate){Qe=X;break t}X=Qe(X),F=Qe(F)}Qe=null}else Qe=null;se!==null&&_g(pe,$,se,Qe,!1),Be!==null&&Ut!==null&&_g(pe,Ut,Be,Qe,!0)}}e:{if($=Q?Pe(Q):window,se=$.nodeName&&$.nodeName.toLowerCase(),se==="select"||se==="input"&&$.type==="file")var St=Ph;else if(Lh($))if(zh)St=yx;else{St=_x;var je=vx}else se=$.nodeName,!se||se.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Hc(Q.elementType)&&(St=Ph):St=xx;if(St&&(St=St(e,Q))){Oh(pe,St,a,ue);break e}je&&je(e,$,Q),e==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Fc($,"number",$.value)}switch(je=Q?Pe(Q):window,e){case"focusin":(Lh(je)||je.contentEditable==="true")&&(Ns=je,tu=Q,Yr=null);break;case"focusout":Yr=tu=Ns=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,kh(pe,a,ue);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":kh(pe,a,ue)}var st;if(Qc)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else ws?Dh(e,a)&&(mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(Ch&&a.locale!=="ko"&&(ws||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&ws&&(st=Eh()):(sa=ue,Wc="value"in sa?sa.value:sa.textContent,ws=!0)),je=Fl(Q,mt),0<je.length&&(mt=new Ah(mt,e,null,a,ue),pe.push({event:mt,listeners:je}),st?mt.data=st:(st=Uh(a),st!==null&&(mt.data=st)))),(st=dx?hx(e,a):px(e,a))&&(mt=Fl(Q,"onBeforeInput"),0<mt.length&&(je=new Ah("onBeforeInput","beforeinput",null,a,ue),pe.push({event:je,listeners:mt}),je.data=st)),s0(pe,e,Q,a,ue)}gg(pe,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Fr(e,a),u!=null&&r.unshift(yo(e,u,d)),u=Fr(e,n),u!=null&&r.push(yo(e,u,d))),e.tag===3)return r;e=e.return}return[]}function c0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _g(e,n,a,r,u){for(var d=n._reactName,v=[];a!==null&&a!==r;){var b=a,I=b.alternate,Q=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||Q===null||(I=Q,u?(Q=Fr(a,d),Q!=null&&v.unshift(yo(a,Q,I))):u||(Q=Fr(a,d),Q!=null&&v.push(yo(a,Q,I)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var u0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function xg(e){return(typeof e=="string"?e:""+e).replace(u0,`
`).replace(f0,"")}function yg(e,n){return n=xg(n),xg(e)===n}function Dt(e,n,a,r,u,d){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||As(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&As(e,""+r);break;case"className":gt(e,"class",r);break;case"tabIndex":gt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gt(e,a,r);break;case"style":yh(e,r,d);break;case"data":if(n!=="object"){gt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Dt(e,n,"name",u.name,u,null),Dt(e,n,"formEncType",u.formEncType,u,null),Dt(e,n,"formMethod",u.formMethod,u,null),Dt(e,n,"formTarget",u.formTarget,u,null)):(Dt(e,n,"encType",u.encType,u,null),Dt(e,n,"method",u.method,u,null),Dt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ri);break;case"onScroll":r!=null&&dt("scroll",e);break;case"onScrollEnd":r!=null&&dt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Wo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":dt("beforetoggle",e),dt("toggle",e),Xt(e,"popover",r);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=j_.get(a)||a,Xt(e,a,r))}}function Cf(e,n,a,r,u,d){switch(a){case"style":yh(e,r,d);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?As(e,r):(typeof r=="number"||typeof r=="bigint")&&As(e,""+r);break;case"onScroll":r!=null&&dt("scroll",e);break;case"onScrollEnd":r!=null&&dt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ri);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof r=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xt(e,a,r)}}}function gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",e),dt("load",e);var r=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,d,v,a,null)}}u&&Dt(e,n,"srcSet",a.srcSet,a,null),r&&Dt(e,n,"src",a.src,a,null);return;case"input":dt("invalid",e);var b=d=v=u=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ue=a[r];if(ue!=null)switch(r){case"name":u=ue;break;case"type":v=ue;break;case"checked":I=ue;break;case"defaultChecked":Q=ue;break;case"value":d=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Dt(e,n,r,ue,a,null)}}jr(e,d,b,I,Q,v,u,!1);return;case"select":dt("invalid",e),r=v=d=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:Dt(e,n,u,b,a,null)}n=d,a=v,e.multiple=!!r,n!=null?Ts(e,!!r,n,!1):a!=null&&Ts(e,!!r,a,!0);return;case"textarea":dt("invalid",e),d=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Dt(e,n,v,b,a,null)}_h(e,r,u,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Dt(e,n,I,r,a,null)}return;case"dialog":dt("beforetoggle",e),dt("toggle",e),dt("cancel",e),dt("close",e);break;case"iframe":case"object":dt("load",e);break;case"video":case"audio":for(r=0;r<xo.length;r++)dt(xo[r],e);break;case"image":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"embed":case"source":case"link":dt("error",e),dt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,Q,r,a,null)}return;default:if(Hc(n)){for(ue in a)a.hasOwnProperty(ue)&&(r=a[ue],r!==void 0&&Cf(e,n,ue,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Dt(e,n,b,r,a,null))}function d0(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,b=null,I=null,Q=null,ue=null;for(se in a){var pe=a[se];if(a.hasOwnProperty(se)&&pe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=pe;default:r.hasOwnProperty(se)||Dt(e,n,se,null,r,pe)}}for(var $ in r){var se=r[$];if(pe=a[$],r.hasOwnProperty($)&&(se!=null||pe!=null))switch($){case"type":d=se;break;case"name":u=se;break;case"checked":Q=se;break;case"defaultChecked":ue=se;break;case"value":v=se;break;case"defaultValue":b=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==pe&&Dt(e,n,$,se,r,pe)}}Br(e,v,b,I,Q,ue,d,u);return;case"select":se=v=b=$=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":se=I;default:r.hasOwnProperty(d)||Dt(e,n,d,null,r,I)}for(u in r)if(d=r[u],I=a[u],r.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":$=d;break;case"defaultValue":b=d;break;case"multiple":v=d;default:d!==I&&Dt(e,n,u,d,r,I)}n=b,a=v,r=se,$!=null?Ts(e,!!a,$,!1):!!r!=!!a&&(n!=null?Ts(e,!!a,n,!0):Ts(e,!!a,a?[]:"",!1));return;case"textarea":se=$=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Dt(e,n,b,null,r,u)}for(v in r)if(u=r[v],d=a[v],r.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":$=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Dt(e,n,v,u,r,d)}vh(e,$,se);return;case"option":for(var Be in a)if($=a[Be],a.hasOwnProperty(Be)&&$!=null&&!r.hasOwnProperty(Be))switch(Be){case"selected":e.selected=!1;break;default:Dt(e,n,Be,null,r,$)}for(I in r)if($=r[I],se=a[I],r.hasOwnProperty(I)&&$!==se&&($!=null||se!=null))switch(I){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Dt(e,n,I,$,r,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)$=a[Qe],a.hasOwnProperty(Qe)&&$!=null&&!r.hasOwnProperty(Qe)&&Dt(e,n,Qe,null,r,$);for(Q in r)if($=r[Q],se=a[Q],r.hasOwnProperty(Q)&&$!==se&&($!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Dt(e,n,Q,$,r,se)}return;default:if(Hc(n)){for(var Ut in a)$=a[Ut],a.hasOwnProperty(Ut)&&$!==void 0&&!r.hasOwnProperty(Ut)&&Cf(e,n,Ut,void 0,r,$);for(ue in r)$=r[ue],se=a[ue],!r.hasOwnProperty(ue)||$===se||$===void 0&&se===void 0||Cf(e,n,ue,$,r,se);return}}for(var X in a)$=a[X],a.hasOwnProperty(X)&&$!=null&&!r.hasOwnProperty(X)&&Dt(e,n,X,null,r,$);for(pe in r)$=r[pe],se=a[pe],!r.hasOwnProperty(pe)||$===se||$==null&&se==null||Dt(e,n,pe,$,r,se)}function Sg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function h0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],d=u.transferSize,v=u.initiatorType,b=u.duration;if(d&&b&&Sg(v)){for(v=0,b=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>b)break;var ue=I.transferSize,pe=I.initiatorType;ue&&Sg(pe)&&(I=I.responseEnd,v+=ue*(I<b?1:(b-Q)/(I-Q)))}if(--r,n+=8*(d+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wf=null,Nf=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Mg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Df(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function p0(){var e=window.event;return e&&e.type==="popstate"?e===Uf?!1:(Uf=e,!0):(Uf=null,!1)}var bg=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(e){return Tg.resolve(null).then(e).catch(v0)}:bg;function v0(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function Ag(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),ir(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")So(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,So(a);for(var d=a.firstChild;d;){var v=d.nextSibling,b=d.nodeName;d[te]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&So(e.ownerDocument.body);a=u}while(a);ir(n)}function Rg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Lf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Y(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _0(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[te])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function x0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ti(e.nextSibling),e===null))return null;return e}function Cg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function Of(e){return e.data==="$?"||e.data==="$~"}function Pf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function y0(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var zf=null;function wg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ti(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ng(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Dg(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Y(e)}var ni=new Map,Ug=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vi=W.d;W.d={f:S0,r:M0,D:E0,C:b0,L:T0,m:A0,X:C0,S:R0,M:w0};function S0(){var e=Vi.f(),n=Ll();return e||n}function M0(e){var n=Ne(e);n!==null&&n.tag===5&&n.type==="form"?Zp(n):Vi.r(e)}var er=typeof document>"u"?null:document;function Lg(e,n,a){var r=er;if(r&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ug.has(u)||(Ug.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),gn(n,"link",e),Ie(n),r.head.appendChild(n)))}}function E0(e){Vi.D(e),Lg("dns-prefetch",e,null)}function b0(e,n){Vi.C(e,n),Lg("preconnect",e,n)}function T0(e,n,a){Vi.L(e,n,a);var r=er;if(r&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var d=u;switch(n){case"style":d=tr(e);break;case"script":d=nr(e)}ni.has(d)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ni.set(d,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Mo(d))||n==="script"&&r.querySelector(Eo(d))||(n=r.createElement("link"),gn(n,"link",e),Ie(n),r.head.appendChild(n)))}}function A0(e,n){Vi.m(e,n);var a=er;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(r)+'"][href="'+Sn(e)+'"]',d=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=nr(e)}if(!ni.has(d)&&(e=y({rel:"modulepreload",href:e},n),ni.set(d,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(d)))return}r=a.createElement("link"),gn(r,"link",e),Ie(r),a.head.appendChild(r)}}}function R0(e,n,a){Vi.S(e,n,a);var r=er;if(r&&e){var u=ze(r).hoistableStyles,d=tr(e);n=n||"default";var v=u.get(d);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(Mo(d)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ni.get(d))&&If(e,a);var I=v=r.createElement("link");Ie(I),gn(I,"link",e),I._p=new Promise(function(Q,ue){I.onload=Q,I.onerror=ue}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Vl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(d,v)}}}function C0(e,n){Vi.X(e,n);var a=er;if(a&&e){var r=ze(a).hoistableScripts,u=nr(e),d=r.get(u);d||(d=a.querySelector(Eo(u)),d||(e=y({src:e,async:!0},n),(n=ni.get(u))&&Bf(e,n),d=a.createElement("script"),Ie(d),gn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function w0(e,n){Vi.M(e,n);var a=er;if(a&&e){var r=ze(a).hoistableScripts,u=nr(e),d=r.get(u);d||(d=a.querySelector(Eo(u)),d||(e=y({src:e,async:!0,type:"module"},n),(n=ni.get(u))&&Bf(e,n),d=a.createElement("script"),Ie(d),gn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function Og(e,n,a,r){var u=(u=ye.current)?Gl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=ze(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tr(a.href);var d=ze(u).hoistableStyles,v=d.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=u.querySelector(Mo(e)))&&!d._p&&(v.instance=d,v.state.loading=5),ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(e,a),d||N0(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=ze(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function tr(e){return'href="'+Sn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function Pg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function N0(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),gn(n,"link",a),Ie(n),e.head.appendChild(n))}function nr(e){return'[src="'+Sn(e)+'"]'}function Eo(e){return"script[async]"+e}function zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(r)return n.instance=r,Ie(r),r;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ie(r),gn(r,"style",u),Vl(r,a.precedence,e),n.instance=r;case"stylesheet":u=tr(a.href);var d=e.querySelector(Mo(u));if(d)return n.state.loading|=4,n.instance=d,Ie(d),d;r=Pg(a),(u=ni.get(u))&&If(r,u),d=(e.ownerDocument||e).createElement("link"),Ie(d);var v=d;return v._p=new Promise(function(b,I){v.onload=b,v.onerror=I}),gn(d,"link",r),n.state.loading|=4,Vl(d,a.precedence,e),n.instance=d;case"script":return d=nr(a.src),(u=e.querySelector(Eo(d)))?(n.instance=u,Ie(u),u):(r=a,(u=ni.get(d))&&(r=y({},a),Bf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ie(u),gn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Vl(r,a.precedence,e));return n.instance}function Vl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,d=u,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function Ig(e,n,a){if(kl===null){var r=new Map,u=kl=new Map;u.set(a,r)}else u=kl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[te]||d[Qt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=e+v;var b=r.get(v);b?b.push(d):r.set(v,[d])}}return r}function Bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function D0(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function U0(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=tr(r.href),d=n.querySelector(Mo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Xl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Ie(d);return}d=n.ownerDocument||n,r=Pg(r),(u=ni.get(u))&&If(r,u),d=d.createElement("link"),Ie(d);var v=d;v._p=new Promise(function(b,I){v.onload=b,v.onerror=I}),gn(d,"link",r),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function L0(e,n){return e.stylesheets&&e.count===0&&ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*h0());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(O0,e),Wl=null,Xl.call(e))}function O0(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var r=a.get(null);else{a=new Map,Wl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),d=a.get(v)||r,d===r&&a.set(null,u),a.set(v,u),this.count++,r=Xl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function P0(e,n,a,r,u,d,v,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.hiddenUpdates=Bn(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Fg(e,n,a,r,u,d,v,b,I,Q,ue,pe){return e=new P0(e,n,a,v,I,Q,ue,pe,b),n=1,d===!0&&(n|=24),d=Fn(3,null,null,n),e.current=d,d.stateNode=e,n=vu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:r,isDehydrated:a,cache:n},Su(d),e}function Hg(e){return e?(e=Ls,e):Ls}function Gg(e,n,a,r,u,d){u=Hg(u),r.context===null?r.context=u:r.pendingContext=u,r=fa(n),r.payload={element:a},d=d===void 0?null:d,d!==null&&(r.callback=d),a=da(e,r,n),a!==null&&(Ln(a,e,n),to(a,e,n))}function Vg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ff(e,n){Vg(e,n),(e=e.alternate)&&Vg(e,n)}function kg(e){if(e.tag===13||e.tag===31){var n=ka(e,67108864);n!==null&&Ln(n,e,67108864),Ff(e,67108864)}}function Xg(e){if(e.tag===13||e.tag===31){var n=Xn();n=bs(n);var a=ka(e,n);a!==null&&Ln(a,e,n),Ff(e,n)}}var Yl=!0;function z0(e,n,a,r){var u=L.T;L.T=null;var d=W.p;try{W.p=2,Hf(e,n,a,r)}finally{W.p=d,L.T=u}}function I0(e,n,a,r){var u=L.T;L.T=null;var d=W.p;try{W.p=8,Hf(e,n,a,r)}finally{W.p=d,L.T=u}}function Hf(e,n,a,r){if(Yl){var u=Gf(r);if(u===null)Rf(e,n,r,Zl,a),qg(e,r);else if(j0(u,e,n,a,r))r.stopPropagation();else if(qg(e,r),n&4&&-1<B0.indexOf(e)){for(;u!==null;){var d=Ne(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=ke(d.pendingLanes);if(v!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var I=1<<31-Ze(v);b.entanglements[1]|=I,v&=~I}Si(d),(Et&6)===0&&(Dl=ve()+500,_o(0))}}break;case 31:case 13:b=ka(d,2),b!==null&&Ln(b,d,2),Ll(),Ff(d,2)}if(d=Gf(r),d===null&&Rf(e,n,r,Zl,a),d===u)break;u=d}u!==null&&r.stopPropagation()}else Rf(e,n,r,null,a)}}function Gf(e){return e=Vc(e),Vf(e)}var Zl=null;function Vf(e){if(Zl=null,e=Te(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Zl=e,null}function Wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case We:return 2;case De:return 8;case Le:case it:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var kf=!1,Ea=null,ba=null,Ta=null,To=new Map,Ao=new Map,Aa=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(e,n){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(e,n,a,r,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ne(n),n!==null&&kg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function j0(e,n,a,r,u){switch(n){case"focusin":return Ea=Ro(Ea,e,n,a,r,u),!0;case"dragenter":return ba=Ro(ba,e,n,a,r,u),!0;case"mouseover":return Ta=Ro(Ta,e,n,a,r,u),!0;case"pointerover":var d=u.pointerId;return To.set(d,Ro(To.get(d)||null,e,n,a,r,u)),!0;case"gotpointercapture":return d=u.pointerId,Ao.set(d,Ro(Ao.get(d)||null,e,n,a,r,u)),!0}return!1}function Yg(e){var n=Te(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Fa(e.priority,function(){Xg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Fa(e.priority,function(){Xg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Gf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Gc=r,a.target.dispatchEvent(r),Gc=null}else return n=Ne(a),n!==null&&kg(n),e.blockedOn=a,!1;n.shift()}return!0}function Zg(e,n,a){Kl(e)&&a.delete(n)}function F0(){kf=!1,Ea!==null&&Kl(Ea)&&(Ea=null),ba!==null&&Kl(ba)&&(ba=null),Ta!==null&&Kl(Ta)&&(Ta=null),To.forEach(Zg),Ao.forEach(Zg)}function Ql(e,n){e.blockedOn===n&&(e.blockedOn=null,kf||(kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,F0)))}var Jl=null;function Kg(e){Jl!==e&&(Jl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jl===e&&(Jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Vf(r||a)===null)continue;break}var d=Ne(a);d!==null&&(e.splice(n,3),n-=3,Hu(d,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function ir(e){function n(I){return Ql(I,e)}Ea!==null&&Ql(Ea,e),ba!==null&&Ql(ba,e),Ta!==null&&Ql(Ta,e),To.forEach(n),Ao.forEach(n);for(var a=0;a<Aa.length;a++){var r=Aa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],d=a[r+1],v=u[_n]||null;if(typeof d=="function")v||Kg(a);else if(v){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[_n]||null)b=v.formAction;else if(Vf(u)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Kg(a)}}}function Qg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Xf(e){this._internalRoot=e}$l.prototype.render=Xf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Xn();Gg(a,r,e,n,null,null)},$l.prototype.unmount=Xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gg(e.current,2,null,e,null,null),Ll(),n[ia]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&Yg(e)}};var Jg=t.version;if(Jg!=="19.2.7")throw Error(s(527,Jg,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var H0={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Ke=ec.inject(H0),we=ec}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=sm,d=rm,v=om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Fg(e,1,!1,null,null,a,r,null,u,d,v,Qg),e[ia]=n.current,Af(e),new Xf(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",d=sm,v=rm,b=om,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Fg(e,1,!0,n,a??null,r,u,I,d,v,b,Qg),n.context=Hg(null),a=n.current,r=Xn(),r=bs(r),u=fa(r),u.callback=null,da(a,u,r),a=r,n.current.lanes=a,vn(n,a),Si(n),e[ia]=n.current,Af(e),new $l(n)},wo.version="19.2.7",wo}var lv;function $0(){if(lv)return Yf.exports;lv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Yf.exports=J0(),Yf.exports}var ey=$0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="167",ty=0,cv=1,ny=2,s_=1,iy=2,Zi=3,Ia=0,zn=1,bi=2,Pa=0,Mr=1,uv=2,fv=3,dv=4,ay=5,gs=100,sy=101,ry=102,oy=103,ly=104,cy=200,uy=201,fy=202,dy=203,Ad=204,Rd=205,hy=206,py=207,my=208,gy=209,vy=210,_y=211,xy=212,yy=213,Sy=214,My=0,Ey=1,by=2,Nc=3,Ty=4,Ay=5,Ry=6,Cy=7,r_=0,wy=1,Ny=2,za=0,Dy=1,Uy=2,Ly=3,Oy=4,Py=5,zy=6,Iy=7,o_=300,Tr=301,Ar=302,Cd=303,wd=304,zc=306,Nd=1e3,_s=1001,Dd=1002,ai=1003,By=1004,tc=1005,pi=1006,Jf=1007,xs=1008,$i=1009,l_=1010,c_=1011,Bo=1012,lh=1013,Ss=1014,Ki=1015,jo=1016,ch=1017,uh=1018,Rr=1020,u_=35902,f_=1021,d_=1022,mi=1023,h_=1024,p_=1025,Er=1026,Cr=1027,m_=1028,fh=1029,g_=1030,dh=1031,hh=1033,bc=33776,Tc=33777,Ac=33778,Rc=33779,Ud=35840,Ld=35841,Od=35842,Pd=35843,zd=36196,Id=37492,Bd=37496,jd=37808,Fd=37809,Hd=37810,Gd=37811,Vd=37812,kd=37813,Xd=37814,Wd=37815,qd=37816,Yd=37817,Zd=37818,Kd=37819,Qd=37820,Jd=37821,Cc=36492,$d=36494,eh=36495,v_=36283,th=36284,nh=36285,ih=36286,jy=3200,Fy=3201,Hy=0,Gy=1,Oa="",Mi="srgb",Ba="srgb-linear",ph="display-p3",Ic="display-p3-linear",Dc="linear",jt="srgb",Uc="rec709",Lc="p3",ar=7680,hv=519,Vy=512,ky=513,Xy=514,__=515,Wy=516,qy=517,Yy=518,Zy=519,pv=35044,mv="300 es",Qi=2e3,Oc=2001;class Nr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,ah=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function Pn(o,t,i){return Math.max(t,Math.min(i,o))}function Ky(o,t){return(o%t+t)%t}function ed(o,t,i){return(1-i)*o+i*t}function No(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,i=0){Tt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-t.x,h=this.y-t.y;return this.x=f*s-h*l+t.x,this.y=f*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(t,i,s,l,f,h,p,g,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,f,h,p,g,m)}set(t,i,s,l,f,h,p,g,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=f,_[5]=g,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,f=this.elements,h=s[0],p=s[3],g=s[6],m=s[1],_=s[4],y=s[7],S=s[2],E=s[5],A=s[8],w=l[0],M=l[3],x=l[6],B=l[1],N=l[4],z=l[7],ie=l[2],H=l[5],P=l[8];return f[0]=h*w+p*B+g*ie,f[3]=h*M+p*N+g*H,f[6]=h*x+p*z+g*P,f[1]=m*w+_*B+y*ie,f[4]=m*M+_*N+y*H,f[7]=m*x+_*z+y*P,f[2]=S*w+E*B+A*ie,f[5]=S*M+E*N+A*H,f[8]=S*x+E*z+A*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],f=t[3],h=t[4],p=t[5],g=t[6],m=t[7],_=t[8];return i*h*_-i*p*m-s*f*_+s*p*g+l*f*m-l*h*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],f=t[3],h=t[4],p=t[5],g=t[6],m=t[7],_=t[8],y=_*h-p*m,S=p*g-_*f,E=m*f-h*g,A=i*y+s*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(l*m-_*s)*w,t[2]=(p*s-l*h)*w,t[3]=S*w,t[4]=(_*i-l*g)*w,t[5]=(l*f-p*i)*w,t[6]=E*w,t[7]=(s*g-m*i)*w,t[8]=(h*i-s*f)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,f,h,p){const g=Math.cos(f),m=Math.sin(f);return this.set(s*g,s*m,-s*(g*h+m*p)+h+t,-l*m,l*g,-l*(-m*h+g*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(td.makeScale(t,i)),this}rotate(t){return this.premultiply(td.makeRotation(-t)),this}translate(t,i){return this.premultiply(td.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const td=new ot;function x_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Qy(){const o=Pc("canvas");return o.style.display="block",o}const gv={};function Io(o){o in gv||(gv[o]=!0,console.warn(o))}function Jy(o,t,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const vv=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_v=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Ba]:{transfer:Dc,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Mi]:{transfer:jt,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ic]:{transfer:Dc,primaries:Lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(_v),fromReference:o=>o.applyMatrix3(vv)},[ph]:{transfer:jt,primaries:Lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(_v),fromReference:o=>o.applyMatrix3(vv).convertLinearToSRGB()}},$y=new Set([Ba,Ic]),bt={enabled:!0,_workingColorSpace:Ba,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!$y.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const s=Do[t].toReference,l=Do[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Do[o].primaries},getTransfer:function(o){return o===Oa?Dc:Do[o].transfer},getLuminanceCoefficients:function(o,t=this._workingColorSpace){return o.fromArray(Do[t].luminanceCoefficients)}};function br(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function nd(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class eS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{sr===void 0&&(sr=Pc("canvas")),sr.width=t.width,sr.height=t.height;const s=sr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=sr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=br(f[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(br(i[s]/255)*255):i[s]=br(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tS=0;class y_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?f.push(id(l[h].image)):f.push(id(l[h]))}else f=id(l);s.url=f}return i||(t.images[this.uuid]=s),s}}function id(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?eS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;class In extends Nr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=_s,l=_s,f=pi,h=xs,p=mi,g=$i,m=In.DEFAULT_ANISOTROPY,_=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Fo(),this.name="",this.source=new y_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==o_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nd:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case Dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nd:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case Dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=o_;In.DEFAULT_ANISOTROPY=1;class dn{constructor(t=0,i=0,s=0,l=1){dn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,f=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*f,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,f;const g=t.elements,m=g[0],_=g[4],y=g[8],S=g[1],E=g[5],A=g[9],w=g[2],M=g[6],x=g[10];if(Math.abs(_-S)<.01&&Math.abs(y-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(y+w)<.1&&Math.abs(A+M)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,z=(E+1)/2,ie=(x+1)/2,H=(_+S)/4,P=(y+w)/4,J=(A+M)/4;return N>z&&N>ie?N<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(N),l=H/s,f=P/s):z>ie?z<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(z),s=H/l,f=J/l):ie<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(ie),s=P/f,l=J/f),this.set(s,l,f,i),this}let B=Math.sqrt((M-A)*(M-A)+(y-w)*(y-w)+(S-_)*(S-_));return Math.abs(B)<.001&&(B=1),this.x=(M-A)/B,this.y=(y-w)/B,this.z=(S-_)/B,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends Nr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new dn(0,0,t,i),this.scissorTest=!1,this.viewport=new dn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new In(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let p=0;p<h;p++)this.textures[p]=f.clone(),this.textures[p].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new y_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends iS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class S_ extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aS extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,f,h,p){let g=s[l+0],m=s[l+1],_=s[l+2],y=s[l+3];const S=f[h+0],E=f[h+1],A=f[h+2],w=f[h+3];if(p===0){t[i+0]=g,t[i+1]=m,t[i+2]=_,t[i+3]=y;return}if(p===1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=w;return}if(y!==w||g!==S||m!==E||_!==A){let M=1-p;const x=g*S+m*E+_*A+y*w,B=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const ie=Math.sqrt(N),H=Math.atan2(ie,x*B);M=Math.sin(M*H)/ie,p=Math.sin(p*H)/ie}const z=p*B;if(g=g*M+S*z,m=m*M+E*z,_=_*M+A*z,y=y*M+w*z,M===1-p){const ie=1/Math.sqrt(g*g+m*m+_*_+y*y);g*=ie,m*=ie,_*=ie,y*=ie}}t[i]=g,t[i+1]=m,t[i+2]=_,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,f,h){const p=s[l],g=s[l+1],m=s[l+2],_=s[l+3],y=f[h],S=f[h+1],E=f[h+2],A=f[h+3];return t[i]=p*A+_*y+g*E-m*S,t[i+1]=g*A+_*S+m*y-p*E,t[i+2]=m*A+_*E+p*S-g*y,t[i+3]=_*A-p*y-g*S-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,f=t._z,h=t._order,p=Math.cos,g=Math.sin,m=p(s/2),_=p(l/2),y=p(f/2),S=g(s/2),E=g(l/2),A=g(f/2);switch(h){case"XYZ":this._x=S*_*y+m*E*A,this._y=m*E*y-S*_*A,this._z=m*_*A+S*E*y,this._w=m*_*y-S*E*A;break;case"YXZ":this._x=S*_*y+m*E*A,this._y=m*E*y-S*_*A,this._z=m*_*A-S*E*y,this._w=m*_*y+S*E*A;break;case"ZXY":this._x=S*_*y-m*E*A,this._y=m*E*y+S*_*A,this._z=m*_*A+S*E*y,this._w=m*_*y-S*E*A;break;case"ZYX":this._x=S*_*y-m*E*A,this._y=m*E*y+S*_*A,this._z=m*_*A-S*E*y,this._w=m*_*y+S*E*A;break;case"YZX":this._x=S*_*y+m*E*A,this._y=m*E*y+S*_*A,this._z=m*_*A-S*E*y,this._w=m*_*y-S*E*A;break;case"XZY":this._x=S*_*y-m*E*A,this._y=m*E*y-S*_*A,this._z=m*_*A+S*E*y,this._w=m*_*y+S*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],f=i[8],h=i[1],p=i[5],g=i[9],m=i[2],_=i[6],y=i[10],S=s+p+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-g)*E,this._y=(f-m)*E,this._z=(h-l)*E}else if(s>p&&s>y){const E=2*Math.sqrt(1+s-p-y);this._w=(_-g)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(f+m)/E}else if(p>y){const E=2*Math.sqrt(1+p-s-y);this._w=(f-m)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(g+_)/E}else{const E=2*Math.sqrt(1+y-s-p);this._w=(h-l)/E,this._x=(f+m)/E,this._y=(g+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,f=t._z,h=t._w,p=i._x,g=i._y,m=i._z,_=i._w;return this._x=s*_+h*p+l*m-f*g,this._y=l*_+h*g+f*p-s*m,this._z=f*_+h*m+s*g-l*p,this._w=h*_-s*p-l*g-f*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,f=this._z,h=this._w;let p=h*t._w+s*t._x+l*t._y+f*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=h,this._x=s,this._y=l,this._z=f,this;const g=1-p*p;if(g<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const m=Math.sqrt(g),_=Math.atan2(m,p),y=Math.sin((1-i)*_)/m,S=Math.sin(i*_)/m;return this._w=h*y+this._w*S,this._x=s*y+this._x*S,this._y=l*y+this._y*S,this._z=f*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(xv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(xv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,f=t.elements,h=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,f=t.x,h=t.y,p=t.z,g=t.w,m=2*(h*l-p*s),_=2*(p*i-f*l),y=2*(f*s-h*i);return this.x=i+g*m+h*y-p*_,this.y=s+g*_+p*m-f*y,this.z=l+g*y+f*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,f=t.z,h=i.x,p=i.y,g=i.z;return this.x=l*g-f*p,this.y=f*h-s*g,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ad.copy(this).projectOnVector(t),this.sub(ad)}reflect(t){return this.sub(ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new re,xv=new Ho;class Go{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=f.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,ui):ui.fromBufferAttribute(f,h),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),nc.copy(s.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}const l=t.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),ic.subVectors(this.max,Uo),rr.subVectors(t.a,Uo),or.subVectors(t.b,Uo),lr.subVectors(t.c,Uo),Ca.subVectors(or,rr),wa.subVectors(lr,or),is.subVectors(rr,lr);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-is.z,is.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,is.z,0,-is.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-is.y,is.x,0];return!sd(i,rr,or,lr,ic)||(i=[1,0,0,0,1,0,0,0,1],!sd(i,rr,or,lr,ic))?!1:(ac.crossVectors(Ca,wa),i=[ac.x,ac.y,ac.z],sd(i,rr,or,lr,ic))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ki=[new re,new re,new re,new re,new re,new re,new re,new re],ui=new re,nc=new Go,rr=new re,or=new re,lr=new re,Ca=new re,wa=new re,is=new re,Uo=new re,ic=new re,ac=new re,as=new re;function sd(o,t,i,s,l){for(let f=0,h=o.length-3;f<=h;f+=3){as.fromArray(o,f);const p=l.x*Math.abs(as.x)+l.y*Math.abs(as.y)+l.z*Math.abs(as.z),g=t.dot(as),m=i.dot(as),_=s.dot(as);if(Math.max(-Math.max(g,m,_),Math.min(g,m,_))>p)return!1}return!0}const sS=new Go,Lo=new re,rd=new re;class mh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):sS.setFromPoints(t).getCenter(s);let l=0;for(let f=0,h=t.length;f<h;f++)l=Math.max(l,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(rd)),this.expandByPoint(Lo.copy(t.center).sub(rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new re,od=new re,sc=new re,Na=new re,ld=new re,rc=new re,cd=new re;class rS{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Xi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,i),Xi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){od.copy(t).add(i).multiplyScalar(.5),sc.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(od);const f=t.distanceTo(i)*.5,h=-this.direction.dot(sc),p=Na.dot(this.direction),g=-Na.dot(sc),m=Na.lengthSq(),_=Math.abs(1-h*h);let y,S,E,A;if(_>0)if(y=h*g-p,S=h*p-g,A=f*_,y>=0)if(S>=-A)if(S<=A){const w=1/_;y*=w,S*=w,E=y*(y+h*S+2*p)+S*(h*y+S+2*g)+m}else S=f,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;else S=-f,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;else S<=-A?(y=Math.max(0,-(-h*f+p)),S=y>0?-f:Math.min(Math.max(-f,-g),f),E=-y*y+S*(S+2*g)+m):S<=A?(y=0,S=Math.min(Math.max(-f,-g),f),E=S*(S+2*g)+m):(y=Math.max(0,-(h*f+p)),S=y>0?f:Math.min(Math.max(-f,-g),f),E=-y*y+S*(S+2*g)+m);else S=h>0?-f:f,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(od).addScaledVector(sc,S),E}intersectSphere(t,i){Xi.subVectors(t.center,this.origin);const s=Xi.dot(this.direction),l=Xi.dot(Xi)-s*s,f=t.radius*t.radius;if(l>f)return null;const h=Math.sqrt(f-l),p=s-h,g=s+h;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,f,h,p,g;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(s=(t.min.x-S.x)*m,l=(t.max.x-S.x)*m):(s=(t.max.x-S.x)*m,l=(t.min.x-S.x)*m),_>=0?(f=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(f=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||f>l||((f>s||isNaN(s))&&(s=f),(h<l||isNaN(l))&&(l=h),y>=0?(p=(t.min.z-S.z)*y,g=(t.max.z-S.z)*y):(p=(t.max.z-S.z)*y,g=(t.min.z-S.z)*y),s>g||p>l)||((p>s||s!==s)&&(s=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,i,s,l,f){ld.subVectors(i,t),rc.subVectors(s,t),cd.crossVectors(ld,rc);let h=this.direction.dot(cd),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Na.subVectors(this.origin,t);const g=p*this.direction.dot(rc.crossVectors(Na,rc));if(g<0)return null;const m=p*this.direction.dot(ld.cross(Na));if(m<0||g+m>h)return null;const _=-p*Na.dot(cd);return _<0?null:this.at(_/h,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,i,s,l,f,h,p,g,m,_,y,S,E,A,w,M){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,f,h,p,g,m,_,y,S,E,A,w,M)}set(t,i,s,l,f,h,p,g,m,_,y,S,E,A,w,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=f,x[5]=h,x[9]=p,x[13]=g,x[2]=m,x[6]=_,x[10]=y,x[14]=S,x[3]=E,x[7]=A,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/cr.setFromMatrixColumn(t,0).length(),f=1/cr.setFromMatrixColumn(t,1).length(),h=1/cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,f=t.z,h=Math.cos(s),p=Math.sin(s),g=Math.cos(l),m=Math.sin(l),_=Math.cos(f),y=Math.sin(f);if(t.order==="XYZ"){const S=h*_,E=h*y,A=p*_,w=p*y;i[0]=g*_,i[4]=-g*y,i[8]=m,i[1]=E+A*m,i[5]=S-w*m,i[9]=-p*g,i[2]=w-S*m,i[6]=A+E*m,i[10]=h*g}else if(t.order==="YXZ"){const S=g*_,E=g*y,A=m*_,w=m*y;i[0]=S+w*p,i[4]=A*p-E,i[8]=h*m,i[1]=h*y,i[5]=h*_,i[9]=-p,i[2]=E*p-A,i[6]=w+S*p,i[10]=h*g}else if(t.order==="ZXY"){const S=g*_,E=g*y,A=m*_,w=m*y;i[0]=S-w*p,i[4]=-h*y,i[8]=A+E*p,i[1]=E+A*p,i[5]=h*_,i[9]=w-S*p,i[2]=-h*m,i[6]=p,i[10]=h*g}else if(t.order==="ZYX"){const S=h*_,E=h*y,A=p*_,w=p*y;i[0]=g*_,i[4]=A*m-E,i[8]=S*m+w,i[1]=g*y,i[5]=w*m+S,i[9]=E*m-A,i[2]=-m,i[6]=p*g,i[10]=h*g}else if(t.order==="YZX"){const S=h*g,E=h*m,A=p*g,w=p*m;i[0]=g*_,i[4]=w-S*y,i[8]=A*y+E,i[1]=y,i[5]=h*_,i[9]=-p*_,i[2]=-m*_,i[6]=E*y+A,i[10]=S-w*y}else if(t.order==="XZY"){const S=h*g,E=h*m,A=p*g,w=p*m;i[0]=g*_,i[4]=-y,i[8]=m*_,i[1]=S*y+w,i[5]=h*_,i[9]=E*y-A,i[2]=A*y-E,i[6]=p*_,i[10]=w*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oS,t,lS)}lookAt(t,i,s){const l=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Da.crossVectors(s,Wn),Da.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Da.crossVectors(s,Wn)),Da.normalize(),oc.crossVectors(Wn,Da),l[0]=Da.x,l[4]=oc.x,l[8]=Wn.x,l[1]=Da.y,l[5]=oc.y,l[9]=Wn.y,l[2]=Da.z,l[6]=oc.z,l[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,f=this.elements,h=s[0],p=s[4],g=s[8],m=s[12],_=s[1],y=s[5],S=s[9],E=s[13],A=s[2],w=s[6],M=s[10],x=s[14],B=s[3],N=s[7],z=s[11],ie=s[15],H=l[0],P=l[4],J=l[8],D=l[12],C=l[1],G=l[5],ce=l[9],oe=l[13],me=l[2],de=l[6],L=l[10],W=l[14],Z=l[3],Me=l[7],be=l[11],U=l[15];return f[0]=h*H+p*C+g*me+m*Z,f[4]=h*P+p*G+g*de+m*Me,f[8]=h*J+p*ce+g*L+m*be,f[12]=h*D+p*oe+g*W+m*U,f[1]=_*H+y*C+S*me+E*Z,f[5]=_*P+y*G+S*de+E*Me,f[9]=_*J+y*ce+S*L+E*be,f[13]=_*D+y*oe+S*W+E*U,f[2]=A*H+w*C+M*me+x*Z,f[6]=A*P+w*G+M*de+x*Me,f[10]=A*J+w*ce+M*L+x*be,f[14]=A*D+w*oe+M*W+x*U,f[3]=B*H+N*C+z*me+ie*Z,f[7]=B*P+N*G+z*de+ie*Me,f[11]=B*J+N*ce+z*L+ie*be,f[15]=B*D+N*oe+z*W+ie*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],f=t[12],h=t[1],p=t[5],g=t[9],m=t[13],_=t[2],y=t[6],S=t[10],E=t[14],A=t[3],w=t[7],M=t[11],x=t[15];return A*(+f*g*y-l*m*y-f*p*S+s*m*S+l*p*E-s*g*E)+w*(+i*g*E-i*m*S+f*h*S-l*h*E+l*m*_-f*g*_)+M*(+i*m*y-i*p*E-f*h*y+s*h*E+f*p*_-s*m*_)+x*(-l*p*_-i*g*y+i*p*S+l*h*y-s*h*S+s*g*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],f=t[3],h=t[4],p=t[5],g=t[6],m=t[7],_=t[8],y=t[9],S=t[10],E=t[11],A=t[12],w=t[13],M=t[14],x=t[15],B=y*M*m-w*S*m+w*g*E-p*M*E-y*g*x+p*S*x,N=A*S*m-_*M*m-A*g*E+h*M*E+_*g*x-h*S*x,z=_*w*m-A*y*m+A*p*E-h*w*E-_*p*x+h*y*x,ie=A*y*g-_*w*g-A*p*S+h*w*S+_*p*M-h*y*M,H=i*B+s*N+l*z+f*ie;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return t[0]=B*P,t[1]=(w*S*f-y*M*f-w*l*E+s*M*E+y*l*x-s*S*x)*P,t[2]=(p*M*f-w*g*f+w*l*m-s*M*m-p*l*x+s*g*x)*P,t[3]=(y*g*f-p*S*f-y*l*m+s*S*m+p*l*E-s*g*E)*P,t[4]=N*P,t[5]=(_*M*f-A*S*f+A*l*E-i*M*E-_*l*x+i*S*x)*P,t[6]=(A*g*f-h*M*f-A*l*m+i*M*m+h*l*x-i*g*x)*P,t[7]=(h*S*f-_*g*f+_*l*m-i*S*m-h*l*E+i*g*E)*P,t[8]=z*P,t[9]=(A*y*f-_*w*f-A*s*E+i*w*E+_*s*x-i*y*x)*P,t[10]=(h*w*f-A*p*f+A*s*m-i*w*m-h*s*x+i*p*x)*P,t[11]=(_*p*f-h*y*f-_*s*m+i*y*m+h*s*E-i*p*E)*P,t[12]=ie*P,t[13]=(_*w*l-A*y*l+A*s*S-i*w*S-_*s*M+i*y*M)*P,t[14]=(A*p*l-h*w*l-A*s*g+i*w*g+h*s*M-i*p*M)*P,t[15]=(h*y*l-_*p*l+_*s*g-i*y*g-h*s*S+i*p*S)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,f=t.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,h=t.x,p=t.y,g=t.z,m=f*h,_=f*p;return this.set(m*h+s,m*p-l*g,m*g+l*p,0,m*p+l*g,_*p+s,_*g-l*h,0,m*g-l*p,_*g+l*h,f*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,f,h){return this.set(1,s,f,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,f=i._x,h=i._y,p=i._z,g=i._w,m=f+f,_=h+h,y=p+p,S=f*m,E=f*_,A=f*y,w=h*_,M=h*y,x=p*y,B=g*m,N=g*_,z=g*y,ie=s.x,H=s.y,P=s.z;return l[0]=(1-(w+x))*ie,l[1]=(E+z)*ie,l[2]=(A-N)*ie,l[3]=0,l[4]=(E-z)*H,l[5]=(1-(S+x))*H,l[6]=(M+B)*H,l[7]=0,l[8]=(A+N)*P,l[9]=(M-B)*P,l[10]=(1-(S+w))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let f=cr.set(l[0],l[1],l[2]).length();const h=cr.set(l[4],l[5],l[6]).length(),p=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),t.x=l[12],t.y=l[13],t.z=l[14],fi.copy(this);const m=1/f,_=1/h,y=1/p;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=_,fi.elements[5]*=_,fi.elements[6]*=_,fi.elements[8]*=y,fi.elements[9]*=y,fi.elements[10]*=y,i.setFromRotationMatrix(fi),s.x=f,s.y=h,s.z=p,this}makePerspective(t,i,s,l,f,h,p=Qi){const g=this.elements,m=2*f/(i-t),_=2*f/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(p===Qi)E=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(p===Oc)E=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return g[0]=m,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=_,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=E,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,s,l,f,h,p=Qi){const g=this.elements,m=1/(i-t),_=1/(s-l),y=1/(h-f),S=(i+t)*m,E=(s+l)*_;let A,w;if(p===Qi)A=(h+f)*y,w=-2*y;else if(p===Oc)A=f*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return g[0]=2*m,g[4]=0,g[8]=0,g[12]=-S,g[1]=0,g[5]=2*_,g[9]=0,g[13]=-E,g[2]=0,g[6]=0,g[10]=w,g[14]=-A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const cr=new re,fi=new on,oS=new re(0,0,0),lS=new re(1,1,1),Da=new re,oc=new re,Wn=new re,yv=new on,Sv=new Ho;class ea{constructor(t=0,i=0,s=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,f=l[0],h=l[4],p=l[8],g=l[1],m=l[5],_=l[9],y=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-y,f),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Pn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,f)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(p,f)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return yv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class M_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cS=0;const Mv=new re,ur=new Ho,Wi=new on,lc=new re,Oo=new re,uS=new re,fS=new Ho,Ev=new re(1,0,0),bv=new re(0,1,0),Tv=new re(0,0,1),Av={type:"added"},dS={type:"removed"},fr={type:"childadded",child:null},ud={type:"childremoved",child:null};class Yn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new re,i=new ea,s=new Ho,l=new re(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ot}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(Ev,t)}rotateY(t){return this.rotateOnAxis(bv,t)}rotateZ(t){return this.rotateOnAxis(Tv,t)}translateOnAxis(t,i){return Mv.copy(t).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ev,t)}translateY(t){return this.translateOnAxis(bv,t)}translateZ(t){return this.translateOnAxis(Tv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?lc.copy(t):lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Oo,lc,this.up):Wi.lookAt(lc,Oo,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(Wi),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Av),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dS),ud.child=t,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Av),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,uS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,fS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function f(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,_=g.length;m<_;m++){const y=g[m];f(t.shapes,y)}else f(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(f(t.materials,this.material[g]));l.material=p}else l.material=f(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(f(t.animations,g))}}if(i){const p=h(t.geometries),g=h(t.materials),m=h(t.textures),_=h(t.images),y=h(t.shapes),S=h(t.skeletons),E=h(t.animations),A=h(t.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(p){const g=[];for(const m in p){const _=p[m];delete _.metadata,g.push(_)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new re(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new re,qi=new re,fd=new re,Yi=new re,dr=new re,hr=new re,Rv=new re,dd=new re,hd=new re,pd=new re;class Ti{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),di.subVectors(t,i),l.cross(di);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(t,i,s,l,f){di.subVectors(l,i),qi.subVectors(s,i),fd.subVectors(t,i);const h=di.dot(di),p=di.dot(qi),g=di.dot(fd),m=qi.dot(qi),_=qi.dot(fd),y=h*m-p*p;if(y===0)return f.set(0,0,0),null;const S=1/y,E=(m*g-p*_)*S,A=(h*_-p*g)*S;return f.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,i,s,l,f,h,p,g){return this.getBarycoord(t,i,s,l,Yi)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Yi.x),g.addScaledVector(h,Yi.y),g.addScaledVector(p,Yi.z),g)}static isFrontFacing(t,i,s,l){return di.subVectors(s,i),qi.subVectors(t,i),di.cross(qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,f){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,f)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,f=this.c;let h,p;dr.subVectors(l,s),hr.subVectors(f,s),dd.subVectors(t,s);const g=dr.dot(dd),m=hr.dot(dd);if(g<=0&&m<=0)return i.copy(s);hd.subVectors(t,l);const _=dr.dot(hd),y=hr.dot(hd);if(_>=0&&y<=_)return i.copy(l);const S=g*y-_*m;if(S<=0&&g>=0&&_<=0)return h=g/(g-_),i.copy(s).addScaledVector(dr,h);pd.subVectors(t,f);const E=dr.dot(pd),A=hr.dot(pd);if(A>=0&&E<=A)return i.copy(f);const w=E*m-g*A;if(w<=0&&m>=0&&A<=0)return p=m/(m-A),i.copy(s).addScaledVector(hr,p);const M=_*A-E*y;if(M<=0&&y-_>=0&&E-A>=0)return Rv.subVectors(f,l),p=(y-_)/(y-_+(E-A)),i.copy(l).addScaledVector(Rv,p);const x=1/(M+w+S);return h=w*x,p=S*x,i.copy(s).addScaledVector(dr,h).addScaledVector(hr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ua={h:0,s:0,l:0},cc={h:0,s:0,l:0};function md(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class wt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=bt.workingColorSpace){return this.r=t,this.g=i,this.b=s,bt.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=bt.workingColorSpace){if(t=Ky(t,1),i=Pn(i,0,1),s=Pn(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=md(h,f,t+1/3),this.g=md(h,f,t),this.b=md(h,f,t-1/3)}return bt.toWorkingColorSpace(this,l),this}setStyle(t,i=Mi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=E_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}copyLinearToSRGB(t){return this.r=nd(t.r),this.g=nd(t.g),this.b=nd(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return bt.fromWorkingColorSpace(bn.copy(this),t),Math.round(Pn(bn.r*255,0,255))*65536+Math.round(Pn(bn.g*255,0,255))*256+Math.round(Pn(bn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,l=bn.g,f=bn.b,h=Math.max(s,l,f),p=Math.min(s,l,f);let g,m;const _=(p+h)/2;if(p===h)g=0,m=0;else{const y=h-p;switch(m=_<=.5?y/(h+p):y/(2-h-p),h){case s:g=(l-f)/y+(l<f?6:0);break;case l:g=(f-s)/y+2;break;case f:g=(s-l)/y+4;break}g/=6}return t.h=g,t.s=m,t.l=_,t}getRGB(t,i=bt.workingColorSpace){return bt.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Mi){bt.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,l=bn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ua),this.setHSL(Ua.h+t,Ua.s+i,Ua.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ua),t.getHSL(cc);const s=ed(Ua.h,cc.h,i),l=ed(Ua.s,cc.s,i),f=ed(Ua.l,cc.l,i);return this.setHSL(s,l,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new wt;wt.NAMES=E_;let hS=0;class Vo extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Mr,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==Ia&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==Rd&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}if(i){const f=l(t.textures),h=l(t.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class b_ extends Vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new re,uc=new Tt;class gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=pv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Io("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)uc.fromBufferAttribute(this,i),uc.applyMatrix3(t),this.setXY(i,uc.x,uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=On(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,f){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array),f=On(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pv&&(t.usage=this.usage),t}}class T_ extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class A_ extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ys extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let pS=0;const ii=new on,gd=new Yn,pr=new re,qn=new Go,Po=new Go,fn=new re;class ja extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(x_(t)?A_:T_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ot().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,i,s){return ii.makeTranslation(t,i,s),this.applyMatrix4(ii),this}scale(t,i,s){return ii.makeScale(t,i,s),this.applyMatrix4(ii),this}lookAt(t){return gd.lookAt(t),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const i=[];for(let s=0,l=t.length;s<l;s++){const f=t[s];i.push(f.x,f.y,f.z||0)}return this.setAttribute("position",new ys(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];qn.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),i)for(let f=0,h=i.length;f<h;f++){const p=i[f];Po.setFromBufferAttribute(p),this.morphTargetsRelative?(fn.addVectors(qn.min,Po.min),qn.expandByPoint(fn),fn.addVectors(qn.max,Po.max),qn.expandByPoint(fn)):(qn.expandByPoint(Po.min),qn.expandByPoint(Po.max))}qn.getCenter(s);let l=0;for(let f=0,h=t.count;f<h;f++)fn.fromBufferAttribute(t,f),l=Math.max(l,s.distanceToSquared(fn));if(i)for(let f=0,h=i.length;f<h;f++){const p=i[f],g=this.morphTargetsRelative;for(let m=0,_=p.count;m<_;m++)fn.fromBufferAttribute(p,m),g&&(pr.fromBufferAttribute(t,m),fn.add(pr)),l=Math.max(l,s.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],g=[];for(let J=0;J<s.count;J++)p[J]=new re,g[J]=new re;const m=new re,_=new re,y=new re,S=new Tt,E=new Tt,A=new Tt,w=new re,M=new re;function x(J,D,C){m.fromBufferAttribute(s,J),_.fromBufferAttribute(s,D),y.fromBufferAttribute(s,C),S.fromBufferAttribute(f,J),E.fromBufferAttribute(f,D),A.fromBufferAttribute(f,C),_.sub(m),y.sub(m),E.sub(S),A.sub(S);const G=1/(E.x*A.y-A.x*E.y);isFinite(G)&&(w.copy(_).multiplyScalar(A.y).addScaledVector(y,-E.y).multiplyScalar(G),M.copy(y).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(G),p[J].add(w),p[D].add(w),p[C].add(w),g[J].add(M),g[D].add(M),g[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let J=0,D=B.length;J<D;++J){const C=B[J],G=C.start,ce=C.count;for(let oe=G,me=G+ce;oe<me;oe+=3)x(t.getX(oe+0),t.getX(oe+1),t.getX(oe+2))}const N=new re,z=new re,ie=new re,H=new re;function P(J){ie.fromBufferAttribute(l,J),H.copy(ie);const D=p[J];N.copy(D),N.sub(ie.multiplyScalar(ie.dot(D))).normalize(),z.crossVectors(H,D);const G=z.dot(g[J])<0?-1:1;h.setXYZW(J,N.x,N.y,N.z,G)}for(let J=0,D=B.length;J<D;++J){const C=B[J],G=C.start,ce=C.count;for(let oe=G,me=G+ce;oe<me;oe+=3)P(t.getX(oe+0)),P(t.getX(oe+1)),P(t.getX(oe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new re,f=new re,h=new re,p=new re,g=new re,m=new re,_=new re,y=new re;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),w=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,A),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,f),y.subVectors(l,f),_.cross(y),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),p.add(_),g.add(_),m.add(_),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,f),y.subVectors(l,f),_.cross(y),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)fn.fromBufferAttribute(t,i),fn.normalize(),t.setXYZ(i,fn.x,fn.y,fn.z)}toNonIndexed(){function t(p,g){const m=p.array,_=p.itemSize,y=p.normalized,S=new m.constructor(g.length*_);let E=0,A=0;for(let w=0,M=g.length;w<M;w++){p.isInterleavedBufferAttribute?E=g[w]*p.data.stride+p.offset:E=g[w]*_;for(let x=0;x<_;x++)S[A++]=m[E++]}return new gi(S,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ja,s=this.index.array,l=this.attributes;for(const p in l){const g=l[p],m=t(g,s);i.setAttribute(p,m)}const f=this.morphAttributes;for(const p in f){const g=[],m=f[p];for(let _=0,y=m.length;_<y;_++){const S=m[_],E=t(S,s);g.push(E)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,g=h.length;p<g;p++){const m=h[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];t.data.attributes[g]=m.toJSON(t.data)}const l={};let f=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],_=[];for(let y=0,S=m.length;y<S;y++){const E=m[y];_.push(E.toJSON(t.data))}_.length>0&&(l[g]=_,f=!0)}f&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const f=t.morphAttributes;for(const m in f){const _=[],y=f[m];for(let S=0,E=y.length;S<E;S++)_.push(y[S].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cv=new on,ss=new rS,fc=new mh,wv=new re,mr=new re,gr=new re,vr=new re,vd=new re,dc=new re,hc=new Tt,pc=new Tt,mc=new Tt,Nv=new re,Dv=new re,Uv=new re,gc=new re,vc=new re;class Ai extends Yn{constructor(t=new ja,i=new b_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const p=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(f&&p){dc.set(0,0,0);for(let g=0,m=f.length;g<m;g++){const _=p[g],y=f[g];_!==0&&(vd.fromBufferAttribute(y,t),h?dc.addScaledVector(vd,_):dc.addScaledVector(vd.sub(i),_))}i.add(dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(f),ss.copy(t.ray).recast(t.near),!(fc.containsPoint(ss.origin)===!1&&(ss.intersectSphere(fc,wv)===null||ss.origin.distanceToSquared(wv)>(t.far-t.near)**2))&&(Cv.copy(f).invert(),ss.copy(t.ray).applyMatrix4(Cv),!(s.boundingBox!==null&&ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ss)))}_computeIntersections(t,i,s){let l;const f=this.geometry,h=this.material,p=f.index,g=f.attributes.position,m=f.attributes.uv,_=f.attributes.uv1,y=f.attributes.normal,S=f.groups,E=f.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,w=S.length;A<w;A++){const M=S[A],x=h[M.materialIndex],B=Math.max(M.start,E.start),N=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let z=B,ie=N;z<ie;z+=3){const H=p.getX(z),P=p.getX(z+1),J=p.getX(z+2);l=_c(this,x,t,s,m,_,y,H,P,J),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let M=A,x=w;M<x;M+=3){const B=p.getX(M),N=p.getX(M+1),z=p.getX(M+2);l=_c(this,h,t,s,m,_,y,B,N,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let A=0,w=S.length;A<w;A++){const M=S[A],x=h[M.materialIndex],B=Math.max(M.start,E.start),N=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let z=B,ie=N;z<ie;z+=3){const H=z,P=z+1,J=z+2;l=_c(this,x,t,s,m,_,y,H,P,J),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),w=Math.min(g.count,E.start+E.count);for(let M=A,x=w;M<x;M+=3){const B=M,N=M+1,z=M+2;l=_c(this,h,t,s,m,_,y,B,N,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function mS(o,t,i,s,l,f,h,p){let g;if(t.side===zn?g=s.intersectTriangle(h,f,l,!0,p):g=s.intersectTriangle(l,f,h,t.side===Ia,p),g===null)return null;vc.copy(p),vc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(vc);return m<i.near||m>i.far?null:{distance:m,point:vc.clone(),object:o}}function _c(o,t,i,s,l,f,h,p,g,m){o.getVertexPosition(p,mr),o.getVertexPosition(g,gr),o.getVertexPosition(m,vr);const _=mS(o,t,i,s,mr,gr,vr,gc);if(_){l&&(hc.fromBufferAttribute(l,p),pc.fromBufferAttribute(l,g),mc.fromBufferAttribute(l,m),_.uv=Ti.getInterpolation(gc,mr,gr,vr,hc,pc,mc,new Tt)),f&&(hc.fromBufferAttribute(f,p),pc.fromBufferAttribute(f,g),mc.fromBufferAttribute(f,m),_.uv1=Ti.getInterpolation(gc,mr,gr,vr,hc,pc,mc,new Tt)),h&&(Nv.fromBufferAttribute(h,p),Dv.fromBufferAttribute(h,g),Uv.fromBufferAttribute(h,m),_.normal=Ti.getInterpolation(gc,mr,gr,vr,Nv,Dv,Uv,new re),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:p,b:g,c:m,normal:new re,materialIndex:0};Ti.getNormal(mr,gr,vr,y.normal),_.face=y}return _}class ko extends ja{constructor(t=1,i=1,s=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:h};const p=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const g=[],m=[],_=[],y=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,h,f,0),A("z","y","x",1,-1,s,i,-t,h,f,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,f,4),A("x","y","z",-1,-1,t,i,-s,l,f,5),this.setIndex(g),this.setAttribute("position",new ys(m,3)),this.setAttribute("normal",new ys(_,3)),this.setAttribute("uv",new ys(y,2));function A(w,M,x,B,N,z,ie,H,P,J,D){const C=z/P,G=ie/J,ce=z/2,oe=ie/2,me=H/2,de=P+1,L=J+1;let W=0,Z=0;const Me=new re;for(let be=0;be<L;be++){const U=be*G-oe;for(let ne=0;ne<de;ne++){const _e=ne*C-ce;Me[w]=_e*B,Me[M]=U*N,Me[x]=me,m.push(Me.x,Me.y,Me.z),Me[w]=0,Me[M]=0,Me[x]=H>0?1:-1,_.push(Me.x,Me.y,Me.z),y.push(ne/P),y.push(1-be/J),W+=1}}for(let be=0;be<J;be++)for(let U=0;U<P;U++){const ne=S+U+de*be,_e=S+U+de*(be+1),q=S+(U+1)+de*(be+1),le=S+(U+1)+de*be;g.push(ne,_e,le),g.push(_e,q,le),Z+=6}p.addGroup(E,Z,D),E+=Z,S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function An(o){const t={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)t[l]=s[l]}return t}function gS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function R_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const vS={clone:wr,merge:An};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends Vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=gS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class C_ extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Qi}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new re,Lv=new Tt,Ov=new Tt;class hi extends C_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ah*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ah*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-t/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(La.x,La.y).multiplyScalar(-t/La.z)}getViewSize(t,i){return this.getViewBounds(t,Lv,Ov),i.subVectors(Ov,Lv)}setViewOffset(t,i,s,l,f,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan($f*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,m=h.fullHeight;f+=h.offsetX*l/g,i-=h.offsetY*s/m,l*=h.width/g,s*=h.height/m}const p=this.filmOffset;p!==0&&(f+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,xr=1;class yS extends Yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(_r,xr,t,i);l.layers=this.layers,this.add(l);const f=new hi(_r,xr,t,i);f.layers=this.layers,this.add(f);const h=new hi(_r,xr,t,i);h.layers=this.layers,this.add(h);const p=new hi(_r,xr,t,i);p.layers=this.layers,this.add(p);const g=new hi(_r,xr,t,i);g.layers=this.layers,this.add(g);const m=new hi(_r,xr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,f,h,p,g]=i;for(const m of i)this.remove(m);if(t===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,h,p,g,m,_]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,f),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,p),t.setRenderTarget(s,3,l),t.render(i,g),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(y,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class w_ extends In{constructor(t,i,s,l,f,h,p,g,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Tr,super(t,i,s,l,f,h,p,g,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class SS extends Ms{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new w_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ko(5,5,5),f=new ta({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Pa});f.uniforms.tEquirect.value=i;const h=new Ai(l,f),p=i.minFilter;return i.minFilter===xs&&(i.minFilter=pi),new yS(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const f=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(f)}}const _d=new re,MS=new re,ES=new ot;class ps{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=_d.subVectors(s,i).cross(MS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(_d),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(t.start).addScaledVector(s,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ES.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new mh,xc=new re;class N_{constructor(t=new ps,i=new ps,s=new ps,l=new ps,f=new ps,h=new ps){this.planes=[t,i,s,l,f,h]}set(t,i,s,l,f,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(f),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Qi){const s=this.planes,l=t.elements,f=l[0],h=l[1],p=l[2],g=l[3],m=l[4],_=l[5],y=l[6],S=l[7],E=l[8],A=l[9],w=l[10],M=l[11],x=l[12],B=l[13],N=l[14],z=l[15];if(s[0].setComponents(g-f,S-m,M-E,z-x).normalize(),s[1].setComponents(g+f,S+m,M+E,z+x).normalize(),s[2].setComponents(g+h,S+_,M+A,z+B).normalize(),s[3].setComponents(g-h,S-_,M-A,z-B).normalize(),s[4].setComponents(g-p,S-y,M-w,z-N).normalize(),i===Qi)s[5].setComponents(g+p,S+y,M+w,z+N).normalize();else if(i===Oc)s[5].setComponents(p,y,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?t.max.x:t.min.x,xc.y=l.normal.y>0?t.max.y:t.min.y,xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D_(){let o=null,t=!1,i=null,s=null;function l(f,h){i(f,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function bS(o){const t=new WeakMap;function i(p,g){const m=p.array,_=p.usage,y=m.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,m,_),p.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,g,m){const _=g.array,y=g._updateRange,S=g.updateRanges;if(o.bindBuffer(m,p),y.count===-1&&S.length===0&&o.bufferSubData(m,0,_),S.length!==0){for(let E=0,A=S.length;E<A;E++){const w=S[E];o.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}g.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(m,y.offset*_.BYTES_PER_ELEMENT,_,y.offset,y.count),y.count=-1),g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(o.deleteBuffer(g.buffer),t.delete(p))}function h(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,p,g),m.version=p.version}}return{get:l,remove:f,update:h}}class Bc extends ja{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const f=t/2,h=i/2,p=Math.floor(s),g=Math.floor(l),m=p+1,_=g+1,y=t/p,S=i/g,E=[],A=[],w=[],M=[];for(let x=0;x<_;x++){const B=x*S-h;for(let N=0;N<m;N++){const z=N*y-f;A.push(z,-B,0),w.push(0,0,1),M.push(N/p),M.push(1-x/g)}}for(let x=0;x<g;x++)for(let B=0;B<p;B++){const N=B+m*x,z=B+m*(x+1),ie=B+1+m*(x+1),H=B+1+m*x;E.push(N,z,H),E.push(z,ie,H)}this.setIndex(E),this.setAttribute("position",new ys(A,3)),this.setAttribute("normal",new ys(w,3)),this.setAttribute("uv",new ys(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.width,t.height,t.widthSegments,t.heightSegments)}}var TS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,US=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:TS,alphahash_pars_fragment:AS,alphamap_fragment:RS,alphamap_pars_fragment:CS,alphatest_fragment:wS,alphatest_pars_fragment:NS,aomap_fragment:DS,aomap_pars_fragment:US,batching_pars_vertex:LS,batching_vertex:OS,begin_vertex:PS,beginnormal_vertex:zS,bsdfs:IS,iridescence_fragment:BS,bumpmap_pars_fragment:jS,clipping_planes_fragment:FS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:GS,clipping_planes_vertex:VS,color_fragment:kS,color_pars_fragment:XS,color_pars_vertex:WS,color_vertex:qS,common:YS,cube_uv_reflection_fragment:ZS,defaultnormal_vertex:KS,displacementmap_pars_vertex:QS,displacementmap_vertex:JS,emissivemap_fragment:$S,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:aM,envmap_pars_fragment:sM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:vM,envmap_vertex:oM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:hM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:xM,lights_phong_fragment:yM,lights_phong_pars_fragment:SM,lights_physical_fragment:MM,lights_physical_pars_fragment:EM,lights_fragment_begin:bM,lights_fragment_maps:TM,lights_fragment_end:AM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:NM,map_fragment:DM,map_pars_fragment:UM,map_particle_fragment:LM,map_particle_pars_fragment:OM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:zM,morphinstance_vertex:IM,morphcolor_vertex:BM,morphnormal_vertex:jM,morphtarget_pars_vertex:FM,morphtarget_vertex:HM,normal_fragment_begin:GM,normal_fragment_maps:VM,normal_pars_fragment:kM,normal_pars_vertex:XM,normal_vertex:WM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:QM,opaque_fragment:JM,packing:$M,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:dE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:EE,background_vert:bE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:CE,cube_frag:wE,depth_vert:NE,depth_frag:DE,distanceRGBA_vert:UE,distanceRGBA_frag:LE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:IE,meshbasic_vert:BE,meshbasic_frag:jE,meshlambert_vert:FE,meshlambert_frag:HE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:kE,meshnormal_frag:XE,meshphong_vert:WE,meshphong_frag:qE,meshphysical_vert:YE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:eb,shadow_frag:tb,sprite_vert:nb,sprite_frag:ib},Ue={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ei={basic:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:An([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:An([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:An([Ue.points,Ue.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:An([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:An([Ue.common,Ue.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:An([Ue.sprite,Ue.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:An([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:An([Ue.lights,Ue.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ei.physical={uniforms:An([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const yc={r:0,b:0,g:0},os=new ea,ab=new on;function sb(o,t,i,s,l,f,h){const p=new wt(0);let g=f===!0?0:1,m,_,y=null,S=0,E=null;function A(B){let N=B.isScene===!0?B.background:null;return N&&N.isTexture&&(N=(B.backgroundBlurriness>0?i:t).get(N)),N}function w(B){let N=!1;const z=A(B);z===null?x(p,g):z&&z.isColor&&(x(z,1),N=!0);const ie=o.xr.getEnvironmentBlendMode();ie==="additive"?s.buffers.color.setClear(0,0,0,1,h):ie==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,N){const z=A(N);z&&(z.isCubeTexture||z.mapping===zc)?(_===void 0&&(_=new Ai(new ko(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:wr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(ie,H,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),os.copy(N.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ab.makeRotationFromEuler(os)),_.material.toneMapped=bt.getTransfer(z.colorSpace)!==jt,(y!==z||S!==z.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,y=z,S=z.version,E=o.toneMapping),_.layers.enableAll(),B.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(m===void 0&&(m=new Ai(new Bc(2,2),new ta({name:"BackgroundMaterial",uniforms:wr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=z,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=bt.getTransfer(z.colorSpace)!==jt,z.matrixAutoUpdate===!0&&z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(z.matrix),(y!==z||S!==z.version||E!==o.toneMapping)&&(m.material.needsUpdate=!0,y=z,S=z.version,E=o.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function x(B,N){B.getRGB(yc,R_(o)),s.buffers.color.setClear(yc.r,yc.g,yc.b,N,h)}return{getClearColor:function(){return p},setClearColor:function(B,N=1){p.set(B),g=N,x(p,g)},getClearAlpha:function(){return g},setClearAlpha:function(B){g=B,x(p,g)},render:w,addToRenderList:M}}function rb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let f=l,h=!1;function p(C,G,ce,oe,me){let de=!1;const L=y(oe,ce,G);f!==L&&(f=L,m(f.object)),de=E(C,oe,ce,me),de&&A(C,oe,ce,me),me!==null&&t.update(me,o.ELEMENT_ARRAY_BUFFER),(de||h)&&(h=!1,z(C,G,ce,oe),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function g(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function y(C,G,ce){const oe=ce.wireframe===!0;let me=s[C.id];me===void 0&&(me={},s[C.id]=me);let de=me[G.id];de===void 0&&(de={},me[G.id]=de);let L=de[oe];return L===void 0&&(L=S(g()),de[oe]=L),L}function S(C){const G=[],ce=[],oe=[];for(let me=0;me<i;me++)G[me]=0,ce[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ce,attributeDivisors:oe,object:C,attributes:{},index:null}}function E(C,G,ce,oe){const me=f.attributes,de=G.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){const be=me[Z];let U=de[Z];if(U===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),be===void 0||be.attribute!==U||U&&be.data!==U.data)return!0;L++}return f.attributesNum!==L||f.index!==oe}function A(C,G,ce,oe){const me={},de=G.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){let be=de[Z];be===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const U={};U.attribute=be,be&&be.data&&(U.data=be.data),me[Z]=U,L++}f.attributes=me,f.attributesNum=L,f.index=oe}function w(){const C=f.newAttributes;for(let G=0,ce=C.length;G<ce;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const ce=f.newAttributes,oe=f.enabledAttributes,me=f.attributeDivisors;ce[C]=1,oe[C]===0&&(o.enableVertexAttribArray(C),oe[C]=1),me[C]!==G&&(o.vertexAttribDivisor(C,G),me[C]=G)}function B(){const C=f.newAttributes,G=f.enabledAttributes;for(let ce=0,oe=G.length;ce<oe;ce++)G[ce]!==C[ce]&&(o.disableVertexAttribArray(ce),G[ce]=0)}function N(C,G,ce,oe,me,de,L){L===!0?o.vertexAttribIPointer(C,G,ce,me,de):o.vertexAttribPointer(C,G,ce,oe,me,de)}function z(C,G,ce,oe){w();const me=oe.attributes,de=ce.getAttributes(),L=G.defaultAttributeValues;for(const W in de){const Z=de[W];if(Z.location>=0){let Me=me[W];if(Me===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const be=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const _e=ne.buffer,q=ne.type,le=ne.bytesPerElement,ye=q===o.INT||q===o.UNSIGNED_INT||Me.gpuType===lh;if(Me.isInterleavedBufferAttribute){const Ee=Me.data,He=Ee.stride,Fe=Me.offset;if(Ee.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)x(Z.location+nt,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let nt=0;nt<Z.locationSize;nt++)M(Z.location+nt);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let nt=0;nt<Z.locationSize;nt++)N(Z.location+nt,U/Z.locationSize,q,be,He*le,(Fe+U/Z.locationSize*nt)*le,ye)}else{if(Me.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)x(Z.location+Ee,Me.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)M(Z.location+Ee);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ee=0;Ee<Z.locationSize;Ee++)N(Z.location+Ee,U/Z.locationSize,q,be,U*le,U/Z.locationSize*Ee*le,ye)}}else if(L!==void 0){const be=L[W];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(Z.location,be);break;case 3:o.vertexAttrib3fv(Z.location,be);break;case 4:o.vertexAttrib4fv(Z.location,be);break;default:o.vertexAttrib1fv(Z.location,be)}}}}B()}function ie(){J();for(const C in s){const G=s[C];for(const ce in G){const oe=G[ce];for(const me in oe)_(oe[me].object),delete oe[me];delete G[ce]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const ce in G){const oe=G[ce];for(const me in oe)_(oe[me].object),delete oe[me];delete G[ce]}delete s[C.id]}function P(C){for(const G in s){const ce=s[G];if(ce[C.id]===void 0)continue;const oe=ce[C.id];for(const me in oe)_(oe[me].object),delete oe[me];delete ce[C.id]}}function J(){D(),h=!0,f!==l&&(f=l,m(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:J,resetDefaultState:D,dispose:ie,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:B}}function ob(o,t,i){let s;function l(m){s=m}function f(m,_){o.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,y){y!==0&&(o.drawArraysInstanced(s,m,_,y),i.update(_,s,y))}function p(m,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,y);let E=0;for(let A=0;A<y;A++)E+=_[A];i.update(E,s,1)}function g(m,_,y,S){if(y===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<m.length;A++)h(m[A],_[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,m,0,_,0,S,0,y);let A=0;for(let w=0;w<y;w++)A+=_[w];for(let w=0;w<S.length;w++)i.update(A,s,S[w])}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function lb(o,t,i,s){let l;function f(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==mi&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const P=H===jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==$i&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Ki&&!P)}function g(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=g(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),w=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,ie=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:w,maxAttributes:M,maxVertexUniforms:x,maxVaryings:B,maxFragmentUniforms:N,vertexTextures:z,maxSamples:ie}}function cb(o){const t=this;let i=null,s=0,l=!1,f=!1;const h=new ps,p=new ot,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||s!==0||l;return l=S,s=y.length,E},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(y,S){i=_(y,S,0)},this.setState=function(y,S,E){const A=y.clippingPlanes,w=y.clipIntersection,M=y.clipShadows,x=o.get(y);if(!l||A===null||A.length===0||f&&!M)f?_(null):m();else{const B=f?0:s,N=B*4;let z=x.clippingState||null;g.value=z,z=_(A,S,N,E);for(let ie=0;ie!==N;++ie)z[ie]=i[ie];x.clippingState=z,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=B}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(y,S,E,A){const w=y!==null?y.length:0;let M=null;if(w!==0){if(M=g.value,A!==!0||M===null){const x=E+w*4,B=S.matrixWorldInverse;p.getNormalMatrix(B),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,z=E;N!==w;++N,z+=4)h.copy(y[N]).applyMatrix4(B,p),h.normal.toArray(M,z),M[z+3]=h.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function ub(o){let t=new WeakMap;function i(h,p){return p===Cd?h.mapping=Tr:p===wd&&(h.mapping=Ar),h}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Cd||p===wd)if(t.has(h)){const g=t.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const m=new SS(g.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){t=new WeakMap}return{get:s,dispose:f}}class U_ extends C_{constructor(t=-1,i=1,s=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-t,h=s+t,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,h=f+m*this.view.width,p-=_*this.view.offsetY,g=p-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,p,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Sr=4,Pv=[.125,.215,.35,.446,.526,.582],vs=20,xd=new U_,zv=new wt;let yd=null,Sd=0,Md=0,Ed=!1;const ms=(1+Math.sqrt(5))/2,yr=1/ms,Iv=[new re(-ms,yr,0),new re(ms,yr,0),new re(-yr,0,ms),new re(yr,0,ms),new re(0,ms,-yr),new re(0,ms,yr),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class Bv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,s,l,f),i>0&&this._blur(f,0,0,i),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=Ed,t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:jo,format:mi,colorSpace:Ba,depthBuffer:!1},l=jv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jv(t,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fb(f)),this._blurMaterial=db(f,t,i)}return l}_compileMaterial(t){const i=new Ai(this._lodPlanes[0],t);this._renderer.compile(i,xd)}_sceneToCubeUV(t,i,s,l){const p=new hi(90,1,i,s),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(zv),_.toneMapping=za,_.autoClear=!1;const E=new b_({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),A=new Ai(new ko,E);let w=!1;const M=t.background;M?M.isColor&&(E.color.copy(M),t.background=null,w=!0):(E.color.copy(zv),w=!0);for(let x=0;x<6;x++){const B=x%3;B===0?(p.up.set(0,g[x],0),p.lookAt(m[x],0,0)):B===1?(p.up.set(0,0,g[x]),p.lookAt(0,m[x],0)):(p.up.set(0,g[x],0),p.lookAt(0,0,m[x]));const N=this._cubeSize;Sc(l,B*N,x>2?N:0,N,N),_.setRenderTarget(l),w&&_.render(A,p),_.render(t,p)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=S,_.autoClear=y,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new Ai(this._lodPlanes[0],f),p=f.uniforms;p.envMap.value=t;const g=this._cubeSize;Sc(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,xd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),p=Iv[(l-f-1)%Iv.length];this._blur(t,f-1,f,h,p)}i.autoClear=s}_blur(t,i,s,l,f){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",f),this._halfBlur(h,t,s,s,l,"longitudinal",f)}_halfBlur(t,i,s,l,f,h,p){const g=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new Ai(this._lodPlanes[l],m),S=m.uniforms,E=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*vs-1),w=f/A,M=isFinite(f)?1+Math.floor(_*w):vs;M>vs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${vs}`);const x=[];let B=0;for(let P=0;P<vs;++P){const J=P/w,D=Math.exp(-J*J/2);x.push(D),P===0?B+=D:P<M&&(B+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/B;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=h==="latitudinal",p&&(S.poleAxis.value=p);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-s;const z=this._sizeLods[l],ie=3*z*(l>N-Sr?l-N+Sr:0),H=4*(this._cubeSize-z);Sc(i,ie,H,3*z,2*z),g.setRenderTarget(i),g.render(y,xd)}}function fb(o){const t=[],i=[],s=[];let l=o;const f=o-Sr+1+Pv.length;for(let h=0;h<f;h++){const p=Math.pow(2,l);i.push(p);let g=1/p;h>o-Sr?g=Pv[h-o+Sr-1]:h===0&&(g=0),s.push(g);const m=1/(p-2),_=-m,y=1+m,S=[_,_,y,_,y,y,_,_,y,y,_,y],E=6,A=6,w=3,M=2,x=1,B=new Float32Array(w*A*E),N=new Float32Array(M*A*E),z=new Float32Array(x*A*E);for(let H=0;H<E;H++){const P=H%3*2/3-1,J=H>2?0:-1,D=[P,J,0,P+2/3,J,0,P+2/3,J+1,0,P,J,0,P+2/3,J+1,0,P,J+1,0];B.set(D,w*A*H),N.set(S,M*A*H);const C=[H,H,H,H,H,H];z.set(C,x*A*H)}const ie=new ja;ie.setAttribute("position",new gi(B,w)),ie.setAttribute("uv",new gi(N,M)),ie.setAttribute("faceIndex",new gi(z,x)),t.push(ie),l>Sr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function jv(o,t,i){const s=new Ms(o,t,i);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function db(o,t,i){const s=new Float32Array(vs),l=new re(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Fv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Hv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hb(o){let t=new WeakMap,i=null;function s(p){if(p&&p.isTexture){const g=p.mapping,m=g===Cd||g===wd,_=g===Tr||g===Ar;if(m||_){let y=t.get(p);const S=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new Bv(o)),y=m?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const E=p.image;return m&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new Bv(o)),y=m?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",f),y.texture):null}}}return p}function l(p){let g=0;const m=6;for(let _=0;_<m;_++)p[_]!==void 0&&g++;return g===m}function f(p){const g=p.target;g.removeEventListener("dispose",f);const m=t.get(g);m!==void 0&&(t.delete(g),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function pb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Io("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function mb(o,t,i,s){const l={},f=new WeakMap;function h(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);for(const A in S.morphAttributes){const w=S.morphAttributes[A];for(let M=0,x=w.length;M<x;M++)t.remove(w[M])}S.removeEventListener("dispose",h),delete l[S.id];const E=f.get(S);E&&(t.remove(E),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function p(y,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function g(y){const S=y.attributes;for(const A in S)t.update(S[A],o.ARRAY_BUFFER);const E=y.morphAttributes;for(const A in E){const w=E[A];for(let M=0,x=w.length;M<x;M++)t.update(w[M],o.ARRAY_BUFFER)}}function m(y){const S=[],E=y.index,A=y.attributes.position;let w=0;if(E!==null){const B=E.array;w=E.version;for(let N=0,z=B.length;N<z;N+=3){const ie=B[N+0],H=B[N+1],P=B[N+2];S.push(ie,H,H,P,P,ie)}}else if(A!==void 0){const B=A.array;w=A.version;for(let N=0,z=B.length/3-1;N<z;N+=3){const ie=N+0,H=N+1,P=N+2;S.push(ie,H,H,P,P,ie)}}else return;const M=new(x_(S)?A_:T_)(S,1);M.version=w;const x=f.get(y);x&&t.remove(x),f.set(y,M)}function _(y){const S=f.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&m(y)}else m(y);return f.get(y)}return{get:p,update:g,getWireframeAttribute:_}}function gb(o,t,i){let s;function l(S){s=S}let f,h;function p(S){f=S.type,h=S.bytesPerElement}function g(S,E){o.drawElements(s,E,f,S*h),i.update(E,s,1)}function m(S,E,A){A!==0&&(o.drawElementsInstanced(s,E,f,S*h,A),i.update(E,s,A))}function _(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,f,S,0,A);let M=0;for(let x=0;x<A;x++)M+=E[x];i.update(M,s,1)}function y(S,E,A,w){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)m(S[x]/h,E[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,f,S,0,w,0,A);let x=0;for(let B=0;B<A;B++)x+=E[B];for(let B=0;B<w.length;B++)i.update(x,s,w[B])}}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function vb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(f/3);break;case o.LINES:i.lines+=p*(f/2);break;case o.LINE_STRIP:i.lines+=p*(f-1);break;case o.LINE_LOOP:i.lines+=p*f;break;case o.POINTS:i.points+=p*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function _b(o,t,i){const s=new WeakMap,l=new dn;function f(h,p,g){const m=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=_!==void 0?_.length:0;let S=s.get(p);if(S===void 0||S.count!==y){let C=function(){J.dispose(),s.delete(p),p.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const A=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],B=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let z=0;A===!0&&(z=1),w===!0&&(z=2),M===!0&&(z=3);let ie=p.attributes.position.count*z,H=1;ie>t.maxTextureSize&&(H=Math.ceil(ie/t.maxTextureSize),ie=t.maxTextureSize);const P=new Float32Array(ie*H*4*y),J=new S_(P,ie,H,y);J.type=Ki,J.needsUpdate=!0;const D=z*4;for(let G=0;G<y;G++){const ce=x[G],oe=B[G],me=N[G],de=ie*H*4*G;for(let L=0;L<ce.count;L++){const W=L*D;A===!0&&(l.fromBufferAttribute(ce,L),P[de+W+0]=l.x,P[de+W+1]=l.y,P[de+W+2]=l.z,P[de+W+3]=0),w===!0&&(l.fromBufferAttribute(oe,L),P[de+W+4]=l.x,P[de+W+5]=l.y,P[de+W+6]=l.z,P[de+W+7]=0),M===!0&&(l.fromBufferAttribute(me,L),P[de+W+8]=l.x,P[de+W+9]=l.y,P[de+W+10]=l.z,P[de+W+11]=me.itemSize===4?l.w:1)}}S={count:y,texture:J,size:new Tt(ie,H)},s.set(p,S),p.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const w=p.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function xb(o,t,i,s){let l=new WeakMap;function f(g){const m=s.render.frame,_=g.geometry,y=t.get(g,_);if(l.get(y)!==m&&(t.update(y),l.set(y,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),l.get(g)!==m&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,m))),g.isSkinnedMesh){const S=g.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return y}function h(){l=new WeakMap}function p(g){const m=g.target;m.removeEventListener("dispose",p),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:f,dispose:h}}class L_ extends In{constructor(t,i,s,l,f,h,p,g,m,_=Er){if(_!==Er&&_!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Er&&(s=Ss),s===void 0&&_===Cr&&(s=Rr),super(null,l,f,h,p,g,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=p!==void 0?p:ai,this.minFilter=g!==void 0?g:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const O_=new In,Gv=new L_(1,1),P_=new S_,z_=new aS,I_=new w_,Vv=[],kv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),qv=new Float32Array(4);function Dr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let f=Vv[l];if(f===void 0&&(f=new Float32Array(l),Vv[l]=f),t!==0){s.toArray(f,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(f,p)}return f}function ln(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function jc(o,t){let i=kv[t];i===void 0&&(i=new Int32Array(t),kv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function yb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2fv(this.addr,t),cn(i,t)}}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;o.uniform3fv(this.addr,t),cn(i,t)}}function Eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4fv(this.addr,t),cn(i,t)}}function bb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;qv.set(s),o.uniformMatrix2fv(this.addr,!1,qv),cn(i,s)}}function Tb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Wv.set(s),o.uniformMatrix3fv(this.addr,!1,Wv),cn(i,s)}}function Ab(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Xv.set(s),o.uniformMatrix4fv(this.addr,!1,Xv),cn(i,s)}}function Rb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2iv(this.addr,t),cn(i,t)}}function wb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3iv(this.addr,t),cn(i,t)}}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4iv(this.addr,t),cn(i,t)}}function Db(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2uiv(this.addr,t),cn(i,t)}}function Lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3uiv(this.addr,t),cn(i,t)}}function Ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4uiv(this.addr,t),cn(i,t)}}function Pb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(Gv.compareFunction=__,f=Gv):f=O_,i.setTexture2D(t||f,l)}function zb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||z_,l)}function Ib(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||I_,l)}function Bb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||P_,l)}function jb(o){switch(o){case 5126:return yb;case 35664:return Sb;case 35665:return Mb;case 35666:return Eb;case 35674:return bb;case 35675:return Tb;case 35676:return Ab;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return wb;case 35669:case 35673:return Nb;case 5125:return Db;case 36294:return Ub;case 36295:return Lb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Bb}}function Fb(o,t){o.uniform1fv(this.addr,t)}function Hb(o,t){const i=Dr(t,this.size,2);o.uniform2fv(this.addr,i)}function Gb(o,t){const i=Dr(t,this.size,3);o.uniform3fv(this.addr,i)}function Vb(o,t){const i=Dr(t,this.size,4);o.uniform4fv(this.addr,i)}function kb(o,t){const i=Dr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Xb(o,t){const i=Dr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Wb(o,t){const i=Dr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function qb(o,t){o.uniform1iv(this.addr,t)}function Yb(o,t){o.uniform2iv(this.addr,t)}function Zb(o,t){o.uniform3iv(this.addr,t)}function Kb(o,t){o.uniform4iv(this.addr,t)}function Qb(o,t){o.uniform1uiv(this.addr,t)}function Jb(o,t){o.uniform2uiv(this.addr,t)}function $b(o,t){o.uniform3uiv(this.addr,t)}function eT(o,t){o.uniform4uiv(this.addr,t)}function tT(o,t,i){const s=this.cache,l=t.length,f=jc(i,l);ln(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||O_,f[h])}function nT(o,t,i){const s=this.cache,l=t.length,f=jc(i,l);ln(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||z_,f[h])}function iT(o,t,i){const s=this.cache,l=t.length,f=jc(i,l);ln(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||I_,f[h])}function aT(o,t,i){const s=this.cache,l=t.length,f=jc(i,l);ln(s,f)||(o.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||P_,f[h])}function sT(o){switch(o){case 5126:return Fb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Xb;case 35676:return Wb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return Zb;case 35669:case 35673:return Kb;case 5125:return Qb;case 36294:return Jb;case 36295:return $b;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return aT}}class rT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=jb(i.type)}}class oT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sT(i.type)}}class lT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const p=l[f];p.setValue(t,i[p.id],s)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function Yv(o,t){o.seq.push(t),o.map[t.id]=t}function cT(o,t,i){const s=o.name,l=s.length;for(bd.lastIndex=0;;){const f=bd.exec(s),h=bd.lastIndex;let p=f[1];const g=f[2]==="]",m=f[3];if(g&&(p=p|0),m===void 0||m==="["&&h+2===l){Yv(i,m===void 0?new rT(p,o,t):new oT(p,o,t));break}else{let y=i.map[p];y===void 0&&(y=new lT(p),Yv(i,y)),i=y}}}class wc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=t.getActiveUniform(i,l),h=t.getUniformLocation(i,f.name);cT(f,h,this)}}setValue(t,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let f=0,h=i.length;f!==h;++f){const p=i[f],g=s[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,f=t.length;l!==f;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Zv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const uT=37297;let fT=0;function dT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let h=l;h<f;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}function hT(o){const t=bt.getPrimaries(bt.workingColorSpace),i=bt.getPrimaries(o);let s;switch(t===i?s="":t===Lc&&i===Uc?s="LinearDisplayP3ToLinearSRGB":t===Uc&&i===Lc&&(s="LinearSRGBToLinearDisplayP3"),o){case Ba:case Ic:return[s,"LinearTransferOETF"];case Mi:case ph:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function Kv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const f=/ERROR: 0:(\d+)/.exec(l);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+l+`

`+dT(o.getShaderSource(t),h)}else return l}function pT(o,t){const i=hT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function mT(o,t){let i;switch(t){case Dy:i="Linear";break;case Uy:i="Reinhard";break;case Ly:i="OptimizedCineon";break;case Oy:i="ACESFilmic";break;case zy:i="AgX";break;case Iy:i="Neutral";break;case Py:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new re;function gT(){bt.getLuminanceCoefficients(Mc);const o=Mc.x.toFixed(4),t=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function _T(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function xT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(t,l),h=f.name;let p=1;f.type===o.FLOAT_MAT2&&(p=2),f.type===o.FLOAT_MAT3&&(p=3),f.type===o.FLOAT_MAT4&&(p=4),i[h]={type:f.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function zo(o){return o!==""}function Qv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(o){return o.replace(yT,MT)}const ST=new Map;function MT(o,t){let i=rt[t];if(i===void 0){const s=ST.get(t);if(s!==void 0)i=rt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return sh(i)}const ET=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(o){return o.replace(ET,bT)}function bT(o,t,i,s){let l="";for(let f=parseInt(t);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function e_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===s_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===iy?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(t="SHADOWMAP_TYPE_VSM"),t}function AT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Tr:case Ar:t="ENVMAP_TYPE_CUBE";break;case zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function CT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case r_:t="ENVMAP_BLENDING_MULTIPLY";break;case wy:t="ENVMAP_BLENDING_MIX";break;case Ny:t="ENVMAP_BLENDING_ADD";break}return t}function wT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function NT(o,t,i,s){const l=o.getContext(),f=i.defines;let h=i.vertexShader,p=i.fragmentShader;const g=TT(i),m=AT(i),_=RT(i),y=CT(i),S=wT(i),E=vT(i),A=_T(f),w=l.createProgram();let M,x,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(zo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(zo).join(`
`),x.length>0&&(x+=`
`)):(M=[e_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),x=[e_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?rt.tonemapping_pars_fragment:"",i.toneMapping!==za?mT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,pT("linearToOutputTexel",i.outputColorSpace),gT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),h=sh(h),h=Qv(h,i),h=Jv(h,i),p=sh(p),p=Qv(p,i),p=Jv(p,i),h=$v(h),p=$v(p),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=B+M+h,z=B+x+p,ie=Zv(l,l.VERTEX_SHADER,N),H=Zv(l,l.FRAGMENT_SHADER,z);l.attachShader(w,ie),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(G){if(o.debug.checkShaderErrors){const ce=l.getProgramInfoLog(w).trim(),oe=l.getShaderInfoLog(ie).trim(),me=l.getShaderInfoLog(H).trim();let de=!0,L=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,ie,H);else{const W=Kv(l,ie,"vertex"),Z=Kv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ce+`
`+W+`
`+Z)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(oe===""||me==="")&&(L=!1);L&&(G.diagnostics={runnable:de,programLog:ce,vertexShader:{log:oe,prefix:M},fragmentShader:{log:me,prefix:x}})}l.deleteShader(ie),l.deleteShader(H),J=new wc(l,w),D=xT(l,w)}let J;this.getUniforms=function(){return J===void 0&&P(this),J};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,uT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=ie,this.fragmentShader=H,this}let DT=0;class UT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new LT(t),i.set(t,s)),s}}class LT{constructor(t){this.id=DT++,this.code=t,this.usedTimes=0}}function OT(o,t,i,s,l,f,h){const p=new M_,g=new UT,m=new Set,_=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,G,ce,oe){const me=ce.fog,de=oe.geometry,L=D.isMeshStandardMaterial?ce.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||L),Z=W&&W.mapping===zc?W.image.height:null,Me=A[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const be=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=be!==void 0?be.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let _e,q,le,ye;if(Me){const _t=Ei[Me];_e=_t.vertexShader,q=_t.fragmentShader}else _e=D.vertexShader,q=D.fragmentShader,g.update(D),le=g.getVertexShaderID(D),ye=g.getFragmentShaderID(D);const Ee=o.getRenderTarget(),He=oe.isInstancedMesh===!0,Fe=oe.isBatchedMesh===!0,nt=!!D.map,Lt=!!D.matcap,j=!!W,Vt=!!D.aoMap,ut=!!D.lightMap,yt=!!D.bumpMap,Ge=!!D.normalMap,kt=!!D.displacementMap,$e=!!D.emissiveMap,et=!!D.metalnessMap,O=!!D.roughnessMap,T=D.anisotropy>0,ae=D.clearcoat>0,Se=D.dispersion>0,ve=D.iridescence>0,xe=D.sheen>0,We=D.transmission>0,De=T&&!!D.anisotropyMap,Le=ae&&!!D.clearcoatMap,it=ae&&!!D.clearcoatNormalMap,Ae=ae&&!!D.clearcoatRoughnessMap,Oe=ve&&!!D.iridescenceMap,ht=ve&&!!D.iridescenceThicknessMap,Ke=xe&&!!D.sheenColorMap,we=xe&&!!D.sheenRoughnessMap,Ye=!!D.specularMap,Ze=!!D.specularColorMap,zt=!!D.specularIntensityMap,V=We&&!!D.transmissionMap,Re=We&&!!D.thicknessMap,he=!!D.gradientMap,ge=!!D.alphaMap,Ce=D.alphaTest>0,ke=!!D.alphaHash,lt=!!D.extensions;let Pt=za;D.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Pt=o.toneMapping);const an={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:_e,fragmentShader:q,defines:D.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:Fe,batchingColor:Fe&&oe._colorsTexture!==null,instancing:He,instancingColor:He&&oe.instanceColor!==null,instancingMorph:He&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ee===null?o.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ba,alphaToCoverage:!!D.alphaToCoverage,map:nt,matcap:Lt,envMap:j,envMapMode:j&&W.mapping,envMapCubeUVHeight:Z,aoMap:Vt,lightMap:ut,bumpMap:yt,normalMap:Ge,displacementMap:S&&kt,emissiveMap:$e,normalMapObjectSpace:Ge&&D.normalMapType===Gy,normalMapTangentSpace:Ge&&D.normalMapType===Hy,metalnessMap:et,roughnessMap:O,anisotropy:T,anisotropyMap:De,clearcoat:ae,clearcoatMap:Le,clearcoatNormalMap:it,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:ht,sheen:xe,sheenColorMap:Ke,sheenRoughnessMap:we,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:zt,transmission:We,transmissionMap:V,thicknessMap:Re,gradientMap:he,opaque:D.transparent===!1&&D.blending===Mr&&D.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ce,alphaHash:ke,combine:D.combine,mapUv:nt&&w(D.map.channel),aoMapUv:Vt&&w(D.aoMap.channel),lightMapUv:ut&&w(D.lightMap.channel),bumpMapUv:yt&&w(D.bumpMap.channel),normalMapUv:Ge&&w(D.normalMap.channel),displacementMapUv:kt&&w(D.displacementMap.channel),emissiveMapUv:$e&&w(D.emissiveMap.channel),metalnessMapUv:et&&w(D.metalnessMap.channel),roughnessMapUv:O&&w(D.roughnessMap.channel),anisotropyMapUv:De&&w(D.anisotropyMap.channel),clearcoatMapUv:Le&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:it&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:we&&w(D.sheenRoughnessMap.channel),specularMapUv:Ye&&w(D.specularMap.channel),specularColorMapUv:Ze&&w(D.specularColorMap.channel),specularIntensityMapUv:zt&&w(D.specularIntensityMap.channel),transmissionMapUv:V&&w(D.transmissionMap.channel),thicknessMapUv:Re&&w(D.thicknessMap.channel),alphaMapUv:ge&&w(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ge||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(nt||ge),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Pt,decodeVideoTexture:nt&&D.map.isVideoTexture===!0&&bt.getTransfer(D.map.colorSpace)===jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===bi,flipSided:D.side===zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:lt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&D.extensions.multiDraw===!0||Fe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(B(C,D),N(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){p.disableAll(),C.supportsVertexTextures&&p.enable(0),C.instancing&&p.enable(1),C.instancingColor&&p.enable(2),C.instancingMorph&&p.enable(3),C.matcap&&p.enable(4),C.envMap&&p.enable(5),C.normalMapObjectSpace&&p.enable(6),C.normalMapTangentSpace&&p.enable(7),C.clearcoat&&p.enable(8),C.iridescence&&p.enable(9),C.alphaTest&&p.enable(10),C.vertexColors&&p.enable(11),C.vertexAlphas&&p.enable(12),C.vertexUv1s&&p.enable(13),C.vertexUv2s&&p.enable(14),C.vertexUv3s&&p.enable(15),C.vertexTangents&&p.enable(16),C.anisotropy&&p.enable(17),C.alphaHash&&p.enable(18),C.batching&&p.enable(19),C.dispersion&&p.enable(20),C.batchingColor&&p.enable(21),D.push(p.mask),p.disableAll(),C.fog&&p.enable(0),C.useFog&&p.enable(1),C.flatShading&&p.enable(2),C.logarithmicDepthBuffer&&p.enable(3),C.skinning&&p.enable(4),C.morphTargets&&p.enable(5),C.morphNormals&&p.enable(6),C.morphColors&&p.enable(7),C.premultipliedAlpha&&p.enable(8),C.shadowMapEnabled&&p.enable(9),C.doubleSided&&p.enable(10),C.flipSided&&p.enable(11),C.useDepthPacking&&p.enable(12),C.dithering&&p.enable(13),C.transmission&&p.enable(14),C.sheen&&p.enable(15),C.opaque&&p.enable(16),C.pointsUvs&&p.enable(17),C.decodeVideoTexture&&p.enable(18),C.alphaToCoverage&&p.enable(19),D.push(p.mask)}function z(D){const C=A[D.type];let G;if(C){const ce=Ei[C];G=vS.clone(ce.uniforms)}else G=D.uniforms;return G}function ie(D,C){let G;for(let ce=0,oe=_.length;ce<oe;ce++){const me=_[ce];if(me.cacheKey===C){G=me,++G.usedTimes;break}}return G===void 0&&(G=new NT(o,C,D,f),_.push(G)),G}function H(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function P(D){g.remove(D)}function J(){g.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:z,acquireProgram:ie,releaseProgram:H,releaseShaderCache:P,programs:_,dispose:J}}function PT(){let o=new WeakMap;function t(f){let h=o.get(f);return h===void 0&&(h={},o.set(f,h)),h}function i(f){o.delete(f)}function s(f,h,p){o.get(f)[h]=p}function l(){o=new WeakMap}return{get:t,remove:i,update:s,dispose:l}}function zT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function t_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function n_(){const o=[];let t=0;const i=[],s=[],l=[];function f(){t=0,i.length=0,s.length=0,l.length=0}function h(y,S,E,A,w,M){let x=o[t];return x===void 0?(x={id:y.id,object:y,geometry:S,material:E,groupOrder:A,renderOrder:y.renderOrder,z:w,group:M},o[t]=x):(x.id=y.id,x.object=y,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=y.renderOrder,x.z=w,x.group=M),t++,x}function p(y,S,E,A,w,M){const x=h(y,S,E,A,w,M);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function g(y,S,E,A,w,M){const x=h(y,S,E,A,w,M);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function m(y,S){i.length>1&&i.sort(y||zT),s.length>1&&s.sort(S||t_),l.length>1&&l.sort(S||t_)}function _(){for(let y=t,S=o.length;y<S;y++){const E=o[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:p,unshift:g,finish:_,sort:m}}function IT(){let o=new WeakMap;function t(s,l){const f=o.get(s);let h;return f===void 0?(h=new n_,o.set(s,[h])):l>=f.length?(h=new n_,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function BT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new wt};break;case"SpotLight":i={position:new re,direction:new re,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function jT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let FT=0;function HT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function GT(o){const t=new BT,i=jT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new re);const l=new re,f=new on,h=new on;function p(m){let _=0,y=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,A=0,w=0,M=0,x=0,B=0,N=0,z=0,ie=0,H=0,P=0;m.sort(HT);for(let D=0,C=m.length;D<C;D++){const G=m[D],ce=G.color,oe=G.intensity,me=G.distance,de=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=ce.r*oe,y+=ce.g*oe,S+=ce.b*oe;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],oe);P++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.directionalShadow[E]=Z,s.directionalShadowMap[E]=de,s.directionalShadowMatrix[E]=G.shadow.matrix,B++}s.directional[E]=L,E++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(ce).multiplyScalar(oe),L.distance=me,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[w]=L;const W=G.shadow;if(G.map&&(s.spotLightMap[ie]=G.map,ie++,W.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[w]=W.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=de,z++}w++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(ce).multiplyScalar(oe),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=L,M++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,s.pointShadow[A]=Z,s.pointShadowMap[A]=de,s.pointShadowMatrix[A]=G.shadow.matrix,N++}s.point[A]=L,A++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar(oe),L.groundColor.copy(G.groundColor).multiplyScalar(oe),s.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=S;const J=s.hash;(J.directionalLength!==E||J.pointLength!==A||J.spotLength!==w||J.rectAreaLength!==M||J.hemiLength!==x||J.numDirectionalShadows!==B||J.numPointShadows!==N||J.numSpotShadows!==z||J.numSpotMaps!==ie||J.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=z+ie-H,s.spotLightMap.length=ie,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=P,J.directionalLength=E,J.pointLength=A,J.spotLength=w,J.rectAreaLength=M,J.hemiLength=x,J.numDirectionalShadows=B,J.numPointShadows=N,J.numSpotShadows=z,J.numSpotMaps=ie,J.numLightProbes=P,s.version=FT++)}function g(m,_){let y=0,S=0,E=0,A=0,w=0;const M=_.matrixWorldInverse;for(let x=0,B=m.length;x<B;x++){const N=m[x];if(N.isDirectionalLight){const z=s.directional[y];z.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),y++}else if(N.isSpotLight){const z=s.spot[E];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),E++}else if(N.isRectAreaLight){const z=s.rectArea[A];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),h.identity(),f.copy(N.matrixWorld),f.premultiply(M),h.extractRotation(f),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const z=s.point[S];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const z=s.hemi[w];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(M),w++}}}return{setup:p,setupView:g,state:s}}function i_(o){const t=new GT(o),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function f(_){i.push(_)}function h(_){s.push(_)}function p(){t.setup(i)}function g(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:p,setupLightsView:g,pushLight:f,pushShadow:h}}function VT(o){let t=new WeakMap;function i(l,f=0){const h=t.get(l);let p;return h===void 0?(p=new i_(o),t.set(l,[p])):f>=h.length?(p=new i_(o),h.push(p)):p=h[f],p}function s(){t=new WeakMap}return{get:i,dispose:s}}class kT extends Vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XT extends Vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const WT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YT(o,t,i){let s=new N_;const l=new Tt,f=new Tt,h=new dn,p=new kT({depthPacking:Fy}),g=new XT,m={},_=i.maxTextureSize,y={[Ia]:zn,[zn]:Ia,[bi]:bi},S=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:WT,fragmentShader:qT}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new ja;A.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ai(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s_;let x=this.type;this.render=function(H,P,J){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(Pa),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=x!==Zi&&this.type===Zi,me=x===Zi&&this.type!==Zi;for(let de=0,L=H.length;de<L;de++){const W=H[de],Z=W.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Me=Z.getFrameExtents();if(l.multiply(Me),f.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(f.x=Math.floor(_/Me.x),l.x=f.x*Me.x,Z.mapSize.x=f.x),l.y>_&&(f.y=Math.floor(_/Me.y),l.y=f.y*Me.y,Z.mapSize.y=f.y)),Z.map===null||oe===!0||me===!0){const U=this.type!==Zi?{minFilter:ai,magFilter:ai}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ms(l.x,l.y,U),Z.map.texture.name=W.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const be=Z.getViewportCount();for(let U=0;U<be;U++){const ne=Z.getViewport(U);h.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),ce.viewport(h),Z.updateMatrices(W,U),s=Z.getFrustum(),z(P,J,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===Zi&&B(Z,J),Z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,G)};function B(H,P){const J=t.update(w);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ms(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,J,S,w,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,J,E,w,null)}function N(H,P,J,D){let C=null;const G=J.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=J.isPointLight===!0?g:p,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ce=C.uuid,oe=P.uuid;let me=m[ce];me===void 0&&(me={},m[ce]=me);let de=me[oe];de===void 0&&(de=C.clone(),me[oe]=de,P.addEventListener("dispose",ie)),C=de}if(C.visible=P.visible,C.wireframe=P.wireframe,D===Zi?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:y[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=o.properties.get(C);ce.light=J}return C}function z(H,P,J,D,C){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Zi)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,H.matrixWorld);const oe=t.update(H),me=H.material;if(Array.isArray(me)){const de=oe.groups;for(let L=0,W=de.length;L<W;L++){const Z=de[L],Me=me[Z.materialIndex];if(Me&&Me.visible){const be=N(H,Me,D,C);H.onBeforeShadow(o,H,P,J,oe,be,Z),o.renderBufferDirect(J,null,oe,be,H,Z),H.onAfterShadow(o,H,P,J,oe,be,Z)}}}else if(me.visible){const de=N(H,me,D,C);H.onBeforeShadow(o,H,P,J,oe,de,null),o.renderBufferDirect(J,null,oe,de,H,null),H.onAfterShadow(o,H,P,J,oe,de,null)}}const ce=H.children;for(let oe=0,me=ce.length;oe<me;oe++)z(ce[oe],P,J,D,C)}function ie(H){H.target.removeEventListener("dispose",ie);for(const J in m){const D=m[J],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function ZT(o){function t(){let V=!1;const Re=new dn;let he=null;const ge=new dn(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!V&&(o.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){V=Ce},setClear:function(Ce,ke,lt,Pt,an){an===!0&&(Ce*=Pt,ke*=Pt,lt*=Pt),Re.set(Ce,ke,lt,Pt),ge.equals(Re)===!1&&(o.clearColor(Ce,ke,lt,Pt),ge.copy(Re))},reset:function(){V=!1,he=null,ge.set(-1,0,0,0)}}}function i(){let V=!1,Re=null,he=null,ge=null;return{setTest:function(Ce){Ce?ye(o.DEPTH_TEST):Ee(o.DEPTH_TEST)},setMask:function(Ce){Re!==Ce&&!V&&(o.depthMask(Ce),Re=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case My:o.depthFunc(o.NEVER);break;case Ey:o.depthFunc(o.ALWAYS);break;case by:o.depthFunc(o.LESS);break;case Nc:o.depthFunc(o.LEQUAL);break;case Ty:o.depthFunc(o.EQUAL);break;case Ay:o.depthFunc(o.GEQUAL);break;case Ry:o.depthFunc(o.GREATER);break;case Cy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=Ce}},setLocked:function(Ce){V=Ce},setClear:function(Ce){ge!==Ce&&(o.clearDepth(Ce),ge=Ce)},reset:function(){V=!1,Re=null,he=null,ge=null}}}function s(){let V=!1,Re=null,he=null,ge=null,Ce=null,ke=null,lt=null,Pt=null,an=null;return{setTest:function(_t){V||(_t?ye(o.STENCIL_TEST):Ee(o.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!V&&(o.stencilMask(_t),Re=_t)},setFunc:function(_t,Bn,vn){(he!==_t||ge!==Bn||Ce!==vn)&&(o.stencilFunc(_t,Bn,vn),he=_t,ge=Bn,Ce=vn)},setOp:function(_t,Bn,vn){(ke!==_t||lt!==Bn||Pt!==vn)&&(o.stencilOp(_t,Bn,vn),ke=_t,lt=Bn,Pt=vn)},setLocked:function(_t){V=_t},setClear:function(_t){an!==_t&&(o.clearStencil(_t),an=_t)},reset:function(){V=!1,Re=null,he=null,ge=null,Ce=null,ke=null,lt=null,Pt=null,an=null}}}const l=new t,f=new i,h=new s,p=new WeakMap,g=new WeakMap;let m={},_={},y=new WeakMap,S=[],E=null,A=!1,w=null,M=null,x=null,B=null,N=null,z=null,ie=null,H=new wt(0,0,0),P=0,J=!1,D=null,C=null,G=null,ce=null,oe=null;const me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,L=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(W)[1]),de=L>=1):W.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),de=L>=2);let Z=null,Me={};const be=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),ne=new dn().fromArray(be),_e=new dn().fromArray(U);function q(V,Re,he,ge){const Ce=new Uint8Array(4),ke=o.createTexture();o.bindTexture(V,ke),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let lt=0;lt<he;lt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,ge,0,o.RGBA,o.UNSIGNED_BYTE,Ce):o.texImage2D(Re+lt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ce);return ke}const le={};le[o.TEXTURE_2D]=q(o.TEXTURE_2D,o.TEXTURE_2D,1),le[o.TEXTURE_CUBE_MAP]=q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[o.TEXTURE_2D_ARRAY]=q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),le[o.TEXTURE_3D]=q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ye(o.DEPTH_TEST),f.setFunc(Nc),yt(!1),Ge(cv),ye(o.CULL_FACE),Vt(Pa);function ye(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function Ee(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function He(V,Re){return _[V]!==Re?(o.bindFramebuffer(V,Re),_[V]=Re,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Re),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function Fe(V,Re){let he=S,ge=!1;if(V){he=y.get(Re),he===void 0&&(he=[],y.set(Re,he));const Ce=V.textures;if(he.length!==Ce.length||he[0]!==o.COLOR_ATTACHMENT0){for(let ke=0,lt=Ce.length;ke<lt;ke++)he[ke]=o.COLOR_ATTACHMENT0+ke;he.length=Ce.length,ge=!0}}else he[0]!==o.BACK&&(he[0]=o.BACK,ge=!0);ge&&o.drawBuffers(he)}function nt(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const Lt={[gs]:o.FUNC_ADD,[sy]:o.FUNC_SUBTRACT,[ry]:o.FUNC_REVERSE_SUBTRACT};Lt[oy]=o.MIN,Lt[ly]=o.MAX;const j={[cy]:o.ZERO,[uy]:o.ONE,[fy]:o.SRC_COLOR,[Ad]:o.SRC_ALPHA,[vy]:o.SRC_ALPHA_SATURATE,[my]:o.DST_COLOR,[hy]:o.DST_ALPHA,[dy]:o.ONE_MINUS_SRC_COLOR,[Rd]:o.ONE_MINUS_SRC_ALPHA,[gy]:o.ONE_MINUS_DST_COLOR,[py]:o.ONE_MINUS_DST_ALPHA,[_y]:o.CONSTANT_COLOR,[xy]:o.ONE_MINUS_CONSTANT_COLOR,[yy]:o.CONSTANT_ALPHA,[Sy]:o.ONE_MINUS_CONSTANT_ALPHA};function Vt(V,Re,he,ge,Ce,ke,lt,Pt,an,_t){if(V===Pa){A===!0&&(Ee(o.BLEND),A=!1);return}if(A===!1&&(ye(o.BLEND),A=!0),V!==ay){if(V!==w||_t!==J){if((M!==gs||N!==gs)&&(o.blendEquation(o.FUNC_ADD),M=gs,N=gs),_t)switch(V){case Mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uv:o.blendFunc(o.ONE,o.ONE);break;case fv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case fv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}x=null,B=null,z=null,ie=null,H.set(0,0,0),P=0,w=V,J=_t}return}Ce=Ce||Re,ke=ke||he,lt=lt||ge,(Re!==M||Ce!==N)&&(o.blendEquationSeparate(Lt[Re],Lt[Ce]),M=Re,N=Ce),(he!==x||ge!==B||ke!==z||lt!==ie)&&(o.blendFuncSeparate(j[he],j[ge],j[ke],j[lt]),x=he,B=ge,z=ke,ie=lt),(Pt.equals(H)===!1||an!==P)&&(o.blendColor(Pt.r,Pt.g,Pt.b,an),H.copy(Pt),P=an),w=V,J=!1}function ut(V,Re){V.side===bi?Ee(o.CULL_FACE):ye(o.CULL_FACE);let he=V.side===zn;Re&&(he=!he),yt(he),V.blending===Mr&&V.transparent===!1?Vt(Pa):Vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),l.setMask(V.colorWrite);const ge=V.stencilWrite;h.setTest(ge),ge&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),$e(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):Ee(o.SAMPLE_ALPHA_TO_COVERAGE)}function yt(V){D!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),D=V)}function Ge(V){V!==ty?(ye(o.CULL_FACE),V!==C&&(V===cv?o.cullFace(o.BACK):V===ny?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ee(o.CULL_FACE),C=V}function kt(V){V!==G&&(de&&o.lineWidth(V),G=V)}function $e(V,Re,he){V?(ye(o.POLYGON_OFFSET_FILL),(ce!==Re||oe!==he)&&(o.polygonOffset(Re,he),ce=Re,oe=he)):Ee(o.POLYGON_OFFSET_FILL)}function et(V){V?ye(o.SCISSOR_TEST):Ee(o.SCISSOR_TEST)}function O(V){V===void 0&&(V=o.TEXTURE0+me-1),Z!==V&&(o.activeTexture(V),Z=V)}function T(V,Re,he){he===void 0&&(Z===null?he=o.TEXTURE0+me-1:he=Z);let ge=Me[he];ge===void 0&&(ge={type:void 0,texture:void 0},Me[he]=ge),(ge.type!==V||ge.texture!==Re)&&(Z!==he&&(o.activeTexture(he),Z=he),o.bindTexture(V,Re||le[V]),ge.type=V,ge.texture=Re)}function ae(){const V=Me[Z];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Se(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(V){ne.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),ne.copy(V))}function we(V){_e.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),_e.copy(V))}function Ye(V,Re){let he=g.get(Re);he===void 0&&(he=new WeakMap,g.set(Re,he));let ge=he.get(V);ge===void 0&&(ge=o.getUniformBlockIndex(Re,V.name),he.set(V,ge))}function Ze(V,Re){const ge=g.get(Re).get(V);p.get(Re)!==ge&&(o.uniformBlockBinding(Re,ge,V.__bindingPointIndex),p.set(Re,ge))}function zt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},Z=null,Me={},_={},y=new WeakMap,S=[],E=null,A=!1,w=null,M=null,x=null,B=null,N=null,z=null,ie=null,H=new wt(0,0,0),P=0,J=!1,D=null,C=null,G=null,ce=null,oe=null,ne.set(0,0,o.canvas.width,o.canvas.height),_e.set(0,0,o.canvas.width,o.canvas.height),l.reset(),f.reset(),h.reset()}return{buffers:{color:l,depth:f,stencil:h},enable:ye,disable:Ee,bindFramebuffer:He,drawBuffers:Fe,useProgram:nt,setBlending:Vt,setMaterial:ut,setFlipSided:yt,setCullFace:Ge,setLineWidth:kt,setPolygonOffset:$e,setScissorTest:et,activeTexture:O,bindTexture:T,unbindTexture:ae,compressedTexImage2D:Se,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:ht,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:it,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:We,compressedTexSubImage2D:De,compressedTexSubImage3D:Le,scissor:Ke,viewport:we,reset:zt}}function a_(o,t,i,s){const l=KT(s);switch(i){case f_:return o*t;case h_:return o*t;case p_:return o*t*2;case m_:return o*t/l.components*l.byteLength;case fh:return o*t/l.components*l.byteLength;case g_:return o*t*2/l.components*l.byteLength;case dh:return o*t*2/l.components*l.byteLength;case d_:return o*t*3/l.components*l.byteLength;case mi:return o*t*4/l.components*l.byteLength;case hh:return o*t*4/l.components*l.byteLength;case bc:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ld:case Pd:return Math.max(o,16)*Math.max(t,8)/4;case Ud:case Od:return Math.max(o,8)*Math.max(t,8)/2;case zd:case Id:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case kd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case qd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Cc:case $d:case eh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case v_:case th:return Math.ceil(o/4)*Math.ceil(t/4)*8;case nh:case ih:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function KT(o){switch(o){case $i:case l_:return{byteLength:1,components:1};case Bo:case c_:case jo:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case Ss:case lh:case Ki:return{byteLength:4,components:1};case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function QT(o,t,i,s,l,f,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,_=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(O,T){return E?new OffscreenCanvas(O,T):Pc("canvas")}function w(O,T,ae){let Se=1;const ve=et(O);if((ve.width>ae||ve.height>ae)&&(Se=ae/Math.max(ve.width,ve.height)),Se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xe=Math.floor(Se*ve.width),We=Math.floor(Se*ve.height);y===void 0&&(y=A(xe,We));const De=T?A(xe,We):y;return De.width=xe,De.height=We,De.getContext("2d").drawImage(O,0,0,xe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+xe+"x"+We+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function M(O){return O.generateMipmaps&&O.minFilter!==ai&&O.minFilter!==pi}function x(O){o.generateMipmap(O)}function B(O,T,ae,Se,ve=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xe=T;if(T===o.RED&&(ae===o.FLOAT&&(xe=o.R32F),ae===o.HALF_FLOAT&&(xe=o.R16F),ae===o.UNSIGNED_BYTE&&(xe=o.R8)),T===o.RED_INTEGER&&(ae===o.UNSIGNED_BYTE&&(xe=o.R8UI),ae===o.UNSIGNED_SHORT&&(xe=o.R16UI),ae===o.UNSIGNED_INT&&(xe=o.R32UI),ae===o.BYTE&&(xe=o.R8I),ae===o.SHORT&&(xe=o.R16I),ae===o.INT&&(xe=o.R32I)),T===o.RG&&(ae===o.FLOAT&&(xe=o.RG32F),ae===o.HALF_FLOAT&&(xe=o.RG16F),ae===o.UNSIGNED_BYTE&&(xe=o.RG8)),T===o.RG_INTEGER&&(ae===o.UNSIGNED_BYTE&&(xe=o.RG8UI),ae===o.UNSIGNED_SHORT&&(xe=o.RG16UI),ae===o.UNSIGNED_INT&&(xe=o.RG32UI),ae===o.BYTE&&(xe=o.RG8I),ae===o.SHORT&&(xe=o.RG16I),ae===o.INT&&(xe=o.RG32I)),T===o.RGB&&ae===o.UNSIGNED_INT_5_9_9_9_REV&&(xe=o.RGB9_E5),T===o.RGBA){const We=ve?Dc:bt.getTransfer(Se);ae===o.FLOAT&&(xe=o.RGBA32F),ae===o.HALF_FLOAT&&(xe=o.RGBA16F),ae===o.UNSIGNED_BYTE&&(xe=We===jt?o.SRGB8_ALPHA8:o.RGBA8),ae===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),ae===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function N(O,T){let ae;return O?T===null||T===Ss||T===Rr?ae=o.DEPTH24_STENCIL8:T===Ki?ae=o.DEPTH32F_STENCIL8:T===Bo&&(ae=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ss||T===Rr?ae=o.DEPTH_COMPONENT24:T===Ki?ae=o.DEPTH_COMPONENT32F:T===Bo&&(ae=o.DEPTH_COMPONENT16),ae}function z(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==ai&&O.minFilter!==pi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function ie(O){const T=O.target;T.removeEventListener("dispose",ie),P(T),T.isVideoTexture&&_.delete(T)}function H(O){const T=O.target;T.removeEventListener("dispose",H),D(T)}function P(O){const T=s.get(O);if(T.__webglInit===void 0)return;const ae=O.source,Se=S.get(ae);if(Se){const ve=Se[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&J(O),Object.keys(Se).length===0&&S.delete(ae)}s.remove(O)}function J(O){const T=s.get(O);o.deleteTexture(T.__webglTexture);const ae=O.source,Se=S.get(ae);delete Se[T.__cacheKey],h.memory.textures--}function D(O){const T=s.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(T.__webglFramebuffer[Se]))for(let ve=0;ve<T.__webglFramebuffer[Se].length;ve++)o.deleteFramebuffer(T.__webglFramebuffer[Se][ve]);else o.deleteFramebuffer(T.__webglFramebuffer[Se]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[Se])}else{if(Array.isArray(T.__webglFramebuffer))for(let Se=0;Se<T.__webglFramebuffer.length;Se++)o.deleteFramebuffer(T.__webglFramebuffer[Se]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Se=0;Se<T.__webglColorRenderbuffer.length;Se++)T.__webglColorRenderbuffer[Se]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[Se]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ae=O.textures;for(let Se=0,ve=ae.length;Se<ve;Se++){const xe=s.get(ae[Se]);xe.__webglTexture&&(o.deleteTexture(xe.__webglTexture),h.memory.textures--),s.remove(ae[Se])}s.remove(O)}let C=0;function G(){C=0}function ce(){const O=C;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),C+=1,O}function oe(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function me(O,T){const ae=s.get(O);if(O.isVideoTexture&&kt(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const Se=O.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(ae,O,T);return}}i.bindTexture(o.TEXTURE_2D,ae.__webglTexture,o.TEXTURE0+T)}function de(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){_e(ae,O,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ae.__webglTexture,o.TEXTURE0+T)}function L(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){_e(ae,O,T);return}i.bindTexture(o.TEXTURE_3D,ae.__webglTexture,o.TEXTURE0+T)}function W(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){q(ae,O,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture,o.TEXTURE0+T)}const Z={[Nd]:o.REPEAT,[_s]:o.CLAMP_TO_EDGE,[Dd]:o.MIRRORED_REPEAT},Me={[ai]:o.NEAREST,[By]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[Jf]:o.LINEAR_MIPMAP_NEAREST,[xs]:o.LINEAR_MIPMAP_LINEAR},be={[Vy]:o.NEVER,[Zy]:o.ALWAYS,[ky]:o.LESS,[__]:o.LEQUAL,[Xy]:o.EQUAL,[Yy]:o.GEQUAL,[Wy]:o.GREATER,[qy]:o.NOTEQUAL};function U(O,T){if(T.type===Ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===pi||T.magFilter===Jf||T.magFilter===tc||T.magFilter===xs||T.minFilter===pi||T.minFilter===Jf||T.minFilter===tc||T.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Z[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Z[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Z[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Me[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==tc&&T.minFilter!==xs||T.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ae=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ne(O,T){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",ie));const Se=T.source;let ve=S.get(Se);ve===void 0&&(ve={},S.set(Se,ve));const xe=oe(T);if(xe!==O.__cacheKey){ve[xe]===void 0&&(ve[xe]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ae=!0),ve[xe].usedTimes++;const We=ve[O.__cacheKey];We!==void 0&&(ve[O.__cacheKey].usedTimes--,We.usedTimes===0&&J(T)),O.__cacheKey=xe,O.__webglTexture=ve[xe].texture}return ae}function _e(O,T,ae){let Se=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Se=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Se=o.TEXTURE_3D);const ve=ne(O,T),xe=T.source;i.bindTexture(Se,O.__webglTexture,o.TEXTURE0+ae);const We=s.get(xe);if(xe.version!==We.__version||ve===!0){i.activeTexture(o.TEXTURE0+ae);const De=bt.getPrimaries(bt.workingColorSpace),Le=T.colorSpace===Oa?null:bt.getPrimaries(T.colorSpace),it=T.colorSpace===Oa||De===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Ae=w(T.image,!1,l.maxTextureSize);Ae=$e(T,Ae);const Oe=f.convert(T.format,T.colorSpace),ht=f.convert(T.type);let Ke=B(T.internalFormat,Oe,ht,T.colorSpace,T.isVideoTexture);U(Se,T);let we;const Ye=T.mipmaps,Ze=T.isVideoTexture!==!0,zt=We.__version===void 0||ve===!0,V=xe.dataReady,Re=z(T,Ae);if(T.isDepthTexture)Ke=N(T.format===Cr,T.type),zt&&(Ze?i.texStorage2D(o.TEXTURE_2D,1,Ke,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Oe,ht,null));else if(T.isDataTexture)if(Ye.length>0){Ze&&zt&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],Ze?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,ht,we.data):i.texImage2D(o.TEXTURE_2D,he,Ke,we.width,we.height,0,Oe,ht,we.data);T.generateMipmaps=!1}else Ze?(zt&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ae.width,Ae.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Oe,ht,Ae.data)):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Oe,ht,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ke,Ye[0].width,Ye[0].height,Ae.depth);for(let he=0,ge=Ye.length;he<ge;he++)if(we=Ye[he],T.format!==mi)if(Oe!==null)if(Ze){if(V)if(T.layerUpdates.size>0){const Ce=a_(we.width,we.height,T.format,T.type);for(const ke of T.layerUpdates){const lt=we.data.subarray(ke*Ce/we.data.BYTES_PER_ELEMENT,(ke+1)*Ce/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,ke,we.width,we.height,1,Oe,lt,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Ae.depth,Oe,we.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,Ke,we.width,we.height,Ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Ae.depth,Oe,ht,we.data):i.texImage3D(o.TEXTURE_2D_ARRAY,he,Ke,we.width,we.height,Ae.depth,0,Oe,ht,we.data)}else{Ze&&zt&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],T.format!==mi?Oe!==null?Ze?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,we.data):i.compressedTexImage2D(o.TEXTURE_2D,he,Ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,ht,we.data):i.texImage2D(o.TEXTURE_2D,he,Ke,we.width,we.height,0,Oe,ht,we.data)}else if(T.isDataArrayTexture)if(Ze){if(zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ke,Ae.width,Ae.height,Ae.depth),V)if(T.layerUpdates.size>0){const he=a_(Ae.width,Ae.height,T.format,T.type);for(const ge of T.layerUpdates){const Ce=Ae.data.subarray(ge*he/Ae.data.BYTES_PER_ELEMENT,(ge+1)*he/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Oe,ht,Ce)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,ht,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ke,Ae.width,Ae.height,Ae.depth,0,Oe,ht,Ae.data);else if(T.isData3DTexture)Ze?(zt&&i.texStorage3D(o.TEXTURE_3D,Re,Ke,Ae.width,Ae.height,Ae.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,ht,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,Ke,Ae.width,Ae.height,Ae.depth,0,Oe,ht,Ae.data);else if(T.isFramebufferTexture){if(zt)if(Ze)i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ae.width,Ae.height);else{let he=Ae.width,ge=Ae.height;for(let Ce=0;Ce<Re;Ce++)i.texImage2D(o.TEXTURE_2D,Ce,Ke,he,ge,0,Oe,ht,null),he>>=1,ge>>=1}}else if(Ye.length>0){if(Ze&&zt){const he=et(Ye[0]);i.texStorage2D(o.TEXTURE_2D,Re,Ke,he.width,he.height)}for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],Ze?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Oe,ht,we):i.texImage2D(o.TEXTURE_2D,he,Ke,Oe,ht,we);T.generateMipmaps=!1}else if(Ze){if(zt){const he=et(Ae);i.texStorage2D(o.TEXTURE_2D,Re,Ke,he.width,he.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,ht,Ae)}else i.texImage2D(o.TEXTURE_2D,0,Ke,Oe,ht,Ae);M(T)&&x(Se),We.__version=xe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function q(O,T,ae){if(T.image.length!==6)return;const Se=ne(O,T),ve=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ae);const xe=s.get(ve);if(ve.version!==xe.__version||Se===!0){i.activeTexture(o.TEXTURE0+ae);const We=bt.getPrimaries(bt.workingColorSpace),De=T.colorSpace===Oa?null:bt.getPrimaries(T.colorSpace),Le=T.colorSpace===Oa||We===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!it&&!Ae?Oe[ge]=w(T.image[ge],!0,l.maxCubemapSize):Oe[ge]=Ae?T.image[ge].image:T.image[ge],Oe[ge]=$e(T,Oe[ge]);const ht=Oe[0],Ke=f.convert(T.format,T.colorSpace),we=f.convert(T.type),Ye=B(T.internalFormat,Ke,we,T.colorSpace),Ze=T.isVideoTexture!==!0,zt=xe.__version===void 0||Se===!0,V=ve.dataReady;let Re=z(T,ht);U(o.TEXTURE_CUBE_MAP,T);let he;if(it){Ze&&zt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Ye,ht.width,ht.height);for(let ge=0;ge<6;ge++){he=Oe[ge].mipmaps;for(let Ce=0;Ce<he.length;Ce++){const ke=he[Ce];T.format!==mi?Ke!==null?Ze?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,ke.width,ke.height,Ke,ke.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,Ye,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,ke.width,ke.height,Ke,we,ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,Ye,ke.width,ke.height,0,Ke,we,ke.data)}}}else{if(he=T.mipmaps,Ze&&zt){he.length>0&&Re++;const ge=et(Oe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Ye,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,Ke,we,Oe[ge].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Oe[ge].width,Oe[ge].height,0,Ke,we,Oe[ge].data);for(let Ce=0;Ce<he.length;Ce++){const lt=he[Ce].image[ge].image;Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,lt.width,lt.height,Ke,we,lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,Ye,lt.width,lt.height,0,Ke,we,lt.data)}}else{Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,we,Oe[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Ke,we,Oe[ge]);for(let Ce=0;Ce<he.length;Ce++){const ke=he[Ce];Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,Ke,we,ke.image[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,Ye,Ke,we,ke.image[ge])}}}M(T)&&x(o.TEXTURE_CUBE_MAP),xe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function le(O,T,ae,Se,ve,xe){const We=f.convert(ae.format,ae.colorSpace),De=f.convert(ae.type),Le=B(ae.internalFormat,We,De,ae.colorSpace);if(!s.get(T).__hasExternalTextures){const Ae=Math.max(1,T.width>>xe),Oe=Math.max(1,T.height>>xe);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?i.texImage3D(ve,xe,Le,Ae,Oe,T.depth,0,We,De,null):i.texImage2D(ve,xe,Le,Ae,Oe,0,We,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Se,ve,s.get(ae).__webglTexture,0,yt(T)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Se,ve,s.get(ae).__webglTexture,xe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(O,T,ae){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const Se=T.depthTexture,ve=Se&&Se.isDepthTexture?Se.type:null,xe=N(T.stencilBuffer,ve),We=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=yt(T);Ge(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,xe,T.width,T.height):ae?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,xe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,xe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,O)}else{const Se=T.textures;for(let ve=0;ve<Se.length;ve++){const xe=Se[ve],We=f.convert(xe.format,xe.colorSpace),De=f.convert(xe.type),Le=B(xe.internalFormat,We,De,xe.colorSpace),it=yt(T);ae&&Ge(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,it,Le,T.width,T.height):Ge(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,it,Le,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Le,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ee(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Se=s.get(T.depthTexture).__webglTexture,ve=yt(T);if(T.depthTexture.format===Er)Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(T.depthTexture.format===Cr)Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function He(O){const T=s.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ee(T.__webglFramebuffer,O)}else if(ae){T.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Se]),T.__webglDepthbuffer[Se]=o.createRenderbuffer(),ye(T.__webglDepthbuffer[Se],O,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),ye(T.__webglDepthbuffer,O,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(O,T,ae){const Se=s.get(O);T!==void 0&&le(Se.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ae!==void 0&&He(O)}function nt(O){const T=O.texture,ae=s.get(O),Se=s.get(T);O.addEventListener("dispose",H);const ve=O.textures,xe=O.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(Se.__webglTexture===void 0&&(Se.__webglTexture=o.createTexture()),Se.__version=T.version,h.memory.textures++),xe){ae.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer[De]=[];for(let Le=0;Le<T.mipmaps.length;Le++)ae.__webglFramebuffer[De][Le]=o.createFramebuffer()}else ae.__webglFramebuffer[De]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)ae.__webglFramebuffer[De]=o.createFramebuffer()}else ae.__webglFramebuffer=o.createFramebuffer();if(We)for(let De=0,Le=ve.length;De<Le;De++){const it=s.get(ve[De]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Ge(O)===!1){ae.__webglMultisampledFramebuffer=o.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let De=0;De<ve.length;De++){const Le=ve[De];ae.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ae.__webglColorRenderbuffer[De]);const it=f.convert(Le.format,Le.colorSpace),Ae=f.convert(Le.type),Oe=B(Le.internalFormat,it,Ae,Le.colorSpace,O.isXRRenderTarget===!0),ht=yt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,Oe,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,ae.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(ae.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xe){i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)le(ae.__webglFramebuffer[De][Le],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le);else le(ae.__webglFramebuffer[De],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(T)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Le=ve.length;De<Le;De++){const it=ve[De],Ae=s.get(it);i.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),U(o.TEXTURE_2D,it),le(ae.__webglFramebuffer,O,it,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),M(it)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Se.__webglTexture),U(De,T),T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)le(ae.__webglFramebuffer[Le],O,T,o.COLOR_ATTACHMENT0,De,Le);else le(ae.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,De,0);M(T)&&x(De),i.unbindTexture()}O.depthBuffer&&He(O)}function Lt(O){const T=O.textures;for(let ae=0,Se=T.length;ae<Se;ae++){const ve=T[ae];if(M(ve)){const xe=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,We=s.get(ve).__webglTexture;i.bindTexture(xe,We),x(xe),i.unbindTexture()}}}const j=[],Vt=[];function ut(O){if(O.samples>0){if(Ge(O)===!1){const T=O.textures,ae=O.width,Se=O.height;let ve=o.COLOR_BUFFER_BIT;const xe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=s.get(O),De=T.length>1;if(De)for(let Le=0;Le<T.length;Le++)i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,it,0)}o.blitFramebuffer(0,0,ae,Se,0,0,ae,Se,ve,o.NEAREST),g===!0&&(j.length=0,Vt.length=0,j.push(o.COLOR_ATTACHMENT0+Le),O.depthBuffer&&O.resolveDepthBuffer===!1&&(j.push(xe),Vt.push(xe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Vt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,j))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let Le=0;Le<T.length;Le++){i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,it,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&g){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function yt(O){return Math.min(l.maxSamples,O.samples)}function Ge(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(O){const T=h.render.frame;_.get(O)!==T&&(_.set(O,T),O.update())}function $e(O,T){const ae=O.colorSpace,Se=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==Ba&&ae!==Oa&&(bt.getTransfer(ae)===jt?(Se!==mi||ve!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),T}function et(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=G,this.setTexture2D=me,this.setTexture2DArray=de,this.setTexture3D=L,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ge}function JT(o,t){function i(s,l=Oa){let f;const h=bt.getTransfer(l);if(s===$i)return o.UNSIGNED_BYTE;if(s===ch)return o.UNSIGNED_SHORT_4_4_4_4;if(s===uh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===u_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===l_)return o.BYTE;if(s===c_)return o.SHORT;if(s===Bo)return o.UNSIGNED_SHORT;if(s===lh)return o.INT;if(s===Ss)return o.UNSIGNED_INT;if(s===Ki)return o.FLOAT;if(s===jo)return o.HALF_FLOAT;if(s===f_)return o.ALPHA;if(s===d_)return o.RGB;if(s===mi)return o.RGBA;if(s===h_)return o.LUMINANCE;if(s===p_)return o.LUMINANCE_ALPHA;if(s===Er)return o.DEPTH_COMPONENT;if(s===Cr)return o.DEPTH_STENCIL;if(s===m_)return o.RED;if(s===fh)return o.RED_INTEGER;if(s===g_)return o.RG;if(s===dh)return o.RG_INTEGER;if(s===hh)return o.RGBA_INTEGER;if(s===bc||s===Tc||s===Ac||s===Rc)if(h===jt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===bc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===bc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ud||s===Ld||s===Od||s===Pd)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Ud)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ld)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Od)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zd||s===Id||s===Bd)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===zd||s===Id)return h===jt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Bd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jd||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===jd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jd)return h===jt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cc||s===$d||s===eh)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Cc)return h===jt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$d)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===eh)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===v_||s===th||s===nh||s===ih)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Cc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===th)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nh)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ih)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class $T extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ec extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eA={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,f=null,h=null;const p=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(m,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=_.position.distanceTo(y.position),E=.02,A=.005;m.inputState.pinching&&S>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(eA)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=f!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new In,f=t.properties.get(l);f.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ta({vertexShader:tA,fragmentShader:nA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Bc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aA extends Nr{constructor(t,i){super();const s=this;let l=null,f=1,h=null,p="local-floor",g=1,m=null,_=null,y=null,S=null,E=null,A=null;const w=new iA,M=i.getContextAttributes();let x=null,B=null;const N=[],z=[],ie=new Tt;let H=null;const P=new hi;P.layers.enable(1),P.viewport=new dn;const J=new hi;J.layers.enable(2),J.viewport=new dn;const D=[P,J],C=new $T;C.layers.enable(1),C.layers.enable(2);let G=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=N[q];return le===void 0&&(le=new Td,N[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=N[q];return le===void 0&&(le=new Td,N[q]=le),le.getGripSpace()},this.getHand=function(q){let le=N[q];return le===void 0&&(le=new Td,N[q]=le),le.getHandSpace()};function oe(q){const le=z.indexOf(q.inputSource);if(le===-1)return;const ye=N[le];ye!==void 0&&(ye.update(q.inputSource,q.frame,m||h),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function me(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",me),l.removeEventListener("inputsourceschange",de);for(let q=0;q<N.length;q++){const le=z[q];le!==null&&(z[q]=null,N[q].disconnect(le))}G=null,ce=null,w.reset(),t.setRenderTarget(x),E=null,S=null,y=null,l=null,B=null,_e.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(ie.width,ie.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){f=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",me),l.addEventListener("inputsourceschange",de),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(ie),l.renderState.layers===void 0){const le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,le),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),B=new Ms(E.framebufferWidth,E.framebufferHeight,{format:mi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let le=null,ye=null,Ee=null;M.depth&&(Ee=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,le=M.stencil?Cr:Er,ye=M.stencil?Rr:Ss);const He={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:f};y=new XRWebGLBinding(l,i),S=y.createProjectionLayer(He),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Ms(S.textureWidth,S.textureHeight,{format:mi,type:$i,depthTexture:new L_(S.textureWidth,S.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(g),m=null,h=await l.requestReferenceSpace(p),_e.setContext(l),_e.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(q){for(let le=0;le<q.removed.length;le++){const ye=q.removed[le],Ee=z.indexOf(ye);Ee>=0&&(z[Ee]=null,N[Ee].disconnect(ye))}for(let le=0;le<q.added.length;le++){const ye=q.added[le];let Ee=z.indexOf(ye);if(Ee===-1){for(let Fe=0;Fe<N.length;Fe++)if(Fe>=z.length){z.push(ye),Ee=Fe;break}else if(z[Fe]===null){z[Fe]=ye,Ee=Fe;break}if(Ee===-1)break}const He=N[Ee];He&&He.connect(ye)}}const L=new re,W=new re;function Z(q,le,ye){L.setFromMatrixPosition(le.matrixWorld),W.setFromMatrixPosition(ye.matrixWorld);const Ee=L.distanceTo(W),He=le.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,nt=He[14]/(He[10]-1),Lt=He[14]/(He[10]+1),j=(He[9]+1)/He[5],Vt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],yt=(Fe[8]+1)/Fe[0],Ge=nt*ut,kt=nt*yt,$e=Ee/(-ut+yt),et=$e*-ut;le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(et),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const O=nt+$e,T=Lt+$e,ae=Ge-et,Se=kt+(Ee-et),ve=j*Lt/T*O,xe=Vt*Lt/T*O;q.projectionMatrix.makePerspective(ae,Se,ve,xe,O,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Me(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;w.texture!==null&&(q.near=w.depthNear,q.far=w.depthFar),C.near=J.near=P.near=q.near,C.far=J.far=P.far=q.far,(G!==C.near||ce!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,ce=C.far,P.near=G,P.far=ce,J.near=G,J.far=ce,P.updateProjectionMatrix(),J.updateProjectionMatrix(),q.updateProjectionMatrix());const le=q.parent,ye=C.cameras;Me(C,le);for(let Ee=0;Ee<ye.length;Ee++)Me(ye[Ee],le);ye.length===2?Z(C,P,J):C.projectionMatrix.copy(P.projectionMatrix),be(q,C,le)};function be(q,le,ye){ye===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ah*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&E===null))return g},this.setFoveation=function(q){g=q,S!==null&&(S.fixedFoveation=q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let U=null;function ne(q,le){if(_=le.getViewerPose(m||h),A=le,_!==null){const ye=_.views;E!==null&&(t.setRenderTargetFramebuffer(B,E.framebuffer),t.setRenderTarget(B));let Ee=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let Fe=0;Fe<ye.length;Fe++){const nt=ye[Fe];let Lt=null;if(E!==null)Lt=E.getViewport(nt);else{const Vt=y.getViewSubImage(S,nt);Lt=Vt.viewport,Fe===0&&(t.setRenderTargetTextures(B,Vt.colorTexture,S.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(B))}let j=D[Fe];j===void 0&&(j=new hi,j.layers.enable(Fe),j.viewport=new dn,D[Fe]=j),j.matrix.fromArray(nt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(nt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Fe===0&&(C.matrix.copy(j.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(j)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")){const Fe=y.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&w.init(t,Fe,l.renderState)}}for(let ye=0;ye<N.length;ye++){const Ee=z[ye],He=N[ye];Ee!==null&&He!==void 0&&He.update(Ee,le,m||h)}U&&U(q,le),le.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:le}),A=null}const _e=new D_;_e.setAnimationLoop(ne),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}const ls=new ea,sA=new on;function rA(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,R_(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,B,N,z){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(M,x):x.isMeshToonMaterial?(f(M,x),y(M,x)):x.isMeshPhongMaterial?(f(M,x),_(M,x)):x.isMeshStandardMaterial?(f(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,z)):x.isMeshMatcapMaterial?(f(M,x),A(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),w(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?g(M,x,B,N):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const B=t.get(x),N=B.envMap,z=B.envMapRotation;N&&(M.envMap.value=N,ls.copy(z),ls.x*=-1,ls.y*=-1,ls.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),M.envMapRotation.value.setFromMatrix4(sA.makeRotationFromEuler(ls)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function g(M,x,B,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*B,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function y(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,B){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const B=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function oA(o,t,i,s){let l={},f={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(B,N){const z=N.program;s.uniformBlockBinding(B,z)}function m(B,N){let z=l[B.id];z===void 0&&(A(B),z=_(B),l[B.id]=z,B.addEventListener("dispose",M));const ie=N.program;s.updateUBOMapping(B,ie);const H=t.render.frame;f[B.id]!==H&&(S(B),f[B.id]=H)}function _(B){const N=y();B.__bindingPointIndex=N;const z=o.createBuffer(),ie=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,ie,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,z),z}function y(){for(let B=0;B<p;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],z=B.uniforms,ie=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let H=0,P=z.length;H<P;H++){const J=Array.isArray(z[H])?z[H]:[z[H]];for(let D=0,C=J.length;D<C;D++){const G=J[D];if(E(G,H,D,ie)===!0){const ce=G.__offset,oe=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let de=0;de<oe.length;de++){const L=oe[de],W=w(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,ce+me,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,me),me+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(B,N,z,ie){const H=B.value,P=N+"_"+z;if(ie[P]===void 0)return typeof H=="number"||typeof H=="boolean"?ie[P]=H:ie[P]=H.clone(),!0;{const J=ie[P];if(typeof H=="number"||typeof H=="boolean"){if(J!==H)return ie[P]=H,!0}else if(J.equals(H)===!1)return J.copy(H),!0}return!1}function A(B){const N=B.uniforms;let z=0;const ie=16;for(let P=0,J=N.length;P<J;P++){const D=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,G=D.length;C<G;C++){const ce=D[C],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let me=0,de=oe.length;me<de;me++){const L=oe[me],W=w(L),Z=z%ie,Me=Z%W.boundary,be=Z+Me;z+=Me,be!==0&&ie-be<W.storage&&(z+=ie-be),ce.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=z,z+=W.storage}}}const H=z%ie;return H>0&&(z+=ie-H),B.__size=z,B.__cache={},this}function w(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const z=h.indexOf(N.__bindingPointIndex);h.splice(z,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete f[N.id]}function x(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},f={}}return{bind:g,update:m,dispose:x}}class lA{constructor(t={}){const{canvas:i=Qy(),context:s=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),A=new Int32Array(4);let w=null,M=null;const x=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this.toneMapping=za,this.toneMappingExposure=1;const N=this;let z=!1,ie=0,H=0,P=null,J=-1,D=null;const C=new dn,G=new dn;let ce=null;const oe=new wt(0);let me=0,de=i.width,L=i.height,W=1,Z=null,Me=null;const be=new dn(0,0,de,L),U=new dn(0,0,de,L);let ne=!1;const _e=new N_;let q=!1,le=!1;const ye=new on,Ee=new re,He=new dn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Lt(){return P===null?W:1}let j=s;function Vt(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:f,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${oh}`),i.addEventListener("webglcontextlost",he,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),j===null){const k="webgl2";if(j=Vt(k,R),j===null)throw Vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,yt,Ge,kt,$e,et,O,T,ae,Se,ve,xe,We,De,Le,it,Ae,Oe,ht,Ke,we,Ye,Ze,zt;function V(){ut=new pb(j),ut.init(),Ye=new JT(j,ut),yt=new lb(j,ut,t,Ye),Ge=new ZT(j),kt=new vb(j),$e=new PT,et=new QT(j,ut,Ge,$e,yt,Ye,kt),O=new ub(N),T=new hb(N),ae=new bS(j),Ze=new rb(j,ae),Se=new mb(j,ae,kt,Ze),ve=new xb(j,Se,ae,kt),ht=new _b(j,yt,et),it=new cb($e),xe=new OT(N,O,T,ut,yt,Ze,it),We=new rA(N,$e),De=new IT,Le=new VT(ut),Oe=new sb(N,O,T,Ge,ve,S,g),Ae=new YT(N,ve,yt),zt=new oA(j,kt,yt,Ge),Ke=new ob(j,ut,kt),we=new gb(j,ut,kt),kt.programs=xe.programs,N.capabilities=yt,N.extensions=ut,N.properties=$e,N.renderLists=De,N.shadowMap=Ae,N.state=Ge,N.info=kt}V();const Re=new aA(N,j);this.xr=Re,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(de,L,!1))},this.getSize=function(R){return R.set(de,L)},this.setSize=function(R,k,ee=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=R,L=k,i.width=Math.floor(R*W),i.height=Math.floor(k*W),ee===!0&&(i.style.width=R+"px",i.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(de*W,L*W).floor()},this.setDrawingBufferSize=function(R,k,ee){de=R,L=k,W=ee,i.width=Math.floor(R*ee),i.height=Math.floor(k*ee),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,k,ee,te){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,k,ee,te),Ge.viewport(C.copy(be).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(U)},this.setScissor=function(R,k,ee,te){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,k,ee,te),Ge.scissor(G.copy(U).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){Ge.setScissorTest(ne=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){Me=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(R=!0,k=!0,ee=!0){let te=0;if(R){let Y=!1;if(P!==null){const Te=P.texture.format;Y=Te===hh||Te===dh||Te===fh}if(Y){const Te=P.texture.type,Ne=Te===$i||Te===Ss||Te===Bo||Te===Rr||Te===ch||Te===uh,Pe=Oe.getClearColor(),ze=Oe.getClearAlpha(),Ie=Pe.r,Je=Pe.g,qe=Pe.b;Ne?(E[0]=Ie,E[1]=Je,E[2]=qe,E[3]=ze,j.clearBufferuiv(j.COLOR,0,E)):(A[0]=Ie,A[1]=Je,A[2]=qe,A[3]=ze,j.clearBufferiv(j.COLOR,0,A))}else te|=j.COLOR_BUFFER_BIT}k&&(te|=j.DEPTH_BUFFER_BIT),ee&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",he,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),De.dispose(),Le.dispose(),$e.dispose(),O.dispose(),T.dispose(),ve.dispose(),Ze.dispose(),zt.dispose(),xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",vn),Re.removeEventListener("sessionend",Xo),vi.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=kt.autoReset,k=Ae.enabled,ee=Ae.autoUpdate,te=Ae.needsUpdate,Y=Ae.type;V(),kt.autoReset=R,Ae.enabled=k,Ae.autoUpdate=ee,Ae.needsUpdate=te,Ae.type=Y}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ke(R){const k=R.target;k.removeEventListener("dispose",ke),lt(k)}function lt(R){Pt(R),$e.remove(R)}function Pt(R){const k=$e.get(R).programs;k!==void 0&&(k.forEach(function(ee){xe.releaseProgram(ee)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,ee,te,Y,Te){k===null&&(k=Fe);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=_n(R,k,ee,te,Y);Ge.setMaterial(te,Ne);let ze=ee.index,Ie=1;if(te.wireframe===!0){if(ze=Se.getWireframeAttribute(ee),ze===void 0)return;Ie=2}const Je=ee.drawRange,qe=ee.attributes.position;let ct=Je.start*Ie,At=(Je.start+Je.count)*Ie;Te!==null&&(ct=Math.max(ct,Te.start*Ie),At=Math.min(At,(Te.start+Te.count)*Ie)),ze!==null?(ct=Math.max(ct,0),At=Math.min(At,ze.count)):qe!=null&&(ct=Math.max(ct,0),At=Math.min(At,qe.count));const Ft=At-ct;if(Ft<0||Ft===1/0)return;Ze.setup(Y,te,Pe,ee,ze);let xn,xt=Ke;if(ze!==null&&(xn=ae.get(ze),xt=we,xt.setIndex(xn)),Y.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*Lt()),xt.setMode(j.LINES)):xt.setMode(j.TRIANGLES);else if(Y.isLine){let Ve=te.linewidth;Ve===void 0&&(Ve=1),Ge.setLineWidth(Ve*Lt()),Y.isLineSegments?xt.setMode(j.LINES):Y.isLineLoop?xt.setMode(j.LINE_LOOP):xt.setMode(j.LINE_STRIP)}else Y.isPoints?xt.setMode(j.POINTS):Y.isSprite&&xt.setMode(j.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ve=Y._multiDrawStarts,Xt=Y._multiDrawCounts,gt=Y._multiDrawCount,Yt=ze?ae.get(ze).bytesPerElement:1,sn=$e.get(te).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)sn.setValue(j,"_gl_DrawID",yn),xt.render(Ve[yn]/Yt,Xt[yn])}else if(Y.isInstancedMesh)xt.renderInstances(ct,Ft,Y.count);else if(ee.isInstancedBufferGeometry){const Ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Xt=Math.min(ee.instanceCount,Ve);xt.renderInstances(ct,Ft,Xt)}else xt.render(ct,Ft)};function an(R,k,ee){R.transparent===!0&&R.side===bi&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Fa(R,k,ee),R.side=Ia,R.needsUpdate=!0,Fa(R,k,ee),R.side=bi):Fa(R,k,ee)}this.compile=function(R,k,ee=null){ee===null&&(ee=R),M=Le.get(ee),M.init(k),B.push(M),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),R!==ee&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights();const te=new Set;return R.traverse(function(Y){const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Pe=Te[Ne];an(Pe,ee,Y),te.add(Pe)}else an(Te,ee,Y),te.add(Te)}),B.pop(),M=null,te},this.compileAsync=function(R,k,ee=null){const te=this.compile(R,k,ee);return new Promise(Y=>{function Te(){if(te.forEach(function(Ne){$e.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){Y(R);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let _t=null;function Bn(R){_t&&_t(R)}function vn(){vi.stop()}function Xo(){vi.start()}const vi=new D_;vi.setAnimationLoop(Bn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){_t=R,Re.setAnimationLoop(R),R===null?vi.stop():vi.start()},Re.addEventListener("sessionstart",vn),Re.addEventListener("sessionend",Xo),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(k),k=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,k,P),M=Le.get(R,B.length),M.init(k),B.push(M),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),_e.setFromProjectionMatrix(ye),le=this.localClippingEnabled,q=it.init(this.clippingPlanes,le),w=De.get(R,x.length),w.init(),x.push(w),Re.enabled===!0&&Re.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Es(Te,k,-1/0,N.sortObjects)}Es(R,k,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Z,Me),nt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,nt&&Oe.addToRenderList(w,R),this.info.render.frame++,q===!0&&it.beginShadows();const ee=M.state.shadowsArray;Ae.render(ee,R,k),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=w.opaque,Y=w.transmissive;if(M.setupLights(),k.isArrayCamera){const Te=k.cameras;if(Y.length>0)for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){const ze=Te[Ne];bs(te,Y,R,ze)}nt&&Oe.render(R);for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){const ze=Te[Ne];Or(w,R,ze,ze.viewport)}}else Y.length>0&&bs(te,Y,R,k),nt&&Oe.render(R),Or(w,R,k);P!==null&&(et.updateMultisampleRenderTarget(P),et.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(N,R,k),Ze.resetDefaultState(),J=-1,D=null,B.pop(),B.length>0?(M=B[B.length-1],q===!0&&it.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function Es(R,k,ee,te){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_e.intersectsSprite(R)){te&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Ne=ve.update(R),Pe=R.material;Pe.visible&&w.push(R,Ne,Pe,ee,He.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_e.intersectsObject(R))){const Ne=ve.update(R),Pe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),He.copy(Ne.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Pe)){const ze=Ne.groups;for(let Ie=0,Je=ze.length;Ie<Je;Ie++){const qe=ze[Ie],ct=Pe[qe.materialIndex];ct&&ct.visible&&w.push(R,Ne,ct,ee,He.z,qe)}}else Pe.visible&&w.push(R,Ne,Pe,ee,He.z,null)}}const Te=R.children;for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++)Es(Te[Ne],k,ee,te)}function Or(R,k,ee,te){const Y=R.opaque,Te=R.transmissive,Ne=R.transparent;M.setupLightsView(ee),q===!0&&it.setGlobalState(N.clippingPlanes,ee),te&&Ge.viewport(C.copy(te)),Y.length>0&&na(Y,k,ee),Te.length>0&&na(Te,k,ee),Ne.length>0&&na(Ne,k,ee),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function bs(R,k,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[te.id]===void 0&&(M.state.transmissionRenderTarget[te.id]=new Ms(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?jo:$i,minFilter:xs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=M.state.transmissionRenderTarget[te.id],Ne=te.viewport||C;Te.setSize(Ne.z,Ne.w);const Pe=N.getRenderTarget();N.setRenderTarget(Te),N.getClearColor(oe),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),nt&&Oe.render(ee);const ze=N.toneMapping;N.toneMapping=za;const Ie=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),q===!0&&it.setGlobalState(N.clippingPlanes,te),na(R,ee,te),et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let qe=0,ct=k.length;qe<ct;qe++){const At=k[qe],Ft=At.object,xn=At.geometry,xt=At.material,Ve=At.group;if(xt.side===bi&&Ft.layers.test(te.layers)){const Xt=xt.side;xt.side=zn,xt.needsUpdate=!0,Pr(Ft,ee,te,xn,xt,Ve),xt.side=Xt,xt.needsUpdate=!0,Je=!0}}Je===!0&&(et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te))}N.setRenderTarget(Pe),N.setClearColor(oe,me),Ie!==void 0&&(te.viewport=Ie),N.toneMapping=ze}function na(R,k,ee){const te=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Te=R.length;Y<Te;Y++){const Ne=R[Y],Pe=Ne.object,ze=Ne.geometry,Ie=te===null?Ne.material:te,Je=Ne.group;Pe.layers.test(ee.layers)&&Pr(Pe,k,ee,ze,Ie,Je)}}function Pr(R,k,ee,te,Y,Te){R.onBeforeRender(N,k,ee,te,Y,Te),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.transparent===!0&&Y.side===bi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,N.renderBufferDirect(ee,k,te,Y,R,Te),Y.side=Ia,Y.needsUpdate=!0,N.renderBufferDirect(ee,k,te,Y,R,Te),Y.side=bi):N.renderBufferDirect(ee,k,te,Y,R,Te),R.onAfterRender(N,k,ee,te,Y,Te)}function Fa(R,k,ee){k.isScene!==!0&&(k=Fe);const te=$e.get(R),Y=M.state.lights,Te=M.state.shadowsArray,Ne=Y.state.version,Pe=xe.getParameters(R,Y.state,Te,k,ee),ze=xe.getProgramCacheKey(Pe);let Ie=te.programs;te.environment=R.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(R.isMeshStandardMaterial?T:O).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",ke),Ie=new Map,te.programs=Ie);let Je=Ie.get(ze);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Ne)return Qt(R,Pe),Je}else Pe.uniforms=xe.getUniforms(R),R.onBeforeCompile(Pe,N),Je=xe.acquireProgram(Pe,ze),Ie.set(ze,Je),te.uniforms=Pe.uniforms;const qe=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=it.uniform),Qt(R,Pe),te.needsLights=zr(R),te.lightsStateVersion=Ne,te.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.directionalShadowMap.value=Y.state.directionalShadowMap,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotShadowMap.value=Y.state.spotShadowMap,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMap.value=Y.state.pointShadowMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function si(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=wc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Qt(R,k){const ee=$e.get(R);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function _n(R,k,ee,te,Y){k.isScene!==!0&&(k=Fe),et.resetTextureUnits();const Te=k.fog,Ne=te.isMeshStandardMaterial?k.environment:null,Pe=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ba,ze=(te.isMeshStandardMaterial?T:O).get(te.envMap||Ne),Ie=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let Ft=za;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ft=N.toneMapping);const xn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,xt=xn!==void 0?xn.length:0,Ve=$e.get(te),Xt=M.state.lights;if(q===!0&&(le===!0||R!==D)){const Rn=R===D&&te.id===J;it.setState(te,R,Rn)}let gt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Xt.state.version||Ve.outputColorSpace!==Pe||Y.isBatchedMesh&&Ve.batching===!1||!Y.isBatchedMesh&&Ve.batching===!0||Y.isBatchedMesh&&Ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Y.isInstancedMesh&&Ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ve.instancingMorph===!1&&Y.morphTexture!==null||Ve.envMap!==ze||te.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==it.numPlanes||Ve.numIntersection!==it.numIntersection)||Ve.vertexAlphas!==Ie||Ve.vertexTangents!==Je||Ve.morphTargets!==qe||Ve.morphNormals!==ct||Ve.morphColors!==At||Ve.toneMapping!==Ft||Ve.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,Ve.__version=te.version);let Yt=Ve.currentProgram;gt===!0&&(Yt=Fa(te,k,Y));let sn=!1,yn=!1,Ir=!1;const Ht=Yt.getUniforms(),ri=Ve.uniforms;if(Ge.useProgram(Yt.program)&&(sn=!0,yn=!0,Ir=!0),te.id!==J&&(J=te.id,yn=!0),sn||D!==R){Ht.setValue(j,"projectionMatrix",R.projectionMatrix),Ht.setValue(j,"viewMatrix",R.matrixWorldInverse);const Rn=Ht.map.cameraPosition;Rn!==void 0&&Rn.setValue(j,Ee.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&Ht.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ht.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,yn=!0,Ir=!0)}if(Y.isSkinnedMesh){Ht.setOptional(j,Y,"bindMatrix"),Ht.setOptional(j,Y,"bindMatrixInverse");const Rn=Y.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ht.setValue(j,"boneTexture",Rn.boneTexture,et))}Y.isBatchedMesh&&(Ht.setOptional(j,Y,"batchingTexture"),Ht.setValue(j,"batchingTexture",Y._matricesTexture,et),Ht.setOptional(j,Y,"batchingIdTexture"),Ht.setValue(j,"batchingIdTexture",Y._indirectTexture,et),Ht.setOptional(j,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ht.setValue(j,"batchingColorTexture",Y._colorsTexture,et));const aa=ee.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0)&&ht.update(Y,ee,Yt),(yn||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Ht.setValue(j,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ri.envMap.value=ze,ri.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(ri.envMapIntensity.value=k.environmentIntensity),yn&&(Ht.setValue(j,"toneMappingExposure",N.toneMappingExposure),Ve.needsLights&&ia(ri,Ir),Te&&te.fog===!0&&We.refreshFogUniforms(ri,Te),We.refreshMaterialUniforms(ri,te,W,L,M.state.transmissionRenderTarget[R.id]),wc.upload(j,si(Ve),ri,et)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(wc.upload(j,si(Ve),ri,et),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ht.setValue(j,"center",Y.center),Ht.setValue(j,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(j,"normalMatrix",Y.normalMatrix),Ht.setValue(j,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Rn=te.uniformsGroups;for(let Sn=0,Br=Rn.length;Sn<Br;Sn++){const jr=Rn[Sn];zt.update(jr,Yt),zt.bind(jr,Yt)}}return Yt}function ia(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function zr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,k,ee){$e.get(R.texture).__webglTexture=k,$e.get(R.depthTexture).__webglTexture=ee;const te=$e.get(R);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const ee=$e.get(R);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,ee=0){P=R,ie=k,H=ee;let te=!0,Y=null,Te=!1,Ne=!1;if(R){const ze=$e.get(R);ze.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(j.FRAMEBUFFER,null),te=!1):ze.__webglFramebuffer===void 0?et.setupRenderTarget(R):ze.__hasExternalTextures&&et.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ne=!0);const Je=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?Y=Je[k][ee]:Y=Je[k],Te=!0):R.samples>0&&et.useMultisampledRTT(R)===!1?Y=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,C.copy(R.viewport),G.copy(R.scissor),ce=R.scissorTest}else C.copy(be).multiplyScalar(W).floor(),G.copy(U).multiplyScalar(W).floor(),ce=ne;if(Ge.bindFramebuffer(j.FRAMEBUFFER,Y)&&te&&Ge.drawBuffers(R,Y),Ge.viewport(C),Ge.scissor(G),Ge.setScissorTest(ce),Te){const ze=$e.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+k,ze.__webglTexture,ee)}else if(Ne){const ze=$e.get(R.texture),Ie=k||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,Ie)}J=-1},this.readRenderTargetPixels=function(R,k,ee,te,Y,Te,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ge.bindFramebuffer(j.FRAMEBUFFER,Pe);try{const ze=R.texture,Ie=ze.format,Je=ze.type;if(!yt.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-te&&ee>=0&&ee<=R.height-Y&&j.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),Te)}finally{const ze=P!==null?$e.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,k,ee,te,Y,Te,Ne){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ge.bindFramebuffer(j.FRAMEBUFFER,Pe);try{const ze=R.texture,Ie=ze.format,Je=ze.type;if(!yt.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-te&&ee>=0&&ee<=R.height-Y){const qe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,qe),j.bufferData(j.PIXEL_PACK_BUFFER,Te.byteLength,j.STREAM_READ),j.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),0),j.flush();const ct=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);await Jy(j,ct,4);try{j.bindBuffer(j.PIXEL_PACK_BUFFER,qe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Te)}finally{j.deleteBuffer(qe),j.deleteSync(ct)}return Te}}finally{const ze=P!==null?$e.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(R,k=null,ee=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const te=Math.pow(2,-ee),Y=Math.floor(R.image.width*te),Te=Math.floor(R.image.height*te),Ne=k!==null?k.x:0,Pe=k!==null?k.y:0;et.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,Ne,Pe,Y,Te),Ge.unbindTexture()},this.copyTextureToTexture=function(R,k,ee=null,te=null,Y=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,R=arguments[1],k=arguments[2],Y=arguments[3]||0,ee=null);let Te,Ne,Pe,ze,Ie,Je;ee!==null?(Te=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Pe=ee.min.x,ze=ee.min.y):(Te=R.image.width,Ne=R.image.height,Pe=0,ze=0),te!==null?(Ie=te.x,Je=te.y):(Ie=0,Je=0);const qe=Ye.convert(k.format),ct=Ye.convert(k.type);et.setTexture2D(k,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,k.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,k.unpackAlignment);const At=j.getParameter(j.UNPACK_ROW_LENGTH),Ft=j.getParameter(j.UNPACK_IMAGE_HEIGHT),xn=j.getParameter(j.UNPACK_SKIP_PIXELS),xt=j.getParameter(j.UNPACK_SKIP_ROWS),Ve=j.getParameter(j.UNPACK_SKIP_IMAGES),Xt=R.isCompressedTexture?R.mipmaps[Y]:R.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Xt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Xt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Pe),j.pixelStorei(j.UNPACK_SKIP_ROWS,ze),R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Y,Ie,Je,Te,Ne,qe,ct,Xt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Y,Ie,Je,Xt.width,Xt.height,qe,Xt.data):j.texSubImage2D(j.TEXTURE_2D,Y,Ie,Je,Te,Ne,qe,ct,Xt),j.pixelStorei(j.UNPACK_ROW_LENGTH,At),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ft),j.pixelStorei(j.UNPACK_SKIP_PIXELS,xn),j.pixelStorei(j.UNPACK_SKIP_ROWS,xt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ve),Y===0&&k.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(R,k,ee=null,te=null,Y=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,R=arguments[2],k=arguments[3],Y=arguments[4]||0);let Te,Ne,Pe,ze,Ie,Je,qe,ct,At;const Ft=R.isCompressedTexture?R.mipmaps[Y]:R.image;ee!==null?(Te=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Pe=ee.max.z-ee.min.z,ze=ee.min.x,Ie=ee.min.y,Je=ee.min.z):(Te=Ft.width,Ne=Ft.height,Pe=Ft.depth,ze=0,Ie=0,Je=0),te!==null?(qe=te.x,ct=te.y,At=te.z):(qe=0,ct=0,At=0);const xn=Ye.convert(k.format),xt=Ye.convert(k.type);let Ve;if(k.isData3DTexture)et.setTexture3D(k,0),Ve=j.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)et.setTexture2DArray(k,0),Ve=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,k.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,k.unpackAlignment);const Xt=j.getParameter(j.UNPACK_ROW_LENGTH),gt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Yt=j.getParameter(j.UNPACK_SKIP_PIXELS),sn=j.getParameter(j.UNPACK_SKIP_ROWS),yn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ft.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ft.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ze),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ie),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Je),R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Ve,Y,qe,ct,At,Te,Ne,Pe,xn,xt,Ft.data):k.isCompressedArrayTexture?j.compressedTexSubImage3D(Ve,Y,qe,ct,At,Te,Ne,Pe,xn,Ft.data):j.texSubImage3D(Ve,Y,qe,ct,At,Te,Ne,Pe,xn,xt,Ft),j.pixelStorei(j.UNPACK_ROW_LENGTH,Xt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,gt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Yt),j.pixelStorei(j.UNPACK_SKIP_ROWS,sn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,yn),Y===0&&k.generateMipmaps&&j.generateMipmap(Ve),Ge.unbindTexture()},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&et.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?et.setTextureCube(R,0):R.isData3DTexture?et.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?et.setTexture2DArray(R,0):et.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){ie=0,H=0,P=null,Ge.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===ph?"display-p3":"srgb",i.unpackColorSpace=bt.workingColorSpace===Ic?"display-p3":"srgb"}}class cA extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class uA extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);function fA(){const o=Ji.useRef(null),t=Ji.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null});return Ji.useEffect(()=>{if(!o.current)return;const i=o.current,s=t.current,l=`
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,f=`
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      vec3 brandMix(float r, float g, float b) {
        vec3 green = vec3(0.345, 0.788, 0.075);
        vec3 blue = vec3(0.180, 0.678, 0.839);
        vec3 white = vec3(1.0);
        return green * r + blue * g + white * b;
      }

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.040 / abs(fract((p.y * 0.62) + sin((rx + time) * xScale) * yScale + 0.15) - 0.5);
        float g = 0.036 / abs(fract((p.y * 0.62) + sin((gx + time * 0.88) * xScale) * yScale + 0.38) - 0.5);
        float b = 0.030 / abs(fract((p.y * 0.62) + sin((bx + time * 1.12) * xScale) * yScale + 0.62) - 0.5);

        vec3 base = vec3(0.063, 0.133, 0.180);
        vec3 glow = brandMix(r, g, b);
        float spread = 0.62 + 0.38 * smoothstep(1.9, 0.2, length(p));
        vec3 color = base + glow * spread * 0.5;

        gl_FragColor = vec4(color, 1.0);
      }
    `,h=()=>{s.scene=new cA,s.renderer=new lA({canvas:i,alpha:!0,antialias:!0}),s.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.renderer.setClearColor(new wt(1057326),1),s.camera=new U_(-1,1,1,-1,0,1),s.uniforms={resolution:{value:[i.clientWidth,i.clientHeight]},time:{value:0},xScale:{value:1.28},yScale:{value:.24},distortion:{value:.08}};const m=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],_=new ja;_.setAttribute("position",new gi(new Float32Array(m),3));const y=new uA({vertexShader:l,fragmentShader:f,uniforms:s.uniforms,side:bi});s.mesh=new Ai(_,y),s.scene.add(s.mesh),g()},p=()=>{s.uniforms&&(s.uniforms.time.value+=.0045),s.renderer&&s.scene&&s.camera&&s.renderer.render(s.scene,s.camera),s.animationId=requestAnimationFrame(p)},g=()=>{if(!s.renderer||!s.uniforms)return;const m=i.getBoundingClientRect(),_=Math.max(1,Math.floor(m.width)),y=Math.max(1,Math.floor(m.height));s.renderer.setSize(_,y,!1),s.uniforms.resolution.value=[_,y]};return h(),p(),window.addEventListener("resize",g),()=>{var m,_;s.animationId&&cancelAnimationFrame(s.animationId),window.removeEventListener("resize",g),s.mesh&&((m=s.scene)==null||m.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material instanceof Vo&&s.mesh.material.dispose()),(_=s.renderer)==null||_.dispose()}},[]),c.jsx("canvas",{ref:o,className:"hero-shader-canvas","aria-hidden":"true"})}const dA=[{label:"Education",href:"/en/education.php",links:[["Community","/en/member.php"],["School Ecosystem","/en/education.php"]]},{label:"Experience",href:"/en/experience-passport.php",links:[["Experience Identity","/en/experience-passport.php"]]},{label:"Enterprise",href:"/economy",links:[["Business Ecosystem","/en/business-club.php"],["Become a partner","/partner"],["Investor","/en/investor.php"],["Service and Product","/en/services-products.php"]]},{label:"Environment",href:"/environment",links:[["Sustainability","/en/environment.php"],["Projects","/en/projects.php"]]}];function Ur({loginHref:o="#login",languagePage:t="index.php"}){return c.jsx("header",{className:"site-header",children:c.jsxs("nav",{className:"nav","aria-label":"Primary navigation",children:[c.jsx("a",{className:"brand",href:"/en/index.php",children:c.jsx("img",{className:"header-logo",src:"/images/logo.png",alt:"EI.one"})}),c.jsxs("div",{className:"nav-links",children:[c.jsx("a",{href:"/en/index.php",children:"Home"}),dA.map(i=>c.jsxs("div",{className:"nav-item has-submenu",children:[c.jsxs("a",{href:i.href,children:[i.label," ",c.jsx("i",{className:"fa-solid fa-chevron-down","aria-hidden":"true"})]}),c.jsx("div",{className:"submenu",children:i.links.map(([s,l])=>c.jsx("a",{href:l,children:s},s))})]},i.label)),c.jsx("a",{href:"/en/about-us.php",children:"About"})]}),c.jsx("a",{className:"button secondary",href:o,children:"Login"}),c.jsxs("div",{className:"lang has-submenu","aria-label":"Language selector",children:[c.jsxs("button",{type:"button",children:["EN ",c.jsx("i",{className:"fa-solid fa-caret-down","aria-hidden":"true"})]}),c.jsxs("div",{className:"submenu lang-menu",children:[c.jsx("a",{href:`/de/${t}`,children:"DE"}),c.jsx("a",{href:`/it/${t}`,children:"IT"}),c.jsx("a",{href:`/fr/${t}`,children:"FR"}),c.jsx("a",{href:`/en/${t}`,children:"EN"})]})]})]})})}function Lr(){return c.jsx("footer",{className:"site-footer",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"footer-grid",children:[c.jsxs("div",{className:"footer-about",children:[c.jsx("a",{className:"footer-logo",href:"/en/index.php","aria-label":"ei.one",children:c.jsx("img",{src:"/images/logo.png",alt:"ei.one"})}),c.jsx("p",{children:"ei.one - The ecosystem where people build real experience and companies grow by hiring on what people can actually do."})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"Companies"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"/business-club",children:"Business Ecosystem"})}),c.jsx("li",{children:c.jsx("a",{href:"/partner",children:"Become a Partner"})}),c.jsx("li",{children:c.jsx("a",{href:"/sponsor",children:"Sponsor"})}),c.jsx("li",{children:c.jsx("a",{href:"/investors",children:"Investors"})}),c.jsx("li",{children:c.jsx("a",{href:"/services-products",children:"Services & Products"})})]})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"Talents"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"/experience-passport",children:"Experience Identity"})}),c.jsx("li",{children:c.jsx("a",{href:"/academy",children:"Academy"})}),c.jsx("li",{children:c.jsx("a",{href:"/recruitment",children:"Recruitment"})})]})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"Ecosystem"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"/about",children:"About Us"})}),c.jsx("li",{children:c.jsx("a",{href:"/education",children:"Education"})}),c.jsx("li",{children:c.jsx("a",{href:"/economy",children:"Economy"})}),c.jsx("li",{children:c.jsx("a",{href:"/environment",children:"Environment"})}),c.jsx("li",{children:c.jsx("a",{href:"/projects",children:"Projects"})}),c.jsx("li",{children:c.jsx("a",{href:"/contact",children:"Contact"})})]})]})]}),c.jsxs("div",{className:"footer-contact",children:[c.jsx("h3",{children:"Contact"}),c.jsxs("p",{children:[c.jsx("strong",{children:"ei.one"}),c.jsx("br",{}),"Netmaster (Schweiz) AG",c.jsx("br",{}),"Toedistrasse 56",c.jsx("br",{}),"CH - 8810 Horgen"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Tel:"})," +41 44 542 47 47"]})]}),c.jsxs("div",{className:"copyright",children:[c.jsx("span",{children:"Copyright 2026 ei.one - Ecosystem Intelligence. All rights reserved."}),c.jsxs("span",{className:"footer-legal",children:[c.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"}),c.jsx("a",{href:"/terms-and-conditions",children:"Terms and Conditions"})]})]})]})})}function cs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function hA(){return Ji.useEffect(()=>{const o="Education - EI.one School Ecosystem & Academy",t="EI.one Education connects school ecosystems, academy journeys and verified experiences so learning becomes visible, attestable and useful for future opportunities.";document.title=o,cs("description",t),cs("keywords","EI.one education, school ecosystem, academy, experience identity, verified learning, talents, skills"),cs("og:title",o,"property"),cs("og:description",t,"property"),cs("og:url","https://ei.one/en/education","property"),cs("twitter:title",o),cs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/education")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Ur,{loginHref:"#education-login",languagePage:"education.php"}),c.jsxs("main",{className:"education-page",children:[c.jsx("section",{className:"education-hero",children:c.jsxs("div",{className:"wrap education-hero-grid",children:[c.jsxs("div",{children:[c.jsx("p",{className:"education-kicker",children:"Schools"}),c.jsx("h1",{children:"Turn experience into growth of relevance."}),c.jsx("p",{children:"Transform your students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge with companies. Your students' experiences become your prestige."})]}),c.jsxs("div",{className:"education-hero-card",id:"education-login",children:[c.jsx("img",{src:"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=84",alt:"Students collaborating in a bright learning environment"}),c.jsxs("div",{children:[c.jsx("strong",{children:"School Ecosystem"}),c.jsx("span",{children:"Learning, mentoring, projects and verified experiences connected in one growth path."})]})]})]})}),c.jsx("section",{className:"human-center",children:c.jsxs("div",{className:"wrap human-center-grid",children:[c.jsxs("div",{className:"human-center-copy",children:[c.jsx("h2",{children:"The Human at the Center"}),c.jsx("p",{children:"Humans are at the center of every sustainable development. For us, social sustainability means combining economic progress with responsibility towards people, communities, and future generations."}),c.jsx("p",{children:"At EI.one, we believe that sustainable innovation can only emerge when people have access to knowledge, education, and new opportunities. That is why we promote a corporate culture based on collaboration, trust, diversity, and personal development."})]}),c.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[c.jsx("img",{src:"/images/human-at-center.png",alt:"People collaborating around a table in a bright learning community"}),c.jsx("div",{className:"human-center-glow"})]})]})}),c.jsx("section",{className:"education-pillars",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"education-section-head",children:[c.jsx("h2",{children:"Education & Networking"}),c.jsx("p",{children:"Our ecosystem connects companies, talents, educational institutions, and experts to share knowledge and create new opportunities."})]}),c.jsxs("div",{className:"education-pillar-grid",children:[c.jsxs("article",{children:[c.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),c.jsx("h3",{children:"Education Initiatives"}),c.jsx("p",{children:"Continuous development and skill building."})]}),c.jsxs("article",{children:[c.jsx("i",{className:"fa-solid fa-users-viewfinder","aria-hidden":"true"}),c.jsx("h3",{children:"Talent Promotion"}),c.jsx("p",{children:"Helping people reach their full potential."})]}),c.jsxs("article",{children:[c.jsx("i",{className:"fa-solid fa-handshake-simple","aria-hidden":"true"}),c.jsx("h3",{children:"Cooperation"}),c.jsx("p",{children:"Innovation through collaboration across borders."})]})]})]})}),c.jsx("section",{className:"human-center",children:c.jsxs("div",{className:"wrap human-center-grid",children:[c.jsxs("div",{className:"human-center-copy",children:[c.jsx("h2",{children:"Inclusive & Human Economy"}),c.jsx("p",{children:"Social sustainability for us also means promoting new forms of collaboration. In an increasingly connected world, innovation and progress no longer arise in isolation but through cooperation between people, companies, and organizations."}),c.jsx("p",{children:"EI.one supports this development through a globally oriented network that brings together talents, ideas, and projects. Our goal is to promote an economy that is human, inclusive, and future-oriented."})]}),c.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[c.jsx("img",{src:"/images/inclusive.jpg",alt:"inclusive and human economy"}),c.jsx("div",{className:"human-center-glow"})]})]})}),c.jsx("section",{className:"education-cta",children:c.jsxs("div",{className:"wrap education-cta-box",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Developing Solutions Together"}),c.jsx("p",{children:"Become part of a community based on trust and human growth."})]}),c.jsxs("div",{className:"education-actions",children:[c.jsx("a",{className:"button secondary",href:"/en/talent.php",children:"Become a Talent"}),c.jsx("a",{className:"button",href:"/en/contact.php",children:"Contact"})]})]})})]}),c.jsx(Lr,{})]})}function us(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function pA(){return Ji.useEffect(()=>{const o="Experience Passport - EI.one Experience Identity",t="The EI.one Experience Passport turns real work, learning, mentoring and projects into verified proof of what people can actually do.";document.title=o,us("description",t),us("keywords","EI.one experience passport, experience identity, verified experience, talent profile, skills proof"),us("og:title",o,"property"),us("og:description",t,"property"),us("og:url","https://ei.one/en/experience-passport","property"),us("twitter:title",o),us("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/experience-passport")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Ur,{loginHref:"#experience-login",languagePage:"experience-passport.php"}),c.jsxs("main",{className:"experience-page",children:[c.jsx("section",{className:"experience-hero",children:c.jsxs("div",{className:"wrap experience-hero-grid",children:[c.jsxs("div",{className:"experience-hero-copy",children:[c.jsx("h1",{children:"Experience Identity"}),c.jsx("p",{children:"Your digital record of what you've actually done. Verified by the companies who had you do it, anchored on the blockchain as a credential that belongs to you forever."}),c.jsx("p",{className:"experience-quote",children:'"Your experiences build your future."'})]}),c.jsxs("div",{className:"experience-proof-map",id:"experience-login","aria-label":"Experience Identity proof flow",children:[c.jsxs("div",{className:"proof-orbit",children:[c.jsx("span",{className:"proof-core",children:c.jsx("i",{className:"fa-solid fa-fingerprint","aria-hidden":"true"})}),c.jsxs("span",{className:"proof-node work",children:[c.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),c.jsx("strong",{children:"Work"})]}),c.jsxs("span",{className:"proof-node learn",children:[c.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),c.jsx("strong",{children:"Learn"})]}),c.jsxs("span",{className:"proof-node mentor",children:[c.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),c.jsx("strong",{children:"Mentor"})]})]}),c.jsxs("div",{className:"proof-lines",children:[c.jsxs("div",{children:[c.jsx("span",{children:"01"}),c.jsx("strong",{children:"Do real work"})]}),c.jsxs("div",{children:[c.jsx("span",{children:"02"}),c.jsx("strong",{children:"Get it verified"})]}),c.jsxs("div",{children:[c.jsx("span",{children:"03"}),c.jsx("strong",{children:"Build your future"})]})]})]})]})}),c.jsx("section",{className:"human-center",children:c.jsxs("div",{className:"wrap human-center-grid",children:[c.jsxs("div",{className:"human-center-copy",children:[c.jsx("h2",{children:"The CV is broken. The Identity fixes it."}),c.jsx("p",{children:"A CV says whatever you want it to. It also says very little of substance: job titles, years, keywords. In the age of the AI transition, that's not enough for anyone â€” not for job seekers, not for employers."}),c.jsx("p",{children:"The Experience Identity is different. Every experience you add is attested by whoever had you do it â€” a company in the ecosystem, an Academy partner, a real project. What people see is your actual work, not your self-promotion."})]}),c.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[c.jsx("img",{src:"/images/identity.jpg",alt:"identity"}),c.jsx("div",{className:"human-center-glow"})]})]})}),c.jsx("section",{className:"education-pillars",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"education-section-head",children:[c.jsx("h2",{children:"How it works"}),c.jsx("p",{children:"Three steps to build a Identity that actually shows what you can do."})]}),c.jsxs("div",{className:"education-pillar-grid",children:[c.jsxs("article",{children:[c.jsx("i",{className:"fa-solid fa-fingerprint"}),c.jsx("span",{className:"training-step",children:"01"}),c.jsx("h3",{children:"Create your Identity"}),c.jsx("p",{children:"A unique digital profile with a shareable link. It's yours, it follows you across your whole working life, no matter where you work."})]}),c.jsxs("article",{children:[c.jsx("i",{className:"fa-solid fa-layer-group"}),c.jsx("span",{className:"training-step",children:"02"}),c.jsx("h3",{children:"Collect verified experience"}),c.jsx("p",{children:"Every experience at an ecosystem company is attested by whoever had you do it and recorded on the blockchain as an immutable credential. Attachments, roles, results â€” all verifiable."})]}),c.jsxs("article",{children:[c.jsx("i",{className:"fa-solid fa-share-nodes"}),c.jsx("span",{className:"training-step",children:"03"}),c.jsx("h3",{children:"Share when it counts"}),c.jsx("p",{children:"Choose field by field what's public, what's private, what's visible only to people with the link. You decide who sees what."})]})]})]})}),c.jsx("section",{className:"identity-inputs","aria-labelledby":"identity-inputs-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"identity-inputs-head",children:[c.jsx("h2",{id:"identity-inputs-title",children:"What you can put in the Identity"}),c.jsx("p",{children:"Concrete experience, not generic keywords."})]}),c.jsxs("div",{className:"identity-inputs-grid",children:[c.jsxs("article",{className:"identity-input-card work",children:[c.jsx("span",{className:"identity-card-number",children:"01"}),c.jsx("span",{className:"identity-input-icon",children:c.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"})}),c.jsx("h3",{children:"Work experience"}),c.jsx("p",{children:"Roles, projects, responsibilities at ecosystem companies."})]}),c.jsxs("article",{className:"identity-input-card academy",children:[c.jsx("span",{className:"identity-card-number",children:"02"}),c.jsx("span",{className:"identity-input-icon",children:c.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),c.jsx("h3",{children:"Academy tracks"}),c.jsx("p",{children:"Courses and training completed with sponsors and learning partners."})]}),c.jsxs("article",{className:"identity-input-card projects",children:[c.jsx("span",{className:"identity-card-number",children:"03"}),c.jsx("span",{className:"identity-input-icon",children:c.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),c.jsx("h3",{children:"Projects"}),c.jsx("p",{children:"Work delivered, with results, duration and the role you played."})]}),c.jsxs("article",{className:"identity-input-card skills",children:[c.jsx("span",{className:"identity-card-number",children:"04"}),c.jsx("span",{className:"identity-input-icon",children:c.jsx("i",{className:"fa-solid fa-language","aria-hidden":"true"})}),c.jsx("h3",{children:"Skills & languages"}),c.jsx("p",{children:"Technical skills, soft skills, languages - linked to the experience that proves them."})]})]})]})}),c.jsx("section",{className:"identity-difference","aria-labelledby":"identity-difference-title",children:c.jsxs("div",{className:"wrap",children:[c.jsx("div",{className:"identity-difference-head",children:c.jsx("h2",{id:"identity-difference-title",children:"Why it's different"})}),c.jsxs("div",{className:"identity-difference-grid",children:[c.jsxs("article",{children:[c.jsx("span",{className:"difference-line"}),c.jsx("span",{className:"difference-icon",children:c.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),c.jsx("h3",{children:"Verified at the source, signed on-chain"}),c.jsx("p",{children:"Every experience is attested by whoever had you do it and anchored on the blockchain as a verifiable credential. Not words, cryptographic proof."})]}),c.jsxs("article",{children:[c.jsx("span",{className:"difference-line"}),c.jsx("span",{className:"difference-icon",children:c.jsx("i",{className:"fa-solid fa-user-lock","aria-hidden":"true"})}),c.jsx("h3",{children:"Under your control"}),c.jsx("p",{children:"You decide what's public, what's private and what's visible only via a shared link."})]}),c.jsxs("article",{children:[c.jsx("span",{className:"difference-line"}),c.jsx("span",{className:"difference-icon",children:c.jsx("i",{className:"fa-solid fa-infinity","aria-hidden":"true"})}),c.jsx("h3",{children:"For your whole career"}),c.jsx("p",{children:"The Identity follows you from one role to the next. It grows with you, even if you change company."})]})]})]})}),c.jsx("section",{className:"ecosystem-connect","aria-labelledby":"ecosystem-connect-title",children:c.jsxs("div",{className:"wrap ecosystem-connect-grid",children:[c.jsxs("div",{className:"ecosystem-connect-media",children:[c.jsx("img",{src:"/images/connected-ecosystem.jpeg",alt:"ecosystem workspace"}),c.jsxs("div",{className:"ecosystem-connect-badge",children:[c.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),"Identity connects the ecosystem"]})]}),c.jsxs("div",{className:"ecosystem-connect-copy",children:[c.jsx("h2",{id:"ecosystem-connect-title",children:"Connected to the rest of the ecosystem"}),c.jsx("p",{children:"The Identity isn't an isolated page. It's where the two doors of ei.one meet."}),c.jsxs("div",{className:"ecosystem-connection-list",children:[c.jsxs("article",{children:[c.jsx("span",{className:"ecosystem-connection-icon",children:c.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),c.jsx("strong",{children:"Academy"}),c.jsx("p",{children:"when you finish a learning track, the experience lands straight in your Identity"}),c.jsx("em",{children:"coming soon"})]}),c.jsxs("article",{children:[c.jsx("span",{className:"ecosystem-connection-icon",children:c.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),c.jsx("strong",{children:"Recruitment"}),c.jsx("p",{children:"companies search on the experience in your Identity, not on CVs"}),c.jsx("em",{children:"coming soon"})]}),c.jsxs("article",{children:[c.jsx("span",{className:"ecosystem-connection-icon",children:c.jsx("i",{className:"fa-solid fa-people-group","aria-hidden":"true"})}),c.jsx("strong",{children:"Business Ecosystem"}),c.jsx("p",{children:"the ecosystem companies attest the experience you've built working with them"})]})]})]})]})}),c.jsx("section",{className:"identity-start","aria-labelledby":"identity-start-title",children:c.jsxs("div",{className:"wrap identity-start-grid",children:[c.jsxs("div",{className:"identity-start-copy",children:[c.jsx("h2",{id:"identity-start-title",children:"Start building your Identity."}),c.jsx("p",{children:"Open the app, sign up and start adding your first experiences."}),c.jsxs("div",{className:"identity-start-actions",children:[c.jsx("a",{className:"button identity-primary",href:"/register",children:"Create your Identity"}),c.jsx("a",{className:"button identity-login",href:"/login",children:"Log in"}),c.jsx("a",{className:"button identity-outline",href:"/talent",children:"Back to Talent"})]})]}),c.jsxs("div",{className:"identity-start-preview","aria-hidden":"true",children:[c.jsx("span",{className:"identity-start-dot"}),c.jsxs("div",{children:[c.jsx("strong",{children:"01"}),c.jsx("span",{children:"Create Identity"})]}),c.jsxs("div",{children:[c.jsx("strong",{children:"02"}),c.jsx("span",{children:"Add experience"})]}),c.jsxs("div",{children:[c.jsx("strong",{children:"03"}),c.jsx("span",{children:"Share proof"})]})]})]})})]}),c.jsx(Lr,{})]})}function fs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function mA(){return Ji.useEffect(()=>{const o="Enterprise - EI.one Economic Sustainability",t="EI.one Enterprise turns internships, project work and mentoring into verified talent, trusted partnerships and business growth.";document.title=o,fs("description",t),fs("keywords","EI.one enterprise, economy, business ecosystem, verified talent, economic sustainability, business growth"),fs("og:title",o,"property"),fs("og:description",t,"property"),fs("og:url","https://ei.one/en/economy","property"),fs("twitter:title",o),fs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/economy")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Ur,{loginHref:"/login",languagePage:"economy.php"}),c.jsxs("main",{className:"economy-page",children:[c.jsx("section",{className:"economy-hero",children:c.jsxs("div",{className:"wrap economy-hero-grid",children:[c.jsxs("div",{className:"economy-hero-copy",children:[c.jsx("h1",{children:"Enterprise"}),c.jsx("h2",{children:"Turn experience into business growth."}),c.jsx("p",{children:"Internships, project work and mentoring become a channel of verified talent, trusted partnerships and a qualified commercial network. Your experiences attract the best. The best grow your business."}),c.jsxs("div",{className:"economy-hero-actions",children:[c.jsx("a",{className:"button",href:"/en/business-club.php",children:"Enter Business Ecosystem"}),c.jsx("a",{className:"button secondary",href:"/en/partner.php",children:"Become a Partner"})]})]}),c.jsxs("div",{className:"economy-hero-visual","aria-label":"Business growth ecosystem preview",children:[c.jsxs("div",{className:"economy-growth-card main",children:[c.jsx("span",{children:c.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),c.jsx("strong",{children:"Business growth"})]}),c.jsxs("div",{className:"economy-growth-card talent",children:[c.jsx("span",{children:c.jsx("i",{className:"fa-solid fa-user-check","aria-hidden":"true"})}),c.jsx("strong",{children:"Verified talent"})]}),c.jsxs("div",{className:"economy-growth-card network",children:[c.jsx("span",{children:c.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),c.jsx("strong",{children:"Trusted partnerships"})]}),c.jsx("div",{className:"economy-orbit one"}),c.jsx("div",{className:"economy-orbit two"})]})]})}),c.jsx("section",{className:"economic-thinking","aria-labelledby":"economic-thinking-title",children:c.jsxs("div",{className:"wrap economic-thinking-grid",children:[c.jsxs("div",{className:"economic-thinking-copy",children:[c.jsx("h2",{id:"economic-thinking-title",children:"New Economic Thinking"}),c.jsx("p",{children:"For us, economic sustainability means more than just financial success. It stands for stable, resilient, and long-term viable business models that promote innovation, use resources efficiently, and simultaneously make a positive contribution to society."}),c.jsx("p",{children:"At EI.one - Ecosystem Intelligence, we develop an intelligent ecosystem that connects companies, technologies, talents, and investors. Our goal is to support organizations in creating sustainable value, opening new markets, and strengthening their competitiveness in the long term."}),c.jsxs("div",{className:"economic-thinking-tags",children:[c.jsx("span",{children:"Stable models"}),c.jsx("span",{children:"Efficient resources"}),c.jsx("span",{children:"New markets"})]})]}),c.jsxs("div",{className:"economic-thinking-media",children:[c.jsx("img",{src:"/images/economic-thinking.jpg",alt:"Digital economic sustainability and business innovation concept"}),c.jsxs("div",{className:"economic-thinking-stat",children:[c.jsx("strong",{children:"Long-term value"}),c.jsx("span",{children:"companies + technologies + talents + investors"})]})]})]})}),c.jsx("section",{className:"technology-strategy","aria-labelledby":"technology-strategy-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"technology-strategy-head",children:[c.jsx("h2",{id:"technology-strategy-title",children:"Technology & Strategy"}),c.jsx("p",{children:"By combining digitalization, platform economy, artificial intelligence, and strategic networks, we enable more efficient work and faster innovation."})]}),c.jsxs("div",{className:"technology-system",children:[c.jsxs("div",{className:"technology-system-hub",children:[c.jsx("span",{children:c.jsx("i",{className:"fa-solid fa-wand-magic-sparkles","aria-hidden":"true"})}),c.jsx("strong",{children:"Faster innovation"}),c.jsx("small",{children:"Technology, networks and resilience working as one operating system."})]}),c.jsxs("article",{className:"technology-system-node digitalization",children:[c.jsx("span",{className:"strategy-icon",children:c.jsx("i",{className:"fa-solid fa-microchip","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Digitalization"}),c.jsx("p",{children:"Optimization of processes through cutting-edge technologies."})]})]}),c.jsxs("article",{className:"technology-system-node networks",children:[c.jsx("span",{className:"strategy-icon",children:c.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Networks"}),c.jsx("p",{children:"Strategic connections for collective growth."})]})]}),c.jsxs("article",{className:"technology-system-node resilience",children:[c.jsx("span",{className:"strategy-icon",children:c.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Resilience"}),c.jsx("p",{children:"Stability even in times of global change."})]})]})]})]})}),c.jsx("section",{className:"future-proof","aria-labelledby":"future-proof-title",children:c.jsxs("div",{className:"wrap future-proof-grid",children:[c.jsxs("div",{className:"future-proof-copy",children:[c.jsx("h2",{id:"future-proof-title",children:"Future-Proof Systems"}),c.jsx("p",{children:"Economic sustainability for us means creating systems that remain stable even in times of uncertainty and global change. Companies should not only grow but continuously evolve and become resilient to change."}),c.jsxs("div",{className:"future-proof-statement",children:[c.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),c.jsx("span",{children:"EI.one stands for a new generation of economic systems - intelligent, connected, and sustainable."})]})]}),c.jsxs("div",{className:"future-proof-media",children:[c.jsx("img",{src:"/images/future-proof.jpeg",alt:"Future-proof connected system network"}),c.jsxs("div",{className:"future-proof-signals","aria-hidden":"true",children:[c.jsx("span",{children:"Stable"}),c.jsx("span",{children:"Connected"}),c.jsx("span",{children:"Sustainable"})]})]})]})}),c.jsx("section",{className:"economy-final-cta","aria-labelledby":"economy-final-title",children:c.jsx("div",{className:"wrap economy-final-grid",children:c.jsxs("div",{className:"economy-final-copy",children:[c.jsx("h2",{id:"economy-final-title",children:"Ready for the Economy of the Future?"}),c.jsx("p",{children:"Become part of an ecosystem that generates innovation and sustainable added value."}),c.jsxs("div",{className:"economy-final-actions",children:[c.jsx("a",{className:"button economy-final-primary",href:"/en/partner.php",children:"Become a Partner"}),c.jsx("a",{className:"button economy-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})})]}),c.jsx(Lr,{})]})}function ds(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function gA(){return Ji.useEffect(()=>{const o="Environment - EI.one Ecological Sustainability",t="EI.one Environment combines innovation, renewable energies and measurable projects so environmental sustainability becomes an operational choice.";document.title=o,ds("description",t),ds("keywords","EI.one environment, ecological sustainability, renewable energies, measurable projects, sustainable innovation"),ds("og:title",o,"property"),ds("og:description",t,"property"),ds("og:url","https://ei.one/en/environment","property"),ds("twitter:title",o),ds("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/environment")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Ur,{loginHref:"/login",languagePage:"environment.php"}),c.jsxs("main",{className:"environment-page",children:[c.jsx("section",{className:"environment-hero",children:c.jsxs("div",{className:"wrap environment-hero-grid",children:[c.jsxs("div",{className:"environment-hero-copy",children:[c.jsx("h1",{children:"Environment"}),c.jsx("p",{children:"Innovation and renewable energies with measurable projects. Environmental sustainability as an operational choice, not as a slogan."}),c.jsxs("div",{className:"environment-hero-actions",children:[c.jsx("a",{className:"button",href:"/en/projects.php",children:"Discover Projects"}),c.jsx("a",{className:"button secondary",href:"/en/contact.php",children:"Contact"})]})]}),c.jsxs("div",{className:"environment-hero-visual","aria-label":"Ecological sustainability system preview",children:[c.jsxs("div",{className:"environment-core",children:[c.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),c.jsx("strong",{children:"Operational sustainability"})]}),c.jsxs("div",{className:"environment-node energy",children:[c.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"}),c.jsx("span",{children:"Renewable energy"})]}),c.jsxs("div",{className:"environment-node projects",children:[c.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),c.jsx("span",{children:"Measurable projects"})]}),c.jsxs("div",{className:"environment-node impact",children:[c.jsx("i",{className:"fa-solid fa-chart-simple","aria-hidden":"true"}),c.jsx("span",{children:"Visible impact"})]})]})]})}),c.jsx("section",{className:"protect-environment","aria-labelledby":"protect-environment-title",children:c.jsxs("div",{className:"wrap protect-environment-grid",children:[c.jsxs("div",{className:"protect-environment-copy",children:[c.jsx("h2",{id:"protect-environment-title",children:"Protecting Our Environment"}),c.jsx("p",{children:"Protecting our environment is one of the central challenges of the 21st century. For us, ecological sustainability means using natural resources responsibly, using energy efficiently, and developing technologies that reduce the ecological footprint of our economy."}),c.jsx("p",{children:"At EI.one, we combine technological innovation with ecological awareness. Our approach is based on the conviction that sustainable solutions are not only necessary but also offer enormous opportunities for the economy, society, and innovation."}),c.jsxs("div",{className:"protect-environment-points",children:[c.jsx("span",{children:"Responsible resources"}),c.jsx("span",{children:"Efficient energy"}),c.jsx("span",{children:"Reduced footprint"})]})]}),c.jsxs("div",{className:"protect-environment-media",children:[c.jsx("img",{src:"/images/ecological-sustainability.jpg",alt:"Ecological sustainability tree with technology and people"}),c.jsxs("div",{className:"protect-environment-badge",children:[c.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),"Ecology meets innovation"]})]})]})}),c.jsx("section",{className:"sustainable-solutions","aria-labelledby":"sustainable-solutions-title",children:c.jsxs("div",{className:"wrap sustainable-solutions-grid",children:[c.jsxs("div",{className:"sustainable-solutions-intro",children:[c.jsx("h2",{id:"sustainable-solutions-title",children:"Sustainable Solutions"}),c.jsx("p",{children:"Through projects in the fields of renewable energy and energy efficiency, we support companies in making their processes more environmentally friendly."})]}),c.jsxs("div",{className:"sustainable-path",children:[c.jsxs("article",{children:[c.jsx("span",{className:"solution-icon",children:c.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Renewable Energies"}),c.jsx("p",{children:"Focus on climate-friendly energy systems."})]})]}),c.jsxs("article",{children:[c.jsx("span",{className:"solution-icon",children:c.jsx("i",{className:"fa-solid fa-building-shield","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Intelligent Infrastructure"}),c.jsx("p",{children:"Efficient and resource-saving buildings."})]})]}),c.jsxs("article",{children:[c.jsx("span",{className:"solution-icon",children:c.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Resource Preservation"}),c.jsx("p",{children:"Reducing the ecological footprint."})]})]})]})]})}),c.jsx("section",{className:"ecological-progress","aria-labelledby":"ecological-progress-title",children:c.jsxs("div",{className:"wrap ecological-progress-grid",children:[c.jsxs("div",{className:"ecological-progress-copy",children:[c.jsx("h2",{id:"ecological-progress-title",children:"Ecological Sustainability is Progress"}),c.jsx("p",{children:"For us, ecological sustainability does not mean renunciation, but progress. It stands for innovation, responsibility, and the possibility of combining economic development with the protection of our planet."}),c.jsx("p",{children:"El.one pursues the vision of a future where economy, technology, and environment are in balance -- an intelligent ecosystem that enables sustainable solutions."})]}),c.jsx("div",{className:"ecological-progress-visual",children:c.jsx("img",{src:"/images/circular-progress.png",alt:"Bright circular economy loop with renewable energy and recycled materials"})})]})}),c.jsx("section",{className:"environment-final-cta","aria-labelledby":"environment-final-title",children:c.jsxs("div",{className:"wrap environment-final-inner",children:[c.jsx("h2",{id:"environment-final-title",children:"Together for a Healthy Planet"}),c.jsx("p",{children:"Discover our projects for a climate-friendly economy."}),c.jsxs("div",{className:"environment-final-actions",children:[c.jsx("a",{className:"button environment-final-primary",href:"/en/projects.php",children:"Discover Projects"}),c.jsx("a",{className:"button environment-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})]}),c.jsx(Lr,{})]})}function hs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function vA(){return Ji.useEffect(()=>{const o="Partners - EI.one",t="Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem built for sustainable growth.";document.title=o,hs("description",t),hs("keywords","EI.one partner, franchise partner, license partner, white label partner, ecosystem partnership"),hs("og:title",o,"property"),hs("og:description",t,"property"),hs("og:url","https://ei.one/en/partner","property"),hs("twitter:title",o),hs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/partner")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Ur,{loginHref:"/login",languagePage:"partner.php"}),c.jsxs("main",{className:"partner-page",children:[c.jsx("section",{className:"partner-hero",children:c.jsxs("div",{className:"wrap partner-hero-grid",children:[c.jsxs("div",{className:"partner-hero-copy",children:[c.jsx("h1",{children:"Partners"}),c.jsx("p",{children:"Building a sustainable future together. Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem."}),c.jsxs("div",{className:"partner-hero-actions",children:[c.jsx("a",{className:"button",href:"/en/contact.php",children:"Start a Partnership"}),c.jsx("a",{className:"button secondary",href:"/economy",children:"Explore Enterprise"})]})]}),c.jsxs("div",{className:"partner-hero-visual","aria-label":"EI.one partner ecosystem models",children:[c.jsxs("div",{className:"partner-core",children:[c.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),c.jsx("strong",{children:"Shared growth"})]}),c.jsx("div",{className:"partner-model franchise",children:c.jsx("strong",{children:"Franchise"})}),c.jsx("div",{className:"partner-model license",children:c.jsx("strong",{children:"License"})}),c.jsx("div",{className:"partner-model white-label",children:c.jsx("strong",{children:"White Label"})})]})]})}),c.jsx("section",{className:"partner-models","aria-labelledby":"partner-models-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"partner-models-head",children:[c.jsx("h2",{id:"partner-models-title",children:"Choose Your Model"}),c.jsx("p",{children:"Three ways to participate in the EI.one ecosystem, from full local leadership to modular activation and brand-integrated infrastructure."})]}),c.jsxs("div",{className:"partner-model-board",children:[c.jsxs("article",{className:"partner-option recommended",children:[c.jsx("span",{className:"partner-ribbon",children:"Recommended"}),c.jsx("div",{className:"partner-option-icon",children:c.jsx("i",{className:"fa-solid fa-building","aria-hidden":"true"})}),c.jsxs("div",{className:"partner-option-title",children:[c.jsx("h3",{children:"Franchise Partner"}),c.jsx("p",{children:"Build your Local Ecosystem"})]}),c.jsx("p",{children:"The Franchise Partner is the official EI.one representative in a territory. They manage and develop the local ecosystem, coordinating modules, partners, and clients."}),c.jsxs("div",{className:"partner-option-block",children:[c.jsx("h4",{children:"Who it's ideal for"}),c.jsxs("div",{className:"partner-tags",children:[c.jsx("span",{children:"Entrepreneurs"}),c.jsx("span",{children:"Regional Managers"}),c.jsx("span",{children:"Business Developers"}),c.jsx("span",{children:"Network Builders"})]})]}),c.jsxs("div",{className:"partner-option-block",children:[c.jsx("h4",{children:"What's included"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Exclusive territorial rights"}),c.jsx("li",{children:"Full EI.one brand"}),c.jsx("li",{children:"Access to all modules"}),c.jsx("li",{children:"Ongoing central support"}),c.jsx("li",{children:"Certified training"}),c.jsx("li",{children:"Governance system"})]})]}),c.jsx("a",{className:"button partner-option-button",href:"/en/contact.php",children:"Become a Franchise Partner"})]}),c.jsxs("article",{className:"partner-option",children:[c.jsx("div",{className:"partner-option-icon",children:c.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),c.jsxs("div",{className:"partner-option-title",children:[c.jsx("h3",{children:"License Partner"}),c.jsx("p",{children:"Activate a Module in the System"})]}),c.jsx("p",{children:"The License Partner uses one or more EI.one modules within their own company. They remain independent but operate according to ecosystem standards."}),c.jsxs("div",{className:"partner-option-block",children:[c.jsx("h4",{children:"Who it's ideal for"}),c.jsxs("div",{className:"partner-tags",children:[c.jsx("span",{children:"Existing companies"}),c.jsx("span",{children:"Consultants"}),c.jsx("span",{children:"Professional firms"}),c.jsx("span",{children:"Service providers"})]})]}),c.jsxs("div",{className:"partner-option-block",children:[c.jsx("h4",{children:"What's included"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Module usage license"}),c.jsx("li",{children:"Certified methodologies"}),c.jsx("li",{children:"Brand affiliation"}),c.jsx("li",{children:"Access to the network"}),c.jsx("li",{children:"Operational support"})]})]}),c.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Activate a License"})]}),c.jsxs("article",{className:"partner-option",children:[c.jsx("div",{className:"partner-option-icon",children:c.jsx("i",{className:"fa-solid fa-tag","aria-hidden":"true"})}),c.jsxs("div",{className:"partner-option-title",children:[c.jsx("h3",{children:"White Label Partner"}),c.jsx("p",{children:"Your Brand, Our Infrastructure"})]}),c.jsx("p",{children:'The White Label Partner uses EI.one technology, processes, and modules under their own brand. EI.one works "behind the scenes".'}),c.jsxs("div",{className:"partner-option-block",children:[c.jsx("h4",{children:"Who it's ideal for"}),c.jsxs("div",{className:"partner-tags",children:[c.jsx("span",{children:"Corporate"}),c.jsx("span",{children:"Large groups"}),c.jsx("span",{children:"International networks"}),c.jsx("span",{children:"Digital platforms"}),c.jsx("span",{children:"Industrial investors"})]})]}),c.jsxs("div",{className:"partner-option-block",children:[c.jsx("h4",{children:"What's included"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Customized system"}),c.jsx("li",{children:"Full infrastructure"}),c.jsx("li",{children:"Integrated modules"}),c.jsx("li",{children:"Strategic support"}),c.jsx("li",{children:"Global scalability"})]})]}),c.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Request White Label"})]})]})]})}),c.jsx("section",{className:"partner-comparison","aria-labelledby":"partner-comparison-title",children:c.jsxs("div",{className:"wrap",children:[c.jsx("div",{className:"partner-comparison-head",children:c.jsx("h2",{id:"partner-comparison-title",children:"Model Comparison"})}),c.jsx("div",{className:"comparison-table-wrap",children:c.jsxs("table",{className:"comparison-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{scope:"col",children:"Feature"}),c.jsx("th",{scope:"col",children:"Franchise"}),c.jsx("th",{scope:"col",children:"License"}),c.jsx("th",{scope:"col",children:"White Label"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"EI.one Brand"}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status yes",children:[c.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status partial",children:[c.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Partial"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status no",children:[c.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Territorial Rights"}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status yes",children:[c.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Exclusive"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status no",children:[c.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status no",children:[c.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Operational Autonomy"}),c.jsx("td",{children:"Medium"}),c.jsx("td",{children:"High"}),c.jsx("td",{children:"Maximum"})]}),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Module Access"}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status yes",children:[c.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status partial",children:[c.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Selected"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status yes",children:[c.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})})]}),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Scalability"}),c.jsx("td",{children:"Very High"}),c.jsx("td",{children:"Medium"}),c.jsx("td",{children:"Maximum"})]}),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Central Support"}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status yes",children:[c.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status yes",children:[c.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Operational"]})}),c.jsx("td",{children:c.jsxs("span",{className:"comparison-status yes",children:[c.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Strategic"]})})]})]})]})})]})}),c.jsx("section",{className:"partner-benefits","aria-labelledby":"partner-benefits-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"partner-benefits-head",children:[c.jsx("h2",{id:"partner-benefits-title",children:"Why Become an EI.one Partner"}),c.jsx("p",{children:"By joining the EI Generation, you gain access to an already structured, tested, and sustainable growth-oriented ecosystem."})]}),c.jsxs("div",{className:"partner-benefit-map",children:[c.jsxs("div",{className:"partner-benefit-core",children:[c.jsx("span",{children:"You are not just a partner."}),c.jsx("strong",{children:"You are a co-builder of the system."})]}),c.jsxs("article",{className:"partner-benefit-item",children:[c.jsx("span",{className:"partner-benefit-icon",children:c.jsx("i",{className:"fa-solid fa-cubes","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Structured Ecosystem"}),c.jsx("p",{children:"Proven and functioning model"})]})]}),c.jsxs("article",{className:"partner-benefit-item",children:[c.jsx("span",{className:"partner-benefit-icon",children:c.jsx("i",{className:"fa-solid fa-headset","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Continuous Support"}),c.jsx("p",{children:"Dedicated assistance always available"})]})]}),c.jsxs("article",{className:"partner-benefit-item",children:[c.jsx("span",{className:"partner-benefit-icon",children:c.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Access to Projects"}),c.jsx("p",{children:"Real opportunities from the ecosystem"})]})]}),c.jsxs("article",{className:"partner-benefit-item",children:[c.jsx("span",{className:"partner-benefit-icon",children:c.jsx("i",{className:"fa-solid fa-globe","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Ecosystem Network"}),c.jsx("p",{children:"Connections with all the Business Units of the ecosystem"})]})]}),c.jsxs("article",{className:"partner-benefit-item",children:[c.jsx("span",{className:"partner-benefit-icon",children:c.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"ESG & Impact Focus"}),c.jsx("p",{children:"Sustainability as a strategy"})]})]}),c.jsxs("article",{className:"partner-benefit-item",children:[c.jsx("span",{className:"partner-benefit-icon",children:c.jsx("i",{className:"fa-solid fa-rocket","aria-hidden":"true"})}),c.jsxs("div",{children:[c.jsx("h3",{children:"Sustainable Growth"}),c.jsx("p",{children:"Controlled scalability"})]})]})]})]})}),c.jsx("section",{className:"partner-approach","aria-labelledby":"partner-approach-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"partner-approach-panel",children:[c.jsx("img",{src:"/images/our-approach.jpg",alt:"Business partners working together in a bright office"}),c.jsxs("div",{className:"partner-approach-copy",children:[c.jsx("h2",{id:"partner-approach-title",children:"Our Approach"}),c.jsx("p",{children:"At EI.one, we believe in concrete values that guide every partnership. We are not looking for simple affiliates. We are looking for ecosystem leaders."})]})]}),c.jsxs("div",{className:"approach-values",children:[c.jsxs("div",{children:[c.jsx("i",{className:"fa-solid fa-eye","aria-hidden":"true"}),c.jsx("span",{children:"Transparency"})]}),c.jsxs("div",{children:[c.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),c.jsx("span",{children:"Collaboration"})]}),c.jsxs("div",{children:[c.jsx("i",{className:"fa-solid fa-trophy","aria-hidden":"true"}),c.jsx("span",{children:"Meritocracy"})]}),c.jsxs("div",{children:[c.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),c.jsx("span",{children:"Responsibility"})]}),c.jsxs("div",{children:[c.jsx("i",{className:"fa-solid fa-heart","aria-hidden":"true"}),c.jsx("span",{children:"Trust"})]})]})]})}),c.jsx("section",{className:"partner-final-cta","aria-labelledby":"partner-final-title",children:c.jsxs("div",{className:"wrap partner-final-inner",children:[c.jsx("p",{className:"partner-final-kicker",children:"Join the EI Generation"}),c.jsx("h2",{id:"partner-final-title",children:"Are you ready to be part of the EI Generation?"}),c.jsx("p",{children:"Discover the model that suits you best and start your journey."}),c.jsxs("div",{className:"partner-final-actions",children:[c.jsx("a",{className:"button partner-final-primary",href:"/en/contact.php",children:"Become a Franchise Partner"}),c.jsx("a",{className:"button",href:"/en/contact.php",children:"Activate a License"}),c.jsx("a",{className:"button partner-final-outline",href:"/en/contact.php",children:"Request White Label"})]})]})})]}),c.jsx(Lr,{})]})}function _A(){const o=window.location.pathname.toLowerCase();return o.includes("/education")?c.jsx(hA,{}):o.includes("/experience-passport")?c.jsx(pA,{}):o.includes("/economy")?c.jsx(mA,{}):o.includes("/environment")?c.jsx(gA,{}):o.includes("/partner")?c.jsx(vA,{}):c.jsxs(c.Fragment,{children:[c.jsx(Ur,{}),c.jsxs("main",{children:[c.jsxs("section",{className:"hero",children:[c.jsx(fA,{}),c.jsxs("div",{className:"hero-inner",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Ecosystem Intelligence"}),c.jsxs("h1",{children:["The infrastructure that turns every collaboration ",c.jsx("span",{className:"hero-accent",children:"into new opportunities for growth."})]}),c.jsxs("p",{className:"hero-copy",children:["EI.one connects ",c.jsx("strong",{children:"companies, people and schools"})," to turn every collaboration into new relationships, clients, talent and shared knowledge."]}),c.jsx("p",{className:"hero-copy",children:"Every experience feeds a patrimony of value that makes the entire ecosystem stronger, smarter and more capable of growth."}),c.jsxs("div",{className:"actions",children:[c.jsx("a",{className:"button",href:"/business-club",children:"I'm a company →"}),c.jsx("a",{className:"button secondary",href:"/talent",children:"I'm a person →"}),c.jsx("a",{className:"button secondary",href:"/education",children:"I'm a school →"})]})]}),c.jsxs("aside",{className:"login-panel",id:"login","aria-label":"Login panel",children:[c.jsx("h2",{children:"Login"}),c.jsx("p",{children:"Enter the platform"}),c.jsx("label",{className:"field-label",htmlFor:"login-email",children:"Email"}),c.jsx("input",{className:"field",id:"login-email",type:"email",placeholder:"you@email.com"}),c.jsx("label",{className:"field-label",htmlFor:"login-password",children:"Password"}),c.jsx("input",{className:"field",id:"login-password",type:"password",placeholder:"••••••••"}),c.jsx("div",{className:"login-options",children:c.jsx("a",{href:"#",children:"Forgot password?"})}),c.jsx("a",{className:"button full",href:"#",children:"Log in →"}),c.jsxs("p",{className:"login-join",children:["No account yet? ",c.jsx("a",{className:"text-link",href:"/register",children:"Join ei.one"})]})]})]})]}),c.jsx("section",{className:"protagonists","aria-labelledby":"protagonists-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"protagonists-head",children:[c.jsx("h2",{id:"protagonists-title",children:"Three protagonists. One same growth."}),c.jsx("p",{children:"Experience is the raw material. ei.one turns it into value for all three."})]}),c.jsxs("div",{className:"protagonists-grid",children:[c.jsxs("article",{className:"protagonist-card",children:[c.jsx("h3",{children:"For companies — Business growth"}),c.jsx("p",{children:"Turn internships, project work and mentoring into a channel of verified talent, trusted partnerships and qualified commercial network."}),c.jsx("p",{className:"protagonist-quote",children:'"Your experiences attract the best. The best grow your business."'}),c.jsx("a",{className:"protagonist-link",href:"/economy",children:"For companies →"})]}),c.jsxs("article",{className:"protagonist-card",children:[c.jsx("h3",{children:"For talents — Experience Passport"}),c.jsx("p",{children:"Transform internships, projects, mentoring and learning experiences into a verified record of your growth."}),c.jsx("p",{className:"protagonist-quote",children:'"Your experiences become your proof. Your proof becomes your opportunity."'}),c.jsx("a",{className:"protagonist-link",href:"/experience-passport",children:"For people →"})]}),c.jsxs("article",{className:"protagonist-card",children:[c.jsx("h3",{children:"For education — Academy growth"}),c.jsx("p",{children:"Connect learning paths, projects and mentoring into an ecosystem where skills become visible and development continues."}),c.jsx("p",{className:"protagonist-quote",children:'"When learning is connected, growth becomes measurable."'}),c.jsx("a",{className:"protagonist-link",href:"/education",children:"For Schools →"})]})]})]})}),c.jsx("section",{className:"connections","aria-labelledby":"connections-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"connections-head",children:[c.jsx("p",{className:"connections-kicker",children:"Network signals"}),c.jsx("h2",{id:"connections-title",children:"Who we're connected with"}),c.jsx("p",{children:"For clarity, here is the nature of each relationship below."})]}),c.jsxs("div",{className:"connections-grid",children:[c.jsxs("div",{className:"connection-item",children:[c.jsx("a",{className:"connection-logo logo-togo",href:"https://stiftung-togo.ch/",target:"_blank",rel:"noopener","aria-label":"ToGo opening eyes",children:c.jsxs("span",{children:["To",c.jsx("span",{className:"red",children:"Go"})," ",c.jsx("span",{className:"green",children:"opening eyes"})]})}),c.jsx("div",{className:"connection-label",children:"Supported Foundation"})]}),c.jsxs("div",{className:"connection-item",children:[c.jsx("a",{className:"connection-logo logo-sva",href:"https://svazurich.ch/",target:"_blank",rel:"noopener","aria-label":"SVA Zurich",children:c.jsxs("span",{children:[c.jsx("strong",{children:"SVA"})," Zürich"]})}),c.jsx("div",{className:"connection-label",children:"Award Received"})]}),c.jsxs("div",{className:"connection-item",children:[c.jsxs("a",{className:"connection-logo logo-innovation",href:"https://www.standort-zuerich.ch/",target:"_blank",rel:"noopener","aria-label":"Innovation Zurich",children:[c.jsx("span",{className:"innovation-mark","aria-hidden":"true"}),c.jsxs("span",{children:["Innovation",c.jsx("br",{}),"Zurich"]})]}),c.jsx("div",{className:"connection-label",children:"Local Network"})]}),c.jsxs("div",{className:"connection-item",children:[c.jsx("a",{className:"connection-logo logo-eye",href:"https://augenarztpraxis-baden.ch/",target:"_blank",rel:"noopener","aria-label":"AugenarztpraxisPlus",children:"AugenarztpraxisPlus"}),c.jsx("div",{className:"connection-label",children:"Sponsor"})]}),c.jsxs("div",{className:"connection-item",children:[c.jsxs("a",{className:"connection-logo logo-sgo",href:"https://www.sgo-verein.ch/",target:"_blank",rel:"noopener","aria-label":"SGO Verein",children:[c.jsx("span",{children:"SGO"}),c.jsx("small",{children:"www.sgo-verein.ch"})]}),c.jsx("div",{className:"connection-label",children:"Professional Network"})]})]})]})}),c.jsx("section",{className:"platform-status","aria-labelledby":"platform-status-title",children:c.jsx("div",{className:"wrap",children:c.jsxs("div",{className:"status-panel",children:[c.jsxs("div",{className:"status-head",children:[c.jsx("p",{children:"Platform Status Today"}),c.jsx("h2",{id:"platform-status-title",children:"What is live now, and what comes next"})]}),c.jsxs("div",{className:"status-grid",children:[c.jsxs("div",{className:"status-column live-column",children:[c.jsxs("div",{className:"status-badge",children:[c.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"}),"Live today"]}),c.jsxs("ul",{className:"status-list",children:[c.jsxs("li",{className:"live",children:[c.jsx("i",{className:"fa-solid fa-user-plus","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"ei.one account"}),c.jsx("small",{children:"Create your access and enter the platform."})]}),c.jsx("em",{children:"Live"})]}),c.jsxs("li",{className:"live",children:[c.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Experience Identity"}),c.jsx("small",{children:"Build a verified record of what you actually did."})]}),c.jsx("em",{children:"Live"})]}),c.jsxs("li",{className:"live",children:[c.jsx("i",{className:"fa-solid fa-share-nodes","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Verified experiences"}),c.jsx("small",{children:"Add and share experiences attested by companies."})]}),c.jsx("em",{children:"Live"})]}),c.jsxs("li",{className:"live",children:[c.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Business Units"}),c.jsx("small",{children:"Connect with the active ecosystem network."})]}),c.jsx("em",{children:"Live"})]})]})]}),c.jsxs("div",{className:"status-column soon-column",children:[c.jsxs("div",{className:"status-badge soon",children:[c.jsx("i",{className:"fa-solid fa-clock","aria-hidden":"true"}),"Coming soon"]}),c.jsxs("ul",{className:"status-list",children:[c.jsxs("li",{className:"soon",children:[c.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Academy"}),c.jsx("small",{children:"Learning paths with sponsors and partners."})]}),c.jsx("em",{children:"Soon"})]}),c.jsxs("li",{className:"soon",children:[c.jsx("i",{className:"fa-solid fa-magnifying-glass-chart","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Recruitment"}),c.jsx("small",{children:"Companies searching on the Identity."})]}),c.jsx("em",{children:"Soon"})]}),c.jsxs("li",{className:"soon",children:[c.jsx("i",{className:"fa-solid fa-store","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Extended Marketplace"}),c.jsx("small",{children:"Broader access to ecosystem opportunities."})]}),c.jsx("em",{children:"Planned"})]}),c.jsxs("li",{className:"soon",children:[c.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Credential verification"}),c.jsx("small",{children:"On-chain verification for trusted records."})]}),c.jsx("em",{children:"Planned"})]})]})]})]})]})})}),c.jsx("section",{className:"entry-doors","aria-labelledby":"entry-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"entry-head",children:[c.jsx("h2",{id:"entry-title",children:"Where do you want to enter?"}),c.jsx("p",{children:"ei.one is two things held together: an ecosystem of Business Units working in sync, and a platform that rewards the people who work inside it. Pick the right door for you."})]}),c.jsxs("div",{className:"entry-grid",children:[c.jsxs("article",{className:"entry-card companies",children:[c.jsx("div",{className:"entry-kicker",children:"For companies"}),c.jsx("h3",{children:"Activate the ecosystem."}),c.jsx("p",{className:"entry-copy",children:"A system of specialised Business Units — energy, sales, marketing, IT & AI, real estate, 3D — working together. Enter through one, benefit from all."}),c.jsxs("ul",{className:"entry-list",children:[c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-network-wired entry-check","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Business Ecosystem"}),c.jsx("small",{children:"The Business Units in the network"})]})]}),c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-handshake entry-check","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Become a Partner"}),c.jsx("small",{children:"Franchise, license, white label"})]})]}),c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-chart-line entry-check","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Sponsor & Investor"}),c.jsx("small",{children:"Presence and growth"})]})]})]}),c.jsx("a",{className:"entry-link",href:"/business-club",children:"Enter Companies →"})]}),c.jsxs("article",{className:"entry-card talents",children:[c.jsx("div",{className:"entry-kicker",children:"For talents"}),c.jsx("h3",{children:"Build your Experience Identity."}),c.jsx("p",{className:"entry-copy",children:"Learn through the Academy, accumulate verified experience inside the ecosystem's companies, get found when a company actually needs what you can do."}),c.jsxs("ul",{className:"entry-list",children:[c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-id-card entry-check","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Experience Identity"}),c.jsx("small",{children:"Your verified CV"})]}),c.jsx("em",{className:"entry-pill",children:"Live"})]}),c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-graduation-cap entry-check","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Academy"}),c.jsx("small",{children:"Learn on the job"})]}),c.jsx("em",{className:"entry-pill preview",children:"Soon"})]}),c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-magnifying-glass-chart entry-check","aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Recruitment"}),c.jsx("small",{children:"Get found"})]}),c.jsx("em",{className:"entry-pill preview",children:"Soon"})]})]}),c.jsx("a",{className:"entry-link",href:"/talent",children:"Enter Talents →"})]})]})]})}),c.jsx("section",{className:"company-effects","aria-labelledby":"company-effects-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"effects-head",children:[c.jsx("h2",{id:"company-effects-title",children:"What changes for a company that joins ei.one"}),c.jsx("p",{children:'Five concrete effects that turn a business from "a workplace" into a hub of value for society.'})]}),c.jsxs("div",{className:"effects-grid",children:[c.jsxs("article",{className:"effect-card",children:[c.jsx("span",{className:"effect-number",children:"01"}),c.jsx("span",{className:"effect-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-handshake"})}),c.jsx("h3",{children:"New commercial relationships"}),c.jsx("p",{children:"Access to the Business Units and the customers already operating inside the ecosystem."})]}),c.jsxs("article",{className:"effect-card",children:[c.jsx("span",{className:"effect-number",children:"02"}),c.jsx("span",{className:"effect-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-graduation-cap"})}),c.jsx("h3",{children:"Talent attracted"}),c.jsx("p",{children:"The best people come to companies that offer experience verifiable in the Identity."})]}),c.jsxs("article",{className:"effect-card",children:[c.jsx("span",{className:"effect-number",children:"03"}),c.jsx("span",{className:"effect-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-brain"})}),c.jsx("h3",{children:"Skills developed"}),c.jsx("p",{children:"The workplace becomes a learning engine for the people who work in it."})]}),c.jsxs("article",{className:"effect-card",children:[c.jsx("span",{className:"effect-number",children:"04"}),c.jsx("span",{className:"effect-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-eye"})}),c.jsx("h3",{children:"Amplified visibility"}),c.jsx("p",{children:"Presence inside the marketplace and across ecosystem activations."})]}),c.jsxs("article",{className:"effect-card",children:[c.jsx("span",{className:"effect-number",children:"05"}),c.jsx("span",{className:"effect-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-leaf"})}),c.jsx("h3",{children:"Measurable ESG impact"}),c.jsx("p",{children:"Real indicators on sustainability, inclusion, and governance — verifiable."})]})]}),c.jsx("p",{className:"effects-closing",children:"The company is no longer just a workplace. It becomes a hub of value for society."})]})}),c.jsx("section",{className:"training-modules","aria-labelledby":"training-title",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"training-head",children:[c.jsx("p",{className:"training-kicker",children:"Company learning engine"}),c.jsx("h2",{id:"training-title",children:"How the company trains and attests its people"}),c.jsx("p",{children:"Three modules — one to build skills, one to attest them, one to make them findable. Together they make the company a growth engine for the people who work there."})]}),c.jsxs("div",{className:"training-grid",children:[c.jsxs("a",{className:"training-card academy",href:"/academy",children:[c.jsx("span",{className:"training-step",children:"01"}),c.jsx("span",{className:"training-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-graduation-cap"})}),c.jsxs("h3",{children:["1. Academy ",c.jsx("span",{className:"module-pill",children:"Preview"})]}),c.jsx("p",{children:"Sponsors and partners of the ecosystem build the learning paths. You learn where you work."}),c.jsx("span",{className:"training-link",children:"Discover Academy→"})]}),c.jsxs("a",{className:"training-card identity",href:"/experience-passport",children:[c.jsx("span",{className:"training-step",children:"02"}),c.jsx("span",{className:"training-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-passport"})}),c.jsxs("h3",{children:["2. Experience Identity ",c.jsx("span",{className:"module-pill live",children:"Live"})]}),c.jsx("p",{children:"Your digital record of what you actually did. Verified by the ecosystem's companies who saw you do it."}),c.jsx("span",{className:"training-link",children:"Discover the Identity→"})]}),c.jsxs("a",{className:"training-card recruitment",href:"/recruitment",children:[c.jsx("span",{className:"training-step",children:"03"}),c.jsx("span",{className:"training-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-handshake"})}),c.jsxs("h3",{children:["3. Recruitment ",c.jsx("span",{className:"module-pill",children:"Preview"})]}),c.jsx("p",{children:"Companies hire on Identity experience, not CV keywords. The matches are real."}),c.jsx("span",{className:"training-link",children:"Discover Recruitment→"})]})]})]})}),c.jsx("section",{className:"why-now","aria-labelledby":"why-now-title",children:c.jsxs("div",{className:"wrap why-grid",children:[c.jsxs("div",{className:"why-copy",children:[c.jsx("h2",{id:"why-now-title",children:"Why now"}),c.jsxs("div",{className:"why-points",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"The job market is changing fast."})," AI is rewriting roles faster than CVs can keep up. Résumés say less and less about what a person can actually do, and companies struggle more and more to find the right skills."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Our answer."})," Put real, verified experience at the centre — not keywords. Every entry in the Identity is attested by the company that gave you the work. It's a fairer, more honest way to show what you're worth."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"How the ecosystem moves."})," Companies work together and train people on the job. People accumulate verified experience. That experience is what hiring companies search on. Value circulates."]})]})]}),c.jsx("div",{className:"why-media",children:c.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82",alt:"Bright office desk with computer analytics dashboard and plants"})})]})}),c.jsx("section",{className:"building","aria-labelledby":"building-title",children:c.jsxs("div",{className:"wrap",children:[c.jsx("div",{className:"building-head",children:c.jsx("h2",{id:"building-title",children:"What we're building"})}),c.jsxs("div",{className:"building-callout",children:[c.jsx("div",{children:"ei.one isn't a services platform."}),c.jsx("div",{children:"It's the infrastructure that turns companies into hubs of learning, innovation and growth."})]}),c.jsxs("div",{className:"building-grid",children:[c.jsxs("article",{className:"building-card",children:[c.jsx("span",{className:"building-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-passport"})}),c.jsx("h3",{children:"Verified experience"}),c.jsx("p",{children:"What you did, attested by the people who saw you do it."})]}),c.jsxs("article",{className:"building-card",children:[c.jsx("span",{className:"building-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-graduation-cap"})}),c.jsx("h3",{children:"Talents that grow"}),c.jsx("p",{children:"Room to discover what you're good at and develop it over time."})]}),c.jsxs("article",{className:"building-card",children:[c.jsx("span",{className:"building-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-handshake"})}),c.jsx("h3",{children:"Real relationships"}),c.jsx("p",{children:"Networking measured in trust and real collaborations."})]}),c.jsxs("article",{className:"building-card",children:[c.jsx("span",{className:"building-icon","aria-hidden":"true",children:c.jsx("i",{className:"fa-solid fa-arrows-rotate"})}),c.jsx("h3",{children:"Integrated system"}),c.jsx("p",{children:"Experience, Education, Economy and Environment work as one."})]})]})]})}),c.jsx("section",{className:"cta",id:"contact",children:c.jsxs("div",{className:"wrap cta-box",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Let's build it together."}),c.jsx("p",{children:"Activate the ecosystem for your company, or start building your Experience Identity."})]}),c.jsxs("div",{className:"actions",style:{margin:0},children:[c.jsx("a",{className:"button",href:"/business-club",children:"For Companies"}),c.jsx("a",{className:"button secondary",href:"/talent",children:"For Talents"}),c.jsx("a",{className:"button secondary",href:"/contact",children:"Contact us"})]})]})}),c.jsx("section",{className:"newsletter",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Stay up to date"}),c.jsx("p",{children:"Subscribe to the newsletter for updates from the ecosystem."})]}),c.jsxs("form",{className:"newsletter-form",children:[c.jsx("input",{type:"email",placeholder:"Email address","aria-label":"Email address"}),c.jsx("button",{className:"button",type:"submit",children:"Subscribe"})]})]})})]}),c.jsx(Lr,{}),c.jsxs("aside",{className:"cookie","aria-label":"Cookie notice",children:["We use cookies to improve your experience. By continuing, you accept our privacy policy.",c.jsx("button",{className:"button",onClick:t=>{var i;return(i=t.currentTarget.closest(".cookie"))==null?void 0:i.remove()},children:"Accept"})]})]})}ey.createRoot(document.getElementById("root")).render(c.jsx(q0.StrictMode,{children:c.jsx(_A,{})}));
