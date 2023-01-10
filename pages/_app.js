import "../styles/globals.css";
import "../styles/reset.css";
import AppProvider from "../utils/provider";
import Head from "next/head";
import { Footer } from "../comps/Footer/Footer";
import { Navbar } from "../comps/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
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
      <Navbar
        all={"height: 80px; width: 80vw; max-width: 1600px; "}
        medium={"width: 90vw;"}
      />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}

export default MyApp;
