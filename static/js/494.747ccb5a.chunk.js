"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[494,796,636,765,749,264,480,393,168,976,513,245,149],{9796:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n.reminder,reminderGroup:()=>o.reminderGroup});var n=t(7636),o=t(1765)},7636:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n});const n=t(1266).$7.extend({id:e=>"reminder-id-".concat(e),title:e=>"Reminder ".concat(e),isPinned:e=>e%2===0,state:"ACTIVE",createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()})},1765:(e,r,t)=>{t.r(r),t.d(r,{reminderGroup:()=>n});const n=t(1266).$7.extend({id:e=>"reminder-group-id-".concat(e),name:e=>"Reminder Group ".concat(e),createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()})},4749:(e,r,t)=>{t.r(r),t.d(r,{IdentityManager:()=>c});const n={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const i=new Uint8Array(16);function d(){if(!o&&(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}const s=[];for(let p=0;p<256;++p)s.push((p+256).toString(16).slice(1));function u(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s[e[r+0]]+s[e[r+1]]+s[e[r+2]]+s[e[r+3]]+"-"+s[e[r+4]]+s[e[r+5]]+"-"+s[e[r+6]]+s[e[r+7]]+"-"+s[e[r+8]]+s[e[r+9]]+"-"+s[e[r+10]]+s[e[r+11]]+s[e[r+12]]+s[e[r+13]]+s[e[r+14]]+s[e[r+15]]}const a=function(e,r,t){if(n.randomUUID&&!r&&!e)return n.randomUUID();const o=(e=e||{}).random||(e.rng||d)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,r){t=t||0;for(let e=0;e<16;++e)r[t+e]=o[e];return r}return u(o)};class c{constructor(){this.ids=void 0,this.ids=new Set}fetch(){let e=a();for(;this.ids.has(e);)e=a();return this.ids.add(e),e}set(e){if(this.ids.has(e))throw new Error("ID ".concat(e," has already been used."));this.ids.add(e)}reset(){this.ids.clear()}}},264:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>n.reminder,reminderGroup:()=>o.reminderGroup});var n=t(2480),o=t(9393)},2480:(e,r,t)=>{t.r(r),t.d(r,{reminder:()=>o});var n=t(1266);const o=n.Kx.extend({group:(0,n.g4)("reminderGroup"),getAttributes(){const{groupId:e,...r}=this.attrs;return e&&(r.group=this.group.attrs),r}})},9393:(e,r,t)=>{t.r(r),t.d(r,{reminderGroup:()=>n});const n=t(1266).Kx.extend({})},9168:(e,r,t)=>{t.r(r),t.d(r,{createRoutes:()=>i});var n=t(1976),o=t(1513);function i(){n.reminderRoutes.call(this),o.reminderGroupRoutes.call(this)}},1976:(e,r,t)=>{t.r(r),t.d(r,{reminderRoutes:()=>o});var n=t(5245);function o(){this.get((0,n.urlPrefix)("/reminders"),((e,r)=>{let t;const o=r.queryParams;if(o){if(o.groupId){if(null===e.find("reminderGroup",o.groupId))return(0,n.resourceNotFoundResponse)("Reminder group "+o.groupId)}t=e.where("reminder",o)}else t=e.all("reminder");return{data:t.models.map((e=>e.getAttributes()))}})),this.delete((0,n.urlPrefix)("/reminders/:id"),((e,r)=>{const t=r.params.id,o=e.find("reminder",t);return null===o||void 0===o||o.destroy(),null===o?(0,n.resourceNotFoundResponse)("Reminder "+t):{message:"Reminder with id ".concat(t," deleted!")}})),this.post((0,n.urlPrefix)("/reminders"),((e,r)=>{const t=JSON.parse(r.requestBody),n={isPinned:!1,state:"ACTIVE",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString()};return{data:e.create("reminder",Object.assign(n,t)).attrs}})),this.patch((0,n.urlPrefix)("/reminders/:id"),((e,r)=>{const t=r.params.id,o=JSON.parse(r.requestBody),i=e.find("reminder",t);return null===i?(0,n.resourceNotFoundResponse)("Reminder "+t):(i.update(o),{data:i})}))}},1513:(e,r,t)=>{t.r(r),t.d(r,{reminderGroupRoutes:()=>o});var n=t(5245);function o(){this.get((0,n.urlPrefix)("/reminder-groups"),(e=>({data:e.all("reminderGroup").models}))),this.get((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,o=e.find("reminderGroup",t);return null===o?(0,n.resourceNotFoundResponse)("Reminder group "+t):{data:o}})),this.delete((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,o=e.find("reminderGroup",t);if(null===o)return(0,n.resourceNotFoundResponse)("Reminder group "+t);const i=e.all("reminder").filter((e=>e.groupId===t));return null===i||void 0===i||i.destroy(),null===o||void 0===o||o.destroy(),{message:"Reminder group with id ".concat(t," deleted!")}})),this.patch((0,n.urlPrefix)("/reminder-groups/:id"),((e,r)=>{const t=r.params.id,o=JSON.parse(r.requestBody),i=e.find("reminderGroup",t);return null===i?(0,n.resourceNotFoundResponse)("Reminder group "+t):(i.update(o),{data:i})})),this.post((0,n.urlPrefix)("/reminder-groups"),((e,r)=>{const t=JSON.parse(r.requestBody),n={createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString()};return{data:e.create("reminderGroup",Object.assign(n,t))}}))}},5245:(e,r,t)=>{t.r(r),t.d(r,{resourceNotFoundResponse:()=>d,urlPrefix:()=>i});var n=t(1266);const o="https://todo-app.com/api/v1/",i=e=>{if("/"!==e[0])throw new Error("Miragejs handler path should start with a forward slash.");return"/"===o[27]?"".concat(o).concat(e.slice(1)):"".concat(o).concat(e)},d=e=>new n.YK(404,{},{message:"Resource ".concat(e," not found!")})},7149:(e,r,t)=>{function n(e){const r={withReminders:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return e.createList("reminder",t),r},withReminderGroups:t=>{let{reminderGroups:n=["Work","Home","Personal"],remindersPerGroup:o=10}=t;return n.forEach((r=>{const t=e.create("reminderGroup",{name:r});e.createList("reminder",o,{group:t})})),r}};return r}t.r(r),t.d(r,{buildScenarios:()=>n})},2494:(e,r,t)=>{t.r(r),t.d(r,{runServer:()=>a});var n=t(1266),o=t(9168),i=t(264),d=t(9796),s=t(7149),u=t(4749);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.sA)({logging:e.logging||!0,environment:(null===e||void 0===e?void 0:e.environment)||"development",models:i,factories:d,identityManagers:{application:u.IdentityManager},seeds(e){(0,s.buildScenarios)(e).withReminders(30).withReminderGroups({remindersPerGroup:10})},routes(){this.timing=e.timing||100,o.createRoutes.call(this),this.passthrough()}})}}}]);
//# sourceMappingURL=494.747ccb5a.chunk.js.map