const TYPE_MAP = { single: "single", multiple: "multiple", single_choice: "single", multiple_select: "multiple", multiple_choice: "multiple" };
const DIFF_MAP = { easy: 1, medium: 2, hard: 3, review: 2 };
const clean = (v = "") => String(v).replace(/^`|`$/g, "").replace(/^\*\*|\*\*$/g, "").trim();

export function normalizeQuestion(raw, subject) {
  const type = TYPE_MAP[raw.type] || "single";
  const correctAnswerIds = raw.correctAnswerIds || raw.correctAnswers || (raw.correctAnswer ? [raw.correctAnswer] : []);
  const tags = [...(raw.tags || [])];
  let difficulty = typeof raw.difficulty === "number" ? raw.difficulty : DIFF_MAP[raw.difficulty];
  if (!difficulty) { difficulty = 2; tags.push("difficulty_inferred"); }
  if (raw.difficulty === "review") tags.push("source_difficulty_review");
  if (!correctAnswerIds.length || correctAnswerIds.some(id => !(raw.options || []).some(o => o.id === id))) tags.push("answer_missing_or_invalid");
  const chapter = raw.chapterId || "UNKNOWN";
  const chapterId = /^C\d+$/i.test(chapter) ? `${subject.chapterPrefix}-${chapter.toUpperCase()}` : chapter;
  return {
    id: raw.id, subjectId: subject.id, chapterId, conceptId: raw.conceptId || `${subject.chapterPrefix}-UNMAPPED`,
    type, requiredAnswers: correctAnswerIds.length || (type === "single" ? 1 : 2), question: raw.question || "",
    options: (raw.options || []).map(o => ({ id: o.id, label: o.label || o.id, text: o.text })),
    correctAnswerIds, explanation: raw.explanation || "", trap: raw.trap || "", difficulty, tags,
    frequency: Number(raw.frequency || 1), qualityStatus: raw.qualityStatus || raw.quality || "needs_review",
    sourceRefs: raw.sourceRefs || []
  };
}

function field(block, names) {
  for (const name of names) {
    const patterns = [
      new RegExp("^- \\*\\*" + name + ":\\*\\*\\s*(.+)$", "im"),
      new RegExp("^- `" + name + "`:\\s*`?(.+?)`?\\s*$", "im")
    ];
    for (const p of patterns) { const m = block.match(p); if (m) return clean(m[1]); }
  }
  return "";
}
function bodyField(block, names) {
  for (const n of names) { const m = block.match(new RegExp("\\*\\*" + n.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&") + ":\\*\\*\\s*(.+)", "i")); if (m) return clean(m[1]); }
  return "";
}
function answerIds(text) {
  const bold = [...text.matchAll(/\*\*([A-D])(?:\.|\*\*)/g)].map(m => m[1]);
  if (bold.length) return [...new Set(bold)];
  return [...new Set([...text.matchAll(/(?:^|[`,\s])([A-D])(?:[.,`\s]|$)/g)].map(m => m[1]))];
}
export function parseMasterQuestions(text, subject) {
  const re = /^## ([A-Z0-9]+-Q-?[A-Z0-9]+)\s*$/gm;
  const matches = [...text.matchAll(re)];
  return matches.map((m, i) => {
    const block = text.slice(m.index, matches[i + 1]?.index ?? text.length);
    const options = [...block.matchAll(/^- ([A-D])\.\s+(.+)$/gm)].map(x => ({ id:x[1], text:x[2].trim() }));
    const q = bodyField(block, ["Câu hỏi", "Question"]);
    const ansLine = bodyField(block, ["Đáp án nguồn", "correct_answer", "correct_answers", "Correct answer"]);
    const explanation = bodyField(block, ["Giải thích nguồn", "Explanation from canonical source", "Explanation from source"]);
    const sourceText = field(block, ["sources", "source_exams"]);
    return normalizeQuestion({
      id:m[1], chapterId:field(block,["chapter","chapter_id"]), conceptId:field(block,["concept_id"]),
      type:field(block,["type"]), frequency:field(block,["frequency"]), quality:field(block,["quality"]),
      qualityStatus:field(block,["quality_status"]), difficulty:field(block,["difficulty"]), trap:field(block,["trap"]) || bodyField(block,["Trap"]),
      question:q, options, correctAnswerIds:answerIds(ansLine), explanation, sourceRefs:sourceText ? sourceText.split(/,\s*/).map(sourceId=>({sourceId:clean(sourceId)})) : []
    }, subject);
  }).filter(q => q.question && q.options.length >= 2);
}

export function parseKnowledge(text, subject) {
  const ids = [...text.matchAll(/^\*\*ID:\*\*\s*`([^`]+)`/gm)];
  return ids.map((m,i) => {
    const headings = [...text.slice(0, m.index).matchAll(/^#{1,2}\s+(.+)$/gm)];
    const title = (headings.at(-1)?.[1] || m[1]).replace(/^Concept:\s*/i, "").trim();
    const block = text.slice(m.index, ids[i+1]?.index ?? text.length);
    const bullets = [...block.matchAll(/^- (.+)$/gm)].map(x=>x[1].trim()).filter(x=>!x.startsWith("`"));
    const explicitChapter = block.match(/^\*\*Chapter:\*\*.*?`([^`]+)`/m)?.[1];
    const inferredChapter = (m[1].match(/^[^-]+-C\d+/)||[`${subject.chapterPrefix}-C1`])[0];
    return { id:m[1], subjectId:subject.id, chapterId:explicitChapter || inferredChapter, title, summary:bullets.slice(0,5), traps:bullets.filter(x=>/nhầm|trap|nhiễu/i.test(x)).slice(0,3) };
  });
}
