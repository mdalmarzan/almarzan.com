import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaPlay } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
} from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";

const Hero = () => {
  const audioRef = useRef(
    new Audio(
      "/কিছু মানুষ মরে যায় পঁচিশে - Kichhu Manush More Jaay Pochishe - Saif Zohan - Bangla New Song 2025.mp3"
    )
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Audio error:", error);
        });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative bg-transparent text-white mt-3 ml-10">

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="ambient-glow glow-one" />
        <div className="ambient-glow glow-two" />
        <div className="ambient-glow glow-three" />
        <div className="ambient-glow glow-four" />

        <span className="floating-dot dot-1" />
        <span className="floating-dot dot-2" />
        <span className="floating-dot dot-3" />
        <span className="floating-dot dot-4" />
        <span className="floating-dot dot-5" />
        <span className="floating-dot dot-6" />
        <span className="floating-dot dot-7" />
        <span className="floating-dot dot-8" />
        <span className="floating-dot dot-9" />
        <span className="floating-dot dot-10" />

      </div>

      {/* =====================================================
          TOP SECTION
      ====================================================== */}

      <div className="relative flex gap-6">

        {/* =================================================
            PROFILE IMAGE
        ================================================== */}

        <div
          className="
            relative
            rounded-2xl
            group
            hero-image-enter
            image-floating
          "
        >

          {/* Large Glow */}
          <div className="image-big-glow" />

          {/* Soft Outer Aura */}
          <div className="image-outer-aura" />

          {/* Rotating Neon Border */}
          <div className="image-neon-border">
            <div className="image-neon-border-inner" />
          </div>

          {/* Image Container */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/20
              bg-white/[0.04]
              shadow-[0_25px_70px_rgba(0,0,0,0.45)]
              transition-all
              duration-700
              group-hover:border-cyan-300/40
              group-hover:shadow-[0_30px_90px_rgba(0,210,255,0.22)]
            "
          >

            {/* Image */}
            <img
              src="/marzan2.png"
              loading="eager"
              fetchpriority="high"
              alt="Marzan"
              width={200}
              height={290}
              className="
                relative
                z-10
                rounded-2xl
                w-[200px]
                h-[290px]
                object-cover
                image-main
              "
            />

            {/* RGB Overlay */}
            <div className="image-rgb-overlay" />

            {/* Dark Gradient */}
            <div className="image-dark-gradient" />

            {/* First Shine */}
            <div className="image-shine-one" />

            {/* Second Shine */}
            <div className="image-shine-two" />

            {/* Third Soft Shine */}
            <div className="image-shine-three" />

            {/* Scan Line */}
            <div className="image-scan-line" />

            {/* Top Corner Glow */}
            <div className="image-corner-glow top-left" />
            <div className="image-corner-glow bottom-right" />

            {/* Small Light */}
            <div className="image-status-light" />

          </div>

          {/* Shadow */}
          <div className="image-ground-shadow" />

          {/* Floating Ring */}
          <div className="image-floating-ring ring-one" />
          <div className="image-floating-ring ring-two" />
          <div className="image-floating-ring ring-three" />

        </div>

        {/* =================================================
            WHAT I'M DOING
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            w-[250px]
            h-[290px]
            p-4
            bg-white/[0.08]
            backdrop-blur-xl
            border
            border-white/[0.16]
            rounded-2xl
            text-white
            hero-card-enter
            service-card-float
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:bg-white/[0.12]
            hover:border-white/30
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          "
        >

          {/* Glass Shine */}
          <div className="card-glass-shine" />

          {/* Moving Border */}
          <div className="card-moving-line" />

          {/* Corner Glow */}
          <div className="card-corner-glow" />

          {/* Soft Inner Light */}
          <div className="card-inner-light" />

          <h1 className="relative z-10 text-lg font-bold tracking-tight text-reveal">
            What I'm doing
          </h1>

          {/* WEB DEVELOPMENT */}
          <div
            className="
              relative
              z-10
              pt-1
              service-item
              service-delay-one
            "
          >
            <h3 className="flex items-center text-2xl font-semibold">
              <span className="service-icon development-icon">
                <FaCode className="text-lg" />
              </span>
              <span className="service-title">
                Web Development
              </span>
            </h3>
            <p className="mt-1 text-xs leading-5 text-white/70 service-description">
              High-quality development of sites at the professional level.
            </p>
          </div>

          {/* WEB DESIGN */}
          <div
            className="
              relative
              z-10
              pt-4
              service-item
              service-delay-two
            "
          >
            <h3 className="flex items-center text-2xl font-semibold">
              <span className="service-icon design-icon">
                <MdDesignServices className="text-lg" />
              </span>
              <span className="service-title">
                Web Design
              </span>
            </h3>
            <p className="mt-1 text-xs leading-5 text-white/70 service-description">
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>

          {/* Bottom Status */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
            <span className="status-dot dot-cyan" />
            <span className="status-dot dot-white" />
            <span className="status-dot dot-purple" />
          </div>

        </div>
      </div>

      {/* =====================================================
          ABOUT ME
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-white/[0.08]
          backdrop-blur-xl
          border
          border-white/[0.16]
          rounded-2xl
          text-white
          mt-3
          w-[476px]
          h-[290px]
          p-4
          hero-card-enter-delay
          about-card-float
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:bg-white/[0.12]
          hover:border-white/30
        "
      >

        {/* Background Light */}
        <div className="about-glow about-glow-one" />
        <div className="about-glow about-glow-two" />
        <div className="about-glow about-glow-three" />

        {/* Moving Border */}
        <div className="about-border-line" />

        {/* Top Shine */}
        <div className="about-top-shine" />

        <a
          href="#"
          className="
            relative
            z-10
            inline-block
            text-2xl
            font-bold
            tracking-tight
            about-title
          "
        >
          About me
          <span className="about-title-line" />
        </a>

        <p className="relative z-10 pt-4 text-sm leading-5 text-white/75 about-text about-text-one">
          Hi, I’m Marzan, a Web Developer and Designer from Kota, Rajasthan.
          I specialize in full-stack development, working on both frontend and
          backend to create seamless digital experiences. My focus is on
          building websites that are functional, user-friendly, and visually
          engaging.
        </p>

        <p className="relative z-10 pt-4 text-sm leading-5 text-white/75 about-text about-text-two">
          I bring a personal touch to every project, ensuring it reflects the
          brand’s identity while delivering an intuitive experience. My aim is
          to combine creativity and technology to transform ideas into
          impactful designs and scalable solutions.
        </p>

        {/* Availability */}
        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            items-center
            gap-2
            text-[10px]
            text-white/45
          "
        >
          <span className="availability-ring">
            <span />
          </span>
          Available for projects
        </div>

      </div>

      {/* =====================================================
          MUSIC PLAYER
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-white/[0.08]
          backdrop-blur-xl
          border
          border-white/[0.16]
          rounded-2xl
          text-white
          mt-3
          w-[476px]
          h-[175px]
          p-4
          flex
          items-center
          justify-between
          hero-card-enter-delay-2
          music-card-float
          shadow-[0_20px_60px_rgba(0,0,0,0.28)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:bg-white/[0.12]
          hover:border-white/30
        "
      >

        {/* Music Glow */}
        <div
          className={`music-background-glow ${
            isPlaying ? "music-active" : ""
          }`}
        />

        {/* Secondary Glow */}
        <div
          className={`music-secondary-glow ${
            isPlaying ? "music-active" : ""
          }`}
        />

        {/* Animated Border */}
        <div className="music-border-line" />

        {/* =================================================
            ALBUM
        ================================================== */}

        <div
          className={`
            relative
            bg-white/[0.10]
            backdrop-blur-md
            border
            border-white/[0.18]
            rounded-full
            w-[125px]
            h-[125px]
            p-2
            flex-shrink-0
            album-container
            ${isPlaying ? "album-playing" : ""}
          `}
        >

          {/* Outer Rings */}
          <div
            className={`album-ring ring-a ${
              isPlaying ? "ring-playing" : ""
            }`}
          />
          <div
            className={`album-ring ring-b ${
              isPlaying ? "ring-playing-two" : ""
            }`}
          />
          <div
            className={`album-ring ring-c ${
              isPlaying ? "ring-playing-three" : ""
            }`}
          />

          {/* Album Image */}
          <img
            src="/Untitled design.png"
            alt="Song cover"
            className={`
              relative
              z-10
              rounded-full
              w-full
              h-full
              object-cover
              album-image
              ${isPlaying ? "spin" : ""}
            `}
          />

          {/* Album Shine */}
          <div className="album-shine" />

          {/* Center Pulse when playing */}
          <div
            className={`album-center-pulse ${
              isPlaying ? "pulse-active" : ""
            }`}
          />

        </div>

        {/* =================================================
            MUSIC INFO
        ================================================== */}

        <div className="relative flex flex-col items-center justify-center flex-1 ml-5">

          <h4
            className="
              text-base
              font-bold
              text-center
              mb-5
              music-title
            "
          >
            কিছু মানুষ মরে যায় পঁচিশে
          </h4>

          {/* CONTROLS */}
          <div className="flex items-center gap-8">

            {/* Previous */}
            <button
              type="button"
              className="
                music-control
                text-lg
                text-white/70
              "
            >
              <IoPlaySkipBackSharp />
            </button>

            {/* Play */}
            <button
              type="button"
              onClick={toggleMusic}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              className={`
                relative
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                play-button
                ${isPlaying ? "play-button-active" : ""}
              `}
            >
              <span className="play-button-ring" />
              <span className="relative z-10">
                {isPlaying ? (
                  <TbPlayerPauseFilled />
                ) : (
                  <FaPlay className="ml-0.5" />
                )}
              </span>
            </button>

            {/* Next */}
            <button
              type="button"
              className="
                music-control
                text-lg
                text-white/70
              "
            >
              <IoPlaySkipForward />
            </button>

          </div>

          {/* Visualizer */}
          <div className="music-visualizer">
            <span className={`bar ${isPlaying ? "bar-1" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-2" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-3" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-4" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-5" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-6" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-7" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-8" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-9" : "bar-off"}`} />
            <span className={`bar ${isPlaying ? "bar-10" : "bar-off"}`} />
          </div>

        </div>

        {/* Music Top Shine */}
        <div className="music-top-shine" />

      </div>

      {/* =====================================================
          ANIMATION CSS
      ====================================================== */}

      <style>{`

        /* =================================================
           AMBIENT GLOW
        ================================================= */

        .ambient-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          pointer-events: none;
          animation: ambientMove 9s ease-in-out infinite;
        }

        .glow-one {
          width: 280px;
          height: 280px;
          left: -100px;
          top: -100px;
          background: rgba(34,211,238,0.08);
        }

        .glow-two {
          width: 240px;
          height: 240px;
          left: 220px;
          top: 100px;
          background: rgba(139,92,246,0.07);
          animation-delay: 2.2s;
        }

        .glow-three {
          width: 200px;
          height: 200px;
          left: 80px;
          top: 380px;
          background: rgba(59,130,246,0.06);
          animation-delay: 4.4s;
        }

        .glow-four {
          width: 160px;
          height: 160px;
          left: 340px;
          top: 260px;
          background: rgba(236,72,153,0.04);
          animation-delay: 1.1s;
        }

        @keyframes ambientMove {
          0% {
            transform: translate(0,0) scale(1);
          }
          50% {
            transform: translate(22px,-18px) scale(1.18);
          }
          100% {
            transform: translate(0,0) scale(1);
          }
        }

        /* =================================================
           FLOATING DOTS
        ================================================= */

        .floating-dot {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 999px;
          background: rgba(255,255,255,0.5);
          box-shadow: 0 0 12px rgba(103,232,249,0.5);
          animation: dotFloat 7s ease-in-out infinite;
        }

        .dot-1 { left: 10px; top: 20px; }
        .dot-2 { left: 180px; top: 90px; animation-delay: 1s; }
        .dot-3 { left: 300px; top: 20px; animation-delay: 2s; }
        .dot-4 { left: 450px; top: 170px; animation-delay: 3s; }
        .dot-5 { left: 100px; top: 330px; animation-delay: 1.5s; }
        .dot-6 { left: 380px; top: 400px; animation-delay: 2.5s; }
        .dot-7 { left: 40px; top: 480px; animation-delay: 4s; }
        .dot-8 { left: 430px; top: 500px; animation-delay: 3.5s; }
        .dot-9 { left: 250px; top: 250px; animation-delay: 0.7s; }
        .dot-10 { left: 160px; top: 460px; animation-delay: 5s; }

        @keyframes dotFloat {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.4);
          }
          25% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-18px) scale(1.4);
          }
          75% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
            transform: translateY(-36px) scale(0.4);
          }
        }

        /* =================================================
           IMAGE
        ================================================= */

        .image-floating {
          animation: imageFloat 5.5s ease-in-out infinite;
        }

        @keyframes imageFloat {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-11px) rotate(0deg);
          }
          75% {
            transform: translateY(-6px) rotate(-0.5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        .hero-image-enter {
          animation:
            imageEnter 1.15s cubic-bezier(.22,1,.36,1) both,
            imageFloat 5.5s ease-in-out 1.15s infinite;
        }

        @keyframes imageEnter {
          0% {
            opacity: 0;
            transform: translateX(-80px) scale(0.8) rotate(-7deg);
            filter: blur(12px);
          }
          55% {
            opacity: 1;
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
          }
        }

        /* =================================================
           IMAGE BIG GLOW + OUTER AURA
        ================================================= */

        .image-big-glow {
          position: absolute;
          inset: -18px;
          border-radius: 26px;
          background:
            radial-gradient(
              circle,
              rgba(34,211,238,0.2),
              rgba(139,92,246,0.1),
              transparent 72%
            );
          filter: blur(22px);
          animation: imageGlow 4.5s ease-in-out infinite;
        }

        .image-outer-aura {
          position: absolute;
          inset: -32px;
          border-radius: 32px;
          background:
            radial-gradient(
              circle,
              rgba(34,211,238,0.08),
              transparent 70%
            );
          filter: blur(30px);
          animation: imageAura 6s ease-in-out infinite;
        }

        @keyframes imageGlow {
          0% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.07);
          }
          100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
        }

        @keyframes imageAura {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.92);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.08);
          }
        }

        /* =================================================
           IMAGE NEON BORDER
        ================================================= */

        .image-neon-border {
          position: absolute;
          inset: -2px;
          border-radius: 18px;
          overflow: hidden;
          pointer-events: none;
        }

        .image-neon-border-inner {
          position: absolute;
          inset: -100%;
          background:
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 40deg,
              rgba(34,211,238,0.95) 80deg,
              transparent 120deg,
              transparent 180deg,
              rgba(168,85,247,0.95) 220deg,
              transparent 260deg,
              transparent 320deg,
              rgba(236,72,153,0.7) 340deg,
              transparent 360deg
            );
          animation: neonRotate 3.8s linear infinite;
        }

        @keyframes neonRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* =================================================
           IMAGE MAIN
        ================================================= */

        .image-main {
          animation: imageBreathing 5.5s ease-in-out infinite;
          transition:
            transform 0.9s cubic-bezier(.22,1,.36,1),
            filter 0.9s ease;
        }

        .group:hover .image-main {
          transform: scale(1.08) rotate(0.7deg);
          filter:
            brightness(1.1)
            contrast(1.05)
            saturate(1.1);
        }

        @keyframes imageBreathing {
          0% {
            filter: brightness(1) saturate(1);
          }
          50% {
            filter: brightness(1.04) saturate(1.05);
          }
          100% {
            filter: brightness(1) saturate(1);
          }
        }

        /* =================================================
           RGB OVERLAY
        ================================================= */

        .image-rgb-overlay {
          position: absolute;
          z-index: 15;
          inset: 0;
          background:
            linear-gradient(
              125deg,
              rgba(34,211,238,0.1),
              transparent 38%,
              rgba(168,85,247,0.1)
            );
          mix-blend-mode: screen;
          animation: rgbMove 6.5s ease-in-out infinite;
        }

        @keyframes rgbMove {
          0% {
            opacity: 0.25;
            transform: translateX(-6%);
          }
          50% {
            opacity: 0.85;
            transform: translateX(6%);
          }
          100% {
            opacity: 0.25;
            transform: translateX(-6%);
          }
        }

        /* =================================================
           IMAGE DARK GRADIENT
        ================================================= */

        .image-dark-gradient {
          position: absolute;
          z-index: 20;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(0,0,0,0.45),
              transparent 42%,
              rgba(255,255,255,0.04)
            );
        }

        /* =================================================
           IMAGE SHINES
        ================================================= */

        .image-shine-one {
          position: absolute;
          z-index: 30;
          top: -30%;
          left: -130%;
          width: 58%;
          height: 175%;
          transform: skewX(-22deg);
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.32),
              transparent
            );
          animation: imageShine 5.2s ease-in-out infinite;
        }

        .image-shine-two {
          position: absolute;
          z-index: 29;
          top: -20%;
          left: -110%;
          width: 26%;
          height: 145%;
          transform: skewX(-22deg);
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(34,211,238,0.2),
              transparent
            );
          animation: imageShineTwo 8.5s ease-in-out 2.2s infinite;
        }

        .image-shine-three {
          position: absolute;
          z-index: 28;
          top: -10%;
          left: -90%;
          width: 18%;
          height: 120%;
          transform: skewX(-18deg);
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(168,85,247,0.12),
              transparent
            );
          animation: imageShineThree 11s ease-in-out 4s infinite;
        }

        @keyframes imageShine {
          0% { left: -130%; }
          32% { left: 170%; }
          100% { left: 170%; }
        }

        @keyframes imageShineTwo {
          0% { left: -110%; }
          28% { left: 170%; }
          100% { left: 170%; }
        }

        @keyframes imageShineThree {
          0% { left: -90%; }
          25% { left: 160%; }
          100% { left: 160%; }
        }

        /* =================================================
           IMAGE SCAN LINE
        ================================================= */

        .image-scan-line {
          position: absolute;
          z-index: 31;
          left: 0;
          top: -5px;
          width: 100%;
          height: 1.5px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(103,232,249,0.8),
              transparent
            );
          box-shadow: 0 0 14px rgba(34,211,238,0.55);
          animation: imageScan 4.2s ease-in-out infinite;
        }

        @keyframes imageScan {
          0% {
            top: -5px;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        /* =================================================
           IMAGE CORNER GLOW
        ================================================= */

        .image-corner-glow {
          position: absolute;
          z-index: 35;
          width: 50px;
          height: 50px;
          opacity: 0.55;
          animation: cornerPulse 3.2s ease-in-out infinite;
        }

        .top-left {
          top: 0;
          left: 0;
          background:
            radial-gradient(
              circle at top left,
              rgba(34,211,238,0.4),
              transparent 72%
            );
        }

        .bottom-right {
          right: 0;
          bottom: 0;
          background:
            radial-gradient(
              circle at bottom right,
              rgba(168,85,247,0.35),
              transparent 72%
            );
          animation-delay: 1.6s;
        }

        @keyframes cornerPulse {
          0% { opacity: 0.25; }
          50% { opacity: 0.85; }
          100% { opacity: 0.25; }
        }

        /* =================================================
           IMAGE STATUS LIGHT
        ================================================= */

        .image-status-light {
          position: absolute;
          z-index: 40;
          top: 10px;
          right: 10px;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgb(103,232,249);
          box-shadow:
            0 0 6px rgba(103,232,249,0.9),
            0 0 14px rgba(103,232,249,0.55);
          animation: statusPulse 2.1s ease-in-out infinite;
        }

        @keyframes statusPulse {
          0% {
            opacity: 0.35;
            transform: scale(0.75);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
          100% {
            opacity: 0.35;
            transform: scale(0.75);
          }
        }

        /* =================================================
           IMAGE SHADOW
        ================================================= */

        .image-ground-shadow {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: -13px;
          height: 20px;
          border-radius: 999px;
          background: rgba(0,0,0,0.55);
          filter: blur(13px);
          animation: groundShadow 5.5s ease-in-out infinite;
        }

        @keyframes groundShadow {
          0% {
            transform: scaleX(0.88);
            opacity: 0.4;
          }
          50% {
            transform: scaleX(0.62);
            opacity: 0.12;
          }
          100% {
            transform: scaleX(0.88);
            opacity: 0.4;
          }
        }

        /* =================================================
           FLOATING IMAGE RINGS
        ================================================= */

        .image-floating-ring {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(103,232,249,0.14);
          pointer-events: none;
        }

        .ring-one {
          width: 20px;
          height: 20px;
          right: -9px;
          top: 32px;
          animation: ringFloat 4.2s ease-in-out infinite;
        }

        .ring-two {
          width: 11px;
          height: 11px;
          left: -8px;
          bottom: 48px;
          border-color: rgba(168,85,247,0.18);
          animation: ringFloat 5.2s ease-in-out 1.1s infinite;
        }

        .ring-three {
          width: 8px;
          height: 8px;
          right: 12px;
          bottom: -6px;
          border-color: rgba(236,72,153,0.2);
          animation: ringFloat 6s ease-in-out 2.2s infinite;
        }

        @keyframes ringFloat {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.18;
          }
          50% {
            transform: translateY(-14px) rotate(180deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) rotate(360deg);
            opacity: 0.18;
          }
        }

        /* =================================================
           SERVICE CARD
        ================================================= */

        .service-card-float {
          animation: cardFloat 6.5s ease-in-out 1s infinite;
        }

        @keyframes cardFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }

        .hero-card-enter {
          animation: cardEnter 0.95s cubic-bezier(.22,1,.36,1) 0.15s both;
        }

        .hero-card-enter-delay {
          animation: cardEnter 0.95s cubic-bezier(.22,1,.36,1) 0.32s both;
        }

        .hero-card-enter-delay-2 {
          animation: cardEnter 0.95s cubic-bezier(.22,1,.36,1) 0.48s both;
        }

        @keyframes cardEnter {
          0% {
            opacity: 0;
            transform: translateY(42px) scale(0.94);
            filter: blur(9px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* =================================================
           CARD SHINE + INNER LIGHT
        ================================================= */

        .card-glass-shine {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              125deg,
              rgba(255,255,255,0.08),
              transparent 32%,
              transparent 68%,
              rgba(255,255,255,0.05)
            );
          animation: glassMove 7.5s ease-in-out infinite;
        }

        .card-inner-light {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(34,211,238,0.06),
              transparent 55%
            );
          animation: innerLight 8s ease-in-out infinite;
        }

        @keyframes glassMove {
          0% { transform: translateX(-12%); }
          50% { transform: translateX(12%); }
          100% { transform: translateX(-12%); }
        }

        @keyframes innerLight {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }

        /* =================================================
           CARD BORDER
        ================================================= */

        .card-moving-line {
          position: absolute;
          top: 0;
          left: -110px;
          width: 100px;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(103,232,249,0.85),
              transparent
            );
          animation: cardLine 4.2s ease-in-out infinite;
        }

        @keyframes cardLine {
          0% { left: -110px; }
          48% { left: 100%; }
          100% { left: 100%; }
        }

        .card-corner-glow {
          position: absolute;
          right: -45px;
          bottom: -45px;
          width: 110px;
          height: 110px;
          border-radius: 999px;
          background: rgba(139,92,246,0.09);
          filter: blur(28px);
          animation: cornerGlow 4.5s ease-in-out infinite;
        }

        @keyframes cornerGlow {
          0% { transform: scale(0.75); }
          50% { transform: scale(1.25); }
          100% { transform: scale(0.75); }
        }

        /* =================================================
           SERVICE ITEMS
        ================================================= */

        .service-item {
          transition: transform 0.4s cubic-bezier(.22,1,.36,1), opacity 0.4s ease;
        }

        .service-item:hover {
          transform: translateX(7px);
        }

        .service-delay-one {
          animation: serviceReveal 0.85s ease 0.65s both;
        }

        .service-delay-two {
          animation: serviceReveal 0.85s ease 0.85s both;
        }

        @keyframes serviceReveal {
          from {
            opacity: 0;
            transform: translateX(-18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .service-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 2px;
          padding: 4px;
          transition: all 0.4s cubic-bezier(.22,1,.36,1);
        }

        .development-icon,
        .design-icon {
          color: rgba(255,255,255,0.9);
        }

        .service-item:hover .development-icon {
          color: rgb(103,232,249);
          background: rgba(34,211,238,0.12);
          border-color: rgba(103,232,249,0.35);
          transform: rotate(-9deg) scale(1.12);
          box-shadow: 0 0 20px rgba(34,211,238,0.18);
        }

        .service-item:hover .design-icon {
          color: rgb(196,181,253);
          background: rgba(168,85,247,0.12);
          border-color: rgba(196,181,253,0.35);
          transform: rotate(9deg) scale(1.12);
          box-shadow: 0 0 20px rgba(168,85,247,0.18);
        }

        .service-title {
          transition: color 0.3s ease, letter-spacing 0.3s ease;
        }

        .service-item:hover .service-title {
          color: rgb(226,232,240);
          letter-spacing: 0.25px;
        }

        .service-description {
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .service-item:hover .service-description {
          color: rgba(255,255,255,0.92);
          transform: translateX(3px);
        }

        /* =================================================
           STATUS DOTS
        ================================================= */

        .status-dot {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          animation: statusDots 2.1s ease-in-out infinite;
        }

        .dot-cyan {
          background: rgb(103,232,249);
          box-shadow: 0 0 9px rgba(103,232,249,0.65);
        }

        .dot-white {
          background: rgba(255,255,255,0.4);
          animation-delay: 0.35s;
        }

        .dot-purple {
          background: rgba(196,181,253,0.55);
          animation-delay: 0.7s;
        }

        @keyframes statusDots {
          0% {
            transform: scale(0.65);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
          }
          100% {
            transform: scale(0.65);
            opacity: 0.3;
          }
        }

        /* =================================================
           ABOUT CARD
        ================================================= */

        .about-card-float {
          animation: aboutFloat 7.5s ease-in-out 1.25s infinite;
        }

        @keyframes aboutFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }

        .about-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(55px);
          animation: aboutGlow 6.5s ease-in-out infinite;
        }

        .about-glow-one {
          width: 160px;
          height: 160px;
          right: -65px;
          top: -75px;
          background: rgba(34,211,238,0.08);
        }

        .about-glow-two {
          width: 150px;
          height: 150px;
          left: -75px;
          bottom: -75px;
          background: rgba(139,92,246,0.07);
          animation-delay: 2.2s;
        }

        .about-glow-three {
          width: 100px;
          height: 100px;
          right: 40px;
          bottom: 30px;
          background: rgba(236,72,153,0.05);
          animation-delay: 4s;
        }

        @keyframes aboutGlow {
          0% {
            transform: scale(0.78);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.85;
          }
          100% {
            transform: scale(0.78);
            opacity: 0.35;
          }
        }

        .about-border-line {
          position: absolute;
          top: 0;
          left: -120px;
          width: 120px;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(103,232,249,0.85),
              transparent
            );
          animation: aboutBorder 5.2s ease-in-out infinite;
        }

        @keyframes aboutBorder {
          0% { left: -120px; }
          42% { left: 100%; }
          100% { left: 100%; }
        }

        .about-top-shine {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.22),
              transparent
            );
          animation: topShine 4.3s ease-in-out infinite;
        }

        @keyframes topShine {
          0% { transform: translateX(-100%); }
          48% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        .about-title {
          animation: titleGlow 4.2s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0% {
            text-shadow: 0 0 0 transparent;
          }
          50% {
            text-shadow: 0 0 20px rgba(103,232,249,0.18);
          }
          100% {
            text-shadow: 0 0 0 transparent;
          }
        }

        .about-title-line {
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 1.5px;
          transform-origin: left;
          background:
            linear-gradient(
              90deg,
              rgb(34,211,238),
              rgb(139,92,246),
              transparent
            );
          animation: titleLine 4.2s ease-in-out infinite;
        }

        @keyframes titleLine {
          0% {
            transform: scaleX(0.18);
            opacity: 0.25;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0.18);
            opacity: 0.25;
          }
        }

        .about-text {
          animation: textReveal 1.05s ease both;
        }

        .about-text-one {
          animation-delay: 0.65s;
        }

        .about-text-two {
          animation-delay: 0.85s;
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =================================================
           AVAILABILITY
        ================================================= */

        .availability-ring {
          position: relative;
          width: 8px;
          height: 8px;
          display: flex;
        }

        .availability-ring::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 999px;
          border: 1px solid rgba(74,222,128,0.45);
          animation: availabilityPulse 2.1s ease-out infinite;
        }

        .availability-ring span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgb(74,222,128);
          box-shadow: 0 0 9px rgba(74,222,128,0.75);
        }

        @keyframes availabilityPulse {
          0% {
            transform: scale(0.65);
            opacity: 1;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        /* =================================================
           MUSIC CARD
        ================================================= */

        .music-card-float {
          animation: musicFloat 6.5s ease-in-out 1.45s infinite;
        }

        @keyframes musicFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }

        .music-background-glow {
          position: absolute;
          left: -35px;
          top: 50%;
          width: 180px;
          height: 180px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: rgba(34,211,238,0.055);
          filter: blur(48px);
          transition: all 1.1s ease;
        }

        .music-background-glow.music-active {
          background: rgba(34,211,238,0.14);
          transform: translateY(-50%) scale(1.35);
        }

        .music-secondary-glow {
          position: absolute;
          right: -40px;
          top: 50%;
          width: 140px;
          height: 140px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: rgba(168,85,247,0.04);
          filter: blur(40px);
          transition: all 1.1s ease;
        }

        .music-secondary-glow.music-active {
          background: rgba(168,85,247,0.1);
          transform: translateY(-50%) scale(1.25);
        }

        .music-border-line {
          position: absolute;
          top: 0;
          left: -130px;
          width: 130px;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(103,232,249,0.85),
              transparent
            );
          animation: musicBorder 4.3s ease-in-out infinite;
        }

        @keyframes musicBorder {
          0% { left: -130px; }
          48% { left: 100%; }
          100% { left: 100%; }
        }

        /* =================================================
           ALBUM
        ================================================= */

        .album-container {
          animation: albumFloat 5.5s ease-in-out infinite;
        }

        @keyframes albumFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }

        .album-container.album-playing {
          box-shadow: 0 0 40px rgba(34,211,238,0.28);
        }

        .album-ring {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
        }

        .ring-a {
          inset: -5px;
          border: 1px solid rgba(103,232,249,0.2);
        }

        .ring-b {
          inset: -10px;
          border: 1px dashed rgba(168,85,247,0.14);
        }

        .ring-c {
          inset: -15px;
          border: 1px solid rgba(236,72,153,0.1);
        }

        .ring-playing {
          animation: albumRing 4.8s linear infinite;
        }

        .ring-playing-two {
          animation: albumRingReverse 7.5s linear infinite;
        }

        .ring-playing-three {
          animation: albumRing 11s linear infinite;
        }

        @keyframes albumRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes albumRingReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .album-image {
          transition: filter 0.5s ease;
        }

        .album-container:hover .album-image {
          filter: brightness(1.1) saturate(1.12);
        }

        .album-shine {
          position: absolute;
          z-index: 20;
          inset: 0;
          border-radius: 999px;
          background:
            linear-gradient(
              125deg,
              transparent 28%,
              rgba(255,255,255,0.22),
              transparent 58%
            );
          animation: albumShine 5.3s ease-in-out infinite;
        }

        @keyframes albumShine {
          0% { transform: translateX(-110%); }
          38% { transform: translateX(110%); }
          100% { transform: translateX(110%); }
        }

        .spin {
          animation: albumSpin 5.8s linear infinite;
        }

        @keyframes albumSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .album-center-pulse {
          position: absolute;
          z-index: 15;
          inset: 28%;
          border-radius: 999px;
          background: rgba(34,211,238,0.15);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .album-center-pulse.pulse-active {
          opacity: 1;
          animation: centerPulse 2s ease-in-out infinite;
        }

        @keyframes centerPulse {
          0%, 100% {
            transform: scale(0.85);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.9;
          }
        }

        /* =================================================
           MUSIC TITLE
        ================================================= */

        .music-title {
          animation: musicTitle 4.2s ease-in-out infinite;
        }

        @keyframes musicTitle {
          0% {
            text-shadow: 0 0 0 transparent;
          }
          50% {
            text-shadow: 0 0 18px rgba(103,232,249,0.22);
          }
          100% {
            text-shadow: 0 0 0 transparent;
          }
        }

        /* =================================================
           MUSIC BUTTONS
        ================================================= */

        .music-control {
          transition: all 0.3s cubic-bezier(.22,1,.36,1);
        }

        .music-control:hover {
          color: rgb(103,232,249);
          transform: scale(1.28);
          filter: drop-shadow(0 0 9px rgba(34,211,238,0.4));
        }

        .music-control:active {
          transform: scale(0.82);
        }

        .play-button {
          transition: all 0.4s cubic-bezier(.22,1,.36,1);
          box-shadow: 0 0 22px rgba(255,255,255,0.18);
        }

        .play-button:hover {
          transform: scale(1.14);
          box-shadow: 0 0 34px rgba(255,255,255,0.35);
        }

        .play-button:active {
          transform: scale(0.88);
        }

        .play-button-active {
          box-shadow: 0 0 38px rgba(34,211,238,0.35);
        }

        .play-button-ring {
          position: absolute;
          inset: -5px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
        }

        .play-button-active .play-button-ring {
          border-color: rgba(103,232,249,0.5);
          animation: playRing 1.7s ease-out infinite;
        }

        @keyframes playRing {
          0% {
            transform: scale(0.88);
            opacity: 1;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        /* =================================================
           VISUALIZER
        ================================================= */

        .music-visualizer {
          position: absolute;
          bottom: -34px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 2.5px;
          height: 20px;
        }

        .bar {
          width: 2px;
          border-radius: 999px;
          background: rgb(103,232,249);
          box-shadow: 0 0 9px rgba(34,211,238,0.4);
        }

        .bar-off {
          height: 3px;
          opacity: 0.22;
        }

        .bar-1 { animation: musicBar 0.52s ease-in-out infinite alternate; }
        .bar-2 { animation: musicBar 0.38s ease-in-out 0.08s infinite alternate; }
        .bar-3 { animation: musicBar 0.68s ease-in-out 0.18s infinite alternate; }
        .bar-4 { animation: musicBar 0.48s ease-in-out 0.12s infinite alternate; }
        .bar-5 { animation: musicBar 0.78s ease-in-out 0.22s infinite alternate; }
        .bar-6 { animation: musicBar 0.42s ease-in-out 0.1s infinite alternate; }
        .bar-7 { animation: musicBar 0.62s ease-in-out 0.28s infinite alternate; }
        .bar-8 { animation: musicBar 0.5s ease-in-out 0.16s infinite alternate; }
        .bar-9 { animation: musicBar 0.58s ease-in-out 0.2s infinite alternate; }
        .bar-10 { animation: musicBar 0.45s ease-in-out 0.14s infinite alternate; }

        @keyframes musicBar {
          0% { height: 3px; }
          50% { height: 11px; }
          100% { height: 18px; }
        }

        /* =================================================
           MUSIC TOP SHINE
        ================================================= */

        .music-top-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.22),
              transparent
            );
          animation: musicShine 4.3s ease-in-out infinite;
        }

        @keyframes musicShine {
          0% { transform: translateX(-100%); }
          48% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

      `}</style>
    </div>
  );
};

export default Hero;