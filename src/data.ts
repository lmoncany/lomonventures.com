import type { Profile, Project, Stat } from "./types";

export const profile: Profile = {
  name: "LOMON VENTURES",
  location: "Italy",
  description: "Building digital products for niche markets",
  about:
    "A portfolio of software products built by Loic Moncany. Based in Italy. Previously: 6 years running a digital agency in Malta, 15+ years in web development.",
  email: "hello@lomonventures.com",
};

export const stats: Stat[] = [
  { label: "Years in Tech", value: 15, suffix: "+" },
  { label: "Products Launched", value: 6, suffix: "" },
  { label: "Agency Experience", value: 6, suffix: "yr" },
  { label: "Countries", value: 3, suffix: "" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "ListingVid",
    category: "PropTech",
    description: "AI-powered video generation for real estate listings",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=500&fit=crop&q=80",
    url: "https://listingvid.xyz",
  },
  {
    id: "2",
    title: "EST8",
    category: "PropTech",
    description: "Modern CRM built for real estate agents",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80",
    url: "https://est8.app",
  },
  {
    id: "3",
    title: "OhMyLead",
    category: "Lead Generation",
    description: "Find leads for your business — no subscription, just oneshot",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    url: "https://ohmylead.xyz",
  },
  {
    id: "4",
    title: "La Côte Vintage",
    category: "Automotive",
    description: "Classic car valuations for collectors and enthusiasts",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop&q=80",
    url: "https://lacotevintage.com",
  },
  {
    id: "5",
    title: "Perfect Skin",
    category: "E-commerce",
    description: "French cosmetics & skincare advice and products",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop&q=80",
    url: "https://perfect-skin.fr",
  },
  {
    id: "6",
    title: "AI Answer",
    category: "AI / Content",
    description: "WordPress plugin for AI citation optimization",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80",
    url: "https://aianswer.to",
  },
];
