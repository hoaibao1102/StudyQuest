import type { Knowledge, Question } from "../types";

export type LessonStepType = "intro" | "concept" | "example" | "trap" | "checkpoint";
export interface LessonStep {
  id: string;
  type: LessonStepType;
  title: string;
  eyebrow: string;
  content: string[];
  concept?: Knowledge;
  question?: Question;
}

export function selectLessonKnowledge(
  knowledge: Knowledge[],
  questionConceptIds: Set<string>,
  limit = 4,
): Knowledge[] {
  if (knowledge.length <= limit) return knowledge;
  const textbookOnly = knowledge.filter(entry => !questionConceptIds.has(entry.id));
  const questionBacked = knowledge.filter(entry => questionConceptIds.has(entry.id));
  if (!textbookOnly.length) return knowledge.slice(0, limit);
  return [...questionBacked.slice(0, limit - 1), textbookOnly[0]];
}

export function buildLessonSteps(knowledge: Knowledge[], questions: Question[]): LessonStep[] {
  if (!knowledge.length) return [];
  const questionConceptIds = new Set(questions.map(question => question.conceptId));
  const selected = selectLessonKnowledge(knowledge, questionConceptIds, 4);
  const steps: LessonStep[] = [{
    id: "intro", type: "intro", eyebrow: "NHIỆM VỤ MỚI",
    title: `Giải mã ${selected.length} mảnh kiến thức`,
    content: ["Mỗi mảnh kiến thức là một chìa khóa cho thử thách phía trước.", "Đọc lý thuyết kết hợp ví dụ minh họa trực quan để vượt checkpoint mở cổng chiến đấu."]
  }];
  selected.forEach((concept, index) => {
    steps.push({
      id: `${concept.id}:concept`,
      type: "concept",
      eyebrow: `MẢNH GHÉP ${index + 1}/${selected.length}`,
      title: concept.title,
      content: concept.summary.slice(0, 4),
      concept,
    });
    const question = questions.find(q => q.conceptId === concept.id && q.qualityStatus === "clean" && q.correctAnswerIds.length > 0);
    if (question) {
      steps.push({
        id: `${concept.id}:checkpoint`,
        type: "checkpoint",
        eyebrow: `CHECKPOINT ${index + 1}/${selected.length}`,
        title: "Kiểm tra trí nhớ",
        content: [],
        concept,
        question,
      });
    }
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

export function allCheckpointsPassed(steps: LessonStep[], results: Record<string, boolean>): boolean {
  const checkpoints = steps.filter(s => s.type === "checkpoint");
  return checkpoints.every(s => results[s.id] === true);
}

export function checkpointStats(steps: LessonStep[], results: Record<string, boolean>) {
  const checkpoints = steps.filter(s => s.type === "checkpoint");
  return { total: checkpoints.length, passed: checkpoints.filter(s => results[s.id] === true).length };
}
