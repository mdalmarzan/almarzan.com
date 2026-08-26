import React, { useState } from "react";
import About from "./Commpnent/About";
import Footer from "./Commpnent/Footer";
import Hero from "./Commpnent/Hero";
import Navbar from "./Navber/Navber";
import Resume from "./Commpnent/Resume";
import Space from "./Commpnent/Space";
import Experience from "./Commpnent/Experience";
import Skill from "./Commpnent/Skill";
import Contact from "./Commpnent/Contact";
import CursorGrid from "./CursorGrid";
import SplashScreen from "./Commpnent/MainPage";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [pro, setpro] = useState(false);
  const [res, setres] = useState(false);
  const [ex, setex] = useState(false);
  const [s, sets] = useState(false);
  const [c, setc] = useState(false);

  // Show Splash Screen first
  if (showSplash) {
    return <SplashScreen onClick={() => setShowSplash(false)} />;
  }

  // After click → normal app (your original content + MainPage if you want)
  return (
    <>
      {/* Cursor Grid - full screen, doesn't affect layout */}
      <CursorGrid
        cellSize={70}
        color="#D946EF"
        radius={140}
        falloff="smooth"
        holdTime={400}
        fadeDuration={800}
        lineWidth={1.2}
        maxOpacity={1}
        fillOpacity={0}
        gridOpacity={0}
        cellRadius={0}
        clickPulse
        pulseSpeed={600}
      />

      {/* Actual page content */}
      <div className="relative min-h-screen w-full">
        <Navbar onAboutClick={() => setAboutOpen(true)} />

        <Hero />

        {/* You can put MainPage here if you want the fancy text effects */}
        {/* <MainPage /> */}

        <div className="flex mt-3 ml-10 gap-3 pb-4 justify-between">
          <div className="flex mt-3 gap-3 pb-4">
            <About open={aboutOpen} onClose={() => setAboutOpen(false)} />
            <Footer open={pro} onClose={() => setpro(false)} />
            <Resume open={res} onClose={() => setres(false)} />
          </div>

          <Space />

          <div className="flex mt-3 mr-7 gap-3 pb-4">
            <Experience open={ex} onClose={() => setex(false)} />
            <Skill open={s} onClose={() => sets(false)} />
            <Contact open={c} onClose={() => setc(false)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;