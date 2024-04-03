"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[63367],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),l=r(86010),o=r(12466),u=r(16550),i=r(91980),s=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,l=(0,u.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function v(e){var t,r,n,l,o=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,p=d(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),b=v[0],g=v[1],h=f({queryString:i,groupId:s}),y=h[0],k=h[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],l=r[1],[n,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=N[0],E=N[1],O=function(){var e=null!=y?y:w;return m({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){O&&g(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var b=r(72389);const g="tabList__CuJ",h="tabItem_LNqP";function y(e){var t=e.className,r=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(p(t),i(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;r=null!=(l=c[o])?l:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function k(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(t){var l=r.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(N,(0,n.Z)({key:String(t)},e))}},84121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=(r(74866),r(85162),r(32408),["components"]),u={id:"avatar_accessory",title:"Avatar.Accessory"},i=void 0,s={unversionedId:"components/avatar_accessory",id:"version-4.0.0-rc.1/components/avatar_accessory",title:"Avatar.Accessory",description:"This is used for adding an accessory to the Avatar.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/Avatar.Accessory.mdx",sourceDirName:"components",slug:"/components/avatar_accessory",permalink:"/docs/4.0.0-rc.1/components/avatar_accessory",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/Avatar.Accessory.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"avatar_accessory",title:"Avatar.Accessory"},sidebar:"docs",previous:{title:"Avatar",permalink:"/docs/4.0.0-rc.1/components/avatar"},next:{title:"Badge",permalink:"/docs/4.0.0-rc.1/components/badge"}},c={},p=[{value:"Props",id:"props",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is used for adding an accessory to the Avatar.\nReceives either all ",(0,l.kt)("a",{parentName:"p",href:"icon#props"},"Icon")," or ",(0,l.kt)("a",{parentName:"p",href:"image#props"},"Image")," props."),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"icon#props"},"Icon"),", ",(0,l.kt)("a",{parentName:"p",href:"image#props"},"Image"),", ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/text#props"},"Text")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null}))))))}m.isMDXComponent=!0}}]);