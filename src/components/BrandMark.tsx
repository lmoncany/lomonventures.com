interface BrandMarkProps {
  className?: string;
}

export default function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lomon-gradient-a" x1="7" y1="5" x2="36" y2="43" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB347" />
          <stop offset="1" stopColor="#FF5A5F" />
        </linearGradient>
        <linearGradient id="lomon-gradient-b" x1="24" y1="26" x2="44" y2="43" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF4D68" />
        </linearGradient>
      </defs>
      <path d="M19.4 5.3c1.2-2 4.1-2 5.3.1l4.5 7.7c.6 1 .6 2.2 0 3.2L17.8 36.1c-1.2 2.1-4.2 2.1-5.4 0l-4.5-7.8c-.6-1-.6-2.2 0-3.2L19.4 5.3Z" fill="url(#lomon-gradient-a)" />
      <path d="M26.5 28.2c.6-1 1.6-1.6 2.8-1.6h8.9c1.1 0 2.1.6 2.7 1.6l4.5 7.7c1.2 2.1-.3 4.7-2.7 4.7H22.3c-2.4 0-3.9-2.6-2.7-4.7l4.5-7.7c.5-1 1.4-1.6 2.4-1.6Z" fill="url(#lomon-gradient-b)" />
    </svg>
  );
}
