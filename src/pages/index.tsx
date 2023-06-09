import Head from "next/head";
import Header from "../components/header/Header";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Victor Ribera</title>
        <meta
          name="description"
          content="Victor Ribera personal website and portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1>{locale}</h1>
        <h2>{t("test")}</h2>

        <p style={{ height: 5000 }}>3000px scroll</p>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
