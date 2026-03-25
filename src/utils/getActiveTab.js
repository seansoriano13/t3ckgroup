// EXTRACT DATA TO CONFIG SOON
export const getActiveTab = (pathname) => {
  if (pathname === "/") return "main";

  const key = pathname.split("/")[1];

  switch (key) {
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
    case "contact-us":
      return "contactUs";
    case "request-a-quote":
      return "requestAQuote";
    default:
      return "main";
  }
};
