(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/ZWa":function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",(function(){return D}));var r=e("nKUr"),o=(e("q1tI"),e("9Dj+")),i=e("rePB"),a=e("vOnD"),c=a.d.div.withConfig({displayName:"style__AuthorsPageWrapper",componentId:"eehw41-0"})([""]),p=e("J2m7"),s=e.n(p),u=e("qPyV"),f=e.n(u),l=e("Wbzz"),d=e("7RFF"),b=e("za5s"),h=a.d.div.withConfig({displayName:"style__BlogPostsWrapper",componentId:"sc-8ew3ox-0"})(["\n  margin: 0 auto;\n  position: relative;\n  .post_card {\n    margin-bottom: 120px;\n    @media (max-width: 990px) {\n      margin-bottom: 90px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 0 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 0 25px 0 25px;\n  }\n"]),j=a.d.div.withConfig({displayName:"style__SecTitle",componentId:"sc-8ew3ox-1"})(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  font-family: ",';\n  letter-spacing: 0.17em;\n  position: relative;\n  margin-top: 30px;\n  margin-bottom: 30px;\n\n  &:after {\n    content: "";\n    width: 68px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-top: 8px;\n  }\n'],Object(b.themeGet)("colors.textColor","#292929"),Object(b.themeGet)("fontFamily.0","'Fira Sans',sans-serif")),O=h;function x(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?x(Object(e),!0).forEach((function(n){Object(i.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g=function(t){var n=Object(l.useStaticQuery)("2690126120"),e=f()(n.allMdx.edges,"node.frontmatter.author.alias"),o=n.authors.group;return Object(r.jsxs)(O,{children:[Object(r.jsx)(j,{children:"Authors"}),e.map((function(t,n){var e=t.node.frontmatter.author,i=s()(o,["fieldValue",e.alias]);return Object(r.jsx)(d.a,m(m({},e),{},{totalPosts:i.totalCount}),n)}))]})};function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){Object(i.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v=function(t){var n=Object.assign({},t);return Object(r.jsx)(c,y(y({},n),{},{children:Object(r.jsx)(g,{})}))},P=e("H8eV"),D=(n.default=function(t){var n=t.data;return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(P.a,{title:"Authors Page",description:n.site.siteMetadata.description}),Object(r.jsx)(v,{})]})},"3000541721")},"2ajD":function(t,n){t.exports=function(t){return t!=t}},CZoQ:function(t,n){t.exports=function(t,n,e){for(var r=e-1,o=t.length;++r<o;)if(t[r]===n)return r;return-1}},LGYb:function(t,n,e){var r=e("1hJj"),o=e("jbM+"),i=e("Xt/L"),a=e("xYSL"),c=e("dQpi"),p=e("rEGp");t.exports=function(t,n,e){var s=-1,u=o,f=t.length,l=!0,d=[],b=d;if(e)l=!1,u=i;else if(f>=200){var h=n?null:c(t);if(h)return p(h);l=!1,u=a,b=new r}else b=n?[]:d;t:for(;++s<f;){var j=t[s],O=n?n(j):j;if(j=e||0!==j?j:0,l&&O==O){for(var x=b.length;x--;)if(b[x]===O)continue t;n&&b.push(O),d.push(j)}else u(b,O,e)||(b!==d&&b.push(O),d.push(j))}return d}},"R/W3":function(t,n,e){var r=e("KwMD"),o=e("2ajD"),i=e("CZoQ");t.exports=function(t,n,e){return n==n?i(t,n,e):r(t,o,e)}},"Xt/L":function(t,n){t.exports=function(t,n,e){for(var r=-1,o=null==t?0:t.length;++r<o;)if(e(n,t[r]))return!0;return!1}},dQpi:function(t,n,e){var r=e("yGk4"),o=e("vN+2"),i=e("rEGp"),a=r&&1/i(new r([,-0]))[1]==1/0?function(t){return new r(t)}:o;t.exports=a},"jbM+":function(t,n,e){var r=e("R/W3");t.exports=function(t,n){return!!(null==t?0:t.length)&&r(t,n,0)>-1}},qPyV:function(t,n,e){var r=e("ut/Y"),o=e("LGYb");t.exports=function(t,n){return t&&t.length?o(t,r(n,2)):[]}}}]);
//# sourceMappingURL=component---src-pages-authors-tsx-2bcb570da08ac514a97c.js.map