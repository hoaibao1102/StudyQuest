# PRM393 WEB DATA V0.1

## 1. Snapshot

- **Subject:** Mobile Programming
- **Subject ID:** `PRM393`
- **Dataset:** `PRM393_WEB_DATA_V0_1`
- **Source files:** 5
- **Canonical exam sources:** 5 (không có exact file duplicate; hai source có metadata cần review nhưng vẫn được giữ canonical để không mất dữ liệu)
- **Total question occurrences:** 248
- **Exact-unique master questions:** 158
- **Clean questions:** 151
- **Flagged master questions:** 7
- **Concepts used:** 87
- **Flashcards:** 120

> Lưu ý: `chapter_id` trong bộ dữ liệu này là **phân nhóm logic nội bộ cho study web**, không được coi là numbering chương chính thức của giáo trình. Corpus chỉ trực tiếp nhắc Chapter 13 và Chapter 14 ở hai câu riêng.

## 2. Deduplication policy

- Exact duplicate = cùng stem + cùng A/B/C/D sau chuẩn hóa khoảng trắng/chữ hoa-thường.
- Exact duplicate được gộp thành một `PRM393-Qxxxx`, nhưng giữ `source_exams`, `source_occurrences` và `frequency`.
- Semantic duplicate không bị xóa; các wording khác nhau kiểm tra cùng kiến thức được nối bằng cùng `concept_id`.
- Exact duplicates trong snapshot này **không có answer-key conflict**.

## 3. File relationship

`01_SOURCE_INDEX` → định danh nguồn/canonical source  
`07_EXAM_MAP` → giữ thứ tự từng đề và nối source exam → master question  
`03_MASTER_QUESTIONS` → master question → concept + source occurrences  
`02_CONCEPT_MAP` → chapter/topic/concept  
`04_MASTER_KNOWLEDGE` → kiến thức học theo concept  
`05_FLASHCARDS` → flashcards sinh từ Master Knowledge  
`06_REVIEW_ISSUES` → source/question chưa đủ sạch để dùng Exam Mode chuẩn  
`08_MOCKDATA_SCHEMA` → contract cho bước MD → JSON → frontend

## 4. Frontend policy

Exam Mode chuẩn nên lọc:

```ts
question.qualityStatus === "clean"
```

Các mode học/review có thể hiển thị `ambiguous` hoặc `needs_review` nhưng phải gắn cảnh báo.

## 5. Pipeline tiếp theo

```text
Markdown master data
   ↓ parser / validation
subject.json
chapters.json
concepts.json
knowledge.json
questions.json
flashcards.json
exams.json
   ↓
Frontend static imports / fetch
   ↓
localStorage / IndexedDB: progress, mastery, streak, spaced repetition
```

## 6. ID stability rule

- Question IDs của snapshot V0.1 được cấp theo **first canonical occurrence** trong source order được ghi ở `01_SOURCE_INDEX`.
- Khi bổ sung corpus sau này, nên giữ nguyên ID V0.1 và chỉ append ID mới để tránh phá progress phía frontend.
- Concept IDs dùng tên semantic, không phụ thuộc số thứ tự câu.
