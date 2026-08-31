import type { Question } from "../types";
export function createQuiz(questions:Question[], count=10):Question[] { return questions.filter(q=>q.qualityStatus==="clean"&&q.correctAnswerIds.length>0).slice(0,count); }
export function gradeAnswer(selected:string[], correct:string[]):boolean { return selected.length===correct.length && [...selected].sort().every((x,i)=>x===[...correct].sort()[i]); }
export function shuffle<T>(items:T[]):T[] { return [...items].sort(()=>Math.random()-.5); }
