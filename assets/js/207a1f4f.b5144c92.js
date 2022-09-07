"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[2704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,n(n({ref:t},c),{},{components:a})):r.createElement(h,n({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<i;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const i={id:"ideation",title:"Project Ideation"},n=void 0,s={unversionedId:"proj/ideation",id:"proj/ideation",title:"Project Ideation",description:'Consider your project idea and answer the following questions! The more "yes" your idea receives, the stronger the proposal is. You don\'t have to come up with a project that checks every criterion below. In fact, that may be too big a project. However, big projects can be trimmed down. The problem is small (weak) proposals.',source:"@site/docs/proj/ideation.md",sourceDirName:"proj",slug:"/proj/ideation",permalink:"/cs421/docs/proj/ideation",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/proj/ideation.md",tags:[],version:"current",frontMatter:{id:"ideation",title:"Project Ideation"}},p={},l=[],c={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Consider your project idea and answer the following questions! The more "yes" your idea receives, the stronger the proposal is. You don\'t have to come up with a project that checks every criterion below. In fact, that may be too big a project. However, big projects can be trimmed down. The problem is small (weak) proposals.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Does your proposed software solve a real problem? You are not solving a "real" problem if it is already solved, i.e., you are building an app that already exists (unless you are improving it).')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Does your proposed software benefit the Hopkins community? A good example is ",(0,o.kt)("a",{parentName:"p",href:"https://semester.ly/"},"Semesterly"),"!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Does your proposed software adhere (or can it be made to adhere) to the client-server architecture? Given the ubiquity of this architecture for apps, I think there is real value in gaining experience building on this architecture model.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will you be creating a public API for your proposed software? Most modern software applications and almost the entire Web is made up of APIs. Therefore, it is highly encouraged that you create a public and well-documented API for your OOSE project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will you be using a database to persist the data in your proposed software? Most apps have a database to persist data. Therefore, it is imperative that working with a database will provide a valuable experience. It also provides the opportunity to apply what you have learned in courses like EN.601.315. You should answer no to this question if the database would only store user credentials! In that case, if we were to, e.g., use OAuth or SSO, then there would be no need for a database at all!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case your proposed software will have a database, will it involve operations beyond CRUD? Examples include complex querying that involves sophisticated searching, filtering, grouping, sorting, joining tables, etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will your proposed software be using a persistence mechanism other than a database (or in addition to a database) such as a file server? You will need such a service if you store multimedia (images, videos, PDFs, etc) in your app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will your proposed software employ several external APIs? You will need such integrations when e.g. you need to provide notifications, accept payments, access calendar, integrate maps, NLP analysis, data analytics, AI/ML algorithms etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Can it be said that your proposed software is a "smart" and/or "data-intensive" application? Many applications today utilize AI-based algorithms and/or are data-intensive, wrestling with the amount of data, the complexity of data, and the speed at which it is changing. Such an application would provide you the opportunity to use AI/ML algorithms, distributed systems, parallel algorithms, ML and big-data recipes, etc.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Can it be said that your proposed software is a "compute-intensive" application? In compute-intensive apps, as opposed to data-intensive, the CPU power is more a limiting factor than the amount of data. Examples include having complex web-scraping on the backend, performing optimization tasks, solving hard computational problems like scheduling, etc.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will your proposed software have a complex and non-trivial user interface? Examples include building animations, simulations, complex interactive charts and visualization that update in real-time, etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will user experience (UX) be a big part of your proposed software? Every software must strive to provide the best user experience. That said, for some applications, this is so crucial that it can make or break the app. For example, if you are building an e-reader for users with dyslexia, then addressing their needs and creating an optimal user experience is paramount.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will software security be a big part of your proposed software? Every software must be made secure. That said, for some applications, this is so crucial that it can make or break the app. For example, securing an app that stores clients' medical or financial records is of utmost importance compared to an app that stores their doodle finger drawings!"))))}d.isMDXComponent=!0}}]);