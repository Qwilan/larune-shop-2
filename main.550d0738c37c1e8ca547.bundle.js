(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,n,e){var o={"./favicon.png":8,"./img-1.jpg":9,"./img-2.jpg":10,"./img-3.jpg":11,"./img-4.jpg":12,"./img-5.jpg":13,"./img-6.jpg":14,"./img-7.jpg":15,"./img-8.jpg":16};function i(t){var n=r(t);return e(n)}function r(t){if(!e.o(o,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=0},function(t,n,e){t.exports=e(17)},function(t,n,e){var o=e(3),i=e(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1},a=(o("!!../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/sass-loader/dist/cjs.js!./index.scss",i,r),i.locals?i.locals:{});t.exports=a},function(t,n,e){"use strict";var o,i={},r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}();function c(t,n,e){t=e.base?t+e.base:t,i[t]||(i[t]=[]);for(var o=0;o<n.length;o++){var r=n[o],a={css:r[1],media:r[2],sourceMap:r[3]},c=i[t];c[o]?c[o].updater(a):c.push({updater:v(a,e)})}for(var s=n.length;s<i[t].length;s++)i[t][s].updater();i[t].length=n.length,0===i[t].length&&delete i[t]}function s(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var d,u=(d=[],function(t,n){return d[t]=n,d.filter(Boolean).join("\n")});function l(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=u(n,i);else{var r=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function p(t,n,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,g=0;function v(t,n){var e,o,i;if(n.singleton){var r=g++;e=m||(m=s(n)),o=l.bind(null,e,r,!1),i=l.bind(null,e,r,!0)}else e=s(n),o=p.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}t.exports=function(t,n,e){return(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r()),c(t,n,e),function(n){c(t,n||[],e)}}},function(t,n,e){(n=e(5)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.scss"}]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")}));return[e].concat(r).concat([i]).join("\n")}var a,c,s;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o=0;o<t.length;o++){var i=[].concat(t[o]);e&&(i[2]?i[2]="".concat(e," and ").concat(i[2]):i[2]=e),n.push(i)}},n}},function(t){t.exports=JSON.parse('[{"login":"larune","password":"123"},{"login":"test","password":"test"},{"login":"user","password":"user"}]')},function(t){t.exports=JSON.parse('[{"id":1,"name":"Item 1","price":100,"count":50,"img1":"img-1.jpg","img2":"img-2.jpg"},{"id":2,"name":"Item 2","price":50,"count":100,"img1":"img-3.jpg","img2":"img-4.jpg"},{"id":3,"name":"Item 3","price":50,"count":100,"img1":"img-5.jpg","img2":"img-6.jpg"},{"id":4,"name":"Item 4","price":50,"count":100,"img1":"img-7.jpg","img2":"img-8.jpg"},{"id":5,"name":"Item 5","price":100,"count":50,"img1":"img-8.jpg","img2":"img-7.jpg"},{"id":6,"name":"Item 6","price":50,"count":100,"img1":"img-6.jpg","img2":"img-5.jpg"},{"id":7,"name":"Item 7","price":50,"count":100,"img1":"img-4.jpg","img2":"img-3.jpg"},{"id":8,"name":"Item 8","price":50,"count":100,"img1":"img-2.jpg","img2":"img-1.jpg"}]')},function(t,n,e){t.exports=e.p+"images/favicon.png"},function(t,n,e){t.exports=e.p+"images/img-1.jpg"},function(t,n,e){t.exports=e.p+"images/img-2.jpg"},function(t,n,e){t.exports=e.p+"images/img-3.jpg"},function(t,n,e){t.exports=e.p+"images/img-4.jpg"},function(t,n,e){t.exports=e.p+"images/img-5.jpg"},function(t,n,e){t.exports=e.p+"images/img-6.jpg"},function(t,n,e){t.exports=e.p+"images/img-7.jpg"},function(t,n,e){t.exports=e.p+"images/img-8.jpg"},function(t,n,e){"use strict";e.r(n);e(2);var o=function(){},i=e(6);o.prototype.logout=function(){localStorage.clear()},o.prototype.isAuth=function(){var t=window.localStorage.getItem("login"),n=window.localStorage.getItem("password"),e=window.localStorage.getItem("timestamp");return Date.now()-e>108e5?(this.logout(),!1):!!i.find((function(e){return e.login.toLowerCase()===t.toLowerCase()&&e.password.toLowerCase()===n.toLowerCase()}))},o.prototype.auth=function(t,n){return!!i.find((function(e){return e.login.toLowerCase()===t.toLowerCase()&&e.password.toLowerCase()===n.toLowerCase()}))&&(window.localStorage.setItem("login",t),window.localStorage.setItem("password",n),window.localStorage.setItem("timestamp",Date.now()),!0)};var r=o,a=function(t){this.element=t};a.prototype.render=function(){var t=this;(this.element.innerHTML="",this.onIsAuthCheck())||(this.element.innerHTML='\n  <div class="limiter">\n\t\t<div class="container-login100">\n\t\t\t<div class="wrap-login100 p-t-50 p-b-90">\n\t\t\t\t<form class="login100-form validate-form flex-sb flex-w"x>\n\t\t\t\t\t<span class="login100-form-title p-b-51">\n\t\t\t\t\t\tLogin\n\t\t\t\t\t</span>\n\t\t\t\t\t<div id=\'login-wrap\' class="wrap-input100 validate-input m-b-16">\n\t\t\t\t\t\t<input class="input100" type="text" id="login" name="login" placeholder="Username">\n\t\t\t\t\t\t<span class="focus-input100"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\'password-wrap\' class="wrap-input100 validate-input m-b-16">\n\t\t\t\t\t\t<input class="input100" type="password" id="password" name="password" placeholder="Password">\n\t\t\t\t\t\t<span class="focus-input100"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="container-login100-form-btn m-t-17">\n\t\t\t\t\t\t<button id="login-button" class="login100-form-btn" type="button">\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  ',this.element.querySelector("#login-button").onclick=this.onLoginClick.bind(this),this.element.querySelector("#login").onclick=function(){return t.onFieldFocus(t.element.querySelector("#login-wrap"))},this.element.querySelector("#password").onclick=function(){return t.onFieldFocus(t.element.querySelector("#password-wrap"))})};var c=a,s=function(t){(t||""==t)&&(d(window.location.hash)!=t&&(window.location.href=window.location.pathname+u(t),document.dispatchEvent(new CustomEvent("init"))))},d=function(t){return t?t.slice(1):""},u=function(t){return t?"#"+t:"#"},l="",p="/login",m="/invoices",g=function(t,n){this.view=t,this.model=n};g.prototype.initialize=function(){this.view.onLoginClick=this.onLoginClick.bind(this),this.view.onFieldFocus=this.onFieldFocus.bind(this),this.view.onIsAuthCheck=this.onIsAuthCheck.bind(this)},g.prototype.onIsAuthCheck=function(){return!!this.model.isAuth()},g.prototype.onLoginClick=function(t){t.preventDefault();var n=document.getElementById("login-wrap"),e=document.getElementById("password-wrap"),o=document.getElementById("login"),i=document.getElementById("password"),r=o.value.toLowerCase(),a=i.value.toLowerCase();this.model.auth(r,a)?s(l):(r.trim()?n.dataset.validate="Wrong username or password":n.dataset.validate="Username is required",a.trim()?e.dataset.validate="Wrong username or password":e.dataset.validate="Password is required",n.classList.add("alert-validate"),e.classList.add("alert-validate"))},g.prototype.onFieldFocus=function(t){t.classList.remove("alert-validate")};var v=g;function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function y(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=function(){},b=e(7);w.prototype.initializeGoods=function(){if(!JSON.parse(localStorage.getItem("goods"))){var t=y(b);window.localStorage.setItem("goods",JSON.stringify(t))}},w.prototype.getCart=function(){var t=JSON.parse(localStorage.getItem("cart"));return t||(t=[]),y(t)},w.prototype.setCart=function(t){localStorage.setItem("cart",JSON.stringify(t))},w.prototype.getGoods=function(){return JSON.parse(window.localStorage.getItem("goods"))},w.prototype.getGoodById=function(t){return JSON.parse(window.localStorage.getItem("goods")).find((function(n){return n.id===t}))},w.prototype.getGoodFromCartById=function(t){return this.getCart().find((function(n){return n.id===t}))},w.prototype.addGoodToCart=function(t){var n=this.getGoodById(t),e=this.getCart(),o=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){h(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},n,{count:1});e.push(o),this.setCart(e)},w.prototype.removeGoodFromCart=function(t){var n=this.getCart();this.setCart(n.filter((function(n){return n.id!==t})))};var C=w,I=function(t){this.element=t};I.prototype.render=function(){var t=this,n=this.getGoods();this.element.innerHTML='\n\t<div class="main">\n\t\t<div class="container">\n\t\t\t<div class="row" id="row">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t',n.forEach((function(n){if(!(n.count<=0)){var o=!!t.getGoodFromCartById(n.id),i=document.createElement("div");i.className="col-md-3 col-sm-6 m-b-15 m-t-15",i.innerHTML='\n\t\t<div class="product-grid4 '.concat(o?"active":"",'" id="grid-').concat(n.id,'">\n\t\t\t<div class="product-image4">\n\t\t\t\t<div>\n\t\t\t\t\t<img class="pic-1" src="').concat(e(0)("./"+n.img1),'" />\n\t\t\t\t\t<span class="product-discount-label">').concat(n.count,'</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="product-content">\n\t\t\t\t<h3 class="title">').concat(n.name,'</h3>\n\t\t\t\t<div class="price">').concat(n.price,'₽</div>\n\t\t\t\t<button class="add-to-cart" ').concat(n.count?"":"hidden",">\n\t\t\t\t\t").concat(o?"REMOVE FROM CART":"ADD TO CART","\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t"),i.querySelector(".add-to-cart").onclick=function(){o?t.onRemoveGoodFromCart(n.id):t.onAddGoodToCart(n.id)},t.element.querySelector("#row").append(i)}}))};var S=I,j=function(t,n){this.view=t,this.model=n};j.prototype.initialize=function(){this.model.initializeGoods(),this.view.getGoods=this.getGoods.bind(this),this.view.onAddGoodToCart=this.onAddGoodToCart.bind(this),this.view.onRemoveGoodFromCart=this.onRemoveGoodFromCart.bind(this),this.view.getGoodFromCartById=this.getGoodFromCartById.bind(this)},j.prototype.getGoods=function(){return this.model.getGoods()},j.prototype.getGoodById=function(t){return this.model.getGoodById(t)},j.prototype.getGoodFromCartById=function(t){return this.model.getGoodFromCartById(t)},j.prototype.onAddGoodToCart=function(t){this.model.addGoodToCart(t),document.dispatchEvent(new CustomEvent("renderMain")),document.dispatchEvent(new CustomEvent("renderCart"))},j.prototype.onRemoveGoodFromCart=function(t){this.model.removeGoodFromCart(t),document.dispatchEvent(new CustomEvent("renderMain")),document.dispatchEvent(new CustomEvent("renderCart"))};var G=j,x=function(){};x.prototype.logout=function(){localStorage.clear()};var E=x,O=function(t){this.element=t};O.prototype.render=function(){var t=this,n=this.getRoute();this.element.innerHTML='\n\t<nav class="navbar navbar-expand-md navbar-dark bg-dark">\n\t\t<div class="container">\n\t\t\t<a class="navbar-brand" id="logo" href="#">Larune\'s shop</a>\n\n\t\t\t<div class="navbar justify-content-end">\n\t\t\t\t<ul class="navbar-nav">\n          <li\n            id="nav-home"\n            class="'.concat(n===l?"active ":"",'nav-item"\n          >\n\t\t\t\t\t\t<a class="nav-link" href="#">Home</a>\n\t\t\t\t\t</li>\n          <li\n            id="nav-invoices"\n            class="').concat(n===m?"active ":"",'nav-item"\n          >\n\t\t\t\t\t\t<a class="nav-link" href="#">Invoices <span class="sr-only">(current)</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<form class="nav-form form-inline my-2 my-lg-0">\n\t\t\t\t\t<a class="btn btn-light btn-sm ml-3" href="" id="logout-btn">\n\t\t\t\t\t\t<i class="fa fa-sign-out"></i> logout\n\t\t\t\t\t</a>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\t'),this.element.querySelector("#logout-btn").onclick=function(n){n.preventDefault(),t.logout(),document.location.reload(!0)},this.element.querySelector("#nav-invoices").onclick=function(n){n.preventDefault(),t.goRoute(m)},this.element.querySelector("#nav-home").onclick=function(n){n.preventDefault(),t.goRoute(l)},this.element.querySelector("#logo").onclick=function(n){n.preventDefault(),t.goRoute(l)}};var k=O,L=function(t,n){this.view=t,this.model=n};L.prototype.initialize=function(){this.view.logout=this.logout.bind(this),this.view.goRoute=this.goRoute.bind(this),this.view.getRoute=this.getRoute.bind(this)},L.prototype.getRoute=function(){return d(window.location.hash)},L.prototype.goRoute=function(t){s(t)},L.prototype.logout=function(){this.model.logout()};var A=L;function F(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var T=function(){};T.prototype.getCart=function(){var t=JSON.parse(localStorage.getItem("cart"));return t||(t=[]),F(t)},T.prototype.setGoods=function(t){localStorage.setItem("goods",JSON.stringify(t))},T.prototype.setCart=function(t){localStorage.setItem("cart",JSON.stringify(t))},T.prototype.clearCart=function(){localStorage.removeItem("cart")},T.prototype.getGoods=function(){return JSON.parse(window.localStorage.getItem("goods"))},T.prototype.getGoodById=function(t){return JSON.parse(window.localStorage.getItem("goods")).find((function(n){return n.id===t}))},T.prototype.updateGood=function(t){var n=this.getGoods(),e=n.findIndex((function(n){return n.id===t.id}));-1!==e&&(n[e]=t,this.setGoods(n))},T.prototype.getGoodFromCartById=function(t){return this.getCart().find((function(n){return n.id===t}))},T.prototype.removeGoodFromCart=function(t){var n=this.getCart();this.setCart(n.filter((function(n){return n.id!==t})))},T.prototype.updateGoodInCart=function(t){var n=this.getCart(),e=n.findIndex((function(n){return n.id===t.id}));-1!==e&&(n[e]=t,this.setCart(n))},T.prototype.getInvoices=function(){var t=JSON.parse(window.localStorage.getItem("invoices"));return t||(t=[]),F(t)},T.prototype.setInvoices=function(t){localStorage.setItem("invoices",JSON.stringify(t))},T.prototype.addInvoice=function(t){var n=this.getInvoices();n.push(t),this.setInvoices(n)};var R=T,B=function(t){this.element=t};B.prototype.render=function(){var t=this,n=this.getCart(),o=n.reduce((function(t,n){return t+n.count*n.price}),0);this.element.innerHTML='\n\t<div id="cart" class="cart">\n\t\t<div class="container mb-4">\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-12">\n\t\t\t\t\t<div id="table-div" class="table-responsive"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col mb-2">\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div id="cart-checkout-container" class="col-sm-12 col-md-6 text-right">\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\tid="cart-checkout"\n\t\t\t\t\t\t\t\tclass="'.concat(o?" ":"disabled ",'btn btn-lg btn-block my-btn text-uppercase"\n\t\t\t\t\t\t\t\t').concat(o?"":"disabled","\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tCheckout\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"),this.element.querySelector("#cart-checkout").onclick=this.onCheckout.bind(this);var i=document.createElement("table");i.className="table table-striped",i.innerHTML='\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th scope="col"> </th>\n\t\t\t\t<th scope="col">Product</th>\n\t\t\t\t<th scope="col">Available</th>\n\t\t\t\t<th scope="col">Quantity</th>\n\t\t\t\t<th scope="col">Price</th>\n\t\t\t\t<th width="10%"></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t</tbody>\n\t',this.element.querySelector("#table-div").append(i),n.forEach((function(n){var o=t.getGoodById(n.id),i=n.count<=o.count?n.count:o.count,r=document.createElement("tr");r.className="cart-tr",r.innerHTML='\n\t\t<td>\n\t\t\t<img src="'.concat(e(0)("./".concat(n.img1)),'"/>\n\t\t</td>\n\t\t<td>\n\t\t\t').concat(n.name,"\n\t\t</td>\n\t\t<td>\n\t\t\t").concat(n.count,'\n\t\t</td>\n\t\t<td>\n\t\t\t<input\n\t\t\t\tid="cart-quantity-').concat(n.id,'"\n\t\t\t\tvalue="').concat(i,'"\n\t\t\t\tclass="form-control"\n\t\t\t\ttype="number"\n\t\t\t></input>\n\t\t</td>\n\t\t<td>\n\t\t\t').concat(n.price,' ₽\n\t\t</td>\n\t\t<td class="text-right">\n\t\t\t<button id="remove-').concat(n.id,'" class="btn btn-sm btn-danger">\n\t\t\t\t<i class="fa fa-trash"></i>\n\t\t\t</button>\n\t\t</td>\n\t\t');var a=r.querySelector("#cart-quantity-".concat(n.id));a.onclick=function(t){return t.target.select()},a.onblur=function(e){return t.onQuantityChange(e.target.value,n.id,a)}.bind(t),r.querySelector("#remove-".concat(n.id)).onclick=function(){return t.onRemoveGoodFromCart(n.id)},t.element.querySelector("tbody").append(r)}))};var M=B;function N(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var q=function(t,n){this.view=t,this.model=n};q.prototype.initialize=function(){this.view.getCart=this.getCart.bind(this),this.view.getGoods=this.getGoods.bind(this),this.view.getGoodById=this.getGoodById.bind(this),this.view.getGoodFromCartById=this.getGoodFromCartById.bind(this),this.view.onRemoveGoodFromCart=this.onRemoveGoodFromCart.bind(this),this.view.onQuantityChange=this.onQuantityChange.bind(this),this.view.onCheckout=this.onCheckout.bind(this)},q.prototype.getCart=function(){return this.model.getCart()},q.prototype.getGoods=function(){return this.model.getGoods()},q.prototype.getGoodById=function(t){return this.model.getGoodById(t)},q.prototype.getGoodFromCartById=function(t){return this.model.getGoodFromCartById(t)},q.prototype.onRemoveGoodFromCart=function(t){this.model.removeGoodFromCart(t),document.dispatchEvent(new CustomEvent("renderMain")),document.dispatchEvent(new CustomEvent("renderCart"))},q.prototype.onQuantityChange=function(t,n,e){var o=this.getGoodById(n),i=this.getGoodFromCartById(n);o.count<t&&(e.value=o.count,t=o.count),i.count=t,this.model.updateGoodInCart(i)},q.prototype.onCheckout=function(){var t=this,n=this.getCart(),e={id:"xxxxxxxx".replace(/[xy]/g,(function(t){var n=8*Math.random()|0;return("x"==t?n:3&n|8).toString(8)})),date:new Date,goods:N(n)};n.forEach((function(n){var e=t.getGoodById(n.id);e.count-=n.count,t.model.updateGood(e),t.model.clearCart()})),this.model.addInvoice(e),s(m),window.scrollTo(0,0)};var J=q;function D(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var H=function(){};H.prototype.getInvoices=function(){var t=JSON.parse(window.localStorage.getItem("invoices"));return t||(t=[]),D(t)};var P=H,z=function(t){this.element=t};z.prototype.render=function(){var t=this,n=this.getInvoices();this.element.innerHTML='<div id="invoices" class="container m-t-30 m-b-30"></div>';var e=this.element.querySelector("#invoices"),o=document.createElement("div");o.className="col mb-2",o.innerHTML='\n\t<div class="col mb-2">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-12  col-md-6">\n\t\t\t\t<button id="invoices-continue" class="btn btn-lg btn-block btn-light">\n\t\t\t\t\tContinue Shopping\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t',o.querySelector("#invoices-continue").onclick=function(){return t.goRoute(l)},n.forEach((function(t){var n=t.goods.reduce((function(t,n){return t+n.count*n.price}),0),o=document.createElement("div");o.className="m-t-30 m-b-30",o.innerHTML='\n\t\t<div class="card">\n\t\t\t<div class="card-body p-0">\n\t\t\t\t<div class="row p-5">\n\t\t\t\t\t<div class="col-md-12">\n\t\t\t\t\t\t<table class="table">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class="border-0 text-uppercase small font-weight-bold">ID</th>\n\t\t\t\t\t\t\t\t\t<th class="border-0 text-uppercase small font-weight-bold">Item</th>\n\t\t\t\t\t\t\t\t\t<th class="border-0 text-uppercase small font-weight-bold">Quantity</th>\n\t\t\t\t\t\t\t\t\t<th class="border-0 text-uppercase small font-weight-bold">Unit Cost</th>\n\t\t\t\t\t\t\t\t\t<th class="border-0 text-uppercase small font-weight-bold">Total</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody></tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="d-flex flex-row-reverse bg-dark text-white p-4">\n\t\t\t\t\t<div class="py-3 px-5 text-right">\n\t\t\t\t\t\t<div class="mb-2">Total amount</div>\n\t\t\t\t\t\t<div class="h2 font-weight-light">'.concat(n," ₽</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t"),t.goods.forEach((function(t){var n=document.createElement("tr");n.innerHTML="\n\t\t\t\t<td>".concat(t.id,"</td>\n\t\t\t\t<td>").concat(t.name,"</td>\n\t\t\t\t<td>").concat(t.count,"</td>\n\t\t\t\t<td>").concat(t.price,"</td>\n\t\t\t\t<td>").concat(t.price*t.count," ₽</td>\n\t\t\t"),o.querySelector("tbody").append(n)})),e.append(o)})),e.append(o)};var U=z,_=function(t,n){this.view=t,this.model=n};_.prototype.initialize=function(){this.view.getInvoices=this.getInvoices.bind(this),this.view.goRoute=this.goRoute.bind(this)},_.prototype.getInvoices=function(){return this.model.getInvoices()},_.prototype.goRoute=function(t){s(t)};var Q=_,W=function(){var t,n=d(window.location.hash),e=document.querySelector("#root");e.innerHTML="";var o=document.createElement("div"),i=new r,a=new c(o),u=new v(a,i);if(u.initialize(),a.render(),e.append(o),(t=u.onIsAuthCheck())||s(p),t){var g=document.createElement("div"),f=new E,h=new k(g);if(new A(h,f).initialize(),h.render(),e.append(g),n===l){var y=document.createElement("div"),w=new C,b=new S(y);new G(b,w).initialize(),b.render(),document.addEventListener("renderMain",(function(){return b.render()})),e.append(y);var I=document.createElement("div"),j=new R,x=new M(I);return new J(x,j).initialize(),x.render(),document.addEventListener("renderCart",(function(){return x.render()})),void e.append(I)}if(n===m){var O=document.createElement("div"),L=new P,F=new U(O);return new Q(F,L).initialize(),F.render(),void e.append(O)}}};W(),document.addEventListener("init",W)}],[[1,1]]]);