import Image from "next/image";

import Button from "./Button";

export default function ProjectCard({ item }) {
  const { src, name, category } = item;
  return (
    <div className="group relative h-[432px] w-full overflow-hidden rounded-[20px]">
      <div className="flex-center invisible absolute inset-0 z-10 flex-col gap-7 bg-gradient-to-bl from-[#403f63a5] to-[#0c0c20cc]  group-hover:visible">
        <h5 className="text-2xl font-bold text-white">{name}</h5>
        <h6 className="text-base font-semibold text-white">{category}</h6>
        <Button text="View Project" theme="transparent-white" />
      </div>
      <Image
        className="h-full w-full object-cover"
        src={src}
        alt={name}
        layout="fill"
      />
    </div>
  );
}
