# PRM393 Review Issues

Total issues: **9**
Flagged master questions: **7**

> Không tự sửa các issue dưới đây vì corpus hiện tại chưa đủ để xác minh chắc chắn.

## PRM393-ISSUE-0001

- **Question ID:** —
- **Source:** PRM393_SP26_B5_FE.md
- **Problem:** Source has 48 parsed questions.
- **Current answers:** —
- **Reason for flag:** Corpus does not establish whether the original exam truly had 48 questions or whether questions 49–50 are missing.
- **Recommended action:** Keep source canonical as-is; do not invent missing questions. If original paper becomes available, reconcile and append mappings.

---

## PRM393-ISSUE-0002

- **Question ID:** —
- **Source:** PRM393_SU26_FE_RE.md
- **Problem:** Exam identity label is ambiguous.
- **Current answers:** —
- **Reason for flag:** Filename/title says FE-RE, but the source contains one continuous 50-question sequence with no internal FE/RE split marker.
- **Recommended action:** Keep one source/exam ID `PRM393-EXAM-SU26-FE-RE`; split only if a future source proves the boundary/identity.

---

## PRM393-ISSUE-0003

- **Question ID:** `PRM393-Q0002`
- **Source:** PRM393-EXAM-SP26-FE Q2; PRM393-EXAM-SU26-FE Q10
- **Problem:** ambiguous
- **Current answers:** Source answer: C. General-purpose programming with UI focus
- **Reason for flag:** Options B and C overlap semantically: 'User interface development' vs 'General-purpose programming with UI focus'. Source selects C, but wording can support B.
- **Recommended action:** Exclude from clean Exam Mode. Preserve source answer without silently correcting; review against authoritative course material/original exam before promoting to clean.

---

## PRM393-ISSUE-0004

- **Question ID:** `PRM393-Q0051`
- **Source:** PRM393-EXAM-SP26-B5-FE Q1; PRM393-EXAM-SU26-FE Q31
- **Problem:** ambiguous
- **Current answers:** Source answer: B. Guard
- **Reason for flag:** The stem says 'widget pattern', while 'Guard' is not necessarily a widget; option C 'Route protection' also overlaps conceptually with the requested idea.
- **Recommended action:** Exclude from clean Exam Mode. Preserve source answer without silently correcting; review against authoritative course material/original exam before promoting to clean.

---

## PRM393-ISSUE-0005

- **Question ID:** `PRM393-Q0064`
- **Source:** PRM393-EXAM-SP26-B5-FE Q14; PRM393-EXAM-SU26-FE Q40; PRM393-EXAM-SU26-FE-RE Q50
- **Problem:** ambiguous
- **Current answers:** Source answer: C. sqflite
- **Reason for flag:** The option set includes both `sqflite` and `moor`, while the provided corpus only explains why `sqflite` is selected and does not provide enough source evidence to rule out the other database-related option. The exclusivity of the answer therefore cannot be verified from this corpus alone.
- **Recommended action:** Exclude from clean Exam Mode. Preserve source answer without silently correcting; review against authoritative course material/original exam before promoting to clean.

---

## PRM393-ISSUE-0006

- **Question ID:** `PRM393-Q0083`
- **Source:** PRM393-EXAM-SP26-B5-FE Q34; PRM393-EXAM-SU26-B5-FE Q12
- **Problem:** needs_review
- **Current answers:** Source answer: B. RepaintBoundary
- **Reason for flag:** Source explanation describes repaint isolation via RepaintBoundary, while the stem says 'rebuilding'. Repaint and rebuild are different mechanisms, so answer/explanation do not precisely match the wording.
- **Recommended action:** Exclude from clean Exam Mode. Preserve source answer without silently correcting; review against authoritative course material/original exam before promoting to clean.

---

## PRM393-ISSUE-0007

- **Question ID:** `PRM393-Q0046`
- **Source:** PRM393-EXAM-SP26-FE Q46; PRM393-EXAM-SP26-B5-FE Q40; PRM393-EXAM-SU26-FE Q20
- **Problem:** ambiguous
- **Current answers:** Source answer: A. FutureBuilder
- **Reason for flag:** The stem is broad about 'async data from local storage'. The source explanation justifies `FutureBuilder` for Future-returning reads, but the corpus does not establish that every local-storage async flow must use that pattern, so exclusivity is not fully supported by source alone.
- **Recommended action:** Exclude from clean Exam Mode. Preserve source answer without silently correcting; review against authoritative course material/original exam before promoting to clean.

---

## PRM393-ISSUE-0008

- **Question ID:** `PRM393-Q0119`
- **Source:** PRM393-EXAM-SU26-FE-RE Q4; PRM393-EXAM-SU26-B5-FE Q44
- **Problem:** ambiguous
- **Current answers:** Source answer: C. An emulator or physical device
- **Reason for flag:** The source selects emulator/physical device, but the stem is broad enough to include Flutter desktop/web targets on a local machine.
- **Recommended action:** Exclude from clean Exam Mode. Preserve source answer without silently correcting; review against authoritative course material/original exam before promoting to clean.

---

## PRM393-ISSUE-0009

- **Question ID:** `PRM393-Q0127`
- **Source:** PRM393-EXAM-SU26-FE-RE Q16
- **Problem:** ambiguous
- **Current answers:** Source answer: B. Widgets are recreated instead of modified
- **Reason for flag:** The explanation establishes that Widget objects are immutable and recreated; the stem attributes immutability to the widget tree as a whole, which is less precise.
- **Recommended action:** Exclude from clean Exam Mode. Preserve source answer without silently correcting; review against authoritative course material/original exam before promoting to clean.

---
