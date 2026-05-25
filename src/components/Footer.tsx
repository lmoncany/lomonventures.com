interface FooterProps {
  name: string;
  location: string;
  email: string;
}

export default function Footer({ name, location, email }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-3 text-sm text-white/45 md:flex-row md:items-center">
          <p>{name} · {location}</p>
          <a href={`mailto:${email}`} className="hover:text-[#d9b4ff]">{email}</a>
        </div>
      </div>
    </footer>
  );
}
