(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={section:"Section_section__3QN43"}},function(e,t,n){e.exports={task:"TaskItem_task__1rhm-"}},function(e,t,n){e.exports={container:"Tasks_container__2nBq5"}},function(e,t,n){e.exports={form:"TaskForm_form__31W-N"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(6),s=n.n(r),a=(n(15),n(2)),c=n(1),o=n.n(c),i=n(7),u=n.n(i),d=n(0),l=function(e){return Object(d.jsx)("section",{className:u.a.section,children:e.children})},j=n(8),f=n.n(j),b=function(e){return Object(d.jsx)("li",{className:f.a.task,children:e.children})},h=n(9),x=n.n(h),m=function(e){var t=Object(d.jsx)("h2",{children:"No tasks found. Start adding some!"});e.items.length>0&&(t=Object(d.jsx)("ul",{children:e.items.map((function(e){return Object(d.jsx)(b,{children:e.text},e.id)}))}));var n=t;return e.error&&(n=Object(d.jsx)("button",{onClick:e.onFetch,children:"Try again"})),e.loading&&(n="Loading tasks..."),Object(d.jsx)(l,{children:Object(d.jsx)("div",{className:x.a.container,children:n})})},p=n(3),O=n.n(p),k=n(4),g=n(10),v=n.n(g),w=function(e){var t=Object(c.useRef)();return Object(d.jsxs)("form",{className:v.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value;r.trim().length>0&&e.onEnterTask(r)},children:[Object(d.jsx)("input",{type:"text",ref:t}),Object(d.jsx)("button",{children:e.loading?"Sending...":"Add Task"})]})},S=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(null),i=Object(a.a)(o,2),u=i[0],j=i[1],f=function(){var t=Object(k.a)(O.a.mark((function t(n){var r,a,c,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),j(null),t.prev=2,t.next=5,fetch("https://tasks-44545-default-rtdb.firebaseio.com/tasks.json",{method:"POST",body:JSON.stringify({text:n}),headers:{"Content-Type":"application/json"}});case 5:if((r=t.sent).ok){t.next=8;break}throw new Error("Request failed!");case 8:return t.next=10,r.json();case 10:a=t.sent,c=a.name,o={id:c,text:n},e.onAddTask(o),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),j(t.t0.message||"Something went wrong!");case 19:s(!1);case 20:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(l,{children:[Object(d.jsx)(w,{onEnterTask:f,loading:r}),u&&Object(d.jsx)("p",{children:u})]})},y=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),o=Object(a.a)(s,2),i=o[0],u=o[1],d=function(){var e=Object(k.a)(O.a.mark((function e(t,n){var s,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),u(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.header?t.header:{},body:t.body?JSON.stringify(t.body):null});case 5:if((s=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,s.json();case 10:a=e.sent,n(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),u(e.t0.message||"Something went wrong!");case 17:r(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}();return{isLoading:n,error:i,sendRequest:d}};var T=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=y({url:"https://tasks-44545-default-rtdb.firebaseio.com/task.json"},(function(e){var t=[];for(var n in e)t.push({id:n,text:e[n].text});r(t)})),i=s.isLoading,u=s.error,l=s.sendRequest;return Object(c.useEffect)((function(){l()}),[]),Object(d.jsxs)(o.a.Fragment,{children:[Object(d.jsx)(S,{onAddTask:function(e){r((function(t){return t.concat(e)}))}}),Object(d.jsx)(m,{items:n,loading:i,error:u,onFetch:l})]})};s.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8d800041.chunk.js.map