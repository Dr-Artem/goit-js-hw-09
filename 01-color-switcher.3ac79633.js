const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;t.addEventListener("click",(function(){""===t.getAttribute("data-start")?(o=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t,console.log(t)}),1e3),t.setAttribute("data-start","active")):alert("Already running")})),e.addEventListener("click",(function(){clearInterval(o),document.body.style.backgroundColor="#FFFFFF",console.log("Color changing was stopped and set to default")}));
//# sourceMappingURL=01-color-switcher.3ac79633.js.map
