import { buttonThemeFn } from "../pages/utils";

export default function Button({ text, icon, theme, className, onClick }) {
  return (
    <button
      className={`flex h-[42px] items-center gap-2.5 rounded-full px-6 transition-colors ${buttonThemeFn(
        theme
      )} ${className}`}
      onClick={onClick}
    >
      <span className="text-sm font-semibold">{text}</span>
      {icon}
    </button>
  );
}
