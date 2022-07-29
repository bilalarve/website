import Image from "next/image";
import Link from "next/link";

import ButtonLink from "./ButtonLink";

export default function ProjectCard({ item }) {
  const { image, name, category, slug } = item;
  return (
    <div className="group relative h-[432px] w-full overflow-hidden rounded-[20px]">
      <div className="flex-center invisible absolute inset-0 z-10 flex-col gap-7 bg-gradient-to-bl from-[#403f63a5] to-[#0c0c20cc]  group-hover:visible">
        <h5 className="text-2xl font-bold text-white">{name}</h5>
        <h6 className="text-base font-semibold text-white">{category}</h6>
        <ButtonLink
          text="View Project"
          theme="transparent-white"
          href={`projects/${slug}`}
        />
      </div>
      <Image
        className="h-full w-full object-cover"
        src={`/projects/${image}`}
        alt={name}
        layout="fill"
      />
    </div>
  );
}
