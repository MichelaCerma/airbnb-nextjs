import "@/styles/globals.css";

  import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
