import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { LayoutProps } from "../../types";
import styles from "./Layout.module.css"

export default function Layout(props: LayoutProps) {
  return (
    <>
      <div className={styles.sampleBody}>
        <MainNavigation />
        <main>{props.children}</main>
        <Footer />
      </div>
      <div className={styles.noiseContainer}></div>
    </>
  );
}
