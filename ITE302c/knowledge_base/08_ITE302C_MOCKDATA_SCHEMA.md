# ITE302c Mock Data Schema

## Design goals
- Frontend-only.
- Static JSON imported or fetched from `/public/data`.
- Progress stored in IndexedDB/localStorage.
- No backend required.
- `qualityStatus = "clean"` is the default filter for standard Exam Mode.

## TypeScript schema

```ts
export type QualityStatus = "clean" | "ambiguous" | "needs_review";
export type QuestionType = "single_choice" | "multiple_select";
export type Difficulty = "easy" | "medium" | "hard";

export interface Subject {
  id: string;            // ITE302C
  code: string;          // ITE302c
  name: string;          // Ethics in IT / AI Ethics
  version: string;       // V0.1
  chapterIds: string[];
}

export interface Chapter {
  id: string;            // ITE302C-C3
  subjectId: string;
  order: number;
  title: string;
  description?: string;
  conceptIds: string[];
}

export interface Concept {
  id: string;            // ITE302C-C3-DIFFERENTIAL-PRIVACY
  subjectId: string;
  chapterId: string;
  topic: string;
  name: string;
  frequency: number;
  examSpread: number;
  importance: 1 | 2 | 3 | 4 | 5;
  questionIds: string[];
  knowledgeEntryId: string;
}

export interface KnowledgeEntry {
  id: string;
  conceptId: string;
  definition?: string;
  keywords: string[];
  keyPoints: string[];
  characteristics?: string[];
  conditions?: string[];
  relations?: string[];
  confusions?: string[];
  comparisons?: Array<{ label: string; value: string }>;
  traps: string[];
  memoryTips?: string[];
  examPatterns: string[];
  sourceExamIds: string[];
  frequency: number;
  importance: 1 | 2 | 3 | 4 | 5;
}

export interface QuestionOption {
  id: "A" | "B" | "C" | "D";
  text: string;
}

export interface SourceLocation {
  examId: string;
  file: string;
  questionNumber: number;
}

export interface Question {
  id: string;            // ITE302C-Q0001
  subjectId: string;
  chapterId: string;
  conceptId: string;
  type: QuestionType;
  question: string;
  options: QuestionOption[];
  correctAnswer?: string;
  correctAnswers?: string[];
  explanation?: string;
  sourceExamIds: string[];
  sourceLocations: SourceLocation[];
  frequency: number;
  difficulty: Difficulty;
  trap?: string;
  qualityStatus: QualityStatus;
}

export interface Flashcard {
  id: string;            // ITE302C-FC0001
  conceptId: string;
  front: string;
  back: string;
}

export interface ExamQuestionRef {
  order: number;
  questionId: string;
}

export interface Exam {
  id: string;            // ITE302C-EXAM-SU26-FE
  subjectId: string;
  semester: string;
  type: "FE" | "RE";
  originalFile: string;
  questions: ExamQuestionRef[];
}

export interface UserQuestionProgress {
  questionId: string;
  attempts: number;
  correctAttempts: number;
  lastAnswer?: string[];
  lastAttemptAt?: string;
  mistakeReasons?: Array<
    | "knowledge_gap"
    | "concept_confusion"
    | "formula_gap"
    | "keyword_missed"
    | "distractor_trap"
    | "calculation_error"
    | "exception_missed"
  >;
}

export interface ConceptMastery {
  conceptId: string;
  mastery: number;       // 0..1
  xp: number;
  lastReviewedAt?: string;
  nextReviewAt?: string;
}

export interface LocalProgressState {
  subjectId: string;
  streak: number;
  level: number;
  totalXp: number;
  questionProgress: Record<string, UserQuestionProgress>;
  conceptMastery: Record<string, ConceptMastery>;
  wrongQuestionIds: string[];
  favoriteQuestionIds: string[];
}
```

## Suggested JSON files
```text
/public/data/ite302c/
├── subject.json
├── chapters.json
├── concepts.json
├── knowledge.json
├── questions.json
├── flashcards.json
└── exams.json
```

## Frontend mode mapping
- **Learn Mode:** chapter → concept → knowledge.
- **Flashcard:** `flashcards` filtered by concept/chapter and spaced repetition state.
- **Random Quiz:** random `questions` where `qualityStatus === "clean"`.
- **Quiz by chapter/concept:** filter on `chapterId` / `conceptId`.
- **Full Exam:** load an `Exam` and resolve `questionId` references in original order.
- **Speed Run:** clean questions + time limit + combo scoring.
- **Boss Battle:** high-importance concepts + hard questions + mistake history.
- **Weakness Hunt:** lowest `ConceptMastery.mastery` first.
- **Review Mistakes:** `wrongQuestionIds`.
- **Knowledge Map:** chapters + concepts + mastery state.

## Storage recommendation
- Use **localStorage** for small preferences, streak, UI settings, current session.
- Use **IndexedDB** for attempt history, spaced-repetition schedule, and larger progress objects.
- Export/import progress as JSON if user wants portability without a backend.
