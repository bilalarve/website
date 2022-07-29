import Link from "next/link";
import { buttonThemeFn } from "../pages/utils";

export default function Button({
  text,
  icon,
  theme,
  className,
  href,
  passHref,
  target,
}) {
  return (
    <Link href={href} passHref>
      <a
        className={`flex h-[42px] items-center gap-2.5 rounded-full px-6 transition-colors ${buttonThemeFn(
          theme
        )} ${className}`}
        target={target}
      >
        <span className="text-sm font-semibold">{text}</span>
        {icon}
      </a>
    </Link>
  );
}
