# MLN111 — SUPPLEMENTAL SOURCE AUDIT

**Phiên bản:** v0.2  
**Mục đích:** Đánh giá hai tài liệu mới và ghi lại các thay đổi đã áp dụng cho StudyQuest.

## 1. Nguồn được phân tích

### 1.1. Giáo trình PDF mới

- File: `GIAO TRINH TRIET HOC - KHONG CHUYEN (da xuat ban).pdf`
- Dung lượng: khoảng 28,4 MB.
- Cấu trúc: 496 trang scan; mỗi trang là một ảnh, không có text layer.
- Nhận diện: *Giáo trình Triết học Mác–Lênin (Dành cho bậc đại học hệ không chuyên lý luận chính trị)*, NXB Chính trị quốc gia Sự thật, Hà Nội, 2021, ISBN `978-604-57-6594-4`.

Repo đã có `GIAO TRINH TRIET HOC MAC - LENIN (Quoc gia) (1).pdf`, là bản text tương đương của cùng giáo trình: cùng tên, đối tượng học, NXB, năm và ISBN. Bản text 220 trang/703.937 ký tự được dùng để tra cứu toàn văn; bản scan 496 trang được giữ làm bản xuất bản đối chiếu.

### 1.2. Bài giảng PPTX mới

- File: `MLN111_TRIẾT HỌC MÁC-LÊNIN.pptx`
- Dung lượng: khoảng 25,2 MB.
- Cấu trúc: 355 slide, bao phủ đủ ba chương.
- Giá trị bổ sung: sơ đồ hóa khái niệm, quan hệ hai chiều, ví dụ giảng dạy, bẫy dễ nhầm và nội dung những concept chưa xuất hiện trong question corpus.

## 2. Phương pháp đối chiếu

1. Trích toàn bộ text PPTX theo slide và paragraph.
2. Đối chiếu 66 concept trong `02_MLN111_CONCEPT_MAP.md` với 57 entry cũ trong `04_MLN111_MASTER_KNOWLEDGE.md`.
3. Dùng bản PDF text tương đương để xác nhận định nghĩa và quan hệ từ bài giảng.
4. Không thay đổi question bank nếu tài liệu không xác định duy nhất phương án của câu đề cụ thể.
5. Mỗi entry bổ sung ghi rõ phần giáo trình và số slide.

## 3. Kết quả gap analysis

Trước audit:

- Taxonomy: 66 concept.
- Master Knowledge: 57 concept.
- Thiếu Knowledge Entry: 9 concept.
- Flashcards: 118, đều sinh từ câu clean.

Sau audit:

- Taxonomy: 66 concept.
- Master Knowledge: 66/66 concept.
- Flashcards: 127 = 118 từ câu clean + 9 từ giáo trình/bài giảng.
- Question Bank: giữ nguyên 311 câu, trong đó 297 clean và 14 needs_review.

## 4. Nội dung mới đã bổ sung

| Concept ID | Concept | Giáo trình | PPTX | Nội dung chính bổ sung |
|---|---|---|---|---|
| `MLN111-C1-05` | Khả tri, bất khả tri và hoài nghi | Phần “Thuyết có thể biết và thuyết không thể biết” | Slide 12, 14, 19 | Phân biệt ba lập trường nhận thức luận |
| `MLN111-C2-22` | Nhận thức cảm tính và lý tính | Phần “Các giai đoạn của quá trình nhận thức” | Slide 210–216 | Cảm giác–tri giác–biểu tượng; khái niệm–phán đoán–suy lý |
| `MLN111-C2-23` | Thực tiễn và nhận thức | Phần “Thực tiễn và vai trò của thực tiễn” | Slide 202–209 | Khái niệm, ba hình thức, bốn vai trò của thực tiễn |
| `MLN111-C2-24` | Chân lý | Phần “Quan điểm của CNDVBC về chân lý” | Slide 217–218 | Khách quan, tương đối–tuyệt đối, cụ thể |
| `MLN111-C3-05` | Quy luật LLSX–QHSX | Phần “Biện chứng giữa LLSX và QHSX” | Slide 232–237 | Quyết định, tác động trở lại và chu trình phù hợp |
| `MLN111-C3-08` | Quan hệ CSHT–KTTT | Phần “Biện chứng giữa CSHT và KTTT” | Slide 238–244 | Hai chiều tác động và vai trò thiết chế |
| `MLN111-C3-19` | Quan hệ TTXH–YTXH | Phần quan hệ tồn tại/ý thức xã hội | Slide 309–322 | Quyết định và tính độc lập tương đối |
| `MLN111-C3-20` | Các hình thái ý thức xã hội | Phần “Các hình thái ý thức xã hội” | Slide 311–321 | Chính trị, pháp quyền, đạo đức, nghệ thuật, tôn giáo, khoa học, triết học |
| `MLN111-C3-26` | Giai cấp và Việt Nam thời kỳ quá độ | Phần đấu tranh giai cấp ở Việt Nam | Slide 270–272 | Điều kiện, nội dung và hình thức mới |

Mỗi entry gồm:

- Định nghĩa/quan hệ cốt lõi.
- Ví dụ đời thường đơn giản.
- Bẫy hoặc điểm dễ nhầm.
- Provenance giáo trình và slide.

## 5. Các quyết định không thay đổi

### Question Bank

Không thêm câu hỏi mới từ giáo trình hoặc slide vì đây là nguồn học liệu, không phải đề thi. Việc tự tạo câu mới sẽ làm lẫn câu đề thật với câu biên soạn.

### Exam Map và frequency

Không thay đổi. Hai tài liệu mới không được tính là canonical exam source.

### 14 review issues

Giáo trình giúp xác nhận kiến thức nền của nhiều issue, nhưng chưa phải lúc nào cũng xác định duy nhất chữ cái phương án do một số đề có option chồng nghĩa hoặc thứ tự khác nhau. Vì vậy các câu vẫn ở `needs_review` cho đến khi đối chiếu từng option với ảnh đề gốc.

## 6. Tệp đã cập nhật

- `00_README_MLN111_WEB_DATA.md`
- `01_MLN111_SOURCE_INDEX.md`
- `04_MLN111_MASTER_KNOWLEDGE.md`
- `05_MLN111_FLASHCARDS.md`
- `09_MLN111_SUPPLEMENTAL_SOURCE_AUDIT.md`

## 7. Khuyến nghị tiếp theo

1. Cho Learn Mode đọc đủ 66 Knowledge Entry thay vì chỉ ưu tiên concept có câu đề.
2. Đánh dấu flashcard từ tài liệu bằng provenance riêng (`sourceType = textbook | lecture`).
3. Audit riêng 14 review issues theo option text và ảnh đề gốc trước khi chuyển sang clean.
4. Nếu tạo câu luyện mới từ giáo trình, đặt namespace riêng như `MLN111-PRACTICE-*`, không trộn với `MLN111-Q-*` của đề thật.
