import { company, DEFAULT_ICON } from "./shared.js";

export const tgEntNav = {
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
  }
