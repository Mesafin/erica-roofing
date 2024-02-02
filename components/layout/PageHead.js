import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
      <>
        <Head>
          <meta
            name="description"
            content="Welcome to Your Company Name - Calgary's trusted roofing contractor. We provide top-quality residential and exterior services with decades of combined experience."
          />
          <title>
            {headTitle ? headTitle : "ERICA - Best roofing services in Calgary"}
          </title>
        </Head>
      </>
    );
}

export default PageHead