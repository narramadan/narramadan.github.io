(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/ZWa":function(n,t,e){"use strict";e.r(t);var o=e("q1tI"),i=e.n(o),r=e("9Dj+"),a=e("vOnD"),u=a.d.div.withConfig({displayName:"style__AuthorsPageWrapper",componentId:"eehw41-0"})([""]),l=e("J2m7"),p=e.n(l),c=e("qPyV"),f=e.n(c),d=e("Wbzz"),s=e("7RFF"),x=e("bC0J"),m=a.d.div.withConfig({displayName:"style__BlogPostsWrapper",componentId:"sc-8ew3ox-0"})(["\n  margin: 0 auto;\n  position: relative;\n  .post_card {\n    margin-bottom: 120px;\n    @media (max-width: 990px) {\n      margin-bottom: 90px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 0 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 0 25px 0 25px;\n  }\n"]),h=a.d.div.withConfig({displayName:"style__SecTitle",componentId:"sc-8ew3ox-1"})(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  font-family: ",';\n  letter-spacing: 0.17em;\n  position: relative;\n  margin-top: 30px;\n  margin-bottom: 30px;\n\n  &:after {\n    content: "";\n    width: 68px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-top: 8px;\n  }\n'],Object(x.a)("colors.textColor","#292929"),Object(x.a)("fontFamily.0","'Fira Sans',sans-serif")),g=m,b=function(n){var t=Object(d.useStaticQuery)("3439114159"),e=f()(t.allMdx.edges,"node.frontmatter.author.alias"),i=t.authors.group;return o.createElement(g,null,o.createElement(h,null,"Authors"),e.map((function(n,t){var e=n.node.frontmatter.author,r=p()(i,["fieldValue",e.alias]);return o.createElement(s.a,Object.assign({key:t},e,{totalPosts:r.totalCount}))})))},v=function(n){var t=Object.assign({},n);return o.createElement(u,t,o.createElement(b,null))},w=e("H8eV");t.default=function(n){var t=n.data;return i.a.createElement(r.a,null,i.a.createElement(w.a,{title:"Authors Page",description:t.site.siteMetadata.description}),i.a.createElement(v,null))}},"2ajD":function(n,t){n.exports=function(n){return n!=n}},"3MXg":function(n,t,e){"use strict";var o=e("zLVn"),i=e("q1tI"),r=e("vOnD"),a=e("bC0J"),u=r.d.ul.withConfig({displayName:"SocialProfilestyle__SocialProfileWrapper",componentId:"sc-13tf7pi-0"})(["\n  display: inline-flex;\n"]),l=r.d.div.withConfig({displayName:"SocialProfilestyle__Tooltip",componentId:"sc-13tf7pi-1"})(["\n  position: absolute;\n  background-color: #fff;\n  pointer-events: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 3px;\n  color: #333;\n  font-size: 13px;\n  bottom: 90%;\n  left: 50%;\n  opacity: 0;\n  white-space: nowrap;\n  visibility: hidden;\n  z-index: 999;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-50%, 0, 0);\n  transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 6px solid #fff;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]),p=r.d.li.withConfig({displayName:"SocialProfilestyle__SocialProfileItem",componentId:"sc-13tf7pi-2"})(["\n  list-style: none;\n  position: relative;\n  margin-right: 20px;\n  &:last-child {\n    margin-right: 0;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      visibility: visible;\n      bottom: calc(100% + 5px);\n    }\n  }\n\n  a {\n    color: ",";\n    font-size: 22px;\n    padding: 0.2em;\n    display: block;\n    svg {\n      display: block;\n    }\n  }\n"],l,Object(a.a)("colors.textColor","#292929"));t.a=function(n){var t=n.items,e=Object(o.a)(n,["items"]);return i.createElement(u,e,t.map((function(n,t){return i.createElement(p,{key:t},i.createElement("a",{href:n.url,"aria-label":"social profile",target:"_blank",rel:"noopener noreferrer"},n.icon||"icon"),i.createElement(l,null,n.tooltip||"Social Link"))})))}},"3cYt":function(n,t){n.exports=function(n){return function(t){return null==n?void 0:n[t]}}},"44Ds":function(n,t,e){var o=e("e4Nc");function i(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var e=function(){var o=arguments,i=t?t.apply(this,o):o[0],r=e.cache;if(r.has(i))return r.get(i);var a=n.apply(this,o);return e.cache=r.set(i,a)||r,a};return e.cache=new(i.Cache||o),e}i.Cache=o,n.exports=i},"4uTw":function(n,t,e){var o=e("Z0cm"),i=e("9ggG"),r=e("GNiM"),a=e("dt0z");n.exports=function(n,t){return o(n)?n:i(n,t)?[n]:r(a(n))}},"6nK8":function(n,t,e){var o=e("dVn5"),i=e("fo6e"),r=e("dt0z"),a=e("9NmV");n.exports=function(n,t,e){return n=r(n),void 0===(t=e?void 0:t)?i(n)?a(n):o(n):n.match(t)||[]}},"7RFF":function(n,t,e){"use strict";var o=e("zLVn"),i=e("N1om"),r=e.n(i),a=e("q1tI"),u=e.n(a),l=e("Wbzz"),p=e("9eSz"),c=e.n(p),f=e("3MXg"),d=e("vOnD"),s=e("bC0J"),x=d.d.div.withConfig({displayName:"style__IntroWrapper",componentId:"pvjx3r-0"})(["\n  width: 940px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 25px 10px 25px 10px;\n  display: flex;\n  align-items: center;\n  @media (max-width: 1400px) {\n    padding: 25px 10px 25px 10px;\n  }\n  @media (max-width: 1200px) {\n    padding: 25px 10px 25px 10px;\n  }\n  @media (max-width: 990px) {\n    padding: 25px 25px 25px 25px;\n  }\n  @media (max-width: 575px) {\n    display: block;\n    padding: 25px 25px 25px 25px;\n    text-align: center;\n  }\n"]),m=d.d.div.withConfig({displayName:"style__IntroImage",componentId:"pvjx3r-1"})(["\n  width: 270px;\n  height: 270px;\n  padding: 30px;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 1px solid ",";\n  flex-shrink: 0;\n  @media (max-width: 990px) {\n    width: 220px;\n    height: 220px;\n    padding: 25px;\n    margin-bottom: 25px;\n  }\n  @media (max-width: 990px) {\n    width: 180px;\n    height: 180px;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    border-radius: 50%;\n  }\n\n  > div {\n    border-radius: 50%;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);\n  }\n"],Object(s.a)("colors.lightBorderColor","#ededed")),h=d.d.h1.withConfig({displayName:"style__IntroTitle",componentId:"pvjx3r-2"})(["\n  font-size: 30px;\n  font-weight: 400;\n  font-family: ",";\n  color: ",";\n  margin-bottom: 20px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n    margin-bottom: 15px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(s.a)("fontFamily.1","'Poppins', sans-serif"),Object(s.a)("colors.textColor","#292929")),g=d.d.h2.withConfig({displayName:"style__IntroJobTitle",componentId:"pvjx3r-3"})(["\n  font-size: 20px;\n  font-weight: 400;\n  font-family: ",";\n  color: ",";\n  margin-bottom: 20px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n    margin-bottom: 15px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(s.a)("fontFamily.1","'Poppins', sans-serif"),Object(s.a)("colors.textColor","#292929")),b=d.d.p.withConfig({displayName:"style__Desciption",componentId:"pvjx3r-4"})(["\n  color: ",";\n  font-size: ","px;\n  line-height: ",";\n"],Object(s.a)("colors.textColor","#292929"),Object(s.a)("fontSizes.3","15"),Object(s.a)("lineHeights.text","2")),v=d.d.div.withConfig({displayName:"style__IntroInfo",componentId:"pvjx3r-5"})(["\n  padding-left: 30px;\n  @media (max-width: 575px) {\n    padding-left: 0;\n  }\n"]),w=d.d.span.withConfig({displayName:"style__TotalPosts",componentId:"pvjx3r-6"})(["\n  color: ",";\n  font-size: ","px;\n  line-height: ",";\n  margin-left: 10px;\n  vertical-align: 2px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n  background-color: #a289ef;\n  padding: 2px 10px 2px 10px;\n"],Object(s.a)("colors.textColor","#292929"),Object(s.a)("fontSizes.3","15"),Object(s.a)("lineHeights.text","2")),y=e("IdFE");t.a=function(n){var t=n.alias,e=n.name,i=(n.order,n.image),a=n.jobTitle,p=n.description,d=n.social,s=n.totalPosts,E=(Object(o.a)(n,["alias","name","order","image","jobTitle","description","social","totalPosts"]),function(n){var t=[];return n.github&&t.push({icon:u.a.createElement(y.d,null),url:n.github,tooltip:"Github"}),n.linkedin&&t.push({icon:u.a.createElement(y.f,null),url:n.linkedin,tooltip:"Linkedin"}),n.facebook&&t.push({icon:u.a.createElement(y.c,null),url:n.facebook,tooltip:"Facebook"}),n.twitter&&t.push({icon:u.a.createElement(y.i,null),url:n.twitter,tooltip:"Twitter"}),n.instagram&&t.push({icon:u.a.createElement(y.e,null),url:n.instagram,tooltip:"Instagram"}),t}(d));return u.a.createElement(x,null,u.a.createElement(m,null,u.a.createElement(c.a,{fluid:i.childImageSharp.fluid,alt:"author"})),u.a.createElement(v,null,u.a.createElement(h,null,u.a.createElement(l.Link,{className:"bio",to:"/authors/"+r()(t)},e,u.a.createElement(w,null,s," ",1==s?"Post":"Posts"))),u.a.createElement(g,null,a),u.a.createElement(b,null,p),u.a.createElement(f.a,{items:E})))}},"9Nap":function(n,t,e){var o=e("/9aa");n.exports=function(n){if("string"==typeof n||o(n))return n;var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}},"9NmV":function(n,t){var e="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+e+"]",i="\\d+",r="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+e+i+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+a+"|"+u+")",d="(?:"+c+"|"+u+")",s="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,p].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),m="(?:"+[r,l,p].join("|")+")"+x,h=RegExp([c+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,c,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,c+f,"$"].join("|")+")",c+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,m].join("|"),"g");n.exports=function(n){return n.match(h)||[]}},"9ggG":function(n,t,e){var o=e("Z0cm"),i=e("/9aa"),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;n.exports=function(n,t){if(o(n))return!1;var e=typeof n;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=n&&!i(n))||(a.test(n)||!r.test(n)||null!=t&&n in Object(t))}},CZoQ:function(n,t){n.exports=function(n,t,e){for(var o=e-1,i=n.length;++o<i;)if(n[o]===t)return o;return-1}},GNiM:function(n,t,e){var o=e("I01J"),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,a=o((function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(i,(function(n,e,o,i){t.push(o?i.replace(r,"$1"):e||n)})),t}));n.exports=a},I01J:function(n,t,e){var o=e("44Ds");n.exports=function(n){var t=o(n,(function(n){return 500===e.size&&e.clear(),n})),e=t.cache;return t}},J2m7:function(n,t,e){var o=e("XKAG")(e("UfWW"));n.exports=o},KwMD:function(n,t){n.exports=function(n,t,e,o){for(var i=n.length,r=e+(o?1:-1);o?r--:++r<i;)if(t(n[r],r,n))return r;return-1}},LGYb:function(n,t,e){var o=e("1hJj"),i=e("jbM+"),r=e("Xt/L"),a=e("xYSL"),u=e("dQpi"),l=e("rEGp");n.exports=function(n,t,e){var p=-1,c=i,f=n.length,d=!0,s=[],x=s;if(e)d=!1,c=r;else if(f>=200){var m=t?null:u(n);if(m)return l(m);d=!1,c=a,x=new o}else x=t?[]:s;n:for(;++p<f;){var h=n[p],g=t?t(h):h;if(h=e||0!==h?h:0,d&&g==g){for(var b=x.length;b--;)if(x[b]===g)continue n;t&&x.push(g),s.push(h)}else c(x,g,e)||(x!==s&&x.push(g),s.push(h))}return s}},N1om:function(n,t,e){var o=e("sgoq")((function(n,t,e){return n+(e?"-":"")+t.toLowerCase()}));n.exports=o},"R/W3":function(n,t,e){var o=e("KwMD"),i=e("2ajD"),r=e("CZoQ");n.exports=function(n,t,e){return t==t?r(n,t,e):o(n,i,e)}},Sxd8:function(n,t,e){var o=e("ZCgT");n.exports=function(n){var t=o(n),e=t%1;return t==t?e?t-e:t:0}},TKrE:function(n,t,e){var o=e("qRkn"),i=e("dt0z"),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=i(n))&&n.replace(r,o).replace(a,"")}},UfWW:function(n,t,e){var o=e("KwMD"),i=e("ut/Y"),r=e("Sxd8"),a=Math.max;n.exports=function(n,t,e){var u=null==n?0:n.length;if(!u)return-1;var l=null==e?0:r(e);return l<0&&(l=a(u+l,0)),o(n,i(t,3),l)}},XKAG:function(n,t,e){var o=e("ut/Y"),i=e("MMmD"),r=e("7GkX");n.exports=function(n){return function(t,e,a){var u=Object(t);if(!i(t)){var l=o(e,3);t=r(t),e=function(n){return l(u[n],n,u)}}var p=n(t,e,a);return p>-1?u[l?t[p]:p]:void 0}}},"Xt/L":function(n,t){n.exports=function(n,t,e){for(var o=-1,i=null==n?0:n.length;++o<i;)if(e(t,n[o]))return!0;return!1}},ZCgT:function(n,t,e){var o=e("tLB3");n.exports=function(n){return n?(n=o(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}},ZWtO:function(n,t,e){var o=e("4uTw"),i=e("9Nap");n.exports=function(n,t){for(var e=0,r=(t=o(t,n)).length;null!=n&&e<r;)n=n[i(t[e++])];return e&&e==r?n:void 0}},asDA:function(n,t){n.exports=function(n,t,e,o){var i=-1,r=null==n?0:n.length;for(o&&r&&(e=n[++i]);++i<r;)e=t(e,n[i],i,n);return e}},dQpi:function(n,t,e){var o=e("yGk4"),i=e("vN+2"),r=e("rEGp"),a=o&&1/r(new o([,-0]))[1]==1/0?function(n){return new o(n)}:i;n.exports=a},dVn5:function(n,t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(e)||[]}},dt0z:function(n,t,e){var o=e("zoYe");n.exports=function(n){return null==n?"":o(n)}},eUgh:function(n,t){n.exports=function(n,t){for(var e=-1,o=null==n?0:n.length,i=Array(o);++e<o;)i[e]=t(n[e],e,n);return i}},fo6e:function(n,t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return e.test(n)}},"jbM+":function(n,t,e){var o=e("R/W3");n.exports=function(n,t){return!!(null==n?0:n.length)&&o(n,t,0)>-1}},mwIZ:function(n,t,e){var o=e("ZWtO");n.exports=function(n,t,e){var i=null==n?void 0:o(n,t);return void 0===i?e:i}},qPyV:function(n,t,e){var o=e("ut/Y"),i=e("LGYb");n.exports=function(n,t){return n&&n.length?i(n,o(t,2)):[]}},qRkn:function(n,t,e){var o=e("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});n.exports=o},sgoq:function(n,t,e){var o=e("asDA"),i=e("TKrE"),r=e("6nK8"),a=RegExp("['’]","g");n.exports=function(n){return function(t){return o(r(i(t).replace(a,"")),n,"")}}},zoYe:function(n,t,e){var o=e("nmnc"),i=e("eUgh"),r=e("Z0cm"),a=e("/9aa"),u=o?o.prototype:void 0,l=u?u.toString:void 0;n.exports=function n(t){if("string"==typeof t)return t;if(r(t))return i(t,n)+"";if(a(t))return l?l.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}}}]);
//# sourceMappingURL=component---src-pages-authors-tsx-c4a648f3559e439c2408.js.map