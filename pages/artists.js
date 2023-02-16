import Head from "next/head";
import { NextSeo } from "next-seo";
import { Inter } from "@next/font/google";
import styles from "@/styles/About.module.css";
import PageHeader from "@/modules/PageHeader";
import ArtistGrid from "@/modules/ArtistGrid";
import ARTISTS from "@/data/artistsInformation";

const inter = Inter({ subsets: ["latin"] });

export const config = {
  unstable_runtimeJS: false,
};

export default function Artists() {
  return (
    <>
      <NextSeo
        title="Artists | HQ Records"
        description="HQ Records is an indie record label"
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Odis Barnett",
          },
          {
            name: "application-name",
            content: "HQ Records",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        canonical="https://www.canonical.ie/"
      />
      <Head>
        <title>Artists | HQ Records</title>
        <meta
          name="description"
          content="HQ Records is an indie record label"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageHeader text="artists." />
        <ArtistGrid artists={ARTISTS} />
      </main>
    </>
  );
}
