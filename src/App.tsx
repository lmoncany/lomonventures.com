import ProfileSection from "./components/ProfileSection";
import ProjectsGrid from "./components/ProjectsGrid";
import { profile, projects } from "./data";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Sunrise Background */}
      <div className="sunrise-bg"></div>

      {/* Grain Overlay */}
      <div className="grain-overlay"></div>

      {/* Content Layer */}
      <div className="content-layer relative z-10 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Profile Section */}
            <div className="lg:col-span-4">
              <ProfileSection profile={profile} />
            </div>

            {/* Right Column - Projects Grid */}
            <div className="lg:col-span-8">
              <ProjectsGrid projects={projects} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
