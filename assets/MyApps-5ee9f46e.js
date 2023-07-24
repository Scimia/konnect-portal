import{g as _}from"./getMessageFromError-0a4f3a23.js";import{A as I,R as V}from"./ActionsDropdown-e1e9ba68.js";import{P as H}from"./PageTitle-d35ff2c9.js";import{a as B,e as N,s as F,u as J,c as L,_ as q}from"./index-ba3bee82.js";import{u as O,c as j}from"./useMachine-f5553fb5.js";import{d as G,a as c,c as D,f as s,i as k,j as $,k as t,v as n,q as z,l as u,t as a,n as r,u as Q}from"./vue-62e5e94d.js";import"./kongponents-5a8d94e7.js";const U=G({name:"MyApps",components:{PageTitle:H,ActionsDropdown:I,RefreshTokenModal:V},setup(){const{notify:e}=L(),l=c(""),w=c([]),C=c(0),R=D(()=>C.value.toString()),d=c(null),p=c(!1),m=c(null),{portalApiV2:h}=B(),S=N(),{isDcr:v}=F(S),b=J().state.helpText.myApp,A=c({paginationPageSizes:[25,50,100],initialPageSize:25}),M=D(()=>{var i;return`Delete ${(i=d.value)==null?void 0:i.name}`}),{state:E,send:f}=O(j({predictableActionArguments:!0,id:"DeveloperMachine",initial:"idle",states:{idle:{on:{FETCH:"pending",REJECT:"error"}},pending:{on:{RESOLVE:"success",REJECT:"error"}},success:{type:"final"},error:{on:{FETCH:"pending"}}}})),o=()=>{C.value+=1};return{modalTitle:M,errorMessage:l,applications:w,currentState:E,tableHeaders:[{label:"Name",key:"name"},{label:"Description",key:"description"},{hideLabel:!0,key:"actions"}],handleDelete:()=>{h.value.service.applicationsApi.deleteApplication({applicationId:d.value.id}).then(()=>{d.value=null,o(),e({message:"Application deleted"})}).catch(i=>{d.value=null,e({appearance:"danger",message:`Error: ${_(i)}`})})},isDcr:v,deleteItem:d,showSecretModal:p,token:m,onModalClose:()=>{p.value=!1,m.value=null},handleRefreshSecret:i=>{h.value.service.credentialsApi.refreshApplicationToken({applicationId:i}).then(g=>{e({message:"Successfully refreshed secret"}),p.value=!0,m.value=g.data.client_secret}).catch(g=>{e({appearance:"danger",message:_(g)})})},fetcherCacheKey:R,fetcher:async i=>{const{pageSize:g,page:K}=i,P={pageNumber:K,pageSize:g};return f("FETCH"),h.value.service.applicationsApi.listApplications(P).then(y=>(f("RESOLVE"),{data:y.data.data,total:y.data.meta.page.total})).catch(y=>{f("REJECT"),l.value=_(y)})},paginationConfig:A,helpText:b}}});const W={width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"mr-2"},X=u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16 8A8 8 0 110 8a8 8 0 0116 0zM7 5a1 1 0 012 0v2h2a1 1 0 110 2H9v2a1 1 0 11-2 0V9H5a1 1 0 110-2h2V5z",fill:"#fff","fill-opacity":".75"},null,-1),Y=["onClick"],Z=["onClick"];function x(e,l,w,C,R,d){const p=s("KButton"),m=s("PageTitle"),h=s("ActionsDropdown"),S=s("router-link"),v=s("EmptyState"),b=s("KTable"),A=s("KCard"),M=s("KModal"),E=s("RefreshTokenModal"),f=s("Content");return k(),$(f,null,{default:t(()=>[n(m,{title:e.helpText.myApps,class:"mb-6"},{right:t(()=>[n(p,{"data-testid":"create-application-button",appearance:"primary","is-rounded":!1,to:{name:"create-application"}},{default:t(()=>[(k(),z("svg",W,[u("title",null,a(e.helpText.plus),1),X])),r(" "+a(e.helpText.newApp),1)]),_:1})]),_:1},8,["title"]),u("div",null,[n(A,null,{body:t(()=>[n(b,{"data-testid":"applications-table","fetcher-cache-key":e.fetcherCacheKey,fetcher:e.fetcher,"has-side-border":"","has-error":e.currentState.matches("error"),"is-loading":e.currentState.matches("pending"),headers:e.tableHeaders,"is-clickable":"","is-small":"",class:"applications-table","pagination-page-sizes":e.paginationConfig.paginationPageSizes,"initial-fetcher-params":{pageSize:e.paginationConfig.initialPageSize},"onRow:click":l[0]||(l[0]=(o,T)=>e.$router.push({name:"show-application",params:{application_id:T.id}}))},{name:t(({row:o})=>[r(a(o.name),1)]),actions:t(({row:o})=>[(k(),$(h,{key:o.id},{content:t(()=>[e.isDcr?(k(),z("div",{key:0,"data-testid":"dropdown-refresh-application-dcr-token",class:"py-2 px-3 type-md cursor-pointer",onClick:T=>e.handleRefreshSecret(o.id)},a(e.helpText.refreshSecret),9,Y)):Q("",!0),u("div",{"data-testid":"dropdown-delete-application",class:"py-2 px-3 type-md cursor-pointer delete-item",onClick:T=>e.deleteItem=o},a(e.helpText.delete),9,Z)]),_:2},1024))]),"empty-state":t(()=>[n(v,{title:e.helpText.noApp},{message:t(()=>[u("p",null,[n(S,{"data-testid":"create-application-link",to:{name:"create-application"}},{default:t(()=>[r(a(e.helpText.create),1)]),_:1}),r(" "+a(e.helpText.getStarted),1)])]),_:1},8,["title"])]),"error-state":t(()=>[n(v,{"is-error":"",title:e.helpText.noApp},{message:t(()=>[u("p",null,a("Error: "+e.errorMessage),1)]),_:1},8,["title"])]),_:1},8,["fetcher-cache-key","fetcher","has-error","is-loading","headers","pagination-page-sizes","initial-fetcher-params"])]),_:1})]),n(M,{title:e.modalTitle,"is-visible":!!e.deleteItem,"action-button-text":e.helpText.delete,"action-button-appearance":"danger",class:"delete-modal",onCanceled:l[2]||(l[2]=o=>e.deleteItem=null)},{"header-content":t(()=>[r(a(e.modalTitle),1)]),"body-content":t(()=>[r(a(e.helpText.deleteDialog(e.deleteItem.name)),1)]),"footer-content":t(()=>[n(p,{appearance:"danger","is-rounded":!1,class:"mr-3",onClick:e.handleDelete},{default:t(()=>[r(a(e.helpText.delete),1)]),_:1},8,["onClick"]),n(p,{appearance:"secondary","is-rounded":!1,onClick:l[1]||(l[1]=o=>e.deleteItem=null)},{default:t(()=>[r(a(e.helpText.cancel),1)]),_:1})]),_:1},8,["title","is-visible","action-button-text"]),n(E,{"is-visible":e.showSecretModal,token:e.token,onClosed:e.onModalClose},null,8,["is-visible","token","onClosed"])]),_:1})}const de=q(U,[["render",x]]);export{de as default};
