!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),d?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=b();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?y(e):(r=o=void 0,u)}function w(){var e=b(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=x(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(x(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};j.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===j.email.value||""===j.textarea.value.trim())alert("Please fill all field");else{var t={email:j.email.value,message:j.textarea.value};console.log(t),j.form.reset(),localStorage.removeItem(O)}})),j.form.addEventListener("input",e(t)((function(e){var t={email:j.email.value,message:j.textarea.value};localStorage.setItem(O,JSON.stringify(t))}),500));var S,O="feedback-form-state";(S=JSON.parse(localStorage.getItem(O)))&&(j.email.value=S.email,j.textarea.value=S.message)}();
//# sourceMappingURL=03-feedback.d3ebab5a.js.map
