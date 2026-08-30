# ĐỀ THI TRẮC NGHIỆM: ITE302c - SU24 - FE
**Môn học:** Ethics in IT / AI Ethics (ITE302c)  
**Nguồn:** `ITE302c - SU 2024 - FE` (Tổng cộng: 60 câu)  
**Format:** Câu hỏi – Danh sách đáp án – Đáp án đúng – Giải thích & Kiến thức liên quan

---

### **Câu 1 (ITE302c_-_SU_2024_-_FE_2529.webp)**
**Câu hỏi:**  
You're training a model to classify whether or not a bridge is likely to collapse given several factors. You have a dataset of thousands of existing bridges and their attributes, where each bridge is labeled as having collapsed or not collapsed. Only a handful of bridges in the dataset are labeled as having collapsed–the rest are labeled as not collapsed. Given your goal of minimizing bridge collapse and the severe harm it can cause, which of the following metrics would be most useful for evaluating the model?

**Danh sách đáp án:**  
- A. Accuracy  
- B. Confusion matrix  
- C. Precision  
- D. Recall  

**Đáp án đúng:** **D. Recall**  
**Thuộc kiến thức:** *Model Evaluation Metrics & Imbalanced Datasets (Độ đo đánh giá mô hình với dữ liệu mất cân bằng)*  
**Giải thích:**  
Khi mục tiêu tối thượng là ngăn chặn thảm họa sập cầu (hậu quả của việc bỏ sót cầu sập là cực kỳ nghiêm trọng – False Negative), ta cần tối đa hóa tỷ lệ phát hiện đúng các ca nguy cơ sập. Chỉ số **Recall** (Sensitivity / True Positive Rate = $TP / (TP + FN)$) đo lường khả năng bắt trọn tất cả các ca nguy cơ mà không bỏ sót.

---

### **Câu 2 (ITE302c_-_SU_2024_-_FE_2529 (1).webp)**
**Câu hỏi:**  
The Strava dataset example illustrates that while differential privacy can protect individuals, it can still harm ________.

**Danh sách đáp án:**  
- A. Researchers  
- B. those outside the dataset  
- C. certain individuals  
- D. groups  

**Đáp án đúng:** **D. groups**  
**Thuộc kiến thức:** *Differential Privacy Limitations & Group Privacy (Giới hạn bảo mật vi sai và quyền riêng tư nhóm)*  
**Giải thích:**  
Vụ việc dữ liệu bản đồ nhiệt tập luyện của Strava (Strava heat map) cho thấy Differential Privacy bảo vệ danh tính của từng cá nhân (*individuals*), nhưng dữ liệu tổng hợp ở cấp độ nhóm (*groups*) vẫn có thể vô tình tiết lộ vị trí các căn cứ quân sự bí mật hoặc thói quen tuần tra của một tập thể lính.

---

### **Câu 3 (ITE302c_-_SU_2024_-_FE_2529 (2).webp)**
**Câu hỏi:**  
Which of the following are important steps to document during an auditing process? (Select two.)

**Danh sách đáp án:**  
- A. Provide significant advance notice before an audit.  
- B. Specify and document what precisely is being audited.  
- C. Specify a purpose for the audit or an agenda to be covered.  
- D. Document the audit procedures to be followed.  

**Đáp án đúng:** **B. Specify and document what precisely is being audited.** và **D. Document the audit procedures to be followed.**  
*(Ghi chú: Trong quy trình kiểm toán chuẩn, phạm vi kiểm toán chính xác - scope/target và quy trình thực hiện - procedures là 2 yếu tố bắt buộc phải lập tài liệu).*  
**Thuộc kiến thức:** *Algorithmic Auditing & Governance Process (Lập hồ sơ và tài liệu trong quy trình kiểm toán thuật toán)*  
**Giải thích:**  
Trong quy trình kiểm toán hệ thống/thuật toán (*audit process*), việc xác định và lập tài liệu rõ ràng về đối tượng chính xác được kiểm toán (*what precisely is being audited*) và quy trình/thủ tục kiểm toán được áp dụng (*audit procedures to be followed*) là 2 bước quan trọng cốt lõi.

---

### **Câu 4 (ITE302c_-_SU_2024_-_FE_2529 (3).webp)**
**Câu hỏi:**  
________ algorithms are a challenge to explainable AI, as their complexity makes it difficult to weigh attribute importance.

**Danh sách đáp án:**  
- A. ethical  
- B. deep learning  
- C. explainable  
- D. malicious  

**Đáp án đúng:** **B. deep learning**  
**Thuộc kiến thức:** *Explainable AI (XAI) & Deep Learning Complexity (AI giải thích được và sự phức tạp của Học sâu)*  
**Giải thích:**  
Các thuật toán Học sâu (*Deep Learning*) gồm hàng triệu tham số và cấu trúc nhiều tầng phi tuyến tính (hộp đen - *black box*), khiến việc giải thích và xác định trọng số ảnh hưởng của từng thuộc tính (*attribute importance*) trở nên vô cùng thách thức đối với lĩnh vực Explainable AI.

---

### **Câu 5 (ITE302c_-_SU_2024_-_FE_2529 (4).webp)**
**Câu hỏi:**  
Which of the following are fundamental risk management tasks? (Select two.)

**Danh sách đáp án:**  
- A. Mitigation  
- B. Authentication  
- C. Compliance  
- D. Identification  

**Đáp án đúng:** **A. Mitigation** và **D. Identification**  
**Thuộc kiến thức:** *Risk Management Framework (Quản lý rủi ro: Nhận diện và Giảm thiểu rủi ro)*  
**Giải thích:**  
Chu trình quản lý rủi ro cơ bản (*Risk Management Lifecycle*) bao gồm: Nhận diện rủi ro (*Risk Identification*), Đánh giá rủi ro (*Risk Assessment*), và Giảm thiểu rủi ro (*Risk Mitigation*).

---

### **Câu 6 (ITE302c_-_SU_2024_-_FE_2529 (5).webp)**
**Câu hỏi:**  
Which of the following are likely to be found within a penetration test rules of engagement (ROE)? (Select two.)

**Danh sách đáp án:**  
- A. What systems may be targeted  
- B. How long CCTV camera recordings should be maintained  
- C. The appropriate length and complexity of employee passwords  
- D. What methods of attack are legitimate  

**Đáp án đúng:** **A. What systems may be targeted** và **D. What methods of attack are legitimate**  
**Thuộc kiến thức:** *Penetration Testing Rules of Engagement (Quy tắc giao kết kiểm thử thâm nhập)*  
**Giải thích:**  
Quy tắc tham gia kiểm thử thâm nhập (Rules of Engagement - ROE) xác định phạm vi hệ thống mục tiêu được phép tấn công (*What systems may be targeted*) và các phương thức/công cụ tấn công hợp lệ được chấp thuận (*What methods of attack are legitimate*), tránh gây gián đoạn ngoài ý muốn.

---

### **Câu 7 (ITE302c_-_SU_2024_-_FE_2529 (6).webp)**
**Câu hỏi:**  
An attacker fools an AI-based anti-spam system into thinking the attacker's email messages are benign. This enables the attacker's emails to reach their destination(s) without being blocked. What type of adversarial machine learning is this?

**Danh sách đáp án:**  
- A. Spoofing  
- B. Poisoning  
- C. Evasion  
- D. Reasoning  

**Đáp án đúng:** **C. Evasion**  
**Thuộc kiến thức:** *Adversarial Machine Learning: Evasion Attack (Tấn công né tránh)*  
**Giải thích:**  
Tấn công né tránh (*Evasion attack*) xảy ra ở giai đoạn suy luận (inference time), trong đó kẻ tấn công tinh chỉnh đầu vào (ví dụ chèn từ ngữ đánh lừa bộ lọc spam) để khiến mô hình phân loại sai mà không cần can thiệp vào dữ liệu huấn luyện (khác với *Poisoning* là đầu độc dữ liệu train).

---

### **Câu 8 (ITE302c_-_SU_2024_-_FE_2529 (7).webp)**
**Câu hỏi:**  
Which of the following describes extrajudicial judgment?

**Danh sách đáp án:**  
- A. A ruling or scoring made outside of a court.  
- B. Transferring defendants from one jurisdiction to another for trial.  
- C. Applying law from one jurisdiction within another.  
- D. Unusual interpretation of law outside of its typical meaning.  

**Đáp án đúng:** **A. A ruling or scoring made outside of a court.**  
**Thuộc kiến thức:** *Legal & Ethical Concepts: Extrajudicial Judgment (Phán quyết/chấm điểm ngoài khuôn khổ tòa án)*  
**Giải thích:**  
*Extrajudicial judgment* (phán quyết/đánh giá phi tư pháp) là các phán quyết, tính điểm rủi ro hoặc hình phạt được đưa ra bởi các hệ thống tự động hoặc tổ chức bên ngoài hệ thống tòa án chính thức (*outside of a court*), ví dụ như các hệ thống chấm điểm tín dụng xã hội hoặc đánh giá tái phạm tự động.

---

### **Câu 9 (ITE302c_-_SU_2024_-_FE_2529 (8).webp)**
**Câu hỏi:**  
Which of the following are objectives of a forensic analysis? (select two.)

**Danh sách đáp án:**  
- A. To inform stakeholders that an incident has occurred.  
- B. To determine what occurred in an incident.  
- C. To identify who or what is responsible for an incident.  
- D. To mitigate the effects of an incident.  

**Đáp án đúng:** **B. To determine what occurred in an incident.** và **C. To identify who or what is responsible for an incident.**  
**Thuộc kiến thức:** *Digital Forensics & Incident Response (Mục tiêu của phân tích điều tra số số)*  
**Giải thích:**  
Mục tiêu cốt lõi của điều tra số (*Forensic analysis*) là thu thập chứng cứ để xác định chuyện gì đã xảy ra (*determine what occurred*) và đối tượng/yếu tố nào chịu trách nhiệm cho sự cố (*identify who or what is responsible*).

---

### **Câu 10 (ITE302c_-_SU_2024_-_FE_2529 (9).webp)**
**Câu hỏi:**  
Why is it important to include stakeholders from diverse areas of business when identifying risk?

**Danh sách đáp án:**  
- A. It is a legal requirement in many jurisdictions.  
- B. It includes more perspectives, which can lead to better risk identification.  
- C. It give you an opportunity to identify people as risk.  
- D. It give you an opportunity to identify technology as risk.  

**Đáp án đúng:** **B. It includes more perspectives, which can lead to better risk identification.**  
**Thuộc kiến thức:** *Diverse Stakeholder Engagement in Risk Management (Thu hút các bên liên quan đa dạng)*  
**Giải thích:**  
Việc quy tụ nhiều bên liên quan từ các phòng ban/lĩnh vực kinh doanh khác nhau mang lại nhiều góc nhìn đa chiều (*more perspectives*), giúp phát hiện ra các rủi ro tiềm ẩn mà một nhóm chuyên môn đơn lẻ có thể bỏ sót.

---

### **Câu 11 (ITE302c_-_SU_2024_-_FE_2529 (10).webp)**
**Câu hỏi:**  
Which of the following types of malware monitors a user's behavior without their knowledge or permission?

**Danh sách đáp án:**  
- A. Virus  
- B. Spyware  
- C. Ransomware  
- D. Trojan horse  

**Đáp án đúng:** **B. Spyware**  
**Thuộc kiến thức:** *Malware Types & Privacy Infringement (Phần mềm gián điệp)*  
**Giải thích:**  
*Spyware* (phần mềm gián điệp) là loại mã độc được thiết kế chuyên biệt để bí mật theo dõi, thu thập thông tin và hành vi sử dụng thiết bị của người dùng mà không có sự cho phép hay biết trước của họ.

---

### **Câu 12 (ITE302c_-_SU_2024_-_FE_2529 (11).webp)**
**Câu hỏi:**  
Which of the following is a platform that includes hundreds of security exploit tools?

**Danh sách đáp án:**  
- A. Zenmap  
- B. Nmap  
- C. Kali Linux  
- D. Wireshark  

**Đáp án đúng:** **C. Kali Linux**  
**Thuộc kiến thức:** *Security Testing & Penetration Testing Tools (Nền tảng công cụ bảo mật)*  
**Giải thích:**  
*Kali Linux* là bản phân phối hệ điều hành Linux chuyên dụng dành cho kiểm thử thâm nhập và điều tra số, tích hợp sẵn hàng trăm công cụ khai thác và kiểm tra lỗ hổng bảo mật.

---

### **Câu 13 (ITE302c_-_SU_2024_-_FE_2529 (12).webp)**
**Câu hỏi:**  
Which of the following is a technique used by the Python tool Alibi to produce a subset of features that will usually result in the same model prediction?

**Danh sách đáp án:**  
- A. Local Interpretable Model-Agnostic Explanations  
- B. Shapley value  
- C. Anchor Explanations  
- D. Perturbation  

**Đáp án đúng:** **C. Anchor Explanations**  
**Thuộc kiến thức:** *Explainable AI Tools: Alibi & Anchor Explanations (Giải thích dạng mỏ neo)*  
**Giải thích:**  
Kỹ thuật **Anchors (Anchor Explanations)** trong thư viện Alibi tìm ra một tập con các quy tắc/đặc trưng cục bộ ("mỏ neo") mà khi các điều kiện này thỏa mãn, mô hình sẽ luôn đưa ra cùng một kết quả dự đoán với xác suất rất cao bất kể các đặc trưng khác biến đổi ra sao.

---

### **Câu 14 (ITE302c_-_SU_2024_-_FE_2529 (13).webp)**
**Câu hỏi:**  
Which of the following are best practices for incorporating inclusive design in AI projects? (Select two.)

**Danh sách đáp án:**  
- A. Solve for many, extend to one.  
- B. Keep machines and humans separate.  
- C. Consider bias a spectrum.  
- D. Leverage customer input to reduce bias.  

**Đáp án đúng:** **C. Consider bias a spectrum.** và **D. Leverage customer input to reduce bias.**  
**Thuộc kiến thức:** *Inclusive Design in AI (Thiết kế toàn diện và giảm thiểu thiên vị trong AI)*  
**Giải thích:**  
Thực hành tốt nhất trong thiết kế AI hòa nhập (*inclusive design*) gồm nhìn nhận định kiến như một dải liên tục (*bias a spectrum*) và tích cực lắng nghe đóng góp từ cộng đồng người dùng đa dạng (*customer input*) để phát hiện và giảm thiểu các rào cản thiên vị.

---

### **Câu 15 (ITE302c_-_SU_2024_-_FE_2529 (14).webp)**
**Câu hỏi:**  
Which of the following is an explainability risk of self-learning models?

**Danh sách đáp án:**  
- A. Self-learning models can corrupt data or otherwise make it unreadable.  
- B. Self-learning models may introduce new data you're unaware of.  
- C. Self-learning models are black boxes whose decisions cannot be understood.  
- D. Self-learning models are unable to generate decisions as output.  

**Đáp án đúng:** **C. Self-learning models are black boxes whose decisions cannot be understood.**  
**Thuộc kiến thức:** *Explainability & Black Box Risks in Machine Learning (Rủi ro tính giải thích của mô hình tự học)*  
**Giải thích:**  
Rủi ro lớn nhất về mặt tính minh bạch/giải thích của các mô hình tự học phức tạp là tính chất "hộp đen" (*black boxes*), trong đó logic đưa ra quyết định nội tại không thể được con người hiểu hoặc truy xuất một cách trực tiếp.

---

### **Câu 16 (ITE302c_-_SU_2024_-_FE_2529 (15).webp)**
**Câu hỏi:**  
Which of the following are useful strategies for communicating ethical risks to the organization? (Select two.)

**Danh sách đáp án:**  
- A. Communicate information through a single voice  
- B. Disseminate information in multiple formats  
- C. Communicate information in real time  
- D. Provide information only when solicited  

**Đáp án đúng:** **A. Communicate information through a single voice** và **B. Disseminate information in multiple formats**  
**Thuộc kiến thức:** *Ethical Risk Communication Strategies (Chiến lược truyền thông rủi ro đạo đức)*  
**Giải thích:**  
Để truyền thông rủi ro đạo đức hiệu quả trong và ngoài tổ chức, cần duy trì thông điệp nhất quán thông qua một đầu mối/tiếng nói đại diện thống nhất (*single voice*) và đa dạng hóa hình thức/kênh truyền tải (*multiple formats*) để tiếp cận mọi đối tượng.

---

### **Câu 17 (ITE302c_-_SU_2024_-_FE_2529 (16).webp)**
**Câu hỏi:**  
Why is it important to maintain public trust?

**Danh sách đáp án:**  
- A. Trust, once lost, is difficult to regain.  
- B. Trust is required to avoid legal pitfalls.  
- C. Trust can be used against the organization.  
- D. Trust is the new trend of organization.  

**Đáp án đúng:** **A. Trust, once lost, is difficult to regain.**  
**Thuộc kiến thức:** *Public Trust & Corporate Reputation (Tầm quan trọng của niềm tin công chúng)*  
**Giải thích:**  
Niềm tin của công chúng (*public trust*) là tài sản vô hình quý giá nhất; một khi đã bị đánh mất do các bê bối đạo đức hoặc sự cố dữ liệu, tổ chức sẽ cực kỳ khó khăn và tốn kém để khôi phục lại (*difficult to regain*).

---

### **Câu 18 (ITE302c_-_SU_2024_-_FE_2529 (17).webp)**
**Câu hỏi:**  
What shared principle from ethical frameworks in intellectual property often at odds with?

**Danh sách đáp án:**  
- A. privacy  
- B. Safety  
- C. Security  
- D. Transparency/explainability  

**Đáp án đúng:** **D. Transparency/explainability**  
**Thuộc kiến thức:** *Ethics vs Intellectual Property Conflicts (Mâu thuẫn giữa Sở hữu trí tuệ và Tính minh bạch)*  
**Giải thích:**  
Bảo hộ sở hữu trí tuệ (bí mật thương mại, bằng sáng chế thuật toán độc quyền) thường mâu thuẫn trực tiếp với nguyên tắc Đạo đức AI về **Tính minh bạch và giải thích được** (*Transparency / Explainability*), do các công ty không muốn công khai mã nguồn hoặc trọng số mô hình.

---

### **Câu 19 (ITE302c_-_SU_2024_-_FE_2529 (18).webp)**
**Câu hỏi:**  
Which of the following are important to provide to a crisis communication team? (Select two.)

**Danh sách đáp án:**  
- A. Clear direction on the roles and responsibilities of team members  
- B. Permission to tell the public what they want to hear  
- C. The ability to work independently of the crisis management team  
- D. Access to adequate resources  

**Đáp án đúng:** **A. Clear direction on the roles and responsibilities of team members** và **D. Access to adequate resources**  
**Thuộc kiến thức:** *Crisis Communication Team Management (Quản lý đội ngũ truyền thông khủng hoảng)*  
**Giải thích:**  
Đội ngũ truyền thông khủng hoảng cần được phân công rõ ràng vai trò và trách nhiệm (*roles and responsibilities*) đồng thời được cấp quyền tiếp cận đầy đủ các nguồn lực/công cụ (*adequate resources*) để xử lý thông tin kịp thời.

---

### **Câu 20 (ITE302c_-_SU_2024_-_FE_2529 (19).webp)**
**Câu hỏi:**  
What is the benefit of hosting a virtual reality press conference over a traditional in-person press conference?

**Danh sách đáp án:**  
- A. It will be easier to communicate your overall message to your audience.  
- B. The conference will be easily accessible to all willing participants.  
- C. The conference can be interactive without the participants needing to be co-located.  
- D. The participants will be impressed by your leveraging of new and exciting technologies.  

**Đáp án đúng:** **C. The conference can be interactive without the participants needing to be co-located.**  
**Thuộc kiến thức:** *Emerging Technologies in Communication: VR Press Conferences (Họp báo thực tế ảo)*  
**Giải thích:**  
Lợi ích cốt lõi của việc tổ chức họp báo qua thực tế ảo (VR) là tạo ra môi trường tương tác sống động, trực quan mà người tham gia không cần phải có mặt tại cùng một địa điểm vật lý (*without needing to be co-located*).

---

### **Câu 21 (ITE302c_-_SU_2024_-_FE_2529 (20).webp)**
**Câu hỏi:**  
How can sentiment analysis be useful in social media communication?

**Danh sách đáp án:**  
- A. It can shape the content and delivery of the message based on users' perceptions of the organization or technology.  
- B. It can classify customers as loyal or disloyal, helping you target customers differently in your communications.  
- C. It can determine which users have the largest influence on your reputation, and therefore which users you should communicate with.  
- D. It can determine how to construct a message that influences users to be more positive about the organization or technology.  

**Đáp án đúng:** **A. It can shape the content and delivery of the message based on users' perceptions of the organization or technology.**  
**Thuộc kiến thức:** *Sentiment Analysis in Stakeholder Communication (Phân tích cảm xúc mạng xã hội)*  
**Giải thích:**  
Phân tích cảm xúc (*sentiment analysis*) giúp tổ chức thấu hiểu phản ứng và nhận thức thực tế của công chúng, từ đó định hình nội dung và cách thức truyền đạt thông điệp cho phù hợp và kịp thời.

---

### **Câu 22 (ITE302c_-_SU_2024_-_FE_2529 (21).webp)**
**Câu hỏi:**  
What is the purpose of a holding statement in crisis and media communications?

**Danh sách đáp án:**  
- A. To order the business to temporarily halt certain operations  
- B. To retain the services of specific media outlets  
- C. To pre-write communications before they are needed  
- D. To prevent personnel from communicating prematurely  

**Đáp án đúng:** **D. To prevent personnel from communicating prematurely**  
*(Ghi chú: Holding statement được phát ra ngay lập tức để thừa nhận sự cố, kiểm soát phát ngôn nội bộ/bên ngoài và câu giờ cho đến khi có đầy đủ sự thật).*  
**Thuộc kiến thức:** *Crisis Communication: Holding Statement (Tuyên bố tạm thời)*  
**Giải thích:**  
Tuyên bố tạm thời (*holding statement*) nhằm thông báo rằng tổ chức đã nắm được sự cố và đang điều tra, đồng thời định hướng phát ngôn tập trung, ngăn chặn việc nhân viên đưa ra các tuyên bố chưa được kiểm chứng (*prevent premature communication*).

---

### **Câu 23 (ITE302c_-_SU_2024_-_FE_2529 (22).webp)**
**Câu hỏi:**  
Which of the following are effective strategies when making statements on social media? (Select two.)

**Danh sách đáp án:**  
- A. Being honest and up front  
- B. Communicating only as needed  
- C. Presenting a face of the organization  
- D. Focusing on positive feedback  

**Đáp án đúng:** **A. Being honest and up front** và **C. Presenting a face of the organization**  
**Thuộc kiến thức:** *Social Media Communication Strategies (Chiến lược phát ngôn trên mạng xã hội)*  
**Giải thích:**  
Khi phát ngôn trên mạng xã hội, tính minh bạch, thẳng thắn trung thực (*honest and upfront*) kết hợp với việc tạo dựng diện mạo/đại diện con người nhân văn cho tổ chức (*presenting a human face of the organization*) là hai chiến lược tạo dựng lòng tin hiệu quả nhất.

---

### **Câu 24 (ITE302c_-_SU_2024_-_FE_2529 (23).webp)**
**Câu hỏi:**  
Which of the following is a best practice for incorporating diversity, equity, and inclusiveness in communication?

**Danh sách đáp án:**  
- A. Promote an organizational culture that embraces these values  
- B. Ensure multiple groups of people based on race, gender, etc., are communicating in different ways  
- C. Focus on the organization's intended message rather than incorporating feedback from external stakeholders  
- D. Reassure customers that the organization is diverse, equitable, and inclusive  

**Đáp án đúng:** **A. Promote an organizational culture that embraces these values**  
**Thuộc kiến thức:** *Diversity, Equity, and Inclusion (DEI) in Communication (Thúc đẩy văn hóa DEI)*  
**Giải thích:**  
Thực hành tốt nhất để đưa các giá trị Đa dạng, Công bằng và Hòa nhập (DEI) vào truyền thông là xây dựng và nuôi dưỡng một văn hóa tổ chức thực sự thấm nhuần và tôn trọng các giá trị này từ bên trong.

---

### **Câu 25 (ITE302c_-_SU_2024_-_FE_2529 (24).webp)**
**Câu hỏi:**  
How does the low likelihood of a crisis relate to its potential impact?

**Danh sách đáp án:**  
- A. A crisis with low likelihood tends to have moderate impact.  
- B. A crisis with low likelihood tends to have high impact.  
- C. A crisis with low likelihood tends to have little to no effect on its impact.  
- D. A crisis with low likelihood tends to have low impact.  

**Đáp án đúng:** **B. A crisis with low likelihood tends to have high impact.**  
**Thuộc kiến thức:** *Risk Matrix & Crisis Characteristics (Hiện tượng rủi ro xác suất thấp - tác động nghiêm trọng / Black Swan)*  
**Giải thích:**  
Trong quản trị khủng hoảng, các cuộc khủng hoảng thực sự nguy hiểm thường thuộc dạng "xác suất xảy ra thấp nhưng nếu xảy ra sẽ mang lại tác động tàn phá cực kỳ lớn" (*low likelihood, high impact*).

---

### **Câu 26 (ITE302c_-_SU_2024_-_FE_2529 (25).webp)**
**Câu hỏi:**  
What is one possible reason a model may predict a higher crime rate based on datasets used?

**Danh sách đáp án:**  
- A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets  
- B. If crime is down in an area, a model may predict a parabolic curve which estimates crime is due to rise again  
- C. The model's training curve was not provided enough data  
- D. If a dataset isn't properly formatted, crime may be linked to the error function, outputting false data  

**Đáp án đúng:** **A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets**  
**Thuộc kiến thức:** *Predictive Policing Bias & Historical Proxy Bias (Định kiến lịch sử trong dự đoán tội phạm)*  
**Giải thích:**  
Dữ liệu bắt giữ lịch sử (*arrest data*) phản ánh mức độ tập trung tuần tra của cảnh sát hơn là tỉ lệ phạm tội thực tế. Nếu khu vực nào có số ca bắt giữ cao trong quá khứ, mô hình máy học sẽ học sự tương quan này và liên tục dự đoán khu vực đó có tội phạm cao hơn (vòng lặp thiên vị - feedback loop).

---

### **Câu 27 (ITE302c_-_SU_2024_-_FE_2529 (26).webp)**
**Câu hỏi:**  
When building a predictive model, what is the goal of the develop phase?

**Danh sách đáp án:**  
- A. To plug in 40% of your dataset, testing the model's accuracy  
- B. To get the model's error function below an acceptable percentage  
- C. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted  
- D. To get the model to accept new inputs, train, and repeat training until it finds a better curve  

**Đáp án đúng:** **D. To get the model to accept new inputs, train, and repeat training until it finds a better curve**  
**Thuộc kiến thức:** *Machine Learning Model Development Lifecycle (Giai đoạn phát triển mô hình)*  
**Giải thích:**  
Trong giai đoạn phát triển (*development phase*), mục tiêu chính là nạp dữ liệu, huấn luyện lặp đi lặp lại (*train and repeat training*) để mô hình tối ưu hóa hàm mất mát và tìm ra đường cong/mô hình dự đoán tốt nhất (*find a better curve*).

---

### **Câu 28 (ITE302c_-_SU_2024_-_FE_2529 (27).webp)**
**Câu hỏi:**  
Our goals for building an ethical predictive model include making sure the results are

**Danh sách đáp án:**  
- A. precise, explainable, predictable  
- B. accurate, precise, fair  
- C. precise, methodical, ethical  
- D. accurate, fair and explainable  

**Đáp án đúng:** **D. accurate, fair and explainable**  
**Thuộc kiến thức:** *Ethical AI Core Pillars (Các trụ cột của mô hình dự đoán có đạo đức)*  
**Giải thích:**  
Một mô hình dự đoán đạt chuẩn đạo đức phải đảm bảo được 3 tiêu chí cốt lõi: Độ chính xác (*accurate*), Tính công bằng không phân biệt đối xử (*fair*), và Khả năng giải thích minh bạch (*explainable*).

---

### **Câu 29 (ITE302c_-_SU_2024_-_FE_2529 (28).webp)**
**Câu hỏi:**  
Which of the following is an example of applied ethics?

**Danh sách đáp án:**  
- A. Pluralism  
- B. Professional ethics  
- C. Moral relativism  
- D. Virtue ethics  

**Đáp án đúng:** **B. Professional ethics**  
**Thuộc kiến thức:** *Applied Ethics vs Normative Ethics (Đạo đức ứng dụng: Đạo đức nghề nghiệp)*  
**Giải thích:**  
*Applied ethics* (đạo đức ứng dụng) là việc áp dụng các nguyên lý triết học đạo đức vào các tình huống, ngành nghề thực tế cụ thể. **Professional ethics** (đạo đức nghề nghiệp - như đạo đức kỹ sư, y tế, báo chí) là ví dụ điển hình của đạo đức ứng dụng.

---

### **Câu 30 (ITE302c_-_SU_2024_-_FE_2529 (29).webp)**
**Câu hỏi:**  
What is a likely outcome for a weather app using a learning algorithm to figure out where to put their future weather stations?

**Danh sách đáp án:**  
- A. Accessing weather forecasts from local broadcasts  
- B. Storing data in an AWS instance with all weather stations in the country  
- C. Collecting weather data every time the app is opened, knowing the temperature where the app is being used  
- D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.  

**Đáp án đúng:** **D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.**  
**Thuộc kiến thức:** *Data Harvesting & Surveillance Privacy Risk (Thu thập dữ liệu định vị và quyền riêng tư)*  
**Giải thích:**  
Khi ứng dụng thời tiết thu thập liên tục vị trí GPS mỗi khi người dùng mở app, thuật toán có thể suy luận chính xác địa chỉ nhà, nơi làm việc, lộ trình di chuyển hàng ngày của người dùng, dẫn đến rủi ro xâm phạm quyền riêng tư nghiêm trọng.

---

### **Câu 31 (ITE302c_-_SU_2024_-_FE_2529 (30).webp)**
**Câu hỏi:**  
Which of the following describes the black box problem in AI?

**Danh sách đáp án:**  
- A. It is difficult to understand the nature of data being used to train an AI model.  
- B. It is difficult to understand how or why an AI system made a particular decision.  
- C. It is difficult to understand the results that come from an AI system.  
- D. It is difficult to understand the reports that generate by an AI system.  

**Đáp án đúng:** **B. It is difficult to understand how or why an AI system made a particular decision.**  
**Thuộc kiến thức:** *The Black Box Problem in Machine Learning (Vấn đề hộp đen trong AI)*  
**Giải thích:**  
Vấn đề "hộp đen" (*black box problem*) mô tả tình trạng con người không thể hiểu hoặc lý giải được cơ chế nội tại và lý do tại sao hệ thống AI lại đưa ra một quyết định cụ thể nào đó.

---

### **Câu 32 (ITE302c_-_SU_2024_-_FE_2529 (31).webp)**
**Câu hỏi:**  
How can a visual contract be easier to understand than a written contract?

**Danh sách đáp án:**  
- A. The use of pictures is more accessible to all people, whereas a written contract may be difficult for someone with a reading disability to understand.  
- B. The use of pictures explains the contract in greater detail than a written contract, making it easier for anyone to understand the particulars.  
- C. The use of pictures with simple text makes it easier for the layperson to understand the details of a contract.  
- D. The use of pictures without any text makes it easier for most people to comprehend the details of a contract.  

**Đáp án đúng:** **C. The use of pictures with simple text makes it easier for the layperson to understand the details of a contract.**  
**Thuộc kiến thức:** *Visual Contracts & Legal Design (Hợp đồng trực quan bằng hình ảnh)*  
**Giải thích:**  
Hợp đồng trực quan kết hợp hình ảnh minh họa với các đoạn văn bản ngắn gọn, đơn giản giúp người bình thường không am hiểu luật (*layperson*) dễ dàng nắm bắt được các điều khoản và quyền lợi của mình hơn là các văn bản pháp lý dày đặc chữ.

---

### **Câu 33 (ITE302c_-_SU_2024_-_FE_2529 (32).webp)**
**Câu hỏi:**  
Your organization has developed an AI system that recommends treatments for hospital patients. Some questions have been raised about the ethics of how these treatments are determined. What applied ethics domain do these concerns fall under?

**Danh sách đáp án:**  
- A. Bioethics  
- B. Engineering ethics  
- C. Business ethics  
- D. Environmental ethics  

**Đáp án đúng:** **A. Bioethics**  
**Thuộc kiến thức:** *Applied Ethics: Bioethics in Healthcare AI (Đạo đức sinh học trong AI y tế)*  
**Giải thích:**  
Các vấn đề đạo đức liên quan đến sức khỏe, phác đồ điều trị cho bệnh nhân và y tế thuộc phạm trù **Đạo đức sinh học** (*Bioethics*).

---

### **Câu 34 (ITE302c_-_SU_2024_-_FE_2529 (33).webp)**
**Câu hỏi:**  
Which of the following is a type of technology contract that establishes the goals of both parties and describes how those goals will be achieved?

**Danh sách đáp án:**  
- A. Software as a Service (SaaS)  
- B. Terms of Service (ToS)  
- C. End-user license agreement (EULA)  
- D. Service-level agreement (SLA)  

**Đáp án đúng:** **D. Service-level agreement (SLA)**  
**Thuộc kiến thức:** *Technology Contracts & SLAs (Thỏa thuận mức dịch vụ)*  
**Giải thích:**  
**Service-Level Agreement (SLA)** là cam kết/hợp đồng chính thức giữa nhà cung cấp dịch vụ công nghệ và khách hàng, định lượng các mục tiêu (uptime, tốc độ phản hồi, hiệu năng) và cách thức bảo đảm đạt được các mục tiêu đó.

---

### **Câu 35 (ITE302c_-_SU_2024_-_FE_2529 (34).webp)**
**Câu hỏi:**  
Which of the following is a negative consequence of a predictive model used in real life?

**Danh sách đáp án:**  
- A. A model used by a lab wrongly predicts a person will not be able to pay their credit card  
- B. A model used by a lab indicates a person is in danger  
- C. A model used by a bank wrongly predicts a person will not be able to pay off a loan  
- D. A model used by a bank accurately predicts a person will not be able to pay off a loan  

**Đáp án đúng:** **C. A model used by a bank wrongly predicts a person will not be able to pay off a loan**  
**Thuộc kiến thức:** *Negative Impacts of False Negatives/Positives in FinTech AI (Tác động tiêu cực của dự đoán sai)*  
**Giải thích:**  
Khi mô hình chấm điểm tín dụng của ngân hàng dự đoán sai rằng một người không có khả năng trả nợ (False Positive đối với nguy cơ vỡ nợ / từ chối oan), người đó sẽ bị tước đoạt cơ hội vay vốn hợp pháp và mua nhà, gây thiệt hại nghiêm trọng đến đời sống kinh tế của họ.

---

### **Câu 36 (ITE302c_-_SU_2024_-_FE_2529 (35).webp)**
**Câu hỏi:**  
Which of the following describes an opt-out policy in regards to the collection of private data?

**Danh sách đáp án:**  
- A. Data about that user isn't collected until that user explicitly states you are allowed to.  
- B. Data about the user is always collected, regardless of the user's consent.  
- C. Data about the user is automatically collected unless that user explicitly states that you should not do so.  
- D. Data about the user is never collected, regardless of the user's consent.  

**Đáp án đúng:** **C. Data about the user is automatically collected unless that user explicitly states that you should not do so.**  
**Thuộc kiến thức:** *Privacy Consent Models: Opt-In vs Opt-Out (Cơ chế đồng ý thu thập dữ liệu Opt-out)*  
**Giải thích:**  
Chính sách **Opt-out** mặc định tự động thu thập dữ liệu của người dùng cho đến khi người dùng chủ động thực hiện hành động từ chối/hủy đăng ký (*unless user explicitly states not to*).

---

### **Câu 37 (ITE302c_-_SU_2024_-_FE_2529 (36).webp)**
**Câu hỏi:**  
Pseudocode can best be defined as

**Danh sách đáp án:**  
- A. an explainable description of code that is meant for humans, not computers  
- B. a Python library for machine learning  
- C. a middle ground between code and plain writing that can be fed into a computer  
- D. a type of Javascript that is both human and machine-readable  

**Đáp án đúng:** **A. an explainable description of code that is meant for humans, not computers**  
**Thuộc kiến thức:** *Algorithmic Transparency: Pseudocode (Mã giả trong giải thích thuật toán)*  
**Giải thích:**  
Mã giả (*Pseudocode*) là bản mô tả các bước logic của thuật toán bằng ngôn ngữ tự nhiên kết hợp cấu trúc lập trình nhằm giúp con người đọc và hiểu thuật toán một cách dễ dàng, không nhằm mục đích biên dịch trực tiếp trên máy tính.

---

### **Câu 38 (ITE302c_-_SU_2024_-_FE_2529 (37).webp)**
**Câu hỏi:**  
Which of the following describes dual-use or multipurpose data?

**Danh sách đáp án:**  
- A. Data that can be used in multiple devices or formats, such as a video on a Smart TV, tablet, and computer.  
- B. Data collected for one application that could also be applied to another application in a different domain.  
- C. Data that can be transformed into multiple forms, e.g. extracting audio from a video file.  
- D. Data that can be easily shared with a partner or family member for mutual enjoyment.  

**Đáp án đúng:** **B. Data collected for one application that could also be applied to another application in a different domain.**  
**Thuộc kiến thức:** *Data Ethics: Dual-Use & Multipurpose Data (Dữ liệu đa mục đích / lưỡng dụng)*  
**Giải thích:**  
Dữ liệu đa mục đích (*dual-use / multipurpose data*) là dữ liệu ban đầu được thu thập cho một mục đích hợp pháp cụ thể (như dữ liệu GPS để điều hướng) nhưng sau đó lại bị tái sử dụng vào một ứng dụng hoàn toàn khác (như theo dõi hành vi hoặc quân sự).

---

### **Câu 39 (ITE302c_-_SU_2024_-_FE_2529 (38).webp)**
**Câu hỏi:**  
Unknown Unknowns refer to

**Danh sách đáp án:**  
- A. being unsure about the morals of the research team  
- B. lack of explainability and what a model is actually looking at to make it's prediction  
- C. facing unknown empirical data with an incomplete dataset  
- D. an uncertainty of how the data is gathered  

**Đáp án đúng:** **B. lack of explainability and what a model is actually looking at to make it's prediction**  
**Thuộc kiến thức:** *Johari Window in AI / Epistemic Uncertainty (Hiện tượng Unknown Unknowns trong AI)*  
**Giải thích:**  
"Unknown Unknowns" trong hệ thống AI ám chỉ sự thiếu vắng tính giải thích – các tình huống mà chúng ta thậm chí không biết mô hình đang dựa trên đặc trưng sai lệch/nhiễu nào để đưa ra dự đoán (ví dụ mô hình nhận diện chó sói dựa trên tuyết ở nền ảnh).

---

### **Câu 40 (ITE302c_-_SU_2024_-_FE_2529 (39).webp)**
**Câu hỏi:**  
Which of the following are important ethical elements to safeguard within ethical AI systems? (Select two.)

**Danh sách đáp án:**  
- A. Accountability and management of bias.  
- B. The number of layers, tensors, or parameters used in a model.  
- C. Performance and optimization.  
- D. Transparency and explainability, balanced with privacy.  

**Đáp án đúng:** **A. Accountability and management of bias.** và **D. Transparency and explainability, balanced with privacy.**  
**Thuộc kiến thức:** *Core Pillars of Ethical AI (Các yếu tố đạo đức cần bảo vệ trong AI)*  
**Giải thích:**  
Hai yếu tố đạo đức then chốt cần được bảo đảm trong các hệ thống AI là: (1) Trách nhiệm giải trình và kiểm soát định kiến (*Accountability & bias management*) và (2) Tính minh bạch, giải thích được cân bằng với quyền riêng tư (*Transparency, explainability & privacy*).

---

### **Câu 41 (ITE302c_-_SU_2024_-_FE_2529 (40).webp)**
**Câu hỏi:**  
An unfair model will by nature

**Danh sách đáp án:**  
- A. optimize for making the fewest decisions  
- B. try to balance groups automatically  
- C. optimize for making the most errors  
- D. optimize for making the fewest mistakes  

**Đáp án đúng:** **D. optimize for making the fewest mistakes**  
**Thuộc kiến thức:** *Machine Learning Objective Functions vs Fairness (Bản chất tối ưu hóa lỗi tổng thể của mô hình)*  
**Giải thích:**  
Theo bản chất tự nhiên, các thuật toán máy học tối ưu hóa để giảm thiểu tổng số lỗi sai (*optimize for making the fewest mistakes / minimize overall loss*). Do nhóm đa số chiếm ưu thế trong tập dữ liệu, mô hình sẽ hy sinh độ chính xác của nhóm thiểu số để đạt độ chính xác tổng thể cao nhất, dẫn đến bất công.

---

### **Câu 42 (ITE302c_-_SU_2024_-_FE_2529 (41).webp)**
**Câu hỏi:**  
If we know one group's worthiness score has been artificially inflated, one solution for fairness is to

**Danh sách đáp án:**  
- A. creating separate decision thresholds for each group  
- B. remove that group from the dataset  
- C. balance the error rate by prioritizing the other group  
- D. Add the inflation to the other data  

**Đáp án đúng:** **A. creating separate decision thresholds for each group**  
**Thuộc kiến thức:** *Group-Specific Threshold Optimization (Thiết lập ngưỡng quyết định riêng cho từng nhóm)*  
**Giải thích:**  
Khi điểm đánh giá năng lực của một nhóm bị thổi phồng do định kiến hệ thống, giải pháp công bằng kỹ thuật (Post-processing fairness) là áp dụng các ngưỡng quyết định riêng biệt (*separate decision thresholds*) cho từng nhóm để cân bằng tỷ lệ cơ hội.

---

### **Câu 43 (ITE302c_-_SU_2024_-_FE_2529 (42).webp)**
**Câu hỏi:**  
Which type of entity are the OECD Principles on Artificial Intelligence mostly geared towards?

**Danh sách đáp án:**  
- A. Individuals  
- B. Municipal governments  
- C. National governments  
- D. Private corporations  

**Đáp án đúng:** **C. National governments**  
**Thuộc kiến thức:** *Global AI Governance: OECD AI Principles (Nguyên tắc AI của OECD)*  
**Giải thích:**  
Các nguyên tắc của OECD về Trí tuệ nhân tạo (OECD AI Principles) chủ yếu hướng tới các **Chính phủ quốc gia** (*National governments*) nhằm định hướng xây dựng chính sách, luật pháp và chiến lược phát triển AI quốc gia có trách nhiệm.

---

### **Câu 44 (ITE302c_-_SU_2024_-_FE_2529 (43).webp)**
**Câu hỏi:**  
Dating algorithms become biased mostly through offering users ________

**Danh sách đáp án:**  
- A. collaborative filtering  
- B. access to separate data models  
- C. different ways to match with users  
- D. unlimited matches per day  

**Đáp án đúng:** **A. collaborative filtering**  
**Thuộc kiến thức:** *Algorithmic Bias in Recommendation Systems: Collaborative Filtering (Lọc cộng tác)*  
**Giải thích:**  
Các ứng dụng hẹn hò thường dùng thuật toán Lọc cộng tác (*Collaborative filtering*), thuật toán này khuếch đại sở thích phân biệt chủng tộc/ngoại hình của nhóm số đông, dẫn đến việc gợi ý thiên vị và cô lập người dùng thuộc nhóm thiểu số.

---

### **Câu 45 (ITE302c_-_SU_2024_-_FE_2529 (44).webp)**
**Câu hỏi:**  
Your business handles the personal data of California residents. Which of the following regulations would enable a resident to request that their data be deleted from your company's files?

**Danh sách đáp án:**  
- A. PCI DSS  
- B. OECD Privacy Guidelines  
- C. COPPA  
- D. CCPA  

**Đáp án đúng:** **D. CCPA**  
**Thuộc kiến thức:** *Data Privacy Regulations: CCPA (Đạo luật Quyền riêng tư của Người tiêu dùng California)*  
**Giải thích:**  
**CCPA (California Consumer Privacy Act)** trao cho cư dân bang California quyền được yêu cầu doanh nghiệp xóa toàn bộ dữ liệu cá nhân đã thu thập (*Right to deletion*).

---

### **Câu 46 (ITE302c_-_SU_2024_-_FE_2529 (45).webp)**
**Câu hỏi:**  
Which of the following are important elements of the data minimization principle? (Select two.)

**Danh sách đáp án:**  
- A. Only collect data that is strictly necessary  
- B. Only keep data for as long as it is needed  
- C. Only delete data that can be easily replaced  
- D. Only compress data that needs to be kept as small as possible  

**Đáp án đúng:** **A. Only collect data that is strictly necessary** và **B. Only keep data for as long as it is needed**  
**Thuộc kiến thức:** *Privacy by Design: Data Minimization (Nguyên tắc giảm thiểu dữ liệu)*  
**Giải thích:**  
Nguyên tắc giảm thiểu dữ liệu (*Data Minimization*) quy định doanh nghiệp chỉ được thu thập những dữ liệu thực sự cần thiết cho mục đích cụ thể (*strictly necessary*) và chỉ lưu trữ dữ liệu trong khoảng thời gian cần thiết (*as long as it is needed*).

---

### **Câu 47 (ITE302c_-_SU_2024_-_FE_2529 (46).webp)**
**Câu hỏi:**  
How does the "virtuous cycle" that benefits Big Tech operate?

**Danh sách đáp án:**  
- A. Organizations write algorithms with fewer biases, which leads to fairer outcomes.  
- B. By acting virtuous, the public respects Big Tech more and more.  
- C. Better classes of customers lead to richer and more refined data for algorithmic systems.  
- D. Data-driven algorithms improve solutions, leading to new customers, and better data.  

**Đáp án đúng:** **D. Data-driven algorithms improve solutions, leading to new customers, and better data.**  
**Thuộc kiến thức:** *Big Tech Monopolies & Data Network Effects: The Data Feedback Loop (Vòng tròn tích lũy dữ liệu)*  
**Giải thích:**  
Vòng lặp tích cực (Data Network Effect) của các ông lớn công nghệ: Thu thập nhiều dữ liệu $\rightarrow$ Cải thiện độ chính xác thuật toán $\rightarrow$ Thu hút thêm nhiều khách hàng mới $\rightarrow$ Lại thu được nhiều dữ liệu chất lượng hơn.

---

### **Câu 48 (ITE302c_-_SU_2024_-_FE_2529 (47).webp)**
**Câu hỏi:**  
A model that makes more mistakes by moving its decision threshold down 40% of its worthiness metric will be potentially

**Danh sách đáp án:**  
- A. more accurate and fairer  
- B. less accurate and less fair  
- C. fairer but less accurate  
- D. less fair but more accurate  

**Đáp án đúng:** **C. fairer but less accurate**  
**Thuộc kiến thức:** *Fairness vs Accuracy Trade-off (Sự đánh đổi giữa Công bằng và Độ chính xác)*  
**Giải thích:**  
Hạ thấp ngưỡng quyết định (*lowering threshold*) cho phép nhiều cá nhân thuộc nhóm yếu thế tiếp cận cơ hội hơn (tăng tính công bằng - *fairer*), nhưng đồng thời làm tăng số ca False Positive, dẫn đến giảm độ chính xác tổng thể (*less accurate*).

---

### **Câu 49 (ITE302c_-_SU_2024_-_FE_2529 (48).webp)**
**Câu hỏi:**  
Which type of fairness fails to address merit while maintaining accuracy?

**Danh sách đáp án:**  
- A. error rate parity  
- B. statistical parity  
- C. equality of false positives  
- D. equality of prediction rate  

**Đáp án đúng:** **B. statistical parity**  
**Thuộc kiến thức:** *Fairness Definitions: Statistical Parity (Cân bằng thống kê)*  
**Giải thích:**  
*Statistical parity* (hay Demographic Parity) đòi hỏi tỷ lệ được chấp thuận ở các nhóm phải bằng nhau mà không quan tâm đến năng lực/xứng đáng thực tế (*fails to address merit*) của từng cá nhân trong từng nhóm.

---

### **Câu 50 (ITE302c_-_SU_2024_-_FE_2529 (49).webp)**
**Câu hỏi:**  
Which of the following ethical domains does the IEEE 7000 series explore? (Select two.)

**Danh sách đáp án:**  
- A. Emulated empathy  
- B. Machine-readable privacy terms  
- C. Fair competition  
- D. Personnel safety  

**Đáp án đúng:** **A. Emulated empathy** và **B. Machine-readable privacy terms**  
*(IEEE 7010 / 7012 / 7014: IEEE 7014 là Tiêu chuẩn về Mô phỏng sự đồng cảm - Emulated Empathy; IEEE 7012 là Điều khoản bảo mật máy đọc được - Machine-readable privacy terms).*  
**Thuộc kiến thức:** *IEEE 7000 Series Ethical Standards for Autonomous & Intelligent Systems*  
**Giải thích:**  
Bộ tiêu chuẩn IEEE 7000 bao gồm các tiêu chuẩn đạo đức chuyên sâu như **IEEE P7014** (Ethical Considerations in Emulated Empathy) và **IEEE P7012** (Machine-Readable Personal Privacy Terms).

---

### **Câu 51 (ITE302c_-_SU_2024_-_FE_2529 (50).webp)**
**Câu hỏi:**  
Which of the following is an important reason for continually refreshing an organization's internal and external ethics policies?

**Danh sách đáp án:**  
- A. It helps internal stakeholders justify the release of new product features or service upgrades.  
- B. It helps maintain alignment of the policies with the cultural and contextual values of the organization's employees.  
- C. It helps maintain alignment with the emergent risks and changing ethical posture of the products and services of the organization.  
- D. It helps demonstrate to senior management that work is being done on the internal and external ethics policies.  

**Đáp án đúng:** **C. It helps maintain alignment with the emergent risks and changing ethical posture of the products and services of the organization.**  
**Thuộc kiến thức:** *Dynamic Ethics Policy Governance (Cập nhật chính sách đạo đức thích ứng với rủi ro mới)*  
**Giải thích:**  
Công nghệ và bối cảnh rủi ro thay đổi rất nhanh, việc liên tục cập nhật chính sách đạo đức giúp tổ chức luôn thích ứng kịp thời với các rủi ro mới xuất hiện (*emergent risks*) và sự phát triển của sản phẩm.

---

### **Câu 52 (ITE302c_-_SU_2024_-_FE_2529 (51).webp)**
**Câu hỏi:**  
Which of the following constitute internal stakeholders in the context of a code of ethics?

**Danh sách đáp án:**  
- A. Regulators  
- B. Designers  
- C. Data subjects  
- D. Policymakers  

**Đáp án đúng:** **B. Designers**  
**Thuộc kiến thức:** *Internal vs External Stakeholders in Tech Ethics (Các bên liên quan nội bộ)*  
**Giải thích:**  
Các nhà thiết kế (*Designers*), kỹ sư phần mềm, quản lý sản phẩm là những nhân sự làm việc trực tiếp bên trong tổ chức $\rightarrow$ **Bên liên quan nội bộ** (*Internal stakeholders*). Còn cơ quan quản lý (*Regulators*), người dùng (*Data subjects*) là bên liên quan bên ngoài (*External*).

---

### **Câu 53 (ITE302c_-_SU_2024_-_FE_2529 (52).webp)**
**Câu hỏi:**  
How could a board of ethics be an example of ethic washing?

**Danh sách đáp án:**  
- A. If it has a wide variety of stakeholders.  
- B. If it has a narrow list of values to guide its decisions.  
- C. If it has no power to institute change.  
- D. If it has a large number of stakeholders.  

**Đáp án đúng:** **C. If it has no power to institute change.**  
**Thuộc kiến thức:** *Ethics Washing vs Real Governance (Tẩy rửa đạo đức)*  
**Giải thích:**  
Hội đồng đạo đức trở thành chiêu bài "tẩy rửa đạo đức" (*ethics washing*) để làm màu PR cho công chúng khi hội đồng này không có thực quyền phủ quyết hay quyền hạn thực thi bất kỳ thay đổi nào (*no power to institute change*).

---

### **Câu 54 (ITE302c_-_SU_2024_-_FE_2529 (53).webp)**
**Câu hỏi:**  
What make ethics training effective?

**Danh sách đáp án:**  
- A. Keep sessions short and focused.  
- B. Keep sessions interactive.  
- C. Keep the content simple and direct.  

**Đáp án đúng:** **B. Keep sessions interactive.**  
**Thuộc kiến thức:** *Effective Ethics Training in Organizations (Đào tạo đạo đức hiệu quả)*  
**Giải thích:**  
Đào tạo đạo đức hiệu quả nhất khi mang tính tương tác (*interactive*), lồng ghép các tình huống thực tế và thảo luận mở thay vì chỉ truyền đạt một chiều các điều luật khô khan.

---

### **Câu 55 (ITE302c_-_SU_2024_-_FE_2529 (54).webp)**
**Câu hỏi:**  
Which of the following is a benefit of using focus groups over surveys?

**Danh sách đáp án:**  
- A. They can provide more data through structured information gathering.  
- B. They are a more scalable option for the collection of information.  
- C. They are an easier way to collect information from a target audience.  
- D. They allow for deeper engagement with the target demographic community.  

**Đáp án đúng:** **D. They allow for deeper engagement with the target demographic community.**  
**Thuộc kiến thức:** *Qualitative Research Methods: Focus Groups vs Surveys (Nhóm tập trung)*  
**Giải thích:**  
Phương pháp nhóm tập trung (*focus groups*) cho phép tương tác và trao đổi sâu sắc, chi tiết (*deeper engagement*) với nhóm đối tượng mục tiêu, giúp khai thác được những góc nhìn định tính phức tạp mà khảo sát diện rộng (*surveys*) không nắm bắt được.

---

### **Câu 56 (ITE302c_-_SU_2024_-_FE_2529 (55).webp)**
**Câu hỏi:**  
What is the purpose of what-if scenario planning sessions?

**Danh sách đáp án:**  
- A. The purpose of what-if scenario planning sessions is to think critically about the tradeoffs between company values and business needs so you can decide how to proceed.  
- B. The purpose of what-if scenario planning sessions is to think critically about the mistakes so you can identify what should do after your company has an ethical violation.  
- C. The purpose of what-if scenario planning sessions is to think critically about potential worst-case scenarios so you can decide whether or not to proceed with a project.  
- D. The purpose of what-if scenario planning sessions is to think critically about potential best-case scenarios so you can decide whether or not to proceed with a project.  

**Đáp án đúng:** **A. The purpose of what-if scenario planning sessions is to think critically about the tradeoffs between company values and business needs so you can decide how to proceed.**  
**Thuộc kiến thức:** *Ethical Dilemma & What-If Scenario Planning (Lập kế hoạch kịch bản tình huống What-if)*  
**Giải thích:**  
Các phiên thảo luận kịch bản giả định (*what-if scenario planning*) giúp đội ngũ tư duy phản biện về sự đánh đổi giữa các giá trị đạo đức cốt lõi và nhu cầu kinh doanh thực tế để đưa ra quyết định cân bằng nhất.

---

### **Câu 57 (ITE302c_-_SU_2024_-_FE_2529 (56).webp)**
**Câu hỏi:**  
How is employee voice different than open door policy?

**Danh sách đáp án:**  
- A. Open door policy follows up with people to show how changes were implemented based on their communication.  
- B. Employee voice follows up with the people to show how changes were implemented based on their communication.  

**Đáp án đúng:** **B. Employee voice follows up with the people to show how changes were implemented based on their communication.**  
**Thuộc kiến thức:** *Employee Voice vs Open Door Policy (Tiếng nói nhân viên vs Chính sách mở cửa)*  
**Giải thích:**  
Khác với chính sách "cửa luôn mở" thụ động, cơ chế **Employee Voice** là quy trình chủ động phản hồi và thông báo cho nhân viên biết những thay đổi cụ thể đã được triển khai như thế nào dựa trên đóng góp ý kiến của họ (*follows up with how changes were implemented*).

---

### **Câu 58 (ITE302c_-_SU_2024_-_FE_2529 (57).webp)**
**Câu hỏi:**  
Which approach to corporate governance is more likely to create an ethical organizational culture?

**Danh sách đáp án:**  
- A. A systemic approach with incentive systems.  
- B. An oversight committee focus on rules.  
- C. A board focused on legal and regulatory compliance.  
- D. An oversight committee focus on frameworks.  

**Đáp án đúng:** **A. A systemic approach with incentive systems.**  
**Thuộc kiến thức:** *Ethical Corporate Governance Models (Quản trị doanh nghiệp mang tính hệ thống)*  
**Giải thích:**  
Cách tiếp cận hệ thống kết hợp các cơ chế đãi ngộ/khen thưởng (*systemic approach with incentive systems*) tạo động lực tích cực giúp định hình và duy trì văn hóa đạo đức bền vững trong toàn tổ chức.

---

### **Câu 59 (ITE302c_-_SU_2024_-_FE_2529 (58).webp)**
**Câu hỏi:**  
Which of the following constitute external stakeholders in the context of a code of ethics?

**Danh sách đáp án:**  
- A. Business managers  
- B. Developers  
- C. Regulators  
- D. Designers  

**Đáp án đúng:** **C. Regulators**  
**Thuộc kiến thức:** *External Stakeholders in Code of Ethics (Bên liên quan bên ngoài: Cơ quan quản lý)*  
**Giải thích:**  
Cơ quan quản lý nhà nước (*Regulators*), các nhà làm luật, và người tiêu dùng là các bên liên quan bên ngoài (*External stakeholders*) của tổ chức.

---

### **Câu 60 (ITE302c_-_SU_2024_-_FE_2529 (59).webp)**
**Câu hỏi:**  
Which organizational resource is most commonly used in terms of fostering an ethical organizational culture?

**Danh sách đáp án:**  
- A. Physical resources  
- B. Informational resources  
- C. Financial resources  
- D. Human resources  

**Đáp án đúng:** **D. Human resources**  
**Thuộc kiến thức:** *Organizational Resources & Culture Building (Nguồn nhân lực trong xây dựng văn hóa đạo đức)*  
**Giải thích:**  
**Nguồn nhân lực (Human resources)** là tài nguyên quan trọng và thường được sử dụng nhiều nhất để tuyển dụng, đào tạo, truyền cảm hứng và nuôi dưỡng văn hóa đạo đức trong một tổ chức.
