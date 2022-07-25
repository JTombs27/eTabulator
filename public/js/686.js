"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[686],{5686:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var i=o(821),r={class:"row gap-20 masonry pos-r"},c={class:"peers fxw-nw jc-sb ai-c"},a={class:"row justify-content-center"},n={class:"col-md-6 p-20 bd"},l={class:"row"},s={class:"col-12",style:{"margin-top":"-15px"}},d={class:"col-12 bgc-white p-10 bd",style:{"margin-top":"10px"}},f={class:"row"},m={class:"col-12"},u={class:"peers fxw-nw jc-sb ai-c"},p=(0,i.createElementVNode)("label",{for:""},"Office Selection",-1),h=["onClick"],v=[(0,i.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",style:{"font-size":"18px","font-weight":"bolder",color:"red"},fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,i.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,i.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1)],b={key:0,class:"fs-6 c-red-500"},g={class:"row"},V={class:"col-12"},N=(0,i.createElementVNode)("label",{for:""},"Amount",-1),k=["onUpdate:modelValue"],E={key:0,class:"fs-6 c-red-500"},w={class:"row"},y={class:"col-12"},G=["disabled"];var C=o(9038);const B={props:{editData:Object},data:function(){return{form:(0,C.cI)(),officeGroup:[{office_id:"",amount:"",id:""}],offices:[],pageTitle:"",loading:!1,disableOffice:!1,backToMyUrl:"/charges"}},mounted:function(){void 0!==this.editData?(this.loading=!0,this.pageTitle="Edit",this.officeGroup[0].office_id=this.editData.office_id,this.officeGroup[0].amount=this.editData.amount,this.officeGroup[0].id=this.editData.id,this.disableOffice=!0):(this.pageTitle="Add",this.disableOffice=!1),this.loadOffice()},methods:{submit:function(){var e=this;void 0!==this.editData?(this.form.transform((function(t){return{data:t,officeGroup:e.officeGroup}})),this.form.patch("/charges/"+this.editData.id,this.form)):(this.form.transform((function(t){return{data:t,officeGroup:e.officeGroup}})),this.form.post("/charges/store",this.form))},addNew:function(){this.officeGroup.push((0,C.cI)({office_id:"",amount:"",id:null}))},removeNode:function(e){this.officeGroup.splice(e,1)},loadOffice:function(){var e=this;axios.get("/offices/fetch").then((function(t){e.offices=t.data}))},backToMain:function(){this.$inertia.get("/charges")}}};const D=(0,o(3744).Z)(B,[["render",function(e,t,o,C,B,D){var x=(0,i.resolveComponent)("back-button"),_=(0,i.resolveComponent)("Select2");return(0,i.openBlock)(),(0,i.createElementBlock)("div",r,[(0,i.createElementVNode)("div",c,[(0,i.createElementVNode)("h3",null,(0,i.toDisplayString)(B.pageTitle)+" Charges ",1),(0,i.createVNode)(x,{href:B.backToMyUrl},null,8,["href"])]),(0,i.createElementVNode)("div",a,[(0,i.createElementVNode)("div",n,[(0,i.createElementVNode)("div",l,[(0,i.createElementVNode)("div",s,[void 0===o.editData?((0,i.openBlock)(),(0,i.createElementBlock)("button",{key:0,type:"button",onClick:t[0]||(t[0]=function(e){return D.addNew()}),class:"btn btn-sm btn-secondary pull-right"},"+")):(0,i.createCommentVNode)("",!0)])]),(0,i.createElementVNode)("form",{onSubmit:t[2]||(t[2]=(0,i.withModifiers)((function(e){return D.submit()}),["prevent"])),id:"mainForm"},[((0,i.openBlock)(!0),(0,i.createElementBlock)(i.Fragment,null,(0,i.renderList)(B.officeGroup,(function(e,t){return(0,i.openBlock)(),(0,i.createElementBlock)("div",{class:"row",key:t},[(0,i.createElementVNode)("div",d,[(0,i.createElementVNode)("div",f,[(0,i.createElementVNode)("div",m,[(0,i.createElementVNode)("div",u,[p,void 0===o.editData&&1!==B.officeGroup.length?((0,i.openBlock)(),(0,i.createElementBlock)("span",{key:0,onClick:function(e){return D.removeNode(t)},style:{"margin-top":"-10px"}},v,8,h)):(0,i.createCommentVNode)("",!0)]),(0,i.createVNode)(_,{modelValue:e.office_id,"onUpdate:modelValue":function(t){return e.office_id=t},options:B.offices,disabled:B.disableOffice},null,8,["modelValue","onUpdate:modelValue","options","disabled"]),B.form.errors["officeGroup."+t+".office_id"]||B.form.errors["officeGroup."+t+".office_idX"]?((0,i.openBlock)(),(0,i.createElementBlock)("div",b,(0,i.toDisplayString)(B.form.errors["officeGroup."+t+".office_id"]||B.form.errors["officeGroup."+t+".office_idX"]),1)):(0,i.createCommentVNode)("",!0)])]),(0,i.createElementVNode)("div",g,[(0,i.createElementVNode)("div",V,[N,(0,i.withDirectives)((0,i.createElementVNode)("input",{type:"text","onUpdate:modelValue":function(t){return e.amount=t},class:"form-control",autocomplete:"chrome-off",placeholder:"00.00"},null,8,k),[[i.vModelText,e.amount]]),B.form.errors["officeGroup."+t+".amount"]?((0,i.openBlock)(),(0,i.createElementBlock)("div",E,(0,i.toDisplayString)(B.form.errors["officeGroup."+t+".amount"]),1)):(0,i.createCommentVNode)("",!0)])])])])})),128)),(0,i.createElementVNode)("div",w,[(0,i.createElementVNode)("div",y,[(0,i.createElementVNode)("button",{type:"button",class:"btn btn-primary pull-right mt-3",onClick:t[1]||(t[1]=function(e){return D.submit()}),disabled:B.form.processing},(0,i.toDisplayString)("Add"==B.pageTitle?"Save/Create":"Save Changes"),9,G)])])],32)])])])}]])}}]);