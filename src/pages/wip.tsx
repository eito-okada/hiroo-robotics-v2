import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./wip.css";

export default function Wip() {
    useEffect(() => {
        document.title = "工事中 | Hiroo Robotics";
    }, []);

    return (
        <>
            <Header />
            <main className="wipMain">
                <div className="wipBg" />
                <div className="wipOverlay" />
                <div className="wipContent">
                    <p className="wipLabel EN">UNDER CONSTRUCTION</p>

                    <h1 className="wipTitle JP">
                        このページは<span className="EN">準備中</span>です
                    </h1>

                    <p className="wipBody JP">
                        現在コンテンツを準備しています。
                        <br />
                        近日公開予定ですので、しばらくお待ちください。
                    </p>

                    <a href="/" className="wipBack JP">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M19 12H5M5 12L12 19M5 12L12 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        ホームに戻る
                    </a>
                </div>
            </main>
            <Footer />
        </>
    );
}
