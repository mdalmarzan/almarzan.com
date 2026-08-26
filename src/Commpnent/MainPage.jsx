import { useState, useEffect } from "react";
import DepthText from "../Forpage/DepthText";
import TextPressure from "../Forpage/TextPressure";

const SplashScreen = ({ onClick }) => {
  const [now, setNow] = useState(new Date());
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const timeStr = `${hours}:${minutes}`;

  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      onClick={onClick}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#020204]
        text-white
        cursor-pointer
        select-none
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-600/10
            blur-[140px]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-fuchsia-600/10
            blur-[130px]
            animate-[floatGlow_10s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-600/10
            blur-[130px]
            animate-[floatGlow_12s_ease-in-out_infinite_reverse]
          "
        />
      </div>

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.1]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:60px_60px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]
        "
      />

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.35)_65%,rgba(0,0,0,0.85)_100%)]
        "
      />

      {/* =====================================================
          TOP LEFT — SYSTEM STATUS
      ===================================================== */}

      <div
        className="
          absolute
          left-6
          top-6
          z-20
          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-white/[0.035]
          px-4
          py-2
          backdrop-blur-xl
          animate-[fadeDown_1s_ease-out]
        "
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>

        <span className="text-[10px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
          System Online
        </span>
      </div>

      {/* =====================================================
          TOP RIGHT
      ===================================================== */}

      <div
        className="
          absolute
          right-6
          top-6
          z-20
          hidden
          sm:flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.035]
          px-4
          py-2
          backdrop-blur-xl
          animate-[fadeDown_1s_ease-out_0.15s_both]
        "
      >
        <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
          Portfolio / 2026
        </span>
      </div>

      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {[
          ["8%", "22%"],
          ["16%", "72%"],
          ["27%", "15%"],
          ["74%", "18%"],
          ["87%", "35%"],
          ["91%", "76%"],
          ["67%", "86%"],
          ["38%", "90%"],
          ["12%", "46%"],
          ["81%", "56%"],
          ["50%", "12%"],
          ["58%", "80%"],
        ].map(([left, top], index) => (
          <span
            key={index}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-white/50
              shadow-[0_0_12px_rgba(255,255,255,0.5)]
              animate-[particleFloat_7s_ease-in-out_infinite]
            "
            style={{
              left,
              top,
              animationDelay: `${index * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <main
        className="
          relative
          z-10
          flex
          w-full
          max-w-[1100px]
          flex-col
          items-center
          justify-center
          px-5
          text-center
        "
        style={{
          transform: `
            perspective(1200px)
            rotateX(${mouse.y * -1}deg)
            rotateY(${mouse.x}deg)
          `,
          transition: "transform 0.18s ease-out",
        }}
      >
        {/* ===================================================
            INTRO TEXT
        =================================================== */}

        <div
          className="
            mb-5
            flex
            w-full
            items-center
            justify-center
            gap-3
            animate-[fadeUp_1s_ease-out_0.1s_both]
          "
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500" />

          <span
            className="
              whitespace-nowrap
              text-[9px]
              font-semibold
              tracking-[0.4em]
              text-violet-300/80
              uppercase
              sm:text-[10px]
            "
          >
            Welcome to my world
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet-500" />
        </div>

        {/* ===================================================
            DIGITAL CLOCK
        =================================================== */}

        <div
          className="
            relative
            flex
            w-full
            justify-center
            animate-[clockReveal_1.2s_cubic-bezier(.16,1,.3,1)]
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-600/15
              blur-[100px]
            "
          />

          <div
            className="
              relative
              whitespace-nowrap
              text-center
              text-[clamp(4.5rem,16vw,11rem)]
              font-black
              leading-none
              tracking-[-0.08em]
              tabular-nums
              text-white
              [text-shadow:0_0_30px_rgba(255,255,255,0.08),0_0_80px_rgba(124,58,237,0.15)]
            "
          >
            {timeStr}
          </div>
        </div>

        {/* ===================================================
            DATE
        =================================================== */}

        <div
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-3
            animate-[fadeUp_1s_ease-out_0.35s_both]
          "
        >
          <span className="h-px w-5 bg-zinc-700" />

          <span
            className="
              whitespace-nowrap
              text-[10px]
              font-medium
              tracking-[0.4em]
              text-zinc-500
              uppercase
              sm:text-xs
            "
          >
            {dateStr}
          </span>

          <span className="h-px w-5 bg-zinc-700" />
        </div>

        {/* ===================================================
            MARZAN'S PORTFOLIO
        =================================================== */}

        <div
          className="
            mt-9
            flex
            w-full
            items-center
            justify-center
            animate-[titleReveal_1.2s_cubic-bezier(.16,1,.3,1)_0.5s_both]
          "
        >
          <DepthText
            text="Marzan’s Portfolio"
            layers={34}
            depth={2.4}
            faceColor="#ffffff"
            depthColor="#7c3aed"
            tilt={7.5}
            pointerTracking
            smoothing={0.14}
            perspective={900}
            autoOrbit
            orbitSpeed={0.35}
            fontSize="clamp(1.7rem, 5.5vw, 4rem)"
            fontWeight={900}
            shadow
          />
        </div>

        {/* ===================================================
            WELCOME TEXT
        =================================================== */}

        <div
          className="
            relative
            mt-7
            flex
            h-[85px]
            w-full
            max-w-[700px]
            items-center
            justify-center
            overflow-visible
            animate-[welcomeReveal_1.2s_cubic-bezier(.16,1,.3,1)_0.7s_both]
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-20
              w-72
              -translate-x-1/2
              -translate-y-1/2
              bg-violet-500/10
              blur-[60px]
            "
          />

          <div
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
            "
          >
           <TextPressure
  text="Welcome"
  flex={false}
  width={true}
  weight={true}
  italic={true}
  alpha={false}
  stroke={false}
  textColor="#ffffff"
  minFontSize={40}
/>
          </div>
        </div>

        {/* ===================================================
            DECORATIVE LINE
        =================================================== */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-3
            opacity-60
            animate-[fadeUp_1s_ease-out_1s_both]
          "
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />

          <span className="h-px w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </main>

      {/* =====================================================
          ENTER BUTTON
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          -translate-x-1/2
          animate-[fadeUp_1s_ease-out_1.2s_both]
        "
      >
        <div className="group flex flex-col items-center gap-3">
          <div
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/[0.04]
              backdrop-blur-xl
              transition-all
              duration-500
              group-hover:border-violet-400/50
              group-hover:bg-violet-500/10
              group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]
            "
          >
            <span className="absolute inset-0 rounded-full border border-violet-400/20 animate-ping" />

            <span
              className="
                relative
                text-zinc-400
                transition-all
                duration-500
                group-hover:translate-y-1
                group-hover:text-white
              "
            >
              ↓
            </span>
          </div>

          <span
            className="
              whitespace-nowrap
              text-[9px]
              font-medium
              tracking-[0.4em]
              text-zinc-600
              uppercase
              transition-colors
              duration-500
              group-hover:text-zinc-300
            "
          >
            Click anywhere to enter
          </span>
        </div>
      </div>

      {/* =====================================================
          CORNER DECORATIONS
      ===================================================== */}

      <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-white/10" />

      <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-white/10" />

      <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-white/10" />

      <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-white/10" />

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes clockReveal {
            0% {
              opacity: 0;
              transform: scale(0.75) translateY(30px);
              filter: blur(20px);
            }

            60% {
              opacity: 1;
              filter: blur(0);
            }

            100% {
              transform: scale(1) translateY(0);
            }
          }

          @keyframes titleReveal {
            0% {
              opacity: 0;
              transform: translateY(35px) scale(0.92);
              filter: blur(12px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes welcomeReveal {
            0% {
              opacity: 0;
              transform: translateY(25px) scale(0.92);
              filter: blur(10px);
            }

            60% {
              opacity: 1;
              filter: blur(0);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes floatGlow {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(40px, -30px, 0) scale(1.12);
            }
          }

          @keyframes particleFloat {
            0%,
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.2;
            }

            50% {
              transform: translateY(-35px) scale(1.5);
              opacity: 0.8;
            }
          }

          @media (max-width: 640px) {
            .welcome-text {
              transform: scale(0.9);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;