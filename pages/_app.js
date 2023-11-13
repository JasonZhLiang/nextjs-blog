import '../styles/global.css';
export default function App({ Component, pageProps }) {
    return (
        <div>
            <style jsx global>{`
                {/* body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                * {
                    box-sizing: border-box;
                }
                img {
                    max-width: 100%;
                } */}
            `}</style>
            <p>shared content set from _app.js</p>
            <Component {...pageProps} />
        </div>
    )
}