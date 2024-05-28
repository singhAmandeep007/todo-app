"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[90,1,735,163,940,176],{4735:(e,r,t)=>{t.r(r),t.d(r,{buildScenarios:()=>a,db:()=>s});var d=t(3527),n=t(4349),i=t(9700);const s=(0,d.factory)({reminder:{id:(0,d.primaryKey)(n.uR),title:()=>"Reminder ".concat((0,n.uR)({simple:!0})),isPinned:()=>!1,state:()=>i.x.ACTIVE,group:(0,d.oneOf)("reminderGroup"),createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()},reminderGroup:{id:(0,d.primaryKey)(n.uR),name:()=>"Reminder Group ".concat((0,n.uR)({simple:!0})),createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()}}),a=e=>{const r={withReminders:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;for(let r=0;r<t;r++)e.reminder.create();return r},withReminderGroups:t=>{let{reminderGroups:d=["Work","Home","Personal"],remindersPerGroup:n=10}=t;return d.forEach((r=>{const t=e.reminderGroup.create({name:r});for(let d=0;d<n;d++)e.reminder.create({group:t})})),r}};return r}},1:(e,r,t)=>{t.r(r),t.d(r,{createReminder:()=>d.createReminder,createReminderGroup:()=>n.createReminderGroup,deleteReminder:()=>d.deleteReminder,deleteReminderGroup:()=>n.deleteReminderGroup,getReminderGroup:()=>n.getReminderGroup,getReminderGroups:()=>n.getReminderGroups,getReminders:()=>d.getReminders,updateReminder:()=>d.updateReminder,updateReminderGroup:()=>n.updateReminderGroup});var d=t(1163),n=t(8940)},1163:(e,r,t)=>{t.r(r),t.d(r,{createReminder:()=>u,deleteReminder:()=>m,getReminders:()=>o,updateReminder:()=>c});var d=t(8814),n=t(153),i=t(4349),s=t(1176),a=t(4735);const o=d.L.get((0,s.urlPrefix)("/reminders"),(e=>{let{request:r}=e;const t=a.db.reminder.getAll(),d=(0,i.wm)(r.url);let s=structuredClone(t);return d.groupId&&(s=s.filter((e=>{var r;return(null===e||void 0===e||null===(r=e.group)||void 0===r?void 0:r.id)===d.groupId}))),d.state&&(s=s.filter((e=>e.state===d.state))),n.c.json({data:s},{status:200})})),u=d.L.post((0,s.urlPrefix)("/reminders"),(async e=>{let{request:r}=e;const{title:t,groupId:d}=await r.json(),i=a.db.reminderGroup.getAll().find((e=>e.id===d));if(d&&!i)return n.c.json({message:"Reminder Group with id ".concat(d," not found!")},{status:404});const s=a.db.reminder.create({title:t,group:i});return n.c.json({data:s},{status:201})})),m=d.L.delete((0,s.urlPrefix)("/reminders/:id"),(e=>{let{params:r}=e;return a.db.reminder.findFirst({where:{id:{equals:r.id}}})?(a.db.reminder.delete({where:{id:{equals:r.id}}}),n.c.json({message:"Reminder with id ".concat(r.id," deleted!")},{status:200})):n.c.json({message:"Reminder with id ".concat(r.id," not found!")},{status:404})})),c=d.L.patch((0,s.urlPrefix)("/reminders/:id"),(async e=>{let{request:r,params:t}=e;const{groupId:d,...i}=await r.json();if(!a.db.reminder.findFirst({where:{id:{equals:t.id}}}))return n.c.json({message:"Reminder with id ".concat(t.id," not found!")},{status:404});const s=a.db.reminderGroup.findFirst({where:{id:{equals:d}}});if(d&&!s)return n.c.json({message:"Reminder Group with id ".concat(d," not found!")},{status:404});const o=a.db.reminder.update({where:{id:{equals:t.id}},data:{...i}});return n.c.json({data:o},{status:200})}))},8940:(e,r,t)=>{t.r(r),t.d(r,{createReminderGroup:()=>u,deleteReminderGroup:()=>m,getReminderGroup:()=>o,getReminderGroups:()=>a,updateReminderGroup:()=>c});var d=t(8814),n=t(153),i=t(1176),s=t(4735);const a=d.L.get((0,i.urlPrefix)("/reminder-groups"),(()=>n.c.json({data:s.db.reminderGroup.getAll()},{status:200}))),o=d.L.get((0,i.urlPrefix)("/reminder-groups/:id"),(e=>{let{params:r}=e;const t=s.db.reminderGroup.findFirst({where:{id:{equals:r.id}}});return t?n.c.json({data:t},{status:200}):n.c.json({message:"Reminder Group with id ".concat(r.id," not found!")},{status:404})})),u=d.L.post((0,i.urlPrefix)("/reminder-groups"),(async e=>{let{request:r}=e;const t=await r.json(),d=s.db.reminderGroup.create({...t});return n.c.json({data:d},{status:201})})),m=d.L.delete((0,i.urlPrefix)("/reminder-groups/:id"),(e=>{let{params:r}=e;return s.db.reminderGroup.findFirst({where:{id:{equals:r.id}}})?(s.db.reminderGroup.delete({where:{id:{equals:r.id}}}),n.c.json({message:"Reminder Group with id ".concat(r.id," deleted!")},{status:200})):n.c.json({message:"Reminder Group with id ".concat(r.id," not found!")},{status:404})})),c=d.L.patch((0,i.urlPrefix)("/reminder-groups/:id"),(async e=>{let{request:r,params:t}=e;const d=await r.json();if(!s.db.reminderGroup.findFirst({where:{id:{equals:t.id}}}))return n.c.json({message:"Reminder Group with id ".concat(t.id," not found!")},{status:404});const i=s.db.reminderGroup.update({where:{id:{equals:t.id}},data:{...d}});return n.c.json({data:i},{status:200})}))},1176:(e,r,t)=>{t.r(r),t.d(r,{urlPrefix:()=>n});const d="https://todo-app.com/api/v1/",n=e=>{if("/"!==e[0])throw new Error("MSW handler path should start with a forward slash.");return"/"===d[27]?"".concat(d).concat(e.slice(1)):"".concat(d).concat(e)}},90:(e,r,t)=>{t.r(r),t.d(r,{handlers:()=>n});var d=t(1);const n=[...Object.values(d)]},9700:(e,r,t)=>{t.d(r,{x:()=>d});const d={ACTIVE:"ACTIVE",COMPLETED:"COMPLETED"}}}]);
//# sourceMappingURL=90.1ce0943e.chunk.js.map