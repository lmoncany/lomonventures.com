import type { Profile, Project, Stat, JobOpening } from "./types";

export const profile: Profile = {
  name: "Lomon Ventures",
  location: "Europe",
  description: "Software products for founders who know the market, not the code",
  about:
    "Lomon Ventures is led by Loic Moncany, a founder-developer with 15+ years in web development and 6 years running a digital agency in Malta.",
  email: "lomonventures@gmail.com",
  image: "https://github.com/lmoncany.png?size=1200",
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
    description: "AI-powered video generation for real estate listings.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=800&fit=crop&q=80",
    url: "https://listingvid.xyz",
  },
  {
    id: "2",
    title: "EST8",
    category: "PropTech",
    description: "Modern CRM built for real estate agents.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80",
    url: "https://est8.app",
  },
  {
    id: "3",
    title: "OhMyLead",
    category: "Lead Generation",
    description: "Find leads for your business, no subscription, just oneshot.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    url: "https://ohmylead.xyz",
  },
  {
    id: "4",
    title: "La Côte Vintage",
    category: "Automotive",
    description: "Classic car valuations for collectors and enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&q=80",
    url: "https://lacotevintage.com",
  },
  {
    id: "5",
    title: "Perfect Skin",
    category: "E-commerce",
    description: "French cosmetics, skincare advice, and products.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop&q=80",
    url: "https://perfect-skin.fr",
  },
  {
    id: "6",
    title: "AI Answer",
    category: "AI / Content",
    description: "WordPress plugin for AI citation optimization.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop&q=80",
    url: "https://aianswer.to",
  },
];

export const jobs: JobOpening[] = [
  {
    id: "1",
    title: "B2B SaaS Sales",
    type: "Full-time",
    location: "Remote (EU)",
    description:
      "Drive revenue growth across the product portfolio, from outreach to close.",
  },
  {
    id: "2",
    title: "AI-First Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "Build AI-powered features across the product portfolio and ship fast.",
  },
];
