export const eeoc = [
  // --- 1. HERO SECTION ---
  {
    type: "hero",
    data: {
      heroImage: "/assets/heroes/eeoc-command-center.jpg",
      heroTitle: "UNIFIED COMMAND FOR EVERYDAY EMERGENCY OPERATIONS",
      ctaText: "SYSTEM OVERVIEW",
      href: "/eeoc/services"
    }
  },

  // --- 2. PRODUCT SPOTLIGHT (UNIFIED COMMAND SYSTEM) ---
  {
    type: "productSpotlight",
    data: {
      id: "command-center-v3",
      category: "TECHNICAL INTEGRATION",
      title: "CENTRALIZED OPERATIONAL CONTROL",
      description: "The EEOC Command Suite integrates real-time dispatch, network monitoring, and proprietary analytics platforms into a single, high-availability dashboard for seamless emergency coordination.",
      mainProductImage: "/assets/products/eeoc-dashboard-main.png",
      ctaText: "VIEW PLATFORMS",
      ctaLink: "/eeoc/platforms",
      mountingOptions: {
        sectionTitle: "System Backbone",
        options: [
          { id: "01", label: "CLOUD HOSTING", caption: "24/7 Redundant server uptime.", featureImage: "/assets/products/eeoc-cloud.jpg" },
          { id: "02", label: "MOBILE DISPATCH", caption: "Cross-platform field applications.", featureImage: "/assets/products/eeoc-app.jpg" },
          { id: "03", label: "TEXT BROADCAST", caption: "Mass notification & email blast.", featureImage: "/assets/products/eeoc-sms.jpg" },
          { id: "04", label: "ERP INTEGRATION", caption: "HRIS, Payroll, & Enterprise Management.", featureImage: "/assets/products/eeoc-erp.jpg" }
        ]
      }
    }
  },

  // --- 3. CAPABILITIES (SYSTEMS & INFRASTRUCTURE) ---
  {
    type: "capabilities",
    data: [
      {
        id: "tech-services",
        number: "01",
        title: "SERVICES",
        subtitle: "Technical Integration",
        description: "End-to-end deployment of unified command systems, including custom website design and seamless API integration for emergency hotlines.",
        contentImage: "/assets/capabilities/eeoc-web-inline.jpg",
        mainImage: "/assets/hero/eeoc-web-main.jpg",
        link: "/eeoc/services"
      },
      {
        id: "server-infra",
        number: "02",
        title: "INFRASTRUCTURE",
        subtitle: "Server & Network Backbone",
        description: "Robust, high-availability server architecture and secure cloud hosting designed to keep mission-critical dispatch centers online 24/7.",
        contentImage: "/assets/capabilities/eeoc-infra-inline.jpg",
        mainImage: "/assets/hero/eeoc-infra-main.jpg",
        link: "/eeoc/infrastructure"
      },
      {
        id: "mobile-apps",
        number: "03",
        title: "APPLICATIONS",
        subtitle: "Desktop & Mobile Ecosystem",
        description: "Native and cross-platform applications built for field responders and command center operators to ensure real-time reporting and analytics.",
        contentImage: "/assets/capabilities/eeoc-apps-inline.jpg",
        mainImage: "/assets/hero/eeoc-apps-main.jpg",
        link: "/eeoc/applications"
      },
      {
        id: "enterprise-mgmt",
        number: "04",
        title: "ENTERPRISE",
        subtitle: "ERP & Management Systems",
        description: "Comprehensive internal systems, including HRIS and Payroll, tailored to manage the workforce of large municipalities and campus operations.",
        contentImage: "/assets/capabilities/eeoc-erp-inline.jpg",
        mainImage: "/assets/hero/eeoc-erp-main.jpg",
        link: "/eeoc/enterprise"
      }
    ]
  },

  // --- 4. FIELD OPERATIONS (SYSTEM STATUS) ---
  {
    type: "fieldOperations",
    data: {
      sectionTitle: "OPERATIONS",
      mainTitle: "SYSTEM DEPLOYMENTS",
      activities: [
        {
          id: "sys-01",
          dateRange: "Deployed Q4 2025",
          title: "CITY DISPATCH INTEGRATION",
          description: "Unified command system installation for a major LGU.",
          image: "/assets/activities/eeoc-dispatch.jpg"
        },
        {
          id: "sys-02",
          dateRange: "Security Audit",
          title: "ENTERPRISE NETWORK HARDENING",
          description: "Server infrastructure upgrade for secure operations.",
          image: "/assets/activities/eeoc-security.jpg"
        },
        {
          id: "sys-03",
          dateRange: "Platform Launch",
          title: "RETAILPLUS PRO DEPLOYMENT",
          description: "Mass rollout of localized retail and queuing solutions.",
          image: "/assets/activities/eeoc-retail.jpg"
        }
      ]
    }
  },

  // --- 5. CONTACT SECTION ---
  {
    type: "contact",
    data: {
      sectionTitle: "TECH SUPPORT",
      mainTitle: "VISIT SITE",
      description: "Explore our unified command architecture designed to optimize emergency response through integrated dispatch and reporting.",
      ctaText: "VISIT EEOC SITE",
      backgroundImage: "/assets/contact/eeoc-network.jpg"
    }
  }
];