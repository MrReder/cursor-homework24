(this.webpackJsonphomework24=this.webpackJsonphomework24||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(16),r=a.n(s),o=(a(39),a(4)),i=(a(40),a(3)),u=a(12),j=a(1),l=[{to:"/cursor-homework24/",label:"Home"},{to:"/cursor-homework24/users",label:"Users"},{to:"/cursor-homework24/add-user",label:"Add User"}],b=function(){return Object(j.jsx)("nav",{className:"navigation",children:Object(j.jsx)("div",{className:"navigation",children:l.map((function(e){return Object(j.jsx)("p",{className:"navigation-item",children:Object(j.jsx)(u.b,{to:e.to,children:e.label})},e.to)}))})})},d=function(){return Object(j.jsxs)("div",{className:"home-page-wrapper",children:[Object(j.jsx)("h1",{children:"Welocme to our Home Page!"}),Object(j.jsx)("img",{src:"https://i.pinimg.com/originals/58/97/88/589788fc24a5b5f7469d81bbc3879bd4.jpg"})]})},m=a(11),p=function(e){var t=e.name,a=e.username,c=e.avatar;return Object(j.jsxs)("section",{className:"page-style",children:[Object(j.jsx)("div",{className:"avatar-wrapper",children:Object(j.jsx)("img",{className:"avatar",src:c,alt:" "})}),Object(j.jsxs)("div",{className:"user-wrapper",children:[Object(j.jsx)("h3",{className:"user-name",children:t}),Object(j.jsx)("p",{className:"user-nick",children:a})]})]})},h=a(10),O=a(20),x=a(25),g=a(34),f=a(19),v=a.n(f),y=[{name:"Jhon Shepard",username:"@SPECTR",avatar:"https://pbs.twimg.com/profile_images/2378360149/lj7al5ralm7vii9orwbz_400x400.jpeg"},{name:"Jhonny Silverhand",username:"@Samurai",avatar:"https://pbs.twimg.com/profile_images/1336170556886929408/xkvaOBA8_400x400.jpg"},{name:"Kiki Vhyce",username:"@kikivhyce_",avatar:"https://pbs.twimg.com/profile_images/1318522681717747712/UHUEEGXj.jpg"}],k={usersList:y,loadedUsers:[]},w=Object(x.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load_users":return Object(o.a)(Object(o.a)({},e),{},{usersList:y});case"add_user":case"post_new_user":return Object(o.a)(Object(o.a)({},e),{},{usersList:[].concat(Object(O.a)(e.usersList),[t.payload])});case"get_users":return console.log(t.payload),Object(o.a)(Object(o.a)({},e),{},{usersList:[].concat(Object(O.a)(e.usersList),[t.payload])});default:return e}}),Object(x.a)(g.a)),N=function(){var e=Object(h.c)((function(e){return e.usersList})),t=Object(h.c)((function(e){return e.loadedUsers})),a=Object(h.b)(),n=Object(c.useState)(""),s=Object(m.a)(n,2),r=(s[0],s[1],Object(c.useState)("")),i=Object(m.a)(r,2),u=(i[0],i[1],Object(c.useState)("")),l=Object(m.a)(u,2);l[0],l[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("button",{onClick:function(){a((function(e){v.a.get("http://domer.tech:9999/users/").then((function(t){e({type:"get_users",payload:t.data.data})})).catch((function(e){return console.log(e)}))}))},children:"Load users from server"}),e.map((function(e,t){return Object(c.createElement)(p,Object(o.a)(Object(o.a)({},e),{},{key:t}))})),t.map((function(e){return Object(c.createElement)(p,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))]})},_=function(){var e=Object(h.b)(),t=Object(c.useState)(""),a=Object(m.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),o=Object(m.a)(r,2),i=o[0],u=o[1],l=Object(c.useState)(""),b=Object(m.a)(l,2),d=b[0],p=b[1];return Object(j.jsxs)("div",{className:"add-user-wrapper",children:[Object(j.jsx)("input",{type:"text",placeholder:"Please input name",onChange:function(e){s(e.target.value)},className:"text-input"}),Object(j.jsx)("input",{type:"text",placeholder:"Please input username",onChange:function(e){u(e.target.value)},className:"text-input"}),Object(j.jsx)("input",{type:"url",placeholder:"Please paste avatar url",onChange:function(e){p(e.target.value)},className:"url-input"}),Object(j.jsx)("button",{onClick:function(){e(function(e){return function(t){v.a.post("http://domer.tech:9999/users/",e).then((function(a){t({type:"post_new_user",payload:e})})).catch((function(e){return console.error(e)}))}}({name:n,username:i,avatar:d}))},style:{marginBottom:20},children:"Add user to server and initial list"}),Object(j.jsx)("button",{onClick:function(){e(function(e){return{type:"add_user",payload:e}}({name:n,username:i,avatar:d}))},children:"Add user to initial list"})]})},S=[{path:"/cursor-homework24/",exact:!0,component:Object(j.jsx)(d,{})},{path:"/cursor-homework24/users",component:Object(j.jsx)(N,{})},{path:"/cursor-homework24/add-user",component:Object(j.jsx)(_,{})}];var C=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(u.a,{children:[Object(j.jsx)("header",{className:"header-class",children:Object(j.jsx)(b,{})}),Object(j.jsx)("main",{className:"main-content",children:Object(j.jsx)(i.c,{children:S.map((function(e){return Object(c.createElement)(i.a,Object(o.a)(Object(o.a)({},e),{},{key:e.toString()}),e.component)}))})})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(h.a,{store:w,children:Object(j.jsx)(u.a,{children:Object(j.jsx)(C,{})})})}),document.getElementById("root")),L()}},[[65,1,2]]]);
//# sourceMappingURL=main.f5a5fc0a.chunk.js.map