"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[5916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"crud",title:"CRUD",sidebar_label:"CRUD"},i=void 0,s={unversionedId:"readings/wk1/crud",id:"readings/wk1/crud",title:"CRUD",description:"CRUD stands for Create, Read, Update and Delete, refering to the four basic operations we perform on data stored in a database. Almost all internet consumer-related software uses CRUD; you use it every time you ask an application to take your new data or modify the existing one. In the context of the JBApp application:",source:"@site/docs/readings/wk1/crud.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/crud",permalink:"/cs421/docs/readings/wk1/crud",draft:!1,editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk1/crud.md",tags:[],version:"current",frontMatter:{id:"crud",title:"CRUD",sidebar_label:"CRUD"},sidebar:"tutorialSidebar",previous:{title:"Client-Server Architecture",permalink:"/cs421/docs/readings/wk1/client_server"},next:{title:"Git for Version Control",permalink:"/cs421/docs/readings/wk1/git"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CRUD stands for Create, Read, Update and Delete, refering to the four basic operations we perform on data stored in a database. Almost all internet consumer-related software uses CRUD; you use it every time you ask an application to take your new data or modify the existing one. In the context of the ",(0,o.kt)("a",{parentName:"p",href:"jbapp"},"JBApp")," application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create:")," This would consist of a function which we would call to create and store a new job post in the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Read:")," This would consist of a function which would be called to see all (or a subset) of stored job posts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Update")," A function to call to make changes to an already existing job post."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete"),": A function to call to remove an already existing job post.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively.")))}u.isMDXComponent=!0}}]);