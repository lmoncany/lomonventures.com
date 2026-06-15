import { useEffect } from "react";
import PocHomepage from "./components/PocHomepage";

function App() {
  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = "Lomon Ventures | POC in 30 days";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "A €5,000, 30-day working prototype that tests your product idea with real users.",
      );
  }, []);

  return <PocHomepage />;
}

export default App;
