import MainNavigation from "./MainNavigation";
import styles from "./Header.module.scss";

export default function Header () {
    return (
        <header className={styles.header}>
            <MainNavigation />
            <div className={styles.titleBox}>
                <h1>Im Victor</h1>
                <h2>A web Developer</h2>
            </div>
        </header>
    )
}