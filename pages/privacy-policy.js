import PageHeader from "@/modules/PageHeader";
import PPModule from "@/modules/PrivacyPolicy";
import styles from "@/styles/Contact.module.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <NextSeo
        title="Privacy Policy | HQ Records"
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
        <title>Privacy Policy | HQ Records</title>
        <meta
          name="description"
          content="HQ Records is an indie record label"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageHeader text="Privacy Policy" />
        <PPModule />
      </main>
    </>
  );
}
