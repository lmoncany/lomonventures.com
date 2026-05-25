interface NavigationProps {
  name: string;
  email: string;
}

export default function Navigation({ name, email }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="section-shell py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-base font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#b86cff] text-black font-black">L</span>
          {name}
        </a>
        <nav className="hidden md:flex items-center gap-8 rounded-full border border-white/10 bg-[#101014]/90 px-8 py-4 text-sm text-white/60 shadow-[0_0_40px_rgba(184,108,255,0.12)] backdrop-blur">
          <a href="#services" className="hover:text-[#d9b4ff]">SERVICES</a>
          <a href="#portfolio" className="hover:text-[#d9b4ff]">PORTFOLIO</a>
          <a href="#approach" className="hover:text-[#d9b4ff]">PROCESS</a>
          <a href="#fit" className="hover:text-[#d9b4ff]">FIT</a>
        </nav>
        <a href={`mailto:${email}`} className="hidden sm:inline-flex rounded-full bg-[#ead7ff] px-6 py-3 text-sm font-bold text-black shadow-[0_0_32px_rgba(184,108,255,0.35)] hover:bg-white transition-colors">
          Start a Build
        </a>
        <button className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white" aria-label="Open menu">
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>
      </div>
    </header>
  );
}
