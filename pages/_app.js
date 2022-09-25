import { Footer } from "../comps/Footer/Footer";
import { Navbar } from "../comps/Navbar/Navbar";
import "../styles/globals.css";
import "../styles/reset.css";
import AppProvider from "../utils/provider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Contractor Pro</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}

export default MyApp;
