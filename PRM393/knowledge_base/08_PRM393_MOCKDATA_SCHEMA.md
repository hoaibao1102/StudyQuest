# PRM393 Mockdata Schema

## Design assumptions

- Frontend-only.
- Static JSON files imported or fetched from `/public/data`.
- No backend required for study content.
- `localStorage` or IndexedDB stores progress/mastery/streak/SRS state.
- Source content and learning progress are intentionally separated.

## TypeScript contracts

```ts
export type QualityStatus = "clean" | "ambiguous" | "needs_review";
export type QuestionType = "single_choice" | "multiple_choice";
export type Difficulty = "easy" | "medium" | "hard" | "review";

export interface Subject {
  id: string;              // PRM393
  code: string;            // PRM393
  name: string;            // Mobile Programming
  datasetVersion: string;  // V0_1
  chapterIds: string[];
}

export interface Chapter {
  id: string;
  subjectId: string;
  name: string;
  description?: string;
  topicIds?: string[];
  conceptIds: string[];
  order?: number;
  officialChapterNumber?: number | null; // null unless source proves it
}

export interface Concept {
  id: string;
  subjectId: string;
  chapterId: string;
  topic: string;
  name: string;
  questionIds: string[];
  frequency: number;
  sourceExamCount: number;
  importance: 1 | 2 | 3 | 4 | 5;
}

export interface KnowledgeEntry {
  id: string;
  conceptId: string;
  definition?: string[];
  keywords?: string[];
  keyPoints?: string[];
  distinctions?: string[];
  traps?: string[];
  examPatterns?: string[];
  sourceExamIds: string[];
  frequency: number;
  importance: 1 | 2 | 3 | 4 | 5;
}

export interface QuestionOption {
  id: "A" | "B" | "C" | "D" | string;
  text: string;
}

export interface SourceOccurrence {
  examId: string;
  sourceId: string;
  file: string;
  questionNumber: number;
}

export interface Question {
  id: string;
  subjectId: string;
  chapterId: string;
  conceptId: string;
  type: QuestionType;
  question: string;
  options: QuestionOption[];
  correctAnswer?: string;       // single choice
  correctAnswers?: string[];    // multiple choice
  explanation?: string;
  sourceExamIds: string[];
  sourceOccurrences: SourceOccurrence[];
  frequency: number;
  difficulty: Difficulty;
  trap?: string;
  qualityStatus: QualityStatus;
  qualityNote?: string;
}

export interface Flashcard {
  id: string;
  subjectId: string;
  conceptId: string;
  question: string;
  answer: string;
}

export interface ExamQuestionRef {
  order: number;
  questionId: string;
}

export interface Exam {
  id: string;
  subjectId: string;
  sourceId: string;
  semester?: string;
  examType?: string;
  title: string;
  questionRefs: ExamQuestionRef[];
}

export interface ReviewIssue {
  id: string;
  questionId?: string;
  source: string;
  problem: string;
  currentAnswers?: string[];
  reason: string;
  recommendedAction: string;
}
```

## Suggested static files

```text
/public/data/prm393/
  subject.json
  chapters.json
  concepts.json
  knowledge.json
  questions.json
  flashcards.json
  exams.json
  review-issues.json
```

## Progress schema: local-only

```ts
export interface QuestionProgress {
  questionId: string;
  attempts: number;
  correct: number;
  wrong: number;
  lastAnsweredAt?: string;
  lastAnswer?: string[];
}

export interface ConceptMastery {
  conceptId: string;
  mastery: number; // 0..1
  xp: number;
  nextReviewAt?: string;
  intervalDays?: number;
  easeFactor?: number;
}

export interface UserStudyState {
  subjectId: string;
  xp: number;
  level: number;
  streakDays: number;
  combo: number;
  achievements: string[];
  questions: Record<string, QuestionProgress>;
  concepts: Record<string, ConceptMastery>;
  mistakeQuestionIds: string[];
}
```

## Mode filters

```ts
const cleanBank = questions.filter(q => q.qualityStatus === "clean");
const chapterBank = (chapterId: string) =>
  cleanBank.filter(q => q.chapterId === chapterId);
const conceptBank = (conceptId: string) =>
  cleanBank.filter(q => q.conceptId === conceptId);
const mistakes = (state: UserStudyState) =>
  cleanBank.filter(q => state.mistakeQuestionIds.includes(q.id));
```

## Frontend mode mapping

- Learn Mode → `knowledge + concepts`
- Flashcard → `flashcards`
- Random Quiz → random sample of `cleanBank`
- Chapter Quiz → `chapterBank(chapterId)`
- Concept Quiz → `conceptBank(conceptId)`
- Full Exam → `exams[].questionRefs`, with configurable policy for flagged questions
- Speed Run / Boss Battle → clean questions weighted by importance/frequency
- Weakness Hunt → low `ConceptMastery.mastery`
- Review Mistakes → `mistakeQuestionIds`
- Spaced repetition → `nextReviewAt`, `intervalDays`, `easeFactor`
- Knowledge Map → chapter → topic → concept, overlay mastery
