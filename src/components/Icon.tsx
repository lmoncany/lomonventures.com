type IconName =
  | "arrowRight"
  | "check"
  | "external"
  | "globe"
  | "mail"
  | "menu"
  | "moon"
  | "spark"
  | "sun";

interface IconProps {
  name: IconName;
  className?: string;
}

const paths: Record<IconName, string[]> = {
  arrowRight: ["M5 12h14", "m13 6 6 6-6 6"],
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
  spark: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z", "M12 2v2", "M12 20v2", "M4.93 4.93l1.41 1.41", "M17.66 17.66l1.41 1.41", "M2 12h2", "M20 12h2", "M4.93 19.07l1.41-1.41", "M17.66 6.34l1.41-1.41"],
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
