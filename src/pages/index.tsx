import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { locale, locales } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ marginTop: 80}}> {/* navbar hotfix */}
        <h1>{locale}</h1>
        <h2>{t("test")}</h2>
        <div>
          <h3>With Link</h3>
          <h1>Choose your locale: </h1>

          {locales?.map((l) => (
            <h4 key={l}>
              <Link href={`/`} locale={l}>
                locale: {l}
              </Link>
            </h4>
          ))}
        </div>
        <p style={{height: 5000}}>
          3000px scroll
        </p>
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
