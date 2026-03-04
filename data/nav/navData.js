export const navData = {
  main: {
    cta: "CONTACT US",
    branch: [
      {
        label: "TG GT OPC",
        href: "/tggt-opc",
        menuKey: "tggtOpc",
      },
      {
        label: "T3CK TRADING",
        href: "/t3ck-trading",
        menuKey: "t3ckTrading",
      },
      {
        label: "TCA CBS",
        href: "/tca-cbs",
        menuKey: "tcaCbs",
      },
      {
        label: "TG ENT",
        href: "/tg-ent",
        menuKey: "tgEnt",
      },
      {
        label: "DII",
        href: "/dii",
        menuKey: "dii",
      },
      {
        label: "EOOC",
        href: "/eooc",
        menuKey: "eooc",
      },
    ],
    megaMenu: {
      tggtOpc: {
        leftPanel: {
          title: "TG GLOBAL TRADE OPC",
          description:
            "Integrated solutions across defense, emergency response, infrastructure, and specialized enterprise services.",
        },
        rightPanel: [
          {
            icon: "/nav-dropdown/crosshair.svg",
            title: "CRISIS RESPONSE & RESCUE",
            links: [
              {
                label: "Emergency Medical Equipment",
              },
              { label: "Fire Fighting Equipment" },
              {
                label: "USAR - Search and Rescue",
              },
              {
                label: "Emergency Operations Center",
              },
            ],
          },
          {
            icon: "/nav-dropdown/crosshair.svg",
            title: "SPECIALIZED AREAS",
            links: [
              { label: "Outdoor & Expedition" },
              {
                label: "Recreation & Leisure",
              },
              {
                label: "Enterprise Solutions",
              },
            ],
          },
        ],
      },
      t3ckTrading: {
        leftPanel: {
          title: "GLOBAL TRADING & PROCUREMENT",
          description:
            "Strategic sourcing, supply chain management, and international trading of mission-critical equipment and materials.",
        },
        rightPanel: [
          {
            icon: "/nav-dropdown/crosshair.svg",
            columnTitle: "PRODUCT CATEGORIES",
            links: [
              { label: "Tactical Gear", href: "/t3ck-trading/tactical" },
              { label: "Heavy Equipment", href: "/t3ck-trading/heavy" },
              { label: "Spare Parts", href: "/t3ck-trading/parts" },
            ],
          },
          {
            icon: "/nav-dropdown/crosshair.svg",
            columnTitle: "SERVICES",
            links: [
              {
                label: "Bulk Procurement",
                href: "/t3ck-trading/procurement",
              },
              {
                label: "Logistics & Delivery",
                href: "/t3ck-trading/logistics",
              },
              {
                label: "International Shipping",
                href: "/t3ck-trading/shipping",
              },
            ],
          },
        ],
      },
      tcaCbs: {
        leftPanel: {
          title: "FAMILY-ORIENTED ATTRACTIONS",
          description:
            "Inclusive, high-capacity amusement systems engineered to provide safe, engaging, and shared entertainment experiences for guests of all ages.",
        },
        rightPanel: [
          {
            columnTitle: "ATTRACTION TYPES",
            links: [
              { label: "Classic Rides", href: "/tca-concept/family/classic" },
              {
                label: "Scenic Attractions",
                href: "/tca-concept/family/scenic",
              },
              {
                label: "Interactive Experiences",
                href: "/tca-concept/family/interactive",
              },
            ],
          },
        ],
      },
      tgEnt: {
        leftPanel: {
          title: "COMMERCIAL SURPLUS & LIQUIDATION",
          description:
            "Access our extensive inventory of high-quality, overstock, and premium mall pull-out goods, providing cost-effective retail solutions without compromising on value.",
        },
        rightPanel: [
          {
            columnTitle: "RETAIL CATEGORIES",
            links: [
              {
                label: "Wholesale Apparel",
                href: "/tg-enterprise/surplus/apparel",
              },
              {
                label: "Consumer Electronics",
                href: "/tg-enterprise/surplus/electronics",
              },
              {
                label: "Assorted Goods",
                href: "/tg-enterprise/surplus/assorted",
              },
            ],
          },
        ],
      },
      dii: {
        leftPanel: {
          title: "TRAINING & CAPACITY BUILDING",
          description:
            "Comprehensive disaster risk reduction and crisis management training designed to empower government and corporate resilience.",
        },
        rightPanel: [
          {
            columnTitle: "PROGRAMS",
            links: [
              { label: "Crisis Management", href: "/dii/academy/crisis" },
              {
                label: "Public Safety Protocols",
                href: "/dii/academy/safety",
              },
              {
                label: "First Responder Certifications",
                href: "/dii/academy/certifications",
              },
            ],
          },
        ],
      },
      eooc: {
        leftPanel: {
          title: "TECHNICAL INTEGRATION SERVICES",
          description:
            "End-to-end deployment of unified command systems, including custom website design and seamless API integration for emergency hotlines.",
        },
        rightPanel: [
          {
            columnTitle: "SERVICE OFFERINGS",
            links: [
              {
                label: "Website Design & Installation",
                href: "/eeoc/services/web",
              },
              {
                label: "Software Customization",
                href: "/eeoc/services/software",
              },
              {
                label: "System Integrations",
                href: "/eeoc/services/integrations",
              },
            ],
          },
        ],
      },
    },
  },
};
