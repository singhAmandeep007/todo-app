"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[168,976,513,245],{9168:(e,r,t)=>{t.r(r),t.d(r,{createRoutes:()=>i});var n=t(1976),d=t(1513);function i(){n.reminderRoutes.call(this),d.reminderGroupRoutes.call(this)}},1976:(e,r,t)=>{t.r(r),t.d(r,{reminderRoutes:()=>i});var n=t(1266),d=t(5245);function i(){this.get((0,d.urlPrefix)("/reminders"),((e,r)=>{let t;const n=r.queryParams;return t=n?e.where("reminder",n):e.all("reminder"),{data:t.models.map((e=>e.getAttributes()))}})),this.post((0,d.urlPrefix)("/reminders"),((e,r)=>{const t=JSON.parse(r.requestBody);return{data:e.create("reminder",t).attrs}})),this.delete((0,d.urlPrefix)("/reminders/:id"),((e,r)=>{const t=r.params.id,d=e.find("reminder",t);return null===d||void 0===d||d.destroy(),new n.YK(null===d?404:200,{},{message:"Reminder with id ".concat(t,null===d?" not found!":" deleted!")})}))}},1513:(e,r,t)=>{t.r(r),t.d(r,{reminderGroupRoutes:()=>i});var n=t(1266),d=t(5245);function i(){this.get((0,d.urlPrefix)("/reminder-groups"),((e,r)=>({data:e.all("reminderGroup").models}))),this.delete((0,d.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,d=e.find("reminderGroup",t);return null===d||void 0===d||d.destroy(),new n.YK(null===d?404:200,{},{message:"Reminder group with id ".concat(t,null===d?" not found!":" deleted!")})}))}},5245:(e,r,t)=>{t.r(r),t.d(r,{urlPrefix:()=>d});const n="https://todo-app.com/api/v1/",d=e=>{if("/"!==e[0])throw new Error("Miragejs handler path should start with a forward slash.");return"/"===n[27]?"".concat(n).concat(e.slice(1)):"".concat(n).concat(e)}}}]);
//# sourceMappingURL=168.20a1fdc7.chunk.js.map