import { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  AlertTriangle,
  Award,
  BookOpen,
  Bot,
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Crown,
  DoorOpen,
  Flame,
  Gamepad2,
  HelpCircle,
  Home,
  KeyRound,
  Landmark,
  Languages,
  Layers,
  Lightbulb,
  LockKeyhole,
  Map,
  RotateCcw,
  ScrollText,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Skull,
  Smartphone,
  Sparkles,
  Star,
  Swords,
  Target,
  Trophy,
  Volume2,
  VolumeX,
  X,
  Zap,
} from "lucide-react";
import type { Question, SubjectData, SubjectManifest } from "./types";
import { createQuiz, gradeAnswer, shuffle } from "./lib/quiz";
import {
  calculateLevelInfo,
  calculateStars,
  getTotalXP,
  loadProgress,
  loadStreak,
  markLessonCompleted,
  recordDailyActivity,
  saveProgress,
  updateProgress,
  type ProgressStore,
} from "./lib/progress";
import { allCheckpointsPassed, buildLessonSteps, checkpointStats, highlightKeywords, lessonKeywords } from "./lib/lesson";
import { sound } from "./lib/sound";
import { translateConceptSentence, translateConceptTitle, translateQuestionPrompt } from "./lib/translate";
import { getSimpleConceptExample } from "./lib/examples";

const DATA = (p: string) => `${import.meta.env.BASE_URL}data/${p}`;

function useManifest() {
  const [d, setD] = useState<SubjectManifest[]>([]);
  useEffect(() => {
    fetch(DATA("manifest.json"))
      .then((r) => r.json())
      .then(setD);
  }, []);
  return d;
}

function useSubject(id?: string) {
  const [d, setD] = useState<SubjectData>();
  useEffect(() => {
    if (id) {
      fetch(DATA(`${id}.json`))
        .then((r) => r.json())
        .then(setD);
    }
  }, [id]);
  return d;
}

export function SubjectIcon({ name, size = 24, className }: { name?: string; size?: number; className?: string }) {
  switch (name) {
    case "ScrollText":
      return <ScrollText size={size} className={className} />;
    case "Landmark":
      return <Landmark size={size} className={className} />;
    case "Bot":
      return <Bot size={size} className={className} />;
    case "Smartphone":
      return <Smartphone size={size} className={className} />;
    case "Compass":
      return <Compass size={size} className={className} />;
    case "Layers":
      return <Layers size={size} className={className} />;
    default:
      return <BookOpen size={size} className={className} />;
  }
}

function Stars({ n, max = 3, size = 16 }: { n: number; max?: number; size?: number }) {
  return (
    <span className="stars" aria-label={`${n} sao`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={i < n ? "star-active" : "star-inactive"}
          fill={i < n ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(sound.isMuted());
  const [progress] = useState(loadProgress);
  const [streakInfo] = useState(loadStreak);
  const totalStars = useMemo(() => Object.values(progress).reduce((a, p) => a + p.stars, 0), [progress]);
  const totalXP = useMemo(() => getTotalXP(progress), [progress]);
  const levelInfo = useMemo(() => calculateLevelInfo(totalXP), [totalXP]);

  const handleToggleSound = () => {
    const isNowMuted = sound.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <div className="game-wrapper">
      <header className="game-hud-header">
        <Link to="/" onClick={() => sound.playClick()} className="brand">
          <div className="brand-crest">
            <Shield className="crest-shield" />
            <span className="brand-crest-text">SQ</span>
          </div>
          <div className="brand-title">
            <span className="brand-name">STUDYQUEST</span>
            <small className="brand-tagline">
              <Sparkles size={10} /> CHINH PHỤC TRI THỨC RPG
            </small>
          </div>
        </Link>

        <nav className="game-hud-nav">
          <Link to="/" onClick={() => sound.playClick()} className="nav-item">
            <Home size={16} />
            <span>Trang chủ</span>
          </Link>

          <div className="hud-badge streak-badge" title="Chuỗi ngày học tập liên tục">
            <Flame size={16} className="pulse-flame" />
            <span>{streakInfo.streak > 0 ? `${streakInfo.streak} ngày` : "Khởi đầu"}</span>
          </div>

          <div className="hud-badge star-badge" title="Tổng số sao vượt ải thu thập">
            <Star size={16} fill="currentColor" />
            <span>{totalStars}</span>
          </div>

          <div className="hud-player-profile">
            <div className="hud-avatar">
              <Crown size={14} className="avatar-crown" />
              <span>{levelInfo.level}</span>
            </div>
            <div className="hud-exp">
              <div className="exp-label">
                <span>LVL {levelInfo.level}</span>
                <span className="exp-numbers">
                  {levelInfo.currentLevelXP.toLocaleString()} / {levelInfo.nextLevelXP.toLocaleString()} XP
                </span>
              </div>
              <div className="exp-bar">
                <div className="exp-fill" style={{ width: `${levelInfo.progressPercent}%` }} />
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`sound-toggle ${muted ? "muted" : "active"}`}
            onClick={handleToggleSound}
            title={muted ? "Bật âm thanh" : "Tắt âm thanh"}
            aria-label={muted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="game-footer">
        <div className="footer-content">
          <p>
            StudyQuest • <ShieldCheck size={14} /> Learning quality &gt; gameplay &gt; visual effect
          </p>
          <small>Hệ thống học tập Game RPG tối ưu trí nhớ dài hạn &amp; tư duy khái niệm</small>
        </div>
      </footer>
    </div>
  );
}

function Dashboard() {
  const manifest = useManifest();
  const [progress] = useState(loadProgress);
  const [streakInfo] = useState(loadStreak);
  const totalQuestions = manifest.reduce((a, s) => a + s.stats.questions, 0);
  const totalXP = useMemo(() => getTotalXP(progress), [progress]);
  const levelInfo = useMemo(() => calculateLevelInfo(totalXP), [totalXP]);

  return (
    <Shell>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={14} /> PERSONAL LEARNING ADVENTURE
          </div>
          <h1>
            Biến mỗi bài học
            <br />
            thành một <em>cuộc phiêu lưu.</em>
          </h1>
          <p>
            Học concept cốt lõi, thám hiểm thế giới tri thức, vượt các cạm bẫy câu hỏi và chinh phục Boss cuối chương.
          </p>
          <div className="hero-actions">
            <a href="#worlds" onClick={() => sound.playClick()} className="btn primary glow-btn">
              <Gamepad2 size={18} /> Bắt đầu hành trình
            </a>
            <div className="hero-streak-pill">
              <Flame size={16} />{" "}
              <span>{streakInfo.streak > 0 ? `Streak ${streakInfo.streak} ngày` : "Khởi đầu hành trình mới"}</span>
            </div>
          </div>
        </div>

        <div className="hero-orb-container">
          <div className="orb">
            <div className="orb-inner">
              <Trophy size={48} className="orb-trophy" />
              <div className="orb-level-badge">
                <Crown size={14} /> LEVEL {levelInfo.level}
              </div>
              <b>{levelInfo.title}</b>
              <span>{levelInfo.totalXP.toLocaleString()} XP tích lũy</span>
            </div>
            <div className="orb-ring ring-1" />
            <div className="orb-ring ring-2" />
          </div>
        </div>
      </section>

      <section id="worlds" className="worlds-section">
        <div className="section-title">
          <div>
            <span className="section-tag">
              <Target size={14} /> CHỌN THẾ GIỚI
            </span>
            <h2>Bốn vùng đất tri thức</h2>
          </div>
          <p className="section-stats-summary">
            <ShieldCheck size={15} /> {totalQuestions.toLocaleString("vi")} câu hỏi đã chuẩn hóa
          </p>
        </div>

        <div className="world-grid">
          {manifest.map((s, i) => (
            <Link
              className="world-card"
              style={{ "--accent": s.color } as React.CSSProperties}
              to={`/world/${s.id}`}
              onClick={() => sound.playClick()}
              key={s.id}
            >
              <div className="world-card-glow" />
              <div className="world-header-row">
                <div className="world-icon-frame">
                  <SubjectIcon name={s.icon} size={28} />
                </div>
                <div className="world-rank-tag">
                  <Compass size={12} /> WORLD {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <h3>{s.code}</h3>
              <p className="world-desc">{s.name}</p>

              <div className="world-stats">
                <span>
                  <Map size={12} /> <b>{s.stats.chapters}</b> vùng
                </span>
                <span>
                  <HelpCircle size={12} /> <b>{s.stats.questions}</b> câu hỏi
                </span>
                <span>
                  <Sparkles size={12} /> <b>{s.stats.concepts}</b> concept
                </span>
              </div>

              <div className="enter">
                <span>Khám phá thế giới</span>
                <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="features">
        <article className="feature-card">
          <div className="feature-icon-frame">
            <ShieldCheck size={24} />
          </div>
          <div className="feature-text">
            <b>Chỉ câu đã kiểm định</b>
            <span>1.240 câu clean được lọc nhiễu trong chế độ chuẩn</span>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-icon-frame">
            <Swords size={24} />
          </div>
          <div className="feature-text">
            <b>Boss cuối chương</b>
            <span>Kiểm tra độ phủ concept và phản xạ nhận diện bẫy</span>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-icon-frame">
            <RotateCcw size={24} />
          </div>
          <div className="feature-text">
            <b>Học từ lỗi sai</b>
            <span>Hệ thống phân tích điểm yếu đưa bạn trở lại đúng kiến thức hổng</span>
          </div>
        </article>
      </section>
    </Shell>
  );
}

function FreeQuizArena({
  questions,
  onFinish,
}: {
  questions: Question[];
  onFinish: (score: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [combo, setCombo] = useState(0);
  const [langMode, setLangMode] = useState<"en" | "vi" | "bilingual">("bilingual");

  const q = questions[idx];
  if (!q) return null;

  const isRight = gradeAnswer(selected, q.correctAnswerIds);

  const toggle = (x: string) => {
    if (checked) return;
    sound.playClick();
    setSelected((s) => (q.type === "single" ? [x] : s.includes(x) ? s.filter((y) => y !== x) : [...s, x]));
  };

  const handleConfirm = () => {
    setChecked(true);
    if (isRight) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      sound.playCorrect(nextCombo);
    } else {
      setCombo(0);
      sound.playWrong();
    }
  };

  const next = () => {
    sound.playClick();
    const n = correct + (isRight ? 1 : 0);
    if (idx === questions.length - 1) {
      onFinish(Math.round((n / questions.length) * 100));
    } else {
      setCorrect(n);
      setIdx(idx + 1);
      setSelected([]);
      setChecked(false);
    }
  };

  const translatedPrompt = translateQuestionPrompt(q.question);

  return (
    <section className="battle-arena">
      <div className="battle-hud-top">
        <div className="battle-mode-title">
          <Swords size={16} /> ĐẤU TRƯỜNG TỰ DO
        </div>

        {combo >= 2 && (
          <div className="combo-counter pulse-combo">
            <Flame size={16} />
            <span>COMBO x{combo}</span>
          </div>
        )}

        <div className="battle-counter">
          <b>{idx + 1}</b> / {questions.length}
        </div>
      </div>

      <div className="hp-bar-frame">
        <div className="hp-fill" style={{ width: `${(idx / questions.length) * 100}%` }} />
      </div>

      <div className="question-card">
        <div className="lang-switcher-row">
          <div className="question-meta-row" style={{ margin: 0 }}>
            <span className="difficulty-pill">
              <Target size={12} /> ĐỘ KHÓ {q.difficulty}
            </span>
            <span className="question-type-pill">
              {q.type === "multiple" ? `CHỌN ${q.requiredAnswers} ĐÁP ÁN` : "CHỌN 1 ĐÁP ÁN"}
            </span>
          </div>

          <div className="lang-switcher">
            <button
              className={`lang-btn ${langMode === "en" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLangMode("en");
              }}
              title="Xem câu hỏi gốc Tiếng Anh"
            >
              EN
            </button>
            <button
              className={`lang-btn ${langMode === "vi" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLangMode("vi");
              }}
              title="Dịch câu hỏi sang Tiếng Việt"
            >
              VI
            </button>
            <button
              className={`lang-btn ${langMode === "bilingual" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLangMode("bilingual");
              }}
              title="Chế độ Song ngữ Anh - Việt"
            >
              <Languages size={13} /> Song ngữ
            </button>
          </div>
        </div>

        <div className="question-title-container">
          <h2 className="question-title">{langMode === "vi" ? translatedPrompt : q.question}</h2>

          {langMode === "bilingual" && (
            <div className="bilingual-translation-box">
              <div className="bilingual-tag">
                <Languages size={12} /> BẢN DỊCH &amp; GIẢI NGHĨA TIẾNG VIỆT:
              </div>
              <p className="bilingual-text">{translatedPrompt}</p>
            </div>
          )}
        </div>

        <div className="options-grid">
          {q.options.map((o) => {
            const isSelected = selected.includes(o.id);
            const isAnswerCorrect = q.correctAnswerIds.includes(o.id);
            const showCorrect = checked && isAnswerCorrect;
            const showWrong = checked && isSelected && !isAnswerCorrect;

            return (
              <button
                onClick={() => toggle(o.id)}
                className={`option-btn ${isSelected ? "selected" : ""} ${showCorrect ? "correct" : ""} ${
                  showWrong ? "wrong" : ""
                }`}
                key={o.id}
                disabled={checked}
              >
                <div className="option-crest">
                  <span>{o.id}</span>
                </div>
                <span className="option-text">{o.text}</span>
                {showCorrect && <CheckCircle2 size={18} className="option-status-icon ok" />}
                {showWrong && <ShieldAlert size={18} className="option-status-icon bad" />}
              </button>
            );
          })}
        </div>

        {checked && (
          <div className={`answer-feedback-banner ${isRight ? "victory" : "defeat"}`}>
            <div className="feedback-header">
              {isRight ? (
                <>
                  <CheckCircle2 size={22} className="feedback-icon ok" />
                  <div>
                    <b>CHÍNH XÁC! TẤN CÔNG THÀNH CÔNG!</b>
                    <p>Đáp án đúng: {q.correctAnswerIds.join(", ")}</p>
                  </div>
                </>
              ) : (
                <>
                  <ShieldAlert size={22} className="feedback-icon bad" />
                  <div>
                    <b>CHƯA CHÍNH XÁC! ĐÃ BỊ DÍNH BẪY!</b>
                    <p>Đáp án chính xác phải là: {q.correctAnswerIds.join(", ")}</p>
                  </div>
                </>
              )}
            </div>

            {q.explanation && (
              <div className="tactical-debrief">
                <div className="debrief-label">
                  <Lightbulb size={14} /> GIẢI MÃ BÍ KÍP &amp; PHÂN TÍCH TÌNH HUỐNG:
                </div>
                <p>{q.explanation}</p>
              </div>
            )}
          </div>
        )}

        <div className="action-row">
          {!checked ? (
            <button
              disabled={
                q.type === "single"
                  ? selected.length !== 1
                  : selected.length !== (q.requiredAnswers || 2)
              }
              className="btn primary"
              onClick={handleConfirm}
            >
              <Swords size={18} /> Xác nhận đáp án
            </button>
          ) : (
            <button className="btn primary" onClick={next}>
              {idx === questions.length - 1 ? (
                <>
                  <Trophy size={18} /> Xem kết quả lượt luyện tập
                </>
              ) : (
                <>
                  Câu kế tiếp <ChevronRight size={18} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function FreeStudyZone({ data }: { data: SubjectData }) {
  const [activeSubTab, setActiveSubTab] = useState<"codex" | "practice">("codex");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [practiceConfig, setPracticeConfig] = useState<{
    chapterId: string;
    count: number;
    difficulty: string;
  }>({
    chapterId: "all",
    count: 10,
    difficulty: "all",
  });
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceScore, setPracticeScore] = useState<number | null>(null);

  const filteredConcepts = useMemo(() => {
    let list = data.knowledge;
    if (selectedChapter !== "all") {
      list = list.filter((k) => k.chapterId === selectedChapter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (k) =>
          k.title.toLowerCase().includes(q) ||
          k.summary.some((s) => s.toLowerCase().includes(q)) ||
          lessonKeywords(k).some((w) => w.toLowerCase().includes(q))
      );
    }
    return list;
  }, [data.knowledge, selectedChapter, searchQuery]);

  const practiceQuestions = useMemo(() => {
    let pool = data.questions;
    if (practiceConfig.chapterId !== "all") {
      pool = pool.filter((q) => q.chapterId === practiceConfig.chapterId);
    }
    if (practiceConfig.difficulty !== "all") {
      pool = pool.filter((q) => q.difficulty === Number(practiceConfig.difficulty));
    }
    return shuffle(pool).slice(0, practiceConfig.count);
  }, [data.questions, practiceConfig]);

  if (isPracticing) {
    return (
      <div className="free-practice-session">
        <div className="free-practice-header">
          <button
            className="btn ghost back-to-free-btn"
            onClick={() => {
              sound.playClick();
              setIsPracticing(false);
              setPracticeScore(null);
            }}
          >
            <ChevronLeft size={16} /> Thoát Luyện Tập Tự Do
          </button>
          <span className="free-practice-badge">
            <Sparkles size={14} /> CHẾ ĐỘ LUYỆN TẬP TỰ DO (KHÔNG TÍNH SAO KHÓA ẢI)
          </span>
        </div>

        {practiceScore !== null ? (
          <div className="free-practice-result-card">
            <Trophy size={48} className="result-trophy-icon" />
            <h2>Hoàn thành Luyện tập Tự do!</h2>
            <div className="free-result-score">
              <span>Độ chính xác:</span>
              <b>{practiceScore}%</b>
            </div>
            <p>
              Bạn đã hoàn thành lượt luyện tập tự do {practiceQuestions.length} câu.
            </p>
            <div className="result-actions" style={{ display: "flex", gap: "10px" }}>
              <button
                className="btn primary"
                onClick={() => {
                  sound.playClick();
                  setPracticeScore(null);
                }}
              >
                <RotateCcw size={16} /> Luyện tập lượt mới
              </button>
              <button
                className="btn ghost"
                onClick={() => {
                  sound.playClick();
                  setIsPracticing(false);
                  setPracticeScore(null);
                }}
              >
                Quay lại Thư tịch
              </button>
            </div>
          </div>
        ) : (
          <FreeQuizArena
            questions={practiceQuestions}
            onFinish={(score) => setPracticeScore(score)}
          />
        )}
      </div>
    );
  }

  return (
    <section className="free-study-zone">
      <div className="free-study-subnav">
        <button
          className={`free-subnav-btn ${activeSubTab === "codex" ? "active" : ""}`}
          onClick={() => {
            sound.playClick();
            setActiveSubTab("codex");
          }}
        >
          <BookOpen size={16} /> Thư Viện Bí Kíp ({data.knowledge.length} Khái niệm)
        </button>
        <button
          className={`free-subnav-btn ${activeSubTab === "practice" ? "active" : ""}`}
          onClick={() => {
            sound.playClick();
            setActiveSubTab("practice");
          }}
        >
          <Swords size={16} /> Đấu Trường Tự Do ({data.stats.clean} Câu hỏi)
        </button>
      </div>

      {activeSubTab === "codex" ? (
        <div className="free-codex-container">
          <div className="codex-controls">
            <div className="codex-search-input">
              <Search size={16} />
              <input
                type="text"
                placeholder="Tìm kiếm bí kíp, từ khóa, khái niệm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="codex-chapter-filter">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
              >
                <option value="all">Tất cả các chương ({data.chapters.length} chương)</option>
                {data.chapters.map((ch, idx) => (
                  <option key={ch.id} value={ch.id}>
                    Chương {idx + 1}: {ch.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="codex-grid">
            {filteredConcepts.length === 0 ? (
              <div className="empty-codex">
                <Search size={36} />
                <p>Không tìm thấy khái niệm phù hợp với từ khóa "{searchQuery}"</p>
              </div>
            ) : (
              filteredConcepts.map((item) => {
                const viTitle = translateConceptTitle(item.title);
                return (
                  <div key={item.id} className="codex-concept-card">
                    <div className="codex-card-header">
                      <div className="concept-id-tag">
                        <KeyRound size={12} /> {item.chapterId}
                      </div>
                      <Link
                        to={`/world/${data.id}/stage/${encodeURIComponent(item.chapterId)}`}
                        onClick={() => sound.playClick()}
                        className="study-stage-link"
                      >
                        Vào học ải này <ChevronRight size={13} />
                      </Link>
                    </div>

                    <h3 className="concept-card-title">{item.title}</h3>
                    {viTitle !== item.title && (
                      <span className="concept-card-vi-tag">
                        <Languages size={12} /> {viTitle}
                      </span>
                    )}

                    <div className="concept-card-body">
                      {item.summary.map((line, lIdx) => {
                        const viLine = translateConceptSentence(line);
                        return (
                          <div key={lIdx} className="codex-bullet-item">
                            <p className="en-line">• {line}</p>
                            {viLine !== line && (
                              <p className="vi-line">↳ <b>Dịch:</b> {viLine}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {(() => {
                      const kws = lessonKeywords(item);
                      if (!kws.length) return null;
                      return (
                        <div className="codex-keywords-row">
                          <small><Sparkles size={11} /> TỪ KHÓA:</small>
                          <div className="loot-tags">
                            {kws.map((kw, kIdx) => (
                              <span key={kIdx} className="loot-chip">
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <div className="free-practice-setup-card">
          <div className="practice-setup-header">
            <div className="setup-icon-circle">
              <Swords size={28} />
            </div>
            <div>
              <h3>Tùy Chọn Đấu Trường Tự Do</h3>
              <p>Luyện tập không giới hạn theo chương hoặc tổng hợp toàn bộ môn học</p>
            </div>
          </div>

          <div className="setup-fields-grid">
            <div className="setup-field">
              <label>Phạm vi chương kiến thức:</label>
              <select
                value={practiceConfig.chapterId}
                onChange={(e) =>
                  setPracticeConfig((c) => ({ ...c, chapterId: e.target.value }))
                }
              >
                <option value="all">Toàn bộ môn học ({data.stats.clean} câu hỏi)</option>
                {data.chapters.map((ch, idx) => (
                  <option key={ch.id} value={ch.id}>
                    Chương {idx + 1}: {ch.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="setup-field">
              <label>Số lượng câu hỏi:</label>
              <div className="count-selector-btns">
                {[5, 10, 20, 30].map((num) => (
                  <button
                    key={num}
                    className={`count-btn ${practiceConfig.count === num ? "active" : ""}`}
                    onClick={() => setPracticeConfig((c) => ({ ...c, count: num }))}
                  >
                    {num} câu
                  </button>
                ))}
              </div>
            </div>

            <div className="setup-field">
              <label>Độ khó mục tiêu:</label>
              <select
                value={practiceConfig.difficulty}
                onChange={(e) =>
                  setPracticeConfig((c) => ({ ...c, difficulty: e.target.value }))
                }
              >
                <option value="all">Tất cả mức độ</option>
                <option value="easy">Dễ (Easy)</option>
                <option value="medium">Trung bình (Medium)</option>
                <option value="hard">Nâng cao (Hard)</option>
              </select>
            </div>
          </div>

          <div className="setup-footer">
            <button
              className="btn primary start-free-btn"
              onClick={() => {
                sound.playClick();
                setIsPracticing(true);
                setPracticeScore(null);
              }}
            >
              <Swords size={18} /> Bắt đầu Luyện tập Tự do ({practiceQuestions.length} câu)
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function World() {
  const { id } = useParams();
  const data = useSubject(id);
  const [progress] = useState(loadProgress);
  const [worldMode, setWorldMode] = useState<"campaign" | "free">("campaign");
  const [lockedNotice, setLockedNotice] = useState<{
    stageNum: number;
    stageTitle: string;
    prevStageNum: number;
    prevStageTitle: string;
  } | null>(null);

  if (!data) {
    return (
      <Shell>
        <div className="loading">
          <Compass size={32} className="spin-icon" />
          <p>Đang mở cổng dịch chuyển thế giới...</p>
        </div>
      </Shell>
    );
  }

  const earnedStars = Object.keys(progress)
    .filter((k) => k.startsWith(`${data.id}:`))
    .reduce((a, k) => a + progress[k].stars, 0);

  return (
    <Shell>
      <Link to="/" onClick={() => sound.playClick()} className="back-link">
        <ChevronLeft size={18} /> Tất cả thế giới
      </Link>

      <section className="world-head" style={{ "--accent": data.color } as React.CSSProperties}>
        <div className="world-head-content">
          <div className="eyebrow">
            <Compass size={15} /> BẢN ĐỒ THÁM HIỂM (ADVENTURE MAP)
          </div>
          <div className="world-title-row">
            <div className="world-crest-icon">
              <SubjectIcon name={data.icon} size={36} />
            </div>
            <h1>{data.code}</h1>
          </div>
          <p>
            {data.name} • <ShieldCheck size={14} /> {data.stats.clean} câu clean • <Sparkles size={14} />{" "}
            {data.stats.concepts} concept
          </p>
        </div>

        <div className="world-score-badge">
          <div className="score-stars-header">
            <Star size={20} fill="#fbbf24" />
            <b>{earnedStars}</b>
          </div>
          <span>SAO ĐÃ THU THẬP</span>
        </div>
      </section>

      <div className="mode-tabs">
        <button
          className={`mode-tab ${worldMode === "campaign" ? "active" : ""}`}
          onClick={() => {
            sound.playClick();
            setWorldMode("campaign");
          }}
        >
          <Gamepad2 size={16} /> Chiến dịch Vượt ải
        </button>
        <button
          className={`mode-tab ${worldMode === "free" ? "active" : ""}`}
          onClick={() => {
            sound.playClick();
            setWorldMode("free");
          }}
        >
          <BookOpen size={16} /> Học Tự Do (Thư tịch &amp; Luyện tập)
        </button>
      </div>

      {worldMode === "free" ? (
        <FreeStudyZone data={data} />
      ) : (
        <>
          {lockedNotice && (
            <div className="locked-stage-banner">
              <div className="locked-stage-banner-left">
                <LockKeyhole size={22} />
                <div>
                  <b>Ải {lockedNotice.stageNum} ({lockedNotice.stageTitle}) đang bị phong ấn!</b>
                  <div>
                    Lý do: Bạn cần vượt qua <b>Ải {lockedNotice.prevStageNum} ({lockedNotice.prevStageTitle})</b> với tối thiểu 1 sao (đạt $\ge 70\%$ độ chính xác) để khai mở ải này.
                  </div>
                </div>
              </div>
              <button className="dismiss-banner-btn" onClick={() => setLockedNotice(null)}>
                Đã hiểu
              </button>
            </div>
          )}

          <section className="map-path">
            {data.chapters.map((ch, i) => {
              const stageId = `${data.id}:${ch.id}`;
              const p = progress[stageId];
              const isBoss = i === data.chapters.length - 1;
              const locked = i > 0 && !progress[`${data.id}:${data.chapters[i - 1].id}`]?.stars;

              return (
                <div className={`stage-row ${i % 2 ? "right" : "left"}`} key={ch.id}>
                  <div className="path-line" />
                  <Link
                    aria-disabled={locked}
                    onClick={(e) => {
                      if (locked) {
                        e.preventDefault();
                        sound.playWrong();
                        setLockedNotice({
                          stageNum: i + 1,
                          stageTitle: ch.title,
                          prevStageNum: i,
                          prevStageTitle: data.chapters[i - 1]?.title || "",
                        });
                      } else {
                        sound.playClick();
                        setLockedNotice(null);
                      }
                    }}
                    to={`/world/${data.id}/stage/${encodeURIComponent(ch.id)}`}
                    className={`stage-node ${locked ? "locked" : "unlocked"} ${isBoss ? "boss-stage" : ""}`}
                  >
                    <div className="node-ring">
                      {locked ? (
                        <LockKeyhole size={24} />
                      ) : isBoss ? (
                        <Skull size={26} className="boss-skull" />
                      ) : p?.stars ? (
                        <CheckCircle2 size={24} />
                      ) : (
                        <span>{i + 1}</span>
                      )}
                    </div>

                    <div className="stage-info">
                      <div className="stage-tag">
                        {isBoss ? (
                          <span className="boss-tag">
                            <Swords size={12} /> BOSS REGION
                          </span>
                        ) : (
                          <span>
                            <Map size={12} /> REGION {i + 1}
                          </span>
                        )}
                      </div>
                      <h3>{ch.title}</h3>
                      <p>
                        {data.questions.filter((q) => q.chapterId === ch.id && q.qualityStatus === "clean").length} thử
                        thách khả dụng
                      </p>
                      <div className="stage-status-row">
                        {p ? (
                          <Stars n={p.stars} />
                        ) : (
                          <span className={`status-pill ${locked ? "locked" : "ready"}`}>
                            {locked ? "Chưa mở khóa" : "Sẵn sàng vượt ải"}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </section>
        </>
      )}
    </Shell>
  );
}

function InteractiveLesson({
  data,
  chapterId,
  isCompletedBefore,
  onComplete,
}: {
  data: SubjectData;
  chapterId: string;
  isCompletedBefore?: boolean;
  onComplete: () => void;
}) {
  const knowledge = data.knowledge.filter((k) => k.chapterId === chapterId);
  const questions = data.questions.filter((q) => q.chapterId === chapterId);
  const steps = useMemo(() => buildLessonSteps(knowledge, questions), [knowledge, questions]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [lessonLangMode, setLessonLangMode] = useState<"en" | "vi" | "bilingual">("bilingual");

  if (!steps.length) {
    return (
      <section className="lesson-shell">
        <div className="empty">
          <BookOpen size={40} />
          <p>Chưa có bí kíp cho ải này.</p>
          <button className="btn primary" onClick={onComplete}>
            <Swords size={18} /> Vào thử thách ngay
          </button>
        </div>
      </section>
    );
  }

  const step = steps[index];
  const q = step.question;
  const correct = q ? gradeAnswer([selected], q.correctAnswerIds) : false;
  const keywords = lessonKeywords(step.concept);
  const stats = checkpointStats(steps, results);
  const lastStep = index === steps.length - 1;
  const gateReady = Boolean(isCompletedBefore || allCheckpointsPassed(steps, results));

  const checkpointSteps = useMemo(
    () =>
      steps
        .map((s, i) => ({ step: s, stepIndex: i }))
        .filter((x) => x.step.type === "checkpoint"),
    [steps]
  );

  const advance = () => {
    sound.playClick();
    if (lastStep) {
      if (gateReady) {
        markLessonCompleted(`${data.id}:${chapterId}`);
        sound.playGateOpen();
        onComplete();
      }
    } else {
      setIndex(index + 1);
      setSelected("");
      setChecked(false);
    }
  };

  const retryCheckpoint = () => {
    sound.playClick();
    setSelected("");
    setChecked(false);
  };

  const handleCheckAnswer = () => {
    setChecked(true);
    const isOk = correct;
    setResults((r) => ({ ...r, [step.id]: isOk }));
    if (isOk) {
      sound.playCorrect(1);
    } else {
      sound.playWrong();
    }
  };

  const jumpToStep = (stepIdx: number) => {
    sound.playClick();
    setIndex(stepIdx);
    setChecked(false);
    setSelected("");
  };

  const icon =
    step.type === "trap" ? (
      <AlertTriangle size={36} />
    ) : step.type === "checkpoint" ? (
      <Brain size={36} />
    ) : step.type === "example" ? (
      <Lightbulb size={36} />
    ) : step.type === "intro" ? (
      <Sparkles size={36} />
    ) : (
      <BookOpen size={36} />
    );

  return (
    <section className={`lesson-shell lesson-${step.type}`}>
      {isCompletedBefore && (
        <div className="lesson-shortcut-banner">
          <div className="shortcut-left">
            <CheckCircle2 size={18} />
            <span>Bạn đã hoàn thành bí kíp bài học này trước đó.</span>
          </div>
          <button
            className="btn primary shortcut-btn"
            onClick={() => {
              sound.playClick();
              onComplete();
            }}
          >
            <Swords size={16} /> Vào thẳng Đấu trường
          </button>
        </div>
      )}

      <div className="lesson-progress-hud">
        <div className="progress-labels">
          <span>
            <ScrollText size={14} /> BÍ KÍP TRI THỨC
          </span>
          <b>
            MẢNH {index + 1} / {steps.length}
          </b>
        </div>
        <div className="lesson-bar">
          <i style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      <div className="lesson-card">
        {/* Thanh tiêu đề & ngôn ngữ tích hợp trong card */}
        <div className="lesson-card-top-bar">
          <div className="card-top-badge">
            <span className="step-tag-pill">
              {icon} {step.eyebrow}
            </span>
            {step.concept && (
              <span className="key-rune-pill">
                <KeyRound size={13} /> {step.concept.title.split(" ").slice(0, 4).join(" ")}
              </span>
            )}
          </div>

          <div className="lang-switcher">
            <button
              className={`lang-btn ${lessonLangMode === "en" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLessonLangMode("en");
              }}
              title="Xem bí kíp gốc Tiếng Anh"
            >
              EN
            </button>
            <button
              className={`lang-btn ${lessonLangMode === "vi" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLessonLangMode("vi");
              }}
              title="Dịch lý thuyết sang Tiếng Việt"
            >
              VI
            </button>
            <button
              className={`lang-btn ${lessonLangMode === "bilingual" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLessonLangMode("bilingual");
              }}
              title="Chế độ Song ngữ Anh - Việt"
            >
              <Languages size={13} /> Song ngữ
            </button>
          </div>
        </div>

        <div className="lesson-body">
          {step.type === "intro" && (
            <div className="mission-copy">
              <KeyRound size={20} className="mission-icon" />
              <span>
                Cánh cổng cổ xưa đang phong ấn thử thách. Thu thập đủ các mảnh kiến thức, giải mã bẫy và vượt checkpoint
                để kích hoạt chìa khóa mở cổng!
              </span>
            </div>
          )}

          {step.type === "concept" && (() => {
            const conceptExample = getSimpleConceptExample(step.concept, data.id);
            return (
              <div className="lesson-split-layout">
                {/* Cột trái: Lý thuyết cốt lõi */}
                <div className="lesson-theory-pane">
                  <h2>{lessonLangMode === "vi" ? translateConceptTitle(step.title) : step.title}</h2>
                  {lessonLangMode === "bilingual" && translateConceptTitle(step.title) !== step.title && (
                    <div className="concept-vi-title-tag">
                      <Languages size={13} /> {translateConceptTitle(step.title)}
                    </div>
                  )}

                  {step.content.map((text, i) => {
                    const cleanText = text.replace(/\*\*/g, "");
                    const viText = translateConceptSentence(cleanText);
                    const hasVietnamese = viText !== cleanText;

                    if (lessonLangMode === "vi") {
                      return (
                        <p className="lesson-copy" key={i}>
                          {viText}
                        </p>
                      );
                    }

                    if (lessonLangMode === "bilingual") {
                      return (
                        <div className="bilingual-lesson-item" key={i}>
                          <p className="lesson-copy en-original">
                            {highlightKeywords(cleanText, keywords).map((part, j) =>
                              part.highlight ? <mark key={j}>{part.text}</mark> : <span key={j}>{part.text}</span>
                            )}
                          </p>
                          {hasVietnamese && (
                            <div className="vi-translation-sub">
                              <Languages size={13} />
                              <span>
                                <b>Dịch nghĩa:</b> {viText}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <p className="lesson-copy" key={i}>
                        {highlightKeywords(cleanText, keywords).map((part, j) =>
                          part.highlight ? <mark key={j}>{part.text}</mark> : <span key={j}>{part.text}</span>
                        )}
                      </p>
                    );
                  })}

                  {keywords.length > 0 && (
                    <div className="keyword-loot">
                      <small>
                        <Sparkles size={12} /> TỪ KHÓA ĐÃ THU THẬP
                      </small>
                      <div className="loot-tags">
                        {keywords.map((k) => (
                          <span key={k} className="loot-chip">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Cột phải: Card Ví dụ siêu dễ hiểu như cho trẻ lớp 3 */}
                <aside className="lesson-example-card">
                  <div className="example-card-header">
                    <div className="example-header-left">
                      <Lightbulb size={18} />
                      <span>VÍ DỤ ĐỜI THƯỜNG</span>
                    </div>
                    <span className="easy-badge">
                      <Sparkles size={10} /> DỄ HIỂU LỚP 3
                    </span>
                  </div>

                  <div className="example-story-box">
                    <span className="story-label">
                      🧁 TÌNH HUỐNG THỰC TẾ:
                    </span>
                    <p className="example-story-text">{conceptExample.story}</p>
                  </div>

                  <div className="example-tldr-box">
                    <Target size={16} />
                    <div>
                      <b>Ghi nhớ nhanh:</b> {conceptExample.tldr}
                    </div>
                  </div>

                  {conceptExample.trapWarning && (
                    <div className="example-trap-box">
                      <AlertTriangle size={16} />
                      <div>
                        <b>Cảnh báo bẫy:</b> {conceptExample.trapWarning}
                      </div>
                    </div>
                  )}
                </aside>
              </div>
            );
          })()}

          {step.type !== "concept" && step.type !== "intro" && (
            <>
              <h2>{lessonLangMode === "vi" ? translateConceptTitle(step.title) : step.title}</h2>
              {lessonLangMode === "bilingual" && translateConceptTitle(step.title) !== step.title && (
                <div className="concept-vi-title-tag">
                  <Languages size={13} /> {translateConceptTitle(step.title)}
                </div>
              )}

              {step.content.map((text, i) => {
                const cleanText = text.replace(/\*\*/g, "");
                const viText = translateConceptSentence(cleanText);
                const hasVietnamese = viText !== cleanText;

                if (lessonLangMode === "vi") {
                  return (
                    <p className="lesson-copy" key={i}>
                      {viText}
                    </p>
                  );
                }

                if (lessonLangMode === "bilingual") {
                  return (
                    <div className="bilingual-lesson-item" key={i}>
                      <p className="lesson-copy en-original">
                        {highlightKeywords(cleanText, keywords).map((part, j) =>
                          part.highlight ? <mark key={j}>{part.text}</mark> : <span key={j}>{part.text}</span>
                        )}
                      </p>
                      {hasVietnamese && (
                        <div className="vi-translation-sub">
                          <Languages size={13} />
                          <span>
                            <b>Dịch nghĩa:</b> {viText}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <p className="lesson-copy" key={i}>
                    {highlightKeywords(cleanText, keywords).map((part, j) =>
                      part.highlight ? <mark key={j}>{part.text}</mark> : <span key={j}>{part.text}</span>
                    )}
                  </p>
                );
              })}
            </>
          )}

          {keywords.length > 0 && step.type === "concept" && (
            <div className="keyword-loot">
              <small>
                <Sparkles size={12} /> TỪ KHÓA ĐÃ THU THẬP
              </small>
              <div className="loot-tags">
                {keywords.map((k) => (
                  <span key={k} className="loot-chip">
                    <Sparkles size={10} /> {k}
                  </span>
                ))}
              </div>
            </div>
          )}

          {q && (
            <div className="mini-checkpoint">
              <div className="mini-checkpoint-title">
                <Target size={16} /> Checkpoint thử thách trí nhớ
              </div>
              <p className="mini-question">{q.question}</p>
              <div className="mini-options">
                {q.options.map((o) => (
                  <button
                    disabled={checked && correct}
                    className={`mini-opt-btn ${selected === o.id ? "selected" : ""} ${
                      checked && q.correctAnswerIds.includes(o.id) ? "correct" : ""
                    } ${checked && selected === o.id && !correct ? "wrong" : ""}`}
                    onClick={() => {
                      if (!checked || !correct) {
                        sound.playClick();
                        setSelected(o.id);
                      }
                    }}
                    key={o.id}
                  >
                    <b className="opt-letter">{o.id}</b>
                    <span>{o.text}</span>
                  </button>
                ))}
              </div>

              {checked && (
                <div className={`checkpoint-feedback ${correct ? "ok" : "bad"}`}>
                  {correct ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>
                        <b>Checkpoint thành công!</b> Mảnh tri thức đã được ghi nhớ và khai mở.
                      </span>
                    </>
                  ) : (
                    <>
                      <ShieldAlert size={20} />
                      <span>
                        <b>Chưa chính xác!</b>{" "}
                        {q.explanation || `Đáp án đúng là ${q.correctAnswerIds.join(", ")}.`} Hãy đọc lại bí kíp và
                        thử lại.
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {lastStep && !q && (
            <div className={`gate ${gateReady ? "open" : "closed"}`}>
              <div className="gate-icon">{gateReady ? <DoorOpen size={28} /> : <LockKeyhole size={28} />}</div>
              <div className="gate-info">
                <b>{gateReady ? "Cánh cổng đã mở rộng!" : "Cánh cổng vẫn đang bị phong ấn ma thuật"}</b>
                <div className="gate-status-pill">
                  {gateReady ? <CheckCircle2 size={13} /> : <AlertTriangle size={13} />}
                  <span>
                    Checkpoint hoàn thành: {stats.passed} / {stats.total}
                  </span>
                </div>

                {!gateReady ? (
                  <>
                    <p className="gate-reason-desc">
                      <b>Lý do chưa mở:</b> Bạn cần giải mã và trả lời đúng <b>tất cả các Checkpoint kiến thức</b> bên dưới để chứng minh đã nắm vững bài học trước khi bước vào Đấu trường:
                    </p>

                    <div className="gate-checklist">
                      <div className="gate-checklist-header">
                        <AlertTriangle size={14} /> Danh sách Checkpoint cần hoàn thành:
                      </div>
                      {checkpointSteps.map((item, idx) => {
                        const isPassed = results[item.step.id] === true;
                        const isAttempted = item.step.id in results;
                        return (
                          <div key={item.step.id} className={`gate-check-item ${isPassed ? "passed" : "pending"}`}>
                            <div className="gate-check-left">
                              {isPassed ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                              <div className="check-item-info">
                                <b>
                                  Checkpoint {idx + 1}: {item.step.concept?.title || `Mảnh kiến thức ${idx + 1}`}
                                </b>
                                <span>
                                  {isPassed
                                    ? "Đã giải mã chính xác"
                                    : isAttempted
                                    ? "Chưa chọn đúng đáp án"
                                    : "Chưa hoàn thành checkpoint"}
                                </span>
                              </div>
                            </div>
                            {!isPassed && (
                              <button className="jump-btn" onClick={() => jumpToStep(item.stepIndex)}>
                                Làm ngay <ChevronRight size={14} />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <p className="gate-reason-desc">
                    Tuyệt vời! Bạn đã vượt qua các checkpoint kiến thức. Hãy tiến vào Đấu trường để thử thách bản lĩnh!
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="lesson-actions">
            {index > 0 && (
              <button
                className="btn ghost"
                onClick={() => {
                  sound.playClick();
                  setIndex(index - 1);
                  setChecked(false);
                  setSelected("");
                }}
              >
                <ChevronLeft size={16} /> Xem lại
              </button>
            )}

            {q && !checked ? (
              <button disabled={!selected} className="btn primary" onClick={handleCheckAnswer}>
                <CheckCircle2 size={16} /> Kiểm tra đáp án
              </button>
            ) : q && checked && !correct ? (
              <button className="btn primary" onClick={retryCheckpoint}>
                <RotateCcw size={16} /> Làm lại câu này
              </button>
            ) : (
              <button
                className={`btn primary ${lastStep && !gateReady ? "locked-gate-btn" : ""}`}
                onClick={() => {
                  if (lastStep && !gateReady) {
                    sound.playWrong();
                    const firstUnpassed = checkpointSteps.find((x) => results[x.step.id] !== true);
                    if (firstUnpassed) {
                      jumpToStep(firstUnpassed.stepIndex);
                    }
                  } else {
                    advance();
                  }
                }}
              >
                {lastStep ? (
                  gateReady ? (
                    <>
                      <Swords size={16} /> Vào thử thách
                    </>
                  ) : (
                    <>
                      <LockKeyhole size={16} /> Cổng khóa (Còn {stats.total - stats.passed} câu chưa đạt) • Làm ngay
                    </>
                  )
                ) : (
                  <>
                    Tiếp tục <ChevronRight size={16} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage() {
  const { id, chapterId } = useParams();
  const data = useSubject(id);
  const navigate = useNavigate();
  const cid = decodeURIComponent(chapterId || "");
  const [progress, setProgress] = useState(loadProgress);

  const stageKey = data ? `${data.id}:${cid}` : "";
  const stageProgress = stageKey ? progress[stageKey] : undefined;
  const isEligibleForQuiz = Boolean(stageProgress?.lessonCompleted || (stageProgress?.stars && stageProgress.stars > 0));

  const [phase, setPhase] = useState<"learn" | "quiz">(() => (isEligibleForQuiz ? "quiz" : "learn"));

  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    const sKey = id ? `${id}:${cid}` : "";
    const sProgress = sKey ? p[sKey] : undefined;
    const isEligible = Boolean(sProgress?.lessonCompleted || (sProgress?.stars && sProgress.stars > 0));
    setPhase(isEligible ? "quiz" : "learn");
  }, [id, cid]);

  if (!data) {
    return (
      <Shell>
        <div className="loading">
          <Compass size={32} className="spin-icon" />
          <p>Đang chuẩn bị chiến trường...</p>
        </div>
      </Shell>
    );
  }

  const chapter = data.chapters.find((c) => c.id === cid)!;
  const stageNum = data.chapters.findIndex((c) => c.id === cid) + 1;

  const handleSwitchToQuiz = () => {
    if (isEligibleForQuiz) {
      sound.playClick();
      setPhase("quiz");
    } else {
      sound.playWrong();
    }
  };

  return (
    <Shell>
      <Link to={`/world/${id}`} onClick={() => sound.playClick()} className="back-link">
        <ChevronLeft size={18} /> Quay lại bản đồ
      </Link>

      <div className="stage-header">
        <span className="stage-number-tag">
          <Target size={14} /> ẢI THÁM HIỂM {stageNum}
        </span>
        <h1>{chapter?.title}</h1>
        <div className="phase-steps">
          <button
            className={`phase-step-btn ${phase === "learn" ? "active" : isEligibleForQuiz ? "done" : ""}`}
            onClick={() => {
              sound.playClick();
              setPhase("learn");
            }}
          >
            <BookOpen size={15} /> 1. Sách bí kíp
          </button>
          <div className="phase-line" />
          <button
            className={`phase-step-btn ${phase === "quiz" ? "active" : ""}`}
            disabled={!isEligibleForQuiz}
            onClick={handleSwitchToQuiz}
            title={!isEligibleForQuiz ? "Cần hoàn thành bí kíp bài học để mở Đấu trường" : "Vào Đấu trường thử thách"}
          >
            <Swords size={15} /> 2. Đấu trường {!isEligibleForQuiz && <LockKeyhole size={12} />}
          </button>
          <div className="phase-line" />
          <div className="phase-step-btn" style={{ opacity: 0.5, cursor: "default" }}>
            <Trophy size={15} /> 3. Kết quả
          </div>
        </div>
      </div>

      {phase === "learn" ? (
        <InteractiveLesson
          key={`${data.id}:${cid}`}
          data={data}
          chapterId={cid}
          isCompletedBefore={isEligibleForQuiz}
          onComplete={() => {
            markLessonCompleted(`${data.id}:${cid}`);
            setProgress(loadProgress());
            sound.playGateOpen();
            setPhase("quiz");
          }}
        />
      ) : (
        <Quiz
          data={data}
          chapterId={cid}
          onDone={(score) => navigate(`/world/${id}/result/${encodeURIComponent(cid)}?score=${score}`)}
        />
      )}
    </Shell>
  );
}

function Quiz({
  data,
  chapterId,
  onDone,
}: {
  data: SubjectData;
  chapterId: string;
  onDone: (s: number) => void;
}) {
  const questions = useMemo(
    () => shuffle(createQuiz(data.questions.filter((q) => q.chapterId === chapterId), 10)),
    [data, chapterId]
  );
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [combo, setCombo] = useState(0);
  const [langMode, setLangMode] = useState<"en" | "vi" | "bilingual">("bilingual");

  const q = questions[idx];
  if (!q) {
    return (
      <div className="empty">
        <ShieldAlert size={36} />
        <p>Ải này chưa có đủ câu clean để mở đấu trường.</p>
      </div>
    );
  }

  const isRight = gradeAnswer(selected, q.correctAnswerIds);

  const toggle = (x: string) => {
    if (checked) return;
    sound.playClick();
    setSelected((s) => (q.type === "single" ? [x] : s.includes(x) ? s.filter((y) => y !== x) : [...s, x]));
  };

  const handleConfirm = () => {
    setChecked(true);
    if (isRight) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      sound.playCorrect(nextCombo);
    } else {
      setCombo(0);
      sound.playWrong();
    }
  };

  const next = () => {
    sound.playClick();
    const n = correct + (isRight ? 1 : 0);
    if (idx === questions.length - 1) {
      onDone(Math.round((n / questions.length) * 100));
    } else {
      setCorrect(n);
      setIdx(idx + 1);
      setSelected([]);
      setChecked(false);
    }
  };

  const translatedPrompt = translateQuestionPrompt(q.question);

  return (
    <section className="battle-arena">
      <div className="battle-hud-top">
        <div className="battle-mode-title">
          <Swords size={16} /> ĐẤU TRƯỜNG THỬ THÁCH
        </div>

        {combo >= 2 && (
          <div className="combo-counter pulse-combo">
            <Flame size={16} />
            <span>COMBO x{combo}</span>
          </div>
        )}

        <div className="battle-counter">
          <b>{idx + 1}</b> / {questions.length}
        </div>
      </div>

      <div className="hp-bar-frame">
        <div className="hp-fill" style={{ width: `${(idx / questions.length) * 100}%` }} />
      </div>

      <div className="question-card">
        <div className="lang-switcher-row">
          <div className="question-meta-row" style={{ margin: 0 }}>
            <span className="difficulty-pill">
              <Target size={12} /> ĐỘ KHÓ {q.difficulty}
            </span>
            <span className="question-type-pill">
              {q.type === "multiple" ? `CHỌN ${q.requiredAnswers} ĐÁP ÁN` : "CHỌN 1 ĐÁP ÁN"}
            </span>
          </div>

          <div className="lang-switcher">
            <button
              className={`lang-btn ${langMode === "en" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLangMode("en");
              }}
              title="Xem câu hỏi gốc Tiếng Anh"
            >
              EN
            </button>
            <button
              className={`lang-btn ${langMode === "vi" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLangMode("vi");
              }}
              title="Dịch câu hỏi sang Tiếng Việt"
            >
              VI
            </button>
            <button
              className={`lang-btn ${langMode === "bilingual" ? "active" : ""}`}
              onClick={() => {
                sound.playClick();
                setLangMode("bilingual");
              }}
              title="Chế độ Song ngữ Anh - Việt"
            >
              <Languages size={13} /> Song ngữ
            </button>
          </div>
        </div>

        <div className="question-title-container">
          <h2 className="question-title">{langMode === "vi" ? translatedPrompt : q.question}</h2>

          {langMode === "bilingual" && (
            <div className="bilingual-translation-box">
              <div className="bilingual-tag">
                <Languages size={12} /> BẢN DỊCH &amp; GIẢI NGHĨA TIẾNG VIỆT:
              </div>
              <p className="bilingual-text">{translatedPrompt}</p>
            </div>
          )}
        </div>

        <div className="options-grid">
          {q.options.map((o) => {
            const isSelected = selected.includes(o.id);
            const isAnswerCorrect = q.correctAnswerIds.includes(o.id);
            const showCorrect = checked && isAnswerCorrect;
            const showWrong = checked && isSelected && !isAnswerCorrect;

            return (
              <button
                onClick={() => toggle(o.id)}
                className={`option-btn ${isSelected ? "selected" : ""} ${showCorrect ? "correct" : ""} ${
                  showWrong ? "wrong" : ""
                }`}
                key={o.id}
              >
                <b className="option-badge">{o.id}</b>
                <span className="option-text">{o.text}</span>
              </button>
            );
          })}
        </div>

        {checked && (
          <div className={`combat-feedback ${isRight ? "feedback-ok" : "feedback-bad"}`}>
            <div className="feedback-header">
              {isRight ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
              <h3>{isRight ? "Chính xác tuyệt đối!" : "Chưa chính xác"}</h3>
            </div>
            <p>{q.explanation || `Đáp án đúng: ${q.correctAnswerIds.join(", ")}`}</p>
            {q.trap && (
              <div className="trap-alert-box">
                <AlertTriangle size={14} />
                <span>
                  <b>Cảnh báo bẫy:</b> {q.trap}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="battle-actions">
          <button
            disabled={!selected.length}
            className="btn primary submit-btn"
            onClick={() => (checked ? next() : handleConfirm())}
          >
            {checked ? (
              idx === questions.length - 1 ? (
                <>
                  <Award size={18} /> Xem kết quả chiến trận
                </>
              ) : (
                <>
                  Câu tiếp theo <ChevronRight size={18} />
                </>
              )
            ) : (
              <>
                <CheckCircle2 size={18} /> Chốt đáp án
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function Result() {
  const { id, chapterId } = useParams();
  const data = useSubject(id);
  const routeLocation = useLocation();
  const score = Number(new URLSearchParams(routeLocation.search).get("score") || 0);
  const stars = calculateStars(score / 100);
  const persisted = useRef(false);

  useEffect(() => {
    if (!id || !chapterId || persisted.current) return;
    persisted.current = true;
    const p = loadProgress();
    p[`${id}:${decodeURIComponent(chapterId)}`] = updateProgress(
      p[`${id}:${decodeURIComponent(chapterId)}`],
      score / 100
    );
    saveProgress(p);
    recordDailyActivity();
    sound.playVictory();
  }, [id, chapterId, score]);

  const passed = stars > 0;

  return (
    <Shell>
      <section className="result-arena">
        <div className={`result-crest ${passed ? "crest-victory" : "crest-defeat"}`}>
          {passed ? <Trophy size={48} /> : <ShieldAlert size={48} />}
        </div>

        <div className="eyebrow">
          <Sparkles size={14} /> KẾT QUẢ VƯỢT ẢI
        </div>

        <h1 className="result-title">
          {passed ? (stars === 3 ? "Đại thắng hoàn hảo!" : "Ải đã được chinh phục!") : "Thử thách chưa hoàn thành"}
        </h1>

        <div className="big-stars-display">
          <Stars n={stars} size={32} />
        </div>

        <div className="score-ring-hud">
          <b className="score-number">{score}%</b>
          <span className="score-label">ĐỘ CHÍNH XÁC</span>
        </div>

        <p className="result-comment">
          {stars >= 3
            ? "Tuyệt đỉnh! Kiến thức của bạn cực kỳ vững vàng và không dính bẫy."
            : stars
            ? "Rất tốt! Hãy rèn luyện thêm để đạt trọn vẹn 3 sao danh giá."
            : "Cần đạt tối thiểu 70% độ chính xác để mở khóa ải tiếp theo."}
        </p>

        <div className="rewards-summary">
          <div className="reward-pill">
            <Zap size={15} /> <span>+{passed ? 100 : 25} XP</span>
          </div>
          {passed && (
            <div className="reward-pill">
              <CheckCircle2 size={15} /> <span>+1 Mở khóa ải</span>
            </div>
          )}
        </div>

        <div className="hero-actions result-actions">
          <Link className="btn primary" to={`/world/${id}`} onClick={() => sound.playClick()}>
            <Map size={18} /> Về bản đồ thế giới
          </Link>
          <Link className="btn ghost" to={`/world/${id}/stage/${chapterId}`} onClick={() => sound.playClick()}>
            <RotateCcw size={18} /> Thử lại ải này
          </Link>
        </div>

        {data && <small className="result-subject-tag">{data.name}</small>}
      </section>
    </Shell>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/world/:id" element={<World />} />
      <Route path="/world/:id/stage/:chapterId" element={<Stage />} />
      <Route path="/world/:id/result/:chapterId" element={<Result />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}
