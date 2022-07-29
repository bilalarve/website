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

export { buttonThemeFn };
