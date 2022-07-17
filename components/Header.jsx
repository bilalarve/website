import Image from "next/image";
import Link from "next/link";

import { HiChat } from "react-icons/hi";

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
          <NavLink href="/">Resume</NavLink>
        </nav>
        <button className="flex h-[42px] items-center gap-2.5 rounded-full border border-main-dark-blue bg-white px-6 text-main-dark-blue transition-colors hover:bg-main-dark-blue hover:text-white">
          <span className="text-sm font-semibold">Contact Me</span>
          <HiChat />
        </button>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="text-sm font-semibold text-main-gray transition-colors hover:text-main-dark-blue">
        {children}
      </a>
    </Link>
  );
}
