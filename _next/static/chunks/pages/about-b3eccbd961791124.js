(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3454:function(e,t,r){"use strict";e.exports=r.g.process||r(7663)},8961:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(414)}])},414:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(5988);t.default=function(){return(0,n.jsxs)("div",{className:"jsx-30fae6a941df8d19 container",children:[(0,n.jsx)("h1",{className:"jsx-30fae6a941df8d19",children:"Showcase for p5 sketches"}),(0,n.jsxs)("p",{className:"jsx-30fae6a941df8d19",children:["This website was made to show the sketches with a preview image, this is much more impressive than the stock p5js",(0,n.jsx)("a",{href:"https://editor.p5js.org/mcpe071202/sketches",target:"_blank",rel:"noreferrer",className:"jsx-30fae6a941df8d19",children:" sketch list."}),(0,n.jsx)("br",{className:"jsx-30fae6a941df8d19"}),(0,n.jsx)("br",{className:"jsx-30fae6a941df8d19"}),"To add new sketches, you only need to edit the sketchData.json file in the root folder. This static file could be replaced with a request to any database. The code for this website is available on my",(0,n.jsx)("a",{href:"https://github.com/Jaydeep-P/p5js-showcase",target:"_blank",rel:"noreferrer",className:"jsx-30fae6a941df8d19",children:" Github"}),(0,n.jsx)("br",{className:"jsx-30fae6a941df8d19"}),(0,n.jsx)("br",{className:"jsx-30fae6a941df8d19"}),"I made this website as a successor to my old website that was made using plain HTML and CSS. I have used NextJs for this website, primary reason for doing so was to automate the page generation (Which I had to do by hand on the older version).",(0,n.jsx)("br",{className:"jsx-30fae6a941df8d19"}),"This is also my first ever project using NextJs, please forgive me for any bad practices."]}),(0,n.jsx)(s.default,{id:"30fae6a941df8d19",children:".container.jsx-30fae6a941df8d19{}\nh1.jsx-30fae6a941df8d19{color:#dfdfdf;\ntext-align:center;\nfont-size:4vh;\nmargin:2vw}\np.jsx-30fae6a941df8d19{color:#dfdfdf;\nwidth:70%;\nmargin:5% 15%;\ntext-align:left;\nfont-size:2.7vh}\np.jsx-30fae6a941df8d19 a.jsx-30fae6a941df8d19{color:#4078c0}\n@media only screen and (max-width:600px) {h1.jsx-30fae6a941df8d19{font-size:5vw}\np.jsx-30fae6a941df8d19{font-size:3.5vw}}"})]})}},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,a=[],c=!1,l=-1;function d(){c&&u&&(c=!1,u.length?a=u.concat(a):l=-1,a.length&&h())}function h(){if(!c){var e=o(d);c=!0;for(var t=a.length;t;){for(u=a,a=[];++l<t;)u&&u[l].run();l=-1,t=a.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new f(e,t)),1!==a.length||c||o(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,n),o=!1}finally{o&&delete r[e]}return i.exports}n.ab="//";var s=n(162);e.exports=s}()},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},9035:function(e,t,r){"use strict";t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;i[n]||(i[n]="jsx-"+(0,s.default)(e+"-"+r));return i[n]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;i[r]||(i[r]=t.replace(/__jsx-style-dynamic-selector/g,e));return i[r]};var n,s=(n=r(9887))&&n.__esModule?n:{default:n};var i={}},4287:function(e,t,r){"use strict";var n=r(3454);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof n&&n.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,u=void 0===s?i:s,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;a(o(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,r,n,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];a(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&a(o(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,r),n&&s(t,n),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=u},7884:function(e,t,r){"use strict";t.default=c;var n,s=(n=r(7294))&&n.__esModule?n:{default:n},i=r(8122),o=r(9035);var u=s.default.useInsertionEffect||s.default.useLayoutEffect,a="undefined"!==typeof window?(0,i.createStyleRegistry)():void 0;function c(e){var t=a||(0,i.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(u((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}c.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,o.computeId)(t,r)})).join(" ")}},8122:function(e,t,r){"use strict";t.__esModule=!0,t.createStyleRegistry=l,t.StyleRegistry=function(e){var t=e.registry,r=e.children,n=(0,s.useContext)(c),i=(0,s.useState)((function(){return n||t||l()}))[0];return s.default.createElement(c.Provider,{value:i},r)},t.useStyleRegistry=function(){return(0,s.useContext)(c)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var n,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(n=r(4287))&&n.__esModule?n:{default:n},o=r(9035);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var a=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e[0],n=e[1];return s.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var s=(0,o.computeId)(n,r);return{styleId:s,rules:Array.isArray(t)?t.map((function(e){return(0,o.computeSelector)(s,e)})):[(0,o.computeSelector)(s,t)]}}return{styleId:(0,o.computeId)(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=a;var c=(0,s.createContext)(null);function l(){return new a}t.StyleSheetContext=c},5988:function(e,t,r){e.exports=r(7884)}},function(e){e.O(0,[774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);