// Bilingual Translation & Explanation Helper for StudyQuest
import { findGlossaryTermByKeyword, ITE302C_GLOSSARY } from "./glossary";

export type LanguageMode = "en" | "vi" | "bilingual";

// Common pattern translations for IT & AI Ethics questions & concepts
const COMMON_PHRASE_TRANSLATIONS: Record<string, string> = {
  "which of the following": "Phương án nào sau đây",
  "what is the primary purpose of": "Mục đích chính của",
  "what is the main goal of": "Mục tiêu chính của",
  "a good example of": "Một ví dụ tiêu biểu về",
  "which scenario best describes": "Tình huống nào mô tả đúng nhất",
  "according to the": "Theo như",
  "what shared principle from": "Nguyên tắc chung nào từ",
  "why is": "Tại sao",
  "select two": "Chọn 2 đáp án",
  "select three": "Chọn 3 đáp án",
  "is best defined as": "được định nghĩa chính xác nhất là",
  "refers to": "đề cập đến",
  "in terms of": "xét về mặt",
  "at odds with": "mâu thuẫn / xung đột với",
};

// Curated sentence translations for ITE302c Theory / Concepts
const EXACT_SENTENCE_MAP: Record<string, string> = {
  // Kantian / Deontology
  "Act in such a way that your actions may become a universal law.":
    "Hãy hành động sao cho nguyên tắc hành vi của bạn có thể trở thành một quy luật phổ quát cho toàn xã hội.",
  "Don't treat people as a means to an end; treat them always as an end.":
    "Không bao giờ coi con người chỉ như một công cụ/phương tiện; hãy luôn đối xử với con người như một mục đích tự thân.",
  "Each person must use reason to will moral laws.":
    "Mỗi cá nhân phải sử dụng lý trí và lương tâm để thiết lập các quy luật đạo đức.",
  "Kantian deontology": "Thuyết nghĩa vụ Kant (Đạo đức dựa trên bổn phận và sự tôn trọng con người).",
  "Deontological Ethics": "Đạo đức học nghĩa vụ (Hành vi đúng/sai dựa vào luật lệ và bổn phận, không phụ thuộc vào kết quả).",
  "Deontology": "Thuyết nghĩa vụ (Deontology): Đạo đức xuất phát từ bổn phận và các nguyên tắc đạo đức phổ quát.",

  // Goals
  "accurate, fair and explainable": "Chính xác, Công bằng và Có thể giải thích được (Accurate, Fair, Explainable).",
  "accurate, explainable, and fair": "Chính xác, Có thể giải thích được và Công bằng (Accurate, Explainable, Fair).",

  // Ethical Frameworks
  "Transparency/explainability": "Tính minh bạch và Khả năng giải thích (Transparency & Explainability).",
  "Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.":
    "Các khung đạo đức hướng tới việc giảm thiểu rủi ro đạo đức bằng cách đưa ra các bước hành động cụ thể.",
  "Regulations have legal enforcement behind them.":
    "Các quy định pháp lý có cơ chế cưỡng chế và chế tài bắt buộc của pháp luật.",
  "Regulations provide a clear basis for potential litigation.":
    "Các quy định tạo cơ sở pháp lý rõ ràng cho việc khởi kiện khi có tranh chấp hoặc thiệt hại.",

  // Utilitarianism
  "Utilitarianism": "Thuyết vị lợi (Utilitarianism): Hành động mang lại lợi ích/hạnh phúc lớn nhất cho số đông.",
  "The greatest good for the greatest number": "Lợi ích lớn nhất cho số lượng người nhiều nhất.",

  // Virtue Ethics
  "Virtue ethics": "Đạo đức nhân đức (Virtue Ethics): Tập trung vào phẩm chất và nhân cách của người hành động.",

  // Social Contract
  "Social contract theory": "Thuyết khế ước xã hội: Đạo đức dựa trên sự thỏa thuận và quy tắc chung mà xã hội cùng đồng thuận.",

  // Intellectual Property
  "Copyright": "Bản quyền tác giả: Bảo hộ hình thức thể hiện của tác phẩm (code, tài liệu, văn bản).",
  "Patent": "Bằng sáng chế: Bảo hộ phát minh, giải pháp kỹ thuật mới trong thời hạn 20 năm.",
  "Trade secret": "Bí mật kinh doanh: Thông tin bí mật mang lại lợi thế cạnh tranh, không công khai và không hết hạn.",
  "Fair use": "Sử dụng hợp lý: Cho phép trích dẫn/dùng tài liệu có bản quyền vì mục đích giáo dục, nghiên cứu phi thương mại.",

  // AI & Data
  "Algorithmic bias": "Định kiến thuật toán: Thiên vị/bất công do dữ liệu huấn luyện hoặc thuật toán bị lệch.",
  "Data provenance": "Nguồn gốc dữ liệu: Lịch sử xuất xứ, đường đi và các biến đổi của dữ liệu.",
  "Strict liability": "Trách nhiệm nghiêm ngặt: Trách nhiệm bồi thường dù nhà sản xuất không có lỗi hay bất cẩn.",
  "Whistleblowing": "Tố giác sai phạm: Hành động nhân viên báo cáo sai phạm nội bộ công ty ra ngoài.",
};

const TITLE_TRANSLATIONS: Record<string, string> = {
  "Deontology & Categorical Imperative": "Thuyết Nghĩa Vụ & Mệnh Lệnh Tuyệt Đối (Deontology & Categorical Imperative)",
  "Ethical Frameworks & Common Principles": "Khung Đạo Đức & Các Nguyên Tắc Chung (Ethical Frameworks)",
  "Ethical Model Goals": "Mục Tiêu Của Mô Hình Đạo Đức (Ethical Model Goals)",
  "Utilitarianism & Consequentialism": "Thuyết Vị Lợi & Đạo Đức Hệ Quả (Utilitarianism)",
  "Virtue Ethics & Moral Character": "Đạo Đức Nhân Đức & Phẩm Hạnh (Virtue Ethics)",
  "Social Contract Theory": "Thuyết Khế Ước Xã Hội (Social Contract Theory)",
  "Intellectual Property & Fair Use": "Sở Hữu Trí Tuệ & Sử Dụng Hợp Lý (Intellectual Property)",
  "Trade Secrets & Patents": "Bí Mật Kinh Doanh & Bằng Sáng Chế (Trade Secrets & Patents)",
  "Strict Liability & Legal Duty": "Trách Nhiệm Nghiêm Ngặt & Nghĩa Vụ Pháp Lý (Strict Liability)",
  "Whistleblowing & Reporting": "Tố Giác Sai Phạm Nội Bộ (Whistleblowing)",
  "Algorithmic Bias & Fairness": "Định Kiến Thuật Toán & Sự Công Bằng (Algorithmic Bias)",
  "Data Provenance & Privacy": "Nguồn Gốc Dữ Liệu & Quyền Riêng Tư (Data Provenance)",
  "Asilomar AI Principles": "Bộ 23 Nguyên Tắc AI Asilomar (Asilomar AI Principles)",
  "Narrow AI vs AGI vs ASI": "Phân Cấp AI: Hẹp (ANI), Tổng Quát (AGI), Siêu Trí Tuệ (ASI)",
};

export function translateConceptTitle(title: string): string {
  if (TITLE_TRANSLATIONS[title]) return TITLE_TRANSLATIONS[title];
  for (const [en, vi] of Object.entries(TITLE_TRANSLATIONS)) {
    if (title.toLowerCase().includes(en.toLowerCase())) return vi;
  }
  return title;
}

export function translateConceptSentence(sentence: string): string {
  const trimmed = sentence.trim();
  if (EXACT_SENTENCE_MAP[trimmed]) return EXACT_SENTENCE_MAP[trimmed];

  // If sentence has multiple parts separated by semicolon
  if (trimmed.includes(";")) {
    const parts = trimmed.split(";").map((p) => p.trim()).filter(Boolean);
    const translatedParts = parts.map((part) => {
      const pClean = part.endsWith(".") ? part : part + ".";
      if (EXACT_SENTENCE_MAP[part]) return EXACT_SENTENCE_MAP[part];
      if (EXACT_SENTENCE_MAP[pClean]) return EXACT_SENTENCE_MAP[pClean];
      return translateGeneralEnglish(part);
    });
    return translatedParts.join(" • ");
  }

  return translateGeneralEnglish(trimmed);
}

export function translateGeneralEnglish(text: string): string {
  let result = text;

  // Direct glossary term mapping
  for (const item of ITE302C_GLOSSARY) {
    if (result.toLowerCase() === item.term.toLowerCase()) {
      return `${item.term} (${item.vi}): ${item.desc}`;
    }
  }

  // Common phrase replacements
  for (const [en, vi] of Object.entries(COMMON_PHRASE_TRANSLATIONS)) {
    const reg = new RegExp(en, "gi");
    if (reg.test(result)) {
      result = result.replace(reg, vi);
    }
  }

  // Annotate known terms
  for (const item of ITE302C_GLOSSARY) {
    const reg = new RegExp(`\\b${item.term}\\b`, "gi");
    if (reg.test(result)) {
      result = result.replace(reg, `${item.term} (${item.vi})`);
    }
  }

  return result;
}

export function translateQuestionPrompt(enText: string): string {
  return translateGeneralEnglish(enText);
}
