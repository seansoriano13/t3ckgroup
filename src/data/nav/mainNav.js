import { DEFAULT_ICON } from "./shared.js"

export const main = {
  cta: "CONTACT US",
  links: [
    {
      label: "T3CKGROUP",
      href: "/",
      menuKey: "main",
    },  
    {
      label: "TGGT OPC",
      href: "/tggt-opc",
      menuKey: "tggtOpc",
    },
    {
      label: "T3CK TRADING",
      href: "/t3cktrading",
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
      label: "EEOC",
      href: "/eeoc",
      menuKey: "eeoc",
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
          icon: DEFAULT_ICON,
          title: "CRISIS RESPONSE & RESCUE",
          links: [
            {
              label: "Emergency Medical Equipment",
              href: "/tggt-opc/response/medical",
            },
            {
              label: "Fire Fighting Equipment",
              href: "/tggt-opc/response/fire",
            },
            {
              label: "USAR - Search and Rescue",
              href: "/tggt-opc/response/usar",
            },
            {
              label: "Emergency Operations Center",
              href: "/tggt-opc/response/command-centers",
            },
          ],
        },
        {
          icon: "/nav-dropdown/gear.svg",
          title: "SPECIALIZED AREAS",
          links: [
            {
              label: "Outdoor & Expedition",
              href: "/tggt-opc/outdoor/expedition",
            },
            {
              label: "Recreation & Leisure",
              href: "/tggt-opc/recreation/resort",
            },
            {
              label: "Enterprise Solutions",
              href: "/tggt-opc/infrastructure/facilities",
            },
          ],
        },
      ],
    },

    t3ckTrading: {
      leftPanel: {
        title: "T3CK TRADING",
        description:
          "Specialized distributor of professional-grade medical equipment, rescue technologies, and critical care devices for healthcare and emergency frontliners.",
      },
      rightPanel: [
        {
          icon: "/nav-dropdown/gear.svg",
          title: "PRODUCT CATEGORIES",
          links: [
            { label: "Tactical Gear", href: "/t3cktrading/tactical" },
            { label: "Heavy Equipment", href: "/t3cktrading/heavy" },
            { label: "Spare Parts", href: "/t3cktrading/parts" },
          ],
        },
        {
          icon: "/nav-dropdown/logistics.svg",
          title: "SERVICES",
          links: [
            { label: "Bulk Procurement", href: "/t3cktrading/procurement" },
            { label: "Logistics & Delivery", href: "/t3cktrading/logistics" },
            { label: "International Shipping", href: "/t3cktrading/shipping" },
          ],
        },
      ],
    },

    tcaCbs: {
      leftPanel: {
        title: "TCA CONCEPT BUILDERS AND SERVICES",
        description:
          "Heavy engineering division focused on specialized construction, theme park architecture, and complex resort infrastructure development.",
      },
      rightPanel: [
        {
          icon: "/nav-dropdown/camp.svg",
          title: "ATTRACTION TYPES",
          links: [
            { label: "Classic Rides", href: "/tca-concept/family/classic" },
            { label: "Scenic Attractions", href: "/tca-concept/family/scenic" },
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
        title: "TG ENTERPRISE",
        description:
          "Consumer-facing division managing local dealer networks and direct retail operations. Bringing professional-grade gear to the civilian market.",
      },
      rightPanel: [
        {
          icon: "/nav-dropdown/gear.svg",
          title: "RETAIL CATEGORIES",
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
        title: "DISASTER INTELLIGENCE INC.",
        description:
          "Providing high-level disaster risk management, intelligence consulting, and specialized training programs for corporate and government partners.",
      },
      rightPanel: [
        {
          icon: DEFAULT_ICON,
          title: "PROGRAMS",
          links: [
            { label: "Crisis Management", href: "/dii/academy/crisis" },
            { label: "Public Safety Protocols", href: "/dii/academy/safety" },
            {
              label: "First Responder Certifications",
              href: "/dii/academy/certifications",
            },
          ],
        },
      ],
    },

    eeoc: {
      leftPanel: {
        title: "EVERY DAY EMERGENCY OPERATIONS CENTE",
        description:
          "A centralized, always-on command hub providing real-time situational awareness, rapid response coordination, and critical communications support.",
      },
      rightPanel: [
        {
          icon: DEFAULT_ICON,
          title: "SERVICE OFFERINGS",
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
}
