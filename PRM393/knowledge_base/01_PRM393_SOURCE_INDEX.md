# PRM393 Source Index

## Canonical source order

| Source ID | File | Semester / Version | Exam type | Questions parsed | Canonical | Duplicate of | Notes |
|---|---|---|---|---:|---|---|---|
| PRM393-SRC-SP26-FE | PRM393_SP26_FE.md | SP26 / SP26 FE | FE | 50 | Yes | — | Không phát hiện exact file duplicate. |
| PRM393-SRC-SP26-B5-FE | PRM393_SP26_B5_FE.md | SP26 / SP26 B5 FE | B5 FE | 48 | Yes | — | Không phát hiện exact file duplicate. Source hiện có 48 câu; corpus không đủ để kết luận đề gốc vốn 48 câu hay thiếu 2 câu. |
| PRM393-SRC-SU26-FE | PRM393_SU26_FE.md | SU26 / SU26 FE | FE | 50 | Yes | — | Không phát hiện exact file duplicate. |
| PRM393-SRC-SU26-FE-RE | PRM393_SU26_FE_RE.md | SU26 / SU26 FE RE | FE/RE (source label) | 50 | Yes | — | Không phát hiện exact file duplicate. Nhãn file ghi FE-RE nhưng nội dung là một dãy 50 câu; chưa đủ căn cứ tách FE và RE. |
| PRM393-SRC-SU26-B5-FE | PRM393_SU26_B5_FE.md | SU26 / SU26 B5 FE | B5 FE | 50 | Yes | — | Trích xuất từ 50 ảnh chụp đề thi B5 FE SU26. Không có exact file duplicate. |

## File / exam overlap

Không có hai file có tập câu identical. Overlap exact-question giữa các source:

| Exam A | Exam B | Exact questions shared | Jaccard overlap |
|---|---|---:|---:|
| PRM393-EXAM-SP26-FE | PRM393-EXAM-SP26-B5-FE | 2 | 0.021 |
| PRM393-EXAM-SP26-FE | PRM393-EXAM-SU26-FE | 22 | 0.282 |
| PRM393-EXAM-SP26-FE | PRM393-EXAM-SU26-FE-RE | 11 | 0.124 |
| PRM393-EXAM-SP26-FE | PRM393-EXAM-SU26-B5-FE | 14 | 0.163 |
| PRM393-EXAM-SP26-B5-FE | PRM393-EXAM-SU26-FE | 9 | 0.101 |
| PRM393-EXAM-SP26-B5-FE | PRM393-EXAM-SU26-FE-RE | 11 | 0.126 |
| PRM393-EXAM-SP26-B5-FE | PRM393-EXAM-SU26-B5-FE | 12 | 0.140 |
| PRM393-EXAM-SU26-FE | PRM393-EXAM-SU26-FE-RE | 3 | 0.031 |
| PRM393-EXAM-SU26-FE | PRM393-EXAM-SU26-B5-FE | 0 | 0.000 |
| PRM393-EXAM-SU26-FE-RE | PRM393-EXAM-SU26-B5-FE | 21 | 0.266 |

### Duplicate classification

- **Exact file duplicate:** 0.
- **Same exam with different solved copy:** không đủ bằng chứng để kết luận có trường hợp nào.
- **Near-overlap:** nổi bật nhất là PRM393-EXAM-SP26-FE ↔ PRM393-EXAM-SU26-FE (22 câu) và PRM393-EXAM-SU26-FE-RE ↔ PRM393-EXAM-SU26-B5-FE (21 câu trùng). Mọi file đều giữ lại để bảo toàn traceability và frequency.
