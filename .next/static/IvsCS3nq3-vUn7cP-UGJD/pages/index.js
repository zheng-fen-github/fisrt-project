(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),s=n("lwAK");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,s=t.hasQuery;return n||a&&(void 0!==s&&s)}e.isInAmpMode=o,e.useAmp=function(){return o(a.default.useContext(s.AmpStateContext))}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),s=r(n("Xuae")),o=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var m=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(u,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var s=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);t.has(o)?s=!1:t.add(o)}switch(a.type){case"title":case"base":e.has(a.type)?s=!1:e.add(a.type);break;case"meta":for(var i=0,c=m.length;i<c;i++){var l=m[i];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var u=a.props[l],f=r[l]||new Set;f.has(u)?s=!1:(f.add(u),r[l]=f)}}}return s}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var d=s.default();function p(t){var e=t.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}p.rewind=d.rewind,e.default=p},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},CsS9:function(t,e,n){"use strict";var r=n("MX0m"),a=n.n(r),s=n("q1tI"),o=n.n(s).a.createElement;e.a=function(t){var e=t.color,n=e||"#72BDE8";return o("div",{className:a.a.dynamic([["2100974694",[n]]])+" content"},o("div",{className:a.a.dynamic([["2100974694",[n]]])+" one"}),o("div",{className:a.a.dynamic([["2100974694",[n]]])+" two"}),o("div",{className:a.a.dynamic([["2100974694",[n]]])+" three"}),o(a.a,{id:"2100974694",dynamic:[n]},[".content.__jsx-style-dynamic-selector{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:40px;height:40px;border-radius:20px;background:".concat(n,";margin:0 6px;}"),".one.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s infinite;animation:go-__jsx-style-dynamic-selector 2s infinite;}",".two.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;}",".three.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;}","@-webkit-keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}"]))}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.HeadManagerContext=a.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),s=n("Bnag");t.exports=function(t){return r(t)||a(t)||s()}},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("MX0m"),a=n.n(r),s=n("q1tI"),o=n.n(s),i=o.a.createElement;var c=function(){return i("div",{id:"logo",className:"jsx-3920023039"},i("div",{className:"jsx-3920023039 logobox"},i("div",{className:"jsx-3920023039 logo-left"},i("img",{src:"/logo-left.png",alt:"logo-left",className:"jsx-3920023039"})),i("div",{className:"jsx-3920023039 logo-right"},i("img",{src:"/logo-right.png",alt:"logo-right",className:"jsx-3920023039"}))),i(a.a,{id:"3920023039"},["#logo.jsx-3920023039{height:10%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:20vh;}",".logobox.jsx-3920023039{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".logo-left.jsx-3920023039,.logo-right.jsx-3920023039{height:100%;}",".logo-left.jsx-3920023039>img.jsx-3920023039,.logo-right.jsx-3920023039>img.jsx-3920023039{height:100%;}"]))},l=n("o0o1"),u=n.n(l),m=o.a.createElement,f=o.a.forwardRef((function(t,e){var n=t.event,r=t.buevent,o=t.type;return Object(s.useEffect)((function(){e.current.addEventListener("transitionend",(function(t){t.currentTarget.classList.contains("account")&&(0==getComputedStyle(t.currentTarget).opacity&&(t.currentTarget.style.display="none"))}))}),[]),m("div",{ref:e,className:"jsx-1250353993 "+(o||"")},m("label",{htmlFor:o,className:"jsx-1250353993"},"account"==o?"Email or account":"password"),m("input",{type:"account"==o?"text":"password",name:o,id:o,onFocus:function(t){t.target.previousElementSibling.classList.add("inputstatus"),n(1)},onInput:function(t){""!==t.target.value?r(1):r(0)},onBlur:function(t){n(0);var e=t.target;""===e.value&&e.previousElementSibling.classList.remove("inputstatus")},required:!0,className:"jsx-1250353993"}),m(a.a,{id:"1250353993"},[".account.jsx-1250353993{opacity:1;-webkit-transition:all 0.7s;transition:all 0.7s;}",".password.jsx-1250353993{opacity:0;-webkit-transition:all 0.7s;transition:all 0.7s;position:absolute;width:100%;top:0;}","input.jsx-1250353993{width:100%;height:5vh;border:none;background:none;outline:none;font-size:3vh;position:relative;color:white;display:block;z-index:2;}",".account.jsx-1250353993 input.jsx-1250353993{z-index:10;}","label.jsx-1250353993{color:#eee;font-size:3vh;position:absolute;top:0;-webkit-transition:all 0.3s;transition:all 0.3s;display:block;}",".inputstatus.jsx-1250353993{top:-3.5vh;font-size:2vh;margin:0.5vh 0;opacity:0.5;-webkit-transition:all 0.3s;transition:all 0.3s;}"]))})),d=n("nOHt"),p=n.n(d),x=n("CsS9"),h=o.a.createElement;var b=function(t){var e,n,r=t.Ev,i=Object(s.useState)(!1),c=i[0],l=i[1],m=Object(s.useState)(!1),d=m[0],b=m[1],v=o.a.createRef(),w=o.a.createRef(),g=function(t){t<1?n.classList.remove("require"):n.classList.add("require")},j=function(t){t<1?e.classList.remove("buttonstatus"):e.classList.add("buttonstatus")};Object(s.useEffect)((function(){y()}),[]);var y=function(){v.current.children[1].focus()};return h("div",{id:"accform",className:"jsx-608577747"},h("form",{onSubmit:function(t){var e;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),e=new FormData(t.target),b(!0),n.next=5,u.a.awrap(fetch("http://localhost:3001/login",{method:"POST",body:e,credentials:"include"}));case 5:n.sent.ok?(console.log("alright"),p.a.push("/home")):(b(!1),r("\u5bc6\u7801\u9519\u8bef"));case 7:case"end":return n.stop()}}),null,null,null,Promise)},className:"jsx-608577747"},h("div",{className:"jsx-608577747 div"},h(f,{event:g,buevent:j,type:"account",ref:v}),h(f,{event:g,buevent:j,type:"password",ref:w})),h("div",{ref:function(t){return n=t},className:"jsx-608577747 anima"}),h("button",{ref:function(t){return e=t},onClick:function(t){if(""===v.current.children[1].value)return r("\u8bf7\u8f93\u5165\u8d26\u53f7");if(!c){t.preventDefault(),n.classList.add("require");var a=v.current.children[1].value;fetch("http://localhost:3001/login/".concat(a),{method:"GET"}).then((function(t){try{t.ok?(s(),l(!0)):(n.classList.remove("require"),r("\u8d26\u53f7\u4e0d\u5b58\u5728"))}catch(e){console.log(e)}}));var s=function(){v.current.style.opacity=0,w.current.style.opacity=1,w.current.style.visibility=!0,n.classList.remove("require"),e.classList.remove("buttonstatus")}}},className:"jsx-608577747"},d?h(x.a,{color:"#1f2738"}):"continue")),h(a.a,{id:"608577747"},["#accform.jsx-608577747{width:30%;margin:0 auto;margin-top:10vh;position:relative;-webkit-transition:display 1s;transition:display 1s;}","@media (max-width:900px){#accform.jsx-608577747{width:80%;}}","#accform.jsx-608577747 .div.jsx-608577747{min-height:5vh;}","#accform.jsx-608577747 form.jsx-608577747{position:relative;}","#accform.jsx-608577747 button.jsx-608577747{margin-top:3vh;width:100%;height:6vh;border-radius:6px;font-size:3vh;color:white;background:#1f2738;display:block;opacity:0.81;border:none;-webkit-transition:all 0.4s;transition:all 0.4s;}","#accform.jsx-608577747 .buttonstatus.jsx-608577747{background:white;color:#1f2738;opacity:1;-webkit-transition:all 0.4s;transition:all 0.4s;}","#accform.jsx-608577747 .require.jsx-608577747{-webkit-animation:account-jsx-608577747 1.5s infinite;animation:account-jsx-608577747 1.5s infinite;}","#accform.jsx-608577747 div.anima.jsx-608577747{width:100%;height:2px;background:white;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);-webkit-transform-origin:right 50%;-ms-transform-origin:right 50%;transform-origin:right 50%;}","#accform.jsx-608577747 div.go.jsx-608577747{height:2px;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transform-origin:left 50%;-ms-transform-origin:left 50%;transform-origin:left 50%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}","@-webkit-keyframes account-jsx-608577747{0%{background:#1f273b;}25%{background:#1c3255;}50%{background:#495e87;}75%{background:#7482ab;}100%{background:#1f273b;}}","@keyframes account-jsx-608577747{0%{background:#1f273b;}25%{background:#1c3255;}50%{background:#495e87;}75%{background:#7482ab;}100%{background:#1f273b;}}"]))},v=o.a.createElement;var w=function(t){var e=t.errorEv,n=t.closeEv,r=Object(s.useState)(!1),o=r[0],i=r[1];return v("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget;i(!0),fetch("http://localhost:3001/login/registered",{method:"POST",body:new FormData(t.currentTarget)}).then((function(t){if(t.ok)return t.json();i(!1),t.json().then((function(t){console.log(t),t.includes("account")&&(r.account.closest(".account").classList.add("error"),e("\u8d26\u53f7\u5df2\u7ecf\u88ab\u4f7f\u7528")),t.includes("email")&&(r.email.closest(".email").classList.add("error"),e("\u8d26\u53f7\u5df2\u7ecf\u88ab\u4f7f\u7528"))}))})).then((function(t){if(t)try{Array.from(r.querySelectorAll(".error")).forEach((function(t){return t.classList.remove("error")})),e(""),n(),r.querySelectorAll("input").forEach((function(t){"submit"!==t.type&&(console.log("test"),t.value="")}))}catch(a){console.log(a)}}))},className:"jsx-1797463222"},v("div",{className:"jsx-1797463222 account"},v("input",{type:"text",name:"account",id:"account",placeholder:"account",required:!0,className:"jsx-1797463222"})),v("div",{className:"jsx-1797463222 email"},v("input",{type:"email",name:"email",id:"email",placeholder:"email",required:!0,className:"jsx-1797463222"})),v("div",{className:"jsx-1797463222 password"},v("input",{type:"password",name:"password",id:"password",placeholder:"password",required:!0,className:"jsx-1797463222"})),v("div",{className:"jsx-1797463222 submit"},o?v(x.a,{color:"#495e87"}):v("input",{type:"submit",value:"Continue",className:"jsx-1797463222"})),v(a.a,{id:"1797463222"},["form.jsx-1797463222{width:80%;background:white;margin:0 auto;margin-top:8vh;padding:4vh 0;border-radius:12px;box-shadow:0 0 2px #eee;}","form.jsx-1797463222>div.jsx-1797463222{width:80%;margin:0 auto;margin-bottom:4vh;border-radius:12px;}","form.jsx-1797463222 .submit.jsx-1797463222{margin-bottom:0;}","form.jsx-1797463222 input.jsx-1797463222{width:100%;height:6vh;font-size:3vh;border:solid #eee 2px;border-radius:12px;box-shadow:0 0 4px #eee;box-sizing:border-box;padding:2vh;outline:none;-webkit-animation:load-jsx-1797463222 1s;animation:load-jsx-1797463222 1s;}","form.jsx-1797463222 input[type='submit'].jsx-1797463222{color:white;background:#495e87;padding:0;border:none;}",".error.jsx-1797463222{box-shadow:0 0px 4px red;}","form.jsx-1797463222 input[type='submit'].jsx-1797463222:hover{box-shadow:0 0 8px #888;}","form.jsx-1797463222 input[type='submit'].jsx-1797463222:active{box-shadow:0 0 0;}","@-webkit-keyframes load-jsx-1797463222{0%{opacity:0;-webkit-transform:translate(100px,0);-ms-transform:translate(100px,0);transform:translate(100px,0);}100%{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}","@keyframes load-jsx-1797463222{0%{opacity:0;-webkit-transform:translate(100px,0);-ms-transform:translate(100px,0);transform:translate(100px,0);}100%{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}"]))},g=o.a.createElement;var j=function(){return g("div",{className:"jsx-3954397040 title"},g("h2",{className:"jsx-3954397040"},"Create Your Account"),g(a.a,{id:"3954397040"},[".title.jsx-3954397040{color:white;font-size:2vh;width:100%;text-align:center;margin-top:10vh;-webkit-animation:scale-jsx-3954397040 0.6s;animation:scale-jsx-3954397040 0.6s;}","@-webkit-keyframes scale-jsx-3954397040{0%{-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}","@keyframes scale-jsx-3954397040{0%{-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}"]))},y=o.a.createElement;var k=function(t){var e=t.error,n=t.errorEv,r=t.aaastyle;return Object(s.useEffect)((function(){setTimeout((function(){return n("")}),1500)})),e?y("div",{onClick:function(){return n("")},className:"jsx-1053933292 "+(r||"")},y("h2",{className:"jsx-1053933292"},e),y(a.a,{id:"1053933292"},["div.jsx-1053933292{background:black;height:auto;width:80%;-webkit-transform:translateX(13%);-ms-transform:translateX(13%);transform:translateX(13%);margin-top:20px;color:white;text-align:center;border-radius:8px;position:relative;}",".errorStyle.jsx-1053933292{background:red;width:30%;position:absolute;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}","@media (max-width:780px){.errorStyle.jsx-1053933292{width:80%;}}"])):null},_=o.a.createElement,N=o.a.forwardRef((function(t,e){var n=Object(s.useState)(""),r=n[0],o=n[1],i=function(){var t=e.current;t.style.transform="translate(-50%,-1000px)";t.addEventListener("transitionend",(function(t){t.target.hidden=!0}))},c=function(t){o(t)};return _("div",{ref:e,className:"jsx-2374700099 signUP"},_("div",{onClick:i,className:"jsx-2374700099 close"},_("svg",{t:"1577522468145",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2589",width:"50",height:"50",className:"jsx-2374700099 icon"},_("path",{d:"M633.749333 390.250667a21.333333 21.333333 0 0 0-30.165333 0L512 481.834667l-91.584-91.584a21.333333 21.333333 0 0 0-30.165333 30.165333L481.834667 512l-91.584 91.584a21.333333 21.333333 0 1 0 30.165333 30.165333L512 542.165333l91.584 91.584a21.333333 21.333333 0 0 0 30.165333-30.165333L542.165333 512l91.584-91.584a21.333333 21.333333 0 0 0 0-30.165333z",fill:"#2c2c2c","p-id":"2591",className:"jsx-2374700099"}))),_(j,null),_(w,{errorEv:c,closeEv:i}),_(k,{error:r,errorEv:c}),_(a.a,{id:"2374700099"},[".signUP.jsx-2374700099{width:800px;height:100vh;position:fixed;top:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:#495e87;padding:4vh;box-sizing:border-box;overflow:hidden;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;-webkit-animation:open-jsx-2374700099 0.2s;animation:open-jsx-2374700099 0.2s;z-index:11;}","@media (max-width:800px){.signUP.jsx-2374700099{width:100%;}}",".ok.jsx-2374700099{width:40vw;background:white;height:20vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5vh;margin:10vh 0 0 2vh;border-radius:25px;-webkit-animation:ok-jsx-2374700099 0.5s;animation:ok-jsx-2374700099 0.5s;}",".close.jsx-2374700099{height:5vh;width:5vh;position:absolute;top:10px;right:10px;}",".close.jsx-2374700099:hover{background:white;border-radius:50%;}",".close.jsx-2374700099 svg.jsx-2374700099{height:100%;width:100%;}","@-webkit-keyframes open-jsx-2374700099{0%{-webkit-transform:translate(-50%,-1000px);-ms-transform:translate(-50%,-1000px);transform:translate(-50%,-1000px);}100%{-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}}","@keyframes open-jsx-2374700099{0%{-webkit-transform:translate(-50%,-1000px);-ms-transform:translate(-50%,-1000px);transform:translate(-50%,-1000px);}100%{-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}}","@-webkit-keyframes ok-jsx-2374700099{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}","@keyframes ok-jsx-2374700099{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}"]))})),E=o.a.createElement;var S=function(t){var e=t.event;return E("div",{className:"jsx-4213182413 signuoOpen"},E("h3",{className:"jsx-4213182413"},"Don't have an account ?",E("p",{onClick:e,className:"jsx-4213182413"},"Sign up")),E(a.a,{id:"4213182413"},[".signuoOpen.jsx-4213182413{position:fixed;bottom:20px;right:40px;color:white;}","p.jsx-4213182413{color:#1a79ff;margin-left:10px;display:inline-block;padding:5px;cursor:pointer;}","p.jsx-4213182413:hover,p.jsx-4213182413:active{background:white;border-radius:6px;}","@media (max-width:500px){h3.jsx-4213182413{font-size:12px;}}"]))},O=o.a.createElement;var C=function(){var t=o.a.createRef(),e=Object(s.useState)(!1),n=e[0],r=e[1];return O(o.a.Fragment,null,n&&O(N,{ref:t}),O(S,{event:function(){n?(t.current.hidden=!1,t.current.style.transform="translate(-50%,0)"):r((function(t){return!t}))}}))},P=n("8Kt/"),q=n.n(P),A=o.a.createElement;e.default=function(){var t=Object(s.useState)(""),e=t[0],n=t[1],r=function(t){n(t)};return A("div",{id:"BG",className:"jsx-71782445"},A(q.a,null,A("title",{className:"jsx-71782445"},"\u767b\u5f55"),A("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-71782445"})),A(c,null),A("div",{className:"jsx-71782445 text"},A("p",{className:"jsx-71782445"},"sign in to zf.zom")),A(b,{Ev:r}),A(C,null),A(k,{error:e,errorEv:r,aaastyle:"errorStyle"}),A(a.a,{id:"71782445"},["#BG.jsx-71782445{background-color:#1f2738;width:100vw;height:100vh;overflow:hidden;position:absolute;left:0;top:0;}",".text.jsx-71782445{color:white;font-weight:800;margin:0 auto;margin-top:2vh;font-size:3vh;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;text-align:center;}"]))}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),a=n("a1gu"),s=n("Nsbk"),o=n("PJYZ"),i=n("W8MJ"),c=n("7W2i"),l=n("RIqP");Object.defineProperty(e,"__esModule",{value:!0});var u=n("q1tI"),m=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(l){function u(t){var i;return r(this,u),i=a(this,s(u).call(this,t)),m&&(e.add(o(i)),n(o(i))),i}return c(u,l),i(u,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(u,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(u.Component)}},a1gu:function(t,e,n){var r=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?a(t):e}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.AmpStateContext=a.createContext({})},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);