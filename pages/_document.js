import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FRMYPLFSLF"
        />
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
      </body>
    </Html>
  );
}
