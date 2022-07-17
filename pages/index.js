import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiChat, HiClipboardList } from "react-icons/hi";
import Button from "../components/Button";

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

      <main>
        <div className="wrapper grid grid-cols-12 items-center justify-between gap-5 pb-28 pt-32">
          <div className="col-span-5 col-start-2">
            <h1 className="mb-[34px] text-[64px] font-bold leading-tight text-main-dark-blue">
              Hello! I Am
              <br />
              Bilal Arve.
              <br />I Am an Illustrator
              {/* <span className="rounded-full bg-main-purple py-3 px-6 text-2xl font-bold text-white">
                Illustrator
              </span> */}
            </h1>
            <p className="mb-[50px] max-w-[466px] text-base leading-relaxed text-main-gray">
              Hey Im Muhammad Bilal Arve and i’m from Indonesia.I have been
              working as an Illustrator and Graphic Designer with more than 3
              years of experience and UI UX Designer for 1 years and still
              learning and exploring.
            </p>
            <div className="mb-14 flex gap-[34px]">
              <Button text="Lets Talk" theme="fill-blue" icon={<HiChat />} />
              <Button
                text="Resume"
                theme="border-dark-blue"
                icon={<HiClipboardList />}
              />
            </div>
            <div className="flex gap-6">
              <div>
                <p className="mb-4 text-base font-medium text-main-gray">
                  Projects Completed
                </p>
                <p className="text-4xl font-bold text-main-dark-blue">300+</p>
              </div>
              <div className="h-20 border-l-2 border-main-light-gray" />
              <div>
                <p className="mb-4 text-base font-medium text-main-gray">
                  Years Experience
                </p>
                <p className="text-4xl font-bold text-main-dark-blue">4</p>
              </div>
              <div className="h-20 border-l-2 border-main-light-gray" />
              <div>
                <p className="mb-4 text-base font-medium text-main-gray">
                  Happy Clients
                </p>
                <p className="text-4xl font-bold text-main-dark-blue">70+</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex justify-end">
            <img
              src="/homepage-illustration.svg"
              alt="Homepage illutration"
              className="w-full max-w-[636px]"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
