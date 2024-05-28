"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[168,976,513,245],{9168:(e,r,t)=>{t.r(r),t.d(r,{createRoutes:()=>o});var n=t(1976),d=t(1513);function o(){n.reminderRoutes.call(this),d.reminderGroupRoutes.call(this)}},1976:(e,r,t)=>{t.r(r),t.d(r,{reminderRoutes:()=>o});var n=t(9700),d=t(5245);function o(){this.get((0,d.urlPrefix)("/reminders"),((e,r)=>{let t;const n=r.queryParams;if(n){if(n.groupId){if(null===e.find("reminderGroup",n.groupId))return(0,d.resourceNotFoundResponse)("Reminder group "+n.groupId)}t=e.where("reminder",n)}else t=e.all("reminder");return{data:t.models.map((e=>e.getAttributes()))}})),this.delete((0,d.urlPrefix)("/reminders/:id"),((e,r)=>{const t=r.params.id,n=e.find("reminder",t);return null===n||void 0===n||n.destroy(),null===n?(0,d.resourceNotFoundResponse)("Reminder "+t):{message:"Reminder with id ".concat(t," deleted!")}})),this.post((0,d.urlPrefix)("/reminders"),((e,r)=>{const t=JSON.parse(r.requestBody),d={isPinned:!1,state:n.x.ACTIVE,createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString()};return{data:e.create("reminder",Object.assign(d,t)).attrs}})),this.patch((0,d.urlPrefix)("/reminders/:id"),((e,r)=>{const t=r.params.id,n=JSON.parse(r.requestBody),o=e.find("reminder",t);return null===o?(0,d.resourceNotFoundResponse)("Reminder "+t):(o.update(n),{data:o})}))}},1513:(e,r,t)=>{t.r(r),t.d(r,{reminderGroupRoutes:()=>d});var n=t(5245);function d(){this.get((0,n.urlPrefix)("/reminder-groups"),(e=>({data:e.all("reminderGroup").models}))),this.get((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,d=e.find("reminderGroup",t);return null===d?(0,n.resourceNotFoundResponse)("Reminder group "+t):{data:d}})),this.delete((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,d=e.find("reminderGroup",t);if(null===d)return(0,n.resourceNotFoundResponse)("Reminder group "+t);const o=e.all("reminder").filter((e=>e.groupId===t));return null===o||void 0===o||o.destroy(),null===d||void 0===d||d.destroy(),{message:"Reminder group with id ".concat(t," deleted!")}})),this.patch((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,d=JSON.parse(r.requestBody),o=e.find("reminderGroup",t);return null===o?(0,n.resourceNotFoundResponse)("Reminder group "+t):(o.update(d),{data:o})})),this.post((0,n.urlPrefix)("/reminder-groups"),((e,r)=>{const t=JSON.parse(r.requestBody),n={createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString()};return{data:e.create("reminderGroup",Object.assign(n,t))}}))}},5245:(e,r,t)=>{t.r(r),t.d(r,{resourceNotFoundResponse:()=>s,urlPrefix:()=>o});var n=t(1266);const d="https://todo-app.com/api/v1/",o=e=>{if("/"!==e[0])throw new Error("Miragejs handler path should start with a forward slash.");return"/"===d[27]?"".concat(d).concat(e.slice(1)):"".concat(d).concat(e)},s=e=>new n.YK(404,{},{message:"Resource ".concat(e," not found!")})},9700:(e,r,t)=>{t.d(r,{x:()=>n});const n={ACTIVE:"ACTIVE",COMPLETED:"COMPLETED"}}}]);
//# sourceMappingURL=168.803dff3d.chunk.js.map