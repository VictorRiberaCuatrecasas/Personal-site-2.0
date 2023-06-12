import styles from "./HeaderIntro.module.scss";
import { useTranslation } from "next-i18next";

export default function HeaderIntro() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.titleWrapper}>
      <h3 className={styles.introId}>
        {t("headerIntroductionOne")}&nbsp;
        <div className={styles.name}  data-cursor="pointer2">
          {t("victorName")}
          <div className={styles.waveWrapper}>
            <div className={styles.wave}></div>
          </div>
        </div>
      </h3>
      <h3 className={styles.introId}>{t("headerIntroductionTwo")}</h3>
      <div className={styles.introRoles}>
        <p className={styles.introRole}>{t("introRoleOne")}</p>
        <p className={styles.introRole}>{t("introRoleTwo")}</p>
      </div>

      {/* <div className="intro-links">
        <ul>
          <li>
            <div className="link-wrapper">
              <div className="link">
                <a href="/work">→ See my projects</a>
              </div>
              <div className="link-underline"></div>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <div className="link">
                <a href="/about">→ More about me</a>
              </div>
              <div className="link-underline"></div>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
