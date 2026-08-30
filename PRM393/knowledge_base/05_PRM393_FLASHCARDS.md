# PRM393 Flashcards

Total: **120**

> Flashcards được rút từ Master Knowledge/source explanations; không phải chỉ sao chép nguyên văn toàn bộ câu thi.

## PRM393-FC0001
`concept_id`: `PRM393-ANIM-CURVES`

**Q:** CurvedAnimation and animation curves: ý cốt lõi cần nhớ là gì?

**A:** CurvedAnimation trong Flutter dùng để áp dụng một đường cong phi tuyến (Curves như easeIn, easeInOut, bounceOut...) vào một AnimationController, tạo ra các hiệu ứng chuyển động tự nhiên và sinh động hơn chuyển động tuyến tính thông thường.

---

## PRM393-FC0002
`concept_id`: `PRM393-ANIM-CURVES`

**Q:** Các từ khóa/đáp án đúng thường gắn với CurvedAnimation and animation curves trong corpus là gì?

**A:** Animation curve behavior; bounceOut

---

## PRM393-FC0003
`concept_id`: `PRM393-ANIM-EXPLICIT`

**Q:** Tween and AnimatedBuilder: ý cốt lõi cần nhớ là gì?

**A:** Trong hệ thống Animation của Flutter, Tween (viết tắt của in-between) định nghĩa một dải giá trị biến thiên tuyến tính từ giá trị bắt đầu (begin) đến giá trị kết thúc (end) (ví dụ: đổi màu từ đỏ sang xanh, hoặc biến đổi giá trị từ 0.0 đến 100.0).

---

## PRM393-FC0004
`concept_id`: `PRM393-ANIM-EXPLICIT`

**Q:** Các từ khóa/đáp án đúng thường gắn với Tween and AnimatedBuilder trong corpus là gì?

**A:** Value range for animation; AnimatedBuilder

---

## PRM393-FC0005
`concept_id`: `PRM393-ANIM-IMPLICIT`

**Q:** Implicit animations and AnimatedSwitcher: ý cốt lõi cần nhớ là gì?

**A:** AnimatedSwitcher là một Implicit Animation widget có khả năng tự động thực hiện hiệu ứng chuyển cảnh mềm mại (fade, scale...) giữa widget hiện tại và widget mới khi widget con (child) được thay thế (dựa trên Key của widget con).

---

## PRM393-FC0006
`concept_id`: `PRM393-ANIM-IMPLICIT`

**Q:** Các từ khóa/đáp án đúng thường gắn với Implicit animations and AnimatedSwitcher trong corpus là gì?

**A:** Animation without controller; AnimatedSwitcher; AnimatedContainer

---

## PRM393-FC0007
`concept_id`: `PRM393-ANIM-RESOURCE`

**Q:** v-sync and animation resource disposal: ý cốt lõi cần nhớ là gì?

**A:** AnimationController gắn liền với cơ chế Ticker lắng nghe các khung hình của hệ thống.

---

## PRM393-FC0008
`concept_id`: `PRM393-ANIM-RESOURCE`

**Q:** Các từ khóa/đáp án đúng thường gắn với v-sync and animation resource disposal trong corpus là gì?

**A:** Prevent memory leaks; Optimize animation resources

---

## PRM393-FC0009
`concept_id`: `PRM393-ARCH-CLEAN`

**Q:** Clean Architecture: ý cốt lõi cần nhớ là gì?

**A:** Clean Architecture phân tách ứng dụng thành các lớp độc lập (Presentation, Domain, Data), giúp mã nguồn giảm bớt sự phụ thuộc chặt chẽ, dễ bảo trì, dễ mở rộng tính năng và rất thuận tiện để viết kiểm thử tự động (Unit Test / Mocking).

---

## PRM393-FC0010
`concept_id`: `PRM393-ARCH-PURPOSE`

**Q:** Architecture purpose and early decisions: ý cốt lõi cần nhớ là gì?

**A:** Việc thống nhất và lựa chọn kiến trúc phần mềm (như Clean Architecture, Layered Architecture, BLoC/MVVM) ngay từ đầu giúp cấu trúc code nhất quán, giảm thiểu rủi ro phải tái cấu trúc toàn diện (refactoring) tốn kém khi ứng dụng phát triển lớn hơn.

---

## PRM393-FC0011
`concept_id`: `PRM393-ARCH-PURPOSE`

**Q:** Các từ khóa/đáp án đúng thường gắn với Architecture purpose and early decisions trong corpus là gì?

**A:** Reduce refactoring cost; Organize code structure

---

## PRM393-FC0012
`concept_id`: `PRM393-ARCH-SEPARATION`

**Q:** UI/state separation and Repository pattern: ý cốt lõi cần nhớ là gì?

**A:** Phân tách rõ ràng giữa tầng giao diện (UI) và tầng quản lý trạng thái/logic nghiệp vụ (State/Business Logic) tuân thủ nguyên lý Separation of Concerns, giúp mã nguồn dễ đọc, dễ bảo trì, dễ mở rộng và thuận tiện cho việc viết unit test.

---

## PRM393-FC0013
`concept_id`: `PRM393-ARCH-SEPARATION`

**Q:** Các từ khóa/đáp án đúng thường gắn với UI/state separation and Repository pattern trong corpus là gì?

**A:** Improve maintainability; Repository pattern

---

## PRM393-FC0014
`concept_id`: `PRM393-ARCH-TECH-DEBT`

**Q:** Technical debt: ý cốt lõi cần nhớ là gì?

**A:** Nợ kỹ thuật (Technical Debt) là chi phí phát sinh trong tương lai (tốn thêm thời gian bảo trì, sửa lỗi, khó mở rộng) khi lập trình viên lựa chọn các giải pháp tạm bợ, thiết kế kém chất lượng hoặc bỏ qua kiến trúc chuẩn để kịp tiến độ ngắn hạn.

---

## PRM393-FC0015
`concept_id`: `PRM393-AUTH-CENTRALIZED-STATE`

**Q:** Centralized authentication state: ý cốt lõi cần nhớ là gì?

**A:** Quản lý trạng thái xác thực tại một nơi tập trung (Centralized Auth State) giúp kiểm soát quyền truy cập đồng bộ và nhất quán trên toàn bộ ứng dụng, tránh tình trạng rò rỉ quyền hoặc không đồng nhất giữa các màn hình.

---

## PRM393-FC0016
`concept_id`: `PRM393-AUTH-FIREBASE`

**Q:** Firebase Authentication: ý cốt lõi cần nhớ là gì?

**A:** Firebase Authentication (thông qua package firebase_auth) là dịch vụ Backend-as-a-Service (BaaS) toàn diện của Google, cung cấp sẵn toàn bộ hệ thống xác thực người dùng (Email/Password, Google, Apple, Phone SMS, OAuth...) giúp lập trình viên tích hợp tính năng đăng nhập bảo mật nhanh chóng mà không cần tự xây dựng backend xác thực từ đầu.

---

## PRM393-FC0017
`concept_id`: `PRM393-AUTH-ROUTE-GUARD`

**Q:** Route guard: ý cốt lõi cần nhớ là gì?

**A:** Pattern "Route Guard" (hoặc Guard) là mô hình thiết kế dùng để kiểm tra điều kiện (như trạng thái xác thực/đăng nhập của người dùng) trước khi cho phép điều hướng và hiển thị màn hình đích.

---

## PRM393-FC0018
`concept_id`: `PRM393-AUTH-SECURITY`

**Q:** Secure authentication: ý cốt lõi cần nhớ là gì?

**A:** Xác thực an toàn (Secure Authentication) là yêu cầu tối quan trọng để bảo vệ dữ liệu cá nhân, thông tin nhạy cảm của người dùng và ngăn chặn các truy cập trái phép vào tài nguyên hệ thống.

---

## PRM393-FC0019
`concept_id`: `PRM393-AUTH-SESSION-TOKEN`

**Q:** Login, logout, access token and refresh token: ý cốt lõi cần nhớ là gì?

**A:** Sau khi xác thực đăng nhập thành công, hệ thống sẽ khởi tạo phiên làm việc của người dùng (User session starts), lưu token và cho phép người dùng truy cập các tính năng được bảo vệ.

---

## PRM393-FC0020
`concept_id`: `PRM393-AUTH-SESSION-TOKEN`

**Q:** Các từ khóa/đáp án đúng thường gắn với Login, logout, access token and refresh token trong corpus là gì?

**A:** User session starts; Extend session without re-login; Temporary access credential; End user session securely

---

## PRM393-FC0021
`concept_id`: `PRM393-AUTH-STREAM`

**Q:** StreamBuilder for authentication state: ý cốt lõi cần nhớ là gì?

**A:** Trạng thái xác thực đăng nhập thường được lắng nghe qua một luồng dữ liệu liên tục (Stream).

---

## PRM393-FC0022
`concept_id`: `PRM393-DART-CONST-FINAL`

**Q:** const and final: ý cốt lõi cần nhớ là gì?

**A:** Từ khóa const trong Dart dùng để định nghĩa các hằng số có giá trị cố định được xác định ngay tại thời điểm biên dịch (compile-time constant).

---

## PRM393-FC0023
`concept_id`: `PRM393-DART-CONST-FINAL`

**Q:** Các từ khóa/đáp án đúng thường gắn với const and final trong corpus là gì?

**A:** const; The variable value is fixed after assignment

---

## PRM393-FC0024
`concept_id`: `PRM393-DART-GENERICS`

**Q:** Generics: ý cốt lõi cần nhớ là gì?

**A:** Generics (Generic Programming với cú pháp kiểu tham số hóa <T>) cho phép tạo ra các class, interface, method dùng chung có thể hoạt động linh hoạt với nhiều kiểu dữ liệu khác nhau mà vẫn đảm bảo tính an toàn kiểu dữ liệu (Type Safety) ngay tại thời điểm biên dịch.

---

## PRM393-FC0025
`concept_id`: `PRM393-DART-LIST`

**Q:** List ordered collection: ý cốt lõi cần nhớ là gì?

**A:** List trong Dart là một tập hợp các phần tử có thứ tự tuần tự (ordered collection), cho phép truy xuất các phần tử nhanh chóng qua chỉ số vị trí (index).

---

## PRM393-FC0026
`concept_id`: `PRM393-DART-MAP`

**Q:** Map key-value collection: ý cốt lõi cần nhớ là gì?

**A:** Map trong Dart là tập hợp lưu trữ dữ liệu có cấu trúc theo cặp khóa - giá trị (key-value), cho phép truy xuất, cập nhật giá trị nhanh chóng thông qua khóa (key) tương ứng.

---

## PRM393-FC0027
`concept_id`: `PRM393-DART-NULL-SAFETY`

**Q:** Sound null safety: ý cốt lõi cần nhớ là gì?

**A:** Với tính năng Sound Null Safety trong Dart, mọi biến non-nullable (không có dấu ?) bắt buộc phải có giá trị khởi tạo trước khi được sử dụng.

---

## PRM393-FC0028
`concept_id`: `PRM393-DART-NULL-SAFETY`

**Q:** Các từ khóa/đáp án đúng thường gắn với Sound null safety trong corpus là gì?

**A:** A compile-time error occurs; Null safety

---

## PRM393-FC0029
`concept_id`: `PRM393-DART-OOP`

**Q:** Classes and objects: ý cốt lõi cần nhớ là gì?

**A:** Dart là ngôn ngữ lập trình hướng đối tượng thuần túy; nền tảng cốt lõi của OOP trong Dart được thể hiện qua Khái niệm Lớp (Classes) và Đối tượng (Objects).

---

## PRM393-FC0030
`concept_id`: `PRM393-DART-OOP`

**Q:** Các từ khóa/đáp án đúng thường gắn với Classes and objects trong corpus là gì?

**A:** Classes and objects; A blueprint for creating objects

---

## PRM393-FC0031
`concept_id`: `PRM393-DART-PACKAGES`

**Q:** Packages and imports: ý cốt lõi cần nhớ là gì?

**A:** Dart tổ chức và module hóa mã nguồn thông qua hệ thống các packages và thư viện, sử dụng câu lệnh import (và export) để tái sử dụng mã nguồn giữa các file và các dự án khác nhau.

---

## PRM393-FC0032
`concept_id`: `PRM393-DART-ROLE`

**Q:** Dart role in Flutter: ý cốt lõi cần nhớ là gì?

**A:** Dart là ngôn ngữ lập trình đa năng (general-purpose), nhưng được Google thiết kế và tối ưu hóa đặc biệt tập trung vào việc xây dựng giao diện người dùng nhanh chóng, mượt mà (hỗ trợ cả JIT cho Hot Reload và AOT cho Native compilation).

---

## PRM393-FC0033
`concept_id`: `PRM393-DART-ROLE`

**Q:** Các từ khóa/đáp án đúng thường gắn với Dart role in Flutter trong corpus là gì?

**A:** General-purpose programming with UI focus; It supports both UI and application logic efficiently; Dart

---

## PRM393-FC0034
`concept_id`: `PRM393-DEPLOY-BUILD-RELEASE`

**Q:** Release APK and release distribution: ý cốt lõi cần nhớ là gì?

**A:** Lệnh flutter build apk (mặc định ở chế độ release) sẽ biên dịch toàn bộ mã nguồn Dart và tài nguyên thành file cài đặt APK tối ưu sẵn sàng để phát hành hoặc cài trực tiếp lên thiết bị Android.

---

## PRM393-FC0035
`concept_id`: `PRM393-DEPLOY-BUILD-RELEASE`

**Q:** Các từ khóa/đáp án đúng thường gắn với Release APK and release distribution trong corpus là gì?

**A:** flutter build apk; Prepare app for distribution

---

## PRM393-FC0036
`concept_id`: `PRM393-DEPLOY-CH14-PLUS`

**Q:** Chapter 14 optional/Plus claim in source: ý cốt lõi cần nhớ là gì?

**A:** Trong giáo trình môn học PRM393, chương triển khai phát hành lên kho ứng dụng (App Store/Google Play) thường là phần tùy chọn/mở rộng (Plus) vì sinh viên và nhà phát triển có thể build, test và cài đặt trực tiếp trên thiết bị (sideloading/debug/release APK) mà không bắt buộc phải xuất bản chính thức lên Store.

---

## PRM393-FC0037
`concept_id`: `PRM393-DEPLOY-SIGNING`

**Q:** Secure signing keys: ý cốt lõi cần nhớ là gì?

**A:** Lưu trữ và quản lý an toàn khóa ký ứng dụng (Keystore cho Android, Distribution Certificate/Provisioning Profile cho iOS) là nguyên tắc bắt buộc để đảm bảo tính xác thực, tránh bị giả mạo và bảo mật ứng dụng khi phát hành.

---

## PRM393-FC0038
`concept_id`: `PRM393-FLUTTER-BUILDCONTEXT`

**Q:** BuildContext: ý cốt lõi cần nhớ là gì?

**A:** BuildContext là một đối tượng đại diện cho vị trí (handle) của một widget cụ thể bên trong cây widget (widget tree).

---

## PRM393-FC0039
`concept_id`: `PRM393-FLUTTER-COMPOSITION`

**Q:** Widget composition and reuse: ý cốt lõi cần nhớ là gì?

**A:** Kiến trúc xây dựng trên Widget của Flutter cho phép tái sử dụng tối đa mã nguồn giao diện trên nhiều nền tảng khác nhau mà vẫn đảm bảo tính nhất quán và hiệu năng cao.

---

## PRM393-FC0040
`concept_id`: `PRM393-FLUTTER-COMPOSITION`

**Q:** Các từ khóa/đáp án đúng thường gắn với Widget composition and reuse trong corpus là gì?

**A:** Widgets allow code reuse across platforms; Better code reuse and UI consistency

---

## PRM393-FC0041
`concept_id`: `PRM393-FLUTTER-FRAMEWORK`

**Q:** Flutter framework role: ý cốt lõi cần nhớ là gì?

**A:** Flutter là một UI toolkit đa nền tảng, cung cấp tập hợp các widget giao diện dựng sẵn (Material Design, Cupertino) cùng với engine/pipeline vẽ đồ họa và logic render độc lập với hệ điều hành gốc.

---

## PRM393-FC0042
`concept_id`: `PRM393-FLUTTER-LIFECYCLE`

**Q:** StatefulWidget lifecycle: ý cốt lõi cần nhớ là gì?

**A:** Hiểu rõ vòng đời của Widget (initState, didChangeDependencies, build, didUpdateWidget, dispose...) giúp lập trình viên thực hiện các thao tác đúng thời điểm: khởi tạo controller/listener trong initState, giải phóng tài nguyên trong dispose, và kích hoạt cập nhật giao diện (setState) chính xác mà không gặp lỗi "setState called after dispose" hay rò rỉ bộ nhớ.

---

## PRM393-FC0043
`concept_id`: `PRM393-FLUTTER-MATERIALAPP`

**Q:** MaterialApp as application root: ý cốt lõi cần nhớ là gì?

**A:** MaterialApp (hoặc CupertinoApp) thường được đặt làm widget gốc (Root Widget) của toàn bộ ứng dụng Flutter.

---

## PRM393-FC0044
`concept_id`: `PRM393-FLUTTER-PURPOSE`

**Q:** Flutter purpose and multi-platform single codebase: ý cốt lõi cần nhớ là gì?

**A:** Flutter là framework đa nền tảng thực sự, cho phép lập trình viên chỉ viết một cơ sở mã nguồn duy nhất (single codebase) và biên dịch ra ứng dụng chạy trên Android, iOS, Web, Windows, macOS, Linux.

---

## PRM393-FC0045
`concept_id`: `PRM393-FLUTTER-PURPOSE`

**Q:** Các từ khóa/đáp án đúng thường gắn với Flutter purpose and multi-platform single codebase trong corpus là gì?

**A:** Android, iOS, web, and desktop; Creating native applications from a single codebase; Reduced development and maintenance effort

---

## PRM393-FC0046
`concept_id`: `PRM393-FLUTTER-REACTIVE-BUILD`

**Q:** Declarative UI, build() and rebuild: ý cốt lõi cần nhớ là gì?

**A:** Hàm build(BuildContext context) trong StatelessWidget hoặc State<StatefulWidget> có nhiệm vụ trả về cấu trúc widget con (widget tree) mô tả giao diện tương ứng với cấu hình và trạng thái hiện tại.

---

## PRM393-FC0047
`concept_id`: `PRM393-FLUTTER-REACTIVE-BUILD`

**Q:** Các từ khóa/đáp án đúng thường gắn với Declarative UI, build() and rebuild trong corpus là gì?

**A:** Rebuilding UI in response to state changes; Widget rebuilding; When state changes; A widget tree describing the UI; Calling setState()

---

## PRM393-FC0048
`concept_id`: `PRM393-FLUTTER-WIDGET-TREE`

**Q:** Widget tree and immutability: ý cốt lõi cần nhớ là gì?

**A:** Widget trong Flutter chỉ là các đối tượng mô tả cấu hình bất biến (immutable descriptions).

---

## PRM393-FC0049
`concept_id`: `PRM393-FLUTTER-WIDGET-TREE`

**Q:** Các từ khóa/đáp án đúng thường gắn với Widget tree and immutability trong corpus là gì?

**A:** They are immutable descriptions; Using a hierarchical widget tree; Widgets are recreated instead of modified

---

## PRM393-FC0050
`concept_id`: `PRM393-NAV-CONTEXT`

**Q:** BuildContext in navigation: ý cốt lõi cần nhớ là gì?

**A:** BuildContext định vị vị trí của widget trong cây widget.

---

## PRM393-FC0051
`concept_id`: `PRM393-NAV-PASS-DATA`

**Q:** Passing data between screens: ý cốt lõi cần nhớ là gì?

**A:** Cách truyền dữ liệu cơ bản, an toàn và trực tiếp nhất giữa các màn hình trong Flutter là truyền qua các tham số của hàm khởi tạo (Constructor arguments) của Widget màn hình mới khi thực hiện Navigator.push.

---

## PRM393-FC0052
`concept_id`: `PRM393-NAV-ROUTE-STACK`

**Q:** Navigator and pop: ý cốt lõi cần nhớ là gì?

**A:** Hệ thống điều hướng màn hình trong Flutter hoạt động theo cơ chế ngăn xếp (LIFO Route Stack).

---

## PRM393-FC0053
`concept_id`: `PRM393-NAV-STRUCTURE`

**Q:** Structured navigation logic: ý cốt lõi cần nhớ là gì?

**A:** Việc tổ chức logic điều hướng một cách bài bản và có cấu trúc (sử dụng Named Routes, AutoRoute, GoRouter hoặc Navigation 2.0 Router Delegate) giúp mã nguồn dễ bảo trì, dễ quản lý các luồng điều hướng phức tạp (Deep linking, Authentication guards, Nested navigation) và tránh việc viết code chuyển màn hình rải rác khó kiểm soát.

---

## PRM393-FC0054
`concept_id`: `PRM393-NET-AUTH-HEADER`

**Q:** Authorization header: ý cốt lõi cần nhớ là gì?

**A:** Header Authorization được sử dụng trong các yêu cầu HTTP để truyền thông tin xác thực/ủy quyền của người dùng (ví dụ: Authorization: Bearer <token>).

---

## PRM393-FC0055
`concept_id`: `PRM393-NET-FUTUREBUILDER`

**Q:** FutureBuilder for API responses: ý cốt lõi cần nhớ là gì?

**A:** FutureBuilder là widget chuyên dùng để theo dõi một Future (như lời gọi API bất đồng bộ) và tự động xây dựng giao diện tương ứng với từng trạng thái: đang chờ (ConnectionState.waiting), gặp lỗi (snapshot.hasError), hoặc thành công (snapshot.hasData).

---

## PRM393-FC0056
`concept_id`: `PRM393-NET-HTTP-METHODS`

**Q:** GET and POST methods: ý cốt lõi cần nhớ là gì?

**A:** Trong giao thức HTTP và chuẩn RESTful API, phương thức GET được quy định dùng để yêu cầu và lấy dữ liệu từ server về client mà không làm thay đổi trạng thái của tài nguyên trên server.

---

## PRM393-FC0057
`concept_id`: `PRM393-NET-HTTP-METHODS`

**Q:** Các từ khóa/đáp án đúng thường gắn với GET and POST methods trong corpus là gì?

**A:** GET; POST

---

## PRM393-FC0058
`concept_id`: `PRM393-NET-HTTP-STATUS`

**Q:** HTTP status codes: ý cốt lõi cần nhớ là gì?

**A:** Mã trạng thái HTTP trong dải 5xx (như 500 Internal Server Error) chỉ ra rằng yêu cầu gửi lên hợp lệ nhưng máy chủ đã gặp lỗi nội bộ khi xử lý yêu cầu đó.

---

## PRM393-FC0059
`concept_id`: `PRM393-NET-HTTP-STATUS`

**Q:** Các từ khóa/đáp án đúng thường gắn với HTTP status codes trong corpus là gì?

**A:** 500; Success; 404

---

## PRM393-FC0060
`concept_id`: `PRM393-NET-HTTPS`

**Q:** HTTPS for API security: ý cốt lõi cần nhớ là gì?

**A:** Sử dụng giao thức HTTPS (Hypertext Transfer Protocol Secure) với mã hóa SSL/TLS giúp mã hóa toàn bộ dữ liệu trao đổi giữa ứng dụng di động và máy chủ (API Server), ngăn chặn các cuộc tấn công nghe lén (Eavesdropping), đánh cắp dữ liệu và tấn công trung gian (Man-in-the-Middle - MitM).

---

## PRM393-FC0061
`concept_id`: `PRM393-NET-JSON-MODELS`

**Q:** JSON parsing and model mapping: ý cốt lõi cần nhớ là gì?

**A:** JSON Parsing (chuyển đổi chuỗi định dạng JSON nhận từ API thành các đối tượng Dart / Model Classes) giúp chương trình thao tác với dữ liệu có cấu trúc an toàn kiểu (type-safe) thay vì làm việc với các chuỗi thô.

---

## PRM393-FC0062
`concept_id`: `PRM393-NET-JSON-MODELS`

**Q:** Các từ khóa/đáp án đúng thường gắn với JSON parsing and model mapping trong corpus là gì?

**A:** Convert JSON into Dart objects; Ensure type safety

---

## PRM393-FC0063
`concept_id`: `PRM393-NET-PAGINATION`

**Q:** Pagination: ý cốt lõi cần nhớ là gì?

**A:** Phân trang (Pagination) là kỹ thuật chia nhỏ tập dữ liệu lớn thành từng trang/khối (pages/chunks) để tải và render dần (lazy loading / infinite scrolling), giúp tối ưu băng thông mạng, giảm tải bộ nhớ và cải thiện trải nghiệm người dùng.

---

## PRM393-FC0064
`concept_id`: `PRM393-NET-REST`

**Q:** REST fundamentals: ý cốt lõi cần nhớ là gì?

**A:** REST là viết tắt của Representational State Transfer (Chuyển giao trạng thái đại diện) – một kiểu kiến trúc phần mềm chuẩn mực được Roy Fielding định nghĩa, sử dụng giao thức HTTP không trạng thái (stateless) để truyền tải và thao tác với các tài nguyên định danh qua URL/URI.

---

## PRM393-FC0065
`concept_id`: `PRM393-PERF-CH13-PLUS`

**Q:** Chapter 13 optional/Plus claim in source: ý cốt lõi cần nhớ là gì?

**A:** Trong chương trình môn học PRM393, Chương 13 (Tối ưu hóa hiệu năng nâng cao & Profiling) được xếp vào phần mở rộng (Plus) vì các ứng dụng thông thường vẫn có thể hoạt động đầy đủ chức năng cơ bản mà không nhất thiết phải áp dụng các kỹ thuật tối ưu hóa quá chuyên sâu.

---

## PRM393-FC0066
`concept_id`: `PRM393-PERF-CONST`

**Q:** const widgets: ý cốt lõi cần nhớ là gì?

**A:** Widget khai báo với từ khóa const được tạo một lần duy nhất tại compile-time và lưu vào bộ nhớ dùng chung.

---

## PRM393-FC0067
`concept_id`: `PRM393-PERF-GOAL`

**Q:** Smooth and responsive UI: ý cốt lõi cần nhớ là gì?

**A:** Mục tiêu tối thượng của việc tối ưu hóa hiệu năng (Performance Optimization) trong ứng dụng Flutter là duy trì tốc độ khung hình ổn định ở mức 60 FPS hoặc 120 FPS (16.6ms hoặc 8.3ms mỗi frame), loại bỏ hiện tượng giật khung hình (jank), đảm bảo giao diện luôn phản hồi tức thì và mượt mà trước mọi tương tác của người dùng.

---

## PRM393-FC0068
`concept_id`: `PRM393-PERF-PROFILING`

**Q:** DevTools performance analysis: ý cốt lõi cần nhớ là gì?

**A:** Flutter DevTools là bộ công cụ hoàn chỉnh chạy trên trình duyệt cung cấp các công cụ phân tích hiệu năng chuyên sâu như Timeline, CPU Profiler, Memory Profiler, Network Inspector và Performance View (đo khung hình 60/120 fps, phát hiện jank).

---

## PRM393-FC0069
`concept_id`: `PRM393-PERF-REBUILD-SCOPE`

**Q:** Fine-grained rebuild scope: ý cốt lõi cần nhớ là gì?

**A:** Tối ưu hóa phạm vi rebuild (Rebuild Scope Optimization) là kỹ thuật cấu trúc widget sao cho khi có sự thay đổi state, chỉ có những widget thực sự phụ thuộc vào dữ liệu đó bị rebuild thay vì rebuild toàn bộ màn hình hoặc widget cha cấp cao.

---

## PRM393-FC0070
`concept_id`: `PRM393-PERF-REBUILD-SCOPE`

**Q:** Các từ khóa/đáp án đúng thường gắn với Fine-grained rebuild scope trong corpus là gì?

**A:** Fine-grained state updates; Splitting widgets; Limiting rebuild to affected widgets

---

## PRM393-FC0071
`concept_id`: `PRM393-PERF-REPAINT`

**Q:** RepaintBoundary: ý cốt lõi cần nhớ là gì?

**A:** RepaintBoundary tạo ra một RenderRepaintBoundary độc lập trong cây render, giúp cô lập vùng vẽ của widget con để khi widget khác repaint thì khu vực này không cần phải vẽ lại, tránh lãng phí GPU/CPU rendering.

---

## PRM393-FC0072
`concept_id`: `PRM393-SE-SDLC`

**Q:** Requirements analysis: ý cốt lõi cần nhớ là gì?

**A:** Trong quy trình phát triển phần mềm (SDLC), giai đoạn Phân tích yêu cầu (Requirements Analysis) có nhiệm vụ thu thập, phân tích và làm rõ các nhu cầu của khách hàng/người dùng trước khi bước vào giai đoạn thiết kế và lập trình.

---

## PRM393-FC0073
`concept_id`: `PRM393-SE-VERSION-CONTROL`

**Q:** Git and version control: ý cốt lõi cần nhớ là gì?

**A:** Hệ thống quản lý phiên bản (như Git) đóng vai trò then chốt trong việc theo dõi lịch sử chỉnh sửa mã nguồn, quản lý các nhánh phát triển, hỗ trợ làm việc nhóm và rollback khi gặp sự cố.

---

## PRM393-FC0074
`concept_id`: `PRM393-SE-VERSION-CONTROL`

**Q:** Các từ khóa/đáp án đúng thường gắn với Git and version control trong corpus là gì?

**A:** Track and manage code changes; Git

---

## PRM393-FC0075
`concept_id`: `PRM393-STATE-BLOC-BASICS`

**Q:** BLoC meaning, package and scalable use: ý cốt lõi cần nhớ là gì?

**A:** Package flutter_bloc cung cấp các công cụ và widget chuyên dụng (BlocProvider, BlocBuilder, BlocListener, BlocConsumer) để hiện thực hóa kiến trúc quản lý trạng thái BLoC và Cubit trong Flutter.

---

## PRM393-FC0076
`concept_id`: `PRM393-STATE-BLOC-BASICS`

**Q:** Các từ khóa/đáp án đúng thường gắn với BLoC meaning, package and scalable use trong corpus là gì?

**A:** flutter_bloc; Standardized architecture; BLoC; Business Logic Component

---

## PRM393-FC0077
`concept_id`: `PRM393-STATE-BLOC-EVENT-STATE`

**Q:** BLoC event-state flow and Streams: ý cốt lõi cần nhớ là gì?

**A:** Trong kiến trúc BLoC, đầu vào (Input) là các sự kiện người dùng tương tác (Events), BLoC xử lý nghiệp vụ và phát ra kết quả đầu ra (Output) là các trạng thái mới (States).

---

## PRM393-FC0078
`concept_id`: `PRM393-STATE-BLOC-EVENT-STATE`

**Q:** Các từ khóa/đáp án đúng thường gắn với BLoC event-state flow and Streams trong corpus là gì?

**A:** Trigger state changes; Stream; States

---

## PRM393-FC0079
`concept_id`: `PRM393-STATE-BLOC-IMMUTABILITY`

**Q:** Immutable BLoC states: ý cốt lõi cần nhớ là gì?

**A:** Tính bất biến (Immutability) đảm bảo rằng mỗi state phát ra là một bản chụp (snapshot) dữ liệu cố định không thể bị biến đổi ngầm, giúp luồng dữ liệu trở nên nhất quán, dễ dự đoán hành vi ứng dụng và dễ dàng so sánh sự thay đổi state (==).

---

## PRM393-FC0080
`concept_id`: `PRM393-STATE-CONSISTENCY`

**Q:** State consistency: ý cốt lõi cần nhớ là gì?

**A:** Quản lý trạng thái không đúng cách dẫn đến rủi ro lớn nhất là giao diện hiển thị không đồng bộ với dữ liệu thực tế (UI Inconsistency / Stale State), dẫn đến các lỗi logic và trải nghiệm người dùng kém.

---

## PRM393-FC0081
`concept_id`: `PRM393-STATE-CUBIT`

**Q:** Cubit: ý cốt lõi cần nhớ là gì?

**A:** Cubit là một biến thể đơn giản hóa của BLoC trong thư viện flutter_bloc.

---

## PRM393-FC0082
`concept_id`: `PRM393-STATE-HOISTING`

**Q:** State hoisting: ý cốt lõi cần nhớ là gì?

**A:** State Hoisting (Nâng state lên cấp cao hơn) là mô hình chuyển việc lưu trữ và quản lý state từ các widget con lên widget cha chung (lowest common ancestor).

---

## PRM393-FC0083
`concept_id`: `PRM393-STATE-LOCALITY`

**Q:** Local state and rebuild scope: ý cốt lõi cần nhớ là gì?

**A:** Giữ state ở phạm vi cục bộ gần nhất với widget cần nó giúp hạn chế phạm vi lan truyền việc rebuild, ngăn không cho các widget cha hoặc các widget không liên quan phải render lại lãng phí tài nguyên.

---

## PRM393-FC0084
`concept_id`: `PRM393-STATE-PROVIDER`

**Q:** Provider vs setState: ý cốt lõi cần nhớ là gì?

**A:** setState() chỉ phù hợp cho trạng thái cục bộ (local/ephemeral state) gói gọn bên trong một widget duy nhất.

---

## PRM393-FC0085
`concept_id`: `PRM393-STATE-SETSTATE`

**Q:** setState and rebuild behavior: ý cốt lõi cần nhớ là gì?

**A:** Trong StatefulWidget, khi giá trị biến trạng thái thay đổi, việc bọc thay đổi đó trong hàm setState(() { ...

---

## PRM393-FC0086
`concept_id`: `PRM393-STATE-SETSTATE`

**Q:** Các từ khóa/đáp án đúng thường gắn với setState and rebuild behavior trong corpus là gì?

**A:** setState(); It may trigger unnecessary rebuilds; Trigger widget rebuild; Overusing setState(); The widget tree is rebuilt

---

## PRM393-FC0087
`concept_id`: `PRM393-STORAGE-ASYNC-IO`

**Q:** Asynchronous database operations: ý cốt lõi cần nhớ là gì?

**A:** Các thao tác truy xuất dữ liệu từ ổ đĩa (I/O) thường tốn thời gian.

---

## PRM393-FC0088
`concept_id`: `PRM393-STORAGE-FUTUREBUILDER`

**Q:** FutureBuilder for local storage: ý cốt lõi cần nhớ là gì?

**A:** Việc truy xuất dữ liệu từ bộ nhớ cục bộ (như SQLite, SharedPreferences) là các thao tác bất đồng bộ trả về Future.

---

## PRM393-FC0089
`concept_id`: `PRM393-STORAGE-HIVE`

**Q:** Hive: ý cốt lõi cần nhớ là gì?

**A:** Hive là cơ sở dữ liệu key-value NoSQL cục bộ nhẹ, hiệu năng cao, thuần Dart (không cần native dependencies), rất phổ biến để lưu trữ dữ liệu offline, cache và cấu hình ứng dụng.

---

## PRM393-FC0090
`concept_id`: `PRM393-STORAGE-SHARED-PREFERENCES`

**Q:** SharedPreferences: ý cốt lõi cần nhớ là gì?

**A:** Trong package shared_preferences, các phương thức dùng để đọc dữ liệu đã lưu đều sử dụng họ hàm get() (như get(), getString(), getBool(), getInt()...).

---

## PRM393-FC0091
`concept_id`: `PRM393-STORAGE-SHARED-PREFERENCES`

**Q:** Các từ khóa/đáp án đúng thường gắn với SharedPreferences trong corpus là gì?

**A:** get(); shared_preferences; Simple primitive values

---

## PRM393-FC0092
`concept_id`: `PRM393-STORAGE-SQLITE`

**Q:** SQLite with sqflite: ý cốt lõi cần nhớ là gì?

**A:** sqflite là plugin chính thức và thông dụng nhất trong hệ sinh thái Flutter dùng để thao tác với cơ sở dữ liệu quan hệ cục bộ SQLite (hỗ trợ CRUD, transaction, schema migration).

---

## PRM393-FC0093
`concept_id`: `PRM393-TEST-GOLDEN`

**Q:** Golden testing: ý cốt lõi cần nhớ là gì?

**A:** Golden Test (kiểm thử giao diện với hình ảnh mẫu chuẩn) kiểm tra tính nhất quán trực quan của giao diện bằng cách so sánh pixel-by-pixel giữa widget được render và hình ảnh mẫu (golden file) để phát hiện các lỗi vỡ giao diện.

---

## PRM393-FC0094
`concept_id`: `PRM393-TEST-INTEGRATION`

**Q:** Integration testing: ý cốt lõi cần nhớ là gì?

**A:** Kiểm thử tích hợp (Integration Test) kiểm tra toàn bộ luồng hành vi từ đầu đến cuối (End-to-End) của ứng dụng hoặc sự kết hợp tương tác giữa nhiều hệ thống/màn hình trên thiết bị thật hoặc giả lập.

---

## PRM393-FC0095
`concept_id`: `PRM393-TEST-ISOLATION-REFACTOR`

**Q:** Test isolation and refactoring safety: ý cốt lõi cần nhớ là gì?

**A:** Khi tái cấu trúc mã nguồn (refactoring), cấu trúc code bên trong thay đổi nhưng hành vi bên ngoài phải được giữ nguyên.

---

## PRM393-FC0096
`concept_id`: `PRM393-TEST-ISOLATION-REFACTOR`

**Q:** Các từ khóa/đáp án đúng thường gắn với Test isolation and refactoring safety trong corpus là gì?

**A:** Ensure changes don't break functionality; Independence of test cases

---

## PRM393-FC0097
`concept_id`: `PRM393-TEST-QUALITY`

**Q:** Testing quality and testing pyramid: ý cốt lõi cần nhớ là gì?

**A:** Mục tiêu cốt lõi của việc thực hiện kiểm thử tự động (Unit, Widget, Integration Testing) trong phát triển ứng dụng là đảm bảo chất lượng phần mềm, xác nhận ứng dụng hoạt động chính xác theo yêu cầu thiết kế, ngăn chặn lỗi hồi quy (regressions) khi cập nhật tính năng mới.

---

## PRM393-FC0098
`concept_id`: `PRM393-TEST-QUALITY`

**Q:** Các từ khóa/đáp án đúng thường gắn với Testing quality and testing pyramid trong corpus là gì?

**A:** Ensure app quality and correctness; Unit test

---

## PRM393-FC0099
`concept_id`: `PRM393-TEST-UNIT`

**Q:** Unit testing: ý cốt lõi cần nhớ là gì?

**A:** Unit Test (Kiểm thử đơn vị) tập trung kiểm tra tính đúng đắn của từng hàm, phương thức hoặc class riêng lẻ một cách độc lập và nhanh chóng.

---

## PRM393-FC0100
`concept_id`: `PRM393-TEST-WIDGET`

**Q:** Widget testing: ý cốt lõi cần nhớ là gì?

**A:** Widget Test (hay Component Test) tập trung kiểm tra độc lập từng widget/giao diện: cách widget render, hiển thị text/hình ảnh và phản hồi các tương tác người dùng (nhấn nút, vuốt, nhập chữ) trong môi trường test cô lập.

---

## PRM393-FC0101
`concept_id`: `PRM393-TOOL-DEVTOOLS-NETWORK`

**Q:** DevTools network debugging: ý cốt lõi cần nhớ là gì?

**A:** Flutter DevTools tích hợp Network View cho phép lập trình viên theo dõi chi tiết toàn bộ các yêu cầu HTTP/HTTPS, kiểm tra request headers, body, response data, mã trạng thái và thời gian phản hồi.

---

## PRM393-FC0102
`concept_id`: `PRM393-TOOL-HOT-RELOAD`

**Q:** Hot reload: ý cốt lõi cần nhớ là gì?

**A:** Hot Reload giúp tải mã nguồn mới vào máy ảo Dart đang chạy và hiển thị ngay lập tức các thay đổi lên màn hình mà vẫn bảo toàn trạng thái ứng dụng, giúp tăng tốc độ phát triển.

---

## PRM393-FC0103
`concept_id`: `PRM393-TOOL-PROJECT-WORKFLOW`

**Q:** New project first-run workflow: ý cốt lõi cần nhớ là gì?

**A:** Sau khi khởi tạo dự án Flutter mới (flutter create), bước thực hành tiêu chuẩn đầu tiên là chạy thử ứng dụng đếm số mặc định (counter app) trên máy ảo (emulator) hoặc thiết bị thật để xác nhận môi trường phát triển đã sẵn sàng và hoạt động ổn định.

---

## PRM393-FC0104
`concept_id`: `PRM393-TOOL-SDK-SETUP`

**Q:** Flutter SDK and first-run environment: ý cốt lõi cần nhớ là gì?

**A:** Để có thể biên dịch và chạy một ứng dụng Flutter lần đầu tiên, lập trình viên bắt buộc phải cài đặt và cấu hình Flutter SDK trên máy tính.

---

## PRM393-FC0105
`concept_id`: `PRM393-TOOL-SDK-SETUP`

**Q:** Các từ khóa/đáp án đúng thường gắn với Flutter SDK and first-run environment trong corpus là gì?

**A:** Setting up the Flutter SDK; An emulator or physical device; To provide tools and libraries for Flutter development

---

## PRM393-FC0106
`concept_id`: `PRM393-UI-CONTAINER`

**Q:** Container: ý cốt lõi cần nhớ là gì?

**A:** Container là một widget tiện ích đa năng kết hợp nhiều widget đơn lẻ lại với nhau, cung cấp các thuộc tính để xử lý kích thước (width/height), khoảng cách (padding/margin), trang trí giao diện (decoration: màu nền, viền border, bo góc borderRadius, bóng đổ boxShadow), căn chỉnh (alignment) và biến đổi hình học (transform).

---

## PRM393-FC0107
`concept_id`: `PRM393-UI-FLEX-ALIGNMENT`

**Q:** Column and cross-axis alignment: ý cốt lõi cần nhớ là gì?

**A:** Trong widget Column, trục chính (mainAxisAlignment) là trục dọc (vertical), còn trục phụ vuông góc (crossAxisAlignment) là trục ngang (horizontal).

---

## PRM393-FC0108
`concept_id`: `PRM393-UI-FLEX-ALIGNMENT`

**Q:** Các từ khóa/đáp án đúng thường gắn với Column and cross-axis alignment trong corpus là gì?

**A:** Horizontal alignment in Column; Column

---

## PRM393-FC0109
`concept_id`: `PRM393-UI-FORM-VALIDATION`

**Q:** Form validation: ý cốt lõi cần nhớ là gì?

**A:** Khi gọi _formKey.currentState!.validate(), nếu có bất kỳ trường TextFormField nào không thỏa mãn quy tắc kiểm tra (validator trả về chuỗi thông báo lỗi thay vì null), form sẽ không cho phép submit và tự động hiển thị các dòng thông báo lỗi (Error messages) màu đỏ ngay bên dưới các ô nhập liệu tương ứng.

---

## PRM393-FC0110
`concept_id`: `PRM393-UI-FORMS`

**Q:** Form purpose and state operations: ý cốt lõi cần nhớ là gì?

**A:** Biểu mẫu (Forms) là công cụ chính để thu thập dữ liệu nhập vào từ người dùng (như tài khoản, mật khẩu, phản hồi, biểu mẫu khảo sát) và hỗ trợ kiểm tra tính hợp lệ của dữ liệu (validation).

---

## PRM393-FC0111
`concept_id`: `PRM393-UI-FORMS`

**Q:** Các từ khóa/đáp án đúng thường gắn với Form purpose and state operations trong corpus là gì?

**A:** User data collection; reset()

---

## PRM393-FC0112
`concept_id`: `PRM393-UI-GRIDVIEW`

**Q:** GridView: ý cốt lõi cần nhớ là gì?

**A:** GridView là widget chuyên dụng trong Flutter dùng để sắp xếp và hiển thị các phần tử con theo dạng lưới hai chiều (hàng và cột) có khả năng cuộn được (ví dụ: lưới sản phẩm thương mại điện tử, lưới ảnh thư viện).

---

## PRM393-FC0113
`concept_id`: `PRM393-UI-SIZEDBOX`

**Q:** SizedBox spacing: ý cốt lõi cần nhớ là gì?

**A:** SizedBox là widget nhẹ và tối ưu nhất để tạo khoảng trống cố định (về chiều rộng hoặc chiều cao) giữa các widget con trong Column hoặc Row.

---

## PRM393-FC0114
`concept_id`: `PRM393-UI-SLIVERS`

**Q:** CustomScrollView and Slivers: ý cốt lõi cần nhớ là gì?

**A:** SliverAppBar là thanh tiêu đề ứng dụng linh hoạt có thể cuộn, co giãn (expand/collapse) mượt mà cùng danh sách khi cuộn bên trong CustomScrollView.

---

## PRM393-FC0115
`concept_id`: `PRM393-UI-SLIVERS`

**Q:** Các từ khóa/đáp án đúng thường gắn với CustomScrollView and Slivers trong corpus là gì?

**A:** Scrollable flexible app bar; CustomScrollView; SliverList

---

## PRM393-FC0116
`concept_id`: `PRM393-UI-STACK`

**Q:** Stack and overlapping children: ý cốt lõi cần nhớ là gì?

**A:** Widget Stack cho phép xếp chồng các widget con lên nhau theo trục Z (chiều sâu không gian), định vị vị trí các widget con thông qua widget Positioned.

---

## PRM393-FC0117
`concept_id`: `PRM393-UI-TEXT-INPUT`

**Q:** TextField, TextEditingController and input types: ý cốt lõi cần nhớ là gì?

**A:** TextField (hoặc TextFormField) khi được cấu hình thuộc tính obscureText: true sẽ tự động ẩn các ký tự người dùng nhập vào thành dấu chấm tròn để bảo mật mật khẩu.

---

## PRM393-FC0118
`concept_id`: `PRM393-UI-TEXT-INPUT`

**Q:** Các từ khóa/đáp án đúng thường gắn với TextField, TextEditingController and input types trong corpus là gì?

**A:** TextField; Text input value; TextInputType.emailAddress

---

## PRM393-FC0119
`concept_id`: `PRM393-UI-THEME`

**Q:** ThemeData and app-wide theming: ý cốt lõi cần nhớ là gì?

**A:** ThemeData dùng để thiết lập bảng màu (colorScheme), phông chữ (textTheme), kiểu dáng nút bấm (elevatedButtonTheme), thanh tiêu đề (appBarTheme)...

---

## PRM393-FC0120
`concept_id`: `PRM393-UI-THEME`

**Q:** Các từ khóa/đáp án đúng thường gắn với ThemeData and app-wide theming trong corpus là gì?

**A:** MaterialApp; Define application-wide visual styles; During UI/UX design phase

---
