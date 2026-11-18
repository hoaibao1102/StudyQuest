import { describe, expect, test } from "vitest";
import { createQuiz, gradeAnswer, nextUnansweredIndex, pickQuestions } from "./quiz";

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

describe("practice navigation", () => {
  test("pickQuestions keeps original order when shuffle is off", () => {
    expect(pickQuestions(["a","b","c","d"], 2, false)).toEqual(["a","b"]);
    expect(pickQuestions(["a","b","c","d"], null, false)).toEqual(["a","b","c","d"]);
  });
  test("nextUnansweredIndex skips answered ones and wraps around", () => {
    const ids = ["1","2","3","4"];
    expect(nextUnansweredIndex(ids, new Set(["3"]), 0)).toBe(1);
    expect(nextUnansweredIndex(ids, new Set(["3","4"]), 2)).toBe(0);
    expect(nextUnansweredIndex(ids, new Set(["1","2","3","4"]), 0)).toBe(-1);
  });
});
