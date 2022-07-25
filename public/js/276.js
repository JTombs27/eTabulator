"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[276],{4276:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(821),l={class:"row gap-20 masonry pos-r"},n={class:"peers fxw-nw jc-sb ai-c"},r=(0,i.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,i.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,i.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),a={class:"col-md-8"},c=(0,i.createElementVNode)("label",{for:""},"Plate number",-1),s=(0,i.createElementVNode)("label",{for:""},"Date",-1),d={key:0,class:"fs-6 c-red-500"},h=(0,i.createElementVNode)("label",{for:""},"Condition",-1),m=[(0,i.createElementVNode)("option",{disabled:"",value:""},"Select Status",-1),(0,i.createElementVNode)("option",null,"Good Condition",-1),(0,i.createElementVNode)("option",null,"On-repair",-1),(0,i.createElementVNode)("option",null,"Wasted",-1)],u={key:1,class:"fs-6 c-red-500"},f=["disabled"],v=(0,i.createElementVNode)("div",null,null,-1);var p=o(9038);const V={props:{vehicle:Object,editData:Object},data:function(){return{confirm:!1,filter:!1,showModal:!1,_disbled:!0,PLATENO:"",button_label:"",form:(0,p.cI)({id:"",vehicles_id:"",vehicle_status_date:"",plate_no:"",condition:""}),pageTitle:"Add Vehicle Status",loading:!1}},mounted:function(){this.editData?(this.pageTitle="Edit Vehicle Status",this.form.id=this.vehicle.id,this.form.vehicles_id=this.vehicle.vehicles_id,this.form.vehicle_status_date=this.vehicle.vehicle_status_date,this.form.plate_no=this.vehicle.plate_no,this.form.condition=this.vehicle.condition,this.vehicleid=this.vehicle.vehicles_id):(this.pageTitle="Add Vehicle Status",this.form.plate_no=this.vehicle.PLATENO,this.form.vehicles_id=this.vehicle.id,this.vehicleid=this.vehicle.id)},methods:{submit:function(){this.editData?this.form.patch("/VehicleStatus/"+this.form.id,this.form):this.form.post("/VehicleStatus",this.form)},Edit:function(){this._disbled=!1}}};const b=(0,o(3744).Z)(V,[["render",function(e,t,o,p,V,b){var _=(0,i.resolveComponent)("back-button");return(0,i.openBlock)(),(0,i.createElementBlock)(i.Fragment,null,[(0,i.createElementVNode)("div",l,[(0,i.createElementVNode)("div",n,[(0,i.createElementVNode)("h3",null,(0,i.toDisplayString)(V.pageTitle),1),(0,i.createVNode)(_,{href:"/VehicleStatus/"+e.vehicleid},{default:(0,i.withCtx)((function(){return[r]})),_:1},8,["href"])]),(0,i.createElementVNode)("div",a,[(0,i.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,i.withModifiers)((function(e){return b.submit()}),["prevent"]))},[c,(0,i.withDirectives)((0,i.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return V.form.plate_no=e}),class:"form-control",autocomplete:"chrome-off",disabled:"",readonly:""},null,512),[[i.vModelText,V.form.plate_no]]),s,(0,i.withDirectives)((0,i.createElementVNode)("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=function(e){return V.form.vehicle_status_date=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[i.vModelText,V.form.vehicle_status_date]]),V.form.errors.vehicle_status_date?((0,i.openBlock)(),(0,i.createElementBlock)("div",d,(0,i.toDisplayString)(V.form.errors.vehicle_status_date),1)):(0,i.createCommentVNode)("",!0),h,(0,i.withDirectives)((0,i.createElementVNode)("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return V.form.condition=e}),class:"form-select md"},m,512),[[i.vModelSelect,V.form.condition]]),V.form.errors.condition?((0,i.openBlock)(),(0,i.createElementBlock)("div",u,(0,i.toDisplayString)(V.form.errors.condition),1)):(0,i.createCommentVNode)("",!0),(0,i.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3",onClick:t[3]||(t[3]=function(e){return b.submit()}),disabled:V.form.processing},"save",8,f)],32)])]),v],64)}]])}}]);