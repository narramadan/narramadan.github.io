(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{qScI:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return d}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var s=t("7ljp");var n,c={templateKey:"article",published:!1,displayComments:!0,showAuthorInfo:!0,showSideBar:!1,author:"narramadan",title:"A Step by Step guide to create CRUD RESTful APIs using Quarkus + JPA with Postgres database",description:"A detailed step by step guide to create CRUD RESTful APIs using Quarkus + JPA with Postgres database",date:"2020-04-05T15:46:37.121Z",updated:"2020-04-05T15:46:37.121Z",cover:"../../../images/blog-banners/crud-springboot-banner-1200x690.png",category:"crudFromScratch",tags:["Java","Quarkus","CRUD","JPA","featured"],keywords:["Step by Step guide using Quarkus","Quarkus","CRUD","Java","Java8","Quarkus JPA","Rest API","Java Rest API","CRUD Rest API","Step by Step guide","Quarkus postgres","Resteasy Postgres","CRUD Postgres","Quarkus Kafka","Microservice Kafka","Microservice CRUD","Docker Kafka","Docker Compose Kfka","Kafka java microservice","narra.madan","narramadan","narra.madan@outlook.com","Madan Narra","Narra Madan"]},o=(n="Todo",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.mdx)("div",e)}),i={_frontmatter:c};function d(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(s.mdx)("wrapper",Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h2",null,"Introduction"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Catalogue Management System Restful APIs"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Technology stack for implementing the Restful APIs…"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Why Quarkus?"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Eclipse MicroProfile"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h4",null,"Health"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h4",null,"Metrics"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h4",null,"OpenTracing"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Prerequisites"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("p",null,"Below are the prerequisites that are needed to try out this application"),Object(s.mdx)("h3",null,"Configure Development Environment on Ubuntu OS or any linux flavour of your choice"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Start PostgreSQL"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Start Kafka Cluster"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("p",null,"Use below command to start Kafka Cluster using Docker Compose with instructions provided in ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"kafka-docker-compose.yaml")," file provided with the application codebase."),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Get Kafka Cluster up in detached mode"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ docker-compose -f kafka-docker-compose.yaml up -d"))),Object(s.mdx)("p",null,"Verify if Kafka cluster is started and working as expected."),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Hop onto kafka bash shell"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ docker ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"exec")," -it ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"CONTAINER_ID",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," /bin/bash"))),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Create a topic"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ./bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"1")," --partitions ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"1")," --topic ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"test")))),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"List Topics"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ./bin/kafka-topics.sh --list --bootstrap-server localhost:9092"))),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Send some messages"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ./bin/kafka-console-producer.sh --broker-list localhost:9092 --topic ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"test"),"\n",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," Test Message ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"1"),"\n",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," Test Message ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"2")))),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Start Consumer and get messages from beginning"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ./bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"test")," --from-beginning"))),Object(s.mdx)("p",null,"If messages sent to topic is listed from consumer, then Kafka cluster is started successfully with docker compose."),Object(s.mdx)("h3",null,"Centralized Logging with Greylog"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Distributed Tracing with Jaeger"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Capturing Metrics with Prometheus & Grafana"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Bootstrapping Project with Quarkus Code"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Configure IntelliJ IDEA"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Using Project Lombok"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"IDE Plugins"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Replace application.properties with application.yml"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Adding additional dependencies to maven"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Bean Validation API & Hibernate Validator"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Quarkus Health & Metrics"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"And many more.."),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Updating Maven and Gradle files"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Configure H2 database and define JPA Entity"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"JPA Panache Repository"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"What to define in a Repository Interface?"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"JAX-RS Controller"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Handling Exceptions"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Implement Unit & Integration tests"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Collecting Code Coverage Metrics"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Running Quarkus Application"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Run the application using Maven"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Run the application using Gradle"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Run the application using java -jar command"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Automatic Restart and Live Reloading"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Building Native executable"),Object(s.mdx)("p",null,"Create a native executable by executing below command"),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"maven"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ mvn clean package -Pnative"))),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"gradle"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ gradle "))),Object(s.mdx)("p",null,"Below is command execution screenshot showing "),Object(s.mdx)("p",null,Object(s.mdx)("undefined",{parentName:"p"},"\n  ",Object(s.mdx)("figure",{className:"gatsby-resp-image-figure",style:{}},"\n  \n  ",Object(s.mdx)("a",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-link",href:"/static/0aa8eb84271f51b930e4c0fef8357fa7/0d1a4/quarkus-mvn-native-package.png",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n  \n  ",Object(s.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",maxWidth:"650px",marginLeft:"auto",marginRight:"auto"}}),"\n    ",Object(s.mdx)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.2972972972973%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA+wAAAPsAHpfpy9AAAB8klEQVQoz21S2W7jMAz0p+y2iZ341H1YlyXbaYOi+/+fs+PkZY8AA4ESOBxyqIquv0bJWtW3auj1RDSfYxBWE2t7pXrO22EE+ol043RgmhC3/XDth4qs340WPwx5M3QMWi1+clIEu6ybMLaXcpRyILS+tsCl7Zq2e57Nta30eifOTTHQnMZ5Hqw5M3bi7MQokYoLRZmgQo6UUS6E0lQIBEwqoJLlk3o/Rj8m3832rMQBq09KEKOt83qelXWI9OykMXixPljvmZCVDSnve9o2G6O0swnBpYRYOedi9GmZ8RKXlEtYckiLj0tcMq4oUYWlLGXF67bffEz6IXJpW8ol18Y4j4GF1u91/Xau3+oG+Hk6v9fNqblUedvKdptDPOqVNZWyf3zGZYFhMT+lUsyFHbYRFIJV14fV4FcgbB+fyECH4LtH6rrf4lIQA8parjQT6rmzS9c/93Qoo+e0rmgPgmXbwUcVEKyPZnaYk3AhjT16/huHMtqDuH2Q83YLBzlPlJrZowSukIU3SP0fFWT/IO/wHsoTZTAZHMyMlWjnXpNhWF63g3y/5/0WSgm5dMMAC8NjJbDahVRfri/IfP3q/Xz1ptOqE7xTsleSMHwtY45fYUGeGIfVL8jT+s2dE/7IY1xOhBHG4Gfz/MAPIO/p0D/4DSt1rEyuhIWEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n      ",Object(s.mdx)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Building native executable",title:"Building native executable",src:"/static/0aa8eb84271f51b930e4c0fef8357fa7/a6d36/quarkus-mvn-native-package.png",srcSet:["/static/0aa8eb84271f51b930e4c0fef8357fa7/222b7/quarkus-mvn-native-package.png 163w","/static/0aa8eb84271f51b930e4c0fef8357fa7/ff46a/quarkus-mvn-native-package.png 325w","/static/0aa8eb84271f51b930e4c0fef8357fa7/a6d36/quarkus-mvn-native-package.png 650w","/static/0aa8eb84271f51b930e4c0fef8357fa7/e548f/quarkus-mvn-native-package.png 975w","/static/0aa8eb84271f51b930e4c0fef8357fa7/0d1a4/quarkus-mvn-native-package.png 1036w"],sizes:"(max-width: 650px) 100vw, 650px"})),"\n    "),"\n  "),"\n  \n  "),"\n    \n  ",Object(s.mdx)("figcaption",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-figcaption"}),"Building native executable"),"\n  "),"\n      ")),Object(s.mdx)("p",null,"This should generate ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"catalogue-crud-1.0.0-SNAPSHOT-runner")," in target folder when maven command is executed. We can run the application by running it with below command"),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Run Native Executable"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ./target/catalogue-crud-1.0.0-SNAPSHOT-runner"))),Object(s.mdx)("p",null,Object(s.mdx)("undefined",{parentName:"p"},"\n  ",Object(s.mdx)("figure",{className:"gatsby-resp-image-figure",style:{}},"\n  \n  ",Object(s.mdx)("a",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-link",href:"/static/d295937f4dad8f34255e9f9e59ee2845/f1901/quarkus-native-executable.png",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n  \n  ",Object(s.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",maxWidth:"650px",marginLeft:"auto",marginRight:"auto"}}),"\n    ",Object(s.mdx)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.265392781316347%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA+wAAAPsAHpfpy9AAAAwklEQVQY002NW5KEIAxF2cuA2K0QwltQaXX/e+rAzMdUnbp1EpLA3uemWoVWlxKFQQFBgOMmcPAcAteuo6zQlpr09FJagdFo30ozADTowCBab6w12JnmWUjJp2kgyQXln88/kyS4nFk5zr19fEo2RAJ9IFYwyuCq+w8klAQ11+FdxgBr99OuJ5V6fq7zurf9cDHFrYzc/o8uSi8aFgVUUlLJ2nWnUkLOuVSazvvRve6072P2MWGIdNrFGFL+PeqHUPkFNjo59PKDGmsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n      ",Object(s.mdx)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Running executable application",title:"Running executable application",src:"/static/d295937f4dad8f34255e9f9e59ee2845/a6d36/quarkus-native-executable.png",srcSet:["/static/d295937f4dad8f34255e9f9e59ee2845/222b7/quarkus-native-executable.png 163w","/static/d295937f4dad8f34255e9f9e59ee2845/ff46a/quarkus-native-executable.png 325w","/static/d295937f4dad8f34255e9f9e59ee2845/a6d36/quarkus-native-executable.png 650w","/static/d295937f4dad8f34255e9f9e59ee2845/f1901/quarkus-native-executable.png 942w"],sizes:"(max-width: 650px) 100vw, 650px"})),"\n    "),"\n  "),"\n  \n  "),"\n    \n  ",Object(s.mdx)("figcaption",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-figcaption"}),"Running executable application"),"\n  "),"\n      ")),Object(s.mdx)("h3",null,"reflection-config.json"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Building & Running Quarkus Application Docker Image"),Object(s.mdx)("p",null,"Run the below command to build native executable and then create docker image with native executable file"),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Build Docker Image"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ mvn clean package -Pnative\n\n$ docker build -f src/main/docker/Dockerfile.native -t crud-catalog-quarkus ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),".")))),Object(s.mdx)("p",null,"Now lets start docker container with the image created. To access postgres database container that we already started for the development, we need to use ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"--net=host")," to access it through the ip of host machine."),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Run Docker image"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ docker run -i --rm -p ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"8080"),":8080 --net",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),"host crud-catalog-quarkus"))),Object(s.mdx)("h2",null,"Deploying Quarkus Application to Kubernetes"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Setup Kubernetes Cluster"),Object(s.mdx)("p",null,"If Kubernetes is not installed and configured, Follow below steps to setup Kubernetes Cluster using ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"MicroK8s")," on Ubuntu instance"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ sudo snap install microk8s --classic"))),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Join user group")),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ sudo usermod -a -G microk8s $USER\n$ su - $USER"))),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"verify installation")),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ microk8s.kubectl get nodes"))),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Create alias for kubectl")),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ sudo snap alias microk8s.kubectl kubectl"))),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Create shortcut for kubectl")),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ vi ~/.bashrc\n$ alias k='microk8s.kubectl'"))),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"configure firewall to allow pod-to-pod and pod-to-internet communication:")),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ sudo ufw allow in on cni0 && sudo ufw allow out on cni0\n$ sudo ufw default allow routed"))),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Write cluster config information to ",Object(s.mdx)("code",Object.assign({parentName:"li"},{className:"language-text"}),"$HOME/.kube/config")," file")),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ microk8s.kubectl config view --raw > $HOME/.kube/config"))),Object(s.mdx)("h3",null,"Setup Skaffold"),Object(s.mdx)("p",null,"Google Container Tools Skaffold (",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://skaffold.dev/"}),"https://skaffold.dev/"),") helps us to build and deploy the Quarkus application onto Kubernetes. It is easy and developer friendly way to build and deploy application to a local cluster like minikube/microk8s, without the need to push the image to external container registry."),Object(s.mdx)("p",null,"If Skaffold is not installed and configured, Follow below steps to setup Skaffold"),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Setup Skaffold"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"curl")," -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64\n\n$ ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"chmod")," +x skaffold\n\n$ ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"sudo")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"mv")," skaffold /usr/local/bin\n\n$ skaffold version\nv1.7.0"))),Object(s.mdx)("h3",null,"Deploying with Skafflod"),Object(s.mdx)("p",null,"Copy Dockerfile that is provisioned with Quarkus generated code artifact to root of the project"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"cp")," src/main/docker/Dockerfile.native Dockerfile"))),Object(s.mdx)("p",null,"Skaffold needs Kubernetes Manifest files to be created before initializing and deploying our application. "),Object(s.mdx)("p",null,Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Kubernetes manifests")," are used to create, modify and delete Kubernetes resources such as pods, deployments, services or ingresses. It is very common to define manifests in form of .yaml files and send them to the Kubernetes API Server via commands such as kubectl apply -f my-file.yaml or kubectl delete -f my-file.yaml."),Object(s.mdx)("p",null,"Create file ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"k8s-pod.yaml")," with below content to define the pod and containers to run within it."),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"k8s-pod.yaml"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"yaml"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-yaml"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"apiVersion"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," v1\n",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"kind"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," Pod\n",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"metadata"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"name"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," crud",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"-"),"catalog",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"-"),"quarkus\n",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"spec"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"hostNetwork"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token boolean important"}),"true"),"\n  ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"containers"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n    ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"name"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," crud",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"-"),"catalog",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"-"),"quarkus\n      ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token key atrule"}),"image"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," narramadan/crud",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"-"),"catalog",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"-"),"quarkus"))),Object(s.mdx)("p",null,"Observe ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"hostNetwork: true"),". This is similar to using ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"--net=host")," to access it through the ip of host machine."),Object(s.mdx)("p",null,"Now, initialize Skaffold by running below command. This should prompt with options to choose the Dockerfile for the builder to build the image and generate ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"skaffold.yaml")," file "),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ skaffold init"))),Object(s.mdx)("p",null,Object(s.mdx)("undefined",{parentName:"p"},"\n  ",Object(s.mdx)("a",{className:"gatsby-resp-image-link",href:"/static/22e1ac16d1da95ab154fed400a03b62a/d9217/skaffold-init.png",style:{display:"block"},target:"_blank",rel:["noopener"]},"\n  \n  ",Object(s.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",maxWidth:"650px",marginLeft:"auto",marginRight:"auto"}}),"\n    ",Object(s.mdx)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.243362831858406%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAA+wAAAPsAHpfpy9AAABK0lEQVQoz42Ri26DMAxF+RUCcQJJeOdBgFGgAUrV//+dhXbSpm2aJh1ZtuR7fSUH4liK+7XYl2K9lEMvx2s1zFU/y4urhgVLG0uDa4N9VTZWlkiTa81lA1kWDNO8uHVy2/3x2Pbjdhxu22zfAaUkSSOAiHjI2WD8BMInEZBgcut+3Nfb4fZ9dm6c5n68tMNbKVXRyEjwiHtEdBqRbwTjvDRKU8ZJmp41SXGShP7Cj9VfxKq1jTYsL0RRZmXF8yLhIib0X2LT9abrKOepECzLMU3C+DyLAJ78KWYiN7Yrawk0RRgwSV740Rt5/kgRNJ1prK5brYa2tlp1bd2qtMxYVbAq5yKnKfMRvmoQ/hgDpAFZQBKQAd+HLUYKUA5hhlEGiL3+9IkPQrzdU/8OyddeoNyL53cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n      ",Object(s.mdx)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Skaffold init execution",title:"",src:"/static/22e1ac16d1da95ab154fed400a03b62a/a6d36/skaffold-init.png",srcSet:["/static/22e1ac16d1da95ab154fed400a03b62a/222b7/skaffold-init.png 163w","/static/22e1ac16d1da95ab154fed400a03b62a/ff46a/skaffold-init.png 325w","/static/22e1ac16d1da95ab154fed400a03b62a/a6d36/skaffold-init.png 650w","/static/22e1ac16d1da95ab154fed400a03b62a/d9217/skaffold-init.png 904w"],sizes:"(max-width: 650px) 100vw, 650px"})),"\n    "),"\n  "),"\n  \n  "),"\n    ")),Object(s.mdx)("p",null,"Run Skaffold to start the build and let the deployment complete"),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Running Skaffold"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ skaffold run\n\nGenerating tags",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),".."),".\n - narramadan/crud-catalog-quarkus -",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," WARN",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"0000",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," Unable to ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"find")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"git")," commit: running ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"git describe --tags --always",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n - stdout: \n - stderr: ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"fatal: not a git repository (or any of the parent directories): .git',Object(s.mdx)("span",Object.assign({parentName:"span"},{className:"token entity",title:"\\n"}),"\\n"),'"'),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),":")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"exit")," status ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"128")," \nnarramadan/crud-catalog-quarkus:dirty\nChecking cache",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),".."),".\n - narramadan/crud-catalog-quarkus: Found Remotely\nTags used ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in")," deployment:\n - narramadan/crud-catalog-quarkus -",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," narramadan/crud-catalog-quarkus:dirty@sha256:9f693b2c239e10bfa8ac875f3beffc4b8d9fd3ffad3a8db88a2290da02ff1ab6\nStarting deploy",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),".."),".\n - pod/crud-catalog-quarkus created\nWaiting ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"for")," deployments to stabilize",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),".."),".\nDeployments stabilized ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"143"),".861675ms\nYou can also run ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"skaffold run --tail",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," to get the logs"))),Object(s.mdx)("p",null,"Before using skaffold to deploy the application, run below command to watch the status"),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"Watch pods status changes once they re running"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"watch")," k get pods\n\nEvery ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"2"),".0s: kubectl get pods                                            madan-Inspiron-7570: Sun Apr ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"12")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"20"),":03:11 ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"2020"),"\n\n-- Upon starting deployment using dev or run\nNAME                   READY   STATUS              RESTARTS   AGE\ncrud-catalog-quarkus   ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),"/1     ContainerCreating   ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),"          4s\n\n-- When deployed\nNAME                   READY   STATUS    RESTARTS   AGE\ncrud-catalog-quarkus   ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"1"),"/1     Running   ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),"          2m25s\n\n-- upon deleting\nNAME                   READY   STATUS        RESTARTS   AGE\ncrud-catalog-quarkus   ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"1"),"/1     Terminating   ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),"          20m"))),Object(s.mdx)("h3",null,"Routing requests through Ambassador API Gateway"),Object(s.mdx)(o,{mdxType:"Todo"},"Need to research on extending skaffold to include ambassador API Gateway"),Object(s.mdx)("h2",null,"Testing APIs via Postman"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Application Health"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Application Metrics"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Add Catalogue Item"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Get Catalogue Items"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Update Catalogue Item"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Get Catalogue Item by SKU"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Delete Catalogue Item"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Handler Not Found"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Resource Not Found"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Validation Exception"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h3",null,"Invalid Request"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"),Object(s.mdx)("h2",null,"Gotchas"),Object(s.mdx)("h3",null,"Native Executable failing with No serializer found for class error"),Object(s.mdx)("p",null,"Post building and running native executable file, we might encounter below error when accessing API which should return valid value as expected."),Object(s.mdx)("div",{className:"gatsby-code-title gatsby-remark-code-title"},"No serializer found for class error"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"com.fasterxml.jackson.databind.exc.InvalidDefinitionException: \n  No serializer found ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"for")," class com.toomuch2learn.crud.catalogue.model.ResourceIdentity \n    and no properties discovered to create BeanSerializer ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"to avoid exception, disable SerializationFeature.FAIL_ON_EMPTY_BEANS",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(s.mdx)("p",null,"Follow steps provided here - ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://quarkus.io/guides/writing-native-applications-tips#registering-for-reflection"}),"https://quarkus.io/guides/writing-native-applications-tips#registering-for-reflection")," to register classes which needs reflection to serialize the objects to JSON."),Object(s.mdx)("h2",null,"Stopping services"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("p",{parentName:"li"},"Stop and remove Postgres")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("p",{parentName:"li"},"Stop and remove Kafka Cluster"))),Object(s.mdx)("p",null,"Run the below command from root of the project folder to stop and remove Kafka Cluster that is started to test drive the application"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"$ docker-compose -f kafka-docker-compose.yaml down"))),Object(s.mdx)("h2",null,"Conclusion"),Object(s.mdx)(o,{mdxType:"Todo"},"Complete this Section"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-content-articles-todo-crud-crud-rest-api-using-quarkus-jpa-index-md-64cfc1c8eee907ce0ad6.js.map