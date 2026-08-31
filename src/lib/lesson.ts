import type { Knowledge, Question } from "../types";

export type LessonStepType = "intro" | "concept" | "trap" | "checkpoint";
export interface LessonStep {
  id: string;
  type: LessonStepType;
  title: string;
  eyebrow: string;
  content: string[];
  concept?: Knowledge;
  question?: Question;
}

export function buildLessonSteps(knowledge: Knowledge[], questions: Question[]): LessonStep[] {
  if (!knowledge.length) return [];
  const selected = knowledge.slice(0, 4);
  const steps: LessonStep[] = [{
    id: "intro", type: "intro", eyebrow: "NHIỆM VỤ MỚI",
    title: `Giải mã ${selected.length} mảnh kiến thức`,
    content: ["Mỗi mảnh kiến thức là một chìa khóa cho thử thách phía trước.", "Đọc ngắn, nhớ từ khóa và vượt checkpoint để mở cổng chiến đấu."]
  }];
  selected.forEach((concept, index) => {
    steps.push({ id:`${concept.id}:concept`, type:"concept", eyebrow:`MẢNH GHÉP ${index + 1}/${selected.length}`, title:concept.title, content:concept.summary.slice(0, 4), concept });
    const trap = concept.traps[0] || questions.find(q=>q.conceptId===concept.id && q.trap)?.trap;
    if (trap) steps.push({ id:`${concept.id}:trap`, type:"trap", eyebrow:"CẢNH BÁO BẪY", title:"Đừng để nhiễu đánh lừa", content:[trap], concept });
    const question = questions.find(q=>q.conceptId===concept.id && q.qualityStatus==="clean" && q.correctAnswerIds.length>0);
    if (question) steps.push({ id:`${concept.id}:checkpoint`, type:"checkpoint", eyebrow:"CHECKPOINT", title:"Kiểm tra trí nhớ", content:[], concept, question });
  });
  return steps;
}

export interface HighlightPart { text:string; highlight:boolean }
export function highlightKeywords(text:string, keywords:string[]):HighlightPart[] {
  const useful = [...new Set(keywords.map(x=>x.trim()).filter(x=>x.length>=5))].sort((a,b)=>b.length-a.length);
  if (!useful.length) return [{text,highlight:false}];
  const escaped = useful.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`,"gi");
  return text.split(regex).filter(Boolean).map(part=>({text:part,highlight:useful.some(k=>k.toLowerCase()===part.toLowerCase())}));
}

export function lessonKeywords(concept?:Knowledge):string[] {
  if (!concept) return [];
  return concept.title.split(/\s+|\/|&/).map(x=>x.replace(/[^\p{L}\p{N}-]/gu,"")).filter(x=>x.length>=5).slice(0,8);
}
