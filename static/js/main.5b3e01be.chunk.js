(this.webpackJsonptask_ticker=this.webpackJsonptask_ticker||[]).push([[0],{20:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),o=n(10),a=n.n(o),s=(n(20),n(0)),d=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"header",children:"Your Personalized Todo List"})})},r=n(4),u=n(11),j=n(3),l=function(t){var e=t.addTodo,n=Object(c.useState)(""),i=Object(j.a)(n,2),o=i[0],a=i[1];return Object(s.jsxs)("form",{className:"TodoForm",onSubmit:function(t){t.preventDefault(),o&&(e(o),a(""))},children:[Object(s.jsx)("input",{type:"text",className:"TodoInput",value:o,placeholder:"Today's Task?",onChange:function(t){a(t.target.value)}}),Object(s.jsx)("button",{type:"submit",className:"Todo-btn",children:"Add task"})]})},b=n(26),O=n(8),m=n(7),p=function(t){var e=t.task,n=t.toggleComplete,c=t.deleteTodo,i=t.editTodo;return Object(s.jsxs)("div",{className:"Todo",children:[Object(s.jsx)("p",{onClick:function(){return n(e.id)},className:"".concat(e.completed?"completed":""),children:e.task}),Object(s.jsxs)("div",{children:[Object(s.jsx)(O.a,{icon:m.a,onClick:function(){return i(e.id)}}),Object(s.jsx)(O.a,{icon:m.b,onClick:function(){return c(e.id)}})]})]})},h=function(t){var e=t.editTodo,n=t.task,i=Object(c.useState)(n.task),o=Object(j.a)(i,2),a=o[0],d=o[1],r=Object(c.useState)("low"),u=Object(j.a)(r,2),l=u[0],b=u[1];return Object(s.jsxs)("form",{className:"TodoForm",onSubmit:function(t){t.preventDefault(),e(a,n.id,l)},children:[Object(s.jsx)("input",{type:"text",className:"todo-input",value:a,placeholder:"update Task",onChange:function(t){d(t.target.value)}}),Object(s.jsx)("button",{type:"submit",className:"Todo-btn",children:"Add Task"}),Object(s.jsxs)("select",{className:"dropdown",value:l,onChange:function(t){return b(t.target.value)},children:[Object(s.jsx)("option",{value:"low",className:"low",children:"Low"}),Object(s.jsx)("option",{value:"medium",className:"medium",children:"Medium"}),Object(s.jsx)("option",{value:"high",className:"high",children:"High"})]}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})},f=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],i=e[1],o=function(t){i(n.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:e.completed}):e})))},a=function(t){i(n.filter((function(e){return e.id!==t})))},d=function(t){i(n.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{isEditing:!e.isEditing}):e})))},O=function(t,e){i(n.map((function(n){return n.id===e?Object(r.a)(Object(r.a)({},n),{},{task:t,isEditing:!n.isEditing}):n})))};return Object(s.jsxs)("div",{className:"TodoWrapper ",children:[Object(s.jsx)("h1",{children:"Task Ticker"}),Object(s.jsx)(l,{addTodo:function(t){i([].concat(Object(u.a)(n),[{id:Object(b.a)(),task:t,completed:!1,isEditing:!1}]))}}),n.map((function(t){return t.isEditing?Object(s.jsx)(h,{editTodo:O,task:t},t.id):Object(s.jsx)(p,{task:t,toggleComplete:o,deleteTodo:a,editTodo:d},t.id)}))]})};var x=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{children:Object(s.jsx)(f,{})})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))};a.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x,{})})),g()}},[[24,1,2]]]);
//# sourceMappingURL=main.5b3e01be.chunk.js.map