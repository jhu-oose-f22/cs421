"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[5042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,m=d["".concat(c,".").concat(b)]||d[b]||l[b]||n;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={id:"board",title:"Github Project Board",sidebar_label:"Project Board"},i=void 0,s={unversionedId:"readings/wk1/board",id:"readings/wk1/board",title:"Github Project Board",description:'If you have not already, read "user stories" and "project backlog" sections before reading this page!',source:"@site/docs/readings/wk1/project_board.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/board",permalink:"/cs421/docs/readings/wk1/board",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/readings/wk1/project_board.md",tags:[],version:"current",frontMatter:{id:"board",title:"Github Project Board",sidebar_label:"Project Board"}},c={},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you have not already, read ",(0,a.kt)("a",{parentName:"p",href:"user_stories"},'"user stories"')," and ",(0,a.kt)("a",{parentName:"p",href:"backlog"},'"project backlog"')," sections before reading this page!")),(0,a.kt)("p",null,"We will make a GitHub repository for your term project where you shall store your code and collaborate with teammates. Github's project boards feature enables easy tracking of work progress in a repository. Your group is required to set up a project board in your group repository."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Setup"),' - On the main page of your group repository, go to the "Projects" tab. You will get an option of creating a new project in the repository. Give it the name "Project Backlog". Make sure to select the "No Template" option since this will give you greater control over your board.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1716).Z,width:"1135",height:"174"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Structure"),' - Your project board should have a column "Backlog" followed by 3 columns for each iteration: "To Do", "In Progress", "Done". For example, "Iteration 1 To Do", "Iteration 1 In Progress" and "Iteration 1 Done", and so on. You can create columns with these specific names. The iteration "To Do" column represents the iteration backlog.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4527).Z,width:"1171",height:"854"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Usage")," - Each ",(0,a.kt)("a",{parentName:"p",href:"user_stories"},"user story"),' to be covered acts as a "card" in a column on the board. Then, each user story needs to be broken down into tasks that you will complete. Each task can automatically be linked to an issue in your repository in two ways - ',(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue"},"converting notes to issues")," and ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board"},"adding issues and PRs to project boards"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For the iteration you are working on, make sure to add detailed subtasks so advisors can clearly see the amount of work you're planning to do.")),(0,a.kt)("p",null,"For future iterations, make sure to have a To Do column. This can be filled with high-level tasks (user stories) you want to work on, for that iteration. This helps you plan out your project over time."),(0,a.kt)("p",null,"Consult the Github's documentation ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/managing-your-work-on-github/about-project-boards"},'"About project boards"')," for more information."),(0,a.kt)("admonition",{title:"Caution",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The state of your GitHub repository, in particular the project-board, will be a factor in your grade for each iteration.")))}l.isMDXComponent=!0},1716:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/board1-10023f43d12decf1a14bf18b8e7eff2d.jpg"},4527:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/board2-7f8d607ae326929c286c6bec88dbb1cd.jpg"}}]);