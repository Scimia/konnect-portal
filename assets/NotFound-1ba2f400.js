import{a as d,u as p,_}from"./index-ba3bee82.js";import{d as u,f as l,i as h,j as m,k as c,l as t,t as o,n as s,v as f}from"./vue-62e5e94d.js";import"./kongponents-5a8d94e7.js";const g=u({name:"NotFound",setup(){const{portalApiV2:e}=d(),n=e.value.getApiLink("/api/v2/portal/logo"),a=p().state.helpText.notFound;return{logoSrc:n,helpText:a}}});const x={class:"not-found d-flex flex-column justify-content-center align-items-center","data-testid":"404"},v=["src","alt"],y={class:"circle d-flex align-items-center justify-content-center"},T={class:"message text-center"},k={class:"mb-1 type-xxl"},N={class:"mt-0 type-xxl"};function C(e,n,a,A,B,F){const r=l("router-link"),i=l("Content");return h(),m(i,null,{default:c(()=>[t("section",x,[t("div",null,[t("img",{class:"logo",src:e.logoSrc,alt:e.helpText.logoAlt},null,8,v)]),t("div",y,o(e.helpText.http404),1),t("div",T,[t("h1",k,o(e.helpText.sorryMessage),1),t("h1",N,[s(o(e.helpText.goBack)+" ",1),f(r,{"data-testid":"go-home",to:"/"},{default:c(()=>[s(o(e.helpText.home),1)]),_:1}),s(". ")])])])]),_:1})}const j=_(g,[["render",C],["__scopeId","data-v-502a3671"]]);export{j as default};
