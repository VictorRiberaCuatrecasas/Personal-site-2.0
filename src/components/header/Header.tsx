import HeaderIntro from "./HeaderIntro";
import styles from "./Header.module.scss";

export default function Header () {
    return (
        <header className={styles.header}>
            <HeaderIntro />
        </header>
    )
}