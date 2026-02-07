import type { Profile, Project } from "./types";

export const profile: Profile = {
  name: "LOMON VENTURES",
  location: "Italy",
  description: "Building digital products for niche markets",
  about:
    "Lomon Ventures is a portfolio of software products built by Loïc Moncany. Based in Italy. Previously: 6 years running a digital agency in Malta, 15+ years in web development.",
  email: "hello@lomonventures.com",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "La Cote Vintage",
    description: "Classic car valuations for collectors and enthusiasts",
    icon: "🚗",
    url: "https://lacotevintage.com",
  },
  {
    id: "2",
    title: "est8",
    description: "AI-powered CRM for real estate agents",
    icon: "🏠",
    url: "https://est8.io",
  },
  {
    id: "3",
    title: "ListingVid",
    description: "Turn property listings into cinematic videos",
    icon: "🎬",
    url: "https://listingvid.com",
  },
  {
    id: "4",
    title: "AIanswer.to",
    description: "Make your content interactive and AI-discoverable",
    icon: "🤖",
    url: "https://aianswer.to",
  },
  {
    id: "5",
    title: "Mypetlife",
    description: "Pet health records and vet visit tracking",
    icon: "🐾",
    url: "https://mypetlife.app",
  },
];
