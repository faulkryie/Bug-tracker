(this["webpackJsonpbug-tracker-frontend"]=this["webpackJsonpbug-tracker-frontend"]||[]).push([[0],{67:function(e,t,a){e.exports=a.p+"static/media/facebook-profile-pic.98839d7d.jpg"},80:function(e,t,a){e.exports=a(93)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(10),c=a.n(l),o=(a(85),a(86),a(87),a(60)),i=a(15),s=a(17),u=a(28),m=a.n(u),d=a(38),p=a(7),E=a(14),b=a.n(E),v=a(20),f=a(55),g=a.n(f),h=function(e){return{type:"LOAD_EMPLOYEES",employees:e}},y=function(e){return{type:"REMOVE_ONE_EMPLOYEE",employeeId:e}},O=function(){return function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users");case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,r=n.employees,a.ok){e.next=10;break}throw a;case 10:return r&&t(h(r)),e.abrupt("return");case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return{type:"LOAD_PROJECTS",projects:e}},k=function(e){return{type:"ADD_PROJECT",project:e}},_=function(e){return{type:"LOAD_TICKETS",tickets:e}},S=function(e){return{type:"UPDATE_TICKET",ticket:e}},N=function(e,t){return{type:"LOAD_SESSION",user:e,token:t}},w=function(e,t){return function(){var a=Object(v.a)(b.a.mark((function a(n){var r,l,c,o,i;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={email:e,password:t},a.prev=1,a.next=4,fetch("/api/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:return l=a.sent,c=g.a.get("token"),a.next=8,l.json();case 8:o=a.sent,i=o.employee,n(N(i,c)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}()},x=function(e,t,a){return function(){var n=Object(v.a)(b.a.mark((function n(r){var l,c,o,i,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={name:e,email:t,password:a},n.prev=1,n.next=4,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 4:if((c=n.sent).ok){n.next=7;break}throw c;case 7:return o=g.a.get("token"),n.next=10,c.json();case 10:i=n.sent,s=i.employee,r(N(s,o)),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(e){return n.apply(this,arguments)}}()},C=a(8),T=a(39),I=a(48),A=a(135),D=a(127),P=a(67),L=a.n(P),M=function(){var e=Object(C.b)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),u=i[0],E=i[1],b=function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e(w(l,u));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar login-navbar"},r.a.createElement("div",{className:"login-navbar__logo"},r.a.createElement(s.c,{to:"#",className:"menu-bars"},r.a.createElement(T.a,null)),r.a.createElement("h1",{className:"navbar__header login-navbar__header"},"Trackerfy")),r.a.createElement("div",{className:"login-navbar__button"},r.a.createElement("div",null,r.a.createElement(s.c,{className:"login-navbar__text",to:"/login"},"Login")),r.a.createElement("div",null,r.a.createElement(s.c,{className:"login-navbar__text",to:"/signup"},"Sign Up")))),r.a.createElement("div",{className:"dashboard-grid__component-login login"},r.a.createElement("div",{className:"component__topbar"},"Login Here"),r.a.createElement("form",{className:"login-form",onSubmit:b},r.a.createElement(A.a,{id:"standard-basic",label:"Email",onChange:function(e){return c(e.target.value)},name:"email",type:"email",value:l,required:!0}),r.a.createElement(A.a,{id:"standard-basic",label:"Password",onChange:function(e){return E(e.target.value)},name:"password",type:"password",value:u,required:!0}),r.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit"},"Submit")),r.a.createElement("div",null,r.a.createElement(s.b,{onClick:function(){c("demo1@example.com"),E("password1")},to:"#"},"demo_user_admin")),r.a.createElement("div",null,r.a.createElement(s.b,{onClick:function(e){c("demo2@example.com"),E("password2")},to:"#"},"demo_user_projectManager")),r.a.createElement("div",null,r.a.createElement(s.b,{onClick:function(e){c("demo3@example.com"),E("password3")},to:"#"},"demo_user_dev")),r.a.createElement("div",null,r.a.createElement(s.b,{onClick:function(e){c("demo4@example.com"),E("password4")},to:"#"},"demo_user_submitter"))),r.a.createElement("div",{className:"trackerfy-info"},r.a.createElement("p",null,"Preface:"),r.a.createElement("p",null,"This site's main purpose is to 'track' bugs/errors and tasks to be delegated to the appropriate employee in product/app development. There are four main roles: admin, project managers, developers(devs), and sumitters. admin has all access permissions (including assigning roles to new employees), project managers assign tickets, submitters create tickets, and devs manage ticket status.  ")),r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("h4",null,"frameworks"),r.a.createElement("ul",null,r.a.createElement("li",null,"react"),r.a.createElement("li",null,"express"))),r.a.createElement("div",null,r.a.createElement("h4",null,"libraries"),r.a.createElement("ul",null,r.a.createElement("li",null,"redux"),r.a.createElement("li",null,"role based action control (rbac)"),r.a.createElement("li",null,"sequelize"),r.a.createElement("li",null,"material ui"),r.a.createElement("li",null,"react icons"),r.a.createElement("li",null,"JSON web token"),r.a.createElement("li",null,"bcrypt"))),r.a.createElement("div",null,r.a.createElement("h4",null,"languages"),r.a.createElement("ul",null,r.a.createElement("li",null,"javaScript"),r.a.createElement("li",null,"JSX"),r.a.createElement("li",null,"sql"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Creator"),r.a.createElement("div",{className:"img-card"},r.a.createElement("div",{className:"cropped"},r.a.createElement("img",{className:"cropped__img",src:L.a,alt:"profile",width:"200px",height:"300px"})),r.a.createElement("p",null,"Quynn Smith"),r.a.createElement("div",null,r.a.createElement(I.b,{className:"github-link",onClick:function(){return window.location.href="https://github.com/qsmity"}}))))))},R=a(128),J=a(129),q=a(130),V=a(131),U=a(132),F=a(133),K=function(e){var t=e.employeesArray,a=Object(C.b)(),n=function(e){var t;window.confirm("Are you sure you wish to delete this item?")&&a((t=e.target.id,function(){var e=Object(v.a)(b.a.mark((function e(a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=parseInt(t,10),e.prev=1,e.next=4,fetch("/api/users/".concat(n),{method:"DELETE"});case 4:if((r=e.sent).ok){e.next=7;break}throw r;case 7:a(y(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(J.a,null,r.a.createElement(q.a,null,r.a.createElement(V.a,null,r.a.createElement(U.a,null,"Employee"),r.a.createElement(U.a,null,"Role"),r.a.createElement(U.a,null)))),r.a.createElement("div",{style:{overflow:"auto",height:"300px"}},r.a.createElement(J.a,{size:"small","aria-label":"a dense table"},r.a.createElement(F.a,null,t.map((function(e){return r.a.createElement(V.a,{key:e.id},r.a.createElement(U.a,null,e.name),r.a.createElement(U.a,null,function(e){switch(e){case 1:return"admin";case 2:return"project manager";case 3:return"dev";case 4:return"submitter";default:return null}}(e.roleId)),r.a.createElement(U.a,null,r.a.createElement(D.a,{id:e.id,onClick:n},"Delete")))})))))))},Y=a(137),z=a(134),B=a(138),X=function(e){var t=e.employeesArray,a=Object(C.b)(),l=Object(n.useState)(""),c=Object(p.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),u=Object(p.a)(s,2),m=u[0],d=u[1];Object(n.useEffect)((function(){a(O())}),[a]);return t.length>0?r.a.createElement("div",null,r.a.createElement(K,{employeesArray:t}),r.a.createElement("form",{className:"employee-form",onSubmit:function(e){var t,n;e.preventDefault(),a((t=o,n=m,function(){var e=Object(v.a)(b.a.mark((function e(a){var r,l,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=parseInt(t,10),e.prev=1,l={roleId:n},e.next=5,fetch("/api/users/".concat(r),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 5:if((c=e.sent).ok){e.next=8;break}throw c;case 8:a(O()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"employee-form__title"},"Edit Employee Roles"),r.a.createElement(Y.a,{id:"demo-simple-select-label"},"Employee"),r.a.createElement(z.a,{labelId:"demo-simple-select-label",onChange:function(e){i(e.target.value)},id:"employee",value:o,required:!0},r.a.createElement(B.a,{value:"",key:-1},"Select Employee"),t.map((function(e){return r.a.createElement(B.a,{key:e.id,value:e.id},e.name)}))),r.a.createElement(Y.a,{id:"demo-simple-select-label"},"Role"),r.a.createElement(z.a,{labelId:"demo-simple-select-label",onChange:function(e){d(e.target.value)},id:"roles",name:"roles",value:m,required:!0},r.a.createElement(B.a,{value:"",key:-1},"Select Role"),r.a.createElement(B.a,{value:0,key:0},"no role"),r.a.createElement(B.a,{value:1,key:1},"admin"),r.a.createElement(B.a,{value:2,key:2},"project manager"),r.a.createElement(B.a,{value:3,key:3},"dev"),r.a.createElement(B.a,{value:4,key:4},"submitter")),r.a.createElement(D.a,{variant:"contained",type:"submit"},"Submit"))):r.a.createElement("h1",null,"N/A")},H=function(){var e=Object(C.b)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),E=d[0],f=d[1],g=Object(C.c)((function(e){return e.employees})),h=Object.values(g);return r.a.createElement("div",null,r.a.createElement("form",{className:"add-proj-form",onSubmit:function(t){t.preventDefault(),e(function(e,t,a){return function(){var n=Object(v.a)(b.a.mark((function n(r){var l,c,o,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={name:e,description:t,employeeIdArray:[a]},n.prev=2,n.next=5,fetch("/api/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 5:if((c=n.sent).ok){n.next=8;break}throw c;case 8:return n.next=10,c.json();case 10:o=n.sent,i=o.project,console.log("inside getprojects thunks",i),r(k(i)),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(2),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[2,16]])})));return function(e){return n.apply(this,arguments)}}()}(l,s,E)),c(""),u("")}},r.a.createElement(A.a,{onChange:function(e){return c(e.target.value)},label:"Name",id:"standard-required",value:l}),r.a.createElement(A.a,{onChange:function(e){return u(e.target.value)},rowsMax:4,label:"Description",id:"standard-multiline-flexible",value:s}),r.a.createElement("div",{className:"add-proj-form__add-employee-dropdown"},r.a.createElement(Y.a,{id:"demo-simple-select-label"},"Add Employee"),r.a.createElement(z.a,{labelId:'id="demo-simple-select-label"',onChange:function(e){f(e.target.value)},id:"employee",value:E},r.a.createElement(B.a,{value:"",key:-1},"Select Employee"),h.map((function(e){return r.a.createElement(B.a,{key:e.id,value:e.id},e.name)})))),r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",type:"submit"},"Add"))))},W=a(71),Q=function(e){var t=e.projectsArray,a=e.disabled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(J.a,null,r.a.createElement(q.a,null,r.a.createElement(V.a,null,r.a.createElement(U.a,null,"Project"),r.a.createElement(U.a,null,"Description"),r.a.createElement(U.a,null,"Assigned Employees"),r.a.createElement(U.a,null,"Comments"),r.a.createElement(U.a,null)))),r.a.createElement("div",{style:{overflow:"auto",height:"400px"}},r.a.createElement(J.a,{size:"small","aria-label":"a dense table"},r.a.createElement(F.a,null,t.map((function(e){return r.a.createElement(V.a,{key:e.id},r.a.createElement(U.a,null,e.name),r.a.createElement(U.a,null,e.description),r.a.createElement(U.a,null,r.a.createElement("ul",null,e.Employees?e.Employees.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})):"")),r.a.createElement(U.a,null,r.a.createElement("ul",null,e.comments?e.comments.map((function(e){var t=e.split("__"),a=Object(p.a)(t,2),n=a[0],l=a[1],c=parseInt(n,10);return r.a.createElement("li",{key:c},l)})):"no comments")),r.a.createElement(U.a,null,r.a.createElement(W.a,{className:"edit-icon",disabled:a,onClick:function(e){return console.log("hello")}})),r.a.createElement(U.a,null,r.a.createElement(D.a,{id:e.id,disabled:a},"Delete")))})))))))},G=function(e){var t=e.disabled,a=Object(C.b)(),l=Object(C.c)((function(e){return e.projects})),c=Object.values(l),o=Object(n.useState)(!0),i=Object(p.a)(o,2),s=i[0],u=i[1];Object(n.useEffect)((function(){a(function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/projects");case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,(r=n.projects)&&t(j(r)),e.abrupt("return");case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[a]);return c.length>0?r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",disabled:t,onClick:function(e){u(!s)}},"add project"),r.a.createElement("div",{className:s?"hidden":""},r.a.createElement(H,null)),r.a.createElement(Q,{disabled:t,projectsArray:c})):r.a.createElement("h2",null,"no projects found")},Z=function(e){var t=e.hidePopup,a=e.ticketName,l=e.ticketDescr,c=e.ticketId,o=Object(C.b)(),i=Object(n.useState)(a),s=Object(p.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(l),E=Object(p.a)(d,2),f=E[0],g=E[1],h=Object(n.useState)("low"),y=Object(p.a)(h,2),O=y[0],j=y[1],k=Object(n.useState)("work in progress"),_=Object(p.a)(k,2),N=_[0],w=_[1],x=Object(n.useState)("bug/error"),T=Object(p.a)(x,2),I=T[0],P=T[1],L=Object(n.useState)(""),M=Object(p.a)(L,2),R=M[0],J=M[1],q=Object(C.c)((function(e){return e.employees})),V=Object.values(q);return r.a.createElement("div",{className:"edit-overlay"},r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"component__topbar component__topbar--blue"}," Edit Ticket "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o(function(e,t,a,n,r,l,c){return function(){var o=Object(v.a)(b.a.mark((function o(i){var s,u,m,d;return b.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return s={name:e,description:t,severityLevel:a,type:r,status:n,employeeId:l},o.prev=1,o.next=4,fetch("/api/tickets/".concat(c),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 4:if((u=o.sent).ok){o.next=7;break}throw u;case 7:return o.next=9,u.json();case 9:m=o.sent,d=m.ticket,i(S(d)),o.next=17;break;case 14:o.prev=14,o.t0=o.catch(1),console.log(o.t0);case 17:case"end":return o.stop()}}),o,null,[[1,14]])})));return function(e){return o.apply(this,arguments)}}()}(u,f,O,N,I,R,c)),console.log("in popup",u,f,O,N,I,c,R),m(""),g(""),t()},className:"popup__form"},r.a.createElement(D.a,{variant:"contained",onClick:function(e){t()},className:"close"},"exit"),r.a.createElement(A.a,{disabled:!0,id:"standard-required",label:"Name",defaultValue:a}),r.a.createElement(A.a,{onChange:function(e){return g(e.target.value)},rowsMax:4,label:"description",id:"standard-multiline-flexible",value:f,multiline:!0}),r.a.createElement(Y.a,{id:"demo-simple-select-label"},"Severity Level"),r.a.createElement(z.a,{labelId:"demo-simple-select-label",id:"severityLevel",onChange:function(e){return j(e.target.value)},value:O},r.a.createElement(B.a,{value:"low"},"Low"),r.a.createElement(B.a,{value:"medium"},"Medium"),r.a.createElement(B.a,{value:"high"},"High")),r.a.createElement(Y.a,{id:"demo-simple-select-label"},"Status"),r.a.createElement(z.a,{labelId:"demo-simple-select-label",id:"status",onChange:function(e){return w(e.target.value)},value:N},r.a.createElement(B.a,{value:"work in progress"},"Work In Progress"),r.a.createElement(B.a,{value:"completed"},"Completed")),r.a.createElement(Y.a,{id:"demo-simple-select-label"},"Type"),r.a.createElement(z.a,{LabelId:"demo-simple-select-label",id:"type",onChange:function(e){return P(e.target.value)},value:I},r.a.createElement(B.a,{value:"bug/error"},"Bug/Error"),r.a.createElement(B.a,{value:"task"},"Task")),r.a.createElement(Y.a,{id:"demo-simple-select-label"},"Add Employee"),r.a.createElement(z.a,{LabelId:"demo-simple-select-label",onChange:function(e){return J(e.target.value)},id:"employee",value:R},r.a.createElement(B.a,{value:"",key:-1},"Select Employee"),V.map((function(e){return r.a.createElement(B.a,{key:e.id,value:e.id},e.name)}))),r.a.createElement(D.a,{variant:"contained",type:"submit"},"Add"))))},$=function(e){var t=e.ticketsArray,a=e.disabled,n=e.hidePopup;console.log("ticketsArray inside ticket table",t);var l=function(e){console.log(e.target.dataset.name),console.log(e.target.dataset.descr),console.log(e.target.id),n(e.target.dataset.name,e.target.dataset.descr,e.target.id)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(J.a,null,r.a.createElement(q.a,null,r.a.createElement(V.a,null,r.a.createElement(U.a,null,"Name"),r.a.createElement(U.a,null,"Description"),r.a.createElement(U.a,null,"Severity Level"),r.a.createElement(U.a,null,"Status"),r.a.createElement(U.a,null,"Assigned Empoyee"),r.a.createElement(U.a,null),r.a.createElement(U.a,null)))),r.a.createElement("div",{style:{overflow:"auto",height:"300px"}},r.a.createElement(J.a,{size:"small","aria-label":"a dense table"},r.a.createElement(F.a,null,t.map((function(e){return r.a.createElement(V.a,{key:e.id},r.a.createElement(U.a,null,e.name),r.a.createElement(U.a,null,e.description),r.a.createElement(U.a,null,e.severityLevel),r.a.createElement(U.a,null,e.status),r.a.createElement(U.a,null,e.Employee),r.a.createElement(U.a,null,r.a.createElement(D.a,{id:e.id,disabled:a},"Delete")),r.a.createElement(U.a,null,r.a.createElement(D.a,{onClick:l,disabled:a},r.a.createElement("div",{id:e.id,"data-name":e.name,"data-descr":e.description},"Edit"))))})))))))},ee=function(e){var t=e.disabled,a=Object(C.b)(),l=Object(C.c)((function(e){return e.tickets})),c=Object.values(l),o=Object(n.useState)("hello"),i=Object(p.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)("goodbye"),d=Object(p.a)(m,2),E=d[0],f=d[1],g=Object(n.useState)(""),h=Object(p.a)(g,2),y=h[0],O=h[1],j=Object(n.useState)(!0),k=Object(p.a)(j,2),S=k[0],N=k[1],w=function(e,t,a){!0===S?(N(!1),u(e),f(t),O(a)):N(!0)};return Object(n.useEffect)((function(){a(function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/tickets");case 3:if((a=e.sent).ok){e.next=6;break}throw a;case 6:return e.next=8,a.json();case 8:n=e.sent,r=n.tickets,console.log("all tickets",r),t(_(r)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())}),[a]),c.length>0?r.a.createElement("div",{className:"ticket"},r.a.createElement("div",null,r.a.createElement($,{hidePopup:w,disabled:t,ticketsArray:c})),S?null:r.a.createElement(Z,{ticketId:y,ticketName:s,ticketDescr:E,hidePopup:w})):r.a.createElement("h1",null,"No Tickets available")},te=function(){var e=Object(C.b)(),t=function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((function(e){g.a.remove("token"),e({type:"REMOVE_SESSION"}),e({type:"REMOVE_EMPLOYEES"}),e({type:"REMOVE_PROJECTS"}),e({type:"REMOVE_TICKETS"})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:t,type:"submit"},"Logout"))};var ae=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],l=t[1],c=function(e){return l(!a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar"},r.a.createElement(s.c,{to:"#",className:"menu-bars"},r.a.createElement(I.a,{onClick:c})),r.a.createElement("div",{className:"navbar__logo"},r.a.createElement(T.a,{className:"menu-bars menu-bars--purple"}),r.a.createElement("h1",null,"Trackerfy")),r.a.createElement("div",{className:"navbar__logout"},r.a.createElement(te,null))),r.a.createElement("nav",{className:a?"nav-menu nav-menu--active":"nav-menu"},r.a.createElement("ul",{className:"nav-menu__items",onClick:c},r.a.createElement("li",{className:"nav-menu__toggle"},r.a.createElement(s.c,{to:"#",className:"nav-menu__close"},r.a.createElement(I.c,{onClick:c}))),r.a.createElement("li",{className:"nav-menu__item"},r.a.createElement(s.c,{className:"nav-menu__link",to:"#"},"Profile")),r.a.createElement("li",{className:"nav-menu__item"},r.a.createElement(s.c,{className:"nav-menu__link",to:"/admin/dashboard"},"Dashboard")))))},ne=function(){var e=Object(C.c)((function(e){return e.session.role})),t=Object(C.c)((function(e){return e.employees})),a=Object.values(t),l=Object(n.useState)(!1),c=Object(p.a)(l,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){i(1!==e)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement(ae,null)),r.a.createElement("div",null,e?null:r.a.createElement("h2",{style:{marginTop:"10%",textAlign:"center"}},"Wait To Be Assigned Role")),r.a.createElement("div",{className:"dashboard-grid"},r.a.createElement("div",{className:a.length<=0?"dashboard-grid__component-employee dashboard-grid__component--hidden":"dashboard-grid__component-employee"},r.a.createElement("div",{className:"component__topbar"},r.a.createElement("h2",null,"Employees")),r.a.createElement(X,{employeesArray:a,disabled:o})),r.a.createElement("div",{className:"dashboard-grid__component-project"},r.a.createElement("div",{className:"component__topbar"},r.a.createElement("h2",null,"Projects")),r.a.createElement(G,{disabled:o})),r.a.createElement("div",{className:"dashboard-grid__component-ticket"},r.a.createElement("div",{className:"component__topbar"},r.a.createElement("h2",null,"Tickets")),r.a.createElement(ee,{disabled:o}))))},re=function(){var e=Object(C.b)(),t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),u=i[0],E=i[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),f=v[0],g=v[1],h=function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e(x(l,u,f));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar login-navbar"},r.a.createElement("div",{className:"login-navbar__logo"},r.a.createElement(s.c,{to:"#",className:"menu-bars"},r.a.createElement(T.a,null)),r.a.createElement("h1",{className:"navbar__header login-navbar__header"},"Trackerfy")),r.a.createElement("div",{className:"login-navbar__button"},r.a.createElement("div",null,r.a.createElement(s.c,{className:"login-navbar__text",to:"/login"},"Login")),r.a.createElement("div",null,r.a.createElement(s.c,{className:"login-navbar__text",to:"/signup"},"Sign Up")))),r.a.createElement("div",{className:"dashboard-grid__component-login login"},r.a.createElement("div",{className:"component__topbar"},"Sign Up here"),r.a.createElement("form",{className:"login-form",onSubmit:h},r.a.createElement(A.a,{id:"standard-basic",label:"Name",onChange:function(e){return c(e.target.value)},name:"name",type:"name",value:l,required:!0}),r.a.createElement(A.a,{id:"standard-basic",label:"Email",onChange:function(e){return E(e.target.value)},name:"email",type:"email",value:u,required:!0}),r.a.createElement(A.a,{id:"standard-basic",label:"Password",onChange:function(e){return g(e.target.value)},name:"password",type:"password",value:f,required:!0}),r.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit"},"Sign Up"))))},le=function(e){var t=e.component,a=e.token,n=Object(o.a)(e,["component","token"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}}))},ce=function(e){var t=e.component,a=e.token,n=Object(o.a)(e,["component","token"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(i.a,{to:"/admin/dashboard"}):r.a.createElement(t,e)}}))};function oe(e){var t=e.token;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(le,{token:t,exact:!0,path:"/admin/dashboard",component:ne}),r.a.createElement(ce,{exact:!0,token:t,path:"/login",component:M}),r.a.createElement(ce,{token:t,path:"/signup",component:re}),r.a.createElement(ce,{token:t,path:"/",component:M}))))}var ie=function(){var e=Object(C.c)((function(e){return e.session.authToken}));return r.a.createElement(oe,{token:e})},se=a(37),ue=a(72),me=a(53),de=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_EMPLOYEES":return e={},a.employees.map((function(t){return e[t.id]=t})),e;case"REMOVE_EMPLOYEES":return{};case"REMOVE_ONE_EMPLOYEE":return delete(e=Object.assign({},Object(me.a)({},t)))[a.employeeId],e;default:return t}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_SESSION":return Object.assign({},{currentUserId:t.user.id,role:t.user.roleId,authToken:t.token});case"REMOVE_SESSION":return{};default:return e}},Ee=a(19),be=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_PROJECTS":return e={},a.projects.map((function(t){return e[t.id]=t})),e;case"ADD_PROJECT":return e=Object(me.a)({},t,Object(Ee.a)({},a.project.id,a.project));case"REMOVE_PROJECTS":return{};default:return t}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"LOAD_TICKETS":return t.tickets.map((function(e){return e.Employee=e.Employee.name,a[e.id]=e})),a;case"REMOVE_TICKETS":return{};case"UPDATE_TICKET":var n=t.ticket.id;t.ticket.Employee=t.ticket.Employee.name;var r=a[n];return a[n]=Object.assign({},r,t.ticket),console.log("new ticket",t.ticket),a;default:return e}},fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,ge=Object(se.c)({employees:de,projects:be,tickets:ve,session:pe}),he=fe(Object(se.a)(ue.a)),ye=function(e){return Object(se.e)(ge,e,he)}(function(){try{var e=localStorage.getItem("initialState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}());ye.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("initialState",t)}catch(a){console.warn(a)}}(ye.getState())})),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C.a,{store:ye},r.a.createElement(ie,null))),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.27eafa42.chunk.js.map