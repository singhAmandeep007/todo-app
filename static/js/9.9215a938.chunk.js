"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[9,796,636,765,264,480,393,168,976,513,245,149,494],{9796:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n.reminder,reminderGroup:()=>i.reminderGroup});var n=t(7636),i=t(1765)},7636:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n});const n=t(1266).$7.extend({id:e=>"reminder-id-".concat(e),title:e=>"Reminder ".concat(e),isPinned:!1,state:"ACTIVE",createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()})},1765:(e,r,t)=>{t.r(r),t.d(r,{reminderGroup:()=>n});const n=t(1266).$7.extend({id:e=>"reminder-group-id-".concat(e),name:e=>"Reminder Group ".concat(e),createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()})},5009:(e,r,t)=>{t.r(r),t.d(r,{runServer:()=>n.runServer});var n=t(2494)},264:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n.reminder,reminderGroup:()=>i.reminderGroup});var n=t(2480),i=t(9393)},2480:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>i});var n=t(1266);const i=n.Kx.extend({group:(0,n.g4)("reminderGroup"),getAttributes(){const{groupId:e,...r}=this.attrs;return e&&(r.group=this.group.attrs),r}})},9393:(e,r,t)=>{t.r(r),t.d(r,{reminderGroup:()=>n});const n=t(1266).Kx.extend({})},9168:(e,r,t)=>{t.r(r),t.d(r,{createRoutes:()=>d});var n=t(1976),i=t(1513);function d(){n.reminderRoutes.call(this),i.reminderGroupRoutes.call(this)}},1976:(e,r,t)=>{t.r(r),t.d(r,{reminderRoutes:()=>d});var n=t(1266),i=t(5245);function d(){this.get((0,i.urlPrefix)("/reminders"),((e,r)=>{let t;const n=r.queryParams;return t=n?e.where("reminder",n):e.all("reminder"),{data:t.models.map((e=>e.getAttributes()))}})),this.post((0,i.urlPrefix)("/reminders"),((e,r)=>{const t=JSON.parse(r.requestBody);return{data:e.create("reminder",t).attrs}})),this.delete((0,i.urlPrefix)("/reminders/:id"),((e,r)=>{const t=r.params.id,i=e.find("reminder",t);return null===i||void 0===i||i.destroy(),new n.YK(null===i?404:200,{},{message:"Reminder with id ".concat(t,null===i?" not found!":" deleted!")})}))}},1513:(e,r,t)=>{t.r(r),t.d(r,{reminderGroupRoutes:()=>d});var n=t(1266),i=t(5245);function d(){this.get((0,i.urlPrefix)("/reminder-groups"),((e,r)=>({data:e.all("reminderGroup").models}))),this.delete((0,i.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,i=e.find("reminderGroup",t);return null===i||void 0===i||i.destroy(),new n.YK(null===i?404:200,{},{message:"Reminder group with id ".concat(t,null===i?" not found!":" deleted!")})}))}},5245:(e,r,t)=>{t.r(r),t.d(r,{urlPrefix:()=>i});const n="https://todo-app.com/api/v1/",i=e=>{if("/"!==e[0])throw new Error("Miragejs handler path should start with a forward slash.");return"/"===n[27]?"".concat(n).concat(e.slice(1)):"".concat(n).concat(e)}},7149:(e,r,t)=>{function n(e){const r={withReminders:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return e.createList("reminder",t),r},withReminderGroups:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;const n=e.create("reminderGroup",{name:"Work"}),i=e.create("reminderGroup",{name:"Home"}),d=e.create("reminderGroup",{name:"Personal"});return e.createList("reminder",t,{group:n}),e.createList("reminder",t,{group:i}),e.createList("reminder",t,{group:d}),r}};return r}t.r(r),t.d(r,{buildScenarios:()=>n})},2494:(e,r,t)=>{t.r(r),t.d(r,{runServer:()=>u});var n=t(1266),i=t(9168),d=t(264),o=t(9796),s=t(7149);function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.sA)({logging:e.logging||!0,environment:(null===e||void 0===e?void 0:e.environment)||"development",models:d,factories:o,seeds(e){(0,s.buildScenarios)(e).withReminders(5).withReminderGroups(3)},routes(){this.timing=e.timing||100,i.createRoutes.call(this),this.passthrough()}})}}}]);
//# sourceMappingURL=9.9215a938.chunk.js.map