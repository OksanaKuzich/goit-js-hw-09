!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=r);var o=r("h6c0i"),i=document.querySelector(".form");function a(e,n){var t=Math.random()>.3;return new Promise((function(r,o){t?r({position:e,delay:n}):o({position:e,delay:n})}))}i.addEventListener("submit",(function(e){e.preventDefault();var n=Number(e.currentTarget.delay.value),t=Number(e.currentTarget.step.value),r=Number(e.currentTarget.amount.value);if(n<0||t<0)return o.Notify.failure("Please enter time"),void i.reset();for(var u=0;u<r;u++){a(u+1,n+t*u).then((function(e){var n=e.position,t=e.delay;setTimeout((function(){o.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}),t)})).catch((function(e){var n=e.position,t=e.delay;setTimeout((function(){o.Notify.warning("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)}))}i.reset()}))}();
//# sourceMappingURL=03-promises.b1567690.js.map
