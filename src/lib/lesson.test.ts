import { describe, expect, test } from "vitest";
import { buildLessonSteps, highlightKeywords, allCheckpointsPassed } from "./lesson";
import type { Knowledge, Question } from "../types";

const knowledge: Knowledge[] = [{
  id:"PRM393-ANIM-CURVES", subjectId:"prm393", chapterId:"PRM393-CH-ANIMATION",
  title:"CurvedAnimation and animation curves",
  summary:["CurvedAnimation áp dụng đường cong phi tuyến vào AnimationController.", "Curves.bounceOut tạo hiệu ứng nảy tự nhiên."],
  traps:["Dễ nhầm bounceOut với linear."]
}];
const questions = [{
  id:"Q1", subjectId:"prm393", chapterId:"PRM393-CH-ANIMATION", conceptId:"PRM393-ANIM-CURVES",
  type:"single", requiredAnswers:1, question:"Curve nào tạo hiệu ứng nảy?", options:[{id:"A",label:"A",text:"bounceOut"},{id:"B",label:"B",text:"linear"}],
  correctAnswerIds:["A"], explanation:"bounceOut mô phỏng độ nảy.", trap:"Đừng chọn linear.", difficulty:2, tags:[], frequency:1, qualityStatus:"clean"
}] as Question[];

describe("interactive lesson builder", () => {
  test("turns dry knowledge into concept with rich content and checkpoint steps", () => {
    const steps = buildLessonSteps(knowledge, questions);
    expect(steps.map(s => s.type)).toEqual(["intro", "concept", "checkpoint"]);
    expect(steps.at(-1)?.question?.id).toBe("Q1");
  });

  test("blocks the challenge until every checkpoint is answered correctly", () => {
    const steps = buildLessonSteps(knowledge, questions);
    expect(allCheckpointsPassed(steps, {})).toBe(false);
    expect(allCheckpointsPassed(steps, { "PRM393-ANIM-CURVES:checkpoint": false })).toBe(false);
    expect(allCheckpointsPassed(steps, { "PRM393-ANIM-CURVES:checkpoint": true })).toBe(true);
  });

  test("highlights meaningful terms without matching tiny words", () => {
    const parts = highlightKeywords("CurvedAnimation dùng AnimationController và bounceOut", ["CurvedAnimation","AnimationController","bounceOut","và"]);
    expect(parts.filter(p=>p.highlight).map(p=>p.text)).toEqual(["CurvedAnimation","AnimationController","bounceOut"]);
  });
});
