(window.webpackJsonp=window.webpackJsonp||[]).push([[5],Array(62).concat([function(t,e){t.exports={}},,,,,,,,,,,,,function(t,e,n){var r=n(151)("wks"),i=n(152),s=n(47).Symbol,o="function"==typeof s;(t.exports=function(t){return r[t]||(r[t]=o&&s[t]||(o?s:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(18).f,i=n(17),s=n(27)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},,,function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return g}));const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function a(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=a(t);return s.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&a(t.path)===a(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:s}=n,o=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const a=o.sidebar||s.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,a);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},,,,,,,,,,function(t,e){t.exports={}},,function(t,e,n){"use strict";var r=n(42),i=n(37),s=n(25),o=n(19),a=n(62),u=n(92),c=n(76),l=n(93),f=n(27)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,d,v,g,m){u(n,e,d);var b,_,x,y=function(t){if(!h&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",L="values"==v,S=!1,C=t.prototype,$=C[f]||C["@@iterator"]||v&&C[v],w=$||y(v),O=v?L?y("entries"):w:void 0,A="Array"==e&&C.entries||$;if(A&&(x=l(A.call(new t)))!==Object.prototype&&x.next&&(c(x,k,!0),r||"function"==typeof x[f]||o(x,f,p)),L&&$&&"values"!==$.name&&(S=!0,w=function(){return $.call(this)}),r&&!m||!h&&!S&&C[f]||o(C,f,w),a[e]=w,a[k]=p,v)if(b={values:L?w:y("values"),keys:g?w:y("keys"),entries:O},m)for(_ in b)_ in C||s(C,_,b[_]);else i(i.P+i.F*(h||S),e,b);return b}},function(t,e,n){"use strict";var r=n(46),i=n(30),s=n(76),o={};n(19)(o,n(27)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),s(t,e+" Iterator")}},function(t,e,n){var r=n(17),i=n(73),s=n(33)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},,function(t,e,n){for(var r=n(98),i=n(43),s=n(25),o=n(12),a=n(19),u=n(62),c=n(27),l=c("iterator"),f=c("toStringTag"),h=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(p),v=0;v<d.length;v++){var g,m=d[v],b=p[m],_=o[m],x=_&&_.prototype;if(x&&(x[l]||a(x,l,h),x[f]||a(x,f,m),u[m]=h,b))for(g in r)x[g]||s(x,g,r[g],!0)}},function(t,e,n){var r=n(27)("unscopables"),i=Array.prototype;null==i[r]&&n(19)(i,r,{}),t.exports=function(t){i[r][t]=!0}},,function(t,e,n){"use strict";var r=n(96),i=n(99),s=n(62),o=n(21);t.exports=n(91)(Array,"Array",(function(t,e){this._t=o(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(182),i=n(107);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(151)("keys"),i=n(152);t.exports=function(t){return r[t]||(r[t]=i(t))}},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(73),i=n(43);n(159)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){"use strict";var r=n(15),i=n(40),s=n(142),o=n(143);n(144)("match",1,(function(t,e,n,a){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=a(n,t,this);if(e.done)return e.value;var u=r(t),c=String(this);if(!u.global)return o(u,c);var l=u.unicode;u.lastIndex=0;for(var f,h=[],p=0;null!==(f=o(u,c));){var d=String(f[0]);h[p]=d,""===d&&(u.lastIndex=s(c,i(u.lastIndex),l)),p++}return 0===p?null:h}]}))},,,,,,function(t,e,n){"use strict";var r=n(175)(!0);n(148)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(149),i=n(70),s=n(176),o=n(65),a=n(89),u=n(177),c=n(154),l=n(186),f=n(75)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,d,v,g,m){u(n,e,d);var b,_,x,y=function(t){if(!h&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",L="values"==v,S=!1,C=t.prototype,$=C[f]||C["@@iterator"]||v&&C[v],w=$||y(v),O=v?L?y("entries"):w:void 0,A="Array"==e&&C.entries||$;if(A&&(x=l(A.call(new t)))!==Object.prototype&&x.next&&(c(x,k,!0),r||"function"==typeof x[f]||o(x,f,p)),L&&$&&"values"!==$.name&&(S=!0,w=function(){return $.call(this)}),r&&!m||!h&&!S&&C[f]||o(C,f,w),a[e]=w,a[k]=p,v)if(b={values:L?w:y("values"),keys:g?w:y("keys"),entries:O},m)for(_ in b)_ in C||s(C,_,b[_]);else i(i.P+i.F*(h||S),e,b);return b}},function(t,e){t.exports=!0},function(t,e,n){var r=n(106),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(44),i=n(47),s=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(149)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(50).f,i=n(72),s=n(75)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},function(t,e,n){var r=n(107);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(105),i=n(75)("toStringTag"),s="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:s?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,n){"use strict";n.r(e);var r=n(79),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(158).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(157).default},methods:{isActive:r.e}},s=(n(205),n(1)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(206);function a(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function u(t,e,n,i,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||o>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,i,s,o+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,s=(n.$site,n.$route),o=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(r.e)(s,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(r.e)(s,f.basePath+"#"+t.slug)})):p,v="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):a(t,f.path,f.title||f.path,d),g=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,o.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||o.displayAllHeaders;return"auto"===f.type?[v,u(t,f.children,f.basePath,s,g)]:(d||m)&&f.headers&&!r.d.test(f.path)?[v,u(t,Object(r.c)(f.headers),f.path,s,g)]:v}};n(211);var l={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some((function(e){return"page"===e.type&&Object(r.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},f=Object(s.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=f.exports},function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(200),n(1)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},function(t,e,n){var r=n(37),i=n(20),s=n(16);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*s((function(){n(1)})),"Object",o)}},function(t,e,n){"use strict";n(161)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){var r=n(37),i=n(16),s=n(24),o=/"/g,a=function(t,e,n,r){var i=String(s(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),a+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){"use strict";var r=n(100);n.n(r).a},,function(t,e,n){"use strict";var r=n(103);n.n(r).a},function(t,e,n){"use strict";var r=n(104);n.n(r).a},function(t,e,n){var r=n(12),i=n(60),s=n(18).f,o=n(61).f,a=n(167),u=n(146),c=r.RegExp,l=c,f=c.prototype,h=/a/g,p=/a/g,d=new c(h)!==h;if(n(13)&&(!d||n(16)((function(){return p[n(27)("match")]=!1,c(h)!=h||c(p)==p||"/a/i"!=c(h,"i")})))){c=function(t,e){var n=this instanceof c,r=a(t),s=void 0===e;return!n&&r&&t.constructor===c&&s?t:i(d?new l(r&&!s?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&s?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=o(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(25)(r,"RegExp",c)}n(168)("RegExp")},function(t,e,n){var r=n(14),i=n(31),s=n(27)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},function(t,e,n){"use strict";var r=n(12),i=n(18),s=n(13),o=n(27)("species");t.exports=function(t){var e=r[t];s&&e&&!e[o]&&i.f(e,o,{configurable:!0,get:function(){return this}})}},function(t,e,n){t.exports=n(170)},function(t,e,n){n(171),t.exports=n(44).Array.isArray},function(t,e,n){var r=n(70);r(r.S,"Array",{isArray:n(172)})},function(t,e,n){var r=n(105);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){t.exports=n(174)},function(t,e,n){n(147),n(187),t.exports=n(44).Array.from},function(t,e,n){var r=n(106),i=n(107);t.exports=function(t){return function(e,n){var s,o,a=String(i(e)),u=r(n),c=a.length;return u<0||u>=c?t?"":void 0:(s=a.charCodeAt(u))<55296||s>56319||u+1===c||(o=a.charCodeAt(u+1))<56320||o>57343?t?a.charAt(u):s:t?a.slice(u,u+2):o-56320+(s-55296<<10)+65536}}},function(t,e,n){t.exports=n(65)},function(t,e,n){"use strict";var r=n(178),i=n(74),s=n(154),o={};n(65)(o,n(75)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),s(t,e+" Iterator")}},function(t,e,n){var r=n(71),i=n(179),s=n(153),o=n(109)("IE_PROTO"),a=function(){},u=function(){var t,e=n(78)("iframe"),r=s.length;for(e.style.display="none",n(185).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[s[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(50),i=n(71),s=n(180);t.exports=n(38)?Object.defineProperties:function(t,e){i(t);for(var n,o=s(e),a=o.length,u=0;a>u;)r.f(t,n=o[u++],e[n]);return t}},function(t,e,n){var r=n(181),i=n(153);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(72),i=n(108),s=n(183)(!1),o=n(109)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),u=0,c=[];for(n in a)n!=o&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~s(c,n)||c.push(n));return c}},function(t,e,n){var r=n(105);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(108),i=n(150),s=n(184);t.exports=function(t){return function(e,n,o){var a,u=r(e),c=i(u.length),l=s(o,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(106),i=Math.max,s=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):s(t,e)}},function(t,e,n){var r=n(47).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(72),i=n(155),s=n(109)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},function(t,e,n){"use strict";var r=n(77),i=n(70),s=n(155),o=n(188),a=n(189),u=n(150),c=n(190),l=n(191);i(i.S+i.F*!n(192)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,h=s(t),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,g=void 0!==v,m=0,b=l(h);if(g&&(v=r(v,d>2?arguments[2]:void 0,2)),null==b||p==Array&&a(b))for(n=new p(e=u(h.length));e>m;m++)c(n,m,g?v(h[m],m):h[m]);else for(f=b.call(h),n=new p;!(i=f.next()).done;m++)c(n,m,g?o(f,v,[i.value,m],!0):i.value);return n.length=m,n}})},function(t,e,n){var r=n(71);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var s=t.return;throw void 0!==s&&r(s.call(t)),e}}},function(t,e,n){var r=n(89),i=n(75)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||s[i]===t)}},function(t,e,n){"use strict";var r=n(50),i=n(74);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(156),i=n(75)("iterator"),s=n(89);t.exports=n(44).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||s[r(t)]}},function(t,e,n){var r=n(75)("iterator"),i=!1;try{var s=[7][r]();s.return=function(){i=!0},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var s=[7],o=s[r]();o.next=function(){return{done:n=!0}},s[r]=function(){return o},t(s)}catch(t){}return n}},function(t,e,n){t.exports=n(194)},function(t,e,n){n(195),n(147),t.exports=n(199)},function(t,e,n){n(196);for(var r=n(47),i=n(65),s=n(89),o=n(75)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var c=a[u],l=r[c],f=l&&l.prototype;f&&!f[o]&&i(f,o,c),s[c]=s.Array}},function(t,e,n){"use strict";var r=n(197),i=n(198),s=n(89),o=n(108);t.exports=n(148)(Array,"Array",(function(t,e){this._t=o(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(156),i=n(75)("iterator"),s=n(89);t.exports=n(44).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||s.hasOwnProperty(r(e))}},function(t,e,n){"use strict";var r=n(111);n.n(r).a},function(t,e,n){"use strict";var r=n(112);n.n(r).a},function(t,e,n){"use strict";var r=n(113);n.n(r).a},function(t,e,n){"use strict";var r=n(114);n.n(r).a},function(t,e,n){"use strict";var r=n(115);n.n(r).a},function(t,e,n){"use strict";var r=n(116);n.n(r).a},function(t,e,n){"use strict";var r=n(37),i=n(207)(5),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),r(r.P+r.F*s,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(96)("find")},function(t,e,n){var r=n(36),i=n(49),s=n(73),o=n(40),a=n(208);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,f=6==t,h=5==t||f,p=e||a;return function(e,a,d){for(var v,g,m=s(e),b=i(m),_=r(a,d,3),x=o(b.length),y=0,k=n?p(e,x):u?p(e,0):void 0;x>y;y++)if((h||y in b)&&(g=_(v=b[y],y,m),t))if(n)k[y]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:k.push(v)}else if(l)return!1;return f?-1:c||l?l:k}}},function(t,e,n){var r=n(209);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(14),i=n(210),s=n(27)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(31);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(117);n.n(r).a},function(t,e,n){"use strict";var r=n(118);n.n(r).a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(95),n(140),n(160);var r=n(79),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},s=n(1),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,a={components:{NavLink:o},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(162),Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(141),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],s=0;s<e.length&&!(i.length>=5);s++){var o=e[s];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(r(o))i.push(o);else if(o.headers)for(var a=0;a<o.headers.length&&!(i.length>=5);a++){var u=o.headers[a];r(u)&&i.push(Object.assign({},o,{path:o.path+"#"+u.slug,header:u}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),l=(n(164),Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),f=(n(165),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=(n(166),n(169)),p=n.n(h);var d=n(173),v=n.n(d),g=n(193),m=n.n(g);function b(t){return function(t){if(p()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(m()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return v()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(110);var _={components:{NavLink:o,DropdownTransition:n(158).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},x=(n(201),{components:{NavLink:o,DropdownLink:Object(s.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var o,a=e[s],u=i[s]&&i[s].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,s),r.some((function(t){return t.path===o}))||(o=s)),{text:u,link:o}}))};return[].concat(b(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),y=(n(202),Object(s.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function k(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var L={components:{SidebarButton:f,NavLinks:y,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(k(this.$el,"paddingLeft"))+parseInt(k(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(203),Object(s.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports);function C(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var s=r[i];if("page"===s.type&&s.path===decodeURIComponent(t.path))return r[i+n]}}var $={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(r.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,C(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(r.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,C(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,i=void 0===r?"":r,s=t.docsBranch,o=void 0===s?"master":s,a=t.docsRepo,u=void 0===a?e:a;return u&&n&&this.$page.relativePath?this.createEditLink(e,u,i,o,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(r.i.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.i.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+s}}},w=(n(204),Object(s.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),O={name:"Sidebar",components:{SidebarLinks:n(157).default,NavLinks:y},props:["items"]},A=(n(212),{components:{Home:u,Page:w,Sidebar:Object(s.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),j=Object(s.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=j.exports}])]);