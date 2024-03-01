"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4430],{4430:(e,o,t)=>{t.r(o),t.d(o,{default:()=>G});var r=t(821),l={class:"row justify-content-center"},n={class:"col-12"},c={class:"card mt-3"},a={class:"card-header"},i={class:"d-flex justify-content-between"},s={class:"card-body"},d={class:"row"},m={class:"col-md-4"},u={class:"form-group"},_={class:"col-md-4"},p={class:"form-group"},f={class:"col-md-4"},V={class:"form-group"},v={class:"col-md-4"},N={class:"form-group"},h={class:"col-md-4"},w={class:"form-group"},y={class:"col-md-4"},E={class:"form-group"},b={class:"col-md-4"},g={class:"form-group"},x={class:"row justify-content-center mt-5"},k=["disabled"],D={key:1},T=(0,r.createElementVNode)("i",{class:"fa-solid fa-sync mr-1"},null,-1),C={class:"card mt-3"},S={class:"card-header"},F={class:"d-flex justify-content-between"},M={class:"card-body"},B={class:"row"},U={class:"col-md-4"},j={class:"form-group"},P={class:"col-md-4"},H={class:"form-group"},L={class:"col-md-4"},W={class:"form-group"},$={class:"col-md-4"},A={class:"form-group"},I={class:"row justify-content-center mt-5"},O=["disabled"],Z={key:1},q=(0,r.createElementVNode)("i",{class:"fa-solid fa-sync mr-1"},null,-1);const z={layout:"Setting",props:{theme:Object},data:function(){return{form:this.$inertia.form({primary_color:this.theme.primary_color,hover_color:this.theme.hover_color,secondary_color:this.theme.secondary_color,success_color:this.theme.success_color,info_color:this.theme.info_color,warning_color:this.theme.warning_color,danger_color:this.theme.danger_color}),websiteForm:this.$inertia.form({website_primary_color:this.theme.website_primary_color,website_secondary_color:this.theme.website_secondary_color,website_heading_text_color:this.theme.website_heading_text_color,website_body_text_color:this.theme.website_body_text_color})}},methods:{saveData:function(e){"admin"==e?this.form.post(route("theme.admin.update"),{onSuccess:function(){window.location.reload()}}):this.websiteForm.post(route("theme.website.update"),{onSuccess:function(){window.location.reload()}})}},mounted:function(){this.checkPagePermission("admin")}};const G=(0,t(3744).Z)(z,[["render",function(e,o,t,z,G,J){var K=(0,r.resolveComponent)("Head"),Q=(0,r.resolveComponent)("Label"),R=(0,r.resolveComponent)("Loading");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(K,{title:e.__("Theme")},null,8,["title"]),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e.__("Admin Theme")),1)])]),(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("form",{onSubmit:o[7]||(o[7]=(0,r.withModifiers)((function(e){return J.saveData("admin")}),["prevent"]))},[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("div",u,[(0,r.createVNode)(Q,{name:e.__("Primary Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[0]||(o[0]=function(e){return G.form.primary_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.form.primary_color]])])]),(0,r.createElementVNode)("div",_,[(0,r.createElementVNode)("div",p,[(0,r.createVNode)(Q,{name:e.__("Hover Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[1]||(o[1]=function(e){return G.form.hover_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.form.hover_color]])])]),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",V,[(0,r.createVNode)(Q,{name:e.__("Secondary Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[2]||(o[2]=function(e){return G.form.secondary_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.form.secondary_color]])])]),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",N,[(0,r.createVNode)(Q,{name:e.__("Success Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[3]||(o[3]=function(e){return G.form.success_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.form.success_color]])])]),(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("div",w,[(0,r.createVNode)(Q,{name:e.__("Info Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[4]||(o[4]=function(e){return G.form.info_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.form.info_color]])])]),(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("div",E,[(0,r.createVNode)(Q,{name:e.__("Warning Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[5]||(o[5]=function(e){return G.form.warning_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.form.warning_color]])])]),(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("div",g,[(0,r.createVNode)(Q,{name:e.__("Danger Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[6]||(o[6]=function(e){return G.form.danger_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.form.danger_color]])])])]),(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("button",{disabled:G.form.processing,type:"submit",class:"btn btn-primary"},[G.form.processing?((0,r.openBlock)(),(0,r.createBlock)(R,{key:0})):((0,r.openBlock)(),(0,r.createElementBlock)("span",D,[T,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.__("Save")),1)]))],8,k)])],32)])]),(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",S,[(0,r.createElementVNode)("div",F,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e.__("Website Theme")),1)])]),(0,r.createElementVNode)("div",M,[(0,r.createElementVNode)("form",{onSubmit:o[12]||(o[12]=(0,r.withModifiers)((function(e){return J.saveData("website")}),["prevent"]))},[(0,r.createElementVNode)("div",B,[(0,r.createElementVNode)("div",U,[(0,r.createElementVNode)("div",j,[(0,r.createVNode)(Q,{name:e.__("Primary Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[8]||(o[8]=function(e){return G.websiteForm.website_primary_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.websiteForm.website_primary_color]])])]),(0,r.createElementVNode)("div",P,[(0,r.createElementVNode)("div",H,[(0,r.createVNode)(Q,{name:e.__("Secondary Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[9]||(o[9]=function(e){return G.websiteForm.website_secondary_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.websiteForm.website_secondary_color]])])]),(0,r.createElementVNode)("div",L,[(0,r.createElementVNode)("div",W,[(0,r.createVNode)(Q,{name:e.__("Body Text Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[10]||(o[10]=function(e){return G.websiteForm.website_body_text_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.websiteForm.website_body_text_color]])])]),(0,r.createElementVNode)("div",$,[(0,r.createElementVNode)("div",A,[(0,r.createVNode)(Q,{name:e.__("Body Heading Color")},null,8,["name"]),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[11]||(o[11]=function(e){return G.websiteForm.website_heading_text_color=e}),type:"color",class:"form-control",id:"name"},null,512),[[r.vModelText,G.websiteForm.website_heading_text_color]])])])]),(0,r.createElementVNode)("div",I,[(0,r.createElementVNode)("button",{disabled:G.websiteForm.processing,type:"submit",class:"btn btn-primary"},[G.websiteForm.processing?((0,r.openBlock)(),(0,r.createBlock)(R,{key:0})):((0,r.openBlock)(),(0,r.createElementBlock)("span",Z,[q,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.__("Save")),1)]))],8,O)])],32)])])])])],64)}]])}}]);