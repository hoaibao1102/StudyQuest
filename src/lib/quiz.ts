import type { Question } from "../types";
export function createQuiz(questions:Question[], count=10):Question[] { return questions.filter(q=>q.qualityStatus==="clean"&&q.correctAnswerIds.length>0).slice(0,count); }
export function gradeAnswer(selected:string[], correct:string[]):boolean { return selected.length===correct.length && [...selected].sort().every((x,i)=>x===[...correct].sort()[i]); }
export function shuffle<T>(items:T[]):T[] { return [...items].sort(()=>Math.random()-.5); }
/** random=false giữ nguyên thứ tự; count=null lấy toàn bộ pool */
export function pickQuestions<T>(pool:T[], count:number|null, random=true):T[] {
  const ordered = random ? shuffle(pool) : [...pool];
  return count===null ? ordered : ordered.slice(0, count);
}
/** Vị trí câu chưa làm kế tiếp tính từ `from` (quay vòng). -1 nếu đã làm hết. */
export function nextUnansweredIndex(ids:string[], answered:Set<string>, from:number):number {
  for (let step=1; step<=ids.length; step++) {
    const i = (from + step) % ids.length;
    if (!answered.has(ids[i])) return i;
  }
  return -1;
}
