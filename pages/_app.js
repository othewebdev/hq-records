import { DynamicFooter, DynamicHeader } from "@/modules/dynamic";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Layout from "@/modules/layout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
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
