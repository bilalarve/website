function buttonThemeFn(value) {
  switch (value) {
    case "border-dark-blue":
      return "border border-main-dark-blue bg-white hover:bg-main-dark-blue hover:text-white text-main-dark-blue hover:shadow-xl";
    case "fill-blue":
      return "bg-main-cyan hover:bg-main-pink text-white hover:shadow-[_0px_14px_43px_0px_rgba(255,129,142,0.4)]";
    case "transparent-white":
      return "bg-white/50 text-white hover:bg-white hover:text-main-dark-blue";
    default:
      return "";
  }
}

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
