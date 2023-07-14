import "@/styles/globals.css";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [AuthUser, setAuthUser] = useState(true);
  return (
    <>
      <NavBar setAuthUser={setAuthUser} AuthUser={AuthUser} />
      <Component {...pageProps} setAuthUser={setAuthUser} />
      <Footer />
    </>
  );
}
