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

  // Splash Screen
  if (showSplash) {
    return (
      <SplashScreen
        onClick={() => setShowSplash(false)}
      />
    );
  }

  return (
    <>
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
                overflow-x-auto
              "
            >
              <About
                open={aboutOpen}
                onClose={() => setAboutOpen(false)}
              />

              <Footer
                open={pro}
                onClose={() => setpro(false)}
              />

              <Resume
                open={res}
                onClose={() => setres(false)}
              />
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
                overflow-x-auto
              "
            >
              <Experience
                open={ex}
                onClose={() => setex(false)}
              />

              <Skill
                open={s}
                onClose={() => sets(false)}
              />

              <Contact
                open={c}
                onClose={() => setc(false)}
              />
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;