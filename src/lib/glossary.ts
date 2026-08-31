export interface GlossaryTerm {
  id: string;
  term: string;
  vi: string;
  desc: string;
  keywords: string[];
  trap?: string;
  category: string;
  subjectId?: string;
}

export const ITE302C_GLOSSARY: GlossaryTerm[] = [
  // Ethical Frameworks & Philosophical Theories
  {
    id: "utilitarianism",
    term: "Utilitarianism",
    vi: "Thuyết vị lợi / Đạo đức hệ quả",
    desc: "Đánh giá hành vi dựa trên KẾT QUẢ: Hành động đúng là hành động mang lại lợi ích/hạnh phúc lớn nhất cho số đông người (The greatest good for the greatest number).",
    keywords: ["greatest good", "maximum happiness", "consequences", "utility", "outcomes"],
    trap: "Dễ nhầm với Deontology (bổn phận). Utilitarianism chỉ quan tâm KẾT QUẢ, bất chấp phương tiện.",
    category: "Triết học đạo đức",
    subjectId: "ite302c",
  },
  {
    id: "deontology",
    term: "Deontology / Kantianism",
    vi: "Thuyết nghĩa vụ / Đạo đức bổn phận (Kant)",
    desc: "Đánh giá đạo đức dựa trên NGHĨA VỤ và LUẬT LỆ phổ quát. Hành vi sai luôn là sai, không được dùng người khác làm công cụ (means to an end).",
    keywords: ["duty", "moral obligation", "categorical imperative", "universal law", "never merely as a means"],
    trap: "Khác với Utilitarianism: Dù nói dối mang lại kết quả tốt thì theo Deontology vẫn là phi đạo đức.",
    category: "Triết học đạo đức",
    subjectId: "ite302c",
  },
  {
    id: "virtue-ethics",
    term: "Virtue Ethics",
    vi: "Đạo đức nhân đức / Đạo đức phẩm hạnh (Aristotle)",
    desc: "Tập trung vào NHÂN CÁCH và PHẨM CHẤT của người hành động thay vì quy tắc hay kết quả. Câu hỏi cốt lõi: 'Một người đức hạnh sẽ làm gì trong tình huống này?'.",
    keywords: ["character", "virtue", "moral virtues", "habits", "integrity"],
    trap: "Không đưa ra công thức tính toán kết quả hay danh sách luật cứng nhắc, mà rèn luyện phẩm chất qua thói quen.",
    category: "Triết học đạo đức",
    subjectId: "ite302c",
  },
  {
    id: "social-contract",
    term: "Social Contract Theory",
    vi: "Thuyết khế ước xã hội",
    desc: "Đạo đức xuất phát từ sự THỎA THUẬN/QUY TẮC CHUNG mà các thành viên trong xã hội tự nguyện tuân theo để cùng tồn tại hòa bình.",
    keywords: ["contract", "agreement", "rules of society", "mutual cooperation", "consent"],
    trap: "Dựa trên sự đồng thuận và luật pháp của cộng đồng, khác với nghĩa vụ tuyệt đối của Kant.",
    category: "Triết học đạo đức",
    subjectId: "ite302c",
  },

  // Legal & Professional Responsibilities
  {
    id: "strict-liability",
    term: "Strict Liability",
    vi: "Trách nhiệm nghiêm ngặt / Trách nhiệm khách quan",
    desc: "Trách nhiệm pháp lý bắt buộc bồi thường khi sản phẩm/hệ thống gây hại, DÙ BÊN SẢN XUẤT KHÔNG CÓ LỖI VÀ ĐÃ CẨN TRỌNG TỐI ĐA.",
    keywords: ["without fault", "no negligence required", "defective product", "inherently dangerous"],
    trap: "Người kiện không cần chứng minh nhà sản xuất 'bất cẩn' (negligence), chỉ cần chứng minh sản phẩm bị lỗi gây thiệt hại.",
    category: "Pháp lý & Trách nhiệm",
    subjectId: "ite302c",
  },
  {
    id: "whistleblowing",
    term: "Whistleblowing",
    vi: "Tố giác sai phạm nội bộ",
    desc: "Hành động của nhân viên báo cáo các hành vi bất hợp pháp, nguy hiểm hoặc phi đạo đức trong nội bộ tổ chức ra cơ quan chức năng hoặc công chúng.",
    keywords: ["report illegal acts", "public interest", "expose wrongdoing", "internal/external reporting"],
    trap: "Khác với tiết lộ bí mật thương mại vì mục đích tư lợi; Whistleblowing xuất phát từ trách nhiệm bảo vệ cộng đồng.",
    category: "Pháp lý & Trách nhiệm",
    subjectId: "ite302c",
  },
  {
    id: "due-diligence",
    term: "Due Diligence",
    vi: "Thẩm định cẩn trọng",
    desc: "Quy trình kiểm tra, đánh giá toàn diện trước khi ký kết hợp đồng, mua bán hoặc triển khai hệ thống phần mềm nhằm giảm thiểu rủi ro.",
    keywords: ["investigation", "audit", "reasonable care", "risk assessment"],
    trap: "Không phải là đảm bảo 100% không có lỗi, mà là chứng minh doanh nghiệp đã thực hiện mọi bước kiểm tra hợp lý.",
    category: "Pháp lý & Trách nhiệm",
    subjectId: "ite302c",
  },

  // Intellectual Property (IP)
  {
    id: "copyright",
    term: "Copyright",
    vi: "Bản quyền tác giả",
    desc: "Bảo hộ HÌNH THỨC THỂ HIỆN của ý tưởng (mã nguồn, tài liệu, hình ảnh, văn bản). Tự động có hiệu lực ngay khi tác phẩm được định hình.",
    keywords: ["expression of ideas", "source code", "literary work", "fair use"],
    trap: "Copyright bảo hộ cách viết/thể hiện, KHÔNG bảo hộ thuật toán cốt lõi hay ý tưởng chung.",
    category: "Sở hữu trí tuệ",
    subjectId: "ite302c",
  },
  {
    id: "patent",
    term: "Patent",
    vi: "Bằng sáng chế phát minh",
    desc: "Bảo hộ PHÁT MINH, GIẢI PHÁP KỸ THUẬT có tính mới, sáng tạo và ứng dụng công nghiệp. Độc quyền khai thác trong 20 năm.",
    keywords: ["invention", "20 years", "utility", "novelty", "non-obvious"],
    trap: "Phải đăng ký công khai với cơ quan nhà nước; sau 20 năm sẽ trở thành tài sản công cộng.",
    category: "Sở hữu trí tuệ",
    subjectId: "ite302c",
  },
  {
    id: "trade-secret",
    term: "Trade Secret",
    vi: "Bí mật kinh doanh",
    desc: "Thông tin kinh doanh/kỹ thuật bí mật đem lại lợi thế cạnh tranh (thuật toán công thức bí mật, danh sách khách hàng). Không cần đăng ký, có giá trị vĩnh viễn chừng nào còn giữ kín.",
    keywords: ["confidential information", "competitive advantage", "NDA", "no expiration"],
    trap: "Không được bảo hộ nếu đối thủ tự nghiên cứu ngược (reverse engineering) hoặc phát minh độc lập hợp pháp.",
    category: "Sở hữu trí tuệ",
    subjectId: "ite302c",
  },
  {
    id: "fair-use",
    term: "Fair Use",
    vi: "Sử dụng hợp lý",
    desc: "Quy định cho phép trích dẫn/sử dụng tài liệu có bản quyền trong các trường hợp phi thương mại: giáo dục, nghiên cứu, phê bình, tin tức.",
    keywords: ["educational purpose", "non-profit", "criticism", "parody", "limited portion"],
    trap: "Sử dụng cho mục đích thương mại hoặc sao chép toàn bộ tác phẩm làm giảm giá trị thương mại của bản gốc sẽ bị coi là vi phạm.",
    category: "Sở hữu trí tuệ",
    subjectId: "ite302c",
  },

  // AI & Data Ethics
  {
    id: "transparency-explainability",
    term: "Transparency vs Explainability",
    vi: "Tính minh bạch vs Khả năng giải thích",
    desc: "Transparency: Công khai quy trình, nguồn dữ liệu và cách hệ thống vận hành. Explainability: Khả năng giải thích lý do tại sao AI đưa ra quyết định cụ thể đó cho con người hiểu.",
    keywords: ["transparency", "explainability", "interpretability", "black-box", "auditing"],
    trap: "84-85% các khung đạo đức AI đặt Transparency làm nguyên tắc số 1.",
    category: "Đạo đức AI & Dữ liệu",
    subjectId: "ite302c",
  },
  {
    id: "algorithmic-bias",
    term: "Algorithmic Bias",
    vi: "Định kiến thuật toán",
    desc: "Hiện tượng AI đưa ra các kết quả thiên vị, bất công đối với một nhóm người cụ thể do dữ liệu huấn luyện bị lệch hoặc thiết kế thuật toán có thiên kiến.",
    keywords: ["bias", "unfairness", "training data imbalance", "discrimination"],
    trap: "Không phải do AI có cảm xúc thù ghét, mà do nó học lại các định kiến có sẵn trong lịch sử dữ liệu con người cung cấp.",
    category: "Đạo đức AI & Dữ liệu",
    subjectId: "ite302c",
  },
  {
    id: "data-provenance",
    term: "Data Provenance / Lineage",
    vi: "Nguồn gốc & Lịch sử biến đổi dữ liệu",
    desc: "Hồ sơ ghi nhận nguồn gốc xuất xứ, đường đi và mọi biến đổi của dữ liệu từ lúc thu thập đến lúc đưa vào mô hình AI.",
    keywords: ["origin", "history of data", "audit trail", "chain of custody", "traceability"],
    trap: "Cốt lõi để phục vụ việc kiểm toán (auditing) và truy trách nhiệm khi mô hình xảy ra sai sót.",
    category: "Đạo đức AI & Dữ liệu",
    subjectId: "ite302c",
  },
  {
    id: "disparate-impact",
    term: "Disparate Impact vs Disparate Treatment",
    vi: "Tác động bất bình đẳng vs Đối xử phân biệt",
    desc: "Disparate Impact: Chính sách có vẻ trung lập nhưng kết quả thực tế lại gây bất lợi cho nhóm thiểu số. Disparate Treatment: Cố ý phân biệt đối xử rõ ràng.",
    keywords: ["disparate impact", "neutral policy with biased outcome", "disparate treatment", "intentional"],
    trap: "Disparate Impact không cần có ý định xấu, nhưng vẫn vi phạm pháp luật nếu không có lý do công việc chính đáng.",
    category: "Đạo đức AI & Dữ liệu",
    subjectId: "ite302c",
  },
  {
    id: "asilomar-ai-principles",
    term: "Asilomar AI Principles",
    vi: "Bộ 23 nguyên tắc AI Asilomar (2017)",
    desc: "Bộ nguyên tắc phát triển AI an toàn hàng đầu thế giới với 5 trụ cột: Safety, Responsibility, Human Control, Privacy, Common Good.",
    keywords: ["23 principles", "Safety", "Human control", "Race avoidance", "Common good"],
    trap: "Gồm 3 nhóm: Nghiên cứu, Đạo đức & Quyền con người, và AI dài hạn / Siêu trí tuệ.",
    category: "Đạo đức AI & Dữ liệu",
    subjectId: "ite302c",
  },
  {
    id: "narrow-general-super-ai",
    term: "Narrow AI vs AGI vs Superintelligence",
    vi: "AI hẹp (ANI) vs AI tổng quát (AGI) vs Siêu trí tuệ (ASI)",
    desc: "Narrow AI (ANI): Chỉ giải quyết 1 tác vụ cụ thể (hiện tại). AGI: Trí tuệ tương đương con người mọi lĩnh vực. ASI: Vượt xa mọi trí tuệ con người.",
    keywords: ["Narrow AI (ANI)", "General AI (AGI)", "Superintelligence (ASI)"],
    trap: "'Basic AI' không phải là một thuật ngữ chuẩn trong phân loại ANI - AGI - ASI.",
    category: "Đạo đức AI & Dữ liệu",
    subjectId: "ite302c",
  },

  // Security & Malware Types
  {
    id: "malware-types",
    term: "Virus vs Spyware vs Ransomware vs Trojan",
    vi: "Phân biệt các loại mã độc",
    desc: "Virus: Tự nhân bản & lây nhiễm file. Spyware: Bí mật theo dõi thu thập hành vi. Ransomware: Mã hóa tống tiền đòi tiền chuộc. Trojan: Giả dạng phần mềm sạch.",
    keywords: ["Virus = Infect/Replicate", "Spyware = Monitor/Spy", "Ransomware = Encrypt/Ransom", "Trojan = Disguise/Backdoor"],
    trap: "Nhớ mẹo theo từ gốc tiếng Anh: Spy = Gián điệp, Ransom = Tiền chuộc, Trojan = Ngựa thành Troy ngụy trang.",
    category: "An ninh mạng",
    subjectId: "ite302c",
  },
  {
    id: "cognitive-biases",
    term: "Selection, Confirmation & Anchoring Bias",
    vi: "Các loại thiên kiến nhận thức",
    desc: "Selection Bias: Mẫu không đại diện tổng thể. Confirmation Bias: Chỉ tin thông tin củng cố định kiến cũ. Anchoring Bias: Bị neo tâm lý bởi thông tin đầu tiên.",
    keywords: ["Selection bias = unrepresentative sample", "Confirmation bias = seek confirming evidence", "Anchoring bias = fixed on first number"],
    trap: "Rất hay gặp trong đề thi phân tích dữ liệu huấn luyện mô hình AI.",
    category: "Đạo đức AI & Dữ liệu",
    subjectId: "ite302c",
  },
];

export function searchGlossary(query: string, subjectId?: string): GlossaryTerm[] {
  const q = query.trim().toLowerCase();
  let pool = ITE302C_GLOSSARY;
  if (subjectId) {
    pool = pool.filter((item) => !item.subjectId || item.subjectId === subjectId.toLowerCase());
  }
  if (!q) return pool;

  return pool.filter(
    (item) =>
      item.term.toLowerCase().includes(q) ||
      item.vi.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
  );
}

export function findGlossaryTermByKeyword(text: string): GlossaryTerm | undefined {
  const lower = text.toLowerCase();
  return ITE302C_GLOSSARY.find((item) => {
    if (lower.includes(item.term.toLowerCase())) return true;
    return item.keywords.some((kw) => lower.includes(kw.toLowerCase()));
  });
}
