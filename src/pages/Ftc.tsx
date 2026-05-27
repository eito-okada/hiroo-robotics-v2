import { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Ftc.css";

interface FadeInTextProps {
    children: React.ReactNode;
    delayMs: number;
}

const FadeInText: React.FC<FadeInTextProps> = ({ children, delayMs }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);
    const style: React.CSSProperties = {
        transition: `opacity 1000ms cubic-bezier(0.25, 1, 0.5, 1), transform 1000ms cubic-bezier(0.25, 1, 0.5, 1)`,
        transitionDelay: `${delayMs}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
    };
    return <div style={style}>{children}</div>;
};

const MascotSVG: React.FC = () => (
    <svg width="56" height="72" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 52 Q18 24 32 20L32 32 24 32 24 52Z" fill="#d4a437" stroke="#1a2a4a" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M82 52 Q82 24 68 20L68 32 76 32 76 52Z" fill="#d4a437" stroke="#1a2a4a" strokeWidth="2.5" strokeLinejoin="round"/>
        <rect x="24" y="32" width="52" height="7" fill="#d4a437" stroke="#1a2a4a" strokeWidth="2"/>
        <path d="M38 52 Q33 44 36 36" stroke="#1a2a4a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M62 52 Q67 44 64 36" stroke="#1a2a4a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <rect x="34" y="52" width="32" height="30" rx="4" fill="#b4a7d6" stroke="#1a2a4a" strokeWidth="2.5"/>
        <path d="M37 55 Q42 54 44 60" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="43" cy="65" r="3" fill="#1a2a4a"/>
        <circle cx="57" cy="65" r="3" fill="#1a2a4a"/>
        <circle cx="44" cy="64" r="1" fill="#fff"/>
        <circle cx="58" cy="64" r="1" fill="#fff"/>
        <path d="M44 74 Q50 78 56 74" stroke="#1a2a4a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <g className="mascotWheel" style={{ transformOrigin: "39px 92px" }}>
            <circle cx="39" cy="92" r="7" fill="#8b7faf" stroke="#1a2a4a" strokeWidth="2.2"/>
            <path d="M35.5 88.5L42.5 95.5M42.5 88.5L35.5 95.5" stroke="#1a2a4a" strokeWidth="1.4"/>
        </g>
        <g className="mascotWheel" style={{ transformOrigin: "61px 92px" }}>
            <circle cx="61" cy="92" r="7" fill="#8b7faf" stroke="#1a2a4a" strokeWidth="2.2"/>
            <path d="M57.5 88.5L64.5 95.5M64.5 88.5L57.5 95.5" stroke="#1a2a4a" strokeWidth="1.4"/>
        </g>
    </svg>
);

const STEP_ICONS = [
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h11l3 3v13H5z"/><path d="M16 4v3h3"/>
        <line x1="8" y1="11" x2="14" y2="11"/><line x1="8" y1="14" x2="14" y2="14"/><line x1="8" y1="17" x2="12" y2="17"/>
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7 2 2 7-7a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z"/>
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 21V4"/><path d="M5 4l13 3-4 4 4 4-13 1"/>
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3l3 7"/><path d="M17 3l-3 7"/><circle cx="12" cy="15" r="6"/><path d="M10 14l1.5 1.5L14 13"/>
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4h8v6a4 4 0 0 1-8 0z"/>
        <path d="M8 6H5a2 2 0 0 0 0 4h3"/><path d="M16 6h3a2 2 0 0 1 0 4h-3"/>
        <line x1="10" y1="14" x2="10" y2="17"/><line x1="14" y1="14" x2="14" y2="17"/>
        <line x1="8" y1="20" x2="16" y2="20"/>
    </svg>,
];

const TIMELINE_STEPS = [
    {
        label: "STEP 01",
        title: "ゲーム発表",
        date: "9月",
        dateEn: "September",
        desc: "毎シーズン新しい競技テーマが世界同時発表。各チームは戦略立案を開始します。",
        tags: ["strategy", "kickoff", "team"],
        body: "毎年9月、FIRSTによるキックオフ動画が世界同時配信され、その年の競技ルールとフィールドデザインが初めて公開されます。チームはルールブック（Game Manual）を精読し、どのタスクを優先するか、どんなロボット構成が最適かをブレインストーミングしながら戦略を策定します。",
    },
    {
        label: "STEP 02",
        title: "制作期間",
        date: "9月〜12月",
        dateEn: "Sept – Dec",
        desc: "ロボットの設計・製作・プログラミングを行い、エンジニアリングノートを記録します。",
        tags: ["CAD", "fabrication", "programming"],
        body: "約3〜4ヶ月の制作期間中、チームはCAD設計・部品の発注と製造・組み立て・電子機器の配線・制御ソフトウェアの開発を並行して進めます。複数回の試作と改善を経て、競技に最適なロボットを仕上げます。この過程はすべてエンジニアリングノートに記録します。",
    },
    {
        label: "STEP 03",
        title: "予選大会",
        date: "12月〜1月",
        dateEn: "Dec – Jan",
        desc: "地域の予選大会に出場。上位チームが次のステージへ進出します。",
        tags: ["competition", "matches", "qualifying"],
        body: "地域の予選大会では、2チームがアライアンスを組んで他のアライアンスと対戦します。試合結果によるランキングポイントに加え、エンジニアリングノートの審査と審査員インタビューも行われます。競技結果と審査の両軸で評価され、上位チームが次のステージへ進出します。",
    },
    {
        label: "STEP 04",
        title: "地区・国内大会",
        date: "2月〜3月",
        dateEn: "Feb – Mar",
        desc: "国内・地区レベルの大会で競い合い、世界大会の出場権を目指します。",
        tags: ["regional", "alliance", "worlds-spot"],
        body: "予選を通過したチームが国内・地区レベルの大会で競い合います。競技レベルが大幅に上がり、アライアンス・セレクション（同盟選択）も行われるため、チーム間の駆け引きと戦略が重要になります。Inspire Awardなど最高位の審査賞もこの段階で授与されます。",
    },
    {
        label: "FINAL",
        title: "世界大会",
        date: "4月（米国）",
        dateEn: "April · Houston",
        desc: "米国ヒューストンで開催。世界中の精鋭チームが一堂に集まる最終決戦。",
        tags: ["championship", "houston", "global"],
        body: "米国テキサス州ヒューストンで開催されるFIRST Championshipは、FTCの最高峰の舞台です。世界各国から約600チームが集まり、数日間にわたる予選・エリミネーション・アワードセレモニーが行われます。大学のスカウトも多数来場し、参加者にとって人生を変えるような経験の場となっています。",
    },
];

const AWARD_ITEMS = [
    {
        label: "01",
        title: "ロボット性能",
        desc: "自律走行（Auto）とドライバー操作（TeleOp）の2フェーズでスコアを競います。精密な設計と制御アルゴリズムが鍵です。",
    },
    {
        label: "02",
        title: "エンジニアリングノート",
        desc: "設計の過程・試行錯誤・問題解決の記録をまとめたドキュメント。論理的思考と再現性が審査されます。",
    },
    {
        label: "03",
        title: "チームインタビュー",
        desc: "審査員との面談で設計思想や活動内容をプレゼンします。技術力だけでなくコミュニケーション力も問われます。",
    },
    {
        label: "04",
        title: "アウトリーチ活動",
        desc: "地域や学校でのSTEM教育普及活動。社会への貢献度がチームの総合評価に直接反映されます。",
    },
];

const SKILL_ITEMS = [
    { title: "工学・CAD設計", desc: "Autodesk FusionなどのCADツールで3次元設計を行い、実際の部品として製造・組み立てます。" },
    { title: "ソフトウェア開発", desc: "Javaを用いてロボットの自律走行と操縦制御のプログラムを一から開発します。" },
    { title: "チームマネジメント", desc: "役割分担・スケジュール管理・目標設定を通じ、組織として動く力を養います。" },
    { title: "プレゼンテーション", desc: "英語での審査員プレゼンやスポンサーへのピッチなど、実践的なコミュニケーション力を磨きます。" },
    { title: "課題解決思考", desc: "設計→試作→テスト→改善の反復サイクル（PDCA）を実際の現場で体験します。" },
    { title: "グローバル視点", desc: "海外チームとの交流や国際大会を通じ、多様なバックグラウンドの仲間とともに学びます。" },
];

export default function Ftc() {
    const [activeStep, setActiveStep] = useState(0);
    const [mascotState, setMascotState] = useState<"idle" | "traveling" | "landing">("idle");

    const timelineRef = useRef<HTMLDivElement>(null);
    const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mascotElRef = useRef<HTMLDivElement>(null);
    const trackBgRef = useRef<SVGLineElement>(null);
    const trackGoldRef = useRef<SVGLineElement>(null);
    const travelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const activeStepRef = useRef(0);
    activeStepRef.current = activeStep;

    const getMarkerCenters = () => {
        if (!timelineRef.current) return [] as number[];
        const tlRect = timelineRef.current.getBoundingClientRect();
        return markerRefs.current.map((ref) => {
            if (!ref) return 0;
            const r = ref.getBoundingClientRect();
            return r.left - tlRect.left + r.width / 2;
        });
    };

    const applyTrack = (centers: number[], idx: number) => {
        if (!centers.length) return;
        const y = 8;
        trackBgRef.current?.setAttribute("x1", String(centers[0]));
        trackBgRef.current?.setAttribute("y1", String(y));
        trackBgRef.current?.setAttribute("x2", String(centers[centers.length - 1]));
        trackBgRef.current?.setAttribute("y2", String(y));
        trackGoldRef.current?.setAttribute("x1", String(centers[0]));
        trackGoldRef.current?.setAttribute("y1", String(y));
        trackGoldRef.current?.setAttribute("x2", String(centers[idx]));
        trackGoldRef.current?.setAttribute("y2", String(y));
    };

    const applyMascot = (cx: number, animate: boolean) => {
        if (!mascotElRef.current) return;
        mascotElRef.current.style.transition = animate
            ? "left 0.55s cubic-bezier(0.4,0,0.2,1)"
            : "none";
        mascotElRef.current.style.left = `${cx}px`;
    };

    useEffect(() => {
        const init = () => {
            const centers = getMarkerCenters();
            if (!centers.length || centers.every((c) => c === 0)) return;
            applyMascot(centers[0], false);
            applyTrack(centers, 0);
        };

        if (document.fonts?.ready) {
            document.fonts.ready.then(init);
        } else {
            init();
        }

        const ro = new ResizeObserver(() => {
            const centers = getMarkerCenters();
            if (!centers.length) return;
            applyMascot(centers[activeStepRef.current], false);
            applyTrack(centers, activeStepRef.current);
        });

        if (timelineRef.current) ro.observe(timelineRef.current);
        return () => ro.disconnect();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleStepClick = (i: number) => {
        if (i === activeStep) return;
        const centers = getMarkerCenters();
        setMascotState("traveling");
        applyMascot(centers[i], true);
        applyTrack(centers, i);
        setActiveStep(i);
        if (travelTimerRef.current) clearTimeout(travelTimerRef.current);
        travelTimerRef.current = setTimeout(() => {
            setMascotState("landing");
            setTimeout(() => setMascotState("idle"), 400);
        }, 560);
    };

    const step = TIMELINE_STEPS[activeStep];

    return (
        <>
            <Header />

            <div className="ftcBanner topBanner">
                <FadeInText delayMs={0}>
                    <h1 className="bannerTitle">FIRST TECH CHALLENGE</h1>
                </FadeInText>
                <FadeInText delayMs={300}>
                    <h2 className="bannerSub">FTCとは</h2>
                </FadeInText>
            </div>

            {/* What is FTC */}
            <div className="fullWidthContainer">
                <div className="ftcIntroGrid">
                    <div className="introText">
                        <h3 className="heading">About FTC</h3>
                        <h3 className="subHeading">FTCとは</h3>
                        <p>
                            <strong>FIRST Tech Challenge (FTC)</strong>{" "}
                            は、アメリカの非営利団体
                            <strong>
                                {" "}
                                FIRST（For Inspiration and Recognition of
                                Science and Technology）
                            </strong>
                            が主催する国際ロボット競技会です。12歳〜18歳の中高生を対象とし、毎シーズン新しいゲームテーマのもとでロボットを設計・制作・プログラムし、世界中のチームと競い合います。
                        </p>
                        <p>
                            FTCの最大の特徴は、ロボットの競技結果だけでなく、
                            <strong>
                                チームの協働力・エンジニアリングの過程・アウトリーチ活動
                            </strong>
                            も審査対象となる点です。技術力と人間力が同時に問われる、総合的な教育型競技会です。
                        </p>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="fullWidthContainer altBack">
                <h3 className="heading">Season Schedule</h3>
                <h3 className="subHeading">シーズンスケジュール</h3>
                <p className="timelineHint">各ステップをクリックすると詳細が表示されます</p>

                <div className="tlOuter" ref={timelineRef}>
                    {/* SVG track */}
                    <div className="tlTrackLayer">
                        <svg className="tlTrackSvg" xmlns="http://www.w3.org/2000/svg">
                            <line
                                ref={trackBgRef}
                                stroke="#d0ccc2"
                                strokeWidth="1.5"
                                strokeDasharray="4 7"
                                strokeLinecap="round"
                            />
                            <line
                                ref={trackGoldRef}
                                stroke="#b8923a"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Mascot */}
                    <div className="tlMascotLayer">
                        <div
                            ref={mascotElRef}
                            className={`tlMascot${mascotState === "traveling" ? " tlMascotTraveling" : ""}${mascotState === "landing" ? " tlMascotLanding" : ""}`}
                        >
                            <MascotSVG />
                        </div>
                    </div>

                    {/* Stops */}
                    <div className="tlStops">
                        {TIMELINE_STEPS.map((s, i) => {
                            const state =
                                i < activeStep ? "past" : i === activeStep ? "active" : "future";
                            return (
                                <div
                                    key={s.label}
                                    className={`tlStop tlStop--${state}`}
                                    onClick={() => handleStepClick(i)}
                                >
                                    <div
                                        className="tlMarker"
                                        ref={(el) => { markerRefs.current[i] = el; }}
                                    >
                                        {STEP_ICONS[i]}
                                    </div>
                                    <span className="tlStepLabel">{s.label}</span>
                                    <span className="tlDatePill">{s.date}</span>
                                    <h3 className="tlTitle">{s.title}</h3>
                                    <p className="tlDesc">{s.desc}</p>
                                    <svg
                                        className="tlChevron"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            );
                        })}
                    </div>

                    {/* Detail panel */}
                    <div className="tlDetail" key={activeStep}>
                        <div className="tlDetailMeta">
                            <p className="tlDetailNum">{step.label} / 05</p>
                            <p className="tlDetailDate">
                                {step.date} · {step.dateEn}
                            </p>
                            <div className="tlDetailTags">
                                {step.tags.map((t) => (
                                    <span key={t} className="tlDetailTag">{t}</span>
                                ))}
                            </div>
                        </div>
                        <div className="tlDetailContent">
                            <h4 className="tlDetailTitle">{step.title}</h4>
                            <p className="tlDetailBody">{step.body}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Judging */}
            <div className="fullWidthContainer">
                <h3 className="heading">Judging Criteria</h3>
                <h3 className="subHeading">審査の4本柱</h3>
                <p className="awardIntro">
                    FTCでは、ロボットの競技結果だけが評価されるわけではなく、設計の過程をまとめたエンジニアリングノート、審査員との面談、地域へのアウトリーチ活動も同等に審査されます。総合的な人間力とチームとしての成長が問われる点が、FTCを単なるロボット大会とは異なる教育プログラムたらしめています。
                </p>
                <div className="awardGrid">
                    {AWARD_ITEMS.map((item) => (
                        <div key={item.label} className="awardItem">
                            <span className="awardNum">{item.label}</span>
                            <h4 className="awardTitle">{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills */}
            <div className="fullWidthContainer altBack">
                <h3 className="heading">What We Learn</h3>
                <h3 className="subHeading">FTCが育む力</h3>
                <div className="skillsGrid">
                    {SKILL_ITEMS.map((item) => (
                        <div key={item.title} className="skillItem">
                            <h4 className="skillTitle">{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sponsors */}
            <div className="fullWidthContainer sponsorSection">
                <h3 className="heading">Become a Sponsor</h3>
                <h3 className="subHeading">スポンサーの皆様へ</h3>
                <p className="sponsorBody">
                    Hiroo
                    Roboticsへのご支援は、次世代の日本のエンジニアやリーダーを育てることへの投資です。
                    チームへのスポンサーシップを通じて、ロゴ掲載・活動報告・メディア露出など、チームとともに成長する機会をご提供できます。
                    ご興味をお持ちの方は、ぜひお気軽にお問い合わせください。
                </p>
                <a href="./" className="sponsorCta">
                    お問い合わせ
                </a>
            </div>

            <Footer />
        </>
    );
}
