(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Hx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gf={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Gx(){if(Kg)return Eo;Kg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var Qg;function Vx(){return Qg||(Qg=1,Gf.exports=Gx()),Gf.exports}var p=Vx(),Vf={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function jx(){if(Jg)return tt;Jg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(U,ne,ve){this.props=U,this.context=ne,this.refs=M,this.updater=ve||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function B(){}B.prototype=x.prototype;function N(U,ne,ve){this.props=U,this.context=ne,this.refs=M,this.updater=ve||A}var z=N.prototype=new B;z.constructor=N,w(z,x.prototype),z.isPureReactComponent=!0;var ie=Array.isArray;function G(){}var P={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function D(U,ne,ve){var q=ve.ref;return{$$typeof:o,type:U,key:ne,ref:q!==void 0?q:null,props:ve}}function C(U,ne){return D(U.type,ne,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function ce(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ne[ve]})}var oe=/\/+/g;function me(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?ce(""+U.key):ne.toString(36)}function de(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(G,G):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,ne,ve,q,le){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var Ee=!1;if(U===null)Ee=!0;else switch(ye){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(U.$$typeof){case o:case t:Ee=!0;break;case v:return Ee=U._init,L(Ee(U._payload),ne,ve,q,le)}}if(Ee)return le=le(U),Ee=q===""?"."+me(U,0):q,ie(le)?(ve="",Ee!=null&&(ve=Ee.replace(oe,"$&/")+"/"),L(le,ne,ve,"",function(nt){return nt})):le!=null&&(V(le)&&(le=C(le,ve+(le.key==null||U&&U.key===le.key?"":(""+le.key).replace(oe,"$&/")+"/")+Ee)),ne.push(le)),1;Ee=0;var Ge=q===""?".":q+":";if(ie(U))for(var He=0;He<U.length;He++)q=U[He],ye=Ge+me(q,He),Ee+=L(q,ne,ve,ye,le);else if(He=E(U),typeof He=="function")for(U=He.call(U),He=0;!(q=U.next()).done;)q=q.value,ye=Ge+me(q,He++),Ee+=L(q,ne,ve,ye,le);else if(ye==="object"){if(typeof U.then=="function")return L(de(U),ne,ve,q,le);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function W(U,ne,ve){if(U==null)return U;var q=[],le=0;return L(U,q,"","",function(ye){return ne.call(ve,ye,le++)}),q}function Z(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:W,forEach:function(U,ne,ve){W(U,function(){ne.apply(this,arguments)},ve)},count:function(U){var ne=0;return W(U,function(){ne++}),ne},toArray:function(U){return W(U,function(ne){return ne})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return tt.Activity=y,tt.Children=be,tt.Component=x,tt.Fragment=i,tt.Profiler=l,tt.PureComponent=N,tt.StrictMode=s,tt.Suspense=g,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,tt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},tt.cache=function(U){return function(){return U.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(U,ne,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var q=w({},U.props),le=U.key;if(ne!=null)for(ye in ne.key!==void 0&&(le=""+ne.key),ne)!J.call(ne,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ne.ref===void 0||(q[ye]=ne[ye]);var ye=arguments.length-2;if(ye===1)q.children=ve;else if(1<ye){for(var Ee=Array(ye),Ge=0;Ge<ye;Ge++)Ee[Ge]=arguments[Ge+2];q.children=Ee}return D(U.type,le,q)},tt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},tt.createElement=function(U,ne,ve){var q,le={},ye=null;if(ne!=null)for(q in ne.key!==void 0&&(ye=""+ne.key),ne)J.call(ne,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(le[q]=ne[q]);var Ee=arguments.length-2;if(Ee===1)le.children=ve;else if(1<Ee){for(var Ge=Array(Ee),He=0;He<Ee;He++)Ge[He]=arguments[He+2];le.children=Ge}if(U&&U.defaultProps)for(q in Ee=U.defaultProps,Ee)le[q]===void 0&&(le[q]=Ee[q]);return D(U,ye,le)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(U){return{$$typeof:h,render:U}},tt.isValidElement=V,tt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:Z}},tt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},tt.startTransition=function(U){var ne=P.T,ve={};P.T=ve;try{var q=U(),le=P.S;le!==null&&le(ve,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(G,Me)}catch(ye){Me(ye)}finally{ne!==null&&ve.types!==null&&(ne.types=ve.types),P.T=ne}},tt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},tt.use=function(U){return P.H.use(U)},tt.useActionState=function(U,ne,ve){return P.H.useActionState(U,ne,ve)},tt.useCallback=function(U,ne){return P.H.useCallback(U,ne)},tt.useContext=function(U){return P.H.useContext(U)},tt.useDebugValue=function(){},tt.useDeferredValue=function(U,ne){return P.H.useDeferredValue(U,ne)},tt.useEffect=function(U,ne){return P.H.useEffect(U,ne)},tt.useEffectEvent=function(U){return P.H.useEffectEvent(U)},tt.useId=function(){return P.H.useId()},tt.useImperativeHandle=function(U,ne,ve){return P.H.useImperativeHandle(U,ne,ve)},tt.useInsertionEffect=function(U,ne){return P.H.useInsertionEffect(U,ne)},tt.useLayoutEffect=function(U,ne){return P.H.useLayoutEffect(U,ne)},tt.useMemo=function(U,ne){return P.H.useMemo(U,ne)},tt.useOptimistic=function(U,ne){return P.H.useOptimistic(U,ne)},tt.useReducer=function(U,ne,ve){return P.H.useReducer(U,ne,ve)},tt.useRef=function(U){return P.H.useRef(U)},tt.useState=function(U){return P.H.useState(U)},tt.useSyncExternalStore=function(U,ne,ve){return P.H.useSyncExternalStore(U,ne,ve)},tt.useTransition=function(){return P.H.useTransition()},tt.version="19.2.7",tt}var $g;function th(){return $g||($g=1,Vf.exports=jx()),Vf.exports}var vr=th();const kx=Hx(vr);var jf={exports:{}},bo={},kf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function Xx(){return e_||(e_=1,(function(o){function t(L,W){var Z=L.length;L.push(W);e:for(;0<Z;){var Me=Z-1>>>1,be=L[Me];if(0<l(be,W))L[Me]=W,L[Z]=be,Z=Me;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var W=L[0],Z=L.pop();if(Z!==W){L[0]=Z;e:for(var Me=0,be=L.length,U=be>>>1;Me<U;){var ne=2*(Me+1)-1,ve=L[ne],q=ne+1,le=L[q];if(0>l(ve,Z))q<be&&0>l(le,ve)?(L[Me]=le,L[q]=Z,Me=q):(L[Me]=ve,L[ne]=Z,Me=ne);else if(q<be&&0>l(le,Z))L[Me]=le,L[q]=Z,Me=q;else break e}}return W}function l(L,W){var Z=L.sortIndex-W.sortIndex;return Z!==0?Z:L.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],m=[],v=1,y=null,S=3,E=!1,A=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function z(L){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=L)s(m),W.sortIndex=W.expirationTime,t(g,W);else break;W=i(m)}}function ie(L){if(w=!1,z(L),!A)if(i(g)!==null)A=!0,G||(G=!0,ce());else{var W=i(m);W!==null&&de(ie,W.startTime-L)}}var G=!1,P=-1,J=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<J)}function V(){if(M=!1,G){var L=o.unstable_now();D=L;var W=!0;try{e:{A=!1,w&&(w=!1,B(P),P=-1),E=!0;var Z=S;try{t:{for(z(L),y=i(g);y!==null&&!(y.expirationTime>L&&C());){var Me=y.callback;if(typeof Me=="function"){y.callback=null,S=y.priorityLevel;var be=Me(y.expirationTime<=L);if(L=o.unstable_now(),typeof be=="function"){y.callback=be,z(L),W=!0;break t}y===i(g)&&s(g),z(L)}else s(g);y=i(g)}if(y!==null)W=!0;else{var U=i(m);U!==null&&de(ie,U.startTime-L),W=!1}}break e}finally{y=null,S=Z,E=!1}W=void 0}}finally{W?ce():G=!1}}}var ce;if(typeof N=="function")ce=function(){N(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=V,ce=function(){me.postMessage(null)}}else ce=function(){x(V,0)};function de(L,W){P=x(function(){L(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var Z=S;S=W;try{return L()}finally{S=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=S;S=L;try{return W()}finally{S=Z}},o.unstable_scheduleCallback=function(L,W,Z){var Me=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Me+Z:Me):Z=Me,L){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,L={id:v++,callback:W,priorityLevel:L,startTime:Z,expirationTime:be,sortIndex:-1},Z>Me?(L.sortIndex=Z,t(m,L),i(g)===null&&L===i(m)&&(w?(B(P),P=-1):w=!0,de(ie,Z-Me))):(L.sortIndex=be,t(g,L),A||E||(A=!0,G||(G=!0,ce()))),L},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(L){var W=S;return function(){var Z=S;S=W;try{return L.apply(this,arguments)}finally{S=Z}}}})(Xf)),Xf}var t_;function Wx(){return t_||(t_=1,kf.exports=Xx()),kf.exports}var Wf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function qx(){if(n_)return Mn;n_=1;var o=th();function t(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,m,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:g,containerInfo:m,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mn.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(g,m,null,v)},Mn.flushSync=function(g){var m=d.T,v=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=m,s.p=v,s.d.f()}},Mn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Mn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Mn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,y=h(v,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:E}):v==="script"&&s.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Mn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,y=h(v,m.crossOrigin);s.d.L(g,v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=h(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Mn.requestFormReset=function(g){s.d.r(g)},Mn.unstable_batchedUpdates=function(g,m){return g(m)},Mn.useFormState=function(g,m,v){return d.H.useFormState(g,m,v)},Mn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Mn.version="19.2.7",Mn}var i_;function Yx(){if(i_)return Wf.exports;i_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wf.exports=qx(),Wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function Zx(){if(a_)return bo;a_=1;var o=Wx(),t=th(),i=Yx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return g(c),e;if(f===r)return g(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,b=c.child;b;){if(b===a){_=!0,a=c,r=f;break}if(b===r){_=!0,r=c,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,r=c;break}if(b===r){_=!0,r=f,a=c;break}b=b.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case ie:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var de=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function U(e){return{current:e}}function ne(e){0>be||(e.current=Me[be],Me[be]=null,be--)}function ve(e,n){be++,Me[be]=e.current,e.current=n}var q=U(null),le=U(null),ye=U(null),Ee=U(null);function Ge(e,n){switch(ve(ye,n),ve(le,e),ve(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?xg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=xg(n),e=yg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(q),ve(q,e)}function He(){ne(q),ne(le),ne(ye)}function nt(e){e.memoizedState!==null&&ve(Ee,e);var n=q.current,a=yg(n,e.type);n!==a&&(ve(le,e),ve(q,a))}function Lt(e){le.current===e&&(ne(q),ne(le)),Ee.current===e&&(ne(Ee),xo._currentValue=Z)}var F,jt;function ut(e){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+jt}var yt=!1;function Ve(e,n){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(se){var $=se}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(se){$=se}e.call(pe.prototype)}}else{try{throw Error()}catch(se){$=se}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(se){if(se&&$&&typeof se.stack=="string")return[se.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var I=_.split(`
`),Q=b.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===Q.length)for(r=I.length-1,c=Q.length-1;1<=r&&0<=c&&I[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==Q[c]){var ue=`
`+I[r].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=r&&0<=c);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ve(e.type,!1);case 11:return Ve(e.type.render,!1);case 1:return Ve(e.type,!0);case 31:return ut("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var et=Object.prototype.hasOwnProperty,O=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,ae=o.unstable_shouldYield,Se=o.unstable_requestPaint,_e=o.unstable_now,xe=o.unstable_getCurrentPriorityLevel,We=o.unstable_ImmediatePriority,De=o.unstable_UserBlockingPriority,Le=o.unstable_NormalPriority,it=o.unstable_LowPriority,Ae=o.unstable_IdlePriority,Oe=o.log,ht=o.unstable_setDisableYieldValue,Ke=null,we=null;function Ye(e){if(typeof Oe=="function"&&ht(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Ke,e)}catch{}}var Ze=Math.clz32?Math.clz32:Re,zt=Math.log,j=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(zt(e)/j|0)|0}var he=256,ge=262144,Ce=4194304;function ke(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=ke(r):(_&=b,_!==0?c=ke(_):a||(a=b&~e,a!==0&&(c=ke(a))))):(b=r&~f,b!==0?c=ke(b):_!==0?c=ke(_):a||(a=r&~e,a!==0&&(c=ke(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Pt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function an(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(){var e=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),e}function Bn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ho(e,n,a,r,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=_&~a;0<a;){var ue=31-Ze(a),pe=1<<ue;b[ue]=0,I[ue]=-1;var $=Q[ue];if($!==null)for(Q[ue]=null,ue=0;ue<$.length;ue++){var se=$[ue];se!==null&&(se.lane&=-536870913)}a&=~pe}r!==0&&_i(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function _i(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ze(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function xs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ze(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function wr(e,n){var a=n&-n;return a=(a&42)!==0?1:ys(a),(a&(e.suspendedLanes|n))!==0?0:a}function ys(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ta(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function Fa(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var si=Math.random().toString(36).slice(2),Qt="__reactFiber$"+si,vn="__reactProps$"+si,na="__reactContainer$"+si,Dr="__reactEvents$"+si,R="__reactListeners$"+si,k="__reactHandles$"+si,ee="__reactResources$"+si,te="__reactMarker$"+si;function Y(e){delete e[Qt],delete e[vn],delete e[Dr],delete e[R],delete e[k]}function Te(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[na]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Rg(e);e!==null;){if(a=e[Qt])return a;e=Rg(e)}return n}e=a,a=e.parentNode}return null}function Ne(e){if(e=e[Qt]||e[na]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Pe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ze(e){var n=e[ee];return n||(n=e[ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[te]=!0}var Je=new Set,qe={};function ct(e,n){At(e,n),At(e+"Capture",n)}function At(e,n){for(qe[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xn={},xt={};function je(e){return et.call(xt,e)?!0:et.call(xn,e)?!1:Ht.test(e)?xt[e]=!0:(xn[e]=!0,!1)}function Xt(e,n,a){if(je(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ur(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Gt(e){if(!e._valueTracker){var n=yn(e)?"checked":"value";e._valueTracker=Ur(e,n,""+e[n])}}function ri(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=yn(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rn=/[\n"\\]/g;function Sn(e){return e.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Lr(e,n,a,r,c,f,_,b){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Pc(e,_,sn(n)):a!=null?Pc(e,_,sn(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+sn(b):e.removeAttribute("name")}function Or(e,n,a,r,c,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Gt(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Gt(e)}function Pc(e,n,a){n==="number"&&ia(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ss(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function ph(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function mh(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Gt(e)}function Ms(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Pv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _h(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&gh(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&gh(e,f,n[f])}function zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return Iv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ri(){}var Ic=null;function Bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,bs=null;function vh(e){var n=Ne(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Lr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[vn]||null;if(!c)throw Error(s(90));Lr(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&ri(r)}break e;case"textarea":ph(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ss(e,!!a.multiple,n,!1)}}}var Fc=!1;function xh(e,n,a){if(Fc)return e(n,a);Fc=!0;try{var r=e(n);return r}finally{if(Fc=!1,(Es!==null||bs!==null)&&(Cl(),Es&&(n=Es,e=bs,bs=Es=null,vh(n),e)))for(n=0;n<e.length;n++)vh(e[n])}}function Pr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[vn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Ci)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Hc=!1}var aa=null,Gc=null,Vo=null;function yh(){if(Vo)return Vo;var e,n=Gc,a=n.length,r,c="value"in aa?aa.value:aa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Vo=c.slice(e,1<r?1-r:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Sh(){return!1}function Cn(e){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Sh,this.isPropagationStopped=Sh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Cn(Ha),Ir=y({},Ha,{view:0,detail:0}),Bv=Cn(Ir),Vc,jc,Br,Wo=y({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Vc=e.screenX-Br.screenX,jc=e.screenY-Br.screenY):jc=Vc=0,Br=e),Vc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),Mh=Cn(Wo),Fv=y({},Wo,{dataTransfer:0}),Hv=Cn(Fv),Gv=y({},Ir,{relatedTarget:0}),kc=Cn(Gv),Vv=y({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Cn(Vv),kv=y({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xv=Cn(kv),Wv=y({},Ha,{data:0}),Eh=Cn(Wv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zv[e])?!!n[e]:!1}function Xc(){return Kv}var Qv=y({},Ir,{key:function(e){if(e.key){var n=qv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jv=Cn(Qv),$v=y({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Cn($v),e0=y({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),t0=Cn(e0),n0=y({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=Cn(n0),a0=y({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=Cn(a0),r0=y({},Ha,{newState:0,oldState:0}),o0=Cn(r0),l0=[9,13,27,32],Wc=Ci&&"CompositionEvent"in window,Fr=null;Ci&&"documentMode"in document&&(Fr=document.documentMode);var c0=Ci&&"TextEvent"in window&&!Fr,Th=Ci&&(!Wc||Fr&&8<Fr&&11>=Fr),Ah=" ",Rh=!1;function Ch(e,n){switch(e){case"keyup":return l0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ts=!1;function u0(e,n){switch(e){case"compositionend":return wh(n);case"keypress":return n.which!==32?null:(Rh=!0,Ah);case"textInput":return e=n.data,e===Ah&&Rh?null:e;default:return null}}function f0(e,n){if(Ts)return e==="compositionend"||!Wc&&Ch(e,n)?(e=yh(),Vo=Gc=aa=null,Ts=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Th&&n.locale!=="ko"?null:n.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!d0[e.type]:n==="textarea"}function Dh(e,n,a,r){Es?bs?bs.push(r):bs=[r]:Es=r,n=Pl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Hr=null,Gr=null;function h0(e){hg(e,0)}function qo(e){var n=Pe(e);if(ri(n))return e}function Uh(e,n){if(e==="change")return n}var Lh=!1;if(Ci){var qc;if(Ci){var Yc="oninput"in document;if(!Yc){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),Yc=typeof Oh.oninput=="function"}qc=Yc}else qc=!1;Lh=qc&&(!document.documentMode||9<document.documentMode)}function Ph(){Hr&&(Hr.detachEvent("onpropertychange",zh),Gr=Hr=null)}function zh(e){if(e.propertyName==="value"&&qo(Gr)){var n=[];Dh(n,Gr,e,Bc(e)),xh(h0,n)}}function p0(e,n,a){e==="focusin"?(Ph(),Hr=n,Gr=a,Hr.attachEvent("onpropertychange",zh)):e==="focusout"&&Ph()}function m0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Gr)}function g0(e,n){if(e==="click")return qo(n)}function _0(e,n){if(e==="input"||e==="change")return qo(n)}function v0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fn=typeof Object.is=="function"?Object.is:v0;function Vr(e,n){if(Fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!et.call(n,c)||!Fn(e[c],n[c]))return!1}return!0}function Ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bh(e,n){var a=Ih(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ih(a)}}function Fh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ia(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ia(e.document)}return n}function Zc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var x0=Ci&&"documentMode"in document&&11>=document.documentMode,As=null,Kc=null,jr=null,Qc=!1;function Gh(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||As==null||As!==ia(r)||(r=As,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Vr(jr,r)||(jr=r,r=Pl(Kc,"onSelect"),0<r.length&&(n=new Xo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=As)))}function Ga(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Rs={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Jc={},Vh={};Ci&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Va(e){if(Jc[e])return Jc[e];if(!Rs[e])return e;var n=Rs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vh)return Jc[e]=n[a];return e}var jh=Va("animationend"),kh=Va("animationiteration"),Xh=Va("animationstart"),y0=Va("transitionrun"),S0=Va("transitionstart"),M0=Va("transitioncancel"),Wh=Va("transitionend"),qh=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function oi(e,n){qh.set(e,n),ct(n,[e])}var Yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Cs=0,eu=0;function Zo(){for(var e=Cs,n=eu=Cs=0;n<e;){var a=Zn[n];Zn[n++]=null;var r=Zn[n];Zn[n++]=null;var c=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&Yh(a,c,f)}}function Ko(e,n,a,r){Zn[Cs++]=e,Zn[Cs++]=n,Zn[Cs++]=a,Zn[Cs++]=r,eu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function tu(e,n,a,r){return Ko(e,n,a,r),Qo(e)}function ja(e,n){return Ko(e,null,null,n),Qo(e)}function Yh(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ze(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Qo(e){if(50<fo)throw fo=0,ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ws={};function E0(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,n,a,r){return new E0(e,n,a,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wi(e,n){var a=e.alternate;return a===null?(a=Hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Jo(e,n,a,r,c,f){var _=0;if(r=e,typeof e=="function")nu(e)&&(_=1);else if(typeof e=="string")_=Cx(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Hn(31,a,n,c),e.elementType=D,e.lanes=f,e;case w:return ka(a.children,c,f,n);case M:_=8,c|=24;break;case x:return e=Hn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case ie:return e=Hn(13,a,n,c),e.elementType=ie,e.lanes=f,e;case G:return e=Hn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:_=10;break e;case B:_=9;break e;case z:_=11;break e;case P:_=14;break e;case J:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Hn(_,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ka(e,n,a,r){return e=Hn(7,e,r,n),e.lanes=a,e}function iu(e,n,a){return e=Hn(6,e,null,n),e.lanes=a,e}function Kh(e){var n=Hn(18,null,null,0);return n.stateNode=e,n}function au(e,n,a){return n=Hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Qh=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=Qh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},Qh.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var Ns=[],Ds=0,$o=null,kr=0,Qn=[],Jn=0,sa=null,vi=1,xi="";function Ni(e,n){Ns[Ds++]=kr,Ns[Ds++]=$o,$o=e,kr=n}function Jh(e,n,a){Qn[Jn++]=vi,Qn[Jn++]=xi,Qn[Jn++]=sa,sa=e;var r=vi;e=xi;var c=32-Ze(r)-1;r&=~(1<<c),a+=1;var f=32-Ze(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,vi=1<<32-Ze(n)+c|a<<c|r,xi=f+e}else vi=1<<f|a<<c|r,xi=e}function su(e){e.return!==null&&(Ni(e,1),Jh(e,1,0))}function ru(e){for(;e===$o;)$o=Ns[--Ds],Ns[Ds]=null,kr=Ns[--Ds],Ns[Ds]=null;for(;e===sa;)sa=Qn[--Jn],Qn[Jn]=null,xi=Qn[--Jn],Qn[Jn]=null,vi=Qn[--Jn],Qn[Jn]=null}function $h(e,n){Qn[Jn++]=vi,Qn[Jn++]=xi,Qn[Jn++]=sa,vi=n.id,xi=n.overflow,sa=e}var hn=null,It=null,_t=!1,ra=null,$n=!1,ou=Error(s(519));function oa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xr(Kn(n,e)),ou}function ep(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Qt]=e,n[vn]=r,a){case"dialog":dt("cancel",n),dt("close",n);break;case"iframe":case"object":case"embed":dt("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)dt(po[a],n);break;case"source":dt("error",n);break;case"img":case"image":case"link":dt("error",n),dt("load",n);break;case"details":dt("toggle",n);break;case"input":dt("invalid",n),Or(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":dt("invalid",n);break;case"textarea":dt("invalid",n),mh(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||_g(n.textContent,a)?(r.popover!=null&&(dt("beforetoggle",n),dt("toggle",n)),r.onScroll!=null&&dt("scroll",n),r.onScrollEnd!=null&&dt("scrollend",n),r.onClick!=null&&(n.onclick=Ri),n=!0):n=!1,n||oa(e,!0)}function tp(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:hn=hn.return}}function Us(e){if(e!==hn)return!1;if(!_t)return tp(e),_t=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Af(e.type,e.memoizedProps)),a=!a),a&&It&&oa(e),tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));It=Ag(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));It=Ag(e)}else n===27?(n=It,Sa(e.type)?(e=Df,Df=null,It=e):It=n):It=hn?ti(e.stateNode.nextSibling):null;return!0}function Xa(){It=hn=null,_t=!1}function lu(){var e=ra;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),ra=null),e}function Xr(e){ra===null?ra=[e]:ra.push(e)}var cu=U(null),Wa=null,Di=null;function la(e,n,a){ve(cu,n._currentValue),n._currentValue=a}function Ui(e){e._currentValue=cu.current,ne(cu)}function uu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function fu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),uu(f.return,a,e),r||(_=null);break e}f=b.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),uu(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ls(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var b=c.type;Fn(c.pendingProps.value,_.value)||(e!==null?e.push(b):e=[b])}}else if(c===Ee.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&fu(n,e,a,r),n.flags|=262144}function el(e){for(e=e.firstContext;e!==null;){if(!Fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Wa=e,Di=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return np(Wa,e)}function tl(e,n){return Wa===null&&qa(e),np(e,n)}function np(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Di===null){if(e===null)throw Error(s(308));Di=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Di=Di.next=n;return a}var b0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},T0=o.unstable_scheduleCallback,A0=o.unstable_NormalPriority,Jt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new b0,data:new Map,refCount:0}}function Wr(e){e.refCount--,e.refCount===0&&T0(A0,function(){e.controller.abort()})}var qr=null,hu=0,Os=0,Ps=null;function R0(e,n){if(qr===null){var a=qr=[];hu=0,Os=_f(),Ps={status:"pending",value:void 0,then:function(r){a.push(r)}}}return hu++,n.then(ip,ip),n}function ip(){if(--hu===0&&qr!==null){Ps!==null&&(Ps.status="fulfilled");var e=qr;qr=null,Os=0,Ps=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function C0(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var ap=L.S;L.S=function(e,n){Gm=_e(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&R0(e,n),ap!==null&&ap(e,n)};var Ya=U(null);function pu(){var e=Ya.current;return e!==null?e:Ot.pooledCache}function nl(e,n){n===null?ve(Ya,Ya.current):ve(Ya,n.pool)}function sp(){var e=pu();return e===null?null:{parent:Jt._currentValue,pool:e}}var zs=Error(s(460)),mu=Error(s(474)),il=Error(s(542)),al={then:function(){}};function rp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function op(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ri,Ri),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cp(e),e;default:if(typeof n.status=="string")n.then(Ri,Ri);else{if(e=Ot,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cp(e),e}throw Ka=n,zs}}function Za(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,zs):a}}var Ka=null;function lp(){if(Ka===null)throw Error(s(459));var e=Ka;return Ka=null,e}function cp(e){if(e===zs||e===il)throw Error(s(483))}var Is=null,Yr=0;function sl(e){var n=Yr;return Yr+=1,Is===null&&(Is=[]),op(Is,e,n)}function Zr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function rl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function up(e){function n(X,H){if(e){var K=X.deletions;K===null?(X.deletions=[H],X.flags|=16):K.push(H)}}function a(X,H){if(!e)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function r(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function c(X,H){return X=wi(X,H),X.index=0,X.sibling=null,X}function f(X,H,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<H?(X.flags|=67108866,H):K):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function _(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function b(X,H,K,fe){return H===null||H.tag!==6?(H=iu(K,X.mode,fe),H.return=X,H):(H=c(H,K),H.return=X,H)}function I(X,H,K,fe){var Xe=K.type;return Xe===w?ue(X,H,K.props.children,fe,K.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Za(Xe)===H.type)?(H=c(H,K.props),Zr(H,K),H.return=X,H):(H=Jo(K.type,K.key,K.props,null,X.mode,fe),Zr(H,K),H.return=X,H)}function Q(X,H,K,fe){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=au(K,X.mode,fe),H.return=X,H):(H=c(H,K.children||[]),H.return=X,H)}function ue(X,H,K,fe,Xe){return H===null||H.tag!==7?(H=ka(K,X.mode,fe,Xe),H.return=X,H):(H=c(H,K),H.return=X,H)}function pe(X,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=iu(""+H,X.mode,K),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return K=Jo(H.type,H.key,H.props,null,X.mode,K),Zr(K,H),K.return=X,K;case A:return H=au(H,X.mode,K),H.return=X,H;case J:return H=Za(H),pe(X,H,K)}if(de(H)||ce(H))return H=ka(H,X.mode,K,null),H.return=X,H;if(typeof H.then=="function")return pe(X,sl(H),K);if(H.$$typeof===N)return pe(X,tl(X,H),K);rl(X,H)}return null}function $(X,H,K,fe){var Xe=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xe!==null?null:b(X,H,""+K,fe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Xe?I(X,H,K,fe):null;case A:return K.key===Xe?Q(X,H,K,fe):null;case J:return K=Za(K),$(X,H,K,fe)}if(de(K)||ce(K))return Xe!==null?null:ue(X,H,K,fe,null);if(typeof K.then=="function")return $(X,H,sl(K),fe);if(K.$$typeof===N)return $(X,H,tl(X,K),fe);rl(X,K)}return null}function se(X,H,K,fe,Xe){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return X=X.get(K)||null,b(H,X,""+fe,Xe);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case E:return X=X.get(fe.key===null?K:fe.key)||null,I(H,X,fe,Xe);case A:return X=X.get(fe.key===null?K:fe.key)||null,Q(H,X,fe,Xe);case J:return fe=Za(fe),se(X,H,K,fe,Xe)}if(de(fe)||ce(fe))return X=X.get(K)||null,ue(H,X,fe,Xe,null);if(typeof fe.then=="function")return se(X,H,K,sl(fe),Xe);if(fe.$$typeof===N)return se(X,H,K,tl(H,fe),Xe);rl(H,fe)}return null}function Be(X,H,K,fe){for(var Xe=null,St=null,Fe=H,st=H=0,mt=null;Fe!==null&&st<K.length;st++){Fe.index>st?(mt=Fe,Fe=null):mt=Fe.sibling;var Mt=$(X,Fe,K[st],fe);if(Mt===null){Fe===null&&(Fe=mt);break}e&&Fe&&Mt.alternate===null&&n(X,Fe),H=f(Mt,H,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt,Fe=mt}if(st===K.length)return a(X,Fe),_t&&Ni(X,st),Xe;if(Fe===null){for(;st<K.length;st++)Fe=pe(X,K[st],fe),Fe!==null&&(H=f(Fe,H,st),St===null?Xe=Fe:St.sibling=Fe,St=Fe);return _t&&Ni(X,st),Xe}for(Fe=r(Fe);st<K.length;st++)mt=se(Fe,X,st,K[st],fe),mt!==null&&(e&&mt.alternate!==null&&Fe.delete(mt.key===null?st:mt.key),H=f(mt,H,st),St===null?Xe=mt:St.sibling=mt,St=mt);return e&&Fe.forEach(function(Aa){return n(X,Aa)}),_t&&Ni(X,st),Xe}function Qe(X,H,K,fe){if(K==null)throw Error(s(151));for(var Xe=null,St=null,Fe=H,st=H=0,mt=null,Mt=K.next();Fe!==null&&!Mt.done;st++,Mt=K.next()){Fe.index>st?(mt=Fe,Fe=null):mt=Fe.sibling;var Aa=$(X,Fe,Mt.value,fe);if(Aa===null){Fe===null&&(Fe=mt);break}e&&Fe&&Aa.alternate===null&&n(X,Fe),H=f(Aa,H,st),St===null?Xe=Aa:St.sibling=Aa,St=Aa,Fe=mt}if(Mt.done)return a(X,Fe),_t&&Ni(X,st),Xe;if(Fe===null){for(;!Mt.done;st++,Mt=K.next())Mt=pe(X,Mt.value,fe),Mt!==null&&(H=f(Mt,H,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return _t&&Ni(X,st),Xe}for(Fe=r(Fe);!Mt.done;st++,Mt=K.next())Mt=se(Fe,X,st,Mt.value,fe),Mt!==null&&(e&&Mt.alternate!==null&&Fe.delete(Mt.key===null?st:Mt.key),H=f(Mt,H,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return e&&Fe.forEach(function(Fx){return n(X,Fx)}),_t&&Ni(X,st),Xe}function Ut(X,H,K,fe){if(typeof K=="object"&&K!==null&&K.type===w&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:e:{for(var Xe=K.key;H!==null;){if(H.key===Xe){if(Xe=K.type,Xe===w){if(H.tag===7){a(X,H.sibling),fe=c(H,K.props.children),fe.return=X,X=fe;break e}}else if(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Za(Xe)===H.type){a(X,H.sibling),fe=c(H,K.props),Zr(fe,K),fe.return=X,X=fe;break e}a(X,H);break}else n(X,H);H=H.sibling}K.type===w?(fe=ka(K.props.children,X.mode,fe,K.key),fe.return=X,X=fe):(fe=Jo(K.type,K.key,K.props,null,X.mode,fe),Zr(fe,K),fe.return=X,X=fe)}return _(X);case A:e:{for(Xe=K.key;H!==null;){if(H.key===Xe)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(X,H.sibling),fe=c(H,K.children||[]),fe.return=X,X=fe;break e}else{a(X,H);break}else n(X,H);H=H.sibling}fe=au(K,X.mode,fe),fe.return=X,X=fe}return _(X);case J:return K=Za(K),Ut(X,H,K,fe)}if(de(K))return Be(X,H,K,fe);if(ce(K)){if(Xe=ce(K),typeof Xe!="function")throw Error(s(150));return K=Xe.call(K),Qe(X,H,K,fe)}if(typeof K.then=="function")return Ut(X,H,sl(K),fe);if(K.$$typeof===N)return Ut(X,H,tl(X,K),fe);rl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(X,H.sibling),fe=c(H,K),fe.return=X,X=fe):(a(X,H),fe=iu(K,X.mode,fe),fe.return=X,X=fe),_(X)):a(X,H)}return function(X,H,K,fe){try{Yr=0;var Xe=Ut(X,H,K,fe);return Is=null,Xe}catch(Fe){if(Fe===zs||Fe===il)throw Fe;var St=Hn(29,Fe,null,X.mode);return St.lanes=fe,St.return=X,St}finally{}}}var Qa=up(!0),fp=up(!1),ca=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Et&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Qo(e),Yh(e,null,a),n}return Ko(e,r,n,a),Qo(e)}function Kr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,xs(e,a)}}function vu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xu=!1;function Qr(){if(xu){var e=Ps;if(e!==null)throw e}}function Jr(e,n,a,r){xu=!1;var c=e.updateQueue;ca=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,Q=I.next;I.next=null,_===null?f=Q:_.next=Q,_=I;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,b=ue.lastBaseUpdate,b!==_&&(b===null?ue.firstBaseUpdate=Q:b.next=Q,ue.lastBaseUpdate=I))}if(f!==null){var pe=c.baseState;_=0,ue=Q=I=null,b=f;do{var $=b.lane&-536870913,se=$!==b.lane;if(se?(pt&$)===$:(r&$)===$){$!==0&&$===Os&&(xu=!0),ue!==null&&(ue=ue.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Be=e,Qe=b;$=n;var Ut=a;switch(Qe.tag){case 1:if(Be=Qe.payload,typeof Be=="function"){pe=Be.call(Ut,pe,$);break e}pe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Qe.payload,$=typeof Be=="function"?Be.call(Ut,pe,$):Be,$==null)break e;pe=y({},pe,$);break e;case 2:ca=!0}}$=b.callback,$!==null&&(e.flags|=64,se&&(e.flags|=8192),se=c.callbacks,se===null?c.callbacks=[$]:se.push($))}else se={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ue===null?(Q=ue=se,I=pe):ue=ue.next=se,_|=$;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;se=b,b=se.next,se.next=null,c.lastBaseUpdate=se,c.shared.pending=null}}while(!0);ue===null&&(I=pe),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),ga|=_,e.lanes=_,e.memoizedState=pe}}function dp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dp(a[e],n)}var Bs=U(null),ol=U(0);function pp(e,n){e=Gi,ve(ol,e),ve(Bs,n),Gi=e|n.baseLanes}function yu(){ve(ol,Gi),ve(Bs,Bs.current)}function Su(){Gi=ol.current,ne(Bs),ne(ol)}var Gn=U(null),ei=null;function da(e){var n=e.alternate;ve(Zt,Zt.current&1),ve(Gn,e),ei===null&&(n===null||Bs.current!==null||n.memoizedState!==null)&&(ei=e)}function Mu(e){ve(Zt,Zt.current),ve(Gn,e),ei===null&&(ei=e)}function mp(e){e.tag===22?(ve(Zt,Zt.current),ve(Gn,e),ei===null&&(ei=e)):ha()}function ha(){ve(Zt,Zt.current),ve(Gn,Gn.current)}function Vn(e){ne(Gn),ei===e&&(ei=null),ne(Zt)}var Zt=U(0);function ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Li=0,at=null,Nt=null,$t=null,cl=!1,Fs=!1,Ja=!1,ul=0,$r=0,Hs=null,w0=0;function Wt(){throw Error(s(321))}function Eu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Fn(e[a],n[a]))return!1;return!0}function bu(e,n,a,r,c,f){return Li=f,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Jp:Fu,Ja=!1,f=a(r,c),Ja=!1,Fs&&(f=_p(n,a,r,c)),gp(e),f}function gp(e){L.H=no;var n=Nt!==null&&Nt.next!==null;if(Li=0,$t=Nt=at=null,cl=!1,$r=0,Hs=null,n)throw Error(s(300));e===null||en||(e=e.dependencies,e!==null&&el(e)&&(en=!0))}function _p(e,n,a,r){at=e;var c=0;do{if(Fs&&(Hs=null),$r=0,Fs=!1,25<=c)throw Error(s(301));if(c+=1,$t=Nt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=$p,f=n(a,r)}while(Fs);return f}function N0(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Nt!==null?Nt.memoizedState:null)!==e&&(at.flags|=1024),n}function Tu(){var e=ul!==0;return ul=0,e}function Au(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ru(e){if(cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cl=!1}Li=0,$t=Nt=at=null,Fs=!1,$r=ul=0,Hs=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?at.memoizedState=$t=e:$t=$t.next=e,$t}function Kt(){if(Nt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Nt.next;var n=$t===null?at.memoizedState:$t.next;if(n!==null)$t=n,Nt=e;else{if(e===null)throw at.alternate===null?Error(s(467)):Error(s(310));Nt=e,e={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},$t===null?at.memoizedState=$t=e:$t=$t.next=e}return $t}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=$r;return $r+=1,Hs===null&&(Hs=[]),e=op(Hs,e,n),n=at,($t===null?n.memoizedState:$t.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Jp:Fu),e}function dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===N)return pn(e)}throw Error(s(438,String(e)))}function Cu(e){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=at.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fl(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Oi(e,n){return typeof n=="function"?n(e):n}function hl(e){var n=Kt();return wu(n,Nt,e)}function wu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=_=null,I=null,Q=n,ue=!1;do{var pe=Q.lane&-536870913;if(pe!==Q.lane?(pt&pe)===pe:(Li&pe)===pe){var $=Q.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pe===Os&&(ue=!0);else if((Li&$)===$){Q=Q.next,$===Os&&(ue=!0);continue}else pe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=pe,_=f):I=I.next=pe,at.lanes|=$,ga|=$;pe=Q.action,Ja&&a(f,pe),f=Q.hasEagerState?Q.eagerState:a(f,pe)}else $={lane:pe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=$,_=f):I=I.next=$,at.lanes|=pe,ga|=pe;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?_=f:I.next=b,!Fn(f,e.memoizedState)&&(en=!0,ue&&(a=Ps,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Nu(e){var n=Kt(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Fn(f,n.memoizedState)||(en=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function vp(e,n,a){var r=at,c=Kt(),f=_t;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Fn((Nt||c).memoizedState,a);if(_&&(c.memoizedState=a,en=!0),c=c.queue,Lu(Sp.bind(null,r,c,e),[e]),c.getSnapshot!==n||_||$t!==null&&$t.memoizedState.tag&1){if(r.flags|=2048,Gs(9,{destroy:void 0},yp.bind(null,r,c,a,n),null),Ot===null)throw Error(s(349));f||(Li&127)!==0||xp(r,n,a)}return a}function xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=fl(),at.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function yp(e,n,a,r){n.value=a,n.getSnapshot=r,Mp(n)&&Ep(e)}function Sp(e,n,a){return a(function(){Mp(n)&&Ep(e)})}function Mp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Fn(e,a)}catch{return!0}}function Ep(e){var n=ja(e,2);n!==null&&Ln(n,e,2)}function Du(e){var n=Tn();if(typeof e=="function"){var a=e;if(e=a(),Ja){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},n}function bp(e,n,a,r){return e.baseState=a,wu(e,Nt,typeof r=="function"?r:Oi)}function D0(e,n,a,r,c){if(gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Tp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Tp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var b=a(c,r),I=L.S;I!==null&&I(_,b),Ap(e,n,b)}catch(Q){Uu(e,n,Q)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(c,r),Ap(e,n,f)}catch(Q){Uu(e,n,Q)}}function Ap(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Rp(e,n,r)},function(r){return Uu(e,n,r)}):Rp(e,n,a)}function Rp(e,n,a){n.status="fulfilled",n.value=a,Cp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Tp(e,a)))}function Uu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==r)}e.action=null}function Cp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wp(e,n){return n}function Np(e,n){if(_t){var a=Ot.formState;if(a!==null){e:{var r=at;if(_t){if(It){t:{for(var c=It,f=$n;c.nodeType!==8;){if(!f){c=null;break t}if(c=ti(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){It=ti(c.nextSibling),r=c.data==="F!";break e}}oa(r)}r=!1}r&&(n=a[0])}}return a=Tn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},a.queue=r,a=Zp.bind(null,at,r),r.dispatch=a,r=Du(!1),f=Bu.bind(null,at,!1,r.queue),r=Tn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=D0.bind(null,at,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Dp(e){var n=Kt();return Up(n,Nt,e)}function Up(e,n,a){if(n=wu(e,n,wp)[0],e=hl(Oi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=eo(n)}catch(_){throw _===zs?il:_}else r=n;n=Kt();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(at.flags|=2048,Gs(9,{destroy:void 0},U0.bind(null,c,a),null)),[r,f,e]}function U0(e,n){e.action=n}function Lp(e){var n=Kt(),a=Nt;if(a!==null)return Up(n,a,e);Kt(),n=n.memoizedState,a=Kt();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Gs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=at.updateQueue,n===null&&(n=fl(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Op(){return Kt().memoizedState}function pl(e,n,a,r){var c=Tn();at.flags|=e,c.memoizedState=Gs(1|n,{destroy:void 0},a,r===void 0?null:r)}function ml(e,n,a,r){var c=Kt();r=r===void 0?null:r;var f=c.memoizedState.inst;Nt!==null&&r!==null&&Eu(r,Nt.memoizedState.deps)?c.memoizedState=Gs(n,f,a,r):(at.flags|=e,c.memoizedState=Gs(1|n,f,a,r))}function Pp(e,n){pl(8390656,8,e,n)}function Lu(e,n){ml(2048,8,e,n)}function L0(e){at.flags|=4;var n=at.updateQueue;if(n===null)n=fl(),at.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function zp(e){var n=Kt().memoizedState;return L0({ref:n,nextImpl:e}),function(){if((Et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ip(e,n){return ml(4,2,e,n)}function Bp(e,n){return ml(4,4,e,n)}function Fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hp(e,n,a){a=a!=null?a.concat([e]):null,ml(4,4,Fp.bind(null,n,e),a)}function Ou(){}function Gp(e,n){var a=Kt();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Eu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Vp(e,n){var a=Kt();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Eu(n,r[1]))return r[0];if(r=e(),Ja){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[r,n],r}function Pu(e,n,a){return a===void 0||(Li&1073741824)!==0&&(pt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=jm(),at.lanes|=e,ga|=e,a)}function jp(e,n,a,r){return Fn(a,n)?a:Bs.current!==null?(e=Pu(e,a,r),Fn(e,n)||(en=!0),e):(Li&42)===0||(Li&1073741824)!==0&&(pt&261930)===0?(en=!0,e.memoizedState=a):(e=jm(),at.lanes|=e,ga|=e,n)}function kp(e,n,a,r,c){var f=W.p;W.p=f!==0&&8>f?f:8;var _=L.T,b={};L.T=b,Bu(e,!1,n,a);try{var I=c(),Q=L.S;if(Q!==null&&Q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ue=C0(I,r);to(e,n,ue,Xn(e))}else to(e,n,r,Xn(e))}catch(pe){to(e,n,{then:function(){},status:"rejected",reason:pe},Xn())}finally{W.p=f,_!==null&&b.types!==null&&(_.types=b.types),L.T=_}}function O0(){}function zu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Xp(e).queue;kp(e,c,n,Z,a===null?O0:function(){return Wp(e),a(r)})}function Xp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wp(e){var n=Xp(e);n.next===null&&(n=e.alternate.memoizedState),to(e,n.next.queue,{},Xn())}function Iu(){return pn(xo)}function qp(){return Kt().memoizedState}function Yp(){return Kt().memoizedState}function P0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();e=ua(a);var r=fa(n,e,a);r!==null&&(Ln(r,n,a),Kr(r,n,a)),n={cache:du()},e.payload=n;return}n=n.return}}function z0(e,n,a){var r=Xn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?Kp(n,a):(a=tu(e,n,a,r),a!==null&&(Ln(a,e,r),Qp(a,n,r)))}function Zp(e,n,a){var r=Xn();to(e,n,a,r)}function to(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))Kp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(c.hasEagerState=!0,c.eagerState=b,Fn(b,_))return Ko(e,n,c,0),Ot===null&&Zo(),!1}catch{}finally{}if(a=tu(e,n,c,r),a!==null)return Ln(a,e,r),Qp(a,n,r),!0}return!1}function Bu(e,n,a,r){if(r={lane:2,revertLane:_f(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(s(479))}else n=tu(e,a,r,2),n!==null&&Ln(n,e,2)}function gl(e){var n=e.alternate;return e===at||n!==null&&n===at}function Kp(e,n){Fs=cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Qp(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,xs(e,a)}}var no={readContext:pn,use:dl,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt};no.useEffectEvent=Wt;var Jp={readContext:pn,use:dl,useCallback:function(e,n){return Tn().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Pp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,pl(4194308,4,Fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return pl(4194308,4,e,n)},useInsertionEffect:function(e,n){pl(4,2,e,n)},useMemo:function(e,n){var a=Tn();n=n===void 0?null:n;var r=e();if(Ja){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Tn();if(a!==void 0){var c=a(n);if(Ja){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=z0.bind(null,at,e),[r.memoizedState,e]},useRef:function(e){var n=Tn();return e={current:e},n.memoizedState=e},useState:function(e){e=Du(e);var n=e.queue,a=Zp.bind(null,at,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(e,n){var a=Tn();return Pu(a,e,n)},useTransition:function(){var e=Du(!1);return e=kp.bind(null,at,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=at,c=Tn();if(_t){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ot===null)throw Error(s(349));(pt&127)!==0||xp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Pp(Sp.bind(null,r,f,e),[e]),r.flags|=2048,Gs(9,{destroy:void 0},yp.bind(null,r,f,a,n),null),a},useId:function(){var e=Tn(),n=Ot.identifierPrefix;if(_t){var a=xi,r=vi;a=(r&~(1<<32-Ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=w0++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Iu,useFormState:Np,useActionState:Np,useOptimistic:function(e){var n=Tn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,at,!0,a),a.dispatch=n,[e,n]},useMemoCache:Cu,useCacheRefresh:function(){return Tn().memoizedState=P0.bind(null,at)},useEffectEvent:function(e){var n=Tn(),a={impl:e};return n.memoizedState=a,function(){if((Et&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:pn,use:dl,useCallback:Gp,useContext:pn,useEffect:Lu,useImperativeHandle:Hp,useInsertionEffect:Ip,useLayoutEffect:Bp,useMemo:Vp,useReducer:hl,useRef:Op,useState:function(){return hl(Oi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=Kt();return jp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=hl(Oi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:vp,useId:qp,useHostTransitionStatus:Iu,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,n){var a=Kt();return bp(a,Nt,e,n)},useMemoCache:Cu,useCacheRefresh:Yp};Fu.useEffectEvent=zp;var $p={readContext:pn,use:dl,useCallback:Gp,useContext:pn,useEffect:Lu,useImperativeHandle:Hp,useInsertionEffect:Ip,useLayoutEffect:Bp,useMemo:Vp,useReducer:Nu,useRef:Op,useState:function(){return Nu(Oi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=Kt();return Nt===null?Pu(a,e,n):jp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=Nu(Oi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:vp,useId:qp,useHostTransitionStatus:Iu,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var a=Kt();return Nt!==null?bp(a,Nt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:Yp};$p.useEffectEvent=zp;function Hu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Xn(),c=ua(r);c.payload=n,a!=null&&(c.callback=a),n=fa(e,c,r),n!==null&&(Ln(n,e,r),Kr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Xn(),c=ua(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=fa(e,c,r),n!==null&&(Ln(n,e,r),Kr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xn(),r=ua(a);r.tag=2,n!=null&&(r.callback=n),n=fa(e,r,a),n!==null&&(Ln(n,e,a),Kr(n,e,a))}};function em(e,n,a,r,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vr(a,r)||!Vr(c,f):!0}function tm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function $a(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function nm(e){Yo(e)}function im(e){console.error(e)}function am(e){Yo(e)}function _l(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function sm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(e,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(e,n)},a}function rm(e){return e=ua(e),e.tag=3,e}function om(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){sm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){sm(n,a,r),typeof c!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function I0(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ls(n,a,c,!0),a=Gn.current,a!==null){switch(a.tag){case 31:case 13:return ei===null?wl():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),pf(e,r,c)),!1;case 22:return a.flags|=65536,r===al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),pf(e,r,c)),!1}throw Error(s(435,a.tag))}return pf(e,r,c),wl(),!1}if(_t)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ou&&(e=Error(s(422),{cause:r}),Xr(Kn(e,a)))):(r!==ou&&(n=Error(s(423),{cause:r}),Xr(Kn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Kn(r,a),c=Vu(e.stateNode,r,c),vu(e,c),qt!==4&&(qt=2)),!1;var f=Error(s(520),{cause:r});if(f=Kn(f,a),uo===null?uo=[f]:uo.push(f),qt!==4&&(qt=2),n===null)return!0;r=Kn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Vu(a.stateNode,r,e),vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=rm(c),om(c,e,a,r),vu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(s(461)),en=!1;function mn(e,n,a,r){n.child=e===null?fp(n,null,a,r):Qa(n,e.child,a,r)}function lm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var b in r)b!=="ref"&&(_[b]=r[b])}else _=r;return qa(n),r=bu(e,n,a,_,f,c),b=Tu(),e!==null&&!en?(Au(e,n,c),Pi(e,n,c)):(_t&&b&&su(n),n.flags|=1,mn(e,n,r,c),n.child)}function cm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,um(e,n,f,r,c)):(e=Jo(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Qu(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vr,a(_,r)&&e.ref===n.ref)return Pi(e,n,c)}return n.flags|=1,e=wi(f,r),e.ref=n.ref,e.return=n,n.child=e}function um(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Vr(f,r)&&e.ref===n.ref)if(en=!1,n.pendingProps=r=f,Qu(e,c))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,Pi(e,n,c)}return ku(e,n,a,r,c)}function fm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return dm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nl(n,f!==null?f.cachePool:null),f!==null?pp(n,f):yu(),mp(n);else return r=n.lanes=536870912,dm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(nl(n,f.cachePool),pp(n,f),ha(),n.memoizedState=null):(e!==null&&nl(n,null),yu(),ha());return mn(e,n,c,a),n.child}function io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function dm(e,n,a,r,c){var f=pu();return f=f===null?null:{parent:Jt._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&nl(n,null),yu(),mp(n),e!==null&&Ls(e,n,r,!0),n.childLanes=c,null}function vl(e,n){return n=yl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function hm(e,n,a){return Qa(n,e.child,null,a),e=vl(n,n.pendingProps),e.flags|=2,Vn(n),n.memoizedState=null,e}function B0(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(_t){if(r.mode==="hidden")return e=vl(n,r),n.lanes=536870912,io(null,e);if(Mu(n),(e=It)?(e=Tg(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:sa!==null?{id:vi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=Kh(e),a.return=n,n.child=a,hn=n,It=null)):e=null,e===null)throw oa(n);return n.lanes=536870912,null}return vl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=hm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(en||Ls(e,n,a,!1),c=(a&e.childLanes)!==0,en||c){if(r=Ot,r!==null&&(_=wr(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ja(e,_),Ln(r,e,_),ju;wl(),n=hm(e,n,a)}else e=f.treeContext,It=ti(_.nextSibling),hn=n,_t=!0,ra=null,$n=!1,e!==null&&$h(n,e),n=vl(n,r),n.flags|=4096;return n}return e=wi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ku(e,n,a,r,c){return qa(n),a=bu(e,n,a,r,void 0,c),r=Tu(),e!==null&&!en?(Au(e,n,c),Pi(e,n,c)):(_t&&r&&su(n),n.flags|=1,mn(e,n,a,c),n.child)}function pm(e,n,a,r,c,f){return qa(n),n.updateQueue=null,a=_p(n,r,a,c),gp(e),r=Tu(),e!==null&&!en?(Au(e,n,f),Pi(e,n,f)):(_t&&r&&su(n),n.flags|=1,mn(e,n,a,f),n.child)}function mm(e,n,a,r,c){if(qa(n),n.stateNode===null){var f=ws,_=a.contextType;typeof _=="object"&&_!==null&&(f=pn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},gu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?pn(_):ws,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Hu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Gu.enqueueReplaceState(f,f.state,null),Jr(n,r,f,c),Qr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,I=$a(a,b);f.props=I;var Q=f.context,ue=a.contextType;_=ws,typeof ue=="object"&&ue!==null&&(_=pn(ue));var pe=a.getDerivedStateFromProps;ue=typeof pe=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==_)&&tm(n,f,r,_),ca=!1;var $=n.memoizedState;f.state=$,Jr(n,r,f,c),Qr(),Q=n.memoizedState,b||$!==Q||ca?(typeof pe=="function"&&(Hu(n,a,pe,r),Q=n.memoizedState),(I=ca||em(n,a,I,r,$,Q,_))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=_,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,_u(e,n),_=n.memoizedProps,ue=$a(a,_),f.props=ue,pe=n.pendingProps,$=f.context,Q=a.contextType,I=ws,typeof Q=="object"&&Q!==null&&(I=pn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==pe||$!==I)&&tm(n,f,r,I),ca=!1,$=n.memoizedState,f.state=$,Jr(n,r,f,c),Qr();var se=n.memoizedState;_!==pe||$!==se||ca||e!==null&&e.dependencies!==null&&el(e.dependencies)?(typeof b=="function"&&(Hu(n,a,b,r),se=n.memoizedState),(ue=ca||em(n,a,ue,r,$,se,I)||e!==null&&e.dependencies!==null&&el(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,se,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,se,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=se),f.props=r,f.state=se,f.context=I,r=ue):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,xl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Qa(n,e.child,null,c),n.child=Qa(n,null,a,c)):mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Pi(e,n,c),e}function gm(e,n,a,r){return Xa(),n.flags|=256,mn(e,n,a,r),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:sp()}}function qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=kn),e}function _m(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Zt.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(_t){if(c?da(n):ha(),(e=It)?(e=Tg(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:sa!==null?{id:vi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=Kh(e),a.return=n,n.child=a,hn=n,It=null)):e=null,e===null)throw oa(n);return Nf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,c?(ha(),c=n.mode,b=yl({mode:"hidden",children:b},c),r=ka(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=Wu(a),r.childLanes=qu(e,_,a),n.memoizedState=Xu,io(null,r)):(da(n),Yu(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Zu(e,n,a)):n.memoizedState!==null?(ha(),n.child=e.child,n.flags|=128,n=null):(ha(),b=r.fallback,c=n.mode,r=yl({mode:"visible",children:r.children},c),b=ka(b,c,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,Qa(n,e.child,null,a),r=n.child,r.memoizedState=Wu(a),r.childLanes=qu(e,_,a),n.memoizedState=Xu,n=io(null,r));else if(da(n),Nf(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var Q=_.dgst;_=Q,r=Error(s(419)),r.stack="",r.digest=_,Xr({value:r,source:null,stack:null}),n=Zu(e,n,a)}else if(en||Ls(e,n,a,!1),_=(a&e.childLanes)!==0,en||_){if(_=Ot,_!==null&&(r=wr(_,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,ja(e,r),Ln(_,e,r),ju;wf(b)||wl(),n=Zu(e,n,a)}else wf(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,It=ti(b.nextSibling),hn=n,_t=!0,ra=null,$n=!1,e!==null&&$h(n,e),n=Yu(n,r.children),n.flags|=4096);return n}return c?(ha(),b=r.fallback,c=n.mode,I=e.child,Q=I.sibling,r=wi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,Q!==null?b=wi(Q,b):(b=ka(b,c,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,io(null,r),r=n.child,b=e.child.memoizedState,b===null?b=Wu(a):(c=b.cachePool,c!==null?(I=Jt._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=sp(),b={baseLanes:b.baseLanes|a,cachePool:c}),r.memoizedState=b,r.childLanes=qu(e,_,a),n.memoizedState=Xu,io(e.child,r)):(da(n),a=e.child,e=a.sibling,a=wi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Yu(e,n){return n=yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yl(e,n){return e=Hn(22,e,null,n),e.lanes=0,e}function Zu(e,n,a){return Qa(n,e.child,null,a),e=Yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),uu(e.return,n,a)}function Ku(e,n,a,r,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function xm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=Zt.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,ve(Zt,_),mn(e,n,r,a),r=_t?kr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,a,n);else if(e.tag===19)vm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ll(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ll(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Ku(n,!0,a,null,f,r);break;case"together":Ku(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Pi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ls(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&el(e)))}function F0(e,n,a){switch(n.tag){case 3:Ge(n,n.stateNode.containerInfo),la(n,Jt,e.memoizedState.cache),Xa();break;case 27:case 5:nt(n);break;case 4:Ge(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_m(e,n,a):(da(n),e=Pi(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ls(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return xm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(Zt,Zt.current),r)break;return null;case 22:return n.lanes=0,fm(e,n,a,n.pendingProps);case 24:la(n,Jt,e.memoizedState.cache)}return Pi(e,n,a)}function ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!Qu(e,a)&&(n.flags&128)===0)return en=!1,F0(e,n,a);en=(e.flags&131072)!==0}else en=!1,_t&&(n.flags&1048576)!==0&&Jh(n,kr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Za(n.elementType),n.type=e,typeof e=="function")nu(e)?(r=$a(e,r),n.tag=1,n=mm(null,n,e,r,a)):(n.tag=0,n=ku(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===z){n.tag=11,n=lm(null,n,e,r,a);break e}else if(c===P){n.tag=14,n=cm(null,n,e,r,a);break e}}throw n=me(e)||e,Error(s(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=$a(r,n.pendingProps),mm(e,n,r,c,a);case 3:e:{if(Ge(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,_u(e,n),Jr(n,r,null,a);var _=n.memoizedState;if(r=_.cache,la(n,Jt,r),r!==f.cache&&fu(n,[Jt],a,!0),Qr(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=gm(e,n,r,a);break e}else if(r!==c){c=Kn(Error(s(424)),n),Xr(c),n=gm(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(It=ti(e.firstChild),hn=n,_t=!0,ra=null,$n=!0,a=fp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xa(),r===c){n=Pi(e,n,a);break e}mn(e,n,r,a)}n=n.child}return n;case 26:return xl(e,n),e===null?(a=Dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:_t||(a=n.type,e=n.pendingProps,r=zl(ye.current).createElement(a),r[Qt]=n,r[vn]=e,gn(r,a,e),Ie(r),n.stateNode=r):n.memoizedState=Dg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&_t&&(r=n.stateNode=Cg(n.type,n.pendingProps,ye.current),hn=n,$n=!0,c=It,Sa(n.type)?(Df=c,It=ti(r.firstChild)):It=c),mn(e,n,n.pendingProps.children,a),xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&_t&&((c=r=It)&&(r=mx(r,n.type,n.pendingProps,$n),r!==null?(n.stateNode=r,hn=n,It=ti(r.firstChild),$n=!1,c=!0):c=!1),c||oa(n)),nt(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Af(c,f)?r=null:_!==null&&Af(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=bu(e,n,N0,null,null,a),xo._currentValue=c),xl(e,n),mn(e,n,r,a),n.child;case 6:return e===null&&_t&&((e=a=It)&&(a=gx(a,n.pendingProps,$n),a!==null?(n.stateNode=a,hn=n,It=null,e=!0):e=!1),e||oa(n)),null;case 13:return _m(e,n,a);case 4:return Ge(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Qa(n,null,r,a):mn(e,n,r,a),n.child;case 11:return lm(e,n,n.type,n.pendingProps,a);case 7:return mn(e,n,n.pendingProps,a),n.child;case 8:return mn(e,n,n.pendingProps.children,a),n.child;case 12:return mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,la(n,n.type,r.value),mn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,qa(n),c=pn(c),r=r(c),n.flags|=1,mn(e,n,r,a),n.child;case 14:return cm(e,n,n.type,n.pendingProps,a);case 15:return um(e,n,n.type,n.pendingProps,a);case 19:return xm(e,n,a);case 31:return B0(e,n,a);case 22:return fm(e,n,a,n.pendingProps);case 24:return qa(n),r=pn(Jt),e===null?(c=pu(),c===null&&(c=Ot,f=du(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},gu(n),la(n,Jt,c)):((e.lanes&a)!==0&&(_u(e,n),Jr(n,null,null,a),Qr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),la(n,Jt,r)):(r=f.cache,la(n,Jt,r),r!==c.cache&&fu(n,[Jt],a,!0))),mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function zi(e){e.flags|=4}function Ju(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(qm())e.flags|=8192;else throw Ka=al,mu}else e.flags&=-16777217}function Sm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zg(n))if(qm())e.flags|=8192;else throw Ka=al,mu}function Sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?vt():536870912,e.lanes|=n,Xs|=n)}function ao(e,n){if(!_t)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function H0(e,n,a){var r=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(n),null;case 1:return Bt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ui(Jt),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Us(n)?zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),Bt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(zi(n),f!==null?(Bt(n),Sm(n,f)):(Bt(n),Ju(n,c,null,r,a))):f?f!==e.memoizedState?(zi(n),Bt(n),Sm(n,f)):(Bt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&zi(n),Bt(n),Ju(n,c,e,r,a)),null;case 27:if(Lt(n),a=ye.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Bt(n),null}e=q.current,Us(n)?ep(n):(e=Cg(c,r,a),n.stateNode=e,zi(n))}return Bt(n),null;case 5:if(Lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Bt(n),null}if(f=q.current,Us(n))ep(n);else{var _=zl(ye.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[Qt]=n,f[vn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(gn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&zi(n)}}return Bt(n),Ju(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ye.current,Us(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=hn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||_g(e.nodeValue,a)),e||oa(n,!0)}else e=zl(e).createTextNode(r),e[Qt]=n,n.stateNode=e}return Bt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Us(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qt]=n}else Xa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Bt(n),e=!1}else a=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Vn(n),n):(Vn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Bt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Us(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Qt]=n}else Xa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Bt(n),c=!1}else c=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vn(n),n):(Vn(n),null)}return Vn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),Bt(n),null);case 4:return He(),e===null&&Sf(n.stateNode.containerInfo),Bt(n),null;case 10:return Ui(n.type),Bt(n),null;case 19:if(ne(Zt),r=n.memoizedState,r===null)return Bt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ao(r,!1);else{if(qt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ll(e),f!==null){for(n.flags|=128,ao(r,!1),e=f.updateQueue,n.updateQueue=e,Sl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Zh(a,e),a=a.sibling;return ve(Zt,Zt.current&1|2),_t&&Ni(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&_e()>Al&&(n.flags|=128,c=!0,ao(r,!1),n.lanes=4194304)}else{if(!c)if(e=ll(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Sl(n,e),ao(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!_t)return Bt(n),null}else 2*_e()-r.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,c=!0,ao(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=_e(),e.sibling=null,a=Zt.current,ve(Zt,c?a&1|2:a&1),_t&&Ni(n,r.treeForkCount),e):(Bt(n),null);case 22:case 23:return Vn(n),Su(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Bt(n),n.subtreeFlags&6&&(n.flags|=8192)):Bt(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(Ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ui(Jt),Bt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function G0(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ui(Jt),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Lt(n),null;case 31:if(n.memoizedState!==null){if(Vn(n),n.alternate===null)throw Error(s(340));Xa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Vn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Xa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(Zt),null;case 4:return He(),null;case 10:return Ui(n.type),null;case 22:case 23:return Vn(n),Su(),e!==null&&ne(Ya),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ui(Jt),null;case 25:return null;default:return null}}function Mm(e,n){switch(ru(n),n.tag){case 3:Ui(Jt),He();break;case 26:case 27:case 5:Lt(n);break;case 4:He();break;case 31:n.memoizedState!==null&&Vn(n);break;case 13:Vn(n);break;case 19:ne(Zt);break;case 10:Ui(n.type);break;case 22:case 23:Vn(n),Su(),e!==null&&ne(Ya);break;case 24:Ui(Jt)}}function so(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(b){Ct(n,n.return,b)}}function pa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var _=r.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,c=n;var I=a,Q=b;try{Q()}catch(ue){Ct(c,I,ue)}}}r=r.next}while(r!==f)}}catch(ue){Ct(n,n.return,ue)}}function Em(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hp(n,a)}catch(r){Ct(e,e.return,r)}}}function bm(e,n,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ct(e,n,r)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ct(e,n,c)}}function yi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ct(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ct(e,n,c)}else a.current=null}function Tm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ct(e,e.return,c)}}function $u(e,n,a){try{var r=e.stateNode;cx(r,e.type,a,n),r[vn]=n}catch(c){Ct(e,e.return,c)}}function Am(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ri));else if(r!==4&&(r===27&&Sa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(tf(e,n,a),e=e.sibling;e!==null;)tf(e,n,a),e=e.sibling}function Ml(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function Rm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);gn(n,r,a),n[Qt]=e,n[vn]=a}catch(f){Ct(e,e.return,f)}}var Ii=!1,tn=!1,nf=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,un=null;function V0(e,n){if(e=e.containerInfo,bf=jl,e=Hh(e),Zc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,b=-1,I=-1,Q=0,ue=0,pe=e,$=null;t:for(;;){for(var se;pe!==a||c!==0&&pe.nodeType!==3||(b=_+c),pe!==f||r!==0&&pe.nodeType!==3||(I=_+r),pe.nodeType===3&&(_+=pe.nodeValue.length),(se=pe.firstChild)!==null;)$=pe,pe=se;for(;;){if(pe===e)break t;if($===a&&++Q===c&&(b=_),$===f&&++ue===r&&(I=_),(se=pe.nextSibling)!==null)break;pe=$,$=pe.parentNode}pe=se}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:e,selectionRange:a},jl=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Be=$a(a.type,c);e=r.getSnapshotBeforeUpdate(Be,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qe){Ct(a,a.return,Qe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Cf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function wm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(e,a),r&4&&so(5,a);break;case 1:if(Fi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ct(a,a.return,_)}else{var c=$a(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ct(a,a.return,_)}}r&64&&Em(a),r&512&&ro(a,a.return);break;case 3:if(Fi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hp(e,n)}catch(_){Ct(a,a.return,_)}}break;case 27:n===null&&r&4&&Rm(a);case 26:case 5:Fi(e,a),n===null&&r&4&&Tm(a),r&512&&ro(a,a.return);break;case 12:Fi(e,a);break;case 31:Fi(e,a),r&4&&Um(e,a);break;case 13:Fi(e,a),r&4&&Lm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Q0.bind(null,a),_x(e,a))));break;case 22:if(r=a.memoizedState!==null||Ii,!r){n=n!==null&&n.memoizedState!==null||tn,c=Ii;var f=tn;Ii=r,(tn=n)&&!f?Hi(e,a,(a.subtreeFlags&8772)!==0):Fi(e,a),Ii=c,tn=f}break;case 30:break;default:Fi(e,a)}}function Nm(e){var n=e.alternate;n!==null&&(e.alternate=null,Nm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Y(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Vt=null,wn=!1;function Bi(e,n,a){for(a=a.child;a!==null;)Dm(e,n,a),a=a.sibling}function Dm(e,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:tn||yi(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||yi(a,n);var r=Vt,c=wn;Sa(a.type)&&(Vt=a.stateNode,wn=!1),Bi(e,n,a),go(a.stateNode),Vt=r,wn=c;break;case 5:tn||yi(a,n);case 6:if(r=Vt,c=wn,Vt=null,Bi(e,n,a),Vt=r,wn=c,Vt!==null)if(wn)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(a.stateNode)}catch(f){Ct(a,n,f)}else try{Vt.removeChild(a.stateNode)}catch(f){Ct(a,n,f)}break;case 18:Vt!==null&&(wn?(e=Vt,Eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$s(e)):Eg(Vt,a.stateNode));break;case 4:r=Vt,c=wn,Vt=a.stateNode.containerInfo,wn=!0,Bi(e,n,a),Vt=r,wn=c;break;case 0:case 11:case 14:case 15:pa(2,a,n),tn||pa(4,a,n),Bi(e,n,a);break;case 1:tn||(yi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&bm(a,n,r)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:tn=(r=tn)||a.memoizedState!==null,Bi(e,n,a),tn=r;break;default:Bi(e,n,a)}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$s(e)}catch(a){Ct(n,n.return,a)}}}function Lm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$s(e)}catch(a){Ct(n,n.return,a)}}function j0(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cm),n;default:throw Error(s(435,e.tag))}}function El(e,n){var a=j0(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=J0.bind(null,e,r);r.then(c,c)}})}function Nn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,_=n,b=_;e:for(;b!==null;){switch(b.tag){case 27:if(Sa(b.type)){Vt=b.stateNode,wn=!1;break e}break;case 5:Vt=b.stateNode,wn=!1;break e;case 3:case 4:Vt=b.stateNode.containerInfo,wn=!0;break e}b=b.return}if(Vt===null)throw Error(s(160));Dm(f,_,c),Vt=null,wn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Om(n,e),n=n.sibling}var li=null;function Om(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nn(n,e),Dn(e),r&4&&(pa(3,e,e.return),so(3,e),pa(5,e,e.return));break;case 1:Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),r&64&&Ii&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=li;if(Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[te]||f[Qt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),gn(f,r,a),f[Qt]=e,Ie(f),r=f;break e;case"link":var _=Og("link","href",c).get(r+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break t}}f=c.createElement(r),gn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=Og("meta","content",c).get(r+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break t}}f=c.createElement(r),gn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Qt]=e,Ie(f),r=f}e.stateNode=r}else Pg(c,e.type,e.stateNode);else e.stateNode=Lg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Pg(c,e.type,e.stateNode):Lg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&$u(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),a!==null&&r&4&&$u(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,e),Dn(e),r&512&&(tn||a===null||yi(a,a.return)),e.flags&32){c=e.stateNode;try{Ms(c,"")}catch(Be){Ct(e,e.return,Be)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,$u(e,c,a!==null?a.memoizedProps:c)),r&1024&&(nf=!0);break;case 6:if(Nn(n,e),Dn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Be){Ct(e,e.return,Be)}}break;case 3:if(Fl=null,c=li,li=Il(n.containerInfo),Nn(n,e),li=c,Dn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{$s(n.containerInfo)}catch(Be){Ct(e,e.return,Be)}nf&&(nf=!1,Pm(e));break;case 4:r=li,li=Il(e.stateNode.containerInfo),Nn(n,e),Dn(e),li=r;break;case 12:Nn(n,e),Dn(e);break;case 31:Nn(n,e),Dn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 13:Nn(n,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tl=_e()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=Ii,ue=tn;if(Ii=Q||c,tn=ue||I,Nn(n,e),tn=ue,Ii=Q,Dn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Ii||tn||es(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=I.stateNode;var pe=I.memoizedProps.style,$=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;b.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Be){Ct(I,I.return,Be)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Be){Ct(I,I.return,Be)}}}else if(n.tag===18){if(a===null){I=n;try{var se=I.stateNode;c?bg(se,!0):bg(I.stateNode,!1)}catch(Be){Ct(I,I.return,Be)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,El(e,a))));break;case 19:Nn(n,e),Dn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 30:break;case 21:break;default:Nn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Am(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ef(e);Ml(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Ms(_,""),a.flags&=-33);var b=ef(e);Ml(e,b,_);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=ef(e);tf(e,Q,I);break;default:throw Error(s(161))}}catch(ue){Ct(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Fi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wm(e,n.alternate,n),n=n.sibling}function es(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),es(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bm(n,n.return,a),es(n);break;case 27:go(n.stateNode);case 26:case 5:yi(n,n.return),es(n);break;case 22:n.memoizedState===null&&es(n);break;case 30:es(n);break;default:es(n)}e=e.sibling}}function Hi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Hi(c,f,a),so(4,f);break;case 1:if(Hi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ct(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)dp(I[c],b)}catch(Q){Ct(r,r.return,Q)}}a&&_&64&&Em(f),ro(f,f.return);break;case 27:Rm(f);case 26:case 5:Hi(c,f,a),a&&r===null&&_&4&&Tm(f),ro(f,f.return);break;case 12:Hi(c,f,a);break;case 31:Hi(c,f,a),a&&_&4&&Um(c,f);break;case 13:Hi(c,f,a),a&&_&4&&Lm(c,f);break;case 22:f.memoizedState===null&&Hi(c,f,a),ro(f,f.return);break;case 30:break;default:Hi(c,f,a)}n=n.sibling}}function af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wr(a))}function sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e))}function ci(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(e,n,a,r),n=n.sibling}function zm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ci(e,n,a,r),c&2048&&so(9,n);break;case 1:ci(e,n,a,r);break;case 3:ci(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e)));break;case 12:if(c&2048){ci(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ct(n,n.return,I)}}else ci(e,n,a,r);break;case 31:ci(e,n,a,r);break;case 13:ci(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?ci(e,n,a,r):oo(e,n):f._visibility&2?ci(e,n,a,r):(f._visibility|=2,Vs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(_,n);break;case 24:ci(e,n,a,r),c&2048&&sf(n.alternate,n);break;default:ci(e,n,a,r)}}function Vs(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,b=a,I=r,Q=_.flags;switch(_.tag){case 0:case 11:case 15:Vs(f,_,b,I,c),so(8,_);break;case 23:break;case 22:var ue=_.stateNode;_.memoizedState!==null?ue._visibility&2?Vs(f,_,b,I,c):oo(f,_):(ue._visibility|=2,Vs(f,_,b,I,c)),c&&Q&2048&&af(_.alternate,_);break;case 24:Vs(f,_,b,I,c),c&&Q&2048&&sf(_.alternate,_);break;default:Vs(f,_,b,I,c)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:oo(a,r),c&2048&&af(r.alternate,r);break;case 24:oo(a,r),c&2048&&sf(r.alternate,r);break;default:oo(a,r)}n=n.sibling}}var lo=8192;function js(e,n,a){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)Im(e,n,a),e=e.sibling}function Im(e,n,a){switch(e.tag){case 26:js(e,n,a),e.flags&lo&&e.memoizedState!==null&&wx(a,li,e.memoizedState,e.memoizedProps);break;case 5:js(e,n,a);break;case 3:case 4:var r=li;li=Il(e.stateNode.containerInfo),js(e,n,a),li=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=lo,lo=16777216,js(e,n,a),lo=r):js(e,n,a));break;default:js(e,n,a)}}function Bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];un=r,Hm(r,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fm(e),e=e.sibling}function Fm(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&pa(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,bl(e)):co(e);break;default:co(e)}}function bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];un=r,Hm(r,e)}Bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:pa(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}e=e.sibling}}function Hm(e,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Wr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,un=r;else e:for(a=e;un!==null;){r=un;var c=r.sibling,f=r.return;if(Nm(r),r===a){un=null;break e}if(c!==null){c.return=f,un=c;break e}un=f}}}var k0={getCacheForType:function(e){var n=pn(Jt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return pn(Jt).controller.signal}},X0=typeof WeakMap=="function"?WeakMap:Map,Et=0,Ot=null,ft=null,pt=0,Rt=0,jn=null,ma=!1,ks=!1,rf=!1,Gi=0,qt=0,ga=0,ts=0,of=0,kn=0,Xs=0,uo=null,Un=null,lf=!1,Tl=0,Gm=0,Al=1/0,Rl=null,_a=null,rn=0,va=null,Ws=null,Vi=0,cf=0,uf=null,Vm=null,fo=0,ff=null;function Xn(){return(Et&2)!==0&&pt!==0?pt&-pt:L.T!==null?_f():Nr()}function jm(){if(kn===0)if((pt&536870912)===0||_t){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),kn=e}else kn=536870912;return e=Gn.current,e!==null&&(e.flags|=32),kn}function Ln(e,n,a){(e===Ot&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)&&(qs(e,0),xa(e,pt,kn,!1)),_n(e,a),((Et&2)===0||e!==Ot)&&(e===Ot&&((Et&2)===0&&(ts|=a),qt===4&&xa(e,pt,kn,!1)),Si(e))}function km(e,n,a){if((Et&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Pt(e,n),c=r?Y0(e,n):hf(e,n,!0),f=r;do{if(c===0){ks&&!r&&xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!W0(a)){c=hf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var b=e;c=uo;var I=b.current.memoizedState.isDehydrated;if(I&&(qs(b,_).flags|=256),_=hf(b,_,!1),_!==2){if(rf&&!I){b.errorRecoveryDisabledLanes|=f,ts|=f,c=4;break e}f=Un,Un=c,f!==null&&(Un===null?Un=f:Un.push.apply(Un,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){qs(e,0),xa(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:xa(r,n,kn,!ma);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Tl+300-_e(),10<c)){if(xa(r,n,kn,!ma),lt(r,0,!0)!==0)break e;Vi=n,r.timeoutHandle=Sg(Xm.bind(null,r,a,Un,Rl,lf,n,kn,ts,Xs,ma,f,"Throttled",-0,0),c);break e}Xm(r,a,Un,Rl,lf,n,kn,ts,Xs,ma,f,null,-0,0)}}break}while(!0);Si(e)}function Xm(e,n,a,r,c,f,_,b,I,Q,ue,pe,$,se){if(e.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ri},Im(n,f,pe);var Be=(f&62914560)===f?Tl-_e():(f&4194048)===f?Gm-_e():0;if(Be=Nx(pe,Be),Be!==null){Vi=f,e.cancelPendingCommit=Be($m.bind(null,e,n,f,a,r,c,_,b,I,ue,pe,null,$,se)),xa(e,f,_,!Q);return}}$m(e,n,f,a,r,c,_,b,I)}function W0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Fn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xa(e,n,a,r){n&=~of,n&=~ts,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Ze(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&_i(e,a,n)}function Cl(){return(Et&6)===0?(ho(0),!1):!0}function df(){if(ft!==null){if(Rt===0)var e=ft.return;else e=ft,Di=Wa=null,Ru(e),Is=null,Yr=0,e=ft;for(;e!==null;)Mm(e.alternate,e),e=e.return;ft=null}}function qs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vi=0,df(),Ot=e,ft=a=wi(e.current,null),pt=n,Rt=0,jn=null,ma=!1,ks=Pt(e,n),rf=!1,Xs=kn=of=ts=ga=qt=0,Un=uo=null,lf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Ze(r),f=1<<c;n|=e[c],r&=~f}return Gi=n,Zo(),a}function Wm(e,n){at=null,L.H=no,n===zs||n===il?(n=lp(),Rt=3):n===mu?(n=lp(),Rt=4):Rt=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,ft===null&&(qt=1,_l(e,Kn(n,e.current)))}function qm(){var e=Gn.current;return e===null?!0:(pt&4194048)===pt?ei===null:(pt&62914560)===pt||(pt&536870912)!==0?e===ei:!1}function Ym(){var e=L.H;return L.H=no,e===null?no:e}function Zm(){var e=L.A;return L.A=k0,e}function wl(){qt=4,ma||(pt&4194048)!==pt&&Gn.current!==null||(ks=!0),(ga&134217727)===0&&(ts&134217727)===0||Ot===null||xa(Ot,pt,kn,!1)}function hf(e,n,a){var r=Et;Et|=2;var c=Ym(),f=Zm();(Ot!==e||pt!==n)&&(Rl=null,qs(e,n)),n=!1;var _=qt;e:do try{if(Rt!==0&&ft!==null){var b=ft,I=jn;switch(Rt){case 8:df(),_=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var Q=Rt;if(Rt=0,jn=null,Ys(e,b,I,Q),a&&ks){_=0;break e}break;default:Q=Rt,Rt=0,jn=null,Ys(e,b,I,Q)}}q0(),_=qt;break}catch(ue){Wm(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Di=Wa=null,Et=r,L.H=c,L.A=f,ft===null&&(Ot=null,pt=0,Zo()),_}function q0(){for(;ft!==null;)Km(ft)}function Y0(e,n){var a=Et;Et|=2;var r=Ym(),c=Zm();Ot!==e||pt!==n?(Rl=null,Al=_e()+500,qs(e,n)):ks=Pt(e,n);e:do try{if(Rt!==0&&ft!==null){n=ft;var f=jn;t:switch(Rt){case 1:Rt=0,jn=null,Ys(e,n,f,1);break;case 2:case 9:if(rp(f)){Rt=0,jn=null,Qm(n);break}n=function(){Rt!==2&&Rt!==9||Ot!==e||(Rt=7),Si(e)},f.then(n,n);break e;case 3:Rt=7;break e;case 4:Rt=5;break e;case 7:rp(f)?(Rt=0,jn=null,Qm(n)):(Rt=0,jn=null,Ys(e,n,f,7));break;case 5:var _=null;switch(ft.tag){case 26:_=ft.memoizedState;case 5:case 27:var b=ft;if(_?zg(_):b.stateNode.complete){Rt=0,jn=null;var I=b.sibling;if(I!==null)ft=I;else{var Q=b.return;Q!==null?(ft=Q,Nl(Q)):ft=null}break t}}Rt=0,jn=null,Ys(e,n,f,5);break;case 6:Rt=0,jn=null,Ys(e,n,f,6);break;case 8:df(),qt=6;break e;default:throw Error(s(462))}}Z0();break}catch(ue){Wm(e,ue)}while(!0);return Di=Wa=null,L.H=r,L.A=c,Et=a,ft!==null?0:(Ot=null,pt=0,Zo(),qt)}function Z0(){for(;ft!==null&&!ae();)Km(ft)}function Km(e){var n=ym(e.alternate,e,Gi);e.memoizedProps=e.pendingProps,n===null?Nl(e):ft=n}function Qm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=pm(a,n,n.pendingProps,n.type,void 0,pt);break;case 11:n=pm(a,n,n.pendingProps,n.type.render,n.ref,pt);break;case 5:Ru(n);default:Mm(a,n),n=ft=Zh(n,Gi),n=ym(a,n,Gi)}e.memoizedProps=e.pendingProps,n===null?Nl(e):ft=n}function Ys(e,n,a,r){Di=Wa=null,Ru(n),Is=null,Yr=0;var c=n.return;try{if(I0(e,c,n,a,pt)){qt=1,_l(e,Kn(a,e.current)),ft=null;return}}catch(f){if(c!==null)throw ft=c,f;qt=1,_l(e,Kn(a,e.current)),ft=null;return}n.flags&32768?(_t||r===1?e=!0:ks||(pt&536870912)!==0?e=!1:(ma=e=!0,(r===2||r===9||r===3||r===6)&&(r=Gn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Jm(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){Jm(n,ma);return}e=n.return;var a=H0(n.alternate,n,Gi);if(a!==null){ft=a;return}if(n=n.sibling,n!==null){ft=n;return}ft=n=e}while(n!==null);qt===0&&(qt=5)}function Jm(e,n){do{var a=G0(e.alternate,e);if(a!==null){a.flags&=32767,ft=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ft=e;return}ft=e=a}while(e!==null);qt=6,ft=null}function $m(e,n,a,r,c,f,_,b,I){e.cancelPendingCommit=null;do Dl();while(rn!==0);if((Et&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=eu,Ho(e,a,f,_,b,I),e===Ot&&(ft=Ot=null,pt=0),Ws=n,va=e,Vi=a,cf=f,uf=c,Vm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$0(Le,function(){return ag(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,c=W.p,W.p=2,_=Et,Et|=4;try{V0(e,n,a)}finally{Et=_,W.p=c,L.T=r}}rn=1,eg(),tg(),ng()}}function eg(){if(rn===1){rn=0;var e=va,n=Ws,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=W.p;W.p=2;var c=Et;Et|=4;try{Om(n,e);var f=Tf,_=Hh(e.containerInfo),b=f.focusedElem,I=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&Fh(b.ownerDocument.documentElement,b)){if(I!==null&&Zc(b)){var Q=I.start,ue=I.end;if(ue===void 0&&(ue=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ue,b.value.length);else{var pe=b.ownerDocument||document,$=pe&&pe.defaultView||window;if($.getSelection){var se=$.getSelection(),Be=b.textContent.length,Qe=Math.min(I.start,Be),Ut=I.end===void 0?Qe:Math.min(I.end,Be);!se.extend&&Qe>Ut&&(_=Ut,Ut=Qe,Qe=_);var X=Bh(b,Qe),H=Bh(b,Ut);if(X&&H&&(se.rangeCount!==1||se.anchorNode!==X.node||se.anchorOffset!==X.offset||se.focusNode!==H.node||se.focusOffset!==H.offset)){var K=pe.createRange();K.setStart(X.node,X.offset),se.removeAllRanges(),Qe>Ut?(se.addRange(K),se.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),se.addRange(K))}}}}for(pe=[],se=b;se=se.parentNode;)se.nodeType===1&&pe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pe.length;b++){var fe=pe[b];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}jl=!!bf,Tf=bf=null}finally{Et=c,W.p=r,L.T=a}}e.current=n,rn=2}}function tg(){if(rn===2){rn=0;var e=va,n=Ws,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=W.p;W.p=2;var c=Et;Et|=4;try{wm(e,n.alternate,n)}finally{Et=c,W.p=r,L.T=a}}rn=3}}function ng(){if(rn===4||rn===3){rn=0,Se();var e=va,n=Ws,a=Vi,r=Vm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,Ws=va=null,ig(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(_a=null),ta(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,c=W.p,W.p=2,L.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var b=r[_];f(b.value,{componentStack:b.stack})}}finally{L.T=n,W.p=c}}(Vi&3)!==0&&Dl(),Si(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===ff?fo++:(fo=0,ff=e):fo=0,ho(0)}}function ig(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wr(n)))}function Dl(){return eg(),tg(),ng(),ag()}function ag(){if(rn!==5)return!1;var e=va,n=cf;cf=0;var a=ta(Vi),r=L.T,c=W.p;try{W.p=32>a?32:a,L.T=null,a=uf,uf=null;var f=va,_=Vi;if(rn=0,Ws=va=null,Vi=0,(Et&6)!==0)throw Error(s(331));var b=Et;if(Et|=4,Fm(f.current),zm(f,f.current,_,a),Et=b,ho(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ke,f)}catch{}return!0}finally{W.p=c,L.T=r,ig(e,n)}}function sg(e,n,a){n=Kn(a,n),n=Vu(e.stateNode,n,2),e=fa(e,n,2),e!==null&&(_n(e,2),Si(e))}function Ct(e,n,a){if(e.tag===3)sg(e,e,a);else for(;n!==null;){if(n.tag===3){sg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_a===null||!_a.has(r))){e=Kn(a,e),a=rm(2),r=fa(n,a,2),r!==null&&(om(a,r,n,e),_n(r,2),Si(r));break}}n=n.return}}function pf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new X0;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(rf=!0,c.add(a),e=K0.bind(null,e,n,a),n.then(e,e))}function K0(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ot===e&&(pt&a)===a&&(qt===4||qt===3&&(pt&62914560)===pt&&300>_e()-Tl?(Et&2)===0&&qs(e,0):of|=a,Xs===pt&&(Xs=0)),Si(e)}function rg(e,n){n===0&&(n=vt()),e=ja(e,n),e!==null&&(_n(e,n),Si(e))}function Q0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),rg(e,a)}function J0(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),rg(e,a)}function $0(e,n){return O(e,n)}var Ul=null,Zs=null,mf=!1,Ll=!1,gf=!1,ya=0;function Si(e){e!==Zs&&e.next===null&&(Zs===null?Ul=Zs=e:Zs=Zs.next=e),Ll=!0,mf||(mf=!0,tx())}function ho(e,n){if(!gf&&Ll){gf=!0;do for(var a=!1,r=Ul;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ze(42|e)+1)-1,f&=c&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ug(r,f))}else f=pt,f=lt(r,r===Ot?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Pt(r,f)||(a=!0,ug(r,f));r=r.next}while(a);gf=!1}}function ex(){og()}function og(){Ll=mf=!1;var e=0;ya!==0&&fx()&&(e=ya);for(var n=_e(),a=null,r=Ul;r!==null;){var c=r.next,f=lg(r,n);f===0?(r.next=null,a===null?Ul=c:a.next=c,c===null&&(Zs=a)):(a=r,(e!==0||(f&3)!==0)&&(Ll=!0)),r=c}rn!==0&&rn!==5||ho(e),ya!==0&&(ya=0)}function lg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ze(f),b=1<<_,I=c[_];I===-1?((b&a)===0||(b&r)!==0)&&(c[_]=an(b,n)):I<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ot,a=pt,a=lt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&T(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&T(r),ta(a)){case 2:case 8:a=De;break;case 32:a=Le;break;case 268435456:a=Ae;break;default:a=Le}return r=cg.bind(null,e),a=O(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&T(r),e.callbackPriority=2,e.callbackNode=null,2}function cg(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dl()&&e.callbackNode!==a)return null;var r=pt;return r=lt(e,e===Ot?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(km(e,r,n),lg(e,_e()),e.callbackNode!=null&&e.callbackNode===a?cg.bind(null,e):null)}function ug(e,n){if(Dl())return null;km(e,n,!0)}function tx(){hx(function(){(Et&6)!==0?O(We,ex):og()})}function _f(){if(ya===0){var e=Os;e===0&&(e=he,he<<=1,(he&261888)===0&&(he=256)),ya=e}return ya}function fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function dg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function nx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=fg((c[vn]||null).action),_=r.submitter;_&&(n=(n=_[vn]||null)?fg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new Xo("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ya!==0){var I=_?dg(c,_):new FormData(c);zu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=_?dg(c,_):new FormData(c),zu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var vf=0;vf<$c.length;vf++){var xf=$c[vf],ix=xf.toLowerCase(),ax=xf[0].toUpperCase()+xf.slice(1);oi(ix,"on"+ax)}oi(jh,"onAnimationEnd"),oi(kh,"onAnimationIteration"),oi(Xh,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(y0,"onTransitionRun"),oi(S0,"onTransitionStart"),oi(M0,"onTransitionCancel"),oi(Wh,"onTransitionEnd"),At("onMouseEnter",["mouseout","mouseover"]),At("onMouseLeave",["mouseout","mouseover"]),At("onPointerEnter",["pointerout","pointerover"]),At("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var b=r[_],I=b.instance,Q=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=Q;try{f(c)}catch(ue){Yo(ue)}c.currentTarget=null,f=I}else for(_=0;_<r.length;_++){if(b=r[_],I=b.instance,Q=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=Q;try{f(c)}catch(ue){Yo(ue)}c.currentTarget=null,f=I}}}}function dt(e,n){var a=n[Dr];a===void 0&&(a=n[Dr]=new Set);var r=e+"__bubble";a.has(r)||(pg(n,e,2,!1),a.add(r))}function yf(e,n,a){var r=0;n&&(r|=4),pg(a,e,r,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Ol]){e[Ol]=!0,Je.forEach(function(a){a!=="selectionchange"&&(sx.has(a)||yf(a,!1,e),yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,yf("selectionchange",!1,n))}}function pg(e,n,a,r){switch(jg(n)){case 2:var c=Lx;break;case 8:c=Ox;break;default:c=zf}a=c.bind(null,n,a,e),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Mf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var b=r.stateNode.containerInfo;if(b===c)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;b!==null;){if(_=Te(b),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=f=_;continue e}b=b.parentNode}}r=r.return}xh(function(){var Q=f,ue=Bc(a),pe=[];e:{var $=qh.get(e);if($!==void 0){var se=Xo,Be=e;switch(e){case"keypress":if(jo(a)===0)break e;case"keydown":case"keyup":se=Jv;break;case"focusin":Be="focus",se=kc;break;case"focusout":Be="blur",se=kc;break;case"beforeblur":case"afterblur":se=kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=t0;break;case jh:case kh:case Xh:se=jv;break;case Wh:se=i0;break;case"scroll":case"scrollend":se=Bv;break;case"wheel":se=s0;break;case"copy":case"cut":case"paste":se=Xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=bh;break;case"toggle":case"beforetoggle":se=o0}var Qe=(n&4)!==0,Ut=!Qe&&(e==="scroll"||e==="scrollend"),X=Qe?$!==null?$+"Capture":null:$;Qe=[];for(var H=Q,K;H!==null;){var fe=H;if(K=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||K===null||X===null||(fe=Pr(H,X),fe!=null&&Qe.push(mo(H,fe,K))),Ut)break;H=H.return}0<Qe.length&&($=new se($,Be,null,a,ue),pe.push({event:$,listeners:Qe}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",$&&a!==Ic&&(Be=a.relatedTarget||a.fromElement)&&(Te(Be)||Be[na]))break e;if((se||$)&&($=ue.window===ue?ue:($=ue.ownerDocument)?$.defaultView||$.parentWindow:window,se?(Be=a.relatedTarget||a.toElement,se=Q,Be=Be?Te(Be):null,Be!==null&&(Ut=u(Be),Qe=Be.tag,Be!==Ut||Qe!==5&&Qe!==27&&Qe!==6)&&(Be=null)):(se=null,Be=Q),se!==Be)){if(Qe=Mh,fe="onMouseLeave",X="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=bh,fe="onPointerLeave",X="onPointerEnter",H="pointer"),Ut=se==null?$:Pe(se),K=Be==null?$:Pe(Be),$=new Qe(fe,H+"leave",se,a,ue),$.target=Ut,$.relatedTarget=K,fe=null,Te(ue)===Q&&(Qe=new Qe(X,H+"enter",Be,a,ue),Qe.target=K,Qe.relatedTarget=Ut,fe=Qe),Ut=fe,se&&Be)t:{for(Qe=rx,X=se,H=Be,K=0,fe=X;fe;fe=Qe(fe))K++;fe=0;for(var Xe=H;Xe;Xe=Qe(Xe))fe++;for(;0<K-fe;)X=Qe(X),K--;for(;0<fe-K;)H=Qe(H),fe--;for(;K--;){if(X===H||H!==null&&X===H.alternate){Qe=X;break t}X=Qe(X),H=Qe(H)}Qe=null}else Qe=null;se!==null&&mg(pe,$,se,Qe,!1),Be!==null&&Ut!==null&&mg(pe,Ut,Be,Qe,!0)}}e:{if($=Q?Pe(Q):window,se=$.nodeName&&$.nodeName.toLowerCase(),se==="select"||se==="input"&&$.type==="file")var St=Uh;else if(Nh($))if(Lh)St=_0;else{St=m0;var Fe=p0}else se=$.nodeName,!se||se.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&zc(Q.elementType)&&(St=Uh):St=g0;if(St&&(St=St(e,Q))){Dh(pe,St,a,ue);break e}Fe&&Fe(e,$,Q),e==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Pc($,"number",$.value)}switch(Fe=Q?Pe(Q):window,e){case"focusin":(Nh(Fe)||Fe.contentEditable==="true")&&(As=Fe,Kc=Q,jr=null);break;case"focusout":jr=Kc=As=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Gh(pe,a,ue);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Gh(pe,a,ue)}var st;if(Wc)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Ts?Ch(e,a)&&(mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(Th&&a.locale!=="ko"&&(Ts||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ts&&(st=yh()):(aa=ue,Gc="value"in aa?aa.value:aa.textContent,Ts=!0)),Fe=Pl(Q,mt),0<Fe.length&&(mt=new Eh(mt,e,null,a,ue),pe.push({event:mt,listeners:Fe}),st?mt.data=st:(st=wh(a),st!==null&&(mt.data=st)))),(st=c0?u0(e,a):f0(e,a))&&(mt=Pl(Q,"onBeforeInput"),0<mt.length&&(Fe=new Eh("onBeforeInput","beforeinput",null,a,ue),pe.push({event:Fe,listeners:mt}),Fe.data=st)),nx(pe,e,Q,a,ue)}hg(pe,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Pr(e,a),c!=null&&r.unshift(mo(e,c,f)),c=Pr(e,n),c!=null&&r.push(mo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function rx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mg(e,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var b=a,I=b.alternate,Q=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||Q===null||(I=Q,c?(Q=Pr(a,f),Q!=null&&_.unshift(mo(a,Q,I))):c||(Q=Pr(a,f),Q!=null&&_.push(mo(a,Q,I)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var ox=/\r\n?/g,lx=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(ox,`
`).replace(lx,"")}function _g(e,n){return n=gg(n),gg(e)===n}function Dt(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ms(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ms(e,""+r);break;case"className":gt(e,"class",r);break;case"tabIndex":gt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gt(e,a,r);break;case"style":_h(e,r,f);break;case"data":if(n!=="object"){gt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Go(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Dt(e,n,"name",c.name,c,null),Dt(e,n,"formEncType",c.formEncType,c,null),Dt(e,n,"formMethod",c.formMethod,c,null),Dt(e,n,"formTarget",c.formTarget,c,null)):(Dt(e,n,"encType",c.encType,c,null),Dt(e,n,"method",c.method,c,null),Dt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Go(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ri);break;case"onScroll":r!=null&&dt("scroll",e);break;case"onScrollEnd":r!=null&&dt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Go(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":dt("beforetoggle",e),dt("toggle",e),Xt(e,"popover",r);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zv.get(a)||a,Xt(e,a,r))}}function Ef(e,n,a,r,c,f){switch(a){case"style":_h(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ms(e,r):(typeof r=="number"||typeof r=="bigint")&&Ms(e,""+r);break;case"onScroll":r!=null&&dt("scroll",e);break;case"onScrollEnd":r!=null&&dt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ri);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xt(e,a,r)}}}function gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",e),dt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,f,_,a,null)}}c&&Dt(e,n,"srcSet",a.srcSet,a,null),r&&Dt(e,n,"src",a.src,a,null);return;case"input":dt("invalid",e);var b=f=_=c=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ue=a[r];if(ue!=null)switch(r){case"name":c=ue;break;case"type":_=ue;break;case"checked":I=ue;break;case"defaultChecked":Q=ue;break;case"value":f=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Dt(e,n,r,ue,a,null)}}Or(e,f,b,I,Q,_,c,!1);return;case"select":dt("invalid",e),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":r=b;default:Dt(e,n,c,b,a,null)}n=f,a=_,e.multiple=!!r,n!=null?Ss(e,!!r,n,!1):a!=null&&Ss(e,!!r,a,!0);return;case"textarea":dt("invalid",e),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Dt(e,n,_,b,a,null)}mh(e,r,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Dt(e,n,I,r,a,null)}return;case"dialog":dt("beforetoggle",e),dt("toggle",e),dt("cancel",e),dt("close",e);break;case"iframe":case"object":dt("load",e);break;case"video":case"audio":for(r=0;r<po.length;r++)dt(po[r],e);break;case"image":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"embed":case"source":case"link":dt("error",e),dt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(e,n,Q,r,a,null)}return;default:if(zc(n)){for(ue in a)a.hasOwnProperty(ue)&&(r=a[ue],r!==void 0&&Ef(e,n,ue,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Dt(e,n,b,r,a,null))}function cx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,b=null,I=null,Q=null,ue=null;for(se in a){var pe=a[se];if(a.hasOwnProperty(se)&&pe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=pe;default:r.hasOwnProperty(se)||Dt(e,n,se,null,r,pe)}}for(var $ in r){var se=r[$];if(pe=a[$],r.hasOwnProperty($)&&(se!=null||pe!=null))switch($){case"type":f=se;break;case"name":c=se;break;case"checked":Q=se;break;case"defaultChecked":ue=se;break;case"value":_=se;break;case"defaultValue":b=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==pe&&Dt(e,n,$,se,r,pe)}}Lr(e,_,b,I,Q,ue,f,c);return;case"select":se=_=b=$=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":se=I;default:r.hasOwnProperty(f)||Dt(e,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":$=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==I&&Dt(e,n,c,f,r,I)}n=b,a=_,r=se,$!=null?Ss(e,!!a,$,!1):!!r!=!!a&&(n!=null?Ss(e,!!a,n,!0):Ss(e,!!a,a?[]:"",!1));return;case"textarea":se=$=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Dt(e,n,b,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":$=c;break;case"defaultValue":se=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Dt(e,n,_,c,r,f)}ph(e,$,se);return;case"option":for(var Be in a)if($=a[Be],a.hasOwnProperty(Be)&&$!=null&&!r.hasOwnProperty(Be))switch(Be){case"selected":e.selected=!1;break;default:Dt(e,n,Be,null,r,$)}for(I in r)if($=r[I],se=a[I],r.hasOwnProperty(I)&&$!==se&&($!=null||se!=null))switch(I){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Dt(e,n,I,$,r,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)$=a[Qe],a.hasOwnProperty(Qe)&&$!=null&&!r.hasOwnProperty(Qe)&&Dt(e,n,Qe,null,r,$);for(Q in r)if($=r[Q],se=a[Q],r.hasOwnProperty(Q)&&$!==se&&($!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Dt(e,n,Q,$,r,se)}return;default:if(zc(n)){for(var Ut in a)$=a[Ut],a.hasOwnProperty(Ut)&&$!==void 0&&!r.hasOwnProperty(Ut)&&Ef(e,n,Ut,void 0,r,$);for(ue in r)$=r[ue],se=a[ue],!r.hasOwnProperty(ue)||$===se||$===void 0&&se===void 0||Ef(e,n,ue,$,r,se);return}}for(var X in a)$=a[X],a.hasOwnProperty(X)&&$!=null&&!r.hasOwnProperty(X)&&Dt(e,n,X,null,r,$);for(pe in r)$=r[pe],se=a[pe],!r.hasOwnProperty(pe)||$===se||$==null&&se==null||Dt(e,n,pe,$,r,se)}function vg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ux(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,b=c.duration;if(f&&b&&vg(_)){for(_=0,b=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>b)break;var ue=I.transferSize,pe=I.initiatorType;ue&&vg(pe)&&(I=I.responseEnd,_+=ue*(I<b?1:(b-Q)/(I-Q)))}if(--r,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bf=null,Tf=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Af(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function fx(){var e=window.event;return e&&e.type==="popstate"?e===Rf?!1:(Rf=e,!0):(Rf=null,!1)}var Sg=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(e){return Mg.resolve(null).then(e).catch(px)}:Sg;function px(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function Eg(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),$s(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[te]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&go(e.ownerDocument.body);a=c}while(a);$s(n)}function bg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Cf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),Y(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[te])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function gx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ti(e.nextSibling),e===null))return null;return e}function Tg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function wf(e){return e.data==="$?"||e.data==="$~"}function Nf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _x(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Df=null;function Ag(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ti(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Rg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Cg(e,n,a){switch(n=zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Y(e)}var ni=new Map,wg=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=W.d;W.d={f:vx,r:xx,D:yx,C:Sx,L:Mx,m:Ex,X:Tx,S:bx,M:Ax};function vx(){var e=ji.f(),n=Cl();return e||n}function xx(e){var n=Ne(e);n!==null&&n.tag===5&&n.type==="form"?Wp(n):ji.r(e)}var Ks=typeof document>"u"?null:document;function Ng(e,n,a){var r=Ks;if(r&&typeof n=="string"&&n){var c=Sn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),wg.has(c)||(wg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),gn(n,"link",e),Ie(n),r.head.appendChild(n)))}}function yx(e){ji.D(e),Ng("dns-prefetch",e,null)}function Sx(e,n){ji.C(e,n),Ng("preconnect",e,n)}function Mx(e,n,a){ji.L(e,n,a);var r=Ks;if(r&&e&&n){var c='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Sn(a.imageSizes)+'"]')):c+='[href="'+Sn(e)+'"]';var f=c;switch(n){case"style":f=Qs(e);break;case"script":f=Js(e)}ni.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ni.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(_o(f))||n==="script"&&r.querySelector(vo(f))||(n=r.createElement("link"),gn(n,"link",e),Ie(n),r.head.appendChild(n)))}}function Ex(e,n){ji.m(e,n);var a=Ks;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Sn(r)+'"][href="'+Sn(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Js(e)}if(!ni.has(f)&&(e=y({rel:"modulepreload",href:e},n),ni.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}r=a.createElement("link"),gn(r,"link",e),Ie(r),a.head.appendChild(r)}}}function bx(e,n,a){ji.S(e,n,a);var r=Ks;if(r&&e){var c=ze(r).hoistableStyles,f=Qs(e);n=n||"default";var _=c.get(f);if(!_){var b={loading:0,preload:null};if(_=r.querySelector(_o(f)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ni.get(f))&&Uf(e,a);var I=_=r.createElement("link");Ie(I),gn(I,"link",e),I._p=new Promise(function(Q,ue){I.onload=Q,I.onerror=ue}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:b},c.set(f,_)}}}function Tx(e,n){ji.X(e,n);var a=Ks;if(a&&e){var r=ze(a).hoistableScripts,c=Js(e),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(e=y({src:e,async:!0},n),(n=ni.get(c))&&Lf(e,n),f=a.createElement("script"),Ie(f),gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Ax(e,n){ji.M(e,n);var a=Ks;if(a&&e){var r=ze(a).hoistableScripts,c=Js(e),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(e=y({src:e,async:!0,type:"module"},n),(n=ni.get(c))&&Lf(e,n),f=a.createElement("script"),Ie(f),gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Dg(e,n,a,r){var c=(c=ye.current)?Il(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qs(a.href),a=ze(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qs(a.href);var f=ze(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(_o(e)))&&!f._p&&(_.instance=f,_.state.loading=5),ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(e,a),f||Rx(c,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Js(a),a=ze(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Qs(e){return'href="'+Sn(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function Ug(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Rx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),gn(n,"link",a),Ie(n),e.head.appendChild(n))}function Js(e){return'[src="'+Sn(e)+'"]'}function vo(e){return"script[async]"+e}function Lg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(r)return n.instance=r,Ie(r),r;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ie(r),gn(r,"style",c),Bl(r,a.precedence,e),n.instance=r;case"stylesheet":c=Qs(a.href);var f=e.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,Ie(f),f;r=Ug(a),(c=ni.get(c))&&Uf(r,c),f=(e.ownerDocument||e).createElement("link"),Ie(f);var _=f;return _._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),gn(f,"link",r),n.state.loading|=4,Bl(f,a.precedence,e),n.instance=f;case"script":return f=Js(a.src),(c=e.querySelector(vo(f)))?(n.instance=c,Ie(c),c):(r=a,(c=ni.get(f))&&(r=y({},a),Lf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ie(c),gn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Bl(r,a.precedence,e));return n.instance}function Bl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var b=r[_];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fl=null;function Og(e,n,a){if(Fl===null){var r=new Map,c=Fl=new Map;c.set(a,r)}else c=Fl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[te]||f[Qt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var b=r.get(_);b?b.push(f):r.set(_,[f])}}return r}function Pg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Cx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wx(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Qs(r.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Hl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ie(f);return}f=n.ownerDocument||n,r=Ug(r),(c=ni.get(c))&&Uf(r,c),f=f.createElement("link"),Ie(f);var _=f;_._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),gn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Hl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function Nx(e,n){return e.stylesheets&&e.count===0&&Vl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Of===0&&(Of=62500*ux());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Of?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Hl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function Vl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,n.forEach(Dx,e),Gl=null,Hl.call(e))}function Dx(e,n){if(!(n.state.loading&4)){var a=Gl.get(e);if(a)var r=a.get(null);else{a=new Map,Gl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Hl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ux(e,n,a,r,c,f,_,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.hiddenUpdates=Bn(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ig(e,n,a,r,c,f,_,b,I,Q,ue,pe){return e=new Ux(e,n,a,_,I,Q,ue,pe,b),n=1,f===!0&&(n|=24),f=Hn(3,null,null,n),e.current=f,f.stateNode=e,n=du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},gu(f),e}function Bg(e){return e?(e=ws,e):ws}function Fg(e,n,a,r,c,f){c=Bg(c),r.context===null?r.context=c:r.pendingContext=c,r=ua(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=fa(e,r,n),a!==null&&(Ln(a,e,n),Kr(a,e,n))}function Hg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){Hg(e,n),(e=e.alternate)&&Hg(e,n)}function Gg(e){if(e.tag===13||e.tag===31){var n=ja(e,67108864);n!==null&&Ln(n,e,67108864),Pf(e,67108864)}}function Vg(e){if(e.tag===13||e.tag===31){var n=Xn();n=ys(n);var a=ja(e,n);a!==null&&Ln(a,e,n),Pf(e,n)}}var jl=!0;function Lx(e,n,a,r){var c=L.T;L.T=null;var f=W.p;try{W.p=2,zf(e,n,a,r)}finally{W.p=f,L.T=c}}function Ox(e,n,a,r){var c=L.T;L.T=null;var f=W.p;try{W.p=8,zf(e,n,a,r)}finally{W.p=f,L.T=c}}function zf(e,n,a,r){if(jl){var c=If(r);if(c===null)Mf(e,n,r,kl,a),kg(e,r);else if(zx(c,e,n,a,r))r.stopPropagation();else if(kg(e,r),n&4&&-1<Px.indexOf(e)){for(;c!==null;){var f=Ne(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ke(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var I=1<<31-Ze(_);b.entanglements[1]|=I,_&=~I}Si(f),(Et&6)===0&&(Al=_e()+500,ho(0))}}break;case 31:case 13:b=ja(f,2),b!==null&&Ln(b,f,2),Cl(),Pf(f,2)}if(f=If(r),f===null&&Mf(e,n,r,kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Mf(e,n,r,null,a)}}function If(e){return e=Bc(e),Bf(e)}var kl=null;function Bf(e){if(kl=null,e=Te(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return kl=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case We:return 2;case De:return 8;case Le:case it:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Ff=!1,Ma=null,Ea=null,ba=null,yo=new Map,So=new Map,Ta=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kg(e,n){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function Mo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ne(n),n!==null&&Gg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function zx(e,n,a,r,c){switch(n){case"focusin":return Ma=Mo(Ma,e,n,a,r,c),!0;case"dragenter":return Ea=Mo(Ea,e,n,a,r,c),!0;case"mouseover":return ba=Mo(ba,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Mo(yo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,Mo(So.get(f)||null,e,n,a,r,c)),!0}return!1}function Xg(e){var n=Te(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Fa(e.priority,function(){Vg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Fa(e.priority,function(){Vg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ic=r,a.target.dispatchEvent(r),Ic=null}else return n=Ne(a),n!==null&&Gg(n),e.blockedOn=a,!1;n.shift()}return!0}function Wg(e,n,a){Xl(e)&&a.delete(n)}function Ix(){Ff=!1,Ma!==null&&Xl(Ma)&&(Ma=null),Ea!==null&&Xl(Ea)&&(Ea=null),ba!==null&&Xl(ba)&&(ba=null),yo.forEach(Wg),So.forEach(Wg)}function Wl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ix)))}var ql=null;function qg(e){ql!==e&&(ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Bf(r||a)===null)continue;break}var f=Ne(a);f!==null&&(e.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function $s(e){function n(I){return Wl(I,e)}Ma!==null&&Wl(Ma,e),Ea!==null&&Wl(Ea,e),ba!==null&&Wl(ba,e),yo.forEach(n),So.forEach(n);for(var a=0;a<Ta.length;a++){var r=Ta[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Xg(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[vn]||null;if(typeof f=="function")_||qg(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[vn]||null)b=_.formAction;else if(Bf(c)!==null)continue}else b=_.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),qg(a)}}}function Yg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(e){this._internalRoot=e}Yl.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Xn();Fg(a,r,e,n,null,null)},Yl.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fg(e.current,2,null,e,null,null),Cl(),n[na]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Xg(e)}};var Zg=t.version;if(Zg!=="19.2.7")throw Error(s(527,Zg,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Bx={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Ke=Zl.inject(Bx),we=Zl}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=nm,f=im,_=am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Ig(e,1,!1,null,null,a,r,null,c,f,_,Yg),e[na]=n.current,Sf(e),new Hf(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=nm,_=im,b=am,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Ig(e,1,!0,n,a??null,r,c,I,f,_,b,Yg),n.context=Bg(null),a=n.current,r=Xn(),r=ys(r),c=ua(r),c.callback=null,fa(a,c,r),a=r,n.current.lanes=a,_n(n,a),Si(n),e[na]=n.current,Sf(e),new Yl(n)},bo.version="19.2.7",bo}var s_;function Kx(){if(s_)return jf.exports;s_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jf.exports=Zx(),jf.exports}var Qx=Kx();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="167",Jx=0,r_=1,$x=2,nv=1,ey=2,Zi=3,za=0,zn=1,bi=2,Oa=0,xr=1,o_=2,l_=3,c_=4,ty=5,ds=100,ny=101,iy=102,ay=103,sy=104,ry=200,oy=201,ly=202,cy=203,Sd=204,Md=205,uy=206,fy=207,dy=208,hy=209,py=210,my=211,gy=212,_y=213,vy=214,xy=0,yy=1,Sy=2,Tc=3,My=4,Ey=5,by=6,Ty=7,iv=0,Ay=1,Ry=2,Pa=0,Cy=1,wy=2,Ny=3,Dy=4,Uy=5,Ly=6,Oy=7,av=300,Mr=301,Er=302,Ed=303,bd=304,Dc=306,Td=1e3,ps=1001,Ad=1002,ai=1003,Py=1004,Kl=1005,pi=1006,qf=1007,ms=1008,Ji=1009,sv=1010,rv=1011,Lo=1012,ih=1013,_s=1014,Ki=1015,Oo=1016,ah=1017,sh=1018,br=1020,ov=35902,lv=1021,cv=1022,mi=1023,uv=1024,fv=1025,yr=1026,Tr=1027,dv=1028,rh=1029,hv=1030,oh=1031,lh=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,Rd=35840,Cd=35841,wd=35842,Nd=35843,Dd=36196,Ud=37492,Ld=37496,Od=37808,Pd=37809,zd=37810,Id=37811,Bd=37812,Fd=37813,Hd=37814,Gd=37815,Vd=37816,jd=37817,kd=37818,Xd=37819,Wd=37820,qd=37821,Ec=36492,Yd=36494,Zd=36495,pv=36283,Kd=36284,Qd=36285,Jd=36286,zy=3200,Iy=3201,By=0,Fy=1,La="",Mi="srgb",Ia="srgb-linear",ch="display-p3",Uc="display-p3-linear",Ac="linear",Ft="srgb",Rc="rec709",Cc="p3",er=7680,u_=519,Hy=512,Gy=513,Vy=514,mv=515,jy=516,ky=517,Xy=518,Wy=519,f_=35044,d_="300 es",Qi=2e3,wc=2001;class Rr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=Math.PI/180,$d=180/Math.PI;function Po(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function Pn(o,t,i){return Math.max(t,Math.min(i,o))}function qy(o,t){return(o%t+t)%t}function Zf(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,i=0){Tt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(t,i,s,l,u,d,h,g,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,g,m)}set(t,i,s,l,u,d,h,g,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=g,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],g=s[6],m=s[1],v=s[4],y=s[7],S=s[2],E=s[5],A=s[8],w=l[0],M=l[3],x=l[6],B=l[1],N=l[4],z=l[7],ie=l[2],G=l[5],P=l[8];return u[0]=d*w+h*B+g*ie,u[3]=d*M+h*N+g*G,u[6]=d*x+h*z+g*P,u[1]=m*w+v*B+y*ie,u[4]=m*M+v*N+y*G,u[7]=m*x+v*z+y*P,u[2]=S*w+E*B+A*ie,u[5]=S*M+E*N+A*G,u[8]=S*x+E*z+A*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],g=t[6],m=t[7],v=t[8];return i*d*v-i*h*m-s*u*v+s*h*g+l*u*m-l*d*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],g=t[6],m=t[7],v=t[8],y=v*d-h*m,S=h*g-v*u,E=m*u-d*g,A=i*y+s*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(l*m-v*s)*w,t[2]=(h*s-l*d)*w,t[3]=S*w,t[4]=(v*i-l*g)*w,t[5]=(l*u-h*i)*w,t[6]=E*w,t[7]=(s*g-m*i)*w,t[8]=(d*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const g=Math.cos(u),m=Math.sin(u);return this.set(s*g,s*m,-s*(g*d+m*h)+d+t,-l*m,l*g,-l*(-m*d+g*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new ot;function gv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Nc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Yy(){const o=Nc("canvas");return o.style.display="block",o}const h_={};function Uo(o){o in h_||(h_[o]=!0,console.warn(o))}function Zy(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const p_=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),m_=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ao={[Ia]:{transfer:Ac,primaries:Rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Mi]:{transfer:Ft,primaries:Rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Uc]:{transfer:Ac,primaries:Cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(m_),fromReference:o=>o.applyMatrix3(p_)},[ch]:{transfer:Ft,primaries:Cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(m_),fromReference:o=>o.applyMatrix3(p_).convertLinearToSRGB()}},Ky=new Set([Ia,Uc]),bt={enabled:!0,_workingColorSpace:Ia,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Ky.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const s=Ao[t].toReference,l=Ao[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Ao[o].primaries},getTransfer:function(o){return o===La?Ac:Ao[o].transfer},getLuminanceCoefficients:function(o,t=this._workingColorSpace){return o.fromArray(Ao[t].luminanceCoefficients)}};function Sr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Qf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let tr;class Qy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tr===void 0&&(tr=Nc("canvas")),tr.width=t.width,tr.height=t.height;const s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Nc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Sr(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sr(i[s]/255)*255):i[s]=Sr(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jy=0;class _v{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Po(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Jf(l[d].image)):u.push(Jf(l[d]))}else u=Jf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Qy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $y=0;class In extends Rr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ps,l=ps,u=pi,d=ms,h=mi,g=Ji,m=In.DEFAULT_ANISOTROPY,v=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Po(),this.name="",this.source=new _v(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==av)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Td:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case Ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Td:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case Ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=av;In.DEFAULT_ANISOTROPY=1;class dn{constructor(t=0,i=0,s=0,l=1){dn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const g=t.elements,m=g[0],v=g[4],y=g[8],S=g[1],E=g[5],A=g[9],w=g[2],M=g[6],x=g[10];if(Math.abs(v-S)<.01&&Math.abs(y-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(y+w)<.1&&Math.abs(A+M)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,z=(E+1)/2,ie=(x+1)/2,G=(v+S)/4,P=(y+w)/4,J=(A+M)/4;return N>z&&N>ie?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=G/s,u=P/s):z>ie?z<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),s=G/l,u=J/l):ie<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(ie),s=P/u,l=J/u),this.set(s,l,u,i),this}let B=Math.sqrt((M-A)*(M-A)+(y-w)*(y-w)+(S-v)*(S-v));return Math.abs(B)<.001&&(B=1),this.x=(M-A)/B,this.y=(y-w)/B,this.z=(S-v)/B,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eS extends Rr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new dn(0,0,t,i),this.scissorTest=!1,this.viewport=new dn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new In(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new _v(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends eS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class vv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tS extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let g=s[l+0],m=s[l+1],v=s[l+2],y=s[l+3];const S=u[d+0],E=u[d+1],A=u[d+2],w=u[d+3];if(h===0){t[i+0]=g,t[i+1]=m,t[i+2]=v,t[i+3]=y;return}if(h===1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=w;return}if(y!==w||g!==S||m!==E||v!==A){let M=1-h;const x=g*S+m*E+v*A+y*w,B=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const ie=Math.sqrt(N),G=Math.atan2(ie,x*B);M=Math.sin(M*G)/ie,h=Math.sin(h*G)/ie}const z=h*B;if(g=g*M+S*z,m=m*M+E*z,v=v*M+A*z,y=y*M+w*z,M===1-h){const ie=1/Math.sqrt(g*g+m*m+v*v+y*y);g*=ie,m*=ie,v*=ie,y*=ie}}t[i]=g,t[i+1]=m,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],g=s[l+1],m=s[l+2],v=s[l+3],y=u[d],S=u[d+1],E=u[d+2],A=u[d+3];return t[i]=h*A+v*y+g*E-m*S,t[i+1]=g*A+v*S+m*y-h*E,t[i+2]=m*A+v*E+h*S-g*y,t[i+3]=v*A-h*y-g*S-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,g=Math.sin,m=h(s/2),v=h(l/2),y=h(u/2),S=g(s/2),E=g(l/2),A=g(u/2);switch(d){case"XYZ":this._x=S*v*y+m*E*A,this._y=m*E*y-S*v*A,this._z=m*v*A+S*E*y,this._w=m*v*y-S*E*A;break;case"YXZ":this._x=S*v*y+m*E*A,this._y=m*E*y-S*v*A,this._z=m*v*A-S*E*y,this._w=m*v*y+S*E*A;break;case"ZXY":this._x=S*v*y-m*E*A,this._y=m*E*y+S*v*A,this._z=m*v*A+S*E*y,this._w=m*v*y-S*E*A;break;case"ZYX":this._x=S*v*y-m*E*A,this._y=m*E*y+S*v*A,this._z=m*v*A-S*E*y,this._w=m*v*y+S*E*A;break;case"YZX":this._x=S*v*y+m*E*A,this._y=m*E*y+S*v*A,this._z=m*v*A-S*E*y,this._w=m*v*y-S*E*A;break;case"XZY":this._x=S*v*y-m*E*A,this._y=m*E*y-S*v*A,this._z=m*v*A+S*E*y,this._w=m*v*y+S*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],g=i[9],m=i[2],v=i[6],y=i[10],S=s+h+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-g)*E,this._y=(u-m)*E,this._z=(d-l)*E}else if(s>h&&s>y){const E=2*Math.sqrt(1+s-h-y);this._w=(v-g)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+m)/E}else if(h>y){const E=2*Math.sqrt(1+h-s-y);this._w=(u-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(g+v)/E}else{const E=2*Math.sqrt(1+y-s-h);this._w=(d-l)/E,this._x=(u+m)/E,this._y=(g+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,g=i._y,m=i._z,v=i._w;return this._x=s*v+d*h+l*m-u*g,this._y=l*v+d*g+u*h-s*m,this._z=u*v+d*m+s*g-l*h,this._w=d*v-s*h-l*g-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+s*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const g=1-h*h;if(g<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const m=Math.sqrt(g),v=Math.atan2(m,h),y=Math.sin((1-i)*v)/m,S=Math.sin(i*v)/m;return this._w=d*y+this._w*S,this._x=s*y+this._x*S,this._y=l*y+this._y*S,this._z=u*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(g_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(g_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,g=t.w,m=2*(d*l-h*s),v=2*(h*i-u*l),y=2*(u*s-d*i);return this.x=i+g*m+d*y-h*v,this.y=s+g*v+h*m-u*y,this.z=l+g*y+u*v-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,g=i.z;return this.x=l*g-u*h,this.y=u*d-s*g,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return $f.copy(this).projectOnVector(t),this.sub($f)}reflect(t){return this.sub($f.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new re,g_=new zo;class Io{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,ui):ui.fromBufferAttribute(u,d),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ql.copy(s.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),Jl.subVectors(this.max,Ro),nr.subVectors(t.a,Ro),ir.subVectors(t.b,Ro),ar.subVectors(t.c,Ro),Ra.subVectors(ir,nr),Ca.subVectors(ar,ir),ns.subVectors(nr,ar);let i=[0,-Ra.z,Ra.y,0,-Ca.z,Ca.y,0,-ns.z,ns.y,Ra.z,0,-Ra.x,Ca.z,0,-Ca.x,ns.z,0,-ns.x,-Ra.y,Ra.x,0,-Ca.y,Ca.x,0,-ns.y,ns.x,0];return!ed(i,nr,ir,ar,Jl)||(i=[1,0,0,0,1,0,0,0,1],!ed(i,nr,ir,ar,Jl))?!1:($l.crossVectors(Ra,Ca),i=[$l.x,$l.y,$l.z],ed(i,nr,ir,ar,Jl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ki=[new re,new re,new re,new re,new re,new re,new re,new re],ui=new re,Ql=new Io,nr=new re,ir=new re,ar=new re,Ra=new re,Ca=new re,ns=new re,Ro=new re,Jl=new re,$l=new re,is=new re;function ed(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){is.fromArray(o,u);const h=l.x*Math.abs(is.x)+l.y*Math.abs(is.y)+l.z*Math.abs(is.z),g=t.dot(is),m=i.dot(is),v=s.dot(is);if(Math.max(-Math.max(g,m,v),Math.min(g,m,v))>h)return!1}return!0}const nS=new Io,Co=new re,td=new re;class uh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):nS.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(td)),this.expandByPoint(Co.copy(t.center).sub(td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new re,nd=new re,ec=new re,wa=new re,id=new re,tc=new re,ad=new re;class iS{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Xi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,i),Xi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){nd.copy(t).add(i).multiplyScalar(.5),ec.copy(i).sub(t).normalize(),wa.copy(this.origin).sub(nd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(ec),h=wa.dot(this.direction),g=-wa.dot(ec),m=wa.lengthSq(),v=Math.abs(1-d*d);let y,S,E,A;if(v>0)if(y=d*g-h,S=d*h-g,A=u*v,y>=0)if(S>=-A)if(S<=A){const w=1/v;y*=w,S*=w,E=y*(y+d*S+2*h)+S*(d*y+S+2*g)+m}else S=u,y=Math.max(0,-(d*S+h)),E=-y*y+S*(S+2*g)+m;else S=-u,y=Math.max(0,-(d*S+h)),E=-y*y+S*(S+2*g)+m;else S<=-A?(y=Math.max(0,-(-d*u+h)),S=y>0?-u:Math.min(Math.max(-u,-g),u),E=-y*y+S*(S+2*g)+m):S<=A?(y=0,S=Math.min(Math.max(-u,-g),u),E=S*(S+2*g)+m):(y=Math.max(0,-(d*u+h)),S=y>0?u:Math.min(Math.max(-u,-g),u),E=-y*y+S*(S+2*g)+m);else S=d>0?-u:u,y=Math.max(0,-(d*S+h)),E=-y*y+S*(S+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(nd).addScaledVector(ec,S),E}intersectSphere(t,i){Xi.subVectors(t.center,this.origin);const s=Xi.dot(this.direction),l=Xi.dot(Xi)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,g;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(s=(t.min.x-S.x)*m,l=(t.max.x-S.x)*m):(s=(t.max.x-S.x)*m,l=(t.min.x-S.x)*m),v>=0?(u=(t.min.y-S.y)*v,d=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,d=(t.min.y-S.y)*v),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(t.min.z-S.z)*y,g=(t.max.z-S.z)*y):(h=(t.max.z-S.z)*y,g=(t.min.z-S.z)*y),s>g||h>l)||((h>s||s!==s)&&(s=h),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,i,s,l,u){id.subVectors(i,t),tc.subVectors(s,t),ad.crossVectors(id,tc);let d=this.direction.dot(ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;wa.subVectors(this.origin,t);const g=h*this.direction.dot(tc.crossVectors(wa,tc));if(g<0)return null;const m=h*this.direction.dot(id.cross(wa));if(m<0||g+m>d)return null;const v=-h*wa.dot(ad);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,i,s,l,u,d,h,g,m,v,y,S,E,A,w,M){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,g,m,v,y,S,E,A,w,M)}set(t,i,s,l,u,d,h,g,m,v,y,S,E,A,w,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=g,x[2]=m,x[6]=v,x[10]=y,x[14]=S,x[3]=E,x[7]=A,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/sr.setFromMatrixColumn(t,0).length(),u=1/sr.setFromMatrixColumn(t,1).length(),d=1/sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(l),m=Math.sin(l),v=Math.cos(u),y=Math.sin(u);if(t.order==="XYZ"){const S=d*v,E=d*y,A=h*v,w=h*y;i[0]=g*v,i[4]=-g*y,i[8]=m,i[1]=E+A*m,i[5]=S-w*m,i[9]=-h*g,i[2]=w-S*m,i[6]=A+E*m,i[10]=d*g}else if(t.order==="YXZ"){const S=g*v,E=g*y,A=m*v,w=m*y;i[0]=S+w*h,i[4]=A*h-E,i[8]=d*m,i[1]=d*y,i[5]=d*v,i[9]=-h,i[2]=E*h-A,i[6]=w+S*h,i[10]=d*g}else if(t.order==="ZXY"){const S=g*v,E=g*y,A=m*v,w=m*y;i[0]=S-w*h,i[4]=-d*y,i[8]=A+E*h,i[1]=E+A*h,i[5]=d*v,i[9]=w-S*h,i[2]=-d*m,i[6]=h,i[10]=d*g}else if(t.order==="ZYX"){const S=d*v,E=d*y,A=h*v,w=h*y;i[0]=g*v,i[4]=A*m-E,i[8]=S*m+w,i[1]=g*y,i[5]=w*m+S,i[9]=E*m-A,i[2]=-m,i[6]=h*g,i[10]=d*g}else if(t.order==="YZX"){const S=d*g,E=d*m,A=h*g,w=h*m;i[0]=g*v,i[4]=w-S*y,i[8]=A*y+E,i[1]=y,i[5]=d*v,i[9]=-h*v,i[2]=-m*v,i[6]=E*y+A,i[10]=S-w*y}else if(t.order==="XZY"){const S=d*g,E=d*m,A=h*g,w=h*m;i[0]=g*v,i[4]=-y,i[8]=m*v,i[1]=S*y+w,i[5]=d*v,i[9]=E*y-A,i[2]=A*y-E,i[6]=h*v,i[10]=w*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aS,t,sS)}lookAt(t,i,s){const l=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Na.crossVectors(s,Wn),Na.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Na.crossVectors(s,Wn)),Na.normalize(),nc.crossVectors(Wn,Na),l[0]=Na.x,l[4]=nc.x,l[8]=Wn.x,l[1]=Na.y,l[5]=nc.y,l[9]=Wn.y,l[2]=Na.z,l[6]=nc.z,l[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],g=s[8],m=s[12],v=s[1],y=s[5],S=s[9],E=s[13],A=s[2],w=s[6],M=s[10],x=s[14],B=s[3],N=s[7],z=s[11],ie=s[15],G=l[0],P=l[4],J=l[8],D=l[12],C=l[1],V=l[5],ce=l[9],oe=l[13],me=l[2],de=l[6],L=l[10],W=l[14],Z=l[3],Me=l[7],be=l[11],U=l[15];return u[0]=d*G+h*C+g*me+m*Z,u[4]=d*P+h*V+g*de+m*Me,u[8]=d*J+h*ce+g*L+m*be,u[12]=d*D+h*oe+g*W+m*U,u[1]=v*G+y*C+S*me+E*Z,u[5]=v*P+y*V+S*de+E*Me,u[9]=v*J+y*ce+S*L+E*be,u[13]=v*D+y*oe+S*W+E*U,u[2]=A*G+w*C+M*me+x*Z,u[6]=A*P+w*V+M*de+x*Me,u[10]=A*J+w*ce+M*L+x*be,u[14]=A*D+w*oe+M*W+x*U,u[3]=B*G+N*C+z*me+ie*Z,u[7]=B*P+N*V+z*de+ie*Me,u[11]=B*J+N*ce+z*L+ie*be,u[15]=B*D+N*oe+z*W+ie*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],g=t[9],m=t[13],v=t[2],y=t[6],S=t[10],E=t[14],A=t[3],w=t[7],M=t[11],x=t[15];return A*(+u*g*y-l*m*y-u*h*S+s*m*S+l*h*E-s*g*E)+w*(+i*g*E-i*m*S+u*d*S-l*d*E+l*m*v-u*g*v)+M*(+i*m*y-i*h*E-u*d*y+s*d*E+u*h*v-s*m*v)+x*(-l*h*v-i*g*y+i*h*S+l*d*y-s*d*S+s*g*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],g=t[6],m=t[7],v=t[8],y=t[9],S=t[10],E=t[11],A=t[12],w=t[13],M=t[14],x=t[15],B=y*M*m-w*S*m+w*g*E-h*M*E-y*g*x+h*S*x,N=A*S*m-v*M*m-A*g*E+d*M*E+v*g*x-d*S*x,z=v*w*m-A*y*m+A*h*E-d*w*E-v*h*x+d*y*x,ie=A*y*g-v*w*g-A*h*S+d*w*S+v*h*M-d*y*M,G=i*B+s*N+l*z+u*ie;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return t[0]=B*P,t[1]=(w*S*u-y*M*u-w*l*E+s*M*E+y*l*x-s*S*x)*P,t[2]=(h*M*u-w*g*u+w*l*m-s*M*m-h*l*x+s*g*x)*P,t[3]=(y*g*u-h*S*u-y*l*m+s*S*m+h*l*E-s*g*E)*P,t[4]=N*P,t[5]=(v*M*u-A*S*u+A*l*E-i*M*E-v*l*x+i*S*x)*P,t[6]=(A*g*u-d*M*u-A*l*m+i*M*m+d*l*x-i*g*x)*P,t[7]=(d*S*u-v*g*u+v*l*m-i*S*m-d*l*E+i*g*E)*P,t[8]=z*P,t[9]=(A*y*u-v*w*u-A*s*E+i*w*E+v*s*x-i*y*x)*P,t[10]=(d*w*u-A*h*u+A*s*m-i*w*m-d*s*x+i*h*x)*P,t[11]=(v*h*u-d*y*u-v*s*m+i*y*m+d*s*E-i*h*E)*P,t[12]=ie*P,t[13]=(v*w*l-A*y*l+A*s*S-i*w*S-v*s*M+i*y*M)*P,t[14]=(A*h*l-d*w*l-A*s*g+i*w*g+d*s*M-i*h*M)*P,t[15]=(d*y*l-v*h*l+v*s*g-i*y*g-d*s*S+i*h*S)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,g=t.z,m=u*d,v=u*h;return this.set(m*d+s,m*h-l*g,m*g+l*h,0,m*h+l*g,v*h+s,v*g-l*d,0,m*g-l*h,v*g+l*d,u*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,g=i._w,m=u+u,v=d+d,y=h+h,S=u*m,E=u*v,A=u*y,w=d*v,M=d*y,x=h*y,B=g*m,N=g*v,z=g*y,ie=s.x,G=s.y,P=s.z;return l[0]=(1-(w+x))*ie,l[1]=(E+z)*ie,l[2]=(A-N)*ie,l[3]=0,l[4]=(E-z)*G,l[5]=(1-(S+x))*G,l[6]=(M+B)*G,l[7]=0,l[8]=(A+N)*P,l[9]=(M-B)*P,l[10]=(1-(S+w))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=sr.set(l[0],l[1],l[2]).length();const d=sr.set(l[4],l[5],l[6]).length(),h=sr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],fi.copy(this);const m=1/u,v=1/d,y=1/h;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=v,fi.elements[5]*=v,fi.elements[6]*=v,fi.elements[8]*=y,fi.elements[9]*=y,fi.elements[10]*=y,i.setFromRotationMatrix(fi),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Qi){const g=this.elements,m=2*u/(i-t),v=2*u/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(h===Qi)E=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===wc)E=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=m,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=v,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=E,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Qi){const g=this.elements,m=1/(i-t),v=1/(s-l),y=1/(d-u),S=(i+t)*m,E=(s+l)*v;let A,w;if(h===Qi)A=(d+u)*y,w=-2*y;else if(h===wc)A=u*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=2*m,g[4]=0,g[8]=0,g[12]=-S,g[1]=0,g[5]=2*v,g[9]=0,g[13]=-E,g[2]=0,g[6]=0,g[10]=w,g[14]=-A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const sr=new re,fi=new on,aS=new re(0,0,0),sS=new re(1,1,1),Na=new re,nc=new re,Wn=new re,__=new on,v_=new zo;class $i{constructor(t=0,i=0,s=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],g=l[1],m=l[5],v=l[9],y=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,u));break;case"ZYX":this._y=Math.asin(-Pn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(g,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return __.makeRotationFromQuaternion(t),this.setFromRotationMatrix(__,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return v_.setFromEuler(this),this.setFromQuaternion(v_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class xv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rS=0;const x_=new re,rr=new zo,Wi=new on,ic=new re,wo=new re,oS=new re,lS=new zo,y_=new re(1,0,0),S_=new re(0,1,0),M_=new re(0,0,1),E_={type:"added"},cS={type:"removed"},or={type:"childadded",child:null},sd={type:"childremoved",child:null};class Yn extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new re,i=new $i,s=new zo,l=new re(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ot}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return rr.setFromAxisAngle(t,i),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,i){return rr.setFromAxisAngle(t,i),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,i){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ic.copy(t):ic.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(wo,ic,this.up):Wi.lookAt(ic,wo,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),rr.setFromRotationMatrix(Wi),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),or.child=t,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cS),sd.child=t,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,oS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,lS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let m=0,v=g.length;m<v;m++){const y=g[m];u(t.shapes,y)}else u(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,m=this.material.length;g<m;g++)h.push(u(t.materials,this.material[g]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];l.animations.push(u(t.animations,g))}}if(i){const h=d(t.geometries),g=d(t.materials),m=d(t.textures),v=d(t.images),y=d(t.shapes),S=d(t.skeletons),E=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const g=[];for(const m in h){const v=h[m];delete v.metadata,g.push(v)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new re(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new re,qi=new re,rd=new re,Yi=new re,lr=new re,cr=new re,b_=new re,od=new re,ld=new re,cd=new re;class Ti{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),di.subVectors(t,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){di.subVectors(l,i),qi.subVectors(s,i),rd.subVectors(t,i);const d=di.dot(di),h=di.dot(qi),g=di.dot(rd),m=qi.dot(qi),v=qi.dot(rd),y=d*m-h*h;if(y===0)return u.set(0,0,0),null;const S=1/y,E=(m*g-h*v)*S,A=(d*v-h*g)*S;return u.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,i,s,l,u,d,h,g){return this.getBarycoord(t,i,s,l,Yi)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(u,Yi.x),g.addScaledVector(d,Yi.y),g.addScaledVector(h,Yi.z),g)}static isFrontFacing(t,i,s,l){return di.subVectors(s,i),qi.subVectors(t,i),di.cross(qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;lr.subVectors(l,s),cr.subVectors(u,s),od.subVectors(t,s);const g=lr.dot(od),m=cr.dot(od);if(g<=0&&m<=0)return i.copy(s);ld.subVectors(t,l);const v=lr.dot(ld),y=cr.dot(ld);if(v>=0&&y<=v)return i.copy(l);const S=g*y-v*m;if(S<=0&&g>=0&&v<=0)return d=g/(g-v),i.copy(s).addScaledVector(lr,d);cd.subVectors(t,u);const E=lr.dot(cd),A=cr.dot(cd);if(A>=0&&E<=A)return i.copy(u);const w=E*m-g*A;if(w<=0&&m>=0&&A<=0)return h=m/(m-A),i.copy(s).addScaledVector(cr,h);const M=v*A-E*y;if(M<=0&&y-v>=0&&E-A>=0)return b_.subVectors(u,l),h=(y-v)/(y-v+(E-A)),i.copy(l).addScaledVector(b_,h);const x=1/(M+w+S);return d=w*x,h=S*x,i.copy(s).addScaledVector(lr,d).addScaledVector(cr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},ac={h:0,s:0,l:0};function ud(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class wt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=bt.workingColorSpace){return this.r=t,this.g=i,this.b=s,bt.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=bt.workingColorSpace){if(t=qy(t,1),i=Pn(i,0,1),s=Pn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=ud(d,u,t+1/3),this.g=ud(d,u,t),this.b=ud(d,u,t-1/3)}return bt.toWorkingColorSpace(this,l),this}setStyle(t,i=Mi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}copyLinearToSRGB(t){return this.r=Qf(t.r),this.g=Qf(t.g),this.b=Qf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return bt.fromWorkingColorSpace(bn.copy(this),t),Math.round(Pn(bn.r*255,0,255))*65536+Math.round(Pn(bn.g*255,0,255))*256+Math.round(Pn(bn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,l=bn.g,u=bn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let g,m;const v=(h+d)/2;if(h===d)g=0,m=0;else{const y=d-h;switch(m=v<=.5?y/(d+h):y/(2-d-h),d){case s:g=(l-u)/y+(l<u?6:0);break;case l:g=(u-s)/y+2;break;case u:g=(s-l)/y+4;break}g/=6}return t.h=g,t.s=m,t.l=v,t}getRGB(t,i=bt.workingColorSpace){return bt.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Mi){bt.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,l=bn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Da),this.setHSL(Da.h+t,Da.s+i,Da.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Da),t.getHSL(ac);const s=Zf(Da.h,ac.h,i),l=Zf(Da.s,ac.s,i),u=Zf(Da.l,ac.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new wt;wt.NAMES=yv;let uS=0;class Bo extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=xr,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sd&&(s.blendSrc=this.blendSrc),this.blendDst!==Md&&(s.blendDst=this.blendDst),this.blendEquation!==ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Tc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const g=u[h];delete g.metadata,d.push(g)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Sv extends Bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new re,sc=new Tt;class gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=f_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Uo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(t),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=To(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=On(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array),u=On(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==f_&&(t.usage=this.usage),t}}class Mv extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ev extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class gs extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let fS=0;const ii=new on,fd=new Yn,ur=new re,qn=new Io,No=new Io,fn=new re;class Ba extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gv(t)?Ev:Mv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ot().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,i,s){return ii.makeTranslation(t,i,s),this.applyMatrix4(ii),this}scale(t,i,s){return ii.makeScale(t,i,s),this.applyMatrix4(ii),this}lookAt(t){return fd.lookAt(t),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){const i=[];for(let s=0,l=t.length;s<l;s++){const u=t[s];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new gs(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];qn.setFromBufferAttribute(u),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];No.setFromBufferAttribute(h),this.morphTargetsRelative?(fn.addVectors(qn.min,No.min),qn.expandByPoint(fn),fn.addVectors(qn.max,No.max),qn.expandByPoint(fn)):(qn.expandByPoint(No.min),qn.expandByPoint(No.max))}qn.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)fn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(fn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],g=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)fn.fromBufferAttribute(h,m),g&&(ur.fromBufferAttribute(t,m),fn.add(ur)),l=Math.max(l,s.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],g=[];for(let J=0;J<s.count;J++)h[J]=new re,g[J]=new re;const m=new re,v=new re,y=new re,S=new Tt,E=new Tt,A=new Tt,w=new re,M=new re;function x(J,D,C){m.fromBufferAttribute(s,J),v.fromBufferAttribute(s,D),y.fromBufferAttribute(s,C),S.fromBufferAttribute(u,J),E.fromBufferAttribute(u,D),A.fromBufferAttribute(u,C),v.sub(m),y.sub(m),E.sub(S),A.sub(S);const V=1/(E.x*A.y-A.x*E.y);isFinite(V)&&(w.copy(v).multiplyScalar(A.y).addScaledVector(y,-E.y).multiplyScalar(V),M.copy(y).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(V),h[J].add(w),h[D].add(w),h[C].add(w),g[J].add(M),g[D].add(M),g[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let J=0,D=B.length;J<D;++J){const C=B[J],V=C.start,ce=C.count;for(let oe=V,me=V+ce;oe<me;oe+=3)x(t.getX(oe+0),t.getX(oe+1),t.getX(oe+2))}const N=new re,z=new re,ie=new re,G=new re;function P(J){ie.fromBufferAttribute(l,J),G.copy(ie);const D=h[J];N.copy(D),N.sub(ie.multiplyScalar(ie.dot(D))).normalize(),z.crossVectors(G,D);const V=z.dot(g[J])<0?-1:1;d.setXYZW(J,N.x,N.y,N.z,V)}for(let J=0,D=B.length;J<D;++J){const C=B[J],V=C.start,ce=C.count;for(let oe=V,me=V+ce;oe<me;oe+=3)P(t.getX(oe+0)),P(t.getX(oe+1)),P(t.getX(oe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,h=new re,g=new re,m=new re,v=new re,y=new re;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),w=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),v.subVectors(d,u),y.subVectors(l,u),v.cross(y),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),h.add(v),g.add(v),m.add(v),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),y.subVectors(l,u),v.cross(y),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)fn.fromBufferAttribute(t,i),fn.normalize(),t.setXYZ(i,fn.x,fn.y,fn.z)}toNonIndexed(){function t(h,g){const m=h.array,v=h.itemSize,y=h.normalized,S=new m.constructor(g.length*v);let E=0,A=0;for(let w=0,M=g.length;w<M;w++){h.isInterleavedBufferAttribute?E=g[w]*h.data.stride+h.offset:E=g[w]*v;for(let x=0;x<v;x++)S[A++]=m[E++]}return new gi(S,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ba,s=this.index.array,l=this.attributes;for(const h in l){const g=l[h],m=t(g,s);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const g=[],m=u[h];for(let v=0,y=m.length;v<y;v++){const S=m[v],E=t(S,s);g.push(E)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];t.data.attributes[g]=m.toJSON(t.data)}const l={};let u=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],v=[];for(let y=0,S=m.length;y<S;y++){const E=m[y];v.push(E.toJSON(t.data))}v.length>0&&(l[g]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],y=u[m];for(let S=0,E=y.length;S<E;S++)v.push(y[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,v=d.length;m<v;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new on,as=new iS,rc=new uh,A_=new re,fr=new re,dr=new re,hr=new re,dd=new re,oc=new re,lc=new Tt,cc=new Tt,uc=new Tt,R_=new re,C_=new re,w_=new re,fc=new re,dc=new re;class Ai extends Yn{constructor(t=new Ba,i=new Sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){oc.set(0,0,0);for(let g=0,m=u.length;g<m;g++){const v=h[g],y=u[g];v!==0&&(dd.fromBufferAttribute(y,t),d?oc.addScaledVector(dd,v):oc.addScaledVector(dd.sub(i),v))}i.add(oc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(u),as.copy(t.ray).recast(t.near),!(rc.containsPoint(as.origin)===!1&&(as.intersectSphere(rc,A_)===null||as.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(u).invert(),as.copy(t.ray).applyMatrix4(T_),!(s.boundingBox!==null&&as.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,as)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,g=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,y=u.attributes.normal,S=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,w=S.length;A<w;A++){const M=S[A],x=d[M.materialIndex],B=Math.max(M.start,E.start),N=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let z=B,ie=N;z<ie;z+=3){const G=h.getX(z),P=h.getX(z+1),J=h.getX(z+2);l=hc(this,x,t,s,m,v,y,G,P,J),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),w=Math.min(h.count,E.start+E.count);for(let M=A,x=w;M<x;M+=3){const B=h.getX(M),N=h.getX(M+1),z=h.getX(M+2);l=hc(this,d,t,s,m,v,y,B,N,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,w=S.length;A<w;A++){const M=S[A],x=d[M.materialIndex],B=Math.max(M.start,E.start),N=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let z=B,ie=N;z<ie;z+=3){const G=z,P=z+1,J=z+2;l=hc(this,x,t,s,m,v,y,G,P,J),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),w=Math.min(g.count,E.start+E.count);for(let M=A,x=w;M<x;M+=3){const B=M,N=M+1,z=M+2;l=hc(this,d,t,s,m,v,y,B,N,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function dS(o,t,i,s,l,u,d,h){let g;if(t.side===zn?g=s.intersectTriangle(d,u,l,!0,h):g=s.intersectTriangle(l,u,d,t.side===za,h),g===null)return null;dc.copy(h),dc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(dc);return m<i.near||m>i.far?null:{distance:m,point:dc.clone(),object:o}}function hc(o,t,i,s,l,u,d,h,g,m){o.getVertexPosition(h,fr),o.getVertexPosition(g,dr),o.getVertexPosition(m,hr);const v=dS(o,t,i,s,fr,dr,hr,fc);if(v){l&&(lc.fromBufferAttribute(l,h),cc.fromBufferAttribute(l,g),uc.fromBufferAttribute(l,m),v.uv=Ti.getInterpolation(fc,fr,dr,hr,lc,cc,uc,new Tt)),u&&(lc.fromBufferAttribute(u,h),cc.fromBufferAttribute(u,g),uc.fromBufferAttribute(u,m),v.uv1=Ti.getInterpolation(fc,fr,dr,hr,lc,cc,uc,new Tt)),d&&(R_.fromBufferAttribute(d,h),C_.fromBufferAttribute(d,g),w_.fromBufferAttribute(d,m),v.normal=Ti.getInterpolation(fc,fr,dr,hr,R_,C_,w_,new re),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:g,c:m,normal:new re,materialIndex:0};Ti.getNormal(fr,dr,hr,y.normal),v.face=y}return v}class Fo extends Ba{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const g=[],m=[],v=[],y=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,d,u,0),A("z","y","x",1,-1,s,i,-t,d,u,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(g),this.setAttribute("position",new gs(m,3)),this.setAttribute("normal",new gs(v,3)),this.setAttribute("uv",new gs(y,2));function A(w,M,x,B,N,z,ie,G,P,J,D){const C=z/P,V=ie/J,ce=z/2,oe=ie/2,me=G/2,de=P+1,L=J+1;let W=0,Z=0;const Me=new re;for(let be=0;be<L;be++){const U=be*V-oe;for(let ne=0;ne<de;ne++){const ve=ne*C-ce;Me[w]=ve*B,Me[M]=U*N,Me[x]=me,m.push(Me.x,Me.y,Me.z),Me[w]=0,Me[M]=0,Me[x]=G>0?1:-1,v.push(Me.x,Me.y,Me.z),y.push(ne/P),y.push(1-be/J),W+=1}}for(let be=0;be<J;be++)for(let U=0;U<P;U++){const ne=S+U+de*be,ve=S+U+de*(be+1),q=S+(U+1)+de*(be+1),le=S+(U+1)+de*be;g.push(ne,ve,le),g.push(ve,q,le),Z+=6}h.addGroup(E,Z,D),E+=Z,S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function An(o){const t={};for(let i=0;i<o.length;i++){const s=Ar(o[i]);for(const l in s)t[l]=s[l]}return t}function hS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function bv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const pS={clone:Ar,merge:An};var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=gS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=hS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tv extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Qi}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new re,N_=new Tt,D_=new Tt;class hi extends Tv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(Yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z)}getViewSize(t,i){return this.getViewBounds(t,N_,D_),i.subVectors(D_,N_)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/g,i-=d.offsetY*s/m,l*=d.width/g,s*=d.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class _S extends Yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(pr,mr,t,i);l.layers=this.layers,this.add(l);const u=new hi(pr,mr,t,i);u.layers=this.layers,this.add(u);const d=new hi(pr,mr,t,i);d.layers=this.layers,this.add(d);const h=new hi(pr,mr,t,i);h.layers=this.layers,this.add(h);const g=new hi(pr,mr,t,i);g.layers=this.layers,this.add(g);const m=new hi(pr,mr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,g]=i;for(const m of i)this.remove(m);if(t===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,g,m,v]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,g),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(y,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Av extends In{constructor(t,i,s,l,u,d,h,g,m,v){t=t!==void 0?t:[],i=i!==void 0?i:Mr,super(t,i,s,l,u,d,h,g,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vS extends vs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Av(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fo(5,5,5),u=new ea({name:"CubemapFromEquirect",uniforms:Ar(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Oa});u.uniforms.tEquirect.value=i;const d=new Ai(l,u),h=i.minFilter;return i.minFilter===ms&&(i.minFilter=pi),new _S(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}const hd=new re,xS=new re,yS=new ot;class us{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=hd.subVectors(s,i).cross(xS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(hd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||yS.getNormalMatrix(t),l=this.coplanarPoint(hd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new uh,pc=new re;class Rv{constructor(t=new us,i=new us,s=new us,l=new us,u=new us,d=new us){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Qi){const s=this.planes,l=t.elements,u=l[0],d=l[1],h=l[2],g=l[3],m=l[4],v=l[5],y=l[6],S=l[7],E=l[8],A=l[9],w=l[10],M=l[11],x=l[12],B=l[13],N=l[14],z=l[15];if(s[0].setComponents(g-u,S-m,M-E,z-x).normalize(),s[1].setComponents(g+u,S+m,M+E,z+x).normalize(),s[2].setComponents(g+d,S+v,M+A,z+B).normalize(),s[3].setComponents(g-d,S-v,M-A,z-B).normalize(),s[4].setComponents(g-h,S-y,M-w,z-N).normalize(),i===Qi)s[5].setComponents(g+h,S+y,M+w,z+N).normalize();else if(i===wc)s[5].setComponents(h,y,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(pc.x=l.normal.x>0?t.max.x:t.min.x,pc.y=l.normal.y>0?t.max.y:t.min.y,pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cv(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function SS(o){const t=new WeakMap;function i(h,g){const m=h.array,v=h.usage,y=m.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,m,v),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:y}}function s(h,g,m){const v=g.array,y=g._updateRange,S=g.updateRanges;if(o.bindBuffer(m,h),y.count===-1&&S.length===0&&o.bufferSubData(m,0,v),S.length!==0){for(let E=0,A=S.length;E<A;E++){const w=S[E];o.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}g.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(m,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count),y.count=-1),g.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=t.get(h);g&&(o.deleteBuffer(g.buffer),t.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,g));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,g),m.version=h.version}}return{get:l,remove:u,update:d}}class Lc extends Ba{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),g=Math.floor(l),m=h+1,v=g+1,y=t/h,S=i/g,E=[],A=[],w=[],M=[];for(let x=0;x<v;x++){const B=x*S-d;for(let N=0;N<m;N++){const z=N*y-u;A.push(z,-B,0),w.push(0,0,1),M.push(N/h),M.push(1-x/g)}}for(let x=0;x<g;x++)for(let B=0;B<h;B++){const N=B+m*x,z=B+m*(x+1),ie=B+1+m*(x+1),G=B+1+m*x;E.push(N,z,G),E.push(z,ie,G)}this.setIndex(E),this.setAttribute("position",new gs(A,3)),this.setAttribute("normal",new gs(w,3)),this.setAttribute("uv",new gs(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.width,t.height,t.widthSegments,t.heightSegments)}}var MS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ES=`#ifdef USE_ALPHAHASH
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
#endif`,bS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CS=`#ifdef USE_AOMAP
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
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NS=`#ifdef USE_BATCHING
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
#endif`,DS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PS=`#ifdef USE_IRIDESCENCE
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
#endif`,zS=`#ifdef USE_BUMPMAP
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
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,XS=`#define PI 3.141592653589793
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
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qS=`vec3 transformedNormal = objectNormal;
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
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`
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
}`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
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
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,SM=`
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DM=`#if defined( USE_POINTS_UV )
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
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
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
#endif`,BM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kM=`#ifdef USE_NORMALMAP
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
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
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
}`,CE=`#if DEPTH_PACKING == 3200
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
}`,wE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,OE=`uniform vec3 diffuse;
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
}`,PE=`#include <common>
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
}`,zE=`uniform vec3 diffuse;
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
}`,IE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,HE=`#define MATCAP
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
}`,GE=`#define NORMAL
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
}`,VE=`#define NORMAL
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
}`,jE=`#define PHONG
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
}`,kE=`#define PHONG
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
}`,XE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,qE=`#define TOON
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
}`,YE=`#define TOON
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
}`,ZE=`uniform float size;
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,JE=`uniform vec3 color;
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
}`,$E=`uniform float rotation;
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
}`,eb=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:MS,alphahash_pars_fragment:ES,alphamap_fragment:bS,alphamap_pars_fragment:TS,alphatest_fragment:AS,alphatest_pars_fragment:RS,aomap_fragment:CS,aomap_pars_fragment:wS,batching_pars_vertex:NS,batching_vertex:DS,begin_vertex:US,beginnormal_vertex:LS,bsdfs:OS,iridescence_fragment:PS,bumpmap_pars_fragment:zS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:BS,clipping_planes_pars_vertex:FS,clipping_planes_vertex:HS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:jS,color_vertex:kS,common:XS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:qS,displacementmap_pars_vertex:YS,displacementmap_vertex:ZS,emissivemap_fragment:KS,emissivemap_pars_fragment:QS,colorspace_fragment:JS,colorspace_pars_fragment:$S,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:aM,fog_vertex:sM,fog_pars_vertex:rM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:dM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:xM,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:MM,lights_fragment_end:EM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:wM,map_particle_fragment:NM,map_particle_pars_fragment:DM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:LM,morphinstance_vertex:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:IM,morphtarget_vertex:BM,normal_fragment_begin:FM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:jM,normalmap_pars_fragment:kM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:qM,iridescence_pars_fragment:YM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:sE,shadowmask_pars_fragment:rE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:xE,worldpos_vertex:yE,background_vert:SE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:bE,cube_vert:TE,cube_frag:AE,depth_vert:RE,depth_frag:CE,distanceRGBA_vert:wE,distanceRGBA_frag:NE,equirect_vert:DE,equirect_frag:UE,linedashed_vert:LE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:IE,meshlambert_frag:BE,meshmatcap_vert:FE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:jE,meshphong_frag:kE,meshphysical_vert:XE,meshphysical_frag:WE,meshtoon_vert:qE,meshtoon_frag:YE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:eb},Ue={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ei={basic:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:An([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:An([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:An([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:An([Ue.points,Ue.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:An([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:An([Ue.common,Ue.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:An([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:An([Ue.sprite,Ue.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:An([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:An([Ue.lights,Ue.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ei.physical={uniforms:An([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const mc={r:0,b:0,g:0},rs=new $i,tb=new on;function nb(o,t,i,s,l,u,d){const h=new wt(0);let g=u===!0?0:1,m,v,y=null,S=0,E=null;function A(B){let N=B.isScene===!0?B.background:null;return N&&N.isTexture&&(N=(B.backgroundBlurriness>0?i:t).get(N)),N}function w(B){let N=!1;const z=A(B);z===null?x(h,g):z&&z.isColor&&(x(z,1),N=!0);const ie=o.xr.getEnvironmentBlendMode();ie==="additive"?s.buffers.color.setClear(0,0,0,1,d):ie==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,N){const z=A(N);z&&(z.isCubeTexture||z.mapping===Dc)?(v===void 0&&(v=new Ai(new Fo(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Ar(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(ie,G,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),rs.copy(N.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(rs)),v.material.toneMapped=bt.getTransfer(z.colorSpace)!==Ft,(y!==z||S!==z.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,y=z,S=z.version,E=o.toneMapping),v.layers.enableAll(),B.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(m===void 0&&(m=new Ai(new Lc(2,2),new ea({name:"BackgroundMaterial",uniforms:Ar(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=z,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=bt.getTransfer(z.colorSpace)!==Ft,z.matrixAutoUpdate===!0&&z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(z.matrix),(y!==z||S!==z.version||E!==o.toneMapping)&&(m.material.needsUpdate=!0,y=z,S=z.version,E=o.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function x(B,N){B.getRGB(mc,bv(o)),s.buffers.color.setClear(mc.r,mc.g,mc.b,N,d)}return{getClearColor:function(){return h},setClearColor:function(B,N=1){h.set(B),g=N,x(h,g)},getClearAlpha:function(){return g},setClearAlpha:function(B){g=B,x(h,g)},render:w,addToRenderList:M}}function ib(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(C,V,ce,oe,me){let de=!1;const L=y(oe,ce,V);u!==L&&(u=L,m(u.object)),de=E(C,oe,ce,me),de&&A(C,oe,ce,me),me!==null&&t.update(me,o.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,z(C,V,ce,oe),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function g(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function y(C,V,ce){const oe=ce.wireframe===!0;let me=s[C.id];me===void 0&&(me={},s[C.id]=me);let de=me[V.id];de===void 0&&(de={},me[V.id]=de);let L=de[oe];return L===void 0&&(L=S(g()),de[oe]=L),L}function S(C){const V=[],ce=[],oe=[];for(let me=0;me<i;me++)V[me]=0,ce[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:oe,object:C,attributes:{},index:null}}function E(C,V,ce,oe){const me=u.attributes,de=V.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){const be=me[Z];let U=de[Z];if(U===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),be===void 0||be.attribute!==U||U&&be.data!==U.data)return!0;L++}return u.attributesNum!==L||u.index!==oe}function A(C,V,ce,oe){const me={},de=V.attributes;let L=0;const W=ce.getAttributes();for(const Z in W)if(W[Z].location>=0){let be=de[Z];be===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const U={};U.attribute=be,be&&be.data&&(U.data=be.data),me[Z]=U,L++}u.attributes=me,u.attributesNum=L,u.index=oe}function w(){const C=u.newAttributes;for(let V=0,ce=C.length;V<ce;V++)C[V]=0}function M(C){x(C,0)}function x(C,V){const ce=u.newAttributes,oe=u.enabledAttributes,me=u.attributeDivisors;ce[C]=1,oe[C]===0&&(o.enableVertexAttribArray(C),oe[C]=1),me[C]!==V&&(o.vertexAttribDivisor(C,V),me[C]=V)}function B(){const C=u.newAttributes,V=u.enabledAttributes;for(let ce=0,oe=V.length;ce<oe;ce++)V[ce]!==C[ce]&&(o.disableVertexAttribArray(ce),V[ce]=0)}function N(C,V,ce,oe,me,de,L){L===!0?o.vertexAttribIPointer(C,V,ce,me,de):o.vertexAttribPointer(C,V,ce,oe,me,de)}function z(C,V,ce,oe){w();const me=oe.attributes,de=ce.getAttributes(),L=V.defaultAttributeValues;for(const W in de){const Z=de[W];if(Z.location>=0){let Me=me[W];if(Me===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const be=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const ve=ne.buffer,q=ne.type,le=ne.bytesPerElement,ye=q===o.INT||q===o.UNSIGNED_INT||Me.gpuType===ih;if(Me.isInterleavedBufferAttribute){const Ee=Me.data,Ge=Ee.stride,He=Me.offset;if(Ee.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)x(Z.location+nt,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let nt=0;nt<Z.locationSize;nt++)M(Z.location+nt);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let nt=0;nt<Z.locationSize;nt++)N(Z.location+nt,U/Z.locationSize,q,be,Ge*le,(He+U/Z.locationSize*nt)*le,ye)}else{if(Me.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)x(Z.location+Ee,Me.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)M(Z.location+Ee);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let Ee=0;Ee<Z.locationSize;Ee++)N(Z.location+Ee,U/Z.locationSize,q,be,U*le,U/Z.locationSize*Ee*le,ye)}}else if(L!==void 0){const be=L[W];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(Z.location,be);break;case 3:o.vertexAttrib3fv(Z.location,be);break;case 4:o.vertexAttrib4fv(Z.location,be);break;default:o.vertexAttrib1fv(Z.location,be)}}}}B()}function ie(){J();for(const C in s){const V=s[C];for(const ce in V){const oe=V[ce];for(const me in oe)v(oe[me].object),delete oe[me];delete V[ce]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const ce in V){const oe=V[ce];for(const me in oe)v(oe[me].object),delete oe[me];delete V[ce]}delete s[C.id]}function P(C){for(const V in s){const ce=s[V];if(ce[C.id]===void 0)continue;const oe=ce[C.id];for(const me in oe)v(oe[me].object),delete oe[me];delete ce[C.id]}}function J(){D(),d=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:D,dispose:ie,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:B}}function ab(o,t,i){let s;function l(m){s=m}function u(m,v){o.drawArrays(s,m,v),i.update(v,s,1)}function d(m,v,y){y!==0&&(o.drawArraysInstanced(s,m,v,y),i.update(v,s,y))}function h(m,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,y);let E=0;for(let A=0;A<y;A++)E+=v[A];i.update(E,s,1)}function g(m,v,y,S){if(y===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<m.length;A++)d(m[A],v[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,m,0,v,0,S,0,y);let A=0;for(let w=0;w<y;w++)A+=v[w];for(let w=0;w<S.length;w++)i.update(A,s,S[w])}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function sb(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(G){return!(G!==mi&&s.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const P=G===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==Ji&&s.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ki&&!P)}function g(G){if(G==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=g(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),w=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,ie=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:w,maxAttributes:M,maxVertexUniforms:x,maxVaryings:B,maxFragmentUniforms:N,vertexTextures:z,maxSamples:ie}}function rb(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new us,h=new ot,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||s!==0||l;return l=S,s=y.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,S){i=v(y,S,0)},this.setState=function(y,S,E){const A=y.clippingPlanes,w=y.clipIntersection,M=y.clipShadows,x=o.get(y);if(!l||A===null||A.length===0||u&&!M)u?v(null):m();else{const B=u?0:s,N=B*4;let z=x.clippingState||null;g.value=z,z=v(A,S,N,E);for(let ie=0;ie!==N;++ie)z[ie]=i[ie];x.clippingState=z,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=B}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(y,S,E,A){const w=y!==null?y.length:0;let M=null;if(w!==0){if(M=g.value,A!==!0||M===null){const x=E+w*4,B=S.matrixWorldInverse;h.getNormalMatrix(B),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,z=E;N!==w;++N,z+=4)d.copy(y[N]).applyMatrix4(B,h),d.normal.toArray(M,z),M[z+3]=d.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function ob(o){let t=new WeakMap;function i(d,h){return h===Ed?d.mapping=Mr:h===bd&&(d.mapping=Er),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ed||h===bd)if(t.has(d)){const g=t.get(d).texture;return i(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const m=new vS(g.height);return m.fromEquirectangularTexture(o,d),t.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}class wv extends Tv{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=v*this.view.offsetY,g=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const _r=4,U_=[.125,.215,.35,.446,.526,.582],hs=20,pd=new wv,L_=new wt;let md=null,gd=0,_d=0,vd=!1;const fs=(1+Math.sqrt(5))/2,gr=1/fs,O_=[new re(-fs,gr,0),new re(fs,gr,0),new re(-gr,0,fs),new re(gr,0,fs),new re(0,fs,-gr),new re(0,fs,gr),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class P_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(md,gd,_d),this._renderer.xr.enabled=vd,t.scissorTest=!1,gc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Mr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Oo,format:mi,colorSpace:Ia,depthBuffer:!1},l=z_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(u)),this._blurMaterial=cb(u,t,i)}return l}_compileMaterial(t){const i=new Ai(this._lodPlanes[0],t);this._renderer.compile(i,pd)}_sceneToCubeUV(t,i,s,l){const h=new hi(90,1,i,s),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(L_),v.toneMapping=Pa,v.autoClear=!1;const E=new Sv({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),A=new Ai(new Fo,E);let w=!1;const M=t.background;M?M.isColor&&(E.color.copy(M),t.background=null,w=!0):(E.color.copy(L_),w=!0);for(let x=0;x<6;x++){const B=x%3;B===0?(h.up.set(0,g[x],0),h.lookAt(m[x],0,0)):B===1?(h.up.set(0,0,g[x]),h.lookAt(0,m[x],0)):(h.up.set(0,g[x],0),h.lookAt(0,0,m[x]));const N=this._cubeSize;gc(l,B*N,x>2?N:0,N,N),v.setRenderTarget(l),w&&v.render(A,h),v.render(t,h)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Mr||t.mapping===Er;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ai(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const g=this._cubeSize;gc(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,pd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=O_[(l-u-1)%O_.length];this._blur(t,u-1,u,d,h)}i.autoClear=s}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const g=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Ai(this._lodPlanes[l],m),S=m.uniforms,E=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*hs-1),w=u/A,M=isFinite(u)?1+Math.floor(v*w):hs;M>hs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${hs}`);const x=[];let B=0;for(let P=0;P<hs;++P){const J=P/w,D=Math.exp(-J*J/2);x.push(D),P===0?B+=D:P<M&&(B+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/B;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-s;const z=this._sizeLods[l],ie=3*z*(l>N-_r?l-N+_r:0),G=4*(this._cubeSize-z);gc(i,ie,G,3*z,2*z),g.setRenderTarget(i),g.render(y,pd)}}function lb(o){const t=[],i=[],s=[];let l=o;const u=o-_r+1+U_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let g=1/h;d>o-_r?g=U_[d-o+_r-1]:d===0&&(g=0),s.push(g);const m=1/(h-2),v=-m,y=1+m,S=[v,v,y,v,y,y,v,v,y,y,v,y],E=6,A=6,w=3,M=2,x=1,B=new Float32Array(w*A*E),N=new Float32Array(M*A*E),z=new Float32Array(x*A*E);for(let G=0;G<E;G++){const P=G%3*2/3-1,J=G>2?0:-1,D=[P,J,0,P+2/3,J,0,P+2/3,J+1,0,P,J,0,P+2/3,J+1,0,P,J+1,0];B.set(D,w*A*G),N.set(S,M*A*G);const C=[G,G,G,G,G,G];z.set(C,x*A*G)}const ie=new Ba;ie.setAttribute("position",new gi(B,w)),ie.setAttribute("uv",new gi(N,M)),ie.setAttribute("faceIndex",new gi(z,x)),t.push(ie),l>_r&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function z_(o,t,i){const s=new vs(o,t,i);return s.texture.mapping=Dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function cb(o,t,i){const s=new Float32Array(hs),l=new re(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function I_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function B_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function ub(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const g=h.mapping,m=g===Ed||g===bd,v=g===Mr||g===Er;if(m||v){let y=t.get(h);const S=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new P_(o)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),y.texture;if(y!==void 0)return y.texture;{const E=h.image;return m&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new P_(o)),y=m?i.fromEquirectangular(h):i.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),h.addEventListener("dispose",u),y.texture):null}}}return h}function l(h){let g=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&g++;return g===m}function u(h){const g=h.target;g.removeEventListener("dispose",u);const m=t.get(g);m!==void 0&&(t.delete(g),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function fb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Uo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function db(o,t,i,s){const l={},u=new WeakMap;function d(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);for(const A in S.morphAttributes){const w=S.morphAttributes[A];for(let M=0,x=w.length;M<x;M++)t.remove(w[M])}S.removeEventListener("dispose",d),delete l[S.id];const E=u.get(S);E&&(t.remove(E),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(y,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function g(y){const S=y.attributes;for(const A in S)t.update(S[A],o.ARRAY_BUFFER);const E=y.morphAttributes;for(const A in E){const w=E[A];for(let M=0,x=w.length;M<x;M++)t.update(w[M],o.ARRAY_BUFFER)}}function m(y){const S=[],E=y.index,A=y.attributes.position;let w=0;if(E!==null){const B=E.array;w=E.version;for(let N=0,z=B.length;N<z;N+=3){const ie=B[N+0],G=B[N+1],P=B[N+2];S.push(ie,G,G,P,P,ie)}}else if(A!==void 0){const B=A.array;w=A.version;for(let N=0,z=B.length/3-1;N<z;N+=3){const ie=N+0,G=N+1,P=N+2;S.push(ie,G,G,P,P,ie)}}else return;const M=new(gv(S)?Ev:Mv)(S,1);M.version=w;const x=u.get(y);x&&t.remove(x),u.set(y,M)}function v(y){const S=u.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&m(y)}else m(y);return u.get(y)}return{get:h,update:g,getWireframeAttribute:v}}function hb(o,t,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function g(S,E){o.drawElements(s,E,u,S*d),i.update(E,s,1)}function m(S,E,A){A!==0&&(o.drawElementsInstanced(s,E,u,S*d,A),i.update(E,s,A))}function v(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,S,0,A);let M=0;for(let x=0;x<A;x++)M+=E[x];i.update(M,s,1)}function y(S,E,A,w){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)m(S[x]/d,E[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,u,S,0,w,0,A);let x=0;for(let B=0;B<A;B++)x+=E[B];for(let B=0;B<w.length;B++)i.update(x,s,w[B])}}this.setMode=l,this.setIndex=h,this.render=g,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function pb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function mb(o,t,i){const s=new WeakMap,l=new dn;function u(d,h,g){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==y){let C=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let z=0;A===!0&&(z=1),w===!0&&(z=2),M===!0&&(z=3);let ie=h.attributes.position.count*z,G=1;ie>t.maxTextureSize&&(G=Math.ceil(ie/t.maxTextureSize),ie=t.maxTextureSize);const P=new Float32Array(ie*G*4*y),J=new vv(P,ie,G,y);J.type=Ki,J.needsUpdate=!0;const D=z*4;for(let V=0;V<y;V++){const ce=x[V],oe=B[V],me=N[V],de=ie*G*4*V;for(let L=0;L<ce.count;L++){const W=L*D;A===!0&&(l.fromBufferAttribute(ce,L),P[de+W+0]=l.x,P[de+W+1]=l.y,P[de+W+2]=l.z,P[de+W+3]=0),w===!0&&(l.fromBufferAttribute(oe,L),P[de+W+4]=l.x,P[de+W+5]=l.y,P[de+W+6]=l.z,P[de+W+7]=0),M===!0&&(l.fromBufferAttribute(me,L),P[de+W+8]=l.x,P[de+W+9]=l.y,P[de+W+10]=l.z,P[de+W+11]=me.itemSize===4?l.w:1)}}S={count:y,texture:J,size:new Tt(ie,G)},s.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const w=h.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function gb(o,t,i,s){let l=new WeakMap;function u(g){const m=s.render.frame,v=g.geometry,y=t.get(g,v);if(l.get(y)!==m&&(t.update(y),l.set(y,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",h)===!1&&g.addEventListener("dispose",h),l.get(g)!==m&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,m))),g.isSkinnedMesh){const S=g.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return y}function d(){l=new WeakMap}function h(g){const m=g.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class Nv extends In{constructor(t,i,s,l,u,d,h,g,m,v=yr){if(v!==yr&&v!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===yr&&(s=_s),s===void 0&&v===Tr&&(s=br),super(null,l,u,d,h,g,v,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:ai,this.minFilter=g!==void 0?g:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Dv=new In,F_=new Nv(1,1),Uv=new vv,Lv=new tS,Ov=new Av,H_=[],G_=[],V_=new Float32Array(16),j_=new Float32Array(9),k_=new Float32Array(4);function Cr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=H_[l];if(u===void 0&&(u=new Float32Array(l),H_[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function ln(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Oc(o,t){let i=G_[t];i===void 0&&(i=new Int32Array(t),G_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function _b(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function vb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2fv(this.addr,t),cn(i,t)}}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;o.uniform3fv(this.addr,t),cn(i,t)}}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4fv(this.addr,t),cn(i,t)}}function Sb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;k_.set(s),o.uniformMatrix2fv(this.addr,!1,k_),cn(i,s)}}function Mb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;j_.set(s),o.uniformMatrix3fv(this.addr,!1,j_),cn(i,s)}}function Eb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;V_.set(s),o.uniformMatrix4fv(this.addr,!1,V_),cn(i,s)}}function bb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2iv(this.addr,t),cn(i,t)}}function Ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3iv(this.addr,t),cn(i,t)}}function Rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4iv(this.addr,t),cn(i,t)}}function Cb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function wb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2uiv(this.addr,t),cn(i,t)}}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3uiv(this.addr,t),cn(i,t)}}function Db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4uiv(this.addr,t),cn(i,t)}}function Ub(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(F_.compareFunction=mv,u=F_):u=Dv,i.setTexture2D(t||u,l)}function Lb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Lv,l)}function Ob(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ov,l)}function Pb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Uv,l)}function zb(o){switch(o){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return yb;case 35674:return Sb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return bb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return wb;case 36295:return Nb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Pb}}function Ib(o,t){o.uniform1fv(this.addr,t)}function Bb(o,t){const i=Cr(t,this.size,2);o.uniform2fv(this.addr,i)}function Fb(o,t){const i=Cr(t,this.size,3);o.uniform3fv(this.addr,i)}function Hb(o,t){const i=Cr(t,this.size,4);o.uniform4fv(this.addr,i)}function Gb(o,t){const i=Cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Vb(o,t){const i=Cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function jb(o,t){const i=Cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function kb(o,t){o.uniform1iv(this.addr,t)}function Xb(o,t){o.uniform2iv(this.addr,t)}function Wb(o,t){o.uniform3iv(this.addr,t)}function qb(o,t){o.uniform4iv(this.addr,t)}function Yb(o,t){o.uniform1uiv(this.addr,t)}function Zb(o,t){o.uniform2uiv(this.addr,t)}function Kb(o,t){o.uniform3uiv(this.addr,t)}function Qb(o,t){o.uniform4uiv(this.addr,t)}function Jb(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Dv,u[d])}function $b(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Lv,u[d])}function eT(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Ov,u[d])}function tT(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Uv,u[d])}function nT(o){switch(o){case 5126:return Ib;case 35664:return Bb;case 35665:return Fb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return jb;case 5124:case 35670:return kb;case 35667:case 35671:return Xb;case 35668:case 35672:return Wb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return Zb;case 36295:return Kb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}class iT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zb(i.type)}}class aT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nT(i.type)}}class sT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function X_(o,t){o.seq.push(t),o.map[t.id]=t}function rT(o,t,i){const s=o.name,l=s.length;for(xd.lastIndex=0;;){const u=xd.exec(s),d=xd.lastIndex;let h=u[1];const g=u[2]==="]",m=u[3];if(g&&(h=h|0),m===void 0||m==="["&&d+2===l){X_(i,m===void 0?new iT(h,o,t):new aT(h,o,t));break}else{let y=i.map[h];y===void 0&&(y=new sT(h),X_(i,y)),i=y}}}class bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);rT(u,d,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],g=s[h.id];g.needsUpdate!==!1&&h.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function W_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const oT=37297;let lT=0;function cT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function uT(o){const t=bt.getPrimaries(bt.workingColorSpace),i=bt.getPrimaries(o);let s;switch(t===i?s="":t===Cc&&i===Rc?s="LinearDisplayP3ToLinearSRGB":t===Rc&&i===Cc&&(s="LinearSRGBToLinearDisplayP3"),o){case Ia:case Uc:return[s,"LinearTransferOETF"];case Mi:case ch:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function q_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+cT(o.getShaderSource(t),d)}else return l}function fT(o,t){const i=uT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function dT(o,t){let i;switch(t){case Cy:i="Linear";break;case wy:i="Reinhard";break;case Ny:i="OptimizedCineon";break;case Dy:i="ACESFilmic";break;case Ly:i="AgX";break;case Oy:i="Neutral";break;case Uy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new re;function hT(){bt.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),t=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function mT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Do(o){return o!==""}function Y_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _T=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(o){return o.replace(_T,xT)}const vT=new Map;function xT(o,t){let i=rt[t];if(i===void 0){const s=vT.get(t);if(s!==void 0)i=rt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return eh(i)}const yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(o){return o.replace(yT,ST)}function ST(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Q_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function MT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===nv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ey?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(t="SHADOWMAP_TYPE_VSM"),t}function ET(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Mr:case Er:t="ENVMAP_TYPE_CUBE";break;case Dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function TT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case iv:t="ENVMAP_BLENDING_MULTIPLY";break;case Ay:t="ENVMAP_BLENDING_MIX";break;case Ry:t="ENVMAP_BLENDING_ADD";break}return t}function AT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RT(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=MT(i),m=ET(i),v=bT(i),y=TT(i),S=AT(i),E=pT(i),A=mT(u),w=l.createProgram();let M,x,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),x.length>0&&(x+=`
`)):(M=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),x=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pa?"#define TONE_MAPPING":"",i.toneMapping!==Pa?rt.tonemapping_pars_fragment:"",i.toneMapping!==Pa?dT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,fT("linearToOutputTexel",i.outputColorSpace),hT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),d=eh(d),d=Y_(d,i),d=Z_(d,i),h=eh(h),h=Y_(h,i),h=Z_(h,i),d=K_(d),h=K_(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===d_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===d_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=B+M+d,z=B+x+h,ie=W_(l,l.VERTEX_SHADER,N),G=W_(l,l.FRAGMENT_SHADER,z);l.attachShader(w,ie),l.attachShader(w,G),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(V){if(o.debug.checkShaderErrors){const ce=l.getProgramInfoLog(w).trim(),oe=l.getShaderInfoLog(ie).trim(),me=l.getShaderInfoLog(G).trim();let de=!0,L=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,ie,G);else{const W=q_(l,ie,"vertex"),Z=q_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+W+`
`+Z)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(oe===""||me==="")&&(L=!1);L&&(V.diagnostics={runnable:de,programLog:ce,vertexShader:{log:oe,prefix:M},fragmentShader:{log:me,prefix:x}})}l.deleteShader(ie),l.deleteShader(G),J=new bc(l,w),D=gT(l,w)}let J;this.getUniforms=function(){return J===void 0&&P(this),J};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,oT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=ie,this.fragmentShader=G,this}let CT=0;class wT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new NT(t),i.set(t,s)),s}}class NT{constructor(t){this.id=CT++,this.code=t,this.usedTimes=0}}function DT(o,t,i,s,l,u,d){const h=new xv,g=new wT,m=new Set,v=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,V,ce,oe){const me=ce.fog,de=oe.geometry,L=D.isMeshStandardMaterial?ce.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||L),Z=W&&W.mapping===Dc?W.image.height:null,Me=A[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const be=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=be!==void 0?be.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let ve,q,le,ye;if(Me){const vt=Ei[Me];ve=vt.vertexShader,q=vt.fragmentShader}else ve=D.vertexShader,q=D.fragmentShader,g.update(D),le=g.getVertexShaderID(D),ye=g.getFragmentShaderID(D);const Ee=o.getRenderTarget(),Ge=oe.isInstancedMesh===!0,He=oe.isBatchedMesh===!0,nt=!!D.map,Lt=!!D.matcap,F=!!W,jt=!!D.aoMap,ut=!!D.lightMap,yt=!!D.bumpMap,Ve=!!D.normalMap,kt=!!D.displacementMap,$e=!!D.emissiveMap,et=!!D.metalnessMap,O=!!D.roughnessMap,T=D.anisotropy>0,ae=D.clearcoat>0,Se=D.dispersion>0,_e=D.iridescence>0,xe=D.sheen>0,We=D.transmission>0,De=T&&!!D.anisotropyMap,Le=ae&&!!D.clearcoatMap,it=ae&&!!D.clearcoatNormalMap,Ae=ae&&!!D.clearcoatRoughnessMap,Oe=_e&&!!D.iridescenceMap,ht=_e&&!!D.iridescenceThicknessMap,Ke=xe&&!!D.sheenColorMap,we=xe&&!!D.sheenRoughnessMap,Ye=!!D.specularMap,Ze=!!D.specularColorMap,zt=!!D.specularIntensityMap,j=We&&!!D.transmissionMap,Re=We&&!!D.thicknessMap,he=!!D.gradientMap,ge=!!D.alphaMap,Ce=D.alphaTest>0,ke=!!D.alphaHash,lt=!!D.extensions;let Pt=Pa;D.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Pt=o.toneMapping);const an={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:ve,fragmentShader:q,defines:D.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:He,batchingColor:He&&oe._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&oe.instanceColor!==null,instancingMorph:Ge&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ee===null?o.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ia,alphaToCoverage:!!D.alphaToCoverage,map:nt,matcap:Lt,envMap:F,envMapMode:F&&W.mapping,envMapCubeUVHeight:Z,aoMap:jt,lightMap:ut,bumpMap:yt,normalMap:Ve,displacementMap:S&&kt,emissiveMap:$e,normalMapObjectSpace:Ve&&D.normalMapType===Fy,normalMapTangentSpace:Ve&&D.normalMapType===By,metalnessMap:et,roughnessMap:O,anisotropy:T,anisotropyMap:De,clearcoat:ae,clearcoatMap:Le,clearcoatNormalMap:it,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:ht,sheen:xe,sheenColorMap:Ke,sheenRoughnessMap:we,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:zt,transmission:We,transmissionMap:j,thicknessMap:Re,gradientMap:he,opaque:D.transparent===!1&&D.blending===xr&&D.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ce,alphaHash:ke,combine:D.combine,mapUv:nt&&w(D.map.channel),aoMapUv:jt&&w(D.aoMap.channel),lightMapUv:ut&&w(D.lightMap.channel),bumpMapUv:yt&&w(D.bumpMap.channel),normalMapUv:Ve&&w(D.normalMap.channel),displacementMapUv:kt&&w(D.displacementMap.channel),emissiveMapUv:$e&&w(D.emissiveMap.channel),metalnessMapUv:et&&w(D.metalnessMap.channel),roughnessMapUv:O&&w(D.roughnessMap.channel),anisotropyMapUv:De&&w(D.anisotropyMap.channel),clearcoatMapUv:Le&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:it&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:we&&w(D.sheenRoughnessMap.channel),specularMapUv:Ye&&w(D.specularMap.channel),specularColorMapUv:Ze&&w(D.specularColorMap.channel),specularIntensityMapUv:zt&&w(D.specularIntensityMap.channel),transmissionMapUv:j&&w(D.transmissionMap.channel),thicknessMapUv:Re&&w(D.thicknessMap.channel),alphaMapUv:ge&&w(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ve||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(nt||ge),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Pt,decodeVideoTexture:nt&&D.map.isVideoTexture===!0&&bt.getTransfer(D.map.colorSpace)===Ft,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===bi,flipSided:D.side===zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:lt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&D.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(B(C,D),N(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.skinning&&h.enable(4),C.morphTargets&&h.enable(5),C.morphNormals&&h.enable(6),C.morphColors&&h.enable(7),C.premultipliedAlpha&&h.enable(8),C.shadowMapEnabled&&h.enable(9),C.doubleSided&&h.enable(10),C.flipSided&&h.enable(11),C.useDepthPacking&&h.enable(12),C.dithering&&h.enable(13),C.transmission&&h.enable(14),C.sheen&&h.enable(15),C.opaque&&h.enable(16),C.pointsUvs&&h.enable(17),C.decodeVideoTexture&&h.enable(18),C.alphaToCoverage&&h.enable(19),D.push(h.mask)}function z(D){const C=A[D.type];let V;if(C){const ce=Ei[C];V=pS.clone(ce.uniforms)}else V=D.uniforms;return V}function ie(D,C){let V;for(let ce=0,oe=v.length;ce<oe;ce++){const me=v[ce];if(me.cacheKey===C){V=me,++V.usedTimes;break}}return V===void 0&&(V=new RT(o,C,D,u),v.push(V)),V}function G(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function P(D){g.remove(D)}function J(){g.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:z,acquireProgram:ie,releaseProgram:G,releaseShaderCache:P,programs:v,dispose:J}}function UT(){let o=new WeakMap;function t(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function s(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:t,remove:i,update:s,dispose:l}}function LT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function J_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function $_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(y,S,E,A,w,M){let x=o[t];return x===void 0?(x={id:y.id,object:y,geometry:S,material:E,groupOrder:A,renderOrder:y.renderOrder,z:w,group:M},o[t]=x):(x.id=y.id,x.object=y,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=y.renderOrder,x.z=w,x.group=M),t++,x}function h(y,S,E,A,w,M){const x=d(y,S,E,A,w,M);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function g(y,S,E,A,w,M){const x=d(y,S,E,A,w,M);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function m(y,S){i.length>1&&i.sort(y||LT),s.length>1&&s.sort(S||J_),l.length>1&&l.sort(S||J_)}function v(){for(let y=t,S=o.length;y<S;y++){const E=o[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:g,finish:v,sort:m}}function OT(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new $_,o.set(s,[d])):l>=u.length?(d=new $_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function PT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new wt};break;case"SpotLight":i={position:new re,direction:new re,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function zT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let IT=0;function BT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function FT(o){const t=new PT,i=zT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new re);const l=new re,u=new on,d=new on;function h(m){let v=0,y=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,A=0,w=0,M=0,x=0,B=0,N=0,z=0,ie=0,G=0,P=0;m.sort(BT);for(let D=0,C=m.length;D<C;D++){const V=m[D],ce=V.color,oe=V.intensity,me=V.distance,de=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=ce.r*oe,y+=ce.g*oe,S+=ce.b*oe;else if(V.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(V.sh.coefficients[L],oe);P++}else if(V.isDirectionalLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,Z=i.get(V);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.directionalShadow[E]=Z,s.directionalShadowMap[E]=de,s.directionalShadowMatrix[E]=V.shadow.matrix,B++}s.directional[E]=L,E++}else if(V.isSpotLight){const L=t.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(ce).multiplyScalar(oe),L.distance=me,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,s.spot[w]=L;const W=V.shadow;if(V.map&&(s.spotLightMap[ie]=V.map,ie++,W.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[w]=W.matrix,V.castShadow){const Z=i.get(V);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=de,z++}w++}else if(V.isRectAreaLight){const L=t.get(V);L.color.copy(ce).multiplyScalar(oe),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=L,M++}else if(V.isPointLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const W=V.shadow,Z=i.get(V);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,s.pointShadow[A]=Z,s.pointShadowMap[A]=de,s.pointShadowMatrix[A]=V.shadow.matrix,N++}s.point[A]=L,A++}else if(V.isHemisphereLight){const L=t.get(V);L.skyColor.copy(V.color).multiplyScalar(oe),L.groundColor.copy(V.groundColor).multiplyScalar(oe),s.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=S;const J=s.hash;(J.directionalLength!==E||J.pointLength!==A||J.spotLength!==w||J.rectAreaLength!==M||J.hemiLength!==x||J.numDirectionalShadows!==B||J.numPointShadows!==N||J.numSpotShadows!==z||J.numSpotMaps!==ie||J.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=z+ie-G,s.spotLightMap.length=ie,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=P,J.directionalLength=E,J.pointLength=A,J.spotLength=w,J.rectAreaLength=M,J.hemiLength=x,J.numDirectionalShadows=B,J.numPointShadows=N,J.numSpotShadows=z,J.numSpotMaps=ie,J.numLightProbes=P,s.version=IT++)}function g(m,v){let y=0,S=0,E=0,A=0,w=0;const M=v.matrixWorldInverse;for(let x=0,B=m.length;x<B;x++){const N=m[x];if(N.isDirectionalLight){const z=s.directional[y];z.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),y++}else if(N.isSpotLight){const z=s.spot[E];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),E++}else if(N.isRectAreaLight){const z=s.rectArea[A];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),d.identity(),u.copy(N.matrixWorld),u.premultiply(M),d.extractRotation(u),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),A++}else if(N.isPointLight){const z=s.point[S];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const z=s.hemi[w];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(M),w++}}}return{setup:h,setupView:g,state:s}}function ev(o){const t=new FT(o),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function d(v){s.push(v)}function h(){t.setup(i)}function g(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d}}function HT(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new ev(o),t.set(l,[h])):u>=d.length?(h=new ev(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}class GT extends Bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VT extends Bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
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
}`;function XT(o,t,i){let s=new Rv;const l=new Tt,u=new Tt,d=new dn,h=new GT({depthPacking:Iy}),g=new VT,m={},v=i.maxTextureSize,y={[za]:zn,[zn]:za,[bi]:bi},S=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:jT,fragmentShader:kT}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ba;A.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ai(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nv;let x=this.type;this.render=function(G,P,J){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(Oa),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=x!==Zi&&this.type===Zi,me=x===Zi&&this.type!==Zi;for(let de=0,L=G.length;de<L;de++){const W=G[de],Z=W.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Me=Z.getFrameExtents();if(l.multiply(Me),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Me.x),l.x=u.x*Me.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Me.y),l.y=u.y*Me.y,Z.mapSize.y=u.y)),Z.map===null||oe===!0||me===!0){const U=this.type!==Zi?{minFilter:ai,magFilter:ai}:{};Z.map!==null&&Z.map.dispose(),Z.map=new vs(l.x,l.y,U),Z.map.texture.name=W.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const be=Z.getViewportCount();for(let U=0;U<be;U++){const ne=Z.getViewport(U);d.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),ce.viewport(d),Z.updateMatrices(W,U),s=Z.getFrustum(),z(P,J,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===Zi&&B(Z,J),Z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,V)};function B(G,P){const J=t.update(w);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,E.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new vs(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,J,S,w,null),E.uniforms.shadow_pass.value=G.mapPass.texture,E.uniforms.resolution.value=G.mapSize,E.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,J,E,w,null)}function N(G,P,J,D){let C=null;const V=J.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)C=V;else if(C=J.isPointLight===!0?g:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ce=C.uuid,oe=P.uuid;let me=m[ce];me===void 0&&(me={},m[ce]=me);let de=me[oe];de===void 0&&(de=C.clone(),me[oe]=de,P.addEventListener("dispose",ie)),C=de}if(C.visible=P.visible,C.wireframe=P.wireframe,D===Zi?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:y[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=o.properties.get(C);ce.light=J}return C}function z(G,P,J,D,C){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===Zi)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,G.matrixWorld);const oe=t.update(G),me=G.material;if(Array.isArray(me)){const de=oe.groups;for(let L=0,W=de.length;L<W;L++){const Z=de[L],Me=me[Z.materialIndex];if(Me&&Me.visible){const be=N(G,Me,D,C);G.onBeforeShadow(o,G,P,J,oe,be,Z),o.renderBufferDirect(J,null,oe,be,G,Z),G.onAfterShadow(o,G,P,J,oe,be,Z)}}}else if(me.visible){const de=N(G,me,D,C);G.onBeforeShadow(o,G,P,J,oe,de,null),o.renderBufferDirect(J,null,oe,de,G,null),G.onAfterShadow(o,G,P,J,oe,de,null)}}const ce=G.children;for(let oe=0,me=ce.length;oe<me;oe++)z(ce[oe],P,J,D,C)}function ie(G){G.target.removeEventListener("dispose",ie);for(const J in m){const D=m[J],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function WT(o){function t(){let j=!1;const Re=new dn;let he=null;const ge=new dn(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!j&&(o.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){j=Ce},setClear:function(Ce,ke,lt,Pt,an){an===!0&&(Ce*=Pt,ke*=Pt,lt*=Pt),Re.set(Ce,ke,lt,Pt),ge.equals(Re)===!1&&(o.clearColor(Ce,ke,lt,Pt),ge.copy(Re))},reset:function(){j=!1,he=null,ge.set(-1,0,0,0)}}}function i(){let j=!1,Re=null,he=null,ge=null;return{setTest:function(Ce){Ce?ye(o.DEPTH_TEST):Ee(o.DEPTH_TEST)},setMask:function(Ce){Re!==Ce&&!j&&(o.depthMask(Ce),Re=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case xy:o.depthFunc(o.NEVER);break;case yy:o.depthFunc(o.ALWAYS);break;case Sy:o.depthFunc(o.LESS);break;case Tc:o.depthFunc(o.LEQUAL);break;case My:o.depthFunc(o.EQUAL);break;case Ey:o.depthFunc(o.GEQUAL);break;case by:o.depthFunc(o.GREATER);break;case Ty:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=Ce}},setLocked:function(Ce){j=Ce},setClear:function(Ce){ge!==Ce&&(o.clearDepth(Ce),ge=Ce)},reset:function(){j=!1,Re=null,he=null,ge=null}}}function s(){let j=!1,Re=null,he=null,ge=null,Ce=null,ke=null,lt=null,Pt=null,an=null;return{setTest:function(vt){j||(vt?ye(o.STENCIL_TEST):Ee(o.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!j&&(o.stencilMask(vt),Re=vt)},setFunc:function(vt,Bn,_n){(he!==vt||ge!==Bn||Ce!==_n)&&(o.stencilFunc(vt,Bn,_n),he=vt,ge=Bn,Ce=_n)},setOp:function(vt,Bn,_n){(ke!==vt||lt!==Bn||Pt!==_n)&&(o.stencilOp(vt,Bn,_n),ke=vt,lt=Bn,Pt=_n)},setLocked:function(vt){j=vt},setClear:function(vt){an!==vt&&(o.clearStencil(vt),an=vt)},reset:function(){j=!1,Re=null,he=null,ge=null,Ce=null,ke=null,lt=null,Pt=null,an=null}}}const l=new t,u=new i,d=new s,h=new WeakMap,g=new WeakMap;let m={},v={},y=new WeakMap,S=[],E=null,A=!1,w=null,M=null,x=null,B=null,N=null,z=null,ie=null,G=new wt(0,0,0),P=0,J=!1,D=null,C=null,V=null,ce=null,oe=null;const me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,L=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(W)[1]),de=L>=1):W.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),de=L>=2);let Z=null,Me={};const be=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),ne=new dn().fromArray(be),ve=new dn().fromArray(U);function q(j,Re,he,ge){const Ce=new Uint8Array(4),ke=o.createTexture();o.bindTexture(j,ke),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let lt=0;lt<he;lt++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,ge,0,o.RGBA,o.UNSIGNED_BYTE,Ce):o.texImage2D(Re+lt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ce);return ke}const le={};le[o.TEXTURE_2D]=q(o.TEXTURE_2D,o.TEXTURE_2D,1),le[o.TEXTURE_CUBE_MAP]=q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[o.TEXTURE_2D_ARRAY]=q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),le[o.TEXTURE_3D]=q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(o.DEPTH_TEST),u.setFunc(Tc),yt(!1),Ve(r_),ye(o.CULL_FACE),jt(Oa);function ye(j){m[j]!==!0&&(o.enable(j),m[j]=!0)}function Ee(j){m[j]!==!1&&(o.disable(j),m[j]=!1)}function Ge(j,Re){return v[j]!==Re?(o.bindFramebuffer(j,Re),v[j]=Re,j===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Re),j===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function He(j,Re){let he=S,ge=!1;if(j){he=y.get(Re),he===void 0&&(he=[],y.set(Re,he));const Ce=j.textures;if(he.length!==Ce.length||he[0]!==o.COLOR_ATTACHMENT0){for(let ke=0,lt=Ce.length;ke<lt;ke++)he[ke]=o.COLOR_ATTACHMENT0+ke;he.length=Ce.length,ge=!0}}else he[0]!==o.BACK&&(he[0]=o.BACK,ge=!0);ge&&o.drawBuffers(he)}function nt(j){return E!==j?(o.useProgram(j),E=j,!0):!1}const Lt={[ds]:o.FUNC_ADD,[ny]:o.FUNC_SUBTRACT,[iy]:o.FUNC_REVERSE_SUBTRACT};Lt[ay]=o.MIN,Lt[sy]=o.MAX;const F={[ry]:o.ZERO,[oy]:o.ONE,[ly]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[py]:o.SRC_ALPHA_SATURATE,[dy]:o.DST_COLOR,[uy]:o.DST_ALPHA,[cy]:o.ONE_MINUS_SRC_COLOR,[Md]:o.ONE_MINUS_SRC_ALPHA,[hy]:o.ONE_MINUS_DST_COLOR,[fy]:o.ONE_MINUS_DST_ALPHA,[my]:o.CONSTANT_COLOR,[gy]:o.ONE_MINUS_CONSTANT_COLOR,[_y]:o.CONSTANT_ALPHA,[vy]:o.ONE_MINUS_CONSTANT_ALPHA};function jt(j,Re,he,ge,Ce,ke,lt,Pt,an,vt){if(j===Oa){A===!0&&(Ee(o.BLEND),A=!1);return}if(A===!1&&(ye(o.BLEND),A=!0),j!==ty){if(j!==w||vt!==J){if((M!==ds||N!==ds)&&(o.blendEquation(o.FUNC_ADD),M=ds,N=ds),vt)switch(j){case xr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case o_:o.blendFunc(o.ONE,o.ONE);break;case l_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case c_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case xr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case o_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case l_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case c_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}x=null,B=null,z=null,ie=null,G.set(0,0,0),P=0,w=j,J=vt}return}Ce=Ce||Re,ke=ke||he,lt=lt||ge,(Re!==M||Ce!==N)&&(o.blendEquationSeparate(Lt[Re],Lt[Ce]),M=Re,N=Ce),(he!==x||ge!==B||ke!==z||lt!==ie)&&(o.blendFuncSeparate(F[he],F[ge],F[ke],F[lt]),x=he,B=ge,z=ke,ie=lt),(Pt.equals(G)===!1||an!==P)&&(o.blendColor(Pt.r,Pt.g,Pt.b,an),G.copy(Pt),P=an),w=j,J=!1}function ut(j,Re){j.side===bi?Ee(o.CULL_FACE):ye(o.CULL_FACE);let he=j.side===zn;Re&&(he=!he),yt(he),j.blending===xr&&j.transparent===!1?jt(Oa):jt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const ge=j.stencilWrite;d.setTest(ge),ge&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),$e(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):Ee(o.SAMPLE_ALPHA_TO_COVERAGE)}function yt(j){D!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),D=j)}function Ve(j){j!==Jx?(ye(o.CULL_FACE),j!==C&&(j===r_?o.cullFace(o.BACK):j===$x?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ee(o.CULL_FACE),C=j}function kt(j){j!==V&&(de&&o.lineWidth(j),V=j)}function $e(j,Re,he){j?(ye(o.POLYGON_OFFSET_FILL),(ce!==Re||oe!==he)&&(o.polygonOffset(Re,he),ce=Re,oe=he)):Ee(o.POLYGON_OFFSET_FILL)}function et(j){j?ye(o.SCISSOR_TEST):Ee(o.SCISSOR_TEST)}function O(j){j===void 0&&(j=o.TEXTURE0+me-1),Z!==j&&(o.activeTexture(j),Z=j)}function T(j,Re,he){he===void 0&&(Z===null?he=o.TEXTURE0+me-1:he=Z);let ge=Me[he];ge===void 0&&(ge={type:void 0,texture:void 0},Me[he]=ge),(ge.type!==j||ge.texture!==Re)&&(Z!==he&&(o.activeTexture(he),Z=he),o.bindTexture(j,Re||le[j]),ge.type=j,ge.texture=Re)}function ae(){const j=Me[Z];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Se(){try{o.compressedTexImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{o.texSubImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Le(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function it(){try{o.texStorage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{o.texImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(j){ne.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),ne.copy(j))}function we(j){ve.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),ve.copy(j))}function Ye(j,Re){let he=g.get(Re);he===void 0&&(he=new WeakMap,g.set(Re,he));let ge=he.get(j);ge===void 0&&(ge=o.getUniformBlockIndex(Re,j.name),he.set(j,ge))}function Ze(j,Re){const ge=g.get(Re).get(j);h.get(Re)!==ge&&(o.uniformBlockBinding(Re,ge,j.__bindingPointIndex),h.set(Re,ge))}function zt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},Z=null,Me={},v={},y=new WeakMap,S=[],E=null,A=!1,w=null,M=null,x=null,B=null,N=null,z=null,ie=null,G=new wt(0,0,0),P=0,J=!1,D=null,C=null,V=null,ce=null,oe=null,ne.set(0,0,o.canvas.width,o.canvas.height),ve.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ye,disable:Ee,bindFramebuffer:Ge,drawBuffers:He,useProgram:nt,setBlending:jt,setMaterial:ut,setFlipSided:yt,setCullFace:Ve,setLineWidth:kt,setPolygonOffset:$e,setScissorTest:et,activeTexture:O,bindTexture:T,unbindTexture:ae,compressedTexImage2D:Se,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:ht,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:it,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:We,compressedTexSubImage2D:De,compressedTexSubImage3D:Le,scissor:Ke,viewport:we,reset:zt}}function tv(o,t,i,s){const l=qT(s);switch(i){case lv:return o*t;case uv:return o*t;case fv:return o*t*2;case dv:return o*t/l.components*l.byteLength;case rh:return o*t/l.components*l.byteLength;case hv:return o*t*2/l.components*l.byteLength;case oh:return o*t*2/l.components*l.byteLength;case cv:return o*t*3/l.components*l.byteLength;case mi:return o*t*4/l.components*l.byteLength;case lh:return o*t*4/l.components*l.byteLength;case xc:case yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Cd:case Nd:return Math.max(o,16)*Math.max(t,8)/4;case Rd:case wd:return Math.max(o,8)*Math.max(t,8)/2;case Dd:case Ud:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ld:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case zd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Id:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case jd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case kd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case qd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ec:case Yd:case Zd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case pv:case Kd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qd:case Jd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qT(o){switch(o){case Ji:case sv:return{byteLength:1,components:1};case Lo:case rv:case Oo:return{byteLength:2,components:1};case ah:case sh:return{byteLength:2,components:4};case _s:case ih:case Ki:return{byteLength:4,components:1};case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function YT(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,v=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(O,T){return E?new OffscreenCanvas(O,T):Nc("canvas")}function w(O,T,ae){let Se=1;const _e=et(O);if((_e.width>ae||_e.height>ae)&&(Se=ae/Math.max(_e.width,_e.height)),Se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xe=Math.floor(Se*_e.width),We=Math.floor(Se*_e.height);y===void 0&&(y=A(xe,We));const De=T?A(xe,We):y;return De.width=xe,De.height=We,De.getContext("2d").drawImage(O,0,0,xe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+xe+"x"+We+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),O;return O}function M(O){return O.generateMipmaps&&O.minFilter!==ai&&O.minFilter!==pi}function x(O){o.generateMipmap(O)}function B(O,T,ae,Se,_e=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xe=T;if(T===o.RED&&(ae===o.FLOAT&&(xe=o.R32F),ae===o.HALF_FLOAT&&(xe=o.R16F),ae===o.UNSIGNED_BYTE&&(xe=o.R8)),T===o.RED_INTEGER&&(ae===o.UNSIGNED_BYTE&&(xe=o.R8UI),ae===o.UNSIGNED_SHORT&&(xe=o.R16UI),ae===o.UNSIGNED_INT&&(xe=o.R32UI),ae===o.BYTE&&(xe=o.R8I),ae===o.SHORT&&(xe=o.R16I),ae===o.INT&&(xe=o.R32I)),T===o.RG&&(ae===o.FLOAT&&(xe=o.RG32F),ae===o.HALF_FLOAT&&(xe=o.RG16F),ae===o.UNSIGNED_BYTE&&(xe=o.RG8)),T===o.RG_INTEGER&&(ae===o.UNSIGNED_BYTE&&(xe=o.RG8UI),ae===o.UNSIGNED_SHORT&&(xe=o.RG16UI),ae===o.UNSIGNED_INT&&(xe=o.RG32UI),ae===o.BYTE&&(xe=o.RG8I),ae===o.SHORT&&(xe=o.RG16I),ae===o.INT&&(xe=o.RG32I)),T===o.RGB&&ae===o.UNSIGNED_INT_5_9_9_9_REV&&(xe=o.RGB9_E5),T===o.RGBA){const We=_e?Ac:bt.getTransfer(Se);ae===o.FLOAT&&(xe=o.RGBA32F),ae===o.HALF_FLOAT&&(xe=o.RGBA16F),ae===o.UNSIGNED_BYTE&&(xe=We===Ft?o.SRGB8_ALPHA8:o.RGBA8),ae===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),ae===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function N(O,T){let ae;return O?T===null||T===_s||T===br?ae=o.DEPTH24_STENCIL8:T===Ki?ae=o.DEPTH32F_STENCIL8:T===Lo&&(ae=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_s||T===br?ae=o.DEPTH_COMPONENT24:T===Ki?ae=o.DEPTH_COMPONENT32F:T===Lo&&(ae=o.DEPTH_COMPONENT16),ae}function z(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==ai&&O.minFilter!==pi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function ie(O){const T=O.target;T.removeEventListener("dispose",ie),P(T),T.isVideoTexture&&v.delete(T)}function G(O){const T=O.target;T.removeEventListener("dispose",G),D(T)}function P(O){const T=s.get(O);if(T.__webglInit===void 0)return;const ae=O.source,Se=S.get(ae);if(Se){const _e=Se[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&J(O),Object.keys(Se).length===0&&S.delete(ae)}s.remove(O)}function J(O){const T=s.get(O);o.deleteTexture(T.__webglTexture);const ae=O.source,Se=S.get(ae);delete Se[T.__cacheKey],d.memory.textures--}function D(O){const T=s.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(T.__webglFramebuffer[Se]))for(let _e=0;_e<T.__webglFramebuffer[Se].length;_e++)o.deleteFramebuffer(T.__webglFramebuffer[Se][_e]);else o.deleteFramebuffer(T.__webglFramebuffer[Se]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[Se])}else{if(Array.isArray(T.__webglFramebuffer))for(let Se=0;Se<T.__webglFramebuffer.length;Se++)o.deleteFramebuffer(T.__webglFramebuffer[Se]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Se=0;Se<T.__webglColorRenderbuffer.length;Se++)T.__webglColorRenderbuffer[Se]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[Se]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ae=O.textures;for(let Se=0,_e=ae.length;Se<_e;Se++){const xe=s.get(ae[Se]);xe.__webglTexture&&(o.deleteTexture(xe.__webglTexture),d.memory.textures--),s.remove(ae[Se])}s.remove(O)}let C=0;function V(){C=0}function ce(){const O=C;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),C+=1,O}function oe(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function me(O,T){const ae=s.get(O);if(O.isVideoTexture&&kt(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const Se=O.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(ae,O,T);return}}i.bindTexture(o.TEXTURE_2D,ae.__webglTexture,o.TEXTURE0+T)}function de(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){ve(ae,O,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ae.__webglTexture,o.TEXTURE0+T)}function L(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){ve(ae,O,T);return}i.bindTexture(o.TEXTURE_3D,ae.__webglTexture,o.TEXTURE0+T)}function W(O,T){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){q(ae,O,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture,o.TEXTURE0+T)}const Z={[Td]:o.REPEAT,[ps]:o.CLAMP_TO_EDGE,[Ad]:o.MIRRORED_REPEAT},Me={[ai]:o.NEAREST,[Py]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[ms]:o.LINEAR_MIPMAP_LINEAR},be={[Hy]:o.NEVER,[Wy]:o.ALWAYS,[Gy]:o.LESS,[mv]:o.LEQUAL,[Vy]:o.EQUAL,[Xy]:o.GEQUAL,[jy]:o.GREATER,[ky]:o.NOTEQUAL};function U(O,T){if(T.type===Ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===pi||T.magFilter===qf||T.magFilter===Kl||T.magFilter===ms||T.minFilter===pi||T.minFilter===qf||T.minFilter===Kl||T.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Z[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Z[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Z[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Me[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==Kl&&T.minFilter!==ms||T.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ae=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ne(O,T){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",ie));const Se=T.source;let _e=S.get(Se);_e===void 0&&(_e={},S.set(Se,_e));const xe=oe(T);if(xe!==O.__cacheKey){_e[xe]===void 0&&(_e[xe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ae=!0),_e[xe].usedTimes++;const We=_e[O.__cacheKey];We!==void 0&&(_e[O.__cacheKey].usedTimes--,We.usedTimes===0&&J(T)),O.__cacheKey=xe,O.__webglTexture=_e[xe].texture}return ae}function ve(O,T,ae){let Se=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Se=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Se=o.TEXTURE_3D);const _e=ne(O,T),xe=T.source;i.bindTexture(Se,O.__webglTexture,o.TEXTURE0+ae);const We=s.get(xe);if(xe.version!==We.__version||_e===!0){i.activeTexture(o.TEXTURE0+ae);const De=bt.getPrimaries(bt.workingColorSpace),Le=T.colorSpace===La?null:bt.getPrimaries(T.colorSpace),it=T.colorSpace===La||De===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Ae=w(T.image,!1,l.maxTextureSize);Ae=$e(T,Ae);const Oe=u.convert(T.format,T.colorSpace),ht=u.convert(T.type);let Ke=B(T.internalFormat,Oe,ht,T.colorSpace,T.isVideoTexture);U(Se,T);let we;const Ye=T.mipmaps,Ze=T.isVideoTexture!==!0,zt=We.__version===void 0||_e===!0,j=xe.dataReady,Re=z(T,Ae);if(T.isDepthTexture)Ke=N(T.format===Tr,T.type),zt&&(Ze?i.texStorage2D(o.TEXTURE_2D,1,Ke,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Oe,ht,null));else if(T.isDataTexture)if(Ye.length>0){Ze&&zt&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],Ze?j&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,ht,we.data):i.texImage2D(o.TEXTURE_2D,he,Ke,we.width,we.height,0,Oe,ht,we.data);T.generateMipmaps=!1}else Ze?(zt&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ae.width,Ae.height),j&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Oe,ht,Ae.data)):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Oe,ht,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ke,Ye[0].width,Ye[0].height,Ae.depth);for(let he=0,ge=Ye.length;he<ge;he++)if(we=Ye[he],T.format!==mi)if(Oe!==null)if(Ze){if(j)if(T.layerUpdates.size>0){const Ce=tv(we.width,we.height,T.format,T.type);for(const ke of T.layerUpdates){const lt=we.data.subarray(ke*Ce/we.data.BYTES_PER_ELEMENT,(ke+1)*Ce/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,ke,we.width,we.height,1,Oe,lt,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Ae.depth,Oe,we.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,Ke,we.width,we.height,Ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?j&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Ae.depth,Oe,ht,we.data):i.texImage3D(o.TEXTURE_2D_ARRAY,he,Ke,we.width,we.height,Ae.depth,0,Oe,ht,we.data)}else{Ze&&zt&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ye[0].width,Ye[0].height);for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],T.format!==mi?Oe!==null?Ze?j&&i.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,we.data):i.compressedTexImage2D(o.TEXTURE_2D,he,Ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?j&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,ht,we.data):i.texImage2D(o.TEXTURE_2D,he,Ke,we.width,we.height,0,Oe,ht,we.data)}else if(T.isDataArrayTexture)if(Ze){if(zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ke,Ae.width,Ae.height,Ae.depth),j)if(T.layerUpdates.size>0){const he=tv(Ae.width,Ae.height,T.format,T.type);for(const ge of T.layerUpdates){const Ce=Ae.data.subarray(ge*he/Ae.data.BYTES_PER_ELEMENT,(ge+1)*he/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Oe,ht,Ce)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,ht,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ke,Ae.width,Ae.height,Ae.depth,0,Oe,ht,Ae.data);else if(T.isData3DTexture)Ze?(zt&&i.texStorage3D(o.TEXTURE_3D,Re,Ke,Ae.width,Ae.height,Ae.depth),j&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,ht,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,Ke,Ae.width,Ae.height,Ae.depth,0,Oe,ht,Ae.data);else if(T.isFramebufferTexture){if(zt)if(Ze)i.texStorage2D(o.TEXTURE_2D,Re,Ke,Ae.width,Ae.height);else{let he=Ae.width,ge=Ae.height;for(let Ce=0;Ce<Re;Ce++)i.texImage2D(o.TEXTURE_2D,Ce,Ke,he,ge,0,Oe,ht,null),he>>=1,ge>>=1}}else if(Ye.length>0){if(Ze&&zt){const he=et(Ye[0]);i.texStorage2D(o.TEXTURE_2D,Re,Ke,he.width,he.height)}for(let he=0,ge=Ye.length;he<ge;he++)we=Ye[he],Ze?j&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Oe,ht,we):i.texImage2D(o.TEXTURE_2D,he,Ke,Oe,ht,we);T.generateMipmaps=!1}else if(Ze){if(zt){const he=et(Ae);i.texStorage2D(o.TEXTURE_2D,Re,Ke,he.width,he.height)}j&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,ht,Ae)}else i.texImage2D(o.TEXTURE_2D,0,Ke,Oe,ht,Ae);M(T)&&x(Se),We.__version=xe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function q(O,T,ae){if(T.image.length!==6)return;const Se=ne(O,T),_e=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ae);const xe=s.get(_e);if(_e.version!==xe.__version||Se===!0){i.activeTexture(o.TEXTURE0+ae);const We=bt.getPrimaries(bt.workingColorSpace),De=T.colorSpace===La?null:bt.getPrimaries(T.colorSpace),Le=T.colorSpace===La||We===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!it&&!Ae?Oe[ge]=w(T.image[ge],!0,l.maxCubemapSize):Oe[ge]=Ae?T.image[ge].image:T.image[ge],Oe[ge]=$e(T,Oe[ge]);const ht=Oe[0],Ke=u.convert(T.format,T.colorSpace),we=u.convert(T.type),Ye=B(T.internalFormat,Ke,we,T.colorSpace),Ze=T.isVideoTexture!==!0,zt=xe.__version===void 0||Se===!0,j=_e.dataReady;let Re=z(T,ht);U(o.TEXTURE_CUBE_MAP,T);let he;if(it){Ze&&zt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Ye,ht.width,ht.height);for(let ge=0;ge<6;ge++){he=Oe[ge].mipmaps;for(let Ce=0;Ce<he.length;Ce++){const ke=he[Ce];T.format!==mi?Ke!==null?Ze?j&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,ke.width,ke.height,Ke,ke.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,Ye,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,ke.width,ke.height,Ke,we,ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,Ye,ke.width,ke.height,0,Ke,we,ke.data)}}}else{if(he=T.mipmaps,Ze&&zt){he.length>0&&Re++;const ge=et(Oe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Ye,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){Ze?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,Ke,we,Oe[ge].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Oe[ge].width,Oe[ge].height,0,Ke,we,Oe[ge].data);for(let Ce=0;Ce<he.length;Ce++){const lt=he[Ce].image[ge].image;Ze?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,lt.width,lt.height,Ke,we,lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,Ye,lt.width,lt.height,0,Ke,we,lt.data)}}else{Ze?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,we,Oe[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Ke,we,Oe[ge]);for(let Ce=0;Ce<he.length;Ce++){const ke=he[Ce];Ze?j&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,Ke,we,ke.image[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,Ye,Ke,we,ke.image[ge])}}}M(T)&&x(o.TEXTURE_CUBE_MAP),xe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function le(O,T,ae,Se,_e,xe){const We=u.convert(ae.format,ae.colorSpace),De=u.convert(ae.type),Le=B(ae.internalFormat,We,De,ae.colorSpace);if(!s.get(T).__hasExternalTextures){const Ae=Math.max(1,T.width>>xe),Oe=Math.max(1,T.height>>xe);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?i.texImage3D(_e,xe,Le,Ae,Oe,T.depth,0,We,De,null):i.texImage2D(_e,xe,Le,Ae,Oe,0,We,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Se,_e,s.get(ae).__webglTexture,0,yt(T)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Se,_e,s.get(ae).__webglTexture,xe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(O,T,ae){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const Se=T.depthTexture,_e=Se&&Se.isDepthTexture?Se.type:null,xe=N(T.stencilBuffer,_e),We=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=yt(T);Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,xe,T.width,T.height):ae?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,xe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,xe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,O)}else{const Se=T.textures;for(let _e=0;_e<Se.length;_e++){const xe=Se[_e],We=u.convert(xe.format,xe.colorSpace),De=u.convert(xe.type),Le=B(xe.internalFormat,We,De,xe.colorSpace),it=yt(T);ae&&Ve(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,it,Le,T.width,T.height):Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,it,Le,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Le,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ee(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Se=s.get(T.depthTexture).__webglTexture,_e=yt(T);if(T.depthTexture.format===yr)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(T.depthTexture.format===Tr)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Ge(O){const T=s.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ee(T.__webglFramebuffer,O)}else if(ae){T.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Se]),T.__webglDepthbuffer[Se]=o.createRenderbuffer(),ye(T.__webglDepthbuffer[Se],O,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),ye(T.__webglDepthbuffer,O,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(O,T,ae){const Se=s.get(O);T!==void 0&&le(Se.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ae!==void 0&&Ge(O)}function nt(O){const T=O.texture,ae=s.get(O),Se=s.get(T);O.addEventListener("dispose",G);const _e=O.textures,xe=O.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(Se.__webglTexture===void 0&&(Se.__webglTexture=o.createTexture()),Se.__version=T.version,d.memory.textures++),xe){ae.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer[De]=[];for(let Le=0;Le<T.mipmaps.length;Le++)ae.__webglFramebuffer[De][Le]=o.createFramebuffer()}else ae.__webglFramebuffer[De]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)ae.__webglFramebuffer[De]=o.createFramebuffer()}else ae.__webglFramebuffer=o.createFramebuffer();if(We)for(let De=0,Le=_e.length;De<Le;De++){const it=s.get(_e[De]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&Ve(O)===!1){ae.__webglMultisampledFramebuffer=o.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let De=0;De<_e.length;De++){const Le=_e[De];ae.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ae.__webglColorRenderbuffer[De]);const it=u.convert(Le.format,Le.colorSpace),Ae=u.convert(Le.type),Oe=B(Le.internalFormat,it,Ae,Le.colorSpace,O.isXRRenderTarget===!0),ht=yt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,Oe,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,ae.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(ae.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xe){i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)le(ae.__webglFramebuffer[De][Le],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le);else le(ae.__webglFramebuffer[De],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(T)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Le=_e.length;De<Le;De++){const it=_e[De],Ae=s.get(it);i.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),U(o.TEXTURE_2D,it),le(ae.__webglFramebuffer,O,it,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),M(it)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Se.__webglTexture),U(De,T),T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)le(ae.__webglFramebuffer[Le],O,T,o.COLOR_ATTACHMENT0,De,Le);else le(ae.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,De,0);M(T)&&x(De),i.unbindTexture()}O.depthBuffer&&Ge(O)}function Lt(O){const T=O.textures;for(let ae=0,Se=T.length;ae<Se;ae++){const _e=T[ae];if(M(_e)){const xe=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,We=s.get(_e).__webglTexture;i.bindTexture(xe,We),x(xe),i.unbindTexture()}}}const F=[],jt=[];function ut(O){if(O.samples>0){if(Ve(O)===!1){const T=O.textures,ae=O.width,Se=O.height;let _e=o.COLOR_BUFFER_BIT;const xe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=s.get(O),De=T.length>1;if(De)for(let Le=0;Le<T.length;Le++)i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,it,0)}o.blitFramebuffer(0,0,ae,Se,0,0,ae,Se,_e,o.NEAREST),g===!0&&(F.length=0,jt.length=0,F.push(o.COLOR_ATTACHMENT0+Le),O.depthBuffer&&O.resolveDepthBuffer===!1&&(F.push(xe),jt.push(xe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let Le=0;Le<T.length;Le++){i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,We.__webglColorRenderbuffer[Le]);const it=s.get(T[Le]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,it,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&g){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function yt(O){return Math.min(l.maxSamples,O.samples)}function Ve(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(O){const T=d.render.frame;v.get(O)!==T&&(v.set(O,T),O.update())}function $e(O,T){const ae=O.colorSpace,Se=O.format,_e=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==Ia&&ae!==La&&(bt.getTransfer(ae)===Ft?(Se!==mi||_e!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),T}function et(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=V,this.setTexture2D=me,this.setTexture2DArray=de,this.setTexture3D=L,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ve}function ZT(o,t){function i(s,l=La){let u;const d=bt.getTransfer(l);if(s===Ji)return o.UNSIGNED_BYTE;if(s===ah)return o.UNSIGNED_SHORT_4_4_4_4;if(s===sh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ov)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===sv)return o.BYTE;if(s===rv)return o.SHORT;if(s===Lo)return o.UNSIGNED_SHORT;if(s===ih)return o.INT;if(s===_s)return o.UNSIGNED_INT;if(s===Ki)return o.FLOAT;if(s===Oo)return o.HALF_FLOAT;if(s===lv)return o.ALPHA;if(s===cv)return o.RGB;if(s===mi)return o.RGBA;if(s===uv)return o.LUMINANCE;if(s===fv)return o.LUMINANCE_ALPHA;if(s===yr)return o.DEPTH_COMPONENT;if(s===Tr)return o.DEPTH_STENCIL;if(s===dv)return o.RED;if(s===rh)return o.RED_INTEGER;if(s===hv)return o.RG;if(s===oh)return o.RG_INTEGER;if(s===lh)return o.RGBA_INTEGER;if(s===xc||s===yc||s===Sc||s===Mc)if(d===Ft)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===xc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===xc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rd||s===Cd||s===wd||s===Nd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dd||s===Ud||s===Ld)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Dd||s===Ud)return d===Ft?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Ld)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd||s===Vd||s===jd||s===kd||s===Xd||s===Wd||s===qd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Od)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Id)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qd)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ec||s===Yd||s===Zd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Ec)return d===Ft?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pv||s===Kd||s===Qd||s===Jd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ec)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class KT extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vc extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(m,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=v.position.distanceTo(y.position),E=.02,A=.005;m.inputState.pinching&&S>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,u.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(u.linearVelocity)):g.hasLinearVelocity=!1,u.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(u.angularVelocity)):g.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return h!==null&&(h.visible=l!==null),g!==null&&(g.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new vc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
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

}`;class eA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new In,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ea({vertexShader:JT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Lc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tA extends Rr{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",g=1,m=null,v=null,y=null,S=null,E=null,A=null;const w=new eA,M=i.getContextAttributes();let x=null,B=null;const N=[],z=[],ie=new Tt;let G=null;const P=new hi;P.layers.enable(1),P.viewport=new dn;const J=new hi;J.layers.enable(2),J.viewport=new dn;const D=[P,J],C=new KT;C.layers.enable(1),C.layers.enable(2);let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=N[q];return le===void 0&&(le=new yd,N[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=N[q];return le===void 0&&(le=new yd,N[q]=le),le.getGripSpace()},this.getHand=function(q){let le=N[q];return le===void 0&&(le=new yd,N[q]=le),le.getHandSpace()};function oe(q){const le=z.indexOf(q.inputSource);if(le===-1)return;const ye=N[le];ye!==void 0&&(ye.update(q.inputSource,q.frame,m||d),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function me(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",me),l.removeEventListener("inputsourceschange",de);for(let q=0;q<N.length;q++){const le=z[q];le!==null&&(z[q]=null,N[q].disconnect(le))}V=null,ce=null,w.reset(),t.setRenderTarget(x),E=null,S=null,y=null,l=null,B=null,ve.stop(),s.isPresenting=!1,t.setPixelRatio(G),t.setSize(ie.width,ie.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",me),l.addEventListener("inputsourceschange",de),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(ie),l.renderState.layers===void 0){const le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,le),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),B=new vs(E.framebufferWidth,E.framebufferHeight,{format:mi,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let le=null,ye=null,Ee=null;M.depth&&(Ee=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,le=M.stencil?Tr:yr,ye=M.stencil?br:_s);const Ge={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:u};y=new XRWebGLBinding(l,i),S=y.createProjectionLayer(Ge),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new vs(S.textureWidth,S.textureHeight,{format:mi,type:Ji,depthTexture:new Nv(S.textureWidth,S.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await l.requestReferenceSpace(h),ve.setContext(l),ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(q){for(let le=0;le<q.removed.length;le++){const ye=q.removed[le],Ee=z.indexOf(ye);Ee>=0&&(z[Ee]=null,N[Ee].disconnect(ye))}for(let le=0;le<q.added.length;le++){const ye=q.added[le];let Ee=z.indexOf(ye);if(Ee===-1){for(let He=0;He<N.length;He++)if(He>=z.length){z.push(ye),Ee=He;break}else if(z[He]===null){z[He]=ye,Ee=He;break}if(Ee===-1)break}const Ge=N[Ee];Ge&&Ge.connect(ye)}}const L=new re,W=new re;function Z(q,le,ye){L.setFromMatrixPosition(le.matrixWorld),W.setFromMatrixPosition(ye.matrixWorld);const Ee=L.distanceTo(W),Ge=le.projectionMatrix.elements,He=ye.projectionMatrix.elements,nt=Ge[14]/(Ge[10]-1),Lt=Ge[14]/(Ge[10]+1),F=(Ge[9]+1)/Ge[5],jt=(Ge[9]-1)/Ge[5],ut=(Ge[8]-1)/Ge[0],yt=(He[8]+1)/He[0],Ve=nt*ut,kt=nt*yt,$e=Ee/(-ut+yt),et=$e*-ut;le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(et),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const O=nt+$e,T=Lt+$e,ae=Ve-et,Se=kt+(Ee-et),_e=F*Lt/T*O,xe=jt*Lt/T*O;q.projectionMatrix.makePerspective(ae,Se,_e,xe,O,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Me(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;w.texture!==null&&(q.near=w.depthNear,q.far=w.depthFar),C.near=J.near=P.near=q.near,C.far=J.far=P.far=q.far,(V!==C.near||ce!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ce=C.far,P.near=V,P.far=ce,J.near=V,J.far=ce,P.updateProjectionMatrix(),J.updateProjectionMatrix(),q.updateProjectionMatrix());const le=q.parent,ye=C.cameras;Me(C,le);for(let Ee=0;Ee<ye.length;Ee++)Me(ye[Ee],le);ye.length===2?Z(C,P,J):C.projectionMatrix.copy(P.projectionMatrix),be(q,C,le)};function be(q,le,ye){ye===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$d*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&E===null))return g},this.setFoveation=function(q){g=q,S!==null&&(S.fixedFoveation=q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let U=null;function ne(q,le){if(v=le.getViewerPose(m||d),A=le,v!==null){const ye=v.views;E!==null&&(t.setRenderTargetFramebuffer(B,E.framebuffer),t.setRenderTarget(B));let Ee=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let He=0;He<ye.length;He++){const nt=ye[He];let Lt=null;if(E!==null)Lt=E.getViewport(nt);else{const jt=y.getViewSubImage(S,nt);Lt=jt.viewport,He===0&&(t.setRenderTargetTextures(B,jt.colorTexture,S.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(B))}let F=D[He];F===void 0&&(F=new hi,F.layers.enable(He),F.viewport=new dn,D[He]=F),F.matrix.fromArray(nt.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(nt.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),He===0&&(C.matrix.copy(F.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(F)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const He=y.getDepthInformation(ye[0]);He&&He.isValid&&He.texture&&w.init(t,He,l.renderState)}}for(let ye=0;ye<N.length;ye++){const Ee=z[ye],Ge=N[ye];Ee!==null&&Ge!==void 0&&Ge.update(Ee,le,m||d)}U&&U(q,le),le.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:le}),A=null}const ve=new Cv;ve.setAnimationLoop(ne),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}const os=new $i,nA=new on;function iA(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,bv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,B,N,z){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),y(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,z)):x.isMeshMatcapMaterial?(u(M,x),A(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),w(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?g(M,x,B,N):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const B=t.get(x),N=B.envMap,z=B.envMapRotation;N&&(M.envMap.value=N,os.copy(z),os.x*=-1,os.y*=-1,os.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),M.envMapRotation.value.setFromMatrix4(nA.makeRotationFromEuler(os)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function g(M,x,B,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*B,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function y(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,B){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const B=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function aA(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(B,N){const z=N.program;s.uniformBlockBinding(B,z)}function m(B,N){let z=l[B.id];z===void 0&&(A(B),z=v(B),l[B.id]=z,B.addEventListener("dispose",M));const ie=N.program;s.updateUBOMapping(B,ie);const G=t.render.frame;u[B.id]!==G&&(S(B),u[B.id]=G)}function v(B){const N=y();B.__bindingPointIndex=N;const z=o.createBuffer(),ie=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,ie,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,z),z}function y(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],z=B.uniforms,ie=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,P=z.length;G<P;G++){const J=Array.isArray(z[G])?z[G]:[z[G]];for(let D=0,C=J.length;D<C;D++){const V=J[D];if(E(V,G,D,ie)===!0){const ce=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let me=0;for(let de=0;de<oe.length;de++){const L=oe[de],W=w(L);typeof L=="number"||typeof L=="boolean"?(V.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,ce+me,V.__data)):L.isMatrix3?(V.__data[0]=L.elements[0],V.__data[1]=L.elements[1],V.__data[2]=L.elements[2],V.__data[3]=0,V.__data[4]=L.elements[3],V.__data[5]=L.elements[4],V.__data[6]=L.elements[5],V.__data[7]=0,V.__data[8]=L.elements[6],V.__data[9]=L.elements[7],V.__data[10]=L.elements[8],V.__data[11]=0):(L.toArray(V.__data,me),me+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(B,N,z,ie){const G=B.value,P=N+"_"+z;if(ie[P]===void 0)return typeof G=="number"||typeof G=="boolean"?ie[P]=G:ie[P]=G.clone(),!0;{const J=ie[P];if(typeof G=="number"||typeof G=="boolean"){if(J!==G)return ie[P]=G,!0}else if(J.equals(G)===!1)return J.copy(G),!0}return!1}function A(B){const N=B.uniforms;let z=0;const ie=16;for(let P=0,J=N.length;P<J;P++){const D=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,V=D.length;C<V;C++){const ce=D[C],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let me=0,de=oe.length;me<de;me++){const L=oe[me],W=w(L),Z=z%ie,Me=Z%W.boundary,be=Z+Me;z+=Me,be!==0&&ie-be<W.storage&&(z+=ie-be),ce.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=z,z+=W.storage}}}const G=z%ie;return G>0&&(z+=ie-G),B.__size=z,B.__cache={},this}function w(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const z=d.indexOf(N.__bindingPointIndex);d.splice(z,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function x(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:g,update:m,dispose:x}}class sA{constructor(t={}){const{canvas:i=Yy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=d;const E=new Uint32Array(4),A=new Int32Array(4);let w=null,M=null;const x=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this.toneMapping=Pa,this.toneMappingExposure=1;const N=this;let z=!1,ie=0,G=0,P=null,J=-1,D=null;const C=new dn,V=new dn;let ce=null;const oe=new wt(0);let me=0,de=i.width,L=i.height,W=1,Z=null,Me=null;const be=new dn(0,0,de,L),U=new dn(0,0,de,L);let ne=!1;const ve=new Rv;let q=!1,le=!1;const ye=new on,Ee=new re,Ge=new dn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Lt(){return P===null?W:1}let F=s;function jt(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${nh}`),i.addEventListener("webglcontextlost",he,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),F===null){const k="webgl2";if(F=jt(k,R),F===null)throw jt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,yt,Ve,kt,$e,et,O,T,ae,Se,_e,xe,We,De,Le,it,Ae,Oe,ht,Ke,we,Ye,Ze,zt;function j(){ut=new fb(F),ut.init(),Ye=new ZT(F,ut),yt=new sb(F,ut,t,Ye),Ve=new WT(F),kt=new pb(F),$e=new UT,et=new YT(F,ut,Ve,$e,yt,Ye,kt),O=new ob(N),T=new ub(N),ae=new SS(F),Ze=new ib(F,ae),Se=new db(F,ae,kt,Ze),_e=new gb(F,Se,ae,kt),ht=new mb(F,yt,et),it=new rb($e),xe=new DT(N,O,T,ut,yt,Ze,it),We=new iA(N,$e),De=new OT,Le=new HT(ut),Oe=new nb(N,O,T,Ve,_e,S,g),Ae=new XT(N,_e,yt),zt=new aA(F,kt,yt,Ve),Ke=new ab(F,ut,kt),we=new hb(F,ut,kt),kt.programs=xe.programs,N.capabilities=yt,N.extensions=ut,N.properties=$e,N.renderLists=De,N.shadowMap=Ae,N.state=Ve,N.info=kt}j();const Re=new tA(N,F);this.xr=Re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(de,L,!1))},this.getSize=function(R){return R.set(de,L)},this.setSize=function(R,k,ee=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=R,L=k,i.width=Math.floor(R*W),i.height=Math.floor(k*W),ee===!0&&(i.style.width=R+"px",i.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(de*W,L*W).floor()},this.setDrawingBufferSize=function(R,k,ee){de=R,L=k,W=ee,i.width=Math.floor(R*ee),i.height=Math.floor(k*ee),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,k,ee,te){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,k,ee,te),Ve.viewport(C.copy(be).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(U)},this.setScissor=function(R,k,ee,te){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,k,ee,te),Ve.scissor(V.copy(U).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){Ve.setScissorTest(ne=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){Me=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(R=!0,k=!0,ee=!0){let te=0;if(R){let Y=!1;if(P!==null){const Te=P.texture.format;Y=Te===lh||Te===oh||Te===rh}if(Y){const Te=P.texture.type,Ne=Te===Ji||Te===_s||Te===Lo||Te===br||Te===ah||Te===sh,Pe=Oe.getClearColor(),ze=Oe.getClearAlpha(),Ie=Pe.r,Je=Pe.g,qe=Pe.b;Ne?(E[0]=Ie,E[1]=Je,E[2]=qe,E[3]=ze,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=Ie,A[1]=Je,A[2]=qe,A[3]=ze,F.clearBufferiv(F.COLOR,0,A))}else te|=F.COLOR_BUFFER_BIT}k&&(te|=F.DEPTH_BUFFER_BIT),ee&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",he,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),De.dispose(),Le.dispose(),$e.dispose(),O.dispose(),T.dispose(),_e.dispose(),Ze.dispose(),zt.dispose(),xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",_n),Re.removeEventListener("sessionend",Ho),_i.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=kt.autoReset,k=Ae.enabled,ee=Ae.autoUpdate,te=Ae.needsUpdate,Y=Ae.type;j(),kt.autoReset=R,Ae.enabled=k,Ae.autoUpdate=ee,Ae.needsUpdate=te,Ae.type=Y}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ke(R){const k=R.target;k.removeEventListener("dispose",ke),lt(k)}function lt(R){Pt(R),$e.remove(R)}function Pt(R){const k=$e.get(R).programs;k!==void 0&&(k.forEach(function(ee){xe.releaseProgram(ee)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,ee,te,Y,Te){k===null&&(k=He);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=vn(R,k,ee,te,Y);Ve.setMaterial(te,Ne);let ze=ee.index,Ie=1;if(te.wireframe===!0){if(ze=Se.getWireframeAttribute(ee),ze===void 0)return;Ie=2}const Je=ee.drawRange,qe=ee.attributes.position;let ct=Je.start*Ie,At=(Je.start+Je.count)*Ie;Te!==null&&(ct=Math.max(ct,Te.start*Ie),At=Math.min(At,(Te.start+Te.count)*Ie)),ze!==null?(ct=Math.max(ct,0),At=Math.min(At,ze.count)):qe!=null&&(ct=Math.max(ct,0),At=Math.min(At,qe.count));const Ht=At-ct;if(Ht<0||Ht===1/0)return;Ze.setup(Y,te,Pe,ee,ze);let xn,xt=Ke;if(ze!==null&&(xn=ae.get(ze),xt=we,xt.setIndex(xn)),Y.isMesh)te.wireframe===!0?(Ve.setLineWidth(te.wireframeLinewidth*Lt()),xt.setMode(F.LINES)):xt.setMode(F.TRIANGLES);else if(Y.isLine){let je=te.linewidth;je===void 0&&(je=1),Ve.setLineWidth(je*Lt()),Y.isLineSegments?xt.setMode(F.LINES):Y.isLineLoop?xt.setMode(F.LINE_LOOP):xt.setMode(F.LINE_STRIP)}else Y.isPoints?xt.setMode(F.POINTS):Y.isSprite&&xt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const je=Y._multiDrawStarts,Xt=Y._multiDrawCounts,gt=Y._multiDrawCount,Yt=ze?ae.get(ze).bytesPerElement:1,sn=$e.get(te).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)sn.setValue(F,"_gl_DrawID",yn),xt.render(je[yn]/Yt,Xt[yn])}else if(Y.isInstancedMesh)xt.renderInstances(ct,Ht,Y.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Xt=Math.min(ee.instanceCount,je);xt.renderInstances(ct,Ht,Xt)}else xt.render(ct,Ht)};function an(R,k,ee){R.transparent===!0&&R.side===bi&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Fa(R,k,ee),R.side=za,R.needsUpdate=!0,Fa(R,k,ee),R.side=bi):Fa(R,k,ee)}this.compile=function(R,k,ee=null){ee===null&&(ee=R),M=Le.get(ee),M.init(k),B.push(M),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),R!==ee&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights();const te=new Set;return R.traverse(function(Y){const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Pe=Te[Ne];an(Pe,ee,Y),te.add(Pe)}else an(Te,ee,Y),te.add(Te)}),B.pop(),M=null,te},this.compileAsync=function(R,k,ee=null){const te=this.compile(R,k,ee);return new Promise(Y=>{function Te(){if(te.forEach(function(Ne){$e.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){Y(R);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let vt=null;function Bn(R){vt&&vt(R)}function _n(){_i.stop()}function Ho(){_i.start()}const _i=new Cv;_i.setAnimationLoop(Bn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(R){vt=R,Re.setAnimationLoop(R),R===null?_i.stop():_i.start()},Re.addEventListener("sessionstart",_n),Re.addEventListener("sessionend",Ho),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(k),k=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,k,P),M=Le.get(R,B.length),M.init(k),B.push(M),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ve.setFromProjectionMatrix(ye),le=this.localClippingEnabled,q=it.init(this.clippingPlanes,le),w=De.get(R,x.length),w.init(),x.push(w),Re.enabled===!0&&Re.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&xs(Te,k,-1/0,N.sortObjects)}xs(R,k,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Z,Me),nt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,nt&&Oe.addToRenderList(w,R),this.info.render.frame++,q===!0&&it.beginShadows();const ee=M.state.shadowsArray;Ae.render(ee,R,k),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=w.opaque,Y=w.transmissive;if(M.setupLights(),k.isArrayCamera){const Te=k.cameras;if(Y.length>0)for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){const ze=Te[Ne];ys(te,Y,R,ze)}nt&&Oe.render(R);for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){const ze=Te[Ne];wr(w,R,ze,ze.viewport)}}else Y.length>0&&ys(te,Y,R,k),nt&&Oe.render(R),wr(w,R,k);P!==null&&(et.updateMultisampleRenderTarget(P),et.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(N,R,k),Ze.resetDefaultState(),J=-1,D=null,B.pop(),B.length>0?(M=B[B.length-1],q===!0&&it.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function xs(R,k,ee,te){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ve.intersectsSprite(R)){te&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Ne=_e.update(R),Pe=R.material;Pe.visible&&w.push(R,Ne,Pe,ee,Ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ve.intersectsObject(R))){const Ne=_e.update(R),Pe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ge.copy(Ne.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Pe)){const ze=Ne.groups;for(let Ie=0,Je=ze.length;Ie<Je;Ie++){const qe=ze[Ie],ct=Pe[qe.materialIndex];ct&&ct.visible&&w.push(R,Ne,ct,ee,Ge.z,qe)}}else Pe.visible&&w.push(R,Ne,Pe,ee,Ge.z,null)}}const Te=R.children;for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++)xs(Te[Ne],k,ee,te)}function wr(R,k,ee,te){const Y=R.opaque,Te=R.transmissive,Ne=R.transparent;M.setupLightsView(ee),q===!0&&it.setGlobalState(N.clippingPlanes,ee),te&&Ve.viewport(C.copy(te)),Y.length>0&&ta(Y,k,ee),Te.length>0&&ta(Te,k,ee),Ne.length>0&&ta(Ne,k,ee),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function ys(R,k,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[te.id]===void 0&&(M.state.transmissionRenderTarget[te.id]=new vs(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Oo:Ji,minFilter:ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=M.state.transmissionRenderTarget[te.id],Ne=te.viewport||C;Te.setSize(Ne.z,Ne.w);const Pe=N.getRenderTarget();N.setRenderTarget(Te),N.getClearColor(oe),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),nt&&Oe.render(ee);const ze=N.toneMapping;N.toneMapping=Pa;const Ie=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),q===!0&&it.setGlobalState(N.clippingPlanes,te),ta(R,ee,te),et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let qe=0,ct=k.length;qe<ct;qe++){const At=k[qe],Ht=At.object,xn=At.geometry,xt=At.material,je=At.group;if(xt.side===bi&&Ht.layers.test(te.layers)){const Xt=xt.side;xt.side=zn,xt.needsUpdate=!0,Nr(Ht,ee,te,xn,xt,je),xt.side=Xt,xt.needsUpdate=!0,Je=!0}}Je===!0&&(et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te))}N.setRenderTarget(Pe),N.setClearColor(oe,me),Ie!==void 0&&(te.viewport=Ie),N.toneMapping=ze}function ta(R,k,ee){const te=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Te=R.length;Y<Te;Y++){const Ne=R[Y],Pe=Ne.object,ze=Ne.geometry,Ie=te===null?Ne.material:te,Je=Ne.group;Pe.layers.test(ee.layers)&&Nr(Pe,k,ee,ze,Ie,Je)}}function Nr(R,k,ee,te,Y,Te){R.onBeforeRender(N,k,ee,te,Y,Te),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.transparent===!0&&Y.side===bi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,N.renderBufferDirect(ee,k,te,Y,R,Te),Y.side=za,Y.needsUpdate=!0,N.renderBufferDirect(ee,k,te,Y,R,Te),Y.side=bi):N.renderBufferDirect(ee,k,te,Y,R,Te),R.onAfterRender(N,k,ee,te,Y,Te)}function Fa(R,k,ee){k.isScene!==!0&&(k=He);const te=$e.get(R),Y=M.state.lights,Te=M.state.shadowsArray,Ne=Y.state.version,Pe=xe.getParameters(R,Y.state,Te,k,ee),ze=xe.getProgramCacheKey(Pe);let Ie=te.programs;te.environment=R.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(R.isMeshStandardMaterial?T:O).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",ke),Ie=new Map,te.programs=Ie);let Je=Ie.get(ze);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Ne)return Qt(R,Pe),Je}else Pe.uniforms=xe.getUniforms(R),R.onBeforeCompile(Pe,N),Je=xe.acquireProgram(Pe,ze),Ie.set(ze,Je),te.uniforms=Pe.uniforms;const qe=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=it.uniform),Qt(R,Pe),te.needsLights=Dr(R),te.lightsStateVersion=Ne,te.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.directionalShadowMap.value=Y.state.directionalShadowMap,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotShadowMap.value=Y.state.spotShadowMap,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMap.value=Y.state.pointShadowMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function si(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=bc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Qt(R,k){const ee=$e.get(R);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function vn(R,k,ee,te,Y){k.isScene!==!0&&(k=He),et.resetTextureUnits();const Te=k.fog,Ne=te.isMeshStandardMaterial?k.environment:null,Pe=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ia,ze=(te.isMeshStandardMaterial?T:O).get(te.envMap||Ne),Ie=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let Ht=Pa;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ht=N.toneMapping);const xn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,xt=xn!==void 0?xn.length:0,je=$e.get(te),Xt=M.state.lights;if(q===!0&&(le===!0||R!==D)){const Rn=R===D&&te.id===J;it.setState(te,R,Rn)}let gt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Xt.state.version||je.outputColorSpace!==Pe||Y.isBatchedMesh&&je.batching===!1||!Y.isBatchedMesh&&je.batching===!0||Y.isBatchedMesh&&je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&je.instancing===!1||!Y.isInstancedMesh&&je.instancing===!0||Y.isSkinnedMesh&&je.skinning===!1||!Y.isSkinnedMesh&&je.skinning===!0||Y.isInstancedMesh&&je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&je.instancingMorph===!1&&Y.morphTexture!==null||je.envMap!==ze||te.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==it.numPlanes||je.numIntersection!==it.numIntersection)||je.vertexAlphas!==Ie||je.vertexTangents!==Je||je.morphTargets!==qe||je.morphNormals!==ct||je.morphColors!==At||je.toneMapping!==Ht||je.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,je.__version=te.version);let Yt=je.currentProgram;gt===!0&&(Yt=Fa(te,k,Y));let sn=!1,yn=!1,Ur=!1;const Gt=Yt.getUniforms(),ri=je.uniforms;if(Ve.useProgram(Yt.program)&&(sn=!0,yn=!0,Ur=!0),te.id!==J&&(J=te.id,yn=!0),sn||D!==R){Gt.setValue(F,"projectionMatrix",R.projectionMatrix),Gt.setValue(F,"viewMatrix",R.matrixWorldInverse);const Rn=Gt.map.cameraPosition;Rn!==void 0&&Rn.setValue(F,Ee.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&Gt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Gt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,yn=!0,Ur=!0)}if(Y.isSkinnedMesh){Gt.setOptional(F,Y,"bindMatrix"),Gt.setOptional(F,Y,"bindMatrixInverse");const Rn=Y.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Gt.setValue(F,"boneTexture",Rn.boneTexture,et))}Y.isBatchedMesh&&(Gt.setOptional(F,Y,"batchingTexture"),Gt.setValue(F,"batchingTexture",Y._matricesTexture,et),Gt.setOptional(F,Y,"batchingIdTexture"),Gt.setValue(F,"batchingIdTexture",Y._indirectTexture,et),Gt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Gt.setValue(F,"batchingColorTexture",Y._colorsTexture,et));const ia=ee.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0)&&ht.update(Y,ee,Yt),(yn||je.receiveShadow!==Y.receiveShadow)&&(je.receiveShadow=Y.receiveShadow,Gt.setValue(F,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ri.envMap.value=ze,ri.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(ri.envMapIntensity.value=k.environmentIntensity),yn&&(Gt.setValue(F,"toneMappingExposure",N.toneMappingExposure),je.needsLights&&na(ri,Ur),Te&&te.fog===!0&&We.refreshFogUniforms(ri,Te),We.refreshMaterialUniforms(ri,te,W,L,M.state.transmissionRenderTarget[R.id]),bc.upload(F,si(je),ri,et)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(bc.upload(F,si(je),ri,et),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Gt.setValue(F,"center",Y.center),Gt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Gt.setValue(F,"normalMatrix",Y.normalMatrix),Gt.setValue(F,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Rn=te.uniformsGroups;for(let Sn=0,Lr=Rn.length;Sn<Lr;Sn++){const Or=Rn[Sn];zt.update(Or,Yt),zt.bind(Or,Yt)}}return Yt}function na(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Dr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,k,ee){$e.get(R.texture).__webglTexture=k,$e.get(R.depthTexture).__webglTexture=ee;const te=$e.get(R);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const ee=$e.get(R);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,ee=0){P=R,ie=k,G=ee;let te=!0,Y=null,Te=!1,Ne=!1;if(R){const ze=$e.get(R);ze.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(F.FRAMEBUFFER,null),te=!1):ze.__webglFramebuffer===void 0?et.setupRenderTarget(R):ze.__hasExternalTextures&&et.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ne=!0);const Je=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?Y=Je[k][ee]:Y=Je[k],Te=!0):R.samples>0&&et.useMultisampledRTT(R)===!1?Y=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,C.copy(R.viewport),V.copy(R.scissor),ce=R.scissorTest}else C.copy(be).multiplyScalar(W).floor(),V.copy(U).multiplyScalar(W).floor(),ce=ne;if(Ve.bindFramebuffer(F.FRAMEBUFFER,Y)&&te&&Ve.drawBuffers(R,Y),Ve.viewport(C),Ve.scissor(V),Ve.setScissorTest(ce),Te){const ze=$e.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,ze.__webglTexture,ee)}else if(Ne){const ze=$e.get(R.texture),Ie=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,Ie)}J=-1},this.readRenderTargetPixels=function(R,k,ee,te,Y,Te,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ve.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const ze=R.texture,Ie=ze.format,Je=ze.type;if(!yt.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-te&&ee>=0&&ee<=R.height-Y&&F.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),Te)}finally{const ze=P!==null?$e.get(P).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,k,ee,te,Y,Te,Ne){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ve.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const ze=R.texture,Ie=ze.format,Je=ze.type;if(!yt.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-te&&ee>=0&&ee<=R.height-Y){const qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),0),F.flush();const ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await Zy(F,ct,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te)}finally{F.deleteBuffer(qe),F.deleteSync(ct)}return Te}}finally{const ze=P!==null?$e.get(P).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(R,k=null,ee=0){R.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const te=Math.pow(2,-ee),Y=Math.floor(R.image.width*te),Te=Math.floor(R.image.height*te),Ne=k!==null?k.x:0,Pe=k!==null?k.y:0;et.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,Ne,Pe,Y,Te),Ve.unbindTexture()},this.copyTextureToTexture=function(R,k,ee=null,te=null,Y=0){R.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,R=arguments[1],k=arguments[2],Y=arguments[3]||0,ee=null);let Te,Ne,Pe,ze,Ie,Je;ee!==null?(Te=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Pe=ee.min.x,ze=ee.min.y):(Te=R.image.width,Ne=R.image.height,Pe=0,ze=0),te!==null?(Ie=te.x,Je=te.y):(Ie=0,Je=0);const qe=Ye.convert(k.format),ct=Ye.convert(k.type);et.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const At=F.getParameter(F.UNPACK_ROW_LENGTH),Ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),xn=F.getParameter(F.UNPACK_SKIP_PIXELS),xt=F.getParameter(F.UNPACK_SKIP_ROWS),je=F.getParameter(F.UNPACK_SKIP_IMAGES),Xt=R.isCompressedTexture?R.mipmaps[Y]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,ze),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,Ie,Je,Te,Ne,qe,ct,Xt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,Ie,Je,Xt.width,Xt.height,qe,Xt.data):F.texSubImage2D(F.TEXTURE_2D,Y,Ie,Je,Te,Ne,qe,ct,Xt),F.pixelStorei(F.UNPACK_ROW_LENGTH,At),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xn),F.pixelStorei(F.UNPACK_SKIP_ROWS,xt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je),Y===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,k,ee=null,te=null,Y=0){R.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,R=arguments[2],k=arguments[3],Y=arguments[4]||0);let Te,Ne,Pe,ze,Ie,Je,qe,ct,At;const Ht=R.isCompressedTexture?R.mipmaps[Y]:R.image;ee!==null?(Te=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Pe=ee.max.z-ee.min.z,ze=ee.min.x,Ie=ee.min.y,Je=ee.min.z):(Te=Ht.width,Ne=Ht.height,Pe=Ht.depth,ze=0,Ie=0,Je=0),te!==null?(qe=te.x,ct=te.y,At=te.z):(qe=0,ct=0,At=0);const xn=Ye.convert(k.format),xt=Ye.convert(k.type);let je;if(k.isData3DTexture)et.setTexture3D(k,0),je=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)et.setTexture2DArray(k,0),je=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Xt=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Yt=F.getParameter(F.UNPACK_SKIP_PIXELS),sn=F.getParameter(F.UNPACK_SKIP_ROWS),yn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ze),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ie),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(je,Y,qe,ct,At,Te,Ne,Pe,xn,xt,Ht.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(je,Y,qe,ct,At,Te,Ne,Pe,xn,Ht.data):F.texSubImage3D(je,Y,qe,ct,At,Te,Ne,Pe,xn,xt,Ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,Xt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,yn),Y===0&&k.generateMipmaps&&F.generateMipmap(je),Ve.unbindTexture()},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&et.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?et.setTextureCube(R,0):R.isData3DTexture?et.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?et.setTexture2DArray(R,0):et.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){ie=0,G=0,P=null,Ve.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===ch?"display-p3":"srgb",i.unpackColorSpace=bt.workingColorSpace===Uc?"display-p3":"srgb"}}class rA extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class oA extends ea{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);function lA(){const o=vr.useRef(null),t=vr.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null});return vr.useEffect(()=>{if(!o.current)return;const i=o.current,s=t.current,l=`
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,u=`
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
    `,d=()=>{s.scene=new rA,s.renderer=new sA({canvas:i,alpha:!0,antialias:!0}),s.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.renderer.setClearColor(new wt(1057326),1),s.camera=new wv(-1,1,1,-1,0,1),s.uniforms={resolution:{value:[i.clientWidth,i.clientHeight]},time:{value:0},xScale:{value:1.28},yScale:{value:.24},distortion:{value:.08}};const m=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],v=new Ba;v.setAttribute("position",new gi(new Float32Array(m),3));const y=new oA({vertexShader:l,fragmentShader:u,uniforms:s.uniforms,side:bi});s.mesh=new Ai(v,y),s.scene.add(s.mesh),g()},h=()=>{s.uniforms&&(s.uniforms.time.value+=.0045),s.renderer&&s.scene&&s.camera&&s.renderer.render(s.scene,s.camera),s.animationId=requestAnimationFrame(h)},g=()=>{if(!s.renderer||!s.uniforms)return;const m=i.getBoundingClientRect(),v=Math.max(1,Math.floor(m.width)),y=Math.max(1,Math.floor(m.height));s.renderer.setSize(v,y,!1),s.uniforms.resolution.value=[v,y]};return d(),h(),window.addEventListener("resize",g),()=>{var m,v;s.animationId&&cancelAnimationFrame(s.animationId),window.removeEventListener("resize",g),s.mesh&&((m=s.scene)==null||m.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material instanceof Bo&&s.mesh.material.dispose()),(v=s.renderer)==null||v.dispose()}},[]),p.jsx("canvas",{ref:o,className:"hero-shader-canvas","aria-hidden":"true"})}const cA=[{label:"Education",href:"/en/education.php",links:[["Community","/en/member.php"],["School Ecosystem","/en/education.php"]]},{label:"Experience",href:"/en/experience-passport.php",links:[["Experience Identity","/en/experience-passport.php"]]},{label:"Enterprise",href:"/en/economy.php",links:[["Business Ecosystem","/en/business-club.php"],["Become a partner","/en/partner.php"],["Investor","/en/investor.php"],["Service and Product","/en/services-products.php"]]},{label:"Environment",href:"/en/environment.php",links:[["Sustainability","/en/environment.php"],["Projects","/en/projects.php"]]}];function dh({loginHref:o="#login",languagePage:t="index.php"}){return p.jsx("header",{className:"site-header",children:p.jsxs("nav",{className:"nav","aria-label":"Primary navigation",children:[p.jsx("a",{className:"brand",href:"/en/index.php",children:p.jsx("img",{className:"header-logo",src:"/images/logo.png",alt:"EI.one"})}),p.jsxs("div",{className:"nav-links",children:[p.jsx("a",{href:"/en/index.php",children:"Home"}),cA.map(i=>p.jsxs("div",{className:"nav-item has-submenu",children:[p.jsxs("a",{href:i.href,children:[i.label," ",p.jsx("i",{className:"fa-solid fa-chevron-down","aria-hidden":"true"})]}),p.jsx("div",{className:"submenu",children:i.links.map(([s,l])=>p.jsx("a",{href:l,children:s},s))})]},i.label)),p.jsx("a",{href:"/en/about-us.php",children:"About"})]}),p.jsx("a",{className:"button secondary",href:o,children:"Login"}),p.jsxs("div",{className:"lang has-submenu","aria-label":"Language selector",children:[p.jsxs("button",{type:"button",children:["EN ",p.jsx("i",{className:"fa-solid fa-caret-down","aria-hidden":"true"})]}),p.jsxs("div",{className:"submenu lang-menu",children:[p.jsx("a",{href:`/de/${t}`,children:"DE"}),p.jsx("a",{href:`/it/${t}`,children:"IT"}),p.jsx("a",{href:`/fr/${t}`,children:"FR"}),p.jsx("a",{href:`/en/${t}`,children:"EN"})]})]})]})})}function hh(){return p.jsx("footer",{className:"site-footer",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"footer-grid",children:[p.jsxs("div",{className:"footer-about",children:[p.jsx("a",{className:"footer-logo",href:"/en/index.php","aria-label":"ei.one",children:p.jsx("img",{src:"/images/logo.png",alt:"ei.one"})}),p.jsx("p",{children:"ei.one - The ecosystem where people build real experience and companies grow by hiring on what people can actually do."})]}),p.jsxs("div",{children:[p.jsx("h3",{children:"Companies"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx("a",{href:"/business-club",children:"Business Ecosystem"})}),p.jsx("li",{children:p.jsx("a",{href:"/partner",children:"Become a Partner"})}),p.jsx("li",{children:p.jsx("a",{href:"/sponsor",children:"Sponsor"})}),p.jsx("li",{children:p.jsx("a",{href:"/investors",children:"Investors"})}),p.jsx("li",{children:p.jsx("a",{href:"/services-products",children:"Services & Products"})})]})]}),p.jsxs("div",{children:[p.jsx("h3",{children:"Talents"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx("a",{href:"/experience-passport",children:"Experience Identity"})}),p.jsx("li",{children:p.jsx("a",{href:"/academy",children:"Academy"})}),p.jsx("li",{children:p.jsx("a",{href:"/recruitment",children:"Recruitment"})})]})]}),p.jsxs("div",{children:[p.jsx("h3",{children:"Ecosystem"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx("a",{href:"/about",children:"About Us"})}),p.jsx("li",{children:p.jsx("a",{href:"/education",children:"Education"})}),p.jsx("li",{children:p.jsx("a",{href:"/economy",children:"Economy"})}),p.jsx("li",{children:p.jsx("a",{href:"/environment",children:"Environment"})}),p.jsx("li",{children:p.jsx("a",{href:"/projects",children:"Projects"})}),p.jsx("li",{children:p.jsx("a",{href:"/contact",children:"Contact"})})]})]})]}),p.jsxs("div",{className:"footer-contact",children:[p.jsx("h3",{children:"Contact"}),p.jsxs("p",{children:[p.jsx("strong",{children:"ei.one"}),p.jsx("br",{}),"Netmaster (Schweiz) AG",p.jsx("br",{}),"Toedistrasse 56",p.jsx("br",{}),"CH - 8810 Horgen"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Tel:"})," +41 44 542 47 47"]})]}),p.jsxs("div",{className:"copyright",children:[p.jsx("span",{children:"Copyright 2026 ei.one - Ecosystem Intelligence. All rights reserved."}),p.jsxs("span",{className:"footer-legal",children:[p.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"}),p.jsx("a",{href:"/terms-and-conditions",children:"Terms and Conditions"})]})]})]})})}function ls(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function uA(){return vr.useEffect(()=>{const o="Education - EI.one School Ecosystem & Academy",t="EI.one Education connects school ecosystems, academy journeys and verified experiences so learning becomes visible, attestable and useful for future opportunities.";document.title=o,ls("description",t),ls("keywords","EI.one education, school ecosystem, academy, experience identity, verified learning, talents, skills"),ls("og:title",o,"property"),ls("og:description",t,"property"),ls("og:url","https://ei.one/en/education","property"),ls("twitter:title",o),ls("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/education")},[]),p.jsxs(p.Fragment,{children:[p.jsx(dh,{loginHref:"#education-login",languagePage:"education.php"}),p.jsxs("main",{className:"education-page",children:[p.jsx("section",{className:"education-hero",children:p.jsxs("div",{className:"wrap education-hero-grid",children:[p.jsxs("div",{children:[p.jsx("p",{className:"education-kicker",children:"Schools"}),p.jsx("h1",{children:"Turn experience into growth of relevance."}),p.jsx("p",{children:"Transform your students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge with companies. Your students' experiences become your prestige."})]}),p.jsxs("div",{className:"education-hero-card",id:"education-login",children:[p.jsx("img",{src:"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=84",alt:"Students collaborating in a bright learning environment"}),p.jsxs("div",{children:[p.jsx("strong",{children:"School Ecosystem"}),p.jsx("span",{children:"Learning, mentoring, projects and verified experiences connected in one growth path."})]})]})]})}),p.jsx("section",{className:"human-center",children:p.jsxs("div",{className:"wrap human-center-grid",children:[p.jsxs("div",{className:"human-center-copy",children:[p.jsx("h2",{children:"The Human at the Center"}),p.jsx("p",{children:"Humans are at the center of every sustainable development. For us, social sustainability means combining economic progress with responsibility towards people, communities, and future generations."}),p.jsx("p",{children:"At EI.one, we believe that sustainable innovation can only emerge when people have access to knowledge, education, and new opportunities. That is why we promote a corporate culture based on collaboration, trust, diversity, and personal development."})]}),p.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[p.jsx("img",{src:"/images/human-at-center.png",alt:"People collaborating around a table in a bright learning community"}),p.jsx("div",{className:"human-center-glow"})]})]})}),p.jsx("section",{className:"education-pillars",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"education-section-head",children:[p.jsx("h2",{children:"Education & Networking"}),p.jsx("p",{children:"Our ecosystem connects companies, talents, educational institutions, and experts to share knowledge and create new opportunities."})]}),p.jsxs("div",{className:"education-pillar-grid",children:[p.jsxs("article",{children:[p.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),p.jsx("h3",{children:"Education Initiatives"}),p.jsx("p",{children:"Continuous development and skill building."})]}),p.jsxs("article",{children:[p.jsx("i",{className:"fa-solid fa-users-viewfinder","aria-hidden":"true"}),p.jsx("h3",{children:"Talent Promotion"}),p.jsx("p",{children:"Helping people reach their full potential."})]}),p.jsxs("article",{children:[p.jsx("i",{className:"fa-solid fa-handshake-simple","aria-hidden":"true"}),p.jsx("h3",{children:"Cooperation"}),p.jsx("p",{children:"Innovation through collaboration across borders."})]})]})]})}),p.jsx("section",{className:"human-center",children:p.jsxs("div",{className:"wrap human-center-grid",children:[p.jsxs("div",{className:"human-center-copy",children:[p.jsx("h2",{children:"Inclusive & Human Economy"}),p.jsx("p",{children:"Social sustainability for us also means promoting new forms of collaboration. In an increasingly connected world, innovation and progress no longer arise in isolation but through cooperation between people, companies, and organizations."}),p.jsx("p",{children:"EI.one supports this development through a globally oriented network that brings together talents, ideas, and projects. Our goal is to promote an economy that is human, inclusive, and future-oriented."})]}),p.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[p.jsx("img",{src:"/images/inclusive.jpg",alt:"inclusive and human economy"}),p.jsx("div",{className:"human-center-glow"})]})]})}),p.jsx("section",{className:"education-cta",children:p.jsxs("div",{className:"wrap education-cta-box",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Developing Solutions Together"}),p.jsx("p",{children:"Become part of a community based on trust and human growth."})]}),p.jsxs("div",{className:"education-actions",children:[p.jsx("a",{className:"button secondary",href:"/en/talent.php",children:"Become a Talent"}),p.jsx("a",{className:"button",href:"/en/contact.php",children:"Contact"})]})]})})]}),p.jsx(hh,{})]})}function cs(o,t,i="name"){let s=document.head.querySelector(`meta[${i}="${o}"]`);s||(s=document.createElement("meta"),s.setAttribute(i,o),document.head.appendChild(s)),s.setAttribute("content",t)}function fA(){return vr.useEffect(()=>{const o="Experience Passport - EI.one Experience Identity",t="The EI.one Experience Passport turns real work, learning, mentoring and projects into verified proof of what people can actually do.";document.title=o,cs("description",t),cs("keywords","EI.one experience passport, experience identity, verified experience, talent profile, skills proof"),cs("og:title",o,"property"),cs("og:description",t,"property"),cs("og:url","https://ei.one/en/experience-passport","property"),cs("twitter:title",o),cs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/experience-passport")},[]),p.jsxs(p.Fragment,{children:[p.jsx(dh,{loginHref:"#experience-login",languagePage:"experience-passport.php"}),p.jsxs("main",{className:"experience-page",children:[p.jsx("section",{className:"experience-hero",children:p.jsxs("div",{className:"wrap experience-hero-grid",children:[p.jsxs("div",{className:"experience-hero-copy",children:[p.jsx("h1",{children:"Experience Identity"}),p.jsx("p",{children:"Your digital record of what you've actually done. Verified by the companies who had you do it, anchored on the blockchain as a credential that belongs to you forever."}),p.jsx("p",{className:"experience-quote",children:'"Your experiences build your future."'})]}),p.jsxs("div",{className:"experience-proof-map",id:"experience-login","aria-label":"Experience Identity proof flow",children:[p.jsxs("div",{className:"proof-orbit",children:[p.jsx("span",{className:"proof-core",children:p.jsx("i",{className:"fa-solid fa-fingerprint","aria-hidden":"true"})}),p.jsxs("span",{className:"proof-node work",children:[p.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),p.jsx("strong",{children:"Work"})]}),p.jsxs("span",{className:"proof-node learn",children:[p.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),p.jsx("strong",{children:"Learn"})]}),p.jsxs("span",{className:"proof-node mentor",children:[p.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),p.jsx("strong",{children:"Mentor"})]})]}),p.jsxs("div",{className:"proof-lines",children:[p.jsxs("div",{children:[p.jsx("span",{children:"01"}),p.jsx("strong",{children:"Do real work"})]}),p.jsxs("div",{children:[p.jsx("span",{children:"02"}),p.jsx("strong",{children:"Get it verified"})]}),p.jsxs("div",{children:[p.jsx("span",{children:"03"}),p.jsx("strong",{children:"Build your future"})]})]})]})]})}),p.jsx("section",{className:"human-center",children:p.jsxs("div",{className:"wrap human-center-grid",children:[p.jsxs("div",{className:"human-center-copy",children:[p.jsx("h2",{children:"The CV is broken. The Identity fixes it."}),p.jsx("p",{children:"A CV says whatever you want it to. It also says very little of substance: job titles, years, keywords. In the age of the AI transition, that's not enough for anyone â€” not for job seekers, not for employers."}),p.jsx("p",{children:"The Experience Identity is different. Every experience you add is attested by whoever had you do it â€” a company in the ecosystem, an Academy partner, a real project. What people see is your actual work, not your self-promotion."})]}),p.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[p.jsx("img",{src:"/images/identity.jpg",alt:"identity"}),p.jsx("div",{className:"human-center-glow"})]})]})}),p.jsx("section",{className:"education-pillars",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"education-section-head",children:[p.jsx("h2",{children:"How it works"}),p.jsx("p",{children:"Three steps to build a Identity that actually shows what you can do."})]}),p.jsxs("div",{className:"education-pillar-grid",children:[p.jsxs("article",{children:[p.jsx("i",{className:"fa-solid fa-fingerprint"}),p.jsx("span",{className:"training-step",children:"01"}),p.jsx("h3",{children:"Create your Identity"}),p.jsx("p",{children:"A unique digital profile with a shareable link. It's yours, it follows you across your whole working life, no matter where you work."})]}),p.jsxs("article",{children:[p.jsx("i",{className:"fa-solid fa-layer-group"}),p.jsx("span",{className:"training-step",children:"02"}),p.jsx("h3",{children:"Collect verified experience"}),p.jsx("p",{children:"Every experience at an ecosystem company is attested by whoever had you do it and recorded on the blockchain as an immutable credential. Attachments, roles, results â€” all verifiable."})]}),p.jsxs("article",{children:[p.jsx("i",{className:"fa-solid fa-share-nodes"}),p.jsx("span",{className:"training-step",children:"03"}),p.jsx("h3",{children:"Share when it counts"}),p.jsx("p",{children:"Choose field by field what's public, what's private, what's visible only to people with the link. You decide who sees what."})]})]})]})}),p.jsx("section",{className:"identity-inputs","aria-labelledby":"identity-inputs-title",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"identity-inputs-head",children:[p.jsx("h2",{id:"identity-inputs-title",children:"What you can put in the Identity"}),p.jsx("p",{children:"Concrete experience, not generic keywords."})]}),p.jsxs("div",{className:"identity-inputs-grid",children:[p.jsxs("article",{className:"identity-input-card work",children:[p.jsx("span",{className:"identity-card-number",children:"01"}),p.jsx("span",{className:"identity-input-icon",children:p.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"})}),p.jsx("h3",{children:"Work experience"}),p.jsx("p",{children:"Roles, projects, responsibilities at ecosystem companies."})]}),p.jsxs("article",{className:"identity-input-card academy",children:[p.jsx("span",{className:"identity-card-number",children:"02"}),p.jsx("span",{className:"identity-input-icon",children:p.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),p.jsx("h3",{children:"Academy tracks"}),p.jsx("p",{children:"Courses and training completed with sponsors and learning partners."})]}),p.jsxs("article",{className:"identity-input-card projects",children:[p.jsx("span",{className:"identity-card-number",children:"03"}),p.jsx("span",{className:"identity-input-icon",children:p.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),p.jsx("h3",{children:"Projects"}),p.jsx("p",{children:"Work delivered, with results, duration and the role you played."})]}),p.jsxs("article",{className:"identity-input-card skills",children:[p.jsx("span",{className:"identity-card-number",children:"04"}),p.jsx("span",{className:"identity-input-icon",children:p.jsx("i",{className:"fa-solid fa-language","aria-hidden":"true"})}),p.jsx("h3",{children:"Skills & languages"}),p.jsx("p",{children:"Technical skills, soft skills, languages - linked to the experience that proves them."})]})]})]})}),p.jsx("section",{className:"identity-difference","aria-labelledby":"identity-difference-title",children:p.jsxs("div",{className:"wrap",children:[p.jsx("div",{className:"identity-difference-head",children:p.jsx("h2",{id:"identity-difference-title",children:"Why it's different"})}),p.jsxs("div",{className:"identity-difference-grid",children:[p.jsxs("article",{children:[p.jsx("span",{className:"difference-line"}),p.jsx("span",{className:"difference-icon",children:p.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),p.jsx("h3",{children:"Verified at the source, signed on-chain"}),p.jsx("p",{children:"Every experience is attested by whoever had you do it and anchored on the blockchain as a verifiable credential. Not words, cryptographic proof."})]}),p.jsxs("article",{children:[p.jsx("span",{className:"difference-line"}),p.jsx("span",{className:"difference-icon",children:p.jsx("i",{className:"fa-solid fa-user-lock","aria-hidden":"true"})}),p.jsx("h3",{children:"Under your control"}),p.jsx("p",{children:"You decide what's public, what's private and what's visible only via a shared link."})]}),p.jsxs("article",{children:[p.jsx("span",{className:"difference-line"}),p.jsx("span",{className:"difference-icon",children:p.jsx("i",{className:"fa-solid fa-infinity","aria-hidden":"true"})}),p.jsx("h3",{children:"For your whole career"}),p.jsx("p",{children:"The Identity follows you from one role to the next. It grows with you, even if you change company."})]})]})]})}),p.jsx("section",{className:"ecosystem-connect","aria-labelledby":"ecosystem-connect-title",children:p.jsxs("div",{className:"wrap ecosystem-connect-grid",children:[p.jsxs("div",{className:"ecosystem-connect-media",children:[p.jsx("img",{src:"/images/connected-ecosystem.jpeg",alt:"ecosystem workspace"}),p.jsxs("div",{className:"ecosystem-connect-badge",children:[p.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),"Identity connects the ecosystem"]})]}),p.jsxs("div",{className:"ecosystem-connect-copy",children:[p.jsx("h2",{id:"ecosystem-connect-title",children:"Connected to the rest of the ecosystem"}),p.jsx("p",{children:"The Identity isn't an isolated page. It's where the two doors of ei.one meet."}),p.jsxs("div",{className:"ecosystem-connection-list",children:[p.jsxs("article",{children:[p.jsx("span",{className:"ecosystem-connection-icon",children:p.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),p.jsx("strong",{children:"Academy"}),p.jsx("p",{children:"when you finish a learning track, the experience lands straight in your Identity"}),p.jsx("em",{children:"coming soon"})]}),p.jsxs("article",{children:[p.jsx("span",{className:"ecosystem-connection-icon",children:p.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),p.jsx("strong",{children:"Recruitment"}),p.jsx("p",{children:"companies search on the experience in your Identity, not on CVs"}),p.jsx("em",{children:"coming soon"})]}),p.jsxs("article",{children:[p.jsx("span",{className:"ecosystem-connection-icon",children:p.jsx("i",{className:"fa-solid fa-people-group","aria-hidden":"true"})}),p.jsx("strong",{children:"Business Ecosystem"}),p.jsx("p",{children:"the ecosystem companies attest the experience you've built working with them"})]})]})]})]})}),p.jsx("section",{className:"identity-start","aria-labelledby":"identity-start-title",children:p.jsxs("div",{className:"wrap identity-start-grid",children:[p.jsxs("div",{className:"identity-start-copy",children:[p.jsx("h2",{id:"identity-start-title",children:"Start building your Identity."}),p.jsx("p",{children:"Open the app, sign up and start adding your first experiences."}),p.jsxs("div",{className:"identity-start-actions",children:[p.jsx("a",{className:"button identity-primary",href:"/register",children:"Create your Identity"}),p.jsx("a",{className:"button identity-login",href:"/login",children:"Log in"}),p.jsx("a",{className:"button identity-outline",href:"/talent",children:"Back to Talent"})]})]}),p.jsxs("div",{className:"identity-start-preview","aria-hidden":"true",children:[p.jsx("span",{className:"identity-start-dot"}),p.jsxs("div",{children:[p.jsx("strong",{children:"01"}),p.jsx("span",{children:"Create Identity"})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"02"}),p.jsx("span",{children:"Add experience"})]}),p.jsxs("div",{children:[p.jsx("strong",{children:"03"}),p.jsx("span",{children:"Share proof"})]})]})]})})]}),p.jsx(hh,{})]})}function dA(){const o=window.location.pathname.toLowerCase();return o.includes("/education")?p.jsx(uA,{}):o.includes("/experience-passport")?p.jsx(fA,{}):p.jsxs(p.Fragment,{children:[p.jsx(dh,{}),p.jsxs("main",{children:[p.jsxs("section",{className:"hero",children:[p.jsx(lA,{}),p.jsxs("div",{className:"hero-inner",children:[p.jsxs("div",{children:[p.jsx("p",{className:"eyebrow",children:"Ecosystem Intelligence"}),p.jsxs("h1",{children:["The infrastructure that turns every collaboration ",p.jsx("span",{className:"hero-accent",children:"into new opportunities for growth."})]}),p.jsxs("p",{className:"hero-copy",children:["EI.one connects ",p.jsx("strong",{children:"companies, people and schools"})," to turn every collaboration into new relationships, clients, talent and shared knowledge."]}),p.jsx("p",{className:"hero-copy",children:"Every experience feeds a patrimony of value that makes the entire ecosystem stronger, smarter and more capable of growth."}),p.jsxs("div",{className:"actions",children:[p.jsx("a",{className:"button",href:"/business-club",children:"I'm a company →"}),p.jsx("a",{className:"button secondary",href:"/talent",children:"I'm a person →"}),p.jsx("a",{className:"button secondary",href:"/education",children:"I'm a school →"})]})]}),p.jsxs("aside",{className:"login-panel",id:"login","aria-label":"Login panel",children:[p.jsx("h2",{children:"Login"}),p.jsx("p",{children:"Enter the platform"}),p.jsx("label",{className:"field-label",htmlFor:"login-email",children:"Email"}),p.jsx("input",{className:"field",id:"login-email",type:"email",placeholder:"you@email.com"}),p.jsx("label",{className:"field-label",htmlFor:"login-password",children:"Password"}),p.jsx("input",{className:"field",id:"login-password",type:"password",placeholder:"••••••••"}),p.jsx("div",{className:"login-options",children:p.jsx("a",{href:"#",children:"Forgot password?"})}),p.jsx("a",{className:"button full",href:"#",children:"Log in →"}),p.jsxs("p",{className:"login-join",children:["No account yet? ",p.jsx("a",{className:"text-link",href:"/register",children:"Join ei.one"})]})]})]})]}),p.jsx("section",{className:"protagonists","aria-labelledby":"protagonists-title",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"protagonists-head",children:[p.jsx("h2",{id:"protagonists-title",children:"Three protagonists. One same growth."}),p.jsx("p",{children:"Experience is the raw material. ei.one turns it into value for all three."})]}),p.jsxs("div",{className:"protagonists-grid",children:[p.jsxs("article",{className:"protagonist-card",children:[p.jsx("h3",{children:"For companies — Business growth"}),p.jsx("p",{children:"Turn internships, project work and mentoring into a channel of verified talent, trusted partnerships and qualified commercial network."}),p.jsx("p",{className:"protagonist-quote",children:'"Your experiences attract the best. The best grow your business."'}),p.jsx("a",{className:"protagonist-link",href:"/economy",children:"For companies →"})]}),p.jsxs("article",{className:"protagonist-card",children:[p.jsx("h3",{children:"For talents — Experience Passport"}),p.jsx("p",{children:"Transform internships, projects, mentoring and learning experiences into a verified record of your growth."}),p.jsx("p",{className:"protagonist-quote",children:'"Your experiences become your proof. Your proof becomes your opportunity."'}),p.jsx("a",{className:"protagonist-link",href:"/experience-passport",children:"For people →"})]}),p.jsxs("article",{className:"protagonist-card",children:[p.jsx("h3",{children:"For education — Academy growth"}),p.jsx("p",{children:"Connect learning paths, projects and mentoring into an ecosystem where skills become visible and development continues."}),p.jsx("p",{className:"protagonist-quote",children:'"When learning is connected, growth becomes measurable."'}),p.jsx("a",{className:"protagonist-link",href:"/education",children:"For Schools →"})]})]})]})}),p.jsx("section",{className:"connections","aria-labelledby":"connections-title",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"connections-head",children:[p.jsx("p",{className:"connections-kicker",children:"Network signals"}),p.jsx("h2",{id:"connections-title",children:"Who we're connected with"}),p.jsx("p",{children:"For clarity, here is the nature of each relationship below."})]}),p.jsxs("div",{className:"connections-grid",children:[p.jsxs("div",{className:"connection-item",children:[p.jsx("a",{className:"connection-logo logo-togo",href:"https://stiftung-togo.ch/",target:"_blank",rel:"noopener","aria-label":"ToGo opening eyes",children:p.jsxs("span",{children:["To",p.jsx("span",{className:"red",children:"Go"})," ",p.jsx("span",{className:"green",children:"opening eyes"})]})}),p.jsx("div",{className:"connection-label",children:"Supported Foundation"})]}),p.jsxs("div",{className:"connection-item",children:[p.jsx("a",{className:"connection-logo logo-sva",href:"https://svazurich.ch/",target:"_blank",rel:"noopener","aria-label":"SVA Zurich",children:p.jsxs("span",{children:[p.jsx("strong",{children:"SVA"})," Zürich"]})}),p.jsx("div",{className:"connection-label",children:"Award Received"})]}),p.jsxs("div",{className:"connection-item",children:[p.jsxs("a",{className:"connection-logo logo-innovation",href:"https://www.standort-zuerich.ch/",target:"_blank",rel:"noopener","aria-label":"Innovation Zurich",children:[p.jsx("span",{className:"innovation-mark","aria-hidden":"true"}),p.jsxs("span",{children:["Innovation",p.jsx("br",{}),"Zurich"]})]}),p.jsx("div",{className:"connection-label",children:"Local Network"})]}),p.jsxs("div",{className:"connection-item",children:[p.jsx("a",{className:"connection-logo logo-eye",href:"https://augenarztpraxis-baden.ch/",target:"_blank",rel:"noopener","aria-label":"AugenarztpraxisPlus",children:"AugenarztpraxisPlus"}),p.jsx("div",{className:"connection-label",children:"Sponsor"})]}),p.jsxs("div",{className:"connection-item",children:[p.jsxs("a",{className:"connection-logo logo-sgo",href:"https://www.sgo-verein.ch/",target:"_blank",rel:"noopener","aria-label":"SGO Verein",children:[p.jsx("span",{children:"SGO"}),p.jsx("small",{children:"www.sgo-verein.ch"})]}),p.jsx("div",{className:"connection-label",children:"Professional Network"})]})]})]})}),p.jsx("section",{className:"platform-status","aria-labelledby":"platform-status-title",children:p.jsx("div",{className:"wrap",children:p.jsxs("div",{className:"status-panel",children:[p.jsxs("div",{className:"status-head",children:[p.jsx("p",{children:"Platform Status Today"}),p.jsx("h2",{id:"platform-status-title",children:"What is live now, and what comes next"})]}),p.jsxs("div",{className:"status-grid",children:[p.jsxs("div",{className:"status-column live-column",children:[p.jsxs("div",{className:"status-badge",children:[p.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"}),"Live today"]}),p.jsxs("ul",{className:"status-list",children:[p.jsxs("li",{className:"live",children:[p.jsx("i",{className:"fa-solid fa-user-plus","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"ei.one account"}),p.jsx("small",{children:"Create your access and enter the platform."})]}),p.jsx("em",{children:"Live"})]}),p.jsxs("li",{className:"live",children:[p.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Experience Identity"}),p.jsx("small",{children:"Build a verified record of what you actually did."})]}),p.jsx("em",{children:"Live"})]}),p.jsxs("li",{className:"live",children:[p.jsx("i",{className:"fa-solid fa-share-nodes","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Verified experiences"}),p.jsx("small",{children:"Add and share experiences attested by companies."})]}),p.jsx("em",{children:"Live"})]}),p.jsxs("li",{className:"live",children:[p.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Business Units"}),p.jsx("small",{children:"Connect with the active ecosystem network."})]}),p.jsx("em",{children:"Live"})]})]})]}),p.jsxs("div",{className:"status-column soon-column",children:[p.jsxs("div",{className:"status-badge soon",children:[p.jsx("i",{className:"fa-solid fa-clock","aria-hidden":"true"}),"Coming soon"]}),p.jsxs("ul",{className:"status-list",children:[p.jsxs("li",{className:"soon",children:[p.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Academy"}),p.jsx("small",{children:"Learning paths with sponsors and partners."})]}),p.jsx("em",{children:"Soon"})]}),p.jsxs("li",{className:"soon",children:[p.jsx("i",{className:"fa-solid fa-magnifying-glass-chart","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Recruitment"}),p.jsx("small",{children:"Companies searching on the Identity."})]}),p.jsx("em",{children:"Soon"})]}),p.jsxs("li",{className:"soon",children:[p.jsx("i",{className:"fa-solid fa-store","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Extended Marketplace"}),p.jsx("small",{children:"Broader access to ecosystem opportunities."})]}),p.jsx("em",{children:"Planned"})]}),p.jsxs("li",{className:"soon",children:[p.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Credential verification"}),p.jsx("small",{children:"On-chain verification for trusted records."})]}),p.jsx("em",{children:"Planned"})]})]})]})]})]})})}),p.jsx("section",{className:"entry-doors","aria-labelledby":"entry-title",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"entry-head",children:[p.jsx("h2",{id:"entry-title",children:"Where do you want to enter?"}),p.jsx("p",{children:"ei.one is two things held together: an ecosystem of Business Units working in sync, and a platform that rewards the people who work inside it. Pick the right door for you."})]}),p.jsxs("div",{className:"entry-grid",children:[p.jsxs("article",{className:"entry-card companies",children:[p.jsx("div",{className:"entry-kicker",children:"For companies"}),p.jsx("h3",{children:"Activate the ecosystem."}),p.jsx("p",{className:"entry-copy",children:"A system of specialised Business Units — energy, sales, marketing, IT & AI, real estate, 3D — working together. Enter through one, benefit from all."}),p.jsxs("ul",{className:"entry-list",children:[p.jsxs("li",{children:[p.jsx("i",{className:"fa-solid fa-network-wired entry-check","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Business Ecosystem"}),p.jsx("small",{children:"The Business Units in the network"})]})]}),p.jsxs("li",{children:[p.jsx("i",{className:"fa-solid fa-handshake entry-check","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Become a Partner"}),p.jsx("small",{children:"Franchise, license, white label"})]})]}),p.jsxs("li",{children:[p.jsx("i",{className:"fa-solid fa-chart-line entry-check","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Sponsor & Investor"}),p.jsx("small",{children:"Presence and growth"})]})]})]}),p.jsx("a",{className:"entry-link",href:"/business-club",children:"Enter Companies →"})]}),p.jsxs("article",{className:"entry-card talents",children:[p.jsx("div",{className:"entry-kicker",children:"For talents"}),p.jsx("h3",{children:"Build your Experience Identity."}),p.jsx("p",{className:"entry-copy",children:"Learn through the Academy, accumulate verified experience inside the ecosystem's companies, get found when a company actually needs what you can do."}),p.jsxs("ul",{className:"entry-list",children:[p.jsxs("li",{children:[p.jsx("i",{className:"fa-solid fa-id-card entry-check","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Experience Identity"}),p.jsx("small",{children:"Your verified CV"})]}),p.jsx("em",{className:"entry-pill",children:"Live"})]}),p.jsxs("li",{children:[p.jsx("i",{className:"fa-solid fa-graduation-cap entry-check","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Academy"}),p.jsx("small",{children:"Learn on the job"})]}),p.jsx("em",{className:"entry-pill preview",children:"Soon"})]}),p.jsxs("li",{children:[p.jsx("i",{className:"fa-solid fa-magnifying-glass-chart entry-check","aria-hidden":"true"}),p.jsxs("span",{children:[p.jsx("strong",{children:"Recruitment"}),p.jsx("small",{children:"Get found"})]}),p.jsx("em",{className:"entry-pill preview",children:"Soon"})]})]}),p.jsx("a",{className:"entry-link",href:"/talent",children:"Enter Talents →"})]})]})]})}),p.jsx("section",{className:"company-effects","aria-labelledby":"company-effects-title",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"effects-head",children:[p.jsx("h2",{id:"company-effects-title",children:"What changes for a company that joins ei.one"}),p.jsx("p",{children:'Five concrete effects that turn a business from "a workplace" into a hub of value for society.'})]}),p.jsxs("div",{className:"effects-grid",children:[p.jsxs("article",{className:"effect-card",children:[p.jsx("span",{className:"effect-number",children:"01"}),p.jsx("span",{className:"effect-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-handshake"})}),p.jsx("h3",{children:"New commercial relationships"}),p.jsx("p",{children:"Access to the Business Units and the customers already operating inside the ecosystem."})]}),p.jsxs("article",{className:"effect-card",children:[p.jsx("span",{className:"effect-number",children:"02"}),p.jsx("span",{className:"effect-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-graduation-cap"})}),p.jsx("h3",{children:"Talent attracted"}),p.jsx("p",{children:"The best people come to companies that offer experience verifiable in the Identity."})]}),p.jsxs("article",{className:"effect-card",children:[p.jsx("span",{className:"effect-number",children:"03"}),p.jsx("span",{className:"effect-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-brain"})}),p.jsx("h3",{children:"Skills developed"}),p.jsx("p",{children:"The workplace becomes a learning engine for the people who work in it."})]}),p.jsxs("article",{className:"effect-card",children:[p.jsx("span",{className:"effect-number",children:"04"}),p.jsx("span",{className:"effect-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-eye"})}),p.jsx("h3",{children:"Amplified visibility"}),p.jsx("p",{children:"Presence inside the marketplace and across ecosystem activations."})]}),p.jsxs("article",{className:"effect-card",children:[p.jsx("span",{className:"effect-number",children:"05"}),p.jsx("span",{className:"effect-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-leaf"})}),p.jsx("h3",{children:"Measurable ESG impact"}),p.jsx("p",{children:"Real indicators on sustainability, inclusion, and governance — verifiable."})]})]}),p.jsx("p",{className:"effects-closing",children:"The company is no longer just a workplace. It becomes a hub of value for society."})]})}),p.jsx("section",{className:"training-modules","aria-labelledby":"training-title",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"training-head",children:[p.jsx("p",{className:"training-kicker",children:"Company learning engine"}),p.jsx("h2",{id:"training-title",children:"How the company trains and attests its people"}),p.jsx("p",{children:"Three modules — one to build skills, one to attest them, one to make them findable. Together they make the company a growth engine for the people who work there."})]}),p.jsxs("div",{className:"training-grid",children:[p.jsxs("a",{className:"training-card academy",href:"/academy",children:[p.jsx("span",{className:"training-step",children:"01"}),p.jsx("span",{className:"training-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-graduation-cap"})}),p.jsxs("h3",{children:["1. Academy ",p.jsx("span",{className:"module-pill",children:"Preview"})]}),p.jsx("p",{children:"Sponsors and partners of the ecosystem build the learning paths. You learn where you work."}),p.jsx("span",{className:"training-link",children:"Discover Academy→"})]}),p.jsxs("a",{className:"training-card identity",href:"/experience-passport",children:[p.jsx("span",{className:"training-step",children:"02"}),p.jsx("span",{className:"training-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-passport"})}),p.jsxs("h3",{children:["2. Experience Identity ",p.jsx("span",{className:"module-pill live",children:"Live"})]}),p.jsx("p",{children:"Your digital record of what you actually did. Verified by the ecosystem's companies who saw you do it."}),p.jsx("span",{className:"training-link",children:"Discover the Identity→"})]}),p.jsxs("a",{className:"training-card recruitment",href:"/recruitment",children:[p.jsx("span",{className:"training-step",children:"03"}),p.jsx("span",{className:"training-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-handshake"})}),p.jsxs("h3",{children:["3. Recruitment ",p.jsx("span",{className:"module-pill",children:"Preview"})]}),p.jsx("p",{children:"Companies hire on Identity experience, not CV keywords. The matches are real."}),p.jsx("span",{className:"training-link",children:"Discover Recruitment→"})]})]})]})}),p.jsx("section",{className:"why-now","aria-labelledby":"why-now-title",children:p.jsxs("div",{className:"wrap why-grid",children:[p.jsxs("div",{className:"why-copy",children:[p.jsx("h2",{id:"why-now-title",children:"Why now"}),p.jsxs("div",{className:"why-points",children:[p.jsxs("p",{children:[p.jsx("strong",{children:"The job market is changing fast."})," AI is rewriting roles faster than CVs can keep up. Résumés say less and less about what a person can actually do, and companies struggle more and more to find the right skills."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Our answer."})," Put real, verified experience at the centre — not keywords. Every entry in the Identity is attested by the company that gave you the work. It's a fairer, more honest way to show what you're worth."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"How the ecosystem moves."})," Companies work together and train people on the job. People accumulate verified experience. That experience is what hiring companies search on. Value circulates."]})]})]}),p.jsx("div",{className:"why-media",children:p.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82",alt:"Bright office desk with computer analytics dashboard and plants"})})]})}),p.jsx("section",{className:"building","aria-labelledby":"building-title",children:p.jsxs("div",{className:"wrap",children:[p.jsx("div",{className:"building-head",children:p.jsx("h2",{id:"building-title",children:"What we're building"})}),p.jsxs("div",{className:"building-callout",children:[p.jsx("div",{children:"ei.one isn't a services platform."}),p.jsx("div",{children:"It's the infrastructure that turns companies into hubs of learning, innovation and growth."})]}),p.jsxs("div",{className:"building-grid",children:[p.jsxs("article",{className:"building-card",children:[p.jsx("span",{className:"building-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-passport"})}),p.jsx("h3",{children:"Verified experience"}),p.jsx("p",{children:"What you did, attested by the people who saw you do it."})]}),p.jsxs("article",{className:"building-card",children:[p.jsx("span",{className:"building-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-graduation-cap"})}),p.jsx("h3",{children:"Talents that grow"}),p.jsx("p",{children:"Room to discover what you're good at and develop it over time."})]}),p.jsxs("article",{className:"building-card",children:[p.jsx("span",{className:"building-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-handshake"})}),p.jsx("h3",{children:"Real relationships"}),p.jsx("p",{children:"Networking measured in trust and real collaborations."})]}),p.jsxs("article",{className:"building-card",children:[p.jsx("span",{className:"building-icon","aria-hidden":"true",children:p.jsx("i",{className:"fa-solid fa-arrows-rotate"})}),p.jsx("h3",{children:"Integrated system"}),p.jsx("p",{children:"Experience, Education, Economy and Environment work as one."})]})]})]})}),p.jsx("section",{className:"cta",id:"contact",children:p.jsxs("div",{className:"wrap cta-box",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Let's build it together."}),p.jsx("p",{children:"Activate the ecosystem for your company, or start building your Experience Identity."})]}),p.jsxs("div",{className:"actions",style:{margin:0},children:[p.jsx("a",{className:"button",href:"/business-club",children:"For Companies"}),p.jsx("a",{className:"button secondary",href:"/talent",children:"For Talents"}),p.jsx("a",{className:"button secondary",href:"/contact",children:"Contact us"})]})]})}),p.jsx("section",{className:"newsletter",children:p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Stay up to date"}),p.jsx("p",{children:"Subscribe to the newsletter for updates from the ecosystem."})]}),p.jsxs("form",{className:"newsletter-form",children:[p.jsx("input",{type:"email",placeholder:"Email address","aria-label":"Email address"}),p.jsx("button",{className:"button",type:"submit",children:"Subscribe"})]})]})})]}),p.jsx(hh,{}),p.jsxs("aside",{className:"cookie","aria-label":"Cookie notice",children:["We use cookies to improve your experience. By continuing, you accept our privacy policy.",p.jsx("button",{className:"button",onClick:t=>{var i;return(i=t.currentTarget.closest(".cookie"))==null?void 0:i.remove()},children:"Accept"})]})]})}Qx.createRoot(document.getElementById("root")).render(p.jsx(kx.StrictMode,{children:p.jsx(dA,{})}));
