(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"3cYt":function(n,t){n.exports=function(n){return function(t){return null==n?void 0:n[t]}}},"6nK8":function(n,t,e){var i=e("dVn5"),a=e("fo6e"),o=e("dt0z"),p=e("9NmV");n.exports=function(n,t,e){return n=o(n),void 0===(t=e?void 0:t)?a(n)?p(n):i(n):n.match(t)||[]}},"9NmV":function(n,t){var e="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+e+"]",a="\\d+",o="[\\u2700-\\u27bf]",p="[a-z\\xdf-\\xf6\\xf8-\\xff]",d="[^\\ud800-\\udfff"+e+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",r="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+p+"|"+d+")",s="(?:"+l+"|"+d+")",c="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",f="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",r,x].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),g="(?:"+[o,r,x].join("|")+")"+f,u=RegExp([l+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,l,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,l+m,"$"].join("|")+")",l+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,g].join("|"),"g");n.exports=function(n){return n.match(u)||[]}},GpQV:function(n,t,e){"use strict";e.d(t,"f",(function(){return o})),e.d(t,"n",(function(){return p})),e.d(t,"m",(function(){return d})),e.d(t,"l",(function(){return r})),e.d(t,"k",(function(){return x})),e.d(t,"q",(function(){return l})),e.d(t,"p",(function(){return m})),e.d(t,"o",(function(){return s})),e.d(t,"e",(function(){return c})),e.d(t,"c",(function(){return f})),e.d(t,"i",(function(){return g})),e.d(t,"d",(function(){return u})),e.d(t,"b",(function(){return h})),e.d(t,"j",(function(){return w})),e.d(t,"h",(function(){return y})),e.d(t,"g",(function(){return b})),e.d(t,"a",(function(){return v}));var i=e("vOnD"),a=e("za5s"),o=i.d.div.withConfig({displayName:"templatesstyle__BlogPostsWrapper",componentId:"xlegz4-0"})(["\n  margin: 0 auto;\n  padding-top: 120px;\n  position: relative;\n\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n\n  .post_card {\n    margin-bottom: 120px;\n    @media (max-width: 990px) {\n      margin-bottom: 90px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n"]),p=i.d.div.withConfig({displayName:"templatesstyle__RelatedPostWrapper",componentId:"xlegz4-1"})(["\n  margin: 0 auto;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),d=i.d.h2.withConfig({displayName:"templatesstyle__RelatedPostTitle",componentId:"xlegz4-2"})(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  font-family: ",';\n  letter-spacing: 0.17em;\n  position: relative;\n  margin-bottom: 30px;\n\n  &:after {\n    content: "";\n    width: 68px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-top: 8px;\n  }\n'],Object(a.a)("colors.textColor","#292929"),Object(a.a)("fontFamily.0","'Fira Sans',sans-serif")),r=i.d.div.withConfig({displayName:"templatesstyle__RelatedPostItems",componentId:"xlegz4-3"})(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n"]),x=i.d.div.withConfig({displayName:"templatesstyle__RelatedPostItem",componentId:"xlegz4-4"})(["\n  flex: 0 0 33.333333333%;\n  max-width: 33.333333333%;\n  padding: 0 15px;\n  @media (max-width: 575px) {\n    flex: 0 0 100%;\n    max-width: 100%;\n    &:nth-child(n + 2) {\n      margin-top: 50px;\n    }\n  }\n  .post_card {\n    &:hover {\n      .post_preview {\n        a {\n          transform: scale(1.05);\n        }\n      }\n    }\n\n    .post_preview {\n      margin-bottom: 16px;\n      overflow: hidden;\n      a {\n        display: block;\n        transition: 0.25s ease-in-out;\n      }\n      &:before {\n        filter: blur(10px);\n      }\n    }\n    .post_title {\n      font-size: 21px;\n      a {\n        display: block;\n        white-space: nowrap;\n        width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      @media (max-width: 1400px) {\n        font-size: 19px;\n      }\n      @media (max-width: 1200px) {\n        font-size: 17px;\n      }\n      @media (max-width: 990px) {\n        font-size: 15px;\n      }\n    }\n    .post_content {\n      max-width: 100%;\n    }\n\n    .post_tags {\n      margin-top: 20px;\n      a {\n        @media (max-width: 990px) {\n          font-size: 12px;\n          margin-right: 15px;\n        }\n      }\n    }\n  }\n"]),l=i.d.div.withConfig({displayName:"templatesstyle__TagPostsWrapper",componentId:"xlegz4-5"})(["\n  margin: 0 auto;\n  padding-top: 80px;\n  position: relative;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 30px 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n\n  .post_card {\n    margin-bottom: 120px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n    @media (max-width: 990px) {\n      margin-bottom: 80px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n"]),m=i.d.div.withConfig({displayName:"templatesstyle__TagPageHeading",componentId:"xlegz4-6"})(['\n  padding-left: 210px;\n  font-size: 15px;\n  font-weight: 400;\n  margin-bottom: 120px;\n  position: relative;\n  @media (max-width: 1200px) {\n    padding-left: 160px;\n  }\n  @media (max-width: 990px) {\n    padding-left: 0;\n    font-size: 13px;\n    margin-bottom: 80px;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 60px;\n  }\n\n  &:after {\n    content: "";\n    display: block;\n    width: 90px;\n    height: 1px;\n    background: #292929;\n    margin-top: 15px;\n  }\n']),s=i.d.h1.withConfig({displayName:"templatesstyle__TagName",componentId:"xlegz4-7"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 8px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(a.a)("colors.primary","#D10068")),c=i.d.div.withConfig({displayName:"templatesstyle__BlogPostFooter",componentId:"xlegz4-8"})(["\n  margin: 0 auto;\n  width: 870px;\n  max-width: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 990px) {\n    padding-top: 40px;\n  }\n"]),f=i.d.div.withConfig({displayName:"templatesstyle__BlogPostComment",componentId:"xlegz4-9"})(["\n  margin: 0 auto;\n  width: 870px;\n  max-width: 100%;\n  padding-top: 80px;\n  @media (max-width: 990px) {\n    padding-top: 60px;\n  }\n"]),g=i.d.div.withConfig({displayName:"templatesstyle__PostShare",componentId:"xlegz4-10"})(["\n  display: flex;\n  align-items: center;\n  > span {\n    flex-shrink: 0;\n  }\n  > div,\n  .SocialMediaShareButton {\n    cursor: pointer;\n    margin-left: 25px;\n    font-size: 22px;\n    outline: 0;\n    color: ",";\n    transition: 0.15s ease-in-out;\n    @media (max-width: 767px) {\n      font-size: 18px;\n      margin-left: 20px;\n    }\n    &:hover {\n      color: ",";\n    }\n    svg {\n      display: block;\n    }\n  }\n"],Object(a.a)("colors.textColor","#292929"),Object(a.a)("colors.primary","#D10068")),u=i.d.div.withConfig({displayName:"templatesstyle__BlogPostDetailsWrapper",componentId:"xlegz4-11"})(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  padding: 90px 0 120px 0;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1100px) {\n    width: 1050px;\n  }\n  @media (min-width: 1250px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),h=i.d.div.withConfig({displayName:"templatesstyle__BlogDetailsContent",componentId:"xlegz4-12"})(["\n  ","\n"],(function(n){return n.extendedBlogPost?"flex: 0 0 calc(100%);\n    max-width: calc(100%);\n    padding-right: 60px;\n\n    @media (max-width: 1249px) {\n      padding-right: 50px;\n    }\n    @media (max-width: 1100px) {\n      padding-right: 40px;\n    }\n\n    @media (max-width: 990px) {\n      padding-right: 30px;\n    }\n\n    @media (max-width: 767px) {\n      flex: 0 0 100%;\n      max-width: 100%;\n      padding-right: 0;\n    }":"flex: 0 0 calc(100% - 360px);\n    max-width: calc(100% - 360px);\n    padding-right: 60px;\n\n    @media (max-width: 1249px) {\n      flex: 0 0 calc(100% - 320px);\n      max-width: calc(100% - 320px);\n      padding-right: 50px;\n    }\n    @media (max-width: 1100px) {\n      flex: 0 0 calc(100% - 280px);\n      max-width: calc(100% - 280px);\n      padding-right: 40px;\n    }\n\n    @media (max-width: 990px) {\n      flex: 0 0 calc(100% - 220px);\n      max-width: calc(100% - 220px);\n      padding-right: 30px;\n    }\n\n    @media (max-width: 767px) {\n      flex: 0 0 100%;\n      max-width: 100%;\n      padding-right: 0;\n    }"})),w=i.d.div.withConfig({displayName:"templatesstyle__PostTags",componentId:"xlegz4-13"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(a.a)("primary","#D10068")),y=i.d.div.withConfig({displayName:"templatesstyle__PostRow",componentId:"xlegz4-14"})(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -20px;\n  margin-bottom: 60px;\n  @media (max-width: 990px) {\n    margin-bottom: 40px;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 30px;\n  }\n"]),b=i.d.div.withConfig({displayName:"templatesstyle__PostGrid",componentId:"xlegz4-15"})(["\n  flex: 0 0 50%;\n  max-width: 50%;\n  padding: 0 20px;\n  margin-bottom: 90px;\n  @media (max-width: 990px) {\n    margin-bottom: 70px;\n  }\n  @media (max-width: 767px) {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 50px;\n  }\n"]),_=Object(i.e)(["\n  0%{     color: #000;    }\n  49%{    color: #000; }\n  60%{    color: transparent; }\n  99%{    color:transparent;  }\n  100%{   color: #000;    }\n"]),v=i.d.h1.withConfig({displayName:"templatesstyle__BlinkingToDo",componentId:"xlegz4-16"})(["\n  animation: "," 1.2s infinite;\n"],_)},N1om:function(n,t,e){var i=e("sgoq")((function(n,t,e){return n+(e?"-":"")+t.toLowerCase()}));n.exports=i},NnCg:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return x}));var i=e("q1tI"),a=e.n(i),o=e("9Dj+"),p=e("t3iN"),d=e("H8eV"),r=e("GpQV");t.default=function(n){var t=n.pageContext,e=n.data,i=t.tag,x=e.allMdx,l=x.edges,m=x.totalCount;return a.a.createElement(o.a,null,a.a.createElement(d.a,{title:i,description:"A collection of "+m+" post"}),a.a.createElement(r.q,null,a.a.createElement(r.p,null,a.a.createElement(r.o,null,i),"A collection of "+m+" post"),l.map((function(n){var t=n.node;n.index;return a.a.createElement(p.a,{key:t.fields.slug,title:t.frontmatter.title,url:t.fields.slug,description:t.frontmatter.description||t.excerpt,date:t.frontmatter.date,tags:t.frontmatter.tags})}))))};var x="969035249"},TKrE:function(n,t,e){var i=e("qRkn"),a=e("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,p=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=a(n))&&n.replace(o,i).replace(p,"")}},asDA:function(n,t){n.exports=function(n,t,e,i){var a=-1,o=null==n?0:n.length;for(i&&o&&(e=n[++a]);++a<o;)e=t(e,n[a],a,n);return e}},dVn5:function(n,t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(e)||[]}},dt0z:function(n,t,e){var i=e("zoYe");n.exports=function(n){return null==n?"":i(n)}},eUgh:function(n,t){n.exports=function(n,t){for(var e=-1,i=null==n?0:n.length,a=Array(i);++e<i;)a[e]=t(n[e],e,n);return a}},fo6e:function(n,t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return e.test(n)}},qRkn:function(n,t,e){var i=e("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});n.exports=i},sgoq:function(n,t,e){var i=e("asDA"),a=e("TKrE"),o=e("6nK8"),p=RegExp("['’]","g");n.exports=function(n){return function(t){return i(o(a(t).replace(p,"")),n,"")}}},t3iN:function(n,t,e){"use strict";var i=e("zLVn"),a=e("N1om"),o=e.n(a),p=e("q1tI"),d=e("Wbzz"),r=e("9eSz"),x=e.n(r),l=e("vOnD"),m=e("za5s"),s=l.d.div.withConfig({displayName:"postCardstyle__PostCardWrapper",componentId:"sc-1irje3i-0"})(["\n  position: relative;\n"]),c=l.d.div.withConfig({displayName:"postCardstyle__PostPreview",componentId:"sc-1irje3i-1"})(["\n  margin-bottom: 45px;\n  position: relative;\n  img {\n    border-radius: 3px;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 80%;\n    height: 80%;\n    background-color: #757575;\n    bottom: 0;\n    left: 10%;\n    filter: blur(15px);\n  }\n"]),f=l.d.div.withConfig({displayName:"postCardstyle__PostDetails",componentId:"sc-1irje3i-2"})(["\n  display: flex;\n"]),g=l.d.div.withConfig({displayName:"postCardstyle__PostDate",componentId:"sc-1irje3i-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  padding: 30px 35px 15px 35px;\n  margin-right: 20px;\n  line-height: 1;\n  color: ",";\n  @media (max-width: 1200px) {\n    font-size: 70px;\n    padding: 25px 25px 15px 25px;\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n    padding: 20px 20px 15px 20px;\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(m.a)("colors.textColor","#292929")),u=l.d.div.withConfig({displayName:"postCardstyle__PostContent",componentId:"sc-1irje3i-4"})(["\n  align-self: center;\n"]),h=l.d.h2.withConfig({displayName:"postCardstyle__PostTitle",componentId:"sc-1irje3i-5"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n"],Object(m.a)("colors.textColor","#292929"),Object(m.a)("colors.textColor","#292929")),w=l.d.div.withConfig({displayName:"postCardstyle__PostCategory",componentId:"sc-1irje3i-6"})(["\n  position: absolute;\n  width: 200px;\n  height: 30px;\n  top: 20px;\n  left: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1;\n  pointer-events: none;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.6);\n  > span {\n    font-size: 13px;\n    font-weight: normal;\n    line-height: 1;\n    margin-top: 3px;\n  }\n"]),y=l.d.p.withConfig({displayName:"postCardstyle__Excerpt",componentId:"sc-1irje3i-7"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(m.a)("fontSizes.3","15"),Object(m.a)("textColor","#292929")),b=l.d.div.withConfig({displayName:"postCardstyle__PostTags",componentId:"sc-1irje3i-8"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(m.a)("primary","#D10068")),_=function(n){var t=n.image,e=n.title,a=n.description,r=n.url,l=n.date,m=n.category,_=n.tags,v=n.className,z=n.imageType,C=n.placeholderBG,N=Object(i.a)(n,["image","title","description","url","date","category","tags","className","imageType","placeholderBG"]),I=["post_card"];return v&&I.push(v),p.createElement(s,Object.assign({className:I.join(" ")},N),null==t?null:p.createElement(c,{className:"post_preview"},p.createElement(d.Link,{to:r},"fluid"===z?p.createElement(x.a,{fluid:t,alt:"post preview",backgroundColor:C}):p.createElement(x.a,{fixed:t,alt:"post preview",backgroundColor:C})),m&&p.createElement(w,{dangerouslySetInnerHTML:{__html:m.name},className:"post_category"})),p.createElement(f,{className:"post_details"},l&&p.createElement(g,{dangerouslySetInnerHTML:{__html:l},className:"post_date"}),p.createElement(u,{className:"post_content"},p.createElement(h,{className:"post_title"},p.createElement(d.Link,{to:r},e)),a&&p.createElement(y,{dangerouslySetInnerHTML:{__html:a},className:"excerpt"}),null==_?null:p.createElement(b,{className:"post_tags"},_.map((function(n,t){return p.createElement(d.Link,{key:t,to:"/tags/"+o()(n)+"/"},"#"+n)}))))))};_.defaultProps={imageType:"fluid"};t.a=_},zoYe:function(n,t,e){var i=e("nmnc"),a=e("eUgh"),o=e("Z0cm"),p=e("/9aa"),d=i?i.prototype:void 0,r=d?d.toString:void 0;n.exports=function n(t){if("string"==typeof t)return t;if(o(t))return a(t,n)+"";if(p(t))return r?r.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-0fb50f2cf332d48ba661.js.map