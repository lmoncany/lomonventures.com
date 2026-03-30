import type { Profile, Project, Stat, JobOpening } from "./types";

export const profile: Profile = {
  name: "LOMON VENTURES",
  location: "Europe",
  description: "Building digital products for niche markets",
  about:
    "We build and scale B2B software products for underserved verticals. Our portfolio spans PropTech, automotive, and lead generation — each product designed to dominate its niche. Remote-first, profitable, and growing.",
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

export const jobs: JobOpening[] = [
  {
    id: "1",
    title: "B2B SaaS Sales",
    type: "Full-time",
    location: "Remote (EU)",
    description:
      "Drive revenue growth across our PropTech products. You'll own the full sales cycle — from outreach to close — for ListingVid and EST8. Experience selling to real estate professionals preferred.",
  },
  {
    id: "2",
    title: "AI-First Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "Build AI-powered features across our product portfolio. We work with LLMs, computer vision, and generative AI. You should be comfortable shipping fast and iterating based on user feedback.",
  },
];
