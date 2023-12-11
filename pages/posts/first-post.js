import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import styles from "./first-post.module.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "../../components/card";
export default function FirstPost() {

    // const duplicateCards = Array.from(
    //     { length: 10 },
    //     (_, i) => <Card key={i} />
    // );
    const cards = Array.from({ length: 9 }, (v, i) => i);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

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
            <p>react-multi-carousel</p>
            <Carousel
                // sx={{ paddingRight: 40, paddingLeft: 40 }}
                responsive={responsive}
                // itemClass={{ paddingLeft: 40, paddingRight: 40 }}
                // dotListClass="custom-dot-list-style"
                // partialVisible={false}
                // transitionDuration={1000}
                // itemClass="carousel-item-padding-140-px"
                // centerMode={true}
                itemClass={styles.carouselItem}
            // partialVisible={false}
            >
                {cards.map((card, index) => (
                    <Card key={index} />
                ))}
                {/* <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div> */}
            </Carousel>
        </Layout>
    );
}