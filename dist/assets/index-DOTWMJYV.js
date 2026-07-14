(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function W0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yd={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function q0(){if(nv)return Cl;nv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:o,type:s,key:h,ref:c!==void 0?c:null,props:d}}return Cl.Fragment=t,Cl.jsx=i,Cl.jsxs=i,Cl}var iv;function Y0(){return iv||(iv=1,Yd.exports=q0()),Yd.exports}var r=Y0(),Zd={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function Z0(){if(av)return tt;av=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(U,ne,xe){this.props=U,this.context=ne,this.refs=M,this.updater=xe||A}_.prototype.isReactComponent={},_.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=_.prototype;function C(U,ne,xe){this.props=U,this.context=ne,this.refs=M,this.updater=xe||A}var P=C.prototype=new I;P.constructor=C,R(P,_.prototype),P.isPureReactComponent=!0;var ie=Array.isArray;function H(){}var O={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function D(U,ne,xe){var q=xe.ref;return{$$typeof:o,type:U,key:ne,ref:q!==void 0?q:null,props:xe}}function w(U,ne){return D(U.type,ne,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function ce(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return ne[xe]})}var le=/\/+/g;function me(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?ce(""+U.key):ne.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,ne,xe,q,oe){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var Ee=!1;if(U===null)Ee=!0;else switch(ye){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(U.$$typeof){case o:case t:Ee=!0;break;case x:return Ee=U._init,L(Ee(U._payload),ne,xe,q,oe)}}if(Ee)return oe=oe(U),Ee=q===""?"."+me(U,0):q,ie(oe)?(xe="",Ee!=null&&(xe=Ee.replace(le,"$&/")+"/"),L(oe,ne,xe,"",function(nt){return nt})):oe!=null&&(G(oe)&&(oe=w(oe,xe+(oe.key==null||U&&U.key===oe.key?"":(""+oe.key).replace(le,"$&/")+"/")+Ee)),ne.push(oe)),1;Ee=0;var He=q===""?".":q+":";if(ie(U))for(var Fe=0;Fe<U.length;Fe++)q=U[Fe],ye=He+me(q,Fe),Ee+=L(q,ne,xe,ye,oe);else if(Fe=E(U),typeof Fe=="function")for(U=Fe.call(U),Fe=0;!(q=U.next()).done;)q=q.value,ye=He+me(q,Fe++),Ee+=L(q,ne,xe,ye,oe);else if(ye==="object"){if(typeof U.then=="function")return L(fe(U),ne,xe,q,oe);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function W(U,ne,xe){if(U==null)return U;var q=[],oe=0;return L(U,q,"","",function(ye){return ne.call(xe,ye,oe++)}),q}function Z(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:W,forEach:function(U,ne,xe){W(U,function(){ne.apply(this,arguments)},xe)},count:function(U){var ne=0;return W(U,function(){ne++}),ne},toArray:function(U){return W(U,function(ne){return ne})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return tt.Activity=y,tt.Children=be,tt.Component=_,tt.Fragment=i,tt.Profiler=c,tt.PureComponent=C,tt.StrictMode=s,tt.Suspense=g,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,tt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},tt.cache=function(U){return function(){return U.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(U,ne,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var q=R({},U.props),oe=U.key;if(ne!=null)for(ye in ne.key!==void 0&&(oe=""+ne.key),ne)!J.call(ne,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ne.ref===void 0||(q[ye]=ne[ye]);var ye=arguments.length-2;if(ye===1)q.children=xe;else if(1<ye){for(var Ee=Array(ye),He=0;He<ye;He++)Ee[He]=arguments[He+2];q.children=Ee}return D(U.type,oe,q)},tt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:d,_context:U},U},tt.createElement=function(U,ne,xe){var q,oe={},ye=null;if(ne!=null)for(q in ne.key!==void 0&&(ye=""+ne.key),ne)J.call(ne,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(oe[q]=ne[q]);var Ee=arguments.length-2;if(Ee===1)oe.children=xe;else if(1<Ee){for(var He=Array(Ee),Fe=0;Fe<Ee;Fe++)He[Fe]=arguments[Fe+2];oe.children=He}if(U&&U.defaultProps)for(q in Ee=U.defaultProps,Ee)oe[q]===void 0&&(oe[q]=Ee[q]);return D(U,ye,oe)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(U){return{$$typeof:p,render:U}},tt.isValidElement=G,tt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:Z}},tt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},tt.startTransition=function(U){var ne=O.T,xe={};O.T=xe;try{var q=U(),oe=O.S;oe!==null&&oe(xe,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(H,Me)}catch(ye){Me(ye)}finally{ne!==null&&xe.types!==null&&(ne.types=xe.types),O.T=ne}},tt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},tt.use=function(U){return O.H.use(U)},tt.useActionState=function(U,ne,xe){return O.H.useActionState(U,ne,xe)},tt.useCallback=function(U,ne){return O.H.useCallback(U,ne)},tt.useContext=function(U){return O.H.useContext(U)},tt.useDebugValue=function(){},tt.useDeferredValue=function(U,ne){return O.H.useDeferredValue(U,ne)},tt.useEffect=function(U,ne){return O.H.useEffect(U,ne)},tt.useEffectEvent=function(U){return O.H.useEffectEvent(U)},tt.useId=function(){return O.H.useId()},tt.useImperativeHandle=function(U,ne,xe){return O.H.useImperativeHandle(U,ne,xe)},tt.useInsertionEffect=function(U,ne){return O.H.useInsertionEffect(U,ne)},tt.useLayoutEffect=function(U,ne){return O.H.useLayoutEffect(U,ne)},tt.useMemo=function(U,ne){return O.H.useMemo(U,ne)},tt.useOptimistic=function(U,ne){return O.H.useOptimistic(U,ne)},tt.useReducer=function(U,ne,xe){return O.H.useReducer(U,ne,xe)},tt.useRef=function(U){return O.H.useRef(U)},tt.useState=function(U){return O.H.useState(U)},tt.useSyncExternalStore=function(U,ne,xe){return O.H.useSyncExternalStore(U,ne,xe)},tt.useTransition=function(){return O.H.useTransition()},tt.version="19.2.7",tt}var sv;function ch(){return sv||(sv=1,Zd.exports=Z0()),Zd.exports}var si=ch();const K0=W0(si);var Kd={exports:{}},Dl={},Qd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function Q0(){return rv||(rv=1,(function(o){function t(L,W){var Z=L.length;L.push(W);e:for(;0<Z;){var Me=Z-1>>>1,be=L[Me];if(0<c(be,W))L[Me]=W,L[Z]=be,Z=Me;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var W=L[0],Z=L.pop();if(Z!==W){L[0]=Z;e:for(var Me=0,be=L.length,U=be>>>1;Me<U;){var ne=2*(Me+1)-1,xe=L[ne],q=ne+1,oe=L[q];if(0>c(xe,Z))q<be&&0>c(oe,xe)?(L[Me]=oe,L[q]=Z,Me=q):(L[Me]=xe,L[ne]=Z,Me=ne);else if(q<be&&0>c(oe,Z))L[Me]=oe,L[q]=Z,Me=q;else break e}}return W}function c(L,W){var Z=L.sortIndex-W.sortIndex;return Z!==0?Z:L.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var g=[],m=[],x=1,y=null,S=3,E=!1,A=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=L)s(m),W.sortIndex=W.expirationTime,t(g,W);else break;W=i(m)}}function ie(L){if(R=!1,P(L),!A)if(i(g)!==null)A=!0,H||(H=!0,ce());else{var W=i(m);W!==null&&fe(ie,W.startTime-L)}}var H=!1,O=-1,J=5,D=-1;function w(){return M?!0:!(o.unstable_now()-D<J)}function G(){if(M=!1,H){var L=o.unstable_now();D=L;var W=!0;try{e:{A=!1,R&&(R=!1,I(O),O=-1),E=!0;var Z=S;try{t:{for(P(L),y=i(g);y!==null&&!(y.expirationTime>L&&w());){var Me=y.callback;if(typeof Me=="function"){y.callback=null,S=y.priorityLevel;var be=Me(y.expirationTime<=L);if(L=o.unstable_now(),typeof be=="function"){y.callback=be,P(L),W=!0;break t}y===i(g)&&s(g),P(L)}else s(g);y=i(g)}if(y!==null)W=!0;else{var U=i(m);U!==null&&fe(ie,U.startTime-L),W=!1}}break e}finally{y=null,S=Z,E=!1}W=void 0}}finally{W?ce():H=!1}}}var ce;if(typeof C=="function")ce=function(){C(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=G,ce=function(){me.postMessage(null)}}else ce=function(){_(G,0)};function fe(L,W){O=_(function(){L(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var Z=S;S=W;try{return L()}finally{S=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=S;S=L;try{return W()}finally{S=Z}},o.unstable_scheduleCallback=function(L,W,Z){var Me=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Me+Z:Me):Z=Me,L){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,L={id:x++,callback:W,priorityLevel:L,startTime:Z,expirationTime:be,sortIndex:-1},Z>Me?(L.sortIndex=Z,t(m,L),i(g)===null&&L===i(m)&&(R?(I(O),O=-1):R=!0,fe(ie,Z-Me))):(L.sortIndex=be,t(g,L),A||E||(A=!0,H||(H=!0,ce()))),L},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(L){var W=S;return function(){var Z=S;S=W;try{return L.apply(this,arguments)}finally{S=Z}}}})(Jd)),Jd}var lv;function J0(){return lv||(lv=1,Qd.exports=Q0()),Qd.exports}var $d={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function $0(){if(ov)return Mn;ov=1;var o=ch();function t(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(g,m,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:g,containerInfo:m,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mn.createPortal=function(g,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return d(g,m,null,x)},Mn.flushSync=function(g){var m=h.T,x=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=m,s.p=x,s.d.f()}},Mn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Mn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Mn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var x=m.as,y=p(x,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:E}):x==="script"&&s.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=p(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Mn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,y=p(x,m.crossOrigin);s.d.L(g,x,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(g,m){if(typeof g=="string")if(m){var x=p(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Mn.requestFormReset=function(g){s.d.r(g)},Mn.unstable_batchedUpdates=function(g,m){return g(m)},Mn.useFormState=function(g,m,x){return h.H.useFormState(g,m,x)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.2.7",Mn}var cv;function ey(){if(cv)return $d.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$d.exports=$0(),$d.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function ty(){if(uv)return Dl;uv=1;var o=J0(),t=ch(),i=ey();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===l)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==l.return)a=u,l=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,l=f;break}if(b===l){v=!0,l=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,l=u;break}if(b===l){v=!0,l=f,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),C=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case C:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var fe=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function U(e){return{current:e}}function ne(e){0>be||(e.current=Me[be],Me[be]=null,be--)}function xe(e,n){be++,Me[be]=e.current,e.current=n}var q=U(null),oe=U(null),ye=U(null),Ee=U(null);function He(e,n){switch(xe(ye,n),xe(oe,e),xe(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Tg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Tg(n),e=Ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(q),xe(q,e)}function Fe(){ne(q),ne(oe),ne(ye)}function nt(e){e.memoizedState!==null&&xe(Ee,e);var n=q.current,a=Ag(n,e.type);n!==a&&(xe(oe,e),xe(q,a))}function Lt(e){oe.current===e&&(ne(q),ne(oe)),Ee.current===e&&(ne(Ee),Al._currentValue=Z)}var B,Vt;function ut(e){if(B===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+Vt}var yt=!1;function Ge(e,n){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(se){var $=se}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(se){$=se}e.call(pe.prototype)}}else{try{throw Error()}catch(se){$=se}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(se){if(se&&$&&typeof se.stack=="string")return[se.stack,$.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var z=v.split(`
`),Q=b.split(`
`);for(u=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(l===z.length||u===Q.length)for(l=z.length-1,u=Q.length-1;1<=l&&0<=u&&z[l]!==Q[u];)u--;for(;1<=l&&0<=u;l--,u--)if(z[l]!==Q[u]){if(l!==1||u!==1)do if(l--,u--,0>u||z[l]!==Q[u]){var ue=`
`+z[l].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=l&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return ut("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var et=Object.prototype.hasOwnProperty,j=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,ae=o.unstable_shouldYield,Se=o.unstable_requestPaint,ve=o.unstable_now,_e=o.unstable_getCurrentPriorityLevel,We=o.unstable_ImmediatePriority,De=o.unstable_UserBlockingPriority,Le=o.unstable_NormalPriority,it=o.unstable_LowPriority,Ae=o.unstable_IdlePriority,je=o.log,ht=o.unstable_setDisableYieldValue,Ke=null,Re=null;function Ye(e){if(typeof je=="function"&&ht(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ke,e)}catch{}}var Ze=Math.clz32?Math.clz32:Ne,Pt=Math.log,V=Math.LN2;function Ne(e){return e>>>=0,e===0?32:31-(Pt(e)/V|0)|0}var he=256,ge=262144,we=4194304;function ke(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?u=ke(l):(v&=b,v!==0?u=ke(v):a||(a=b&~e,a!==0&&(u=ke(a))))):(b=l&~f,b!==0?u=ke(b):v!==0?u=ke(v):a||(a=l&~e,a!==0&&(u=ke(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ot(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function an(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xt(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function In(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ql(e,n,a,l,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,Q=e.hiddenUpdates;for(a=v&~a;0<a;){var ue=31-Ze(a),pe=1<<ue;b[ue]=0,z[ue]=-1;var $=Q[ue];if($!==null)for(Q[ue]=null,ue=0;ue<$.length;ue++){var se=$[ue];se!==null&&(se.lane&=-536870913)}a&=~pe}l!==0&&xi(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function xi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Ze(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ws(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-Ze(a),u=1<<l;u&n|e[l]&n&&(e[l]|=n),a&=~u}}function zr(e,n){var a=n&-n;return a=(a&42)!==0?1:Rs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function aa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ir(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Zg(e.type))}function Ga(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var ri=Math.random().toString(36).slice(2),Qt="__reactFiber$"+ri,xn="__reactProps$"+ri,sa="__reactContainer$"+ri,Br="__reactEvents$"+ri,N="__reactListeners$"+ri,k="__reactHandles$"+ri,ee="__reactResources$"+ri,te="__reactMarker$"+ri;function Y(e){delete e[Qt],delete e[xn],delete e[Br],delete e[N],delete e[k]}function Te(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[sa]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lg(e);e!==null;){if(a=e[Qt])return a;e=Lg(e)}return n}e=a,a=e.parentNode}return null}function Ce(e){if(e=e[Qt]||e[sa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Oe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Pe(e){var n=e[ee];return n||(n=e[ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ze(e){e[te]=!0}var Je=new Set,qe={};function ct(e,n){At(e,n),At(e+"Capture",n)}function At(e,n){for(qe[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_n={},_t={};function Ve(e){return et.call(_t,e)?!0:et.call(_n,e)?!1:Ft.test(e)?_t[e]=!0:(_n[e]=!0,!1)}function Xt(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fr(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,f=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ht(e){if(!e._valueTracker){var n=yn(e)?"checked":"value";e._valueTracker=Fr(e,n,""+e[n])}}function li(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=yn(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function Sn(e){return e.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hr(e,n,a,l,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Vc(e,v,sn(n)):a!=null?Vc(e,v,sn(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+sn(b):e.removeAttribute("name")}function Gr(e,n,a,l,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ht(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ht(e)}function Vc(e,n,a){n==="number"&&ra(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Cs(e,n,a,l){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yh(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function Sh(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(s(92));if(fe(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ht(e)}function Ds(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Hx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mh(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||Hx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Eh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&Mh(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Mh(e,f,n[f])}function kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(e){return Vx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wi(){}var Xc=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ls=null;function bh(e){var n=Ce(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Hr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var u=l[xn]||null;if(!u)throw Error(s(90));Hr(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&li(l)}break e;case"textarea":yh(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Cs(e,!!a.multiple,n,!1)}}}var qc=!1;function Th(e,n,a){if(qc)return e(n,a);qc=!0;try{var l=e(n);return l}finally{if(qc=!1,(Us!==null||Ls!==null)&&(Po(),Us&&(n=Us,e=Ls,Ls=Us=null,bh(n),e)))for(n=0;n<e.length;n++)bh(e[n])}}function Vr(e,n){var a=e.stateNode;if(a===null)return null;var l=a[xn]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Ri)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Yc=!1}var la=null,Zc=null,Zl=null;function Ah(){if(Zl)return Zl;var e,n=Zc,a=n.length,l,u="value"in la?la.value:la.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(l=1;l<=v&&n[a-l]===u[f-l];l++);return Zl=u.slice(e,1<l?1-l:void 0)}function Kl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ql(){return!0}function Nh(){return!1}function wn(e){function n(a,l,u,f,v){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ql:Nh,this.isPropagationStopped=Nh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=wn(Va),Xr=y({},Va,{view:0,detail:0}),kx=wn(Xr),Kc,Qc,Wr,$l=y({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Kc=e.screenX-Wr.screenX,Qc=e.screenY-Wr.screenY):Qc=Kc=0,Wr=e),Kc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),wh=wn($l),Xx=y({},$l,{dataTransfer:0}),Wx=wn(Xx),qx=y({},Xr,{relatedTarget:0}),Jc=wn(qx),Yx=y({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=wn(Yx),Kx=y({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qx=wn(Kx),Jx=y({},Va,{data:0}),Rh=wn(Jx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=t_[e])?!!n[e]:!1}function $c(){return n_}var i_=y({},Xr,{key:function(e){if(e.key){var n=$x[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a_=wn(i_),s_=y({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=wn(s_),r_=y({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),l_=wn(r_),o_=y({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),c_=wn(o_),u_=y({},$l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d_=wn(u_),f_=y({},Va,{newState:0,oldState:0}),h_=wn(f_),p_=[9,13,27,32],eu=Ri&&"CompositionEvent"in window,qr=null;Ri&&"documentMode"in document&&(qr=document.documentMode);var m_=Ri&&"TextEvent"in window&&!qr,Dh=Ri&&(!eu||qr&&8<qr&&11>=qr),Uh=" ",Lh=!1;function jh(e,n){switch(e){case"keyup":return p_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function g_(e,n){switch(e){case"compositionend":return Oh(n);case"keypress":return n.which!==32?null:(Lh=!0,Uh);case"textInput":return e=n.data,e===Uh&&Lh?null:e;default:return null}}function v_(e,n){if(js)return e==="compositionend"||!eu&&jh(e,n)?(e=Ah(),Zl=Zc=la=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dh&&n.locale!=="ko"?null:n.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!x_[e.type]:n==="textarea"}function zh(e,n,a,l){Us?Ls?Ls.push(l):Ls=[l]:Us=l,n=Vo(n,"onChange"),0<n.length&&(a=new Jl("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Yr=null,Zr=null;function __(e){_g(e,0)}function eo(e){var n=Oe(e);if(li(n))return e}function Ih(e,n){if(e==="change")return n}var Bh=!1;if(Ri){var tu;if(Ri){var nu="oninput"in document;if(!nu){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),nu=typeof Fh.oninput=="function"}tu=nu}else tu=!1;Bh=tu&&(!document.documentMode||9<document.documentMode)}function Hh(){Yr&&(Yr.detachEvent("onpropertychange",Gh),Zr=Yr=null)}function Gh(e){if(e.propertyName==="value"&&eo(Zr)){var n=[];zh(n,Zr,e,Wc(e)),Th(__,n)}}function y_(e,n,a){e==="focusin"?(Hh(),Yr=n,Zr=a,Yr.attachEvent("onpropertychange",Gh)):e==="focusout"&&Hh()}function S_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eo(Zr)}function M_(e,n){if(e==="click")return eo(n)}function E_(e,n){if(e==="input"||e==="change")return eo(n)}function b_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bn=typeof Object.is=="function"?Object.is:b_;function Kr(e,n){if(Bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!et.call(n,u)||!Bn(e[u],n[u]))return!1}return!0}function Vh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kh(e,n){var a=Vh(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vh(a)}}function Xh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ra(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ra(e.document)}return n}function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var T_=Ri&&"documentMode"in document&&11>=document.documentMode,Os=null,au=null,Qr=null,su=!1;function qh(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Os==null||Os!==ra(l)||(l=Os,"selectionStart"in l&&iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qr&&Kr(Qr,l)||(Qr=l,l=Vo(au,"onSelect"),0<l.length&&(n=new Jl("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=Os)))}function ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ps={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},ru={},Yh={};Ri&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Xa(e){if(ru[e])return ru[e];if(!Ps[e])return e;var n=Ps[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yh)return ru[e]=n[a];return e}var Zh=Xa("animationend"),Kh=Xa("animationiteration"),Qh=Xa("animationstart"),A_=Xa("transitionrun"),N_=Xa("transitionstart"),w_=Xa("transitioncancel"),Jh=Xa("transitionend"),$h=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function oi(e,n){$h.set(e,n),ct(n,[e])}var to=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],zs=0,ou=0;function no(){for(var e=zs,n=ou=zs=0;n<e;){var a=Zn[n];Zn[n++]=null;var l=Zn[n];Zn[n++]=null;var u=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,l!==null&&u!==null){var v=l.pending;v===null?u.next=u:(u.next=v.next,v.next=u),l.pending=u}f!==0&&ep(a,u,f)}}function io(e,n,a,l){Zn[zs++]=e,Zn[zs++]=n,Zn[zs++]=a,Zn[zs++]=l,ou|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function cu(e,n,a,l){return io(e,n,a,l),ao(e)}function Wa(e,n){return io(e,null,null,n),ao(e)}function ep(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ze(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function ao(e){if(50<_l)throw _l=0,xd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function R_(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,n,a,l){return new R_(e,n,a,l)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,n){var a=e.alternate;return a===null?(a=Fn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function so(e,n,a,l,u,f){var v=0;if(l=e,typeof e=="function")uu(e)&&(v=1);else if(typeof e=="string")v=j0(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Fn(31,a,n,u),e.elementType=D,e.lanes=f,e;case R:return qa(a.children,u,f,n);case M:v=8,u|=24;break;case _:return e=Fn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case ie:return e=Fn(13,a,n,u),e.elementType=ie,e.lanes=f,e;case H:return e=Fn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:v=10;break e;case I:v=9;break e;case P:v=11;break e;case O:v=14;break e;case J:v=16,l=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=Fn(v,a,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function qa(e,n,a,l){return e=Fn(7,e,l,n),e.lanes=a,e}function du(e,n,a){return e=Fn(6,e,null,n),e.lanes=a,e}function np(e){var n=Fn(18,null,null,0);return n.stateNode=e,n}function fu(e,n,a){return n=Fn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ip=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},ip.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var Bs=[],Fs=0,ro=null,Jr=0,Qn=[],Jn=0,oa=null,_i=1,yi="";function Di(e,n){Bs[Fs++]=Jr,Bs[Fs++]=ro,ro=e,Jr=n}function ap(e,n,a){Qn[Jn++]=_i,Qn[Jn++]=yi,Qn[Jn++]=oa,oa=e;var l=_i;e=yi;var u=32-Ze(l)-1;l&=~(1<<u),a+=1;var f=32-Ze(n)+u;if(30<f){var v=u-u%5;f=(l&(1<<v)-1).toString(32),l>>=v,u-=v,_i=1<<32-Ze(n)+u|a<<u|l,yi=f+e}else _i=1<<f|a<<u|l,yi=e}function hu(e){e.return!==null&&(Di(e,1),ap(e,1,0))}function pu(e){for(;e===ro;)ro=Bs[--Fs],Bs[Fs]=null,Jr=Bs[--Fs],Bs[Fs]=null;for(;e===oa;)oa=Qn[--Jn],Qn[Jn]=null,yi=Qn[--Jn],Qn[Jn]=null,_i=Qn[--Jn],Qn[Jn]=null}function sp(e,n){Qn[Jn++]=_i,Qn[Jn++]=yi,Qn[Jn++]=oa,_i=n.id,yi=n.overflow,oa=e}var hn=null,zt=null,vt=!1,ca=null,$n=!1,mu=Error(s(519));function ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(Kn(n,e)),mu}function rp(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[Qt]=e,n[xn]=l,a){case"dialog":ft("cancel",n),ft("close",n);break;case"iframe":case"object":case"embed":ft("load",n);break;case"video":case"audio":for(a=0;a<Sl.length;a++)ft(Sl[a],n);break;case"source":ft("error",n);break;case"img":case"image":case"link":ft("error",n),ft("load",n);break;case"details":ft("toggle",n);break;case"input":ft("invalid",n),Gr(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ft("invalid",n);break;case"textarea":ft("invalid",n),Sh(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||Eg(n.textContent,a)?(l.popover!=null&&(ft("beforetoggle",n),ft("toggle",n)),l.onScroll!=null&&ft("scroll",n),l.onScrollEnd!=null&&ft("scrollend",n),l.onClick!=null&&(n.onclick=wi),n=!0):n=!1,n||ua(e,!0)}function lp(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:hn=hn.return}}function Hs(e){if(e!==hn)return!1;if(!vt)return lp(e),vt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ld(e.type,e.memoizedProps)),a=!a),a&&zt&&ua(e),lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));zt=Ug(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));zt=Ug(e)}else n===27?(n=zt,ba(e.type)?(e=Id,Id=null,zt=e):zt=n):zt=hn?ti(e.stateNode.nextSibling):null;return!0}function Ya(){zt=hn=null,vt=!1}function gu(){var e=ca;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),ca=null),e}function $r(e){ca===null?ca=[e]:ca.push(e)}var vu=U(null),Za=null,Ui=null;function da(e,n,a){xe(vu,n._currentValue),n._currentValue=a}function Li(e){e._currentValue=vu.current,ne(vu)}function xu(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function _u(e,n,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),xu(f.return,a,e),l||(v=null);break e}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),xu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Gs(e,n,a,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;Bn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===Ee.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}u=u.return}e!==null&&_u(n,e,a,l),n.flags|=262144}function lo(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){Za=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return op(Za,e)}function oo(e,n){return Za===null&&Ka(e),op(e,n)}function op(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ui===null){if(e===null)throw Error(s(308));Ui=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ui=Ui.next=n;return a}var C_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},D_=o.unstable_scheduleCallback,U_=o.unstable_NormalPriority,Jt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new C_,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&D_(U_,function(){e.controller.abort()})}var tl=null,Su=0,Vs=0,ks=null;function L_(e,n){if(tl===null){var a=tl=[];Su=0,Vs=bd(),ks={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Su++,n.then(cp,cp),n}function cp(){if(--Su===0&&tl!==null){ks!==null&&(ks.status="fulfilled");var e=tl;tl=null,Vs=0,ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function j_(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var up=L.S;L.S=function(e,n){qm=ve(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&L_(e,n),up!==null&&up(e,n)};var Qa=U(null);function Mu(){var e=Qa.current;return e!==null?e:jt.pooledCache}function co(e,n){n===null?xe(Qa,Qa.current):xe(Qa,n.pool)}function dp(){var e=Mu();return e===null?null:{parent:Jt._currentValue,pool:e}}var Xs=Error(s(460)),Eu=Error(s(474)),uo=Error(s(542)),fo={then:function(){}};function fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(wi,wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e;default:if(typeof n.status=="string")n.then(wi,wi);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e}throw $a=n,Xs}}function Ja(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,Xs):a}}var $a=null;function pp(){if($a===null)throw Error(s(459));var e=$a;return $a=null,e}function mp(e){if(e===Xs||e===uo)throw Error(s(483))}var Ws=null,nl=0;function ho(e){var n=nl;return nl+=1,Ws===null&&(Ws=[]),hp(Ws,e,n)}function il(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function po(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function gp(e){function n(X,F){if(e){var K=X.deletions;K===null?(X.deletions=[F],X.flags|=16):K.push(F)}}function a(X,F){if(!e)return null;for(;F!==null;)n(X,F),F=F.sibling;return null}function l(X){for(var F=new Map;X!==null;)X.key!==null?F.set(X.key,X):F.set(X.index,X),X=X.sibling;return F}function u(X,F){return X=Ci(X,F),X.index=0,X.sibling=null,X}function f(X,F,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<F?(X.flags|=67108866,F):K):(X.flags|=67108866,F)):(X.flags|=1048576,F)}function v(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function b(X,F,K,de){return F===null||F.tag!==6?(F=du(K,X.mode,de),F.return=X,F):(F=u(F,K),F.return=X,F)}function z(X,F,K,de){var Xe=K.type;return Xe===R?ue(X,F,K.props.children,de,K.key):F!==null&&(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ja(Xe)===F.type)?(F=u(F,K.props),il(F,K),F.return=X,F):(F=so(K.type,K.key,K.props,null,X.mode,de),il(F,K),F.return=X,F)}function Q(X,F,K,de){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=fu(K,X.mode,de),F.return=X,F):(F=u(F,K.children||[]),F.return=X,F)}function ue(X,F,K,de,Xe){return F===null||F.tag!==7?(F=qa(K,X.mode,de,Xe),F.return=X,F):(F=u(F,K),F.return=X,F)}function pe(X,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=du(""+F,X.mode,K),F.return=X,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case E:return K=so(F.type,F.key,F.props,null,X.mode,K),il(K,F),K.return=X,K;case A:return F=fu(F,X.mode,K),F.return=X,F;case J:return F=Ja(F),pe(X,F,K)}if(fe(F)||ce(F))return F=qa(F,X.mode,K,null),F.return=X,F;if(typeof F.then=="function")return pe(X,ho(F),K);if(F.$$typeof===C)return pe(X,oo(X,F),K);po(X,F)}return null}function $(X,F,K,de){var Xe=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xe!==null?null:b(X,F,""+K,de);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Xe?z(X,F,K,de):null;case A:return K.key===Xe?Q(X,F,K,de):null;case J:return K=Ja(K),$(X,F,K,de)}if(fe(K)||ce(K))return Xe!==null?null:ue(X,F,K,de,null);if(typeof K.then=="function")return $(X,F,ho(K),de);if(K.$$typeof===C)return $(X,F,oo(X,K),de);po(X,K)}return null}function se(X,F,K,de,Xe){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return X=X.get(K)||null,b(F,X,""+de,Xe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case E:return X=X.get(de.key===null?K:de.key)||null,z(F,X,de,Xe);case A:return X=X.get(de.key===null?K:de.key)||null,Q(F,X,de,Xe);case J:return de=Ja(de),se(X,F,K,de,Xe)}if(fe(de)||ce(de))return X=X.get(K)||null,ue(F,X,de,Xe,null);if(typeof de.then=="function")return se(X,F,K,ho(de),Xe);if(de.$$typeof===C)return se(X,F,K,oo(F,de),Xe);po(F,de)}return null}function Ie(X,F,K,de){for(var Xe=null,St=null,Be=F,st=F=0,mt=null;Be!==null&&st<K.length;st++){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var Mt=$(X,Be,K[st],de);if(Mt===null){Be===null&&(Be=mt);break}e&&Be&&Mt.alternate===null&&n(X,Be),F=f(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt,Be=mt}if(st===K.length)return a(X,Be),vt&&Di(X,st),Xe;if(Be===null){for(;st<K.length;st++)Be=pe(X,K[st],de),Be!==null&&(F=f(Be,F,st),St===null?Xe=Be:St.sibling=Be,St=Be);return vt&&Di(X,st),Xe}for(Be=l(Be);st<K.length;st++)mt=se(Be,X,st,K[st],de),mt!==null&&(e&&mt.alternate!==null&&Be.delete(mt.key===null?st:mt.key),F=f(mt,F,st),St===null?Xe=mt:St.sibling=mt,St=mt);return e&&Be.forEach(function(Ra){return n(X,Ra)}),vt&&Di(X,st),Xe}function Qe(X,F,K,de){if(K==null)throw Error(s(151));for(var Xe=null,St=null,Be=F,st=F=0,mt=null,Mt=K.next();Be!==null&&!Mt.done;st++,Mt=K.next()){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var Ra=$(X,Be,Mt.value,de);if(Ra===null){Be===null&&(Be=mt);break}e&&Be&&Ra.alternate===null&&n(X,Be),F=f(Ra,F,st),St===null?Xe=Ra:St.sibling=Ra,St=Ra,Be=mt}if(Mt.done)return a(X,Be),vt&&Di(X,st),Xe;if(Be===null){for(;!Mt.done;st++,Mt=K.next())Mt=pe(X,Mt.value,de),Mt!==null&&(F=f(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return vt&&Di(X,st),Xe}for(Be=l(Be);!Mt.done;st++,Mt=K.next())Mt=se(Be,X,st,Mt.value,de),Mt!==null&&(e&&Mt.alternate!==null&&Be.delete(Mt.key===null?st:Mt.key),F=f(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return e&&Be.forEach(function(X0){return n(X,X0)}),vt&&Di(X,st),Xe}function Ut(X,F,K,de){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:e:{for(var Xe=K.key;F!==null;){if(F.key===Xe){if(Xe=K.type,Xe===R){if(F.tag===7){a(X,F.sibling),de=u(F,K.props.children),de.return=X,X=de;break e}}else if(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ja(Xe)===F.type){a(X,F.sibling),de=u(F,K.props),il(de,K),de.return=X,X=de;break e}a(X,F);break}else n(X,F);F=F.sibling}K.type===R?(de=qa(K.props.children,X.mode,de,K.key),de.return=X,X=de):(de=so(K.type,K.key,K.props,null,X.mode,de),il(de,K),de.return=X,X=de)}return v(X);case A:e:{for(Xe=K.key;F!==null;){if(F.key===Xe)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(X,F.sibling),de=u(F,K.children||[]),de.return=X,X=de;break e}else{a(X,F);break}else n(X,F);F=F.sibling}de=fu(K,X.mode,de),de.return=X,X=de}return v(X);case J:return K=Ja(K),Ut(X,F,K,de)}if(fe(K))return Ie(X,F,K,de);if(ce(K)){if(Xe=ce(K),typeof Xe!="function")throw Error(s(150));return K=Xe.call(K),Qe(X,F,K,de)}if(typeof K.then=="function")return Ut(X,F,ho(K),de);if(K.$$typeof===C)return Ut(X,F,oo(X,K),de);po(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(X,F.sibling),de=u(F,K),de.return=X,X=de):(a(X,F),de=du(K,X.mode,de),de.return=X,X=de),v(X)):a(X,F)}return function(X,F,K,de){try{nl=0;var Xe=Ut(X,F,K,de);return Ws=null,Xe}catch(Be){if(Be===Xs||Be===uo)throw Be;var St=Fn(29,Be,null,X.mode);return St.lanes=de,St.return=X,St}finally{}}}var es=gp(!0),vp=gp(!1),fa=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Et&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=ao(e),ep(e,null,a),n}return io(e,l,n,a),ao(e)}function al(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,ws(e,a)}}function Au(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function sl(){if(Nu){var e=ks;if(e!==null)throw e}}function rl(e,n,a,l){Nu=!1;var u=e.updateQueue;fa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var z=b,Q=z.next;z.next=null,v===null?f=Q:v.next=Q,v=z;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,b=ue.lastBaseUpdate,b!==v&&(b===null?ue.firstBaseUpdate=Q:b.next=Q,ue.lastBaseUpdate=z))}if(f!==null){var pe=u.baseState;v=0,ue=Q=z=null,b=f;do{var $=b.lane&-536870913,se=$!==b.lane;if(se?(pt&$)===$:(l&$)===$){$!==0&&$===Vs&&(Nu=!0),ue!==null&&(ue=ue.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ie=e,Qe=b;$=n;var Ut=a;switch(Qe.tag){case 1:if(Ie=Qe.payload,typeof Ie=="function"){pe=Ie.call(Ut,pe,$);break e}pe=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=Qe.payload,$=typeof Ie=="function"?Ie.call(Ut,pe,$):Ie,$==null)break e;pe=y({},pe,$);break e;case 2:fa=!0}}$=b.callback,$!==null&&(e.flags|=64,se&&(e.flags|=8192),se=u.callbacks,se===null?u.callbacks=[$]:se.push($))}else se={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ue===null?(Q=ue=se,z=pe):ue=ue.next=se,v|=$;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;se=b,b=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ue===null&&(z=pe),u.baseState=z,u.firstBaseUpdate=Q,u.lastBaseUpdate=ue,f===null&&(u.shared.lanes=0),_a|=v,e.lanes=v,e.memoizedState=pe}}function xp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xp(a[e],n)}var qs=U(null),mo=U(0);function yp(e,n){e=Gi,xe(mo,e),xe(qs,n),Gi=e|n.baseLanes}function wu(){xe(mo,Gi),xe(qs,qs.current)}function Ru(){Gi=mo.current,ne(qs),ne(mo)}var Hn=U(null),ei=null;function ma(e){var n=e.alternate;xe(Zt,Zt.current&1),xe(Hn,e),ei===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(ei=e)}function Cu(e){xe(Zt,Zt.current),xe(Hn,e),ei===null&&(ei=e)}function Sp(e){e.tag===22?(xe(Zt,Zt.current),xe(Hn,e),ei===null&&(ei=e)):ga()}function ga(){xe(Zt,Zt.current),xe(Hn,Hn.current)}function Gn(e){ne(Hn),ei===e&&(ei=null),ne(Zt)}var Zt=U(0);function go(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pd(a)||zd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,at=null,Ct=null,$t=null,vo=!1,Ys=!1,ts=!1,xo=0,ll=0,Zs=null,O_=0;function Wt(){throw Error(s(321))}function Du(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Bn(e[a],n[a]))return!1;return!0}function Uu(e,n,a,l,u,f){return ji=f,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?am:qu,ts=!1,f=a(l,u),ts=!1,Ys&&(f=Ep(n,a,l,u)),Mp(e),f}function Mp(e){L.H=ul;var n=Ct!==null&&Ct.next!==null;if(ji=0,$t=Ct=at=null,vo=!1,ll=0,Zs=null,n)throw Error(s(300));e===null||en||(e=e.dependencies,e!==null&&lo(e)&&(en=!0))}function Ep(e,n,a,l){at=e;var u=0;do{if(Ys&&(Zs=null),ll=0,Ys=!1,25<=u)throw Error(s(301));if(u+=1,$t=Ct=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=sm,f=n(a,l)}while(Ys);return f}function P_(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?ol(n):n,e=e.useState()[0],(Ct!==null?Ct.memoizedState:null)!==e&&(at.flags|=1024),n}function Lu(){var e=xo!==0;return xo=0,e}function ju(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ou(e){if(vo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vo=!1}ji=0,$t=Ct=at=null,Ys=!1,ll=xo=0,Zs=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?at.memoizedState=$t=e:$t=$t.next=e,$t}function Kt(){if(Ct===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Ct.next;var n=$t===null?at.memoizedState:$t.next;if(n!==null)$t=n,Ct=e;else{if(e===null)throw at.alternate===null?Error(s(467)):Error(s(310));Ct=e,e={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},$t===null?at.memoizedState=$t=e:$t=$t.next=e}return $t}function _o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(e){var n=ll;return ll+=1,Zs===null&&(Zs=[]),e=hp(Zs,e,n),n=at,($t===null?n.memoizedState:$t.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?am:qu),e}function yo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ol(e);if(e.$$typeof===C)return pn(e)}throw Error(s(438,String(e)))}function Pu(e){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=at.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_o(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=w;return n.index++,a}function Oi(e,n){return typeof n=="function"?n(e):n}function So(e){var n=Kt();return zu(n,Ct,e)}function zu(e,n,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=v=null,z=null,Q=n,ue=!1;do{var pe=Q.lane&-536870913;if(pe!==Q.lane?(pt&pe)===pe:(ji&pe)===pe){var $=Q.revertLane;if($===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pe===Vs&&(ue=!0);else if((ji&$)===$){Q=Q.next,$===Vs&&(ue=!0);continue}else pe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(b=z=pe,v=f):z=z.next=pe,at.lanes|=$,_a|=$;pe=Q.action,ts&&a(f,pe),f=Q.hasEagerState?Q.eagerState:a(f,pe)}else $={lane:pe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(b=z=$,v=f):z=z.next=$,at.lanes|=pe,_a|=pe;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?v=f:z.next=b,!Bn(f,e.memoizedState)&&(en=!0,ue&&(a=ks,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=z,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Iu(e){var n=Kt(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Bn(f,n.memoizedState)||(en=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function bp(e,n,a){var l=at,u=Kt(),f=vt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Bn((Ct||u).memoizedState,a);if(v&&(u.memoizedState=a,en=!0),u=u.queue,Hu(Np.bind(null,l,u,e),[e]),u.getSnapshot!==n||v||$t!==null&&$t.memoizedState.tag&1){if(l.flags|=2048,Ks(9,{destroy:void 0},Ap.bind(null,l,u,a,n),null),jt===null)throw Error(s(349));f||(ji&127)!==0||Tp(l,n,a)}return a}function Tp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=_o(),at.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ap(e,n,a,l){n.value=a,n.getSnapshot=l,wp(n)&&Rp(e)}function Np(e,n,a){return a(function(){wp(n)&&Rp(e)})}function wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Bn(e,a)}catch{return!0}}function Rp(e){var n=Wa(e,2);n!==null&&Ln(n,e,2)}function Bu(e){var n=Tn();if(typeof e=="function"){var a=e;if(e=a(),ts){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},n}function Cp(e,n,a,l){return e.baseState=a,zu(e,Ct,typeof l=="function"?l:Oi)}function z_(e,n,a,l,u){if(bo(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,Dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dp(e,n){var a=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var b=a(u,l),z=L.S;z!==null&&z(v,b),Up(e,n,b)}catch(Q){Fu(e,n,Q)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(u,l),Up(e,n,f)}catch(Q){Fu(e,n,Q)}}function Up(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Lp(e,n,l)},function(l){return Fu(e,n,l)}):Lp(e,n,a)}function Lp(e,n,a){n.status="fulfilled",n.value=a,jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dp(e,a)))}function Fu(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==l)}e.action=null}function jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Op(e,n){return n}function Pp(e,n){if(vt){var a=jt.formState;if(a!==null){e:{var l=at;if(vt){if(zt){t:{for(var u=zt,f=$n;u.nodeType!==8;){if(!f){u=null;break t}if(u=ti(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){zt=ti(u.nextSibling),l=u.data==="F!";break e}}ua(l)}l=!1}l&&(n=a[0])}}return a=Tn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Op,lastRenderedState:n},a.queue=l,a=tm.bind(null,at,l),l.dispatch=a,l=Bu(!1),f=Wu.bind(null,at,!1,l.queue),l=Tn(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,a=z_.bind(null,at,u,f,a),u.dispatch=a,l.memoizedState=e,[n,a,!1]}function zp(e){var n=Kt();return Ip(n,Ct,e)}function Ip(e,n,a){if(n=zu(e,n,Op)[0],e=So(Oi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ol(n)}catch(v){throw v===Xs?uo:v}else l=n;n=Kt();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(at.flags|=2048,Ks(9,{destroy:void 0},I_.bind(null,u,a),null)),[l,f,e]}function I_(e,n){e.action=n}function Bp(e){var n=Kt(),a=Ct;if(a!==null)return Ip(n,a,e);Kt(),n=n.memoizedState,a=Kt();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Ks(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=at.updateQueue,n===null&&(n=_o(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Fp(){return Kt().memoizedState}function Mo(e,n,a,l){var u=Tn();at.flags|=e,u.memoizedState=Ks(1|n,{destroy:void 0},a,l===void 0?null:l)}function Eo(e,n,a,l){var u=Kt();l=l===void 0?null:l;var f=u.memoizedState.inst;Ct!==null&&l!==null&&Du(l,Ct.memoizedState.deps)?u.memoizedState=Ks(n,f,a,l):(at.flags|=e,u.memoizedState=Ks(1|n,f,a,l))}function Hp(e,n){Mo(8390656,8,e,n)}function Hu(e,n){Eo(2048,8,e,n)}function B_(e){at.flags|=4;var n=at.updateQueue;if(n===null)n=_o(),at.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Gp(e){var n=Kt().memoizedState;return B_({ref:n,nextImpl:e}),function(){if((Et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Vp(e,n){return Eo(4,2,e,n)}function kp(e,n){return Eo(4,4,e,n)}function Xp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wp(e,n,a){a=a!=null?a.concat([e]):null,Eo(4,4,Xp.bind(null,n,e),a)}function Gu(){}function qp(e,n){var a=Kt();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Du(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Yp(e,n){var a=Kt();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Du(n,l[1]))return l[0];if(l=e(),ts){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[l,n],l}function Vu(e,n,a){return a===void 0||(ji&1073741824)!==0&&(pt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Zm(),at.lanes|=e,_a|=e,a)}function Zp(e,n,a,l){return Bn(a,n)?a:qs.current!==null?(e=Vu(e,a,l),Bn(e,n)||(en=!0),e):(ji&42)===0||(ji&1073741824)!==0&&(pt&261930)===0?(en=!0,e.memoizedState=a):(e=Zm(),at.lanes|=e,_a|=e,n)}function Kp(e,n,a,l,u){var f=W.p;W.p=f!==0&&8>f?f:8;var v=L.T,b={};L.T=b,Wu(e,!1,n,a);try{var z=u(),Q=L.S;if(Q!==null&&Q(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=j_(z,l);cl(e,n,ue,Xn(e))}else cl(e,n,l,Xn(e))}catch(pe){cl(e,n,{then:function(){},status:"rejected",reason:pe},Xn())}finally{W.p=f,v!==null&&b.types!==null&&(v.types=b.types),L.T=v}}function F_(){}function ku(e,n,a,l){if(e.tag!==5)throw Error(s(476));var u=Qp(e).queue;Kp(e,u,n,Z,a===null?F_:function(){return Jp(e),a(l)})}function Qp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jp(e){var n=Qp(e);n.next===null&&(n=e.alternate.memoizedState),cl(e,n.next.queue,{},Xn())}function Xu(){return pn(Al)}function $p(){return Kt().memoizedState}function em(){return Kt().memoizedState}function H_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();e=ha(a);var l=pa(n,e,a);l!==null&&(Ln(l,n,a),al(l,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function G_(e,n,a){var l=Xn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bo(e)?nm(n,a):(a=cu(e,n,a,l),a!==null&&(Ln(a,e,l),im(a,n,l)))}function tm(e,n,a){var l=Xn();cl(e,n,a,l)}function cl(e,n,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bo(e))nm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,Bn(b,v))return io(e,n,u,0),jt===null&&no(),!1}catch{}finally{}if(a=cu(e,n,u,l),a!==null)return Ln(a,e,l),im(a,n,l),!0}return!1}function Wu(e,n,a,l){if(l={lane:2,revertLane:bd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bo(e)){if(n)throw Error(s(479))}else n=cu(e,a,l,2),n!==null&&Ln(n,e,2)}function bo(e){var n=e.alternate;return e===at||n!==null&&n===at}function nm(e,n){Ys=vo=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function im(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,ws(e,a)}}var ul={readContext:pn,use:yo,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt};ul.useEffectEvent=Wt;var am={readContext:pn,use:yo,useCallback:function(e,n){return Tn().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Hp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Mo(4194308,4,Xp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Mo(4194308,4,e,n)},useInsertionEffect:function(e,n){Mo(4,2,e,n)},useMemo:function(e,n){var a=Tn();n=n===void 0?null:n;var l=e();if(ts){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=Tn();if(a!==void 0){var u=a(n);if(ts){Ye(!0);try{a(n)}finally{Ye(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=G_.bind(null,at,e),[l.memoizedState,e]},useRef:function(e){var n=Tn();return e={current:e},n.memoizedState=e},useState:function(e){e=Bu(e);var n=e.queue,a=tm.bind(null,at,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Gu,useDeferredValue:function(e,n){var a=Tn();return Vu(a,e,n)},useTransition:function(){var e=Bu(!1);return e=Kp.bind(null,at,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=at,u=Tn();if(vt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(pt&127)!==0||Tp(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Hp(Np.bind(null,l,f,e),[e]),l.flags|=2048,Ks(9,{destroy:void 0},Ap.bind(null,l,f,a,n),null),a},useId:function(){var e=Tn(),n=jt.identifierPrefix;if(vt){var a=yi,l=_i;a=(l&~(1<<32-Ze(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xo++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=O_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Xu,useFormState:Pp,useActionState:Pp,useOptimistic:function(e){var n=Tn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,at,!0,a),a.dispatch=n,[e,n]},useMemoCache:Pu,useCacheRefresh:function(){return Tn().memoizedState=H_.bind(null,at)},useEffectEvent:function(e){var n=Tn(),a={impl:e};return n.memoizedState=a,function(){if((Et&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},qu={readContext:pn,use:yo,useCallback:qp,useContext:pn,useEffect:Hu,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:Yp,useReducer:So,useRef:Fp,useState:function(){return So(Oi)},useDebugValue:Gu,useDeferredValue:function(e,n){var a=Kt();return Zp(a,Ct.memoizedState,e,n)},useTransition:function(){var e=So(Oi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:ol(e),n]},useSyncExternalStore:bp,useId:$p,useHostTransitionStatus:Xu,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var a=Kt();return Cp(a,Ct,e,n)},useMemoCache:Pu,useCacheRefresh:em};qu.useEffectEvent=Gp;var sm={readContext:pn,use:yo,useCallback:qp,useContext:pn,useEffect:Hu,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:Yp,useReducer:Iu,useRef:Fp,useState:function(){return Iu(Oi)},useDebugValue:Gu,useDeferredValue:function(e,n){var a=Kt();return Ct===null?Vu(a,e,n):Zp(a,Ct.memoizedState,e,n)},useTransition:function(){var e=Iu(Oi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:ol(e),n]},useSyncExternalStore:bp,useId:$p,useHostTransitionStatus:Xu,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=Kt();return Ct!==null?Cp(a,Ct,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:em};sm.useEffectEvent=Gp;function Yu(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=Xn(),u=ha(l);u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,l),n!==null&&(Ln(n,e,l),al(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=Xn(),u=ha(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,l),n!==null&&(Ln(n,e,l),al(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xn(),l=ha(a);l.tag=2,n!=null&&(l.callback=n),n=pa(e,l,a),n!==null&&(Ln(n,e,a),al(n,e,a))}};function rm(e,n,a,l,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,v):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,l)||!Kr(u,f):!0}function lm(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function ns(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function om(e){to(e)}function cm(e){console.error(e)}function um(e){to(e)}function To(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function dm(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ku(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){To(e,n)},a}function fm(e){return e=ha(e),e.tag=3,e}function hm(e,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){dm(n,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){dm(n,a,l),typeof u!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function V_(e,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,u,!0),a=Hn.current,a!==null){switch(a.tag){case 31:case 13:return ei===null?zo():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===fo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Sd(e,l,u)),!1;case 22:return a.flags|=65536,l===fo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Sd(e,l,u)),!1}throw Error(s(435,a.tag))}return Sd(e,l,u),zo(),!1}if(vt)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==mu&&(e=Error(s(422),{cause:l}),$r(Kn(e,a)))):(l!==mu&&(n=Error(s(423),{cause:l}),$r(Kn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Kn(l,a),u=Ku(e.stateNode,l,u),Au(e,u),qt!==4&&(qt=2)),!1;var f=Error(s(520),{cause:l});if(f=Kn(f,a),xl===null?xl=[f]:xl.push(f),qt!==4&&(qt=2),n===null)return!0;l=Kn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ku(a.stateNode,l,e),Au(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=fm(u),hm(u,e,a,l),Au(a,u),!1}a=a.return}while(a!==null);return!1}var Qu=Error(s(461)),en=!1;function mn(e,n,a,l){n.child=e===null?vp(n,null,a,l):es(n,e.child,a,l)}function pm(e,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var v={};for(var b in l)b!=="ref"&&(v[b]=l[b])}else v=l;return Ka(n),l=Uu(e,n,a,v,f,u),b=Lu(),e!==null&&!en?(ju(e,n,u),Pi(e,n,u)):(vt&&b&&hu(n),n.flags|=1,mn(e,n,l,u),n.child)}function mm(e,n,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,gm(e,n,f,l,u)):(e=so(a.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(v,l)&&e.ref===n.ref)return Pi(e,n,u)}return n.flags|=1,e=Ci(f,l),e.ref=n.ref,e.return=n,n.child=e}function gm(e,n,a,l,u){if(e!==null){var f=e.memoizedProps;if(Kr(f,l)&&e.ref===n.ref)if(en=!1,n.pendingProps=l=f,sd(e,u))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,Pi(e,n,u)}return Ju(e,n,a,l,u)}function vm(e,n,a,l){var u=l.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~f}else l=0,n.child=null;return xm(e,n,f,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&co(n,f!==null?f.cachePool:null),f!==null?yp(n,f):wu(),Sp(n);else return l=n.lanes=536870912,xm(e,n,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(co(n,f.cachePool),yp(n,f),ga(),n.memoizedState=null):(e!==null&&co(n,null),wu(),ga());return mn(e,n,u,a),n.child}function dl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xm(e,n,a,l,u){var f=Mu();return f=f===null?null:{parent:Jt._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&co(n,null),wu(),Sp(n),e!==null&&Gs(e,n,l,!0),n.childLanes=u,null}function Ao(e,n){return n=wo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _m(e,n,a){return es(n,e.child,null,a),e=Ao(n,n.pendingProps),e.flags|=2,Gn(n),n.memoizedState=null,e}function k_(e,n,a){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(vt){if(l.mode==="hidden")return e=Ao(n,l),n.lanes=536870912,dl(null,e);if(Cu(n),(e=zt)?(e=Dg(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:oa!==null?{id:_i,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=np(e),a.return=n,n.child=a,hn=n,zt=null)):e=null,e===null)throw ua(n);return n.lanes=536870912,null}return Ao(n,l)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Cu(n),u)if(n.flags&256)n.flags&=-257,n=_m(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(en||Gs(e,n,a,!1),u=(a&e.childLanes)!==0,en||u){if(l=jt,l!==null&&(v=zr(l,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Wa(e,v),Ln(l,e,v),Qu;zo(),n=_m(e,n,a)}else e=f.treeContext,zt=ti(v.nextSibling),hn=n,vt=!0,ca=null,$n=!1,e!==null&&sp(n,e),n=Ao(n,l),n.flags|=4096;return n}return e=Ci(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function No(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,l,u){return Ka(n),a=Uu(e,n,a,l,void 0,u),l=Lu(),e!==null&&!en?(ju(e,n,u),Pi(e,n,u)):(vt&&l&&hu(n),n.flags|=1,mn(e,n,a,u),n.child)}function ym(e,n,a,l,u,f){return Ka(n),n.updateQueue=null,a=Ep(n,l,a,u),Mp(e),l=Lu(),e!==null&&!en?(ju(e,n,f),Pi(e,n,f)):(vt&&l&&hu(n),n.flags|=1,mn(e,n,a,f),n.child)}function Sm(e,n,a,l,u){if(Ka(n),n.stateNode===null){var f=Is,v=a.contextType;typeof v=="object"&&v!==null&&(f=pn(v)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?pn(v):Is,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Yu(n,a,v,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Zu.enqueueReplaceState(f,f.state,null),rl(n,l,f,u),sl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,z=ns(a,b);f.props=z;var Q=f.context,ue=a.contextType;v=Is,typeof ue=="object"&&ue!==null&&(v=pn(ue));var pe=a.getDerivedStateFromProps;ue=typeof pe=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==v)&&lm(n,f,l,v),fa=!1;var $=n.memoizedState;f.state=$,rl(n,l,f,u),sl(),Q=n.memoizedState,b||$!==Q||fa?(typeof pe=="function"&&(Yu(n,a,pe,l),Q=n.memoizedState),(z=fa||rm(n,a,z,l,$,Q,v))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=Q),f.props=l,f.state=Q,f.context=v,l=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Tu(e,n),v=n.memoizedProps,ue=ns(a,v),f.props=ue,pe=n.pendingProps,$=f.context,Q=a.contextType,z=Is,typeof Q=="object"&&Q!==null&&(z=pn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==pe||$!==z)&&lm(n,f,l,z),fa=!1,$=n.memoizedState,f.state=$,rl(n,l,f,u),sl();var se=n.memoizedState;v!==pe||$!==se||fa||e!==null&&e.dependencies!==null&&lo(e.dependencies)?(typeof b=="function"&&(Yu(n,a,b,l),se=n.memoizedState),(ue=fa||rm(n,a,ue,l,$,se,z)||e!==null&&e.dependencies!==null&&lo(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,se,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,se,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=se),f.props=l,f.state=se,f.context=z,l=ue):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,No(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=es(n,e.child,null,u),n.child=es(n,null,a,u)):mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Pi(e,n,u),e}function Mm(e,n,a,l){return Ya(),n.flags|=256,mn(e,n,a,l),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(e){return{baseLanes:e,cachePool:dp()}}function td(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=kn),e}function Em(e,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Zt.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(vt){if(u?ma(n):ga(),(e=zt)?(e=Dg(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:oa!==null?{id:_i,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=np(e),a.return=n,n.child=a,hn=n,zt=null)):e=null,e===null)throw ua(n);return zd(e)?n.lanes=32:n.lanes=536870912,null}var b=l.children;return l=l.fallback,u?(ga(),u=n.mode,b=wo({mode:"hidden",children:b},u),l=qa(l,u,a,null),b.return=n,l.return=n,b.sibling=l,n.child=b,l=n.child,l.memoizedState=ed(a),l.childLanes=td(e,v,a),n.memoizedState=$u,dl(null,l)):(ma(n),nd(n,b))}var z=e.memoizedState;if(z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=id(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),b=l.fallback,u=n.mode,l=wo({mode:"visible",children:l.children},u),b=qa(b,u,a,null),b.flags|=2,l.return=n,b.return=n,l.sibling=b,n.child=l,es(n,e.child,null,a),l=n.child,l.memoizedState=ed(a),l.childLanes=td(e,v,a),n.memoizedState=$u,n=dl(null,l));else if(ma(n),zd(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var Q=v.dgst;v=Q,l=Error(s(419)),l.stack="",l.digest=v,$r({value:l,source:null,stack:null}),n=id(e,n,a)}else if(en||Gs(e,n,a,!1),v=(a&e.childLanes)!==0,en||v){if(v=jt,v!==null&&(l=zr(v,a),l!==0&&l!==z.retryLane))throw z.retryLane=l,Wa(e,l),Ln(v,e,l),Qu;Pd(b)||zo(),n=id(e,n,a)}else Pd(b)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,zt=ti(b.nextSibling),hn=n,vt=!0,ca=null,$n=!1,e!==null&&sp(n,e),n=nd(n,l.children),n.flags|=4096);return n}return u?(ga(),b=l.fallback,u=n.mode,z=e.child,Q=z.sibling,l=Ci(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,Q!==null?b=Ci(Q,b):(b=qa(b,u,a,null),b.flags|=2),b.return=n,l.return=n,l.sibling=b,n.child=l,dl(null,l),l=n.child,b=e.child.memoizedState,b===null?b=ed(a):(u=b.cachePool,u!==null?(z=Jt._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=dp(),b={baseLanes:b.baseLanes|a,cachePool:u}),l.memoizedState=b,l.childLanes=td(e,v,a),n.memoizedState=$u,dl(e.child,l)):(ma(n),a=e.child,e=a.sibling,a=Ci(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function nd(e,n){return n=wo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wo(e,n){return e=Fn(22,e,null,n),e.lanes=0,e}function id(e,n,a){return es(n,e.child,null,a),e=nd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),xu(e.return,n,a)}function ad(e,n,a,l,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Tm(e,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;l=l.children;var v=Zt.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,xe(Zt,v),mn(e,n,l,a),l=vt?Jr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,a,n);else if(e.tag===19)bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&go(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ad(n,!1,u,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&go(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ad(n,!0,a,null,f,l);break;case"together":ad(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Pi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),_a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ci(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ci(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&lo(e)))}function X_(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),da(n,Jt,e.memoizedState.cache),Ya();break;case 27:case 5:nt(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Em(e,n,a):(ma(n),e=Pi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var u=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Gs(e,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return Tm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(Zt,Zt.current),l)break;return null;case 22:return n.lanes=0,vm(e,n,a,n.pendingProps);case 24:da(n,Jt,e.memoizedState.cache)}return Pi(e,n,a)}function Am(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!sd(e,a)&&(n.flags&128)===0)return en=!1,X_(e,n,a);en=(e.flags&131072)!==0}else en=!1,vt&&(n.flags&1048576)!==0&&ap(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=Ja(n.elementType),n.type=e,typeof e=="function")uu(e)?(l=ns(e,l),n.tag=1,n=Sm(null,n,e,l,a)):(n.tag=0,n=Ju(null,n,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=pm(null,n,e,l,a);break e}else if(u===O){n.tag=14,n=mm(null,n,e,l,a);break e}}throw n=me(e)||e,Error(s(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=ns(l,n.pendingProps),Sm(e,n,l,u,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(s(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Tu(e,n),rl(n,l,null,a);var v=n.memoizedState;if(l=v.cache,da(n,Jt,l),l!==f.cache&&_u(n,[Jt],a,!0),sl(),l=v.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Mm(e,n,l,a);break e}else if(l!==u){u=Kn(Error(s(424)),n),$r(u),n=Mm(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(zt=ti(e.firstChild),hn=n,vt=!0,ca=null,$n=!0,a=vp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ya(),l===u){n=Pi(e,n,a);break e}mn(e,n,l,a)}n=n.child}return n;case 26:return No(e,n),e===null?(a=zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:vt||(a=n.type,e=n.pendingProps,l=ko(ye.current).createElement(a),l[Qt]=n,l[xn]=e,gn(l,a,e),ze(l),n.stateNode=l):n.memoizedState=zg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&vt&&(l=n.stateNode=jg(n.type,n.pendingProps,ye.current),hn=n,$n=!0,u=zt,ba(n.type)?(Id=u,zt=ti(l.firstChild)):zt=u),mn(e,n,n.pendingProps.children,a),No(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&vt&&((u=l=zt)&&(l=S0(l,n.type,n.pendingProps,$n),l!==null?(n.stateNode=l,hn=n,zt=ti(l.firstChild),$n=!1,u=!0):u=!1),u||ua(n)),nt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,l=f.children,Ld(u,f)?l=null:v!==null&&Ld(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Uu(e,n,P_,null,null,a),Al._currentValue=u),No(e,n),mn(e,n,l,a),n.child;case 6:return e===null&&vt&&((e=a=zt)&&(a=M0(a,n.pendingProps,$n),a!==null?(n.stateNode=a,hn=n,zt=null,e=!0):e=!1),e||ua(n)),null;case 13:return Em(e,n,a);case 4:return He(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=es(n,null,l,a):mn(e,n,l,a),n.child;case 11:return pm(e,n,n.type,n.pendingProps,a);case 7:return mn(e,n,n.pendingProps,a),n.child;case 8:return mn(e,n,n.pendingProps.children,a),n.child;case 12:return mn(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,da(n,n.type,l.value),mn(e,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Ka(n),u=pn(u),l=l(u),n.flags|=1,mn(e,n,l,a),n.child;case 14:return mm(e,n,n.type,n.pendingProps,a);case 15:return gm(e,n,n.type,n.pendingProps,a);case 19:return Tm(e,n,a);case 31:return k_(e,n,a);case 22:return vm(e,n,a,n.pendingProps);case 24:return Ka(n),l=pn(Jt),e===null?(u=Mu(),u===null&&(u=jt,f=yu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},bu(n),da(n,Jt,u)):((e.lanes&a)!==0&&(Tu(e,n),rl(n,null,null,a),sl()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,Jt,l)):(l=f.cache,da(n,Jt,l),l!==u.cache&&_u(n,[Jt],a,!0))),mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function zi(e){e.flags|=4}function rd(e,n,a,l,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if($m())e.flags|=8192;else throw $a=fo,Eu}else e.flags&=-16777217}function Nm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gg(n))if($m())e.flags|=8192;else throw $a=fo,Eu}function Ro(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xt():536870912,e.lanes|=n,er|=n)}function fl(e,n){if(!vt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function It(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function W_(e,n,a){var l=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(n),null;case 1:return It(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Li(Jt),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),It(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(zi(n),f!==null?(It(n),Nm(n,f)):(It(n),rd(n,u,null,l,a))):f?f!==e.memoizedState?(zi(n),It(n),Nm(n,f)):(It(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&zi(n),It(n),rd(n,u,e,l,a)),null;case 27:if(Lt(n),a=ye.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&zi(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return It(n),null}e=q.current,Hs(n)?rp(n):(e=jg(u,l,a),n.stateNode=e,zi(n))}return It(n),null;case 5:if(Lt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&zi(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return It(n),null}if(f=q.current,Hs(n))rp(n);else{var v=ko(ye.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?v.createElement(u,{is:l.is}):v.createElement(u)}}f[Qt]=n,f[xn]=l;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(gn(f,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&zi(n)}}return It(n),rd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&zi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=ye.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,u=hn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Eg(e.nodeValue,a)),e||ua(n,!0)}else e=ko(e).createTextNode(l),e[Qt]=n,n.stateNode=e}return It(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Hs(n),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qt]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;It(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Gn(n),n):(Gn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return It(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Hs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Qt]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;It(n),u=!1}else u=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gn(n),n):(Gn(n),null)}return Gn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ro(n,n.updateQueue),It(n),null);case 4:return Fe(),e===null&&wd(n.stateNode.containerInfo),It(n),null;case 10:return Li(n.type),It(n),null;case 19:if(ne(Zt),l=n.memoizedState,l===null)return It(n),null;if(u=(n.flags&128)!==0,f=l.rendering,f===null)if(u)fl(l,!1);else{if(qt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=go(e),f!==null){for(n.flags|=128,fl(l,!1),e=f.updateQueue,n.updateQueue=e,Ro(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)tp(a,e),a=a.sibling;return xe(Zt,Zt.current&1|2),vt&&Di(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&ve()>jo&&(n.flags|=128,u=!0,fl(l,!1),n.lanes=4194304)}else{if(!u)if(e=go(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ro(n,e),fl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!vt)return It(n),null}else 2*ve()-l.renderingStartTime>jo&&a!==536870912&&(n.flags|=128,u=!0,fl(l,!1),n.lanes=4194304);l.isBackwards?(f.sibling=n.child,n.child=f):(e=l.last,e!==null?e.sibling=f:n.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ve(),e.sibling=null,a=Zt.current,xe(Zt,u?a&1|2:a&1),vt&&Di(n,l.treeForkCount),e):(It(n),null);case 22:case 23:return Gn(n),Ru(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(It(n),n.subtreeFlags&6&&(n.flags|=8192)):It(n),a=n.updateQueue,a!==null&&Ro(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&ne(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Li(Jt),It(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function q_(e,n){switch(pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Li(Jt),Fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Lt(n),null;case 31:if(n.memoizedState!==null){if(Gn(n),n.alternate===null)throw Error(s(340));Ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(Zt),null;case 4:return Fe(),null;case 10:return Li(n.type),null;case 22:case 23:return Gn(n),Ru(),e!==null&&ne(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Li(Jt),null;case 25:return null;default:return null}}function wm(e,n){switch(pu(n),n.tag){case 3:Li(Jt),Fe();break;case 26:case 27:case 5:Lt(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&Gn(n);break;case 13:Gn(n);break;case 19:ne(Zt);break;case 10:Li(n.type);break;case 22:case 23:Gn(n),Ru(),e!==null&&ne(Qa);break;case 24:Li(Jt)}}function hl(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,v=a.inst;l=f(),v.destroy=l}a=a.next}while(a!==u)}}catch(b){wt(n,n.return,b)}}function va(e,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var v=l.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var z=a,Q=b;try{Q()}catch(ue){wt(u,z,ue)}}}l=l.next}while(l!==f)}}catch(ue){wt(n,n.return,ue)}}function Rm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_p(n,a)}catch(l){wt(e,e.return,l)}}}function Cm(e,n,a){a.props=ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){wt(e,n,l)}}function pl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){wt(e,n,u)}}function Si(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){wt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){wt(e,n,u)}else a.current=null}function Dm(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){wt(e,e.return,u)}}function ld(e,n,a){try{var l=e.stateNode;m0(l,e.type,a,n),l[xn]=n}catch(u){wt(e,e.return,u)}}function Um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cd(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=wi));else if(l!==4&&(l===27&&ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(cd(e,n,a),e=e.sibling;e!==null;)cd(e,n,a),e=e.sibling}function Co(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Co(e,n,a),e=e.sibling;e!==null;)Co(e,n,a),e=e.sibling}function Lm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);gn(n,l,a),n[Qt]=e,n[xn]=a}catch(f){wt(e,e.return,f)}}var Ii=!1,tn=!1,ud=!1,jm=typeof WeakSet=="function"?WeakSet:Set,un=null;function Y_(e,n){if(e=e.containerInfo,Dd=Qo,e=Wh(e),iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,b=-1,z=-1,Q=0,ue=0,pe=e,$=null;t:for(;;){for(var se;pe!==a||u!==0&&pe.nodeType!==3||(b=v+u),pe!==f||l!==0&&pe.nodeType!==3||(z=v+l),pe.nodeType===3&&(v+=pe.nodeValue.length),(se=pe.firstChild)!==null;)$=pe,pe=se;for(;;){if(pe===e)break t;if($===a&&++Q===u&&(b=v),$===f&&++ue===l&&(z=v),(se=pe.nextSibling)!==null)break;pe=$,$=pe.parentNode}pe=se}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ud={focusedElem:e,selectionRange:a},Qo=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var Ie=ns(a.type,u);e=l.getSnapshotBeforeUpdate(Ie,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Qe){wt(a,a.return,Qe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Od(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function Om(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(e,a),l&4&&hl(5,a);break;case 1:if(Fi(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){wt(a,a.return,v)}else{var u=ns(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){wt(a,a.return,v)}}l&64&&Rm(a),l&512&&pl(a,a.return);break;case 3:if(Fi(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_p(e,n)}catch(v){wt(a,a.return,v)}}break;case 27:n===null&&l&4&&Lm(a);case 26:case 5:Fi(e,a),n===null&&l&4&&Dm(a),l&512&&pl(a,a.return);break;case 12:Fi(e,a);break;case 31:Fi(e,a),l&4&&Im(e,a);break;case 13:Fi(e,a),l&4&&Bm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=i0.bind(null,a),E0(e,a))));break;case 22:if(l=a.memoizedState!==null||Ii,!l){n=n!==null&&n.memoizedState!==null||tn,u=Ii;var f=tn;Ii=l,(tn=n)&&!f?Hi(e,a,(a.subtreeFlags&8772)!==0):Fi(e,a),Ii=u,tn=f}break;case 30:break;default:Fi(e,a)}}function Pm(e){var n=e.alternate;n!==null&&(e.alternate=null,Pm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Y(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Gt=null,Rn=!1;function Bi(e,n,a){for(a=a.child;a!==null;)zm(e,n,a),a=a.sibling}function zm(e,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:tn||Si(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Si(a,n);var l=Gt,u=Rn;ba(a.type)&&(Gt=a.stateNode,Rn=!1),Bi(e,n,a),El(a.stateNode),Gt=l,Rn=u;break;case 5:tn||Si(a,n);case 6:if(l=Gt,u=Rn,Gt=null,Bi(e,n,a),Gt=l,Rn=u,Gt!==null)if(Rn)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(a.stateNode)}catch(f){wt(a,n,f)}else try{Gt.removeChild(a.stateNode)}catch(f){wt(a,n,f)}break;case 18:Gt!==null&&(Rn?(e=Gt,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),or(e)):Rg(Gt,a.stateNode));break;case 4:l=Gt,u=Rn,Gt=a.stateNode.containerInfo,Rn=!0,Bi(e,n,a),Gt=l,Rn=u;break;case 0:case 11:case 14:case 15:va(2,a,n),tn||va(4,a,n),Bi(e,n,a);break;case 1:tn||(Si(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cm(a,n,l)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:tn=(l=tn)||a.memoizedState!==null,Bi(e,n,a),tn=l;break;default:Bi(e,n,a)}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{or(e)}catch(a){wt(n,n.return,a)}}}function Bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{or(e)}catch(a){wt(n,n.return,a)}}function Z_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new jm),n;default:throw Error(s(435,e.tag))}}function Do(e,n){var a=Z_(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var u=a0.bind(null,e,l);l.then(u,u)}})}function Cn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,v=n,b=v;e:for(;b!==null;){switch(b.tag){case 27:if(ba(b.type)){Gt=b.stateNode,Rn=!1;break e}break;case 5:Gt=b.stateNode,Rn=!1;break e;case 3:case 4:Gt=b.stateNode.containerInfo,Rn=!0;break e}b=b.return}if(Gt===null)throw Error(s(160));zm(f,v,u),Gt=null,Rn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fm(n,e),n=n.sibling}var ci=null;function Fm(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(n,e),Dn(e),l&4&&(va(3,e,e.return),hl(3,e),va(5,e,e.return));break;case 1:Cn(n,e),Dn(e),l&512&&(tn||a===null||Si(a,a.return)),l&64&&Ii&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=ci;if(Cn(n,e),Dn(e),l&512&&(tn||a===null||Si(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[te]||f[Qt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),gn(f,l,a),f[Qt]=e,ze(f),l=f;break e;case"link":var v=Fg("link","href",u).get(l+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break t}}f=u.createElement(l),gn(f,l,a),u.head.appendChild(f);break;case"meta":if(v=Fg("meta","content",u).get(l+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break t}}f=u.createElement(l),gn(f,l,a),u.head.appendChild(f);break;default:throw Error(s(468,l))}f[Qt]=e,ze(f),l=f}e.stateNode=l}else Hg(u,e.type,e.stateNode);else e.stateNode=Bg(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?Hg(u,e.type,e.stateNode):Bg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ld(e,e.memoizedProps,a.memoizedProps)}break;case 27:Cn(n,e),Dn(e),l&512&&(tn||a===null||Si(a,a.return)),a!==null&&l&4&&ld(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Cn(n,e),Dn(e),l&512&&(tn||a===null||Si(a,a.return)),e.flags&32){u=e.stateNode;try{Ds(u,"")}catch(Ie){wt(e,e.return,Ie)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,ld(e,u,a!==null?a.memoizedProps:u)),l&1024&&(ud=!0);break;case 6:if(Cn(n,e),Dn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Ie){wt(e,e.return,Ie)}}break;case 3:if(qo=null,u=ci,ci=Xo(n.containerInfo),Cn(n,e),ci=u,Dn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(Ie){wt(e,e.return,Ie)}ud&&(ud=!1,Hm(e));break;case 4:l=ci,ci=Xo(e.stateNode.containerInfo),Cn(n,e),Dn(e),ci=l;break;case 12:Cn(n,e),Dn(e);break;case 31:Cn(n,e),Dn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Do(e,l)));break;case 13:Cn(n,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lo=ve()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Do(e,l)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=Ii,ue=tn;if(Ii=Q||u,tn=ue||z,Cn(n,e),tn=ue,Ii=Q,Dn(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Ii||tn||is(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=z.stateNode;var pe=z.memoizedProps.style,$=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;b.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ie){wt(z,z.return,Ie)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Ie){wt(z,z.return,Ie)}}}else if(n.tag===18){if(a===null){z=n;try{var se=z.stateNode;u?Cg(se,!0):Cg(z.stateNode,!1)}catch(Ie){wt(z,z.return,Ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Do(e,a))));break;case 19:Cn(n,e),Dn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Do(e,l)));break;case 30:break;case 21:break;default:Cn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(Um(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=od(e);Co(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ds(v,""),a.flags&=-33);var b=od(e);Co(e,b,v);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=od(e);cd(e,Q,z);break;default:throw Error(s(161))}}catch(ue){wt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Fi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Om(e,n.alternate,n),n=n.sibling}function is(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),is(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),is(n);break;case 27:El(n.stateNode);case 26:case 5:Si(n,n.return),is(n);break;case 22:n.memoizedState===null&&is(n);break;case 30:is(n);break;default:is(n)}e=e.sibling}}function Hi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Hi(u,f,a),hl(4,f);break;case 1:if(Hi(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){wt(l,l.return,Q)}if(l=f,u=l.updateQueue,u!==null){var b=l.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)xp(z[u],b)}catch(Q){wt(l,l.return,Q)}}a&&v&64&&Rm(f),pl(f,f.return);break;case 27:Lm(f);case 26:case 5:Hi(u,f,a),a&&l===null&&v&4&&Dm(f),pl(f,f.return);break;case 12:Hi(u,f,a);break;case 31:Hi(u,f,a),a&&v&4&&Im(u,f);break;case 13:Hi(u,f,a),a&&v&4&&Bm(u,f);break;case 22:f.memoizedState===null&&Hi(u,f,a),pl(f,f.return);break;case 30:break;default:Hi(u,f,a)}n=n.sibling}}function dd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&el(a))}function fd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&el(e))}function ui(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gm(e,n,a,l),n=n.sibling}function Gm(e,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ui(e,n,a,l),u&2048&&hl(9,n);break;case 1:ui(e,n,a,l);break;case 3:ui(e,n,a,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&el(e)));break;case 12:if(u&2048){ui(e,n,a,l),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){wt(n,n.return,z)}}else ui(e,n,a,l);break;case 31:ui(e,n,a,l);break;case 13:ui(e,n,a,l);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?ui(e,n,a,l):ml(e,n):f._visibility&2?ui(e,n,a,l):(f._visibility|=2,Qs(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&dd(v,n);break;case 24:ui(e,n,a,l),u&2048&&fd(n.alternate,n);break;default:ui(e,n,a,l)}}function Qs(e,n,a,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,b=a,z=l,Q=v.flags;switch(v.tag){case 0:case 11:case 15:Qs(f,v,b,z,u),hl(8,v);break;case 23:break;case 22:var ue=v.stateNode;v.memoizedState!==null?ue._visibility&2?Qs(f,v,b,z,u):ml(f,v):(ue._visibility|=2,Qs(f,v,b,z,u)),u&&Q&2048&&dd(v.alternate,v);break;case 24:Qs(f,v,b,z,u),u&&Q&2048&&fd(v.alternate,v);break;default:Qs(f,v,b,z,u)}n=n.sibling}}function ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,u=l.flags;switch(l.tag){case 22:ml(a,l),u&2048&&dd(l.alternate,l);break;case 24:ml(a,l),u&2048&&fd(l.alternate,l);break;default:ml(a,l)}n=n.sibling}}var gl=8192;function Js(e,n,a){if(e.subtreeFlags&gl)for(e=e.child;e!==null;)Vm(e,n,a),e=e.sibling}function Vm(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&gl&&e.memoizedState!==null&&O0(a,ci,e.memoizedState,e.memoizedProps);break;case 5:Js(e,n,a);break;case 3:case 4:var l=ci;ci=Xo(e.stateNode.containerInfo),Js(e,n,a),ci=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gl,gl=16777216,Js(e,n,a),gl=l):Js(e,n,a));break;default:Js(e,n,a)}}function km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];un=l,Wm(l,e)}km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&va(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Uo(e)):vl(e);break;default:vl(e)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];un=l,Wm(l,e)}km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Uo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Uo(n));break;default:Uo(n)}e=e.sibling}}function Wm(e,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,un=l;else e:for(a=e;un!==null;){l=un;var u=l.sibling,f=l.return;if(Pm(l),l===a){un=null;break e}if(u!==null){u.return=f,un=u;break e}un=f}}}var K_={getCacheForType:function(e){var n=pn(Jt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return pn(Jt).controller.signal}},Q_=typeof WeakMap=="function"?WeakMap:Map,Et=0,jt=null,dt=null,pt=0,Nt=0,Vn=null,xa=!1,$s=!1,hd=!1,Gi=0,qt=0,_a=0,as=0,pd=0,kn=0,er=0,xl=null,Un=null,md=!1,Lo=0,qm=0,jo=1/0,Oo=null,ya=null,rn=0,Sa=null,tr=null,Vi=0,gd=0,vd=null,Ym=null,_l=0,xd=null;function Xn(){return(Et&2)!==0&&pt!==0?pt&-pt:L.T!==null?bd():Ir()}function Zm(){if(kn===0)if((pt&536870912)===0||vt){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),kn=e}else kn=536870912;return e=Hn.current,e!==null&&(e.flags|=32),kn}function Ln(e,n,a){(e===jt&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Ma(e,pt,kn,!1)),vn(e,a),((Et&2)===0||e!==jt)&&(e===jt&&((Et&2)===0&&(as|=a),qt===4&&Ma(e,pt,kn,!1)),Mi(e))}function Km(e,n,a){if((Et&6)!==0)throw Error(s(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ot(e,n),u=l?e0(e,n):yd(e,n,!0),f=l;do{if(u===0){$s&&!l&&Ma(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!J_(a)){u=yd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var b=e;u=xl;var z=b.current.memoizedState.isDehydrated;if(z&&(nr(b,v).flags|=256),v=yd(b,v,!1),v!==2){if(hd&&!z){b.errorRecoveryDisabledLanes|=f,as|=f,u=4;break e}f=Un,Un=u,f!==null&&(Un===null?Un=f:Un.push.apply(Un,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){nr(e,0),Ma(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ma(l,n,kn,!xa);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Lo+300-ve(),10<u)){if(Ma(l,n,kn,!xa),ot(l,0,!0)!==0)break e;Vi=n,l.timeoutHandle=Ng(Qm.bind(null,l,a,Un,Oo,md,n,kn,as,er,xa,f,"Throttled",-0,0),u);break e}Qm(l,a,Un,Oo,md,n,kn,as,er,xa,f,null,-0,0)}}break}while(!0);Mi(e)}function Qm(e,n,a,l,u,f,v,b,z,Q,ue,pe,$,se){if(e.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wi},Vm(n,f,pe);var Ie=(f&62914560)===f?Lo-ve():(f&4194048)===f?qm-ve():0;if(Ie=P0(pe,Ie),Ie!==null){Vi=f,e.cancelPendingCommit=Ie(sg.bind(null,e,n,f,a,l,u,v,b,z,ue,pe,null,$,se)),Ma(e,f,v,!Q);return}}sg(e,n,f,a,l,u,v,b,z)}function J_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!Bn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(e,n,a,l){n&=~pd,n&=~as,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Ze(u),v=1<<f;l[f]=-1,u&=~v}a!==0&&xi(e,a,n)}function Po(){return(Et&6)===0?(yl(0),!1):!0}function _d(){if(dt!==null){if(Nt===0)var e=dt.return;else e=dt,Ui=Za=null,Ou(e),Ws=null,nl=0,e=dt;for(;e!==null;)wm(e.alternate,e),e=e.return;dt=null}}function nr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,x0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vi=0,_d(),jt=e,dt=a=Ci(e.current,null),pt=n,Nt=0,Vn=null,xa=!1,$s=Ot(e,n),hd=!1,er=kn=pd=as=_a=qt=0,Un=xl=null,md=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Ze(l),f=1<<u;n|=e[u],l&=~f}return Gi=n,no(),a}function Jm(e,n){at=null,L.H=ul,n===Xs||n===uo?(n=pp(),Nt=3):n===Eu?(n=pp(),Nt=4):Nt=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,dt===null&&(qt=1,To(e,Kn(n,e.current)))}function $m(){var e=Hn.current;return e===null?!0:(pt&4194048)===pt?ei===null:(pt&62914560)===pt||(pt&536870912)!==0?e===ei:!1}function eg(){var e=L.H;return L.H=ul,e===null?ul:e}function tg(){var e=L.A;return L.A=K_,e}function zo(){qt=4,xa||(pt&4194048)!==pt&&Hn.current!==null||($s=!0),(_a&134217727)===0&&(as&134217727)===0||jt===null||Ma(jt,pt,kn,!1)}function yd(e,n,a){var l=Et;Et|=2;var u=eg(),f=tg();(jt!==e||pt!==n)&&(Oo=null,nr(e,n)),n=!1;var v=qt;e:do try{if(Nt!==0&&dt!==null){var b=dt,z=Vn;switch(Nt){case 8:_d(),v=6;break e;case 3:case 2:case 9:case 6:Hn.current===null&&(n=!0);var Q=Nt;if(Nt=0,Vn=null,ir(e,b,z,Q),a&&$s){v=0;break e}break;default:Q=Nt,Nt=0,Vn=null,ir(e,b,z,Q)}}$_(),v=qt;break}catch(ue){Jm(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Ui=Za=null,Et=l,L.H=u,L.A=f,dt===null&&(jt=null,pt=0,no()),v}function $_(){for(;dt!==null;)ng(dt)}function e0(e,n){var a=Et;Et|=2;var l=eg(),u=tg();jt!==e||pt!==n?(Oo=null,jo=ve()+500,nr(e,n)):$s=Ot(e,n);e:do try{if(Nt!==0&&dt!==null){n=dt;var f=Vn;t:switch(Nt){case 1:Nt=0,Vn=null,ir(e,n,f,1);break;case 2:case 9:if(fp(f)){Nt=0,Vn=null,ig(n);break}n=function(){Nt!==2&&Nt!==9||jt!==e||(Nt=7),Mi(e)},f.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:fp(f)?(Nt=0,Vn=null,ig(n)):(Nt=0,Vn=null,ir(e,n,f,7));break;case 5:var v=null;switch(dt.tag){case 26:v=dt.memoizedState;case 5:case 27:var b=dt;if(v?Gg(v):b.stateNode.complete){Nt=0,Vn=null;var z=b.sibling;if(z!==null)dt=z;else{var Q=b.return;Q!==null?(dt=Q,Io(Q)):dt=null}break t}}Nt=0,Vn=null,ir(e,n,f,5);break;case 6:Nt=0,Vn=null,ir(e,n,f,6);break;case 8:_d(),qt=6;break e;default:throw Error(s(462))}}t0();break}catch(ue){Jm(e,ue)}while(!0);return Ui=Za=null,L.H=l,L.A=u,Et=a,dt!==null?0:(jt=null,pt=0,no(),qt)}function t0(){for(;dt!==null&&!ae();)ng(dt)}function ng(e){var n=Am(e.alternate,e,Gi);e.memoizedProps=e.pendingProps,n===null?Io(e):dt=n}function ig(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ym(a,n,n.pendingProps,n.type,void 0,pt);break;case 11:n=ym(a,n,n.pendingProps,n.type.render,n.ref,pt);break;case 5:Ou(n);default:wm(a,n),n=dt=tp(n,Gi),n=Am(a,n,Gi)}e.memoizedProps=e.pendingProps,n===null?Io(e):dt=n}function ir(e,n,a,l){Ui=Za=null,Ou(n),Ws=null,nl=0;var u=n.return;try{if(V_(e,u,n,a,pt)){qt=1,To(e,Kn(a,e.current)),dt=null;return}}catch(f){if(u!==null)throw dt=u,f;qt=1,To(e,Kn(a,e.current)),dt=null;return}n.flags&32768?(vt||l===1?e=!0:$s||(pt&536870912)!==0?e=!1:(xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Hn.current,l!==null&&l.tag===13&&(l.flags|=16384))),ag(n,e)):Io(n)}function Io(e){var n=e;do{if((n.flags&32768)!==0){ag(n,xa);return}e=n.return;var a=W_(n.alternate,n,Gi);if(a!==null){dt=a;return}if(n=n.sibling,n!==null){dt=n;return}dt=n=e}while(n!==null);qt===0&&(qt=5)}function ag(e,n){do{var a=q_(e.alternate,e);if(a!==null){a.flags&=32767,dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){dt=e;return}dt=e=a}while(e!==null);qt=6,dt=null}function sg(e,n,a,l,u,f,v,b,z){e.cancelPendingCommit=null;do Bo();while(rn!==0);if((Et&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ou,ql(e,a,f,v,b,z),e===jt&&(dt=jt=null,pt=0),tr=n,Sa=e,Vi=a,gd=f,vd=u,Ym=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,s0(Le,function(){return ug(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,u=W.p,W.p=2,v=Et,Et|=4;try{Y_(e,n,a)}finally{Et=v,W.p=u,L.T=l}}rn=1,rg(),lg(),og()}}function rg(){if(rn===1){rn=0;var e=Sa,n=tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var l=W.p;W.p=2;var u=Et;Et|=4;try{Fm(n,e);var f=Ud,v=Wh(e.containerInfo),b=f.focusedElem,z=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&Xh(b.ownerDocument.documentElement,b)){if(z!==null&&iu(b)){var Q=z.start,ue=z.end;if(ue===void 0&&(ue=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ue,b.value.length);else{var pe=b.ownerDocument||document,$=pe&&pe.defaultView||window;if($.getSelection){var se=$.getSelection(),Ie=b.textContent.length,Qe=Math.min(z.start,Ie),Ut=z.end===void 0?Qe:Math.min(z.end,Ie);!se.extend&&Qe>Ut&&(v=Ut,Ut=Qe,Qe=v);var X=kh(b,Qe),F=kh(b,Ut);if(X&&F&&(se.rangeCount!==1||se.anchorNode!==X.node||se.anchorOffset!==X.offset||se.focusNode!==F.node||se.focusOffset!==F.offset)){var K=pe.createRange();K.setStart(X.node,X.offset),se.removeAllRanges(),Qe>Ut?(se.addRange(K),se.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),se.addRange(K))}}}}for(pe=[],se=b;se=se.parentNode;)se.nodeType===1&&pe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pe.length;b++){var de=pe[b];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Qo=!!Dd,Ud=Dd=null}finally{Et=u,W.p=l,L.T=a}}e.current=n,rn=2}}function lg(){if(rn===2){rn=0;var e=Sa,n=tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var l=W.p;W.p=2;var u=Et;Et|=4;try{Om(e,n.alternate,n)}finally{Et=u,W.p=l,L.T=a}}rn=3}}function og(){if(rn===4||rn===3){rn=0,Se();var e=Sa,n=tr,a=Vi,l=Ym;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,tr=Sa=null,cg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ya=null),aa(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=L.T,u=W.p,W.p=2,L.T=null;try{for(var f=e.onRecoverableError,v=0;v<l.length;v++){var b=l[v];f(b.value,{componentStack:b.stack})}}finally{L.T=n,W.p=u}}(Vi&3)!==0&&Bo(),Mi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===xd?_l++:(_l=0,xd=e):_l=0,yl(0)}}function cg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,el(n)))}function Bo(){return rg(),lg(),og(),ug()}function ug(){if(rn!==5)return!1;var e=Sa,n=gd;gd=0;var a=aa(Vi),l=L.T,u=W.p;try{W.p=32>a?32:a,L.T=null,a=vd,vd=null;var f=Sa,v=Vi;if(rn=0,tr=Sa=null,Vi=0,(Et&6)!==0)throw Error(s(331));var b=Et;if(Et|=4,Xm(f.current),Gm(f,f.current,v,a),Et=b,yl(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ke,f)}catch{}return!0}finally{W.p=u,L.T=l,cg(e,n)}}function dg(e,n,a){n=Kn(a,n),n=Ku(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(vn(e,2),Mi(e))}function wt(e,n,a){if(e.tag===3)dg(e,e,a);else for(;n!==null;){if(n.tag===3){dg(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ya===null||!ya.has(l))){e=Kn(a,e),a=fm(2),l=pa(n,a,2),l!==null&&(hm(a,l,n,e),vn(l,2),Mi(l));break}}n=n.return}}function Sd(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Q_;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(hd=!0,u.add(a),e=n0.bind(null,e,n,a),n.then(e,e))}function n0(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(pt&a)===a&&(qt===4||qt===3&&(pt&62914560)===pt&&300>ve()-Lo?(Et&2)===0&&nr(e,0):pd|=a,er===pt&&(er=0)),Mi(e)}function fg(e,n){n===0&&(n=xt()),e=Wa(e,n),e!==null&&(vn(e,n),Mi(e))}function i0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),fg(e,a)}function a0(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),fg(e,a)}function s0(e,n){return j(e,n)}var Fo=null,ar=null,Md=!1,Ho=!1,Ed=!1,Ea=0;function Mi(e){e!==ar&&e.next===null&&(ar===null?Fo=ar=e:ar=ar.next=e),Ho=!0,Md||(Md=!0,l0())}function yl(e,n){if(!Ed&&Ho){Ed=!0;do for(var a=!1,l=Fo;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var v=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-Ze(42|e)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gg(l,f))}else f=pt,f=ot(l,l===jt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Ot(l,f)||(a=!0,gg(l,f));l=l.next}while(a);Ed=!1}}function r0(){hg()}function hg(){Ho=Md=!1;var e=0;Ea!==0&&v0()&&(e=Ea);for(var n=ve(),a=null,l=Fo;l!==null;){var u=l.next,f=pg(l,n);f===0?(l.next=null,a===null?Fo=u:a.next=u,u===null&&(ar=a)):(a=l,(e!==0||(f&3)!==0)&&(Ho=!0)),l=u}rn!==0&&rn!==5||yl(e),Ea!==0&&(Ea=0)}function pg(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ze(f),b=1<<v,z=u[v];z===-1?((b&a)===0||(b&l)!==0)&&(u[v]=an(b,n)):z<=n&&(e.expiredLanes|=b),f&=~b}if(n=jt,a=pt,a=ot(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&T(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ot(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&T(l),aa(a)){case 2:case 8:a=De;break;case 32:a=Le;break;case 268435456:a=Ae;break;default:a=Le}return l=mg.bind(null,e),a=j(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&T(l),e.callbackPriority=2,e.callbackNode=null,2}function mg(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bo()&&e.callbackNode!==a)return null;var l=pt;return l=ot(e,e===jt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Km(e,l,n),pg(e,ve()),e.callbackNode!=null&&e.callbackNode===a?mg.bind(null,e):null)}function gg(e,n){if(Bo())return null;Km(e,n,!0)}function l0(){_0(function(){(Et&6)!==0?j(We,r0):hg()})}function bd(){if(Ea===0){var e=Vs;e===0&&(e=he,he<<=1,(he&261888)===0&&(he=256)),Ea=e}return Ea}function vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yl(""+e)}function xg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function o0(e,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=vg((u[xn]||null).action),v=l.submitter;v&&(n=(n=v[xn]||null)?vg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new Jl("action","action",null,l,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var z=v?xg(u,v):new FormData(u);ku(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=v?xg(u,v):new FormData(u),ku(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Td=0;Td<lu.length;Td++){var Ad=lu[Td],c0=Ad.toLowerCase(),u0=Ad[0].toUpperCase()+Ad.slice(1);oi(c0,"on"+u0)}oi(Zh,"onAnimationEnd"),oi(Kh,"onAnimationIteration"),oi(Qh,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(A_,"onTransitionRun"),oi(N_,"onTransitionStart"),oi(w_,"onTransitionCancel"),oi(Jh,"onTransitionEnd"),At("onMouseEnter",["mouseout","mouseover"]),At("onMouseLeave",["mouseout","mouseover"]),At("onPointerEnter",["pointerout","pointerover"]),At("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function _g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var v=l.length-1;0<=v;v--){var b=l[v],z=b.instance,Q=b.currentTarget;if(b=b.listener,z!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=Q;try{f(u)}catch(ue){to(ue)}u.currentTarget=null,f=z}else for(v=0;v<l.length;v++){if(b=l[v],z=b.instance,Q=b.currentTarget,b=b.listener,z!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=Q;try{f(u)}catch(ue){to(ue)}u.currentTarget=null,f=z}}}}function ft(e,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var l=e+"__bubble";a.has(l)||(yg(n,e,2,!1),a.add(l))}function Nd(e,n,a){var l=0;n&&(l|=4),yg(a,e,l,n)}var Go="_reactListening"+Math.random().toString(36).slice(2);function wd(e){if(!e[Go]){e[Go]=!0,Je.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||Nd(a,!1,e),Nd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Go]||(n[Go]=!0,Nd("selectionchange",!1,n))}}function yg(e,n,a,l){switch(Zg(n)){case 2:var u=B0;break;case 8:u=F0;break;default:u=Vd}a=u.bind(null,n,a,e),u=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Rd(e,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var b=l.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=l.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=Te(b),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){l=f=v;continue e}b=b.parentNode}}l=l.return}Th(function(){var Q=f,ue=Wc(a),pe=[];e:{var $=$h.get(e);if($!==void 0){var se=Jl,Ie=e;switch(e){case"keypress":if(Kl(a)===0)break e;case"keydown":case"keyup":se=a_;break;case"focusin":Ie="focus",se=Jc;break;case"focusout":Ie="blur",se=Jc;break;case"beforeblur":case"afterblur":se=Jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=l_;break;case Zh:case Kh:case Qh:se=Zx;break;case Jh:se=c_;break;case"scroll":case"scrollend":se=kx;break;case"wheel":se=d_;break;case"copy":case"cut":case"paste":se=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Ch;break;case"toggle":case"beforetoggle":se=h_}var Qe=(n&4)!==0,Ut=!Qe&&(e==="scroll"||e==="scrollend"),X=Qe?$!==null?$+"Capture":null:$;Qe=[];for(var F=Q,K;F!==null;){var de=F;if(K=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||K===null||X===null||(de=Vr(F,X),de!=null&&Qe.push(Ml(F,de,K))),Ut)break;F=F.return}0<Qe.length&&($=new se($,Ie,null,a,ue),pe.push({event:$,listeners:Qe}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",$&&a!==Xc&&(Ie=a.relatedTarget||a.fromElement)&&(Te(Ie)||Ie[sa]))break e;if((se||$)&&($=ue.window===ue?ue:($=ue.ownerDocument)?$.defaultView||$.parentWindow:window,se?(Ie=a.relatedTarget||a.toElement,se=Q,Ie=Ie?Te(Ie):null,Ie!==null&&(Ut=d(Ie),Qe=Ie.tag,Ie!==Ut||Qe!==5&&Qe!==27&&Qe!==6)&&(Ie=null)):(se=null,Ie=Q),se!==Ie)){if(Qe=wh,de="onMouseLeave",X="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=Ch,de="onPointerLeave",X="onPointerEnter",F="pointer"),Ut=se==null?$:Oe(se),K=Ie==null?$:Oe(Ie),$=new Qe(de,F+"leave",se,a,ue),$.target=Ut,$.relatedTarget=K,de=null,Te(ue)===Q&&(Qe=new Qe(X,F+"enter",Ie,a,ue),Qe.target=K,Qe.relatedTarget=Ut,de=Qe),Ut=de,se&&Ie)t:{for(Qe=f0,X=se,F=Ie,K=0,de=X;de;de=Qe(de))K++;de=0;for(var Xe=F;Xe;Xe=Qe(Xe))de++;for(;0<K-de;)X=Qe(X),K--;for(;0<de-K;)F=Qe(F),de--;for(;K--;){if(X===F||F!==null&&X===F.alternate){Qe=X;break t}X=Qe(X),F=Qe(F)}Qe=null}else Qe=null;se!==null&&Sg(pe,$,se,Qe,!1),Ie!==null&&Ut!==null&&Sg(pe,Ut,Ie,Qe,!0)}}e:{if($=Q?Oe(Q):window,se=$.nodeName&&$.nodeName.toLowerCase(),se==="select"||se==="input"&&$.type==="file")var St=Ih;else if(Ph($))if(Bh)St=E_;else{St=S_;var Be=y_}else se=$.nodeName,!se||se.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&kc(Q.elementType)&&(St=Ih):St=M_;if(St&&(St=St(e,Q))){zh(pe,St,a,ue);break e}Be&&Be(e,$,Q),e==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Vc($,"number",$.value)}switch(Be=Q?Oe(Q):window,e){case"focusin":(Ph(Be)||Be.contentEditable==="true")&&(Os=Be,au=Q,Qr=null);break;case"focusout":Qr=au=Os=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,qh(pe,a,ue);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":qh(pe,a,ue)}var st;if(eu)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else js?jh(e,a)&&(mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(Dh&&a.locale!=="ko"&&(js||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&js&&(st=Ah()):(la=ue,Zc="value"in la?la.value:la.textContent,js=!0)),Be=Vo(Q,mt),0<Be.length&&(mt=new Rh(mt,e,null,a,ue),pe.push({event:mt,listeners:Be}),st?mt.data=st:(st=Oh(a),st!==null&&(mt.data=st)))),(st=m_?g_(e,a):v_(e,a))&&(mt=Vo(Q,"onBeforeInput"),0<mt.length&&(Be=new Rh("onBeforeInput","beforeinput",null,a,ue),pe.push({event:Be,listeners:mt}),Be.data=st)),o0(pe,e,Q,a,ue)}_g(pe,n)})}function Ml(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vo(e,n){for(var a=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vr(e,a),u!=null&&l.unshift(Ml(e,u,f)),u=Vr(e,n),u!=null&&l.push(Ml(e,u,f))),e.tag===3)return l;e=e.return}return[]}function f0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sg(e,n,a,l,u){for(var f=n._reactName,v=[];a!==null&&a!==l;){var b=a,z=b.alternate,Q=b.stateNode;if(b=b.tag,z!==null&&z===l)break;b!==5&&b!==26&&b!==27||Q===null||(z=Q,u?(Q=Vr(a,f),Q!=null&&v.unshift(Ml(a,Q,z))):u||(Q=Vr(a,f),Q!=null&&v.push(Ml(a,Q,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var h0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Mg(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(p0,"")}function Eg(e,n){return n=Mg(n),Mg(e)===n}function Dt(e,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Ds(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Ds(e,""+l);break;case"className":gt(e,"class",l);break;case"tabIndex":gt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gt(e,a,l);break;case"style":Eh(e,l,f);break;case"data":if(n!=="object"){gt(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Yl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Dt(e,n,"name",u.name,u,null),Dt(e,n,"formEncType",u.formEncType,u,null),Dt(e,n,"formMethod",u.formMethod,u,null),Dt(e,n,"formTarget",u.formTarget,u,null)):(Dt(e,n,"encType",u.encType,u,null),Dt(e,n,"method",u.method,u,null),Dt(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Yl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=wi);break;case"onScroll":l!=null&&ft("scroll",e);break;case"onScrollEnd":l!=null&&ft("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Yl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ft("beforetoggle",e),ft("toggle",e),Xt(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gx.get(a)||a,Xt(e,a,l))}}function Cd(e,n,a,l,u,f){switch(a){case"style":Eh(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ds(e,l):(typeof l=="number"||typeof l=="bigint")&&Ds(e,""+l);break;case"onScroll":l!=null&&ft("scroll",e);break;case"onScrollEnd":l!=null&&ft("scrollend",e);break;case"onClick":l!=null&&(e.onclick=wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xt(e,a,l)}}}function gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",e),ft("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,f,v,a,null)}}u&&Dt(e,n,"srcSet",a.srcSet,a,null),l&&Dt(e,n,"src",a.src,a,null);return;case"input":ft("invalid",e);var b=f=v=u=null,z=null,Q=null;for(l in a)if(a.hasOwnProperty(l)){var ue=a[l];if(ue!=null)switch(l){case"name":u=ue;break;case"type":v=ue;break;case"checked":z=ue;break;case"defaultChecked":Q=ue;break;case"value":f=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Dt(e,n,l,ue,a,null)}}Gr(e,f,b,z,Q,v,u,!1);return;case"select":ft("invalid",e),l=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":l=b;default:Dt(e,n,u,b,a,null)}n=f,a=v,e.multiple=!!l,n!=null?Cs(e,!!l,n,!1):a!=null&&Cs(e,!!l,a,!0);return;case"textarea":ft("invalid",e),f=u=l=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":l=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Dt(e,n,v,b,a,null)}Sh(e,l,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Dt(e,n,z,l,a,null)}return;case"dialog":ft("beforetoggle",e),ft("toggle",e),ft("cancel",e),ft("close",e);break;case"iframe":case"object":ft("load",e);break;case"video":case"audio":for(l=0;l<Sl.length;l++)ft(Sl[l],e);break;case"image":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"embed":case"source":case"link":ft("error",e),ft("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(l=a[Q],l!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,Q,l,a,null)}return;default:if(kc(n)){for(ue in a)a.hasOwnProperty(ue)&&(l=a[ue],l!==void 0&&Cd(e,n,ue,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Dt(e,n,b,l,a,null))}function m0(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,z=null,Q=null,ue=null;for(se in a){var pe=a[se];if(a.hasOwnProperty(se)&&pe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":z=pe;default:l.hasOwnProperty(se)||Dt(e,n,se,null,l,pe)}}for(var $ in l){var se=l[$];if(pe=a[$],l.hasOwnProperty($)&&(se!=null||pe!=null))switch($){case"type":f=se;break;case"name":u=se;break;case"checked":Q=se;break;case"defaultChecked":ue=se;break;case"value":v=se;break;case"defaultValue":b=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==pe&&Dt(e,n,$,se,l,pe)}}Hr(e,v,b,z,Q,ue,f,u);return;case"select":se=v=b=$=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":se=z;default:l.hasOwnProperty(f)||Dt(e,n,f,null,l,z)}for(u in l)if(f=l[u],z=a[u],l.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":$=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==z&&Dt(e,n,u,f,l,z)}n=b,a=v,l=se,$!=null?Cs(e,!!a,$,!1):!!l!=!!a&&(n!=null?Cs(e,!!a,n,!0):Cs(e,!!a,a?[]:"",!1));return;case"textarea":se=$=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Dt(e,n,b,null,l,u)}for(v in l)if(u=l[v],f=a[v],l.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":$=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Dt(e,n,v,u,l,f)}yh(e,$,se);return;case"option":for(var Ie in a)if($=a[Ie],a.hasOwnProperty(Ie)&&$!=null&&!l.hasOwnProperty(Ie))switch(Ie){case"selected":e.selected=!1;break;default:Dt(e,n,Ie,null,l,$)}for(z in l)if($=l[z],se=a[z],l.hasOwnProperty(z)&&$!==se&&($!=null||se!=null))switch(z){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Dt(e,n,z,$,l,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)$=a[Qe],a.hasOwnProperty(Qe)&&$!=null&&!l.hasOwnProperty(Qe)&&Dt(e,n,Qe,null,l,$);for(Q in l)if($=l[Q],se=a[Q],l.hasOwnProperty(Q)&&$!==se&&($!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Dt(e,n,Q,$,l,se)}return;default:if(kc(n)){for(var Ut in a)$=a[Ut],a.hasOwnProperty(Ut)&&$!==void 0&&!l.hasOwnProperty(Ut)&&Cd(e,n,Ut,void 0,l,$);for(ue in l)$=l[ue],se=a[ue],!l.hasOwnProperty(ue)||$===se||$===void 0&&se===void 0||Cd(e,n,ue,$,l,se);return}}for(var X in a)$=a[X],a.hasOwnProperty(X)&&$!=null&&!l.hasOwnProperty(X)&&Dt(e,n,X,null,l,$);for(pe in l)$=l[pe],se=a[pe],!l.hasOwnProperty(pe)||$===se||$==null&&se==null||Dt(e,n,pe,$,l,se)}function bg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function g0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],f=u.transferSize,v=u.initiatorType,b=u.duration;if(f&&b&&bg(v)){for(v=0,b=u.responseEnd,l+=1;l<a.length;l++){var z=a[l],Q=z.startTime;if(Q>b)break;var ue=z.transferSize,pe=z.initiatorType;ue&&bg(pe)&&(z=z.responseEnd,v+=ue*(z<b?1:(b-Q)/(z-Q)))}if(--l,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dd=null,Ud=null;function ko(e){return e.nodeType===9?e:e.ownerDocument}function Tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ld(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jd=null;function v0(){var e=window.event;return e&&e.type==="popstate"?e===jd?!1:(jd=e,!0):(jd=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,_0=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(y0)}:Ng;function y0(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Rg(e,n){var a=n,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),or(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,El(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[te]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&El(e.ownerDocument.body);a=u}while(a);or(n)}function Cg(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Od(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Od(a),Y(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function S0(e,n,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[te])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function M0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ti(e.nextSibling),e===null))return null;return e}function Dg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function Pd(e){return e.data==="$?"||e.data==="$~"}function zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function E0(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Id=null;function Ug(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ti(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function jg(e,n,a){switch(n=ko(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function El(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Y(e)}var ni=new Map,Og=new Set;function Xo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ki=W.d;W.d={f:b0,r:T0,D:A0,C:N0,L:w0,m:R0,X:D0,S:C0,M:U0};function b0(){var e=ki.f(),n=Po();return e||n}function T0(e){var n=Ce(e);n!==null&&n.tag===5&&n.type==="form"?Jp(n):ki.r(e)}var sr=typeof document>"u"?null:document;function Pg(e,n,a){var l=sr;if(l&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Og.has(u)||(Og.add(u),e={rel:e,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),gn(n,"link",e),ze(n),l.head.appendChild(n)))}}function A0(e){ki.D(e),Pg("dns-prefetch",e,null)}function N0(e,n){ki.C(e,n),Pg("preconnect",e,n)}function w0(e,n,a){ki.L(e,n,a);var l=sr;if(l&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var f=u;switch(n){case"style":f=rr(e);break;case"script":f=lr(e)}ni.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ni.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(bl(f))||n==="script"&&l.querySelector(Tl(f))||(n=l.createElement("link"),gn(n,"link",e),ze(n),l.head.appendChild(n)))}}function R0(e,n){ki.m(e,n);var a=sr;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(l)+'"][href="'+Sn(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=lr(e)}if(!ni.has(f)&&(e=y({rel:"modulepreload",href:e},n),ni.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tl(f)))return}l=a.createElement("link"),gn(l,"link",e),ze(l),a.head.appendChild(l)}}}function C0(e,n,a){ki.S(e,n,a);var l=sr;if(l&&e){var u=Pe(l).hoistableStyles,f=rr(e);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=l.querySelector(bl(f)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ni.get(f))&&Bd(e,a);var z=v=l.createElement("link");ze(z),gn(z,"link",e),z._p=new Promise(function(Q,ue){z.onload=Q,z.onerror=ue}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Wo(v,n,l)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function D0(e,n){ki.X(e,n);var a=sr;if(a&&e){var l=Pe(a).hoistableScripts,u=lr(e),f=l.get(u);f||(f=a.querySelector(Tl(u)),f||(e=y({src:e,async:!0},n),(n=ni.get(u))&&Fd(e,n),f=a.createElement("script"),ze(f),gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function U0(e,n){ki.M(e,n);var a=sr;if(a&&e){var l=Pe(a).hoistableScripts,u=lr(e),f=l.get(u);f||(f=a.querySelector(Tl(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=ni.get(u))&&Fd(e,n),f=a.createElement("script"),ze(f),gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function zg(e,n,a,l){var u=(u=ye.current)?Xo(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=Pe(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rr(a.href);var f=Pe(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(bl(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(e,a),f||L0(u,e,a,v.state))),n&&l===null)throw Error(s(528,""));return v}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=lr(a),a=Pe(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function rr(e){return'href="'+Sn(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function Ig(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function L0(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),gn(n,"link",a),ze(n),e.head.appendChild(n))}function lr(e){return'[src="'+Sn(e)+'"]'}function Tl(e){return"script[async]"+e}function Bg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(l)return n.instance=l,ze(l),l;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ze(l),gn(l,"style",u),Wo(l,a.precedence,e),n.instance=l;case"stylesheet":u=rr(a.href);var f=e.querySelector(bl(u));if(f)return n.state.loading|=4,n.instance=f,ze(f),f;l=Ig(a),(u=ni.get(u))&&Bd(l,u),f=(e.ownerDocument||e).createElement("link"),ze(f);var v=f;return v._p=new Promise(function(b,z){v.onload=b,v.onerror=z}),gn(f,"link",l),n.state.loading|=4,Wo(f,a.precedence,e),n.instance=f;case"script":return f=lr(a.src),(u=e.querySelector(Tl(f)))?(n.instance=u,ze(u),u):(l=a,(u=ni.get(f))&&(l=y({},a),Fd(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),ze(u),gn(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Wo(l,a.precedence,e));return n.instance}function Wo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,v=0;v<l.length;v++){var b=l[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Fd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var qo=null;function Fg(e,n,a){if(qo===null){var l=new Map,u=qo=new Map;u.set(a,l)}else u=qo,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[te]||f[Qt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=l.get(v);b?b.push(f):l.set(v,[f])}}return l}function Hg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function j0(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function O0(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=rr(l.href),f=n.querySelector(bl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Yo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ze(f);return}f=n.ownerDocument||n,l=Ig(l),(u=ni.get(u))&&Bd(l,u),f=f.createElement("link"),ze(f);var v=f;v._p=new Promise(function(b,z){v.onload=b,v.onerror=z}),gn(f,"link",l),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hd=0;function P0(e,n){return e.stylesheets&&e.count===0&&Ko(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ko(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Hd===0&&(Hd=62500*g0());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ko(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Hd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Yo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ko(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zo=null;function Ko(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zo=new Map,n.forEach(z0,e),Zo=null,Yo.call(e))}function z0(e,n){if(!(n.state.loading&4)){var a=Zo.get(e);if(a)var l=a.get(null);else{a=new Map,Zo.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||l,f===l&&a.set(null,u),a.set(v,u),this.count++,l=Yo.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Al={$$typeof:C,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function I0(e,n,a,l,u,f,v,b,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=In(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.hiddenUpdates=In(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Vg(e,n,a,l,u,f,v,b,z,Q,ue,pe){return e=new I0(e,n,a,v,z,Q,ue,pe,b),n=1,f===!0&&(n|=24),f=Fn(3,null,null,n),e.current=f,f.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},bu(f),e}function kg(e){return e?(e=Is,e):Is}function Xg(e,n,a,l,u,f){u=kg(u),l.context===null?l.context=u:l.pendingContext=u,l=ha(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=pa(e,l,n),a!==null&&(Ln(a,e,n),al(a,e,n))}function Wg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Gd(e,n){Wg(e,n),(e=e.alternate)&&Wg(e,n)}function qg(e){if(e.tag===13||e.tag===31){var n=Wa(e,67108864);n!==null&&Ln(n,e,67108864),Gd(e,67108864)}}function Yg(e){if(e.tag===13||e.tag===31){var n=Xn();n=Rs(n);var a=Wa(e,n);a!==null&&Ln(a,e,n),Gd(e,n)}}var Qo=!0;function B0(e,n,a,l){var u=L.T;L.T=null;var f=W.p;try{W.p=2,Vd(e,n,a,l)}finally{W.p=f,L.T=u}}function F0(e,n,a,l){var u=L.T;L.T=null;var f=W.p;try{W.p=8,Vd(e,n,a,l)}finally{W.p=f,L.T=u}}function Vd(e,n,a,l){if(Qo){var u=kd(l);if(u===null)Rd(e,n,l,Jo,a),Kg(e,l);else if(G0(u,e,n,a,l))l.stopPropagation();else if(Kg(e,l),n&4&&-1<H0.indexOf(e)){for(;u!==null;){var f=Ce(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=ke(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var z=1<<31-Ze(v);b.entanglements[1]|=z,v&=~z}Mi(f),(Et&6)===0&&(jo=ve()+500,yl(0))}}break;case 31:case 13:b=Wa(f,2),b!==null&&Ln(b,f,2),Po(),Gd(f,2)}if(f=kd(l),f===null&&Rd(e,n,l,Jo,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else Rd(e,n,l,null,a)}}function kd(e){return e=Wc(e),Xd(e)}var Jo=null;function Xd(e){if(Jo=null,e=Te(e),e!==null){var n=d(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jo=e,null}function Zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case We:return 2;case De:return 8;case Le:case it:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Wd=!1,Ta=null,Aa=null,Na=null,Nl=new Map,wl=new Map,wa=[],H0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(n.pointerId)}}function Rl(e,n,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ce(n),n!==null&&qg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function G0(e,n,a,l,u){switch(n){case"focusin":return Ta=Rl(Ta,e,n,a,l,u),!0;case"dragenter":return Aa=Rl(Aa,e,n,a,l,u),!0;case"mouseover":return Na=Rl(Na,e,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return Nl.set(f,Rl(Nl.get(f)||null,e,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,wl.set(f,Rl(wl.get(f)||null,e,n,a,l,u)),!0}return!1}function Qg(e){var n=Te(e.target);if(n!==null){var a=d(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ga(e.priority,function(){Yg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Ga(e.priority,function(){Yg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=kd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Xc=l,a.target.dispatchEvent(l),Xc=null}else return n=Ce(a),n!==null&&qg(n),e.blockedOn=a,!1;n.shift()}return!0}function Jg(e,n,a){$o(e)&&a.delete(n)}function V0(){Wd=!1,Ta!==null&&$o(Ta)&&(Ta=null),Aa!==null&&$o(Aa)&&(Aa=null),Na!==null&&$o(Na)&&(Na=null),Nl.forEach(Jg),wl.forEach(Jg)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Wd||(Wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,V0)))}var tc=null;function $g(e){tc!==e&&(tc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(Xd(l||a)===null)continue;break}var f=Ce(a);f!==null&&(e.splice(n,3),n-=3,ku(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function or(e){function n(z){return ec(z,e)}Ta!==null&&ec(Ta,e),Aa!==null&&ec(Aa,e),Na!==null&&ec(Na,e),Nl.forEach(n),wl.forEach(n);for(var a=0;a<wa.length;a++){var l=wa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Qg(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],v=u[xn]||null;if(typeof f=="function")v||$g(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[xn]||null)b=v.formAction;else if(Xd(u)!==null)continue}else b=v.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),$g(a)}}}function ev(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function qd(e){this._internalRoot=e}nc.prototype.render=qd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,l=Xn();Xg(a,l,e,n,null,null)},nc.prototype.unmount=qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xg(e.current,2,null,e,null,null),Po(),n[sa]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ir();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&Qg(e)}};var tv=t.version;if(tv!=="19.2.7")throw Error(s(527,tv,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var k0={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Ke=ic.inject(k0),Re=ic}catch{}}return Dl.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,l="",u=om,f=cm,v=um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Vg(e,1,!1,null,null,a,l,null,u,f,v,ev),e[sa]=n.current,wd(e),new qd(n)},Dl.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var l=!1,u="",f=om,v=cm,b=um,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Vg(e,1,!0,n,a??null,l,u,z,f,v,b,ev),n.context=kg(null),a=n.current,l=Xn(),l=Rs(l),u=ha(l),u.callback=null,pa(a,u,l),a=l,n.current.lanes=a,vn(n,a),Mi(n),e[sa]=n.current,wd(e),new nc(n)},Dl.version="19.2.7",Dl}var dv;function ny(){if(dv)return Kd.exports;dv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Kd.exports=ty(),Kd.exports}var iy=ny();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="167",ay=0,fv=1,sy=2,ox=1,ry=2,Ki=3,Ba=0,Pn=1,Ti=2,za=0,Nr=1,hv=2,pv=3,mv=4,ly=5,Ss=100,oy=101,cy=102,uy=103,dy=104,fy=200,hy=201,py=202,my=203,Rf=204,Cf=205,gy=206,vy=207,xy=208,_y=209,yy=210,Sy=211,My=212,Ey=213,by=214,Ty=0,Ay=1,Ny=2,Lc=3,wy=4,Ry=5,Cy=6,Dy=7,cx=0,Uy=1,Ly=2,Ia=0,jy=1,Oy=2,Py=3,zy=4,Iy=5,By=6,Fy=7,ux=300,Cr=301,Dr=302,Df=303,Uf=304,Bc=306,Lf=1e3,Es=1001,jf=1002,ai=1003,Hy=1004,ac=1005,mi=1006,ef=1007,bs=1008,$i=1009,dx=1010,fx=1011,Fl=1012,dh=1013,As=1014,Qi=1015,Hl=1016,fh=1017,hh=1018,Ur=1020,hx=35902,px=1021,mx=1022,gi=1023,gx=1024,vx=1025,wr=1026,Lr=1027,xx=1028,ph=1029,_x=1030,mh=1031,gh=1033,Nc=33776,wc=33777,Rc=33778,Cc=33779,Of=35840,Pf=35841,zf=35842,If=35843,Bf=36196,Ff=37492,Hf=37496,Gf=37808,Vf=37809,kf=37810,Xf=37811,Wf=37812,qf=37813,Yf=37814,Zf=37815,Kf=37816,Qf=37817,Jf=37818,$f=37819,eh=37820,th=37821,Dc=36492,nh=36494,ih=36495,yx=36283,ah=36284,sh=36285,rh=36286,Gy=3200,Vy=3201,ky=0,Xy=1,Pa="",Ei="srgb",Fa="srgb-linear",vh="display-p3",Fc="display-p3-linear",jc="linear",Bt="srgb",Oc="rec709",Pc="p3",cr=7680,gv=519,Wy=512,qy=513,Yy=514,Sx=515,Zy=516,Ky=517,Qy=518,Jy=519,vv=35044,xv="300 es",Ji=2e3,zc=2001;class Or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const c=this._listeners[t];if(c!==void 0){const d=c.indexOf(i);d!==-1&&c.splice(d,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let d=0,h=c.length;d<h;d++)c[d].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=Math.PI/180,lh=180/Math.PI;function Gl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function On(o,t,i){return Math.max(t,Math.min(i,o))}function $y(o,t){return(o%t+t)%t}function nf(o,t,i){return(1-i)*o+i*t}function Ul(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,i=0){Tt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(On(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),d=this.x-t.x,h=this.y-t.y;return this.x=d*s-h*c+t.x,this.y=d*c+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(t,i,s,c,d,h,p,g,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,d,h,p,g,m)}set(t,i,s,c,d,h,p,g,m){const x=this.elements;return x[0]=t,x[1]=c,x[2]=p,x[3]=i,x[4]=d,x[5]=g,x[6]=s,x[7]=h,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,d=this.elements,h=s[0],p=s[3],g=s[6],m=s[1],x=s[4],y=s[7],S=s[2],E=s[5],A=s[8],R=c[0],M=c[3],_=c[6],I=c[1],C=c[4],P=c[7],ie=c[2],H=c[5],O=c[8];return d[0]=h*R+p*I+g*ie,d[3]=h*M+p*C+g*H,d[6]=h*_+p*P+g*O,d[1]=m*R+x*I+y*ie,d[4]=m*M+x*C+y*H,d[7]=m*_+x*P+y*O,d[2]=S*R+E*I+A*ie,d[5]=S*M+E*C+A*H,d[8]=S*_+E*P+A*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],d=t[3],h=t[4],p=t[5],g=t[6],m=t[7],x=t[8];return i*h*x-i*p*m-s*d*x+s*p*g+c*d*m-c*h*g}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],d=t[3],h=t[4],p=t[5],g=t[6],m=t[7],x=t[8],y=x*h-p*m,S=p*g-x*d,E=m*d-h*g,A=i*y+s*S+c*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(c*m-x*s)*R,t[2]=(p*s-c*h)*R,t[3]=S*R,t[4]=(x*i-c*g)*R,t[5]=(c*d-p*i)*R,t[6]=E*R,t[7]=(s*g-m*i)*R,t[8]=(h*i-s*d)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,d,h,p){const g=Math.cos(d),m=Math.sin(d);return this.set(s*g,s*m,-s*(g*h+m*p)+h+t,-c*m,c*g,-c*(-m*h+g*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(af.makeScale(t,i)),this}rotate(t){return this.premultiply(af.makeRotation(-t)),this}translate(t,i){return this.premultiply(af.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const af=new lt;function Mx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ic(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function eS(){const o=Ic("canvas");return o.style.display="block",o}const _v={};function Bl(o){o in _v||(_v[o]=!0,console.warn(o))}function tS(o,t,i){return new Promise(function(s,c){function d(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(d,i);break;default:s()}}setTimeout(d,i)})}const yv=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sv=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ll={[Fa]:{transfer:jc,primaries:Oc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Ei]:{transfer:Bt,primaries:Oc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Fc]:{transfer:jc,primaries:Pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(Sv),fromReference:o=>o.applyMatrix3(yv)},[vh]:{transfer:Bt,primaries:Pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(Sv),fromReference:o=>o.applyMatrix3(yv).convertLinearToSRGB()}},nS=new Set([Fa,Fc]),bt={enabled:!0,_workingColorSpace:Fa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!nS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const s=Ll[t].toReference,c=Ll[i].fromReference;return c(s(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Ll[o].primaries},getTransfer:function(o){return o===Pa?jc:Ll[o].transfer},getLuminanceCoefficients:function(o,t=this._workingColorSpace){return o.fromArray(Ll[t].luminanceCoefficients)}};function Rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function sf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ur;class iS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ur===void 0&&(ur=Ic("canvas")),ur.width=t.width,ur.height=t.height;const s=ur.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ur}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ic("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),d=c.data;for(let h=0;h<d.length;h++)d[h]=Rr(d[h]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Rr(i[s]/255)*255):i[s]=Rr(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aS=0;class Ex{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Gl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let d;if(Array.isArray(c)){d=[];for(let h=0,p=c.length;h<p;h++)c[h].isDataTexture?d.push(rf(c[h].image)):d.push(rf(c[h]))}else d=rf(c);s.url=d}return i||(t.images[this.uuid]=s),s}}function rf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sS=0;class zn extends Or{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Es,c=Es,d=mi,h=bs,p=gi,g=$i,m=zn.DEFAULT_ANISOTROPY,x=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Gl(),this.name="",this.source=new Ex(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=d,this.minFilter=h,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ux)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lf:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case jf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lf:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case jf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=ux;zn.DEFAULT_ANISOTROPY=1;class fn{constructor(t=0,i=0,s=0,c=1){fn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,d=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*c+h[12]*d,this.y=h[1]*i+h[5]*s+h[9]*c+h[13]*d,this.z=h[2]*i+h[6]*s+h[10]*c+h[14]*d,this.w=h[3]*i+h[7]*s+h[11]*c+h[15]*d,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,d;const g=t.elements,m=g[0],x=g[4],y=g[8],S=g[1],E=g[5],A=g[9],R=g[2],M=g[6],_=g[10];if(Math.abs(x-S)<.01&&Math.abs(y-R)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+S)<.1&&Math.abs(y+R)<.1&&Math.abs(A+M)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,P=(E+1)/2,ie=(_+1)/2,H=(x+S)/4,O=(y+R)/4,J=(A+M)/4;return C>P&&C>ie?C<.01?(s=0,c=.707106781,d=.707106781):(s=Math.sqrt(C),c=H/s,d=O/s):P>ie?P<.01?(s=.707106781,c=0,d=.707106781):(c=Math.sqrt(P),s=H/c,d=J/c):ie<.01?(s=.707106781,c=.707106781,d=0):(d=Math.sqrt(ie),s=O/d,c=J/d),this.set(s,c,d,i),this}let I=Math.sqrt((M-A)*(M-A)+(y-R)*(y-R)+(S-x)*(S-x));return Math.abs(I)<.001&&(I=1),this.x=(M-A)/I,this.y=(y-R)/I,this.z=(S-x)/I,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rS extends Or{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new fn(0,0,t,i),this.scissorTest=!1,this.viewport=new fn(0,0,t,i);const c={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const d=new zn(c,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);d.flipY=!1,d.generateMipmaps=s.generateMipmaps,d.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let p=0;p<h;p++)this.textures[p]=d.clone(),this.textures[p].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,d=this.textures.length;c<d;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,c=t.textures.length;s<c;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Ex(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends rS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class bx extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=ai,this.minFilter=ai,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lS extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=ai,this.minFilter=ai,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,d,h,p){let g=s[c+0],m=s[c+1],x=s[c+2],y=s[c+3];const S=d[h+0],E=d[h+1],A=d[h+2],R=d[h+3];if(p===0){t[i+0]=g,t[i+1]=m,t[i+2]=x,t[i+3]=y;return}if(p===1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=R;return}if(y!==R||g!==S||m!==E||x!==A){let M=1-p;const _=g*S+m*E+x*A+y*R,I=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const ie=Math.sqrt(C),H=Math.atan2(ie,_*I);M=Math.sin(M*H)/ie,p=Math.sin(p*H)/ie}const P=p*I;if(g=g*M+S*P,m=m*M+E*P,x=x*M+A*P,y=y*M+R*P,M===1-p){const ie=1/Math.sqrt(g*g+m*m+x*x+y*y);g*=ie,m*=ie,x*=ie,y*=ie}}t[i]=g,t[i+1]=m,t[i+2]=x,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,c,d,h){const p=s[c],g=s[c+1],m=s[c+2],x=s[c+3],y=d[h],S=d[h+1],E=d[h+2],A=d[h+3];return t[i]=p*A+x*y+g*E-m*S,t[i+1]=g*A+x*S+m*y-p*E,t[i+2]=m*A+x*E+p*S-g*y,t[i+3]=x*A-p*y-g*S-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,d=t._z,h=t._order,p=Math.cos,g=Math.sin,m=p(s/2),x=p(c/2),y=p(d/2),S=g(s/2),E=g(c/2),A=g(d/2);switch(h){case"XYZ":this._x=S*x*y+m*E*A,this._y=m*E*y-S*x*A,this._z=m*x*A+S*E*y,this._w=m*x*y-S*E*A;break;case"YXZ":this._x=S*x*y+m*E*A,this._y=m*E*y-S*x*A,this._z=m*x*A-S*E*y,this._w=m*x*y+S*E*A;break;case"ZXY":this._x=S*x*y-m*E*A,this._y=m*E*y+S*x*A,this._z=m*x*A+S*E*y,this._w=m*x*y-S*E*A;break;case"ZYX":this._x=S*x*y-m*E*A,this._y=m*E*y+S*x*A,this._z=m*x*A-S*E*y,this._w=m*x*y+S*E*A;break;case"YZX":this._x=S*x*y+m*E*A,this._y=m*E*y+S*x*A,this._z=m*x*A-S*E*y,this._w=m*x*y-S*E*A;break;case"XZY":this._x=S*x*y-m*E*A,this._y=m*E*y-S*x*A,this._z=m*x*A+S*E*y,this._w=m*x*y+S*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],d=i[8],h=i[1],p=i[5],g=i[9],m=i[2],x=i[6],y=i[10],S=s+p+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-g)*E,this._y=(d-m)*E,this._z=(h-c)*E}else if(s>p&&s>y){const E=2*Math.sqrt(1+s-p-y);this._w=(x-g)/E,this._x=.25*E,this._y=(c+h)/E,this._z=(d+m)/E}else if(p>y){const E=2*Math.sqrt(1+p-s-y);this._w=(d-m)/E,this._x=(c+h)/E,this._y=.25*E,this._z=(g+x)/E}else{const E=2*Math.sqrt(1+y-s-p);this._w=(h-c)/E,this._x=(d+m)/E,this._y=(g+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(On(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,d=t._z,h=t._w,p=i._x,g=i._y,m=i._z,x=i._w;return this._x=s*x+h*p+c*m-d*g,this._y=c*x+h*g+d*p-s*m,this._z=d*x+h*m+s*g-c*p,this._w=h*x-s*p-c*g-d*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,c=this._y,d=this._z,h=this._w;let p=h*t._w+s*t._x+c*t._y+d*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=h,this._x=s,this._y=c,this._z=d,this;const g=1-p*p;if(g<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*c+i*this._y,this._z=E*d+i*this._z,this.normalize(),this}const m=Math.sqrt(g),x=Math.atan2(m,p),y=Math.sin((1-i)*x)/m,S=Math.sin(i*x)/m;return this._w=h*y+this._w*S,this._x=s*y+this._x*S,this._y=c*y+this._y*S,this._z=d*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),d=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),d*Math.sin(i),d*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Mv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Mv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,d=t.elements;return this.x=d[0]*i+d[3]*s+d[6]*c,this.y=d[1]*i+d[4]*s+d[7]*c,this.z=d[2]*i+d[5]*s+d[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,d=t.elements,h=1/(d[3]*i+d[7]*s+d[11]*c+d[15]);return this.x=(d[0]*i+d[4]*s+d[8]*c+d[12])*h,this.y=(d[1]*i+d[5]*s+d[9]*c+d[13])*h,this.z=(d[2]*i+d[6]*s+d[10]*c+d[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,d=t.x,h=t.y,p=t.z,g=t.w,m=2*(h*c-p*s),x=2*(p*i-d*c),y=2*(d*s-h*i);return this.x=i+g*m+h*y-p*x,this.y=s+g*x+p*m-d*y,this.z=c+g*y+d*x-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c,this.y=d[1]*i+d[5]*s+d[9]*c,this.z=d[2]*i+d[6]*s+d[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,d=t.z,h=i.x,p=i.y,g=i.z;return this.x=c*g-d*p,this.y=d*h-s*g,this.z=s*p-c*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lf.copy(this).projectOnVector(t),this.sub(lf)}reflect(t){return this.sub(lf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(On(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lf=new re,Mv=new Vl;class kl{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const d=s.getAttribute("position");if(i===!0&&d!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=d.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(d,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const c=t.children;for(let d=0,h=c.length;d<h;d++)this.expandByObject(c[d],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jl),rc.subVectors(this.max,jl),dr.subVectors(t.a,jl),fr.subVectors(t.b,jl),hr.subVectors(t.c,jl),Ca.subVectors(fr,dr),Da.subVectors(hr,fr),ss.subVectors(dr,hr);let i=[0,-Ca.z,Ca.y,0,-Da.z,Da.y,0,-ss.z,ss.y,Ca.z,0,-Ca.x,Da.z,0,-Da.x,ss.z,0,-ss.x,-Ca.y,Ca.x,0,-Da.y,Da.x,0,-ss.y,ss.x,0];return!of(i,dr,fr,hr,rc)||(i=[1,0,0,0,1,0,0,0,1],!of(i,dr,fr,hr,rc))?!1:(lc.crossVectors(Ca,Da),i=[lc.x,lc.y,lc.z],of(i,dr,fr,hr,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xi=[new re,new re,new re,new re,new re,new re,new re,new re],di=new re,sc=new kl,dr=new re,fr=new re,hr=new re,Ca=new re,Da=new re,ss=new re,jl=new re,rc=new re,lc=new re,rs=new re;function of(o,t,i,s,c){for(let d=0,h=o.length-3;d<=h;d+=3){rs.fromArray(o,d);const p=c.x*Math.abs(rs.x)+c.y*Math.abs(rs.y)+c.z*Math.abs(rs.z),g=t.dot(rs),m=i.dot(rs),x=s.dot(rs);if(Math.max(-Math.max(g,m,x),Math.min(g,m,x))>p)return!1}return!0}const oS=new kl,Ol=new re,cf=new re;class xh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):oS.setFromPoints(t).getCenter(s);let c=0;for(let d=0,h=t.length;d<h;d++)c=Math.max(c,s.distanceToSquared(t[d]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ol.subVectors(t,this.center);const i=Ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(Ol,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ol.copy(t.center).add(cf)),this.expandByPoint(Ol.copy(t.center).sub(cf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new re,uf=new re,oc=new re,Ua=new re,df=new re,cc=new re,ff=new re;class cS{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Wi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,i),Wi.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){uf.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(uf);const d=t.distanceTo(i)*.5,h=-this.direction.dot(oc),p=Ua.dot(this.direction),g=-Ua.dot(oc),m=Ua.lengthSq(),x=Math.abs(1-h*h);let y,S,E,A;if(x>0)if(y=h*g-p,S=h*p-g,A=d*x,y>=0)if(S>=-A)if(S<=A){const R=1/x;y*=R,S*=R,E=y*(y+h*S+2*p)+S*(h*y+S+2*g)+m}else S=d,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;else S=-d,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;else S<=-A?(y=Math.max(0,-(-h*d+p)),S=y>0?-d:Math.min(Math.max(-d,-g),d),E=-y*y+S*(S+2*g)+m):S<=A?(y=0,S=Math.min(Math.max(-d,-g),d),E=S*(S+2*g)+m):(y=Math.max(0,-(h*d+p)),S=y>0?d:Math.min(Math.max(-d,-g),d),E=-y*y+S*(S+2*g)+m);else S=h>0?-d:d,y=Math.max(0,-(h*S+p)),E=-y*y+S*(S+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),c&&c.copy(uf).addScaledVector(oc,S),E}intersectSphere(t,i){Wi.subVectors(t.center,this.origin);const s=Wi.dot(this.direction),c=Wi.dot(Wi)-s*s,d=t.radius*t.radius;if(c>d)return null;const h=Math.sqrt(d-c),p=s-h,g=s+h;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,d,h,p,g;const m=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(s=(t.min.x-S.x)*m,c=(t.max.x-S.x)*m):(s=(t.max.x-S.x)*m,c=(t.min.x-S.x)*m),x>=0?(d=(t.min.y-S.y)*x,h=(t.max.y-S.y)*x):(d=(t.max.y-S.y)*x,h=(t.min.y-S.y)*x),s>h||d>c||((d>s||isNaN(s))&&(s=d),(h<c||isNaN(c))&&(c=h),y>=0?(p=(t.min.z-S.z)*y,g=(t.max.z-S.z)*y):(p=(t.max.z-S.z)*y,g=(t.min.z-S.z)*y),s>g||p>c)||((p>s||s!==s)&&(s=p),(g<c||c!==c)&&(c=g),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,i,s,c,d){df.subVectors(i,t),cc.subVectors(s,t),ff.crossVectors(df,cc);let h=this.direction.dot(ff),p;if(h>0){if(c)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Ua.subVectors(this.origin,t);const g=p*this.direction.dot(cc.crossVectors(Ua,cc));if(g<0)return null;const m=p*this.direction.dot(df.cross(Ua));if(m<0||g+m>h)return null;const x=-p*Ua.dot(ff);return x<0?null:this.at(x/h,d)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,s,c,d,h,p,g,m,x,y,S,E,A,R,M){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,d,h,p,g,m,x,y,S,E,A,R,M)}set(t,i,s,c,d,h,p,g,m,x,y,S,E,A,R,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=c,_[1]=d,_[5]=h,_[9]=p,_[13]=g,_[2]=m,_[6]=x,_[10]=y,_[14]=S,_[3]=E,_[7]=A,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,c=1/pr.setFromMatrixColumn(t,0).length(),d=1/pr.setFromMatrixColumn(t,1).length(),h=1/pr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*d,i[5]=s[5]*d,i[6]=s[6]*d,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,d=t.z,h=Math.cos(s),p=Math.sin(s),g=Math.cos(c),m=Math.sin(c),x=Math.cos(d),y=Math.sin(d);if(t.order==="XYZ"){const S=h*x,E=h*y,A=p*x,R=p*y;i[0]=g*x,i[4]=-g*y,i[8]=m,i[1]=E+A*m,i[5]=S-R*m,i[9]=-p*g,i[2]=R-S*m,i[6]=A+E*m,i[10]=h*g}else if(t.order==="YXZ"){const S=g*x,E=g*y,A=m*x,R=m*y;i[0]=S+R*p,i[4]=A*p-E,i[8]=h*m,i[1]=h*y,i[5]=h*x,i[9]=-p,i[2]=E*p-A,i[6]=R+S*p,i[10]=h*g}else if(t.order==="ZXY"){const S=g*x,E=g*y,A=m*x,R=m*y;i[0]=S-R*p,i[4]=-h*y,i[8]=A+E*p,i[1]=E+A*p,i[5]=h*x,i[9]=R-S*p,i[2]=-h*m,i[6]=p,i[10]=h*g}else if(t.order==="ZYX"){const S=h*x,E=h*y,A=p*x,R=p*y;i[0]=g*x,i[4]=A*m-E,i[8]=S*m+R,i[1]=g*y,i[5]=R*m+S,i[9]=E*m-A,i[2]=-m,i[6]=p*g,i[10]=h*g}else if(t.order==="YZX"){const S=h*g,E=h*m,A=p*g,R=p*m;i[0]=g*x,i[4]=R-S*y,i[8]=A*y+E,i[1]=y,i[5]=h*x,i[9]=-p*x,i[2]=-m*x,i[6]=E*y+A,i[10]=S-R*y}else if(t.order==="XZY"){const S=h*g,E=h*m,A=p*g,R=p*m;i[0]=g*x,i[4]=-y,i[8]=m*x,i[1]=S*y+R,i[5]=h*x,i[9]=E*y-A,i[2]=A*y-E,i[6]=p*x,i[10]=R*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uS,t,dS)}lookAt(t,i,s){const c=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),La.crossVectors(s,Wn),La.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),La.crossVectors(s,Wn)),La.normalize(),uc.crossVectors(Wn,La),c[0]=La.x,c[4]=uc.x,c[8]=Wn.x,c[1]=La.y,c[5]=uc.y,c[9]=Wn.y,c[2]=La.z,c[6]=uc.z,c[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,d=this.elements,h=s[0],p=s[4],g=s[8],m=s[12],x=s[1],y=s[5],S=s[9],E=s[13],A=s[2],R=s[6],M=s[10],_=s[14],I=s[3],C=s[7],P=s[11],ie=s[15],H=c[0],O=c[4],J=c[8],D=c[12],w=c[1],G=c[5],ce=c[9],le=c[13],me=c[2],fe=c[6],L=c[10],W=c[14],Z=c[3],Me=c[7],be=c[11],U=c[15];return d[0]=h*H+p*w+g*me+m*Z,d[4]=h*O+p*G+g*fe+m*Me,d[8]=h*J+p*ce+g*L+m*be,d[12]=h*D+p*le+g*W+m*U,d[1]=x*H+y*w+S*me+E*Z,d[5]=x*O+y*G+S*fe+E*Me,d[9]=x*J+y*ce+S*L+E*be,d[13]=x*D+y*le+S*W+E*U,d[2]=A*H+R*w+M*me+_*Z,d[6]=A*O+R*G+M*fe+_*Me,d[10]=A*J+R*ce+M*L+_*be,d[14]=A*D+R*le+M*W+_*U,d[3]=I*H+C*w+P*me+ie*Z,d[7]=I*O+C*G+P*fe+ie*Me,d[11]=I*J+C*ce+P*L+ie*be,d[15]=I*D+C*le+P*W+ie*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],d=t[12],h=t[1],p=t[5],g=t[9],m=t[13],x=t[2],y=t[6],S=t[10],E=t[14],A=t[3],R=t[7],M=t[11],_=t[15];return A*(+d*g*y-c*m*y-d*p*S+s*m*S+c*p*E-s*g*E)+R*(+i*g*E-i*m*S+d*h*S-c*h*E+c*m*x-d*g*x)+M*(+i*m*y-i*p*E-d*h*y+s*h*E+d*p*x-s*m*x)+_*(-c*p*x-i*g*y+i*p*S+c*h*y-s*h*S+s*g*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],d=t[3],h=t[4],p=t[5],g=t[6],m=t[7],x=t[8],y=t[9],S=t[10],E=t[11],A=t[12],R=t[13],M=t[14],_=t[15],I=y*M*m-R*S*m+R*g*E-p*M*E-y*g*_+p*S*_,C=A*S*m-x*M*m-A*g*E+h*M*E+x*g*_-h*S*_,P=x*R*m-A*y*m+A*p*E-h*R*E-x*p*_+h*y*_,ie=A*y*g-x*R*g-A*p*S+h*R*S+x*p*M-h*y*M,H=i*I+s*C+c*P+d*ie;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return t[0]=I*O,t[1]=(R*S*d-y*M*d-R*c*E+s*M*E+y*c*_-s*S*_)*O,t[2]=(p*M*d-R*g*d+R*c*m-s*M*m-p*c*_+s*g*_)*O,t[3]=(y*g*d-p*S*d-y*c*m+s*S*m+p*c*E-s*g*E)*O,t[4]=C*O,t[5]=(x*M*d-A*S*d+A*c*E-i*M*E-x*c*_+i*S*_)*O,t[6]=(A*g*d-h*M*d-A*c*m+i*M*m+h*c*_-i*g*_)*O,t[7]=(h*S*d-x*g*d+x*c*m-i*S*m-h*c*E+i*g*E)*O,t[8]=P*O,t[9]=(A*y*d-x*R*d-A*s*E+i*R*E+x*s*_-i*y*_)*O,t[10]=(h*R*d-A*p*d+A*s*m-i*R*m-h*s*_+i*p*_)*O,t[11]=(x*p*d-h*y*d-x*s*m+i*y*m+h*s*E-i*p*E)*O,t[12]=ie*O,t[13]=(x*R*c-A*y*c+A*s*S-i*R*S-x*s*M+i*y*M)*O,t[14]=(A*p*c-h*R*c-A*s*g+i*R*g+h*s*M-i*p*M)*O,t[15]=(h*y*c-x*p*c+x*s*g-i*y*g-h*s*S+i*p*S)*O,this}scale(t){const i=this.elements,s=t.x,c=t.y,d=t.z;return i[0]*=s,i[4]*=c,i[8]*=d,i[1]*=s,i[5]*=c,i[9]*=d,i[2]*=s,i[6]*=c,i[10]*=d,i[3]*=s,i[7]*=c,i[11]*=d,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),d=1-s,h=t.x,p=t.y,g=t.z,m=d*h,x=d*p;return this.set(m*h+s,m*p-c*g,m*g+c*p,0,m*p+c*g,x*p+s,x*g-c*h,0,m*g-c*p,x*g+c*h,d*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,d,h){return this.set(1,s,d,0,t,1,h,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,d=i._x,h=i._y,p=i._z,g=i._w,m=d+d,x=h+h,y=p+p,S=d*m,E=d*x,A=d*y,R=h*x,M=h*y,_=p*y,I=g*m,C=g*x,P=g*y,ie=s.x,H=s.y,O=s.z;return c[0]=(1-(R+_))*ie,c[1]=(E+P)*ie,c[2]=(A-C)*ie,c[3]=0,c[4]=(E-P)*H,c[5]=(1-(S+_))*H,c[6]=(M+I)*H,c[7]=0,c[8]=(A+C)*O,c[9]=(M-I)*O,c[10]=(1-(S+R))*O,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;let d=pr.set(c[0],c[1],c[2]).length();const h=pr.set(c[4],c[5],c[6]).length(),p=pr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(d=-d),t.x=c[12],t.y=c[13],t.z=c[14],fi.copy(this);const m=1/d,x=1/h,y=1/p;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=x,fi.elements[5]*=x,fi.elements[6]*=x,fi.elements[8]*=y,fi.elements[9]*=y,fi.elements[10]*=y,i.setFromRotationMatrix(fi),s.x=d,s.y=h,s.z=p,this}makePerspective(t,i,s,c,d,h,p=Ji){const g=this.elements,m=2*d/(i-t),x=2*d/(s-c),y=(i+t)/(i-t),S=(s+c)/(s-c);let E,A;if(p===Ji)E=-(h+d)/(h-d),A=-2*h*d/(h-d);else if(p===zc)E=-h/(h-d),A=-h*d/(h-d);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return g[0]=m,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=x,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=E,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,s,c,d,h,p=Ji){const g=this.elements,m=1/(i-t),x=1/(s-c),y=1/(h-d),S=(i+t)*m,E=(s+c)*x;let A,R;if(p===Ji)A=(h+d)*y,R=-2*y;else if(p===zc)A=d*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return g[0]=2*m,g[4]=0,g[8]=0,g[12]=-S,g[1]=0,g[5]=2*x,g[9]=0,g[13]=-E,g[2]=0,g[6]=0,g[10]=R,g[14]=-A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const pr=new re,fi=new ln,uS=new re(0,0,0),dS=new re(1,1,1),La=new re,uc=new re,Wn=new re,Ev=new ln,bv=new Vl;class ea{constructor(t=0,i=0,s=0,c=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,d=c[0],h=c[4],p=c[8],g=c[1],m=c[5],x=c[9],y=c[2],S=c[6],E=c[10];switch(i){case"XYZ":this._y=Math.asin(On(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,d)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-On(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-y,d),this._z=0);break;case"ZXY":this._x=Math.asin(On(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(g,d));break;case"ZYX":this._y=Math.asin(-On(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(g,d)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(On(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-y,d)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(p,d)):(this._x=Math.atan2(-x,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Ev.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ev,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return bv.setFromEuler(this),this.setFromQuaternion(bv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class Tx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fS=0;const Tv=new re,mr=new Vl,qi=new ln,dc=new re,Pl=new re,hS=new re,pS=new Vl,Av=new re(1,0,0),Nv=new re(0,1,0),wv=new re(0,0,1),Rv={type:"added"},mS={type:"removed"},gr={type:"childadded",child:null},hf={type:"childremoved",child:null};class Yn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new re,i=new ea,s=new Vl,c=new re(1,1,1);function d(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(d),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new ln},normalMatrix:{value:new lt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(Av,t)}rotateY(t){return this.rotateOnAxis(Nv,t)}rotateZ(t){return this.rotateOnAxis(wv,t)}translateOnAxis(t,i){return Tv.copy(t).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Av,t)}translateY(t){return this.translateOnAxis(Nv,t)}translateZ(t){return this.translateOnAxis(wv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?dc.copy(t):dc.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Pl,dc,this.up):qi.lookAt(dc,Pl,this.up),this.quaternion.setFromRotationMatrix(qi),c&&(qi.extractRotation(c.matrixWorld),mr.setFromRotationMatrix(qi),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rv),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mS),hf.child=t,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rv),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,t,hS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,pS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function d(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=d(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,x=g.length;m<x;m++){const y=g[m];d(t.shapes,y)}else d(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(d(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(d(t.materials,this.material[g]));c.material=p}else c.material=d(t.materials,this.material);if(this.children.length>0){c.children=[];for(let p=0;p<this.children.length;p++)c.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];c.animations.push(d(t.animations,g))}}if(i){const p=h(t.geometries),g=h(t.materials),m=h(t.textures),x=h(t.images),y=h(t.shapes),S=h(t.skeletons),E=h(t.animations),A=h(t.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=c,s;function h(p){const g=[];for(const m in p){const x=p[m];delete x.metadata,g.push(x)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}}Yn.DEFAULT_UP=new re(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new re,Yi=new re,pf=new re,Zi=new re,vr=new re,xr=new re,Cv=new re,mf=new re,gf=new re,vf=new re;class Ai{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),hi.subVectors(t,i),c.cross(hi);const d=c.lengthSq();return d>0?c.multiplyScalar(1/Math.sqrt(d)):c.set(0,0,0)}static getBarycoord(t,i,s,c,d){hi.subVectors(c,i),Yi.subVectors(s,i),pf.subVectors(t,i);const h=hi.dot(hi),p=hi.dot(Yi),g=hi.dot(pf),m=Yi.dot(Yi),x=Yi.dot(pf),y=h*m-p*p;if(y===0)return d.set(0,0,0),null;const S=1/y,E=(m*g-p*x)*S,A=(h*x-p*g)*S;return d.set(1-E-A,A,E)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,i,s,c,d,h,p,g){return this.getBarycoord(t,i,s,c,Zi)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(d,Zi.x),g.addScaledVector(h,Zi.y),g.addScaledVector(p,Zi.z),g)}static isFrontFacing(t,i,s,c){return hi.subVectors(s,i),Yi.subVectors(t,i),hi.cross(Yi).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,d){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,c,d)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,d=this.c;let h,p;vr.subVectors(c,s),xr.subVectors(d,s),mf.subVectors(t,s);const g=vr.dot(mf),m=xr.dot(mf);if(g<=0&&m<=0)return i.copy(s);gf.subVectors(t,c);const x=vr.dot(gf),y=xr.dot(gf);if(x>=0&&y<=x)return i.copy(c);const S=g*y-x*m;if(S<=0&&g>=0&&x<=0)return h=g/(g-x),i.copy(s).addScaledVector(vr,h);vf.subVectors(t,d);const E=vr.dot(vf),A=xr.dot(vf);if(A>=0&&E<=A)return i.copy(d);const R=E*m-g*A;if(R<=0&&m>=0&&A<=0)return p=m/(m-A),i.copy(s).addScaledVector(xr,p);const M=x*A-E*y;if(M<=0&&y-x>=0&&E-A>=0)return Cv.subVectors(d,c),p=(y-x)/(y-x+(E-A)),i.copy(c).addScaledVector(Cv,p);const _=1/(M+R+S);return h=R*_,p=S*_,i.copy(s).addScaledVector(vr,h).addScaledVector(xr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},fc={h:0,s:0,l:0};function xf(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Rt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,c=bt.workingColorSpace){return this.r=t,this.g=i,this.b=s,bt.toWorkingColorSpace(this,c),this}setHSL(t,i,s,c=bt.workingColorSpace){if(t=$y(t,1),i=On(i,0,1),s=On(s,0,1),i===0)this.r=this.g=this.b=s;else{const d=s<=.5?s*(1+i):s+i-s*i,h=2*s-d;this.r=xf(h,d,t+1/3),this.g=xf(h,d,t),this.b=xf(h,d,t-1/3)}return bt.toWorkingColorSpace(this,c),this}setStyle(t,i=Ei){function s(d){d!==void 0&&parseFloat(d)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let d;const h=c[1],p=c[2];switch(h){case"rgb":case"rgba":if(d=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(d[4]),this.setRGB(Math.min(255,parseInt(d[1],10))/255,Math.min(255,parseInt(d[2],10))/255,Math.min(255,parseInt(d[3],10))/255,i);if(d=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(d[4]),this.setRGB(Math.min(100,parseInt(d[1],10))/100,Math.min(100,parseInt(d[2],10))/100,Math.min(100,parseInt(d[3],10))/100,i);break;case"hsl":case"hsla":if(d=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(d[4]),this.setHSL(parseFloat(d[1])/360,parseFloat(d[2])/100,parseFloat(d[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const d=c[1],h=d.length;if(h===3)return this.setRGB(parseInt(d.charAt(0),16)/15,parseInt(d.charAt(1),16)/15,parseInt(d.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(d,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ei){const s=Ax[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}copyLinearToSRGB(t){return this.r=sf(t.r),this.g=sf(t.g),this.b=sf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return bt.fromWorkingColorSpace(bn.copy(this),t),Math.round(On(bn.r*255,0,255))*65536+Math.round(On(bn.g*255,0,255))*256+Math.round(On(bn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,c=bn.g,d=bn.b,h=Math.max(s,c,d),p=Math.min(s,c,d);let g,m;const x=(p+h)/2;if(p===h)g=0,m=0;else{const y=h-p;switch(m=x<=.5?y/(h+p):y/(2-h-p),h){case s:g=(c-d)/y+(c<d?6:0);break;case c:g=(d-s)/y+2;break;case d:g=(s-c)/y+4;break}g/=6}return t.h=g,t.s=m,t.l=x,t}getRGB(t,i=bt.workingColorSpace){return bt.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Ei){bt.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,c=bn.b;return t!==Ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(ja),this.setHSL(ja.h+t,ja.s+i,ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ja),t.getHSL(fc);const s=nf(ja.h,fc.h,i),c=nf(ja.s,fc.s,i),d=nf(ja.l,fc.l,i);return this.setHSL(s,c,d),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,d=t.elements;return this.r=d[0]*i+d[3]*s+d[6]*c,this.g=d[1]*i+d[4]*s+d[7]*c,this.b=d[2]*i+d[5]*s+d[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Rt;Rt.NAMES=Ax;let gS=0;class Xl extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Gl(),this.name="",this.type="Material",this.blending=Nr,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==Ba&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rf&&(s.blendSrc=this.blendSrc),this.blendDst!==Cf&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(d){const h=[];for(const p in d){const g=d[p];delete g.metadata,h.push(g)}return h}if(i){const d=c(t.textures),h=c(t.images);d.length>0&&(s.textures=d),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let d=0;d!==c;++d)s[d]=i[d].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Nx extends Xl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new re,hc=new Tt;class vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=vv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Bl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,d=this.itemSize;c<d;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ul(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ul(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ul(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ul(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ul(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,d){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),c=jn(c,this.array),d=jn(d,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=d,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vv&&(t.usage=this.usage),t}}class wx extends vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Rx extends vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ts extends vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let vS=0;const ii=new ln,_f=new Yn,_r=new re,qn=new kl,zl=new kl,dn=new re;class Ha extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Gl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mx(t)?Rx:wx)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const d=new lt().getNormalMatrix(t);s.applyNormalMatrix(d),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,i,s){return ii.makeTranslation(t,i,s),this.applyMatrix4(ii),this}scale(t,i,s){return ii.makeScale(t,i,s),this.applyMatrix4(ii),this}lookAt(t){return _f.lookAt(t),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=[];for(let s=0,c=t.length;s<c;s++){const d=t[s];i.push(d.x,d.y,d.z||0)}return this.setAttribute("position",new Ts(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const d=i[s];qn.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),i)for(let d=0,h=i.length;d<h;d++){const p=i[d];zl.setFromBufferAttribute(p),this.morphTargetsRelative?(dn.addVectors(qn.min,zl.min),qn.expandByPoint(dn),dn.addVectors(qn.max,zl.max),qn.expandByPoint(dn)):(qn.expandByPoint(zl.min),qn.expandByPoint(zl.max))}qn.getCenter(s);let c=0;for(let d=0,h=t.count;d<h;d++)dn.fromBufferAttribute(t,d),c=Math.max(c,s.distanceToSquared(dn));if(i)for(let d=0,h=i.length;d<h;d++){const p=i[d],g=this.morphTargetsRelative;for(let m=0,x=p.count;m<x;m++)dn.fromBufferAttribute(p,m),g&&(_r.fromBufferAttribute(t,m),dn.add(_r)),c=Math.max(c,s.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,d=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],g=[];for(let J=0;J<s.count;J++)p[J]=new re,g[J]=new re;const m=new re,x=new re,y=new re,S=new Tt,E=new Tt,A=new Tt,R=new re,M=new re;function _(J,D,w){m.fromBufferAttribute(s,J),x.fromBufferAttribute(s,D),y.fromBufferAttribute(s,w),S.fromBufferAttribute(d,J),E.fromBufferAttribute(d,D),A.fromBufferAttribute(d,w),x.sub(m),y.sub(m),E.sub(S),A.sub(S);const G=1/(E.x*A.y-A.x*E.y);isFinite(G)&&(R.copy(x).multiplyScalar(A.y).addScaledVector(y,-E.y).multiplyScalar(G),M.copy(y).multiplyScalar(E.x).addScaledVector(x,-A.x).multiplyScalar(G),p[J].add(R),p[D].add(R),p[w].add(R),g[J].add(M),g[D].add(M),g[w].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let J=0,D=I.length;J<D;++J){const w=I[J],G=w.start,ce=w.count;for(let le=G,me=G+ce;le<me;le+=3)_(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const C=new re,P=new re,ie=new re,H=new re;function O(J){ie.fromBufferAttribute(c,J),H.copy(ie);const D=p[J];C.copy(D),C.sub(ie.multiplyScalar(ie.dot(D))).normalize(),P.crossVectors(H,D);const G=P.dot(g[J])<0?-1:1;h.setXYZW(J,C.x,C.y,C.z,G)}for(let J=0,D=I.length;J<D;++J){const w=I[J],G=w.start,ce=w.count;for(let le=G,me=G+ce;le<me;le+=3)O(t.getX(le+0)),O(t.getX(le+1)),O(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const c=new re,d=new re,h=new re,p=new re,g=new re,m=new re,x=new re,y=new re;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),R=t.getX(S+1),M=t.getX(S+2);c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),x.subVectors(h,d),y.subVectors(c,d),x.cross(y),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,R),m.fromBufferAttribute(s,M),p.add(x),g.add(x),m.add(x),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(R,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)c.fromBufferAttribute(i,S+0),d.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,d),y.subVectors(c,d),x.cross(y),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)dn.fromBufferAttribute(t,i),dn.normalize(),t.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function t(p,g){const m=p.array,x=p.itemSize,y=p.normalized,S=new m.constructor(g.length*x);let E=0,A=0;for(let R=0,M=g.length;R<M;R++){p.isInterleavedBufferAttribute?E=g[R]*p.data.stride+p.offset:E=g[R]*x;for(let _=0;_<x;_++)S[A++]=m[E++]}return new vi(S,x,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ha,s=this.index.array,c=this.attributes;for(const p in c){const g=c[p],m=t(g,s);i.setAttribute(p,m)}const d=this.morphAttributes;for(const p in d){const g=[],m=d[p];for(let x=0,y=m.length;x<y;x++){const S=m[x],E=t(S,s);g.push(E)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,g=h.length;p<g;p++){const m=h[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];t.data.attributes[g]=m.toJSON(t.data)}const c={};let d=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],x=[];for(let y=0,S=m.length;y<S;y++){const E=m[y];x.push(E.toJSON(t.data))}x.length>0&&(c[g]=x,d=!0)}d&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const c=t.attributes;for(const m in c){const x=c[m];this.setAttribute(m,x.clone(i))}const d=t.morphAttributes;for(const m in d){const x=[],y=d[m];for(let S=0,E=y.length;S<E;S++)x.push(y[S].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,x=h.length;m<x;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new ln,ls=new cS,pc=new xh,Uv=new re,yr=new re,Sr=new re,Mr=new re,yf=new re,mc=new re,gc=new Tt,vc=new Tt,xc=new Tt,Lv=new re,jv=new re,Ov=new re,_c=new re,yc=new re;class Ni extends Yn{constructor(t=new Ha,i=new Nx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let d=0,h=c.length;d<h;d++){const p=c[d].name||String(d);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=d}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,d=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const p=this.morphTargetInfluences;if(d&&p){mc.set(0,0,0);for(let g=0,m=d.length;g<m;g++){const x=p[g],y=d[g];x!==0&&(yf.fromBufferAttribute(y,t),h?mc.addScaledVector(yf,x):mc.addScaledVector(yf.sub(i),x))}i.add(mc)}return i}raycast(t,i){const s=this.geometry,c=this.material,d=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(d),ls.copy(t.ray).recast(t.near),!(pc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(pc,Uv)===null||ls.origin.distanceToSquared(Uv)>(t.far-t.near)**2))&&(Dv.copy(d).invert(),ls.copy(t.ray).applyMatrix4(Dv),!(s.boundingBox!==null&&ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ls)))}_computeIntersections(t,i,s){let c;const d=this.geometry,h=this.material,p=d.index,g=d.attributes.position,m=d.attributes.uv,x=d.attributes.uv1,y=d.attributes.normal,S=d.groups,E=d.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const M=S[A],_=h[M.materialIndex],I=Math.max(M.start,E.start),C=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let P=I,ie=C;P<ie;P+=3){const H=p.getX(P),O=p.getX(P+1),J=p.getX(P+2);c=Sc(this,_,t,s,m,x,y,H,O,J),c&&(c.faceIndex=Math.floor(P/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let M=A,_=R;M<_;M+=3){const I=p.getX(M),C=p.getX(M+1),P=p.getX(M+2);c=Sc(this,h,t,s,m,x,y,I,C,P),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const M=S[A],_=h[M.materialIndex],I=Math.max(M.start,E.start),C=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let P=I,ie=C;P<ie;P+=3){const H=P,O=P+1,J=P+2;c=Sc(this,_,t,s,m,x,y,H,O,J),c&&(c.faceIndex=Math.floor(P/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,E.start),R=Math.min(g.count,E.start+E.count);for(let M=A,_=R;M<_;M+=3){const I=M,C=M+1,P=M+2;c=Sc(this,h,t,s,m,x,y,I,C,P),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}}}function xS(o,t,i,s,c,d,h,p){let g;if(t.side===Pn?g=s.intersectTriangle(h,d,c,!0,p):g=s.intersectTriangle(c,d,h,t.side===Ba,p),g===null)return null;yc.copy(p),yc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(yc);return m<i.near||m>i.far?null:{distance:m,point:yc.clone(),object:o}}function Sc(o,t,i,s,c,d,h,p,g,m){o.getVertexPosition(p,yr),o.getVertexPosition(g,Sr),o.getVertexPosition(m,Mr);const x=xS(o,t,i,s,yr,Sr,Mr,_c);if(x){c&&(gc.fromBufferAttribute(c,p),vc.fromBufferAttribute(c,g),xc.fromBufferAttribute(c,m),x.uv=Ai.getInterpolation(_c,yr,Sr,Mr,gc,vc,xc,new Tt)),d&&(gc.fromBufferAttribute(d,p),vc.fromBufferAttribute(d,g),xc.fromBufferAttribute(d,m),x.uv1=Ai.getInterpolation(_c,yr,Sr,Mr,gc,vc,xc,new Tt)),h&&(Lv.fromBufferAttribute(h,p),jv.fromBufferAttribute(h,g),Ov.fromBufferAttribute(h,m),x.normal=Ai.getInterpolation(_c,yr,Sr,Mr,Lv,jv,Ov,new re),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const y={a:p,b:g,c:m,normal:new re,materialIndex:0};Ai.getNormal(yr,Sr,Mr,y.normal),x.face=y}return x}class Wl extends Ha{constructor(t=1,i=1,s=1,c=1,d=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:d,depthSegments:h};const p=this;c=Math.floor(c),d=Math.floor(d),h=Math.floor(h);const g=[],m=[],x=[],y=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,h,d,0),A("z","y","x",1,-1,s,i,-t,h,d,1),A("x","z","y",1,1,t,s,i,c,h,2),A("x","z","y",1,-1,t,s,-i,c,h,3),A("x","y","z",1,-1,t,i,s,c,d,4),A("x","y","z",-1,-1,t,i,-s,c,d,5),this.setIndex(g),this.setAttribute("position",new Ts(m,3)),this.setAttribute("normal",new Ts(x,3)),this.setAttribute("uv",new Ts(y,2));function A(R,M,_,I,C,P,ie,H,O,J,D){const w=P/O,G=ie/J,ce=P/2,le=ie/2,me=H/2,fe=O+1,L=J+1;let W=0,Z=0;const Me=new re;for(let be=0;be<L;be++){const U=be*G-le;for(let ne=0;ne<fe;ne++){const xe=ne*w-ce;Me[R]=xe*I,Me[M]=U*C,Me[_]=me,m.push(Me.x,Me.y,Me.z),Me[R]=0,Me[M]=0,Me[_]=H>0?1:-1,x.push(Me.x,Me.y,Me.z),y.push(ne/O),y.push(1-be/J),W+=1}}for(let be=0;be<J;be++)for(let U=0;U<O;U++){const ne=S+U+fe*be,xe=S+U+fe*(be+1),q=S+(U+1)+fe*(be+1),oe=S+(U+1)+fe*be;g.push(ne,xe,oe),g.push(xe,q,oe),Z+=6}p.addGroup(E,Z,D),E+=Z,S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const c=o[i][s];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone():Array.isArray(c)?t[i][s]=c.slice():t[i][s]=c}}return t}function An(o){const t={};for(let i=0;i<o.length;i++){const s=jr(o[i]);for(const c in s)t[c]=s[c]}return t}function _S(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Cx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const yS={clone:jr,merge:An};var SS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends Xl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SS,this.fragmentShader=MS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=_S(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const h=this.uniforms[c].value;h&&h.isTexture?i.uniforms[c]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[c]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[c]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[c]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[c]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[c]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[c]={type:"m4",value:h.toArray()}:i.uniforms[c]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Dx extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ji}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new re,Pv=new Tt,zv=new Tt;class pi extends Dx{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,Pv,zv),i.subVectors(zv,Pv)}setViewOffset(t,i,s,c,d,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=d,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(tf*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,d=-.5*c;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,m=h.fullHeight;d+=h.offsetX*c/g,i-=h.offsetY*s/m,c*=h.width/g,s*=h.height/m}const p=this.filmOffset;p!==0&&(d+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(d,d+c,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,br=1;class ES extends Yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new pi(Er,br,t,i);c.layers=this.layers,this.add(c);const d=new pi(Er,br,t,i);d.layers=this.layers,this.add(d);const h=new pi(Er,br,t,i);h.layers=this.layers,this.add(h);const p=new pi(Er,br,t,i);p.layers=this.layers,this.add(p);const g=new pi(Er,br,t,i);g.layers=this.layers,this.add(g);const m=new pi(Er,br,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,d,h,p,g]=i;for(const m of i)this.remove(m);if(t===Ji)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),d.up.set(0,0,-1),d.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),d.up.set(0,0,1),d.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[d,h,p,g,m,x]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,c),t.render(i,d),t.setRenderTarget(s,1,c),t.render(i,h),t.setRenderTarget(s,2,c),t.render(i,p),t.setRenderTarget(s,3,c),t.render(i,g),t.setRenderTarget(s,4,c),t.render(i,m),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,c),t.render(i,x),t.setRenderTarget(y,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Ux extends zn{constructor(t,i,s,c,d,h,p,g,m,x){t=t!==void 0?t:[],i=i!==void 0?i:Cr,super(t,i,s,c,d,h,p,g,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bS extends Ns{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new Ux(c,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new Wl(5,5,5),d=new ta({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:za});d.uniforms.tEquirect.value=i;const h=new Ni(c,d),p=i.minFilter;return i.minFilter===bs&&(i.minFilter=mi),new ES(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,c){const d=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,c);t.setRenderTarget(d)}}const Sf=new re,TS=new re,AS=new lt;class _s{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=Sf.subVectors(s,i).cross(TS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Sf),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return d<0||d>1?null:i.copy(t.start).addScaledVector(s,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||AS.getNormalMatrix(t),c=this.coplanarPoint(Sf).applyMatrix4(t),d=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(d),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new xh,Mc=new re;class Lx{constructor(t=new _s,i=new _s,s=new _s,c=new _s,d=new _s,h=new _s){this.planes=[t,i,s,c,d,h]}set(t,i,s,c,d,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(c),p[4].copy(d),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ji){const s=this.planes,c=t.elements,d=c[0],h=c[1],p=c[2],g=c[3],m=c[4],x=c[5],y=c[6],S=c[7],E=c[8],A=c[9],R=c[10],M=c[11],_=c[12],I=c[13],C=c[14],P=c[15];if(s[0].setComponents(g-d,S-m,M-E,P-_).normalize(),s[1].setComponents(g+d,S+m,M+E,P+_).normalize(),s[2].setComponents(g+h,S+x,M+A,P+I).normalize(),s[3].setComponents(g-h,S-x,M-A,P-I).normalize(),s[4].setComponents(g-p,S-y,M-R,P-C).normalize(),i===Ji)s[5].setComponents(g+p,S+y,M+R,P+C).normalize();else if(i===zc)s[5].setComponents(p,y,R,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let d=0;d<6;d++)if(i[d].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(Mc.x=c.normal.x>0?t.max.x:t.min.x,Mc.y=c.normal.y>0?t.max.y:t.min.y,Mc.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jx(){let o=null,t=!1,i=null,s=null;function c(d,h){i(d,h),s=o.requestAnimationFrame(c)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(c),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(d){i=d},setContext:function(d){o=d}}}function NS(o){const t=new WeakMap;function i(p,g){const m=p.array,x=p.usage,y=m.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,m,x),p.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,g,m){const x=g.array,y=g._updateRange,S=g.updateRanges;if(o.bindBuffer(m,p),y.count===-1&&S.length===0&&o.bufferSubData(m,0,x),S.length!==0){for(let E=0,A=S.length;E<A;E++){const R=S[E];o.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}g.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(m,y.offset*x.BYTES_PER_ELEMENT,x,y.offset,y.count),y.count=-1),g.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function d(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(o.deleteBuffer(g.buffer),t.delete(p))}function h(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,p,g),m.version=p.version}}return{get:c,remove:d,update:h}}class Hc extends Ha{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const d=t/2,h=i/2,p=Math.floor(s),g=Math.floor(c),m=p+1,x=g+1,y=t/p,S=i/g,E=[],A=[],R=[],M=[];for(let _=0;_<x;_++){const I=_*S-h;for(let C=0;C<m;C++){const P=C*y-d;A.push(P,-I,0),R.push(0,0,1),M.push(C/p),M.push(1-_/g)}}for(let _=0;_<g;_++)for(let I=0;I<p;I++){const C=I+m*_,P=I+m*(_+1),ie=I+1+m*(_+1),H=I+1+m*_;E.push(C,P,H),E.push(P,ie,H)}this.setIndex(E),this.setAttribute("position",new Ts(A,3)),this.setAttribute("normal",new Ts(R,3)),this.setAttribute("uv",new Ts(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}var wS=`#ifdef USE_ALPHAHASH
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
#endif`,DS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PS=`#ifdef USE_BATCHING
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
#endif`,zS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HS=`#ifdef USE_IRIDESCENCE
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
#endif`,GS=`#ifdef USE_BUMPMAP
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
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QS=`#define PI 3.141592653589793
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
} // validated`,JS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$S=`vec3 transformedNormal = objectNormal;
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
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`
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
}`,rM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
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
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
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
#endif`,AM=`struct PhysicalMaterial {
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
}`,NM=`
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
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
#endif`,DM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zM=`#if defined( USE_POINTS_UV )
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
#endif`,IM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
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
#endif`,kM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
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
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fE=`float getShadowMask() {
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
}`,hE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pE=`#ifdef USE_SKINNING
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
#endif`,mE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,vE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SE=`#ifdef USE_TRANSMISSION
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
#endif`,ME=`#ifdef USE_TRANSMISSION
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`#include <common>
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
}`,jE=`#if DEPTH_PACKING == 3200
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
}`,OE=`#define DISTANCE
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
}`,PE=`#define DISTANCE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
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
}`,FE=`uniform vec3 diffuse;
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
}`,HE=`#include <common>
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
}`,GE=`uniform vec3 diffuse;
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
}`,VE=`#define LAMBERT
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
}`,kE=`#define LAMBERT
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
}`,XE=`#define MATCAP
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
}`,WE=`#define MATCAP
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
}`,qE=`#define NORMAL
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
}`,YE=`#define NORMAL
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
}`,ZE=`#define PHONG
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
}`,KE=`#define PHONG
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
}`,QE=`#define STANDARD
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
}`,JE=`#define STANDARD
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
}`,$E=`#define TOON
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
}`,eb=`#define TOON
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
}`,tb=`uniform float size;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,ab=`uniform vec3 color;
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
}`,sb=`uniform float rotation;
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
}`,rb=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:wS,alphahash_pars_fragment:RS,alphamap_fragment:CS,alphamap_pars_fragment:DS,alphatest_fragment:US,alphatest_pars_fragment:LS,aomap_fragment:jS,aomap_pars_fragment:OS,batching_pars_vertex:PS,batching_vertex:zS,begin_vertex:IS,beginnormal_vertex:BS,bsdfs:FS,iridescence_fragment:HS,bumpmap_pars_fragment:GS,clipping_planes_fragment:VS,clipping_planes_pars_fragment:kS,clipping_planes_pars_vertex:XS,clipping_planes_vertex:WS,color_fragment:qS,color_pars_fragment:YS,color_pars_vertex:ZS,color_vertex:KS,common:QS,cube_uv_reflection_fragment:JS,defaultnormal_vertex:$S,displacementmap_pars_vertex:eM,displacementmap_vertex:tM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:aM,colorspace_pars_fragment:sM,envmap_fragment:rM,envmap_common_pars_fragment:lM,envmap_pars_fragment:oM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:yM,envmap_vertex:uM,fog_vertex:dM,fog_pars_vertex:fM,fog_fragment:hM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:vM,lights_lambert_pars_fragment:xM,lights_pars_begin:_M,lights_toon_fragment:SM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:bM,lights_physical_fragment:TM,lights_physical_pars_fragment:AM,lights_fragment_begin:NM,lights_fragment_maps:wM,lights_fragment_end:RM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:DM,logdepthbuf_pars_vertex:UM,logdepthbuf_vertex:LM,map_fragment:jM,map_pars_fragment:OM,map_particle_fragment:PM,map_particle_pars_fragment:zM,metalnessmap_fragment:IM,metalnessmap_pars_fragment:BM,morphinstance_vertex:FM,morphcolor_vertex:HM,morphnormal_vertex:GM,morphtarget_pars_vertex:VM,morphtarget_vertex:kM,normal_fragment_begin:XM,normal_fragment_maps:WM,normal_pars_fragment:qM,normal_pars_vertex:YM,normal_vertex:ZM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:eE,opaque_fragment:tE,packing:nE,premultiplied_alpha_fragment:iE,project_vertex:aE,dithering_fragment:sE,dithering_pars_fragment:rE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:cE,shadowmap_pars_vertex:uE,shadowmap_vertex:dE,shadowmask_pars_fragment:fE,skinbase_vertex:hE,skinning_pars_vertex:pE,skinning_vertex:mE,skinnormal_vertex:gE,specularmap_fragment:vE,specularmap_pars_fragment:xE,tonemapping_fragment:_E,tonemapping_pars_fragment:yE,transmission_fragment:SE,transmission_pars_fragment:ME,uv_pars_fragment:EE,uv_pars_vertex:bE,uv_vertex:TE,worldpos_vertex:AE,background_vert:NE,background_frag:wE,backgroundCube_vert:RE,backgroundCube_frag:CE,cube_vert:DE,cube_frag:UE,depth_vert:LE,depth_frag:jE,distanceRGBA_vert:OE,distanceRGBA_frag:PE,equirect_vert:zE,equirect_frag:IE,linedashed_vert:BE,linedashed_frag:FE,meshbasic_vert:HE,meshbasic_frag:GE,meshlambert_vert:VE,meshlambert_frag:kE,meshmatcap_vert:XE,meshmatcap_frag:WE,meshnormal_vert:qE,meshnormal_frag:YE,meshphong_vert:ZE,meshphong_frag:KE,meshphysical_vert:QE,meshphysical_frag:JE,meshtoon_vert:$E,meshtoon_frag:eb,points_vert:tb,points_frag:nb,shadow_vert:ib,shadow_frag:ab,sprite_vert:sb,sprite_frag:rb},Ue={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},bi={basic:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:An([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:An([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:An([Ue.points,Ue.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:An([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:An([Ue.common,Ue.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:An([Ue.sprite,Ue.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:An([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:An([Ue.lights,Ue.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:An([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Ec={r:0,b:0,g:0},cs=new ea,lb=new ln;function ob(o,t,i,s,c,d,h){const p=new Rt(0);let g=d===!0?0:1,m,x,y=null,S=0,E=null;function A(I){let C=I.isScene===!0?I.background:null;return C&&C.isTexture&&(C=(I.backgroundBlurriness>0?i:t).get(C)),C}function R(I){let C=!1;const P=A(I);P===null?_(p,g):P&&P.isColor&&(_(P,1),C=!0);const ie=o.xr.getEnvironmentBlendMode();ie==="additive"?s.buffers.color.setClear(0,0,0,1,h):ie==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(I,C){const P=A(C);P&&(P.isCubeTexture||P.mapping===Bc)?(x===void 0&&(x=new Ni(new Wl(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:jr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(ie,H,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(x)),cs.copy(C.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),x.material.uniforms.envMap.value=P,x.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(lb.makeRotationFromEuler(cs)),x.material.toneMapped=bt.getTransfer(P.colorSpace)!==Bt,(y!==P||S!==P.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,y=P,S=P.version,E=o.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Ni(new Hc(2,2),new ta({name:"BackgroundMaterial",uniforms:jr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=bt.getTransfer(P.colorSpace)!==Bt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||S!==P.version||E!==o.toneMapping)&&(m.material.needsUpdate=!0,y=P,S=P.version,E=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,C){I.getRGB(Ec,Cx(o)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,C,h)}return{getClearColor:function(){return p},setClearColor:function(I,C=1){p.set(I),g=C,_(p,g)},getClearAlpha:function(){return g},setClearAlpha:function(I){g=I,_(p,g)},render:R,addToRenderList:M}}function cb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=S(null);let d=c,h=!1;function p(w,G,ce,le,me){let fe=!1;const L=y(le,ce,G);d!==L&&(d=L,m(d.object)),fe=E(w,le,ce,me),fe&&A(w,le,ce,me),me!==null&&t.update(me,o.ELEMENT_ARRAY_BUFFER),(fe||h)&&(h=!1,P(w,G,ce,le),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function g(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function y(w,G,ce){const le=ce.wireframe===!0;let me=s[w.id];me===void 0&&(me={},s[w.id]=me);let fe=me[G.id];fe===void 0&&(fe={},me[G.id]=fe);let L=fe[le];return L===void 0&&(L=S(g()),fe[le]=L),L}function S(w){const G=[],ce=[],le=[];for(let me=0;me<i;me++)G[me]=0,ce[me]=0,le[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ce,attributeDivisors:le,object:w,attributes:{},index:null}}function E(w,G,ce,le){const me=d.attributes,fe=G.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){const be=me[Z];let U=fe[Z];if(U===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),be===void 0||be.attribute!==U||U&&be.data!==U.data)return!0;L++}return d.attributesNum!==L||d.index!==le}function A(w,G,ce,le){const me={},fe=G.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){let be=fe[Z];be===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(be=w.instanceColor));const U={};U.attribute=be,be&&be.data&&(U.data=be.data),me[Z]=U,L++}d.attributes=me,d.attributesNum=L,d.index=le}function R(){const w=d.newAttributes;for(let G=0,ce=w.length;G<ce;G++)w[G]=0}function M(w){_(w,0)}function _(w,G){const ce=d.newAttributes,le=d.enabledAttributes,me=d.attributeDivisors;ce[w]=1,le[w]===0&&(o.enableVertexAttribArray(w),le[w]=1),me[w]!==G&&(o.vertexAttribDivisor(w,G),me[w]=G)}function I(){const w=d.newAttributes,G=d.enabledAttributes;for(let ce=0,le=G.length;ce<le;ce++)G[ce]!==w[ce]&&(o.disableVertexAttribArray(ce),G[ce]=0)}function C(w,G,ce,le,me,fe,L){L===!0?o.vertexAttribIPointer(w,G,ce,me,fe):o.vertexAttribPointer(w,G,ce,le,me,fe)}function P(w,G,ce,le){R();const me=le.attributes,fe=ce.getAttributes(),L=G.defaultAttributeValues;for(const W in fe){const Z=fe[W];if(Z.location>=0){let Me=me[W];if(Me===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const be=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const xe=ne.buffer,q=ne.type,oe=ne.bytesPerElement,ye=q===o.INT||q===o.UNSIGNED_INT||Me.gpuType===dh;if(Me.isInterleavedBufferAttribute){const Ee=Me.data,He=Ee.stride,Fe=Me.offset;if(Ee.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)_(Z.location+nt,Ee.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let nt=0;nt<Z.locationSize;nt++)M(Z.location+nt);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let nt=0;nt<Z.locationSize;nt++)C(Z.location+nt,U/Z.locationSize,q,be,He*oe,(Fe+U/Z.locationSize*nt)*oe,ye)}else{if(Me.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)_(Z.location+Ee,Me.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)M(Z.location+Ee);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let Ee=0;Ee<Z.locationSize;Ee++)C(Z.location+Ee,U/Z.locationSize,q,be,U*oe,U/Z.locationSize*Ee*oe,ye)}}else if(L!==void 0){const be=L[W];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(Z.location,be);break;case 3:o.vertexAttrib3fv(Z.location,be);break;case 4:o.vertexAttrib4fv(Z.location,be);break;default:o.vertexAttrib1fv(Z.location,be)}}}}I()}function ie(){J();for(const w in s){const G=s[w];for(const ce in G){const le=G[ce];for(const me in le)x(le[me].object),delete le[me];delete G[ce]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const ce in G){const le=G[ce];for(const me in le)x(le[me].object),delete le[me];delete G[ce]}delete s[w.id]}function O(w){for(const G in s){const ce=s[G];if(ce[w.id]===void 0)continue;const le=ce[w.id];for(const me in le)x(le[me].object),delete le[me];delete ce[w.id]}}function J(){D(),h=!0,d!==c&&(d=c,m(d.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:J,resetDefaultState:D,dispose:ie,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function ub(o,t,i){let s;function c(m){s=m}function d(m,x){o.drawArrays(s,m,x),i.update(x,s,1)}function h(m,x,y){y!==0&&(o.drawArraysInstanced(s,m,x,y),i.update(x,s,y))}function p(m,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,x,0,y);let E=0;for(let A=0;A<y;A++)E+=x[A];i.update(E,s,1)}function g(m,x,y,S){if(y===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<m.length;A++)h(m[A],x[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,m,0,x,0,S,0,y);let A=0;for(let R=0;R<y;R++)A+=x[R];for(let R=0;R<S.length;R++)i.update(A,s,S[R])}}this.setMode=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function db(o,t,i,s){let c;function d(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(H){return!(H!==gi&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const O=H===Hl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==$i&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Qi&&!O)}function g(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=g(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const y=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),R=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,ie=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:d,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:R,maxAttributes:M,maxVertexUniforms:_,maxVaryings:I,maxFragmentUniforms:C,vertexTextures:P,maxSamples:ie}}function fb(o){const t=this;let i=null,s=0,c=!1,d=!1;const h=new _s,p=new lt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||s!==0||c;return c=S,s=y.length,E},this.beginShadows=function(){d=!0,x(null)},this.endShadows=function(){d=!1},this.setGlobalState=function(y,S){i=x(y,S,0)},this.setState=function(y,S,E){const A=y.clippingPlanes,R=y.clipIntersection,M=y.clipShadows,_=o.get(y);if(!c||A===null||A.length===0||d&&!M)d?x(null):m();else{const I=d?0:s,C=I*4;let P=_.clippingState||null;g.value=P,P=x(A,S,C,E);for(let ie=0;ie!==C;++ie)P[ie]=i[ie];_.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(y,S,E,A){const R=y!==null?y.length:0;let M=null;if(R!==0){if(M=g.value,A!==!0||M===null){const _=E+R*4,I=S.matrixWorldInverse;p.getNormalMatrix(I),(M===null||M.length<_)&&(M=new Float32Array(_));for(let C=0,P=E;C!==R;++C,P+=4)h.copy(y[C]).applyMatrix4(I,p),h.normal.toArray(M,P),M[P+3]=h.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function hb(o){let t=new WeakMap;function i(h,p){return p===Df?h.mapping=Cr:p===Uf&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Df||p===Uf)if(t.has(h)){const g=t.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const m=new bS(g.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",c),i(m.texture,h.mapping)}else return null}}return h}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){t=new WeakMap}return{get:s,dispose:d}}class Ox extends Dx{constructor(t=-1,i=1,s=1,c=-1,d=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=d,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,d,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=d,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let d=s-t,h=s+t,p=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;d+=m*this.view.offsetX,h=d+m*this.view.width,p-=x*this.view.offsetY,g=p-x*this.view.height}this.projectionMatrix.makeOrthographic(d,h,p,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ar=4,Iv=[.125,.215,.35,.446,.526,.582],Ms=20,Mf=new Ox,Bv=new Rt;let Ef=null,bf=0,Tf=0,Af=!1;const ys=(1+Math.sqrt(5))/2,Tr=1/ys,Fv=[new re(-ys,Tr,0),new re(ys,Tr,0),new re(-Tr,0,ys),new re(Tr,0,ys),new re(0,ys,-Tr),new re(0,ys,Tr),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class Hv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,c=100){Ef=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,s,c,d),i>0&&this._blur(d,0,0,i),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ef,bf,Tf),this._renderer.xr.enabled=Af,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ef=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Hl,format:gi,colorSpace:Fa,depthBuffer:!1},c=Gv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(t,i,s);const{_lodMax:d}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pb(d)),this._blurMaterial=mb(d,t,i)}return c}_compileMaterial(t){const i=new Ni(this._lodPlanes[0],t);this._renderer.compile(i,Mf)}_sceneToCubeUV(t,i,s,c){const p=new pi(90,1,i,s),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(Bv),x.toneMapping=Ia,x.autoClear=!1;const E=new Nx({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),A=new Ni(new Wl,E);let R=!1;const M=t.background;M?M.isColor&&(E.color.copy(M),t.background=null,R=!0):(E.color.copy(Bv),R=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(p.up.set(0,g[_],0),p.lookAt(m[_],0,0)):I===1?(p.up.set(0,0,g[_]),p.lookAt(0,m[_],0)):(p.up.set(0,g[_],0),p.lookAt(0,0,m[_]));const C=this._cubeSize;bc(c,I*C,_>2?C:0,C,C),x.setRenderTarget(c),R&&x.render(A,p),x.render(t,p)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=S,x.autoClear=y,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===Cr||t.mapping===Dr;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vv());const d=c?this._cubemapMaterial:this._equirectMaterial,h=new Ni(this._lodPlanes[0],d),p=d.uniforms;p.envMap.value=t;const g=this._cubeSize;bc(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Mf)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodPlanes.length;for(let d=1;d<c;d++){const h=Math.sqrt(this._sigmas[d]*this._sigmas[d]-this._sigmas[d-1]*this._sigmas[d-1]),p=Fv[(c-d-1)%Fv.length];this._blur(t,d-1,d,h,p)}i.autoClear=s}_blur(t,i,s,c,d){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,c,"latitudinal",d),this._halfBlur(h,t,s,s,c,"longitudinal",d)}_halfBlur(t,i,s,c,d,h,p){const g=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,y=new Ni(this._lodPlanes[c],m),S=m.uniforms,E=this._sizeLods[s]-1,A=isFinite(d)?Math.PI/(2*E):2*Math.PI/(2*Ms-1),R=d/A,M=isFinite(d)?1+Math.floor(x*R):Ms;M>Ms&&console.warn(`sigmaRadians, ${d}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ms}`);const _=[];let I=0;for(let O=0;O<Ms;++O){const J=O/R,D=Math.exp(-J*J/2);_.push(D),O===0?I+=D:O<M&&(I+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/I;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",p&&(S.poleAxis.value=p);const{_lodMax:C}=this;S.dTheta.value=A,S.mipInt.value=C-s;const P=this._sizeLods[c],ie=3*P*(c>C-Ar?c-C+Ar:0),H=4*(this._cubeSize-P);bc(i,ie,H,3*P,2*P),g.setRenderTarget(i),g.render(y,Mf)}}function pb(o){const t=[],i=[],s=[];let c=o;const d=o-Ar+1+Iv.length;for(let h=0;h<d;h++){const p=Math.pow(2,c);i.push(p);let g=1/p;h>o-Ar?g=Iv[h-o+Ar-1]:h===0&&(g=0),s.push(g);const m=1/(p-2),x=-m,y=1+m,S=[x,x,y,x,y,y,x,x,y,y,x,y],E=6,A=6,R=3,M=2,_=1,I=new Float32Array(R*A*E),C=new Float32Array(M*A*E),P=new Float32Array(_*A*E);for(let H=0;H<E;H++){const O=H%3*2/3-1,J=H>2?0:-1,D=[O,J,0,O+2/3,J,0,O+2/3,J+1,0,O,J,0,O+2/3,J+1,0,O,J+1,0];I.set(D,R*A*H),C.set(S,M*A*H);const w=[H,H,H,H,H,H];P.set(w,_*A*H)}const ie=new Ha;ie.setAttribute("position",new vi(I,R)),ie.setAttribute("uv",new vi(C,M)),ie.setAttribute("faceIndex",new vi(P,_)),t.push(ie),c>Ar&&c--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Gv(o,t,i){const s=new Ns(o,t,i);return s.texture.mapping=Bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function bc(o,t,i,s,c){o.viewport.set(t,i,s,c),o.scissor.set(t,i,s,c)}function mb(o,t,i){const s=new Float32Array(Ms),c=new re(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:_h(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function Vv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function kv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function gb(o){let t=new WeakMap,i=null;function s(p){if(p&&p.isTexture){const g=p.mapping,m=g===Df||g===Uf,x=g===Cr||g===Dr;if(m||x){let y=t.get(p);const S=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new Hv(o)),y=m?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const E=p.image;return m&&E&&E.height>0||x&&E&&c(E)?(i===null&&(i=new Hv(o)),y=m?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",d),y.texture):null}}}return p}function c(p){let g=0;const m=6;for(let x=0;x<m;x++)p[x]!==void 0&&g++;return g===m}function d(p){const g=p.target;g.removeEventListener("dispose",d);const m=t.get(g);m!==void 0&&(t.delete(g),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function vb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let c;switch(s){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(s)}return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&Bl("THREE.WebGLRenderer: "+s+" extension not supported."),c}}}function xb(o,t,i,s){const c={},d=new WeakMap;function h(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);for(const A in S.morphAttributes){const R=S.morphAttributes[A];for(let M=0,_=R.length;M<_;M++)t.remove(R[M])}S.removeEventListener("dispose",h),delete c[S.id];const E=d.get(S);E&&(t.remove(E),d.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function p(y,S){return c[S.id]===!0||(S.addEventListener("dispose",h),c[S.id]=!0,i.memory.geometries++),S}function g(y){const S=y.attributes;for(const A in S)t.update(S[A],o.ARRAY_BUFFER);const E=y.morphAttributes;for(const A in E){const R=E[A];for(let M=0,_=R.length;M<_;M++)t.update(R[M],o.ARRAY_BUFFER)}}function m(y){const S=[],E=y.index,A=y.attributes.position;let R=0;if(E!==null){const I=E.array;R=E.version;for(let C=0,P=I.length;C<P;C+=3){const ie=I[C+0],H=I[C+1],O=I[C+2];S.push(ie,H,H,O,O,ie)}}else if(A!==void 0){const I=A.array;R=A.version;for(let C=0,P=I.length/3-1;C<P;C+=3){const ie=C+0,H=C+1,O=C+2;S.push(ie,H,H,O,O,ie)}}else return;const M=new(Mx(S)?Rx:wx)(S,1);M.version=R;const _=d.get(y);_&&t.remove(_),d.set(y,M)}function x(y){const S=d.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&m(y)}else m(y);return d.get(y)}return{get:p,update:g,getWireframeAttribute:x}}function _b(o,t,i){let s;function c(S){s=S}let d,h;function p(S){d=S.type,h=S.bytesPerElement}function g(S,E){o.drawElements(s,E,d,S*h),i.update(E,s,1)}function m(S,E,A){A!==0&&(o.drawElementsInstanced(s,E,d,S*h,A),i.update(E,s,A))}function x(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,d,S,0,A);let M=0;for(let _=0;_<A;_++)M+=E[_];i.update(M,s,1)}function y(S,E,A,R){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)m(S[_]/h,E[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,d,S,0,R,0,A);let _=0;for(let I=0;I<A;I++)_+=E[I];for(let I=0;I<R.length;I++)i.update(_,s,R[I])}}this.setMode=c,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=y}function yb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(d,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(d/3);break;case o.LINES:i.lines+=p*(d/2);break;case o.LINE_STRIP:i.lines+=p*(d-1);break;case o.LINE_LOOP:i.lines+=p*d;break;case o.POINTS:i.points+=p*d;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function Sb(o,t,i){const s=new WeakMap,c=new fn;function d(h,p,g){const m=h.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=x!==void 0?x.length:0;let S=s.get(p);if(S===void 0||S.count!==y){let w=function(){J.dispose(),s.delete(p),p.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const A=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],C=p.morphAttributes.color||[];let P=0;A===!0&&(P=1),R===!0&&(P=2),M===!0&&(P=3);let ie=p.attributes.position.count*P,H=1;ie>t.maxTextureSize&&(H=Math.ceil(ie/t.maxTextureSize),ie=t.maxTextureSize);const O=new Float32Array(ie*H*4*y),J=new bx(O,ie,H,y);J.type=Qi,J.needsUpdate=!0;const D=P*4;for(let G=0;G<y;G++){const ce=_[G],le=I[G],me=C[G],fe=ie*H*4*G;for(let L=0;L<ce.count;L++){const W=L*D;A===!0&&(c.fromBufferAttribute(ce,L),O[fe+W+0]=c.x,O[fe+W+1]=c.y,O[fe+W+2]=c.z,O[fe+W+3]=0),R===!0&&(c.fromBufferAttribute(le,L),O[fe+W+4]=c.x,O[fe+W+5]=c.y,O[fe+W+6]=c.z,O[fe+W+7]=0),M===!0&&(c.fromBufferAttribute(me,L),O[fe+W+8]=c.x,O[fe+W+9]=c.y,O[fe+W+10]=c.z,O[fe+W+11]=me.itemSize===4?c.w:1)}}S={count:y,texture:J,size:new Tt(ie,H)},s.set(p,S),p.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const R=p.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",R),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:d}}function Mb(o,t,i,s){let c=new WeakMap;function d(g){const m=s.render.frame,x=g.geometry,y=t.get(g,x);if(c.get(y)!==m&&(t.update(y),c.set(y,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),c.get(g)!==m&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),c.set(g,m))),g.isSkinnedMesh){const S=g.skeleton;c.get(S)!==m&&(S.update(),c.set(S,m))}return y}function h(){c=new WeakMap}function p(g){const m=g.target;m.removeEventListener("dispose",p),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:d,dispose:h}}class Px extends zn{constructor(t,i,s,c,d,h,p,g,m,x=wr){if(x!==wr&&x!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&x===wr&&(s=As),s===void 0&&x===Lr&&(s=Ur),super(null,c,d,h,p,g,x,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=p!==void 0?p:ai,this.minFilter=g!==void 0?g:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const zx=new zn,Xv=new Px(1,1),Ix=new bx,Bx=new lS,Fx=new Ux,Wv=[],qv=[],Yv=new Float32Array(16),Zv=new Float32Array(9),Kv=new Float32Array(4);function Pr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const c=t*i;let d=Wv[c];if(d===void 0&&(d=new Float32Array(c),Wv[c]=d),t!==0){s.toArray(d,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(d,p)}return d}function on(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Gc(o,t){let i=qv[t];i===void 0&&(i=new Int32Array(t),qv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Eb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2fv(this.addr,t),cn(i,t)}}function Tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(on(i,t))return;o.uniform3fv(this.addr,t),cn(i,t)}}function Ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4fv(this.addr,t),cn(i,t)}}function Nb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(on(i,s))return;Kv.set(s),o.uniformMatrix2fv(this.addr,!1,Kv),cn(i,s)}}function wb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(on(i,s))return;Zv.set(s),o.uniformMatrix3fv(this.addr,!1,Zv),cn(i,s)}}function Rb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(on(i,s))return;Yv.set(s),o.uniformMatrix4fv(this.addr,!1,Yv),cn(i,s)}}function Cb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2iv(this.addr,t),cn(i,t)}}function Ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3iv(this.addr,t),cn(i,t)}}function Lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4iv(this.addr,t),cn(i,t)}}function jb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2uiv(this.addr,t),cn(i,t)}}function Pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3uiv(this.addr,t),cn(i,t)}}function zb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4uiv(this.addr,t),cn(i,t)}}function Ib(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let d;this.type===o.SAMPLER_2D_SHADOW?(Xv.compareFunction=Sx,d=Xv):d=zx,i.setTexture2D(t||d,c)}function Bb(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||Bx,c)}function Fb(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||Fx,c)}function Hb(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||Ix,c)}function Gb(o){switch(o){case 5126:return Eb;case 35664:return bb;case 35665:return Tb;case 35666:return Ab;case 35674:return Nb;case 35675:return wb;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Db;case 35668:case 35672:return Ub;case 35669:case 35673:return Lb;case 5125:return jb;case 36294:return Ob;case 36295:return Pb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Hb}}function Vb(o,t){o.uniform1fv(this.addr,t)}function kb(o,t){const i=Pr(t,this.size,2);o.uniform2fv(this.addr,i)}function Xb(o,t){const i=Pr(t,this.size,3);o.uniform3fv(this.addr,i)}function Wb(o,t){const i=Pr(t,this.size,4);o.uniform4fv(this.addr,i)}function qb(o,t){const i=Pr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Yb(o,t){const i=Pr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Zb(o,t){const i=Pr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Kb(o,t){o.uniform1iv(this.addr,t)}function Qb(o,t){o.uniform2iv(this.addr,t)}function Jb(o,t){o.uniform3iv(this.addr,t)}function $b(o,t){o.uniform4iv(this.addr,t)}function eT(o,t){o.uniform1uiv(this.addr,t)}function tT(o,t){o.uniform2uiv(this.addr,t)}function nT(o,t){o.uniform3uiv(this.addr,t)}function iT(o,t){o.uniform4uiv(this.addr,t)}function aT(o,t,i){const s=this.cache,c=t.length,d=Gc(i,c);on(s,d)||(o.uniform1iv(this.addr,d),cn(s,d));for(let h=0;h!==c;++h)i.setTexture2D(t[h]||zx,d[h])}function sT(o,t,i){const s=this.cache,c=t.length,d=Gc(i,c);on(s,d)||(o.uniform1iv(this.addr,d),cn(s,d));for(let h=0;h!==c;++h)i.setTexture3D(t[h]||Bx,d[h])}function rT(o,t,i){const s=this.cache,c=t.length,d=Gc(i,c);on(s,d)||(o.uniform1iv(this.addr,d),cn(s,d));for(let h=0;h!==c;++h)i.setTextureCube(t[h]||Fx,d[h])}function lT(o,t,i){const s=this.cache,c=t.length,d=Gc(i,c);on(s,d)||(o.uniform1iv(this.addr,d),cn(s,d));for(let h=0;h!==c;++h)i.setTexture2DArray(t[h]||Ix,d[h])}function oT(o){switch(o){case 5126:return Vb;case 35664:return kb;case 35665:return Xb;case 35666:return Wb;case 35674:return qb;case 35675:return Yb;case 35676:return Zb;case 5124:case 35670:return Kb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return $b;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return lT}}class cT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Gb(i.type)}}class uT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oT(i.type)}}class dT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let d=0,h=c.length;d!==h;++d){const p=c[d];p.setValue(t,i[p.id],s)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function Qv(o,t){o.seq.push(t),o.map[t.id]=t}function fT(o,t,i){const s=o.name,c=s.length;for(Nf.lastIndex=0;;){const d=Nf.exec(s),h=Nf.lastIndex;let p=d[1];const g=d[2]==="]",m=d[3];if(g&&(p=p|0),m===void 0||m==="["&&h+2===c){Qv(i,m===void 0?new cT(p,o,t):new uT(p,o,t));break}else{let y=i.map[p];y===void 0&&(y=new dT(p),Qv(i,y)),i=y}}}class Uc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const d=t.getActiveUniform(i,c),h=t.getUniformLocation(i,d.name);fT(d,h,this)}}setValue(t,i,s,c){const d=this.map[i];d!==void 0&&d.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let d=0,h=i.length;d!==h;++d){const p=i[d],g=s[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,d=t.length;c!==d;++c){const h=t[c];h.id in i&&s.push(h)}return s}}function Jv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const hT=37297;let pT=0;function mT(o,t){const i=o.split(`
`),s=[],c=Math.max(t-6,0),d=Math.min(t+6,i.length);for(let h=c;h<d;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}function gT(o){const t=bt.getPrimaries(bt.workingColorSpace),i=bt.getPrimaries(o);let s;switch(t===i?s="":t===Pc&&i===Oc?s="LinearDisplayP3ToLinearSRGB":t===Oc&&i===Pc&&(s="LinearSRGBToLinearDisplayP3"),o){case Fa:case Fc:return[s,"LinearTransferOETF"];case Ei:case vh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function $v(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=o.getShaderInfoLog(t).trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+mT(o.getShaderSource(t),h)}else return c}function vT(o,t){const i=gT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function xT(o,t){let i;switch(t){case jy:i="Linear";break;case Oy:i="Reinhard";break;case Py:i="OptimizedCineon";break;case zy:i="ACESFilmic";break;case By:i="AgX";break;case Fy:i="Neutral";break;case Iy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new re;function _T(){bt.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),t=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function ST(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function MT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const d=o.getActiveAttrib(t,c),h=d.name;let p=1;d.type===o.FLOAT_MAT2&&(p=2),d.type===o.FLOAT_MAT3&&(p=3),d.type===o.FLOAT_MAT4&&(p=4),i[h]={type:d.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function Il(o){return o!==""}function ex(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(o){return o.replace(ET,TT)}const bT=new Map;function TT(o,t){let i=rt[t];if(i===void 0){const s=bT.get(t);if(s!==void 0)i=rt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return oh(i)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(o){return o.replace(AT,NT)}function NT(o,t,i,s){let c="";for(let d=parseInt(t);d<parseInt(i);d++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+d+" ]").replace(/UNROLLED_LOOP_INDEX/g,d);return c}function ix(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function wT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ox?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ry?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(t="SHADOWMAP_TYPE_VSM"),t}function RT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cr:case Dr:t="ENVMAP_TYPE_CUBE";break;case Bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function CT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Dr:t="ENVMAP_MODE_REFRACTION";break}return t}function DT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case cx:t="ENVMAP_BLENDING_MULTIPLY";break;case Uy:t="ENVMAP_BLENDING_MIX";break;case Ly:t="ENVMAP_BLENDING_ADD";break}return t}function UT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function LT(o,t,i,s){const c=o.getContext(),d=i.defines;let h=i.vertexShader,p=i.fragmentShader;const g=wT(i),m=RT(i),x=CT(i),y=DT(i),S=UT(i),E=yT(i),A=ST(d),R=c.createProgram();let M,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Il).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Il).join(`
`),_.length>0&&(_+=`
`)):(M=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),_=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?rt.tonemapping_pars_fragment:"",i.toneMapping!==Ia?xT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,vT("linearToOutputTexel",i.outputColorSpace),_T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Il).join(`
`)),h=oh(h),h=ex(h,i),h=tx(h,i),p=oh(p),p=ex(p,i),p=tx(p,i),h=nx(h),p=nx(p),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=I+M+h,P=I+_+p,ie=Jv(c,c.VERTEX_SHADER,C),H=Jv(c,c.FRAGMENT_SHADER,P);c.attachShader(R,ie),c.attachShader(R,H),i.index0AttributeName!==void 0?c.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&c.bindAttribLocation(R,0,"position"),c.linkProgram(R);function O(G){if(o.debug.checkShaderErrors){const ce=c.getProgramInfoLog(R).trim(),le=c.getShaderInfoLog(ie).trim(),me=c.getShaderInfoLog(H).trim();let fe=!0,L=!0;if(c.getProgramParameter(R,c.LINK_STATUS)===!1)if(fe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,R,ie,H);else{const W=$v(c,ie,"vertex"),Z=$v(c,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(R,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ce+`
`+W+`
`+Z)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(le===""||me==="")&&(L=!1);L&&(G.diagnostics={runnable:fe,programLog:ce,vertexShader:{log:le,prefix:M},fragmentShader:{log:me,prefix:_}})}c.deleteShader(ie),c.deleteShader(H),J=new Uc(c,R),D=MT(c,R)}let J;this.getUniforms=function(){return J===void 0&&O(this),J};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=c.getProgramParameter(R,hT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=ie,this.fragmentShader=H,this}let jT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,c=this._getShaderStage(i),d=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(d)===!1&&(h.add(d),d.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new PT(t),i.set(t,s)),s}}class PT{constructor(t){this.id=jT++,this.code=t,this.usedTimes=0}}function zT(o,t,i,s,c,d,h){const p=new Tx,g=new OT,m=new Set,x=[],y=c.logarithmicDepthBuffer,S=c.vertexTextures;let E=c.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,w,G,ce,le){const me=ce.fog,fe=le.geometry,L=D.isMeshStandardMaterial?ce.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||L),Z=W&&W.mapping===Bc?W.image.height:null,Me=A[D.type];D.precision!==null&&(E=c.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const be=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=be!==void 0?be.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let xe,q,oe,ye;if(Me){const xt=bi[Me];xe=xt.vertexShader,q=xt.fragmentShader}else xe=D.vertexShader,q=D.fragmentShader,g.update(D),oe=g.getVertexShaderID(D),ye=g.getFragmentShaderID(D);const Ee=o.getRenderTarget(),He=le.isInstancedMesh===!0,Fe=le.isBatchedMesh===!0,nt=!!D.map,Lt=!!D.matcap,B=!!W,Vt=!!D.aoMap,ut=!!D.lightMap,yt=!!D.bumpMap,Ge=!!D.normalMap,kt=!!D.displacementMap,$e=!!D.emissiveMap,et=!!D.metalnessMap,j=!!D.roughnessMap,T=D.anisotropy>0,ae=D.clearcoat>0,Se=D.dispersion>0,ve=D.iridescence>0,_e=D.sheen>0,We=D.transmission>0,De=T&&!!D.anisotropyMap,Le=ae&&!!D.clearcoatMap,it=ae&&!!D.clearcoatNormalMap,Ae=ae&&!!D.clearcoatRoughnessMap,je=ve&&!!D.iridescenceMap,ht=ve&&!!D.iridescenceThicknessMap,Ke=_e&&!!D.sheenColorMap,Re=_e&&!!D.sheenRoughnessMap,Ye=!!D.specularMap,Ze=!!D.specularColorMap,Pt=!!D.specularIntensityMap,V=We&&!!D.transmissionMap,Ne=We&&!!D.thicknessMap,he=!!D.gradientMap,ge=!!D.alphaMap,we=D.alphaTest>0,ke=!!D.alphaHash,ot=!!D.extensions;let Ot=Ia;D.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ot=o.toneMapping);const an={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:xe,fragmentShader:q,defines:D.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:Fe,batchingColor:Fe&&le._colorsTexture!==null,instancing:He,instancingColor:He&&le.instanceColor!==null,instancingMorph:He&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ee===null?o.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Fa,alphaToCoverage:!!D.alphaToCoverage,map:nt,matcap:Lt,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:Z,aoMap:Vt,lightMap:ut,bumpMap:yt,normalMap:Ge,displacementMap:S&&kt,emissiveMap:$e,normalMapObjectSpace:Ge&&D.normalMapType===Xy,normalMapTangentSpace:Ge&&D.normalMapType===ky,metalnessMap:et,roughnessMap:j,anisotropy:T,anisotropyMap:De,clearcoat:ae,clearcoatMap:Le,clearcoatNormalMap:it,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:ve,iridescenceMap:je,iridescenceThicknessMap:ht,sheen:_e,sheenColorMap:Ke,sheenRoughnessMap:Re,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:Pt,transmission:We,transmissionMap:V,thicknessMap:Ne,gradientMap:he,opaque:D.transparent===!1&&D.blending===Nr&&D.alphaToCoverage===!1,alphaMap:ge,alphaTest:we,alphaHash:ke,combine:D.combine,mapUv:nt&&R(D.map.channel),aoMapUv:Vt&&R(D.aoMap.channel),lightMapUv:ut&&R(D.lightMap.channel),bumpMapUv:yt&&R(D.bumpMap.channel),normalMapUv:Ge&&R(D.normalMap.channel),displacementMapUv:kt&&R(D.displacementMap.channel),emissiveMapUv:$e&&R(D.emissiveMap.channel),metalnessMapUv:et&&R(D.metalnessMap.channel),roughnessMapUv:j&&R(D.roughnessMap.channel),anisotropyMapUv:De&&R(D.anisotropyMap.channel),clearcoatMapUv:Le&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:it&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Re&&R(D.sheenRoughnessMap.channel),specularMapUv:Ye&&R(D.specularMap.channel),specularColorMapUv:Ze&&R(D.specularColorMap.channel),specularIntensityMapUv:Pt&&R(D.specularIntensityMap.channel),transmissionMapUv:V&&R(D.transmissionMap.channel),thicknessMapUv:Ne&&R(D.thicknessMap.channel),alphaMapUv:ge&&R(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ge||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!fe.attributes.uv&&(nt||ge),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:le.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ot,decodeVideoTexture:nt&&D.map.isVideoTexture===!0&&bt.getTransfer(D.map.colorSpace)===Bt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ti,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ot&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&D.extensions.multiDraw===!0||Fe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(I(w,D),C(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function I(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function C(D,w){p.disableAll(),w.supportsVertexTextures&&p.enable(0),w.instancing&&p.enable(1),w.instancingColor&&p.enable(2),w.instancingMorph&&p.enable(3),w.matcap&&p.enable(4),w.envMap&&p.enable(5),w.normalMapObjectSpace&&p.enable(6),w.normalMapTangentSpace&&p.enable(7),w.clearcoat&&p.enable(8),w.iridescence&&p.enable(9),w.alphaTest&&p.enable(10),w.vertexColors&&p.enable(11),w.vertexAlphas&&p.enable(12),w.vertexUv1s&&p.enable(13),w.vertexUv2s&&p.enable(14),w.vertexUv3s&&p.enable(15),w.vertexTangents&&p.enable(16),w.anisotropy&&p.enable(17),w.alphaHash&&p.enable(18),w.batching&&p.enable(19),w.dispersion&&p.enable(20),w.batchingColor&&p.enable(21),D.push(p.mask),p.disableAll(),w.fog&&p.enable(0),w.useFog&&p.enable(1),w.flatShading&&p.enable(2),w.logarithmicDepthBuffer&&p.enable(3),w.skinning&&p.enable(4),w.morphTargets&&p.enable(5),w.morphNormals&&p.enable(6),w.morphColors&&p.enable(7),w.premultipliedAlpha&&p.enable(8),w.shadowMapEnabled&&p.enable(9),w.doubleSided&&p.enable(10),w.flipSided&&p.enable(11),w.useDepthPacking&&p.enable(12),w.dithering&&p.enable(13),w.transmission&&p.enable(14),w.sheen&&p.enable(15),w.opaque&&p.enable(16),w.pointsUvs&&p.enable(17),w.decodeVideoTexture&&p.enable(18),w.alphaToCoverage&&p.enable(19),D.push(p.mask)}function P(D){const w=A[D.type];let G;if(w){const ce=bi[w];G=yS.clone(ce.uniforms)}else G=D.uniforms;return G}function ie(D,w){let G;for(let ce=0,le=x.length;ce<le;ce++){const me=x[ce];if(me.cacheKey===w){G=me,++G.usedTimes;break}}return G===void 0&&(G=new LT(o,w,D,d),x.push(G)),G}function H(D){if(--D.usedTimes===0){const w=x.indexOf(D);x[w]=x[x.length-1],x.pop(),D.destroy()}}function O(D){g.remove(D)}function J(){g.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:P,acquireProgram:ie,releaseProgram:H,releaseShaderCache:O,programs:x,dispose:J}}function IT(){let o=new WeakMap;function t(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function i(d){o.delete(d)}function s(d,h,p){o.get(d)[h]=p}function c(){o=new WeakMap}return{get:t,remove:i,update:s,dispose:c}}function BT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ax(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function sx(){const o=[];let t=0;const i=[],s=[],c=[];function d(){t=0,i.length=0,s.length=0,c.length=0}function h(y,S,E,A,R,M){let _=o[t];return _===void 0?(_={id:y.id,object:y,geometry:S,material:E,groupOrder:A,renderOrder:y.renderOrder,z:R,group:M},o[t]=_):(_.id=y.id,_.object=y,_.geometry=S,_.material=E,_.groupOrder=A,_.renderOrder=y.renderOrder,_.z=R,_.group=M),t++,_}function p(y,S,E,A,R,M){const _=h(y,S,E,A,R,M);E.transmission>0?s.push(_):E.transparent===!0?c.push(_):i.push(_)}function g(y,S,E,A,R,M){const _=h(y,S,E,A,R,M);E.transmission>0?s.unshift(_):E.transparent===!0?c.unshift(_):i.unshift(_)}function m(y,S){i.length>1&&i.sort(y||BT),s.length>1&&s.sort(S||ax),c.length>1&&c.sort(S||ax)}function x(){for(let y=t,S=o.length;y<S;y++){const E=o[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:c,init:d,push:p,unshift:g,finish:x,sort:m}}function FT(){let o=new WeakMap;function t(s,c){const d=o.get(s);let h;return d===void 0?(h=new sx,o.set(s,[h])):c>=d.length?(h=new sx,d.push(h)):h=d[c],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function HT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Rt};break;case"SpotLight":i={position:new re,direction:new re,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function GT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let VT=0;function kT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function XT(o){const t=new HT,i=GT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new re);const c=new re,d=new ln,h=new ln;function p(m){let x=0,y=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,A=0,R=0,M=0,_=0,I=0,C=0,P=0,ie=0,H=0,O=0;m.sort(kT);for(let D=0,w=m.length;D<w;D++){const G=m[D],ce=G.color,le=G.intensity,me=G.distance,fe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=ce.r*le,y+=ce.g*le,S+=ce.b*le;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],le);O++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.directionalShadow[E]=Z,s.directionalShadowMap[E]=fe,s.directionalShadowMatrix[E]=G.shadow.matrix,I++}s.directional[E]=L,E++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(ce).multiplyScalar(le),L.distance=me,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[R]=L;const W=G.shadow;if(G.map&&(s.spotLightMap[ie]=G.map,ie++,W.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[R]=W.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=fe,P++}R++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(ce).multiplyScalar(le),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=L,M++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const W=G.shadow,Z=i.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,s.pointShadow[A]=Z,s.pointShadowMap[A]=fe,s.pointShadowMatrix[A]=G.shadow.matrix,C++}s.point[A]=L,A++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar(le),L.groundColor.copy(G.groundColor).multiplyScalar(le),s.hemi[_]=L,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=y,s.ambient[2]=S;const J=s.hash;(J.directionalLength!==E||J.pointLength!==A||J.spotLength!==R||J.rectAreaLength!==M||J.hemiLength!==_||J.numDirectionalShadows!==I||J.numPointShadows!==C||J.numSpotShadows!==P||J.numSpotMaps!==ie||J.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=R,s.rectArea.length=M,s.point.length=A,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=P+ie-H,s.spotLightMap.length=ie,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=O,J.directionalLength=E,J.pointLength=A,J.spotLength=R,J.rectAreaLength=M,J.hemiLength=_,J.numDirectionalShadows=I,J.numPointShadows=C,J.numSpotShadows=P,J.numSpotMaps=ie,J.numLightProbes=O,s.version=VT++)}function g(m,x){let y=0,S=0,E=0,A=0,R=0;const M=x.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const C=m[_];if(C.isDirectionalLight){const P=s.directional[y];P.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(c),P.direction.transformDirection(M),y++}else if(C.isSpotLight){const P=s.spot[E];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(c),P.direction.transformDirection(M),E++}else if(C.isRectAreaLight){const P=s.rectArea[A];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),h.identity(),d.copy(C.matrixWorld),d.premultiply(M),h.extractRotation(d),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),A++}else if(C.isPointLight){const P=s.point[S];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),S++}else if(C.isHemisphereLight){const P=s.hemi[R];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(M),R++}}}return{setup:p,setupView:g,state:s}}function rx(o){const t=new XT(o),i=[],s=[];function c(x){m.camera=x,i.length=0,s.length=0}function d(x){i.push(x)}function h(x){s.push(x)}function p(){t.setup(i)}function g(x){t.setupView(i,x)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:c,state:m,setupLights:p,setupLightsView:g,pushLight:d,pushShadow:h}}function WT(o){let t=new WeakMap;function i(c,d=0){const h=t.get(c);let p;return h===void 0?(p=new rx(o),t.set(c,[p])):d>=h.length?(p=new rx(o),h.push(p)):p=h[d],p}function s(){t=new WeakMap}return{get:i,dispose:s}}class qT extends Xl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YT extends Xl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ZT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KT=`uniform sampler2D shadow_pass;
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
}`;function QT(o,t,i){let s=new Lx;const c=new Tt,d=new Tt,h=new fn,p=new qT({depthPacking:Vy}),g=new YT,m={},x=i.maxTextureSize,y={[Ba]:Pn,[Pn]:Ba,[Ti]:Ti},S=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:ZT,fragmentShader:KT}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ha;A.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ni(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let _=this.type;this.render=function(H,O,J){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(za),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const le=_!==Ki&&this.type===Ki,me=_===Ki&&this.type!==Ki;for(let fe=0,L=H.length;fe<L;fe++){const W=H[fe],Z=W.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;c.copy(Z.mapSize);const Me=Z.getFrameExtents();if(c.multiply(Me),d.copy(Z.mapSize),(c.x>x||c.y>x)&&(c.x>x&&(d.x=Math.floor(x/Me.x),c.x=d.x*Me.x,Z.mapSize.x=d.x),c.y>x&&(d.y=Math.floor(x/Me.y),c.y=d.y*Me.y,Z.mapSize.y=d.y)),Z.map===null||le===!0||me===!0){const U=this.type!==Ki?{minFilter:ai,magFilter:ai}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ns(c.x,c.y,U),Z.map.texture.name=W.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const be=Z.getViewportCount();for(let U=0;U<be;U++){const ne=Z.getViewport(U);h.set(d.x*ne.x,d.y*ne.y,d.x*ne.z,d.y*ne.w),ce.viewport(h),Z.updateMatrices(W,U),s=Z.getFrustum(),P(O,J,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===Ki&&I(Z,J),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,w,G)};function I(H,O){const J=t.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ns(c.x,c.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(O,null,J,S,R,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(O,null,J,E,R,null)}function C(H,O,J,D){let w=null;const G=J.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)w=G;else if(w=J.isPointLight===!0?g:p,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ce=w.uuid,le=O.uuid;let me=m[ce];me===void 0&&(me={},m[ce]=me);let fe=me[le];fe===void 0&&(fe=w.clone(),me[le]=fe,O.addEventListener("dispose",ie)),w=fe}if(w.visible=O.visible,w.wireframe=O.wireframe,D===Ki?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:y[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,J.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ce=o.properties.get(w);ce.light=J}return w}function P(H,O,J,D,w){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Ki)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,H.matrixWorld);const le=t.update(H),me=H.material;if(Array.isArray(me)){const fe=le.groups;for(let L=0,W=fe.length;L<W;L++){const Z=fe[L],Me=me[Z.materialIndex];if(Me&&Me.visible){const be=C(H,Me,D,w);H.onBeforeShadow(o,H,O,J,le,be,Z),o.renderBufferDirect(J,null,le,be,H,Z),H.onAfterShadow(o,H,O,J,le,be,Z)}}}else if(me.visible){const fe=C(H,me,D,w);H.onBeforeShadow(o,H,O,J,le,fe,null),o.renderBufferDirect(J,null,le,fe,H,null),H.onAfterShadow(o,H,O,J,le,fe,null)}}const ce=H.children;for(let le=0,me=ce.length;le<me;le++)P(ce[le],O,J,D,w)}function ie(H){H.target.removeEventListener("dispose",ie);for(const J in m){const D=m[J],w=H.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}function JT(o){function t(){let V=!1;const Ne=new fn;let he=null;const ge=new fn(0,0,0,0);return{setMask:function(we){he!==we&&!V&&(o.colorMask(we,we,we,we),he=we)},setLocked:function(we){V=we},setClear:function(we,ke,ot,Ot,an){an===!0&&(we*=Ot,ke*=Ot,ot*=Ot),Ne.set(we,ke,ot,Ot),ge.equals(Ne)===!1&&(o.clearColor(we,ke,ot,Ot),ge.copy(Ne))},reset:function(){V=!1,he=null,ge.set(-1,0,0,0)}}}function i(){let V=!1,Ne=null,he=null,ge=null;return{setTest:function(we){we?ye(o.DEPTH_TEST):Ee(o.DEPTH_TEST)},setMask:function(we){Ne!==we&&!V&&(o.depthMask(we),Ne=we)},setFunc:function(we){if(he!==we){switch(we){case Ty:o.depthFunc(o.NEVER);break;case Ay:o.depthFunc(o.ALWAYS);break;case Ny:o.depthFunc(o.LESS);break;case Lc:o.depthFunc(o.LEQUAL);break;case wy:o.depthFunc(o.EQUAL);break;case Ry:o.depthFunc(o.GEQUAL);break;case Cy:o.depthFunc(o.GREATER);break;case Dy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=we}},setLocked:function(we){V=we},setClear:function(we){ge!==we&&(o.clearDepth(we),ge=we)},reset:function(){V=!1,Ne=null,he=null,ge=null}}}function s(){let V=!1,Ne=null,he=null,ge=null,we=null,ke=null,ot=null,Ot=null,an=null;return{setTest:function(xt){V||(xt?ye(o.STENCIL_TEST):Ee(o.STENCIL_TEST))},setMask:function(xt){Ne!==xt&&!V&&(o.stencilMask(xt),Ne=xt)},setFunc:function(xt,In,vn){(he!==xt||ge!==In||we!==vn)&&(o.stencilFunc(xt,In,vn),he=xt,ge=In,we=vn)},setOp:function(xt,In,vn){(ke!==xt||ot!==In||Ot!==vn)&&(o.stencilOp(xt,In,vn),ke=xt,ot=In,Ot=vn)},setLocked:function(xt){V=xt},setClear:function(xt){an!==xt&&(o.clearStencil(xt),an=xt)},reset:function(){V=!1,Ne=null,he=null,ge=null,we=null,ke=null,ot=null,Ot=null,an=null}}}const c=new t,d=new i,h=new s,p=new WeakMap,g=new WeakMap;let m={},x={},y=new WeakMap,S=[],E=null,A=!1,R=null,M=null,_=null,I=null,C=null,P=null,ie=null,H=new Rt(0,0,0),O=0,J=!1,D=null,w=null,G=null,ce=null,le=null;const me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,L=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(W)[1]),fe=L>=1):W.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),fe=L>=2);let Z=null,Me={};const be=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),ne=new fn().fromArray(be),xe=new fn().fromArray(U);function q(V,Ne,he,ge){const we=new Uint8Array(4),ke=o.createTexture();o.bindTexture(V,ke),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ot=0;ot<he;ot++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,ge,0,o.RGBA,o.UNSIGNED_BYTE,we):o.texImage2D(Ne+ot,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,we);return ke}const oe={};oe[o.TEXTURE_2D]=q(o.TEXTURE_2D,o.TEXTURE_2D,1),oe[o.TEXTURE_CUBE_MAP]=q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[o.TEXTURE_2D_ARRAY]=q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),oe[o.TEXTURE_3D]=q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ye(o.DEPTH_TEST),d.setFunc(Lc),yt(!1),Ge(fv),ye(o.CULL_FACE),Vt(za);function ye(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function Ee(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function He(V,Ne){return x[V]!==Ne?(o.bindFramebuffer(V,Ne),x[V]=Ne,V===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ne),V===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Fe(V,Ne){let he=S,ge=!1;if(V){he=y.get(Ne),he===void 0&&(he=[],y.set(Ne,he));const we=V.textures;if(he.length!==we.length||he[0]!==o.COLOR_ATTACHMENT0){for(let ke=0,ot=we.length;ke<ot;ke++)he[ke]=o.COLOR_ATTACHMENT0+ke;he.length=we.length,ge=!0}}else he[0]!==o.BACK&&(he[0]=o.BACK,ge=!0);ge&&o.drawBuffers(he)}function nt(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const Lt={[Ss]:o.FUNC_ADD,[oy]:o.FUNC_SUBTRACT,[cy]:o.FUNC_REVERSE_SUBTRACT};Lt[uy]=o.MIN,Lt[dy]=o.MAX;const B={[fy]:o.ZERO,[hy]:o.ONE,[py]:o.SRC_COLOR,[Rf]:o.SRC_ALPHA,[yy]:o.SRC_ALPHA_SATURATE,[xy]:o.DST_COLOR,[gy]:o.DST_ALPHA,[my]:o.ONE_MINUS_SRC_COLOR,[Cf]:o.ONE_MINUS_SRC_ALPHA,[_y]:o.ONE_MINUS_DST_COLOR,[vy]:o.ONE_MINUS_DST_ALPHA,[Sy]:o.CONSTANT_COLOR,[My]:o.ONE_MINUS_CONSTANT_COLOR,[Ey]:o.CONSTANT_ALPHA,[by]:o.ONE_MINUS_CONSTANT_ALPHA};function Vt(V,Ne,he,ge,we,ke,ot,Ot,an,xt){if(V===za){A===!0&&(Ee(o.BLEND),A=!1);return}if(A===!1&&(ye(o.BLEND),A=!0),V!==ly){if(V!==R||xt!==J){if((M!==Ss||C!==Ss)&&(o.blendEquation(o.FUNC_ADD),M=Ss,C=Ss),xt)switch(V){case Nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hv:o.blendFunc(o.ONE,o.ONE);break;case pv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case pv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,I=null,P=null,ie=null,H.set(0,0,0),O=0,R=V,J=xt}return}we=we||Ne,ke=ke||he,ot=ot||ge,(Ne!==M||we!==C)&&(o.blendEquationSeparate(Lt[Ne],Lt[we]),M=Ne,C=we),(he!==_||ge!==I||ke!==P||ot!==ie)&&(o.blendFuncSeparate(B[he],B[ge],B[ke],B[ot]),_=he,I=ge,P=ke,ie=ot),(Ot.equals(H)===!1||an!==O)&&(o.blendColor(Ot.r,Ot.g,Ot.b,an),H.copy(Ot),O=an),R=V,J=!1}function ut(V,Ne){V.side===Ti?Ee(o.CULL_FACE):ye(o.CULL_FACE);let he=V.side===Pn;Ne&&(he=!he),yt(he),V.blending===Nr&&V.transparent===!1?Vt(za):Vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const ge=V.stencilWrite;h.setTest(ge),ge&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),$e(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):Ee(o.SAMPLE_ALPHA_TO_COVERAGE)}function yt(V){D!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),D=V)}function Ge(V){V!==ay?(ye(o.CULL_FACE),V!==w&&(V===fv?o.cullFace(o.BACK):V===sy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ee(o.CULL_FACE),w=V}function kt(V){V!==G&&(fe&&o.lineWidth(V),G=V)}function $e(V,Ne,he){V?(ye(o.POLYGON_OFFSET_FILL),(ce!==Ne||le!==he)&&(o.polygonOffset(Ne,he),ce=Ne,le=he)):Ee(o.POLYGON_OFFSET_FILL)}function et(V){V?ye(o.SCISSOR_TEST):Ee(o.SCISSOR_TEST)}function j(V){V===void 0&&(V=o.TEXTURE0+me-1),Z!==V&&(o.activeTexture(V),Z=V)}function T(V,Ne,he){he===void 0&&(Z===null?he=o.TEXTURE0+me-1:he=Z);let ge=Me[he];ge===void 0&&(ge={type:void 0,texture:void 0},Me[he]=ge),(ge.type!==V||ge.texture!==Ne)&&(Z!==he&&(o.activeTexture(he),Z=he),o.bindTexture(V,Ne||oe[V]),ge.type=V,ge.texture=Ne)}function ae(){const V=Me[Z];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Se(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(V){ne.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),ne.copy(V))}function Re(V){xe.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),xe.copy(V))}function Ye(V,Ne){let he=g.get(Ne);he===void 0&&(he=new WeakMap,g.set(Ne,he));let ge=he.get(V);ge===void 0&&(ge=o.getUniformBlockIndex(Ne,V.name),he.set(V,ge))}function Ze(V,Ne){const ge=g.get(Ne).get(V);p.get(Ne)!==ge&&(o.uniformBlockBinding(Ne,ge,V.__bindingPointIndex),p.set(Ne,ge))}function Pt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},Z=null,Me={},x={},y=new WeakMap,S=[],E=null,A=!1,R=null,M=null,_=null,I=null,C=null,P=null,ie=null,H=new Rt(0,0,0),O=0,J=!1,D=null,w=null,G=null,ce=null,le=null,ne.set(0,0,o.canvas.width,o.canvas.height),xe.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ye,disable:Ee,bindFramebuffer:He,drawBuffers:Fe,useProgram:nt,setBlending:Vt,setMaterial:ut,setFlipSided:yt,setCullFace:Ge,setLineWidth:kt,setPolygonOffset:$e,setScissorTest:et,activeTexture:j,bindTexture:T,unbindTexture:ae,compressedTexImage2D:Se,compressedTexImage3D:ve,texImage2D:je,texImage3D:ht,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:it,texStorage3D:Ae,texSubImage2D:_e,texSubImage3D:We,compressedTexSubImage2D:De,compressedTexSubImage3D:Le,scissor:Ke,viewport:Re,reset:Pt}}function lx(o,t,i,s){const c=$T(s);switch(i){case px:return o*t;case gx:return o*t;case vx:return o*t*2;case xx:return o*t/c.components*c.byteLength;case ph:return o*t/c.components*c.byteLength;case _x:return o*t*2/c.components*c.byteLength;case mh:return o*t*2/c.components*c.byteLength;case mx:return o*t*3/c.components*c.byteLength;case gi:return o*t*4/c.components*c.byteLength;case gh:return o*t*4/c.components*c.byteLength;case Nc:case wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Pf:case If:return Math.max(o,16)*Math.max(t,8)/4;case Of:case zf:return Math.max(o,8)*Math.max(t,8)/2;case Bf:case Ff:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Hf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vf:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case kf:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Xf:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Wf:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case qf:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Yf:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Zf:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Kf:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qf:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Jf:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case $f:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case th:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Dc:case nh:case ih:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yx:case ah:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sh:case rh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $T(o){switch(o){case $i:case dx:return{byteLength:1,components:1};case Fl:case fx:case Hl:return{byteLength:2,components:1};case fh:case hh:return{byteLength:2,components:4};case As:case dh:case Qi:return{byteLength:4,components:1};case hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function eA(o,t,i,s,c,d,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,x=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(j,T){return E?new OffscreenCanvas(j,T):Ic("canvas")}function R(j,T,ae){let Se=1;const ve=et(j);if((ve.width>ae||ve.height>ae)&&(Se=ae/Math.max(ve.width,ve.height)),Se<1)if(typeof HTMLImageElement<"u"&&j instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&j instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&j instanceof ImageBitmap||typeof VideoFrame<"u"&&j instanceof VideoFrame){const _e=Math.floor(Se*ve.width),We=Math.floor(Se*ve.height);y===void 0&&(y=A(_e,We));const De=T?A(_e,We):y;return De.width=_e,De.height=We,De.getContext("2d").drawImage(j,0,0,_e,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+_e+"x"+We+")."),De}else return"data"in j&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),j;return j}function M(j){return j.generateMipmaps&&j.minFilter!==ai&&j.minFilter!==mi}function _(j){o.generateMipmap(j)}function I(j,T,ae,Se,ve=!1){if(j!==null){if(o[j]!==void 0)return o[j];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+j+"'")}let _e=T;if(T===o.RED&&(ae===o.FLOAT&&(_e=o.R32F),ae===o.HALF_FLOAT&&(_e=o.R16F),ae===o.UNSIGNED_BYTE&&(_e=o.R8)),T===o.RED_INTEGER&&(ae===o.UNSIGNED_BYTE&&(_e=o.R8UI),ae===o.UNSIGNED_SHORT&&(_e=o.R16UI),ae===o.UNSIGNED_INT&&(_e=o.R32UI),ae===o.BYTE&&(_e=o.R8I),ae===o.SHORT&&(_e=o.R16I),ae===o.INT&&(_e=o.R32I)),T===o.RG&&(ae===o.FLOAT&&(_e=o.RG32F),ae===o.HALF_FLOAT&&(_e=o.RG16F),ae===o.UNSIGNED_BYTE&&(_e=o.RG8)),T===o.RG_INTEGER&&(ae===o.UNSIGNED_BYTE&&(_e=o.RG8UI),ae===o.UNSIGNED_SHORT&&(_e=o.RG16UI),ae===o.UNSIGNED_INT&&(_e=o.RG32UI),ae===o.BYTE&&(_e=o.RG8I),ae===o.SHORT&&(_e=o.RG16I),ae===o.INT&&(_e=o.RG32I)),T===o.RGB&&ae===o.UNSIGNED_INT_5_9_9_9_REV&&(_e=o.RGB9_E5),T===o.RGBA){const We=ve?jc:bt.getTransfer(Se);ae===o.FLOAT&&(_e=o.RGBA32F),ae===o.HALF_FLOAT&&(_e=o.RGBA16F),ae===o.UNSIGNED_BYTE&&(_e=We===Bt?o.SRGB8_ALPHA8:o.RGBA8),ae===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),ae===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function C(j,T){let ae;return j?T===null||T===As||T===Ur?ae=o.DEPTH24_STENCIL8:T===Qi?ae=o.DEPTH32F_STENCIL8:T===Fl&&(ae=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===As||T===Ur?ae=o.DEPTH_COMPONENT24:T===Qi?ae=o.DEPTH_COMPONENT32F:T===Fl&&(ae=o.DEPTH_COMPONENT16),ae}function P(j,T){return M(j)===!0||j.isFramebufferTexture&&j.minFilter!==ai&&j.minFilter!==mi?Math.log2(Math.max(T.width,T.height))+1:j.mipmaps!==void 0&&j.mipmaps.length>0?j.mipmaps.length:j.isCompressedTexture&&Array.isArray(j.image)?T.mipmaps.length:1}function ie(j){const T=j.target;T.removeEventListener("dispose",ie),O(T),T.isVideoTexture&&x.delete(T)}function H(j){const T=j.target;T.removeEventListener("dispose",H),D(T)}function O(j){const T=s.get(j);if(T.__webglInit===void 0)return;const ae=j.source,Se=S.get(ae);if(Se){const ve=Se[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&J(j),Object.keys(Se).length===0&&S.delete(ae)}s.remove(j)}function J(j){const T=s.get(j);o.deleteTexture(T.__webglTexture);const ae=j.source,Se=S.get(ae);delete Se[T.__cacheKey],h.memory.textures--}function D(j){const T=s.get(j);if(j.depthTexture&&j.depthTexture.dispose(),j.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(T.__webglFramebuffer[Se]))for(let ve=0;ve<T.__webglFramebuffer[Se].length;ve++)o.deleteFramebuffer(T.__webglFramebuffer[Se][ve]);else o.deleteFramebuffer(T.__webglFramebuffer[Se]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[Se])}else{if(Array.isArray(T.__webglFramebuffer))for(let Se=0;Se<T.__webglFramebuffer.length;Se++)o.deleteFramebuffer(T.__webglFramebuffer[Se]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Se=0;Se<T.__webglColorRenderbuffer.length;Se++)T.__webglColorRenderbuffer[Se]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[Se]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ae=j.textures;for(let Se=0,ve=ae.length;Se<ve;Se++){const _e=s.get(ae[Se]);_e.__webglTexture&&(o.deleteTexture(_e.__webglTexture),h.memory.textures--),s.remove(ae[Se])}s.remove(j)}let w=0;function G(){w=0}function ce(){const j=w;return j>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+j+" texture units while this GPU supports only "+c.maxTextures),w+=1,j}function le(j){const T=[];return T.push(j.wrapS),T.push(j.wrapT),T.push(j.wrapR||0),T.push(j.magFilter),T.push(j.minFilter),T.push(j.anisotropy),T.push(j.internalFormat),T.push(j.format),T.push(j.type),T.push(j.generateMipmaps),T.push(j.premultiplyAlpha),T.push(j.flipY),T.push(j.unpackAlignment),T.push(j.colorSpace),T.join()}function me(j,T){const ae=s.get(j);if(j.isVideoTexture&&kt(j),j.isRenderTargetTexture===!1&&j.version>0&&ae.__version!==j.version){const Se=j.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(ae,j,T);return}}i.bindTexture(o.TEXTURE_2D,ae.__webglTexture,o.TEXTURE0+T)}function fe(j,T){const ae=s.get(j);if(j.version>0&&ae.__version!==j.version){xe(ae,j,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ae.__webglTexture,o.TEXTURE0+T)}function L(j,T){const ae=s.get(j);if(j.version>0&&ae.__version!==j.version){xe(ae,j,T);return}i.bindTexture(o.TEXTURE_3D,ae.__webglTexture,o.TEXTURE0+T)}function W(j,T){const ae=s.get(j);if(j.version>0&&ae.__version!==j.version){q(ae,j,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture,o.TEXTURE0+T)}const Z={[Lf]:o.REPEAT,[Es]:o.CLAMP_TO_EDGE,[jf]:o.MIRRORED_REPEAT},Me={[ai]:o.NEAREST,[Hy]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[ef]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},be={[Wy]:o.NEVER,[Jy]:o.ALWAYS,[qy]:o.LESS,[Sx]:o.LEQUAL,[Yy]:o.EQUAL,[Qy]:o.GEQUAL,[Zy]:o.GREATER,[Ky]:o.NOTEQUAL};function U(j,T){if(T.type===Qi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mi||T.magFilter===ef||T.magFilter===ac||T.magFilter===bs||T.minFilter===mi||T.minFilter===ef||T.minFilter===ac||T.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(j,o.TEXTURE_WRAP_S,Z[T.wrapS]),o.texParameteri(j,o.TEXTURE_WRAP_T,Z[T.wrapT]),(j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY)&&o.texParameteri(j,o.TEXTURE_WRAP_R,Z[T.wrapR]),o.texParameteri(j,o.TEXTURE_MAG_FILTER,Me[T.magFilter]),o.texParameteri(j,o.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(o.texParameteri(j,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(j,o.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==ac&&T.minFilter!==bs||T.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ae=t.get("EXT_texture_filter_anisotropic");o.texParameterf(j,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ne(j,T){let ae=!1;j.__webglInit===void 0&&(j.__webglInit=!0,T.addEventListener("dispose",ie));const Se=T.source;let ve=S.get(Se);ve===void 0&&(ve={},S.set(Se,ve));const _e=le(T);if(_e!==j.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ae=!0),ve[_e].usedTimes++;const We=ve[j.__cacheKey];We!==void 0&&(ve[j.__cacheKey].usedTimes--,We.usedTimes===0&&J(T)),j.__cacheKey=_e,j.__webglTexture=ve[_e].texture}return ae}function xe(j,T,ae){let Se=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Se=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Se=o.TEXTURE_3D);const ve=ne(j,T),_e=T.source;i.bindTexture(Se,j.__webglTexture,o.TEXTURE0+ae);const We=s.get(_e);if(_e.version!==We.__version||ve===!0){i.activeTexture(o.TEXTURE0+ae);const De=bt.getPrimaries(bt.workingColorSpace),Le=T.colorSpace===Pa?null:bt.getPrimaries(T.colorSpace),it=T.colorSpace===Pa||De===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Ae=R(T.image,!1,c.maxTextureSize);Ae=$e(T,Ae);const je=d.convert(T.format,T.colorSpace),ht=d.convert(T.type);let Ke=I(T.internalFormat,je,ht,T.colorSpace,T.isVideoTexture);U(Se,T);let Re;const Ye=T.mipmaps,Ze=T.isVideoTexture!==!0,Pt=We.__version===void 0||ve===!0,V=_e.dataReady,Ne=P(T,Ae);if(T.isDepthTexture)Ke=C(T.format===Lr,T.type),Pt&&(Ze?i.texStorage2D(o.TEXTURE_2D,1,Ke,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,je,ht,null));else if(T.isDataTexture)if(Ye.length>0){Ze&&Pt&&i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)Re=Ye[he],Ze?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Re.width,Re.height,je,ht,Re.data):i.texImage2D(o.TEXTURE_2D,he,Ke,Re.width,Re.height,0,je,ht,Re.data);T.generateMipmaps=!1}else Ze?(Pt&&i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ae.width,Ae.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,je,ht,Ae.data)):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,je,ht,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Ke,Ye[0].width,Ye[0].height,Ae.depth);for(let he=0,ge=Ye.length;he<ge;he++)if(Re=Ye[he],T.format!==gi)if(je!==null)if(Ze){if(V)if(T.layerUpdates.size>0){const we=lx(Re.width,Re.height,T.format,T.type);for(const ke of T.layerUpdates){const ot=Re.data.subarray(ke*we/Re.data.BYTES_PER_ELEMENT,(ke+1)*we/Re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,ke,Re.width,Re.height,1,je,ot,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,Ae.depth,je,Re.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,Ke,Re.width,Re.height,Ae.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,Ae.depth,je,ht,Re.data):i.texImage3D(o.TEXTURE_2D_ARRAY,he,Ke,Re.width,Re.height,Ae.depth,0,je,ht,Re.data)}else{Ze&&Pt&&i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)Re=Ye[he],T.format!==gi?je!==null?Ze?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,Re.width,Re.height,je,Re.data):i.compressedTexImage2D(o.TEXTURE_2D,he,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Re.width,Re.height,je,ht,Re.data):i.texImage2D(o.TEXTURE_2D,he,Ke,Re.width,Re.height,0,je,ht,Re.data)}else if(T.isDataArrayTexture)if(Ze){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Ke,Ae.width,Ae.height,Ae.depth),V)if(T.layerUpdates.size>0){const he=lx(Ae.width,Ae.height,T.format,T.type);for(const ge of T.layerUpdates){const we=Ae.data.subarray(ge*he/Ae.data.BYTES_PER_ELEMENT,(ge+1)*he/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,je,ht,we)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,ht,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ke,Ae.width,Ae.height,Ae.depth,0,je,ht,Ae.data);else if(T.isData3DTexture)Ze?(Pt&&i.texStorage3D(o.TEXTURE_3D,Ne,Ke,Ae.width,Ae.height,Ae.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,ht,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,Ke,Ae.width,Ae.height,Ae.depth,0,je,ht,Ae.data);else if(T.isFramebufferTexture){if(Pt)if(Ze)i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ae.width,Ae.height);else{let he=Ae.width,ge=Ae.height;for(let we=0;we<Ne;we++)i.texImage2D(o.TEXTURE_2D,we,Ke,he,ge,0,je,ht,null),he>>=1,ge>>=1}}else if(Ye.length>0){if(Ze&&Pt){const he=et(Ye[0]);i.texStorage2D(o.TEXTURE_2D,Ne,Ke,he.width,he.height)}for(let he=0,ge=Ye.length;he<ge;he++)Re=Ye[he],Ze?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,je,ht,Re):i.texImage2D(o.TEXTURE_2D,he,Ke,je,ht,Re);T.generateMipmaps=!1}else if(Ze){if(Pt){const he=et(Ae);i.texStorage2D(o.TEXTURE_2D,Ne,Ke,he.width,he.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,je,ht,Ae)}else i.texImage2D(o.TEXTURE_2D,0,Ke,je,ht,Ae);M(T)&&_(Se),We.__version=_e.version,T.onUpdate&&T.onUpdate(T)}j.__version=T.version}function q(j,T,ae){if(T.image.length!==6)return;const Se=ne(j,T),ve=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+ae);const _e=s.get(ve);if(ve.version!==_e.__version||Se===!0){i.activeTexture(o.TEXTURE0+ae);const We=bt.getPrimaries(bt.workingColorSpace),De=T.colorSpace===Pa?null:bt.getPrimaries(T.colorSpace),Le=T.colorSpace===Pa||We===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,je=[];for(let ge=0;ge<6;ge++)!it&&!Ae?je[ge]=R(T.image[ge],!0,c.maxCubemapSize):je[ge]=Ae?T.image[ge].image:T.image[ge],je[ge]=$e(T,je[ge]);const ht=je[0],Ke=d.convert(T.format,T.colorSpace),Re=d.convert(T.type),Ye=I(T.internalFormat,Ke,Re,T.colorSpace),Ze=T.isVideoTexture!==!0,Pt=_e.__version===void 0||Se===!0,V=ve.dataReady;let Ne=P(T,ht);U(o.TEXTURE_CUBE_MAP,T);let he;if(it){Ze&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,Ye,ht.width,ht.height);for(let ge=0;ge<6;ge++){he=je[ge].mipmaps;for(let we=0;we<he.length;we++){const ke=he[we];T.format!==gi?Ke!==null?Ze?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,ke.width,ke.height,Ke,ke.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ye,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,ke.width,ke.height,Ke,Re,ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ye,ke.width,ke.height,0,Ke,Re,ke.data)}}}else{if(he=T.mipmaps,Ze&&Pt){he.length>0&&Ne++;const ge=et(je[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,Ye,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,je[ge].width,je[ge].height,Ke,Re,je[ge].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,je[ge].width,je[ge].height,0,Ke,Re,je[ge].data);for(let we=0;we<he.length;we++){const ot=he[we].image[ge].image;Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,ot.width,ot.height,Ke,Re,ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ye,ot.width,ot.height,0,Ke,Re,ot.data)}}else{Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,Re,je[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Ke,Re,je[ge]);for(let we=0;we<he.length;we++){const ke=he[we];Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,Ke,Re,ke.image[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ye,Ke,Re,ke.image[ge])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),_e.__version=ve.version,T.onUpdate&&T.onUpdate(T)}j.__version=T.version}function oe(j,T,ae,Se,ve,_e){const We=d.convert(ae.format,ae.colorSpace),De=d.convert(ae.type),Le=I(ae.internalFormat,We,De,ae.colorSpace);if(!s.get(T).__hasExternalTextures){const Ae=Math.max(1,T.width>>_e),je=Math.max(1,T.height>>_e);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?i.texImage3D(ve,_e,Le,Ae,je,T.depth,0,We,De,null):i.texImage2D(ve,_e,Le,Ae,je,0,We,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,j),Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Se,ve,s.get(ae).__webglTexture,0,yt(T)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Se,ve,s.get(ae).__webglTexture,_e),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(j,T,ae){if(o.bindRenderbuffer(o.RENDERBUFFER,j),T.depthBuffer){const Se=T.depthTexture,ve=Se&&Se.isDepthTexture?Se.type:null,_e=C(T.stencilBuffer,ve),We=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=yt(T);Ge(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,_e,T.width,T.height):ae?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,_e,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,_e,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,j)}else{const Se=T.textures;for(let ve=0;ve<Se.length;ve++){const _e=Se[ve],We=d.convert(_e.format,_e.colorSpace),De=d.convert(_e.type),Le=I(_e.internalFormat,We,De,_e.colorSpace),it=yt(T);ae&&Ge(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,it,Le,T.width,T.height):Ge(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,it,Le,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Le,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ee(j,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,j),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Se=s.get(T.depthTexture).__webglTexture,ve=yt(T);if(T.depthTexture.format===wr)Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(T.depthTexture.format===Lr)Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function He(j){const T=s.get(j),ae=j.isWebGLCubeRenderTarget===!0;if(j.depthTexture&&!T.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ee(T.__webglFramebuffer,j)}else if(ae){T.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Se]),T.__webglDepthbuffer[Se]=o.createRenderbuffer(),ye(T.__webglDepthbuffer[Se],j,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),ye(T.__webglDepthbuffer,j,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(j,T,ae){const Se=s.get(j);T!==void 0&&oe(Se.__webglFramebuffer,j,j.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ae!==void 0&&He(j)}function nt(j){const T=j.texture,ae=s.get(j),Se=s.get(T);j.addEventListener("dispose",H);const ve=j.textures,_e=j.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(Se.__webglTexture===void 0&&(Se.__webglTexture=o.createTexture()),Se.__version=T.version,h.memory.textures++),_e){ae.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer[De]=[];for(let Le=0;Le<T.mipmaps.length;Le++)ae.__webglFramebuffer[De][Le]=o.createFramebuffer()}else ae.__webglFramebuffer[De]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)ae.__webglFramebuffer[De]=o.createFramebuffer()}else ae.__webglFramebuffer=o.createFramebuffer();if(We)for(let De=0,Le=ve.length;De<Le;De++){const it=s.get(ve[De]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),h.memory.textures++)}if(j.samples>0&&Ge(j)===!1){ae.__webglMultisampledFramebuffer=o.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let De=0;De<ve.length;De++){const Le=ve[De];ae.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ae.__webglColorRenderbuffer[De]);const it=d.convert(Le.format,Le.colorSpace),Ae=d.convert(Le.type),je=I(Le.internalFormat,it,Ae,Le.colorSpace,j.isXRRenderTarget===!0),ht=yt(j);o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,je,j.width,j.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,ae.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),j.depthBuffer&&(ae.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(ae.__webglDepthRenderbuffer,j,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_e){i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)oe(ae.__webglFramebuffer[De][Le],j,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le);else oe(ae.__webglFramebuffer[De],j,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Le=ve.length;De<Le;De++){const it=ve[De],Ae=s.get(it);i.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),U(o.TEXTURE_2D,it),oe(ae.__webglFramebuffer,j,it,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),M(it)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((j.isWebGL3DRenderTarget||j.isWebGLArrayRenderTarget)&&(De=j.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Se.__webglTexture),U(De,T),T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)oe(ae.__webglFramebuffer[Le],j,T,o.COLOR_ATTACHMENT0,De,Le);else oe(ae.__webglFramebuffer,j,T,o.COLOR_ATTACHMENT0,De,0);M(T)&&_(De),i.unbindTexture()}j.depthBuffer&&He(j)}function Lt(j){const T=j.textures;for(let ae=0,Se=T.length;ae<Se;ae++){const ve=T[ae];if(M(ve)){const _e=j.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,We=s.get(ve).__webglTexture;i.bindTexture(_e,We),_(_e),i.unbindTexture()}}}const B=[],Vt=[];function ut(j){if(j.samples>0){if(Ge(j)===!1){const T=j.textures,ae=j.width,Se=j.height;let ve=o.COLOR_BUFFER_BIT;const _e=j.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=s.get(j),De=T.length>1;if(De)for(let Le=0;Le<T.length;Le++)i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(j.resolveDepthBuffer&&(j.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),j.stencilBuffer&&j.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,it,0)}o.blitFramebuffer(0,0,ae,Se,0,0,ae,Se,ve,o.NEAREST),g===!0&&(B.length=0,Vt.length=0,B.push(o.COLOR_ATTACHMENT0+Le),j.depthBuffer&&j.resolveDepthBuffer===!1&&(B.push(_e),Vt.push(_e),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Vt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let Le=0;Le<T.length;Le++){i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,it,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(j.depthBuffer&&j.resolveDepthBuffer===!1&&g){const T=j.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function yt(j){return Math.min(c.maxSamples,j.samples)}function Ge(j){const T=s.get(j);return j.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(j){const T=h.render.frame;x.get(j)!==T&&(x.set(j,T),j.update())}function $e(j,T){const ae=j.colorSpace,Se=j.format,ve=j.type;return j.isCompressedTexture===!0||j.isVideoTexture===!0||ae!==Fa&&ae!==Pa&&(bt.getTransfer(ae)===Bt?(Se!==gi||ve!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),T}function et(j){return typeof HTMLImageElement<"u"&&j instanceof HTMLImageElement?(m.width=j.naturalWidth||j.width,m.height=j.naturalHeight||j.height):typeof VideoFrame<"u"&&j instanceof VideoFrame?(m.width=j.displayWidth,m.height=j.displayHeight):(m.width=j.width,m.height=j.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=G,this.setTexture2D=me,this.setTexture2DArray=fe,this.setTexture3D=L,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ge}function tA(o,t){function i(s,c=Pa){let d;const h=bt.getTransfer(c);if(s===$i)return o.UNSIGNED_BYTE;if(s===fh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===hh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===hx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===dx)return o.BYTE;if(s===fx)return o.SHORT;if(s===Fl)return o.UNSIGNED_SHORT;if(s===dh)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===Qi)return o.FLOAT;if(s===Hl)return o.HALF_FLOAT;if(s===px)return o.ALPHA;if(s===mx)return o.RGB;if(s===gi)return o.RGBA;if(s===gx)return o.LUMINANCE;if(s===vx)return o.LUMINANCE_ALPHA;if(s===wr)return o.DEPTH_COMPONENT;if(s===Lr)return o.DEPTH_STENCIL;if(s===xx)return o.RED;if(s===ph)return o.RED_INTEGER;if(s===_x)return o.RG;if(s===mh)return o.RG_INTEGER;if(s===gh)return o.RGBA_INTEGER;if(s===Nc||s===wc||s===Rc||s===Cc)if(h===Bt)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(s===Nc)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wc)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(s===Nc)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wc)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Of||s===Pf||s===zf||s===If)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(s===Of)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pf)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zf)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===If)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bf||s===Ff||s===Hf)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(s===Bf||s===Ff)return h===Bt?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(s===Hf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gf||s===Vf||s===kf||s===Xf||s===Wf||s===qf||s===Yf||s===Zf||s===Kf||s===Qf||s===Jf||s===$f||s===eh||s===th)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(s===Gf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jf)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$f)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===eh)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===th)return h===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dc||s===nh||s===ih)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(s===Dc)return h===Bt?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nh)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ih)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yx||s===ah||s===sh||s===rh)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(s===Dc)return d.COMPRESSED_RED_RGTC1_EXT;if(s===ah)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sh)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rh)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class nA extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ac extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iA={type:"move"};class wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,d=null,h=null;const p=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,s),_=this._getHandJoint(m,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=x.position.distanceTo(y.position),E=.02,A=.005;m.inputState.pinching&&S>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(d=i.getPose(t.gripSpace,s),d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,d.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(d.linearVelocity)):g.hasLinearVelocity=!1,d.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(d.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&d!==null&&(c=d),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(iA)))}return p!==null&&(p.visible=c!==null),g!==null&&(g.visible=d!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ac;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const c=new zn,d=t.properties.get(c);d.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=c}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ta({vertexShader:aA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Hc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lA extends Or{constructor(t,i){super();const s=this;let c=null,d=1,h=null,p="local-floor",g=1,m=null,x=null,y=null,S=null,E=null,A=null;const R=new rA,M=i.getContextAttributes();let _=null,I=null;const C=[],P=[],ie=new Tt;let H=null;const O=new pi;O.layers.enable(1),O.viewport=new fn;const J=new pi;J.layers.enable(2),J.viewport=new fn;const D=[O,J],w=new nA;w.layers.enable(1),w.layers.enable(2);let G=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=C[q];return oe===void 0&&(oe=new wf,C[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=C[q];return oe===void 0&&(oe=new wf,C[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=C[q];return oe===void 0&&(oe=new wf,C[q]=oe),oe.getHandSpace()};function le(q){const oe=P.indexOf(q.inputSource);if(oe===-1)return;const ye=C[oe];ye!==void 0&&(ye.update(q.inputSource,q.frame,m||h),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function me(){c.removeEventListener("select",le),c.removeEventListener("selectstart",le),c.removeEventListener("selectend",le),c.removeEventListener("squeeze",le),c.removeEventListener("squeezestart",le),c.removeEventListener("squeezeend",le),c.removeEventListener("end",me),c.removeEventListener("inputsourceschange",fe);for(let q=0;q<C.length;q++){const oe=P[q];oe!==null&&(P[q]=null,C[q].disconnect(oe))}G=null,ce=null,R.reset(),t.setRenderTarget(_),E=null,S=null,y=null,c=null,I=null,xe.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(ie.width,ie.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return c},this.setSession=async function(q){if(c=q,c!==null){if(_=t.getRenderTarget(),c.addEventListener("select",le),c.addEventListener("selectstart",le),c.addEventListener("selectend",le),c.addEventListener("squeeze",le),c.addEventListener("squeezestart",le),c.addEventListener("squeezeend",le),c.addEventListener("end",me),c.addEventListener("inputsourceschange",fe),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(ie),c.renderState.layers===void 0){const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:d};E=new XRWebGLLayer(c,i,oe),c.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),I=new Ns(E.framebufferWidth,E.framebufferHeight,{format:gi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let oe=null,ye=null,Ee=null;M.depth&&(Ee=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,oe=M.stencil?Lr:wr,ye=M.stencil?Ur:As);const He={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:d};y=new XRWebGLBinding(c,i),S=y.createProjectionLayer(He),c.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),I=new Ns(S.textureWidth,S.textureHeight,{format:gi,type:$i,depthTexture:new Px(S.textureWidth,S.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(g),m=null,h=await c.requestReferenceSpace(p),xe.setContext(c),xe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function fe(q){for(let oe=0;oe<q.removed.length;oe++){const ye=q.removed[oe],Ee=P.indexOf(ye);Ee>=0&&(P[Ee]=null,C[Ee].disconnect(ye))}for(let oe=0;oe<q.added.length;oe++){const ye=q.added[oe];let Ee=P.indexOf(ye);if(Ee===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=P.length){P.push(ye),Ee=Fe;break}else if(P[Fe]===null){P[Fe]=ye,Ee=Fe;break}if(Ee===-1)break}const He=C[Ee];He&&He.connect(ye)}}const L=new re,W=new re;function Z(q,oe,ye){L.setFromMatrixPosition(oe.matrixWorld),W.setFromMatrixPosition(ye.matrixWorld);const Ee=L.distanceTo(W),He=oe.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,nt=He[14]/(He[10]-1),Lt=He[14]/(He[10]+1),B=(He[9]+1)/He[5],Vt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],yt=(Fe[8]+1)/Fe[0],Ge=nt*ut,kt=nt*yt,$e=Ee/(-ut+yt),et=$e*-ut;oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(et),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const j=nt+$e,T=Lt+$e,ae=Ge-et,Se=kt+(Ee-et),ve=B*Lt/T*j,_e=Vt*Lt/T*j;q.projectionMatrix.makePerspective(ae,Se,ve,_e,j,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Me(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(c===null)return;R.texture!==null&&(q.near=R.depthNear,q.far=R.depthFar),w.near=J.near=O.near=q.near,w.far=J.far=O.far=q.far,(G!==w.near||ce!==w.far)&&(c.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,ce=w.far,O.near=G,O.far=ce,J.near=G,J.far=ce,O.updateProjectionMatrix(),J.updateProjectionMatrix(),q.updateProjectionMatrix());const oe=q.parent,ye=w.cameras;Me(w,oe);for(let Ee=0;Ee<ye.length;Ee++)Me(ye[Ee],oe);ye.length===2?Z(w,O,J):w.projectionMatrix.copy(O.projectionMatrix),be(q,w,oe)};function be(q,oe,ye){ye===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=lh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&E===null))return g},this.setFoveation=function(q){g=q,S!==null&&(S.fixedFoveation=q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let U=null;function ne(q,oe){if(x=oe.getViewerPose(m||h),A=oe,x!==null){const ye=x.views;E!==null&&(t.setRenderTargetFramebuffer(I,E.framebuffer),t.setRenderTarget(I));let Ee=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,Ee=!0);for(let Fe=0;Fe<ye.length;Fe++){const nt=ye[Fe];let Lt=null;if(E!==null)Lt=E.getViewport(nt);else{const Vt=y.getViewSubImage(S,nt);Lt=Vt.viewport,Fe===0&&(t.setRenderTargetTextures(I,Vt.colorTexture,S.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(I))}let B=D[Fe];B===void 0&&(B=new pi,B.layers.enable(Fe),B.viewport=new fn,D[Fe]=B),B.matrix.fromArray(nt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(nt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Fe===0&&(w.matrix.copy(B.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ee===!0&&w.cameras.push(B)}const He=c.enabledFeatures;if(He&&He.includes("depth-sensing")){const Fe=y.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&R.init(t,Fe,c.renderState)}}for(let ye=0;ye<C.length;ye++){const Ee=P[ye],He=C[ye];Ee!==null&&He!==void 0&&He.update(Ee,oe,m||h)}U&&U(q,oe),oe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:oe}),A=null}const xe=new jx;xe.setAnimationLoop(ne),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}const us=new ea,oA=new ln;function cA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Cx(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function c(M,_,I,C,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?d(M,_):_.isMeshToonMaterial?(d(M,_),y(M,_)):_.isMeshPhongMaterial?(d(M,_),x(M,_)):_.isMeshStandardMaterial?(d(M,_),S(M,_),_.isMeshPhysicalMaterial&&E(M,_,P)):_.isMeshMatcapMaterial?(d(M,_),A(M,_)):_.isMeshDepthMaterial?d(M,_):_.isMeshDistanceMaterial?(d(M,_),R(M,_)):_.isMeshNormalMaterial?d(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&p(M,_)):_.isPointsMaterial?g(M,_,I,C):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function d(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Pn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Pn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const I=t.get(_),C=I.envMap,P=I.envMapRotation;C&&(M.envMap.value=C,us.copy(P),us.x*=-1,us.y*=-1,us.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),M.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(us)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function p(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function g(M,_,I,C){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=C*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function y(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function E(M,_,I){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const I=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function uA(o,t,i,s){let c={},d={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(I,C){const P=C.program;s.uniformBlockBinding(I,P)}function m(I,C){let P=c[I.id];P===void 0&&(A(I),P=x(I),c[I.id]=P,I.addEventListener("dispose",M));const ie=C.program;s.updateUBOMapping(I,ie);const H=t.render.frame;d[I.id]!==H&&(S(I),d[I.id]=H)}function x(I){const C=y();I.__bindingPointIndex=C;const P=o.createBuffer(),ie=I.__size,H=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,ie,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,P),P}function y(){for(let I=0;I<p;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const C=c[I.id],P=I.uniforms,ie=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let H=0,O=P.length;H<O;H++){const J=Array.isArray(P[H])?P[H]:[P[H]];for(let D=0,w=J.length;D<w;D++){const G=J[D];if(E(G,H,D,ie)===!0){const ce=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let fe=0;fe<le.length;fe++){const L=le[fe],W=R(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,ce+me,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,me),me+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(I,C,P,ie){const H=I.value,O=C+"_"+P;if(ie[O]===void 0)return typeof H=="number"||typeof H=="boolean"?ie[O]=H:ie[O]=H.clone(),!0;{const J=ie[O];if(typeof H=="number"||typeof H=="boolean"){if(J!==H)return ie[O]=H,!0}else if(J.equals(H)===!1)return J.copy(H),!0}return!1}function A(I){const C=I.uniforms;let P=0;const ie=16;for(let O=0,J=C.length;O<J;O++){const D=Array.isArray(C[O])?C[O]:[C[O]];for(let w=0,G=D.length;w<G;w++){const ce=D[w],le=Array.isArray(ce.value)?ce.value:[ce.value];for(let me=0,fe=le.length;me<fe;me++){const L=le[me],W=R(L),Z=P%ie,Me=Z%W.boundary,be=Z+Me;P+=Me,be!==0&&ie-be<W.storage&&(P+=ie-be),ce.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=P,P+=W.storage}}}const H=P%ie;return H>0&&(P+=ie-H),I.__size=P,I.__cache={},this}function R(I){const C={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(C.boundary=4,C.storage=4):I.isVector2?(C.boundary=8,C.storage=8):I.isVector3||I.isColor?(C.boundary=16,C.storage=12):I.isVector4?(C.boundary=16,C.storage=16):I.isMatrix3?(C.boundary=48,C.storage=48):I.isMatrix4?(C.boundary=64,C.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),C}function M(I){const C=I.target;C.removeEventListener("dispose",M);const P=h.indexOf(C.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(c[C.id]),delete c[C.id],delete d[C.id]}function _(){for(const I in c)o.deleteBuffer(c[I]);h=[],c={},d={}}return{bind:g,update:m,dispose:_}}class dA{constructor(t={}){const{canvas:i=eS(),context:s=null,depth:c=!0,stencil:d=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),A=new Int32Array(4);let R=null,M=null;const _=[],I=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this.toneMapping=Ia,this.toneMappingExposure=1;const C=this;let P=!1,ie=0,H=0,O=null,J=-1,D=null;const w=new fn,G=new fn;let ce=null;const le=new Rt(0);let me=0,fe=i.width,L=i.height,W=1,Z=null,Me=null;const be=new fn(0,0,fe,L),U=new fn(0,0,fe,L);let ne=!1;const xe=new Lx;let q=!1,oe=!1;const ye=new ln,Ee=new re,He=new fn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Lt(){return O===null?W:1}let B=s;function Vt(N,k){return i.getContext(N,k)}try{const N={alpha:!0,depth:c,stencil:d,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${uh}`),i.addEventListener("webglcontextlost",he,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",we,!1),B===null){const k="webgl2";if(B=Vt(k,N),B===null)throw Vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ut,yt,Ge,kt,$e,et,j,T,ae,Se,ve,_e,We,De,Le,it,Ae,je,ht,Ke,Re,Ye,Ze,Pt;function V(){ut=new vb(B),ut.init(),Ye=new tA(B,ut),yt=new db(B,ut,t,Ye),Ge=new JT(B),kt=new yb(B),$e=new IT,et=new eA(B,ut,Ge,$e,yt,Ye,kt),j=new hb(C),T=new gb(C),ae=new NS(B),Ze=new cb(B,ae),Se=new xb(B,ae,kt,Ze),ve=new Mb(B,Se,ae,kt),ht=new Sb(B,yt,et),it=new fb($e),_e=new zT(C,j,T,ut,yt,Ze,it),We=new cA(C,$e),De=new FT,Le=new WT(ut),je=new ob(C,j,T,Ge,ve,S,g),Ae=new QT(C,ve,yt),Pt=new uA(B,kt,yt,Ge),Ke=new ub(B,ut,kt),Re=new _b(B,ut,kt),kt.programs=_e.programs,C.capabilities=yt,C.extensions=ut,C.properties=$e,C.renderLists=De,C.shadowMap=Ae,C.state=Ge,C.info=kt}V();const Ne=new lA(C,B);this.xr=Ne,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const N=ut.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ut.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(N){N!==void 0&&(W=N,this.setSize(fe,L,!1))},this.getSize=function(N){return N.set(fe,L)},this.setSize=function(N,k,ee=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=N,L=k,i.width=Math.floor(N*W),i.height=Math.floor(k*W),ee===!0&&(i.style.width=N+"px",i.style.height=k+"px"),this.setViewport(0,0,N,k)},this.getDrawingBufferSize=function(N){return N.set(fe*W,L*W).floor()},this.setDrawingBufferSize=function(N,k,ee){fe=N,L=k,W=ee,i.width=Math.floor(N*ee),i.height=Math.floor(k*ee),this.setViewport(0,0,N,k)},this.getCurrentViewport=function(N){return N.copy(w)},this.getViewport=function(N){return N.copy(be)},this.setViewport=function(N,k,ee,te){N.isVector4?be.set(N.x,N.y,N.z,N.w):be.set(N,k,ee,te),Ge.viewport(w.copy(be).multiplyScalar(W).round())},this.getScissor=function(N){return N.copy(U)},this.setScissor=function(N,k,ee,te){N.isVector4?U.set(N.x,N.y,N.z,N.w):U.set(N,k,ee,te),Ge.scissor(G.copy(U).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(N){Ge.setScissorTest(ne=N)},this.setOpaqueSort=function(N){Z=N},this.setTransparentSort=function(N){Me=N},this.getClearColor=function(N){return N.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(N=!0,k=!0,ee=!0){let te=0;if(N){let Y=!1;if(O!==null){const Te=O.texture.format;Y=Te===gh||Te===mh||Te===ph}if(Y){const Te=O.texture.type,Ce=Te===$i||Te===As||Te===Fl||Te===Ur||Te===fh||Te===hh,Oe=je.getClearColor(),Pe=je.getClearAlpha(),ze=Oe.r,Je=Oe.g,qe=Oe.b;Ce?(E[0]=ze,E[1]=Je,E[2]=qe,E[3]=Pe,B.clearBufferuiv(B.COLOR,0,E)):(A[0]=ze,A[1]=Je,A[2]=qe,A[3]=Pe,B.clearBufferiv(B.COLOR,0,A))}else te|=B.COLOR_BUFFER_BIT}k&&(te|=B.DEPTH_BUFFER_BIT),ee&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",he,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",we,!1),De.dispose(),Le.dispose(),$e.dispose(),j.dispose(),T.dispose(),ve.dispose(),Ze.dispose(),Pt.dispose(),_e.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",vn),Ne.removeEventListener("sessionend",ql),xi.stop()};function he(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const N=kt.autoReset,k=Ae.enabled,ee=Ae.autoUpdate,te=Ae.needsUpdate,Y=Ae.type;V(),kt.autoReset=N,Ae.enabled=k,Ae.autoUpdate=ee,Ae.needsUpdate=te,Ae.type=Y}function we(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ke(N){const k=N.target;k.removeEventListener("dispose",ke),ot(k)}function ot(N){Ot(N),$e.remove(N)}function Ot(N){const k=$e.get(N).programs;k!==void 0&&(k.forEach(function(ee){_e.releaseProgram(ee)}),N.isShaderMaterial&&_e.releaseShaderCache(N))}this.renderBufferDirect=function(N,k,ee,te,Y,Te){k===null&&(k=Fe);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=xn(N,k,ee,te,Y);Ge.setMaterial(te,Ce);let Pe=ee.index,ze=1;if(te.wireframe===!0){if(Pe=Se.getWireframeAttribute(ee),Pe===void 0)return;ze=2}const Je=ee.drawRange,qe=ee.attributes.position;let ct=Je.start*ze,At=(Je.start+Je.count)*ze;Te!==null&&(ct=Math.max(ct,Te.start*ze),At=Math.min(At,(Te.start+Te.count)*ze)),Pe!==null?(ct=Math.max(ct,0),At=Math.min(At,Pe.count)):qe!=null&&(ct=Math.max(ct,0),At=Math.min(At,qe.count));const Ft=At-ct;if(Ft<0||Ft===1/0)return;Ze.setup(Y,te,Oe,ee,Pe);let _n,_t=Ke;if(Pe!==null&&(_n=ae.get(Pe),_t=Re,_t.setIndex(_n)),Y.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*Lt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(Y.isLine){let Ve=te.linewidth;Ve===void 0&&(Ve=1),Ge.setLineWidth(Ve*Lt()),Y.isLineSegments?_t.setMode(B.LINES):Y.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else Y.isPoints?_t.setMode(B.POINTS):Y.isSprite&&_t.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ve=Y._multiDrawStarts,Xt=Y._multiDrawCounts,gt=Y._multiDrawCount,Yt=Pe?ae.get(Pe).bytesPerElement:1,sn=$e.get(te).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)sn.setValue(B,"_gl_DrawID",yn),_t.render(Ve[yn]/Yt,Xt[yn])}else if(Y.isInstancedMesh)_t.renderInstances(ct,Ft,Y.count);else if(ee.isInstancedBufferGeometry){const Ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Xt=Math.min(ee.instanceCount,Ve);_t.renderInstances(ct,Ft,Xt)}else _t.render(ct,Ft)};function an(N,k,ee){N.transparent===!0&&N.side===Ti&&N.forceSinglePass===!1?(N.side=Pn,N.needsUpdate=!0,Ga(N,k,ee),N.side=Ba,N.needsUpdate=!0,Ga(N,k,ee),N.side=Ti):Ga(N,k,ee)}this.compile=function(N,k,ee=null){ee===null&&(ee=N),M=Le.get(ee),M.init(k),I.push(M),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),N!==ee&&N.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights();const te=new Set;return N.traverse(function(Y){const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Oe=Te[Ce];an(Oe,ee,Y),te.add(Oe)}else an(Te,ee,Y),te.add(Te)}),I.pop(),M=null,te},this.compileAsync=function(N,k,ee=null){const te=this.compile(N,k,ee);return new Promise(Y=>{function Te(){if(te.forEach(function(Ce){$e.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){Y(N);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let xt=null;function In(N){xt&&xt(N)}function vn(){xi.stop()}function ql(){xi.start()}const xi=new jx;xi.setAnimationLoop(In),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(N){xt=N,Ne.setAnimationLoop(N),N===null?xi.stop():xi.start()},Ne.addEventListener("sessionstart",vn),Ne.addEventListener("sessionend",ql),this.render=function(N,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(k),k=Ne.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,k,O),M=Le.get(N,I.length),M.init(k),I.push(M),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),xe.setFromProjectionMatrix(ye),oe=this.localClippingEnabled,q=it.init(this.clippingPlanes,oe),R=De.get(N,_.length),R.init(),_.push(R),Ne.enabled===!0&&Ne.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&ws(Te,k,-1/0,C.sortObjects)}ws(N,k,0,C.sortObjects),R.finish(),C.sortObjects===!0&&R.sort(Z,Me),nt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,nt&&je.addToRenderList(R,N),this.info.render.frame++,q===!0&&it.beginShadows();const ee=M.state.shadowsArray;Ae.render(ee,N,k),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=R.opaque,Y=R.transmissive;if(M.setupLights(),k.isArrayCamera){const Te=k.cameras;if(Y.length>0)for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++){const Pe=Te[Ce];Rs(te,Y,N,Pe)}nt&&je.render(N);for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++){const Pe=Te[Ce];zr(R,N,Pe,Pe.viewport)}}else Y.length>0&&Rs(te,Y,N,k),nt&&je.render(N),zr(R,N,k);O!==null&&(et.updateMultisampleRenderTarget(O),et.updateRenderTargetMipmap(O)),N.isScene===!0&&N.onAfterRender(C,N,k),Ze.resetDefaultState(),J=-1,D=null,I.pop(),I.length>0?(M=I[I.length-1],q===!0&&it.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function ws(N,k,ee,te){if(N.visible===!1)return;if(N.layers.test(k.layers)){if(N.isGroup)ee=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(k);else if(N.isLight)M.pushLight(N),N.castShadow&&M.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||xe.intersectsSprite(N)){te&&He.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ye);const Ce=ve.update(N),Oe=N.material;Oe.visible&&R.push(N,Ce,Oe,ee,He.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||xe.intersectsObject(N))){const Ce=ve.update(N),Oe=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),He.copy(N.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),He.copy(Ce.boundingSphere.center)),He.applyMatrix4(N.matrixWorld).applyMatrix4(ye)),Array.isArray(Oe)){const Pe=Ce.groups;for(let ze=0,Je=Pe.length;ze<Je;ze++){const qe=Pe[ze],ct=Oe[qe.materialIndex];ct&&ct.visible&&R.push(N,Ce,ct,ee,He.z,qe)}}else Oe.visible&&R.push(N,Ce,Oe,ee,He.z,null)}}const Te=N.children;for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++)ws(Te[Ce],k,ee,te)}function zr(N,k,ee,te){const Y=N.opaque,Te=N.transmissive,Ce=N.transparent;M.setupLightsView(ee),q===!0&&it.setGlobalState(C.clippingPlanes,ee),te&&Ge.viewport(w.copy(te)),Y.length>0&&aa(Y,k,ee),Te.length>0&&aa(Te,k,ee),Ce.length>0&&aa(Ce,k,ee),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Rs(N,k,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[te.id]===void 0&&(M.state.transmissionRenderTarget[te.id]=new Ns(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Hl:$i,minFilter:bs,samples:4,stencilBuffer:d,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=M.state.transmissionRenderTarget[te.id],Ce=te.viewport||w;Te.setSize(Ce.z,Ce.w);const Oe=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(le),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),nt&&je.render(ee);const Pe=C.toneMapping;C.toneMapping=Ia;const ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),q===!0&&it.setGlobalState(C.clippingPlanes,te),aa(N,ee,te),et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let qe=0,ct=k.length;qe<ct;qe++){const At=k[qe],Ft=At.object,_n=At.geometry,_t=At.material,Ve=At.group;if(_t.side===Ti&&Ft.layers.test(te.layers)){const Xt=_t.side;_t.side=Pn,_t.needsUpdate=!0,Ir(Ft,ee,te,_n,_t,Ve),_t.side=Xt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te))}C.setRenderTarget(Oe),C.setClearColor(le,me),ze!==void 0&&(te.viewport=ze),C.toneMapping=Pe}function aa(N,k,ee){const te=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Te=N.length;Y<Te;Y++){const Ce=N[Y],Oe=Ce.object,Pe=Ce.geometry,ze=te===null?Ce.material:te,Je=Ce.group;Oe.layers.test(ee.layers)&&Ir(Oe,k,ee,Pe,ze,Je)}}function Ir(N,k,ee,te,Y,Te){N.onBeforeRender(C,k,ee,te,Y,Te),N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Y.transparent===!0&&Y.side===Ti&&Y.forceSinglePass===!1?(Y.side=Pn,Y.needsUpdate=!0,C.renderBufferDirect(ee,k,te,Y,N,Te),Y.side=Ba,Y.needsUpdate=!0,C.renderBufferDirect(ee,k,te,Y,N,Te),Y.side=Ti):C.renderBufferDirect(ee,k,te,Y,N,Te),N.onAfterRender(C,k,ee,te,Y,Te)}function Ga(N,k,ee){k.isScene!==!0&&(k=Fe);const te=$e.get(N),Y=M.state.lights,Te=M.state.shadowsArray,Ce=Y.state.version,Oe=_e.getParameters(N,Y.state,Te,k,ee),Pe=_e.getProgramCacheKey(Oe);let ze=te.programs;te.environment=N.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(N.isMeshStandardMaterial?T:j).get(N.envMap||te.environment),te.envMapRotation=te.environment!==null&&N.envMap===null?k.environmentRotation:N.envMapRotation,ze===void 0&&(N.addEventListener("dispose",ke),ze=new Map,te.programs=ze);let Je=ze.get(Pe);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Ce)return Qt(N,Oe),Je}else Oe.uniforms=_e.getUniforms(N),N.onBeforeCompile(Oe,C),Je=_e.acquireProgram(Oe,Pe),ze.set(Pe,Je),te.uniforms=Oe.uniforms;const qe=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(qe.clippingPlanes=it.uniform),Qt(N,Oe),te.needsLights=Br(N),te.lightsStateVersion=Ce,te.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.directionalShadowMap.value=Y.state.directionalShadowMap,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotShadowMap.value=Y.state.spotShadowMap,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMap.value=Y.state.pointShadowMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function ri(N){if(N.uniformsList===null){const k=N.currentProgram.getUniforms();N.uniformsList=Uc.seqWithValue(k.seq,N.uniforms)}return N.uniformsList}function Qt(N,k){const ee=$e.get(N);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function xn(N,k,ee,te,Y){k.isScene!==!0&&(k=Fe),et.resetTextureUnits();const Te=k.fog,Ce=te.isMeshStandardMaterial?k.environment:null,Oe=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Fa,Pe=(te.isMeshStandardMaterial?T:j).get(te.envMap||Ce),ze=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let Ft=Ia;te.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ft=C.toneMapping);const _n=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=_n!==void 0?_n.length:0,Ve=$e.get(te),Xt=M.state.lights;if(q===!0&&(oe===!0||N!==D)){const Nn=N===D&&te.id===J;it.setState(te,N,Nn)}let gt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Xt.state.version||Ve.outputColorSpace!==Oe||Y.isBatchedMesh&&Ve.batching===!1||!Y.isBatchedMesh&&Ve.batching===!0||Y.isBatchedMesh&&Ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Y.isInstancedMesh&&Ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ve.instancingMorph===!1&&Y.morphTexture!==null||Ve.envMap!==Pe||te.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==it.numPlanes||Ve.numIntersection!==it.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Je||Ve.morphTargets!==qe||Ve.morphNormals!==ct||Ve.morphColors!==At||Ve.toneMapping!==Ft||Ve.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,Ve.__version=te.version);let Yt=Ve.currentProgram;gt===!0&&(Yt=Ga(te,k,Y));let sn=!1,yn=!1,Fr=!1;const Ht=Yt.getUniforms(),li=Ve.uniforms;if(Ge.useProgram(Yt.program)&&(sn=!0,yn=!0,Fr=!0),te.id!==J&&(J=te.id,yn=!0),sn||D!==N){Ht.setValue(B,"projectionMatrix",N.projectionMatrix),Ht.setValue(B,"viewMatrix",N.matrixWorldInverse);const Nn=Ht.map.cameraPosition;Nn!==void 0&&Nn.setValue(B,Ee.setFromMatrixPosition(N.matrixWorld)),yt.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",N.isOrthographicCamera===!0),D!==N&&(D=N,yn=!0,Fr=!0)}if(Y.isSkinnedMesh){Ht.setOptional(B,Y,"bindMatrix"),Ht.setOptional(B,Y,"bindMatrixInverse");const Nn=Y.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Ht.setValue(B,"boneTexture",Nn.boneTexture,et))}Y.isBatchedMesh&&(Ht.setOptional(B,Y,"batchingTexture"),Ht.setValue(B,"batchingTexture",Y._matricesTexture,et),Ht.setOptional(B,Y,"batchingIdTexture"),Ht.setValue(B,"batchingIdTexture",Y._indirectTexture,et),Ht.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ht.setValue(B,"batchingColorTexture",Y._colorsTexture,et));const ra=ee.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&ht.update(Y,ee,Yt),(yn||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Ht.setValue(B,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(li.envMap.value=Pe,li.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(li.envMapIntensity.value=k.environmentIntensity),yn&&(Ht.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&sa(li,Fr),Te&&te.fog===!0&&We.refreshFogUniforms(li,Te),We.refreshMaterialUniforms(li,te,W,L,M.state.transmissionRenderTarget[N.id]),Uc.upload(B,ri(Ve),li,et)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Uc.upload(B,ri(Ve),li,et),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ht.setValue(B,"center",Y.center),Ht.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(B,"normalMatrix",Y.normalMatrix),Ht.setValue(B,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Nn=te.uniformsGroups;for(let Sn=0,Hr=Nn.length;Sn<Hr;Sn++){const Gr=Nn[Sn];Pt.update(Gr,Yt),Pt.bind(Gr,Yt)}}return Yt}function sa(N,k){N.ambientLightColor.needsUpdate=k,N.lightProbe.needsUpdate=k,N.directionalLights.needsUpdate=k,N.directionalLightShadows.needsUpdate=k,N.pointLights.needsUpdate=k,N.pointLightShadows.needsUpdate=k,N.spotLights.needsUpdate=k,N.spotLightShadows.needsUpdate=k,N.rectAreaLights.needsUpdate=k,N.hemisphereLights.needsUpdate=k}function Br(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,k,ee){$e.get(N.texture).__webglTexture=k,$e.get(N.depthTexture).__webglTexture=ee;const te=$e.get(N);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,k){const ee=$e.get(N);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(N,k=0,ee=0){O=N,ie=k,H=ee;let te=!0,Y=null,Te=!1,Ce=!1;if(N){const Pe=$e.get(N);Pe.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(B.FRAMEBUFFER,null),te=!1):Pe.__webglFramebuffer===void 0?et.setupRenderTarget(N):Pe.__hasExternalTextures&&et.rebindTextures(N,$e.get(N.texture).__webglTexture,$e.get(N.depthTexture).__webglTexture);const ze=N.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ce=!0);const Je=$e.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?Y=Je[k][ee]:Y=Je[k],Te=!0):N.samples>0&&et.useMultisampledRTT(N)===!1?Y=$e.get(N).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,w.copy(N.viewport),G.copy(N.scissor),ce=N.scissorTest}else w.copy(be).multiplyScalar(W).floor(),G.copy(U).multiplyScalar(W).floor(),ce=ne;if(Ge.bindFramebuffer(B.FRAMEBUFFER,Y)&&te&&Ge.drawBuffers(N,Y),Ge.viewport(w),Ge.scissor(G),Ge.setScissorTest(ce),Te){const Pe=$e.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,ee)}else if(Ce){const Pe=$e.get(N.texture),ze=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,ee||0,ze)}J=-1},this.readRenderTargetPixels=function(N,k,ee,te,Y,Te,Ce){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$e.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){Ge.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const Pe=N.texture,ze=Pe.format,Je=Pe.type;if(!yt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=N.width-te&&ee>=0&&ee<=N.height-Y&&B.readPixels(k,ee,te,Y,Ye.convert(ze),Ye.convert(Je),Te)}finally{const Pe=O!==null?$e.get(O).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(N,k,ee,te,Y,Te,Ce){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=$e.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){Ge.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const Pe=N.texture,ze=Pe.format,Je=Pe.type;if(!yt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=N.width-te&&ee>=0&&ee<=N.height-Y){const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(k,ee,te,Y,Ye.convert(ze),Ye.convert(Je),0),B.flush();const ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await tS(B,ct,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te)}finally{B.deleteBuffer(qe),B.deleteSync(ct)}return Te}}finally{const Pe=O!==null?$e.get(O).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(N,k=null,ee=0){N.isTexture!==!0&&(Bl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,N=arguments[1]);const te=Math.pow(2,-ee),Y=Math.floor(N.image.width*te),Te=Math.floor(N.image.height*te),Ce=k!==null?k.x:0,Oe=k!==null?k.y:0;et.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Ce,Oe,Y,Te),Ge.unbindTexture()},this.copyTextureToTexture=function(N,k,ee=null,te=null,Y=0){N.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,N=arguments[1],k=arguments[2],Y=arguments[3]||0,ee=null);let Te,Ce,Oe,Pe,ze,Je;ee!==null?(Te=ee.max.x-ee.min.x,Ce=ee.max.y-ee.min.y,Oe=ee.min.x,Pe=ee.min.y):(Te=N.image.width,Ce=N.image.height,Oe=0,Pe=0),te!==null?(ze=te.x,Je=te.y):(ze=0,Je=0);const qe=Ye.convert(k.format),ct=Ye.convert(k.type);et.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const At=B.getParameter(B.UNPACK_ROW_LENGTH),Ft=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_n=B.getParameter(B.UNPACK_SKIP_PIXELS),_t=B.getParameter(B.UNPACK_SKIP_ROWS),Ve=B.getParameter(B.UNPACK_SKIP_IMAGES),Xt=N.isCompressedTexture?N.mipmaps[Y]:N.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pe),N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,ze,Je,Te,Ce,qe,ct,Xt.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,ze,Je,Xt.width,Xt.height,qe,Xt.data):B.texSubImage2D(B.TEXTURE_2D,Y,ze,Je,Te,Ce,qe,ct,Xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,At),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_n),B.pixelStorei(B.UNPACK_SKIP_ROWS,_t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve),Y===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(N,k,ee=null,te=null,Y=0){N.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,N=arguments[2],k=arguments[3],Y=arguments[4]||0);let Te,Ce,Oe,Pe,ze,Je,qe,ct,At;const Ft=N.isCompressedTexture?N.mipmaps[Y]:N.image;ee!==null?(Te=ee.max.x-ee.min.x,Ce=ee.max.y-ee.min.y,Oe=ee.max.z-ee.min.z,Pe=ee.min.x,ze=ee.min.y,Je=ee.min.z):(Te=Ft.width,Ce=Ft.height,Oe=Ft.depth,Pe=0,ze=0,Je=0),te!==null?(qe=te.x,ct=te.y,At=te.z):(qe=0,ct=0,At=0);const _n=Ye.convert(k.format),_t=Ye.convert(k.type);let Ve;if(k.isData3DTexture)et.setTexture3D(k,0),Ve=B.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)et.setTexture2DArray(k,0),Ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Xt=B.getParameter(B.UNPACK_ROW_LENGTH),gt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yt=B.getParameter(B.UNPACK_SKIP_PIXELS),sn=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je),N.isDataTexture||N.isData3DTexture?B.texSubImage3D(Ve,Y,qe,ct,At,Te,Ce,Oe,_n,_t,Ft.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,Y,qe,ct,At,Te,Ce,Oe,_n,Ft.data):B.texSubImage3D(Ve,Y,qe,ct,At,Te,Ce,Oe,_n,_t,Ft),B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Y===0&&k.generateMipmaps&&B.generateMipmap(Ve),Ge.unbindTexture()},this.initRenderTarget=function(N){$e.get(N).__webglFramebuffer===void 0&&et.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?et.setTextureCube(N,0):N.isData3DTexture?et.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?et.setTexture2DArray(N,0):et.setTexture2D(N,0),Ge.unbindTexture()},this.resetState=function(){ie=0,H=0,O=null,Ge.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===vh?"display-p3":"srgb",i.unpackColorSpace=bt.workingColorSpace===Fc?"display-p3":"srgb"}}class fA extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class hA extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function pA(){const o=si.useRef(null),t=si.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null});return si.useEffect(()=>{if(!o.current)return;const i=o.current,s=t.current,c=`
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,d=`
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
    `,h=()=>{s.scene=new fA,s.renderer=new dA({canvas:i,alpha:!0,antialias:!0}),s.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.renderer.setClearColor(new Rt(1057326),1),s.camera=new Ox(-1,1,1,-1,0,1),s.uniforms={resolution:{value:[i.clientWidth,i.clientHeight]},time:{value:0},xScale:{value:1.28},yScale:{value:.24},distortion:{value:.08}};const m=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],x=new Ha;x.setAttribute("position",new vi(new Float32Array(m),3));const y=new hA({vertexShader:c,fragmentShader:d,uniforms:s.uniforms,side:Ti});s.mesh=new Ni(x,y),s.scene.add(s.mesh),g()},p=()=>{s.uniforms&&(s.uniforms.time.value+=.0045),s.renderer&&s.scene&&s.camera&&s.renderer.render(s.scene,s.camera),s.animationId=requestAnimationFrame(p)},g=()=>{if(!s.renderer||!s.uniforms)return;const m=i.getBoundingClientRect(),x=Math.max(1,Math.floor(m.width)),y=Math.max(1,Math.floor(m.height));s.renderer.setSize(x,y,!1),s.uniforms.resolution.value=[x,y]};return h(),p(),window.addEventListener("resize",g),()=>{var m,x;s.animationId&&cancelAnimationFrame(s.animationId),window.removeEventListener("resize",g),s.mesh&&((m=s.scene)==null||m.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material instanceof Xl&&s.mesh.material.dispose()),(x=s.renderer)==null||x.dispose()}},[]),r.jsx("canvas",{ref:o,className:"hero-shader-canvas","aria-hidden":"true"})}const mA=[{label:"Education",href:"/education",links:[]},{label:"Experience",href:"/en/experience-passport.php",links:[["Marketplace","/business-club"]]},{label:"Entrepreneur",href:"/entrepreneur",links:[]},{label:"Enterprise",href:"/economy",links:[["Business Ecosystem","/en/business-club.php"],["Become a partner","/partner"],["Investor","/investor"],["Service and Product","/en/services-products.php"]]},{label:"Environment",href:"/environment",links:[["Sustainability","/en/environment.php"],["Projects","/en/projects.php"]]}];function na({loginHref:o="#login",languagePage:t="index.php"}){return r.jsx("header",{className:"site-header",children:r.jsxs("nav",{className:"nav","aria-label":"Primary navigation",children:[r.jsx("a",{className:"brand",href:"/en/index.php",children:r.jsx("img",{className:"header-logo",src:"/images/logo.png",alt:"EI.one"})}),r.jsxs("div",{className:"nav-links",children:[r.jsx("a",{href:"/en/index.php",children:"Home"}),mA.map(i=>i.links.length?r.jsxs("div",{className:"nav-item has-submenu",children:[r.jsxs("a",{href:i.href,children:[i.label," ",r.jsx("i",{className:"fa-solid fa-chevron-down","aria-hidden":"true"})]}),r.jsx("div",{className:"submenu",children:i.links.map(([s,c])=>r.jsx("a",{href:c,children:s},s))})]},i.label):r.jsx("a",{href:i.href,children:i.label},i.label)),r.jsx("a",{href:"/about",children:"About"})]}),r.jsx("a",{className:"button secondary",href:o,children:"Login"}),r.jsxs("div",{className:"lang has-submenu","aria-label":"Language selector",children:[r.jsxs("button",{type:"button",children:["EN ",r.jsx("i",{className:"fa-solid fa-caret-down","aria-hidden":"true"})]}),r.jsxs("div",{className:"submenu lang-menu",children:[r.jsx("a",{href:`/de/${t}`,children:"DE"}),r.jsx("a",{href:`/it/${t}`,children:"IT"}),r.jsx("a",{href:`/fr/${t}`,children:"FR"}),r.jsx("a",{href:`/en/${t}`,children:"EN"})]})]})]})})}function ia(){return r.jsx("footer",{className:"site-footer",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"footer-grid",children:[r.jsxs("div",{className:"footer-about",children:[r.jsx("a",{className:"footer-logo",href:"/en/index.php","aria-label":"ei.one",children:r.jsx("img",{src:"/images/logo.png",alt:"ei.one"})}),r.jsx("p",{children:"ei.one - The ecosystem where people build real experience and companies grow by hiring on what people can actually do."})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Companies"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"/business-club",children:"Business Ecosystem"})}),r.jsx("li",{children:r.jsx("a",{href:"/partner",children:"Become a Partner"})}),r.jsx("li",{children:r.jsx("a",{href:"/sponsor",children:"Sponsor"})}),r.jsx("li",{children:r.jsx("a",{href:"/investors",children:"Investors"})}),r.jsx("li",{children:r.jsx("a",{href:"/services-products",children:"Services & Products"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Talents"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"/experience-passport",children:"Experience Identity"})}),r.jsx("li",{children:r.jsx("a",{href:"/academy",children:"Academy"})}),r.jsx("li",{children:r.jsx("a",{href:"/recruitment",children:"Recruitment"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Ecosystem"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"/about",children:"About Us"})}),r.jsx("li",{children:r.jsx("a",{href:"/education",children:"Education"})}),r.jsx("li",{children:r.jsx("a",{href:"/economy",children:"Economy"})}),r.jsx("li",{children:r.jsx("a",{href:"/environment",children:"Environment"})}),r.jsx("li",{children:r.jsx("a",{href:"/projects",children:"Projects"})}),r.jsx("li",{children:r.jsx("a",{href:"/contact",children:"Contact"})})]})]})]}),r.jsxs("div",{className:"footer-contact",children:[r.jsx("h3",{children:"Contact"}),r.jsxs("p",{children:[r.jsx("strong",{children:"ei.one"}),r.jsx("br",{}),"Netmaster (Schweiz) AG",r.jsx("br",{}),"Toedistrasse 56",r.jsx("br",{}),"CH - 8810 Horgen"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Tel:"})," +41 44 542 47 47"]})]}),r.jsxs("div",{className:"copyright",children:[r.jsx("span",{children:"Copyright 2026 ei.one - Ecosystem Intelligence. All rights reserved."}),r.jsxs("span",{className:"footer-legal",children:[r.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"}),r.jsx("a",{href:"/terms-and-conditions",children:"Terms and Conditions"})]})]})]})})}function ds(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function gA(){return si.useEffect(()=>{const o="Education - EI.one School Ecosystem & Academy",t="EI.one Education connects school ecosystems, academy journeys and verified experiences so learning becomes visible, attestable and useful for future opportunities.";document.title=o,ds("description",t),ds("keywords","EI.one education, school ecosystem, academy, experience identity, verified learning, talents, skills"),ds("og:title",o,"property"),ds("og:description",t,"property"),ds("og:url","https://ei.one/en/education","property"),ds("twitter:title",o),ds("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/education")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"#education-login",languagePage:"education.php"}),r.jsxs("main",{className:"education-page",children:[r.jsx("section",{className:"education-hero",children:r.jsxs("div",{className:"wrap education-hero-grid",children:[r.jsxs("div",{children:[r.jsx("p",{className:"education-kicker",children:"Schools"}),r.jsx("h1",{children:"Turn experience into growth of relevance."}),r.jsx("p",{children:"Transform your students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge with companies. Your students' experiences become your prestige."})]}),r.jsxs("div",{className:"education-hero-card",id:"education-login",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=84",alt:"Students collaborating in a bright learning environment"}),r.jsxs("div",{children:[r.jsx("strong",{children:"School Ecosystem"}),r.jsx("span",{children:"Learning, mentoring, projects and verified experiences connected in one growth path."})]})]})]})}),r.jsx("section",{className:"human-center",children:r.jsxs("div",{className:"wrap human-center-grid",children:[r.jsxs("div",{className:"human-center-copy",children:[r.jsx("h2",{children:"The Human at the Center"}),r.jsx("p",{children:"Humans are at the center of every sustainable development. For us, social sustainability means combining economic progress with responsibility towards people, communities, and future generations."}),r.jsx("p",{children:"At EI.one, we believe that sustainable innovation can only emerge when people have access to knowledge, education, and new opportunities. That is why we promote a corporate culture based on collaboration, trust, diversity, and personal development."})]}),r.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[r.jsx("img",{src:"/images/human-at-center.png",alt:"People collaborating around a table in a bright learning community"}),r.jsx("div",{className:"human-center-glow"})]})]})}),r.jsx("section",{className:"education-pillars",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"education-section-head",children:[r.jsx("h2",{children:"Education & Networking"}),r.jsx("p",{children:"Our ecosystem connects companies, talents, educational institutions, and experts to share knowledge and create new opportunities."})]}),r.jsxs("div",{className:"education-pillar-grid",children:[r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),r.jsx("h3",{children:"Education Initiatives"}),r.jsx("p",{children:"Continuous development and skill building."})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-users-viewfinder","aria-hidden":"true"}),r.jsx("h3",{children:"Talent Promotion"}),r.jsx("p",{children:"Helping people reach their full potential."})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-handshake-simple","aria-hidden":"true"}),r.jsx("h3",{children:"Cooperation"}),r.jsx("p",{children:"Innovation through collaboration across borders."})]})]})]})}),r.jsx("section",{className:"human-center",children:r.jsxs("div",{className:"wrap human-center-grid",children:[r.jsxs("div",{className:"human-center-copy",children:[r.jsx("h2",{children:"Inclusive & Human Economy"}),r.jsx("p",{children:"Social sustainability for us also means promoting new forms of collaboration. In an increasingly connected world, innovation and progress no longer arise in isolation but through cooperation between people, companies, and organizations."}),r.jsx("p",{children:"EI.one supports this development through a globally oriented network that brings together talents, ideas, and projects. Our goal is to promote an economy that is human, inclusive, and future-oriented."})]}),r.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[r.jsx("img",{src:"/images/inclusive.jpg",alt:"inclusive and human economy"}),r.jsx("div",{className:"human-center-glow"})]})]})}),r.jsx("section",{className:"education-cta",children:r.jsxs("div",{className:"wrap education-cta-box",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Developing Solutions Together"}),r.jsx("p",{children:"Become part of a community based on trust and human growth."})]}),r.jsxs("div",{className:"education-actions",children:[r.jsx("a",{className:"button secondary",href:"/en/talent.php",children:"Become a Talent"}),r.jsx("a",{className:"button",href:"/en/contact.php",children:"Contact"})]})]})})]}),r.jsx(ia,{})]})}function fs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function vA(){return si.useEffect(()=>{const o="Experience Passport - EI.one Experience Identity",t="The EI.one Experience Passport turns real work, learning, mentoring and projects into verified proof of what people can actually do.";document.title=o,fs("description",t),fs("keywords","EI.one experience passport, experience identity, verified experience, talent profile, skills proof"),fs("og:title",o,"property"),fs("og:description",t,"property"),fs("og:url","https://ei.one/en/experience-passport","property"),fs("twitter:title",o),fs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/experience-passport")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"#experience-login",languagePage:"experience-passport.php"}),r.jsxs("main",{className:"experience-page",children:[r.jsx("section",{className:"experience-hero",children:r.jsxs("div",{className:"wrap experience-hero-grid",children:[r.jsxs("div",{className:"experience-hero-copy",children:[r.jsx("h1",{children:"Experience Identity"}),r.jsx("p",{children:"Your digital record of what you've actually done. Verified by the companies who had you do it, anchored on the blockchain as a credential that belongs to you forever."}),r.jsx("p",{className:"experience-quote",children:'"Your experiences build your future."'})]}),r.jsxs("div",{className:"experience-proof-map",id:"experience-login","aria-label":"Experience Identity proof flow",children:[r.jsxs("div",{className:"proof-orbit",children:[r.jsx("span",{className:"proof-core",children:r.jsx("i",{className:"fa-solid fa-fingerprint","aria-hidden":"true"})}),r.jsxs("span",{className:"proof-node work",children:[r.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),r.jsx("strong",{children:"Work"})]}),r.jsxs("span",{className:"proof-node learn",children:[r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),r.jsx("strong",{children:"Learn"})]}),r.jsxs("span",{className:"proof-node mentor",children:[r.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),r.jsx("strong",{children:"Mentor"})]})]}),r.jsxs("div",{className:"proof-lines",children:[r.jsxs("div",{children:[r.jsx("span",{children:"01"}),r.jsx("strong",{children:"Do real work"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"02"}),r.jsx("strong",{children:"Get it verified"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"03"}),r.jsx("strong",{children:"Build your future"})]})]})]})]})}),r.jsx("section",{className:"human-center",children:r.jsxs("div",{className:"wrap human-center-grid",children:[r.jsxs("div",{className:"human-center-copy",children:[r.jsx("h2",{children:"The CV is broken. The Identity fixes it."}),r.jsx("p",{children:"A CV says whatever you want it to. It also says very little of substance: job titles, years, keywords. In the age of the AI transition, that's not enough for anyone â€” not for job seekers, not for employers."}),r.jsx("p",{children:"The Experience Identity is different. Every experience you add is attested by whoever had you do it â€” a company in the ecosystem, an Academy partner, a real project. What people see is your actual work, not your self-promotion."})]}),r.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[r.jsx("img",{src:"/images/identity.jpg",alt:"identity"}),r.jsx("div",{className:"human-center-glow"})]})]})}),r.jsx("section",{className:"education-pillars",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"education-section-head",children:[r.jsx("h2",{children:"How it works"}),r.jsx("p",{children:"Three steps to build a Identity that actually shows what you can do."})]}),r.jsxs("div",{className:"education-pillar-grid",children:[r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-fingerprint"}),r.jsx("span",{className:"training-step",children:"01"}),r.jsx("h3",{children:"Create your Identity"}),r.jsx("p",{children:"A unique digital profile with a shareable link. It's yours, it follows you across your whole working life, no matter where you work."})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-layer-group"}),r.jsx("span",{className:"training-step",children:"02"}),r.jsx("h3",{children:"Collect verified experience"}),r.jsx("p",{children:"Every experience at an ecosystem company is attested by whoever had you do it and recorded on the blockchain as an immutable credential. Attachments, roles, results â€” all verifiable."})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-share-nodes"}),r.jsx("span",{className:"training-step",children:"03"}),r.jsx("h3",{children:"Share when it counts"}),r.jsx("p",{children:"Choose field by field what's public, what's private, what's visible only to people with the link. You decide who sees what."})]})]})]})}),r.jsx("section",{className:"identity-inputs","aria-labelledby":"identity-inputs-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"identity-inputs-head",children:[r.jsx("h2",{id:"identity-inputs-title",children:"What you can put in the Identity"}),r.jsx("p",{children:"Concrete experience, not generic keywords."})]}),r.jsxs("div",{className:"identity-inputs-grid",children:[r.jsxs("article",{className:"identity-input-card work",children:[r.jsx("span",{className:"identity-card-number",children:"01"}),r.jsx("span",{className:"identity-input-icon",children:r.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"})}),r.jsx("h3",{children:"Work experience"}),r.jsx("p",{children:"Roles, projects, responsibilities at ecosystem companies."})]}),r.jsxs("article",{className:"identity-input-card academy",children:[r.jsx("span",{className:"identity-card-number",children:"02"}),r.jsx("span",{className:"identity-input-icon",children:r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),r.jsx("h3",{children:"Academy tracks"}),r.jsx("p",{children:"Courses and training completed with sponsors and learning partners."})]}),r.jsxs("article",{className:"identity-input-card projects",children:[r.jsx("span",{className:"identity-card-number",children:"03"}),r.jsx("span",{className:"identity-input-icon",children:r.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),r.jsx("h3",{children:"Projects"}),r.jsx("p",{children:"Work delivered, with results, duration and the role you played."})]}),r.jsxs("article",{className:"identity-input-card skills",children:[r.jsx("span",{className:"identity-card-number",children:"04"}),r.jsx("span",{className:"identity-input-icon",children:r.jsx("i",{className:"fa-solid fa-language","aria-hidden":"true"})}),r.jsx("h3",{children:"Skills & languages"}),r.jsx("p",{children:"Technical skills, soft skills, languages - linked to the experience that proves them."})]})]})]})}),r.jsx("section",{className:"identity-difference","aria-labelledby":"identity-difference-title",children:r.jsxs("div",{className:"wrap",children:[r.jsx("div",{className:"identity-difference-head",children:r.jsx("h2",{id:"identity-difference-title",children:"Why it's different"})}),r.jsxs("div",{className:"identity-difference-grid",children:[r.jsxs("article",{children:[r.jsx("span",{className:"difference-line"}),r.jsx("span",{className:"difference-icon",children:r.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),r.jsx("h3",{children:"Verified at the source, signed on-chain"}),r.jsx("p",{children:"Every experience is attested by whoever had you do it and anchored on the blockchain as a verifiable credential. Not words, cryptographic proof."})]}),r.jsxs("article",{children:[r.jsx("span",{className:"difference-line"}),r.jsx("span",{className:"difference-icon",children:r.jsx("i",{className:"fa-solid fa-user-lock","aria-hidden":"true"})}),r.jsx("h3",{children:"Under your control"}),r.jsx("p",{children:"You decide what's public, what's private and what's visible only via a shared link."})]}),r.jsxs("article",{children:[r.jsx("span",{className:"difference-line"}),r.jsx("span",{className:"difference-icon",children:r.jsx("i",{className:"fa-solid fa-infinity","aria-hidden":"true"})}),r.jsx("h3",{children:"For your whole career"}),r.jsx("p",{children:"The Identity follows you from one role to the next. It grows with you, even if you change company."})]})]})]})}),r.jsx("section",{className:"ecosystem-connect","aria-labelledby":"ecosystem-connect-title",children:r.jsxs("div",{className:"wrap ecosystem-connect-grid",children:[r.jsxs("div",{className:"ecosystem-connect-media",children:[r.jsx("img",{src:"/images/connected-ecosystem.jpeg",alt:"ecosystem workspace"}),r.jsxs("div",{className:"ecosystem-connect-badge",children:[r.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),"Identity connects the ecosystem"]})]}),r.jsxs("div",{className:"ecosystem-connect-copy",children:[r.jsx("h2",{id:"ecosystem-connect-title",children:"Connected to the rest of the ecosystem"}),r.jsx("p",{children:"The Identity isn't an isolated page. It's where the two doors of ei.one meet."}),r.jsxs("div",{className:"ecosystem-connection-list",children:[r.jsxs("article",{children:[r.jsx("span",{className:"ecosystem-connection-icon",children:r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),r.jsx("strong",{children:"Academy"}),r.jsx("p",{children:"when you finish a learning track, the experience lands straight in your Identity"}),r.jsx("em",{children:"coming soon"})]}),r.jsxs("article",{children:[r.jsx("span",{className:"ecosystem-connection-icon",children:r.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),r.jsx("strong",{children:"Recruitment"}),r.jsx("p",{children:"companies search on the experience in your Identity, not on CVs"}),r.jsx("em",{children:"coming soon"})]}),r.jsxs("article",{children:[r.jsx("span",{className:"ecosystem-connection-icon",children:r.jsx("i",{className:"fa-solid fa-people-group","aria-hidden":"true"})}),r.jsx("strong",{children:"Business Ecosystem"}),r.jsx("p",{children:"the ecosystem companies attest the experience you've built working with them"})]})]})]})]})}),r.jsx("section",{className:"identity-start","aria-labelledby":"identity-start-title",children:r.jsxs("div",{className:"wrap identity-start-grid",children:[r.jsxs("div",{className:"identity-start-copy",children:[r.jsx("h2",{id:"identity-start-title",children:"Start building your Identity."}),r.jsx("p",{children:"Open the app, sign up and start adding your first experiences."}),r.jsxs("div",{className:"identity-start-actions",children:[r.jsx("a",{className:"button identity-primary",href:"/register",children:"Create your Identity"}),r.jsx("a",{className:"button identity-login",href:"/login",children:"Log in"}),r.jsx("a",{className:"button identity-outline",href:"/talent",children:"Back to Talent"})]})]}),r.jsxs("div",{className:"identity-start-preview","aria-hidden":"true",children:[r.jsx("span",{className:"identity-start-dot"}),r.jsxs("div",{children:[r.jsx("strong",{children:"01"}),r.jsx("span",{children:"Create Identity"})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"02"}),r.jsx("span",{children:"Add experience"})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"03"}),r.jsx("span",{children:"Share proof"})]})]})]})})]}),r.jsx(ia,{})]})}function hs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function xA(){return si.useEffect(()=>{const o="Enterprise - EI.one Economic Sustainability",t="EI.one Enterprise turns internships, project work and mentoring into verified talent, trusted partnerships and business growth.";document.title=o,hs("description",t),hs("keywords","EI.one enterprise, economy, business ecosystem, verified talent, economic sustainability, business growth"),hs("og:title",o,"property"),hs("og:description",t,"property"),hs("og:url","https://ei.one/en/economy","property"),hs("twitter:title",o),hs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/economy")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"/login",languagePage:"economy.php"}),r.jsxs("main",{className:"economy-page",children:[r.jsx("section",{className:"economy-hero",children:r.jsxs("div",{className:"wrap economy-hero-grid",children:[r.jsxs("div",{className:"economy-hero-copy",children:[r.jsx("h1",{children:"Enterprise"}),r.jsx("h2",{children:"Turn experience into business growth."}),r.jsx("p",{children:"Internships, project work and mentoring become a channel of verified talent, trusted partnerships and a qualified commercial network. Your experiences attract the best. The best grow your business."}),r.jsxs("div",{className:"economy-hero-actions",children:[r.jsx("a",{className:"button",href:"/en/business-club.php",children:"Enter Business Ecosystem"}),r.jsx("a",{className:"button secondary",href:"/en/partner.php",children:"Become a Partner"})]})]}),r.jsxs("div",{className:"economy-hero-visual","aria-label":"Business growth ecosystem preview",children:[r.jsxs("div",{className:"economy-growth-card main",children:[r.jsx("span",{children:r.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),r.jsx("strong",{children:"Business growth"})]}),r.jsxs("div",{className:"economy-growth-card talent",children:[r.jsx("span",{children:r.jsx("i",{className:"fa-solid fa-user-check","aria-hidden":"true"})}),r.jsx("strong",{children:"Verified talent"})]}),r.jsxs("div",{className:"economy-growth-card network",children:[r.jsx("span",{children:r.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),r.jsx("strong",{children:"Trusted partnerships"})]}),r.jsx("div",{className:"economy-orbit one"}),r.jsx("div",{className:"economy-orbit two"})]})]})}),r.jsx("section",{className:"economic-thinking","aria-labelledby":"economic-thinking-title",children:r.jsxs("div",{className:"wrap economic-thinking-grid",children:[r.jsxs("div",{className:"economic-thinking-copy",children:[r.jsx("h2",{id:"economic-thinking-title",children:"New Economic Thinking"}),r.jsx("p",{children:"For us, economic sustainability means more than just financial success. It stands for stable, resilient, and long-term viable business models that promote innovation, use resources efficiently, and simultaneously make a positive contribution to society."}),r.jsx("p",{children:"At EI.one - Ecosystem Intelligence, we develop an intelligent ecosystem that connects companies, technologies, talents, and investors. Our goal is to support organizations in creating sustainable value, opening new markets, and strengthening their competitiveness in the long term."}),r.jsxs("div",{className:"economic-thinking-tags",children:[r.jsx("span",{children:"Stable models"}),r.jsx("span",{children:"Efficient resources"}),r.jsx("span",{children:"New markets"})]})]}),r.jsxs("div",{className:"economic-thinking-media",children:[r.jsx("img",{src:"/images/economic-thinking.jpg",alt:"Digital economic sustainability and business innovation concept"}),r.jsxs("div",{className:"economic-thinking-stat",children:[r.jsx("strong",{children:"Long-term value"}),r.jsx("span",{children:"companies + technologies + talents + investors"})]})]})]})}),r.jsx("section",{className:"technology-strategy","aria-labelledby":"technology-strategy-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"technology-strategy-head",children:[r.jsx("h2",{id:"technology-strategy-title",children:"Technology & Strategy"}),r.jsx("p",{children:"By combining digitalization, platform economy, artificial intelligence, and strategic networks, we enable more efficient work and faster innovation."})]}),r.jsxs("div",{className:"technology-system",children:[r.jsxs("div",{className:"technology-system-hub",children:[r.jsx("span",{children:r.jsx("i",{className:"fa-solid fa-wand-magic-sparkles","aria-hidden":"true"})}),r.jsx("strong",{children:"Faster innovation"}),r.jsx("small",{children:"Technology, networks and resilience working as one operating system."})]}),r.jsxs("article",{className:"technology-system-node digitalization",children:[r.jsx("span",{className:"strategy-icon",children:r.jsx("i",{className:"fa-solid fa-microchip","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Digitalization"}),r.jsx("p",{children:"Optimization of processes through cutting-edge technologies."})]})]}),r.jsxs("article",{className:"technology-system-node networks",children:[r.jsx("span",{className:"strategy-icon",children:r.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Networks"}),r.jsx("p",{children:"Strategic connections for collective growth."})]})]}),r.jsxs("article",{className:"technology-system-node resilience",children:[r.jsx("span",{className:"strategy-icon",children:r.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Resilience"}),r.jsx("p",{children:"Stability even in times of global change."})]})]})]})]})}),r.jsx("section",{className:"future-proof","aria-labelledby":"future-proof-title",children:r.jsxs("div",{className:"wrap future-proof-grid",children:[r.jsxs("div",{className:"future-proof-copy",children:[r.jsx("h2",{id:"future-proof-title",children:"Future-Proof Systems"}),r.jsx("p",{children:"Economic sustainability for us means creating systems that remain stable even in times of uncertainty and global change. Companies should not only grow but continuously evolve and become resilient to change."}),r.jsxs("div",{className:"future-proof-statement",children:[r.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),r.jsx("span",{children:"EI.one stands for a new generation of economic systems - intelligent, connected, and sustainable."})]})]}),r.jsxs("div",{className:"future-proof-media",children:[r.jsx("img",{src:"/images/future-proof.jpeg",alt:"Future-proof connected system network"}),r.jsxs("div",{className:"future-proof-signals","aria-hidden":"true",children:[r.jsx("span",{children:"Stable"}),r.jsx("span",{children:"Connected"}),r.jsx("span",{children:"Sustainable"})]})]})]})}),r.jsx("section",{className:"economy-final-cta","aria-labelledby":"economy-final-title",children:r.jsx("div",{className:"wrap economy-final-grid",children:r.jsxs("div",{className:"economy-final-copy",children:[r.jsx("h2",{id:"economy-final-title",children:"Ready for the Economy of the Future?"}),r.jsx("p",{children:"Become part of an ecosystem that generates innovation and sustainable added value."}),r.jsxs("div",{className:"economy-final-actions",children:[r.jsx("a",{className:"button economy-final-primary",href:"/en/partner.php",children:"Become a Partner"}),r.jsx("a",{className:"button economy-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})})]}),r.jsx(ia,{})]})}function ps(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function _A(){return si.useEffect(()=>{const o="Environment - EI.one Ecological Sustainability",t="EI.one Environment combines innovation, renewable energies and measurable projects so environmental sustainability becomes an operational choice.";document.title=o,ps("description",t),ps("keywords","EI.one environment, ecological sustainability, renewable energies, measurable projects, sustainable innovation"),ps("og:title",o,"property"),ps("og:description",t,"property"),ps("og:url","https://ei.one/en/environment","property"),ps("twitter:title",o),ps("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/environment")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"/login",languagePage:"environment.php"}),r.jsxs("main",{className:"environment-page",children:[r.jsx("section",{className:"environment-hero",children:r.jsxs("div",{className:"wrap environment-hero-grid",children:[r.jsxs("div",{className:"environment-hero-copy",children:[r.jsx("h1",{children:"Environment"}),r.jsx("p",{children:"Innovation and renewable energies with measurable projects. Environmental sustainability as an operational choice, not as a slogan."}),r.jsxs("div",{className:"environment-hero-actions",children:[r.jsx("a",{className:"button",href:"/en/projects.php",children:"Discover Projects"}),r.jsx("a",{className:"button secondary",href:"/en/contact.php",children:"Contact"})]})]}),r.jsxs("div",{className:"environment-hero-visual","aria-label":"Ecological sustainability system preview",children:[r.jsxs("div",{className:"environment-core",children:[r.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),r.jsx("strong",{children:"Operational sustainability"})]}),r.jsxs("div",{className:"environment-node energy",children:[r.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"}),r.jsx("span",{children:"Renewable energy"})]}),r.jsxs("div",{className:"environment-node projects",children:[r.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),r.jsx("span",{children:"Measurable projects"})]}),r.jsxs("div",{className:"environment-node impact",children:[r.jsx("i",{className:"fa-solid fa-chart-simple","aria-hidden":"true"}),r.jsx("span",{children:"Visible impact"})]})]})]})}),r.jsx("section",{className:"protect-environment","aria-labelledby":"protect-environment-title",children:r.jsxs("div",{className:"wrap protect-environment-grid",children:[r.jsxs("div",{className:"protect-environment-copy",children:[r.jsx("h2",{id:"protect-environment-title",children:"Protecting Our Environment"}),r.jsx("p",{children:"Protecting our environment is one of the central challenges of the 21st century. For us, ecological sustainability means using natural resources responsibly, using energy efficiently, and developing technologies that reduce the ecological footprint of our economy."}),r.jsx("p",{children:"At EI.one, we combine technological innovation with ecological awareness. Our approach is based on the conviction that sustainable solutions are not only necessary but also offer enormous opportunities for the economy, society, and innovation."}),r.jsxs("div",{className:"protect-environment-points",children:[r.jsx("span",{children:"Responsible resources"}),r.jsx("span",{children:"Efficient energy"}),r.jsx("span",{children:"Reduced footprint"})]})]}),r.jsxs("div",{className:"protect-environment-media",children:[r.jsx("img",{src:"/images/ecological-sustainability.jpg",alt:"Ecological sustainability tree with technology and people"}),r.jsxs("div",{className:"protect-environment-badge",children:[r.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),"Ecology meets innovation"]})]})]})}),r.jsx("section",{className:"sustainable-solutions","aria-labelledby":"sustainable-solutions-title",children:r.jsxs("div",{className:"wrap sustainable-solutions-grid",children:[r.jsxs("div",{className:"sustainable-solutions-intro",children:[r.jsx("h2",{id:"sustainable-solutions-title",children:"Sustainable Solutions"}),r.jsx("p",{children:"Through projects in the fields of renewable energy and energy efficiency, we support companies in making their processes more environmentally friendly."})]}),r.jsxs("div",{className:"sustainable-path",children:[r.jsxs("article",{children:[r.jsx("span",{className:"solution-icon",children:r.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Renewable Energies"}),r.jsx("p",{children:"Focus on climate-friendly energy systems."})]})]}),r.jsxs("article",{children:[r.jsx("span",{className:"solution-icon",children:r.jsx("i",{className:"fa-solid fa-building-shield","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Intelligent Infrastructure"}),r.jsx("p",{children:"Efficient and resource-saving buildings."})]})]}),r.jsxs("article",{children:[r.jsx("span",{className:"solution-icon",children:r.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Resource Preservation"}),r.jsx("p",{children:"Reducing the ecological footprint."})]})]})]})]})}),r.jsx("section",{className:"ecological-progress","aria-labelledby":"ecological-progress-title",children:r.jsxs("div",{className:"wrap ecological-progress-grid",children:[r.jsxs("div",{className:"ecological-progress-copy",children:[r.jsx("h2",{id:"ecological-progress-title",children:"Ecological Sustainability is Progress"}),r.jsx("p",{children:"For us, ecological sustainability does not mean renunciation, but progress. It stands for innovation, responsibility, and the possibility of combining economic development with the protection of our planet."}),r.jsx("p",{children:"El.one pursues the vision of a future where economy, technology, and environment are in balance -- an intelligent ecosystem that enables sustainable solutions."})]}),r.jsx("div",{className:"ecological-progress-visual",children:r.jsx("img",{src:"/images/circular-progress.png",alt:"Bright circular economy loop with renewable energy and recycled materials"})})]})}),r.jsx("section",{className:"environment-final-cta","aria-labelledby":"environment-final-title",children:r.jsxs("div",{className:"wrap environment-final-inner",children:[r.jsx("h2",{id:"environment-final-title",children:"Together for a Healthy Planet"}),r.jsx("p",{children:"Discover our projects for a climate-friendly economy."}),r.jsxs("div",{className:"environment-final-actions",children:[r.jsx("a",{className:"button environment-final-primary",href:"/en/projects.php",children:"Discover Projects"}),r.jsx("a",{className:"button environment-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})]}),r.jsx(ia,{})]})}function ms(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function yA(){return si.useEffect(()=>{const o="Partners - EI.one",t="Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem built for sustainable growth.";document.title=o,ms("description",t),ms("keywords","EI.one partner, franchise partner, license partner, white label partner, ecosystem partnership"),ms("og:title",o,"property"),ms("og:description",t,"property"),ms("og:url","https://ei.one/en/partner","property"),ms("twitter:title",o),ms("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/partner")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"/login",languagePage:"partner.php"}),r.jsxs("main",{className:"partner-page",children:[r.jsx("section",{className:"partner-hero",children:r.jsxs("div",{className:"wrap partner-hero-grid",children:[r.jsxs("div",{className:"partner-hero-copy",children:[r.jsx("h1",{children:"Partners"}),r.jsx("p",{children:"Building a sustainable future together. Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem."}),r.jsxs("div",{className:"partner-hero-actions",children:[r.jsx("a",{className:"button",href:"/en/contact.php",children:"Start a Partnership"}),r.jsx("a",{className:"button secondary",href:"/economy",children:"Explore Enterprise"})]})]}),r.jsxs("div",{className:"partner-hero-visual","aria-label":"EI.one partner ecosystem models",children:[r.jsxs("div",{className:"partner-core",children:[r.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),r.jsx("strong",{children:"Shared growth"})]}),r.jsx("div",{className:"partner-model franchise",children:r.jsx("strong",{children:"Franchise"})}),r.jsx("div",{className:"partner-model license",children:r.jsx("strong",{children:"License"})}),r.jsx("div",{className:"partner-model white-label",children:r.jsx("strong",{children:"White Label"})})]})]})}),r.jsx("section",{className:"partner-models","aria-labelledby":"partner-models-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"partner-models-head",children:[r.jsx("h2",{id:"partner-models-title",children:"Choose Your Model"}),r.jsx("p",{children:"Three ways to participate in the EI.one ecosystem, from full local leadership to modular activation and brand-integrated infrastructure."})]}),r.jsxs("div",{className:"partner-model-board",children:[r.jsxs("article",{className:"partner-option recommended",children:[r.jsx("span",{className:"partner-ribbon",children:"Recommended"}),r.jsx("div",{className:"partner-option-icon",children:r.jsx("i",{className:"fa-solid fa-building","aria-hidden":"true"})}),r.jsxs("div",{className:"partner-option-title",children:[r.jsx("h3",{children:"Franchise Partner"}),r.jsx("p",{children:"Build your Local Ecosystem"})]}),r.jsx("p",{children:"The Franchise Partner is the official EI.one representative in a territory. They manage and develop the local ecosystem, coordinating modules, partners, and clients."}),r.jsxs("div",{className:"partner-option-block",children:[r.jsx("h4",{children:"Who it's ideal for"}),r.jsxs("div",{className:"partner-tags",children:[r.jsx("span",{children:"Entrepreneurs"}),r.jsx("span",{children:"Regional Managers"}),r.jsx("span",{children:"Business Developers"}),r.jsx("span",{children:"Network Builders"})]})]}),r.jsxs("div",{className:"partner-option-block",children:[r.jsx("h4",{children:"What's included"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Exclusive territorial rights"}),r.jsx("li",{children:"Full EI.one brand"}),r.jsx("li",{children:"Access to all modules"}),r.jsx("li",{children:"Ongoing central support"}),r.jsx("li",{children:"Certified training"}),r.jsx("li",{children:"Governance system"})]})]}),r.jsx("a",{className:"button partner-option-button",href:"/en/contact.php",children:"Become a Franchise Partner"})]}),r.jsxs("article",{className:"partner-option",children:[r.jsx("div",{className:"partner-option-icon",children:r.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),r.jsxs("div",{className:"partner-option-title",children:[r.jsx("h3",{children:"License Partner"}),r.jsx("p",{children:"Activate a Module in the System"})]}),r.jsx("p",{children:"The License Partner uses one or more EI.one modules within their own company. They remain independent but operate according to ecosystem standards."}),r.jsxs("div",{className:"partner-option-block",children:[r.jsx("h4",{children:"Who it's ideal for"}),r.jsxs("div",{className:"partner-tags",children:[r.jsx("span",{children:"Existing companies"}),r.jsx("span",{children:"Consultants"}),r.jsx("span",{children:"Professional firms"}),r.jsx("span",{children:"Service providers"})]})]}),r.jsxs("div",{className:"partner-option-block",children:[r.jsx("h4",{children:"What's included"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Module usage license"}),r.jsx("li",{children:"Certified methodologies"}),r.jsx("li",{children:"Brand affiliation"}),r.jsx("li",{children:"Access to the network"}),r.jsx("li",{children:"Operational support"})]})]}),r.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Activate a License"})]}),r.jsxs("article",{className:"partner-option",children:[r.jsx("div",{className:"partner-option-icon",children:r.jsx("i",{className:"fa-solid fa-tag","aria-hidden":"true"})}),r.jsxs("div",{className:"partner-option-title",children:[r.jsx("h3",{children:"White Label Partner"}),r.jsx("p",{children:"Your Brand, Our Infrastructure"})]}),r.jsx("p",{children:'The White Label Partner uses EI.one technology, processes, and modules under their own brand. EI.one works "behind the scenes".'}),r.jsxs("div",{className:"partner-option-block",children:[r.jsx("h4",{children:"Who it's ideal for"}),r.jsxs("div",{className:"partner-tags",children:[r.jsx("span",{children:"Corporate"}),r.jsx("span",{children:"Large groups"}),r.jsx("span",{children:"International networks"}),r.jsx("span",{children:"Digital platforms"}),r.jsx("span",{children:"Industrial investors"})]})]}),r.jsxs("div",{className:"partner-option-block",children:[r.jsx("h4",{children:"What's included"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Customized system"}),r.jsx("li",{children:"Full infrastructure"}),r.jsx("li",{children:"Integrated modules"}),r.jsx("li",{children:"Strategic support"}),r.jsx("li",{children:"Global scalability"})]})]}),r.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Request White Label"})]})]})]})}),r.jsx("section",{className:"partner-comparison","aria-labelledby":"partner-comparison-title",children:r.jsxs("div",{className:"wrap",children:[r.jsx("div",{className:"partner-comparison-head",children:r.jsx("h2",{id:"partner-comparison-title",children:"Model Comparison"})}),r.jsx("div",{className:"comparison-table-wrap",children:r.jsxs("table",{className:"comparison-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{scope:"col",children:"Feature"}),r.jsx("th",{scope:"col",children:"Franchise"}),r.jsx("th",{scope:"col",children:"License"}),r.jsx("th",{scope:"col",children:"White Label"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{scope:"row",children:"EI.one Brand"}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status yes",children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status partial",children:[r.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Partial"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status no",children:[r.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),r.jsxs("tr",{children:[r.jsx("th",{scope:"row",children:"Territorial Rights"}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status yes",children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Exclusive"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status no",children:[r.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status no",children:[r.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),r.jsxs("tr",{children:[r.jsx("th",{scope:"row",children:"Operational Autonomy"}),r.jsx("td",{children:"Medium"}),r.jsx("td",{children:"High"}),r.jsx("td",{children:"Maximum"})]}),r.jsxs("tr",{children:[r.jsx("th",{scope:"row",children:"Module Access"}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status yes",children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status partial",children:[r.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Selected"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status yes",children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})})]}),r.jsxs("tr",{children:[r.jsx("th",{scope:"row",children:"Scalability"}),r.jsx("td",{children:"Very High"}),r.jsx("td",{children:"Medium"}),r.jsx("td",{children:"Maximum"})]}),r.jsxs("tr",{children:[r.jsx("th",{scope:"row",children:"Central Support"}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status yes",children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status yes",children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Operational"]})}),r.jsx("td",{children:r.jsxs("span",{className:"comparison-status yes",children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Strategic"]})})]})]})]})})]})}),r.jsx("section",{className:"partner-benefits","aria-labelledby":"partner-benefits-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"partner-benefits-head",children:[r.jsx("h2",{id:"partner-benefits-title",children:"Why Become an EI.one Partner"}),r.jsx("p",{children:"By joining the EI Generation, you gain access to an already structured, tested, and sustainable growth-oriented ecosystem."})]}),r.jsxs("div",{className:"partner-benefit-map",children:[r.jsxs("div",{className:"partner-benefit-core",children:[r.jsx("span",{children:"You are not just a partner."}),r.jsx("strong",{children:"You are a co-builder of the system."})]}),r.jsxs("article",{className:"partner-benefit-item",children:[r.jsx("span",{className:"partner-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-cubes","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Structured Ecosystem"}),r.jsx("p",{children:"Proven and functioning model"})]})]}),r.jsxs("article",{className:"partner-benefit-item",children:[r.jsx("span",{className:"partner-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-headset","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Continuous Support"}),r.jsx("p",{children:"Dedicated assistance always available"})]})]}),r.jsxs("article",{className:"partner-benefit-item",children:[r.jsx("span",{className:"partner-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Access to Projects"}),r.jsx("p",{children:"Real opportunities from the ecosystem"})]})]}),r.jsxs("article",{className:"partner-benefit-item",children:[r.jsx("span",{className:"partner-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-globe","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Ecosystem Network"}),r.jsx("p",{children:"Connections with all the Business Units of the ecosystem"})]})]}),r.jsxs("article",{className:"partner-benefit-item",children:[r.jsx("span",{className:"partner-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"ESG & Impact Focus"}),r.jsx("p",{children:"Sustainability as a strategy"})]})]}),r.jsxs("article",{className:"partner-benefit-item",children:[r.jsx("span",{className:"partner-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-rocket","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Sustainable Growth"}),r.jsx("p",{children:"Controlled scalability"})]})]})]})]})}),r.jsx("section",{className:"partner-approach","aria-labelledby":"partner-approach-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"partner-approach-panel",children:[r.jsx("img",{src:"/images/our-approach.jpg",alt:"Business partners working together in a bright office"}),r.jsxs("div",{className:"partner-approach-copy",children:[r.jsx("h2",{id:"partner-approach-title",children:"Our Approach"}),r.jsx("p",{children:"At EI.one, we believe in concrete values that guide every partnership. We are not looking for simple affiliates. We are looking for ecosystem leaders."})]})]}),r.jsxs("div",{className:"approach-values",children:[r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-eye","aria-hidden":"true"}),r.jsx("span",{children:"Transparency"})]}),r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),r.jsx("span",{children:"Collaboration"})]}),r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-trophy","aria-hidden":"true"}),r.jsx("span",{children:"Meritocracy"})]}),r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),r.jsx("span",{children:"Responsibility"})]}),r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-heart","aria-hidden":"true"}),r.jsx("span",{children:"Trust"})]})]})]})}),r.jsx("section",{className:"partner-final-cta","aria-labelledby":"partner-final-title",children:r.jsxs("div",{className:"wrap partner-final-inner",children:[r.jsx("p",{className:"partner-final-kicker",children:"Join the EI Generation"}),r.jsx("h2",{id:"partner-final-title",children:"Are you ready to be part of the EI Generation?"}),r.jsx("p",{children:"Discover the model that suits you best and start your journey."}),r.jsxs("div",{className:"partner-final-actions",children:[r.jsx("a",{className:"button partner-final-primary",href:"/en/contact.php",children:"Become a Franchise Partner"}),r.jsx("a",{className:"button",href:"/en/contact.php",children:"Activate a License"}),r.jsx("a",{className:"button partner-final-outline",href:"/en/contact.php",children:"Request White Label"})]})]})})]}),r.jsx(ia,{})]})}function gs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function SA(){return si.useEffect(()=>{const o="For Investors - EI.one",t="EI.one gives investors access to a functioning, scalable ecosystem built around education, experience, economy, and environment.";document.title=o,gs("description",t),gs("keywords","EI.one investors, ecosystem investment, sustainable growth, scalable ecosystem, impact investment"),gs("og:title",o,"property"),gs("og:description",t,"property"),gs("og:url","https://ei.one/en/investor","property"),gs("twitter:title",o),gs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/investor")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"/login",languagePage:"investor.php"}),r.jsxs("main",{className:"investor-page",children:[r.jsx("section",{className:"investor-hero",children:r.jsxs("div",{className:"wrap investor-hero-grid",children:[r.jsxs("div",{className:"investor-hero-copy",children:[r.jsx("h1",{children:"Investing in an Ecosystem"}),r.jsx("p",{children:"EI.one is not a single company idea. It is a functioning scalable system built around education, experience, economy, and environment."}),r.jsxs("div",{className:"investor-hero-actions",children:[r.jsx("a",{className:"button",href:"/en/contact.php",children:"Talk to us"}),r.jsx("a",{className:"button secondary",href:"/economy",children:"Explore the Ecosystem"})]})]}),r.jsxs("div",{className:"investor-hero-visual","aria-label":"Investor ecosystem growth model",children:[r.jsxs("div",{className:"investor-growth-card main",children:[r.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),r.jsx("strong",{children:"Scalable growth"}),r.jsx("span",{children:"One ecosystem, multiple value paths"})]}),r.jsxs("div",{className:"investor-signal education",children:[r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),r.jsx("span",{children:"Education"})]}),r.jsxs("div",{className:"investor-signal experience",children:[r.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),r.jsx("span",{children:"Experience"})]}),r.jsxs("div",{className:"investor-signal economy",children:[r.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),r.jsx("span",{children:"Economy"})]}),r.jsxs("div",{className:"investor-signal environment",children:[r.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),r.jsx("span",{children:"Environment"})]})]})]})}),r.jsx("section",{className:"investor-relevance","aria-labelledby":"investor-relevance-title",children:r.jsxs("div",{className:"wrap investor-relevance-grid",children:[r.jsxs("div",{className:"investor-relevance-copy",children:[r.jsx("h2",{id:"investor-relevance-title",children:"Why EI.ONE is relevant"}),r.jsx("p",{children:"Investors invest not only in visions, but in a robust and resilient system offering security and growth."})]}),r.jsxs("div",{className:"investor-proof-system",children:[r.jsxs("div",{className:"investor-proof-core",children:[r.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),r.jsx("strong",{children:"Security + growth"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),r.jsx("span",{children:"Real, operational companies"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-arrows-rotate","aria-hidden":"true"}),r.jsx("span",{children:"Recurring business models"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"}),r.jsx("span",{children:"Ecosystem synergies"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-earth-europe","aria-hidden":"true"}),r.jsx("span",{children:"Regional diversification"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-arrow-trend-up","aria-hidden":"true"}),r.jsx("span",{children:"Digital scalability"})]})]})]})}),r.jsx("section",{className:"investment-security","aria-labelledby":"investment-security-title",children:r.jsxs("div",{className:"wrap",children:[r.jsx("div",{className:"investment-security-head",children:r.jsx("h2",{id:"investment-security-title",children:"Investment Security"})}),r.jsxs("div",{className:"security-system",children:[r.jsxs("article",{children:[r.jsx("span",{className:"security-icon",children:r.jsx("i",{className:"fa-solid fa-users","aria-hidden":"true"})}),r.jsx("h3",{children:"Real Customers"}),r.jsx("p",{children:"Functioning customer acquisition directly from the ecosystem itself."})]}),r.jsxs("article",{children:[r.jsx("span",{className:"security-icon",children:r.jsx("i",{className:"fa-solid fa-user-graduate","aria-hidden":"true"})}),r.jsx("h3",{children:"Valuable Talent"}),r.jsx("p",{children:"Identified and developed talents increase productivity and company value."})]}),r.jsxs("article",{children:[r.jsx("span",{className:"security-icon",children:r.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"})}),r.jsx("h3",{children:"Diversification"}),r.jsx("p",{children:"Risk is distributed across different companies, industries, and regions."})]})]})]})}),r.jsx("section",{className:"investor-expect","aria-labelledby":"investor-expect-title",children:r.jsxs("div",{className:"wrap investor-expect-layout",children:[r.jsxs("div",{className:"investor-expect-head",children:[r.jsx("h2",{id:"investor-expect-title",children:"What to Expect"}),r.jsx("p",{children:"A clearer investment frame: tangible structures, defined roles, and impact logic that can scale over time."})]}),r.jsxs("div",{className:"expectation-strip",children:[r.jsxs("article",{children:[r.jsx("span",{className:"expectation-step",children:"01"}),r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-building-columns","aria-hidden":"true"}),r.jsx("h3",{children:"Real Structures"})]}),r.jsx("p",{children:"Access to tangible, operational structures"})]}),r.jsxs("article",{children:[r.jsx("span",{className:"expectation-step",children:"02"}),r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-sitemap","aria-hidden":"true"}),r.jsx("h3",{children:"Clear Roles"})]}),r.jsx("p",{children:"Clear separation between Holding, Ecosystem & Units"})]}),r.jsxs("article",{children:[r.jsx("span",{className:"expectation-step",children:"03"}),r.jsxs("div",{children:[r.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),r.jsx("h3",{children:"Impact"})]}),r.jsx("p",{children:"A long-term growth logic focusing on sustainability"})]})]})]})}),r.jsx("section",{className:"capital-structure","aria-labelledby":"capital-structure-title",children:r.jsxs("div",{className:"wrap capital-structure-grid",children:[r.jsxs("div",{className:"capital-structure-copy",children:[r.jsx("h2",{id:"capital-structure-title",children:"Capital Meets Structure"}),r.jsx("p",{children:"EI.ONE creates an environment where capital is used efficiently, growth is controlled and scaled, and risks are structurally reduced."}),r.jsxs("div",{className:"capital-highlight",children:[r.jsx("h3",{children:"Calculable Future"}),r.jsx("p",{children:"Companies grow together. Talents unleash potential. Capital has a lasting impact."})]}),r.jsx("a",{className:"button",href:"/en/contact.php",children:"Talk to Us"})]}),r.jsxs("div",{className:"capital-flow","aria-label":"Capital flow from structure to impact",children:[r.jsxs("div",{className:"capital-node source",children:[r.jsx("i",{className:"fa-solid fa-coins","aria-hidden":"true"}),r.jsx("span",{children:"Capital"})]}),r.jsxs("div",{className:"capital-node system",children:[r.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),r.jsx("span",{children:"Structure"})]}),r.jsxs("div",{className:"capital-node growth",children:[r.jsx("i",{className:"fa-solid fa-arrow-trend-up","aria-hidden":"true"}),r.jsx("span",{children:"Growth"})]}),r.jsxs("div",{className:"capital-node impact",children:[r.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),r.jsx("span",{children:"Impact"})]})]})]})})]}),r.jsx(ia,{})]})}function vs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function MA(){return si.useEffect(()=>{const o="Entrepreneur - EI.one",t="EI.one Entrepreneur is for people who want to build, activate, and grow inside a structured ecosystem.";document.title=o,vs("description",t),vs("keywords","EI.one entrepreneur, ecosystem entrepreneur, business builder, sustainable growth, EI generation"),vs("og:title",o,"property"),vs("og:description",t,"property"),vs("og:url","https://ei.one/en/entrepreneur","property"),vs("twitter:title",o),vs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/entrepreneur")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"/login",languagePage:"entrepreneur.php"}),r.jsxs("main",{className:"entrepreneur-page",children:[r.jsx("section",{className:"entrepreneur-hero",children:r.jsxs("div",{className:"wrap entrepreneur-hero-grid",children:[r.jsxs("div",{className:"entrepreneur-hero-copy",children:[r.jsx("p",{className:"entrepreneur-kicker",children:"Entrepreneur Program"}),r.jsx("h1",{children:"Join the EI.ONE Intelligent Ecosystem"}),r.jsx("p",{children:"Join an ecosystem that values cooperation over competition. Let's grow together through real connections."}),r.jsx("div",{className:"entrepreneur-hero-actions",children:r.jsx("a",{className:"button",href:"/en/contact.php",children:"Join the Ecosystem"})})]}),r.jsxs("div",{className:"entrepreneur-hero-visual","aria-label":"Entrepreneur ecosystem path",children:[r.jsxs("div",{className:"entrepreneur-core",children:[r.jsx("i",{className:"fa-solid fa-lightbulb","aria-hidden":"true"}),r.jsx("strong",{children:"Build together"})]}),r.jsxs("div",{className:"entrepreneur-node cooperate",children:[r.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),r.jsx("span",{children:"Cooperation"})]}),r.jsxs("div",{className:"entrepreneur-node connect",children:[r.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),r.jsx("span",{children:"Connections"})]}),r.jsxs("div",{className:"entrepreneur-node grow",children:[r.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),r.jsx("span",{children:"Growth"})]})]})]})}),r.jsx("section",{className:"entrepreneur-why",children:r.jsxs("div",{className:"wrap entrepreneur-why-grid",children:[r.jsxs("div",{className:"entrepreneur-why-intro",children:[r.jsx("h2",{children:"Why Join Us?"}),r.jsx("p",{children:"The benefits of being part of an integrated and high-performance ecosystem."}),r.jsxs("div",{className:"entrepreneur-why-note",children:[r.jsx("strong",{children:"Integrated growth"}),r.jsx("span",{children:"Clients, projects, talents and visibility move through one connected ecosystem."})]})]}),r.jsxs("div",{className:"entrepreneur-benefit-rail",children:[r.jsxs("article",{className:"entrepreneur-benefit",children:[r.jsx("span",{className:"entrepreneur-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-users-viewfinder","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Client Acquisition"}),r.jsx("p",{children:"Direct access to new potential clients and qualified referrals from the network. Marketing becomes organic."})]})]}),r.jsxs("article",{className:"entrepreneur-benefit",children:[r.jsx("span",{className:"entrepreneur-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-rocket","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Co-Creation & Projects"}),r.jsx("p",{children:"Develop joint projects with complementary companies. Innovation comes from collaboration."})]})]}),r.jsxs("article",{className:"entrepreneur-benefit",children:[r.jsx("span",{className:"entrepreneur-benefit-icon",children:r.jsx("i",{className:"fa-solid fa-user-tie","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("h3",{children:"Talents & Visibility"}),r.jsx("p",{children:"Access top talents trained by our Academy and increase your brand visibility."})]})]})]})]})}),r.jsx("section",{className:"entrepreneur-cooperation",children:r.jsxs("div",{className:"wrap entrepreneur-cooperation-wrap",children:[r.jsx("div",{className:"entrepreneur-cooperation-media",children:r.jsx("img",{src:"/images/our-approach.jpg",alt:"Entrepreneurs cooperating in a meeting"})}),r.jsxs("div",{className:"entrepreneur-cooperation-panel",children:[r.jsx("span",{className:"entrepreneur-cooperation-label",children:"Cooperation model"}),r.jsx("h2",{children:"Real Cooperation"}),r.jsx("strong",{children:"EI.ONE thrives on complementary entrepreneurs."}),r.jsx("p",{children:"In a saturated market, partnership is the key to differentiation. We offer not just a platform, but an environment of trust where businesses support each other."}),r.jsxs("div",{className:"entrepreneur-cooperation-list",children:[r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Know-How Exchange"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Exclusive Networking Events"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Strategic Support"]})]})]})]})}),r.jsx("section",{className:"entrepreneur-looking",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"entrepreneur-looking-head",children:[r.jsx("h2",{children:"Who we are looking for"}),r.jsx("p",{children:"The entrepreneur program is ideal for:"})]}),r.jsxs("div",{className:"entrepreneur-looking-board",children:[r.jsxs("article",{className:"entrepreneur-fit",children:[r.jsx("i",{className:"fa-solid fa-building","aria-hidden":"true"}),r.jsx("h3",{children:"Experienced Firms"}),r.jsx("p",{children:"Companies with clear expertise and history."})]}),r.jsxs("article",{className:"entrepreneur-fit",children:[r.jsx("i",{className:"fa-solid fa-laptop-code","aria-hidden":"true"}),r.jsx("h3",{children:"Solution Providers"}),r.jsx("p",{children:"Providers of digital and technology services."})]}),r.jsxs("article",{className:"entrepreneur-fit",children:[r.jsx("i",{className:"fa-solid fa-school","aria-hidden":"true"}),r.jsx("h3",{children:"Education"}),r.jsx("p",{children:"Educational institutions and talent-focused organizations."})]}),r.jsxs("article",{className:"entrepreneur-fit",children:[r.jsx("i",{className:"fa-solid fa-hand-holding-dollar","aria-hidden":"true"}),r.jsx("h3",{children:"For Investors"}),r.jsx("p",{children:"Those looking for investments with real impact."})]})]}),r.jsxs("div",{className:"entrepreneur-together",children:[r.jsx("div",{className:"entrepreneur-together-mark",children:r.jsx("i",{className:"fa-solid fa-quote-left","aria-hidden":"true"})}),r.jsx("blockquote",{children:"Entrepreneurship means growing together."}),r.jsx("p",{children:"Join the companies of the ecosystem that are changing the way of doing business: together, not alone."})]})]})}),r.jsx("section",{className:"entrepreneur-request",children:r.jsxs("div",{className:"wrap entrepreneur-request-grid",children:[r.jsxs("div",{className:"entrepreneur-request-copy",children:[r.jsx("span",{className:"entrepreneur-request-kicker",children:"Start the conversation"}),r.jsx("h2",{children:"Request Information"}),r.jsx("p",{children:"Fill out the form to speak with our Partnership team."}),r.jsxs("div",{className:"entrepreneur-request-points",children:[r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"})," Fast partnership review"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"})," Clear request routing"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"})," Direct EI.ONE contact"]})]})]}),r.jsxs("form",{className:"entrepreneur-request-form",children:[r.jsxs("label",{children:[r.jsx("span",{children:"Company Name / Contact"}),r.jsx("input",{type:"text",name:"company",placeholder:"Company Name / Contact"})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Business Email"}),r.jsx("input",{type:"email",name:"email",placeholder:"Business Email"})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Request Type"}),r.jsxs("select",{name:"requestType",defaultValue:"",children:[r.jsx("option",{value:"",disabled:!0,children:"Request Type"}),r.jsx("option",{children:"Entrepreneur Request"}),r.jsx("option",{children:"General Information"}),r.jsx("option",{children:"Collaboration Proposal"})]})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Tell us about your company"}),r.jsx("textarea",{name:"message",rows:"5",placeholder:"Tell us about your company..."})]}),r.jsx("button",{type:"submit",children:"Send Request"})]})]})})]}),r.jsx(ia,{})]})}function xs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function EA(){return si.useEffect(()=>{const o="About Us - EI.one",t="EI.one transforms companies into engines of learning, innovation and growth inside an intelligent ecosystem.";document.title=o,xs("description",t),xs("keywords","EI.one about us, ecosystem intelligence, learning, innovation, growth, ESG impact"),xs("og:title",o,"property"),xs("og:description",t,"property"),xs("og:url","https://ei.one/en/about-us","property"),xs("twitter:title",o),xs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/about-us")},[]),r.jsxs(r.Fragment,{children:[r.jsx(na,{loginHref:"/login",languagePage:"about-us.php"}),r.jsxs("main",{className:"about-page",children:[r.jsx("section",{className:"about-hero",children:r.jsxs("div",{className:"wrap about-hero-grid",children:[r.jsxs("div",{className:"about-hero-copy",children:[r.jsxs("div",{className:"about-identity-pill","aria-label":"Ecosystem Intelligence",children:[r.jsx("span",{children:"E"}),r.jsx("strong",{children:"cosystem"}),r.jsx("span",{children:"I"}),r.jsx("strong",{children:"ntelligence"})]}),r.jsx("h1",{children:"About Us"}),r.jsx("p",{children:"ei.one isn't built to teach people or just to connect them. It exists to transform companies into engines of learning, innovation and growth. Every company that joins the ecosystem creates new commercial relationships, attracts talent, develops skills, increases its visibility, and generates measurable ESG impact."}),r.jsx("p",{className:"about-hero-statement",children:"The company is no longer just a workplace: it becomes a hub of value for society."})]}),r.jsx("div",{className:"about-hero-panel","aria-label":"EI.one ecosystem outcomes",children:r.jsxs("div",{className:"about-orbit",children:[r.jsxs("div",{className:"about-orbit-core",children:[r.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),r.jsx("strong",{children:"ei.one"})]}),r.jsxs("span",{className:"about-orbit-node learning",children:[r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),"Learning"]}),r.jsxs("span",{className:"about-orbit-node growth",children:[r.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),"Growth"]}),r.jsxs("span",{className:"about-orbit-node impact",children:[r.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),"Impact"]})]})})]})}),r.jsx("section",{className:"about-founder",children:r.jsx("div",{className:"wrap about-founder-wrap",children:r.jsxs("div",{className:"about-founder-card",children:[r.jsx("div",{className:"about-founder-photo",children:r.jsx("img",{src:"/images/fabio-russo.jpg",alt:"Fabio Russo"})}),r.jsxs("div",{className:"about-founder-copy",children:[r.jsx("div",{className:"about-founder-badge",children:"The Founder"}),r.jsx("h2",{children:"Fabio Russo"}),r.jsx("p",{className:"about-founder-role",children:"CEO & Founder"}),r.jsx("p",{children:"Entrepreneur and ecosystem builder. For over 15 years he's been developing projects that combine sustainability, technology, human network and ethical growth."}),r.jsxs("p",{children:["He gave life to the ",r.jsx("strong",{children:"EI Generation"})," as a concrete response to the challenges of our time. EI.one is the result of this journey."]}),r.jsxs("div",{className:"about-founder-signals","aria-label":"Founder focus areas",children:[r.jsx("span",{children:"Sustainability"}),r.jsx("span",{children:"Technology"}),r.jsx("span",{children:"Human network"}),r.jsx("span",{children:"Ethical growth"})]})]})]})})}),r.jsx("section",{className:"about-generation",children:r.jsxs("div",{className:"wrap about-generation-grid",children:[r.jsxs("div",{className:"about-generation-copy",children:[r.jsx("span",{className:"about-generation-kicker",children:"The EI Generation"}),r.jsx("h2",{children:"The EI Generation"}),r.jsx("h3",{children:"We Are the EI Generation"}),r.jsx("p",{children:"The EI Generation consists of entrepreneurs, professionals, innovators, and talents who believe in a new development model."})]}),r.jsxs("div",{className:"about-generation-manifesto",children:[r.jsx("p",{className:"about-generation-label",children:"A model where:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Business serves people"]}),r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Innovation has a positive impact"]}),r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Growth is shared"]}),r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Sustainability is strategic"]})]}),r.jsxs("div",{className:"about-generation-closing",children:[r.jsx("strong",{children:"We are not spectators of change."}),r.jsx("strong",{children:"We are the architects of change."}),r.jsx("span",{children:"EI.one is the home of the EI Generation."})]})]})]})}),r.jsx("section",{className:"about-four-es",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"about-four-head",children:[r.jsx("h2",{children:"The four E's"}),r.jsx("p",{children:"ei.one holds four dimensions together. They are distinct but work as a single system."})]}),r.jsxs("div",{className:"about-four-system",children:[r.jsxs("div",{className:"about-four-core",children:[r.jsx("strong",{children:"EI.ONE"}),r.jsx("span",{children:"system"})]}),r.jsxs("article",{className:"about-e-node experience",children:[r.jsx("i",{className:"fa-solid fa-passport","aria-hidden":"true"}),r.jsx("h3",{children:"Experience"}),r.jsx("p",{children:"Real and verified professional experiences — the heart of the Identity."})]}),r.jsxs("article",{className:"about-e-node education",children:[r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),r.jsx("h3",{children:"Education"}),r.jsx("p",{children:"Continuous learning inside the companies of the ecosystem."})]}),r.jsxs("article",{className:"about-e-node economy",children:[r.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),r.jsx("h3",{children:"Economy"}),r.jsx("p",{children:"Economic growth built on synergy, not internal competition."})]}),r.jsxs("article",{className:"about-e-node environment",children:[r.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),r.jsx("h3",{children:"Environment"}),r.jsx("p",{children:"Environmental sustainability with measurable and traceable projects."})]})]})]})}),r.jsx("section",{className:"about-problems",children:r.jsxs("div",{className:"wrap about-problems-grid",children:[r.jsxs("div",{className:"about-problems-copy",children:[r.jsx("h2",{children:"Answers to Global Problems"}),r.jsx("p",{children:"The EI Generation was born to address the real-world challenges and turn them into sustainable opportunities."}),r.jsxs("div",{className:"about-problem-list",children:[r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})," Economic crises"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-people-arrows","aria-hidden":"true"})," Social inequalities"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-temperature-half","aria-hidden":"true"})," Climate change"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-microchip","aria-hidden":"true"})," Digital transformation"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fa-solid fa-handshake-slash","aria-hidden":"true"})," Loss of trust in traditional systems"]})]})]}),r.jsxs("div",{className:"about-problems-visual",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82",alt:"Bright office desk with analytics screen"}),r.jsxs("div",{className:"about-problems-card",children:[r.jsx("strong",{children:"We are not spectators of change"}),r.jsx("p",{children:"We are the designers of change. EI.one is the home of the EI Generation."})]})]})]})}),r.jsx("section",{className:"about-vision",children:r.jsxs("div",{className:"wrap about-vision-grid",children:[r.jsxs("div",{className:"about-vision-statement",children:[r.jsx("h2",{children:"Our Vision"}),r.jsx("p",{children:"We believe the future belongs to ecosystems that can unite business and values, technology and humanity, growth and responsibility, profit and positive impact."}),r.jsx("strong",{children:"We follow no trends. We build structures that last."})]}),r.jsxs("div",{className:"about-vision-principles",children:[r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),r.jsx("h3",{children:"Uniting Business and Values"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-robot","aria-hidden":"true"}),r.jsx("h3",{children:"Technology and Humanity"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-arrow-up-right-dots","aria-hidden":"true"}),r.jsx("h3",{children:"Growth and Responsibility"})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-scale-balanced","aria-hidden":"true"}),r.jsx("h3",{children:"Profit and Impact"})]})]})]})}),r.jsx("section",{className:"about-origin",children:r.jsxs("div",{className:"wrap about-origin-grid",children:[r.jsxs("div",{className:"about-origin-copy",children:[r.jsx("span",{className:"about-origin-kicker",children:"Built from practice"}),r.jsx("h2",{children:"Where ei.one comes from"}),r.jsx("p",{children:"ei.one was born from the concrete entrepreneurial experience of the founder and partners in the sectors that today make up the ecosystem: renewable energy, business development, digital & marketing, IT & AI, real estate. We're not theory. We're practice and structure."})]}),r.jsxs("div",{className:"about-origin-flow",children:[r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Renewable Energy"}),r.jsx("p",{children:"Energy transition and green solutions"})]})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-laptop-code","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Digital & Marketing"}),r.jsx("p",{children:"Technological innovation and visibility"})]})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Network & Franchising"}),r.jsx("p",{children:"Scalable expansion and partnerships"})]})]})]})]})}),r.jsx("section",{className:"about-commitment",children:r.jsxs("div",{className:"wrap about-commitment-grid",children:[r.jsxs("div",{className:"about-commitment-copy",children:[r.jsx("h2",{children:"Our Commitment"}),r.jsx("p",{children:"As the EI Generation, we commit every day to a better future."}),r.jsx("strong",{children:"We don't promise shortcuts. We build the future."})]}),r.jsxs("div",{className:"about-commitment-list",children:[r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Create real value"]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Empower people"]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Build trust"]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Protect the environment"]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Innovate responsibly"]})]})]})}),r.jsx("section",{className:"about-platform",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"about-platform-layout",children:[r.jsxs("div",{className:"about-platform-statement",children:[r.jsx("span",{children:"Beyond the platform"}),r.jsx("h2",{children:"EI.one - More Than a Platform"}),r.jsx("p",{children:"EI.one is not just a project. It is much more."}),r.jsx("strong",{children:"For a smarter and more sustainable economy."})]}),r.jsxs("div",{className:"about-platform-list","aria-label":"What EI.one is",children:[r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Ecosystem"}),r.jsx("p",{children:"Integrated system of Business Units"})]})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-people-group","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Movement"}),r.jsx("p",{children:"A new entrepreneurial culture"})]})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-share-nodes","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Network"}),r.jsx("p",{children:"Real and strategic connections"})]})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-server","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Operating System"}),r.jsx("p",{children:"Infrastructure for business"})]})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-copy","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Replicable Model"}),r.jsx("p",{children:"International scalability"})]})]}),r.jsxs("article",{children:[r.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Sustainability"}),r.jsx("p",{children:"ESG at the heart of everything"})]})]})]})]})})}),r.jsx("section",{className:"about-milestones",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"about-milestones-head",children:[r.jsx("h2",{children:"Milestones"}),r.jsx("p",{children:"Recognitions that demonstrate our concrete dedication to professional inclusion and social sustainability."})]}),r.jsxs("div",{className:"about-milestone-feature",children:[r.jsxs("div",{className:"about-milestone-copy",children:[r.jsx("span",{children:"This-Priis - SVA Zürich"}),r.jsx("p",{children:"Three-time nominees at the This-Priis - the award founded by Matthias Widmer of SVA Zürich in 2006 to recognize companies that promote inclusion and professional integration of people with limitations."}),r.jsx("p",{children:"For us it's not a trophy; it's confirmation that the way we build teams works, and it scales to the entire ecosystem."}),r.jsx("a",{href:"https://svazurich.ch/",target:"_blank",rel:"noreferrer",children:"Discover the award"})]}),r.jsx("a",{className:"about-milestone-logo",href:"https://svazurich.ch/",target:"_blank",rel:"noreferrer","aria-label":"Visit SVA Zürich",children:r.jsx("img",{src:"/images/sva-zuerich.png",alt:"SVA Zürich"})})]})]})}),r.jsx("section",{className:"about-commitments-social",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"about-commitments-head",children:[r.jsx("h2",{children:"Our commitments"}),r.jsx("p",{children:"We believe businesses have a responsibility to contribute to a better world."})]}),r.jsxs("div",{className:"about-milestone-feature reverse",children:[r.jsx("a",{className:"about-milestone-logo",href:"https://stiftung-togo.ch/",target:"_blank",rel:"noreferrer","aria-label":"Visit Stiftung ToGo",children:r.jsx("img",{src:"/images/togo-opening-eyes.png",alt:"ToGo opening eyes"})}),r.jsxs("div",{className:"about-milestone-copy",children:[r.jsx("span",{children:"Stiftung ToGo - Opening Eyes"}),r.jsx("p",{children:"We support the Swiss foundation Stiftung ToGo, which organizes free cataract operations in Togo. To date, the foundation has helped over 1,000 people recover their sight."}),r.jsx("p",{children:`It's a concrete example of what we mean by "real value": a measurable, verifiable action that changes individual lives.`}),r.jsx("a",{href:"https://stiftung-togo.ch/",target:"_blank",rel:"noreferrer",children:"Discover the foundation"})]})]})]})}),r.jsx("section",{className:"about-final-cta",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"about-final-cta-box",children:[r.jsx("h2",{children:"Ready to enter?"}),r.jsx("p",{children:"Choose the right door for you: the business ecosystem, or the talent platform."}),r.jsxs("div",{className:"about-final-actions",children:[r.jsx("a",{href:"/business-club",children:"For Businesses"}),r.jsx("a",{href:"/talent",children:"For Talents"}),r.jsx("a",{href:"/contact",children:"Contact us"})]})]})})})]}),r.jsx(ia,{})]})}function bA(){const o=window.location.pathname.toLowerCase();return o.includes("/education")?r.jsx(gA,{}):o.includes("/experience-passport")?r.jsx(vA,{}):o.includes("/economy")?r.jsx(xA,{}):o.includes("/environment")?r.jsx(_A,{}):o.includes("/partner")?r.jsx(yA,{}):o.includes("/investor")?r.jsx(SA,{}):o.includes("/entrepreneur")?r.jsx(MA,{}):o.includes("/about")||o.includes("/about-us")?r.jsx(EA,{}):r.jsxs(r.Fragment,{children:[r.jsx(na,{}),r.jsxs("main",{children:[r.jsxs("section",{className:"hero",children:[r.jsx(pA,{}),r.jsxs("div",{className:"hero-inner",children:[r.jsxs("div",{children:[r.jsx("p",{className:"eyebrow",children:"Ecosystem Intelligence"}),r.jsxs("h1",{children:["The infrastructure that turns every collaboration ",r.jsx("span",{className:"hero-accent",children:"into new opportunities for growth."})]}),r.jsxs("p",{className:"hero-copy",children:["EI.one connects ",r.jsx("strong",{children:"companies, people and schools"})," to turn every collaboration into new relationships, clients, talent and shared knowledge."]}),r.jsx("p",{className:"hero-copy",children:"Every experience feeds a patrimony of value that makes the entire ecosystem stronger, smarter and more capable of growth."}),r.jsxs("div",{className:"actions",children:[r.jsx("a",{className:"button",href:"/business-club",children:"I'm a company →"}),r.jsx("a",{className:"button secondary",href:"/talent",children:"I'm a person →"}),r.jsx("a",{className:"button secondary",href:"/education",children:"I'm a school →"})]})]}),r.jsxs("aside",{className:"login-panel",id:"login","aria-label":"Login panel",children:[r.jsx("h2",{children:"Login"}),r.jsx("p",{children:"Enter the platform"}),r.jsx("label",{className:"field-label",htmlFor:"login-email",children:"Email"}),r.jsx("input",{className:"field",id:"login-email",type:"email",placeholder:"you@email.com"}),r.jsx("label",{className:"field-label",htmlFor:"login-password",children:"Password"}),r.jsx("input",{className:"field",id:"login-password",type:"password",placeholder:"••••••••"}),r.jsx("div",{className:"login-options",children:r.jsx("a",{href:"#",children:"Forgot password?"})}),r.jsx("a",{className:"button full",href:"#",children:"Log in →"}),r.jsxs("p",{className:"login-join",children:["No account yet? ",r.jsx("a",{className:"text-link",href:"/register",children:"Join ei.one"})]})]})]})]}),r.jsx("section",{className:"protagonists","aria-labelledby":"protagonists-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"protagonists-head",children:[r.jsx("h2",{id:"protagonists-title",children:"Three protagonists. One same growth."}),r.jsx("p",{children:"Experience is the raw material. ei.one turns it into value for all three."})]}),r.jsxs("div",{className:"protagonists-grid",children:[r.jsxs("article",{className:"protagonist-card",children:[r.jsx("h3",{children:"For companies — Business growth"}),r.jsx("p",{children:"Turn internships, project work and mentoring into a channel of verified talent, trusted partnerships and qualified commercial network."}),r.jsx("p",{className:"protagonist-quote",children:'"Your experiences attract the best. The best grow your business."'}),r.jsx("a",{className:"protagonist-link",href:"/economy",children:"For companies →"})]}),r.jsxs("article",{className:"protagonist-card",children:[r.jsx("h3",{children:"For talents — Experience Passport"}),r.jsx("p",{children:"Transform internships, projects, mentoring and learning experiences into a verified record of your growth."}),r.jsx("p",{className:"protagonist-quote",children:'"Your experiences become your proof. Your proof becomes your opportunity."'}),r.jsx("a",{className:"protagonist-link",href:"/experience-passport",children:"For people →"})]}),r.jsxs("article",{className:"protagonist-card",children:[r.jsx("h3",{children:"For education — Academy growth"}),r.jsx("p",{children:"Connect learning paths, projects and mentoring into an ecosystem where skills become visible and development continues."}),r.jsx("p",{className:"protagonist-quote",children:'"When learning is connected, growth becomes measurable."'}),r.jsx("a",{className:"protagonist-link",href:"/education",children:"For Schools →"})]})]})]})}),r.jsx("section",{className:"connections","aria-labelledby":"connections-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"connections-head",children:[r.jsx("p",{className:"connections-kicker",children:"Network signals"}),r.jsx("h2",{id:"connections-title",children:"Who we're connected with"}),r.jsx("p",{children:"For clarity, here is the nature of each relationship below."})]}),r.jsxs("div",{className:"connections-grid",children:[r.jsxs("div",{className:"connection-item",children:[r.jsx("a",{className:"connection-logo logo-togo",href:"https://stiftung-togo.ch/",target:"_blank",rel:"noopener","aria-label":"ToGo opening eyes",children:r.jsxs("span",{children:["To",r.jsx("span",{className:"red",children:"Go"})," ",r.jsx("span",{className:"green",children:"opening eyes"})]})}),r.jsx("div",{className:"connection-label",children:"Supported Foundation"})]}),r.jsxs("div",{className:"connection-item",children:[r.jsx("a",{className:"connection-logo logo-sva",href:"https://svazurich.ch/",target:"_blank",rel:"noopener","aria-label":"SVA Zurich",children:r.jsxs("span",{children:[r.jsx("strong",{children:"SVA"})," Zürich"]})}),r.jsx("div",{className:"connection-label",children:"Award Received"})]}),r.jsxs("div",{className:"connection-item",children:[r.jsxs("a",{className:"connection-logo logo-innovation",href:"https://www.standort-zuerich.ch/",target:"_blank",rel:"noopener","aria-label":"Innovation Zurich",children:[r.jsx("span",{className:"innovation-mark","aria-hidden":"true"}),r.jsxs("span",{children:["Innovation",r.jsx("br",{}),"Zurich"]})]}),r.jsx("div",{className:"connection-label",children:"Local Network"})]}),r.jsxs("div",{className:"connection-item",children:[r.jsx("a",{className:"connection-logo logo-eye",href:"https://augenarztpraxis-baden.ch/",target:"_blank",rel:"noopener","aria-label":"AugenarztpraxisPlus",children:"AugenarztpraxisPlus"}),r.jsx("div",{className:"connection-label",children:"Sponsor"})]}),r.jsxs("div",{className:"connection-item",children:[r.jsxs("a",{className:"connection-logo logo-sgo",href:"https://www.sgo-verein.ch/",target:"_blank",rel:"noopener","aria-label":"SGO Verein",children:[r.jsx("span",{children:"SGO"}),r.jsx("small",{children:"www.sgo-verein.ch"})]}),r.jsx("div",{className:"connection-label",children:"Professional Network"})]})]})]})}),r.jsx("section",{className:"platform-status","aria-labelledby":"platform-status-title",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"status-panel",children:[r.jsxs("div",{className:"status-head",children:[r.jsx("p",{children:"Platform Status Today"}),r.jsx("h2",{id:"platform-status-title",children:"What is live now, and what comes next"})]}),r.jsxs("div",{className:"status-grid",children:[r.jsxs("div",{className:"status-column live-column",children:[r.jsxs("div",{className:"status-badge",children:[r.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"}),"Live today"]}),r.jsxs("ul",{className:"status-list",children:[r.jsxs("li",{className:"live",children:[r.jsx("i",{className:"fa-solid fa-user-plus","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"ei.one account"}),r.jsx("small",{children:"Create your access and enter the platform."})]}),r.jsx("em",{children:"Live"})]}),r.jsxs("li",{className:"live",children:[r.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Experience Identity"}),r.jsx("small",{children:"Build a verified record of what you actually did."})]}),r.jsx("em",{children:"Live"})]}),r.jsxs("li",{className:"live",children:[r.jsx("i",{className:"fa-solid fa-share-nodes","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Verified experiences"}),r.jsx("small",{children:"Add and share experiences attested by companies."})]}),r.jsx("em",{children:"Live"})]}),r.jsxs("li",{className:"live",children:[r.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Business Units"}),r.jsx("small",{children:"Connect with the active ecosystem network."})]}),r.jsx("em",{children:"Live"})]})]})]}),r.jsxs("div",{className:"status-column soon-column",children:[r.jsxs("div",{className:"status-badge soon",children:[r.jsx("i",{className:"fa-solid fa-clock","aria-hidden":"true"}),"Coming soon"]}),r.jsxs("ul",{className:"status-list",children:[r.jsxs("li",{className:"soon",children:[r.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Academy"}),r.jsx("small",{children:"Learning paths with sponsors and partners."})]}),r.jsx("em",{children:"Soon"})]}),r.jsxs("li",{className:"soon",children:[r.jsx("i",{className:"fa-solid fa-magnifying-glass-chart","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Recruitment"}),r.jsx("small",{children:"Companies searching on the Identity."})]}),r.jsx("em",{children:"Soon"})]}),r.jsxs("li",{className:"soon",children:[r.jsx("i",{className:"fa-solid fa-store","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Extended Marketplace"}),r.jsx("small",{children:"Broader access to ecosystem opportunities."})]}),r.jsx("em",{children:"Planned"})]}),r.jsxs("li",{className:"soon",children:[r.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Credential verification"}),r.jsx("small",{children:"On-chain verification for trusted records."})]}),r.jsx("em",{children:"Planned"})]})]})]})]})]})})}),r.jsx("section",{className:"entry-doors","aria-labelledby":"entry-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"entry-head",children:[r.jsx("h2",{id:"entry-title",children:"Where do you want to enter?"}),r.jsx("p",{children:"ei.one is two things held together: an ecosystem of Business Units working in sync, and a platform that rewards the people who work inside it. Pick the right door for you."})]}),r.jsxs("div",{className:"entry-grid",children:[r.jsxs("article",{className:"entry-card companies",children:[r.jsx("div",{className:"entry-kicker",children:"For companies"}),r.jsx("h3",{children:"Activate the ecosystem."}),r.jsx("p",{className:"entry-copy",children:"A system of specialised Business Units — energy, sales, marketing, IT & AI, real estate, 3D — working together. Enter through one, benefit from all."}),r.jsxs("ul",{className:"entry-list",children:[r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-network-wired entry-check","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Business Ecosystem"}),r.jsx("small",{children:"The Business Units in the network"})]})]}),r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-handshake entry-check","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Become a Partner"}),r.jsx("small",{children:"Franchise, license, white label"})]})]}),r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-chart-line entry-check","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Sponsor & Investor"}),r.jsx("small",{children:"Presence and growth"})]})]})]}),r.jsx("a",{className:"entry-link",href:"/business-club",children:"Enter Companies →"})]}),r.jsxs("article",{className:"entry-card talents",children:[r.jsx("div",{className:"entry-kicker",children:"For talents"}),r.jsx("h3",{children:"Build your Experience Identity."}),r.jsx("p",{className:"entry-copy",children:"Learn through the Academy, accumulate verified experience inside the ecosystem's companies, get found when a company actually needs what you can do."}),r.jsxs("ul",{className:"entry-list",children:[r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-id-card entry-check","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Experience Identity"}),r.jsx("small",{children:"Your verified CV"})]}),r.jsx("em",{className:"entry-pill",children:"Live"})]}),r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-graduation-cap entry-check","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Academy"}),r.jsx("small",{children:"Learn on the job"})]}),r.jsx("em",{className:"entry-pill preview",children:"Soon"})]}),r.jsxs("li",{children:[r.jsx("i",{className:"fa-solid fa-magnifying-glass-chart entry-check","aria-hidden":"true"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Recruitment"}),r.jsx("small",{children:"Get found"})]}),r.jsx("em",{className:"entry-pill preview",children:"Soon"})]})]}),r.jsx("a",{className:"entry-link",href:"/talent",children:"Enter Talents →"})]})]})]})}),r.jsx("section",{className:"company-effects","aria-labelledby":"company-effects-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"effects-head",children:[r.jsx("h2",{id:"company-effects-title",children:"What changes for a company that joins ei.one"}),r.jsx("p",{children:'Five concrete effects that turn a business from "a workplace" into a hub of value for society.'})]}),r.jsxs("div",{className:"effects-grid",children:[r.jsxs("article",{className:"effect-card",children:[r.jsx("span",{className:"effect-number",children:"01"}),r.jsx("span",{className:"effect-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-handshake"})}),r.jsx("h3",{children:"New commercial relationships"}),r.jsx("p",{children:"Access to the Business Units and the customers already operating inside the ecosystem."})]}),r.jsxs("article",{className:"effect-card",children:[r.jsx("span",{className:"effect-number",children:"02"}),r.jsx("span",{className:"effect-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-graduation-cap"})}),r.jsx("h3",{children:"Talent attracted"}),r.jsx("p",{children:"The best people come to companies that offer experience verifiable in the Identity."})]}),r.jsxs("article",{className:"effect-card",children:[r.jsx("span",{className:"effect-number",children:"03"}),r.jsx("span",{className:"effect-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-brain"})}),r.jsx("h3",{children:"Skills developed"}),r.jsx("p",{children:"The workplace becomes a learning engine for the people who work in it."})]}),r.jsxs("article",{className:"effect-card",children:[r.jsx("span",{className:"effect-number",children:"04"}),r.jsx("span",{className:"effect-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-eye"})}),r.jsx("h3",{children:"Amplified visibility"}),r.jsx("p",{children:"Presence inside the marketplace and across ecosystem activations."})]}),r.jsxs("article",{className:"effect-card",children:[r.jsx("span",{className:"effect-number",children:"05"}),r.jsx("span",{className:"effect-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-leaf"})}),r.jsx("h3",{children:"Measurable ESG impact"}),r.jsx("p",{children:"Real indicators on sustainability, inclusion, and governance — verifiable."})]})]}),r.jsx("p",{className:"effects-closing",children:"The company is no longer just a workplace. It becomes a hub of value for society."})]})}),r.jsx("section",{className:"training-modules","aria-labelledby":"training-title",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"training-head",children:[r.jsx("p",{className:"training-kicker",children:"Company learning engine"}),r.jsx("h2",{id:"training-title",children:"How the company trains and attests its people"}),r.jsx("p",{children:"Three modules — one to build skills, one to attest them, one to make them findable. Together they make the company a growth engine for the people who work there."})]}),r.jsxs("div",{className:"training-grid",children:[r.jsxs("a",{className:"training-card academy",href:"/academy",children:[r.jsx("span",{className:"training-step",children:"01"}),r.jsx("span",{className:"training-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-graduation-cap"})}),r.jsxs("h3",{children:["1. Academy ",r.jsx("span",{className:"module-pill",children:"Preview"})]}),r.jsx("p",{children:"Sponsors and partners of the ecosystem build the learning paths. You learn where you work."}),r.jsx("span",{className:"training-link",children:"Discover Academy→"})]}),r.jsxs("a",{className:"training-card identity",href:"/experience-passport",children:[r.jsx("span",{className:"training-step",children:"02"}),r.jsx("span",{className:"training-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-passport"})}),r.jsxs("h3",{children:["2. Experience Identity ",r.jsx("span",{className:"module-pill live",children:"Live"})]}),r.jsx("p",{children:"Your digital record of what you actually did. Verified by the ecosystem's companies who saw you do it."}),r.jsx("span",{className:"training-link",children:"Discover the Identity→"})]}),r.jsxs("a",{className:"training-card recruitment",href:"/recruitment",children:[r.jsx("span",{className:"training-step",children:"03"}),r.jsx("span",{className:"training-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-handshake"})}),r.jsxs("h3",{children:["3. Recruitment ",r.jsx("span",{className:"module-pill",children:"Preview"})]}),r.jsx("p",{children:"Companies hire on Identity experience, not CV keywords. The matches are real."}),r.jsx("span",{className:"training-link",children:"Discover Recruitment→"})]})]})]})}),r.jsx("section",{className:"why-now","aria-labelledby":"why-now-title",children:r.jsxs("div",{className:"wrap why-grid",children:[r.jsxs("div",{className:"why-copy",children:[r.jsx("h2",{id:"why-now-title",children:"Why now"}),r.jsxs("div",{className:"why-points",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"The job market is changing fast."})," AI is rewriting roles faster than CVs can keep up. Résumés say less and less about what a person can actually do, and companies struggle more and more to find the right skills."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Our answer."})," Put real, verified experience at the centre — not keywords. Every entry in the Identity is attested by the company that gave you the work. It's a fairer, more honest way to show what you're worth."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"How the ecosystem moves."})," Companies work together and train people on the job. People accumulate verified experience. That experience is what hiring companies search on. Value circulates."]})]})]}),r.jsx("div",{className:"why-media",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82",alt:"Bright office desk with computer analytics dashboard and plants"})})]})}),r.jsx("section",{className:"building","aria-labelledby":"building-title",children:r.jsxs("div",{className:"wrap",children:[r.jsx("div",{className:"building-head",children:r.jsx("h2",{id:"building-title",children:"What we're building"})}),r.jsxs("div",{className:"building-callout",children:[r.jsx("div",{children:"ei.one isn't a services platform."}),r.jsx("div",{children:"It's the infrastructure that turns companies into hubs of learning, innovation and growth."})]}),r.jsxs("div",{className:"building-grid",children:[r.jsxs("article",{className:"building-card",children:[r.jsx("span",{className:"building-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-passport"})}),r.jsx("h3",{children:"Verified experience"}),r.jsx("p",{children:"What you did, attested by the people who saw you do it."})]}),r.jsxs("article",{className:"building-card",children:[r.jsx("span",{className:"building-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-graduation-cap"})}),r.jsx("h3",{children:"Talents that grow"}),r.jsx("p",{children:"Room to discover what you're good at and develop it over time."})]}),r.jsxs("article",{className:"building-card",children:[r.jsx("span",{className:"building-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-handshake"})}),r.jsx("h3",{children:"Real relationships"}),r.jsx("p",{children:"Networking measured in trust and real collaborations."})]}),r.jsxs("article",{className:"building-card",children:[r.jsx("span",{className:"building-icon","aria-hidden":"true",children:r.jsx("i",{className:"fa-solid fa-arrows-rotate"})}),r.jsx("h3",{children:"Integrated system"}),r.jsx("p",{children:"Experience, Education, Economy and Environment work as one."})]})]})]})}),r.jsx("section",{className:"cta",id:"contact",children:r.jsxs("div",{className:"wrap cta-box",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Let's build it together."}),r.jsx("p",{children:"Activate the ecosystem for your company, or start building your Experience Identity."})]}),r.jsxs("div",{className:"actions",style:{margin:0},children:[r.jsx("a",{className:"button",href:"/business-club",children:"For Companies"}),r.jsx("a",{className:"button secondary",href:"/talent",children:"For Talents"}),r.jsx("a",{className:"button secondary",href:"/contact",children:"Contact us"})]})]})}),r.jsx("section",{className:"newsletter",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Stay up to date"}),r.jsx("p",{children:"Subscribe to the newsletter for updates from the ecosystem."})]}),r.jsxs("form",{className:"newsletter-form",children:[r.jsx("input",{type:"email",placeholder:"Email address","aria-label":"Email address"}),r.jsx("button",{className:"button",type:"submit",children:"Subscribe"})]})]})})]}),r.jsx(ia,{}),r.jsxs("aside",{className:"cookie","aria-label":"Cookie notice",children:["We use cookies to improve your experience. By continuing, you accept our privacy policy.",r.jsx("button",{className:"button",onClick:t=>{var i;return(i=t.currentTarget.closest(".cookie"))==null?void 0:i.remove()},children:"Accept"})]})]})}iy.createRoot(document.getElementById("root")).render(r.jsx(K0.StrictMode,{children:r.jsx(bA,{})}));
