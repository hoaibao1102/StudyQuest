export interface StageProgress {
  stars: 0 | 1 | 2 | 3;
  bestScore: number;
  attempts: number;
  firstClearAwarded: boolean;
  xpAwarded: number;
  lessonCompleted?: boolean;
}

export function calculateStars(score: number): 0 | 1 | 2 | 3 {
  return score >= 0.9 ? 3 : score >= 0.8 ? 2 : score >= 0.7 ? 1 : 0;
}

export function updateProgress(old: StageProgress | undefined, score: number): StageProgress {
  const passed = score >= 0.7;
  const newStars = calculateStars(score);
  const bestStars = Math.max(old?.stars ?? 0, newStars) as 0 | 1 | 2 | 3;
  const isFirstClear = !old?.firstClearAwarded && passed;
  const isFirstThreeStar = (old?.stars ?? 0) < 3 && newStars === 3;

  // 100 XP for 1st clear, +50 XP bonus for achieving 3 stars
  let xp = 0;
  if (isFirstClear) xp += 100;
  if (isFirstThreeStar && !isFirstClear) xp += 50;

  return {
    stars: bestStars,
    bestScore: Math.max(old?.bestScore ?? 0, score),
    attempts: (old?.attempts ?? 0) + 1,
    firstClearAwarded: (old?.firstClearAwarded ?? false) || passed,
    xpAwarded: (old?.xpAwarded ?? 0) + xp,
    lessonCompleted: true,
  };
}

export type ProgressStore = Record<string, StageProgress>;

const KEY = "studyquest-progress-v1";
const STREAK_KEY = "studyquest-streak-v1";

export const loadProgress = (): ProgressStore => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
};

export const saveProgress = (p: ProgressStore) => localStorage.setItem(KEY, JSON.stringify(p));

export function markLessonCompleted(stageKey: string): ProgressStore {
  const currentStore = loadProgress();
  const existing = currentStore[stageKey] || {
    stars: 0,
    bestScore: 0,
    attempts: 0,
    firstClearAwarded: false,
    xpAwarded: 0,
  };
  const updated: ProgressStore = {
    ...currentStore,
    [stageKey]: {
      ...existing,
      lessonCompleted: true,
    },
  };
  saveProgress(updated);
  return updated;
}

export function getTotalXP(progress: ProgressStore): number {
  return Object.values(progress).reduce((sum, p) => sum + (p.xpAwarded ?? (p.stars ? 100 : 0)), 0);
}

export interface LevelInfo {
  level: number;
  currentLevelXP: number;
  nextLevelXP: number;
  progressPercent: number;
  totalXP: number;
  title: string;
}

const TITLES = [
  "Tân binh tập sự",
  "Học giả tập sự",
  "Hiệp sĩ tri thức",
  "Chiến binh tinh anh",
  "Bậc thầy thấu suốt",
  "Đại sư tri thức",
  "Huyền thoại tri thức",
];

export function calculateLevelInfo(totalXP: number): LevelInfo {
  let level = 1;
  let accumulatedXP = 0;
  let nextRequirement = 200;

  while (totalXP >= accumulatedXP + nextRequirement) {
    accumulatedXP += nextRequirement;
    level++;
    nextRequirement += 100;
  }

  const currentLevelXP = totalXP - accumulatedXP;
  const progressPercent = Math.min(100, Math.round((currentLevelXP / nextRequirement) * 100));
  const titleIndex = Math.min(level - 1, TITLES.length - 1);

  return {
    level,
    currentLevelXP,
    nextLevelXP: nextRequirement,
    progressPercent,
    totalXP,
    title: TITLES[titleIndex],
  };
}

export interface StreakInfo {
  streak: number;
  lastDate: string | null;
}

export function loadStreak(): StreakInfo {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { streak: 0, lastDate: null };
    return JSON.parse(raw);
  } catch {
    return { streak: 0, lastDate: null };
  }
}

export function recordDailyActivity(): StreakInfo {
  const today = new Date().toISOString().split("T")[0];
  const current = loadStreak();

  if (current.lastDate === today) {
    return current;
  }

  let nextStreak = 1;
  if (current.lastDate) {
    const last = new Date(current.lastDate);
    const now = new Date(today);
    const diffDays = Math.round((now.getTime() - last.getTime()) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      nextStreak = current.streak + 1;
    }
  }

  const updated: StreakInfo = { streak: nextStreak, lastDate: today };
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
  return updated;
}
