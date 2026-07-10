(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function k0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var qf={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function X0(){if(ev)return Cl;ev=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:l,type:s,key:h,ref:c!==void 0?c:null,props:f}}return Cl.Fragment=t,Cl.jsx=i,Cl.jsxs=i,Cl}var tv;function W0(){return tv||(tv=1,qf.exports=X0()),qf.exports}var o=W0(),Yf={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function q0(){if(nv)return tt;nv=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(U,ne,_e){this.props=U,this.context=ne,this.refs=M,this.updater=_e||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function j(){}j.prototype=x.prototype;function N(U,ne,_e){this.props=U,this.context=ne,this.refs=M,this.updater=_e||A}var z=N.prototype=new j;z.constructor=N,w(z,x.prototype),z.isPureReactComponent=!0;var ie=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function D(U,ne,_e){var q=_e.ref;return{$$typeof:l,type:U,key:ne,ref:q!==void 0?q:null,props:_e}}function C(U,ne){return D(U.type,ne,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===l}function ce(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ne[_e]})}var le=/\/+/g;function me(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?ce(""+U.key):ne.toString(36)}function de(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,ne,_e,q,oe){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var Ee=!1;if(U===null)Ee=!0;else switch(ye){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(U.$$typeof){case l:case t:Ee=!0;break;case _:return Ee=U._init,L(Ee(U._payload),ne,_e,q,oe)}}if(Ee)return oe=oe(U),Ee=q===""?"."+me(U,0):q,ie(oe)?(_e="",Ee!=null&&(_e=Ee.replace(le,"$&/")+"/"),L(oe,ne,_e,"",function(nt){return nt})):oe!=null&&(G(oe)&&(oe=C(oe,_e+(oe.key==null||U&&U.key===oe.key?"":(""+oe.key).replace(le,"$&/")+"/")+Ee)),ne.push(oe)),1;Ee=0;var He=q===""?".":q+":";if(ie(U))for(var Fe=0;Fe<U.length;Fe++)q=U[Fe],ye=He+me(q,Fe),Ee+=L(q,ne,_e,ye,oe);else if(Fe=E(U),typeof Fe=="function")for(U=Fe.call(U),Fe=0;!(q=U.next()).done;)q=q.value,ye=He+me(q,Fe++),Ee+=L(q,ne,_e,ye,oe);else if(ye==="object"){if(typeof U.then=="function")return L(de(U),ne,_e,q,oe);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function W(U,ne,_e){if(U==null)return U;var q=[],oe=0;return L(U,q,"","",function(ye){return ne.call(_e,ye,oe++)}),q}function Z(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:W,forEach:function(U,ne,_e){W(U,function(){ne.apply(this,arguments)},_e)},count:function(U){var ne=0;return W(U,function(){ne++}),ne},toArray:function(U){return W(U,function(ne){return ne})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return tt.Activity=y,tt.Children=be,tt.Component=x,tt.Fragment=i,tt.Profiler=c,tt.PureComponent=N,tt.StrictMode=s,tt.Suspense=g,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,tt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},tt.cache=function(U){return function(){return U.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(U,ne,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var q=w({},U.props),oe=U.key;if(ne!=null)for(ye in ne.key!==void 0&&(oe=""+ne.key),ne)!J.call(ne,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ne.ref===void 0||(q[ye]=ne[ye]);var ye=arguments.length-2;if(ye===1)q.children=_e;else if(1<ye){for(var Ee=Array(ye),He=0;He<ye;He++)Ee[He]=arguments[He+2];q.children=Ee}return D(U.type,oe,q)},tt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:f,_context:U},U},tt.createElement=function(U,ne,_e){var q,oe={},ye=null;if(ne!=null)for(q in ne.key!==void 0&&(ye=""+ne.key),ne)J.call(ne,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(oe[q]=ne[q]);var Ee=arguments.length-2;if(Ee===1)oe.children=_e;else if(1<Ee){for(var He=Array(Ee),Fe=0;Fe<Ee;Fe++)He[Fe]=arguments[Fe+2];oe.children=He}if(U&&U.defaultProps)for(q in Ee=U.defaultProps,Ee)oe[q]===void 0&&(oe[q]=Ee[q]);return D(U,ye,oe)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(U){return{$$typeof:p,render:U}},tt.isValidElement=G,tt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:Z}},tt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},tt.startTransition=function(U){var ne=P.T,_e={};P.T=_e;try{var q=U(),oe=P.S;oe!==null&&oe(_e,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(H,Me)}catch(ye){Me(ye)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),P.T=ne}},tt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},tt.use=function(U){return P.H.use(U)},tt.useActionState=function(U,ne,_e){return P.H.useActionState(U,ne,_e)},tt.useCallback=function(U,ne){return P.H.useCallback(U,ne)},tt.useContext=function(U){return P.H.useContext(U)},tt.useDebugValue=function(){},tt.useDeferredValue=function(U,ne){return P.H.useDeferredValue(U,ne)},tt.useEffect=function(U,ne){return P.H.useEffect(U,ne)},tt.useEffectEvent=function(U){return P.H.useEffectEvent(U)},tt.useId=function(){return P.H.useId()},tt.useImperativeHandle=function(U,ne,_e){return P.H.useImperativeHandle(U,ne,_e)},tt.useInsertionEffect=function(U,ne){return P.H.useInsertionEffect(U,ne)},tt.useLayoutEffect=function(U,ne){return P.H.useLayoutEffect(U,ne)},tt.useMemo=function(U,ne){return P.H.useMemo(U,ne)},tt.useOptimistic=function(U,ne){return P.H.useOptimistic(U,ne)},tt.useReducer=function(U,ne,_e){return P.H.useReducer(U,ne,_e)},tt.useRef=function(U){return P.H.useRef(U)},tt.useState=function(U){return P.H.useState(U)},tt.useSyncExternalStore=function(U,ne,_e){return P.H.useSyncExternalStore(U,ne,_e)},tt.useTransition=function(){return P.H.useTransition()},tt.version="19.2.7",tt}var iv;function lh(){return iv||(iv=1,Yf.exports=q0()),Yf.exports}var Ri=lh();const Y0=k0(Ri);var Zf={exports:{}},wl={},Kf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function Z0(){return av||(av=1,(function(l){function t(L,W){var Z=L.length;L.push(W);e:for(;0<Z;){var Me=Z-1>>>1,be=L[Me];if(0<c(be,W))L[Me]=W,L[Z]=be,Z=Me;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var W=L[0],Z=L.pop();if(Z!==W){L[0]=Z;e:for(var Me=0,be=L.length,U=be>>>1;Me<U;){var ne=2*(Me+1)-1,_e=L[ne],q=ne+1,oe=L[q];if(0>c(_e,Z))q<be&&0>c(oe,_e)?(L[Me]=oe,L[q]=Z,Me=q):(L[Me]=_e,L[ne]=Z,Me=ne);else if(q<be&&0>c(oe,Z))L[Me]=oe,L[q]=Z,Me=q;else break e}}return W}function c(L,W){var Z=L.sortIndex-W.sortIndex;return Z!==0?Z:L.id-W.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();l.unstable_now=function(){return h.now()-p}}var g=[],m=[],_=1,y=null,S=3,E=!1,A=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function z(L){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=L)s(m),W.sortIndex=W.expirationTime,t(g,W);else break;W=i(m)}}function ie(L){if(w=!1,z(L),!A)if(i(g)!==null)A=!0,H||(H=!0,ce());else{var W=i(m);W!==null&&de(ie,W.startTime-L)}}var H=!1,P=-1,J=5,D=-1;function C(){return M?!0:!(l.unstable_now()-D<J)}function G(){if(M=!1,H){var L=l.unstable_now();D=L;var W=!0;try{e:{A=!1,w&&(w=!1,j(P),P=-1),E=!0;var Z=S;try{t:{for(z(L),y=i(g);y!==null&&!(y.expirationTime>L&&C());){var Me=y.callback;if(typeof Me=="function"){y.callback=null,S=y.priorityLevel;var be=Me(y.expirationTime<=L);if(L=l.unstable_now(),typeof be=="function"){y.callback=be,z(L),W=!0;break t}y===i(g)&&s(g),z(L)}else s(g);y=i(g)}if(y!==null)W=!0;else{var U=i(m);U!==null&&de(ie,U.startTime-L),W=!1}}break e}finally{y=null,S=Z,E=!1}W=void 0}}finally{W?ce():H=!1}}}var ce;if(typeof N=="function")ce=function(){N(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=G,ce=function(){me.postMessage(null)}}else ce=function(){x(G,0)};function de(L,W){P=x(function(){L(l.unstable_now())},W)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(L){L.callback=null},l.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<L?Math.floor(1e3/L):5},l.unstable_getCurrentPriorityLevel=function(){return S},l.unstable_next=function(L){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var Z=S;S=W;try{return L()}finally{S=Z}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=S;S=L;try{return W()}finally{S=Z}},l.unstable_scheduleCallback=function(L,W,Z){var Me=l.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Me+Z:Me):Z=Me,L){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,L={id:_++,callback:W,priorityLevel:L,startTime:Z,expirationTime:be,sortIndex:-1},Z>Me?(L.sortIndex=Z,t(m,L),i(g)===null&&L===i(m)&&(w?(j(P),P=-1):w=!0,de(ie,Z-Me))):(L.sortIndex=be,t(g,L),A||E||(A=!0,H||(H=!0,ce()))),L},l.unstable_shouldYield=C,l.unstable_wrapCallback=function(L){var W=S;return function(){var Z=S;S=W;try{return L.apply(this,arguments)}finally{S=Z}}}})(Qf)),Qf}var sv;function K0(){return sv||(sv=1,Kf.exports=Z0()),Kf.exports}var Jf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function Q0(){if(rv)return Mn;rv=1;var l=lh();function t(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:g,containerInfo:m,implementation:_}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mn.createPortal=function(g,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return f(g,m,null,_)},Mn.flushSync=function(g){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=m,s.p=_,s.d.f()}},Mn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Mn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Mn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var _=m.as,y=p(_,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:E}):_==="script"&&s.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=p(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Mn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,y=p(_,m.crossOrigin);s.d.L(g,_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(g,m){if(typeof g=="string")if(m){var _=p(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Mn.requestFormReset=function(g){s.d.r(g)},Mn.unstable_batchedUpdates=function(g,m){return g(m)},Mn.useFormState=function(g,m,_){return h.H.useFormState(g,m,_)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.2.7",Mn}var lv;function J0(){if(lv)return Jf.exports;lv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Jf.exports=Q0(),Jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function $0(){if(ov)return wl;ov=1;var l=K0(),t=lh(),i=J0();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return g(u),e;if(d===r)return g(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=d;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,r=d;break}if(b===r){v=!0,r=u,a=d;break}b=b.sibling}if(!v){for(b=d.child;b;){if(b===a){v=!0,a=d,r=u;break}if(b===r){v=!0,r=d,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var de=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function U(e){return{current:e}}function ne(e){0>be||(e.current=Me[be],Me[be]=null,be--)}function _e(e,n){be++,Me[be]=e.current,e.current=n}var q=U(null),oe=U(null),ye=U(null),Ee=U(null);function He(e,n){switch(_e(ye,n),_e(oe,e),_e(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Eg(n),e=bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(q),_e(q,e)}function Fe(){ne(q),ne(oe),ne(ye)}function nt(e){e.memoizedState!==null&&_e(Ee,e);var n=q.current,a=bg(n,e.type);n!==a&&(_e(oe,e),_e(q,a))}function Lt(e){oe.current===e&&(ne(q),ne(oe)),Ee.current===e&&(ne(Ee),bl._currentValue=Z)}var B,Vt;function ut(e){if(B===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+Vt}var yt=!1;function Ge(e,n){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(se){var $=se}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(se){$=se}e.call(pe.prototype)}}else{try{throw Error()}catch(se){$=se}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(se){if(se&&$&&typeof se.stack=="string")return[se.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),v=d[0],b=d[1];if(v&&b){var I=v.split(`
`),Q=b.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===Q.length)for(r=I.length-1,u=Q.length-1;1<=r&&0<=u&&I[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==Q[u]){var ue=`
`+I[r].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=r&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return ut("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var et=Object.prototype.hasOwnProperty,O=l.unstable_scheduleCallback,T=l.unstable_cancelCallback,ae=l.unstable_shouldYield,Se=l.unstable_requestPaint,ve=l.unstable_now,xe=l.unstable_getCurrentPriorityLevel,We=l.unstable_ImmediatePriority,De=l.unstable_UserBlockingPriority,Le=l.unstable_NormalPriority,it=l.unstable_LowPriority,Ae=l.unstable_IdlePriority,Oe=l.log,ht=l.unstable_setDisableYieldValue,Ke=null,we=null;function Ye(e){if(typeof Oe=="function"&&ht(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Ke,e)}catch{}}var Ze=Math.clz32?Math.clz32:Re,zt=Math.log,V=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(zt(e)/V|0)|0}var he=256,ge=262144,Ce=4194304;function ke(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~d,r!==0?u=ke(r):(v&=b,v!==0?u=ke(v):a||(a=b&~e,a!==0&&(u=ke(a))))):(b=r&~d,b!==0?u=ke(b):v!==0?u=ke(v):a||(a=r&~e,a!==0&&(u=ke(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function an(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),e}function jn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xl(e,n,a,r,u,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=v&~a;0<a;){var ue=31-Ze(a),pe=1<<ue;b[ue]=0,I[ue]=-1;var $=Q[ue];if($!==null)for(Q[ue]=null,ue=0;ue<$.length;ue++){var se=$[ue];se!==null&&(se.lane&=-536870913)}a&=~pe}r!==0&&vi(e,r,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~n))}function vi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ze(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function As(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ze(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Pr(e,n){var a=n&-n;return a=(a&42)!==0?1:Rs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function na(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:qg(e.type))}function Fa(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var si=Math.random().toString(36).slice(2),Qt="__reactFiber$"+si,_n="__reactProps$"+si,ia="__reactContainer$"+si,Ir="__reactEvents$"+si,R="__reactListeners$"+si,k="__reactHandles$"+si,ee="__reactResources$"+si,te="__reactMarker$"+si;function Y(e){delete e[Qt],delete e[_n],delete e[Ir],delete e[R],delete e[k]}function Te(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ia]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dg(e);e!==null;){if(a=e[Qt])return a;e=Dg(e)}return n}e=a,a=e.parentNode}return null}function Ne(e){if(e=e[Qt]||e[ia]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Pe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ze(e){var n=e[ee];return n||(n=e[ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[te]=!0}var Je=new Set,qe={};function ct(e,n){At(e,n),At(e+"Capture",n)}function At(e,n){for(qe[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xn={},xt={};function Ve(e){return et.call(xt,e)?!0:et.call(xn,e)?!1:Ft.test(e)?xt[e]=!0:(xn[e]=!0,!1)}function Xt(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jr(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ht(e){if(!e._valueTracker){var n=yn(e)?"checked":"value";e._valueTracker=jr(e,n,""+e[n])}}function ri(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=yn(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rn=/[\n"\\]/g;function Sn(e){return e.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Br(e,n,a,r,u,d,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Hc(e,v,sn(n)):a!=null?Hc(e,v,sn(a)):r!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+sn(b):e.removeAttribute("name")}function Fr(e,n,a,r,u,d,v,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ht(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ht(e)}function Hc(e,n,a){n==="number"&&aa(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Cs(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function _h(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function xh(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ht(e)}function ws(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var B_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||B_.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Sh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&yh(e,u,r)}else for(var d in n)n.hasOwnProperty(d)&&yh(e,d,n[d])}function Gc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var F_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),H_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return H_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ci(){}var Vc=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Ds=null;function Mh(e){var n=Ne(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(Br(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[_n]||null;if(!u)throw Error(s(90));Br(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&ri(r)}break e;case"textarea":_h(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Cs(e,!!a.multiple,n,!1)}}}var Xc=!1;function Eh(e,n,a){if(Xc)return e(n,a);Xc=!0;try{var r=e(n);return r}finally{if(Xc=!1,(Ns!==null||Ds!==null)&&(Oo(),Ns&&(n=Ns,e=Ds,Ds=Ns=null,Mh(n),e)))for(n=0;n<e.length;n++)Mh(e[n])}}function Hr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(wi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Wc=!1}var sa=null,qc=null,ql=null;function bh(){if(ql)return ql;var e,n=qc,a=n.length,r,u="value"in sa?sa.value:sa.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[d-r];r++);return ql=u.slice(e,1<r?1-r:void 0)}function Yl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function Th(){return!1}function Cn(e){function n(a,r,u,d,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zl:Th,this.isPropagationStopped=Th,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Cn(Ha),Vr=y({},Ha,{view:0,detail:0}),G_=Cn(Vr),Yc,Zc,kr,Ql=y({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Yc=e.screenX-kr.screenX,Zc=e.screenY-kr.screenY):Zc=Yc=0,kr=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),Ah=Cn(Ql),V_=y({},Ql,{dataTransfer:0}),k_=Cn(V_),X_=y({},Vr,{relatedTarget:0}),Kc=Cn(X_),W_=y({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),q_=Cn(W_),Y_=y({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z_=Cn(Y_),K_=y({},Ha,{data:0}),Rh=Cn(K_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$_[e])?!!n[e]:!1}function Qc(){return ex}var tx=y({},Vr,{key:function(e){if(e.key){var n=Q_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(e){return e.type==="keypress"?Yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nx=Cn(tx),ix=y({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=Cn(ix),ax=y({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),sx=Cn(ax),rx=y({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Cn(rx),ox=y({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Cn(ox),ux=y({},Ha,{newState:0,oldState:0}),fx=Cn(ux),dx=[9,13,27,32],Jc=wi&&"CompositionEvent"in window,Xr=null;wi&&"documentMode"in document&&(Xr=document.documentMode);var hx=wi&&"TextEvent"in window&&!Xr,wh=wi&&(!Jc||Xr&&8<Xr&&11>=Xr),Nh=" ",Dh=!1;function Uh(e,n){switch(e){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function px(e,n){switch(e){case"compositionend":return Lh(n);case"keypress":return n.which!==32?null:(Dh=!0,Nh);case"textInput":return e=n.data,e===Nh&&Dh?null:e;default:return null}}function mx(e,n){if(Us)return e==="compositionend"||!Jc&&Uh(e,n)?(e=bh(),ql=qc=sa=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wh&&n.locale!=="ko"?null:n.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gx[e.type]:n==="textarea"}function Ph(e,n,a,r){Ns?Ds?Ds.push(r):Ds=[r]:Ns=r,n=Ho(n,"onChange"),0<n.length&&(a=new Kl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Wr=null,qr=null;function vx(e){vg(e,0)}function Jl(e){var n=Pe(e);if(ri(n))return e}function zh(e,n){if(e==="change")return n}var Ih=!1;if(wi){var $c;if(wi){var eu="oninput"in document;if(!eu){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),eu=typeof jh.oninput=="function"}$c=eu}else $c=!1;Ih=$c&&(!document.documentMode||9<document.documentMode)}function Bh(){Wr&&(Wr.detachEvent("onpropertychange",Fh),qr=Wr=null)}function Fh(e){if(e.propertyName==="value"&&Jl(qr)){var n=[];Ph(n,qr,e,kc(e)),Eh(vx,n)}}function _x(e,n,a){e==="focusin"?(Bh(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",Fh)):e==="focusout"&&Bh()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(qr)}function yx(e,n){if(e==="click")return Jl(n)}function Sx(e,n){if(e==="input"||e==="change")return Jl(n)}function Mx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bn=typeof Object.is=="function"?Object.is:Mx;function Yr(e,n){if(Bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!et.call(n,u)||!Bn(e[u],n[u]))return!1}return!0}function Hh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gh(e,n){var a=Hh(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hh(a)}}function Vh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=aa(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=aa(e.document)}return n}function tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ex=wi&&"documentMode"in document&&11>=document.documentMode,Ls=null,nu=null,Zr=null,iu=!1;function Xh(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||Ls==null||Ls!==aa(r)||(r=Ls,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Yr(Zr,r)||(Zr=r,r=Ho(nu,"onSelect"),0<r.length&&(n=new Kl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ls)))}function Ga(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Os={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},au={},Wh={};wi&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Va(e){if(au[e])return au[e];if(!Os[e])return e;var n=Os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wh)return au[e]=n[a];return e}var qh=Va("animationend"),Yh=Va("animationiteration"),Zh=Va("animationstart"),bx=Va("transitionrun"),Tx=Va("transitionstart"),Ax=Va("transitioncancel"),Kh=Va("transitionend"),Qh=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function li(e,n){Qh.set(e,n),ct(n,[e])}var $l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Ps=0,ru=0;function eo(){for(var e=Ps,n=ru=Ps=0;n<e;){var a=Zn[n];Zn[n++]=null;var r=Zn[n];Zn[n++]=null;var u=Zn[n];Zn[n++]=null;var d=Zn[n];if(Zn[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}d!==0&&Jh(a,u,d)}}function to(e,n,a,r){Zn[Ps++]=e,Zn[Ps++]=n,Zn[Ps++]=a,Zn[Ps++]=r,ru|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function lu(e,n,a,r){return to(e,n,a,r),no(e)}function ka(e,n){return to(e,null,null,n),no(e)}function Jh(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,r=d.alternate,r!==null&&(r.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ze(a),e=d.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),d):null}function no(e){if(50<vl)throw vl=0,vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zs={};function Rx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,n,a,r){return new Rx(e,n,a,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,n){var a=e.alternate;return a===null?(a=Fn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $h(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function io(e,n,a,r,u,d){var v=0;if(r=e,typeof e=="function")ou(e)&&(v=1);else if(typeof e=="string")v=U0(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Fn(31,a,n,u),e.elementType=D,e.lanes=d,e;case w:return Xa(a.children,u,d,n);case M:v=8,u|=24;break;case x:return e=Fn(12,a,n,u|2),e.elementType=x,e.lanes=d,e;case ie:return e=Fn(13,a,n,u),e.elementType=ie,e.lanes=d,e;case H:return e=Fn(19,a,n,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break e;case j:v=9;break e;case z:v=11;break e;case P:v=14;break e;case J:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Fn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=d,n}function Xa(e,n,a,r){return e=Fn(7,e,r,n),e.lanes=a,e}function cu(e,n,a){return e=Fn(6,e,null,n),e.lanes=a,e}function ep(e){var n=Fn(18,null,null,0);return n.stateNode=e,n}function uu(e,n,a){return n=Fn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tp=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},tp.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var Is=[],js=0,ao=null,Kr=0,Qn=[],Jn=0,ra=null,_i=1,xi="";function Di(e,n){Is[js++]=Kr,Is[js++]=ao,ao=e,Kr=n}function np(e,n,a){Qn[Jn++]=_i,Qn[Jn++]=xi,Qn[Jn++]=ra,ra=e;var r=_i;e=xi;var u=32-Ze(r)-1;r&=~(1<<u),a+=1;var d=32-Ze(n)+u;if(30<d){var v=u-u%5;d=(r&(1<<v)-1).toString(32),r>>=v,u-=v,_i=1<<32-Ze(n)+u|a<<u|r,xi=d+e}else _i=1<<d|a<<u|r,xi=e}function fu(e){e.return!==null&&(Di(e,1),np(e,1,0))}function du(e){for(;e===ao;)ao=Is[--js],Is[js]=null,Kr=Is[--js],Is[js]=null;for(;e===ra;)ra=Qn[--Jn],Qn[Jn]=null,xi=Qn[--Jn],Qn[Jn]=null,_i=Qn[--Jn],Qn[Jn]=null}function ip(e,n){Qn[Jn++]=_i,Qn[Jn++]=xi,Qn[Jn++]=ra,_i=n.id,xi=n.overflow,ra=e}var hn=null,It=null,vt=!1,la=null,$n=!1,hu=Error(s(519));function oa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(Kn(n,e)),hu}function ap(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Qt]=e,n[_n]=r,a){case"dialog":dt("cancel",n),dt("close",n);break;case"iframe":case"object":case"embed":dt("load",n);break;case"video":case"audio":for(a=0;a<xl.length;a++)dt(xl[a],n);break;case"source":dt("error",n);break;case"img":case"image":case"link":dt("error",n),dt("load",n);break;case"details":dt("toggle",n);break;case"input":dt("invalid",n),Fr(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":dt("invalid",n);break;case"textarea":dt("invalid",n),xh(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Sg(n.textContent,a)?(r.popover!=null&&(dt("beforetoggle",n),dt("toggle",n)),r.onScroll!=null&&dt("scroll",n),r.onScrollEnd!=null&&dt("scrollend",n),r.onClick!=null&&(n.onclick=Ci),n=!0):n=!1,n||oa(e,!0)}function sp(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:hn=hn.return}}function Bs(e){if(e!==hn)return!1;if(!vt)return sp(e),vt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Uf(e.type,e.memoizedProps)),a=!a),a&&It&&oa(e),sp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));It=Ng(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));It=Ng(e)}else n===27?(n=It,Ma(e.type)?(e=If,If=null,It=e):It=n):It=hn?ti(e.stateNode.nextSibling):null;return!0}function Wa(){It=hn=null,vt=!1}function pu(){var e=la;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),la=null),e}function Qr(e){la===null?la=[e]:la.push(e)}var mu=U(null),qa=null,Ui=null;function ca(e,n,a){_e(mu,n._currentValue),n._currentValue=a}function Li(e){e._currentValue=mu.current,ne(mu)}function gu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function vu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=u;for(var I=0;I<n.length;I++)if(b.context===n[I]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),gu(d.return,a,e),r||(v=null);break e}d=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),gu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Fs(e,n,a,r){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;Bn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===Ee.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}u=u.return}e!==null&&vu(n,e,a,r),n.flags|=262144}function so(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){qa=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return rp(qa,e)}function ro(e,n){return qa===null&&Ya(e),rp(e,n)}function rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ui===null){if(e===null)throw Error(s(308));Ui=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ui=Ui.next=n;return a}var Cx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wx=l.unstable_scheduleCallback,Nx=l.unstable_NormalPriority,Jt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new Cx,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&wx(Nx,function(){e.controller.abort()})}var $r=null,xu=0,Hs=0,Gs=null;function Dx(e,n){if($r===null){var a=$r=[];xu=0,Hs=Ef(),Gs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xu++,n.then(lp,lp),n}function lp(){if(--xu===0&&$r!==null){Gs!==null&&(Gs.status="fulfilled");var e=$r;$r=null,Hs=0,Gs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ux(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var op=L.S;L.S=function(e,n){Xm=ve(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(e,n),op!==null&&op(e,n)};var Za=U(null);function yu(){var e=Za.current;return e!==null?e:Ot.pooledCache}function lo(e,n){n===null?_e(Za,Za.current):_e(Za,n.pool)}function cp(){var e=yu();return e===null?null:{parent:Jt._currentValue,pool:e}}var Vs=Error(s(460)),Su=Error(s(474)),oo=Error(s(542)),co={then:function(){}};function up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ci,Ci),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e;default:if(typeof n.status=="string")n.then(Ci,Ci);else{if(e=Ot,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e}throw Qa=n,Vs}}function Ka(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,Vs):a}}var Qa=null;function dp(){if(Qa===null)throw Error(s(459));var e=Qa;return Qa=null,e}function hp(e){if(e===Vs||e===oo)throw Error(s(483))}var ks=null,el=0;function uo(e){var n=el;return el+=1,ks===null&&(ks=[]),fp(ks,e,n)}function tl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fo(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pp(e){function n(X,F){if(e){var K=X.deletions;K===null?(X.deletions=[F],X.flags|=16):K.push(F)}}function a(X,F){if(!e)return null;for(;F!==null;)n(X,F),F=F.sibling;return null}function r(X){for(var F=new Map;X!==null;)X.key!==null?F.set(X.key,X):F.set(X.index,X),X=X.sibling;return F}function u(X,F){return X=Ni(X,F),X.index=0,X.sibling=null,X}function d(X,F,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<F?(X.flags|=67108866,F):K):(X.flags|=67108866,F)):(X.flags|=1048576,F)}function v(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function b(X,F,K,fe){return F===null||F.tag!==6?(F=cu(K,X.mode,fe),F.return=X,F):(F=u(F,K),F.return=X,F)}function I(X,F,K,fe){var Xe=K.type;return Xe===w?ue(X,F,K.props.children,fe,K.key):F!==null&&(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ka(Xe)===F.type)?(F=u(F,K.props),tl(F,K),F.return=X,F):(F=io(K.type,K.key,K.props,null,X.mode,fe),tl(F,K),F.return=X,F)}function Q(X,F,K,fe){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=uu(K,X.mode,fe),F.return=X,F):(F=u(F,K.children||[]),F.return=X,F)}function ue(X,F,K,fe,Xe){return F===null||F.tag!==7?(F=Xa(K,X.mode,fe,Xe),F.return=X,F):(F=u(F,K),F.return=X,F)}function pe(X,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=cu(""+F,X.mode,K),F.return=X,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case E:return K=io(F.type,F.key,F.props,null,X.mode,K),tl(K,F),K.return=X,K;case A:return F=uu(F,X.mode,K),F.return=X,F;case J:return F=Ka(F),pe(X,F,K)}if(de(F)||ce(F))return F=Xa(F,X.mode,K,null),F.return=X,F;if(typeof F.then=="function")return pe(X,uo(F),K);if(F.$$typeof===N)return pe(X,ro(X,F),K);fo(X,F)}return null}function $(X,F,K,fe){var Xe=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xe!==null?null:b(X,F,""+K,fe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Xe?I(X,F,K,fe):null;case A:return K.key===Xe?Q(X,F,K,fe):null;case J:return K=Ka(K),$(X,F,K,fe)}if(de(K)||ce(K))return Xe!==null?null:ue(X,F,K,fe,null);if(typeof K.then=="function")return $(X,F,uo(K),fe);if(K.$$typeof===N)return $(X,F,ro(X,K),fe);fo(X,K)}return null}function se(X,F,K,fe,Xe){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return X=X.get(K)||null,b(F,X,""+fe,Xe);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case E:return X=X.get(fe.key===null?K:fe.key)||null,I(F,X,fe,Xe);case A:return X=X.get(fe.key===null?K:fe.key)||null,Q(F,X,fe,Xe);case J:return fe=Ka(fe),se(X,F,K,fe,Xe)}if(de(fe)||ce(fe))return X=X.get(K)||null,ue(F,X,fe,Xe,null);if(typeof fe.then=="function")return se(X,F,K,uo(fe),Xe);if(fe.$$typeof===N)return se(X,F,K,ro(F,fe),Xe);fo(F,fe)}return null}function je(X,F,K,fe){for(var Xe=null,St=null,Be=F,st=F=0,mt=null;Be!==null&&st<K.length;st++){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var Mt=$(X,Be,K[st],fe);if(Mt===null){Be===null&&(Be=mt);break}e&&Be&&Mt.alternate===null&&n(X,Be),F=d(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt,Be=mt}if(st===K.length)return a(X,Be),vt&&Di(X,st),Xe;if(Be===null){for(;st<K.length;st++)Be=pe(X,K[st],fe),Be!==null&&(F=d(Be,F,st),St===null?Xe=Be:St.sibling=Be,St=Be);return vt&&Di(X,st),Xe}for(Be=r(Be);st<K.length;st++)mt=se(Be,X,st,K[st],fe),mt!==null&&(e&&mt.alternate!==null&&Be.delete(mt.key===null?st:mt.key),F=d(mt,F,st),St===null?Xe=mt:St.sibling=mt,St=mt);return e&&Be.forEach(function(Ra){return n(X,Ra)}),vt&&Di(X,st),Xe}function Qe(X,F,K,fe){if(K==null)throw Error(s(151));for(var Xe=null,St=null,Be=F,st=F=0,mt=null,Mt=K.next();Be!==null&&!Mt.done;st++,Mt=K.next()){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var Ra=$(X,Be,Mt.value,fe);if(Ra===null){Be===null&&(Be=mt);break}e&&Be&&Ra.alternate===null&&n(X,Be),F=d(Ra,F,st),St===null?Xe=Ra:St.sibling=Ra,St=Ra,Be=mt}if(Mt.done)return a(X,Be),vt&&Di(X,st),Xe;if(Be===null){for(;!Mt.done;st++,Mt=K.next())Mt=pe(X,Mt.value,fe),Mt!==null&&(F=d(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return vt&&Di(X,st),Xe}for(Be=r(Be);!Mt.done;st++,Mt=K.next())Mt=se(Be,X,st,Mt.value,fe),Mt!==null&&(e&&Mt.alternate!==null&&Be.delete(Mt.key===null?st:Mt.key),F=d(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return e&&Be.forEach(function(V0){return n(X,V0)}),vt&&Di(X,st),Xe}function Ut(X,F,K,fe){if(typeof K=="object"&&K!==null&&K.type===w&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:e:{for(var Xe=K.key;F!==null;){if(F.key===Xe){if(Xe=K.type,Xe===w){if(F.tag===7){a(X,F.sibling),fe=u(F,K.props.children),fe.return=X,X=fe;break e}}else if(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ka(Xe)===F.type){a(X,F.sibling),fe=u(F,K.props),tl(fe,K),fe.return=X,X=fe;break e}a(X,F);break}else n(X,F);F=F.sibling}K.type===w?(fe=Xa(K.props.children,X.mode,fe,K.key),fe.return=X,X=fe):(fe=io(K.type,K.key,K.props,null,X.mode,fe),tl(fe,K),fe.return=X,X=fe)}return v(X);case A:e:{for(Xe=K.key;F!==null;){if(F.key===Xe)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(X,F.sibling),fe=u(F,K.children||[]),fe.return=X,X=fe;break e}else{a(X,F);break}else n(X,F);F=F.sibling}fe=uu(K,X.mode,fe),fe.return=X,X=fe}return v(X);case J:return K=Ka(K),Ut(X,F,K,fe)}if(de(K))return je(X,F,K,fe);if(ce(K)){if(Xe=ce(K),typeof Xe!="function")throw Error(s(150));return K=Xe.call(K),Qe(X,F,K,fe)}if(typeof K.then=="function")return Ut(X,F,uo(K),fe);if(K.$$typeof===N)return Ut(X,F,ro(X,K),fe);fo(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(X,F.sibling),fe=u(F,K),fe.return=X,X=fe):(a(X,F),fe=cu(K,X.mode,fe),fe.return=X,X=fe),v(X)):a(X,F)}return function(X,F,K,fe){try{el=0;var Xe=Ut(X,F,K,fe);return ks=null,Xe}catch(Be){if(Be===Vs||Be===oo)throw Be;var St=Fn(29,Be,null,X.mode);return St.lanes=fe,St.return=X,St}finally{}}}var Ja=pp(!0),mp=pp(!1),ua=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Et&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=no(e),Jh(e,null,a),n}return to(e,r,n,a),no(e)}function nl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,As(e,a)}}function bu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Tu=!1;function il(){if(Tu){var e=Gs;if(e!==null)throw e}}function al(e,n,a,r){Tu=!1;var u=e.updateQueue;ua=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,Q=I.next;I.next=null,v===null?d=Q:v.next=Q,v=I;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,b=ue.lastBaseUpdate,b!==v&&(b===null?ue.firstBaseUpdate=Q:b.next=Q,ue.lastBaseUpdate=I))}if(d!==null){var pe=u.baseState;v=0,ue=Q=I=null,b=d;do{var $=b.lane&-536870913,se=$!==b.lane;if(se?(pt&$)===$:(r&$)===$){$!==0&&$===Hs&&(Tu=!0),ue!==null&&(ue=ue.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var je=e,Qe=b;$=n;var Ut=a;switch(Qe.tag){case 1:if(je=Qe.payload,typeof je=="function"){pe=je.call(Ut,pe,$);break e}pe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Qe.payload,$=typeof je=="function"?je.call(Ut,pe,$):je,$==null)break e;pe=y({},pe,$);break e;case 2:ua=!0}}$=b.callback,$!==null&&(e.flags|=64,se&&(e.flags|=8192),se=u.callbacks,se===null?u.callbacks=[$]:se.push($))}else se={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ue===null?(Q=ue=se,I=pe):ue=ue.next=se,v|=$;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;se=b,b=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ue===null&&(I=pe),u.baseState=I,u.firstBaseUpdate=Q,u.lastBaseUpdate=ue,d===null&&(u.shared.lanes=0),va|=v,e.lanes=v,e.memoizedState=pe}}function gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gp(a[e],n)}var Xs=U(null),ho=U(0);function _p(e,n){e=Gi,_e(ho,e),_e(Xs,n),Gi=e|n.baseLanes}function Au(){_e(ho,Gi),_e(Xs,Xs.current)}function Ru(){Gi=ho.current,ne(Xs),ne(ho)}var Hn=U(null),ei=null;function ha(e){var n=e.alternate;_e(Zt,Zt.current&1),_e(Hn,e),ei===null&&(n===null||Xs.current!==null||n.memoizedState!==null)&&(ei=e)}function Cu(e){_e(Zt,Zt.current),_e(Hn,e),ei===null&&(ei=e)}function xp(e){e.tag===22?(_e(Zt,Zt.current),_e(Hn,e),ei===null&&(ei=e)):pa()}function pa(){_e(Zt,Zt.current),_e(Hn,Hn.current)}function Gn(e){ne(Hn),ei===e&&(ei=null),ne(Zt)}var Zt=U(0);function po(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oi=0,at=null,Nt=null,$t=null,mo=!1,Ws=!1,$a=!1,go=0,sl=0,qs=null,Lx=0;function Wt(){throw Error(s(321))}function wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Bn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,r,u,d){return Oi=d,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?nm:Xu,$a=!1,d=a(r,u),$a=!1,Ws&&(d=Sp(n,a,r,u)),yp(e),d}function yp(e){L.H=ol;var n=Nt!==null&&Nt.next!==null;if(Oi=0,$t=Nt=at=null,mo=!1,sl=0,qs=null,n)throw Error(s(300));e===null||en||(e=e.dependencies,e!==null&&so(e)&&(en=!0))}function Sp(e,n,a,r){at=e;var u=0;do{if(Ws&&(qs=null),sl=0,Ws=!1,25<=u)throw Error(s(301));if(u+=1,$t=Nt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=im,d=n(a,r)}while(Ws);return d}function Ox(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?rl(n):n,e=e.useState()[0],(Nt!==null?Nt.memoizedState:null)!==e&&(at.flags|=1024),n}function Du(){var e=go!==0;return go=0,e}function Uu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Lu(e){if(mo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}mo=!1}Oi=0,$t=Nt=at=null,Ws=!1,sl=go=0,qs=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?at.memoizedState=$t=e:$t=$t.next=e,$t}function Kt(){if(Nt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Nt.next;var n=$t===null?at.memoizedState:$t.next;if(n!==null)$t=n,Nt=e;else{if(e===null)throw at.alternate===null?Error(s(467)):Error(s(310));Nt=e,e={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},$t===null?at.memoizedState=$t=e:$t=$t.next=e}return $t}function vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(e){var n=sl;return sl+=1,qs===null&&(qs=[]),e=fp(qs,e,n),n=at,($t===null?n.memoizedState:$t.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?nm:Xu),e}function _o(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rl(e);if(e.$$typeof===N)return pn(e)}throw Error(s(438,String(e)))}function Ou(e){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=at.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vo(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Pi(e,n){return typeof n=="function"?n(e):n}function xo(e){var n=Kt();return Pu(n,Nt,e)}function Pu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,d=r.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}n.baseQueue=u=d,r.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var b=v=null,I=null,Q=n,ue=!1;do{var pe=Q.lane&-536870913;if(pe!==Q.lane?(pt&pe)===pe:(Oi&pe)===pe){var $=Q.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pe===Hs&&(ue=!0);else if((Oi&$)===$){Q=Q.next,$===Hs&&(ue=!0);continue}else pe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=pe,v=d):I=I.next=pe,at.lanes|=$,va|=$;pe=Q.action,$a&&a(d,pe),d=Q.hasEagerState?Q.eagerState:a(d,pe)}else $={lane:pe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=$,v=d):I=I.next=$,at.lanes|=pe,va|=pe;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?v=d:I.next=b,!Bn(d,e.memoizedState)&&(en=!0,ue&&(a=Gs,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=I,r.lastRenderedState=d}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zu(e){var n=Kt(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do d=e(d,v.action),v=v.next;while(v!==u);Bn(d,n.memoizedState)||(en=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,r]}function Mp(e,n,a){var r=at,u=Kt(),d=vt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Bn((Nt||u).memoizedState,a);if(v&&(u.memoizedState=a,en=!0),u=u.queue,Bu(Tp.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||$t!==null&&$t.memoizedState.tag&1){if(r.flags|=2048,Ys(9,{destroy:void 0},bp.bind(null,r,u,a,n),null),Ot===null)throw Error(s(349));d||(Oi&127)!==0||Ep(r,n,a)}return a}function Ep(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=vo(),at.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bp(e,n,a,r){n.value=a,n.getSnapshot=r,Ap(n)&&Rp(e)}function Tp(e,n,a){return a(function(){Ap(n)&&Rp(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Bn(e,a)}catch{return!0}}function Rp(e){var n=ka(e,2);n!==null&&Ln(n,e,2)}function Iu(e){var n=Tn();if(typeof e=="function"){var a=e;if(e=a(),$a){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},n}function Cp(e,n,a,r){return e.baseState=a,Pu(e,Nt,typeof r=="function"?r:Pi)}function Px(e,n,a,r,u){if(Mo(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};L.T!==null?a(!0):d.isTransition=!1,r(d),a=n.pending,a===null?(d.next=n.pending=d,wp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function wp(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var d=L.T,v={};L.T=v;try{var b=a(u,r),I=L.S;I!==null&&I(v,b),Np(e,n,b)}catch(Q){ju(e,n,Q)}finally{d!==null&&v.types!==null&&(d.types=v.types),L.T=d}}else try{d=a(u,r),Np(e,n,d)}catch(Q){ju(e,n,Q)}}function Np(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Dp(e,n,r)},function(r){return ju(e,n,r)}):Dp(e,n,a)}function Dp(e,n,a){n.status="fulfilled",n.value=a,Up(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wp(e,a)))}function ju(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Up(n),n=n.next;while(n!==r)}e.action=null}function Up(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lp(e,n){return n}function Op(e,n){if(vt){var a=Ot.formState;if(a!==null){e:{var r=at;if(vt){if(It){t:{for(var u=It,d=$n;u.nodeType!==8;){if(!d){u=null;break t}if(u=ti(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){It=ti(u.nextSibling),r=u.data==="F!";break e}}oa(r)}r=!1}r&&(n=a[0])}}return a=Tn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lp,lastRenderedState:n},a.queue=r,a=$p.bind(null,at,r),r.dispatch=a,r=Iu(!1),d=ku.bind(null,at,!1,r.queue),r=Tn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Px.bind(null,at,u,d,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Pp(e){var n=Kt();return zp(n,Nt,e)}function zp(e,n,a){if(n=Pu(e,n,Lp)[0],e=xo(Pi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=rl(n)}catch(v){throw v===Vs?oo:v}else r=n;n=Kt();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(at.flags|=2048,Ys(9,{destroy:void 0},zx.bind(null,u,a),null)),[r,d,e]}function zx(e,n){e.action=n}function Ip(e){var n=Kt(),a=Nt;if(a!==null)return zp(n,a,e);Kt(),n=n.memoizedState,a=Kt();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ys(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=at.updateQueue,n===null&&(n=vo(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function jp(){return Kt().memoizedState}function yo(e,n,a,r){var u=Tn();at.flags|=e,u.memoizedState=Ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function So(e,n,a,r){var u=Kt();r=r===void 0?null:r;var d=u.memoizedState.inst;Nt!==null&&r!==null&&wu(r,Nt.memoizedState.deps)?u.memoizedState=Ys(n,d,a,r):(at.flags|=e,u.memoizedState=Ys(1|n,d,a,r))}function Bp(e,n){yo(8390656,8,e,n)}function Bu(e,n){So(2048,8,e,n)}function Ix(e){at.flags|=4;var n=at.updateQueue;if(n===null)n=vo(),at.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Fp(e){var n=Kt().memoizedState;return Ix({ref:n,nextImpl:e}),function(){if((Et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Hp(e,n){return So(4,2,e,n)}function Gp(e,n){return So(4,4,e,n)}function Vp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kp(e,n,a){a=a!=null?a.concat([e]):null,So(4,4,Vp.bind(null,n,e),a)}function Fu(){}function Xp(e,n){var a=Kt();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&wu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Wp(e,n){var a=Kt();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&wu(n,r[1]))return r[0];if(r=e(),$a){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[r,n],r}function Hu(e,n,a){return a===void 0||(Oi&1073741824)!==0&&(pt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=qm(),at.lanes|=e,va|=e,a)}function qp(e,n,a,r){return Bn(a,n)?a:Xs.current!==null?(e=Hu(e,a,r),Bn(e,n)||(en=!0),e):(Oi&42)===0||(Oi&1073741824)!==0&&(pt&261930)===0?(en=!0,e.memoizedState=a):(e=qm(),at.lanes|=e,va|=e,n)}function Yp(e,n,a,r,u){var d=W.p;W.p=d!==0&&8>d?d:8;var v=L.T,b={};L.T=b,ku(e,!1,n,a);try{var I=u(),Q=L.S;if(Q!==null&&Q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ue=Ux(I,r);ll(e,n,ue,Xn(e))}else ll(e,n,r,Xn(e))}catch(pe){ll(e,n,{then:function(){},status:"rejected",reason:pe},Xn())}finally{W.p=d,v!==null&&b.types!==null&&(v.types=b.types),L.T=v}}function jx(){}function Gu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Zp(e).queue;Yp(e,u,n,Z,a===null?jx:function(){return Kp(e),a(r)})}function Zp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Kp(e){var n=Zp(e);n.next===null&&(n=e.alternate.memoizedState),ll(e,n.next.queue,{},Xn())}function Vu(){return pn(bl)}function Qp(){return Kt().memoizedState}function Jp(){return Kt().memoizedState}function Bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();e=fa(a);var r=da(n,e,a);r!==null&&(Ln(r,n,a),nl(r,n,a)),n={cache:_u()},e.payload=n;return}n=n.return}}function Fx(e,n,a){var r=Xn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mo(e)?em(n,a):(a=lu(e,n,a,r),a!==null&&(Ln(a,e,r),tm(a,n,r)))}function $p(e,n,a){var r=Xn();ll(e,n,a,r)}function ll(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mo(e))em(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,b=d(v,a);if(u.hasEagerState=!0,u.eagerState=b,Bn(b,v))return to(e,n,u,0),Ot===null&&eo(),!1}catch{}finally{}if(a=lu(e,n,u,r),a!==null)return Ln(a,e,r),tm(a,n,r),!0}return!1}function ku(e,n,a,r){if(r={lane:2,revertLane:Ef(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Mo(e)){if(n)throw Error(s(479))}else n=lu(e,a,r,2),n!==null&&Ln(n,e,2)}function Mo(e){var n=e.alternate;return e===at||n!==null&&n===at}function em(e,n){Ws=mo=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function tm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,As(e,a)}}var ol={readContext:pn,use:_o,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt};ol.useEffectEvent=Wt;var nm={readContext:pn,use:_o,useCallback:function(e,n){return Tn().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Bp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yo(4194308,4,Vp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yo(4194308,4,e,n)},useInsertionEffect:function(e,n){yo(4,2,e,n)},useMemo:function(e,n){var a=Tn();n=n===void 0?null:n;var r=e();if($a){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Tn();if(a!==void 0){var u=a(n);if($a){Ye(!0);try{a(n)}finally{Ye(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Fx.bind(null,at,e),[r.memoizedState,e]},useRef:function(e){var n=Tn();return e={current:e},n.memoizedState=e},useState:function(e){e=Iu(e);var n=e.queue,a=$p.bind(null,at,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(e,n){var a=Tn();return Hu(a,e,n)},useTransition:function(){var e=Iu(!1);return e=Yp.bind(null,at,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=at,u=Tn();if(vt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ot===null)throw Error(s(349));(pt&127)!==0||Ep(r,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Bp(Tp.bind(null,r,d,e),[e]),r.flags|=2048,Ys(9,{destroy:void 0},bp.bind(null,r,d,a,n),null),a},useId:function(){var e=Tn(),n=Ot.identifierPrefix;if(vt){var a=xi,r=_i;a=(r&~(1<<32-Ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=go++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Lx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Op,useActionState:Op,useOptimistic:function(e){var n=Tn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,at,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ou,useCacheRefresh:function(){return Tn().memoizedState=Bx.bind(null,at)},useEffectEvent:function(e){var n=Tn(),a={impl:e};return n.memoizedState=a,function(){if((Et&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:pn,use:_o,useCallback:Xp,useContext:pn,useEffect:Bu,useImperativeHandle:kp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Wp,useReducer:xo,useRef:jp,useState:function(){return xo(Pi)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=Kt();return qp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=xo(Pi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:rl(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Vu,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=Kt();return Cp(a,Nt,e,n)},useMemoCache:Ou,useCacheRefresh:Jp};Xu.useEffectEvent=Fp;var im={readContext:pn,use:_o,useCallback:Xp,useContext:pn,useEffect:Bu,useImperativeHandle:kp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Wp,useReducer:zu,useRef:jp,useState:function(){return zu(Pi)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=Kt();return Nt===null?Hu(a,e,n):qp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=zu(Pi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:rl(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Vu,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,n){var a=Kt();return Nt!==null?Cp(a,Nt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:Jp};im.useEffectEvent=Fp;function Wu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Xn(),u=fa(r);u.payload=n,a!=null&&(u.callback=a),n=da(e,u,r),n!==null&&(Ln(n,e,r),nl(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Xn(),u=fa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(e,u,r),n!==null&&(Ln(n,e,r),nl(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xn(),r=fa(a);r.tag=2,n!=null&&(r.callback=n),n=da(e,r,a),n!==null&&(Ln(n,e,a),nl(n,e,a))}};function am(e,n,a,r,u,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,v):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(u,d):!0}function sm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&qu.enqueueReplaceState(n,n.state,null)}function es(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function rm(e){$l(e)}function lm(e){console.error(e)}function om(e){$l(e)}function Eo(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function cm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Yu(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Eo(e,n)},a}function um(e){return e=fa(e),e.tag=3,e}function fm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;e.payload=function(){return u(d)},e.callback=function(){cm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cm(n,a,r),typeof u!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Hx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,u,!0),a=Hn.current,a!==null){switch(a.tag){case 31:case 13:return ei===null?Po():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===co?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),yf(e,r,u)),!1;case 22:return a.flags|=65536,r===co?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),yf(e,r,u)),!1}throw Error(s(435,a.tag))}return yf(e,r,u),Po(),!1}if(vt)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==hu&&(e=Error(s(422),{cause:r}),Qr(Kn(e,a)))):(r!==hu&&(n=Error(s(423),{cause:r}),Qr(Kn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Kn(r,a),u=Yu(e.stateNode,r,u),bu(e,u),qt!==4&&(qt=2)),!1;var d=Error(s(520),{cause:r});if(d=Kn(d,a),gl===null?gl=[d]:gl.push(d),qt!==4&&(qt=2),n===null)return!0;r=Kn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Yu(a.stateNode,r,e),bu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(_a===null||!_a.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=um(u),fm(u,e,a,r),bu(a,u),!1}a=a.return}while(a!==null);return!1}var Zu=Error(s(461)),en=!1;function mn(e,n,a,r){n.child=e===null?mp(n,null,a,r):Ja(n,e.child,a,r)}function dm(e,n,a,r,u){a=a.render;var d=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return Ya(n),r=Nu(e,n,a,v,d,u),b=Du(),e!==null&&!en?(Uu(e,n,u),zi(e,n,u)):(vt&&b&&fu(n),n.flags|=1,mn(e,n,r,u),n.child)}function hm(e,n,a,r,u){if(e===null){var d=a.type;return typeof d=="function"&&!ou(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,pm(e,n,d,r,u)):(e=io(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!af(e,u)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(v,r)&&e.ref===n.ref)return zi(e,n,u)}return n.flags|=1,e=Ni(d,r),e.ref=n.ref,e.return=n,n.child=e}function pm(e,n,a,r,u){if(e!==null){var d=e.memoizedProps;if(Yr(d,r)&&e.ref===n.ref)if(en=!1,n.pendingProps=r=d,af(e,u))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,zi(e,n,u)}return Ku(e,n,a,r,u)}function mm(e,n,a,r){var u=r.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~d}else r=0,n.child=null;return gm(e,n,d,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&lo(n,d!==null?d.cachePool:null),d!==null?_p(n,d):Au(),xp(n);else return r=n.lanes=536870912,gm(e,n,d!==null?d.baseLanes|a:a,a,r)}else d!==null?(lo(n,d.cachePool),_p(n,d),pa(),n.memoizedState=null):(e!==null&&lo(n,null),Au(),pa());return mn(e,n,u,a),n.child}function cl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gm(e,n,a,r,u){var d=yu();return d=d===null?null:{parent:Jt._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&lo(n,null),Au(),xp(n),e!==null&&Fs(e,n,r,!0),n.childLanes=u,null}function bo(e,n){return n=Ao({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function vm(e,n,a){return Ja(n,e.child,null,a),e=bo(n,n.pendingProps),e.flags|=2,Gn(n),n.memoizedState=null,e}function Gx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(vt){if(r.mode==="hidden")return e=bo(n,r),n.lanes=536870912,cl(null,e);if(Cu(n),(e=It)?(e=wg(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ra!==null?{id:_i,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=ep(e),a.return=n,n.child=a,hn=n,It=null)):e=null,e===null)throw oa(n);return n.lanes=536870912,null}return bo(n,r)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(Cu(n),u)if(n.flags&256)n.flags&=-257,n=vm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(en||Fs(e,n,a,!1),u=(a&e.childLanes)!==0,en||u){if(r=Ot,r!==null&&(v=Pr(r,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,ka(e,v),Ln(r,e,v),Zu;Po(),n=vm(e,n,a)}else e=d.treeContext,It=ti(v.nextSibling),hn=n,vt=!0,la=null,$n=!1,e!==null&&ip(n,e),n=bo(n,r),n.flags|=4096;return n}return e=Ni(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function To(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ku(e,n,a,r,u){return Ya(n),a=Nu(e,n,a,r,void 0,u),r=Du(),e!==null&&!en?(Uu(e,n,u),zi(e,n,u)):(vt&&r&&fu(n),n.flags|=1,mn(e,n,a,u),n.child)}function _m(e,n,a,r,u,d){return Ya(n),n.updateQueue=null,a=Sp(n,r,a,u),yp(e),r=Du(),e!==null&&!en?(Uu(e,n,d),zi(e,n,d)):(vt&&r&&fu(n),n.flags|=1,mn(e,n,a,d),n.child)}function xm(e,n,a,r,u){if(Ya(n),n.stateNode===null){var d=zs,v=a.contextType;typeof v=="object"&&v!==null&&(d=pn(v)),d=new a(r,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=qu,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=r,d.state=n.memoizedState,d.refs={},Mu(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?pn(v):zs,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Wu(n,a,v,r),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&qu.enqueueReplaceState(d,d.state,null),al(n,r,d,u),il(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,I=es(a,b);d.props=I;var Q=d.context,ue=a.contextType;v=zs,typeof ue=="object"&&ue!==null&&(v=pn(ue));var pe=a.getDerivedStateFromProps;ue=typeof pe=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ue||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||Q!==v)&&sm(n,d,r,v),ua=!1;var $=n.memoizedState;d.state=$,al(n,r,d,u),il(),Q=n.memoizedState,b||$!==Q||ua?(typeof pe=="function"&&(Wu(n,a,pe,r),Q=n.memoizedState),(I=ua||am(n,a,I,r,$,Q,v))?(ue||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),d.props=r,d.state=Q,d.context=v,r=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{d=n.stateNode,Eu(e,n),v=n.memoizedProps,ue=es(a,v),d.props=ue,pe=n.pendingProps,$=d.context,Q=a.contextType,I=zs,typeof Q=="object"&&Q!==null&&(I=pn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==pe||$!==I)&&sm(n,d,r,I),ua=!1,$=n.memoizedState,d.state=$,al(n,r,d,u),il();var se=n.memoizedState;v!==pe||$!==se||ua||e!==null&&e.dependencies!==null&&so(e.dependencies)?(typeof b=="function"&&(Wu(n,a,b,r),se=n.memoizedState),(ue=ua||am(n,a,ue,r,$,se,I)||e!==null&&e.dependencies!==null&&so(e.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,se,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,se,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=se),d.props=r,d.state=se,d.context=I,r=ue):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return d=r,To(e,n),r=(n.flags&128)!==0,d||r?(d=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&r?(n.child=Ja(n,e.child,null,u),n.child=Ja(n,null,a,u)):mn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=zi(e,n,u),e}function ym(e,n,a,r){return Wa(),n.flags|=256,mn(e,n,a,r),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:cp()}}function $u(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=kn),e}function Sm(e,n,a){var r=n.pendingProps,u=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Zt.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(vt){if(u?ha(n):pa(),(e=It)?(e=wg(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ra!==null?{id:_i,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=ep(e),a.return=n,n.child=a,hn=n,It=null)):e=null,e===null)throw oa(n);return zf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(pa(),u=n.mode,b=Ao({mode:"hidden",children:b},u),r=Xa(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=Ju(a),r.childLanes=$u(e,v,a),n.memoizedState=Qu,cl(null,r)):(ha(n),ef(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(d)n.flags&256?(ha(n),n.flags&=-257,n=tf(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),b=r.fallback,u=n.mode,r=Ao({mode:"visible",children:r.children},u),b=Xa(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,Ja(n,e.child,null,a),r=n.child,r.memoizedState=Ju(a),r.childLanes=$u(e,v,a),n.memoizedState=Qu,n=cl(null,r));else if(ha(n),zf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var Q=v.dgst;v=Q,r=Error(s(419)),r.stack="",r.digest=v,Qr({value:r,source:null,stack:null}),n=tf(e,n,a)}else if(en||Fs(e,n,a,!1),v=(a&e.childLanes)!==0,en||v){if(v=Ot,v!==null&&(r=Pr(v,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,ka(e,r),Ln(v,e,r),Zu;Pf(b)||Po(),n=tf(e,n,a)}else Pf(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,It=ti(b.nextSibling),hn=n,vt=!0,la=null,$n=!1,e!==null&&ip(n,e),n=ef(n,r.children),n.flags|=4096);return n}return u?(pa(),b=r.fallback,u=n.mode,I=e.child,Q=I.sibling,r=Ni(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,Q!==null?b=Ni(Q,b):(b=Xa(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,cl(null,r),r=n.child,b=e.child.memoizedState,b===null?b=Ju(a):(u=b.cachePool,u!==null?(I=Jt._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=cp(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=$u(e,v,a),n.memoizedState=Qu,cl(e.child,r)):(ha(n),a=e.child,e=a.sibling,a=Ni(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function ef(e,n){return n=Ao({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ao(e,n){return e=Fn(22,e,null,n),e.lanes=0,e}function tf(e,n,a){return Ja(n,e.child,null,a),e=ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),gu(e.return,n,a)}function nf(e,n,a,r,u,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:d}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=d)}function Em(e,n,a){var r=n.pendingProps,u=r.revealOrder,d=r.tail;r=r.children;var v=Zt.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,_e(Zt,v),mn(e,n,r,a),r=vt?Kr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mm(e,a,n);else if(e.tag===19)Mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&po(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),nf(n,!1,u,a,d,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&po(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}nf(n,!0,a,null,d,r);break;case"together":nf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ni(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ni(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&so(e)))}function Vx(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),ca(n,Jt,e.memoizedState.cache),Wa();break;case 27:case 5:nt(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sm(e,n,a):(ha(n),e=zi(e,n,a),e!==null?e.sibling:null);ha(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Fs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Em(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(Zt,Zt.current),r)break;return null;case 22:return n.lanes=0,mm(e,n,a,n.pendingProps);case 24:ca(n,Jt,e.memoizedState.cache)}return zi(e,n,a)}function bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!af(e,a)&&(n.flags&128)===0)return en=!1,Vx(e,n,a);en=(e.flags&131072)!==0}else en=!1,vt&&(n.flags&1048576)!==0&&np(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Ka(n.elementType),n.type=e,typeof e=="function")ou(e)?(r=es(e,r),n.tag=1,n=xm(null,n,e,r,a)):(n.tag=0,n=Ku(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===z){n.tag=11,n=dm(null,n,e,r,a);break e}else if(u===P){n.tag=14,n=hm(null,n,e,r,a);break e}}throw n=me(e)||e,Error(s(306,n,""))}}return n;case 0:return Ku(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=es(r,n.pendingProps),xm(e,n,r,u,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var d=n.memoizedState;u=d.element,Eu(e,n),al(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ca(n,Jt,r),r!==d.cache&&vu(n,[Jt],a,!0),il(),r=v.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ym(e,n,r,a);break e}else if(r!==u){u=Kn(Error(s(424)),n),Qr(u),n=ym(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(It=ti(e.firstChild),hn=n,vt=!0,la=null,$n=!0,a=mp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Wa(),r===u){n=zi(e,n,a);break e}mn(e,n,r,a)}n=n.child}return n;case 26:return To(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:vt||(a=n.type,e=n.pendingProps,r=Go(ye.current).createElement(a),r[Qt]=n,r[_n]=e,gn(r,a,e),Ie(r),n.stateNode=r):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&vt&&(r=n.stateNode=Ug(n.type,n.pendingProps,ye.current),hn=n,$n=!0,u=It,Ma(n.type)?(If=u,It=ti(r.firstChild)):It=u),mn(e,n,n.pendingProps.children,a),To(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&vt&&((u=r=It)&&(r=x0(r,n.type,n.pendingProps,$n),r!==null?(n.stateNode=r,hn=n,It=ti(r.firstChild),$n=!1,u=!0):u=!1),u||oa(n)),nt(n),u=n.type,d=n.pendingProps,v=e!==null?e.memoizedProps:null,r=d.children,Uf(u,d)?r=null:v!==null&&Uf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,Ox,null,null,a),bl._currentValue=u),To(e,n),mn(e,n,r,a),n.child;case 6:return e===null&&vt&&((e=a=It)&&(a=y0(a,n.pendingProps,$n),a!==null?(n.stateNode=a,hn=n,It=null,e=!0):e=!1),e||oa(n)),null;case 13:return Sm(e,n,a);case 4:return He(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ja(n,null,r,a):mn(e,n,r,a),n.child;case 11:return dm(e,n,n.type,n.pendingProps,a);case 7:return mn(e,n,n.pendingProps,a),n.child;case 8:return mn(e,n,n.pendingProps.children,a),n.child;case 12:return mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ca(n,n.type,r.value),mn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Ya(n),u=pn(u),r=r(u),n.flags|=1,mn(e,n,r,a),n.child;case 14:return hm(e,n,n.type,n.pendingProps,a);case 15:return pm(e,n,n.type,n.pendingProps,a);case 19:return Em(e,n,a);case 31:return Gx(e,n,a);case 22:return mm(e,n,a,n.pendingProps);case 24:return Ya(n),r=pn(Jt),e===null?(u=yu(),u===null&&(u=Ot,d=_u(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:r,cache:u},Mu(n),ca(n,Jt,u)):((e.lanes&a)!==0&&(Eu(e,n),al(n,null,null,a),il()),u=e.memoizedState,d=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,Jt,r)):(r=d.cache,ca(n,Jt,r),r!==u.cache&&vu(n,[Jt],a,!0))),mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ii(e){e.flags|=4}function sf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Qm())e.flags|=8192;else throw Qa=co,Su}else e.flags&=-16777217}function Tm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fg(n))if(Qm())e.flags|=8192;else throw Qa=co,Su}function Ro(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?_t():536870912,e.lanes|=n,Js|=n)}function ul(e,n){if(!vt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function kx(e,n,a){var r=n.pendingProps;switch(du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Li(Jt),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bs(n)?Ii(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pu())),jt(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(Ii(n),d!==null?(jt(n),Tm(n,d)):(jt(n),sf(n,u,null,r,a))):d?d!==e.memoizedState?(Ii(n),jt(n),Tm(n,d)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ii(n),jt(n),sf(n,u,e,r,a)),null;case 27:if(Lt(n),a=ye.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ii(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}e=q.current,Bs(n)?ap(n):(e=Ug(u,r,a),n.stateNode=e,Ii(n))}return jt(n),null;case 5:if(Lt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ii(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(d=q.current,Bs(n))ap(n);else{var v=Go(ye.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?d.multiple=!0:r.size&&(d.size=r.size);break;default:d=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}d[Qt]=n,d[_n]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=d;e:switch(gn(d,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ii(n)}}return jt(n),sf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ii(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ye.current,Bs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=hn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Sg(e.nodeValue,a)),e||oa(n,!0)}else e=Go(e).createTextNode(r),e[Qt]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Bs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qt]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Gn(n),n):(Gn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return jt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Bs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Qt]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gn(n),n):(Gn(n),null)}return Gn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ro(n,n.updateQueue),jt(n),null);case 4:return Fe(),e===null&&Rf(n.stateNode.containerInfo),jt(n),null;case 10:return Li(n.type),jt(n),null;case 19:if(ne(Zt),r=n.memoizedState,r===null)return jt(n),null;if(u=(n.flags&128)!==0,d=r.rendering,d===null)if(u)ul(r,!1);else{if(qt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=po(e),d!==null){for(n.flags|=128,ul(r,!1),e=d.updateQueue,n.updateQueue=e,Ro(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$h(a,e),a=a.sibling;return _e(Zt,Zt.current&1|2),vt&&Di(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&ve()>Uo&&(n.flags|=128,u=!0,ul(r,!1),n.lanes=4194304)}else{if(!u)if(e=po(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ro(n,e),ul(r,!0),r.tail===null&&r.tailMode==="hidden"&&!d.alternate&&!vt)return jt(n),null}else 2*ve()-r.renderingStartTime>Uo&&a!==536870912&&(n.flags|=128,u=!0,ul(r,!1),n.lanes=4194304);r.isBackwards?(d.sibling=n.child,n.child=d):(e=r.last,e!==null?e.sibling=d:n.child=d,r.last=d)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ve(),e.sibling=null,a=Zt.current,_e(Zt,u?a&1|2:a&1),vt&&Di(n,r.treeForkCount),e):(jt(n),null);case 22:case 23:return Gn(n),Ru(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Ro(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Li(Jt),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Xx(e,n){switch(du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Li(Jt),Fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Lt(n),null;case 31:if(n.memoizedState!==null){if(Gn(n),n.alternate===null)throw Error(s(340));Wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(Zt),null;case 4:return Fe(),null;case 10:return Li(n.type),null;case 22:case 23:return Gn(n),Ru(),e!==null&&ne(Za),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Li(Jt),null;case 25:return null;default:return null}}function Am(e,n){switch(du(n),n.tag){case 3:Li(Jt),Fe();break;case 26:case 27:case 5:Lt(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&Gn(n);break;case 13:Gn(n);break;case 19:ne(Zt);break;case 10:Li(n.type);break;case 22:case 23:Gn(n),Ru(),e!==null&&ne(Za);break;case 24:Li(Jt)}}function fl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var d=a.create,v=a.inst;r=d(),v.destroy=r}a=a.next}while(a!==u)}}catch(b){Ct(n,n.return,b)}}function ma(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var d=u.next;r=d;do{if((r.tag&e)===e){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var I=a,Q=b;try{Q()}catch(ue){Ct(u,I,ue)}}}r=r.next}while(r!==d)}}catch(ue){Ct(n,n.return,ue)}}function Rm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{vp(n,a)}catch(r){Ct(e,e.return,r)}}}function Cm(e,n,a){a.props=es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ct(e,n,r)}}function dl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ct(e,n,u)}}function yi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ct(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ct(e,n,u)}else a.current=null}function wm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ct(e,e.return,u)}}function rf(e,n,a){try{var r=e.stateNode;h0(r,e.type,a,n),r[_n]=n}catch(u){Ct(e,e.return,u)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function lf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function of(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ci));else if(r!==4&&(r===27&&Ma(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(of(e,n,a),e=e.sibling;e!==null;)of(e,n,a),e=e.sibling}function Co(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Co(e,n,a),e=e.sibling;e!==null;)Co(e,n,a),e=e.sibling}function Dm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);gn(n,r,a),n[Qt]=e,n[_n]=a}catch(d){Ct(e,e.return,d)}}var ji=!1,tn=!1,cf=!1,Um=typeof WeakSet=="function"?WeakSet:Set,un=null;function Wx(e,n){if(e=e.containerInfo,Nf=Zo,e=kh(e),tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,b=-1,I=-1,Q=0,ue=0,pe=e,$=null;t:for(;;){for(var se;pe!==a||u!==0&&pe.nodeType!==3||(b=v+u),pe!==d||r!==0&&pe.nodeType!==3||(I=v+r),pe.nodeType===3&&(v+=pe.nodeValue.length),(se=pe.firstChild)!==null;)$=pe,pe=se;for(;;){if(pe===e)break t;if($===a&&++Q===u&&(b=v),$===d&&++ue===r&&(I=v),(se=pe.nextSibling)!==null)break;pe=$,$=pe.parentNode}pe=se}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:e,selectionRange:a},Zo=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,r=a.stateNode;try{var je=es(a.type,u);e=r.getSnapshotBeforeUpdate(je,d),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qe){Ct(a,a.return,Qe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Of(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Of(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function Lm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(e,a),r&4&&fl(5,a);break;case 1:if(Fi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ct(a,a.return,v)}else{var u=es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ct(a,a.return,v)}}r&64&&Rm(a),r&512&&dl(a,a.return);break;case 3:if(Fi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vp(e,n)}catch(v){Ct(a,a.return,v)}}break;case 27:n===null&&r&4&&Dm(a);case 26:case 5:Fi(e,a),n===null&&r&4&&wm(a),r&512&&dl(a,a.return);break;case 12:Fi(e,a);break;case 31:Fi(e,a),r&4&&zm(e,a);break;case 13:Fi(e,a),r&4&&Im(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=t0.bind(null,a),S0(e,a))));break;case 22:if(r=a.memoizedState!==null||ji,!r){n=n!==null&&n.memoizedState!==null||tn,u=ji;var d=tn;ji=r,(tn=n)&&!d?Hi(e,a,(a.subtreeFlags&8772)!==0):Fi(e,a),ji=u,tn=d}break;case 30:break;default:Fi(e,a)}}function Om(e){var n=e.alternate;n!==null&&(e.alternate=null,Om(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Y(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Gt=null,wn=!1;function Bi(e,n,a){for(a=a.child;a!==null;)Pm(e,n,a),a=a.sibling}function Pm(e,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:tn||yi(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||yi(a,n);var r=Gt,u=wn;Ma(a.type)&&(Gt=a.stateNode,wn=!1),Bi(e,n,a),Sl(a.stateNode),Gt=r,wn=u;break;case 5:tn||yi(a,n);case 6:if(r=Gt,u=wn,Gt=null,Bi(e,n,a),Gt=r,wn=u,Gt!==null)if(wn)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(a.stateNode)}catch(d){Ct(a,n,d)}else try{Gt.removeChild(a.stateNode)}catch(d){Ct(a,n,d)}break;case 18:Gt!==null&&(wn?(e=Gt,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rr(e)):Rg(Gt,a.stateNode));break;case 4:r=Gt,u=wn,Gt=a.stateNode.containerInfo,wn=!0,Bi(e,n,a),Gt=r,wn=u;break;case 0:case 11:case 14:case 15:ma(2,a,n),tn||ma(4,a,n),Bi(e,n,a);break;case 1:tn||(yi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Cm(a,n,r)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:tn=(r=tn)||a.memoizedState!==null,Bi(e,n,a),tn=r;break;default:Bi(e,n,a)}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rr(e)}catch(a){Ct(n,n.return,a)}}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rr(e)}catch(a){Ct(n,n.return,a)}}function qx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Um),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Um),n;default:throw Error(s(435,e.tag))}}function wo(e,n){var a=qx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=n0.bind(null,e,r);r.then(u,u)}})}function Nn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],d=e,v=n,b=v;e:for(;b!==null;){switch(b.tag){case 27:if(Ma(b.type)){Gt=b.stateNode,wn=!1;break e}break;case 5:Gt=b.stateNode,wn=!1;break e;case 3:case 4:Gt=b.stateNode.containerInfo,wn=!0;break e}b=b.return}if(Gt===null)throw Error(s(160));Pm(d,v,u),Gt=null,wn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jm(n,e),n=n.sibling}var oi=null;function jm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nn(n,e),Dn(e),r&4&&(ma(3,e,e.return),fl(3,e),ma(5,e,e.return));break;case 1:Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),r&64&&ji&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=oi;if(Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),r&4){var d=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":d=u.getElementsByTagName("title")[0],(!d||d[te]||d[Qt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(r),u.head.insertBefore(d,u.querySelector("head > title"))),gn(d,r,a),d[Qt]=e,Ie(d),r=d;break e;case"link":var v=jg("link","href",u).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(d=v[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break t}}d=u.createElement(r),gn(d,r,a),u.head.appendChild(d);break;case"meta":if(v=jg("meta","content",u).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(d=v[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break t}}d=u.createElement(r),gn(d,r,a),u.head.appendChild(d);break;default:throw Error(s(468,r))}d[Qt]=e,Ie(d),r=d}e.stateNode=r}else Bg(u,e.type,e.stateNode);else e.stateNode=Ig(u,r,e.memoizedProps);else d!==r?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,r===null?Bg(u,e.type,e.stateNode):Ig(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),a!==null&&r&4&&rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),e.flags&32){u=e.stateNode;try{ws(u,"")}catch(je){Ct(e,e.return,je)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,rf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(cf=!0);break;case 6:if(Nn(n,e),Dn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(je){Ct(e,e.return,je)}}break;case 3:if(Xo=null,u=oi,oi=Vo(n.containerInfo),Nn(n,e),oi=u,Dn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(je){Ct(e,e.return,je)}cf&&(cf=!1,Bm(e));break;case 4:r=oi,oi=Vo(e.stateNode.containerInfo),Nn(n,e),Dn(e),oi=r;break;case 12:Nn(n,e),Dn(e);break;case 31:Nn(n,e),Dn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wo(e,r)));break;case 13:Nn(n,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Do=ve()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wo(e,r)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=ji,ue=tn;if(ji=Q||u,tn=ue||I,Nn(n,e),tn=ue,ji=Q,Dn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ji||tn||ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=I.stateNode;var pe=I.memoizedProps.style,$=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;b.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(je){Ct(I,I.return,je)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(je){Ct(I,I.return,je)}}}else if(n.tag===18){if(a===null){I=n;try{var se=I.stateNode;u?Cg(se,!0):Cg(I.stateNode,!1)}catch(je){Ct(I,I.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,wo(e,a))));break;case 19:Nn(n,e),Dn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wo(e,r)));break;case 30:break;case 21:break;default:Nn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Nm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=lf(e);Co(e,d,u);break;case 5:var v=a.stateNode;a.flags&32&&(ws(v,""),a.flags&=-33);var b=lf(e);Co(e,b,v);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=lf(e);of(e,Q,I);break;default:throw Error(s(161))}}catch(ue){Ct(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Fi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lm(e,n.alternate,n),n=n.sibling}function ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),ts(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),ts(n);break;case 27:Sl(n.stateNode);case 26:case 5:yi(n,n.return),ts(n);break;case 22:n.memoizedState===null&&ts(n);break;case 30:ts(n);break;default:ts(n)}e=e.sibling}}function Hi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:Hi(u,d,a),fl(4,d);break;case 1:if(Hi(u,d,a),r=d,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Ct(r,r.return,Q)}if(r=d,u=r.updateQueue,u!==null){var b=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)gp(I[u],b)}catch(Q){Ct(r,r.return,Q)}}a&&v&64&&Rm(d),dl(d,d.return);break;case 27:Dm(d);case 26:case 5:Hi(u,d,a),a&&r===null&&v&4&&wm(d),dl(d,d.return);break;case 12:Hi(u,d,a);break;case 31:Hi(u,d,a),a&&v&4&&zm(u,d);break;case 13:Hi(u,d,a),a&&v&4&&Im(u,d);break;case 22:d.memoizedState===null&&Hi(u,d,a),dl(d,d.return);break;case 30:break;default:Hi(u,d,a)}n=n.sibling}}function uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jr(a))}function ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e))}function ci(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fm(e,n,a,r),n=n.sibling}function Fm(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ci(e,n,a,r),u&2048&&fl(9,n);break;case 1:ci(e,n,a,r);break;case 3:ci(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e)));break;case 12:if(u&2048){ci(e,n,a,r),e=n.stateNode;try{var d=n.memoizedProps,v=d.id,b=d.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ct(n,n.return,I)}}else ci(e,n,a,r);break;case 31:ci(e,n,a,r);break;case 13:ci(e,n,a,r);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?ci(e,n,a,r):hl(e,n):d._visibility&2?ci(e,n,a,r):(d._visibility|=2,Zs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&uf(v,n);break;case 24:ci(e,n,a,r),u&2048&&ff(n.alternate,n);break;default:ci(e,n,a,r)}}function Zs(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,v=n,b=a,I=r,Q=v.flags;switch(v.tag){case 0:case 11:case 15:Zs(d,v,b,I,u),fl(8,v);break;case 23:break;case 22:var ue=v.stateNode;v.memoizedState!==null?ue._visibility&2?Zs(d,v,b,I,u):hl(d,v):(ue._visibility|=2,Zs(d,v,b,I,u)),u&&Q&2048&&uf(v.alternate,v);break;case 24:Zs(d,v,b,I,u),u&&Q&2048&&ff(v.alternate,v);break;default:Zs(d,v,b,I,u)}n=n.sibling}}function hl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:hl(a,r),u&2048&&uf(r.alternate,r);break;case 24:hl(a,r),u&2048&&ff(r.alternate,r);break;default:hl(a,r)}n=n.sibling}}var pl=8192;function Ks(e,n,a){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)Hm(e,n,a),e=e.sibling}function Hm(e,n,a){switch(e.tag){case 26:Ks(e,n,a),e.flags&pl&&e.memoizedState!==null&&L0(a,oi,e.memoizedState,e.memoizedProps);break;case 5:Ks(e,n,a);break;case 3:case 4:var r=oi;oi=Vo(e.stateNode.containerInfo),Ks(e,n,a),oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=pl,pl=16777216,Ks(e,n,a),pl=r):Ks(e,n,a));break;default:Ks(e,n,a)}}function Gm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ml(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];un=r,km(r,e)}Gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&ma(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,No(e)):ml(e);break;default:ml(e)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];un=r,km(r,e)}Gm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ma(8,n,n.return),No(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,No(n));break;default:No(n)}e=e.sibling}}function km(e,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,un=r;else e:for(a=e;un!==null;){r=un;var u=r.sibling,d=r.return;if(Om(r),r===a){un=null;break e}if(u!==null){u.return=d,un=u;break e}un=d}}}var Yx={getCacheForType:function(e){var n=pn(Jt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return pn(Jt).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,Et=0,Ot=null,ft=null,pt=0,Rt=0,Vn=null,ga=!1,Qs=!1,df=!1,Gi=0,qt=0,va=0,ns=0,hf=0,kn=0,Js=0,gl=null,Un=null,pf=!1,Do=0,Xm=0,Uo=1/0,Lo=null,_a=null,rn=0,xa=null,$s=null,Vi=0,mf=0,gf=null,Wm=null,vl=0,vf=null;function Xn(){return(Et&2)!==0&&pt!==0?pt&-pt:L.T!==null?Ef():zr()}function qm(){if(kn===0)if((pt&536870912)===0||vt){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),kn=e}else kn=536870912;return e=Hn.current,e!==null&&(e.flags|=32),kn}function Ln(e,n,a){(e===Ot&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)&&(er(e,0),ya(e,pt,kn,!1)),vn(e,a),((Et&2)===0||e!==Ot)&&(e===Ot&&((Et&2)===0&&(ns|=a),qt===4&&ya(e,pt,kn,!1)),Si(e))}function Ym(e,n,a){if((Et&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Pt(e,n),u=r?Jx(e,n):xf(e,n,!0),d=r;do{if(u===0){Qs&&!r&&ya(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Kx(a)){u=xf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var b=e;u=gl;var I=b.current.memoizedState.isDehydrated;if(I&&(er(b,v).flags|=256),v=xf(b,v,!1),v!==2){if(df&&!I){b.errorRecoveryDisabledLanes|=d,ns|=d,u=4;break e}d=Un,Un=u,d!==null&&(Un===null?Un=d:Un.push.apply(Un,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){er(e,0),ya(e,n,0,!0);break}e:{switch(r=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ya(r,n,kn,!ga);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Do+300-ve(),10<u)){if(ya(r,n,kn,!ga),ot(r,0,!0)!==0)break e;Vi=n,r.timeoutHandle=Tg(Zm.bind(null,r,a,Un,Lo,pf,n,kn,ns,Js,ga,d,"Throttled",-0,0),u);break e}Zm(r,a,Un,Lo,pf,n,kn,ns,Js,ga,d,null,-0,0)}}break}while(!0);Si(e)}function Zm(e,n,a,r,u,d,v,b,I,Q,ue,pe,$,se){if(e.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ci},Hm(n,d,pe);var je=(d&62914560)===d?Do-ve():(d&4194048)===d?Xm-ve():0;if(je=O0(pe,je),je!==null){Vi=d,e.cancelPendingCommit=je(ig.bind(null,e,n,d,a,r,u,v,b,I,ue,pe,null,$,se)),ya(e,d,v,!Q);return}}ig(e,n,d,a,r,u,v,b,I)}function Kx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],d=u.getSnapshot;u=u.value;try{if(!Bn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(e,n,a,r){n&=~hf,n&=~ns,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var d=31-Ze(u),v=1<<d;r[d]=-1,u&=~v}a!==0&&vi(e,a,n)}function Oo(){return(Et&6)===0?(_l(0),!1):!0}function _f(){if(ft!==null){if(Rt===0)var e=ft.return;else e=ft,Ui=qa=null,Lu(e),ks=null,el=0,e=ft;for(;e!==null;)Am(e.alternate,e),e=e.return;ft=null}}function er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,g0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vi=0,_f(),Ot=e,ft=a=Ni(e.current,null),pt=n,Rt=0,Vn=null,ga=!1,Qs=Pt(e,n),df=!1,Js=kn=hf=ns=va=qt=0,Un=gl=null,pf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ze(r),d=1<<u;n|=e[u],r&=~d}return Gi=n,eo(),a}function Km(e,n){at=null,L.H=ol,n===Vs||n===oo?(n=dp(),Rt=3):n===Su?(n=dp(),Rt=4):Rt=n===Zu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,ft===null&&(qt=1,Eo(e,Kn(n,e.current)))}function Qm(){var e=Hn.current;return e===null?!0:(pt&4194048)===pt?ei===null:(pt&62914560)===pt||(pt&536870912)!==0?e===ei:!1}function Jm(){var e=L.H;return L.H=ol,e===null?ol:e}function $m(){var e=L.A;return L.A=Yx,e}function Po(){qt=4,ga||(pt&4194048)!==pt&&Hn.current!==null||(Qs=!0),(va&134217727)===0&&(ns&134217727)===0||Ot===null||ya(Ot,pt,kn,!1)}function xf(e,n,a){var r=Et;Et|=2;var u=Jm(),d=$m();(Ot!==e||pt!==n)&&(Lo=null,er(e,n)),n=!1;var v=qt;e:do try{if(Rt!==0&&ft!==null){var b=ft,I=Vn;switch(Rt){case 8:_f(),v=6;break e;case 3:case 2:case 9:case 6:Hn.current===null&&(n=!0);var Q=Rt;if(Rt=0,Vn=null,tr(e,b,I,Q),a&&Qs){v=0;break e}break;default:Q=Rt,Rt=0,Vn=null,tr(e,b,I,Q)}}Qx(),v=qt;break}catch(ue){Km(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Ui=qa=null,Et=r,L.H=u,L.A=d,ft===null&&(Ot=null,pt=0,eo()),v}function Qx(){for(;ft!==null;)eg(ft)}function Jx(e,n){var a=Et;Et|=2;var r=Jm(),u=$m();Ot!==e||pt!==n?(Lo=null,Uo=ve()+500,er(e,n)):Qs=Pt(e,n);e:do try{if(Rt!==0&&ft!==null){n=ft;var d=Vn;t:switch(Rt){case 1:Rt=0,Vn=null,tr(e,n,d,1);break;case 2:case 9:if(up(d)){Rt=0,Vn=null,tg(n);break}n=function(){Rt!==2&&Rt!==9||Ot!==e||(Rt=7),Si(e)},d.then(n,n);break e;case 3:Rt=7;break e;case 4:Rt=5;break e;case 7:up(d)?(Rt=0,Vn=null,tg(n)):(Rt=0,Vn=null,tr(e,n,d,7));break;case 5:var v=null;switch(ft.tag){case 26:v=ft.memoizedState;case 5:case 27:var b=ft;if(v?Fg(v):b.stateNode.complete){Rt=0,Vn=null;var I=b.sibling;if(I!==null)ft=I;else{var Q=b.return;Q!==null?(ft=Q,zo(Q)):ft=null}break t}}Rt=0,Vn=null,tr(e,n,d,5);break;case 6:Rt=0,Vn=null,tr(e,n,d,6);break;case 8:_f(),qt=6;break e;default:throw Error(s(462))}}$x();break}catch(ue){Km(e,ue)}while(!0);return Ui=qa=null,L.H=r,L.A=u,Et=a,ft!==null?0:(Ot=null,pt=0,eo(),qt)}function $x(){for(;ft!==null&&!ae();)eg(ft)}function eg(e){var n=bm(e.alternate,e,Gi);e.memoizedProps=e.pendingProps,n===null?zo(e):ft=n}function tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_m(a,n,n.pendingProps,n.type,void 0,pt);break;case 11:n=_m(a,n,n.pendingProps,n.type.render,n.ref,pt);break;case 5:Lu(n);default:Am(a,n),n=ft=$h(n,Gi),n=bm(a,n,Gi)}e.memoizedProps=e.pendingProps,n===null?zo(e):ft=n}function tr(e,n,a,r){Ui=qa=null,Lu(n),ks=null,el=0;var u=n.return;try{if(Hx(e,u,n,a,pt)){qt=1,Eo(e,Kn(a,e.current)),ft=null;return}}catch(d){if(u!==null)throw ft=u,d;qt=1,Eo(e,Kn(a,e.current)),ft=null;return}n.flags&32768?(vt||r===1?e=!0:Qs||(pt&536870912)!==0?e=!1:(ga=e=!0,(r===2||r===9||r===3||r===6)&&(r=Hn.current,r!==null&&r.tag===13&&(r.flags|=16384))),ng(n,e)):zo(n)}function zo(e){var n=e;do{if((n.flags&32768)!==0){ng(n,ga);return}e=n.return;var a=kx(n.alternate,n,Gi);if(a!==null){ft=a;return}if(n=n.sibling,n!==null){ft=n;return}ft=n=e}while(n!==null);qt===0&&(qt=5)}function ng(e,n){do{var a=Xx(e.alternate,e);if(a!==null){a.flags&=32767,ft=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ft=e;return}ft=e=a}while(e!==null);qt=6,ft=null}function ig(e,n,a,r,u,d,v,b,I){e.cancelPendingCommit=null;do Io();while(rn!==0);if((Et&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=ru,Xl(e,a,d,v,b,I),e===Ot&&(ft=Ot=null,pt=0),$s=n,xa=e,Vi=a,mf=d,gf=u,Wm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i0(Le,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,u=W.p,W.p=2,v=Et,Et|=4;try{Wx(e,n,a)}finally{Et=v,W.p=u,L.T=r}}rn=1,ag(),sg(),rg()}}function ag(){if(rn===1){rn=0;var e=xa,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=W.p;W.p=2;var u=Et;Et|=4;try{jm(n,e);var d=Df,v=kh(e.containerInfo),b=d.focusedElem,I=d.selectionRange;if(v!==b&&b&&b.ownerDocument&&Vh(b.ownerDocument.documentElement,b)){if(I!==null&&tu(b)){var Q=I.start,ue=I.end;if(ue===void 0&&(ue=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ue,b.value.length);else{var pe=b.ownerDocument||document,$=pe&&pe.defaultView||window;if($.getSelection){var se=$.getSelection(),je=b.textContent.length,Qe=Math.min(I.start,je),Ut=I.end===void 0?Qe:Math.min(I.end,je);!se.extend&&Qe>Ut&&(v=Ut,Ut=Qe,Qe=v);var X=Gh(b,Qe),F=Gh(b,Ut);if(X&&F&&(se.rangeCount!==1||se.anchorNode!==X.node||se.anchorOffset!==X.offset||se.focusNode!==F.node||se.focusOffset!==F.offset)){var K=pe.createRange();K.setStart(X.node,X.offset),se.removeAllRanges(),Qe>Ut?(se.addRange(K),se.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),se.addRange(K))}}}}for(pe=[],se=b;se=se.parentNode;)se.nodeType===1&&pe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pe.length;b++){var fe=pe[b];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Zo=!!Nf,Df=Nf=null}finally{Et=u,W.p=r,L.T=a}}e.current=n,rn=2}}function sg(){if(rn===2){rn=0;var e=xa,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=W.p;W.p=2;var u=Et;Et|=4;try{Lm(e,n.alternate,n)}finally{Et=u,W.p=r,L.T=a}}rn=3}}function rg(){if(rn===4||rn===3){rn=0,Se();var e=xa,n=$s,a=Vi,r=Wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,$s=xa=null,lg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(_a=null),na(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,u=W.p,W.p=2,L.T=null;try{for(var d=e.onRecoverableError,v=0;v<r.length;v++){var b=r[v];d(b.value,{componentStack:b.stack})}}finally{L.T=n,W.p=u}}(Vi&3)!==0&&Io(),Si(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===vf?vl++:(vl=0,vf=e):vl=0,_l(0)}}function lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jr(n)))}function Io(){return ag(),sg(),rg(),og()}function og(){if(rn!==5)return!1;var e=xa,n=mf;mf=0;var a=na(Vi),r=L.T,u=W.p;try{W.p=32>a?32:a,L.T=null,a=gf,gf=null;var d=xa,v=Vi;if(rn=0,$s=xa=null,Vi=0,(Et&6)!==0)throw Error(s(331));var b=Et;if(Et|=4,Vm(d.current),Fm(d,d.current,v,a),Et=b,_l(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ke,d)}catch{}return!0}finally{W.p=u,L.T=r,lg(e,n)}}function cg(e,n,a){n=Kn(a,n),n=Yu(e.stateNode,n,2),e=da(e,n,2),e!==null&&(vn(e,2),Si(e))}function Ct(e,n,a){if(e.tag===3)cg(e,e,a);else for(;n!==null;){if(n.tag===3){cg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_a===null||!_a.has(r))){e=Kn(a,e),a=um(2),r=da(n,a,2),r!==null&&(fm(a,r,n,e),vn(r,2),Si(r));break}}n=n.return}}function yf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Zx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(df=!0,u.add(a),e=e0.bind(null,e,n,a),n.then(e,e))}function e0(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ot===e&&(pt&a)===a&&(qt===4||qt===3&&(pt&62914560)===pt&&300>ve()-Do?(Et&2)===0&&er(e,0):hf|=a,Js===pt&&(Js=0)),Si(e)}function ug(e,n){n===0&&(n=_t()),e=ka(e,n),e!==null&&(vn(e,n),Si(e))}function t0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ug(e,a)}function n0(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),ug(e,a)}function i0(e,n){return O(e,n)}var jo=null,nr=null,Sf=!1,Bo=!1,Mf=!1,Sa=0;function Si(e){e!==nr&&e.next===null&&(nr===null?jo=nr=e:nr=nr.next=e),Bo=!0,Sf||(Sf=!0,s0())}function _l(e,n){if(!Mf&&Bo){Mf=!0;do for(var a=!1,r=jo;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var d=0;else{var v=r.suspendedLanes,b=r.pingedLanes;d=(1<<31-Ze(42|e)+1)-1,d&=u&~(v&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,pg(r,d))}else d=pt,d=ot(r,r===Ot?d:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(d&3)===0||Pt(r,d)||(a=!0,pg(r,d));r=r.next}while(a);Mf=!1}}function a0(){fg()}function fg(){Bo=Sf=!1;var e=0;Sa!==0&&m0()&&(e=Sa);for(var n=ve(),a=null,r=jo;r!==null;){var u=r.next,d=dg(r,n);d===0?(r.next=null,a===null?jo=u:a.next=u,u===null&&(nr=a)):(a=r,(e!==0||(d&3)!==0)&&(Bo=!0)),r=u}rn!==0&&rn!==5||_l(e),Sa!==0&&(Sa=0)}function dg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ze(d),b=1<<v,I=u[v];I===-1?((b&a)===0||(b&r)!==0)&&(u[v]=an(b,n)):I<=n&&(e.expiredLanes|=b),d&=~b}if(n=Ot,a=pt,a=ot(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&T(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&T(r),na(a)){case 2:case 8:a=De;break;case 32:a=Le;break;case 268435456:a=Ae;break;default:a=Le}return r=hg.bind(null,e),a=O(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&T(r),e.callbackPriority=2,e.callbackNode=null,2}function hg(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Io()&&e.callbackNode!==a)return null;var r=pt;return r=ot(e,e===Ot?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ym(e,r,n),dg(e,ve()),e.callbackNode!=null&&e.callbackNode===a?hg.bind(null,e):null)}function pg(e,n){if(Io())return null;Ym(e,n,!0)}function s0(){v0(function(){(Et&6)!==0?O(We,a0):fg()})}function Ef(){if(Sa===0){var e=Hs;e===0&&(e=he,he<<=1,(he&261888)===0&&(he=256)),Sa=e}return Sa}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(""+e)}function gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function r0(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var d=mg((u[_n]||null).action),v=r.submitter;v&&(n=(n=v[_n]||null)?mg(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var b=new Kl("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Sa!==0){var I=v?gg(u,v):new FormData(u);Gu(a,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=v?gg(u,v):new FormData(u),Gu(a,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var bf=0;bf<su.length;bf++){var Tf=su[bf],l0=Tf.toLowerCase(),o0=Tf[0].toUpperCase()+Tf.slice(1);li(l0,"on"+o0)}li(qh,"onAnimationEnd"),li(Yh,"onAnimationIteration"),li(Zh,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(bx,"onTransitionRun"),li(Tx,"onTransitionStart"),li(Ax,"onTransitionCancel"),li(Kh,"onTransitionEnd"),At("onMouseEnter",["mouseout","mouseover"]),At("onMouseLeave",["mouseout","mouseover"]),At("onPointerEnter",["pointerout","pointerover"]),At("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var d=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],I=b.instance,Q=b.currentTarget;if(b=b.listener,I!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=Q;try{d(u)}catch(ue){$l(ue)}u.currentTarget=null,d=I}else for(v=0;v<r.length;v++){if(b=r[v],I=b.instance,Q=b.currentTarget,b=b.listener,I!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=Q;try{d(u)}catch(ue){$l(ue)}u.currentTarget=null,d=I}}}}function dt(e,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var r=e+"__bubble";a.has(r)||(_g(n,e,2,!1),a.add(r))}function Af(e,n,a){var r=0;n&&(r|=4),_g(a,e,r,n)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Rf(e){if(!e[Fo]){e[Fo]=!0,Je.forEach(function(a){a!=="selectionchange"&&(c0.has(a)||Af(a,!1,e),Af(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fo]||(n[Fo]=!0,Af("selectionchange",!1,n))}}function _g(e,n,a,r){switch(qg(n)){case 2:var u=I0;break;case 8:u=j0;break;default:u=Gf}a=u.bind(null,n,a,e),u=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Cf(e,n,a,r,u){var d=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=r.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=Te(b),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){r=d=v;continue e}b=b.parentNode}}r=r.return}Eh(function(){var Q=d,ue=kc(a),pe=[];e:{var $=Qh.get(e);if($!==void 0){var se=Kl,je=e;switch(e){case"keypress":if(Yl(a)===0)break e;case"keydown":case"keyup":se=nx;break;case"focusin":je="focus",se=Kc;break;case"focusout":je="blur",se=Kc;break;case"beforeblur":case"afterblur":se=Kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=sx;break;case qh:case Yh:case Zh:se=q_;break;case Kh:se=lx;break;case"scroll":case"scrollend":se=G_;break;case"wheel":se=cx;break;case"copy":case"cut":case"paste":se=Z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Ch;break;case"toggle":case"beforetoggle":se=fx}var Qe=(n&4)!==0,Ut=!Qe&&(e==="scroll"||e==="scrollend"),X=Qe?$!==null?$+"Capture":null:$;Qe=[];for(var F=Q,K;F!==null;){var fe=F;if(K=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||K===null||X===null||(fe=Hr(F,X),fe!=null&&Qe.push(yl(F,fe,K))),Ut)break;F=F.return}0<Qe.length&&($=new se($,je,null,a,ue),pe.push({event:$,listeners:Qe}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",$&&a!==Vc&&(je=a.relatedTarget||a.fromElement)&&(Te(je)||je[ia]))break e;if((se||$)&&($=ue.window===ue?ue:($=ue.ownerDocument)?$.defaultView||$.parentWindow:window,se?(je=a.relatedTarget||a.toElement,se=Q,je=je?Te(je):null,je!==null&&(Ut=f(je),Qe=je.tag,je!==Ut||Qe!==5&&Qe!==27&&Qe!==6)&&(je=null)):(se=null,je=Q),se!==je)){if(Qe=Ah,fe="onMouseLeave",X="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=Ch,fe="onPointerLeave",X="onPointerEnter",F="pointer"),Ut=se==null?$:Pe(se),K=je==null?$:Pe(je),$=new Qe(fe,F+"leave",se,a,ue),$.target=Ut,$.relatedTarget=K,fe=null,Te(ue)===Q&&(Qe=new Qe(X,F+"enter",je,a,ue),Qe.target=K,Qe.relatedTarget=Ut,fe=Qe),Ut=fe,se&&je)t:{for(Qe=u0,X=se,F=je,K=0,fe=X;fe;fe=Qe(fe))K++;fe=0;for(var Xe=F;Xe;Xe=Qe(Xe))fe++;for(;0<K-fe;)X=Qe(X),K--;for(;0<fe-K;)F=Qe(F),fe--;for(;K--;){if(X===F||F!==null&&X===F.alternate){Qe=X;break t}X=Qe(X),F=Qe(F)}Qe=null}else Qe=null;se!==null&&xg(pe,$,se,Qe,!1),je!==null&&Ut!==null&&xg(pe,Ut,je,Qe,!0)}}e:{if($=Q?Pe(Q):window,se=$.nodeName&&$.nodeName.toLowerCase(),se==="select"||se==="input"&&$.type==="file")var St=zh;else if(Oh($))if(Ih)St=Sx;else{St=xx;var Be=_x}else se=$.nodeName,!se||se.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Gc(Q.elementType)&&(St=zh):St=yx;if(St&&(St=St(e,Q))){Ph(pe,St,a,ue);break e}Be&&Be(e,$,Q),e==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Hc($,"number",$.value)}switch(Be=Q?Pe(Q):window,e){case"focusin":(Oh(Be)||Be.contentEditable==="true")&&(Ls=Be,nu=Q,Zr=null);break;case"focusout":Zr=nu=Ls=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Xh(pe,a,ue);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Xh(pe,a,ue)}var st;if(Jc)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Us?Uh(e,a)&&(mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(wh&&a.locale!=="ko"&&(Us||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Us&&(st=bh()):(sa=ue,qc="value"in sa?sa.value:sa.textContent,Us=!0)),Be=Ho(Q,mt),0<Be.length&&(mt=new Rh(mt,e,null,a,ue),pe.push({event:mt,listeners:Be}),st?mt.data=st:(st=Lh(a),st!==null&&(mt.data=st)))),(st=hx?px(e,a):mx(e,a))&&(mt=Ho(Q,"onBeforeInput"),0<mt.length&&(Be=new Rh("onBeforeInput","beforeinput",null,a,ue),pe.push({event:Be,listeners:mt}),Be.data=st)),r0(pe,e,Q,a,ue)}vg(pe,n)})}function yl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ho(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Hr(e,a),u!=null&&r.unshift(yl(e,u,d)),u=Hr(e,n),u!=null&&r.push(yl(e,u,d))),e.tag===3)return r;e=e.return}return[]}function u0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,n,a,r,u){for(var d=n._reactName,v=[];a!==null&&a!==r;){var b=a,I=b.alternate,Q=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||Q===null||(I=Q,u?(Q=Hr(a,d),Q!=null&&v.unshift(yl(a,Q,I))):u||(Q=Hr(a,d),Q!=null&&v.push(yl(a,Q,I)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var f0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(f0,`
`).replace(d0,"")}function Sg(e,n){return n=yg(n),yg(e)===n}function Dt(e,n,a,r,u,d){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ws(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ws(e,""+r);break;case"className":gt(e,"class",r);break;case"tabIndex":gt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gt(e,a,r);break;case"style":Sh(e,r,d);break;case"data":if(n!=="object"){gt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Dt(e,n,"name",u.name,u,null),Dt(e,n,"formEncType",u.formEncType,u,null),Dt(e,n,"formMethod",u.formMethod,u,null),Dt(e,n,"formTarget",u.formTarget,u,null)):(Dt(e,n,"encType",u.encType,u,null),Dt(e,n,"method",u.method,u,null),Dt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Wl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ci);break;case"onScroll":r!=null&&dt("scroll",e);break;case"onScrollEnd":r!=null&&dt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Wl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":dt("beforetoggle",e),dt("toggle",e),Xt(e,"popover",r);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=F_.get(a)||a,Xt(e,a,r))}}function wf(e,n,a,r,u,d){switch(a){case"style":Sh(e,r,d);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?ws(e,r):(typeof r=="number"||typeof r=="bigint")&&ws(e,""+r);break;case"onScroll":r!=null&&dt("scroll",e);break;case"onScrollEnd":r!=null&&dt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof r=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xt(e,a,r)}}}function gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",e),dt("load",e);var r=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,d,v,a,null)}}u&&Dt(e,n,"srcSet",a.srcSet,a,null),r&&Dt(e,n,"src",a.src,a,null);return;case"input":dt("invalid",e);var b=d=v=u=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ue=a[r];if(ue!=null)switch(r){case"name":u=ue;break;case"type":v=ue;break;case"checked":I=ue;break;case"defaultChecked":Q=ue;break;case"value":d=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Dt(e,n,r,ue,a,null)}}Fr(e,d,b,I,Q,v,u,!1);return;case"select":dt("invalid",e),r=v=d=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:Dt(e,n,u,b,a,null)}n=d,a=v,e.multiple=!!r,n!=null?Cs(e,!!r,n,!1):a!=null&&Cs(e,!!r,a,!0);return;case"textarea":dt("invalid",e),d=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Dt(e,n,v,b,a,null)}xh(e,r,u,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Dt(e,n,I,r,a,null)}return;case"dialog":dt("beforetoggle",e),dt("toggle",e),dt("cancel",e),dt("close",e);break;case"iframe":case"object":dt("load",e);break;case"video":case"audio":for(r=0;r<xl.length;r++)dt(xl[r],e);break;case"image":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"embed":case"source":case"link":dt("error",e),dt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,Q,r,a,null)}return;default:if(Gc(n)){for(ue in a)a.hasOwnProperty(ue)&&(r=a[ue],r!==void 0&&wf(e,n,ue,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Dt(e,n,b,r,a,null))}function h0(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,b=null,I=null,Q=null,ue=null;for(se in a){var pe=a[se];if(a.hasOwnProperty(se)&&pe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=pe;default:r.hasOwnProperty(se)||Dt(e,n,se,null,r,pe)}}for(var $ in r){var se=r[$];if(pe=a[$],r.hasOwnProperty($)&&(se!=null||pe!=null))switch($){case"type":d=se;break;case"name":u=se;break;case"checked":Q=se;break;case"defaultChecked":ue=se;break;case"value":v=se;break;case"defaultValue":b=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==pe&&Dt(e,n,$,se,r,pe)}}Br(e,v,b,I,Q,ue,d,u);return;case"select":se=v=b=$=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":se=I;default:r.hasOwnProperty(d)||Dt(e,n,d,null,r,I)}for(u in r)if(d=r[u],I=a[u],r.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":$=d;break;case"defaultValue":b=d;break;case"multiple":v=d;default:d!==I&&Dt(e,n,u,d,r,I)}n=b,a=v,r=se,$!=null?Cs(e,!!a,$,!1):!!r!=!!a&&(n!=null?Cs(e,!!a,n,!0):Cs(e,!!a,a?[]:"",!1));return;case"textarea":se=$=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Dt(e,n,b,null,r,u)}for(v in r)if(u=r[v],d=a[v],r.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":$=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Dt(e,n,v,u,r,d)}_h(e,$,se);return;case"option":for(var je in a)if($=a[je],a.hasOwnProperty(je)&&$!=null&&!r.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:Dt(e,n,je,null,r,$)}for(I in r)if($=r[I],se=a[I],r.hasOwnProperty(I)&&$!==se&&($!=null||se!=null))switch(I){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Dt(e,n,I,$,r,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)$=a[Qe],a.hasOwnProperty(Qe)&&$!=null&&!r.hasOwnProperty(Qe)&&Dt(e,n,Qe,null,r,$);for(Q in r)if($=r[Q],se=a[Q],r.hasOwnProperty(Q)&&$!==se&&($!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Dt(e,n,Q,$,r,se)}return;default:if(Gc(n)){for(var Ut in a)$=a[Ut],a.hasOwnProperty(Ut)&&$!==void 0&&!r.hasOwnProperty(Ut)&&wf(e,n,Ut,void 0,r,$);for(ue in r)$=r[ue],se=a[ue],!r.hasOwnProperty(ue)||$===se||$===void 0&&se===void 0||wf(e,n,ue,$,r,se);return}}for(var X in a)$=a[X],a.hasOwnProperty(X)&&$!=null&&!r.hasOwnProperty(X)&&Dt(e,n,X,null,r,$);for(pe in r)$=r[pe],se=a[pe],!r.hasOwnProperty(pe)||$===se||$==null&&se==null||Dt(e,n,pe,$,r,se)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function p0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],d=u.transferSize,v=u.initiatorType,b=u.duration;if(d&&b&&Mg(v)){for(v=0,b=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>b)break;var ue=I.transferSize,pe=I.initiatorType;ue&&Mg(pe)&&(I=I.responseEnd,v+=ue*(I<b?1:(b-Q)/(I-Q)))}if(--r,n+=8*(d+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nf=null,Df=null;function Go(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Uf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function m0(){var e=window.event;return e&&e.type==="popstate"?e===Lf?!1:(Lf=e,!0):(Lf=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(_0)}:Tg;function _0(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function Rg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),rr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Sl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sl(a);for(var d=a.firstChild;d;){var v=d.nextSibling,b=d.nodeName;d[te]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&Sl(e.ownerDocument.body);a=u}while(a);rr(n)}function Cg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Of(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Of(a),Y(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function x0(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[te])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function y0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ti(e.nextSibling),e===null))return null;return e}function wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function Pf(e){return e.data==="$?"||e.data==="$~"}function zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function S0(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var If=null;function Ng(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ti(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ug(e,n,a){switch(n=Go(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Sl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Y(e)}var ni=new Map,Lg=new Set;function Vo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ki=W.d;W.d={f:M0,r:E0,D:b0,C:T0,L:A0,m:R0,X:w0,S:C0,M:N0};function M0(){var e=ki.f(),n=Oo();return e||n}function E0(e){var n=Ne(e);n!==null&&n.tag===5&&n.type==="form"?Kp(n):ki.r(e)}var ir=typeof document>"u"?null:document;function Og(e,n,a){var r=ir;if(r&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),gn(n,"link",e),Ie(n),r.head.appendChild(n)))}}function b0(e){ki.D(e),Og("dns-prefetch",e,null)}function T0(e,n){ki.C(e,n),Og("preconnect",e,n)}function A0(e,n,a){ki.L(e,n,a);var r=ir;if(r&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var d=u;switch(n){case"style":d=ar(e);break;case"script":d=sr(e)}ni.has(d)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ni.set(d,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ml(d))||n==="script"&&r.querySelector(El(d))||(n=r.createElement("link"),gn(n,"link",e),Ie(n),r.head.appendChild(n)))}}function R0(e,n){ki.m(e,n);var a=ir;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(r)+'"][href="'+Sn(e)+'"]',d=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=sr(e)}if(!ni.has(d)&&(e=y({rel:"modulepreload",href:e},n),ni.set(d,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(El(d)))return}r=a.createElement("link"),gn(r,"link",e),Ie(r),a.head.appendChild(r)}}}function C0(e,n,a){ki.S(e,n,a);var r=ir;if(r&&e){var u=ze(r).hoistableStyles,d=ar(e);n=n||"default";var v=u.get(d);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(Ml(d)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ni.get(d))&&jf(e,a);var I=v=r.createElement("link");Ie(I),gn(I,"link",e),I._p=new Promise(function(Q,ue){I.onload=Q,I.onerror=ue}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ko(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(d,v)}}}function w0(e,n){ki.X(e,n);var a=ir;if(a&&e){var r=ze(a).hoistableScripts,u=sr(e),d=r.get(u);d||(d=a.querySelector(El(u)),d||(e=y({src:e,async:!0},n),(n=ni.get(u))&&Bf(e,n),d=a.createElement("script"),Ie(d),gn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function N0(e,n){ki.M(e,n);var a=ir;if(a&&e){var r=ze(a).hoistableScripts,u=sr(e),d=r.get(u);d||(d=a.querySelector(El(u)),d||(e=y({src:e,async:!0,type:"module"},n),(n=ni.get(u))&&Bf(e,n),d=a.createElement("script"),Ie(d),gn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function Pg(e,n,a,r){var u=(u=ye.current)?Vo(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=ze(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var d=ze(u).hoistableStyles,v=d.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=u.querySelector(Ml(e)))&&!d._p&&(v.instance=d,v.state.loading=5),ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(e,a),d||D0(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=ze(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+Sn(e)+'"'}function Ml(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function D0(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),gn(n,"link",a),Ie(n),e.head.appendChild(n))}function sr(e){return'[src="'+Sn(e)+'"]'}function El(e){return"script[async]"+e}function Ig(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(r)return n.instance=r,Ie(r),r;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ie(r),gn(r,"style",u),ko(r,a.precedence,e),n.instance=r;case"stylesheet":u=ar(a.href);var d=e.querySelector(Ml(u));if(d)return n.state.loading|=4,n.instance=d,Ie(d),d;r=zg(a),(u=ni.get(u))&&jf(r,u),d=(e.ownerDocument||e).createElement("link"),Ie(d);var v=d;return v._p=new Promise(function(b,I){v.onload=b,v.onerror=I}),gn(d,"link",r),n.state.loading|=4,ko(d,a.precedence,e),n.instance=d;case"script":return d=sr(a.src),(u=e.querySelector(El(d)))?(n.instance=u,Ie(u),u):(r=a,(u=ni.get(d))&&(r=y({},a),Bf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ie(u),gn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ko(r,a.precedence,e));return n.instance}function ko(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,d=u,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xo=null;function jg(e,n,a){if(Xo===null){var r=new Map,u=Xo=new Map;u.set(a,r)}else u=Xo,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[te]||d[Qt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=e+v;var b=r.get(v);b?b.push(d):r.set(v,[d])}}return r}function Bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function U0(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function L0(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ar(r.href),d=n.querySelector(Ml(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Wo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Ie(d);return}d=n.ownerDocument||n,r=zg(r),(u=ni.get(u))&&jf(r,u),d=d.createElement("link"),Ie(d);var v=d;v._p=new Promise(function(b,I){v.onload=b,v.onerror=I}),gn(d,"link",r),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function O0(e,n){return e.stylesheets&&e.count===0&&Yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Yo(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Ff===0&&(Ff=62500*p0());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yo(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Ff?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Wo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qo=null;function Yo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qo=new Map,n.forEach(P0,e),qo=null,Wo.call(e))}function P0(e,n){if(!(n.state.loading&4)){var a=qo.get(e);if(a)var r=a.get(null);else{a=new Map,qo.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),d=a.get(v)||r,d===r&&a.set(null,u),a.set(v,u),this.count++,r=Wo.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var bl={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function z0(e,n,a,r,u,d,v,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.hiddenUpdates=jn(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Hg(e,n,a,r,u,d,v,b,I,Q,ue,pe){return e=new z0(e,n,a,v,I,Q,ue,pe,b),n=1,d===!0&&(n|=24),d=Fn(3,null,null,n),e.current=d,d.stateNode=e,n=_u(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:r,isDehydrated:a,cache:n},Mu(d),e}function Gg(e){return e?(e=zs,e):zs}function Vg(e,n,a,r,u,d){u=Gg(u),r.context===null?r.context=u:r.pendingContext=u,r=fa(n),r.payload={element:a},d=d===void 0?null:d,d!==null&&(r.callback=d),a=da(e,r,n),a!==null&&(Ln(a,e,n),nl(a,e,n))}function kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hf(e,n){kg(e,n),(e=e.alternate)&&kg(e,n)}function Xg(e){if(e.tag===13||e.tag===31){var n=ka(e,67108864);n!==null&&Ln(n,e,67108864),Hf(e,67108864)}}function Wg(e){if(e.tag===13||e.tag===31){var n=Xn();n=Rs(n);var a=ka(e,n);a!==null&&Ln(a,e,n),Hf(e,n)}}var Zo=!0;function I0(e,n,a,r){var u=L.T;L.T=null;var d=W.p;try{W.p=2,Gf(e,n,a,r)}finally{W.p=d,L.T=u}}function j0(e,n,a,r){var u=L.T;L.T=null;var d=W.p;try{W.p=8,Gf(e,n,a,r)}finally{W.p=d,L.T=u}}function Gf(e,n,a,r){if(Zo){var u=Vf(r);if(u===null)Cf(e,n,r,Ko,a),Yg(e,r);else if(F0(u,e,n,a,r))r.stopPropagation();else if(Yg(e,r),n&4&&-1<B0.indexOf(e)){for(;u!==null;){var d=Ne(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=ke(d.pendingLanes);if(v!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var I=1<<31-Ze(v);b.entanglements[1]|=I,v&=~I}Si(d),(Et&6)===0&&(Uo=ve()+500,_l(0))}}break;case 31:case 13:b=ka(d,2),b!==null&&Ln(b,d,2),Oo(),Hf(d,2)}if(d=Vf(r),d===null&&Cf(e,n,r,Ko,a),d===u)break;u=d}u!==null&&r.stopPropagation()}else Cf(e,n,r,null,a)}}function Vf(e){return e=kc(e),kf(e)}var Ko=null;function kf(e){if(Ko=null,e=Te(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ko=e,null}function qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case We:return 2;case De:return 8;case Le:case it:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ea=null,ba=null,Ta=null,Tl=new Map,Al=new Map,Aa=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,n){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":Tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(n.pointerId)}}function Rl(e,n,a,r,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ne(n),n!==null&&Xg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function F0(e,n,a,r,u){switch(n){case"focusin":return Ea=Rl(Ea,e,n,a,r,u),!0;case"dragenter":return ba=Rl(ba,e,n,a,r,u),!0;case"mouseover":return Ta=Rl(Ta,e,n,a,r,u),!0;case"pointerover":var d=u.pointerId;return Tl.set(d,Rl(Tl.get(d)||null,e,n,a,r,u)),!0;case"gotpointercapture":return d=u.pointerId,Al.set(d,Rl(Al.get(d)||null,e,n,a,r,u)),!0}return!1}function Zg(e){var n=Te(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Fa(e.priority,function(){Wg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Fa(e.priority,function(){Wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Vc=r,a.target.dispatchEvent(r),Vc=null}else return n=Ne(a),n!==null&&Xg(n),e.blockedOn=a,!1;n.shift()}return!0}function Kg(e,n,a){Qo(e)&&a.delete(n)}function H0(){Xf=!1,Ea!==null&&Qo(Ea)&&(Ea=null),ba!==null&&Qo(ba)&&(ba=null),Ta!==null&&Qo(Ta)&&(Ta=null),Tl.forEach(Kg),Al.forEach(Kg)}function Jo(e,n){e.blockedOn===n&&(e.blockedOn=null,Xf||(Xf=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,H0)))}var $o=null;function Qg(e){$o!==e&&($o=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){$o===e&&($o=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(kf(r||a)===null)continue;break}var d=Ne(a);d!==null&&(e.splice(n,3),n-=3,Gu(d,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function rr(e){function n(I){return Jo(I,e)}Ea!==null&&Jo(Ea,e),ba!==null&&Jo(ba,e),Ta!==null&&Jo(Ta,e),Tl.forEach(n),Al.forEach(n);for(var a=0;a<Aa.length;a++){var r=Aa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],d=a[r+1],v=u[_n]||null;if(typeof d=="function")v||Qg(a);else if(v){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[_n]||null)b=v.formAction;else if(kf(u)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Qg(a)}}}function Jg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Wf(e){this._internalRoot=e}ec.prototype.render=Wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Xn();Vg(a,r,e,n,null,null)},ec.prototype.unmount=Wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vg(e.current,2,null,e,null,null),Oo(),n[ia]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.7")throw Error(s(527,$g,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var G0={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Ke=tc.inject(G0),we=tc}catch{}}return wl.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",u=rm,d=lm,v=om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Hg(e,1,!1,null,null,a,r,null,u,d,v,Jg),e[ia]=n.current,Rf(e),new Wf(n)},wl.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,u="",d=rm,v=lm,b=om,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Hg(e,1,!0,n,a??null,r,u,I,d,v,b,Jg),n.context=Gg(null),a=n.current,r=Xn(),r=Rs(r),u=fa(r),u.callback=null,da(a,u,r),a=r,n.current.lanes=a,vn(n,a),Si(n),e[ia]=n.current,Rf(e),new ec(n)},wl.version="19.2.7",wl}var cv;function ey(){if(cv)return Zf.exports;cv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Zf.exports=$0(),Zf.exports}var ty=ey();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="167",ny=0,uv=1,iy=2,r_=1,ay=2,Ki=3,Ia=0,zn=1,bi=2,Pa=0,Tr=1,fv=2,dv=3,hv=4,sy=5,vs=100,ry=101,ly=102,oy=103,cy=104,uy=200,fy=201,dy=202,hy=203,Rd=204,Cd=205,py=206,my=207,gy=208,vy=209,_y=210,xy=211,yy=212,Sy=213,My=214,Ey=0,by=1,Ty=2,Dc=3,Ay=4,Ry=5,Cy=6,wy=7,l_=0,Ny=1,Dy=2,za=0,Uy=1,Ly=2,Oy=3,Py=4,zy=5,Iy=6,jy=7,o_=300,Cr=301,wr=302,wd=303,Nd=304,Ic=306,Dd=1e3,xs=1001,Ud=1002,ai=1003,By=1004,nc=1005,pi=1006,$f=1007,ys=1008,$i=1009,c_=1010,u_=1011,jl=1012,ch=1013,Ms=1014,Qi=1015,Bl=1016,uh=1017,fh=1018,Nr=1020,f_=35902,d_=1021,h_=1022,mi=1023,p_=1024,m_=1025,Ar=1026,Dr=1027,g_=1028,dh=1029,v_=1030,hh=1031,ph=1033,Tc=33776,Ac=33777,Rc=33778,Cc=33779,Ld=35840,Od=35841,Pd=35842,zd=35843,Id=36196,jd=37492,Bd=37496,Fd=37808,Hd=37809,Gd=37810,Vd=37811,kd=37812,Xd=37813,Wd=37814,qd=37815,Yd=37816,Zd=37817,Kd=37818,Qd=37819,Jd=37820,$d=37821,wc=36492,eh=36494,th=36495,__=36283,nh=36284,ih=36285,ah=36286,Fy=3200,Hy=3201,Gy=0,Vy=1,Oa="",Mi="srgb",ja="srgb-linear",mh="display-p3",jc="display-p3-linear",Uc="linear",Bt="srgb",Lc="rec709",Oc="p3",lr=7680,pv=519,ky=512,Xy=513,Wy=514,x_=515,qy=516,Yy=517,Zy=518,Ky=519,mv=35044,gv="300 es",Ji=2e3,Pc=2001;class Lr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const c=this._listeners[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let f=0,h=c.length;f<h;f++)c[f].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,sh=180/Math.PI;function Fl(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[l&255]+En[l>>8&255]+En[l>>16&255]+En[l>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function Pn(l,t,i){return Math.max(t,Math.min(i,l))}function Qy(l,t){return(l%t+t)%t}function td(l,t,i){return(1-i)*l+i*t}function Nl(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function On(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,i=0){Tt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-t.x,h=this.y-t.y;return this.x=f*s-h*c+t.x,this.y=f*c+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(t,i,s,c,f,h,p,g,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,h,p,g,m)}set(t,i,s,c,f,h,p,g,m){const _=this.elements;return _[0]=t,_[1]=c,_[2]=p,_[3]=i,_[4]=f,_[5]=g,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,h=s[0],p=s[3],g=s[6],m=s[1],_=s[4],y=s[7],S=s[2],E=s[5],A=s[8],w=c[0],M=c[3],x=c[6],j=c[1],N=c[4],z=c[7],ie=c[2],H=c[5],P=c[8];return f[0]=h*w+p*j+g*ie,f[3]=h*M+p*N+g*H,f[6]=h*x+p*z+g*P,f[1]=m*w+_*j+y*ie,f[4]=m*M+_*N+y*H,f[7]=m*x+_*z+y*P,f[2]=S*w+E*j+A*ie,f[5]=S*M+E*N+A*H,f[8]=S*x+E*z+A*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],h=t[4],p=t[5],g=t[6],m=t[7],_=t[8];return i*h*_-i*p*m-s*f*_+s*p*g+c*f*m-c*h*g}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],h=t[4],p=t[5],g=t[6],m=t[7],_=t[8],y=_*h-p*m,S=p*g-_*f,E=m*f-h*g,A=i*y+s*S+c*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(c*m-_*s)*w,t[2]=(p*s-c*h)*w,t[3]=S*w,t[4]=(_*i-c*g)*w,t[5]=(c*f-p*i)*w,t[6]=E*w,t[7]=(s*g-m*i)*w,t[8]=(h*i-s*f)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,f,h,p){const g=Math.cos(f),m=Math.sin(f);return this.set(s*g,s*m,-s*(g*h+m*p)+h+t,-c*m,c*g,-c*(-m*h+g*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(nd.makeScale(t,i)),this}rotate(t){return this.premultiply(nd.makeRotation(-t)),this}translate(t,i){return this.premultiply(nd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new lt;function y_(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function zc(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Jy(){const l=zc("canvas");return l.style.display="block",l}const vv={};function Il(l){l in vv||(vv[l]=!0,console.warn(l))}function $y(l,t,i){return new Promise(function(s,c){function f(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:c();break;case l.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const _v=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xv=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dl={[ja]:{transfer:Uc,primaries:Lc,luminanceCoefficients:[.2126,.7152,.0722],toReference:l=>l,fromReference:l=>l},[Mi]:{transfer:Bt,primaries:Lc,luminanceCoefficients:[.2126,.7152,.0722],toReference:l=>l.convertSRGBToLinear(),fromReference:l=>l.convertLinearToSRGB()},[jc]:{transfer:Uc,primaries:Oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:l=>l.applyMatrix3(xv),fromReference:l=>l.applyMatrix3(_v)},[mh]:{transfer:Bt,primaries:Oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:l=>l.convertSRGBToLinear().applyMatrix3(xv),fromReference:l=>l.applyMatrix3(_v).convertLinearToSRGB()}},eS=new Set([ja,jc]),bt={enabled:!0,_workingColorSpace:ja,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(l){if(!eS.has(l))throw new Error(`Unsupported working color space, "${l}".`);this._workingColorSpace=l},convert:function(l,t,i){if(this.enabled===!1||t===i||!t||!i)return l;const s=Dl[t].toReference,c=Dl[i].fromReference;return c(s(l))},fromWorkingColorSpace:function(l,t){return this.convert(l,this._workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this._workingColorSpace)},getPrimaries:function(l){return Dl[l].primaries},getTransfer:function(l){return l===Oa?Uc:Dl[l].transfer},getLuminanceCoefficients:function(l,t=this._workingColorSpace){return l.fromArray(Dl[t].luminanceCoefficients)}};function Rr(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function id(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let or;class tS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{or===void 0&&(or=zc("canvas")),or.width=t.width,or.height=t.height;const s=or.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=or}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),f=c.data;for(let h=0;h<f.length;h++)f[h]=Rr(f[h]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Rr(i[s]/255)*255):i[s]=Rr(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nS=0;class S_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Fl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let h=0,p=c.length;h<p;h++)c[h].isDataTexture?f.push(ad(c[h].image)):f.push(ad(c[h]))}else f=ad(c);s.url=f}return i||(t.images[this.uuid]=s),s}}function ad(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?tS.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iS=0;class In extends Lr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=xs,c=xs,f=pi,h=ys,p=mi,g=$i,m=In.DEFAULT_ANISOTROPY,_=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Fl(),this.name="",this.source=new S_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=h,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==o_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dd:t.x=t.x-Math.floor(t.x);break;case xs:t.x=t.x<0?0:1;break;case Ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dd:t.y=t.y-Math.floor(t.y);break;case xs:t.y=t.y<0?0:1;break;case Ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=o_;In.DEFAULT_ANISOTROPY=1;class dn{constructor(t=0,i=0,s=0,c=1){dn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*c+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*c+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*c+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*c+h[15]*f,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,f;const g=t.elements,m=g[0],_=g[4],y=g[8],S=g[1],E=g[5],A=g[9],w=g[2],M=g[6],x=g[10];if(Math.abs(_-S)<.01&&Math.abs(y-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(y+w)<.1&&Math.abs(A+M)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,z=(E+1)/2,ie=(x+1)/2,H=(_+S)/4,P=(y+w)/4,J=(A+M)/4;return N>z&&N>ie?N<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(N),c=H/s,f=P/s):z>ie?z<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(z),s=H/c,f=J/c):ie<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(ie),s=P/f,c=J/f),this.set(s,c,f,i),this}let j=Math.sqrt((M-A)*(M-A)+(y-w)*(y-w)+(S-_)*(S-_));return Math.abs(j)<.001&&(j=1),this.x=(M-A)/j,this.y=(y-w)/j,this.z=(S-_)/j,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends Lr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new dn(0,0,t,i),this.scissorTest=!1,this.viewport=new dn(0,0,t,i);const c={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new In(c,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let p=0;p<h;p++)this.textures[p]=f.clone(),this.textures[p].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,c=t.textures.length;s<c;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new S_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends aS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class M_ extends In{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=ai,this.minFilter=ai,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sS extends In{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=ai,this.minFilter=ai,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hl{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,f,h,p){let g=s[c+0],m=s[c+1],_=s[c+2],y=s[c+3];const S=f[h+0],E=f[h+1],A=f[h+2],w=f[h+3];if(p===0){t[i+0]=g,t[i+1]=m,t[i+2]=_,t[i+3]=y;return}if(p===1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=w;return}if(y!==w||g!==S||m!==E||_!==A){let M=1-p;const x=g*S+m*E+_*A+y*w,j=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const ie=Math.sqrt(N),H=Math.atan2(ie,x*j);M=Math.sin(M*H)/ie,p=Math.sin(p*H)/ie}const z=p*j;if(g=g*M+S*z,m=m*M+E*z,_=_*M+A*z,y=y*M+w*z,M===1-p){const ie=1/Math.sqrt(g*g+m*m+_*_+y*y);g*=ie,m*=ie,_*=ie,y*=ie}}t[i]=g,t[i+1]=m,t[i+2]=_,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,c,f,h){const p=s[c],g=s[c+1],m=s[c+2],_=s[c+3],y=f[h],S=f[h+1],E=f[h+2],A=f[h+3];return t[i]=p*A+_*y+g*E-m*S,t[i+1]=g*A+_*S+m*y-p*E,t[i+2]=m*A+_*E+p*S-g*y,t[i+3]=_*A-p*y-g*S-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,f=t._z,h=t._order,p=Math.cos,g=Math.sin,m=p(s/2),_=p(c/2),y=p(f/2),S=g(s/2),E=g(c/2),A=g(f/2);switch(h){case"XYZ":this._x=S*_*y+m*E*A,this._y=m*E*y-S*_*A,this._z=m*_*A+S*E*y,this._w=m*_*y-S*E*A;break;case"YXZ":this._x=S*_*y+m*E*A,this._y=m*E*y-S*_*A,this._z=m*_*A-S*E*y,this._w=m*_*y+S*E*A;break;case"ZXY":this._x=S*_*y-m*E*A,this._y=m*E*y+S*_*A,this._z=m*_*A+S*E*y,this._w=m*_*y-S*E*A;break;case"ZYX":this._x=S*_*y-m*E*A,this._y=m*E*y+S*_*A,this._z=m*_*A-S*E*y,this._w=m*_*y+S*E*A;break;case"YZX":this._x=S*_*y+m*E*A,this._y=m*E*y+S*_*A,this._z=m*_*A-S*E*y,this._w=m*_*y-S*E*A;break;case"XZY":this._x=S*_*y-m*E*A,this._y=m*E*y-S*_*A,this._z=m*_*A+S*E*y,this._w=m*_*y+S*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],f=i[8],h=i[1],p=i[5],g=i[9],m=i[2],_=i[6],y=i[10],S=s+p+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-g)*E,this._y=(f-m)*E,this._z=(h-c)*E}else if(s>p&&s>y){const E=2*Math.sqrt(1+s-p-y);this._w=(_-g)/E,this._x=.25*E,this._y=(c+h)/E,this._z=(f+m)/E}else if(p>y){const E=2*Math.sqrt(1+p-s-y);this._w=(f-m)/E,this._x=(c+h)/E,this._y=.25*E,this._z=(g+_)/E}else{const E=2*Math.sqrt(1+y-s-p);this._w=(h-c)/E,this._x=(f+m)/E,this._y=(g+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,f=t._z,h=t._w,p=i._x,g=i._y,m=i._z,_=i._w;return this._x=s*_+h*p+c*m-f*g,this._y=c*_+h*g+f*p-s*m,this._z=f*_+h*m+s*g-c*p,this._w=h*_-s*p-c*g-f*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,c=this._y,f=this._z,h=this._w;let p=h*t._w+s*t._x+c*t._y+f*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=h,this._x=s,this._y=c,this._z=f,this;const g=1-p*p;if(g<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*c+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const m=Math.sqrt(g),_=Math.atan2(m,p),y=Math.sin((1-i)*_)/m,S=Math.sin(i*_)/m;return this._w=h*y+this._w*S,this._x=s*y+this._x*S,this._y=c*y+this._y*S,this._z=f*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(yv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(yv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=t.elements,h=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,f=t.x,h=t.y,p=t.z,g=t.w,m=2*(h*c-p*s),_=2*(p*i-f*c),y=2*(f*s-h*i);return this.x=i+g*m+h*y-p*_,this.y=s+g*_+p*m-f*y,this.z=c+g*y+f*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,f=t.z,h=i.x,p=i.y,g=i.z;return this.x=c*g-f*p,this.y=f*h-s*g,this.z=s*p-c*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new re,yv=new Hl;class Gl{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=f.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,ui):ui.fromBufferAttribute(f,h),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ic.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(t.matrixWorld),this.union(ic)}const c=t.children;for(let f=0,h=c.length;f<h;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ul),ac.subVectors(this.max,Ul),cr.subVectors(t.a,Ul),ur.subVectors(t.b,Ul),fr.subVectors(t.c,Ul),Ca.subVectors(ur,cr),wa.subVectors(fr,ur),is.subVectors(cr,fr);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-is.z,is.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,is.z,0,-is.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-is.y,is.x,0];return!rd(i,cr,ur,fr,ac)||(i=[1,0,0,0,1,0,0,0,1],!rd(i,cr,ur,fr,ac))?!1:(sc.crossVectors(Ca,wa),i=[sc.x,sc.y,sc.z],rd(i,cr,ur,fr,ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xi=[new re,new re,new re,new re,new re,new re,new re,new re],ui=new re,ic=new Gl,cr=new re,ur=new re,fr=new re,Ca=new re,wa=new re,is=new re,Ul=new re,ac=new re,sc=new re,as=new re;function rd(l,t,i,s,c){for(let f=0,h=l.length-3;f<=h;f+=3){as.fromArray(l,f);const p=c.x*Math.abs(as.x)+c.y*Math.abs(as.y)+c.z*Math.abs(as.z),g=t.dot(as),m=i.dot(as),_=s.dot(as);if(Math.max(-Math.max(g,m,_),Math.min(g,m,_))>p)return!1}return!0}const rS=new Gl,Ll=new re,ld=new re;class gh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):rS.setFromPoints(t).getCenter(s);let c=0;for(let f=0,h=t.length;f<h;f++)c=Math.max(c,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ll.subVectors(t,this.center);const i=Ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(Ll,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ll.copy(t.center).add(ld)),this.expandByPoint(Ll.copy(t.center).sub(ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new re,od=new re,rc=new re,Na=new re,cd=new re,lc=new re,ud=new re;class lS{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Wi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,i),Wi.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){od.copy(t).add(i).multiplyScalar(.5),rc.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(od);const f=t.distanceTo(i)*.5,h=-this.direction.dot(rc),p=Na.dot(this.direction),g=-Na.dot(rc),m=Na.lengthSq(),_=Math.abs(1-h*h);let y,S,E,A;if(_>0)if(y=h*g-p,S=h*p-g,A=f*_,y>=0)if(S>=-A)if(S<=A){const w=1/_;y*=w,S*=w,E=y*(y+h*S+2*p)+S*(h*y+S+2*g)+m}else S=f,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;else S=-f,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;else S<=-A?(y=Math.max(0,-(-h*f+p)),S=y>0?-f:Math.min(Math.max(-f,-g),f),E=-y*y+S*(S+2*g)+m):S<=A?(y=0,S=Math.min(Math.max(-f,-g),f),E=S*(S+2*g)+m):(y=Math.max(0,-(h*f+p)),S=y>0?f:Math.min(Math.max(-f,-g),f),E=-y*y+S*(S+2*g)+m);else S=h>0?-f:f,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),c&&c.copy(od).addScaledVector(rc,S),E}intersectSphere(t,i){Wi.subVectors(t.center,this.origin);const s=Wi.dot(this.direction),c=Wi.dot(Wi)-s*s,f=t.radius*t.radius;if(c>f)return null;const h=Math.sqrt(f-c),p=s-h,g=s+h;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,f,h,p,g;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(s=(t.min.x-S.x)*m,c=(t.max.x-S.x)*m):(s=(t.max.x-S.x)*m,c=(t.min.x-S.x)*m),_>=0?(f=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(f=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||f>c||((f>s||isNaN(s))&&(s=f),(h<c||isNaN(c))&&(c=h),y>=0?(p=(t.min.z-S.z)*y,g=(t.max.z-S.z)*y):(p=(t.max.z-S.z)*y,g=(t.min.z-S.z)*y),s>g||p>c)||((p>s||s!==s)&&(s=p),(g<c||c!==c)&&(c=g),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,i,s,c,f){cd.subVectors(i,t),lc.subVectors(s,t),ud.crossVectors(cd,lc);let h=this.direction.dot(ud),p;if(h>0){if(c)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Na.subVectors(this.origin,t);const g=p*this.direction.dot(lc.crossVectors(Na,lc));if(g<0)return null;const m=p*this.direction.dot(cd.cross(Na));if(m<0||g+m>h)return null;const _=-p*Na.dot(ud);return _<0?null:this.at(_/h,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,s,c,f,h,p,g,m,_,y,S,E,A,w,M){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,h,p,g,m,_,y,S,E,A,w,M)}set(t,i,s,c,f,h,p,g,m,_,y,S,E,A,w,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=c,x[1]=f,x[5]=h,x[9]=p,x[13]=g,x[2]=m,x[6]=_,x[10]=y,x[14]=S,x[3]=E,x[7]=A,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,c=1/dr.setFromMatrixColumn(t,0).length(),f=1/dr.setFromMatrixColumn(t,1).length(),h=1/dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,f=t.z,h=Math.cos(s),p=Math.sin(s),g=Math.cos(c),m=Math.sin(c),_=Math.cos(f),y=Math.sin(f);if(t.order==="XYZ"){const S=h*_,E=h*y,A=p*_,w=p*y;i[0]=g*_,i[4]=-g*y,i[8]=m,i[1]=E+A*m,i[5]=S-w*m,i[9]=-p*g,i[2]=w-S*m,i[6]=A+E*m,i[10]=h*g}else if(t.order==="YXZ"){const S=g*_,E=g*y,A=m*_,w=m*y;i[0]=S+w*p,i[4]=A*p-E,i[8]=h*m,i[1]=h*y,i[5]=h*_,i[9]=-p,i[2]=E*p-A,i[6]=w+S*p,i[10]=h*g}else if(t.order==="ZXY"){const S=g*_,E=g*y,A=m*_,w=m*y;i[0]=S-w*p,i[4]=-h*y,i[8]=A+E*p,i[1]=E+A*p,i[5]=h*_,i[9]=w-S*p,i[2]=-h*m,i[6]=p,i[10]=h*g}else if(t.order==="ZYX"){const S=h*_,E=h*y,A=p*_,w=p*y;i[0]=g*_,i[4]=A*m-E,i[8]=S*m+w,i[1]=g*y,i[5]=w*m+S,i[9]=E*m-A,i[2]=-m,i[6]=p*g,i[10]=h*g}else if(t.order==="YZX"){const S=h*g,E=h*m,A=p*g,w=p*m;i[0]=g*_,i[4]=w-S*y,i[8]=A*y+E,i[1]=y,i[5]=h*_,i[9]=-p*_,i[2]=-m*_,i[6]=E*y+A,i[10]=S-w*y}else if(t.order==="XZY"){const S=h*g,E=h*m,A=p*g,w=p*m;i[0]=g*_,i[4]=-y,i[8]=m*_,i[1]=S*y+w,i[5]=h*_,i[9]=E*y-A,i[2]=A*y-E,i[6]=p*_,i[10]=w*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oS,t,cS)}lookAt(t,i,s){const c=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Da.crossVectors(s,Wn),Da.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Da.crossVectors(s,Wn)),Da.normalize(),oc.crossVectors(Wn,Da),c[0]=Da.x,c[4]=oc.x,c[8]=Wn.x,c[1]=Da.y,c[5]=oc.y,c[9]=Wn.y,c[2]=Da.z,c[6]=oc.z,c[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,h=s[0],p=s[4],g=s[8],m=s[12],_=s[1],y=s[5],S=s[9],E=s[13],A=s[2],w=s[6],M=s[10],x=s[14],j=s[3],N=s[7],z=s[11],ie=s[15],H=c[0],P=c[4],J=c[8],D=c[12],C=c[1],G=c[5],ce=c[9],le=c[13],me=c[2],de=c[6],L=c[10],W=c[14],Z=c[3],Me=c[7],be=c[11],U=c[15];return f[0]=h*H+p*C+g*me+m*Z,f[4]=h*P+p*G+g*de+m*Me,f[8]=h*J+p*ce+g*L+m*be,f[12]=h*D+p*le+g*W+m*U,f[1]=_*H+y*C+S*me+E*Z,f[5]=_*P+y*G+S*de+E*Me,f[9]=_*J+y*ce+S*L+E*be,f[13]=_*D+y*le+S*W+E*U,f[2]=A*H+w*C+M*me+x*Z,f[6]=A*P+w*G+M*de+x*Me,f[10]=A*J+w*ce+M*L+x*be,f[14]=A*D+w*le+M*W+x*U,f[3]=j*H+N*C+z*me+ie*Z,f[7]=j*P+N*G+z*de+ie*Me,f[11]=j*J+N*ce+z*L+ie*be,f[15]=j*D+N*le+z*W+ie*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[12],h=t[1],p=t[5],g=t[9],m=t[13],_=t[2],y=t[6],S=t[10],E=t[14],A=t[3],w=t[7],M=t[11],x=t[15];return A*(+f*g*y-c*m*y-f*p*S+s*m*S+c*p*E-s*g*E)+w*(+i*g*E-i*m*S+f*h*S-c*h*E+c*m*_-f*g*_)+M*(+i*m*y-i*p*E-f*h*y+s*h*E+f*p*_-s*m*_)+x*(-c*p*_-i*g*y+i*p*S+c*h*y-s*h*S+s*g*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],h=t[4],p=t[5],g=t[6],m=t[7],_=t[8],y=t[9],S=t[10],E=t[11],A=t[12],w=t[13],M=t[14],x=t[15],j=y*M*m-w*S*m+w*g*E-p*M*E-y*g*x+p*S*x,N=A*S*m-_*M*m-A*g*E+h*M*E+_*g*x-h*S*x,z=_*w*m-A*y*m+A*p*E-h*w*E-_*p*x+h*y*x,ie=A*y*g-_*w*g-A*p*S+h*w*S+_*p*M-h*y*M,H=i*j+s*N+c*z+f*ie;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return t[0]=j*P,t[1]=(w*S*f-y*M*f-w*c*E+s*M*E+y*c*x-s*S*x)*P,t[2]=(p*M*f-w*g*f+w*c*m-s*M*m-p*c*x+s*g*x)*P,t[3]=(y*g*f-p*S*f-y*c*m+s*S*m+p*c*E-s*g*E)*P,t[4]=N*P,t[5]=(_*M*f-A*S*f+A*c*E-i*M*E-_*c*x+i*S*x)*P,t[6]=(A*g*f-h*M*f-A*c*m+i*M*m+h*c*x-i*g*x)*P,t[7]=(h*S*f-_*g*f+_*c*m-i*S*m-h*c*E+i*g*E)*P,t[8]=z*P,t[9]=(A*y*f-_*w*f-A*s*E+i*w*E+_*s*x-i*y*x)*P,t[10]=(h*w*f-A*p*f+A*s*m-i*w*m-h*s*x+i*p*x)*P,t[11]=(_*p*f-h*y*f-_*s*m+i*y*m+h*s*E-i*p*E)*P,t[12]=ie*P,t[13]=(_*w*c-A*y*c+A*s*S-i*w*S-_*s*M+i*y*M)*P,t[14]=(A*p*c-h*w*c-A*s*g+i*w*g+h*s*M-i*p*M)*P,t[15]=(h*y*c-_*p*c+_*s*g-i*y*g-h*s*S+i*p*S)*P,this}scale(t){const i=this.elements,s=t.x,c=t.y,f=t.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,h=t.x,p=t.y,g=t.z,m=f*h,_=f*p;return this.set(m*h+s,m*p-c*g,m*g+c*p,0,m*p+c*g,_*p+s,_*g-c*h,0,m*g-c*p,_*g+c*h,f*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,f,h){return this.set(1,s,f,0,t,1,h,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,f=i._x,h=i._y,p=i._z,g=i._w,m=f+f,_=h+h,y=p+p,S=f*m,E=f*_,A=f*y,w=h*_,M=h*y,x=p*y,j=g*m,N=g*_,z=g*y,ie=s.x,H=s.y,P=s.z;return c[0]=(1-(w+x))*ie,c[1]=(E+z)*ie,c[2]=(A-N)*ie,c[3]=0,c[4]=(E-z)*H,c[5]=(1-(S+x))*H,c[6]=(M+j)*H,c[7]=0,c[8]=(A+N)*P,c[9]=(M-j)*P,c[10]=(1-(S+w))*P,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;let f=dr.set(c[0],c[1],c[2]).length();const h=dr.set(c[4],c[5],c[6]).length(),p=dr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),t.x=c[12],t.y=c[13],t.z=c[14],fi.copy(this);const m=1/f,_=1/h,y=1/p;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=_,fi.elements[5]*=_,fi.elements[6]*=_,fi.elements[8]*=y,fi.elements[9]*=y,fi.elements[10]*=y,i.setFromRotationMatrix(fi),s.x=f,s.y=h,s.z=p,this}makePerspective(t,i,s,c,f,h,p=Ji){const g=this.elements,m=2*f/(i-t),_=2*f/(s-c),y=(i+t)/(i-t),S=(s+c)/(s-c);let E,A;if(p===Ji)E=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(p===Pc)E=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return g[0]=m,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=_,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=E,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,s,c,f,h,p=Ji){const g=this.elements,m=1/(i-t),_=1/(s-c),y=1/(h-f),S=(i+t)*m,E=(s+c)*_;let A,w;if(p===Ji)A=(h+f)*y,w=-2*y;else if(p===Pc)A=f*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return g[0]=2*m,g[4]=0,g[8]=0,g[12]=-S,g[1]=0,g[5]=2*_,g[9]=0,g[13]=-E,g[2]=0,g[6]=0,g[10]=w,g[14]=-A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const dr=new re,fi=new ln,oS=new re(0,0,0),cS=new re(1,1,1),Da=new re,oc=new re,Wn=new re,Sv=new ln,Mv=new Hl;class ea{constructor(t=0,i=0,s=0,c=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,f=c[0],h=c[4],p=c[8],g=c[1],m=c[5],_=c[9],y=c[2],S=c[6],E=c[10];switch(i){case"XYZ":this._y=Math.asin(Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-y,f),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Pn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,f)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(p,f)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Mv.setFromEuler(this),this.setFromQuaternion(Mv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uS=0;const Ev=new re,hr=new Hl,qi=new ln,cc=new re,Ol=new re,fS=new re,dS=new Hl,bv=new re(1,0,0),Tv=new re(0,1,0),Av=new re(0,0,1),Rv={type:"added"},hS={type:"removed"},pr={type:"childadded",child:null},fd={type:"childremoved",child:null};class Yn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new re,i=new ea,s=new Hl,c=new re(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new ln},normalMatrix:{value:new lt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(bv,t)}rotateY(t){return this.rotateOnAxis(Tv,t)}rotateZ(t){return this.rotateOnAxis(Av,t)}translateOnAxis(t,i){return Ev.copy(t).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bv,t)}translateY(t){return this.translateOnAxis(Tv,t)}translateZ(t){return this.translateOnAxis(Av,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?cc.copy(t):cc.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ol,cc,this.up):qi.lookAt(cc,Ol,this.up),this.quaternion.setFromRotationMatrix(qi),c&&(qi.extractRotation(c.matrixWorld),hr.setFromRotationMatrix(qi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rv),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(hS),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rv),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,t,fS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,dS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,_=g.length;m<_;m++){const y=g[m];f(t.shapes,y)}else f(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(f(t.materials,this.material[g]));c.material=p}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let p=0;p<this.children.length;p++)c.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];c.animations.push(f(t.animations,g))}}if(i){const p=h(t.geometries),g=h(t.materials),m=h(t.textures),_=h(t.images),y=h(t.shapes),S=h(t.skeletons),E=h(t.animations),A=h(t.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=c,s;function h(p){const g=[];for(const m in p){const _=p[m];delete _.metadata,g.push(_)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}}Yn.DEFAULT_UP=new re(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new re,Yi=new re,dd=new re,Zi=new re,mr=new re,gr=new re,Cv=new re,hd=new re,pd=new re,md=new re;class Ti{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),di.subVectors(t,i),c.cross(di);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,s,c,f){di.subVectors(c,i),Yi.subVectors(s,i),dd.subVectors(t,i);const h=di.dot(di),p=di.dot(Yi),g=di.dot(dd),m=Yi.dot(Yi),_=Yi.dot(dd),y=h*m-p*p;if(y===0)return f.set(0,0,0),null;const S=1/y,E=(m*g-p*_)*S,A=(h*_-p*g)*S;return f.set(1-E-A,A,E)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,i,s,c,f,h,p,g){return this.getBarycoord(t,i,s,c,Zi)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Zi.x),g.addScaledVector(h,Zi.y),g.addScaledVector(p,Zi.z),g)}static isFrontFacing(t,i,s,c){return di.subVectors(s,i),Yi.subVectors(t,i),di.cross(Yi).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),di.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,f){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,c,f)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,f=this.c;let h,p;mr.subVectors(c,s),gr.subVectors(f,s),hd.subVectors(t,s);const g=mr.dot(hd),m=gr.dot(hd);if(g<=0&&m<=0)return i.copy(s);pd.subVectors(t,c);const _=mr.dot(pd),y=gr.dot(pd);if(_>=0&&y<=_)return i.copy(c);const S=g*y-_*m;if(S<=0&&g>=0&&_<=0)return h=g/(g-_),i.copy(s).addScaledVector(mr,h);md.subVectors(t,f);const E=mr.dot(md),A=gr.dot(md);if(A>=0&&E<=A)return i.copy(f);const w=E*m-g*A;if(w<=0&&m>=0&&A<=0)return p=m/(m-A),i.copy(s).addScaledVector(gr,p);const M=_*A-E*y;if(M<=0&&y-_>=0&&E-A>=0)return Cv.subVectors(f,c),p=(y-_)/(y-_+(E-A)),i.copy(c).addScaledVector(Cv,p);const x=1/(M+w+S);return h=w*x,p=S*x,i.copy(s).addScaledVector(mr,h).addScaledVector(gr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ua={h:0,s:0,l:0},uc={h:0,s:0,l:0};function gd(l,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(t-l)*6*i:i<1/2?t:i<2/3?l+(t-l)*6*(2/3-i):l}class wt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,c=bt.workingColorSpace){return this.r=t,this.g=i,this.b=s,bt.toWorkingColorSpace(this,c),this}setHSL(t,i,s,c=bt.workingColorSpace){if(t=Qy(t,1),i=Pn(i,0,1),s=Pn(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=gd(h,f,t+1/3),this.g=gd(h,f,t),this.b=gd(h,f,t-1/3)}return bt.toWorkingColorSpace(this,c),this}setStyle(t,i=Mi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const h=c[1],p=c[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=b_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}copyLinearToSRGB(t){return this.r=id(t.r),this.g=id(t.g),this.b=id(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return bt.fromWorkingColorSpace(bn.copy(this),t),Math.round(Pn(bn.r*255,0,255))*65536+Math.round(Pn(bn.g*255,0,255))*256+Math.round(Pn(bn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,c=bn.g,f=bn.b,h=Math.max(s,c,f),p=Math.min(s,c,f);let g,m;const _=(p+h)/2;if(p===h)g=0,m=0;else{const y=h-p;switch(m=_<=.5?y/(h+p):y/(2-h-p),h){case s:g=(c-f)/y+(c<f?6:0);break;case c:g=(f-s)/y+2;break;case f:g=(s-c)/y+4;break}g/=6}return t.h=g,t.s=m,t.l=_,t}getRGB(t,i=bt.workingColorSpace){return bt.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Mi){bt.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,c=bn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(Ua),this.setHSL(Ua.h+t,Ua.s+i,Ua.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ua),t.getHSL(uc);const s=td(Ua.h,uc.h,i),c=td(Ua.s,uc.s,i),f=td(Ua.l,uc.l,i);return this.setHSL(s,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new wt;wt.NAMES=b_;let pS=0;class Vl extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=Tr,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(s.blending=this.blending),this.side!==Ia&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rd&&(s.blendSrc=this.blendSrc),this.blendDst!==Cd&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}if(i){const f=c(t.textures),h=c(t.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class T_ extends Vl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=l_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new re,fc=new Tt;class gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=mv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Il("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(t),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Nl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=On(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Nl(i,this.array)),i}setX(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Nl(i,this.array)),i}setY(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Nl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Nl(i,this.array)),i}setW(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),c=On(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,f){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),c=On(c,this.array),f=On(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mv&&(t.usage=this.usage),t}}class A_ extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class R_ extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ss extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let mS=0;const ii=new ln,vd=new Yn,vr=new re,qn=new Gl,Pl=new Gl,fn=new re;class Ba extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(y_(t)?R_:A_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new lt().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,i,s){return ii.makeTranslation(t,i,s),this.applyMatrix4(ii),this}scale(t,i,s){return ii.makeScale(t,i,s),this.applyMatrix4(ii),this}lookAt(t){return vd.lookAt(t),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const i=[];for(let s=0,c=t.length;s<c;s++){const f=t[s];i.push(f.x,f.y,f.z||0)}return this.setAttribute("position",new Ss(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];qn.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),i)for(let f=0,h=i.length;f<h;f++){const p=i[f];Pl.setFromBufferAttribute(p),this.morphTargetsRelative?(fn.addVectors(qn.min,Pl.min),qn.expandByPoint(fn),fn.addVectors(qn.max,Pl.max),qn.expandByPoint(fn)):(qn.expandByPoint(Pl.min),qn.expandByPoint(Pl.max))}qn.getCenter(s);let c=0;for(let f=0,h=t.count;f<h;f++)fn.fromBufferAttribute(t,f),c=Math.max(c,s.distanceToSquared(fn));if(i)for(let f=0,h=i.length;f<h;f++){const p=i[f],g=this.morphTargetsRelative;for(let m=0,_=p.count;m<_;m++)fn.fromBufferAttribute(p,m),g&&(vr.fromBufferAttribute(t,m),fn.add(vr)),c=Math.max(c,s.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],g=[];for(let J=0;J<s.count;J++)p[J]=new re,g[J]=new re;const m=new re,_=new re,y=new re,S=new Tt,E=new Tt,A=new Tt,w=new re,M=new re;function x(J,D,C){m.fromBufferAttribute(s,J),_.fromBufferAttribute(s,D),y.fromBufferAttribute(s,C),S.fromBufferAttribute(f,J),E.fromBufferAttribute(f,D),A.fromBufferAttribute(f,C),_.sub(m),y.sub(m),E.sub(S),A.sub(S);const G=1/(E.x*A.y-A.x*E.y);isFinite(G)&&(w.copy(_).multiplyScalar(A.y).addScaledVector(y,-E.y).multiplyScalar(G),M.copy(y).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(G),p[J].add(w),p[D].add(w),p[C].add(w),g[J].add(M),g[D].add(M),g[C].add(M))}let j=this.groups;j.length===0&&(j=[{start:0,count:t.count}]);for(let J=0,D=j.length;J<D;++J){const C=j[J],G=C.start,ce=C.count;for(let le=G,me=G+ce;le<me;le+=3)x(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const N=new re,z=new re,ie=new re,H=new re;function P(J){ie.fromBufferAttribute(c,J),H.copy(ie);const D=p[J];N.copy(D),N.sub(ie.multiplyScalar(ie.dot(D))).normalize(),z.crossVectors(H,D);const G=z.dot(g[J])<0?-1:1;h.setXYZW(J,N.x,N.y,N.z,G)}for(let J=0,D=j.length;J<D;++J){const C=j[J],G=C.start,ce=C.count;for(let le=G,me=G+ce;le<me;le+=3)P(t.getX(le+0)),P(t.getX(le+1)),P(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const c=new re,f=new re,h=new re,p=new re,g=new re,m=new re,_=new re,y=new re;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),w=t.getX(S+1),M=t.getX(S+2);c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,f),y.subVectors(c,f),_.cross(y),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),p.add(_),g.add(_),m.add(_),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)c.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,f),y.subVectors(c,f),_.cross(y),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)fn.fromBufferAttribute(t,i),fn.normalize(),t.setXYZ(i,fn.x,fn.y,fn.z)}toNonIndexed(){function t(p,g){const m=p.array,_=p.itemSize,y=p.normalized,S=new m.constructor(g.length*_);let E=0,A=0;for(let w=0,M=g.length;w<M;w++){p.isInterleavedBufferAttribute?E=g[w]*p.data.stride+p.offset:E=g[w]*_;for(let x=0;x<_;x++)S[A++]=m[E++]}return new gi(S,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ba,s=this.index.array,c=this.attributes;for(const p in c){const g=c[p],m=t(g,s);i.setAttribute(p,m)}const f=this.morphAttributes;for(const p in f){const g=[],m=f[p];for(let _=0,y=m.length;_<y;_++){const S=m[_],E=t(S,s);g.push(E)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,g=h.length;p<g;p++){const m=h[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];t.data.attributes[g]=m.toJSON(t.data)}const c={};let f=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],_=[];for(let y=0,S=m.length;y<S;y++){const E=m[y];_.push(E.toJSON(t.data))}_.length>0&&(c[g]=_,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const c=t.attributes;for(const m in c){const _=c[m];this.setAttribute(m,_.clone(i))}const f=t.morphAttributes;for(const m in f){const _=[],y=f[m];for(let S=0,E=y.length;S<E;S++)_.push(y[S].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wv=new ln,ss=new lS,dc=new gh,Nv=new re,_r=new re,xr=new re,yr=new re,_d=new re,hc=new re,pc=new Tt,mc=new Tt,gc=new Tt,Dv=new re,Uv=new re,Lv=new re,vc=new re,_c=new re;class Ai extends Yn{constructor(t=new Ba,i=new T_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=c.length;f<h;f++){const p=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const p=this.morphTargetInfluences;if(f&&p){hc.set(0,0,0);for(let g=0,m=f.length;g<m;g++){const _=p[g],y=f[g];_!==0&&(_d.fromBufferAttribute(y,t),h?hc.addScaledVector(_d,_):hc.addScaledVector(_d.sub(i),_))}i.add(hc)}return i}raycast(t,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(f),ss.copy(t.ray).recast(t.near),!(dc.containsPoint(ss.origin)===!1&&(ss.intersectSphere(dc,Nv)===null||ss.origin.distanceToSquared(Nv)>(t.far-t.near)**2))&&(wv.copy(f).invert(),ss.copy(t.ray).applyMatrix4(wv),!(s.boundingBox!==null&&ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ss)))}_computeIntersections(t,i,s){let c;const f=this.geometry,h=this.material,p=f.index,g=f.attributes.position,m=f.attributes.uv,_=f.attributes.uv1,y=f.attributes.normal,S=f.groups,E=f.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,w=S.length;A<w;A++){const M=S[A],x=h[M.materialIndex],j=Math.max(M.start,E.start),N=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let z=j,ie=N;z<ie;z+=3){const H=p.getX(z),P=p.getX(z+1),J=p.getX(z+2);c=xc(this,x,t,s,m,_,y,H,P,J),c&&(c.faceIndex=Math.floor(z/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let M=A,x=w;M<x;M+=3){const j=p.getX(M),N=p.getX(M+1),z=p.getX(M+2);c=xc(this,h,t,s,m,_,y,j,N,z),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(h))for(let A=0,w=S.length;A<w;A++){const M=S[A],x=h[M.materialIndex],j=Math.max(M.start,E.start),N=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let z=j,ie=N;z<ie;z+=3){const H=z,P=z+1,J=z+2;c=xc(this,x,t,s,m,_,y,H,P,J),c&&(c.faceIndex=Math.floor(z/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,E.start),w=Math.min(g.count,E.start+E.count);for(let M=A,x=w;M<x;M+=3){const j=M,N=M+1,z=M+2;c=xc(this,h,t,s,m,_,y,j,N,z),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}}}function gS(l,t,i,s,c,f,h,p){let g;if(t.side===zn?g=s.intersectTriangle(h,f,c,!0,p):g=s.intersectTriangle(c,f,h,t.side===Ia,p),g===null)return null;_c.copy(p),_c.applyMatrix4(l.matrixWorld);const m=i.ray.origin.distanceTo(_c);return m<i.near||m>i.far?null:{distance:m,point:_c.clone(),object:l}}function xc(l,t,i,s,c,f,h,p,g,m){l.getVertexPosition(p,_r),l.getVertexPosition(g,xr),l.getVertexPosition(m,yr);const _=gS(l,t,i,s,_r,xr,yr,vc);if(_){c&&(pc.fromBufferAttribute(c,p),mc.fromBufferAttribute(c,g),gc.fromBufferAttribute(c,m),_.uv=Ti.getInterpolation(vc,_r,xr,yr,pc,mc,gc,new Tt)),f&&(pc.fromBufferAttribute(f,p),mc.fromBufferAttribute(f,g),gc.fromBufferAttribute(f,m),_.uv1=Ti.getInterpolation(vc,_r,xr,yr,pc,mc,gc,new Tt)),h&&(Dv.fromBufferAttribute(h,p),Uv.fromBufferAttribute(h,g),Lv.fromBufferAttribute(h,m),_.normal=Ti.getInterpolation(vc,_r,xr,yr,Dv,Uv,Lv,new re),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:p,b:g,c:m,normal:new re,materialIndex:0};Ti.getNormal(_r,xr,yr,y.normal),_.face=y}return _}class kl extends Ba{constructor(t=1,i=1,s=1,c=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:h};const p=this;c=Math.floor(c),f=Math.floor(f),h=Math.floor(h);const g=[],m=[],_=[],y=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,h,f,0),A("z","y","x",1,-1,s,i,-t,h,f,1),A("x","z","y",1,1,t,s,i,c,h,2),A("x","z","y",1,-1,t,s,-i,c,h,3),A("x","y","z",1,-1,t,i,s,c,f,4),A("x","y","z",-1,-1,t,i,-s,c,f,5),this.setIndex(g),this.setAttribute("position",new Ss(m,3)),this.setAttribute("normal",new Ss(_,3)),this.setAttribute("uv",new Ss(y,2));function A(w,M,x,j,N,z,ie,H,P,J,D){const C=z/P,G=ie/J,ce=z/2,le=ie/2,me=H/2,de=P+1,L=J+1;let W=0,Z=0;const Me=new re;for(let be=0;be<L;be++){const U=be*G-le;for(let ne=0;ne<de;ne++){const _e=ne*C-ce;Me[w]=_e*j,Me[M]=U*N,Me[x]=me,m.push(Me.x,Me.y,Me.z),Me[w]=0,Me[M]=0,Me[x]=H>0?1:-1,_.push(Me.x,Me.y,Me.z),y.push(ne/P),y.push(1-be/J),W+=1}}for(let be=0;be<J;be++)for(let U=0;U<P;U++){const ne=S+U+de*be,_e=S+U+de*(be+1),q=S+(U+1)+de*(be+1),oe=S+(U+1)+de*be;g.push(ne,_e,oe),g.push(_e,q,oe),Z+=6}p.addGroup(E,Z,D),E+=Z,S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(l){const t={};for(const i in l){t[i]={};for(const s in l[i]){const c=l[i][s];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone():Array.isArray(c)?t[i][s]=c.slice():t[i][s]=c}}return t}function An(l){const t={};for(let i=0;i<l.length;i++){const s=Ur(l[i]);for(const c in s)t[c]=s[c]}return t}function vS(l){const t=[];for(let i=0;i<l.length;i++)t.push(l[i].clone());return t}function C_(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const _S={clone:Ur,merge:An};var xS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends Vl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xS,this.fragmentShader=yS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=vS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const h=this.uniforms[c].value;h&&h.isTexture?i.uniforms[c]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[c]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[c]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[c]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[c]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[c]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[c]={type:"m4",value:h.toArray()}:i.uniforms[c]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class w_ extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ji}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new re,Ov=new Tt,Pv=new Tt;class hi extends w_{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=sh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-t/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(La.x,La.y).multiplyScalar(-t/La.z)}getViewSize(t,i){return this.getViewBounds(t,Ov,Pv),i.subVectors(Pv,Ov)}setViewOffset(t,i,s,c,f,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ed*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,m=h.fullHeight;f+=h.offsetX*c/g,i-=h.offsetY*s/m,c*=h.width/g,s*=h.height/m}const p=this.filmOffset;p!==0&&(f+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,Mr=1;class SS extends Yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new hi(Sr,Mr,t,i);c.layers=this.layers,this.add(c);const f=new hi(Sr,Mr,t,i);f.layers=this.layers,this.add(f);const h=new hi(Sr,Mr,t,i);h.layers=this.layers,this.add(h);const p=new hi(Sr,Mr,t,i);p.layers=this.layers,this.add(p);const g=new hi(Sr,Mr,t,i);g.layers=this.layers,this.add(g);const m=new hi(Sr,Mr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,f,h,p,g]=i;for(const m of i)this.remove(m);if(t===Ji)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Pc)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,h,p,g,m,_]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,c),t.render(i,f),t.setRenderTarget(s,1,c),t.render(i,h),t.setRenderTarget(s,2,c),t.render(i,p),t.setRenderTarget(s,3,c),t.render(i,g),t.setRenderTarget(s,4,c),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,c),t.render(i,_),t.setRenderTarget(y,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class N_ extends In{constructor(t,i,s,c,f,h,p,g,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Cr,super(t,i,s,c,f,h,p,g,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class MS extends Es{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new N_(c,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new kl(5,5,5),f=new ta({name:"CubemapFromEquirect",uniforms:Ur(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Pa});f.uniforms.tEquirect.value=i;const h=new Ai(c,f),p=i.minFilter;return i.minFilter===ys&&(i.minFilter=pi),new SS(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,c){const f=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,c);t.setRenderTarget(f)}}const xd=new re,ES=new re,bS=new lt;class ms{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=xd.subVectors(s,i).cross(ES.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(xd),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:i.copy(t.start).addScaledVector(s,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||bS.getNormalMatrix(t),c=this.coplanarPoint(xd).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new gh,yc=new re;class D_{constructor(t=new ms,i=new ms,s=new ms,c=new ms,f=new ms,h=new ms){this.planes=[t,i,s,c,f,h]}set(t,i,s,c,f,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(c),p[4].copy(f),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ji){const s=this.planes,c=t.elements,f=c[0],h=c[1],p=c[2],g=c[3],m=c[4],_=c[5],y=c[6],S=c[7],E=c[8],A=c[9],w=c[10],M=c[11],x=c[12],j=c[13],N=c[14],z=c[15];if(s[0].setComponents(g-f,S-m,M-E,z-x).normalize(),s[1].setComponents(g+f,S+m,M+E,z+x).normalize(),s[2].setComponents(g+h,S+_,M+A,z+j).normalize(),s[3].setComponents(g-h,S-_,M-A,z-j).normalize(),s[4].setComponents(g-p,S-y,M-w,z-N).normalize(),i===Ji)s[5].setComponents(g+p,S+y,M+w,z+N).normalize();else if(i===Pc)s[5].setComponents(p,y,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(yc.x=c.normal.x>0?t.max.x:t.min.x,yc.y=c.normal.y>0?t.max.y:t.min.y,yc.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function U_(){let l=null,t=!1,i=null,s=null;function c(f,h){i(f,h),s=l.requestAnimationFrame(c)}return{start:function(){t!==!0&&i!==null&&(s=l.requestAnimationFrame(c),t=!0)},stop:function(){l.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){l=f}}}function TS(l){const t=new WeakMap;function i(p,g){const m=p.array,_=p.usage,y=m.byteLength,S=l.createBuffer();l.bindBuffer(g,S),l.bufferData(g,m,_),p.onUploadCallback();let E;if(m instanceof Float32Array)E=l.FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?E=l.HALF_FLOAT:E=l.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=l.SHORT;else if(m instanceof Uint32Array)E=l.UNSIGNED_INT;else if(m instanceof Int32Array)E=l.INT;else if(m instanceof Int8Array)E=l.BYTE;else if(m instanceof Uint8Array)E=l.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,g,m){const _=g.array,y=g._updateRange,S=g.updateRanges;if(l.bindBuffer(m,p),y.count===-1&&S.length===0&&l.bufferSubData(m,0,_),S.length!==0){for(let E=0,A=S.length;E<A;E++){const w=S[E];l.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}g.clearUpdateRanges()}y.count!==-1&&(l.bufferSubData(m,y.offset*_.BYTES_PER_ELEMENT,_,y.offset,y.count),y.count=-1),g.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(l.deleteBuffer(g.buffer),t.delete(p))}function h(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,p,g),m.version=p.version}}return{get:c,remove:f,update:h}}class Bc extends Ba{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const f=t/2,h=i/2,p=Math.floor(s),g=Math.floor(c),m=p+1,_=g+1,y=t/p,S=i/g,E=[],A=[],w=[],M=[];for(let x=0;x<_;x++){const j=x*S-h;for(let N=0;N<m;N++){const z=N*y-f;A.push(z,-j,0),w.push(0,0,1),M.push(N/p),M.push(1-x/g)}}for(let x=0;x<g;x++)for(let j=0;j<p;j++){const N=j+m*x,z=j+m*(x+1),ie=j+1+m*(x+1),H=j+1+m*x;E.push(N,z,H),E.push(z,ie,H)}this.setIndex(E),this.setAttribute("position",new Ss(A,3)),this.setAttribute("normal",new Ss(w,3)),this.setAttribute("uv",new Ss(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.width,t.height,t.widthSegments,t.heightSegments)}}var AS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RS=`#ifdef USE_ALPHAHASH
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
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,US=`#ifdef USE_AOMAP
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
#endif`,LS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OS=`#ifdef USE_BATCHING
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
#endif`,PS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jS=`float G_BlinnPhong_Implicit( ) {
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
#endif`,FS=`#ifdef USE_BUMPMAP
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZS=`#define PI 3.141592653589793
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
} // validated`,KS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QS=`vec3 transformedNormal = objectNormal;
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
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`
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
}`,aM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hM=`#ifdef USE_GRADIENTMAP
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
}`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vM=`uniform bool receiveShadow;
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
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,TM=`
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
#endif`,AM=`#if defined( RE_IndirectDiffuse )
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PM=`#if defined( USE_POINTS_UV )
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
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
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
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YM=`#ifdef USE_NORMALMAP
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
#endif`,ZM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uE=`float getShadowMask() {
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
}`,fE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pE=`#ifdef USE_SKINNING
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
#endif`,mE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AE=`uniform sampler2D t2D;
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
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
}`,UE=`#if DEPTH_PACKING == 3200
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
}`,LE=`#define DISTANCE
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
}`,OE=`#define DISTANCE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
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
}`,jE=`uniform vec3 diffuse;
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
}`,FE=`uniform vec3 diffuse;
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
}`,HE=`#define LAMBERT
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
}`,GE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,XE=`#define NORMAL
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
}`,WE=`#define NORMAL
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
}`,qE=`#define PHONG
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
}`,YE=`#define PHONG
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
}`,ZE=`#define STANDARD
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
}`,KE=`#define STANDARD
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
}`,QE=`#define TOON
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
}`,JE=`#define TOON
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
}`,$E=`uniform float size;
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,nb=`uniform vec3 color;
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
}`,ib=`uniform float rotation;
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
}`,ab=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:AS,alphahash_pars_fragment:RS,alphamap_fragment:CS,alphamap_pars_fragment:wS,alphatest_fragment:NS,alphatest_pars_fragment:DS,aomap_fragment:US,aomap_pars_fragment:LS,batching_pars_vertex:OS,batching_vertex:PS,begin_vertex:zS,beginnormal_vertex:IS,bsdfs:jS,iridescence_fragment:BS,bumpmap_pars_fragment:FS,clipping_planes_fragment:HS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:kS,color_fragment:XS,color_pars_fragment:WS,color_pars_vertex:qS,color_vertex:YS,common:ZS,cube_uv_reflection_fragment:KS,defaultnormal_vertex:QS,displacementmap_pars_vertex:JS,displacementmap_vertex:$S,emissivemap_fragment:eM,emissivemap_pars_fragment:tM,colorspace_fragment:nM,colorspace_pars_fragment:iM,envmap_fragment:aM,envmap_common_pars_fragment:sM,envmap_pars_fragment:rM,envmap_pars_vertex:lM,envmap_physical_pars_fragment:_M,envmap_vertex:oM,fog_vertex:cM,fog_pars_vertex:uM,fog_fragment:fM,fog_pars_fragment:dM,gradientmap_pars_fragment:hM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:gM,lights_pars_begin:vM,lights_toon_fragment:xM,lights_toon_pars_fragment:yM,lights_phong_fragment:SM,lights_phong_pars_fragment:MM,lights_physical_fragment:EM,lights_physical_pars_fragment:bM,lights_fragment_begin:TM,lights_fragment_maps:AM,lights_fragment_end:RM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:wM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:DM,map_fragment:UM,map_pars_fragment:LM,map_particle_fragment:OM,map_particle_pars_fragment:PM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:IM,morphinstance_vertex:jM,morphcolor_vertex:BM,morphnormal_vertex:FM,morphtarget_pars_vertex:HM,morphtarget_vertex:GM,normal_fragment_begin:VM,normal_fragment_maps:kM,normal_pars_fragment:XM,normal_pars_vertex:WM,normal_vertex:qM,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:ZM,clearcoat_normal_fragment_maps:KM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:JM,opaque_fragment:$M,packing:eE,premultiplied_alpha_fragment:tE,project_vertex:nE,dithering_fragment:iE,dithering_pars_fragment:aE,roughnessmap_fragment:sE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:oE,shadowmap_vertex:cE,shadowmask_pars_fragment:uE,skinbase_vertex:fE,skinning_pars_vertex:dE,skinning_vertex:hE,skinnormal_vertex:pE,specularmap_fragment:mE,specularmap_pars_fragment:gE,tonemapping_fragment:vE,tonemapping_pars_fragment:_E,transmission_fragment:xE,transmission_pars_fragment:yE,uv_pars_fragment:SE,uv_pars_vertex:ME,uv_vertex:EE,worldpos_vertex:bE,background_vert:TE,background_frag:AE,backgroundCube_vert:RE,backgroundCube_frag:CE,cube_vert:wE,cube_frag:NE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:OE,equirect_vert:PE,equirect_frag:zE,linedashed_vert:IE,linedashed_frag:jE,meshbasic_vert:BE,meshbasic_frag:FE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:XE,meshnormal_frag:WE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:ZE,meshphysical_frag:KE,meshtoon_vert:QE,meshtoon_frag:JE,points_vert:$E,points_frag:eb,shadow_vert:tb,shadow_frag:nb,sprite_vert:ib,sprite_frag:ab},Ue={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ei={basic:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:An([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:An([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:An([Ue.points,Ue.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:An([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:An([Ue.common,Ue.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:An([Ue.sprite,Ue.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:An([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:An([Ue.lights,Ue.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ei.physical={uniforms:An([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Sc={r:0,b:0,g:0},ls=new ea,sb=new ln;function rb(l,t,i,s,c,f,h){const p=new wt(0);let g=f===!0?0:1,m,_,y=null,S=0,E=null;function A(j){let N=j.isScene===!0?j.background:null;return N&&N.isTexture&&(N=(j.backgroundBlurriness>0?i:t).get(N)),N}function w(j){let N=!1;const z=A(j);z===null?x(p,g):z&&z.isColor&&(x(z,1),N=!0);const ie=l.xr.getEnvironmentBlendMode();ie==="additive"?s.buffers.color.setClear(0,0,0,1,h):ie==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(l.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function M(j,N){const z=A(N);z&&(z.isCubeTexture||z.mapping===Ic)?(_===void 0&&(_=new Ai(new kl(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:Ur(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(ie,H,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(_)),ls.copy(N.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(ls)),_.material.toneMapped=bt.getTransfer(z.colorSpace)!==Bt,(y!==z||S!==z.version||E!==l.toneMapping)&&(_.material.needsUpdate=!0,y=z,S=z.version,E=l.toneMapping),_.layers.enableAll(),j.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(m===void 0&&(m=new Ai(new Bc(2,2),new ta({name:"BackgroundMaterial",uniforms:Ur(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(m)),m.material.uniforms.t2D.value=z,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=bt.getTransfer(z.colorSpace)!==Bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(z.matrix),(y!==z||S!==z.version||E!==l.toneMapping)&&(m.material.needsUpdate=!0,y=z,S=z.version,E=l.toneMapping),m.layers.enableAll(),j.unshift(m,m.geometry,m.material,0,0,null))}function x(j,N){j.getRGB(Sc,C_(l)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,N,h)}return{getClearColor:function(){return p},setClearColor:function(j,N=1){p.set(j),g=N,x(p,g)},getClearAlpha:function(){return g},setClearAlpha:function(j){g=j,x(p,g)},render:w,addToRenderList:M}}function lb(l,t){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),s={},c=S(null);let f=c,h=!1;function p(C,G,ce,le,me){let de=!1;const L=y(le,ce,G);f!==L&&(f=L,m(f.object)),de=E(C,le,ce,me),de&&A(C,le,ce,me),me!==null&&t.update(me,l.ELEMENT_ARRAY_BUFFER),(de||h)&&(h=!1,z(C,G,ce,le),me!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function g(){return l.createVertexArray()}function m(C){return l.bindVertexArray(C)}function _(C){return l.deleteVertexArray(C)}function y(C,G,ce){const le=ce.wireframe===!0;let me=s[C.id];me===void 0&&(me={},s[C.id]=me);let de=me[G.id];de===void 0&&(de={},me[G.id]=de);let L=de[le];return L===void 0&&(L=S(g()),de[le]=L),L}function S(C){const G=[],ce=[],le=[];for(let me=0;me<i;me++)G[me]=0,ce[me]=0,le[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ce,attributeDivisors:le,object:C,attributes:{},index:null}}function E(C,G,ce,le){const me=f.attributes,de=G.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){const be=me[Z];let U=de[Z];if(U===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),be===void 0||be.attribute!==U||U&&be.data!==U.data)return!0;L++}return f.attributesNum!==L||f.index!==le}function A(C,G,ce,le){const me={},de=G.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){let be=de[Z];be===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const U={};U.attribute=be,be&&be.data&&(U.data=be.data),me[Z]=U,L++}f.attributes=me,f.attributesNum=L,f.index=le}function w(){const C=f.newAttributes;for(let G=0,ce=C.length;G<ce;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const ce=f.newAttributes,le=f.enabledAttributes,me=f.attributeDivisors;ce[C]=1,le[C]===0&&(l.enableVertexAttribArray(C),le[C]=1),me[C]!==G&&(l.vertexAttribDivisor(C,G),me[C]=G)}function j(){const C=f.newAttributes,G=f.enabledAttributes;for(let ce=0,le=G.length;ce<le;ce++)G[ce]!==C[ce]&&(l.disableVertexAttribArray(ce),G[ce]=0)}function N(C,G,ce,le,me,de,L){L===!0?l.vertexAttribIPointer(C,G,ce,me,de):l.vertexAttribPointer(C,G,ce,le,me,de)}function z(C,G,ce,le){w();const me=le.attributes,de=ce.getAttributes(),L=G.defaultAttributeValues;for(const W in de){const Z=de[W];if(Z.location>=0){let Me=me[W];if(Me===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const be=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const _e=ne.buffer,q=ne.type,oe=ne.bytesPerElement,ye=q===l.INT||q===l.UNSIGNED_INT||Me.gpuType===ch;if(Me.isInterleavedBufferAttribute){const Ee=Me.data,He=Ee.stride,Fe=Me.offset;if(Ee.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)x(Z.location+nt,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let nt=0;nt<Z.locationSize;nt++)M(Z.location+nt);l.bindBuffer(l.ARRAY_BUFFER,_e);for(let nt=0;nt<Z.locationSize;nt++)N(Z.location+nt,U/Z.locationSize,q,be,He*oe,(Fe+U/Z.locationSize*nt)*oe,ye)}else{if(Me.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)x(Z.location+Ee,Me.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)M(Z.location+Ee);l.bindBuffer(l.ARRAY_BUFFER,_e);for(let Ee=0;Ee<Z.locationSize;Ee++)N(Z.location+Ee,U/Z.locationSize,q,be,U*oe,U/Z.locationSize*Ee*oe,ye)}}else if(L!==void 0){const be=L[W];if(be!==void 0)switch(be.length){case 2:l.vertexAttrib2fv(Z.location,be);break;case 3:l.vertexAttrib3fv(Z.location,be);break;case 4:l.vertexAttrib4fv(Z.location,be);break;default:l.vertexAttrib1fv(Z.location,be)}}}}j()}function ie(){J();for(const C in s){const G=s[C];for(const ce in G){const le=G[ce];for(const me in le)_(le[me].object),delete le[me];delete G[ce]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const ce in G){const le=G[ce];for(const me in le)_(le[me].object),delete le[me];delete G[ce]}delete s[C.id]}function P(C){for(const G in s){const ce=s[G];if(ce[C.id]===void 0)continue;const le=ce[C.id];for(const me in le)_(le[me].object),delete le[me];delete ce[C.id]}}function J(){D(),h=!0,f!==c&&(f=c,m(f.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:J,resetDefaultState:D,dispose:ie,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:j}}function ob(l,t,i){let s;function c(m){s=m}function f(m,_){l.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,y){y!==0&&(l.drawArraysInstanced(s,m,_,y),i.update(_,s,y))}function p(m,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,y);let E=0;for(let A=0;A<y;A++)E+=_[A];i.update(E,s,1)}function g(m,_,y,S){if(y===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<m.length;A++)h(m[A],_[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,m,0,_,0,S,0,y);let A=0;for(let w=0;w<y;w++)A+=_[w];for(let w=0;w<S.length;w++)i.update(A,s,S[w])}}this.setMode=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function cb(l,t,i,s){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");c=l.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(H){return!(H!==mi&&s.convert(H)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const P=H===Bl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==$i&&s.convert(H)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Qi&&!P)}function g(H){if(H==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=g(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=i.logarithmicDepthBuffer===!0,S=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=l.getParameter(l.MAX_TEXTURE_SIZE),w=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),M=l.getParameter(l.MAX_VERTEX_ATTRIBS),x=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),j=l.getParameter(l.MAX_VARYING_VECTORS),N=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,ie=l.getParameter(l.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:w,maxAttributes:M,maxVertexUniforms:x,maxVaryings:j,maxFragmentUniforms:N,vertexTextures:z,maxSamples:ie}}function ub(l){const t=this;let i=null,s=0,c=!1,f=!1;const h=new ms,p=new lt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||s!==0||c;return c=S,s=y.length,E},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(y,S){i=_(y,S,0)},this.setState=function(y,S,E){const A=y.clippingPlanes,w=y.clipIntersection,M=y.clipShadows,x=l.get(y);if(!c||A===null||A.length===0||f&&!M)f?_(null):m();else{const j=f?0:s,N=j*4;let z=x.clippingState||null;g.value=z,z=_(A,S,N,E);for(let ie=0;ie!==N;++ie)z[ie]=i[ie];x.clippingState=z,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=j}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(y,S,E,A){const w=y!==null?y.length:0;let M=null;if(w!==0){if(M=g.value,A!==!0||M===null){const x=E+w*4,j=S.matrixWorldInverse;p.getNormalMatrix(j),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,z=E;N!==w;++N,z+=4)h.copy(y[N]).applyMatrix4(j,p),h.normal.toArray(M,z),M[z+3]=h.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function fb(l){let t=new WeakMap;function i(h,p){return p===wd?h.mapping=Cr:p===Nd&&(h.mapping=wr),h}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===wd||p===Nd)if(t.has(h)){const g=t.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const m=new MS(g.height);return m.fromEquirectangularTexture(l,h),t.set(h,m),h.addEventListener("dispose",c),i(m.texture,h.mapping)}else return null}}return h}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){t=new WeakMap}return{get:s,dispose:f}}class L_ extends w_{constructor(t=-1,i=1,s=1,c=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-t,h=s+t,p=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,h=f+m*this.view.width,p-=_*this.view.offsetY,g=p-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,p,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const br=4,zv=[.125,.215,.35,.446,.526,.582],_s=20,yd=new L_,Iv=new wt;let Sd=null,Md=0,Ed=0,bd=!1;const gs=(1+Math.sqrt(5))/2,Er=1/gs,jv=[new re(-gs,Er,0),new re(gs,Er,0),new re(-Er,0,gs),new re(Er,0,gs),new re(0,gs,-Er),new re(0,gs,Er),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class Bv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,c=100){Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,s,c,f),i>0&&this._blur(f,0,0,i),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=bd,t.scissorTest=!1,Mc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Bl,format:mi,colorSpace:ja,depthBuffer:!1},c=Fv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fv(t,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=db(f)),this._blurMaterial=hb(f,t,i)}return c}_compileMaterial(t){const i=new Ai(this._lodPlanes[0],t);this._renderer.compile(i,yd)}_sceneToCubeUV(t,i,s,c){const p=new hi(90,1,i,s),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(Iv),_.toneMapping=za,_.autoClear=!1;const E=new T_({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),A=new Ai(new kl,E);let w=!1;const M=t.background;M?M.isColor&&(E.color.copy(M),t.background=null,w=!0):(E.color.copy(Iv),w=!0);for(let x=0;x<6;x++){const j=x%3;j===0?(p.up.set(0,g[x],0),p.lookAt(m[x],0,0)):j===1?(p.up.set(0,0,g[x]),p.lookAt(0,m[x],0)):(p.up.set(0,g[x],0),p.lookAt(0,0,m[x]));const N=this._cubeSize;Mc(c,j*N,x>2?N:0,N,N),_.setRenderTarget(c),w&&_.render(A,p),_.render(t,p)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=S,_.autoClear=y,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===Cr||t.mapping===wr;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const f=c?this._cubemapMaterial:this._equirectMaterial,h=new Ai(this._lodPlanes[0],f),p=f.uniforms;p.envMap.value=t;const g=this._cubeSize;Mc(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,yd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),p=jv[(c-f-1)%jv.length];this._blur(t,f-1,f,h,p)}i.autoClear=s}_blur(t,i,s,c,f){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,c,"latitudinal",f),this._halfBlur(h,t,s,s,c,"longitudinal",f)}_halfBlur(t,i,s,c,f,h,p){const g=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new Ai(this._lodPlanes[c],m),S=m.uniforms,E=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*_s-1),w=f/A,M=isFinite(f)?1+Math.floor(_*w):_s;M>_s&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_s}`);const x=[];let j=0;for(let P=0;P<_s;++P){const J=P/w,D=Math.exp(-J*J/2);x.push(D),P===0?j+=D:P<M&&(j+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/j;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=h==="latitudinal",p&&(S.poleAxis.value=p);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-s;const z=this._sizeLods[c],ie=3*z*(c>N-br?c-N+br:0),H=4*(this._cubeSize-z);Mc(i,ie,H,3*z,2*z),g.setRenderTarget(i),g.render(y,yd)}}function db(l){const t=[],i=[],s=[];let c=l;const f=l-br+1+zv.length;for(let h=0;h<f;h++){const p=Math.pow(2,c);i.push(p);let g=1/p;h>l-br?g=zv[h-l+br-1]:h===0&&(g=0),s.push(g);const m=1/(p-2),_=-m,y=1+m,S=[_,_,y,_,y,y,_,_,y,y,_,y],E=6,A=6,w=3,M=2,x=1,j=new Float32Array(w*A*E),N=new Float32Array(M*A*E),z=new Float32Array(x*A*E);for(let H=0;H<E;H++){const P=H%3*2/3-1,J=H>2?0:-1,D=[P,J,0,P+2/3,J,0,P+2/3,J+1,0,P,J,0,P+2/3,J+1,0,P,J+1,0];j.set(D,w*A*H),N.set(S,M*A*H);const C=[H,H,H,H,H,H];z.set(C,x*A*H)}const ie=new Ba;ie.setAttribute("position",new gi(j,w)),ie.setAttribute("uv",new gi(N,M)),ie.setAttribute("faceIndex",new gi(z,x)),t.push(ie),c>br&&c--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Fv(l,t,i){const s=new Es(l,t,i);return s.texture.mapping=Ic,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mc(l,t,i,s,c){l.viewport.set(t,i,s,c),l.scissor.set(t,i,s,c)}function hb(l,t,i){const s=new Float32Array(_s),c=new re(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Hv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Gv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function vh(){return`

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
	`}function pb(l){let t=new WeakMap,i=null;function s(p){if(p&&p.isTexture){const g=p.mapping,m=g===wd||g===Nd,_=g===Cr||g===wr;if(m||_){let y=t.get(p);const S=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new Bv(l)),y=m?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const E=p.image;return m&&E&&E.height>0||_&&E&&c(E)?(i===null&&(i=new Bv(l)),y=m?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",f),y.texture):null}}}return p}function c(p){let g=0;const m=6;for(let _=0;_<m;_++)p[_]!==void 0&&g++;return g===m}function f(p){const g=p.target;g.removeEventListener("dispose",f);const m=t.get(g);m!==void 0&&(t.delete(g),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function mb(l){const t={};function i(s){if(t[s]!==void 0)return t[s];let c;switch(s){case"WEBGL_depth_texture":c=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=l.getExtension(s)}return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&Il("THREE.WebGLRenderer: "+s+" extension not supported."),c}}}function gb(l,t,i,s){const c={},f=new WeakMap;function h(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);for(const A in S.morphAttributes){const w=S.morphAttributes[A];for(let M=0,x=w.length;M<x;M++)t.remove(w[M])}S.removeEventListener("dispose",h),delete c[S.id];const E=f.get(S);E&&(t.remove(E),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function p(y,S){return c[S.id]===!0||(S.addEventListener("dispose",h),c[S.id]=!0,i.memory.geometries++),S}function g(y){const S=y.attributes;for(const A in S)t.update(S[A],l.ARRAY_BUFFER);const E=y.morphAttributes;for(const A in E){const w=E[A];for(let M=0,x=w.length;M<x;M++)t.update(w[M],l.ARRAY_BUFFER)}}function m(y){const S=[],E=y.index,A=y.attributes.position;let w=0;if(E!==null){const j=E.array;w=E.version;for(let N=0,z=j.length;N<z;N+=3){const ie=j[N+0],H=j[N+1],P=j[N+2];S.push(ie,H,H,P,P,ie)}}else if(A!==void 0){const j=A.array;w=A.version;for(let N=0,z=j.length/3-1;N<z;N+=3){const ie=N+0,H=N+1,P=N+2;S.push(ie,H,H,P,P,ie)}}else return;const M=new(y_(S)?R_:A_)(S,1);M.version=w;const x=f.get(y);x&&t.remove(x),f.set(y,M)}function _(y){const S=f.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&m(y)}else m(y);return f.get(y)}return{get:p,update:g,getWireframeAttribute:_}}function vb(l,t,i){let s;function c(S){s=S}let f,h;function p(S){f=S.type,h=S.bytesPerElement}function g(S,E){l.drawElements(s,E,f,S*h),i.update(E,s,1)}function m(S,E,A){A!==0&&(l.drawElementsInstanced(s,E,f,S*h,A),i.update(E,s,A))}function _(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,f,S,0,A);let M=0;for(let x=0;x<A;x++)M+=E[x];i.update(M,s,1)}function y(S,E,A,w){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)m(S[x]/h,E[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,f,S,0,w,0,A);let x=0;for(let j=0;j<A;j++)x+=E[j];for(let j=0;j<w.length;j++)i.update(x,s,w[j])}}this.setMode=c,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function _b(l){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,p){switch(i.calls++,h){case l.TRIANGLES:i.triangles+=p*(f/3);break;case l.LINES:i.lines+=p*(f/2);break;case l.LINE_STRIP:i.lines+=p*(f-1);break;case l.LINE_LOOP:i.lines+=p*f;break;case l.POINTS:i.points+=p*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function xb(l,t,i){const s=new WeakMap,c=new dn;function f(h,p,g){const m=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=_!==void 0?_.length:0;let S=s.get(p);if(S===void 0||S.count!==y){let C=function(){J.dispose(),s.delete(p),p.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const A=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],j=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let z=0;A===!0&&(z=1),w===!0&&(z=2),M===!0&&(z=3);let ie=p.attributes.position.count*z,H=1;ie>t.maxTextureSize&&(H=Math.ceil(ie/t.maxTextureSize),ie=t.maxTextureSize);const P=new Float32Array(ie*H*4*y),J=new M_(P,ie,H,y);J.type=Qi,J.needsUpdate=!0;const D=z*4;for(let G=0;G<y;G++){const ce=x[G],le=j[G],me=N[G],de=ie*H*4*G;for(let L=0;L<ce.count;L++){const W=L*D;A===!0&&(c.fromBufferAttribute(ce,L),P[de+W+0]=c.x,P[de+W+1]=c.y,P[de+W+2]=c.z,P[de+W+3]=0),w===!0&&(c.fromBufferAttribute(le,L),P[de+W+4]=c.x,P[de+W+5]=c.y,P[de+W+6]=c.z,P[de+W+7]=0),M===!0&&(c.fromBufferAttribute(me,L),P[de+W+8]=c.x,P[de+W+9]=c.y,P[de+W+10]=c.z,P[de+W+11]=me.itemSize===4?c.w:1)}}S={count:y,texture:J,size:new Tt(ie,H)},s.set(p,S),p.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(l,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const w=p.morphTargetsRelative?1:1-A;g.getUniforms().setValue(l,"morphTargetBaseInfluence",w),g.getUniforms().setValue(l,"morphTargetInfluences",m)}g.getUniforms().setValue(l,"morphTargetsTexture",S.texture,i),g.getUniforms().setValue(l,"morphTargetsTextureSize",S.size)}return{update:f}}function yb(l,t,i,s){let c=new WeakMap;function f(g){const m=s.render.frame,_=g.geometry,y=t.get(g,_);if(c.get(y)!==m&&(t.update(y),c.set(y,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),c.get(g)!==m&&(i.update(g.instanceMatrix,l.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,l.ARRAY_BUFFER),c.set(g,m))),g.isSkinnedMesh){const S=g.skeleton;c.get(S)!==m&&(S.update(),c.set(S,m))}return y}function h(){c=new WeakMap}function p(g){const m=g.target;m.removeEventListener("dispose",p),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:f,dispose:h}}class O_ extends In{constructor(t,i,s,c,f,h,p,g,m,_=Ar){if(_!==Ar&&_!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Ar&&(s=Ms),s===void 0&&_===Dr&&(s=Nr),super(null,c,f,h,p,g,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=p!==void 0?p:ai,this.minFilter=g!==void 0?g:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const P_=new In,Vv=new O_(1,1),z_=new M_,I_=new sS,j_=new N_,kv=[],Xv=[],Wv=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function Or(l,t,i){const s=l[0];if(s<=0||s>0)return l;const c=t*i;let f=kv[c];if(f===void 0&&(f=new Float32Array(c),kv[c]=f),t!==0){s.toArray(f,0);for(let h=1,p=0;h!==t;++h)p+=i,l[h].toArray(f,p)}return f}function on(l,t){if(l.length!==t.length)return!1;for(let i=0,s=l.length;i<s;i++)if(l[i]!==t[i])return!1;return!0}function cn(l,t){for(let i=0,s=t.length;i<s;i++)l[i]=t[i]}function Fc(l,t){let i=Xv[t];i===void 0&&(i=new Int32Array(t),Xv[t]=i);for(let s=0;s!==t;++s)i[s]=l.allocateTextureUnit();return i}function Sb(l,t){const i=this.cache;i[0]!==t&&(l.uniform1f(this.addr,t),i[0]=t)}function Mb(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;l.uniform2fv(this.addr,t),cn(i,t)}}function Eb(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(on(i,t))return;l.uniform3fv(this.addr,t),cn(i,t)}}function bb(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;l.uniform4fv(this.addr,t),cn(i,t)}}function Tb(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;l.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(on(i,s))return;Yv.set(s),l.uniformMatrix2fv(this.addr,!1,Yv),cn(i,s)}}function Ab(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;l.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(on(i,s))return;qv.set(s),l.uniformMatrix3fv(this.addr,!1,qv),cn(i,s)}}function Rb(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;l.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(on(i,s))return;Wv.set(s),l.uniformMatrix4fv(this.addr,!1,Wv),cn(i,s)}}function Cb(l,t){const i=this.cache;i[0]!==t&&(l.uniform1i(this.addr,t),i[0]=t)}function wb(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;l.uniform2iv(this.addr,t),cn(i,t)}}function Nb(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;l.uniform3iv(this.addr,t),cn(i,t)}}function Db(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;l.uniform4iv(this.addr,t),cn(i,t)}}function Ub(l,t){const i=this.cache;i[0]!==t&&(l.uniform1ui(this.addr,t),i[0]=t)}function Lb(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;l.uniform2uiv(this.addr,t),cn(i,t)}}function Ob(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;l.uniform3uiv(this.addr,t),cn(i,t)}}function Pb(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;l.uniform4uiv(this.addr,t),cn(i,t)}}function zb(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c);let f;this.type===l.SAMPLER_2D_SHADOW?(Vv.compareFunction=x_,f=Vv):f=P_,i.setTexture2D(t||f,c)}function Ib(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||I_,c)}function jb(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||j_,c)}function Bb(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||z_,c)}function Fb(l){switch(l){case 5126:return Sb;case 35664:return Mb;case 35665:return Eb;case 35666:return bb;case 35674:return Tb;case 35675:return Ab;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return wb;case 35668:case 35672:return Nb;case 35669:case 35673:return Db;case 5125:return Ub;case 36294:return Lb;case 36295:return Ob;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Bb}}function Hb(l,t){l.uniform1fv(this.addr,t)}function Gb(l,t){const i=Or(t,this.size,2);l.uniform2fv(this.addr,i)}function Vb(l,t){const i=Or(t,this.size,3);l.uniform3fv(this.addr,i)}function kb(l,t){const i=Or(t,this.size,4);l.uniform4fv(this.addr,i)}function Xb(l,t){const i=Or(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function Wb(l,t){const i=Or(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function qb(l,t){const i=Or(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function Yb(l,t){l.uniform1iv(this.addr,t)}function Zb(l,t){l.uniform2iv(this.addr,t)}function Kb(l,t){l.uniform3iv(this.addr,t)}function Qb(l,t){l.uniform4iv(this.addr,t)}function Jb(l,t){l.uniform1uiv(this.addr,t)}function $b(l,t){l.uniform2uiv(this.addr,t)}function eT(l,t){l.uniform3uiv(this.addr,t)}function tT(l,t){l.uniform4uiv(this.addr,t)}function nT(l,t,i){const s=this.cache,c=t.length,f=Fc(i,c);on(s,f)||(l.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==c;++h)i.setTexture2D(t[h]||P_,f[h])}function iT(l,t,i){const s=this.cache,c=t.length,f=Fc(i,c);on(s,f)||(l.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==c;++h)i.setTexture3D(t[h]||I_,f[h])}function aT(l,t,i){const s=this.cache,c=t.length,f=Fc(i,c);on(s,f)||(l.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==c;++h)i.setTextureCube(t[h]||j_,f[h])}function sT(l,t,i){const s=this.cache,c=t.length,f=Fc(i,c);on(s,f)||(l.uniform1iv(this.addr,f),cn(s,f));for(let h=0;h!==c;++h)i.setTexture2DArray(t[h]||z_,f[h])}function rT(l){switch(l){case 5126:return Hb;case 35664:return Gb;case 35665:return Vb;case 35666:return kb;case 35674:return Xb;case 35675:return Wb;case 35676:return qb;case 5124:case 35670:return Yb;case 35667:case 35671:return Zb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return $b;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return sT}}class lT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Fb(i.type)}}class oT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rT(i.type)}}class cT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let f=0,h=c.length;f!==h;++f){const p=c[f];p.setValue(t,i[p.id],s)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function Zv(l,t){l.seq.push(t),l.map[t.id]=t}function uT(l,t,i){const s=l.name,c=s.length;for(Td.lastIndex=0;;){const f=Td.exec(s),h=Td.lastIndex;let p=f[1];const g=f[2]==="]",m=f[3];if(g&&(p=p|0),m===void 0||m==="["&&h+2===c){Zv(i,m===void 0?new lT(p,l,t):new oT(p,l,t));break}else{let y=i.map[p];y===void 0&&(y=new cT(p),Zv(i,y)),i=y}}}class Nc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=t.getActiveUniform(i,c),h=t.getUniformLocation(i,f.name);uT(f,h,this)}}setValue(t,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let f=0,h=i.length;f!==h;++f){const p=i[f],g=s[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,f=t.length;c!==f;++c){const h=t[c];h.id in i&&s.push(h)}return s}}function Kv(l,t,i){const s=l.createShader(t);return l.shaderSource(s,i),l.compileShader(s),s}const fT=37297;let dT=0;function hT(l,t){const i=l.split(`
`),s=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let h=c;h<f;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}function pT(l){const t=bt.getPrimaries(bt.workingColorSpace),i=bt.getPrimaries(l);let s;switch(t===i?s="":t===Oc&&i===Lc?s="LinearDisplayP3ToLinearSRGB":t===Lc&&i===Oc&&(s="LinearSRGBToLinearDisplayP3"),l){case ja:case jc:return[s,"LinearTransferOETF"];case Mi:case mh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",l),[s,"LinearTransferOETF"]}}function Qv(l,t,i){const s=l.getShaderParameter(t,l.COMPILE_STATUS),c=l.getShaderInfoLog(t).trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+hT(l.getShaderSource(t),h)}else return c}function mT(l,t){const i=pT(t);return`vec4 ${l}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function gT(l,t){let i;switch(t){case Uy:i="Linear";break;case Ly:i="Reinhard";break;case Oy:i="OptimizedCineon";break;case Py:i="ACESFilmic";break;case Iy:i="AgX";break;case jy:i="Neutral";break;case zy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new re;function vT(){bt.getLuminanceCoefficients(Ec);const l=Ec.x.toFixed(4),t=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _T(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function xT(l){const t=[];for(const i in l){const s=l[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yT(l,t){const i={},s=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=l.getActiveAttrib(t,c),h=f.name;let p=1;f.type===l.FLOAT_MAT2&&(p=2),f.type===l.FLOAT_MAT3&&(p=3),f.type===l.FLOAT_MAT4&&(p=4),i[h]={type:f.type,location:l.getAttribLocation(t,h),locationSize:p}}return i}function zl(l){return l!==""}function Jv(l,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $v(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ST=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(l){return l.replace(ST,ET)}const MT=new Map;function ET(l,t){let i=rt[t];if(i===void 0){const s=MT.get(t);if(s!==void 0)i=rt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return rh(i)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e_(l){return l.replace(bT,TT)}function TT(l,t,i,s){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function t_(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AT(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===r_?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===ay?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Ki&&(t="SHADOWMAP_TYPE_VSM"),t}function RT(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Cr:case wr:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function CT(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function wT(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case l_:t="ENVMAP_BLENDING_MULTIPLY";break;case Ny:t="ENVMAP_BLENDING_MIX";break;case Dy:t="ENVMAP_BLENDING_ADD";break}return t}function NT(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function DT(l,t,i,s){const c=l.getContext(),f=i.defines;let h=i.vertexShader,p=i.fragmentShader;const g=AT(i),m=RT(i),_=CT(i),y=wT(i),S=NT(i),E=_T(i),A=xT(f),w=c.createProgram();let M,x,j=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(zl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(zl).join(`
`),x.length>0&&(x+=`
`)):(M=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),x=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?rt.tonemapping_pars_fragment:"",i.toneMapping!==za?gT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,mT("linearToOutputTexel",i.outputColorSpace),vT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zl).join(`
`)),h=rh(h),h=Jv(h,i),h=$v(h,i),p=rh(p),p=Jv(p,i),p=$v(p,i),h=e_(h),p=e_(p),i.isRawShaderMaterial!==!0&&(j=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=j+M+h,z=j+x+p,ie=Kv(c,c.VERTEX_SHADER,N),H=Kv(c,c.FRAGMENT_SHADER,z);c.attachShader(w,ie),c.attachShader(w,H),i.index0AttributeName!==void 0?c.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&c.bindAttribLocation(w,0,"position"),c.linkProgram(w);function P(G){if(l.debug.checkShaderErrors){const ce=c.getProgramInfoLog(w).trim(),le=c.getShaderInfoLog(ie).trim(),me=c.getShaderInfoLog(H).trim();let de=!0,L=!0;if(c.getProgramParameter(w,c.LINK_STATUS)===!1)if(de=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(c,w,ie,H);else{const W=Qv(c,ie,"vertex"),Z=Qv(c,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(w,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ce+`
`+W+`
`+Z)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(le===""||me==="")&&(L=!1);L&&(G.diagnostics={runnable:de,programLog:ce,vertexShader:{log:le,prefix:M},fragmentShader:{log:me,prefix:x}})}c.deleteShader(ie),c.deleteShader(H),J=new Nc(c,w),D=yT(c,w)}let J;this.getUniforms=function(){return J===void 0&&P(this),J};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=c.getProgramParameter(w,fT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=ie,this.fragmentShader=H,this}let UT=0;class LT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,c=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new OT(t),i.set(t,s)),s}}class OT{constructor(t){this.id=UT++,this.code=t,this.usedTimes=0}}function PT(l,t,i,s,c,f,h){const p=new E_,g=new LT,m=new Set,_=[],y=c.logarithmicDepthBuffer,S=c.vertexTextures;let E=c.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,G,ce,le){const me=ce.fog,de=le.geometry,L=D.isMeshStandardMaterial?ce.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||L),Z=W&&W.mapping===Ic?W.image.height:null,Me=A[D.type];D.precision!==null&&(E=c.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const be=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=be!==void 0?be.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let _e,q,oe,ye;if(Me){const _t=Ei[Me];_e=_t.vertexShader,q=_t.fragmentShader}else _e=D.vertexShader,q=D.fragmentShader,g.update(D),oe=g.getVertexShaderID(D),ye=g.getFragmentShaderID(D);const Ee=l.getRenderTarget(),He=le.isInstancedMesh===!0,Fe=le.isBatchedMesh===!0,nt=!!D.map,Lt=!!D.matcap,B=!!W,Vt=!!D.aoMap,ut=!!D.lightMap,yt=!!D.bumpMap,Ge=!!D.normalMap,kt=!!D.displacementMap,$e=!!D.emissiveMap,et=!!D.metalnessMap,O=!!D.roughnessMap,T=D.anisotropy>0,ae=D.clearcoat>0,Se=D.dispersion>0,ve=D.iridescence>0,xe=D.sheen>0,We=D.transmission>0,De=T&&!!D.anisotropyMap,Le=ae&&!!D.clearcoatMap,it=ae&&!!D.clearcoatNormalMap,Ae=ae&&!!D.clearcoatRoughnessMap,Oe=ve&&!!D.iridescenceMap,ht=ve&&!!D.iridescenceThicknessMap,Ke=xe&&!!D.sheenColorMap,we=xe&&!!D.sheenRoughnessMap,Ye=!!D.specularMap,Ze=!!D.specularColorMap,zt=!!D.specularIntensityMap,V=We&&!!D.transmissionMap,Re=We&&!!D.thicknessMap,he=!!D.gradientMap,ge=!!D.alphaMap,Ce=D.alphaTest>0,ke=!!D.alphaHash,ot=!!D.extensions;let Pt=za;D.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Pt=l.toneMapping);const an={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:_e,fragmentShader:q,defines:D.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:Fe,batchingColor:Fe&&le._colorsTexture!==null,instancing:He,instancingColor:He&&le.instanceColor!==null,instancingMorph:He&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ee===null?l.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:ja,alphaToCoverage:!!D.alphaToCoverage,map:nt,matcap:Lt,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:Z,aoMap:Vt,lightMap:ut,bumpMap:yt,normalMap:Ge,displacementMap:S&&kt,emissiveMap:$e,normalMapObjectSpace:Ge&&D.normalMapType===Vy,normalMapTangentSpace:Ge&&D.normalMapType===Gy,metalnessMap:et,roughnessMap:O,anisotropy:T,anisotropyMap:De,clearcoat:ae,clearcoatMap:Le,clearcoatNormalMap:it,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:ht,sheen:xe,sheenColorMap:Ke,sheenRoughnessMap:we,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:zt,transmission:We,transmissionMap:V,thicknessMap:Re,gradientMap:he,opaque:D.transparent===!1&&D.blending===Tr&&D.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ce,alphaHash:ke,combine:D.combine,mapUv:nt&&w(D.map.channel),aoMapUv:Vt&&w(D.aoMap.channel),lightMapUv:ut&&w(D.lightMap.channel),bumpMapUv:yt&&w(D.bumpMap.channel),normalMapUv:Ge&&w(D.normalMap.channel),displacementMapUv:kt&&w(D.displacementMap.channel),emissiveMapUv:$e&&w(D.emissiveMap.channel),metalnessMapUv:et&&w(D.metalnessMap.channel),roughnessMapUv:O&&w(D.roughnessMap.channel),anisotropyMapUv:De&&w(D.anisotropyMap.channel),clearcoatMapUv:Le&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:it&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:we&&w(D.sheenRoughnessMap.channel),specularMapUv:Ye&&w(D.specularMap.channel),specularColorMapUv:Ze&&w(D.specularColorMap.channel),specularIntensityMapUv:zt&&w(D.specularIntensityMap.channel),transmissionMapUv:V&&w(D.transmissionMap.channel),thicknessMapUv:Re&&w(D.thicknessMap.channel),alphaMapUv:ge&&w(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ge||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!de.attributes.uv&&(nt||ge),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:le.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:l.shadowMap.enabled&&G.length>0,shadowMapType:l.shadowMap.type,toneMapping:Pt,decodeVideoTexture:nt&&D.map.isVideoTexture===!0&&bt.getTransfer(D.map.colorSpace)===Bt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===bi,flipSided:D.side===zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ot&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&D.extensions.multiDraw===!0||Fe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(j(C,D),N(C,D),C.push(l.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function j(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){p.disableAll(),C.supportsVertexTextures&&p.enable(0),C.instancing&&p.enable(1),C.instancingColor&&p.enable(2),C.instancingMorph&&p.enable(3),C.matcap&&p.enable(4),C.envMap&&p.enable(5),C.normalMapObjectSpace&&p.enable(6),C.normalMapTangentSpace&&p.enable(7),C.clearcoat&&p.enable(8),C.iridescence&&p.enable(9),C.alphaTest&&p.enable(10),C.vertexColors&&p.enable(11),C.vertexAlphas&&p.enable(12),C.vertexUv1s&&p.enable(13),C.vertexUv2s&&p.enable(14),C.vertexUv3s&&p.enable(15),C.vertexTangents&&p.enable(16),C.anisotropy&&p.enable(17),C.alphaHash&&p.enable(18),C.batching&&p.enable(19),C.dispersion&&p.enable(20),C.batchingColor&&p.enable(21),D.push(p.mask),p.disableAll(),C.fog&&p.enable(0),C.useFog&&p.enable(1),C.flatShading&&p.enable(2),C.logarithmicDepthBuffer&&p.enable(3),C.skinning&&p.enable(4),C.morphTargets&&p.enable(5),C.morphNormals&&p.enable(6),C.morphColors&&p.enable(7),C.premultipliedAlpha&&p.enable(8),C.shadowMapEnabled&&p.enable(9),C.doubleSided&&p.enable(10),C.flipSided&&p.enable(11),C.useDepthPacking&&p.enable(12),C.dithering&&p.enable(13),C.transmission&&p.enable(14),C.sheen&&p.enable(15),C.opaque&&p.enable(16),C.pointsUvs&&p.enable(17),C.decodeVideoTexture&&p.enable(18),C.alphaToCoverage&&p.enable(19),D.push(p.mask)}function z(D){const C=A[D.type];let G;if(C){const ce=Ei[C];G=_S.clone(ce.uniforms)}else G=D.uniforms;return G}function ie(D,C){let G;for(let ce=0,le=_.length;ce<le;ce++){const me=_[ce];if(me.cacheKey===C){G=me,++G.usedTimes;break}}return G===void 0&&(G=new DT(l,C,D,f),_.push(G)),G}function H(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function P(D){g.remove(D)}function J(){g.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:z,acquireProgram:ie,releaseProgram:H,releaseShaderCache:P,programs:_,dispose:J}}function zT(){let l=new WeakMap;function t(f){let h=l.get(f);return h===void 0&&(h={},l.set(f,h)),h}function i(f){l.delete(f)}function s(f,h,p){l.get(f)[h]=p}function c(){l=new WeakMap}return{get:t,remove:i,update:s,dispose:c}}function IT(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function n_(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function i_(){const l=[];let t=0;const i=[],s=[],c=[];function f(){t=0,i.length=0,s.length=0,c.length=0}function h(y,S,E,A,w,M){let x=l[t];return x===void 0?(x={id:y.id,object:y,geometry:S,material:E,groupOrder:A,renderOrder:y.renderOrder,z:w,group:M},l[t]=x):(x.id=y.id,x.object=y,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=y.renderOrder,x.z=w,x.group=M),t++,x}function p(y,S,E,A,w,M){const x=h(y,S,E,A,w,M);E.transmission>0?s.push(x):E.transparent===!0?c.push(x):i.push(x)}function g(y,S,E,A,w,M){const x=h(y,S,E,A,w,M);E.transmission>0?s.unshift(x):E.transparent===!0?c.unshift(x):i.unshift(x)}function m(y,S){i.length>1&&i.sort(y||IT),s.length>1&&s.sort(S||n_),c.length>1&&c.sort(S||n_)}function _(){for(let y=t,S=l.length;y<S;y++){const E=l[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:p,unshift:g,finish:_,sort:m}}function jT(){let l=new WeakMap;function t(s,c){const f=l.get(s);let h;return f===void 0?(h=new i_,l.set(s,[h])):c>=f.length?(h=new i_,f.push(h)):h=f[c],h}function i(){l=new WeakMap}return{get:t,dispose:i}}function BT(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new wt};break;case"SpotLight":i={position:new re,direction:new re,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new re,halfWidth:new re,halfHeight:new re};break}return l[t.id]=i,i}}}function FT(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=i,i}}}let HT=0;function GT(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function VT(l){const t=new BT,i=FT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new re);const c=new re,f=new ln,h=new ln;function p(m){let _=0,y=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,A=0,w=0,M=0,x=0,j=0,N=0,z=0,ie=0,H=0,P=0;m.sort(GT);for(let D=0,C=m.length;D<C;D++){const G=m[D],ce=G.color,le=G.intensity,me=G.distance,de=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=ce.r*le,y+=ce.g*le,S+=ce.b*le;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],le);P++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.directionalShadow[E]=Z,s.directionalShadowMap[E]=de,s.directionalShadowMatrix[E]=G.shadow.matrix,j++}s.directional[E]=L,E++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(ce).multiplyScalar(le),L.distance=me,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[w]=L;const W=G.shadow;if(G.map&&(s.spotLightMap[ie]=G.map,ie++,W.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[w]=W.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=de,z++}w++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(ce).multiplyScalar(le),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=L,M++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,s.pointShadow[A]=Z,s.pointShadowMap[A]=de,s.pointShadowMatrix[A]=G.shadow.matrix,N++}s.point[A]=L,A++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar(le),L.groundColor.copy(G.groundColor).multiplyScalar(le),s.hemi[x]=L,x++}}M>0&&(l.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=S;const J=s.hash;(J.directionalLength!==E||J.pointLength!==A||J.spotLength!==w||J.rectAreaLength!==M||J.hemiLength!==x||J.numDirectionalShadows!==j||J.numPointShadows!==N||J.numSpotShadows!==z||J.numSpotMaps!==ie||J.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=j,s.directionalShadowMap.length=j,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=j,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=z+ie-H,s.spotLightMap.length=ie,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=P,J.directionalLength=E,J.pointLength=A,J.spotLength=w,J.rectAreaLength=M,J.hemiLength=x,J.numDirectionalShadows=j,J.numPointShadows=N,J.numSpotShadows=z,J.numSpotMaps=ie,J.numLightProbes=P,s.version=HT++)}function g(m,_){let y=0,S=0,E=0,A=0,w=0;const M=_.matrixWorldInverse;for(let x=0,j=m.length;x<j;x++){const N=m[x];if(N.isDirectionalLight){const z=s.directional[y];z.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(M),y++}else if(N.isSpotLight){const z=s.spot[E];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(M),E++}else if(N.isRectAreaLight){const z=s.rectArea[A];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),h.identity(),f.copy(N.matrixWorld),f.premultiply(M),h.extractRotation(f),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const z=s.point[S];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const z=s.hemi[w];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(M),w++}}}return{setup:p,setupView:g,state:s}}function a_(l){const t=new VT(l),i=[],s=[];function c(_){m.camera=_,i.length=0,s.length=0}function f(_){i.push(_)}function h(_){s.push(_)}function p(){t.setup(i)}function g(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:c,state:m,setupLights:p,setupLightsView:g,pushLight:f,pushShadow:h}}function kT(l){let t=new WeakMap;function i(c,f=0){const h=t.get(c);let p;return h===void 0?(p=new a_(l),t.set(c,[p])):f>=h.length?(p=new a_(l),h.push(p)):p=h[f],p}function s(){t=new WeakMap}return{get:i,dispose:s}}class XT extends Vl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WT extends Vl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
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
}`;function ZT(l,t,i){let s=new D_;const c=new Tt,f=new Tt,h=new dn,p=new XT({depthPacking:Hy}),g=new WT,m={},_=i.maxTextureSize,y={[Ia]:zn,[zn]:Ia,[bi]:bi},S=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:qT,fragmentShader:YT}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ba;A.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ai(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r_;let x=this.type;this.render=function(H,P,J){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=l.getRenderTarget(),C=l.getActiveCubeFace(),G=l.getActiveMipmapLevel(),ce=l.state;ce.setBlending(Pa),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const le=x!==Ki&&this.type===Ki,me=x===Ki&&this.type!==Ki;for(let de=0,L=H.length;de<L;de++){const W=H[de],Z=W.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;c.copy(Z.mapSize);const Me=Z.getFrameExtents();if(c.multiply(Me),f.copy(Z.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/Me.x),c.x=f.x*Me.x,Z.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/Me.y),c.y=f.y*Me.y,Z.mapSize.y=f.y)),Z.map===null||le===!0||me===!0){const U=this.type!==Ki?{minFilter:ai,magFilter:ai}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Es(c.x,c.y,U),Z.map.texture.name=W.name+".shadowMap",Z.camera.updateProjectionMatrix()}l.setRenderTarget(Z.map),l.clear();const be=Z.getViewportCount();for(let U=0;U<be;U++){const ne=Z.getViewport(U);h.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),ce.viewport(h),Z.updateMatrices(W,U),s=Z.getFrustum(),z(P,J,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===Ki&&j(Z,J),Z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,l.setRenderTarget(D,C,G)};function j(H,P){const J=t.update(w);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Es(c.x,c.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,l.setRenderTarget(H.mapPass),l.clear(),l.renderBufferDirect(P,null,J,S,w,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,l.setRenderTarget(H.map),l.clear(),l.renderBufferDirect(P,null,J,E,w,null)}function N(H,P,J,D){let C=null;const G=J.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=J.isPointLight===!0?g:p,l.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ce=C.uuid,le=P.uuid;let me=m[ce];me===void 0&&(me={},m[ce]=me);let de=me[le];de===void 0&&(de=C.clone(),me[le]=de,P.addEventListener("dispose",ie)),C=de}if(C.visible=P.visible,C.wireframe=P.wireframe,D===Ki?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:y[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=l.properties.get(C);ce.light=J}return C}function z(H,P,J,D,C){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Ki)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,H.matrixWorld);const le=t.update(H),me=H.material;if(Array.isArray(me)){const de=le.groups;for(let L=0,W=de.length;L<W;L++){const Z=de[L],Me=me[Z.materialIndex];if(Me&&Me.visible){const be=N(H,Me,D,C);H.onBeforeShadow(l,H,P,J,le,be,Z),l.renderBufferDirect(J,null,le,be,H,Z),H.onAfterShadow(l,H,P,J,le,be,Z)}}}else if(me.visible){const de=N(H,me,D,C);H.onBeforeShadow(l,H,P,J,le,de,null),l.renderBufferDirect(J,null,le,de,H,null),H.onAfterShadow(l,H,P,J,le,de,null)}}const ce=H.children;for(let le=0,me=ce.length;le<me;le++)z(ce[le],P,J,D,C)}function ie(H){H.target.removeEventListener("dispose",ie);for(const J in m){const D=m[J],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function KT(l){function t(){let V=!1;const Re=new dn;let he=null;const ge=new dn(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!V&&(l.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){V=Ce},setClear:function(Ce,ke,ot,Pt,an){an===!0&&(Ce*=Pt,ke*=Pt,ot*=Pt),Re.set(Ce,ke,ot,Pt),ge.equals(Re)===!1&&(l.clearColor(Ce,ke,ot,Pt),ge.copy(Re))},reset:function(){V=!1,he=null,ge.set(-1,0,0,0)}}}function i(){let V=!1,Re=null,he=null,ge=null;return{setTest:function(Ce){Ce?ye(l.DEPTH_TEST):Ee(l.DEPTH_TEST)},setMask:function(Ce){Re!==Ce&&!V&&(l.depthMask(Ce),Re=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case Ey:l.depthFunc(l.NEVER);break;case by:l.depthFunc(l.ALWAYS);break;case Ty:l.depthFunc(l.LESS);break;case Dc:l.depthFunc(l.LEQUAL);break;case Ay:l.depthFunc(l.EQUAL);break;case Ry:l.depthFunc(l.GEQUAL);break;case Cy:l.depthFunc(l.GREATER);break;case wy:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}he=Ce}},setLocked:function(Ce){V=Ce},setClear:function(Ce){ge!==Ce&&(l.clearDepth(Ce),ge=Ce)},reset:function(){V=!1,Re=null,he=null,ge=null}}}function s(){let V=!1,Re=null,he=null,ge=null,Ce=null,ke=null,ot=null,Pt=null,an=null;return{setTest:function(_t){V||(_t?ye(l.STENCIL_TEST):Ee(l.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!V&&(l.stencilMask(_t),Re=_t)},setFunc:function(_t,jn,vn){(he!==_t||ge!==jn||Ce!==vn)&&(l.stencilFunc(_t,jn,vn),he=_t,ge=jn,Ce=vn)},setOp:function(_t,jn,vn){(ke!==_t||ot!==jn||Pt!==vn)&&(l.stencilOp(_t,jn,vn),ke=_t,ot=jn,Pt=vn)},setLocked:function(_t){V=_t},setClear:function(_t){an!==_t&&(l.clearStencil(_t),an=_t)},reset:function(){V=!1,Re=null,he=null,ge=null,Ce=null,ke=null,ot=null,Pt=null,an=null}}}const c=new t,f=new i,h=new s,p=new WeakMap,g=new WeakMap;let m={},_={},y=new WeakMap,S=[],E=null,A=!1,w=null,M=null,x=null,j=null,N=null,z=null,ie=null,H=new wt(0,0,0),P=0,J=!1,D=null,C=null,G=null,ce=null,le=null;const me=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,L=0;const W=l.getParameter(l.VERSION);W.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(W)[1]),de=L>=1):W.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),de=L>=2);let Z=null,Me={};const be=l.getParameter(l.SCISSOR_BOX),U=l.getParameter(l.VIEWPORT),ne=new dn().fromArray(be),_e=new dn().fromArray(U);function q(V,Re,he,ge){const Ce=new Uint8Array(4),ke=l.createTexture();l.bindTexture(V,ke),l.texParameteri(V,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(V,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let ot=0;ot<he;ot++)V===l.TEXTURE_3D||V===l.TEXTURE_2D_ARRAY?l.texImage3D(Re,0,l.RGBA,1,1,ge,0,l.RGBA,l.UNSIGNED_BYTE,Ce):l.texImage2D(Re+ot,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Ce);return ke}const oe={};oe[l.TEXTURE_2D]=q(l.TEXTURE_2D,l.TEXTURE_2D,1),oe[l.TEXTURE_CUBE_MAP]=q(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[l.TEXTURE_2D_ARRAY]=q(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),oe[l.TEXTURE_3D]=q(l.TEXTURE_3D,l.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ye(l.DEPTH_TEST),f.setFunc(Dc),yt(!1),Ge(uv),ye(l.CULL_FACE),Vt(Pa);function ye(V){m[V]!==!0&&(l.enable(V),m[V]=!0)}function Ee(V){m[V]!==!1&&(l.disable(V),m[V]=!1)}function He(V,Re){return _[V]!==Re?(l.bindFramebuffer(V,Re),_[V]=Re,V===l.DRAW_FRAMEBUFFER&&(_[l.FRAMEBUFFER]=Re),V===l.FRAMEBUFFER&&(_[l.DRAW_FRAMEBUFFER]=Re),!0):!1}function Fe(V,Re){let he=S,ge=!1;if(V){he=y.get(Re),he===void 0&&(he=[],y.set(Re,he));const Ce=V.textures;if(he.length!==Ce.length||he[0]!==l.COLOR_ATTACHMENT0){for(let ke=0,ot=Ce.length;ke<ot;ke++)he[ke]=l.COLOR_ATTACHMENT0+ke;he.length=Ce.length,ge=!0}}else he[0]!==l.BACK&&(he[0]=l.BACK,ge=!0);ge&&l.drawBuffers(he)}function nt(V){return E!==V?(l.useProgram(V),E=V,!0):!1}const Lt={[vs]:l.FUNC_ADD,[ry]:l.FUNC_SUBTRACT,[ly]:l.FUNC_REVERSE_SUBTRACT};Lt[oy]=l.MIN,Lt[cy]=l.MAX;const B={[uy]:l.ZERO,[fy]:l.ONE,[dy]:l.SRC_COLOR,[Rd]:l.SRC_ALPHA,[_y]:l.SRC_ALPHA_SATURATE,[gy]:l.DST_COLOR,[py]:l.DST_ALPHA,[hy]:l.ONE_MINUS_SRC_COLOR,[Cd]:l.ONE_MINUS_SRC_ALPHA,[vy]:l.ONE_MINUS_DST_COLOR,[my]:l.ONE_MINUS_DST_ALPHA,[xy]:l.CONSTANT_COLOR,[yy]:l.ONE_MINUS_CONSTANT_COLOR,[Sy]:l.CONSTANT_ALPHA,[My]:l.ONE_MINUS_CONSTANT_ALPHA};function Vt(V,Re,he,ge,Ce,ke,ot,Pt,an,_t){if(V===Pa){A===!0&&(Ee(l.BLEND),A=!1);return}if(A===!1&&(ye(l.BLEND),A=!0),V!==sy){if(V!==w||_t!==J){if((M!==vs||N!==vs)&&(l.blendEquation(l.FUNC_ADD),M=vs,N=vs),_t)switch(V){case Tr:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case fv:l.blendFunc(l.ONE,l.ONE);break;case dv:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case hv:l.blendFuncSeparate(l.ZERO,l.SRC_COLOR,l.ZERO,l.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Tr:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case fv:l.blendFunc(l.SRC_ALPHA,l.ONE);break;case dv:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case hv:l.blendFunc(l.ZERO,l.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}x=null,j=null,z=null,ie=null,H.set(0,0,0),P=0,w=V,J=_t}return}Ce=Ce||Re,ke=ke||he,ot=ot||ge,(Re!==M||Ce!==N)&&(l.blendEquationSeparate(Lt[Re],Lt[Ce]),M=Re,N=Ce),(he!==x||ge!==j||ke!==z||ot!==ie)&&(l.blendFuncSeparate(B[he],B[ge],B[ke],B[ot]),x=he,j=ge,z=ke,ie=ot),(Pt.equals(H)===!1||an!==P)&&(l.blendColor(Pt.r,Pt.g,Pt.b,an),H.copy(Pt),P=an),w=V,J=!1}function ut(V,Re){V.side===bi?Ee(l.CULL_FACE):ye(l.CULL_FACE);let he=V.side===zn;Re&&(he=!he),yt(he),V.blending===Tr&&V.transparent===!1?Vt(Pa):Vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const ge=V.stencilWrite;h.setTest(ge),ge&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),$e(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(l.SAMPLE_ALPHA_TO_COVERAGE):Ee(l.SAMPLE_ALPHA_TO_COVERAGE)}function yt(V){D!==V&&(V?l.frontFace(l.CW):l.frontFace(l.CCW),D=V)}function Ge(V){V!==ny?(ye(l.CULL_FACE),V!==C&&(V===uv?l.cullFace(l.BACK):V===iy?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):Ee(l.CULL_FACE),C=V}function kt(V){V!==G&&(de&&l.lineWidth(V),G=V)}function $e(V,Re,he){V?(ye(l.POLYGON_OFFSET_FILL),(ce!==Re||le!==he)&&(l.polygonOffset(Re,he),ce=Re,le=he)):Ee(l.POLYGON_OFFSET_FILL)}function et(V){V?ye(l.SCISSOR_TEST):Ee(l.SCISSOR_TEST)}function O(V){V===void 0&&(V=l.TEXTURE0+me-1),Z!==V&&(l.activeTexture(V),Z=V)}function T(V,Re,he){he===void 0&&(Z===null?he=l.TEXTURE0+me-1:he=Z);let ge=Me[he];ge===void 0&&(ge={type:void 0,texture:void 0},Me[he]=ge),(ge.type!==V||ge.texture!==Re)&&(Z!==he&&(l.activeTexture(he),Z=he),l.bindTexture(V,Re||oe[V]),ge.type=V,ge.texture=Re)}function ae(){const V=Me[Z];V!==void 0&&V.type!==void 0&&(l.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Se(){try{l.compressedTexImage2D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{l.compressedTexImage3D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{l.texSubImage2D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{l.texSubImage3D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{l.texStorage2D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{l.texStorage3D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{l.texImage2D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{l.texImage3D.apply(l,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(V){ne.equals(V)===!1&&(l.scissor(V.x,V.y,V.z,V.w),ne.copy(V))}function we(V){_e.equals(V)===!1&&(l.viewport(V.x,V.y,V.z,V.w),_e.copy(V))}function Ye(V,Re){let he=g.get(Re);he===void 0&&(he=new WeakMap,g.set(Re,he));let ge=he.get(V);ge===void 0&&(ge=l.getUniformBlockIndex(Re,V.name),he.set(V,ge))}function Ze(V,Re){const ge=g.get(Re).get(V);p.get(Re)!==ge&&(l.uniformBlockBinding(Re,ge,V.__bindingPointIndex),p.set(Re,ge))}function zt(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),m={},Z=null,Me={},_={},y=new WeakMap,S=[],E=null,A=!1,w=null,M=null,x=null,j=null,N=null,z=null,ie=null,H=new wt(0,0,0),P=0,J=!1,D=null,C=null,G=null,ce=null,le=null,ne.set(0,0,l.canvas.width,l.canvas.height),_e.set(0,0,l.canvas.width,l.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ye,disable:Ee,bindFramebuffer:He,drawBuffers:Fe,useProgram:nt,setBlending:Vt,setMaterial:ut,setFlipSided:yt,setCullFace:Ge,setLineWidth:kt,setPolygonOffset:$e,setScissorTest:et,activeTexture:O,bindTexture:T,unbindTexture:ae,compressedTexImage2D:Se,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:ht,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:it,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:We,compressedTexSubImage2D:De,compressedTexSubImage3D:Le,scissor:Ke,viewport:we,reset:zt}}function s_(l,t,i,s){const c=QT(s);switch(i){case d_:return l*t;case p_:return l*t;case m_:return l*t*2;case g_:return l*t/c.components*c.byteLength;case dh:return l*t/c.components*c.byteLength;case v_:return l*t*2/c.components*c.byteLength;case hh:return l*t*2/c.components*c.byteLength;case h_:return l*t*3/c.components*c.byteLength;case mi:return l*t*4/c.components*c.byteLength;case ph:return l*t*4/c.components*c.byteLength;case Tc:case Ac:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Cc:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Od:case zd:return Math.max(l,16)*Math.max(t,8)/4;case Ld:case Pd:return Math.max(l,8)*Math.max(t,8)/2;case Id:case jd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Bd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case kd:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case qd:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case $d:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case wc:case eh:case th:return Math.ceil(l/4)*Math.ceil(t/4)*16;case __:case nh:return Math.ceil(l/4)*Math.ceil(t/4)*8;case ih:case ah:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QT(l){switch(l){case $i:case c_:return{byteLength:1,components:1};case jl:case u_:case Bl:return{byteLength:2,components:1};case uh:case fh:return{byteLength:2,components:4};case Ms:case ch:case Qi:return{byteLength:4,components:1};case f_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}function JT(l,t,i,s,c,f,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,_=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(O,T){return E?new OffscreenCanvas(O,T):zc("canvas")}function w(O,T,ae){let Se=1;const ve=et(O);if((ve.width>ae||ve.height>ae)&&(Se=ae/Math.max(ve.width,ve.height)),Se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xe=Math.floor(Se*ve.width),We=Math.floor(Se*ve.height);y===void 0&&(y=A(xe,We));const De=T?A(xe,We):y;return De.width=xe,De.height=We,De.getContext("2d").drawImage(O,0,0,xe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+xe+"x"+We+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function M(O){return O.generateMipmaps&&O.minFilter!==ai&&O.minFilter!==pi}function x(O){l.generateMipmap(O)}function j(O,T,ae,Se,ve=!1){if(O!==null){if(l[O]!==void 0)return l[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xe=T;if(T===l.RED&&(ae===l.FLOAT&&(xe=l.R32F),ae===l.HALF_FLOAT&&(xe=l.R16F),ae===l.UNSIGNED_BYTE&&(xe=l.R8)),T===l.RED_INTEGER&&(ae===l.UNSIGNED_BYTE&&(xe=l.R8UI),ae===l.UNSIGNED_SHORT&&(xe=l.R16UI),ae===l.UNSIGNED_INT&&(xe=l.R32UI),ae===l.BYTE&&(xe=l.R8I),ae===l.SHORT&&(xe=l.R16I),ae===l.INT&&(xe=l.R32I)),T===l.RG&&(ae===l.FLOAT&&(xe=l.RG32F),ae===l.HALF_FLOAT&&(xe=l.RG16F),ae===l.UNSIGNED_BYTE&&(xe=l.RG8)),T===l.RG_INTEGER&&(ae===l.UNSIGNED_BYTE&&(xe=l.RG8UI),ae===l.UNSIGNED_SHORT&&(xe=l.RG16UI),ae===l.UNSIGNED_INT&&(xe=l.RG32UI),ae===l.BYTE&&(xe=l.RG8I),ae===l.SHORT&&(xe=l.RG16I),ae===l.INT&&(xe=l.RG32I)),T===l.RGB&&ae===l.UNSIGNED_INT_5_9_9_9_REV&&(xe=l.RGB9_E5),T===l.RGBA){const We=ve?Uc:bt.getTransfer(Se);ae===l.FLOAT&&(xe=l.RGBA32F),ae===l.HALF_FLOAT&&(xe=l.RGBA16F),ae===l.UNSIGNED_BYTE&&(xe=We===Bt?l.SRGB8_ALPHA8:l.RGBA8),ae===l.UNSIGNED_SHORT_4_4_4_4&&(xe=l.RGBA4),ae===l.UNSIGNED_SHORT_5_5_5_1&&(xe=l.RGB5_A1)}return(xe===l.R16F||xe===l.R32F||xe===l.RG16F||xe===l.RG32F||xe===l.RGBA16F||xe===l.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function N(O,T){let ae;return O?T===null||T===Ms||T===Nr?ae=l.DEPTH24_STENCIL8:T===Qi?ae=l.DEPTH32F_STENCIL8:T===jl&&(ae=l.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===Nr?ae=l.DEPTH_COMPONENT24:T===Qi?ae=l.DEPTH_COMPONENT32F:T===jl&&(ae=l.DEPTH_COMPONENT16),ae}function z(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==ai&&O.minFilter!==pi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function ie(O){const T=O.target;T.removeEventListener("dispose",ie),P(T),T.isVideoTexture&&_.delete(T)}function H(O){const T=O.target;T.removeEventListener("dispose",H),D(T)}function P(O){const T=s.get(O);if(T.__webglInit===void 0)return;const ae=O.source,Se=S.get(ae);if(Se){const ve=Se[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&J(O),Object.keys(Se).length===0&&S.delete(ae)}s.remove(O)}function J(O){const T=s.get(O);l.deleteTexture(T.__webglTexture);const ae=O.source,Se=S.get(ae);delete Se[T.__cacheKey],h.memory.textures--}function D(O){const T=s.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(T.__webglFramebuffer[Se]))for(let ve=0;ve<T.__webglFramebuffer[Se].length;ve++)l.deleteFramebuffer(T.__webglFramebuffer[Se][ve]);else l.deleteFramebuffer(T.__webglFramebuffer[Se]);T.__webglDepthbuffer&&l.deleteRenderbuffer(T.__webglDepthbuffer[Se])}else{if(Array.isArray(T.__webglFramebuffer))for(let Se=0;Se<T.__webglFramebuffer.length;Se++)l.deleteFramebuffer(T.__webglFramebuffer[Se]);else l.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&l.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&l.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Se=0;Se<T.__webglColorRenderbuffer.length;Se++)T.__webglColorRenderbuffer[Se]&&l.deleteRenderbuffer(T.__webglColorRenderbuffer[Se]);T.__webglDepthRenderbuffer&&l.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ae=O.textures;for(let Se=0,ve=ae.length;Se<ve;Se++){const xe=s.get(ae[Se]);xe.__webglTexture&&(l.deleteTexture(xe.__webglTexture),h.memory.textures--),s.remove(ae[Se])}s.remove(O)}let C=0;function G(){C=0}function ce(){const O=C;return O>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+c.maxTextures),C+=1,O}function le(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function me(O,T){const ae=s.get(O);if(O.isVideoTexture&&kt(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const Se=O.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(ae,O,T);return}}i.bindTexture(l.TEXTURE_2D,ae.__webglTexture,l.TEXTURE0+T)}function de(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){_e(ae,O,T);return}i.bindTexture(l.TEXTURE_2D_ARRAY,ae.__webglTexture,l.TEXTURE0+T)}function L(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){_e(ae,O,T);return}i.bindTexture(l.TEXTURE_3D,ae.__webglTexture,l.TEXTURE0+T)}function W(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){q(ae,O,T);return}i.bindTexture(l.TEXTURE_CUBE_MAP,ae.__webglTexture,l.TEXTURE0+T)}const Z={[Dd]:l.REPEAT,[xs]:l.CLAMP_TO_EDGE,[Ud]:l.MIRRORED_REPEAT},Me={[ai]:l.NEAREST,[By]:l.NEAREST_MIPMAP_NEAREST,[nc]:l.NEAREST_MIPMAP_LINEAR,[pi]:l.LINEAR,[$f]:l.LINEAR_MIPMAP_NEAREST,[ys]:l.LINEAR_MIPMAP_LINEAR},be={[ky]:l.NEVER,[Ky]:l.ALWAYS,[Xy]:l.LESS,[x_]:l.LEQUAL,[Wy]:l.EQUAL,[Zy]:l.GEQUAL,[qy]:l.GREATER,[Yy]:l.NOTEQUAL};function U(O,T){if(T.type===Qi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===pi||T.magFilter===$f||T.magFilter===nc||T.magFilter===ys||T.minFilter===pi||T.minFilter===$f||T.minFilter===nc||T.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(O,l.TEXTURE_WRAP_S,Z[T.wrapS]),l.texParameteri(O,l.TEXTURE_WRAP_T,Z[T.wrapT]),(O===l.TEXTURE_3D||O===l.TEXTURE_2D_ARRAY)&&l.texParameteri(O,l.TEXTURE_WRAP_R,Z[T.wrapR]),l.texParameteri(O,l.TEXTURE_MAG_FILTER,Me[T.magFilter]),l.texParameteri(O,l.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(l.texParameteri(O,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(O,l.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==nc&&T.minFilter!==ys||T.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ae=t.get("EXT_texture_filter_anisotropic");l.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ne(O,T){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",ie));const Se=T.source;let ve=S.get(Se);ve===void 0&&(ve={},S.set(Se,ve));const xe=le(T);if(xe!==O.__cacheKey){ve[xe]===void 0&&(ve[xe]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,ae=!0),ve[xe].usedTimes++;const We=ve[O.__cacheKey];We!==void 0&&(ve[O.__cacheKey].usedTimes--,We.usedTimes===0&&J(T)),O.__cacheKey=xe,O.__webglTexture=ve[xe].texture}return ae}function _e(O,T,ae){let Se=l.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Se=l.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Se=l.TEXTURE_3D);const ve=ne(O,T),xe=T.source;i.bindTexture(Se,O.__webglTexture,l.TEXTURE0+ae);const We=s.get(xe);if(xe.version!==We.__version||ve===!0){i.activeTexture(l.TEXTURE0+ae);const De=bt.getPrimaries(bt.workingColorSpace),Le=T.colorSpace===Oa?null:bt.getPrimaries(T.colorSpace),it=T.colorSpace===Oa||De===Le?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,T.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,T.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Ae=w(T.image,!1,c.maxTextureSize);Ae=$e(T,Ae);const Oe=f.convert(T.format,T.colorSpace),ht=f.convert(T.type);let Ke=j(T.internalFormat,Oe,ht,T.colorSpace,T.isVideoTexture);U(Se,T);let we;const Ye=T.mipmaps,Ze=T.isVideoTexture!==!0,zt=We.__version===void 0||ve===!0,V=xe.dataReady,Re=z(T,Ae);if(T.isDepthTexture)Ke=N(T.format===Dr,T.type),zt&&(Ze?i.texStorage2D(l.TEXTURE_2D,1,Ke,Ae.width,Ae.height):i.texImage2D(l.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Oe,ht,null));else if(T.isDataTexture)if(Ye.length>0){Ze&&zt&&i.texStorage2D(l.TEXTURE_2D,Re,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],Ze?V&&i.texSubImage2D(l.TEXTURE_2D,he,0,0,we.width,we.height,Oe,ht,we.data):i.texImage2D(l.TEXTURE_2D,he,Ke,we.width,we.height,0,Oe,ht,we.data);T.generateMipmaps=!1}else Ze?(zt&&i.texStorage2D(l.TEXTURE_2D,Re,Ke,Ae.width,Ae.height),V&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Oe,ht,Ae.data)):i.texImage2D(l.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Oe,ht,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&zt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Re,Ke,Ye[0].width,Ye[0].height,Ae.depth);for(let he=0,ge=Ye.length;he<ge;he++)if(we=Ye[he],T.format!==mi)if(Oe!==null)if(Ze){if(V)if(T.layerUpdates.size>0){const Ce=s_(we.width,we.height,T.format,T.type);for(const ke of T.layerUpdates){const ot=we.data.subarray(ke*Ce/we.data.BYTES_PER_ELEMENT,(ke+1)*Ce/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,he,0,0,ke,we.width,we.height,1,Oe,ot,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Ae.depth,Oe,we.data,0,0)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,he,Ke,we.width,we.height,Ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?V&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Ae.depth,Oe,ht,we.data):i.texImage3D(l.TEXTURE_2D_ARRAY,he,Ke,we.width,we.height,Ae.depth,0,Oe,ht,we.data)}else{Ze&&zt&&i.texStorage2D(l.TEXTURE_2D,Re,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],T.format!==mi?Oe!==null?Ze?V&&i.compressedTexSubImage2D(l.TEXTURE_2D,he,0,0,we.width,we.height,Oe,we.data):i.compressedTexImage2D(l.TEXTURE_2D,he,Ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?V&&i.texSubImage2D(l.TEXTURE_2D,he,0,0,we.width,we.height,Oe,ht,we.data):i.texImage2D(l.TEXTURE_2D,he,Ke,we.width,we.height,0,Oe,ht,we.data)}else if(T.isDataArrayTexture)if(Ze){if(zt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Re,Ke,Ae.width,Ae.height,Ae.depth),V)if(T.layerUpdates.size>0){const he=s_(Ae.width,Ae.height,T.format,T.type);for(const ge of T.layerUpdates){const Ce=Ae.data.subarray(ge*he/Ae.data.BYTES_PER_ELEMENT,(ge+1)*he/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Oe,ht,Ce)}T.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,ht,Ae.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,Ke,Ae.width,Ae.height,Ae.depth,0,Oe,ht,Ae.data);else if(T.isData3DTexture)Ze?(zt&&i.texStorage3D(l.TEXTURE_3D,Re,Ke,Ae.width,Ae.height,Ae.depth),V&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,ht,Ae.data)):i.texImage3D(l.TEXTURE_3D,0,Ke,Ae.width,Ae.height,Ae.depth,0,Oe,ht,Ae.data);else if(T.isFramebufferTexture){if(zt)if(Ze)i.texStorage2D(l.TEXTURE_2D,Re,Ke,Ae.width,Ae.height);else{let he=Ae.width,ge=Ae.height;for(let Ce=0;Ce<Re;Ce++)i.texImage2D(l.TEXTURE_2D,Ce,Ke,he,ge,0,Oe,ht,null),he>>=1,ge>>=1}}else if(Ye.length>0){if(Ze&&zt){const he=et(Ye[0]);i.texStorage2D(l.TEXTURE_2D,Re,Ke,he.width,he.height)}for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],Ze?V&&i.texSubImage2D(l.TEXTURE_2D,he,0,0,Oe,ht,we):i.texImage2D(l.TEXTURE_2D,he,Ke,Oe,ht,we);T.generateMipmaps=!1}else if(Ze){if(zt){const he=et(Ae);i.texStorage2D(l.TEXTURE_2D,Re,Ke,he.width,he.height)}V&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Oe,ht,Ae)}else i.texImage2D(l.TEXTURE_2D,0,Ke,Oe,ht,Ae);M(T)&&x(Se),We.__version=xe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function q(O,T,ae){if(T.image.length!==6)return;const Se=ne(O,T),ve=T.source;i.bindTexture(l.TEXTURE_CUBE_MAP,O.__webglTexture,l.TEXTURE0+ae);const xe=s.get(ve);if(ve.version!==xe.__version||Se===!0){i.activeTexture(l.TEXTURE0+ae);const We=bt.getPrimaries(bt.workingColorSpace),De=T.colorSpace===Oa?null:bt.getPrimaries(T.colorSpace),Le=T.colorSpace===Oa||We===De?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,T.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,T.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!it&&!Ae?Oe[ge]=w(T.image[ge],!0,c.maxCubemapSize):Oe[ge]=Ae?T.image[ge].image:T.image[ge],Oe[ge]=$e(T,Oe[ge]);const ht=Oe[0],Ke=f.convert(T.format,T.colorSpace),we=f.convert(T.type),Ye=j(T.internalFormat,Ke,we,T.colorSpace),Ze=T.isVideoTexture!==!0,zt=xe.__version===void 0||Se===!0,V=ve.dataReady;let Re=z(T,ht);U(l.TEXTURE_CUBE_MAP,T);let he;if(it){Ze&&zt&&i.texStorage2D(l.TEXTURE_CUBE_MAP,Re,Ye,ht.width,ht.height);for(let ge=0;ge<6;ge++){he=Oe[ge].mipmaps;for(let Ce=0;Ce<he.length;Ce++){const ke=he[Ce];T.format!==mi?Ke!==null?Ze?V&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,ke.width,ke.height,Ke,ke.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,Ye,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?V&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,ke.width,ke.height,Ke,we,ke.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,Ye,ke.width,ke.height,0,Ke,we,ke.data)}}}else{if(he=T.mipmaps,Ze&&zt){he.length>0&&Re++;const ge=et(Oe[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,Re,Ye,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){Ze?V&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,Ke,we,Oe[ge].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Oe[ge].width,Oe[ge].height,0,Ke,we,Oe[ge].data);for(let Ce=0;Ce<he.length;Ce++){const ot=he[Ce].image[ge].image;Ze?V&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,ot.width,ot.height,Ke,we,ot.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,Ye,ot.width,ot.height,0,Ke,we,ot.data)}}else{Ze?V&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,we,Oe[ge]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Ke,we,Oe[ge]);for(let Ce=0;Ce<he.length;Ce++){const ke=he[Ce];Ze?V&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,Ke,we,ke.image[ge]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,Ye,Ke,we,ke.image[ge])}}}M(T)&&x(l.TEXTURE_CUBE_MAP),xe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function oe(O,T,ae,Se,ve,xe){const We=f.convert(ae.format,ae.colorSpace),De=f.convert(ae.type),Le=j(ae.internalFormat,We,De,ae.colorSpace);if(!s.get(T).__hasExternalTextures){const Ae=Math.max(1,T.width>>xe),Oe=Math.max(1,T.height>>xe);ve===l.TEXTURE_3D||ve===l.TEXTURE_2D_ARRAY?i.texImage3D(ve,xe,Le,Ae,Oe,T.depth,0,We,De,null):i.texImage2D(ve,xe,Le,Ae,Oe,0,We,De,null)}i.bindFramebuffer(l.FRAMEBUFFER,O),Ge(T)?p.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Se,ve,s.get(ae).__webglTexture,0,yt(T)):(ve===l.TEXTURE_2D||ve>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,Se,ve,s.get(ae).__webglTexture,xe),i.bindFramebuffer(l.FRAMEBUFFER,null)}function ye(O,T,ae){if(l.bindRenderbuffer(l.RENDERBUFFER,O),T.depthBuffer){const Se=T.depthTexture,ve=Se&&Se.isDepthTexture?Se.type:null,xe=N(T.stencilBuffer,ve),We=T.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,De=yt(T);Ge(T)?p.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,De,xe,T.width,T.height):ae?l.renderbufferStorageMultisample(l.RENDERBUFFER,De,xe,T.width,T.height):l.renderbufferStorage(l.RENDERBUFFER,xe,T.width,T.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,We,l.RENDERBUFFER,O)}else{const Se=T.textures;for(let ve=0;ve<Se.length;ve++){const xe=Se[ve],We=f.convert(xe.format,xe.colorSpace),De=f.convert(xe.type),Le=j(xe.internalFormat,We,De,xe.colorSpace),it=yt(T);ae&&Ge(T)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,it,Le,T.width,T.height):Ge(T)?p.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,it,Le,T.width,T.height):l.renderbufferStorage(l.RENDERBUFFER,Le,T.width,T.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ee(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(l.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Se=s.get(T.depthTexture).__webglTexture,ve=yt(T);if(T.depthTexture.format===Ar)Ge(T)?p.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,Se,0,ve):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,Se,0);else if(T.depthTexture.format===Dr)Ge(T)?p.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,Se,0,ve):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function He(O){const T=s.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ee(T.__webglFramebuffer,O)}else if(ae){T.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)i.bindFramebuffer(l.FRAMEBUFFER,T.__webglFramebuffer[Se]),T.__webglDepthbuffer[Se]=l.createRenderbuffer(),ye(T.__webglDepthbuffer[Se],O,!1)}else i.bindFramebuffer(l.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=l.createRenderbuffer(),ye(T.__webglDepthbuffer,O,!1);i.bindFramebuffer(l.FRAMEBUFFER,null)}function Fe(O,T,ae){const Se=s.get(O);T!==void 0&&oe(Se.__webglFramebuffer,O,O.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),ae!==void 0&&He(O)}function nt(O){const T=O.texture,ae=s.get(O),Se=s.get(T);O.addEventListener("dispose",H);const ve=O.textures,xe=O.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(Se.__webglTexture===void 0&&(Se.__webglTexture=l.createTexture()),Se.__version=T.version,h.memory.textures++),xe){ae.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer[De]=[];for(let Le=0;Le<T.mipmaps.length;Le++)ae.__webglFramebuffer[De][Le]=l.createFramebuffer()}else ae.__webglFramebuffer[De]=l.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)ae.__webglFramebuffer[De]=l.createFramebuffer()}else ae.__webglFramebuffer=l.createFramebuffer();if(We)for(let De=0,Le=ve.length;De<Le;De++){const it=s.get(ve[De]);it.__webglTexture===void 0&&(it.__webglTexture=l.createTexture(),h.memory.textures++)}if(O.samples>0&&Ge(O)===!1){ae.__webglMultisampledFramebuffer=l.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let De=0;De<ve.length;De++){const Le=ve[De];ae.__webglColorRenderbuffer[De]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,ae.__webglColorRenderbuffer[De]);const it=f.convert(Le.format,Le.colorSpace),Ae=f.convert(Le.type),Oe=j(Le.internalFormat,it,Ae,Le.colorSpace,O.isXRRenderTarget===!0),ht=yt(O);l.renderbufferStorageMultisample(l.RENDERBUFFER,ht,Oe,O.width,O.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.RENDERBUFFER,ae.__webglColorRenderbuffer[De])}l.bindRenderbuffer(l.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=l.createRenderbuffer(),ye(ae.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(xe){i.bindTexture(l.TEXTURE_CUBE_MAP,Se.__webglTexture),U(l.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)oe(ae.__webglFramebuffer[De][Le],O,T,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le);else oe(ae.__webglFramebuffer[De],O,T,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(T)&&x(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Le=ve.length;De<Le;De++){const it=ve[De],Ae=s.get(it);i.bindTexture(l.TEXTURE_2D,Ae.__webglTexture),U(l.TEXTURE_2D,it),oe(ae.__webglFramebuffer,O,it,l.COLOR_ATTACHMENT0+De,l.TEXTURE_2D,0),M(it)&&x(l.TEXTURE_2D)}i.unbindTexture()}else{let De=l.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(De,Se.__webglTexture),U(De,T),T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)oe(ae.__webglFramebuffer[Le],O,T,l.COLOR_ATTACHMENT0,De,Le);else oe(ae.__webglFramebuffer,O,T,l.COLOR_ATTACHMENT0,De,0);M(T)&&x(De),i.unbindTexture()}O.depthBuffer&&He(O)}function Lt(O){const T=O.textures;for(let ae=0,Se=T.length;ae<Se;ae++){const ve=T[ae];if(M(ve)){const xe=O.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:l.TEXTURE_2D,We=s.get(ve).__webglTexture;i.bindTexture(xe,We),x(xe),i.unbindTexture()}}}const B=[],Vt=[];function ut(O){if(O.samples>0){if(Ge(O)===!1){const T=O.textures,ae=O.width,Se=O.height;let ve=l.COLOR_BUFFER_BIT;const xe=O.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,We=s.get(O),De=T.length>1;if(De)for(let Le=0;Le<T.length;Le++)i.bindFramebuffer(l.FRAMEBUFFER,We.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,We.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=l.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=l.STENCIL_BUFFER_BIT)),De){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,it,0)}l.blitFramebuffer(0,0,ae,Se,0,0,ae,Se,ve,l.NEAREST),g===!0&&(B.length=0,Vt.length=0,B.push(l.COLOR_ATTACHMENT0+Le),O.depthBuffer&&O.resolveDepthBuffer===!1&&(B.push(xe),Vt.push(xe),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Vt)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),De)for(let Le=0;Le<T.length;Le++){i.bindFramebuffer(l.FRAMEBUFFER,We.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,We.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.TEXTURE_2D,it,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&g){const T=O.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[T])}}}function yt(O){return Math.min(c.maxSamples,O.samples)}function Ge(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(O){const T=h.render.frame;_.get(O)!==T&&(_.set(O,T),O.update())}function $e(O,T){const ae=O.colorSpace,Se=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==ja&&ae!==Oa&&(bt.getTransfer(ae)===Bt?(Se!==mi||ve!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),T}function et(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=G,this.setTexture2D=me,this.setTexture2DArray=de,this.setTexture3D=L,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ge}function $T(l,t){function i(s,c=Oa){let f;const h=bt.getTransfer(c);if(s===$i)return l.UNSIGNED_BYTE;if(s===uh)return l.UNSIGNED_SHORT_4_4_4_4;if(s===fh)return l.UNSIGNED_SHORT_5_5_5_1;if(s===f_)return l.UNSIGNED_INT_5_9_9_9_REV;if(s===c_)return l.BYTE;if(s===u_)return l.SHORT;if(s===jl)return l.UNSIGNED_SHORT;if(s===ch)return l.INT;if(s===Ms)return l.UNSIGNED_INT;if(s===Qi)return l.FLOAT;if(s===Bl)return l.HALF_FLOAT;if(s===d_)return l.ALPHA;if(s===h_)return l.RGB;if(s===mi)return l.RGBA;if(s===p_)return l.LUMINANCE;if(s===m_)return l.LUMINANCE_ALPHA;if(s===Ar)return l.DEPTH_COMPONENT;if(s===Dr)return l.DEPTH_STENCIL;if(s===g_)return l.RED;if(s===dh)return l.RED_INTEGER;if(s===v_)return l.RG;if(s===hh)return l.RG_INTEGER;if(s===ph)return l.RGBA_INTEGER;if(s===Tc||s===Ac||s===Rc||s===Cc)if(h===Bt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Tc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Tc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ld||s===Od||s===Pd||s===zd)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Ld)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Id||s===jd||s===Bd)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Id||s===jd)return h===Bt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Bd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Fd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jd)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return h===Bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===eh||s===th)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===wc)return h===Bt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===eh)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===th)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===__||s===nh||s===ih||s===ah)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===wc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===nh)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ih)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ah)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nr?l.UNSIGNED_INT_24_8:l[s]!==void 0?l[s]:null}return{convert:i}}class eA extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bc extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tA={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,f=null,h=null;const p=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(m,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=_.position.distanceTo(y.position),E=.02,A=.005;m.inputState.pinching&&S>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return p!==null&&(p.visible=c!==null),g!==null&&(g.visible=f!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new bc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const c=new In,f=t.properties.get(c);f.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=c}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ta({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Bc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends Lr{constructor(t,i){super();const s=this;let c=null,f=1,h=null,p="local-floor",g=1,m=null,_=null,y=null,S=null,E=null,A=null;const w=new aA,M=i.getContextAttributes();let x=null,j=null;const N=[],z=[],ie=new Tt;let H=null;const P=new hi;P.layers.enable(1),P.viewport=new dn;const J=new hi;J.layers.enable(2),J.viewport=new dn;const D=[P,J],C=new eA;C.layers.enable(1),C.layers.enable(2);let G=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=N[q];return oe===void 0&&(oe=new Ad,N[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=N[q];return oe===void 0&&(oe=new Ad,N[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=N[q];return oe===void 0&&(oe=new Ad,N[q]=oe),oe.getHandSpace()};function le(q){const oe=z.indexOf(q.inputSource);if(oe===-1)return;const ye=N[oe];ye!==void 0&&(ye.update(q.inputSource,q.frame,m||h),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function me(){c.removeEventListener("select",le),c.removeEventListener("selectstart",le),c.removeEventListener("selectend",le),c.removeEventListener("squeeze",le),c.removeEventListener("squeezestart",le),c.removeEventListener("squeezeend",le),c.removeEventListener("end",me),c.removeEventListener("inputsourceschange",de);for(let q=0;q<N.length;q++){const oe=z[q];oe!==null&&(z[q]=null,N[q].disconnect(oe))}G=null,ce=null,w.reset(),t.setRenderTarget(x),E=null,S=null,y=null,c=null,j=null,_e.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(ie.width,ie.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){f=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return c},this.setSession=async function(q){if(c=q,c!==null){if(x=t.getRenderTarget(),c.addEventListener("select",le),c.addEventListener("selectstart",le),c.addEventListener("selectend",le),c.addEventListener("squeeze",le),c.addEventListener("squeezestart",le),c.addEventListener("squeezeend",le),c.addEventListener("end",me),c.addEventListener("inputsourceschange",de),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(ie),c.renderState.layers===void 0){const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(c,i,oe),c.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),j=new Es(E.framebufferWidth,E.framebufferHeight,{format:mi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let oe=null,ye=null,Ee=null;M.depth&&(Ee=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,oe=M.stencil?Dr:Ar,ye=M.stencil?Nr:Ms);const He={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:f};y=new XRWebGLBinding(c,i),S=y.createProjectionLayer(He),c.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),j=new Es(S.textureWidth,S.textureHeight,{format:mi,type:$i,depthTexture:new O_(S.textureWidth,S.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}j.isXRRenderTarget=!0,this.setFoveation(g),m=null,h=await c.requestReferenceSpace(p),_e.setContext(c),_e.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(q){for(let oe=0;oe<q.removed.length;oe++){const ye=q.removed[oe],Ee=z.indexOf(ye);Ee>=0&&(z[Ee]=null,N[Ee].disconnect(ye))}for(let oe=0;oe<q.added.length;oe++){const ye=q.added[oe];let Ee=z.indexOf(ye);if(Ee===-1){for(let Fe=0;Fe<N.length;Fe++)if(Fe>=z.length){z.push(ye),Ee=Fe;break}else if(z[Fe]===null){z[Fe]=ye,Ee=Fe;break}if(Ee===-1)break}const He=N[Ee];He&&He.connect(ye)}}const L=new re,W=new re;function Z(q,oe,ye){L.setFromMatrixPosition(oe.matrixWorld),W.setFromMatrixPosition(ye.matrixWorld);const Ee=L.distanceTo(W),He=oe.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,nt=He[14]/(He[10]-1),Lt=He[14]/(He[10]+1),B=(He[9]+1)/He[5],Vt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],yt=(Fe[8]+1)/Fe[0],Ge=nt*ut,kt=nt*yt,$e=Ee/(-ut+yt),et=$e*-ut;oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(et),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const O=nt+$e,T=Lt+$e,ae=Ge-et,Se=kt+(Ee-et),ve=B*Lt/T*O,xe=Vt*Lt/T*O;q.projectionMatrix.makePerspective(ae,Se,ve,xe,O,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Me(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(c===null)return;w.texture!==null&&(q.near=w.depthNear,q.far=w.depthFar),C.near=J.near=P.near=q.near,C.far=J.far=P.far=q.far,(G!==C.near||ce!==C.far)&&(c.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,ce=C.far,P.near=G,P.far=ce,J.near=G,J.far=ce,P.updateProjectionMatrix(),J.updateProjectionMatrix(),q.updateProjectionMatrix());const oe=q.parent,ye=C.cameras;Me(C,oe);for(let Ee=0;Ee<ye.length;Ee++)Me(ye[Ee],oe);ye.length===2?Z(C,P,J):C.projectionMatrix.copy(P.projectionMatrix),be(q,C,oe)};function be(q,oe,ye){ye===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&E===null))return g},this.setFoveation=function(q){g=q,S!==null&&(S.fixedFoveation=q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let U=null;function ne(q,oe){if(_=oe.getViewerPose(m||h),A=oe,_!==null){const ye=_.views;E!==null&&(t.setRenderTargetFramebuffer(j,E.framebuffer),t.setRenderTarget(j));let Ee=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let Fe=0;Fe<ye.length;Fe++){const nt=ye[Fe];let Lt=null;if(E!==null)Lt=E.getViewport(nt);else{const Vt=y.getViewSubImage(S,nt);Lt=Vt.viewport,Fe===0&&(t.setRenderTargetTextures(j,Vt.colorTexture,S.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(j))}let B=D[Fe];B===void 0&&(B=new hi,B.layers.enable(Fe),B.viewport=new dn,D[Fe]=B),B.matrix.fromArray(nt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(nt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Fe===0&&(C.matrix.copy(B.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(B)}const He=c.enabledFeatures;if(He&&He.includes("depth-sensing")){const Fe=y.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&w.init(t,Fe,c.renderState)}}for(let ye=0;ye<N.length;ye++){const Ee=z[ye],He=N[ye];Ee!==null&&He!==void 0&&He.update(Ee,oe,m||h)}U&&U(q,oe),oe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:oe}),A=null}const _e=new U_;_e.setAnimationLoop(ne),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}const os=new ea,rA=new ln;function lA(l,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,C_(l)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function c(M,x,j,N,z){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(M,x):x.isMeshToonMaterial?(f(M,x),y(M,x)):x.isMeshPhongMaterial?(f(M,x),_(M,x)):x.isMeshStandardMaterial?(f(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,z)):x.isMeshMatcapMaterial?(f(M,x),A(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),w(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?g(M,x,j,N):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const j=t.get(x),N=j.envMap,z=j.envMapRotation;N&&(M.envMap.value=N,os.copy(z),os.x*=-1,os.y*=-1,os.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),M.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(os)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function g(M,x,j,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*j,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function y(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,j){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=j.texture,M.transmissionSamplerSize.value.set(j.width,j.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const j=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(j.matrixWorld),M.nearDistance.value=j.shadow.camera.near,M.farDistance.value=j.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function oA(l,t,i,s){let c={},f={},h=[];const p=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function g(j,N){const z=N.program;s.uniformBlockBinding(j,z)}function m(j,N){let z=c[j.id];z===void 0&&(A(j),z=_(j),c[j.id]=z,j.addEventListener("dispose",M));const ie=N.program;s.updateUBOMapping(j,ie);const H=t.render.frame;f[j.id]!==H&&(S(j),f[j.id]=H)}function _(j){const N=y();j.__bindingPointIndex=N;const z=l.createBuffer(),ie=j.__size,H=j.usage;return l.bindBuffer(l.UNIFORM_BUFFER,z),l.bufferData(l.UNIFORM_BUFFER,ie,H),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,N,z),z}function y(){for(let j=0;j<p;j++)if(h.indexOf(j)===-1)return h.push(j),j;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(j){const N=c[j.id],z=j.uniforms,ie=j.__cache;l.bindBuffer(l.UNIFORM_BUFFER,N);for(let H=0,P=z.length;H<P;H++){const J=Array.isArray(z[H])?z[H]:[z[H]];for(let D=0,C=J.length;D<C;D++){const G=J[D];if(E(G,H,D,ie)===!0){const ce=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let de=0;de<le.length;de++){const L=le[de],W=w(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,l.bufferSubData(l.UNIFORM_BUFFER,ce+me,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,me),me+=W.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,ce,G.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function E(j,N,z,ie){const H=j.value,P=N+"_"+z;if(ie[P]===void 0)return typeof H=="number"||typeof H=="boolean"?ie[P]=H:ie[P]=H.clone(),!0;{const J=ie[P];if(typeof H=="number"||typeof H=="boolean"){if(J!==H)return ie[P]=H,!0}else if(J.equals(H)===!1)return J.copy(H),!0}return!1}function A(j){const N=j.uniforms;let z=0;const ie=16;for(let P=0,J=N.length;P<J;P++){const D=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,G=D.length;C<G;C++){const ce=D[C],le=Array.isArray(ce.value)?ce.value:[ce.value];for(let me=0,de=le.length;me<de;me++){const L=le[me],W=w(L),Z=z%ie,Me=Z%W.boundary,be=Z+Me;z+=Me,be!==0&&ie-be<W.storage&&(z+=ie-be),ce.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=z,z+=W.storage}}}const H=z%ie;return H>0&&(z+=ie-H),j.__size=z,j.__cache={},this}function w(j){const N={boundary:0,storage:0};return typeof j=="number"||typeof j=="boolean"?(N.boundary=4,N.storage=4):j.isVector2?(N.boundary=8,N.storage=8):j.isVector3||j.isColor?(N.boundary=16,N.storage=12):j.isVector4?(N.boundary=16,N.storage=16):j.isMatrix3?(N.boundary=48,N.storage=48):j.isMatrix4?(N.boundary=64,N.storage=64):j.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",j),N}function M(j){const N=j.target;N.removeEventListener("dispose",M);const z=h.indexOf(N.__bindingPointIndex);h.splice(z,1),l.deleteBuffer(c[N.id]),delete c[N.id],delete f[N.id]}function x(){for(const j in c)l.deleteBuffer(c[j]);h=[],c={},f={}}return{bind:g,update:m,dispose:x}}class cA{constructor(t={}){const{canvas:i=Jy(),context:s=null,depth:c=!0,stencil:f=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),A=new Int32Array(4);let w=null,M=null;const x=[],j=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this.toneMapping=za,this.toneMappingExposure=1;const N=this;let z=!1,ie=0,H=0,P=null,J=-1,D=null;const C=new dn,G=new dn;let ce=null;const le=new wt(0);let me=0,de=i.width,L=i.height,W=1,Z=null,Me=null;const be=new dn(0,0,de,L),U=new dn(0,0,de,L);let ne=!1;const _e=new D_;let q=!1,oe=!1;const ye=new ln,Ee=new re,He=new dn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Lt(){return P===null?W:1}let B=s;function Vt(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:c,stencil:f,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${oh}`),i.addEventListener("webglcontextlost",he,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),B===null){const k="webgl2";if(B=Vt(k,R),B===null)throw Vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,yt,Ge,kt,$e,et,O,T,ae,Se,ve,xe,We,De,Le,it,Ae,Oe,ht,Ke,we,Ye,Ze,zt;function V(){ut=new mb(B),ut.init(),Ye=new $T(B,ut),yt=new cb(B,ut,t,Ye),Ge=new KT(B),kt=new _b(B),$e=new zT,et=new JT(B,ut,Ge,$e,yt,Ye,kt),O=new fb(N),T=new pb(N),ae=new TS(B),Ze=new lb(B,ae),Se=new gb(B,ae,kt,Ze),ve=new yb(B,Se,ae,kt),ht=new xb(B,yt,et),it=new ub($e),xe=new PT(N,O,T,ut,yt,Ze,it),We=new lA(N,$e),De=new jT,Le=new kT(ut),Oe=new rb(N,O,T,Ge,ve,S,g),Ae=new ZT(N,ve,yt),zt=new oA(B,kt,yt,Ge),Ke=new ob(B,ut,kt),we=new vb(B,ut,kt),kt.programs=xe.programs,N.capabilities=yt,N.extensions=ut,N.properties=$e,N.renderLists=De,N.shadowMap=Ae,N.state=Ge,N.info=kt}V();const Re=new sA(N,B);this.xr=Re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(de,L,!1))},this.getSize=function(R){return R.set(de,L)},this.setSize=function(R,k,ee=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=R,L=k,i.width=Math.floor(R*W),i.height=Math.floor(k*W),ee===!0&&(i.style.width=R+"px",i.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(de*W,L*W).floor()},this.setDrawingBufferSize=function(R,k,ee){de=R,L=k,W=ee,i.width=Math.floor(R*ee),i.height=Math.floor(k*ee),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,k,ee,te){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,k,ee,te),Ge.viewport(C.copy(be).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(U)},this.setScissor=function(R,k,ee,te){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,k,ee,te),Ge.scissor(G.copy(U).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){Ge.setScissorTest(ne=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){Me=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(R=!0,k=!0,ee=!0){let te=0;if(R){let Y=!1;if(P!==null){const Te=P.texture.format;Y=Te===ph||Te===hh||Te===dh}if(Y){const Te=P.texture.type,Ne=Te===$i||Te===Ms||Te===jl||Te===Nr||Te===uh||Te===fh,Pe=Oe.getClearColor(),ze=Oe.getClearAlpha(),Ie=Pe.r,Je=Pe.g,qe=Pe.b;Ne?(E[0]=Ie,E[1]=Je,E[2]=qe,E[3]=ze,B.clearBufferuiv(B.COLOR,0,E)):(A[0]=Ie,A[1]=Je,A[2]=qe,A[3]=ze,B.clearBufferiv(B.COLOR,0,A))}else te|=B.COLOR_BUFFER_BIT}k&&(te|=B.DEPTH_BUFFER_BIT),ee&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",he,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),De.dispose(),Le.dispose(),$e.dispose(),O.dispose(),T.dispose(),ve.dispose(),Ze.dispose(),zt.dispose(),xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",vn),Re.removeEventListener("sessionend",Xl),vi.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=kt.autoReset,k=Ae.enabled,ee=Ae.autoUpdate,te=Ae.needsUpdate,Y=Ae.type;V(),kt.autoReset=R,Ae.enabled=k,Ae.autoUpdate=ee,Ae.needsUpdate=te,Ae.type=Y}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ke(R){const k=R.target;k.removeEventListener("dispose",ke),ot(k)}function ot(R){Pt(R),$e.remove(R)}function Pt(R){const k=$e.get(R).programs;k!==void 0&&(k.forEach(function(ee){xe.releaseProgram(ee)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,ee,te,Y,Te){k===null&&(k=Fe);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=_n(R,k,ee,te,Y);Ge.setMaterial(te,Ne);let ze=ee.index,Ie=1;if(te.wireframe===!0){if(ze=Se.getWireframeAttribute(ee),ze===void 0)return;Ie=2}const Je=ee.drawRange,qe=ee.attributes.position;let ct=Je.start*Ie,At=(Je.start+Je.count)*Ie;Te!==null&&(ct=Math.max(ct,Te.start*Ie),At=Math.min(At,(Te.start+Te.count)*Ie)),ze!==null?(ct=Math.max(ct,0),At=Math.min(At,ze.count)):qe!=null&&(ct=Math.max(ct,0),At=Math.min(At,qe.count));const Ft=At-ct;if(Ft<0||Ft===1/0)return;Ze.setup(Y,te,Pe,ee,ze);let xn,xt=Ke;if(ze!==null&&(xn=ae.get(ze),xt=we,xt.setIndex(xn)),Y.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*Lt()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(Y.isLine){let Ve=te.linewidth;Ve===void 0&&(Ve=1),Ge.setLineWidth(Ve*Lt()),Y.isLineSegments?xt.setMode(B.LINES):Y.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else Y.isPoints?xt.setMode(B.POINTS):Y.isSprite&&xt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ve=Y._multiDrawStarts,Xt=Y._multiDrawCounts,gt=Y._multiDrawCount,Yt=ze?ae.get(ze).bytesPerElement:1,sn=$e.get(te).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)sn.setValue(B,"_gl_DrawID",yn),xt.render(Ve[yn]/Yt,Xt[yn])}else if(Y.isInstancedMesh)xt.renderInstances(ct,Ft,Y.count);else if(ee.isInstancedBufferGeometry){const Ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Xt=Math.min(ee.instanceCount,Ve);xt.renderInstances(ct,Ft,Xt)}else xt.render(ct,Ft)};function an(R,k,ee){R.transparent===!0&&R.side===bi&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Fa(R,k,ee),R.side=Ia,R.needsUpdate=!0,Fa(R,k,ee),R.side=bi):Fa(R,k,ee)}this.compile=function(R,k,ee=null){ee===null&&(ee=R),M=Le.get(ee),M.init(k),j.push(M),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),R!==ee&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights();const te=new Set;return R.traverse(function(Y){const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Pe=Te[Ne];an(Pe,ee,Y),te.add(Pe)}else an(Te,ee,Y),te.add(Te)}),j.pop(),M=null,te},this.compileAsync=function(R,k,ee=null){const te=this.compile(R,k,ee);return new Promise(Y=>{function Te(){if(te.forEach(function(Ne){$e.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){Y(R);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let _t=null;function jn(R){_t&&_t(R)}function vn(){vi.stop()}function Xl(){vi.start()}const vi=new U_;vi.setAnimationLoop(jn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){_t=R,Re.setAnimationLoop(R),R===null?vi.stop():vi.start()},Re.addEventListener("sessionstart",vn),Re.addEventListener("sessionend",Xl),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(k),k=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,k,P),M=Le.get(R,j.length),M.init(k),j.push(M),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),_e.setFromProjectionMatrix(ye),oe=this.localClippingEnabled,q=it.init(this.clippingPlanes,oe),w=De.get(R,x.length),w.init(),x.push(w),Re.enabled===!0&&Re.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&As(Te,k,-1/0,N.sortObjects)}As(R,k,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Z,Me),nt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,nt&&Oe.addToRenderList(w,R),this.info.render.frame++,q===!0&&it.beginShadows();const ee=M.state.shadowsArray;Ae.render(ee,R,k),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=w.opaque,Y=w.transmissive;if(M.setupLights(),k.isArrayCamera){const Te=k.cameras;if(Y.length>0)for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){const ze=Te[Ne];Rs(te,Y,R,ze)}nt&&Oe.render(R);for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){const ze=Te[Ne];Pr(w,R,ze,ze.viewport)}}else Y.length>0&&Rs(te,Y,R,k),nt&&Oe.render(R),Pr(w,R,k);P!==null&&(et.updateMultisampleRenderTarget(P),et.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(N,R,k),Ze.resetDefaultState(),J=-1,D=null,j.pop(),j.length>0?(M=j[j.length-1],q===!0&&it.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function As(R,k,ee,te){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_e.intersectsSprite(R)){te&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Ne=ve.update(R),Pe=R.material;Pe.visible&&w.push(R,Ne,Pe,ee,He.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_e.intersectsObject(R))){const Ne=ve.update(R),Pe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),He.copy(Ne.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Pe)){const ze=Ne.groups;for(let Ie=0,Je=ze.length;Ie<Je;Ie++){const qe=ze[Ie],ct=Pe[qe.materialIndex];ct&&ct.visible&&w.push(R,Ne,ct,ee,He.z,qe)}}else Pe.visible&&w.push(R,Ne,Pe,ee,He.z,null)}}const Te=R.children;for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++)As(Te[Ne],k,ee,te)}function Pr(R,k,ee,te){const Y=R.opaque,Te=R.transmissive,Ne=R.transparent;M.setupLightsView(ee),q===!0&&it.setGlobalState(N.clippingPlanes,ee),te&&Ge.viewport(C.copy(te)),Y.length>0&&na(Y,k,ee),Te.length>0&&na(Te,k,ee),Ne.length>0&&na(Ne,k,ee),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Rs(R,k,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[te.id]===void 0&&(M.state.transmissionRenderTarget[te.id]=new Es(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Bl:$i,minFilter:ys,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=M.state.transmissionRenderTarget[te.id],Ne=te.viewport||C;Te.setSize(Ne.z,Ne.w);const Pe=N.getRenderTarget();N.setRenderTarget(Te),N.getClearColor(le),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),nt&&Oe.render(ee);const ze=N.toneMapping;N.toneMapping=za;const Ie=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),q===!0&&it.setGlobalState(N.clippingPlanes,te),na(R,ee,te),et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let qe=0,ct=k.length;qe<ct;qe++){const At=k[qe],Ft=At.object,xn=At.geometry,xt=At.material,Ve=At.group;if(xt.side===bi&&Ft.layers.test(te.layers)){const Xt=xt.side;xt.side=zn,xt.needsUpdate=!0,zr(Ft,ee,te,xn,xt,Ve),xt.side=Xt,xt.needsUpdate=!0,Je=!0}}Je===!0&&(et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te))}N.setRenderTarget(Pe),N.setClearColor(le,me),Ie!==void 0&&(te.viewport=Ie),N.toneMapping=ze}function na(R,k,ee){const te=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Te=R.length;Y<Te;Y++){const Ne=R[Y],Pe=Ne.object,ze=Ne.geometry,Ie=te===null?Ne.material:te,Je=Ne.group;Pe.layers.test(ee.layers)&&zr(Pe,k,ee,ze,Ie,Je)}}function zr(R,k,ee,te,Y,Te){R.onBeforeRender(N,k,ee,te,Y,Te),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.transparent===!0&&Y.side===bi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,N.renderBufferDirect(ee,k,te,Y,R,Te),Y.side=Ia,Y.needsUpdate=!0,N.renderBufferDirect(ee,k,te,Y,R,Te),Y.side=bi):N.renderBufferDirect(ee,k,te,Y,R,Te),R.onAfterRender(N,k,ee,te,Y,Te)}function Fa(R,k,ee){k.isScene!==!0&&(k=Fe);const te=$e.get(R),Y=M.state.lights,Te=M.state.shadowsArray,Ne=Y.state.version,Pe=xe.getParameters(R,Y.state,Te,k,ee),ze=xe.getProgramCacheKey(Pe);let Ie=te.programs;te.environment=R.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(R.isMeshStandardMaterial?T:O).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",ke),Ie=new Map,te.programs=Ie);let Je=Ie.get(ze);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Ne)return Qt(R,Pe),Je}else Pe.uniforms=xe.getUniforms(R),R.onBeforeCompile(Pe,N),Je=xe.acquireProgram(Pe,ze),Ie.set(ze,Je),te.uniforms=Pe.uniforms;const qe=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=it.uniform),Qt(R,Pe),te.needsLights=Ir(R),te.lightsStateVersion=Ne,te.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.directionalShadowMap.value=Y.state.directionalShadowMap,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotShadowMap.value=Y.state.spotShadowMap,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMap.value=Y.state.pointShadowMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function si(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Nc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Qt(R,k){const ee=$e.get(R);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function _n(R,k,ee,te,Y){k.isScene!==!0&&(k=Fe),et.resetTextureUnits();const Te=k.fog,Ne=te.isMeshStandardMaterial?k.environment:null,Pe=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ja,ze=(te.isMeshStandardMaterial?T:O).get(te.envMap||Ne),Ie=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let Ft=za;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ft=N.toneMapping);const xn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,xt=xn!==void 0?xn.length:0,Ve=$e.get(te),Xt=M.state.lights;if(q===!0&&(oe===!0||R!==D)){const Rn=R===D&&te.id===J;it.setState(te,R,Rn)}let gt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Xt.state.version||Ve.outputColorSpace!==Pe||Y.isBatchedMesh&&Ve.batching===!1||!Y.isBatchedMesh&&Ve.batching===!0||Y.isBatchedMesh&&Ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Y.isInstancedMesh&&Ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ve.instancingMorph===!1&&Y.morphTexture!==null||Ve.envMap!==ze||te.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==it.numPlanes||Ve.numIntersection!==it.numIntersection)||Ve.vertexAlphas!==Ie||Ve.vertexTangents!==Je||Ve.morphTargets!==qe||Ve.morphNormals!==ct||Ve.morphColors!==At||Ve.toneMapping!==Ft||Ve.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,Ve.__version=te.version);let Yt=Ve.currentProgram;gt===!0&&(Yt=Fa(te,k,Y));let sn=!1,yn=!1,jr=!1;const Ht=Yt.getUniforms(),ri=Ve.uniforms;if(Ge.useProgram(Yt.program)&&(sn=!0,yn=!0,jr=!0),te.id!==J&&(J=te.id,yn=!0),sn||D!==R){Ht.setValue(B,"projectionMatrix",R.projectionMatrix),Ht.setValue(B,"viewMatrix",R.matrixWorldInverse);const Rn=Ht.map.cameraPosition;Rn!==void 0&&Rn.setValue(B,Ee.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,yn=!0,jr=!0)}if(Y.isSkinnedMesh){Ht.setOptional(B,Y,"bindMatrix"),Ht.setOptional(B,Y,"bindMatrixInverse");const Rn=Y.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ht.setValue(B,"boneTexture",Rn.boneTexture,et))}Y.isBatchedMesh&&(Ht.setOptional(B,Y,"batchingTexture"),Ht.setValue(B,"batchingTexture",Y._matricesTexture,et),Ht.setOptional(B,Y,"batchingIdTexture"),Ht.setValue(B,"batchingIdTexture",Y._indirectTexture,et),Ht.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ht.setValue(B,"batchingColorTexture",Y._colorsTexture,et));const aa=ee.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0)&&ht.update(Y,ee,Yt),(yn||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Ht.setValue(B,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ri.envMap.value=ze,ri.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(ri.envMapIntensity.value=k.environmentIntensity),yn&&(Ht.setValue(B,"toneMappingExposure",N.toneMappingExposure),Ve.needsLights&&ia(ri,jr),Te&&te.fog===!0&&We.refreshFogUniforms(ri,Te),We.refreshMaterialUniforms(ri,te,W,L,M.state.transmissionRenderTarget[R.id]),Nc.upload(B,si(Ve),ri,et)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Nc.upload(B,si(Ve),ri,et),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ht.setValue(B,"center",Y.center),Ht.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(B,"normalMatrix",Y.normalMatrix),Ht.setValue(B,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Rn=te.uniformsGroups;for(let Sn=0,Br=Rn.length;Sn<Br;Sn++){const Fr=Rn[Sn];zt.update(Fr,Yt),zt.bind(Fr,Yt)}}return Yt}function ia(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Ir(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,k,ee){$e.get(R.texture).__webglTexture=k,$e.get(R.depthTexture).__webglTexture=ee;const te=$e.get(R);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const ee=$e.get(R);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,ee=0){P=R,ie=k,H=ee;let te=!0,Y=null,Te=!1,Ne=!1;if(R){const ze=$e.get(R);ze.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(B.FRAMEBUFFER,null),te=!1):ze.__webglFramebuffer===void 0?et.setupRenderTarget(R):ze.__hasExternalTextures&&et.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ne=!0);const Je=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?Y=Je[k][ee]:Y=Je[k],Te=!0):R.samples>0&&et.useMultisampledRTT(R)===!1?Y=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,C.copy(R.viewport),G.copy(R.scissor),ce=R.scissorTest}else C.copy(be).multiplyScalar(W).floor(),G.copy(U).multiplyScalar(W).floor(),ce=ne;if(Ge.bindFramebuffer(B.FRAMEBUFFER,Y)&&te&&Ge.drawBuffers(R,Y),Ge.viewport(C),Ge.scissor(G),Ge.setScissorTest(ce),Te){const ze=$e.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,ze.__webglTexture,ee)}else if(Ne){const ze=$e.get(R.texture),Ie=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,Ie)}J=-1},this.readRenderTargetPixels=function(R,k,ee,te,Y,Te,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ge.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const ze=R.texture,Ie=ze.format,Je=ze.type;if(!yt.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-te&&ee>=0&&ee<=R.height-Y&&B.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),Te)}finally{const ze=P!==null?$e.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,k,ee,te,Y,Te,Ne){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ge.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const ze=R.texture,Ie=ze.format,Je=ze.type;if(!yt.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-te&&ee>=0&&ee<=R.height-Y){const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),0),B.flush();const ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await $y(B,ct,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te)}finally{B.deleteBuffer(qe),B.deleteSync(ct)}return Te}}finally{const ze=P!==null?$e.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(R,k=null,ee=0){R.isTexture!==!0&&(Il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const te=Math.pow(2,-ee),Y=Math.floor(R.image.width*te),Te=Math.floor(R.image.height*te),Ne=k!==null?k.x:0,Pe=k!==null?k.y:0;et.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Ne,Pe,Y,Te),Ge.unbindTexture()},this.copyTextureToTexture=function(R,k,ee=null,te=null,Y=0){R.isTexture!==!0&&(Il("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,R=arguments[1],k=arguments[2],Y=arguments[3]||0,ee=null);let Te,Ne,Pe,ze,Ie,Je;ee!==null?(Te=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Pe=ee.min.x,ze=ee.min.y):(Te=R.image.width,Ne=R.image.height,Pe=0,ze=0),te!==null?(Ie=te.x,Je=te.y):(Ie=0,Je=0);const qe=Ye.convert(k.format),ct=Ye.convert(k.type);et.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const At=B.getParameter(B.UNPACK_ROW_LENGTH),Ft=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xn=B.getParameter(B.UNPACK_SKIP_PIXELS),xt=B.getParameter(B.UNPACK_SKIP_ROWS),Ve=B.getParameter(B.UNPACK_SKIP_IMAGES),Xt=R.isCompressedTexture?R.mipmaps[Y]:R.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,Ie,Je,Te,Ne,qe,ct,Xt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,Ie,Je,Xt.width,Xt.height,qe,Xt.data):B.texSubImage2D(B.TEXTURE_2D,Y,Ie,Je,Te,Ne,qe,ct,Xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,At),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xn),B.pixelStorei(B.UNPACK_SKIP_ROWS,xt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve),Y===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(R,k,ee=null,te=null,Y=0){R.isTexture!==!0&&(Il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,R=arguments[2],k=arguments[3],Y=arguments[4]||0);let Te,Ne,Pe,ze,Ie,Je,qe,ct,At;const Ft=R.isCompressedTexture?R.mipmaps[Y]:R.image;ee!==null?(Te=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Pe=ee.max.z-ee.min.z,ze=ee.min.x,Ie=ee.min.y,Je=ee.min.z):(Te=Ft.width,Ne=Ft.height,Pe=Ft.depth,ze=0,Ie=0,Je=0),te!==null?(qe=te.x,ct=te.y,At=te.z):(qe=0,ct=0,At=0);const xn=Ye.convert(k.format),xt=Ye.convert(k.type);let Ve;if(k.isData3DTexture)et.setTexture3D(k,0),Ve=B.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)et.setTexture2DArray(k,0),Ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Xt=B.getParameter(B.UNPACK_ROW_LENGTH),gt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yt=B.getParameter(B.UNPACK_SKIP_PIXELS),sn=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ie),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je),R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ve,Y,qe,ct,At,Te,Ne,Pe,xn,xt,Ft.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,Y,qe,ct,At,Te,Ne,Pe,xn,Ft.data):B.texSubImage3D(Ve,Y,qe,ct,At,Te,Ne,Pe,xn,xt,Ft),B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Y===0&&k.generateMipmaps&&B.generateMipmap(Ve),Ge.unbindTexture()},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&et.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?et.setTextureCube(R,0):R.isData3DTexture?et.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?et.setTexture2DArray(R,0):et.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){ie=0,H=0,P=null,Ge.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===mh?"display-p3":"srgb",i.unpackColorSpace=bt.workingColorSpace===jc?"display-p3":"srgb"}}class uA extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class fA extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);function dA(){const l=Ri.useRef(null),t=Ri.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null});return Ri.useEffect(()=>{if(!l.current)return;const i=l.current,s=t.current,c=`
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
    `,h=()=>{s.scene=new uA,s.renderer=new cA({canvas:i,alpha:!0,antialias:!0}),s.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.renderer.setClearColor(new wt(1057326),1),s.camera=new L_(-1,1,1,-1,0,1),s.uniforms={resolution:{value:[i.clientWidth,i.clientHeight]},time:{value:0},xScale:{value:1.28},yScale:{value:.24},distortion:{value:.08}};const m=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],_=new Ba;_.setAttribute("position",new gi(new Float32Array(m),3));const y=new fA({vertexShader:c,fragmentShader:f,uniforms:s.uniforms,side:bi});s.mesh=new Ai(_,y),s.scene.add(s.mesh),g()},p=()=>{s.uniforms&&(s.uniforms.time.value+=.0045),s.renderer&&s.scene&&s.camera&&s.renderer.render(s.scene,s.camera),s.animationId=requestAnimationFrame(p)},g=()=>{if(!s.renderer||!s.uniforms)return;const m=i.getBoundingClientRect(),_=Math.max(1,Math.floor(m.width)),y=Math.max(1,Math.floor(m.height));s.renderer.setSize(_,y,!1),s.uniforms.resolution.value=[_,y]};return h(),p(),window.addEventListener("resize",g),()=>{var m,_;s.animationId&&cancelAnimationFrame(s.animationId),window.removeEventListener("resize",g),s.mesh&&((m=s.scene)==null||m.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material instanceof Vl&&s.mesh.material.dispose()),(_=s.renderer)==null||_.dispose()}},[]),o.jsx("canvas",{ref:l,className:"hero-shader-canvas","aria-hidden":"true"})}const hA=[{label:"Education",href:"/en/education.php",links:[["Community","/en/member.php"],["School Ecosystem","/en/education.php"]]},{label:"Experience",href:"/en/experience-passport.php",links:[["Experience Identity","/en/experience-passport.php"]]},{label:"Enterprise",href:"/economy",links:[["Business Ecosystem","/en/business-club.php"],["Become a partner","/partner"],["Investor","/investor"],["Service and Product","/en/services-products.php"]]},{label:"Environment",href:"/environment",links:[["Sustainability","/en/environment.php"],["Projects","/en/projects.php"]]}];function bs({loginHref:l="#login",languagePage:t="index.php"}){return o.jsx("header",{className:"site-header",children:o.jsxs("nav",{className:"nav","aria-label":"Primary navigation",children:[o.jsx("a",{className:"brand",href:"/en/index.php",children:o.jsx("img",{className:"header-logo",src:"/images/logo.png",alt:"EI.one"})}),o.jsxs("div",{className:"nav-links",children:[o.jsx("a",{href:"/en/index.php",children:"Home"}),hA.map(i=>o.jsxs("div",{className:"nav-item has-submenu",children:[o.jsxs("a",{href:i.href,children:[i.label," ",o.jsx("i",{className:"fa-solid fa-chevron-down","aria-hidden":"true"})]}),o.jsx("div",{className:"submenu",children:i.links.map(([s,c])=>o.jsx("a",{href:c,children:s},s))})]},i.label)),o.jsx("a",{href:"/en/about-us.php",children:"About"})]}),o.jsx("a",{className:"button secondary",href:l,children:"Login"}),o.jsxs("div",{className:"lang has-submenu","aria-label":"Language selector",children:[o.jsxs("button",{type:"button",children:["EN ",o.jsx("i",{className:"fa-solid fa-caret-down","aria-hidden":"true"})]}),o.jsxs("div",{className:"submenu lang-menu",children:[o.jsx("a",{href:`/de/${t}`,children:"DE"}),o.jsx("a",{href:`/it/${t}`,children:"IT"}),o.jsx("a",{href:`/fr/${t}`,children:"FR"}),o.jsx("a",{href:`/en/${t}`,children:"EN"})]})]})]})})}function Ts(){return o.jsx("footer",{className:"site-footer",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"footer-grid",children:[o.jsxs("div",{className:"footer-about",children:[o.jsx("a",{className:"footer-logo",href:"/en/index.php","aria-label":"ei.one",children:o.jsx("img",{src:"/images/logo.png",alt:"ei.one"})}),o.jsx("p",{children:"ei.one - The ecosystem where people build real experience and companies grow by hiring on what people can actually do."})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Companies"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"/business-club",children:"Business Ecosystem"})}),o.jsx("li",{children:o.jsx("a",{href:"/partner",children:"Become a Partner"})}),o.jsx("li",{children:o.jsx("a",{href:"/sponsor",children:"Sponsor"})}),o.jsx("li",{children:o.jsx("a",{href:"/investors",children:"Investors"})}),o.jsx("li",{children:o.jsx("a",{href:"/services-products",children:"Services & Products"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Talents"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"/experience-passport",children:"Experience Identity"})}),o.jsx("li",{children:o.jsx("a",{href:"/academy",children:"Academy"})}),o.jsx("li",{children:o.jsx("a",{href:"/recruitment",children:"Recruitment"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Ecosystem"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"/about",children:"About Us"})}),o.jsx("li",{children:o.jsx("a",{href:"/education",children:"Education"})}),o.jsx("li",{children:o.jsx("a",{href:"/economy",children:"Economy"})}),o.jsx("li",{children:o.jsx("a",{href:"/environment",children:"Environment"})}),o.jsx("li",{children:o.jsx("a",{href:"/projects",children:"Projects"})}),o.jsx("li",{children:o.jsx("a",{href:"/contact",children:"Contact"})})]})]})]}),o.jsxs("div",{className:"footer-contact",children:[o.jsx("h3",{children:"Contact"}),o.jsxs("p",{children:[o.jsx("strong",{children:"ei.one"}),o.jsx("br",{}),"Netmaster (Schweiz) AG",o.jsx("br",{}),"Toedistrasse 56",o.jsx("br",{}),"CH - 8810 Horgen"]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Tel:"})," +41 44 542 47 47"]})]}),o.jsxs("div",{className:"copyright",children:[o.jsx("span",{children:"Copyright 2026 ei.one - Ecosystem Intelligence. All rights reserved."}),o.jsxs("span",{className:"footer-legal",children:[o.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"}),o.jsx("a",{href:"/terms-and-conditions",children:"Terms and Conditions"})]})]})]})})}function cs(l,t,i="name"){let s=document.head.querySelector(`meta[${i}="${l}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,l),document.head.appendChild(s)),s.setAttribute("content",t)}function pA(){return Ri.useEffect(()=>{const l="Education - EI.one School Ecosystem & Academy",t="EI.one Education connects school ecosystems, academy journeys and verified experiences so learning becomes visible, attestable and useful for future opportunities.";document.title=l,cs("description",t),cs("keywords","EI.one education, school ecosystem, academy, experience identity, verified learning, talents, skills"),cs("og:title",l,"property"),cs("og:description",t,"property"),cs("og:url","https://ei.one/en/education","property"),cs("twitter:title",l),cs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/education")},[]),o.jsxs(o.Fragment,{children:[o.jsx(bs,{loginHref:"#education-login",languagePage:"education.php"}),o.jsxs("main",{className:"education-page",children:[o.jsx("section",{className:"education-hero",children:o.jsxs("div",{className:"wrap education-hero-grid",children:[o.jsxs("div",{children:[o.jsx("p",{className:"education-kicker",children:"Schools"}),o.jsx("h1",{children:"Turn experience into growth of relevance."}),o.jsx("p",{children:"Transform your students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge with companies. Your students' experiences become your prestige."})]}),o.jsxs("div",{className:"education-hero-card",id:"education-login",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=84",alt:"Students collaborating in a bright learning environment"}),o.jsxs("div",{children:[o.jsx("strong",{children:"School Ecosystem"}),o.jsx("span",{children:"Learning, mentoring, projects and verified experiences connected in one growth path."})]})]})]})}),o.jsx("section",{className:"human-center",children:o.jsxs("div",{className:"wrap human-center-grid",children:[o.jsxs("div",{className:"human-center-copy",children:[o.jsx("h2",{children:"The Human at the Center"}),o.jsx("p",{children:"Humans are at the center of every sustainable development. For us, social sustainability means combining economic progress with responsibility towards people, communities, and future generations."}),o.jsx("p",{children:"At EI.one, we believe that sustainable innovation can only emerge when people have access to knowledge, education, and new opportunities. That is why we promote a corporate culture based on collaboration, trust, diversity, and personal development."})]}),o.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[o.jsx("img",{src:"/images/human-at-center.png",alt:"People collaborating around a table in a bright learning community"}),o.jsx("div",{className:"human-center-glow"})]})]})}),o.jsx("section",{className:"education-pillars",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"education-section-head",children:[o.jsx("h2",{children:"Education & Networking"}),o.jsx("p",{children:"Our ecosystem connects companies, talents, educational institutions, and experts to share knowledge and create new opportunities."})]}),o.jsxs("div",{className:"education-pillar-grid",children:[o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),o.jsx("h3",{children:"Education Initiatives"}),o.jsx("p",{children:"Continuous development and skill building."})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-users-viewfinder","aria-hidden":"true"}),o.jsx("h3",{children:"Talent Promotion"}),o.jsx("p",{children:"Helping people reach their full potential."})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-handshake-simple","aria-hidden":"true"}),o.jsx("h3",{children:"Cooperation"}),o.jsx("p",{children:"Innovation through collaboration across borders."})]})]})]})}),o.jsx("section",{className:"human-center",children:o.jsxs("div",{className:"wrap human-center-grid",children:[o.jsxs("div",{className:"human-center-copy",children:[o.jsx("h2",{children:"Inclusive & Human Economy"}),o.jsx("p",{children:"Social sustainability for us also means promoting new forms of collaboration. In an increasingly connected world, innovation and progress no longer arise in isolation but through cooperation between people, companies, and organizations."}),o.jsx("p",{children:"EI.one supports this development through a globally oriented network that brings together talents, ideas, and projects. Our goal is to promote an economy that is human, inclusive, and future-oriented."})]}),o.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[o.jsx("img",{src:"/images/inclusive.jpg",alt:"inclusive and human economy"}),o.jsx("div",{className:"human-center-glow"})]})]})}),o.jsx("section",{className:"education-cta",children:o.jsxs("div",{className:"wrap education-cta-box",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Developing Solutions Together"}),o.jsx("p",{children:"Become part of a community based on trust and human growth."})]}),o.jsxs("div",{className:"education-actions",children:[o.jsx("a",{className:"button secondary",href:"/en/talent.php",children:"Become a Talent"}),o.jsx("a",{className:"button",href:"/en/contact.php",children:"Contact"})]})]})})]}),o.jsx(Ts,{})]})}function us(l,t,i="name"){let s=document.head.querySelector(`meta[${i}="${l}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,l),document.head.appendChild(s)),s.setAttribute("content",t)}function mA(){return Ri.useEffect(()=>{const l="Experience Passport - EI.one Experience Identity",t="The EI.one Experience Passport turns real work, learning, mentoring and projects into verified proof of what people can actually do.";document.title=l,us("description",t),us("keywords","EI.one experience passport, experience identity, verified experience, talent profile, skills proof"),us("og:title",l,"property"),us("og:description",t,"property"),us("og:url","https://ei.one/en/experience-passport","property"),us("twitter:title",l),us("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/experience-passport")},[]),o.jsxs(o.Fragment,{children:[o.jsx(bs,{loginHref:"#experience-login",languagePage:"experience-passport.php"}),o.jsxs("main",{className:"experience-page",children:[o.jsx("section",{className:"experience-hero",children:o.jsxs("div",{className:"wrap experience-hero-grid",children:[o.jsxs("div",{className:"experience-hero-copy",children:[o.jsx("h1",{children:"Experience Identity"}),o.jsx("p",{children:"Your digital record of what you've actually done. Verified by the companies who had you do it, anchored on the blockchain as a credential that belongs to you forever."}),o.jsx("p",{className:"experience-quote",children:'"Your experiences build your future."'})]}),o.jsxs("div",{className:"experience-proof-map",id:"experience-login","aria-label":"Experience Identity proof flow",children:[o.jsxs("div",{className:"proof-orbit",children:[o.jsx("span",{className:"proof-core",children:o.jsx("i",{className:"fa-solid fa-fingerprint","aria-hidden":"true"})}),o.jsxs("span",{className:"proof-node work",children:[o.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),o.jsx("strong",{children:"Work"})]}),o.jsxs("span",{className:"proof-node learn",children:[o.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),o.jsx("strong",{children:"Learn"})]}),o.jsxs("span",{className:"proof-node mentor",children:[o.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),o.jsx("strong",{children:"Mentor"})]})]}),o.jsxs("div",{className:"proof-lines",children:[o.jsxs("div",{children:[o.jsx("span",{children:"01"}),o.jsx("strong",{children:"Do real work"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"02"}),o.jsx("strong",{children:"Get it verified"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"03"}),o.jsx("strong",{children:"Build your future"})]})]})]})]})}),o.jsx("section",{className:"human-center",children:o.jsxs("div",{className:"wrap human-center-grid",children:[o.jsxs("div",{className:"human-center-copy",children:[o.jsx("h2",{children:"The CV is broken. The Identity fixes it."}),o.jsx("p",{children:"A CV says whatever you want it to. It also says very little of substance: job titles, years, keywords. In the age of the AI transition, that's not enough for anyone â€” not for job seekers, not for employers."}),o.jsx("p",{children:"The Experience Identity is different. Every experience you add is attested by whoever had you do it â€” a company in the ecosystem, an Academy partner, a real project. What people see is your actual work, not your self-promotion."})]}),o.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[o.jsx("img",{src:"/images/identity.jpg",alt:"identity"}),o.jsx("div",{className:"human-center-glow"})]})]})}),o.jsx("section",{className:"education-pillars",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"education-section-head",children:[o.jsx("h2",{children:"How it works"}),o.jsx("p",{children:"Three steps to build a Identity that actually shows what you can do."})]}),o.jsxs("div",{className:"education-pillar-grid",children:[o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-fingerprint"}),o.jsx("span",{className:"training-step",children:"01"}),o.jsx("h3",{children:"Create your Identity"}),o.jsx("p",{children:"A unique digital profile with a shareable link. It's yours, it follows you across your whole working life, no matter where you work."})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-layer-group"}),o.jsx("span",{className:"training-step",children:"02"}),o.jsx("h3",{children:"Collect verified experience"}),o.jsx("p",{children:"Every experience at an ecosystem company is attested by whoever had you do it and recorded on the blockchain as an immutable credential. Attachments, roles, results â€” all verifiable."})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-share-nodes"}),o.jsx("span",{className:"training-step",children:"03"}),o.jsx("h3",{children:"Share when it counts"}),o.jsx("p",{children:"Choose field by field what's public, what's private, what's visible only to people with the link. You decide who sees what."})]})]})]})}),o.jsx("section",{className:"identity-inputs","aria-labelledby":"identity-inputs-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"identity-inputs-head",children:[o.jsx("h2",{id:"identity-inputs-title",children:"What you can put in the Identity"}),o.jsx("p",{children:"Concrete experience, not generic keywords."})]}),o.jsxs("div",{className:"identity-inputs-grid",children:[o.jsxs("article",{className:"identity-input-card work",children:[o.jsx("span",{className:"identity-card-number",children:"01"}),o.jsx("span",{className:"identity-input-icon",children:o.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"})}),o.jsx("h3",{children:"Work experience"}),o.jsx("p",{children:"Roles, projects, responsibilities at ecosystem companies."})]}),o.jsxs("article",{className:"identity-input-card academy",children:[o.jsx("span",{className:"identity-card-number",children:"02"}),o.jsx("span",{className:"identity-input-icon",children:o.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),o.jsx("h3",{children:"Academy tracks"}),o.jsx("p",{children:"Courses and training completed with sponsors and learning partners."})]}),o.jsxs("article",{className:"identity-input-card projects",children:[o.jsx("span",{className:"identity-card-number",children:"03"}),o.jsx("span",{className:"identity-input-icon",children:o.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),o.jsx("h3",{children:"Projects"}),o.jsx("p",{children:"Work delivered, with results, duration and the role you played."})]}),o.jsxs("article",{className:"identity-input-card skills",children:[o.jsx("span",{className:"identity-card-number",children:"04"}),o.jsx("span",{className:"identity-input-icon",children:o.jsx("i",{className:"fa-solid fa-language","aria-hidden":"true"})}),o.jsx("h3",{children:"Skills & languages"}),o.jsx("p",{children:"Technical skills, soft skills, languages - linked to the experience that proves them."})]})]})]})}),o.jsx("section",{className:"identity-difference","aria-labelledby":"identity-difference-title",children:o.jsxs("div",{className:"wrap",children:[o.jsx("div",{className:"identity-difference-head",children:o.jsx("h2",{id:"identity-difference-title",children:"Why it's different"})}),o.jsxs("div",{className:"identity-difference-grid",children:[o.jsxs("article",{children:[o.jsx("span",{className:"difference-line"}),o.jsx("span",{className:"difference-icon",children:o.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),o.jsx("h3",{children:"Verified at the source, signed on-chain"}),o.jsx("p",{children:"Every experience is attested by whoever had you do it and anchored on the blockchain as a verifiable credential. Not words, cryptographic proof."})]}),o.jsxs("article",{children:[o.jsx("span",{className:"difference-line"}),o.jsx("span",{className:"difference-icon",children:o.jsx("i",{className:"fa-solid fa-user-lock","aria-hidden":"true"})}),o.jsx("h3",{children:"Under your control"}),o.jsx("p",{children:"You decide what's public, what's private and what's visible only via a shared link."})]}),o.jsxs("article",{children:[o.jsx("span",{className:"difference-line"}),o.jsx("span",{className:"difference-icon",children:o.jsx("i",{className:"fa-solid fa-infinity","aria-hidden":"true"})}),o.jsx("h3",{children:"For your whole career"}),o.jsx("p",{children:"The Identity follows you from one role to the next. It grows with you, even if you change company."})]})]})]})}),o.jsx("section",{className:"ecosystem-connect","aria-labelledby":"ecosystem-connect-title",children:o.jsxs("div",{className:"wrap ecosystem-connect-grid",children:[o.jsxs("div",{className:"ecosystem-connect-media",children:[o.jsx("img",{src:"/images/connected-ecosystem.jpeg",alt:"ecosystem workspace"}),o.jsxs("div",{className:"ecosystem-connect-badge",children:[o.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),"Identity connects the ecosystem"]})]}),o.jsxs("div",{className:"ecosystem-connect-copy",children:[o.jsx("h2",{id:"ecosystem-connect-title",children:"Connected to the rest of the ecosystem"}),o.jsx("p",{children:"The Identity isn't an isolated page. It's where the two doors of ei.one meet."}),o.jsxs("div",{className:"ecosystem-connection-list",children:[o.jsxs("article",{children:[o.jsx("span",{className:"ecosystem-connection-icon",children:o.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),o.jsx("strong",{children:"Academy"}),o.jsx("p",{children:"when you finish a learning track, the experience lands straight in your Identity"}),o.jsx("em",{children:"coming soon"})]}),o.jsxs("article",{children:[o.jsx("span",{className:"ecosystem-connection-icon",children:o.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),o.jsx("strong",{children:"Recruitment"}),o.jsx("p",{children:"companies search on the experience in your Identity, not on CVs"}),o.jsx("em",{children:"coming soon"})]}),o.jsxs("article",{children:[o.jsx("span",{className:"ecosystem-connection-icon",children:o.jsx("i",{className:"fa-solid fa-people-group","aria-hidden":"true"})}),o.jsx("strong",{children:"Business Ecosystem"}),o.jsx("p",{children:"the ecosystem companies attest the experience you've built working with them"})]})]})]})]})}),o.jsx("section",{className:"identity-start","aria-labelledby":"identity-start-title",children:o.jsxs("div",{className:"wrap identity-start-grid",children:[o.jsxs("div",{className:"identity-start-copy",children:[o.jsx("h2",{id:"identity-start-title",children:"Start building your Identity."}),o.jsx("p",{children:"Open the app, sign up and start adding your first experiences."}),o.jsxs("div",{className:"identity-start-actions",children:[o.jsx("a",{className:"button identity-primary",href:"/register",children:"Create your Identity"}),o.jsx("a",{className:"button identity-login",href:"/login",children:"Log in"}),o.jsx("a",{className:"button identity-outline",href:"/talent",children:"Back to Talent"})]})]}),o.jsxs("div",{className:"identity-start-preview","aria-hidden":"true",children:[o.jsx("span",{className:"identity-start-dot"}),o.jsxs("div",{children:[o.jsx("strong",{children:"01"}),o.jsx("span",{children:"Create Identity"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"02"}),o.jsx("span",{children:"Add experience"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"03"}),o.jsx("span",{children:"Share proof"})]})]})]})})]}),o.jsx(Ts,{})]})}function fs(l,t,i="name"){let s=document.head.querySelector(`meta[${i}="${l}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,l),document.head.appendChild(s)),s.setAttribute("content",t)}function gA(){return Ri.useEffect(()=>{const l="Enterprise - EI.one Economic Sustainability",t="EI.one Enterprise turns internships, project work and mentoring into verified talent, trusted partnerships and business growth.";document.title=l,fs("description",t),fs("keywords","EI.one enterprise, economy, business ecosystem, verified talent, economic sustainability, business growth"),fs("og:title",l,"property"),fs("og:description",t,"property"),fs("og:url","https://ei.one/en/economy","property"),fs("twitter:title",l),fs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/economy")},[]),o.jsxs(o.Fragment,{children:[o.jsx(bs,{loginHref:"/login",languagePage:"economy.php"}),o.jsxs("main",{className:"economy-page",children:[o.jsx("section",{className:"economy-hero",children:o.jsxs("div",{className:"wrap economy-hero-grid",children:[o.jsxs("div",{className:"economy-hero-copy",children:[o.jsx("h1",{children:"Enterprise"}),o.jsx("h2",{children:"Turn experience into business growth."}),o.jsx("p",{children:"Internships, project work and mentoring become a channel of verified talent, trusted partnerships and a qualified commercial network. Your experiences attract the best. The best grow your business."}),o.jsxs("div",{className:"economy-hero-actions",children:[o.jsx("a",{className:"button",href:"/en/business-club.php",children:"Enter Business Ecosystem"}),o.jsx("a",{className:"button secondary",href:"/en/partner.php",children:"Become a Partner"})]})]}),o.jsxs("div",{className:"economy-hero-visual","aria-label":"Business growth ecosystem preview",children:[o.jsxs("div",{className:"economy-growth-card main",children:[o.jsx("span",{children:o.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),o.jsx("strong",{children:"Business growth"})]}),o.jsxs("div",{className:"economy-growth-card talent",children:[o.jsx("span",{children:o.jsx("i",{className:"fa-solid fa-user-check","aria-hidden":"true"})}),o.jsx("strong",{children:"Verified talent"})]}),o.jsxs("div",{className:"economy-growth-card network",children:[o.jsx("span",{children:o.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),o.jsx("strong",{children:"Trusted partnerships"})]}),o.jsx("div",{className:"economy-orbit one"}),o.jsx("div",{className:"economy-orbit two"})]})]})}),o.jsx("section",{className:"economic-thinking","aria-labelledby":"economic-thinking-title",children:o.jsxs("div",{className:"wrap economic-thinking-grid",children:[o.jsxs("div",{className:"economic-thinking-copy",children:[o.jsx("h2",{id:"economic-thinking-title",children:"New Economic Thinking"}),o.jsx("p",{children:"For us, economic sustainability means more than just financial success. It stands for stable, resilient, and long-term viable business models that promote innovation, use resources efficiently, and simultaneously make a positive contribution to society."}),o.jsx("p",{children:"At EI.one - Ecosystem Intelligence, we develop an intelligent ecosystem that connects companies, technologies, talents, and investors. Our goal is to support organizations in creating sustainable value, opening new markets, and strengthening their competitiveness in the long term."}),o.jsxs("div",{className:"economic-thinking-tags",children:[o.jsx("span",{children:"Stable models"}),o.jsx("span",{children:"Efficient resources"}),o.jsx("span",{children:"New markets"})]})]}),o.jsxs("div",{className:"economic-thinking-media",children:[o.jsx("img",{src:"/images/economic-thinking.jpg",alt:"Digital economic sustainability and business innovation concept"}),o.jsxs("div",{className:"economic-thinking-stat",children:[o.jsx("strong",{children:"Long-term value"}),o.jsx("span",{children:"companies + technologies + talents + investors"})]})]})]})}),o.jsx("section",{className:"technology-strategy","aria-labelledby":"technology-strategy-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"technology-strategy-head",children:[o.jsx("h2",{id:"technology-strategy-title",children:"Technology & Strategy"}),o.jsx("p",{children:"By combining digitalization, platform economy, artificial intelligence, and strategic networks, we enable more efficient work and faster innovation."})]}),o.jsxs("div",{className:"technology-system",children:[o.jsxs("div",{className:"technology-system-hub",children:[o.jsx("span",{children:o.jsx("i",{className:"fa-solid fa-wand-magic-sparkles","aria-hidden":"true"})}),o.jsx("strong",{children:"Faster innovation"}),o.jsx("small",{children:"Technology, networks and resilience working as one operating system."})]}),o.jsxs("article",{className:"technology-system-node digitalization",children:[o.jsx("span",{className:"strategy-icon",children:o.jsx("i",{className:"fa-solid fa-microchip","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Digitalization"}),o.jsx("p",{children:"Optimization of processes through cutting-edge technologies."})]})]}),o.jsxs("article",{className:"technology-system-node networks",children:[o.jsx("span",{className:"strategy-icon",children:o.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Networks"}),o.jsx("p",{children:"Strategic connections for collective growth."})]})]}),o.jsxs("article",{className:"technology-system-node resilience",children:[o.jsx("span",{className:"strategy-icon",children:o.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Resilience"}),o.jsx("p",{children:"Stability even in times of global change."})]})]})]})]})}),o.jsx("section",{className:"future-proof","aria-labelledby":"future-proof-title",children:o.jsxs("div",{className:"wrap future-proof-grid",children:[o.jsxs("div",{className:"future-proof-copy",children:[o.jsx("h2",{id:"future-proof-title",children:"Future-Proof Systems"}),o.jsx("p",{children:"Economic sustainability for us means creating systems that remain stable even in times of uncertainty and global change. Companies should not only grow but continuously evolve and become resilient to change."}),o.jsxs("div",{className:"future-proof-statement",children:[o.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),o.jsx("span",{children:"EI.one stands for a new generation of economic systems - intelligent, connected, and sustainable."})]})]}),o.jsxs("div",{className:"future-proof-media",children:[o.jsx("img",{src:"/images/future-proof.jpeg",alt:"Future-proof connected system network"}),o.jsxs("div",{className:"future-proof-signals","aria-hidden":"true",children:[o.jsx("span",{children:"Stable"}),o.jsx("span",{children:"Connected"}),o.jsx("span",{children:"Sustainable"})]})]})]})}),o.jsx("section",{className:"economy-final-cta","aria-labelledby":"economy-final-title",children:o.jsx("div",{className:"wrap economy-final-grid",children:o.jsxs("div",{className:"economy-final-copy",children:[o.jsx("h2",{id:"economy-final-title",children:"Ready for the Economy of the Future?"}),o.jsx("p",{children:"Become part of an ecosystem that generates innovation and sustainable added value."}),o.jsxs("div",{className:"economy-final-actions",children:[o.jsx("a",{className:"button economy-final-primary",href:"/en/partner.php",children:"Become a Partner"}),o.jsx("a",{className:"button economy-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})})]}),o.jsx(Ts,{})]})}function ds(l,t,i="name"){let s=document.head.querySelector(`meta[${i}="${l}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,l),document.head.appendChild(s)),s.setAttribute("content",t)}function vA(){return Ri.useEffect(()=>{const l="Environment - EI.one Ecological Sustainability",t="EI.one Environment combines innovation, renewable energies and measurable projects so environmental sustainability becomes an operational choice.";document.title=l,ds("description",t),ds("keywords","EI.one environment, ecological sustainability, renewable energies, measurable projects, sustainable innovation"),ds("og:title",l,"property"),ds("og:description",t,"property"),ds("og:url","https://ei.one/en/environment","property"),ds("twitter:title",l),ds("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/environment")},[]),o.jsxs(o.Fragment,{children:[o.jsx(bs,{loginHref:"/login",languagePage:"environment.php"}),o.jsxs("main",{className:"environment-page",children:[o.jsx("section",{className:"environment-hero",children:o.jsxs("div",{className:"wrap environment-hero-grid",children:[o.jsxs("div",{className:"environment-hero-copy",children:[o.jsx("h1",{children:"Environment"}),o.jsx("p",{children:"Innovation and renewable energies with measurable projects. Environmental sustainability as an operational choice, not as a slogan."}),o.jsxs("div",{className:"environment-hero-actions",children:[o.jsx("a",{className:"button",href:"/en/projects.php",children:"Discover Projects"}),o.jsx("a",{className:"button secondary",href:"/en/contact.php",children:"Contact"})]})]}),o.jsxs("div",{className:"environment-hero-visual","aria-label":"Ecological sustainability system preview",children:[o.jsxs("div",{className:"environment-core",children:[o.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),o.jsx("strong",{children:"Operational sustainability"})]}),o.jsxs("div",{className:"environment-node energy",children:[o.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"}),o.jsx("span",{children:"Renewable energy"})]}),o.jsxs("div",{className:"environment-node projects",children:[o.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),o.jsx("span",{children:"Measurable projects"})]}),o.jsxs("div",{className:"environment-node impact",children:[o.jsx("i",{className:"fa-solid fa-chart-simple","aria-hidden":"true"}),o.jsx("span",{children:"Visible impact"})]})]})]})}),o.jsx("section",{className:"protect-environment","aria-labelledby":"protect-environment-title",children:o.jsxs("div",{className:"wrap protect-environment-grid",children:[o.jsxs("div",{className:"protect-environment-copy",children:[o.jsx("h2",{id:"protect-environment-title",children:"Protecting Our Environment"}),o.jsx("p",{children:"Protecting our environment is one of the central challenges of the 21st century. For us, ecological sustainability means using natural resources responsibly, using energy efficiently, and developing technologies that reduce the ecological footprint of our economy."}),o.jsx("p",{children:"At EI.one, we combine technological innovation with ecological awareness. Our approach is based on the conviction that sustainable solutions are not only necessary but also offer enormous opportunities for the economy, society, and innovation."}),o.jsxs("div",{className:"protect-environment-points",children:[o.jsx("span",{children:"Responsible resources"}),o.jsx("span",{children:"Efficient energy"}),o.jsx("span",{children:"Reduced footprint"})]})]}),o.jsxs("div",{className:"protect-environment-media",children:[o.jsx("img",{src:"/images/ecological-sustainability.jpg",alt:"Ecological sustainability tree with technology and people"}),o.jsxs("div",{className:"protect-environment-badge",children:[o.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),"Ecology meets innovation"]})]})]})}),o.jsx("section",{className:"sustainable-solutions","aria-labelledby":"sustainable-solutions-title",children:o.jsxs("div",{className:"wrap sustainable-solutions-grid",children:[o.jsxs("div",{className:"sustainable-solutions-intro",children:[o.jsx("h2",{id:"sustainable-solutions-title",children:"Sustainable Solutions"}),o.jsx("p",{children:"Through projects in the fields of renewable energy and energy efficiency, we support companies in making their processes more environmentally friendly."})]}),o.jsxs("div",{className:"sustainable-path",children:[o.jsxs("article",{children:[o.jsx("span",{className:"solution-icon",children:o.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Renewable Energies"}),o.jsx("p",{children:"Focus on climate-friendly energy systems."})]})]}),o.jsxs("article",{children:[o.jsx("span",{className:"solution-icon",children:o.jsx("i",{className:"fa-solid fa-building-shield","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Intelligent Infrastructure"}),o.jsx("p",{children:"Efficient and resource-saving buildings."})]})]}),o.jsxs("article",{children:[o.jsx("span",{className:"solution-icon",children:o.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Resource Preservation"}),o.jsx("p",{children:"Reducing the ecological footprint."})]})]})]})]})}),o.jsx("section",{className:"ecological-progress","aria-labelledby":"ecological-progress-title",children:o.jsxs("div",{className:"wrap ecological-progress-grid",children:[o.jsxs("div",{className:"ecological-progress-copy",children:[o.jsx("h2",{id:"ecological-progress-title",children:"Ecological Sustainability is Progress"}),o.jsx("p",{children:"For us, ecological sustainability does not mean renunciation, but progress. It stands for innovation, responsibility, and the possibility of combining economic development with the protection of our planet."}),o.jsx("p",{children:"El.one pursues the vision of a future where economy, technology, and environment are in balance -- an intelligent ecosystem that enables sustainable solutions."})]}),o.jsx("div",{className:"ecological-progress-visual",children:o.jsx("img",{src:"/images/circular-progress.png",alt:"Bright circular economy loop with renewable energy and recycled materials"})})]})}),o.jsx("section",{className:"environment-final-cta","aria-labelledby":"environment-final-title",children:o.jsxs("div",{className:"wrap environment-final-inner",children:[o.jsx("h2",{id:"environment-final-title",children:"Together for a Healthy Planet"}),o.jsx("p",{children:"Discover our projects for a climate-friendly economy."}),o.jsxs("div",{className:"environment-final-actions",children:[o.jsx("a",{className:"button environment-final-primary",href:"/en/projects.php",children:"Discover Projects"}),o.jsx("a",{className:"button environment-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})]}),o.jsx(Ts,{})]})}function hs(l,t,i="name"){let s=document.head.querySelector(`meta[${i}="${l}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,l),document.head.appendChild(s)),s.setAttribute("content",t)}function _A(){return Ri.useEffect(()=>{const l="Partners - EI.one",t="Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem built for sustainable growth.";document.title=l,hs("description",t),hs("keywords","EI.one partner, franchise partner, license partner, white label partner, ecosystem partnership"),hs("og:title",l,"property"),hs("og:description",t,"property"),hs("og:url","https://ei.one/en/partner","property"),hs("twitter:title",l),hs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/partner")},[]),o.jsxs(o.Fragment,{children:[o.jsx(bs,{loginHref:"/login",languagePage:"partner.php"}),o.jsxs("main",{className:"partner-page",children:[o.jsx("section",{className:"partner-hero",children:o.jsxs("div",{className:"wrap partner-hero-grid",children:[o.jsxs("div",{className:"partner-hero-copy",children:[o.jsx("h1",{children:"Partners"}),o.jsx("p",{children:"Building a sustainable future together. Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem."}),o.jsxs("div",{className:"partner-hero-actions",children:[o.jsx("a",{className:"button",href:"/en/contact.php",children:"Start a Partnership"}),o.jsx("a",{className:"button secondary",href:"/economy",children:"Explore Enterprise"})]})]}),o.jsxs("div",{className:"partner-hero-visual","aria-label":"EI.one partner ecosystem models",children:[o.jsxs("div",{className:"partner-core",children:[o.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),o.jsx("strong",{children:"Shared growth"})]}),o.jsx("div",{className:"partner-model franchise",children:o.jsx("strong",{children:"Franchise"})}),o.jsx("div",{className:"partner-model license",children:o.jsx("strong",{children:"License"})}),o.jsx("div",{className:"partner-model white-label",children:o.jsx("strong",{children:"White Label"})})]})]})}),o.jsx("section",{className:"partner-models","aria-labelledby":"partner-models-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"partner-models-head",children:[o.jsx("h2",{id:"partner-models-title",children:"Choose Your Model"}),o.jsx("p",{children:"Three ways to participate in the EI.one ecosystem, from full local leadership to modular activation and brand-integrated infrastructure."})]}),o.jsxs("div",{className:"partner-model-board",children:[o.jsxs("article",{className:"partner-option recommended",children:[o.jsx("span",{className:"partner-ribbon",children:"Recommended"}),o.jsx("div",{className:"partner-option-icon",children:o.jsx("i",{className:"fa-solid fa-building","aria-hidden":"true"})}),o.jsxs("div",{className:"partner-option-title",children:[o.jsx("h3",{children:"Franchise Partner"}),o.jsx("p",{children:"Build your Local Ecosystem"})]}),o.jsx("p",{children:"The Franchise Partner is the official EI.one representative in a territory. They manage and develop the local ecosystem, coordinating modules, partners, and clients."}),o.jsxs("div",{className:"partner-option-block",children:[o.jsx("h4",{children:"Who it's ideal for"}),o.jsxs("div",{className:"partner-tags",children:[o.jsx("span",{children:"Entrepreneurs"}),o.jsx("span",{children:"Regional Managers"}),o.jsx("span",{children:"Business Developers"}),o.jsx("span",{children:"Network Builders"})]})]}),o.jsxs("div",{className:"partner-option-block",children:[o.jsx("h4",{children:"What's included"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Exclusive territorial rights"}),o.jsx("li",{children:"Full EI.one brand"}),o.jsx("li",{children:"Access to all modules"}),o.jsx("li",{children:"Ongoing central support"}),o.jsx("li",{children:"Certified training"}),o.jsx("li",{children:"Governance system"})]})]}),o.jsx("a",{className:"button partner-option-button",href:"/en/contact.php",children:"Become a Franchise Partner"})]}),o.jsxs("article",{className:"partner-option",children:[o.jsx("div",{className:"partner-option-icon",children:o.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),o.jsxs("div",{className:"partner-option-title",children:[o.jsx("h3",{children:"License Partner"}),o.jsx("p",{children:"Activate a Module in the System"})]}),o.jsx("p",{children:"The License Partner uses one or more EI.one modules within their own company. They remain independent but operate according to ecosystem standards."}),o.jsxs("div",{className:"partner-option-block",children:[o.jsx("h4",{children:"Who it's ideal for"}),o.jsxs("div",{className:"partner-tags",children:[o.jsx("span",{children:"Existing companies"}),o.jsx("span",{children:"Consultants"}),o.jsx("span",{children:"Professional firms"}),o.jsx("span",{children:"Service providers"})]})]}),o.jsxs("div",{className:"partner-option-block",children:[o.jsx("h4",{children:"What's included"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Module usage license"}),o.jsx("li",{children:"Certified methodologies"}),o.jsx("li",{children:"Brand affiliation"}),o.jsx("li",{children:"Access to the network"}),o.jsx("li",{children:"Operational support"})]})]}),o.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Activate a License"})]}),o.jsxs("article",{className:"partner-option",children:[o.jsx("div",{className:"partner-option-icon",children:o.jsx("i",{className:"fa-solid fa-tag","aria-hidden":"true"})}),o.jsxs("div",{className:"partner-option-title",children:[o.jsx("h3",{children:"White Label Partner"}),o.jsx("p",{children:"Your Brand, Our Infrastructure"})]}),o.jsx("p",{children:'The White Label Partner uses EI.one technology, processes, and modules under their own brand. EI.one works "behind the scenes".'}),o.jsxs("div",{className:"partner-option-block",children:[o.jsx("h4",{children:"Who it's ideal for"}),o.jsxs("div",{className:"partner-tags",children:[o.jsx("span",{children:"Corporate"}),o.jsx("span",{children:"Large groups"}),o.jsx("span",{children:"International networks"}),o.jsx("span",{children:"Digital platforms"}),o.jsx("span",{children:"Industrial investors"})]})]}),o.jsxs("div",{className:"partner-option-block",children:[o.jsx("h4",{children:"What's included"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Customized system"}),o.jsx("li",{children:"Full infrastructure"}),o.jsx("li",{children:"Integrated modules"}),o.jsx("li",{children:"Strategic support"}),o.jsx("li",{children:"Global scalability"})]})]}),o.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Request White Label"})]})]})]})}),o.jsx("section",{className:"partner-comparison","aria-labelledby":"partner-comparison-title",children:o.jsxs("div",{className:"wrap",children:[o.jsx("div",{className:"partner-comparison-head",children:o.jsx("h2",{id:"partner-comparison-title",children:"Model Comparison"})}),o.jsx("div",{className:"comparison-table-wrap",children:o.jsxs("table",{className:"comparison-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{scope:"col",children:"Feature"}),o.jsx("th",{scope:"col",children:"Franchise"}),o.jsx("th",{scope:"col",children:"License"}),o.jsx("th",{scope:"col",children:"White Label"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:"EI.one Brand"}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status yes",children:[o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status partial",children:[o.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Partial"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status no",children:[o.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:"Territorial Rights"}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status yes",children:[o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Exclusive"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status no",children:[o.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status no",children:[o.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:"Operational Autonomy"}),o.jsx("td",{children:"Medium"}),o.jsx("td",{children:"High"}),o.jsx("td",{children:"Maximum"})]}),o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:"Module Access"}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status yes",children:[o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status partial",children:[o.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Selected"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status yes",children:[o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})})]}),o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:"Scalability"}),o.jsx("td",{children:"Very High"}),o.jsx("td",{children:"Medium"}),o.jsx("td",{children:"Maximum"})]}),o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:"Central Support"}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status yes",children:[o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status yes",children:[o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Operational"]})}),o.jsx("td",{children:o.jsxs("span",{className:"comparison-status yes",children:[o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Strategic"]})})]})]})]})})]})}),o.jsx("section",{className:"partner-benefits","aria-labelledby":"partner-benefits-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"partner-benefits-head",children:[o.jsx("h2",{id:"partner-benefits-title",children:"Why Become an EI.one Partner"}),o.jsx("p",{children:"By joining the EI Generation, you gain access to an already structured, tested, and sustainable growth-oriented ecosystem."})]}),o.jsxs("div",{className:"partner-benefit-map",children:[o.jsxs("div",{className:"partner-benefit-core",children:[o.jsx("span",{children:"You are not just a partner."}),o.jsx("strong",{children:"You are a co-builder of the system."})]}),o.jsxs("article",{className:"partner-benefit-item",children:[o.jsx("span",{className:"partner-benefit-icon",children:o.jsx("i",{className:"fa-solid fa-cubes","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Structured Ecosystem"}),o.jsx("p",{children:"Proven and functioning model"})]})]}),o.jsxs("article",{className:"partner-benefit-item",children:[o.jsx("span",{className:"partner-benefit-icon",children:o.jsx("i",{className:"fa-solid fa-headset","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Continuous Support"}),o.jsx("p",{children:"Dedicated assistance always available"})]})]}),o.jsxs("article",{className:"partner-benefit-item",children:[o.jsx("span",{className:"partner-benefit-icon",children:o.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Access to Projects"}),o.jsx("p",{children:"Real opportunities from the ecosystem"})]})]}),o.jsxs("article",{className:"partner-benefit-item",children:[o.jsx("span",{className:"partner-benefit-icon",children:o.jsx("i",{className:"fa-solid fa-globe","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Ecosystem Network"}),o.jsx("p",{children:"Connections with all the Business Units of the ecosystem"})]})]}),o.jsxs("article",{className:"partner-benefit-item",children:[o.jsx("span",{className:"partner-benefit-icon",children:o.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"ESG & Impact Focus"}),o.jsx("p",{children:"Sustainability as a strategy"})]})]}),o.jsxs("article",{className:"partner-benefit-item",children:[o.jsx("span",{className:"partner-benefit-icon",children:o.jsx("i",{className:"fa-solid fa-rocket","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Sustainable Growth"}),o.jsx("p",{children:"Controlled scalability"})]})]})]})]})}),o.jsx("section",{className:"partner-approach","aria-labelledby":"partner-approach-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"partner-approach-panel",children:[o.jsx("img",{src:"/images/our-approach.jpg",alt:"Business partners working together in a bright office"}),o.jsxs("div",{className:"partner-approach-copy",children:[o.jsx("h2",{id:"partner-approach-title",children:"Our Approach"}),o.jsx("p",{children:"At EI.one, we believe in concrete values that guide every partnership. We are not looking for simple affiliates. We are looking for ecosystem leaders."})]})]}),o.jsxs("div",{className:"approach-values",children:[o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-eye","aria-hidden":"true"}),o.jsx("span",{children:"Transparency"})]}),o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),o.jsx("span",{children:"Collaboration"})]}),o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-trophy","aria-hidden":"true"}),o.jsx("span",{children:"Meritocracy"})]}),o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),o.jsx("span",{children:"Responsibility"})]}),o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-heart","aria-hidden":"true"}),o.jsx("span",{children:"Trust"})]})]})]})}),o.jsx("section",{className:"partner-final-cta","aria-labelledby":"partner-final-title",children:o.jsxs("div",{className:"wrap partner-final-inner",children:[o.jsx("p",{className:"partner-final-kicker",children:"Join the EI Generation"}),o.jsx("h2",{id:"partner-final-title",children:"Are you ready to be part of the EI Generation?"}),o.jsx("p",{children:"Discover the model that suits you best and start your journey."}),o.jsxs("div",{className:"partner-final-actions",children:[o.jsx("a",{className:"button partner-final-primary",href:"/en/contact.php",children:"Become a Franchise Partner"}),o.jsx("a",{className:"button",href:"/en/contact.php",children:"Activate a License"}),o.jsx("a",{className:"button partner-final-outline",href:"/en/contact.php",children:"Request White Label"})]})]})})]}),o.jsx(Ts,{})]})}function ps(l,t,i="name"){let s=document.head.querySelector(`meta[${i}="${l}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,l),document.head.appendChild(s)),s.setAttribute("content",t)}function xA(){return Ri.useEffect(()=>{const l="For Investors - EI.one",t="EI.one gives investors access to a functioning, scalable ecosystem built around education, experience, economy, and environment.";document.title=l,ps("description",t),ps("keywords","EI.one investors, ecosystem investment, sustainable growth, scalable ecosystem, impact investment"),ps("og:title",l,"property"),ps("og:description",t,"property"),ps("og:url","https://ei.one/en/investor","property"),ps("twitter:title",l),ps("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/investor")},[]),o.jsxs(o.Fragment,{children:[o.jsx(bs,{loginHref:"/login",languagePage:"investor.php"}),o.jsxs("main",{className:"investor-page",children:[o.jsx("section",{className:"investor-hero",children:o.jsxs("div",{className:"wrap investor-hero-grid",children:[o.jsxs("div",{className:"investor-hero-copy",children:[o.jsx("h1",{children:"Investing in an Ecosystem"}),o.jsx("p",{children:"EI.one is not a single company idea. It is a functioning scalable system built around education, experience, economy, and environment."}),o.jsxs("div",{className:"investor-hero-actions",children:[o.jsx("a",{className:"button",href:"/en/contact.php",children:"Talk to us"}),o.jsx("a",{className:"button secondary",href:"/economy",children:"Explore the Ecosystem"})]})]}),o.jsxs("div",{className:"investor-hero-visual","aria-label":"Investor ecosystem growth model",children:[o.jsxs("div",{className:"investor-growth-card main",children:[o.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),o.jsx("strong",{children:"Scalable growth"}),o.jsx("span",{children:"One ecosystem, multiple value paths"})]}),o.jsxs("div",{className:"investor-signal education",children:[o.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),o.jsx("span",{children:"Education"})]}),o.jsxs("div",{className:"investor-signal experience",children:[o.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),o.jsx("span",{children:"Experience"})]}),o.jsxs("div",{className:"investor-signal economy",children:[o.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),o.jsx("span",{children:"Economy"})]}),o.jsxs("div",{className:"investor-signal environment",children:[o.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),o.jsx("span",{children:"Environment"})]})]})]})}),o.jsx("section",{className:"investor-relevance","aria-labelledby":"investor-relevance-title",children:o.jsxs("div",{className:"wrap investor-relevance-grid",children:[o.jsxs("div",{className:"investor-relevance-copy",children:[o.jsx("h2",{id:"investor-relevance-title",children:"Why EI.ONE is relevant"}),o.jsx("p",{children:"Investors invest not only in visions, but in a robust and resilient system offering security and growth."})]}),o.jsxs("div",{className:"investor-proof-system",children:[o.jsxs("div",{className:"investor-proof-core",children:[o.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),o.jsx("strong",{children:"Security + growth"})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),o.jsx("span",{children:"Real, operational companies"})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-arrows-rotate","aria-hidden":"true"}),o.jsx("span",{children:"Recurring business models"})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"}),o.jsx("span",{children:"Ecosystem synergies"})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-earth-europe","aria-hidden":"true"}),o.jsx("span",{children:"Regional diversification"})]}),o.jsxs("article",{children:[o.jsx("i",{className:"fa-solid fa-arrow-trend-up","aria-hidden":"true"}),o.jsx("span",{children:"Digital scalability"})]})]})]})}),o.jsx("section",{className:"investment-security","aria-labelledby":"investment-security-title",children:o.jsxs("div",{className:"wrap",children:[o.jsx("div",{className:"investment-security-head",children:o.jsx("h2",{id:"investment-security-title",children:"Investment Security"})}),o.jsxs("div",{className:"security-system",children:[o.jsxs("article",{children:[o.jsx("span",{className:"security-icon",children:o.jsx("i",{className:"fa-solid fa-users","aria-hidden":"true"})}),o.jsx("h3",{children:"Real Customers"}),o.jsx("p",{children:"Functioning customer acquisition directly from the ecosystem itself."})]}),o.jsxs("article",{children:[o.jsx("span",{className:"security-icon",children:o.jsx("i",{className:"fa-solid fa-user-graduate","aria-hidden":"true"})}),o.jsx("h3",{children:"Valuable Talent"}),o.jsx("p",{children:"Identified and developed talents increase productivity and company value."})]}),o.jsxs("article",{children:[o.jsx("span",{className:"security-icon",children:o.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"})}),o.jsx("h3",{children:"Diversification"}),o.jsx("p",{children:"Risk is distributed across different companies, industries, and regions."})]})]})]})}),o.jsx("section",{className:"investor-expect","aria-labelledby":"investor-expect-title",children:o.jsxs("div",{className:"wrap investor-expect-layout",children:[o.jsxs("div",{className:"investor-expect-head",children:[o.jsx("h2",{id:"investor-expect-title",children:"What to Expect"}),o.jsx("p",{children:"A clearer investment frame: tangible structures, defined roles, and impact logic that can scale over time."})]}),o.jsxs("div",{className:"expectation-strip",children:[o.jsxs("article",{children:[o.jsx("span",{className:"expectation-step",children:"01"}),o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-building-columns","aria-hidden":"true"}),o.jsx("h3",{children:"Real Structures"})]}),o.jsx("p",{children:"Access to tangible, operational structures"})]}),o.jsxs("article",{children:[o.jsx("span",{className:"expectation-step",children:"02"}),o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-sitemap","aria-hidden":"true"}),o.jsx("h3",{children:"Clear Roles"})]}),o.jsx("p",{children:"Clear separation between Holding, Ecosystem & Units"})]}),o.jsxs("article",{children:[o.jsx("span",{className:"expectation-step",children:"03"}),o.jsxs("div",{children:[o.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),o.jsx("h3",{children:"Impact"})]}),o.jsx("p",{children:"A long-term growth logic focusing on sustainability"})]})]})]})}),o.jsx("section",{className:"capital-structure","aria-labelledby":"capital-structure-title",children:o.jsxs("div",{className:"wrap capital-structure-grid",children:[o.jsxs("div",{className:"capital-structure-copy",children:[o.jsx("h2",{id:"capital-structure-title",children:"Capital Meets Structure"}),o.jsx("p",{children:"EI.ONE creates an environment where capital is used efficiently, growth is controlled and scaled, and risks are structurally reduced."}),o.jsxs("div",{className:"capital-highlight",children:[o.jsx("h3",{children:"Calculable Future"}),o.jsx("p",{children:"Companies grow together. Talents unleash potential. Capital has a lasting impact."})]}),o.jsx("a",{className:"button",href:"/en/contact.php",children:"Talk to Us"})]}),o.jsxs("div",{className:"capital-flow","aria-label":"Capital flow from structure to impact",children:[o.jsxs("div",{className:"capital-node source",children:[o.jsx("i",{className:"fa-solid fa-coins","aria-hidden":"true"}),o.jsx("span",{children:"Capital"})]}),o.jsxs("div",{className:"capital-node system",children:[o.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),o.jsx("span",{children:"Structure"})]}),o.jsxs("div",{className:"capital-node growth",children:[o.jsx("i",{className:"fa-solid fa-arrow-trend-up","aria-hidden":"true"}),o.jsx("span",{children:"Growth"})]}),o.jsxs("div",{className:"capital-node impact",children:[o.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),o.jsx("span",{children:"Impact"})]})]})]})})]}),o.jsx(Ts,{})]})}function yA(){const l=window.location.pathname.toLowerCase();return l.includes("/education")?o.jsx(pA,{}):l.includes("/experience-passport")?o.jsx(mA,{}):l.includes("/economy")?o.jsx(gA,{}):l.includes("/environment")?o.jsx(vA,{}):l.includes("/partner")?o.jsx(_A,{}):l.includes("/investor")?o.jsx(xA,{}):o.jsxs(o.Fragment,{children:[o.jsx(bs,{}),o.jsxs("main",{children:[o.jsxs("section",{className:"hero",children:[o.jsx(dA,{}),o.jsxs("div",{className:"hero-inner",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Ecosystem Intelligence"}),o.jsxs("h1",{children:["The infrastructure that turns every collaboration ",o.jsx("span",{className:"hero-accent",children:"into new opportunities for growth."})]}),o.jsxs("p",{className:"hero-copy",children:["EI.one connects ",o.jsx("strong",{children:"companies, people and schools"})," to turn every collaboration into new relationships, clients, talent and shared knowledge."]}),o.jsx("p",{className:"hero-copy",children:"Every experience feeds a patrimony of value that makes the entire ecosystem stronger, smarter and more capable of growth."}),o.jsxs("div",{className:"actions",children:[o.jsx("a",{className:"button",href:"/business-club",children:"I'm a company →"}),o.jsx("a",{className:"button secondary",href:"/talent",children:"I'm a person →"}),o.jsx("a",{className:"button secondary",href:"/education",children:"I'm a school →"})]})]}),o.jsxs("aside",{className:"login-panel",id:"login","aria-label":"Login panel",children:[o.jsx("h2",{children:"Login"}),o.jsx("p",{children:"Enter the platform"}),o.jsx("label",{className:"field-label",htmlFor:"login-email",children:"Email"}),o.jsx("input",{className:"field",id:"login-email",type:"email",placeholder:"you@email.com"}),o.jsx("label",{className:"field-label",htmlFor:"login-password",children:"Password"}),o.jsx("input",{className:"field",id:"login-password",type:"password",placeholder:"••••••••"}),o.jsx("div",{className:"login-options",children:o.jsx("a",{href:"#",children:"Forgot password?"})}),o.jsx("a",{className:"button full",href:"#",children:"Log in →"}),o.jsxs("p",{className:"login-join",children:["No account yet? ",o.jsx("a",{className:"text-link",href:"/register",children:"Join ei.one"})]})]})]})]}),o.jsx("section",{className:"protagonists","aria-labelledby":"protagonists-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"protagonists-head",children:[o.jsx("h2",{id:"protagonists-title",children:"Three protagonists. One same growth."}),o.jsx("p",{children:"Experience is the raw material. ei.one turns it into value for all three."})]}),o.jsxs("div",{className:"protagonists-grid",children:[o.jsxs("article",{className:"protagonist-card",children:[o.jsx("h3",{children:"For companies — Business growth"}),o.jsx("p",{children:"Turn internships, project work and mentoring into a channel of verified talent, trusted partnerships and qualified commercial network."}),o.jsx("p",{className:"protagonist-quote",children:'"Your experiences attract the best. The best grow your business."'}),o.jsx("a",{className:"protagonist-link",href:"/economy",children:"For companies →"})]}),o.jsxs("article",{className:"protagonist-card",children:[o.jsx("h3",{children:"For talents — Experience Passport"}),o.jsx("p",{children:"Transform internships, projects, mentoring and learning experiences into a verified record of your growth."}),o.jsx("p",{className:"protagonist-quote",children:'"Your experiences become your proof. Your proof becomes your opportunity."'}),o.jsx("a",{className:"protagonist-link",href:"/experience-passport",children:"For people →"})]}),o.jsxs("article",{className:"protagonist-card",children:[o.jsx("h3",{children:"For education — Academy growth"}),o.jsx("p",{children:"Connect learning paths, projects and mentoring into an ecosystem where skills become visible and development continues."}),o.jsx("p",{className:"protagonist-quote",children:'"When learning is connected, growth becomes measurable."'}),o.jsx("a",{className:"protagonist-link",href:"/education",children:"For Schools →"})]})]})]})}),o.jsx("section",{className:"connections","aria-labelledby":"connections-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"connections-head",children:[o.jsx("p",{className:"connections-kicker",children:"Network signals"}),o.jsx("h2",{id:"connections-title",children:"Who we're connected with"}),o.jsx("p",{children:"For clarity, here is the nature of each relationship below."})]}),o.jsxs("div",{className:"connections-grid",children:[o.jsxs("div",{className:"connection-item",children:[o.jsx("a",{className:"connection-logo logo-togo",href:"https://stiftung-togo.ch/",target:"_blank",rel:"noopener","aria-label":"ToGo opening eyes",children:o.jsxs("span",{children:["To",o.jsx("span",{className:"red",children:"Go"})," ",o.jsx("span",{className:"green",children:"opening eyes"})]})}),o.jsx("div",{className:"connection-label",children:"Supported Foundation"})]}),o.jsxs("div",{className:"connection-item",children:[o.jsx("a",{className:"connection-logo logo-sva",href:"https://svazurich.ch/",target:"_blank",rel:"noopener","aria-label":"SVA Zurich",children:o.jsxs("span",{children:[o.jsx("strong",{children:"SVA"})," Zürich"]})}),o.jsx("div",{className:"connection-label",children:"Award Received"})]}),o.jsxs("div",{className:"connection-item",children:[o.jsxs("a",{className:"connection-logo logo-innovation",href:"https://www.standort-zuerich.ch/",target:"_blank",rel:"noopener","aria-label":"Innovation Zurich",children:[o.jsx("span",{className:"innovation-mark","aria-hidden":"true"}),o.jsxs("span",{children:["Innovation",o.jsx("br",{}),"Zurich"]})]}),o.jsx("div",{className:"connection-label",children:"Local Network"})]}),o.jsxs("div",{className:"connection-item",children:[o.jsx("a",{className:"connection-logo logo-eye",href:"https://augenarztpraxis-baden.ch/",target:"_blank",rel:"noopener","aria-label":"AugenarztpraxisPlus",children:"AugenarztpraxisPlus"}),o.jsx("div",{className:"connection-label",children:"Sponsor"})]}),o.jsxs("div",{className:"connection-item",children:[o.jsxs("a",{className:"connection-logo logo-sgo",href:"https://www.sgo-verein.ch/",target:"_blank",rel:"noopener","aria-label":"SGO Verein",children:[o.jsx("span",{children:"SGO"}),o.jsx("small",{children:"www.sgo-verein.ch"})]}),o.jsx("div",{className:"connection-label",children:"Professional Network"})]})]})]})}),o.jsx("section",{className:"platform-status","aria-labelledby":"platform-status-title",children:o.jsx("div",{className:"wrap",children:o.jsxs("div",{className:"status-panel",children:[o.jsxs("div",{className:"status-head",children:[o.jsx("p",{children:"Platform Status Today"}),o.jsx("h2",{id:"platform-status-title",children:"What is live now, and what comes next"})]}),o.jsxs("div",{className:"status-grid",children:[o.jsxs("div",{className:"status-column live-column",children:[o.jsxs("div",{className:"status-badge",children:[o.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"}),"Live today"]}),o.jsxs("ul",{className:"status-list",children:[o.jsxs("li",{className:"live",children:[o.jsx("i",{className:"fa-solid fa-user-plus","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"ei.one account"}),o.jsx("small",{children:"Create your access and enter the platform."})]}),o.jsx("em",{children:"Live"})]}),o.jsxs("li",{className:"live",children:[o.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Experience Identity"}),o.jsx("small",{children:"Build a verified record of what you actually did."})]}),o.jsx("em",{children:"Live"})]}),o.jsxs("li",{className:"live",children:[o.jsx("i",{className:"fa-solid fa-share-nodes","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Verified experiences"}),o.jsx("small",{children:"Add and share experiences attested by companies."})]}),o.jsx("em",{children:"Live"})]}),o.jsxs("li",{className:"live",children:[o.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Business Units"}),o.jsx("small",{children:"Connect with the active ecosystem network."})]}),o.jsx("em",{children:"Live"})]})]})]}),o.jsxs("div",{className:"status-column soon-column",children:[o.jsxs("div",{className:"status-badge soon",children:[o.jsx("i",{className:"fa-solid fa-clock","aria-hidden":"true"}),"Coming soon"]}),o.jsxs("ul",{className:"status-list",children:[o.jsxs("li",{className:"soon",children:[o.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Academy"}),o.jsx("small",{children:"Learning paths with sponsors and partners."})]}),o.jsx("em",{children:"Soon"})]}),o.jsxs("li",{className:"soon",children:[o.jsx("i",{className:"fa-solid fa-magnifying-glass-chart","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Recruitment"}),o.jsx("small",{children:"Companies searching on the Identity."})]}),o.jsx("em",{children:"Soon"})]}),o.jsxs("li",{className:"soon",children:[o.jsx("i",{className:"fa-solid fa-store","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Extended Marketplace"}),o.jsx("small",{children:"Broader access to ecosystem opportunities."})]}),o.jsx("em",{children:"Planned"})]}),o.jsxs("li",{className:"soon",children:[o.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Credential verification"}),o.jsx("small",{children:"On-chain verification for trusted records."})]}),o.jsx("em",{children:"Planned"})]})]})]})]})]})})}),o.jsx("section",{className:"entry-doors","aria-labelledby":"entry-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"entry-head",children:[o.jsx("h2",{id:"entry-title",children:"Where do you want to enter?"}),o.jsx("p",{children:"ei.one is two things held together: an ecosystem of Business Units working in sync, and a platform that rewards the people who work inside it. Pick the right door for you."})]}),o.jsxs("div",{className:"entry-grid",children:[o.jsxs("article",{className:"entry-card companies",children:[o.jsx("div",{className:"entry-kicker",children:"For companies"}),o.jsx("h3",{children:"Activate the ecosystem."}),o.jsx("p",{className:"entry-copy",children:"A system of specialised Business Units — energy, sales, marketing, IT & AI, real estate, 3D — working together. Enter through one, benefit from all."}),o.jsxs("ul",{className:"entry-list",children:[o.jsxs("li",{children:[o.jsx("i",{className:"fa-solid fa-network-wired entry-check","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Business Ecosystem"}),o.jsx("small",{children:"The Business Units in the network"})]})]}),o.jsxs("li",{children:[o.jsx("i",{className:"fa-solid fa-handshake entry-check","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Become a Partner"}),o.jsx("small",{children:"Franchise, license, white label"})]})]}),o.jsxs("li",{children:[o.jsx("i",{className:"fa-solid fa-chart-line entry-check","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Sponsor & Investor"}),o.jsx("small",{children:"Presence and growth"})]})]})]}),o.jsx("a",{className:"entry-link",href:"/business-club",children:"Enter Companies →"})]}),o.jsxs("article",{className:"entry-card talents",children:[o.jsx("div",{className:"entry-kicker",children:"For talents"}),o.jsx("h3",{children:"Build your Experience Identity."}),o.jsx("p",{className:"entry-copy",children:"Learn through the Academy, accumulate verified experience inside the ecosystem's companies, get found when a company actually needs what you can do."}),o.jsxs("ul",{className:"entry-list",children:[o.jsxs("li",{children:[o.jsx("i",{className:"fa-solid fa-id-card entry-check","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Experience Identity"}),o.jsx("small",{children:"Your verified CV"})]}),o.jsx("em",{className:"entry-pill",children:"Live"})]}),o.jsxs("li",{children:[o.jsx("i",{className:"fa-solid fa-graduation-cap entry-check","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Academy"}),o.jsx("small",{children:"Learn on the job"})]}),o.jsx("em",{className:"entry-pill preview",children:"Soon"})]}),o.jsxs("li",{children:[o.jsx("i",{className:"fa-solid fa-magnifying-glass-chart entry-check","aria-hidden":"true"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Recruitment"}),o.jsx("small",{children:"Get found"})]}),o.jsx("em",{className:"entry-pill preview",children:"Soon"})]})]}),o.jsx("a",{className:"entry-link",href:"/talent",children:"Enter Talents →"})]})]})]})}),o.jsx("section",{className:"company-effects","aria-labelledby":"company-effects-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"effects-head",children:[o.jsx("h2",{id:"company-effects-title",children:"What changes for a company that joins ei.one"}),o.jsx("p",{children:'Five concrete effects that turn a business from "a workplace" into a hub of value for society.'})]}),o.jsxs("div",{className:"effects-grid",children:[o.jsxs("article",{className:"effect-card",children:[o.jsx("span",{className:"effect-number",children:"01"}),o.jsx("span",{className:"effect-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-handshake"})}),o.jsx("h3",{children:"New commercial relationships"}),o.jsx("p",{children:"Access to the Business Units and the customers already operating inside the ecosystem."})]}),o.jsxs("article",{className:"effect-card",children:[o.jsx("span",{className:"effect-number",children:"02"}),o.jsx("span",{className:"effect-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-graduation-cap"})}),o.jsx("h3",{children:"Talent attracted"}),o.jsx("p",{children:"The best people come to companies that offer experience verifiable in the Identity."})]}),o.jsxs("article",{className:"effect-card",children:[o.jsx("span",{className:"effect-number",children:"03"}),o.jsx("span",{className:"effect-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-brain"})}),o.jsx("h3",{children:"Skills developed"}),o.jsx("p",{children:"The workplace becomes a learning engine for the people who work in it."})]}),o.jsxs("article",{className:"effect-card",children:[o.jsx("span",{className:"effect-number",children:"04"}),o.jsx("span",{className:"effect-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-eye"})}),o.jsx("h3",{children:"Amplified visibility"}),o.jsx("p",{children:"Presence inside the marketplace and across ecosystem activations."})]}),o.jsxs("article",{className:"effect-card",children:[o.jsx("span",{className:"effect-number",children:"05"}),o.jsx("span",{className:"effect-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-leaf"})}),o.jsx("h3",{children:"Measurable ESG impact"}),o.jsx("p",{children:"Real indicators on sustainability, inclusion, and governance — verifiable."})]})]}),o.jsx("p",{className:"effects-closing",children:"The company is no longer just a workplace. It becomes a hub of value for society."})]})}),o.jsx("section",{className:"training-modules","aria-labelledby":"training-title",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{className:"training-head",children:[o.jsx("p",{className:"training-kicker",children:"Company learning engine"}),o.jsx("h2",{id:"training-title",children:"How the company trains and attests its people"}),o.jsx("p",{children:"Three modules — one to build skills, one to attest them, one to make them findable. Together they make the company a growth engine for the people who work there."})]}),o.jsxs("div",{className:"training-grid",children:[o.jsxs("a",{className:"training-card academy",href:"/academy",children:[o.jsx("span",{className:"training-step",children:"01"}),o.jsx("span",{className:"training-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-graduation-cap"})}),o.jsxs("h3",{children:["1. Academy ",o.jsx("span",{className:"module-pill",children:"Preview"})]}),o.jsx("p",{children:"Sponsors and partners of the ecosystem build the learning paths. You learn where you work."}),o.jsx("span",{className:"training-link",children:"Discover Academy→"})]}),o.jsxs("a",{className:"training-card identity",href:"/experience-passport",children:[o.jsx("span",{className:"training-step",children:"02"}),o.jsx("span",{className:"training-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-passport"})}),o.jsxs("h3",{children:["2. Experience Identity ",o.jsx("span",{className:"module-pill live",children:"Live"})]}),o.jsx("p",{children:"Your digital record of what you actually did. Verified by the ecosystem's companies who saw you do it."}),o.jsx("span",{className:"training-link",children:"Discover the Identity→"})]}),o.jsxs("a",{className:"training-card recruitment",href:"/recruitment",children:[o.jsx("span",{className:"training-step",children:"03"}),o.jsx("span",{className:"training-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-handshake"})}),o.jsxs("h3",{children:["3. Recruitment ",o.jsx("span",{className:"module-pill",children:"Preview"})]}),o.jsx("p",{children:"Companies hire on Identity experience, not CV keywords. The matches are real."}),o.jsx("span",{className:"training-link",children:"Discover Recruitment→"})]})]})]})}),o.jsx("section",{className:"why-now","aria-labelledby":"why-now-title",children:o.jsxs("div",{className:"wrap why-grid",children:[o.jsxs("div",{className:"why-copy",children:[o.jsx("h2",{id:"why-now-title",children:"Why now"}),o.jsxs("div",{className:"why-points",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"The job market is changing fast."})," AI is rewriting roles faster than CVs can keep up. Résumés say less and less about what a person can actually do, and companies struggle more and more to find the right skills."]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Our answer."})," Put real, verified experience at the centre — not keywords. Every entry in the Identity is attested by the company that gave you the work. It's a fairer, more honest way to show what you're worth."]}),o.jsxs("p",{children:[o.jsx("strong",{children:"How the ecosystem moves."})," Companies work together and train people on the job. People accumulate verified experience. That experience is what hiring companies search on. Value circulates."]})]})]}),o.jsx("div",{className:"why-media",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82",alt:"Bright office desk with computer analytics dashboard and plants"})})]})}),o.jsx("section",{className:"building","aria-labelledby":"building-title",children:o.jsxs("div",{className:"wrap",children:[o.jsx("div",{className:"building-head",children:o.jsx("h2",{id:"building-title",children:"What we're building"})}),o.jsxs("div",{className:"building-callout",children:[o.jsx("div",{children:"ei.one isn't a services platform."}),o.jsx("div",{children:"It's the infrastructure that turns companies into hubs of learning, innovation and growth."})]}),o.jsxs("div",{className:"building-grid",children:[o.jsxs("article",{className:"building-card",children:[o.jsx("span",{className:"building-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-passport"})}),o.jsx("h3",{children:"Verified experience"}),o.jsx("p",{children:"What you did, attested by the people who saw you do it."})]}),o.jsxs("article",{className:"building-card",children:[o.jsx("span",{className:"building-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-graduation-cap"})}),o.jsx("h3",{children:"Talents that grow"}),o.jsx("p",{children:"Room to discover what you're good at and develop it over time."})]}),o.jsxs("article",{className:"building-card",children:[o.jsx("span",{className:"building-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-handshake"})}),o.jsx("h3",{children:"Real relationships"}),o.jsx("p",{children:"Networking measured in trust and real collaborations."})]}),o.jsxs("article",{className:"building-card",children:[o.jsx("span",{className:"building-icon","aria-hidden":"true",children:o.jsx("i",{className:"fa-solid fa-arrows-rotate"})}),o.jsx("h3",{children:"Integrated system"}),o.jsx("p",{children:"Experience, Education, Economy and Environment work as one."})]})]})]})}),o.jsx("section",{className:"cta",id:"contact",children:o.jsxs("div",{className:"wrap cta-box",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Let's build it together."}),o.jsx("p",{children:"Activate the ecosystem for your company, or start building your Experience Identity."})]}),o.jsxs("div",{className:"actions",style:{margin:0},children:[o.jsx("a",{className:"button",href:"/business-club",children:"For Companies"}),o.jsx("a",{className:"button secondary",href:"/talent",children:"For Talents"}),o.jsx("a",{className:"button secondary",href:"/contact",children:"Contact us"})]})]})}),o.jsx("section",{className:"newsletter",children:o.jsxs("div",{className:"wrap",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Stay up to date"}),o.jsx("p",{children:"Subscribe to the newsletter for updates from the ecosystem."})]}),o.jsxs("form",{className:"newsletter-form",children:[o.jsx("input",{type:"email",placeholder:"Email address","aria-label":"Email address"}),o.jsx("button",{className:"button",type:"submit",children:"Subscribe"})]})]})})]}),o.jsx(Ts,{}),o.jsxs("aside",{className:"cookie","aria-label":"Cookie notice",children:["We use cookies to improve your experience. By continuing, you accept our privacy policy.",o.jsx("button",{className:"button",onClick:t=>{var i;return(i=t.currentTarget.closest(".cookie"))==null?void 0:i.remove()},children:"Accept"})]})]})}ty.createRoot(document.getElementById("root")).render(o.jsx(Y0.StrictMode,{children:o.jsx(yA,{})}));
