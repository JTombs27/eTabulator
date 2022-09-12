"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52],{800:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(3645),l=o.n(r)()((function(e){return e[1]}));l.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const n=l},7052:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var r=o(821),l=(0,r.createElementVNode)("title",null,"Soa Travels",-1),n={class:"row gap-10 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},c=(0,r.createElementVNode)("h3",null,"Statement of Accounts",-1),s={class:"peers"},i={class:"peer mR-10"},d={key:0,class:"peer"},m=(0,r.createTextVNode)("Add Merge"),p=(0,r.createElementVNode)("label",null,"Sample Inputs",-1),u=(0,r.createElementVNode)("input",{type:"text",class:"form-control"},null,-1),v={class:"col-12"},h={class:"table responsive bgc-white p-20 bd shadow-sm"},N={class:"table table-hover"},f=(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("th",{scope:"col"},"Ticket Number"),(0,r.createElementVNode)("th",{scope:"col"},"Office"),(0,r.createElementVNode)("th",{scope:"col"},"Cafoa Number"),(0,r.createElementVNode)("th",{scope:"col"},"Date From"),(0,r.createElementVNode)("th",{scope:"col"},"Date To"),(0,r.createElementVNode)("th",{scope:"col",style:{"text-align":"right"}},"Total Liters"),(0,r.createElementVNode)("th",{scope:"col",style:{"text-align":"right"}},"Total Price"),(0,r.createElementVNode)("th",{scope:"col",style:{"text-align":"right"}},"Action")])],-1),V={class:"text-end"},E={class:"text-end"},w={style:{"text-align":"right"}},g={class:"dropdown dropstart"},b=(0,r.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),k={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},x=["onClick"],y=[(0,r.createElementVNode)("span",null,[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",class:"bi bi-printer me-2",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),(0,r.createElementVNode)("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})]),(0,r.createTextVNode)("SOA Report")],-1)],C=(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("hr",{class:"dropdown-divider action-divider"})],-1),B=(0,r.createTextVNode)("Details"),T=(0,r.createTextVNode)("Delete"),S={class:"row justify-content-center"},F={class:"col-md-12"};var D=o(1175);const M={components:{Pagination:o(3532).Z,Filtering:D.Z},props:{soaTravel:Object,filters:Object,can:Object},data:function(){return{search:this.$props.filters.search,confirm:!1,filter:!1,showModal:!1,permissions:[],selectedPermissions:[],selectedUser:""}},watch:{search:_.debounce((function(e){this.$inertia.get("/soatravels",{search:e},{preserveScroll:!0,preserveState:!0,replace:!0})}),300)},methods:{deleteSoaTravel:function(e){1==confirm("WARNING!\nAre you sure you want to delete the record?")&&this.$inertia.delete("/soatravels/"+e)},soaTravelReport:function(e){window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2FsoaTravelReport&standAlone=true&decorate=no&soa_travel="+e,"_blank")},showFilter:function(){this.filter=!this.filter}}};const z=(0,o(3744).Z)(M,[["render",function(e,t,o,_,D,M){var z=(0,r.resolveComponent)("Head"),R=(0,r.resolveComponent)("Link"),Z=(0,r.resolveComponent)("filtering"),A=(0,r.resolveComponent)("pagination");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(z,null,{default:(0,r.withCtx)((function(){return[l]})),_:1}),(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",a,[c,(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",i,[(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return D.search=e}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[r.vModelText,D.search]])]),o.can.canCreateSoaTravel?((0,r.openBlock)(),(0,r.createElementBlock)("div",d,[(0,r.createVNode)(R,{class:"btn btn-primary btn-sm",href:"/soatravels/merge"},{default:(0,r.withCtx)((function(){return[m]})),_:1})])):(0,r.createCommentVNode)("",!0)])]),D.filter?((0,r.openBlock)(),(0,r.createBlock)(Z,{key:0,onCloseFilter:t[2]||(t[2]=function(e){return D.filter=!1})},{default:(0,r.withCtx)((function(){return[p,u,(0,r.createElementVNode)("button",{class:"btn btn-sm btn-primary mT-5 text-white",onClick:t[1]||(t[1]=function(){})},"Filter")]})),_:1})):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("table",N,[f,(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.soaTravel.data,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:t},[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.ticket_no),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.office),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.cafoa_number),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.date_from),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.date_to),1),(0,r.createElementVNode)("td",V,(0,r.toDisplayString)(e.total_liters),1),(0,r.createElementVNode)("td",E,(0,r.toDisplayString)(e.totalPrice),1),(0,r.createElementVNode)("td",w,[(0,r.createElementVNode)("div",g,[b,(0,r.createElementVNode)("ul",k,[(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("button",{as:"button",class:"dropdown-item",onClick:function(t){return M.soaTravelReport(e.id)}},y,8,x)]),C,(0,r.createElementVNode)("li",null,[(0,r.createVNode)(R,{class:"dropdown-item",href:"/soatravels/".concat(e.id,"/details")},{default:(0,r.withCtx)((function(){return[B]})),_:2},1032,["href"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(R,{class:"text-danger dropdown-item",onClick:function(t){return M.deleteSoaTravel(e.id)}},{default:(0,r.withCtx)((function(){return[T]})),_:2},1032,["onClick"])])])])])])})),128))])]),(0,r.createElementVNode)("div",S,[(0,r.createElementVNode)("div",F,[(0,r.createVNode)(A,{next:o.soaTravel.next_page_url,prev:o.soaTravel.prev_page_url},null,8,["next","prev"])])])])])])],64)}]])},1175:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(821),l={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},n={class:"row",style:{width:"380px"}},a={class:"bgc-white"},c={class:"modal-header"},s=(0,r.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Advanced Filtering",-1),i={class:"modal-body"};const d={};var m=o(3379),p=o.n(m),u=o(800),v={insert:"head",singleton:!1};p()(u.Z,v);u.Z.locals;const h=(0,o(3744).Z)(d,[["render",function(e,t,o,d,m,p){return(0,r.openBlock)(),(0,r.createElementBlock)("div",l,[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",c,[s,(0,r.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,r.createElementVNode)("div",i,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},3532:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(821),l={class:"pagination"},n={class:"page-item"},a=(0,r.createTextVNode)("Previous"),c={class:"page-item"},s=(0,r.createTextVNode)("Next");const i={props:{prev:String,next:String}};const d=(0,o(3744).Z)(i,[["render",function(e,t,o,i,d,m){var p=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("ul",l,[(0,r.createElementVNode)("li",n,[o.prev?((0,r.openBlock)(),(0,r.createBlock)(p,{key:0,class:"page-link",href:o.prev,"preserve-scroll":"","preserve-state":""},{default:(0,r.withCtx)((function(){return[a]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!o.prev}])},"Previous",2))]),(0,r.createElementVNode)("li",c,[o.next?((0,r.openBlock)(),(0,r.createBlock)(p,{key:0,class:"page-link",href:o.next,"preserve-scroll":"","preserve-state":""},{default:(0,r.withCtx)((function(){return[s]})),_:1},8,["href"])):((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:1,class:(0,r.normalizeClass)(["page-link",{"text-muted":!o.next}])},"Next",2))])])])}]])}}]);