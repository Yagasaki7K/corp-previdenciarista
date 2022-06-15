import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document({ originalUrl }) {
  return (
    <Html lang='pt-BR'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={originalUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css" strategy="lazyOnload" />
      </body>
    </Html>
  );
};
