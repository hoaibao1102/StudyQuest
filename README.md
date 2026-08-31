# StudyQuest

Web học và luyện thi trắc nghiệm theo phong cách game vượt ải, chạy frontend-only và local-first.

## Nội dung hiện có

| Môn | Câu unique | Clean |
|---|---:|---:|
| MLN111 | 311 | 297 |
| MLN122 | 435 | 431 |
| ITE302c | 380 | 361 |
| PRM393 | 158 | 151 |
| **Tổng** | **1.284** | **1.240** |

## Tính năng web MVP

- Dashboard bốn thế giới môn học.
- Adventure Map theo chapter/region.
- Vòng lặp `Learn → Challenge → Review`.
- Quiz single/multiple, exact-set scoring và feedback tức thì.
- Hệ thống 1–3 sao, mở khóa ải và lưu progress bằng localStorage.
- Parser build-time chuẩn hóa bốn knowledge base Markdown về canonical JSON.
- Câu `ambiguous`/`needs_review` được giữ trong output nhưng không vào Clean Quiz.
- Responsive desktop/mobile và reduced-motion compatible.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:5173/StudyQuest/`.

## Quality gates

```bash
npm test
npm run typecheck
npm run build
```

`npm run build` tự chạy parser cho cả bốn môn trước khi tạo production bundle.

## Deploy

GitHub Actions tại `.github/workflows/deploy.yml` tự build và deploy lên GitHub Pages khi push vào `master`.

Live URL dự kiến: `https://hoaibao1102.github.io/StudyQuest/`

Nếu Pages chưa được bật, vào **Repository Settings → Pages → Source: GitHub Actions** một lần.

## Kiến trúc dữ liệu

```text
knowledge_base Markdown
  → scripts/parser.mjs
  → scripts/build-data.mjs
  → public/data/{subject}.json
  → React UI / Quiz Engine
  → localStorage progress
```

Chi tiết yêu cầu: [`SRS_StudyQuest_Frontend_MockData.md`](./SRS_StudyQuest_Frontend_MockData.md).
