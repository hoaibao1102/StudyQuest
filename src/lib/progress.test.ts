import { describe, expect, test } from "vitest";
import { calculateLevelInfo, calculateStars, getTotalXP, updateProgress } from "./progress";

describe("adventure progress & level system", () => {
  test("awards stars at 70/80/90 percent", () => {
    expect(calculateStars(0.69)).toBe(0);
    expect(calculateStars(0.7)).toBe(1);
    expect(calculateStars(0.85)).toBe(2);
    expect(calculateStars(0.9)).toBe(3);
  });

  test("calculates level 1 for new users with 0 XP", () => {
    const levelInfo = calculateLevelInfo(0);
    expect(levelInfo.level).toBe(1);
    expect(levelInfo.currentLevelXP).toBe(0);
    expect(levelInfo.nextLevelXP).toBe(200);
    expect(levelInfo.progressPercent).toBe(0);
    expect(levelInfo.title).toBe("Tân binh tập sự");
  });

  test("calculates level up progression correctly", () => {
    // 0 -> Level 1 (needs 200)
    // 250 -> Level 2 (200 spent, 50 in current, needs 300)
    const levelInfo = calculateLevelInfo(250);
    expect(levelInfo.level).toBe(2);
    expect(levelInfo.currentLevelXP).toBe(50);
    expect(levelInfo.nextLevelXP).toBe(300);
    expect(levelInfo.title).toBe("Học giả tập sự");
  });

  test("never lowers best stars and accumulates XP correctly", () => {
    const first = updateProgress(undefined, 0.9);
    expect(first.stars).toBe(3);
    expect(first.firstClearAwarded).toBe(true);
    expect(first.xpAwarded).toBe(100);

    const replay = updateProgress(first, 0.7);
    expect(replay.stars).toBe(3);
    expect(replay.firstClearAwarded).toBe(true);
    expect(replay.xpAwarded).toBe(100);

    const store = { "mln111:ch1": replay };
    expect(getTotalXP(store)).toBe(100);
  });
});
