import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Head>
        <link rel="icon" href="/Icon.png" />
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
