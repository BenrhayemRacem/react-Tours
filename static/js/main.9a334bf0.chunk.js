(this["webpackJsonpreact-tours-project"]=this["webpackJsonpreact-tours-project"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(11),a=n.n(s),o=n(9),i=n.n(o),j=n(12),u=n(7),l=(n(18),n(24)),b=n(25),h=n(26),d=n(28),O=n(1),x=function(e){var t=e.tour,n=t.id,r=t.name,s=t.info,a=t.image,o=t.price,i=e.removeTours,j=Object(c.useState)(!1),x=Object(u.a)(j,2),f=x[0],p=x[1];return Object(O.jsxs)("article",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:r})}),Object(O.jsx)(l.a,{src:a,thumbnail:!0}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(h.a,{xs:9,children:Object(O.jsxs)("p",{children:[f?s:"".concat(s.substring(0,150)," ...")," ",Object(O.jsx)(d.a,{variant:"outline-info",onClick:function(){return p(!f)},children:f?"show less":"read more"})]})}),Object(O.jsx)(h.a,{className:"d-flex justify-content-center",children:Object(O.jsxs)("h3",{children:[" $",o," "]})})]}),Object(O.jsx)(b.a,{children:Object(O.jsx)(h.a,{xs:11,children:Object(O.jsx)(d.a,{className:" btn-danger btn-block",onClick:function(){return i(n)},children:" not interested"})})})]})},f=n(27),p=function(e){return e.tours.map((function(t){return Object(O.jsx)(f.a,{children:Object(O.jsx)(x,{tour:t,removeTours:e.removeTours},t.id)})}))},v=function(){return Object(O.jsx)("h1",{children:" Loading ..."})},m=(n(22),function(e){var t=e.handleClick;return Object(O.jsxs)(f.a,{children:[Object(O.jsx)("h2",{children:" No Tours Left"}),Object(O.jsx)(d.a,{className:"btn-block align-content-center btn-danger",onClick:t,children:" show all tours "})]})});var k=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(u.a)(s,2),o=a[0],l=a[1],b=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(!1),r(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),l(!1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),o?Object(O.jsx)(v,{}):0===n.length?Object(O.jsx)(m,{handleClick:b}):Object(O.jsx)(p,{tours:n,removeTours:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}})};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9a334bf0.chunk.js.map