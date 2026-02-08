import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stats from "./components/Stats";
import ProjectsGrid from "./components/ProjectsGrid";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { profile, projects, stats } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation name={profile.name} email={profile.email} />
      <Hero />
      <Marquee />
      <About about={profile.about} />
      <Stats stats={stats} />
      <ProjectsGrid projects={projects} />
      <Approach />
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
