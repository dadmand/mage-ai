(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1221],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var i=t(82394),o=t(21831),r=t(82684),u=t(47999),l=t(49894),c=t(93461),a=t(57384),s=t(41424),d=t(72454),p=t(28598);function f(e,n){var t=e.children;return(0,p.jsx)(d.HS,{ref:n,children:t})}var h=r.forwardRef(f),v=t(32063),m=t(85019),b=t(82531),g=t(66166),x=t(3055),j=t(49125),y=t(91427),Z=t(24141);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,i=e.after,f=e.afterHidden,w=e.afterWidth,k=e.afterWidthOverride,P=e.before,O=e.beforeWidth,I=e.breadcrumbs,E=e.children,_=e.errors,T=e.headerMenuItems,S=e.headerOffset,A=e.mainContainerHeader,M=e.navigationItems,D=e.setErrors,B=e.subheaderChildren,R=e.title,N=e.uuid,L=(0,Z.i)().width,H="dashboard_after_width_".concat(N),V="dashboard_before_width_".concat(N),W=(0,r.useRef)(null),G=(0,r.useState)(k?w:(0,y.U2)(H,w)),Y=G[0],U=G[1],z=(0,r.useState)(!1),F=z[0],q=z[1],Q=(0,r.useState)(P?Math.max((0,y.U2)(V,O),13*j.iI):null),K=Q[0],$=Q[1],J=(0,r.useState)(!1),X=J[0],ee=J[1],ne=(0,r.useState)(null)[1],te=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,ie=null===te||void 0===te?void 0:te.projects,oe={label:function(){var e;return null===ie||void 0===ie||null===(e=ie[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},re=[];I?(t&&re.push(oe),re.push.apply(re,(0,o.Z)(I))):(null===ie||void 0===ie?void 0:ie.length)>=1&&re.push.apply(re,[oe,{bold:!0,label:function(){return R}}]),(0,r.useEffect)((function(){null===W||void 0===W||!W.current||F||X||null===ne||void 0===ne||ne(W.current.getBoundingClientRect().width)}),[F,Y,X,K,W,ne,L]),(0,r.useEffect)((function(){F||(0,y.t8)(H,Y)}),[f,F,Y,H]),(0,r.useEffect)((function(){X||(0,y.t8)(V,K)}),[X,K,V]);var ue=(0,g.Z)(w);return(0,r.useEffect)((function(){k&&ue!==w&&U(w)}),[k,w,ue]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Z,{title:R}),(0,p.jsx)(s.Z,{breadcrumbs:re,menuItems:T,project:null===ie||void 0===ie?void 0:ie[0],version:null===ie||void 0===ie||null===(n=ie[0])||void 0===n?void 0:n.version}),(0,p.jsxs)(d.Nk,{children:[0!==(null===M||void 0===M?void 0:M.length)&&(0,p.jsx)(d.lm,{showMore:!0,children:(0,p.jsx)(m.Z,{navigationItems:M,showMore:!0})}),(0,p.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(v.Z,{after:i,afterHeightOffset:x.Mz,afterHidden:f,afterMousedownActive:F,afterWidth:Y,before:P,beforeHeightOffset:x.Mz,beforeMousedownActive:X,beforeWidth:d.k1+(P?K:0),headerOffset:S,hideAfterCompletely:!0,leftOffset:P?d.k1:null,mainContainerHeader:A,mainContainerRef:W,setAfterMousedownActive:q,setAfterWidth:U,setBeforeMousedownActive:ee,setBeforeWidth:$,children:[B&&(0,p.jsx)(h,{children:B}),E]})})]}),_&&(0,p.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,p.jsx)(l.Z,C(C({},_),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},64651:function(e,n,t){"use strict";t.d(n,{d:function(){return r}});var i=t(98781),o=t(90211),r=function(e,n){var t=[{label:function(){return"Standard (batch)"},onClick:function(){return e({pipeline:{name:(0,o.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{label:function(){return"Data integration"},onClick:function(){return e({pipeline:{name:(0,o.Y6)(),type:i.qL.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{label:function(){return"Streaming"},onClick:function(){return e({pipeline:{name:(0,o.Y6)(),type:i.qL.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}];return null!==n&&void 0!==n&&n.showBrowseTemplates&&t.push({label:function(){return"From a template"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showBrowseTemplates)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/custom_template"}),t}},50316:function(e,n,t){"use strict";t.d(n,{B:function(){return p}});var i=t(82394),o=t(30264),r=t(11135),u=t(22341),l=t(99994),c=t(49125),a=t(28598);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,i=e.isLoading,s=e.label,f=e.menuItems,h=e.onClick,v=e.onClickCallback;return(0,a.jsx)(o.Z,{disableKeyboardShortcuts:!0,items:f,onClickCallback:v,onClickOutside:v,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,a.jsx)(r.ZP,d(d({},p),{},{background:l.eW,beforeElement:(0,a.jsx)(u.mm,{size:2.5*c.iI}),loading:i,onClick:function(e){e.preventDefault(),null===h||void 0===h||h()},uuid:"shared/AddButton/index",children:s}))})}},93348:function(e,n,t){"use strict";t.d(n,{TR:function(){return d},U5:function(){return c},Xm:function(){return r},Z4:function(){return s},fq:function(){return l},kJ:function(){return a}});var i,o,r,u=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(r||(r={}));var l,c,a,s=(i={},(0,u.Z)(i,r.API,(function(){return"API"})),(0,u.Z)(i,r.EVENT,(function(){return"event"})),(0,u.Z)(i,r.TIME,(function(){return"schedule"})),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(l||(l={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(c||(c={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(a||(a={}));var d=(o={},(0,u.Z)(o,a.CREATED_AT,"Created at"),(0,u.Z)(o,a.NAME,"Name"),(0,u.Z)(o,a.PIPELINE,"Pipeline"),(0,u.Z)(o,a.STATUS,"Status"),(0,u.Z)(o,a.TYPE,"Type"),o)},29237:function(e,n,t){"use strict";var i=t(38626),o=t(67971),r=t(86673),u=t(19711),l=t(23831),c=t(73942),a=t(37391),s=t(49125),d=t(28598),p=(0,i.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),f=i.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],c.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||l.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||l.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||l.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||l.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||l.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=i.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],c.n_,c.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||l.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||l.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),p,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),v=i.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),m=i.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],c.M8,c.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,i=e.containerRef,l=e.contentContainerRef,c=e.dark,a=e.footer,s=e.fullHeight,p=void 0===s||s,b=e.fullWidth,g=void 0===b||b,x=e.header,j=e.headerHeight,y=e.headerIcon,Z=e.headerPaddingVertical,w=e.headerTitle,C=e.maxHeight,k=e.maxWidth,P=e.minWidth,O=e.noPadding,I=e.overflowVisible,E=e.subtitle,_=e.success;return(0,d.jsxs)(f,{borderless:n,dark:c,fullHeight:p,fullWidth:g,maxHeight:C,maxWidth:k,minWidth:P,overflowVisible:I,ref:i,success:_,children:[(x||w)&&(0,d.jsxs)(h,{headerPaddingVertical:Z,height:j,children:[x&&x,w&&(0,d.jsx)(o.Z,{alignItems:"center",justifyContent:"space-between",children:(0,d.jsxs)(o.Z,{alignItems:"center",children:[y&&y,(0,d.jsx)(r.Z,{ml:y?1:0,children:(0,d.jsx)(u.ZP,{bold:!0,default:!0,children:w})})]})})]}),(0,d.jsxs)(v,{maxHeight:C,noPadding:O,overflowVisible:I,ref:l,children:[E&&(0,d.jsx)(r.Z,{mb:2,children:(0,d.jsx)(u.ZP,{default:!0,children:E})}),t]}),a&&(0,d.jsx)(m,{children:a})]})}},12257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Le}});var i=t(77837),o=t(75582),r=t(82394),u=t(38860),l=t.n(u),c=t(12691),a=t.n(c),s=t(83455),d=t(82684),p=t(34376),f=t(2485),h=t(60328),v=t(79891),m=t(1210),b=t(93461),g=t(67971),x=t(87372),j=t(11135),y=t(29237),Z=t(86673),w=t(19711),C=t(38435),k=t(82944),P=t(28598);var O=function(e){var n=e.description,t=e.isLoading,i=e.maxWidth,o=e.minWidth,r=e.noEmptyValue,u=e.onClose,l=e.onSave,c=e.textArea,a=e.title,s=e.value,p=(0,d.useRef)(null),f=(0,d.useState)(s),v=f[0],m=f[1],b=c?C.Z:k.Z;return(0,d.useEffect)((function(){var e;null===p||void 0===p||null===(e=p.current)||void 0===e||e.focus()}),[]),(0,P.jsxs)(y.Z,{maxWidth:i,minWidth:o,children:[(0,P.jsx)(w.ZP,{bold:!0,children:a}),(0,P.jsx)(Z.Z,{mt:1,children:(0,P.jsx)(b,{monospace:!0,onChange:function(e){return m(e.target.value)},ref:p,rows:c?7:null,value:v})}),n&&(0,P.jsx)(Z.Z,{mt:2,children:(0,P.jsx)(w.ZP,{muted:!0,small:!0,children:n})}),(0,P.jsx)(Z.Z,{mt:3,children:(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(j.ZP,{bold:!0,inline:!0,loading:t,onClick:function(){v===s||r&&!v?u():l(v)},outline:!0,primary:!0,uuid:"Inputs/InputModal/SaveInput",children:"Save"}),(0,P.jsx)(Z.Z,{ml:1}),(0,P.jsx)(h.Z,{onClick:u,children:"Cancel"})]})})]})},I=t(10919),E=t(98781),_=t(41788),T=t(54283),S=t(87815),A=t(55264),M=t(70902),D=t(50316),B=t(18283),R=t(47999),N=t(30264),L=t(62609),H=t(38626),V=t(23831),W=t(73942),G=t(37391),Y=t(49125),U=74*Y.iI,z=48*Y.iI,F=H.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-18n432u-0"})(["position:absolute;border-radius:","px;overflow:hidden;width:","px;display:none;"," "," "," "," ",""],W.n_,U,(function(e){return"\n    background-color: ".concat((e.theme||V.Z).background.panel,";\n    border: ").concat(W.mP,"px ").concat(W.M8," ").concat((e.theme||V.Z).interactive.defaultBackground,";\n    box-shadow: ").concat((e.theme.shadow||V.Z.shadow).window,";\n  ")}),(function(e){return e.display&&"\n    display: block;\n  "}),(function(e){return e.compact&&"\n    width: ".concat(.75*U,"px;\n  ")}),(function(e){return"undefined"!==typeof e.left&&"\n    left: ".concat(e.left,"px;\n  ")}),(function(e){return"undefined"!==typeof e.top&&"\n    top: ".concat(e.top,"px;\n  ")})),q=H.default.div.withConfig({displayName:"indexstyle__MainStyle",componentId:"sc-18n432u-1"})(["display:flex;border-radius:","px;overflow:hidden;height:","px;"," ",""],W.n_,z,(function(e){return"\n    background-color: ".concat((e.theme||V.Z).background.content,";\n    border: ").concat(W.YF,"px ").concat(W.M8," ").concat((e.theme||V.Z).interactive.defaultBackground,";\n  ")}),(function(e){return e.compact&&"\n    height: ".concat(z/2,"px;\n  ")})),Q=H.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-18n432u-2"})(["width:100%;overflow:auto;"," ",""],G.w5,(function(e){return"\n    border-right: ".concat(W.YF,"px ").concat(W.M8," ").concat((e.theme||V.Z).background.panel,";\n  ")})),K=H.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-18n432u-3"})(["width:100%;overflow:auto;",""],G.w5),$=(0,H.css)(["display:flex;align-items:center;justify-content:space-between;padding:","px ","px;"],Y.iI,2*Y.iI),J=H.default.div.withConfig({displayName:"indexstyle__OptionStyle",componentId:"sc-18n432u-4"})([""," padding-top:","px;padding-bottom:","px;&:hover{cursor:pointer;","}",""],$,1.5*Y.iI,1.5*Y.iI,(function(e){return"\n      background-color: ".concat((e.theme||V.Z).monotone.black,";\n    ")}),(function(e){return e.highlighted&&"\n    background-color: ".concat((e.theme||V.Z).monotone.black,";\n  ")})),X=H.default.div.withConfig({displayName:"indexstyle__ToggleValueStyle",componentId:"sc-18n432u-5"})([""," ",""],$,(function(e){return"\n    border-bottom: ".concat(W.YF,"px ").concat(W.M8," ").concat((e.theme||V.Z).borders.medium2,";\n  ")})),ee=t(22341),ne=t(33766),te=t(90211);function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re,ue=function(e){var n,t,i,u=e.children,l=e.compact,c=e.onClickCallback,a=e.onClickOutside,s=e.onSecondaryClick,p=e.open,f=e.options,v=void 0===f?{}:f,m=e.parentRef,x=e.query,j=e.setOpen,y=e.toggleValueMapping,C=(0,d.useState)(null),k=C[0],O=C[1],I=(0,d.useState)(v),E=I[0],_=I[1];(0,d.useEffect)((function(){_(v)}),[v]);var T=((null===m||void 0===m||null===(n=m.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).top,S=void 0===T?0:T,A=Object.keys(v);return(0,P.jsxs)(R.Z,{onClickOutside:a,open:!0,children:[(0,P.jsx)("div",{ref:m,children:u}),(0,P.jsxs)(F,{compact:l,display:p,top:S-5,children:[(0,P.jsxs)(q,{compact:l,children:[(0,P.jsx)(b.Z,{flex:"1",children:(0,P.jsx)(Q,{children:A.map((function(e){return(0,P.jsxs)(J,{highlighted:k===e,onMouseEnter:function(){return O(e)},children:[(0,P.jsx)(w.ZP,{children:(0,te.kC)(e)}),(0,P.jsx)(ee._Q,{})]},e)}))})}),(0,P.jsx)(b.Z,{flex:"2",children:(0,P.jsx)(K,{children:k&&Object.entries((null===(i=E||v)||void 0===i?void 0:i[k])||{}).map((function(e){var n,t=(0,o.Z)(e,2),i=t[0],u=t[1];return(0,P.jsxs)(X,{children:[(0,P.jsx)(w.ZP,{children:(null===y||void 0===y||null===(n=y[k])||void 0===n?void 0:n[i])||(0,te.J3)((0,te.kC)(i))}),(0,P.jsx)(M.Z,{checked:u,onCheck:function(){return _((function(e){return oe(oe({},e),{},(0,r.Z)({},k,oe(oe({},null===e||void 0===e?void 0:e[k]),{},(0,r.Z)({},i,!u))))}))}})]},i)}))})})]}),(0,P.jsx)(Z.Z,{m:1,children:(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(h.Z,{onClick:function(){var e=Object.entries(E).reduce((function(e,n){var t=(0,o.Z)(n,2),i=t[0],r=t[1],u=[];return Object.entries(r).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0];return n[1]&&u.push(t)})),e[i]=u,e}),{});null===c||void 0===c||c(x,e),(0,ne.g_)(x,e,{addingMultipleValues:!0,pushHistory:!0})},secondary:!0,children:"Apply"}),(0,P.jsx)(Z.Z,{mr:1}),(0,P.jsx)(h.Z,{noBackground:!0,onClick:function(){j(!1),null===s||void 0===s||s()},children:"Defaults"})]})})]})]})},le=t(46261),ce="".concat(1.5*Y.iI,"px"),ae=40*Y.iI;!function(e){e[e.SECONDARY=1]="SECONDARY",e[e.DELETE=2]="DELETE"}(re||(re={}));var se={autoHide:!0,size:null,widthFitContent:!0},de=t(7715),pe=t(9736);function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function he(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ve=function(e){var n=e.addButtonProps,t=e.deleteRowProps,i=e.filterOptions,r=void 0===i?{}:i,u=e.filterValueLabelMapping,l=e.groupButtonProps,c=e.moreActionsMenuItems,a=e.onFilterApply,s=e.query,f=void 0===s?{}:s,h=e.searchProps,v=e.secondaryActionButtonProps,m=e.selectedRowId,x=e.setSelectedRow,y=(0,pe.Ct)(),C=(0,p.useRouter)(),O=(0,d.useRef)(null),I=(0,d.useRef)(null),E=(0,d.useRef)(null),_=(0,d.useRef)(null),T=(0,d.useRef)(null),S=(0,d.useState)(!1),A=S[0],M=S[1],H=(0,d.useState)(!1),V=H[0],G=H[1],U=(0,d.useState)(!1),z=U[0],F=U[1],q=(0,d.useState)(!1),Q=q[0],K=q[1],$=(0,d.useState)(null),J=$[0],X=$[1],ne=!m,te=(0,d.useCallback)((function(){return M(!1)}),[]),ie=(0,d.useCallback)((function(){return G(!1)}),[]),oe=(0,d.useCallback)((function(){return F(!1)}),[]),fe=(0,d.useCallback)((function(){return K(null)}),[]),ve=(0,d.useCallback)((function(){return X(null)}),[]),me=v||{},be=me.Icon,ge=me.confirmationDescription,xe=me.confirmationMessage,je=me.isLoading,ye=me.label,Ze=me.onClick,we=me.openConfirmationDialogue,Ce=me.tooltip,ke=t||{},Pe=ke.confirmationMessage,Oe=ke.isLoading,Ie=ke.item,Ee=ke.onDelete,_e=h||{},Te=_e.placeholder,Se=_e.onChange,Ae=_e.value,Me=(0,d.useMemo)((function(){return Object.entries(r).reduce((function(e,n){var t=(0,o.Z)(n,2),i=t[0],r=t[1];return e[i]={},r.forEach((function(n){var t,o=(null===(t=f["".concat(i,"[]")])||void 0===t?void 0:t.includes(n))||!1;e[i][n]=o})),e}),{})}),[r,f]),De=n||{},Be=De.label,Re=De.menuItems,Ne=De.isLoading,Le=(0,d.useMemo)((function(){return(0,P.jsx)(D.Z,{addButtonMenuOpen:A,addButtonMenuRef:O,isLoading:Ne,label:Be,menuItems:Re,onClick:function(){return M((function(e){return!e}))},onClickCallback:te})}),[Be,Re,A,te,Ne]),He=(0,d.useMemo)((function(){return(0,de.dw)(Me)}),[Me]),Ve=(0,d.useMemo)((function(){return(0,P.jsx)(ue,{compact:!0,onClickCallback:function(e,n){a&&(null===a||void 0===a||a(e,n)),ie&&(null===ie||void 0===ie||ie())},onClickOutside:ie,onSecondaryClick:function(){return C.push("/pipelines")},open:V,options:Me,parentRef:I,query:f,setOpen:G,toggleValueMapping:u,children:(0,P.jsx)(j.ZP,he(he({},D.B),{},{afterElement:He>0?(0,P.jsx)(B.Z,{cyan:!0,noVerticalPadding:!0,children:(0,P.jsx)(w.ZP,{bold:!0,inverted:!0,children:He})}):null,beforeElement:(0,P.jsx)(ee.wn,{size:2*Y.iI}),onClick:function(){return G((function(e){return!e}))},uuid:"Table/Toolbar/FilterButton",children:"Filter"}))})}),[ie,V,Me,u,He,a,f,C]),We=l||{},Ge=We.groupByLabel,Ye=We.menuItems,Ue=(0,d.useMemo)((function(){return(0,P.jsx)(N.Z,{disableKeyboardShortcuts:!0,items:Ye,onClickCallback:oe,onClickOutside:oe,open:z,parentRef:E,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/GroupMenu",children:(0,P.jsx)(j.ZP,he(he({},D.B),{},{beforeElement:(0,P.jsx)(ee.ZA,{size:2.5*Y.iI}),onClick:function(){F((function(e){return!e}))},uuid:"Table/Toolbar/GroupButton",children:Ge?"Grouped by ".concat(Ge):"Group"}))})}),[oe,z,Ge,Ye]),ze=(0,d.useMemo)((function(){return(0,P.jsx)(N.Z,{disableKeyboardShortcuts:!0,items:c,onClickCallback:fe,onClickOutside:fe,open:Q,parentRef:_,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/MoreActionsMenu",children:(0,P.jsx)(le.Z,he(he({},se),{},{label:"More actions",children:(0,P.jsx)(j.ZP,{Icon:ee.mH,bold:!0,disabled:ne,greyBorder:!0,onClick:function(){return K((function(e){return!e}))},smallIcon:!0,uuid:"Table/Toolbar/MoreActionsButton"})}))})}),[fe,ne,Q,c]);return(0,P.jsxs)(g.Z,{alignItems:"center",children:[Le,(0,P.jsx)(Z.Z,{mr:ce}),Ve,(null===Ye||void 0===Ye?void 0:Ye.length)>0&&(0,P.jsx)(Z.Z,{ml:ce,children:Ue}),!y&&Ze&&(0,P.jsxs)(Z.Z,{ml:ce,children:[(0,P.jsx)(le.Z,he(he({},se),{},{label:Ce,children:(0,P.jsx)(j.ZP,{Icon:!je&&be,bold:!0,disabled:ne,greyBorder:!0,loading:je,onClick:we?function(){return X(re.SECONDARY)}:Ze,smallIcon:!0,uuid:"Table/Toolbar/SecondaryActionButton",children:ye})})),(0,P.jsx)(R.Z,{onClickOutside:ve,open:J===re.SECONDARY,children:(0,P.jsx)(L.Z,{onCancel:ve,onClick:function(){Ze(),ve(),x(null)},subtitle:ge,title:xe,top:58,width:ae})})]}),!y&&Ee&&(0,P.jsxs)(Z.Z,{ml:ce,children:[(0,P.jsx)(le.Z,he(he({},se),{},{label:"Delete ".concat(Ie),children:(0,P.jsx)(j.ZP,{Icon:!Oe&&ee.rF,bold:!0,disabled:ne,greyBorder:!0,loading:Oe,onClick:function(){return X(re.DELETE)},smallIcon:!0,uuid:"Table/Toolbar/DeleteButton"})})),(0,P.jsx)(R.Z,{onClickOutside:ve,open:J===re.DELETE,children:(0,P.jsx)(L.Z,{danger:!0,onCancel:ve,onClick:function(){Ee(m),ve(),x(null)},subtitle:Pe,title:"Are you sure you want to delete the ".concat(Ie," ").concat(m,"?"),top:58,width:ae})})]}),!y&&(null===c||void 0===c?void 0:c.length)>0&&(0,P.jsx)(Z.Z,{ml:ce,children:ze}),Se&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Z.Z,{ml:ce}),(0,P.jsx)(b.Z,{flex:1,children:(0,P.jsx)(k.Z,{afterIcon:Ae?(0,P.jsx)(ee.x8,{}):null,afterIconClick:function(){var e;Se(""),null===T||void 0===T||null===(e=T.current)||void 0===e||e.focus()},afterIconSize:1.5*Y.iI,beforeIcon:(0,P.jsx)(ee.HN,{}),borderRadius:W.n_,defaultColor:!0,fullWidth:!0,greyBorder:!0,maxWidth:60*Y.iI,onChange:function(e){return Se(e.target.value)},paddingVertical:9,placeholder:Te||null,ref:T,value:Ae})})]})]})},me=t(82531),be=t(86422),ge=t(9728),xe=t(3055),je=t(27337),ye=t(18908),Ze=t(93348),we=t(45838),Ce=t(96510),ke=t(59e3),Pe=t(91427),Oe="pipeline_list_filters",Ie="pipeline_list_group_bys";function Ee(e){return(0,Pe.t8)(Oe,e),e}function _e(e){return(0,Pe.t8)(Ie,e),e}var Te=t(64651),Se=t(66653),Ae=t(24224),Me=t(99497);function De(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function Be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?De(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Re={borderRadius:W.BG,iconOnly:!0,noBackground:!0,noBorder:!0,outline:!0,padding:"4px"};function Ne(){var e=(0,p.useRouter)(),n=(0,d.useRef)(null),t=(0,d.useState)(null),i=t[0],u=t[1],l=(0,d.useState)(null),c=l[0],j=l[1],C=(0,d.useState)({}),k=C[0],_=C[1],D=(0,d.useState)(null),B=D[0],R=D[1],N=(0,ke.iV)(),L=(0,ke.DQ)(N,[E.$1.STATUS,E.$1.TAG,E.$1.TYPE]),H=me.ZP.pipelines.list(Be(Be({},L),{},{include_schedules:1})),W=H.data,G=H.mutate,U=(0,d.useMemo)((function(){var e=(null===W||void 0===W?void 0:W.pipelines)||[];if(c){var n=c.toLowerCase();e=e.filter((function(e){var t=e.name,i=e.description,o=e.uuid;return(null===t||void 0===t?void 0:t.toLowerCase().includes(n))||(null===o||void 0===o?void 0:o.toLowerCase().includes(n))||(null===i||void 0===i?void 0:i.toLowerCase().includes(n))}))}return e}),[null===W||void 0===W?void 0:W.pipelines,c]),z=me.ZP.projects.list(),F=z.data,q=z.mutate,Q=(0,d.useMemo)((function(){var e;return null===F||void 0===F||null===(e=F.projects)||void 0===e?void 0:e[0]}),[F]),K=null===N||void 0===N?void 0:N[E.$1.GROUP];(0,d.useEffect)((function(){var e={};if(K)_e((0,r.Z)({},K,!0));else{var n,t=(0,Pe.U2)(Ie,{});t&&Object.entries(t).forEach((function(e){var t=(0,o.Z)(e,2),i=t[0],r=t[1];!n&&r&&(n=i)})),n&&(e[E.$1.GROUP]=n)}if((0,de.Qr)(L)){var i={},u=(0,Pe.U2)(Oe,{});u&&Object.entries(u).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];i[t]=[],Object.entries(r).forEach((function(e){var n=(0,o.Z)(e,2),r=n[0];n[1]&&i[t].push(r)}))})),(0,de.Qr)(i)||(e=Be(Be({},e),i))}else{var l={};Object.entries(L).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];l[t]={};var r,u=i;(Array.isArray(u)||(u=[u]),u&&Array.isArray(u))&&(null===(r=u)||void 0===r||r.forEach((function(e){l[t][e]=!0})))})),Ee(l)}(0,de.Qr)(e)||(0,ne.u7)(e,{pushHistory:!1})}),[K,L]),(0,d.useEffect)((function(){(0,Ce.bB)(W,R)}),[W]);var $=function(e){return(0,s.Db)(me.ZP.pipelines.useCreate(),{onSuccess:function(n){return(0,Ce.wD)(n,{callback:function(n){var t=n.pipeline.uuid;null===e||void 0===e||e(t)},onErrorCallback:function(e,n){return R({errors:n,response:e})}})}})},J=$((function(n){return e.push("/pipelines/[pipeline]/edit","/pipelines/".concat(n,"/edit"))})),X=(0,o.Z)(J,2),ie=X[0],oe=X[1].isLoading,re=$((function(){return null===G||void 0===G?void 0:G()})),ue=(0,o.Z)(re,2),le=ue[0],ce=ue[1].isLoading,ae=(0,s.Db)((function(e){return me.ZP.pipelines.useUpdate(e.uuid)({pipeline:e})}),{onSuccess:function(e){return(0,Ce.wD)(e,{callback:function(e){var n=e.pipeline.uuid;_((function(e){return Be(Be({},e),{},(0,r.Z)({},n,!1))})),G(),null===Ge||void 0===Ge||Ge(),u(null)},onErrorCallback:function(e,n){var t,i=null===e||void 0===e||null===(t=e.url_parameters)||void 0===t?void 0:t.pk;_((function(e){return Be(Be({},e),{},(0,r.Z)({},i,!1))})),R({errors:n,response:e})}})}}),se=(0,o.Z)(ae,2),pe=se[0],fe=se[1].isLoading,he=(0,s.Db)((function(e){return me.ZP.pipelines.useDelete(e)()}),{onSuccess:function(e){return(0,Ce.wD)(e,{callback:function(){null===G||void 0===G||G()},onErrorCallback:function(e,n){return R({errors:n,response:e})}})}}),De=(0,o.Z)(he,2),Ne=De[0],Le=De[1].isLoading,He=(0,Me.dd)((function(e){var n=e.pipeline,t=e.pipelineDescription,o=e.pipelineName;return(0,P.jsx)(O,{isLoading:fe,minWidth:55*Y.iI,noEmptyValue:!!o,onClose:Ge,onSave:function(e){var t=n||i;if(t){var u=t.uuid,l={uuid:u};o?l.name=e:l.description=e,_((function(e){return Be(Be({},e),{},(0,r.Z)({},u,!0))})),pe(l)}},textArea:!o,title:o?"Rename pipeline":"Edit description",value:o||t})}),{},[fe,i],{background:!0,uuid:"rename_pipeline_and_save"}),Ve=(0,o.Z)(He,2),We=Ve[0],Ge=Ve[1],Ye=(0,Me.dd)((function(){return(0,P.jsx)(ge.BC,{children:(0,P.jsx)(f.Z,{contained:!0,onClickCustomTemplate:function(e){ie({pipeline:{custom_template_uuid:null===e||void 0===e?void 0:e.template_uuid,name:(0,te.Y6)()}}).then((function(){Fe()}))},showBreadcrumbs:!0,tabs:[je.A2]})})}),{},[],{background:!0,uuid:"browse_templates"}),Ue=(0,o.Z)(Ye,2),ze=Ue[0],Fe=Ue[1],qe=(0,d.useMemo)((function(){return(0,Te.d)(ie,{showBrowseTemplates:ze})}),[ie,ze]),Qe=me.ZP.tags.list().data,Ke=(0,d.useMemo)((function(){return(0,Ae.YC)((null===Qe||void 0===Qe?void 0:Qe.tags)||[],(function(e){return e.uuid}))}),[Qe]),$e=(0,d.useMemo)((function(){return(0,P.jsx)(ve,{addButtonProps:{isLoading:oe,label:"New",menuItems:qe},deleteRowProps:{confirmationMessage:"This is irreversible and will immediately delete everything associated           with the pipeline, including its blocks, triggers, runs, logs, and history.",isLoading:Le,item:"pipeline",onDelete:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===i||void 0===i?void 0:i.uuid,"?"))&&Ne(null===i||void 0===i?void 0:i.uuid)}},filterOptions:{status:Object.values(E.QK),tag:Ke.map((function(e){return e.uuid})),type:Object.values(E.qL)},filterValueLabelMapping:{tag:Ke.reduce((function(e,n){var t=n.uuid;return Be(Be({},e),{},(0,r.Z)({},t,t))}),{}),type:E.G7},groupButtonProps:{groupByLabel:K,menuItems:[{beforeIcon:K===E.r0.STATUS?(0,P.jsx)(ee.Jr,{fill:V.Z.content.default,size:1.5*Y.iI}):(0,P.jsx)(ee.Cd,{muted:!0,size:1.5*Y.iI}),label:function(){return(0,te.kC)(E.r0.STATUS)},onClick:function(){var e=K===E.r0.STATUS?null:E.r0.STATUS;e||_e({}),(0,ne.u7)((0,r.Z)({},E.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Status"},{beforeIcon:K===E.r0.TAG?(0,P.jsx)(ee.Jr,{fill:V.Z.content.default,size:1.5*Y.iI}):(0,P.jsx)(ee.Cd,{muted:!0,size:1.5*Y.iI}),label:function(){return(0,te.kC)(E.r0.TAG)},onClick:function(){var e=K===E.r0.TAG?null:E.r0.TAG;e||_e({}),(0,ne.u7)((0,r.Z)({},E.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Tag"},{beforeIcon:K===E.r0.TYPE?(0,P.jsx)(ee.Jr,{fill:V.Z.content.default,size:1.5*Y.iI}):(0,P.jsx)(ee.Cd,{muted:!0,size:1.5*Y.iI}),label:function(){return(0,te.kC)(E.r0.TYPE)},onClick:function(){var e=K===E.r0.TYPE?null:E.r0.TYPE;e||_e({}),(0,ne.u7)((0,r.Z)({},E.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Type"}]},moreActionsMenuItems:[{label:function(){return"Rename pipeline"},onClick:function(){return We({pipelineName:null===i||void 0===i?void 0:i.name})},uuid:"Pipelines/MoreActionsMenu/Rename"},{label:function(){return"Edit description"},onClick:function(){return We({pipelineDescription:null===i||void 0===i?void 0:i.description})},uuid:"Pipelines/MoreActionsMenu/EditDescription"}],onFilterApply:function(e,n){Object.values(n).every((function(e){return!(null!==e&&void 0!==e&&e.length)}))&&Ee({})},query:L,searchProps:{onChange:j,value:c},secondaryActionButtonProps:{Icon:ee.oX,confirmationDescription:"Cloning the selected pipeline will create a new pipeline with the same           configuration and code blocks. The blocks use the same block files as the original pipeline.           Pipeline triggers, runs, backfills, and logs are not copied over to the new pipeline.",confirmationMessage:"Do you want to clone the pipeline ".concat(null===i||void 0===i?void 0:i.uuid,"?"),isLoading:ce,onClick:function(){return le({pipeline:{clone_pipeline_uuid:null===i||void 0===i?void 0:i.uuid}})},openConfirmationDialogue:!0,tooltip:"Clone pipeline"},selectedRowId:null===i||void 0===i?void 0:i.uuid,setSelectedRow:u})}),[le,Ne,K,ce,oe,Le,qe,L,c,null===i||void 0===i?void 0:i.description,null===i||void 0===i?void 0:i.name,null===i||void 0===i?void 0:i.uuid,We,Ke]),Je=(0,ge.VI)(null,{},[],{uuid:"pipelines/list"}),Xe=(0,o.Z)(Je,1)[0],en=(0,s.Db)(me.ZP.projects.useUpdate(null===Q||void 0===Q?void 0:Q.name),{onSuccess:function(e){return(0,Ce.wD)(e,{callback:function(){q()},onErrorCallback:function(e,n){return Xe({errors:n,response:e})}})}}),nn=(0,o.Z)(en,2),tn=nn[0],on=nn[1].isLoading,rn=(0,d.useCallback)((function(e){return tn({project:e})}),[tn]),un=(0,Me.dd)((function(){return(0,P.jsxs)(y.Z,{maxWidth:60*Y.iI,children:[(0,P.jsx)(Z.Z,{mb:1,children:(0,P.jsx)(x.Z,{children:"Help improve Mage"})}),(0,P.jsx)(Z.Z,{mb:Y.cd,children:(0,P.jsx)(w.ZP,{default:!0,children:"Please contribute usage statistics to help improve the developer experience for you and everyone in the community \ud83e\udd1d."})}),(0,P.jsx)(Z.Z,{mb:Y.cd,children:(0,P.jsx)(y.Z,{success:!0,children:(0,P.jsxs)(g.Z,{alignItems:"center",children:[(0,P.jsx)(ee.Yo,{size:5*Y.iI,success:!0}),(0,P.jsx)(Z.Z,{mr:1}),(0,P.jsx)(b.Z,{children:(0,P.jsx)(w.ZP,{children:"All usage statistics are completely anonymous. It\u2019s impossible for Mage to know which statistics belongs to whom."})})]})})}),(0,P.jsx)(Z.Z,{mb:Y.cd,children:(0,P.jsxs)(w.ZP,{default:!0,children:["By opting into sending usage statistics to ",(0,P.jsx)(I.Z,{href:"https://www.mage.ai",openNewWindow:!0,children:"Mage"}),", it\u2019ll help the team and community of contributors (",(0,P.jsx)(I.Z,{href:"https://www.mage.ai/chat",openNewWindow:!0,children:"Magers"}),") learn what\u2019s going wrong with the tool and what improvements can be made."]})}),(0,P.jsx)(Z.Z,{mb:Y.cd,children:(0,P.jsx)(w.ZP,{default:!0,children:"In addition to helping reduce potential errors, you\u2019ll help inform which features are useful and which need work."})}),(0,P.jsx)(Z.Z,{mb:Y.cd,children:(0,P.jsxs)(g.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,P.jsx)(w.ZP,{bold:!0,children:"I want to help make Mage more powerful for everyone"}),(0,P.jsx)(Z.Z,{mr:Y.cd}),(0,P.jsx)(M.Z,{checked:!0,onCheck:function(){window.confirm("Are you sure you don\u2019t want to help everyone in the community?")&&rn({help_improve_mage:!1}).then((function(){return an()}))}})]})}),on&&(0,P.jsx)(Z.Z,{mb:Y.cd,children:(0,P.jsx)(T.Z,{inverted:!0})}),(0,P.jsx)(Z.Z,{mb:Y.cd,children:(0,P.jsxs)(w.ZP,{muted:!0,small:!0,children:["To learn more about how this works, please check out the ",(0,P.jsx)(I.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,small:!0,children:"documentation"}),"."]})}),(0,P.jsx)(h.Z,{onClick:function(){return rn({help_improve_mage:!0}).then((function(){return an()}))},secondary:!0,children:"Close"})]})}),{},[Q],{background:!0,hideCallback:function(){rn({help_improve_mage:!0})},uuid:"help_mage"}),ln=(0,o.Z)(un,2),cn=ln[0],an=ln[1];(0,d.useEffect)((function(){Q&&null===(null===Q||void 0===Q?void 0:Q.help_improve_mage)&&cn()}),[Q,cn]);var sn=(0,d.useMemo)((function(){var e={};null===U||void 0===U||U.forEach((function(n,t){var i=n[K];if(E.r0.STATUS===K){var o=n.schedules,r=void 0===o?[]:o,u=r.length;i=r.find((function(e){var n=e.status;return Ze.fq.ACTIVE===n}))?E.QK.ACTIVE:u>=1?E.QK.INACTIVE:E.QK.NO_SCHEDULES}else if(E.r0.TAG===K){i=(null===n||void 0===n?void 0:n.tags)?(0,Ae.YC)(n.tags,(function(e){return e})).join(", "):""}e[i]||(e[i]=[]),e[i].push(t)}));var n=[],t=[];return E.r0.STATUS===K?Object.values(E.QK).forEach((function(i){n.push(e[i]),t.push((0,te.vg)(i))})):E.r0.TAG===K?(0,Ae.YC)(Object.keys(e),(function(e){return e})).forEach((function(i){n.push(e[i]),i?t.push(i.split(", ").map((function(e,n){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{style:{marginLeft:n>=1?4:0}},"".concat(e,"-").concat(n,"-spacing")),(0,P.jsx)(v.Z,{small:!0,children:(0,P.jsx)(w.ZP,{children:e})},"".concat(e,"-").concat(n))]})}))):t.push("No tags")})):E.r0.TYPE===K&&Object.values(E.qL).forEach((function(i){n.push(e[i]),t.push(E.G7[i])})),{rowGroupHeaders:t,rowsGroupedByIndex:n}}),[K,U]),dn=sn.rowGroupHeaders,pn=sn.rowsGroupedByIndex;return(0,P.jsx)(m.Z,{errors:B,setErrors:R,subheaderChildren:$e,title:"Pipelines",uuid:"pipelines/index",children:0===(null===U||void 0===U?void 0:U.length)?(0,P.jsx)(Z.Z,{px:3,py:1,children:W?(0,P.jsx)(w.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No pipelines available"}):(0,P.jsx)(T.Z,{inverted:!0,large:!0})}):(0,P.jsx)(we.cl,{includePadding:!!K,maxHeight:"calc(100vh - ".concat(xe.Mz+74,"px)"),children:(0,P.jsx)(S.Z,{columnFlex:[null,null,null,2,null,null,1,null,null,null],columns:[{label:function(){return""},uuid:"action"},{uuid:(0,te.kC)(E.r0.STATUS)},{uuid:"Name"},{uuid:"Description"},{uuid:(0,te.kC)(E.r0.TYPE)},{uuid:"Updated at"},{uuid:"Tags"},{uuid:"Blocks"},{uuid:"Triggers"},{center:!0,label:function(){return""},uuid:"Actions"}],isSelectedRow:function(e){var n;return(null===(n=U[e])||void 0===n?void 0:n.uuid)===(null===i||void 0===i?void 0:i.uuid)},onClickRow:function(e){return u((function(n){var t=U[e];return(null===n||void 0===n?void 0:n.uuid)!==(null===t||void 0===t?void 0:t.uuid)?t:null}))},onDoubleClickRow:function(n){e.push("/pipelines/[pipeline]/edit","/pipelines/".concat(U[n].uuid,"/edit"))},ref:n,renderRightClickMenuItems:function(n){var t=U[n];return[{label:function(){return"Edit description"},onClick:function(){return We({pipeline:t,pipelineDescription:null===t||void 0===t?void 0:t.description})},uuid:"edit_description"},{label:function(){return"Rename"},onClick:function(){return We({pipeline:t,pipelineName:null===t||void 0===t?void 0:t.name})},uuid:"rename"},{label:function(){return"Clone"},onClick:function(){return le({pipeline:{clone_pipeline_uuid:null===t||void 0===t?void 0:t.uuid}})},uuid:"clone"},{label:function(){return"Add/Remove tags"},onClick:function(){e.push("/pipelines/[pipeline]/settings","/pipelines/".concat(null===t||void 0===t?void 0:t.uuid,"/settings"))},uuid:"add_tags"},{label:function(){return"Create template"},onClick:function(){e.push("/templates?object_type=".concat(ye.R,"&new=1&pipeline_uuid=").concat(null===t||void 0===t?void 0:t.uuid))},uuid:"create_custom_template"},{label:function(){return"Delete"},onClick:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===t||void 0===t?void 0:t.uuid,"?"))&&Ne(null===t||void 0===t?void 0:t.uuid)},uuid:"delete"}]},rowGroupHeaders:dn,rows:U.map((function(n,t){var i=n.blocks,o=n.description,u=n.schedules,l=n.tags,c=n.type,s=n.updated_at,d=n.uuid,p=i.filter((function(e){var n=e.type;return be.tf.SCRATCHPAD!==n})).length,f=u.length,v=u.find((function(e){var n=e.status;return Ze.fq.ACTIVE===n})),m=(0,P.jsx)("div",{children:(0,P.jsx)(A.Z,{tags:null===l||void 0===l?void 0:l.map((function(e){return{uuid:e}}))})},"pipeline_tags_".concat(t));return[f>=1||k[d]?(0,P.jsx)(h.Z,{iconOnly:!0,loading:!!k[d],noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(e){(0,Se.j)(e),_((function(e){return Be(Be({},e),{},(0,r.Z)({},d,!0))})),pe(Be(Be({},n),{},{status:v?Ze.fq.INACTIVE:Ze.fq.ACTIVE}))},children:v?(0,P.jsx)(ee.dz,{muted:!0,size:2*Y.iI}):(0,P.jsx)(ee.Py,{default:!0,size:2*Y.iI})}):null,(0,P.jsx)(w.ZP,{default:!v,monospace:!0,success:!!v,children:v?Ze.fq.ACTIVE:f>=1?Ze.fq.INACTIVE:"no schedules"},"pipeline_status_".concat(t)),(0,P.jsx)(a(),{as:"/pipelines/".concat(d),href:"/pipelines/[pipeline]",passHref:!0,children:(0,P.jsx)(I.Z,{sameColorAsText:!0,children:d})},"pipeline_name_".concat(t)),(0,P.jsx)(w.ZP,{default:!0,title:o,width:90*Y.iI,children:o},"pipeline_description_".concat(t)),(0,P.jsx)(w.ZP,{children:E.G7[c]},"pipeline_type_".concat(t)),(0,P.jsx)(w.ZP,{monospace:!0,title:s,children:s?s.slice(0,-3):(0,P.jsx)(P.Fragment,{children:"\u2014"})},"pipeline_updated_at_".concat(t)),m,(0,P.jsx)(w.ZP,{default:0===p,monospace:!0,children:p},"pipeline_block_count_".concat(t)),(0,P.jsx)(w.ZP,{default:0===f,monospace:!0,children:f},"pipeline_trigger_count_".concat(t)),(0,P.jsxs)(b.Z,{flex:1,justifyContent:"flex-end",children:[(0,P.jsx)(h.Z,Be(Be({},Re),{},{onClick:function(){e.push("/pipelines/[pipeline]","/pipelines/".concat(d))},title:"Detail",children:(0,P.jsx)(ee.UY,{default:!0,size:2*Y.iI})})),(0,P.jsx)(Z.Z,{mr:1}),(0,P.jsx)(h.Z,Be(Be({},Re),{},{onClick:function(){e.push("/pipelines/[pipeline]/logs","/pipelines/".concat(d,"/logs"))},title:"Logs",children:(0,P.jsx)(ee.$B,{default:!0,size:2*Y.iI})}))]},"chevron_icon_".concat(t))]})),rowsGroupedByIndex:pn,stickyHeader:!0})})})}Ne.getInitialProps=(0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var Le=(0,_.Z)(Ne)},79274:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines",function(){return t(12257)}])}},function(e){e.O(0,[844,9902,426,1774,8792,8789,4259,9055,1424,1005,7815,3654,8952,7722,4822,1484,2485,9774,2888,179],(function(){return n=79274,e(e.s=n);var n}));var n=e.O();_N_E=n}]);