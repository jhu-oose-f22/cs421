"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[6376],{3905:(e,i,t)=>{t.d(i,{Zo:()=>N,kt:()=>M});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function I(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=n.createContext({}),s=function(e){var i=n.useContext(r),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},N=function(e){var i=s(e.components);return n.createElement(r.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,N=I(e,["components","mdxType","originalType","parentName"]),d=s(t),M=a,m=d["".concat(r,".").concat(M)]||d[M]||c[M]||o;return t?n.createElement(m,l(l({ref:i},N),{},{components:t})):n.createElement(m,l({ref:i},N))}));function M(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var I={};for(var r in i)hasOwnProperty.call(i,r)&&(I[r]=i[r]);I.originalType=e,I.mdxType="string"==typeof e?e:a,l[1]=I;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2645:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>I,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={id:"hw4",title:"Homework 4"},l=void 0,I={unversionedId:"hw/hw4",id:"hw/hw4",title:"Homework 4",description:"* You are expected to work individually.",source:"@site/docs/hw/hw4.md",sourceDirName:"hw",slug:"/hw/hw4",permalink:"/cs421/docs/hw/hw4",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/hw/hw4.md",tags:[],version:"current",frontMatter:{id:"hw4",title:"Homework 4"}},r={},s=[{value:"Getting set up!",id:"getting-set-up",level:2},{value:"Task 1: Write SRS",id:"task-1-write-srs",level:2},{value:"Task 2: Design Principles 1",id:"task-2-design-principles-1",level:2},{value:"Task 3: Design Principles 2",id:"task-3-design-principles-2",level:2},{value:"Task 4: Design Principle 3",id:"task-4-design-principle-3",level:2},{value:"Submission",id:"submission",level:3}],N={toc:s};function c(e){let{components:i,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},N,o,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You are expected to work individually."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Due: Friday September 16th at 11pm EST (Baltimore time).")))),(0,a.kt)("h2",{id:"getting-set-up"},"Getting set up!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please go to ",(0,a.kt)("a",{parentName:"li",href:"https://classroom.github.com/a/qezZi22c"},"https://classroom.github.com/a/qezZi22c")),(0,a.kt)("li",{parentName:"ul"},"Login to your GitHub account and accept the invitation!"),(0,a.kt)("li",{parentName:"ul"},'A GitHub repository will be created for you that contains the starter code. The repository is "private" and you must not change it to a "public" one. You must not add any collaborators to it. Clone this repository locally. Open the folder in your favorite text editor and start working on it.')),(0,a.kt)("h2",{id:"task-1-write-srs"},"Task 1: Write SRS"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"hw3#task-2-go-above--beyond-crud"},"homework 3's task 2"),", you answered some questions on an app named ",(0,a.kt)("inlineCode",{parentName:"p"},"CookBook"),". Complete a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1xsof7GoMBMUrotWfhQoi5YFlcOT0bSS93RN3pCJ-Ukw"},"SRS")," document for ",(0,a.kt)("inlineCode",{parentName:"p"},"CookBook")," and make sure the features you proposed there to go above and beyond CRUD are also included!"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'When listing your "Must-have" and "Nice-to-have" features in the SRS, make sure to write them in ',(0,a.kt)("em",{parentName:"p"},"role-goal-benefit")," form.")),(0,a.kt)("admonition",{title:"Save Your Answers",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Write the answers in ",(0,a.kt)("inlineCode",{parentName:"p"},"task1.md")," file.")),(0,a.kt)("h2",{id:"task-2-design-principles-1"},"Task 2: Design Principles 1"),(0,a.kt)("p",null,"Consider the following interface and classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface Payment {\n    Object status();\n    void initiatePayments();\n    void intiateLoanSettlement();\n    void initiateRePayment();\n    // possibly more method declarations\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class LoanPayment implements Payment {\n    @Override\n    public void initiatePayments() {\n        throw new UnsupportedOperationException("Not a bank payment");\n    }\n    // implementation of the other LoanPayment methods including the \n    // ones declared in (and required by) the Payment interface\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class BankPayment implements Payment {\n    @Override\n    public void intiateLoanSettlement() {\n        throw new UnsupportedOperationException("Not a loan payment");\n    }\n \n    @Override\n    public void initiateRePayment() {\n        throw new UnsupportedOperationException("Not a loan payment");\n    }\n    // implementation of the other BankPayment methods including \n    // the ones declared in (and required by) the Payment interface\n}\n')),(0,a.kt)("p",null,"What specific design principle(s) has/have been compromised here? How would you modify this design so that it complies with the compromised design principle(s)? Explain in details."),(0,a.kt)("admonition",{title:"Save Your Answers",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Write your answers in ",(0,a.kt)("inlineCode",{parentName:"p"},"task2.md"),".")),(0,a.kt)("h2",{id:"task-3-design-principles-2"},"Task 3: Design Principles 2"),(0,a.kt)("p",null,"Assume, you have designed & implemented a chess game app for a client! In your design, you have a class named ",(0,a.kt)("inlineCode",{parentName:"p"},"Board")," that represents, well, a chess board! In your ",(0,a.kt)("inlineCode",{parentName:"p"},"Board")," class there are a set of class fields and methods along with a class field (which is a 2D array) to store the pieces on the board and a method named ",(0,a.kt)("inlineCode",{parentName:"p"},"setLocation(int x, int y)")," to set the value of a particular location (to empty or a certain piece) on the board where ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," are the coordinates on the board. Now, the client comes back to you with some novel idea! of creating a 3D chess (with a whole new set of rules, etc.!)"),(0,a.kt)("p",null,"Naturally, you go back to the existing design you already have to start the process of creating the 3D chess. One idea that comes to mind to represent the new 3D board is to introduce a new class named ",(0,a.kt)("inlineCode",{parentName:"p"},"Board3D")," that ",(0,a.kt)("em",{parentName:"p"},"extends")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Board"),". Is this a good idea or a bad idea? Defend your answer in the light of SOLID principles."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note that the specific rules of this new 3D chess is not our focus; rather, we are more concerned about how ",(0,a.kt)("inlineCode",{parentName:"p"},"Board3D")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Board")," are related.")),(0,a.kt)("admonition",{title:"Save Your Answers",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Write your answers in ",(0,a.kt)("inlineCode",{parentName:"p"},"task3.md"),".")),(0,a.kt)("h2",{id:"task-4-design-principle-3"},"Task 4: Design Principle 3"),(0,a.kt)("p",null,"A team of students are building a Bookstore Management Software. The starting UML design includes the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6359).Z,width:"602",height:"304"})),(0,a.kt)("p",null,"The team's advisor suggested this alternative design instead:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3533).Z,width:"802",height:"352"})),(0,a.kt)("p",null,"Briefly explain what SOLID design principle(s) the advisor's revised design adheres to? "),(0,a.kt)("admonition",{title:"Save Your Answers",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Write your answers in ",(0,a.kt)("inlineCode",{parentName:"p"},"task4.md"),".")),(0,a.kt)("h3",{id:"submission"},"Submission"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.gradescope.com/courses/420577"},"Gradescope")),(0,a.kt)("li",{parentName:"ul"},"Click on Homework4."),(0,a.kt)("li",{parentName:"ul"},"Select your homework repository."),(0,a.kt)("li",{parentName:"ul"},'Select the "main" branch.'),(0,a.kt)("li",{parentName:"ul"},"Hit Upload!")),(0,a.kt)("p",null,"The files in your GitHub repository are now submitted as your homework submission."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'Gradescope does not automatically fetch changes from your GitHub repository. If you make any updates to your repository, you must "resubmit" your work to Gradescope. (The resubmission process is exactly the same as the first submission.)')))}c.isMDXComponent=!0},6359:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U3R5bGVUeXBlPSJ0ZXh0L2NzcyIgaGVpZ2h0PSIzMDMuNjQzN3B4IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBzdHlsZT0id2lkdGg6NjAycHg7aGVpZ2h0OjMwM3B4O2JhY2tncm91bmQ6I0ZGRkZGRjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYwMiAzMDMiIHdpZHRoPSI2MDIuNDI5MXB4IiB6b29tQW5kUGFuPSJtYWduaWZ5Ij48ZGVmcy8+PGc+PCEtLU1ENT1bODRlM2E1ZTQyODc5ZmIzMjMxMTA0ZDNjOGU1OTI0MzldCmNsYXNzIEJvb2stLT48ZyBpZD0iZWxlbV9Cb29rIj48cmVjdCBjb2RlTGluZT0iNyIgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSI2My44NzkiIGlkPSJCb29rIiByeD0iNi4wNzI5IiByeT0iNi4wNzI5IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMjE0NTc0ODk4Nzg1NDI1OyIgd2lkdGg9IjI0Mi45MTUiIHg9IjE3LjAwNCIgeT0iMTcuMDA0Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzQuMDA4MSIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI4OS44Nzg1IiB4PSI5My41MjIzIiB5PSI2MC43MTY5Ij5Cb29rPC90ZXh0PjwvZz48IS0tTUQ1PVs0N2NjYmJjZDllNDYwODRjOTM1NjJhMzM1MTAyZGE1NV0KY2xhc3MgU2hlbGYtLT48ZyBpZD0iZWxlbV9TaGVsZiI+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSI2My44NzkiIGlkPSJTaGVsZiIgcng9IjYuMDcyOSIgcnk9IjYuMDcyOSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjIxNDU3NDg5ODc4NTQyNTsiIHdpZHRoPSIyNDIuOTE1IiB4PSIxNzkuNzU3MSIgeT0iMjI1LjkxMDkiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNC4wMDgxIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9Ijg5Ljg3ODUiIHg9IjI1Ni4yNzUzIiB5PSIyNjkuNjIzOCI+U2hlbGY8L3RleHQ+PC9nPjwhLS1NRDU9WzZkNDM5YTUxM2FjZWU5MDZjNGY5YTJkZDRmNjI5MDEwXQpjbGFzcyBEVkQtLT48ZyBpZD0iZWxlbV9EVkQiPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iNjMuODc5IiBpZD0iRFZEIiByeD0iNi4wNzI5IiByeT0iNi4wNzI5IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMjE0NTc0ODk4Nzg1NDI1OyIgd2lkdGg9IjI0Mi45MTUiIHg9IjM0NC45MzkzIiB5PSIxNy4wMDQiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNC4wMDgxIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9Ijc3LjczMjgiIHg9IjQyNy41MzA0IiB5PSI2MC43MTY5Ij5EVkQ8L3RleHQ+PC9nPjwhLS1NRDU9WzczYmRmM2M0NDNhMmRhMDJhMzM0MDc0YWNhZGU4N2JkXQpyZXZlcnNlIGxpbmsgQm9vayB0byBTaGVsZi0tPjxnIGlkPSJsaW5rX0Jvb2tfU2hlbGYiPjxwYXRoIGNvZGVMaW5lPSIxMCIgZD0iTTE2OS40MzcxLDg5Ljg0NyBDMjAxLjA2MTUsMTI5LjQ5NTUgMjQ5LjQzNzIsMTkwLjE0NTggMjc3LjkzODUsMjI1Ljg3OTggIiBmaWxsPSJub25lIiBpZD0iQm9vay1iYWNrdG8tU2hlbGYiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6Mi40MjkxNDk3OTc1NzA4NTsiLz48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjE2MS43ODAyLDgwLjI0NzQsMTY3LjgxNjcsMTAzLjM5NzcsMTY5LjM1MzksODkuNzQyNiwxODMuMDA5LDkxLjI3OTgsMTYxLjc4MDIsODAuMjQ3NCIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoyLjQyOTE0OTc5NzU3MDg1OyIvPjwvZz48IS0tTUQ1PVtmNTFhNmJlZTE1YzNlODZiMmYzMDNkOWNhMDI4NmJhNF0KcmV2ZXJzZSBsaW5rIERWRCB0byBTaGVsZi0tPjxnIGlkPSJsaW5rX0RWRF9TaGVsZiI+PHBhdGggY29kZUxpbmU9IjExIiBkPSJNNDM0Ljk1ODcsODkuODQ3IEM0MDIuODYyMywxMjkuNDk1NSAzNTMuNzY0NCwxOTAuMTQ1OCAzMjQuODM4MSwyMjUuODc5OCAiIGZpbGw9Im5vbmUiIGlkPSJEVkQtYmFja3RvLVNoZWxmIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjIuNDI5MTQ5Nzk3NTcwODU7Ii8+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSI0NDIuNzI5Niw4MC4yNDc0LDQyMS40MjA5LDkxLjEyNDgsNDM1LjA4NjksODkuNjg3Miw0MzYuNTI0NSwxMDMuMzUzMSw0NDIuNzI5Niw4MC4yNDc0IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjIuNDI5MTQ5Nzk3NTcwODU7Ii8+PC9nPjwhLS1NRDU9W2MxZjNmYzNhM2FiODhjMWUzMTNkZjc3YWI5MmY0MDQ0XQpAc3RhcnR1bWwNCnNjYWxlIDYwMCB3aWR0aA0KaGlkZSBjaXJjbGUNCnNraW5wYXJhbSBjbGFzc0F0dHJpYnV0ZUljb25TaXplIDANCnNraW5wYXJhbSBtaW5DbGFzc1dpZHRoIDEwMA0KaGlkZSBtZW1iZXJzDQoNCmNsYXNzIEJvb2sgew0KfQ0KDQpCb29rIDwtIC0gU2hlbGYgDQpEVkQgPC0gLSBTaGVsZg0KQGVuZHVtbA0KClBsYW50VU1MIHZlcnNpb24gMS4yMDIyLjhiZXRhMihVbmtub3duIGNvbXBpbGUgdGltZSkKKEdQTCBzb3VyY2UgZGlzdHJpYnV0aW9uKQpKYXZhIFJ1bnRpbWU6IEphdmEoVE0pIFNFIFJ1bnRpbWUgRW52aXJvbm1lbnQKSlZNOiBKYXZhIEhvdFNwb3QoVE0pIDY0LUJpdCBTZXJ2ZXIgVk0KRGVmYXVsdCBFbmNvZGluZzogVVRGLTgKTGFuZ3VhZ2U6IGVuCkNvdW50cnk6IFVTCi0tPjwvZz48L3N2Zz4="},3533:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U3R5bGVUeXBlPSJ0ZXh0L2NzcyIgaGVpZ2h0PSIzNTEuNzAyOHB4IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBzdHlsZT0id2lkdGg6ODAycHg7aGVpZ2h0OjM1MXB4O2JhY2tncm91bmQ6I0ZGRkZGRjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwMiAzNTEiIHdpZHRoPSI4MDIuNDc2OHB4IiB6b29tQW5kUGFuPSJtYWduaWZ5Ij48ZGVmcy8+PGc+PCEtLU1ENT1bNzIxMzYxMzgwNTJkMDI1Y2ZmZGNlM2MyMmZiZDE4NWZdCmNsYXNzIFByb2R1Y3QtLT48ZyBpZD0iZWxlbV9Qcm9kdWN0Ij48cmVjdCBjb2RlTGluZT0iNyIgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSIxMDUuNDk1NCIgaWQ9IlByb2R1Y3QiIHJ4PSI2LjE5MiIgcnk9IjYuMTkyIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMjM4MzkwMDkyODc5MjU3OyIgd2lkdGg9IjI5Mi4yNjAxIiB4PSIzNTEuNzAyOCIgeT0iMTcuMzM3NSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjM0LjY3NDkiIGZvbnQtc3R5bGU9Iml0YWxpYyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyNzcuMzk5NCIgeD0iMzU5LjEzMzEiIHk9IjYxLjkwNzQiPiZsdDsmbHQ7aW50ZXJmYWNlJmd0OyZndDs8L3RleHQ+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzQuNjc0OSIgZm9udC1zdHlsZT0iaXRhbGljIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEzMy43NDYxIiB4PSI0MzAuOTU5OCIgeT0iMTAyLjI3MTIiPlByb2R1Y3Q8L3RleHQ+PC9nPjwhLS1NRDU9WzQ3Y2NiYmNkOWU0NjA4NGM5MzU2MmEzMzUxMDJkYTU1XQpjbGFzcyBTaGVsZi0tPjxnIGlkPSJlbGVtX1NoZWxmIj48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjY1LjEzMTYiIGlkPSJTaGVsZiIgcng9IjYuMTkyIiByeT0iNi4xOTIiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4yMzgzOTAwOTI4NzkyNTc7IiB3aWR0aD0iMjQ3LjY3OCIgeD0iMTcuMzM3NSIgeT0iMzguMzkwMSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjM0LjY3NDkiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iOTEuNjQwOSIgeD0iOTUuMzU2IiB5PSI4Mi45NiI+U2hlbGY8L3RleHQ+PC9nPjwhLS1NRDU9Wzg0ZTNhNWU0Mjg3OWZiMzIzMTEwNGQzYzhlNTkyNDM5XQpjbGFzcyBCb29rLS0+PGcgaWQ9ImVsZW1fQm9vayI+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSI2NS4xMzE2IiBpZD0iQm9vayIgcng9IjYuMTkyIiByeT0iNi4xOTIiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4yMzgzOTAwOTI4NzkyNTc7IiB3aWR0aD0iMjQ3LjY3OCIgeD0iMjA1LjU3MjgiIHk9IjI3Mi40NDU4Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzQuNjc0OSIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI5MS42NDA5IiB4PSIyODMuNTkxMyIgeT0iMzE3LjAxNTgiPkJvb2s8L3RleHQ+PC9nPjwhLS1NRDU9WzZkNDM5YTUxM2FjZWU5MDZjNGY5YTJkZDRmNjI5MDEwXQpjbGFzcyBEVkQtLT48ZyBpZD0iZWxlbV9EVkQiPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iNjUuMTMxNiIgaWQ9IkRWRCIgcng9IjYuMTkyIiByeT0iNi4xOTIiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4yMzgzOTAwOTI4NzkyNTc7IiB3aWR0aD0iMjQ3LjY3OCIgeD0iNTM5LjkzODEiIHk9IjI3Mi40NDU4Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzQuNjc0OSIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI3OS4yNTciIHg9IjYyNC4xNDg2IiB5PSIzMTcuMDE1OCI+RFZEPC90ZXh0PjwvZz48IS0tTUQ1PVtlMGY3NTk1YWQ0MjZhMDVmM2JhNzE5MWE2YTgwODAyM10KbGluayBTaGVsZiB0byBQcm9kdWN0LS0+PGcgaWQ9ImxpbmtfU2hlbGZfUHJvZHVjdCI+PHBhdGggY29kZUxpbmU9IjEwIiBkPSJNMjY1LjE2OSw3MC41ODgyIEMyODkuNjc5Myw3MC41ODgyIDMxNC4xODcsNzAuNTg4MiAzMzguNjk0Nyw3MC41ODgyICIgZmlsbD0ibm9uZSIgaWQ9IlNoZWxmLXRvLVByb2R1Y3QiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6Mi40NzY3ODAxODU3NTg1MTQ7Ii8+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSIzNTEuNTA5Niw3MC41ODgyLDMyOS4yMTg2LDYwLjY4MTEsMzM5LjEyNTcsNzAuNTg4MiwzMjkuMjE4Niw4MC40OTU0LDM1MS41MDk2LDcwLjU4ODIiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6Mi40NzY3ODAxODU3NTg1MTQ7Ii8+PC9nPjwhLS1NRDU9W2VhMjgxODUxOGMzZTMyNmRmNDRmMzEwYmQ2MTJlYWRlXQpyZXZlcnNlIGxpbmsgUHJvZHVjdCB0byBCb29rLS0+PGcgaWQ9ImxpbmtfUHJvZHVjdF9Cb29rIj48cGF0aCBjb2RlTGluZT0iMTEiIGQ9Ik00MzAuNTg4MiwxNjQuNTM2IEM0MDIuNTI4OCwyMDIuNzA3MSAzNzEuODQ0LDI0NC40NDUzIDM1MS43MTI3LDI3MS44MzI4ICIgZmlsbD0ibm9uZSIgaWQ9IlByb2R1Y3QtYmFja3RvLUJvb2siIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6Mi40NzY3ODAxODU3NTg1MTQ7c3Ryb2tlLWRhc2hhcnJheTo3LjAsNy4wOyIvPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHBvaW50cz0iNDE3LjE0NDMsMTUzLjU1MjQsNDYwLjQ1NTcsMTIzLjkxMDEsNDQ1LjA4MjQsMTc0LjA5MDksNDE3LjE0NDMsMTUzLjU1MjQiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6Mi40NzY3ODAxODU3NTg1MTQ7Ii8+PC9nPjwhLS1NRDU9W2NlYjZkMzc1MDQ1YzUwZDg4MmZmNTNlNzhmMmE4MTAyXQpyZXZlcnNlIGxpbmsgUHJvZHVjdCB0byBEVkQtLT48ZyBpZD0ibGlua19Qcm9kdWN0X0RWRCI+PHBhdGggY29kZUxpbmU9IjEyIiBkPSJNNTY0LjA4NjcsMTY0LjUzNiBDNTkxLjczNSwyMDIuNzA3MSA2MjEuOTY2NiwyNDQuNDQ1MyA2NDEuODA1NiwyNzEuODMyOCAiIGZpbGw9Im5vbmUiIGlkPSJQcm9kdWN0LWJhY2t0by1EVkQiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6Mi40NzY3ODAxODU3NTg1MTQ7c3Ryb2tlLWRhc2hhcnJheTo3LjAsNy4wOyIvPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHBvaW50cz0iNTQ5LjY3OTMsMTc0LjE5ODEsNTM0LjY2MDEsMTIzLjkxMDEsNTc3Ljc2MSwxNTMuODU3Myw1NDkuNjc5MywxNzQuMTk4MSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoyLjQ3Njc4MDE4NTc1ODUxNDsiLz48L2c+PCEtLU1ENT1bNDIxMDVlNWY2YmNmZTExYzU5ZTI2MWZmOGY3MzI5M2JdCkBzdGFydHVtbA0Kc2NhbGUgODAwIHdpZHRoDQpoaWRlIGNpcmNsZQ0Kc2tpbnBhcmFtIGNsYXNzQXR0cmlidXRlSWNvblNpemUgMA0Kc2tpbnBhcmFtIG1pbkNsYXNzV2lkdGggMTAwDQpoaWRlIG1lbWJlcnMNCg0KaW50ZXJmYWNlICI8PGludGVyZmFjZT4+XG5Qcm9kdWN0IiBhcyBQcm9kdWN0IHsNCn0NCg0KU2hlbGYgIC0gLXJpZ2h0LSAtPiBQcm9kdWN0DQpQcm9kdWN0IDx8Li4gQm9vayANClByb2R1Y3QgPHwuLiBEVkQNCkBlbmR1bWwNCgpQbGFudFVNTCB2ZXJzaW9uIDEuMjAyMi44YmV0YTIoVW5rbm93biBjb21waWxlIHRpbWUpCihHUEwgc291cmNlIGRpc3RyaWJ1dGlvbikKSmF2YSBSdW50aW1lOiBKYXZhKFRNKSBTRSBSdW50aW1lIEVudmlyb25tZW50CkpWTTogSmF2YSBIb3RTcG90KFRNKSA2NC1CaXQgU2VydmVyIFZNCkRlZmF1bHQgRW5jb2Rpbmc6IFVURi04Ckxhbmd1YWdlOiBlbgpDb3VudHJ5OiBVUwotLT48L2c+PC9zdmc+"}}]);