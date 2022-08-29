"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[8540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||a;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const a={id:"cohesion",title:"High Cohesion",sidebar_label:"High Cohesion"},r=void 0,s={unversionedId:"readings/wk2/cohesion",id:"readings/wk2/cohesion",title:"High Cohesion",description:"Ensure that each class is highly cohesive.",source:"@site/docs/readings/wk2/cohesion.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/cohesion",permalink:"/cs421/docs/readings/wk2/cohesion",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/readings/wk2/cohesion.md",tags:[],version:"current",frontMatter:{id:"cohesion",title:"High Cohesion",sidebar_label:"High Cohesion"}},l={},p=[{value:"Example Design",id:"example-design",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Principle",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Ensure that each class is highly cohesive.")),(0,i.kt)("p",null,"Object-Oriented designers use the word ",(0,i.kt)("strong",{parentName:"p"},"cohesion")," to describe everything in a class is related to its central purpose. It is a measure for how well the internal parts of a class (e.g. the methods and attributes) belong together."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A highly cohesive class is one that only comprises responsibilities which belong together. A class ideally has a single responsibility. ")),(0,i.kt)("p",null,"Why does this matter?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Applications that are easy to change consist of classes that are ",(0,i.kt)("strong",{parentName:"li"},"easy to reuse"),"."),(0,i.kt)("li",{parentName:"ul"},"A class that has many responsibilities is difficult to reuse."),(0,i.kt)("li",{parentName:"ul"},"A class that has several responsibilities, has many reasons to change. When it changes, ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it may change for a reason that is unrelated to your use of it."),(0,i.kt)("li",{parentName:"ul"},"there's a possibility of breaking every class that depends on it.")))),(0,i.kt)("admonition",{title:"How to figure out if a class is not cohesive?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Here is one strategy: ",(0,i.kt)("strong",{parentName:"p"},"describe your class in one sentence"),"."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"if you cannot, it probably has too many responsibilities."),(0,i.kt)("li",{parentName:"ul"},'if your description has "and"/"or" in it, it probably has too many responsibilities.  '))),(0,i.kt)("admonition",{title:"Take home message",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A class should do the smallest possible useful thing.")),(0,i.kt)("h2",{id:"example-design"},"Example Design"),(0,i.kt)("p",null,"The examples are (partial) designs for the ",(0,i.kt)("a",{parentName:"p",href:"../wk1/jbapp"},"JBApp"),"."),(0,i.kt)("p",null,"The following is a possible (simple) design where everything about a job posting is modeled within a single class named ",(0,i.kt)("inlineCode",{parentName:"p"},"Job"),"!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9861).Z,width:"239",height:"382"})),(0,i.kt)("p",null,"This could be a reasonable, albeit possibly an over-simplified, starting point in our design process. With some further contemplation it may appear that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Job")," class (arguably) has too many responsibilities. It would have to change if we change, for example, a job's employer-related information."),(0,i.kt)("p",null,"So, we could refine our design by introducing a new class named, well, ",(0,i.kt)("inlineCode",{parentName:"p"},"Employer"),"!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5782).Z,width:"536",height:"332"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You could certainly think about factoring out more classes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Job")," class to increase ",(0,i.kt)("em",{parentName:"p"},"cohesion")," even further (and even add more class fields to those classes for a more thorough modeling/design), but what we have should be good enough for the first pass. Remember, nothing is written on stone; start simple and as you get more user stories in, go back to refine your design. ",(0,i.kt)("strong",{parentName:"p"},"Do not commit to an unncessarily complex design upfront; only make your design more sophisticated as system requirements dictate."))))}h.isMDXComponent=!0},9861:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cohesionExample1-b514854a09bdefb86aca17b3136a8cda.png"},5782:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cohesionExample2-fe45df5140a48667137d5b02eefd94b6.png"}}]);