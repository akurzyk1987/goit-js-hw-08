function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var i,r,o,f,a,u,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,a=setTimeout(w,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=o}function w(){var e=p();if(h(e))return T(e);a=setTimeout(w,function(e){var n=t-(e-u);return d?v(n,o-(e-c)):n}(e))}function T(e){return a=void 0,m&&i?y(e):(i=r=void 0,f)}function x(){var e=p(),n=h(e);if(i=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(d)return a=setTimeout(w,t),y(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(g(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=r=a=void 0},x.flush=function(){return void 0===a?f:T(p())},x}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");var j;y.elements.message.value=null!==(j=localStorage.getItem("feedback-form-state"))&&void 0!==j?j:"",y.addEventListener("input",e(t)((e=>{localStorage.setItem("feedback-form-state",e.target.value)}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),y.reset()}));
//# sourceMappingURL=03-feedback.1a66d5f7.js.map
