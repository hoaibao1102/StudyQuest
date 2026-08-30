# ITE302c WEB DATA V0.1

## Subject
- **Name:** Ethics in IT / AI Ethics
- **Code:** ITE302c
- **Dataset version:** V0.1
- **Corpus status:** Snapshot treated as the complete corpus currently available from the user.

## Corpus Summary
- **Source files:** 15 (13 canonical exam files + 2 supplemental study sources)
- **Canonical exams:** 13
- **Total exam question occurrences:** 780
- **Unique master questions after exact deduplication:** 380
- **Clean questions:** 361
- **Ambiguous questions:** 15
- **Needs-review questions:** 4
- **Review issue records:** 26
- **Concepts:** 189
- **Chapters:** 10
- **Generated concept flashcards:** 353
- **Supplemental Quizlet terms:** 309

## Duplicate Policy
- No whole exam file was detected as an exact duplicate of another exam file.
- All 13 exam files are therefore retained as **canonical**.
- Exact question deduplication uses normalized question wording + normalized option text.
- Same concept with different wording remains as separate master questions and is linked through `concept_id`.
- Same question wording with materially different/typo options is **not** forcibly merged; it is recorded in `06_ITE302C_REVIEW_ISSUES.md` when relevant.

## Highest source overlaps (not whole-file duplicates)
- SP25_FE ↔ SU25_RE: 20 exact shared question(s) out of 60.
- SP24_RE ↔ SU24_RE: 16 exact shared question(s) out of 60.
- SP24_RE ↔ FA24_RE: 15 exact shared question(s) out of 60.
- FA24_RE ↔ SU25_RE: 15 exact shared question(s) out of 60.
- SU24_FE ↔ SU25_RE: 14 exact shared question(s) out of 60.
- SU24_RE ↔ FA24_RE: 13 exact shared question(s) out of 60.
- SU24_FE ↔ SP25_RE: 13 exact shared question(s) out of 60.
- SU24_FE ↔ SP25_FE: 12 exact shared question(s) out of 60.
- SP24_RE ↔ SU25_RE: 12 exact shared question(s) out of 60.
- SP24_FE ↔ SP25_RE: 12 exact shared question(s) out of 60.


## File Relationships
```text
01_SOURCE_INDEX
      ↓
07_EXAM_MAP ─────→ 03_MASTER_QUESTIONS
                        ↓
                  02_CONCEPT_MAP
                        ↓
                  04_MASTER_KNOWLEDGE
                        ↓
                  05_FLASHCARDS

06_REVIEW_ISSUES filters ambiguous / needs_review items out of clean Exam Mode.
08_MOCKDATA_SCHEMA defines the MD → JSON → frontend contract.
```

## Recommended MD → JSON → Frontend Pipeline
1. Parse `02_CONCEPT_MAP` into `chapters.json` + `concepts.json`.
2. Parse `04_MASTER_KNOWLEDGE` into `knowledge.json`.
3. Parse only `quality_status = clean` from `03_MASTER_QUESTIONS` for the default exam bank.
4. Parse `05_FLASHCARDS` into `flashcards.json`.
5. Parse `07_EXAM_MAP` into `exams.json` so the original exams can be replayed exactly.
6. Keep user progress in localStorage / IndexedDB; no backend is required.

## Quality Rule
`clean` does **not** mean independently verified against external sources. It means the provided corpus is internally clear enough for use without a detected source conflict. External knowledge was not used to silently override conflicting answers.
