"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[560],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={id:"hw2",title:"Homework 2"},r=void 0,s={unversionedId:"hw/hw2",id:"hw/hw2",title:"Homework 2",description:"* You are expected to work individually.",source:"@site/docs/hw/hw2.md",sourceDirName:"hw",slug:"/hw/hw2",permalink:"/cs421/docs/hw/hw2",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/hw/hw2.md",tags:[],version:"current",frontMatter:{id:"hw2",title:"Homework 2"}},l={},p=[{value:"Getting set up!",id:"getting-set-up",level:2},{value:"Task 1: Client-Server Architecture",id:"task-1-client-server-architecture",level:2},{value:"Task 2: Technology Stack",id:"task-2-technology-stack",level:2},{value:"Task 3: UML Class Relationships",id:"task-3-uml-class-relationships",level:2},{value:"Task 4: From Model to Implementation",id:"task-4-from-model-to-implementation",level:2},{value:"Task 5: From Implementation to Model",id:"task-5-from-implementation-to-model",level:2},{value:"Submission",id:"submission",level:3}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You are expected to work individually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Due: Friday September 2nd at 11pm EST (Baltimore time).")))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Before trying to make a submission for this homework, make sure you have successfully joined the course Github organization ",(0,o.kt)("inlineCode",{parentName:"p"},"jhu-oose-f22")," (check out the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logistics")," page on the course website!)")),(0,o.kt)("h2",{id:"getting-set-up"},"Getting set up!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please go to ",(0,o.kt)("a",{parentName:"li",href:"https://classroom.github.com/a/DyrR-BPD"},"https://classroom.github.com/a/DyrR-BPD")),(0,o.kt)("li",{parentName:"ul"},"Login to your GitHub account and accept the invitation!"),(0,o.kt)("li",{parentName:"ul"},'A GitHub repository will be created for you that contains the starter code. The repository is "private" and you must not change it to a "public" one. You must not add any collaborators to it. Clone this repository locally. Open the folder in your favorite text editor and start working on it.')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The starter repository is also available here if you ever need it.")),(0,o.kt)("h2",{id:"task-1-client-server-architecture"},"Task 1: Client-Server Architecture"),(0,o.kt)("p",null,"Name at least two benefits and one potential drawback of Client-Server Architecture."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Write the answer in ",(0,o.kt)("inlineCode",{parentName:"p"},"task1.md")," file.")),(0,o.kt)("h2",{id:"task-2-technology-stack"},"Task 2: Technology Stack"),(0,o.kt)("p",null,'Suppose you are going to implement a new "Property Management" application using which you can pay your monthly rent, place maintenance orders, send/receive request with your landlord, see a list of community events etc. What type of application (Mobile, Web, or Desktop) will you go with? What kind of software architecture will you use? Finally, what software stack will you use? For each answer that you provide, write a few sentences to defend your pick(s).'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Write the answer in ",(0,o.kt)("inlineCode",{parentName:"p"},"task2.md")," file.")),(0,o.kt)("h2",{id:"task-3-uml-class-relationships"},"Task 3: UML Class Relationships"),(0,o.kt)("p",null,"For each of the UML class diagrams shown below, indicate the name used to describe the relationship (e.g., an inheritance relationship) between the classes and describe what the diagram communicates about the relationship (e.g., interpret the multiplicity and navigability of a relationship)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(437).Z,width:"801",height:"125"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8436).Z,width:"801",height:"118"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Write the answer in ",(0,o.kt)("inlineCode",{parentName:"p"},"task3.md")," file.")),(0,o.kt)("h2",{id:"task-4-from-model-to-implementation"},"Task 4: From Model to Implementation"),(0,o.kt)("p",null,"Consider the UML class diagram shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4530).Z,width:"448",height:"202"})),(0,o.kt)("p",null,"It represents the design which models a personal library system. A person (i.e., user of the system) has one or more shelf where different items such as books and dvds are kept. You must include fields and methods that are necessary to support relationships between the other classes shown on the UML diagram but it is not necessary to include any others. Assume that you can both add and remove items from the shelf. Further, assume that the items must be stored in the shelf in the order in which they were added and that the shelf must not contain duplicate ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," objects. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Write simplest implementation for these classes (in Java) in files named ",(0,o.kt)("inlineCode",{parentName:"p"},"Shelf.java"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.java"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.java"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"DVD.java"),".")),(0,o.kt)("h2",{id:"task-5-from-implementation-to-model"},"Task 5: From Implementation to Model"),(0,o.kt)("p",null,"Draw a UML class diagram to represent the relationship of all the types (classes) in the task-5 folder. The Java files are part of the implementation of a system that models a few different types of animals."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please draw the UML diagram using software such as ",(0,o.kt)("a",{parentName:"p",href:"https://diagrams.net/"},"https://diagrams.net/")," and save it as an image ",(0,o.kt)("inlineCode",{parentName:"p"},"task5.png"),". Hand-drawn diagrams will not be accepted.")),(0,o.kt)("h3",{id:"submission"},"Submission"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://www.gradescope.com/courses/420577"},"Gradescope")),(0,o.kt)("li",{parentName:"ul"},"Click on Homework 2."),(0,o.kt)("li",{parentName:"ul"},"You will be presented with the submission prompt."),(0,o.kt)("li",{parentName:"ul"},'Click on "Connect to GitHub".')),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5682).Z,width:"1173",height:"858"})),(0,o.kt)("p",null,"You will be redirected to authorize Gradescope to communicate with the GitHub API and access your repositories! Once Gradescope and GitHub are linked, they stay linked! You don't need to repeat this process."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select your homework repository."),(0,o.kt)("li",{parentName:"ul"},'Select the "main" branch.'),(0,o.kt)("li",{parentName:"ul"},"Hit Upload!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5539).Z,width:"501",height:"403"})),(0,o.kt)("p",null,"The files in your GitHub repository are now submitted as your homework submission."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you had already done the above steps to connect Github and Gradescope, then you would not need repeat them again here!")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'Gradescope does not automatically fetch changes from your GitHub repository. If you make any updates to your repository, you must "resubmit" your work to Gradescope. (The resubmission process is exactly the same as the first submission.)')),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8913).Z,width:"1212",height:"835"})))}c.isMDXComponent=!0},5682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hw1_1-eb1ebf3106beb4dc5d2864fe51f9fa1c.jpg"},5539:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hw1_2-05eb93f3b3657a83ae4f83efffa421bb.jpg"},8913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hw1_3-184af97bb2776682b35bfe721ae5080b.jpg"},437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hw2_1-90d9748059f062990e4f1dbd9d2b391c.jpg"},8436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hw2_2-6641cd81e0f9aa5bca806f3e0ad09862.jpg"},4530:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hw2_3-aa6dbfa43ae3d373981926b691c56c70.jpg"}}]);