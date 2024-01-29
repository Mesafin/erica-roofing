import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "ERICA - Best roofing services in Canada"}
                </title>
            </Head>
        </>
    )
}

export default PageHead