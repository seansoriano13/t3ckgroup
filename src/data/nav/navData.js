const DEFAULT_ICON = "/nav-dropdown/crosshair.svg";

// NAV KEYS LIST
/*

tggtOpc - TG GLOBAL TRADE OPC
t3ckTrading - T3CKTRADING
tcaCbs - TCA CONCEPTS AND BUILDERS SERVICES
tgEnt - TG ENTERPRISE
dii - Disaster Intelligence Inc.
eooc - Emergency

*/

const company = {
  leftPanel: {
    title: "CORPORATE OVERVIEW",
    description:
      "A unified network of specialized companies providing mission-critical solutions—ranging from tactical defense and emergency rescue to large-scale infrastructure.",
  },
  rightPanel: [
    {
      title: "ABOUT US",
      links: [
        { label: "Our Company", href: "/about" },
        { label: "Field Operations", href: "/operations" },
        { label: "Get In Touch", href: "/tg-global/contact" },
      ],
    },
  ],
};

const main = {
  cta: "CONTACT US",
  links: [
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
          icon: DEFAULT_ICON,
          title: "CRISIS RESPONSE & RESCUE",
          links: [
            { label: "Emergency Medical Equipment" },
            { label: "Fire Fighting Equipment" },
            { label: "USAR - Search and Rescue" },
            { label: "Emergency Operations Center" },
          ],
        },
        {
          icon: "/nav-dropdown/gear.svg",
          title: "SPECIALIZED AREAS",
          links: [
            { label: "Outdoor & Expedition" },
            { label: "Recreation & Leisure" },
            { label: "Enterprise Solutions" },
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
            { label: "Tactical Gear" },
            { label: "Heavy Equipment" },
            { label: "Spare Parts" },
          ],
        },
        {
          icon: "/nav-dropdown/logistics.svg",
          title: "SERVICES",
          links: [
            { label: "Bulk Procurement" },
            {
              label: "Logistics & Delivery",
            },
            {
              label: "International Shipping",
            },
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
            {
              label: "Scenic Attractions",
            },
            {
              label: "Interactive Experiences",
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
            },
            {
              label: "Consumer Electronics",
            },
            {
              label: "Assorted Goods",
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
            { label: "Crisis Management" },
            { label: "Public Safety Protocols" },
            {
              label: "First Responder Certifications",
            },
          ],
        },
      ],
    },

    eooc: {
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
            },
            {
              label: "Software Customization",
            },
            {
              label: "System Integrations",
            },
          ],
        },
      ],
    },
  },
};

export const navData = {
  main: main,
  contactUs: main,
  requestAQuote: main,
  tggtOpc: {
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
            icon: DEFAULT_ICON,
            title: "CRITICAL SUPPORT",
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
            title: "MISSION SUSTAINMENT",
            links: [
              {
                label: "Logistics Support Supplies",
                href: "/tg-global/defense/logistics",
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
                href: "/tg-global/outdoor/camping",
              },
              {
                label: "Technical Apparel",
                href: "/tg-global/outdoor/apparel",
              },
            ],
          },
          {
            title: "SURVIVAL & NAVIGATION",
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
                href: "/tg-global/infrastructure/civil",
              },
              {
                label: "Government Facility Build",
                href: "/tg-global/infrastructure/facilities",
              },
            ],
          },
          {
            title: "ENERGY RESILIENCE",
            links: [
              {
                label: "Renewable Energy Systems",
                href: "/tg-global/infrastructure/energy",
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
                href: "/tg-global/recreation/parks",
              },
              {
                label: "Obstacle Courses",
                href: "/tg-global/recreation/obstacle",
              },
            ],
          },
          {
            title: "DESTINATION PLANNING",
            links: [
              {
                label: "Resort Development",
                href: "/tg-global/recreation/resort",
              },
            ],
          },
        ],
      },
      company: company,
    },
  },
  t3ckTrading: {
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
  },
  tcaCbs: {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "Family",
        menuKey: "tcaCbsFamily",
      },
      {
        label: "Junior",
        menuKey: "tcaCbsJunior",
      },
      {
        label: "Extreme",
        menuKey: "tcaCbsExtreme",
      },
      {
        label: "Coasters",
        menuKey: "tcaCbsCoasters",
      },
      {
        label: "Reservation",
        menuKey: "tcaCbsReservation",
      },
      {
        label: "Company",
        href: "/company",
        menuKey: "company",
      },
    ],
    megaMenu: {
      tcaCbsFamily: {
        leftPanel: {
          title: "FAMILY-ORIENTED ATTRACTIONS",
          description:
            "Inclusive, high-capacity amusement systems engineered to provide safe, engaging, and shared entertainment experiences for guests of all ages.",
        },
        rightPanel: [
          {
            title: "ATTRACTION TYPES",
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
      tcaCbsJunior: {
        leftPanel: {
          title: "YOUTH & JUNIOR RIDES",
          description:
            "Specialized, scaled-down attractions built with advanced safety protocols, specifically designed for children and younger demographics.",
        },
        rightPanel: [
          {
            title: "ATTRACTION TYPES",
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
      tcaCbsExtreme: {
        leftPanel: {
          title: "EXTREME THRILL RIDES",
          description:
            "High-intensity, adrenaline-focused attractions built with cutting-edge engineering to deliver premium entertainment for thrill-seeking audiences.",
        },
        rightPanel: [
          {
            title: "ATTRACTION TYPES",
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
      tcaCbsCoasters: {
        leftPanel: {
          title: "ROLLER COASTER SYSTEMS",
          description:
            "Large-scale, custom-engineered roller coasters that serve as flagship anchor attractions for major theme parks, resorts, and entertainment hubs.",
        },
        rightPanel: [
          {
            title: "SYSTEM TYPES",
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
      tcaCbsReservation: {
        leftPanel: {
          title: "RENTALS & RESERVATIONS",
          description:
            "Seamless booking and leasing solutions for amusement rentals, ensuring reliable attraction deployment and logistics for specialized events.",
        },
        rightPanel: [
          {
            title: "BOOKING SERVICES",
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
      company: company,
    },
  },
  tgEnt: {
    cta: "REQUEST A QUOTE",
    links: [
      {
        label: "Surplus",
        menuKey: "tgEntSurplus",
      },
      {
        label: "Active",
        menuKey: "tgEntActive",
      },
      {
        label: "Living",
        menuKey: "tgEntLiving",
      },
      {
        label: "Motors",
        menuKey: "tgEntMotors",
      },
      {
        label: "Lifestyle",
        menuKey: "tgEntLifestyle",
      },
      {
        label: "Company",
        href: "/company",
        menuKey: "company",
      },
    ],
    megaMenu: {
      tgEntSurplus: {
        leftPanel: {
          title: "COMMERCIAL SURPLUS & LIQUIDATION",
          description:
            "Access our extensive inventory of high-quality, overstock, and premium mall pull-out goods, providing cost-effective retail solutions without compromising on value.",
        },
        rightPanel: [
          {
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
      tgEntActive: {
        leftPanel: {
          title: "ACTIVE GEAR & TRAVEL ESSENTIALS",
          description:
            "Premium outdoor equipment, athletic gear, and travel accessories designed for durability and performance in high-demand environments.",
        },
        rightPanel: [
          {
            title: "FORCE SPORTS & OUTDOORS",
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
            title: "TRAVEL & MOBILITY",
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
      tgEntLiving: {
        leftPanel: {
          title: "HOME & LIVING GOODS",
          description:
            "A curated selection of domestic essentials, furniture, and home improvement products tailored for modern residential living and facility outfitting.",
        },
        rightPanel: [
          {
            title: "INTERIOR & DOMESTIC",
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
            title: "UTILITY & UPKEEP",
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
      tgEntMotors: {
        leftPanel: {
          title: "AUTOMOTIVE & MOTOR ACCESSORIES",
          description:
            "Comprehensive automotive supplies, specialized tools, and vehicle accessories for maintenance, upgrades, and reliable transportation support.",
        },
        rightPanel: [
          {
            title: "VEHICLE CARE",
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
            title: "ENHANCEMENTS",
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
      tgEntLifestyle: {
        leftPanel: {
          title: "LIFESTYLE & CONSUMER ESSENTIALS",
          description:
            "A diverse, high-volume catalog of everyday consumer goods, ranging from digital gadgets and daily groceries to personal accessories and hobbyist equipment.",
        },
        rightPanel: [
          {
            title: "TECH & PERSONAL",
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
            title: "DAILY NEEDS",
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
      company: company,
    },
  },
  dii: {
    cta: "VISIT SITE",
    links: [
      {
        label: "Academy",
        menuKey: "diiAcademy",
      },
      {
        label: "Strategy",
        menuKey: "diiStrategy",
      },
      {
        label: "Events",
        menuKey: "diiEvents",
      },
      {
        label: "Media",
        menuKey: "diiMedia",
      },
      {
        label: "Intelligence",
        menuKey: "diiIntelligence",
      },
      {
        label: "Company",
        href: "/company",
        menuKey: "company",
      },
    ],
    megaMenu: {
      diiAcademy: {
        leftPanel: {
          title: "TRAINING & CAPACITY BUILDING",
          description:
            "Comprehensive disaster risk reduction and crisis management training designed to empower government and corporate resilience.",
        },
        rightPanel: [
          {
            title: "PROGRAMS",
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
      diiStrategy: {
        leftPanel: {
          title: "CONSULTANCY & ADVISORY",
          description:
            "Intelligence-driven strategic planning and business continuity consulting to optimize recovery efforts in high-stakes environments.",
        },
        rightPanel: [
          {
            title: "ADVISORY SERVICES",
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
      diiEvents: {
        leftPanel: {
          title: "EVENTS ORGANIZATION",
          description:
            "End-to-end management for large-scale public safety summits, emergency response drills, and corporate resilience conferences.",
        },
        rightPanel: [
          {
            title: "EVENT MANAGEMENT",
            links: [
              { label: "Safety Summits", href: "/dii/events/summits" },
              { label: "Simulation Drills", href: "/dii/events/drills" },
              { label: "Corporate Workshops", href: "/dii/events/workshops" },
            ],
          },
        ],
      },
      diiMedia: {
        leftPanel: {
          title: "MULTIMEDIA & PUBLIC RELATIONS",
          description:
            "Strategic communications and public relations focused on crisis response, community safety awareness, and brand resilience.",
        },
        rightPanel: [
          {
            title: "COMMUNICATIONS",
            links: [
              { label: "Crisis PR", href: "/dii/media/pr" },
              { label: "Awareness Campaigns", href: "/dii/media/campaigns" },
              { label: "Media Production", href: "/dii/media/production" },
            ],
          },
        ],
      },
      diiIntelligence: {
        leftPanel: {
          title: "THINK TANK & RESEARCH",
          description:
            "Advanced analytics and forward-thinking research dedicated to innovating disaster risk reduction and emergency frameworks.",
        },
        rightPanel: [
          {
            title: "RESEARCH SECTORS",
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
      company: company,
    },
  },
  eooc: {
    cta: "VISIT SITE",
    links: [
      {
        label: "Services",
        menuKey: "eoocServices",
      },
      {
        label: "Infrastructure",
        menuKey: "eoocInfrastructure",
      },
      {
        label: "Applications",
        menuKey: "eoocApplications",
      },
      {
        label: "Enterprise",
        menuKey: "eoocEnterprise",
      },
      {
        label: "Platforms",
        menuKey: "eoocPlatforms",
      },
      {
        label: "Company",
        href: "/company",
        menuKey: "company",
      },
    ],
    megaMenu: {
      eoocServices: {
        leftPanel: {
          title: "TECHNICAL INTEGRATION SERVICES",
          description:
            "End-to-end deployment of unified command systems, including custom website design and seamless API integration for emergency hotlines.",
        },
        rightPanel: [
          {
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
      eoocInfrastructure: {
        leftPanel: {
          title: "SERVER & NETWORK BACKBONE",
          description:
            "Robust, high-availability server architecture and secure cloud hosting designed to keep mission-critical dispatch centers online 24/7.",
        },
        rightPanel: [
          {
            title: "INFRASTRUCTURE",
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
      eoocApplications: {
        leftPanel: {
          title: "DESKTOP & MOBILE APPS",
          description:
            "Native and cross-platform applications built for field responders and command center operators to ensure real-time reporting.",
        },
        rightPanel: [
          {
            title: "APP ECOSYSTEM",
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
      eoocEnterprise: {
        leftPanel: {
          title: "ENTERPRISE MANAGEMENT (ERP)",
          description:
            "Comprehensive internal systems, including HRIS and Payroll, tailored to manage the workforce of large municipalities and campus operations.",
        },
        rightPanel: [
          {
            title: "MANAGEMENT SYSTEMS",
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
      eoocPlatforms: {
        leftPanel: {
          title: "CORPORATE OVERVIEW",
          description:
            "A unified command system designed to optimize emergency response and daily operations through integrated dispatch, reporting, and analytics.",
        },
        rightPanel: [
          {
            title: "ABOUT EEOC",
            links: [
              { label: "Our Architecture", href: "/eeoc/architecture" },
              { label: "Case Studies", href: "/eeoc/case-studies" },
              { label: "Contact Support", href: "/eeoc/contact" },
            ],
          },
        ],
      },
      company: company,
    },
  },
};
