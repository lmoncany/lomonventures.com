type IconName =
  | "arrowRight"
  | "bolt"
  | "check"
  | "external"
  | "globe"
  | "mail"
  | "menu"
  | "moon"
  | "phone"
  | "spark"
  | "sun"
  | "whatsapp";

interface IconProps {
  name: IconName;
  className?: string;
}

const paths: Record<IconName, string[]> = {
  arrowRight: ["M5 12h14", "m13 6 6 6-6 6"],
  bolt: ["M13 2 4 14h7l-1 8 10-13h-7l1-7Z"],
  check: ["m5 12 4 4L19 6"],
  external: ["M7 7h10v10", "M7 17 17 7"],
  globe: [
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
    "M3.6 9h16.8",
    "M3.6 15h16.8",
    "M12 3a14 14 0 0 1 0 18",
    "M12 3a14 14 0 0 0 0 18",
  ],
  mail: ["M4 6h16v12H4z", "m4 7 8 6 8-6"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  moon: ["M20 14.5A7.5 7.5 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"],
  phone: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9.71a16 16 0 0 0 6.29 6.29l1.25-1.25a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z"],
  spark: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z", "M12 2v2", "M12 20v2", "M4.93 4.93l1.41 1.41", "M17.66 17.66l1.41 1.41", "M2 12h2", "M20 12h2", "M4.93 19.07l1.41-1.41", "M17.66 6.34l1.41-1.41"],
  whatsapp: [
    "M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L4 20l.9-3.7a8.5 8.5 0 1 1 15.6-4.5Z",
    "M8.9 7.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.3 1.4 1.8.7.6 1.3.9 1.9 1.1.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .5-.3 1.4-.9 1.7-.5.3-1.2.4-2.1.1-1.8-.5-3.3-1.5-4.6-2.8-1.2-1.2-2.2-2.6-2.7-4.1-.3-.8-.1-1.5.3-2Z",
  ],
};

export default function Icon({ name, className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {paths[name].map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  );
}
