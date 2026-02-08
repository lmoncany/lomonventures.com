import type { Profile } from "../types";

// ProfileSection is no longer used in the new layout.
// Kept for reference but the profile data is now rendered directly in App.tsx.
export default function ProfileSection({ profile: _profile }: { profile: Profile }) {
  return null;
}
