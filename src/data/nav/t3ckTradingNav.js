import { company, DEFAULT_ICON } from "./shared.js";

export const t3ckTradingNav = {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "Elevation",
        menuKey: "t3ckTradingElevation",
      },
      {
        label: "Rigging",
        menuKey: "t3ckTradingRigging",
      },
      {
        label: "Warehousing",
        menuKey: "t3ckTradingWarehousing",
      },
      {
        label: "Upkeep",
        menuKey: "t3ckTradingUpkeep",
      },
      {
        label: "Illumination",
        menuKey: "t3ckTradingIllumination",
      },
      {
        label: "Company",
        href: "/company",
        menuKey: "company",
      },
    ],
    megaMenu: {
      t3ckTradingElevation: {
        leftPanel: {
          title: "LIFTING SOLUTIONS",
          description:
            "Enterprise-grade lifting mechanisms and elevation infrastructure designed for heavy-duty industrial and commercial applications.",
        },
        rightPanel: [
          {
            title: "INDUSTRIAL SYSTEMS",
            links: [
              {
                label: "Cranes & Hoists",
                href: "/t3cktrading/elevation/cranes",
              },
              {
                label: "Hydraulic Lifts",
                href: "/t3cktrading/elevation/hydraulic",
              },
              {
                label: "Material Handling",
                href: "/t3cktrading/elevation/handling",
              },
            ],
          },
        ],
      },
      t3ckTradingRigging: {
        leftPanel: {
          title: "STAGE & TRUSSES",
          description:
            "Modular staging solutions and high-capacity truss systems for event production, facility deployment, and structural support.",
        },
        rightPanel: [
          {
            title: "STRUCTURAL SUPPORT",
            links: [
              {
                label: "Aluminum Trusses",
                href: "/t3cktrading/rigging/trusses",
              },
              {
                label: "Modular Staging",
                href: "/t3cktrading/rigging/staging",
              },
              {
                label: "Rigging Hardware",
                href: "/t3cktrading/rigging/hardware",
              },
            ],
          },
        ],
      },
      t3ckTradingWarehousing: {
        leftPanel: {
          title: "RACKING SYSTEMS",
          description:
            "Scalable storage architectures and heavy-duty racking systems optimized for logistics hubs and high-volume warehouse operations.",
        },
        rightPanel: [
          {
            title: "STORAGE INFRASTRUCTURE",
            links: [
              {
                label: "Pallet Racking",
                href: "/t3cktrading/warehousing/pallet",
              },
              {
                label: "Cantilever Systems",
                href: "/t3cktrading/warehousing/cantilever",
              },
              {
                label: "Shelving Units",
                href: "/t3cktrading/warehousing/shelving",
              },
            ],
          },
        ],
      },
      t3ckTradingUpkeep: {
        leftPanel: {
          title: "FACILITY MAINTENANCE",
          description:
            "Comprehensive maintenance solutions, specialized equipment, and operational support to ensure facility longevity and compliance.",
        },
        rightPanel: [
          {
            title: "MAINTENANCE OPERATIONS",
            links: [
              {
                label: "Safety Inspections",
                href: "/t3cktrading/upkeep/safety",
              },
              {
                label: "Equipment Servicing",
                href: "/t3cktrading/upkeep/servicing",
              },
              {
                label: "Facility Repairs",
                href: "/t3cktrading/upkeep/repairs",
              },
            ],
          },
        ],
      },
      t3ckTradingIllumination: {
        leftPanel: {
          title: "SOLAR & LIGHTING",
          description:
            "Sustainable commercial lighting systems and high-efficiency solar infrastructure for continuous, reliable operational visibility.",
        },
        rightPanel: [
          {
            title: "ENERGY & LIGHTING",
            links: [
              {
                label: "Industrial Solar Lights",
                href: "/t3cktrading/illumination/solar",
              },
              {
                label: "Site Illumination",
                href: "/t3cktrading/illumination/site",
              },
              {
                label: "Emergency Lighting",
                href: "/t3cktrading/illumination/emergency",
              },
            ],
          },
        ],
      },
      company: company,
    },
  }
