export const t3ckTrading = [
  // --- 1. HERO SECTION ---
  {
    type: "hero",
    data: {
      heroImage: "/assets/heroes/t3ck-trading-infrastructure.jpg",
      heroTitle: "SCALABLE INFRASTRUCTURE FOR GLOBAL ENTERPRISE",
      ctaText: "VIEW SOLUTIONS",
      href: "/t3ck-trading/solutions"
    }
  },

  // --- 2. PRODUCT SPOTLIGHT (HEAVY DUTY STORAGE) ---
  {
    type: "productSpotlight",
    data: {
      id: "military-heavy-duty-box",
      category: "INDUSTRIAL STORAGE SOLUTIONS",
      title: "RUGGEDIZED PROTECTION",
      description: "Engineered for the most demanding environments, our military-grade storage solutions provide impact-resistant, weatherproof protection for mission-critical equipment and hardware.",
      mainProductImage: "/assets/products/military-box-main.png",
      ctaText: "VIEW SPECIFICATIONS",
      ctaLink: "/products/heavy-duty-storage",
      mountingOptions: {
        sectionTitle: "Deployment Features",
        options: [
          { id: "01", label: "STACKABLE DESIGN", caption: "Secure Interlocking Grooves.", featureImage: "/assets/products/box-stack.jpg" },
          { id: "02", label: "REINFORCED HANDLES", caption: "Heavy-load rated steel grips.", featureImage: "/assets/products/box-handle.jpg" },
          { id: "03", label: "WEATHER SEAL", caption: "IP67-rated moisture protection.", featureImage: "/assets/products/box-seal.jpg" },
          { id: "04", label: "PRESSURE VALVES", caption: "Automatic pressure equalization.", featureImage: "/assets/products/box-valve.jpg" }
        ]
      }
    }
  },

  // --- 3. CAPABILITIES (STRUCTURAL & FACILITY) ---
  {
    type: "capabilities",
    data: [
      {
        id: "lifting-solutions",
        number: "01",
        title: "LIFTING SOLUTIONS",
        subtitle: "Industrial Elevation Systems",
        description: "Enterprise-grade lifting mechanisms and elevation infrastructure designed for heavy-duty industrial and commercial applications, including cranes and hydraulic systems.",
        contentImage: "/assets/capabilities/lifting-inline.jpg",
        mainImage: "/assets/hero/lifting-main.jpg",
        link: "/t3ck-trading/elevation"
      },
      {
        id: "stage-trusses",
        number: "02",
        title: "STAGE & TRUSSES",
        subtitle: "Modular Structural Support",
        description: "High-capacity aluminum truss systems and modular staging solutions built for rapid deployment in large-scale event production and structural outfitting.",
        contentImage: "/assets/capabilities/stage-inline.jpg",
        mainImage: "/assets/hero/stage-main.jpg",
        link: "/t3ck-trading/rigging"
      },
      {
        id: "racking-systems",
        number: "03",
        title: "RACKING SYSTEMS",
        subtitle: "Warehouse & Logistics Storage",
        description: "Scalable storage architectures and heavy-duty pallet racking systems optimized for high-volume logistics hubs and enterprise warehouse management.",
        contentImage: "/assets/capabilities/racking-inline.jpg",
        mainImage: "/assets/hero/racking-main.jpg",
        link: "/t3ck-trading/warehousing"
      },
      {
        id: "solar-illumination",
        number: "04",
        title: "SOLAR & LIGHTING",
        subtitle: "Sustainable Energy Infrastructure",
        description: "High-efficiency commercial solar lighting and emergency illumination systems designed for continuous, reliable operational visibility in remote or industrial sites.",
        contentImage: "/assets/capabilities/solar-inline.jpg",
        mainImage: "/assets/hero/solar-main.jpg",
        link: "/t3ck-trading/illumination"
      }
    ]
  },

  // --- 4. FIELD OPERATIONS (ACTIVITIES GRID) ---
  {
    type: "fieldOperations",
    data: {
      sectionTitle: "PROJECTS",
      mainTitle: "SITE INSTALLATIONS",
      activities: [
        {
          id: "proj-01",
          dateRange: "Q3 2024 - Ongoing",
          title: "LGU MUNICIPAL LIGHTING",
          description: "Full-scale solar lighting installation for municipal roadways.",
          image: "/assets/projects/municipal-light.jpg"
        },
        {
          id: "proj-02",
          dateRange: "08/15/24 - 08/20/24",
          title: "ENTERPRISE WAREHOUSE FIT-OUT",
          description: "High-density pallet racking deployment for regional hub.",
          image: "/assets/projects/warehouse-racking.jpg"
        },
        {
          id: "proj-03",
          dateRange: "10/05/24",
          title: "EVENT RIGGING DEPLOYMENT",
          description: "Aluminum truss and staging setup for international expo.",
          image: "/assets/projects/stage-setup.jpg"
        }
      ]
    }
  },

  // --- 5. CONTACT SECTION ---
  {
    type: "contact",
    data: {
      sectionTitle: "GET STARTED",
      mainTitle: "REQUEST A QUOTE",
      description: "Partner with us for scalable infrastructure and enterprise-grade structural solutions tailored for LGUs and multinational corporations.",
      ctaText: "CONTACT T3CK TRADING",
      backgroundImage: "/assets/contact/trading-warehouse.jpg"
    }
  }
];