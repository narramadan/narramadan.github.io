(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+c4W":function(n,t,e){var r=e("711d"),o=e("4/ic"),i=e("9ggG"),a=e("9Nap");n.exports=function(n){return i(n)?r(a(n)):o(n)}},"1hJj":function(n,t,e){var r=e("e4Nc"),o=e("ftKO"),i=e("3A9y");function a(n){var t=-1,e=null==n?0:n.length;for(this.__data__=new r;++t<e;)this.add(n[t])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,n.exports=a},"3A9y":function(n,t){n.exports=function(n){return this.__data__.has(n)}},"3MXg":function(n,t,e){"use strict";var r=e("rePB"),o=e("zLVn"),i=e("nKUr"),a=(e("q1tI"),e("vOnD")),c=e("bC0J"),s=a.d.ul.withConfig({displayName:"SocialProfilestyle__SocialProfileWrapper",componentId:"sc-13tf7pi-0"})(["\n  display: inline-flex;\n"]),p=a.d.div.withConfig({displayName:"SocialProfilestyle__Tooltip",componentId:"sc-13tf7pi-1"})(["\n  position: absolute;\n  background-color: #fff;\n  pointer-events: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 3px;\n  color: #333;\n  font-size: 13px;\n  bottom: 90%;\n  left: 50%;\n  opacity: 0;\n  white-space: nowrap;\n  visibility: hidden;\n  z-index: 999;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-50%, 0, 0);\n  transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 6px solid #fff;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]),u=a.d.li.withConfig({displayName:"SocialProfilestyle__SocialProfileItem",componentId:"sc-13tf7pi-2"})(["\n  list-style: none;\n  position: relative;\n  margin-right: 20px;\n  &:last-child {\n    margin-right: 0;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      visibility: visible;\n      bottom: calc(100% + 5px);\n    }\n  }\n\n  a {\n    color: ",";\n    font-size: 22px;\n    padding: 0.2em;\n    display: block;\n    svg {\n      display: block;\n    }\n  }\n"],p,Object(c.a)("colors.textColor","#292929"));function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}t.a=function(n){var t=n.items,e=Object(o.a)(n,["items"]);return Object(i.jsx)(s,l(l({},e),{},{children:t.map((function(n,t){return Object(i.jsxs)(u,{children:[Object(i.jsx)("a",{href:n.url,"aria-label":"social profile",target:"_blank",rel:"noopener noreferrer",children:n.icon||"icon"}),Object(i.jsx)(p,{children:n.tooltip||"Social Link"})]},t)}))}))}},"4/ic":function(n,t,e){var r=e("ZWtO");n.exports=function(n){return function(t){return r(t,n)}}},"4sDh":function(n,t,e){var r=e("4uTw"),o=e("03A+"),i=e("Z0cm"),a=e("wJg7"),c=e("shjB"),s=e("9Nap");n.exports=function(n,t,e){for(var p=-1,u=(t=r(t,n)).length,f=!1;++p<u;){var l=s(t[p]);if(!(f=null!=n&&e(n,l)))break;n=n[l]}return f||++p!=u?f:!!(u=null==n?0:n.length)&&c(u)&&a(l,u)&&(i(n)||o(n))}},"711d":function(n,t){n.exports=function(n){return function(t){return null==t?void 0:t[n]}}},"7RFF":function(n,t,e){"use strict";var r=e("zLVn"),o=e("nKUr"),i=e("N1om"),a=e.n(i),c=(e("q1tI"),e("Wbzz")),s=e("9eSz"),p=e.n(s),u=e("3MXg"),f=e("vOnD"),l=e("bC0J"),d=f.d.div.withConfig({displayName:"style__IntroWrapper",componentId:"pvjx3r-0"})(["\n  width: 940px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 25px 10px 25px 10px;\n  display: flex;\n  align-items: center;\n  @media (max-width: 1400px) {\n    padding: 25px 10px 25px 10px;\n  }\n  @media (max-width: 1200px) {\n    padding: 25px 10px 25px 10px;\n  }\n  @media (max-width: 990px) {\n    padding: 25px 25px 25px 25px;\n  }\n  @media (max-width: 575px) {\n    display: block;\n    padding: 25px 25px 25px 25px;\n    text-align: center;\n  }\n"]),x=f.d.div.withConfig({displayName:"style__IntroImage",componentId:"pvjx3r-1"})(["\n  width: 270px;\n  height: 270px;\n  padding: 30px;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 1px solid ",";\n  flex-shrink: 0;\n  @media (max-width: 990px) {\n    width: 220px;\n    height: 220px;\n    padding: 25px;\n    margin-bottom: 25px;\n  }\n  @media (max-width: 990px) {\n    width: 180px;\n    height: 180px;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    border-radius: 50%;\n  }\n\n  > div {\n    border-radius: 50%;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);\n  }\n"],Object(l.a)("colors.lightBorderColor","#ededed")),b=f.d.h1.withConfig({displayName:"style__IntroTitle",componentId:"pvjx3r-2"})(["\n  font-size: 30px;\n  font-weight: 400;\n  font-family: ",";\n  color: ",";\n  margin-bottom: 20px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n    margin-bottom: 15px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(l.a)("fontFamily.1","'Poppins', sans-serif"),Object(l.a)("colors.textColor","#292929")),h=f.d.h2.withConfig({displayName:"style__IntroJobTitle",componentId:"pvjx3r-3"})(["\n  font-size: 20px;\n  font-weight: 400;\n  font-family: ",";\n  color: ",";\n  margin-bottom: 20px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n    margin-bottom: 15px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(l.a)("fontFamily.1","'Poppins', sans-serif"),Object(l.a)("colors.textColor","#292929")),g=f.d.p.withConfig({displayName:"style__Desciption",componentId:"pvjx3r-4"})(["\n  color: ",";\n  font-size: ","px;\n  line-height: ",";\n"],Object(l.a)("colors.textColor","#292929"),Object(l.a)("fontSizes.3","15"),Object(l.a)("lineHeights.text","2")),m=f.d.div.withConfig({displayName:"style__IntroInfo",componentId:"pvjx3r-5"})(["\n  padding-left: 30px;\n  @media (max-width: 575px) {\n    padding-left: 0;\n  }\n"]),v=f.d.span.withConfig({displayName:"style__TotalPosts",componentId:"pvjx3r-6"})(["\n  color: ",";\n  font-size: ","px;\n  line-height: ",";\n  margin-left: 10px;\n  vertical-align: 2px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n  background-color: #a289ef;\n  padding: 2px 10px 2px 10px;\n"],Object(l.a)("colors.textColor","#292929"),Object(l.a)("fontSizes.3","15"),Object(l.a)("lineHeights.text","2")),j=e("IdFE");t.a=function(n){var t=n.alias,e=n.name,i=(n.order,n.image),s=n.jobTitle,f=n.description,l=n.social,y=n.totalPosts,O=(Object(r.a)(n,["alias","name","order","image","jobTitle","description","social","totalPosts"]),function(n){var t=[];return n.github&&t.push({icon:Object(o.jsx)(j.d,{}),url:n.github,tooltip:"Github"}),n.linkedin&&t.push({icon:Object(o.jsx)(j.f,{}),url:n.linkedin,tooltip:"Linkedin"}),n.facebook&&t.push({icon:Object(o.jsx)(j.c,{}),url:n.facebook,tooltip:"Facebook"}),n.twitter&&t.push({icon:Object(o.jsx)(j.i,{}),url:n.twitter,tooltip:"Twitter"}),n.instagram&&t.push({icon:Object(o.jsx)(j.e,{}),url:n.instagram,tooltip:"Instagram"}),t}(l));return console.log("===> totalPosts :: ",y),Object(o.jsxs)(d,{children:[Object(o.jsx)(x,{children:Object(o.jsx)(p.a,{fluid:i.childImageSharp.fluid,alt:"author"})}),Object(o.jsxs)(m,{children:[Object(o.jsx)(b,{children:Object(o.jsxs)(c.Link,{className:"bio",to:"/authors/"+a()(t),children:[e,Object(o.jsxs)(v,{children:[y," ",1==y?"Post":"Posts"]})]})}),Object(o.jsx)(h,{children:s}),Object(o.jsx)(g,{children:f}),Object(o.jsx)(u.a,{items:O})]})]})}},"7fqy":function(n,t){n.exports=function(n){var t=-1,e=Array(n.size);return n.forEach((function(n,r){e[++t]=[r,n]})),e}},CMye:function(n,t,e){var r=e("GoyQ");n.exports=function(n){return n==n&&!r(n)}},GDhZ:function(n,t,e){var r=e("wF/u"),o=e("mwIZ"),i=e("hgQt"),a=e("9ggG"),c=e("CMye"),s=e("IOzZ"),p=e("9Nap");n.exports=function(n,t){return a(n)&&c(t)?s(p(n),t):function(e){var a=o(e,n);return void 0===a&&a===t?i(e,n):r(t,a,3)}}},HDyB:function(n,t,e){var r=e("nmnc"),o=e("JHRd"),i=e("ljhN"),a=e("or5M"),c=e("7fqy"),s=e("rEGp"),p=r?r.prototype:void 0,u=p?p.valueOf:void 0;n.exports=function(n,t,e,r,p,f,l){switch(e){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(n.byteLength!=t.byteLength||!f(new o(n),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var d=c;case"[object Set]":var x=1&r;if(d||(d=s),n.size!=t.size&&!x)return!1;var b=l.get(n);if(b)return b==t;r|=2,l.set(n,t);var h=a(d(n),d(t),r,p,f,l);return l.delete(n),h;case"[object Symbol]":if(u)return u.call(n)==u.call(t)}return!1}},IOzZ:function(n,t){n.exports=function(n,t){return function(e){return null!=e&&(e[n]===t&&(void 0!==t||n in Object(e)))}}},J2m7:function(n,t,e){var r=e("XKAG")(e("UfWW"));n.exports=r},Juji:function(n,t){n.exports=function(n,t){return null!=n&&t in Object(n)}},KwMD:function(n,t){n.exports=function(n,t,e,r){for(var o=n.length,i=e+(r?1:-1);r?i--:++i<o;)if(t(n[i],i,n))return i;return-1}},O7RO:function(n,t,e){var r=e("CMye"),o=e("7GkX");n.exports=function(n){for(var t=o(n),e=t.length;e--;){var i=t[e],a=n[i];t[e]=[i,a,r(a)]}return t}},QoRX:function(n,t){n.exports=function(n,t){for(var e=-1,r=null==n?0:n.length;++e<r;)if(t(n[e],e,n))return!0;return!1}},Sxd8:function(n,t,e){var r=e("ZCgT");n.exports=function(n){var t=r(n),e=t%1;return t==t?e?t-e:t:0}},UfWW:function(n,t,e){var r=e("KwMD"),o=e("ut/Y"),i=e("Sxd8"),a=Math.max;n.exports=function(n,t,e){var c=null==n?0:n.length;if(!c)return-1;var s=null==e?0:i(e);return s<0&&(s=a(c+s,0)),r(n,o(t,3),s)}},XKAG:function(n,t,e){var r=e("ut/Y"),o=e("MMmD"),i=e("7GkX");n.exports=function(n){return function(t,e,a){var c=Object(t);if(!o(t)){var s=r(e,3);t=i(t),e=function(n){return s(c[n],n,c)}}var p=n(t,e,a);return p>-1?c[s?t[p]:p]:void 0}}},ZCgT:function(n,t,e){var r=e("tLB3");n.exports=function(n){return n?(n=r(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}},ZCpW:function(n,t,e){var r=e("lm/5"),o=e("O7RO"),i=e("IOzZ");n.exports=function(n){var t=o(n);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(e){return e===n||r(e,n,t)}}},e5cp:function(n,t,e){var r=e("fmRc"),o=e("or5M"),i=e("HDyB"),a=e("seXi"),c=e("QqLw"),s=e("Z0cm"),p=e("DSRE"),u=e("c6wG"),f="[object Object]",l=Object.prototype.hasOwnProperty;n.exports=function(n,t,e,d,x,b){var h=s(n),g=s(t),m=h?"[object Array]":c(n),v=g?"[object Array]":c(t),j=(m="[object Arguments]"==m?f:m)==f,y=(v="[object Arguments]"==v?f:v)==f,O=m==v;if(O&&p(n)){if(!p(t))return!1;h=!0,j=!1}if(O&&!j)return b||(b=new r),h||u(n)?o(n,t,e,d,x,b):i(n,t,m,e,d,x,b);if(!(1&e)){var w=j&&l.call(n,"__wrapped__"),_=y&&l.call(t,"__wrapped__");if(w||_){var z=w?n.value():n,k=_?t.value():t;return b||(b=new r),x(z,k,e,d,b)}}return!!O&&(b||(b=new r),a(n,t,e,d,x,b))}},ftKO:function(n,t){n.exports=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this}},hgQt:function(n,t,e){var r=e("Juji"),o=e("4sDh");n.exports=function(n,t){return null!=n&&o(n,t,r)}},"lm/5":function(n,t,e){var r=e("fmRc"),o=e("wF/u");n.exports=function(n,t,e,i){var a=e.length,c=a,s=!i;if(null==n)return!c;for(n=Object(n);a--;){var p=e[a];if(s&&p[2]?p[1]!==n[p[0]]:!(p[0]in n))return!1}for(;++a<c;){var u=(p=e[a])[0],f=n[u],l=p[1];if(s&&p[2]){if(void 0===f&&!(u in n))return!1}else{var d=new r;if(i)var x=i(f,l,u,n,t,d);if(!(void 0===x?o(l,f,3,i,d):x))return!1}}return!0}},or5M:function(n,t,e){var r=e("1hJj"),o=e("QoRX"),i=e("xYSL");n.exports=function(n,t,e,a,c,s){var p=1&e,u=n.length,f=t.length;if(u!=f&&!(p&&f>u))return!1;var l=s.get(n),d=s.get(t);if(l&&d)return l==t&&d==n;var x=-1,b=!0,h=2&e?new r:void 0;for(s.set(n,t),s.set(t,n);++x<u;){var g=n[x],m=t[x];if(a)var v=p?a(m,g,x,t,n,s):a(g,m,x,n,t,s);if(void 0!==v){if(v)continue;b=!1;break}if(h){if(!o(t,(function(n,t){if(!i(h,t)&&(g===n||c(g,n,e,a,s)))return h.push(t)}))){b=!1;break}}else if(g!==m&&!c(g,m,e,a,s)){b=!1;break}}return s.delete(n),s.delete(t),b}},rEGp:function(n,t){n.exports=function(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}},seXi:function(n,t,e){var r=e("qZTm"),o=Object.prototype.hasOwnProperty;n.exports=function(n,t,e,i,a,c){var s=1&e,p=r(n),u=p.length;if(u!=r(t).length&&!s)return!1;for(var f=u;f--;){var l=p[f];if(!(s?l in t:o.call(t,l)))return!1}var d=c.get(n),x=c.get(t);if(d&&x)return d==t&&x==n;var b=!0;c.set(n,t),c.set(t,n);for(var h=s;++f<u;){var g=n[l=p[f]],m=t[l];if(i)var v=s?i(m,g,l,t,n,c):i(g,m,l,n,t,c);if(!(void 0===v?g===m||a(g,m,e,i,c):v)){b=!1;break}h||(h="constructor"==l)}if(b&&!h){var j=n.constructor,y=t.constructor;j==y||!("constructor"in n)||!("constructor"in t)||"function"==typeof j&&j instanceof j&&"function"==typeof y&&y instanceof y||(b=!1)}return c.delete(n),c.delete(t),b}},"ut/Y":function(n,t,e){var r=e("ZCpW"),o=e("GDhZ"),i=e("zZ0H"),a=e("Z0cm"),c=e("+c4W");n.exports=function(n){return"function"==typeof n?n:null==n?i:"object"==typeof n?a(n)?o(n[0],n[1]):r(n):c(n)}},"wF/u":function(n,t,e){var r=e("e5cp"),o=e("ExA7");n.exports=function n(t,e,i,a,c){return t===e||(null==t||null==e||!o(t)&&!o(e)?t!=t&&e!=e:r(t,e,i,a,n,c))}},xYSL:function(n,t){n.exports=function(n,t){return n.has(t)}}}]);
//# sourceMappingURL=2042084a31ef343d94e454c56eca4d7ca9156812-f7418a46ec1111074afb.js.map