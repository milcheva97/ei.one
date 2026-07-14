(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function K0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Jd={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx;function Q0(){if(rx)return Dl;rx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:o,type:r,key:f,ref:c!==void 0?c:null,props:d}}return Dl.Fragment=t,Dl.jsx=i,Dl.jsxs=i,Dl}var lx;function J0(){return lx||(lx=1,Jd.exports=Q0()),Jd.exports}var s=J0(),$d={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function $0(){if(ox)return tt;ox=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(U,ne,ve){this.props=U,this.context=ne,this.refs=M,this.updater=ve||A}_.prototype.isReactComponent={},_.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=_.prototype;function C(U,ne,ve){this.props=U,this.context=ne,this.refs=M,this.updater=ve||A}var P=C.prototype=new z;P.constructor=C,R(P,_.prototype),P.isPureReactComponent=!0;var ie=Array.isArray;function H(){}var O={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function D(U,ne,ve){var W=ve.ref;return{$$typeof:o,type:U,key:ne,ref:W!==void 0?W:null,props:ve}}function w(U,ne){return D(U.type,ne,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function ce(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ne[ve]})}var le=/\/+/g;function me(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?ce(""+U.key):ne.toString(36)}function he(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function j(U,ne,ve,W,oe){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var be=!1;if(U===null)be=!0;else switch(ye){case"bigint":case"string":case"number":be=!0;break;case"object":switch(U.$$typeof){case o:case t:be=!0;break;case v:return be=U._init,j(be(U._payload),ne,ve,W,oe)}}if(be)return oe=oe(U),be=W===""?"."+me(U,0):W,ie(oe)?(ve="",be!=null&&(ve=be.replace(le,"$&/")+"/"),j(oe,ne,ve,"",function(nt){return nt})):oe!=null&&(G(oe)&&(oe=w(oe,ve+(oe.key==null||U&&U.key===oe.key?"":(""+oe.key).replace(le,"$&/")+"/")+be)),ne.push(oe)),1;be=0;var He=W===""?".":W+":";if(ie(U))for(var Fe=0;Fe<U.length;Fe++)W=U[Fe],ye=He+me(W,Fe),be+=j(W,ne,ve,ye,oe);else if(Fe=b(U),typeof Fe=="function")for(U=Fe.call(U),Fe=0;!(W=U.next()).done;)W=W.value,ye=He+me(W,Fe++),be+=j(W,ne,ve,ye,oe);else if(ye==="object"){if(typeof U.then=="function")return j(he(U),ne,ve,W,oe);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return be}function q(U,ne,ve){if(U==null)return U;var W=[],oe=0;return j(U,W,"","",function(ye){return ne.call(ve,ye,oe++)}),W}function Z(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Ee={map:q,forEach:function(U,ne,ve){q(U,function(){ne.apply(this,arguments)},ve)},count:function(U){var ne=0;return q(U,function(){ne++}),ne},toArray:function(U){return q(U,function(ne){return ne})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return tt.Activity=y,tt.Children=Ee,tt.Component=_,tt.Fragment=i,tt.Profiler=c,tt.PureComponent=C,tt.StrictMode=r,tt.Suspense=g,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,tt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},tt.cache=function(U){return function(){return U.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(U,ne,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var W=R({},U.props),oe=U.key;if(ne!=null)for(ye in ne.key!==void 0&&(oe=""+ne.key),ne)!J.call(ne,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ne.ref===void 0||(W[ye]=ne[ye]);var ye=arguments.length-2;if(ye===1)W.children=ve;else if(1<ye){for(var be=Array(ye),He=0;He<ye;He++)be[He]=arguments[He+2];W.children=be}return D(U.type,oe,W)},tt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:d,_context:U},U},tt.createElement=function(U,ne,ve){var W,oe={},ye=null;if(ne!=null)for(W in ne.key!==void 0&&(ye=""+ne.key),ne)J.call(ne,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(oe[W]=ne[W]);var be=arguments.length-2;if(be===1)oe.children=ve;else if(1<be){for(var He=Array(be),Fe=0;Fe<be;Fe++)He[Fe]=arguments[Fe+2];oe.children=He}if(U&&U.defaultProps)for(W in be=U.defaultProps,be)oe[W]===void 0&&(oe[W]=be[W]);return D(U,ye,oe)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(U){return{$$typeof:p,render:U}},tt.isValidElement=G,tt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:Z}},tt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},tt.startTransition=function(U){var ne=O.T,ve={};O.T=ve;try{var W=U(),oe=O.S;oe!==null&&oe(ve,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(H,Me)}catch(ye){Me(ye)}finally{ne!==null&&ve.types!==null&&(ne.types=ve.types),O.T=ne}},tt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},tt.use=function(U){return O.H.use(U)},tt.useActionState=function(U,ne,ve){return O.H.useActionState(U,ne,ve)},tt.useCallback=function(U,ne){return O.H.useCallback(U,ne)},tt.useContext=function(U){return O.H.useContext(U)},tt.useDebugValue=function(){},tt.useDeferredValue=function(U,ne){return O.H.useDeferredValue(U,ne)},tt.useEffect=function(U,ne){return O.H.useEffect(U,ne)},tt.useEffectEvent=function(U){return O.H.useEffectEvent(U)},tt.useId=function(){return O.H.useId()},tt.useImperativeHandle=function(U,ne,ve){return O.H.useImperativeHandle(U,ne,ve)},tt.useInsertionEffect=function(U,ne){return O.H.useInsertionEffect(U,ne)},tt.useLayoutEffect=function(U,ne){return O.H.useLayoutEffect(U,ne)},tt.useMemo=function(U,ne){return O.H.useMemo(U,ne)},tt.useOptimistic=function(U,ne){return O.H.useOptimistic(U,ne)},tt.useReducer=function(U,ne,ve){return O.H.useReducer(U,ne,ve)},tt.useRef=function(U){return O.H.useRef(U)},tt.useState=function(U){return O.H.useState(U)},tt.useSyncExternalStore=function(U,ne,ve){return O.H.useSyncExternalStore(U,ne,ve)},tt.useTransition=function(){return O.H.useTransition()},tt.version="19.2.7",tt}var cx;function ff(){return cx||(cx=1,$d.exports=$0()),$d.exports}var Tn=ff();const ey=K0(Tn);var eh={exports:{}},Ul={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function ty(){return ux||(ux=1,(function(o){function t(j,q){var Z=j.length;j.push(q);e:for(;0<Z;){var Me=Z-1>>>1,Ee=j[Me];if(0<c(Ee,q))j[Me]=q,j[Z]=Ee,Z=Me;else break e}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var q=j[0],Z=j.pop();if(Z!==q){j[0]=Z;e:for(var Me=0,Ee=j.length,U=Ee>>>1;Me<U;){var ne=2*(Me+1)-1,ve=j[ne],W=ne+1,oe=j[W];if(0>c(ve,Z))W<Ee&&0>c(oe,ve)?(j[Me]=oe,j[W]=Z,Me=W):(j[Me]=ve,j[ne]=Z,Me=ne);else if(W<Ee&&0>c(oe,Z))j[Me]=oe,j[W]=Z,Me=W;else break e}}return q}function c(j,q){var Z=j.sortIndex-q.sortIndex;return Z!==0?Z:j.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();o.unstable_now=function(){return f.now()-p}}var g=[],m=[],v=1,y=null,S=3,b=!1,A=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function P(j){for(var q=i(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=j)r(m),q.sortIndex=q.expirationTime,t(g,q);else break;q=i(m)}}function ie(j){if(R=!1,P(j),!A)if(i(g)!==null)A=!0,H||(H=!0,ce());else{var q=i(m);q!==null&&he(ie,q.startTime-j)}}var H=!1,O=-1,J=5,D=-1;function w(){return M?!0:!(o.unstable_now()-D<J)}function G(){if(M=!1,H){var j=o.unstable_now();D=j;var q=!0;try{e:{A=!1,R&&(R=!1,z(O),O=-1),b=!0;var Z=S;try{t:{for(P(j),y=i(g);y!==null&&!(y.expirationTime>j&&w());){var Me=y.callback;if(typeof Me=="function"){y.callback=null,S=y.priorityLevel;var Ee=Me(y.expirationTime<=j);if(j=o.unstable_now(),typeof Ee=="function"){y.callback=Ee,P(j),q=!0;break t}y===i(g)&&r(g),P(j)}else r(g);y=i(g)}if(y!==null)q=!0;else{var U=i(m);U!==null&&he(ie,U.startTime-j),q=!1}}break e}finally{y=null,S=Z,b=!1}q=void 0}}finally{q?ce():H=!1}}}var ce;if(typeof C=="function")ce=function(){C(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=G,ce=function(){me.postMessage(null)}}else ce=function(){_(G,0)};function he(j,q){O=_(function(){j(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(j){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var Z=S;S=q;try{return j()}finally{S=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=S;S=j;try{return q()}finally{S=Z}},o.unstable_scheduleCallback=function(j,q,Z){var Me=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Me+Z:Me):Z=Me,j){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Z+Ee,j={id:v++,callback:q,priorityLevel:j,startTime:Z,expirationTime:Ee,sortIndex:-1},Z>Me?(j.sortIndex=Z,t(m,j),i(g)===null&&j===i(m)&&(R?(z(O),O=-1):R=!0,he(ie,Z-Me))):(j.sortIndex=Ee,t(g,j),A||b||(A=!0,H||(H=!0,ce()))),j},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(j){var q=S;return function(){var Z=S;S=q;try{return j.apply(this,arguments)}finally{S=Z}}}})(nh)),nh}var dx;function ny(){return dx||(dx=1,th.exports=ty()),th.exports}var ih={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function iy(){if(hx)return Mn;hx=1;var o=ff();function t(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(g,m,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:g,containerInfo:m,implementation:v}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return d(g,m,null,v)},Mn.flushSync=function(g){var m=f.T,v=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=m,r.p=v,r.d.f()}},Mn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(g,m))},Mn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Mn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,y=p(v,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:b}):v==="script"&&r.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(g)},Mn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,y=p(v,m.crossOrigin);r.d.L(g,v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=p(m.as,m.crossOrigin);r.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(g)},Mn.requestFormReset=function(g){r.d.r(g)},Mn.unstable_batchedUpdates=function(g,m){return g(m)},Mn.useFormState=function(g,m,v){return f.H.useFormState(g,m,v)},Mn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Mn.version="19.2.7",Mn}var fx;function ay(){if(fx)return ih.exports;fx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ih.exports=iy(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function sy(){if(px)return Ul;px=1;var o=ny(),t=ff(),i=ay();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,l=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return g(u),e;if(h===l)return g(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=h;else{for(var x=!1,E=u.child;E;){if(E===a){x=!0,a=u,l=h;break}if(E===l){x=!0,l=u,a=h;break}E=E.sibling}if(!x){for(E=h.child;E;){if(E===a){x=!0,a=h,l=u;break}if(E===l){x=!0,l=h,a=u;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),C=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case C:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var he=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Me=[],Ee=-1;function U(e){return{current:e}}function ne(e){0>Ee||(e.current=Me[Ee],Me[Ee]=null,Ee--)}function ve(e,n){Ee++,Me[Ee]=e.current,e.current=n}var W=U(null),oe=U(null),ye=U(null),be=U(null);function He(e,n){switch(ve(ye,n),ve(oe,e),ve(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rg(n),e=Cg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(W),ve(W,e)}function Fe(){ne(W),ne(oe),ne(ye)}function nt(e){e.memoizedState!==null&&ve(be,e);var n=W.current,a=Cg(n,e.type);n!==a&&(ve(oe,e),ve(W,a))}function jt(e){oe.current===e&&(ne(W),ne(oe)),be.current===e&&(ne(be),Nl._currentValue=Z)}var B,Vt;function ut(e){if(B===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+Vt}var yt=!1;function Ge(e,n){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(se){var $=se}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(se){$=se}e.call(pe.prototype)}}else{try{throw Error()}catch(se){$=se}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(se){if(se&&$&&typeof se.stack=="string")return[se.stack,$.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),x=h[0],E=h[1];if(x&&E){var I=x.split(`
`),Q=E.split(`
`);for(u=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(l===I.length||u===Q.length)for(l=I.length-1,u=Q.length-1;1<=l&&0<=u&&I[l]!==Q[u];)u--;for(;1<=l&&0<=u;l--,u--)if(I[l]!==Q[u]){if(l!==1||u!==1)do if(l--,u--,0>u||I[l]!==Q[u]){var ue=`
`+I[l].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=l&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return ut("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var et=Object.prototype.hasOwnProperty,L=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,ae=o.unstable_shouldYield,Se=o.unstable_requestPaint,xe=o.unstable_now,_e=o.unstable_getCurrentPriorityLevel,qe=o.unstable_ImmediatePriority,De=o.unstable_UserBlockingPriority,je=o.unstable_NormalPriority,it=o.unstable_LowPriority,Ae=o.unstable_IdlePriority,Le=o.log,ft=o.unstable_setDisableYieldValue,Ke=null,Re=null;function Ye(e){if(typeof Le=="function"&&ft(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ke,e)}catch{}}var Ze=Math.clz32?Math.clz32:Ne,Pt=Math.log,V=Math.LN2;function Ne(e){return e>>>=0,e===0?32:31-(Pt(e)/V|0)|0}var fe=256,ge=262144,we=4194304;function ke(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~h,l!==0?u=ke(l):(x&=E,x!==0?u=ke(x):a||(a=E&~e,a!==0&&(u=ke(a))))):(E=l&~h,E!==0?u=ke(E):x!==0?u=ke(x):a||(a=l&~e,a!==0&&(u=ke(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ot(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function an(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function Bn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yl(e,n,a,l,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=x&~a;0<a;){var ue=31-Ze(a),pe=1<<ue;E[ue]=0,I[ue]=-1;var $=Q[ue];if($!==null)for(Q[ue]=null,ue=0;ue<$.length;ue++){var se=$[ue];se!==null&&(se.lane&=-536870913)}a&=~pe}l!==0&&yi(e,l,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function yi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Ze(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Rs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-Ze(a),u=1<<l;u&n|e[l]&n&&(e[l]|=n),a&=~u}}function zr(e,n){var a=n&-n;return a=(a&42)!==0?1:Cs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function aa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:$g(e.type))}function Ga(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var ri=Math.random().toString(36).slice(2),Qt="__reactFiber$"+ri,vn="__reactProps$"+ri,sa="__reactContainer$"+ri,Fr="__reactEvents$"+ri,N="__reactListeners$"+ri,k="__reactHandles$"+ri,ee="__reactResources$"+ri,te="__reactMarker$"+ri;function Y(e){delete e[Qt],delete e[vn],delete e[Fr],delete e[N],delete e[k]}function Te(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[sa]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ig(e);e!==null;){if(a=e[Qt])return a;e=Ig(e)}return n}e=a,a=e.parentNode}return null}function Ce(e){if(e=e[Qt]||e[sa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Oe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Pe(e){var n=e[ee];return n||(n=e[ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[te]=!0}var Je=new Set,We={};function ct(e,n){At(e,n),At(e+"Capture",n)}function At(e,n){for(We[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_n={},_t={};function Ve(e){return et.call(_t,e)?!0:et.call(_n,e)?!1:Ft.test(e)?_t[e]=!0:(_n[e]=!0,!1)}function Xt(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hr(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,h=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ht(e){if(!e._valueTracker){var n=yn(e)?"checked":"value";e._valueTracker=Hr(e,n,""+e[n])}}function li(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=yn(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wn=/[\n"\\]/g;function Sn(e){return e.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gr(e,n,a,l,u,h,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Wc(e,x,sn(n)):a!=null?Wc(e,x,sn(a)):l!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+sn(E):e.removeAttribute("name")}function Vr(e,n,a,l,u,h,x,E){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ht(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ht(e)}function Wc(e,n,a){n==="number"&&ra(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ds(e,n,a,l){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ef(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function Tf(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(he(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ht(e)}function Us(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Xv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Af(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||Xv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Nf(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&Af(e,u,l)}else for(var h in n)n.hasOwnProperty(h)&&Af(e,h,n[h])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(e){return Wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ci(){}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Ls=null;function wf(e){var n=Ce(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Gr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var u=l[vn]||null;if(!u)throw Error(r(90));Gr(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&li(l)}break e;case"textarea":Ef(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ds(e,!!a.multiple,n,!1)}}}var Qc=!1;function Rf(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var l=e(n);return l}finally{if(Qc=!1,(js!==null||Ls!==null)&&(Io(),js&&(n=js,e=Ls,Ls=js=null,wf(n),e)))for(n=0;n<e.length;n++)wf(e[n])}}function kr(e,n){var a=e.stateNode;if(a===null)return null;var l=a[vn]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Di)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Jc=!1}var la=null,$c=null,Kl=null;function Cf(){if(Kl)return Kl;var e,n=$c,a=n.length,l,u="value"in la?la.value:la.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(l=1;l<=x&&n[a-l]===u[h-l];l++);return Kl=u.slice(e,1<l?1-l:void 0)}function Ql(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jl(){return!0}function Df(){return!1}function Rn(e){function n(a,l,u,h,x){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(h):h[E]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jl:Df,this.isPropagationStopped=Df,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Rn(Va),qr=y({},Va,{view:0,detail:0}),Yv=Rn(qr),eu,tu,Wr,eo=y({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(eu=e.screenX-Wr.screenX,tu=e.screenY-Wr.screenY):tu=eu=0,Wr=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Uf=Rn(eo),Zv=y({},eo,{dataTransfer:0}),Kv=Rn(Zv),Qv=y({},qr,{relatedTarget:0}),nu=Rn(Qv),Jv=y({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=Rn(Jv),e_=y({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t_=Rn(e_),n_=y({},Va,{data:0}),jf=Rn(n_),i_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=s_[e])?!!n[e]:!1}function iu(){return r_}var l_=y({},qr,{key:function(e){if(e.key){var n=i_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o_=Rn(l_),c_=y({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=Rn(c_),u_=y({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),d_=Rn(u_),h_=y({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),f_=Rn(h_),p_=y({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),m_=Rn(p_),g_=y({},Va,{newState:0,oldState:0}),x_=Rn(g_),v_=[9,13,27,32],au=Di&&"CompositionEvent"in window,Yr=null;Di&&"documentMode"in document&&(Yr=document.documentMode);var __=Di&&"TextEvent"in window&&!Yr,Of=Di&&(!au||Yr&&8<Yr&&11>=Yr),Pf=" ",If=!1;function zf(e,n){switch(e){case"keyup":return v_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function y_(e,n){switch(e){case"compositionend":return Bf(n);case"keypress":return n.which!==32?null:(If=!0,Pf);case"textInput":return e=n.data,e===Pf&&If?null:e;default:return null}}function S_(e,n){if(Os)return e==="compositionend"||!au&&zf(e,n)?(e=Cf(),Kl=$c=la=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Of&&n.locale!=="ko"?null:n.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!M_[e.type]:n==="textarea"}function Hf(e,n,a,l){js?Ls?Ls.push(l):Ls=[l]:js=l,n=ko(n,"onChange"),0<n.length&&(a=new $l("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Zr=null,Kr=null;function b_(e){bg(e,0)}function to(e){var n=Oe(e);if(li(n))return e}function Gf(e,n){if(e==="change")return n}var Vf=!1;if(Di){var su;if(Di){var ru="oninput"in document;if(!ru){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),ru=typeof kf.oninput=="function"}su=ru}else su=!1;Vf=su&&(!document.documentMode||9<document.documentMode)}function Xf(){Zr&&(Zr.detachEvent("onpropertychange",qf),Kr=Zr=null)}function qf(e){if(e.propertyName==="value"&&to(Kr)){var n=[];Hf(n,Kr,e,Kc(e)),Rf(b_,n)}}function E_(e,n,a){e==="focusin"?(Xf(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",qf)):e==="focusout"&&Xf()}function T_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(Kr)}function A_(e,n){if(e==="click")return to(n)}function N_(e,n){if(e==="input"||e==="change")return to(n)}function w_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fn=typeof Object.is=="function"?Object.is:w_;function Qr(e,n){if(Fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!et.call(n,u)||!Fn(e[u],n[u]))return!1}return!0}function Wf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yf(e,n){var a=Wf(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wf(a)}}function Zf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ra(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ra(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var R_=Di&&"documentMode"in document&&11>=document.documentMode,Ps=null,ou=null,Jr=null,cu=!1;function Qf(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Ps==null||Ps!==ra(l)||(l=Ps,"selectionStart"in l&&lu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jr&&Qr(Jr,l)||(Jr=l,l=ko(ou,"onSelect"),0<l.length&&(n=new $l("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=Ps)))}function ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Is={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},uu={},Jf={};Di&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Xa(e){if(uu[e])return uu[e];if(!Is[e])return e;var n=Is[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jf)return uu[e]=n[a];return e}var $f=Xa("animationend"),ep=Xa("animationiteration"),tp=Xa("animationstart"),C_=Xa("transitionrun"),D_=Xa("transitionstart"),U_=Xa("transitioncancel"),np=Xa("transitionend"),ip=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function oi(e,n){ip.set(e,n),ct(n,[e])}var no=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kn=[],zs=0,hu=0;function io(){for(var e=zs,n=hu=zs=0;n<e;){var a=Kn[n];Kn[n++]=null;var l=Kn[n];Kn[n++]=null;var u=Kn[n];Kn[n++]=null;var h=Kn[n];if(Kn[n++]=null,l!==null&&u!==null){var x=l.pending;x===null?u.next=u:(u.next=x.next,x.next=u),l.pending=u}h!==0&&ap(a,u,h)}}function ao(e,n,a,l){Kn[zs++]=e,Kn[zs++]=n,Kn[zs++]=a,Kn[zs++]=l,hu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function fu(e,n,a,l){return ao(e,n,a,l),so(e)}function qa(e,n){return ao(e,null,null,n),so(e)}function ap(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,l=h.alternate,l!==null&&(l.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ze(a),e=h.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=a|536870912),h):null}function so(e){if(50<yl)throw yl=0,Md=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Bs={};function j_(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,n,a,l){return new j_(e,n,a,l)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ui(e,n){var a=e.alternate;return a===null?(a=Hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ro(e,n,a,l,u,h){var x=0;if(l=e,typeof e=="function")pu(e)&&(x=1);else if(typeof e=="string")x=z0(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Hn(31,a,n,u),e.elementType=D,e.lanes=h,e;case R:return Wa(a.children,u,h,n);case M:x=8,u|=24;break;case _:return e=Hn(12,a,n,u|2),e.elementType=_,e.lanes=h,e;case ie:return e=Hn(13,a,n,u),e.elementType=ie,e.lanes=h,e;case H:return e=Hn(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:x=10;break e;case z:x=9;break e;case P:x=11;break e;case O:x=14;break e;case J:x=16,l=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=Hn(x,a,n,u),n.elementType=e,n.type=l,n.lanes=h,n}function Wa(e,n,a,l){return e=Hn(7,e,l,n),e.lanes=a,e}function mu(e,n,a){return e=Hn(6,e,null,n),e.lanes=a,e}function rp(e){var n=Hn(18,null,null,0);return n.stateNode=e,n}function gu(e,n,a){return n=Hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lp=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var a=lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},lp.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var Fs=[],Hs=0,lo=null,$r=0,Jn=[],$n=0,oa=null,Si=1,Mi="";function ji(e,n){Fs[Hs++]=$r,Fs[Hs++]=lo,lo=e,$r=n}function op(e,n,a){Jn[$n++]=Si,Jn[$n++]=Mi,Jn[$n++]=oa,oa=e;var l=Si;e=Mi;var u=32-Ze(l)-1;l&=~(1<<u),a+=1;var h=32-Ze(n)+u;if(30<h){var x=u-u%5;h=(l&(1<<x)-1).toString(32),l>>=x,u-=x,Si=1<<32-Ze(n)+u|a<<u|l,Mi=h+e}else Si=1<<h|a<<u|l,Mi=e}function xu(e){e.return!==null&&(ji(e,1),op(e,1,0))}function vu(e){for(;e===lo;)lo=Fs[--Hs],Fs[Hs]=null,$r=Fs[--Hs],Fs[Hs]=null;for(;e===oa;)oa=Jn[--$n],Jn[$n]=null,Mi=Jn[--$n],Jn[$n]=null,Si=Jn[--$n],Jn[$n]=null}function cp(e,n){Jn[$n++]=Si,Jn[$n++]=Mi,Jn[$n++]=oa,Si=n.id,Mi=n.overflow,oa=e}var fn=null,It=null,xt=!1,ca=null,ei=!1,_u=Error(r(519));function ua(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(Qn(n,e)),_u}function up(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[Qt]=e,n[vn]=l,a){case"dialog":ht("cancel",n),ht("close",n);break;case"iframe":case"object":case"embed":ht("load",n);break;case"video":case"audio":for(a=0;a<Ml.length;a++)ht(Ml[a],n);break;case"source":ht("error",n);break;case"img":case"image":case"link":ht("error",n),ht("load",n);break;case"details":ht("toggle",n);break;case"input":ht("invalid",n),Vr(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ht("invalid",n);break;case"textarea":ht("invalid",n),Tf(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||Ng(n.textContent,a)?(l.popover!=null&&(ht("beforetoggle",n),ht("toggle",n)),l.onScroll!=null&&ht("scroll",n),l.onScrollEnd!=null&&ht("scrollend",n),l.onClick!=null&&(n.onclick=Ci),n=!0):n=!1,n||ua(e,!0)}function dp(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 31:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:fn=fn.return}}function Gs(e){if(e!==fn)return!1;if(!xt)return dp(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Id(e.type,e.memoizedProps)),a=!a),a&&It&&ua(e),dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));It=Pg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));It=Pg(e)}else n===27?(n=It,Ea(e.type)?(e=Gd,Gd=null,It=e):It=n):It=fn?ni(e.stateNode.nextSibling):null;return!0}function Ya(){It=fn=null,xt=!1}function yu(){var e=ca;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ca=null),e}function el(e){ca===null?ca=[e]:ca.push(e)}var Su=U(null),Za=null,Li=null;function da(e,n,a){ve(Su,n._currentValue),n._currentValue=a}function Oi(e){e._currentValue=Su.current,ne(Su)}function Mu(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;e:for(;h!==null;){var E=h;h=u;for(var I=0;I<n.length;I++)if(E.context===n[I]){h.lanes|=a,E=h.alternate,E!==null&&(E.lanes|=a),Mu(h.return,a,e),l||(x=null);break e}h=E.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Mu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Vs(e,n,a,l){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=u.type;Fn(u.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(u===be.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}u=u.return}e!==null&&bu(n,e,a,l),n.flags|=262144}function oo(e){for(e=e.firstContext;e!==null;){if(!Fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){Za=e,Li=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return hp(Za,e)}function co(e,n){return Za===null&&Ka(e),hp(e,n)}function hp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Li===null){if(e===null)throw Error(r(308));Li=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Li=Li.next=n;return a}var L_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},O_=o.unstable_scheduleCallback,P_=o.unstable_NormalPriority,Jt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new L_,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&O_(P_,function(){e.controller.abort()})}var nl=null,Tu=0,ks=0,Xs=null;function I_(e,n){if(nl===null){var a=nl=[];Tu=0,ks=wd(),Xs={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Tu++,n.then(fp,fp),n}function fp(){if(--Tu===0&&nl!==null){Xs!==null&&(Xs.status="fulfilled");var e=nl;nl=null,ks=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function z_(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var pp=j.S;j.S=function(e,n){Qm=xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&I_(e,n),pp!==null&&pp(e,n)};var Qa=U(null);function Au(){var e=Qa.current;return e!==null?e:Lt.pooledCache}function uo(e,n){n===null?ve(Qa,Qa.current):ve(Qa,n.pool)}function mp(){var e=Au();return e===null?null:{parent:Jt._currentValue,pool:e}}var qs=Error(r(460)),Nu=Error(r(474)),ho=Error(r(542)),fo={then:function(){}};function gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ci,Ci),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_p(e),e;default:if(typeof n.status=="string")n.then(Ci,Ci);else{if(e=Lt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_p(e),e}throw $a=n,qs}}function Ja(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,qs):a}}var $a=null;function vp(){if($a===null)throw Error(r(459));var e=$a;return $a=null,e}function _p(e){if(e===qs||e===ho)throw Error(r(483))}var Ws=null,il=0;function po(e){var n=il;return il+=1,Ws===null&&(Ws=[]),xp(Ws,e,n)}function al(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function mo(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function yp(e){function n(X,F){if(e){var K=X.deletions;K===null?(X.deletions=[F],X.flags|=16):K.push(F)}}function a(X,F){if(!e)return null;for(;F!==null;)n(X,F),F=F.sibling;return null}function l(X){for(var F=new Map;X!==null;)X.key!==null?F.set(X.key,X):F.set(X.index,X),X=X.sibling;return F}function u(X,F){return X=Ui(X,F),X.index=0,X.sibling=null,X}function h(X,F,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<F?(X.flags|=67108866,F):K):(X.flags|=67108866,F)):(X.flags|=1048576,F)}function x(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function E(X,F,K,de){return F===null||F.tag!==6?(F=mu(K,X.mode,de),F.return=X,F):(F=u(F,K),F.return=X,F)}function I(X,F,K,de){var Xe=K.type;return Xe===R?ue(X,F,K.props.children,de,K.key):F!==null&&(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ja(Xe)===F.type)?(F=u(F,K.props),al(F,K),F.return=X,F):(F=ro(K.type,K.key,K.props,null,X.mode,de),al(F,K),F.return=X,F)}function Q(X,F,K,de){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=gu(K,X.mode,de),F.return=X,F):(F=u(F,K.children||[]),F.return=X,F)}function ue(X,F,K,de,Xe){return F===null||F.tag!==7?(F=Wa(K,X.mode,de,Xe),F.return=X,F):(F=u(F,K),F.return=X,F)}function pe(X,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=mu(""+F,X.mode,K),F.return=X,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case b:return K=ro(F.type,F.key,F.props,null,X.mode,K),al(K,F),K.return=X,K;case A:return F=gu(F,X.mode,K),F.return=X,F;case J:return F=Ja(F),pe(X,F,K)}if(he(F)||ce(F))return F=Wa(F,X.mode,K,null),F.return=X,F;if(typeof F.then=="function")return pe(X,po(F),K);if(F.$$typeof===C)return pe(X,co(X,F),K);mo(X,F)}return null}function $(X,F,K,de){var Xe=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xe!==null?null:E(X,F,""+K,de);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return K.key===Xe?I(X,F,K,de):null;case A:return K.key===Xe?Q(X,F,K,de):null;case J:return K=Ja(K),$(X,F,K,de)}if(he(K)||ce(K))return Xe!==null?null:ue(X,F,K,de,null);if(typeof K.then=="function")return $(X,F,po(K),de);if(K.$$typeof===C)return $(X,F,co(X,K),de);mo(X,K)}return null}function se(X,F,K,de,Xe){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return X=X.get(K)||null,E(F,X,""+de,Xe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case b:return X=X.get(de.key===null?K:de.key)||null,I(F,X,de,Xe);case A:return X=X.get(de.key===null?K:de.key)||null,Q(F,X,de,Xe);case J:return de=Ja(de),se(X,F,K,de,Xe)}if(he(de)||ce(de))return X=X.get(K)||null,ue(F,X,de,Xe,null);if(typeof de.then=="function")return se(X,F,K,po(de),Xe);if(de.$$typeof===C)return se(X,F,K,co(F,de),Xe);mo(F,de)}return null}function ze(X,F,K,de){for(var Xe=null,St=null,Be=F,st=F=0,mt=null;Be!==null&&st<K.length;st++){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var Mt=$(X,Be,K[st],de);if(Mt===null){Be===null&&(Be=mt);break}e&&Be&&Mt.alternate===null&&n(X,Be),F=h(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt,Be=mt}if(st===K.length)return a(X,Be),xt&&ji(X,st),Xe;if(Be===null){for(;st<K.length;st++)Be=pe(X,K[st],de),Be!==null&&(F=h(Be,F,st),St===null?Xe=Be:St.sibling=Be,St=Be);return xt&&ji(X,st),Xe}for(Be=l(Be);st<K.length;st++)mt=se(Be,X,st,K[st],de),mt!==null&&(e&&mt.alternate!==null&&Be.delete(mt.key===null?st:mt.key),F=h(mt,F,st),St===null?Xe=mt:St.sibling=mt,St=mt);return e&&Be.forEach(function(Ra){return n(X,Ra)}),xt&&ji(X,st),Xe}function Qe(X,F,K,de){if(K==null)throw Error(r(151));for(var Xe=null,St=null,Be=F,st=F=0,mt=null,Mt=K.next();Be!==null&&!Mt.done;st++,Mt=K.next()){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var Ra=$(X,Be,Mt.value,de);if(Ra===null){Be===null&&(Be=mt);break}e&&Be&&Ra.alternate===null&&n(X,Be),F=h(Ra,F,st),St===null?Xe=Ra:St.sibling=Ra,St=Ra,Be=mt}if(Mt.done)return a(X,Be),xt&&ji(X,st),Xe;if(Be===null){for(;!Mt.done;st++,Mt=K.next())Mt=pe(X,Mt.value,de),Mt!==null&&(F=h(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return xt&&ji(X,st),Xe}for(Be=l(Be);!Mt.done;st++,Mt=K.next())Mt=se(Be,X,st,Mt.value,de),Mt!==null&&(e&&Mt.alternate!==null&&Be.delete(Mt.key===null?st:Mt.key),F=h(Mt,F,st),St===null?Xe=Mt:St.sibling=Mt,St=Mt);return e&&Be.forEach(function(Z0){return n(X,Z0)}),xt&&ji(X,st),Xe}function Ut(X,F,K,de){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case b:e:{for(var Xe=K.key;F!==null;){if(F.key===Xe){if(Xe=K.type,Xe===R){if(F.tag===7){a(X,F.sibling),de=u(F,K.props.children),de.return=X,X=de;break e}}else if(F.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Ja(Xe)===F.type){a(X,F.sibling),de=u(F,K.props),al(de,K),de.return=X,X=de;break e}a(X,F);break}else n(X,F);F=F.sibling}K.type===R?(de=Wa(K.props.children,X.mode,de,K.key),de.return=X,X=de):(de=ro(K.type,K.key,K.props,null,X.mode,de),al(de,K),de.return=X,X=de)}return x(X);case A:e:{for(Xe=K.key;F!==null;){if(F.key===Xe)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(X,F.sibling),de=u(F,K.children||[]),de.return=X,X=de;break e}else{a(X,F);break}else n(X,F);F=F.sibling}de=gu(K,X.mode,de),de.return=X,X=de}return x(X);case J:return K=Ja(K),Ut(X,F,K,de)}if(he(K))return ze(X,F,K,de);if(ce(K)){if(Xe=ce(K),typeof Xe!="function")throw Error(r(150));return K=Xe.call(K),Qe(X,F,K,de)}if(typeof K.then=="function")return Ut(X,F,po(K),de);if(K.$$typeof===C)return Ut(X,F,co(X,K),de);mo(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(X,F.sibling),de=u(F,K),de.return=X,X=de):(a(X,F),de=mu(K,X.mode,de),de.return=X,X=de),x(X)):a(X,F)}return function(X,F,K,de){try{il=0;var Xe=Ut(X,F,K,de);return Ws=null,Xe}catch(Be){if(Be===qs||Be===ho)throw Be;var St=Hn(29,Be,null,X.mode);return St.lanes=de,St.return=X,St}finally{}}}var es=yp(!0),Sp=yp(!1),ha=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=so(e),ap(e,null,a),n}return ao(e,l,n,a),so(e)}function sl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Rs(e,a)}}function Cu(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function rl(){if(Du){var e=Xs;if(e!==null)throw e}}function ll(e,n,a,l){Du=!1;var u=e.updateQueue;ha=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var I=E,Q=I.next;I.next=null,x===null?h=Q:x.next=Q,x=I;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,E=ue.lastBaseUpdate,E!==x&&(E===null?ue.firstBaseUpdate=Q:E.next=Q,ue.lastBaseUpdate=I))}if(h!==null){var pe=u.baseState;x=0,ue=Q=I=null,E=h;do{var $=E.lane&-536870913,se=$!==E.lane;if(se?(pt&$)===$:(l&$)===$){$!==0&&$===ks&&(Du=!0),ue!==null&&(ue=ue.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ze=e,Qe=E;$=n;var Ut=a;switch(Qe.tag){case 1:if(ze=Qe.payload,typeof ze=="function"){pe=ze.call(Ut,pe,$);break e}pe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Qe.payload,$=typeof ze=="function"?ze.call(Ut,pe,$):ze,$==null)break e;pe=y({},pe,$);break e;case 2:ha=!0}}$=E.callback,$!==null&&(e.flags|=64,se&&(e.flags|=8192),se=u.callbacks,se===null?u.callbacks=[$]:se.push($))}else se={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ue===null?(Q=ue=se,I=pe):ue=ue.next=se,x|=$;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;se=E,E=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ue===null&&(I=pe),u.baseState=I,u.firstBaseUpdate=Q,u.lastBaseUpdate=ue,h===null&&(u.shared.lanes=0),_a|=x,e.lanes=x,e.memoizedState=pe}}function Mp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mp(a[e],n)}var Ys=U(null),go=U(0);function Ep(e,n){e=ki,ve(go,e),ve(Ys,n),ki=e|n.baseLanes}function Uu(){ve(go,ki),ve(Ys,Ys.current)}function ju(){ki=go.current,ne(Ys),ne(go)}var Gn=U(null),ti=null;function ma(e){var n=e.alternate;ve(Zt,Zt.current&1),ve(Gn,e),ti===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(ti=e)}function Lu(e){ve(Zt,Zt.current),ve(Gn,e),ti===null&&(ti=e)}function Tp(e){e.tag===22?(ve(Zt,Zt.current),ve(Gn,e),ti===null&&(ti=e)):ga()}function ga(){ve(Zt,Zt.current),ve(Gn,Gn.current)}function Vn(e){ne(Gn),ti===e&&(ti=null),ne(Zt)}var Zt=U(0);function xo(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Fd(a)||Hd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pi=0,at=null,Ct=null,$t=null,vo=!1,Zs=!1,ts=!1,_o=0,ol=0,Ks=null,B_=0;function qt(){throw Error(r(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Fn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,l,u,h){return Pi=h,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,j.H=e===null||e.memoizedState===null?om:Qu,ts=!1,h=a(l,u),ts=!1,Zs&&(h=Np(n,a,l,u)),Ap(e),h}function Ap(e){j.H=dl;var n=Ct!==null&&Ct.next!==null;if(Pi=0,$t=Ct=at=null,vo=!1,ol=0,Ks=null,n)throw Error(r(300));e===null||en||(e=e.dependencies,e!==null&&oo(e)&&(en=!0))}function Np(e,n,a,l){at=e;var u=0;do{if(Zs&&(Ks=null),ol=0,Zs=!1,25<=u)throw Error(r(301));if(u+=1,$t=Ct=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}j.H=cm,h=n(a,l)}while(Zs);return h}function F_(){var e=j.H,n=e.useState()[0];return n=typeof n.then=="function"?cl(n):n,e=e.useState()[0],(Ct!==null?Ct.memoizedState:null)!==e&&(at.flags|=1024),n}function Iu(){var e=_o!==0;return _o=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(vo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vo=!1}Pi=0,$t=Ct=at=null,Zs=!1,ol=_o=0,Ks=null}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?at.memoizedState=$t=e:$t=$t.next=e,$t}function Kt(){if(Ct===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Ct.next;var n=$t===null?at.memoizedState:$t.next;if(n!==null)$t=n,Ct=e;else{if(e===null)throw at.alternate===null?Error(r(467)):Error(r(310));Ct=e,e={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},$t===null?at.memoizedState=$t=e:$t=$t.next=e}return $t}function yo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(e){var n=ol;return ol+=1,Ks===null&&(Ks=[]),e=xp(Ks,e,n),n=at,($t===null?n.memoizedState:$t.next)===null&&(n=n.alternate,j.H=n===null||n.memoizedState===null?om:Qu),e}function So(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cl(e);if(e.$$typeof===C)return pn(e)}throw Error(r(438,String(e)))}function Fu(e){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=at.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yo(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=w;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function Mo(e){var n=Kt();return Hu(n,Ct,e)}function Hu(e,n,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=e.baseQueue,h=l.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,l.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var E=x=null,I=null,Q=n,ue=!1;do{var pe=Q.lane&-536870913;if(pe!==Q.lane?(pt&pe)===pe:(Pi&pe)===pe){var $=Q.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pe===ks&&(ue=!0);else if((Pi&$)===$){Q=Q.next,$===ks&&(ue=!0);continue}else pe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(E=I=pe,x=h):I=I.next=pe,at.lanes|=$,_a|=$;pe=Q.action,ts&&a(h,pe),h=Q.hasEagerState?Q.eagerState:a(h,pe)}else $={lane:pe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(E=I=$,x=h):I=I.next=$,at.lanes|=pe,_a|=pe;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?x=h:I.next=E,!Fn(h,e.memoizedState)&&(en=!0,ue&&(a=Xs,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=I,l.lastRenderedState=h}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Gu(e){var n=Kt(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Fn(h,n.memoizedState)||(en=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,l]}function wp(e,n,a){var l=at,u=Kt(),h=xt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Fn((Ct||u).memoizedState,a);if(x&&(u.memoizedState=a,en=!0),u=u.queue,Xu(Dp.bind(null,l,u,e),[e]),u.getSnapshot!==n||x||$t!==null&&$t.memoizedState.tag&1){if(l.flags|=2048,Qs(9,{destroy:void 0},Cp.bind(null,l,u,a,n),null),Lt===null)throw Error(r(349));h||(Pi&127)!==0||Rp(l,n,a)}return a}function Rp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=yo(),at.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Cp(e,n,a,l){n.value=a,n.getSnapshot=l,Up(n)&&jp(e)}function Dp(e,n,a){return a(function(){Up(n)&&jp(e)})}function Up(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Fn(e,a)}catch{return!0}}function jp(e){var n=qa(e,2);n!==null&&Ln(n,e,2)}function Vu(e){var n=An();if(typeof e=="function"){var a=e;if(e=a(),ts){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Lp(e,n,a,l){return e.baseState=a,Hu(e,Ct,typeof l=="function"?l:Ii)}function H_(e,n,a,l,u){if(To(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};j.T!==null?a(!0):h.isTransition=!1,l(h),a=n.pending,a===null?(h.next=n.pending=h,Op(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Op(e,n){var a=n.action,l=n.payload,u=e.state;if(n.isTransition){var h=j.T,x={};j.T=x;try{var E=a(u,l),I=j.S;I!==null&&I(x,E),Pp(e,n,E)}catch(Q){ku(e,n,Q)}finally{h!==null&&x.types!==null&&(h.types=x.types),j.T=h}}else try{h=a(u,l),Pp(e,n,h)}catch(Q){ku(e,n,Q)}}function Pp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ip(e,n,l)},function(l){return ku(e,n,l)}):Ip(e,n,a)}function Ip(e,n,a){n.status="fulfilled",n.value=a,zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Op(e,a)))}function ku(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,zp(n),n=n.next;while(n!==l)}e.action=null}function zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Bp(e,n){return n}function Fp(e,n){if(xt){var a=Lt.formState;if(a!==null){e:{var l=at;if(xt){if(It){t:{for(var u=It,h=ei;u.nodeType!==8;){if(!h){u=null;break t}if(u=ni(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){It=ni(u.nextSibling),l=u.data==="F!";break e}}ua(l)}l=!1}l&&(n=a[0])}}return a=An(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:n},a.queue=l,a=sm.bind(null,at,l),l.dispatch=a,l=Vu(!1),h=Ku.bind(null,at,!1,l.queue),l=An(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,a=H_.bind(null,at,u,h,a),u.dispatch=a,l.memoizedState=e,[n,a,!1]}function Hp(e){var n=Kt();return Gp(n,Ct,e)}function Gp(e,n,a){if(n=Hu(e,n,Bp)[0],e=Mo(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=cl(n)}catch(x){throw x===qs?ho:x}else l=n;n=Kt();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(at.flags|=2048,Qs(9,{destroy:void 0},G_.bind(null,u,a),null)),[l,h,e]}function G_(e,n){e.action=n}function Vp(e){var n=Kt(),a=Ct;if(a!==null)return Gp(n,a,e);Kt(),n=n.memoizedState,a=Kt();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Qs(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=at.updateQueue,n===null&&(n=yo(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function kp(){return Kt().memoizedState}function bo(e,n,a,l){var u=An();at.flags|=e,u.memoizedState=Qs(1|n,{destroy:void 0},a,l===void 0?null:l)}function Eo(e,n,a,l){var u=Kt();l=l===void 0?null:l;var h=u.memoizedState.inst;Ct!==null&&l!==null&&Ou(l,Ct.memoizedState.deps)?u.memoizedState=Qs(n,h,a,l):(at.flags|=e,u.memoizedState=Qs(1|n,h,a,l))}function Xp(e,n){bo(8390656,8,e,n)}function Xu(e,n){Eo(2048,8,e,n)}function V_(e){at.flags|=4;var n=at.updateQueue;if(n===null)n=yo(),at.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function qp(e){var n=Kt().memoizedState;return V_({ref:n,nextImpl:e}),function(){if((bt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Wp(e,n){return Eo(4,2,e,n)}function Yp(e,n){return Eo(4,4,e,n)}function Zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kp(e,n,a){a=a!=null?a.concat([e]):null,Eo(4,4,Zp.bind(null,n,e),a)}function qu(){}function Qp(e,n){var a=Kt();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Ou(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Jp(e,n){var a=Kt();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Ou(n,l[1]))return l[0];if(l=e(),ts){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[l,n],l}function Wu(e,n,a){return a===void 0||(Pi&1073741824)!==0&&(pt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$m(),at.lanes|=e,_a|=e,a)}function $p(e,n,a,l){return Fn(a,n)?a:Ys.current!==null?(e=Wu(e,a,l),Fn(e,n)||(en=!0),e):(Pi&42)===0||(Pi&1073741824)!==0&&(pt&261930)===0?(en=!0,e.memoizedState=a):(e=$m(),at.lanes|=e,_a|=e,n)}function em(e,n,a,l,u){var h=q.p;q.p=h!==0&&8>h?h:8;var x=j.T,E={};j.T=E,Ku(e,!1,n,a);try{var I=u(),Q=j.S;if(Q!==null&&Q(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ue=z_(I,l);ul(e,n,ue,qn(e))}else ul(e,n,l,qn(e))}catch(pe){ul(e,n,{then:function(){},status:"rejected",reason:pe},qn())}finally{q.p=h,x!==null&&E.types!==null&&(x.types=E.types),j.T=x}}function k_(){}function Yu(e,n,a,l){if(e.tag!==5)throw Error(r(476));var u=tm(e).queue;em(e,u,n,Z,a===null?k_:function(){return nm(e),a(l)})}function tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function nm(e){var n=tm(e);n.next===null&&(n=e.alternate.memoizedState),ul(e,n.next.queue,{},qn())}function Zu(){return pn(Nl)}function im(){return Kt().memoizedState}function am(){return Kt().memoizedState}function X_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=fa(a);var l=pa(n,e,a);l!==null&&(Ln(l,n,a),sl(l,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function q_(e,n,a){var l=qn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},To(e)?rm(n,a):(a=fu(e,n,a,l),a!==null&&(Ln(a,e,l),lm(a,n,l)))}function sm(e,n,a){var l=qn();ul(e,n,a,l)}function ul(e,n,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(To(e))rm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,E=h(x,a);if(u.hasEagerState=!0,u.eagerState=E,Fn(E,x))return ao(e,n,u,0),Lt===null&&io(),!1}catch{}finally{}if(a=fu(e,n,u,l),a!==null)return Ln(a,e,l),lm(a,n,l),!0}return!1}function Ku(e,n,a,l){if(l={lane:2,revertLane:wd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},To(e)){if(n)throw Error(r(479))}else n=fu(e,a,l,2),n!==null&&Ln(n,e,2)}function To(e){var n=e.alternate;return e===at||n!==null&&n===at}function rm(e,n){Zs=vo=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lm(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Rs(e,a)}}var dl={readContext:pn,use:So,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt};dl.useEffectEvent=qt;var om={readContext:pn,use:So,useCallback:function(e,n){return An().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Xp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bo(4194308,4,Zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bo(4194308,4,e,n)},useInsertionEffect:function(e,n){bo(4,2,e,n)},useMemo:function(e,n){var a=An();n=n===void 0?null:n;var l=e();if(ts){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=An();if(a!==void 0){var u=a(n);if(ts){Ye(!0);try{a(n)}finally{Ye(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=q_.bind(null,at,e),[l.memoizedState,e]},useRef:function(e){var n=An();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=sm.bind(null,at,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=An();return Wu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=em.bind(null,at,e.queue,!0,!1),An().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=at,u=An();if(xt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Lt===null)throw Error(r(349));(pt&127)!==0||Rp(l,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Xp(Dp.bind(null,l,h,e),[e]),l.flags|=2048,Qs(9,{destroy:void 0},Cp.bind(null,l,h,a,n),null),a},useId:function(){var e=An(),n=Lt.identifierPrefix;if(xt){var a=Mi,l=Si;a=(l&~(1<<32-Ze(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_o++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=B_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:Fp,useActionState:Fp,useOptimistic:function(e){var n=An();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,at,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return An().memoizedState=X_.bind(null,at)},useEffectEvent:function(e){var n=An(),a={impl:e};return n.memoizedState=a,function(){if((bt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:pn,use:So,useCallback:Qp,useContext:pn,useEffect:Xu,useImperativeHandle:Kp,useInsertionEffect:Wp,useLayoutEffect:Yp,useMemo:Jp,useReducer:Mo,useRef:kp,useState:function(){return Mo(Ii)},useDebugValue:qu,useDeferredValue:function(e,n){var a=Kt();return $p(a,Ct.memoizedState,e,n)},useTransition:function(){var e=Mo(Ii)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:cl(e),n]},useSyncExternalStore:wp,useId:im,useHostTransitionStatus:Zu,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var a=Kt();return Lp(a,Ct,e,n)},useMemoCache:Fu,useCacheRefresh:am};Qu.useEffectEvent=qp;var cm={readContext:pn,use:So,useCallback:Qp,useContext:pn,useEffect:Xu,useImperativeHandle:Kp,useInsertionEffect:Wp,useLayoutEffect:Yp,useMemo:Jp,useReducer:Gu,useRef:kp,useState:function(){return Gu(Ii)},useDebugValue:qu,useDeferredValue:function(e,n){var a=Kt();return Ct===null?Wu(a,e,n):$p(a,Ct.memoizedState,e,n)},useTransition:function(){var e=Gu(Ii)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:cl(e),n]},useSyncExternalStore:wp,useId:im,useHostTransitionStatus:Zu,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,n){var a=Kt();return Ct!==null?Lp(a,Ct,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:am};cm.useEffectEvent=qp;function Ju(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=qn(),u=fa(l);u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,l),n!==null&&(Ln(n,e,l),sl(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=qn(),u=fa(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,l),n!==null&&(Ln(n,e,l),sl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),l=fa(a);l.tag=2,n!=null&&(l.callback=n),n=pa(e,l,a),n!==null&&(Ln(n,e,a),sl(n,e,a))}};function um(e,n,a,l,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,x):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,l)||!Qr(u,h):!0}function dm(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function ns(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function hm(e){no(e)}function fm(e){console.error(e)}function pm(e){no(e)}function Ao(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function mm(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ed(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ao(e,n)},a}function gm(e){return e=fa(e),e.tag=3,e}function xm(e,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=l.value;e.payload=function(){return u(h)},e.callback=function(){mm(n,a,l)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){mm(n,a,l),typeof u!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function W_(e,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,u,!0),a=Gn.current,a!==null){switch(a.tag){case 31:case 13:return ti===null?zo():a.alternate===null&&Wt===0&&(Wt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===fo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Td(e,l,u)),!1;case 22:return a.flags|=65536,l===fo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Td(e,l,u)),!1}throw Error(r(435,a.tag))}return Td(e,l,u),zo(),!1}if(xt)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==_u&&(e=Error(r(422),{cause:l}),el(Qn(e,a)))):(l!==_u&&(n=Error(r(423),{cause:l}),el(Qn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Qn(l,a),u=ed(e.stateNode,l,u),Cu(e,u),Wt!==4&&(Wt=2)),!1;var h=Error(r(520),{cause:l});if(h=Qn(h,a),_l===null?_l=[h]:_l.push(h),Wt!==4&&(Wt=2),n===null)return!0;l=Qn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ed(a.stateNode,l,e),Cu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ya===null||!ya.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=gm(u),xm(u,e,a,l),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var td=Error(r(461)),en=!1;function mn(e,n,a,l){n.child=e===null?Sp(n,null,a,l):es(n,e.child,a,l)}function vm(e,n,a,l,u){a=a.render;var h=n.ref;if("ref"in l){var x={};for(var E in l)E!=="ref"&&(x[E]=l[E])}else x=l;return Ka(n),l=Pu(e,n,a,x,h,u),E=Iu(),e!==null&&!en?(zu(e,n,u),zi(e,n,u)):(xt&&E&&xu(n),n.flags|=1,mn(e,n,l,u),n.child)}function _m(e,n,a,l,u){if(e===null){var h=a.type;return typeof h=="function"&&!pu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,ym(e,n,h,l,u)):(e=ro(a.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!cd(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(x,l)&&e.ref===n.ref)return zi(e,n,u)}return n.flags|=1,e=Ui(h,l),e.ref=n.ref,e.return=n,n.child=e}function ym(e,n,a,l,u){if(e!==null){var h=e.memoizedProps;if(Qr(h,l)&&e.ref===n.ref)if(en=!1,n.pendingProps=l=h,cd(e,u))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,zi(e,n,u)}return nd(e,n,a,l,u)}function Sm(e,n,a,l){var u=l.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~h}else l=0,n.child=null;return Mm(e,n,h,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&uo(n,h!==null?h.cachePool:null),h!==null?Ep(n,h):Uu(),Tp(n);else return l=n.lanes=536870912,Mm(e,n,h!==null?h.baseLanes|a:a,a,l)}else h!==null?(uo(n,h.cachePool),Ep(n,h),ga(),n.memoizedState=null):(e!==null&&uo(n,null),Uu(),ga());return mn(e,n,u,a),n.child}function hl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mm(e,n,a,l,u){var h=Au();return h=h===null?null:{parent:Jt._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&uo(n,null),Uu(),Tp(n),e!==null&&Vs(e,n,l,!0),n.childLanes=u,null}function No(e,n){return n=Ro({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function bm(e,n,a){return es(n,e.child,null,a),e=No(n,n.pendingProps),e.flags|=2,Vn(n),n.memoizedState=null,e}function Y_(e,n,a){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(l.mode==="hidden")return e=No(n,l),n.lanes=536870912,hl(null,e);if(Lu(n),(e=It)?(e=Og(e,ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=rp(e),a.return=n,n.child=a,fn=n,It=null)):e=null,e===null)throw ua(n);return n.lanes=536870912,null}return No(n,l)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(Lu(n),u)if(n.flags&256)n.flags&=-257,n=bm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(en||Vs(e,n,a,!1),u=(a&e.childLanes)!==0,en||u){if(l=Lt,l!==null&&(x=zr(l,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,qa(e,x),Ln(l,e,x),td;zo(),n=bm(e,n,a)}else e=h.treeContext,It=ni(x.nextSibling),fn=n,xt=!0,ca=null,ei=!1,e!==null&&cp(n,e),n=No(n,l),n.flags|=4096;return n}return e=Ui(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nd(e,n,a,l,u){return Ka(n),a=Pu(e,n,a,l,void 0,u),l=Iu(),e!==null&&!en?(zu(e,n,u),zi(e,n,u)):(xt&&l&&xu(n),n.flags|=1,mn(e,n,a,u),n.child)}function Em(e,n,a,l,u,h){return Ka(n),n.updateQueue=null,a=Np(n,l,a,u),Ap(e),l=Iu(),e!==null&&!en?(zu(e,n,h),zi(e,n,h)):(xt&&l&&xu(n),n.flags|=1,mn(e,n,a,h),n.child)}function Tm(e,n,a,l,u){if(Ka(n),n.stateNode===null){var h=Bs,x=a.contextType;typeof x=="object"&&x!==null&&(h=pn(x)),h=new a(l,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=$u,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=l,h.state=n.memoizedState,h.refs={},wu(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?pn(x):Bs,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Ju(n,a,x,l),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&$u.enqueueReplaceState(h,h.state,null),ll(n,l,h,u),rl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){h=n.stateNode;var E=n.memoizedProps,I=ns(a,E);h.props=I;var Q=h.context,ue=a.contextType;x=Bs,typeof ue=="object"&&ue!==null&&(x=pn(ue));var pe=a.getDerivedStateFromProps;ue=typeof pe=="function"||typeof h.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ue||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E||Q!==x)&&dm(n,h,l,x),ha=!1;var $=n.memoizedState;h.state=$,ll(n,l,h,u),rl(),Q=n.memoizedState,E||$!==Q||ha?(typeof pe=="function"&&(Ju(n,a,pe,l),Q=n.memoizedState),(I=ha||um(n,a,I,l,$,Q,x))?(ue||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=Q),h.props=l,h.state=Q,h.context=x,l=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{h=n.stateNode,Ru(e,n),x=n.memoizedProps,ue=ns(a,x),h.props=ue,pe=n.pendingProps,$=h.context,Q=a.contextType,I=Bs,typeof Q=="object"&&Q!==null&&(I=pn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==pe||$!==I)&&dm(n,h,l,I),ha=!1,$=n.memoizedState,h.state=$,ll(n,l,h,u),rl();var se=n.memoizedState;x!==pe||$!==se||ha||e!==null&&e.dependencies!==null&&oo(e.dependencies)?(typeof E=="function"&&(Ju(n,a,E,l),se=n.memoizedState),(ue=ha||um(n,a,ue,l,$,se,I)||e!==null&&e.dependencies!==null&&oo(e.dependencies))?(Q||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,se,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,se,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=se),h.props=l,h.state=se,h.context=I,l=ue):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),l=!1)}return h=l,wo(e,n),l=(n.flags&128)!==0,h||l?(h=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&l?(n.child=es(n,e.child,null,u),n.child=es(n,null,a,u)):mn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=zi(e,n,u),e}function Am(e,n,a,l){return Ya(),n.flags|=256,mn(e,n,a,l),n.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(e){return{baseLanes:e,cachePool:mp()}}function sd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Xn),e}function Nm(e,n,a){var l=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(Zt.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(u?ma(n):ga(),(e=It)?(e=Og(e,ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=rp(e),a.return=n,n.child=a,fn=n,It=null)):e=null,e===null)throw ua(n);return Hd(e)?n.lanes=32:n.lanes=536870912,null}var E=l.children;return l=l.fallback,u?(ga(),u=n.mode,E=Ro({mode:"hidden",children:E},u),l=Wa(l,u,a,null),E.return=n,l.return=n,E.sibling=l,n.child=E,l=n.child,l.memoizedState=ad(a),l.childLanes=sd(e,x,a),n.memoizedState=id,hl(null,l)):(ma(n),rd(n,E))}var I=e.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(h)n.flags&256?(ma(n),n.flags&=-257,n=ld(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),E=l.fallback,u=n.mode,l=Ro({mode:"visible",children:l.children},u),E=Wa(E,u,a,null),E.flags|=2,l.return=n,E.return=n,l.sibling=E,n.child=l,es(n,e.child,null,a),l=n.child,l.memoizedState=ad(a),l.childLanes=sd(e,x,a),n.memoizedState=id,n=hl(null,l));else if(ma(n),Hd(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Q=x.dgst;x=Q,l=Error(r(419)),l.stack="",l.digest=x,el({value:l,source:null,stack:null}),n=ld(e,n,a)}else if(en||Vs(e,n,a,!1),x=(a&e.childLanes)!==0,en||x){if(x=Lt,x!==null&&(l=zr(x,a),l!==0&&l!==I.retryLane))throw I.retryLane=l,qa(e,l),Ln(x,e,l),td;Fd(E)||zo(),n=ld(e,n,a)}else Fd(E)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,It=ni(E.nextSibling),fn=n,xt=!0,ca=null,ei=!1,e!==null&&cp(n,e),n=rd(n,l.children),n.flags|=4096);return n}return u?(ga(),E=l.fallback,u=n.mode,I=e.child,Q=I.sibling,l=Ui(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,Q!==null?E=Ui(Q,E):(E=Wa(E,u,a,null),E.flags|=2),E.return=n,l.return=n,l.sibling=E,n.child=l,hl(null,l),l=n.child,E=e.child.memoizedState,E===null?E=ad(a):(u=E.cachePool,u!==null?(I=Jt._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=mp(),E={baseLanes:E.baseLanes|a,cachePool:u}),l.memoizedState=E,l.childLanes=sd(e,x,a),n.memoizedState=id,hl(e.child,l)):(ma(n),a=e.child,e=a.sibling,a=Ui(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function rd(e,n){return n=Ro({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ro(e,n){return e=Hn(22,e,null,n),e.lanes=0,e}function ld(e,n,a){return es(n,e.child,null,a),e=rd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wm(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Mu(e.return,n,a)}function od(e,n,a,l,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Rm(e,n,a){var l=n.pendingProps,u=l.revealOrder,h=l.tail;l=l.children;var x=Zt.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,ve(Zt,x),mn(e,n,l,a),l=xt?$r:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,a,n);else if(e.tag===19)wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&xo(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),od(n,!1,u,a,h,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&xo(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}od(n,!0,a,null,h,l);break;case"together":od(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),_a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ui(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ui(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&oo(e)))}function Z_(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),da(n,Jt,e.memoizedState.cache),Ya();break;case 27:case 5:nt(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Nm(e,n,a):(ma(n),e=zi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var u=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Vs(e,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return Rm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(Zt,Zt.current),l)break;return null;case 22:return n.lanes=0,Sm(e,n,a,n.pendingProps);case 24:da(n,Jt,e.memoizedState.cache)}return zi(e,n,a)}function Cm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!cd(e,a)&&(n.flags&128)===0)return en=!1,Z_(e,n,a);en=(e.flags&131072)!==0}else en=!1,xt&&(n.flags&1048576)!==0&&op(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=Ja(n.elementType),n.type=e,typeof e=="function")pu(e)?(l=ns(e,l),n.tag=1,n=Tm(null,n,e,l,a)):(n.tag=0,n=nd(null,n,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=vm(null,n,e,l,a);break e}else if(u===O){n.tag=14,n=_m(null,n,e,l,a);break e}}throw n=me(e)||e,Error(r(306,n,""))}}return n;case 0:return nd(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=ns(l,n.pendingProps),Tm(e,n,l,u,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var h=n.memoizedState;u=h.element,Ru(e,n),ll(n,l,null,a);var x=n.memoizedState;if(l=x.cache,da(n,Jt,l),l!==h.cache&&bu(n,[Jt],a,!0),rl(),l=x.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Am(e,n,l,a);break e}else if(l!==u){u=Qn(Error(r(424)),n),el(u),n=Am(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(It=ni(e.firstChild),fn=n,xt=!0,ca=null,ei=!0,a=Sp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ya(),l===u){n=zi(e,n,a);break e}mn(e,n,l,a)}n=n.child}return n;case 26:return wo(e,n),e===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,l=Xo(ye.current).createElement(a),l[Qt]=n,l[vn]=e,gn(l,a,e),Ie(l),n.stateNode=l):n.memoizedState=Hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&xt&&(l=n.stateNode=zg(n.type,n.pendingProps,ye.current),fn=n,ei=!0,u=It,Ea(n.type)?(Gd=u,It=ni(l.firstChild)):It=u),mn(e,n,n.pendingProps.children,a),wo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((u=l=It)&&(l=T0(l,n.type,n.pendingProps,ei),l!==null?(n.stateNode=l,fn=n,It=ni(l.firstChild),ei=!1,u=!0):u=!1),u||ua(n)),nt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,l=h.children,Id(u,h)?l=null:x!==null&&Id(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,F_,null,null,a),Nl._currentValue=u),wo(e,n),mn(e,n,l,a),n.child;case 6:return e===null&&xt&&((e=a=It)&&(a=A0(a,n.pendingProps,ei),a!==null?(n.stateNode=a,fn=n,It=null,e=!0):e=!1),e||ua(n)),null;case 13:return Nm(e,n,a);case 4:return He(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=es(n,null,l,a):mn(e,n,l,a),n.child;case 11:return vm(e,n,n.type,n.pendingProps,a);case 7:return mn(e,n,n.pendingProps,a),n.child;case 8:return mn(e,n,n.pendingProps.children,a),n.child;case 12:return mn(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,da(n,n.type,l.value),mn(e,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Ka(n),u=pn(u),l=l(u),n.flags|=1,mn(e,n,l,a),n.child;case 14:return _m(e,n,n.type,n.pendingProps,a);case 15:return ym(e,n,n.type,n.pendingProps,a);case 19:return Rm(e,n,a);case 31:return Y_(e,n,a);case 22:return Sm(e,n,a,n.pendingProps);case 24:return Ka(n),l=pn(Jt),e===null?(u=Au(),u===null&&(u=Lt,h=Eu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:l,cache:u},wu(n),da(n,Jt,u)):((e.lanes&a)!==0&&(Ru(e,n),ll(n,null,null,a),rl()),u=e.memoizedState,h=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,Jt,l)):(l=h.cache,da(n,Jt,l),l!==u.cache&&bu(n,[Jt],a,!0))),mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Bi(e){e.flags|=4}function ud(e,n,a,l,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ig())e.flags|=8192;else throw $a=fo,Nu}else e.flags&=-16777217}function Dm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qg(n))if(ig())e.flags|=8192;else throw $a=fo,Nu}function Co(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?vt():536870912,e.lanes|=n,tr|=n)}function fl(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function zt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function K_(e,n,a){var l=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(n),null;case 1:return zt(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Oi(Jt),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gs(n)?Bi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),zt(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Bi(n),h!==null?(zt(n),Dm(n,h)):(zt(n),ud(n,u,null,l,a))):h?h!==e.memoizedState?(Bi(n),zt(n),Dm(n,h)):(zt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&Bi(n),zt(n),ud(n,u,e,l,a)),null;case 27:if(jt(n),a=ye.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Bi(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return zt(n),null}e=W.current,Gs(n)?up(n):(e=zg(u,l,a),n.stateNode=e,Bi(n))}return zt(n),null;case 5:if(jt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Bi(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return zt(n),null}if(h=W.current,Gs(n))up(n);else{var x=Xo(ye.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?x.createElement(u,{is:l.is}):x.createElement(u)}}h[Qt]=n,h[vn]=l;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;e:switch(gn(h,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Bi(n)}}return zt(n),ud(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Bi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=ye.current,Gs(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,u=fn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ng(e.nodeValue,a)),e||ua(n,!0)}else e=Xo(e).createTextNode(l),e[Qt]=n,n.stateNode=e}return zt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Gs(n),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Qt]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;zt(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Vn(n),n):(Vn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return zt(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Qt]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;zt(n),u=!1}else u=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Vn(n),n):(Vn(n),null)}return Vn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==u&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Co(n,n.updateQueue),zt(n),null);case 4:return Fe(),e===null&&Ud(n.stateNode.containerInfo),zt(n),null;case 10:return Oi(n.type),zt(n),null;case 19:if(ne(Zt),l=n.memoizedState,l===null)return zt(n),null;if(u=(n.flags&128)!==0,h=l.rendering,h===null)if(u)fl(l,!1);else{if(Wt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=xo(e),h!==null){for(n.flags|=128,fl(l,!1),e=h.updateQueue,n.updateQueue=e,Co(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)sp(a,e),a=a.sibling;return ve(Zt,Zt.current&1|2),xt&&ji(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&xe()>Oo&&(n.flags|=128,u=!0,fl(l,!1),n.lanes=4194304)}else{if(!u)if(e=xo(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Co(n,e),fl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!xt)return zt(n),null}else 2*xe()-l.renderingStartTime>Oo&&a!==536870912&&(n.flags|=128,u=!0,fl(l,!1),n.lanes=4194304);l.isBackwards?(h.sibling=n.child,n.child=h):(e=l.last,e!==null?e.sibling=h:n.child=h,l.last=h)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=xe(),e.sibling=null,a=Zt.current,ve(Zt,u?a&1|2:a&1),xt&&ji(n,l.treeForkCount),e):(zt(n),null);case 22:case 23:return Vn(n),ju(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(zt(n),n.subtreeFlags&6&&(n.flags|=8192)):zt(n),a=n.updateQueue,a!==null&&Co(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&ne(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oi(Jt),zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Q_(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oi(Jt),Fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return jt(n),null;case 31:if(n.memoizedState!==null){if(Vn(n),n.alternate===null)throw Error(r(340));Ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Vn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(Zt),null;case 4:return Fe(),null;case 10:return Oi(n.type),null;case 22:case 23:return Vn(n),ju(),e!==null&&ne(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oi(Jt),null;case 25:return null;default:return null}}function Um(e,n){switch(vu(n),n.tag){case 3:Oi(Jt),Fe();break;case 26:case 27:case 5:jt(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&Vn(n);break;case 13:Vn(n);break;case 19:ne(Zt);break;case 10:Oi(n.type);break;case 22:case 23:Vn(n),ju(),e!==null&&ne(Qa);break;case 24:Oi(Jt)}}function pl(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var h=a.create,x=a.inst;l=h(),x.destroy=l}a=a.next}while(a!==u)}}catch(E){wt(n,n.return,E)}}function xa(e,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var h=u.next;l=h;do{if((l.tag&e)===e){var x=l.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,u=n;var I=a,Q=E;try{Q()}catch(ue){wt(u,I,ue)}}}l=l.next}while(l!==h)}}catch(ue){wt(n,n.return,ue)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{bp(n,a)}catch(l){wt(e,e.return,l)}}}function Lm(e,n,a){a.props=ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){wt(e,n,l)}}function ml(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){wt(e,n,u)}}function bi(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){wt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){wt(e,n,u)}else a.current=null}function Om(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){wt(e,e.return,u)}}function dd(e,n,a){try{var l=e.stateNode;_0(l,e.type,a,n),l[vn]=n}catch(u){wt(e,e.return,u)}}function Pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ci));else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(fd(e,n,a),e=e.sibling;e!==null;)fd(e,n,a),e=e.sibling}function Do(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Do(e,n,a),e=e.sibling;e!==null;)Do(e,n,a),e=e.sibling}function Im(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);gn(n,l,a),n[Qt]=e,n[vn]=a}catch(h){wt(e,e.return,h)}}var Fi=!1,tn=!1,pd=!1,zm=typeof WeakSet=="function"?WeakSet:Set,un=null;function J_(e,n){if(e=e.containerInfo,Od=Jo,e=Kf(e),lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var x=0,E=-1,I=-1,Q=0,ue=0,pe=e,$=null;t:for(;;){for(var se;pe!==a||u!==0&&pe.nodeType!==3||(E=x+u),pe!==h||l!==0&&pe.nodeType!==3||(I=x+l),pe.nodeType===3&&(x+=pe.nodeValue.length),(se=pe.firstChild)!==null;)$=pe,pe=se;for(;;){if(pe===e)break t;if($===a&&++Q===u&&(E=x),$===h&&++ue===l&&(I=x),(se=pe.nextSibling)!==null)break;pe=$,$=pe.parentNode}pe=se}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pd={focusedElem:e,selectionRange:a},Jo=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,l=a.stateNode;try{var ze=ns(a.type,u);e=l.getSnapshotBeforeUpdate(ze,h),l.__reactInternalSnapshotBeforeUpdate=e}catch(Qe){wt(a,a.return,Qe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function Bm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Gi(e,a),l&4&&pl(5,a);break;case 1:if(Gi(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){wt(a,a.return,x)}else{var u=ns(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){wt(a,a.return,x)}}l&64&&jm(a),l&512&&ml(a,a.return);break;case 3:if(Gi(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bp(e,n)}catch(x){wt(a,a.return,x)}}break;case 27:n===null&&l&4&&Im(a);case 26:case 5:Gi(e,a),n===null&&l&4&&Om(a),l&512&&ml(a,a.return);break;case 12:Gi(e,a);break;case 31:Gi(e,a),l&4&&Gm(e,a);break;case 13:Gi(e,a),l&4&&Vm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=l0.bind(null,a),N0(e,a))));break;case 22:if(l=a.memoizedState!==null||Fi,!l){n=n!==null&&n.memoizedState!==null||tn,u=Fi;var h=tn;Fi=l,(tn=n)&&!h?Vi(e,a,(a.subtreeFlags&8772)!==0):Gi(e,a),Fi=u,tn=h}break;case 30:break;default:Gi(e,a)}}function Fm(e){var n=e.alternate;n!==null&&(e.alternate=null,Fm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Y(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Gt=null,Cn=!1;function Hi(e,n,a){for(a=a.child;a!==null;)Hm(e,n,a),a=a.sibling}function Hm(e,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:tn||bi(a,n),Hi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||bi(a,n);var l=Gt,u=Cn;Ea(a.type)&&(Gt=a.stateNode,Cn=!1),Hi(e,n,a),El(a.stateNode),Gt=l,Cn=u;break;case 5:tn||bi(a,n);case 6:if(l=Gt,u=Cn,Gt=null,Hi(e,n,a),Gt=l,Cn=u,Gt!==null)if(Cn)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(a.stateNode)}catch(h){wt(a,n,h)}else try{Gt.removeChild(a.stateNode)}catch(h){wt(a,n,h)}break;case 18:Gt!==null&&(Cn?(e=Gt,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cr(e)):jg(Gt,a.stateNode));break;case 4:l=Gt,u=Cn,Gt=a.stateNode.containerInfo,Cn=!0,Hi(e,n,a),Gt=l,Cn=u;break;case 0:case 11:case 14:case 15:xa(2,a,n),tn||xa(4,a,n),Hi(e,n,a);break;case 1:tn||(bi(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Lm(a,n,l)),Hi(e,n,a);break;case 21:Hi(e,n,a);break;case 22:tn=(l=tn)||a.memoizedState!==null,Hi(e,n,a),tn=l;break;default:Hi(e,n,a)}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cr(e)}catch(a){wt(n,n.return,a)}}}function Vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cr(e)}catch(a){wt(n,n.return,a)}}function $_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zm),n;default:throw Error(r(435,e.tag))}}function Uo(e,n){var a=$_(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var u=o0.bind(null,e,l);l.then(u,u)}})}function Dn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],h=e,x=n,E=x;e:for(;E!==null;){switch(E.tag){case 27:if(Ea(E.type)){Gt=E.stateNode,Cn=!1;break e}break;case 5:Gt=E.stateNode,Cn=!1;break e;case 3:case 4:Gt=E.stateNode.containerInfo,Cn=!0;break e}E=E.return}if(Gt===null)throw Error(r(160));Hm(h,x,u),Gt=null,Cn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,e),n=n.sibling}var ci=null;function km(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dn(n,e),Un(e),l&4&&(xa(3,e,e.return),pl(3,e),xa(5,e,e.return));break;case 1:Dn(n,e),Un(e),l&512&&(tn||a===null||bi(a,a.return)),l&64&&Fi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=ci;if(Dn(n,e),Un(e),l&512&&(tn||a===null||bi(a,a.return)),l&4){var h=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":h=u.getElementsByTagName("title")[0],(!h||h[te]||h[Qt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(l),u.head.insertBefore(h,u.querySelector("head > title"))),gn(h,l,a),h[Qt]=e,Ie(h),l=h;break e;case"link":var x=kg("link","href",u).get(l+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(h=x[E],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break t}}h=u.createElement(l),gn(h,l,a),u.head.appendChild(h);break;case"meta":if(x=kg("meta","content",u).get(l+(a.content||""))){for(E=0;E<x.length;E++)if(h=x[E],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break t}}h=u.createElement(l),gn(h,l,a),u.head.appendChild(h);break;default:throw Error(r(468,l))}h[Qt]=e,Ie(h),l=h}e.stateNode=l}else Xg(u,e.type,e.stateNode);else e.stateNode=Vg(u,l,e.memoizedProps);else h!==l?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,l===null?Xg(u,e.type,e.stateNode):Vg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&dd(e,e.memoizedProps,a.memoizedProps)}break;case 27:Dn(n,e),Un(e),l&512&&(tn||a===null||bi(a,a.return)),a!==null&&l&4&&dd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Dn(n,e),Un(e),l&512&&(tn||a===null||bi(a,a.return)),e.flags&32){u=e.stateNode;try{Us(u,"")}catch(ze){wt(e,e.return,ze)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,dd(e,u,a!==null?a.memoizedProps:u)),l&1024&&(pd=!0);break;case 6:if(Dn(n,e),Un(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(ze){wt(e,e.return,ze)}}break;case 3:if(Yo=null,u=ci,ci=qo(n.containerInfo),Dn(n,e),ci=u,Un(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{cr(n.containerInfo)}catch(ze){wt(e,e.return,ze)}pd&&(pd=!1,Xm(e));break;case 4:l=ci,ci=qo(e.stateNode.containerInfo),Dn(n,e),Un(e),ci=l;break;case 12:Dn(n,e),Un(e);break;case 31:Dn(n,e),Un(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Uo(e,l)));break;case 13:Dn(n,e),Un(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lo=xe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Uo(e,l)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=Fi,ue=tn;if(Fi=Q||u,tn=ue||I,Dn(n,e),tn=ue,Fi=Q,Un(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Fi||tn||is(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=I.stateNode;var pe=I.memoizedProps.style,$=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(ze){wt(I,I.return,ze)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(ze){wt(I,I.return,ze)}}}else if(n.tag===18){if(a===null){I=n;try{var se=I.stateNode;u?Lg(se,!0):Lg(I.stateNode,!1)}catch(ze){wt(I,I.return,ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Uo(e,a))));break;case 19:Dn(n,e),Un(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Uo(e,l)));break;case 30:break;case 21:break;default:Dn(n,e),Un(e)}}function Un(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(Pm(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=hd(e);Do(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Us(x,""),a.flags&=-33);var E=hd(e);Do(e,E,x);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=hd(e);fd(e,Q,I);break;default:throw Error(r(161))}}catch(ue){wt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Gi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bm(e,n.alternate,n),n=n.sibling}function is(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),is(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Lm(n,n.return,a),is(n);break;case 27:El(n.stateNode);case 26:case 5:bi(n,n.return),is(n);break;case 22:n.memoizedState===null&&is(n);break;case 30:is(n);break;default:is(n)}e=e.sibling}}function Vi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Vi(u,h,a),pl(4,h);break;case 1:if(Vi(u,h,a),l=h,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){wt(l,l.return,Q)}if(l=h,u=l.updateQueue,u!==null){var E=l.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Mp(I[u],E)}catch(Q){wt(l,l.return,Q)}}a&&x&64&&jm(h),ml(h,h.return);break;case 27:Im(h);case 26:case 5:Vi(u,h,a),a&&l===null&&x&4&&Om(h),ml(h,h.return);break;case 12:Vi(u,h,a);break;case 31:Vi(u,h,a),a&&x&4&&Gm(u,h);break;case 13:Vi(u,h,a),a&&x&4&&Vm(u,h);break;case 22:h.memoizedState===null&&Vi(u,h,a),ml(h,h.return);break;case 30:break;default:Vi(u,h,a)}n=n.sibling}}function md(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&tl(a))}function gd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tl(e))}function ui(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(e,n,a,l),n=n.sibling}function qm(e,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ui(e,n,a,l),u&2048&&pl(9,n);break;case 1:ui(e,n,a,l);break;case 3:ui(e,n,a,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tl(e)));break;case 12:if(u&2048){ui(e,n,a,l),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,E=h.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){wt(n,n.return,I)}}else ui(e,n,a,l);break;case 31:ui(e,n,a,l);break;case 13:ui(e,n,a,l);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?ui(e,n,a,l):gl(e,n):h._visibility&2?ui(e,n,a,l):(h._visibility|=2,Js(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&md(x,n);break;case 24:ui(e,n,a,l),u&2048&&gd(n.alternate,n);break;default:ui(e,n,a,l)}}function Js(e,n,a,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,E=a,I=l,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Js(h,x,E,I,u),pl(8,x);break;case 23:break;case 22:var ue=x.stateNode;x.memoizedState!==null?ue._visibility&2?Js(h,x,E,I,u):gl(h,x):(ue._visibility|=2,Js(h,x,E,I,u)),u&&Q&2048&&md(x.alternate,x);break;case 24:Js(h,x,E,I,u),u&&Q&2048&&gd(x.alternate,x);break;default:Js(h,x,E,I,u)}n=n.sibling}}function gl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,u=l.flags;switch(l.tag){case 22:gl(a,l),u&2048&&md(l.alternate,l);break;case 24:gl(a,l),u&2048&&gd(l.alternate,l);break;default:gl(a,l)}n=n.sibling}}var xl=8192;function $s(e,n,a){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)Wm(e,n,a),e=e.sibling}function Wm(e,n,a){switch(e.tag){case 26:$s(e,n,a),e.flags&xl&&e.memoizedState!==null&&B0(a,ci,e.memoizedState,e.memoizedProps);break;case 5:$s(e,n,a);break;case 3:case 4:var l=ci;ci=qo(e.stateNode.containerInfo),$s(e,n,a),ci=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=xl,xl=16777216,$s(e,n,a),xl=l):$s(e,n,a));break;default:$s(e,n,a)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];un=l,Km(l,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zm(e),e=e.sibling}function Zm(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&xa(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jo(e)):vl(e);break;default:vl(e)}}function jo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];un=l,Km(l,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),jo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jo(n));break;default:jo(n)}e=e.sibling}}function Km(e,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,un=l;else e:for(a=e;un!==null;){l=un;var u=l.sibling,h=l.return;if(Fm(l),l===a){un=null;break e}if(u!==null){u.return=h,un=u;break e}un=h}}}var e0={getCacheForType:function(e){var n=pn(Jt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return pn(Jt).controller.signal}},t0=typeof WeakMap=="function"?WeakMap:Map,bt=0,Lt=null,dt=null,pt=0,Nt=0,kn=null,va=!1,er=!1,xd=!1,ki=0,Wt=0,_a=0,as=0,vd=0,Xn=0,tr=0,_l=null,jn=null,_d=!1,Lo=0,Qm=0,Oo=1/0,Po=null,ya=null,rn=0,Sa=null,nr=null,Xi=0,yd=0,Sd=null,Jm=null,yl=0,Md=null;function qn(){return(bt&2)!==0&&pt!==0?pt&-pt:j.T!==null?wd():Br()}function $m(){if(Xn===0)if((pt&536870912)===0||xt){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),Xn=e}else Xn=536870912;return e=Gn.current,e!==null&&(e.flags|=32),Xn}function Ln(e,n,a){(e===Lt&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)&&(ir(e,0),Ma(e,pt,Xn,!1)),xn(e,a),((bt&2)===0||e!==Lt)&&(e===Lt&&((bt&2)===0&&(as|=a),Wt===4&&Ma(e,pt,Xn,!1)),Ei(e))}function eg(e,n,a){if((bt&6)!==0)throw Error(r(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ot(e,n),u=l?a0(e,n):Ed(e,n,!0),h=l;do{if(u===0){er&&!l&&Ma(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!n0(a)){u=Ed(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var E=e;u=_l;var I=E.current.memoizedState.isDehydrated;if(I&&(ir(E,x).flags|=256),x=Ed(E,x,!1),x!==2){if(xd&&!I){E.errorRecoveryDisabledLanes|=h,as|=h,u=4;break e}h=jn,jn=u,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){ir(e,0),Ma(e,n,0,!0);break}e:{switch(l=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(l,n,Xn,!va);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Lo+300-xe(),10<u)){if(Ma(l,n,Xn,!va),ot(l,0,!0)!==0)break e;Xi=n,l.timeoutHandle=Dg(tg.bind(null,l,a,jn,Po,_d,n,Xn,as,tr,va,h,"Throttled",-0,0),u);break e}tg(l,a,jn,Po,_d,n,Xn,as,tr,va,h,null,-0,0)}}break}while(!0);Ei(e)}function tg(e,n,a,l,u,h,x,E,I,Q,ue,pe,$,se){if(e.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ci},Wm(n,h,pe);var ze=(h&62914560)===h?Lo-xe():(h&4194048)===h?Qm-xe():0;if(ze=F0(pe,ze),ze!==null){Xi=h,e.cancelPendingCommit=ze(cg.bind(null,e,n,h,a,l,u,x,E,I,ue,pe,null,$,se)),Ma(e,h,x,!Q);return}}cg(e,n,h,a,l,u,x,E,I)}function n0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],h=u.getSnapshot;u=u.value;try{if(!Fn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(e,n,a,l){n&=~vd,n&=~as,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var h=31-Ze(u),x=1<<h;l[h]=-1,u&=~x}a!==0&&yi(e,a,n)}function Io(){return(bt&6)===0?(Sl(0),!1):!0}function bd(){if(dt!==null){if(Nt===0)var e=dt.return;else e=dt,Li=Za=null,Bu(e),Ws=null,il=0,e=dt;for(;e!==null;)Um(e.alternate,e),e=e.return;dt=null}}function ir(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,M0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xi=0,bd(),Lt=e,dt=a=Ui(e.current,null),pt=n,Nt=0,kn=null,va=!1,er=Ot(e,n),xd=!1,tr=Xn=vd=as=_a=Wt=0,jn=_l=null,_d=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Ze(l),h=1<<u;n|=e[u],l&=~h}return ki=n,io(),a}function ng(e,n){at=null,j.H=dl,n===qs||n===ho?(n=vp(),Nt=3):n===Nu?(n=vp(),Nt=4):Nt=n===td?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,dt===null&&(Wt=1,Ao(e,Qn(n,e.current)))}function ig(){var e=Gn.current;return e===null?!0:(pt&4194048)===pt?ti===null:(pt&62914560)===pt||(pt&536870912)!==0?e===ti:!1}function ag(){var e=j.H;return j.H=dl,e===null?dl:e}function sg(){var e=j.A;return j.A=e0,e}function zo(){Wt=4,va||(pt&4194048)!==pt&&Gn.current!==null||(er=!0),(_a&134217727)===0&&(as&134217727)===0||Lt===null||Ma(Lt,pt,Xn,!1)}function Ed(e,n,a){var l=bt;bt|=2;var u=ag(),h=sg();(Lt!==e||pt!==n)&&(Po=null,ir(e,n)),n=!1;var x=Wt;e:do try{if(Nt!==0&&dt!==null){var E=dt,I=kn;switch(Nt){case 8:bd(),x=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var Q=Nt;if(Nt=0,kn=null,ar(e,E,I,Q),a&&er){x=0;break e}break;default:Q=Nt,Nt=0,kn=null,ar(e,E,I,Q)}}i0(),x=Wt;break}catch(ue){ng(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Li=Za=null,bt=l,j.H=u,j.A=h,dt===null&&(Lt=null,pt=0,io()),x}function i0(){for(;dt!==null;)rg(dt)}function a0(e,n){var a=bt;bt|=2;var l=ag(),u=sg();Lt!==e||pt!==n?(Po=null,Oo=xe()+500,ir(e,n)):er=Ot(e,n);e:do try{if(Nt!==0&&dt!==null){n=dt;var h=kn;t:switch(Nt){case 1:Nt=0,kn=null,ar(e,n,h,1);break;case 2:case 9:if(gp(h)){Nt=0,kn=null,lg(n);break}n=function(){Nt!==2&&Nt!==9||Lt!==e||(Nt=7),Ei(e)},h.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:gp(h)?(Nt=0,kn=null,lg(n)):(Nt=0,kn=null,ar(e,n,h,7));break;case 5:var x=null;switch(dt.tag){case 26:x=dt.memoizedState;case 5:case 27:var E=dt;if(x?qg(x):E.stateNode.complete){Nt=0,kn=null;var I=E.sibling;if(I!==null)dt=I;else{var Q=E.return;Q!==null?(dt=Q,Bo(Q)):dt=null}break t}}Nt=0,kn=null,ar(e,n,h,5);break;case 6:Nt=0,kn=null,ar(e,n,h,6);break;case 8:bd(),Wt=6;break e;default:throw Error(r(462))}}s0();break}catch(ue){ng(e,ue)}while(!0);return Li=Za=null,j.H=l,j.A=u,bt=a,dt!==null?0:(Lt=null,pt=0,io(),Wt)}function s0(){for(;dt!==null&&!ae();)rg(dt)}function rg(e){var n=Cm(e.alternate,e,ki);e.memoizedProps=e.pendingProps,n===null?Bo(e):dt=n}function lg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Em(a,n,n.pendingProps,n.type,void 0,pt);break;case 11:n=Em(a,n,n.pendingProps,n.type.render,n.ref,pt);break;case 5:Bu(n);default:Um(a,n),n=dt=sp(n,ki),n=Cm(a,n,ki)}e.memoizedProps=e.pendingProps,n===null?Bo(e):dt=n}function ar(e,n,a,l){Li=Za=null,Bu(n),Ws=null,il=0;var u=n.return;try{if(W_(e,u,n,a,pt)){Wt=1,Ao(e,Qn(a,e.current)),dt=null;return}}catch(h){if(u!==null)throw dt=u,h;Wt=1,Ao(e,Qn(a,e.current)),dt=null;return}n.flags&32768?(xt||l===1?e=!0:er||(pt&536870912)!==0?e=!1:(va=e=!0,(l===2||l===9||l===3||l===6)&&(l=Gn.current,l!==null&&l.tag===13&&(l.flags|=16384))),og(n,e)):Bo(n)}function Bo(e){var n=e;do{if((n.flags&32768)!==0){og(n,va);return}e=n.return;var a=K_(n.alternate,n,ki);if(a!==null){dt=a;return}if(n=n.sibling,n!==null){dt=n;return}dt=n=e}while(n!==null);Wt===0&&(Wt=5)}function og(e,n){do{var a=Q_(e.alternate,e);if(a!==null){a.flags&=32767,dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){dt=e;return}dt=e=a}while(e!==null);Wt=6,dt=null}function cg(e,n,a,l,u,h,x,E,I){e.cancelPendingCommit=null;do Fo();while(rn!==0);if((bt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=hu,Yl(e,a,h,x,E,I),e===Lt&&(dt=Lt=null,pt=0),nr=n,Sa=e,Xi=a,yd=h,Sd=u,Jm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c0(je,function(){return pg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,u=q.p,q.p=2,x=bt,bt|=4;try{J_(e,n,a)}finally{bt=x,q.p=u,j.T=l}}rn=1,ug(),dg(),hg()}}function ug(){if(rn===1){rn=0;var e=Sa,n=nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var l=q.p;q.p=2;var u=bt;bt|=4;try{km(n,e);var h=Pd,x=Kf(e.containerInfo),E=h.focusedElem,I=h.selectionRange;if(x!==E&&E&&E.ownerDocument&&Zf(E.ownerDocument.documentElement,E)){if(I!==null&&lu(E)){var Q=I.start,ue=I.end;if(ue===void 0&&(ue=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ue,E.value.length);else{var pe=E.ownerDocument||document,$=pe&&pe.defaultView||window;if($.getSelection){var se=$.getSelection(),ze=E.textContent.length,Qe=Math.min(I.start,ze),Ut=I.end===void 0?Qe:Math.min(I.end,ze);!se.extend&&Qe>Ut&&(x=Ut,Ut=Qe,Qe=x);var X=Yf(E,Qe),F=Yf(E,Ut);if(X&&F&&(se.rangeCount!==1||se.anchorNode!==X.node||se.anchorOffset!==X.offset||se.focusNode!==F.node||se.focusOffset!==F.offset)){var K=pe.createRange();K.setStart(X.node,X.offset),se.removeAllRanges(),Qe>Ut?(se.addRange(K),se.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),se.addRange(K))}}}}for(pe=[],se=E;se=se.parentNode;)se.nodeType===1&&pe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pe.length;E++){var de=pe[E];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Jo=!!Od,Pd=Od=null}finally{bt=u,q.p=l,j.T=a}}e.current=n,rn=2}}function dg(){if(rn===2){rn=0;var e=Sa,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var l=q.p;q.p=2;var u=bt;bt|=4;try{Bm(e,n.alternate,n)}finally{bt=u,q.p=l,j.T=a}}rn=3}}function hg(){if(rn===4||rn===3){rn=0,Se();var e=Sa,n=nr,a=Xi,l=Jm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,nr=Sa=null,fg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ya=null),aa(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=j.T,u=q.p,q.p=2,j.T=null;try{for(var h=e.onRecoverableError,x=0;x<l.length;x++){var E=l[x];h(E.value,{componentStack:E.stack})}}finally{j.T=n,q.p=u}}(Xi&3)!==0&&Fo(),Ei(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Md?yl++:(yl=0,Md=e):yl=0,Sl(0)}}function fg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,tl(n)))}function Fo(){return ug(),dg(),hg(),pg()}function pg(){if(rn!==5)return!1;var e=Sa,n=yd;yd=0;var a=aa(Xi),l=j.T,u=q.p;try{q.p=32>a?32:a,j.T=null,a=Sd,Sd=null;var h=Sa,x=Xi;if(rn=0,nr=Sa=null,Xi=0,(bt&6)!==0)throw Error(r(331));var E=bt;if(bt|=4,Zm(h.current),qm(h,h.current,x,a),bt=E,Sl(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ke,h)}catch{}return!0}finally{q.p=u,j.T=l,fg(e,n)}}function mg(e,n,a){n=Qn(a,n),n=ed(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(xn(e,2),Ei(e))}function wt(e,n,a){if(e.tag===3)mg(e,e,a);else for(;n!==null;){if(n.tag===3){mg(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ya===null||!ya.has(l))){e=Qn(a,e),a=gm(2),l=pa(n,a,2),l!==null&&(xm(a,l,n,e),xn(l,2),Ei(l));break}}n=n.return}}function Td(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new t0;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(xd=!0,u.add(a),e=r0.bind(null,e,n,a),n.then(e,e))}function r0(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Lt===e&&(pt&a)===a&&(Wt===4||Wt===3&&(pt&62914560)===pt&&300>xe()-Lo?(bt&2)===0&&ir(e,0):vd|=a,tr===pt&&(tr=0)),Ei(e)}function gg(e,n){n===0&&(n=vt()),e=qa(e,n),e!==null&&(xn(e,n),Ei(e))}function l0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),gg(e,a)}function o0(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),gg(e,a)}function c0(e,n){return L(e,n)}var Ho=null,sr=null,Ad=!1,Go=!1,Nd=!1,ba=0;function Ei(e){e!==sr&&e.next===null&&(sr===null?Ho=sr=e:sr=sr.next=e),Go=!0,Ad||(Ad=!0,d0())}function Sl(e,n){if(!Nd&&Go){Nd=!0;do for(var a=!1,l=Ho;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var h=0;else{var x=l.suspendedLanes,E=l.pingedLanes;h=(1<<31-Ze(42|e)+1)-1,h&=u&~(x&~E),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,yg(l,h))}else h=pt,h=ot(l,l===Lt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ot(l,h)||(a=!0,yg(l,h));l=l.next}while(a);Nd=!1}}function u0(){xg()}function xg(){Go=Ad=!1;var e=0;ba!==0&&S0()&&(e=ba);for(var n=xe(),a=null,l=Ho;l!==null;){var u=l.next,h=vg(l,n);h===0?(l.next=null,a===null?Ho=u:a.next=u,u===null&&(sr=a)):(a=l,(e!==0||(h&3)!==0)&&(Go=!0)),l=u}rn!==0&&rn!==5||Sl(e),ba!==0&&(ba=0)}function vg(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ze(h),E=1<<x,I=u[x];I===-1?((E&a)===0||(E&l)!==0)&&(u[x]=an(E,n)):I<=n&&(e.expiredLanes|=E),h&=~E}if(n=Lt,a=pt,a=ot(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&T(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ot(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&T(l),aa(a)){case 2:case 8:a=De;break;case 32:a=je;break;case 268435456:a=Ae;break;default:a=je}return l=_g.bind(null,e),a=L(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&T(l),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fo()&&e.callbackNode!==a)return null;var l=pt;return l=ot(e,e===Lt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(eg(e,l,n),vg(e,xe()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function yg(e,n){if(Fo())return null;eg(e,n,!0)}function d0(){b0(function(){(bt&6)!==0?L(qe,u0):xg()})}function wd(){if(ba===0){var e=ks;e===0&&(e=fe,fe<<=1,(fe&261888)===0&&(fe=256)),ba=e}return ba}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zl(""+e)}function Mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function h0(e,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var h=Sg((u[vn]||null).action),x=l.submitter;x&&(n=(n=x[vn]||null)?Sg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var E=new $l("action","action",null,l,u);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ba!==0){var I=x?Mg(u,x):new FormData(u);Yu(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(E.preventDefault(),I=x?Mg(u,x):new FormData(u),Yu(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var Rd=0;Rd<du.length;Rd++){var Cd=du[Rd],f0=Cd.toLowerCase(),p0=Cd[0].toUpperCase()+Cd.slice(1);oi(f0,"on"+p0)}oi($f,"onAnimationEnd"),oi(ep,"onAnimationIteration"),oi(tp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(C_,"onTransitionRun"),oi(D_,"onTransitionStart"),oi(U_,"onTransitionCancel"),oi(np,"onTransitionEnd"),At("onMouseEnter",["mouseout","mouseover"]),At("onMouseLeave",["mouseout","mouseover"]),At("onPointerEnter",["pointerout","pointerover"]),At("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var x=l.length-1;0<=x;x--){var E=l[x],I=E.instance,Q=E.currentTarget;if(E=E.listener,I!==h&&u.isPropagationStopped())break e;h=E,u.currentTarget=Q;try{h(u)}catch(ue){no(ue)}u.currentTarget=null,h=I}else for(x=0;x<l.length;x++){if(E=l[x],I=E.instance,Q=E.currentTarget,E=E.listener,I!==h&&u.isPropagationStopped())break e;h=E,u.currentTarget=Q;try{h(u)}catch(ue){no(ue)}u.currentTarget=null,h=I}}}}function ht(e,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var l=e+"__bubble";a.has(l)||(Eg(n,e,2,!1),a.add(l))}function Dd(e,n,a){var l=0;n&&(l|=4),Eg(a,e,l,n)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[Vo]){e[Vo]=!0,Je.forEach(function(a){a!=="selectionchange"&&(m0.has(a)||Dd(a,!1,e),Dd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vo]||(n[Vo]=!0,Dd("selectionchange",!1,n))}}function Eg(e,n,a,l){switch($g(n)){case 2:var u=V0;break;case 8:u=k0;break;default:u=Wd}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jd(e,n,a,l,u){var h=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var E=l.stateNode.containerInfo;if(E===u)break;if(x===4)for(x=l.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;E!==null;){if(x=Te(E),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){l=h=x;continue e}E=E.parentNode}}l=l.return}Rf(function(){var Q=h,ue=Kc(a),pe=[];e:{var $=ip.get(e);if($!==void 0){var se=$l,ze=e;switch(e){case"keypress":if(Ql(a)===0)break e;case"keydown":case"keyup":se=o_;break;case"focusin":ze="focus",se=nu;break;case"focusout":ze="blur",se=nu;break;case"beforeblur":case"afterblur":se=nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=d_;break;case $f:case ep:case tp:se=$v;break;case np:se=f_;break;case"scroll":case"scrollend":se=Yv;break;case"wheel":se=m_;break;case"copy":case"cut":case"paste":se=t_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Lf;break;case"toggle":case"beforetoggle":se=x_}var Qe=(n&4)!==0,Ut=!Qe&&(e==="scroll"||e==="scrollend"),X=Qe?$!==null?$+"Capture":null:$;Qe=[];for(var F=Q,K;F!==null;){var de=F;if(K=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||K===null||X===null||(de=kr(F,X),de!=null&&Qe.push(bl(F,de,K))),Ut)break;F=F.return}0<Qe.length&&($=new se($,ze,null,a,ue),pe.push({event:$,listeners:Qe}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",$&&a!==Zc&&(ze=a.relatedTarget||a.fromElement)&&(Te(ze)||ze[sa]))break e;if((se||$)&&($=ue.window===ue?ue:($=ue.ownerDocument)?$.defaultView||$.parentWindow:window,se?(ze=a.relatedTarget||a.toElement,se=Q,ze=ze?Te(ze):null,ze!==null&&(Ut=d(ze),Qe=ze.tag,ze!==Ut||Qe!==5&&Qe!==27&&Qe!==6)&&(ze=null)):(se=null,ze=Q),se!==ze)){if(Qe=Uf,de="onMouseLeave",X="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=Lf,de="onPointerLeave",X="onPointerEnter",F="pointer"),Ut=se==null?$:Oe(se),K=ze==null?$:Oe(ze),$=new Qe(de,F+"leave",se,a,ue),$.target=Ut,$.relatedTarget=K,de=null,Te(ue)===Q&&(Qe=new Qe(X,F+"enter",ze,a,ue),Qe.target=K,Qe.relatedTarget=Ut,de=Qe),Ut=de,se&&ze)t:{for(Qe=g0,X=se,F=ze,K=0,de=X;de;de=Qe(de))K++;de=0;for(var Xe=F;Xe;Xe=Qe(Xe))de++;for(;0<K-de;)X=Qe(X),K--;for(;0<de-K;)F=Qe(F),de--;for(;K--;){if(X===F||F!==null&&X===F.alternate){Qe=X;break t}X=Qe(X),F=Qe(F)}Qe=null}else Qe=null;se!==null&&Tg(pe,$,se,Qe,!1),ze!==null&&Ut!==null&&Tg(pe,Ut,ze,Qe,!0)}}e:{if($=Q?Oe(Q):window,se=$.nodeName&&$.nodeName.toLowerCase(),se==="select"||se==="input"&&$.type==="file")var St=Gf;else if(Ff($))if(Vf)St=N_;else{St=T_;var Be=E_}else se=$.nodeName,!se||se.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Yc(Q.elementType)&&(St=Gf):St=A_;if(St&&(St=St(e,Q))){Hf(pe,St,a,ue);break e}Be&&Be(e,$,Q),e==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Wc($,"number",$.value)}switch(Be=Q?Oe(Q):window,e){case"focusin":(Ff(Be)||Be.contentEditable==="true")&&(Ps=Be,ou=Q,Jr=null);break;case"focusout":Jr=ou=Ps=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Qf(pe,a,ue);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":Qf(pe,a,ue)}var st;if(au)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Os?zf(e,a)&&(mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(Of&&a.locale!=="ko"&&(Os||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Os&&(st=Cf()):(la=ue,$c="value"in la?la.value:la.textContent,Os=!0)),Be=ko(Q,mt),0<Be.length&&(mt=new jf(mt,e,null,a,ue),pe.push({event:mt,listeners:Be}),st?mt.data=st:(st=Bf(a),st!==null&&(mt.data=st)))),(st=__?y_(e,a):S_(e,a))&&(mt=ko(Q,"onBeforeInput"),0<mt.length&&(Be=new jf("onBeforeInput","beforeinput",null,a,ue),pe.push({event:Be,listeners:mt}),Be.data=st)),h0(pe,e,Q,a,ue)}bg(pe,n)})}function bl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ko(e,n){for(var a=n+"Capture",l=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=kr(e,a),u!=null&&l.unshift(bl(e,u,h)),u=kr(e,n),u!=null&&l.push(bl(e,u,h))),e.tag===3)return l;e=e.return}return[]}function g0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tg(e,n,a,l,u){for(var h=n._reactName,x=[];a!==null&&a!==l;){var E=a,I=E.alternate,Q=E.stateNode;if(E=E.tag,I!==null&&I===l)break;E!==5&&E!==26&&E!==27||Q===null||(I=Q,u?(Q=kr(a,h),Q!=null&&x.unshift(bl(a,Q,I))):u||(Q=kr(a,h),Q!=null&&x.push(bl(a,Q,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var x0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function Ag(e){return(typeof e=="string"?e:""+e).replace(x0,`
`).replace(v0,"")}function Ng(e,n){return n=Ag(n),Ag(e)===n}function Dt(e,n,a,l,u,h){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Us(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Us(e,""+l);break;case"className":gt(e,"class",l);break;case"tabIndex":gt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gt(e,a,l);break;case"style":Nf(e,l,h);break;case"data":if(n!=="object"){gt(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Dt(e,n,"name",u.name,u,null),Dt(e,n,"formEncType",u.formEncType,u,null),Dt(e,n,"formMethod",u.formMethod,u,null),Dt(e,n,"formTarget",u.formTarget,u,null)):(Dt(e,n,"encType",u.encType,u,null),Dt(e,n,"method",u.method,u,null),Dt(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ci);break;case"onScroll":l!=null&&ht("scroll",e);break;case"onScrollEnd":l!=null&&ht("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ht("beforetoggle",e),ht("toggle",e),Xt(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qv.get(a)||a,Xt(e,a,l))}}function Ld(e,n,a,l,u,h){switch(a){case"style":Nf(e,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Us(e,l):(typeof l=="number"||typeof l=="bigint")&&Us(e,""+l);break;case"onScroll":l!=null&&ht("scroll",e);break;case"onScrollEnd":l!=null&&ht("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!We.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[vn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof l=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xt(e,a,l)}}}function gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ht("error",e),ht("load",e);var l=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Dt(e,n,h,x,a,null)}}u&&Dt(e,n,"srcSet",a.srcSet,a,null),l&&Dt(e,n,"src",a.src,a,null);return;case"input":ht("invalid",e);var E=h=x=u=null,I=null,Q=null;for(l in a)if(a.hasOwnProperty(l)){var ue=a[l];if(ue!=null)switch(l){case"name":u=ue;break;case"type":x=ue;break;case"checked":I=ue;break;case"defaultChecked":Q=ue;break;case"value":h=ue;break;case"defaultValue":E=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Dt(e,n,l,ue,a,null)}}Vr(e,h,E,I,Q,x,u,!1);return;case"select":ht("invalid",e),l=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":h=E;break;case"defaultValue":x=E;break;case"multiple":l=E;default:Dt(e,n,u,E,a,null)}n=h,a=x,e.multiple=!!l,n!=null?Ds(e,!!l,n,!1):a!=null&&Ds(e,!!l,a,!0);return;case"textarea":ht("invalid",e),h=u=l=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":l=E;break;case"defaultValue":u=E;break;case"children":h=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Dt(e,n,x,E,a,null)}Tf(e,l,u,h);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Dt(e,n,I,l,a,null)}return;case"dialog":ht("beforetoggle",e),ht("toggle",e),ht("cancel",e),ht("close",e);break;case"iframe":case"object":ht("load",e);break;case"video":case"audio":for(l=0;l<Ml.length;l++)ht(Ml[l],e);break;case"image":ht("error",e),ht("load",e);break;case"details":ht("toggle",e);break;case"embed":case"source":case"link":ht("error",e),ht("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(l=a[Q],l!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Dt(e,n,Q,l,a,null)}return;default:if(Yc(n)){for(ue in a)a.hasOwnProperty(ue)&&(l=a[ue],l!==void 0&&Ld(e,n,ue,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Dt(e,n,E,l,a,null))}function _0(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,E=null,I=null,Q=null,ue=null;for(se in a){var pe=a[se];if(a.hasOwnProperty(se)&&pe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=pe;default:l.hasOwnProperty(se)||Dt(e,n,se,null,l,pe)}}for(var $ in l){var se=l[$];if(pe=a[$],l.hasOwnProperty($)&&(se!=null||pe!=null))switch($){case"type":h=se;break;case"name":u=se;break;case"checked":Q=se;break;case"defaultChecked":ue=se;break;case"value":x=se;break;case"defaultValue":E=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==pe&&Dt(e,n,$,se,l,pe)}}Gr(e,x,E,I,Q,ue,h,u);return;case"select":se=x=E=$=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":se=I;default:l.hasOwnProperty(h)||Dt(e,n,h,null,l,I)}for(u in l)if(h=l[u],I=a[u],l.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":$=h;break;case"defaultValue":E=h;break;case"multiple":x=h;default:h!==I&&Dt(e,n,u,h,l,I)}n=E,a=x,l=se,$!=null?Ds(e,!!a,$,!1):!!l!=!!a&&(n!=null?Ds(e,!!a,n,!0):Ds(e,!!a,a?[]:"",!1));return;case"textarea":se=$=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Dt(e,n,E,null,l,u)}for(x in l)if(u=l[x],h=a[x],l.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":$=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Dt(e,n,x,u,l,h)}Ef(e,$,se);return;case"option":for(var ze in a)if($=a[ze],a.hasOwnProperty(ze)&&$!=null&&!l.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Dt(e,n,ze,null,l,$)}for(I in l)if($=l[I],se=a[I],l.hasOwnProperty(I)&&$!==se&&($!=null||se!=null))switch(I){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Dt(e,n,I,$,l,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)$=a[Qe],a.hasOwnProperty(Qe)&&$!=null&&!l.hasOwnProperty(Qe)&&Dt(e,n,Qe,null,l,$);for(Q in l)if($=l[Q],se=a[Q],l.hasOwnProperty(Q)&&$!==se&&($!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Dt(e,n,Q,$,l,se)}return;default:if(Yc(n)){for(var Ut in a)$=a[Ut],a.hasOwnProperty(Ut)&&$!==void 0&&!l.hasOwnProperty(Ut)&&Ld(e,n,Ut,void 0,l,$);for(ue in l)$=l[ue],se=a[ue],!l.hasOwnProperty(ue)||$===se||$===void 0&&se===void 0||Ld(e,n,ue,$,l,se);return}}for(var X in a)$=a[X],a.hasOwnProperty(X)&&$!=null&&!l.hasOwnProperty(X)&&Dt(e,n,X,null,l,$);for(pe in l)$=l[pe],se=a[pe],!l.hasOwnProperty(pe)||$===se||$==null&&se==null||Dt(e,n,pe,$,l,se)}function wg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function y0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],h=u.transferSize,x=u.initiatorType,E=u.duration;if(h&&E&&wg(x)){for(x=0,E=u.responseEnd,l+=1;l<a.length;l++){var I=a[l],Q=I.startTime;if(Q>E)break;var ue=I.transferSize,pe=I.initiatorType;ue&&wg(pe)&&(I=I.responseEnd,x+=ue*(I<E?1:(E-Q)/(I-Q)))}if(--l,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Od=null,Pd=null;function Xo(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Id(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zd=null;function S0(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(E0)}:Dg;function E0(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function jg(e,n){var a=n,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),cr(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,El(a);for(var h=a.firstChild;h;){var x=h.nextSibling,E=h.nodeName;h[te]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&El(e.ownerDocument.body);a=u}while(a);cr(n)}function Lg(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Bd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bd(a),Y(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function T0(e,n,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[te])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function A0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ni(e.nextSibling),e===null))return null;return e}function Og(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ni(e.nextSibling),e===null))return null;return e}function Fd(e){return e.data==="$?"||e.data==="$~"}function Hd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function N0(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ni(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gd=null;function Pg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ni(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ig(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function zg(e,n,a){switch(n=Xo(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function El(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Y(e)}var ii=new Map,Bg=new Set;function qo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=q.d;q.d={f:w0,r:R0,D:C0,C:D0,L:U0,m:j0,X:O0,S:L0,M:P0};function w0(){var e=qi.f(),n=Io();return e||n}function R0(e){var n=Ce(e);n!==null&&n.tag===5&&n.type==="form"?nm(n):qi.r(e)}var rr=typeof document>"u"?null:document;function Fg(e,n,a){var l=rr;if(l&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Bg.has(u)||(Bg.add(u),e={rel:e,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),gn(n,"link",e),Ie(n),l.head.appendChild(n)))}}function C0(e){qi.D(e),Fg("dns-prefetch",e,null)}function D0(e,n){qi.C(e,n),Fg("preconnect",e,n)}function U0(e,n,a){qi.L(e,n,a);var l=rr;if(l&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var h=u;switch(n){case"style":h=lr(e);break;case"script":h=or(e)}ii.has(h)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ii.set(h,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(Tl(h))||n==="script"&&l.querySelector(Al(h))||(n=l.createElement("link"),gn(n,"link",e),Ie(n),l.head.appendChild(n)))}}function j0(e,n){qi.m(e,n);var a=rr;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(l)+'"][href="'+Sn(e)+'"]',h=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=or(e)}if(!ii.has(h)&&(e=y({rel:"modulepreload",href:e},n),ii.set(h,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(h)))return}l=a.createElement("link"),gn(l,"link",e),Ie(l),a.head.appendChild(l)}}}function L0(e,n,a){qi.S(e,n,a);var l=rr;if(l&&e){var u=Pe(l).hoistableStyles,h=lr(e);n=n||"default";var x=u.get(h);if(!x){var E={loading:0,preload:null};if(x=l.querySelector(Tl(h)))E.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ii.get(h))&&Vd(e,a);var I=x=l.createElement("link");Ie(I),gn(I,"link",e),I._p=new Promise(function(Q,ue){I.onload=Q,I.onerror=ue}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Wo(x,n,l)}x={type:"stylesheet",instance:x,count:1,state:E},u.set(h,x)}}}function O0(e,n){qi.X(e,n);var a=rr;if(a&&e){var l=Pe(a).hoistableScripts,u=or(e),h=l.get(u);h||(h=a.querySelector(Al(u)),h||(e=y({src:e,async:!0},n),(n=ii.get(u))&&kd(e,n),h=a.createElement("script"),Ie(h),gn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function P0(e,n){qi.M(e,n);var a=rr;if(a&&e){var l=Pe(a).hoistableScripts,u=or(e),h=l.get(u);h||(h=a.querySelector(Al(u)),h||(e=y({src:e,async:!0,type:"module"},n),(n=ii.get(u))&&kd(e,n),h=a.createElement("script"),Ie(h),gn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function Hg(e,n,a,l){var u=(u=ye.current)?qo(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lr(a.href),a=Pe(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lr(a.href);var h=Pe(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Tl(e)))&&!h._p&&(x.instance=h,x.state.loading=5),ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(e,a),h||I0(u,e,a,x.state))),n&&l===null)throw Error(r(528,""));return x}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=Pe(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function lr(e){return'href="'+Sn(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function I0(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),gn(n,"link",a),Ie(n),e.head.appendChild(n))}function or(e){return'[src="'+Sn(e)+'"]'}function Al(e){return"script[async]"+e}function Vg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(l)return n.instance=l,Ie(l),l;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ie(l),gn(l,"style",u),Wo(l,a.precedence,e),n.instance=l;case"stylesheet":u=lr(a.href);var h=e.querySelector(Tl(u));if(h)return n.state.loading|=4,n.instance=h,Ie(h),h;l=Gg(a),(u=ii.get(u))&&Vd(l,u),h=(e.ownerDocument||e).createElement("link"),Ie(h);var x=h;return x._p=new Promise(function(E,I){x.onload=E,x.onerror=I}),gn(h,"link",l),n.state.loading|=4,Wo(h,a.precedence,e),n.instance=h;case"script":return h=or(a.src),(u=e.querySelector(Al(h)))?(n.instance=u,Ie(u),u):(l=a,(u=ii.get(h))&&(l=y({},a),kd(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ie(u),gn(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Wo(l,a.precedence,e));return n.instance}function Wo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,h=u,x=0;x<l.length;x++){var E=l[x];if(E.dataset.precedence===n)h=E;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yo=null;function kg(e,n,a){if(Yo===null){var l=new Map,u=Yo=new Map;u.set(a,l)}else u=Yo,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[te]||h[Qt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var E=l.get(x);E?E.push(h):l.set(x,[h])}}return l}function Xg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function z0(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B0(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=lr(l.href),h=n.querySelector(Tl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Ie(h);return}h=n.ownerDocument||n,l=Gg(l),(u=ii.get(u))&&Vd(l,u),h=h.createElement("link"),Ie(h);var x=h;x._p=new Promise(function(E,I){x.onload=E,x.onerror=I}),gn(h,"link",l),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xd=0;function F0(e,n){return e.stylesheets&&e.count===0&&Qo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Xd===0&&(Xd=62500*y0());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Xd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Zo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ko=null;function Qo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ko=new Map,n.forEach(H0,e),Ko=null,Zo.call(e))}function H0(e,n){if(!(n.state.loading&4)){var a=Ko.get(e);if(a)var l=a.get(null);else{a=new Map,Ko.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),l=x)}l&&a.set(null,l)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||l,h===l&&a.set(null,u),a.set(x,u),this.count++,l=Zo.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Nl={$$typeof:C,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function G0(e,n,a,l,u,h,x,E,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.hiddenUpdates=Bn(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Wg(e,n,a,l,u,h,x,E,I,Q,ue,pe){return e=new G0(e,n,a,x,I,Q,ue,pe,E),n=1,h===!0&&(n|=24),h=Hn(3,null,null,n),e.current=h,h.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:l,isDehydrated:a,cache:n},wu(h),e}function Yg(e){return e?(e=Bs,e):Bs}function Zg(e,n,a,l,u,h){u=Yg(u),l.context===null?l.context=u:l.pendingContext=u,l=fa(n),l.payload={element:a},h=h===void 0?null:h,h!==null&&(l.callback=h),a=pa(e,l,n),a!==null&&(Ln(a,e,n),sl(a,e,n))}function Kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qd(e,n){Kg(e,n),(e=e.alternate)&&Kg(e,n)}function Qg(e){if(e.tag===13||e.tag===31){var n=qa(e,67108864);n!==null&&Ln(n,e,67108864),qd(e,67108864)}}function Jg(e){if(e.tag===13||e.tag===31){var n=qn();n=Cs(n);var a=qa(e,n);a!==null&&Ln(a,e,n),qd(e,n)}}var Jo=!0;function V0(e,n,a,l){var u=j.T;j.T=null;var h=q.p;try{q.p=2,Wd(e,n,a,l)}finally{q.p=h,j.T=u}}function k0(e,n,a,l){var u=j.T;j.T=null;var h=q.p;try{q.p=8,Wd(e,n,a,l)}finally{q.p=h,j.T=u}}function Wd(e,n,a,l){if(Jo){var u=Yd(l);if(u===null)jd(e,n,l,$o,a),ex(e,l);else if(q0(u,e,n,a,l))l.stopPropagation();else if(ex(e,l),n&4&&-1<X0.indexOf(e)){for(;u!==null;){var h=Ce(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=ke(h.pendingLanes);if(x!==0){var E=h;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var I=1<<31-Ze(x);E.entanglements[1]|=I,x&=~I}Ei(h),(bt&6)===0&&(Oo=xe()+500,Sl(0))}}break;case 31:case 13:E=qa(h,2),E!==null&&Ln(E,h,2),Io(),qd(h,2)}if(h=Yd(l),h===null&&jd(e,n,l,$o,a),h===u)break;u=h}u!==null&&l.stopPropagation()}else jd(e,n,l,null,a)}}function Yd(e){return e=Kc(e),Zd(e)}var $o=null;function Zd(e){if($o=null,e=Te(e),e!==null){var n=d(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $o=e,null}function $g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case qe:return 2;case De:return 8;case je:case it:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Kd=!1,Ta=null,Aa=null,Na=null,wl=new Map,Rl=new Map,wa=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ex(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":wl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(n.pointerId)}}function Cl(e,n,a,l,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ce(n),n!==null&&Qg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function q0(e,n,a,l,u){switch(n){case"focusin":return Ta=Cl(Ta,e,n,a,l,u),!0;case"dragenter":return Aa=Cl(Aa,e,n,a,l,u),!0;case"mouseover":return Na=Cl(Na,e,n,a,l,u),!0;case"pointerover":var h=u.pointerId;return wl.set(h,Cl(wl.get(h)||null,e,n,a,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Rl.set(h,Cl(Rl.get(h)||null,e,n,a,l,u)),!0}return!1}function tx(e){var n=Te(e.target);if(n!==null){var a=d(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ga(e.priority,function(){Jg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Ga(e.priority,function(){Jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Zc=l,a.target.dispatchEvent(l),Zc=null}else return n=Ce(a),n!==null&&Qg(n),e.blockedOn=a,!1;n.shift()}return!0}function nx(e,n,a){ec(e)&&a.delete(n)}function W0(){Kd=!1,Ta!==null&&ec(Ta)&&(Ta=null),Aa!==null&&ec(Aa)&&(Aa=null),Na!==null&&ec(Na)&&(Na=null),wl.forEach(nx),Rl.forEach(nx)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Kd||(Kd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,W0)))}var nc=null;function ix(e){nc!==e&&(nc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(Zd(l||a)===null)continue;break}var h=Ce(a);h!==null&&(e.splice(n,3),n-=3,Yu(h,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function cr(e){function n(I){return tc(I,e)}Ta!==null&&tc(Ta,e),Aa!==null&&tc(Aa,e),Na!==null&&tc(Na,e),wl.forEach(n),Rl.forEach(n);for(var a=0;a<wa.length;a++){var l=wa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)tx(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],h=a[l+1],x=u[vn]||null;if(typeof h=="function")x||ix(a);else if(x){var E=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[vn]||null)E=x.formAction;else if(Zd(u)!==null)continue}else E=x.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),ix(a)}}}function ax(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Qd(e){this._internalRoot=e}ic.prototype.render=Qd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=qn();Zg(a,l,e,n,null,null)},ic.prototype.unmount=Qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zg(e.current,2,null,e,null,null),Io(),n[sa]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=Br();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&tx(e)}};var sx=t.version;if(sx!=="19.2.7")throw Error(r(527,sx,"19.2.7"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Y0={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Ke=ac.inject(Y0),Re=ac}catch{}}return Ul.createRoot=function(e,n){if(!c(e))throw Error(r(299));var a=!1,l="",u=hm,h=fm,x=pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Wg(e,1,!1,null,null,a,l,null,u,h,x,ax),e[sa]=n.current,Ud(e),new Qd(n)},Ul.hydrateRoot=function(e,n,a){if(!c(e))throw Error(r(299));var l=!1,u="",h=hm,x=fm,E=pm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Wg(e,1,!0,n,a??null,l,u,I,h,x,E,ax),n.context=Yg(null),a=n.current,l=qn(),l=Cs(l),u=fa(l),u.callback=null,pa(a,u,l),a=l,n.current.lanes=a,xn(n,a),Ei(n),e[sa]=n.current,Ud(e),new ic(n)},Ul.version="19.2.7",Ul}var mx;function ry(){if(mx)return eh.exports;mx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),eh.exports=sy(),eh.exports}var ly=ry();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="167",oy=0,gx=1,cy=2,hv=1,uy=2,Ji=3,Ba=0,In=1,Ni=2,Ia=0,wr=1,xx=2,vx=3,_x=4,dy=5,Ms=100,hy=101,fy=102,py=103,my=104,gy=200,xy=201,vy=202,_y=203,Uh=204,jh=205,yy=206,Sy=207,My=208,by=209,Ey=210,Ty=211,Ay=212,Ny=213,wy=214,Ry=0,Cy=1,Dy=2,Ic=3,Uy=4,jy=5,Ly=6,Oy=7,fv=0,Py=1,Iy=2,za=0,zy=1,By=2,Fy=3,Hy=4,Gy=5,Vy=6,ky=7,pv=300,Dr=301,Ur=302,Lh=303,Oh=304,Vc=306,Ph=1e3,Es=1001,Ih=1002,si=1003,Xy=1004,sc=1005,mi=1006,ah=1007,Ts=1008,ta=1009,mv=1010,gv=1011,Hl=1012,mf=1013,Ns=1014,$i=1015,Gl=1016,gf=1017,xf=1018,jr=1020,xv=35902,vv=1021,_v=1022,gi=1023,yv=1024,Sv=1025,Rr=1026,Lr=1027,Mv=1028,vf=1029,bv=1030,_f=1031,yf=1033,Dc=33776,Uc=33777,jc=33778,Lc=33779,zh=35840,Bh=35841,Fh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Xh=37808,qh=37809,Wh=37810,Yh=37811,Zh=37812,Kh=37813,Qh=37814,Jh=37815,$h=37816,ef=37817,tf=37818,nf=37819,af=37820,sf=37821,Oc=36492,rf=36494,lf=36495,Ev=36283,of=36284,cf=36285,uf=36286,qy=3200,Wy=3201,Yy=0,Zy=1,Pa="",Ti="srgb",Fa="srgb-linear",Sf="display-p3",kc="display-p3-linear",zc="linear",Bt="srgb",Bc="rec709",Fc="p3",ur=7680,yx=519,Ky=512,Qy=513,Jy=514,Tv=515,$y=516,eS=517,tS=518,nS=519,Sx=35044,Mx="300 es",ea=2e3,Hc=2001;class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const c=this._listeners[t];if(c!==void 0){const d=c.indexOf(i);d!==-1&&c.splice(d,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const c=r.slice(0);for(let d=0,f=c.length;d<f;d++)c[d].call(this,t);t.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,df=180/Math.PI;function Vl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Pn(o,t,i){return Math.max(t,Math.min(i,o))}function iS(o,t){return(o%t+t)%t}function rh(o,t,i){return(1-i)*o+i*t}function jl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,i=0){Tt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6],this.y=c[1]*i+c[4]*r+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),c=Math.sin(i),d=this.x-t.x,f=this.y-t.y;return this.x=d*r-f*c+t.x,this.y=d*c+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(t,i,r,c,d,f,p,g,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,c,d,f,p,g,m)}set(t,i,r,c,d,f,p,g,m){const v=this.elements;return v[0]=t,v[1]=c,v[2]=p,v[3]=i,v[4]=d,v[5]=g,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,d=this.elements,f=r[0],p=r[3],g=r[6],m=r[1],v=r[4],y=r[7],S=r[2],b=r[5],A=r[8],R=c[0],M=c[3],_=c[6],z=c[1],C=c[4],P=c[7],ie=c[2],H=c[5],O=c[8];return d[0]=f*R+p*z+g*ie,d[3]=f*M+p*C+g*H,d[6]=f*_+p*P+g*O,d[1]=m*R+v*z+y*ie,d[4]=m*M+v*C+y*H,d[7]=m*_+v*P+y*O,d[2]=S*R+b*z+A*ie,d[5]=S*M+b*C+A*H,d[8]=S*_+b*P+A*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],c=t[2],d=t[3],f=t[4],p=t[5],g=t[6],m=t[7],v=t[8];return i*f*v-i*p*m-r*d*v+r*p*g+c*d*m-c*f*g}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],d=t[3],f=t[4],p=t[5],g=t[6],m=t[7],v=t[8],y=v*f-p*m,S=p*g-v*d,b=m*d-f*g,A=i*y+r*S+c*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(c*m-v*r)*R,t[2]=(p*r-c*f)*R,t[3]=S*R,t[4]=(v*i-c*g)*R,t[5]=(c*d-p*i)*R,t[6]=b*R,t[7]=(r*g-m*i)*R,t[8]=(f*i-r*d)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,c,d,f,p){const g=Math.cos(d),m=Math.sin(d);return this.set(r*g,r*m,-r*(g*f+m*p)+f+t,-c*m,c*g,-c*(-m*f+g*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(lh.makeScale(t,i)),this}rotate(t){return this.premultiply(lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<9;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new lt;function Av(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function aS(){const o=Gc("canvas");return o.style.display="block",o}const bx={};function Fl(o){o in bx||(bx[o]=!0,console.warn(o))}function sS(o,t,i){return new Promise(function(r,c){function d(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(d,i);break;default:r()}}setTimeout(d,i)})}const Ex=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tx=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ll={[Fa]:{transfer:zc,primaries:Bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Ti]:{transfer:Bt,primaries:Bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[kc]:{transfer:zc,primaries:Fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(Tx),fromReference:o=>o.applyMatrix3(Ex)},[Sf]:{transfer:Bt,primaries:Fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(Tx),fromReference:o=>o.applyMatrix3(Ex).convertLinearToSRGB()}},rS=new Set([Fa,kc]),Et={enabled:!0,_workingColorSpace:Fa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!rS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const r=Ll[t].toReference,c=Ll[i].fromReference;return c(r(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Ll[o].primaries},getTransfer:function(o){return o===Pa?zc:Ll[o].transfer},getLuminanceCoefficients:function(o,t=this._workingColorSpace){return o.fromArray(Ll[t].luminanceCoefficients)}};function Cr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let dr;class lS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dr===void 0&&(dr=Gc("canvas")),dr.width=t.width,dr.height=t.height;const r=dr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=dr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const c=r.getImageData(0,0,t.width,t.height),d=c.data;for(let f=0;f<d.length;f++)d[f]=Cr(d[f]/255)*255;return r.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Cr(i[r]/255)*255):i[r]=Cr(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oS=0;class Nv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Vl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let d;if(Array.isArray(c)){d=[];for(let f=0,p=c.length;f<p;f++)c[f].isDataTexture?d.push(ch(c[f].image)):d.push(ch(c[f]))}else d=ch(c);r.url=d}return i||(t.images[this.uuid]=r),r}}function ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cS=0;class zn extends Pr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=Es,c=Es,d=mi,f=Ts,p=gi,g=ta,m=zn.DEFAULT_ANISOTROPY,v=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Vl(),this.name="",this.source=new Nv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=d,this.minFilter=f,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case Ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case Ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=pv;zn.DEFAULT_ANISOTROPY=1;class hn{constructor(t=0,i=0,r=0,c=1){hn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,c){return this.x=t,this.y=i,this.z=r,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,d=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*c+f[12]*d,this.y=f[1]*i+f[5]*r+f[9]*c+f[13]*d,this.z=f[2]*i+f[6]*r+f[10]*c+f[14]*d,this.w=f[3]*i+f[7]*r+f[11]*c+f[15]*d,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,c,d;const g=t.elements,m=g[0],v=g[4],y=g[8],S=g[1],b=g[5],A=g[9],R=g[2],M=g[6],_=g[10];if(Math.abs(v-S)<.01&&Math.abs(y-R)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(y+R)<.1&&Math.abs(A+M)<.1&&Math.abs(m+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,P=(b+1)/2,ie=(_+1)/2,H=(v+S)/4,O=(y+R)/4,J=(A+M)/4;return C>P&&C>ie?C<.01?(r=0,c=.707106781,d=.707106781):(r=Math.sqrt(C),c=H/r,d=O/r):P>ie?P<.01?(r=.707106781,c=0,d=.707106781):(c=Math.sqrt(P),r=H/c,d=J/c):ie<.01?(r=.707106781,c=.707106781,d=0):(d=Math.sqrt(ie),r=O/d,c=J/d),this.set(r,c,d,i),this}let z=Math.sqrt((M-A)*(M-A)+(y-R)*(y-R)+(S-v)*(S-v));return Math.abs(z)<.001&&(z=1),this.x=(M-A)/z,this.y=(y-R)/z,this.z=(S-v)/z,this.w=Math.acos((m+b+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uS extends Pr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new hn(0,0,t,i),this.scissorTest=!1,this.viewport=new hn(0,0,t,i);const c={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const d=new zn(c,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);d.flipY=!1,d.generateMipmaps=r.generateMipmaps,d.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let p=0;p<f;p++)this.textures[p]=d.clone(),this.textures[p].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let c=0,d=this.textures.length;c<d;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,c=t.textures.length;r<c;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Nv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends uS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class wv extends zn{constructor(t=null,i=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=si,this.minFilter=si,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dS extends zn{constructor(t=null,i=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=si,this.minFilter=si,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl{constructor(t=0,i=0,r=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=c}static slerpFlat(t,i,r,c,d,f,p){let g=r[c+0],m=r[c+1],v=r[c+2],y=r[c+3];const S=d[f+0],b=d[f+1],A=d[f+2],R=d[f+3];if(p===0){t[i+0]=g,t[i+1]=m,t[i+2]=v,t[i+3]=y;return}if(p===1){t[i+0]=S,t[i+1]=b,t[i+2]=A,t[i+3]=R;return}if(y!==R||g!==S||m!==b||v!==A){let M=1-p;const _=g*S+m*b+v*A+y*R,z=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const ie=Math.sqrt(C),H=Math.atan2(ie,_*z);M=Math.sin(M*H)/ie,p=Math.sin(p*H)/ie}const P=p*z;if(g=g*M+S*P,m=m*M+b*P,v=v*M+A*P,y=y*M+R*P,M===1-p){const ie=1/Math.sqrt(g*g+m*m+v*v+y*y);g*=ie,m*=ie,v*=ie,y*=ie}}t[i]=g,t[i+1]=m,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,c,d,f){const p=r[c],g=r[c+1],m=r[c+2],v=r[c+3],y=d[f],S=d[f+1],b=d[f+2],A=d[f+3];return t[i]=p*A+v*y+g*b-m*S,t[i+1]=g*A+v*S+m*y-p*b,t[i+2]=m*A+v*b+p*S-g*y,t[i+3]=v*A-p*y-g*S-m*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,c){return this._x=t,this._y=i,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,c=t._y,d=t._z,f=t._order,p=Math.cos,g=Math.sin,m=p(r/2),v=p(c/2),y=p(d/2),S=g(r/2),b=g(c/2),A=g(d/2);switch(f){case"XYZ":this._x=S*v*y+m*b*A,this._y=m*b*y-S*v*A,this._z=m*v*A+S*b*y,this._w=m*v*y-S*b*A;break;case"YXZ":this._x=S*v*y+m*b*A,this._y=m*b*y-S*v*A,this._z=m*v*A-S*b*y,this._w=m*v*y+S*b*A;break;case"ZXY":this._x=S*v*y-m*b*A,this._y=m*b*y+S*v*A,this._z=m*v*A+S*b*y,this._w=m*v*y-S*b*A;break;case"ZYX":this._x=S*v*y-m*b*A,this._y=m*b*y+S*v*A,this._z=m*v*A-S*b*y,this._w=m*v*y+S*b*A;break;case"YZX":this._x=S*v*y+m*b*A,this._y=m*b*y+S*v*A,this._z=m*v*A-S*b*y,this._w=m*v*y-S*b*A;break;case"XZY":this._x=S*v*y-m*b*A,this._y=m*b*y-S*v*A,this._z=m*v*A+S*b*y,this._w=m*v*y+S*b*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,c=Math.sin(r);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],c=i[4],d=i[8],f=i[1],p=i[5],g=i[9],m=i[2],v=i[6],y=i[10],S=r+p+y;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(v-g)*b,this._y=(d-m)*b,this._z=(f-c)*b}else if(r>p&&r>y){const b=2*Math.sqrt(1+r-p-y);this._w=(v-g)/b,this._x=.25*b,this._y=(c+f)/b,this._z=(d+m)/b}else if(p>y){const b=2*Math.sqrt(1+p-r-y);this._w=(d-m)/b,this._x=(c+f)/b,this._y=.25*b,this._z=(g+v)/b}else{const b=2*Math.sqrt(1+y-r-p);this._w=(f-c)/b,this._x=(d+m)/b,this._y=(g+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const c=Math.min(1,i/r);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,c=t._y,d=t._z,f=t._w,p=i._x,g=i._y,m=i._z,v=i._w;return this._x=r*v+f*p+c*m-d*g,this._y=c*v+f*g+d*p-r*m,this._z=d*v+f*m+r*g-c*p,this._w=f*v-r*p-c*g-d*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,c=this._y,d=this._z,f=this._w;let p=f*t._w+r*t._x+c*t._y+d*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=f,this._x=r,this._y=c,this._z=d,this;const g=1-p*p;if(g<=Number.EPSILON){const b=1-i;return this._w=b*f+i*this._w,this._x=b*r+i*this._x,this._y=b*c+i*this._y,this._z=b*d+i*this._z,this.normalize(),this}const m=Math.sqrt(g),v=Math.atan2(m,p),y=Math.sin((1-i)*v)/m,S=Math.sin(i*v)/m;return this._w=f*y+this._w*S,this._x=r*y+this._x*S,this._y=c*y+this._y*S,this._z=d*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),d=Math.sqrt(r);return this.set(c*Math.sin(t),c*Math.cos(t),d*Math.sin(i),d*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ax.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ax.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,c=this.z,d=t.elements;return this.x=d[0]*i+d[3]*r+d[6]*c,this.y=d[1]*i+d[4]*r+d[7]*c,this.z=d[2]*i+d[5]*r+d[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,d=t.elements,f=1/(d[3]*i+d[7]*r+d[11]*c+d[15]);return this.x=(d[0]*i+d[4]*r+d[8]*c+d[12])*f,this.y=(d[1]*i+d[5]*r+d[9]*c+d[13])*f,this.z=(d[2]*i+d[6]*r+d[10]*c+d[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,c=this.z,d=t.x,f=t.y,p=t.z,g=t.w,m=2*(f*c-p*r),v=2*(p*i-d*c),y=2*(d*r-f*i);return this.x=i+g*m+f*y-p*v,this.y=r+g*v+p*m-d*y,this.z=c+g*y+d*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,c=this.z,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*c,this.y=d[1]*i+d[5]*r+d[9]*c,this.z=d[2]*i+d[6]*r+d[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,c=t.y,d=t.z,f=i.x,p=i.y,g=i.z;return this.x=c*g-d*p,this.y=d*f-r*g,this.z=r*p-c*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return uh.copy(this).projectOnVector(t),this.sub(uh)}reflect(t){return this.sub(uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,c=this.z-t.z;return i*i+r*r+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const c=Math.sin(i)*t;return this.x=c*Math.sin(r),this.y=Math.cos(i)*t,this.z=c*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new re,Ax=new kl;class Xl{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const d=r.getAttribute("position");if(i===!0&&d!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=d.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,di):di.fromBufferAttribute(d,f),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const c=t.children;for(let d=0,f=c.length;d<f;d++)this.expandByObject(c[d],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ol),lc.subVectors(this.max,Ol),hr.subVectors(t.a,Ol),fr.subVectors(t.b,Ol),pr.subVectors(t.c,Ol),Ca.subVectors(fr,hr),Da.subVectors(pr,fr),ss.subVectors(hr,pr);let i=[0,-Ca.z,Ca.y,0,-Da.z,Da.y,0,-ss.z,ss.y,Ca.z,0,-Ca.x,Da.z,0,-Da.x,ss.z,0,-ss.x,-Ca.y,Ca.x,0,-Da.y,Da.x,0,-ss.y,ss.x,0];return!dh(i,hr,fr,pr,lc)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,hr,fr,pr,lc))?!1:(oc.crossVectors(Ca,Da),i=[oc.x,oc.y,oc.z],dh(i,hr,fr,pr,lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wi=[new re,new re,new re,new re,new re,new re,new re,new re],di=new re,rc=new Xl,hr=new re,fr=new re,pr=new re,Ca=new re,Da=new re,ss=new re,Ol=new re,lc=new re,oc=new re,rs=new re;function dh(o,t,i,r,c){for(let d=0,f=o.length-3;d<=f;d+=3){rs.fromArray(o,d);const p=c.x*Math.abs(rs.x)+c.y*Math.abs(rs.y)+c.z*Math.abs(rs.z),g=t.dot(rs),m=i.dot(rs),v=r.dot(rs);if(Math.max(-Math.max(g,m,v),Math.min(g,m,v))>p)return!1}return!0}const hS=new Xl,Pl=new re,hh=new re;class Mf{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):hS.setFromPoints(t).getCenter(r);let c=0;for(let d=0,f=t.length;d<f;d++)c=Math.max(c,r.distanceToSquared(t[d]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pl.subVectors(t,this.center);const i=Pl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),c=(r-this.radius)*.5;this.center.addScaledVector(Pl,c/r),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pl.copy(t.center).add(hh)),this.expandByPoint(Pl.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new re,fh=new re,cc=new re,Ua=new re,ph=new re,uc=new re,mh=new re;class fS{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Yi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,i),Yi.distanceToSquared(t))}distanceSqToSegment(t,i,r,c){fh.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(fh);const d=t.distanceTo(i)*.5,f=-this.direction.dot(cc),p=Ua.dot(this.direction),g=-Ua.dot(cc),m=Ua.lengthSq(),v=Math.abs(1-f*f);let y,S,b,A;if(v>0)if(y=f*g-p,S=f*p-g,A=d*v,y>=0)if(S>=-A)if(S<=A){const R=1/v;y*=R,S*=R,b=y*(y+f*S+2*p)+S*(f*y+S+2*g)+m}else S=d,y=Math.max(0,-(f*S+p)),b=-y*y+S*(S+2*g)+m;else S=-d,y=Math.max(0,-(f*S+p)),b=-y*y+S*(S+2*g)+m;else S<=-A?(y=Math.max(0,-(-f*d+p)),S=y>0?-d:Math.min(Math.max(-d,-g),d),b=-y*y+S*(S+2*g)+m):S<=A?(y=0,S=Math.min(Math.max(-d,-g),d),b=S*(S+2*g)+m):(y=Math.max(0,-(f*d+p)),S=y>0?d:Math.min(Math.max(-d,-g),d),b=-y*y+S*(S+2*g)+m);else S=f>0?-d:d,y=Math.max(0,-(f*S+p)),b=-y*y+S*(S+2*g)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),c&&c.copy(fh).addScaledVector(cc,S),b}intersectSphere(t,i){Yi.subVectors(t.center,this.origin);const r=Yi.dot(this.direction),c=Yi.dot(Yi)-r*r,d=t.radius*t.radius;if(c>d)return null;const f=Math.sqrt(d-c),p=r-f,g=r+f;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,c,d,f,p,g;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(r=(t.min.x-S.x)*m,c=(t.max.x-S.x)*m):(r=(t.max.x-S.x)*m,c=(t.min.x-S.x)*m),v>=0?(d=(t.min.y-S.y)*v,f=(t.max.y-S.y)*v):(d=(t.max.y-S.y)*v,f=(t.min.y-S.y)*v),r>f||d>c||((d>r||isNaN(r))&&(r=d),(f<c||isNaN(c))&&(c=f),y>=0?(p=(t.min.z-S.z)*y,g=(t.max.z-S.z)*y):(p=(t.max.z-S.z)*y,g=(t.min.z-S.z)*y),r>g||p>c)||((p>r||r!==r)&&(r=p),(g<c||c!==c)&&(c=g),c<0)?null:this.at(r>=0?r:c,i)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,i,r,c,d){ph.subVectors(i,t),uc.subVectors(r,t),mh.crossVectors(ph,uc);let f=this.direction.dot(mh),p;if(f>0){if(c)return null;p=1}else if(f<0)p=-1,f=-f;else return null;Ua.subVectors(this.origin,t);const g=p*this.direction.dot(uc.crossVectors(Ua,uc));if(g<0)return null;const m=p*this.direction.dot(ph.cross(Ua));if(m<0||g+m>f)return null;const v=-p*Ua.dot(mh);return v<0?null:this.at(v/f,d)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,r,c,d,f,p,g,m,v,y,S,b,A,R,M){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,c,d,f,p,g,m,v,y,S,b,A,R,M)}set(t,i,r,c,d,f,p,g,m,v,y,S,b,A,R,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=c,_[1]=d,_[5]=f,_[9]=p,_[13]=g,_[2]=m,_[6]=v,_[10]=y,_[14]=S,_[3]=b,_[7]=A,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,c=1/mr.setFromMatrixColumn(t,0).length(),d=1/mr.setFromMatrixColumn(t,1).length(),f=1/mr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*c,i[1]=r[1]*c,i[2]=r[2]*c,i[3]=0,i[4]=r[4]*d,i[5]=r[5]*d,i[6]=r[6]*d,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,c=t.y,d=t.z,f=Math.cos(r),p=Math.sin(r),g=Math.cos(c),m=Math.sin(c),v=Math.cos(d),y=Math.sin(d);if(t.order==="XYZ"){const S=f*v,b=f*y,A=p*v,R=p*y;i[0]=g*v,i[4]=-g*y,i[8]=m,i[1]=b+A*m,i[5]=S-R*m,i[9]=-p*g,i[2]=R-S*m,i[6]=A+b*m,i[10]=f*g}else if(t.order==="YXZ"){const S=g*v,b=g*y,A=m*v,R=m*y;i[0]=S+R*p,i[4]=A*p-b,i[8]=f*m,i[1]=f*y,i[5]=f*v,i[9]=-p,i[2]=b*p-A,i[6]=R+S*p,i[10]=f*g}else if(t.order==="ZXY"){const S=g*v,b=g*y,A=m*v,R=m*y;i[0]=S-R*p,i[4]=-f*y,i[8]=A+b*p,i[1]=b+A*p,i[5]=f*v,i[9]=R-S*p,i[2]=-f*m,i[6]=p,i[10]=f*g}else if(t.order==="ZYX"){const S=f*v,b=f*y,A=p*v,R=p*y;i[0]=g*v,i[4]=A*m-b,i[8]=S*m+R,i[1]=g*y,i[5]=R*m+S,i[9]=b*m-A,i[2]=-m,i[6]=p*g,i[10]=f*g}else if(t.order==="YZX"){const S=f*g,b=f*m,A=p*g,R=p*m;i[0]=g*v,i[4]=R-S*y,i[8]=A*y+b,i[1]=y,i[5]=f*v,i[9]=-p*v,i[2]=-m*v,i[6]=b*y+A,i[10]=S-R*y}else if(t.order==="XZY"){const S=f*g,b=f*m,A=p*g,R=p*m;i[0]=g*v,i[4]=-y,i[8]=m*v,i[1]=S*y+R,i[5]=f*v,i[9]=b*y-A,i[2]=A*y-b,i[6]=p*v,i[10]=R*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pS,t,mS)}lookAt(t,i,r){const c=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ja.crossVectors(r,Wn),ja.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ja.crossVectors(r,Wn)),ja.normalize(),dc.crossVectors(Wn,ja),c[0]=ja.x,c[4]=dc.x,c[8]=Wn.x,c[1]=ja.y,c[5]=dc.y,c[9]=Wn.y,c[2]=ja.z,c[6]=dc.z,c[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,d=this.elements,f=r[0],p=r[4],g=r[8],m=r[12],v=r[1],y=r[5],S=r[9],b=r[13],A=r[2],R=r[6],M=r[10],_=r[14],z=r[3],C=r[7],P=r[11],ie=r[15],H=c[0],O=c[4],J=c[8],D=c[12],w=c[1],G=c[5],ce=c[9],le=c[13],me=c[2],he=c[6],j=c[10],q=c[14],Z=c[3],Me=c[7],Ee=c[11],U=c[15];return d[0]=f*H+p*w+g*me+m*Z,d[4]=f*O+p*G+g*he+m*Me,d[8]=f*J+p*ce+g*j+m*Ee,d[12]=f*D+p*le+g*q+m*U,d[1]=v*H+y*w+S*me+b*Z,d[5]=v*O+y*G+S*he+b*Me,d[9]=v*J+y*ce+S*j+b*Ee,d[13]=v*D+y*le+S*q+b*U,d[2]=A*H+R*w+M*me+_*Z,d[6]=A*O+R*G+M*he+_*Me,d[10]=A*J+R*ce+M*j+_*Ee,d[14]=A*D+R*le+M*q+_*U,d[3]=z*H+C*w+P*me+ie*Z,d[7]=z*O+C*G+P*he+ie*Me,d[11]=z*J+C*ce+P*j+ie*Ee,d[15]=z*D+C*le+P*q+ie*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],c=t[8],d=t[12],f=t[1],p=t[5],g=t[9],m=t[13],v=t[2],y=t[6],S=t[10],b=t[14],A=t[3],R=t[7],M=t[11],_=t[15];return A*(+d*g*y-c*m*y-d*p*S+r*m*S+c*p*b-r*g*b)+R*(+i*g*b-i*m*S+d*f*S-c*f*b+c*m*v-d*g*v)+M*(+i*m*y-i*p*b-d*f*y+r*f*b+d*p*v-r*m*v)+_*(-c*p*v-i*g*y+i*p*S+c*f*y-r*f*S+r*g*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],d=t[3],f=t[4],p=t[5],g=t[6],m=t[7],v=t[8],y=t[9],S=t[10],b=t[11],A=t[12],R=t[13],M=t[14],_=t[15],z=y*M*m-R*S*m+R*g*b-p*M*b-y*g*_+p*S*_,C=A*S*m-v*M*m-A*g*b+f*M*b+v*g*_-f*S*_,P=v*R*m-A*y*m+A*p*b-f*R*b-v*p*_+f*y*_,ie=A*y*g-v*R*g-A*p*S+f*R*S+v*p*M-f*y*M,H=i*z+r*C+c*P+d*ie;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return t[0]=z*O,t[1]=(R*S*d-y*M*d-R*c*b+r*M*b+y*c*_-r*S*_)*O,t[2]=(p*M*d-R*g*d+R*c*m-r*M*m-p*c*_+r*g*_)*O,t[3]=(y*g*d-p*S*d-y*c*m+r*S*m+p*c*b-r*g*b)*O,t[4]=C*O,t[5]=(v*M*d-A*S*d+A*c*b-i*M*b-v*c*_+i*S*_)*O,t[6]=(A*g*d-f*M*d-A*c*m+i*M*m+f*c*_-i*g*_)*O,t[7]=(f*S*d-v*g*d+v*c*m-i*S*m-f*c*b+i*g*b)*O,t[8]=P*O,t[9]=(A*y*d-v*R*d-A*r*b+i*R*b+v*r*_-i*y*_)*O,t[10]=(f*R*d-A*p*d+A*r*m-i*R*m-f*r*_+i*p*_)*O,t[11]=(v*p*d-f*y*d-v*r*m+i*y*m+f*r*b-i*p*b)*O,t[12]=ie*O,t[13]=(v*R*c-A*y*c+A*r*S-i*R*S-v*r*M+i*y*M)*O,t[14]=(A*p*c-f*R*c-A*r*g+i*R*g+f*r*M-i*p*M)*O,t[15]=(f*y*c-v*p*c+v*r*g-i*y*g-f*r*S+i*p*S)*O,this}scale(t){const i=this.elements,r=t.x,c=t.y,d=t.z;return i[0]*=r,i[4]*=c,i[8]*=d,i[1]*=r,i[5]*=c,i[9]*=d,i[2]*=r,i[6]*=c,i[10]*=d,i[3]*=r,i[7]*=c,i[11]*=d,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,c))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),c=Math.sin(i),d=1-r,f=t.x,p=t.y,g=t.z,m=d*f,v=d*p;return this.set(m*f+r,m*p-c*g,m*g+c*p,0,m*p+c*g,v*p+r,v*g-c*f,0,m*g-c*p,v*g+c*f,d*g*g+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,c,d,f){return this.set(1,r,d,0,t,1,f,0,i,c,1,0,0,0,0,1),this}compose(t,i,r){const c=this.elements,d=i._x,f=i._y,p=i._z,g=i._w,m=d+d,v=f+f,y=p+p,S=d*m,b=d*v,A=d*y,R=f*v,M=f*y,_=p*y,z=g*m,C=g*v,P=g*y,ie=r.x,H=r.y,O=r.z;return c[0]=(1-(R+_))*ie,c[1]=(b+P)*ie,c[2]=(A-C)*ie,c[3]=0,c[4]=(b-P)*H,c[5]=(1-(S+_))*H,c[6]=(M+z)*H,c[7]=0,c[8]=(A+C)*O,c[9]=(M-z)*O,c[10]=(1-(S+R))*O,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,r){const c=this.elements;let d=mr.set(c[0],c[1],c[2]).length();const f=mr.set(c[4],c[5],c[6]).length(),p=mr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(d=-d),t.x=c[12],t.y=c[13],t.z=c[14],hi.copy(this);const m=1/d,v=1/f,y=1/p;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=v,hi.elements[5]*=v,hi.elements[6]*=v,hi.elements[8]*=y,hi.elements[9]*=y,hi.elements[10]*=y,i.setFromRotationMatrix(hi),r.x=d,r.y=f,r.z=p,this}makePerspective(t,i,r,c,d,f,p=ea){const g=this.elements,m=2*d/(i-t),v=2*d/(r-c),y=(i+t)/(i-t),S=(r+c)/(r-c);let b,A;if(p===ea)b=-(f+d)/(f-d),A=-2*f*d/(f-d);else if(p===Hc)b=-f/(f-d),A=-f*d/(f-d);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return g[0]=m,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=v,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,r,c,d,f,p=ea){const g=this.elements,m=1/(i-t),v=1/(r-c),y=1/(f-d),S=(i+t)*m,b=(r+c)*v;let A,R;if(p===ea)A=(f+d)*y,R=-2*y;else if(p===Hc)A=d*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return g[0]=2*m,g[4]=0,g[8]=0,g[12]=-S,g[1]=0,g[5]=2*v,g[9]=0,g[13]=-b,g[2]=0,g[6]=0,g[10]=R,g[14]=-A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<16;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const mr=new re,hi=new ln,pS=new re(0,0,0),mS=new re(1,1,1),ja=new re,dc=new re,Wn=new re,Nx=new ln,wx=new kl;class na{constructor(t=0,i=0,r=0,c=na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,c=this._order){return this._x=t,this._y=i,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const c=t.elements,d=c[0],f=c[4],p=c[8],g=c[1],m=c[5],v=c[9],y=c[2],S=c[6],b=c[10];switch(i){case"XYZ":this._y=Math.asin(Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,d)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-y,d),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(g,d));break;case"ZYX":this._y=Math.asin(-Pn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(g,d)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,d)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(p,d)):(this._x=Math.atan2(-v,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Nx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wx.setFromEuler(this),this.setFromQuaternion(wx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gS=0;const Rx=new re,gr=new kl,Zi=new ln,hc=new re,Il=new re,xS=new re,vS=new kl,Cx=new re(1,0,0),Dx=new re(0,1,0),Ux=new re(0,0,1),jx={type:"added"},_S={type:"removed"},xr={type:"childadded",child:null},gh={type:"childremoved",child:null};class Zn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const t=new re,i=new na,r=new kl,c=new re(1,1,1);function d(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(d),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new ln},normalMatrix:{value:new lt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Cx,t)}rotateY(t){return this.rotateOnAxis(Dx,t)}rotateZ(t){return this.rotateOnAxis(Ux,t)}translateOnAxis(t,i){return Rx.copy(t).applyQuaternion(this.quaternion),this.position.add(Rx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Cx,t)}translateY(t){return this.translateOnAxis(Dx,t)}translateZ(t){return this.translateOnAxis(Ux,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hc.copy(t):hc.set(t,i,r);const c=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Il,hc,this.up):Zi.lookAt(hc,Il,this.up),this.quaternion.setFromRotationMatrix(Zi),c&&(Zi.extractRotation(c.matrixWorld),gr.setFromRotationMatrix(Zi),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jx),xr.child=t,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_S),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jx),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,c=this.children.length;r<c;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,t,xS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,vS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function d(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=d(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,v=g.length;m<v;m++){const y=g[m];d(t.shapes,y)}else d(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(d(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(d(t.materials,this.material[g]));c.material=p}else c.material=d(t.materials,this.material);if(this.children.length>0){c.children=[];for(let p=0;p<this.children.length;p++)c.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];c.animations.push(d(t.animations,g))}}if(i){const p=f(t.geometries),g=f(t.materials),m=f(t.textures),v=f(t.images),y=f(t.shapes),S=f(t.skeletons),b=f(t.animations),A=f(t.nodes);p.length>0&&(r.geometries=p),g.length>0&&(r.materials=g),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=c,r;function f(p){const g=[];for(const m in p){const v=p[m];delete v.metadata,g.push(v)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const c=t.children[r];this.add(c.clone())}return this}}Zn.DEFAULT_UP=new re(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new re,Ki=new re,xh=new re,Qi=new re,vr=new re,_r=new re,Lx=new re,vh=new re,_h=new re,yh=new re;class wi{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,c){c.subVectors(r,i),fi.subVectors(t,i),c.cross(fi);const d=c.lengthSq();return d>0?c.multiplyScalar(1/Math.sqrt(d)):c.set(0,0,0)}static getBarycoord(t,i,r,c,d){fi.subVectors(c,i),Ki.subVectors(r,i),xh.subVectors(t,i);const f=fi.dot(fi),p=fi.dot(Ki),g=fi.dot(xh),m=Ki.dot(Ki),v=Ki.dot(xh),y=f*m-p*p;if(y===0)return d.set(0,0,0),null;const S=1/y,b=(m*g-p*v)*S,A=(f*v-p*g)*S;return d.set(1-b-A,A,b)}static containsPoint(t,i,r,c){return this.getBarycoord(t,i,r,c,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,i,r,c,d,f,p,g){return this.getBarycoord(t,i,r,c,Qi)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(d,Qi.x),g.addScaledVector(f,Qi.y),g.addScaledVector(p,Qi.z),g)}static isFrontFacing(t,i,r,c){return fi.subVectors(r,i),Ki.subVectors(t,i),fi.cross(Ki).dot(c)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,c){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,r,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),fi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,c,d){return wi.getInterpolation(t,this.a,this.b,this.c,i,r,c,d)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,c=this.b,d=this.c;let f,p;vr.subVectors(c,r),_r.subVectors(d,r),vh.subVectors(t,r);const g=vr.dot(vh),m=_r.dot(vh);if(g<=0&&m<=0)return i.copy(r);_h.subVectors(t,c);const v=vr.dot(_h),y=_r.dot(_h);if(v>=0&&y<=v)return i.copy(c);const S=g*y-v*m;if(S<=0&&g>=0&&v<=0)return f=g/(g-v),i.copy(r).addScaledVector(vr,f);yh.subVectors(t,d);const b=vr.dot(yh),A=_r.dot(yh);if(A>=0&&b<=A)return i.copy(d);const R=b*m-g*A;if(R<=0&&m>=0&&A<=0)return p=m/(m-A),i.copy(r).addScaledVector(_r,p);const M=v*A-b*y;if(M<=0&&y-v>=0&&b-A>=0)return Lx.subVectors(d,c),p=(y-v)/(y-v+(b-A)),i.copy(c).addScaledVector(Lx,p);const _=1/(M+R+S);return f=R*_,p=S*_,i.copy(r).addScaledVector(vr,f).addScaledVector(_r,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Sh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Rt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Et.toWorkingColorSpace(this,i),this}setRGB(t,i,r,c=Et.workingColorSpace){return this.r=t,this.g=i,this.b=r,Et.toWorkingColorSpace(this,c),this}setHSL(t,i,r,c=Et.workingColorSpace){if(t=iS(t,1),i=Pn(i,0,1),r=Pn(r,0,1),i===0)this.r=this.g=this.b=r;else{const d=r<=.5?r*(1+i):r+i-r*i,f=2*r-d;this.r=Sh(f,d,t+1/3),this.g=Sh(f,d,t),this.b=Sh(f,d,t-1/3)}return Et.toWorkingColorSpace(this,c),this}setStyle(t,i=Ti){function r(d){d!==void 0&&parseFloat(d)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let d;const f=c[1],p=c[2];switch(f){case"rgb":case"rgba":if(d=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(d[4]),this.setRGB(Math.min(255,parseInt(d[1],10))/255,Math.min(255,parseInt(d[2],10))/255,Math.min(255,parseInt(d[3],10))/255,i);if(d=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(d[4]),this.setRGB(Math.min(100,parseInt(d[1],10))/100,Math.min(100,parseInt(d[2],10))/100,Math.min(100,parseInt(d[3],10))/100,i);break;case"hsl":case"hsla":if(d=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(d[4]),this.setHSL(parseFloat(d[1])/360,parseFloat(d[2])/100,parseFloat(d[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const d=c[1],f=d.length;if(f===3)return this.setRGB(parseInt(d.charAt(0),16)/15,parseInt(d.charAt(1),16)/15,parseInt(d.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(d,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const r=Cv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}copyLinearToSRGB(t){return this.r=oh(t.r),this.g=oh(t.g),this.b=oh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Et.fromWorkingColorSpace(En.copy(this),t),Math.round(Pn(En.r*255,0,255))*65536+Math.round(Pn(En.g*255,0,255))*256+Math.round(Pn(En.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Et.workingColorSpace){Et.fromWorkingColorSpace(En.copy(this),i);const r=En.r,c=En.g,d=En.b,f=Math.max(r,c,d),p=Math.min(r,c,d);let g,m;const v=(p+f)/2;if(p===f)g=0,m=0;else{const y=f-p;switch(m=v<=.5?y/(f+p):y/(2-f-p),f){case r:g=(c-d)/y+(c<d?6:0);break;case c:g=(d-r)/y+2;break;case d:g=(r-c)/y+4;break}g/=6}return t.h=g,t.s=m,t.l=v,t}getRGB(t,i=Et.workingColorSpace){return Et.fromWorkingColorSpace(En.copy(this),i),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Ti){Et.fromWorkingColorSpace(En.copy(this),t);const i=En.r,r=En.g,c=En.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(t,i,r){return this.getHSL(La),this.setHSL(La.h+t,La.s+i,La.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(La),t.getHSL(fc);const r=rh(La.h,fc.h,i),c=rh(La.s,fc.s,i),d=rh(La.l,fc.l,i);return this.setHSL(r,c,d),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,c=this.b,d=t.elements;return this.r=d[0]*i+d[3]*r+d[6]*c,this.g=d[1]*i+d[4]*r+d[7]*c,this.b=d[2]*i+d[5]*r+d[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Rt;Rt.NAMES=Cv;let yS=0;class ql extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Vl(),this.name="",this.type="Material",this.blending=wr,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=jh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Uh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==Ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ic&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(d){const f=[];for(const p in d){const g=d[p];delete g.metadata,f.push(g)}return f}if(i){const d=c(t.textures),f=c(t.images);d.length>0&&(r.textures=d),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const c=i.length;r=new Array(c);for(let d=0;d!==c;++d)r[d]=i[d].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Dv extends ql{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new re,pc=new Tt;class xi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Sx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Fl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let c=0,d=this.itemSize;c<d;c++)this.array[t+c]=i.array[r+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=jl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=On(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=jl(i,this.array)),i}setX(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=jl(i,this.array)),i}setY(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=jl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=jl(i,this.array)),i}setW(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,c){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),c=On(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this}setXYZW(t,i,r,c,d){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),c=On(c,this.array),d=On(d,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this.array[t+3]=d,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sx&&(t.usage=this.usage),t}}class Uv extends xi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class jv extends xi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class As extends xi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let SS=0;const ai=new ln,Mh=new Zn,yr=new re,Yn=new Xl,zl=new Xl,dn=new re;class Ha extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Vl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Av(t)?jv:Uv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const d=new lt().getNormalMatrix(t);r.applyNormalMatrix(d),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,i,r){return ai.makeTranslation(t,i,r),this.applyMatrix4(ai),this}scale(t,i,r){return ai.makeScale(t,i,r),this.applyMatrix4(ai),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const i=[];for(let r=0,c=t.length;r<c;r++){const d=t[r];i.push(d.x,d.y,d.z||0)}return this.setAttribute("position",new As(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,c=i.length;r<c;r++){const d=i[r];Yn.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mf);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),i)for(let d=0,f=i.length;d<f;d++){const p=i[d];zl.setFromBufferAttribute(p),this.morphTargetsRelative?(dn.addVectors(Yn.min,zl.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,zl.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(zl.min),Yn.expandByPoint(zl.max))}Yn.getCenter(r);let c=0;for(let d=0,f=t.count;d<f;d++)dn.fromBufferAttribute(t,d),c=Math.max(c,r.distanceToSquared(dn));if(i)for(let d=0,f=i.length;d<f;d++){const p=i[d],g=this.morphTargetsRelative;for(let m=0,v=p.count;m<v;m++)dn.fromBufferAttribute(p,m),g&&(yr.fromBufferAttribute(t,m),dn.add(yr)),c=Math.max(c,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,c=i.normal,d=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],g=[];for(let J=0;J<r.count;J++)p[J]=new re,g[J]=new re;const m=new re,v=new re,y=new re,S=new Tt,b=new Tt,A=new Tt,R=new re,M=new re;function _(J,D,w){m.fromBufferAttribute(r,J),v.fromBufferAttribute(r,D),y.fromBufferAttribute(r,w),S.fromBufferAttribute(d,J),b.fromBufferAttribute(d,D),A.fromBufferAttribute(d,w),v.sub(m),y.sub(m),b.sub(S),A.sub(S);const G=1/(b.x*A.y-A.x*b.y);isFinite(G)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(y,-b.y).multiplyScalar(G),M.copy(y).multiplyScalar(b.x).addScaledVector(v,-A.x).multiplyScalar(G),p[J].add(R),p[D].add(R),p[w].add(R),g[J].add(M),g[D].add(M),g[w].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let J=0,D=z.length;J<D;++J){const w=z[J],G=w.start,ce=w.count;for(let le=G,me=G+ce;le<me;le+=3)_(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const C=new re,P=new re,ie=new re,H=new re;function O(J){ie.fromBufferAttribute(c,J),H.copy(ie);const D=p[J];C.copy(D),C.sub(ie.multiplyScalar(ie.dot(D))).normalize(),P.crossVectors(H,D);const G=P.dot(g[J])<0?-1:1;f.setXYZW(J,C.x,C.y,C.z,G)}for(let J=0,D=z.length;J<D;++J){const w=z[J],G=w.start,ce=w.count;for(let le=G,me=G+ce;le<me;le+=3)O(t.getX(le+0)),O(t.getX(le+1)),O(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const c=new re,d=new re,f=new re,p=new re,g=new re,m=new re,v=new re,y=new re;if(t)for(let S=0,b=t.count;S<b;S+=3){const A=t.getX(S+0),R=t.getX(S+1),M=t.getX(S+2);c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,R),f.fromBufferAttribute(i,M),v.subVectors(f,d),y.subVectors(c,d),v.cross(y),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),p.add(v),g.add(v),m.add(v),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(R,g.x,g.y,g.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,b=i.count;S<b;S+=3)c.fromBufferAttribute(i,S+0),d.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),v.subVectors(f,d),y.subVectors(c,d),v.cross(y),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)dn.fromBufferAttribute(t,i),dn.normalize(),t.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function t(p,g){const m=p.array,v=p.itemSize,y=p.normalized,S=new m.constructor(g.length*v);let b=0,A=0;for(let R=0,M=g.length;R<M;R++){p.isInterleavedBufferAttribute?b=g[R]*p.data.stride+p.offset:b=g[R]*v;for(let _=0;_<v;_++)S[A++]=m[b++]}return new xi(S,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ha,r=this.index.array,c=this.attributes;for(const p in c){const g=c[p],m=t(g,r);i.setAttribute(p,m)}const d=this.morphAttributes;for(const p in d){const g=[],m=d[p];for(let v=0,y=m.length;v<y;v++){const S=m[v],b=t(S,r);g.push(b)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,g=f.length;p<g;p++){const m=f[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const m=r[g];t.data.attributes[g]=m.toJSON(t.data)}const c={};let d=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],v=[];for(let y=0,S=m.length;y<S;y++){const b=m[y];v.push(b.toJSON(t.data))}v.length>0&&(c[g]=v,d=!0)}d&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const c=t.attributes;for(const m in c){const v=c[m];this.setAttribute(m,v.clone(i))}const d=t.morphAttributes;for(const m in d){const v=[],y=d[m];for(let S=0,b=y.length;S<b;S++)v.push(y[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ox=new ln,ls=new fS,mc=new Mf,Px=new re,Sr=new re,Mr=new re,br=new re,bh=new re,gc=new re,xc=new Tt,vc=new Tt,_c=new Tt,Ix=new re,zx=new re,Bx=new re,yc=new re,Sc=new re;class Ri extends Zn{constructor(t=new Ha,i=new Dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let d=0,f=c.length;d<f;d++){const p=c[d].name||String(d);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=d}}}}getVertexPosition(t,i){const r=this.geometry,c=r.attributes.position,d=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(c,t);const p=this.morphTargetInfluences;if(d&&p){gc.set(0,0,0);for(let g=0,m=d.length;g<m;g++){const v=p[g],y=d[g];v!==0&&(bh.fromBufferAttribute(y,t),f?gc.addScaledVector(bh,v):gc.addScaledVector(bh.sub(i),v))}i.add(gc)}return i}raycast(t,i){const r=this.geometry,c=this.material,d=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(d),ls.copy(t.ray).recast(t.near),!(mc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(mc,Px)===null||ls.origin.distanceToSquared(Px)>(t.far-t.near)**2))&&(Ox.copy(d).invert(),ls.copy(t.ray).applyMatrix4(Ox),!(r.boundingBox!==null&&ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ls)))}_computeIntersections(t,i,r){let c;const d=this.geometry,f=this.material,p=d.index,g=d.attributes.position,m=d.attributes.uv,v=d.attributes.uv1,y=d.attributes.normal,S=d.groups,b=d.drawRange;if(p!==null)if(Array.isArray(f))for(let A=0,R=S.length;A<R;A++){const M=S[A],_=f[M.materialIndex],z=Math.max(M.start,b.start),C=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let P=z,ie=C;P<ie;P+=3){const H=p.getX(P),O=p.getX(P+1),J=p.getX(P+2);c=Mc(this,_,t,r,m,v,y,H,O,J),c&&(c.faceIndex=Math.floor(P/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,b.start),R=Math.min(p.count,b.start+b.count);for(let M=A,_=R;M<_;M+=3){const z=p.getX(M),C=p.getX(M+1),P=p.getX(M+2);c=Mc(this,f,t,r,m,v,y,z,C,P),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(f))for(let A=0,R=S.length;A<R;A++){const M=S[A],_=f[M.materialIndex],z=Math.max(M.start,b.start),C=Math.min(g.count,Math.min(M.start+M.count,b.start+b.count));for(let P=z,ie=C;P<ie;P+=3){const H=P,O=P+1,J=P+2;c=Mc(this,_,t,r,m,v,y,H,O,J),c&&(c.faceIndex=Math.floor(P/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,b.start),R=Math.min(g.count,b.start+b.count);for(let M=A,_=R;M<_;M+=3){const z=M,C=M+1,P=M+2;c=Mc(this,f,t,r,m,v,y,z,C,P),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}}}function MS(o,t,i,r,c,d,f,p){let g;if(t.side===In?g=r.intersectTriangle(f,d,c,!0,p):g=r.intersectTriangle(c,d,f,t.side===Ba,p),g===null)return null;Sc.copy(p),Sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Sc);return m<i.near||m>i.far?null:{distance:m,point:Sc.clone(),object:o}}function Mc(o,t,i,r,c,d,f,p,g,m){o.getVertexPosition(p,Sr),o.getVertexPosition(g,Mr),o.getVertexPosition(m,br);const v=MS(o,t,i,r,Sr,Mr,br,yc);if(v){c&&(xc.fromBufferAttribute(c,p),vc.fromBufferAttribute(c,g),_c.fromBufferAttribute(c,m),v.uv=wi.getInterpolation(yc,Sr,Mr,br,xc,vc,_c,new Tt)),d&&(xc.fromBufferAttribute(d,p),vc.fromBufferAttribute(d,g),_c.fromBufferAttribute(d,m),v.uv1=wi.getInterpolation(yc,Sr,Mr,br,xc,vc,_c,new Tt)),f&&(Ix.fromBufferAttribute(f,p),zx.fromBufferAttribute(f,g),Bx.fromBufferAttribute(f,m),v.normal=wi.getInterpolation(yc,Sr,Mr,br,Ix,zx,Bx,new re),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:p,b:g,c:m,normal:new re,materialIndex:0};wi.getNormal(Sr,Mr,br,y.normal),v.face=y}return v}class Wl extends Ha{constructor(t=1,i=1,r=1,c=1,d=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:c,heightSegments:d,depthSegments:f};const p=this;c=Math.floor(c),d=Math.floor(d),f=Math.floor(f);const g=[],m=[],v=[],y=[];let S=0,b=0;A("z","y","x",-1,-1,r,i,t,f,d,0),A("z","y","x",1,-1,r,i,-t,f,d,1),A("x","z","y",1,1,t,r,i,c,f,2),A("x","z","y",1,-1,t,r,-i,c,f,3),A("x","y","z",1,-1,t,i,r,c,d,4),A("x","y","z",-1,-1,t,i,-r,c,d,5),this.setIndex(g),this.setAttribute("position",new As(m,3)),this.setAttribute("normal",new As(v,3)),this.setAttribute("uv",new As(y,2));function A(R,M,_,z,C,P,ie,H,O,J,D){const w=P/O,G=ie/J,ce=P/2,le=ie/2,me=H/2,he=O+1,j=J+1;let q=0,Z=0;const Me=new re;for(let Ee=0;Ee<j;Ee++){const U=Ee*G-le;for(let ne=0;ne<he;ne++){const ve=ne*w-ce;Me[R]=ve*z,Me[M]=U*C,Me[_]=me,m.push(Me.x,Me.y,Me.z),Me[R]=0,Me[M]=0,Me[_]=H>0?1:-1,v.push(Me.x,Me.y,Me.z),y.push(ne/O),y.push(1-Ee/J),q+=1}}for(let Ee=0;Ee<J;Ee++)for(let U=0;U<O;U++){const ne=S+U+he*Ee,ve=S+U+he*(Ee+1),W=S+(U+1)+he*(Ee+1),oe=S+(U+1)+he*Ee;g.push(ne,ve,oe),g.push(ve,W,oe),Z+=6}p.addGroup(b,Z,D),b+=Z,S+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const c=o[i][r];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=c.clone():Array.isArray(c)?t[i][r]=c.slice():t[i][r]=c}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Or(o[i]);for(const c in r)t[c]=r[c]}return t}function bS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Lv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Et.workingColorSpace}const ES={clone:Or,merge:Nn};var TS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends ql{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TS,this.fragmentShader=AS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=bS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const f=this.uniforms[c].value;f&&f.isTexture?i.uniforms[c]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[c]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[c]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[c]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[c]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[c]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[c]={type:"m4",value:f.toArray()}:i.uniforms[c]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ov extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new re,Fx=new Tt,Hx=new Tt;class pi extends Ov{constructor(t=50,i=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=df*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return df*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,Fx,Hx),i.subVectors(Hx,Fx)}setViewOffset(t,i,r,c,d,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=d,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sh*.5*this.fov)/this.zoom,r=2*i,c=this.aspect*r,d=-.5*c;const f=this.view;if(this.view!==null&&this.view.enabled){const g=f.fullWidth,m=f.fullHeight;d+=f.offsetX*c/g,i-=f.offsetY*r/m,c*=f.width/g,r*=f.height/m}const p=this.filmOffset;p!==0&&(d+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(d,d+c,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,Tr=1;class NS extends Zn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new pi(Er,Tr,t,i);c.layers=this.layers,this.add(c);const d=new pi(Er,Tr,t,i);d.layers=this.layers,this.add(d);const f=new pi(Er,Tr,t,i);f.layers=this.layers,this.add(f);const p=new pi(Er,Tr,t,i);p.layers=this.layers,this.add(p);const g=new pi(Er,Tr,t,i);g.layers=this.layers,this.add(g);const m=new pi(Er,Tr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,c,d,f,p,g]=i;for(const m of i)this.remove(m);if(t===ea)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),d.up.set(0,0,-1),d.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),d.up.set(0,0,1),d.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[d,f,p,g,m,v]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,c),t.render(i,d),t.setRenderTarget(r,1,c),t.render(i,f),t.setRenderTarget(r,2,c),t.render(i,p),t.setRenderTarget(r,3,c),t.render(i,g),t.setRenderTarget(r,4,c),t.render(i,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,c),t.render(i,v),t.setRenderTarget(y,S,b),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Pv extends zn{constructor(t,i,r,c,d,f,p,g,m,v){t=t!==void 0?t:[],i=i!==void 0?i:Dr,super(t,i,r,c,d,f,p,g,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wS extends ws{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},c=[r,r,r,r,r,r];this.texture=new Pv(c,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new Wl(5,5,5),d=new ia({name:"CubemapFromEquirect",uniforms:Or(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Ia});d.uniforms.tEquirect.value=i;const f=new Ri(c,d),p=i.minFilter;return i.minFilter===Ts&&(i.minFilter=mi),new NS(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,r,c){const d=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,c);t.setRenderTarget(d)}}const Eh=new re,RS=new re,CS=new lt;class ys{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,c){return this.normal.set(t,i,r),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const c=Eh.subVectors(r,i).cross(RS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Eh),c=this.normal.dot(r);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return d<0||d>1?null:i.copy(t.start).addScaledVector(r,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||CS.getNormalMatrix(t),c=this.coplanarPoint(Eh).applyMatrix4(t),d=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(d),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Mf,bc=new re;class Iv{constructor(t=new ys,i=new ys,r=new ys,c=new ys,d=new ys,f=new ys){this.planes=[t,i,r,c,d,f]}set(t,i,r,c,d,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(c),p[4].copy(d),p[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ea){const r=this.planes,c=t.elements,d=c[0],f=c[1],p=c[2],g=c[3],m=c[4],v=c[5],y=c[6],S=c[7],b=c[8],A=c[9],R=c[10],M=c[11],_=c[12],z=c[13],C=c[14],P=c[15];if(r[0].setComponents(g-d,S-m,M-b,P-_).normalize(),r[1].setComponents(g+d,S+m,M+b,P+_).normalize(),r[2].setComponents(g+f,S+v,M+A,P+z).normalize(),r[3].setComponents(g-f,S-v,M-A,P-z).normalize(),r[4].setComponents(g-p,S-y,M-R,P-C).normalize(),i===ea)r[5].setComponents(g+p,S+y,M+R,P+C).normalize();else if(i===Hc)r[5].setComponents(p,y,R,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){const i=this.planes,r=t.center,c=-t.radius;for(let d=0;d<6;d++)if(i[d].distanceToPoint(r)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const c=i[r];if(bc.x=c.normal.x>0?t.max.x:t.min.x,bc.y=c.normal.y>0?t.max.y:t.min.y,bc.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zv(){let o=null,t=!1,i=null,r=null;function c(d,f){i(d,f),r=o.requestAnimationFrame(c)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(c),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(d){i=d},setContext:function(d){o=d}}}function DS(o){const t=new WeakMap;function i(p,g){const m=p.array,v=p.usage,y=m.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,m,v),p.onUploadCallback();let b;if(m instanceof Float32Array)b=o.FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=o.SHORT;else if(m instanceof Uint32Array)b=o.UNSIGNED_INT;else if(m instanceof Int32Array)b=o.INT;else if(m instanceof Int8Array)b=o.BYTE;else if(m instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:y}}function r(p,g,m){const v=g.array,y=g._updateRange,S=g.updateRanges;if(o.bindBuffer(m,p),y.count===-1&&S.length===0&&o.bufferSubData(m,0,v),S.length!==0){for(let b=0,A=S.length;b<A;b++){const R=S[b];o.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}g.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(m,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count),y.count=-1),g.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function d(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(o.deleteBuffer(g.buffer),t.delete(p))}function f(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,p,g),m.version=p.version}}return{get:c,remove:d,update:f}}class Xc extends Ha{constructor(t=1,i=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:c};const d=t/2,f=i/2,p=Math.floor(r),g=Math.floor(c),m=p+1,v=g+1,y=t/p,S=i/g,b=[],A=[],R=[],M=[];for(let _=0;_<v;_++){const z=_*S-f;for(let C=0;C<m;C++){const P=C*y-d;A.push(P,-z,0),R.push(0,0,1),M.push(C/p),M.push(1-_/g)}}for(let _=0;_<g;_++)for(let z=0;z<p;z++){const C=z+m*_,P=z+m*(_+1),ie=z+1+m*(_+1),H=z+1+m*_;b.push(C,P,H),b.push(P,ie,H)}this.setIndex(b),this.setAttribute("position",new As(A,3)),this.setAttribute("normal",new As(R,3)),this.setAttribute("uv",new As(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}var US=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jS=`#ifdef USE_ALPHAHASH
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
#endif`,LS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zS=`#ifdef USE_AOMAP
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
#endif`,BS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FS=`#ifdef USE_BATCHING
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
#endif`,HS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XS=`#ifdef USE_IRIDESCENCE
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
#endif`,qS=`#ifdef USE_BUMPMAP
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
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tM=`#define PI 3.141592653589793
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
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`
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
}`,uM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_M=`#ifdef USE_GRADIENTMAP
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
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
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
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
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
#endif`,CM=`struct PhysicalMaterial {
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
}`,DM=`
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
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
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HM=`#if defined( USE_POINTS_UV )
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
#endif`,GM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
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
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gb=`float getShadowMask() {
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
}`,xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,zb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,Fb=`#define DISTANCE
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,qb=`uniform vec3 diffuse;
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
}`,Wb=`#define LAMBERT
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
}`,Yb=`#define LAMBERT
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
}`,Zb=`#define MATCAP
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
}`,Kb=`#define MATCAP
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
}`,Qb=`#define NORMAL
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
}`,Jb=`#define NORMAL
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
}`,$b=`#define PHONG
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
}`,eE=`#define PHONG
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
}`,tE=`#define STANDARD
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
}`,nE=`#define STANDARD
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
}`,iE=`#define TOON
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
}`,aE=`#define TOON
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
}`,sE=`uniform float size;
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
}`,rE=`uniform vec3 diffuse;
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
}`,lE=`#include <common>
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
}`,oE=`uniform vec3 color;
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
}`,cE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:US,alphahash_pars_fragment:jS,alphamap_fragment:LS,alphamap_pars_fragment:OS,alphatest_fragment:PS,alphatest_pars_fragment:IS,aomap_fragment:zS,aomap_pars_fragment:BS,batching_pars_vertex:FS,batching_vertex:HS,begin_vertex:GS,beginnormal_vertex:VS,bsdfs:kS,iridescence_fragment:XS,bumpmap_pars_fragment:qS,clipping_planes_fragment:WS,clipping_planes_pars_fragment:YS,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:KS,color_fragment:QS,color_pars_fragment:JS,color_pars_vertex:$S,color_vertex:eM,common:tM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:aM,displacementmap_vertex:sM,emissivemap_fragment:rM,emissivemap_pars_fragment:lM,colorspace_fragment:oM,colorspace_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:dM,envmap_pars_fragment:hM,envmap_pars_vertex:fM,envmap_physical_pars_fragment:EM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:xM,fog_pars_fragment:vM,gradientmap_pars_fragment:_M,lightmap_pars_fragment:yM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:MM,lights_pars_begin:bM,lights_toon_fragment:TM,lights_toon_pars_fragment:AM,lights_phong_fragment:NM,lights_phong_pars_fragment:wM,lights_physical_fragment:RM,lights_physical_pars_fragment:CM,lights_fragment_begin:DM,lights_fragment_maps:UM,lights_fragment_end:jM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:IM,map_fragment:zM,map_pars_fragment:BM,map_particle_fragment:FM,map_particle_pars_fragment:HM,metalnessmap_fragment:GM,metalnessmap_pars_fragment:VM,morphinstance_vertex:kM,morphcolor_vertex:XM,morphnormal_vertex:qM,morphtarget_pars_vertex:WM,morphtarget_vertex:YM,normal_fragment_begin:ZM,normal_fragment_maps:KM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:$M,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:nb,clearcoat_pars_fragment:ib,iridescence_pars_fragment:ab,opaque_fragment:sb,packing:rb,premultiplied_alpha_fragment:lb,project_vertex:ob,dithering_fragment:cb,dithering_pars_fragment:ub,roughnessmap_fragment:db,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:pb,shadowmap_vertex:mb,shadowmask_pars_fragment:gb,skinbase_vertex:xb,skinning_pars_vertex:vb,skinning_vertex:_b,skinnormal_vertex:yb,specularmap_fragment:Sb,specularmap_pars_fragment:Mb,tonemapping_fragment:bb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:Ab,uv_pars_fragment:Nb,uv_pars_vertex:wb,uv_vertex:Rb,worldpos_vertex:Cb,background_vert:Db,background_frag:Ub,backgroundCube_vert:jb,backgroundCube_frag:Lb,cube_vert:Ob,cube_frag:Pb,depth_vert:Ib,depth_frag:zb,distanceRGBA_vert:Bb,distanceRGBA_frag:Fb,equirect_vert:Hb,equirect_frag:Gb,linedashed_vert:Vb,linedashed_frag:kb,meshbasic_vert:Xb,meshbasic_frag:qb,meshlambert_vert:Wb,meshlambert_frag:Yb,meshmatcap_vert:Zb,meshmatcap_frag:Kb,meshnormal_vert:Qb,meshnormal_frag:Jb,meshphong_vert:$b,meshphong_frag:eE,meshphysical_vert:tE,meshphysical_frag:nE,meshtoon_vert:iE,meshtoon_frag:aE,points_vert:sE,points_frag:rE,shadow_vert:lE,shadow_frag:oE,sprite_vert:cE,sprite_frag:uE},Ue={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ai={basic:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Nn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Nn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Nn([Ue.points,Ue.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Nn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Nn([Ue.common,Ue.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Nn([Ue.sprite,Ue.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Nn([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Nn([Ue.lights,Ue.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ai.physical={uniforms:Nn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Ec={r:0,b:0,g:0},cs=new na,dE=new ln;function hE(o,t,i,r,c,d,f){const p=new Rt(0);let g=d===!0?0:1,m,v,y=null,S=0,b=null;function A(z){let C=z.isScene===!0?z.background:null;return C&&C.isTexture&&(C=(z.backgroundBlurriness>0?i:t).get(C)),C}function R(z){let C=!1;const P=A(z);P===null?_(p,g):P&&P.isColor&&(_(P,1),C=!0);const ie=o.xr.getEnvironmentBlendMode();ie==="additive"?r.buffers.color.setClear(0,0,0,1,f):ie==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,C){const P=A(C);P&&(P.isCubeTexture||P.mapping===Vc)?(v===void 0&&(v=new Ri(new Wl(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:Or(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(ie,H,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(v)),cs.copy(C.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),v.material.uniforms.envMap.value=P,v.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler(cs)),v.material.toneMapped=Et.getTransfer(P.colorSpace)!==Bt,(y!==P||S!==P.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,y=P,S=P.version,b=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Ri(new Xc(2,2),new ia({name:"BackgroundMaterial",uniforms:Or(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Et.getTransfer(P.colorSpace)!==Bt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||S!==P.version||b!==o.toneMapping)&&(m.material.needsUpdate=!0,y=P,S=P.version,b=o.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function _(z,C){z.getRGB(Ec,Lv(o)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,C,f)}return{getClearColor:function(){return p},setClearColor:function(z,C=1){p.set(z),g=C,_(p,g)},getClearAlpha:function(){return g},setClearAlpha:function(z){g=z,_(p,g)},render:R,addToRenderList:M}}function fE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},c=S(null);let d=c,f=!1;function p(w,G,ce,le,me){let he=!1;const j=y(le,ce,G);d!==j&&(d=j,m(d.object)),he=b(w,le,ce,me),he&&A(w,le,ce,me),me!==null&&t.update(me,o.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,P(w,G,ce,le),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function g(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function y(w,G,ce){const le=ce.wireframe===!0;let me=r[w.id];me===void 0&&(me={},r[w.id]=me);let he=me[G.id];he===void 0&&(he={},me[G.id]=he);let j=he[le];return j===void 0&&(j=S(g()),he[le]=j),j}function S(w){const G=[],ce=[],le=[];for(let me=0;me<i;me++)G[me]=0,ce[me]=0,le[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ce,attributeDivisors:le,object:w,attributes:{},index:null}}function b(w,G,ce,le){const me=d.attributes,he=G.attributes;let j=0;const q=ce.getAttributes();for(const Z in q)if(q[Z].location>=0){const Ee=me[Z];let U=he[Z];if(U===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),Ee===void 0||Ee.attribute!==U||U&&Ee.data!==U.data)return!0;j++}return d.attributesNum!==j||d.index!==le}function A(w,G,ce,le){const me={},he=G.attributes;let j=0;const q=ce.getAttributes();for(const Z in q)if(q[Z].location>=0){let Ee=he[Z];Ee===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor));const U={};U.attribute=Ee,Ee&&Ee.data&&(U.data=Ee.data),me[Z]=U,j++}d.attributes=me,d.attributesNum=j,d.index=le}function R(){const w=d.newAttributes;for(let G=0,ce=w.length;G<ce;G++)w[G]=0}function M(w){_(w,0)}function _(w,G){const ce=d.newAttributes,le=d.enabledAttributes,me=d.attributeDivisors;ce[w]=1,le[w]===0&&(o.enableVertexAttribArray(w),le[w]=1),me[w]!==G&&(o.vertexAttribDivisor(w,G),me[w]=G)}function z(){const w=d.newAttributes,G=d.enabledAttributes;for(let ce=0,le=G.length;ce<le;ce++)G[ce]!==w[ce]&&(o.disableVertexAttribArray(ce),G[ce]=0)}function C(w,G,ce,le,me,he,j){j===!0?o.vertexAttribIPointer(w,G,ce,me,he):o.vertexAttribPointer(w,G,ce,le,me,he)}function P(w,G,ce,le){R();const me=le.attributes,he=ce.getAttributes(),j=G.defaultAttributeValues;for(const q in he){const Z=he[q];if(Z.location>=0){let Me=me[q];if(Me===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const Ee=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const ve=ne.buffer,W=ne.type,oe=ne.bytesPerElement,ye=W===o.INT||W===o.UNSIGNED_INT||Me.gpuType===mf;if(Me.isInterleavedBufferAttribute){const be=Me.data,He=be.stride,Fe=Me.offset;if(be.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)_(Z.location+nt,be.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let nt=0;nt<Z.locationSize;nt++)M(Z.location+nt);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let nt=0;nt<Z.locationSize;nt++)C(Z.location+nt,U/Z.locationSize,W,Ee,He*oe,(Fe+U/Z.locationSize*nt)*oe,ye)}else{if(Me.isInstancedBufferAttribute){for(let be=0;be<Z.locationSize;be++)_(Z.location+be,Me.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let be=0;be<Z.locationSize;be++)M(Z.location+be);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let be=0;be<Z.locationSize;be++)C(Z.location+be,U/Z.locationSize,W,Ee,U*oe,U/Z.locationSize*be*oe,ye)}}else if(j!==void 0){const Ee=j[q];if(Ee!==void 0)switch(Ee.length){case 2:o.vertexAttrib2fv(Z.location,Ee);break;case 3:o.vertexAttrib3fv(Z.location,Ee);break;case 4:o.vertexAttrib4fv(Z.location,Ee);break;default:o.vertexAttrib1fv(Z.location,Ee)}}}}z()}function ie(){J();for(const w in r){const G=r[w];for(const ce in G){const le=G[ce];for(const me in le)v(le[me].object),delete le[me];delete G[ce]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const ce in G){const le=G[ce];for(const me in le)v(le[me].object),delete le[me];delete G[ce]}delete r[w.id]}function O(w){for(const G in r){const ce=r[G];if(ce[w.id]===void 0)continue;const le=ce[w.id];for(const me in le)v(le[me].object),delete le[me];delete ce[w.id]}}function J(){D(),f=!0,d!==c&&(d=c,m(d.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:J,resetDefaultState:D,dispose:ie,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:z}}function pE(o,t,i){let r;function c(m){r=m}function d(m,v){o.drawArrays(r,m,v),i.update(v,r,1)}function f(m,v,y){y!==0&&(o.drawArraysInstanced(r,m,v,y),i.update(v,r,y))}function p(m,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let b=0;for(let A=0;A<y;A++)b+=v[A];i.update(b,r,1)}function g(m,v,y,S){if(y===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<m.length;A++)f(m[A],v[A],S[A]);else{b.multiDrawArraysInstancedWEBGL(r,m,0,v,0,S,0,y);let A=0;for(let R=0;R<y;R++)A+=v[R];for(let R=0;R<S.length;R++)i.update(A,r,S[R])}}this.setMode=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function mE(o,t,i,r){let c;function d(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function f(H){return!(H!==gi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const O=H===Gl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==ta&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==$i&&!O)}function g(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=g(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),R=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=b>0,ie=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:d,getMaxPrecision:g,textureFormatReadable:f,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:R,maxAttributes:M,maxVertexUniforms:_,maxVaryings:z,maxFragmentUniforms:C,vertexTextures:P,maxSamples:ie}}function gE(o){const t=this;let i=null,r=0,c=!1,d=!1;const f=new ys,p=new lt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const b=y.length!==0||S||r!==0||c;return c=S,r=y.length,b},this.beginShadows=function(){d=!0,v(null)},this.endShadows=function(){d=!1},this.setGlobalState=function(y,S){i=v(y,S,0)},this.setState=function(y,S,b){const A=y.clippingPlanes,R=y.clipIntersection,M=y.clipShadows,_=o.get(y);if(!c||A===null||A.length===0||d&&!M)d?v(null):m();else{const z=d?0:r,C=z*4;let P=_.clippingState||null;g.value=P,P=v(A,S,C,b);for(let ie=0;ie!==C;++ie)P[ie]=i[ie];_.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(y,S,b,A){const R=y!==null?y.length:0;let M=null;if(R!==0){if(M=g.value,A!==!0||M===null){const _=b+R*4,z=S.matrixWorldInverse;p.getNormalMatrix(z),(M===null||M.length<_)&&(M=new Float32Array(_));for(let C=0,P=b;C!==R;++C,P+=4)f.copy(y[C]).applyMatrix4(z,p),f.normal.toArray(M,P),M[P+3]=f.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function xE(o){let t=new WeakMap;function i(f,p){return p===Lh?f.mapping=Dr:p===Oh&&(f.mapping=Ur),f}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===Lh||p===Oh)if(t.has(f)){const g=t.get(f).texture;return i(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const m=new wS(g.height);return m.fromEquirectangularTexture(o,f),t.set(f,m),f.addEventListener("dispose",c),i(m.texture,f.mapping)}else return null}}return f}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){t=new WeakMap}return{get:r,dispose:d}}class Bv extends Ov{constructor(t=-1,i=1,r=1,c=-1,d=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=c,this.near=d,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,c,d,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=d,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let d=r-t,f=r+t,p=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;d+=m*this.view.offsetX,f=d+m*this.view.width,p-=v*this.view.offsetY,g=p-v*this.view.height}this.projectionMatrix.makeOrthographic(d,f,p,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Nr=4,Gx=[.125,.215,.35,.446,.526,.582],bs=20,Th=new Bv,Vx=new Rt;let Ah=null,Nh=0,wh=0,Rh=!1;const Ss=(1+Math.sqrt(5))/2,Ar=1/Ss,kx=[new re(-Ss,Ar,0),new re(Ss,Ar,0),new re(-Ar,0,Ss),new re(Ar,0,Ss),new re(0,Ss,-Ar),new re(0,Ss,Ar),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class Xx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,c=100){Ah=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,r,c,d),i>0&&this._blur(d,0,0,i),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Nh,wh),this._renderer.xr.enabled=Rh,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Gl,format:gi,colorSpace:Fa,depthBuffer:!1},c=qx(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(t,i,r);const{_lodMax:d}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vE(d)),this._blurMaterial=_E(d,t,i)}return c}_compileMaterial(t){const i=new Ri(this._lodPlanes[0],t);this._renderer.compile(i,Th)}_sceneToCubeUV(t,i,r,c){const p=new pi(90,1,i,r),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Vx),v.toneMapping=za,v.autoClear=!1;const b=new Dv({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),A=new Ri(new Wl,b);let R=!1;const M=t.background;M?M.isColor&&(b.color.copy(M),t.background=null,R=!0):(b.color.copy(Vx),R=!0);for(let _=0;_<6;_++){const z=_%3;z===0?(p.up.set(0,g[_],0),p.lookAt(m[_],0,0)):z===1?(p.up.set(0,0,g[_]),p.lookAt(0,m[_],0)):(p.up.set(0,g[_],0),p.lookAt(0,0,m[_]));const C=this._cubeSize;Tc(c,z*C,_>2?C:0,C,C),v.setRenderTarget(c),R&&v.render(A,p),v.render(t,p)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=M}_textureToCubeUV(t,i){const r=this._renderer,c=t.mapping===Dr||t.mapping===Ur;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wx());const d=c?this._cubemapMaterial:this._equirectMaterial,f=new Ri(this._lodPlanes[0],d),p=d.uniforms;p.envMap.value=t;const g=this._cubeSize;Tc(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(f,Th)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const c=this._lodPlanes.length;for(let d=1;d<c;d++){const f=Math.sqrt(this._sigmas[d]*this._sigmas[d]-this._sigmas[d-1]*this._sigmas[d-1]),p=kx[(c-d-1)%kx.length];this._blur(t,d-1,d,f,p)}i.autoClear=r}_blur(t,i,r,c,d){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,c,"latitudinal",d),this._halfBlur(f,t,r,r,c,"longitudinal",d)}_halfBlur(t,i,r,c,d,f,p){const g=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Ri(this._lodPlanes[c],m),S=m.uniforms,b=this._sizeLods[r]-1,A=isFinite(d)?Math.PI/(2*b):2*Math.PI/(2*bs-1),R=d/A,M=isFinite(d)?1+Math.floor(v*R):bs;M>bs&&console.warn(`sigmaRadians, ${d}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${bs}`);const _=[];let z=0;for(let O=0;O<bs;++O){const J=O/R,D=Math.exp(-J*J/2);_.push(D),O===0?z+=D:O<M&&(z+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/z;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=f==="latitudinal",p&&(S.poleAxis.value=p);const{_lodMax:C}=this;S.dTheta.value=A,S.mipInt.value=C-r;const P=this._sizeLods[c],ie=3*P*(c>C-Nr?c-C+Nr:0),H=4*(this._cubeSize-P);Tc(i,ie,H,3*P,2*P),g.setRenderTarget(i),g.render(y,Th)}}function vE(o){const t=[],i=[],r=[];let c=o;const d=o-Nr+1+Gx.length;for(let f=0;f<d;f++){const p=Math.pow(2,c);i.push(p);let g=1/p;f>o-Nr?g=Gx[f-o+Nr-1]:f===0&&(g=0),r.push(g);const m=1/(p-2),v=-m,y=1+m,S=[v,v,y,v,y,y,v,v,y,y,v,y],b=6,A=6,R=3,M=2,_=1,z=new Float32Array(R*A*b),C=new Float32Array(M*A*b),P=new Float32Array(_*A*b);for(let H=0;H<b;H++){const O=H%3*2/3-1,J=H>2?0:-1,D=[O,J,0,O+2/3,J,0,O+2/3,J+1,0,O,J,0,O+2/3,J+1,0,O,J+1,0];z.set(D,R*A*H),C.set(S,M*A*H);const w=[H,H,H,H,H,H];P.set(w,_*A*H)}const ie=new Ha;ie.setAttribute("position",new xi(z,R)),ie.setAttribute("uv",new xi(C,M)),ie.setAttribute("faceIndex",new xi(P,_)),t.push(ie),c>Nr&&c--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function qx(o,t,i){const r=new ws(o,t,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tc(o,t,i,r,c){o.viewport.set(t,i,r,c),o.scissor.set(t,i,r,c)}function _E(o,t,i){const r=new Float32Array(bs),c=new re(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:bf(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Wx(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Yx(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function bf(){return`

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
	`}function yE(o){let t=new WeakMap,i=null;function r(p){if(p&&p.isTexture){const g=p.mapping,m=g===Lh||g===Oh,v=g===Dr||g===Ur;if(m||v){let y=t.get(p);const S=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new Xx(o)),y=m?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const b=p.image;return m&&b&&b.height>0||v&&b&&c(b)?(i===null&&(i=new Xx(o)),y=m?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",d),y.texture):null}}}return p}function c(p){let g=0;const m=6;for(let v=0;v<m;v++)p[v]!==void 0&&g++;return g===m}function d(p){const g=p.target;g.removeEventListener("dispose",d);const m=t.get(g);m!==void 0&&(t.delete(g),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function SE(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let c;switch(r){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(r)}return t[r]=c,c}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const c=i(r);return c===null&&Fl("THREE.WebGLRenderer: "+r+" extension not supported."),c}}}function ME(o,t,i,r){const c={},d=new WeakMap;function f(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);for(const A in S.morphAttributes){const R=S.morphAttributes[A];for(let M=0,_=R.length;M<_;M++)t.remove(R[M])}S.removeEventListener("dispose",f),delete c[S.id];const b=d.get(S);b&&(t.remove(b),d.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function p(y,S){return c[S.id]===!0||(S.addEventListener("dispose",f),c[S.id]=!0,i.memory.geometries++),S}function g(y){const S=y.attributes;for(const A in S)t.update(S[A],o.ARRAY_BUFFER);const b=y.morphAttributes;for(const A in b){const R=b[A];for(let M=0,_=R.length;M<_;M++)t.update(R[M],o.ARRAY_BUFFER)}}function m(y){const S=[],b=y.index,A=y.attributes.position;let R=0;if(b!==null){const z=b.array;R=b.version;for(let C=0,P=z.length;C<P;C+=3){const ie=z[C+0],H=z[C+1],O=z[C+2];S.push(ie,H,H,O,O,ie)}}else if(A!==void 0){const z=A.array;R=A.version;for(let C=0,P=z.length/3-1;C<P;C+=3){const ie=C+0,H=C+1,O=C+2;S.push(ie,H,H,O,O,ie)}}else return;const M=new(Av(S)?jv:Uv)(S,1);M.version=R;const _=d.get(y);_&&t.remove(_),d.set(y,M)}function v(y){const S=d.get(y);if(S){const b=y.index;b!==null&&S.version<b.version&&m(y)}else m(y);return d.get(y)}return{get:p,update:g,getWireframeAttribute:v}}function bE(o,t,i){let r;function c(S){r=S}let d,f;function p(S){d=S.type,f=S.bytesPerElement}function g(S,b){o.drawElements(r,b,d,S*f),i.update(b,r,1)}function m(S,b,A){A!==0&&(o.drawElementsInstanced(r,b,d,S*f,A),i.update(b,r,A))}function v(S,b,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,d,S,0,A);let M=0;for(let _=0;_<A;_++)M+=b[_];i.update(M,r,1)}function y(S,b,A,R){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)m(S[_]/f,b[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,b,0,d,S,0,R,0,A);let _=0;for(let z=0;z<A;z++)_+=b[z];for(let z=0;z<R.length;z++)i.update(_,r,R[z])}}this.setMode=c,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function EE(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(d,f,p){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=p*(d/3);break;case o.LINES:i.lines+=p*(d/2);break;case o.LINE_STRIP:i.lines+=p*(d-1);break;case o.LINE_LOOP:i.lines+=p*d;break;case o.POINTS:i.points+=p*d;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:r}}function TE(o,t,i){const r=new WeakMap,c=new hn;function d(f,p,g){const m=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=v!==void 0?v.length:0;let S=r.get(p);if(S===void 0||S.count!==y){let w=function(){J.dispose(),r.delete(p),p.removeEventListener("dispose",w)};var b=w;S!==void 0&&S.texture.dispose();const A=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],C=p.morphAttributes.color||[];let P=0;A===!0&&(P=1),R===!0&&(P=2),M===!0&&(P=3);let ie=p.attributes.position.count*P,H=1;ie>t.maxTextureSize&&(H=Math.ceil(ie/t.maxTextureSize),ie=t.maxTextureSize);const O=new Float32Array(ie*H*4*y),J=new wv(O,ie,H,y);J.type=$i,J.needsUpdate=!0;const D=P*4;for(let G=0;G<y;G++){const ce=_[G],le=z[G],me=C[G],he=ie*H*4*G;for(let j=0;j<ce.count;j++){const q=j*D;A===!0&&(c.fromBufferAttribute(ce,j),O[he+q+0]=c.x,O[he+q+1]=c.y,O[he+q+2]=c.z,O[he+q+3]=0),R===!0&&(c.fromBufferAttribute(le,j),O[he+q+4]=c.x,O[he+q+5]=c.y,O[he+q+6]=c.z,O[he+q+7]=0),M===!0&&(c.fromBufferAttribute(me,j),O[he+q+8]=c.x,O[he+q+9]=c.y,O[he+q+10]=c.z,O[he+q+11]=me.itemSize===4?c.w:1)}}S={count:y,texture:J,size:new Tt(ie,H)},r.set(p,S),p.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const R=p.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",R),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:d}}function AE(o,t,i,r){let c=new WeakMap;function d(g){const m=r.render.frame,v=g.geometry,y=t.get(g,v);if(c.get(y)!==m&&(t.update(y),c.set(y,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),c.get(g)!==m&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),c.set(g,m))),g.isSkinnedMesh){const S=g.skeleton;c.get(S)!==m&&(S.update(),c.set(S,m))}return y}function f(){c=new WeakMap}function p(g){const m=g.target;m.removeEventListener("dispose",p),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:d,dispose:f}}class Fv extends zn{constructor(t,i,r,c,d,f,p,g,m,v=Rr){if(v!==Rr&&v!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Rr&&(r=Ns),r===void 0&&v===Lr&&(r=jr),super(null,c,d,f,p,g,v,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=p!==void 0?p:si,this.minFilter=g!==void 0?g:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Hv=new zn,Zx=new Fv(1,1),Gv=new wv,Vv=new dS,kv=new Pv,Kx=[],Qx=[],Jx=new Float32Array(16),$x=new Float32Array(9),ev=new Float32Array(4);function Ir(o,t,i){const r=o[0];if(r<=0||r>0)return o;const c=t*i;let d=Kx[c];if(d===void 0&&(d=new Float32Array(c),Kx[c]=d),t!==0){r.toArray(d,0);for(let f=1,p=0;f!==t;++f)p+=i,o[f].toArray(d,p)}return d}function on(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function cn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function qc(o,t){let i=Qx[t];i===void 0&&(i=new Int32Array(t),Qx[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function NE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function wE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2fv(this.addr,t),cn(i,t)}}function RE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(on(i,t))return;o.uniform3fv(this.addr,t),cn(i,t)}}function CE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4fv(this.addr,t),cn(i,t)}}function DE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(on(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(on(i,r))return;ev.set(r),o.uniformMatrix2fv(this.addr,!1,ev),cn(i,r)}}function UE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(on(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(on(i,r))return;$x.set(r),o.uniformMatrix3fv(this.addr,!1,$x),cn(i,r)}}function jE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(on(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(on(i,r))return;Jx.set(r),o.uniformMatrix4fv(this.addr,!1,Jx),cn(i,r)}}function LE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function OE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2iv(this.addr,t),cn(i,t)}}function PE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3iv(this.addr,t),cn(i,t)}}function IE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4iv(this.addr,t),cn(i,t)}}function zE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function BE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2uiv(this.addr,t),cn(i,t)}}function FE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3uiv(this.addr,t),cn(i,t)}}function HE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4uiv(this.addr,t),cn(i,t)}}function GE(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let d;this.type===o.SAMPLER_2D_SHADOW?(Zx.compareFunction=Tv,d=Zx):d=Hv,i.setTexture2D(t||d,c)}function VE(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture3D(t||Vv,c)}function kE(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTextureCube(t||kv,c)}function XE(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture2DArray(t||Gv,c)}function qE(o){switch(o){case 5126:return NE;case 35664:return wE;case 35665:return RE;case 35666:return CE;case 35674:return DE;case 35675:return UE;case 35676:return jE;case 5124:case 35670:return LE;case 35667:case 35671:return OE;case 35668:case 35672:return PE;case 35669:case 35673:return IE;case 5125:return zE;case 36294:return BE;case 36295:return FE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return XE}}function WE(o,t){o.uniform1fv(this.addr,t)}function YE(o,t){const i=Ir(t,this.size,2);o.uniform2fv(this.addr,i)}function ZE(o,t){const i=Ir(t,this.size,3);o.uniform3fv(this.addr,i)}function KE(o,t){const i=Ir(t,this.size,4);o.uniform4fv(this.addr,i)}function QE(o,t){const i=Ir(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function JE(o,t){const i=Ir(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $E(o,t){const i=Ir(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function eT(o,t){o.uniform1iv(this.addr,t)}function tT(o,t){o.uniform2iv(this.addr,t)}function nT(o,t){o.uniform3iv(this.addr,t)}function iT(o,t){o.uniform4iv(this.addr,t)}function aT(o,t){o.uniform1uiv(this.addr,t)}function sT(o,t){o.uniform2uiv(this.addr,t)}function rT(o,t){o.uniform3uiv(this.addr,t)}function lT(o,t){o.uniform4uiv(this.addr,t)}function oT(o,t,i){const r=this.cache,c=t.length,d=qc(i,c);on(r,d)||(o.uniform1iv(this.addr,d),cn(r,d));for(let f=0;f!==c;++f)i.setTexture2D(t[f]||Hv,d[f])}function cT(o,t,i){const r=this.cache,c=t.length,d=qc(i,c);on(r,d)||(o.uniform1iv(this.addr,d),cn(r,d));for(let f=0;f!==c;++f)i.setTexture3D(t[f]||Vv,d[f])}function uT(o,t,i){const r=this.cache,c=t.length,d=qc(i,c);on(r,d)||(o.uniform1iv(this.addr,d),cn(r,d));for(let f=0;f!==c;++f)i.setTextureCube(t[f]||kv,d[f])}function dT(o,t,i){const r=this.cache,c=t.length,d=qc(i,c);on(r,d)||(o.uniform1iv(this.addr,d),cn(r,d));for(let f=0;f!==c;++f)i.setTexture2DArray(t[f]||Gv,d[f])}function hT(o){switch(o){case 5126:return WE;case 35664:return YE;case 35665:return ZE;case 35666:return KE;case 35674:return QE;case 35675:return JE;case 35676:return $E;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return sT;case 36295:return rT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return dT}}class fT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qE(i.type)}}class pT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hT(i.type)}}class mT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const c=this.seq;for(let d=0,f=c.length;d!==f;++d){const p=c[d];p.setValue(t,i[p.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function tv(o,t){o.seq.push(t),o.map[t.id]=t}function gT(o,t,i){const r=o.name,c=r.length;for(Ch.lastIndex=0;;){const d=Ch.exec(r),f=Ch.lastIndex;let p=d[1];const g=d[2]==="]",m=d[3];if(g&&(p=p|0),m===void 0||m==="["&&f+2===c){tv(i,m===void 0?new fT(p,o,t):new pT(p,o,t));break}else{let y=i.map[p];y===void 0&&(y=new mT(p),tv(i,y)),i=y}}}class Pc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=t.getActiveUniform(i,c),f=t.getUniformLocation(i,d.name);gT(d,f,this)}}setValue(t,i,r,c){const d=this.map[i];d!==void 0&&d.setValue(t,r,c)}setOptional(t,i,r){const c=i[r];c!==void 0&&this.setValue(t,r,c)}static upload(t,i,r,c){for(let d=0,f=i.length;d!==f;++d){const p=i[d],g=r[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,c)}}static seqWithValue(t,i){const r=[];for(let c=0,d=t.length;c!==d;++c){const f=t[c];f.id in i&&r.push(f)}return r}}function nv(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const xT=37297;let vT=0;function _T(o,t){const i=o.split(`
`),r=[],c=Math.max(t-6,0),d=Math.min(t+6,i.length);for(let f=c;f<d;f++){const p=f+1;r.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}function yT(o){const t=Et.getPrimaries(Et.workingColorSpace),i=Et.getPrimaries(o);let r;switch(t===i?r="":t===Fc&&i===Bc?r="LinearDisplayP3ToLinearSRGB":t===Bc&&i===Fc&&(r="LinearSRGBToLinearDisplayP3"),o){case Fa:case kc:return[r,"LinearTransferOETF"];case Ti:case Sf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function iv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=o.getShaderInfoLog(t).trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+_T(o.getShaderSource(t),f)}else return c}function ST(o,t){const i=yT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function MT(o,t){let i;switch(t){case zy:i="Linear";break;case By:i="Reinhard";break;case Fy:i="OptimizedCineon";break;case Hy:i="ACESFilmic";break;case Vy:i="AgX";break;case ky:i="Neutral";break;case Gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new re;function bT(){Et.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ET(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function TT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function AT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const d=o.getActiveAttrib(t,c),f=d.name;let p=1;d.type===o.FLOAT_MAT2&&(p=2),d.type===o.FLOAT_MAT3&&(p=3),d.type===o.FLOAT_MAT4&&(p=4),i[f]={type:d.type,location:o.getAttribLocation(t,f),locationSize:p}}return i}function Bl(o){return o!==""}function av(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(o){return o.replace(NT,RT)}const wT=new Map;function RT(o,t){let i=rt[t];if(i===void 0){const r=wT.get(t);if(r!==void 0)i=rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return hf(i)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(o){return o.replace(CT,DT)}function DT(o,t,i,r){let c="";for(let d=parseInt(t);d<parseInt(i);d++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+d+" ]").replace(/UNROLLED_LOOP_INDEX/g,d);return c}function lv(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function UT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===hv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===uy?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function jT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case Vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function LT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function OT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case fv:t="ENVMAP_BLENDING_MULTIPLY";break;case Py:t="ENVMAP_BLENDING_MIX";break;case Iy:t="ENVMAP_BLENDING_ADD";break}return t}function PT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function IT(o,t,i,r){const c=o.getContext(),d=i.defines;let f=i.vertexShader,p=i.fragmentShader;const g=UT(i),m=jT(i),v=LT(i),y=OT(i),S=PT(i),b=ET(i),A=TT(d),R=c.createProgram();let M,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Bl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Bl).join(`
`),_.length>0&&(_+=`
`)):(M=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),_=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?rt.tonemapping_pars_fragment:"",i.toneMapping!==za?MT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,ST("linearToOutputTexel",i.outputColorSpace),bT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bl).join(`
`)),f=hf(f),f=av(f,i),f=sv(f,i),p=hf(p),p=av(p,i),p=sv(p,i),f=rv(f),p=rv(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Mx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Mx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=z+M+f,P=z+_+p,ie=nv(c,c.VERTEX_SHADER,C),H=nv(c,c.FRAGMENT_SHADER,P);c.attachShader(R,ie),c.attachShader(R,H),i.index0AttributeName!==void 0?c.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&c.bindAttribLocation(R,0,"position"),c.linkProgram(R);function O(G){if(o.debug.checkShaderErrors){const ce=c.getProgramInfoLog(R).trim(),le=c.getShaderInfoLog(ie).trim(),me=c.getShaderInfoLog(H).trim();let he=!0,j=!0;if(c.getProgramParameter(R,c.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,R,ie,H);else{const q=iv(c,ie,"vertex"),Z=iv(c,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(R,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ce+`
`+q+`
`+Z)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(le===""||me==="")&&(j=!1);j&&(G.diagnostics={runnable:he,programLog:ce,vertexShader:{log:le,prefix:M},fragmentShader:{log:me,prefix:_}})}c.deleteShader(ie),c.deleteShader(H),J=new Pc(c,R),D=AT(c,R)}let J;this.getUniforms=function(){return J===void 0&&O(this),J};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=c.getProgramParameter(R,xT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=ie,this.fragmentShader=H,this}let zT=0;class BT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,c=this._getShaderStage(i),d=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(c)===!1&&(f.add(c),c.usedTimes++),f.has(d)===!1&&(f.add(d),d.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new FT(t),i.set(t,r)),r}}class FT{constructor(t){this.id=zT++,this.code=t,this.usedTimes=0}}function HT(o,t,i,r,c,d,f){const p=new Rv,g=new BT,m=new Set,v=[],y=c.logarithmicDepthBuffer,S=c.vertexTextures;let b=c.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,w,G,ce,le){const me=ce.fog,he=le.geometry,j=D.isMeshStandardMaterial?ce.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||j),Z=q&&q.mapping===Vc?q.image.height:null,Me=A[D.type];D.precision!==null&&(b=c.getMaxPrecision(D.precision),b!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const Ee=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=Ee!==void 0?Ee.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let ve,W,oe,ye;if(Me){const vt=Ai[Me];ve=vt.vertexShader,W=vt.fragmentShader}else ve=D.vertexShader,W=D.fragmentShader,g.update(D),oe=g.getVertexShaderID(D),ye=g.getFragmentShaderID(D);const be=o.getRenderTarget(),He=le.isInstancedMesh===!0,Fe=le.isBatchedMesh===!0,nt=!!D.map,jt=!!D.matcap,B=!!q,Vt=!!D.aoMap,ut=!!D.lightMap,yt=!!D.bumpMap,Ge=!!D.normalMap,kt=!!D.displacementMap,$e=!!D.emissiveMap,et=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,ae=D.clearcoat>0,Se=D.dispersion>0,xe=D.iridescence>0,_e=D.sheen>0,qe=D.transmission>0,De=T&&!!D.anisotropyMap,je=ae&&!!D.clearcoatMap,it=ae&&!!D.clearcoatNormalMap,Ae=ae&&!!D.clearcoatRoughnessMap,Le=xe&&!!D.iridescenceMap,ft=xe&&!!D.iridescenceThicknessMap,Ke=_e&&!!D.sheenColorMap,Re=_e&&!!D.sheenRoughnessMap,Ye=!!D.specularMap,Ze=!!D.specularColorMap,Pt=!!D.specularIntensityMap,V=qe&&!!D.transmissionMap,Ne=qe&&!!D.thicknessMap,fe=!!D.gradientMap,ge=!!D.alphaMap,we=D.alphaTest>0,ke=!!D.alphaHash,ot=!!D.extensions;let Ot=za;D.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ot=o.toneMapping);const an={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:ve,fragmentShader:W,defines:D.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:Fe,batchingColor:Fe&&le._colorsTexture!==null,instancing:He,instancingColor:He&&le.instanceColor!==null,instancingMorph:He&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:be===null?o.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Fa,alphaToCoverage:!!D.alphaToCoverage,map:nt,matcap:jt,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:Z,aoMap:Vt,lightMap:ut,bumpMap:yt,normalMap:Ge,displacementMap:S&&kt,emissiveMap:$e,normalMapObjectSpace:Ge&&D.normalMapType===Zy,normalMapTangentSpace:Ge&&D.normalMapType===Yy,metalnessMap:et,roughnessMap:L,anisotropy:T,anisotropyMap:De,clearcoat:ae,clearcoatMap:je,clearcoatNormalMap:it,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:xe,iridescenceMap:Le,iridescenceThicknessMap:ft,sheen:_e,sheenColorMap:Ke,sheenRoughnessMap:Re,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:Pt,transmission:qe,transmissionMap:V,thicknessMap:Ne,gradientMap:fe,opaque:D.transparent===!1&&D.blending===wr&&D.alphaToCoverage===!1,alphaMap:ge,alphaTest:we,alphaHash:ke,combine:D.combine,mapUv:nt&&R(D.map.channel),aoMapUv:Vt&&R(D.aoMap.channel),lightMapUv:ut&&R(D.lightMap.channel),bumpMapUv:yt&&R(D.bumpMap.channel),normalMapUv:Ge&&R(D.normalMap.channel),displacementMapUv:kt&&R(D.displacementMap.channel),emissiveMapUv:$e&&R(D.emissiveMap.channel),metalnessMapUv:et&&R(D.metalnessMap.channel),roughnessMapUv:L&&R(D.roughnessMap.channel),anisotropyMapUv:De&&R(D.anisotropyMap.channel),clearcoatMapUv:je&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:it&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Re&&R(D.sheenRoughnessMap.channel),specularMapUv:Ye&&R(D.specularMap.channel),specularColorMapUv:Ze&&R(D.specularColorMap.channel),specularIntensityMapUv:Pt&&R(D.specularIntensityMap.channel),transmissionMapUv:V&&R(D.transmissionMap.channel),thicknessMapUv:Ne&&R(D.thicknessMap.channel),alphaMapUv:ge&&R(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Ge||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!he.attributes.uv&&(nt||ge),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:le.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ot,decodeVideoTexture:nt&&D.map.isVideoTexture===!0&&Et.getTransfer(D.map.colorSpace)===Bt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ni,flipSided:D.side===In,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ot&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&D.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(z(w,D),C(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function z(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function C(D,w){p.disableAll(),w.supportsVertexTextures&&p.enable(0),w.instancing&&p.enable(1),w.instancingColor&&p.enable(2),w.instancingMorph&&p.enable(3),w.matcap&&p.enable(4),w.envMap&&p.enable(5),w.normalMapObjectSpace&&p.enable(6),w.normalMapTangentSpace&&p.enable(7),w.clearcoat&&p.enable(8),w.iridescence&&p.enable(9),w.alphaTest&&p.enable(10),w.vertexColors&&p.enable(11),w.vertexAlphas&&p.enable(12),w.vertexUv1s&&p.enable(13),w.vertexUv2s&&p.enable(14),w.vertexUv3s&&p.enable(15),w.vertexTangents&&p.enable(16),w.anisotropy&&p.enable(17),w.alphaHash&&p.enable(18),w.batching&&p.enable(19),w.dispersion&&p.enable(20),w.batchingColor&&p.enable(21),D.push(p.mask),p.disableAll(),w.fog&&p.enable(0),w.useFog&&p.enable(1),w.flatShading&&p.enable(2),w.logarithmicDepthBuffer&&p.enable(3),w.skinning&&p.enable(4),w.morphTargets&&p.enable(5),w.morphNormals&&p.enable(6),w.morphColors&&p.enable(7),w.premultipliedAlpha&&p.enable(8),w.shadowMapEnabled&&p.enable(9),w.doubleSided&&p.enable(10),w.flipSided&&p.enable(11),w.useDepthPacking&&p.enable(12),w.dithering&&p.enable(13),w.transmission&&p.enable(14),w.sheen&&p.enable(15),w.opaque&&p.enable(16),w.pointsUvs&&p.enable(17),w.decodeVideoTexture&&p.enable(18),w.alphaToCoverage&&p.enable(19),D.push(p.mask)}function P(D){const w=A[D.type];let G;if(w){const ce=Ai[w];G=ES.clone(ce.uniforms)}else G=D.uniforms;return G}function ie(D,w){let G;for(let ce=0,le=v.length;ce<le;ce++){const me=v[ce];if(me.cacheKey===w){G=me,++G.usedTimes;break}}return G===void 0&&(G=new IT(o,w,D,d),v.push(G)),G}function H(D){if(--D.usedTimes===0){const w=v.indexOf(D);v[w]=v[v.length-1],v.pop(),D.destroy()}}function O(D){g.remove(D)}function J(){g.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:P,acquireProgram:ie,releaseProgram:H,releaseShaderCache:O,programs:v,dispose:J}}function GT(){let o=new WeakMap;function t(d){let f=o.get(d);return f===void 0&&(f={},o.set(d,f)),f}function i(d){o.delete(d)}function r(d,f,p){o.get(d)[f]=p}function c(){o=new WeakMap}return{get:t,remove:i,update:r,dispose:c}}function VT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ov(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function cv(){const o=[];let t=0;const i=[],r=[],c=[];function d(){t=0,i.length=0,r.length=0,c.length=0}function f(y,S,b,A,R,M){let _=o[t];return _===void 0?(_={id:y.id,object:y,geometry:S,material:b,groupOrder:A,renderOrder:y.renderOrder,z:R,group:M},o[t]=_):(_.id=y.id,_.object=y,_.geometry=S,_.material=b,_.groupOrder=A,_.renderOrder=y.renderOrder,_.z=R,_.group=M),t++,_}function p(y,S,b,A,R,M){const _=f(y,S,b,A,R,M);b.transmission>0?r.push(_):b.transparent===!0?c.push(_):i.push(_)}function g(y,S,b,A,R,M){const _=f(y,S,b,A,R,M);b.transmission>0?r.unshift(_):b.transparent===!0?c.unshift(_):i.unshift(_)}function m(y,S){i.length>1&&i.sort(y||VT),r.length>1&&r.sort(S||ov),c.length>1&&c.sort(S||ov)}function v(){for(let y=t,S=o.length;y<S;y++){const b=o[y];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:c,init:d,push:p,unshift:g,finish:v,sort:m}}function kT(){let o=new WeakMap;function t(r,c){const d=o.get(r);let f;return d===void 0?(f=new cv,o.set(r,[f])):c>=d.length?(f=new cv,d.push(f)):f=d[c],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function XT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Rt};break;case"SpotLight":i={position:new re,direction:new re,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function qT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let WT=0;function YT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function ZT(o){const t=new XT,i=qT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new re);const c=new re,d=new ln,f=new ln;function p(m){let v=0,y=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let b=0,A=0,R=0,M=0,_=0,z=0,C=0,P=0,ie=0,H=0,O=0;m.sort(YT);for(let D=0,w=m.length;D<w;D++){const G=m[D],ce=G.color,le=G.intensity,me=G.distance,he=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=ce.r*le,y+=ce.g*le,S+=ce.b*le;else if(G.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(G.sh.coefficients[j],le);O++}else if(G.isDirectionalLight){const j=t.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,Z=i.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.directionalShadow[b]=Z,r.directionalShadowMap[b]=he,r.directionalShadowMatrix[b]=G.shadow.matrix,z++}r.directional[b]=j,b++}else if(G.isSpotLight){const j=t.get(G);j.position.setFromMatrixPosition(G.matrixWorld),j.color.copy(ce).multiplyScalar(le),j.distance=me,j.coneCos=Math.cos(G.angle),j.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),j.decay=G.decay,r.spot[R]=j;const q=G.shadow;if(G.map&&(r.spotLightMap[ie]=G.map,ie++,q.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[R]=q.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.spotShadow[R]=Z,r.spotShadowMap[R]=he,P++}R++}else if(G.isRectAreaLight){const j=t.get(G);j.color.copy(ce).multiplyScalar(le),j.halfWidth.set(G.width*.5,0,0),j.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=j,M++}else if(G.isPointLight){const j=t.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),j.distance=G.distance,j.decay=G.decay,G.castShadow){const q=G.shadow,Z=i.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=he,r.pointShadowMatrix[A]=G.shadow.matrix,C++}r.point[A]=j,A++}else if(G.isHemisphereLight){const j=t.get(G);j.skyColor.copy(G.color).multiplyScalar(le),j.groundColor.copy(G.groundColor).multiplyScalar(le),r.hemi[_]=j,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=S;const J=r.hash;(J.directionalLength!==b||J.pointLength!==A||J.spotLength!==R||J.rectAreaLength!==M||J.hemiLength!==_||J.numDirectionalShadows!==z||J.numPointShadows!==C||J.numSpotShadows!==P||J.numSpotMaps!==ie||J.numLightProbes!==O)&&(r.directional.length=b,r.spot.length=R,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+ie-H,r.spotLightMap.length=ie,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=O,J.directionalLength=b,J.pointLength=A,J.spotLength=R,J.rectAreaLength=M,J.hemiLength=_,J.numDirectionalShadows=z,J.numPointShadows=C,J.numSpotShadows=P,J.numSpotMaps=ie,J.numLightProbes=O,r.version=WT++)}function g(m,v){let y=0,S=0,b=0,A=0,R=0;const M=v.matrixWorldInverse;for(let _=0,z=m.length;_<z;_++){const C=m[_];if(C.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(c),P.direction.transformDirection(M),y++}else if(C.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(c),P.direction.transformDirection(M),b++}else if(C.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),f.identity(),d.copy(C.matrixWorld),d.premultiply(M),f.extractRotation(d),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),A++}else if(C.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),S++}else if(C.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(M),R++}}}return{setup:p,setupView:g,state:r}}function uv(o){const t=new ZT(o),i=[],r=[];function c(v){m.camera=v,i.length=0,r.length=0}function d(v){i.push(v)}function f(v){r.push(v)}function p(){t.setup(i)}function g(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:c,state:m,setupLights:p,setupLightsView:g,pushLight:d,pushShadow:f}}function KT(o){let t=new WeakMap;function i(c,d=0){const f=t.get(c);let p;return f===void 0?(p=new uv(o),t.set(c,[p])):d>=f.length?(p=new uv(o),f.push(p)):p=f[d],p}function r(){t=new WeakMap}return{get:i,dispose:r}}class QT extends ql{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JT extends ql{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`;function tA(o,t,i){let r=new Iv;const c=new Tt,d=new Tt,f=new hn,p=new QT({depthPacking:Wy}),g=new JT,m={},v=i.maxTextureSize,y={[Ba]:In,[In]:Ba,[Ni]:Ni},S=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:$T,fragmentShader:eA}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const A=new Ha;A.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ri(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let _=this.type;this.render=function(H,O,J){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(Ia),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const le=_!==Ji&&this.type===Ji,me=_===Ji&&this.type!==Ji;for(let he=0,j=H.length;he<j;he++){const q=H[he],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;c.copy(Z.mapSize);const Me=Z.getFrameExtents();if(c.multiply(Me),d.copy(Z.mapSize),(c.x>v||c.y>v)&&(c.x>v&&(d.x=Math.floor(v/Me.x),c.x=d.x*Me.x,Z.mapSize.x=d.x),c.y>v&&(d.y=Math.floor(v/Me.y),c.y=d.y*Me.y,Z.mapSize.y=d.y)),Z.map===null||le===!0||me===!0){const U=this.type!==Ji?{minFilter:si,magFilter:si}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ws(c.x,c.y,U),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Ee=Z.getViewportCount();for(let U=0;U<Ee;U++){const ne=Z.getViewport(U);f.set(d.x*ne.x,d.y*ne.y,d.x*ne.z,d.y*ne.w),ce.viewport(f),Z.updateMatrices(q,U),r=Z.getFrustum(),P(O,J,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===Ji&&z(Z,J),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,w,G)};function z(H,O){const J=t.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ws(c.x,c.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(O,null,J,S,R,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(O,null,J,b,R,null)}function C(H,O,J,D){let w=null;const G=J.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)w=G;else if(w=J.isPointLight===!0?g:p,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ce=w.uuid,le=O.uuid;let me=m[ce];me===void 0&&(me={},m[ce]=me);let he=me[le];he===void 0&&(he=w.clone(),me[le]=he,O.addEventListener("dispose",ie)),w=he}if(w.visible=O.visible,w.wireframe=O.wireframe,D===Ji?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:y[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,J.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ce=o.properties.get(w);ce.light=J}return w}function P(H,O,J,D,w){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Ji)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,H.matrixWorld);const le=t.update(H),me=H.material;if(Array.isArray(me)){const he=le.groups;for(let j=0,q=he.length;j<q;j++){const Z=he[j],Me=me[Z.materialIndex];if(Me&&Me.visible){const Ee=C(H,Me,D,w);H.onBeforeShadow(o,H,O,J,le,Ee,Z),o.renderBufferDirect(J,null,le,Ee,H,Z),H.onAfterShadow(o,H,O,J,le,Ee,Z)}}}else if(me.visible){const he=C(H,me,D,w);H.onBeforeShadow(o,H,O,J,le,he,null),o.renderBufferDirect(J,null,le,he,H,null),H.onAfterShadow(o,H,O,J,le,he,null)}}const ce=H.children;for(let le=0,me=ce.length;le<me;le++)P(ce[le],O,J,D,w)}function ie(H){H.target.removeEventListener("dispose",ie);for(const J in m){const D=m[J],w=H.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}function nA(o){function t(){let V=!1;const Ne=new hn;let fe=null;const ge=new hn(0,0,0,0);return{setMask:function(we){fe!==we&&!V&&(o.colorMask(we,we,we,we),fe=we)},setLocked:function(we){V=we},setClear:function(we,ke,ot,Ot,an){an===!0&&(we*=Ot,ke*=Ot,ot*=Ot),Ne.set(we,ke,ot,Ot),ge.equals(Ne)===!1&&(o.clearColor(we,ke,ot,Ot),ge.copy(Ne))},reset:function(){V=!1,fe=null,ge.set(-1,0,0,0)}}}function i(){let V=!1,Ne=null,fe=null,ge=null;return{setTest:function(we){we?ye(o.DEPTH_TEST):be(o.DEPTH_TEST)},setMask:function(we){Ne!==we&&!V&&(o.depthMask(we),Ne=we)},setFunc:function(we){if(fe!==we){switch(we){case Ry:o.depthFunc(o.NEVER);break;case Cy:o.depthFunc(o.ALWAYS);break;case Dy:o.depthFunc(o.LESS);break;case Ic:o.depthFunc(o.LEQUAL);break;case Uy:o.depthFunc(o.EQUAL);break;case jy:o.depthFunc(o.GEQUAL);break;case Ly:o.depthFunc(o.GREATER);break;case Oy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=we}},setLocked:function(we){V=we},setClear:function(we){ge!==we&&(o.clearDepth(we),ge=we)},reset:function(){V=!1,Ne=null,fe=null,ge=null}}}function r(){let V=!1,Ne=null,fe=null,ge=null,we=null,ke=null,ot=null,Ot=null,an=null;return{setTest:function(vt){V||(vt?ye(o.STENCIL_TEST):be(o.STENCIL_TEST))},setMask:function(vt){Ne!==vt&&!V&&(o.stencilMask(vt),Ne=vt)},setFunc:function(vt,Bn,xn){(fe!==vt||ge!==Bn||we!==xn)&&(o.stencilFunc(vt,Bn,xn),fe=vt,ge=Bn,we=xn)},setOp:function(vt,Bn,xn){(ke!==vt||ot!==Bn||Ot!==xn)&&(o.stencilOp(vt,Bn,xn),ke=vt,ot=Bn,Ot=xn)},setLocked:function(vt){V=vt},setClear:function(vt){an!==vt&&(o.clearStencil(vt),an=vt)},reset:function(){V=!1,Ne=null,fe=null,ge=null,we=null,ke=null,ot=null,Ot=null,an=null}}}const c=new t,d=new i,f=new r,p=new WeakMap,g=new WeakMap;let m={},v={},y=new WeakMap,S=[],b=null,A=!1,R=null,M=null,_=null,z=null,C=null,P=null,ie=null,H=new Rt(0,0,0),O=0,J=!1,D=null,w=null,G=null,ce=null,le=null;const me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),he=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),he=j>=2);let Z=null,Me={};const Ee=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),ne=new hn().fromArray(Ee),ve=new hn().fromArray(U);function W(V,Ne,fe,ge){const we=new Uint8Array(4),ke=o.createTexture();o.bindTexture(V,ke),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ot=0;ot<fe;ot++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,ge,0,o.RGBA,o.UNSIGNED_BYTE,we):o.texImage2D(Ne+ot,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,we);return ke}const oe={};oe[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),oe[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),oe[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ye(o.DEPTH_TEST),d.setFunc(Ic),yt(!1),Ge(gx),ye(o.CULL_FACE),Vt(Ia);function ye(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function be(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function He(V,Ne){return v[V]!==Ne?(o.bindFramebuffer(V,Ne),v[V]=Ne,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ne),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Fe(V,Ne){let fe=S,ge=!1;if(V){fe=y.get(Ne),fe===void 0&&(fe=[],y.set(Ne,fe));const we=V.textures;if(fe.length!==we.length||fe[0]!==o.COLOR_ATTACHMENT0){for(let ke=0,ot=we.length;ke<ot;ke++)fe[ke]=o.COLOR_ATTACHMENT0+ke;fe.length=we.length,ge=!0}}else fe[0]!==o.BACK&&(fe[0]=o.BACK,ge=!0);ge&&o.drawBuffers(fe)}function nt(V){return b!==V?(o.useProgram(V),b=V,!0):!1}const jt={[Ms]:o.FUNC_ADD,[hy]:o.FUNC_SUBTRACT,[fy]:o.FUNC_REVERSE_SUBTRACT};jt[py]=o.MIN,jt[my]=o.MAX;const B={[gy]:o.ZERO,[xy]:o.ONE,[vy]:o.SRC_COLOR,[Uh]:o.SRC_ALPHA,[Ey]:o.SRC_ALPHA_SATURATE,[My]:o.DST_COLOR,[yy]:o.DST_ALPHA,[_y]:o.ONE_MINUS_SRC_COLOR,[jh]:o.ONE_MINUS_SRC_ALPHA,[by]:o.ONE_MINUS_DST_COLOR,[Sy]:o.ONE_MINUS_DST_ALPHA,[Ty]:o.CONSTANT_COLOR,[Ay]:o.ONE_MINUS_CONSTANT_COLOR,[Ny]:o.CONSTANT_ALPHA,[wy]:o.ONE_MINUS_CONSTANT_ALPHA};function Vt(V,Ne,fe,ge,we,ke,ot,Ot,an,vt){if(V===Ia){A===!0&&(be(o.BLEND),A=!1);return}if(A===!1&&(ye(o.BLEND),A=!0),V!==dy){if(V!==R||vt!==J){if((M!==Ms||C!==Ms)&&(o.blendEquation(o.FUNC_ADD),M=Ms,C=Ms),vt)switch(V){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xx:o.blendFunc(o.ONE,o.ONE);break;case vx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _x:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xx:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case vx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _x:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,z=null,P=null,ie=null,H.set(0,0,0),O=0,R=V,J=vt}return}we=we||Ne,ke=ke||fe,ot=ot||ge,(Ne!==M||we!==C)&&(o.blendEquationSeparate(jt[Ne],jt[we]),M=Ne,C=we),(fe!==_||ge!==z||ke!==P||ot!==ie)&&(o.blendFuncSeparate(B[fe],B[ge],B[ke],B[ot]),_=fe,z=ge,P=ke,ie=ot),(Ot.equals(H)===!1||an!==O)&&(o.blendColor(Ot.r,Ot.g,Ot.b,an),H.copy(Ot),O=an),R=V,J=!1}function ut(V,Ne){V.side===Ni?be(o.CULL_FACE):ye(o.CULL_FACE);let fe=V.side===In;Ne&&(fe=!fe),yt(fe),V.blending===wr&&V.transparent===!1?Vt(Ia):Vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const ge=V.stencilWrite;f.setTest(ge),ge&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),$e(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):be(o.SAMPLE_ALPHA_TO_COVERAGE)}function yt(V){D!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),D=V)}function Ge(V){V!==oy?(ye(o.CULL_FACE),V!==w&&(V===gx?o.cullFace(o.BACK):V===cy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):be(o.CULL_FACE),w=V}function kt(V){V!==G&&(he&&o.lineWidth(V),G=V)}function $e(V,Ne,fe){V?(ye(o.POLYGON_OFFSET_FILL),(ce!==Ne||le!==fe)&&(o.polygonOffset(Ne,fe),ce=Ne,le=fe)):be(o.POLYGON_OFFSET_FILL)}function et(V){V?ye(o.SCISSOR_TEST):be(o.SCISSOR_TEST)}function L(V){V===void 0&&(V=o.TEXTURE0+me-1),Z!==V&&(o.activeTexture(V),Z=V)}function T(V,Ne,fe){fe===void 0&&(Z===null?fe=o.TEXTURE0+me-1:fe=Z);let ge=Me[fe];ge===void 0&&(ge={type:void 0,texture:void 0},Me[fe]=ge),(ge.type!==V||ge.texture!==Ne)&&(Z!==fe&&(o.activeTexture(fe),Z=fe),o.bindTexture(V,Ne||oe[V]),ge.type=V,ge.texture=Ne)}function ae(){const V=Me[Z];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Se(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(V){ne.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),ne.copy(V))}function Re(V){ve.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),ve.copy(V))}function Ye(V,Ne){let fe=g.get(Ne);fe===void 0&&(fe=new WeakMap,g.set(Ne,fe));let ge=fe.get(V);ge===void 0&&(ge=o.getUniformBlockIndex(Ne,V.name),fe.set(V,ge))}function Ze(V,Ne){const ge=g.get(Ne).get(V);p.get(Ne)!==ge&&(o.uniformBlockBinding(Ne,ge,V.__bindingPointIndex),p.set(Ne,ge))}function Pt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},Z=null,Me={},v={},y=new WeakMap,S=[],b=null,A=!1,R=null,M=null,_=null,z=null,C=null,P=null,ie=null,H=new Rt(0,0,0),O=0,J=!1,D=null,w=null,G=null,ce=null,le=null,ne.set(0,0,o.canvas.width,o.canvas.height),ve.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:ye,disable:be,bindFramebuffer:He,drawBuffers:Fe,useProgram:nt,setBlending:Vt,setMaterial:ut,setFlipSided:yt,setCullFace:Ge,setLineWidth:kt,setPolygonOffset:$e,setScissorTest:et,activeTexture:L,bindTexture:T,unbindTexture:ae,compressedTexImage2D:Se,compressedTexImage3D:xe,texImage2D:Le,texImage3D:ft,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:it,texStorage3D:Ae,texSubImage2D:_e,texSubImage3D:qe,compressedTexSubImage2D:De,compressedTexSubImage3D:je,scissor:Ke,viewport:Re,reset:Pt}}function dv(o,t,i,r){const c=iA(r);switch(i){case vv:return o*t;case yv:return o*t;case Sv:return o*t*2;case Mv:return o*t/c.components*c.byteLength;case vf:return o*t/c.components*c.byteLength;case bv:return o*t*2/c.components*c.byteLength;case _f:return o*t*2/c.components*c.byteLength;case _v:return o*t*3/c.components*c.byteLength;case gi:return o*t*4/c.components*c.byteLength;case yf:return o*t*4/c.components*c.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bh:case Hh:return Math.max(o,16)*Math.max(t,8)/4;case zh:case Fh:return Math.max(o,8)*Math.max(t,8)/2;case Gh:case Vh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case kh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $h:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ef:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case tf:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nf:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case af:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case sf:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Oc:case rf:case lf:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ev:case of:return Math.ceil(o/4)*Math.ceil(t/4)*8;case cf:case uf:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function iA(o){switch(o){case ta:case mv:return{byteLength:1,components:1};case Hl:case gv:case Gl:return{byteLength:2,components:1};case gf:case xf:return{byteLength:2,components:4};case Ns:case mf:case $i:return{byteLength:4,components:1};case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function aA(o,t,i,r,c,d,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,v=new WeakMap;let y;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,T){return b?new OffscreenCanvas(L,T):Gc("canvas")}function R(L,T,ae){let Se=1;const xe=et(L);if((xe.width>ae||xe.height>ae)&&(Se=ae/Math.max(xe.width,xe.height)),Se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _e=Math.floor(Se*xe.width),qe=Math.floor(Se*xe.height);y===void 0&&(y=A(_e,qe));const De=T?A(_e,qe):y;return De.width=_e,De.height=qe,De.getContext("2d").drawImage(L,0,0,_e,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+_e+"x"+qe+")."),De}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function M(L){return L.generateMipmaps&&L.minFilter!==si&&L.minFilter!==mi}function _(L){o.generateMipmap(L)}function z(L,T,ae,Se,xe=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=T;if(T===o.RED&&(ae===o.FLOAT&&(_e=o.R32F),ae===o.HALF_FLOAT&&(_e=o.R16F),ae===o.UNSIGNED_BYTE&&(_e=o.R8)),T===o.RED_INTEGER&&(ae===o.UNSIGNED_BYTE&&(_e=o.R8UI),ae===o.UNSIGNED_SHORT&&(_e=o.R16UI),ae===o.UNSIGNED_INT&&(_e=o.R32UI),ae===o.BYTE&&(_e=o.R8I),ae===o.SHORT&&(_e=o.R16I),ae===o.INT&&(_e=o.R32I)),T===o.RG&&(ae===o.FLOAT&&(_e=o.RG32F),ae===o.HALF_FLOAT&&(_e=o.RG16F),ae===o.UNSIGNED_BYTE&&(_e=o.RG8)),T===o.RG_INTEGER&&(ae===o.UNSIGNED_BYTE&&(_e=o.RG8UI),ae===o.UNSIGNED_SHORT&&(_e=o.RG16UI),ae===o.UNSIGNED_INT&&(_e=o.RG32UI),ae===o.BYTE&&(_e=o.RG8I),ae===o.SHORT&&(_e=o.RG16I),ae===o.INT&&(_e=o.RG32I)),T===o.RGB&&ae===o.UNSIGNED_INT_5_9_9_9_REV&&(_e=o.RGB9_E5),T===o.RGBA){const qe=xe?zc:Et.getTransfer(Se);ae===o.FLOAT&&(_e=o.RGBA32F),ae===o.HALF_FLOAT&&(_e=o.RGBA16F),ae===o.UNSIGNED_BYTE&&(_e=qe===Bt?o.SRGB8_ALPHA8:o.RGBA8),ae===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),ae===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function C(L,T){let ae;return L?T===null||T===Ns||T===jr?ae=o.DEPTH24_STENCIL8:T===$i?ae=o.DEPTH32F_STENCIL8:T===Hl&&(ae=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ns||T===jr?ae=o.DEPTH_COMPONENT24:T===$i?ae=o.DEPTH_COMPONENT32F:T===Hl&&(ae=o.DEPTH_COMPONENT16),ae}function P(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==si&&L.minFilter!==mi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function ie(L){const T=L.target;T.removeEventListener("dispose",ie),O(T),T.isVideoTexture&&v.delete(T)}function H(L){const T=L.target;T.removeEventListener("dispose",H),D(T)}function O(L){const T=r.get(L);if(T.__webglInit===void 0)return;const ae=L.source,Se=S.get(ae);if(Se){const xe=Se[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&J(L),Object.keys(Se).length===0&&S.delete(ae)}r.remove(L)}function J(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const ae=L.source,Se=S.get(ae);delete Se[T.__cacheKey],f.memory.textures--}function D(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(T.__webglFramebuffer[Se]))for(let xe=0;xe<T.__webglFramebuffer[Se].length;xe++)o.deleteFramebuffer(T.__webglFramebuffer[Se][xe]);else o.deleteFramebuffer(T.__webglFramebuffer[Se]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[Se])}else{if(Array.isArray(T.__webglFramebuffer))for(let Se=0;Se<T.__webglFramebuffer.length;Se++)o.deleteFramebuffer(T.__webglFramebuffer[Se]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Se=0;Se<T.__webglColorRenderbuffer.length;Se++)T.__webglColorRenderbuffer[Se]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[Se]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ae=L.textures;for(let Se=0,xe=ae.length;Se<xe;Se++){const _e=r.get(ae[Se]);_e.__webglTexture&&(o.deleteTexture(_e.__webglTexture),f.memory.textures--),r.remove(ae[Se])}r.remove(L)}let w=0;function G(){w=0}function ce(){const L=w;return L>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c.maxTextures),w+=1,L}function le(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function me(L,T){const ae=r.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&ae.__version!==L.version){const Se=L.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(ae,L,T);return}}i.bindTexture(o.TEXTURE_2D,ae.__webglTexture,o.TEXTURE0+T)}function he(L,T){const ae=r.get(L);if(L.version>0&&ae.__version!==L.version){ve(ae,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ae.__webglTexture,o.TEXTURE0+T)}function j(L,T){const ae=r.get(L);if(L.version>0&&ae.__version!==L.version){ve(ae,L,T);return}i.bindTexture(o.TEXTURE_3D,ae.__webglTexture,o.TEXTURE0+T)}function q(L,T){const ae=r.get(L);if(L.version>0&&ae.__version!==L.version){W(ae,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture,o.TEXTURE0+T)}const Z={[Ph]:o.REPEAT,[Es]:o.CLAMP_TO_EDGE,[Ih]:o.MIRRORED_REPEAT},Me={[si]:o.NEAREST,[Xy]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[ah]:o.LINEAR_MIPMAP_NEAREST,[Ts]:o.LINEAR_MIPMAP_LINEAR},Ee={[Ky]:o.NEVER,[nS]:o.ALWAYS,[Qy]:o.LESS,[Tv]:o.LEQUAL,[Jy]:o.EQUAL,[tS]:o.GEQUAL,[$y]:o.GREATER,[eS]:o.NOTEQUAL};function U(L,T){if(T.type===$i&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mi||T.magFilter===ah||T.magFilter===sc||T.magFilter===Ts||T.minFilter===mi||T.minFilter===ah||T.minFilter===sc||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Z[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Z[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Z[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Me[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===si||T.minFilter!==sc&&T.minFilter!==Ts||T.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ae=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ne(L,T){let ae=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",ie));const Se=T.source;let xe=S.get(Se);xe===void 0&&(xe={},S.set(Se,xe));const _e=le(T);if(_e!==L.__cacheKey){xe[_e]===void 0&&(xe[_e]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,ae=!0),xe[_e].usedTimes++;const qe=xe[L.__cacheKey];qe!==void 0&&(xe[L.__cacheKey].usedTimes--,qe.usedTimes===0&&J(T)),L.__cacheKey=_e,L.__webglTexture=xe[_e].texture}return ae}function ve(L,T,ae){let Se=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Se=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Se=o.TEXTURE_3D);const xe=ne(L,T),_e=T.source;i.bindTexture(Se,L.__webglTexture,o.TEXTURE0+ae);const qe=r.get(_e);if(_e.version!==qe.__version||xe===!0){i.activeTexture(o.TEXTURE0+ae);const De=Et.getPrimaries(Et.workingColorSpace),je=T.colorSpace===Pa?null:Et.getPrimaries(T.colorSpace),it=T.colorSpace===Pa||De===je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Ae=R(T.image,!1,c.maxTextureSize);Ae=$e(T,Ae);const Le=d.convert(T.format,T.colorSpace),ft=d.convert(T.type);let Ke=z(T.internalFormat,Le,ft,T.colorSpace,T.isVideoTexture);U(Se,T);let Re;const Ye=T.mipmaps,Ze=T.isVideoTexture!==!0,Pt=qe.__version===void 0||xe===!0,V=_e.dataReady,Ne=P(T,Ae);if(T.isDepthTexture)Ke=C(T.format===Lr,T.type),Pt&&(Ze?i.texStorage2D(o.TEXTURE_2D,1,Ke,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Le,ft,null));else if(T.isDataTexture)if(Ye.length>0){Ze&&Pt&&i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ye[0].width,Ye[0].height);for(let fe=0,ge=Ye.length;fe<ge;fe++)Re=Ye[fe],Ze?V&&i.texSubImage2D(o.TEXTURE_2D,fe,0,0,Re.width,Re.height,Le,ft,Re.data):i.texImage2D(o.TEXTURE_2D,fe,Ke,Re.width,Re.height,0,Le,ft,Re.data);T.generateMipmaps=!1}else Ze?(Pt&&i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ae.width,Ae.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Le,ft,Ae.data)):i.texImage2D(o.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,Le,ft,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Ke,Ye[0].width,Ye[0].height,Ae.depth);for(let fe=0,ge=Ye.length;fe<ge;fe++)if(Re=Ye[fe],T.format!==gi)if(Le!==null)if(Ze){if(V)if(T.layerUpdates.size>0){const we=dv(Re.width,Re.height,T.format,T.type);for(const ke of T.layerUpdates){const ot=Re.data.subarray(ke*we/Re.data.BYTES_PER_ELEMENT,(ke+1)*we/Re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,ke,Re.width,Re.height,1,Le,ot,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,Ae.depth,Le,Re.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,fe,Ke,Re.width,Re.height,Ae.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,Ae.depth,Le,ft,Re.data):i.texImage3D(o.TEXTURE_2D_ARRAY,fe,Ke,Re.width,Re.height,Ae.depth,0,Le,ft,Re.data)}else{Ze&&Pt&&i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ye[0].width,Ye[0].height);for(let fe=0,ge=Ye.length;fe<ge;fe++)Re=Ye[fe],T.format!==gi?Le!==null?Ze?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,fe,0,0,Re.width,Re.height,Le,Re.data):i.compressedTexImage2D(o.TEXTURE_2D,fe,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?V&&i.texSubImage2D(o.TEXTURE_2D,fe,0,0,Re.width,Re.height,Le,ft,Re.data):i.texImage2D(o.TEXTURE_2D,fe,Ke,Re.width,Re.height,0,Le,ft,Re.data)}else if(T.isDataArrayTexture)if(Ze){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Ke,Ae.width,Ae.height,Ae.depth),V)if(T.layerUpdates.size>0){const fe=dv(Ae.width,Ae.height,T.format,T.type);for(const ge of T.layerUpdates){const we=Ae.data.subarray(ge*fe/Ae.data.BYTES_PER_ELEMENT,(ge+1)*fe/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Le,ft,we)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Le,ft,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ke,Ae.width,Ae.height,Ae.depth,0,Le,ft,Ae.data);else if(T.isData3DTexture)Ze?(Pt&&i.texStorage3D(o.TEXTURE_3D,Ne,Ke,Ae.width,Ae.height,Ae.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Le,ft,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,Ke,Ae.width,Ae.height,Ae.depth,0,Le,ft,Ae.data);else if(T.isFramebufferTexture){if(Pt)if(Ze)i.texStorage2D(o.TEXTURE_2D,Ne,Ke,Ae.width,Ae.height);else{let fe=Ae.width,ge=Ae.height;for(let we=0;we<Ne;we++)i.texImage2D(o.TEXTURE_2D,we,Ke,fe,ge,0,Le,ft,null),fe>>=1,ge>>=1}}else if(Ye.length>0){if(Ze&&Pt){const fe=et(Ye[0]);i.texStorage2D(o.TEXTURE_2D,Ne,Ke,fe.width,fe.height)}for(let fe=0,ge=Ye.length;fe<ge;fe++)Re=Ye[fe],Ze?V&&i.texSubImage2D(o.TEXTURE_2D,fe,0,0,Le,ft,Re):i.texImage2D(o.TEXTURE_2D,fe,Ke,Le,ft,Re);T.generateMipmaps=!1}else if(Ze){if(Pt){const fe=et(Ae);i.texStorage2D(o.TEXTURE_2D,Ne,Ke,fe.width,fe.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Le,ft,Ae)}else i.texImage2D(o.TEXTURE_2D,0,Ke,Le,ft,Ae);M(T)&&_(Se),qe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function W(L,T,ae){if(T.image.length!==6)return;const Se=ne(L,T),xe=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ae);const _e=r.get(xe);if(xe.version!==_e.__version||Se===!0){i.activeTexture(o.TEXTURE0+ae);const qe=Et.getPrimaries(Et.workingColorSpace),De=T.colorSpace===Pa?null:Et.getPrimaries(T.colorSpace),je=T.colorSpace===Pa||qe===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let ge=0;ge<6;ge++)!it&&!Ae?Le[ge]=R(T.image[ge],!0,c.maxCubemapSize):Le[ge]=Ae?T.image[ge].image:T.image[ge],Le[ge]=$e(T,Le[ge]);const ft=Le[0],Ke=d.convert(T.format,T.colorSpace),Re=d.convert(T.type),Ye=z(T.internalFormat,Ke,Re,T.colorSpace),Ze=T.isVideoTexture!==!0,Pt=_e.__version===void 0||Se===!0,V=xe.dataReady;let Ne=P(T,ft);U(o.TEXTURE_CUBE_MAP,T);let fe;if(it){Ze&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,Ye,ft.width,ft.height);for(let ge=0;ge<6;ge++){fe=Le[ge].mipmaps;for(let we=0;we<fe.length;we++){const ke=fe[we];T.format!==gi?Ke!==null?Ze?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,ke.width,ke.height,Ke,ke.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ye,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,ke.width,ke.height,Ke,Re,ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ye,ke.width,ke.height,0,Ke,Re,ke.data)}}}else{if(fe=T.mipmaps,Ze&&Pt){fe.length>0&&Ne++;const ge=et(Le[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,Ye,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Le[ge].width,Le[ge].height,Ke,Re,Le[ge].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Le[ge].width,Le[ge].height,0,Ke,Re,Le[ge].data);for(let we=0;we<fe.length;we++){const ot=fe[we].image[ge].image;Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,ot.width,ot.height,Ke,Re,ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ye,ot.width,ot.height,0,Ke,Re,ot.data)}}else{Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,Re,Le[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ye,Ke,Re,Le[ge]);for(let we=0;we<fe.length;we++){const ke=fe[we];Ze?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,Ke,Re,ke.image[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ye,Ke,Re,ke.image[ge])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),_e.__version=xe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function oe(L,T,ae,Se,xe,_e){const qe=d.convert(ae.format,ae.colorSpace),De=d.convert(ae.type),je=z(ae.internalFormat,qe,De,ae.colorSpace);if(!r.get(T).__hasExternalTextures){const Ae=Math.max(1,T.width>>_e),Le=Math.max(1,T.height>>_e);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,_e,je,Ae,Le,T.depth,0,qe,De,null):i.texImage2D(xe,_e,je,Ae,Le,0,qe,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Se,xe,r.get(ae).__webglTexture,0,yt(T)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Se,xe,r.get(ae).__webglTexture,_e),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(L,T,ae){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const Se=T.depthTexture,xe=Se&&Se.isDepthTexture?Se.type:null,_e=C(T.stencilBuffer,xe),qe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=yt(T);Ge(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,_e,T.width,T.height):ae?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,_e,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,_e,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,L)}else{const Se=T.textures;for(let xe=0;xe<Se.length;xe++){const _e=Se[xe],qe=d.convert(_e.format,_e.colorSpace),De=d.convert(_e.type),je=z(_e.internalFormat,qe,De,_e.colorSpace),it=yt(T);ae&&Ge(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,it,je,T.width,T.height):Ge(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,it,je,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,je,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function be(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Se=r.get(T.depthTexture).__webglTexture,xe=yt(T);if(T.depthTexture.format===Rr)Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(T.depthTexture.format===Lr)Ge(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function He(L){const T=r.get(L),ae=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");be(T.__webglFramebuffer,L)}else if(ae){T.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Se]),T.__webglDepthbuffer[Se]=o.createRenderbuffer(),ye(T.__webglDepthbuffer[Se],L,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),ye(T.__webglDepthbuffer,L,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(L,T,ae){const Se=r.get(L);T!==void 0&&oe(Se.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ae!==void 0&&He(L)}function nt(L){const T=L.texture,ae=r.get(L),Se=r.get(T);L.addEventListener("dispose",H);const xe=L.textures,_e=L.isWebGLCubeRenderTarget===!0,qe=xe.length>1;if(qe||(Se.__webglTexture===void 0&&(Se.__webglTexture=o.createTexture()),Se.__version=T.version,f.memory.textures++),_e){ae.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer[De]=[];for(let je=0;je<T.mipmaps.length;je++)ae.__webglFramebuffer[De][je]=o.createFramebuffer()}else ae.__webglFramebuffer[De]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)ae.__webglFramebuffer[De]=o.createFramebuffer()}else ae.__webglFramebuffer=o.createFramebuffer();if(qe)for(let De=0,je=xe.length;De<je;De++){const it=r.get(xe[De]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),f.memory.textures++)}if(L.samples>0&&Ge(L)===!1){ae.__webglMultisampledFramebuffer=o.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let De=0;De<xe.length;De++){const je=xe[De];ae.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ae.__webglColorRenderbuffer[De]);const it=d.convert(je.format,je.colorSpace),Ae=d.convert(je.type),Le=z(je.internalFormat,it,Ae,je.colorSpace,L.isXRRenderTarget===!0),ft=yt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,Le,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,ae.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ae.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(ae.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_e){i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)oe(ae.__webglFramebuffer[De][je],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,je);else oe(ae.__webglFramebuffer[De],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let De=0,je=xe.length;De<je;De++){const it=xe[De],Ae=r.get(it);i.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),U(o.TEXTURE_2D,it),oe(ae.__webglFramebuffer,L,it,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),M(it)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Se.__webglTexture),U(De,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)oe(ae.__webglFramebuffer[je],L,T,o.COLOR_ATTACHMENT0,De,je);else oe(ae.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,De,0);M(T)&&_(De),i.unbindTexture()}L.depthBuffer&&He(L)}function jt(L){const T=L.textures;for(let ae=0,Se=T.length;ae<Se;ae++){const xe=T[ae];if(M(xe)){const _e=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,qe=r.get(xe).__webglTexture;i.bindTexture(_e,qe),_(_e),i.unbindTexture()}}}const B=[],Vt=[];function ut(L){if(L.samples>0){if(Ge(L)===!1){const T=L.textures,ae=L.width,Se=L.height;let xe=o.COLOR_BUFFER_BIT;const _e=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=r.get(L),De=T.length>1;if(De)for(let je=0;je<T.length;je++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let je=0;je<T.length;je++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[je]);const it=r.get(T[je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,it,0)}o.blitFramebuffer(0,0,ae,Se,0,0,ae,Se,xe,o.NEAREST),g===!0&&(B.length=0,Vt.length=0,B.push(o.COLOR_ATTACHMENT0+je),L.depthBuffer&&L.resolveDepthBuffer===!1&&(B.push(_e),Vt.push(_e),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Vt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let je=0;je<T.length;je++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,qe.__webglColorRenderbuffer[je]);const it=r.get(T[je]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,it,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&g){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function yt(L){return Math.min(c.maxSamples,L.samples)}function Ge(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(L){const T=f.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function $e(L,T){const ae=L.colorSpace,Se=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ae!==Fa&&ae!==Pa&&(Et.getTransfer(ae)===Bt?(Se!==gi||xe!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),T}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=G,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Fe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ge}function sA(o,t){function i(r,c=Pa){let d;const f=Et.getTransfer(c);if(r===ta)return o.UNSIGNED_BYTE;if(r===gf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===xf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===xv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return o.BYTE;if(r===gv)return o.SHORT;if(r===Hl)return o.UNSIGNED_SHORT;if(r===mf)return o.INT;if(r===Ns)return o.UNSIGNED_INT;if(r===$i)return o.FLOAT;if(r===Gl)return o.HALF_FLOAT;if(r===vv)return o.ALPHA;if(r===_v)return o.RGB;if(r===gi)return o.RGBA;if(r===yv)return o.LUMINANCE;if(r===Sv)return o.LUMINANCE_ALPHA;if(r===Rr)return o.DEPTH_COMPONENT;if(r===Lr)return o.DEPTH_STENCIL;if(r===Mv)return o.RED;if(r===vf)return o.RED_INTEGER;if(r===bv)return o.RG;if(r===_f)return o.RG_INTEGER;if(r===yf)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===jc||r===Lc)if(f===Bt)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(r===Dc)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jc)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(r===Dc)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jc)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zh||r===Bh||r===Fh||r===Hh)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(r===zh)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bh)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fh)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hh)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gh||r===Vh||r===kh)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(r===Gh||r===Vh)return f===Bt?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(r===kh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xh||r===qh||r===Wh||r===Yh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===ef||r===tf||r===nf||r===af||r===sf)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(r===Xh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jh)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$h)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ef)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tf)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nf)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===af)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sf)return f===Bt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oc||r===rf||r===lf)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(r===Oc)return f===Bt?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rf)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lf)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ev||r===of||r===cf||r===uf)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(r===Oc)return d.COMPRESSED_RED_RGTC1_EXT;if(r===of)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cf)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uf)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jr?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class rA extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nc extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lA={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let c=null,d=null,f=null;const p=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(m,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=v.position.distanceTo(y.position),b=.02,A=.005;m.inputState.pinching&&S>b+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=b-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(d=i.getPose(t.gripSpace,r),d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,d.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(d.linearVelocity)):g.hasLinearVelocity=!1,d.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(d.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(c=i.getPose(t.targetRaySpace,r),c===null&&d!==null&&(c=d),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(lA)))}return p!==null&&(p.visible=c!==null),g!==null&&(g.visible=d!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Nc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cA=`
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

}`;class uA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const c=new zn,d=t.properties.get(c);d.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=c}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ia({vertexShader:oA,fragmentShader:cA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dA extends Pr{constructor(t,i){super();const r=this;let c=null,d=1,f=null,p="local-floor",g=1,m=null,v=null,y=null,S=null,b=null,A=null;const R=new uA,M=i.getContextAttributes();let _=null,z=null;const C=[],P=[],ie=new Tt;let H=null;const O=new pi;O.layers.enable(1),O.viewport=new hn;const J=new pi;J.layers.enable(2),J.viewport=new hn;const D=[O,J],w=new rA;w.layers.enable(1),w.layers.enable(2);let G=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=C[W];return oe===void 0&&(oe=new Dh,C[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=C[W];return oe===void 0&&(oe=new Dh,C[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=C[W];return oe===void 0&&(oe=new Dh,C[W]=oe),oe.getHandSpace()};function le(W){const oe=P.indexOf(W.inputSource);if(oe===-1)return;const ye=C[oe];ye!==void 0&&(ye.update(W.inputSource,W.frame,m||f),ye.dispatchEvent({type:W.type,data:W.inputSource}))}function me(){c.removeEventListener("select",le),c.removeEventListener("selectstart",le),c.removeEventListener("selectend",le),c.removeEventListener("squeeze",le),c.removeEventListener("squeezestart",le),c.removeEventListener("squeezeend",le),c.removeEventListener("end",me),c.removeEventListener("inputsourceschange",he);for(let W=0;W<C.length;W++){const oe=P[W];oe!==null&&(P[W]=null,C[W].disconnect(oe))}G=null,ce=null,R.reset(),t.setRenderTarget(_),b=null,S=null,y=null,c=null,z=null,ve.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(ie.width,ie.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){p=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return c},this.setSession=async function(W){if(c=W,c!==null){if(_=t.getRenderTarget(),c.addEventListener("select",le),c.addEventListener("selectstart",le),c.addEventListener("selectend",le),c.addEventListener("squeeze",le),c.addEventListener("squeezestart",le),c.addEventListener("squeezeend",le),c.addEventListener("end",me),c.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(ie),c.renderState.layers===void 0){const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:d};b=new XRWebGLLayer(c,i,oe),c.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),z=new ws(b.framebufferWidth,b.framebufferHeight,{format:gi,type:ta,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let oe=null,ye=null,be=null;M.depth&&(be=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,oe=M.stencil?Lr:Rr,ye=M.stencil?jr:Ns);const He={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:d};y=new XRWebGLBinding(c,i),S=y.createProjectionLayer(He),c.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),z=new ws(S.textureWidth,S.textureHeight,{format:gi,type:ta,depthTexture:new Fv(S.textureWidth,S.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(g),m=null,f=await c.requestReferenceSpace(p),ve.setContext(c),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(W){for(let oe=0;oe<W.removed.length;oe++){const ye=W.removed[oe],be=P.indexOf(ye);be>=0&&(P[be]=null,C[be].disconnect(ye))}for(let oe=0;oe<W.added.length;oe++){const ye=W.added[oe];let be=P.indexOf(ye);if(be===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=P.length){P.push(ye),be=Fe;break}else if(P[Fe]===null){P[Fe]=ye,be=Fe;break}if(be===-1)break}const He=C[be];He&&He.connect(ye)}}const j=new re,q=new re;function Z(W,oe,ye){j.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(ye.matrixWorld);const be=j.distanceTo(q),He=oe.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,nt=He[14]/(He[10]-1),jt=He[14]/(He[10]+1),B=(He[9]+1)/He[5],Vt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],yt=(Fe[8]+1)/Fe[0],Ge=nt*ut,kt=nt*yt,$e=be/(-ut+yt),et=$e*-ut;oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(et),W.translateZ($e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const L=nt+$e,T=jt+$e,ae=Ge-et,Se=kt+(be-et),xe=B*jt/T*L,_e=Vt*jt/T*L;W.projectionMatrix.makePerspective(ae,Se,xe,_e,L,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Me(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(c===null)return;R.texture!==null&&(W.near=R.depthNear,W.far=R.depthFar),w.near=J.near=O.near=W.near,w.far=J.far=O.far=W.far,(G!==w.near||ce!==w.far)&&(c.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,ce=w.far,O.near=G,O.far=ce,J.near=G,J.far=ce,O.updateProjectionMatrix(),J.updateProjectionMatrix(),W.updateProjectionMatrix());const oe=W.parent,ye=w.cameras;Me(w,oe);for(let be=0;be<ye.length;be++)Me(ye[be],oe);ye.length===2?Z(w,O,J):w.projectionMatrix.copy(O.projectionMatrix),Ee(W,w,oe)};function Ee(W,oe,ye){ye===null?W.matrix.copy(oe.matrixWorld):(W.matrix.copy(ye.matrixWorld),W.matrix.invert(),W.matrix.multiply(oe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=df*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&b===null))return g},this.setFoveation=function(W){g=W,S!==null&&(S.fixedFoveation=W),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=W)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let U=null;function ne(W,oe){if(v=oe.getViewerPose(m||f),A=oe,v!==null){const ye=v.views;b!==null&&(t.setRenderTargetFramebuffer(z,b.framebuffer),t.setRenderTarget(z));let be=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,be=!0);for(let Fe=0;Fe<ye.length;Fe++){const nt=ye[Fe];let jt=null;if(b!==null)jt=b.getViewport(nt);else{const Vt=y.getViewSubImage(S,nt);jt=Vt.viewport,Fe===0&&(t.setRenderTargetTextures(z,Vt.colorTexture,S.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(z))}let B=D[Fe];B===void 0&&(B=new pi,B.layers.enable(Fe),B.viewport=new hn,D[Fe]=B),B.matrix.fromArray(nt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(nt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(jt.x,jt.y,jt.width,jt.height),Fe===0&&(w.matrix.copy(B.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),be===!0&&w.cameras.push(B)}const He=c.enabledFeatures;if(He&&He.includes("depth-sensing")){const Fe=y.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&R.init(t,Fe,c.renderState)}}for(let ye=0;ye<C.length;ye++){const be=P[ye],He=C[ye];be!==null&&He!==void 0&&He.update(be,oe,m||f)}U&&U(W,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),A=null}const ve=new zv;ve.setAnimationLoop(ne),this.setAnimationLoop=function(W){U=W},this.dispose=function(){}}}const us=new na,hA=new ln;function fA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Lv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function c(M,_,z,C,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?d(M,_):_.isMeshToonMaterial?(d(M,_),y(M,_)):_.isMeshPhongMaterial?(d(M,_),v(M,_)):_.isMeshStandardMaterial?(d(M,_),S(M,_),_.isMeshPhysicalMaterial&&b(M,_,P)):_.isMeshMatcapMaterial?(d(M,_),A(M,_)):_.isMeshDepthMaterial?d(M,_):_.isMeshDistanceMaterial?(d(M,_),R(M,_)):_.isMeshNormalMaterial?d(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&p(M,_)):_.isPointsMaterial?g(M,_,z,C):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function d(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===In&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===In&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const z=t.get(_),C=z.envMap,P=z.envMapRotation;C&&(M.envMap.value=C,us.copy(P),us.x*=-1,us.y*=-1,us.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),M.envMapRotation.value.setFromMatrix4(hA.makeRotationFromEuler(us)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function p(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function g(M,_,z,C){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*z,M.scale.value=C*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function y(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function b(M,_,z){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const z=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function pA(o,t,i,r){let c={},d={},f=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(z,C){const P=C.program;r.uniformBlockBinding(z,P)}function m(z,C){let P=c[z.id];P===void 0&&(A(z),P=v(z),c[z.id]=P,z.addEventListener("dispose",M));const ie=C.program;r.updateUBOMapping(z,ie);const H=t.render.frame;d[z.id]!==H&&(S(z),d[z.id]=H)}function v(z){const C=y();z.__bindingPointIndex=C;const P=o.createBuffer(),ie=z.__size,H=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,ie,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,P),P}function y(){for(let z=0;z<p;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const C=c[z.id],P=z.uniforms,ie=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let H=0,O=P.length;H<O;H++){const J=Array.isArray(P[H])?P[H]:[P[H]];for(let D=0,w=J.length;D<w;D++){const G=J[D];if(b(G,H,D,ie)===!0){const ce=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let he=0;he<le.length;he++){const j=le[he],q=R(j);typeof j=="number"||typeof j=="boolean"?(G.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,ce+me,G.__data)):j.isMatrix3?(G.__data[0]=j.elements[0],G.__data[1]=j.elements[1],G.__data[2]=j.elements[2],G.__data[3]=0,G.__data[4]=j.elements[3],G.__data[5]=j.elements[4],G.__data[6]=j.elements[5],G.__data[7]=0,G.__data[8]=j.elements[6],G.__data[9]=j.elements[7],G.__data[10]=j.elements[8],G.__data[11]=0):(j.toArray(G.__data,me),me+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(z,C,P,ie){const H=z.value,O=C+"_"+P;if(ie[O]===void 0)return typeof H=="number"||typeof H=="boolean"?ie[O]=H:ie[O]=H.clone(),!0;{const J=ie[O];if(typeof H=="number"||typeof H=="boolean"){if(J!==H)return ie[O]=H,!0}else if(J.equals(H)===!1)return J.copy(H),!0}return!1}function A(z){const C=z.uniforms;let P=0;const ie=16;for(let O=0,J=C.length;O<J;O++){const D=Array.isArray(C[O])?C[O]:[C[O]];for(let w=0,G=D.length;w<G;w++){const ce=D[w],le=Array.isArray(ce.value)?ce.value:[ce.value];for(let me=0,he=le.length;me<he;me++){const j=le[me],q=R(j),Z=P%ie,Me=Z%q.boundary,Ee=Z+Me;P+=Me,Ee!==0&&ie-Ee<q.storage&&(P+=ie-Ee),ce.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=P,P+=q.storage}}}const H=P%ie;return H>0&&(P+=ie-H),z.__size=P,z.__cache={},this}function R(z){const C={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(C.boundary=4,C.storage=4):z.isVector2?(C.boundary=8,C.storage=8):z.isVector3||z.isColor?(C.boundary=16,C.storage=12):z.isVector4?(C.boundary=16,C.storage=16):z.isMatrix3?(C.boundary=48,C.storage=48):z.isMatrix4?(C.boundary=64,C.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),C}function M(z){const C=z.target;C.removeEventListener("dispose",M);const P=f.indexOf(C.__bindingPointIndex);f.splice(P,1),o.deleteBuffer(c[C.id]),delete c[C.id],delete d[C.id]}function _(){for(const z in c)o.deleteBuffer(c[z]);f=[],c={},d={}}return{bind:g,update:m,dispose:_}}class mA{constructor(t={}){const{canvas:i=aS(),context:r=null,depth:c=!0,stencil:d=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const b=new Uint32Array(4),A=new Int32Array(4);let R=null,M=null;const _=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=za,this.toneMappingExposure=1;const C=this;let P=!1,ie=0,H=0,O=null,J=-1,D=null;const w=new hn,G=new hn;let ce=null;const le=new Rt(0);let me=0,he=i.width,j=i.height,q=1,Z=null,Me=null;const Ee=new hn(0,0,he,j),U=new hn(0,0,he,j);let ne=!1;const ve=new Iv;let W=!1,oe=!1;const ye=new ln,be=new re,He=new hn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function jt(){return O===null?q:1}let B=r;function Vt(N,k){return i.getContext(N,k)}try{const N={alpha:!0,depth:c,stencil:d,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pf}`),i.addEventListener("webglcontextlost",fe,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",we,!1),B===null){const k="webgl2";if(B=Vt(k,N),B===null)throw Vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ut,yt,Ge,kt,$e,et,L,T,ae,Se,xe,_e,qe,De,je,it,Ae,Le,ft,Ke,Re,Ye,Ze,Pt;function V(){ut=new SE(B),ut.init(),Ye=new sA(B,ut),yt=new mE(B,ut,t,Ye),Ge=new nA(B),kt=new EE(B),$e=new GT,et=new aA(B,ut,Ge,$e,yt,Ye,kt),L=new xE(C),T=new yE(C),ae=new DS(B),Ze=new fE(B,ae),Se=new ME(B,ae,kt,Ze),xe=new AE(B,Se,ae,kt),ft=new TE(B,yt,et),it=new gE($e),_e=new HT(C,L,T,ut,yt,Ze,it),qe=new fA(C,$e),De=new kT,je=new KT(ut),Le=new hE(C,L,T,Ge,xe,S,g),Ae=new tA(C,xe,yt),Pt=new pA(B,kt,yt,Ge),Ke=new pE(B,ut,kt),Re=new bE(B,ut,kt),kt.programs=_e.programs,C.capabilities=yt,C.extensions=ut,C.properties=$e,C.renderLists=De,C.shadowMap=Ae,C.state=Ge,C.info=kt}V();const Ne=new dA(C,B);this.xr=Ne,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const N=ut.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ut.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(N){N!==void 0&&(q=N,this.setSize(he,j,!1))},this.getSize=function(N){return N.set(he,j)},this.setSize=function(N,k,ee=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=N,j=k,i.width=Math.floor(N*q),i.height=Math.floor(k*q),ee===!0&&(i.style.width=N+"px",i.style.height=k+"px"),this.setViewport(0,0,N,k)},this.getDrawingBufferSize=function(N){return N.set(he*q,j*q).floor()},this.setDrawingBufferSize=function(N,k,ee){he=N,j=k,q=ee,i.width=Math.floor(N*ee),i.height=Math.floor(k*ee),this.setViewport(0,0,N,k)},this.getCurrentViewport=function(N){return N.copy(w)},this.getViewport=function(N){return N.copy(Ee)},this.setViewport=function(N,k,ee,te){N.isVector4?Ee.set(N.x,N.y,N.z,N.w):Ee.set(N,k,ee,te),Ge.viewport(w.copy(Ee).multiplyScalar(q).round())},this.getScissor=function(N){return N.copy(U)},this.setScissor=function(N,k,ee,te){N.isVector4?U.set(N.x,N.y,N.z,N.w):U.set(N,k,ee,te),Ge.scissor(G.copy(U).multiplyScalar(q).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(N){Ge.setScissorTest(ne=N)},this.setOpaqueSort=function(N){Z=N},this.setTransparentSort=function(N){Me=N},this.getClearColor=function(N){return N.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(N=!0,k=!0,ee=!0){let te=0;if(N){let Y=!1;if(O!==null){const Te=O.texture.format;Y=Te===yf||Te===_f||Te===vf}if(Y){const Te=O.texture.type,Ce=Te===ta||Te===Ns||Te===Hl||Te===jr||Te===gf||Te===xf,Oe=Le.getClearColor(),Pe=Le.getClearAlpha(),Ie=Oe.r,Je=Oe.g,We=Oe.b;Ce?(b[0]=Ie,b[1]=Je,b[2]=We,b[3]=Pe,B.clearBufferuiv(B.COLOR,0,b)):(A[0]=Ie,A[1]=Je,A[2]=We,A[3]=Pe,B.clearBufferiv(B.COLOR,0,A))}else te|=B.COLOR_BUFFER_BIT}k&&(te|=B.DEPTH_BUFFER_BIT),ee&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",fe,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",we,!1),De.dispose(),je.dispose(),$e.dispose(),L.dispose(),T.dispose(),xe.dispose(),Ze.dispose(),Pt.dispose(),_e.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",xn),Ne.removeEventListener("sessionend",Yl),yi.stop()};function fe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const N=kt.autoReset,k=Ae.enabled,ee=Ae.autoUpdate,te=Ae.needsUpdate,Y=Ae.type;V(),kt.autoReset=N,Ae.enabled=k,Ae.autoUpdate=ee,Ae.needsUpdate=te,Ae.type=Y}function we(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ke(N){const k=N.target;k.removeEventListener("dispose",ke),ot(k)}function ot(N){Ot(N),$e.remove(N)}function Ot(N){const k=$e.get(N).programs;k!==void 0&&(k.forEach(function(ee){_e.releaseProgram(ee)}),N.isShaderMaterial&&_e.releaseShaderCache(N))}this.renderBufferDirect=function(N,k,ee,te,Y,Te){k===null&&(k=Fe);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=vn(N,k,ee,te,Y);Ge.setMaterial(te,Ce);let Pe=ee.index,Ie=1;if(te.wireframe===!0){if(Pe=Se.getWireframeAttribute(ee),Pe===void 0)return;Ie=2}const Je=ee.drawRange,We=ee.attributes.position;let ct=Je.start*Ie,At=(Je.start+Je.count)*Ie;Te!==null&&(ct=Math.max(ct,Te.start*Ie),At=Math.min(At,(Te.start+Te.count)*Ie)),Pe!==null?(ct=Math.max(ct,0),At=Math.min(At,Pe.count)):We!=null&&(ct=Math.max(ct,0),At=Math.min(At,We.count));const Ft=At-ct;if(Ft<0||Ft===1/0)return;Ze.setup(Y,te,Oe,ee,Pe);let _n,_t=Ke;if(Pe!==null&&(_n=ae.get(Pe),_t=Re,_t.setIndex(_n)),Y.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*jt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(Y.isLine){let Ve=te.linewidth;Ve===void 0&&(Ve=1),Ge.setLineWidth(Ve*jt()),Y.isLineSegments?_t.setMode(B.LINES):Y.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else Y.isPoints?_t.setMode(B.POINTS):Y.isSprite&&_t.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ve=Y._multiDrawStarts,Xt=Y._multiDrawCounts,gt=Y._multiDrawCount,Yt=Pe?ae.get(Pe).bytesPerElement:1,sn=$e.get(te).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)sn.setValue(B,"_gl_DrawID",yn),_t.render(Ve[yn]/Yt,Xt[yn])}else if(Y.isInstancedMesh)_t.renderInstances(ct,Ft,Y.count);else if(ee.isInstancedBufferGeometry){const Ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Xt=Math.min(ee.instanceCount,Ve);_t.renderInstances(ct,Ft,Xt)}else _t.render(ct,Ft)};function an(N,k,ee){N.transparent===!0&&N.side===Ni&&N.forceSinglePass===!1?(N.side=In,N.needsUpdate=!0,Ga(N,k,ee),N.side=Ba,N.needsUpdate=!0,Ga(N,k,ee),N.side=Ni):Ga(N,k,ee)}this.compile=function(N,k,ee=null){ee===null&&(ee=N),M=je.get(ee),M.init(k),z.push(M),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),N!==ee&&N.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights();const te=new Set;return N.traverse(function(Y){const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Oe=Te[Ce];an(Oe,ee,Y),te.add(Oe)}else an(Te,ee,Y),te.add(Te)}),z.pop(),M=null,te},this.compileAsync=function(N,k,ee=null){const te=this.compile(N,k,ee);return new Promise(Y=>{function Te(){if(te.forEach(function(Ce){$e.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){Y(N);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let vt=null;function Bn(N){vt&&vt(N)}function xn(){yi.stop()}function Yl(){yi.start()}const yi=new zv;yi.setAnimationLoop(Bn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(N){vt=N,Ne.setAnimationLoop(N),N===null?yi.stop():yi.start()},Ne.addEventListener("sessionstart",xn),Ne.addEventListener("sessionend",Yl),this.render=function(N,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(k),k=Ne.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,k,O),M=je.get(N,z.length),M.init(k),z.push(M),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ve.setFromProjectionMatrix(ye),oe=this.localClippingEnabled,W=it.init(this.clippingPlanes,oe),R=De.get(N,_.length),R.init(),_.push(R),Ne.enabled===!0&&Ne.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&Rs(Te,k,-1/0,C.sortObjects)}Rs(N,k,0,C.sortObjects),R.finish(),C.sortObjects===!0&&R.sort(Z,Me),nt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,nt&&Le.addToRenderList(R,N),this.info.render.frame++,W===!0&&it.beginShadows();const ee=M.state.shadowsArray;Ae.render(ee,N,k),W===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=R.opaque,Y=R.transmissive;if(M.setupLights(),k.isArrayCamera){const Te=k.cameras;if(Y.length>0)for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++){const Pe=Te[Ce];Cs(te,Y,N,Pe)}nt&&Le.render(N);for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++){const Pe=Te[Ce];zr(R,N,Pe,Pe.viewport)}}else Y.length>0&&Cs(te,Y,N,k),nt&&Le.render(N),zr(R,N,k);O!==null&&(et.updateMultisampleRenderTarget(O),et.updateRenderTargetMipmap(O)),N.isScene===!0&&N.onAfterRender(C,N,k),Ze.resetDefaultState(),J=-1,D=null,z.pop(),z.length>0?(M=z[z.length-1],W===!0&&it.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Rs(N,k,ee,te){if(N.visible===!1)return;if(N.layers.test(k.layers)){if(N.isGroup)ee=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(k);else if(N.isLight)M.pushLight(N),N.castShadow&&M.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ve.intersectsSprite(N)){te&&He.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ye);const Ce=xe.update(N),Oe=N.material;Oe.visible&&R.push(N,Ce,Oe,ee,He.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ve.intersectsObject(N))){const Ce=xe.update(N),Oe=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),He.copy(N.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),He.copy(Ce.boundingSphere.center)),He.applyMatrix4(N.matrixWorld).applyMatrix4(ye)),Array.isArray(Oe)){const Pe=Ce.groups;for(let Ie=0,Je=Pe.length;Ie<Je;Ie++){const We=Pe[Ie],ct=Oe[We.materialIndex];ct&&ct.visible&&R.push(N,Ce,ct,ee,He.z,We)}}else Oe.visible&&R.push(N,Ce,Oe,ee,He.z,null)}}const Te=N.children;for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++)Rs(Te[Ce],k,ee,te)}function zr(N,k,ee,te){const Y=N.opaque,Te=N.transmissive,Ce=N.transparent;M.setupLightsView(ee),W===!0&&it.setGlobalState(C.clippingPlanes,ee),te&&Ge.viewport(w.copy(te)),Y.length>0&&aa(Y,k,ee),Te.length>0&&aa(Te,k,ee),Ce.length>0&&aa(Ce,k,ee),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Cs(N,k,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[te.id]===void 0&&(M.state.transmissionRenderTarget[te.id]=new ws(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Gl:ta,minFilter:Ts,samples:4,stencilBuffer:d,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Te=M.state.transmissionRenderTarget[te.id],Ce=te.viewport||w;Te.setSize(Ce.z,Ce.w);const Oe=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(le),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),nt&&Le.render(ee);const Pe=C.toneMapping;C.toneMapping=za;const Ie=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),W===!0&&it.setGlobalState(C.clippingPlanes,te),aa(N,ee,te),et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let We=0,ct=k.length;We<ct;We++){const At=k[We],Ft=At.object,_n=At.geometry,_t=At.material,Ve=At.group;if(_t.side===Ni&&Ft.layers.test(te.layers)){const Xt=_t.side;_t.side=In,_t.needsUpdate=!0,Br(Ft,ee,te,_n,_t,Ve),_t.side=Xt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(et.updateMultisampleRenderTarget(Te),et.updateRenderTargetMipmap(Te))}C.setRenderTarget(Oe),C.setClearColor(le,me),Ie!==void 0&&(te.viewport=Ie),C.toneMapping=Pe}function aa(N,k,ee){const te=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Te=N.length;Y<Te;Y++){const Ce=N[Y],Oe=Ce.object,Pe=Ce.geometry,Ie=te===null?Ce.material:te,Je=Ce.group;Oe.layers.test(ee.layers)&&Br(Oe,k,ee,Pe,Ie,Je)}}function Br(N,k,ee,te,Y,Te){N.onBeforeRender(C,k,ee,te,Y,Te),N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Y.transparent===!0&&Y.side===Ni&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,C.renderBufferDirect(ee,k,te,Y,N,Te),Y.side=Ba,Y.needsUpdate=!0,C.renderBufferDirect(ee,k,te,Y,N,Te),Y.side=Ni):C.renderBufferDirect(ee,k,te,Y,N,Te),N.onAfterRender(C,k,ee,te,Y,Te)}function Ga(N,k,ee){k.isScene!==!0&&(k=Fe);const te=$e.get(N),Y=M.state.lights,Te=M.state.shadowsArray,Ce=Y.state.version,Oe=_e.getParameters(N,Y.state,Te,k,ee),Pe=_e.getProgramCacheKey(Oe);let Ie=te.programs;te.environment=N.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(N.isMeshStandardMaterial?T:L).get(N.envMap||te.environment),te.envMapRotation=te.environment!==null&&N.envMap===null?k.environmentRotation:N.envMapRotation,Ie===void 0&&(N.addEventListener("dispose",ke),Ie=new Map,te.programs=Ie);let Je=Ie.get(Pe);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Ce)return Qt(N,Oe),Je}else Oe.uniforms=_e.getUniforms(N),N.onBeforeCompile(Oe,C),Je=_e.acquireProgram(Oe,Pe),Ie.set(Pe,Je),te.uniforms=Oe.uniforms;const We=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(We.clippingPlanes=it.uniform),Qt(N,Oe),te.needsLights=Fr(N),te.lightsStateVersion=Ce,te.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function ri(N){if(N.uniformsList===null){const k=N.currentProgram.getUniforms();N.uniformsList=Pc.seqWithValue(k.seq,N.uniforms)}return N.uniformsList}function Qt(N,k){const ee=$e.get(N);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function vn(N,k,ee,te,Y){k.isScene!==!0&&(k=Fe),et.resetTextureUnits();const Te=k.fog,Ce=te.isMeshStandardMaterial?k.environment:null,Oe=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Fa,Pe=(te.isMeshStandardMaterial?T:L).get(te.envMap||Ce),Ie=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let Ft=za;te.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ft=C.toneMapping);const _n=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=_n!==void 0?_n.length:0,Ve=$e.get(te),Xt=M.state.lights;if(W===!0&&(oe===!0||N!==D)){const wn=N===D&&te.id===J;it.setState(te,N,wn)}let gt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Xt.state.version||Ve.outputColorSpace!==Oe||Y.isBatchedMesh&&Ve.batching===!1||!Y.isBatchedMesh&&Ve.batching===!0||Y.isBatchedMesh&&Ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Y.isInstancedMesh&&Ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ve.instancingMorph===!1&&Y.morphTexture!==null||Ve.envMap!==Pe||te.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==it.numPlanes||Ve.numIntersection!==it.numIntersection)||Ve.vertexAlphas!==Ie||Ve.vertexTangents!==Je||Ve.morphTargets!==We||Ve.morphNormals!==ct||Ve.morphColors!==At||Ve.toneMapping!==Ft||Ve.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,Ve.__version=te.version);let Yt=Ve.currentProgram;gt===!0&&(Yt=Ga(te,k,Y));let sn=!1,yn=!1,Hr=!1;const Ht=Yt.getUniforms(),li=Ve.uniforms;if(Ge.useProgram(Yt.program)&&(sn=!0,yn=!0,Hr=!0),te.id!==J&&(J=te.id,yn=!0),sn||D!==N){Ht.setValue(B,"projectionMatrix",N.projectionMatrix),Ht.setValue(B,"viewMatrix",N.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(B,be.setFromMatrixPosition(N.matrixWorld)),yt.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",N.isOrthographicCamera===!0),D!==N&&(D=N,yn=!0,Hr=!0)}if(Y.isSkinnedMesh){Ht.setOptional(B,Y,"bindMatrix"),Ht.setOptional(B,Y,"bindMatrixInverse");const wn=Y.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ht.setValue(B,"boneTexture",wn.boneTexture,et))}Y.isBatchedMesh&&(Ht.setOptional(B,Y,"batchingTexture"),Ht.setValue(B,"batchingTexture",Y._matricesTexture,et),Ht.setOptional(B,Y,"batchingIdTexture"),Ht.setValue(B,"batchingIdTexture",Y._indirectTexture,et),Ht.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ht.setValue(B,"batchingColorTexture",Y._colorsTexture,et));const ra=ee.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&ft.update(Y,ee,Yt),(yn||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Ht.setValue(B,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(li.envMap.value=Pe,li.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(li.envMapIntensity.value=k.environmentIntensity),yn&&(Ht.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&sa(li,Hr),Te&&te.fog===!0&&qe.refreshFogUniforms(li,Te),qe.refreshMaterialUniforms(li,te,q,j,M.state.transmissionRenderTarget[N.id]),Pc.upload(B,ri(Ve),li,et)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Pc.upload(B,ri(Ve),li,et),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ht.setValue(B,"center",Y.center),Ht.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(B,"normalMatrix",Y.normalMatrix),Ht.setValue(B,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const wn=te.uniformsGroups;for(let Sn=0,Gr=wn.length;Sn<Gr;Sn++){const Vr=wn[Sn];Pt.update(Vr,Yt),Pt.bind(Vr,Yt)}}return Yt}function sa(N,k){N.ambientLightColor.needsUpdate=k,N.lightProbe.needsUpdate=k,N.directionalLights.needsUpdate=k,N.directionalLightShadows.needsUpdate=k,N.pointLights.needsUpdate=k,N.pointLightShadows.needsUpdate=k,N.spotLights.needsUpdate=k,N.spotLightShadows.needsUpdate=k,N.rectAreaLights.needsUpdate=k,N.hemisphereLights.needsUpdate=k}function Fr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,k,ee){$e.get(N.texture).__webglTexture=k,$e.get(N.depthTexture).__webglTexture=ee;const te=$e.get(N);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,k){const ee=$e.get(N);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(N,k=0,ee=0){O=N,ie=k,H=ee;let te=!0,Y=null,Te=!1,Ce=!1;if(N){const Pe=$e.get(N);Pe.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(B.FRAMEBUFFER,null),te=!1):Pe.__webglFramebuffer===void 0?et.setupRenderTarget(N):Pe.__hasExternalTextures&&et.rebindTextures(N,$e.get(N.texture).__webglTexture,$e.get(N.depthTexture).__webglTexture);const Ie=N.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ce=!0);const Je=$e.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?Y=Je[k][ee]:Y=Je[k],Te=!0):N.samples>0&&et.useMultisampledRTT(N)===!1?Y=$e.get(N).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,w.copy(N.viewport),G.copy(N.scissor),ce=N.scissorTest}else w.copy(Ee).multiplyScalar(q).floor(),G.copy(U).multiplyScalar(q).floor(),ce=ne;if(Ge.bindFramebuffer(B.FRAMEBUFFER,Y)&&te&&Ge.drawBuffers(N,Y),Ge.viewport(w),Ge.scissor(G),Ge.setScissorTest(ce),Te){const Pe=$e.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,ee)}else if(Ce){const Pe=$e.get(N.texture),Ie=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,ee||0,Ie)}J=-1},this.readRenderTargetPixels=function(N,k,ee,te,Y,Te,Ce){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$e.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){Ge.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const Pe=N.texture,Ie=Pe.format,Je=Pe.type;if(!yt.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=N.width-te&&ee>=0&&ee<=N.height-Y&&B.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),Te)}finally{const Pe=O!==null?$e.get(O).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(N,k,ee,te,Y,Te,Ce){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=$e.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){Ge.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const Pe=N.texture,Ie=Pe.format,Je=Pe.type;if(!yt.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=N.width-te&&ee>=0&&ee<=N.height-Y){const We=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(k,ee,te,Y,Ye.convert(Ie),Ye.convert(Je),0),B.flush();const ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await sS(B,ct,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te)}finally{B.deleteBuffer(We),B.deleteSync(ct)}return Te}}finally{const Pe=O!==null?$e.get(O).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(N,k=null,ee=0){N.isTexture!==!0&&(Fl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,N=arguments[1]);const te=Math.pow(2,-ee),Y=Math.floor(N.image.width*te),Te=Math.floor(N.image.height*te),Ce=k!==null?k.x:0,Oe=k!==null?k.y:0;et.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Ce,Oe,Y,Te),Ge.unbindTexture()},this.copyTextureToTexture=function(N,k,ee=null,te=null,Y=0){N.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,N=arguments[1],k=arguments[2],Y=arguments[3]||0,ee=null);let Te,Ce,Oe,Pe,Ie,Je;ee!==null?(Te=ee.max.x-ee.min.x,Ce=ee.max.y-ee.min.y,Oe=ee.min.x,Pe=ee.min.y):(Te=N.image.width,Ce=N.image.height,Oe=0,Pe=0),te!==null?(Ie=te.x,Je=te.y):(Ie=0,Je=0);const We=Ye.convert(k.format),ct=Ye.convert(k.type);et.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const At=B.getParameter(B.UNPACK_ROW_LENGTH),Ft=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_n=B.getParameter(B.UNPACK_SKIP_PIXELS),_t=B.getParameter(B.UNPACK_SKIP_ROWS),Ve=B.getParameter(B.UNPACK_SKIP_IMAGES),Xt=N.isCompressedTexture?N.mipmaps[Y]:N.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pe),N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,Ie,Je,Te,Ce,We,ct,Xt.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,Ie,Je,Xt.width,Xt.height,We,Xt.data):B.texSubImage2D(B.TEXTURE_2D,Y,Ie,Je,Te,Ce,We,ct,Xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,At),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_n),B.pixelStorei(B.UNPACK_SKIP_ROWS,_t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve),Y===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(N,k,ee=null,te=null,Y=0){N.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,N=arguments[2],k=arguments[3],Y=arguments[4]||0);let Te,Ce,Oe,Pe,Ie,Je,We,ct,At;const Ft=N.isCompressedTexture?N.mipmaps[Y]:N.image;ee!==null?(Te=ee.max.x-ee.min.x,Ce=ee.max.y-ee.min.y,Oe=ee.max.z-ee.min.z,Pe=ee.min.x,Ie=ee.min.y,Je=ee.min.z):(Te=Ft.width,Ce=Ft.height,Oe=Ft.depth,Pe=0,Ie=0,Je=0),te!==null?(We=te.x,ct=te.y,At=te.z):(We=0,ct=0,At=0);const _n=Ye.convert(k.format),_t=Ye.convert(k.type);let Ve;if(k.isData3DTexture)et.setTexture3D(k,0),Ve=B.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)et.setTexture2DArray(k,0),Ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Xt=B.getParameter(B.UNPACK_ROW_LENGTH),gt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yt=B.getParameter(B.UNPACK_SKIP_PIXELS),sn=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ie),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je),N.isDataTexture||N.isData3DTexture?B.texSubImage3D(Ve,Y,We,ct,At,Te,Ce,Oe,_n,_t,Ft.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,Y,We,ct,At,Te,Ce,Oe,_n,Ft.data):B.texSubImage3D(Ve,Y,We,ct,At,Te,Ce,Oe,_n,_t,Ft),B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Y===0&&k.generateMipmaps&&B.generateMipmap(Ve),Ge.unbindTexture()},this.initRenderTarget=function(N){$e.get(N).__webglFramebuffer===void 0&&et.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?et.setTextureCube(N,0):N.isData3DTexture?et.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?et.setTexture2DArray(N,0):et.setTexture2D(N,0),Ge.unbindTexture()},this.resetState=function(){ie=0,H=0,O=null,Ge.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Sf?"display-p3":"srgb",i.unpackColorSpace=Et.workingColorSpace===kc?"display-p3":"srgb"}}class gA extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class xA extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);function vA(){const o=Tn.useRef(null),t=Tn.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null});return Tn.useEffect(()=>{if(!o.current)return;const i=o.current,r=t.current,c=`
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
    `,f=()=>{r.scene=new gA,r.renderer=new mA({canvas:i,alpha:!0,antialias:!0}),r.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.renderer.setClearColor(new Rt(1057326),1),r.camera=new Bv(-1,1,1,-1,0,1),r.uniforms={resolution:{value:[i.clientWidth,i.clientHeight]},time:{value:0},xScale:{value:1.28},yScale:{value:.24},distortion:{value:.08}};const m=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],v=new Ha;v.setAttribute("position",new xi(new Float32Array(m),3));const y=new xA({vertexShader:c,fragmentShader:d,uniforms:r.uniforms,side:Ni});r.mesh=new Ri(v,y),r.scene.add(r.mesh),g()},p=()=>{r.uniforms&&(r.uniforms.time.value+=.0045),r.renderer&&r.scene&&r.camera&&r.renderer.render(r.scene,r.camera),r.animationId=requestAnimationFrame(p)},g=()=>{if(!r.renderer||!r.uniforms)return;const m=i.getBoundingClientRect(),v=Math.max(1,Math.floor(m.width)),y=Math.max(1,Math.floor(m.height));r.renderer.setSize(v,y,!1),r.uniforms.resolution.value=[v,y]};return f(),p(),window.addEventListener("resize",g),()=>{var m,v;r.animationId&&cancelAnimationFrame(r.animationId),window.removeEventListener("resize",g),r.mesh&&((m=r.scene)==null||m.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material instanceof ql&&r.mesh.material.dispose()),(v=r.renderer)==null||v.dispose()}},[]),s.jsx("canvas",{ref:o,className:"hero-shader-canvas","aria-hidden":"true"})}const _A=[{label:"Education",href:"/education",links:[]},{label:"Experience",href:"/en/experience-passport.php",links:[["Marketplace","/business-club"]]},{label:"Entrepreneur",href:"/entrepreneur",links:[]},{label:"Enterprise",href:"/economy",links:[["Business Ecosystem","/en/business-club.php"],["Become a partner","/partner"],["Investor","/investor"],["Service and Product","/en/services-products.php"]]},{label:"Environment",href:"/environment",links:[["Sustainability","/en/environment.php"],["Projects","/en/projects.php"]]}];function vi({loginHref:o="#login",languagePage:t="index.php"}){return s.jsx("header",{className:"site-header",children:s.jsxs("nav",{className:"nav","aria-label":"Primary navigation",children:[s.jsx("a",{className:"brand",href:"/en/index.php",children:s.jsx("img",{className:"header-logo",src:"/images/logo.png",alt:"EI.one"})}),s.jsxs("div",{className:"nav-links",children:[s.jsx("a",{href:"/en/index.php",children:"Home"}),_A.map(i=>i.links.length?s.jsxs("div",{className:"nav-item has-submenu",children:[s.jsxs("a",{href:i.href,children:[i.label," ",s.jsx("i",{className:"fa-solid fa-chevron-down","aria-hidden":"true"})]}),s.jsx("div",{className:"submenu",children:i.links.map(([r,c])=>s.jsx("a",{href:c,children:r},r))})]},i.label):s.jsx("a",{href:i.href,children:i.label},i.label)),s.jsx("a",{href:"/about",children:"About"})]}),s.jsx("a",{className:"button secondary",href:o,children:"Login"}),s.jsxs("div",{className:"lang has-submenu","aria-label":"Language selector",children:[s.jsxs("button",{type:"button",children:["EN ",s.jsx("i",{className:"fa-solid fa-caret-down","aria-hidden":"true"})]}),s.jsxs("div",{className:"submenu lang-menu",children:[s.jsx("a",{href:`/de/${t}`,children:"DE"}),s.jsx("a",{href:`/it/${t}`,children:"IT"}),s.jsx("a",{href:`/fr/${t}`,children:"FR"}),s.jsx("a",{href:`/en/${t}`,children:"EN"})]})]})]})})}function _i(){return s.jsx("footer",{className:"site-footer",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-about",children:[s.jsx("a",{className:"footer-logo",href:"/en/index.php","aria-label":"ei.one",children:s.jsx("img",{src:"/images/logo.png",alt:"ei.one"})}),s.jsx("p",{children:"ei.one - The ecosystem where people build real experience and companies grow by hiring on what people can actually do."})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Companies"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"/business-club",children:"Business Ecosystem"})}),s.jsx("li",{children:s.jsx("a",{href:"/partner",children:"Become a Partner"})}),s.jsx("li",{children:s.jsx("a",{href:"/sponsor",children:"Sponsor"})}),s.jsx("li",{children:s.jsx("a",{href:"/investors",children:"Investors"})}),s.jsx("li",{children:s.jsx("a",{href:"/services-products",children:"Services & Products"})})]})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Talents"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"/experience-passport",children:"Experience Identity"})}),s.jsx("li",{children:s.jsx("a",{href:"/academy",children:"Academy"})}),s.jsx("li",{children:s.jsx("a",{href:"/recruitment",children:"Recruitment"})})]})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Ecosystem"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"/about",children:"About Us"})}),s.jsx("li",{children:s.jsx("a",{href:"/education",children:"Education"})}),s.jsx("li",{children:s.jsx("a",{href:"/economy",children:"Economy"})}),s.jsx("li",{children:s.jsx("a",{href:"/environment",children:"Environment"})}),s.jsx("li",{children:s.jsx("a",{href:"/projects",children:"Projects"})}),s.jsx("li",{children:s.jsx("a",{href:"/contact",children:"Contact"})})]})]})]}),s.jsxs("div",{className:"footer-contact",children:[s.jsx("h3",{children:"Contact"}),s.jsxs("p",{children:[s.jsx("strong",{children:"ei.one"}),s.jsx("br",{}),"Netmaster (Schweiz) AG",s.jsx("br",{}),"Toedistrasse 56",s.jsx("br",{}),"CH - 8810 Horgen"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Tel:"})," +41 44 542 47 47"]})]}),s.jsxs("div",{className:"copyright",children:[s.jsx("span",{children:"Copyright 2026 ei.one - Ecosystem Intelligence. All rights reserved."}),s.jsxs("span",{className:"footer-legal",children:[s.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"}),s.jsx("a",{href:"/terms-and-conditions",children:"Terms and Conditions"})]})]})]})})}function ds(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function yA(){return Tn.useEffect(()=>{const o="Education - EI.one School Ecosystem & Academy",t="EI.one Education connects school ecosystems, academy journeys and verified experiences so learning becomes visible, attestable and useful for future opportunities.";document.title=o,ds("description",t),ds("keywords","EI.one education, school ecosystem, academy, experience identity, verified learning, talents, skills"),ds("og:title",o,"property"),ds("og:description",t,"property"),ds("og:url","https://ei.one/en/education","property"),ds("twitter:title",o),ds("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/education")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"#education-login",languagePage:"education.php"}),s.jsxs("main",{className:"education-page",children:[s.jsx("section",{className:"education-hero",children:s.jsxs("div",{className:"wrap education-hero-grid",children:[s.jsxs("div",{children:[s.jsx("p",{className:"education-kicker",children:"Schools"}),s.jsx("h1",{children:"Turn experience into growth of relevance."}),s.jsx("p",{children:"Transform your students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge with companies. Your students' experiences become your prestige."})]}),s.jsxs("div",{className:"education-hero-card",id:"education-login",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=84",alt:"Students collaborating in a bright learning environment"}),s.jsxs("div",{children:[s.jsx("strong",{children:"School Ecosystem"}),s.jsx("span",{children:"Learning, mentoring, projects and verified experiences connected in one growth path."})]})]})]})}),s.jsx("section",{className:"human-center",children:s.jsxs("div",{className:"wrap human-center-grid",children:[s.jsxs("div",{className:"human-center-copy",children:[s.jsx("h2",{children:"The Human at the Center"}),s.jsx("p",{children:"Humans are at the center of every sustainable development. For us, social sustainability means combining economic progress with responsibility towards people, communities, and future generations."}),s.jsx("p",{children:"At EI.one, we believe that sustainable innovation can only emerge when people have access to knowledge, education, and new opportunities. That is why we promote a corporate culture based on collaboration, trust, diversity, and personal development."})]}),s.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[s.jsx("img",{src:"/images/human-at-center.png",alt:"People collaborating around a table in a bright learning community"}),s.jsx("div",{className:"human-center-glow"})]})]})}),s.jsx("section",{className:"education-pillars",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"education-section-head",children:[s.jsx("h2",{children:"Education & Networking"}),s.jsx("p",{children:"Our ecosystem connects companies, talents, educational institutions, and experts to share knowledge and create new opportunities."})]}),s.jsxs("div",{className:"education-pillar-grid",children:[s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),s.jsx("h3",{children:"Education Initiatives"}),s.jsx("p",{children:"Continuous development and skill building."})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-users-viewfinder","aria-hidden":"true"}),s.jsx("h3",{children:"Talent Promotion"}),s.jsx("p",{children:"Helping people reach their full potential."})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-handshake-simple","aria-hidden":"true"}),s.jsx("h3",{children:"Cooperation"}),s.jsx("p",{children:"Innovation through collaboration across borders."})]})]})]})}),s.jsx("section",{className:"human-center",children:s.jsxs("div",{className:"wrap human-center-grid",children:[s.jsxs("div",{className:"human-center-copy",children:[s.jsx("h2",{children:"Inclusive & Human Economy"}),s.jsx("p",{children:"Social sustainability for us also means promoting new forms of collaboration. In an increasingly connected world, innovation and progress no longer arise in isolation but through cooperation between people, companies, and organizations."}),s.jsx("p",{children:"EI.one supports this development through a globally oriented network that brings together talents, ideas, and projects. Our goal is to promote an economy that is human, inclusive, and future-oriented."})]}),s.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[s.jsx("img",{src:"/images/inclusive.jpg",alt:"inclusive and human economy"}),s.jsx("div",{className:"human-center-glow"})]})]})}),s.jsx("section",{className:"education-cta",children:s.jsxs("div",{className:"wrap education-cta-box",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Developing Solutions Together"}),s.jsx("p",{children:"Become part of a community based on trust and human growth."})]}),s.jsxs("div",{className:"education-actions",children:[s.jsx("a",{className:"button secondary",href:"/en/talent.php",children:"Become a Talent"}),s.jsx("a",{className:"button",href:"/en/contact.php",children:"Contact"})]})]})})]}),s.jsx(_i,{})]})}function hs(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function SA(){return Tn.useEffect(()=>{const o="Experience Passport - EI.one Experience Identity",t="The EI.one Experience Passport turns real work, learning, mentoring and projects into verified proof of what people can actually do.";document.title=o,hs("description",t),hs("keywords","EI.one experience passport, experience identity, verified experience, talent profile, skills proof"),hs("og:title",o,"property"),hs("og:description",t,"property"),hs("og:url","https://ei.one/en/experience-passport","property"),hs("twitter:title",o),hs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/experience-passport")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"#experience-login",languagePage:"experience-passport.php"}),s.jsxs("main",{className:"experience-page",children:[s.jsx("section",{className:"experience-hero",children:s.jsxs("div",{className:"wrap experience-hero-grid",children:[s.jsxs("div",{className:"experience-hero-copy",children:[s.jsx("h1",{children:"Experience Identity"}),s.jsx("p",{children:"Your digital record of what you've actually done. Verified by the companies who had you do it, anchored on the blockchain as a credential that belongs to you forever."}),s.jsx("p",{className:"experience-quote",children:'"Your experiences build your future."'})]}),s.jsxs("div",{className:"experience-proof-map",id:"experience-login","aria-label":"Experience Identity proof flow",children:[s.jsxs("div",{className:"proof-orbit",children:[s.jsx("span",{className:"proof-core",children:s.jsx("i",{className:"fa-solid fa-fingerprint","aria-hidden":"true"})}),s.jsxs("span",{className:"proof-node work",children:[s.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),s.jsx("strong",{children:"Work"})]}),s.jsxs("span",{className:"proof-node learn",children:[s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),s.jsx("strong",{children:"Learn"})]}),s.jsxs("span",{className:"proof-node mentor",children:[s.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),s.jsx("strong",{children:"Mentor"})]})]}),s.jsxs("div",{className:"proof-lines",children:[s.jsxs("div",{children:[s.jsx("span",{children:"01"}),s.jsx("strong",{children:"Do real work"})]}),s.jsxs("div",{children:[s.jsx("span",{children:"02"}),s.jsx("strong",{children:"Get it verified"})]}),s.jsxs("div",{children:[s.jsx("span",{children:"03"}),s.jsx("strong",{children:"Build your future"})]})]})]})]})}),s.jsx("section",{className:"human-center",children:s.jsxs("div",{className:"wrap human-center-grid",children:[s.jsxs("div",{className:"human-center-copy",children:[s.jsx("h2",{children:"The CV is broken. The Identity fixes it."}),s.jsx("p",{children:"A CV says whatever you want it to. It also says very little of substance: job titles, years, keywords. In the age of the AI transition, that's not enough for anyone â€” not for job seekers, not for employers."}),s.jsx("p",{children:"The Experience Identity is different. Every experience you add is attested by whoever had you do it â€” a company in the ecosystem, an Academy partner, a real project. What people see is your actual work, not your self-promotion."})]}),s.jsxs("div",{className:"human-center-visual","aria-label":"People connected through knowledge, education and shared opportunity",children:[s.jsx("img",{src:"/images/identity.jpg",alt:"identity"}),s.jsx("div",{className:"human-center-glow"})]})]})}),s.jsx("section",{className:"education-pillars",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"education-section-head",children:[s.jsx("h2",{children:"How it works"}),s.jsx("p",{children:"Three steps to build a Identity that actually shows what you can do."})]}),s.jsxs("div",{className:"education-pillar-grid",children:[s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-fingerprint"}),s.jsx("span",{className:"training-step",children:"01"}),s.jsx("h3",{children:"Create your Identity"}),s.jsx("p",{children:"A unique digital profile with a shareable link. It's yours, it follows you across your whole working life, no matter where you work."})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-layer-group"}),s.jsx("span",{className:"training-step",children:"02"}),s.jsx("h3",{children:"Collect verified experience"}),s.jsx("p",{children:"Every experience at an ecosystem company is attested by whoever had you do it and recorded on the blockchain as an immutable credential. Attachments, roles, results â€” all verifiable."})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-share-nodes"}),s.jsx("span",{className:"training-step",children:"03"}),s.jsx("h3",{children:"Share when it counts"}),s.jsx("p",{children:"Choose field by field what's public, what's private, what's visible only to people with the link. You decide who sees what."})]})]})]})}),s.jsx("section",{className:"identity-inputs","aria-labelledby":"identity-inputs-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"identity-inputs-head",children:[s.jsx("h2",{id:"identity-inputs-title",children:"What you can put in the Identity"}),s.jsx("p",{children:"Concrete experience, not generic keywords."})]}),s.jsxs("div",{className:"identity-inputs-grid",children:[s.jsxs("article",{className:"identity-input-card work",children:[s.jsx("span",{className:"identity-card-number",children:"01"}),s.jsx("span",{className:"identity-input-icon",children:s.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"})}),s.jsx("h3",{children:"Work experience"}),s.jsx("p",{children:"Roles, projects, responsibilities at ecosystem companies."})]}),s.jsxs("article",{className:"identity-input-card academy",children:[s.jsx("span",{className:"identity-card-number",children:"02"}),s.jsx("span",{className:"identity-input-icon",children:s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),s.jsx("h3",{children:"Academy tracks"}),s.jsx("p",{children:"Courses and training completed with sponsors and learning partners."})]}),s.jsxs("article",{className:"identity-input-card projects",children:[s.jsx("span",{className:"identity-card-number",children:"03"}),s.jsx("span",{className:"identity-input-icon",children:s.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),s.jsx("h3",{children:"Projects"}),s.jsx("p",{children:"Work delivered, with results, duration and the role you played."})]}),s.jsxs("article",{className:"identity-input-card skills",children:[s.jsx("span",{className:"identity-card-number",children:"04"}),s.jsx("span",{className:"identity-input-icon",children:s.jsx("i",{className:"fa-solid fa-language","aria-hidden":"true"})}),s.jsx("h3",{children:"Skills & languages"}),s.jsx("p",{children:"Technical skills, soft skills, languages - linked to the experience that proves them."})]})]})]})}),s.jsx("section",{className:"identity-difference","aria-labelledby":"identity-difference-title",children:s.jsxs("div",{className:"wrap",children:[s.jsx("div",{className:"identity-difference-head",children:s.jsx("h2",{id:"identity-difference-title",children:"Why it's different"})}),s.jsxs("div",{className:"identity-difference-grid",children:[s.jsxs("article",{children:[s.jsx("span",{className:"difference-line"}),s.jsx("span",{className:"difference-icon",children:s.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),s.jsx("h3",{children:"Verified at the source, signed on-chain"}),s.jsx("p",{children:"Every experience is attested by whoever had you do it and anchored on the blockchain as a verifiable credential. Not words, cryptographic proof."})]}),s.jsxs("article",{children:[s.jsx("span",{className:"difference-line"}),s.jsx("span",{className:"difference-icon",children:s.jsx("i",{className:"fa-solid fa-user-lock","aria-hidden":"true"})}),s.jsx("h3",{children:"Under your control"}),s.jsx("p",{children:"You decide what's public, what's private and what's visible only via a shared link."})]}),s.jsxs("article",{children:[s.jsx("span",{className:"difference-line"}),s.jsx("span",{className:"difference-icon",children:s.jsx("i",{className:"fa-solid fa-infinity","aria-hidden":"true"})}),s.jsx("h3",{children:"For your whole career"}),s.jsx("p",{children:"The Identity follows you from one role to the next. It grows with you, even if you change company."})]})]})]})}),s.jsx("section",{className:"ecosystem-connect","aria-labelledby":"ecosystem-connect-title",children:s.jsxs("div",{className:"wrap ecosystem-connect-grid",children:[s.jsxs("div",{className:"ecosystem-connect-media",children:[s.jsx("img",{src:"/images/connected-ecosystem.jpeg",alt:"ecosystem workspace"}),s.jsxs("div",{className:"ecosystem-connect-badge",children:[s.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),"Identity connects the ecosystem"]})]}),s.jsxs("div",{className:"ecosystem-connect-copy",children:[s.jsx("h2",{id:"ecosystem-connect-title",children:"Connected to the rest of the ecosystem"}),s.jsx("p",{children:"The Identity isn't an isolated page. It's where the two doors of ei.one meet."}),s.jsxs("div",{className:"ecosystem-connection-list",children:[s.jsxs("article",{children:[s.jsx("span",{className:"ecosystem-connection-icon",children:s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),s.jsx("strong",{children:"Academy"}),s.jsx("p",{children:"when you finish a learning track, the experience lands straight in your Identity"}),s.jsx("em",{children:"coming soon"})]}),s.jsxs("article",{children:[s.jsx("span",{className:"ecosystem-connection-icon",children:s.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),s.jsx("strong",{children:"Recruitment"}),s.jsx("p",{children:"companies search on the experience in your Identity, not on CVs"}),s.jsx("em",{children:"coming soon"})]}),s.jsxs("article",{children:[s.jsx("span",{className:"ecosystem-connection-icon",children:s.jsx("i",{className:"fa-solid fa-people-group","aria-hidden":"true"})}),s.jsx("strong",{children:"Business Ecosystem"}),s.jsx("p",{children:"the ecosystem companies attest the experience you've built working with them"})]})]})]})]})}),s.jsx("section",{className:"identity-start","aria-labelledby":"identity-start-title",children:s.jsxs("div",{className:"wrap identity-start-grid",children:[s.jsxs("div",{className:"identity-start-copy",children:[s.jsx("h2",{id:"identity-start-title",children:"Start building your Identity."}),s.jsx("p",{children:"Open the app, sign up and start adding your first experiences."}),s.jsxs("div",{className:"identity-start-actions",children:[s.jsx("a",{className:"button identity-primary",href:"/register",children:"Create your Identity"}),s.jsx("a",{className:"button identity-login",href:"/login",children:"Log in"}),s.jsx("a",{className:"button identity-outline",href:"/talent",children:"Back to Talent"})]})]}),s.jsxs("div",{className:"identity-start-preview","aria-hidden":"true",children:[s.jsx("span",{className:"identity-start-dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"01"}),s.jsx("span",{children:"Create Identity"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"02"}),s.jsx("span",{children:"Add experience"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"03"}),s.jsx("span",{children:"Share proof"})]})]})]})})]}),s.jsx(_i,{})]})}function fs(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function MA(){return Tn.useEffect(()=>{const o="Enterprise - EI.one Economic Sustainability",t="EI.one Enterprise turns internships, project work and mentoring into verified talent, trusted partnerships and business growth.";document.title=o,fs("description",t),fs("keywords","EI.one enterprise, economy, business ecosystem, verified talent, economic sustainability, business growth"),fs("og:title",o,"property"),fs("og:description",t,"property"),fs("og:url","https://ei.one/en/economy","property"),fs("twitter:title",o),fs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/economy")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"economy.php"}),s.jsxs("main",{className:"economy-page",children:[s.jsx("section",{className:"economy-hero",children:s.jsxs("div",{className:"wrap economy-hero-grid",children:[s.jsxs("div",{className:"economy-hero-copy",children:[s.jsx("h1",{children:"Enterprise"}),s.jsx("h2",{children:"Turn experience into business growth."}),s.jsx("p",{children:"Internships, project work and mentoring become a channel of verified talent, trusted partnerships and a qualified commercial network. Your experiences attract the best. The best grow your business."}),s.jsxs("div",{className:"economy-hero-actions",children:[s.jsx("a",{className:"button",href:"/en/business-club.php",children:"Enter Business Ecosystem"}),s.jsx("a",{className:"button secondary",href:"/en/partner.php",children:"Become a Partner"})]})]}),s.jsxs("div",{className:"economy-hero-visual","aria-label":"Business growth ecosystem preview",children:[s.jsxs("div",{className:"economy-growth-card main",children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),s.jsx("strong",{children:"Business growth"})]}),s.jsxs("div",{className:"economy-growth-card talent",children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-user-check","aria-hidden":"true"})}),s.jsx("strong",{children:"Verified talent"})]}),s.jsxs("div",{className:"economy-growth-card network",children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),s.jsx("strong",{children:"Trusted partnerships"})]}),s.jsx("div",{className:"economy-orbit one"}),s.jsx("div",{className:"economy-orbit two"})]})]})}),s.jsx("section",{className:"economic-thinking","aria-labelledby":"economic-thinking-title",children:s.jsxs("div",{className:"wrap economic-thinking-grid",children:[s.jsxs("div",{className:"economic-thinking-copy",children:[s.jsx("h2",{id:"economic-thinking-title",children:"New Economic Thinking"}),s.jsx("p",{children:"For us, economic sustainability means more than just financial success. It stands for stable, resilient, and long-term viable business models that promote innovation, use resources efficiently, and simultaneously make a positive contribution to society."}),s.jsx("p",{children:"At EI.one - Ecosystem Intelligence, we develop an intelligent ecosystem that connects companies, technologies, talents, and investors. Our goal is to support organizations in creating sustainable value, opening new markets, and strengthening their competitiveness in the long term."}),s.jsxs("div",{className:"economic-thinking-tags",children:[s.jsx("span",{children:"Stable models"}),s.jsx("span",{children:"Efficient resources"}),s.jsx("span",{children:"New markets"})]})]}),s.jsxs("div",{className:"economic-thinking-media",children:[s.jsx("img",{src:"/images/economic-thinking.jpg",alt:"Digital economic sustainability and business innovation concept"}),s.jsxs("div",{className:"economic-thinking-stat",children:[s.jsx("strong",{children:"Long-term value"}),s.jsx("span",{children:"companies + technologies + talents + investors"})]})]})]})}),s.jsx("section",{className:"technology-strategy","aria-labelledby":"technology-strategy-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"technology-strategy-head",children:[s.jsx("h2",{id:"technology-strategy-title",children:"Technology & Strategy"}),s.jsx("p",{children:"By combining digitalization, platform economy, artificial intelligence, and strategic networks, we enable more efficient work and faster innovation."})]}),s.jsxs("div",{className:"technology-system",children:[s.jsxs("div",{className:"technology-system-hub",children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-wand-magic-sparkles","aria-hidden":"true"})}),s.jsx("strong",{children:"Faster innovation"}),s.jsx("small",{children:"Technology, networks and resilience working as one operating system."})]}),s.jsxs("article",{className:"technology-system-node digitalization",children:[s.jsx("span",{className:"strategy-icon",children:s.jsx("i",{className:"fa-solid fa-microchip","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Digitalization"}),s.jsx("p",{children:"Optimization of processes through cutting-edge technologies."})]})]}),s.jsxs("article",{className:"technology-system-node networks",children:[s.jsx("span",{className:"strategy-icon",children:s.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Networks"}),s.jsx("p",{children:"Strategic connections for collective growth."})]})]}),s.jsxs("article",{className:"technology-system-node resilience",children:[s.jsx("span",{className:"strategy-icon",children:s.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Resilience"}),s.jsx("p",{children:"Stability even in times of global change."})]})]})]})]})}),s.jsx("section",{className:"future-proof","aria-labelledby":"future-proof-title",children:s.jsxs("div",{className:"wrap future-proof-grid",children:[s.jsxs("div",{className:"future-proof-copy",children:[s.jsx("h2",{id:"future-proof-title",children:"Future-Proof Systems"}),s.jsx("p",{children:"Economic sustainability for us means creating systems that remain stable even in times of uncertainty and global change. Companies should not only grow but continuously evolve and become resilient to change."}),s.jsxs("div",{className:"future-proof-statement",children:[s.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),s.jsx("span",{children:"EI.one stands for a new generation of economic systems - intelligent, connected, and sustainable."})]})]}),s.jsxs("div",{className:"future-proof-media",children:[s.jsx("img",{src:"/images/future-proof.jpeg",alt:"Future-proof connected system network"}),s.jsxs("div",{className:"future-proof-signals","aria-hidden":"true",children:[s.jsx("span",{children:"Stable"}),s.jsx("span",{children:"Connected"}),s.jsx("span",{children:"Sustainable"})]})]})]})}),s.jsx("section",{className:"economy-final-cta","aria-labelledby":"economy-final-title",children:s.jsx("div",{className:"wrap economy-final-grid",children:s.jsxs("div",{className:"economy-final-copy",children:[s.jsx("h2",{id:"economy-final-title",children:"Ready for the Economy of the Future?"}),s.jsx("p",{children:"Become part of an ecosystem that generates innovation and sustainable added value."}),s.jsxs("div",{className:"economy-final-actions",children:[s.jsx("a",{className:"button economy-final-primary",href:"/en/partner.php",children:"Become a Partner"}),s.jsx("a",{className:"button economy-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})})]}),s.jsx(_i,{})]})}function ps(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function bA(){return Tn.useEffect(()=>{const o="Environment - EI.one Ecological Sustainability",t="EI.one Environment combines innovation, renewable energies and measurable projects so environmental sustainability becomes an operational choice.";document.title=o,ps("description",t),ps("keywords","EI.one environment, ecological sustainability, renewable energies, measurable projects, sustainable innovation"),ps("og:title",o,"property"),ps("og:description",t,"property"),ps("og:url","https://ei.one/en/environment","property"),ps("twitter:title",o),ps("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/environment")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"environment.php"}),s.jsxs("main",{className:"environment-page",children:[s.jsx("section",{className:"environment-hero",children:s.jsxs("div",{className:"wrap environment-hero-grid",children:[s.jsxs("div",{className:"environment-hero-copy",children:[s.jsx("h1",{children:"Environment"}),s.jsx("p",{children:"Innovation and renewable energies with measurable projects. Environmental sustainability as an operational choice, not as a slogan."}),s.jsxs("div",{className:"environment-hero-actions",children:[s.jsx("a",{className:"button",href:"/en/projects.php",children:"Discover Projects"}),s.jsx("a",{className:"button secondary",href:"/en/contact.php",children:"Contact"})]})]}),s.jsxs("div",{className:"environment-hero-visual","aria-label":"Ecological sustainability system preview",children:[s.jsxs("div",{className:"environment-core",children:[s.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),s.jsx("strong",{children:"Operational sustainability"})]}),s.jsxs("div",{className:"environment-node energy",children:[s.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"}),s.jsx("span",{children:"Renewable energy"})]}),s.jsxs("div",{className:"environment-node projects",children:[s.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),s.jsx("span",{children:"Measurable projects"})]}),s.jsxs("div",{className:"environment-node impact",children:[s.jsx("i",{className:"fa-solid fa-chart-simple","aria-hidden":"true"}),s.jsx("span",{children:"Visible impact"})]})]})]})}),s.jsx("section",{className:"protect-environment","aria-labelledby":"protect-environment-title",children:s.jsxs("div",{className:"wrap protect-environment-grid",children:[s.jsxs("div",{className:"protect-environment-copy",children:[s.jsx("h2",{id:"protect-environment-title",children:"Protecting Our Environment"}),s.jsx("p",{children:"Protecting our environment is one of the central challenges of the 21st century. For us, ecological sustainability means using natural resources responsibly, using energy efficiently, and developing technologies that reduce the ecological footprint of our economy."}),s.jsx("p",{children:"At EI.one, we combine technological innovation with ecological awareness. Our approach is based on the conviction that sustainable solutions are not only necessary but also offer enormous opportunities for the economy, society, and innovation."}),s.jsxs("div",{className:"protect-environment-points",children:[s.jsx("span",{children:"Responsible resources"}),s.jsx("span",{children:"Efficient energy"}),s.jsx("span",{children:"Reduced footprint"})]})]}),s.jsxs("div",{className:"protect-environment-media",children:[s.jsx("img",{src:"/images/ecological-sustainability.jpg",alt:"Ecological sustainability tree with technology and people"}),s.jsxs("div",{className:"protect-environment-badge",children:[s.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),"Ecology meets innovation"]})]})]})}),s.jsx("section",{className:"sustainable-solutions","aria-labelledby":"sustainable-solutions-title",children:s.jsxs("div",{className:"wrap sustainable-solutions-grid",children:[s.jsxs("div",{className:"sustainable-solutions-intro",children:[s.jsx("h2",{id:"sustainable-solutions-title",children:"Sustainable Solutions"}),s.jsx("p",{children:"Through projects in the fields of renewable energy and energy efficiency, we support companies in making their processes more environmentally friendly."})]}),s.jsxs("div",{className:"sustainable-path",children:[s.jsxs("article",{children:[s.jsx("span",{className:"solution-icon",children:s.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Renewable Energies"}),s.jsx("p",{children:"Focus on climate-friendly energy systems."})]})]}),s.jsxs("article",{children:[s.jsx("span",{className:"solution-icon",children:s.jsx("i",{className:"fa-solid fa-building-shield","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Intelligent Infrastructure"}),s.jsx("p",{children:"Efficient and resource-saving buildings."})]})]}),s.jsxs("article",{children:[s.jsx("span",{className:"solution-icon",children:s.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Resource Preservation"}),s.jsx("p",{children:"Reducing the ecological footprint."})]})]})]})]})}),s.jsx("section",{className:"ecological-progress","aria-labelledby":"ecological-progress-title",children:s.jsxs("div",{className:"wrap ecological-progress-grid",children:[s.jsxs("div",{className:"ecological-progress-copy",children:[s.jsx("h2",{id:"ecological-progress-title",children:"Ecological Sustainability is Progress"}),s.jsx("p",{children:"For us, ecological sustainability does not mean renunciation, but progress. It stands for innovation, responsibility, and the possibility of combining economic development with the protection of our planet."}),s.jsx("p",{children:"El.one pursues the vision of a future where economy, technology, and environment are in balance -- an intelligent ecosystem that enables sustainable solutions."})]}),s.jsx("div",{className:"ecological-progress-visual",children:s.jsx("img",{src:"/images/circular-progress.png",alt:"Bright circular economy loop with renewable energy and recycled materials"})})]})}),s.jsx("section",{className:"environment-final-cta","aria-labelledby":"environment-final-title",children:s.jsxs("div",{className:"wrap environment-final-inner",children:[s.jsx("h2",{id:"environment-final-title",children:"Together for a Healthy Planet"}),s.jsx("p",{children:"Discover our projects for a climate-friendly economy."}),s.jsxs("div",{className:"environment-final-actions",children:[s.jsx("a",{className:"button environment-final-primary",href:"/en/projects.php",children:"Discover Projects"}),s.jsx("a",{className:"button environment-final-outline",href:"/en/contact.php",children:"Contact"})]})]})})]}),s.jsx(_i,{})]})}function ms(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function EA(){return Tn.useEffect(()=>{const o="Partners - EI.one",t="Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem built for sustainable growth.";document.title=o,ms("description",t),ms("keywords","EI.one partner, franchise partner, license partner, white label partner, ecosystem partnership"),ms("og:title",o,"property"),ms("og:description",t,"property"),ms("og:url","https://ei.one/en/partner","property"),ms("twitter:title",o),ms("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/partner")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"partner.php"}),s.jsxs("main",{className:"partner-page",children:[s.jsx("section",{className:"partner-hero",children:s.jsxs("div",{className:"wrap partner-hero-grid",children:[s.jsxs("div",{className:"partner-hero-copy",children:[s.jsx("h1",{children:"Partners"}),s.jsx("p",{children:"Building a sustainable future together. Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem."}),s.jsxs("div",{className:"partner-hero-actions",children:[s.jsx("a",{className:"button",href:"/en/contact.php",children:"Start a Partnership"}),s.jsx("a",{className:"button secondary",href:"/economy",children:"Explore Enterprise"})]})]}),s.jsxs("div",{className:"partner-hero-visual","aria-label":"EI.one partner ecosystem models",children:[s.jsxs("div",{className:"partner-core",children:[s.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),s.jsx("strong",{children:"Shared growth"})]}),s.jsx("div",{className:"partner-model franchise",children:s.jsx("strong",{children:"Franchise"})}),s.jsx("div",{className:"partner-model license",children:s.jsx("strong",{children:"License"})}),s.jsx("div",{className:"partner-model white-label",children:s.jsx("strong",{children:"White Label"})})]})]})}),s.jsx("section",{className:"partner-models","aria-labelledby":"partner-models-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"partner-models-head",children:[s.jsx("h2",{id:"partner-models-title",children:"Choose Your Model"}),s.jsx("p",{children:"Three ways to participate in the EI.one ecosystem, from full local leadership to modular activation and brand-integrated infrastructure."})]}),s.jsxs("div",{className:"partner-model-board",children:[s.jsxs("article",{className:"partner-option recommended",children:[s.jsx("span",{className:"partner-ribbon",children:"Recommended"}),s.jsx("div",{className:"partner-option-icon",children:s.jsx("i",{className:"fa-solid fa-building","aria-hidden":"true"})}),s.jsxs("div",{className:"partner-option-title",children:[s.jsx("h3",{children:"Franchise Partner"}),s.jsx("p",{children:"Build your Local Ecosystem"})]}),s.jsx("p",{children:"The Franchise Partner is the official EI.one representative in a territory. They manage and develop the local ecosystem, coordinating modules, partners, and clients."}),s.jsxs("div",{className:"partner-option-block",children:[s.jsx("h4",{children:"Who it's ideal for"}),s.jsxs("div",{className:"partner-tags",children:[s.jsx("span",{children:"Entrepreneurs"}),s.jsx("span",{children:"Regional Managers"}),s.jsx("span",{children:"Business Developers"}),s.jsx("span",{children:"Network Builders"})]})]}),s.jsxs("div",{className:"partner-option-block",children:[s.jsx("h4",{children:"What's included"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Exclusive territorial rights"}),s.jsx("li",{children:"Full EI.one brand"}),s.jsx("li",{children:"Access to all modules"}),s.jsx("li",{children:"Ongoing central support"}),s.jsx("li",{children:"Certified training"}),s.jsx("li",{children:"Governance system"})]})]}),s.jsx("a",{className:"button partner-option-button",href:"/en/contact.php",children:"Become a Franchise Partner"})]}),s.jsxs("article",{className:"partner-option",children:[s.jsx("div",{className:"partner-option-icon",children:s.jsx("i",{className:"fa-solid fa-file-signature","aria-hidden":"true"})}),s.jsxs("div",{className:"partner-option-title",children:[s.jsx("h3",{children:"License Partner"}),s.jsx("p",{children:"Activate a Module in the System"})]}),s.jsx("p",{children:"The License Partner uses one or more EI.one modules within their own company. They remain independent but operate according to ecosystem standards."}),s.jsxs("div",{className:"partner-option-block",children:[s.jsx("h4",{children:"Who it's ideal for"}),s.jsxs("div",{className:"partner-tags",children:[s.jsx("span",{children:"Existing companies"}),s.jsx("span",{children:"Consultants"}),s.jsx("span",{children:"Professional firms"}),s.jsx("span",{children:"Service providers"})]})]}),s.jsxs("div",{className:"partner-option-block",children:[s.jsx("h4",{children:"What's included"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Module usage license"}),s.jsx("li",{children:"Certified methodologies"}),s.jsx("li",{children:"Brand affiliation"}),s.jsx("li",{children:"Access to the network"}),s.jsx("li",{children:"Operational support"})]})]}),s.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Activate a License"})]}),s.jsxs("article",{className:"partner-option",children:[s.jsx("div",{className:"partner-option-icon",children:s.jsx("i",{className:"fa-solid fa-tag","aria-hidden":"true"})}),s.jsxs("div",{className:"partner-option-title",children:[s.jsx("h3",{children:"White Label Partner"}),s.jsx("p",{children:"Your Brand, Our Infrastructure"})]}),s.jsx("p",{children:'The White Label Partner uses EI.one technology, processes, and modules under their own brand. EI.one works "behind the scenes".'}),s.jsxs("div",{className:"partner-option-block",children:[s.jsx("h4",{children:"Who it's ideal for"}),s.jsxs("div",{className:"partner-tags",children:[s.jsx("span",{children:"Corporate"}),s.jsx("span",{children:"Large groups"}),s.jsx("span",{children:"International networks"}),s.jsx("span",{children:"Digital platforms"}),s.jsx("span",{children:"Industrial investors"})]})]}),s.jsxs("div",{className:"partner-option-block",children:[s.jsx("h4",{children:"What's included"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Customized system"}),s.jsx("li",{children:"Full infrastructure"}),s.jsx("li",{children:"Integrated modules"}),s.jsx("li",{children:"Strategic support"}),s.jsx("li",{children:"Global scalability"})]})]}),s.jsx("a",{className:"button partner-option-button outline",href:"/en/contact.php",children:"Request White Label"})]})]})]})}),s.jsx("section",{className:"partner-comparison","aria-labelledby":"partner-comparison-title",children:s.jsxs("div",{className:"wrap",children:[s.jsx("div",{className:"partner-comparison-head",children:s.jsx("h2",{id:"partner-comparison-title",children:"Model Comparison"})}),s.jsx("div",{className:"comparison-table-wrap",children:s.jsxs("table",{className:"comparison-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:"Feature"}),s.jsx("th",{scope:"col",children:"Franchise"}),s.jsx("th",{scope:"col",children:"License"}),s.jsx("th",{scope:"col",children:"White Label"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:"EI.one Brand"}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status yes",children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status partial",children:[s.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Partial"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status no",children:[s.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:"Territorial Rights"}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status yes",children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Exclusive"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status no",children:[s.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status no",children:[s.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}),"No"]})})]}),s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:"Operational Autonomy"}),s.jsx("td",{children:"Medium"}),s.jsx("td",{children:"High"}),s.jsx("td",{children:"Maximum"})]}),s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:"Module Access"}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status yes",children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status partial",children:[s.jsx("i",{className:"fa-solid fa-circle-half-stroke","aria-hidden":"true"}),"Selected"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status yes",children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"All"]})})]}),s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:"Scalability"}),s.jsx("td",{children:"Very High"}),s.jsx("td",{children:"Medium"}),s.jsx("td",{children:"Maximum"})]}),s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:"Central Support"}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status yes",children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Complete"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status yes",children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Operational"]})}),s.jsx("td",{children:s.jsxs("span",{className:"comparison-status yes",children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Strategic"]})})]})]})]})})]})}),s.jsx("section",{className:"partner-benefits","aria-labelledby":"partner-benefits-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"partner-benefits-head",children:[s.jsx("h2",{id:"partner-benefits-title",children:"Why Become an EI.one Partner"}),s.jsx("p",{children:"By joining the EI Generation, you gain access to an already structured, tested, and sustainable growth-oriented ecosystem."})]}),s.jsxs("div",{className:"partner-benefit-map",children:[s.jsxs("div",{className:"partner-benefit-core",children:[s.jsx("span",{children:"You are not just a partner."}),s.jsx("strong",{children:"You are a co-builder of the system."})]}),s.jsxs("article",{className:"partner-benefit-item",children:[s.jsx("span",{className:"partner-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-cubes","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Structured Ecosystem"}),s.jsx("p",{children:"Proven and functioning model"})]})]}),s.jsxs("article",{className:"partner-benefit-item",children:[s.jsx("span",{className:"partner-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-headset","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Continuous Support"}),s.jsx("p",{children:"Dedicated assistance always available"})]})]}),s.jsxs("article",{className:"partner-benefit-item",children:[s.jsx("span",{className:"partner-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Access to Projects"}),s.jsx("p",{children:"Real opportunities from the ecosystem"})]})]}),s.jsxs("article",{className:"partner-benefit-item",children:[s.jsx("span",{className:"partner-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-globe","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Ecosystem Network"}),s.jsx("p",{children:"Connections with all the Business Units of the ecosystem"})]})]}),s.jsxs("article",{className:"partner-benefit-item",children:[s.jsx("span",{className:"partner-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"ESG & Impact Focus"}),s.jsx("p",{children:"Sustainability as a strategy"})]})]}),s.jsxs("article",{className:"partner-benefit-item",children:[s.jsx("span",{className:"partner-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-rocket","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Sustainable Growth"}),s.jsx("p",{children:"Controlled scalability"})]})]})]})]})}),s.jsx("section",{className:"partner-approach","aria-labelledby":"partner-approach-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"partner-approach-panel",children:[s.jsx("img",{src:"/images/our-approach.jpg",alt:"Business partners working together in a bright office"}),s.jsxs("div",{className:"partner-approach-copy",children:[s.jsx("h2",{id:"partner-approach-title",children:"Our Approach"}),s.jsx("p",{children:"At EI.one, we believe in concrete values that guide every partnership. We are not looking for simple affiliates. We are looking for ecosystem leaders."})]})]}),s.jsxs("div",{className:"approach-values",children:[s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-eye","aria-hidden":"true"}),s.jsx("span",{children:"Transparency"})]}),s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),s.jsx("span",{children:"Collaboration"})]}),s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-trophy","aria-hidden":"true"}),s.jsx("span",{children:"Meritocracy"})]}),s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"}),s.jsx("span",{children:"Responsibility"})]}),s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-heart","aria-hidden":"true"}),s.jsx("span",{children:"Trust"})]})]})]})}),s.jsx("section",{className:"partner-final-cta","aria-labelledby":"partner-final-title",children:s.jsxs("div",{className:"wrap partner-final-inner",children:[s.jsx("p",{className:"partner-final-kicker",children:"Join the EI Generation"}),s.jsx("h2",{id:"partner-final-title",children:"Are you ready to be part of the EI Generation?"}),s.jsx("p",{children:"Discover the model that suits you best and start your journey."}),s.jsxs("div",{className:"partner-final-actions",children:[s.jsx("a",{className:"button partner-final-primary",href:"/en/contact.php",children:"Become a Franchise Partner"}),s.jsx("a",{className:"button",href:"/en/contact.php",children:"Activate a License"}),s.jsx("a",{className:"button partner-final-outline",href:"/en/contact.php",children:"Request White Label"})]})]})})]}),s.jsx(_i,{})]})}function gs(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function TA(){return Tn.useEffect(()=>{const o="For Investors - EI.one",t="EI.one gives investors access to a functioning, scalable ecosystem built around education, experience, economy, and environment.";document.title=o,gs("description",t),gs("keywords","EI.one investors, ecosystem investment, sustainable growth, scalable ecosystem, impact investment"),gs("og:title",o,"property"),gs("og:description",t,"property"),gs("og:url","https://ei.one/en/investor","property"),gs("twitter:title",o),gs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/investor")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"investor.php"}),s.jsxs("main",{className:"investor-page",children:[s.jsx("section",{className:"investor-hero",children:s.jsxs("div",{className:"wrap investor-hero-grid",children:[s.jsxs("div",{className:"investor-hero-copy",children:[s.jsx("h1",{children:"Investing in an Ecosystem"}),s.jsx("p",{children:"EI.one is not a single company idea. It is a functioning scalable system built around education, experience, economy, and environment."}),s.jsxs("div",{className:"investor-hero-actions",children:[s.jsx("a",{className:"button",href:"/en/contact.php",children:"Talk to us"}),s.jsx("a",{className:"button secondary",href:"/economy",children:"Explore the Ecosystem"})]})]}),s.jsxs("div",{className:"investor-hero-visual","aria-label":"Investor ecosystem growth model",children:[s.jsxs("div",{className:"investor-growth-card main",children:[s.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),s.jsx("strong",{children:"Scalable growth"}),s.jsx("span",{children:"One ecosystem, multiple value paths"})]}),s.jsxs("div",{className:"investor-signal education",children:[s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),s.jsx("span",{children:"Education"})]}),s.jsxs("div",{className:"investor-signal experience",children:[s.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),s.jsx("span",{children:"Experience"})]}),s.jsxs("div",{className:"investor-signal economy",children:[s.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),s.jsx("span",{children:"Economy"})]}),s.jsxs("div",{className:"investor-signal environment",children:[s.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),s.jsx("span",{children:"Environment"})]})]})]})}),s.jsx("section",{className:"investor-relevance","aria-labelledby":"investor-relevance-title",children:s.jsxs("div",{className:"wrap investor-relevance-grid",children:[s.jsxs("div",{className:"investor-relevance-copy",children:[s.jsx("h2",{id:"investor-relevance-title",children:"Why EI.ONE is relevant"}),s.jsx("p",{children:"Investors invest not only in visions, but in a robust and resilient system offering security and growth."})]}),s.jsxs("div",{className:"investor-proof-system",children:[s.jsxs("div",{className:"investor-proof-core",children:[s.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),s.jsx("strong",{children:"Security + growth"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),s.jsx("span",{children:"Real, operational companies"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-arrows-rotate","aria-hidden":"true"}),s.jsx("span",{children:"Recurring business models"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"}),s.jsx("span",{children:"Ecosystem synergies"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-earth-europe","aria-hidden":"true"}),s.jsx("span",{children:"Regional diversification"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-arrow-trend-up","aria-hidden":"true"}),s.jsx("span",{children:"Digital scalability"})]})]})]})}),s.jsx("section",{className:"investment-security","aria-labelledby":"investment-security-title",children:s.jsxs("div",{className:"wrap",children:[s.jsx("div",{className:"investment-security-head",children:s.jsx("h2",{id:"investment-security-title",children:"Investment Security"})}),s.jsxs("div",{className:"security-system",children:[s.jsxs("article",{children:[s.jsx("span",{className:"security-icon",children:s.jsx("i",{className:"fa-solid fa-users","aria-hidden":"true"})}),s.jsx("h3",{children:"Real Customers"}),s.jsx("p",{children:"Functioning customer acquisition directly from the ecosystem itself."})]}),s.jsxs("article",{children:[s.jsx("span",{className:"security-icon",children:s.jsx("i",{className:"fa-solid fa-user-graduate","aria-hidden":"true"})}),s.jsx("h3",{children:"Valuable Talent"}),s.jsx("p",{children:"Identified and developed talents increase productivity and company value."})]}),s.jsxs("article",{children:[s.jsx("span",{className:"security-icon",children:s.jsx("i",{className:"fa-solid fa-shield-halved","aria-hidden":"true"})}),s.jsx("h3",{children:"Diversification"}),s.jsx("p",{children:"Risk is distributed across different companies, industries, and regions."})]})]})]})}),s.jsx("section",{className:"investor-expect","aria-labelledby":"investor-expect-title",children:s.jsxs("div",{className:"wrap investor-expect-layout",children:[s.jsxs("div",{className:"investor-expect-head",children:[s.jsx("h2",{id:"investor-expect-title",children:"What to Expect"}),s.jsx("p",{children:"A clearer investment frame: tangible structures, defined roles, and impact logic that can scale over time."})]}),s.jsxs("div",{className:"expectation-strip",children:[s.jsxs("article",{children:[s.jsx("span",{className:"expectation-step",children:"01"}),s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-building-columns","aria-hidden":"true"}),s.jsx("h3",{children:"Real Structures"})]}),s.jsx("p",{children:"Access to tangible, operational structures"})]}),s.jsxs("article",{children:[s.jsx("span",{className:"expectation-step",children:"02"}),s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-sitemap","aria-hidden":"true"}),s.jsx("h3",{children:"Clear Roles"})]}),s.jsx("p",{children:"Clear separation between Holding, Ecosystem & Units"})]}),s.jsxs("article",{children:[s.jsx("span",{className:"expectation-step",children:"03"}),s.jsxs("div",{children:[s.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),s.jsx("h3",{children:"Impact"})]}),s.jsx("p",{children:"A long-term growth logic focusing on sustainability"})]})]})]})}),s.jsx("section",{className:"capital-structure","aria-labelledby":"capital-structure-title",children:s.jsxs("div",{className:"wrap capital-structure-grid",children:[s.jsxs("div",{className:"capital-structure-copy",children:[s.jsx("h2",{id:"capital-structure-title",children:"Capital Meets Structure"}),s.jsx("p",{children:"EI.ONE creates an environment where capital is used efficiently, growth is controlled and scaled, and risks are structurally reduced."}),s.jsxs("div",{className:"capital-highlight",children:[s.jsx("h3",{children:"Calculable Future"}),s.jsx("p",{children:"Companies grow together. Talents unleash potential. Capital has a lasting impact."})]}),s.jsx("a",{className:"button",href:"/en/contact.php",children:"Talk to Us"})]}),s.jsxs("div",{className:"capital-flow","aria-label":"Capital flow from structure to impact",children:[s.jsxs("div",{className:"capital-node source",children:[s.jsx("i",{className:"fa-solid fa-coins","aria-hidden":"true"}),s.jsx("span",{children:"Capital"})]}),s.jsxs("div",{className:"capital-node system",children:[s.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),s.jsx("span",{children:"Structure"})]}),s.jsxs("div",{className:"capital-node growth",children:[s.jsx("i",{className:"fa-solid fa-arrow-trend-up","aria-hidden":"true"}),s.jsx("span",{children:"Growth"})]}),s.jsxs("div",{className:"capital-node impact",children:[s.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),s.jsx("span",{children:"Impact"})]})]})]})})]}),s.jsx(_i,{})]})}function xs(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function AA(){return Tn.useEffect(()=>{const o="Entrepreneur - EI.one",t="EI.one Entrepreneur is for people who want to build, activate, and grow inside a structured ecosystem.";document.title=o,xs("description",t),xs("keywords","EI.one entrepreneur, ecosystem entrepreneur, business builder, sustainable growth, EI generation"),xs("og:title",o,"property"),xs("og:description",t,"property"),xs("og:url","https://ei.one/en/entrepreneur","property"),xs("twitter:title",o),xs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/entrepreneur")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"entrepreneur.php"}),s.jsxs("main",{className:"entrepreneur-page",children:[s.jsx("section",{className:"entrepreneur-hero",children:s.jsxs("div",{className:"wrap entrepreneur-hero-grid",children:[s.jsxs("div",{className:"entrepreneur-hero-copy",children:[s.jsx("p",{className:"entrepreneur-kicker",children:"Entrepreneur Program"}),s.jsx("h1",{children:"Join the EI.ONE Intelligent Ecosystem"}),s.jsx("p",{children:"Join an ecosystem that values cooperation over competition. Let's grow together through real connections."}),s.jsx("div",{className:"entrepreneur-hero-actions",children:s.jsx("a",{className:"button",href:"/en/contact.php",children:"Join the Ecosystem"})})]}),s.jsxs("div",{className:"entrepreneur-hero-visual","aria-label":"Entrepreneur ecosystem path",children:[s.jsxs("div",{className:"entrepreneur-core",children:[s.jsx("i",{className:"fa-solid fa-lightbulb","aria-hidden":"true"}),s.jsx("strong",{children:"Build together"})]}),s.jsxs("div",{className:"entrepreneur-node cooperate",children:[s.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"}),s.jsx("span",{children:"Cooperation"})]}),s.jsxs("div",{className:"entrepreneur-node connect",children:[s.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),s.jsx("span",{children:"Connections"})]}),s.jsxs("div",{className:"entrepreneur-node grow",children:[s.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),s.jsx("span",{children:"Growth"})]})]})]})}),s.jsx("section",{className:"entrepreneur-why",children:s.jsxs("div",{className:"wrap entrepreneur-why-grid",children:[s.jsxs("div",{className:"entrepreneur-why-intro",children:[s.jsx("h2",{children:"Why Join Us?"}),s.jsx("p",{children:"The benefits of being part of an integrated and high-performance ecosystem."}),s.jsxs("div",{className:"entrepreneur-why-note",children:[s.jsx("strong",{children:"Integrated growth"}),s.jsx("span",{children:"Clients, projects, talents and visibility move through one connected ecosystem."})]})]}),s.jsxs("div",{className:"entrepreneur-benefit-rail",children:[s.jsxs("article",{className:"entrepreneur-benefit",children:[s.jsx("span",{className:"entrepreneur-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-users-viewfinder","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Client Acquisition"}),s.jsx("p",{children:"Direct access to new potential clients and qualified referrals from the network. Marketing becomes organic."})]})]}),s.jsxs("article",{className:"entrepreneur-benefit",children:[s.jsx("span",{className:"entrepreneur-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-rocket","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Co-Creation & Projects"}),s.jsx("p",{children:"Develop joint projects with complementary companies. Innovation comes from collaboration."})]})]}),s.jsxs("article",{className:"entrepreneur-benefit",children:[s.jsx("span",{className:"entrepreneur-benefit-icon",children:s.jsx("i",{className:"fa-solid fa-user-tie","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Talents & Visibility"}),s.jsx("p",{children:"Access top talents trained by our Academy and increase your brand visibility."})]})]})]})]})}),s.jsx("section",{className:"entrepreneur-cooperation",children:s.jsxs("div",{className:"wrap entrepreneur-cooperation-wrap",children:[s.jsx("div",{className:"entrepreneur-cooperation-media",children:s.jsx("img",{src:"/images/our-approach.jpg",alt:"Entrepreneurs cooperating in a meeting"})}),s.jsxs("div",{className:"entrepreneur-cooperation-panel",children:[s.jsx("span",{className:"entrepreneur-cooperation-label",children:"Cooperation model"}),s.jsx("h2",{children:"Real Cooperation"}),s.jsx("strong",{children:"EI.ONE thrives on complementary entrepreneurs."}),s.jsx("p",{children:"In a saturated market, partnership is the key to differentiation. We offer not just a platform, but an environment of trust where businesses support each other."}),s.jsxs("div",{className:"entrepreneur-cooperation-list",children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Know-How Exchange"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Exclusive Networking Events"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Strategic Support"]})]})]})]})}),s.jsx("section",{className:"entrepreneur-looking",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"entrepreneur-looking-head",children:[s.jsx("h2",{children:"Who we are looking for"}),s.jsx("p",{children:"The entrepreneur program is ideal for:"})]}),s.jsxs("div",{className:"entrepreneur-looking-board",children:[s.jsxs("article",{className:"entrepreneur-fit",children:[s.jsx("i",{className:"fa-solid fa-building","aria-hidden":"true"}),s.jsx("h3",{children:"Experienced Firms"}),s.jsx("p",{children:"Companies with clear expertise and history."})]}),s.jsxs("article",{className:"entrepreneur-fit",children:[s.jsx("i",{className:"fa-solid fa-laptop-code","aria-hidden":"true"}),s.jsx("h3",{children:"Solution Providers"}),s.jsx("p",{children:"Providers of digital and technology services."})]}),s.jsxs("article",{className:"entrepreneur-fit",children:[s.jsx("i",{className:"fa-solid fa-school","aria-hidden":"true"}),s.jsx("h3",{children:"Education"}),s.jsx("p",{children:"Educational institutions and talent-focused organizations."})]}),s.jsxs("article",{className:"entrepreneur-fit",children:[s.jsx("i",{className:"fa-solid fa-hand-holding-dollar","aria-hidden":"true"}),s.jsx("h3",{children:"For Investors"}),s.jsx("p",{children:"Those looking for investments with real impact."})]})]}),s.jsxs("div",{className:"entrepreneur-together",children:[s.jsx("div",{className:"entrepreneur-together-mark",children:s.jsx("i",{className:"fa-solid fa-quote-left","aria-hidden":"true"})}),s.jsx("blockquote",{children:"Entrepreneurship means growing together."}),s.jsx("p",{children:"Join the companies of the ecosystem that are changing the way of doing business: together, not alone."})]})]})}),s.jsx("section",{className:"entrepreneur-request",children:s.jsxs("div",{className:"wrap entrepreneur-request-grid",children:[s.jsxs("div",{className:"entrepreneur-request-copy",children:[s.jsx("span",{className:"entrepreneur-request-kicker",children:"Start the conversation"}),s.jsx("h2",{children:"Request Information"}),s.jsx("p",{children:"Fill out the form to speak with our Partnership team."}),s.jsxs("div",{className:"entrepreneur-request-points",children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"})," Fast partnership review"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"})," Clear request routing"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"})," Direct EI.ONE contact"]})]})]}),s.jsxs("form",{className:"entrepreneur-request-form",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Company Name / Contact"}),s.jsx("input",{type:"text",name:"company",placeholder:"Company Name / Contact"})]}),s.jsxs("label",{children:[s.jsx("span",{children:"Business Email"}),s.jsx("input",{type:"email",name:"email",placeholder:"Business Email"})]}),s.jsxs("label",{children:[s.jsx("span",{children:"Request Type"}),s.jsxs("select",{name:"requestType",defaultValue:"",children:[s.jsx("option",{value:"",disabled:!0,children:"Request Type"}),s.jsx("option",{children:"Entrepreneur Request"}),s.jsx("option",{children:"General Information"}),s.jsx("option",{children:"Collaboration Proposal"})]})]}),s.jsxs("label",{children:[s.jsx("span",{children:"Tell us about your company"}),s.jsx("textarea",{name:"message",rows:"5",placeholder:"Tell us about your company..."})]}),s.jsx("button",{type:"submit",children:"Send Request"})]})]})})]}),s.jsx(_i,{})]})}function vs(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function NA(){return Tn.useEffect(()=>{const o="About Us - EI.one",t="EI.one transforms companies into engines of learning, innovation and growth inside an intelligent ecosystem.";document.title=o,vs("description",t),vs("keywords","EI.one about us, ecosystem intelligence, learning, innovation, growth, ESG impact"),vs("og:title",o,"property"),vs("og:description",t,"property"),vs("og:url","https://ei.one/en/about-us","property"),vs("twitter:title",o),vs("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/about-us")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"about-us.php"}),s.jsxs("main",{className:"about-page",children:[s.jsx("section",{className:"about-hero",children:s.jsxs("div",{className:"wrap about-hero-grid",children:[s.jsxs("div",{className:"about-hero-copy",children:[s.jsxs("div",{className:"about-identity-pill","aria-label":"Ecosystem Intelligence",children:[s.jsx("span",{children:"E"}),s.jsx("strong",{children:"cosystem"}),s.jsx("span",{children:"I"}),s.jsx("strong",{children:"ntelligence"})]}),s.jsx("h1",{children:"About Us"}),s.jsx("p",{children:"ei.one isn't built to teach people or just to connect them. It exists to transform companies into engines of learning, innovation and growth. Every company that joins the ecosystem creates new commercial relationships, attracts talent, develops skills, increases its visibility, and generates measurable ESG impact."}),s.jsx("p",{className:"about-hero-statement",children:"The company is no longer just a workplace: it becomes a hub of value for society."})]}),s.jsx("div",{className:"about-hero-panel","aria-label":"EI.one ecosystem outcomes",children:s.jsxs("div",{className:"about-orbit",children:[s.jsxs("div",{className:"about-orbit-core",children:[s.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),s.jsx("strong",{children:"ei.one"})]}),s.jsxs("span",{className:"about-orbit-node learning",children:[s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),"Learning"]}),s.jsxs("span",{className:"about-orbit-node growth",children:[s.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"}),"Growth"]}),s.jsxs("span",{className:"about-orbit-node impact",children:[s.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),"Impact"]})]})})]})}),s.jsx("section",{className:"about-founder",children:s.jsx("div",{className:"wrap about-founder-wrap",children:s.jsxs("div",{className:"about-founder-card",children:[s.jsx("div",{className:"about-founder-photo",children:s.jsx("img",{src:"/images/fabio-russo.jpg",alt:"Fabio Russo"})}),s.jsxs("div",{className:"about-founder-copy",children:[s.jsx("div",{className:"about-founder-badge",children:"The Founder"}),s.jsx("h2",{children:"Fabio Russo"}),s.jsx("p",{className:"about-founder-role",children:"CEO & Founder"}),s.jsx("p",{children:"Entrepreneur and ecosystem builder. For over 15 years he's been developing projects that combine sustainability, technology, human network and ethical growth."}),s.jsxs("p",{children:["He gave life to the ",s.jsx("strong",{children:"EI Generation"})," as a concrete response to the challenges of our time. EI.one is the result of this journey."]}),s.jsxs("div",{className:"about-founder-signals","aria-label":"Founder focus areas",children:[s.jsx("span",{children:"Sustainability"}),s.jsx("span",{children:"Technology"}),s.jsx("span",{children:"Human network"}),s.jsx("span",{children:"Ethical growth"})]})]})]})})}),s.jsx("section",{className:"about-generation",children:s.jsxs("div",{className:"wrap about-generation-grid",children:[s.jsxs("div",{className:"about-generation-copy",children:[s.jsx("span",{className:"about-generation-kicker",children:"The EI Generation"}),s.jsx("h2",{children:"The EI Generation"}),s.jsx("h3",{children:"We Are the EI Generation"}),s.jsx("p",{children:"The EI Generation consists of entrepreneurs, professionals, innovators, and talents who believe in a new development model."})]}),s.jsxs("div",{className:"about-generation-manifesto",children:[s.jsx("p",{className:"about-generation-label",children:"A model where:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Business serves people"]}),s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Innovation has a positive impact"]}),s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Growth is shared"]}),s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})," Sustainability is strategic"]})]}),s.jsxs("div",{className:"about-generation-closing",children:[s.jsx("strong",{children:"We are not spectators of change."}),s.jsx("strong",{children:"We are the architects of change."}),s.jsx("span",{children:"EI.one is the home of the EI Generation."})]})]})]})}),s.jsx("section",{className:"about-four-es",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"about-four-head",children:[s.jsx("h2",{children:"The four E's"}),s.jsx("p",{children:"ei.one holds four dimensions together. They are distinct but work as a single system."})]}),s.jsxs("div",{className:"about-four-system",children:[s.jsxs("div",{className:"about-four-core",children:[s.jsx("strong",{children:"EI.ONE"}),s.jsx("span",{children:"system"})]}),s.jsxs("article",{className:"about-e-node experience",children:[s.jsx("i",{className:"fa-solid fa-passport","aria-hidden":"true"}),s.jsx("h3",{children:"Experience"}),s.jsx("p",{children:"Real and verified professional experiences — the heart of the Identity."})]}),s.jsxs("article",{className:"about-e-node education",children:[s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),s.jsx("h3",{children:"Education"}),s.jsx("p",{children:"Continuous learning inside the companies of the ecosystem."})]}),s.jsxs("article",{className:"about-e-node economy",children:[s.jsx("i",{className:"fa-solid fa-briefcase","aria-hidden":"true"}),s.jsx("h3",{children:"Economy"}),s.jsx("p",{children:"Economic growth built on synergy, not internal competition."})]}),s.jsxs("article",{className:"about-e-node environment",children:[s.jsx("i",{className:"fa-solid fa-leaf","aria-hidden":"true"}),s.jsx("h3",{children:"Environment"}),s.jsx("p",{children:"Environmental sustainability with measurable and traceable projects."})]})]})]})}),s.jsx("section",{className:"about-problems",children:s.jsxs("div",{className:"wrap about-problems-grid",children:[s.jsxs("div",{className:"about-problems-copy",children:[s.jsx("h2",{children:"Answers to Global Problems"}),s.jsx("p",{children:"The EI Generation was born to address the real-world challenges and turn them into sustainable opportunities."}),s.jsxs("div",{className:"about-problem-list",children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-chart-line","aria-hidden":"true"})," Economic crises"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-people-arrows","aria-hidden":"true"})," Social inequalities"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-temperature-half","aria-hidden":"true"})," Climate change"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-microchip","aria-hidden":"true"})," Digital transformation"]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa-solid fa-handshake-slash","aria-hidden":"true"})," Loss of trust in traditional systems"]})]})]}),s.jsxs("div",{className:"about-problems-visual",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82",alt:"Bright office desk with analytics screen"}),s.jsxs("div",{className:"about-problems-card",children:[s.jsx("strong",{children:"We are not spectators of change"}),s.jsx("p",{children:"We are the designers of change. EI.one is the home of the EI Generation."})]})]})]})}),s.jsx("section",{className:"about-vision",children:s.jsxs("div",{className:"wrap about-vision-grid",children:[s.jsxs("div",{className:"about-vision-statement",children:[s.jsx("h2",{children:"Our Vision"}),s.jsx("p",{children:"We believe the future belongs to ecosystems that can unite business and values, technology and humanity, growth and responsibility, profit and positive impact."}),s.jsx("strong",{children:"We follow no trends. We build structures that last."})]}),s.jsxs("div",{className:"about-vision-principles",children:[s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),s.jsx("h3",{children:"Uniting Business and Values"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-robot","aria-hidden":"true"}),s.jsx("h3",{children:"Technology and Humanity"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-arrow-up-right-dots","aria-hidden":"true"}),s.jsx("h3",{children:"Growth and Responsibility"})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-scale-balanced","aria-hidden":"true"}),s.jsx("h3",{children:"Profit and Impact"})]})]})]})}),s.jsx("section",{className:"about-origin",children:s.jsxs("div",{className:"wrap about-origin-grid",children:[s.jsxs("div",{className:"about-origin-copy",children:[s.jsx("span",{className:"about-origin-kicker",children:"Built from practice"}),s.jsx("h2",{children:"Where ei.one comes from"}),s.jsx("p",{children:"ei.one was born from the concrete entrepreneurial experience of the founder and partners in the sectors that today make up the ecosystem: renewable energy, business development, digital & marketing, IT & AI, real estate. We're not theory. We're practice and structure."})]}),s.jsxs("div",{className:"about-origin-flow",children:[s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-solar-panel","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Renewable Energy"}),s.jsx("p",{children:"Energy transition and green solutions"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-laptop-code","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Digital & Marketing"}),s.jsx("p",{children:"Technological innovation and visibility"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Network & Franchising"}),s.jsx("p",{children:"Scalable expansion and partnerships"})]})]})]})]})}),s.jsx("section",{className:"about-commitment",children:s.jsxs("div",{className:"wrap about-commitment-grid",children:[s.jsxs("div",{className:"about-commitment-copy",children:[s.jsx("h2",{children:"Our Commitment"}),s.jsx("p",{children:"As the EI Generation, we commit every day to a better future."}),s.jsx("strong",{children:"We don't promise shortcuts. We build the future."})]}),s.jsxs("div",{className:"about-commitment-list",children:[s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Create real value"]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Empower people"]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Build trust"]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Protect the environment"]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"}),"Innovate responsibly"]})]})]})}),s.jsx("section",{className:"about-platform",children:s.jsx("div",{className:"wrap",children:s.jsxs("div",{className:"about-platform-layout",children:[s.jsxs("div",{className:"about-platform-statement",children:[s.jsx("span",{children:"Beyond the platform"}),s.jsx("h2",{children:"EI.one - More Than a Platform"}),s.jsx("p",{children:"EI.one is not just a project. It is much more."}),s.jsx("strong",{children:"For a smarter and more sustainable economy."})]}),s.jsxs("div",{className:"about-platform-list","aria-label":"What EI.one is",children:[s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-diagram-project","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Ecosystem"}),s.jsx("p",{children:"Integrated system of Business Units"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-people-group","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Movement"}),s.jsx("p",{children:"A new entrepreneurial culture"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-share-nodes","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Network"}),s.jsx("p",{children:"Real and strategic connections"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-server","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Operating System"}),s.jsx("p",{children:"Infrastructure for business"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-copy","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Replicable Model"}),s.jsx("p",{children:"International scalability"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Sustainability"}),s.jsx("p",{children:"ESG at the heart of everything"})]})]})]})]})})}),s.jsx("section",{className:"about-milestones",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"about-milestones-head",children:[s.jsx("h2",{children:"Milestones"}),s.jsx("p",{children:"Recognitions that demonstrate our concrete dedication to professional inclusion and social sustainability."})]}),s.jsxs("div",{className:"about-milestone-feature",children:[s.jsxs("div",{className:"about-milestone-copy",children:[s.jsx("span",{children:"This-Priis - SVA Zürich"}),s.jsx("p",{children:"Three-time nominees at the This-Priis - the award founded by Matthias Widmer of SVA Zürich in 2006 to recognize companies that promote inclusion and professional integration of people with limitations."}),s.jsx("p",{children:"For us it's not a trophy; it's confirmation that the way we build teams works, and it scales to the entire ecosystem."}),s.jsx("a",{href:"https://svazurich.ch/",target:"_blank",rel:"noreferrer",children:"Discover the award"})]}),s.jsx("a",{className:"about-milestone-logo",href:"https://svazurich.ch/",target:"_blank",rel:"noreferrer","aria-label":"Visit SVA Zürich",children:s.jsx("img",{src:"/images/sva-zuerich.png",alt:"SVA Zürich"})})]})]})}),s.jsx("section",{className:"about-commitments-social",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"about-commitments-head",children:[s.jsx("h2",{children:"Our commitments"}),s.jsx("p",{children:"We believe businesses have a responsibility to contribute to a better world."})]}),s.jsxs("div",{className:"about-milestone-feature reverse",children:[s.jsx("a",{className:"about-milestone-logo",href:"https://stiftung-togo.ch/",target:"_blank",rel:"noreferrer","aria-label":"Visit Stiftung ToGo",children:s.jsx("img",{src:"/images/togo-opening-eyes.png",alt:"ToGo opening eyes"})}),s.jsxs("div",{className:"about-milestone-copy",children:[s.jsx("span",{children:"Stiftung ToGo - Opening Eyes"}),s.jsx("p",{children:"We support the Swiss foundation Stiftung ToGo, which organizes free cataract operations in Togo. To date, the foundation has helped over 1,000 people recover their sight."}),s.jsx("p",{children:`It's a concrete example of what we mean by "real value": a measurable, verifiable action that changes individual lives.`}),s.jsx("a",{href:"https://stiftung-togo.ch/",target:"_blank",rel:"noreferrer",children:"Discover the foundation"})]})]})]})}),s.jsx("section",{className:"about-final-cta",children:s.jsx("div",{className:"wrap",children:s.jsxs("div",{className:"about-final-cta-box",children:[s.jsx("h2",{children:"Ready to enter?"}),s.jsx("p",{children:"Choose the right door for you: the business ecosystem, or the talent platform."}),s.jsxs("div",{className:"about-final-actions",children:[s.jsx("a",{href:"/business-club",children:"For Businesses"}),s.jsx("a",{href:"/talent",children:"For Talents"}),s.jsx("a",{href:"/contact",children:"Contact us"})]})]})})})]}),s.jsx(_i,{})]})}function wA(){return s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"contact"}),s.jsxs("main",{children:[s.jsx("section",{className:"contact-hero",children:s.jsxs("div",{className:"wrap contact-hero-grid",children:[s.jsxs("div",{className:"contact-hero-copy",children:[s.jsx("p",{className:"contact-kicker",children:"Contact"}),s.jsx("h1",{children:"Get in Touch"}),s.jsx("p",{children:"Do you have questions about our ecosystem, modules, or partnership opportunities? Our team is ready to support you on your path to sustainability."}),s.jsxs("div",{className:"contact-hero-actions",children:[s.jsx("a",{className:"button",href:"#contact-form-section",children:"Write to us"}),s.jsx("a",{className:"button secondary",href:"/partner",children:"Partnerships"})]})]}),s.jsxs("div",{className:"contact-hero-panel contact-info-list","aria-label":"Contact information",children:[s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-map-location-dot","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Headquarters"}),s.jsx("p",{children:"Tödistrasse 56, 8810 Horgen, Switzerland"})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-envelope-open-text","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Email & Phone"}),s.jsxs("p",{children:[s.jsx("a",{href:"mailto:info@ei.one",children:"info@ei.one"})," ",s.jsx("span",{children:"|"})," ",s.jsx("a",{href:"tel:+41448229000",children:"+41 44 822 90 00"})]})]})]}),s.jsxs("article",{children:[s.jsx("i",{className:"fa-solid fa-clock","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Hours"}),s.jsxs("p",{children:["Monday-Friday: 08:00-12:00 ",s.jsx("span",{children:"|"})," 13:00-17:00"]})]})]})]})]})}),s.jsx("section",{id:"contact-form-section",className:"contact-connect",children:s.jsxs("div",{className:"wrap contact-form-wrap",children:[s.jsxs("div",{className:"contact-connect-copy",children:[s.jsx("h2",{children:"We Are Here for You"}),s.jsx("p",{children:"Fill out the form below to request information or contact us directly at our headquarters to explore EI Generation opportunities."})]}),s.jsxs("form",{id:"contact-form",className:"contact-form-panel","aria-label":"Contact form",children:[s.jsx("label",{htmlFor:"contact-name",children:"Name"}),s.jsx("input",{id:"contact-name",type:"text",placeholder:"Name"}),s.jsx("label",{htmlFor:"contact-email",children:"Email"}),s.jsx("input",{id:"contact-email",type:"email",placeholder:"Email"}),s.jsx("label",{htmlFor:"contact-subject",children:"Subject"}),s.jsx("input",{id:"contact-subject",type:"text",placeholder:"Subject"}),s.jsx("label",{htmlFor:"contact-message",children:"Message"}),s.jsx("textarea",{id:"contact-message",placeholder:"Message",rows:"6"}),s.jsx("button",{className:"button",type:"submit",children:"Send Message"})]})]})})]}),s.jsx(_i,{})]})}function _s(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function RA(){return Tn.useEffect(()=>{const o="For Talents - EI.one",t="EI.one helps talents grow inside ecosystem companies through verified Experience Identity, Academy learning paths and Recruitment.";document.title=o,_s("description",t),_s("keywords","EI.one talent, experience identity, academy, recruitment, verified experience"),_s("og:title",o,"property"),_s("og:description",t,"property"),_s("og:url","https://ei.one/en/talent","property"),_s("twitter:title",o),_s("twitter:description",t);let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/talent")},[]),s.jsxs(s.Fragment,{children:[s.jsx(vi,{loginHref:"/login",languagePage:"talent.php"}),s.jsxs("main",{className:"talent-page",children:[s.jsx("section",{className:"talent-hero",children:s.jsxs("div",{className:"wrap talent-hero-grid",children:[s.jsxs("div",{className:"talent-hero-copy",children:[s.jsx("h1",{children:"Grow inside companies that transform themselves."}),s.jsxs("p",{children:["ei.one's ecosystem companies become engines of learning and growth for the people who work in them. You build real, attested experience in your ",s.jsx("strong",{children:"Experience Identity"}),", you learn through the partners' ",s.jsx("strong",{children:"Academy"}),", and you get found when a company actually needs what you can do via ",s.jsx("strong",{children:"Recruitment"}),"."]}),s.jsxs("div",{className:"talent-hero-actions",children:[s.jsx("a",{className:"button",href:"/experience-passport",children:"Start with the Experience Identity"}),s.jsx("a",{className:"button secondary",href:"/register",children:"Create your account"})]})]}),s.jsxs("div",{className:"talent-hero-visual","aria-label":"Talent growth path",children:[s.jsxs("div",{className:"talent-orbit",children:[s.jsxs("span",{className:"talent-core",children:[s.jsx("i",{className:"fa-solid fa-user-graduate","aria-hidden":"true"}),s.jsx("strong",{children:"Talent"})]}),s.jsxs("span",{className:"talent-node identity",children:[s.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),s.jsx("strong",{children:"Identity"})]}),s.jsxs("span",{className:"talent-node academy",children:[s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),s.jsx("strong",{children:"Academy"})]}),s.jsxs("span",{className:"talent-node recruitment",children:[s.jsx("i",{className:"fa-solid fa-magnifying-glass-chart","aria-hidden":"true"}),s.jsx("strong",{children:"Recruitment"})]})]}),s.jsxs("div",{className:"talent-proof-strip",children:[s.jsxs("div",{children:[s.jsx("span",{children:"01"}),s.jsx("strong",{children:"Do real work"})]}),s.jsxs("div",{children:[s.jsx("span",{children:"02"}),s.jsx("strong",{children:"Collect proof"})]}),s.jsxs("div",{children:[s.jsx("span",{children:"03"}),s.jsx("strong",{children:"Get found"})]})]})]})]})}),s.jsx("section",{className:"talent-modules","aria-labelledby":"talent-modules-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"talent-modules-head",children:[s.jsx("h2",{id:"talent-modules-title",children:"The three modules, in a row"}),s.jsx("p",{children:"They are independent, but the more you use them together, the more they deliver."})]}),s.jsxs("div",{className:"talent-module-system",children:[s.jsxs("div",{className:"talent-module-summary",children:[s.jsx("span",{className:"talent-module-summary-icon",children:s.jsx("i",{className:"fa-solid fa-layer-group","aria-hidden":"true"})}),s.jsx("h3",{children:"One path, three doors."}),s.jsx("p",{children:"Start with proof, add learning, then become visible to companies that need what you can actually do."})]}),s.jsxs("div",{className:"talent-module-stack",children:[s.jsxs("a",{className:"talent-module identity",href:"/experience-passport",children:[s.jsx("span",{className:"talent-module-icon",children:s.jsx("i",{className:"fa-solid fa-passport","aria-hidden":"true"})}),s.jsxs("span",{className:"talent-module-title",children:["Experience Identity ",s.jsx("em",{children:"Live"})]}),s.jsx("p",{children:"Your digital register, verified by the companies of the ecosystem. Build it over time, share it when you need to."}),s.jsxs("strong",{children:["Discover the Identity ",s.jsx("i",{className:"fa-solid fa-arrow-right","aria-hidden":"true"})]})]}),s.jsxs("a",{className:"talent-module academy",href:"/academy",children:[s.jsx("span",{className:"talent-module-icon",children:s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})}),s.jsxs("span",{className:"talent-module-title",children:["Academy ",s.jsx("em",{children:"Preview"})]}),s.jsx("p",{children:"Sponsors and partners build the training paths. You learn where the skills are really needed - not in the abstract."}),s.jsxs("strong",{children:["Discover Academy ",s.jsx("i",{className:"fa-solid fa-arrow-right","aria-hidden":"true"})]})]}),s.jsxs("a",{className:"talent-module recruitment",href:"/recruitment",children:[s.jsx("span",{className:"talent-module-icon",children:s.jsx("i",{className:"fa-solid fa-handshake","aria-hidden":"true"})}),s.jsxs("span",{className:"talent-module-title",children:["Recruitment ",s.jsx("em",{children:"Preview"})]}),s.jsx("p",{children:"Companies search directly inside the Identitys. No CVs, no keywords: only real experiences."}),s.jsxs("strong",{children:["Discover Recruitment ",s.jsx("i",{className:"fa-solid fa-arrow-right","aria-hidden":"true"})]})]})]})]})]})}),s.jsx("section",{className:"talent-audience","aria-labelledby":"talent-audience-title",children:s.jsxs("div",{className:"wrap talent-audience-grid",children:[s.jsxs("div",{className:"talent-audience-copy",children:[s.jsx("p",{className:"talent-kicker",children:"Who it's for"}),s.jsx("h2",{id:"talent-audience-title",children:"For people who see work as real growth."}),s.jsx("p",{children:"ei.one speaks to those who live work as real growth, not just as a position."})]}),s.jsxs("div",{className:"talent-audience-board",children:[s.jsxs("article",{children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-rocket","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Young people looking for their path"}),s.jsx("p",{children:"you want to discover where you fit, without relying only on the first CV you send out."})]})]}),s.jsxs("article",{children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-route","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Those who want to change"}),s.jsx("p",{children:"a Identity that tells your experiences better than any pitch."})]})]}),s.jsxs("article",{children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-user-tie","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Experienced professionals"}),s.jsx("p",{children:"you crystallize years of work into a profile that proves itself and lets you be found."})]})]}),s.jsxs("article",{children:[s.jsx("span",{children:s.jsx("i",{className:"fa-solid fa-seedling","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h3",{children:"Aspiring entrepreneurs"}),s.jsx("p",{children:"you build real experiences inside the ecosystem's companies while growing your own project."})]})]})]})]})}),s.jsx("section",{className:"talent-final-cta","aria-labelledby":"talent-final-title",children:s.jsxs("div",{className:"wrap",children:[s.jsx("h2",{id:"talent-final-title",children:"Ready to start?"}),s.jsx("p",{children:"Open your Experience Identity. Add the first experience. You decide what to show the world."}),s.jsxs("div",{className:"talent-final-actions",children:[s.jsx("a",{className:"button talent-final-light",href:"/register",children:"Create your Identity"}),s.jsx("a",{className:"button",href:"/experience-passport",children:"See how it works"}),s.jsx("a",{className:"button talent-final-outline",href:"/contact",children:"Contact us"})]})]})})]}),s.jsx(_i,{})]})}function wc(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function CA(){return Tn.useEffect(()=>{const o="Register - EI.one",t="Create your EI.one account and start building your Experience Identity inside the ecosystem.";document.title=o,wc("description",t),wc("robots","noindex, follow"),wc("og:title",o,"property"),wc("og:description",t,"property");let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/register")},[]),s.jsx("main",{className:"register-page",children:s.jsxs("section",{className:"register-shell","aria-labelledby":"register-title",children:[s.jsxs("div",{className:"register-brand",children:[s.jsx("a",{href:"/en/index.php","aria-label":"Back to ei.one home",children:s.jsx("img",{src:"/images/logo.png",alt:"EI.one"})}),s.jsx("p",{className:"register-kicker",children:"Ecosystem Intelligence"}),s.jsx("p",{children:"A Human-Centred Ecosystem for Sustainable Growth"})]}),s.jsxs("form",{className:"register-card","aria-label":"Create account form",children:[s.jsx("label",{htmlFor:"register-name",children:"Name"}),s.jsx("input",{id:"register-name",type:"text",autoComplete:"name"}),s.jsx("label",{htmlFor:"register-email",children:"Email"}),s.jsx("input",{id:"register-email",type:"email",autoComplete:"email"}),s.jsx("label",{htmlFor:"register-password",children:"Password"}),s.jsx("input",{id:"register-password",type:"password",autoComplete:"new-password"}),s.jsx("label",{htmlFor:"register-confirm-password",children:"Confirm Password"}),s.jsx("input",{id:"register-confirm-password",type:"password",autoComplete:"new-password"}),s.jsxs("div",{className:"register-actions",children:[s.jsx("a",{href:"/login",children:"Already registered?"}),s.jsx("button",{className:"button",type:"submit",children:"Register"})]})]}),s.jsxs("div",{className:"register-footer-links",children:[s.jsx("a",{href:"/en/index.php",children:"← Back to ei.one"}),s.jsx("span",{}),s.jsx("p",{children:"Experience. Education. Economy. Environment."})]})]})})}function Rc(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function DA(){return Tn.useEffect(()=>{const o="Login - EI.one",t="Log in to EI.one and access your Experience Identity and ecosystem account.";document.title=o,Rc("description",t),Rc("robots","noindex, follow"),Rc("og:title",o,"property"),Rc("og:description",t,"property");let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/login")},[]),s.jsx("main",{className:"register-page login-page",children:s.jsxs("section",{className:"register-shell login-shell","aria-label":"Login",children:[s.jsxs("div",{className:"register-brand",children:[s.jsx("a",{href:"/en/index.php","aria-label":"Back to ei.one home",children:s.jsx("img",{src:"/images/logo.png",alt:"EI.one"})}),s.jsx("p",{className:"register-kicker",children:"Ecosystem Intelligence"}),s.jsx("p",{children:"A Human-Centred Ecosystem for Sustainable Growth"})]}),s.jsxs("form",{className:"register-card login-card","aria-label":"Login form",children:[s.jsx("label",{htmlFor:"page-login-email",children:"Email"}),s.jsx("input",{id:"page-login-email",type:"email",autoComplete:"email",autoFocus:!0}),s.jsx("label",{htmlFor:"page-login-password",children:"Password"}),s.jsx("input",{id:"page-login-password",type:"password",autoComplete:"current-password"}),s.jsxs("label",{className:"login-remember",htmlFor:"page-login-remember",children:[s.jsx("input",{id:"page-login-remember",type:"checkbox"}),s.jsx("span",{children:"Remember me"})]}),s.jsxs("div",{className:"login-page-actions",children:[s.jsx("a",{href:"/forgot-password",children:"Forgot your password?"}),s.jsx("button",{className:"button",type:"submit",children:"Log in"})]})]}),s.jsxs("div",{className:"register-footer-links",children:[s.jsx("a",{href:"/en/index.php",children:"← Back to ei.one"}),s.jsx("span",{}),s.jsx("p",{children:"Experience. Education. Economy. Environment."})]})]})})}function Cc(o,t,i="name"){let r=document.head.querySelector(`meta[${i}="${o}"]`);r||(r=document.createElement("meta"),r.setAttribute(i,o),document.head.appendChild(r)),r.setAttribute("content",t)}function UA(){return Tn.useEffect(()=>{const o="Forgot Password - EI.one",t="Request an EI.one password reset link by email.";document.title=o,Cc("description",t),Cc("robots","noindex, follow"),Cc("og:title",o,"property"),Cc("og:description",t,"property");let i=document.head.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href","https://ei.one/en/forgot-password")},[]),s.jsx("main",{className:"register-page forgot-page",children:s.jsxs("section",{className:"register-shell forgot-shell","aria-label":"Forgot password",children:[s.jsxs("div",{className:"register-brand",children:[s.jsx("a",{href:"/en/index.php","aria-label":"Back to ei.one home",children:s.jsx("img",{src:"/images/logo.png",alt:"EI.one"})}),s.jsx("p",{className:"register-kicker",children:"Ecosystem Intelligence"}),s.jsx("p",{children:"A Human-Centred Ecosystem for Sustainable Growth"})]}),s.jsxs("form",{className:"register-card forgot-card","aria-label":"Password reset form",children:[s.jsx("p",{className:"forgot-copy",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s.jsx("label",{htmlFor:"forgot-email",children:"Email"}),s.jsx("input",{id:"forgot-email",type:"email",autoComplete:"email",autoFocus:!0}),s.jsx("button",{className:"button forgot-submit",type:"submit",children:"Email Password Reset Link"})]}),s.jsxs("div",{className:"register-footer-links",children:[s.jsx("a",{href:"/en/index.php",children:"← Back to ei.one"}),s.jsx("span",{}),s.jsx("p",{children:"Experience. Education. Economy. Environment."})]})]})})}function jA(){const o=window.location.pathname.toLowerCase();return o.includes("/education")?s.jsx(yA,{}):o.includes("/experience-passport")?s.jsx(SA,{}):o.includes("/economy")?s.jsx(MA,{}):o.includes("/environment")?s.jsx(bA,{}):o.includes("/partner")?s.jsx(EA,{}):o.includes("/investor")?s.jsx(TA,{}):o.includes("/entrepreneur")?s.jsx(AA,{}):o.includes("/about")||o.includes("/about-us")?s.jsx(NA,{}):o.includes("/contact")?s.jsx(wA,{}):o.includes("/talent")?s.jsx(RA,{}):o.includes("/register")?s.jsx(CA,{}):o.includes("/forgot-password")?s.jsx(UA,{}):o.includes("/login")?s.jsx(DA,{}):s.jsxs(s.Fragment,{children:[s.jsx(vi,{}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero",children:[s.jsx(vA,{}),s.jsxs("div",{className:"hero-inner",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Ecosystem Intelligence"}),s.jsxs("h1",{children:["The infrastructure that turns every collaboration ",s.jsx("span",{className:"hero-accent",children:"into new opportunities for growth."})]}),s.jsxs("p",{className:"hero-copy",children:["EI.one connects ",s.jsx("strong",{children:"companies, people and schools"})," to turn every collaboration into new relationships, clients, talent and shared knowledge."]}),s.jsx("p",{className:"hero-copy",children:"Every experience feeds a patrimony of value that makes the entire ecosystem stronger, smarter and more capable of growth."}),s.jsxs("div",{className:"actions",children:[s.jsx("a",{className:"button",href:"/business-club",children:"I'm a company →"}),s.jsx("a",{className:"button secondary",href:"/talent",children:"I'm a person →"}),s.jsx("a",{className:"button secondary",href:"/education",children:"I'm a school →"})]})]}),s.jsxs("aside",{className:"login-panel",id:"login","aria-label":"Login panel",children:[s.jsx("h2",{children:"Login"}),s.jsx("p",{children:"Enter the platform"}),s.jsx("label",{className:"field-label",htmlFor:"login-email",children:"Email"}),s.jsx("input",{className:"field",id:"login-email",type:"email",placeholder:"you@email.com"}),s.jsx("label",{className:"field-label",htmlFor:"login-password",children:"Password"}),s.jsx("input",{className:"field",id:"login-password",type:"password",placeholder:"••••••••"}),s.jsx("div",{className:"login-options",children:s.jsx("a",{href:"#",children:"Forgot password?"})}),s.jsx("a",{className:"button full",href:"#",children:"Log in →"}),s.jsxs("p",{className:"login-join",children:["No account yet? ",s.jsx("a",{className:"text-link",href:"/register",children:"Join ei.one"})]})]})]})]}),s.jsx("section",{className:"protagonists","aria-labelledby":"protagonists-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"protagonists-head",children:[s.jsx("h2",{id:"protagonists-title",children:"Three protagonists. One same growth."}),s.jsx("p",{children:"Experience is the raw material. ei.one turns it into value for all three."})]}),s.jsxs("div",{className:"protagonists-grid",children:[s.jsxs("article",{className:"protagonist-card",children:[s.jsx("h3",{children:"For companies — Business growth"}),s.jsx("p",{children:"Turn internships, project work and mentoring into a channel of verified talent, trusted partnerships and qualified commercial network."}),s.jsx("p",{className:"protagonist-quote",children:'"Your experiences attract the best. The best grow your business."'}),s.jsx("a",{className:"protagonist-link",href:"/economy",children:"For companies →"})]}),s.jsxs("article",{className:"protagonist-card",children:[s.jsx("h3",{children:"For talents — Experience Passport"}),s.jsx("p",{children:"Transform internships, projects, mentoring and learning experiences into a verified record of your growth."}),s.jsx("p",{className:"protagonist-quote",children:'"Your experiences become your proof. Your proof becomes your opportunity."'}),s.jsx("a",{className:"protagonist-link",href:"/experience-passport",children:"For people →"})]}),s.jsxs("article",{className:"protagonist-card",children:[s.jsx("h3",{children:"For education — Academy growth"}),s.jsx("p",{children:"Connect learning paths, projects and mentoring into an ecosystem where skills become visible and development continues."}),s.jsx("p",{className:"protagonist-quote",children:'"When learning is connected, growth becomes measurable."'}),s.jsx("a",{className:"protagonist-link",href:"/education",children:"For Schools →"})]})]})]})}),s.jsx("section",{className:"connections","aria-labelledby":"connections-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"connections-head",children:[s.jsx("p",{className:"connections-kicker",children:"Network signals"}),s.jsx("h2",{id:"connections-title",children:"Who we're connected with"}),s.jsx("p",{children:"For clarity, here is the nature of each relationship below."})]}),s.jsxs("div",{className:"connections-grid",children:[s.jsxs("div",{className:"connection-item",children:[s.jsx("a",{className:"connection-logo logo-togo",href:"https://stiftung-togo.ch/",target:"_blank",rel:"noopener","aria-label":"ToGo opening eyes",children:s.jsxs("span",{children:["To",s.jsx("span",{className:"red",children:"Go"})," ",s.jsx("span",{className:"green",children:"opening eyes"})]})}),s.jsx("div",{className:"connection-label",children:"Supported Foundation"})]}),s.jsxs("div",{className:"connection-item",children:[s.jsx("a",{className:"connection-logo logo-sva",href:"https://svazurich.ch/",target:"_blank",rel:"noopener","aria-label":"SVA Zurich",children:s.jsxs("span",{children:[s.jsx("strong",{children:"SVA"})," Zürich"]})}),s.jsx("div",{className:"connection-label",children:"Award Received"})]}),s.jsxs("div",{className:"connection-item",children:[s.jsxs("a",{className:"connection-logo logo-innovation",href:"https://www.standort-zuerich.ch/",target:"_blank",rel:"noopener","aria-label":"Innovation Zurich",children:[s.jsx("span",{className:"innovation-mark","aria-hidden":"true"}),s.jsxs("span",{children:["Innovation",s.jsx("br",{}),"Zurich"]})]}),s.jsx("div",{className:"connection-label",children:"Local Network"})]}),s.jsxs("div",{className:"connection-item",children:[s.jsx("a",{className:"connection-logo logo-eye",href:"https://augenarztpraxis-baden.ch/",target:"_blank",rel:"noopener","aria-label":"AugenarztpraxisPlus",children:"AugenarztpraxisPlus"}),s.jsx("div",{className:"connection-label",children:"Sponsor"})]}),s.jsxs("div",{className:"connection-item",children:[s.jsxs("a",{className:"connection-logo logo-sgo",href:"https://www.sgo-verein.ch/",target:"_blank",rel:"noopener","aria-label":"SGO Verein",children:[s.jsx("span",{children:"SGO"}),s.jsx("small",{children:"www.sgo-verein.ch"})]}),s.jsx("div",{className:"connection-label",children:"Professional Network"})]})]})]})}),s.jsx("section",{className:"platform-status","aria-labelledby":"platform-status-title",children:s.jsx("div",{className:"wrap",children:s.jsxs("div",{className:"status-panel",children:[s.jsxs("div",{className:"status-head",children:[s.jsx("p",{children:"Platform Status Today"}),s.jsx("h2",{id:"platform-status-title",children:"What is live now, and what comes next"})]}),s.jsxs("div",{className:"status-grid",children:[s.jsxs("div",{className:"status-column live-column",children:[s.jsxs("div",{className:"status-badge",children:[s.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"}),"Live today"]}),s.jsxs("ul",{className:"status-list",children:[s.jsxs("li",{className:"live",children:[s.jsx("i",{className:"fa-solid fa-user-plus","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"ei.one account"}),s.jsx("small",{children:"Create your access and enter the platform."})]}),s.jsx("em",{children:"Live"})]}),s.jsxs("li",{className:"live",children:[s.jsx("i",{className:"fa-solid fa-id-card","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Experience Identity"}),s.jsx("small",{children:"Build a verified record of what you actually did."})]}),s.jsx("em",{children:"Live"})]}),s.jsxs("li",{className:"live",children:[s.jsx("i",{className:"fa-solid fa-share-nodes","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Verified experiences"}),s.jsx("small",{children:"Add and share experiences attested by companies."})]}),s.jsx("em",{children:"Live"})]}),s.jsxs("li",{className:"live",children:[s.jsx("i",{className:"fa-solid fa-network-wired","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Business Units"}),s.jsx("small",{children:"Connect with the active ecosystem network."})]}),s.jsx("em",{children:"Live"})]})]})]}),s.jsxs("div",{className:"status-column soon-column",children:[s.jsxs("div",{className:"status-badge soon",children:[s.jsx("i",{className:"fa-solid fa-clock","aria-hidden":"true"}),"Coming soon"]}),s.jsxs("ul",{className:"status-list",children:[s.jsxs("li",{className:"soon",children:[s.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Academy"}),s.jsx("small",{children:"Learning paths with sponsors and partners."})]}),s.jsx("em",{children:"Soon"})]}),s.jsxs("li",{className:"soon",children:[s.jsx("i",{className:"fa-solid fa-magnifying-glass-chart","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Recruitment"}),s.jsx("small",{children:"Companies searching on the Identity."})]}),s.jsx("em",{children:"Soon"})]}),s.jsxs("li",{className:"soon",children:[s.jsx("i",{className:"fa-solid fa-store","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Extended Marketplace"}),s.jsx("small",{children:"Broader access to ecosystem opportunities."})]}),s.jsx("em",{children:"Planned"})]}),s.jsxs("li",{className:"soon",children:[s.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Credential verification"}),s.jsx("small",{children:"On-chain verification for trusted records."})]}),s.jsx("em",{children:"Planned"})]})]})]})]})]})})}),s.jsx("section",{className:"entry-doors","aria-labelledby":"entry-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"entry-head",children:[s.jsx("h2",{id:"entry-title",children:"Where do you want to enter?"}),s.jsx("p",{children:"ei.one is two things held together: an ecosystem of Business Units working in sync, and a platform that rewards the people who work inside it. Pick the right door for you."})]}),s.jsxs("div",{className:"entry-grid",children:[s.jsxs("article",{className:"entry-card companies",children:[s.jsx("div",{className:"entry-kicker",children:"For companies"}),s.jsx("h3",{children:"Activate the ecosystem."}),s.jsx("p",{className:"entry-copy",children:"A system of specialised Business Units — energy, sales, marketing, IT & AI, real estate, 3D — working together. Enter through one, benefit from all."}),s.jsxs("ul",{className:"entry-list",children:[s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-network-wired entry-check","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Business Ecosystem"}),s.jsx("small",{children:"The Business Units in the network"})]})]}),s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-handshake entry-check","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Become a Partner"}),s.jsx("small",{children:"Franchise, license, white label"})]})]}),s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-chart-line entry-check","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Sponsor & Investor"}),s.jsx("small",{children:"Presence and growth"})]})]})]}),s.jsx("a",{className:"entry-link",href:"/business-club",children:"Enter Companies →"})]}),s.jsxs("article",{className:"entry-card talents",children:[s.jsx("div",{className:"entry-kicker",children:"For talents"}),s.jsx("h3",{children:"Build your Experience Identity."}),s.jsx("p",{className:"entry-copy",children:"Learn through the Academy, accumulate verified experience inside the ecosystem's companies, get found when a company actually needs what you can do."}),s.jsxs("ul",{className:"entry-list",children:[s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-id-card entry-check","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Experience Identity"}),s.jsx("small",{children:"Your verified CV"})]}),s.jsx("em",{className:"entry-pill",children:"Live"})]}),s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-graduation-cap entry-check","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Academy"}),s.jsx("small",{children:"Learn on the job"})]}),s.jsx("em",{className:"entry-pill preview",children:"Soon"})]}),s.jsxs("li",{children:[s.jsx("i",{className:"fa-solid fa-magnifying-glass-chart entry-check","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Recruitment"}),s.jsx("small",{children:"Get found"})]}),s.jsx("em",{className:"entry-pill preview",children:"Soon"})]})]}),s.jsx("a",{className:"entry-link",href:"/talent",children:"Enter Talents →"})]})]})]})}),s.jsx("section",{className:"company-effects","aria-labelledby":"company-effects-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"effects-head",children:[s.jsx("h2",{id:"company-effects-title",children:"What changes for a company that joins ei.one"}),s.jsx("p",{children:'Five concrete effects that turn a business from "a workplace" into a hub of value for society.'})]}),s.jsxs("div",{className:"effects-grid",children:[s.jsxs("article",{className:"effect-card",children:[s.jsx("span",{className:"effect-number",children:"01"}),s.jsx("span",{className:"effect-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-handshake"})}),s.jsx("h3",{children:"New commercial relationships"}),s.jsx("p",{children:"Access to the Business Units and the customers already operating inside the ecosystem."})]}),s.jsxs("article",{className:"effect-card",children:[s.jsx("span",{className:"effect-number",children:"02"}),s.jsx("span",{className:"effect-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-graduation-cap"})}),s.jsx("h3",{children:"Talent attracted"}),s.jsx("p",{children:"The best people come to companies that offer experience verifiable in the Identity."})]}),s.jsxs("article",{className:"effect-card",children:[s.jsx("span",{className:"effect-number",children:"03"}),s.jsx("span",{className:"effect-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-brain"})}),s.jsx("h3",{children:"Skills developed"}),s.jsx("p",{children:"The workplace becomes a learning engine for the people who work in it."})]}),s.jsxs("article",{className:"effect-card",children:[s.jsx("span",{className:"effect-number",children:"04"}),s.jsx("span",{className:"effect-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-eye"})}),s.jsx("h3",{children:"Amplified visibility"}),s.jsx("p",{children:"Presence inside the marketplace and across ecosystem activations."})]}),s.jsxs("article",{className:"effect-card",children:[s.jsx("span",{className:"effect-number",children:"05"}),s.jsx("span",{className:"effect-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-leaf"})}),s.jsx("h3",{children:"Measurable ESG impact"}),s.jsx("p",{children:"Real indicators on sustainability, inclusion, and governance — verifiable."})]})]}),s.jsx("p",{className:"effects-closing",children:"The company is no longer just a workplace. It becomes a hub of value for society."})]})}),s.jsx("section",{className:"training-modules","aria-labelledby":"training-title",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{className:"training-head",children:[s.jsx("p",{className:"training-kicker",children:"Company learning engine"}),s.jsx("h2",{id:"training-title",children:"How the company trains and attests its people"}),s.jsx("p",{children:"Three modules — one to build skills, one to attest them, one to make them findable. Together they make the company a growth engine for the people who work there."})]}),s.jsxs("div",{className:"training-grid",children:[s.jsxs("a",{className:"training-card academy",href:"/academy",children:[s.jsx("span",{className:"training-step",children:"01"}),s.jsx("span",{className:"training-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-graduation-cap"})}),s.jsxs("h3",{children:["1. Academy ",s.jsx("span",{className:"module-pill",children:"Preview"})]}),s.jsx("p",{children:"Sponsors and partners of the ecosystem build the learning paths. You learn where you work."}),s.jsx("span",{className:"training-link",children:"Discover Academy→"})]}),s.jsxs("a",{className:"training-card identity",href:"/experience-passport",children:[s.jsx("span",{className:"training-step",children:"02"}),s.jsx("span",{className:"training-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-passport"})}),s.jsxs("h3",{children:["2. Experience Identity ",s.jsx("span",{className:"module-pill live",children:"Live"})]}),s.jsx("p",{children:"Your digital record of what you actually did. Verified by the ecosystem's companies who saw you do it."}),s.jsx("span",{className:"training-link",children:"Discover the Identity→"})]}),s.jsxs("a",{className:"training-card recruitment",href:"/recruitment",children:[s.jsx("span",{className:"training-step",children:"03"}),s.jsx("span",{className:"training-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-handshake"})}),s.jsxs("h3",{children:["3. Recruitment ",s.jsx("span",{className:"module-pill",children:"Preview"})]}),s.jsx("p",{children:"Companies hire on Identity experience, not CV keywords. The matches are real."}),s.jsx("span",{className:"training-link",children:"Discover Recruitment→"})]})]})]})}),s.jsx("section",{className:"why-now","aria-labelledby":"why-now-title",children:s.jsxs("div",{className:"wrap why-grid",children:[s.jsxs("div",{className:"why-copy",children:[s.jsx("h2",{id:"why-now-title",children:"Why now"}),s.jsxs("div",{className:"why-points",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"The job market is changing fast."})," AI is rewriting roles faster than CVs can keep up. Résumés say less and less about what a person can actually do, and companies struggle more and more to find the right skills."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Our answer."})," Put real, verified experience at the centre — not keywords. Every entry in the Identity is attested by the company that gave you the work. It's a fairer, more honest way to show what you're worth."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"How the ecosystem moves."})," Companies work together and train people on the job. People accumulate verified experience. That experience is what hiring companies search on. Value circulates."]})]})]}),s.jsx("div",{className:"why-media",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82",alt:"Bright office desk with computer analytics dashboard and plants"})})]})}),s.jsx("section",{className:"building","aria-labelledby":"building-title",children:s.jsxs("div",{className:"wrap",children:[s.jsx("div",{className:"building-head",children:s.jsx("h2",{id:"building-title",children:"What we're building"})}),s.jsxs("div",{className:"building-callout",children:[s.jsx("div",{children:"ei.one isn't a services platform."}),s.jsx("div",{children:"It's the infrastructure that turns companies into hubs of learning, innovation and growth."})]}),s.jsxs("div",{className:"building-grid",children:[s.jsxs("article",{className:"building-card",children:[s.jsx("span",{className:"building-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-passport"})}),s.jsx("h3",{children:"Verified experience"}),s.jsx("p",{children:"What you did, attested by the people who saw you do it."})]}),s.jsxs("article",{className:"building-card",children:[s.jsx("span",{className:"building-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-graduation-cap"})}),s.jsx("h3",{children:"Talents that grow"}),s.jsx("p",{children:"Room to discover what you're good at and develop it over time."})]}),s.jsxs("article",{className:"building-card",children:[s.jsx("span",{className:"building-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-handshake"})}),s.jsx("h3",{children:"Real relationships"}),s.jsx("p",{children:"Networking measured in trust and real collaborations."})]}),s.jsxs("article",{className:"building-card",children:[s.jsx("span",{className:"building-icon","aria-hidden":"true",children:s.jsx("i",{className:"fa-solid fa-arrows-rotate"})}),s.jsx("h3",{children:"Integrated system"}),s.jsx("p",{children:"Experience, Education, Economy and Environment work as one."})]})]})]})}),s.jsx("section",{className:"cta",id:"contact",children:s.jsxs("div",{className:"wrap cta-box",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Let's build it together."}),s.jsx("p",{children:"Activate the ecosystem for your company, or start building your Experience Identity."})]}),s.jsxs("div",{className:"actions",style:{margin:0},children:[s.jsx("a",{className:"button",href:"/business-club",children:"For Companies"}),s.jsx("a",{className:"button secondary",href:"/talent",children:"For Talents"}),s.jsx("a",{className:"button secondary",href:"/contact",children:"Contact us"})]})]})}),s.jsx("section",{className:"newsletter",children:s.jsxs("div",{className:"wrap",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Stay up to date"}),s.jsx("p",{children:"Subscribe to the newsletter for updates from the ecosystem."})]}),s.jsxs("form",{className:"newsletter-form",children:[s.jsx("input",{type:"email",placeholder:"Email address","aria-label":"Email address"}),s.jsx("button",{className:"button",type:"submit",children:"Subscribe"})]})]})})]}),s.jsx(_i,{}),s.jsxs("aside",{className:"cookie","aria-label":"Cookie notice",children:["We use cookies to improve your experience. By continuing, you accept our privacy policy.",s.jsx("button",{className:"button",onClick:t=>{var i;return(i=t.currentTarget.closest(".cookie"))==null?void 0:i.remove()},children:"Accept"})]})]})}ly.createRoot(document.getElementById("root")).render(s.jsx(ey.StrictMode,{children:s.jsx(jA,{})}));
