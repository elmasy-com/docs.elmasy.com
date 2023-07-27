"use strict";(self.webpackChunkwiki_elmasy_com=self.webpackChunkwiki_elmasy_com||[]).push([[859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3494:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},l="Markdown Features",s={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/tutorial-basics/markdown-features",draft:!1,editUrl:"https://github.com/elmasy-com/docs.elmasy.com/tree/main/docs/tutorial-basics/markdown-features.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"Create a Blog Post",permalink:"/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/tutorial-basics/deploy-your-site"}},i={},c=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],u=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},p={toc:c,Highlight:u},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,r.kt)("p",null,"Docusaurus supports ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,r.kt)("strong",{parentName:"p"},"additional features"),"."),(0,r.kt)("h2",{id:"front-matter"},"Front Matter"),(0,r.kt)("p",null,"Markdown documents have metadata at the top called ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,r.kt)("a",{parentName:"p",href:"/tutorial-basics/create-a-page"},"Create a page"),"."),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,"Regular Markdown images are supported."),(0,r.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,r.kt)("inlineCode",{parentName:"p"},"static/logo.png"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/logo.png)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(1602).Z,width:"1024",height:"1024"})),(0,r.kt)("p",null,"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](./logo.png)\n")),(0,r.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,r.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,r.kt)("h2",{id:"admonitions"},"Admonitions"),(0,r.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,r.kt)("admonition",{title:"My tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,r.kt)("admonition",{title:"Take care",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,r.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,r.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,r.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,r.kt)("p",null,"This is ",(0,r.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,r.kt)("p",null,"This is ",(0,r.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}m.isMDXComponent=!0},1602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logo-6b14f114545fbf767ac531b7b330ad9c.png"}}]);