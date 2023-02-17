import { DynamicFooter, DynamicHeader } from "@/modules/dynamic";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Script from "next/script";
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
      <Script
        id="gtag_mid"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FRMYPLFSLF');`,
        }}
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBVXLQX');`,
        }}
      />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FRMYPLFSLF" />
      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}

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
