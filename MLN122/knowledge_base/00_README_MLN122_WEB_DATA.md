# MLN122 WEB DATA — README

**Subject:** Kinh tế chính trị Mác - Lênin (MLN122)  
**Version:** v0.1  
**Scope:** Corpus MLN122 với 11 bộ đề thi Final Exam & Re-exam (660 lượt câu hỏi), phục vụ StudyQuest frontend & mock data.

## Bộ file Knowledge Base

| File | Vai trò | Frontend dùng cho |
|---|---|---|
| `01_MLN122_SOURCE_INDEX.md` | Nguồn, duplicate, canonical corpus | provenance / QC |
| `02_MLN122_CONCEPT_MAP.md` | Taxonomy concept + priority | knowledge map / mastery |
| `03_MLN122_MASTER_QUESTIONS.md` | Question bank exact-dedup | quiz / exam / practice |
| `04_MLN122_MASTER_KNOWLEDGE.md` | Knowledge theo concept | learn mode |
| `05_MLN122_FLASHCARDS.md` | Active recall cards | flashcard mode |
| `06_MLN122_REVIEW_ISSUES.md` | Câu mơ hồ / conflict | data QC |
| `07_MLN122_EXAM_MAP.md` | Thứ tự câu từng đề | full exam mode |
| `08_MLN122_MOCKDATA_SCHEMA.md` | Quy tắc convert MD → JSON/TS | implementation |

## Snapshot dữ liệu

- **11** đề canonical (60 câu/đề = **660** lượt câu thô).
- **435** câu hỏi khác nhau sau exact-normalization.
- **431** câu `clean`.
- **4** câu `needs_review`.
- **20** concept trong taxonomy v0.1 (chia đều 6 chương).
- **431** flashcard sinh từ các câu clean.

## Cách dùng ngay

1. Học/hiển thị concept từ `04_MLN122_MASTER_KNOWLEDGE.md`.
2. Luyện câu từ `03_MLN122_MASTER_QUESTIONS.md`, mặc định chỉ dùng `quality=clean`.
3. Tính chỉ số mastery theo `concept_id`.
4. Full Exam dùng danh sách QID trong `07_MLN122_EXAM_MAP.md`.
5. Câu sai đẩy về concept tương ứng để Weakness Engine chọn lại.
6. Khi có đề MLN122 mới: append nguồn → exact dedupe → map concept → audit → cập nhật frequency.
