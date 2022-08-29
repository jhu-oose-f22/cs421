"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[8122],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(o),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2140:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={id:"hw1",title:"Homework 1"},i=void 0,s={unversionedId:"hw/hw1",id:"hw/hw1",title:"Homework 1",description:"* You are expected to work individually.",source:"@site/docs/hw/hw1.md",sourceDirName:"hw",slug:"/hw/hw1",permalink:"/cs421/docs/hw/hw1",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/hw/hw1.md",tags:[],version:"current",frontMatter:{id:"hw1",title:"Homework 1"}},l={},p=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Task: MyBooks App",id:"task-mybooks-app",level:2},{value:"Submission",id:"submission",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You are expected to work individually."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Due: Wednesday September 12th at 11pm EST (Baltimore time).")))),(0,a.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,a.kt)("admonition",{title:"Objectives",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Warming/Brushing up (required backgroung) techincal skillset for OOSE!")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It would make sense for you to clone your empty '",(0,a.kt)("inlineCode",{parentName:"p"},"jhu-oose"),"'s private repo before attempting any of these tasks. Create a folder named ",(0,a.kt)("inlineCode",{parentName:"p"},"hw1")," in the repo with three subfolders named ",(0,a.kt)("inlineCode",{parentName:"p"},"hw1-task1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hw1-task2"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"hw1-task3")," in it, and push it to your Github's repo. As you make progress and work through the tasks, you can then make periodic pushes to save your progress.")),(0,a.kt)("h2",{id:"task-mybooks-app"},"Task: MyBooks App"),(0,a.kt)("p",null,"Recall the MyBooks App from Introduction chapter. Your task is to implement the MyBooks App."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can choose any software stack and it is entirely up to you how basic or complex you will make it.")),(0,a.kt)("p",null,"You can build an app as simple as a single webpage with a button (called ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Submit"),") and a textbox (where the user enter their favorite book name). The user enters a favorite book name, clicks on the botton, and the book name gets stored in a database. Then it redirectes to a page (or uses the same page) to show the list of all favorite books stored in the database. In comparision, you can build a full-fledged application where you can have separate list of favorite books per user, allow searching amongst saved favorited books, etc."),(0,a.kt)("p",null,"You have more than two weeks to build this app. We will give you the full mark for a simple minimal implementation! The goal here is to establish a baseline for your technical skillset, and how much you can work and accomplish within the limited time. This includes how you test and document your application, organize your codebase, etc."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'The end-product does not need to be a web app! If your technical experience is in building mobile or desktop apps, feel free to build TinyURL as one. We can "imagine" it would redirect from the alias URL to the original one. Still, the app must have the components of a minimal desktop/mobile app (UI + hosted database).')),(0,a.kt)("h3",{id:"submission"},"Submission"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.gradescope.com/courses/420577"},"Gradescope")),(0,a.kt)("li",{parentName:"ul"},"Click on HW1."),(0,a.kt)("li",{parentName:"ul"},"You will be presented with the submission prompt."),(0,a.kt)("li",{parentName:"ul"},'Click on "Connect to GitHub".')),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5682).Z,width:"1173",height:"858"})),(0,a.kt)("p",null,"You will be redirected to authorize Gradescope to communicate with the GitHub API and access your repositories! Once Gradescope and GitHub are linked, they stay linked! You don't need to repeat this process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select your homework repository."),(0,a.kt)("li",{parentName:"ul"},'Select the "main" branch.'),(0,a.kt)("li",{parentName:"ul"},"Hit Upload!")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5539).Z,width:"501",height:"403"})),(0,a.kt)("p",null,"The files in your GitHub repository are now submitted as your homework submission."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Gradescope does not automatically fetch changes from your GitHub repository.")),(0,a.kt)("p",null,'If you make any updates to your repository, you must "resubmit" your work to Gradescope. (The resubmission process is exactly the same as the first submission.)'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8913).Z,width:"1212",height:"835"})))}c.isMDXComponent=!0},5682:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hw1_1-eb1ebf3106beb4dc5d2864fe51f9fa1c.jpg"},5539:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hw1_2-05eb93f3b3657a83ae4f83efffa421bb.jpg"},8913:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hw1_3-184af97bb2776682b35bfe721ae5080b.jpg"}}]);