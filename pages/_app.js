import '../styles/global.css';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps: { session, ...pageProps } }) {
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
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </div>
    )
}