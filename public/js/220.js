"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[220],{2220:(e,t,l)=>{l.r(t),l.d(t,{default:()=>C});var o=l(821),n={class:"row gap-20 masonry pos-r"},r={class:"peers fxw-nw jc-sb ai-c"},a=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),s={class:"col-md-8 col-12"},i=(0,o.createElementVNode)("label",null,"Employee ID",-1),c=(0,o.createElementVNode)("small",{class:"text-danger"},[(0,o.createElementVNode)("strong",null,"(Required)")],-1),m={key:0,class:"text-danger"},d=(0,o.createElementVNode)("label",null,"Courtesy Title",-1),u=(0,o.createElementVNode)("label",null,"First name",-1),f=(0,o.createElementVNode)("small",{class:"text-danger"},[(0,o.createElementVNode)("strong",null,"(Required)")],-1),p={key:1,class:"text-danger"},V=(0,o.createElementVNode)("label",null,"Middle name",-1),v=(0,o.createElementVNode)("label",null,"Last name",-1),E=(0,o.createElementVNode)("small",{class:"text-danger"},[(0,o.createElementVNode)("strong",null,"(Required)")],-1),N={key:2,class:"text-danger"},y=(0,o.createElementVNode)("label",null,"Suffix",-1),x=(0,o.createElementVNode)("label",null,"Postfix",-1),g=(0,o.createStaticVNode)('<div class="col-md-12 mT-10"><div class="row"><label for="" class="col-md-4">Select Agency Type</label><div class="col-md-4"><input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off"><label class="btn btn-outline-success" for="success-outlined">Capitol Employee</label></div><input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off"><label class="btn btn-outline-success" for="success-outlined">Non Capitol Employee</label></div></div>',1),_=(0,o.createElementVNode)("label",null,"Office/Agency",-1),b=(0,o.createElementVNode)("option",{value:"",selected:"",readonly:"",disabled:""},null,-1),h=["value"];var k=l(9038);const w={props:{pageTitle:String,offices:Array},data:function(){return{form:(0,k.cI)({first_name:"",middle_name:"",last_name:"",empl_id:""})}}};const C=(0,l(3744).Z)(w,[["render",function(e,t,l,k,w,C){var D=(0,o.resolveComponent)("Head"),B=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(D,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("title",null," "+(0,o.toDisplayString)(l.pageTitle)+" Employee",1)]})),_:1}),(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("h3",null,(0,o.toDisplayString)(l.pageTitle)+" Employee",1),(0,o.createVNode)(B,{href:"/employees"},{default:(0,o.withCtx)((function(){return[a]})),_:1})]),(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("form",{onSubmit:t[7]||(t[7]=(0,o.withModifiers)((function(t){return e.submit()}),["prevent"]))},[i,c,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:(0,o.normalizeClass)(["form-control",{"is-invalid":w.form.errors.empl_id}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return w.form.empl_id=e})},null,2),[[o.vModelText,w.form.empl_id]]),w.form.errors.empl_id?((0,o.openBlock)(),(0,o.createElementBlock)("div",m,(0,o.toDisplayString)(w.form.errors.empl_id),1)):(0,o.createCommentVNode)("",!0),d,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return w.form.courtesy_title=e})},null,512),[[o.vModelText,w.form.courtesy_title]]),u,f,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:(0,o.normalizeClass)(["form-control",{"is-invalid":w.form.errors.first_name}]),"onUpdate:modelValue":t[2]||(t[2]=function(e){return w.form.first_name=e})},null,2),[[o.vModelText,w.form.first_name]]),w.form.errors.first_name?((0,o.openBlock)(),(0,o.createElementBlock)("div",p,(0,o.toDisplayString)(w.form.errors.first_name),1)):(0,o.createCommentVNode)("",!0),V,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return w.form.middle_name=e})},null,512),[[o.vModelText,w.form.middle_name]]),v,E,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:(0,o.normalizeClass)(["form-control",{"is-invalid":w.form.errors.last_name}]),"onUpdate:modelValue":t[4]||(t[4]=function(e){return w.form.last_name=e})},null,2),[[o.vModelText,w.form.last_name]]),w.form.errors.last_name?((0,o.openBlock)(),(0,o.createElementBlock)("div",N,(0,o.toDisplayString)(w.form.errors.last_name),1)):(0,o.createCommentVNode)("",!0),y,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=function(e){return w.form.suffix=e})},null,512),[[o.vModelText,w.form.suffix]]),x,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(e){return w.form.courtesy_title=e})},null,512),[[o.vModelText,w.form.courtesy_title]]),g,(0,o.createElementVNode)("span",null,[_,(0,o.createElementVNode)("select",{class:(0,o.normalizeClass)(["form-select",{"is-invalid":w.form.errors.department_code}])},[b,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(l.offices,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{key:t,value:e.id},(0,o.toDisplayString)(e.short_name),9,h)})),128))],2)])],32)])])],64)}]])}}]);