# PRM393 Master Knowledge

> Chỉ tổng hợp từ corpus 4 đề đã chốt. Không thêm kiến thức ngoài để sửa hoặc mở rộng source.

# Concept: CurvedAnimation and animation curves

**ID:** `PRM393-ANIM-CURVES`  
**Chapter:** Animations (`PRM393-CH-ANIMATION`)  
**Topic:** Curves  
**Frequency:** 2 question occurrences / 2 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- CurvedAnimation trong Flutter dùng để áp dụng một đường cong phi tuyến (Curves như easeIn, easeInOut, bounceOut...) vào một AnimationController, tạo ra các hiệu ứng chuyển động tự nhiên và sinh động hơn chuyển động tuyến tính thông thường.
- Trong hệ thống hoạt ảnh của Flutter, lớp Curves cung cấp nhiều đường cong chuyển động có sẵn.
- Trong đó, Curves.bounceOut tạo ra hiệu ứng chuyển động nảy lên nảy xuống giống như một quả bóng rơi xuống sàn và nảy nảy trước khi dừng lại hoàn toàn ở điểm đích.

## Từ khóa phải nhớ
- **Animation curve behavior**
- **bounceOut**
- **CurvedAnimation and animation curves**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does CurvedAnimation provide?”, source chọn **Animation curve behavior**; phương án nhiễu gồm: Layout control, State updates, Navigation.
- Với dạng hỏi “Which curve creates a bounce effect?”, source chọn **bounceOut**; phương án nhiễu gồm: linear, easeIn, decelerate.

## Các cách đề từng hỏi
- `PRM393-Q0010` — What does CurvedAnimation provide?
- `PRM393-Q0138` — Which curve creates a bounce effect?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Tween and AnimatedBuilder

**ID:** `PRM393-ANIM-EXPLICIT`  
**Chapter:** Animations (`PRM393-CH-ANIMATION`)  
**Topic:** Explicit animation  
**Frequency:** 2 question occurrences / 2 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Trong hệ thống Animation của Flutter, Tween (viết tắt của in-between) định nghĩa một dải giá trị biến thiên tuyến tính từ giá trị bắt đầu (begin) đến giá trị kết thúc (end) (ví dụ: đổi màu từ đỏ sang xanh, hoặc biến đổi giá trị từ 0.0 đến 100.0).
- AnimatedBuilder nhận vào một animation (thường là AnimationController hoặc CurvedAnimation) đóng vai trò là Listenable.
- Mỗi khi giá trị animation thay đổi theo từng frame, AnimatedBuilder sẽ tự động gọi hàm builder để render lại phần giao diện chuyển động mà không cần phải gọi setState() ở toàn bộ widget cha.

## Từ khóa phải nhớ
- **Value range for animation**
- **AnimatedBuilder**
- **Tween and AnimatedBuilder**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does a Tween define?”, source chọn **Value range for animation**; phương án nhiễu gồm: Animation speed, UI layout, State logic.
- Với dạng hỏi “Which widget rebuilds automatically during animation?”, source chọn **AnimatedBuilder**; phương án nhiễu gồm: FutureBuilder, StreamBuilder, LayoutBuilder.

## Các cách đề từng hỏi
- `PRM393-Q0090` — What does a Tween define?
- `PRM393-Q0114` — Which widget rebuilds automatically during animation?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Implicit animations and AnimatedSwitcher

**ID:** `PRM393-ANIM-IMPLICIT`  
**Chapter:** Animations (`PRM393-CH-ANIMATION`)  
**Topic:** Implicit animation  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- AnimatedSwitcher là một Implicit Animation widget có khả năng tự động thực hiện hiệu ứng chuyển cảnh mềm mại (fade, scale...) giữa widget hiện tại và widget mới khi widget con (child) được thay thế (dựa trên Key của widget con).
- Implicit Animations (như AnimatedContainer, AnimatedOpacity, AnimatedPadding) là các widget hoạt ảnh tự động nội suy giữa các giá trị khi thuộc tính thay đổi mà lập trình viên không cần phải tự tạo và điều khiển AnimationController.
- Implicit Animations (Hoạt ảnh ngầm định) là tập hợp các widget bắt đầu bằng tiền tố Animated...
- (như AnimatedContainer, AnimatedOpacity, AnimatedPadding, AnimatedAlign).
- Các widget này tự động xử lý animation nội suy mượt mà mỗi khi thuộc tính của chúng thay đổi mà lập trình viên không cần tự khởi tạo và quản lý AnimationController.

## Từ khóa phải nhớ
- **AnimatedSwitcher**
- **Animation without controller**
- **AnimatedContainer**
- **Implicit animations and AnimatedSwitcher**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget animates between two widgets?”, source chọn **AnimatedSwitcher**; phương án nhiễu gồm: AnimatedOpacity, AnimatedAlign, AnimatedSize.
- Với dạng hỏi “What is implicit animation?”, source chọn **Animation without controller**; phương án nhiễu gồm: Manual animation control, API animation, Navigation animation.
- Với dạng hỏi “Which widget is an example of implicit animation?”, source chọn **AnimatedContainer**; phương án nhiễu gồm: AnimationController, Tween, Ticker.

## Các cách đề từng hỏi
- `PRM393-Q0092` — Which widget animates between two widgets?
- `PRM393-Q0029` — What is implicit animation?
- `PRM393-Q0097` — Which widget is an example of implicit animation?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: v-sync and animation resource disposal

**ID:** `PRM393-ANIM-RESOURCE`  
**Chapter:** Animations (`PRM393-CH-ANIMATION`)  
**Topic:** Lifecycle  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- AnimationController gắn liền với cơ chế Ticker lắng nghe các khung hình của hệ thống.
- Nếu không gọi phương thức controller.dispose() khi widget bị hủy, controller sẽ tiếp tục chạy ngầm, gây rò rỉ bộ nhớ (memory leaks) và tốn pin.
- V-Sync (Vertical Synchronization) trong Flutter (được cung cấp thông qua mixin SingleTickerProviderStateMixin hoặc TickerProviderStateMixin) có vai trò đồng bộ hóa nhịp của Animation Controller với tần số quét làm mới của màn hình phần cứng (thường là 60Hz hoặc 120Hz).
- Nhờ V-Sync, animation chỉ tính toán và kích hoạt vẽ lại khi màn hình thực sự sẵn sàng render một khung hình mới, và tự động tạm dừng khi widget ra khỏi màn hình, giúp tiết kiệm tối đa pin và tài nguyên CPU/GPU.

## Từ khóa phải nhớ
- **Prevent memory leaks**
- **Optimize animation resources**
- **v-sync and animation resource disposal**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why should animations be disposed properly?”, source chọn **Prevent memory leaks**; phương án nhiễu gồm: Improve UI, Speed up builds, Fix layout.
- Với dạng hỏi “What is the role of v-sync in Flutter?”, source chọn **Optimize animation resources**; phương án nhiễu gồm: Sync data, Control layout, Handle navigation.

## Các cách đề từng hỏi
- `PRM393-Q0019` — Why should animations be disposed properly?
- `PRM393-Q0109` — What is the role of v-sync in Flutter?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Architecture purpose and early decisions

**ID:** `PRM393-ARCH-PURPOSE`  
**Chapter:** Architecture & Software Engineering (`PRM393-CH-ARCHITECTURE`)  
**Topic:** Architecture  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Việc thống nhất và lựa chọn kiến trúc phần mềm (như Clean Architecture, Layered Architecture, BLoC/MVVM) ngay từ đầu giúp cấu trúc code nhất quán, giảm thiểu rủi ro phải tái cấu trúc toàn diện (refactoring) tốn kém khi ứng dụng phát triển lớn hơn.
- Mục đích cốt lõi của Kiến trúc ứng dụng (App Architecture - như Clean Architecture, MVVM, BLoC Pattern) là tổ chức và chuẩn hóa cấu trúc mã nguồn (Organize code structure).
- Kiến trúc giúp phân tách rõ ràng trách nhiệm giữa các tầng (Separation of Concerns), giảm sự phụ thuộc chồng chéo (Loose Coupling), giúp dự án dễ bảo trì, dễ mở rộng quy mô khi nhiều lập trình viên cùng làm việc và thuận tiện cho việc kiểm thử tự động.

## Từ khóa phải nhớ
- **Reduce refactoring cost**
- **Organize code structure**
- **Architecture purpose and early decisions**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why should architecture be decided early?”, source chọn **Reduce refactoring cost**; phương án nhiễu gồm: Avoid UI work, Improve animations, Change theme.
- Với dạng hỏi “What is the main purpose of app architecture?”, source chọn **Organize code structure**; phương án nhiễu gồm: UI design, Improve animations, Handle API.

## Các cách đề từng hỏi
- `PRM393-Q0081` — Why should architecture be decided early?
- `PRM393-Q0118` — What is the main purpose of app architecture?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Clean Architecture

**ID:** `PRM393-ARCH-CLEAN`  
**Chapter:** Architecture & Software Engineering (`PRM393-CH-ARCHITECTURE`)  
**Topic:** Architecture  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Clean Architecture phân tách ứng dụng thành các lớp độc lập (Presentation, Domain, Data), giúp mã nguồn giảm bớt sự phụ thuộc chặt chẽ, dễ bảo trì, dễ mở rộng tính năng và rất thuận tiện để viết kiểm thử tự động (Unit Test / Mocking).

## Từ khóa phải nhớ
- **Easier maintenance and testing**
- **Clean Architecture**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is clean architecture beneficial?”, source chọn **Easier maintenance and testing**; phương án nhiễu gồm: Fewer files, Better UI, Faster builds.

## Các cách đề từng hỏi
- `PRM393-Q0001` — Why is clean architecture beneficial?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Requirements analysis

**ID:** `PRM393-SE-SDLC`  
**Chapter:** Architecture & Software Engineering (`PRM393-CH-ARCHITECTURE`)  
**Topic:** SDLC  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Trong quy trình phát triển phần mềm (SDLC), giai đoạn Phân tích yêu cầu (Requirements Analysis) có nhiệm vụ thu thập, phân tích và làm rõ các nhu cầu của khách hàng/người dùng trước khi bước vào giai đoạn thiết kế và lập trình.

## Từ khóa phải nhớ
- **Analysis**
- **Requirements analysis**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which phase involves gathering requirements?”, source chọn **Analysis**; phương án nhiễu gồm: Implementation, Design, Testing.

## Các cách đề từng hỏi
- `PRM393-Q0013` — Which phase involves gathering requirements?

## Source Exams
- `PRM393-EXAM-SP26-FE`

---

# Concept: UI/state separation and Repository pattern

**ID:** `PRM393-ARCH-SEPARATION`  
**Chapter:** Architecture & Software Engineering (`PRM393-CH-ARCHITECTURE`)  
**Topic:** Separation of concerns  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Phân tách rõ ràng giữa tầng giao diện (UI) và tầng quản lý trạng thái/logic nghiệp vụ (State/Business Logic) tuân thủ nguyên lý Separation of Concerns, giúp mã nguồn dễ đọc, dễ bảo trì, dễ mở rộng và thuận tiện cho việc viết unit test.
- Repository Pattern đóng vai trò là một tầng trung gian trừu tượng hóa việc truy xuất dữ liệu nằm giữa tầng nghiệp vụ/UI và các nguồn dữ liệu cụ thể (Remote API, Local SQLite Database, Cache).
- Tầng UI chỉ cần yêu cầu dữ liệu từ Repository mà không cần quan tâm dữ liệu được lấy từ mạng hay cơ sở dữ liệu cục bộ, giúp code sạch, dễ thay đổi nguồn lưu trữ và dễ mock khi viết test.

## Từ khóa phải nhớ
- **Improve maintainability**
- **Repository pattern**
- **UI/state separation and Repository pattern**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is separating UI and state logic recommended?”, source chọn **Improve maintainability**; phương án nhiễu gồm: Reduce code size, Faster execution, Better animations.
- Với dạng hỏi “Which pattern separates storage logic from UI?”, source chọn **Repository pattern**; phương án nhiễu gồm: MVC, Singleton, Factory.

## Các cách đề từng hỏi
- `PRM393-Q0059` — Why is separating UI and state logic recommended?
- `PRM393-Q0122` — Which pattern separates storage logic from UI?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Technical debt

**ID:** `PRM393-ARCH-TECH-DEBT`  
**Chapter:** Architecture & Software Engineering (`PRM393-CH-ARCHITECTURE`)  
**Topic:** Software quality  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Nợ kỹ thuật (Technical Debt) là chi phí phát sinh trong tương lai (tốn thêm thời gian bảo trì, sửa lỗi, khó mở rộng) khi lập trình viên lựa chọn các giải pháp tạm bợ, thiết kế kém chất lượng hoặc bỏ qua kiến trúc chuẩn để kịp tiến độ ngắn hạn.

## Từ khóa phải nhớ
- **Future cost of poor design decisions**
- **Technical debt**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is technical debt?”, source chọn **Future cost of poor design decisions**; phương án nhiễu gồm: UI lag, Memory usage, API limit.

## Các cách đề từng hỏi
- `PRM393-Q0028` — What is technical debt?

## Source Exams
- `PRM393-EXAM-SP26-FE`

---

# Concept: Git and version control

**ID:** `PRM393-SE-VERSION-CONTROL`  
**Chapter:** Architecture & Software Engineering (`PRM393-CH-ARCHITECTURE`)  
**Topic:** Version control  
**Frequency:** 2 question occurrences / 2 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★★☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Hệ thống quản lý phiên bản (như Git) đóng vai trò then chốt trong việc theo dõi lịch sử chỉnh sửa mã nguồn, quản lý các nhánh phát triển, hỗ trợ làm việc nhóm và rollback khi gặp sự cố.
- Git là hệ thống quản lý phiên bản phân tán (Distributed Version Control System) tiêu chuẩn và phổ biến nhất trong phát triển phần mềm hiện đại, hỗ trợ quản lý mã nguồn, phân nhánh (branching) và cộng tác nhóm.

## Từ khóa phải nhớ
- **Track and manage code changes**
- **Git**
- **Git and version control**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is version control critical?”, source chọn **Track and manage code changes**; phương án nhiễu gồm: UI changes, Improve animations, Store data.
- Với dạng hỏi “Which tool is commonly used for version control?”, source chọn **Git**; phương án nhiễu gồm: SVN, FTP, ZIP.

## Các cách đề từng hỏi
- `PRM393-Q0062` — Why is version control critical?
- `PRM393-Q0096` — Which tool is commonly used for version control?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Centralized authentication state

**ID:** `PRM393-AUTH-CENTRALIZED-STATE`  
**Chapter:** Authentication & Session Security (`PRM393-CH-AUTH`)  
**Topic:** Auth state  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Quản lý trạng thái xác thực tại một nơi tập trung (Centralized Auth State) giúp kiểm soát quyền truy cập đồng bộ và nhất quán trên toàn bộ ứng dụng, tránh tình trạng rò rỉ quyền hoặc không đồng nhất giữa các màn hình.

## Từ khóa phải nhớ
- **Ensure consistent access control**
- **Centralized authentication state**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why should authentication state be centralized?”, source chọn **Ensure consistent access control**; phương án nhiễu gồm: Reduce UI code, Improve animations, Simplify layout.

## Các cách đề từng hỏi
- `PRM393-Q0039` — Why should authentication state be centralized?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: StreamBuilder for authentication state

**ID:** `PRM393-AUTH-STREAM`  
**Chapter:** Authentication & Session Security (`PRM393-CH-AUTH`)  
**Topic:** Auth state  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Trạng thái xác thực đăng nhập thường được lắng nghe qua một luồng dữ liệu liên tục (Stream).
- StreamBuilder là widget chuyên dụng giúp tự động lắng nghe luồng này và render lại giao diện phù hợp (Login Screen hoặc Home Screen) mỗi khi có sự kiện Auth mới.

## Từ khóa phải nhớ
- **StreamBuilder**
- **StreamBuilder for authentication state**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Flutter widget reacts to authentication state changes?”, source chọn **StreamBuilder**; phương án nhiễu gồm: FutureBuilder, ListView, Form.

## Các cách đề từng hỏi
- `PRM393-Q0027` — Which Flutter widget reacts to authentication state changes?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Secure authentication

**ID:** `PRM393-AUTH-SECURITY`  
**Chapter:** Authentication & Session Security (`PRM393-CH-AUTH`)  
**Topic:** Authentication  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Xác thực an toàn (Secure Authentication) là yêu cầu tối quan trọng để bảo vệ dữ liệu cá nhân, thông tin nhạy cảm của người dùng và ngăn chặn các truy cập trái phép vào tài nguyên hệ thống.

## Từ khóa phải nhớ
- **Protect user data**
- **Secure authentication**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is secure authentication critical in mobile apps?”, source chọn **Protect user data**; phương án nhiễu gồm: UI quality, Reduce code, Improve speed.

## Các cách đề từng hỏi
- `PRM393-Q0003` — Why is secure authentication critical in mobile apps?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Firebase Authentication

**ID:** `PRM393-AUTH-FIREBASE`  
**Chapter:** Authentication & Session Security (`PRM393-CH-AUTH`)  
**Topic:** Authentication service  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Firebase Authentication (thông qua package firebase_auth) là dịch vụ Backend-as-a-Service (BaaS) toàn diện của Google, cung cấp sẵn toàn bộ hệ thống xác thực người dùng (Email/Password, Google, Apple, Phone SMS, OAuth...) giúp lập trình viên tích hợp tính năng đăng nhập bảo mật nhanh chóng mà không cần tự xây dựng backend xác thực từ đầu.

## Từ khóa phải nhớ
- **Firebase Authentication**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Flutter service simplifies authentication implementation?”, source chọn **Firebase Authentication**; phương án nhiễu gồm: sqflite, Provider, http.

## Các cách đề từng hỏi
- `PRM393-Q0141` — Which Flutter service simplifies authentication implementation?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Route guard

**ID:** `PRM393-AUTH-ROUTE-GUARD`  
**Chapter:** Authentication & Session Security (`PRM393-CH-AUTH`)  
**Topic:** Route protection  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Pattern "Route Guard" (hoặc Guard) là mô hình thiết kế dùng để kiểm tra điều kiện (như trạng thái xác thực/đăng nhập của người dùng) trước khi cho phép điều hướng và hiển thị màn hình đích.
- Nếu chưa xác thực, Guard sẽ chuyển hướng người dùng về trang đăng nhập.

## Từ khóa phải nhớ
- **Guard**
- **Route guard**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget pattern protects authenticated routes?”, source chọn **Guard**; phương án nhiễu gồm: Navigator, Route protection, Middleware.
- ⚠️ Concept này có ít nhất một master question bị flag; xem `06_PRM393_REVIEW_ISSUES.md` trước khi dùng cho Exam Mode chuẩn.

## Các cách đề từng hỏi
- `PRM393-Q0051` — Which widget pattern protects authenticated routes?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Login, logout, access token and refresh token

**ID:** `PRM393-AUTH-SESSION-TOKEN`  
**Chapter:** Authentication & Session Security (`PRM393-CH-AUTH`)  
**Topic:** Session management  
**Frequency:** 5 question occurrences / 4 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- Sau khi xác thực đăng nhập thành công, hệ thống sẽ khởi tạo phiên làm việc của người dùng (User session starts), lưu token và cho phép người dùng truy cập các tính năng được bảo vệ.
- Refresh token là mã định danh có thời hạn dài, được dùng để gửi lên server yêu cầu cấp một Access token mới khi Access token cũ hết hạn mà người dùng không cần phải thực hiện đăng nhập lại từ đầu.
- Trong các hệ thống xác thực (như JWT, OAuth), token là chuỗi chứng chỉ truy cập tạm thời được cấp sau khi định danh thành công, cho phép client gửi kèm trong các request để chứng minh quyền truy cập tài nguyên.
- Chức năng Đăng xuất (Logout) có vai trò bảo mật thiết yếu: kết thúc phiên làm việc của người dùng một cách an toàn bằng cách hủy token xác thực (cả ở client và thông báo thu hồi token trên server), xóa dữ liệu nhạy cảm lưu tạm trong cache/ bộ nhớ, ngăn chặn người khác tiếp tục sử dụng ứng dụng khi cầm vào thiết bị.

## Từ khóa phải nhớ
- **User session starts**
- **Extend session without re-login**
- **Temporary access credential**
- **End user session securely**
- **Login, logout, access token and refresh token**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What happens after successful login?”, source chọn **User session starts**; phương án nhiễu gồm: App closes, Theme changes, Navigation resets.
- Với dạng hỏi “What is refresh token used for?”, source chọn **Extend session without re-login**; phương án nhiễu gồm: UI refresh, Theme update, Navigation reset.
- Với dạng hỏi “What is a token in authentication systems?”, source chọn **Temporary access credential**; phương án nhiễu gồm: UI key, Database ID, Theme value.
- Với dạng hỏi “Why is logout functionality important?”, source chọn **End user session securely**; phương án nhiễu gồm: Free memory, Improve UI, Change theme.

## Các cách đề từng hỏi
- `PRM393-Q0044` — What happens after successful login?
- `PRM393-Q0086` — What is refresh token used for?
- `PRM393-Q0089` — What is a token in authentication systems?
- `PRM393-Q0125` — Why is logout functionality important?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: List ordered collection

**ID:** `PRM393-DART-LIST`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** Collections  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- List trong Dart là một tập hợp các phần tử có thứ tự tuần tự (ordered collection), cho phép truy xuất các phần tử nhanh chóng qua chỉ số vị trí (index).

## Từ khóa phải nhớ
- **List**
- **List ordered collection**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Dart data structure is best suited for storing an ordered collection of items?”, source chọn **List**; phương án nhiễu gồm: Set, Map, Queue.

## Các cách đề từng hỏi
- `PRM393-Q0030` — Which Dart data structure is best suited for storing an ordered collection of items?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Map key-value collection

**ID:** `PRM393-DART-MAP`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** Collections  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Map trong Dart là tập hợp lưu trữ dữ liệu có cấu trúc theo cặp khóa - giá trị (key-value), cho phép truy xuất, cập nhật giá trị nhanh chóng thông qua khóa (key) tương ứng.

## Từ khóa phải nhớ
- **Storing key-value pairs**
- **Map key-value collection**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the main benefit of using Maps in Dart?”, source chọn **Storing key-value pairs**; phương án nhiễu gồm: Storing values without keys, Rendering UI components, Managing asynchronous tasks.

## Các cách đề từng hỏi
- `PRM393-Q0065` — What is the main benefit of using Maps in Dart?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Dart role in Flutter

**ID:** `PRM393-DART-ROLE`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** Language role  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- Dart là ngôn ngữ lập trình đa năng (general-purpose), nhưng được Google thiết kế và tối ưu hóa đặc biệt tập trung vào việc xây dựng giao diện người dùng nhanh chóng, mượt mà (hỗ trợ cả JIT cho Hot Reload và AOT cho Native compilation).
- Dart được tối ưu hóa đặc biệt cho client development với cú pháp hướng đối tượng quen thuộc, hỗ trợ cả JIT (Just-In-Time cho Hot Reload nhanh khi dev) và AOT (Ahead-Of-Time biên dịch mã máy tối ưu khi release), đồng thời quản lý UI declarative và async logic mượt mà.
- Toàn bộ ứng dụng Flutter và bản thân framework Flutter được lập trình bằng ngôn ngữ Dart – ngôn ngữ hướng đối tượng hiện đại do Google phát triển.

## Từ khóa phải nhớ
- **General-purpose programming with UI focus**
- **It supports both UI and application logic efficiently**
- **Dart**
- **Dart role in Flutter**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is Dart primarily designed for in the Flutter ecosystem?”, source chọn **General-purpose programming with UI focus**; phương án nhiễu gồm: Database management, User interface development, Network security.
- Với dạng hỏi “Why is Dart considered suitable for Flutter development?”, source chọn **It supports both UI and application logic efficiently**; phương án nhiễu gồm: It is only used for backend systems, It replaces native languages, It does not support asynchronous programming.
- Với dạng hỏi “Which programming language is used to develop Flutter applications?”, source chọn **Dart**; phương án nhiễu gồm: Kotlin, Swift, JavaScript.
- ⚠️ Concept này có ít nhất một master question bị flag; xem `06_PRM393_REVIEW_ISSUES.md` trước khi dùng cho Exam Mode chuẩn.

## Các cách đề từng hỏi
- `PRM393-Q0002` — What is Dart primarily designed for in the Flutter ecosystem?
- `PRM393-Q0071` — Why is Dart considered suitable for Flutter development?
- `PRM393-Q0126` — Which programming language is used to develop Flutter applications?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Packages and imports

**ID:** `PRM393-DART-PACKAGES`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** Modularization  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Dart tổ chức và module hóa mã nguồn thông qua hệ thống các packages và thư viện, sử dụng câu lệnh import (và export) để tái sử dụng mã nguồn giữa các file và các dự án khác nhau.

## Từ khóa phải nhớ
- **Packages and imports**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Dart feature helps organize code into reusable libraries?”, source chọn **Packages and imports**; phương án nhiễu gồm: Widgets, Hot reload, Layout constraints.

## Các cách đề từng hỏi
- `PRM393-Q0085` — Which Dart feature helps organize code into reusable libraries?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Classes and objects

**ID:** `PRM393-DART-OOP`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** OOP  
**Frequency:** 4 question occurrences / 2 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Dart là ngôn ngữ lập trình hướng đối tượng thuần túy; nền tảng cốt lõi của OOP trong Dart được thể hiện qua Khái niệm Lớp (Classes) và Đối tượng (Objects).
- Trong lập trình hướng đối tượng (OOP) và Dart, Class là bản thiết kế/khuôn mẫu định nghĩa các thuộc tính (fields/properties) và hành vi (methods) để từ đó khởi tạo ra các đối tượng (objects/instances).

## Từ khóa phải nhớ
- **Classes and objects**
- **A blueprint for creating objects**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Dart feature supports object-oriented programming?”, source chọn **Classes and objects**; phương án nhiễu gồm: Widgets, Hot reload, Layout builders.
- Với dạng hỏi “What does a Dart class primarily represent?”, source chọn **A blueprint for creating objects**; phương án nhiễu gồm: A UI widget only, A database table, A network request.

## Các cách đề từng hỏi
- `PRM393-Q0015` — Which Dart feature supports object-oriented programming?
- `PRM393-Q0067` — What does a Dart class primarily represent?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Generics

**ID:** `PRM393-DART-GENERICS`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** Type system  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Generics (Generic Programming với cú pháp kiểu tham số hóa <T>) cho phép tạo ra các class, interface, method dùng chung có thể hoạt động linh hoạt với nhiều kiểu dữ liệu khác nhau mà vẫn đảm bảo tính an toàn kiểu dữ liệu (Type Safety) ngay tại thời điểm biên dịch.

## Từ khóa phải nhớ
- **Generics**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Dart feature allows defining reusable, type-safe components?”, source chọn **Generics**; phương án nhiễu gồm: Mixins, Futures, Streams.

## Các cách đề từng hỏi
- `PRM393-Q0091` — Which Dart feature allows defining reusable, type-safe components?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Sound null safety

**ID:** `PRM393-DART-NULL-SAFETY`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** Type system  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Với tính năng Sound Null Safety trong Dart, mọi biến non-nullable (không có dấu ?) bắt buộc phải có giá trị khởi tạo trước khi được sử dụng.
- Nếu không khởi tạo, trình biên dịch sẽ báo lỗi ngay tại thời điểm biên dịch (Compile-time error).
- Tính năng Sound Null Safety trong Dart phân biệt rõ ràng giữa kiểu dữ liệu không thể null (int, String) và kiểu dữ liệu có thể null (int?, String?).
- Trình biên dịch sẽ phân tích luồng code tĩnh và bắt buộc xử lý trường hợp null ngay tại thời điểm biên dịch (Compile time), triệt tiêu hoàn toàn lỗi kinh điển "Null Pointer Exception" (hay "NoSuchMethodError on null") khi ứng dụng chạy.

## Từ khóa phải nhớ
- **A compile-time error occurs**
- **Null safety**
- **Sound null safety**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What happens if a non-nullable variable is not initialized in Dart?”, source chọn **A compile-time error occurs**; phương án nhiễu gồm: The app runs normally, A runtime exception occurs, The value becomes null automatically.
- Với dạng hỏi “Which feature of Dart helps prevent null reference errors at compile time?”, source chọn **Null safety**; phương án nhiễu gồm: Dynamic typing, Hot reload, Asynchronous execution.

## Các cách đề từng hỏi
- `PRM393-Q0005` — What happens if a non-nullable variable is not initialized in Dart?
- `PRM393-Q0128` — Which feature of Dart helps prevent null reference errors at compile time?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: const and final

**ID:** `PRM393-DART-CONST-FINAL`  
**Chapter:** Dart Language (`PRM393-CH-DART`)  
**Topic:** Variables  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Từ khóa const trong Dart dùng để định nghĩa các hằng số có giá trị cố định được xác định ngay tại thời điểm biên dịch (compile-time constant).
- Trong Dart, từ khóa final khai báo một biến "chỉ gán một lần" (single-assignment).
- Giá trị của biến final có thể được tính toán và gán tại thời điểm Runtime (ví dụ từ kết quả API hay hàm khởi tạo), nhưng một khi đã được gán thì giá trị của nó sẽ cố định và không thể bị gán lại (reassigned).

## Từ khóa phải nhớ
- **const**
- **The variable value is fixed after assignment**
- **const and final**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Dart keyword is used to define a constant value at compile time?”, source chọn **const**; phương án nhiễu gồm: final, static, var.
- Với dạng hỏi “What does the final keyword indicate in Dart?”, source chọn **The variable value is fixed after assignment**; phương án nhiễu gồm: The variable can be reassigned later, The variable is global, The variable is private.

## Các cách đề từng hỏi
- `PRM393-Q0043` — Which Dart keyword is used to define a constant value at compile time?
- `PRM393-Q0107` — What does the final keyword indicate in Dart?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Release APK and release distribution

**ID:** `PRM393-DEPLOY-BUILD-RELEASE`  
**Chapter:** Deployment & Release (`PRM393-CH-DEPLOYMENT`)  
**Topic:** Build & distribution  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Lệnh flutter build apk (mặc định ở chế độ release) sẽ biên dịch toàn bộ mã nguồn Dart và tài nguyên thành file cài đặt APK tối ưu sẵn sàng để phát hành hoặc cài trực tiếp lên thiết bị Android.
- Bản build Release (flutter build apk --release, flutter build appbundle, flutter build ipa) được tối ưu hóa tối đa: mã nguồn Dart được biên dịch Ahead-Of-Time (AOT) sang mã máy nhị phân thuần, loại bỏ toàn bộ mã debug/profiling, áp dụng tree-shaking và code shrinking.
- Mục đích là để chuẩn bị ứng dụng có kích thước nhỏ nhất, hiệu năng cao nhất sẵn sàng xuất bản và phân phối tới người dùng cuối qua Google Play hoặc App Store.

## Từ khóa phải nhớ
- **flutter build apk**
- **Prepare app for distribution**
- **Release APK and release distribution**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which command builds a release APK?”, source chọn **flutter build apk**; phương án nhiễu gồm: flutter run, flutter doctor, flutter clean.
- Với dạng hỏi “What is the purpose of building a release version of a Flutter app?”, source chọn **Prepare app for distribution**; phương án nhiễu gồm: Debug code, Test UI, Change theme.

## Các cách đề từng hỏi
- `PRM393-Q0006` — Which command builds a release APK?
- `PRM393-Q0123` — What is the purpose of building a release version of a Flutter app?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Chapter 14 optional/Plus claim in source

**ID:** `PRM393-DEPLOY-CH14-PLUS`  
**Chapter:** Deployment & Release (`PRM393-CH-DEPLOYMENT`)  
**Topic:** Course structure  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Trong giáo trình môn học PRM393, chương triển khai phát hành lên kho ứng dụng (App Store/Google Play) thường là phần tùy chọn/mở rộng (Plus) vì sinh viên và nhà phát triển có thể build, test và cài đặt trực tiếp trên thiết bị (sideloading/debug/release APK) mà không bắt buộc phải xuất bản chính thức lên Store.

## Từ khóa phải nhớ
- **Apps can be tested without publishing**
- **Chapter 14 optional/Plus claim in source**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is Chapter 14 considered optional (Plus)?”, source chọn **Apps can be tested without publishing**; phương án nhiễu gồm: Deployment is UI logic, It replaces authentication, It handles APIs.

## Các cách đề từng hỏi
- `PRM393-Q0077` — Why is Chapter 14 considered optional (Plus)?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Secure signing keys

**ID:** `PRM393-DEPLOY-SIGNING`  
**Chapter:** Deployment & Release (`PRM393-CH-DEPLOYMENT`)  
**Topic:** Release security  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Lưu trữ và quản lý an toàn khóa ký ứng dụng (Keystore cho Android, Distribution Certificate/Provisioning Profile cho iOS) là nguyên tắc bắt buộc để đảm bảo tính xác thực, tránh bị giả mạo và bảo mật ứng dụng khi phát hành.

## Từ khóa phải nhớ
- **Secure signing keys**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which practice improves deployment security?”, source chọn **Secure signing keys**; phương án nhiễu gồm: Debug builds, Hardcoding secrets, Skipping validation.

## Các cách đề từng hỏi
- `PRM393-Q0076` — Which practice improves deployment security?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: MaterialApp as application root

**ID:** `PRM393-FLUTTER-MATERIALAPP`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** App root  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- MaterialApp (hoặc CupertinoApp) thường được đặt làm widget gốc (Root Widget) của toàn bộ ứng dụng Flutter.
- Nó khởi tạo các dịch vụ nền tảng cần thiết như hệ thống định tuyến (Navigator), Theme, Localization, và thiết lập các quy chuẩn Material Design.
- Scaffold được dùng làm khung bố cục chính cho từng màn hình riêng lẻ bên trong MaterialApp.

## Từ khóa phải nhớ
- **MaterialApp**
- **MaterialApp as application root**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget is commonly used as the root of a Flutter app?”, source chọn **MaterialApp**; phương án nhiễu gồm: Scaffold, Container, Column.

## Các cách đề từng hỏi
- `PRM393-Q0131` — Which widget is commonly used as the root of a Flutter app?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Flutter framework role

**ID:** `PRM393-FLUTTER-FRAMEWORK`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** Architecture  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Flutter là một UI toolkit đa nền tảng, cung cấp tập hợp các widget giao diện dựng sẵn (Material Design, Cupertino) cùng với engine/pipeline vẽ đồ họa và logic render độc lập với hệ điều hành gốc.

## Từ khóa phải nhớ
- **It provides UI components and rendering logic**
- **Flutter framework role**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What role does the Flutter framework play in application development?”, source chọn **It provides UI components and rendering logic**; phương án nhiễu gồm: It manages database servers, It replaces the operating system, It runs backend business logic.

## Các cách đề từng hỏi
- `PRM393-Q0054` — What role does the Flutter framework play in application development?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: StatefulWidget lifecycle

**ID:** `PRM393-FLUTTER-LIFECYCLE`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** Lifecycle  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Hiểu rõ vòng đời của Widget (initState, didChangeDependencies, build, didUpdateWidget, dispose...) giúp lập trình viên thực hiện các thao tác đúng thời điểm: khởi tạo controller/listener trong initState, giải phóng tài nguyên trong dispose, và kích hoạt cập nhật giao diện (setState) chính xác mà không gặp lỗi "setState called after dispose" hay rò rỉ bộ nhớ.

## Từ khóa phải nhớ
- **Manage UI updates correctly**
- **StatefulWidget lifecycle**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is understanding the widget lifecycle important?”, source chọn **Manage UI updates correctly**; phương án nhiễu gồm: Improve API performance, Deploy apps faster, Reduce file size.

## Các cách đề từng hỏi
- `PRM393-Q0111` — Why is understanding the widget lifecycle important?

## Source Exams
- `PRM393-EXAM-SU26-FE`

---

# Concept: Flutter purpose and multi-platform single codebase

**ID:** `PRM393-FLUTTER-PURPOSE`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** Overview  
**Frequency:** 6 question occurrences / 3 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Flutter là framework đa nền tảng thực sự, cho phép lập trình viên chỉ viết một cơ sở mã nguồn duy nhất (single codebase) và biên dịch ra ứng dụng chạy trên Android, iOS, Web, Windows, macOS, Linux.
- Flutter là UI toolkit của Google chuyên dùng để xây dựng các ứng dụng native đa nền tảng (Mobile, Web, Desktop) từ một cơ sở mã nguồn duy nhất.
- Việc duy trì một codebase duy nhất cho nhiều nền tảng (iOS, Android, Web, Desktop) giúp đội ngũ phát triển không phải viết và duy trì 2-3 codebase riêng biệt bằng nhiều ngôn ngữ khác nhau (Swift, Kotlin, JS), từ đó giảm thiểu đáng kể thời gian phát triển, chi phí nhân sự và công sức bảo trì/sửa lỗi.

## Từ khóa phải nhớ
- **Android, iOS, web, and desktop**
- **Creating native applications from a single codebase**
- **Reduced development and maintenance effort**
- **Flutter purpose and multi-platform single codebase**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which platforms can Flutter applications target using a single codebase?”, source chọn **Android, iOS, web, and desktop**; phương án nhiễu gồm: Android only, iOS only, Web servers only.
- Với dạng hỏi “What is Flutter primarily used for?”, source chọn **Creating native applications from a single codebase**; phương án nhiễu gồm: Designing databases for mobile apps, Developing server-side applications only, Building operating systems for mobile devices.
- Với dạng hỏi “What advantage does a single codebase provide in Flutter development?”, source chọn **Reduced development and maintenance effort**; phương án nhiễu gồm: Higher memory usage, Simpler UI customization, Automatic database synchronization.

## Các cách đề từng hỏi
- `PRM393-Q0008` — Which platforms can Flutter applications target using a single codebase?
- `PRM393-Q0041` — What is Flutter primarily used for?
- `PRM393-Q0130` — What advantage does a single codebase provide in Flutter development?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Declarative UI, build() and rebuild

**ID:** `PRM393-FLUTTER-REACTIVE-BUILD`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** Rendering model  
**Frequency:** 6 question occurrences / 5 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- Hàm build(BuildContext context) trong StatelessWidget hoặc State<StatefulWidget> có nhiệm vụ trả về cấu trúc widget con (widget tree) mô tả giao diện tương ứng với cấu hình và trạng thái hiện tại.
- Mô hình Reactive UI (Declarative) của Flutter hoạt động dựa trên nguyên lý: Giao diện là một hàm phản ánh trạng thái ($UI = f(State)$).
- Khi State thay đổi, Flutter tự động kích hoạt quá trình rebuild lại UI tương ứng.
- Trong mô hình Declarative/Reactive của Flutter, việc cập nhật lại giao diện khi có dữ liệu mới được thực hiện thông qua cơ chế Rebuild lại cây widget tương ứng.
- Flutter là declarative framework; nó chỉ gọi lại phương thức build() và cập nhật lại cây widget khi trạng thái dữ liệu (state) thay đổi (ví dụ khi gọi setState(), nhận state mới từ BLoC/Provider, hoặc các dependencies thay đổi).

## Từ khóa phải nhớ
- **A widget tree describing the UI**
- **Rebuilding UI in response to state changes**
- **Widget rebuilding**
- **When state changes**
- **Calling setState()**
- **Declarative UI, build() and rebuild**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does the build() method return in a widget?”, source chọn **A widget tree describing the UI**; phương án nhiễu gồm: A screen, Application state, Rendered pixels.
- Với dạng hỏi “Which action best demonstrates Flutter's reactive UI model?”, source chọn **Rebuilding UI in response to state changes**; phương án nhiễu gồm: Manually updating UI elements, Editing layout XML, Calling native APIs.
- Với dạng hỏi “Which Flutter concept supports reactive UI updates?”, source chọn **Widget rebuilding**; phương án nhiễu gồm: Manual refresh, Hot restart, Native callbacks.
- Với dạng hỏi “When does Flutter rebuild the widget tree?”, source chọn **When state changes**; phương án nhiễu gồm: On every frame, Only when app restarts, Only during hot restart.

## Các cách đề từng hỏi
- `PRM393-Q0072` — What does the build() method return in a widget?
- `PRM393-Q0017` — Which action best demonstrates Flutter's reactive UI model?
- `PRM393-Q0031` — Which Flutter concept supports reactive UI updates?
- `PRM393-Q0060` — When does Flutter rebuild the widget tree?
- `PRM393-Q0132` — What triggers a rebuild of a widget?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: BuildContext

**ID:** `PRM393-FLUTTER-BUILDCONTEXT`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** Widget tree  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- BuildContext là một đối tượng đại diện cho vị trí (handle) của một widget cụ thể bên trong cây widget (widget tree).
- Nó cho phép widget tương tác với các widget tổ tiên (ancestor widgets) như Theme.of(context), Navigator.of(context), MediaQuery.of(context).

## Từ khóa phải nhớ
- **Locate widgets in the widget tree**
- **BuildContext**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the role of BuildContext in Flutter?”, source chọn **Locate widgets in the widget tree**; phương án nhiễu gồm: Store application data, Manage navigation history, Render UI pixels.

## Các cách đề từng hỏi
- `PRM393-Q0053` — What is the role of BuildContext in Flutter?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Widget composition and reuse

**ID:** `PRM393-FLUTTER-COMPOSITION`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** Widgets  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Kiến trúc xây dựng trên Widget của Flutter cho phép tái sử dụng tối đa mã nguồn giao diện trên nhiều nền tảng khác nhau mà vẫn đảm bảo tính nhất quán và hiệu năng cao.
- Nguyên lý Composition (kết hợp các widget nhỏ đơn nhiệm thành các widget lớn hơn) giúp tăng khả năng tái sử dụng mã nguồn và đảm bảo sự nhất quán trong thiết kế giao diện ứng dụng.

## Từ khóa phải nhớ
- **Widgets allow code reuse across platforms**
- **Better code reuse and UI consistency**
- **Widget composition and reuse**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the main benefit of Flutter's widget-based architecture?”, source chọn **Widgets allow code reuse across platforms**; phương án nhiễu gồm: Widgets are only used for layout design, Widgets automatically manage databases, Widgets replace backend services.
- Với dạng hỏi “What is the benefit of composing widgets in Flutter?”, source chọn **Better code reuse and UI consistency**; phương án nhiễu gồm: Faster compilation, Reduced memory usage, Automatic navigation.

## Các cách đề từng hỏi
- `PRM393-Q0037` — What is the main benefit of Flutter's widget-based architecture?
- `PRM393-Q0049` — What is the benefit of composing widgets in Flutter?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Widget tree and immutability

**ID:** `PRM393-FLUTTER-WIDGET-TREE`  
**Chapter:** Flutter Core (`PRM393-CH-FLUTTER-CORE`)  
**Topic:** Widgets  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- Widget trong Flutter chỉ là các đối tượng mô tả cấu hình bất biến (immutable descriptions).
- Chúng không trực tiếp vẽ hay nắm giữ tài nguyên hệ điều hành nặng nề, do đó việc khởi tạo và hủy widget rất nhẹ và nhanh.
- Giao diện Flutter được xây dựng hoàn toàn bằng ngôn ngữ Dart dưới dạng một cây widget có cấu trúc phân cấp (hierarchical widget tree), trong đó các widget cha lồng các widget con.
- Cây Widget trong Flutter mang tính chất bất biến (Immutable): tất cả các trường (fields) của Widget đều là final.
- Khi có sự thay đổi giao diện hoặc trạng thái, Flutter không chỉnh sửa trực tiếp các thuộc tính của widget cũ mà tạo ra các đối tượng widget mới (recreated) để thay thế bản mô tả cũ.

## Từ khóa phải nhớ
- **They are immutable descriptions**
- **Using a hierarchical widget tree**
- **Widgets are recreated instead of modified**
- **Widget tree and immutability**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why are widgets lightweight in Flutter?”, source chọn **They are immutable descriptions**; phương án nhiễu gồm: They manage system resources, They store UI state, They handle rendering directly.
- Với dạng hỏi “How is the Flutter UI constructed internally?”, source chọn **Using a hierarchical widget tree**; phương án nhiễu gồm: Using XML layout files, Using HTML and CSS, Using native UI components only.
- Với dạng hỏi “Why is the widget tree considered immutable?”, source chọn **Widgets are recreated instead of modified**; phương án nhiễu gồm: Widgets cannot be removed, Widgets are stored permanently, Widgets cannot contain data.
- ⚠️ Concept này có ít nhất một master question bị flag; xem `06_PRM393_REVIEW_ISSUES.md` trước khi dùng cho Exam Mode chuẩn.

## Các cách đề từng hỏi
- `PRM393-Q0038` — Why are widgets lightweight in Flutter?
- `PRM393-Q0055` — How is the Flutter UI constructed internally?
- `PRM393-Q0127` — Why is the widget tree considered immutable?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: BuildContext in navigation

**ID:** `PRM393-NAV-CONTEXT`  
**Chapter:** Navigation & Routing (`PRM393-CH-NAVIGATION`)  
**Topic:** BuildContext  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- BuildContext định vị vị trí của widget trong cây widget.
- Khi thực hiện điều hướng với Navigator.of(context) hoặc Navigator.push(context, ...), Flutter cần context để tìm kiếm đối tượng NavigatorState gần nhất trong cây widget tổ tiên quản lý ngăn xếp màn hình (Route Stack).

## Từ khóa phải nhớ
- **Access Navigator**
- **BuildContext in navigation**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is passing context important in navigation?”, source chọn **Access Navigator**; phương án nhiễu gồm: Access theme, Access state, Access layout.

## Các cách đề từng hỏi
- `PRM393-Q0113` — Why is passing context important in navigation?

## Source Exams
- `PRM393-EXAM-SU26-FE`

---

# Concept: Structured navigation logic

**ID:** `PRM393-NAV-STRUCTURE`  
**Chapter:** Navigation & Routing (`PRM393-CH-NAVIGATION`)  
**Topic:** Design  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Việc tổ chức logic điều hướng một cách bài bản và có cấu trúc (sử dụng Named Routes, AutoRoute, GoRouter hoặc Navigation 2.0 Router Delegate) giúp mã nguồn dễ bảo trì, dễ quản lý các luồng điều hướng phức tạp (Deep linking, Authentication guards, Nested navigation) và tránh việc viết code chuyển màn hình rải rác khó kiểm soát.

## Từ khóa phải nhớ
- **Improve maintainability**
- **Structured navigation logic**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why should navigation logic be well-structured?”, source chọn **Improve maintainability**; phương án nhiễu gồm: Reduce UI size, Increase speed, Avoid widgets.

## Các cách đề từng hỏi
- `PRM393-Q0124` — Why should navigation logic be well-structured?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Navigator and pop

**ID:** `PRM393-NAV-ROUTE-STACK`  
**Chapter:** Navigation & Routing (`PRM393-CH-NAVIGATION`)  
**Topic:** Route stack  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Hệ thống điều hướng màn hình trong Flutter hoạt động theo cơ chế ngăn xếp (LIFO Route Stack).
- Phương thức Navigator.pop(context) sẽ gỡ bỏ (pop) route/màn hình đang nằm trên cùng của stack, từ đó đóng màn hình hiện tại và quay trở về màn hình liền kề trước đó.
- Navigator.push() dùng để mở màn hình mới; Navigator.popUntil() hoặc pushNamedAndRemoveUntil() dùng để xóa stack.

## Từ khóa phải nhớ
- **Close current screen**
- **Navigator and pop**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does Navigator.pop() do?”, source chọn **Close current screen**; phương án nhiễu gồm: Open a new screen, Restart app, Clear stack.

## Các cách đề từng hỏi
- `PRM393-Q0121` — What does Navigator.pop() do?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Passing data between screens

**ID:** `PRM393-NAV-PASS-DATA`  
**Chapter:** Navigation & Routing (`PRM393-CH-NAVIGATION`)  
**Topic:** Screen navigation  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Cách truyền dữ liệu cơ bản, an toàn và trực tiếp nhất giữa các màn hình trong Flutter là truyền qua các tham số của hàm khởi tạo (Constructor arguments) của Widget màn hình mới khi thực hiện Navigator.push.

## Từ khóa phải nhớ
- **Via constructor arguments**
- **Passing data between screens**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “How can data be passed to a new screen?”, source chọn **Via constructor arguments**; phương án nhiễu gồm: Using global variables, Using ThemeData, Using Scaffold.

## Các cách đề từng hỏi
- `PRM393-Q0011` — How can data be passed to a new screen?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: FutureBuilder for API responses

**ID:** `PRM393-NET-FUTUREBUILDER`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** Async UI  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- FutureBuilder là widget chuyên dùng để theo dõi một Future (như lời gọi API bất đồng bộ) và tự động xây dựng giao diện tương ứng với từng trạng thái: đang chờ (ConnectionState.waiting), gặp lỗi (snapshot.hasError), hoặc thành công (snapshot.hasData).

## Từ khóa phải nhớ
- **FutureBuilder**
- **FutureBuilder for API responses**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget is used to handle asynchronous API responses in UI?”, source chọn **FutureBuilder**; phương án nhiễu gồm: ListView, Provider, Form.

## Các cách đề từng hỏi
- `PRM393-Q0084` — Which widget is used to handle asynchronous API responses in UI?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Pagination

**ID:** `PRM393-NET-PAGINATION`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** Data loading  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Phân trang (Pagination) là kỹ thuật chia nhỏ tập dữ liệu lớn thành từng trang/khối (pages/chunks) để tải và render dần (lazy loading / infinite scrolling), giúp tối ưu băng thông mạng, giảm tải bộ nhớ và cải thiện trải nghiệm người dùng.

## Từ khóa phải nhớ
- **Handling large datasets efficiently**
- **Pagination**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is pagination used for?”, source chọn **Handling large datasets efficiently**; phương án nhiễu gồm: UI animation, Theme management, Authentication.

## Các cách đề từng hỏi
- `PRM393-Q0082` — What is pagination used for?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: GET and POST methods

**ID:** `PRM393-NET-HTTP-METHODS`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** HTTP  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Trong giao thức HTTP và chuẩn RESTful API, phương thức GET được quy định dùng để yêu cầu và lấy dữ liệu từ server về client mà không làm thay đổi trạng thái của tài nguyên trên server.
- Trong chuẩn RESTful API và giao thức HTTP, phương thức POST được sử dụng để gửi dữ liệu mới (payload trong Request Body) lên máy chủ nhằm tạo mới một tài nguyên (ví dụ: tạo tài khoản mới, tạo đơn hàng mới).
- GET dùng để lấy dữ liệu; DELETE dùng để xóa tài nguyên; HEAD dùng để lấy header phản hồi.

## Từ khóa phải nhớ
- **GET**
- **POST**
- **GET and POST methods**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which HTTP method is typically used to retrieve data?”, source chọn **GET**; phương án nhiễu gồm: POST, PUT, DELETE.
- Với dạng hỏi “Which HTTP method is used to send new data to a server?”, source chọn **POST**; phương án nhiễu gồm: GET, DELETE, HEAD.

## Các cách đề từng hỏi
- `PRM393-Q0004` — Which HTTP method is typically used to retrieve data?
- `PRM393-Q0105` — Which HTTP method is used to send new data to a server?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: HTTP status codes

**ID:** `PRM393-NET-HTTP-STATUS`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** HTTP  
**Frequency:** 3 question occurrences / 3 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Mã trạng thái HTTP trong dải 5xx (như 500 Internal Server Error) chỉ ra rằng yêu cầu gửi lên hợp lệ nhưng máy chủ đã gặp lỗi nội bộ khi xử lý yêu cầu đó.
- Trong chuẩn HTTP Response Status Codes, mã 200 OK thuộc dải 2xx (Success), biểu thị rằng yêu cầu từ phía client gửi lên máy chủ đã được tiếp nhận, hiểu và xử lý thành công.
- Mã trạng thái HTTP 404 Not Found thuộc nhóm lỗi client 4xx, biểu thị rằng máy chủ không thể tìm thấy tài nguyên tương ứng với URL/URI được yêu cầu.
- 200: OK; 301: Moved Permanently; 500: Internal Server Error.

## Từ khóa phải nhớ
- **500**
- **Success**
- **404**
- **HTTP status codes**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which status code indicates server error?”, source chọn **500**; phương án nhiễu gồm: 200, 301, 404.
- Với dạng hỏi “What does status code 200 indicate?”, source chọn **Success**; phương án nhiễu gồm: Client error, Server error, Redirect.
- Với dạng hỏi “Which status code indicates resource not found?”, source chọn **404**; phương án nhiễu gồm: 200, 301, 500.

## Các cách đề từng hỏi
- `PRM393-Q0050` — Which status code indicates server error?
- `PRM393-Q0108` — What does status code 200 indicate?
- `PRM393-Q0136` — Which status code indicates resource not found?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Authorization header

**ID:** `PRM393-NET-AUTH-HEADER`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** HTTP security  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Header Authorization được sử dụng trong các yêu cầu HTTP để truyền thông tin xác thực/ủy quyền của người dùng (ví dụ: Authorization: Bearer <token>).

## Từ khóa phải nhớ
- **Authorization**
- **Authorization header**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which HTTP header is commonly used for authorization?”, source chọn **Authorization**; phương án nhiễu gồm: Content-Type, Accept, Cache-Control.

## Các cách đề từng hỏi
- `PRM393-Q0069` — Which HTTP header is commonly used for authorization?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: HTTPS for API security

**ID:** `PRM393-NET-HTTPS`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** Network security  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Sử dụng giao thức HTTPS (Hypertext Transfer Protocol Secure) với mã hóa SSL/TLS giúp mã hóa toàn bộ dữ liệu trao đổi giữa ứng dụng di động và máy chủ (API Server), ngăn chặn các cuộc tấn công nghe lén (Eavesdropping), đánh cắp dữ liệu và tấn công trung gian (Man-in-the-Middle - MitM).

## Từ khóa phải nhớ
- **Using HTTPS**
- **HTTPS for API security**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which practice improves API security?”, source chọn **Using HTTPS**; phương án nhiễu gồm: Hardcoding keys, Ignoring errors, Using globals.

## Các cách đề từng hỏi
- `PRM393-Q0116` — Which practice improves API security?

## Source Exams
- `PRM393-EXAM-SU26-FE`

---

# Concept: REST fundamentals

**ID:** `PRM393-NET-REST`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** REST  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- REST là viết tắt của Representational State Transfer (Chuyển giao trạng thái đại diện) – một kiểu kiến trúc phần mềm chuẩn mực được Roy Fielding định nghĩa, sử dụng giao thức HTTP không trạng thái (stateless) để truyền tải và thao tác với các tài nguyên định danh qua URL/URI.

## Từ khóa phải nhớ
- **Representational State Transfer**
- **REST fundamentals**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does REST stand for?”, source chọn **Representational State Transfer**; phương án nhiễu gồm: Remote State Transfer, Reactive Service Transport, Request State Transfer.

## Các cách đề từng hỏi
- `PRM393-Q0120` — What does REST stand for?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: JSON parsing and model mapping

**ID:** `PRM393-NET-JSON-MODELS`  
**Chapter:** Networking & Data Exchange (`PRM393-CH-NETWORK`)  
**Topic:** Serialization  
**Frequency:** 2 question occurrences / 2 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- JSON Parsing (chuyển đổi chuỗi định dạng JSON nhận từ API thành các đối tượng Dart / Model Classes) giúp chương trình thao tác với dữ liệu có cấu trúc an toàn kiểu (type-safe) thay vì làm việc với các chuỗi thô.
- Khi nhận dữ liệu JSON dạng Map<String, dynamic> từ API, việc map (chuyển đổi) sang các class Model cụ thể với các thuộc tính định kiểu rõ ràng (String, int, DateTime...) đảm bảo tính Type Safety (an toàn kiểu dữ liệu).
- Điều này giúp tận dụng tính năng tự động hoàn thành mã (code completion) của IDE, bắt lỗi sai tên trường/kiểu dữ liệu ngay tại compile time thay vì bị crash khi chạy ứng dụng.

## Từ khóa phải nhớ
- **Convert JSON into Dart objects**
- **Ensure type safety**
- **JSON parsing and model mapping**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the purpose of parsing JSON?”, source chọn **Convert JSON into Dart objects**; phương án nhiễu gồm: Encrypt data, Send requests, Cache responses.
- Với dạng hỏi “Why should API responses be mapped to models?”, source chọn **Ensure type safety**; phương án nhiễu gồm: Reduce JSON size, Speed up UI, Improve theme.

## Các cách đề từng hỏi
- `PRM393-Q0012` — What is the purpose of parsing JSON?
- `PRM393-Q0140` — Why should API responses be mapped to models?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Chapter 13 optional/Plus claim in source

**ID:** `PRM393-PERF-CH13-PLUS`  
**Chapter:** Performance Optimization (`PRM393-CH-PERFORMANCE`)  
**Topic:** Course structure  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Trong chương trình môn học PRM393, Chương 13 (Tối ưu hóa hiệu năng nâng cao & Profiling) được xếp vào phần mở rộng (Plus) vì các ứng dụng thông thường vẫn có thể hoạt động đầy đủ chức năng cơ bản mà không nhất thiết phải áp dụng các kỹ thuật tối ưu hóa quá chuyên sâu.

## Từ khóa phải nhớ
- **Apps can work without deep optimization**
- **Chapter 13 optional/Plus claim in source**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is Chapter 13 considered optional (Plus)?”, source chọn **Apps can work without deep optimization**; phương án nhiễu gồm: It replaces core concepts, It manages navigation, It handles authentication.

## Các cách đề từng hỏi
- `PRM393-Q0022` — Why is Chapter 13 considered optional (Plus)?

## Source Exams
- `PRM393-EXAM-SP26-FE`

---

# Concept: Smooth and responsive UI

**ID:** `PRM393-PERF-GOAL`  
**Chapter:** Performance Optimization (`PRM393-CH-PERFORMANCE`)  
**Topic:** Performance goals  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Mục tiêu tối thượng của việc tối ưu hóa hiệu năng (Performance Optimization) trong ứng dụng Flutter là duy trì tốc độ khung hình ổn định ở mức 60 FPS hoặc 120 FPS (16.6ms hoặc 8.3ms mỗi frame), loại bỏ hiện tượng giật khung hình (jank), đảm bảo giao diện luôn phản hồi tức thì và mượt mà trước mọi tương tác của người dùng.

## Từ khóa phải nhớ
- **Ensure smooth and responsive UI**
- **Smooth and responsive UI**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the main goal of performance optimization in Flutter apps?”, source chọn **Ensure smooth and responsive UI**; phương án nhiễu gồm: Improve UI colors, Reduce code size, Add features.

## Các cách đề từng hỏi
- `PRM393-Q0106` — What is the main goal of performance optimization in Flutter apps?

## Source Exams
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: DevTools performance analysis

**ID:** `PRM393-PERF-PROFILING`  
**Chapter:** Performance Optimization (`PRM393-CH-PERFORMANCE`)  
**Topic:** Profiling  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Flutter DevTools là bộ công cụ hoàn chỉnh chạy trên trình duyệt cung cấp các công cụ phân tích hiệu năng chuyên sâu như Timeline, CPU Profiler, Memory Profiler, Network Inspector và Performance View (đo khung hình 60/120 fps, phát hiện jank).

## Từ khóa phải nhớ
- **DevTools**
- **DevTools performance analysis**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which tool helps analyze UI performance in Flutter?”, source chọn **DevTools**; phương án nhiễu gồm: Inspector, Emulator, Hot reload.

## Các cách đề từng hỏi
- `PRM393-Q0066` — Which tool helps analyze UI performance in Flutter?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Fine-grained rebuild scope

**ID:** `PRM393-PERF-REBUILD-SCOPE`  
**Chapter:** Performance Optimization (`PRM393-CH-PERFORMANCE`)  
**Topic:** Rebuild optimization  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Tối ưu hóa phạm vi rebuild (Rebuild Scope Optimization) là kỹ thuật cấu trúc widget sao cho khi có sự thay đổi state, chỉ có những widget thực sự phụ thuộc vào dữ liệu đó bị rebuild thay vì rebuild toàn bộ màn hình hoặc widget cha cấp cao.
- Cập nhật state ở mức độ chi tiết và cục bộ (Fine-grained state updates, ví dụ sử dụng các builder cục bộ như ValueListenableBuilder, BlocSelector) giúp giới hạn việc build lại chỉ cho đúng widget cần thay đổi, tránh rebuild toàn bộ màn hình.
- Tách nhỏ các widget phức tạp thành các widget riêng biệt (extract widget) giúp Flutter giới hạn phạm vi rebuild (rebuild scope) chỉ ở những phần thực sự có thay đổi state, từ đó cải thiện đáng kể hiệu năng render.

## Từ khóa phải nhớ
- **Limiting rebuild to affected widgets**
- **Fine-grained state updates**
- **Splitting widgets**
- **Fine-grained rebuild scope**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is rebuild scope optimization in Flutter?”, source chọn **Limiting rebuild to affected widgets**; phương án nhiễu gồm: Reducing widget tree depth, Caching API responses, Using global state.
- Với dạng hỏi “Which approach helps reduce unnecessary widget rebuilds?”, source chọn **Fine-grained state updates**; phương án nhiễu gồm: Using global variables, Hot restart, Large widgets.
- Với dạng hỏi “Which practice improves rendering performance?”, source chọn **Splitting widgets**; phương án nhiễu gồm: Large widget trees, Global state, Frequent rebuilds.

## Các cách đề từng hỏi
- `PRM393-Q0087` — What is rebuild scope optimization in Flutter?
- `PRM393-Q0016` — Which approach helps reduce unnecessary widget rebuilds?
- `PRM393-Q0057` — Which practice improves rendering performance?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: const widgets

**ID:** `PRM393-PERF-CONST`  
**Chapter:** Performance Optimization (`PRM393-CH-PERFORMANCE`)  
**Topic:** Rebuild optimization  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Widget khai báo với từ khóa const được tạo một lần duy nhất tại compile-time và lưu vào bộ nhớ dùng chung.
- Khi widget cha rebuild, Flutter sẽ bỏ qua (short-circuit) việc rebuild các const widget con này, giúp tiết kiệm đáng kể chu kỳ CPU.

## Từ khóa phải nhớ
- **They reduce rebuild cost**
- **const widgets**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why are const widgets recommended?”, source chọn **They reduce rebuild cost**; phương án nhiễu gồm: They improve readability, They add state, They handle navigation.

## Các cách đề từng hỏi
- `PRM393-Q0018` — Why are const widgets recommended?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: RepaintBoundary

**ID:** `PRM393-PERF-REPAINT`  
**Chapter:** Performance Optimization (`PRM393-CH-PERFORMANCE`)  
**Topic:** Rendering  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- RepaintBoundary tạo ra một RenderRepaintBoundary độc lập trong cây render, giúp cô lập vùng vẽ của widget con để khi widget khác repaint thì khu vực này không cần phải vẽ lại, tránh lãng phí GPU/CPU rendering.

## Từ khóa phải nhớ
- **RepaintBoundary**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget helps avoid rebuilding unchanged UI parts?”, source chọn **RepaintBoundary**; phương án nhiễu gồm: Container, Column, FutureBuilder.
- ⚠️ Concept này có ít nhất một master question bị flag; xem `06_PRM393_REVIEW_ISSUES.md` trước khi dùng cho Exam Mode chuẩn.

## Các cách đề từng hỏi
- `PRM393-Q0083` — Which widget helps avoid rebuilding unchanged UI parts?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: BLoC event-state flow and Streams

**ID:** `PRM393-STATE-BLOC-EVENT-STATE`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** BLoC  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Trong kiến trúc BLoC, đầu vào (Input) là các sự kiện người dùng tương tác (Events), BLoC xử lý nghiệp vụ và phát ra kết quả đầu ra (Output) là các trạng thái mới (States).
- Trong mô hình BLoC, Events đóng vai trò là đầu vào (Input) từ UI hoặc hệ thống, gửi đến BLoC để kích hoạt logic xử lý và tạo ra các States mới.
- BLoC (Business Logic Component) được xây dựng dựa trên nền tảng Reactive Programming và cơ chế Stream trong Dart để nhận luồng Events đầu vào và phát ra luồng States đầu ra liên tục theo thời gian thực.

## Từ khóa phải nhớ
- **States**
- **Trigger state changes**
- **Stream**
- **BLoC event-state flow and Streams**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What represents the output of a BLoC?”, source chọn **States**; phương án nhiễu gồm: Events, Widgets, Controllers.
- Với dạng hỏi “What is the role of events in BLoC?”, source chọn **Trigger state changes**; phương án nhiễu gồm: Store UI, Render widgets, Handle layout.
- Với dạng hỏi “Which concept does BLoC heavily rely on?”, source chọn **Stream**; phương án nhiễu gồm: Future, Animation, Theme.

## Các cách đề từng hỏi
- `PRM393-Q0073` — What represents the output of a BLoC?
- `PRM393-Q0033` — What is the role of events in BLoC?
- `PRM393-Q0061` — Which concept does BLoC heavily rely on?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: BLoC meaning, package and scalable use

**ID:** `PRM393-STATE-BLOC-BASICS`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** BLoC  
**Frequency:** 4 question occurrences / 4 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- Package flutter_bloc cung cấp các công cụ và widget chuyên dụng (BlocProvider, BlocBuilder, BlocListener, BlocConsumer) để hiện thực hóa kiến trúc quản lý trạng thái BLoC và Cubit trong Flutter.
- BLoC cung cấp một cấu trúc kiến trúc chuẩn hóa rõ ràng (phân tách Events, States, BLoC/Cubit, UI, Repositories).
- Quy ước chặt chẽ này giúp các thành viên trong đội ngũ lớn làm việc song song dễ dàng, đồng bộ phong cách code và dễ kiểm thử độc lập.
- BLoC (Business Logic Component) là pattern quản lý trạng thái tiêu chuẩn được thiết kế đặc biệt cho các ứng dụng Flutter quy mô lớn (enterprise/scalable).
- BLoC phân tách hoàn toàn tầng Business Logic ra khỏi tầng UI thông qua cơ chế luồng Reactive Streams (Events vào - States ra), giúp code dễ mở rộng, dễ tái sử dụng và cực kỳ thuận tiện cho việc kiểm thử tự động.

## Từ khóa phải nhớ
- **flutter_bloc**
- **Standardized architecture**
- **BLoC**
- **Business Logic Component**
- **BLoC meaning, package and scalable use**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which package supports BLoC architecture?”, source chọn **flutter_bloc**; phương án nhiễu gồm: provider, sqflite, http.
- Với dạng hỏi “Why is BLoC suitable for large teams?”, source chọn **Standardized architecture**; phương án nhiễu gồm: Less code, Faster builds, UI reuse.
- Với dạng hỏi “Which pattern is commonly used for scalable state management?”, source chọn **BLoC**; phương án nhiễu gồm: MVC, Singleton, Factory.
- Với dạng hỏi “What does BLoC stand for?”, source chọn **Business Logic Component**; phương án nhiễu gồm: Backend Logic Controller, Build Logic Component, Basic Logic Controller.

## Các cách đề từng hỏi
- `PRM393-Q0026` — Which package supports BLoC architecture?
- `PRM393-Q0088` — Why is BLoC suitable for large teams?
- `PRM393-Q0102` — Which pattern is commonly used for scalable state management?
- `PRM393-Q0133` — What does BLoC stand for?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Cubit

**ID:** `PRM393-STATE-CUBIT`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** BLoC  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Cubit là một biến thể đơn giản hóa của BLoC trong thư viện flutter_bloc.
- Thay vì phải định nghĩa lớp Event và map event sang state, Cubit cho phép gọi trực tiếp các phương thức (functions) để phát ra State (emit(state)).

## Từ khóa phải nhớ
- **Simplified BLoC without events**
- **Cubit**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is Cubit in BLoC?”, source chọn **Simplified BLoC without events**; phương án nhiễu gồm: UI widget, Database layer, Animation helper.

## Các cách đề từng hỏi
- `PRM393-Q0074` — What is Cubit in BLoC?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Immutable BLoC states

**ID:** `PRM393-STATE-BLOC-IMMUTABILITY`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** BLoC  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Tính bất biến (Immutability) đảm bảo rằng mỗi state phát ra là một bản chụp (snapshot) dữ liệu cố định không thể bị biến đổi ngầm, giúp luồng dữ liệu trở nên nhất quán, dễ dự đoán hành vi ứng dụng và dễ dàng so sánh sự thay đổi state (==).

## Từ khóa phải nhớ
- **Predictable state changes**
- **Immutable BLoC states**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why is immutability important in BLoC states?”, source chọn **Predictable state changes**; phương án nhiễu gồm: UI speed, Memory usage, Theme control.

## Các cách đề từng hỏi
- `PRM393-Q0063` — Why is immutability important in BLoC states?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: setState and rebuild behavior

**ID:** `PRM393-STATE-SETSTATE`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** Local state  
**Frequency:** 7 question occurrences / 5 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- Trong StatefulWidget, khi giá trị biến trạng thái thay đổi, việc bọc thay đổi đó trong hàm setState(() { ...
- }) sẽ báo hiệu cho Flutter framework lên lịch gọi lại phương thức build() để cập nhật UI.
- Mỗi khi setState() được gọi, Flutter sẽ rebuild lại toàn bộ widget đó và các widget con của nó.
- Gọi setState() tùy tiện hoặc ở phạm vi quá rộng sẽ gây ra nhiều lần rebuild không cần thiết, làm giảm FPS và lãng phí tài nguyên CPU/GPU.
- Trong StatefulWidget, phương thức setState(VoidCallback fn) có nhiệm vụ duy nhất: thông báo cho Flutter Framework biết rằng trạng thái nội bộ của đối tượng State đã thay đổi, từ đó yêu cầu framework lên lịch gọi lại phương thức build() để cập nhật và vẽ lại giao diện tương ứng.

## Từ khóa phải nhớ
- **setState()**
- **It may trigger unnecessary rebuilds**
- **Trigger widget rebuild**
- **Overusing setState()**
- **The widget tree is rebuilt**
- **setState and rebuild behavior**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which method is used to update the UI when state changes?”, source chọn **setState()**; phương án nhiễu gồm: build(), initState(), dispose().
- Với dạng hỏi “Why should setState() be called sparingly?”, source chọn **It may trigger unnecessary rebuilds**; phương án nhiễu gồm: It increases app size, It blocks UI thread, It causes memory leaks.
- Với dạng hỏi “What is the primary responsibility of the setState() method?”, source chọn **Trigger widget rebuild**; phương án nhiễu gồm: Persist data, Navigate screens, Handle async tasks.
- Với dạng hỏi “What causes unnecessary widget rebuilds?”, source chọn **Overusing setState()**; phương án nhiễu gồm: State changes, Using Provider, Using const widgets.

## Các cách đề từng hỏi
- `PRM393-Q0079` — Which method is used to update the UI when state changes?
- `PRM393-Q0093` — Why should setState() be called sparingly?
- `PRM393-Q0098` — What is the primary responsibility of the setState() method?
- `PRM393-Q0099` — What causes unnecessary widget rebuilds?
- `PRM393-Q0101` — What happens when setState() is called in a StatefulWidget?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: State hoisting

**ID:** `PRM393-STATE-HOISTING`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** State flow  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- State Hoisting (Nâng state lên cấp cao hơn) là mô hình chuyển việc lưu trữ và quản lý state từ các widget con lên widget cha chung (lowest common ancestor).
- Kỹ thuật này giải quyết vấn đề trùng lặp trạng thái (State duplication), biến các widget con thành các widget phi trạng thái (stateless/controlled widgets), đảm bảo chỉ có một nguồn chân lý duy nhất (Single Source of Truth) cho dữ liệu.

## Từ khóa phải nhớ
- **State duplication**
- **State hoisting**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What problem does state hoisting address?”, source chọn **State duplication**; phương án nhiễu gồm: API delay, Theme conflict, Navigation error.

## Các cách đề từng hỏi
- `PRM393-Q0100` — What problem does state hoisting address?

## Source Exams
- `PRM393-EXAM-SU26-FE`

---

# Concept: State consistency

**ID:** `PRM393-STATE-CONSISTENCY`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** State principles  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Quản lý trạng thái không đúng cách dẫn đến rủi ro lớn nhất là giao diện hiển thị không đồng bộ với dữ liệu thực tế (UI Inconsistency / Stale State), dẫn đến các lỗi logic và trải nghiệm người dùng kém.

## Từ khóa phải nhớ
- **UI inconsistency**
- **State consistency**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the main risk of improper state management?”, source chọn **UI inconsistency**; phương án nhiễu gồm: Longer compile time, Package conflicts, Build errors.

## Các cách đề từng hỏi
- `PRM393-Q0009` — What is the main risk of improper state management?

## Source Exams
- `PRM393-EXAM-SP26-FE`

---

# Concept: Local state and rebuild scope

**ID:** `PRM393-STATE-LOCALITY`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** State scope  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Giữ state ở phạm vi cục bộ gần nhất với widget cần nó giúp hạn chế phạm vi lan truyền việc rebuild, ngăn không cho các widget cha hoặc các widget không liên quan phải render lại lãng phí tài nguyên.

## Từ khóa phải nhớ
- **Reduce unnecessary rebuilds**
- **Local state and rebuild scope**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why should state be kept as local as possible?”, source chọn **Reduce unnecessary rebuilds**; phương án nhiễu gồm: Better animations, Simplify UI, Improve navigation.

## Các cách đề từng hỏi
- `PRM393-Q0048` — Why should state be kept as local as possible?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Provider vs setState

**ID:** `PRM393-STATE-PROVIDER`  
**Chapter:** State Management (`PRM393-CH-STATE`)  
**Topic:** State strategies  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- setState() chỉ phù hợp cho trạng thái cục bộ (local/ephemeral state) gói gọn bên trong một widget duy nhất.
- Khi trạng thái cần được chia sẻ giữa nhiều màn hình hoặc nhiều widget nằm ở các nhánh khác nhau trên cây widget (Global / App-wide state như thông tin đăng nhập người dùng, giỏ hàng, cài đặt ứng dụng), việc sử dụng Provider (hoặc BLoC/Riverpod) là lựa chọn tối ưu để quản lý và chia sẻ dữ liệu dễ dàng.

## Từ khóa phải nhớ
- **For global or shared state**
- **Provider vs setState**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “When should you prefer Provider over setState()?”, source chọn **For global or shared state**; phương án nhiễu gồm: For simple UI updates, For animations, For navigation.

## Các cách đề từng hỏi
- `PRM393-Q0129` — When should you prefer Provider over setState()?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Asynchronous database operations

**ID:** `PRM393-STORAGE-ASYNC-IO`  
**Chapter:** Local Storage & Async Data (`PRM393-CH-STORAGE`)  
**Topic:** Async I/O  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Các thao tác truy xuất dữ liệu từ ổ đĩa (I/O) thường tốn thời gian.
- Chạy bất đồng bộ (Asynchronous với Future/async-await) giúp không chặn UI Thread (Main Isolate), giữ cho giao diện luôn mượt mà ở 60/120 FPS mà không bị đơ giật.

## Từ khóa phải nhớ
- **Avoid blocking UI thread**
- **Asynchronous database operations**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why should database operations be asynchronous?”, source chọn **Avoid blocking UI thread**; phương án nhiễu gồm: Simplify syntax, Reduce code, Improve theme.

## Các cách đề từng hỏi
- `PRM393-Q0021` — Why should database operations be asynchronous?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: FutureBuilder for local storage

**ID:** `PRM393-STORAGE-FUTUREBUILDER`  
**Chapter:** Local Storage & Async Data (`PRM393-CH-STORAGE`)  
**Topic:** Async UI  
**Frequency:** 3 question occurrences / 1 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Việc truy xuất dữ liệu từ bộ nhớ cục bộ (như SQLite, SharedPreferences) là các thao tác bất đồng bộ trả về Future.
- FutureBuilder là widget được thiết kế để lắng nghe Future này và dựng UI tương ứng với trạng thái dữ liệu.

## Từ khóa phải nhớ
- **FutureBuilder**
- **FutureBuilder for local storage**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget reacts to async data from local storage?”, source chọn **FutureBuilder**; phương án nhiễu gồm: StreamBuilder, ListView, Provider.
- ⚠️ Concept này có ít nhất một master question bị flag; xem `06_PRM393_REVIEW_ISSUES.md` trước khi dùng cho Exam Mode chuẩn.

## Các cách đề từng hỏi
- `PRM393-Q0046` — Which widget reacts to async data from local storage?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: SharedPreferences

**ID:** `PRM393-STORAGE-SHARED-PREFERENCES`  
**Chapter:** Local Storage & Async Data (`PRM393-CH-STORAGE`)  
**Topic:** Key-value storage  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- Trong package shared_preferences, các phương thức dùng để đọc dữ liệu đã lưu đều sử dụng họ hàm get() (như get(), getString(), getBool(), getInt()...).
- Package shared_preferences bọc các API gốc của nền tảng (NSUserDefaults trên iOS, SharedPreferences trên Android) để đọc/ghi các dữ liệu nguyên thủy đơn giản dạng khóa - giá trị (key-value) như trạng thái login, cờ cài đặt.
- SharedPreferences bọc các API lưu trữ nhẹ của hệ điều hành (NSUserDefaults trên iOS, SharedPreferences trên Android), được thiết kế chuyên biệt để lưu trữ các giá trị nguyên thủy đơn giản dạng khóa - giá trị (Key-Value) như int, double, bool, String, List<String> (ví dụ: cài đặt chế độ Dark mode, ngôn ngữ, cờ onboarding, token).
- Đối với tập dữ liệu lớn (Large datasets) hoặc quan hệ phức tạp, lập trình viên nên dùng SQLite (sqflite) hoặc Hive / Isar; đối với hình ảnh nên lưu file trên bộ nhớ đĩa (path_provider).

## Từ khóa phải nhớ
- **get()**
- **shared_preferences**
- **Simple primitive values**
- **SharedPreferences**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which method retrieves data from SharedPreferences?”, source chọn **get()**; phương án nhiễu gồm: read(), fetch(), load().
- Với dạng hỏi “Which Flutter package is commonly used for simple key-value storage?”, source chọn **shared_preferences**; phương án nhiễu gồm: sqflite, provider, http.
- Với dạng hỏi “What type of data is SharedPreferences best suited for?”, source chọn **Simple primitive values**; phương án nhiễu gồm: Large datasets, Images, Complex objects.

## Các cách đề từng hỏi
- `PRM393-Q0036` — Which method retrieves data from SharedPreferences?
- `PRM393-Q0080` — Which Flutter package is commonly used for simple key-value storage?
- `PRM393-Q0117` — What type of data is SharedPreferences best suited for?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Hive

**ID:** `PRM393-STORAGE-HIVE`  
**Chapter:** Local Storage & Async Data (`PRM393-CH-STORAGE`)  
**Topic:** NoSQL storage  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Hive là cơ sở dữ liệu key-value NoSQL cục bộ nhẹ, hiệu năng cao, thuần Dart (không cần native dependencies), rất phổ biến để lưu trữ dữ liệu offline, cache và cấu hình ứng dụng.

## Từ khóa phải nhớ
- **Lightweight local NoSQL storage**
- **Hive**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is Hive mainly used for?”, source chọn **Lightweight local NoSQL storage**; phương án nhiễu gồm: Remote database, State management, Routing.

## Các cách đề từng hỏi
- `PRM393-Q0068` — What is Hive mainly used for?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: SQLite with sqflite

**ID:** `PRM393-STORAGE-SQLITE`  
**Chapter:** Local Storage & Async Data (`PRM393-CH-STORAGE`)  
**Topic:** Relational storage  
**Frequency:** 3 question occurrences / 1 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- sqflite là plugin chính thức và thông dụng nhất trong hệ sinh thái Flutter dùng để thao tác với cơ sở dữ liệu quan hệ cục bộ SQLite (hỗ trợ CRUD, transaction, schema migration).

## Từ khóa phải nhớ
- **sqflite**
- **SQLite with sqflite**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Flutter plugin provides SQLite support?”, source chọn **sqflite**; phương án nhiễu gồm: hive, moor, shared_preferences.
- ⚠️ Concept này có ít nhất một master question bị flag; xem `06_PRM393_REVIEW_ISSUES.md` trước khi dùng cho Exam Mode chuẩn.

## Các cách đề từng hỏi
- `PRM393-Q0064` — Which Flutter plugin provides SQLite support?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Test isolation and refactoring safety

**ID:** `PRM393-TEST-ISOLATION-REFACTOR`  
**Chapter:** Testing (`PRM393-CH-TESTING`)  
**Topic:** Test principles  
**Frequency:** 2 question occurrences / 2 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★★☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Khi tái cấu trúc mã nguồn (refactoring), cấu trúc code bên trong thay đổi nhưng hành vi bên ngoài phải được giữ nguyên.
- Bộ kiểm thử tự động (Unit/Widget/Integration Tests) giúp phát hiện sớm các lỗi hồi quy (regression bugs), đảm bảo các thay đổi không làm hỏng tính năng sẵn có.
- Tính cô lập trong kiểm thử (Test Isolation) là nguyên tắc cốt lõi đảm bảo mỗi ca kiểm thử (test case) phải chạy độc lập, tự khởi tạo và dọn dẹp môi trường riêng của mình, không phụ thuộc vào thứ tự chạy và không bị ảnh hưởng bởi kết quả của các test case khác.

## Từ khóa phải nhớ
- **Ensure changes don't break functionality**
- **Independence of test cases**
- **Test isolation and refactoring safety**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why are tests important for refactoring?”, source chọn **Ensure changes don't break functionality**; phương án nhiễu gồm: Reduce UI work, Improve animations, Change layout.
- Với dạng hỏi “What is test isolation?”, source chọn **Independence of test cases**; phương án nhiễu gồm: Running all tests together, UI separation, Mocking only.

## Các cách đề từng hỏi
- `PRM393-Q0052` — Why are tests important for refactoring?
- `PRM393-Q0094` — What is test isolation?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Integration testing

**ID:** `PRM393-TEST-INTEGRATION`  
**Chapter:** Testing (`PRM393-CH-TESTING`)  
**Topic:** Test types  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Kiểm thử tích hợp (Integration Test) kiểm tra toàn bộ luồng hành vi từ đầu đến cuối (End-to-End) của ứng dụng hoặc sự kết hợp tương tác giữa nhiều hệ thống/màn hình trên thiết bị thật hoặc giả lập.

## Từ khóa phải nhớ
- **End-to-end app behavior**
- **Integration testing**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does an integration test verify?”, source chọn **End-to-end app behavior**; phương án nhiễu gồm: Single function, Widget rendering, Theme consistency.

## Các cách đề từng hỏi
- `PRM393-Q0058` — What does an integration test verify?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Unit testing

**ID:** `PRM393-TEST-UNIT`  
**Chapter:** Testing (`PRM393-CH-TESTING`)  
**Topic:** Test types  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Unit Test (Kiểm thử đơn vị) tập trung kiểm tra tính đúng đắn của từng hàm, phương thức hoặc class riêng lẻ một cách độc lập và nhanh chóng.

## Từ khóa phải nhớ
- **Unit test**
- **Unit testing**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which type of test checks individual functions or classes?”, source chọn **Unit test**; phương án nhiễu gồm: Widget test, Integration test, System test.

## Các cách đề từng hỏi
- `PRM393-Q0032` — Which type of test checks individual functions or classes?

## Source Exams
- `PRM393-EXAM-SP26-FE`

---

# Concept: Widget testing

**ID:** `PRM393-TEST-WIDGET`  
**Chapter:** Testing (`PRM393-CH-TESTING`)  
**Topic:** Test types  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Widget Test (hay Component Test) tập trung kiểm tra độc lập từng widget/giao diện: cách widget render, hiển thị text/hình ảnh và phản hồi các tương tác người dùng (nhấn nút, vuốt, nhập chữ) trong môi trường test cô lập.

## Từ khóa phải nhớ
- **Widget test**
- **Widget testing**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Flutter test focuses on UI components?”, source chọn **Widget test**; phương án nhiễu gồm: Unit test, Integration test, Load test.

## Các cách đề từng hỏi
- `PRM393-Q0020` — Which Flutter test focuses on UI components?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Testing quality and testing pyramid

**ID:** `PRM393-TEST-QUALITY`  
**Chapter:** Testing (`PRM393-CH-TESTING`)  
**Topic:** Testing goals  
**Frequency:** 2 question occurrences / 2 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Mục tiêu cốt lõi của việc thực hiện kiểm thử tự động (Unit, Widget, Integration Testing) trong phát triển ứng dụng là đảm bảo chất lượng phần mềm, xác nhận ứng dụng hoạt động chính xác theo yêu cầu thiết kế, ngăn chặn lỗi hồi quy (regressions) khi cập nhật tính năng mới.
- Trong kim tự tháp kiểm thử (Testing Pyramid): Unit Test (Nhanh nhất): Chỉ thực thi kiểm tra các hàm/logic thuần Dart trên CPU máy tính mà không cần khởi tạo framework giao diện hay thiết bị giả lập, thường chạy xong hàng trăm test chỉ trong vài giây.
- Widget Test (Trung bình): Cần khởi tạo môi trường giả lập cây widget của Flutter.
- Integration Test (Chậm nhất): Cần build và chạy toàn bộ ứng dụng trên thiết bị thật/máy ảo.

## Từ khóa phải nhớ
- **Ensure app quality and correctness**
- **Unit test**
- **Testing quality and testing pyramid**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the main goal of testing in Flutter apps?”, source chọn **Ensure app quality and correctness**; phương án nhiễu gồm: Improve UI design, Speed up builds, Manage state.
- Với dạng hỏi “Which test runs fastest?”, source chọn **Unit test**; phương án nhiễu gồm: Integration test, Widget test, Manual test.

## Các cách đề từng hỏi
- `PRM393-Q0110` — What is the main goal of testing in Flutter apps?
- `PRM393-Q0139` — Which test runs fastest?

## Source Exams
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Golden testing

**ID:** `PRM393-TEST-GOLDEN`  
**Chapter:** Testing (`PRM393-CH-TESTING`)  
**Topic:** Visual testing  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Golden Test (kiểm thử giao diện với hình ảnh mẫu chuẩn) kiểm tra tính nhất quán trực quan của giao diện bằng cách so sánh pixel-by-pixel giữa widget được render và hình ảnh mẫu (golden file) để phát hiện các lỗi vỡ giao diện.

## Từ khóa phải nhớ
- **UI appearance consistency**
- **Golden testing**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does golden testing verify?”, source chọn **UI appearance consistency**; phương án nhiễu gồm: API responses, Database state, Authentication.

## Các cách đề từng hỏi
- `PRM393-Q0047` — What does golden testing verify?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Hot reload

**ID:** `PRM393-TOOL-HOT-RELOAD`  
**Chapter:** Development Tooling (`PRM393-CH-TOOLING`)  
**Topic:** Developer productivity  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Hot Reload giúp tải mã nguồn mới vào máy ảo Dart đang chạy và hiển thị ngay lập tức các thay đổi lên màn hình mà vẫn bảo toàn trạng thái ứng dụng, giúp tăng tốc độ phát triển.

## Từ khóa phải nhớ
- **Instantly reflect code changes in UI**
- **Hot reload**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the main purpose of hot reload in Flutter?”, source chọn **Instantly reflect code changes in UI**; phương án nhiễu gồm: Improve runtime performance, Publish apps faster, Reduce memory usage.

## Các cách đề từng hỏi
- `PRM393-Q0034` — What is the main purpose of hot reload in Flutter?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: DevTools network debugging

**ID:** `PRM393-TOOL-DEVTOOLS-NETWORK`  
**Chapter:** Development Tooling (`PRM393-CH-TOOLING`)  
**Topic:** Diagnostics  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Flutter DevTools tích hợp Network View cho phép lập trình viên theo dõi chi tiết toàn bộ các yêu cầu HTTP/HTTPS, kiểm tra request headers, body, response data, mã trạng thái và thời gian phản hồi.

## Từ khóa phải nhớ
- **DevTools**
- **DevTools network debugging**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which Flutter tool helps debug network requests?”, source chọn **DevTools**; phương án nhiễu gồm: Inspector, Emulator, Hot reload.

## Các cách đề từng hỏi
- `PRM393-Q0014` — Which Flutter tool helps debug network requests?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Flutter SDK and first-run environment

**ID:** `PRM393-TOOL-SDK-SETUP`  
**Chapter:** Development Tooling (`PRM393-CH-TOOLING`)  
**Topic:** Environment  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Để có thể biên dịch và chạy một ứng dụng Flutter lần đầu tiên, lập trình viên bắt buộc phải cài đặt và cấu hình Flutter SDK trên máy tính.
- Để có thể biên dịch, chạy thử và kiểm thử trực quan ứng dụng Flutter trên máy tính cá nhân, lập trình viên bắt buộc phải có môi trường đích để ứng dụng khởi chạy: đó có thể là máy ảo phần mềm (Emulator trên Android Studio / Simulator trên Xcode) hoặc kết nối trực tiếp với thiết bị thật (Physical device) qua cáp USB / Wi-Fi.
- Flutter SDK (Software Development Kit) là gói phần mềm cung cấp đầy đủ các công cụ biên dịch (compilers), công cụ dòng lệnh (Flutter CLI), engine kết xuất đồ họa, và kho thư viện mã nguồn phong phú (framework libraries) để phục vụ cho việc phát triển, kiểm thử và build ứng dụng Flutter.

## Từ khóa phải nhớ
- **Setting up the Flutter SDK**
- **An emulator or physical device**
- **To provide tools and libraries for Flutter development**
- **Flutter SDK and first-run environment**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which step is required before running a Flutter app for the first time?”, source chọn **Setting up the Flutter SDK**; phương án nhiễu gồm: Publishing the app, Configuring a database, Writing backend APIs.
- Với dạng hỏi “Which component is required to run and test Flutter applications on a local machine?”, source chọn **An emulator or physical device**; phương án nhiễu gồm: A cloud hosting service, A physical server, A database management system.
- Với dạng hỏi “What is the purpose of the Flutter SDK?”, source chọn **To provide tools and libraries for Flutter development**; phương án nhiễu gồm: To store application data permanently, To deploy applications directly to app stores, To replace the operating system of a device.
- ⚠️ Concept này có ít nhất một master question bị flag; xem `06_PRM393_REVIEW_ISSUES.md` trước khi dùng cho Exam Mode chuẩn.

## Các cách đề từng hỏi
- `PRM393-Q0045` — Which step is required before running a Flutter app for the first time?
- `PRM393-Q0119` — Which component is required to run and test Flutter applications on a local machine?
- `PRM393-Q0142` — What is the purpose of the Flutter SDK?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: New project first-run workflow

**ID:** `PRM393-TOOL-PROJECT-WORKFLOW`  
**Chapter:** Development Tooling (`PRM393-CH-TOOLING`)  
**Topic:** Workflow  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Sau khi khởi tạo dự án Flutter mới (flutter create), bước thực hành tiêu chuẩn đầu tiên là chạy thử ứng dụng đếm số mặc định (counter app) trên máy ảo (emulator) hoặc thiết bị thật để xác nhận môi trường phát triển đã sẵn sàng và hoạt động ổn định.

## Từ khóa phải nhớ
- **Running the default app on a device**
- **New project first-run workflow**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which activity is typically performed after creating a new Flutter project?”, source chọn **Running the default app on a device**; phương án nhiễu gồm: Deploying to app stores, Configuring authentication, Optimizing database queries.

## Các cách đề từng hỏi
- `PRM393-Q0075` — Which activity is typically performed after creating a new Flutter project?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`

---

# Concept: Form purpose and state operations

**ID:** `PRM393-UI-FORMS`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Forms  
**Frequency:** 4 question occurrences / 2 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- Biểu mẫu (Forms) là công cụ chính để thu thập dữ liệu nhập vào từ người dùng (như tài khoản, mật khẩu, phản hồi, biểu mẫu khảo sát) và hỗ trợ kiểm tra tính hợp lệ của dữ liệu (validation).
- Phương thức reset() của FormState (gọi thông qua _formKey.currentState?.reset()) dùng để khôi phục toàn bộ các trường nhập liệu trong Form về lại giá trị ban đầu và xóa bỏ các thông báo lỗi kiểm tra.

## Từ khóa phải nhớ
- **User data collection**
- **reset()**
- **Form purpose and state operations**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Why are forms important in mobile applications?”, source chọn **User data collection**; phương án nhiễu gồm: UI decoration, State management, Navigation.
- Với dạng hỏi “Which method resets all form fields?”, source chọn **reset()**; phương án nhiễu gồm: clear(), dispose(), remove().

## Các cách đề từng hỏi
- `PRM393-Q0035` — Why are forms important in mobile applications?
- `PRM393-Q0042` — Which method resets all form fields?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`

---

# Concept: Form validation

**ID:** `PRM393-UI-FORM-VALIDATION`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Forms  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Khi gọi _formKey.currentState!.validate(), nếu có bất kỳ trường TextFormField nào không thỏa mãn quy tắc kiểm tra (validator trả về chuỗi thông báo lỗi thay vì null), form sẽ không cho phép submit và tự động hiển thị các dòng thông báo lỗi (Error messages) màu đỏ ngay bên dưới các ô nhập liệu tương ứng.

## Từ khóa phải nhớ
- **Error messages are shown**
- **Form validation**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What happens if form validation fails?”, source chọn **Error messages are shown**; phương án nhiễu gồm: Form submits, App crashes, Data is saved.

## Các cách đề từng hỏi
- `PRM393-Q0135` — What happens if form validation fails?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: TextField, TextEditingController and input types

**ID:** `PRM393-UI-TEXT-INPUT`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Forms  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- TextField (hoặc TextFormField) khi được cấu hình thuộc tính obscureText: true sẽ tự động ẩn các ký tự người dùng nhập vào thành dấu chấm tròn để bảo mật mật khẩu.
- TextEditingController được gắn vào các widget nhập liệu (TextField, TextFormField) để theo dõi, lấy giá trị hiện tại, chỉnh sửa nội dung văn bản cũng như lắng nghe các sự kiện thay đổi ký tự.
- Thiết lập keyboardType: TextInputType.emailAddress trong TextField sẽ yêu cầu bàn phím ảo của hệ điều hành (Android/iOS) hiển thị bố cục bàn phím tối ưu cho việc nhập email (có sẵn phím @, dấu chấm ., và gợi ý tên miền), giúp nâng cao trải nghiệm người dùng (UX).

## Từ khóa phải nhớ
- **TextField**
- **Text input value**
- **TextInputType.emailAddress**
- **TextField, TextEditingController and input types**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget can hide user input text when configured for password entry?”, source chọn **TextField**; phương án nhiễu gồm: ObscureText, SecureInput, PasswordField.
- Với dạng hỏi “What does TextEditingController manage?”, source chọn **Text input value**; phương án nhiễu gồm: Theme, Validation rules, Layout constraints.
- Với dạng hỏi “Which input type improves user experience for emails?”, source chọn **TextInputType.emailAddress**; phương án nhiễu gồm: TextInputType.number, TextInputType.text, TextInputType.url.

## Các cách đề từng hỏi
- `PRM393-Q0040` — Which widget can hide user input text when configured for password entry?
- `PRM393-Q0070` — What does TextEditingController manage?
- `PRM393-Q0103` — Which input type improves user experience for emails?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Column and cross-axis alignment

**ID:** `PRM393-UI-FLEX-ALIGNMENT`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Layout  
**Frequency:** 3 question occurrences / 2 exact-unique wording(s) / 3 source exam(s)  
**Importance:** ★★★★☆

## Định nghĩa / ý cốt lõi từ source
- Trong widget Column, trục chính (mainAxisAlignment) là trục dọc (vertical), còn trục phụ vuông góc (crossAxisAlignment) là trục ngang (horizontal).
- Do đó crossAxisAlignment điều khiển cách căn chỉnh các widget con theo chiều ngang (Left/Right/Center/Stretch).
- Widget Column là widget bố cục cơ bản trong Flutter dùng để sắp xếp danh sách các widget con theo một chiều dọc (Vertical).
- Row sắp xếp theo chiều ngang; Stack xếp chồng theo chiều sâu.

## Từ khóa phải nhớ
- **Horizontal alignment in Column**
- **Column**
- **Column and cross-axis alignment**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What does crossAxisAlignment control?”, source chọn **Horizontal alignment in Column**; phương án nhiễu gồm: Vertical alignment in Column, Child order, Widget size.
- Với dạng hỏi “Which widget is most commonly used to arrange children vertically?”, source chọn **Column**; phương án nhiễu gồm: Row, Stack, Expanded.

## Các cách đề từng hỏi
- `PRM393-Q0095` — What does crossAxisAlignment control?
- `PRM393-Q0137` — Which widget is most commonly used to arrange children vertically?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: SizedBox spacing

**ID:** `PRM393-UI-SIZEDBOX`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Layout  
**Frequency:** 2 question occurrences / 1 exact-unique wording(s) / 2 source exam(s)  
**Importance:** ★★★☆☆

## Định nghĩa / ý cốt lõi từ source
- SizedBox là widget nhẹ và tối ưu nhất để tạo khoảng trống cố định (về chiều rộng hoặc chiều cao) giữa các widget con trong Column hoặc Row.

## Từ khóa phải nhớ
- **SizedBox**
- **SizedBox spacing**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget is best used to add fixed empty space?”, source chọn **SizedBox**; phương án nhiễu gồm: Padding, Expanded, Container.

## Các cách đề từng hỏi
- `PRM393-Q0025` — Which widget is best used to add fixed empty space?

## Source Exams
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: Stack and overlapping children

**ID:** `PRM393-UI-STACK`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Layout  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Widget Stack cho phép xếp chồng các widget con lên nhau theo trục Z (chiều sâu không gian), định vị vị trí các widget con thông qua widget Positioned.

## Từ khóa phải nhớ
- **Stack**
- **Stack and overlapping children**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget allows overlapping of its child widgets?”, source chọn **Stack**; phương án nhiễu gồm: Column, Row, Expanded.

## Các cách đề từng hỏi
- `PRM393-Q0007` — Which widget allows overlapping of its child widgets?

## Source Exams
- `PRM393-EXAM-SP26-FE`

---

# Concept: Container

**ID:** `PRM393-UI-CONTAINER`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Layout & styling  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- Container là một widget tiện ích đa năng kết hợp nhiều widget đơn lẻ lại với nhau, cung cấp các thuộc tính để xử lý kích thước (width/height), khoảng cách (padding/margin), trang trí giao diện (decoration: màu nền, viền border, bo góc borderRadius, bóng đổ boxShadow), căn chỉnh (alignment) và biến đổi hình học (transform).

## Từ khóa phải nhớ
- **Layout, styling, and positioning**
- **Container**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the main purpose of the Container widget?”, source chọn **Layout, styling, and positioning**; phương án nhiễu gồm: Navigation, State management, Network requests.

## Các cách đề từng hỏi
- `PRM393-Q0115` — What is the main purpose of the Container widget?

## Source Exams
- `PRM393-EXAM-SU26-FE`

---

# Concept: GridView

**ID:** `PRM393-UI-GRIDVIEW`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Scrollable layout  
**Frequency:** 1 question occurrences / 1 exact-unique wording(s) / 1 source exam(s)  
**Importance:** ★☆☆☆☆

## Định nghĩa / ý cốt lõi từ source
- GridView là widget chuyên dụng trong Flutter dùng để sắp xếp và hiển thị các phần tử con theo dạng lưới hai chiều (hàng và cột) có khả năng cuộn được (ví dụ: lưới sản phẩm thương mại điện tử, lưới ảnh thư viện).

## Từ khóa phải nhớ
- **GridView**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “Which widget is suitable for displaying items in a grid layout?”, source chọn **GridView**; phương án nhiễu gồm: ListView, Column, Stack.

## Các cách đề từng hỏi
- `PRM393-Q0143` — Which widget is suitable for displaying items in a grid layout?

## Source Exams
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: CustomScrollView and Slivers

**ID:** `PRM393-UI-SLIVERS`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Scrolling  
**Frequency:** 5 question occurrences / 4 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- SliverAppBar là thanh tiêu đề ứng dụng linh hoạt có thể cuộn, co giãn (expand/collapse) mượt mà cùng danh sách khi cuộn bên trong CustomScrollView.
- CustomScrollView cho phép kết hợp trực tiếp nhiều thành phần cuộn dạng Sliver (như SliverAppBar, SliverList, SliverGrid) để tạo ra các hiệu ứng cuộn tùy biến phức tạp và mượt mà.
- CustomScrollView cho phép lồng ghép và tương tác đồng bộ giữa thanh tiêu đề SliverAppBar và các danh sách cuộn dạng sliver (SliverList, SliverGrid).
- Khi người dùng cuộn danh sách, SliverAppBar có thể co giãn, ẩn hiện hoặc ghim một cách mượt mà theo cử chỉ cuộn.
- SliverList là thành phần sliver chuyên dùng để hiển thị một danh sách cuộn các widget con theo một chiều dọc tuyến tính bên trong CustomScrollView (tương đương với ListView nhưng hoạt động theo cơ chế sliver hiệu năng cao).

## Từ khóa phải nhớ
- **Scrollable flexible app bar**
- **CustomScrollView**
- **SliverList**
- **CustomScrollView and Slivers**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the purpose of SliverAppBar?”, source chọn **Scrollable flexible app bar**; phương án nhiễu gồm: Static app bar, Bottom navigation, Drawer control.
- Với dạng hỏi “Which widget enables custom scroll effects in Flutter?”, source chọn **CustomScrollView**; phương án nhiễu gồm: ListView, SingleChildScrollView, Column.
- Với dạng hỏi “Which widget allows both scrolling and app bars to interact?”, source chọn **CustomScrollView**; phương án nhiễu gồm: ListView, GridView, Stack.
- Với dạng hỏi “Which sliver is commonly used to display a scrolling list?”, source chọn **SliverList**; phương án nhiễu gồm: SliverGrid, SliverAppBar, SliverFillRemaining.

## Các cách đề từng hỏi
- `PRM393-Q0024` — What is the purpose of SliverAppBar?
- `PRM393-Q0056` — Which widget enables custom scroll effects in Flutter?
- `PRM393-Q0104` — Which widget allows both scrolling and app bars to interact?
- `PRM393-Q0134` — Which sliver is commonly used to display a scrolling list?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---

# Concept: ThemeData and app-wide theming

**ID:** `PRM393-UI-THEME`  
**Chapter:** UI, Layout & Forms (`PRM393-CH-UI`)  
**Topic:** Theming  
**Frequency:** 4 question occurrences / 3 exact-unique wording(s) / 4 source exam(s)  
**Importance:** ★★★★★

## Định nghĩa / ý cốt lõi từ source
- ThemeData dùng để thiết lập bảng màu (colorScheme), phông chữ (textTheme), kiểu dáng nút bấm (elevatedButtonTheme), thanh tiêu đề (appBarTheme)...
- áp dụng đồng bộ trên toàn bộ ứng dụng (hỗ trợ Light Mode / Dark Mode).
- Widget gốc MaterialApp nhận thuộc tính theme và darkTheme để áp dụng cấu hình ThemeData (màu sắc, typography, kiểu widget...) cho toàn bộ ứng dụng.
- Tùy biến và thiết lập Theme (ThemeData, ColorScheme, Typography) nên được thực hiện sớm ngay trong giai đoạn thiết kế UI/UX và xây dựng nền tảng ban đầu.
- Việc này giúp toàn bộ các màn hình và widget được xây dựng sau đó tự động kế thừa màu sắc và phong cách chuẩn mực, tránh phải sửa lại giao diện thủ công từng màn hình về sau.

## Từ khóa phải nhớ
- **Define application-wide visual styles**
- **MaterialApp**
- **During UI/UX design phase**
- **ThemeData and app-wide theming**

## Dễ nhầm / bẫy trắc nghiệm
- Với dạng hỏi “What is the primary purpose of ThemeData in Flutter?”, source chọn **Define application-wide visual styles**; phương án nhiễu gồm: Manage navigation, Handle state changes, Control animations.
- Với dạng hỏi “Which widget applies a theme to an entire Flutter application?”, source chọn **MaterialApp**; phương án nhiễu gồm: Scaffold, Theme, Container.
- Với dạng hỏi “When is it most appropriate to customize themes in a Flutter app?”, source chọn **During UI/UX design phase**; phương án nhiễu gồm: After API integration, Only at deployment, Only for testing.

## Các cách đề từng hỏi
- `PRM393-Q0078` — What is the primary purpose of ThemeData in Flutter?
- `PRM393-Q0023` — Which widget applies a theme to an entire Flutter application?
- `PRM393-Q0112` — When is it most appropriate to customize themes in a Flutter app?

## Source Exams
- `PRM393-EXAM-SP26-B5-FE`
- `PRM393-EXAM-SP26-FE`
- `PRM393-EXAM-SU26-FE`
- `PRM393-EXAM-SU26-FE-RE`

---
