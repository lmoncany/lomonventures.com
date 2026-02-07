/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "linkedin-blue": "#0A66C2",
        "orange-accent": "#FF6B35",
        "light-gray": "#F8F9FA",
        "dark-gray": "#2D3748",
      },
      fontFamily: {
        "sf-pro": ['"SF Pro Text"', "Helvetica", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
