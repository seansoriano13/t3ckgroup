export const tgEnterprise = [
  // --- 1. HERO SECTION ---
  {
    type: "hero",
    data: {
      heroImage: "/assets/heroes/tg-enterprise-retail.jpg",
      heroTitle: "PREMIUM DISTRIBUTION & RETAIL SOLUTIONS",
      ctaText: "BROWSE CATALOG",
      href: "/tg-enterprise/shop"
    }
  },

  // --- 2. PRODUCT SPOTLIGHT (SURPLUS LIQUIDATION) ---
  {
    type: "productSpotlight",
    data: {
      id: "premium-mall-pullout",
      category: "COMMERCIAL SURPLUS",
      title: "VALUE-DRIVEN RETAIL",
      description: "Direct access to high-quality, authentic mall pull-out inventory. Our liquidation services provide local dealers and consumers with premium brands at significant cost-efficiencies.",
      mainProductImage: "/assets/products/surplus-assorted-main.png",
      ctaText: "EXPLORE SURPLUS",
      ctaLink: "/tg-enterprise/surplus",
      mountingOptions: {
        sectionTitle: "Retail Categories",
        options: [
          { id: "01", label: "WHOLESALE APPAREL", caption: "Premium branded clothing.", featureImage: "/assets/products/apparel-preview.jpg" },
          { id: "02", label: "GADGETS & TECH", caption: "Consumer electronics & accessories.", featureImage: "/assets/products/gadget-preview.jpg" },
          { id: "03", label: "HOME ESSENTIALS", caption: "Domestic utility & decor.", featureImage: "/assets/products/home-preview.jpg" },
          { id: "04", label: "MOTORS & TOOLS", caption: "Maintenance & enhancement gear.", featureImage: "/assets/products/motor-preview.jpg" }
        ]
      }
    }
  },

  // --- 3. CAPABILITIES (RETAIL & LIFESTYLE) ---
  {
    type: "capabilities",
    data: [
      {
        id: "surplus-liquidation",
        number: "01",
        title: "SURPLUS & LIQUIDATION",
        subtitle: "Cost-Effective Inventory",
        description: "Access our extensive inventory of high-quality, overstock, and premium mall pull-out goods, providing cost-effective retail solutions without compromising on value.",
        contentImage: "/assets/capabilities/surplus-inline.jpg",
        mainImage: "/assets/hero/surplus-main.jpg",
        link: "/tg-enterprise/surplus"
      },
      {
        id: "active-outdoor",
        number: "02",
        title: "ACTIVE & OUTDOOR",
        subtitle: "Performance & Travel Gear",
        description: "Premium outdoor equipment, athletic gear, and travel accessories designed for durability and performance in high-demand environments.",
        contentImage: "/assets/capabilities/active-inline.jpg",
        mainImage: "/assets/hero/active-main.jpg",
        link: "/tg-enterprise/active"
      },
      {
        id: "home-living",
        number: "03",
        title: "HOME & LIVING",
        subtitle: "Domestic Essentials",
        description: "A curated selection of domestic essentials, furniture, and home improvement products tailored for modern residential living and facility outfitting.",
        contentImage: "/assets/capabilities/living-inline.jpg",
        mainImage: "/assets/hero/living-main.jpg",
        link: "/tg-enterprise/living"
      },
      {
        id: "automotive-motors",
        number: "04",
        title: "MOTORS & CARE",
        subtitle: "Vehicle Enhancement",
        description: "Comprehensive automotive supplies, specialized tools, and vehicle accessories for maintenance, upgrades, and reliable transportation support.",
        contentImage: "/assets/capabilities/motors-inline.jpg",
        mainImage: "/assets/hero/motors-main.jpg",
        link: "/tg-enterprise/motors"
      }
    ]
  },

  // --- 4. FIELD OPERATIONS (DISTRIBUTION LOGS) ---
  {
    type: "fieldOperations",
    data: {
      sectionTitle: "DISTRIBUTION",
      mainTitle: "RETAIL OPERATIONS",
      activities: [
        {
          id: "dist-01",
          dateRange: "Weekly Update",
          title: "REGIONAL DEALER SUPPLY",
          description: "Logistics dispatch for nationwide retail partners.",
          image: "/assets/distribution/dealer-supply.jpg"
        },
        {
          id: "dist-02",
          dateRange: "Monthly Highlight",
          title: "SURPLUS CLEARANCE EXPO",
          description: "High-volume liquidation event for local consumers.",
          image: "/assets/distribution/surplus-expo.jpg"
        },
        {
          id: "dist-03",
          dateRange: "Operational Status",
          title: "WAREHOUSE HUB MANAGEMENT",
          description: "Real-time inventory tracking for lifestyle goods.",
          image: "/assets/distribution/warehouse-ops.jpg"
        }
      ]
    }
  },

  // --- 5. CONTACT SECTION ---
  {
    type: "contact",
    data: {
      sectionTitle: "BECOME A PARTNER",
      mainTitle: "CONTACT SALES",
      description: "Join our dedicated retail and distribution network to supply your local market with our comprehensive catalog of essential goods.",
      ctaText: "CONTACT TG ENTERPRISE",
      backgroundImage: "/assets/contact/retail-distribution.jpg"
    }
  }
];