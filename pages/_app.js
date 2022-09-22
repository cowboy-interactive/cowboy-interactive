import { Footer } from "../comps/Footer/Footer";
import { Navbar } from "../comps/Navbar/Navbar";
import "../styles/globals.css";
import "../styles/reset.css";
import AppProvider from "../utils/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Navbar
        all={"height: 80px; width: 80vw; max-width: 1600px; "}
        medium={"width: 90vw;"}
      />
      <Component {...pageProps} />
      <Footer/>
    </AppProvider>
  );
}

export default MyApp;
