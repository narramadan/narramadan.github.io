(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"1IKm":function(n,e,t){n.exports=t.p+"static/banner-bg-06090d7834ddd5f859e37a1f1fb721dd.png"},A1dR:function(n,e,t){"use strict";var a=t("zLVn"),i=t("N1om"),o=t.n(i),r=t("q1tI"),l=t("Wbzz"),d=t("9eSz"),p=t.n(d),s=t("vOnD"),m=t("bC0J"),c=s.d.div.withConfig({displayName:"featurePoststyle__FeaturedPostWrapper",componentId:"sc-1chefcc-0"})(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .post_preview {\n      > a {\n        transform: scale(1.1);\n      }\n    }\n  }\n"]),g=s.d.div.withConfig({displayName:"featurePoststyle__PostPreview",componentId:"sc-1chefcc-1"})(["\n  flex: 0 0 90px;\n  flex-shrink: 0;\n  margin-right: 15px;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    flex: 0 0 60px;\n  }\n  > a {\n    display: block;\n    transition: 0.15s ease-in-out;\n    transform-origin: top left;\n  }\n"]),x=s.d.div.withConfig({displayName:"featurePoststyle__PostDetails",componentId:"sc-1chefcc-2"})(["\n  flex-grow: 1;\n"]),f=s.d.h1.withConfig({displayName:"featurePoststyle__PostTitle",componentId:"sc-1chefcc-3"})(["\n  font-size: 18px;\n  font-weight: 700;\n\n  line-height: 1.53;\n  margin-bottom: 0;\n  font-family: ",";\n\n  @media (max-width: 990px) {\n    font-size: 16px;\n  }\n  @media (max-width: 575px) {\n    font-size: 14px;\n  }\n  a {\n    color: ",";\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: ",";\n    }\n  }\n"],Object(m.a)("fontFamily.0"),Object(m.a)("colors.textColor","#292929"),Object(m.a)("primary","#D10068")),h=s.d.div.withConfig({displayName:"featurePoststyle__PostMeta",componentId:"sc-1chefcc-4"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]),u=s.d.div.withConfig({displayName:"featurePoststyle__PostCategory",componentId:"sc-1chefcc-5"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: -12px;\n  margin-bottom: 12px;\n  @media (max-width: 990px) {\n    margin-top: 10px;\n  }\n  @media (max-width: 575px) {\n    margin-top: 8px;\n  }\n\n  a,\n  span {\n    display: block;\n    margin-right: 30px;\n    font-size: 13px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(m.a)("primary","#292929")),w=s.d.div.withConfig({displayName:"featurePoststyle__PostTags",componentId:"sc-1chefcc-6"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 12px;\n  @media (max-width: 990px) {\n    margin-top: 10px;\n  }\n  @media (max-width: 575px) {\n    margin-top: 8px;\n  }\n\n  a,\n  span {\n    display: block;\n    margin-right: 30px;\n    font-size: 13px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(m.a)("primary","#D10068")),y=function(n){var e=n.image,t=n.title,i=n.url,d=n.category,s=n.tags,m=n.className,y=n.imageType,b=n.placeholderBG,_=Object(a.a)(n,["image","title","url","category","tags","className","imageType","placeholderBG"]),v=["featured_post"];return m&&v.push(m),r.createElement(c,Object.assign({className:v.join(" ")},_),null==e?null:r.createElement(g,{className:"post_preview"},r.createElement(l.Link,{to:i},"fluid"===y?r.createElement(p.a,{fluid:e,alt:"post preview",backgroundColor:b}):r.createElement(p.a,{fixed:e,alt:"post preview",backgroundColor:b}))),r.createElement(x,null,d&&r.createElement(u,{className:"post_category"},r.createElement(l.Link,{to:"/categories/"+o()(d.alias)+"/"},""+d.name)),r.createElement(f,{className:"post_title"},r.createElement(l.Link,{to:i},t)),r.createElement(h,null,null==s?null:r.createElement(w,{className:"post_tags"},s.slice(0,2).map((function(n,e){return r.createElement(l.Link,{key:e,to:"/tags/"+o()(n)+"/"},"#"+n)}))))))};y.defaultProps={imageType:"fluid"};e.a=y},NFV3:function(n,e,t){"use strict";var a=t("zLVn"),i=t("N1om"),o=t.n(i),r=t("q1tI"),l=t("Wbzz"),d=t("9eSz"),p=t.n(d),s=t("vOnD"),m=t("bC0J"),c=s.d.div.withConfig({displayName:"postCardModernstyle__PostCardModernWrapper",componentId:"sc-1dwl64q-0"})(["\n  position: relative;\n"]),g=s.d.div.withConfig({displayName:"postCardModernstyle__PostPreview",componentId:"sc-1dwl64q-1"})(['\n  margin-bottom: 30px;\n  position: relative;\n  min-height: 150px;\n  img {\n    border-radius: 3px;\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    width: 80%;\n    height: 80%;\n    background-color: #757575;\n    bottom: 0;\n    left: 10%;\n    filter: blur(15px);\n  }\n']),x=s.d.div.withConfig({displayName:"postCardModernstyle__PostDetails",componentId:"sc-1dwl64q-2"})([""]),f=s.d.div.withConfig({displayName:"postCardModernstyle__PostDate",componentId:"sc-1dwl64q-3"})(["\n  position: absolute;\n  width: 75px;\n  height: 75px;\n  top: 30px;\n  left: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border-radius: 6px;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 1;\n  pointer-events: none;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.6);\n  > span {\n    font-size: 13px;\n    font-weight: normal;\n    line-height: 1;\n    margin-top: 3px;\n  }\n"]),h=s.d.div.withConfig({displayName:"postCardModernstyle__PostCategory",componentId:"sc-1dwl64q-4"})(["\n  position: absolute;\n  width: 200px;\n  height: 30px;\n  top: 30px;\n  right: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1;\n  pointer-events: none;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.6);\n  > span {\n    font-size: 13px;\n    font-weight: normal;\n    line-height: 1;\n    margin-top: 3px;\n  }\n"]),u=s.d.h2.withConfig({displayName:"postCardModernstyle__PostTitle",componentId:"sc-1dwl64q-5"})(["\n  font-size: 21px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  font-family: ",";\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 20px;\n  }\n  @media (max-width: 990px) {\n    font-size: 19px;\n  }\n  @media (max-width: 575px) {\n    font-size: 18px;\n  }\n"],Object(m.a)("colors.textColor","#292929"),Object(m.a)("fontFamily.0"),Object(m.a)("colors.textColor","#292929")),w=s.d.p.withConfig({displayName:"postCardModernstyle__Excerpt",componentId:"sc-1dwl64q-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(m.a)("fontSizes.3","15"),Object(m.a)("textColor","#292929")),y=s.d.div.withConfig({displayName:"postCardModernstyle__PostTags",componentId:"sc-1dwl64q-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(m.a)("primary","#D10068")),b=function(n){var e=n.image,t=n.title,i=n.description,d=n.url,s=n.date,m=n.category,b=n.tags,_=n.className,v=n.imageType,C=n.placeholderBG,E=Object(a.a)(n,["image","title","description","url","date","category","tags","className","imageType","placeholderBG"]),N=["post_card_modern"];return _&&N.push(_),r.createElement(c,Object.assign({className:N.join(" ")},E),null==e?null:r.createElement(g,{className:"post_preview"},r.createElement(l.Link,{to:d},"fluid"===v?r.createElement(p.a,{fluid:e,alt:"post preview",backgroundColor:C}):r.createElement(p.a,{fixed:e,alt:"post preview",backgroundColor:C})),s&&r.createElement(f,{dangerouslySetInnerHTML:{__html:s},className:"post_date"}),m&&r.createElement(h,{dangerouslySetInnerHTML:{__html:m.name},className:"post_category"})),r.createElement(x,{className:"post_details"},null==b?null:r.createElement(y,{className:"post_tags"},b.map((function(n,e){return r.createElement(l.Link,{key:e,to:"/tags/"+o()(n)+"/"},"#"+n)}))),r.createElement(u,{className:"post_title"},r.createElement(l.Link,{to:d},t)),i&&r.createElement(w,{dangerouslySetInnerHTML:{__html:i},className:"excerpt"})))};b.defaultProps={imageType:"fluid"};e.a=b},QeBL:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),o=t("9Dj+"),r=t("vOnD"),l=r.d.div.withConfig({displayName:"style__PersonalBlogWrapper",componentId:"sc-1gg4igu-0"})([""]),d=t("mwIZ"),p=t.n(d),s=t("Wbzz"),m=t("DFqO"),c=t("NFV3"),g=t("X2zo"),x=r.d.div.withConfig({displayName:"style__BlogPostsWrapper",componentId:"t6iv7y-0"})(["\n  margin: 0 auto;\n  padding-top: 120px;\n  position: relative;\n  @media (min-width: 991px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),f=r.d.div.withConfig({displayName:"style__PostRow",componentId:"t6iv7y-1"})(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -20px;\n  margin-bottom: 30px;\n  @media (max-width: 990px) {\n    margin-bottom: 20px;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 10px;\n  }\n"]),h=r.d.div.withConfig({displayName:"style__PostGrid",componentId:"t6iv7y-2"})(["\n  flex: 0 0 50%;\n  max-width: 50%;\n  padding: 0 20px;\n  margin-bottom: 90px;\n  @media (max-width: 990px) {\n    margin-bottom: 70px;\n  }\n  @media (max-width: 767px) {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 50px;\n  }\n"]),u=r.d.div.withConfig({displayName:"style__SeeMore",componentId:"t6iv7y-3"})(["\n  text-align: center;\n"]),w=x,y=function(){var n=Object(s.useStaticQuery)("3256945676").allMdx.edges;return a.createElement(w,null,a.createElement(f,null,n.map((function(n){var e=n.node,t=e.frontmatter.title||e.fields.slug,i=p()(g.a,e.frontmatter.category),o=["#55efc4","#81ecec","#74b9ff","#a29bfe","#ffeaa7","#fab1a0","#e17055","#0984e3","#badc58","#c7ecee"],r=o[Math.floor(Math.random()*o.length)];return a.createElement(h,{key:e.fields.slug},a.createElement(c.a,{key:e.fields.slug,title:t,image:null==e.frontmatter.cover?null:e.frontmatter.cover.childImageSharp.fluid,url:e.fields.slug,description:e.excerpt,date:e.frontmatter.date,category:i,tags:e.frontmatter.tags,placeholderBG:r}))}))),a.createElement(u,null,a.createElement(s.Link,{to:"page/1"},a.createElement(m.a,{title:"See more",type:"submit"}))))},b=t("A1dR"),_=t("bC0J"),v=t("1IKm"),C=t.n(v),E=r.d.div.withConfig({displayName:"style__BannerWrapper",componentId:"sc-1xuhjmd-0"})(["\n  position: relative;\n  padding: 90px 0;\n  background-color: #d96233;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  min-height: 870px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 1500px) {\n    min-height: 700px;\n    padding: 80px 0;\n  }\n\n  @media (max-width: 990px) {\n    min-height: 600px;\n    padding: 60px 0;\n  }\n\n  @media (max-width: 767px) {\n    min-height: 300px;\n    padding: 40px 0;\n  }\n"],C.a),N=r.d.div.withConfig({displayName:"style__BannerInner",componentId:"sc-1xuhjmd-1"})(["\n  margin: 0 auto;\n  width: 100%;\n\n  @media (min-width: 991px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1170px;\n  }\n\n  @media (max-width: 990px) {\n    padding-left: 45px;\n  }\n\n  @media (max-width: 767px) {\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n"]),I=r.d.div.withConfig({displayName:"style__FeaturePosts",componentId:"sc-1xuhjmd-2"})(["\n  width: 460px;\n  max-width: 100%;\n  background-color: #fff;\n  border-radius: 6px;\n  padding: 45px;\n  @media (max-width: 990px) {\n    width: 400px;\n  }\n\n  @media (max-width: 767px) {\n    padding: 25px;\n  }\n\n  .featured_post {\n    margin-bottom: 30px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]),z=r.d.div.withConfig({displayName:"style__Title",componentId:"sc-1xuhjmd-3"})(["\n  color: ",";\n  font-size: 15px;\n  font-weight: 500;\n  font-family: ",';\n  letter-spacing: 0.17em;\n  position: relative;\n  margin-bottom: 30px;\n\n  &:after {\n    content: "";\n    width: 80px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-top: 8px;\n  }\n'],Object(_.a)("colors.textColor","#292929"),Object(_.a)("fontFamily.0","'Fira Sans',sans-serif")),k=function(){var n=Object(s.useStaticQuery)("2477455832").allMdx.edges;return i.a.createElement(E,null,i.a.createElement(N,null,i.a.createElement(I,null,i.a.createElement(z,null,"Featured Posts"),n.map((function(n){var e=n.node,t=e.frontmatter.title||e.fields.slug,a=p()(g.a,e.frontmatter.category),o=["#55efc4","#81ecec","#74b9ff","#a29bfe","#ffeaa7","#fab1a0","#e17055","#0984e3","#badc58","#c7ecee"],r=o[Math.floor(Math.random()*o.length)];return i.a.createElement(b.a,{key:e.fields.slug,title:t,image:null==e.frontmatter.cover?null:e.frontmatter.cover.childImageSharp.fluid,url:e.fields.slug,category:a,tags:e.frontmatter.tags,placeholderBG:r})})))))},j=function(n){var e=Object.assign({},n);return a.createElement(l,e,a.createElement(k,null),a.createElement(y,null))},P=t("H8eV");e.default=function(n){var e=n.data;return i.a.createElement(o.a,null,i.a.createElement(P.a,{title:"2much2learn | Blog",description:e.site.siteMetadata.description}),i.a.createElement(j,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a2748803b1093d3080c3.js.map