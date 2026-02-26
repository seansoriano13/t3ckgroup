export const dii = [
  // --- 1. HERO SECTION ---
  {
    type: "hero",
    data: {
      heroImage: "/assets/heroes/dii-disaster-response.jpg",
      heroTitle: "INTELLIGENCE-DRIVEN STRATEGIES FOR CRISIS RESILIENCE",
      ctaText: "LEARN STRATEGY",
      href: "/dii/strategy"
    }
  },

  // --- 2. PRODUCT SPOTLIGHT (RESEARCH & ADVISORY) ---
  {
    type: "productSpotlight",
    data: {
      id: "resilience-framework-2026",
      category: "STRATEGIC INTELLIGENCE",
      title: "NAVIGATING UNCERTAINTY",
      description: "Our proprietary Resilience Framework provides government agencies and corporations with actionable data analytics and forward-thinking policy innovation to mitigate large-scale disaster risks.",
      mainProductImage: "/assets/products/dii-report-main.png",
      ctaText: "VIEW RESEARCH",
      ctaLink: "/dii/intelligence",
      mountingOptions: {
        sectionTitle: "Advisory Sectors",
        options: [
          { id: "01", label: "DATA ANALYTICS", caption: "Predictive risk modeling.", featureImage: "/assets/products/dii-data.jpg" },
          { id: "02", label: "POLICY INNOVATION", caption: "Crisis management protocols.", featureImage: "/assets/products/dii-policy.jpg" },
          { id: "03", label: "FIELD SIMULATIONS", caption: "Full-scale response drills.", featureImage: "/assets/products/dii-drill.jpg" },
          { id: "04", label: "CAPACITY BUILDING", caption: "Elite responder certification.", featureImage: "/assets/products/dii-training.jpg" }
        ]
      }
    }
  },

  // --- 3. CAPABILITIES (ADVISORY & TRAINING) ---
  {
    type: "capabilities",
    data: [
      {
        id: "dii-academy",
        number: "01",
        title: "DII ACADEMY",
        subtitle: "Training & Capacity Building",
        description: "Comprehensive disaster risk reduction and crisis management training designed to empower government and corporate resilience through certified programs.",
        contentImage: "/assets/capabilities/dii-academy-inline.jpg",
        mainImage: "/assets/hero/dii-academy-main.jpg",
        link: "/dii/academy"
      },
      {
        id: "strategic-advisory",
        number: "02",
        title: "STRATEGY",
        subtitle: "Consultancy & Advisory",
        description: "Intelligence-driven strategic planning and business continuity consulting to optimize recovery efforts in high-stakes environments.",
        contentImage: "/assets/capabilities/dii-strategy-inline.jpg",
        mainImage: "/assets/hero/dii-strategy-main.jpg",
        link: "/dii/strategy"
      },
      {
        id: "public-safety-events",
        number: "03",
        title: "EVENTS",
        subtitle: "Public Safety Management",
        description: "End-to-end management for large-scale public safety summits, emergency response drills, and corporate resilience conferences.",
        contentImage: "/assets/capabilities/dii-events-inline.jpg",
        mainImage: "/assets/hero/dii-events-main.jpg",
        link: "/dii/events"
      },
      {
        id: "think-tank",
        number: "04",
        title: "INTELLIGENCE",
        subtitle: "Think Tank & Research",
        description: "Advanced analytics and forward-thinking research dedicated to innovating disaster risk reduction and emergency frameworks.",
        contentImage: "/assets/capabilities/dii-intel-inline.jpg",
        mainImage: "/assets/hero/dii-intel-main.jpg",
        link: "/dii/intelligence"
      }
    ]
  },

  // --- 4. FIELD OPERATIONS (ACTIVITY LOG) ---
  {
    type: "fieldOperations",
    data: {
      sectionTitle: "ENGAGEMENTS",
      mainTitle: "GLOBAL SUMMITS",
      activities: [
        {
          id: "eng-01",
          dateRange: "March 2026",
          title: "ASEAN RESILIENCE FORUM",
          description: "Leading regional dialogue on transboundary disaster management.",
          image: "/assets/activities/dii-summit.jpg"
        },
        {
          id: "eng-02",
          dateRange: "Ongoing",
          title: "MUNICIPAL RISK AUDIT",
          description: "Comprehensive safety assessment for metropolitan hubs.",
          image: "/assets/activities/dii-audit.jpg"
        },
        {
          id: "eng-03",
          dateRange: "Quarterly",
          title: "DII ACADEMY WORKSHOP",
          description: "Certification training for 500+ emergency frontliners.",
          image: "/assets/activities/dii-workshop.jpg"
        }
      ]
    }
  },

  // --- 5. CONTACT SECTION ---
  {
    type: "contact",
    data: {
      sectionTitle: "STRENGTHEN YOUR RESPONSE",
      mainTitle: "GET IN TOUCH",
      description: "Partner with DII for intelligence-driven strategies, comprehensive training, and world-class disaster consultancy.",
      ctaText: "CONTACT DII",
      backgroundImage: "/assets/contact/dii-command.jpg"
    }
  }
];