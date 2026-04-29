import { company, DEFAULT_ICON } from "./shared.js";

export const tcaCbsNav = {
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
  }
