# ĐỀ THI TRẮC NGHIỆM: ITE302c - SU24 - RE
**Môn học:** Ethics in IT / AI Ethics (ITE302c)  
**Nguồn:** `ITE302c - SU 2024 - RE` (Tổng cộng: 60 câu)  
**Format:** Câu hỏi – Danh sách đáp án – Đáp án đúng – Giải thích & Kiến thức liên quan

---

### **Câu 1 (ITE302c_-_SU_2024_-_RE_2577.webp)**
**Câu hỏi:**  
Which of the following are potential training data inadequacies that you should communicate to your users in support of transparency? (Select two.)

**Danh sách đáp án:**  
- A. The amount of time it took to collect the data.  
- B. Any known bias in the sample data.  
- C. The relatively large size of a dataset used in training.  
- D. Any missing values in the dataset and how they were handled.  

**Đáp án đúng:** **B. Any known bias in the sample data.** và **D. Any missing values in the dataset and how they were handled.**  
**Thuộc kiến thức:** *Data Transparency & Model Cards / Datasheets for Datasets (Tính minh bạch về dữ liệu huấn luyện)*  
**Giải thích:**  
Để đảm bảo tính minh bạch (*transparency*) cho người dùng và các bên liên quan, đội ngũ phát triển cần công khai các khiếm khuyết trong dữ liệu huấn luyện, đặc biệt là: định kiến đã biết trong mẫu dữ liệu (*known bias in sample data*) và dữ liệu bị khuyết cũng như cách thức xử lý/imputation chúng (*missing values and handling methods*).

---

### **Câu 2 (ITE302c_-_SU_2024_-_RE_2577 (1).webp)**
**Câu hỏi:**  
Which of the following is a transparency risk of closed source software?

**Danh sách đáp án:**  
- A. Closed source software may not be accessible to independent auditors.  
- B. Closed source software cannot be shared with business partners.  
- C. Closed source software includes obfuscated code that cannot be read by a human.  
- D. Closed source software cannot be reviewed by the organization that developed it.  

**Đáp án đúng:** **A. Closed source software may not be accessible to independent auditors.**  
**Thuộc kiến thức:** *Open Source vs Closed Source Governance & Auditability (Rủi ro tính minh bạch của phần mềm nguồn đóng)*  
**Giải thích:**  
Phần mềm nguồn đóng (*closed source software*) giữ kín mã nguồn và dữ liệu độc quyền, dẫn đến rủi ro lớn về tính minh bạch: các kiểm toán viên độc lập bên ngoài (*independent auditors*) không thể tiếp cận để kiểm tra lỗ hổng bảo mật, lỗi thuật toán hoặc các thiên vị tiềm ẩn.

---

### **Câu 3 (ITE302c_-_SU_2024_-_RE_2577 (2).webp)**
**Câu hỏi:**  
What can be learned from a predictive model should not change if the ________ is either included or excluded in the training set

**Danh sách đáp án:**  
- A. dataset filter  
- B. biased dataset  
- C. model fairness score  
- D. individual's data  

**Đáp án đúng:** **D. individual's data**  
**Thuộc kiến thức:** *Differential Privacy Definition (Định nghĩa Bảo mật vi sai)*  
**Giải thích:**  
Theo nguyên lý cốt lõi của **Bảo mật vi sai (Differential Privacy)**: Kết quả đầu ra hoặc tri thức rút ra từ mô hình phân tích không được thay đổi đáng kể bất kể dữ liệu của một cá nhân cụ thể (*individual's data*) có xuất hiện hay bị loại bỏ khỏi tập huấn luyện hay không.

---

### **Câu 4 (ITE302c_-_SU_2024_-_RE_2577 (3).webp)**
**Câu hỏi:**  
Which of the following is a recommended security practice for machine learning datasets?

**Danh sách đáp án:**  
- A. Ensure your team is full of different perspectives  
- B. Enact a sound data governance structure  
- C. Perform threat modeling with beneficial algorithms  
- D. Create a chain of command  

**Đáp án đúng:** **B. Enact a sound data governance structure**  
**Thuộc kiến thức:** *Data Governance & Dataset Security (Quản trị dữ liệu và bảo mật tập dữ liệu ML)*  
**Giải thích:**  
Biện pháp an ninh dữ liệu hàng đầu cho các tập dữ liệu máy học là thiết lập một cơ cấu quản trị dữ liệu chặt chẽ và vững chắc (*sound data governance structure*), bao gồm kiểm soát quyền truy cập, kiểm toán luồng dữ liệu, mã hóa và bảo vệ tính toàn vẹn của dữ liệu.

---

### **Câu 5 (ITE302c_-_SU_2024_-_RE_2577 (4).webp)**
**Câu hỏi:**  
Which of the following types of bias emerges when the same data is sampled over and over again, limiting a model's perspective?

**Danh sách đáp án:**  
- A. Confirmation bias  
- B. Implicit bias  
- C. Temporal bias  
- D. Reinforcement bias  

**Đáp án đúng:** **D. Reinforcement bias**  
**Thuộc kiến thức:** *Sampling Bias & Reinforcement Feedback Loops (Thiên vị củng cố / Vòng lặp phản hồi)*  
**Giải thích:**  
*Reinforcement bias* (thiên vị củng cố) xuất hiện khi một tập dữ liệu hoặc kết quả đầu ra hạn chế được tái lấy mẫu liên tục lặp đi lặp lại (*sampled over and over again*), thu hẹp góc nhìn của mô hình và khuếch đại các thiên vị ban đầu.

---

### **Câu 6 (ITE302c_-_SU_2024_-_RE_2577 (5).webp)**
**Câu hỏi:**  
A major downside to k-anonymity is that re-identification is possible with

**Danh sách đáp án:**  
- A. multiple datasets  
- B. database leaks  
- C. sensitive columns  
- D. expanding k values  

**Đáp án đúng:** **A. multiple datasets**  
**Thuộc kiến thức:** *Privacy Attacks: Linkage Attacks on k-Anonymity (Tấn công tái định danh qua liên kết nhiều bộ dữ liệu)*  
**Giải thích:**  
Nhược điểm lớn nhất của mô hình ẩn danh $k$-anonymity là khả năng bị tấn công liên kết (*linkage attack*): kẻ tấn công kết hợp nhiều tập dữ liệu công khai khác nhau (*multiple datasets*) chứa các thuộc tính bán định danh (quasi-identifiers) để tái nhận diện danh tính thật của cá nhân.

---

### **Câu 7 (ITE302c_-_SU_2024_-_RE_2577 (6).webp)**
**Câu hỏi:**  
A benefit of glass-box models is that if an attribute is skewing the fairness of a decision, a human agent may choose to

**Danh sách đáp án:**  
- A. trust it  
- B. re-run the algorithm without it  
- C. alert the team  
- D. ignore it  

**Đáp án đúng:** **B. re-run the algorithm without it**  
**Thuộc kiến thức:** *Interpretable Glass-Box Models & Human-in-the-Loop (Mô hình hộp kính và can thiệp loại bỏ thuộc tính thiên vị)*  
**Giải thích:**  
Mô hình "hộp kính" (*glass-box / interpretable models*) cho phép con người nhìn thấy rõ ràng tác động của từng biến/thuộc tính. Nếu phát hiện một thuộc tính đang làm lệch tính công bằng của quyết định, chuyên gia có thể chủ động can thiệp và chạy lại thuật toán mà không có thuộc tính đó (*re-run without it*).

---

### **Câu 8 (ITE302c_-_SU_2024_-_RE_2577 (7).webp)**
**Câu hỏi:**  
During cross-validation, which of the following dataset splits is used to tune the performance of a model?

**Danh sách đáp án:**  
- A. Training set  
- B. Test set  
- C. Validation test  
- D. Unit test  

**Đáp án đúng:** **C. Validation test**  
**Thuộc kiến thức:** *Machine Learning Workflow: Train/Validation/Test Splits (Tập kiểm định Validation Set)*  
**Giải thích:**  
Trong quy trình huấn luyện và kiểm định chéo (*cross-validation*), tập **Validation (Validation set / test)** được dùng để tinh chỉnh siêu tham số (*tune hyperparameters*) và đánh giá hiệu năng mô hình nhằm tránh overfitting trước khi đánh giá lần cuối trên Test set.

---

### **Câu 9 (ITE302c_-_SU_2024_-_RE_2577 (8).webp)**
**Câu hỏi:**  
When it comes to protecting private data, which of the following could be the root cause of a problem?

**Danh sách đáp án:**  
- A. The data was stored insecurely.  
- B. The data was leaked online.  
- C. The data was deleted from storage.  
- D. The data was broken.  

**Đáp án đúng:** **A. The data was stored insecurely.**  
**Thuộc kiến thức:** *Data Privacy & Root Cause Analysis (Nguyên nhân gốc rễ của rủi ro dữ liệu)*  
**Giải thích:**  
Việc dữ liệu bị rò rỉ (*leaked online*) chỉ là hậu quả bề nổi, còn **nguyên nhân gốc rễ (root cause)** dẫn đến sự cố vi phạm quyền riêng tư là do dữ liệu được lưu trữ không an toàn (*stored insecurely - thiếu mã hóa, cấu hình sai quyền truy cập*).

---

### **Câu 10 (ITE302c_-_SU_2024_-_RE_2577 (9).webp)**
**Câu hỏi:**  
The Netflix prize privacy scandal is an example of reidentification through

**Danh sách đáp án:**  
- A. k-anonymity  
- B. database leaks  
- C. multiple datasets  
- D. sensitive columns  

**Đáp án đúng:** **C. multiple datasets**  
**Thuộc kiến thức:** *Case Study: Netflix Prize Linkage Attack (Bê bối giải thưởng Netflix và tấn công liên kết dữ liệu)*  
**Giải thích:**  
Vụ bê bối giải thưởng dữ liệu Netflix (Netflix Prize) xảy ra khi các nhà nghiên cứu Narayanan & Shmatikov đối chiếu tập dữ liệu phim ẩn danh của Netflix với cơ sở dữ liệu công khai của IMDb (*multiple datasets*), từ đó tái nhận diện thành công tài khoản và sở thích cá nhân của người dùng.

---

### **Câu 11 (ITE302c_-_SU_2024_-_RE_2577 (10).webp)**
**Câu hỏi:**  
A hospital dataset protects whether an individual has had either a stroke, heart attack, or staph infection. The individual may still be harmed via dataset

**Danh sách đáp án:**  
- A. group inclusion  
- B. privacy columns  
- C. k-anonymity  
- D. security issues  

**Đáp án đúng:** **A. group inclusion**  
**Thuộc kiến thức:** *Group Privacy Harm & Attribute Disclosure (Tác hại do thuộc về nhóm trong tập dữ liệu)*  
**Giải thích:**  
Dù không biết chính xác cá nhân mắc bệnh nào trong 3 bệnh trên, việc biết một người có tên trong danh sách nhóm bệnh nhân này (*group inclusion*) đã đủ để công ty bảo hiểm hoặc nhà tuyển dụng gán nhãn rủi ro sức khỏe cao cho họ, gây ra phân biệt đối xử cấp độ nhóm.

---

### **Câu 12 (ITE302c_-_SU_2024_-_RE_2577 (11).webp)**
**Câu hỏi:**  
If you were to place the task "Apply security patch to system" on an attack tree diagram, what category would it be assigned to?

**Danh sách đáp án:**  
- A. Threat  
- B. Vector  
- C. Control  
- D. Controller  

**Đáp án đúng:** **C. Control**  
**Thuộc kiến thức:** *Threat Modeling & Attack Trees: Security Controls (Cây tấn công và Biện pháp kiểm soát)*  
**Giải thích:**  
Trong mô hình cây tấn công (*attack tree / defense tree*), hành động "Cài đặt bản vá bảo mật cho hệ thống" là một biện pháp đối phó / kiểm soát an ninh (**Control** / Countermeasure) nhằm ngăn chặn kẻ tấn công khai thác lỗ hổng.

---

### **Câu 13 (ITE302c_-_SU_2024_-_RE_2577 (12).webp)**
**Câu hỏi:**  
Which of the following benefits can be gained from establishing baseline system behaviors? (Select two.)

**Danh sách đáp án:**  
- A. Tracking deviance from norms  
- B. Optimizing costs of operation  
- C. Restoring compromised functionality through a system rollback  
- D. Holding employees more accountable  

**Đáp án đúng:** **A. Tracking deviance from norms** và **C. Restoring compromised functionality through a system rollback**  
**Thuộc kiến thức:** *System Security Baselines & Anomaly Detection (Thiết lập hành vi chuẩn của hệ thống)*  
**Giải thích:**  
Việc thiết lập trạng thái chuẩn (*baseline*) cho phép hệ thống giám sát phát hiện ngay các sai lệch bất thường (*tracking deviance from norms - phát hiện xâm nhập*) và cung cấp cấu hình chuẩn để khôi phục lại khi hệ thống bị xâm phạm (*restoring through system rollback*).

---

### **Câu 14 (ITE302c_-_SU_2024_-_RE_2577 (13).webp)**
**Câu hỏi:**  
The Data minimization principle requires that you limit data collection to only what is ________

**Danh sách đáp án:**  
- A. necessary for differential privacy  
- B. optional for a chain of command  
- C. needed to have k-anonymity  
- D. required to fulfill a specific purpose  

**Đáp án đúng:** **D. required to fulfill a specific purpose**  
**Thuộc kiến thức:** *GDPR & Privacy by Design: Data Minimization (Nguyên tắc thu nhỏ dữ liệu)*  
**Giải thích:**  
Nguyên tắc giảm thiểu dữ liệu (*Data Minimization*) trong luật quyền riêng tư (như GDPR) yêu cầu tổ chức chỉ được thu thập dữ liệu vừa đủ và thực sự cần thiết để hoàn thành một mục đích cụ thể đã xác định trước (*required to fulfill a specific purpose*).

---

### **Câu 15 (ITE302c_-_SU_2024_-_RE_2577 (14).webp)**
**Câu hỏi:**  
Which of the following measures is best suited for reporting results to an audience?

**Danh sách đáp án:**  
- A. Standard deviation  
- B. Variance  
- C. Mode  
- D. Median  

**Đáp án đúng:** **D. Median**  
**Thuộc kiến thức:** *Descriptive Statistics & Communicating Data to General Audiences (Báo cáo kết quả bằng Trung vị)*  
**Giải thích:**  
Khi báo cáo kết quả cho công chúng hoặc người nghe phổ thông (*general audience*), **Median (Trung vị)** là chỉ số trực quan, dễ hiểu và không bị bóp méo bởi các giá trị ngoại lai cực đoan (outliers) như giá trị trung bình hay phương sai.

---

### **Câu 16 (ITE302c_-_SU_2024_-_RE_2577 (15).webp)**
**Câu hỏi:**  
Which of the following are tools of an effective media communication plan? (Select two.)

**Danh sách đáp án:**  
- A. Mission statement  
- B. Press release  
- C. Public education campaign  
- D. Video briefing  

**Đáp án đúng:** **B. Press release** và **D. Video briefing**  
**Thuộc kiến thức:** *Crisis Communication & Media Relations Tools (Công cụ kế hoạch truyền thông báo chí)*  
**Giải thích:**  
Hai công cụ tác nghiệp trực tiếp, cốt lõi trong một kế hoạch truyền thông báo chí (*media communication plan*) là Thông cáo báo chí (*Press release*) và Tóm tắt thông tin qua video/họp báo (*Video briefing*).

---

### **Câu 17 (ITE302c_-_SU_2024_-_RE_2577 (16).webp)**
**Câu hỏi:**  
Which of the following is an important concept to consider as part of building an organizational philosophy?

**Danh sách đáp án:**  
- A. Adopting philosophies already created by other organizations  
- B. Putting ethical principles into practice  
- C. Considering internal stakeholder needs above all else  
- D. Anticipating future implications of that philosophy  

**Đáp án đúng:** **B. Putting ethical principles into practice**  
**Thuộc kiến thức:** *Organizational Ethics Philosophy (Đưa nguyên tắc đạo đức vào thực tiễn)*  
**Giải thích:**  
Khi xây dựng triết lý tổ chức (*organizational philosophy*), điều quan trọng nhất không phải là khẩu hiệu suông mà là cơ chế đưa các nguyên tắc đạo đức vào hành động thực tiễn hàng ngày (*putting ethical principles into practice*).

---

### **Câu 18 (ITE302c_-_SU_2024_-_RE_2577 (17).webp)**
**Câu hỏi:**  
Why is it important to take a proactive approach to addressing liability issues?

**Danh sách đáp án:**  
- A. The law often lags behind innovation.  
- B. The law is not always applied consistently.  
- C. The law is not always clear.  
- D. The law often difficult to understand.  

**Đáp án đúng:** **A. The law often lags behind innovation.**  
**Thuộc kiến thức:** *Legal Liability & Technology Pacing Problem (Độ trễ của luật pháp so với đổi mới công nghệ)*  
**Giải thích:**  
Do công nghệ AI và dữ liệu phát triển quá nhanh, luật pháp thường có độ trễ lớn so với thực tế đổi mới sáng tạo (*law often lags behind innovation*). Doanh nghiệp cần chủ động (*proactive*) quản trị rủi ro pháp lý và đạo đức trước khi có luật điều chỉnh chính thức.

---

### **Câu 19 (ITE302c_-_SU_2024_-_RE_2577 (18).webp)**
**Câu hỏi:**  
Which of the following are useful strategies for communicating ethical risks to the individual? (Select two.)

**Danh sách đáp án:**  
- A. Ensure individuals understand the specific details of each risk they are affected by  
- B. Communicate to individuals proactively rather than reactively  
- C. Inform individuals of how they are obligated to mitigate risks to themselves  
- D. Ensure individuals feel that they have input into the process  

**Đáp án đúng:** **A. Ensure individuals understand the specific details of each risk they are affected by** và **B. Communicate to individuals proactively rather than reactively**  
**Thuộc kiến thức:** *Risk Communication with Individuals (Chiến lược truyền thông rủi ro tới từng cá nhân)*  
**Giải thích:**  
Khi truyền thông rủi ro đạo đức tới các cá nhân chịu ảnh hưởng, cần giải thích rõ ràng, minh bạch các rủi ro cụ thể liên quan đến họ (*understand specific details*) và chủ động thông báo trước thay vì chờ sự cố xảy ra mới phản ứng (*proactively rather than reactively*).

---

### **Câu 20 (ITE302c_-_SU_2024_-_RE_2577 (19).webp)**
**Câu hỏi:**  
What is the primary purpose of obtaining feedback about an ethical crisis?

**Danh sách đáp án:**  
- A. To demonstrate compliance  
- B. To make operational improvements  
- C. To appeases concerned stakeholders  
- D. To motivate internal personnel  

**Đáp án đúng:** **B. To make operational improvements**  
**Thuộc kiến thức:** *Crisis Management Post-Mortem & Continuous Improvement (Cải tiến vận hành sau khủng hoảng)*  
**Giải thích:**  
Mục đích cốt lõi của việc thu thập phản hồi và đánh giá sau sự cố khủng hoảng đạo đức là rút ra bài học kinh nghiệm để thực hiện những cải tiến căn bản trong quy trình vận hành (*make operational improvements*), ngăn chặn sự cố tái diễn.

---

### **Câu 21 (ITE302c_-_SU_2024_-_RE_2577 (20).webp)**
**Câu hỏi:**  
Which of the following communication tactics help uphold transparency and explainability from the customer perspective? (Select two.)

**Danh sách đáp án:**  
- A. Providing prompt responses to customer questions about the decisions made by data-driven systems.  
- B. Providing information about data-driven systems in simple, easy-to-understand terms.  
- C. Providing in-depth white papers on the algorithms that underlie data-driven systems.  
- D. Providing guidelines for how customers can keep their private data secure when using data-driven systems.  

**Đáp án đúng:** **A. Providing prompt responses to customer questions about the decisions made by data-driven systems.** và **B. Providing information about data-driven systems in simple, easy-to-understand terms.**  
**Thuộc kiến thức:** *Customer-Centric Explainable AI & Transparency (Minh bạch hóa từ góc nhìn khách hàng)*  
**Giải thích:**  
Từ góc độ khách hàng, tính minh bạch và khả năng giải thích được thể hiện qua việc: (1) giải thích hệ thống bằng ngôn ngữ đơn giản, dễ hiểu (*simple, easy-to-understand terms*) và (2) phản hồi nhanh chóng khi người dùng thắc mắc về quyết định tự động (*prompt responses*).

---

### **Câu 22 (ITE302c_-_SU_2024_-_RE_2577 (21).webp)**
**Câu hỏi:**  
Which of the following can help mitigate unwillingness to accept feedback?

**Danh sách đáp án:**  
- A. Engage in cultural awareness and cultural sensitivity.  
- B. Create and participate in a risk culture.  
- C. Communicate the importance of feedback in refining a product.  
- D. Communicate regularly about the culture values.  

**Đáp án đúng:** **C. Communicate the importance of feedback in refining a product.**  
**Thuộc kiến thức:** *Organizational Culture: Overcoming Feedback Resistance (Vượt qua sự ngần ngại tiếp nhận phản hồi)*  
**Giải thích:**  
Để giảm bớt tâm lý ngần ngại hoặc phản kháng trước phản hồi tiêu cực, lãnh đạo cần thường xuyên truyền thông rõ ràng về vai trò thiết yếu của phản hồi trong việc hoàn thiện và nâng cao chất lượng sản phẩm (*importance of feedback in refining a product*).

---

### **Câu 23 (ITE302c_-_SU_2024_-_RE_2577 (22).webp)**
**Câu hỏi:**  
When conducting a business impact assessment (BIA), why is it important to interview or survey personnel at the ground level, not just managers and other higher-ups?

**Danh sách đáp án:**  
- A. They are more likely to be candid and give forthright responses.  
- B. They may have more institutional knowledge about a subject than managers.  
- C. They are more likely to find the time to complete an interview or survey.  
- D. They have a greater obligation to answer questions.  

**Đáp án đúng:** **A. They are more likely to be candid and give forthright responses.**  
*(Hoặc trong nhiều tài liệu BIA, nhân sự tuyến đầu có cái nhìn trực diện, thẳng thắn về các lỗ hổng vận hành hàng ngày).*  
**Thuộc kiến thức:** *Business Impact Assessment (BIA) Stakeholder Engagement (Đánh giá tác động kinh doanh)*  
**Giải thích:**  
Nhân viên cấp cơ sở (*ground-level personnel*) làm việc trực tiếp với các quy trình và hệ thống hàng ngày nên thường đưa ra các câu trả lời thẳng thắn, trung thực (*candid and forthright*) về các điểm nghẽn và rủi ro thực tế mà quản lý cấp cao có thể không nhìn thấy.

---

### **Câu 24 (ITE302c_-_SU_2024_-_RE_2577 (23).webp)**
**Câu hỏi:**  
The organization needs to ask itself about any quality control issues it may be having. Which of the following processes is most suitable for asking and answering that question?

**Danh sách đáp án:**  
- A. Business impact assessment  
- B. Lessons learned report  
- C. Vulnerability audit  
- D. Business continuity plan  

**Đáp án đúng:** **B. Lessons learned report**  
**Thuộc kiến thức:** *Quality Governance & Lessons Learned (Báo cáo bài học kinh nghiệm)*  
**Giải thích:**  
Báo cáo bài học kinh nghiệm (*Lessons learned report / post-mortem*) là quy trình chuẩn để xem xét lại toàn bộ các vấn đề kiểm soát chất lượng, sai sót đã xảy ra và tìm giải pháp khắc phục triệt để.

---

### **Câu 25 (ITE302c_-_SU_2024_-_RE_2577 (24).webp)**
**Câu hỏi:**  
Which of the following are challenges that can arise if you fail to communicate about the social impact of ethical risks (select two.)

**Danh sách đáp án:**  
- A. Decreased corporate revenue  
- B. Reduced of brand loyalty  
- C. Disenfranchisement  
- D. Erosion of rights  

**Đáp án đúng:** **C. Disenfranchisement** và **D. Erosion of rights**  
**Thuộc kiến thức:** *Social Impacts of AI & Ethical Failure (Tác động xã hội: Tước đoạt quyền lợi và xói mòn nhân quyền)*  
**Giải thích:**  
Khi không truyền thông và kiểm soát các tác động xã hội của rủi ro đạo đức công nghệ, hậu quả nghiêm trọng nhất ở cấp độ xã hội là sự tước đoạt quyền tham gia/tiếp cận bình đẳng (*Disenfranchisement*) và sự xói mòn các quyền cơ bản của con người (*Erosion of rights*).

---

### **Câu 26 (ITE302c_-_SU_2024_-_RE_2577 (25).webp)**
**Câu hỏi:**  
Why is deciding how to act using moral reasoning not always a feasible goal for human beings?

**Danh sách đáp án:**  
- A. Most people are not educated on normative ethical theories and therefore cannot perform true moral reasoning.  
- B. Moral reasoning is too complicated to apply to a real-world situation.  
- C. Moral reasoning has few tangible benefits for most people.  
- D. Human decision making is often influenced by emotion and not logic.  

**Đáp án đúng:** **D. Human decision making is often influenced by emotion and not logic.**  
**Thuộc kiến thức:** *Moral Psychology & Bounded Rationality (Tâm lý học đạo đức: Cảm xúc lấn át lý trí)*  
**Giải thích:**  
Con người thường bị chi phối mạnh mẽ bởi cảm xúc, định kiến vô thức và trực giác thay vì luôn đưa ra quyết định dựa trên suy luận đạo đức thuần túy bằng logic (*influenced by emotion and not logic*).

---

### **Câu 27 (ITE302c_-_SU_2024_-_RE_2577 (26).webp)**
**Câu hỏi:**  
What's the difference between a basic and complex learning algorithm?

**Danh sách đáp án:**  
- A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given the freedom to find its own model  
- B. A basic algorithm cannot use computer vision, while a complex algorithm can  
- C. A basic algorithm cannot process more than 5 steps in a function, while a complex algorithm can process up to 15  
- D. A basic algorithm can handle simple inputs like numbers, while a complex algorithm can handle complex inputs like pictures  

**Đáp án đúng:** **A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given the freedom to find its own model**  
**Thuộc kiến thức:** *Basic vs Complex Learning Algorithms (Thuật toán học cơ bản và phức tạp)*  
**Giải thích:**  
Thuật toán học cơ bản tối ưu hóa trong một không gian giả thuyết cố định có sẵn, trong khi các thuật toán học phức tạp (như mạng nơ-ron sâu) được tự do khám phá và tự hình thành mô hình biểu diễn đặc trưng phức tạp riêng của chúng.

---

### **Câu 28 (ITE302c_-_SU_2024_-_RE_2577 (27).webp)**
**Câu hỏi:**  
How is a Machine Learning (ML) system different from Deep Learning (DL) system?

**Danh sách đáp án:**  
- A. A ML system learns from its mistakes.  
- B. A ML system does all of the feature extraction and classification.  
- C. A ML system needs a human to provide the feature extraction.  
- D. A ML system does not needs input data.  

**Đáp án đúng:** **C. A ML system needs a human to provide the feature extraction.**  
**Thuộc kiến thức:** *Machine Learning vs Deep Learning: Feature Engineering (Trích xuất đặc trưng thủ công)*  
**Giải thích:**  
Khác biệt cốt lõi: Trong Machine Learning truyền thống, con người phải trực tiếp thiết kế và trích xuất các đặc trưng (*manual feature extraction*); còn Deep Learning tự động học trích xuất đặc trưng từ dữ liệu thô qua các tầng ẩn.

---

### **Câu 29 (ITE302c_-_SU_2024_-_RE_2577 (28).webp)**
**Câu hỏi:**  
A good example of empirical reflection in training data is

**Danh sách đáp án:**  
- A. A true positive result that defies the training data set  
- B. a model fails to recognize cultural differences due to incorrect attributes  
- C. an image recognition model selects one face over another based on sample data  
- D. an image recognition model cannot tell a difference between a photo of a dog and a photo of a photo of a dog  

**Đáp án đúng:** **C. an image recognition model selects one face over another based on sample data**  
**Thuộc kiến thức:** *Empirical Reflection & Sampling Disparities in AI (Sự phản ánh thực nghiệm trong dữ liệu mẫu)*  
**Giải thích:**  
Hiện tượng phản ánh thực nghiệm (*empirical reflection*) thể hiện khi mô hình nhận diện khuôn mặt ưu tiên hoặc nhận diện chuẩn xác một nhóm khuôn mặt này hơn nhóm khác chỉ vì tỷ lệ xuất hiện của nhóm đó áp đảo trong tập mẫu huấn luyện.

---

### **Câu 30 (ITE302c_-_SU_2024_-_RE_2577 (29).webp)**
**Câu hỏi:**  
Management asks someone to do a data-related task. Which of the following would likely be ethically problematic? (Select two.)

**Danh sách đáp án:**  
- A. Manipulate data or alter its interpretation.  
- B. Aggregate data together.  
- C. Change data to another format.  
- D. Delete any erroneous data.  

**Đáp án đúng:** **A. Manipulate data or alter its interpretation.** và **D. Delete any erroneous data.**  
*(Ghi chú: Việc tùy tiện xóa dữ liệu bị cho là "sai sót" mà không theo quy trình kiểm toán/ghi log sẽ làm sai lệch phân phối thống kê và che giấu sự thật).*  
**Thuộc kiến thức:** *Data Ethics & Scientific Integrity (Tính liêm chính dữ liệu)*  
**Giải thích:**  
Hành vi thao túng dữ liệu để thay đổi kết luận (*manipulate data*) và tự ý xóa bỏ các điểm dữ liệu bất lợi/lỗi mà không có cơ chế đối chứng minh bạch (*delete erroneous data*) là hai hành vi vi phạm đạo đức nghiên cứu và phân tích dữ liệu.

---

### **Câu 31 (ITE302c_-_SU_2024_-_RE_2577 (30).webp)**
**Câu hỏi:**  
Model inputs of address with "City + State" as separate inputs from a dataset would violate which accuracy guideline?

**Danh sách đáp án:**  
- A. Domain expertise  
- B. No correlating data  
- C. First principles  
- D. Objective summarization  

**Đáp án đúng:** **B. No correlating data**  
**Thuộc kiến thức:** *Feature Engineering Guidelines: Multicollinearity (Tránh trùng lặp dữ liệu có tương quan cao)*  
**Giải thích:**  
Thành phố và Bang là hai biến số có mối tương quan và phụ thuộc địa lý rất chặt chẽ. Việc đưa đồng thời các biến số tương quan mạnh làm đầu vào độc lập vi phạm nguyên tắc tránh trùng lặp dữ liệu tương quan (*No correlating data / Multicollinearity*), gây nhiễu cho trọng số của mô hình.

---

### **Câu 32 (ITE302c_-_SU_2024_-_RE_2577 (31).webp)**
**Câu hỏi:**  
If you are doing an analysis of data to determine which of several small businesses you should purchase to gain the maximum benefit to your overall company finances, what type of analysis are you doing?

**Danh sách đáp án:**  
- A. Descriptive  
- B. Prescriptive  
- C. Predictive  
- D. Cumulative  

**Đáp án đúng:** **B. Prescriptive**  
**Thuộc kiến thức:** *Types of Data Analytics: Descriptive vs Predictive vs Prescriptive (Phân tích đề xuất hành động)*  
**Giải thích:**  
Phân tích nhằm đưa ra quyết định hành động tối ưu (mua doanh nghiệp nào để đạt lợi nhuận tối đa) thuộc loại **Phân tích đề xuất/kê đơn (Prescriptive Analytics)** - chỉ dẫn phương án hành động tốt nhất dựa trên mô hình tối ưu hóa.

---

### **Câu 33 (ITE302c_-_SU_2024_-_RE_2577 (32).webp)**
**Câu hỏi:**  
"Companies have an obligation to their shareholders" is part of a view that sees artificial intelligence as

**Danh sách đáp án:**  
- A. an overall good for humanity, no matter the consequences  
- B. just another tool that accelerates research, like online advertising  
- C. a gimmick for enterprises, unless general intelligence is achieved  
- D. a harmful tool that will bring about the end of capitalism  

**Đáp án đúng:** **B. just another tool that accelerates research, like online advertising**  
**Thuộc kiến thức:** *Shareholder Primacy & Utilitarian Tool View of AI (Thuyết ưu tiên cổ đông và quan điểm công cụ)*  
**Giải thích:**  
Theo quan điểm ưu tiên lợi ích cổ đông (Shareholder Theory), AI được xem như một công cụ thương mại thuần túy để tối ưu hóa năng suất, nghiên cứu và lợi nhuận (*just another tool*), tương tự như công nghệ quảng cáo trực tuyến.

---

### **Câu 34 (ITE302c_-_SU_2024_-_RE_2577 (33).webp)**
**Câu hỏi:**  
Which of the following best describes beneficence?

**Danh sách đáp án:**  
- A. Beneficence is a term coined by IBM that relates to their Green Horizons initiative in 2014.  
- B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.  
- C. Beneficence is the promotion of well-being for moral agents like humans.  
- D. Beneficence is the promotion of efficient systems that perform rapidly and benefit companies.  

**Đáp án đúng:** **B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.**  
**Thuộc kiến thức:** *AI Ethical Principles: Beneficence (Nguyên tắc hướng thiện / Tạo ra lợi ích)*  
**Giải thích:**  
Nguyên tắc **Beneficence (Lòng hướng thiện / Thúc đẩy điều tốt lành)** trong đạo đức AI toàn diện đòi hỏi công nghệ phải phục vụ và nâng cao phúc lợi (*promotion of well-being*) không chỉ cho con người mà còn cho cả xã hội, động vật và môi trường sinh thái.

---

### **Câu 35 (ITE302c_-_SU_2024_-_RE_2577 (34).webp)**
**Câu hỏi:**  
In a complex learning function, we will understand the ________, but not the ________

**Danh sách đáp án:**  
- A. causal link, correlation  
- B. algorithm, cause and effect  
- C. inputs/outputs, algorithm  
- D. input data, output data  

**Đáp án đúng:** **C. inputs/outputs, algorithm**  
**Thuộc kiến thức:** *Black Box Nature in Deep Learning (Bản chất hộp đen: biết Input/Output nhưng không hiểu sâu thuật toán)*  
**Giải thích:**  
Trong các hàm học phức tạp (như mạng nơ-ron nhiều tầng), chúng ta nắm rõ dữ liệu đầu vào và kết quả đầu ra (*inputs/outputs*), nhưng logic biến đổi bên trong hàm/thuật toán (*internal algorithm mapping*) quá phức tạp để giải thích tường minh.

---

### **Câu 36 (ITE302c_-_SU_2024_-_RE_2577 (35).webp)**
**Câu hỏi:**  
What are the attributes of an error function when training a predictive model

**Danh sách đáp án:**  
- A. the percentage of data that is formatted properly  
- B. the percentage of predictions that don't match actual outcomes  
- C. the ratio of algorithm to curve in a predictive model  
- D. the ratio of training data to actual data the model has consumed  

**Đáp án đúng:** **B. the percentage of predictions that don't match actual outcomes**  
**Thuộc kiến thức:** *Loss / Error Functions in Machine Learning (Hàm mất mát / Hàm sai số)*  
**Giải thích:**  
Hàm sai số (*error/loss function*) đo lường mức độ sai lệch giữa kết quả mô hình dự đoán so với kết quả thực tế (*percentage of predictions that don't match actual outcomes*), làm cơ sở để cập nhật trọng số mô hình.

---

### **Câu 37 (ITE302c_-_SU_2024_-_RE_2577 (36).webp)**
**Câu hỏi:**  
Which of the following best describes what an algorithm is?

**Danh sách đáp án:**  
- A. a recipe that a computer uses to solve problems  
- B. a type of process a human uses to write down what steps need to happen to get a problem solved  
- C. a type of computer that calculates problem-solving methods  
- D. a list of ingredients a computer uses to generate problems to solve  

**Đáp án đúng:** **A. a recipe that a computer uses to solve problems**  
**Thuộc kiến thức:** *Definition of an Algorithm (Định nghĩa Thuật toán)*  
**Giải thích:**  
Thuật toán (*algorithm*) được định nghĩa một cách trực quan như một "công thức/hướng dẫn từng bước" (*a recipe*) mà máy tính thực thi tuần tự để giải quyết một bài toán cụ thể.

---

### **Câu 38 (ITE302c_-_SU_2024_-_RE_2577 (37).webp)**
**Câu hỏi:**  
A training set based on feeding 60% of data, validating on 20% of data, and then designing multiple tests for the remaining 20% of data is referred to as an

**Danh sách đáp án:**  
- A. classic training set  
- B. optimized training set  
- C. false positive set  
- D. predictive training set  

**Đáp án đúng:** **A. classic training set**  
**Thuộc kiến thức:** *Data Splitting Ratios: 60/20/20 Rule (Phân chia tập dữ liệu kinh điển)*  
**Giải thích:**  
Tỷ lệ chia dữ liệu 60% huấn luyện (Train), 20% kiểm định (Validation), và 20% kiểm thử (Test) là cấu hình phân chia kinh điển chuẩn mực (*classic training set split*) trong khoa học dữ liệu.

---

### **Câu 39 (ITE302c_-_SU_2024_-_RE_2577 (38).webp)**
**Câu hỏi:**  
Which of the following describes why explainability is important?

**Danh sách đáp án:**  
- A. It is necessary so that internal stakeholders can understand how a system works.  
- B. It provides interpretations of a system's actions.  
- C. It provides accountability and trust.  
- D. It enables you to explain a system for shareholder purposes.  

**Đáp án đúng:** **C. It provides accountability and trust.**  
**Thuộc kiến thức:** *Explainable AI (XAI) Importance (Tầm quan trọng của tính giải thích: Trách nhiệm và Niềm tin)*  
**Giải thích:**  
Khả năng giải thích (*Explainability*) là nền tảng tối quan trọng vì nó tạo dựng niềm tin nơi người dùng (*trust*) và thiết lập cơ chế chịu trách nhiệm giải trình (*accountability*) khi hệ thống AI đưa ra các quyết định hệ trọng.

---

### **Câu 40 (ITE302c_-_SU_2024_-_RE_2577 (39).webp)**
**Câu hỏi:**  
What is the Turing test used for?

**Danh sách đáp án:**  
- A. To test whether an AI system is capable of tricking a person into thinking it's another person.  
- B. To test whether an AI system is capable of thinking like a human being.  
- C. To test whether an AI system is trustworthy.  
- D. To test whether an AI system is availability.  

**Đáp án đúng:** **A. To test whether an AI system is capable of tricking a person into thinking it's another person.**  
**Thuộc kiến thức:** *Turing Test & Artificial General Intelligence (Phép thử Turing)*  
**Giải thích:**  
Phép thử Turing (*Turing test*) do Alan Turing đề xuất nhằm kiểm tra xem liệu một cỗ máy có thể trò chuyện tự nhiên đến mức đánh lừa người đối thoại tin rằng nó là một con người thực sự hay không.

---

### **Câu 41 (ITE302c_-_SU_2024_-_RE_2577 (40).webp)**
**Câu hỏi:**  
Predictive loops in marketplace models like dating apps are especially susceptible to bias due to

**Danh sách đáp án:**  
- A. fairness quotients  
- B. marketplace forces  
- C. engagement levels  
- D. short feedback cycles  

**Đáp án đúng:** **D. short feedback cycles**  
**Thuộc kiến thức:** *Feedback Loops & Rapid Bias Amplification (Vòng phản hồi ngắn gây khuếch đại định kiến)*  
**Giải thích:**  
Các ứng dụng như hẹn hò có chu kỳ phản hồi cực ngắn (*short feedback cycles - vuốt quẹt liên tục trong vài giây*), khiến thuật toán học củng cố sở thích bề nổi cực nhanh và nhanh chóng bị thiên vị phân biệt đối xử.

---

### **Câu 42 (ITE302c_-_SU_2024_-_RE_2577 (41).webp)**
**Câu hỏi:**  
Why are anonymization and pseudonymization insufficient protection measures against breaches of data privacy and security?

**Danh sách đáp án:**  
- A. They only work in scenarios with particular kinds of personal information.  
- B. They destroy the usefulness of the data.  
- C. They don't integrate well into data science and machine learning workflows.  
- D. They can be broken by combining this data with other publicly available data.  

**Đáp án đúng:** **D. They can be broken by combining this data with other publicly available data.**  
**Thuộc kiến thức:** *Privacy Limitations: De-anonymization & Linkage (Hạn chế của ẩn danh hóa)*  
**Giải thích:**  
Ẩn danh hóa (*anonymization*) và giả danh hóa (*pseudonymization*) không còn an toàn tuyệt đối vì chúng có thể bị phá vỡ thông qua việc liên kết dữ liệu đó với các nguồn dữ liệu mở công khai khác (*combining with other publicly available data*).

---

### **Câu 43 (ITE302c_-_SU_2024_-_RE_2577 (42).webp)**
**Câu hỏi:**  
The Children's Online Privacy Protection Act (COPPA) safeguards the privacy of which age group's personal information?

**Danh sách đáp án:**  
- A. Anyone under 18 years old  
- B. Anyone under 13 years old  
- C. Anyone between 5 and 13 years old  
- D. Anyone between 13 and 18 years old  

**Đáp án đúng:** **B. Anyone under 13 years old**  
**Thuộc kiến thức:** *Data Privacy Regulations: COPPA (Đạo luật Bảo vệ Quyền riêng tư Trực tuyến của Trẻ em)*  
**Giải thích:**  
Luật **COPPA** của Hoa Kỳ quy định nghiêm ngặt việc thu thập thông tin cá nhân trực tuyến của trẻ em **dưới 13 tuổi** (*under 13 years old*), yêu cầu phải có sự đồng ý rõ ràng từ phụ huynh.

---

### **Câu 44 (ITE302c_-_SU_2024_-_RE_2577 (43).webp)**
**Câu hỏi:**  
Why does the trolley problem pose an ethical predicament?

**Danh sách đáp án:**  
- A. You have to make a choice between two scenarios where choosing one leads to loss of life in the other.  
- B. There are so many potential outcomes that it becomes difficult to choose one that is most ethical.  
- C. The moral responsibility is split between you and the person controlling the trolley.  
- D. You as the actor don't have sufficient control over the circumstance.  

**Đáp án đúng:** **A. You have to make a choice between two scenarios where choosing one leads to loss of life in the other.**  
**Thuộc kiến thức:** *Ethical Dilemmas: The Trolley Problem (Nan đề xe gòn trong đạo đức xe tự hành)*  
**Giải thích:**  
Nan đề xe gòn (*Trolley problem*) là bài toán tình thế lưỡng nan vì người đưa ra quyết định buộc phải chọn giữa hai kịch bản bi thảm mà bất kể lựa chọn nào cũng dẫn đến thiệt hại về sinh mạng con người.

---

### **Câu 45 (ITE302c_-_SU_2024_-_RE_2577 (44).webp)**
**Câu hỏi:**  
Which of the following are ways that regulations differ from ethical frameworks? (Select two.)

**Danh sách đáp án:**  
- A. Regulations are often industry led.  
- B. Regulations are flexible in their implementation.  
- C. Regulations have legal enforcement behind them.  
- D. Regulations provide a clear basis for potential litigation.  

**Đáp án đúng:** **C. Regulations have legal enforcement behind them.** và **D. Regulations provide a clear basis for potential litigation.**  
**Thuộc kiến thức:** *Law vs Ethics: Enforceability & Litigation (Sự khác biệt giữa Quy định pháp lý và Khung đạo đức)*  
**Giải thích:**  
Khác với các khung đạo đức chỉ mang tính tự nguyện định hướng, các quy định pháp luật (*Regulations*) có tính cưỡng chế thi hành bằng pháp luật (*legal enforcement*) và cung cấp căn cứ pháp lý rõ ràng cho các vụ kiện tụng (*basis for litigation*).

---

### **Câu 46 (ITE302c_-_SU_2024_-_RE_2577 (45).webp)**
**Câu hỏi:**  
A goal of a fair model's accuracy standards is to

**Danh sách đáp án:**  
- A. minimize the error rate as long as parity is obtained  
- B. minimize the fairness score as long as the error rate isn't affected  
- C. minimize the quality metrics as long as the quantity metrics aren't affected  
- D. minimize the error rate as long as the training data isn't affected  

**Đáp án đúng:** **A. minimize the error rate as long as parity is obtained**  
**Thuộc kiến thức:** *Fairness-Constrained Optimization (Tối ưu hóa độ chính xác dưới ràng buộc công bằng)*  
**Giải thích:**  
Mục tiêu tiêu chuẩn khi xây dựng mô hình công bằng là tối thiểu hóa tỷ lệ sai số (*minimize error rate*) nhưng phải dưới điều kiện thỏa mãn tính cân bằng công bằng giữa các nhóm (*as long as parity is obtained*).

---

### **Câu 47 (ITE302c_-_SU_2024_-_RE_2577 (46).webp)**
**Câu hỏi:**  
A "purposefully biased" algorithm used to identify unfair attributes is known as

**Danh sách đáp án:**  
- A. an aggregate algorithm  
- B. a predictive model  
- C. an adversarial algorithm  
- D. a discriminatory algorithm  

**Đáp án đúng:** **C. an adversarial algorithm**  
**Thuộc kiến thức:** *Adversarial Debiasing / Auditing (Thuật toán đối kháng để phát hiện định kiến)*  
**Giải thích:**  
Thuật toán đối kháng (*adversarial algorithm*) được thiết kế có chủ đích (như trong mô hình Adversarial Debiasing) để cố gắng đoán các thuộc tính nhạy cảm nhằm phát hiện và triệt tiêu các đặc trưng gây thiên vị trong mô hình chính.

---

### **Câu 48 (ITE302c_-_SU_2024_-_RE_2577 (47).webp)**
**Câu hỏi:**  
Fairness is best defined as just treatment without ________

**Danh sách đáp án:**  
- A. prejudice and favoritism  
- B. discrimination and prejudice  
- C. bias and contempt  
- D. favoritism or discrimination  

**Đáp án đúng:** **D. favoritism or discrimination**  
**Thuộc kiến thức:** *Definition of Fairness (Định nghĩa tính Công bằng)*  
**Giải thích:**  
Định nghĩa kinh điển chuẩn xác của tính công bằng (*Fairness*) là sự đối xử đúng đắn, bình đẳng mà không có sự thiên vị hay phân biệt đối xử (*just treatment without favoritism or discrimination*).

---

### **Câu 49 (ITE302c_-_SU_2024_-_RE_2577 (48).webp)**
**Câu hỏi:**  
Which of the following are advantages to adopting standards frameworks like ISO 27000? (Select two.)

**Danh sách đáp án:**  
- A. Technology-specific focus and precise implementation instructions  
- B. Formal certification processes that provide competitive advantage  
- C. Regulatory weight and legal enforcement  
- D. International support, recognition, and involvement  

**Đáp án đúng:** **B. Formal certification processes that provide competitive advantage** và **D. International support, recognition, and involvement**  
**Thuộc kiến thức:** *International Standards: ISO 27000 Series (Bộ tiêu chuẩn quốc tế ISO 27000)*  
**Giải thích:**  
Lợi ích lớn khi áp dụng các bộ tiêu chuẩn như ISO/IEC 27000 là quy trình chứng nhận chính thức giúp tạo lợi thế cạnh tranh (*formal certification / competitive advantage*) và nhận được sự công nhận, hỗ trợ rộng rãi trên phạm vi toàn cầu (*international recognition*).

---

### **Câu 50 (ITE302c_-_SU_2024_-_RE_2577 (49).webp)**
**Câu hỏi:**  
What is the capability caution?

**Danh sách đáp án:**  
- A. We need to take steps to ensure that humans capabilities are not limited by AI growth.  
- B. We need to freeze AI's capabilities at the current state so that we can ensure AI systems won't take over the world.  
- C. We need to remember that we don't know the full extent of what AI systems might become capable of so that we can better plan.  
- D. We need to remember that we know the full extent of what AI systems might become capable of so that we can better plan.  

**Đáp án đúng:** **C. We need to remember that we don't know the full extent of what AI systems might become capable of so that we can better plan.**  
**Thuộc kiến thức:** *Asilomar AI Principles: Capability Caution (Nguyên tắc Thận trọng về Năng lực AI)*  
**Giải thích:**  
Nguyên tắc thận trọng về năng lực (*Capability Caution*) nhắc nhở chúng ta rằng con người chưa thể biết hết giới hạn tối đa mà AI có thể đạt tới trong tương lai, do đó cần phải luôn chủ động lên kế hoạch phòng ngừa rủi ro vượt tầm kiểm soát.

---

### **Câu 51 (ITE302c_-_SU_2024_-_RE_2577 (50).webp)**
**Câu hỏi:**  
Which of the following principle sets are important for the creation of open data that is widely utilized?

**Danh sách đáp án:**  
- A. ISO 27017  
- B. FAIR  
- C. ISO 27001  
- D. FATE  

**Đáp án đúng:** **B. FAIR**  
**Thuộc kiến thức:** *Open Science & Data Management: FAIR Principles (Nguyên tắc dữ liệu mở FAIR)*  
**Giải thích:**  
Nguyên tắc **FAIR** (Findable - Dễ tìm, Accessible - Dễ tiếp cận, Interoperable - Tương tác được, Reusable - Tái sử dụng được) là bộ tiêu chuẩn hướng dẫn quan trọng nhất cho dữ liệu mở toàn cầu.

---

### **Câu 52 (ITE302c_-_SU_2024_-_RE_2577 (51).webp)**
**Câu hỏi:**  
How to you create an ethical organizational culture?

**Danh sách đáp án:**  
- A. Transparency about company values.  
- B. Top-down communication about company values.  
- C. Button-up communication about company values.  
- D. Having documents that describe the company's values.  

**Đáp án đúng:** **A. Transparency about company values.**  
**Thuộc kiến thức:** *Building Ethical Organizational Culture (Xây dựng văn hóa đạo đức tổ chức bằng sự minh bạch)*  
**Giải thích:**  
Xây dựng văn hóa đạo đức bền vững đòi hỏi tính minh bạch và sự cởi mở nhất quán về các giá trị cốt lõi của công ty (*transparency about company values*) trong mọi quyết định và hành động.

---

### **Câu 53 (ITE302c_-_SU_2024_-_RE_2577 (52).webp)**
**Câu hỏi:**  
Which of the following describes the purpose of having an Ethics Board for a data-driven organization?

**Danh sách đáp án:**  
- A. An Ethics Board can help maintain an organization's values-based intentions and increase transparency into how they use data-driven technologies.  
- B. An Ethics Board can help maintain an organization's values-based intentions and decrease the inherent dangers of autonomous technologies.  
- C. An Ethics Board can help maintain an organization's profit margins and increase transparency into how they increase their profits.  
- D. An Ethics Board can increase transparency into how the organization uses AI or autonomous technologies.  

**Đáp án đúng:** **A. An Ethics Board can help maintain an organization's values-based intentions and increase transparency into how they use data-driven technologies.**  
**Thuộc kiến thức:** *AI Governance: Purpose of Ethics Boards (Mục đích của Hội đồng Đạo đức)*  
**Giải thích:**  
Hội đồng Đạo đức (*Ethics Board*) có nhiệm vụ bảo đảm tổ chức duy trì đúng các định hướng dựa trên giá trị nhân văn, đồng thời gia tăng tính minh bạch trong cách thức triển khai và ứng dụng công nghệ dữ liệu.

---

### **Câu 54 (ITE302c_-_SU_2024_-_RE_2577 (53).webp)**
**Câu hỏi:**  
Which of the following is a potential benefit of having an ethical organizational culture?

**Danh sách đáp án:**  
- A. More employees are likely to switch careers.  
- B. Employees will feel a sense of responsibility and loyalty.  
- C. Employees are more likely to listen to their superiors.  
- D. The company will get an increase in stock value.  

**Đáp án đúng:** **B. Employees will feel a sense of responsibility and loyalty.**  
**Thuộc kiến thức:** *Benefits of Ethical Culture (Lợi ích của văn hóa đạo đức: Trách nhiệm và Lòng trung thành)*  
**Giải thích:**  
Một môi trường văn hóa đạo đức lành mạnh giúp nhân viên cảm nhận sâu sắc ý nghĩa công việc, nâng cao tinh thần trách nhiệm và nuôi dưỡng lòng trung thành gắn bó lâu dài với tổ chức (*sense of responsibility and loyalty*).

---

### **Câu 55 (ITE302c_-_SU_2024_-_RE_2577 (54).webp)**
**Câu hỏi:**  
Why is fair competition an important ethical consideration for data-driven technology businesses?

**Danh sách đáp án:**  
- A. Fair competition prevents predatory pricing.  
- B. Fair competition builds user trust in technology as a whole.  
- C. Fair competition provides products choice to users.  
- D. Fair competition provides service choice to users.  

**Đáp án đúng:** **B. Fair competition builds user trust in technology as a whole.**  
**Thuộc kiến thức:** *Tech Market Ethics & Fair Competition (Cạnh tranh lành mạnh tạo dựng niềm tin công nghệ)*  
**Giải thích:**  
Cạnh tranh công bằng ngăn chặn hành vi độc quyền dữ liệu, thúc đẩy sự đổi mới và xây dựng niềm tin vững chắc của người dùng đối với toàn bộ hệ sinh thái công nghệ (*builds user trust in technology as a whole*).

---

### **Câu 56 (ITE302c_-_SU_2024_-_RE_2577 (55).webp)**
**Câu hỏi:**  
Which of the following describes change management?

**Danh sách đáp án:**  
- A. A collective term used to describe how employees are able to voice their concerns to facilitate change in their organization.  
- B. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in fostering an ethical organizational culture.  
- C. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in making organizational change.  
- D. A collective term used to explain how organizations facilitate change in a product after receiving negative feedback.  

**Đáp án đúng:** **C. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in making organizational change.**  
**Thuộc kiến thức:** *Change Management Concepts (Quản trị sự thay đổi trong tổ chức)*  
**Giải thích:**  
Quản trị sự thay đổi (*Change management*) là thuật ngữ tổng thể chỉ mọi phương pháp và quy trình nhằm chuẩn bị, hỗ trợ và dẫn dắt các cá nhân, đội ngũ và tổ chức thực hiện thành công quá trình chuyển đổi (*making organizational change*).

---

### **Câu 57 (ITE302c_-_SU_2024_-_RE_2577 (56).webp)**
**Câu hỏi:**  
Which expression best characterizes what a company or organizational culture is?

**Danh sách đáp án:**  
- A. "This is how we want this done."  
- B. "This is how things are done around here."  
- C. "It is what it is."  
- D. "This is what we're told to do."  

**Đáp án đúng:** **B. "This is how things are done around here."**  
**Thuộc kiến thức:** *Organizational Culture Characteristics (Bản chất của văn hóa doanh nghiệp)*  
**Giải thích:**  
Câu châm ngôn kinh điển mô tả chính xác nhất bản chất của văn hóa tổ chức là: *"This is how things are done around here"* (Đây là cách mọi việc được thực hiện ở nơi này - phản ánh các chuẩn mực hành vi, giá trị và thói quen ăn sâu vào nếp sống doanh nghiệp).

---

### **Câu 58 (ITE302c_-_SU_2024_-_RE_2577 (57).webp)**
**Câu hỏi:**  
Which of the following is an ethical benefit of incorporating fair competition considerations in a data-driven technology ecosystem?

**Danh sách đáp án:**  
- A. Consolidating products and services under a single organization  
- B. Encouraging product or service differentiation  
- C. Lowering product and service costs for the users  
- D. Accelerating investments in research and development  

**Đáp án đúng:** **B. Encouraging product or service differentiation**  
**Thuộc kiến thức:** *Fair Competition in Data-Driven Ecosystems (Khuyến khích sự khác biệt hóa sản phẩm)*  
**Giải thích:**  
Cạnh tranh bình đẳng khuyến khích các công ty tập trung nghiên cứu tạo ra sự khác biệt hóa về sản phẩm/dịch vụ (*product/service differentiation*), mang lại nhiều giải pháp đa dạng và giá trị thực sự cho người tiêu dùng.

---

### **Câu 59 (ITE302c_-_SU_2024_-_RE_2577 (58).webp)**
**Câu hỏi:**  
An ethical impact assessment is ________

**Danh sách đáp án:**  
- A. Focused on the impact of past ethical risks.  
- B. Focused on preventing future problems.  
- C. Focused on identifying the causes of past errors.  
- D. Focused on identifying the causes of future errors.  

**Đáp án đúng:** **B. Focused on preventing future problems.**  
**Thuộc kiến thức:** *Ethical Impact Assessment (EIA) Frameworks (Đánh giá tác động đạo đức: Ngăn ngừa vấn đề tương lai)*  
**Giải thích:**  
Đánh giá tác động đạo đức (Ethical Impact Assessment - EIA) là một quy trình mang tính chủ động đón đầu, tập trung vào việc dự báo và ngăn ngừa các rủi ro, sai sót tiềm ẩn trong tương lai (*preventing future problems*) trước khi triển khai hệ thống.

---

### **Câu 60 (ITE302c_-_SU_2024_-_RE_2577 (59).webp)**
**Câu hỏi:**  
Which of the following presents the most important argument for why we need to consider the impact of AI on labor in the design, development, and deployment of data-driven technology?

**Danh sách đáp án:**  
- A. There is still a need for human workers in human-in-the-loop mechanisms.  
- B. The organization would like to avoid having to deal with union concerns.  
- C. There may be an impact on worker productivity if they are not included in all phases.  
- D. There might be potential labor rights and human rights violations.  

**Đáp án đúng:** **D. There might be potential labor rights and human rights violations.**  
**Thuộc kiến thức:** *AI & The Future of Work: Labor Rights & Human Rights (Quyền lao động và nhân quyền)*  
**Giải thích:**  
Lập luận nhân văn và đạo đức quan trọng nhất khi đánh giá tác động của AI đối với người lao động là nhằm ngăn ngừa nguy cơ vi phạm các quyền cơ bản của người lao động và nhân quyền (*potential labor rights and human rights violations*), tránh việc bóc lột hoặc sa thải bất công vì tự động hóa.
