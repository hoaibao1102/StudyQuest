import { describe, expect, test } from "vitest";
import { createQuiz, gradeAnswer } from "./quiz";

const questions = [
  { id:"1", qualityStatus:"clean", correctAnswerIds:["A"], options:[{id:"A"},{id:"B"}] },
  { id:"2", qualityStatus:"ambiguous", correctAnswerIds:[], options:[{id:"A"},{id:"B"}] },
  { id:"3", qualityStatus:"clean", correctAnswerIds:["A","B"], options:[{id:"A"},{id:"B"},{id:"C"}] }
];

describe("quiz engine", () => {
  test("only selects answerable clean questions", () => {
    expect(createQuiz(questions as never[], 10).map(q=>q.id)).toEqual(["1","3"]);
  });
  test("grades exact answer sets without partial credit", () => {
    expect(gradeAnswer(["B","A"],["A","B"])).toBe(true);
    expect(gradeAnswer(["A"],["A","B"])).toBe(false);
  });
});
