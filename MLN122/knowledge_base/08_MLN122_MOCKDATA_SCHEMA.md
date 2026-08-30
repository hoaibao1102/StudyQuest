# MLN122 — MOCKDATA SCHEMA GUIDE

**Mục đích:** Quy ước chi tiết chuyển đổi bộ Markdown Knowledge Base của MLN122 sang JSON/TypeScript mock data cho StudyQuest frontend.

# 1. Cấu trúc thư mục đích

```text
src/data/subjects/mln122/
├── subject.json
├── chapters.json
├── concepts.json
├── knowledge.json
├── questions.json
├── flashcards.json
└── exams.json
```

# 2. Stable IDs

Không dùng index mảng làm ID để đảm bảo tính toàn vẹn dữ liệu khi nâng cấp frontend.

- Subject: `mln122`
- Chapter: `MLN122-C1`, `MLN122-C2`, `MLN122-C3`, `MLN122-C4`, `MLN122-C5`, `MLN122-C6`
- Concept: ví dụ `MLN122-C6-01`
- Question: `MLN122-Q-XXXXXXXX` (hash 8 ký tự đi từ normalized question text)
- Exam: ví dụ `MLN122-SU25-C1FE`

# 3. Question Schema

```ts
type QuestionQuality = "clean" | "needs_review";

interface QuestionOption {
  id: "A" | "B" | "C" | "D";
  text: string;
}

interface Question {
  id: string;
  subjectId: "mln122";
  chapterId: "MLN122-C1" | "MLN122-C2" | "MLN122-C3" | "MLN122-C4" | "MLN122-C5" | "MLN122-C6";
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

# 4. Clean Mode Filtering

```ts
const cleanQuestions = questions.filter(
  q => q.quality === "clean"
);
```

`needs_review` chỉ hiển thị khi người dùng chủ động bật chế độ luyện tập câu hỏi mở rộng / chưa xác minh.

# 5. Concept Schema

```ts
interface Concept {
  id: string;
  subjectId: "mln122";
  chapterId: string;

  title: string;
  description: string;

  importance: 1 | 2 | 3 | 4 | 5;

  uniqueQuestionCount: number;
  maxExactFrequency: number;
}
```

# 6. Exam Schema

```ts
interface Exam {
  id: string;
  subjectId: "mln122";
  sourceFile: string;
  questionIds: string[]; // 60 câu đúng thứ tự đề gốc
}
```

# 7. Knowledge Schema

```ts
interface KnowledgeEntry {
  conceptId: string;

  corePoints: string[];
  traps: string[];
  representativeQuestionIds: string[];
}
```

# 8. Flashcard Schema

```ts
interface Flashcard {
  id: string;
  subjectId: "mln122";
  conceptId: string;

  front: string;
  back: string;

  hint?: string;
  sourceQuestionId?: string;
}
```

# 9. Data Build Order

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

Trước khi load dữ liệu vào StudyQuest frontend:

- `Question.id` phải là duy nhất (unique).
- `Concept.id` phải tồn tại trong `concepts.json`.
- `Question.conceptId` phải trỏ tới concept hợp lệ.
- Option được tham chiếu bởi `correctAnswerIds` phải tồn tại trong danh sách options của câu hỏi.
- Câu hỏi dạng `single` phải có đúng 1 đáp án đúng trong `correctAnswerIds`.
- Câu hỏi dạng `multiple` phải có từ 2 đáp án trở lên hoặc đúng bằng `requiredAnswers`.
- Các câu có `quality === "needs_review"` không được đưa vào Clean Exam Mode.
- Mọi `Exam.questionIds` trong `exams.json` phải tồn tại đầy đủ trong Question Bank.
