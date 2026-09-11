import { describe, expect, test } from "vitest";
import { parseMasterQuestions, normalizeQuestion, countConcepts } from "./parser.mjs";

describe("canonical question parser", () => {
  test("parses MLN hash-format questions", () => {
    const input = `## MLN111-Q-ABC12345
- **chapter:** \`C1\`
- **concept_id:** \`MLN111-C1-01\`
- **type:** \`single\`
- **frequency:** \`2\`
- **quality:** \`clean\`

**Câu hỏi:** Câu hỏi nào?

- A. Một
- B. Hai
- C. Ba
- D. Bốn

**Đáp án nguồn:** C. Ba

**Giải thích nguồn:** Vì C đúng.`;
    const [q] = parseMasterQuestions(input, { id: "mln111", chapterPrefix: "MLN111" });
    expect(q.id).toBe("MLN111-Q-ABC12345");
    expect(q.chapterId).toBe("MLN111-C1");
    expect(q.correctAnswerIds).toEqual(["C"]);
    expect(q.qualityStatus).toBe("clean");
  });

  test("normalizes source aliases and inferred difficulty", () => {
    const q = normalizeQuestion({ id:"Q1", chapterId:"C1", conceptId:"X", type:"multiple_select", options:[{id:"A",text:"a"},{id:"B",text:"b"}], correctAnswers:["A","B"], qualityStatus:"clean" }, { id:"ite302c", chapterPrefix:"ITE302C" });
    expect(q.type).toBe("multiple");
    expect(q.requiredAnswers).toBe(2);
    expect(q.difficulty).toBe(2);
    expect(q.tags).toContain("difficulty_inferred");
  });

  test("preserves flagged records with withheld or invalid answers", () => {
    const input = `## ITE302C-Q0008\n- **chapter_id:** \`ITE302C-C7\`\n- **concept_id:** \`ITE302C-C7-DIKW\`\n- **type:** \`single_choice\`\n- **quality_status:** \`ambiguous\`\n\n**Question:** Which level?\n\n- A. Data\n- B. Knowledge\n\n**correct_answer(s):** _withheld from clean bank pending review_`;
    const [q] = parseMasterQuestions(input, { id:"ite302c", chapterPrefix:"ITE302C" });
    expect(q.id).toBe("ITE302C-Q0008");
    expect(q.correctAnswerIds).toEqual([]);
    expect(q.qualityStatus).toBe("ambiguous");
    expect(q.tags).toContain("answer_missing_or_invalid");
  });

  test("counts concepts from both questions and textbook-only knowledge", () => {
    expect(countConcepts(
      [{ conceptId: "MLN111-C1-01" }, { conceptId: "MLN111-C1-01" }],
      [{ id: "MLN111-C1-01" }, { id: "MLN111-C1-05" }]
    )).toBe(2);
  });
});
