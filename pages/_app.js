import "../styles/globals.css";
import "../styles/reset.css";
import AppProvider from "../utils/provider";
import Head from "next/head";
import { Footer } from "../comps/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Cowboy Interactive | Small Business Web Development</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}

export default MyApp;
