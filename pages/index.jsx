import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiChat, HiChevronRight, HiClipboardList } from "react-icons/hi";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";

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
        <Hero />
        <Services />
        <Projects />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="wrapper grid grid-cols-12 items-center justify-between gap-5 pb-28 pt-32">
      <div className="col-span-5 col-start-2">
        <h1 className="mb-[34px] text-[64px] font-bold leading-tight text-main-dark-blue">
          Hello! I Am
          <br />
          Bilal Arve.
          <br />I Am an UI/UX Design
        </h1>
        <p className="mb-[50px] max-w-[466px] text-base leading-relaxed text-main-gray">
          Hey Im Muhammad Bilal Arve and i’m from Indonesia.I have been working
          as an Illustrator and Graphic Designer with more than 3 years of
          experience and UI UX Designer for 1 years and still learning and
          exploring.
        </p>
        <div className="mb-14 flex gap-[34px]">
          <Button text="Lets Talk" theme="fill-blue" icon={<HiChat />} />
          <ButtonLink
            text="Resume"
            theme="border-dark-blue"
            icon={<HiClipboardList />}
            href="https://drive.google.com/file/d/1EaHugga84FH1iE2-y__aTKJAapssMG_e/view?usp=sharing"
            passHref={true}
            target="_blank"
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
        <div className="w-full max-w-[636px]">
          <Image
            src="/homepage-illustration.svg"
            alt="Homepage illutration"
            layout="responsive"
            width={631}
            height={636}
          />
        </div>
      </div>
    </div>
  );
}

function Services() {
  const Card = ({ title, description, backgroundColor, src }) => (
    <div className="flex flex-1 flex-col items-center gap-11 rounded-[20px] border border-main-gray/25 bg-main-dark-blue px-14 pt-14 pb-20">
      <div
        className={`flex-center h-[116px] w-[116px] rounded-xl ${backgroundColor}`}
      >
        <Image src={src} alt={title} width={60} height={60} />
      </div>
      <h6 className="text-2xl font-bold text-white">{title}</h6>
      <p className="text-center text-base font-medium text-main-gray">
        {description}
      </p>
    </div>
  );

  return (
    <div>
      <div className="wrapper rounded-[20px] bg-main-dark-blue px-36 py-24">
        <p className="mb-3.5 text-xs font-bold tracking-[8px] text-main-gray">
          SERVICES
        </p>
        <h4 className="mb-10 text-5xl font-bold text-white">What can i do?</h4>
        <div className="flex gap-[22px]">
          <Card
            title="Illustration"
            description="Flat illustration, Isometric, Mascot, Icon Set, Character Design, Illustration Set"
            backgroundColor="bg-main-pink"
            src="/icon/illustration.svg"
          />
          <Card
            title="UI UX Design"
            description="Wireframing, User Flow, Landing Pages, Mobile and Web Design app"
            backgroundColor="bg-main-purple"
            src="/icon/ui-ux.svg"
          />
          <Card
            title="Graphic Design"
            description="Visual Identity, Poster, Stationary, Social Media, Infographics"
            backgroundColor="bg-main-cyan"
            src="/icon/graphic-design.svg"
          />
        </div>
      </div>
    </div>
  );
}

import { projects } from "./api/projects";
function Projects() {
  return (
    <div className="mt-40">
      <div className="wrapper">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-11 col-start-2 mb-10">
            <p className="mb-3.5 text-xs font-bold tracking-[8px] text-main-gray">
              WORKS
            </p>
            <h4 className="text-5xl font-bold text-main-dark-blue">
              Features Projects
            </h4>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-5">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard item={project} key={project.slug} />
            ))}
        </div>

        <div className="flex justify-center">
          <ButtonLink
            text="View More"
            theme="fill-blue"
            icon={<HiChevronRight />}
            href="projects"
          />
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="mt-[120px] mb-20">
      <div className="wrapper relative overflow-hidden rounded-[20px] bg-main-dark-blue">
        <div className="py-24 px-[120px]">
          <h2 className="mb-10 text-5xl font-bold text-white">
            interested? Let&apos;s talk about the
            <br />
            project and make it happen
          </h2>
          <Button
            text="Let Start it"
            theme="transparent-white"
            className="px-10"
          />
        </div>

        <div className="absolute right-0 bottom-0 top-10 w-[505px]">
          <Image
            src="/homepage-cta.svg"
            alt="Homepage CTA Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
