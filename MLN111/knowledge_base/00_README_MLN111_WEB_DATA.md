# MLN111 WEB DATA — README

**Version:** v0.1  
**Scope:** corpus MLN111 hiện đã thu thập, chuẩn bị cho StudyQuest frontend + mock data.

## Bộ file

| File | Vai trò | Frontend dùng cho |
|---|---|---|
| `01_MLN111_SOURCE_INDEX.md` | Nguồn, duplicate, canonical corpus | provenance / QC |
| `02_MLN111_CONCEPT_MAP.md` | Taxonomy concept + priority | knowledge map / mastery |
| `03_MLN111_MASTER_QUESTIONS.md` | Question bank exact-dedup | quiz / exam / practice |
| `04_MLN111_MASTER_KNOWLEDGE.md` | Knowledge theo concept | learn mode |
| `05_MLN111_FLASHCARDS.md` | Active recall cards | flashcard mode |
| `06_MLN111_REVIEW_ISSUES.md` | Câu mơ hồ / conflict | data QC |
| `07_MLN111_EXAM_MAP.md` | Thứ tự câu từng đề | full exam mode |
| `08_MLN111_MOCKDATA_SCHEMA.md` | Quy tắc convert MD → JSON/TS | implementation |

## Snapshot dữ liệu

- 9 file đề/đáp án gốc.
- 7 đề canonical.
- 420 lượt câu canonical.
- **311** câu khác nhau sau exact-normalization.
- **297** câu `clean`.
- **14** câu `needs_review`.
- **66** concept trong taxonomy v0.1.
- **118** flashcard sinh từ câu clean.

## Cách dùng ngay

1. Học/hiển thị concept từ `04_MASTER_KNOWLEDGE`.
2. Luyện câu từ `03_MASTER_QUESTIONS`, mặc định chỉ `quality=clean`.
3. Tính mastery theo `concept_id`.
4. Full Exam dùng danh sách QID trong `07_EXAM_MAP`.
5. Câu sai đẩy về concept tương ứng để Weakness Engine chọn lại.
6. Khi có đề MLN111 mới: append nguồn → exact dedupe → map concept → audit → cập nhật frequency.

## Chú ý
- Đây là **data build v0.1**, không phải bản kiến thức cuối cùng đã audit bằng giáo trình chính thức từng câu.
- Các câu trong `06_REVIEW_ISSUES` phải được xác minh thêm trước khi coi là ground truth.
