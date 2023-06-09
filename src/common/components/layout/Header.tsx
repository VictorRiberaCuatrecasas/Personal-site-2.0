import MainNavigation from "./MainNavigation";
import HeaderIntro from "../header/HeaderIntro";
import styles from "./Header.module.scss";

export default function Header () {
    return (
        <header className={styles.header}>
            <MainNavigation />
            <HeaderIntro />
        </header>
    )
}