import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html lang="en" id="#top">
        <Head>
          <meta
            name="google-site-verification"
            content="Zl16Yyd260nAEss2Bf_xvuNTv9TPyHGPFvEYGEjpc7k"
          />
          <meta
            name="msvalidate.01"
            content="15BA8BF7FB89C8BF32490106FF8C9BA9"
          />
        <link rel="shortcut icon" href="/assets/img/favicon.png" />
        </Head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
          rel="stylesheet"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
