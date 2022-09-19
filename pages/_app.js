import "../styles/globals.css";
import "../styles/reset.css";
import AppProvider from "../utils/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
