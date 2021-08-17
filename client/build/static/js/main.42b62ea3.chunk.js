(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(21),c=n.n(r),i=(n(76),n(77),n(18)),o=n(3),l=n(8),j=(n(35),n(6)),u=n(19),d=n.n(u),p=n(25),b=n(26),O=n.n(b),h="USER_SIGNIN_REQUEST",m="USER_SIGNIN_SUCCESS",x="USER_SIGNIN_FAIL",g="USER_SIGNOUT",f="USER_REGISTER_REQUEST",v="USER_REGISTER_SUCCESS",y="USER_REGISTER_FAIL",S=n(1);function N(){return Object(S.jsxs)("div",{className:"loading",children:[Object(S.jsx)("i",{className:"fa fa-spinner fa-spin"})," Loading..."]})}function _(e){return Object(S.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}var I=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],u=c[1],b=Object(j.c)((function(e){return e.userSignIn})),g=b.error,f=b.loading,v=Object(j.b)();return Object(S.jsxs)("div",{className:"signin",children:[Object(S.jsxs)("div",{className:"signin_portal",children:[Object(S.jsx)("img",{src:"/images/nppimage.jpg",alt:"Npp Logo"}),Object(S.jsx)("p",{children:"NPP Membership Portal"})]}),Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(s){var a,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s({type:h,payload:{email:e}}),n.prev=1,n.next=4,O.a.post("https://posts.icsms.net/api/crud/signin",{email:e,password:t});case 4:a=n.sent,(r=a.data).error?s({type:x,payload:r.error}):(s({type:m,payload:r}),localStorage.setItem("userInfo",JSON.stringify(r))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),s({type:x,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,o)),a(""),u("")},children:[Object(S.jsx)("h2",{children:"Sign In for Account"}),f&&Object(S.jsx)(N,{}),g&&Object(S.jsxs)(_,{variant:"danger",children:[" ",g]}),Object(S.jsx)("input",{type:"email",placeholder:"Email",required:!0,value:n,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)("input",{type:"password",placeholder:"Password",required:!0,value:o,onChange:function(e){return u(e.target.value)}}),Object(S.jsx)("button",{type:"submit",children:"Sign In"}),Object(S.jsxs)("div",{className:"signin_link",children:["Don't have an account? ",Object(S.jsx)(i.b,{to:"/signup",children:"Sign up"})]})]})]})};var E=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)("123456789"),c=Object(l.a)(r,2),o=c[0],u=c[1],b=Object(s.useState)(""),h=Object(l.a)(b,2),x=h[0],g=h[1],I=Object(s.useState)(""),E=Object(l.a)(I,2),w=E[0],C=E[1],k=Object(s.useState)("Madina"),R=Object(l.a)(k,2),T=R[0],L=R[1],P=Object(s.useState)(""),U=Object(l.a)(P,2),A=U[0],M=U[1],D=Object(s.useState)(""),q=Object(l.a)(D,2),F=q[0],J=q[1],G=Object(j.c)((function(e){return e.userSignIn})),B=G.error,Q=G.loading,K=Object(j.b)();return Object(S.jsxs)("div",{className:"signin",children:[Object(S.jsxs)("div",{className:"signin_portal",children:[Object(S.jsx)("img",{src:"/images/nppimage.jpg",alt:"Npp Logo"}),Object(S.jsx)("p",{children:"NPP Membership Portal"})]}),Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A!==F?alert("Password and confirm password does not match"):K(function(e,t,n,s,a){return function(){var r=Object(p.a)(d.a.mark((function r(c){var i,o;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:f,payload:{fullName:e,membershipID:t,email:n,phone:s,password:a}}),r.prev=1,r.next=4,O.a.post("https://posts.icsms.net/api/crud/signup",{fullName:e,membershipID:t,email:n,phone:s,password:a});case 4:i=r.sent,(o=i.data).error?c({type:y,payload:o}):(c({type:v,payload:o}),c({type:m,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o))),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),c({type:y,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(n,o,x,w,A)),u(""),g(""),C(""),L(""),M(""),J("")},children:[Object(S.jsx)("h2",{children:"Register Account"}),Q&&Object(S.jsx)(N,{}),B&&Object(S.jsxs)(_,{variant:"danger",children:[" ",B]}),Object(S.jsx)("input",{type:"text",placeholder:"Enter your Fullname",value:n,onChange:function(e){return a(e.target.value)},required:!0}),Object(S.jsx)("input",{type:"hidden",placeholder:"Enter your Membership ID",value:o,onChange:function(e){return u(e.target.value)},required:!0}),Object(S.jsx)("input",{type:"text",placeholder:"Enter your Email Address",value:x,onChange:function(e){return g(e.target.value)},required:!0}),Object(S.jsx)("input",{type:"text",placeholder:"Enter your Mobile number",value:w,onChange:function(e){return C(e.target.value)},required:!0}),Object(S.jsx)("input",{type:"hidden",placeholder:"Enter your constituency",value:T,onChange:function(e){return L(e.target.value)},required:!0}),Object(S.jsx)("input",{type:"password",placeholder:"Enter password",value:A,onChange:function(e){return M(e.target.value)},required:!0}),Object(S.jsx)("input",{type:"password",placeholder:"Confirm password",value:F,onChange:function(e){return J(e.target.value)},required:!0}),Object(S.jsx)("button",{type:"submit",children:"Register"}),Object(S.jsxs)("div",{className:"signin_link",children:["Already have an account? "," "," ",Object(S.jsx)(i.b,{to:"/signin",children:"Sign In"})]})]})]})},w=(n(107),n(129));function C(){var e=Object(j.c)((function(e){return e.userSignIn})).userInfo;console.log(e);var t=function(e){return Object(S.jsxs)("div",{className:"sidebar_recentItem",children:[Object(S.jsx)("span",{className:"sidebar_hash",children:"#"}),Object(S.jsx)("p",{children:e})]})};return Object(S.jsxs)("div",{className:"sidebar",children:[Object(S.jsxs)("div",{className:"sidebar_top",children:[Object(S.jsx)("img",{src:"/images/sidebarimage.jpeg",alt:""}),Object(S.jsx)(w.a,{className:"sidebar_avatar",children:null===e||void 0===e?void 0:e.fullName[0]}),Object(S.jsxs)("h2",{children:[" ",e.fullName]}),Object(S.jsxs)("h4",{children:[e.constituency," Constituency"]})]}),Object(S.jsx)("div",{className:"sidebar_stats",children:Object(S.jsxs)("div",{className:"sidebar_stat",children:[Object(S.jsx)("p",{children:"Joined Date"}),Object(S.jsx)("p",{className:"sidebar_statNumber",children:"18th Aug 1990"})]})}),Object(S.jsxs)("div",{className:"sidebar_bottom",children:[Object(S.jsx)("p",{children:"Interest"}),t("activist"),t("compagning"),t("volunteering")]})]})}n(108);var k=n(57),R=n.n(k),T=n(56),L=n.n(T);function P(){var e=function(e,t){return Object(S.jsxs)("div",{className:"widgets_article",children:[Object(S.jsx)("div",{className:"widgets_articleLeft",children:Object(S.jsx)(L.a,{})}),Object(S.jsxs)("div",{className:"widgets_articleRight",children:[Object(S.jsx)("h4",{children:e}),Object(S.jsx)("p",{children:t})]})]})};return Object(S.jsxs)("div",{className:"widgets",children:[Object(S.jsxs)("div",{className:"widgets_header",children:[Object(S.jsx)("h2",{children:"Npp News"}),Object(S.jsx)(R.a,{})]}),e("This side could be new articles for the party","like npp news with links"),e("Or a place for Ads","You deside and let me know")]})}n(110);var U=n(40),A="POSTS_LIST_REQUEST",M="POSTS_LIST_SUCCESS",D="POSTS_LIST_FAIL",q="MAKE_POSTS_REQUEST",F="MAKE_POSTS_SUCCESS",J="MAKE_POSTS_FAIL",G=n(60),B=n.n(G),Q=n(61),K=n.n(Q);n(111);function z(e){var t=e.Icon,n=e.title,s=e.color,a=e.number;return Object(S.jsxs)("div",{className:"inputOption",children:[Object(S.jsx)(t,{style:{color:s}}),Object(S.jsxs)("h4",{children:[n," :"]}),Object(S.jsx)("div",{className:"number",children:a})]})}var V=n(62),X=n.n(V),H=n(63),W=n.n(H),Y=n(64),Z=n.n(Y),$=(n(112),n(58)),ee=n.n($),te=n(59),ne=n.n(te),se=Object(s.forwardRef)((function(e,t){var n=e.poster_name,s=e.constituency,a=e.message,r=e.numberOfLikes,c=e.numberOfComments;return Object(S.jsxs)("div",{ref:t,className:"post",children:[Object(S.jsxs)("div",{className:"post_header",children:[Object(S.jsx)(w.a,{children:n[0]}),Object(S.jsxs)("div",{className:"post_info ",children:[Object(S.jsx)("h2",{children:n}),Object(S.jsxs)("p",{children:[s," Constituency"]})]})]}),Object(S.jsx)("div",{className:"post_body",children:Object(S.jsx)("p",{children:a})}),Object(S.jsxs)("div",{className:"post_buttons",children:[Object(S.jsx)(z,{Icon:ee.a,number:r,title:"Likes",color:"grey"}),Object(S.jsx)(z,{Icon:ne.a,number:c,title:"Comments",color:"grey"})]})]})})),ae=n(65);function re(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(j.b)(),c=Object(j.c)((function(e){return e.userSignIn})).userInfo,i=Object(j.c)((function(e){return e.postedMessages})).posts;i.sort((function(e,t){return t.timestamp-e.timestamp})),Object(s.useEffect)((function(){r(function(){var e=Object(p.a)(d.a.mark((function e(t,n){var s,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:A,payload:{}}),s=n(),a=s.userSignIn.userInfo,e.prev=2,e.next=5,O.a.get("https://posts.icsms.net/api/crud/posts",{headers:{Authorization:"Bearer ".concat(a.token)}});case 5:r=e.sent,(c=r.data).error?t({type:D,payload:c}):t({type:M,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:D,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())}),[r]);return Object(S.jsxs)("div",{className:"feed",children:[Object(S.jsxs)("div",{className:"feed_inputContainer",children:[Object(S.jsxs)("div",{className:"feed_input",children:[Object(S.jsx)(B.a,{}),Object(S.jsxs)("form",{children:[Object(S.jsx)("input",{type:"text",placeholder:"Post something for others to see",value:n,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)("button",{onClick:function(e){var t=c.fullName,s=n;e.preventDefault(),r(function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(s,a){var r,c,i,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s({type:q,payload:{}}),r=a(),c=r.userSignIn.userInfo,n.prev=2,n.next=5,O.a.post("posts.icsms.net/api/crud/posts",{poster_name:e,message:t},{headers:{Authorization:"Bearer ".concat(c.token)}});case 5:i=n.sent,(o=i.data).error?s({type:J,payload:o}):s({type:F,payload:Object(U.a)(Object(U.a)({},o),{},{timestamp:(new Date).getTime()})}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),s({type:J,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,t){return n.apply(this,arguments)}}()}(t,s)),a("")},type:"submit",children:"Send"})]})]}),Object(S.jsxs)("div",{className:"feed_inputOptions",children:[Object(S.jsx)(z,{Icon:K.a,title:"Photo",color:"#7085f9"}),Object(S.jsx)(z,{Icon:X.a,title:"View",color:"#E7A33E"}),Object(S.jsx)(z,{Icon:W.a,title:"Event",color:"#C0CBCD"}),Object(S.jsx)(z,{Icon:Z.a,title:"Write article",color:"#77C15E"})]})]}),Object(S.jsx)(ae.a,{children:i?i.map((function(e){return Object(S.jsx)(se,{poster_name:e.poster_name,constituency:e.constituency,message:e.message,numberOfLikes:e.numberOfLikes,numberOfComments:e.numberOfComments},e.post_id)})):Object(S.jsx)("div",{})})]})}var ce=function(){return Object(S.jsxs)("div",{className:"app_body",children:[Object(S.jsx)(C,{}),Object(S.jsx)(re,{}),Object(S.jsx)(P,{})]})};var ie=function(){return Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"members"})})};var oe=function(){return Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"Jobs"})})};n(113),n(114);function le(e){var t=e.logout,n=e.Icon,s=e.title,a=e.onClick;return Object(S.jsxs)("div",{onClick:a,className:"headerOption",children:[n&&Object(S.jsx)(n,{className:"headerOption_icon"}),t&&Object(S.jsx)(w.a,{className:"headerOption__icon",src:""}),Object(S.jsx)("h3",{className:"headerOption_title",children:s})]})}var je=n(67),ue=n.n(je),de=n(69),pe=n.n(de),be=n(68),Oe=n.n(be),he=n(66),me=n.n(he);var xe=function(){var e=Object(j.b)();return Object(S.jsxs)("div",{className:"header",children:[Object(S.jsxs)("div",{className:"header_left",children:[Object(S.jsx)("img",{src:"/images/nppimage.jpg",alt:"npp logo"}),Object(S.jsxs)("div",{className:"header_search",children:[Object(S.jsx)(me.a,{}),Object(S.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(S.jsxs)("div",{className:"header_right",children:[Object(S.jsx)(i.b,{to:"/",children:Object(S.jsx)(le,{Icon:ue.a,title:"Home"})}),Object(S.jsxs)(i.b,{to:"/jobs",children:[" ",Object(S.jsx)(le,{Icon:Oe.a,title:"Jobs"})]}),Object(S.jsx)(i.b,{to:"/members",children:Object(S.jsx)(le,{Icon:pe.a,title:"Members"})}),Object(S.jsx)(le,{onClick:function(){e((function(e){localStorage.removeItem("userInfo"),e({type:g})}))},title:"Logout",logout:!0})]})]})};var ge=function(){var e=Object(j.c)((function(e){return e.userSignIn})).userInfo;return Object(S.jsx)(i.a,{children:Object(S.jsx)("div",{className:"app",children:e?Object(S.jsxs)("div",{children:[Object(S.jsx)(xe,{}),Object(S.jsxs)("main",{children:[Object(S.jsx)(o.a,{path:"/members",component:ie}),Object(S.jsx)(o.a,{path:"/jobs",component:oe}),Object(S.jsx)(o.a,{path:"/signin",component:ce,exact:!0}),Object(S.jsx)(o.a,{path:"/",component:ce,exact:!0})]})]}):Object(S.jsxs)("div",{className:"app_signinscreen ",children:[Object(S.jsx)(o.a,{path:"/signup",component:E}),Object(S.jsx)(o.a,{path:"/signin",component:I}),Object(S.jsx)(o.a,{path:"/",component:I,exact:!0})]})})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))},ve=n(24),ye=n(70),Se=n(17),Ne={userSignIn:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null},postedMessages:{posts:[]}},_e=Object(ve.c)({userSignIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case m:return{loading:!1,userInfo:t.payload};case x:return{loading:!1,error:t.payload};case g:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case v:return{loading:!1,userInfo:t.payload};case y:return{loading:!1,error:t.payload};default:return e}},postedMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{posts:Object(Se.a)(e.posts)};case F:return{loading:!1,posts:[].concat(Object(Se.a)(e.posts),[t.payload])};case J:return{loading:!1,posts:Object(Se.a)(e.posts),error:t.payload};case A:return{loading:!0,posts:Object(Se.a)(e.posts)};case M:return{loading:!1,posts:Object(Se.a)(t.payload)};case D:return{loading:!1,error:t.payload,posts:Object(Se.a)(e.posts)};default:return e}}}),Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Ee=Object(ve.e)(_e,Ne,Ie(Object(ve.a)(ye.a)));c.a.render(Object(S.jsx)(j.a,{store:Ee,children:Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(ge,{})})}),document.getElementById("root")),fe()},35:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.42b62ea3.chunk.js.map