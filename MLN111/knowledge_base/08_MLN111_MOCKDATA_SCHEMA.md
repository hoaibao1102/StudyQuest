# MLN111 — MOCKDATA SCHEMA GUIDE

**Mục đích:** quy ước chuyển bộ Markdown hiện tại sang JSON/TypeScript mock data cho frontend.

# 1. File đích

```text
src/data/subjects/mln111/
├── subject.json
├── chapters.json
├── concepts.json
├── knowledge.json
├── questions.json
├── flashcards.json
└── exams.json
```

# 2. Stable IDs

Không dùng index mảng làm ID.

- Subject: `mln111`
- Chapter: `MLN111-C1`, `MLN111-C2`, `MLN111-C3`
- Concept: ví dụ `MLN111-C2-13`
- Question: `MLN111-Q-XXXXXXXX` (hash ổn định từ normalized question)
- Exam: ví dụ `MLN111-SU26-B5-FE`

# 3. Question schema

```ts
type QuestionQuality = "clean" | "needs_review";

interface QuestionOption {
  id: "A" | "B" | "C" | "D";
  text: string;
}

interface Question {
  id: string;
  subjectId: "mln111";
  chapterId: "MLN111-C1" | "MLN111-C2" | "MLN111-C3";
  conceptId: string;

  type: "single" | "multiple";
  requiredAnswers: number;

  question: string;
  options: QuestionOption[];

  correctAnswerIds: string[];
  answerSourceText: string;

  explanation?: string;

  frequency: number;
  quality: QuestionQuality;

  sourceRefs: string[];
}
```

# 4. Clean mode

```ts
const cleanQuestions = questions.filter(
  q => q.quality === "clean"
);
```

`needs_review` chỉ hiện khi user bật chế độ câu chưa xác minh.

# 5. Concept schema

```ts
interface Concept {
  id: string;
  subjectId: "mln111";
  chapterId: string;

  title: string;
  description: string;

  importance: 1 | 2 | 3 | 4 | 5;

  uniqueQuestionCount: number;
  maxExactFrequency: number;
}
```

# 6. Exam schema

```ts
interface Exam {
  id: string;
  subjectId: "mln111";
  sourceFile: string;
  questionIds: string[]; // giữ đúng thứ tự đề gốc
}
```

# 7. Knowledge schema

```ts
interface KnowledgeEntry {
  conceptId: string;

  corePoints: string[];
  traps: string[];
  representativeQuestionIds: string[];
}
```

# 8. Flashcard schema

```ts
interface Flashcard {
  id: string;
  subjectId: "mln111";
  conceptId: string;

  front: string;
  back: string;

  hint?: string;
  sourceQuestionId?: string;
}
```

# 9. Data build order

```text
SOURCE_INDEX
   ↓
CONCEPT_MAP
   ↓
MASTER_QUESTIONS
   ↓
REVIEW_ISSUES
   ↓
MASTER_KNOWLEDGE
   ↓
FLASHCARDS
   ↓
EXAM_MAP
   ↓
JSON / TS
```

# 10. Validation bắt buộc

Trước khi load frontend:

- `Question.id` unique.
- `Concept.id` tồn tại.
- `Question.conceptId` phải trỏ tới concept hợp lệ.
- Option được tham chiếu bởi `correctAnswerIds` phải tồn tại.
- `single` phải có 1 đáp án.
- `multiple` phải có từ 2 đáp án trở lên hoặc đúng số `requiredAnswers`.
- Câu `needs_review` không vào clean exam.
- Mọi `Exam.questionIds` phải tồn tại trong Question Bank.
