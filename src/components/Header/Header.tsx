import { useState, useEffect } from "react";
import styles from "./Header.module.css";

interface AnimationTextProps {
    children: React.ReactNode;
    delayMs: number;
}

const UnderlineText: React.FC<AnimationTextProps> = ({ children, delayMs }) => {
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineOrigin, setUnderlineOrigin] = useState("left");

    useEffect(() => {
        const startGrowthTimer = setTimeout(() => {
            setUnderlineOrigin("left");
            setUnderlineWidth(1);
        }, 100 + delayMs);

        const startShrinkTimer = setTimeout(() => {
            setUnderlineOrigin("right");
            setUnderlineWidth(0);
        }, 800 + delayMs);

        return () => {
            clearTimeout(startGrowthTimer);
            clearTimeout(startShrinkTimer);
        };
    }, [delayMs]);

    const textContainerStyle: React.CSSProperties = {
        position: "relative",
        display: "inline-block",
        height: "min-content",
    };

    const underlineStyle: React.CSSProperties = {
        position: "absolute",
        bottom: "0px",
        left: "12px",
        width: "95%",
        height: "2px",
        backgroundColor: "#0C1A52",
        transform: `scaleX(${underlineWidth})`,
        transformOrigin: underlineOrigin,
        transition: `transform 500ms ease-in-out`,
    };

    return (
        <div style={textContainerStyle}>
            {children}
            <div style={underlineStyle} />
        </div>
    );
};

const NAV_LINKS = [
    { href: "./", label: "ホーム" },
    { href: "./wip", label: "FTCとは" },
    { href: "./about-us", label: "チームについて" },
    { href: "./wip", label: "お知らせ" },
    { href: "./wip", label: "お問い合せ" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.header}>
            <a href="./" className={styles.logoTitleHolder}>
                <div className={styles.logo}>
                    <img src="./logo.png" alt="" />
                </div>
                <UnderlineText delayMs={0}>
                    <div className={styles.title}>
                        <span className={styles.blueSpan}>HIROO</span> ROBOTICS
                    </div>
                </UnderlineText>
            </a>

            <div className={styles.navList}>
                {NAV_LINKS.map((link) => (
                    <div key={link.label} className={styles.navItem}>
                        <a href={link.href}>
                            <p>{link.label}</p>
                        </a>
                    </div>
                ))}
            </div>

            <button
                className={styles.hamburger}
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="メニュー"
            >
                <span
                    className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`}
                />
                <span
                    className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`}
                />
                <span
                    className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`}
                />
            </button>

            {menuOpen && (
                <nav className={styles.mobileNav}>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={styles.mobileNavItem}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </div>
    );
}
