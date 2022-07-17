import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bilal Arve</title>
        <meta name="description" content="Bilal Arve portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>main</main>

      <Footer />
    </div>
  );
}
