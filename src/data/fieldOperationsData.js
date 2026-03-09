import BulacanImage from "/field-operations/bulacan-olympics.png";
import Cadrrmo from "/field-operations/caddrrmo.png";
import PhilMarine from "/field-operations/phil-marine-poster.png";
import PhilMarineBanner from "/field-operations/phil-marine-banner.png";

export const fieldOperations = [
  {
    id: "philmarine-expo-2024",
    title: "PHILMARINE EXPO 2026",
    subtitle: "Showcasing innovations in marine security and naval technology",
    description: {
      poster: "Rapid deployment of amphibious rescue units.",
      details:
        "PHILMARINE EXPO 2024 is a premier maritime and defense exhibition that brings together industry leaders, government agencies, and technology providers to showcase the latest innovations in marine security, naval technology, and maritime safety solutions.",
    },
    image: {
      poster: PhilMarine,
      banner: PhilMarineBanner,
    },
    startDate: "2026-06-19T07:00:00Z",
    endDate: "2026-06-22T17:00:00Z",
    location: "SMX Convention Center Manila, Philippines",
    googleFormsLink: "",
    highlights: [
      "3-DAYS INT'L CONFERENCE",
      "3-DAYS SEMINAR",
      "3-DAYS B2B OPPORTUNITIES",
      "NETWORKING NIGHT",
    ],
  },
  {
    id: "bulacan-rescue-lympics-2022",
    title: "BULACAN RESCUE LYMICS 2022",
    subtitle: "High-speed drills and competitions for rescue teams",
    description: {
      poster: "High-speed rescue drills and competitions.",
      details:
        "BULACAN RESCUE LYMICS 2022 is a regional event focused on testing the speed, efficiency, and coordination of amphibious rescue teams through simulated emergency scenarios, promoting excellence in disaster response and preparedness.",
    },
    image: {
      poster: BulacanImage,
      banner: BulacanImage,
    },
    startDate: "2022-11-07T13:00:00Z",
    endDate: "2022-11-11T15:00:00Z",
    location: "Bocaue, Bulacan, Philippines",
    googleFormsLink: "",
  },
  {
    id: "caddrrmo-regional-convention-2024",
    title: "6TH CADDRRMO REGIONAL CONVENTION 2024",
    subtitle: "Strategies and coordination for regional disaster management",
    description: {
      poster: "Coordination and strategy for disaster risk management.",
      details:
        "The 6TH CADDRRMO REGIONAL CONVENTION 2024 brings together local government units, emergency responders, and disaster management professionals to share knowledge, best practices, and innovative solutions for enhancing regional disaster preparedness and response.",
    },
    image: {
      poster: Cadrrmo,
      banner: Cadrrmo,
    },
    startDate: "2024-05-28T13:00:00Z",
    endDate: "2024-05-31T13:00:00Z",
    location: "Caddrrmo Convention Center, Bulacan, Philippines",
    googleFormsLink: "",
  },
];
