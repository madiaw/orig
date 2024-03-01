"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1393],{1393:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var l=n(821),a={class:"row align-items-end justify-content-center"},o={class:"col-md-4 d-flex mb-3 justify-content-end"},c=(0,l.createElementVNode)("i",{class:"fa-solid fa-plus"},null,-1),r={class:"row justify-content-center"},s={class:"card h-100 shadow-sm"},i={class:"card-header text-center py-4"},d={key:0},m={key:1},u={class:"badge badge-info"},p=(0,l.createElementVNode)("br",null,null,-1),k={key:1,class:"badge badge-success"},f={class:"text-dark"},y={key:0,class:"card-body"},v={class:"card-footer"},_={class:"d-flex justify-content-between"},h=(0,l.createElementVNode)("i",{class:"fas fa-edit"},null,-1),E=["onClick"],B=(0,l.createElementVNode)("i",{class:"fas fa-trash"},null,-1);var V=n(6083),N={class:"col-md-8"},g={class:"d-flex align-items-center my-3"},b={class:"form-row mr-3"},D={class:"col-auto"},w={for:"",class:"mr-sm-2"},x=["value"],S={class:"col-auto pt-30"},C={class:"form-row"},P={class:"col-auto"},F={for:"",class:"mr-sm-2"},T={value:"",hidden:""},j=["selected","value"],L={class:"col-auto pt-30"};const M={props:{plans:{type:Array,required:!0}},data:function(){return{plan_id:"",default_plan_id:1}},methods:{setRecommendedPlan:function(){this.$inertia.put(route("plans.set.recommended.plan",this.plan_id))},setDefaultPlan:function(){this.$inertia.put(route("plans.set.default.plan",this.default_plan_id))}},mounted:function(){var e=this;this.plans.find((function(t){t.recommended&&(e.plan_id=t.id)})),this.plans.find((function(t){t.default&&(e.default_plan_id=t.id)}))}};var R=n(3744);const q=(0,R.Z)(M,[["render",function(e,t,n,a,o,c){return(0,l.openBlock)(),(0,l.createElementBlock)("div",N,[(0,l.createElementVNode)("div",g,[(0,l.createElementVNode)("div",b,[(0,l.createElementVNode)("div",D,[(0,l.createElementVNode)("label",w,(0,l.toDisplayString)(e.__("Set Default Plan")),1),(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.default_plan_id=e})},[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.plans,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",{key:e.id,value:e.id},(0,l.toDisplayString)(e.name),9,x)})),128))],512),[[l.vModelSelect,o.default_plan_id]])]),(0,l.createElementVNode)("div",S,[(0,l.createElementVNode)("button",{onClick:t[1]||(t[1]=function(){return c.setDefaultPlan&&c.setDefaultPlan.apply(c,arguments)}),type:"button",class:"btn btn-primary"},(0,l.toDisplayString)(e.__("Save")),1)])]),(0,l.createElementVNode)("div",C,[(0,l.createElementVNode)("div",P,[(0,l.createElementVNode)("label",F,(0,l.toDisplayString)(e.__("Set Recommended Plan")),1),(0,l.withDirectives)((0,l.createElementVNode)("select",{name:"plan_id",class:"custom-select mr-sm-2",id:"inlineFormCustomSelect","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.plan_id=e})},[(0,l.createElementVNode)("option",T,(0,l.toDisplayString)(e.__("Select Plan")),1),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.plans,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",{selected:e.recommended,key:e.id,value:e.id},(0,l.toDisplayString)(e.name),9,j)})),128))],512),[[l.vModelSelect,o.plan_id]])]),(0,l.createElementVNode)("div",L,[(0,l.createElementVNode)("button",{onClick:t[3]||(t[3]=function(){return c.setRecommendedPlan&&c.setRecommendedPlan.apply(c,arguments)}),type:"button",class:"btn btn-primary"},(0,l.toDisplayString)(e.__("Save")),1)])])])])}]]),Z=q,$={components:{Feature:V.Z,SetRecommended:Z},props:{plans:{type:Array,required:!0}},methods:{deleteData:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.isConfirmed&&t.$inertia.delete(route("plans.destroy",e))}))}},mounted:function(){this.checkPagePermission("admin")}},A=(0,R.Z)($,[["render",function(e,t,n,V,N,g){var b=(0,l.resolveComponent)("Head"),D=(0,l.resolveComponent)("SetRecommended"),w=(0,l.resolveComponent)("Link"),x=(0,l.resolveComponent)("Feature"),S=(0,l.resolveDirective)("tooltip");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(b,{title:e.__("Plan")},null,8,["title"]),(0,l.createElementVNode)("div",a,[(0,l.createVNode)(D,{plans:n.plans},null,8,["plans"]),(0,l.createElementVNode)("div",o,[(0,l.createVNode)(w,{href:e.route("plans.create"),class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[c,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Create Plan")),1)]})),_:1},8,["href"])])]),(0,l.createElementVNode)("div",r,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.plans,(function(t){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-3 col-12",key:t.id},[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("h4",null,[(0,l.createElementVNode)("b",null,(0,l.toDisplayString)(t.name),1),"custom_days"!=t.interval?((0,l.openBlock)(),(0,l.createElementBlock)("small",d," /"+(0,l.toDisplayString)(t.interval),1)):((0,l.openBlock)(),(0,l.createElementBlock)("small",m," /"+(0,l.toDisplayString)(t.custom_interval_days)+" "+(0,l.toDisplayString)(e.__("Days")),1))]),t.recommended?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[(0,l.createElementVNode)("div",u,(0,l.toDisplayString)(e.__("Recommended")),1),p],64)):(0,l.createCommentVNode)("",!0),t.default?((0,l.openBlock)(),(0,l.createElementBlock)("div",k,(0,l.toDisplayString)(e.__("Default")),1)):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("h1",f,(0,l.toDisplayString)(e.currencyPosition(t.price)),1)]),t.plan_features?((0,l.openBlock)(),(0,l.createElementBlock)("div",y,[(0,l.createVNode)(x,{name:"Unlimited Employees",checked:!t.plan_features.is_limited_employee},null,8,["checked"]),(0,l.createVNode)(x,{name:"Max Employees",checked:!0,value:t.plan_features.is_limited_employee?t.plan_features.max_employees:"∞"},null,8,["value"]),(0,l.createVNode)(x,{name:"Max Teams",checked:!0,value:t.plan_features.max_teams},null,8,["value"]),(0,l.createVNode)(x,{name:"Max Leave Types",checked:!0,value:t.plan_features.max_leave_types},null,8,["value"]),(0,l.createVNode)(x,{name:"Custom Theme Look",checked:t.plan_features.custom_theme_look},null,8,["checked"])])):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",v,[(0,l.createElementVNode)("div",_,[(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createBlock)(w,{href:e.route("plans.edit",t.id),class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[h,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Edit")),1)]})),_:2},1032,["href"])),[[S,e.__("Edit")]]),t.default?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:0,onClick:function(e){return g.deleteData(t.id)},class:"btn btn-danger w-100-p"},[B,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Delete")),1)],8,E)),[[S,e.__("Delete")]])])])])])})),128))])],64)}]]),U=A},6083:(e,t,n)=>{n.d(t,{Z:()=>f});var l=n(821),a={class:"mb-2 d-flex align-items-center justify-content-between"},o={class:"d-flex"},c={class:"icon mr-2"},r={key:0,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s=[(0,l.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)],i={key:1,xmlns:"http://www.w3.org/2000/svg",class:"me-0 icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"#dc3545",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},d=[(0,l.createElementVNode)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,l.createElementVNode)("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),(0,l.createElementVNode)("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1)],m={key:0,class:"mb-0"},u={key:1,class:"mb-0"},p={key:0,class:"mb-0"};const k={props:{checked:{type:Boolean,required:!0},name:{type:String,required:!0},value:{type:String,required:!1},spanText:{type:Boolean,default:!1}}};const f=(0,n(3744).Z)(k,[["render",function(e,t,n,k,f,y){var v=(0,l.resolveComponent)("hs");return(0,l.openBlock)(),(0,l.createElementBlock)("div",a,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("span",c,[n.checked?((0,l.openBlock)(),(0,l.createElementBlock)("svg",r,s)):((0,l.openBlock)(),(0,l.createElementBlock)("svg",i,d))]),n.spanText?((0,l.openBlock)(),(0,l.createElementBlock)("span",m,(0,l.toDisplayString)(e.__(n.name)),1)):((0,l.openBlock)(),(0,l.createElementBlock)("h5",u,(0,l.toDisplayString)(e.__(n.name)),1))]),n.spanText?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[n.value?((0,l.openBlock)(),(0,l.createElementBlock)("span",p,(0,l.toDisplayString)(n.value),1)):(0,l.createCommentVNode)("",!0)],64)):((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:1},[n.value?((0,l.openBlock)(),(0,l.createBlock)(v,{key:0,class:"mb-0"},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)((0,l.toDisplayString)(n.value),1)]})),_:1})):(0,l.createCommentVNode)("",!0)],64))])}]])}}]);