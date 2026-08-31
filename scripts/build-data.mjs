import fs from "node:fs"; import path from "node:path"; import { parseMasterQuestions, parseKnowledge } from "./parser.mjs";
const subjects = [
 {id:"mln111",code:"MLN111",name:"Triết học Mác - Lênin",folder:"MLN111",prefix:"MLN111",color:"#8b5cf6",icon:"ScrollText"},
 {id:"mln122",code:"MLN122",name:"Kinh tế chính trị Mác - Lênin",folder:"MLN122",prefix:"MLN122",color:"#f59e0b",icon:"Landmark"},
 {id:"ite302c",code:"ITE302c",name:"Ethics in IT / AI Ethics",folder:"ITE302c",prefix:"ITE302C",color:"#06b6d4",icon:"Bot"},
 {id:"prm393",code:"PRM393",name:"Mobile Programming",folder:"PRM393",prefix:"PRM393",color:"#22c55e",icon:"Smartphone"}
];
const outDir="public/data"; fs.mkdirSync(outDir,{recursive:true}); const manifest=[];
for(const s of subjects){ const kb=path.join(s.folder,"knowledge_base"); const upper=s.prefix; const qfile=fs.readdirSync(kb).find(x=>x.includes("MASTER_QUESTIONS")); const kfile=fs.readdirSync(kb).find(x=>x.includes("MASTER_KNOWLEDGE")); const subject={id:s.id,chapterPrefix:s.prefix}; const questions=parseMasterQuestions(fs.readFileSync(path.join(kb,qfile),"utf8"),subject); const knowledge=parseKnowledge(fs.readFileSync(path.join(kb,kfile),"utf8"),subject); const chapters=[...new Map(questions.map(q=>[q.chapterId,{id:q.chapterId,subjectId:s.id,title:q.chapterId.replace(s.prefix+"-","").replace(/-/g," ")}])).values()].sort((a,b)=>a.id.localeCompare(b.id)); const payload={...s,questions,knowledge,chapters,stats:{questions:questions.length,clean:questions.filter(q=>q.qualityStatus==="clean").length,concepts:new Set(questions.map(q=>q.conceptId)).size,chapters:chapters.length}}; fs.writeFileSync(path.join(outDir,`${s.id}.json`),JSON.stringify(payload)); manifest.push({id:s.id,code:s.code,name:s.name,color:s.color,icon:s.icon,stats:payload.stats}); console.log(s.id,payload.stats); }
fs.writeFileSync(path.join(outDir,"manifest.json"),JSON.stringify(manifest));
