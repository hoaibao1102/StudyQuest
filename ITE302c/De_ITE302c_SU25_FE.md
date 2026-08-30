# ĐỀ THI TRẮC NGHIỆM: ITE302c - SU25 - FE
**Môn học:** Ethics in IT / AI Ethics (ITE302c)  
**Nguồn:** `ITE302c - SU25 - FE` (Tổng cộng: 60 câu)  
**Format:** Câu hỏi – Danh sách đáp án – Đáp án đúng – Giải thích & Kiến thức liên quan

---

### **Câu 1 (Q1.webp)**
**Câu hỏi:**  
Which of the following risk analysis methods use words like "likely," "unlikely," and "rare" to describe the likelihood of risk, and words like "low," "medium," and "high" to describe the impact of risk? (Select two.)

**Danh sách đáp án:**  
- A. Semi-qualitative analysis  
- B. Quantitative analysis  
- C. Semi-quantitative analysis  
- D. Qualitative analysis  

**Đáp án đúng:** **A. Semi-qualitative analysis** và **D. Qualitative analysis**  
**Thuộc kiến thức:** *Risk Assessment Methodologies (Phương pháp phân tích rủi ro định tính và bán định tính)*  
**Giải thích:**  
Phân tích định tính (*Qualitative analysis*) và bán định tính (*Semi-qualitative analysis*) sử dụng các thang mô tả bằng ngôn từ tự nhiên (như "likely", "unlikely", "rare" để mô tả xác suất; "low", "medium", "high" để mô tả mức độ tác động) nhằm đánh giá rủi ro khi không có hoặc không cần thiết phải dùng dữ liệu số tuyệt đối (*Quantitative*).

---

### **Câu 2 (Q2.webp)**
**Câu hỏi:**  
In reverse-engineering a double coin flip differential model, what would be the amount of truthful "yes/no" responses in our dataset?

**Danh sách đáp án:**  
- A. 75%  
- B. 25%  
- C. 100%  
- D. 50%  

**Đáp án đúng:** **A. 75%**  
**Thuộc kiến thức:** *Differential Privacy & Randomized Response Mechanism (Cơ chế phản hồi ngẫu nhiên tung đồng xu kép)*  
**Giải thích:**  
Trong kỹ thuật Randomized Response hai lần tung đồng xu:  
- Lần 1: Tung được Mặt ngửa (xác suất 50%) $\rightarrow$ Người trả lời nói sự thật (100% trung thực trong nửa này).  
- Nếu Mặt sấp (xác suất 50%): Tung lần 2 $\rightarrow$ Mặt ngửa trả lời "Yes" (25%), Mặt sấp trả lời "No" (25%).  
Tổng tỷ lệ phản hồi mang thông tin trung thực để giải mã ngược (*reverse-engineering*) dữ liệu gốc của quần thể là $50\% + 25\% = 75\%$.

---

### **Câu 3 (Q3.webp)**
**Câu hỏi:**  
During cross-validation, which of the following dataset splits is used to tune the performance of a model?

**Danh sách đáp án:**  
- A. Training set  
- B. Test set  
- C. Validation test  
- D. Unit test  

**Đáp án đúng:** **C. Validation test** *(Validation set)*  
**Thuộc kiến thức:** *Model Tuning & Cross-Validation (Tinh chỉnh hiệu năng với tập Validation)*  
**Giải thích:**  
Trong quá trình huấn luyện và kiểm thực chéo (cross-validation), tập kiểm định (*Validation set*) được sử dụng để đánh giá tạm thời và tinh chỉnh các siêu tham số (*tune performance / hyperparameters*) của mô hình, tách biệt với Training set (dùng để học) và Test set (dùng để kiểm thử độc lập cuối cùng).

---

### **Câu 4 (Q4.webp)**
**Câu hỏi:**  
When used in recommendation engines, explainable algorithms can help answer the question of ___

**Danh sách đáp án:**  
- A. why?  
- B. how?  
- C. who?  
- D. what?  

**Đáp án đúng:** **A. why?**  
**Thuộc kiến thức:** *Explainable AI (XAI) in Recommender Systems (Khả năng giải thích câu hỏi "Tại sao")*  
**Giải thích:**  
Trong các hệ thống gợi ý, các thuật toán có khả năng giải thích giúp giải đáp cho người dùng và các bên liên quan câu hỏi: "TẠI SAO (*Why?*)" một bộ phim, sản phẩm hoặc quyết định cụ thể lại được hệ thống lựa chọn để đề xuất.

---

### **Câu 5 (Q5.webp)**
**Câu hỏi:**  
Which of the following is a recommended security practice for machine learning datasets?

**Danh sách đáp án:**  
- A. Ensure your team is full of different perspectives  
- B. Enact a sound data governance structure  
- C. Perform threat modeling with beneficial algorithms  
- D. Create a chain of command  

**Đáp án đúng:** **B. Enact a sound data governance structure**  
**Thuộc kiến thức:** *ML Data Security & Governance (Quản trị an toàn dữ liệu máy học)*  
**Giải thích:**  
Thực hành bảo mật hàng đầu cho tập dữ liệu máy học là thiết lập và duy trì một khung cấu trúc quản trị dữ liệu chặt chẽ (*sound data governance structure*), giúp kiểm soát quyền truy cập, bảo đảm tính toàn vẹn và ngăn ngừa rò rỉ dữ liệu nhạy cảm.

---

### **Câu 6 (Q6.webp)**
**Câu hỏi:**  
Which of the following are potential ethical benefits of conducting pilot testing prior to the release of emerging technologies? (Select two.)

**Danh sách đáp án:**  
- A. It certifies that a product's developers are legally accountable.  
- B. It minimizes the impact of any ethical issues which may emerge.  
- C. It demonstrates that the system is functional as early as possible in order to satisfy senior management and investor stakeholders.  
- D. It reveals any gaps in accountability or auditability.  

**Đáp án đúng:** **B. It minimizes the impact of any ethical issues which may emerge.** và **D. It reveals any gaps in accountability or auditability.**  
**Thuộc kiến thức:** *Pilot Testing & Ethical Risk Mitigation (Thử nghiệm diện hẹp và giảm thiểu rủi ro đạo đức)*  
**Giải thích:**  
Thử nghiệm diện hẹp (*pilot testing*) giúp phát hiện sớm các lỗ hổng về khả năng kiểm toán và trách nhiệm giải trình (D), đồng thời giới hạn phạm vi tác động của bất kỳ sự cố đạo đức nào phát sinh trên một nhóm nhỏ thay vì gây ảnh hưởng rộng khắp xã hội (B).

---

### **Câu 7 (Q7.webp)**
**Câu hỏi:**  
Differential privacy works by adding what to a dataset?

**Danh sách đáp án:**  
- A. filters  
- B. fairness scoring  
- C. noise  
- D. k-anonymity  

**Đáp án đúng:** **C. noise**  
**Thuộc kiến thức:** *Differential Privacy Mechanism (Cơ chế thêm nhiễu ngẫu nhiên)*  
**Giải thích:**  
*Differential Privacy* (Quyền riêng tư vi sai) hoạt động bằng cách đưa thêm một lượng nhiễu toán học ngẫu nhiên (*noise*, ví dụ nhiễu Laplace/Gaussian) vào dữ liệu hoặc kết quả truy vấn thống kê nhằm bảo vệ danh tính của các cá nhân.

---

### **Câu 8 (Q8.webp)**
**Câu hỏi:**  
Which of the following describes the technique of homomorphic encryption?

**Danh sách đáp án:**  
- A. A method of swapping public and private keys between hosts.  
- B. A method of cryptography that hides data inside other data.  
- C. A method of performing operations on encrypted data.  
- D. A method of mitigating biased algorithms through enhanced secrecy.  

**Đáp án đúng:** **C. A method of performing operations on encrypted data.**  
**Thuộc kiến thức:** *Homomorphic Encryption (Mã hóa đồng hình)*  
**Giải thích:**  
Mã hóa đồng hình (*Homomorphic Encryption*) là phương pháp mật mã tiên tiến cho phép thực hiện các phép tính toán và xử lý trực tiếp trên bản mã (*operations on encrypted data*) mà không cần phải giải mã dữ liệu ra bản rõ.

---

### **Câu 9 (Q9.webp)**
**Câu hỏi:**  
Which team typically oversees penetration test operations and adherence to the rules of engagement (ROE)?

**Danh sách đáp án:**  
- A. Blue team  
- B. Red team  
- C. Purple team  
- D. White team  

**Đáp án đúng:** **D. White team**  
**Thuộc kiến thức:** *Penetration Testing Teams & ROE (Đội ngũ White Team giám sát diễn tập)*  
**Giải thích:**  
Trong các cuộc diễn tập an ninh mạng/kiểm thử xâm nhập, *White team* đóng vai trò là trọng tài và ban điều phối, giám sát toàn bộ hoạt động và đảm bảo các bên tuân thủ nghiêm ngặt quy tắc ứng xử (*Rules of Engagement - ROE*).

---

### **Câu 10 (Q10.webp)**
**Câu hỏi:**  
Which of the following is a platform that includes hundreds of security exploit tools?

**Danh sách đáp án:**  
- A. Zenmap  
- B. Nmap  
- C. Kali Linux  
- D. Wireshark  

**Đáp án đúng:** **C. Kali Linux**  
**Thuộc kiến thức:** *Security Assessment Platforms (Hệ điều hành kiểm thử bảo mật Kali Linux)*  
**Giải thích:**  
Kali Linux là nền tảng hệ điều hành bảo mật mã nguồn mở hàng đầu tích hợp sẵn hàng trăm công cụ chuyên nghiệp phục vụ kiểm thử xâm nhập, phân tích mã độc và đánh giá an ninh mạng.

---

### **Câu 11 (Q11.webp)**
**Câu hỏi:**  
You want to solicit feedback from users who are seeking explanations about your AI products and services. So, you decide to place a form on your marketing website that users can fill out. Which of the following is the best way to structure that form for the purpose of collecting useful feedback?

**Danh sách đáp án:**  
- A. Provide a drop-down menu of feedback categories that users can select from, with a promise that you'll follow up via email.  
- B. Provide a series of open questions with a single-line entry field where users can provide short answers.  
- C. Provide a series of yes or no questions with radio buttons where users select their respective answers.  
- D. Provide a large, unrestricted text box where users can enter their thoughts at length.  

**Đáp án đúng:** **A. Provide a drop-down menu of feedback categories that users can select from, with a promise that you'll follow up via email.**  
**Thuộc kiến thức:** *AI Feedback Mechanism & User Engagement (Thu thập phản hồi về khả năng giải thích của AI)*  
**Giải thích:**  
Cung cấp menu thả xuống (*drop-down menu*) giúp người dùng dễ dàng định vị và phân loại thắc mắc của mình theo các danh mục rõ ràng, kết hợp lời hứa phản hồi chi tiết qua email tạo nên quy trình thu thập phản hồi hiệu quả và có trách nhiệm giải trình.

---

### **Câu 12 (Q12.webp)**
**Câu hỏi:**  
Which of the following are fundamental risk management tasks? (Select two.)

**Danh sách đáp án:**  
- A. Mitigation  
- B. Authentication  
- C. Compliance  
- D. Identification  

**Đáp án đúng:** **A. Mitigation** và **D. Identification**  
**Thuộc kiến thức:** *Risk Management Core Lifecycle (Các bước căn bản trong quản trị rủi ro)*  
**Giải thích:**  
Hai nhiệm vụ nền tảng cốt lõi trong chu trình quản trị rủi ro là: Nhận diện rủi ro (D - *Identification*) và Giảm thiểu/kiểm soát rủi ro (A - *Mitigation*).

---

### **Câu 13 (Q13.webp)**
**Câu hỏi:**  
Which of the following are important steps to document during an auditing process? (Select two.)

**Danh sách đáp án:**  
- A. Provide significant advance notice before an audit.  
- B. Specify and document what precisely is being audited.  
- C. Specify a purpose for the audit or an agenda to be covered.  
- D. Document the audit procedures to be followed.  

**Đáp án đúng:** **B. Specify and document what precisely is being audited.** và **D. Document the audit procedures to be followed.**  
**Thuộc kiến thức:** *Ethical Auditing Documentation (Tài liệu hóa quy trình kiểm toán đạo đức)*  
**Giải thích:**  
Trong quá trình kiểm toán (*Auditing process*), tài liệu kiểm toán bắt buộc phải ghi rõ đối tượng/hạng mục chính xác đang được kiểm toán (B) và quy trình/thủ tục kiểm toán được áp dụng (D).

---

### **Câu 14 (Q14.webp)**
**Câu hỏi:**  
Which of the following measures is best suited for reporting results to an audience?

**Danh sách đáp án:**  
- A. Standard deviation  
- B. Variance  
- C. Mode  
- D. Median  

**Đáp án đúng:** **D. Median**  
**Thuộc kiến thức:** *Descriptive Statistics & Communication (Báo cáo số liệu thống kê dễ hiểu)*  
**Giải thích:**  
Số trung vị (*Median*) là thước đo xu hướng tập trung trực quan và dễ hiểu nhất khi trình bày kết quả cho đại chúng, vì nó phản ánh chính xác điểm trung tâm của dữ liệu mà không bị sai lệch bởi các giá trị ngoại lai cực đoan (như Trung bình cộng, Phương sai hay Độ lệch chuẩn).

---

### **Câu 15 (Q15.webp)**
**Câu hỏi:**  
A hospital dataset protects whether an individual has had either a stroke, heart attack, or staph infection. The individual may still be harmed via dataset

**Danh sách đáp án:**  
- A. group inclusion  
- B. privacy columns  
- C. k-anonymity  
- D. security issues  

**Đáp án đúng:** **A. group inclusion**  
**Thuộc kiến thức:** *Group Privacy & Membership Harm (Rủi ro xâm phạm do có tên trong nhóm dữ liệu)*  
**Giải thích:**  
Ngay cả khi chẩn đoán bệnh cụ thể được bảo mật, việc danh tính của một cá nhân bị lộ là có mặt trong tập dữ liệu của bệnh viện (*group inclusion*) vẫn có thể gây tổn hại cho cá nhân đó (ví dụ: bị công ty bảo hiểm tăng phí hoặc phân biệt đối xử vì biết họ có tiền sử điều trị).

---

### **Câu 16 (Q16.webp)**
**Câu hỏi:**  
The organization needs to ask itself about any quality control issues it may be having. Which of the following processes is most suitable for asking and answering that question?

**Danh sách đáp án:**  
- A. Business impact assessment  
- B. Lessons learned report  
- C. Vulnerability audit  
- D. Business continuity plan  

**Đáp án đúng:** **C. Vulnerability audit**  
**Thuộc kiến thức:** *Quality Control & Vulnerability Assessment (Kiểm toán lỗ hổng và kiểm soát chất lượng)*  
**Giải thích:**  
Kiểm toán lỗ hổng (*Vulnerability audit*) là quy trình chuyên môn thích hợp nhất để rà soát toàn diện, tìm kiếm và khắc phục các vấn đề liên quan đến kiểm soát chất lượng và an toàn hệ thống của tổ chức.

---

### **Câu 17 (Q17.webp)**
**Câu hỏi:**  
Why is it important to take a proactive approach to addressing liability issues?

**Danh sách đáp án:**  
- A. The law often lags behind innovation.  
- B. The law is not always applied consistently.  
- C. The law is not always clear.  
- D. The law often difficult to understand.  

**Đáp án đúng:** **A. The law often lags behind innovation.**  
**Thuộc kiến thức:** *The Pacing Problem in Technology Law (Độ trễ của luật pháp so với công nghệ)*  
**Giải thích:**  
Hiện tượng độ trễ pháp lý (*The law often lags behind innovation*) chỉ ra rằng công nghệ luôn phát triển nhanh hơn luật pháp. Vì vậy, các tổ chức phải chủ động (*proactive*) giải quyết các nguy cơ pháp lý và trách nhiệm đạo đức trước.

---

### **Câu 18 (Q18.webp)**
**Câu hỏi:**  
When you deliver periodic statements about a crisis to the media, what should the first statement do?

**Danh sách đáp án:**  
- A. Provide in-depth details about the situation  
- B. Survey public opinion of the organization  
- C. Set the tone of what is to follow  
- D. Accept responsibility for perceived problems  

**Đáp án đúng:** **C. Set the tone of what is to follow**  
**Thuộc kiến thức:** *Crisis Communication (Định hình thái độ trong phát ngôn khủng hoảng đầu tiên)*  
**Giải thích:**  
Bản phát ngôn đầu tiên trong khủng hoảng có vai trò tối quan trọng là định hình thái độ, phong thái và tinh thần minh bạch cho toàn bộ quá trình xử lý khủng hoảng sau đó (*set the tone of what is to follow*).

---

### **Câu 19 (Q19.webp)**
**Câu hỏi:**  
What is the benefit of hosting a virtual reality press conference over a traditional in-person press conference?

**Danh sách đáp án:**  
- A. It will be easier to communicate your overall message to your audience.  
- B. The conference will be easily accessible to all willing participants.  
- C. The conference can be interactive without the participants needing to be co-located.  
- D. The participants will be impressed by your leveraging of new and exciting technologies.  

**Đáp án đúng:** **C. The conference can be interactive without the participants needing to be co-located.**  
**Thuộc kiến thức:** *Virtual Reality Media Relations (Họp báo thực tế ảo)*  
**Giải thích:**  
Họp báo VR cho phép các đại biểu tương tác trực quan sống động mà không cần phải có mặt tại cùng một địa điểm vật lý (*without participants needing to be co-located*).

---

### **Câu 20 (Q20.webp)**
**Câu hỏi:**  
Which of the following are important factors to consider when developing a media campaign? (Select two.)

**Danh sách đáp án:**  
- A. The environment in which the campaign will be launched  
- B. The effect the campaign has on the organization's bottom line  
- C. The time-sensitive nature of communication in the campaign  
- D. The risks that will be talked about in the campaign  

**Đáp án đúng:** **A. The environment in which the campaign will be launched** và **C. The time-sensitive nature of communication in the campaign**  
**Thuộc kiến thức:** *Media Campaign Design & Strategy (Xây dựng chiến dịch truyền thông)*  
**Giải thích:**  
Hai yếu tố sống còn cần xem xét khi lập chiến dịch truyền thông là: Môi trường/bối cảnh tiếp nhận thông tin (A) và Tính nhạy cảm về mặt thời điểm/thời gian phát hành thông điệp (C).

---

### **Câu 21 (Q21.webp)**
**Câu hỏi:**  
Which of the following are pitfalls in communicating risks to the organization? (select two.)

**Danh sách đáp án:**  
- A. Having a disjoined message.  
- B. Following up messaging with an audience.  
- C. Not paying attention to the flow of messaging.  
- D. Coordinating a message between departments.  

**Đáp án đúng:** **A. Having a disjoined message.** và **C. Not paying attention to the flow of messaging.**  
**Thuộc kiến thức:** *Risk Communication Pitfalls (Sai lầm trong truyền thông rủi ro)*  
**Giải thích:**  
Hai cạm bẫy lớn khi truyền thông rủi ro trong nội bộ là: Thông điệp bị phân mảnh, không nhất quán (A) và Không quan tâm đến luồng truyền tải thông điệp (C).

---

### **Câu 22 (Q22.webp)**
**Câu hỏi:**  
Which of the following should be conducted as part of a risk communication strategy in order to ensure the organization is upholding its regulatory obligations?

**Danh sách đáp án:**  
- A. Business impact assessment (BIA)  
- B. Compliance audit  
- C. Ethical risk review  
- D. Public relations campaign  

**Đáp án đúng:** **B. Compliance audit**  
**Thuộc kiến thức:** *Regulatory Obligations & Compliance Auditing (Kiểm toán tuân thủ quy định)*  
**Giải thích:**  
Kiểm toán tuân thủ (*Compliance audit*) là công cụ bắt buộc để xác minh và đảm bảo tổ chức đang đáp ứng đầy đủ các nghĩa vụ pháp lý và quy định hiện hành.

---

### **Câu 23 (Q23.webp)**
**Câu hỏi:**  
Which of the following describes the purpose of a business impact assessment (BIA)?

**Danh sách đáp án:**  
- A. It helps you predict business interruptions and develop recovery strategies.  
- B. It helps you identify what risks you can accept or transfer to third party.  
- C. It help you evaluate how a product or service could fail to apply ethical values to a society.  
- D. It helps you identify what risks you can accept or transfer to your customers.  

**Đáp án đúng:** **A. It helps you predict business interruptions and develop recovery strategies.**  
**Thuộc kiến thức:** *Business Impact Assessment (Mục đích của BIA)*  
**Giải thích:**  
BIA (*Business Impact Assessment*) giúp tổ chức dự báo và lượng hóa các nguy cơ gián đoạn hoạt động kinh doanh, từ đó xây dựng các chiến lược khôi phục hiệu quả (*develop recovery strategies*).

---

### **Câu 24 (Q24.webp)**
**Câu hỏi:**  
Why is it important to engage stakeholders at the beginning of the ethical risk management process?

**Danh sách đáp án:**  
- A. It proves that you are completely equipped to address any ethical risks in your data-driven systems.  
- B. It lets stakeholders know that the organization cannot address ethical risks in data-driven systems without input from stakeholders first.  
- C. It helps the organization avoid legal trouble during the development and deployment of data-driven systems.  
- D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.  

**Đáp án đúng:** **D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.**  
**Thuộc kiến thức:** *Early Stakeholder Engagement (Gắn kết các bên liên quan từ sớm)*  
**Giải thích:**  
Lôi cuốn các bên liên quan ngay từ giai đoạn khởi đầu thể hiện cam kết mạnh mẽ của tổ chức về tính minh bạch và trách nhiệm giải trình.

---

### **Câu 25 (Q25.webp)**
**Câu hỏi:**  
Why is it important to categorize ethical risks into different types? (Select two.)

**Danh sách đáp án:**  
- A. It makes it easier for us to identify and manage different types of risks.  
- B. It ensures that customers and other external stakeholders know that we take ethical risks seriously.  
- C. It helps us understand the many complexities involved in different types of ethical risks.  
- D. It helps us consider risk mitigation in terms of universal tactics that apply to all potential kinds of ethical risk.  

**Đáp án đúng:** **A. It makes it easier for us to identify and manage different types of risks.** và **C. It helps us understand the many complexities involved in different types of ethical risks.**  
**Thuộc kiến thức:** *Ethical Risk Categorization (Phân loại rủi ro đạo đức)*  
**Giải thích:**  
Phân loại rủi ro giúp tổ chức dễ dàng nhận diện và quản trị từng nhóm rủi ro cụ thể (A) và hiểu sâu sắc hơn về tính chất phức tạp của từng loại rủi ro (C).

---

### **Câu 26 (Q26.webp)**
**Câu hỏi:**  
What is a likely outcome for a weather app using a learning algorithm to figure out where to put their future weather stations?

**Danh sách đáp án:**  
- A. Accessing weather forecasts from local broadcasts  
- B. Storing data in an AWS instance with all weather stations in the country  
- C. Collecting weather data every time the app is opened, knowing the temperature where the app is being used  
- D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.  

**Đáp án đúng:** **D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.**  
**Thuộc kiến thức:** *Location Privacy & Incidental Data Harms (Rủi ro quyền riêng tư dữ liệu vị trí)*  
**Giải thích:**  
Khi ứng dụng thời tiết liên tục thu thập tọa độ GPS của người dùng mỗi lần mở ứng dụng, thuật toán có thể vô tình suy diễn và tái hiện lại toàn bộ lịch trình sinh hoạt, nơi ở và nơi làm việc của người dùng (*learning where a user lives, works, etc.*).

---

### **Câu 27 (Q27.webp)**
**Câu hỏi:**  
A type of artificial intelligence that outperforms humans in all tasks is known as

**Danh sách đáp án:**  
- A. General AI  
- B. Outwit AI  
- C. Specific AI  
- D. Encompassing AI  

**Đáp án đúng:** **A. General AI**  
**Thuộc kiến thức:** *AI Classification: General AI (Trí tuệ nhân tạo tổng quát)*  
**Giải thích:**  
General AI (AGI) là khái niệm chỉ hệ thống AI có năng lực trí tuệ toàn diện, có thể học hỏi và vượt trội hơn con người trong mọi tác vụ nhận thức.

---

### **Câu 28 (Q28.webp)**
**Câu hỏi:**  
Which of the following best describes what an algorithm is?

**Danh sách đáp án:**  
- A. a recipe that a computer uses to solve problems  
- B. a type of process a human uses to write down what steps need to happen to get a problem solved  
- C. a type of computer that calculates problem-solving methods  
- D. a list of ingredients a computer uses to generate problems to solve  

**Đáp án đúng:** **A. a recipe that a computer uses to solve problems**  
**Thuộc kiến thức:** *Definition of Algorithm (Khái niệm thuật toán)*  
**Giải thích:**  
Thuật toán là một chuỗi các chỉ dẫn có thứ tự mà máy tính sử dụng để giải quyết vấn đề, tương tự như một công thức (*a recipe*).

---

### **Câu 29 (Q29.webp)**
**Câu hỏi:**  
A predictive model's true positive result can be defined as

**Danh sách đáp án:**  
- A. the predicted result was negative, and the actual result was negative  
- B. the predicted result was negative, and the actual result was positive  
- C. the predicted result was positive, and the actual result was positive  
- D. the predicted result was positive, and the actual result was negative  

**Đáp án đúng:** **C. the predicted result was positive, and the actual result was positive**  
**Thuộc kiến thức:** *Confusion Matrix: True Positive (Dương tính thật)*  
**Giải thích:**  
Kết quả *True Positive* (Dương tính thật) được định nghĩa là trường hợp mô hình đưa ra dự đoán là dương tính và giá trị thực tế của mẫu cũng là dương tính.

---

### **Câu 30 (Q30.webp)**
**Câu hỏi:**  
An algorithm that takes an input, tries 10 different sorting techniques, and uses the best fit on the next 100 inputs is best described as a

**Danh sách đáp án:**  
- A. implicit algorithm  
- B. data algorithm  
- C. learning algorithm  
- D. explicit algorithm  

**Đáp án đúng:** **C. learning algorithm**  
**Thuộc kiến thức:** *Machine Learning Algorithm Characteristics (Thuật toán học)*  
**Giải thích:**  
Thuật toán có khả năng tự động thử nghiệm, đánh giá kết quả và tự chọn phương án tối ưu dựa trên dữ liệu đầu vào cho các lần sau là một thuật toán học (*learning algorithm*).

---

### **Câu 31 (Q31.webp)**
**Câu hỏi:**  
Are criminal justice risk assessments race-neutral?

**Danh sách đáp án:**  
- A. No, it is designed with intention to be unfair.  
- B. Yes, technology in itself is not racist.  
- C. No, the data is biased as it reflects historical bias.  
- D. Yes, algorithms replace human judgement and they are unbiased.  

**Đáp án đúng:** **C. No, the data is biased as it reflects historical bias.**  
**Thuộc kiến thức:** *Historical Bias in Criminal Risk Tools (Định kiến lịch sử trong công cụ tư pháp)*  
**Giải thích:**  
Các công cụ đánh giá rủi ro tư pháp hình sự không trung lập về chủng tộc vì tập dữ liệu huấn luyện phản ánh sự thiên vị và định kiến mang tính lịch sử (*reflects historical bias*) trong hệ thống tư pháp.

---

### **Câu 32 (Q32.webp)**
**Câu hỏi:**  
Which of the following are key principles of privacy by design? (Select two.)

**Danh sách đáp án:**  
- A. Organizations must incorporate privacy protections throughout the project lifecycle.  
- B. Organizations must not expose the operational practices and technologies used to protect user privacy.  
- C. Organizations must keep the focus of privacy protections on the business rather than the user.  
- D. Organizations must be proactive in protecting against privacy risks, not reactive.  

**Đáp án đúng:** **A. Organizations must incorporate privacy protections throughout the project lifecycle.** và **D. Organizations must be proactive in protecting against privacy risks, not reactive.**  
**Thuộc kiến thức:** *Privacy by Design Principles (Nguyên tắc Quyền riêng tư ngay từ thiết kế)*  
**Giải thích:**  
Privacy by Design nhấn mạnh: Chủ động phòng ngừa rủi ro (D - Proactive not reactive) và Bảo vệ quyền riêng tư xuyên suốt toàn bộ vòng đời phát triển của dự án (A - Full lifecycle protection).

---

### **Câu 33 (Q33.webp)**
**Câu hỏi:**  
Which of the following elements are important aspects of ethical integrity with regards to data? (Select two.)

**Danh sách đáp án:**  
- A. If the holders of data are trustworthy entities.  
- B. Whether the data was gathered in an ethical manner.  
- C. If the data is commercially viable or monetarily valuable.  
- D. What type of data (audio, visual, etc.) is being collected and/or utilized.  

**Đáp án đúng:** **A. If the holders of data are trustworthy entities.** và **B. Whether the data was gathered in an ethical manner.**  
**Thuộc kiến thức:** *Data Ethics & Ethical Integrity (Tính toàn vẹn đạo đức của dữ liệu)*  
**Giải thích:**  
Tính liêm chính đạo đức của dữ liệu đòi hỏi dữ liệu phải được thu thập một cách có đạo đức, hợp pháp (B) và bên lưu trữ/quản lý dữ liệu phải là thực thể đáng tin cậy (A).

---

### **Câu 34 (Q34.webp)**
**Câu hỏi:**  
When building a predictive model, what is the goal of the deployment phase?

**Danh sách đáp án:**  
- A. To plug in 40% of your dataset, testing the model's accuracy  
- B. To use the model in real-life predictions, monitoring the error rate and accuracy  
- C. To get the model to accept new inputs, train, and repeat training until it finds a better curve  
- D. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted  

**Đáp án đúng:** **B. To use the model in real-life predictions, monitoring the error rate and accuracy**  
**Thuộc kiến thức:** *Model Deployment & Operational Monitoring (Triển khai mô hình vào thực tế)*  
**Giải thích:**  
Mục tiêu của giai đoạn triển khai (*deployment phase*) là đưa mô hình vào phục vụ các bài toán dự đoán thực tế, đồng thời theo dõi sát sao tỷ lệ lỗi và độ chính xác trong quá trình vận hành thực.

---

### **Câu 35 (Q35.webp)**
**Câu hỏi:**  
Which of the following are examples of how AI can limit human autonomy? (Select two.)

**Danh sách đáp án:**  
- A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making.  
- B. AI systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy.  
- C. AI systems can assist individuals with automated, repetitive, or dangerous tasks.  
- D. AI systems can perform tasks that humans cannot, such as processing millions of data records in a matter of seconds.  

**Đáp án đúng:** **A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making.** và **B. AI systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy.**  
**Thuộc kiến thức:** *Human Autonomy & AI Harms (Suy giảm quyền tự trị của con người)*  
**Giải thích:**  
AI làm suy giảm quyền tự trị của con người trong các hệ thống vũ khí tự hành tước đoạt quyền ra quyết định của con người (A) và gây ảnh hưởng tiêu cực, làm xói mòn quyền tự quyết của các nhóm yếu thế như trẻ em, người già (B).

---

### **Câu 36 (Q36.webp)**
**Câu hỏi:**  
Which type of bias causes people to trust an automated decision-making system (ADS) over a human's decision?

**Danh sách đáp án:**  
- A. Implicit bias  
- B. Automation bias  
- C. Complacency bias  
- D. Confirmation bias  

**Đáp án đúng:** **B. Automation bias**  
**Thuộc kiến thức:** *Cognitive Biases: Automation Bias (Định kiến tự động hóa)*  
**Giải thích:**  
*Automation bias* là xu hướng thiên vị khiến con người tin tưởng mù quáng vào quyết định của hệ thống tự động hóa hơn là phán đoán của con người.

---

### **Câu 37 (Q37.webp)**
**Câu hỏi:**  
An unintended negative outcome of programming a broad goal into general intelligence is known as

**Danh sách đáp án:**  
- A. an enduring output  
- B. artificial sanctification  
- C. perverse instantiation  
- D. an ethical dilemma  

**Đáp án đúng:** **C. perverse instantiation**  
**Thuộc kiến thức:** *AI Alignment & Perverse Instantiation (Sự hiện thực hóa quái gở)*  
**Giải thích:**  
*Perverse instantiation* mô tả hiện tượng hệ thống AI diễn giải và thực thi một mục tiêu rộng một cách máy móc, cực đoan dẫn đến những hậu quả tiêu cực thảm khốc mà người lập trình không hề mong muốn.

---

### **Câu 38 (Q38.webp)**
**Câu hỏi:**  
If you are doing an analysis of data to determine which of several small businesses you should purchase to gain the maximum benefit to your overall company finances, what type of analysis are you doing?

**Danh sách đáp án:**  
- A. Descriptive  
- B. Prescriptive  
- C. Predictive  
- D. Cumulative  

**Đáp án đúng:** **B. Prescriptive**  
**Thuộc kiến thức:** *Data Analytics Types: Prescriptive Analytics (Phân tích chỉ định)*  
**Giải thích:**  
Phân tích chỉ định (*Prescriptive analysis*) đưa ra lời khuyên hoặc hành động tối ưu cần thực hiện (ở đây là quyết định nên mua doanh nghiệp nào để tối đa hóa tài chính).

---

### **Câu 39 (Q39.webp)**
**Câu hỏi:**  
How does increasing AI performance often conflict with the desire for explainability?

**Danh sách đáp án:**  
- A. Increasing AI performance sometimes reduces the transparency of input data used in training, making it more difficult to explain decision-making processes.  
- B. Increasing AI performance sometimes leads to greater model complexity, making it more difficult to explain decision-making processes.  
- C. Increasing AI performance sometimes leads to certain evaluation metrics no longer being useful, making it more difficult to explain decision-making processes.  
- D. Increasing AI performance sometimes removes human-in-the-loop (HITL) methods, making it more difficult to explain decision-making processes.  

**Đáp án đúng:** **B. Increasing AI performance sometimes leads to greater model complexity, making it more difficult to explain decision-making processes.**  
**Thuộc kiến thức:** *Accuracy-Explainability Tradeoff (Sự đánh đổi giữa hiệu năng và khả năng giải thích)*  
**Giải thích:**  
Tăng hiệu năng của AI thường đòi hỏi gia tăng độ phức tạp của mô hình (nhiều lớp, nhiều tham số), khiến cơ chế ra quyết định của mô hình trở thành "hộp đen" khó giải thích (*greater complexity makes it difficult to explain*).

---

### **Câu 40 (Q40.webp)**
**Câu hỏi:**  
A model that makes more mistakes by moving its decision threshold down 40% of its worthiness metric will be potentially

**Danh sách đáp án:**  
- A. more accurate and fairer  
- B. less accurate and less fair  
- C. fairer but less accurate  
- D. less fair but more accurate  

**Đáp án đúng:** **C. fairer but less accurate**  
**Thuộc kiến thức:** *Fairness vs Accuracy Tradeoff (Đánh đổi giữa tính công bằng và độ chính xác)*  
**Giải thích:**  
Hạ thấp ngưỡng quyết định (*decision threshold*) để giảm sự thiệt thòi cho các nhóm thiểu số có thể làm tăng sai số tổng thể (kém chính xác hơn - *less accurate*), nhưng đổi lại mô hình đạt mức độ công bằng cao hơn (*fairer*).

---

### **Câu 41 (Q41.webp)**
**Câu hỏi:**  
Which subset of transparency involves describing the system to a non-expert?

**Danh sách đáp án:**  
- A. Explainability  
- B. Interpretability  
- C. Auditability  
- D. Useability  

**Đáp án đúng:** **A. Explainability**  
**Thuộc kiến thức:** *Explainability in AI Transparency (Khả năng giải thích cho người không chuyên)*  
**Giải thích:**  
*Explainability* (Khả năng giải thích) là khía cạnh của tính minh bạch nhằm truyền đạt và mô tả logic hoạt động của hệ thống AI cho người dùng phổ thông không có chuyên môn sâu.

---

### **Câu 42 (Q42.webp)**
**Câu hỏi:**  
Which of the following ethical considerations should have priority in an emergency situation like the use of contact-tracing solutions during a pandemic? (Select two.)

**Danh sách đáp án:**  
- A. Privacy  
- B. Accountability  
- C. Explainability  
- D. Bias  

**Đáp án đúng:** **A. Privacy** và **B. Accountability**  
**Thuộc kiến thức:** *Ethics in Emergency Response & Contact Tracing (Đạo đức trong tình huống khẩn cấp)*  
**Giải thích:**  
Trong các giải pháp ứng phó khẩn cấp như truy vết dịch bệnh, hai nguyên tắc đạo đức cốt lõi cần ưu tiên hàng đầu là Bảo vệ quyền riêng tư (*Privacy*) và Trách nhiệm giải trình (*Accountability*).

---

### **Câu 43 (Q43.webp)**
**Câu hỏi:**  
A ___ model can still be unfair even though it won't explicitly know which groups are being inputted into the system

**Danh sách đáp án:**  
- A. biased training  
- B. blind attribute  
- C. single attribute  
- D. false-negative optimized  

**Đáp án đúng:** **B. blind attribute**  
**Thuộc kiến thức:** *Fairness through Unawareness / Blind Attribute (Mô hình ẩn thuộc tính nhạy cảm)*  
**Giải thích:**  
Một mô hình ẩn thuộc tính (*blind attribute model*) dù không biết rõ thuộc tính nhạy cảm (như giới tính, chủng tộc) vẫn có thể gây bất công vì nó có thể tái hiện định kiến thông qua các biến đại diện (proxy features).

---

### **Câu 44 (Q44.webp)**
**Câu hỏi:**  
Fairness in machine learning can protect groups from bias, but can still harm

**Danh sách đáp án:**  
- A. training datasets  
- B. researchers  
- C. future models  
- D. individuals within those groups  

**Đáp án đúng:** **D. individuals within those groups**  
**Thuộc kiến thức:** *Group Fairness vs Individual Fairness (Công bằng nhóm vs Công bằng cá nhân)*  
**Giải thích:**  
Tính công bằng theo nhóm (*Group fairness*) bảo vệ toàn thể nhóm khỏi định kiến nhưng vẫn có thể vô tình gây bất lợi cho từng cá nhân cụ thể bên trong nhóm đó (*individuals within those groups*).

---

### **Câu 45 (Q45.webp)**
**Câu hỏi:**  
Why do smart toys raise additional ethical concerns over those that are raised in the course of other products and services that use AI?

**Danh sách đáp án:**  
- A. They are used in the privacy of homes rather than in public settings, like other products or services.  
- B. The smart toys store personal data on the device, which can be stolen.  
- C. It is difficult to obtain informed consent for the use of the smart toy.  
- D. Children are more susceptible to manipulation and therefore need extra protective measures.  

**Đáp án đúng:** **D. Children are more susceptible to manipulation and therefore need extra protective measures.**  
**Thuộc kiến thức:** *AI Ethics & Child Protection (Bảo vệ trẻ em trước công nghệ AI)*  
**Giải thích:**  
Đồ chơi thông minh gây lo ngại đạo đức đặc biệt vì trẻ em là đối tượng dễ bị thao túng tâm lý và chưa có năng lực tự bảo vệ, do đó cần các biện pháp bảo vệ tăng cường.

---

### **Câu 46 (Q46.webp)**
**Câu hỏi:**  
Which of the following are important elements of the data minimization principle? (Select two.)

**Danh sách đáp án:**  
- A. Only collect data that is strictly necessary  
- B. Only keep data for as long as it is needed  
- C. Only delete data that can be easily replaced  
- D. Only compress data that needs to be kept as small as possible  

**Đáp án đúng:** **A. Only collect data that is strictly necessary** và **B. Only keep data for as long as it is needed**  
**Thuộc kiến thức:** *Data Minimization Core Tenets (Các yếu tố cốt lõi của tối thiểu hóa dữ liệu)*  
**Giải thích:**  
Nguyên tắc tối thiểu hóa dữ liệu bao gồm: Chỉ thu thập dữ liệu thực sự cần thiết (A) và Chỉ lưu trữ dữ liệu trong khoảng thời gian cần dùng (B).

---

### **Câu 47 (Q47.webp)**
**Câu hỏi:**  
Which type of entity are the OECD Principles on Artificial Intelligence mostly geared towards?

**Danh sách đáp án:**  
- A. Individuals  
- B. Municipal governments  
- C. National governments  
- D. Private corporations  

**Đáp án đúng:** **C. National governments**  
**Thuộc kiến thức:** *OECD AI Principles (Khung nguyên tắc AI của OECD)*  
**Giải thích:**  
Các nguyên tắc về Trí tuệ nhân tạo của OECD chủ yếu hướng tới các chính phủ quốc gia (*National governments*) nhằm hướng dẫn ban hành chính sách quản lý và phát triển AI đáng tin cậy.

---

### **Câu 48 (Q48.webp)**
**Câu hỏi:**  
Which of the following describes an ethical framework?

**Danh sách đáp án:**  
- A. Ethical frameworks raise timeless ethical questions that are not easily put into action.  
- B. Ethical frameworks apply meta-ethical theories to everyday business operations.  
- C. Ethical frameworks consolidate regulatory requirements for an industry.  
- D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.  

**Đáp án đúng:** **D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.**  
**Thuộc kiến thức:** *Ethical Frameworks (Khung đạo đức hành động)*  
**Giải thích:**  
Khung đạo đức cung cấp các bước hành động cụ thể và có thể thực thi (*actionable steps*) nhằm giảm thiểu các rủi ro đạo đức trong thực tế.

---

### **Câu 49 (Q49.webp)**
**Câu hỏi:**  
Which organizational resource is most commonly used in terms of fostering an ethical organizational culture?

**Danh sách đáp án:**  
- A. Physical resources  
- B. Informational resources  
- C. Financial resources  
- D. Human resources  

**Đáp án đúng:** **D. Human resources**  
**Thuộc kiến thức:** *Human Resources in Ethics (Nguồn nhân lực bồi đắp văn hóa đạo đức)*  
**Giải thích:**  
Nguồn nhân lực (*Human resources*) là nguồn lực quan trọng nhất để đào tạo, dẫn dắt và hình thành nên văn hóa đạo đức trong một tổ chức.

---

### **Câu 50 (Q50.webp)**
**Câu hỏi:**  
Which of the following would be the most beneficial stage to hold ethical risk reviews for a new project that your team is undertaking?

**Danh sách đáp án:**  
- A. Development  
- B. Deployment  
- C. Design  
- D. Conception  

**Đáp án đúng:** **D. Conception**  
**Thuộc kiến thức:** *Ethics by Design: Early Review (Đánh giá rủi ro từ giai đoạn hình thành ý tưởng)*  
**Giải thích:**  
Giai đoạn hình thành ý tưởng (*Conception*) là thời điểm mang lại hiệu quả cao nhất để đánh giá rủi ro đạo đức, giúp định hình sản phẩm an toàn ngay từ gốc rễ.

---

### **Câu 51 (Q51.webp)**
**Câu hỏi:**  
How can the human resources department help build an ethical organizational culture?

**Danh sách đáp án:**  
- A. Hiring candidates based on their technical skills.  
- B. Hiring candidates based on their culture fit.  
- C. Hiring candidates based on their leadership skills.  
- D. Hiring candidates based on their soft skills.  

**Đáp án đúng:** **B. Hiring candidates based on their culture fit.**  
**Thuộc kiến thức:** *HR Practices for Ethical Culture (Tuyển dụng tương thích văn hóa)*  
**Giải thích:**  
Bộ phận nhân sự xây dựng văn hóa đạo đức thông qua việc tuyển dụng những ứng viên có sự tương thích cao với chuẩn mực và văn hóa đạo đức của công ty (*culture fit*).

---

### **Câu 52 (Q52.webp)**
**Câu hỏi:**  
Is an open door policy equivalent to ensuring employee voice?

**Danh sách đáp án:**  
- A. No, because an open door policy is the opposite of employee voice.  
- B. Yes, because both allow employees to speak up.  
- C. Yes, because an open door policy is essential for employee voice.  
- D. No, because an open door policy does not ensure employees feel heard.  

**Đáp án đúng:** **D. No, because an open door policy does not ensure employees feel heard.**  
**Thuộc kiến thức:** *Employee Voice vs Open Door Policy (Chính sách mở cửa không đồng nghĩa với tiếng nói nhân viên)*  
**Giải thích:**  
Chính sách mở cửa chỉ mang tính hình thức thụ động và không đảm bảo rằng nhân viên thực sự cảm thấy tiếng nói của mình được lắng nghe và tôn trọng (*does not ensure employees feel heard*).

---

### **Câu 53 (Q53.webp)**
**Câu hỏi:**  
Which of the following presents the most important argument for why we need to consider the impact of AI on labor in the design, development, and deployment of data-driven technology?

**Danh sách đáp án:**  
- A. There is still a need for human workers in human-in-the-loop mechanisms.  
- B. The organization would like to avoid having to deal with union concerns.  
- C. There may be an impact on worker productivity if they are not included in all phases.  
- D. There might be potential labor rights and human rights violations.  

**Đáp án đúng:** **D. There might be potential labor rights and human rights violations.**  
**Thuộc kiến thức:** *AI & Labor Rights (Tác động của AI đối với quyền lao động và nhân quyền)*  
**Giải thích:**  
Lý do quan trọng nhất là AI có nguy cơ xâm phạm các quyền lao động cơ bản và nhân quyền của người lao động (như quyền riêng tư tại nơi làm việc, bị sa thải không minh bạch).

---

### **Câu 54 (Q54.webp)**
**Câu hỏi:**  
Why is fair competition an important ethical consideration for data-driven technology businesses?

**Danh sách đáp án:**  
- A. Fair competition prevents predatory pricing.  
- B. Fair competition builds user trust in technology as a whole.  
- C. Fair competition provides products choice to users.  
- D. Fair competition provides service choice to users.  

**Đáp án đúng:** **B. Fair competition builds user trust in technology as a whole.**  
**Thuộc kiến thức:** *Fair Competition & Public Trust (Cạnh tranh công bằng và niềm tin công chúng)*  
**Giải thích:**  
Cạnh tranh lành mạnh xây dựng và củng cố niềm tin vững chắc của người dùng vào toàn bộ hệ sinh thái công nghệ (*builds user trust in technology as a whole*).

---

### **Câu 55 (Q55.webp)**
**Câu hỏi:**  
Which of the following is a potential benefit of having an ethical organizational culture?

**Danh sách đáp án:**  
- A. More employees are likely to switch careers.  
- B. Employees will feel a sense of responsibility and loyalty.  
- C. Employees are more likely to listen to their superiors.  
- D. The company will get an increase in stock value.  

**Đáp án đúng:** **B. Employees will feel a sense of responsibility and loyalty.**  
**Thuộc kiến thức:** *Ethical Culture Benefits (Lợi ích của văn hóa đạo đức)*  
**Giải thích:**  
Văn hóa đạo đức tạo ra môi trường làm việc gắn kết, nâng cao ý thức trách nhiệm và lòng trung thành của nhân viên đối với tổ chức (*responsibility and loyalty*).

---

### **Câu 56 (Q56.webp)**
**Câu hỏi:**  
To which of the following groups would a code of ethics not be applicable?

**Danh sách đáp án:**  
- A. Developers of the data-driven technology system  
- B. Designers of the data-driven technology system  
- C. Business managers of the data-driven technology system  
- D. Data subjects of the data-driven technology system  

**Đáp án đúng:** **D. Data subjects of the data-driven technology system**  
**Thuộc kiến thức:** *Code of Ethics Scope (Phạm vi đối tượng của Bộ quy tắc đạo đức)*  
**Giải thích:**  
Bộ quy tắc đạo đức của tổ chức ràng buộc trách nhiệm của đội ngũ nội bộ (kỹ sư, thiết kế, quản lý), không áp dụng để điều chỉnh hành vi của các chủ thể dữ liệu/khách hàng bên ngoài (*Data subjects*).

---

### **Câu 57 (Q57.webp)**
**Câu hỏi:**  
Which of the following is a misuse of intellectual property (IP) when it comes to ethical accountability for an organization?

**Danh sách đáp án:**  
- A. Collecting returns on investments made in research and development.  
- B. Filing a patent for the IP that makes non-obvious information known to the public.  
- C. Enhancing the security posture of a product or service.  
- D. Using IP as a defensive mechanism to eschew transparency requirements.  

**Đáp án đúng:** **D. Using IP as a defensive mechanism to eschew transparency requirements.**  
**Thuộc kiến thức:** *IP Misuse & Algorithmic Accountability (Lạm dụng sở hữu trí tuệ trốn tránh minh bạch)*  
**Giải thích:**  
Lấy lý do bảo vệ sở hữu trí tuệ làm lá chắn để trốn tránh trách nhiệm giải trình và yêu cầu minh bạch thuật toán là hành vi lạm dụng IP thiếu đạo đức.

---

### **Câu 58 (Q58.webp)**
**Câu hỏi:**  
Which of the following is a notable aspect of the Personal Information Protection and Electronic Documents Act (PIPEDA) when compared to similar laws and regulations?

**Danh sách đáp án:**  
- A. Its exclusive focus on a single domain rather than a breadth of domains  
- B. The early date of its inauguration  
- C. Its nationwide scope and specific national focus  
- D. A stipulation to continue providing service even if data usage is denied  

**Đáp án đúng:** **D. A stipulation to continue providing service even if data usage is denied**  
**Thuộc kiến thức:** *Privacy Law: PIPEDA (Luật PIPEDA Canada)*  
**Giải thích:**  
Điểm đặc thù của PIPEDA là quy định cấm doanh nghiệp từ chối cung cấp dịch vụ chỉ vì người dùng từ chối cấp quyền thu thập dữ liệu không thiết yếu.

---

### **Câu 59 (Q59.webp)**
**Câu hỏi:**  
Why is the question of robot rights and emancipation one that isn't as important as addressing issues of bias, privacy, transparency, and other principles discussed in the various ethical frameworks?

**Danh sách đáp án:**  
- A. These rights necessitate that robots become sentient entities, which is currently not feasible.  
- B. Humans are anthropocentric and don't want to extend rights to other sentient entities.  
- C. There is no legal precedent for granting rights to entities that are not humans.  
- D. Robots are mechanical instruments and therefore don't deserve to have rights.  

**Đáp án đúng:** **A. These rights necessitate that robots become sentient entities, which is currently not feasible.**  
**Thuộc kiến thức:** *AI & Robot Rights Feasibility (Tính khả thi của vấn đề quyền Robot)*  
**Giải thích:**  
Vấn đề quyền của robot đòi hỏi robot phải có tri giác/ý thức (*sentient entities*), điều bất khả thi ở hiện tại; trong khi các rủi ro thiên vị, quyền riêng tư và minh bạch là những vấn đề cấp bách đang diễn ra hàng ngày.

---

### **Câu 60 (Q60.webp)**
**Câu hỏi:**  
What is the function of a red team in a penetration testing exercise?

**Danh sách đáp án:**  
- A. To conduct the simulated attacks.  
- B. To defend against the simulated attacks.  
- C. To officiate the simulated attacks.  
- D. To disable the attacks.  

**Đáp án đúng:** **A. To conduct the simulated attacks.**  
**Thuộc kiến thức:** *Cybersecurity: Red Team Function (Chức năng của Red Team)*  
**Giải thích:**  
Trong diễn tập an ninh mạng, *Red team* có chức năng thực hiện các cuộc tấn công mô phỏng (*conduct the simulated attacks*) để kiểm tra khả năng phòng thủ của hệ thống.
