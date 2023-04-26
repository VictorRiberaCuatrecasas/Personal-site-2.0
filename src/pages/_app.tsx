import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../common/components/layout/Layout";
import Head from "next/head";

import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
