(this["webpackJsonpreact-js-project"]=this["webpackJsonpreact-js-project"]||[]).push([[7],{230:function(e,t,r){e.exports={formControl:"FormsControls_formControl__2X90n",error:"FormsControls_error__1rHA3",formSummaryError:"FormsControls_formSummaryError__3RSdE"}},231:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return p}));var n=r(234),a=r(0),c=r.n(a),o=r(230),l=r.n(o),i=r(113),u=["input","meta","child"],m=["input","meta","child"],s=function(e){e.input;var t=e.meta,r=t.touched,n=t.error,a=e.children,o=r&&n;return c.a.createElement("div",{className:l.a.formControl+" "+(o?l.a.error:"")},c.a.createElement("div",null,a),o&&c.a.createElement("span",null,n))},f=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,u));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,r)))},d=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,m));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,r)))},p=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:r,component:n},a)),o)}},232:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},305:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(28),o=r(114),l=r(232),i=r(231),u=r(24),m=r(7),s=r(230),f=r.n(s),d=Object(o.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error,n=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(i.c)("Email","email",[l.b],i.a),Object(i.c)("Password","password",[l.b],i.a,{type:"password"}),Object(i.c)(null,"rememberMe",[],i.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("img",{src:n,alt:""}),n&&Object(i.c)("Symbols from image","captcha",[l.b],i.a,{}),r&&a.a.createElement("div",{className:f.a.formSummaryError},r),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.default=Object(c.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:u.c})((function(e){return e.isAuth?a.a.createElement(m.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(d,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}))}}]);
//# sourceMappingURL=7.fe7b0b56.chunk.js.map