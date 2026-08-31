import { describe, expect, test } from "vitest";
import { parseKnowledge } from "./parser.mjs";

describe("knowledge parser", () => {
  test("uses explicit PRM chapter id instead of guessing C1", () => {
    const input = `# Concept: CurvedAnimation and animation curves\n\n**ID:** \`PRM393-ANIM-CURVES\`  \n**Chapter:** Animations (\`PRM393-CH-ANIMATION\`)  \n**Topic:** Curves\n\n## Định nghĩa / ý cốt lõi từ source\n- CurvedAnimation áp dụng đường cong phi tuyến.`;
    const [knowledge] = parseKnowledge(input, { id:"prm393", chapterPrefix:"PRM393" });
    expect(knowledge.chapterId).toBe("PRM393-CH-ANIMATION");
    expect(knowledge.title).toBe("CurvedAnimation and animation curves");
  });
});
