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
  Layers,
  Lightbulb,
  LockKeyhole,
  Map,
  RotateCcw,
  ScrollText,
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
  Zap,
} from "lucide-react";
import type { Question, SubjectData, SubjectManifest } from "./types";
import { createQuiz, gradeAnswer, shuffle } from "./lib/quiz";
import { calculateStars, loadProgress, saveProgress, updateProgress, type ProgressStore } from "./lib/progress";
import { allCheckpointsPassed, buildLessonSteps, checkpointStats, highlightKeywords, lessonKeywords } from "./lib/lesson";
import { sound } from "./lib/sound";

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
  const totalStars = useMemo(() => Object.values(progress).reduce((a, p) => a + p.stars, 0), [progress]);

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

          <div className="hud-badge streak-badge" title="Chuỗi 7 ngày học tập liên tục">
            <Flame size={16} className="pulse-flame" />
            <span>7 ngày</span>
          </div>

          <div className="hud-badge star-badge" title="Tổng số sao vượt ải thu thập">
            <Star size={16} fill="currentColor" />
            <span>{totalStars}</span>
          </div>

          <div className="hud-player-profile">
            <div className="hud-avatar">
              <Crown size={14} className="avatar-crown" />
              <span>12</span>
            </div>
            <div className="hud-exp">
              <div className="exp-label">
                <span>LVL 12</span>
                <span className="exp-numbers">1,240 / 2,000 XP</span>
              </div>
              <div className="exp-bar">
                <div className="exp-fill" style={{ width: "62%" }} />
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
  const totalQuestions = manifest.reduce((a, s) => a + s.stats.questions, 0);

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
              <Flame size={16} /> <span>Streak 7 ngày rực cháy</span>
            </div>
          </div>
        </div>

        <div className="hero-orb-container">
          <div className="orb">
            <div className="orb-inner">
              <Trophy size={48} className="orb-trophy" />
              <div className="orb-level-badge">
                <Crown size={14} /> LEVEL 12
              </div>
              <b>Học giả tập sự</b>
              <span>1,240 XP tích lũy</span>
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

function World() {
  const { id } = useParams();
  const data = useSubject(id);
  const [progress] = useState(loadProgress);

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
        <button className="mode-tab active" onClick={() => sound.playClick()}>
          <Gamepad2 size={16} /> Chiến dịch Vượt ải
        </button>
        <button className="mode-tab" onClick={() => sound.playClick()}>
          <BookOpen size={16} /> Thư tịch Tự do
        </button>
      </div>

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
                  } else {
                    sound.playClick();
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
    </Shell>
  );
}

function InteractiveLesson({
  data,
  chapterId,
  onComplete,
}: {
  data: SubjectData;
  chapterId: string;
  onComplete: () => void;
}) {
  const knowledge = data.knowledge.filter((k) => k.chapterId === chapterId);
  const questions = data.questions.filter((q) => q.chapterId === chapterId);
  const steps = useMemo(() => buildLessonSteps(knowledge, questions), [knowledge, questions]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

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
  const gateReady = allCheckpointsPassed(steps, results);

  const advance = () => {
    sound.playClick();
    if (lastStep) {
      if (gateReady) {
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
        <aside className="lesson-aside">
          <div className="lesson-icon-circle">{icon}</div>
          <span className="step-eyebrow-aside">{step.eyebrow}</span>
          {step.concept && (
            <div className="concept-rune">
              <KeyRound size={16} />
              <small>CHÌA KHÓA</small>
              <b>{step.concept.title.split(" ").slice(0, 3).join(" ")}</b>
            </div>
          )}
        </aside>

        <div className="lesson-body">
          <div className="eyebrow">
            <Sparkles size={14} /> {step.eyebrow}
          </div>
          <h2>{step.title}</h2>

          {step.type === "intro" && (
            <div className="mission-copy">
              <KeyRound size={20} className="mission-icon" />
              <span>
                Cánh cổng cổ xưa đang phong ấn thử thách. Thu thập đủ các mảnh kiến thức, giải mã bẫy và vượt checkpoint
                để kích hoạt chìa khóa mở cổng!
              </span>
            </div>
          )}

          {step.content.map((text, i) => (
            <p className="lesson-copy" key={i}>
              {highlightKeywords(text.replace(/\*\*/g, ""), keywords).map((part, j) =>
                part.highlight ? <mark key={j}>{part.text}</mark> : <span key={j}>{part.text}</span>
              )}
            </p>
          ))}

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
                <b>{gateReady ? "Cánh cổng đã mở rộng!" : "Cánh cổng vẫn bị phong ấn"}</b>
                <span>
                  Checkpoint hoàn thành: {stats.passed} / {stats.total}
                </span>
                {!gateReady && (
                  <p>
                    Hãy quay lại các checkpoint chưa vượt qua bằng nút "Xem lại", hoàn thành chính xác để mở cổng tiến
                    vào thử thách.
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
              <button disabled={lastStep && !gateReady} className="btn primary" onClick={advance}>
                {lastStep ? (
                  gateReady ? (
                    <>
                      <Swords size={16} /> Vào thử thách
                    </>
                  ) : (
                    <>
                      <LockKeyhole size={16} /> Cổng chưa mở
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
  const [phase, setPhase] = useState<"learn" | "quiz">("learn");

  useEffect(() => {
    setPhase("learn");
  }, [id, chapterId]);

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

  const cid = decodeURIComponent(chapterId || "");
  const chapter = data.chapters.find((c) => c.id === cid)!;
  const stageNum = data.chapters.findIndex((c) => c.id === cid) + 1;

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
          <div className={`phase-item ${phase === "learn" ? "active" : "done"}`}>
            <BookOpen size={15} /> 1. Sách bí kíp
          </div>
          <div className="phase-line" />
          <div className={`phase-item ${phase === "quiz" ? "active" : ""}`}>
            <Swords size={15} /> 2. Đấu trường
          </div>
          <div className="phase-line" />
          <div className="phase-item">
            <Trophy size={15} /> 3. Kết quả
          </div>
        </div>
      </div>

      {phase === "learn" ? (
        <InteractiveLesson
          key={`${data.id}:${cid}`}
          data={data}
          chapterId={cid}
          onComplete={() => {
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
        <div className="question-meta-row">
          <span className="difficulty-pill">
            <Target size={12} /> ĐỘ KHÓ {q.difficulty}
          </span>
          <span className="question-type-pill">
            {q.type === "multiple" ? `CHỌN ${q.requiredAnswers} ĐÁP ÁN` : "CHỌN 1 ĐÁP ÁN"}
          </span>
        </div>

        <h2 className="question-title">{q.question}</h2>

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
