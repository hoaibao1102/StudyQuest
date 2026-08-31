import { describe, expect, test } from "vitest";
import { calculateStars, updateProgress } from "./progress";

describe("adventure progress", () => {
  test("awards stars at 70/80/90 percent", () => {
    expect(calculateStars(0.69)).toBe(0);
    expect(calculateStars(0.7)).toBe(1);
    expect(calculateStars(0.85)).toBe(2);
    expect(calculateStars(0.9)).toBe(3);
  });
  test("never lowers best stars and only grants first-clear once", () => {
    const first = updateProgress(undefined, 0.9);
    const replay = updateProgress(first, 0.7);
    expect(replay.stars).toBe(3);
    expect(first.firstClearAwarded).toBe(true);
    expect(replay.firstClearAwarded).toBe(true);
    expect(replay.xpAwarded).toBe(0);
  });
});
