import{u as S,_ as P,a as E}from"./index-ba3bee82.js";import{i as o,q as u,ae as M,f as c,j as v,k as _,v as l,l as i,t as g,F as T,n as b,u as B,d as x,s as $,z as j,af as G,a as f,c as H,w as O,ag as U,J as F,A as W}from"./vue-62e5e94d.js";import"./kongponents-5a8d94e7.js";const q={xmlns:"http://www.w3.org/2000/svg",width:"263",height:"144",fill:"none"},J=M('<rect width="100" height="120" x="163" y="24" fill="var(--section_colors-tertiary)" rx="8"></rect><rect width="98" height="118" x="164" y="25" stroke="var(--section_colors-stroke)" stroke-dasharray="8 4" stroke-linejoin="round" stroke-width="2" rx="7"></rect><rect width="100" height="120" y="24" fill="var(--section_colors-tertiary)" rx="8"></rect><rect width="98" height="118" x="1" y="25" stroke="var(--section_colors-stroke)" stroke-dasharray="8 4" stroke-linejoin="round" stroke-width="2" rx="7"></rect><g filter="url(#a)"><rect width="100" height="120" x="81" y="2" fill="var(--section_colors-tertiary)" rx="8"></rect><rect width="98" height="118" x="82" y="3" stroke="var(--section_colors-stroke)" stroke-dasharray="8 4" stroke-linejoin="round" stroke-width="2" rx="7"></rect></g><path fill="var(--section_colors-stroke)" d="M128.911 68.506c.028-1.6.217-2.864.566-3.793.35-.927 1.062-1.956 2.138-3.086l2.746-2.724c1.174-1.278 1.761-2.65 1.761-4.115 0-1.413-.384-2.516-1.153-3.31-.768-.806-1.886-1.21-3.354-1.21-1.425 0-2.571.364-3.437 1.09-.867.726-1.3 1.701-1.3 2.925H123c.028-2.179.831-3.934 2.411-5.266 1.593-1.345 3.661-2.017 6.204-2.017 2.641 0 4.696.686 6.163 2.058 1.481 1.358 2.222 3.228 2.222 5.608 0 2.354-1.132 4.674-3.396 6.96l-2.285 2.18c-1.02 1.09-1.53 2.656-1.53 4.7h-3.878zm-.167 6.396c0-.605.188-1.11.565-1.513.392-.417.965-.626 1.719-.626.755 0 1.328.209 1.719.626.392.403.587.908.587 1.513 0 .605-.195 1.11-.587 1.513-.391.39-.964.585-1.719.585-.754 0-1.327-.195-1.719-.585-.377-.404-.565-.908-.565-1.513z"></path><defs><filter id="a" width="108" height="128" x="77" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>',7),Q=[J];function X(e,t){return o(),u("svg",q,Q)}const Y={render:X},Z={name:"CatalogItem",props:{product:{type:Object,default:()=>{}},loading:{type:Boolean,default:!1}},data(){return{helpText:S().state.helpText.catalogItem}},computed:{version(){return this.product.latestVersion},versionLabel(){return this.product.versionCount===1?"Version: ":"Versions: "}}};const ee={key:0,class:"products-card-title"},te={class:"products-card-title truncate"},ae={class:"description color-text_colors-secondary"},oe={class:"mt-auto pt1"},se={class:"details-item"},ne={key:0,class:"my-2 color-text_colors-secondary"},re={class:"mr-2"},ie={class:"docs-links"},le={class:"details-item"},ce={key:0,class:"details-item"};function de(e,t,a,m,p,h){const r=c("KSkeletonBox"),s=c("router-link"),d=c("KBadge"),n=c("KIcon"),k=c("KCard");return o(),v(k,{class:"show-docs"},{title:_(()=>[a.loading?(o(),u("p",ee,[l(r,{width:"10"})])):(o(),v(s,{key:1,to:`/spec/${a.product.id}`},{default:_(()=>[i("p",te,g(a.product.title),1)]),_:1},8,["to"]))]),body:_(()=>[i("p",ae,[a.loading?(o(),u(T,{key:0},[l(r,{width:"100"}),l(r,{width:"50"}),l(r,{width:"75"})],64)):(o(),u(T,{key:1},[b(g(a.product.description),1)],64))]),i("ul",oe,[i("li",se,[h.version?(o(),u("span",ne,[a.loading?(o(),v(r,{key:0,width:"2"})):(o(),u(T,{key:1},[i("span",re,g(p.helpText.latestVersion),1),l(d,{color:"var(--text_colors-secondary)","background-color":"var(--section_colors-accent)",class:"product-version"},{default:_(()=>[b(g(h.version.name),1)]),_:1})],64))])):B("",!0)]),i("li",ie,[i("div",le,[a.loading?(o(),v(r,{key:0,width:"50"})):(o(),v(s,{key:1,to:{name:"spec",params:{product:a.product.id}},class:"link"},{default:_(()=>[b(g(p.helpText.specificationLink)+" ",1),l(n,{icon:"arrowRight",size:"16",color:"var(--text_colors-link)",class:"link-icon"})]),_:1},8,["to"]))]),a.product.documentCount?(o(),u("div",ce,[a.loading?(o(),v(r,{key:0,width:"50"})):(o(),v(s,{key:1,to:{name:"api-documentation-page",params:{product:a.product.id}},class:"link"},{default:_(()=>[b(g(p.helpText.documentationLink)+" ",1),l(n,{icon:"arrowRight",size:"16",color:"var(--text_colors-link)",class:"link-icon"})]),_:1},8,["to"]))])):B("",!0)])])]),_:1})}const ue=P(Z,[["render",de],["__scopeId","data-v-dfecdd98"]]),ge=x({name:"PaginationBar",props:{totalCount:{type:Number,default:0},pageSize:{type:Number,default:12},searchTriggered:Boolean},emits:["pageChanged"],data(){return{currentPage:1,buttonDisabled:"pageBack"}},watch:{searchTriggered(e){e===!0&&this.returnToFirstPage()}},methods:{getPaginationString(){let e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;return e++,t>this.totalCount&&(t=this.totalCount),e+" - "+t+" of "+this.totalCount},pageForward(){if(this.buttonDisabled==="pageForward")return;this.currentPage++,(this.currentPage-1)*this.pageSize+this.pageSize>=this.totalCount?this.buttonDisabled="pageForward":this.buttonDisabled="",this.$emit("pageChanged",this.currentPage)},pageBack(){this.buttonDisabled!=="pageBack"&&(this.currentPage--,this.currentPage===1?this.buttonDisabled="pageBack":this.buttonDisabled="",this.$emit("pageChanged",this.currentPage))},returnToFirstPage(){this.buttonDisabled="pageBack",this.currentPage=1,this.$emit("pageChanged",this.currentPage)},goToLastPage(){this.buttonDisabled="pageForward",this.currentPage=Math.ceil(this.totalCount/this.pageSize),this.$emit("pageChanged",this.currentPage)}}});const pe={key:0,class:"card-pagination-bar flex items-center justify-end"},he={class:"pagination-text type-lg color-text_colors-secondary mr-4"};function me(e,t,a,m,p,h){const r=c("KIcon");return!e.searchTriggered&&e.totalCount>e.pageSize?(o(),u("div",pe,[i("span",he,g(e.getPaginationString()),1),i("div",null,[i("button",{class:$(["pagination-button",e.buttonDisabled==="pageBack"?"disabled":""]),"data-testid":"pagination-first",onClick:t[0]||(t[0]=(...s)=>e.returnToFirstPage&&e.returnToFirstPage(...s))},[l(r,{width:"16",height:"16","view-box":"0 0 16 16",icon:"collapseExpand"})],2),i("button",{class:$(["pagination-button",e.buttonDisabled==="pageBack"?"disabled":""]),"data-testid":"pagination-backwards",onClick:t[1]||(t[1]=(...s)=>e.pageBack&&e.pageBack(...s))},[l(r,{width:"16",height:"16","view-box":"0 0 16 8",icon:"back"})],2),i("button",{class:$(["pagination-button",e.buttonDisabled==="pageForward"?"disabled":""]),"data-testid":"pagination-forwards",onClick:t[2]||(t[2]=(...s)=>e.pageForward&&e.pageForward(...s))},[l(r,{width:"16",height:"16","view-box":"0 0 16 8",icon:"forward"})],2),i("button",{class:$(["pagination-button",e.buttonDisabled==="pageForward"?"disabled":""]),"data-testid":"pagination-last",onClick:t[3]||(t[3]=(...s)=>e.goToLastPage&&e.goToLastPage(...s))},[l(r,{icon:"collapseExpand",class:"kong-pag-last",width:"16",height:"16","view-box":"0 0 16 16"})],2)])])):B("",!0)}const _e=P(ge,[["render",me],["__scopeId","data-v-7da7e4ad"]]),fe={name:"CatalogCardList",components:{CatalogItem:ue,PaginationBar:_e},props:{products:{type:Array,default:()=>[]},pageSize:{type:Number,default:12},totalCount:{type:Number,default:0},searchTriggered:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["page-changed"],methods:{onPageChanged(e){this.$emit("page-changed",e)}}},ve={class:"container max-w-screen-2xl mx-auto catalog-card-view"},ye={class:"w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"};function be(e,t,a,m,p,h){const r=c("CatalogItem"),s=c("PaginationBar");return o(),u("div",ve,[i("div",ye,[(o(!0),u(T,null,j(a.products,(d,n)=>(o(),v(r,{key:d.id+n,class:"catalog-item",product:d,"has-documentation":d.documentCount>0,loading:a.loading},null,8,["product","has-documentation","loading"]))),128))]),l(s,{class:"catalog-pagination mt-4","page-size":a.pageSize,"total-count":a.totalCount,"search-triggered":a.searchTriggered,onPageChanged:h.onPageChanged},null,8,["page-size","total-count","search-triggered","onPageChanged"])])}const ke=P(fe,[["render",be]]),we=x({name:"CatalogTableList",props:{products:{type:Array,default:()=>[]}},setup(e){const t=G(),a=S().state.helpText.catalogTable,m=f(0),p=H(()=>m.value.toString()),h=()=>{m.value+=1};function r(d,n){t.push({path:`/spec/${n.id}`})}function s(){return{total:e.products.length,data:e.products}}return O(()=>e.products,()=>{h()},{deep:!0}),{handleRowClick:r,fetcher:s,fetcherCacheKey:p,helpText:a}},data(){return{tableHeaders:[{label:"Title",key:"title"},{label:"Description",key:"description"},{label:"Latest Version",key:"latestVersion"},{label:"Details",key:"links"}]}}});const Ce={class:"max-w-screen-2xl mx-auto"};function Pe(e,t,a,m,p,h){const r=c("KBadge"),s=c("router-link"),d=c("KTable");return o(),u("div",Ce,[l(d,{fetcher:e.fetcher,"fetcher-cache-key":e.fetcherCacheKey,"has-side-border":"",headers:e.tableHeaders,"is-small":"","is-clickable":"","disable-pagination":"","onRow:click":e.handleRowClick},{title:_(({rowValue:n})=>[b(g(n),1)]),latestVersion:_(({row:n})=>[i("div",null,[n.latestVersion?(o(),v(r,{key:0,color:"var(--text_colors-secondary)","background-color":"var(--section_colors-accent)",class:"product-version"},{default:_(()=>[b(g(n.latestVersion.name),1)]),_:2},1024)):B("",!0)])]),links:_(({row:n})=>[l(s,{to:{name:"spec",params:{product:n.id}},class:"link"},{default:_(()=>[b(g(e.helpText.specificationLink),1)]),_:2},1032,["to"]),n.documentCount?(o(),v(s,{key:0,to:{name:"api-documentation-page",params:{product:n.id}},class:"link"},{default:_(()=>[b(g(e.helpText.documentationLink),1)]),_:2},1032,["to"])):B("",!0)]),_:1},8,["fetcher","fetcher-cache-key","headers","onRow:click"])])}const Te=P(we,[["render",Pe],["__scopeId","data-v-d520ddaa"]]),Be=x({name:"Catalog",components:{CatalogCardList:ke,CatalogTableList:Te,EmptyState:Y},props:{catalogItems:{type:Array,default:()=>[]},cardsPerPage:{type:Number,default:12},totalCount:{type:Number,default:0},searchTriggered:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["cards-page-changed","active-view-changed"],setup(){const e=S().state.helpText.catalog,t=e.entityTypeProduct,a=e.noResultsProduct;return{helpText:e,catalogTitle:t,noResultsMessage:a}},data(){return{activeView:"grid"}},computed:{disabled(){return this.catalogItems.length===0?!0:null}},mounted(){const e=localStorage.getItem("portal-catalog-view")||"grid";this.setActiveView(e)},methods:{setActiveView(e){this.activeView=e,localStorage.setItem("portal-catalog-view",e),this.$emit("active-view-changed",e)}}});const $e={class:"products-content px-5"},Se={class:"container max-w-screen-2xl mx-auto mt-6 mb-5 flex justify-between"},xe={class:"products-label"},Ve={key:0,class:"product-catalog-empty-state"},Ie={class:"product-catalog-no-products type-lg color-text_colors-secondary"},Ke={key:1,class:"product-catalog-loading-spinner"},ze={key:1};function Fe(e,t,a,m,p,h){const r=c("KViewSwitcher"),s=c("EmptyState"),d=c("KSkeleton"),n=c("CatalogCardList"),k=c("CatalogTableList");return o(),u("div",$e,[i("div",Se,[i("span",xe,g(e.catalogTitle),1),l(r,{"data-testid":"view-switcher",disabled:e.disabled,view:e.activeView,onViewChanged:e.setActiveView},null,8,["disabled","view","onViewChanged"])]),e.catalogItems.length?(o(),u("div",ze,[e.activeView=="grid"?(o(),v(n,{key:0,products:e.catalogItems,"page-size":e.cardsPerPage,"total-count":e.totalCount,"search-triggered":e.searchTriggered,loading:e.loading,onPageChanged:t[0]||(t[0]=V=>e.$emit("cards-page-changed",V))},null,8,["products","page-size","total-count","search-triggered","loading"])):(o(),v(k,{key:1,products:e.catalogItems},null,8,["products"]))])):(o(),u("div",Ve,[i("div",Ie,[e.loading?(o(),u("div",Ke,[l(d,{"delay-milliseconds":0})])):(o(),u(T,{key:0},[l(s,{class:"mb-2 mx-auto"}),b(" "+g(e.noResultsMessage),1)],64))])]))])}const Le=P(Be,[["render",Fe],["__scopeId","data-v-5fb072b7"]]);function Ae(e,t=300){let a;return function(...m){const p=this;a&&clearTimeout(a),a=setTimeout(function(){e.apply(p,m),a=null},t)}}const De=x({name:"ProductCatalogWrapper",components:{Catalog:Le},setup(){const e=f({backgroundImage:""}),t=f(""),a=f(""),m=f(12),p=f(""),h=f([]),r=f(void 0),s=f(null),d=f(!1),n=f(void 0),k=f(1),V=S().state.helpText.products,{portalApiV2:I}=E(),L=async()=>I.value.service.portalApi.getPortalAppearance().then(y=>{const w=y.data.variables.catalog;if(w.welcome_message&&(t.value=w.welcome_message.text),w.primary_header&&(a.value=w.primary_header.text),w.cover){const z=I.value.getApiLink("/api/v2/portal/catalog-cover");e.value.backgroundImage=`url(${z})`}}).catch(y=>{console.error("Failed to load appearance.",y)}).then(A),A=()=>{t.value||(t.value="Welcome to our API Portal!"),a.value||(a.value="Start building and innovating with our APIs")},D=Ae(async()=>{d.value=!0,k.value=1;try{return await K()}finally{d.value=!1}}),K=async()=>{s.value=!0;try{try{const{data:y}=await I.value.service.searchApi.searchPortalEntities({indices:"product-catalog",q:p.value,pageNumber:k.value,pageSize:m.value,join:"versions"}),{data:w,meta:z}=y;h.value=w.map(({source:C})=>({id:C.id,title:C.name,latestVersion:C.latest_version,description:C.description,documentCount:C.document_count,versionCount:C.version_count})),r.value=z.page.total}catch(y){console.error("failed to find Service Packages",y)}}finally{s.value=null}},N=y=>{h.value=[],n.value=y,K()},R=y=>{k.value=y,d.value||K()};return U(async()=>{await L()}),{catalog_cover_style:e,welcome_message:t,primary_header:a,cardsPerPage:m,searchString:p,catalogItems:h,totalCount:r,loading:s,searchTriggered:d,catalogView:n,catalogPageNumber:k,helpText:V,searchProducts:D,catalogViewChanged:N,catalogPageChanged:R}}});const Ne={class:"dev-portal-products"},Re={class:"products-welcome mb-4 font-normal color-text_colors-secondary text-2xl"},Ee={class:"products-title mb-5 font-normal color-text_colors-hero text-4xl"},Me={class:"w-full max-w-lg mx-auto inline-flex"};function je(e,t,a,m,p,h){const r=c("KInput"),s=c("KButton"),d=c("Catalog");return o(),u("div",Ne,[i("div",{class:"products-top-section flex flex-col items-center justify-center py-16 bg-section_colors-hero",style:W(e.catalog_cover_style)},[i("h4",Re,g(e.welcome_message),1),i("h1",Ee,g(e.primary_header),1),i("div",Me,[i("form",{id:"searchProductsForm",onSubmit:t[1]||(t[1]=F((...n)=>e.searchProducts&&e.searchProducts(...n),["prevent"])),onReset:t[2]||(t[2]=F((...n)=>e.searchProducts&&e.searchProducts(...n),["prevent"]))},[l(r,{modelValue:e.searchString,"onUpdate:modelValue":t[0]||(t[0]=n=>e.searchString=n),class:"k-input--full",size:"small",type:"search",placeholder:e.helpText.search,"data-testid":"catalog-search",form:"searchProductsForm",onInput:e.searchProducts},null,8,["modelValue","placeholder","onInput"]),l(s,{form:"searchProductsForm",appearance:"primary","data-testid":"catalog-search-button",type:"submit",size:"small",disabled:e.loading,"is-rounded":!1},{default:_(()=>[b(g(e.searchString!==""&&e.loading?e.helpText.searching:e.helpText.search),1)]),_:1},8,["disabled"])],32)])],4),l(d,{"catalog-items":e.catalogItems,"cards-per-page":e.cardsPerPage,"total-count":e.totalCount,"search-triggered":e.searchTriggered,loading:e.loading,onActiveViewChanged:e.catalogViewChanged,onCardsPageChanged:e.catalogPageChanged},null,8,["catalog-items","cards-per-page","total-count","search-triggered","loading","onActiveViewChanged","onCardsPageChanged"])])}const Ue=P(De,[["render",je]]);export{Ue as default};
