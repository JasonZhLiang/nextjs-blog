import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>\
            </Head>
            {/* Next Script should not be wrapped inside Head */}
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam. Quibusdam, quasi</p>
        </Layout>
    );
}