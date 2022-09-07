"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[609],{6609:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(821),n={class:"row gap-20 masonry pos-r"},l={class:"peers fxw-nw jc-sb ai-c"},a=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),c={class:"col-md-8"},i=(0,r.createElementVNode)("label",{for:""},"Old Password",-1),s={key:0,class:"fs-6 c-red-500"},d=(0,r.createElementVNode)("label",{for:""},"New Password",-1),m=(0,r.createElementVNode)("label",{for:""},"Confirm Password",-1),f=["disabled"];var u=o(9038);const p={data:function(){return{form:(0,u.cI)({old:"",new:"",confirm:""}),pageTitle:"Change Password"}},methods:{back:function(){window.history.back()},submit:function(){this.form.post("/users/update-password",this.form)}}};const w=(0,o(3744).Z)(p,[["render",function(e,t,o,u,p,w){var h=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("h3",null,(0,r.toDisplayString)(p.pageTitle),1),(0,r.createVNode)(h,{href:"/",onClick:w.back},{default:(0,r.withCtx)((function(){return[a]})),_:1},8,["onClick"])]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,r.withModifiers)((function(e){return w.submit()}),["prevent"]))},[i,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.form.old=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[r.vModelText,p.form.old]]),p.form.errors.old?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,(0,r.toDisplayString)(p.form.errors.old),1)):(0,r.createCommentVNode)("",!0),d,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.form.new=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[r.vModelText,p.form.new]]),m,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.form.confirm=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[r.vModelText,p.form.confirm]]),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[3]||(t[3]=function(e){return p.form.id=e}),class:"form-control",autocomplete:"chrome-off"},null,512),[[r.vModelText,p.form.id]]),(0,r.createElementVNode)("button",{type:"button",class:"btn btn-primary mt-3",onClick:t[4]||(t[4]=function(e){return w.submit()}),disabled:p.form.processing},"Save changes",8,f)],32)])])}]])}}]);