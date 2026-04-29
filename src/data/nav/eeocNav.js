import { company, DEFAULT_ICON } from "./shared.js";

export const eeocNav = {
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
  }
