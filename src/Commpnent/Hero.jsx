import { useEffect, useRef, useState } from "react";
import { FaCode, FaPlay } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
} from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import "./Hero.css";

const Hero = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize audio once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audio.src =
      "/কিছু মানুষ মরে যায় পঁচিশে - Kichhu Manush More Jaay Pochishe - Saif Zohan - Bangla New Song 2025.mp3";
    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          if (error.name === "AbortError") return;
          console.error("Audio error:", error);
        });
    }
  };

  return (
    <div className="portfolio-hero relative bg-transparent text-white mt-3 ml-10">

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

      <div className="portfolio-hero-top relative flex gap-6">

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
              fetchPriority="high"
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
            portfolio-service-card
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
          portfolio-about-card
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
          portfolio-music-card
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
            portfolio-album
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

        <div className="portfolio-music-info relative flex flex-col items-center justify-center flex-1 ml-5">

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
          <div className="portfolio-music-controls flex items-center gap-8">

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
    </div>
  );
};

export default Hero;