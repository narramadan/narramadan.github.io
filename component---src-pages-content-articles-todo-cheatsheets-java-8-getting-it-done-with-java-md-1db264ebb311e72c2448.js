(window.webpackJsonp=window.webpackJsonp||[]).push([[51,38,39,40,41,42,44,48],{UQ4M:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return r}));var n=t("rePB"),c=t("zLVn"),m=(t("q1tI"),t("7ljp"));function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p={templateKey:"article",published:!1,displayComments:!0,showAuthorInfo:!1,author:"narramadan",title:"Getting it done with JAVA",description:"Couple of things to do with Java",date:"2019-09-15T23:46:37.121Z",updated:"2019-09-15T23:46:37.121Z",cover:"../../../images/blog-banners/cheatsheet-banner-1200x690.png",category:"cheatsheets",tags:["java8","cheatsheets"],keywords:["java8","lamda","lamda expressions","Default Lambda in Java8","Java Time API","Collection API improvements","Concurrency API improvements","Java IO improvements","Functional Interfaces and Lambda Expressions","default and static methods in Interfaces","static methods","forEach()","Java IO improvements"]},d={_frontmatter:p};function r(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(m.mdx)("wrapper",o(o(o({},d),t),{},{components:a,mdxType:"MDXLayout"}),Object(m.mdx)("div",o({},{className:"gatsby-code-title gatsby-remark-code-title"}),"Maven command to create new project from Quickstart Archetype"),Object(m.mdx)("div",o({},{className:"gatsby-highlight","data-language":"bash"}),Object(m.mdx)("pre",o({parentName:"div"},{className:"language-bash"}),Object(m.mdx)("code",o({parentName:"pre"},{className:"language-bash"}),"$ mvn archetype:generate ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"\\"),"\n-DgroupId",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"="),"com.toomuch2learn ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"\\"),"\n-DartifactId",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"="),"example ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"\\"),"\n-DarchetypeArtifactId",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"="),"maven-archetype-quickstart -DarchetypeVersion",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"="),Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"1.4")," -DinteractiveMode",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"="),"false"))),Object(m.mdx)("div",o({},{className:"gatsby-code-title gatsby-remark-code-title"}),"Maven copy all dependencies bundled in war to target folder"),Object(m.mdx)("div",o({},{className:"gatsby-highlight","data-language":"bash"}),Object(m.mdx)("pre",o({parentName:"div"},{className:"language-bash"}),Object(m.mdx)("code",o({parentName:"pre"},{className:"language-bash"}),"$ mvn ",Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"install")," dependency:copy-dependencies"))),Object(m.mdx)("h2",o({},{id:"loop-n-times"}),"Loop n times"),Object(m.mdx)("div",o({},{className:"gatsby-highlight","data-language":"java"}),Object(m.mdx)("pre",o({parentName:"div"},{className:"language-java"}),Object(m.mdx)("code",o({parentName:"pre"},{className:"language-java"}),Object(m.mdx)("span",o({parentName:"code"},{className:"token comment"}),"// Loop through closed range"),"\n",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"IntStream"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"rangeClosed"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"1"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"8"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"\n         ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"forEach"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"System"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"out",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"::"),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"println"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(m.mdx)("span",o({parentName:"code"},{className:"token comment"}),"// Do some operation"),"\n",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"IntStream"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"rangeClosed"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"1"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"8"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"\n         ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"map"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"i ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"->")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"2")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"*")," i ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"-")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"1"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"\n         ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"forEach"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"System"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"out",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"::"),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"println"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(m.mdx)("span",o({parentName:"code"},{className:"token comment"}),"// build a custom iteration and limit the size of the iteration"),"\n",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"IntStream"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"iterate"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"1"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),",")," i ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"->")," i ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"+")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"2"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"\n         ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"limit"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"8"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"\n         ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"forEach"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"System"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"out",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"::"),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"println"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";")))),Object(m.mdx)("h1",o({},{id:"bigdecimal"}),"BigDecimal"),Object(m.mdx)("h2",o({},{id:"generating-random-bigdecimal-value-from-given-range"}),"Generating random BigDecimal value from given range"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",o({parentName:"li"},{href:"https://programming.guide/java/generate-random-number-of-given-length.html"}),"https://programming.guide/java/generate-random-number-of-given-length.html"))),Object(m.mdx)("div",o({},{className:"gatsby-highlight","data-language":"java"}),Object(m.mdx)("pre",o({parentName:"div"},{className:"language-java"}),Object(m.mdx)("code",o({parentName:"pre"},{className:"language-java"}),Object(m.mdx)("span",o({parentName:"code"},{className:"token keyword"}),"class")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigDecRand")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(m.mdx)("span",o({parentName:"code"},{className:"token keyword"}),"public")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token keyword"}),"static")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token keyword"}),"void")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"main"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"String"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"]")," args",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"String")," range ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"=")," args",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",o({parentName:"code"},{className:"token number"}),"0"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigDecimal")," max ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token keyword"}),"new")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigDecimal"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"range ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"+")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token string"}),'".0"'),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigDecimal")," randFromDouble ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token keyword"}),"new")," ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigDecimal"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"Math"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"random"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigDecimal")," actualRandomDec ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"=")," randFromDouble",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"divide"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"max",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),","),Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigDecimal"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"ROUND_DOWN",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n        ",Object(m.mdx)("span",o({parentName:"code"},{className:"token class-name"}),"BigInteger")," actualRandom ",Object(m.mdx)("span",o({parentName:"code"},{className:"token operator"}),"=")," actualRandomDec",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",o({parentName:"code"},{className:"token function"}),"toBigInteger"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(m.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"}")))))}r.isMDXComponent=!0},zLVn:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,c={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-content-articles-todo-cheatsheets-java-8-getting-it-done-with-java-md-1db264ebb311e72c2448.js.map