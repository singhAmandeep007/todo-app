"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[494,796,636,765,264,480,393,168,976,513,245,149],{9796:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n.reminder,reminderGroup:()=>i.reminderGroup});var n=t(7636),i=t(1765)},7636:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n});const n=t(1266).$7.extend({id:e=>"reminder-id-".concat(e),title:e=>"Reminder ".concat(e),isPinned:!1,state:"ACTIVE",createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()})},1765:(e,r,t)=>{t.r(r),t.d(r,{reminderGroup:()=>n});const n=t(1266).$7.extend({id:e=>"reminder-group-id-".concat(e),name:e=>"Reminder Group ".concat(e),createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()})},264:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n.reminder,reminderGroup:()=>i.reminderGroup});var n=t(2480),i=t(9393)},2480:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>i});var n=t(1266);const i=n.Kx.extend({group:(0,n.g4)("reminderGroup"),getAttributes(){const{groupId:e,...r}=this.attrs;return e&&(r.group=this.group.attrs),r}})},9393:(e,r,t)=>{t.r(r),t.d(r,{reminderGroup:()=>n});const n=t(1266).Kx.extend({})},9168:(e,r,t)=>{t.r(r),t.d(r,{createRoutes:()=>o});var n=t(1976),i=t(1513);function o(){n.reminderRoutes.call(this),i.reminderGroupRoutes.call(this)}},1976:(e,r,t)=>{t.r(r),t.d(r,{reminderRoutes:()=>i});var n=t(5245);function i(){this.get((0,n.urlPrefix)("/reminders"),((e,r)=>{let t;const i=r.queryParams;if(i){if(i.groupId){if(null===e.find("reminderGroup",i.groupId))return(0,n.resourceNotFoundResponse)("Reminder group "+i.groupId)}t=e.where("reminder",i)}else t=e.all("reminder");return{data:t.models.map((e=>e.getAttributes()))}})),this.delete((0,n.urlPrefix)("/reminders/:id"),((e,r)=>{const t=r.params.id,i=e.find("reminder",t);return null===i||void 0===i||i.destroy(),null===i?(0,n.resourceNotFoundResponse)("Reminder "+t):{message:"Reminder with id ".concat(t," deleted!")}})),this.post((0,n.urlPrefix)("/reminders"),((e,r)=>{const t=JSON.parse(r.requestBody);return{data:e.create("reminder",t).attrs}}))}},1513:(e,r,t)=>{t.r(r),t.d(r,{reminderGroupRoutes:()=>i});var n=t(5245);function i(){this.get((0,n.urlPrefix)("/reminder-groups"),(e=>({data:e.all("reminderGroup").models}))),this.get((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,i=e.find("reminderGroup",t);return null===i?(0,n.resourceNotFoundResponse)("Reminder group "+t):{data:i}})),this.delete((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,i=e.find("reminderGroup",t);if(null===i)return(0,n.resourceNotFoundResponse)("Reminder group "+t);const o=e.all("reminder").filter((e=>e.groupId===t));return null===o||void 0===o||o.destroy(),null===i||void 0===i||i.destroy(),{message:"Reminder group with id ".concat(t," deleted!")}}))}},5245:(e,r,t)=>{t.r(r),t.d(r,{resourceNotFoundResponse:()=>d,urlPrefix:()=>o});var n=t(1266);const i="https://todo-app.com/api/v1/",o=e=>{if("/"!==e[0])throw new Error("Miragejs handler path should start with a forward slash.");return"/"===i[27]?"".concat(i).concat(e.slice(1)):"".concat(i).concat(e)},d=e=>new n.YK(404,{},{message:"Resource ".concat(e," not found!")})},7149:(e,r,t)=>{function n(e){const r={withReminders:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return e.createList("reminder",t),r},withReminderGroups:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;const n=e.create("reminderGroup",{name:"Work"}),i=e.create("reminderGroup",{name:"Home"}),o=e.create("reminderGroup",{name:"Personal"});return e.createList("reminder",t,{group:n}),e.createList("reminder",t,{group:i}),e.createList("reminder",t,{group:o}),r}};return r}t.r(r),t.d(r,{buildScenarios:()=>n})},2494:(e,r,t)=>{t.r(r),t.d(r,{runServer:()=>u});var n=t(1266),i=t(9168),o=t(264),d=t(9796),s=t(7149);function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.sA)({logging:e.logging||!0,environment:(null===e||void 0===e?void 0:e.environment)||"development",models:o,factories:d,seeds(e){(0,s.buildScenarios)(e).withReminders(3).withReminderGroups(2)},routes(){this.timing=e.timing||100,i.createRoutes.call(this),this.passthrough()}})}}}]);
//# sourceMappingURL=494.ffd1d368.chunk.js.map