import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={styles.links}>
                <div className={styles.link}>
                    <a href="./">ホーム</a>
                </div>
                <div className={styles.link}>
                    <a href="./wip">FTCとは</a>
                </div>
                <div className={styles.link}>
                    <a href="./about-us">チームについて</a>
                </div>
                <div className={styles.link}>
                    <a href="./wip">お知らせ</a>
                </div>
                <div className={styles.link}>
                    <a href="./wip">お問い合わせ</a>
                </div>
            </div>
            <div className={styles.sns}>
                <a href="https://x.com/Hiroo_Robotics" target="_blank">
                    <img className={styles.snsLink} src="./x-logo.png" alt="" />
                </a>
                <a
                    href="https://www.instagram.com/hiroo_robotics"
                    target="_blank"
                >
                    <img
                        className={styles.snsLink}
                        src="./insta-logo.png"
                        alt=""
                    />
                </a>
                <a href="https://note.com/ftc_32682_hiroo" target="_blank">
                    <img
                        className={styles.snsLink}
                        src="./note-logo.png"
                        alt=""
                    />
                </a>
            </div>
        </footer>
    );
}
