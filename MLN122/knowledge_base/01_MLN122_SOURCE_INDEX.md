# MLN122 — SOURCE INDEX

**Phiên bản:** v0.1  
**Mục đích:** Danh mục nguồn đầu vào và quy tắc xác định corpus chuẩn cho website MLN122.

## 1. Thống kê corpus hiện tại

- File đề/đáp án: **11 đề canonical**.
- Lượt câu thô: **660**.
- Câu hỏi khác nhau sau chuẩn hóa câu chữ chính xác: **435**.
- Lượt lặp nguyên văn sau chuẩn hóa: **225**.

## 2. Danh sách nguồn

| Exam ID | File | Số câu | Vai trò |
|---|---|---:|---|
| `MLN122-SP25-B5-1` | `MLN122_SP25_B5_1.md` | 60 | Canonical |
| `MLN122-SP25-B5-2` | `MLN122_SP25_B5_2.md` | 60 | Canonical |
| `MLN122-SP26-C1FE` | `MLN122_SP26_C1FE.md` | 60 | Canonical |
| `MLN122-SP26-C2FE` | `MLN122_SP26_C2FE.md` | 60 | Canonical |
| `MLN122-SU25-C1FE` | `MLN122_SU25_FE_C1.md` | 60 | Canonical |
| `MLN122-SU25-C2FE` | `MLN122_SU25_FE_C2.md` | 60 | Canonical |
| `MLN122-SU25-RE-Half2` | `MLN122_SU25_RE_Half2.md` | 60 | Canonical |
| `MLN122-SU26-C1FE` | `MLN122_SU26_FE_C1.md` | 60 | Canonical |
| `MLN122-SU26-C2FE` | `MLN122_SU26_FE_C2.md` | 60 | Canonical |
| `MLN122-SU26-RE` | `MLN122_SU26_RE.md` | 60 | Canonical |
| `MLN122-SU25-B5-1` | `MLN122_SU25_B5_1_466423.md` | 60 | Canonical |

## 3. Quy tắc nguồn

- Không xóa file gốc.
- Master Question Bank chỉ deduplicate câu trùng nguyên văn sau chuẩn hóa; câu đổi cách diễn đạt vẫn được giữ vì có giá trị luyện nhận diện concept.
- Câu có đáp án chưa chốt hoàn toàn được gắn `needs_review`.
- Câu `needs_review` không được đưa mặc định vào Clean Exam Mode.
- Mọi câu phải giữ `sources` để truy vết về đề gốc.
