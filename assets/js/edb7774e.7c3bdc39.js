"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[64935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),u=n(91980),c=n(67392),s=n(50012);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function v(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,d=m(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),b=v[0],g=v[1],k=f({queryString:u,groupId:c}),h=k[0],N=k[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=y[0],I=y[1],E=function(){var e=null!=h?h:w;return p({value:e,tabValues:d})?e:null}();return(0,a.useEffect)((function(){E&&g(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),N(e),I(e)}),[N,I,d]),tabValues:d}}var b=n(72389);const g="tabList__CuJ",k="tabItem_LNqP";function h(e){var t=e.className,n=e.block,l=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==l&&(d(t),u(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;n=null!=(o=s[i])?o:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},67437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>f});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(74866),n(85162),n(32408),["components"]),l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/accorsion.gif",width:"500"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<ListItem.Accordion\n  content={\n    <>\n      <Icon name="place" size={30} />\n      <ListItem.Content>\n        <ListItem.Title>List Accordion</ListItem.Title>\n      </ListItem.Content>\n    </>\n  }\n  isExpanded={expanded}\n  onPress={() => {\n    setExpanded(!expanded);\n  }}\n>\n  {list2.map((l, i) => (\n    <ListItem key={i} onPress={log} bottomDivider>\n      <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />\n      <ListItem.Content>\n        <ListItem.Title>{l.name}</ListItem.Title>\n        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n      </ListItem.Content>\n      <ListItem.Chevron />\n    </ListItem>\n  ))}\n</ListItem.Accordion>\n')))}u.isMDXComponent=!0;var c=["components"],s={id:"listitem_accordion",title:"ListItem.Accordion"},d=void 0,m={unversionedId:"components/listitem_accordion",id:"version-4.0.0-rc.2/components/listitem_accordion",title:"ListItem.Accordion",description:"This allows making a accordion list which can show/hide content.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/ListItem.Accordion.mdx",sourceDirName:"components",slug:"/components/listitem_accordion",permalink:"/docs/4.0.0-rc.2/components/listitem_accordion",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/ListItem.Accordion.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"listitem_accordion",title:"ListItem.Accordion"},sidebar:"docs",previous:{title:"ListItem",permalink:"/docs/4.0.0-rc.2/components/listitem"},next:{title:"ListItem.ButtonGroup",permalink:"/docs/4.0.0-rc.2/components/listitem_buttongroup"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This allows making a accordion list which can show/hide content."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(u,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"listitem#props"},"ListItem")," props.")),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"animation")),(0,o.kt)("td",{parentName:"tr",align:null},"Animated.TimingAnimationConfig"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Object with duration 350ms and type timing")),(0,o.kt)("td",{parentName:"tr",align:null},"Decide whether to show animation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"content")),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Similar to ListItem's child.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"expandIcon")),(0,o.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Icon when Accordion is expanded, if not provided ",(0,o.kt)("inlineCode",{parentName:"td"},"icon")," will be rotated 180deg.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"icon")),(0,o.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Icon for unexpanded Accordion.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isExpanded")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Decide if Accordion is Expanded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"noIcon")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Don't show accordion icon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"noRotation")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Don't rotate when Accordion is expanded."))))))}b.isMDXComponent=!0}}]);