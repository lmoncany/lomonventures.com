import type { Stat } from "../types";

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="panel grid grid-cols-2 gap-4 rounded-[2rem] p-4 text-center md:grid-cols-4 md:p-6">
          {stats.map((stat) => (
            <div key={stat.label} className="panel-solid rounded-3xl px-4 py-6">
              <div className="mb-1 text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.04em] text-muted md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
