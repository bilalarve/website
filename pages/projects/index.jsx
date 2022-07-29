import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ProjectCard from "../../components/ProjectCard";

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Bilal Arve | Projects page</title>
        <meta name="description" content="Bilal Arve portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="wrapper mt-52 pb-36">
          <div className="mb-16 grid grid-cols-12 gap-5">
            <div className="col-span-10 col-start-2 flex items-end justify-between">
              <h2 className="text-5xl font-bold text-main-dark-blue">
                The project that i made
                <br />
                with creativity{" "}
              </h2>
              <div className="flex gap-[30px]">
                <Button text="Illustration" theme="border-dark-blue" />
                <Button text="UI UX Design" theme="border-dark-blue" />
                <Button text="Graphic Design" theme="border-dark-blue" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {projects.map((item) => (
              <ProjectCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { projects } from "../api/projects";
export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}
