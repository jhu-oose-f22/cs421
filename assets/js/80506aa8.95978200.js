"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[1333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||l[g]||r;return n?a.createElement(m,A(A({ref:t},p),{},{components:n})):a.createElement(m,A({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,A=new Array(r);A[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,A[1]=o;for(var s=2;s<r;s++)A[s]=n[s];return a.createElement.apply(null,A)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>A,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"adapter",title:"Adapter",sidebar_label:"Adapter"},A=void 0,o={unversionedId:"readings/wk3/adapter",id:"readings/wk3/adapter",title:"Adapter",description:"Adapter is a structural design pattern that allows allows the interface of an existing class to be used as another interface. Alternatively, it allows objects with incompatible interfaces to collaborate.",source:"@site/docs/readings/wk3/adapter.md",sourceDirName:"readings/wk3",slug:"/readings/wk3/adapter",permalink:"/cs421/docs/readings/wk3/adapter",draft:!1,editUrl:"https://jhu-oose-f22.github.io/cs421/docs/readings/wk3/adapter.md",tags:[],version:"current",frontMatter:{id:"adapter",title:"Adapter",sidebar_label:"Adapter"}},c={},s=[],p={toc:s};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Adapter",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Adapter")," is a ",(0,i.kt)("em",{parentName:"p"},"structural")," design pattern that allows allows the interface of an existing class to be used as another interface. Alternatively, it allows objects with ",(0,i.kt)("em",{parentName:"p"},"incompatible")," interfaces to collaborate.")),(0,i.kt)("p",null,"Let's explain this pattern using a very simple example. Assume, we have a legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," class with a public member method named ",(0,i.kt)("inlineCode",{parentName:"p"},"display()")," that expects to receive ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," parameters, where ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," are the coordinates of the top left of the rectangle and ",(0,i.kt)("inlineCode",{parentName:"p"},"w")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," are the width and height of it. But, there is a client code that uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Point")," class and wants to pass in two points ",(0,i.kt)("inlineCode",{parentName:"p"},"p1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"p2")," to the display method. But, obviously, the current implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"display")," mehtod that is part of the interface of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," class does not support working with ",(0,i.kt)("inlineCode",{parentName:"p"},"Point"),"s. This incongruity can be reconciled by adding an additional level of indirection \u2013 i.e. an ",(0,i.kt)("em",{parentName:"p"},"Adapter")," object."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5187).Z,width:"540",height:"170"})),(0,i.kt)("p",null,"The client code now can interact with the new ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," class (via ",(0,i.kt)("inlineCode",{parentName:"p"},"Shape")," interface) which in turn uses the functionality of the old rectangle class (named ",(0,i.kt)("inlineCode",{parentName:"p"},"LegacyRectangle")," now!)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Rectangle implements Shape {\n  private LegacyRectangle lr;\n\n  // ** constructors and other methods omitted! ** \n\n  @Override\n  public void display(Point p1, Point p2) {\n    int w = p2.getX() - p1.getX();\n    int h = p1.getY() - p1.getY();\n    lr.display(p1.getX(), p2.getY(), w, h);\n  }\n\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As an aside, also note this pattern follows the ",(0,i.kt)("a",{parentName:"p",href:"../wk2/dip"},"Dependency Inversion Principle"),".")),(0,i.kt)("p",null,"The general idea of an adapter class is similar to adapter in the physical world: think of a mobile charger as an adapter; the mobile battery needs 3 volts to charge but the normal socket produces either 120V (US) or 220V (Europe). So the mobile charger works as an adapter between the mobile charging socket and the wall socket. Another real life example could be a case of card reader which acts as an adapter between memory card and a laptop."),(0,i.kt)("admonition",{title:"When to use this pattern?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Use the Adapter when you want to use some existing class, but its interface isn't compatible with the rest of your code.")),(0,i.kt)("admonition",{title:"Advantage",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You don't need to change the existing class or the interface. By introducing a new class, which acts as an adapter between the interface and the existing class, you reuse your existing code without changing it.")))}l.isMDXComponent=!0},5187:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAACqCAYAAADm8pY9AAAgAElEQVR4Xu2dX8gWx/XHxxvBWJILQxsIWCsUTUuaUkMJRFuaQmKvBIUIVQkorRht0KCxROKfiKI1JJK+FmyJuTCBJKDgTaNS0lIjeBEFb6repBoQUqpXKQaSi7ec6e88v3HcfXZ2n91nZ575LIQk77M7c+Zzzsx+58zs7ozp6elpwwEBCEAAAhCAAAQ6JDADwdEhXYqGAAQgAAEIQMASQHAQCBCAAAQgAAEIdE4AwdE5YiqAAAQgAAEIQADBQQxAAAIQgAAEINA5AQRH54ipAAIQgAAEIAABBAcxAAEIQAACEIBA5wQQHJ0jpgIIQAACEIAABBAcxAAEIAABCEAAAp0TQHB0jpgKIAABCEAAAhAIFhwzZsyAVmQEeEnsvQ4hTiMLUmMMcRqfT7AIAn0QqCU4GDj6cFFxnXJjxR/FggMuxGk8BLAEAhBQAgiORGMBwYEQSyF0idMUvISNEBgPAQTHeDi3XgsDOYKj9aDqoEDitAOoFAmBRAkgOFJ1HEsqhZ7jBhdXQOOPuPyBNRDokwCCo0/6I9TNQE6GY4TwGdulxOnYUFMRBKIngOCI3kXcWOu4iBtcHVrdn4s/umdMDRBIhQCCIxVPeXYykCPEUghd4jQFL2EjBMZDIEnBce3aNbNy5Upz+fJlS+mZZ54x7777rpkzZ47R37Zt22aWL19utmzZYs954403zKxZsxpTPX/+vLl+/bpZtWpV4zLavJCBvH/BIbG2e/duMzU1ZWOv7Ag9z7/+yy+/tPF79OhR8+qrr5pXXnmlzRAaS1nE6VgwUwkEkiCQnOCQG//ixYvNO++8M7j5792715w4ccK8//77FrqIEREcbYkDV8S0Veao0cFAPvmC4/bt22bHjh1m3759QwXNqLHU5fXEaZd0KRsCaRFISnDojG9YxqIqwyGZkNWrV1svrV+/3mY+5NBMyP33328OHTo0yJrIbyIyzpw5Y8+LZabJQB6X4Lh165bNdjzwwAM2IyHHxx9/bBYuXDiIH83EybmaoXOzcyKmJb7+9a9/mR/+8Ifm5s2b5i9/+Yt57LHHrJiW60Rs6yHlP/nkk/Z/3ayfxrVk9FSgu/E+Sqav7vBGnNYlxvkQmFwCSQmOkEzDMMFx6dIlO2C7NwIZsLdu3WoFx4ULFwqzJCH1jjtEGMjjExxuZk2ybiIYRNB+9tlng6UXFbCyPCKx554n8blx40YbgwsWLDCS4di0aZO9Vo4XXnjBvPnmm/Y3Ec7nzp2z5d+5c2dwnvwmZc6fP988/vjjg2vmzp1rY/zhhx8e69IMcTrukYH6IBAvgawEx2uvvWZnfLrfQwf7/fv3m5dfftnu0ZDf9KYgNwS5MSA44g1g37IubnCaWVuyZImt7tNPPx3Ehe7hkOyDKwgkzo4fP36P4Lh69aoVBO6eIy3D/80VHCIk3MMtX4SK1uVmL1xRotkOPU/6gogSOVS4dJH56MIf6UQjlkIAAi6BbASHigpNdysESWm/9dZb9iYgh84YZRkFwdF/Z5Gb8X333WdeeumlIGO6uMHJjVtExlNPPXXXjd3dDKpLKrqBdJjgcJdFpFHukokrHHzBITG6c+fOAQddOjl58mShaHCXD914l78LU8l4rFmzxnz00UdWfHSxP6kLfwQFAidBAALREUhKcIy6h8PPcKg3/HIlRY3giCNWZda/fft2u7xw8ODBwZ6FMuvavsGJcJAbvSxl7Nq1yy5vaLahqeAoykZIe1yRItkGV3CIoHEzI6EZDs3GFPFS+/fs2WOzM7rM06bn2/ZHm7ZRFgQgMF4CSQkOHZRDn1LxH4ut2sNBhmO8wVentmPHjtksx7p168yBAwdM2Wfou7jBtZnhkDaLmNWbu5QtAkT+LeKqLMPhCg7NTmi8yh4RdzlHs3XPPvvsPX/XfSVyLRmOOhHIuRCAwKgEkhMc0mD/PRyakpaZ56hPqRQtqbjvQ3CfABgV/ijXd3FjHcWecVwrN13JdsjsXrIdy5Ytu6faLriE7uFw38nhZiA0YybGirBwn1JxY3dYhkM3fcqSoFwjWYn33ntv8A6QsqdR3L+7T8ToxlKxiT0c44he6oAABJIUHLjN2Bn+9PR0lihOnTplhYfssRHh8eCDDw445MwlxmDAHzF6BZsg0A8BBEc/3EeuNfeBXMSWiI63337bio61a9daprlzGTmwWi4Af7QMlOIgkDABBEeizmMg/5/jZMlAhIe8WlzeyPnoo49mm/mJMZSJ0xi9gk0Q6IcAgqMf7iPXWrZpcuSCEy5g3rx59l0quS41xeg6BEeMXsEmCPRDAMHRD/eRa2Ug/x/Cw4cP28yGPJEkL28T0YHgGDm8WiuAOG0NJQVBIHkCtQRH8q2dkAbI+yDkKYWcb6zy8T55mdsjjzxihcaiRYusd7nBxRXk+CMuf2ANBPokUEtw5HyD69NJRXXnOpCfPn3aCg05RGgsXbr0LjyxcHEfRxUD9UNrMb4mv8vYjsUfXbaRsiEAgTACCI4wTtGdldtAfvHiRSs0rly5YoWGfvHXd0wMXOQNofJyL3ltuL58Tr/To+/g2LZtWyevEo8tUGPwR2xMsAcCuRJAcCTq+VwG8hs3blihId8L2bFjh9m8efNQj8XARbMYTzzxhP02j/tRNP3t6aefNmfPnjWXL1+2n6SXN4/K4b/UTpaORLwUXee+hE5FzpkzZ2w57qfr+wzxGPzRZ/upGwIQ+H8CCI5EoyGXgVze3vn111/brMbs2bMrvRUDF1c0uG/3dAWFihERUocOHbKfpNe3iUpmRD9df+LECfubHCtXrjR6nb6mXwSJ/wp/t0z/K7OVAFs+IQZ/tNwkioMABBoSQHA0BNf3ZbkM5F999ZWZOXNmMO5YuPhfavUzFStWrLBZDd3r4WYkXMGirz5XwaFLMe4HBzds2GCee+45o7/p9UeOHKn82F0w2IYnxuKPhuZzGQQg0CIBBEeLMMdZFAN5Me2YuIQIB1dwLFy40C6ffP755zar8cknnwyyH8MEh3yk7ec///k9QFTkjDMu/bpi8kefHKgbAhAwBsGRaBQwkMcvONRCzXZIFkO++yJLI5qNcAWHnC9fQtZsh1ynyy11MhwxhTRxGpM3sAUC/RJAcPTLv3HtDOTxCg5XYMhejGHCwRUcrhiRx33dbIcKjoceemjwKXsRJ+zhaNyFuBACEBgzAQTHmIG3VR2CI17BIZbJ59937tw5MLLsPRz+Hg73OsmEyNKKmxmRvRryJIr84z7dwlMqbfUsyoEABLoigODoimzH5SI44hYcbbs/1ReGEadtRwLlQSBdAgiORH3HQI7gSCF0idMUvISNEBgPAQTHeDi3XgsDeV6Co/UAGlOBxOmYQFMNBBIggOBIwElFJjKQIzhSCF3iNAUvYSMExkMAwTEezq3XwkCO4Gg9qDookDjtACpFQiBRAgiOVB03Y0bWn6cvcxs3uLgCGn/E5Q+sgUCfBBAcfdIfoW4GcjIcI4TP2C4lTseGmoogED0BBEf0LuLGWsdF3ODq0Or+XPzRPWNqgEAqBBAcqXjKs5OBvFyIJerSu8z+9re/bW7cuDEJTWHpbyK8SCMgMDoBBMfoDHspAcHRC/axVLps2TLzxRdfmO9+97vm6NGjY6mTSiAAAQh0TQDB0TXhjspHcHQEtudijx07ZuQfeXX5d77zHfPhhx+aRYsW9WwV1UMAAhAYnQCCY3SGvZSA4OgFe6eV3rp1y8gn6k+dOmXko2+HDx82586dMydOnOi0XgqHAAQgMA4CCI5xUO6gDgRHB1B7LnLdunX28/UHDx4cWPK9733PvP7660a+HssBAQhAIGUCCI5EvYfgSNRxJWZLVmP79u3mypUrRnyrh3x+/o9//KP5+9//PlkNpjUQgEB2BBAcibocwZGo4wrMnp6eNpLJOHDggJENo/7xk5/8xPz61782q1evnpxG0xIIQCA7AgiORF2O4EjUcQVmS2bj3//+t90sWnScPn3avPjii+Yf//jH5DSalkAAAtkRQHAk6nIER6KO88w+f/68zWpcvXrV7t8oO1asWGGWLFliNm/ePBkNpxUQgEB2BBAcibocwZGo4zyzFy9ebNauXWv/GXZcvHjR/OIXvzD//Oc/zezZsyej8bQCAhDIigCCI1F3IzgSdZxj9u9+9zsjGQ7ZMBpyrF+/3mZB9u3bF3I650AAAhCIisBIguP27dtm06ZNZvfu3WbBggVm7969Zv78+WbVqlXm2rVr9u9TU1Nmzpw5UTV6EoxBcKTvxZ/97Gfmb3/7W62G/PSnPzVnz541M2fOrHUdJ0MAAhDom8BIgqNv43OuH8GRs/dpOwQgAIH0CCA40vOZtRjBkajjAs2W7KD8wwEBCEBgUgggOBL1JIIjUccFmo1/A0FxGgQgkAwBBEcyrrrbUG5IiTou0Gz8GwiK0yAAgWQIIDiScRWCI1FXNTIbwdEIGxdBAAIRE6glOCJuR1am7dq1y+zZs8fIK7E5JpMAgmMy/UqrIJAzgVqCgxtcPKHCDSkeX3RhCf7tgiplQgACfRJAcPRJf4S6uSGNAC+BS3lKJQEnYSIEIFCLAIKjFq54TkZwxOMLLIEABCAAgWoCCI5qRlGegeCI0i0YBQEIQAACJQQQHImGBoIjUcdhNgQgAIFMCSA4EnU8giNRx2E2BCAAgUwJIDgSdTyCI1HHYTYEIACBTAkgOBJ1PIIjUccFms1TKoGgOA0CEEiGAIIjGVfdbSiCI1HHBZqNfwNBcRoEIJAMAQRHMq5CcCTqqkZmIzgaYeMiCEAgYgIIjoidM8w0bkiJOi7QbPwbCIrTIACBZAggOJJxFRmORF3VyGwERyNsXAQBCERMAMERsXPIcCTqnBbMRnC0AJEiIACBqAiMJDhu375tNm3aZGRH/YIFC8zevXvN/PnzzapVq8y1a9fs36empsycOXOiavQkGMMNaRK8WN4GnlKZbP/SOgjkSGAkwZEjsFjajOCIxRPYAQEIQAACIQQQHCGUIjwHwRGhUzAJAhCAAARKCSA4Eg0OBEeijsNsCEAAApkSQHAk6ngER6KOw2wIQAACmRJAcCTqeARHoo7DbAhAAAKZEkBwJOp4BEeijgs0m6dUAkFxGgQgkAwBBEcyrrrbUARHoo4LNBv/BoLiNAhAIBkCCI5kXIXgSNRVjcxGcDTCxkUQgEDEBBAcETtnmGnckBJ1XKDZ+DcQFKdBAALJEEBwJOMqMhyJuqqR2QiORti4CAIQiJgAgiNi55DhSNQ5LZiN4GgBIkVAAAJREUBwROWOcGO4IYWzSvFMnlJJ0WvYDAEIDJ0oT09PT4cg4gYXQml85+CP8bGmJghAAAIQGJ0AGY7RGfZSAoKjF+xUCgEIQAACDQkgOBqC6/syBEffHqB+CEAAAhCoQwDBUYdWROciOCJyBqZAAAIQgEAlAQRHJaI4T0BwxOkXrIIABCAAgWICCI5EIwPBkajjAs3mKZVAUJwGAQgkQ6CW4EimVZkYGviAUSY0JquZCMrJ8ietgQAEjAkWHMCCAATGRwDBMT7W1AQBCIyHAIJjPJypBQK1CCA4auHiZAhAIAECCI4EnISJ+RFAcOTnc1oMgUkngOCYdA/TviQJIDiSdBtGQwACQwggOAgPCERIgKdUInQKJkEAAiMRQHCMhI+LIQABCEAAAhAIIYDgCKHEORCAAAQgAAEIjEQAwTESPi6GAAQgAAEIQCCEAIIjhBLnQAACEIAABCAwEgEEx0j4uLiMgDxlwQGBLgjk9IZd+lEXEUSZXRAI6ZcIji7IU6bhsU6CoAsCucVVbu3tImYos3sCoXGK4OjeF1nWEBqAWcKh0Y0J5BZXubW3cWBwYa8EQuMUwdGrmya38tAAnFwCtKwLArnFVW7t7SJmKLN7AqFxiuDo3hdZ1hAagFnCodGNCeQWV7m1t3FgcGGvBELjFMHRq5smt/LQAJxcArSsCwK5xVVu7e0iZiizewKhcYrg6N4XWdYQGoBZwqHRjQnkFle5tbdxYHBhrwRC4xTB0aubJrfy0ACcXAK0rAsCucVVbu3tImYos3sCoXGK4OjeF1nWEBqAMcLZu3ev2blz5z2mffzxx+bJJ59sbPKXX35pXnvtNfP888+bOXPmNC5n2IXnz583ixcvNqPa2olxLRSaclw1aX5s7b127ZpZuXKl2bZtm1m1alWTJnV+ze3bt61tZ86cuauuZ555xrz77rsj9T1p/5///GezZcuWTtohY4SW/cYbb5hZs2Z1Uk/bhYbGKYKjbfKUZwmEBmCMuERwyI3bHZyK/lbX9jbKqKoTwVFFKK3fY+tHKQkOmRy88sor1uEqQty/1Y2ENsqoqhPBUUWI3yFQQCC2gbKOk4qEgYiPQ4cOmffff98sWLDAChLJJMjhz5zc3x577DF7zSeffGJWr15tz9e/yX/LbPHy5cv27++8846dmemg/txzz9lZmvzz6quvDgZP/V2uW79+vbl+/brNvMjg6guOYXbWYRLLuSnHVROGsbW3SnAMizfNHEr8P/300+bs2bOD/iT9y+8f0s/kKOtPbn907Vq6dKntR664KLqRu3VKP9KMgp579OhRW7/0va1bt9rMg/5Nzz958mSh3WqznP+HP/zB9nHt31KmW7eULxlVyUr+6Ec/uifDUWZnk3jq6prQOCXD0ZUHMi83NABjxFSV4bh169Ygrbx8+fK7BojPPvvM/nbkyJF7Bg9ZTtHMyX333WevW7NmjR0Ypc4TJ07YAViFyBNPPGEHQRnUdHCdO3euvU5EhgxEV69etcJHBYkrOB588MFSO1NJ1frxkXJcNYn12No7THC4v/n94tKlSzZO5aarv124cGEQ77t37zZTU1MWkYiFefPm2dgv608bNmwwIsh1acedEEjc+4LDz064/WThwoV3nS998ebNm7Z+tVvEgH+etLfMbr1O+6U7puj4sWLFCjtJUCFWJDiG1d8knrq6JjROERxdeSDzckMDMEZMRXs43CyGn+2Q/z9+/LgVAKdPnx78t79Po0jIuNkKP/OhA1KRiNDfhg2kIkrcWaBrZ1d7SLr2Z8px1YRNbO0dJjiG9QuZ5auglsyFf64/63czCNq33Jh1Mxb79u0zO3bssHhFJNy5c6dwD4ebJfT7oooMEQDr1q2zEwF/j0rZkkpRBsIVWFKO217Nduo+K7d/+xkOd5Ii7XfFUEyThtA4RXA0GQW4ppJAaABWFtTDCe5gpBkEN+VaJEhULHzwwQf37P/QJrjl6kzu888/Hyy5qDjQDIfO3sqyFjKQDRMcH3300T2bX9VOTVf3gHekKlOOqyYNj629wwRHnX7h3oBlxi/ZD+ljvnjwb7guQxXQIhI2btw4yHb4fULt0iUNf8lEy5RJxZ49e6wdRZtiy/pakd1uZkIymL7gKFqe9TMc+/fvNy+//PJgGce1c9TNr01icdg1oXGK4GibPOVZAqEBGCOuotmPrLHqgFU0O9N2DPutSMjoLMe9LkRwNMlwxMi6rk0px1XdtsbYj+pkONz2ukuGfobDFem61KjZCnc50RfJaov0BTd74gsD/X8V91JO2QbuYRtDi4SMv0SqdlcJDtmv0iTD0SSGxnFNaL9EcIzDGxnWERqAMaLxByMd2B566CE7UwnZw6EzJLcsSSvrAOWWoZvcdEAcJjg05ap7OGQJRwYv9nDEGEmj2xRbP2pjD4cf77LEoDN+N9vh7uEo6k8qTmRjppuBLBINuuxR1E+K9nAM66e6GbUsS+Pv/fAzHNq/RSi5m1HZwzF6f6GETAnENlDWcUPZUypFN3YpN+QpFf/JFhlc3CUP2WgqG0bl7+5mT1k28Z884SmV6TruTPrc2PqRG3suWP9GXtQvyp5S0U2e8jSWLPl961vfshlSXTYoekpFsx0qJNwnQIoEh7uM4mYV9cmYqqdU9PFabYP0+d///vfmN7/5jX2KzLdbl2KLMpia4dG6eUol6S6K8TEQiG2gjIFJGzb4j/fpLv6YX8TURru1jNzialLa64vmtt5JM2wJs824a7MsP0uUYht8HqFxypJKm5FEWQMCoQEIsvoE3BmfXO3OzuqXltYVucXVpLS3aKPmKG/DdTMtbnYjlWj2N9im2AaXdWicIjhSidDE7AwNwMSahbk9E8gtrnJrb8/hRfUNCYTGKYKjIWAuG04gNADhCIE6BHKLq9zaWycWODceAqFxiuCIx2cTZUloAE5Uo2lM5wRyi6vc2tt5AFFBJwRC4xTB0Ql+CpUA5IBAmwR27dplX8w0PZ3XUyptMqQsCLRNoE6/RHC0TZ/yLIFQxQsuCNQhkHpcybc35P0RL730UlCzU29vUCM5KXkCoXGK4Eje1XE2IDQA47Qeq2IlkHpcyfsZtm/fbl9Jf/DgQfvhvmFH6u2NNY6wq10CoXGK4GiXO6X9H4HQAAQYBOoQmJS4OnbsmM1yyIfCDhw4YDOCRcektLeOjzk3PQKhcYrgSM+3SVgcGoBJNAYjoyEwSXElr/GWbIe8V0WyHcuWLbuH8yS1N5ogwpDWCYTGKYKjdfQUKARCAxBaEKhDYBLj6tSpU1Z4yPKKCA951bcek9jeOv7m3DQIhMYpgiMNfyZnZUgAysxO3rgnr/aVte3jx48b+fDRrFmzarVX3joom/GmpqbMnDlzal2rJ0sZb731ln0KQj6JLV+HdQ//eylFlYTaIW2eP3++ke+kNDlCr9dvSsi3HtxDv3sxrG7xTZU/pPxNmzZZ9nU+d+9/j0Pfsuj6oCwGQuKqCdO+r5Enb0R0vP3221Z0rF271poU0t4Y+9Fvf/tb+2n1NWvWDN2nEtpnQvwTWlZo/6mqM6SPSBlt1efaE1LmMB5l18sbYeWpE1nqq9OnQ+LUxvN0Ts+YVUUQv7dGICQA3YGyqVAQg0MHmrLG+Z1MOqMc+sEm+W8RRZ9++uldf2sKK2SwKCtbX4kc8ipkFRzSDt2cqK+YrroRhLStieDwWYvvXnjhBfPmm2/aAU44y1EmxkLiKsT2WM+RPiHCQ/rDvn37zKOPPlr5GHCs/SiE8ah9N6QO/5xR+l8K9amNTQSHjqc6+Qqd/IX2SwRHkwjimkoCZQHozm5lpq2fgXYzHJcuXTKLFy+2dWhmQT9FLZ9nl8+8X7582bgzYzfDoV+QlOvlK47yFVZZL3dn7O5sWuqTL7e6X4T0BYc7m5HftmzZYuSz2HLoNyHcDi7tkYyLHO+9997ADvkUt34l0hcNev2Pf/xj8+KLLw6ukRuxCoWHH37YlhmSISkSHHKtO+C6/nCzOG57JePzxRdfmLNnz1ru8u2W/fv32xmsMFDG7oxIr7///vvtp8fLMkTariVLlliRITbv2LHD3myLRGhO73eZN2+euX79eqHgiL0fucJWloikfz7wwAN39Rn9LLxk4Iq+uOz21xDBP2r/84VIlfit6iOSrT158mRhf/fFutR17tw5m+HV8WXYpEBtXb58uR2LZFzQrKyMq88//7ztT0VsdQz4xje+YX+Xf/ysp5T/1FNPVT5FpTcCBEflLZETuiRQFIB6A5SOJJ3B/WKkCg656W/dunWQptdOrx1LBmD5mwgInRlLO1RwSDm6TCM3LM1WSAd00//uYOJ3rqIMh/s3+e+bN2/awUHEysaNG62o8e0Q0SRiRESSDgrSvrIZlt5EVqxYYcWPOwi5M43QGVqR4HD/pgO+6w+3XTrgi+BQYSjcV65caY4cOWLk+rIlFf3AnIqqIqbCq8jGYYNd6MDWZWx3Wfbhw4et2JJ4F0EnosNPQqfQj3zBITGjXzR2+4987bhsOVT76NKlS+0kQ8aFYTNuX3DU7X/+pKJqacEXHEV9RDKLZf3VjXMZS8R+8b0cw0S3O2nQcVH+Nmw88sW7O/a6fVozodIWdxJWFfOh/ZIMRxVJfm9EoCgA/RSfP0DIDc4XHFq5PxN2O93jjz8+dNDSpRDt4CIAdDCZO3fuPWuW/pccpS79Iqs/+3Dtcu3whY87QxsmONzlhbIli7qCw9/DUZYZcpc33IyQCA45xDfujaRKcLjCryy9W7Z8JfUVLauEDmyNgrbHi8QnkjV65JFHrNBYtGiRtSbVfuQLDjeu3Rv1MMGhy2+SVZPZe9U7S/zxxI2/kP7nZtck/quWFXzBUdRHhgkOtUmElIx9cnz/+9+3/6662fsZDjdDqJMAdwJUJDjK7JW/h+yncrtLaL9EcPQ4yExy1UUB6K81FwkOUekyCMmMSNP3ZWlG7XTujV6XXnS5QxhrulBV+7PPPjsYTO7cuXPPLL1sNi5llc3IZYnDFxxlKeFhgsOd7bUlONw9HG7M+f5w6/MFhy7h1BEc/hKWP5N1Z7ruzHVYKjt0YEulb50+fdoKDTlEaMhsvmogT6EfFS2p6KbuUMEhHEI3ZupN0s101u1/OomRpQTJpJaJXvWPLziK+sgwwaE39V/+8pfmr3/9q5GlVK23qm5fcOjyi9uHqwRHmb0IjlRGD+wcEGg6M/OfUnFnAbIsoUq+LLMgA7iuhcpNzJ3Z6AxG9hp885vftDPool3ZwwSHv+lyWIaj7oDnb6D0/1/h1s1wlAmOooyTzkTbEBzuDNO9SaoolHVnd2Outi8HwXHx4kUrNK5cuWKFhu7r8YeQVPtRG4KjqL8OG2LLJjD+ODCs/0icymPKclQ9qTGq4BBGkj38wQ9+YP7zn//YCcsHH3xg90tV1Y3g4GYLAYdA0UDpL4u464i6h2PDhg32zYs6G/L3cEgVmgUp2sPhCg7JXoiokFmGuyH0xIkTds+FbnIM2cPhOjd0D0cTweGudXexh8NtR9FegLI9HE0yHLqGrrM8qVv3sOh/F3WaSd7DcePGDSs0ZDOhrNNv3rx56LiRaj9qQ3AULYEOe1SzDcGhfUL2zlQ9oj+q4NCxTMYsWTKSpV7doC2P5w/br9K14GAPB7fzpAiEPKXy+uuvDzZKuU+puDu7/R4X0fUAAAOOSURBVL0T7m7soqdDNBWpu7NFwHz44YeDwaMoRet3rmEZDilfB9Oqp1TKBIc+RVP2lIru5i97ssOfoZXt4C97SsUNpNCnVIoEh26GvXDhwl0CTsoXpu5TOupHFYFl+0pCnlJJ+Ul+Sfl//fXXNqsxe/bsyj6daj8KFRwaDwJC4lj3Gvgx7YoJ2UBa9JRWqOAo639lGcSyjEio4BhWn7885tYV8lirbhotWlKRp4N0H5TLVtrp1lP0qPww0V8UtKFLnezhqOzynNCEQGgAhpbd1vsjigaPpi+7CbU99Lym7ySQm7SItF/96lehVXV+Xp21d9eYqkcR246rzkF4FXz11Vdm5syZwdW23d5J6EfST2SCUvQq+GCwJScW7Zvqsr4qe//0pz/ZJ5ZGeU9RVR3+73U3jMr1oXGK4KjrDc4PIhAagEGFOVmFpi+s0oFW6itKlTbpZKG2h57XVHDIzV2Oql38oXa0cV4TwRHig7bjqo22dllG2+0dVXDE0I9kj4U8IVXnTZghPtJsnz6+q9d0VV+VTX1MJJpOvkLjFMFR5XV+b0QgNAAbFc5F2RLILa5ya2+2gZ14w0PjFMGRuKNjNT80AGO1H7viJJBbXOXW3jijDquqCITGKYKjiiS/NyIQGoCNCueibAnkFle5tTfbwE684aFxiuBI3NGxmh8agLHaj11xEsgtrnJrb5xRh1VVBELjFMFRRZLfGxEIDcBGhXNRtgRyi6vc2pttYCfe8NA4RXAk7uhYzQ8NwFjtx644CeQWV7m1N86ow6oqAqFxiuCoIsnvjQiEBmCjwrkoWwK5xVVu7c02sBNveGicIjgSd3Ss5ocGYKz2Y1ecBHKLq9zaG2fUYVUVgdA4RXBUkeT3RgRCA7BR4VyULYHc4iq39mYb2Ik3PDROERyJOzpW80MDMFb7sStOArnFVW7tjTPqsKqKQGicIjiqSPJ7IwKhAdiocC7KlkBucZVbe7MN7MQbHhqnCI7EHR2r+RKAHBDogkDKX4uty4N+VJcY5/dFIKRfIjj68g71QgACEIAABDIigODIyNk0FQIQgAAEINAXAQRHX+SpFwIQgAAEIJARAQRHRs6mqRCAAAQgAIG+CCA4+iJPvRCAAAQgAIGMCCA4MnI2TYUABCAAAQj0RQDB0Rd56oUABCAAAQhkRADBkZGzaSoEIAABCECgLwIIjr7IUy8EIAABCEAgIwL/BXCgkNQIudFrAAAAAElFTkSuQmCC"}}]);