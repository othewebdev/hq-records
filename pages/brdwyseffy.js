import Head from "next/head";
import { NextSeo } from "next-seo";
import { Inter } from "@next/font/google";
import styles from "@/styles/Artists.module.css";
import PageHeader from "@/modules/PageHeader";
import ARTISTS from "@/data/artistsInformation";
import ArtistInfo from "@/modules/ArtistInfo";

const inter = Inter({ subsets: ["latin"] });

export default function ArtistsBrdwySeffySmoove() {
  const artist = ARTISTS[4];
  return (
    <>
      <NextSeo
        title="BrdwySeffySmoove | HQ Records"
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
        <title>BrdwySeffySmoove | HQ Records</title>
        <meta
          name="description"
          content="HQ Records is an indie record label"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageHeader text={artist.altName} />
        <ArtistInfo artist={artist} altName />
      </main>
    </>
  );
}
