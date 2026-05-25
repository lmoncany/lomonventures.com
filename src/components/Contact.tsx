interface ContactProps {
  email: string;
}

export default function Contact({ email }: ContactProps) {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mono mb-3 text-xs uppercase text-[#b86cff]">Start here</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">Two ways to work with Lomon.</h2>
          <p className="mx-auto max-w-2xl text-white/50">
            Start small if the product is still fuzzy. Move into a focused build when the workflow is clear.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-8">
            <p className="mono mb-4 text-xs uppercase text-[#d9b4ff]">Start here</p>
            <h3 className="mb-3 text-2xl font-bold text-white">Product Scope Sprint</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              A short strategy sprint to define the product, cut unnecessary features, and decide what should be built first.
            </p>
            <ul className="mb-6 space-y-3 text-sm text-white/60">
              <li>Clear MVP scope</li>
              <li>User flow and feature priority</li>
              <li>Technical plan for the first build</li>
            </ul>
            <a href={`mailto:${email}?subject=Product%20Scope%20Sprint`} className="inline-flex rounded-full border border-white/15 px-5 py-3 font-bold text-white hover:border-[#b86cff] transition-colors">
              Scope the product
            </a>
          </div>

          <div className="rounded-[2rem] border border-[#b86cff] bg-[#b86cff]/10 p-7 shadow-[0_0_60px_rgba(184,108,255,0.12)] md:p-8">
            <p className="mono mb-4 text-xs uppercase text-[#d9b4ff]">Focused build</p>
            <h3 className="mb-3 text-2xl font-bold text-white">Niche MVP Build</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/65">
              A founder-led build for one product, one user type, and one valuable workflow that can be validated quickly.
            </p>
            <ul className="mb-6 space-y-3 text-sm text-white/70">
              <li>UX, product, and development</li>
              <li>Deployment and handover</li>
              <li>Next-step roadmap from real feedback</li>
            </ul>
            <a href={`mailto:${email}?subject=Niche%20MVP%20Build`} className="inline-flex rounded-full bg-[#ead7ff] px-5 py-3 font-bold text-black hover:bg-white transition-colors">
              Start a build
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
