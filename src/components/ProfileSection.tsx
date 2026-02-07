import { motion } from "framer-motion";
import type { Profile } from "../types";

interface ProfileSectionProps {
  profile: Profile;
}

export default function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 sticky top-8"
    >
      <div className="flex flex-col items-center text-center">
        {/* Text Logo */}
        <h1
          className="text-3xl font-bold tracking-tight text-dark-gray mb-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {profile.name}
        </h1>

        {/* Tagline */}
        <p className="text-gray-500 text-sm mb-6">{profile.description}</p>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-6">
          <svg
            className="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">{profile.location}</span>
        </div>

        {/* About */}
        <p className="text-gray-700 text-sm leading-relaxed mb-8">
          {profile.about}
        </p>

        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className="w-full font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center hover:opacity-90"
          style={{ backgroundColor: "#FF6B35", color: "white" }}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {profile.email}
        </a>

        {/* Footer */}
        <p className="text-gray-400 text-xs mt-8">&copy; 2026 Lomon Ventures</p>
      </div>
    </motion.div>
  );
}
