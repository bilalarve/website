export default function Button({ text, icon, theme }) {
  function themeFn(value) {
    switch (value) {
      case "border-dark-blue":
        return "border border-main-dark-blue bg-white hover:bg-main-dark-blue hover:text-white text-main-dark-blue";
      case "fill-blue":
        return "bg-main-cyan hover:bg-main-pink text-white";
      default:
        return "";
    }
  }

  return (
    <button
      className={`flex h-[42px] items-center gap-2.5 rounded-full px-6 transition-colors ${themeFn(
        theme
      )}`}
    >
      <span className="text-sm font-semibold">{text}</span>
      {icon}
    </button>
  );
}
