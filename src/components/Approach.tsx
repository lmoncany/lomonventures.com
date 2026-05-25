const steps = [
  {
    title: "Scope",
    description: "We define the user, the painful workflow, and the smallest product worth shipping.",
    marker: "Output: feature list, success metric, and build boundary.",
  },
  {
    title: "Build",
    description: "I design and ship the first functional version with the core workflow working end to end.",
    marker: "Output: usable MVP, deployed and ready for feedback.",
  },
  {
    title: "Validate",
    description: "We use the first users to decide what to keep, cut, improve, or turn into a bigger product.",
    marker: "Output: next build plan based on real usage.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mono mb-3 text-xs uppercase text-[#b86cff]">Process</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">How we ship in weeks.</h2>
          <p className="text-white/50">One founder-led build, one timeline, one workflow sharp enough to validate with real users.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-[#b86cff]">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#b86cff] text-lg font-black text-black">{index + 1}</div>
              <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/50">{step.description}</p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="mono mb-2 text-[10px] uppercase text-[#d9b4ff]">Deliverable</p>
                <p className="text-xs leading-relaxed text-white/50">{step.marker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
