(function(e){function t(t){for(var n,i,u=t[0],o=t[1],l=t[2],d=0,s=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);b&&b(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,u=1;u<c.length;u++){var o=c[u];0!==r[o]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=c[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(c,n,function(t){return e[t]}.bind(null,n));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/fm-interactive-pricing-component/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var b=o;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"08f2":function(e,t,c){"use strict";c("5341")},"2c93":function(e,t,c){},"303d":function(e,t,c){"use strict";c("dd75")},3111:function(e,t,c){},"410b":function(e,t,c){"use strict";c("b6d4")},5341:function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function r(e,t,c,r,a,i){var u=Object(n["j"])("background"),o=Object(n["j"])("header-title"),l=Object(n["j"])("pricing-card");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])(u),Object(n["e"])(o),Object(n["e"])(l)],64)}var a=c("e800"),i=c.n(a),u=Object(n["l"])("data-v-f23bf4c0");Object(n["h"])("data-v-f23bf4c0");var o={id:"background-root"},l=Object(n["e"])("img",{src:i.a,alt:""},null,-1);Object(n["g"])();var b=u((function(e,t,c,r,a,i){return Object(n["f"])(),Object(n["c"])("div",o,[l])})),d={};c("63cd");d.render=b,d.__scopeId="data-v-f23bf4c0";var s=d,p=c("7385"),f=c.n(p),v=Object(n["l"])("data-v-79edc0de");Object(n["h"])("data-v-79edc0de");var j={id:"header-title-root"},O=Object(n["e"])("img",{class:"pattern-circles",src:f.a,alt:""},null,-1),m=Object(n["e"])("h1",null,"Simple, traffic-based pricing",-1),g=Object(n["e"])("h2",null,[Object(n["e"])("span",null,"Sign-up for our 30-day trial."),Object(n["d"])(),Object(n["e"])("span",null,"No credit card required.")],-1);Object(n["g"])();var h=v((function(e,t,c,r,a,i){return Object(n["f"])(),Object(n["c"])("div",j,[O,m,g])})),y={};c("c7f6");y.render=h,y.__scopeId="data-v-79edc0de";var k=y,x=c("dc7b"),_=c.n(x),P=Object(n["l"])("data-v-0ab08dbc");Object(n["h"])("data-v-0ab08dbc");var w={class:"summary"},M={class:"page-views"},S={class:"price"},I={class:"price-value"},C={class:"price price-mobile"},V={class:"price-value"},N={class:"period-chooser-container"},Y={class:"period-chooser"},U=Object(n["e"])("label",{for:"yearly-input"},"Monthly Billing",-1),B=Object(n["e"])("label",{for:"yearly-input"},"Yearly Billing",-1),A=Object(n["e"])("span",{class:"label"},"25% discount",-1),E={class:"bottom"},T=Object(n["e"])("ul",{class:"advantage"},[Object(n["e"])("li",null,[Object(n["e"])("img",{src:_.a,alt:"check-icon"}),Object(n["d"])(" Unlimited websites")]),Object(n["e"])("li",null,[Object(n["e"])("img",{src:_.a,alt:"check-icon"}),Object(n["d"])(" 100% data ownership")]),Object(n["e"])("li",null,[Object(n["e"])("img",{src:_.a,alt:"check-icon"}),Object(n["d"])(" Email reports")])],-1);Object(n["g"])();var $=P((function(e,t,c,r,a,i){var u=Object(n["j"])("slider"),o=Object(n["j"])("checkbox"),l=Object(n["j"])("card");return Object(n["f"])(),Object(n["c"])(l,{id:"pricing-card-root"},{top:P((function(){return[Object(n["e"])("div",w,[Object(n["e"])("div",M,Object(n["k"])(r.nbPages)+"K PAGEVIEWS",1),Object(n["e"])("div",S,[Object(n["e"])("span",I,Object(n["k"])(r.perMonthValueComputed),1),Object(n["d"])(" /"+Object(n["k"])(r.isYearly?"year":"month"),1)])]),Object(n["e"])(u,{value:r.perMonthValue,"onUpdate:value":t[1]||(t[1]=function(e){return r.perMonthValue=e}),min:r.minPrice,max:r.maxPrice},null,8,["value","min","max"]),Object(n["e"])("div",C,[Object(n["e"])("span",V,Object(n["k"])(r.perMonthValueComputed),1),Object(n["d"])(" /"+Object(n["k"])(r.isYearly?"year":"month"),1)]),Object(n["e"])("div",N,[Object(n["e"])("div",Y,[U,Object(n["e"])(o,{id:"yearly-input",value:r.isYearly,"onUpdate:value":t[2]||(t[2]=function(e){return r.isYearly=e})},null,8,["value"]),B]),A])]})),bottom:P((function(){return[Object(n["e"])("div",E,[T,Object(n["e"])("button",{class:"cta",onClick:t[3]||(t[3]=function(){return e.validate&&e.validate.apply(e,arguments)})},"Start my trial")])]})),_:1})})),J=c("a1e9"),R=Object(n["l"])("data-v-d31633e6");Object(n["h"])("data-v-d31633e6");var W={class:"card-root"},q={class:"section"},D={class:"section"};Object(n["g"])();var F=R((function(e,t,c,r,a,i){return Object(n["f"])(),Object(n["c"])("div",W,[Object(n["e"])("div",q,[Object(n["i"])(e.$slots,"top",{},void 0,!0)]),Object(n["e"])("div",D,[Object(n["i"])(e.$slots,"bottom",{},void 0,!0)])])})),G={};c("08f2");G.render=F,G.__scopeId="data-v-d31633e6";var H=G,K=c("bbbe"),z=c.n(K),L=Object(n["l"])("data-v-97ee5d64");Object(n["h"])("data-v-97ee5d64");var Q={class:"slider-root"};Object(n["g"])();var X=L((function(e,t,c,r,a,i){return Object(n["f"])(),Object(n["c"])("div",Q,[Object(n["e"])("img",{src:z.a,alt:"",style:{transform:r.transform}},null,4),Object(n["e"])("input",{ref:"inputRef",type:"range",class:"input",min:c.min,max:c.max,step:c.step,value:c.value,style:{background:r.background},onInput:t[1]||(t[1]=function(e){return r.update(e.target.value)})},null,44,["min","max","step","value"])])})),Z=(c("a9e3"),c("99af"),c("5c40")),ee={props:{min:{default:0,type:Number},max:{default:100,type:Number},step:{default:1,type:Number},value:{default:0,type:Number}},setup:function(e,t){var c=Object(J["k"])(null);return{inputRef:c,update:function(e){t.emit("update:value",e)},background:Object(Z["d"])((function(){var t=(e.value-e.min)/(e.max-e.min)*100;return"linear-gradient(to right, var(--soft-cyan)  0%, var(--soft-cyan) ".concat(t,"%, var(--light-grayish-background) ").concat(t,"%, var(--light-grayish-background) 100%)")})),transform:Object(Z["d"])((function(){if(c.value){var t=(e.value-e.min)/(e.max-e.min)*100,n=c.value.clientWidth,r=t*n/100-30*t/100;return"translate(".concat(r,"px)")}}))}}};c("303d");ee.render=X,ee.__scopeId="data-v-97ee5d64";var te=ee,ce=Object(n["l"])("data-v-367efb91");Object(n["h"])("data-v-367efb91");var ne={class:"checkbox-root"};Object(n["g"])();var re=ce((function(e,t,c,r,a,i){return Object(n["f"])(),Object(n["c"])("div",ne,[Object(n["e"])("input",{type:"checkbox",value:c.value,checked:c.value,onInput:t[1]||(t[1]=function(t){return e.$emit("update:value",t.target.checked)})},null,40,["value","checked"])])})),ae={props:{value:{default:!0,type:Boolean}}};c("410b");ae.render=re,ae.__scopeId="data-v-367efb91";var ie=ae,ue={components:{Card:H,Slider:te,Checkbox:ie},setup:function(){var e=40,t=10,c=100,n=Object(J["k"])(t+10),r=Object(J["k"])(!1),a=Object(J["k"])(0),i=function(){var r=(n.value-t)/(e-t)*100,i=r*c/100;a.value=Math.floor(i)};return Object(Z["A"])((function(){return[r,n]}),i,{deep:!0}),i(),{perMonthValue:n,perMonthValueComputed:Object(Z["d"])((function(){var e=r.value?12*n.value*.75:n.value;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)})),isYearly:r,nbPages:a,maxPrice:e,minPrice:t}}};c("5fe3");ue.render=$,ue.__scopeId="data-v-0ab08dbc";var oe=ue,le={name:"App",components:{PricingCard:oe,HeaderTitle:k,Background:s}};c("fc6c");le.render=r;var be=le;Object(n["b"])(be).mount("#app")},"5fe3":function(e,t,c){"use strict";c("3111")},"63cd":function(e,t,c){"use strict";c("2c93")},7385:function(e,t,c){e.exports=c.p+"img/pattern-circles.d9fc9134.svg"},b6d4:function(e,t,c){},bbbe:function(e,t,c){e.exports=c.p+"img/icon-slider.9897948b.svg"},c7f6:function(e,t,c){"use strict";c("f068")},dc7b:function(e,t,c){e.exports=c.p+"img/icon-check.557cedda.svg"},dd75:function(e,t,c){},e800:function(e,t,c){e.exports=c.p+"img/bg-pattern.97b0a7a8.svg"},f068:function(e,t,c){},f3e9:function(e,t,c){},fc6c:function(e,t,c){"use strict";c("f3e9")}});
//# sourceMappingURL=app.229a6bf6.js.map