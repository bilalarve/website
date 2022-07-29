import Image from "next/image";
import Link from "next/link";

import { HiChat } from "react-icons/hi";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <div className="wrapper flex h-24 items-center justify-between border-b border-main-light-gray">
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Logo" height={26} width={130} />
          </a>
        </Link>
        <nav className="flex gap-[50px]">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Projects</NavLink>
          <NavLink
            href="https://drive.google.com/file/d/1EaHugga84FH1iE2-y__aTKJAapssMG_e/view?usp=sharing"
            passHref={true}
            target="_blank"
          >
            Resume
          </NavLink>
        </nav>
        <Button text="Contact Me" theme="border-dark-blue" icon={<HiChat />} />
      </div>
    </header>
  );
}

function NavLink({ href, children, target = "", props }) {
  return (
    <Link href={href} {...props}>
      <a
        className="text-sm font-semibold text-main-gray transition-colors hover:text-main-dark-blue"
        target={target}
      >
        {children}
      </a>
    </Link>
  );
}
