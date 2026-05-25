interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="fit" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mono mb-3 text-xs uppercase text-[#b86cff]">Fit</p>
          <h2 className="text-4xl font-bold text-white md:text-6xl">For operators with a real edge.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#b86cff]/40 bg-[#b86cff]/10 p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-white">This is for you if</h3>
            <ul className="space-y-4 text-sm leading-relaxed text-white/65">
              <li>You know a specific market and can explain the workflow pain clearly.</li>
              <li>You want a small product shipped quickly, then improved from user feedback.</li>
              <li>You value product judgment as much as development speed.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-white">This is not for you if</h3>
            <ul className="space-y-4 text-sm leading-relaxed text-white/45">
              <li>You need a large agency, a full-time developer, or a six-month roadmap.</li>
              <li>You want every possible feature included in the first version.</li>
              <li>You have an idea, but no market access, customer insight, or urgency.</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 text-center text-sm leading-relaxed text-white/50">
          {about}
        </div>
      </div>
    </section>
  );
}
