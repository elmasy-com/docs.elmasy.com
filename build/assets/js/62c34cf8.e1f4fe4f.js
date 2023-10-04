"use strict";(self.webpackChunkwiki_elmasy_com=self.webpackChunkwiki_elmasy_com||[]).push([[638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const l={title:"iptables",keywords:["iptables","firewall"],description:"Administration tool for IPv4 packet filtering and NAT.",tags:["firewall"]},r="iptables",o={unversionedId:"guides/iptables",id:"guides/iptables",title:"iptables",description:"Administration tool for IPv4 packet filtering and NAT.",source:"@site/docs/guides/iptables.md",sourceDirName:"guides",slug:"/guides/iptables",permalink:"/guides/iptables",draft:!1,editUrl:"https://github.com/elmasy-com/docs.elmasy.com/tree/main/docs/guides/iptables.md",tags:[{label:"firewall",permalink:"/tags/firewall"}],version:"current",frontMatter:{title:"iptables",keywords:["iptables","firewall"],description:"Administration tool for IPv4 packet filtering and NAT.",tags:["firewall"]},sidebar:"docSidebar",previous:{title:"CoreDNS",permalink:"/guides/coredns"},next:{title:"MariaDB",permalink:"/guides/mariadb"}},p={},s=[{value:"Simple stateful firewall",id:"simple-stateful-firewall",level:2},{value:"IPv4",id:"ipv4",level:3},{value:"IPv6",id:"ipv6",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Default policies",id:"default-policies",level:4},{value:"Rules",id:"rules",level:4},{value:"Setup",id:"setup",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iptables"},"iptables"),(0,i.kt)("h2",{id:"simple-stateful-firewall"},"Simple stateful firewall"),(0,i.kt)("p",null,"In computing, a stateful firewall is a network firewall that tracks the operating state and characteristics of network connections traversing it. The firewall is configured to distinguish legitimate network packets for different types of connections. Only packets matching a known active connection are allowed to pass the firewall. In contrast a stateless firewall does not take context into account when determining whether to allow or block packets","[1]","."),(0,i.kt)("p",null,"These rules are enough for a simple web server."),(0,i.kt)("h3",{id:"ipv4"},"IPv4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"*filter\n:INPUT ACCEPT [0:0]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT\n-A INPUT -p icmp -j ACCEPT\n-A INPUT -i lo -j ACCEPT\n-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT\n-A INPUT -j REJECT --reject-with icmp-host-prohibited\n-A FORWARD -j REJECT --reject-with icmp-host-prohibited\nCOMMIT\n")),(0,i.kt)("h3",{id:"ipv6"},"IPv6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"*filter\n:INPUT ACCEPT [0:0]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT\n-A INPUT -p ipv6-icmp -j ACCEPT\n-A INPUT -i lo -j ACCEPT\n-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT\n-A INPUT -d fe80::/64 -p udp -m udp --dport 546 -m state --state NEW -j ACCEPT\n-A INPUT -j REJECT --reject-with icmp6-adm-prohibited\n-A FORWARD -j REJECT --reject-with icmp6-adm-prohibited\nCOMMIT\n")),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("h4",{id:"default-policies"},"Default policies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INPUT")),(0,i.kt)("p",null,"Drop everything, only accept incoming traffic to ports that we want. On LAN, it is suggested to gracefully REJECT packets instead of DROP."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FORWARD")),(0,i.kt)("p",null,"On a typical server, we dont have any packets to forward, dont need it."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OUTPUT")),(0,i.kt)("p",null,"Allow any output."),(0,i.kt)("h4",{id:"rules"},"Rules"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-A INPUT -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT")),(0,i.kt)("p",null,"Allow related and established traffic. This mean that we initated the connection and the packet is the response."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-A INPUT -p icmp -j ACCEPT")),(0,i.kt)("p",null,"Allow icmp protocol."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-A INPUT -i lo -j ACCEPT")),(0,i.kt)("p",null,"Allow traffic on the loopback interface. This is essential for a proper work."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT")),(0,i.kt)("p",null,"Allow new connections to my server's SSH, which is operates on TCP port 22 by default."),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Iptables is not persistent by default, rebooting your server will flush all iptables rules.\nThere is a package, called ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables-persistent")," to make it persistent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install iptables-persistent\n")),(0,i.kt)("p",null,"This will want to save your existing rules."),(0,i.kt)("p",null,"To save again, use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg-reconfigure iptables-persistent\n")),(0,i.kt)("p",null,"or modify ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/iptables/rules.v{4,6}"),"."))}d.isMDXComponent=!0}}]);