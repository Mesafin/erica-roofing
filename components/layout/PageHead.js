import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
      <>
        <Head>
          
          <meta name="description" content="best roofing service in canada" />
          <title>
            {headTitle ? headTitle : "ERICA - Best roofing services in Canada"}
          </title>
        </Head>
      </>
    );
}

export default PageHead