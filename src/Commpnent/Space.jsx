import React, { useState } from "react";

import Coffee from "../Commpnent/Coffee";
import Music from "./Music";
import Wallpaper from "./Wallpaper";

const Space = () => {
  const [coffeeOpen, setCoffeeOpen] = useState(false);
  const [music, setMusic] = useState(false);
  const [wall, setWall] = useState(false);

  const socials = [
    {
      name: "GitHub",
      src: "/icons8-github-64.png",
      href: "https://github.com/mdalmarzan",
    },
    {
      name: "Gmail",
      src: "/icons8-gmail-logo-64.png",
      href: "mailto:almarzanffxy@gmail.com",
    },
    {
      name: "LinkedIn",
      src: "/icons8-linkedin-circled-64.png",
      href: "https://www.linkedin.com/in/yourusername",
    },
    {
      name: "Facebook",
      src: "/icons8-facebook-64.png",
      href: "https://www.facebook.com/almarzanffxy",
    },
    {
      name: "Instagram",
      src: "/icons8-instagram-64.png",
      href: "https://www.instagram.com/md.almarzan",
    },
  ];

  const iconButtonClass = `
    w-[60px] h-[60px]
    min-w-[60px] min-h-[60px]
    flex items-center justify-center
    rounded-xl
    bg-transparent
    transition-all duration-300 ease-out
    hover:bg-white/10
    hover:-translate-y-1
    active:scale-90
  `;

  const iconClass = `
    w-[52px] h-[52px]
    min-w-[52px] min-h-[52px]
    object-contain
    transition-all duration-300 ease-out
    group-hover:scale-[1.15]
    group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]
  `;

  const tooltipClass = `
    pointer-events-none
    absolute bottom-[70px] left-1/2
    -translate-x-1/2
    whitespace-nowrap
    px-3 py-1.5
    rounded-lg
    bg-black/75
    backdrop-blur-xl
    border border-white/10
    text-white text-xs font-medium
    shadow-lg
    opacity-0
    translate-y-2
    invisible
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:visible
    transition-all duration-200
    z-[100]
  `;

  return (
    <>
      {/* ================= DOCK ================= */}
      <div
        className="
          fixed
          left-1/2
          bottom-4
          -translate-x-1/2
          z-[9999]

          flex
          items-center
          justify-center
          gap-2

          px-4
          h-[84px]

          w-max
          max-w-[calc(100vw-32px)]

          overflow-visible

          bg-black/25
          backdrop-blur-2xl
          border border-white/10
          rounded-2xl

          shadow-[0_10px_40px_rgba(0,0,0,0.35)]

          space-enter
        "
      >
        {/* Top glass highlight */}
        <div
          className="
            absolute
            inset-x-6
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            pointer-events-none
          "
        />

        {/* ================= SOCIAL ICONS ================= */}
        {socials.map((item) => (
          <div
            key={item.name}
            className="
              relative
              group
              w-[60px]
              h-[60px]
              min-w-[60px]
              shrink-0
              flex
              items-center
              justify-center
            "
          >
            <a
              href={item.href}
              target={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "_blank"
              }
              rel={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={iconButtonClass}
            >
              <img
                src={item.src}
                alt={item.name}
                draggable="false"
                className={iconClass}
              />
            </a>

            <span className={tooltipClass}>
              {item.name}
            </span>
          </div>
        ))}

        {/* ================= DIVIDER ================= */}
        <div
          className="
            w-px
            min-w-px
            h-10
            bg-white/10
            mx-1
            shrink-0
          "
        />

        {/* ================= COFFEE ================= */}
        <div
          className="
            relative
            group
            w-[60px]
            h-[60px]
            min-w-[60px]
            shrink-0
            flex
            items-center
            justify-center
          "
        >
          <button
            type="button"
            onClick={() => setCoffeeOpen(true)}
            className={iconButtonClass}
          >
            <img
              src="/icons8-coffee-100.png"
              alt="Coffee"
              draggable="false"
              className={iconClass}
            />
          </button>

          <span className={tooltipClass}>
            Buy Me a Coffee
          </span>
        </div>

        {/* ================= APPLE MUSIC ================= */}
        <div
          className="
            relative
            group
            w-[60px]
            h-[60px]
            min-w-[60px]
            shrink-0
            flex
            items-center
            justify-center
          "
        >
          <button
            type="button"
            onClick={() => setMusic(true)}
            className={iconButtonClass}
          >
            <img
              src="/icons8-apple-music-48.png"
              alt="Apple Music"
              draggable="false"
              className={iconClass}
            />
          </button>

          <span className={tooltipClass}>
            Apple Music
          </span>
        </div>

        {/* ================= WALLPAPER ================= */}
        <div
          className="
            relative
            group
            w-[60px]
            h-[60px]
            min-w-[60px]
            shrink-0
            flex
            items-center
            justify-center
          "
        >
          <button
            type="button"
            onClick={() => setWall(true)}
            className={iconButtonClass}
          >
            <img
              src="/icons8-wallpaper-48.png"
              alt="Wallpaper"
              draggable="false"
              className={iconClass}
            />
          </button>

          <span className={tooltipClass}>
            Wallpaper
          </span>
        </div>
      </div>

      {/* ================= MODALS ================= */}

      <Coffee
        open={coffeeOpen}
        onClose={() => setCoffeeOpen(false)}
      />

      <Music
        open={music}
        onClose={() => setMusic(false)}
      />

      <Wallpaper
        open={wall}
        onClose={() => setWall(false)}
      />
    </>
  );
};

export default Space;