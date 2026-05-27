import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TEAM_DATA from "../assets/teamData.json";
import "./About.css";

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

interface TeamMember {
    id: number;
    name: string;
    title?: string;
    bio: string;
    imageUrl: string;
    team: string;
}

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="team-card">
        <img
            src={member.imageUrl}
            alt={`Profile of ${member.name}`}
            className="profile-image"
            onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                    "https://placehold.co/96x96/E5E7EB/9CA3AF?text=NA";
            }}
        />
        <div className="card-info">
            <div className="name-title-wrapper">
                <h3 className="name">{member.name}</h3>
                {member.title && <p className="role">{member.title}</p>}
            </div>
            {member.bio && <p className="bio">{member.bio}</p>}
        </div>
    </div>
);

export default function About() {
    const members = TEAM_DATA as TeamMember[];

    const leader = members
        .filter((m) => m.team === "Leader")
        .sort((a, b) => a.id - b.id);

    const swMembers = members
        .filter((m) => m.team === "soft")
        .sort((a, b) => a.id - b.id);

    const hwMembers = members
        .filter((m) => m.team === "hard")
        .sort((a, b) => a.id - b.id);

    const prMembers = members
        .filter((m) => m.team === "PR")
        .sort((a, b) => a.id - b.id);

    return (
        <>
            <Header />
            <div className="teamBanner topBanner">
                <FadeInText delayMs={0}>
                    <h1 className="bannerTitle">ABOUT US</h1>
                </FadeInText>
                <FadeInText delayMs={300}>
                    <h2 className="bannerSub">チームについて</h2>
                </FadeInText>
            </div>

            <div className="fullWidthContainer">
                <div className="introGrid">
                    <div className="introText">
                        <h3 className="heading">Who We Are</h3>
                        <h3 className="subHeading">チームについて</h3>
                        <p>
                            <strong>Hiroo Robotics </strong>
                            は広尾学園中学校・高等学校に在籍する生徒で構成された、
                            <strong>発足2年目</strong>のFTCチームです。
                            <strong>開発メンバー</strong>
                            は機械工学や宇宙工学など主にSTEM分野に、
                            <strong>マーケテイングメンバー</strong>
                            は経営やビジネスなどへの興味と情熱が強いメンバーが集まっており、生徒が主体となって活動しています。メンバー全員が
                            <strong>英語が堪能</strong>
                            であり、多くのメンバーが国際的なバッククラワンドを持っています。
                        </p>
                        <p>
                            我々は毎シーズン更新されるルールに基づき、ロボットの
                            <strong>アイデア立案</strong>から
                            <strong>CAD設計</strong>、<strong>試作</strong>、
                            <strong>組み立て</strong>、<strong>配線</strong>
                            までを一貫して行います。世界レベルの競技に参加することで困難に直面した際の対応力や創造性、そして人間的成長を促します。多様なバックグラウンドを持つメンパー、興味を突き詰めるためにできたチームです！
                        </p>
                    </div>
                    <div className="missionBox">
                        <h4 className="missionLabel">OUR MISSION</h4>
                        <ol className="missionList">
                            <li>世界大会への進出</li>
                            <li>
                                国内の他の高校生に向けた
                                <strong>FTCの認知度を上げる</strong>こと
                            </li>
                            <li>次世代メンバーの育成</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="fullWidthContainer altBack">
                <h3 className="heading">What We Do</h3>
                <h3 className="subHeading">活動内容</h3>
                <div className="activityGrid">
                    <div className="activityItem">
                        <span className="activityNum">01</span>
                        <h4 className="activityTitle">ロボット設計・制作</h4>
                        <p>（後ほど記載）</p>
                    </div>
                    <div className="activityItem">
                        <span className="activityNum">02</span>
                        <h4 className="activityTitle">プログラミング</h4>
                        <p>（後ほど記載）</p>
                    </div>
                    <div className="activityItem">
                        <span className="activityNum">03</span>
                        <h4 className="activityTitle">アウトリーチ・広報</h4>
                        <p>（後ほど記載）</p>
                    </div>
                    <div className="activityItem">
                        <span className="activityNum">04</span>
                        <h4 className="activityTitle">戦略立案</h4>
                        <p>
                            毎年更新される競技ルールを徹底的に分析し、シーズンのロボットの方針を決定します。自律走行と遠隔操作のそれぞれのフェーズでの立ち回りやなども考案します。
                        </p>
                    </div>
                    <div className="activityItem">
                        <span className="activityNum">05</span>
                        <h4 className="activityTitle">イベント運営</h4>
                        <p>（後ほど記載）</p>
                    </div>
                </div>
            </div>

            <div className="fullWidthContainer membersSection">
                <h3 className="heading">Team Members</h3>
                <h3 className="subHeading">チームメンバー</h3>
                <p className="membersIntro">
                    チーム内で<strong>開発部門</strong>と<strong>財務PR</strong>
                    の2つの分掌に分かれています。
                </p>

                <p className="deptGroupLabel">チームリーダー</p>
                <div className="deptGrid">
                    {leader.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>

                <p className="deptGroupLabel">開発部門</p>
                <p className="deptLabel">ソフト</p>
                <div className="deptGrid">
                    {swMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
                <p className="deptLabel">ハード</p>
                <div className="deptGrid">
                    {hwMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
                <p className="deptGroupLabel">財務PR</p>
                <div className="deptGrid">
                    {prMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
