"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3958],{37361:function(e,n,r){r.d(n,{X:function(){return k}});var i=r(21831),l=r(75582),t=r(82394),o=r(21764),s=r(82684),d=r(69864),a=r(34376),c=r(71180),u=r(70652),f=r(15338),E=r(97618),v=r(55485),p=r(85854),j=r(65956),I=r(28274),Z=r(38276),m=r(75499),h=r(30160),x=r(17488),g=r(35686),A=r(8193),_=r(72473),L=r(70515),S=r(24755),D=r(3917),R=r(76417),P=r(36717),T=r(50178),b=r(86735),O=r(42122),C=r(72619),w=r(95924),B=r(28598);function y(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function N(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var k,W=2*L.iI;!function(e){e.PERMISSIONS="Permissions",e.ROLES="Roles"}(k||(k={})),n.Z=function(e){var n,r,t,y=e.contained,M=e.disableFields,U=e.onCancel,H=e.slug,Y=(0,T.PR)()||{},z=Y.id,Q=Y.owner,V=(0,a.useRouter)(),q=(0,s.useState)(!0),F=q[0],G=q[1],K=(0,s.useState)(null),$=K[0],X=K[1],J=(0,s.useState)({}),ee=J[0],ne=J[1],re=(0,s.useState)(null),ie=re[0],le=re[1],te=(0,s.useCallback)((function(e,n,r){le(N(N({},e),{},{rolesMapping:(0,b.HK)(n||[],(function(e){return e.id})),permissionsMapping:(0,b.HK)(r||[],(function(e){return e.id}))}))}),[le]),oe=(0,s.useCallback)((function(e){ne((function(n){return N(N({},n),e)})),le((function(n){return N(N({},n),e)}))}),[ne,le]),se=g.ZP.users.detail(H,{},{revalidateOnFocus:!1}).data,de=(0,s.useMemo)((function(){return null===se||void 0===se?void 0:se.user}),[se]);(0,s.useEffect)((function(){de&&te(de,null===de||void 0===de?void 0:de.roles_new,null===de||void 0===de?void 0:de.permissions)}),[te,de]);var ae=(0,d.Db)(de?g.ZP.users.useUpdate(H):g.ZP.users.useCreate(),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(e){var n=e.user;ne({}),te(n,null===n||void 0===n?void 0:n.roles_new,null===n||void 0===n?void 0:n.permissions),de||V.push("/settings/workspace/users/".concat(null===n||void 0===n?void 0:n.id)),String(null===n||void 0===n?void 0:n.id)===String(z)&&(0,T.av)(N(N({},(0,T.PR)()),{},{avatar:null===n||void 0===n?void 0:n.avatar,first_name:null===n||void 0===n?void 0:n.first_name,last_name:null===n||void 0===n?void 0:n.last_name,username:null===n||void 0===n?void 0:n.username})),o.Am.success(de?"User profile successfully updated.":"New user created successfully.",{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,t=n.type;o.Am.error((null===r||void 0===r?void 0:r.error)||i||l,{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:t})}})}}),ce=(0,l.Z)(ae,2),ue=ce[0],fe=ce[1].isLoading,Ee=(0,d.Db)(g.ZP.users.useDelete(null===de||void 0===de?void 0:de.id),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(){V.push("/settings/workspace/users"),o.Am.success("User successfully delete.",{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:"user-delete-success-".concat(null===de||void 0===de?void 0:de.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,t=n.type;o.Am.error((null===r||void 0===r?void 0:r.error)||i||l,{position:o.Am.POSITION.BOTTOM_RIGHT,toastId:t})}})}}),ve=(0,l.Z)(Ee,2),pe=ve[0],je=ve[1].isLoading,Ie=g.ZP.roles.list().data,Ze=(0,s.useMemo)((function(){return(0,b.YC)((null===Ie||void 0===Ie?void 0:Ie.roles)||[],"name")}),[Ie]),me=(0,s.useMemo)((function(){return(null===ie||void 0===ie?void 0:ie.rolesMapping)||{}}),[ie]),he=(0,s.useMemo)((function(){return(0,b.YC)(Object.values(me),"name")}),[me]),xe=g.ZP.permissions.list({_limit:1e3}).data,ge=((0,s.useMemo)((function(){return(0,b.YC)((null===xe||void 0===xe?void 0:xe.permissions)||[],"entity_name")}),[xe]),(0,s.useMemo)((function(){return(null===ie||void 0===ie?void 0:ie.permissionsMapping)||{}}),[ie])),Ae=(0,s.useMemo)((function(){return(0,b.YC)(Object.values(ge),"entity_name")}),[ge]),_e=(0,s.useMemo)((function(){return(null===he||void 0===he?void 0:he.length)>=1}),[he]),Le=(0,s.useMemo)((function(){return(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(_.Add,{}),compact:!0,onClick:function(){X(k.ROLES),G(!1)},primary:!_e,secondary:_e,small:!0,children:"Add roles"})}),[_e,X,G]),Se=(0,s.useMemo)((function(){return(null===Ae||void 0===Ae?void 0:Ae.length)>=1}),[Ae]),De=((0,s.useMemo)((function(){return(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(_.Add,{}),compact:!0,onClick:function(){X(k.PERMISSIONS),G(!1)},primary:!Se,secondary:Se,small:!0,children:"Add permission"})}),[Se,X,G]),(0,s.useCallback)((function(e,n,r){return(0,B.jsx)(m.Z,{columnFlex:[].concat((0,i.Z)(r?[]:[null]),[1]),columns:[].concat((0,i.Z)(r?[]:[{label:function(){var n=null===e||void 0===e?void 0:e.every((function(e){var n=e.id;return null===me||void 0===me?void 0:me[n]}));return(0,B.jsx)(u.Z,{checked:n,onClick:function(r){(0,w.j)(r),oe(n?{rolesMapping:{}}:{rolesMapping:(0,b.HK)(e,(function(e){return e.id}))})}},"checkbox")},uuid:"actions"}]),[{uuid:"Role"}]),onClickRow:n&&!r?function(n){var r=e[n];r&&window.open("/settings/workspace/roles/".concat(null===r||void 0===r?void 0:r.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.name,l=e.id,t=!(null===me||void 0===me||!me[l]);return[].concat((0,i.Z)(r?[]:[(0,B.jsx)(u.Z,{checked:t,onClick:function(n){(0,w.j)(n);var r=N({},me);t?null===r||void 0===r||delete r[l]:r[l]=e,oe({rolesMapping:r})}},"checkbox")]),[(0,B.jsx)(h.ZP,{monospace:!0,children:n},"name")])})),uuid:"roles"})}),[me,oe])),Re=(0,s.useCallback)((function(e,n,r){return(0,B.jsx)(m.Z,{columnFlex:[null,2,1,1,6],columns:[{uuid:"ID"},{uuid:"Entity"},{uuid:"Subtype"},{uuid:"Entity ID"},{rightAligned:!0,uuid:"Access"}],onClickRow:n&&!r?function(n){var r=e[n];r&&window.open("/settings/workspace/permissions/".concat(null===r||void 0===r?void 0:r.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.access,r=e.entity,i=e.entity_id,l=e.entity_name,t=e.entity_type,o=e.id,s=n?(0,P.q)(n):[],d=(null===s||void 0===s?void 0:s.length)||0;return[(0,B.jsx)(h.ZP,{default:!0,monospace:!0,children:o},"id"),(0,B.jsx)(h.ZP,{monospace:!0,children:l||r},"entityName"),(0,B.jsx)(h.ZP,{default:!0,monospace:!!t,children:t||"-"},"entityType"),(0,B.jsx)(h.ZP,{default:!0,monospace:!!i,children:i||"-"},"entityID"),(0,B.jsx)("div",{children:d>=1&&(0,B.jsx)(v.ZP,{alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end",children:null===s||void 0===s?void 0:s.map((function(e,n){return(0,B.jsx)("div",{children:(0,B.jsxs)(h.ZP,{default:!0,monospace:!0,small:!0,children:[e,d>=2&&n<d-1&&(0,B.jsx)(h.ZP,{inline:!0,muted:!0,small:!0,children:",\xa0"})]})},e)}))})},"access")]})),uuid:"permissions"})}),[]),Pe=(0,s.useMemo)((function(){return De(Ze)}),[De,Ze]),Te=(0,s.useMemo)((function(){var e;return De(he,!0,null===(e=M||[])||void 0===e?void 0:e.includes(k.ROLES))}),[De,M,he]),be=(0,s.useMemo)((function(){var e;return Re(Ae,!0,null===(e=M||[])||void 0===e?void 0:e.includes(k.PERMISSIONS))}),[Re,M,Ae]),Oe=(0,B.jsxs)(A.N,{children:[(0,B.jsxs)(j.Z,{noPadding:!0,children:[(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsx)(p.Z,{level:4,children:"Profile"})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsx)(h.ZP,{default:!0,large:!0,children:"Avatar"}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({avatar:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"Add initials or an emoji",value:(null===ie||void 0===ie?void 0:ie.avatar)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsxs)(h.ZP,{danger:"username"in ee&&!(null!==ie&&void 0!==ie&&ie.username),default:!0,large:!0,children:["Username ","username"in ee&&!(null!==ie&&void 0!==ie&&ie.username)&&(0,B.jsx)(h.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({username:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Mage Supreme",value:(null===ie||void 0===ie?void 0:ie.username)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsx)(h.ZP,{default:!0,large:!0,children:"First name"}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({first_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Urza",value:(null===ie||void 0===ie?void 0:ie.first_name)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsx)(h.ZP,{default:!0,large:!0,children:"Last name"}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({last_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Andromeda",value:(null===ie||void 0===ie?void 0:ie.last_name)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[de&&(0,B.jsx)(h.ZP,{default:!0,large:!0,children:"Email"}),!de&&(0,B.jsxs)(h.ZP,{danger:"email"in ee&&!(null!==ie&&void 0!==ie&&ie.email),default:!0,large:!0,children:["Email ","email"in ee&&!(null!==ie&&void 0!==ie&&ie.email)&&(0,B.jsx)(h.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(Z.Z,{mr:L.cd}),de&&(0,B.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(h.ZP,{large:!0,muted:!0,children:null===ie||void 0===ie?void 0:ie.email}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(_.Alphabet,{muted:!0,size:W}),(0,B.jsx)(Z.Z,{mr:1})]}),!de&&(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Alphabet,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({email:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. mage@power.com",type:"email",value:(null===ie||void 0===ie?void 0:ie.email)||""})})]})})]}),(0,B.jsx)(Z.Z,{mb:L.HN}),(0,B.jsxs)(j.Z,{noPadding:!0,children:[(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsx)(p.Z,{level:4,children:"Authentication"})}),(0,B.jsx)(f.Z,{light:!0}),de&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsxs)(h.ZP,{danger:"password_current"in ee&&!(null!==ie&&void 0!==ie&&ie.password_current),default:!0,large:!0,children:["Current password ","password_current"in ee&&!(null!==ie&&void 0!==ie&&ie.password_current)&&(0,B.jsx)(h.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({password_current:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===ie||void 0===ie?void 0:ie.password_current)||""})})]})}),(0,B.jsx)(f.Z,{light:!0})]}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsxs)(h.ZP,{danger:"password"in ee&&!(null!==ie&&void 0!==ie&&ie.password),default:!0,large:!0,children:[de?"New password":"Password"," ","password"in ee&&!(null!==ie&&void 0!==ie&&ie.password)&&(0,B.jsx)(h.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({password:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===ie||void 0===ie?void 0:ie.password)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsxs)(h.ZP,{danger:"password_confirmation"in ee&&!(null!==ie&&void 0!==ie&&ie.password_confirmation),default:!0,large:!0,children:["Confirm ",de?"new password":"password"," ","password_confirmation"in ee&&!(null!==ie&&void 0!==ie&&ie.password_confirmation)&&(0,B.jsx)(h.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(x.Z,{afterIcon:(0,B.jsx)(_.Edit,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return oe({password_confirmation:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===ie||void 0===ie?void 0:ie.password_confirmation)||""})})]})})]}),(0,B.jsx)(Z.Z,{mb:L.HN}),de&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(j.Z,{noPadding:!0,children:[(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(p.Z,{level:4,children:"Roles"}),(0,B.jsx)(Z.Z,{mr:L.cd}),_e&&!(null!==(n=M||[])&&void 0!==n&&n.includes(k.ROLES))&&(0,B.jsx)(v.ZP,{alignItems:"center",children:Le})]})}),(0,B.jsx)(f.Z,{light:!0}),!_e&&!(null!==(r=M||[])&&void 0!==r&&r.includes(k.ROLES))&&(0,B.jsxs)(Z.Z,{p:L.cd,children:[(0,B.jsx)(Z.Z,{mb:L.cd,children:(0,B.jsx)(h.ZP,{default:!0,children:"This user currently has no roles attached."})}),(0,B.jsx)(v.ZP,{alignItems:"center",children:Le})]}),_e&&(0,B.jsx)(Z.Z,{pb:L.Mq,children:Te})]}),(0,B.jsx)(Z.Z,{mb:L.HN}),(0,B.jsxs)(j.Z,{noPadding:!0,children:[(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsx)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,B.jsx)(p.Z,{level:4,children:"Permissions"})})}),(0,B.jsx)(f.Z,{light:!0}),!Se&&(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsx)(h.ZP,{default:!0,children:"This user currently has no permissions."})}),Se&&(0,B.jsx)(Z.Z,{pb:L.Mq,children:be})]}),(0,B.jsx)(Z.Z,{mb:L.HN}),(0,B.jsxs)(j.Z,{noPadding:!0,children:[(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsx)(p.Z,{level:4,children:"Metadata"})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsx)(h.ZP,{default:!0,large:!0,children:"Last updated"}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(h.ZP,{large:!0,monospace:!0,muted:!0,children:(null===ie||void 0===ie?void 0:ie.updated_at)&&(0,D.d$)(null===ie||void 0===ie?void 0:ie.updated_at,{includeSeconds:!0})}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(_.Schedule,{muted:!0,size:W}),(0,B.jsx)(Z.Z,{mr:1})]})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(Z.Z,{p:L.cd,children:(0,B.jsxs)(v.ZP,{alignItems:"center",children:[(0,B.jsx)(h.ZP,{default:!0,large:!0,children:"Created at"}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(h.ZP,{large:!0,monospace:!0,muted:!0,children:(null===ie||void 0===ie?void 0:ie.created_at)&&(0,D.d$)(null===ie||void 0===ie?void 0:ie.created_at,{includeSeconds:!0})}),(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(_.Schedule,{muted:!0,size:W}),(0,B.jsx)(Z.Z,{mr:1})]})]})})]}),(0,B.jsx)(Z.Z,{mb:L.HN})]}),(0,B.jsxs)(v.ZP,{children:[(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(_.Save,{}),disabled:!ee||!(null!==(t=Object.keys(ee))&&void 0!==t&&t.length),loading:fe,onClick:function(){return ue({user:N(N({},(0,O.GL)(ie,["avatar","first_name","last_name","password","password_confirmation","password_current","username"].concat(de?[]:"email"),{include_blanks:!0})),null!==M&&void 0!==M&&M.includes(k.ROLES)?{}:{role_ids:Object.keys((null===ie||void 0===ie?void 0:ie.rolesMapping)||{}).map((function(e){return Number(e)}))})})},primary:!0,children:de?"Save changes":"Create new user"}),U&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(c.ZP,{onClick:function(){return null===U||void 0===U?void 0:U()},secondary:!0,children:"Cancel and go back"})]}),de&&String(z)!==String(H)&&Q&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Z.Z,{mr:L.cd}),(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(_.Trash,{}),danger:!0,loading:je,onClick:function(){return pe()},children:"Delete user"})]})]})]});return y?Oe:(0,B.jsx)(I.Z,{after:Pe,afterHeader:(0,B.jsx)(Z.Z,{px:L.cd,children:(0,B.jsx)(h.ZP,{bold:!0,children:$})}),afterHidden:F,afterWidth:60*L.iI,appendBreadcrumbs:!0,breadcrumbs:[{label:function(){return"Users"},linkProps:{href:"/settings/workspace/users"}},{bold:!0,label:function(){return(0,R.s)(ie)}}],setAfterHidden:G,title:de?(0,R.s)(de):"New user",uuidItemSelected:S.B2.USERS,uuidWorkspaceSelected:S.Pl.USER_MANAGEMENT,children:de&&Oe})}},36288:function(e,n,r){r.d(n,{Fy:function(){return v},G9:function(){return c},H1:function(){return p},K4:function(){return d},ND:function(){return a},Pt:function(){return u},WG:function(){return t},hl:function(){return E},m_:function(){return o},oO:function(){return f}});var i,l,t,o,s=r(82394);!function(e){e[e.OWNER=1]="OWNER",e[e.ADMIN=2]="ADMIN",e[e.EDITOR=4]="EDITOR",e[e.VIEWER=8]="VIEWER",e[e.LIST=16]="LIST",e[e.DETAIL=32]="DETAIL",e[e.CREATE=64]="CREATE",e[e.UPDATE=128]="UPDATE",e[e.DELETE=512]="DELETE",e[e.OPERATION_ALL=1024]="OPERATION_ALL",e[e.QUERY=2048]="QUERY",e[e.QUERY_ALL=4096]="QUERY_ALL",e[e.READ=8192]="READ",e[e.READ_ALL=16384]="READ_ALL",e[e.WRITE=32768]="WRITE",e[e.WRITE_ALL=65536]="WRITE_ALL",e[e.ALL=131072]="ALL",e[e.DISABLE_LIST=262144]="DISABLE_LIST",e[e.DISABLE_DETAIL=524288]="DISABLE_DETAIL",e[e.DISABLE_CREATE=1048576]="DISABLE_CREATE",e[e.DISABLE_UPDATE=2097152]="DISABLE_UPDATE",e[e.DISABLE_DELETE=4194304]="DISABLE_DELETE",e[e.DISABLE_OPERATION_ALL=8388608]="DISABLE_OPERATION_ALL",e[e.DISABLE_QUERY=16777216]="DISABLE_QUERY",e[e.DISABLE_QUERY_ALL=33554432]="DISABLE_QUERY_ALL",e[e.DISABLE_READ=67108864]="DISABLE_READ",e[e.DISABLE_READ_ALL=134217728]="DISABLE_READ_ALL",e[e.DISABLE_WRITE=268435456]="DISABLE_WRITE",e[e.DISABLE_WRITE_ALL=536870912]="DISABLE_WRITE_ALL",e[e.DISABLE_UNLESS_CONDITIONS=1073741824]="DISABLE_UNLESS_CONDITIONS"}(t||(t={})),function(e){e.HAS_NOTEBOOK_EDIT_ACCESS="HAS_NOTEBOOK_EDIT_ACCESS",e.HAS_PIPELINE_EDIT_ACCESS="HAS_PIPELINE_EDIT_ACCESS",e.USER_OWNS_ENTITY="USER_OWNS_ENTITY"}(o||(o={}));var d=(i={},(0,s.Z)(i,t.OWNER,"Owner"),(0,s.Z)(i,t.ADMIN,"Admin"),(0,s.Z)(i,t.EDITOR,"Editor"),(0,s.Z)(i,t.VIEWER,"Viewer"),(0,s.Z)(i,t.LIST,"List"),(0,s.Z)(i,t.DETAIL,"Detail"),(0,s.Z)(i,t.CREATE,"Create"),(0,s.Z)(i,t.UPDATE,"Update"),(0,s.Z)(i,t.DELETE,"Delete"),(0,s.Z)(i,t.OPERATION_ALL,"All operations"),(0,s.Z)(i,t.QUERY,"Query"),(0,s.Z)(i,t.QUERY_ALL,"Query all attributes"),(0,s.Z)(i,t.READ,"Read"),(0,s.Z)(i,t.READ_ALL,"Read all attributes"),(0,s.Z)(i,t.WRITE,"Write"),(0,s.Z)(i,t.WRITE_ALL,"Write all attributes"),(0,s.Z)(i,t.ALL,"All"),(0,s.Z)(i,t.DISABLE_LIST,"Disable list"),(0,s.Z)(i,t.DISABLE_DETAIL,"Disable detail"),(0,s.Z)(i,t.DISABLE_CREATE,"Disable create"),(0,s.Z)(i,t.DISABLE_UPDATE,"Disable update"),(0,s.Z)(i,t.DISABLE_DELETE,"Disable delete"),(0,s.Z)(i,t.DISABLE_OPERATION_ALL,"Disable all operations"),(0,s.Z)(i,t.DISABLE_QUERY,"Disable query"),(0,s.Z)(i,t.DISABLE_QUERY_ALL,"Disable all query parameters"),(0,s.Z)(i,t.DISABLE_READ,"Disable read"),(0,s.Z)(i,t.DISABLE_READ_ALL,"Disable all read attributes"),(0,s.Z)(i,t.DISABLE_WRITE,"Disable write"),(0,s.Z)(i,t.DISABLE_WRITE_ALL,"Disable all write attributes"),i),a=(l={},(0,s.Z)(l,o.HAS_NOTEBOOK_EDIT_ACCESS,"Disable unless user has notebook edit access"),(0,s.Z)(l,o.HAS_PIPELINE_EDIT_ACCESS,"Disable unless user has pipeline edit access"),(0,s.Z)(l,o.USER_OWNS_ENTITY,"Disable unless user owns the current entity"),l),c=[t.OWNER,t.ADMIN,t.EDITOR,t.VIEWER,t.ALL],u=[t.LIST,t.DETAIL,t.CREATE,t.UPDATE,t.DELETE,t.OPERATION_ALL],f=[t.DISABLE_LIST,t.DISABLE_DETAIL,t.DISABLE_CREATE,t.DISABLE_UPDATE,t.DISABLE_DELETE,t.DISABLE_OPERATION_ALL],E=[t.QUERY,t.QUERY_ALL,t.DISABLE_QUERY,t.DISABLE_QUERY_ALL],v=[t.READ,t.READ_ALL,t.DISABLE_READ,t.DISABLE_READ_ALL],p=[t.WRITE,t.WRITE_ALL,t.DISABLE_WRITE,t.DISABLE_WRITE_ALL]},36717:function(e,n,r){r.d(n,{q:function(){return t}});var i=r(75582),l=r(36288);function t(e){return Object.entries(l.K4).reduce((function(n,r){var l=(0,i.Z)(r,2),t=l[0],o=l[1];return e&Number(t)?n.concat(o):n}),[])}},76417:function(e,n,r){function i(e){return null!==e&&void 0!==e&&e.first_name?[null===e||void 0===e?void 0:e.first_name,null===e||void 0===e?void 0:e.last_name].filter((function(e){return e})).join(" "):null===e||void 0===e?void 0:e.username}r.d(n,{s:function(){return i}})},80022:function(e,n,r){function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(n,{Z:function(){return i}})},15544:function(e,n,r){function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}r.d(n,{Z:function(){return i}})},13692:function(e,n,r){r.d(n,{Z:function(){return l}});var i=r(61049);function l(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,i.Z)(e,n)}},93189:function(e,n,r){r.d(n,{Z:function(){return t}});var i=r(12539),l=r(80022);function t(e,n){if(n&&("object"===i(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}}}]);