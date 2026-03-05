export const tgGlobalOpc = [
  // --- 1. HERO SECTION ---
  {
    type: "hero",
    data: {
      heroImage: "/assets/heroes/tg-global-pilot.jpg",
      heroTitle: "MISSION-CRITICAL SYSTEMS FOR NATIONAL DEFENSE",
      ctaText: "EXPLORE CAPABILITIES",
      href: "/tg-global/capabilities"
    }
  },

  // --- 2. PRODUCT SPOTLIGHT (GUARDIAN ANGEL ELITE) ---
  {
    type: "productSpotlight",
    data: {
      id: "guardian-angel-elite",
      category: "INDIVIDUAL SAFETY ILLUMINATION",
      title: "VISIBILITY IS SURVIVABILITY",
      description: "The Guardian Angel Elite Series delivers 360-degree high-intensity illumination for tactical, rescue, and law enforcement operations. Engineered to be visible from 5+ miles while keeping operators hands-free.",
      mainProductImage: "/assets/products/ga-elite-unit.png",
      ctaText: "EXPLORE MORE",
      ctaLink: "/products/guardian-angel-elite",
      mountingOptions: {
        sectionTitle: "Operational Mounting",
        options: [
          { id: "01", label: "TACTICAL VEST", caption: "Magnetic Harness Integration.", featureImage: "/assets/products/ga-vest-mount.jpg" },
          { id: "02", label: "HELMET RAIL", caption: "ARC Rail & Picatinny Compatibility.", featureImage: "/assets/products/ga-helmet-mount.jpg" },
          { id: "03", label: "K9 UNIT", caption: "Working Dog Harness Integration.", featureImage: "/assets/products/ga-k9-mount.jpg" },
          { id: "04", label: "MAGNETIC SURFACE", caption: "Hard-mount to vehicles and metallic structures.", featureImage: "/assets/products/ga-magnetic-mount.jpg" }
        ]
      }
    }
  },

  // --- 3. CAPABILITIES (ACCORDION SECTION) ---
  {
    type: "capabilities",
    data: [
      {
        id: "response-domain",
        number: "01",
        title: "RESPONSE DOMAIN",
        subtitle: "Tactical & Rescue Operations",
        description: "A unified tactical framework merging elite search and suppression forces with specialized heavy assets and mobile command infrastructure for rapid, coordinated crisis intervention.",
        contentImage: "/assets/capabilities/tg-response-inline.jpg",
        mainImage: "/assets/hero/tg-response-main.jpg",
        link: "/tg-global/response"
      },
      {
        id: "defense-capabilities",
        number: "02",
        title: "DEFENSE CAPABILITIES",
        subtitle: "Force Protection & Sustainment",
        description: "Mission-critical protective systems and logistical architectures designed to ensure operational superiority and force survivability in high-threat environments.",
        contentImage: "/assets/capabilities/tg-defense-inline.jpg",
        mainImage: "/assets/hero/tg-defense-main.jpg",
        link: "/tg-global/defense"
      },
      {
        id: "expedition-systems",
        number: "03",
        title: "EXPEDITION SYSTEMS",
        subtitle: "Field Shelter & Survival Gear",
        description: "Professional-grade equipment and technical apparel engineered to withstand extreme environmental conditions and remote exploration requirements.",
        contentImage: "/assets/capabilities/tg-outdoor-inline.jpg",
        mainImage: "/assets/hero/tg-outdoor-main.jpg",
        link: "/tg-global/outdoor"
      },
      {
        id: "critical-infrastructure",
        number: "04",
        title: "CRITICAL INFRASTRUCTURE",
        subtitle: "Vertical & Civil Works",
        description: "Comprehensive engineering and construction services delivering secure, sustainable, and scalable infrastructure for government and civil sectors.",
        contentImage: "/assets/capabilities/tg-infra-inline.jpg",
        mainImage: "/assets/hero/tg-infra-main.jpg",
        link: "/tg-global/infrastructure"
      }
    ]
  },

  // --- 4. FIELD OPERATIONS (ACTIVITIES GRID) ---
  {
    type: "fieldOperations",
    data: {
      sectionTitle: "ACTIVITIES",
      mainTitle: "FIELD OPERATIONS",
      activities: [
        {
          id: "act-01",
          dateRange: "11/07/22 13:00 - 11/11/22 15:00", //
          title: "BULACAN RESCUE LYMPICS", //
          description: "Rapid deployment of amphibious rescue units.", //
          image: "/assets/activities/bulacan-rescue.jpg"
        },
        {
          id: "act-02",
          dateRange: "05/28/24 13:00 - 05/31/24 13:00", //
          title: "6TH CADDRRMO’S REGIONAL CONVENTION", //
          description: "Rapid deployment of amphibious rescue units.", //
          image: "/assets/activities/caddrrmo.jpg"
        },
        {
          id: "act-03",
          dateRange: "05/28/24 13:00 - 05/31/24 13:00", //
          title: "PHILMARINE EXPO 2023", //
          description: "Rapid deployment of amphibious rescue units.", //
          image: "/assets/activities/philmarine.jpg"
        }
      ]
    }
  },

  // --- 5. CONTACT SECTION ---
  {
    type: "contact",
    data: {
      sectionTitle: "LEARN MORE", //
      mainTitle: "GET IN TOUCH", //
      description: "Supplying LGUs and enterprises with Tier-1 tactical gear and advanced rescue infrastructure.", //
      ctaText: "CONTACT T3CK", //
      backgroundImage: "/assets/contact/hq-aerial.jpg"
    }
  }
];