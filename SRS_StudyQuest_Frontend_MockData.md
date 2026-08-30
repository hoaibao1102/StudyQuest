# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
# StudyQuest Frontend — Hệ thống học & luyện thi trắc nghiệm gamified

**Phiên bản:** 1.0  
**Trạng thái:** Draft baseline  
**Phạm vi phiên bản đầu:** Frontend-only + Mock Data  
**Môn triển khai đầu tiên:** MLN111 — Triết học Mác - Lênin  
**Định hướng mở rộng:** 4 môn trắc nghiệm trong kỳ học tới

---

# 1. MỤC ĐÍCH TÀI LIỆU

Tài liệu này mô tả yêu cầu phần mềm cho một web frontend phục vụ:

- Học kiến thức theo chương/chủ đề.
- Luyện câu hỏi trắc nghiệm.
- Làm lại đề thi cũ.
- Ghi nhớ sâu bằng flashcard, repetition và active recall.
- Theo dõi điểm yếu cá nhân.
- Tạo cảm giác **vừa học vừa chơi** thông qua XP, level, combo, streak, challenge, boss battle và achievement.
- Hoạt động hoàn toàn bằng **Frontend + Mock Data**, chưa triển khai backend.

Tài liệu được dùng làm cơ sở cho:

- Thiết kế UI/UX.
- Thiết kế data model.
- Lập trình frontend.
- Xây dựng mock data.
- Kiểm thử chức năng.
- Mở rộng sang các môn học khác.

---

# 2. TẦM NHÌN SẢN PHẨM

Thay vì xây một website chỉ có:

> “Câu hỏi → chọn A/B/C/D → xem điểm”

hệ thống phải hoạt động như một **personal learning game engine**.

Vòng lặp học tập chính:

```text
HỌC KHÁI NIỆM
      ↓
LÀM CÂU HỎI
      ↓
NHẬN PHẢN HỒI NGAY
      ↓
GHI NHẬN LỖI
      ↓
PHÂN TÍCH ĐIỂM YẾU
      ↓
ÔN LẠI ĐÚNG KIẾN THỨC YẾU
      ↓
LẶP LẠI Ở THỜI ĐIỂM PHÙ HỢP
      ↓
TĂNG MASTERY / XP / LEVEL
```

Mục tiêu cuối cùng không phải chỉ là “làm nhiều câu”, mà là:

> **Nắm được concept phía sau câu hỏi, nhận diện được bẫy, và vẫn trả lời đúng khi đề đổi cách diễn đạt.**

---

# 3. PHẠM VI HỆ THỐNG

## 3.1. Trong phạm vi phiên bản 1

Hệ thống phải hỗ trợ:

1. Nhiều môn học.
2. Nhiều chương trong mỗi môn.
3. Nhiều concept trong mỗi chương.
4. Kho kiến thức.
5. Question bank.
6. Flashcard.
7. Đề thi cũ.
8. Quiz ngẫu nhiên.
9. Quiz theo chương/chủ đề.
10. Exam mode.
11. Speed mode.
12. Boss battle / trap questions.
13. Weakness mode.
14. Review mistakes.
15. XP.
16. Level.
17. Combo.
18. Streak.
19. Achievement.
20. Mastery theo concept.
21. Lịch sử làm bài.
22. Local statistics.
23. Bookmark câu hỏi.
24. Import/export progress.
25. Offline/local-first.
26. Responsive desktop/mobile.
27. Dark mode.

---

## 3.2. Ngoài phạm vi phiên bản 1

Không triển khai:

- Backend riêng.
- REST API / GraphQL.
- Database server.
- Đăng ký tài khoản.
- Đăng nhập.
- Google OAuth.
- Cloud sync.
- Multiplayer.
- Global leaderboard.
- Bạn bè.
- Chat.
- Admin dashboard online.
- Thanh toán.
- Phân quyền người dùng.
- Anti-cheat.
- Server-side exam security.

Các tính năng trên có thể được xem xét ở phiên bản sau.

---

# 4. ĐỐI TƯỢNG NGƯỜI DÙNG

## 4.1. Primary User

Sinh viên cần ôn nhiều môn trắc nghiệm trong một học kỳ.

Đặc điểm:

- Học bằng laptop là chính.
- Có thể sử dụng điện thoại để ôn nhanh.
- Muốn học theo đề thật.
- Cần biết mình yếu phần nào.
- Dễ chán nếu giao diện quá giống LMS truyền thống.
- Cần feedback nhanh.
- Muốn học theo session ngắn.

---

# 5. NGUYÊN TẮC THIẾT KẾ

## 5.1. Learning-first

Gamification phải phục vụ việc nhớ kiến thức.

Không tạo animation/game mechanic chỉ để trang trí.

---

## 5.2. Active Recall

Người học phải chủ động nhớ và trả lời trước khi xem đáp án.

---

## 5.3. Immediate Feedback

Sau khi trả lời, hệ thống phải giải thích:

- Đúng hay sai.
- Đáp án đúng.
- Vì sao đúng.
- Vì sao phương án người dùng chọn sai.
- Concept liên quan.
- Bẫy trắc nghiệm nếu có.

---

## 5.4. Error-driven Learning

Câu sai phải được lưu và quay lại trong các session sau.

---

## 5.5. Concept over Memorization

Nhiều câu hỏi khác cách diễn đạt nhưng cùng kiến thức phải cùng trỏ về một `conceptId`.

---

## 5.6. Local-first

Dữ liệu học tập phải hoạt động không cần server.

---

# 6. KIẾN TRÚC TỔNG QUAN

```text
                    STATIC / MOCK DATA
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
     Subjects          Concepts          Questions
         │                 │                 │
         ├──────────── Knowledge ────────────┤
         │                                   │
         └────────────── Exams ──────────────┘
                           │
                           ▼
                    DATA REPOSITORY
                           │
                           ▼
                    LEARNING ENGINE
         ┌─────────────────┼─────────────────┐
         │                 │                 │
       Quiz            Mastery         Review Engine
         │                 │                 │
         ├────────── Gamification ───────────┤
         │                                   │
         ▼                                   ▼
                         UI
                           │
                           ▼
                LOCAL STORAGE LAYER
                  ├── localStorage
                  └── IndexedDB
```

---

# 7. CÔNG NGHỆ ĐỀ XUẤT

Không bắt buộc nhưng khuyến nghị:

- **React**
- **TypeScript**
- **Vite** hoặc **Next.js**
- **Tailwind CSS**
- **Framer Motion**
- **Zustand** hoặc Context cho global state nhỏ
- **IndexedDB**
  - Dexie.js có thể được dùng làm wrapper
- **localStorage**
- Static JSON / TypeScript mock data
- PWA ở phase sau

---

# 8. CẤU TRÚC DỮ LIỆU

## 8.1. Subject

```ts
interface Subject {
  id: string;
  code: string;
  name: string;
  description?: string;

  totalChapters: number;
  totalQuestions: number;
  totalConcepts: number;

  icon?: string;
}
```

Ví dụ:

```json
{
  "id": "mln111",
  "code": "MLN111",
  "name": "Triết học Mác - Lênin",
  "totalChapters": 3,
  "totalQuestions": 309,
  "totalConcepts": 80
}
```

---

# 9. CHAPTER

```ts
interface Chapter {
  id: string;
  subjectId: string;

  order: number;
  title: string;
  description?: string;

  importance?: 1 | 2 | 3 | 4 | 5;
}
```

---

# 10. CONCEPT

Concept là **đơn vị kiến thức trung tâm** của toàn bộ hệ thống.

```ts
interface Concept {
  id: string;

  subjectId: string;
  chapterId: string;

  title: string;

  definition?: string;

  keywords: string[];

  importantPoints: string[];

  commonTraps?: string[];

  relatedConceptIds?: string[];

  importance: 1 | 2 | 3 | 4 | 5;

  frequency?: number;
}
```

Ví dụ:

```json
{
  "id": "MLN111-C2-MOTION",
  "subjectId": "mln111",
  "chapterId": "MLN111-C2",
  "title": "Vận động",
  "keywords": [
    "phương thức tồn tại",
    "thuộc tính cố hữu",
    "vật chất"
  ],
  "importantPoints": [
    "Vận động là phương thức tồn tại của vật chất",
    "Vận động mang tính tuyệt đối",
    "Đứng im mang tính tương đối"
  ],
  "commonTraps": [
    "Nhầm vận động là hình thức tồn tại",
    "Nhầm đứng im là tuyệt đối"
  ],
  "importance": 5
}
```

---

# 11. KNOWLEDGE ENTRY

```ts
interface KnowledgeEntry {
  id: string;

  conceptId: string;

  summary: string;

  definition?: string;

  characteristics?: string[];

  conditions?: string[];

  meaning?: string[];

  traps?: string[];

  compareWith?: string[];

  memoryTips?: string[];
}
```

---

# 12. QUESTION

```ts
interface Question {
  id: string;

  subjectId: string;
  chapterId: string;
  conceptId: string;

  sourceExamIds?: string[];

  type:
    | "single"
    | "multiple"
    | "true_false"
    | "ordering"
    | "matching";

  question: string;

  options: QuestionOption[];

  correctAnswerIds: string[];

  explanation: string;

  wrongAnswerExplanations?: Record<string, string>;

  difficulty: 1 | 2 | 3 | 4;

  tags: string[];

  trap?: string;

  frequency?: number;

  verified: boolean;

  qualityStatus:
    | "clean"
    | "ambiguous"
    | "needs_review";

  image?: string;
}
```

---

## 12.1. QuestionOption

```ts
interface QuestionOption {
  id: string;
  label: string;
  text: string;
}
```

---

# 13. EXAM

```ts
interface Exam {
  id: string;

  subjectId: string;

  code: string;
  title: string;

  semester?: string;

  questionIds: string[];

  durationMinutes?: number;

  source?: string;
}
```

Ví dụ:

```json
{
  "id": "MLN111-SU26-B5-FE",
  "subjectId": "mln111",
  "code": "SU26_B5_FE",
  "title": "MLN111 SU26 B5 FE",
  "questionIds": [
    "MLN111-Q001",
    "MLN111-Q002"
  ],
  "durationMinutes": 60
}
```

---

# 14. FLASHCARD

```ts
interface Flashcard {
  id: string;

  subjectId: string;
  conceptId: string;

  front: string;
  back: string;

  difficulty?: number;

  tags?: string[];
}
```

---

# 15. USER PROGRESS

Không có account.

Progress được lưu local.

```ts
interface UserProgress {
  subjectId: string;

  xp: number;
  level: number;

  mastery: number;

  completedQuestions: number;

  correctAnswers: number;
  wrongAnswers: number;
}
```

---

# 16. CONCEPT MASTERY

```ts
interface ConceptMastery {
  conceptId: string;

  mastery: number;

  correctCount: number;
  wrongCount: number;

  currentStreak: number;

  lastReviewedAt?: string;
  nextReviewAt?: string;

  reviewInterval?: number;
}
```

Mastery nằm trong khoảng:

```text
0.00 → 1.00
```

UI có thể hiển thị:

```text
0–39%   🔴 Weak
40–69%  🟡 Learning
70–89%  🟢 Strong
90–100% 💎 Mastered
```

---

# 17. QUESTION ATTEMPT

```ts
interface QuestionAttempt {
  id: string;

  questionId: string;

  selectedAnswerIds: string[];

  isCorrect: boolean;

  timestamp: string;

  durationMs?: number;

  mode:
    | "learn"
    | "quiz"
    | "exam"
    | "speed"
    | "boss"
    | "weakness";
}
```

---

# 18. MISTAKE LOG

```ts
interface MistakeLog {
  questionId: string;

  conceptId: string;

  wrongCount: number;

  lastWrongAt: string;

  reason?:
    | "knowledge_gap"
    | "concept_confusion"
    | "forgot_formula"
    | "missed_keyword"
    | "distractor"
    | "calculation"
    | "forgot_exception";
}
```

---

# 19. STORAGE STRATEGY

## 19.1. localStorage

Dùng cho dữ liệu nhỏ:

```text
theme
settings
sound
animation
currentStreak
lastStudyDate
basic profile
```

---

## 19.2. IndexedDB

Dùng cho:

```text
attempt history
mistake logs
concept mastery
review queue
exam sessions
bookmarks
achievements
progress
```

---

# 20. FUNCTIONAL REQUIREMENTS

---

# FR-001 — Subject Dashboard

Hệ thống phải hiển thị danh sách các môn.

Mỗi môn hiển thị:

- Mã môn.
- Tên môn.
- Tiến độ.
- Mastery.
- Tổng câu hỏi.
- Streak liên quan.
- Nút Continue.

---

# FR-002 — Subject Detail

Trang môn phải có:

- Tổng quan.
- Các chương.
- Mastery theo chương.
- Số câu đã làm.
- Số câu sai.
- Số concept yếu.
- Quick actions.

Quick actions:

```text
Continue Learning
Random Quiz
Practice Weakness
Full Exam
Flashcards
Review Mistakes
```

---

# FR-003 — Chapter View

Người dùng có thể:

- Xem danh sách concept.
- Xem importance.
- Xem mastery.
- Lọc concept chưa học.
- Lọc concept yếu.
- Bắt đầu luyện theo chương.

---

# FR-004 — Knowledge Mode

Một concept phải hiển thị:

- Tên.
- Định nghĩa.
- Từ khóa.
- Ý quan trọng.
- So sánh.
- Bẫy.
- Cách nhớ nhanh.
- Câu hỏi liên quan.

Sau khi đọc có nút:

> Practice this concept

---

# FR-005 — Flashcard Mode

Hệ thống phải hỗ trợ:

- Lật thẻ.
- Next / Previous.
- Shuffle.
- Mark:
  - Again
  - Hard
  - Good
  - Easy

Kết quả ảnh hưởng đến review queue.

---

# FR-006 — Quiz Mode

Người dùng có thể chọn:

- Số lượng câu.
- Chương.
- Concept.
- Difficulty.
- Only unseen.
- Only mistakes.
- Include traps.

---

# FR-007 — Instant Feedback

Trong chế độ luyện tập:

Sau khi submit phải hiển thị:

```text
Correct / Incorrect

Đáp án đúng

Giải thích

Concept liên quan

Bẫy

Why your answer is wrong
```

---

# FR-008 — Full Exam Mode

Exam mode phải:

- Load đúng tập câu của đề.
- Không hiển thị đáp án ngay.
- Có timer nếu đề cấu hình timer.
- Cho phép đánh dấu câu.
- Cho phép chuyển câu.
- Có question navigator.
- Submit toàn bài.
- Hiển thị kết quả sau khi nộp.

---

# FR-009 — Exam Result

Kết quả phải có:

- Điểm.
- Số đúng.
- Số sai.
- Tỷ lệ đúng.
- Thời gian.
- Điểm theo chương.
- Điểm theo concept.
- Danh sách câu sai.
- Danh sách concept yếu.

---

# FR-010 — Speed Run

Người dùng làm quiz trong giới hạn thời gian.

Ví dụ:

```text
20 questions
5 minutes
```

Hệ thống ghi nhận:

- Score.
- Accuracy.
- Average response time.
- Longest combo.

---

# FR-011 — Sudden Death

Luật:

```text
Sai 1 câu → session kết thúc
```

Hiển thị:

- Best streak.
- Current streak.
- Previous record.

---

# FR-012 — Boss Battle

Boss Battle ưu tiên:

- Câu difficulty cao.
- Câu bẫy.
- Câu từng sai.
- Concept mastery thấp.

Boss có HP.

Ví dụ:

```text
Correct answer → Boss -10 HP
Wrong answer   → Player -1 Heart
```

---

# FR-013 — Weakness Hunt

Hệ thống phải tự xây session từ concept yếu.

Ví dụ:

```text
Tất nhiên – Ngẫu nhiên       40%
Nguyên nhân – Kết quả        30%
CSHT – KTTT                  20%
Random old mistakes          10%
```

---

# FR-014 — Review Mistakes

Người dùng có thể xem:

- Các câu từng sai.
- Số lần sai.
- Lần sai gần nhất.
- Concept.
- Nguyên nhân sai.

Có nút:

> Retry Mistakes

---

# FR-015 — Adaptive Repetition

Một câu vừa sai có thể được đưa lại sau vài câu.

Ví dụ:

```text
Q5 → Wrong

Q10–Q15
      ↓

Re-test concept bằng câu khác
```

Không nên lặp nguyên văn ngay lập tức.

---

# FR-016 — Mastery System

Mastery phải được tính theo concept.

Có thể cân nhắc:

```text
mastery =
accuracy × confidence factor × recency factor
```

V1 có thể dùng công thức đơn giản.

Ví dụ:

```text
+0.05 correct
-0.08 wrong
```

Giới hạn:

```text
0 ≤ mastery ≤ 1
```

---

# FR-017 — XP System

Ví dụ:

```text
Correct normal       +10 XP
Correct hard         +15 XP
Correct trap         +20 XP
5 combo              +10 XP
10 combo             +25 XP
Finish exam          +50 XP
Perfect quiz         +100 XP
```

XP config phải nằm trong file configuration, không hard-code trong component.

---

# FR-018 — Level System

Ví dụ:

```text
Level 1     0 XP
Level 2   200 XP
Level 3   500 XP
...
```

Level calculation phải nằm trong learning/game engine.

---

# FR-019 — Combo

Mỗi câu đúng liên tiếp tăng combo.

Sai:

```text
combo = 0
```

UI có hiệu ứng khi:

```text
5x
10x
20x
```

---

# FR-020 — Streak

Streak được tính theo ngày học.

Một ngày được tính là học nếu đạt ít nhất một điều kiện cấu hình, ví dụ:

```text
10 questions completed
OR
1 quiz completed
```

---

# FR-021 — Achievement

Ví dụ:

```text
First Blood
Complete first quiz

Philosopher
100 MLN111 questions correct

No Mistake
Perfect 20-question run

Speed Demon
20 questions under 5 minutes

Comeback
Master a previously weak concept
```

---

# FR-022 — Daily Challenge

Frontend tạo challenge dựa trên local date.

Ví dụ:

```text
Answer 20 questions
Score ≥ 80%
Review 5 mistakes
```

---

# FR-023 — Bookmark

Người dùng có thể bookmark:

- Question.
- Concept.
- Flashcard.

---

# FR-024 — Search

Search phải hỗ trợ:

- Từ khóa câu hỏi.
- Concept.
- Chapter.
- Keyword.

---

# FR-025 — Filter Question Bank

Filter:

```text
chapter
concept
difficulty
source exam
correct/wrong history
bookmarked
trap
verified
```

---

# FR-026 — Question Quality Flag

Các câu có:

```text
qualityStatus = ambiguous
```

không được tự động xuất hiện trong exam luyện chuẩn nếu user chưa bật:

> Include ambiguous questions

---

# FR-027 — Multiple-answer Questions

Hệ thống phải hỗ trợ:

```text
Choose 2 answers
Choose 3 answers
```

Submit chỉ đúng khi tập đáp án hoàn toàn khớp.

---

# FR-028 — Study History

Lưu:

- Ngày học.
- Session.
- Số câu.
- Accuracy.
- XP.
- Thời lượng.
- Mode.

---

# FR-029 — Statistics

Dashboard thống kê:

```text
Total questions answered
Accuracy
Study time
Current streak
Longest streak
XP
Level
Mastery
Weak concepts
Strong concepts
```

---

# FR-030 — Concept Analytics

Mỗi concept hiển thị:

- Mastery.
- Accuracy.
- Total attempts.
- Wrong attempts.
- Last review.
- Next review.
- Related questions.

---

# FR-031 — Import Progress

Cho phép import file JSON progress.

Hệ thống phải validate schema trước khi nhập.

---

# FR-032 — Export Progress

Cho phép export:

```text
study-progress-YYYY-MM-DD.json
```

Nội dung:

- Progress.
- XP.
- Mastery.
- Mistakes.
- History.
- Achievements.
- Settings cần thiết.

---

# FR-033 — Reset Data

Người dùng có thể reset:

- Một môn.
- Progress.
- History.
- Toàn bộ local data.

Phải có confirmation.

---

# FR-034 — Theme

Hỗ trợ:

- Dark.
- Light.
- System.

---

# FR-035 — Sound

Có thể bật/tắt:

- Correct sound.
- Wrong sound.
- Combo sound.
- Achievement sound.

---

# FR-036 — Animation

Có setting:

```text
Full
Reduced
Off
```

Tôn trọng `prefers-reduced-motion`.

---

# FR-037 — Responsive

Phải sử dụng tốt trên:

```text
Desktop
Laptop
Tablet
Mobile
```

---

# 21. CÁC MÀN HÌNH CHÍNH

## 21.1. Home

```text
Welcome back
Current Streak
XP / Level
Continue Learning

Subjects

Daily Challenge

Weak concepts
```

---

## 21.2. Subjects

Danh sách 4 môn.

---

## 21.3. Subject Dashboard

Ví dụ:

```text
MLN111
Triết học Mác - Lênin

Mastery 72%

Chương 1  ████████ 82%
Chương 2  ██████   68%
Chương 3  █████    61%

[Continue]
[Quiz]
[Exam]
[Weakness]
[Flashcards]
```

---

## 21.4. Knowledge Map

Hiển thị concept theo graph/tree.

Ví dụ:

```text
VẬT CHẤT
│
├── Vận động
│   ├── 5 hình thức
│   └── Đứng im
│
├── Không gian
├── Thời gian
│
└── Ý thức
    ├── Nguồn gốc
    ├── Bản chất
    └── Kết cấu
```

---

## 21.5. Concept Detail

```text
Concept
Definition
Keywords
Important Points
Common Traps
Memory Tip

Mastery

Related Questions

[Practice]
```

---

## 21.6. Quiz Screen

```text
Progress
Combo
XP

Question

A
B
C
D

Submit
```

Sau submit:

```text
Correct / Wrong

Explanation

Trap

Concept
```

---

## 21.7. Exam Screen

```text
Timer

Question 12/60

Question

A B C D

[Previous]
[Next]

Question Navigator

[Submit Exam]
```

---

## 21.8. Results

```text
Score

Accuracy

XP earned

Chapter performance

Weak concepts

Wrong questions

[Review Mistakes]
[Retry]
```

---

## 21.9. Weakness

```text
Weak Concepts

Tất nhiên – Ngẫu nhiên   42%
CSHT – KTTT              55%
Nguyên nhân – Kết quả    61%

[Start Weakness Hunt]
```

---

## 21.10. Profile / Stats

Không cần account.

Hiển thị local profile:

```text
Level
XP
Streak
Study time
Questions answered
Accuracy
Achievements
```

---

# 22. GAMIFICATION DESIGN

Gamification phải đảm bảo:

1. Không che mất nội dung học.
2. Feedback dưới 300ms nếu không có animation.
3. Không bắt buộc animation.
4. Người dùng có thể tắt âm thanh.
5. Reward phải gắn với hành vi học tốt.

Ví dụ reward tốt:

```text
Review mistakes
Master weak concept
Long correct streak
Finish exam
Study multiple days
```

Không reward quá mạnh cho:

```text
spam next
random clicking
```

---

# 23. LEARNING ENGINE

Learning Engine phải độc lập với UI.

Các module:

```text
quizEngine
examEngine
masteryEngine
reviewEngine
xpEngine
streakEngine
achievementEngine
recommendationEngine
```

---

# 24. QUIZ ENGINE

Trách nhiệm:

- Load questions.
- Shuffle.
- Validate answers.
- Score.
- Handle multiple-answer.
- Return feedback.
- Track attempts.

UI không tự xử lý logic đáp án.

---

# 25. REVIEW ENGINE

Review priority có thể dựa trên:

```text
low mastery
wrong count
time since last review
question frequency
difficulty
importance
```

Ví dụ:

```ts
reviewScore =
  weaknessWeight +
  wrongWeight +
  overdueWeight +
  importanceWeight;
```

---

# 26. RECOMMENDATION ENGINE

Trang Home có thể đề xuất:

```text
You should review:
Tất nhiên – Ngẫu nhiên
because mastery = 42%
```

Hoặc:

```text
You made 6 mistakes in Chapter 3 today.
Practice Chapter 3?
```

---

# 27. CONTENT PIPELINE

Dữ liệu môn học không được tạo trực tiếp thủ công trong component.

Pipeline:

```text
ĐỀ THI / TÀI LIỆU
        ↓
MARKDOWN
        ↓
QUESTION BANK MASTER
        ↓
DEDUPLICATE
        ↓
CONCEPT MAPPING
        ↓
ANSWER QUALITY CHECK
        ↓
KNOWLEDGE MASTER
        ↓
JSON / TS MOCK DATA
        ↓
FRONTEND
```

---

# 28. MLN111 — DATA STRATEGY

MLN111 là môn đầu tiên.

Nguồn dữ liệu đầu vào gồm:

- Các đề FE.
- Các đề RE.
- Các đề theo block/campus/version.
- File giải chi tiết.
- File kiến thức tổng hợp.

Question bank phải:

1. Giữ source exam.
2. Không mất câu trùng.
3. Sau đó deduplicate ở master layer.
4. Câu trùng vẫn ghi nhận frequency.
5. Các cách hỏi khác nhau cùng concept phải liên kết cùng `conceptId`.
6. Câu mơ hồ phải đánh dấu `needs_review`.
7. Không được coi câu chưa xác minh là đáp án chuẩn.

---

# 29. FILE KNOWLEDGE MASTER DỰ KIẾN

Ví dụ:

```md
# Concept: Nguyên nhân và kết quả

ID: MLN111-C2-CAUSE-EFFECT

## Định nghĩa

### Nguyên nhân
...

### Kết quả
...

## Mối quan hệ
...

## Từ khóa
- sinh ra
- tác động
- chuyển hóa

## Dễ nhầm
...

## Bẫy trắc nghiệm
...

## Câu đề từng hỏi
- SP26_FE_Q01
- SU26_C1_Q20

## Frequency
4

## Importance
★★★★★
```

---

# 30. FOLDER STRUCTURE ĐỀ XUẤT

```text
src/
│
├── app/
│
├── components/
│   ├── quiz/
│   ├── exam/
│   ├── flashcard/
│   ├── gamification/
│   └── common/
│
├── data/
│   └── subjects/
│       ├── mln111/
│       │   ├── subject.json
│       │   ├── chapters.json
│       │   ├── concepts.json
│       │   ├── knowledge.json
│       │   ├── questions.json
│       │   ├── flashcards.json
│       │   └── exams.json
│       │
│       ├── subject2/
│       ├── subject3/
│       └── subject4/
│
├── engines/
│   ├── quizEngine.ts
│   ├── masteryEngine.ts
│   ├── reviewEngine.ts
│   ├── xpEngine.ts
│   ├── streakEngine.ts
│   └── achievementEngine.ts
│
├── repositories/
│   ├── QuestionRepository.ts
│   ├── ConceptRepository.ts
│   └── LocalQuestionRepository.ts
│
├── storage/
│   ├── indexedDb.ts
│   └── localStorage.ts
│
├── stores/
│
├── types/
│
└── utils/
```

---

# 31. REPOSITORY ABSTRACTION

UI không được phụ thuộc trực tiếp vào JSON.

Ví dụ:

```ts
interface QuestionRepository {
  getQuestions(subjectId: string): Promise<Question[]>;

  getQuestionById(
    questionId: string
  ): Promise<Question | null>;

  getQuestionsByConcept(
    conceptId: string
  ): Promise<Question[]>;
}
```

V1:

```text
LocalQuestionRepository
```

Sau này có backend:

```text
ApiQuestionRepository
```

UI không cần viết lại.

---

# 32. NON-FUNCTIONAL REQUIREMENTS

## NFR-001 — Performance

Các thao tác UI chính phải phản hồi nhanh.

Mục tiêu:

```text
Page interaction < 100ms
Question change < 100ms
Local save không block UI
```

---

## NFR-002 — Offline

Các chức năng học chính phải sử dụng được sau khi assets/data đã load.

---

## NFR-003 — Maintainability

Không hard-code môn MLN111 trong component.

Sai:

```ts
if (subject === "MLN111")
```

Đúng:

```ts
loadSubject(subjectId)
```

---

## NFR-004 — Extensibility

Thêm môn mới chủ yếu bằng cách thêm data.

Không sửa quiz engine nếu format question không đổi.

---

## NFR-005 — Accessibility

Phải hỗ trợ:

- Keyboard navigation.
- Focus state.
- Semantic HTML.
- Contrast.
- Reduced motion.
- Screen reader cơ bản.

---

## NFR-006 — Data Reliability

Mỗi câu hỏi phải có:

```text
id
subject
chapter
concept
question
options
correctAnswer
qualityStatus
```

---

## NFR-007 — Error Handling

Nếu data lỗi:

Không crash toàn app.

Hiển thị:

```text
Question data is invalid.
```

và bỏ qua question đó.

---

# 33. DATA VALIDATION

Khi load question bank phải validate:

```text
ID unique
options >= 2
correct answer exists
conceptId exists
chapterId exists
subjectId exists
```

Multiple answer phải có >= 2 correctAnswerIds nếu type yêu cầu.

---

# 34. SECURITY & LIMITATIONS

Do frontend-only:

- Answer tồn tại trong client bundle/data.
- Người dùng có thể xem bằng DevTools.
- Progress có thể chỉnh sửa thủ công.
- Không có anti-cheat.
- Không có trusted leaderboard.

Điều này được chấp nhận vì sản phẩm là:

> **Personal learning app, không phải hệ thống thi chính thức.**

---

# 35. BACKUP STRATEGY

Người dùng có thể export toàn bộ local progress.

Tên file:

```text
studyquest-backup-2026-08-30.json
```

Import phải:

1. Validate version.
2. Validate schema.
3. Preview dữ liệu.
4. Confirm.
5. Merge hoặc replace.

---

# 36. VERSIONING

Mock data nên có:

```json
{
  "schemaVersion": "1.0",
  "contentVersion": "MLN111-2026.08.30"
}
```

Điều này giúp migrate dữ liệu về sau.

---

# 37. UX PRINCIPLES

## 37.1. Một màn hình — một mục tiêu chính

Quiz screen không nhồi quá nhiều dữ liệu.

---

## 37.2. Feedback ngắn trước, chi tiết sau

Ví dụ:

```text
❌ Sai

Vận động là PHƯƠNG THỨC tồn tại của vật chất.

[See explanation]
```

---

## 37.3. Highlight từ khóa

Ví dụ:

> Vận động là **phương thức tồn tại** của vật chất.

---

## 37.4. Tránh punishment quá mạnh

Sai câu không nên làm mất toàn bộ XP.

---

# 38. UI STYLE ĐỀ XUẤT

Phong cách:

```text
Modern
Dark friendly
Game-inspired
Neon nhẹ
Card based
Minimal clutter
High contrast
Smooth motion
```

Không nên quá giống:

```text
Moodle
Google Form
LMS truyền thống
```

---

# 39. MICRO-INTERACTIONS

Có thể dùng:

- Correct pulse.
- Wrong shake nhẹ.
- XP fly-up.
- Combo burst.
- Progress fill.
- Achievement toast.
- Boss HP animation.

Phải tắt được.

---

# 40. ACCEPTANCE CRITERIA — MVP

MVP được xem là đạt khi:

### Data

- Load được ít nhất 1 môn.
- MLN111 có chapter.
- Có concept.
- Có question.
- Có exam.

### Learning

- Học concept được.
- Làm quiz được.
- Check answer đúng.
- Hiện explanation.
- Làm full exam được.
- Xem result được.

### Tracking

- Lưu attempt.
- Lưu wrong questions.
- Tính mastery.
- Tính XP.
- Lưu bằng IndexedDB/localStorage.

### Practice

- Review mistakes.
- Weakness quiz.
- Random quiz.

### UX

- Responsive.
- Dark mode.
- Có progress.
- Có combo.
- Có feedback.

---

# 41. PHASE PLAN

## Phase 1 — Core

```text
Subject
Chapter
Concept
Knowledge
Question
Quiz Engine
Exam Mode
Local Storage
IndexedDB
```

---

## Phase 2 — Learning Intelligence

```text
Mastery
Mistakes
Weakness Hunt
Review Queue
Spaced Repetition
Analytics
```

---

## Phase 3 — Gamification

```text
XP
Level
Combo
Streak
Achievement
Daily Challenge
Boss Battle
Speed Run
Sudden Death
```

---

## Phase 4 — Product Polish

```text
Knowledge Map
PWA
Offline
Import/export
Animations
Sound
Accessibility
```

---

# 42. FUTURE BACKEND COMPATIBILITY

Nếu tương lai cần backend:

```text
Frontend
   │
Repository Interface
   │
   ├── LocalRepository
   │
   └── ApiRepository
            │
          Backend
```

Có thể thêm:

- Supabase.
- Firebase.
- Node.js.
- NestJS.
- PostgreSQL.

Nhưng V1 không cần.

---

# 43. SUCCESS METRICS

Do không có backend, metrics được đo local.

Ví dụ:

```text
Accuracy tăng theo thời gian

Weak concept giảm

Số lần sai lại cùng concept giảm

Mastery tăng

Exam score tăng

Average response time giảm
```

---

# 44. ĐỊNH NGHĨA “HỌC SÂU” TRONG HỆ THỐNG

Một concept không được xem là mastered chỉ vì:

> trả lời đúng một câu.

Concept nên được xem là mạnh khi người dùng:

1. Trả lời đúng nhiều câu khác cách diễn đạt.
2. Không bị các distractor phổ biến đánh lừa.
3. Trả lời đúng sau một khoảng thời gian.
4. Trả lời đúng trong exam mode.
5. Có tỷ lệ đúng ổn định.

---

# 45. NGUYÊN TẮC QUAN TRỌNG NHẤT

Web không phải là:

> “Website chứa ngân hàng đề”.

Mà phải là:

> **Một learning engine sử dụng ngân hàng đề làm dữ liệu đầu vào.**

Question là phương tiện.

**Concept mastery mới là mục tiêu.**

---

# 46. BASELINE CHO MLN111

MLN111 sẽ là subject đầu tiên dùng để kiểm nghiệm toàn bộ hệ thống.

Pipeline triển khai:

```text
Tập hợp toàn bộ đề MLN111
        ↓
Chuẩn hóa markdown
        ↓
Gộp question bank
        ↓
Loại trùng nguyên văn
        ↓
Gom câu cùng kiến thức
        ↓
Gắn conceptId
        ↓
Audit câu mơ hồ
        ↓
Tạo Knowledge Master
        ↓
Tạo Questions JSON
        ↓
Tạo Concepts JSON
        ↓
Tạo Exams JSON
        ↓
Tạo Flashcards JSON
        ↓
Đưa vào frontend
```

Sau khi MLN111 hoạt động tốt, ba môn còn lại chỉ cần tuân theo cùng schema.

---

# 47. KẾT LUẬN

Phiên bản đầu tiên của hệ thống được xác định là:

> **Frontend-only Personal Gamified Learning Web App**

với:

- Static/mock learning data.
- IndexedDB/localStorage.
- Không backend.
- Không account.
- Không cloud database.
- Concept-centered architecture.
- Question bank driven.
- Adaptive review.
- Gamification.
- Có khả năng mở rộng sang 4 môn.

Ưu tiên phát triển:

```text
QUALITY OF LEARNING
        >
GAMEPLAY
        >
VISUAL EFFECT
```

Mục tiêu cuối cùng:

> Người dùng không chỉ nhớ đáp án của đề cũ mà có thể nhận diện, suy luận và trả lời đúng khi cùng một kiến thức được biến đổi sang cách hỏi mới.

---

# 48. PHẠM VI MVP VÀ MA TRẬN ƯU TIÊN

## 48.1. Mục tiêu MVP

MVP phải chứng minh được một vòng lặp học tập hoàn chỉnh với môn `MLN111`:

```text
Chọn môn → xem chương/concept → đọc kiến thức → làm quiz
→ nhận giải thích → lưu lỗi → cập nhật mastery/XP
→ luyện lại điểm yếu → làm đề cũ → xem kết quả
```

MVP không được xem là hoàn thành nếu chỉ hiển thị question bank mà chưa lưu được tiến trình và chưa đưa lỗi sai trở lại vòng ôn tập.

## 48.2. Ma trận ưu tiên

| Hạng mục | MVP | Phase | Ưu tiên |
|---|:---:|---:|---|
| Subject/Chapter/Concept/Knowledge | Có | 1 | Must |
| Random/Chapter/Concept Quiz | Có | 1 | Must |
| Instant Feedback | Có | 1 | Must |
| Full Exam + Result | Có | 1 | Must |
| Attempt, Mistake, Mastery, XP | Có | 1 | Must |
| Review Mistakes, Weakness Quiz | Có | 1–2 | Must |
| Import/Export progress | Có | 1–2 | Should |
| Flashcard scheduling | Sau MVP core | 2 | Should |
| Analytics nâng cao | Sau MVP core | 2 | Should |
| Boss Battle, Speed Run, Sudden Death | Không | 3 | Could |
| Achievement, Daily Challenge | Không | 3 | Could |
| PWA, sound, animation nâng cao | Không | 4 | Could |

## 48.3. Definition of Done của MVP

- Hoàn thành toàn bộ acceptance criteria tại mục 60 gắn nhãn `MVP`.
- Không có lỗi mức Critical/High trong quiz, exam, storage và import.
- Dữ liệu MLN111 được convert và validate theo Canonical Data Contract.
- Refresh trình duyệt không làm mất session/progress đã lưu.
- Có thể export, reset và import lại progress hợp lệ.

---

# 49. CANONICAL DATA CONTRACT

Các file Markdown của từng môn có thể khác cấu trúc nguồn, nhưng dữ liệu đưa vào ứng dụng phải được normalize về contract duy nhất. Frontend không được parse ý nghĩa từ format của ID.

## 49.1. Quy ước định danh

- `subjectId`: lowercase, ổn định; ví dụ `mln111`, `ite302c`, `prm393`.
- `code`: mã hiển thị; ví dụ `MLN111`, `ITE302c`, `PRM393`.
- `chapterId`, `conceptId`, `questionId`, `examId`: chuỗi opaque và unique toàn corpus.
- ID đã phát hành không được tái sử dụng cho entity khác.
- JSON canonical luôn dùng full `chapterId`; giá trị nguồn như `C1` phải được map thành `MLN111-C1`.

## 49.2. Contract V1

```ts
type QuestionQuality = "clean" | "ambiguous" | "needs_review";
type QuestionType = "single" | "multiple";
type OptionId = string;

interface ContentManifest {
  schemaVersion: "1.0";
  contentVersion: string;
  generatedAt: string;
  subjectIds: string[];
}

interface QuestionOption {
  id: OptionId;
  label: string;
  text: string;
}

interface SourceReference {
  sourceId: string;
  sourceFile?: string;
  occurrence?: string;
}

interface Question {
  id: string;
  subjectId: string;
  chapterId: string;
  conceptId: string;
  type: QuestionType;
  requiredAnswers: number;
  question: string;
  options: QuestionOption[];
  correctAnswerIds: OptionId[];
  explanation?: string;
  wrongAnswerExplanations?: Record<OptionId, string>;
  trap?: string;
  difficulty: 1 | 2 | 3 | 4;
  tags: string[];
  frequency: number;
  qualityStatus: QuestionQuality;
  sourceRefs: SourceReference[];
}
```

## 49.3. Quy tắc V1

- MVP chỉ hỗ trợ `single` và `multiple`; `true_false`, `ordering`, `matching` thuộc phase sau.
- `single`: `requiredAnswers = 1` và có đúng một `correctAnswerId`.
- `multiple`: `requiredAnswers >= 2` và bằng số phần tử unique trong `correctAnswerIds`.
- Clean Quiz/Exam chỉ lấy `qualityStatus = "clean"`.
- `ambiguous` và `needs_review` không cập nhật mastery, XP hoặc streak.
- `clean` có nghĩa là đủ rõ theo corpus nội bộ, không mặc nhiên có nghĩa đã đối chiếu độc lập với giáo trình chính thức.
- UI phải dùng `qualityStatus`; alias nguồn như `quality` chỉ tồn tại trong parser.

## 49.4. Validation bắt buộc

Build phải thất bại nếu có ID trùng, reference không tồn tại, đáp án không thuộc options, sai cardinality hoặc exam trỏ tới question không tồn tại. Lỗi riêng lẻ phát hiện ở runtime phải được ghi nhận và entity lỗi phải bị bỏ qua thay vì làm crash toàn ứng dụng.

---

# 50. ROUTE MAP VÀ NAVIGATION CONTRACT

```text
/                                      Home
/subjects                              Subject List
/subjects/:subjectId                   Subject Dashboard
/subjects/:subjectId/chapters/:id      Chapter View
/concepts/:conceptId                   Concept Detail
/quiz/new                              Quiz Configuration
/quiz/:sessionId                       Quiz Session
/quiz/:sessionId/result                Quiz Result
/exams                                 Exam List
/exams/:examId                         Exam Introduction
/exams/:examId/session/:sessionId      Exam Session
/exams/:examId/result/:sessionId       Exam Result
/review/mistakes                       Review Mistakes
/review/weakness                       Weakness Hunt
/flashcards                            Flashcards
/statistics                            Statistics
/settings                              Settings
```

- Entity không tồn tại hiển thị Not Found có nút quay về màn hình an toàn gần nhất.
- Rời quiz/exam đang hoạt động phải hiện confirmation; nếu xác nhận, session được lưu để resume.
- `Continue Learning` ưu tiên session active gần nhất; nếu không có, ưu tiên concept overdue có mastery thấp nhất.
- Result chỉ được dựng từ session đã submit; không tự tính lại từ state tạm trên UI.
- Deep link vào subject/chapter/concept hợp lệ phải hoạt động sau refresh.

---

# 51. QUIZ VÀ EXAM STATE MACHINE

## 51.1. Quiz

```ts
type QuizState =
  | "configuring" | "loading" | "answering"
  | "showing_feedback" | "completed" | "error";
```

Luồng hợp lệ:

```text
configuring → loading → answering ↔ showing_feedback → completed
                    └──────────────────────────────→ error
```

- Submit chỉ bật khi chọn đúng số đáp án được yêu cầu.
- Sau submit không được đổi đáp án của attempt đó.
- Quiz mode hiển thị feedback ngay; người dùng chủ động bấm Next.
- Không có Skip trong MVP. Người dùng có thể kết thúc session sớm; session mang trạng thái `abandoned`.
- Refresh phải phục hồi câu hiện tại, selection chưa submit và các attempt đã hoàn thành.

## 51.2. Exam

```ts
type ExamState =
  | "not_started" | "in_progress" | "submitting"
  | "submitted" | "expired" | "interrupted" | "error";
```

- Exam không hiển thị feedback trước khi submit toàn bài.
- Người dùng được chuyển câu, đổi đáp án và đánh dấu câu khi còn `in_progress`.
- Hết giờ tự submit đúng một lần.
- Timer dựa trên `startedAt + duration`, không dựa chỉ vào bộ đếm trong memory.
- MVP không hỗ trợ pause timer.
- Refresh/đóng tab không dừng thời gian; session được resume nếu chưa hết hạn.
- Rời trang phải autosave selection hiện tại trước khi điều hướng nếu storage khả dụng.

---

# 52. QUY TẮC SINH QUIZ VÀ CHẤM ĐIỂM

```ts
interface QuizConfig {
  subjectId: string;
  chapterIds?: string[];
  conceptIds?: string[];
  questionCount: number;
  difficulties?: Array<1 | 2 | 3 | 4>;
  qualityStatuses: QuestionQuality[];
  onlyUnseen: boolean;
  onlyMistakes: boolean;
  includeTraps: boolean;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  randomSeed: string;
}
```

## 52.1. Selection

1. Lọc theo subject, chapter, concept, difficulty và quality.
2. Áp dụng `onlyUnseen`, `onlyMistakes`, `includeTraps`.
3. Loại question invalid.
4. Shuffle xác định bằng `randomSeed` và lấy đủ `questionCount`.
5. Nếu số câu phù hợp ít hơn yêu cầu, UI phải preview số câu thực có và yêu cầu người dùng xác nhận; không tự nới filter âm thầm.
6. Trong Weakness Hunt, ưu tiên concept mastery thấp, overdue, wrong count cao và importance cao.

Không shuffle options nếu source có ngữ nghĩa phụ thuộc thứ tự; parser phải đặt tag `fixed_option_order`. Với các câu khác, kết quả shuffle phải được lưu trong session để resume/replay chính xác.

## 52.2. Chấm điểm

- `single` và `multiple` chỉ đúng khi tập đáp án khớp hoàn toàn; V1 không có partial credit.
- `unanswered` được thống kê riêng và tính là không đúng trong tỷ lệ.
- Question invalid được loại khỏi denominator.
- `scorePercent = correct / validQuestions * 100`.
- `score10 = round(scorePercent) / 10`, hiển thị tối đa một chữ số thập phân.
- Mỗi lần làm lại tạo session mới; không overwrite lịch sử cũ.

---

# 53. MASTERY ALGORITHM V1

Mastery được lưu theo concept trong khoảng `[0, 1]`.

```ts
const difficultyWeight = { 1: 0.8, 2: 1.0, 3: 1.2, 4: 1.4 };
const modeWeight = {
  learn: 0.8, quiz: 1.0, exam: 1.2,
  speed: 1.0, boss: 1.1, weakness: 1.0
};

baseDelta = isCorrect ? 0.04 : -0.08;
delta = baseDelta * difficultyWeight[difficulty] * modeWeight[mode];
newMastery = clamp(oldMastery + delta, 0, 1);
```

Quy tắc chống farm và biểu hiện học sâu:

- Chỉ attempt đầu tiên của cùng `questionId` trong một session cập nhật mastery/XP.
- Cùng question làm lại trong vòng 24 giờ chỉ nhận 25% delta dương; delta âm vẫn giữ 100%.
- Mastery không vượt 0.70 nếu chưa đúng ít nhất 3 questionId khác nhau của concept.
- Mastery không vượt 0.90 nếu chưa có một lần đúng sau ít nhất 24 giờ kể từ lần đúng đầu tiên.
- Câu không `clean` không cập nhật mastery.
- Flashcard rating cập nhật review schedule nhưng không trực tiếp tăng question mastery trong V1.
- Tất cả hệ số nằm trong configuration và có version để có thể điều chỉnh sau này.

---

# 54. REVIEW VÀ SPACED REPETITION V1

## 54.1. Flashcard interval

| Rating | Interval tiếp theo |
|---|---|
| Again | 10 phút; ưu tiên lại trong cùng session sau tối thiểu 5 item |
| Hard | `max(1 ngày, interval × 1.2)` |
| Good | `max(1 ngày, interval × 2.5)` |
| Easy | `max(4 ngày, interval × 4.0)` |

Interval được làm tròn theo ngày sau lần review đầu tiên và giới hạn tối đa 180 ngày trong V1.

## 54.2. Question review

```text
reviewScore =
  0.35 × weakness
+ 0.25 × overdue
+ 0.20 × normalizedWrongCount
+ 0.15 × importance
+ 0.05 × frequency
```

- Sau khi sai, không lặp nguyên văn ngay; ưu tiên một câu khác cùng concept sau 5–10 câu.
- Nếu không có câu khác, có thể dùng lại câu cũ sau tối thiểu 10 câu hoặc đưa sang session kế tiếp.
- Flashcard queue và question queue lưu riêng nhưng Recommendation Engine có thể trộn đề xuất.
- Mỗi Weakness session mặc định 20 câu; nếu thiếu thì dùng toàn bộ câu phù hợp và thông báo rõ.

---

# 55. GAMIFICATION RULES V1

Cấu hình mặc định:

```text
Correct difficulty 1/2: +10 XP
Correct difficulty 3:   +15 XP
Correct difficulty 4:   +20 XP
5 combo:                 +10 XP (một lần/session)
10 combo:                +25 XP (một lần/session)
Finish valid exam:       +50 XP
Perfect quiz >= 10 câu: +100 XP
```

- Sai không trừ XP; combo về 0.
- Question không clean, attempt lặp để farm và session dưới 3 câu không nhận bonus.
- XP chỉ được ghi một lần trong cùng transaction với attempt/session result.
- Level threshold lấy từ config, tăng đơn điệu và không hard-code trong component.
- Một ngày streak hợp lệ khi hoàn thành ít nhất 10 câu clean hoặc một quiz/exam có ít nhất 5 câu.
- Ngày được tính theo local calendar day tại thời điểm attempt; thay đổi timezone không hồi tố ngày đã ghi.
- V1 không có grace day.
- Achievement phải idempotent: import/resume không unlock hoặc cộng thưởng hai lần.

---

# 56. INDEXEDDB SCHEMA VÀ TRANSACTION

Database: `studyquest`, version khởi đầu: `1`.

| Store | Primary key | Index chính |
|---|---|---|
| `attempts` | `id` | questionId, conceptId, subjectId, timestamp, mode |
| `mastery` | `conceptId` | subjectId, nextReviewAt |
| `mistakes` | `questionId` | conceptId, lastWrongAt |
| `sessions` | `id` | subjectId, mode, status, startedAt |
| `examSessions` | `id` | examId, status, startedAt |
| `reviewItems` | `id` | entityType, entityId, nextReviewAt |
| `bookmarks` | `id` | entityType, entityId, subjectId |
| `achievements` | `achievementId` | unlockedAt |
| `subjectProgress` | `subjectId` | updatedAt |
| `meta` | `key` | — |

`settings`, theme và feature preferences nhỏ được lưu trong localStorage. Attempt, mastery và session bắt buộc lưu IndexedDB.

Khi submit một answer, các thay đổi sau phải nằm trong một transaction logic duy nhất:

```text
attempt → mistake log → mastery → XP/progress → session state
```

Nếu transaction thất bại, UI không được hiển thị trạng thái “đã lưu”; phải retry hoặc thông báo `STORAGE_WRITE_FAILED`. Autosave selection có thể dùng transaction riêng. Nếu IndexedDB không khả dụng, app cho phép chế độ tạm thời trong memory nhưng phải cảnh báo rõ rằng progress sẽ mất khi đóng trang. Khi quota đầy, ngừng tạo history mới, giữ dữ liệu cũ và hướng dẫn export/reset.

---

# 57. CONTENT VERSIONING VÀ PROGRESS MIGRATION

- `schemaVersion`: cấu trúc contract.
- `contentVersion`: phiên bản corpus của từng subject.
- Session lưu snapshot `contentVersion` và danh sách question IDs tại lúc bắt đầu.
- Update content không được thay đổi session đang active; migration diễn ra trước khi tạo session mới.

```ts
interface ContentMigration {
  subjectId: string;
  fromVersion: string;
  toVersion: string;
  questionIdMap: Record<string, string | null>;
  conceptIdMap: Record<string, string | string[] | null>;
}
```

Quy tắc:

- Question bị xóa: giữ attempt lịch sử nhưng không đưa vào review mới.
- Question sửa đáp án hoặc chuyển từ clean sang flagged: loại các attempt cũ khỏi phép tính mastery tương lai; không xóa lịch sử.
- Concept rename nhưng cùng ý nghĩa: map 1–1 và giữ mastery.
- Concept split: không tự chia mastery; tạo mastery mới ở mức thấp nhất giữa `0.3` và mastery cũ, đồng thời đánh dấu cần review.
- Concept merge: lấy weighted average theo số attempt hợp lệ.
- Import từ schema major không hỗ trợ phải bị từ chối với lỗi rõ ràng.

---

# 58. UI STATE MATRIX

Mọi màn hình dữ liệu phải có các trạng thái:

| State | Yêu cầu |
|---|---|
| Loading | Skeleton hoặc progress, không layout shift lớn |
| Ready | Nội dung và action chính |
| Empty | Giải thích vì sao trống + action tiếp theo |
| Error | Error code thân thiện + Retry/Back |
| Partial | Bỏ qua entity lỗi, hiển thị cảnh báo số lượng |
| Offline | Chức năng local vẫn hoạt động |
| Migrating | Khóa action tạo session mới, hiện tiến độ |

Quiz/Exam bổ sung: `saving`, `save_failed`, `expired`, `resumable`. Correct/wrong không được biểu diễn chỉ bằng màu; phải có text/icon và thông báo cho assistive technology.

---

# 59. ERROR CODE CONTRACT

```ts
type AppErrorCode =
  | "SUBJECT_NOT_FOUND" | "CHAPTER_NOT_FOUND" | "CONCEPT_NOT_FOUND"
  | "QUESTION_INVALID" | "ANSWER_REFERENCE_INVALID"
  | "EXAM_NOT_FOUND" | "EXAM_QUESTION_MISSING"
  | "SESSION_NOT_FOUND" | "SESSION_EXPIRED"
  | "STORAGE_UNAVAILABLE" | "STORAGE_WRITE_FAILED"
  | "STORAGE_QUOTA_EXCEEDED"
  | "CONTENT_VERSION_UNSUPPORTED" | "CONTENT_MIGRATION_FAILED"
  | "IMPORT_FILE_TOO_LARGE" | "IMPORT_SCHEMA_INVALID"
  | "IMPORT_VERSION_UNSUPPORTED" | "IMPORT_INTEGRITY_FAILED"
  | "UNKNOWN_ERROR";

interface AppError {
  code: AppErrorCode;
  message: string;
  recoverable: boolean;
  context?: Record<string, unknown>;
}
```

UI quyết định hành vi dựa trên `code`, không parse `message`. Context không được chứa toàn bộ answer key hoặc dữ liệu nhạy cảm trong log production.

---

# 60. ACCEPTANCE CRITERIA CÓ THỂ KIỂM THỬ

## AC-MVP-01 — Multiple answer

```gherkin
Given một câu multiple yêu cầu 2 đáp án
When người dùng mới chọn 1 đáp án
Then nút Submit bị disable
And UI hiển thị số đáp án còn phải chọn
```

## AC-MVP-02 — Instant feedback

```gherkin
Given người dùng đang làm Practice Quiz
When submit một đáp án
Then attempt được lưu đúng một lần
And UI hiển thị đúng/sai, đáp án đúng, explanation và concept liên quan
And người dùng không thể sửa attempt đã submit
```

## AC-MVP-03 — Clean mode

```gherkin
Given question có qualityStatus khác clean
When tạo Clean Quiz hoặc Clean Exam
Then question không xuất hiện trong session
And question không thể cập nhật mastery hoặc XP
```

## AC-MVP-04 — Exam expiration

```gherkin
Given một exam đang in_progress
When thời gian còn lại bằng 0
Then hệ thống tự submit đúng một lần
And unanswered được thống kê riêng
And result được lưu trước khi điều hướng
```

## AC-MVP-05 — Resume

```gherkin
Given quiz hoặc exam đã autosave
When người dùng refresh trình duyệt
Then session được phục hồi đúng question order, answer selection và timer
```

## AC-MVP-06 — Mistake loop

```gherkin
Given người dùng trả lời sai một câu clean
When transaction hoàn tất
Then MistakeLog được tạo/cập nhật
And mastery của concept giảm
And Weakness Hunt có thể chọn concept đó
```

## AC-MVP-07 — Data validation

```gherkin
Given một question tham chiếu option hoặc concept không tồn tại
When data được validate
Then build validation thất bại
Or runtime bỏ qua question và hiển thị partial-data warning
```

## AC-MVP-08 — Import/export

```gherkin
Given progress hợp lệ đã được export
When reset và import lại cùng schemaVersion
Then XP, mastery, history, mistakes, achievements và settings được khôi phục
And không có record bị nhân đôi
```

## AC-MVP-09 — Storage failure

```gherkin
Given IndexedDB write thất bại
When submit answer
Then UI không báo đã lưu thành công
And người dùng nhận được action Retry hoặc tiếp tục ở temporary mode
```

## AC-MVP-10 — Accessibility

```gherkin
Given chỉ sử dụng bàn phím và screen reader cơ bản
When hoàn thành một quiz
Then mọi lựa chọn, submit, next và feedback đều truy cập được
And trạng thái đúng/sai không phụ thuộc riêng vào màu sắc
```

---

# 61. ACCESSIBILITY CONFORMANCE

Mục tiêu: WCAG 2.2 Level AA cho các flow MVP.

- Tất cả thao tác chính dùng được bằng keyboard.
- Focus order logic và focus không bị mất sau submit/route change.
- Touch target tối thiểu 44 × 44 CSS px khi khả thi.
- Contrast text thường tối thiểu 4.5:1; text lớn tối thiểu 3:1.
- Correct/wrong có text, icon và `aria-live` phù hợp.
- Timer không spam screen reader; cảnh báo ở các mốc cấu hình.
- Tôn trọng `prefers-reduced-motion`; không có nội dung bắt buộc phụ thuộc animation.
- Heading, landmark, label và error association dùng semantic HTML.

---

# 62. PERFORMANCE BUDGET

| Chỉ số | Mục tiêu MVP |
|---|---:|
| LCP | ≤ 2.5 giây trên mobile trung bình |
| INP | ≤ 200 ms |
| Route/question transition | ≤ 100 ms sau khi data đã load |
| Search với 1.000 câu | ≤ 100 ms trên laptop mục tiêu |
| Initial JS gzip | Mục tiêu ≤ 250 KB, không gồm content data |
| Local write | Không block main thread đáng kể |

- Data phải lazy-load theo subject; không bundle toàn bộ corpus vào initial route.
- Explanation/knowledge lớn có thể tách chunk.
- Tránh parse Markdown ở runtime production; build pipeline phải xuất JSON/TS đã validate.
- Performance budget phải được đo trong build CI hoặc báo cáo build trước release.

---

# 63. PRIVACY, SECURITY VÀ CONTENT LICENSING

## 63.1. Privacy

- Progress lưu local trên thiết bị; không gửi telemetry nếu chưa có consent rõ ràng.
- Settings phải có mục xem, export và xóa toàn bộ dữ liệu.
- Không thu email, account hoặc định danh cá nhân trong V1.

## 63.2. Import security

- File import tối đa mặc định 10 MB.
- Validate MIME/JSON, schemaVersion, kích thước và mọi field trước khi ghi.
- Có preview và lựa chọn Merge/Replace; thao tác phải có confirmation.
- Text từ content/import phải được escape/sanitize; không render HTML không tin cậy bằng `dangerouslySetInnerHTML`.
- Import không được thực thi code, URL script hoặc object prototype đặc biệt.

## 63.3. Content provenance/license

Mỗi source phải có metadata provenance và trạng thái quyền sử dụng. Trước khi public deployment phải xác minh quyền phân phối đối với giáo trình PDF, đề thi, nội dung Quizlet và lời giải. Tài liệu chưa rõ quyền không được tự động đưa vào public build; có thể giữ làm nguồn xử lý nội bộ/local cá nhân.

---

# 64. OPEN QUESTIONS VÀ ARCHITECTURE DECISIONS

## 64.1. Quyết định đã chốt cho V1

| ID | Quyết định |
|---|---|
| ADR-001 | Frontend-only, local-first, không account/backend |
| ADR-002 | React + TypeScript; Vite là lựa chọn mặc định |
| ADR-003 | IndexedDB cho progress lớn, localStorage cho settings nhỏ |
| ADR-004 | Repository abstraction tách UI khỏi JSON/local storage |
| ADR-005 | MVP chỉ hỗ trợ question `single` và `multiple` |
| ADR-006 | Canonical quality field là `qualityStatus` với 3 trạng thái |
| ADR-007 | MLN111 là subject nghiệm thu MVP đầu tiên |
| ADR-008 | Chấm multiple theo exact-set, không partial credit trong V1 |
| ADR-009 | Mastery và review sử dụng thuật toán V1 tại mục 53–54 |

## 64.2. Open questions trước public release

- Quyền sử dụng và phân phối từng nguồn học liệu có hợp lệ không?
- Có cần Vietnamese diacritic-insensitive search trong MVP không?
- Framework router/state/query cụ thể sẽ dùng thư viện nào?
- Có mã hóa file export hay chỉ JSON portable?
- Threshold pass exam có phụ thuộc từng môn/đề không?
- Khi nào `ambiguous` được nâng thành `clean`, ai là người phê duyệt?
- MLN112 là môn thứ tư chính thức hay chỉ là placeholder?

Mỗi câu hỏi mở phải được chuyển thành ADR hoặc requirement đã chốt trước khi phần liên quan được triển khai. Không được để component tự quyết định ngầm các quy tắc nghiệp vụ.

---

# 65. ADVENTURE MODE PRODUCT VISION

Adventure Mode là lớp trải nghiệm game hóa đặt trên Learning Engine hiện có. Mục tiêu là biến quá trình học thành hành trình vượt ải, nhưng mọi phần thưởng và điều kiện mở khóa vẫn phải phản ánh hành vi học có giá trị.

```text
Subject → World
Chapter → Region
Nhóm concept → Stage
Chapter assessment → Boss Stage
Review queue → Review/Daily Quest
Full Exam → Final Dungeon
```

Vòng lặp chính:

```text
Khám phá bản đồ → Learn → Challenge → Review
→ nhận sao/XP → mở ải mới → Chapter Boss → mở region tiếp theo
```

## 65.1. Hai chế độ truy cập

### Adventure Mode

- Tiến triển theo prerequisite và quy tắc mở khóa.
- Hiển thị world map, stage, sao, boss và phần thưởng.
- Là trải nghiệm mặc định cho người dùng muốn học tuần tự.

### Free Study Mode

- Cho phép truy cập trực tiếp subject, chapter, concept, quiz và exam.
- Không yêu cầu vượt ải trước đó.
- Không thay đổi trạng thái mở khóa Adventure nếu chưa đáp ứng đúng điều kiện stage.
- Luôn khả dụng để người dùng ôn gấp hoặc học theo nhu cầu riêng.

Adventure Mode không được sử dụng energy, thời gian chờ, loot box, paywall, phạt mất XP hoặc cơ chế grind bắt buộc.

## 65.2. Nguyên tắc trải nghiệm

- Learning quality > gameplay > visual effect.
- Một stage mục tiêu hoàn thành trong khoảng 5–12 phút.
- Animation không được trì hoãn thao tác học và phải tắt/giảm được.
- Sai là tín hiệu cần học lại, không phải lý do trừng phạt mạnh.
- Game presentation không được chứa logic đáp án, mastery hoặc scoring trong UI component.

---

# 66. WORLD, REGION VÀ STAGE DATA MODEL

```ts
type StageType =
  | "learning"
  | "review"
  | "side_quest"
  | "boss"
  | "final_dungeon";

type StageStatus =
  | "locked"
  | "available"
  | "in_progress"
  | "passed"
  | "mastered"
  | "needs_review";

interface LearningWorld {
  id: string;
  subjectId: string;
  title: string;
  description?: string;
  regionIds: string[];
  themeKey: string;
}

interface LearningRegion {
  id: string;
  worldId: string;
  chapterId: string;
  title: string;
  order: number;
  stageIds: string[];
  bossStageId: string;
  prerequisiteRegionIds: string[];
}

interface LearningStage {
  id: string;
  regionId: string;
  type: StageType;
  title: string;
  order: number;
  conceptIds: string[];
  prerequisiteStageIds: string[];
  minimumQuestionCount: number;
  passAccuracy: number;
  threeStarAccuracy: number;
  estimatedMinutes: number;
  questionSelection: "concept_pool" | "weakness_pool" | "exam_map";
  rewards: {
    firstClearXp: number;
    achievementId?: string;
  };
}

interface StageProgress {
  stageId: string;
  status: StageStatus;
  learnCompleted: boolean;
  bestScore: number;
  stars: 0 | 1 | 2 | 3;
  attempts: number;
  firstCompletedAt?: string;
  lastPlayedAt?: string;
  lastReviewedAt?: string;
}
```

## 66.1. Quy tắc tạo stage

- Một learning stage nên chứa 1–3 concept liên quan và tối thiểu 5 câu clean.
- Không mặc định một concept bằng một stage.
- Concept quá ít câu có thể ghép với concept liên quan hoặc trở thành Knowledge/Side Quest node.
- Concept importance 4–5 ưu tiên nằm trên main path và xuất hiện trong Boss pool.
- Concept importance 1–3 có thể nằm trên main path hoặc side quest tùy coverage.
- Stage map phải được tạo thành data/config đã validate, không hard-code trong component.

## 66.2. Validation

- Mọi `conceptIds` và prerequisite phải tồn tại.
- Graph prerequisite không được có chu trình.
- Mỗi region phải có đúng một Boss Stage.
- Boss Stage phải phụ thuộc vào tất cả learning stage bắt buộc trong region.
- `passAccuracy` và `threeStarAccuracy` nằm trong `[0, 1]`, trong đó `threeStarAccuracy >= passAccuracy`.
- Nếu stage không đủ `minimumQuestionCount` clean thì build cảnh báo và stage không được dùng để khóa tiến trình.

---

# 67. STAGE LEARNING LOOP

Mỗi learning stage có ba phase độc lập nhưng liên kết:

```text
LEARN → CHALLENGE → REVIEW
```

## 67.1. Learn

Hiển thị nội dung của các concept trong stage:

- Tóm tắt và định nghĩa.
- Từ khóa, ý quan trọng và ví dụ.
- Common traps và memory tips.
- Mini-checkpoint tùy chọn 2–3 câu.

`learnCompleted = true` khi người dùng xem toàn bộ section bắt buộc và chủ động bấm `Ready for Challenge`. Không dùng thời gian mở trang làm điều kiện duy nhất.

## 67.2. Challenge

- Dùng Quiz Engine tại mục 24 và quy tắc mục 51–52.
- Mặc định 5–10 câu clean từ các concept trong stage.
- Hiển thị progress, combo, XP và visual HP/progress nếu bật animation.
- Câu sai được giải thích ngay trong learning stage challenge.
- Kết quả được lưu như một `StudySession`; không tạo hệ thống attempt riêng cho Adventure.

## 67.3. Review

Sau challenge hiển thị:

- Accuracy và số đúng/sai.
- Sao đạt được.
- Mastery thay đổi theo từng concept.
- Câu sai và trap đã gặp.
- Best combo và XP hợp lệ.
- Đề xuất `Continue`, `Review Weak Concepts` hoặc `Retry for 3 Stars`.

Stage result phải lấy từ session đã hoàn thành, không tính lại từ state UI tạm thời.

---

# 68. UNLOCK, PASS VÀ STAR RULES

## 68.1. Điều kiện vượt learning stage

```ts
passed =
  learnCompleted &&
  validQuestionCount >= minimumQuestionCount &&
  accuracy >= passAccuracy;
```

Default V1:

```text
passAccuracy = 0.70
minimumQuestionCount = 5
```

Nếu dữ liệu thực tế không đủ số câu tối thiểu, stage phải được đánh dấu content issue; người dùng không bị khóa đường tiến triển vì lỗi corpus.

## 68.2. Sao

| Kết quả | Sao |
|---|:---:|
| Chưa đạt passAccuracy | 0 |
| Đạt 70%–79.99% | 1 sao |
| Đạt 80%–89.99% | 2 sao |
| Đạt từ 90% | 3 sao |

- Star thresholds phải configurable theo stage nhưng mặc định theo bảng trên.
- Sao lưu theo best result và không giảm.
- Mastery vẫn có thể giảm/overdue theo review schedule dù stage đã đạt ba sao.
- `Perfect Clear` là achievement presentation khi accuracy 100%, không dùng hint và hoàn thành đủ question; không tạo sao thứ tư.

## 68.3. Mở khóa

- Stage `available` khi tất cả prerequisite bắt buộc đã `passed` hoặc `mastered`.
- Boss mở khi tất cả learning stage bắt buộc trong region đã passed.
- Region tiếp theo mở khi Boss region trước đã bị đánh bại.
- Side quest không chặn Boss trừ khi data config đánh dấu `required`.
- Free Study không tự mở khóa node Adventure.
- Người dùng có thể replay stage bất kỳ đã available; thưởng first-clear chỉ nhận một lần.

## 68.4. Needs review

Stage đã passed chuyển presentation sang `needs_review` khi có ít nhất một concept chính overdue hoặc mastery dưới ngưỡng cảnh báo. Trạng thái này không khóa stage sau và không xóa sao; nó chỉ tạo đề xuất ôn lại.

---

# 69. CHAPTER BOSS RULES

Boss Stage là bài đánh giá tổng hợp của region/chapter và chỉ kiểm tra các concept thuộc region đó.

## 69.1. Boss question pool

Ưu tiên theo thứ tự:

1. Question clean, difficulty 3–4.
2. Concept importance 4–5.
3. Concept người dùng có mastery thấp hoặc từng trả lời sai.
4. Trap question và wording chưa gặp gần đây.
5. Bảo đảm coverage đủ các concept chính.

Boss không được chỉ chọn nhiều câu từ một concept có frequency cao làm mất cân bằng coverage.

## 69.2. Luật V1

```text
Boss HP: 100
Mỗi câu đúng: 10 damage
Difficulty 4 đúng: 15 damage
Combo 3: +5 critical damage
Câu sai: mất 1 heart
Player hearts mặc định: 3
```

HP/hearts là lớp trình bày. Kết quả học tập chính thức vẫn dựa trên accuracy và concept coverage.

```ts
bossPassed =
  accuracy >= 0.70 &&
  testedRequiredConceptRatio >= 0.80;
```

Boss pool mặc định 10 câu; nếu corpus không thể bảo đảm coverage, UI phải thông báo và dùng số câu hợp lệ tối đa. Boss thất bại không làm mất XP/mastery đã có; các lỗi sai được đưa vào review queue.

## 69.3. Phần thưởng

- Mở region tiếp theo.
- First-clear XP chỉ nhận một lần.
- Chapter badge/achievement nếu cấu hình.
- Chapter report: accuracy, coverage, concept mạnh/yếu và đề xuất review.
- Replay Boss được phép để cải thiện best score/sao nhưng không farm first-clear reward.

## 69.4. Final Dungeon

Full Exam có thể được trình bày như Final Dungeon nhưng phải giữ nguyên Exam Engine, timer, exam map và quy tắc chấm điểm tại mục 51–52. Adventure presentation không được thay đổi nội dung hoặc thứ tự đề canonical nếu người dùng chọn replay đề thật.

---

# 70. ADVENTURE MAP UI VÀ VISUAL STATES

## 70.1. Bố cục

- Desktop/tablet: đường đi ngang, zigzag hoặc node map theo region.
- Mobile: đường đi dọc, ưu tiên scroll và touch target.
- Boss node lớn hơn main stage; side quest tách nhánh nhưng không che main path.
- Map phải có danh sách tuyến tính tương đương cho keyboard và screen reader.

## 70.2. Node states

| Trạng thái | Presentation bắt buộc |
|---|---|
| `locked` | Mờ + biểu tượng khóa + lý do khóa |
| `available` | CTA rõ, glow/pulse nhẹ nếu animation bật |
| `in_progress` | Progress ring và nút Continue |
| `passed` | Hiển thị 1–3 sao |
| `mastered` | Badge/viền đặc biệt, vẫn replay được |
| `needs_review` | Cảnh báo màu cam + text “Cần ôn lại” |
| `boss` | Node riêng, HP/theme chỉ xuất hiện khi vào challenge |

Không dùng màu làm tín hiệu duy nhất. Locked node phải focus được nếu cần đọc lý do, nhưng action Start bị disable.

## 70.3. Theme

Mỗi world có thể có `themeKey`, background, icon và accent riêng nhưng phải dùng chung design token, typography, contrast và component behavior. Theme không được thay đổi semantic color của correct/wrong/warning.

## 70.4. Motion và feedback

Cho phép correct pulse, wrong shake nhẹ, XP fly-up, star reveal, path unlock và Boss HP animation. Tất cả animation phải:

- Có chế độ Full/Reduced/Off.
- Không block Next/Continue.
- Không kéo dài quá mức; target feedback chính dưới 300 ms, celebration ngắn có thể bỏ qua.
- Có text equivalent cho screen reader.

---

# 71. SIDE QUEST VÀ DAILY DUNGEON MAPPING

| Learning feature | Adventure presentation | Ảnh hưởng tiến trình |
|---|---|---|
| Review Mistakes | Revenge Quest | Không khóa main path |
| Weakness Hunt | Weakness Dungeon | Không khóa main path |
| Flashcards | Memory Shrine | Tác động review schedule |
| Daily Challenge | Daily Quest | XP/streak, không khóa main path |
| Speed Run | Time Trial | Phase 3, optional |
| Sudden Death | Survival Mode | Phase 3, optional |
| Bookmark | Adventure Journal | Không ảnh hưởng unlock |
| Achievement | Trophy Room | Presentation/reward |
| Full Exam | Final Dungeon | Theo Exam Engine |

## 71.1. Daily Quest

- Sinh từ local date và dữ liệu người dùng.
- Cùng ngày và cùng content/config version phải cho cùng challenge bằng deterministic seed.
- Không bắt người dùng làm nội dung locked; ưu tiên stage available/passed và review due.
- Claim reward phải idempotent.

## 71.2. Side quest

- Có thể sinh từ concept yếu, mistake log, content optional hoặc concept có ít câu.
- Mặc định không phải prerequisite.
- Hoàn thành có thể cấp XP và hỗ trợ mastery theo thuật toán chuẩn; không có currency riêng trong V1.

---

# 72. ADVENTURE PROGRESS PERSISTENCE

Bổ sung IndexedDB store:

| Store | Primary key | Index chính |
|---|---|---|
| `stageProgress` | `stageId` | regionId, status, lastPlayedAt |
| `worldProgress` | `worldId` | subjectId, updatedAt |
| `rewardClaims` | `claimId` | rewardType, entityId, claimedAt |

```ts
interface WorldProgress {
  worldId: string;
  subjectId: string;
  unlockedRegionIds: string[];
  totalStars: number;
  defeatedBossStageIds: string[];
  updatedAt: string;
}

interface RewardClaim {
  claimId: string;
  rewardType: "stage_first_clear" | "boss_first_clear" | "daily_quest";
  entityId: string;
  claimedAt: string;
  xpAwarded: number;
}
```

## 72.1. Transaction

Khi hoàn thành stage, một transaction logic phải cập nhật:

```text
StudySession result
→ attempts/mistakes/mastery/XP
→ StageProgress best score/stars/status
→ unlock candidates
→ first-clear RewardClaim
→ WorldProgress totals
```

Nếu phần Adventure transaction thất bại, không được hiển thị node đã mở hoặc reward đã claim. Retry phải idempotent theo `sessionId + rewardType`.

## 72.2. Import/export và migration

- Adventure progress nằm trong progress export tại mục 32 và acceptance criteria AC-MVP-08.
- Import Merge lấy best stars/best score, cộng không trùng attempts và giữ reward claim theo ID; không cộng XP hai lần.
- Khi stage config đổi, migration map stage cũ sang stage mới nếu tương đương.
- Stage bị xóa giữ lịch sử session nhưng không tính vào map hiện tại.
- Stage mới được xác định locked/available từ prerequisite hiện hành.
- Nếu concept split/merge, áp dụng migration mục 57 trước khi tính lại `needs_review`.

---

# 73. ADVENTURE MODE ACCEPTANCE CRITERIA

## AC-ADV-01 — Stage unlock

```gherkin
Given tất cả prerequisite stage bắt buộc đã passed
When Adventure progress được cập nhật thành công
Then stage kế tiếp chuyển từ locked sang available
And refresh vẫn giữ trạng thái đó
```

## AC-ADV-02 — Không vượt ải khi chưa học

```gherkin
Given learnCompleted bằng false
When challenge đạt accuracy lớn hơn passAccuracy
Then stage chưa được đánh dấu passed
And UI đề nghị hoàn thành Learn phase
```

## AC-ADV-03 — Star result

```gherkin
Given stage có threshold mặc định
When người dùng đạt accuracy 85%
Then stage passed với 2 sao
And best stars không giảm khi replay đạt kết quả thấp hơn
```

## AC-ADV-04 — Boss unlock

```gherkin
Given mọi learning stage bắt buộc trong region đã passed
When progress transaction hoàn tất
Then Boss Stage trở thành available
And side quest optional chưa hoàn thành không chặn Boss
```

## AC-ADV-05 — Boss coverage

```gherkin
Given Boss Challenge đạt accuracy 80%
But testedRequiredConceptRatio dưới 80%
When result được đánh giá
Then Boss chưa được xem là defeated
And UI hiển thị concept coverage còn thiếu
```

## AC-ADV-06 — Free Study

```gherkin
Given một chapter đang locked trong Adventure Mode
When người dùng mở concept của chapter đó bằng Free Study Mode
Then nội dung vẫn học được
And Adventure node không tự chuyển sang available hoặc passed
```

## AC-ADV-07 — First-clear reward idempotency

```gherkin
Given stage đã nhận first-clear reward
When người dùng replay hoặc import lại cùng RewardClaim
Then best result có thể cập nhật
But first-clear XP không được cộng lần hai
```

## AC-ADV-08 — Needs review

```gherkin
Given stage đã đạt 3 sao
When concept chính của stage trở thành overdue
Then stage hiển thị needs_review
And sao cũ và các stage đã mở không bị mất
```

## AC-ADV-09 — Reduced motion

```gherkin
Given animation setting là Reduced hoặc Off
When thắng Boss và mở region mới
Then tiến trình vẫn cập nhật đầy đủ
And UI không yêu cầu xem animation để tiếp tục
```

## AC-ADV-10 — Accessibility map

```gherkin
Given người dùng chỉ dùng keyboard và screen reader
When duyệt Adventure Map
Then có thể đọc stage title, status, stars và lý do locked
And có thể bắt đầu mọi stage available mà không cần thao tác kéo/thả
```

---

## 73.1. Adventure MVP scope

Adventure Mode MVP gồm:

- World map cho MLN111.
- Region theo chapter.
- Main learning stages, unlock path và 1 Boss mỗi region.
- Learn → Challenge → Review.
- Sao, first-clear XP, stage progress và resume.
- Free Study Mode song song.

Side quest nâng cao, Daily Quest, Final Dungeon presentation, nhiều world theme và animation đặc biệt có thể hoàn thiện ở Phase 2–3 sau khi core learning loop ổn định.

## 73.2. ADR bổ sung

| ID | Quyết định |
|---|---|
| ADR-010 | Adventure Mode là presentation/orchestration layer trên Learning Engine |
| ADR-011 | Subject = World, Chapter = Region, nhóm concept = Stage |
| ADR-012 | Adventure và Free Study cùng tồn tại; không khóa cứng nội dung học |
| ADR-013 | Default pass stage là 70%; sao lần lượt ở 70/80/90% |
| ADR-014 | Boss cần cả accuracy ≥ 70% và required concept coverage ≥ 80% |
| ADR-015 | Sao không giảm; overdue chỉ chuyển presentation sang needs_review |
| ADR-016 | Reward claim phải idempotent và không được farm bằng replay/import |
