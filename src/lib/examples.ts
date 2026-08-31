// Super Simple Everyday Examples for All Concepts (Dễ hiểu như cho học sinh lớp 3)
import type { Knowledge } from "../types";

export interface ConceptExample {
  story: string;
  tldr: string;
  icon?: string;
  trapWarning?: string;
}

// Curated high-impact analogies & everyday stories
const CURATED_EXAMPLES: Record<string, ConceptExample> = {
  // --- MLN111 / MLN122 (KTCT & Triết học Mác - Lênin) ---
  "MLN111-CH01": {
    story: "Con người muốn sống thì phải có cơm ăn, áo mặc và nhà ở. Để có những thứ đó, chúng ta bắt buộc phải bắt tay vào cuốc đất trồng lúa, dệt vải, xây nhà. Nếu cả xã hội ngừng lao động sản xuất thì con người không thể tồn tại được.",
    tldr: "Lao động sản xuất là gốc rễ nuôi sống và phát triển toàn bộ xã hội loài người.",
    trapWarning: "Đừng nhầm: Máy móc tự động không tự nhiên sinh ra của cải, chúng chỉ là công cụ do con người tạo ra.",
  },
  "MLN111-CH02": {
    story: "Bạn làm một chiếc bánh kem: Chiếc bánh vừa để bạn ăn ngon miệng (Giá trị sử dụng), vừa có thể mang ra chợ bán lấy 50.000đ (Giá trị trao đổi). Nếu không ai cần ăn bánh kem của bạn thì nó không thể trở thành hàng hóa.",
    tldr: "Hàng hóa luôn có 2 mặt: Công dụng để dùng và Giá trị để đem đi buôn bán đổi chác.",
    trapWarning: "Vật có ích nhưng không do lao động tạo ra hoặc không đem bán (như không khí) thì KHÔNG phải là hàng hóa.",
  },
  "MLN111-CH03": {
    story: "Bạn thuê một người thợ làm việc 8 tiếng một ngày. Trong 4 tiếng đầu, thợ đã làm ra đủ số bánh để bù tiền lương 200k bạn trả. 4 tiếng sau, người thợ tiếp tục làm ra thêm 200k tiền bánh nữa nhưng bạn giữ lại toàn bộ $\rightarrow$ Đó chính là Giá trị thặng dư.",
    tldr: "Giá trị thặng dư là phần công sức của người làm thuê bị nhà tư bản giữ lại làm tiền lời.",
    trapWarning: "Giá trị thặng dư sinh ra từ sức lao động sống của con người, không phải do máy móc tự đẻ ra tiền.",
  },
  "MLN122-CH01": {
    story: "Trái đất tự quay quanh mặt trời dù con người có thích hay không. Quy luật kinh tế và lịch sử cũng vậy: xã hội phát triển theo các quy luật tự nhiên khách quan, không phụ thuộc vào ý muốn chủ quan của bất kỳ ai.",
    tldr: "Thế giới vật chất và quy luật vận động tồn tại khách quan, có trước và quyết định ý thức con người.",
    trapWarning: "Ý thức con người có thể tác động trở lại thế giới, nhưng không thể tạo ra vật chất từ hư vô.",
  },
  "MLN122-CH02": {
    story: "Bạn đun một ấm nước: Nước nóng dần lên từ 20°C lên 99°C (tích lũy về Lượng). Đúng lúc chạm 100°C, nước sôi bùng lên và biến thành hơi nước (biến đổi về Chất). Học tập cũng vậy: mỗi ngày học một ít, đến kỳ thi sẽ thông thái vượt bậc.",
    tldr: "Tích lũy đủ về lượng sẽ dẫn đến sự thay đổi nhảy vọt về chất.",
    trapWarning: "Chưa đủ lượng mà đòi thay đổi chất sẽ bị nôn nóng, đốt cháy giai đoạn dẫn đến thất bại.",
  },

  // --- ITE302c (Ethics in IT & AI) ---
  "deontology": {
    story: "Mẹ dặn: 'Không bao giờ được nói dối!'. Bạn làm vỡ cốc, dù nói thật có thể bị mắng nhưng bạn vẫn nhận lỗi vì biết nói dối là vi phạm nguyên tắc đạo đức. Với Kant, nghĩa vụ và luật lệ là tuyệt đối, không được gian lận dù kết quả có ra sao.",
    tldr: "Làm việc đúng bổn phận và luật lệ; không bao giờ lấy con người làm công cụ lợi dụng.",
    trapWarning: "Dễ nhầm với Vị lợi (Utilitarianism): Kant không quan tâm kết quả có lợi hay hại, chỉ quan tâm hành động có đúng luật không.",
  },
  "utilitarianism": {
    story: "Bác tài xế xe cứu hỏa bật còi hú inh ỏi lúc nửa đêm làm 10 người thức giấc, nhưng xe kịp đưa bệnh nhân đến bệnh viện cứu sống 1 mạng người $\rightarrow$ Hành động đó đúng vì tạo ra lợi ích lớn nhất cho số đông.",
    tldr: "Hành động đúng là hành động đem lại hạnh phúc/lợi ích nhiều nhất cho nhiều người nhất.",
    trapWarning: "Chỉ nhìn vào kết quả tổng thể, đôi khi có thể bỏ qua quyền lợi chính đáng của người thiểu số.",
  },
  "strict-liability": {
    story: "Bạn làm ra chiếc ván trượt điện thông minh bán cho bạn hàng xóm. Dù bạn đã kiểm tra 100 lần không thấy lỗi, nhưng khi bạn hàng xóm trượt thì ván bị chập điện gây ngã trầy chân $\rightarrow$ Theo luật, bạn vẫn phải đền tiền băng bó vì sản phẩm của bạn gây thiệt hại.",
    tldr: "Phải chịu trách nhiệm bồi thường khi sản phẩm bị lỗi gây hại, bất kể bạn có cố ý hay không.",
    trapWarning: "Người kiện không cần chứng minh bạn bất cẩn, chỉ cần chứng minh món đồ bị lỗi làm họ bị thương.",
  },
  "whistleblowing": {
    story: "Bạn làm việc ở xưởng bánh và phát hiện bác quản lý lén dùng sữa hết hạn để làm kem. Bạn đã khuyên can nhưng bác không nghe $\rightarrow$ Bạn quyết định báo ngay cho chú công an an toàn thực phẩm để bảo vệ sức khỏe các em nhỏ.",
    tldr: "Dũng cảm tố cáo hành vi sai trái, nguy hiểm của nội bộ công ty ra ngoài vì an toàn cộng đồng.",
    trapWarning: "Tố cáo vì lợi ích chung khác với việc trả thù cá nhân hay bán bí mật công ty lấy tiền.",
  },
  "copyright-patent": {
    story: "Bạn vẽ một bức tranh Doraemon tuyệt đẹp $\rightarrow$ Bạn tự động có Bản quyền (Copyright), ai in lên áo bán phải xin phép bạn. Còn nếu bạn phát minh ra cái Bút tự động viết chính tả $\rightarrow$ Bạn phải đi đăng ký Bằng sáng chế (Patent) để độc quyền bán trong 20 năm.",
    tldr: "Copyright bảo vệ tác phẩm thể hiện (văn bản, tranh, code). Patent bảo vệ phát minh kỹ thuật mới.",
    trapWarning: "Bản quyền không bảo hộ ý tưởng chung chung, chỉ bảo hộ bài viết/bức vẽ/mã code cụ thể.",
  },
  "selection-bias": {
    story: "Bạn muốn biết cả trường thích ăn kem sô-cô-la hay dâu, nhưng bạn chỉ vào phòng tập của đội bóng rổ gồm 10 bạn toàn thích ăn sô-cô-la để hỏi $\rightarrow$ Kết quả khảo sát bị lệch vì nhóm bạn hỏi không đại diện cho toàn bộ học sinh trong trường.",
    tldr: "Mẫu thu thập dữ liệu bị lệch, không đại diện công bằng cho toàn thể quần thể.",
    trapWarning: "Mô hình AI học dữ liệu lệch sẽ đưa ra quyết định thiên vị bất công cho các nhóm khác.",
  },

  // --- PRM393 (Mobile Development) ---
  "PRM393-CH01": {
    story: "Màn hình điện thoại giống như một sân khấu kịch: Khi bạn mở app, sân khấu dựng màn (`onCreate`); bạn đang xem kịch mà có điện thoại gọi tới, màn kịch tạm dừng (`onPause`); nghe xong quay lại thì kịch diễn tiếp (`onResume`).",
    tldr: "Vòng đời ứng dụng (Lifecycle) giúp app quản lý bộ nhớ và pin nhịp nhàng khi người dùng chuyển đổi app.",
    trapWarning: "Không giải phóng tài nguyên khi app bị ẩn (`onStop`/`onDestroy`) sẽ làm máy bị nóng và hết pin nhanh.",
  },
  "PRM393-CH02": {
    story: "Bạn có danh sách 10.000 bài hát nhưng màn hình chỉ hiển thị được 6 bài một lúc. Thay vì vẽ cả 10.000 cái khung làm máy bị đơ (lag), app chỉ tạo ra 7 cái khung và khi bạn vuốt xuống, khung vừa biến mất ở trên sẽ bay xuống dưới để đựng bài hát mới.",
    tldr: "RecyclerView tái chế khung nhìn để cuộn danh sách siêu mượt mà không tốn RAM điện thoại.",
    trapWarning: "Dùng ScrollView chứa danh sách quá dài sẽ khiến app bị văng (Crash Out of Memory).",
  },
};

export function getSimpleConceptExample(concept?: Knowledge, subjectId?: string): ConceptExample {
  if (!concept) {
    return {
      story: "Hãy liên hệ khái niệm này với một đồ vật hoặc tình huống quen thuộc quanh bạn để nhớ lâu hơn.",
      tldr: "Nắm chắc từ khóa cốt lõi để làm bài nhanh và chuẩn xác.",
    };
  }

  const titleLower = concept.title.toLowerCase();
  const idLower = concept.id.toLowerCase();

  // Check direct key matches
  if (CURATED_EXAMPLES[concept.id]) {
    return CURATED_EXAMPLES[concept.id];
  }
  if (CURATED_EXAMPLES[concept.chapterId]) {
    return CURATED_EXAMPLES[concept.chapterId];
  }

  // Check keyword matches
  if (titleLower.includes("deontology") || titleLower.includes("kant") || titleLower.includes("categorical imperative")) {
    return CURATED_EXAMPLES["deontology"];
  }
  if (titleLower.includes("utilitarian") || titleLower.includes("vị lợi") || titleLower.includes("consequential")) {
    return CURATED_EXAMPLES["utilitarianism"];
  }
  if (titleLower.includes("strict liability") || titleLower.includes("trách nhiệm nghiêm ngặt")) {
    return CURATED_EXAMPLES["strict-liability"];
  }
  if (titleLower.includes("whistleblow") || titleLower.includes("tố giác")) {
    return CURATED_EXAMPLES["whistleblowing"];
  }
  if (titleLower.includes("copyright") || titleLower.includes("patent") || titleLower.includes("sở hữu trí tuệ") || titleLower.includes("trade secret")) {
    return CURATED_EXAMPLES["copyright-patent"];
  }
  if (titleLower.includes("bias") || titleLower.includes("định kiến") || titleLower.includes("selection")) {
    return CURATED_EXAMPLES["selection-bias"];
  }
  if (titleLower.includes("sản xuất") || titleLower.includes("vật chất") || titleLower.includes("lao động")) {
    return CURATED_EXAMPLES["MLN111-CH01"];
  }
  if (titleLower.includes("hàng hóa") || titleLower.includes("tiền tệ") || titleLower.includes("thị trường")) {
    return CURATED_EXAMPLES["MLN111-CH02"];
  }
  if (titleLower.includes("thặng dư") || titleLower.includes("tư bản") || titleLower.includes("tiền công")) {
    return CURATED_EXAMPLES["MLN111-CH03"];
  }
  if (titleLower.includes("chất") && titleLower.includes("lượng")) {
    return CURATED_EXAMPLES["MLN122-CH02"];
  }
  if (titleLower.includes("vật chất") || titleLower.includes("ý thức")) {
    return CURATED_EXAMPLES["MLN122-CH01"];
  }
  if (titleLower.includes("activity") || titleLower.includes("lifecycle") || titleLower.includes("fragment")) {
    return CURATED_EXAMPLES["PRM393-CH01"];
  }
  if (titleLower.includes("recycler") || titleLower.includes("list") || titleLower.includes("adapter")) {
    return CURATED_EXAMPLES["PRM393-CH02"];
  }

  // Dynamic contextual fallback example from concept summary
  const firstSummary = concept.summary[0] || "";
  const firstTrap = concept.traps[0] || "";

  return {
    story: `Tưởng tượng trong cuộc sống hàng ngày: Khi bạn áp dụng "${concept.title.split(" (")[0]}", bạn đang thực hiện quy tắc: ${firstSummary.replace(/^[•\-*]\s*/, "")}`,
    tldr: `Chìa khóa ghi nhớ: Gắn liền "${concept.title.split(" (")[0]}" với đúng định nghĩa thực tế trên.`,
    trapWarning: firstTrap ? `Lưu ý bẫy: ${firstTrap}` : undefined,
  };
}
