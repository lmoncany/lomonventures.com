import type { Stat } from "../types";

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 text-center md:grid-cols-4 md:p-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/40 px-4 py-6">
              <div className="mb-1 text-3xl font-bold text-[#b86cff] md:text-4xl">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.04em] text-white/50 md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
