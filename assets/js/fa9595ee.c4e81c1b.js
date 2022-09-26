"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,h=c["".concat(p,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={id:"css",title:"CSS",sidebar_label:"CSS"},r=void 0,l={unversionedId:"readings/wk6/css",id:"readings/wk6/css",title:"CSS",description:"Let's face the problem!",source:"@site/docs/readings/wk6/css.md",sourceDirName:"readings/wk6",slug:"/readings/wk6/css",permalink:"/cs421/docs/readings/wk6/css",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/readings/wk6/css.md",tags:[],version:"current",frontMatter:{id:"css",title:"CSS",sidebar_label:"CSS"}},p={},s=[{value:"Let&#39;s face the problem!",id:"lets-face-the-problem",level:2},{value:"Styling in HTML",id:"styling-in-html",level:2},{value:"Styling HTML with CSS",id:"styling-html-with-css",level:2},{value:"CSS Selectors",id:"css-selectors",level:3},{value:"CSS Properties",id:"css-properties",level:3}],m={toc:s};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lets-face-the-problem"},"Let's face the problem!"),(0,i.kt)("p",null,"Our JBApp fron-end looks nothing like an app that would attract users!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3226).Z,width:"273",height:"174"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The look and feel of an app and how user-friendly/intuitive its front-end is can very well make the entire differnece between a successful app (that people love and would pay for) and a failure (that quickly goes out of competition.)")),(0,i.kt)("h2",{id:"styling-in-html"},"Styling in HTML"),(0,i.kt)("p",null,"The good news is that styling a web-app is not that difficult. To start, we can add ",(0,i.kt)("em",{parentName:"p"},"style attributes")," to HTML. For example, suppose I want the header ",(0,i.kt)("em",{parentName:"p"},"Welcome to JBApp")," to be displayed in a specific font face and in italic . I can simply add a ",(0,i.kt)("em",{parentName:"p"},"style attribute")," to the header tag in the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.vm")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<h1 style="font-family: Book Antiqua, serif; font-style: italic; padding: 10px;">Welcome to JBApp $username</h1>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'style="font-family: Book Antiqua, serif; font-style: italic; padding: 10px;"')," tells the browser to display whatever is written between the ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2></h2>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Book Antiqua")," font face (",(0,i.kt)("inlineCode",{parentName:"p"},"serif")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"Book Antiqua")," is not available). It also specifies that the text should be displayed in ",(0,i.kt)("em",{parentName:"p"},"italic"),' and also some "padding" must be added to create extra space around the header.'),(0,i.kt)("admonition",{title:"The HTML Style Attribute",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Setting the style of an HTML element can be done with the style attribute. The HTML style attribute has the general form of: ",(0,i.kt)("inlineCode",{parentName:"p"},'<tagname style="property1:value; property2:value; ... ; propertyN=value;">'),".")),(0,i.kt)("p",null,"If I want to apply the same style to the entire content of every page of the JBApp App, I can add the ",(0,i.kt)("em",{parentName:"p"},"style attribute"),' to the "body" element inside the ',(0,i.kt)("inlineCode",{parentName:"p"},"top.vm"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<body style="font-family: Book Antiqua, serif;">\n')),(0,i.kt)("p",null,"HTML elements that are nested inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body></body>")," will ",(0,i.kt)("em",{parentName:"p"},"inherit")," the style attribute of ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," element. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Look at ",(0,i.kt)("strong",{parentName:"p"},"w3school"),"'s notes on ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/html/html_styles.asp"},"HTML Styles")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/html/html_formatting.asp"},"HTML Formatting")," for an overview of most commonly used styling/formatting properties.")),(0,i.kt)("h2",{id:"styling-html-with-css"},"Styling HTML with CSS"),(0,i.kt)("p",null,"CSS stands for Cascading Style Sheets. When styling HTML files, it is considered a good practice to ",(0,i.kt)("strong",{parentName:"p"},"separate")," the ",(0,i.kt)("em",{parentName:"p"},"styling")," part from the content. The style can be defined in (one or more) CSS files and be linked from the HTML page(s)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"CSS saves a lot of work as it can control the style of multiple web pages all at once.")),(0,i.kt)("p",null,"Let's do this together; follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the following folder ",(0,i.kt)("inlineCode",{parentName:"li"},"src/main/resources/public/css")),(0,i.kt)("li",{parentName:"ul"},"Create the file ",(0,i.kt)("inlineCode",{parentName:"li"},"jbapp.css")," inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"css")," folder."),(0,i.kt)("li",{parentName:"ul"},"Add the following to the ",(0,i.kt)("inlineCode",{parentName:"li"},"jbapp.css"),": "),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"index.vm")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"employers.vm"),", add ",(0,i.kt)("inlineCode",{parentName:"li"},'class="container"')," as an attribute to the outtermost ",(0,i.kt)("inlineCode",{parentName:"li"},"div")," tag i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},'<div class="container">'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'h1, h2 {\n    font-family: "Book Antiqua", serif;\n    font-style: italic;\n    padding: 10px;\n}\n.container, form {\n    background: #566573;\n    text-align: left;\n    border-radius: 9px;\n    padding: 10px 30px 10px 30px;\n    float: left;\n}\n\nform button, form input[type=submit] {\n    background: #273746 ;\n    color: floralwhite;\n    font-family: "Book Antiqua", serif ;\n    font-weight: bolder;\n    font-size: 20px;\n    padding: 0 40px 0 40px;\n    border-radius: 0 16px 0 16px;\n    margin:0 auto;\n    display:block;\n}\n\n.container, form label {\n    padding: 22px;\n    font-size: 15px;\n    color: floralwhite;\n    font-family: Bahnschrift, serif;\n}\n\nform input[type=text], input[type=number], textarea, select {\n    padding: 5px;\n    margin: 5px;\n    font-family: "Book Antiqua", serif;\n    font-weight: bold;\n    font-size: 14px;\n    border-radius: 6px;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"top.vm")," and add the following line after the ",(0,i.kt)("inlineCode",{parentName:"li"},"<title>")," tag: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="css/jbapp.css">\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finally, add the following line at the start of ",(0,i.kt)("inlineCode",{parentName:"li"},"Server.main"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'staticFiles.location("/public");\n')),(0,i.kt)("admonition",{title:'"Static files"',type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In web development lingo, ",(0,i.kt)("em",{parentName:"p"},"static files")," are the files that don't change during user's interaction with the web application. Their content will be delivered \"as is\" from server to client (and a client like a browser usually caches such files so it would not need to download it over when you revisit the page).")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Before running the application, make sure you have deleted the ",(0,i.kt)("em",{parentName:"p"},"inline")," styling that was added inside the HTML (.vm) file in the previous part.")),(0,i.kt)("p",null,"Now run the application and checkout the styling effect. For instance, the sign-in page should look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7561).Z,width:"454",height:"216"})),(0,i.kt)("p",null,"This is still nowhere near a perfect looking app, but it is an improvement from what we had."),(0,i.kt)("h3",{id:"css-selectors"},"CSS Selectors"),(0,i.kt)("p",null,"If you look carefully at the CSS file's content, we have a bunch of ",(0,i.kt)("em",{parentName:"p"},"selectors")," and a list of stylings that we want applied to all elements selected by that selector. There are three main kinds of (css) selectors: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Selecting by element type e.g. the ",(0,i.kt)("inlineCode",{parentName:"li"},"h1, h2")," selector at the top of ",(0,i.kt)("inlineCode",{parentName:"li"},"jbapp.css")),(0,i.kt)("li",{parentName:"ol"},"Selecting by elements' attributes, specifically:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": a unique identifier that you can assign to an html element. These selectors start with ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class"),": a identifier that can be assigned to multiple elements to form a group of elements e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"container")," class that was added to div tags in ",(0,i.kt)("inlineCode",{parentName:"li"},"index.vm")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"employers.vm"),". Class selectors start with dot i.e., ",(0,i.kt)("inlineCode",{parentName:"li"},".container"),"."))),(0,i.kt)("li",{parentName:"ol"},"Selecting based on where an element is located relative to other elements e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"form button"),' would select "bottons" that are inside a "form".')),(0,i.kt)("p",null,"An overview of CSS selectors can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/css_selectors.asp"},"here"),"."),(0,i.kt)("h3",{id:"css-properties"},"CSS Properties"),(0,i.kt)("p",null,"Here are some common CSS properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'background-color: teal; \ncolor: blue; /* sets the content (text) color */\n/* color can be one of ~140 named colors, or a hexadecimal value that represents an RGB value */ \n\ntext-align: left; /* other possible values are center, right, or justify */\n\nheight: 150px; /* sets the height of an area */\nwidth: 150px; /* sets the width of an area */\n/* arguments in pixels often can take a percentage or relative values too */\n\nmargin: 30px; /* sets the margin around all four sides of an area */\n/* margin also be broken up into "margin-left", "margin-right", "margin-top", and "margin-bottom" */\npadding: 20px; /* sets the padding around text inside an area */\n/* padding be broken up the same way as "margin" */\n\nborder: 3px solid blue; /* sets a border around an area */\n\nfont-family: Arial, sans-serif; /* sets the font family to be used */\nfont-size: 28px; /* sets the font size */\nfont-weight: bold; /* sets the font weight to quality, a relative measure ("lighter"), or a number ("200") */\n')),(0,i.kt)("admonition",{title:"Case in point",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"With CSS, you can change the look of an entire web site, by changing one file!")),(0,i.kt)("admonition",{title:"Resources",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"There is ",(0,i.kt)("strong",{parentName:"p"},"a lot")," that you can do with CSS. A great reference (including tutorials) is ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"Mozilla's MDN Web docs on CSS"),".")))}d.isMDXComponent=!0},3226:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},7561:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);