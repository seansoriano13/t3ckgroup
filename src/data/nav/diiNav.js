import { company, DEFAULT_ICON } from "./shared.js";

export const diiNav = {
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
  }
