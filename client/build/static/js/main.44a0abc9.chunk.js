(this["webpackJsonpreact-socket-chat"]=this["webpackJsonpreact-socket-chat"]||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(63),i=n.n(r),o=(n(38),n(23)),u=n(2),l=n(5),d=(n(72),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("div",{className:"home-container uk-card uk-card-default uk-card-body",children:[Object(a.jsx)("h3",{children:"Join Conversation"}),Object(a.jsx)("input",{type:"text",placeholder:"Room Name",value:n,onChange:function(e){s(e.target.value)},className:"uk-input uk-border-rounded"}),Object(a.jsx)(o.b,{to:"/".concat(n),className:"uk-button uk-border-rounded uk-button-primary uk-margin-medium-top",children:"Create Room"})]})}),j=(n(77),n(36)),m=n(26),b=n(11),f=n.n(b),g=n(24),O=n(66),p=n.n(O),h=n(25),v=n.n(h),x="NEW_CHAT_MESSAGE_EVENT",N="START_TYPING_MESSAGE_EVENT",S="STOP_TYPING_MESSAGE_EVENT",y="http://localhost:4000",k=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)([]),b=Object(l.a)(d,2),O=b[0],h=b[1],k=Object(c.useState)(),T=Object(l.a)(k,2),I=T[0],E=T[1],w=Object(c.useRef)();Object(c.useEffect)((function(){(function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.randomuser.me/");case 2:t=e.sent,t.data.results[0],null==(n=JSON.parse(localStorage.getItem("selectedUser")))&&(a={name:"Bob",avatar:"Bob.jpg"},localStorage.setItem("selectedUser",JSON.stringify(a)),n=JSON.parse(localStorage.getItem("selectedUser"))),E({name:n.name,picture:n.avatar});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){(function(){var t=Object(g.a)(f.a.mark((function t(){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat(y,"/rooms/").concat(e,"/users"));case 2:n=t.sent,a=n.data.users,u(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.useEffect)((function(){(function(){var t=Object(g.a)(f.a.mark((function t(){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat(y,"/rooms/").concat(e,"/messages"));case 2:n=t.sent,a=n.data.messages,s(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.useEffect)((function(){if(I)return w.current=p()(y,{query:{roomId:e,name:I.name,picture:I.picture}}),w.current.on("connect",(function(){console.log(w.current.id)})),w.current.on("USER_JOIN_CHAT_EVENT",(function(e){e.id!==w.current.id&&u((function(t){return[].concat(Object(m.a)(t),[e])}))})),w.current.on("USER_LEAVE_CHAT_EVENT",(function(e){u((function(t){return t.filter((function(t){return t.id!==e.id}))}))})),w.current.on(x,(function(e){var t=Object(j.a)(Object(j.a)({},e),{},{ownedByCurrentUser:e.senderId===w.current.id});s((function(e){return[].concat(Object(m.a)(e),[t])}))})),w.current.on(N,(function(e){if(e.senderId!==w.current.id){var t=e.user;h((function(e){return[].concat(Object(m.a)(e),[t])}))}})),w.current.on(S,(function(e){if(e.senderId!==w.current.id){var t=e.user;h((function(e){return e.filter((function(e){return e.name!==t.name}))}))}})),function(){w.current.disconnect()}}),[e,I]);return{messages:a,user:I,users:o,typingUsers:O,sendMessage:function(e){var t=new Date,n="".concat(t.getHours(),":").concat(t.getMinutes());w.current&&w.current.emit(x,{body:e,senderId:w.current.id,user:I,date:n})},startTypingMessage:function(){w.current&&w.current.emit(N,{senderId:w.current.id,user:I})},stopTypingMessage:function(){w.current&&w.current.emit(S,{senderId:w.current.id,user:I})}}},T=(n(127),function(e){var t=e.user;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{className:"room-name",children:["Typing as ",t.name]}),Object(a.jsxs)("div",{className:"avatar-container",children:[Object(a.jsx)("img",{src:t.picture,alt:t.name,title:t.name,className:"avatar"}),Object(a.jsx)("span",{className:"onlineIcon"}),Object(a.jsx)("span",{className:"offlineIcon"})]})]})}),I=(n(128),function(e){var t=e.message;console.log(t);var n=JSON.parse(localStorage.getItem("selectedUser"));if(null==n){localStorage.setItem("selectedUser",JSON.stringify({name:"Bob",avatar:"Bob.jpg"})),n=JSON.parse(localStorage.getItem("selectedUser"))}return Object(a.jsxs)("div",{className:"message-item ".concat(t.user.name===n.name?"my-message":"received-message"),children:[Object(a.jsx)("div",{className:"message-avatar-container",children:Object(a.jsx)(T,{user:t.user})}),Object(a.jsxs)("div",{className:"message-body-container",children:[Object(a.jsxs)("div",{className:"message-user-name",children:[t.user.name,"  ",Object(a.jsx)("div",{className:"message-date",children:t.date})]}),Object(a.jsx)("div",{className:"message-body",children:t.body})]})]})}),E=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(c.useState)(5),d=Object(l.a)(u,2),j=d[0],m=d[1];return Object(c.useEffect)((function(){var e;return i?(i||0===j)&&clearInterval(e):e=setInterval((function(){m((function(e){return e-1}))}),1e3),0===j&&a(!1),function(){return clearInterval(e)}}),[i,j]),{isTyping:n,startTyping:function(){o(!0),m(5),a(!0)},stopTyping:function(){o(!1)},cancelTyping:function(){m(0)}}},w=(n(129),function(e){var t=e.newMessage,n=e.handleNewMessageChange,c=e.handleStartTyping,s=e.handleStopTyping,r=e.handleSendMessage;return Object(a.jsxs)("form",{className:"new-message-form",children:[Object(a.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"Aa",className:"uk-input uk-border-rounded",onKeyPress:c,onKeyUp:s}),Object(a.jsx)("button",{type:"submit",onClick:r,className:"uk-button uk-button-primary uk-border-rounded uk-margin-small-left",children:"Send"})]})}),C=(n(130),function(){return Object(a.jsxs)("div",{className:"dotsContainer",children:[Object(a.jsx)("span",{id:"dot1"}),Object(a.jsx)("span",{id:"dot2"}),Object(a.jsx)("span",{id:"dot3"})]})}),M=(n(131),function(e){var t=e.user;return Object(a.jsxs)("div",{className:"message-item",children:[Object(a.jsx)("div",{className:"message-avatar-container",children:Object(a.jsx)("img",{src:t.picture,alt:t.name,className:"message-avatar"})}),Object(a.jsx)(C,{})]})});function U(){localStorage.setItem("selectedUser",JSON.stringify({name:"Alice",avatar:"Alice.jpg"})),window.location.reload()}function _(){localStorage.setItem("selectedUser",JSON.stringify({name:"Bob",avatar:"Bob.jpg"})),window.location.reload()}var A=function(e){var t=e.match.params.roomId,n=k(t),s=n.messages,r=n.user,i=n.typingUsers,o=n.sendMessage,u=n.startTypingMessage,d=n.stopTypingMessage,j=Object(c.useState)(""),m=Object(l.a)(j,2),b=m[0],f=m[1],g=E(),O=g.isTyping,p=g.startTyping,h=g.stopTyping,v=g.cancelTyping;return Object(c.useEffect)((function(){O?u():d()}),[O]),Object(a.jsxs)("div",{className:"uk-grid uk-box-shadow-medium chat-height",children:[Object(a.jsx)("div",{className:"chat-sidebar uk-width-1-4@m",children:Object(a.jsx)("div",{className:"chat-selection uk-card uk-card-default uk-card-body",children:Object(a.jsxs)("ul",{className:"uk-nav-default uk-nav-parent-icon",children:[Object(a.jsx)("li",{children:Object(a.jsx)("label",{children:"Current Users (2)"})}),Object(a.jsxs)("li",{className:"uk-active",onClick:U,children:[Object(a.jsxs)("div",{className:"avatar-container",children:[Object(a.jsx)("img",{src:"Alice.jpg",className:"avatar uk-margin-medium-right"}),Object(a.jsx)("span",{className:"onlineIcon"}),Object(a.jsx)("span",{className:"offlineIcon"})]}),"Alice"]}),Object(a.jsxs)("li",{className:"uk-active",onClick:_,children:[Object(a.jsxs)("div",{className:"avatar-container",children:[Object(a.jsx)("img",{src:"Bob.jpg",className:"avatar uk-margin-medium-right"}),Object(a.jsx)("span",{className:"onlineIcon"}),Object(a.jsx)("span",{className:"offlineIcon"})]}),"Bob"]})]})})}),Object(a.jsxs)("div",{className:"uk-width-expand@s chat-relative",children:[Object(a.jsx)("div",{className:"chat-room-top-bar uk-padding custom-box-shadow-medium uk-background-muted",children:r&&Object(a.jsx)(T,{user:r})}),Object(a.jsxs)("div",{className:"chat-room-container",children:[Object(a.jsx)("div",{className:"messages-container",children:Object(a.jsxs)("ol",{className:"messages-list",children:[s.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(I,{user:r,message:e})},t)})),i.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(M,{user:e})},s.length+t)}))]})}),Object(a.jsx)(w,{newMessage:b,handleNewMessageChange:function(e){f(e.target.value)},handleStartTyping:p,handleStopTyping:h,handleSendMessage:function(e){e.preventDefault(),v(),o(b),f("")}})]})]})]})};var J=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:d}),Object(a.jsx)(u.a,{exact:!0,path:"/:roomId",component:A})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),B()},38:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.44a0abc9.chunk.js.map