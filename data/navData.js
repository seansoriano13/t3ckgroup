export const navData = {
  main: {
    id: "main",
    cta: "CONTACT US",
    links: [
      {
        id: "tgGlobal",
        label: "TG GLOBAL TRADE",
        href: "/tg-global",
      },
      {
        id: "t3ckTrading",
        label: "T3CK TRADING",
        href: "/t3ck-trading",
      },
      {
        id: "tcaConcepts",
        label: "TCA CONCEPTS",
        href: "/tca-concepts",
      },
      {
        id: "tgEnterprise",
        label: "TG ENTERPRISE",
        href: "/tg-enterprise",
      },
      {
        id: "dii",
        label: "DII",
        href: "/dii",
      },
      {
        id: "eooc",
        label: "EOOC",
        href: "/eooc",
      },
    ],
  },
};

export const megaMenuData = {
  tgGlobal: {
    megaMenu: {
      leftPanel: {
        title: "TG GLOBAL TRADE OPC",
        description:
          "Integrated solutions across defense, emergency response, infrastructure, and specialized enterprise services.",
      },
      rightPanels: [
        {
          icon: "/nav-dropdown/crosshair.svg",
          columnTitle: "Crisis Response & Rescue",
          links: [
            {
              label: "Emergency Medical Equipment",
              href: "/tg-global/response",
            },
            { label: "Fire Fighting Equipment", href: "/tg-global/defense" },
            {
              label: "USAR - Search and Rescue",
              href: "/tg-global/infrastructure",
            },
            {
              label: "Emergency Operations Center",
              href: "/tg-global/infrastructure",
            },
          ],
        },
        {
          icon: "/nav-dropdown/crosshair.svg",
          columnTitle: "SPECIALIZED AREAS",
          links: [
            { label: "Outdoor & Expedition", href: "/tg-global/outdoor" },
            {
              label: "Recreation & Leisure",
              href: "/tg-global/recreation",
            },
            {
              label: "Enterprise Solutions",
              href: "/tg-global/enterprise",
            },
          ],
        },
      ],
    },
  },
  t3ckTrading: {
    megaMenu: {
      leftPanel: {
        title: "GLOBAL TRADING & PROCUREMENT",
        description:
          "Strategic sourcing, supply chain management, and international trading of mission-critical equipment and materials.",
      },
      rightPanels: [
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
  },
  tcaConcepts: {
    megaMenu: {
      leftPanel: {
        title: "FAMILY-ORIENTED ATTRACTIONS",
        description:
          "Inclusive, high-capacity amusement systems engineered to provide safe, engaging, and shared entertainment experiences for guests of all ages.",
      },
      rightPanels: [
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
  },
  tgEnterprise: {
    megaMenu: {
      leftPanel: {
        title: "COMMERCIAL SURPLUS & LIQUIDATION",
        description:
          "Access our extensive inventory of high-quality, overstock, and premium mall pull-out goods, providing cost-effective retail solutions without compromising on value.",
      },
      rightPanels: [
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
  },
  dii: {
    megaMenu: {
      leftPanel: {
        title: "TRAINING & CAPACITY BUILDING",
        description:
          "Comprehensive disaster risk reduction and crisis management training designed to empower government and corporate resilience.",
      },
      rightPanels: [
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
  },
  eooc: {
    megaMenu: {
      leftPanel: {
        title: "TECHNICAL INTEGRATION SERVICES",
        description:
          "End-to-end deployment of unified command systems, including custom website design and seamless API integration for emergency hotlines.",
      },
      rightPanels: [
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
};

export const navLinks = {
  main: [
    { label: "TG GT OPC", href: "/tg-global-trade-opc" },
    { label: "T3CK TRADING", href: "/t3cktrading" },
    { label: "TCA CBS", href: "/tca-concepts" },
    { label: "TG ENTERPRISE", href: "/tg-enterprise" },
    { label: "DII", href: "/dii" },
    { label: "EOOC", href: "/eooc" },
  ],
};

export const navData1 = {
  main: {
    cta: "CONTACT US",
    links: [
      {
        label: "TG GLOBAL",
        href: "/tg-global",
        megaMenu: {
          leftPanel: {
            title: "TG GLOBAL TRADE OPC",
            description:
              "Integrated solutions across defense, emergency response, infrastructure, and specialized enterprise services.",
          },
          rightPanels: [
            {
              columnTitle: "CORE DIVISIONS",
              links: [
                { label: "Response & Rescue", href: "/tg-global/response" },
                { label: "Defense & Security", href: "/tg-global/defense" },
                { label: "Infrastructure", href: "/tg-global/infrastructure" },
              ],
            },
            {
              columnTitle: "SPECIALIZED AREAS",
              links: [
                { label: "Outdoor & Expedition", href: "/tg-global/outdoor" },
                {
                  label: "Recreation & Leisure",
                  href: "/tg-global/recreation",
                },
                {
                  label: "Enterprise Solutions",
                  href: "/tg-global/enterprise",
                },
              ],
            },
          ],
        },
      },

      {
        label: "T3CK TRADING",
        href: "/t3ck-trading",
        megaMenu: {
          leftPanel: {
            title: "GLOBAL TRADING & PROCUREMENT",
            description:
              "Strategic sourcing, supply chain management, and international trading of mission-critical equipment and materials.",
          },
          rightPanels: [
            {
              columnTitle: "PRODUCT CATEGORIES",
              links: [
                { label: "Tactical Gear", href: "/t3ck-trading/tactical" },
                { label: "Heavy Equipment", href: "/t3ck-trading/heavy" },
                { label: "Spare Parts", href: "/t3ck-trading/parts" },
              ],
            },
            {
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
      },

      {
        label: "TCA CONCEPT",
        href: "/tca-concept",
        megaMenu: {
          leftPanel: {
            title: "DESIGN & INNOVATION",
            description:
              "Conceptual design, prototyping, and development of specialized systems, vehicles, and tactical solutions.",
          },
          rightPanels: [
            {
              columnTitle: "DESIGN SERVICES",
              links: [
                { label: "Vehicle Concepts", href: "/tca-concept/vehicles" },
                {
                  label: "Equipment Prototyping",
                  href: "/tca-concept/prototyping",
                },
                { label: "Custom Solutions", href: "/tca-concept/custom" },
              ],
            },
            {
              columnTitle: "TECHNOLOGY FOCUS",
              links: [
                { label: "Modular Systems", href: "/tca-concept/modular" },
                { label: "R&D Projects", href: "/tca-concept/rd" },
              ],
            },
          ],
        },
      },

      {
        label: "TG ENTERPRISE",
        href: "/tg-enterprise",
        megaMenu: {
          leftPanel: {
            title: "ENTERPRISE SOLUTIONS",
            description:
              "End-to-end business support, facility management, and large-scale project execution for government and private sectors.",
          },
          rightPanels: [
            {
              columnTitle: "BUSINESS SERVICES",
              links: [
                {
                  label: "Facility Management",
                  href: "/tg-enterprise/facilities",
                },
                {
                  label: "Project Management",
                  href: "/tg-enterprise/projects",
                },
                { label: "Consulting", href: "/tg-enterprise/consulting" },
              ],
            },
            {
              columnTitle: "KEY SECTORS",
              links: [
                {
                  label: "Government Contracts",
                  href: "/tg-enterprise/government",
                },
                {
                  label: "Corporate Solutions",
                  href: "/tg-enterprise/corporate",
                },
              ],
            },
          ],
        },
      },

      {
        label: "DII",
        href: "/dii",
        megaMenu: {
          leftPanel: {
            title: "DII – DEFENSE & INDUSTRIAL INITIATIVES",
            description:
              "Focused division delivering advanced industrial and defense-related products, training, and integration services.",
          },
          rightPanels: [
            {
              columnTitle: "PRODUCT LINES",
              links: [
                { label: "Industrial Systems", href: "/dii/industrial" },
                { label: "Defense Integration", href: "/dii/defense" },
                { label: "Training Programs", href: "/dii/training" },
              ],
            },
            {
              columnTitle: "SUPPORT",
              links: [
                { label: "Maintenance & Upgrades", href: "/dii/maintenance" },
                { label: "Technical Support", href: "/dii/support" },
              ],
            },
          ],
        },
      },

      {
        label: "EEOC",
        href: "/eeoc",
        megaMenu: {
          leftPanel: {
            title: "EEOC – EMERGENCY & OPERATIONAL CAPACITY",
            description:
              "Specialized emergency operations, capacity building, and rapid-response coordination services.",
          },
          rightPanels: [
            {
              columnTitle: "OPERATIONAL AREAS",
              links: [
                { label: "Emergency Planning", href: "/eeoc/planning" },
                { label: "Crisis Response", href: "/eeoc/response" },
                { label: "Training & Drills", href: "/eeoc/training" },
              ],
            },
            {
              columnTitle: "RESOURCES",
              links: [
                { label: "Equipment Deployment", href: "/eeoc/equipment" },
                { label: "Command Support", href: "/eeoc/command" },
              ],
            },
          ],
        },
      },
    ],
  },

  tgGlobal: {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "RESPONSE",
        href: "/tg-global/response",
        megaMenu: {
          leftPanel: {
            title: "RESPONSE DOMAIN",
            description:
              "A unified tactical framework merging elite search and suppression forces with specialized heavy assets and mobile command infrastructure for rapid, coordinated crisis intervention.",
          },
          rightPanels: [
            {
              columnTitle: "TACTICAL OPERATIONS",
              links: [
                {
                  label: "Command Centers",
                  href: "/tg-global/response/command-centers",
                },
                { label: "Usar Operations", href: "/tg-global/response/usar" },
                { label: "Fire Suppression", href: "/tg-global/response/fire" },
                {
                  label: "Specialty Vehicles",
                  href: "/tg-global/response/vehicles",
                },
              ],
            },
            {
              columnTitle: "CRITICAL SUPPORT",
              links: [
                {
                  label: "Emergency Medical Equipment",
                  href: "/tg-global/response/medical",
                },
                {
                  label: "Disaster Relief (HADR)",
                  href: "/tg-global/response/hadr",
                },
                {
                  label: "Camp Management & Evacuation",
                  href: "/tg-global/response/camp",
                },
              ],
            },
          ],
        },
      },
      {
        label: "DEFENSE",
        href: "/tg-global/defense",
        megaMenu: {
          leftPanel: {
            title: "DEFENSE CAPABILITIES",
            description:
              "Mission-critical protective systems and logistical architectures designed to ensure operational superiority and force survivability.",
          },
          rightPanels: [
            {
              columnTitle: "FORCE PROTECTION",
              links: [
                {
                  label: "Ballistics & Protection",
                  href: "/tg-global/defense/ballistics",
                },
                {
                  label: "Law Enforcement & Armed Forces",
                  href: "/tg-global/defense/law-enforcement",
                },
                {
                  label: "Tactical Apparel",
                  href: "/tg-global/defense/apparel",
                },
              ],
            },
            {
              columnTitle: "MISSION SUSTAINMENT",
              links: [
                {
                  label: "Logistics Support Supplies",
                  href: "/tg-global/defense/logistics",
                },
              ],
            },
          ],
        },
      },
      {
        label: "OUTDOOR",
        href: "/tg-global/outdoor",
        megaMenu: {
          leftPanel: {
            title: "EXPEDITION SYSTEMS",
            description:
              "Professional-grade equipment and technical apparel engineered to withstand extreme environmental conditions and remote exploration.",
          },
          rightPanel: [
            {
              columnTitle: "FIELD SHELTER & APPAREL",
              links: [
                {
                  label: "Camping Essentials",
                  href: "/tg-global/outdoor/camping",
                },
                {
                  label: "Technical Apparel",
                  href: "/tg-global/outdoor/apparel",
                },
              ],
            },
            {
              columnTitle: "SURVIVAL & NAVIGATION",
              links: [
                {
                  label: "Expedition Gear",
                  href: "/tg-global/outdoor/expedition",
                },
                { label: "Survival Kits", href: "/tg-global/outdoor/survival" },
              ],
            },
          ],
        },
      },
      {
        label: "INFRASTRUCTURE",
        href: "/tg-global/infrastructure",
        megaMenu: {
          leftPanel: {
            title: "CRITICAL INFRASTRUCTURE",
            description:
              "Comprehensive engineering and construction services delivering secure, sustainable, and scalable critical infrastructure.",
          },
          rightPanels: [
            {
              columnTitle: "VERTICAL & CIVIL WORKS",
              links: [
                {
                  label: "Civil Works & Construction",
                  href: "/tg-global/infrastructure/civil",
                },
                {
                  label: "Government Facility Build",
                  href: "/tg-global/infrastructure/facilities",
                },
              ],
            },
            {
              columnTitle: "ENERGY RESILIENCE",
              links: [
                {
                  label: "Renewable Energy Systems",
                  href: "/tg-global/infrastructure/energy",
                },
              ],
            },
          ],
        },
      },
      {
        label: "RECREATION",
        href: "/tg-global/recreation",
        megaMenu: {
          leftPanel: {
            title: "LEISURE DEVELOPMENT",
            description:
              "Turnkey design and installation of high-engagement adventure courses and world-class leisure destinations.",
          },
          rightPanels: [
            {
              columnTitle: "ACTIVE ENTERTAINMENT",
              links: [
                {
                  label: "Adventure Park Solutions",
                  href: "/tg-global/recreation/parks",
                },
                {
                  label: "Obstacle Courses",
                  href: "/tg-global/recreation/obstacle",
                },
              ],
            },
            {
              columnTitle: "DESTINATION PLANNING",
              links: [
                {
                  label: "Resort Development",
                  href: "/tg-global/recreation/resort",
                },
              ],
            },
          ],
        },
      },
      {
        label: "COMPANY",
        href: "/tg-global/company",
        megaMenu: {
          leftPanel: {
            title: "CORPORATE OVERVIEW",
            description:
              "A unified network of specialized companies providing mission-critical solutions—ranging from tactical defense and emergency rescue to large-scale infrastructure.",
          },
          rightPanels: [
            {
              columnTitle: "ABOUT US",
              links: [
                { label: "Our Company", href: "/tg-global/about" },
                { label: "Field Operations", href: "/tg-global/operations" },
                { label: "Get In Touch", href: "/tg-global/contact" },
              ],
            },
          ],
        },
      },
    ],
  },

  t3ckTrading: {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "ELEVATION",
        href: "/t3ck-trading/elevation",
        megaMenu: {
          leftPanel: {
            title: "LIFTING SOLUTIONS",
            description:
              "Enterprise-grade lifting mechanisms and elevation infrastructure designed for heavy-duty industrial and commercial applications.",
          },
          rightPanels: [
            {
              columnTitle: "INDUSTRIAL SYSTEMS",
              links: [
                {
                  label: "Cranes & Hoists",
                  href: "/t3ck-trading/elevation/cranes",
                },
                {
                  label: "Hydraulic Lifts",
                  href: "/t3ck-trading/elevation/hydraulic",
                },
                {
                  label: "Material Handling",
                  href: "/t3ck-trading/elevation/handling",
                },
              ],
            },
          ],
        },
      },
      {
        label: "RIGGING",
        href: "/t3ck-trading/rigging",
        megaMenu: {
          leftPanel: {
            title: "STAGE & TRUSSES",
            description:
              "Modular staging solutions and high-capacity truss systems for event production, facility deployment, and structural support.",
          },
          rightPanels: [
            {
              columnTitle: "STRUCTURAL SUPPORT",
              links: [
                {
                  label: "Aluminum Trusses",
                  href: "/t3ck-trading/rigging/trusses",
                },
                {
                  label: "Modular Staging",
                  href: "/t3ck-trading/rigging/staging",
                },
                {
                  label: "Rigging Hardware",
                  href: "/t3ck-trading/rigging/hardware",
                },
              ],
            },
          ],
        },
      },
      {
        label: "WAREHOUSING",
        href: "/t3ck-trading/warehousing",
        megaMenu: {
          leftPanel: {
            title: "RACKING SYSTEMS",
            description:
              "Scalable storage architectures and heavy-duty racking systems optimized for logistics hubs and high-volume warehouse operations.",
          },
          rightPanels: [
            {
              columnTitle: "STORAGE INFRASTRUCTURE",
              links: [
                {
                  label: "Pallet Racking",
                  href: "/t3ck-trading/warehousing/pallet",
                },
                {
                  label: "Cantilever Systems",
                  href: "/t3ck-trading/warehousing/cantilever",
                },
                {
                  label: "Shelving Units",
                  href: "/t3ck-trading/warehousing/shelving",
                },
              ],
            },
          ],
        },
      },
      {
        label: "UPKEEP",
        href: "/t3ck-trading/upkeep",
        megaMenu: {
          leftPanel: {
            title: "FACILITY MAINTENANCE",
            description:
              "Comprehensive maintenance solutions, specialized equipment, and operational support to ensure facility longevity and compliance.",
          },
          rightPanels: [
            {
              columnTitle: "MAINTENANCE OPERATIONS",
              links: [
                {
                  label: "Safety Inspections",
                  href: "/t3ck-trading/upkeep/safety",
                },
                {
                  label: "Equipment Servicing",
                  href: "/t3ck-trading/upkeep/servicing",
                },
                {
                  label: "Facility Repairs",
                  href: "/t3ck-trading/upkeep/repairs",
                },
              ],
            },
          ],
        },
      },
      {
        label: "ILLUMINATION",
        href: "/t3ck-trading/illumination",
        megaMenu: {
          leftPanel: {
            title: "SOLAR & LIGHTING",
            description:
              "Sustainable commercial lighting systems and high-efficiency solar infrastructure for continuous, reliable operational visibility.",
          },
          rightPanels: [
            {
              columnTitle: "ENERGY & LIGHTING",
              links: [
                {
                  label: "Industrial Solar Lights",
                  href: "/t3ck-trading/illumination/solar",
                },
                {
                  label: "Site Illumination",
                  href: "/t3ck-trading/illumination/site",
                },
                {
                  label: "Emergency Lighting",
                  href: "/t3ck-trading/illumination/emergency",
                },
              ],
            },
          ],
        },
      },
      {
        label: "COMPANY",
        href: "/t3ck-trading/company",
        megaMenu: {
          leftPanel: {
            title: "CORPORATE OVERVIEW",
            description:
              "Delivering scalable infrastructure and specialized solutions for Local Government Units (LGUs) and multinational enterprises.",
          },
          rightPanels: [
            {
              columnTitle: "ABOUT US",
              links: [
                { label: "Our Company", href: "/t3ck-trading/about" },
                { label: "Partnerships", href: "/t3ck-trading/partnerships" },
                { label: "Get In Touch", href: "/t3ck-trading/contact" },
              ],
            },
          ],
        },
      },
    ],
  },

  tcaConcepts: {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "FAMILY",
        href: "/tca-concept/family",
        megaMenu: {
          leftPanel: {
            title: "FAMILY-ORIENTED ATTRACTIONS",
            description:
              "Inclusive, high-capacity amusement systems engineered to provide safe, engaging, and shared entertainment experiences for guests of all ages.",
          },
          rightPanels: [
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
      },
      {
        label: "JUNIOR",
        href: "/tca-concept/junior",
        megaMenu: {
          leftPanel: {
            title: "YOUTH & JUNIOR RIDES",
            description:
              "Specialized, scaled-down attractions built with advanced safety protocols, specifically designed for children and younger demographics.",
          },
          rightPanels: [
            {
              columnTitle: "ATTRACTION TYPES",
              links: [
                {
                  label: "Miniature Rides",
                  href: "/tca-concept/junior/miniature",
                },
                {
                  label: "Carousels & Spinners",
                  href: "/tca-concept/junior/carousels",
                },
                { label: "Play Structures", href: "/tca-concept/junior/play" },
              ],
            },
          ],
        },
      },
      {
        label: "EXTREME",
        href: "/tca-concept/extreme",
        megaMenu: {
          leftPanel: {
            title: "EXTREME THRILL RIDES",
            description:
              "High-intensity, adrenaline-focused attractions built with cutting-edge engineering to deliver premium entertainment for thrill-seeking audiences.",
          },
          rightPanels: [
            {
              columnTitle: "ATTRACTION TYPES",
              links: [
                {
                  label: "Drop Towers",
                  href: "/tca-concept/extreme/drop-towers",
                },
                {
                  label: "Pendulum Rides",
                  href: "/tca-concept/extreme/pendulum",
                },
                {
                  label: "High-Speed Attractions",
                  href: "/tca-concept/extreme/high-speed",
                },
              ],
            },
          ],
        },
      },
      {
        label: "COASTERS",
        href: "/tca-concept/coasters",
        megaMenu: {
          leftPanel: {
            title: "ROLLER COASTER SYSTEMS",
            description:
              "Large-scale, custom-engineered roller coasters that serve as flagship anchor attractions for major theme parks, resorts, and entertainment hubs.",
          },
          rightPanels: [
            {
              columnTitle: "SYSTEM TYPES",
              links: [
                {
                  label: "Steel Coasters",
                  href: "/tca-concept/coasters/steel",
                },
                {
                  label: "Suspended Coasters",
                  href: "/tca-concept/coasters/suspended",
                },
                {
                  label: "Launch Systems",
                  href: "/tca-concept/coasters/launch",
                },
              ],
            },
          ],
        },
      },
      {
        label: "RESERVATION",
        href: "/tca-concept/reservation",
        megaMenu: {
          leftPanel: {
            title: "RENTALS & RESERVATIONS",
            description:
              "Seamless booking and leasing solutions for amusement rentals, ensuring reliable attraction deployment and logistics for specialized events.",
          },
          rightPanels: [
            {
              columnTitle: "BOOKING SERVICES",
              links: [
                {
                  label: "Event Rentals",
                  href: "/tca-concept/reservation/event",
                },
                {
                  label: "Long-Term Leasing",
                  href: "/tca-concept/reservation/leasing",
                },
                {
                  label: "Deployment Logistics",
                  href: "/tca-concept/reservation/logistics",
                },
              ],
            },
          ],
        },
      },
      {
        label: "COMPANY",
        href: "/tca-concept/company",
        megaMenu: {
          leftPanel: {
            title: "CORPORATE OVERVIEW",
            description:
              "Learn about our expertise in developing, deploying, and managing world-class amusement infrastructure for large-scale theme parks and resort destinations.",
          },
          rightPanels: [
            {
              columnTitle: "ABOUT TCA",
              links: [
                { label: "Our Portfolio", href: "/tca-concept/portfolio" },
                { label: "Safety & Engineering", href: "/tca-concept/safety" },
                { label: "Contact Operations", href: "/tca-concept/contact" },
              ],
            },
          ],
        },
      },
    ],
  },

  tgEnterprise: {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "SURPLUS",
        href: "/tg-enterprise/surplus",
        megaMenu: {
          leftPanel: {
            title: "COMMERCIAL SURPLUS & LIQUIDATION",
            description:
              "Access our extensive inventory of high-quality, overstock, and premium mall pull-out goods, providing cost-effective retail solutions without compromising on value.",
          },
          rightPanels: [
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
      },
      {
        label: "ACTIVE",
        href: "/tg-enterprise/active",
        megaMenu: {
          leftPanel: {
            title: "ACTIVE GEAR & TRAVEL ESSENTIALS",
            description:
              "Premium outdoor equipment, athletic gear, and travel accessories designed for durability and performance in high-demand environments.",
          },
          rightPanels: [
            {
              columnTitle: "FORCE SPORTS & OUTDOORS",
              links: [
                {
                  label: "Athletic Wear",
                  href: "/tg-enterprise/active/athletic",
                },
                {
                  label: "Camping Equipment",
                  href: "/tg-enterprise/active/camping",
                },
                {
                  label: "Fitness Gear",
                  href: "/tg-enterprise/active/fitness",
                },
              ],
            },
            {
              columnTitle: "TRAVEL & MOBILITY",
              links: [
                {
                  label: "Luggage & Bags",
                  href: "/tg-enterprise/active/luggage",
                },
                {
                  label: "Travel Accessories",
                  href: "/tg-enterprise/active/accessories",
                },
              ],
            },
          ],
        },
      },
      {
        label: "LIVING",
        href: "/tg-enterprise/living",
        megaMenu: {
          leftPanel: {
            title: "HOME & LIVING GOODS",
            description:
              "A curated selection of domestic essentials, furniture, and home improvement products tailored for modern residential living and facility outfitting.",
          },
          rightPanels: [
            {
              columnTitle: "INTERIOR & DOMESTIC",
              links: [
                {
                  label: "Furniture & Decor",
                  href: "/tg-enterprise/living/furniture",
                },
                { label: "Bed & Bath", href: "/tg-enterprise/living/bed-bath" },
                {
                  label: "Kitchenware",
                  href: "/tg-enterprise/living/kitchenware",
                },
              ],
            },
            {
              columnTitle: "UTILITY & UPKEEP",
              links: [
                {
                  label: "Appliances",
                  href: "/tg-enterprise/living/appliances",
                },
                {
                  label: "Home Improvement",
                  href: "/tg-enterprise/living/improvement",
                },
              ],
            },
          ],
        },
      },
      {
        label: "MOTORS",
        href: "/tg-enterprise/motors",
        megaMenu: {
          leftPanel: {
            title: "AUTOMOTIVE & MOTOR ACCESSORIES",
            description:
              "Comprehensive automotive supplies, specialized tools, and vehicle accessories for maintenance, upgrades, and reliable transportation support.",
          },
          rightPanels: [
            {
              columnTitle: "VEHICLE CARE",
              links: [
                {
                  label: "Maintenance Tools",
                  href: "/tg-enterprise/motors/tools",
                },
                {
                  label: "Cleaning Supplies",
                  href: "/tg-enterprise/motors/cleaning",
                },
                {
                  label: "Replacement Parts",
                  href: "/tg-enterprise/motors/parts",
                },
              ],
            },
            {
              columnTitle: "ENHANCEMENTS",
              links: [
                {
                  label: "Interior Upgrades",
                  href: "/tg-enterprise/motors/interior",
                },
                {
                  label: "Exterior Accessories",
                  href: "/tg-enterprise/motors/exterior",
                },
              ],
            },
          ],
        },
      },
      {
        label: "LIFESTYLE",
        href: "/tg-enterprise/lifestyle",
        megaMenu: {
          leftPanel: {
            title: "LIFESTYLE & CONSUMER ESSENTIALS",
            description:
              "A diverse, high-volume catalog of everyday consumer goods, ranging from digital gadgets and daily groceries to personal accessories and hobbyist equipment.",
          },
          rightPanels: [
            {
              columnTitle: "TECH & PERSONAL",
              links: [
                {
                  label: "Mobiles & Gadgets",
                  href: "/tg-enterprise/lifestyle/gadgets",
                },
                {
                  label: "Bags & Accessories",
                  href: "/tg-enterprise/lifestyle/bags",
                },
              ],
            },
            {
              columnTitle: "DAILY NEEDS",
              links: [
                {
                  label: "Groceries",
                  href: "/tg-enterprise/lifestyle/groceries",
                },
                {
                  label: "Hobbies & Stationery",
                  href: "/tg-enterprise/lifestyle/hobbies",
                },
              ],
            },
          ],
        },
      },
      {
        label: "COMPANY",
        href: "/tg-enterprise/company",
        megaMenu: {
          leftPanel: {
            title: "CORPORATE OVERVIEW",
            description:
              "A dedicated retail and distribution network, supplying local dealers and the consumer market with a comprehensive catalog of outdoor, lifestyle, and essential goods.",
          },
          rightPanels: [
            {
              columnTitle: "ABOUT US",
              links: [
                { label: "Our Network", href: "/tg-enterprise/network" },
                {
                  label: "Partnership Opportunities",
                  href: "/tg-enterprise/partnerships",
                },
                { label: "Contact Sales", href: "/tg-enterprise/contact" },
              ],
            },
          ],
        },
      },
    ],
  },

  dii: {
    cta: "VISIT SITE",
    links: [
      {
        label: "ACADEMY",
        href: "/dii/academy",
        megaMenu: {
          leftPanel: {
            title: "TRAINING & CAPACITY BUILDING",
            description:
              "Comprehensive disaster risk reduction and crisis management training designed to empower government and corporate resilience.",
          },
          rightPanels: [
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
      },
      {
        label: "STRATEGY",
        href: "/dii/strategy",
        megaMenu: {
          leftPanel: {
            title: "CONSULTANCY & ADVISORY",
            description:
              "Intelligence-driven strategic planning and business continuity consulting to optimize recovery efforts in high-stakes environments.",
          },
          rightPanels: [
            {
              columnTitle: "ADVISORY SERVICES",
              links: [
                {
                  label: "Risk Assessments",
                  href: "/dii/strategy/assessments",
                },
                {
                  label: "Business Continuity Planning",
                  href: "/dii/strategy/bcp",
                },
                { label: "Policy Development", href: "/dii/strategy/policy" },
              ],
            },
          ],
        },
      },
      {
        label: "EVENTS",
        href: "/dii/events",
        megaMenu: {
          leftPanel: {
            title: "EVENTS ORGANIZATION",
            description:
              "End-to-end management for large-scale public safety summits, emergency response drills, and corporate resilience conferences.",
          },
          rightPanels: [
            {
              columnTitle: "EVENT MANAGEMENT",
              links: [
                { label: "Safety Summits", href: "/dii/events/summits" },
                { label: "Simulation Drills", href: "/dii/events/drills" },
                { label: "Corporate Workshops", href: "/dii/events/workshops" },
              ],
            },
          ],
        },
      },
      {
        label: "MEDIA",
        href: "/dii/media",
        megaMenu: {
          leftPanel: {
            title: "MULTIMEDIA & PUBLIC RELATIONS",
            description:
              "Strategic communications and public relations focused on crisis response, community safety awareness, and brand resilience.",
          },
          rightPanels: [
            {
              columnTitle: "COMMUNICATIONS",
              links: [
                { label: "Crisis PR", href: "/dii/media/pr" },
                { label: "Awareness Campaigns", href: "/dii/media/campaigns" },
                { label: "Media Production", href: "/dii/media/production" },
              ],
            },
          ],
        },
      },
      {
        label: "INTELLIGENCE",
        href: "/dii/intelligence",
        megaMenu: {
          leftPanel: {
            title: "THINK TANK & RESEARCH",
            description:
              "Advanced analytics and forward-thinking research dedicated to innovating disaster risk reduction and emergency frameworks.",
          },
          rightPanels: [
            {
              columnTitle: "RESEARCH SECTORS",
              links: [
                { label: "Data Analytics", href: "/dii/intelligence/data" },
                {
                  label: "Policy Innovation",
                  href: "/dii/intelligence/policy",
                },
                {
                  label: "Resilience Studies",
                  href: "/dii/intelligence/resilience",
                },
              ],
            },
          ],
        },
      },
      {
        label: "COMPANY",
        href: "/dii/company",
        megaMenu: {
          leftPanel: {
            title: "CORPORATE OVERVIEW",
            description:
              "Delivering intelligence-driven strategies, comprehensive training, and consultancy for disaster risk reduction, crisis management, and business continuity.",
          },
          rightPanels: [
            {
              columnTitle: "ABOUT DII",
              links: [
                { label: "Our Mission", href: "/dii/mission" },
                { label: "Our Experts", href: "/dii/experts" },
                { label: "Contact Us", href: "/dii/contact" },
              ],
            },
          ],
        },
      },
    ],
  },

  eeoc: {
    cta: "VISIT SITE",
    links: [
      {
        label: "SERVICES",
        href: "/eeoc/services",
        megaMenu: {
          leftPanel: {
            title: "TECHNICAL INTEGRATION SERVICES",
            description:
              "End-to-end deployment of unified command systems, including custom website design and seamless API integration for emergency hotlines.",
          },
          rightPanels: [
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
      {
        label: "INFRASTRUCTURE",
        href: "/eeoc/infrastructure",
        megaMenu: {
          leftPanel: {
            title: "SERVER & NETWORK BACKBONE",
            description:
              "Robust, high-availability server architecture and secure cloud hosting designed to keep mission-critical dispatch centers online 24/7.",
          },
          rightPanels: [
            {
              columnTitle: "INFRASTRUCTURE",
              links: [
                {
                  label: "Server Installation",
                  href: "/eeoc/infrastructure/server",
                },
                {
                  label: "Network Routing",
                  href: "/eeoc/infrastructure/network",
                },
                { label: "Cloud Hosting", href: "/eeoc/infrastructure/cloud" },
              ],
            },
          ],
        },
      },
      {
        label: "APPLICATIONS",
        href: "/eeoc/applications",
        megaMenu: {
          leftPanel: {
            title: "DESKTOP & MOBILE APPS",
            description:
              "Native and cross-platform applications built for field responders and command center operators to ensure real-time reporting.",
          },
          rightPanels: [
            {
              columnTitle: "APP ECOSYSTEM",
              links: [
                {
                  label: "Desktop Applications",
                  href: "/eeoc/applications/desktop",
                },
                {
                  label: "Mobile Field Apps",
                  href: "/eeoc/applications/mobile",
                },
                {
                  label: "Analytics Dashboards",
                  href: "/eeoc/applications/analytics",
                },
              ],
            },
          ],
        },
      },
      {
        label: "ENTERPRISE",
        href: "/eeoc/enterprise",
        megaMenu: {
          leftPanel: {
            title: "ENTERPRISE MANAGEMENT (ERP)",
            description:
              "Comprehensive internal systems, including HRIS and Payroll, tailored to manage the workforce of large municipalities and campus operations.",
          },
          rightPanels: [
            {
              columnTitle: "MANAGEMENT SYSTEMS",
              links: [
                { label: "HRIS", href: "/eeoc/enterprise/hris" },
                { label: "Payroll", href: "/eeoc/enterprise/payroll" },
                {
                  label: "Enterprise Resource Planning (ERP)",
                  href: "/eeoc/enterprise/erp",
                },
                { label: "PFMS", href: "/eeoc/enterprise/pfms" },
              ],
            },
          ],
        },
      },
      {
        label: "PLATFORMS",
        href: "/eeoc/platforms",
        megaMenu: {
          leftPanel: {
            title: "PROPRIETARY PLATFORMS",
            description:
              "Specialized software solutions ranging from mass text broadcasts and queuing systems to localized retail operations.",
          },
          rightPanels: [
            {
              columnTitle: "SOFTWARE SUITES",
              links: [
                {
                  label: "Text Broadcast & Email Blast",
                  href: "/eeoc/platforms/broadcast",
                },
                { label: "Queuing Systems", href: "/eeoc/platforms/queuing" },
                { label: "RetailPlus Pro", href: "/eeoc/platforms/retailplus" },
                { label: "IlovePayDay", href: "/eeoc/platforms/ilovepayday" },
              ],
            },
          ],
        },
      },
      {
        label: "COMPANY",
        href: "/eeoc/company",
        megaMenu: {
          leftPanel: {
            title: "CORPORATE OVERVIEW",
            description:
              "A unified command system designed to optimize emergency response and daily operations through integrated dispatch, reporting, and analytics.",
          },
          rightPanels: [
            {
              columnTitle: "ABOUT EEOC",
              links: [
                { label: "Our Architecture", href: "/eeoc/architecture" },
                { label: "Case Studies", href: "/eeoc/case-studies" },
                { label: "Contact Support", href: "/eeoc/contact" },
              ],
            },
          ],
        },
      },
    ],
  },
};
