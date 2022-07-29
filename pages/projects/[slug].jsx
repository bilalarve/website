/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";

import { projects } from "../api/projects";

export default function ProjectView() {
  const [project, setProject] = useState({});

  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;
    setProject(projects.find((el) => el.slug === slug));
  }, [router.query]);

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
              {project?.name}
            </h2>
            <p className="col-span-5 text-base text-main-gray">
              {project?.description}
            </p>
          </div>

          <iframe
            className="aspect-video w-full"
            src={project?.data?.figma}
            allowFullScreen
          ></iframe>
          <div>
            {project?.data?.images.map((image) => (
              <div key={image}>
                <img
                  className="h-full w-full object-contain"
                  src={`/projects/${image}`}
                  alt={`${project.name} image content`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
