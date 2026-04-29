import { company, DEFAULT_ICON } from "./shared.js";

export const tggtOpcNav = {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "Response",
        menuKey: "tggtOpcResponse",
      },
      {
        label: "Defense",
        menuKey: "tggtOpcDefense",
      },
      {
        label: "Outdoor",
        menuKey: "tggtOpcOutdoor",
      },
      {
        label: "Infrastructure",
        menuKey: "tggtOpcInfrastructure",
      },
      {
        label: "Recreation",
        menuKey: "tggtOpcRecreation",
      },
      {
        label: "Company",
        href: "/company",
        menuKey: "company",
      },
    ],
    megaMenu: {
      tggtOpcResponse: {
        leftPanel: {
          title: "RESPONSE DOMAIN",
          description:
            "A unified tactical framework merging elite search and suppression forces with specialized heavy assets and mobile command infrastructure for rapid, coordinated crisis intervention.",
        },
        rightPanel: [
          {
            icon: DEFAULT_ICON,
            title: "TACTICAL OPERATIONS",
            links: [
              {
                label: "Command Centers",
                href: "/tggt-opc/response/command-centers",
              },
              { label: "Usar Operations", href: "/tggt-opc/response/usar" },
              { label: "Fire Suppression", href: "/tggt-opc/response/fire" },
              {
                label: "Specialty Vehicles",
                href: "/tggt-opc/response/vehicles",
              },
            ],
          },
          {
            icon: DEFAULT_ICON,
            title: "CRITICAL SUPPORT",
            links: [
              {
                label: "Emergency Medical Equipment",
                href: "/tggt-opc/response/medical",
              },
              {
                label: "Disaster Relief (HADR)",
                href: "/tggt-opc/response/hadr",
              },
              {
                label: "Camp Management & Evacuation",
                href: "/tggt-opc/response/camp",
              },
            ],
          },
        ],
      },
      tggtOpcDefense: {
        leftPanel: {
          title: "DEFENSE CAPABILITIES",
          description:
            "Mission-critical protective systems and logistical architectures designed to ensure operational superiority and force survivability.",
        },
        rightPanel: [
          {
            title: "FORCE PROTECTION",
            links: [
              {
                label: "Ballistics & Protection",
                href: "/tggt-opc/defense/ballistics",
              },
              {
                label: "Law Enforcement & Armed Forces",
                href: "/tggt-opc/defense/law-enforcement",
              },
              {
                label: "Tactical Apparel",
                href: "/tggt-opc/defense/apparel",
              },
            ],
          },
          {
            title: "MISSION SUSTAINMENT",
            links: [
              {
                label: "Logistics Support Supplies",
                href: "/tggt-opc/defense/logistics",
              },
            ],
          },
        ],
      },
      tggtOpcOutdoor: {
        leftPanel: {
          title: "EXPEDITION SYSTEMS",
          description:
            "Professional-grade equipment and technical apparel engineered to withstand extreme environmental conditions and remote exploration.",
        },
        rightPanel: [
          {
            title: "FIELD SHELTER & APPAREL",
            links: [
              {
                label: "Camping Essentials",
                href: "/tggt-opc/outdoor/camping",
              },
              {
                label: "Technical Apparel",
                href: "/tggt-opc/outdoor/apparel",
              },
            ],
          },
          {
            title: "SURVIVAL & NAVIGATION",
            links: [
              {
                label: "Expedition Gear",
                href: "/tggt-opc/outdoor/expedition",
              },
              { label: "Survival Kits", href: "/tggt-opc/outdoor/survival" },
            ],
          },
        ],
      },
      tggtOpcInfrastructure: {
        leftPanel: {
          title: "CRITICAL INFRASTRUCTURE",
          description:
            "Comprehensive engineering and construction services delivering secure, sustainable, and scalable critical infrastructure.",
        },
        rightPanel: [
          {
            title: "VERTICAL & CIVIL WORKS",
            links: [
              {
                label: "Civil Works & Construction",
                href: "/tggt-opc/infrastructure/civil",
              },
              {
                label: "Government Facility Build",
                href: "/tggt-opc/infrastructure/facilities",
              },
            ],
          },
          {
            title: "ENERGY RESILIENCE",
            links: [
              {
                label: "Renewable Energy Systems",
                href: "/tggt-opc/infrastructure/energy",
              },
            ],
          },
        ],
      },
      tggtOpcRecreation: {
        leftPanel: {
          title: "LEISURE DEVELOPMENT",
          description:
            "Turnkey design and installation of high-engagement adventure courses and world-class leisure destinations.",
        },
        rightPanel: [
          {
            title: "ACTIVE ENTERTAINMENT",
            links: [
              {
                label: "Adventure Park Solutions",
                href: "/tggt-opc/recreation/parks",
              },
              {
                label: "Obstacle Courses",
                href: "/tggt-opc/recreation/obstacle",
              },
            ],
          },
          {
            title: "DESTINATION PLANNING",
            links: [
              {
                label: "Resort Development",
                href: "/tggt-opc/recreation/resort",
              },
            ],
          },
        ],
      },
      company: company,
    },
  }
