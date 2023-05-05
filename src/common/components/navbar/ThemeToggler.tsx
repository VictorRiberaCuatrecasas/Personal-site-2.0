import styles from "./ThemeToggler.module.scss";

export default function ThemeToggler() {
  return (
    <div className={`${styles.toggle} ${styles.toggleDayNight}`}>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}
