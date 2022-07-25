"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857],{800:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(3645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const r=l},4857:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var o=n(821),l=(0,o.createElementVNode)("title",null,"Users",-1),r={class:"row gap-10 masonry pos-r"},s={class:"peers fxw-nw jc-sb ai-c"},c=(0,o.createElementVNode)("h3",null,"Users",-1),i={class:"peers"},a={class:"peer mR-10"},d={key:0,class:"peer"},m=(0,o.createTextVNode)("Add User"),u=(0,o.createElementVNode)("label",null,"Sample Inputs",-1),p=(0,o.createElementVNode)("input",{type:"text",class:"form-control"},null,-1),h={class:"col-12"},f={class:"bgc-white p-20 bd"},k={class:"table table-hover"},v=(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("th",{scope:"col"},"Active"),(0,o.createElementVNode)("th",{scope:"col"},"Name"),(0,o.createElementVNode)("th",{scope:"col"},"Email"),(0,o.createElementVNode)("th",{scope:"col",style:{width:"30%"}}),(0,o.createElementVNode)("th",{scope:"col",style:{"text-align":"right"}},"Action")])],-1),E={class:"form-check form-switch"},N=["id","checked","onChange"],V=["for"],b={class:"row g-3 align-items-center"},w={class:"col-12 col-lg-auto text-center text-lg-start"},g={class:"notification-title mb-1"},x={class:"badge bg-info me-1"},y={style:{"text-align":"right"}},B={class:"dropdown dropstart"},C=(0,o.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),M={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},P=(0,o.createTextVNode)("Edit"),F=["onClick"],S=(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("hr",{class:"dropdown-divider action-divider"})],-1),L={key:0},U=(0,o.createTextVNode)("Delete"),D={class:"row justify-content-center"},A={class:"col-md-12"},T={class:"pb-3"},Z={class:"form-check"},j=(0,o.createElementVNode)("label",{class:"form-check-label disable-select",for:"flexCheckDefault"}," Select all ",-1),z={class:"form-check checkbox-list"},O=["value","id"],H=["for"];var I=n(7757),R=n.n(I),G=n(1175),W={class:"pagination"};const q={props:{links:Array}};var J=n(3744);function K(e,t,n,o,l,r,s){try{var c=e[r](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(o,l)}const Q={components:{Pagination:(0,J.Z)(q,[["render",function(e,t,n,l,r,s){var c=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("ul",W,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.links,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:t,class:(0,o.normalizeClass)(["page-item",{active:e.active,disabled:!e.url}])},[(0,o.createVNode)(c,{class:"page-link",href:e.url,innerHTML:e.label,"preserve-scroll":""},null,8,["href","innerHTML"])],2)})),128))])])}]]),Filtering:G.Z},props:{users:Object,filters:Object,can:Object},data:function(){return{search:this.$props.filters.search,confirm:!1,filter:!1,showModal:!1,permissions:[],selectedPermissions:[],selectedUser:""}},watch:{search:_.debounce((function(e){this.$inertia.get("/users",{search:e},{preserveScroll:!0,preserveState:!0,replace:!0})}),300)},methods:{deleteUser:function(e){1==confirm("WARNING!\nAre you sure you want to delete the record?")&&this.$inertia.delete("/users/"+e)},showFilter:function(){this.filter=!this.filter},editPermissions:function(e){var t=this,n=_.find(this.users.data,{id:e});this.showModal=!0,this.selectedUser=e,this.selectedPermissions=[],_.forEach(n.permissions,(function(e){t.selectedPermissions.push(e.id)})),this.getAllPermissions()},updatePermissions:function(){this.$inertia.post("update-user-permissions",{user_id:this.selectedUser,permissions:this.selectedPermissions},{replace:!0}),$("#modal").hide(),$("body").removeClass("modal-open"),$("body").css("overflow","scroll"),$(".modal-backdrop").remove(),this.showModal=!1},closeModal:function(){this.showModal=!1},getAllPermissions:function(){var e,t=this;return(e=R().mark((function e(){return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.post("get-all-permissions").then((function(e){t.permissions=_.groupBy(e.data,"permission_group")}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,l){var r=e.apply(t,n);function s(e){K(r,o,l,s,c,"next",e)}function c(e){K(r,o,l,s,c,"throw",e)}s(void 0)}))})()},setStatus:function(e,t){this.$inertia.patch("/users/status/".concat(t),{is_check:e.target.checked})},selectOption:function(e){if(e.target.checked){var t=this.permissions.null.map((function(e){return e.id}));this.selectedPermissions=t}else this.selectedPermissions=[]}}},X=(0,J.Z)(Q,[["render",function(e,t,n,_,$,I){var R=(0,o.resolveComponent)("Head"),G=(0,o.resolveComponent)("Link"),W=(0,o.resolveComponent)("filtering"),q=(0,o.resolveComponent)("pagination"),J=(0,o.resolveComponent)("Modal");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(R,null,{default:(0,o.withCtx)((function(){return[l]})),_:1}),(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",s,[c,(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",a,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return $.search=e}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[o.vModelText,$.search]])]),n.can.createUser?((0,o.openBlock)(),(0,o.createElementBlock)("div",d,[(0,o.createVNode)(G,{class:"btn btn-primary btn-sm",href:"/users/create"},{default:(0,o.withCtx)((function(){return[m]})),_:1}),(0,o.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(e){return I.showFilter()})},"Filter")])):(0,o.createCommentVNode)("",!0)])]),$.filter?((0,o.openBlock)(),(0,o.createBlock)(W,{key:0,onCloseFilter:t[3]||(t[3]=function(e){return $.filter=!1})},{default:(0,o.withCtx)((function(){return[u,p,(0,o.createElementVNode)("button",{class:"btn btn-sm btn-primary mT-5 text-white",onClick:t[2]||(t[2]=function(){})},"Filter")]})),_:1})):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("table",k,[v,(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.users.data,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:t},[(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",E,[(0,o.createElementVNode)("input",{type:"checkbox",class:"form-check-input",role:"switch",id:e.id,checked:e.is_active,onChange:function(t){return I.setStatus(t,e.id)}},null,40,N),(0,o.createElementVNode)("label",{class:"form-check-label",for:e.id},null,8,V)])]),(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("p",g,(0,o.toDisplayString)(e.name),1)])])]),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(e.email),1),(0,o.createElementVNode)("td",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.permissions,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("div",x,(0,o.toDisplayString)(e.permission_name),1)})),256))]),(0,o.createElementVNode)("td",y,[(0,o.createElementVNode)("div",B,[C,(0,o.createElementVNode)("ul",M,[(0,o.createElementVNode)("li",null,[(0,o.createVNode)(G,{class:"dropdown-item",href:"/users/".concat(e.id,"/edit")},{default:(0,o.withCtx)((function(){return[P]})),_:2},1032,["href"])]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{class:"dropdown-item",href:"#",onClick:function(t){return I.editPermissions(e.id)}},"Permissions",8,F)]),S,n.can.canDeleteUser?((0,o.openBlock)(),(0,o.createElementBlock)("li",L,[(0,o.createVNode)(G,{class:"text-danger dropdown-item",onClick:function(t){return I.deleteUser(e.id)}},{default:(0,o.withCtx)((function(){return[U]})),_:2},1032,["onClick"])])):(0,o.createCommentVNode)("",!0)])])])])})),128))])]),(0,o.createElementVNode)("div",D,[(0,o.createElementVNode)("div",A,[(0,o.createVNode)(q,{links:n.users.links},null,8,["links"])])])])])]),$.showModal?((0,o.openBlock)(),(0,o.createBlock)(J,{key:0,modalTitle:"Permissions",onCloseModal:I.closeModal,onSaveModal:I.updatePermissions},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",T,[(0,o.createElementVNode)("div",Z,[(0,o.createElementVNode)("input",{class:"form-check-input",type:"checkbox",onChange:t[4]||(t[4]=function(e){return I.selectOption(e)}),id:"flexCheckDefault"},null,32),j])]),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)($.permissions,(function(e,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("div",z,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"checkbox",class:"form-check-input specific","onUpdate:modelValue":t[5]||(t[5]=function(e){return $.selectedPermissions=e}),value:e.id,id:"permission".concat(e.id)},null,8,O),[[o.vModelCheckbox,$.selectedPermissions]]),(0,o.createElementVNode)("label",{class:"form-check-label disable-select",for:"permission".concat(e.id)},(0,o.toDisplayString)(e.permission_name),9,H)])})),256))])})),256))]})),_:1},8,["onCloseModal","onSaveModal"])):(0,o.createCommentVNode)("",!0)],64)}]])},1175:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(821),l={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},r={class:"row",style:{width:"380px"}},s={class:"bgc-white"},c={class:"modal-header"},i=(0,o.createElementVNode)("h5",{class:"modal-title",id:"exampleModalLiveLabel"},"Advanced Filtering",-1),a={class:"modal-body"};const d={};var m=n(3379),u=n.n(m),p=n(800),h={insert:"head",singleton:!1};u()(p.Z,h);p.Z.locals;const f=(0,n(3744).Z)(d,[["render",function(e,t,n,d,m,u){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",c,[i,(0,o.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,o.createElementVNode)("div",a,[(0,o.renderSlot)(e.$slots,"default")])])])])}]])}}]);