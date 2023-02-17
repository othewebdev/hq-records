import { DynamicFooter, DynamicHeader } from "@/modules/dynamic";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";

import { useState } from "react";
import Layout from "@/modules/layout";
import { getCookie } from "cookies-next";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [transitionEffect, setTransitionEffect] = useState(1);
  const consent = getCookie("localConsent");

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Layout>
        <main className={inter.className}>
          <DynamicHeader />
          <Component {...pageProps} />
          <DynamicFooter />
        </main>
      </Layout>
    </>
  );
}
