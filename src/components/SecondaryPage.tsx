import type { SecondaryPageContent } from "../i18n";
import Icon from "./Icon";

interface SecondaryPageProps {
  page: SecondaryPageContent;
}

export default function SecondaryPage({ page }: SecondaryPageProps) {
  return (
    <main className="section-shell min-h-[70vh] pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <div className="panel-accent mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-accent-soft">
          <Icon name="spark" className="h-4 w-4" />
          {page.label}
        </div>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight text-main md:text-6xl">
          {page.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          {page.intro}
        </p>

        <div className="mt-10 grid gap-5">
          {page.sections.map((section) => (
            <article className="panel rounded-[2rem] p-7 md:p-8" key={section.title}>
              <h2 className="mb-3 text-2xl font-bold text-main">{section.title}</h2>
              <p className="text-sm leading-relaxed text-muted md:text-base">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
