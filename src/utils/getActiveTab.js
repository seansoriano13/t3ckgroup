// EXTRACT DATA TO CONFIG SOON
export const getActiveTab = (pathname) => {
  if (pathname === "/") return "main";

  const navDataKey = pathname.slice(1);

  switch (navDataKey) {
    case "tggt-opc":
      return "tggtOpc";
    case "t3cktrading":
      return "t3ckTrading";
    case "tca-cbs":
      return "tcaCbs";
    case "tg-ent":
      return "tgEnt";
    case "dii":
      return "dii";
    case "eooc":
      return "eooc";
    default:
      return "main";
  }
};
