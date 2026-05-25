import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import ProjectsGrid from "./components/ProjectsGrid";
import Approach from "./components/Approach";
import Founder from "./components/Founder";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { profile, projects, stats, jobs } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f7f4ff]">
      <Navigation name={profile.name} email={profile.email} />
      <Hero />
      <Stats stats={stats} />
      <ProjectsGrid projects={projects} />
      <About about={profile.about} />
      <Approach />
      <Founder />
      <Careers jobs={jobs} email={profile.email} />
      <Contact email={profile.email} />
      <Footer
        name={profile.name}
        location={profile.location}
        email={profile.email}
      />
    </div>
  );
}

export default App;
