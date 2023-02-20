import ArtistContent from "@/modules/ArtistContent";
import styles from "@/styles/About.module.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function ArtistsVeyster() {
  const artist = "Veyster";
  return (
    <>
      <NextSeo
        title={`${artist} | HQ Records`}
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
        <title>{artist} | HQ Records</title>
        <meta
          name="description"
          content="HQ Records is an indie record label"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ArtistContent artistName={artist} />
      </main>
    </>
  );
}
