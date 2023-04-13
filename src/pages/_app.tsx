import "../styles/global/globals.css"
import Layout from "../components/Layout/Layout"
import Head from 'next/head'


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
  }