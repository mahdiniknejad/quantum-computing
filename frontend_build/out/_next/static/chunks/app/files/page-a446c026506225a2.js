(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{5150:function(e,t,n){Promise.resolve().then(n.bind(n,2742))},2742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r,o,i=n(9268);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e){return function t(){for(var n=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function f(e){return({}).toString.call(e).includes("Object")}function h(e){return"function"==typeof e}var g=d(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),p={changes:function(e,t){return f(t)||g("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&g("changeField"),t},selector:function(e){h(e)||g("selectorType")},handler:function(e){h(e)||f(e)||g("handlerType"),f(e)&&Object.values(e).some(function(e){return!h(e)})&&g("handlersType")},initial:function(e){e||g("initialIsRequired"),f(e)||g("initialType"),Object.keys(e).length||g("initialContent")}};function m(e,t){return h(t)?t(e.current):t}function y(e,t){return e.current=s(s({},e.current),t),t}function b(e,t,n){return h(t)?t(e.current):Object.keys(n).forEach(function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])}),n}var v={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},j=(r=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.apply(t,[].concat(o,r))}})(v),w={config:function(e){return e||j("configIsRequired"),({}).toString.call(e).includes("Object")||j("configType"),e.urls?(console.warn(v.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},O=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},x={type:"cancelation",msg:"operation is manually canceled"},M=function(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r(x):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n},E=function(e){if(Array.isArray(e))return e}(o=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p.initial(e),p.handler(t);var n={current:e},r=d(b)(n,t),o=d(y)(n),i=d(p.changes)(e),c=d(m)(n);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return p.selector(e),e(n.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(r,o,i,c)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(o,2)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),k=E[0],P=E[1];function S(e){return document.body.appendChild(e)}function R(e){var t,n,r=k(function(e){return{config:e.config,reject:e.reject}}),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function N(){var e=k(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){C(t),e.resolve(t)},function(t){e.reject(t)})}function C(e){k().monaco||P({monaco:e})}var I=new Promise(function(e,t){return P({resolve:e,reject:t})}),T={config:function(e){var t=w.config(e),n=t.monaco,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["monaco"]);P(function(e){return{config:function e(t,n){return Object.keys(n).forEach(function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))}),a(a({},t),n)}(e.config,r),monaco:n}})},init:function(){var e=k(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(P({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),M(I);if(window.monaco&&window.monaco.editor)return C(window.monaco),e.resolve(window.monaco),M(I);O(S,R)(N)}return M(I)},__getMonacoInstance:function(){return k(function(e){return e.monaco})}},A=n(6006),V={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},q={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},D=function({children:e}){return A.createElement("div",{style:q.container},e)},L=(0,A.memo)(function({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperProps:c}){return A.createElement("section",{style:{...V.wrapper,width:e,height:t},...c},!n&&A.createElement(D,null,r),A.createElement("div",{ref:o,style:{...V.fullWidth,...!n&&V.hide},className:i}))}),z=function(e){(0,A.useEffect)(e,[])},_=function(e,t,n=!0){let r=(0,A.useRef)(!0);(0,A.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)};function F(){}function B(e,t,n,r){return e.editor.getModel(U(e,r))||e.editor.createModel(t,n,r?U(e,r):void 0)}function U(e,t){return e.Uri.parse(t)}(0,A.memo)(function({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:u=!1,theme:l="light",loading:s="Loading...",options:d={},height:f="100%",width:h="100%",className:g,wrapperProps:p={},beforeMount:m=F,onMount:y=F}){let[b,v]=(0,A.useState)(!1),[j,w]=(0,A.useState)(!0),O=(0,A.useRef)(null),x=(0,A.useRef)(null),M=(0,A.useRef)(null),E=(0,A.useRef)(y),k=(0,A.useRef)(m),P=(0,A.useRef)(!1);z(()=>{let e=T.init();return e.then(e=>(x.current=e)&&w(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let t;return O.current?(t=O.current?.getModel(),void(a||t?.original?.dispose(),u||t?.modified?.dispose(),O.current?.dispose())):e.cancel()}}),_(()=>{let e=O.current.getModifiedEditor();e.getOption(x.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[t],b),_(()=>{O.current?.getModel()?.original.setValue(e||"")},[e],b),_(()=>{let{original:e,modified:t}=O.current.getModel();x.current.editor.setModelLanguage(e,r||n||"text"),x.current.editor.setModelLanguage(t,o||n||"text")},[n,r,o],b),_(()=>{x.current?.editor.setTheme(l)},[l],b),_(()=>{O.current?.updateOptions(d)},[d],b);let S=(0,A.useCallback)(()=>{if(!x.current)return;k.current(x.current);let a=B(x.current,e||"",r||n||"text",i||""),u=B(x.current,t||"",o||n||"text",c||"");O.current?.setModel({original:a,modified:u})},[n,t,o,e,r,i,c]),R=(0,A.useCallback)(()=>{!P.current&&M.current&&(O.current=x.current.editor.createDiffEditor(M.current,{automaticLayout:!0,...d}),S(),x.current?.editor.setTheme(l),v(!0),P.current=!0)},[d,l,S]);return(0,A.useEffect)(()=>{b&&E.current(O.current,x.current)},[b]),(0,A.useEffect)(()=>{j||b||R()},[j,b,R]),_(()=>{if(O.current&&x.current){let t=O.current.getOriginalEditor(),o=B(x.current,e||"",r||n||"text",i||"");o!==t.getModel()&&t.setModel(o)}},[i],b),_(()=>{if(O.current&&x.current){let e=O.current.getModifiedEditor(),r=B(x.current,t||"",o||n||"text",c||"");r!==e.getModel()&&e.setModel(r)}},[c],b),A.createElement(L,{width:h,height:f,isEditorReady:b,loading:s,_ref:M,className:g,wrapperProps:p})});var Y=function(e){let t=(0,A.useRef)();return(0,A.useEffect)(()=>{t.current=e},[e]),t.current},W=new Map,Z=(0,A.memo)(function({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:c="light",line:a,loading:u="Loading...",options:l={},overrideServices:s={},saveViewState:d=!0,keepCurrentModel:f=!1,width:h="100%",height:g="100%",className:p,wrapperProps:m={},beforeMount:y=F,onMount:b=F,onChange:v,onValidate:j=F}){let[w,O]=(0,A.useState)(!1),[x,M]=(0,A.useState)(!0),E=(0,A.useRef)(null),k=(0,A.useRef)(null),P=(0,A.useRef)(null),S=(0,A.useRef)(b),R=(0,A.useRef)(y),N=(0,A.useRef)(),C=(0,A.useRef)(r),I=Y(i),V=(0,A.useRef)(!1),q=(0,A.useRef)(!1);z(()=>{let e=T.init();return e.then(e=>(E.current=e)&&M(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>k.current?void(N.current?.dispose(),f?d&&W.set(i,k.current.saveViewState()):k.current.getModel()?.dispose(),k.current.dispose()):e.cancel()}),_(()=>{let c=B(E.current,e||r||"",t||o||"",i||n||"");c!==k.current?.getModel()&&(d&&W.set(I,k.current?.saveViewState()),k.current?.setModel(c),d&&k.current?.restoreViewState(W.get(i)))},[i],w),_(()=>{k.current?.updateOptions(l)},[l],w),_(()=>{k.current&&void 0!==r&&(k.current.getOption(E.current.editor.EditorOption.readOnly)?k.current.setValue(r):r===k.current.getValue()||(q.current=!0,k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),k.current.pushUndoStop(),q.current=!1))},[r],w),_(()=>{let e=k.current?.getModel();e&&o&&E.current?.editor.setModelLanguage(e,o)},[o],w),_(()=>{void 0!==a&&k.current?.revealLine(a)},[a],w),_(()=>{E.current?.editor.setTheme(c)},[c],w);let D=(0,A.useCallback)(()=>{if(!(!P.current||!E.current)&&!V.current){R.current(E.current);let a=i||n,u=B(E.current,r||e||"",t||o||"",a||"");k.current=E.current?.editor.create(P.current,{model:u,automaticLayout:!0,...l},s),d&&k.current.restoreViewState(W.get(a)),E.current.editor.setTheme(c),O(!0),V.current=!0}},[e,t,n,r,o,i,l,s,d,c]);return(0,A.useEffect)(()=>{w&&S.current(k.current,E.current)},[w]),(0,A.useEffect)(()=>{x||w||D()},[x,w,D]),C.current=r,(0,A.useEffect)(()=>{w&&v&&(N.current?.dispose(),N.current=k.current?.onDidChangeModelContent(e=>{q.current||v(k.current.getValue(),e)}))},[w,v]),(0,A.useEffect)(()=>{if(w){let e=E.current.editor.onDidChangeMarkers(e=>{let t=k.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=E.current.editor.getModelMarkers({resource:t});j?.(e)}});return()=>{e?.dispose()}}return()=>{}},[w,j]),A.createElement(L,{width:h,height:g,isEditorReady:w,loading:u,_ref:P,className:p,wrapperProps:m})}),$=n(5846),G=n.n($),H=n(6008),J=n(4214),K=e=>{let t=(0,H.useRouter)();return(0,i.jsx)("div",{className:"absolute w-[100%] h-[100vh] bg-gray-100 opacity-75 top-0 z-0 overflow-hidden ",children:(0,i.jsxs)("div",{className:"bg-white  border rounded font-bold shadow-2xl p-5 w-[30%] opacity-[100%] top-[50%] min-h-[150px] text-center translate-x-52 z-10 translate-y-[-52%] absolute right-[50%]",children:[(0,i.jsx)("h1",{children:e.title}),(0,i.jsx)("button",{className:"btn mt-10 btn-red",onClick:()=>{t.push("/signin")},children:"Ok!"})]})})},Q=function(e){let[t,n]=(0,A.useState)(),[r,o]=(0,A.useState)(!1),c=(0,A.useRef)(null),a=async e=>{e.preventDefault();try{console.log(document.getElementById("name-input").value,c.current.getValue());let e=new FormData;e.append("name",document.getElementById("name-input").value),e.append("code",c.current.getValue());let r={method:"post",maxBodyLength:1/0,url:"https://api.quctech.com/file/",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("quctech-token"))},data:e};J.Z.request(r).then(e=>{console.log(e),n(t=>[...t,e.data]),console.log(t)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};return(0,A.useEffect)(()=>{if(localStorage.getItem("quctech-token")){o(!0);let e={method:"get",maxBodyLength:1/0,url:"https://api.quctech.com/file/",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("quctech-token"))}};J.Z.request(e).then(e=>{console.log(e.data),n(e.data)}).catch(e=>{console.log(e)})}},[]),(0,i.jsx)(i.Fragment,{children:r?(0,i.jsxs)("div",{className:"container mx-auto my-5",children:[(0,i.jsxs)("div",{div:!0,className:"flex items-center justify-between mb-2",children:[(0,i.jsx)("h1",{className:"text-3xl font-bold mb-3",children:"My files"}),(0,i.jsx)("h1",{className:"text-3xl font-bold mb-3",children:"Create File"})]}),(0,i.jsxs)("div",{className:"flex justify-center gap-5",children:[(0,i.jsx)("ul",{className:"border w-[20%] dark:border-neutral-700/50 rounded p-2",children:(null==t?void 0:t.length)>0?t.map(e=>(0,i.jsx)(G(),{href:"/files/".concat(e.id),children:(0,i.jsx)("li",{className:"hover:bg-neutral-100 p-3 border-b border-gray-500 overflow-auto dark:hover:bg-neutral-800 border-b",children:(0,i.jsx)("h1",{children:e.name})})},e.id)):(0,i.jsx)("li",{className:"text-center bg-neutral-100 px-5 py-3",children:(0,i.jsx)("p",{onClick:()=>console.log(t),className:"text-neutral-500 mb-2",children:"You don`t have any files yet."})})}),(0,i.jsxs)("div",{className:" w-[80%]",children:[(0,i.jsx)("input",{placeholder:"name",type:"text",className:"form-input",id:"name-input"}),(0,i.jsx)(Z,{height:"50vh",defaultLanguage:"python",theme:"vs-dark",onMount:(e,t)=>{c.current=e}}),(0,i.jsx)("div",{className:"mt-3",children:(0,i.jsx)("button",{onClick:a,type:"submit",className:"btn btn-black",children:"Submit file"})}),"   "]})]})]}):(0,i.jsx)(K,{title:"You are not authorized"})})}},6008:function(e,t,n){e.exports=n(794)}},function(e){e.O(0,[629,214,253,769,744],function(){return e(e.s=5150)}),_N_E=e.O()}]);