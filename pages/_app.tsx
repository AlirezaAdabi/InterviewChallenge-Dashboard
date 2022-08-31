import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
