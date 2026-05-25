import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import ProjectsGrid from "./components/ProjectsGrid";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SecondaryPage from "./components/SecondaryPage";
import Founder from "./components/Founder";
import { profile } from "./data";
import { content, getPageFromPath, getLocaleFromPath } from "./i18n";

function App() {
  const locale = getLocaleFromPath(window.location.pathname);
  const page = getPageFromPath(window.location.pathname);
  const copy = content[locale];

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("lomon-theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("lomon-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.meta.description);
  }, [copy.meta.description, copy.meta.title, locale]);

  return (
    <div className="theme-root" data-theme={theme}>
      <Navigation
        name={profile.name}
        email={profile.email}
        locale={locale}
        page={page}
        copy={copy.nav}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      {page === "home" ? (
        <>
          <Hero copy={copy.hero} />
          <Stats stats={copy.stats} />
          <ProjectsGrid projects={copy.projects.items} copy={copy.projects} />
          <About copy={copy.about} />
          <Founder copy={copy.founder} image={profile.image} />
          <Approach copy={copy.approach} />
          <Contact email={profile.email} copy={copy.contact} />
        </>
      ) : (
        <SecondaryPage page={copy.secondary[page]} />
      )}
      <Footer
        name={profile.name}
        location={profile.location}
        email={profile.email}
        locale={locale}
        page={page}
        copy={copy}
      />
    </div>
  );
}

export default App;
