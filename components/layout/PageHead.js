import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
      <>
        <Head>
          <meta
            name="google-site-verification"
            content="Zl16Yyd260nAEss2Bf_xvuNTv9TPyHGPFvEYGEjpc7k"
          />
          <meta name="description" content="best roofing service in canada" />
          <title>
            {headTitle ? headTitle : "ERICA - Best roofing services in Canada"}
          </title>
        </Head>
      </>
    );
}

export default PageHead