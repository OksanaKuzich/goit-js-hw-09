var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire7bc7=n);var o=n("iQIUW");const i=document.querySelector(".form");function u(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{r?n({position:e,delay:t}):o({position:e,delay:t})}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.delay.value),r=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);if(t<0||r<0)return o.Notify.failure("Please enter time"),void i.reset();for(let e=0;e<n;e++){u(e+1,t+r*e).then((({position:e,delay:t})=>{setTimeout((()=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>{o.Notify.warning(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}i.reset()}));
//# sourceMappingURL=03-promises.fb2ee1d0.js.map