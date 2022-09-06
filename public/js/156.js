"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[156],{7156:(e,o,t)=>{t.r(o),t.d(o,{default:()=>g});var r=t(821),l=(0,r.createElementVNode)("title",null,"Reports",-1),a={class:"row gap-20 masonry pos-r"},n={class:"masonry-item w-100"},i={key:0,class:"peers fxw-nw jc-sb ai-c"},s={class:"col-md-6 bgc-white p-20"},d={class:"mb-3 row"},c=(0,r.createElementVNode)("label",{for:"staticEmail",class:"col-sm-2 col-form-label"},"Offices",-1),f={class:"col-sm-10"},p={class:"row gap-20"},w={class:"col-md-3 mt-3"},m={class:"layers bd bgc-white p-20"},u=(0,r.createElementVNode)("div",{class:"layer w-100 mB-10"},[(0,r.createElementVNode)("h6",{class:"lh-1"},"Travel Report")],-1),v={class:"layer w-100"},h={class:"peers ai-sb fxw-nw"},_=(0,r.createElementVNode)("div",{class:"peer peer-greed"},null,-1),F={class:"peer"},E=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-printer",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),(0,r.createElementVNode)("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1)];const V={data:function(){return{office_id:"",user:this.$attrs.auth.user,offices:[]}},mounted:function(){"Admin"==this.user.role||"PGO"==this.user.role?this.office_id=null:this.office_id=this.user.office_id,this.loadOffice()},methods:{loadOffice:function(){var e=this;axios.get("/offices/fetch").then((function(o){e.offices=o.data}))},print:function(){this.office_id?window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&__flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Ftravel_report_per_office&standAlone=true&decorate=no&office_id="+this.office_id,"_blank"):window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Ftravel_report&standAlone=true&decorate=no","_blank")},print_soa:function(){this.office_id?window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Fsoa_by_office&standAlone=true&decorate=no&office_id="+this.office_id,"_blank"):window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Fsoa_travel_all_offices&standAlone=true &standAlone=true&decorate=no","_blank")}}};const g=(0,t(3744).Z)(V,[["render",function(e,o,t,V,g,N){var b=(0,r.resolveComponent)("Head"),C=(0,r.resolveComponent)("Select2");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(b,null,{default:(0,r.withCtx)((function(){return[l]})),_:1}),(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",n,["Admin"===g.user.role||"PGO"===g.user.role?((0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",d,[c,(0,r.createElementVNode)("div",f,[(0,r.createVNode)(C,{modelValue:g.office_id,"onUpdate:modelValue":o[0]||(o[0]=function(e){return g.office_id=e}),options:g.offices},null,8,["modelValue","options"])])])])])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("div",m,[u,(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",h,[_,(0,r.createElementVNode)("div",F,[(0,r.createElementVNode)("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=function(e){return N.print()})},E)])])])])])])])])],64)}]])}}]);