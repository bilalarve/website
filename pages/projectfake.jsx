import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { projects } from "./api/projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bilal Arve | Projects fake</title>
        <meta name="description" content="Bilal Arve portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="wrapper mt-52 mb-36">
          <div className="mb-14 grid grid-cols-12 gap-5">
            <h2 className="col-span-5 col-start-2 text-5xl font-bold text-main-dark-blue">
              kRL Access App Redesign
            </h2>
            <p className="col-span-5 text-base text-main-gray">
              Hey Im Muhammad Bilal Arve and i’m from Indonesia.I have been
              working as an Illustrator and Graphic Designer with more than 3
              years of experience and UI UX Designer for 1 years and still
              learning and exploring.Hey Im Muhammad Bilal Arve and i’m from
              Indonesia.I have been working as an Illustrator and Graphic
              Designer with more than 3 years of experience and UI UX Designer
              for 1 years and still learning and exploring.
            </p>
          </div>

          <div className=""></div>

          <iframe
            className="aspect-video w-full"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNJXgcrsn1yxHmLWC2IhsVj%2Fbersihin-cleaning-app%3Fpage-id%3D0%253A1%26node-id%3D27%253A372%26starting-point-node-id%3D27%253A372%26scaling%3Dscale-down"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}
