(window.webpackJsonp=window.webpackJsonp||[]).push([[63,40,41,42,43,44,45,46,47,50,54],{clBU:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return d}));var n=t("zLVn"),s=(t("q1tI"),t("7ljp")),i={templateKey:"article",published:!1,displayComments:!0,showAuthorInfo:!1,author:"narramadan",title:"Provision Ubuntu Desktop with Java Development Environment done using Vagrant on Windows 10",description:"A detailed step by step walkthrough to provision Ubuntu Desktop with Java Development Environment done using Vagrant",date:"2020-02-05T23:46:37.121Z",updated:"2020-02-05T23:46:37.121Z",cover:"../../../images/blog-banners/setup-banner-1200x690.png",category:"setup",tags:["Vagrant","Setup"],keywords:["Vagrant","Java Development environment","java","dev envrionment","vagrant setup","ubuntu java","ubuntu java dev env","Java setup on ubuntu"]},o=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.mdx)("div",a)}},r=o("ExternalLink"),c=o("ExternalLinksListContainer"),l={_frontmatter:i};function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.mdx)("wrapper",Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h2",{id:"introduction"},"Introduction"),Object(s.mdx)("p",null,Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Vagrant")," is a provisioning tool for virtual machines and provides an easy way to build and manage virtual machine environment best suited for setting up development environments.  It can provision a virtual machine on VirtualBox, VMware, AWS etc. Vagrant works with the configuration defined in a file called ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Vagrantfile"),", which can be committed in the source control."),Object(s.mdx)("p",null,Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"VirtualBox")," is basically inception for your computer. You can use VirtualBox to run entire sandboxed operating systems within your own computer. It is the default provider for vagrant."),Object(s.mdx)("p",null,Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Ubuntu")," is a free and open-source Linux distribution based on Debian. Ubuntu is officially released in three editions: ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Desktop"),", ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Server"),", and ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Core")," for the internet of things devices and robots. All the editions can run on the computer alone, or in a virtual machine."),Object(s.mdx)("p",null,"This article provides step by step details on provisioning Ubuntu Desktop using Vagrant on Windows 10 with all applications needed for Java Development Environment."),Object(s.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.mdx)("p",null,"Vagrant and Virtual Box are the only prerequisites that are needed on Windows 10 to provision Java Development Environment on desired VM. Download, Install and restart your machine if prompted for."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Download and Install Oracle Virtual Box for windows available from ",Object(s.mdx)(r,{href:"https://www.virtualbox.org/wiki/Downloads",mdxType:"ExternalLink"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.virtualbox.org/wiki/Downloads"}),"https://www.virtualbox.org/wiki/Downloads"))),Object(s.mdx)("li",{parentName:"ul"},"Download and Install Vagrant for Windows available from ",Object(s.mdx)(r,{href:"https://www.vagrantup.com/downloads.html",mdxType:"ExternalLink"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.vagrantup.com/downloads.html"}),"https://www.vagrantup.com/downloads.html")))),Object(s.mdx)("p",null,"Executing the below command should Verify if Vagrant is installed successfully"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"~:",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"\\"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," vagrant -v\n\nVagrant ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"2.2"),".7"))),Object(s.mdx)("h2",{id:"vagrantfile"},"Vagrantfile"),Object(s.mdx)("p",null,"Create a sample directory or go inside your project folder and enter"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"~:",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"\\"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," vagrant init"))),Object(s.mdx)("p",null,"This will generate a minimal Vagrantfile, which we will modify to suit our need. We can choose different boxes packaged for Vagrant from official repository at ",Object(s.mdx)(r,{href:"https://app.vagrantup.com/boxes/search",mdxType:"ExternalLink"},Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://app.vagrantup.com/boxes/search"}),"https://app.vagrantup.com/boxes/search")),". We will be provisioning Ubuntu Desktop in this article."),Object(s.mdx)("h2",{id:"use-ubuntu-desktop-vagrant-box"},"Use Ubuntu Desktop Vagrant box"),Object(s.mdx)(r,{href:"https://app.vagrantup.com/peru/boxes/ubuntu-18.04-desktop-amd64",mdxType:"ExternalLink"},"peru/ubuntu-18.04-desktop-amd64")," is the vagrant box that we will be using to provision our development environment in this article.",Object(s.mdx)("p",null,Object(s.mdx)("figure",Object.assign({parentName:"p"},{className:"gatsby-resp-image-figure",style:{}}),"\n    ",Object(s.mdx)("span",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}}),"\n      ",Object(s.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/75eefb5350010eeebb92fb02e6f30169/f1d1f/ubuntu_vagrant_image.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(s.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.39263803680981%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB00lEQVQ4y32SyW7UQBCGfUEcENw58BhIXLkg5Q1YApFAoIgnQJw4EDgTRSDgIXgcxCYgnvE2nky8tJfYro/u9pjxMExa+lxV7fbv6l/l7BzA609w4znsHcGtl3DzRV/vvILrz+DKA7j6GC7fh2v7cGkXLtyGi3c2cfaOhKcf4e4bYf+D8OQ9PHwrGmz+6J15B/cMh33cPRTNEMdoQewSVmucb1syOidrOCJ9YsIqF7olMopjuq4/P5bt9MPx58K3KYRzxQ+v5bsHv0JhGusYYN/9DuHrBD674Eb9/hed/9RxcZqQpilJklLXNU51BqWmaYW6AVOfNUMtlLVQ1X1UlVBUfT5QVZUVMrRti1NXBWWRkedLsoQkqznNBgvO83Vz31FFQ3TSkqSlFlT2L6Y70+XKM5a+dWvIf7x1skzhTgOCcEYQBPi+j+d5OvcJo4hIEwQhcRyTZdka5pq2z7GguabrHjOZTJnNZvZjT4vG8dyaPWAE8jy3KKVsHAv+vXJZlvawOVQU2k9dG0xu9raxVXBzWM8f7H892xBMFRxHwmQGwYkQLECVjR4H02lluzWjYeqmaTYExnl/ZT1Li1xIlJAVetZKPYt6IAeh3oZeeCy4rcM/JocZRJkqN/wAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Ubuntu Desktop Vagrant Box",title:"Ubuntu Desktop Vagrant Box",src:"/static/75eefb5350010eeebb92fb02e6f30169/a6d36/ubuntu_vagrant_image.png",srcSet:["/static/75eefb5350010eeebb92fb02e6f30169/222b7/ubuntu_vagrant_image.png 163w","/static/75eefb5350010eeebb92fb02e6f30169/ff46a/ubuntu_vagrant_image.png 325w","/static/75eefb5350010eeebb92fb02e6f30169/a6d36/ubuntu_vagrant_image.png 650w","/static/75eefb5350010eeebb92fb02e6f30169/f1d1f/ubuntu_vagrant_image.png 739w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "),"\n    ",Object(s.mdx)("figcaption",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-figcaption"}),"Ubuntu Desktop Vagrant Box"),"\n  ")),Object(s.mdx)("p",null,"Delete Vagrantfile that is created and run the below command to initialize one with Ubuntu Desktop. "),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"~:",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"\\"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," vagrant init peru/ubuntu-18.04-desktop-amd64 "))),Object(s.mdx)("p",null,"This will create file Vagrantfile which have reference to the used public box."),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"ruby"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-ruby"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-ruby"}),"config",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"vm",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"box ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"peru/ubuntu-18.04-desktop-amd64"')))),Object(s.mdx)("p",null,"Run Vagrant command to provision the VM with the available Vagrantfile"),Object(s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"~:",Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"\\"),Object(s.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," vagrant up"))),Object(s.mdx)("p",null,"This will use the default provider ",Object(s.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"virtualbox")," and will download the virtualbox Ubuntu Desktop image and starts it up. You should observe something similar after running the above command. Image being downloaded is of around ~1.45 GB and it would take couple of minutes to complete."),Object(s.mdx)("p",null,"You should observe something similar after running the above command."),Object(s.mdx)("p",null,Object(s.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}}),"\n      ",Object(s.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/0191a66884c9bddbec1a1e22f38024f2/f53a0/vagrant_up_fedora.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(s.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.447852760736193%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABA0lEQVQY012Q2XKDMAxF+ZimlD1gVhtvGAPt///PrXBCJu3DmSvZM2ckRUpzuFVj9ScGdpkh5h6T6DDxNsCpbpocZZWgKL9emeWfgbyIXxlpI4JoPxz8ZkNtzIzFKZLLgN8WcH5KCzSsAGsrkqZBXN3/ZiRkD+sElB4hZAeph4A2U0CZEWbhIcOfGmh6hrYv0XZVkDesfGaByK4c6z7DHxJuE7B+gnEj1ZzeBElqdGOGuk3QTSmaLsWdxSjr23PNfyuvJPTbjONQ2Em8Ue29oF7i+4fuesoJa2lCxTGODANR0cqn4LzlOxEXCS7E/MiJP7h6LmiqOkaSfiDNboFLdua7+Bf8tMOxdqgpHgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"vagrant up fedora",title:"vagrant up fedora",src:"/static/0191a66884c9bddbec1a1e22f38024f2/a6d36/vagrant_up_fedora.png",srcSet:["/static/0191a66884c9bddbec1a1e22f38024f2/222b7/vagrant_up_fedora.png 163w","/static/0191a66884c9bddbec1a1e22f38024f2/ff46a/vagrant_up_fedora.png 325w","/static/0191a66884c9bddbec1a1e22f38024f2/a6d36/vagrant_up_fedora.png 650w","/static/0191a66884c9bddbec1a1e22f38024f2/e548f/vagrant_up_fedora.png 975w","/static/0191a66884c9bddbec1a1e22f38024f2/f53a0/vagrant_up_fedora.png 1062w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(s.mdx)("h2",{id:"resources"},"Resources"),Object(s.mdx)(c,{title:"References",links:[{url:"https://github.com/cosee/ubuntu-ansible-desktop-setup"},{url:"https://medium.com/the-lazy-programmer/automating-your-dev-environment-setup-with-vagrant-and-ansible-c6790b3257a0"},{url:"https://www.edureka.co/blog/development-environment-using-vagrant/"},{url:"http://ssledz.github.io/blog/2015/11/08/java-development-environment-with-vagrant-part-1/"},{url:"https://blog.versioneye.com/2015/05/05/setting-up-a-dev-environment-with-vagrant/"}],mdxType:"ExternalLinksListContainer"}),Object(s.mdx)("p",null,Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://dev.to/deepu105/my-beautiful-linux-development-environment-2afc"}),"https://dev.to/deepu105/my-beautiful-linux-development-environment-2afc")),Object(s.mdx)("p",null,Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/lvancrayelynghe/ansible-ubuntu"}),"https://github.com/lvancrayelynghe/ansible-ubuntu")),Object(s.mdx)("p",null,Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/cosee/ubuntu-ansible-desktop-setup"}),"https://github.com/cosee/ubuntu-ansible-desktop-setup")))}d.isMDXComponent=!0},zLVn:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-content-articles-todo-setup-setup-java-dev-env-using-vagrant-index-md-59f39c8b16979423e61b.js.map