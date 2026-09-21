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
import FullScreen from "./Commpnent/FullScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [pro, setpro] = useState(false);
  const [res, setres] = useState(false);
  const [ex, setex] = useState(false);
  const [s, sets] = useState(false);
  const [c, setc] = useState(false);

  // Splash Screen
  if (showSplash) {
    return (
      <>
        <FullScreen />

        <SplashScreen
          onClick={() => {
            setShowSplash(false);
          }}
        />
      </>
    );
  }

  return (
    <>
      {/* Fullscreen */}
      <FullScreen />

      {/* Cursor Grid */}
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

      {/* Main Desktop */}
      <div className="relative min-h-screen w-full">

        {/* Navbar */}
        <Navbar
          onAboutClick={() => setAboutOpen(true)}
        />

        {/* Hero */}
        <Hero />

        {/* =====================================
            BOTTOM DESKTOP AREA
        ===================================== */}
        <div
          className="
            absolute
            left-0
            right-0
            bottom-0
            w-full
            px-5
            pb-4
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
              gap-4
              w-full
            "
          >

            {/* LEFT WINDOWS */}
            <div
              className="
                flex
                items-end
                gap-3
                min-w-0
                max-w-[42%]
              "
            >
              <div className="flex-shrink-0">
                <About
                  open={aboutOpen}
                  onClose={() => setAboutOpen(false)}
                />
              </div>

              <div className="flex-shrink-0">
                <Footer
                  open={pro}
                  onClose={() => setpro(false)}
                />
              </div>

              <div className="flex-shrink-0">
                <Resume
                  open={res}
                  onClose={() => setres(false)}
                />
              </div>
            </div>

            {/* =================================
                SPACE / MAC DOCK
            ================================= */}
            <div
              className="
                flex-shrink-0
                flex
                items-end
                justify-center
              "
            >
              <Space />
            </div>

            {/* RIGHT WINDOWS */}
            <div
              className="
                flex
                items-end
                justify-end
                gap-3
                min-w-0
                max-w-[42%]
              "
            >
              <div className="flex-shrink-0">
                <Experience
                  open={ex}
                  onClose={() => setex(false)}
                />
              </div>

              <div className="flex-shrink-0">
                <Skill
                  open={s}
                  onClose={() => sets(false)}
                />
              </div>

              <div className="flex-shrink-0">
                <Contact
                  open={c}
                  onClose={() => setc(false)}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;