"use strict";(self.webpackChunkreminder_app=self.webpackChunkreminder_app||[]).push([[163,921,718],{1163:(e,r,t)=>{t.r(r),t.d(r,{createReminder:()=>u,deleteReminder:()=>c,getReminders:()=>o,updateReminder:()=>m});var n=t(8814),d=t(153),i=t(4349),s=t(2921),a=t(2718);const o=n.L.get((0,a.urlPrefix)("/reminders"),(e=>{let{request:r}=e;const t=s.db.reminder.getAll(),n=(0,i.wm)(r.url);let a=t;return n.groupId&&(a=a.filter((e=>{var r;return(null===e||void 0===e||null===(r=e.group)||void 0===r?void 0:r.id)===n.groupId}))),n.state&&(a=a.filter((e=>e.state===n.state))),d.c.json({data:a},{status:200})})),u=n.L.post((0,a.urlPrefix)("/reminders"),(async e=>{let{request:r}=e;const{title:t,groupId:n}=await r.json(),i=s.db.reminderGroup.getAll().find((e=>e.id===n));if(n&&!i)return d.c.json({message:"Reminder Group with id ".concat(n," not found!")},{status:404});const a=s.db.reminder.create({title:t,group:i});return d.c.json({data:a},{status:201})})),c=n.L.delete((0,a.urlPrefix)("/reminders/:id"),(e=>{let{params:r}=e;return s.db.reminder.findFirst({where:{id:{equals:r.id}}})?(s.db.reminder.delete({where:{id:{equals:r.id}}}),d.c.json({message:"Reminder with id ".concat(r.id," deleted!")},{status:200})):d.c.json({message:"Reminder with id ".concat(r.id," not found!")},{status:404})})),m=n.L.patch((0,a.urlPrefix)("/reminders/:id"),(async e=>{let{request:r,params:t}=e;const{groupId:n,...i}=await r.json();if(!s.db.reminder.findFirst({where:{id:{equals:t.id}}}))return d.c.json({message:"Reminder with id ".concat(t.id," not found!")},{status:404});const a=s.db.reminderGroup.findFirst({where:{id:{equals:n}}});if(n&&!a)return d.c.json({message:"Reminder Group with id ".concat(n," not found!")},{status:404});const o=s.db.reminder.update({where:{id:{equals:t.id}},data:{...i}});return d.c.json({data:o},{status:200})}))},2921:(e,r,t)=>{t.r(r),t.d(r,{buildScenarios:()=>a,db:()=>s});var n=t(3527),d=t(4349),i=t(9700);const s=(0,n.factory)({reminder:{id:(0,n.primaryKey)(d.uR),title:()=>"Reminder ".concat((0,d.uR)({simple:!0})),isPinned:()=>!1,state:()=>i.x.INACTIVE,group:(0,n.oneOf)("reminderGroup"),createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString(),dueDate:(0,n.nullable)(String)},reminderGroup:{id:(0,n.primaryKey)(d.uR),name:()=>"Reminder Group ".concat((0,d.uR)({simple:!0})),createdAt:()=>(new Date).toISOString(),updatedAt:()=>(new Date).toISOString()}}),a=e=>{const r={withReminders:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;for(let r=0;r<t;r++)e.reminder.create();return r},withReminderGroups:t=>{let{reminderGroups:n=["Work","Home","Personal"],remindersPerGroup:d=10}=t;return n.forEach((r=>{const t=e.reminderGroup.create({name:r});for(let n=0;n<d;n++)e.reminder.create({group:t})})),r}};return r}},2718:(e,r,t)=>{t.r(r),t.d(r,{urlPrefix:()=>d});const n="https://reminder-app.com/api/v1/",d=e=>{if("/"!==e[0])throw new Error("MSW handler path should start with a forward slash.");return"/"===n[31]?"".concat(n).concat(e.slice(1)):"".concat(n).concat(e)}},9700:(e,r,t)=>{t.d(r,{x:()=>n});const n={INACTIVE:"INACTIVE",INPROGRESS:"INPROGRESS",COMPLETED:"COMPLETED",ARCHIVED:"ARCHIVED"}}}]);
//# sourceMappingURL=163.6f618ee0.chunk.js.map