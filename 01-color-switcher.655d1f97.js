function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequire7bc7;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},e.parcelRequire7bc7=r);var a=r("eWCmQ");const l=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let i=null;l.addEventListener("click",(function(){""===l.getAttribute("data-start")?(i=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t,console.log(t)}),1e3),l.setAttribute("data-start","active")):t(a).Notify.warning("Already running")})),d.addEventListener("click",(function(){clearInterval(i),l.setAttribute("data-start",""),document.body.style.backgroundColor="#FFFFFF",t(a).Notify.info("Color changing was stopped and set to default")}));
//# sourceMappingURL=01-color-switcher.655d1f97.js.map
