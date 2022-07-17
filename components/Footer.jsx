import Link from "next/link";

import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaFigma,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-main-light-gray py-14">
      <div className="wrapper">
        <hr className="mb-10 border-main-gray/25" />
        <div className="flex items-center justify-between">
          <div className="flex gap-[22px]">
            <FooterLinkIcon
              href="https://www.instagram.com/bilalarve/?hl=id"
              icon={<FaInstagram />}
            />
            <FooterLinkIcon
              href="https://www.behance.net/bilalarve"
              icon={<FaBehance />}
            />
            <FooterLinkIcon
              href="https://dribbble.com/Arve"
              icon={<FaDribbble />}
            />
            <FooterLinkIcon
              href="https://www.figma.com/@arve"
              icon={<FaFigma />}
            />
            <FooterLinkIcon
              href="https://www.linkedin.com/in/bilal-arve-895322244/"
              icon={<FaLinkedinIn />}
            />
            <FooterLinkIcon
              href="mailto:arve4me@gmail.com"
              icon={<HiOutlineMail />}
            />
          </div>
          <span className="text-base font-extrabold text-main-gray">
            &copy; 2022 Bilal Arve - All Right Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex-center h-[50px] w-[50px] rounded-full bg-main-gray text-[22px] text-white transition-colors hover:bg-main-dark-blue hover:shadow-xl"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
}
