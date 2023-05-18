import styles from "./LocaleSelector.module.scss";
import { useRouter } from "next/router";

export default function LocaleSelector() {
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      router.push("/", "/", { locale: "es" });
    } else {
      router.push("/", "/", { locale: "en" });
    }
  }

  return (
    <div className={styles.switch}>
      <input
        type="checkbox"
        id="language-toggle"
        onChange={handleChange}
        className={`${styles.checkToggle} ${styles.checkToggleRoundFlat}`}
      />
      <label htmlFor="language-toggle"></label>
      <span className={styles.on}>EN</span>
      <span className={styles.off}>ES</span>
    </div>
  );
}
