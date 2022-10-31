"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2841],{3905:function(e,r,t){t.d(r,{Zo:function(){return a},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},a=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return t?n.createElement(m,c(c({ref:r},a),{},{components:t})):n.createElement(m,c({ref:r},a))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<s;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9106:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=t(3117),o=(t(7294),t(3905));const s={},c=void 0,u={unversionedId:"nodes/devops-resources",id:"nodes/devops-resources",title:"devops-resources",description:"- - -",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/nodes/devops-resources.md",sourceDirName:"nodes",slug:"/nodes/devops-resources",permalink:"/fr/nodes/devops-resources",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/devops-resources.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"keys",permalink:"/fr/nodes/keys"},next:{title:"config-toml",permalink:"/fr/nodes/config-toml"}},i={},l=[{value:"Docker Compose",id:"docker-compose",level:2}],a={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"sidebar_label: Devops Resources"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"ressources-devops"},"Ressources DevOps"),(0,o.kt)("p",null,"Cette section fournira un aper\xe7u des diff\xe9rentes ressources disponibles pour les d\xe9veloppeurs et les op\xe9rateurs de Nodes cherchant \xe0 tester l'architecture de Celestia."),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Une ressource pour jouer avec Docker Compose et l'infrastructure de Celestia est dans le d\xe9p\xf4t ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/ephemeral-cluster"},"ephemeral-cluster"),". Ce d\xe9p\xf4t fournit une infrastructure pour faire l'int\xe9gration test pour le d\xe9veloppement en ex\xe9cutant une instance Docker Compose pour le devnet Celestia. Il n'est pas recommand\xe9 de l'utiliser tel quel pour ex\xe9cuter des nodes individuellement.")))}p.isMDXComponent=!0}}]);