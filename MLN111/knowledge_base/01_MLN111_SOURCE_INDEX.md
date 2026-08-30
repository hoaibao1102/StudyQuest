# MLN111 — SOURCE INDEX

**Phiên bản:** v0.1  
**Mục đích:** Danh mục nguồn đầu vào và quy tắc xác định corpus chuẩn cho website.

## 1. Thống kê corpus hiện tại

- File đề/đáp án: **9**.
- Lượt câu thô: **540**.
- Đề canonical dùng để tính tần suất: **7 × 60 = 420 lượt câu**.
- Câu hỏi khác nhau sau chuẩn hóa câu chữ chính xác trong 7 đề: **311**.
- Lượt lặp nguyên văn sau chuẩn hóa: **109**.
- File kiến thức nền: **Tong_Hop_Kien_Thuc_Chuong_1_2_3(1).md**.

> `frequency` trong master bank chỉ tính trên **7 đề canonical**, tránh đếm đôi các file bản sao/QC.

## 2. Danh sách nguồn

| Exam ID | File | Số câu | Câu chỉ có ở đề này | Câu lặp với đề khác | Vai trò |
|---|---|---:|---:|---:|---|
| `MLN111-SP26-FE` | `MLN111_SP26_FE_Giai_Chi_Tiet.md` | 60 | 29 | 31 | Canonical |
| `MLN111-SP26-FE-RE` | `MLN111_SP26_FE_RE_Giai_Chi_Tiet.md` | 60 | 33 | 27 | Canonical |
| `MLN111-SU26-B5-FE` | `MLN111_SU26_B5_FE_GiaiChiTiet.md` | 60 | 50 | 10 | Canonical |
| `MLN111-SU26-C1FE` | `MLN111_SU26_C1FE_Giai_Chi_Tiet.md` | 60 | 18 | 42 | Canonical |
| `MLN111-SU26-RE` | `MLN111_SU26_RE_Giai_Chi_Tiet.md` | 60 | 47 | 13 | Canonical |
| `MLN111-SP26-B5-FE` | `MLN111_SP26_B5_FE_Giai_Chi_Tiet.md` | 60 | 27 | 33 | Canonical |
| `MLN111-SP26-B5-FE-RE` | `MLN111_SP26_B5_FE_RE.md` | 60 | 21 | 39 | Canonical |
| `MLN111-SU26-C1FE` | `MLN111_SU26_C2FE_Giai_Chi_Tiet.md` | 60 | — | — | Alias/QC |
| `MLN111-SU26-RE` | `MLN111-SU26-RE_Giai_chi_tiet_60_cau(1).md` | 60 | — | — | Alias/QC |

## 3. File alias / duplicate

- `MLN111_SU26_C2FE_Giai_Chi_Tiet.md` → alias của `MLN111-SU26-C1FE`. Exact question-sequence duplicate 60/60 of C1FE; giữ làm bản đối chiếu, không tính thêm frequency.
- `MLN111-SU26-RE_Giai_chi_tiet_60_cau(1).md` → alias của `MLN111-SU26-RE`. Bản chép/đối chiếu của SU26 RE, có đánh dấu ⚠ ở câu nguồn chưa sạch; dùng QC, không tính như đề độc lập.

## 4. Quy tắc nguồn

- Không xóa file gốc.
- Master Question Bank chỉ deduplicate **câu trùng nguyên văn sau chuẩn hóa**; câu đổi cách diễn đạt vẫn được giữ vì có giá trị luyện nhận diện concept.
- Câu có đáp án kiểu `A hoặc B`, nguồn bị che, hoặc các bản cùng câu cho đáp án khác nhau phải gắn `needs_review`.
- Câu `needs_review` không được đưa mặc định vào Clean Exam Mode.
- Mọi câu phải giữ `source_refs` để truy vết về đề gốc.
