export const tcaConcepts = [
  // --- 1. HERO SECTION ---
  {
    type: "hero",
    data: {
      heroImage: "/assets/heroes/tca-concept-themepark.jpg",
      heroTitle: "ENGINEERING WORLD-CLASS AMUSEMENT DESTINATIONS",
      ctaText: "DISCOVER PROJECTS",
      href: "/tca-concept/portfolio"
    }
  },

  // --- 2. PRODUCT SPOTLIGHT (ROLLER COASTER ENGINEERING) ---
  {
    type: "productSpotlight",
    data: {
      id: "hyper-launch-coaster",
      category: "PREMIUM AMUSEMENT SYSTEMS",
      title: "PEAK VELOCITY ENGINEERING",
      description: "Our Hyper-Launch Coaster systems represent the pinnacle of amusement engineering, combining high-G maneuvers with proprietary launch technologies to create flagship anchor attractions for global resorts.",
      mainProductImage: "/assets/products/coaster-track-main.png",
      ctaText: "VIEW ENGINEERING SPECS",
      ctaLink: "/products/coaster-systems",
      mountingOptions: {
        sectionTitle: "System Features",
        options: [
          { id: "01", label: "LINEAR INDUCTION", caption: "Magnetic launch technology.", featureImage: "/assets/products/launch-motor.jpg" },
          { id: "02", label: "DYNAMIC BRAKING", caption: "Triple-redundant safety failsafes.", featureImage: "/assets/products/brake-fin.jpg" },
          { id: "03", label: "SUSPENDED CHASSIS", caption: "Low-vibration wheel assemblies.", featureImage: "/assets/products/coaster-wheel.jpg" },
          { id: "04", label: "REINFORCED PYLONS", caption: "High-stress structural support.", featureImage: "/assets/products/coaster-support.jpg" }
        ]
      }
    }
  },

  // --- 3. CAPABILITIES (AMUSEMENT & ENTERTAINMENT) ---
  {
    type: "capabilities",
    data: [
      {
        id: "family-attractions",
        number: "01",
        title: "FAMILY ATTRACTIONS",
        subtitle: "Inclusive Amusement Systems",
        description: "Inclusive, high-capacity amusement systems engineered to provide safe, engaging, and shared entertainment experiences for guests of all ages.",
        contentImage: "/assets/capabilities/family-ride-inline.jpg",
        mainImage: "/assets/hero/family-ride-main.jpg",
        link: "/tca-concept/family"
      },
      {
        id: "extreme-thrill",
        number: "02",
        title: "EXTREME THRILLS",
        subtitle: "High-Intensity Adrenaline",
        description: "High-intensity, adrenaline-focused attractions built with cutting-edge engineering to deliver premium entertainment for thrill-seeking audiences.",
        contentImage: "/assets/capabilities/extreme-ride-inline.jpg",
        mainImage: "/assets/hero/extreme-ride-main.jpg",
        link: "/tca-concept/extreme"
      },
      {
        id: "coaster-systems",
        number: "03",
        title: "COASTER SYSTEMS",
        subtitle: "Flagship Resort Anchors",
        description: "Large-scale, custom-engineered roller coasters that serve as flagship anchor attractions for major theme parks and entertainment hubs.",
        contentImage: "/assets/capabilities/coaster-inline.jpg",
        mainImage: "/assets/hero/coaster-main.jpg",
        link: "/tca-concept/coasters"
      },
      {
        id: "amusement-rentals",
        number: "04",
        title: "RENTALS & LOGISTICS",
        subtitle: "Flexible Event Deployment",
        description: "Seamless booking and leasing solutions for amusement rentals, ensuring reliable attraction deployment and logistics for specialized events.",
        contentImage: "/assets/capabilities/rental-inline.jpg",
        mainImage: "/assets/hero/rental-main.jpg",
        link: "/tca-concept/reservation"
      }
    ]
  },

  // --- 4. FIELD OPERATIONS (PORTFOLIO GRID) ---
  {
    type: "fieldOperations",
    data: {
      sectionTitle: "PORTFOLIO",
      mainTitle: "RECENT DEVELOPMENTS",
      activities: [
        {
          id: "dev-01",
          dateRange: "Completed Q1 2025",
          title: "AZURE RESORT THEME PARK",
          description: "Full-scale installation of family and extreme thrill zones.",
          image: "/assets/portfolio/azure-resort.jpg"
        },
        {
          id: "dev-02",
          dateRange: "01/10/24 - 11/20/24",
          title: "METRO CARNIVAL DEPLOYMENT",
          description: "Logistics and management for 15+ mobile amusement units.",
          image: "/assets/portfolio/metro-carnival.jpg"
        },
        {
          id: "dev-03",
          dateRange: "Annual Partnership",
          title: "SKYLINE PARK MAINTENANCE",
          description: "Routine safety engineering and structural audit services.",
          image: "/assets/portfolio/skyline-park.jpg"
        }
      ]
    }
  },

  // --- 5. CONTACT SECTION ---
  {
    type: "contact",
    data: {
      sectionTitle: "PARTNER WITH US",
      mainTitle: "REQUEST A QUOTE",
      description: "Partner with TCA Concept for world-class development, engineering, and management of specialized amusement infrastructure.",
      ctaText: "CONTACT TCA CONCEPT",
      backgroundImage: "/assets/contact/themepark-night.jpg"
    }
  }
];