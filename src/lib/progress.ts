export interface StageProgress { stars: 0|1|2|3; bestScore:number; attempts:number; firstClearAwarded:boolean; xpAwarded:number }
export function calculateStars(score:number):0|1|2|3 { return score>=.9?3:score>=.8?2:score>=.7?1:0; }
export function updateProgress(old:StageProgress|undefined, score:number):StageProgress { const passed=score>=.7; return { stars:Math.max(old?.stars??0,calculateStars(score)) as 0|1|2|3, bestScore:Math.max(old?.bestScore??0,score), attempts:(old?.attempts??0)+1, firstClearAwarded:(old?.firstClearAwarded??false)||passed, xpAwarded:passed&&!old?.firstClearAwarded?100:0 }; }
export type ProgressStore=Record<string,StageProgress>;
const KEY="studyquest-progress-v1";
export const loadProgress=():ProgressStore=>{try{return JSON.parse(localStorage.getItem(KEY)||"{}")}catch{return {}}};
export const saveProgress=(p:ProgressStore)=>localStorage.setItem(KEY,JSON.stringify(p));
