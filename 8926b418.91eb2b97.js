(window.webpackJsonp=window.webpackJsonp||[]).push([[13],Array(87).concat([function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10);var u=function(e){var t=e.children,n=e.fallback;return a.a.canUseDOM&&null!=t?o.a.createElement(o.a.Fragment,null,t()):n||null},i=n(102),c=n(104),l=n.n(c);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var d=n(105),p=n(94),v=n(124),g=n.n(v),h=n(98),m=n(183),y=n.n(m),b=n(80),O=n.n(b),w=n(100),j=function(){function e(e){this.getValue=e,this.isInitialized=!1}return e.prototype.get=function(){return this.isInitialized||(this.isInitialized=!0,this.value=this.getValue()),this.value},e}(),M={minimap:{enabled:!1},scrollbar:{useShadows:!1},scrollBeyondLastLine:!1},x=Object.assign({},M),E=Object.assign({},M,{readOnly:!0}),_=["Lava","t","Roact"],P=["types","compiler-types"];function k(e,t){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t+"/"+n+".tsx").then((function(e){return e.text()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=new j((function(){return new Worker("../rbxts-worker.js")})),C=new Set,D=/["']@rbxts\/([^"']+)["']/g,A=/\/\/\/\s*<reference path=["']([^"']+)["']\s*\/>/g,N=/\/\/\/\s*<reference types=["']@rbxts\/([^"']+)["']\s*\/>/g;function R(e,t){for(var n,r=new Array,o=f(t.matchAll(e));!(n=o()).done;){var a=n.value;r.push(a[1])}return r}var L="https://cdn.jsdelivr.net/npm";function I(e){return U.apply(this,arguments)}function U(){return(U=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.split("/"))[1].includes("@")||(n[1]+="@latest"),t=n.join("/"),e.abrupt("return",fetch(L+"/"+t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return z.apply(this,arguments)}function z(){return(z=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t).then((function(e){return e.text()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return q.apply(this,arguments)}function q(){return(q=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.get().postMessage({type:"writeFile",filePath:"/node_modules/"+t,content:n}),e.next=3,v.monaco.init();case 3:e.sent.languages.typescript.typescriptDefaults.addExtraLib(n,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=new Set;function J(e,t,n){return K.apply(this,arguments)}function K(){return(K=Object(d.a)(l.a.mark((function e(t,n,r){var o,a,u,i,c,s,d,p,g;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r&&(r=!1),!W.has(n)){e.next=3;break}return e.abrupt("return",Promise.resolve());case 3:return W.add(n),e.next=6,V(n);case 6:for(o=e.sent,a=new Array,u=f(R(A,o));!(i=u()).done;)c=i.value,s=y.a.resolve(y.a.dirname(n),c).substr(1),a.push(J(t,s));for(d=f(R(N,o));!(p=d()).done;)g=p.value,a.push(B(g));return e.next=12,F(n,o);case 12:if(!r){e.next=16;break}return e.next=15,v.monaco.init();case 15:e.sent.languages.typescript.typescriptDefaults.addExtraLib(o,y.a.join(t,"index.d.ts"));case 16:return e.abrupt("return",Promise.allSettled(a));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return $.apply(this,arguments)}function $(){return($=Object(d.a)(l.a.mark((function e(t){var n,r,o,a,u,i,c,s,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.has(t)){e.next=22;break}return C.add(t),r=(n="@rbxts/"+t)+"/package.json",e.next=6,I(r);case 6:if(200!==(o=e.sent).status){e.next=21;break}return e.next=10,o.json();case 10:return c=e.sent,e.next=13,F(r,JSON.stringify(c));case 13:return console.log(n+"@"+c.version),s=y.a.resolve("/"+n,null!==(a=c.main)&&void 0!==a?a:"").substr(1),f=y.a.resolve("/"+n,null!==(u=null!==(i=c.types)&&void 0!==i?i:c.typings)&&void 0!==u?u:"index.d.ts").substr(1),T.get().postMessage({type:"setMapping",typingsPath:"/node_modules/"+f,mainPath:"/node_modules/"+s}),e.next=19,J(n,f,!0);case 19:e.next=22;break;case 21:console.warn("failed to download "+n);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(e){return o.a.createElement("li",null,o.a.createElement("a",{className:O.a.pointer+" dropdown__link",onClick:e.onClick},e.name))},Y=function(){T.get();var e=o.a.useState(""),t=e[0],n=e[1],r=o.a.useState(""),a=r[0],u=r[1],i=o.a.useState(),c=i[0],s=i[1],f=o.a.useState(!1),m=f[0],y=f[1],b=o.a.useState(),j=b[0],M=b[1],S=Object(p.a)("playground-examples/src");function C(e){null==j||j.setValue(e)}function A(e){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(S,t).then((function(e){C(e),n(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.useEffect((function(){j&&(""!==location.hash?Object(w.a)(location.hash).then((function(e){e&&(C(e),n(e))})):j&&""===j.getValue()&&A(_[0]))}),[j]);o.a.useEffect((function(){j&&(location.hash=Object(w.b)(t))}),[t,j]),o.a.useEffect((function(){m&&(void 0!==c&&window.clearTimeout(c),s(window.setTimeout((function(){Promise.allSettled(R(D,t).map(B)).then((function(){T.get().postMessage({type:"compile",source:t})}))}),300)))}),[t,m]),o.a.useEffect((function(){T.get().addEventListener("message",(function(e){var t=e.data.source;"string"==typeof t&&u(t)}))}),[]),o.a.useEffect((function(){Promise.allSettled(P.map((function(e){return B(e)}))).then((function(){return y(!0)}))}),[]),o.a.useEffect((function(){window.addEventListener("keydown",(function(e){(e.ctrlKey||e.metaKey)&&"KeyS"===e.code&&(e.preventDefault(),navigator.clipboard.writeText(location.href))}))}),[]);var L=Object(h.a)().isDarkTheme?"dark":"light";return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:O.a.subNavBar+" navbar"},o.a.createElement("div",{className:"navbar__inner"},o.a.createElement("div",{className:"navbar__items"},o.a.createElement("div",{className:"navbar__item dropdown dropdown--hoverable "+O.a.pointer},o.a.createElement("a",{className:"navbar__link "+O.a.pointer},"Examples"),o.a.createElement("ul",{className:"dropdown__menu"},_.map((function(e,t){return o.a.createElement(H,{key:t,name:e,onClick:function(){return A(e)}})}))))))),o.a.createElement("div",{className:O.a.playground},o.a.createElement("div",{className:O.a.editorWrapper},o.a.createElement(g.a,{language:"typescript",options:x,theme:L,editorDidMount:function(e,r){v.monaco.init().then((function(o){o.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,downlevelIteration:!0,module:o.languages.typescript.ModuleKind.CommonJS,moduleResolution:o.languages.typescript.ModuleResolutionKind.NodeJs,noLib:!0,strict:!0,target:o.languages.typescript.ScriptTarget.ESNext,typeRoots:["node_modules/@rbxts"],noEmit:!0,baseUrl:".",rootDir:".",jsx:o.languages.typescript.JsxEmit.React,jsxFactory:"Roact.createElement"});var a=o.Uri.file("input.tsx"),u=o.editor.getModel(a)||o.editor.createModel(t,"typescript",a);r.setModel(u);var i=r.onDidChangeModelContent((function(){return n(e())}));return M(u),n(u.getValue()),function(){return i.dispose()}}))}})),o.a.createElement("div",{className:O.a.editorWrapper},o.a.createElement(g.a,{language:"lua",options:E,theme:L,value:a}))))};t.default=function(){return o.a.createElement("div",{style:{overflow:"hidden"}},o.a.createElement(i.a,{noFooter:!0},o.a.createElement(u,null,(function(){return o.a.createElement(Y,null)}))))}},,,,,,function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(104),o=n.n(r),a=n(105),u=n(109),i=n.n(u),c="#code/",l="#gist/";function s(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(o.a.mark((function e(t){var n,r,a,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith(c)){e.next=6;break}if(null===(n=i.a.decompressFromEncodedURIComponent(t.substr(c.length)))){e.next=4;break}return e.abrupt("return",n);case 4:e.next=16;break;case 6:if(!t.startsWith(l)){e.next=16;break}return r=t.substr(l.length),e.next=10,fetch("https://api.github.com/gists/"+r);case 10:if(200!==(a=e.sent).status){e.next=16;break}return e.next=14,a.json();case 14:return u=e.sent,e.abrupt("return",Object.values(u.files)[0].content);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return c+i.a.compressToEncodedURIComponent(e)}},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"compose",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"deepMerge",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"makeCancelable",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"monaco",{enumerable:!0,get:function(){return c.default}});var o=r(n(168)),a=r(n(169)),u=r(n(170)),i=r(n(171)),c=r(n(172))},,,,,function(e,t,n){var r=n(158);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},,,,function(e,t,n){var r=n(157);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}},function(e,t,n){var r=n(159),o=n(160),a=n(161),u=n(163);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||u()}},,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DiffEditor",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ControlledEditor",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"monaco",{enumerable:!0,get:function(){return i.monaco}}),t.default=void 0;var o=r(n(155)),a=r(n(178)),u=r(n(180)),i=n(101),c=o.default;t.default=c},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(0),a=r(n(164)),u=(0,o.memo)(a.default);t.default=u},function(e,t,n){var r=n(173);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMount",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"useUpdate",{enumerable:!0,get:function(){return a.default}});var o=r(n(176)),a=r(n(177))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={"night-dark":{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.background":"#202124"}}};t.default=r},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(0),a=r(n(156)),u=(0,o.memo)(a.default);t.default=u},function(e,t,n){"use strict";var r=n(110),o=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(106)),u=o(n(111)),i=r(n(0)),c=o(n(1)),l=o(n(125)),s=n(101),f=n(127),d=o(n(128));function p(e){var t=e.value,n=e.language,r=e.editorDidMount,o=e.theme,c=e.line,p=e.width,v=e.height,g=e.loading,h=e.options,m=e.overrideServices,y=e._isControlledMode,b=e.className,O=e.wrapperClassName,w=(0,i.useState)(!1),j=(0,u.default)(w,2),M=j[0],x=j[1],E=(0,i.useState)(!0),_=(0,u.default)(E,2),P=_[0],k=_[1],S=(0,i.useRef)(null),T=(0,i.useRef)(null),C=(0,i.useRef)(null),D=(0,i.useRef)(r);(0,f.useMount)((function(){var e=s.monaco.init();return e.then((function(e){return(T.current=e)&&k(!1)})).catch((function(e){return"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e)})),function(){return S.current?N():e.cancel()}})),(0,f.useUpdate)((function(){S.current.updateOptions(h)}),[h],M),(0,f.useUpdate)((function(){if(S.current.getOption(T.current.editor.EditorOption.readOnly))S.current.setValue(t);else if(t!==S.current.getValue()){if(S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),y){var e=S.current.getModel();e.forceTokenization(e.getLineCount())}S.current.pushUndoStop()}}),[t],M),(0,f.useUpdate)((function(){T.current.editor.setModelLanguage(S.current.getModel(),n)}),[n],M),(0,f.useUpdate)((function(){S.current.setScrollPosition({scrollTop:c})}),[c],M),(0,f.useUpdate)((function(){T.current.editor.setTheme(o)}),[o],M);var A=(0,i.useCallback)((function(){S.current=T.current.editor.create(C.current,(0,a.default)({value:t,language:n,automaticLayout:!0},h),m),T.current.editor.defineTheme("dark",d.default["night-dark"]),T.current.editor.setTheme(o),x(!0)}),[n,h,m,o,t]);(0,i.useEffect)((function(){M&&D.current(S.current.getValue.bind(S.current),S.current)}),[M]),(0,i.useEffect)((function(){!P&&!M&&A()}),[P,M,A]);var N=function(){return S.current.dispose()};return i.default.createElement(l.default,{width:p,height:v,isEditorReady:M,loading:g,_ref:C,className:b,wrapperClassName:O})}p.propTypes={value:c.default.string,language:c.default.string,editorDidMount:c.default.func,theme:c.default.string,line:c.default.number,width:c.default.oneOfType([c.default.number,c.default.string]),height:c.default.oneOfType([c.default.number,c.default.string]),loading:c.default.oneOfType([c.default.element,c.default.string]),options:c.default.object,className:c.default.string,wrapperClassName:c.default.string,overrideServices:c.default.object,_isControlledMode:c.default.bool},p.defaultProps={editorDidMount:s.noop,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{},overrideServices:{},_isControlledMode:!1};var v=p;t.default=v},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}},function(e,t,n){var r=n(162);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(106)),a=r(n(0)),u=r(n(1)),i=r(n(165)),c=r(n(167));function l(e){var t=e.width,n=e.height,r=e.isEditorReady,u=e.loading,l=e._ref,s=e.className,f=e.wrapperClassName;return a.default.createElement("section",{style:(0,o.default)((0,o.default)({},c.default.wrapper),{},{width:t,height:n}),className:f},!r&&a.default.createElement(i.default,{content:u}),a.default.createElement("div",{ref:l,style:(0,o.default)((0,o.default)({},c.default.fullWidth),!r&&c.default.hide),className:s}))}l.propTypes={width:u.default.oneOfType([u.default.number,u.default.string]).isRequired,height:u.default.oneOfType([u.default.number,u.default.string]).isRequired,loading:u.default.oneOfType([u.default.element,u.default.string]).isRequired,isEditorReady:u.default.bool.isRequired,className:u.default.string,wrapperClassName:u.default.string};var s=l;t.default=s},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(166)).default;t.default=o},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var u=function(e){var t=e.content;return o.default.createElement("div",{style:a},t)};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};t.default=r},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(106));var a=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),(0,o.default)((0,o.default)({},t),n)};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={type:"cancelation",msg:"operation is manually canceled"};var o=function(e){var t=!1,n=new Promise((function(n,o){e.then((function(e){return t?o(r):n(e)})),e.catch(o)}));return n.cancel=function(){return t=!0},n};t.default=o},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(126)),a=r(n(111)),u=n(174),i=r(n(175)),c=n(101),l=(0,u.create)({config:i.default,isInitialized:!1,configScriptSrc:null,resolve:null,reject:null}),s=(0,a.default)(l,2),f=s[0],d=s[1],p="monaco_init";function v(e){return e.urls?(console.warn("Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-react#config\n  "),{paths:{vs:e.urls.monacoBase}}):e}function g(e){return document.body.appendChild(e)}function h(e){var t=document.createElement("script");return e&&(t.src=e),t}function m(){var e=f((function(e){return{resolve:e.resolve}}));document.removeEventListener(p,m),e.resolve(window.monaco)}function y(e){var t=f((function(e){return{config:e.config,reject:e.reject}})),n=h("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return g(e)},n.onerror=t.reject,n}function b(){var e=f((function(e){return{configScriptSrc:e.configScriptSrc,config:e.config,reject:e.reject}})),t=h();return e.configScriptSrc?t.src=e.configScriptSrc:t.innerHTML="\n      require.config(".concat(JSON.stringify(e.config),");\n      require(['vs/editor/editor.main'], function() {\n        document.dispatchEvent(new Event('monaco_init'));\n      });\n    "),t.onerror=e.reject,t}var O=new Promise((function(e,t){return d({resolve:e,reject:t})})),w={config:function(e){var t=e.src,n=(0,o.default)(e,["src"]);d((function(e){return{configScriptSrc:t,config:(0,c.deepMerge)(e.config,v(n))}}))},init:function(){if(!f((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return Promise.resolve(window.monaco);document.addEventListener(p,m),(0,c.compose)(g,y,b)(),d({isInitialized:!0})}return(0,c.makeCancelable)(O)}};t.default=w},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function o(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return t.apply(n,[].concat(o,r))}}}function a(e){return{}.toString.call(e).includes("Object")}function u(e){return"function"==typeof e}n.r(t),n.d(t,"create",(function(){return d}));var i=o((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),c={changes:function(e,t){return a(t)||i("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&i("changeField"),t},selector:function(e){u(e)||i("selectorType")},handler:function(e){u(e)||a(e)||i("handlerType"),a(e)&&Object.values(e).some((function(e){return!u(e)}))&&i("handlersType")},initial:function(e){var t;e||i("initialIsRequired"),a(e)||i("initialType"),t=e,Object.keys(t).length||i("initialContent")}};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c.initial(e),c.handler(t);var n={current:e},a=o(g)(n,t),u=o(v)(n),i=o(c.changes)(e),l=o(p)(n);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return c.selector(e),e(n.current)}function f(e){r(a,u,i,l)(e)}return[s,f]}function p(e,t){return u(t)?t(e.current):t}function v(e,t){return e.current=s(s({},e.current),t),t}function g(e,t,n){return u(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}t.default={create:d}}])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs"}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),o=function(e){return(0,r.useEffect)(e,[])};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),o=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=(0,r.useRef)(!0);(0,r.useEffect)(o.current||!n?function(){o.current=!1}:e,t)};t.default=o},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(0),a=r(n(179)),u=(0,o.memo)(a.default);t.default=u},function(e,t,n){"use strict";var r=n(110),o=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(106)),u=o(n(111)),i=r(n(0)),c=o(n(1)),l=o(n(125)),s=n(101),f=n(127),d=o(n(128));function p(e){var t=e.original,n=e.modified,r=e.language,o=e.originalLanguage,c=e.modifiedLanguage,p=e.editorDidMount,v=e.theme,g=e.width,h=e.height,m=e.loading,y=e.options,b=e.className,O=e.wrapperClassName,w=(0,i.useState)(!1),j=(0,u.default)(w,2),M=j[0],x=j[1],E=(0,i.useState)(!0),_=(0,u.default)(E,2),P=_[0],k=_[1],S=(0,i.useRef)(null),T=(0,i.useRef)(null),C=(0,i.useRef)(null),D=(0,i.useRef)(p);(0,f.useMount)((function(){var e=s.monaco.init();return e.then((function(e){return(T.current=e)&&k(!1)})).catch((function(e){return"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e)})),function(){return S.current?R():e.cancel()}})),(0,f.useUpdate)((function(){S.current.getModel().modified.setValue(n)}),[n],M),(0,f.useUpdate)((function(){S.current.getModel().original.setValue(t)}),[t],M),(0,f.useUpdate)((function(){var e=S.current.getModel(),t=e.original,n=e.modified;T.current.editor.setModelLanguage(t,o||r),T.current.editor.setModelLanguage(n,c||r)}),[r,o,c],M),(0,f.useUpdate)((function(){T.current.editor.setTheme(v)}),[v],M),(0,f.useUpdate)((function(){S.current.updateOptions(y)}),[y],M);var A=(0,i.useCallback)((function(){var e=T.current.editor.createModel(t,o||r),a=T.current.editor.createModel(n,c||r);S.current.setModel({original:e,modified:a})}),[r,n,c,t,o]),N=(0,i.useCallback)((function(){S.current=T.current.editor.createDiffEditor(C.current,(0,a.default)({automaticLayout:!0},y)),A(),T.current.editor.defineTheme("dark",d.default["night-dark"]),T.current.editor.setTheme(v),x(!0)}),[y,v,A]);(0,i.useEffect)((function(){if(M){var e=S.current.getModel(),t=e.original,n=e.modified;D.current(n.getValue.bind(n),t.getValue.bind(t),S.current)}}),[M]),(0,i.useEffect)((function(){!P&&!M&&N()}),[P,M,N]);var R=function(){return S.current.dispose()};return i.default.createElement(l.default,{width:g,height:h,isEditorReady:M,loading:m,_ref:C,className:b,wrapperClassName:O})}p.propTypes={original:c.default.string,modified:c.default.string,language:c.default.string,originalLanguage:c.default.string,modifiedLanguage:c.default.string,editorDidMount:c.default.func,theme:c.default.string,width:c.default.oneOfType([c.default.number,c.default.string]),height:c.default.oneOfType([c.default.number,c.default.string]),loading:c.default.oneOfType([c.default.element,c.default.string]),options:c.default.object,className:c.default.string,wrapperClassName:c.default.string},p.defaultProps={editorDidMount:s.noop,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{}};var v=p;t.default=v},function(e,t,n){"use strict";var r=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(0),a=r(n(181)),u=(0,o.memo)(a.default);t.default=u},function(e,t,n){"use strict";var r=n(110),o=n(93);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(182)),u=o(n(126)),i=r(n(0)),c=o(n(1)),l=o(n(124)),s=n(101);function f(e){var t=e.value,n=e.onChange,r=e.editorDidMount,o=(0,u.default)(e,["value","onChange","editorDidMount"]),c=(0,i.useRef)(null),s=(0,i.useRef)(null),f=(0,i.useRef)(t);f.current=t;var d=(0,i.useCallback)((function(e){var t=c.current.getValue();if(f.current!==t){var r=n(e,t);"string"==typeof r&&t!==r&&c.current.setValue(r)}}),[n]),p=(0,i.useCallback)((function(){var e;s.current=null===(e=c.current)||void 0===e?void 0:e.onDidChangeModelContent(d)}),[d]);(0,i.useEffect)((function(){return p(),function(){var e;return null===(e=s.current)||void 0===e?void 0:e.dispose()}}),[p]);var v=(0,i.useCallback)((function(e,t){c.current=t,p(),r(e,t)}),[p,r]);return i.default.createElement(l.default,(0,a.default)({value:t,editorDidMount:v,_isControlledMode:!0},o))}f.propTypes={value:c.default.string,editorDidMount:c.default.func,onChange:c.default.func},f.defaultProps={editorDidMount:s.noop,onChange:s.noop};var d=f;t.default=d},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var u=a>=0?arguments[a]:e.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,o="/"===u.charAt(0))}return(o?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var a=t.isAbsolute(e),u="/"===o(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!a).join("/"))||a||(e="."),e&&u&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),a=r(n.split("/")),u=Math.min(o.length,a.length),i=u,c=0;c<u;c++)if(o[c]!==a[c]){i=c;break}var l=[];for(c=i;c<o.length;c++)l.push("..");return(l=l.concat(a.slice(i))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!o){r=a;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,a=0,u=e.length-1;u>=0;--u){var i=e.charCodeAt(u);if(47!==i)-1===r&&(o=!1,r=u+1),46===i?-1===t?t=u:1!==a&&(a=1):-1!==t&&(a=-1);else if(!o){n=u+1;break}}return-1===t||-1===r||0===a||1===a&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(184))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,l=[],s=!1,f=-1;function d(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!s){var e=i(d);s=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new v(e,t)),1!==l.length||s||i(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}])]);