import "../styles/bulma.css";
import "../styles/globals.css";
import Navbar from "../components/NavBar";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} /> <Scroll />
      <Footer />
    </>
  );
}

export default MyApp;
