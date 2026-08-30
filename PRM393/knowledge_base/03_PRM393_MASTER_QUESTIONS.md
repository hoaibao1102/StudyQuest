# PRM393 Master Questions

- Total exact-unique questions: **158**
- Clean: **151**
- Ambiguous / needs_review: **7**

---

## PRM393-Q0001

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-ARCH-CLEAN`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why is clean architecture beneficial?

- A. Fewer files
- B. Easier maintenance and testing
- C. Better UI
- D. Faster builds

**Correct answer:** **B. Easier maintenance and testing**

**Explanation from source:** Clean Architecture phân tách ứng dụng thành các lớp độc lập (Presentation, Domain, Data), giúp mã nguồn giảm bớt sự phụ thuộc chặt chẽ, dễ bảo trì, dễ mở rộng tính năng và rất thuận tiện để viết kiểm thử tự động (Unit Test / Mocking).

**Source knowledge label:** Mobile Software Architecture / Clean Architecture Principles.

**Trap:** Các phương án nhiễu: A. Fewer files; C. Better UI; D. Faster builds

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 1
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 9

---

## PRM393-Q0002

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-ROLE`
- `type`: `single_choice`
- `quality_status`: `ambiguous`
- `difficulty`: `review`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What is Dart primarily designed for in the Flutter ecosystem?

- A. Database management
- B. User interface development
- C. General-purpose programming with UI focus
- D. Network security

**Correct answer:** **C. General-purpose programming with UI focus**

**Explanation from source:** Dart là ngôn ngữ lập trình đa năng (general-purpose), nhưng được Google thiết kế và tối ưu hóa đặc biệt tập trung vào việc xây dựng giao diện người dùng nhanh chóng, mượt mà (hỗ trợ cả JIT cho Hot Reload và AOT cho Native compilation).

**Source knowledge label:** Dart Fundamentals & Flutter Ecosystem.

**Trap:** Các phương án nhiễu: A. Database management; B. User interface development; D. Network security

**Quality note:** Options B and C overlap semantically: 'User interface development' vs 'General-purpose programming with UI focus'. Source selects C, but wording can support B.

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 2
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 10

---

## PRM393-Q0003

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-SECURITY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why is secure authentication critical in mobile apps?

- A. UI quality
- B. Protect user data
- C. Reduce code
- D. Improve speed

**Correct answer:** **B. Protect user data**

**Explanation from source:** Xác thực an toàn (Secure Authentication) là yêu cầu tối quan trọng để bảo vệ dữ liệu cá nhân, thông tin nhạy cảm của người dùng và ngăn chặn các truy cập trái phép vào tài nguyên hệ thống.

**Source knowledge label:** Mobile App Security / Authentication & Authorization.

**Trap:** Các phương án nhiễu: A. UI quality; C. Reduce code; D. Improve speed

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 3
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 28

---

## PRM393-Q0004

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-HTTP-METHODS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which HTTP method is typically used to retrieve data?

- A. POST
- B. PUT
- C. GET
- D. DELETE

**Correct answer:** **C. GET**

**Explanation from source:** Trong giao thức HTTP và chuẩn RESTful API, phương thức `GET` được quy định dùng để yêu cầu và lấy dữ liệu từ server về client mà không làm thay đổi trạng thái của tài nguyên trên server.

**Source knowledge label:** Networking & RESTful APIs / HTTP Methods.

**Trap:** Các phương án nhiễu: A. POST; B. PUT; D. DELETE

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 4
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 28
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 17

---

## PRM393-Q0005

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-NULL-SAFETY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What happens if a non-nullable variable is not initialized in Dart?

- A. The app runs normally
- B. A runtime exception occurs
- C. A compile-time error occurs
- D. The value becomes null automatically

**Correct answer:** **C. A compile-time error occurs**

**Explanation from source:** Với tính năng Sound Null Safety trong Dart, mọi biến non-nullable (không có dấu `?`) bắt buộc phải có giá trị khởi tạo trước khi được sử dụng. Nếu không khởi tạo, trình biên dịch sẽ báo lỗi ngay tại thời điểm biên dịch (Compile-time error).

**Source knowledge label:** Dart Language / Sound Null Safety.

**Trap:** Các phương án nhiễu: A. The app runs normally; B. A runtime exception occurs; D. The value becomes null automatically

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 5
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 14

---

## PRM393-Q0006

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DEPLOYMENT`
- `concept_id`: `PRM393-DEPLOY-BUILD-RELEASE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which command builds a release APK?

- A. flutter run
- B. flutter build apk
- C. flutter doctor
- D. flutter clean

**Correct answer:** **B. flutter build apk**

**Explanation from source:** Lệnh `flutter build apk` (mặc định ở chế độ release) sẽ biên dịch toàn bộ mã nguồn Dart và tài nguyên thành file cài đặt APK tối ưu sẵn sàng để phát hành hoặc cài trực tiếp lên thiết bị Android.

**Source knowledge label:** Flutter CLI Tools & Deployment / Android Release Build.

**Trap:** Các phương án nhiễu: A. flutter run; C. flutter doctor; D. flutter clean

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 6
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 5

---

## PRM393-Q0007

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-STACK`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** Which widget allows overlapping of its child widgets?

- A. Column
- B. Row
- C. Stack
- D. Expanded

**Correct answer:** **C. Stack**

**Explanation from source:** Widget `Stack` cho phép xếp chồng các widget con lên nhau theo trục Z (chiều sâu không gian), định vị vị trí các widget con thông qua widget `Positioned`.

**Source knowledge label:** Flutter UI Layout / Stack & Positioned Widgets.

**Trap:** Các phương án nhiễu: A. Column; B. Row; D. Expanded

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 7

---

## PRM393-Q0008

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-PURPOSE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** Which platforms can Flutter applications target using a single codebase?

- A. Android only
- B. iOS only
- C. Android, iOS, web, and desktop
- D. Web servers only

**Correct answer:** **C. Android, iOS, web, and desktop**

**Explanation from source:** Flutter là framework đa nền tảng thực sự, cho phép lập trình viên chỉ viết một cơ sở mã nguồn duy nhất (single codebase) và biên dịch ra ứng dụng chạy trên Android, iOS, Web, Windows, macOS, Linux.

**Source knowledge label:** Flutter Overview / Multi-platform Architecture.

**Trap:** Các phương án nhiễu: A. Android only; B. iOS only; D. Web servers only

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 8
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 19
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 49

---

## PRM393-Q0009

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-CONSISTENCY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the main risk of improper state management?

- A. UI inconsistency
- B. Longer compile time
- C. Package conflicts
- D. Build errors

**Correct answer:** **A. UI inconsistency**

**Explanation from source:** Quản lý trạng thái không đúng cách dẫn đến rủi ro lớn nhất là giao diện hiển thị không đồng bộ với dữ liệu thực tế (UI Inconsistency / Stale State), dẫn đến các lỗi logic và trải nghiệm người dùng kém.

**Source knowledge label:** State Management Principles / State Synchronization & Consistency.

**Trap:** Các phương án nhiễu: B. Longer compile time; C. Package conflicts; D. Build errors

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 9
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 41

---

## PRM393-Q0010

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-CURVES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** What does CurvedAnimation provide?

- A. Layout control
- B. Animation curve behavior
- C. State updates
- D. Navigation

**Correct answer:** **B. Animation curve behavior**

**Explanation from source:** `CurvedAnimation` trong Flutter dùng để áp dụng một đường cong phi tuyến (Curves như `easeIn`, `easeInOut`, `bounceOut`...) vào một `AnimationController`, tạo ra các hiệu ứng chuyển động tự nhiên và sinh động hơn chuyển động tuyến tính thông thường.

**Source knowledge label:** Flutter Animations / CurvedAnimation & Animation Curves.

**Trap:** Các phương án nhiễu: A. Layout control; C. State updates; D. Navigation

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 10

---

## PRM393-Q0011

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NAVIGATION`
- `concept_id`: `PRM393-NAV-PASS-DATA`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** How can data be passed to a new screen?

- A. Using global variables
- B. Via constructor arguments
- C. Using ThemeData
- D. Using Scaffold

**Correct answer:** **B. Via constructor arguments**

**Explanation from source:** Cách truyền dữ liệu cơ bản, an toàn và trực tiếp nhất giữa các màn hình trong Flutter là truyền qua các tham số của hàm khởi tạo (Constructor arguments) của Widget màn hình mới khi thực hiện `Navigator.push`.

**Source knowledge label:** Flutter Navigation / Parameter Passing between Screens.

**Trap:** Các phương án nhiễu: A. Using global variables; C. Using ThemeData; D. Using Scaffold

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 11
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 40
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 16

---

## PRM393-Q0012

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-JSON-MODELS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** What is the purpose of parsing JSON?

- A. Encrypt data
- B. Convert JSON into Dart objects
- C. Send requests
- D. Cache responses

**Correct answer:** **B. Convert JSON into Dart objects**

**Explanation from source:** JSON Parsing (chuyển đổi chuỗi định dạng JSON nhận từ API thành các đối tượng Dart / Model Classes) giúp chương trình thao tác với dữ liệu có cấu trúc an toàn kiểu (type-safe) thay vì làm việc với các chuỗi thô.

**Source knowledge label:** Data Serialization / JSON Parsing in Dart & Flutter.

**Trap:** Các phương án nhiễu: A. Encrypt data; C. Send requests; D. Cache responses

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 12

---

## PRM393-Q0013

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-SE-SDLC`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** Which phase involves gathering requirements?

- A. Implementation
- B. Design
- C. Analysis
- D. Testing

**Correct answer:** **C. Analysis**

**Explanation from source:** Trong quy trình phát triển phần mềm (SDLC), giai đoạn Phân tích yêu cầu (Requirements Analysis) có nhiệm vụ thu thập, phân tích và làm rõ các nhu cầu của khách hàng/người dùng trước khi bước vào giai đoạn thiết kế và lập trình.

**Source knowledge label:** Software Engineering / SDLC (Software Development Life Cycle).

**Trap:** Các phương án nhiễu: A. Implementation; B. Design; D. Testing

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 13

---

## PRM393-Q0014

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TOOLING`
- `concept_id`: `PRM393-TOOL-DEVTOOLS-NETWORK`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which Flutter tool helps debug network requests?

- A. DevTools
- B. Inspector
- C. Emulator
- D. Hot reload

**Correct answer:** **A. DevTools**

**Explanation from source:** Flutter DevTools tích hợp Network View cho phép lập trình viên theo dõi chi tiết toàn bộ các yêu cầu HTTP/HTTPS, kiểm tra request headers, body, response data, mã trạng thái và thời gian phản hồi.

**Source knowledge label:** Flutter Tooling / DevTools Network Profiling.

**Trap:** Các phương án nhiễu: B. Inspector; C. Emulator; D. Hot reload

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 14
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 18

---

## PRM393-Q0015

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-OOP`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which Dart feature supports object-oriented programming?

- A. Widgets
- B. Classes and objects
- C. Hot reload
- D. Layout builders

**Correct answer:** **B. Classes and objects**

**Explanation from source:** Dart là ngôn ngữ lập trình hướng đối tượng thuần túy; nền tảng cốt lõi của OOP trong Dart được thể hiện qua Khái niệm Lớp (Classes) và Đối tượng (Objects).

**Source knowledge label:** Dart Language / Object-Oriented Programming (OOP).

**Trap:** Các phương án nhiễu: A. Widgets; C. Hot reload; D. Layout builders

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 15
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 1

---

## PRM393-Q0016

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-REBUILD-SCOPE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which approach helps reduce unnecessary widget rebuilds?

- A. Using global variables
- B. Fine-grained state updates
- C. Hot restart
- D. Large widgets

**Correct answer:** **B. Fine-grained state updates**

**Explanation from source:** Cập nhật state ở mức độ chi tiết và cục bộ (Fine-grained state updates, ví dụ sử dụng các builder cục bộ như `ValueListenableBuilder`, `BlocSelector`) giúp giới hạn việc build lại chỉ cho đúng widget cần thay đổi, tránh rebuild toàn bộ màn hình.

**Source knowledge label:** Flutter Performance Optimization / Rebuild Scope & Granular State.

**Trap:** Các phương án nhiễu: A. Using global variables; C. Hot restart; D. Large widgets

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 16
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 43

---

## PRM393-Q0017

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-REACTIVE-BUILD`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** Which action best demonstrates Flutter's reactive UI model?

- A. Manually updating UI elements
- B. Rebuilding UI in response to state changes
- C. Editing layout XML
- D. Calling native APIs

**Correct answer:** **B. Rebuilding UI in response to state changes**

**Explanation from source:** Mô hình Reactive UI (Declarative) của Flutter hoạt động dựa trên nguyên lý: Giao diện là một hàm phản ánh trạng thái ($UI = f(State)$). Khi State thay đổi, Flutter tự động kích hoạt quá trình rebuild lại UI tương ứng.

**Source knowledge label:** Flutter Core Architecture / Declarative & Reactive UI Model.

**Trap:** Các phương án nhiễu: A. Manually updating UI elements; C. Editing layout XML; D. Calling native APIs

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 17

---

## PRM393-Q0018

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-CONST`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Why are const widgets recommended?

- A. They improve readability
- B. They reduce rebuild cost
- C. They add state
- D. They handle navigation

**Correct answer:** **B. They reduce rebuild cost**

**Explanation from source:** Widget khai báo với từ khóa `const` được tạo một lần duy nhất tại compile-time và lưu vào bộ nhớ dùng chung. Khi widget cha rebuild, Flutter sẽ bỏ qua (short-circuit) việc rebuild các const widget con này, giúp tiết kiệm đáng kể chu kỳ CPU.

**Source knowledge label:** Flutter Performance Optimization / `const` Constructor Optimization.

**Trap:** Các phương án nhiễu: A. They improve readability; C. They add state; D. They handle navigation

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 18
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 17
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 50

---

## PRM393-Q0019

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-RESOURCE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Why should animations be disposed properly?

- A. Improve UI
- B. Prevent memory leaks
- C. Speed up builds
- D. Fix layout

**Correct answer:** **B. Prevent memory leaks**

**Explanation from source:** `AnimationController` gắn liền với cơ chế `Ticker` lắng nghe các khung hình của hệ thống. Nếu không gọi phương thức `controller.dispose()` khi widget bị hủy, controller sẽ tiếp tục chạy ngầm, gây rò rỉ bộ nhớ (memory leaks) và tốn pin.

**Source knowledge label:** Flutter Lifecycle / Resource Management & Animation Disposal.

**Trap:** Các phương án nhiễu: A. Improve UI; C. Speed up builds; D. Fix layout

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 19
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 44
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 6

---

## PRM393-Q0020

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-WIDGET`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which Flutter test focuses on UI components?

- A. Unit test
- B. Widget test
- C. Integration test
- D. Load test

**Correct answer:** **B. Widget test**

**Explanation from source:** Widget Test (hay Component Test) tập trung kiểm tra độc lập từng widget/giao diện: cách widget render, hiển thị text/hình ảnh và phản hồi các tương tác người dùng (nhấn nút, vuốt, nhập chữ) trong môi trường test cô lập.

**Source knowledge label:** Testing in Flutter / Widget Testing (`flutter_test`).

**Trap:** Các phương án nhiễu: A. Unit test; C. Integration test; D. Load test

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 20
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 12

---

## PRM393-Q0021

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-ASYNC-IO`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Why should database operations be asynchronous?

- A. Simplify syntax
- B. Avoid blocking UI thread
- C. Reduce code
- D. Improve theme

**Correct answer:** **B. Avoid blocking UI thread**

**Explanation from source:** Các thao tác truy xuất dữ liệu từ ổ đĩa (I/O) thường tốn thời gian. Chạy bất đồng bộ (Asynchronous với `Future`/`async-await`) giúp không chặn UI Thread (Main Isolate), giữ cho giao diện luôn mượt mà ở 60/120 FPS mà không bị đơ giật.

**Source knowledge label:** Concurrency & Asynchronous Programming / Non-blocking UI Thread.

**Trap:** Các phương án nhiễu: A. Simplify syntax; C. Reduce code; D. Improve theme

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 21
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 37
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 9

---

## PRM393-Q0022

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-CH13-PLUS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** Why is Chapter 13 considered optional (Plus)?

- A. It replaces core concepts
- B. Apps can work without deep optimization
- C. It manages navigation
- D. It handles authentication

**Correct answer:** **B. Apps can work without deep optimization**

**Explanation from source:** Trong chương trình môn học PRM393, Chương 13 (Tối ưu hóa hiệu năng nâng cao & Profiling) được xếp vào phần mở rộng (Plus) vì các ứng dụng thông thường vẫn có thể hoạt động đầy đủ chức năng cơ bản mà không nhất thiết phải áp dụng các kỹ thuật tối ưu hóa quá chuyên sâu.

**Source knowledge label:** PRM393 Course Curriculum / Mobile App Performance Optimization.

**Trap:** Các phương án nhiễu: A. It replaces core concepts; C. It manages navigation; D. It handles authentication

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 22

---

## PRM393-Q0023

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-THEME`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** Which widget applies a theme to an entire Flutter application?

- A. Scaffold
- B. Theme
- C. MaterialApp
- D. Container

**Correct answer:** **C. MaterialApp**

**Explanation from source:** Widget gốc `MaterialApp` nhận thuộc tính `theme` và `darkTheme` để áp dụng cấu hình `ThemeData` (màu sắc, typography, kiểu widget...) cho toàn bộ ứng dụng.

**Source knowledge label:** Flutter UI Design / Theming & `MaterialApp`.

**Trap:** Các phương án nhiễu: A. Scaffold; B. Theme; D. Container

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 23

---

## PRM393-Q0024

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-SLIVERS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SP26-FE`

**Question:** What is the purpose of SliverAppBar?

- A. Static app bar
- B. Scrollable flexible app bar
- C. Bottom navigation
- D. Drawer control

**Correct answer:** **B. Scrollable flexible app bar**

**Explanation from source:** `SliverAppBar` là thanh tiêu đề ứng dụng linh hoạt có thể cuộn, co giãn (expand/collapse) mượt mà cùng danh sách khi cuộn bên trong `CustomScrollView`.

**Source knowledge label:** Flutter UI / Slivers & `SliverAppBar`.

**Trap:** Các phương án nhiễu: A. Static app bar; C. Bottom navigation; D. Drawer control

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 24
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 18

---

## PRM393-Q0025

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-SIZEDBOX`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** Which widget is best used to add fixed empty space?

- A. Padding
- B. Expanded
- C. SizedBox
- D. Container

**Correct answer:** **C. SizedBox**

**Explanation from source:** `SizedBox` là widget nhẹ và tối ưu nhất để tạo khoảng trống cố định (về chiều rộng hoặc chiều cao) giữa các widget con trong `Column` hoặc `Row`.

**Source knowledge label:** Flutter UI Layout / Spacing & `SizedBox`.

**Trap:** Các phương án nhiễu: A. Padding; B. Expanded; D. Container

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 25
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 45

---

## PRM393-Q0026

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-BASICS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which package supports BLoC architecture?

- A. provider
- B. flutter_bloc
- C. sqflite
- D. http

**Correct answer:** **B. flutter_bloc**

**Explanation from source:** Package `flutter_bloc` cung cấp các công cụ và widget chuyên dụng (`BlocProvider`, `BlocBuilder`, `BlocListener`, `BlocConsumer`) để hiện thực hóa kiến trúc quản lý trạng thái BLoC và Cubit trong Flutter.

**Source knowledge label:** State Management / `flutter_bloc` package.

**Trap:** Các phương án nhiễu: A. provider; C. sqflite; D. http

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 26
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 7

---

## PRM393-Q0027

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-STREAM`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which Flutter widget reacts to authentication state changes?

- A. FutureBuilder
- B. StreamBuilder
- C. ListView
- D. Form

**Correct answer:** **B. StreamBuilder**

**Explanation from source:** Trạng thái xác thực đăng nhập thường được lắng nghe qua một luồng dữ liệu liên tục (`Stream`). `StreamBuilder` là widget chuyên dụng giúp tự động lắng nghe luồng này và render lại giao diện phù hợp (Login Screen hoặc Home Screen) mỗi khi có sự kiện Auth mới.

**Source knowledge label:** Asynchronous UI Programming / `StreamBuilder` & Auth State Flow.

**Trap:** Các phương án nhiễu: A. FutureBuilder; C. ListView; D. Form

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 27
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 46

---

## PRM393-Q0028

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-ARCH-TECH-DEBT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** What is technical debt?

- A. UI lag
- B. Future cost of poor design decisions
- C. Memory usage
- D. API limit

**Correct answer:** **B. Future cost of poor design decisions**

**Explanation from source:** Nợ kỹ thuật (Technical Debt) là chi phí phát sinh trong tương lai (tốn thêm thời gian bảo trì, sửa lỗi, khó mở rộng) khi lập trình viên lựa chọn các giải pháp tạm bợ, thiết kế kém chất lượng hoặc bỏ qua kiến trúc chuẩn để kịp tiến độ ngắn hạn.

**Source knowledge label:** Software Engineering / Software Quality & Technical Debt.

**Trap:** Các phương án nhiễu: A. UI lag; C. Memory usage; D. API limit

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 28

---

## PRM393-Q0029

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-IMPLICIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is implicit animation?

- A. Manual animation control
- B. Animation without controller
- C. API animation
- D. Navigation animation

**Correct answer:** **B. Animation without controller**

**Explanation from source:** Implicit Animations (như `AnimatedContainer`, `AnimatedOpacity`, `AnimatedPadding`) là các widget hoạt ảnh tự động nội suy giữa các giá trị khi thuộc tính thay đổi mà lập trình viên không cần phải tự tạo và điều khiển `AnimationController`.

**Source knowledge label:** Flutter Animations / Implicit Animations.

**Trap:** Các phương án nhiễu: A. Manual animation control; C. API animation; D. Navigation animation

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 29
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 18

---

## PRM393-Q0030

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-LIST`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which Dart data structure is best suited for storing an ordered collection of items?

- A. Set
- B. Map
- C. List
- D. Queue

**Correct answer:** **C. List**

**Explanation from source:** `List` trong Dart là một tập hợp các phần tử có thứ tự tuần tự (ordered collection), cho phép truy xuất các phần tử nhanh chóng qua chỉ số vị trí (index).

**Source knowledge label:** Dart Fundamentals / Collections (`List`).

**Trap:** Các phương án nhiễu: A. Set; B. Map; D. Queue

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 30
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 45

---

## PRM393-Q0031

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-REACTIVE-BUILD`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** Which Flutter concept supports reactive UI updates?

- A. Manual refresh
- B. Widget rebuilding
- C. Hot restart
- D. Native callbacks

**Correct answer:** **B. Widget rebuilding**

**Explanation from source:** Trong mô hình Declarative/Reactive của Flutter, việc cập nhật lại giao diện khi có dữ liệu mới được thực hiện thông qua cơ chế Rebuild lại cây widget tương ứng.

**Source knowledge label:** Flutter Fundamentals / Declarative & Reactive UI Rendering.

**Trap:** Các phương án nhiễu: A. Manual refresh; C. Hot restart; D. Native callbacks

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 31

---

## PRM393-Q0032

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-UNIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** Which type of test checks individual functions or classes?

- A. Widget test
- B. Integration test
- C. Unit test
- D. System test

**Correct answer:** **C. Unit test**

**Explanation from source:** Unit Test (Kiểm thử đơn vị) tập trung kiểm tra tính đúng đắn của từng hàm, phương thức hoặc class riêng lẻ một cách độc lập và nhanh chóng.

**Source knowledge label:** Software Testing / Unit Testing.

**Trap:** Các phương án nhiễu: A. Widget test; B. Integration test; D. System test

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 32

---

## PRM393-Q0033

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-EVENT-STATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the role of events in BLoC?

- A. Store UI
- B. Trigger state changes
- C. Render widgets
- D. Handle layout

**Correct answer:** **B. Trigger state changes**

**Explanation from source:** Trong mô hình BLoC, Events đóng vai trò là đầu vào (Input) từ UI hoặc hệ thống, gửi đến BLoC để kích hoạt logic xử lý và tạo ra các States mới.

**Source knowledge label:** State Management / BLoC Pattern (Events & States).

**Trap:** Các phương án nhiễu: A. Store UI; C. Render widgets; D. Handle layout

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 33
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 8

---

## PRM393-Q0034

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TOOLING`
- `concept_id`: `PRM393-TOOL-HOT-RELOAD`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the main purpose of hot reload in Flutter?

- A. Improve runtime performance
- B. Instantly reflect code changes in UI
- C. Publish apps faster
- D. Reduce memory usage

**Correct answer:** **B. Instantly reflect code changes in UI**

**Explanation from source:** Hot Reload giúp tải mã nguồn mới vào máy ảo Dart đang chạy và hiển thị ngay lập tức các thay đổi lên màn hình mà vẫn bảo toàn trạng thái ứng dụng, giúp tăng tốc độ phát triển.

**Source knowledge label:** Flutter Developer Tools / Hot Reload & Development Workflow.

**Trap:** Các phương án nhiễu: A. Improve runtime performance; C. Publish apps faster; D. Reduce memory usage

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 34
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 36
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 26

---

## PRM393-Q0035

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-FORMS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why are forms important in mobile applications?

- A. UI decoration
- B. User data collection
- C. State management
- D. Navigation

**Correct answer:** **B. User data collection**

**Explanation from source:** Biểu mẫu (Forms) là công cụ chính để thu thập dữ liệu nhập vào từ người dùng (như tài khoản, mật khẩu, phản hồi, biểu mẫu khảo sát) và hỗ trợ kiểm tra tính hợp lệ của dữ liệu (validation).

**Source knowledge label:** Flutter UI & Forms / Form Handling & Data Collection.

**Trap:** Các phương án nhiễu: A. UI decoration; C. State management; D. Navigation

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 35
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 39

---

## PRM393-Q0036

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-SHARED-PREFERENCES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which method retrieves data from SharedPreferences?

- A. get()
- B. read()
- C. fetch()
- D. load()

**Correct answer:** **A. get()**

**Explanation from source:** Trong package `shared_preferences`, các phương thức dùng để đọc dữ liệu đã lưu đều sử dụng họ hàm `get()` (như `get()`, `getString()`, `getBool()`, `getInt()`...).

**Source knowledge label:** Data Persistence / `shared_preferences` API.

**Trap:** Các phương án nhiễu: B. read(); C. fetch(); D. load()

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 36
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 2

---

## PRM393-Q0037

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-COMPOSITION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What is the main benefit of Flutter's widget-based architecture?

- A. Widgets are only used for layout design
- B. Widgets allow code reuse across platforms
- C. Widgets automatically manage databases
- D. Widgets replace backend services

**Correct answer:** **B. Widgets allow code reuse across platforms**

**Explanation from source:** Kiến trúc xây dựng trên Widget của Flutter cho phép tái sử dụng tối đa mã nguồn giao diện trên nhiều nền tảng khác nhau mà vẫn đảm bảo tính nhất quán và hiệu năng cao.

**Source knowledge label:** Flutter Architecture / Widget Reusability.

**Trap:** Các phương án nhiễu: A. Widgets are only used for layout design; C. Widgets automatically manage databases; D. Widgets replace backend services

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 37
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 44

---

## PRM393-Q0038

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-WIDGET-TREE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why are widgets lightweight in Flutter?

- A. They manage system resources
- B. They are immutable descriptions
- C. They store UI state
- D. They handle rendering directly

**Correct answer:** **B. They are immutable descriptions**

**Explanation from source:** Widget trong Flutter chỉ là các đối tượng mô tả cấu hình bất biến (immutable descriptions). Chúng không trực tiếp vẽ hay nắm giữ tài nguyên hệ điều hành nặng nề, do đó việc khởi tạo và hủy widget rất nhẹ và nhanh.

**Source knowledge label:** Flutter Architecture / Widget Tree & Immutability.

**Trap:** Các phương án nhiễu: A. They manage system resources; C. They store UI state; D. They handle rendering directly

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 38
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 21

---

## PRM393-Q0039

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-CENTRALIZED-STATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Why should authentication state be centralized?

- A. Reduce UI code
- B. Ensure consistent access control
- C. Improve animations
- D. Simplify layout

**Correct answer:** **B. Ensure consistent access control**

**Explanation from source:** Quản lý trạng thái xác thực tại một nơi tập trung (Centralized Auth State) giúp kiểm soát quyền truy cập đồng bộ và nhất quán trên toàn bộ ứng dụng, tránh tình trạng rò rỉ quyền hoặc không đồng nhất giữa các màn hình.

**Source knowledge label:** Mobile App Security & State Management / Centralized Authentication.

**Trap:** Các phương án nhiễu: A. Reduce UI code; C. Improve animations; D. Simplify layout

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 39
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 29
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 48

---

## PRM393-Q0040

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-TEXT-INPUT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** Which widget can hide user input text when configured for password entry?

- A. TextField
- B. ObscureText
- C. SecureInput
- D. PasswordField

**Correct answer:** **A. TextField**

**Explanation from source:** `TextField` (hoặc `TextFormField`) khi được cấu hình thuộc tính `obscureText: true` sẽ tự động ẩn các ký tự người dùng nhập vào thành dấu chấm tròn để bảo mật mật khẩu.

**Source knowledge label:** Flutter UI Components / Form Inputs (`TextField` & `obscureText`).

**Trap:** Các phương án nhiễu: B. ObscureText; C. SecureInput; D. PasswordField

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 40
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 25

---

## PRM393-Q0041

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-PURPOSE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What is Flutter primarily used for?

- A. Designing databases for mobile apps
- B. Creating native applications from a single codebase
- C. Developing server-side applications only
- D. Building operating systems for mobile devices

**Correct answer:** **B. Creating native applications from a single codebase**

**Explanation from source:** Flutter là UI toolkit của Google chuyên dùng để xây dựng các ứng dụng native đa nền tảng (Mobile, Web, Desktop) từ một cơ sở mã nguồn duy nhất.

**Source knowledge label:** Flutter Overview & Platform Capabilities.

**Trap:** Các phương án nhiễu: A. Designing databases for mobile apps; C. Developing server-side applications only; D. Building operating systems for mobile devices

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 41
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 3

---

## PRM393-Q0042

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-FORMS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which method resets all form fields?

- A. clear()
- B. reset()
- C. dispose()
- D. remove()

**Correct answer:** **B. reset()**

**Explanation from source:** Phương thức `reset()` của `FormState` (gọi thông qua `_formKey.currentState?.reset()`) dùng để khôi phục toàn bộ các trường nhập liệu trong Form về lại giá trị ban đầu và xóa bỏ các thông báo lỗi kiểm tra.

**Source knowledge label:** Flutter Forms / FormState Methods (`reset`).

**Trap:** Các phương án nhiễu: A. clear(); C. dispose(); D. remove()

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 42
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 27

---

## PRM393-Q0043

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-CONST-FINAL`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which Dart keyword is used to define a constant value at compile time?

- A. final
- B. static
- C. const
- D. var

**Correct answer:** **C. const**

**Explanation from source:** Từ khóa `const` trong Dart dùng để định nghĩa các hằng số có giá trị cố định được xác định ngay tại thời điểm biên dịch (compile-time constant).

**Source knowledge label:** Dart Fundamentals / Variables & Constants (`const`).

**Trap:** Các phương án nhiễu: A. final; B. static; D. var

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 43
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 30
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 45

---

## PRM393-Q0044

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-SESSION-TOKEN`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What happens after successful login?

- A. App closes
- B. User session starts
- C. Theme changes
- D. Navigation resets

**Correct answer:** **B. User session starts**

**Explanation from source:** Sau khi xác thực đăng nhập thành công, hệ thống sẽ khởi tạo phiên làm việc của người dùng (User session starts), lưu token và cho phép người dùng truy cập các tính năng được bảo vệ.

**Source knowledge label:** Authentication & Session Management.

**Trap:** Các phương án nhiễu: A. App closes; C. Theme changes; D. Navigation resets

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 44
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 6

---

## PRM393-Q0045

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TOOLING`
- `concept_id`: `PRM393-TOOL-SDK-SETUP`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which step is required before running a Flutter app for the first time?

- A. Publishing the app
- B. Setting up the Flutter SDK
- C. Configuring a database
- D. Writing backend APIs

**Correct answer:** **B. Setting up the Flutter SDK**

**Explanation from source:** Để có thể biên dịch và chạy một ứng dụng Flutter lần đầu tiên, lập trình viên bắt buộc phải cài đặt và cấu hình Flutter SDK trên máy tính.

**Source knowledge label:** Flutter Environment Setup / SDK Installation.

**Trap:** Các phương án nhiễu: A. Publishing the app; C. Configuring a database; D. Writing backend APIs

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 45
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 49

---

## PRM393-Q0046

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-FUTUREBUILDER`
- `type`: `single_choice`
- `quality_status`: `ambiguous`
- `difficulty`: `review`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which widget reacts to async data from local storage?

- A. FutureBuilder
- B. StreamBuilder
- C. ListView
- D. Provider

**Correct answer:** **A. FutureBuilder**

**Explanation from source:** Việc truy xuất dữ liệu từ bộ nhớ cục bộ (như SQLite, SharedPreferences) là các thao tác bất đồng bộ trả về `Future`. `FutureBuilder` là widget được thiết kế để lắng nghe `Future` này và dựng UI tương ứng với trạng thái dữ liệu.

**Source knowledge label:** Asynchronous UI & Data Storage / `FutureBuilder`.

**Trap:** Các phương án nhiễu: B. StreamBuilder; C. ListView; D. Provider

**Quality note:** The stem is broad: local data can be exposed through Future, Stream, or other state mechanisms. Source selects FutureBuilder based on Future-returning reads.

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 46
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 40
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 20

---

## PRM393-Q0047

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-GOLDEN`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What does golden testing verify?

- A. API responses
- B. UI appearance consistency
- C. Database state
- D. Authentication

**Correct answer:** **B. UI appearance consistency**

**Explanation from source:** Golden Test (kiểm thử giao diện với hình ảnh mẫu chuẩn) kiểm tra tính nhất quán trực quan của giao diện bằng cách so sánh pixel-by-pixel giữa widget được render và hình ảnh mẫu (golden file) để phát hiện các lỗi vỡ giao diện.

**Source knowledge label:** Flutter Testing / Golden Image Testing.

**Trap:** Các phương án nhiễu: A. API responses; C. Database state; D. Authentication

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 47
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 17

---

## PRM393-Q0048

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-LOCALITY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why should state be kept as local as possible?

- A. Better animations
- B. Reduce unnecessary rebuilds
- C. Simplify UI
- D. Improve navigation

**Correct answer:** **B. Reduce unnecessary rebuilds**

**Explanation from source:** Giữ state ở phạm vi cục bộ gần nhất với widget cần nó giúp hạn chế phạm vi lan truyền việc rebuild, ngăn không cho các widget cha hoặc các widget không liên quan phải render lại lãng phí tài nguyên.

**Source knowledge label:** State Management Principles / Local State vs Global State.

**Trap:** Các phương án nhiễu: A. Better animations; C. Simplify UI; D. Improve navigation

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 48
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 4

---

## PRM393-Q0049

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-COMPOSITION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-FE`

**Question:** What is the benefit of composing widgets in Flutter?

- A. Faster compilation
- B. Better code reuse and UI consistency
- C. Reduced memory usage
- D. Automatic navigation

**Correct answer:** **B. Better code reuse and UI consistency**

**Explanation from source:** Nguyên lý Composition (kết hợp các widget nhỏ đơn nhiệm thành các widget lớn hơn) giúp tăng khả năng tái sử dụng mã nguồn và đảm bảo sự nhất quán trong thiết kế giao diện ứng dụng.

**Source knowledge label:** Flutter UI Architecture / Widget Composition.

**Trap:** Các phương án nhiễu: A. Faster compilation; C. Reduced memory usage; D. Automatic navigation

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 49

---

## PRM393-Q0050

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-HTTP-STATUS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which status code indicates server error?

- A. 200
- B. 301
- C. 404
- D. 500

**Correct answer:** **D. 500**

**Explanation from source:** Mã trạng thái HTTP trong dải 5xx (như 500 Internal Server Error) chỉ ra rằng yêu cầu gửi lên hợp lệ nhưng máy chủ đã gặp lỗi nội bộ khi xử lý yêu cầu đó.

**Source knowledge label:** Networking Protocols / HTTP Status Codes.

**Trap:** Các phương án nhiễu: A. 200; B. 301; C. 404

**Source occurrences:**
- `PRM393-EXAM-SP26-FE` → `PRM393_SP26_FE.md` → Câu 50
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 47

---

## PRM393-Q0051

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-ROUTE-GUARD`
- `type`: `single_choice`
- `quality_status`: `ambiguous`
- `difficulty`: `review`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which widget pattern protects authenticated routes?

- A. Navigator
- B. Guard
- C. Route protection
- D. Middleware

**Correct answer:** **B. Guard**

**Explanation from source:** Pattern "Route Guard" (hoặc Guard) là mô hình thiết kế dùng để kiểm tra điều kiện (như trạng thái xác thực/đăng nhập của người dùng) trước khi cho phép điều hướng và hiển thị màn hình đích. Nếu chưa xác thực, Guard sẽ chuyển hướng người dùng về trang đăng nhập.

**Source knowledge label:** Routing & Navigation / Authentication & Route Guards trong Flutter.

**Trap:** Các phương án nhiễu: A. Navigator; C. Route protection; D. Middleware

**Quality note:** The stem says 'widget pattern', while 'Guard' is not necessarily a widget; option C 'Route protection' also overlaps conceptually with the requested idea.

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 1
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 31

---

## PRM393-Q0052

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-ISOLATION-REFACTOR`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Why are tests important for refactoring?

- A. Reduce UI work
- B. Ensure changes don't break functionality
- C. Improve animations
- D. Change layout

**Correct answer:** **B. Ensure changes don't break functionality**

**Explanation from source:** Khi tái cấu trúc mã nguồn (refactoring), cấu trúc code bên trong thay đổi nhưng hành vi bên ngoài phải được giữ nguyên. Bộ kiểm thử tự động (Unit/Widget/Integration Tests) giúp phát hiện sớm các lỗi hồi quy (regression bugs), đảm bảo các thay đổi không làm hỏng tính năng sẵn có.

**Source knowledge label:** Software Testing / Best Practices in Refactoring.

**Trap:** Các phương án nhiễu: A. Reduce UI work; C. Improve animations; D. Change layout

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 2

---

## PRM393-Q0053

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-BUILDCONTEXT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the role of BuildContext in Flutter?

- A. Store application data
- B. Locate widgets in the widget tree
- C. Manage navigation history
- D. Render UI pixels

**Correct answer:** **B. Locate widgets in the widget tree**

**Explanation from source:** `BuildContext` là một đối tượng đại diện cho vị trí (handle) của một widget cụ thể bên trong cây widget (widget tree). Nó cho phép widget tương tác với các widget tổ tiên (ancestor widgets) như `Theme.of(context)`, `Navigator.of(context)`, `MediaQuery.of(context)`.

**Source knowledge label:** Flutter Core Fundamentals / Widget Tree & BuildContext.

**Trap:** Các phương án nhiễu: A. Store application data; C. Manage navigation history; D. Render UI pixels

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 3
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 30

---

## PRM393-Q0054

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-FRAMEWORK`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What role does the Flutter framework play in application development?

- A. It manages database servers
- B. It provides UI components and rendering logic
- C. It replaces the operating system
- D. It runs backend business logic

**Correct answer:** **B. It provides UI components and rendering logic**

**Explanation from source:** Flutter là một UI toolkit đa nền tảng, cung cấp tập hợp các widget giao diện dựng sẵn (Material Design, Cupertino) cùng với engine/pipeline vẽ đồ họa và logic render độc lập với hệ điều hành gốc.

**Source knowledge label:** Flutter Architecture & Overview.

**Trap:** Các phương án nhiễu: A. It manages database servers; C. It replaces the operating system; D. It runs backend business logic

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 4
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 41
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 20

---

## PRM393-Q0055

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-WIDGET-TREE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** How is the Flutter UI constructed internally?

- A. Using XML layout files
- B. Using HTML and CSS
- C. Using a hierarchical widget tree
- D. Using native UI components only

**Correct answer:** **C. Using a hierarchical widget tree**

**Explanation from source:** Giao diện Flutter được xây dựng hoàn toàn bằng ngôn ngữ Dart dưới dạng một cây widget có cấu trúc phân cấp (hierarchical widget tree), trong đó các widget cha lồng các widget con.

**Source knowledge label:** Flutter UI Architecture / Widget Tree Structure.

**Trap:** Các phương án nhiễu: A. Using XML layout files; B. Using HTML and CSS; D. Using native UI components only

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 5

---

## PRM393-Q0056

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-SLIVERS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which widget enables custom scroll effects in Flutter?

- A. ListView
- B. SingleChildScrollView
- C. CustomScrollView
- D. Column

**Correct answer:** **C. CustomScrollView**

**Explanation from source:** `CustomScrollView` cho phép kết hợp trực tiếp nhiều thành phần cuộn dạng `Sliver` (như `SliverAppBar`, `SliverList`, `SliverGrid`) để tạo ra các hiệu ứng cuộn tùy biến phức tạp và mượt mà.

**Source knowledge label:** Flutter UI & Scrolling / CustomScrollView & Slivers.

**Trap:** Các phương án nhiễu: A. ListView; B. SingleChildScrollView; D. Column

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 6
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 4

---

## PRM393-Q0057

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-REBUILD-SCOPE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which practice improves rendering performance?

- A. Large widget trees
- B. Splitting widgets
- C. Global state
- D. Frequent rebuilds

**Correct answer:** **B. Splitting widgets**

**Explanation from source:** Tách nhỏ các widget phức tạp thành các widget riêng biệt (extract widget) giúp Flutter giới hạn phạm vi rebuild (rebuild scope) chỉ ở những phần thực sự có thay đổi state, từ đó cải thiện đáng kể hiệu năng render.

**Source knowledge label:** Flutter Performance Optimization / Widget Tree Refactoring.

**Trap:** Các phương án nhiễu: A. Large widget trees; C. Global state; D. Frequent rebuilds

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 7

---

## PRM393-Q0058

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-INTEGRATION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What does an integration test verify?

- A. Single function
- B. Widget rendering
- C. End-to-end app behavior
- D. Theme consistency

**Correct answer:** **C. End-to-end app behavior**

**Explanation from source:** Kiểm thử tích hợp (Integration Test) kiểm tra toàn bộ luồng hành vi từ đầu đến cuối (End-to-End) của ứng dụng hoặc sự kết hợp tương tác giữa nhiều hệ thống/màn hình trên thiết bị thật hoặc giả lập.

**Source knowledge label:** Testing in Flutter / Integration & E2E Testing.

**Trap:** Các phương án nhiễu: A. Single function; B. Widget rendering; D. Theme consistency

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 8
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 14

---

## PRM393-Q0059

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-ARCH-SEPARATION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why is separating UI and state logic recommended?

- A. Reduce code size
- B. Improve maintainability
- C. Faster execution
- D. Better animations

**Correct answer:** **B. Improve maintainability**

**Explanation from source:** Phân tách rõ ràng giữa tầng giao diện (UI) và tầng quản lý trạng thái/logic nghiệp vụ (State/Business Logic) tuân thủ nguyên lý Separation of Concerns, giúp mã nguồn dễ đọc, dễ bảo trì, dễ mở rộng và thuận tiện cho việc viết unit test.

**Source knowledge label:** Software Architecture & State Management Principles.

**Trap:** Các phương án nhiễu: A. Reduce code size; C. Faster execution; D. Better animations

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 9
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 15

---

## PRM393-Q0060

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-REACTIVE-BUILD`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** When does Flutter rebuild the widget tree?

- A. On every frame
- B. When state changes
- C. Only when app restarts
- D. Only during hot restart

**Correct answer:** **B. When state changes**

**Explanation from source:** Flutter là declarative framework; nó chỉ gọi lại phương thức `build()` và cập nhật lại cây widget khi trạng thái dữ liệu (state) thay đổi (ví dụ khi gọi `setState()`, nhận state mới từ BLoC/Provider, hoặc các dependencies thay đổi).

**Source knowledge label:** Flutter Fundamentals / Reactive Lifecycle & State Changes.

**Trap:** Các phương án nhiễu: A. On every frame; C. Only when app restarts; D. Only during hot restart

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 10
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 40

---

## PRM393-Q0061

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-EVENT-STATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which concept does BLoC heavily rely on?

- A. Future
- B. Stream
- C. Animation
- D. Theme

**Correct answer:** **B. Stream**

**Explanation from source:** BLoC (Business Logic Component) được xây dựng dựa trên nền tảng Reactive Programming và cơ chế `Stream` trong Dart để nhận luồng Events đầu vào và phát ra luồng States đầu ra liên tục theo thời gian thực.

**Source knowledge label:** State Management / BLoC Pattern & Dart Streams.

**Trap:** Các phương án nhiễu: A. Future; C. Animation; D. Theme

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 11

---

## PRM393-Q0062

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-SE-VERSION-CONTROL`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Why is version control critical?

- A. UI changes
- B. Track and manage code changes
- C. Improve animations
- D. Store data

**Correct answer:** **B. Track and manage code changes**

**Explanation from source:** Hệ thống quản lý phiên bản (như Git) đóng vai trò then chốt trong việc theo dõi lịch sử chỉnh sửa mã nguồn, quản lý các nhánh phát triển, hỗ trợ làm việc nhóm và rollback khi gặp sự cố.

**Source knowledge label:** Software Engineering / Version Control Systems (VCS / Git).

**Trap:** Các phương án nhiễu: A. UI changes; C. Improve animations; D. Store data

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 12

---

## PRM393-Q0063

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-IMMUTABILITY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why is immutability important in BLoC states?

- A. UI speed
- B. Predictable state changes
- C. Memory usage
- D. Theme control

**Correct answer:** **B. Predictable state changes**

**Explanation from source:** Tính bất biến (Immutability) đảm bảo rằng mỗi state phát ra là một bản chụp (snapshot) dữ liệu cố định không thể bị biến đổi ngầm, giúp luồng dữ liệu trở nên nhất quán, dễ dự đoán hành vi ứng dụng và dễ dàng so sánh sự thay đổi state (`==`).

**Source knowledge label:** State Management / BLoC Architecture & Immutability.

**Trap:** Các phương án nhiễu: A. UI speed; C. Memory usage; D. Theme control

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 13
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 34

---

## PRM393-Q0064

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-SQLITE`
- `type`: `single_choice`
- `quality_status`: `ambiguous`
- `difficulty`: `review`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** Which Flutter plugin provides SQLite support?

- A. hive
- B. moor
- C. sqflite
- D. shared_preferences

**Correct answer:** **C. sqflite**

**Explanation from source:** `sqflite` là plugin chính thức và thông dụng nhất trong hệ sinh thái Flutter dùng để thao tác với cơ sở dữ liệu quan hệ cục bộ SQLite (hỗ trợ CRUD, transaction, schema migration).

**Source knowledge label:** Local Data Persistence / SQLite & `sqflite` package.

**Trap:** Các phương án nhiễu: A. hive; B. moor; D. shared_preferences

**Quality note:** Both sqflite and moor (now Drift) can provide SQLite-backed persistence. Source selects sqflite, but option set permits more than one technically plausible answer.

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 14
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 40
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 50

---

## PRM393-Q0065

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-MAP`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** What is the main benefit of using Maps in Dart?

- A. Storing values without keys
- B. Storing key-value pairs
- C. Rendering UI components
- D. Managing asynchronous tasks

**Correct answer:** **B. Storing key-value pairs**

**Explanation from source:** `Map` trong Dart là tập hợp lưu trữ dữ liệu có cấu trúc theo cặp khóa - giá trị (key-value), cho phép truy xuất, cập nhật giá trị nhanh chóng thông qua khóa (key) tương ứng.

**Source knowledge label:** Dart Core / Collections (Map, List, Set).

**Trap:** Các phương án nhiễu: A. Storing values without keys; C. Rendering UI components; D. Managing asynchronous tasks

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 15
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 42

---

## PRM393-Q0066

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-PROFILING`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which tool helps analyze UI performance in Flutter?

- A. Inspector
- B. DevTools
- C. Emulator
- D. Hot reload

**Correct answer:** **B. DevTools**

**Explanation from source:** Flutter DevTools là bộ công cụ hoàn chỉnh chạy trên trình duyệt cung cấp các công cụ phân tích hiệu năng chuyên sâu như Timeline, CPU Profiler, Memory Profiler, Network Inspector và Performance View (đo khung hình 60/120 fps, phát hiện jank).

**Source knowledge label:** Tooling & Diagnostics / Flutter DevTools & Performance Profiling.

**Trap:** Các phương án nhiễu: A. Inspector; C. Emulator; D. Hot reload

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 16

---

## PRM393-Q0067

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-OOP`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What does a Dart class primarily represent?

- A. A UI widget only
- B. A blueprint for creating objects
- C. A database table
- D. A network request

**Correct answer:** **B. A blueprint for creating objects**

**Explanation from source:** Trong lập trình hướng đối tượng (OOP) và Dart, Class là bản thiết kế/khuôn mẫu định nghĩa các thuộc tính (fields/properties) và hành vi (methods) để từ đó khởi tạo ra các đối tượng (objects/instances).

**Source knowledge label:** Dart OOP Fundamentals / Classes and Objects.

**Trap:** Các phương án nhiễu: A. A UI widget only; C. A database table; D. A network request

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 17
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 1
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 28

---

## PRM393-Q0068

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-HIVE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is Hive mainly used for?

- A. Remote database
- B. Lightweight local NoSQL storage
- C. State management
- D. Routing

**Correct answer:** **B. Lightweight local NoSQL storage**

**Explanation from source:** `Hive` là cơ sở dữ liệu key-value NoSQL cục bộ nhẹ, hiệu năng cao, thuần Dart (không cần native dependencies), rất phổ biến để lưu trữ dữ liệu offline, cache và cấu hình ứng dụng.

**Source knowledge label:** Local Storage & Data Persistence / NoSQL Database with Hive.

**Trap:** Các phương án nhiễu: A. Remote database; C. State management; D. Routing

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 19
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 32

---

## PRM393-Q0069

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-AUTH-HEADER`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Which HTTP header is commonly used for authorization?

- A. Content-Type
- B. Accept
- C. Authorization
- D. Cache-Control

**Correct answer:** **C. Authorization**

**Explanation from source:** Header `Authorization` được sử dụng trong các yêu cầu HTTP để truyền thông tin xác thực/ủy quyền của người dùng (ví dụ: `Authorization: Bearer <token>`).

**Source knowledge label:** Networking & RESTful APIs / HTTP Request Headers & Authentication.

**Trap:** Các phương án nhiễu: A. Content-Type; B. Accept; D. Cache-Control

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 20
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 42

---

## PRM393-Q0070

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-TEXT-INPUT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** What does TextEditingController manage?

- A. Theme
- B. Text input value
- C. Validation rules
- D. Layout constraints

**Correct answer:** **B. Text input value**

**Explanation from source:** `TextEditingController` được gắn vào các widget nhập liệu (`TextField`, `TextFormField`) để theo dõi, lấy giá trị hiện tại, chỉnh sửa nội dung văn bản cũng như lắng nghe các sự kiện thay đổi ký tự.

**Source knowledge label:** Flutter UI & Form Handling / TextEditingController.

**Trap:** Các phương án nhiễu: A. Theme; C. Validation rules; D. Layout constraints

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 21

---

## PRM393-Q0071

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-ROLE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Why is Dart considered suitable for Flutter development?

- A. It is only used for backend systems
- B. It supports both UI and application logic efficiently
- C. It replaces native languages
- D. It does not support asynchronous programming

**Correct answer:** **B. It supports both UI and application logic efficiently**

**Explanation from source:** Dart được tối ưu hóa đặc biệt cho client development với cú pháp hướng đối tượng quen thuộc, hỗ trợ cả JIT (Just-In-Time cho Hot Reload nhanh khi dev) và AOT (Ahead-Of-Time biên dịch mã máy tối ưu khi release), đồng thời quản lý UI declarative và async logic mượt mà.

**Source knowledge label:** Dart Programming Language / Flutter Architecture & Compilation.

**Trap:** Các phương án nhiễu: A. It is only used for backend systems; C. It replaces native languages; D. It does not support asynchronous programming

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 22

---

## PRM393-Q0072

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-REACTIVE-BUILD`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What does the build() method return in a widget?

- A. A screen
- B. A widget tree describing the UI
- C. Application state
- D. Rendered pixels

**Correct answer:** **B. A widget tree describing the UI**

**Explanation from source:** Hàm `build(BuildContext context)` trong `StatelessWidget` hoặc `State<StatefulWidget>` có nhiệm vụ trả về cấu trúc widget con (widget tree) mô tả giao diện tương ứng với cấu hình và trạng thái hiện tại.

**Source knowledge label:** Flutter Fundamentals / Widget Lifecycle & Build Mechanism.

**Trap:** Các phương án nhiễu: A. A screen; C. Application state; D. Rendered pixels

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 23
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 11

---

## PRM393-Q0073

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-EVENT-STATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** What represents the output of a BLoC?

- A. Events
- B. Widgets
- C. States
- D. Controllers

**Correct answer:** **C. States**

**Explanation from source:** Trong kiến trúc BLoC, đầu vào (Input) là các sự kiện người dùng tương tác (`Events`), BLoC xử lý nghiệp vụ và phát ra kết quả đầu ra (Output) là các trạng thái mới (`States`).

**Source knowledge label:** State Management / BLoC Pattern Architecture (Event-State Flow).

**Trap:** Các phương án nhiễu: A. Events; B. Widgets; D. Controllers

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 24
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 32

---

## PRM393-Q0074

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-CUBIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is Cubit in BLoC?

- A. UI widget
- B. Simplified BLoC without events
- C. Database layer
- D. Animation helper

**Correct answer:** **B. Simplified BLoC without events**

**Explanation from source:** `Cubit` là một biến thể đơn giản hóa của BLoC trong thư viện `flutter_bloc`. Thay vì phải định nghĩa lớp Event và map event sang state, Cubit cho phép gọi trực tiếp các phương thức (functions) để phát ra State (`emit(state)`).

**Source knowledge label:** State Management / Cubit vs BLoC.

**Trap:** Các phương án nhiễu: A. UI widget; C. Database layer; D. Animation helper

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 25
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 11

---

## PRM393-Q0075

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TOOLING`
- `concept_id`: `PRM393-TOOL-PROJECT-WORKFLOW`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which activity is typically performed after creating a new Flutter project?

- A. Deploying to app stores
- B. Running the default app on a device
- C. Configuring authentication
- D. Optimizing database queries

**Correct answer:** **B. Running the default app on a device**

**Explanation from source:** Sau khi khởi tạo dự án Flutter mới (`flutter create`), bước thực hành tiêu chuẩn đầu tiên là chạy thử ứng dụng đếm số mặc định (counter app) trên máy ảo (emulator) hoặc thiết bị thật để xác nhận môi trường phát triển đã sẵn sàng và hoạt động ổn định.

**Source knowledge label:** Flutter Project Setup / Development Workflow.

**Trap:** Các phương án nhiễu: A. Deploying to app stores; C. Configuring authentication; D. Optimizing database queries

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 26

---

## PRM393-Q0076

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DEPLOYMENT`
- `concept_id`: `PRM393-DEPLOY-SIGNING`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which practice improves deployment security?

- A. Debug builds
- B. Secure signing keys
- C. Hardcoding secrets
- D. Skipping validation

**Correct answer:** **B. Secure signing keys**

**Explanation from source:** Lưu trữ và quản lý an toàn khóa ký ứng dụng (Keystore cho Android, Distribution Certificate/Provisioning Profile cho iOS) là nguyên tắc bắt buộc để đảm bảo tính xác thực, tránh bị giả mạo và bảo mật ứng dụng khi phát hành.

**Source knowledge label:** App Deployment & Security / App Signing & Release Management.

**Trap:** Các phương án nhiễu: A. Debug builds; C. Hardcoding secrets; D. Skipping validation

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 27

---

## PRM393-Q0077

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DEPLOYMENT`
- `concept_id`: `PRM393-DEPLOY-CH14-PLUS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Why is Chapter 14 considered optional (Plus)?

- A. Deployment is UI logic
- B. Apps can be tested without publishing
- C. It replaces authentication
- D. It handles APIs

**Correct answer:** **B. Apps can be tested without publishing**

**Explanation from source:** Trong giáo trình môn học PRM393, chương triển khai phát hành lên kho ứng dụng (App Store/Google Play) thường là phần tùy chọn/mở rộng (Plus) vì sinh viên và nhà phát triển có thể build, test và cài đặt trực tiếp trên thiết bị (sideloading/debug/release APK) mà không bắt buộc phải xuất bản chính thức lên Store.

**Source knowledge label:** PRM393 Course Curriculum / Mobile App Deployment Lifecycle.

**Trap:** Các phương án nhiễu: A. Deployment is UI logic; C. It replaces authentication; D. It handles APIs

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 28

---

## PRM393-Q0078

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-THEME`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** What is the primary purpose of ThemeData in Flutter?

- A. Manage navigation
- B. Define application-wide visual styles
- C. Handle state changes
- D. Control animations

**Correct answer:** **B. Define application-wide visual styles**

**Explanation from source:** `ThemeData` dùng để thiết lập bảng màu (colorScheme), phông chữ (textTheme), kiểu dáng nút bấm (elevatedButtonTheme), thanh tiêu đề (appBarTheme)... áp dụng đồng bộ trên toàn bộ ứng dụng (hỗ trợ Light Mode / Dark Mode).

**Source knowledge label:** Flutter UI Design / Theming & Styling (`ThemeData`).

**Trap:** Các phương án nhiễu: A. Manage navigation; C. Handle state changes; D. Control animations

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 29
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 38

---

## PRM393-Q0079

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-SETSTATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** Which method is used to update the UI when state changes?

- A. build()
- B. setState()
- C. initState()
- D. dispose()

**Correct answer:** **B. setState()**

**Explanation from source:** Trong `StatefulWidget`, khi giá trị biến trạng thái thay đổi, việc bọc thay đổi đó trong hàm `setState(() { ... })` sẽ báo hiệu cho Flutter framework lên lịch gọi lại phương thức `build()` để cập nhật UI.

**Source knowledge label:** Flutter Core / StatefulWidget & State Lifecycle.

**Trap:** Các phương án nhiễu: A. build(); C. initState(); D. dispose()

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 30
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 14

---

## PRM393-Q0080

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-SHARED-PREFERENCES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which Flutter package is commonly used for simple key-value storage?

- A. sqflite
- B. shared_preferences
- C. provider
- D. http

**Correct answer:** **B. shared_preferences**

**Explanation from source:** Package `shared_preferences` bọc các API gốc của nền tảng (NSUserDefaults trên iOS, SharedPreferences trên Android) để đọc/ghi các dữ liệu nguyên thủy đơn giản dạng khóa - giá trị (key-value) như trạng thái login, cờ cài đặt.

**Source knowledge label:** Data Persistence / Key-Value Storage (`shared_preferences`).

**Trap:** Các phương án nhiễu: A. sqflite; C. provider; D. http

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 31

---

## PRM393-Q0081

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-ARCH-PURPOSE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`

**Question:** Why should architecture be decided early?

- A. Avoid UI work
- B. Reduce refactoring cost
- C. Improve animations
- D. Change theme

**Correct answer:** **B. Reduce refactoring cost**

**Explanation from source:** Việc thống nhất và lựa chọn kiến trúc phần mềm (như Clean Architecture, Layered Architecture, BLoC/MVVM) ngay từ đầu giúp cấu trúc code nhất quán, giảm thiểu rủi ro phải tái cấu trúc toàn diện (refactoring) tốn kém khi ứng dụng phát triển lớn hơn.

**Source knowledge label:** Software Engineering & Mobile App Architecture.

**Trap:** Các phương án nhiễu: A. Avoid UI work; C. Improve animations; D. Change theme

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 32
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 16

---

## PRM393-Q0082

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-PAGINATION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is pagination used for?

- A. UI animation
- B. Handling large datasets efficiently
- C. Theme management
- D. Authentication

**Correct answer:** **B. Handling large datasets efficiently**

**Explanation from source:** Phân trang (Pagination) là kỹ thuật chia nhỏ tập dữ liệu lớn thành từng trang/khối (pages/chunks) để tải và render dần (lazy loading / infinite scrolling), giúp tối ưu băng thông mạng, giảm tải bộ nhớ và cải thiện trải nghiệm người dùng.

**Source knowledge label:** Networking & Data Management / API Pagination & Infinite Scrolling.

**Trap:** Các phương án nhiễu: A. UI animation; C. Theme management; D. Authentication

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 33
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 6
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 25

---

## PRM393-Q0083

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-REPAINT`
- `type`: `single_choice`
- `quality_status`: `needs_review`
- `difficulty`: `review`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which widget helps avoid rebuilding unchanged UI parts?

- A. Container
- B. RepaintBoundary
- C. Column
- D. FutureBuilder

**Correct answer:** **B. RepaintBoundary**

**Explanation from source:** `RepaintBoundary` tạo ra một `RenderRepaintBoundary` độc lập trong cây render, giúp cô lập vùng vẽ của widget con để khi widget khác repaint thì khu vực này không cần phải vẽ lại, tránh lãng phí GPU/CPU rendering.

**Source knowledge label:** Flutter Performance Optimization / Rendering & `RepaintBoundary`.

**Trap:** Các phương án nhiễu: A. Container; C. Column; D. FutureBuilder

**Quality note:** Source explanation describes repaint isolation via RepaintBoundary, while the stem says 'rebuilding'. Repaint and rebuild are different mechanisms, so answer/explanation do not precisely match the wording.

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 34
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 12

---

## PRM393-Q0084

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-FUTUREBUILDER`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which widget is used to handle asynchronous API responses in UI?

- A. FutureBuilder
- B. ListView
- C. Provider
- D. Form

**Correct answer:** **A. FutureBuilder**

**Explanation from source:** `FutureBuilder` là widget chuyên dùng để theo dõi một `Future` (như lời gọi API bất đồng bộ) và tự động xây dựng giao diện tương ứng với từng trạng thái: đang chờ (`ConnectionState.waiting`), gặp lỗi (`snapshot.hasError`), hoặc thành công (`snapshot.hasData`).

**Source knowledge label:** Asynchronous UI Programming / `FutureBuilder` in Flutter.

**Trap:** Các phương án nhiễu: B. ListView; C. Provider; D. Form

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 35

---

## PRM393-Q0085

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-PACKAGES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which Dart feature helps organize code into reusable libraries?

- A. Widgets
- B. Packages and imports
- C. Hot reload
- D. Layout constraints

**Correct answer:** **B. Packages and imports**

**Explanation from source:** Dart tổ chức và module hóa mã nguồn thông qua hệ thống các packages và thư viện, sử dụng câu lệnh `import` (và `export`) để tái sử dụng mã nguồn giữa các file và các dự án khác nhau.

**Source knowledge label:** Dart Programming Fundamentals / Modularization, Packages & Imports.

**Trap:** Các phương án nhiễu: A. Widgets; C. Hot reload; D. Layout constraints

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 36

---

## PRM393-Q0086

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-SESSION-TOKEN`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** What is refresh token used for?

- A. UI refresh
- B. Extend session without re-login
- C. Theme update
- D. Navigation reset

**Correct answer:** **B. Extend session without re-login**

**Explanation from source:** Refresh token là mã định danh có thời hạn dài, được dùng để gửi lên server yêu cầu cấp một Access token mới khi Access token cũ hết hạn mà người dùng không cần phải thực hiện đăng nhập lại từ đầu.

**Source knowledge label:** Security & Authentication / OAuth 2.0 & JWT Token Management.

**Trap:** Các phương án nhiễu: A. UI refresh; C. Theme update; D. Navigation reset

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 37

---

## PRM393-Q0087

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-REBUILD-SCOPE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 3
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is rebuild scope optimization in Flutter?

- A. Reducing widget tree depth
- B. Limiting rebuild to affected widgets
- C. Caching API responses
- D. Using global state

**Correct answer:** **B. Limiting rebuild to affected widgets**

**Explanation from source:** Tối ưu hóa phạm vi rebuild (Rebuild Scope Optimization) là kỹ thuật cấu trúc widget sao cho khi có sự thay đổi state, chỉ có những widget thực sự phụ thuộc vào dữ liệu đó bị rebuild thay vì rebuild toàn bộ màn hình hoặc widget cha cấp cao.

**Source knowledge label:** Flutter Performance & State Management / Rebuild Scope Optimization.

**Trap:** Các phương án nhiễu: A. Reducing widget tree depth; C. Caching API responses; D. Using global state

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 38
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 8
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 3

---

## PRM393-Q0088

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-BASICS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Why is BLoC suitable for large teams?

- A. Less code
- B. Standardized architecture
- C. Faster builds
- D. UI reuse

**Correct answer:** **B. Standardized architecture**

**Explanation from source:** BLoC cung cấp một cấu trúc kiến trúc chuẩn hóa rõ ràng (phân tách Events, States, BLoC/Cubit, UI, Repositories). Quy ước chặt chẽ này giúp các thành viên trong đội ngũ lớn làm việc song song dễ dàng, đồng bộ phong cách code và dễ kiểm thử độc lập.

**Source knowledge label:** State Management & Software Engineering / BLoC in Enterprise & Large Teams.

**Trap:** Các phương án nhiễu: A. Less code; C. Faster builds; D. UI reuse

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 39

---

## PRM393-Q0089

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-SESSION-TOKEN`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** What is a token in authentication systems?

- A. UI key
- B. Temporary access credential
- C. Database ID
- D. Theme value

**Correct answer:** **B. Temporary access credential**

**Explanation from source:** Trong các hệ thống xác thực (như JWT, OAuth), token là chuỗi chứng chỉ truy cập tạm thời được cấp sau khi định danh thành công, cho phép client gửi kèm trong các request để chứng minh quyền truy cập tài nguyên.

**Source knowledge label:** Mobile Security & Authentication / Token-Based Authentication.

**Trap:** Các phương án nhiễu: A. UI key; C. Database ID; D. Theme value

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 41

---

## PRM393-Q0090

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-EXPLICIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What does a Tween define?

- A. Animation speed
- B. Value range for animation
- C. UI layout
- D. State logic

**Correct answer:** **B. Value range for animation**

**Explanation from source:** Trong hệ thống Animation của Flutter, `Tween` (viết tắt của in-between) định nghĩa một dải giá trị biến thiên tuyến tính từ giá trị bắt đầu (`begin`) đến giá trị kết thúc (`end`) (ví dụ: đổi màu từ đỏ sang xanh, hoặc biến đổi giá trị từ 0.0 đến 100.0).

**Source knowledge label:** Flutter Animations / Explicit Animations & Tween.

**Trap:** Các phương án nhiễu: A. Animation speed; C. UI layout; D. State logic

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 42
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 24

---

## PRM393-Q0091

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-GENERICS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which Dart feature allows defining reusable, type-safe components?

- A. Mixins
- B. Generics
- C. Futures
- D. Streams

**Correct answer:** **B. Generics**

**Explanation from source:** `Generics` (Generic Programming với cú pháp kiểu tham số hóa `<T>`) cho phép tạo ra các class, interface, method dùng chung có thể hoạt động linh hoạt với nhiều kiểu dữ liệu khác nhau mà vẫn đảm bảo tính an toàn kiểu dữ liệu (Type Safety) ngay tại thời điểm biên dịch.

**Source knowledge label:** Dart Language / Generics & Type System.

**Trap:** Các phương án nhiễu: A. Mixins; C. Futures; D. Streams

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 43

---

## PRM393-Q0092

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-IMPLICIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** Which widget animates between two widgets?

- A. AnimatedSwitcher
- B. AnimatedOpacity
- C. AnimatedAlign
- D. AnimatedSize

**Correct answer:** **A. AnimatedSwitcher**

**Explanation from source:** `AnimatedSwitcher` là một Implicit Animation widget có khả năng tự động thực hiện hiệu ứng chuyển cảnh mềm mại (fade, scale...) giữa widget hiện tại và widget mới khi widget con (child) được thay thế (dựa trên Key của widget con).

**Source knowledge label:** Flutter Animations / Implicit Animations (`AnimatedSwitcher`).

**Trap:** Các phương án nhiễu: B. AnimatedOpacity; C. AnimatedAlign; D. AnimatedSize

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 44
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 13

---

## PRM393-Q0093

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-SETSTATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** Why should setState() be called sparingly?

- A. It increases app size
- B. It may trigger unnecessary rebuilds
- C. It blocks UI thread
- D. It causes memory leaks

**Correct answer:** **B. It may trigger unnecessary rebuilds**

**Explanation from source:** Mỗi khi `setState()` được gọi, Flutter sẽ rebuild lại toàn bộ widget đó và các widget con của nó. Gọi `setState()` tùy tiện hoặc ở phạm vi quá rộng sẽ gây ra nhiều lần rebuild không cần thiết, làm giảm FPS và lãng phí tài nguyên CPU/GPU.

**Source knowledge label:** Flutter Performance & State Management / `setState()` Best Practices.

**Trap:** Các phương án nhiễu: A. It increases app size; C. It blocks UI thread; D. It causes memory leaks

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 45
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 22

---

## PRM393-Q0094

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-ISOLATION-REFACTOR`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** What is test isolation?

- A. Running all tests together
- B. Independence of test cases
- C. UI separation
- D. Mocking only

**Correct answer:** **B. Independence of test cases**

**Explanation from source:** Tính cô lập trong kiểm thử (Test Isolation) là nguyên tắc cốt lõi đảm bảo mỗi ca kiểm thử (test case) phải chạy độc lập, tự khởi tạo và dọn dẹp môi trường riêng của mình, không phụ thuộc vào thứ tự chạy và không bị ảnh hưởng bởi kết quả của các test case khác.

**Source knowledge label:** Software Testing Principles / Test Isolation & Independence.

**Trap:** Các phương án nhiễu: A. Running all tests together; C. UI separation; D. Mocking only

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 46

---

## PRM393-Q0095

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-FLEX-ALIGNMENT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`, `PRM393-EXAM-SU26-FE`

**Question:** What does crossAxisAlignment control?

- A. Vertical alignment in Column
- B. Horizontal alignment in Column
- C. Child order
- D. Widget size

**Correct answer:** **B. Horizontal alignment in Column**

**Explanation from source:** Trong widget `Column`, trục chính (`mainAxisAlignment`) là trục dọc (vertical), còn trục phụ vuông góc (`crossAxisAlignment`) là trục ngang (horizontal). Do đó `crossAxisAlignment` điều khiển cách căn chỉnh các widget con theo chiều ngang (Left/Right/Center/Stretch).

**Source knowledge label:** Flutter UI Layouts / Flex Layout (`Column` & `Row` Alignment).

**Trap:** Các phương án nhiễu: A. Vertical alignment in Column; C. Child order; D. Widget size

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 47
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 35

---

## PRM393-Q0096

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-SE-VERSION-CONTROL`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SP26-B5-FE`

**Question:** Which tool is commonly used for version control?

- A. SVN
- B. Git
- C. FTP
- D. ZIP

**Correct answer:** **B. Git**

**Explanation from source:** `Git` là hệ thống quản lý phiên bản phân tán (Distributed Version Control System) tiêu chuẩn và phổ biến nhất trong phát triển phần mềm hiện đại, hỗ trợ quản lý mã nguồn, phân nhánh (branching) và cộng tác nhóm.

**Source knowledge label:** Software Engineering & Development Tools / Version Control (Git).

**Trap:** Các phương án nhiễu: A. SVN; C. FTP; D. ZIP

**Source occurrences:**
- `PRM393-EXAM-SP26-B5-FE` → `PRM393_SP26_B5_FE.md` → Câu 48

---

## PRM393-Q0097

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-IMPLICIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Which widget is an example of implicit animation?

- A. AnimatedContainer
- B. AnimationController
- C. Tween
- D. Ticker

**Correct answer:** **A. AnimatedContainer**

**Explanation from source:** **Implicit Animations** (Hoạt ảnh ngầm định) là tập hợp các widget bắt đầu bằng tiền tố `Animated...` (như `AnimatedContainer`, `AnimatedOpacity`, `AnimatedPadding`, `AnimatedAlign`). Các widget này tự động xử lý animation nội suy mượt mà mỗi khi thuộc tính của chúng thay đổi mà lập trình viên **không cần** tự khởi tạo và quản lý `AnimationController`.
- Ngược lại, `AnimationController`, `Tween`, `Ticker` là các khối kiến trúc thuộc **Explicit Animations** (hoạt ảnh tường minh), yêu cầu lập trình viên tự điều khiển thủ công.

**Source knowledge label:** Flutter Animations / Implicit vs. Explicit Animations.

**Trap:** Các phương án nhiễu: B. AnimationController; C. Tween; D. Ticker

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 7

---

## PRM393-Q0098

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-SETSTATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What is the primary responsibility of the setState() method?

- A. Persist data
- B. Trigger widget rebuild
- C. Navigate screens
- D. Handle async tasks

**Correct answer:** **B. Trigger widget rebuild**

**Explanation from source:** Trong `StatefulWidget`, phương thức `setState(VoidCallback fn)` có nhiệm vụ duy nhất: thông báo cho Flutter Framework biết rằng trạng thái nội bộ của đối tượng `State` đã thay đổi, từ đó yêu cầu framework lên lịch gọi lại phương thức `build()` để cập nhật và vẽ lại giao diện tương ứng.

**Source knowledge label:** Flutter Core Fundamentals / StatefulWidget & State Lifecycle.

**Trap:** Các phương án nhiễu: A. Persist data; C. Navigate screens; D. Handle async tasks

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 8

---

## PRM393-Q0099

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-SETSTATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What causes unnecessary widget rebuilds?

- A. State changes
- B. Overusing setState()
- C. Using Provider
- D. Using const widgets

**Correct answer:** **B. Overusing setState()**

**Explanation from source:** Lạm dụng gọi `setState()` quá thường xuyên hoặc gọi `setState()` ở cấp độ widget cha bao phủ toàn bộ màn hình sẽ khiến cả cây widget con bên dưới bị rebuild lại dù dữ liệu của chúng không thay đổi.
- Sử dụng `const widgets` và các giải pháp quản lý trạng thái có chọn lọc (như Selector/Consumer trong Provider/Bloc) là giải pháp để khắc phục vấn đề này.

**Source knowledge label:** Flutter Performance Optimization / Rebuild Issues & `setState()`.

**Trap:** Các phương án nhiễu: A. State changes; C. Using Provider; D. Using const widgets

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 13

---

## PRM393-Q0100

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-HOISTING`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What problem does state hoisting address?

- A. API delay
- B. State duplication
- C. Theme conflict
- D. Navigation error

**Correct answer:** **B. State duplication**

**Explanation from source:** **State Hoisting** (Nâng state lên cấp cao hơn) là mô hình chuyển việc lưu trữ và quản lý state từ các widget con lên widget cha chung (lowest common ancestor).
- Kỹ thuật này giải quyết vấn đề trùng lặp trạng thái (State duplication), biến các widget con thành các widget phi trạng thái (stateless/controlled widgets), đảm bảo chỉ có một nguồn chân lý duy nhất (Single Source of Truth) cho dữ liệu.

**Source knowledge label:** State Management Concepts / State Hoisting & Unidirectional Data Flow.

**Trap:** Các phương án nhiễu: A. API delay; C. Theme conflict; D. Navigation error

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 22

---

## PRM393-Q0101

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-SETSTATE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What happens when setState() is called in a StatefulWidget?

- A. The app restarts
- B. The widget tree is rebuilt
- C. Data is saved permanently
- D. Navigation occurs

**Correct answer:** **B. The widget tree is rebuilt**

**Explanation from source:** Khi `setState()` được gọi, Flutter đánh dấu đối tượng `Element` tương ứng là "dirty" và lên lịch cho framework gọi lại phương thức `build()` của widget đó trong frame vẽ tiếp theo, tái tạo lại cây widget con để hiển thị trạng thái mới.

**Source knowledge label:** Flutter Fundamentals / StatefulWidget & Rebuild Mechanism.

**Trap:** Các phương án nhiễu: A. The app restarts; C. Data is saved permanently; D. Navigation occurs

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 23

---

## PRM393-Q0102

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-BASICS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Which pattern is commonly used for scalable state management?

- A. MVC
- B. BLoC
- C. Singleton
- D. Factory

**Correct answer:** **B. BLoC**

**Explanation from source:** **BLoC (Business Logic Component)** là pattern quản lý trạng thái tiêu chuẩn được thiết kế đặc biệt cho các ứng dụng Flutter quy mô lớn (enterprise/scalable).
- BLoC phân tách hoàn toàn tầng Business Logic ra khỏi tầng UI thông qua cơ chế luồng Reactive Streams (Events vào - States ra), giúp code dễ mở rộng, dễ tái sử dụng và cực kỳ thuận tiện cho việc kiểm thử tự động.

**Source knowledge label:** Flutter State Management / BLoC Pattern.

**Trap:** Các phương án nhiễu: A. MVC; C. Singleton; D. Factory

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 24

---

## PRM393-Q0103

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-TEXT-INPUT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Which input type improves user experience for emails?

- A. TextInputType.number
- B. TextInputType.emailAddress
- C. TextInputType.text
- D. TextInputType.url

**Correct answer:** **B. TextInputType.emailAddress**

**Explanation from source:** Thiết lập `keyboardType: TextInputType.emailAddress` trong `TextField` sẽ yêu cầu bàn phím ảo của hệ điều hành (Android/iOS) hiển thị bố cục bàn phím tối ưu cho việc nhập email (có sẵn phím `@`, dấu chấm `.`, và gợi ý tên miền), giúp nâng cao trải nghiệm người dùng (UX).

**Source knowledge label:** Flutter Forms & UX / `TextInputType` Configuration.

**Trap:** Các phương án nhiễu: A. TextInputType.number; C. TextInputType.text; D. TextInputType.url

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 25

---

## PRM393-Q0104

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-SLIVERS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Which widget allows both scrolling and app bars to interact?

- A. ListView
- B. CustomScrollView
- C. GridView
- D. Stack

**Correct answer:** **B. CustomScrollView**

**Explanation from source:** `CustomScrollView` cho phép lồng ghép và tương tác đồng bộ giữa thanh tiêu đề `SliverAppBar` và các danh sách cuộn dạng sliver (`SliverList`, `SliverGrid`). Khi người dùng cuộn danh sách, `SliverAppBar` có thể co giãn, ẩn hiện hoặc ghim một cách mượt mà theo cử chỉ cuộn.

**Source knowledge label:** Flutter UI / CustomScrollView & Slivers Interaction.

**Trap:** Các phương án nhiễu: A. ListView; C. GridView; D. Stack

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 26

---

## PRM393-Q0105

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-HTTP-METHODS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Which HTTP method is used to send new data to a server?

- A. GET
- B. DELETE
- C. POST
- D. HEAD

**Correct answer:** **C. POST**

**Explanation from source:** Trong chuẩn RESTful API và giao thức HTTP, phương thức `POST` được sử dụng để gửi dữ liệu mới (payload trong Request Body) lên máy chủ nhằm tạo mới một tài nguyên (ví dụ: tạo tài khoản mới, tạo đơn hàng mới).
- `GET` dùng để lấy dữ liệu; `DELETE` dùng để xóa tài nguyên; `HEAD` dùng để lấy header phản hồi.

**Source knowledge label:** Networking & RESTful APIs / HTTP Methods.

**Trap:** Các phương án nhiễu: A. GET; B. DELETE; D. HEAD

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 29

---

## PRM393-Q0106

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-PERFORMANCE`
- `concept_id`: `PRM393-PERF-GOAL`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE`, `PRM393-EXAM-SU26-FE-RE`

**Question:** What is the main goal of performance optimization in Flutter apps?

- A. Improve UI colors
- B. Ensure smooth and responsive UI
- C. Reduce code size
- D. Add features

**Correct answer:** **B. Ensure smooth and responsive UI**

**Explanation from source:** Mục tiêu tối thượng của việc tối ưu hóa hiệu năng (Performance Optimization) trong ứng dụng Flutter là duy trì tốc độ khung hình ổn định ở mức **60 FPS hoặc 120 FPS** (16.6ms hoặc 8.3ms mỗi frame), loại bỏ hiện tượng giật khung hình (jank), đảm bảo giao diện luôn phản hồi tức thì và mượt mà trước mọi tương tác của người dùng.

**Source knowledge label:** Flutter Performance Optimization / Frame Rate & UI Responsiveness.

**Trap:** Các phương án nhiễu: A. Improve UI colors; C. Reduce code size; D. Add features

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 30
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 47

---

## PRM393-Q0107

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-CONST-FINAL`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What does the final keyword indicate in Dart?

- A. The variable can be reassigned later
- B. The variable value is fixed after assignment
- C. The variable is global
- D. The variable is private

**Correct answer:** **B. The variable value is fixed after assignment**

**Explanation from source:** Trong Dart, từ khóa `final` khai báo một biến "chỉ gán một lần" (single-assignment). Giá trị của biến `final` có thể được tính toán và gán tại thời điểm Runtime (ví dụ từ kết quả API hay hàm khởi tạo), nhưng một khi đã được gán thì giá trị của nó sẽ cố định và không thể bị gán lại (reassigned).

**Source knowledge label:** Dart Fundamentals / Variables & Immutability (`final` keyword).

**Trap:** Các phương án nhiễu: A. The variable can be reassigned later; C. The variable is global; D. The variable is private

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 32

---

## PRM393-Q0108

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-HTTP-STATUS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What does status code 200 indicate?

- A. Client error
- B. Server error
- C. Success
- D. Redirect

**Correct answer:** **C. Success**

**Explanation from source:** Trong chuẩn HTTP Response Status Codes, mã **200 OK** thuộc dải `2xx` (Success), biểu thị rằng yêu cầu từ phía client gửi lên máy chủ đã được tiếp nhận, hiểu và xử lý thành công.

**Source knowledge label:** Networking Protocols / HTTP Status Codes.

**Trap:** Các phương án nhiễu: A. Client error; B. Server error; D. Redirect

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 33

---

## PRM393-Q0109

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-RESOURCE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What is the role of v-sync in Flutter?

- A. Sync data
- B. Optimize animation resources
- C. Control layout
- D. Handle navigation

**Correct answer:** **B. Optimize animation resources**

**Explanation from source:** **V-Sync (Vertical Synchronization)** trong Flutter (được cung cấp thông qua mixin `SingleTickerProviderStateMixin` hoặc `TickerProviderStateMixin`) có vai trò đồng bộ hóa nhịp của Animation Controller với tần số quét làm mới của màn hình phần cứng (thường là 60Hz hoặc 120Hz).
- Nhờ V-Sync, animation chỉ tính toán và kích hoạt vẽ lại khi màn hình thực sự sẵn sàng render một khung hình mới, và tự động tạm dừng khi widget ra khỏi màn hình, giúp tiết kiệm tối đa pin và tài nguyên CPU/GPU.

**Source knowledge label:** Flutter Animations / Ticker & V-Sync Optimization.

**Trap:** Các phương án nhiễu: A. Sync data; C. Control layout; D. Handle navigation

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 36

---

## PRM393-Q0110

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-QUALITY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What is the main goal of testing in Flutter apps?

- A. Improve UI design
- B. Ensure app quality and correctness
- C. Speed up builds
- D. Manage state

**Correct answer:** **B. Ensure app quality and correctness**

**Explanation from source:** Mục tiêu cốt lõi của việc thực hiện kiểm thử tự động (Unit, Widget, Integration Testing) trong phát triển ứng dụng là đảm bảo chất lượng phần mềm, xác nhận ứng dụng hoạt động chính xác theo yêu cầu thiết kế, ngăn chặn lỗi hồi quy (regressions) khi cập nhật tính năng mới.

**Source knowledge label:** Software Engineering / Software Quality Assurance & Testing.

**Trap:** Các phương án nhiễu: A. Improve UI design; C. Speed up builds; D. Manage state

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 37

---

## PRM393-Q0111

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-LIFECYCLE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Why is understanding the widget lifecycle important?

- A. Improve API performance
- B. Manage UI updates correctly
- C. Deploy apps faster
- D. Reduce file size

**Correct answer:** **B. Manage UI updates correctly**

**Explanation from source:** Hiểu rõ vòng đời của Widget (`initState`, `didChangeDependencies`, `build`, `didUpdateWidget`, `dispose`...) giúp lập trình viên thực hiện các thao tác đúng thời điểm: khởi tạo controller/listener trong `initState`, giải phóng tài nguyên trong `dispose`, và kích hoạt cập nhật giao diện (`setState`) chính xác mà không gặp lỗi "setState called after dispose" hay rò rỉ bộ nhớ.

**Source knowledge label:** Flutter Core / State Lifecycle Management.

**Trap:** Các phương án nhiễu: A. Improve API performance; C. Deploy apps faster; D. Reduce file size

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 38

---

## PRM393-Q0112

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-THEME`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** When is it most appropriate to customize themes in a Flutter app?

- A. After API integration
- B. During UI/UX design phase
- C. Only at deployment
- D. Only for testing

**Correct answer:** **B. During UI/UX design phase**

**Explanation from source:** Tùy biến và thiết lập Theme (`ThemeData`, ColorScheme, Typography) nên được thực hiện sớm ngay trong giai đoạn thiết kế UI/UX và xây dựng nền tảng ban đầu. Việc này giúp toàn bộ các màn hình và widget được xây dựng sau đó tự động kế thừa màu sắc và phong cách chuẩn mực, tránh phải sửa lại giao diện thủ công từng màn hình về sau.

**Source knowledge label:** Flutter UI Design / Design System & Theming Workflow.

**Trap:** Các phương án nhiễu: A. After API integration; C. Only at deployment; D. Only for testing

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 41

---

## PRM393-Q0113

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NAVIGATION`
- `concept_id`: `PRM393-NAV-CONTEXT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Why is passing context important in navigation?

- A. Access theme
- B. Access Navigator
- C. Access state
- D. Access layout

**Correct answer:** **B. Access Navigator**

**Explanation from source:** `BuildContext` định vị vị trí của widget trong cây widget. Khi thực hiện điều hướng với `Navigator.of(context)` hoặc `Navigator.push(context, ...)`, Flutter cần `context` để tìm kiếm đối tượng `NavigatorState` gần nhất trong cây widget tổ tiên quản lý ngăn xếp màn hình (Route Stack).

**Source knowledge label:** Flutter Navigation & Routing / BuildContext in Navigation.

**Trap:** Các phương án nhiễu: A. Access theme; C. Access state; D. Access layout

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 43

---

## PRM393-Q0114

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-EXPLICIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Which widget rebuilds automatically during animation?

- A. AnimatedBuilder
- B. FutureBuilder
- C. StreamBuilder
- D. LayoutBuilder

**Correct answer:** **A. AnimatedBuilder**

**Explanation from source:** `AnimatedBuilder` nhận vào một `animation` (thường là `AnimationController` hoặc `CurvedAnimation`) đóng vai trò là `Listenable`. Mỗi khi giá trị animation thay đổi theo từng frame, `AnimatedBuilder` sẽ tự động gọi hàm `builder` để render lại phần giao diện chuyển động mà không cần phải gọi `setState()` ở toàn bộ widget cha.

**Source knowledge label:** Flutter Animations / Explicit Animations & `AnimatedBuilder`.

**Trap:** Các phương án nhiễu: B. FutureBuilder; C. StreamBuilder; D. LayoutBuilder

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 47

---

## PRM393-Q0115

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-CONTAINER`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** What is the main purpose of the Container widget?

- A. Navigation
- B. Layout, styling, and positioning
- C. State management
- D. Network requests

**Correct answer:** **B. Layout, styling, and positioning**

**Explanation from source:** `Container` là một widget tiện ích đa năng kết hợp nhiều widget đơn lẻ lại với nhau, cung cấp các thuộc tính để xử lý kích thước (width/height), khoảng cách (padding/margin), trang trí giao diện (decoration: màu nền, viền border, bo góc borderRadius, bóng đổ boxShadow), căn chỉnh (alignment) và biến đổi hình học (transform).

**Source knowledge label:** Flutter UI Layout & Styling / `Container` Widget.

**Trap:** Các phương án nhiễu: A. Navigation; C. State management; D. Network requests

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 48

---

## PRM393-Q0116

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-HTTPS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE`

**Question:** Which practice improves API security?

- A. Hardcoding keys
- B. Using HTTPS
- C. Ignoring errors
- D. Using globals

**Correct answer:** **B. Using HTTPS**

**Explanation from source:** Sử dụng giao thức **HTTPS (Hypertext Transfer Protocol Secure)** với mã hóa SSL/TLS giúp mã hóa toàn bộ dữ liệu trao đổi giữa ứng dụng di động và máy chủ (API Server), ngăn chặn các cuộc tấn công nghe lén (Eavesdropping), đánh cắp dữ liệu và tấn công trung gian (Man-in-the-Middle - MitM).

**Source knowledge label:** Mobile Network Security / HTTPS & API Communication Security.

**Trap:** Các phương án nhiễu: A. Hardcoding keys; C. Ignoring errors; D. Using globals

**Source occurrences:**
- `PRM393-EXAM-SU26-FE` → `PRM393_SU26_FE.md` → Câu 50

---

## PRM393-Q0117

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-SHARED-PREFERENCES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What type of data is SharedPreferences best suited for?

- A. Large datasets
- B. Simple primitive values
- C. Images
- D. Complex objects

**Correct answer:** **B. Simple primitive values**

**Explanation from source:** `SharedPreferences` bọc các API lưu trữ nhẹ của hệ điều hành (`NSUserDefaults` trên iOS, `SharedPreferences` trên Android), được thiết kế chuyên biệt để lưu trữ các giá trị nguyên thủy đơn giản dạng khóa - giá trị (Key-Value) như `int`, `double`, `bool`, `String`, `List<String>` (ví dụ: cài đặt chế độ Dark mode, ngôn ngữ, cờ onboarding, token).
- Đối với tập dữ liệu lớn (Large datasets) hoặc quan hệ phức tạp, lập trình viên nên dùng SQLite (`sqflite`) hoặc Hive / Isar; đối với hình ảnh nên lưu file trên bộ nhớ đĩa (`path_provider`).

**Source knowledge label:** Local Data Storage / Key-Value Persistence with `shared_preferences`.

**Trap:** Các phương án nhiễu: A. Large datasets; C. Images; D. Complex objects

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 2

---

## PRM393-Q0118

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-ARCH-PURPOSE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What is the main purpose of app architecture?

- A. UI design
- B. Organize code structure
- C. Improve animations
- D. Handle API

**Correct answer:** **B. Organize code structure**

**Explanation from source:** Mục đích cốt lõi của Kiến trúc ứng dụng (App Architecture - như Clean Architecture, MVVM, BLoC Pattern) là tổ chức và chuẩn hóa cấu trúc mã nguồn (Organize code structure).
- Kiến trúc giúp phân tách rõ ràng trách nhiệm giữa các tầng (Separation of Concerns), giảm sự phụ thuộc chồng chéo (Loose Coupling), giúp dự án dễ bảo trì, dễ mở rộng quy mô khi nhiều lập trình viên cùng làm việc và thuận tiện cho việc kiểm thử tự động.

**Source knowledge label:** Software Engineering & Architecture / Code Organization & Design Patterns.

**Trap:** Các phương án nhiễu: A. UI design; C. Improve animations; D. Handle API

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 3

---

## PRM393-Q0119

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TOOLING`
- `concept_id`: `PRM393-TOOL-SDK-SETUP`
- `type`: `single_choice`
- `quality_status`: `ambiguous`
- `difficulty`: `review`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which component is required to run and test Flutter applications on a local machine?

- A. A cloud hosting service
- B. A physical server
- C. An emulator or physical device
- D. A database management system

**Correct answer:** **C. An emulator or physical device**

**Explanation from source:** Để có thể biên dịch, chạy thử và kiểm thử trực quan ứng dụng Flutter trên máy tính cá nhân, lập trình viên bắt buộc phải có môi trường đích để ứng dụng khởi chạy: đó có thể là máy ảo phần mềm (**Emulator** trên Android Studio / **Simulator** trên Xcode) hoặc kết nối trực tiếp với thiết bị thật (**Physical device**) qua cáp USB / Wi-Fi.

**Source knowledge label:** Flutter Development Environment / Emulators & Device Testing.

**Trap:** Các phương án nhiễu: A. A cloud hosting service; B. A physical server; D. A database management system

**Quality note:** The source selects emulator/physical device, but the stem is broad enough to include Flutter desktop/web targets on a local machine.

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 4
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 44

---

## PRM393-Q0120

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-REST`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What does REST stand for?

- A. Remote State Transfer
- B. Representational State Transfer
- C. Reactive Service Transport
- D. Request State Transfer

**Correct answer:** **B. Representational State Transfer**

**Explanation from source:** **REST** là viết tắt của **Representational State Transfer** (Chuyển giao trạng thái đại diện) – một kiểu kiến trúc phần mềm chuẩn mực được Roy Fielding định nghĩa, sử dụng giao thức HTTP không trạng thái (stateless) để truyền tải và thao tác với các tài nguyên định danh qua URL/URI.

**Source knowledge label:** Networking & Web Services / REST API Fundamentals.

**Trap:** Các phương án nhiễu: A. Remote State Transfer; C. Reactive Service Transport; D. Request State Transfer

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 5

---

## PRM393-Q0121

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NAVIGATION`
- `concept_id`: `PRM393-NAV-ROUTE-STACK`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What does Navigator.pop() do?

- A. Open a new screen
- B. Close current screen
- C. Restart app
- D. Clear stack

**Correct answer:** **B. Close current screen**

**Explanation from source:** Hệ thống điều hướng màn hình trong Flutter hoạt động theo cơ chế ngăn xếp (LIFO Route Stack). Phương thức `Navigator.pop(context)` sẽ gỡ bỏ (pop) route/màn hình đang nằm trên cùng của stack, từ đó đóng màn hình hiện tại và quay trở về màn hình liền kề trước đó.
- `Navigator.push()` dùng để mở màn hình mới; `Navigator.popUntil()` hoặc `pushNamedAndRemoveUntil()` dùng để xóa stack.

**Source knowledge label:** Flutter Navigation & Routing / Route Stack (`Navigator.pop`).

**Trap:** Các phương án nhiễu: A. Open a new screen; C. Restart app; D. Clear stack

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 7

---

## PRM393-Q0122

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ARCHITECTURE`
- `concept_id`: `PRM393-ARCH-SEPARATION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Which pattern separates storage logic from UI?

- A. MVC
- B. Repository pattern
- C. Singleton
- D. Factory

**Correct answer:** **B. Repository pattern**

**Explanation from source:** **Repository Pattern** đóng vai trò là một tầng trung gian trừu tượng hóa việc truy xuất dữ liệu nằm giữa tầng nghiệp vụ/UI và các nguồn dữ liệu cụ thể (Remote API, Local SQLite Database, Cache).
- Tầng UI chỉ cần yêu cầu dữ liệu từ Repository mà không cần quan tâm dữ liệu được lấy từ mạng hay cơ sở dữ liệu cục bộ, giúp code sạch, dễ thay đổi nguồn lưu trữ và dễ mock khi viết test.

**Source knowledge label:** Software Design Patterns / Repository Pattern & Data Layer.

**Trap:** Các phương án nhiễu: A. MVC; C. Singleton; D. Factory

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 9

---

## PRM393-Q0123

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DEPLOYMENT`
- `concept_id`: `PRM393-DEPLOY-BUILD-RELEASE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What is the purpose of building a release version of a Flutter app?

- A. Debug code
- B. Prepare app for distribution
- C. Test UI
- D. Change theme

**Correct answer:** **B. Prepare app for distribution**

**Explanation from source:** Bản build Release (`flutter build apk --release`, `flutter build appbundle`, `flutter build ipa`) được tối ưu hóa tối đa: mã nguồn Dart được biên dịch Ahead-Of-Time (AOT) sang mã máy nhị phân thuần, loại bỏ toàn bộ mã debug/profiling, áp dụng tree-shaking và code shrinking.
- Mục đích là để chuẩn bị ứng dụng có kích thước nhỏ nhất, hiệu năng cao nhất sẵn sàng xuất bản và phân phối tới người dùng cuối qua Google Play hoặc App Store.

**Source knowledge label:** App Deployment & Release / Production Build & Distribution.

**Trap:** Các phương án nhiễu: A. Debug code; C. Test UI; D. Change theme

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 10

---

## PRM393-Q0124

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NAVIGATION`
- `concept_id`: `PRM393-NAV-STRUCTURE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Why should navigation logic be well-structured?

- A. Reduce UI size
- B. Improve maintainability
- C. Increase speed
- D. Avoid widgets

**Correct answer:** **B. Improve maintainability**

**Explanation from source:** Việc tổ chức logic điều hướng một cách bài bản và có cấu trúc (sử dụng Named Routes, AutoRoute, GoRouter hoặc Navigation 2.0 Router Delegate) giúp mã nguồn dễ bảo trì, dễ quản lý các luồng điều hướng phức tạp (Deep linking, Authentication guards, Nested navigation) và tránh việc viết code chuyển màn hình rải rác khó kiểm soát.

**Source knowledge label:** Flutter Architecture / Routing & Navigation Design.

**Trap:** Các phương án nhiễu: A. Reduce UI size; C. Increase speed; D. Avoid widgets

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 11
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 33

---

## PRM393-Q0125

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-SESSION-TOKEN`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Why is logout functionality important?

- A. Free memory
- B. End user session securely
- C. Improve UI
- D. Change theme

**Correct answer:** **B. End user session securely**

**Explanation from source:** Chức năng Đăng xuất (Logout) có vai trò bảo mật thiết yếu: kết thúc phiên làm việc của người dùng một cách an toàn bằng cách hủy token xác thực (cả ở client và thông báo thu hồi token trên server), xóa dữ liệu nhạy cảm lưu tạm trong cache/ bộ nhớ, ngăn chặn người khác tiếp tục sử dụng ứng dụng khi cầm vào thiết bị.

**Source knowledge label:** Mobile App Security / Session Management & Authentication.

**Trap:** Các phương án nhiễu: A. Free memory; C. Improve UI; D. Change theme

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 12
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 10

---

## PRM393-Q0126

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-ROLE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which programming language is used to develop Flutter applications?

- A. Kotlin
- B. Swift
- C. Dart
- D. JavaScript

**Correct answer:** **C. Dart**

**Explanation from source:** Toàn bộ ứng dụng Flutter và bản thân framework Flutter được lập trình bằng ngôn ngữ **Dart** – ngôn ngữ hướng đối tượng hiện đại do Google phát triển.

**Source knowledge label:** Flutter Overview / Dart Programming Language.

**Trap:** Các phương án nhiễu: A. Kotlin; B. Swift; D. JavaScript

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 15
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 39

---

## PRM393-Q0127

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-WIDGET-TREE`
- `type`: `single_choice`
- `quality_status`: `ambiguous`
- `difficulty`: `review`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Why is the widget tree considered immutable?

- A. Widgets cannot be removed
- B. Widgets are recreated instead of modified
- C. Widgets are stored permanently
- D. Widgets cannot contain data

**Correct answer:** **B. Widgets are recreated instead of modified**

**Explanation from source:** Cây Widget trong Flutter mang tính chất bất biến (Immutable): tất cả các trường (fields) của Widget đều là `final`.
- Khi có sự thay đổi giao diện hoặc trạng thái, Flutter không chỉnh sửa trực tiếp các thuộc tính của widget cũ mà tạo ra các đối tượng widget mới (recreated) để thay thế bản mô tả cũ. Tầng `Element` và `RenderObject` bên dưới sẽ so sánh và tái sử dụng các node giao diện render nặng nhằm tối ưu hiệu năng.

**Source knowledge label:** Flutter Architecture / Widget Tree & Immutability.

**Trap:** Các phương án nhiễu: A. Widgets cannot be removed; C. Widgets are stored permanently; D. Widgets cannot contain data

**Quality note:** The explanation establishes that Widget objects are immutable and recreated; the stem attributes immutability to the widget tree as a whole, which is less precise.

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 16

---

## PRM393-Q0128

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-NULL-SAFETY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which feature of Dart helps prevent null reference errors at compile time?

- A. Dynamic typing
- B. Hot reload
- C. Null safety
- D. Asynchronous execution

**Correct answer:** **C. Null safety**

**Explanation from source:** Tính năng **Sound Null Safety** trong Dart phân biệt rõ ràng giữa kiểu dữ liệu không thể null (`int`, `String`) và kiểu dữ liệu có thể null (`int?`, `String?`).
- Trình biên dịch sẽ phân tích luồng code tĩnh và bắt buộc xử lý trường hợp null ngay tại thời điểm biên dịch (Compile time), triệt tiêu hoàn toàn lỗi kinh điển "Null Pointer Exception" (hay "NoSuchMethodError on null") khi ứng dụng chạy.

**Source knowledge label:** Dart Language / Sound Null Safety System.

**Trap:** Các phương án nhiễu: A. Dynamic typing; B. Hot reload; D. Asynchronous execution

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 18
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 35

---

## PRM393-Q0129

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-PROVIDER`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** When should you prefer Provider over setState()?

- A. For simple UI updates
- B. For global or shared state
- C. For animations
- D. For navigation

**Correct answer:** **B. For global or shared state**

**Explanation from source:** `setState()` chỉ phù hợp cho trạng thái cục bộ (local/ephemeral state) gói gọn bên trong một widget duy nhất.
- Khi trạng thái cần được chia sẻ giữa nhiều màn hình hoặc nhiều widget nằm ở các nhánh khác nhau trên cây widget (Global / App-wide state như thông tin đăng nhập người dùng, giỏ hàng, cài đặt ứng dụng), việc sử dụng `Provider` (hoặc BLoC/Riverpod) là lựa chọn tối ưu để quản lý và chia sẻ dữ liệu dễ dàng.

**Source knowledge label:** State Management Strategies / Provider vs `setState()`.

**Trap:** Các phương án nhiễu: A. For simple UI updates; C. For animations; D. For navigation

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 19

---

## PRM393-Q0130

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-PURPOSE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What advantage does a single codebase provide in Flutter development?

- A. Higher memory usage
- B. Simpler UI customization
- C. Reduced development and maintenance effort
- D. Automatic database synchronization

**Correct answer:** **C. Reduced development and maintenance effort**

**Explanation from source:** Việc duy trì một codebase duy nhất cho nhiều nền tảng (iOS, Android, Web, Desktop) giúp đội ngũ phát triển không phải viết và duy trì 2-3 codebase riêng biệt bằng nhiều ngôn ngữ khác nhau (Swift, Kotlin, JS), từ đó giảm thiểu đáng kể thời gian phát triển, chi phí nhân sự và công sức bảo trì/sửa lỗi.

**Source knowledge label:** Mobile Development Concepts / Cross-Platform Advantages.

**Trap:** Các phương án nhiễu: A. Higher memory usage; B. Simpler UI customization; D. Automatic database synchronization

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 20

---

## PRM393-Q0131

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-MATERIALAPP`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Which widget is commonly used as the root of a Flutter app?

- A. Scaffold
- B. MaterialApp
- C. Container
- D. Column

**Correct answer:** **B. MaterialApp**

**Explanation from source:** `MaterialApp` (hoặc `CupertinoApp`) thường được đặt làm widget gốc (Root Widget) của toàn bộ ứng dụng Flutter. Nó khởi tạo các dịch vụ nền tảng cần thiết như hệ thống định tuyến (Navigator), Theme, Localization, và thiết lập các quy chuẩn Material Design.
- `Scaffold` được dùng làm khung bố cục chính cho từng màn hình riêng lẻ bên trong `MaterialApp`.

**Source knowledge label:** Flutter Core / App Root & `MaterialApp`.

**Trap:** Các phương án nhiễu: A. Scaffold; C. Container; D. Column

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 21

---

## PRM393-Q0132

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-REACTIVE-BUILD`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What triggers a rebuild of a widget?

- A. Navigation only
- B. Calling setState()
- C. Restarting the IDE
- D. Changing the SDK

**Correct answer:** **B. Calling setState()**

**Explanation from source:** Hành động gọi phương thức `setState()` trong `StatefulWidget` là cơ chế lập trình trực tiếp kích hoạt framework lên lịch gọi lại phương thức `build()` để tái tạo lại cây widget con.

**Source knowledge label:** Flutter Fundamentals / Widget Lifecycle & Rebuild Triggers.

**Trap:** Các phương án nhiễu: A. Navigation only; C. Restarting the IDE; D. Changing the SDK

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 23

---

## PRM393-Q0133

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STATE`
- `concept_id`: `PRM393-STATE-BLOC-BASICS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What does BLoC stand for?

- A. Business Logic Component
- B. Backend Logic Controller
- C. Build Logic Component
- D. Basic Logic Controller

**Correct answer:** **A. Business Logic Component**

**Explanation from source:** **BLoC** là viết tắt của **Business Logic Component** – kiến trúc quản lý trạng thái do các kỹ sư của Google giới thiệu tại sự kiện DartConf 2018, giúp tách rời hoàn toàn tầng giao diện (Presentation) khỏi tầng xử lý nghiệp vụ (Business Logic) thông qua Reactive Streams.

**Source knowledge label:** State Management / BLoC Architecture Pattern.

**Trap:** Các phương án nhiễu: B. Backend Logic Controller; C. Build Logic Component; D. Basic Logic Controller

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 24

---

## PRM393-Q0134

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-SLIVERS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which sliver is commonly used to display a scrolling list?

- A. SliverGrid
- B. SliverList
- C. SliverAppBar
- D. SliverFillRemaining

**Correct answer:** **B. SliverList**

**Explanation from source:** `SliverList` là thành phần sliver chuyên dùng để hiển thị một danh sách cuộn các widget con theo một chiều dọc tuyến tính bên trong `CustomScrollView` (tương đương với `ListView` nhưng hoạt động theo cơ chế sliver hiệu năng cao).
- `SliverGrid` dùng để hiển thị dạng lưới 2 chiều; `SliverAppBar` là thanh appbar co giãn.

**Source knowledge label:** Flutter UI / Slivers (`SliverList`).

**Trap:** Các phương án nhiễu: A. SliverGrid; C. SliverAppBar; D. SliverFillRemaining

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 26
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 36

---

## PRM393-Q0135

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-FORM-VALIDATION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** What happens if form validation fails?

- A. Form submits
- B. Error messages are shown
- C. App crashes
- D. Data is saved

**Correct answer:** **B. Error messages are shown**

**Explanation from source:** Khi gọi `_formKey.currentState!.validate()`, nếu có bất kỳ trường `TextFormField` nào không thỏa mãn quy tắc kiểm tra (validator trả về chuỗi thông báo lỗi thay vì `null`), form sẽ không cho phép submit và tự động hiển thị các dòng thông báo lỗi (Error messages) màu đỏ ngay bên dưới các ô nhập liệu tương ứng.

**Source knowledge label:** Flutter Forms / Validation Flow.

**Trap:** Các phương án nhiễu: A. Form submits; C. App crashes; D. Data is saved

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 27

---

## PRM393-Q0136

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-HTTP-STATUS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Which status code indicates resource not found?

- A. 200
- B. 301
- C. 404
- D. 500

**Correct answer:** **C. 404**

**Explanation from source:** Mã trạng thái HTTP **404 Not Found** thuộc nhóm lỗi client `4xx`, biểu thị rằng máy chủ không thể tìm thấy tài nguyên tương ứng với URL/URI được yêu cầu.
- 200: OK; 301: Moved Permanently; 500: Internal Server Error.

**Source knowledge label:** Networking Protocols / HTTP Status Codes.

**Trap:** Các phương án nhiễu: A. 200; B. 301; D. 500

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 31

---

## PRM393-Q0137

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-FLEX-ALIGNMENT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Which widget is most commonly used to arrange children vertically?

- A. Row
- B. Stack
- C. Column
- D. Expanded

**Correct answer:** **C. Column**

**Explanation from source:** Widget `Column` là widget bố cục cơ bản trong Flutter dùng để sắp xếp danh sách các widget con theo một **chiều dọc** (Vertical).
- `Row` sắp xếp theo chiều ngang; `Stack` xếp chồng theo chiều sâu.

**Source knowledge label:** Flutter UI Layout / `Column` Layout Widget.

**Trap:** Các phương án nhiễu: A. Row; B. Stack; D. Expanded

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 33

---

## PRM393-Q0138

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-ANIMATION`
- `concept_id`: `PRM393-ANIM-CURVES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which curve creates a bounce effect?

- A. linear
- B. easeIn
- C. bounceOut
- D. decelerate

**Correct answer:** **C. bounceOut**

**Explanation from source:** Trong hệ thống hoạt ảnh của Flutter, lớp `Curves` cung cấp nhiều đường cong chuyển động có sẵn. Trong đó, `Curves.bounceOut` tạo ra hiệu ứng chuyển động nảy lên nảy xuống giống như một quả bóng rơi xuống sàn và nảy nảy trước khi dừng lại hoàn toàn ở điểm đích.

**Source knowledge label:** Flutter Animations / Animation Curves (`Curves.bounceOut`).

**Trap:** Các phương án nhiễu: A. linear; B. easeIn; D. decelerate

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 34
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 38

---

## PRM393-Q0139

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-QUALITY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Which test runs fastest?

- A. Integration test
- B. Widget test
- C. Unit test
- D. Manual test

**Correct answer:** **C. Unit test**

**Explanation from source:** Trong kim tự tháp kiểm thử (Testing Pyramid):
- **Unit Test (Nhanh nhất):** Chỉ thực thi kiểm tra các hàm/logic thuần Dart trên CPU máy tính mà không cần khởi tạo framework giao diện hay thiết bị giả lập, thường chạy xong hàng trăm test chỉ trong vài giây.
- **Widget Test (Trung bình):** Cần khởi tạo môi trường giả lập cây widget của Flutter.
- **Integration Test (Chậm nhất):** Cần build và chạy toàn bộ ứng dụng trên thiết bị thật/máy ảo.

**Source knowledge label:** Software Testing / Testing Pyramid & Execution Performance.

**Trap:** Các phương án nhiễu: A. Integration test; B. Widget test; D. Manual test

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 35

---

## PRM393-Q0140

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-JSON-MODELS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Why should API responses be mapped to models?

- A. Reduce JSON size
- B. Ensure type safety
- C. Speed up UI
- D. Improve theme

**Correct answer:** **B. Ensure type safety**

**Explanation from source:** Khi nhận dữ liệu JSON dạng `Map<String, dynamic>` từ API, việc map (chuyển đổi) sang các class Model cụ thể với các thuộc tính định kiểu rõ ràng (`String`, `int`, `DateTime`...) đảm bảo tính **Type Safety** (an toàn kiểu dữ liệu).
- Điều này giúp tận dụng tính năng tự động hoàn thành mã (code completion) của IDE, bắt lỗi sai tên trường/kiểu dữ liệu ngay tại compile time thay vì bị crash khi chạy ứng dụng.

**Source knowledge label:** Data Serialization & Modeling / Model Classes & Type Safety.

**Trap:** Các phương án nhiễu: A. Reduce JSON size; C. Speed up UI; D. Improve theme

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 39

---

## PRM393-Q0141

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-FIREBASE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** Which Flutter service simplifies authentication implementation?

- A. sqflite
- B. Firebase Authentication
- C. Provider
- D. http

**Correct answer:** **B. Firebase Authentication**

**Explanation from source:** **Firebase Authentication** (thông qua package `firebase_auth`) là dịch vụ Backend-as-a-Service (BaaS) toàn diện của Google, cung cấp sẵn toàn bộ hệ thống xác thực người dùng (Email/Password, Google, Apple, Phone SMS, OAuth...) giúp lập trình viên tích hợp tính năng đăng nhập bảo mật nhanh chóng mà không cần tự xây dựng backend xác thực từ đầu.

**Source knowledge label:** Mobile Authentication & Backend Integration / Firebase Authentication.

**Trap:** Các phương án nhiễu: A. sqflite; C. Provider; D. http

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 43
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 15

---

## PRM393-Q0142

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TOOLING`
- `concept_id`: `PRM393-TOOL-SDK-SETUP`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 2
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`, `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the purpose of the Flutter SDK?

- A. To store application data permanently
- B. To provide tools and libraries for Flutter development
- C. To deploy applications directly to app stores
- D. To replace the operating system of a device

**Correct answer:** **B. To provide tools and libraries for Flutter development**

**Explanation from source:** **Flutter SDK (Software Development Kit)** là gói phần mềm cung cấp đầy đủ các công cụ biên dịch (compilers), công cụ dòng lệnh (Flutter CLI), engine kết xuất đồ họa, và kho thư viện mã nguồn phong phú (framework libraries) để phục vụ cho việc phát triển, kiểm thử và build ứng dụng Flutter.

**Source knowledge label:** Flutter SDK Fundamentals & Tooling.

**Trap:** Các phương án nhiễu: A. To store application data permanently; C. To deploy applications directly to app stores; D. To replace the operating system of a device

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 46
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 2

---

## PRM393-Q0143

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-GRIDVIEW`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-FE-RE`

**Question:** Which widget is suitable for displaying items in a grid layout?

- A. ListView
- B. Column
- C. GridView
- D. Stack

**Correct answer:** **C. GridView**

**Explanation from source:** `GridView` là widget chuyên dụng trong Flutter dùng để sắp xếp và hiển thị các phần tử con theo dạng lưới hai chiều (hàng và cột) có khả năng cuộn được (ví dụ: lưới sản phẩm thương mại điện tử, lưới ảnh thư viện).

**Source knowledge label:** Flutter UI Layout / Grid Layouts (`GridView`).

**Trap:** Các phương án nhiễu: A. ListView; B. Column; D. Stack

**Source occurrences:**
- `PRM393-EXAM-SU26-FE-RE` → `PRM393_SU26_FE_RE.md` → Câu 48

---

---

## PRM393-Q0144

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-SHARED-PREFERENCES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** Which method saves an integer in SharedPreferences?

- A. saveInt()
- B. putInt()
- C. setInt()
- D. writeInt()

**Correct answer:** **C. setInt()**

**Explanation from source:** Trong Flutter với package `shared_preferences`, đối tượng `SharedPreferences` cung cấp các phương thức bất đồng bộ để lưu dữ liệu nguyên thủy theo dạng key-value, bắt đầu bằng tiền tố `set...` như `setInt(String key, int value)`, `setString()`, `setBool()`, `setDouble()`, `setStringList()`.

**Source knowledge label:** Local Data Storage / SharedPreferences trong Flutter.

**Trap:** Các phương án nhiễu: A. saveInt(); B. putInt(); D. writeInt()

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 1

---

## PRM393-Q0145

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-PURPOSE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the primary role of widgets in Flutter?

- A. Managing databases
- B. Describing the user interface
- C. Handling network requests
- D. Compiling Dart code

**Correct answer:** **B. Describing the user interface**

**Explanation from source:** Trong Flutter, triết lý thiết kế cơ bản là "Everything is a Widget". Vai trò chính của widget là một cấu hình khai báo (declarative description) mô tả giao diện người dùng trông như thế nào dựa trên cấu hình và dữ liệu trạng thái hiện tại.

**Source knowledge label:** Flutter Core Fundamentals / Widgets & Declarative UI.

**Trap:** Các phương án nhiễu: A. Managing databases; C. Handling network requests; D. Compiling Dart code

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 5

---

## PRM393-Q0146

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-DART`
- `concept_id`: `PRM393-DART-ROLE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** Which keyword is used in Dart to pause execution until a Future completes?

- A. async
- B. await
- C. future
- D. delay

**Correct answer:** **B. await**

**Explanation from source:** Trong ngôn ngữ Dart, từ khóa `await` được đặt trước biểu thức `Future` trong một hàm `async` nhằm tạm dừng việc thực thi luồng tuần tự bên trong hàm đó cho tới khi Future hoàn thành và trả về kết quả.

**Source knowledge label:** Dart Language Fundamentals / Asynchronous Programming (async/await).

**Trap:** Các phương án nhiễu: A. async; C. future; D. delay

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 13

---

## PRM393-Q0147

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-PURPOSE`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What is one of the main advantages of Flutter?

- A. Requires separate codebases for Android and iOS
- B. Uses JavaScript as its primary language
- C. Enables building apps from a single codebase for multiple platforms
- D. Only supports mobile platforms

**Correct answer:** **C. Enables building apps from a single codebase for multiple platforms**

**Explanation from source:** Lợi thế hàng đầu của Flutter là khả năng phát triển ứng dụng đa nền tảng (iOS, Android, Web, Desktop) từ một nguồn mã nguồn duy nhất (single codebase), giúp tiết kiệm đáng kể thời gian và chi phí phát triển.

**Source knowledge label:** Flutter Overview & Architecture / Multi-Platform Advantages.

**Trap:** Các phương án nhiễu: A. Requires separate codebases for Android and iOS; B. Uses JavaScript as its primary language; D. Only supports mobile platforms

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 19

---

## PRM393-Q0148

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NETWORK`
- `concept_id`: `PRM393-NET-REST`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What format is most commonly used in REST APIs?

- A. XML
- B. CSV
- C. JSON
- D. Binary

**Correct answer:** **C. JSON**

**Explanation from source:** JSON (JavaScript Object Notation) là định dạng trao đổi dữ liệu dạng văn bản gọn nhẹ, dễ phân tích cú pháp (parse) và được sử dụng làm chuẩn phổ biến nhất trong các dịch vụ RESTful Web API.

**Source knowledge label:** Networking & REST API / JSON Data Format.

**Trap:** Các phương án nhiễu: A. XML; B. CSV; D. Binary

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 21

---

## PRM393-Q0149

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-NAVIGATION`
- `concept_id`: `PRM393-NAV-ROUTE-STACK`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the main concept behind navigation in Flutter using the Navigator widget?

- A. Screens are arranged in a grid layout
- B. Screens are managed using a stack (push and pop)
- C. Screens are loaded randomly
- D. Screens are replaced automatically without control

**Correct answer:** **B. Screens are managed using a stack (push and pop)**

**Explanation from source:** Cơ chế điều hướng trong Flutter thông qua widget `Navigator` hoạt động dựa trên mô hình ngăn xếp (Stack LIFO): mở màn hình mới bằng thao tác `push()` (đẩy vào stack) và quay lại màn hình trước bằng thao tác `pop()` (lấy ra khỏi stack).

**Source knowledge label:** Navigation & Routing / Navigator Stack (Push & Pop).

**Trap:** Các phương án nhiễu: A. Screens are arranged in a grid layout; C. Screens are loaded randomly; D. Screens are replaced automatically without control

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 22

---

## PRM393-Q0150

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-STORAGE`
- `concept_id`: `PRM393-STORAGE-SHARED-PREFERENCES`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the main limitation of SharedPreferences?

- A. Cannot persist data
- B. Only works on web
- C. Not suitable for large or complex data
- D. Requires SQL queries

**Correct answer:** **C. Not suitable for large or complex data**

**Explanation from source:** `SharedPreferences` lưu trữ dưới dạng key-value nguyên thủy đơn giản trong file XML/plist, không có cơ chế lập chỉ mục hay truy vấn quan hệ, nên không phù hợp để lưu trữ tập dữ liệu lớn hoặc cấu trúc dữ liệu quan hệ phức tạp.

**Source knowledge label:** Local Data Storage / SharedPreferences Limitations.

**Trap:** Các phương án nhiễu: A. Cannot persist data; B. Only works on web; D. Requires SQL queries

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 23

---

## PRM393-Q0151

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-FORMS`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What design principle improves form usability?

- A. Long forms
- B. Minimal validation
- C. Clear labels and feedback
- D. Hidden errors

**Correct answer:** **C. Clear labels and feedback**

**Explanation from source:** Để nâng cao tính khả dụng (usability) của biểu mẫu (form), giao diện cần cung cấp các nhãn dán rõ ràng (clear labels), thông điệp hướng dẫn và phản hồi lỗi xác thực (validation feedback) minh bạch ngay khi người dùng nhập dữ liệu.

**Source knowledge label:** UI/UX & Forms / Form Usability & User Feedback.

**Trap:** Các phương án nhiễu: A. Long forms; B. Minimal validation; D. Hidden errors

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 27

---

## PRM393-Q0152

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-AUTH`
- `concept_id`: `PRM393-AUTH-SECURITY`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** Which practice improves authentication security?

- A. Storing passwords locally
- B. Encrypting credentials
- C. Using HTTP
- D. Hardcoding tokens

**Correct answer:** **B. Encrypting credentials**

**Explanation from source:** Mã hóa thông tin đăng nhập (Encrypting credentials) và lưu trữ khóa/token an toàn trong bộ nhớ bảo mật (như Keychain trên iOS hay Keystore trên Android thông qua `flutter_secure_storage`) là thực hành tối quan trọng để bảo vệ dữ liệu người dùng.

**Source knowledge label:** Security & Authentication / Secure Storage & Credential Encryption.

**Trap:** Các phương án nhiễu: A. Storing passwords locally; C. Using HTTP; D. Hardcoding tokens

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 29

---

## PRM393-Q0153

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-CONTAINER`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What does the Padding widget do?

- A. Adds space inside a widget
- B. Adds space between widgets
- C. Aligns widgets
- D. Controls widget size

**Correct answer:** **A. Adds space inside a widget**

**Explanation from source:** Widget `Padding` trong Flutter dùng để thêm khoảng cách trống (khoảng đệm bên trong) bao quanh widget con của nó theo các cạnh được chỉ định bởi `EdgeInsets`.

**Source knowledge label:** Flutter Layout Widgets / Padding & Insets.

**Trap:** Các phương án nhiễu: B. Adds space between widgets; C. Aligns widgets; D. Controls widget size

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 31

---

## PRM393-Q0154

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-UI`
- `concept_id`: `PRM393-UI-FORM-VALIDATION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** What is the purpose of onSaved callback?

- A. Validate input
- B. Store form values
- C. Reset form
- D. Display errors

**Correct answer:** **B. Store form values**

**Explanation from source:** Callback `onSaved` trong các widget nhập liệu dạng `FormField`/`TextFormField` được thực thi khi gọi `FormState.save()`, có nhiệm vụ lấy dữ liệu nhập vào và lưu/gán vào các biến hoặc model dữ liệu tương ứng.

**Source knowledge label:** Forms & User Input / FormField onSaved Callback.

**Trap:** Các phương án nhiễu: A. Validate input; C. Reset form; D. Display errors

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 34

---

## PRM393-Q0155

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-FRAMEWORK`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `medium`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** In Flutter architecture, which layer is responsible for rendering and uses C++ with Skia?

- A. Framework Layer
- B. Engine Layer
- C. Embedder Layer
- D. Widget Layer

**Correct answer:** **B. Engine Layer**

**Explanation from source:** Tầng Engine (Flutter Engine) được viết chủ yếu bằng C/C++, bao gồm thư viện đồ họa Skia (hoặc Impeller) đảm nhiệm việc kết xuất đồ họa cấp thấp (low-level rendering), Dart runtime, và các dịch vụ nền tảng.

**Source knowledge label:** Flutter Overview & Architecture / Engine Layer Architecture.

**Trap:** Các phương án nhiễu: A. Framework Layer; C. Embedder Layer; D. Widget Layer

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 37

---

## PRM393-Q0156

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-INTEGRATION`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** According to the testing pyramid, which type of test should be used the least?

- A. Unit Tests
- B. Widget Tests
- C. Integration Tests
- D. Debug Tests

**Correct answer:** **C. Integration Tests**

**Explanation from source:** Theo mô hình Kim tự tháp kiểm thử phần mềm (Testing Pyramid), Integration Tests nằm trên đỉnh chóp và chiếm số lượng ít nhất do chi phí tạo lập, thời gian thực thi lâu và độ phức tạp cao hơn so với Unit Tests và Widget Tests.

**Source knowledge label:** Software Testing / Testing Pyramid Strategy.

**Trap:** Các phương án nhiễu: A. Unit Tests; B. Widget Tests; D. Debug Tests

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 42

---

## PRM393-Q0157

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-FLUTTER-CORE`
- `concept_id`: `PRM393-FLUTTER-MATERIALAPP`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** Which widget is primarily used as the structural foundation of a Material Design screen in Flutter?

- A. Container
- B. Scaffold
- C. Column
- D. ListView

**Correct answer:** **B. Scaffold**

**Explanation from source:** `Scaffold` là widget nền tảng xây dựng khung cấu trúc chuẩn cho màn hình Material Design, cung cấp các vị trí bố cục mặc định cho AppBar, Body, FloatingActionButton, Drawer, BottomNavigationBar.

**Source knowledge label:** Flutter UI & Material Design / Scaffold Layout.

**Trap:** Các phương án nhiễu: A. Container; C. Column; D. ListView

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 46

---

## PRM393-Q0158

- `subject_id`: `PRM393`
- `chapter_id`: `PRM393-CH-TESTING`
- `concept_id`: `PRM393-TEST-UNIT`
- `type`: `single_choice`
- `quality_status`: `clean`
- `difficulty`: `easy`
- `frequency`: 1
- `source_exams`: `PRM393-EXAM-SU26-B5-FE`

**Question:** Which package is commonly used for Flutter testing?

- A. flutter_test
- B. provider
- C. http
- D. sqflite

**Correct answer:** **A. flutter_test**

**Explanation from source:** `flutter_test` là gói thư viện kiểm thử chính thức của Flutter SDK, cung cấp đầy đủ các tiện ích để viết và thực thi Unit Tests và Widget Tests.

**Source knowledge label:** Software Testing / flutter_test Package.

**Trap:** Các phương án nhiễu: B. provider; C. http; D. sqflite

**Source occurrences:**
- `PRM393-EXAM-SU26-B5-FE` → `PRM393_SU26_B5_FE.md` → Câu 49

