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
  { label: "Products Launched", value: 5, suffix: "" },
  { label: "Agency Experience", value: 6, suffix: "yr" },
  { label: "Countries", value: 3, suffix: "" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "La Cote Vintage",
    category: "Automotive",
    description: "Classic car valuations for collectors and enthusiasts",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop&q=80",
    url: "https://lacotevintage.com",
  },
  {
    id: "2",
    title: "est8",
    category: "PropTech",
    description: "AI-powered CRM for real estate agents",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80",
    url: "https://est8.io",
  },
  {
    id: "3",
    title: "ListingVid",
    category: "PropTech",
    description: "Turn property listings into cinematic videos",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=500&fit=crop&q=80",
    url: "https://listingvid.com",
  },
  {
    id: "4",
    title: "AIanswer.to",
    category: "AI / Content",
    description: "Make your content interactive and AI-discoverable",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80",
    url: "https://aianswer.to",
  },
  {
    id: "5",
    title: "Mypetlife",
    category: "PetTech",
    description: "Pet health records and vet visit tracking",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=500&fit=crop&q=80",
    url: "https://mypetlife.app",
  },
];
