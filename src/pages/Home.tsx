import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Home.css";

interface FadeInTextProps {
    children: React.ReactNode;
    delayMs: number;
}

const FadeInText: React.FC<FadeInTextProps> = ({ children, delayMs }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
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

export default function Home() {
    useEffect(() => {
        document.title =
            "Hiroo Robotics | 世界的なロボコンに挑戦する高校生チーム";
    }, []);
    return (
        <>
            <Header />
            <main>
                <div className="topMain EN">
                    <div className="heroBg" />
                    <div className="heroOverlay" />
                    <div className="heroContent">
                        <FadeInText delayMs={0}>
                            <h3 className="teamMotto JP">
                                <span className="EN">STEM</span>教育から、未来を創る
                            </h3>
                        </FadeInText>
                        <FadeInText delayMs={300}>
                            <h1 className="teamName">
                                <span className="goldSpan">HIROO</span> ROBOTICS <span className="teamNum">#32682</span>
                            </h1>
                        </FadeInText>
                    </div>
                    <FadeInText delayMs={700}>
                        <svg
                            fill="#FFFFFF"
                            width="32px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="arrow"
                        >
                            <path d="M15.71,17.29a1,1,0,0,0-1.42,0L13,18.59V3a1,1,0,0,0-2,0V18.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,15.71,17.29Z"/>
                        </svg>
                    </FadeInText>
                </div>
                <div className="news">
                    <div className="newsTitleContainer">
                        <h2 className="newsTitle JP">お知らせ</h2>
                    </div>
                    <div className="newsContainer">
                        <a href="./">
                            <div className="newsColumn">
                                <div className="columnDate JP">
                                    <p>2025.11.24</p>
                                </div>
                                <div className="columnTitle JP">
                                    <p>ホームページを開設しました</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="newsContainer">
                        <a href="./">
                            <div className="newsColumn">
                                <div className="columnDate JP">
                                    <p>2025.11.13</p>
                                </div>
                                <div className="columnTitle JP">
                                    <p>
                                        Noteを更新しました |{" "}
                                        <i>
                                            未来を設計する高校生たち :
                                            <span className="EN"> FTC</span>
                                            への挑戦 〜大会・チーム紹介〜
                                        </i>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="intro">
                    <h1 className="introTitle EN">About Us</h1>
                    <h2 className="introSub EN">
                        HIROO ROBOTICS
                        <span className="introSub JP">について</span>
                    </h2>
                    <div className="layoutContainer1">
                        <div className="textContainer">
                            <h3 className="JP">
                                <span className="EN">Hiroo Robotics</span>
                                は、
                                <span className="EN">FIRST Tech Challenge</span>
                                というロボコンに出場することを目標とした高校生チームです。
                            </h3>
                            <p className="JP">
                                多方向の<span className="EN">STEM</span>
                                分野に興味と情熱を持った生徒が集まったこのチームが目指すのは、韓国大会で結果を残すことだけでなく、アメリカで行われるFTC本大会への日本チームの出場権の獲得、そして日本の子どもたちへの実用的な
                                <span className="EN">STEM</span>
                                教育です。
                            </p>
                            <div className="moreButtonContainer">
                                <a href="./about-us" className="moreButton JP">
                                    詳細はこちら
                                </a>
                            </div>
                        </div>
                        <div className="imageContainer">
                            <img src="./robotBuilding.webp" alt="" />
                        </div>
                    </div>
                </div>

                <div className="aboutFtc">
                    <h1 className="ftcTitle EN">
                        FTC<span className="JP">とは</span>?
                    </h1>
                    <h2 className="ftcSub EN">What is FIRST Tech Challenge?</h2>
                    <div className="layoutContainer1">
                        <div className="imageContainer">
                            <img src="./ftcPhoto.jpg" alt="" />
                        </div>
                        <div className="textContainer">
                            <h3 className="JP">
                                <span className="EN">
                                    FIRST Tech Challenge (FTC)
                                </span>{" "}
                                は、アメリカの非営利団体{" "}
                                <span className="EN">
                                    FIRST (For Inspiration and Recognition of
                                    Science and Technology)
                                </span>
                                が主催する、中高生（12歳〜18歳、中学1年生〜高校3年生相当）を対象とした国際的なロボット競技会です。
                            </h3>
                            <p className="JP">
                                全世界から約9000チームが参加する世界最大規模のロボットコンテストです。
                            </p>
                            <div className="moreButtonContainer">
                                <a href="./" className="moreButton JP">
                                    詳細はこちら
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
