import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "../../types";
import styles from "./Layout.module.scss"

export default function Layout(props: LayoutProps) {
  return (
    <>
      <div className={styles.sampleBody}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
      <div className={styles.noiseContainer}></div>
    </>
  );
}
