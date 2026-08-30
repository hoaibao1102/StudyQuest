# PRM393 Code Examples (Supplement)

> **Mục đích:** File bổ sung thực hành — KHÔNG thay thế, chỉ bổ sung cho `04_MASTER_KNOWLEDGE.md`.
> Mỗi concept được gắn cùng **Concept ID** để tra cứu chéo.
> Tất cả code là Dart/Flutter thực tế.

---

## Cách dùng file này

| Mục tiêu | File nên dùng |
|---|---|
| Học trắc nghiệm | `04_MASTER_KNOWLEDGE.md` |
| Xem code thực tế | File này — tìm theo `concept_id` |
| Flashcard ôn nhanh | `05_FLASHCARDS.md` |

---

# ANIMATIONS

---

## `PRM393-ANIM-CURVES` — CurvedAnimation and animation curves

```dart
class _BouncePage extends State<BouncePage>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 800),
    );
    // CurvedAnimation bọc controller + gán đường cong phi tuyến
    _animation = CurvedAnimation(
      parent: _controller,
      curve: Curves.bounceOut, // ← hay bị hỏi trong đề
    );
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose(); // BẮT BUỘC để tránh memory leak
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ScaleTransition(scale: _animation, child: const FlutterLogo(size: 100));
  }
}
```

> 💡 `CurvedAnimation` không tự chạy — nó chỉ "bẻ cong" output của `AnimationController`.
> Curves phổ biến: `easeIn`, `easeInOut`, `bounceOut`, `elasticOut`.

---

## `PRM393-ANIM-EXPLICIT` — Tween and AnimatedBuilder

```dart
class _TweenDemo extends State<TweenDemo>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<Color?> _colorAnim;
  late Animation<double> _sizeAnim;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);

    // Tween = "in-between": định nghĩa dải giá trị begin → end
    _colorAnim = ColorTween(begin: Colors.blue, end: Colors.red).animate(_controller);
    _sizeAnim = Tween<double>(begin: 50, end: 150)
        .animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  @override
  Widget build(BuildContext context) {
    // AnimatedBuilder lắng nghe animation, rebuild phần widget cần thiết
    // KHÔNG cần setState() — hiệu quả hơn
    return AnimatedBuilder(
      animation: _controller, // Listenable
      builder: (context, child) {
        return Container(
          width: _sizeAnim.value,
          height: _sizeAnim.value,
          color: _colorAnim.value,
        );
      },
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
```

> 💡 **Tween** = giá trị từ begin đến end. **AnimatedBuilder** rebuild chỉ phần `builder`, không cần `setState()`.

---

## `PRM393-ANIM-IMPLICIT` — Implicit animations and AnimatedSwitcher

```dart
// Ví dụ 1: AnimatedContainer (implicit — không cần controller)
class _ImplicitDemo extends State<ImplicitDemo> {
  bool _big = false;

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      // Tự nội suy khi props thay đổi — không cần AnimationController
      AnimatedContainer(
        duration: const Duration(milliseconds: 500),
        curve: Curves.easeInOut,
        width: _big ? 200 : 100,
        height: _big ? 200 : 100,
        color: _big ? Colors.purple : Colors.orange,
      ),
      ElevatedButton(
        onPressed: () => setState(() => _big = !_big),
        child: const Text('Toggle'),
      ),
    ]);
  }
}

// Ví dụ 2: AnimatedSwitcher (chuyển cảnh mượt giữa 2 widget)
class _SwitcherDemo extends State<SwitcherDemo> {
  bool _showFirst = true;

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      AnimatedSwitcher(
        duration: const Duration(milliseconds: 400),
        // QUAN TRỌNG: key khác nhau để AnimatedSwitcher detect widget mới
        child: _showFirst
            ? const Icon(Icons.star, key: ValueKey('star'), size: 80)
            : const Icon(Icons.heart_broken, key: ValueKey('heart'), size: 80),
      ),
      ElevatedButton(
        onPressed: () => setState(() => _showFirst = !_showFirst),
        child: const Text('Switch'),
      ),
    ]);
  }
}
```

> 💡 **Implicit** = widget tự quản lý animation. Prefix `Animated...`: `AnimatedContainer`, `AnimatedOpacity`, `AnimatedPadding`, `AnimatedAlign`.
> `AnimatedSwitcher` cần **Key khác nhau** trên child để detect thay đổi.

---

## `PRM393-ANIM-RESOURCE` — v-sync and animation resource disposal

```dart
// SingleTickerProviderStateMixin = vsync cho 1 controller
class _ResourceDemo extends State<ResourceDemo>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    // vsync: this → đồng bộ với frame rate màn hình (60Hz/120Hz)
    // Chỉ tính toán khi màn hình sẵn sàng render frame mới → tiết kiệm pin
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 1),
    );
  }

  @override
  void dispose() {
    _controller.dispose(); // BẮT BUỘC: thiếu → memory leak + tốn pin
    super.dispose();
  }

  // Nếu có 2+ controller → dùng TickerProviderStateMixin
}
```

> 💡 **vsync** đồng bộ animation với màn hình. Thiếu `dispose()` → controller chạy ngầm mãi → **memory leak + tốn pin**.

---

# ARCHITECTURE & SOFTWARE ENGINEERING

---

## `PRM393-ARCH-PURPOSE` — Architecture purpose and early decisions

```
// Cấu trúc thư mục Clean Architecture điển hình trong Flutter:
lib/
├── main.dart
├── app/
│   └── app.dart                ← MaterialApp, routing, theme
├── core/
│   ├── errors/                 ← Failure, Exception classes
│   └── utils/                  ← Constants, helpers
├── features/
│   └── auth/
│       ├── data/
│       │   ├── datasources/    ← RemoteDataSource, LocalDataSource
│       │   ├── models/         ← UserModel (extends UserEntity + JSON)
│       │   └── repositories/   ← AuthRepositoryImpl
│       ├── domain/
│       │   ├── entities/       ← UserEntity (pure Dart, no dependencies)
│       │   ├── repositories/   ← AuthRepository (abstract contract)
│       │   └── usecases/       ← LoginUseCase, LogoutUseCase
│       └── presentation/
│           ├── bloc/           ← AuthBloc, AuthEvent, AuthState
│           ├── pages/          ← LoginPage, ProfilePage
│           └── widgets/        ← LoginForm, etc.
└── injection_container.dart    ← GetIt dependency injection
```

> 💡 Quyết định kiến trúc **sớm** = tránh refactor toàn bộ khi app lớn lên (giảm technical debt).

---

## `PRM393-ARCH-CLEAN` — Clean Architecture

```dart
// Domain layer — Entity (pure Dart, không import Flutter/package nào)
class UserEntity {
  final String id;
  final String email;
  const UserEntity({required this.id, required this.email});
}

// Domain layer — Repository abstract contract
abstract class AuthRepository {
  Future<UserEntity> login(String email, String password);
  Future<void> logout();
}

// Data layer — Model (extends Entity, thêm JSON mapping)
class UserModel extends UserEntity {
  const UserModel({required super.id, required super.email});
  factory UserModel.fromJson(Map<String, dynamic> json) =>
      UserModel(id: json['id'], email: json['email']);
  Map<String, dynamic> toJson() => {'id': id, 'email': email};
}

// Data layer — Repository Implementation
class AuthRepositoryImpl implements AuthRepository {
  final RemoteDataSource remoteDataSource;
  AuthRepositoryImpl(this.remoteDataSource);

  @override
  Future<UserEntity> login(String email, String password) async {
    // Gọi datasource và trả về entity (không expose model ra domain)
    return await remoteDataSource.login(email, password);
  }

  @override
  Future<void> logout() => remoteDataSource.logout();
}
```

> 💡 Lợi ích: Dễ thay đổi DataSource (API → Firebase → SQLite) mà không đụng Domain/UI.
> Entity là pure Dart → dễ unit test mà không cần Flutter.

---

## `PRM393-SE-SDLC` — Requirements analysis

```
// SDLC phases (Software Development Life Cycle):

1. Requirements Analysis  ← THU THẬP và LÀM RÕ yêu cầu khách hàng/user
2. System Design          ← Thiết kế kiến trúc, database schema, API contract
3. Implementation         ← Code, viết unit tests
4. Testing                ← Unit / Integration / UAT (User Acceptance Test)
5. Deployment             ← Build release, phát hành lên app store
6. Maintenance            ← Vá lỗi, update tính năng, monitor

// Câu đề hỏi "gathering requirements" → chọn: Analysis
// Giai đoạn TRƯỚC khi design và code.
```

---

## `PRM393-ARCH-SEPARATION` — UI/state separation and Repository pattern

```dart
// Abstract contract (domain layer) — không biết data từ đâu
abstract class ProductRepository {
  Future<List<Product>> getProducts();
}

// Implementation — biết cụ thể lấy từ đâu, nhưng domain không quan tâm
class ProductRepositoryImpl implements ProductRepository {
  final ApiService api;
  final LocalDb db;
  ProductRepositoryImpl(this.api, this.db);

  @override
  Future<List<Product>> getProducts() async {
    try {
      return await api.fetchProducts(); // từ remote API
    } catch (_) {
      return await db.getCachedProducts(); // fallback về cache local
    }
  }
}

// UI chỉ render theo state — KHÔNG gọi API trực tiếp
class ProductPage extends StatelessWidget {
  const ProductPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<ProductBloc, ProductState>(
      builder: (context, state) {
        if (state is ProductLoading) return const CircularProgressIndicator();
        if (state is ProductLoaded) {
          return ListView.builder(
            itemCount: state.products.length,
            itemBuilder: (_, i) => Text(state.products[i].name),
          );
        }
        return const Text('Error');
      },
    );
  }
}
```

> 💡 UI → BLoC → UseCase → Repository → DataSource. UI **không bao giờ** gọi API trực tiếp.

---

## `PRM393-ARCH-TECH-DEBT` — Technical debt

```dart
// ❌ CODE TẠO TECHNICAL DEBT (giải pháp tạm bợ, giao nợ cho tương lai)
class BadPage extends StatefulWidget {
  @override
  _BadPageState createState() => _BadPageState();
}
class _BadPageState extends State<BadPage> {
  Future<void> loadData() async {
    // Gọi API thẳng trong widget, hardcode URL, không error handling
    // Khó test, khó refactor, khó thêm tính năng sau
    final res = await http.get(Uri.parse('http://api.example.com/data'));
    setState(() { /* parse thẳng, không model */ });
  }
}

// ✅ ĐÚNG: tách repository + model + error handling
// → tốn thời gian hơn ban đầu nhưng TIẾT KIỆM chi phí về sau
// Technical debt = chi phí phát sinh trong tương lai vì giải pháp tạm bợ hôm nay
```

---

## `PRM393-SE-VERSION-CONTROL` — Git and version control

```bash
# Các lệnh Git cơ bản trong workflow Flutter

git init                           # Khởi tạo repo
git clone <url>                    # Clone project về
git checkout -b feature/login      # Tạo nhánh tính năng mới
git add .                          # Stage toàn bộ thay đổi
git commit -m "feat: add login"    # Commit với message rõ ràng
git push origin feature/login      # Push lên remote
git pull origin main               # Cập nhật từ remote
git merge main                     # Merge main vào nhánh hiện tại

# .gitignore quan trọng trong Flutter:
# .dart_tool/       ← generated
# build/            ← output
# *.g.dart          ← code gen
# .env              ← credentials — KHÔNG commit lên GitHub!
# android/key.properties  ← signing keys
```

> 💡 Git = **Distributed VCS** — mỗi developer có toàn bộ lịch sử local. Phân biệt với SVN (centralized).

---

# AUTHENTICATION & SESSION SECURITY

---

## `PRM393-AUTH-CENTRALIZED-STATE` — Centralized authentication state

```dart
// Quản lý auth state tập trung qua BLoC → 1 nguồn sự thật cho toàn app

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepository _repo;

  AuthBloc(this._repo) : super(AuthInitial()) {
    on<LoginRequested>(_onLogin);
    on<LogoutRequested>(_onLogout);
  }

  Future<void> _onLogin(LoginRequested event, Emitter<AuthState> emit) async {
    emit(AuthLoading());
    try {
      final user = await _repo.login(event.email, event.password);
      emit(AuthAuthenticated(user)); // ← trạng thái tập trung, toàn app đọc
    } catch (e) {
      emit(AuthError(e.toString()));
    }
  }

  Future<void> _onLogout(LogoutRequested event, Emitter<AuthState> emit) async {
    await _repo.logout();
    emit(AuthUnauthenticated());
  }
}

// Bất kỳ widget nào cũng đọc cùng state qua BlocBuilder<AuthBloc, AuthState>
// → không bao giờ màn hình A nghĩ đã login, màn hình B thì không
```

---

## `PRM393-AUTH-STREAM` — StreamBuilder for authentication state

```dart
// Firebase Auth trả về Stream<User?> — StreamBuilder lắng nghe liên tục
class AuthGate extends StatelessWidget {
  const AuthGate({super.key});

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<User?>(
      stream: FirebaseAuth.instance.authStateChanges(), // Stream
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const CircularProgressIndicator();
        }
        // Mỗi khi auth state thay đổi → widget tự rebuild
        if (snapshot.hasData) return const HomePage();   // đã đăng nhập
        return const LoginPage();                         // chưa đăng nhập
      },
    );
  }
}
```

---

## `PRM393-AUTH-SECURITY` — Secure authentication

```dart
// Thực hành bảo mật khi authentication:

// 1. Luôn dùng HTTPS
final response = await http.post(
  Uri.parse('https://api.example.com/login'), // ← HTTPS, không HTTP
  body: {'email': email, 'password': password},
);

// 2. Lưu token trong secure storage (không phải SharedPreferences thường)
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
const storage = FlutterSecureStorage();
await storage.write(key: 'access_token', value: token); // mã hóa trên thiết bị

// 3. Xóa token khi logout (end session securely)
await storage.delete(key: 'access_token');
await storage.delete(key: 'refresh_token');

// 4. KHÔNG lưu password — chỉ lưu token
// ❌ prefs.setString('password', userPassword);
```

---

## `PRM393-AUTH-FIREBASE` — Firebase Authentication

```dart
// Thêm vào pubspec.yaml: firebase_core, firebase_auth

final auth = FirebaseAuth.instance;

// Đăng ký
final cred = await auth.createUserWithEmailAndPassword(
  email: 'user@example.com',
  password: 'SecurePass123!',
);

// Đăng nhập
final cred2 = await auth.signInWithEmailAndPassword(
  email: 'user@example.com',
  password: 'SecurePass123!',
);

// Lấy user hiện tại
final currentUser = auth.currentUser; // null nếu chưa login

// Đăng xuất
await auth.signOut();

// Lắng nghe thay đổi trạng thái
auth.authStateChanges().listen((User? user) {
  if (user == null) print('Logged out');
  else print('Logged in: ${user.email}');
});
```

> 💡 Firebase Auth = BaaS → không cần tự build backend. Hỗ trợ Email, Google, Apple, Phone...

---

## `PRM393-AUTH-ROUTE-GUARD` — Route guard

```dart
// Guard: kiểm tra auth state trước khi hiển thị màn hình protected
class AuthGuard extends StatelessWidget {
  final Widget child;
  const AuthGuard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AuthBloc, AuthState>(
      builder: (context, state) {
        if (state is AuthAuthenticated) return child; // ✅ đã login → vào được

        // ❌ chưa login → redirect về LoginPage
        WidgetsBinding.instance.addPostFrameCallback((_) {
          Navigator.of(context).pushReplacementNamed('/login');
        });
        return const SizedBox.shrink();
      },
    );
  }
}

// Sử dụng trong routing:
// '/profile' → AuthGuard(child: const ProfilePage())
// '/settings' → AuthGuard(child: const SettingsPage())
```

---

## `PRM393-AUTH-SESSION-TOKEN` — Login, logout, access token and refresh token

```dart
class AuthService {
  String? _accessToken;    // ngắn hạn: 15 phút - 1 giờ
  String? _refreshToken;   // dài hạn: 7 - 30 ngày
  final _storage = const FlutterSecureStorage();

  // Sau login thành công → user session starts → lưu cả 2 token
  Future<void> saveTokens(String access, String refresh) async {
    _accessToken = access;
    _refreshToken = refresh;
    await _storage.write(key: 'access_token', value: access);
    await _storage.write(key: 'refresh_token', value: refresh);
  }

  // Gọi API có auth — dùng access token trong Authorization header
  Future<http.Response> authGet(String url) async {
    var res = await http.get(
      Uri.parse(url),
      headers: {'Authorization': 'Bearer $_accessToken'},
    );

    // Access token hết hạn → dùng refresh token lấy access mới (không re-login)
    if (res.statusCode == 401) {
      await _refreshAccessToken();
      res = await http.get(Uri.parse(url),
          headers: {'Authorization': 'Bearer $_accessToken'});
    }
    return res;
  }

  // Refresh: extend session without re-login
  Future<void> _refreshAccessToken() async {
    final refresh = await _storage.read(key: 'refresh_token');
    final res = await http.post(
      Uri.parse('https://api.example.com/refresh'),
      body: {'refresh_token': refresh},
    );
    _accessToken = jsonDecode(res.body)['access_token'];
    await _storage.write(key: 'access_token', value: _accessToken!);
  }

  // Logout: end user session securely
  Future<void> logout() async {
    _accessToken = null;
    _refreshToken = null;
    await _storage.deleteAll(); // xóa hết dữ liệu nhạy cảm
  }
}
```

---

# DART LANGUAGE

---

## `PRM393-DART-LIST` — List ordered collection

```dart
void main() {
  // List: có thứ tự (ordered), truy cập qua index
  List<String> fruits = ['apple', 'banana', 'cherry'];

  print(fruits[0]);           // 'apple' (index bắt đầu từ 0)
  fruits.add('durian');       // thêm cuối
  fruits.insert(1, 'avocado'); // thêm tại index 1
  fruits.remove('banana');    // xóa theo giá trị
  fruits.removeAt(0);         // xóa theo index

  // Duyệt
  for (final fruit in fruits) print(fruit);

  // Functional methods
  final upper = fruits.map((f) => f.toUpperCase()).toList();
  final long = fruits.where((f) => f.length > 5).toList();
  final firstA = fruits.firstWhere((f) => f.startsWith('a'));
  final joined = fruits.join(', ');

  // Spread operator
  final moreFruits = [...fruits, 'elderberry', 'fig'];
}
```

> 💡 **List** = ordered + indexed. Khác **Set** (không thứ tự, unique), **Map** (key-value).

---

## `PRM393-DART-MAP` — Map key-value collection

```dart
void main() {
  // Map: key-value pairs
  Map<String, int> scores = {'Alice': 95, 'Bob': 87, 'Charlie': 92};

  // Truy cập
  print(scores['Alice']); // 95
  print(scores['Unknown']); // null (không throw lỗi)

  // Thêm / Cập nhật
  scores['Dave'] = 78;
  scores['Alice'] = 100;

  // Duyệt
  scores.forEach((name, score) => print('$name: $score'));

  // Các method hữu ích
  print(scores.keys.toList());      // ['Alice', 'Bob', ...]
  print(scores.values.toList());    // [100, 87, ...]
  print(scores.containsKey('Bob')); // true

  // JSON thường là Map<String, dynamic>
  Map<String, dynamic> user = {'id': 1, 'name': 'Alice', 'active': true};
  final name = user['name'] as String;
}
```

> 💡 **Map** = key-value. Truy xuất O(1) qua key.

---

## `PRM393-DART-ROLE` — Dart role in Flutter

```dart
// Dart hỗ trợ cả UI và application logic trong 1 ngôn ngữ

// 1. UI Widget (Flutter framework, viết bằng Dart)
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});
  @override
  Widget build(BuildContext context) => const Text('Hello Flutter!');
}

// 2. Application Logic (async, OOP — cũng là Dart)
class UserService {
  Future<List<User>> fetchUsers() async {
    final response = await http.get(Uri.parse('https://api.example.com/users'));
    return (jsonDecode(response.body) as List)
        .map((e) => User.fromJson(e))
        .toList();
  }
}

// 3. Dart compile modes:
// Debug  → JIT (Just-In-Time) → Hot Reload nhanh khi dev
// Release → AOT (Ahead-Of-Time) → native machine code → hiệu năng cao
```

> 💡 Dart = **general-purpose** nhưng được optimize đặc biệt cho **client-side UI**.
> Không cần JS bridge như React Native → performance tốt hơn.

---

## `PRM393-DART-PACKAGES` — Packages and imports

```yaml
# pubspec.yaml — khai báo dependencies
dependencies:
  flutter:
    sdk: flutter
  http: ^1.2.0
  shared_preferences: ^2.2.0
  flutter_bloc: ^8.1.3
  go_router: ^13.0.0
  flutter_secure_storage: ^9.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  mocktail: ^1.0.0  # chỉ dùng khi test
```

```dart
// Import trong file .dart
import 'package:flutter/material.dart';         // Flutter SDK
import 'package:http/http.dart' as http;         // external package
import 'package:myapp/features/auth/auth.dart';  // file nội bộ

// Cài package:
// flutter pub add http
// flutter pub get
```

---

## `PRM393-DART-OOP` — Classes and objects

```dart
// Class cơ bản
class Animal {
  final String name;
  int _age;  // private (prefix _)

  Animal(this.name, this._age);             // constructor
  Animal.unnamed() : name = 'Unknown', _age = 0; // named constructor

  int get age => _age;                      // getter
  set age(int v) => _age = v > 0 ? v : 0; // setter với validation

  String speak() => '$name says hello!';
}

// Kế thừa
class Dog extends Animal {
  final String breed;
  Dog(super.name, super.age, this.breed);

  @override
  String speak() => '$name says Woof!';
}

// Mixin — tái sử dụng code không qua kế thừa
mixin Swimmer {
  void swim() => print('Swimming!');
}

class Duck extends Animal with Swimmer {
  Duck(super.name, super.age);
}

// Abstract class — contract
abstract class Shape {
  double area(); // subclass bắt buộc implement
}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);
  @override
  double area() => 3.14159 * radius * radius;
}

void main() {
  final dog = Dog('Buddy', 3, 'Golden Retriever');
  print(dog.speak()); // 'Buddy says Woof!'

  final duck = Duck('Donald', 2);
  duck.swim();
}
```

---

## `PRM393-DART-GENERICS` — Generics

```dart
// Generic class — hoạt động với bất kỳ kiểu nào
class Box<T> {
  final T value;
  Box(this.value);
  T getValue() => value;
}

// Generic function
T findFirst<T>(List<T> list, bool Function(T) test) {
  return list.firstWhere(test);
}

// Bounded generics
class NumberBox<T extends num> {
  final T value;
  NumberBox(this.value);
  double doubled() => value * 2;
}

void main() {
  final strBox = Box<String>('Hello');
  final intBox = Box<int>(42);

  // Flutter dùng generic ở nhiều nơi:
  // List<Widget>, Future<String>, Stream<User?>, BlocBuilder<MyBloc, MyState>
  final first = findFirst<int>([3, 1, 4, 1, 5], (n) => n > 3); // returns 4
}
```

---

## `PRM393-DART-NULL-SAFETY` — Sound null safety

```dart
// Null safety: compiler ngăn null errors tại compile time

String name = 'Alice';   // non-nullable: KHÔNG được gán null
String? email = null;    // nullable: được phép null

// Xử lý nullable
String display = email ?? 'No email';   // ?? = null-coalescing
int? len = email?.length;               // ?. = null-aware access
String forced = email!;                 // ! = force unwrap (nguy hiểm!)

// late: non-null nhưng khởi tạo sau
late String username;
username = 'bob';  // phải gán trước khi dùng → nếu không: LateInitializationError

// Null-aware assignment
email ??= 'default@example.com'; // chỉ gán nếu đang null

// Pattern phổ biến: check null trước
void processUser(String? userId) {
  if (userId == null) return; // early return
  // Sau đây Dart biết userId là non-null
  print(userId.length); // không cần !
}
```

> 💡 **Sound** null safety = cả Dart và Flutter library đều null-safe → không có "surprise null" tại runtime.

---

## `PRM393-DART-CONST-FINAL` — const and final

```dart
void main() {
  // final: gán 1 lần, giá trị tính lúc RUNTIME
  final String name = 'Alice';
  final DateTime now = DateTime.now(); // OK — runtime value
  // name = 'Bob'; ← LỖI

  // const: COMPILE-TIME constant, bất biến hoàn toàn
  const double pi = 3.14159;
  const String appName = 'StudyQuest';
  // const DateTime d = DateTime.now(); ← LỖI: không biết lúc compile

  // const Widget được Flutter cache — không rebuild
  const Text('Static text'); // Flutter tái sử dụng, skip rebuild
}

// const constructor — toàn bộ object bất biến
class Point {
  final int x;
  final int y;
  const Point(this.x, this.y);
}

const p1 = Point(1, 2); // compile-time constant
const p2 = Point(1, 2);
print(identical(p1, p2)); // true — cùng một object trong memory!
```

> 💡 Dùng `const` Widget ở mọi nơi có thể → Flutter skip rebuild → cải thiện performance.

---

# DEPLOYMENT & RELEASE

---

## `PRM393-DEPLOY-BUILD-RELEASE` — Release APK and release distribution

```bash
# Kiểm tra trước khi build
flutter analyze
flutter test

# Build Android
flutter build apk --release                   # APK (sideload)
flutter build appbundle --release             # AAB (Google Play — khuyên dùng)
# Output: build/app/outputs/flutter-apk/app-release.apk

# Build iOS (cần macOS + Xcode)
flutter build ipa --release

# Kiểm tra kích thước
flutter build apk --analyze-size

# Cập nhật version trong pubspec.yaml trước khi release:
# version: 1.2.0+5   (1.2.0 = versionName, +5 = versionCode)
```

> 💡 **Debug** build: JIT, lớn, chậm, có overlay debug.
> **Release** build: AOT, tối ưu, nhỏ gọn. Phải sign keystore trước khi phân phối.

---

## `PRM393-DEPLOY-SIGNING` — Secure signing keys

```bash
# Tạo keystore (Android)
keytool -genkey -v \
  -keystore ~/upload-keystore.jks \
  -keyalg RSA -keysize 2048 \
  -validity 10000 -alias upload

# android/key.properties — KHÔNG commit file này lên Git!
# storePassword=your_store_pass
# keyPassword=your_key_pass
# keyAlias=upload
# storeFile=/Users/you/upload-keystore.jks
```

```
# .gitignore — bảo vệ credentials
*.jks
*.keystore
key.properties
.env
```

> 💡 Mất keystore = KHÔNG THỂ update app trên store. Backup an toàn ngoài Git.

---

# FLUTTER CORE

---

## `PRM393-FLUTTER-MATERIALAPP` — MaterialApp as application root

```dart
void main() {
  runApp(const MyApp()); // Entry point — chạy app
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // MaterialApp = root widget của mọi Flutter Material app
    return MaterialApp(
      title: 'PRM393 Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      initialRoute: '/',
      routes: {
        '/': (_) => const HomePage(),
        '/login': (_) => const LoginPage(),
        '/profile': (_) => const ProfilePage(),
      },
    );
  }
}
```

---

## `PRM393-FLUTTER-FRAMEWORK` — Flutter framework role

```
// Flutter Architecture (từ dưới lên trên):

┌─────────────────────────────────────────────┐
│          Your App (Dart code)               │ ← code bạn viết
├─────────────────────────────────────────────┤
│  Material / Cupertino Widgets               │ ← UI components cao cấp
├─────────────────────────────────────────────┤
│  Widgets Layer (StatelessWidget, etc.)      │ ← Widget tree
├─────────────────────────────────────────────┤
│  Rendering Layer (RenderObject)             │ ← layout, paint
├─────────────────────────────────────────────┤
│  Animation / Painting / Gestures           │
├─────────────────────────────────────────────┤
│  dart:ui (low-level graphics)              │ ← Skia/Impeller engine
└─────────────────────────────────────────────┘

// Flutter không dùng WebView hay native component
// Tự vẽ MỌI PIXEL qua Skia/Impeller → UI nhất quán trên mọi platform
```

---

## `PRM393-FLUTTER-LIFECYCLE` — StatefulWidget lifecycle

```dart
class _MyPageState extends State<MyPage> {
  @override
  void initState() {
    super.initState();
    // Gọi 1 lần khi widget được tạo lần đầu
    // Dùng để: khởi tạo controller, fetch data, subscribe stream
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // Sau initState và khi InheritedWidget thay đổi
  }

  @override
  void didUpdateWidget(MyPage oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Khi widget cha rebuild với props mới
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder(); // Gọi lại mỗi khi setState()
  }

  @override
  void deactivate() {
    super.deactivate();
    // Widget bị remove khỏi tree tạm thời
  }

  @override
  void dispose() {
    // Widget bị destroy VĨNH VIỄN → cleanup tại đây
    // controller.dispose(), subscription.cancel(), focusNode.dispose()
    super.dispose();
  }
}
```

---

## `PRM393-FLUTTER-PURPOSE` — Flutter purpose and multi-platform

```dart
// 1 codebase → Android, iOS, Web, Windows, macOS, Linux

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Hello Flutter!')),
        body: const Center(
          // Cùng code này chạy trên mọi platform
          child: Text('Write once, run everywhere!'),
        ),
      ),
    );
  }
}

// Detect platform khi cần behavior khác nhau:
import 'dart:io' show Platform;
if (Platform.isAndroid) { /* ... */ }
if (Platform.isIOS) { /* ... */ }

// Hoặc theo screen size (responsive):
final isTablet = MediaQuery.of(context).size.width > 600;
```

---

## `PRM393-FLUTTER-REACTIVE-BUILD` — Declarative UI, build() and rebuild

```dart
// Declarative: mô tả UI theo state — Flutter tự tính UI = f(state)

class _CounterState extends State<CounterPage> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    // Mỗi khi setState() → build() chạy lại
    // Flutter diff widget tree cũ và mới → update chỉ phần thay đổi
    return Scaffold(
      body: Center(
        child: Text(
          'Count: $_count',
          style: const TextStyle(fontSize: 48),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _count++), // trigger rebuild
        child: const Icon(Icons.add),
      ),
    );
  }
}

// Declarative vs Imperative:
// ✅ Declarative: "UI trông như thế này với state X"
// ❌ Imperative: "làm bước 1, 2, 3 để thay đổi UI"
```

---

## `PRM393-FLUTTER-BUILDCONTEXT` — BuildContext

```dart
// BuildContext = vị trí của widget trong widget tree
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    // Truy cập theme
    final theme = Theme.of(context);

    // Truy cập screen size
    final size = MediaQuery.of(context).size;

    // Navigation
    void goProfile() => Navigator.of(context).pushNamed('/profile');

    // Lấy BLoC/Provider
    final authBloc = context.read<AuthBloc>();
    final count = context.watch<CounterModel>().count; // subscribe + rebuild

    return Text(
      'Width: ${size.width.toStringAsFixed(0)}',
      style: theme.textTheme.bodyLarge,
    );
  }
}

// ⚠️ Không dùng context sau async gap nếu widget có thể bị unmount
Future<void> example(BuildContext context) async {
  await someAsyncOperation();
  if (!context.mounted) return; // check trước khi dùng
  Navigator.of(context).pop();
}
```

---

## `PRM393-FLUTTER-COMPOSITION` — Widget composition and reuse

```dart
// Xây widget phức tạp từ widget nhỏ tái sử dụng

// Widget nhỏ có thể dùng nhiều nơi
class StatusBadge extends StatelessWidget {
  final String label;
  final Color color;
  const StatusBadge({super.key, required this.label, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.2),
        border: Border.all(color: color),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Text(label, style: TextStyle(color: color, fontSize: 12)),
    );
  }
}

// Widget lớn compose từ widget nhỏ
class UserCard extends StatelessWidget {
  final User user;
  const UserCard({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(user.name),
        subtitle: Text(user.email),
        trailing: StatusBadge(  // tái sử dụng StatusBadge
          label: user.isActive ? 'Active' : 'Inactive',
          color: user.isActive ? Colors.green : Colors.red,
        ),
      ),
    );
  }
}
```

---

## `PRM393-FLUTTER-WIDGET-TREE` — Widget tree and immutability

```dart
// Widget tree là cây phân cấp
// Widget là IMMUTABLE — mỗi rebuild tạo object mới (rất nhẹ, OK)

// Ví dụ cây widget:
// MaterialApp
// └── Scaffold
//     ├── AppBar → Text('Home')
//     └── Column
//         ├── Text('Hello')          ← StatelessWidget, immutable
//         ├── CounterWidget()        ← StatefulWidget, State tồn tại riêng
//         └── ElevatedButton(...)

class ImmutableExample extends StatelessWidget {
  final String title; // final — bất biến sau khi tạo
  const ImmutableExample({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    // Mỗi rebuild tạo Text() object mới
    // Nhưng Element tree (thực tế) được tái sử dụng nếu type và key giống
    return Text(title);
  }
}

// Widget vs Element vs RenderObject:
// Widget = blueprint (immutable, nhẹ)
// Element = instance thực (Flutter quản lý, persistent)
// RenderObject = actual layout/paint
```

---

# NAVIGATION & ROUTING

---

## `PRM393-NAV-CONTEXT` — BuildContext in navigation

```dart
// Navigator cần context để biết vị trí trong widget tree
void navigate(BuildContext context) {
  Navigator.of(context).push(
    MaterialPageRoute(builder: (_) => const DetailPage()),
  );
}

// ⚠️ Async navigation — check mounted
Future<void> asyncNavigate(BuildContext context) async {
  await someAsyncOperation();
  if (!context.mounted) return; // widget có thể đã bị dispose
  Navigator.of(context).pop();
}
```

---

## `PRM393-NAV-STRUCTURE` — Structured navigation logic

```dart
// Tách navigation logic ra file riêng — không inline trong widget

class AppRoutes {
  static const home = '/';
  static const login = '/login';
  static const profile = '/profile';
  static const productDetail = '/product/:id';
}

// Routes map
Map<String, WidgetBuilder> appRoutes = {
  AppRoutes.home: (_) => const HomePage(),
  AppRoutes.login: (_) => const LoginPage(),
  AppRoutes.profile: (_) => const ProfilePage(),
};

// Sử dụng:
Navigator.of(context).pushNamed(AppRoutes.profile);

// Hoặc dùng GoRouter (advanced, type-safe):
// go_router package → declarative routing
```

---

## `PRM393-NAV-ROUTE-STACK` — Navigator and pop

```dart
// Navigator = stack (LIFO — Last In, First Out)

// Push → thêm vào stack, hiện màn hình mới
final result = await Navigator.of(context).push<String>(
  MaterialPageRoute(builder: (_) => const SecondPage()),
);
// Sau khi pop → result chứa giá trị trả về

// Trong SecondPage:
Navigator.of(context).pop('Hello from Second!'); // pop + trả về data

// Các dạng pop:
Navigator.of(context).pop();           // pop 1 màn hình
Navigator.of(context).popUntil((r) => r.isFirst); // pop về root
Navigator.of(context).pushReplacement(/* route */); // replace màn hình hiện tại
Navigator.of(context).pushAndRemoveUntil(/* route */, (r) => false); // clear stack
```

---

## `PRM393-NAV-PASS-DATA` — Passing data between screens

```dart
// Cách 1: Constructor (push trực tiếp)
Navigator.of(context).push(
  MaterialPageRoute(
    builder: (_) => ProductDetailPage(product: selectedProduct),
  ),
);

class ProductDetailPage extends StatelessWidget {
  final Product product; // nhận data qua constructor
  const ProductDetailPage({super.key, required this.product});
  @override
  Widget build(BuildContext context) => Text(product.name);
}

// Cách 2: Named routes + arguments
Navigator.of(context).pushNamed('/detail', arguments: selectedProduct);

// Nhận:
final product = ModalRoute.of(context)!.settings.arguments as Product;

// Cách 3: Trả data về khi pop
class EditPage extends StatelessWidget {
  const EditPage({super.key});
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => Navigator.of(context).pop('edited result'), // trả data
      child: const Text('Save'),
    );
  }
}
// Nơi gọi nhận result:
final result = await Navigator.of(context).push<String>(
  MaterialPageRoute(builder: (_) => const EditPage()),
);
```

---

# NETWORKING & DATA EXCHANGE

---

## `PRM393-NET-FUTUREBUILDER` — FutureBuilder for API responses

```dart
class ApiPage extends StatefulWidget {
  const ApiPage({super.key});
  @override
  State<ApiPage> createState() => _ApiPageState();
}

class _ApiPageState extends State<ApiPage> {
  late Future<List<User>> _future;

  @override
  void initState() {
    super.initState();
    // Lưu Future trong initState để tránh re-run khi rebuild
    _future = ApiService().getUsers();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<User>>(
      future: _future,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }
        if (snapshot.hasError) {
          return Center(child: Text('Error: ${snapshot.error}'));
        }
        final users = snapshot.data!;
        return ListView.builder(
          itemCount: users.length,
          itemBuilder: (_, i) => ListTile(title: Text(users[i].name)),
        );
      },
    );
  }
}
```

---

## `PRM393-NET-PAGINATION` — Pagination

```dart
class _PaginatedState extends State<PaginatedPage> {
  final List<Item> _items = [];
  int _page = 1;
  bool _isLoading = false;
  bool _hasMore = true;
  final _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _loadMore();
    _scrollController.addListener(() {
      // Gần cuối list → load thêm
      if (_scrollController.position.pixels >=
          _scrollController.position.maxScrollExtent - 200) {
        _loadMore();
      }
    });
  }

  Future<void> _loadMore() async {
    if (_isLoading || !_hasMore) return;
    setState(() => _isLoading = true);

    final newItems = await api.fetchItems(page: _page, limit: 20);
    setState(() {
      _items.addAll(newItems);
      _page++;
      _isLoading = false;
      _hasMore = newItems.length == 20; // false nếu page không đủ 20
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      controller: _scrollController,
      itemCount: _items.length + (_isLoading ? 1 : 0),
      itemBuilder: (_, i) {
        if (i == _items.length) {
          return const Center(child: CircularProgressIndicator());
        }
        return ListTile(title: Text(_items[i].name));
      },
    );
  }
}
```

---

## `PRM393-NET-HTTP-METHODS` — GET and POST methods

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiService {
  static const _base = 'https://jsonplaceholder.typicode.com';

  // GET: lấy dữ liệu, không có request body
  Future<List<Post>> getPosts() async {
    final res = await http.get(Uri.parse('$_base/posts'));
    if (res.statusCode == 200) {
      return (jsonDecode(res.body) as List)
          .map((e) => Post.fromJson(e))
          .toList();
    }
    throw Exception('GET failed: ${res.statusCode}');
  }

  // POST: tạo resource mới, có request body
  Future<Post> createPost(String title, String body) async {
    final res = await http.post(
      Uri.parse('$_base/posts'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'title': title, 'body': body, 'userId': 1}),
    );
    if (res.statusCode == 201) return Post.fromJson(jsonDecode(res.body));
    throw Exception('POST failed: ${res.statusCode}');
  }

  // PUT = cập nhật toàn bộ resource
  // PATCH = cập nhật một phần resource
  // DELETE = xóa resource
}
```

---

## `PRM393-NET-HTTP-STATUS` — HTTP status codes

```dart
Future<dynamic> handleResponse(http.Response response) {
  switch (response.statusCode) {
    case 200: return Future.value(jsonDecode(response.body)); // OK
    case 201: return Future.value(jsonDecode(response.body)); // Created
    case 204: return Future.value(null);                      // No Content (DELETE OK)
    case 400: throw BadRequestException(response.body);       // Client error
    case 401: throw UnauthorizedException();                  // Token hết hạn / chưa login
    case 403: throw ForbiddenException();                     // Không có quyền
    case 404: throw NotFoundException();                      // Resource không tồn tại
    case 500: throw ServerException();                        // Server crash
    default: throw Exception('HTTP ${response.statusCode}');
  }
}

// Nhóm status codes:
// 2xx → Thành công  (200 OK, 201 Created, 204 No Content)
// 3xx → Redirect
// 4xx → Lỗi client  (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
// 5xx → Lỗi server  (500 Internal Server Error, 503 Service Unavailable)
```

---

## `PRM393-NET-AUTH-HEADER` — Authorization header

```dart
// Bearer token trong Authorization header — chuẩn JWT/OAuth2
class AuthenticatedApi {
  final String _token;
  AuthenticatedApi(this._token);

  Map<String, String> get _headers => {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer $_token', // ← định dạng chuẩn
  };

  Future<UserProfile> getProfile() async {
    final res = await http.get(
      Uri.parse('https://api.example.com/me'),
      headers: _headers,
    );
    if (res.statusCode == 200) {
      return UserProfile.fromJson(jsonDecode(res.body));
    }
    throw Exception('Unauthorized');
  }
}
```

---

## `PRM393-NET-HTTPS` — HTTPS for API security

```dart
// ✅ Luôn dùng HTTPS — mã hóa TLS, chống man-in-the-middle
final res = await http.get(Uri.parse('https://api.example.com/data'));

// ❌ HTTP không mã hóa → dữ liệu có thể bị đánh cắp
// final res = await http.get(Uri.parse('http://api.example.com/data'));

// Android 9+: cleartext traffic (HTTP) bị chặn mặc định
// iOS: ATS (App Transport Security) chặn HTTP mặc định
// → Dùng HTTPS là best practice và bắt buộc trên production
```

---

## `PRM393-NET-REST` — REST fundamentals

```
// RESTful API design principles:

// 1. Stateless: mỗi request tự chứa đủ thông tin (token, params)
// 2. Uniform Interface: HTTP methods chuẩn
// 3. Resource-based: endpoint là danh từ

// ✅ RESTful:
GET    /users          → lấy danh sách
GET    /users/123      → lấy user #123
POST   /users          → tạo user mới
PUT    /users/123      → cập nhật toàn bộ user #123
PATCH  /users/123      → cập nhật một phần
DELETE /users/123      → xóa user #123

// ❌ Không phải RESTful:
GET /getUsers
POST /deleteUser/123
GET /createNewPost
```

---

## `PRM393-NET-JSON-MODELS` — JSON parsing and model mapping

```dart
// Model class với JSON serialization

class User {
  final int id;
  final String name;
  final String email;
  const User({required this.id, required this.name, required this.email});

  // JSON → Object (deserialization)
  factory User.fromJson(Map<String, dynamic> json) => User(
    id: json['id'] as int,
    name: json['name'] as String,
    email: json['email'] as String,
  );

  // Object → JSON (serialization)
  Map<String, dynamic> toJson() => {'id': id, 'name': name, 'email': email};
}

// Sử dụng:
Future<void> example() async {
  // Single object
  final res = await http.get(Uri.parse('https://api.example.com/users/1'));
  final user = User.fromJson(jsonDecode(res.body));

  // List
  final listRes = await http.get(Uri.parse('https://api.example.com/users'));
  final users = (jsonDecode(listRes.body) as List)
      .map((e) => User.fromJson(e as Map<String, dynamic>))
      .toList();

  // Gửi lên server
  await http.post(
    Uri.parse('https://api.example.com/users'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode(user.toJson()),
  );
}
```

---

# PERFORMANCE OPTIMIZATION

---

## `PRM393-PERF-GOAL` — Smooth and responsive UI

```dart
// Mục tiêu: 60fps = 16ms/frame. 120fps = 8ms/frame
// Không block UI thread (main isolate)

// ❌ Heavy computation trên UI thread → jank (giật lag)
Widget build(BuildContext context) {
  final result = computeHeavyStuff(); // BLOCK!
  return Text(result);
}

// ✅ Dùng compute() cho heavy work — chạy trong isolate riêng
Future<String> loadData() async {
  return await compute(computeHeavyStuff, inputData);
}

// ✅ Hoặc dùng Isolate.run() (Dart 2.19+)
final result = await Isolate.run(() => computeHeavyStuff(inputData));
```

---

## `PRM393-PERF-PROFILING` — DevTools performance analysis

```bash
# Chạy ở profile mode (không debug overhead, không release optimize)
flutter run --profile

# Mở DevTools trong browser → Flutter DevTools

# Các tab quan trọng:
# Performance  → Frame timeline, CPU flame chart → tìm jank (>16ms frames)
# Memory       → Heap allocation, memory leaks
# Network      → API calls, timing, request/response body
# Widget Inspector → Widget tree, rebuild count, layout bounds
```

```dart
// Đánh dấu code để profile
import 'package:flutter/foundation.dart';

void heavyOperation() {
  Timeline.startSync('HeavyOperation');
  // ... code cần đo thời gian
  Timeline.finishSync();
}
```

---

## `PRM393-PERF-REBUILD-SCOPE` — Fine-grained rebuild scope

```dart
// ❌ setState → rebuild toàn bộ widget → ExpensiveWidget rebuild không cần thiết
class BadExample extends StatefulWidget {
  const BadExample({super.key});
  @override
  State<BadExample> createState() => _BadExampleState();
}
class _BadExampleState extends State<BadExample> {
  int _counter = 0;
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      const ExpensiveWidget(), // Rebuild mỗi khi _counter thay đổi!
      Text('$_counter'),
      ElevatedButton(onPressed: () => setState(() => _counter++), child: const Text('+')),
    ]);
  }
}

// ✅ BLoC: chỉ BlocBuilder rebuild, ExpensiveWidget không bị ảnh hưởng
class GoodExample extends StatelessWidget {
  const GoodExample({super.key});
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      const ExpensiveWidget(), // Không rebuild — không có BlocBuilder bọc
      BlocBuilder<CounterBloc, int>(    // chỉ Text này rebuild
        builder: (context, count) => Text('$count'),
      ),
      ElevatedButton(
        onPressed: () => context.read<CounterBloc>().add(Increment()),
        child: const Text('+'),
      ),
    ]);
  }
}

// ✅ Provider: Selector để narrow rebuild scope
Selector<AppModel, int>(
  selector: (_, model) => model.counter, // chỉ subscribe field cần
  builder: (_, count, __) => Text('$count'),
)
```

---

## `PRM393-PERF-CONST` — const widgets

```dart
// const widget được Flutter cache → skip rebuild hoàn toàn

// ❌ Không có const → tạo object mới mỗi rebuild
Widget build(BuildContext context) {
  return Column(children: [
    Text('Static Title'),   // tạo mới mỗi rebuild
    Icon(Icons.star),
    SizedBox(height: 16),
  ]);
}

// ✅ Với const → Flutter nhận ra widget không đổi → skip
Widget build(BuildContext context) {
  return Column(children: [
    const Text('Static Title'), // cached, không rebuild
    const Icon(Icons.star),
    const SizedBox(height: 16),
  ]);
}

// Rule: widget không phụ thuộc runtime state → LUÔN thêm const
// Chạy 'flutter analyze' hoặc 'prefer_const_constructors' lint để phát hiện
```

---

## `PRM393-PERF-REPAINT` — RepaintBoundary

```dart
// RepaintBoundary: tạo layer riêng cho widget
// → animation bên trong không kéo repaint các widget bên ngoài

Widget build(BuildContext context) {
  return Stack(children: [
    // RepaintBoundary: particle system repaint liên tục nhưng không ảnh hưởng ngoài
    RepaintBoundary(
      child: ParticleAnimationWidget(), // repaint mỗi frame
    ),
    const Positioned(
      bottom: 16, left: 16,
      child: Text('Static text'),  // không bị repaint theo animation
    ),
  ]);
}

// Khi nào dùng RepaintBoundary:
// - Widget animation liên tục (game, particles, video)
// - Widget phức tạp nhưng ít thay đổi (chart, custom paint)
// KHÔNG dùng tràn lan → overhead tạo GPU layer riêng
```

---

# STATE MANAGEMENT

---

## `PRM393-STATE-BLOC-EVENT-STATE` — BLoC event-state flow and Streams

```dart
// Events — hành động từ UI (input)
abstract class CounterEvent {}
class Increment extends CounterEvent {}
class Decrement extends CounterEvent {}
class Reset extends CounterEvent {}

// States — trạng thái app (output)
abstract class CounterState {
  final int count;
  const CounterState(this.count);
}
class CounterInitial extends CounterState { const CounterInitial() : super(0); }
class CounterUpdated extends CounterState { const CounterUpdated(super.count); }

// BLoC — xử lý Event → emit State (dùng Stream nội bộ)
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(const CounterInitial()) {
    on<Increment>((event, emit) => emit(CounterUpdated(state.count + 1)));
    on<Decrement>((event, emit) => emit(CounterUpdated(state.count - 1)));
    on<Reset>((event, emit) => emit(const CounterInitial()));
  }
}

// Data flow:
// UI adds Event → Stream<Event> → BLoC handler → emit(State) → Stream<State> → UI rebuilds
```

---

## `PRM393-STATE-BLOC-BASICS` — BLoC meaning, package and scalable use

```dart
// BLoC = Business Logic Component
// Package: flutter_bloc (pub.dev)
// pubspec.yaml: flutter_bloc: ^8.1.3

// Setup — 1 BLoC
void main() {
  runApp(
    BlocProvider(
      create: (_) => CounterBloc(),
      child: const MyApp(),
    ),
  );
}

// Setup — nhiều BLoC (MultiBlocProvider)
MultiBlocProvider(
  providers: [
    BlocProvider(create: (_) => AuthBloc(getIt<AuthRepository>())),
    BlocProvider(create: (_) => ProductBloc(getIt<ProductRepository>())),
    BlocProvider(create: (_) => CartBloc()),
  ],
  child: const MyApp(),
);

// UI đọc state
BlocBuilder<CounterBloc, CounterState>(
  builder: (context, state) => Text('${state.count}'),
);

// UI gửi event
context.read<CounterBloc>().add(Increment());

// Side effects (navigation, snackbar)
BlocListener<AuthBloc, AuthState>(
  listener: (context, state) {
    if (state is AuthError) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(state.message)),
      );
    }
    if (state is AuthAuthenticated) {
      Navigator.of(context).pushReplacementNamed('/home');
    }
  },
  child: const LoginForm(),
);
```

---

## `PRM393-STATE-CUBIT` — Cubit

```dart
// Cubit = BLoC đơn giản hơn — không có Event class, gọi method trực tiếp
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);  // initial state

  void increment() => emit(state + 1);
  void decrement() => emit(state - 1);
  void reset() => emit(0);
}

// Setup và dùng giống BLoC:
BlocProvider(create: (_) => CounterCubit(), child: /* ... */);

// Gọi method — KHÔNG add(Event)
context.read<CounterCubit>().increment();

BlocBuilder<CounterCubit, int>(
  builder: (context, count) => Text('$count'),
);

// Cubit vs BLoC:
// Cubit → đơn giản, ít boilerplate, app nhỏ/vừa
// BLoC  → có Event class, audit trail rõ ràng, app lớn cần testability cao
```

---

## `PRM393-STATE-BLOC-IMMUTABILITY` — Immutable BLoC states

```dart
// State PHẢI immutable — không modify state trực tiếp

// ❌ Sai: mutate state hiện tại
class BadBloc extends Bloc<AddItem, ListState> {
  BadBloc() : super(ListState([]));
  on<AddItem>((event, emit) {
    state.items.add(event.item); // ← KHÔNG được! mutate trực tiếp
    emit(state); // emit cùng object → BLoC KHÔNG detect thay đổi
  });
}

// ✅ Đúng: tạo state MỚI với data mới
class ListState extends Equatable {
  final List<Item> items;
  const ListState(this.items);

  ListState copyWith({List<Item>? items}) =>
      ListState(items ?? this.items);

  @override
  List<Object?> get props => [items]; // Equatable so sánh qua props
}

class GoodBloc extends Bloc<AddItem, ListState> {
  GoodBloc() : super(const ListState([]));
  on<AddItem>((event, emit) {
    emit(ListState([...state.items, event.item])); // spread → list mới
  });
}
```

---

## `PRM393-STATE-SETSTATE` — setState and rebuild behavior

```dart
class _CounterState extends State<CounterPage> {
  int _count = 0;

  void _increment() {
    // setState(): thông báo Flutter "state thay đổi, cần rebuild widget này"
    setState(() {
      _count++; // thay đổi state bên trong closure
    });
    // Sau setState → build() được schedule → UI cập nhật
  }

  void _wrongIncrement() {
    _count++; // thay đổi nhưng KHÔNG setState → UI KHÔNG cập nhật!
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text('$_count', style: const TextStyle(fontSize: 48))),
      floatingActionButton: FloatingActionButton(
        onPressed: _increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}

// setState() chỉ rebuild widget hiện tại và các con
// Không ảnh hưởng widget cha
```

---

## `PRM393-STATE-HOISTING` — State hoisting

```dart
// State hoisting: nâng state lên parent để nhiều children dùng chung

// ❌ State trong ChildA → ChildB không truy cập được
class _ChildAState extends State<ChildA> {
  String _value = ''; // ChildB không biết về _value
}

// ✅ Hoist state lên Parent → share qua props + callback
class _ParentState extends State<Parent> {
  String _sharedValue = ''; // state dùng chung

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      ChildA(
        value: _sharedValue,
        onChanged: (v) => setState(() => _sharedValue = v), // callback
      ),
      ChildB(value: _sharedValue), // đọc cùng state
    ]);
  }
}

class ChildA extends StatelessWidget {
  final String value;
  final ValueChanged<String> onChanged; // callback thay đổi state
  const ChildA({super.key, required this.value, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: TextEditingController(text: value),
      onChanged: onChanged, // báo lên parent
    );
  }
}
```

---

## `PRM393-STATE-CONSISTENCY` — State consistency

```dart
// State nhất quán: không để state ở trạng thái invalid

// ❌ Có thể inconsistent: 2 field độc lập có thể mâu thuẫn
class CartState {
  final List<Item> items;
  final int totalCount; // có thể không khớp items.length!
  CartState(this.items, this.totalCount);
}

// ✅ Single source of truth: derive từ dữ liệu gốc
class CartState {
  final List<Item> items;
  const CartState(this.items);

  // Tính toán từ items → luôn nhất quán, không thể sai
  int get totalCount => items.length;
  double get totalPrice => items.fold(0.0, (sum, item) => sum + item.price);
  bool get isEmpty => items.isEmpty;
}
```

---

## `PRM393-STATE-LOCALITY` — Local state and rebuild scope

```dart
// Local state = chỉ cần trong 1 widget → setState là đủ
// Shared state = cần nhiều widget → BLoC/Provider

class _LoginPageState extends State<LoginPage> {
  bool _isPasswordVisible = false; // ← local: chỉ widget này cần
  bool _isLoading = false;         // ← local: hiển thị loading indicator

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      TextField(
        obscureText: !_isPasswordVisible,
        decoration: InputDecoration(
          suffixIcon: IconButton(
            icon: Icon(_isPasswordVisible ? Icons.visibility_off : Icons.visibility),
            onPressed: () => setState(() => _isPasswordVisible = !_isPasswordVisible),
          ),
        ),
      ),
      if (_isLoading) const CircularProgressIndicator(),
    ]);
  }
}

// Nguyên tắc: State càng gần widget dùng nó càng tốt
// Chỉ "lift state up" khi cần share giữa widgets
```

---

## `PRM393-STATE-PROVIDER` — Provider vs setState

```dart
// Provider: ChangeNotifier + Consumer
// Phù hợp khi cần share state mà không cần full BLoC complexity

class CounterModel extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners(); // trigger rebuild cho tất cả Consumer lắng nghe
  }
}

// Setup:
ChangeNotifierProvider(create: (_) => CounterModel(), child: const MyApp());

// Đọc + subscribe (rebuild khi thay đổi):
Consumer<CounterModel>(
  builder: (_, model, __) => Text('${model.count}'),
);
// Hoặc:
final count = context.watch<CounterModel>().count;

// Gọi action (không subscribe, không rebuild):
context.read<CounterModel>().increment();

// So sánh:
// setState → local state trong 1 widget
// Provider → shared state, simple/medium complexity
// BLoC → complex business logic, large app, strict testability
```

---

# LOCAL STORAGE & ASYNC DATA

---

## `PRM393-STORAGE-ASYNC-IO` — Asynchronous database operations

```dart
// Tất cả DB operations trong Flutter là ASYNC — không block UI thread

class DatabaseService {
  Database? _db;

  Future<void> init() async {
    _db = await openDatabase(
      join(await getDatabasesPath(), 'app.db'),
      version: 1,
      onCreate: (db, version) async {
        await db.execute('''
          CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            created_at INTEGER NOT NULL
          )
        ''');
      },
    );
  }

  Future<int> insertUser(String name, String email) async {
    return await _db!.insert('users', {
      'name': name,
      'email': email,
      'created_at': DateTime.now().millisecondsSinceEpoch,
    });
  }

  Future<List<Map<String, dynamic>>> getUsers() async {
    return await _db!.query('users', orderBy: 'created_at DESC');
  }

  Future<int> updateUser(int id, String name) async {
    return await _db!.update('users', {'name': name},
        where: 'id = ?', whereArgs: [id]);
  }

  Future<int> deleteUser(int id) async {
    return await _db!.delete('users', where: 'id = ?', whereArgs: [id]);
  }
}
```

---

## `PRM393-STORAGE-FUTUREBUILDER` — FutureBuilder for local storage

```dart
class UserListPage extends StatefulWidget {
  const UserListPage({super.key});
  @override
  State<UserListPage> createState() => _UserListPageState();
}

class _UserListPageState extends State<UserListPage> {
  final _db = DatabaseService();
  late Future<List<Map<String, dynamic>>> _future;

  @override
  void initState() {
    super.initState();
    // LƯU Future ở initState — tránh re-run mỗi rebuild
    _future = _db.getUsers();
  }

  void _refresh() {
    setState(() {
      _future = _db.getUsers(); // reload data
    });
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Map<String, dynamic>>>(
      future: _future,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const CircularProgressIndicator();
        }
        if (snapshot.hasError) return Text('Error: ${snapshot.error}');
        final users = snapshot.data ?? [];
        if (users.isEmpty) return const Text('No users yet');
        return ListView.builder(
          itemCount: users.length,
          itemBuilder: (_, i) => ListTile(
            title: Text(users[i]['name']),
            subtitle: Text(users[i]['email']),
          ),
        );
      },
    );
  }
}
```

---

## `PRM393-STORAGE-SHARED-PREFERENCES` — SharedPreferences

```dart
import 'package:shared_preferences/shared_preferences.dart';

class PrefsService {
  // Lấy dữ liệu
  Future<String?> getUsername() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('username'); // null nếu chưa có
  }

  Future<bool> isLoggedIn() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool('is_logged_in') ?? false;
  }

  // Lưu dữ liệu
  Future<void> saveLogin(String username, String token) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('username', username);
    await prefs.setString('token', token);
    await prefs.setBool('is_logged_in', true);
    await prefs.setInt('login_time', DateTime.now().millisecondsSinceEpoch);
  }

  // Xóa dữ liệu
  Future<void> clearLogin() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('username');
    await prefs.remove('token');
    await prefs.setBool('is_logged_in', false);
    // Xóa tất cả: await prefs.clear();
  }
}

// Kiểu dữ liệu hỗ trợ: String, int, double, bool, List<String>
// KHÔNG dùng cho: token/password → dùng flutter_secure_storage
// KHÔNG dùng cho: dữ liệu lớn/phức tạp → dùng SQLite/Hive
```

---

## `PRM393-STORAGE-HIVE` — Hive

```dart
// Hive: NoSQL key-value store, nhanh, cả sync read sau khi mở box

import 'package:hive_flutter/hive_flutter.dart';

// main() setup:
// await Hive.initFlutter();
// await Hive.openBox<String>('settings');

class HiveService {
  Box<String> get _box => Hive.box<String>('settings');

  // Write (async)
  Future<void> save(String key, String value) async {
    await _box.put(key, value);
  }

  // Read (SYNC — Hive cache data trong memory sau khi mở box)
  String? get(String key) => _box.get(key);

  // Delete
  Future<void> delete(String key) async => await _box.delete(key);

  // Watch changes (reactive)
  Stream<BoxEvent> watchKey(String key) => _box.watch(key: key);
}

// Hive vs SharedPreferences:
// SharedPreferences: platform-specific (NSUserDefaults/SharedPreferences)
// Hive: pure Dart, nhanh hơn, sync read, type-safe với TypeAdapter
```

---

## `PRM393-STORAGE-SQLITE` — SQLite with sqflite

```dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class SqliteService {
  static Database? _db;

  Future<Database> get database async {
    _db ??= await _initDatabase();
    return _db!;
  }

  Future<Database> _initDatabase() async {
    return openDatabase(
      join(await getDatabasesPath(), 'products.db'),
      version: 1,
      onCreate: (db, ver) async {
        await db.execute('''
          CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            stock INTEGER DEFAULT 0
          )
        ''');
      },
    );
  }

  Future<int> insert(String name, double price) async {
    final db = await database;
    return db.insert('products', {'name': name, 'price': price});
  }

  Future<List<Map<String, dynamic>>> getAll() async {
    final db = await database;
    return db.query('products', orderBy: 'name ASC');
  }

  Future<List<Map<String, dynamic>>> search(String q) async {
    final db = await database;
    return db.query('products', where: 'name LIKE ?', whereArgs: ['%$q%']);
  }

  Future<int> updateStock(int id, int stock) async {
    final db = await database;
    return db.update('products', {'stock': stock}, where: 'id = ?', whereArgs: [id]);
  }

  Future<int> delete(int id) async {
    final db = await database;
    return db.delete('products', where: 'id = ?', whereArgs: [id]);
  }
}
```

---

# TESTING

---

## `PRM393-TEST-UNIT` — Unit testing

```dart
// test/unit/auth_usecase_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';

class MockAuthRepository extends Mock implements AuthRepository {}

void main() {
  late LoginUseCase loginUseCase;
  late MockAuthRepository mockRepo;

  setUp(() {
    mockRepo = MockAuthRepository();
    loginUseCase = LoginUseCase(mockRepo);
  });

  group('LoginUseCase', () {
    test('returns UserEntity on success', () async {
      // Arrange
      const user = UserEntity(id: '1', email: 'alice@test.com');
      when(() => mockRepo.login('alice@test.com', 'pass'))
          .thenAnswer((_) async => user);

      // Act
      final result = await loginUseCase.execute('alice@test.com', 'pass');

      // Assert
      expect(result, equals(user));
      verify(() => mockRepo.login('alice@test.com', 'pass')).called(1);
    });

    test('throws on invalid credentials', () {
      when(() => mockRepo.login(any(), any()))
          .thenThrow(const InvalidCredentialsException());

      expect(
        () => loginUseCase.execute('bad', 'wrong'),
        throwsA(isA<InvalidCredentialsException>()),
      );
    });
  });
}
```

---

## `PRM393-TEST-WIDGET` — Widget testing

```dart
// test/widget/counter_page_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('CounterPage shows 0 initially', (tester) async {
    await tester.pumpWidget(
      BlocProvider(
        create: (_) => CounterBloc(),
        child: const MaterialApp(home: CounterPage()),
      ),
    );
    expect(find.text('0'), findsOneWidget);
  });

  testWidgets('Counter increments on button tap', (tester) async {
    await tester.pumpWidget(
      BlocProvider(
        create: (_) => CounterBloc(),
        child: const MaterialApp(home: CounterPage()),
      ),
    );

    await tester.tap(find.byKey(const Key('increment_button')));
    await tester.pump(); // trigger rebuild

    expect(find.text('1'), findsOneWidget);
    expect(find.text('0'), findsNothing);
  });

  testWidgets('LoginPage has 2 TextFields and 1 button', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: LoginPage()));
    expect(find.byType(TextField), findsNWidgets(2));
    expect(find.byType(ElevatedButton), findsOneWidget);
  });
}
```

---

## `PRM393-TEST-INTEGRATION` — Integration testing

```dart
// integration_test/login_flow_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  group('Login Flow', () {
    testWidgets('can login with valid credentials', (tester) async {
      await tester.pumpWidget(const MyApp()); // app thật
      await tester.pumpAndSettle();

      // Nhập thông tin
      await tester.enterText(find.byKey(const Key('email_field')), 'test@test.com');
      await tester.enterText(find.byKey(const Key('password_field')), 'password123');

      // Bấm login
      await tester.tap(find.byKey(const Key('login_button')));
      await tester.pumpAndSettle(const Duration(seconds: 5)); // đợi API real

      // Verify đã vào Home
      expect(find.byType(HomePage), findsOneWidget);
    });
  });
}

// Chạy: flutter test integration_test/login_flow_test.dart
```

---

## `PRM393-TEST-ISOLATION-REFACTOR` — Test isolation and refactoring safety

```dart
// Test isolation: mỗi test KHÔNG phụ thuộc vào test khác
void main() {
  // setUp chạy trước MỖI test trong group
  setUp(() {
    // Tạo mock mới, reset state
  });

  // tearDown chạy sau MỖI test
  tearDown(() {
    // cleanup: close stream, dispose controller
  });

  test('A', () { /* độc lập */ });
  test('B', () { /* độc lập, không phụ thuộc kết quả test A */ });
}

// Refactoring safety: tests như lưới an toàn
// Refactor code → chạy tests → pass: refactor không break behavior
// Refactor code → chạy tests → fail: biết ngay đã break gì, ở đâu
// Không có tests → refactor mù, sợ thay đổi → technical debt tăng
```

---

## `PRM393-TEST-QUALITY` — Testing quality and testing pyramid

```
// Testing Pyramid:
//
//          /\
//         /  \
//        / E2E \          ← Ít, chậm nhất, đắt
//       /________\        (Integration tests)
//      /          \
//     /   Widget   \      ← Trung bình
//    /______________\
//   /                \
//  /   Unit Tests     \   ← Nhiều nhất, nhanh nhất, rẻ nhất
// /____________________\
//
// Nguyên tắc:
// - Unit test: nhanh (<1ms), isolated, mock dependencies → viết nhiều nhất
// - Widget test: test UI component, không cần device
// - Integration/E2E test: test full user flow, cần device/emulator → viết ít
```

---

## `PRM393-TEST-GOLDEN` — Golden testing

```dart
// Golden test: chụp ảnh widget và so sánh với "ảnh chuẩn" (golden file)
// Phát hiện UI regression (thay đổi không mong muốn)

import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('UserCard matches golden', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: UserCard(
            user: User(id: '1', name: 'Alice', email: 'alice@example.com'),
          ),
        ),
      ),
    );

    await expectLater(
      find.byType(UserCard),
      matchesGoldenFile('goldens/user_card.png'), // so sánh với ảnh chuẩn
    );
  });
}

// Tạo/update golden files (lần đầu hoặc khi UI thay đổi có chủ ý):
// flutter test --update-goldens
```

---

# DEVELOPMENT TOOLING

---

## `PRM393-TOOL-HOT-RELOAD` — Hot reload

```bash
# Trong khi 'flutter run' đang chạy:
r         → Hot Reload (inject code changes, GIỮ state)
R         → Hot Restart (restart app, MẤT state)
q         → Quit
h         → Help

# VS Code: Ctrl+S → tự động Hot Reload
# Android Studio: click nút ⚡ (lightning bolt)

# Hot Reload KHÔNG work cho:
# - Thay đổi main() entry point
# - Thêm/xóa global variables
# - Thay đổi static fields
# - Thay đổi trong initState()
# → Những trường hợp này cần Hot Restart (R)
```

---

## `PRM393-TOOL-DEVTOOLS-NETWORK` — DevTools network debugging

```bash
# Mở Flutter DevTools
flutter run
# Click URL DevTools xuất hiện trong terminal

# Hoặc:
flutter pub global activate devtools
flutter pub global run devtools
```

```dart
// Log HTTP requests với dio interceptor
import 'package:dio/dio.dart';

final dio = Dio();
dio.interceptors.add(LogInterceptor(
  request: true,
  requestBody: true,
  responseHeader: true,
  responseBody: true,
  // In ra tất cả request/response trong console
));

// DevTools Network tab hiển thị:
// - URL, method, status code
// - Request headers & body
// - Response headers & body
// - Timeline: DNS, connect, send, wait, receive timing
```

---

## `PRM393-TOOL-SDK-SETUP` — Flutter SDK and first-run environment

```bash
# 1. Tải Flutter SDK: https://flutter.dev/docs/get-started/install
# 2. Thêm vào PATH (Windows):
#    Environment Variables > System Variables > Path → thêm: C:\flutter\bin

# 3. Kiểm tra môi trường
flutter doctor

# Output mẫu:
# [✓] Flutter (Channel stable, 3.x.x, on Windows 11)
# [✓] Windows Version (Windows 11)
# [✓] Android toolchain (Android SDK version 34.0.0)
# [✓] Chrome - develop for the web
# [✓] Android Studio (version 2023.x)
# [✓] VS Code (version 1.x)
# [✓] Connected device (2 available)

# 4. Fix issues:
flutter doctor --android-licenses   # accept Android SDK licenses

# 5. VS Code extensions cần thiết:
# - Flutter (by Dart Code)
# - Dart (by Dart Code)
```

---

## `PRM393-TOOL-PROJECT-WORKFLOW` — New project first-run workflow

```bash
# 1. Tạo project mới
flutter create my_app --org com.example --platforms android,ios,web
cd my_app

# 2. Kiểm tra thiết bị sẵn có
flutter devices

# 3. Chạy app
flutter run                         # device/emulator đang kết nối
flutter run -d chrome               # web browser
flutter run -d "Pixel 7 API 34"    # emulator cụ thể

# Cấu trúc project:
# lib/              ← Dart code của bạn (main.dart, features/...)
# test/             ← Unit + widget tests
# integration_test/ ← Integration tests
# android/          ← Android native config (AndroidManifest.xml)
# ios/              ← iOS native config (Info.plist)
# pubspec.yaml      ← dependencies + assets
# analysis_options.yaml ← linting rules
```

---

# UI, LAYOUT & FORMS

---

## `PRM393-UI-FORMS` — Form purpose and state operations

```dart
class LoginForm extends StatefulWidget {
  const LoginForm({super.key});
  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>(); // key để control Form
  final _emailCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();

  @override
  void dispose() {
    _emailCtrl.dispose(); // LUÔN dispose TextEditingController
    _passwordCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (_formKey.currentState!.validate()) { // validate TẤT CẢ field
      _formKey.currentState!.save();         // gọi onSaved của mỗi field
      // Gửi lên API...
    }
  }

  void _reset() => _formKey.currentState!.reset(); // xóa tất cả field + lỗi

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(children: [
        TextFormField(
          controller: _emailCtrl,
          keyboardType: TextInputType.emailAddress,
          decoration: const InputDecoration(labelText: 'Email'),
          validator: (v) => (v?.isEmpty ?? true) ? 'Required' : null,
          onSaved: (v) { /* lưu giá trị final */ },
        ),
        TextFormField(
          controller: _passwordCtrl,
          obscureText: true,
          decoration: const InputDecoration(labelText: 'Password'),
          validator: (v) => (v?.length ?? 0) < 6 ? 'Min 6 chars' : null,
        ),
        const SizedBox(height: 16),
        ElevatedButton(onPressed: _submit, child: const Text('Login')),
        TextButton(onPressed: _reset, child: const Text('Reset')),
      ]),
    );
  }
}
```

---

## `PRM393-UI-FORM-VALIDATION` — Form validation

```dart
// Validators tái sử dụng

String? validateEmail(String? value) {
  if (value == null || value.trim().isEmpty) return 'Email is required';
  final emailRegex = RegExp(r'^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$');
  if (!emailRegex.hasMatch(value)) return 'Invalid email format';
  return null; // null = hợp lệ
}

String? validatePassword(String? value) {
  if (value == null || value.isEmpty) return 'Password is required';
  if (value.length < 8) return 'At least 8 characters';
  if (!value.contains(RegExp(r'[A-Z]'))) return 'Need at least one uppercase';
  if (!value.contains(RegExp(r'[0-9]'))) return 'Need at least one number';
  return null;
}

String? validateRequired(String? value) =>
    (value == null || value.trim().isEmpty) ? 'This field is required' : null;

// Dùng trong TextFormField:
TextFormField(
  validator: validateEmail,           // function reference
  decoration: const InputDecoration(labelText: 'Email'),
);
```

---

## `PRM393-UI-TEXT-INPUT` — TextField, TextEditingController and input types

```dart
class _InputDemoState extends State<InputDemo> {
  final _nameCtrl = TextEditingController();
  final _phoneFocus = FocusNode();
  String _searchQuery = '';

  @override
  void initState() {
    super.initState();
    _nameCtrl.addListener(() => print('Name: ${_nameCtrl.text}'));
  }

  @override
  void dispose() {
    _nameCtrl.dispose(); // LUÔN dispose
    _phoneFocus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      // Text input với controller
      TextField(
        controller: _nameCtrl,
        decoration: const InputDecoration(
          labelText: 'Full Name',
          hintText: 'Enter your name',
          prefixIcon: Icon(Icons.person),
          border: OutlineInputBorder(),
        ),
        textInputAction: TextInputAction.next, // "Next" trên bàn phím
        onSubmitted: (_) => FocusScope.of(context).requestFocus(_phoneFocus),
      ),

      const SizedBox(height: 12),

      // Số điện thoại
      TextField(
        focusNode: _phoneFocus,
        keyboardType: TextInputType.phone,
        decoration: const InputDecoration(labelText: 'Phone', border: OutlineInputBorder()),
      ),

      const SizedBox(height: 12),

      // Search — onChange
      TextField(
        onChanged: (v) => setState(() => _searchQuery = v),
        decoration: InputDecoration(
          hintText: 'Search...',
          prefixIcon: const Icon(Icons.search),
          suffixIcon: _searchQuery.isNotEmpty
              ? IconButton(icon: const Icon(Icons.clear), onPressed: () {
                  _nameCtrl.clear();
                  setState(() => _searchQuery = '');
                })
              : null,
        ),
      ),

      const SizedBox(height: 12),

      // Password
      TextField(
        obscureText: true,
        decoration: const InputDecoration(labelText: 'Password', border: OutlineInputBorder()),
      ),

      // Lấy giá trị:
      ElevatedButton(
        onPressed: () => print('Name: ${_nameCtrl.text}'),
        child: const Text('Get Value'),
      ),
    ]);
  }
}
```

---

## `PRM393-UI-FLEX-ALIGNMENT` — Column and cross-axis alignment

```dart
Widget buildFlexDemo() {
  return Column(
    // mainAxis của Column = CHIỀU DỌC
    mainAxisAlignment: MainAxisAlignment.center,
    // crossAxis của Column = CHIỀU NGANG
    crossAxisAlignment: CrossAxisAlignment.stretch,
    children: [
      // Row: mainAxis = ngang, crossAxis = dọc
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: const [Text('Left'), Text('Center'), Text('Right')],
      ),
      const SizedBox(height: 16),

      // Expanded: chiếm toàn bộ không gian còn lại
      Row(children: [
        const Text('Label: '),
        Expanded(
          child: TextField(decoration: const InputDecoration(hintText: 'Input')),
        ),
      ]),

      // Flexible với flex ratio
      Row(
        children: [
          Flexible(flex: 1, child: Container(color: Colors.red, height: 40)),
          Flexible(flex: 2, child: Container(color: Colors.green, height: 40)),
          Flexible(flex: 1, child: Container(color: Colors.blue, height: 40)),
        ],
      ),
    ],
  );
}
```

---

## `PRM393-UI-SIZEDBOX` — SizedBox spacing

```dart
Widget buildSizedBoxDemo() {
  return Column(children: [
    const Text('Item 1'),
    const SizedBox(height: 16),      // khoảng cách dọc 16px
    const Text('Item 2'),
    const SizedBox(height: 8),
    Row(children: [
      const Text('A'),
      const SizedBox(width: 12),     // khoảng cách ngang 12px
      const Text('B'),
    ]),
    // Kích thước cố định cho button
    SizedBox(
      width: double.infinity, // full width
      height: 52,
      child: ElevatedButton(onPressed: () {}, child: const Text('Full Width Button')),
    ),
    // Shrink child (ẩn nhưng giữ space)
    // SizedBox.shrink() = width:0, height:0
    const SizedBox.shrink(),
  ]);
}
```

---

## `PRM393-UI-STACK` — Stack and overlapping children

```dart
Widget buildStackDemo() {
  return Stack(
    alignment: Alignment.center,
    children: [
      // Đáy stack: ảnh nền
      ClipRRect(
        borderRadius: BorderRadius.circular(12),
        child: Image.network(
          'https://picsum.photos/300/200',
          width: 300, height: 200, fit: BoxFit.cover,
        ),
      ),
      // Overlay gradient
      Container(
        width: 300, height: 200,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
          gradient: LinearGradient(
            begin: Alignment.topCenter, end: Alignment.bottomCenter,
            colors: [Colors.transparent, Colors.black.withOpacity(0.7)],
          ),
        ),
      ),
      // Text ở vị trí tùy chỉnh dùng Positioned
      const Positioned(
        bottom: 16, left: 16,
        child: Text('Caption', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
      ),
      // Badge góc trên phải
      const Positioned(
        top: 8, right: 8,
        child: Icon(Icons.favorite, color: Colors.red, size: 24),
      ),
    ],
  );
}
```

---

## `PRM393-UI-CONTAINER` — Container

```dart
Widget buildContainerDemo() {
  return Container(
    width: 200,
    height: 100,
    margin: const EdgeInsets.all(16),                          // khoảng ngoài
    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12), // khoảng trong
    decoration: BoxDecoration(
      // Chọn 1: color hoặc gradient (không dùng cả 2)
      gradient: const LinearGradient(
        colors: [Colors.purple, Colors.blue],
        begin: Alignment.topLeft, end: Alignment.bottomRight,
      ),
      borderRadius: BorderRadius.circular(12),
      border: Border.all(color: Colors.white.withOpacity(0.3)),
      boxShadow: [
        BoxShadow(
          color: Colors.black.withOpacity(0.15),
          blurRadius: 12,
          offset: const Offset(0, 6),
        ),
      ],
    ),
    child: const Center(
      child: Text(
        'Styled Box',
        style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
      ),
    ),
  );
}
```

---

## `PRM393-UI-GRIDVIEW` — GridView

```dart
Widget buildGridDemo(List<Product> products) {
  return GridView.builder(
    padding: const EdgeInsets.all(16),
    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
      crossAxisCount: 2,         // 2 cột cố định
      crossAxisSpacing: 12,      // khoảng ngang
      mainAxisSpacing: 12,       // khoảng dọc
      childAspectRatio: 3 / 4,   // width:height = 3:4
    ),
    itemCount: products.length,
    itemBuilder: (context, index) => ProductCard(product: products[index]),
  );
}

// Tự động tính số cột theo width:
GridView.builder(
  gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
    maxCrossAxisExtent: 200, // mỗi ô tối đa 200px → Flutter tự tính số cột
    mainAxisSpacing: 8,
    crossAxisSpacing: 8,
    childAspectRatio: 1,
  ),
  itemCount: products.length,
  itemBuilder: (_, i) => ProductCard(product: products[i]),
);
```

---

## `PRM393-UI-SLIVERS` — CustomScrollView and Slivers

```dart
Widget buildSliverDemo(List<Product> products) {
  return CustomScrollView(
    slivers: [
      // SliverAppBar: co giãn/thu nhỏ khi scroll
      SliverAppBar(
        expandedHeight: 220,
        floating: false,
        pinned: true,              // AppBar luôn hiện khi scroll lên
        snap: false,
        flexibleSpace: FlexibleSpaceBar(
          title: const Text('My Store'),
          background: Image.network('https://picsum.photos/400/220', fit: BoxFit.cover),
        ),
        actions: [
          IconButton(icon: const Icon(Icons.search), onPressed: () {}),
        ],
      ),

      // SliverToBoxAdapter: bọc widget thường vào sliver
      const SliverToBoxAdapter(
        child: Padding(
          padding: EdgeInsets.fromLTRB(16, 20, 16, 8),
          child: Text('Featured', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
        ),
      ),

      // SliverGrid: lưới trong scroll view
      SliverPadding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        sliver: SliverGrid(
          delegate: SliverChildBuilderDelegate(
            (ctx, i) => ProductCard(product: products[i]),
            childCount: products.length,
          ),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 0.75,
          ),
        ),
      ),

      // SliverList: danh sách trong scroll view
      SliverList(
        delegate: SliverChildBuilderDelegate(
          (ctx, i) => ListTile(title: Text('Recent item ${i + 1}')),
          childCount: 10,
        ),
      ),

      const SliverPadding(padding: EdgeInsets.only(bottom: 80)),
    ],
  );
}
```

---

## `PRM393-UI-THEME` — ThemeData and app-wide theming

```dart
// Định nghĩa design system 1 lần, dùng ở mọi nơi

MaterialApp(
  // Light theme
  theme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF6750A4),
      brightness: Brightness.light,
    ),
    textTheme: const TextTheme(
      displayLarge: TextStyle(fontSize: 57, fontWeight: FontWeight.w400),
      headlineLarge: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
      headlineMedium: TextStyle(fontSize: 24, fontWeight: FontWeight.w600),
      bodyLarge: TextStyle(fontSize: 16),
      bodyMedium: TextStyle(fontSize: 14),
      labelLarge: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
    ),
    appBarTheme: const AppBarTheme(centerTitle: true, elevation: 0),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        minimumSize: const Size(double.infinity, 52),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
      filled: true,
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
    ),
    cardTheme: CardTheme(
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
    ),
  ),
  // Dark theme
  darkTheme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF6750A4),
      brightness: Brightness.dark,
    ),
  ),
  themeMode: ThemeMode.system, // theo system setting
  home: const HomePage(),
);

// Đọc theme trong widget:
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Column(children: [
      Text('Title', style: theme.textTheme.headlineMedium),
      Text('Body', style: theme.textTheme.bodyLarge),
      Container(
        color: theme.colorScheme.primaryContainer,
        child: Text('Themed', style: TextStyle(color: theme.colorScheme.onPrimaryContainer)),
      ),
    ]);
  }
}
```

---

## Tóm tắt — Quick Reference

| Concept | API / Pattern hay dùng |
|---|---|
| Animation | `AnimationController`, `CurvedAnimation`, `Tween`, `AnimatedBuilder`, `AnimatedContainer` |
| State | `setState`, `BlocBuilder`, `BlocProvider`, `context.read/watch` |
| Networking | `http.get/post`, `jsonDecode`, `async/await`, HTTP status codes |
| Storage | `SharedPreferences.getInstance()`, `openDatabase()`, `sqflite` |
| Auth | `FlutterSecureStorage`, `Bearer token`, `StreamBuilder<User?>`, refresh token |
| UI Layout | `Column/Row`, `Expanded`, `Stack + Positioned`, `CustomScrollView + Slivers` |
| Form | `Form`, `GlobalKey<FormState>`, `TextEditingController`, `validate()`, `reset()` |
| Testing | `testWidgets`, `expect/find`, `mock`, `setUp/tearDown`, `matchesGoldenFile` |
| Architecture | Entity → Repository abstract → RepositoryImpl → BLoC → UI |
| Performance | `const` widgets, `RepaintBoundary`, BlocBuilder narrow scope, `compute()` |
