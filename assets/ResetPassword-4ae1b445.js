import{A as d}from"./AuthCard-0abb2986.js";import{d as c,af as p,f as a,i as u,j as _,k as i,l as w,v as m}from"./vue-62e5e94d.js";import{_ as l}from"./index-ba3bee82.js";import"./kongponents-5a8d94e7.js";const f=c({name:"ResetPassword",components:{AuthCard:d},setup(){const e=p();function s(o={}){const{email:t}=o;e.push({path:"/login",query:{passwordReset:!0,email:t}})}return{onResetPasswordSuccess:s}}});const h={id:"kong-auth-reset-password-wrapper"};function R(e,s,o,t,k,P){const r=a("kong-auth-reset-password"),n=a("AuthCard");return u(),_(n,null,{default:i(()=>[w("div",h,[m(r,{"wrapper-id":"kong-auth-reset-password-wrapper",onResetPasswordSuccess:e.onResetPasswordSuccess},null,8,["onResetPasswordSuccess"])])]),_:1})}const x=l(f,[["render",R],["__scopeId","data-v-a8297e0d"]]);export{x as default};
