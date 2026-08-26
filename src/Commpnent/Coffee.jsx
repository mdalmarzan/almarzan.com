import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Coffee = ({ open, onClose }) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const dragOffset = useRef({
    x: 0,
    y: 0,
  });

  // ==========================================
  // DRAG WINDOW
  // ==========================================

  const handleMouseDown = (e) => {
    if (maximized) return;

    setDragging(true);

    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging || maximized) return;

    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // ==========================================
  // CLOSE
  // ==========================================

  const handleClose = (e) => {
    e.stopPropagation();

    setDragging(false);
    setMaximized(false);
    setMinimized(false);

    setPosition({
      x: 0,
      y: 0,
    });

    onClose();
  };

  // ==========================================
  // MINIMIZE
  // ==========================================

  const handleMinimize = (e) => {
    e.stopPropagation();

    setMinimized((prev) => !prev);
  };

  // ==========================================
  // MAXIMIZE
  // ==========================================

  const handleMaximize = (e) => {
    e.stopPropagation();

    setMaximized((prev) => !prev);
    setMinimized(false);

    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="coffee-modal"
      sx={{
        overflow: "hidden",
      }}
    >
      <Box
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        sx={{
          position: "absolute",

          top: maximized ? 0 : "50%",
          left: maximized ? 0 : "50%",

          transform: maximized
            ? "none"
            : `translate(
                calc(-50% + ${position.x}px),
                calc(-50% + ${position.y}px)
              )`,

          width: maximized
            ? "100vw"
            : "min(1500px, 95vw)",

          height: maximized
            ? "100vh"
            : minimized
            ? "62px"
            : "min(820px, 92vh)",

          background:
            "linear-gradient(145deg, rgba(255, 20, 147, 0.38), rgba(100, 5, 75, 0.58))",

          color: "#fff",

          border: "1px solid rgba(255,255,255,0.22)",

          borderRadius: maximized ? "0px" : "22px",

          boxShadow:
            "0 30px 100px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)",

          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",

          overflow: "hidden",

          outline: "none",

          userSelect: dragging ? "none" : "auto",

          transition: dragging
            ? "none"
            : "width 0.3s ease, height 0.3s ease, border-radius 0.3s ease",

          // ==========================================
          // OPENING ANIMATION
          // ==========================================

          animation:
            "coffeeWindowOpen 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",

          "@keyframes coffeeWindowOpen": {
            "0%": {
              opacity: 0,

              transform: maximized
                ? "scale(0.96)"
                : `translate(
                    calc(-50% + ${position.x}px),
                    calc(-50% + ${position.y + 25}px)
                  ) scale(0.94)`,
            },

            "60%": {
              opacity: 1,
            },

            "100%": {
              opacity: 1,

              transform: maximized
                ? "scale(1)"
                : `translate(
                    calc(-50% + ${position.x}px),
                    calc(-50% + ${position.y}px)
                  ) scale(1)`,
            },
          },
        }}
      >
        {/* =====================================================
            MAC OS TITLE BAR
        ====================================================== */}

        <div
          onMouseDown={handleMouseDown}
          className="relative h-[62px] w-full flex items-center px-5 border-b border-white/10 bg-black/20 cursor-grab active:cursor-grabbing overflow-hidden"
        >
          {/* Title bar shine */}
          <div className="title-bar-shine" />

          {/* =====================================================
              MAC BUTTONS
          ====================================================== */}

          <div className="flex items-center gap-2 relative z-10">
            {/* RED - CLOSE */}

            <button
              type="button"
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              className="group mac-btn w-[14px] h-[14px] rounded-full bg-[#ff5f57] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[9px] text-black font-bold">
                ×
              </span>
            </button>

            {/* YELLOW - MINIMIZE */}

            <button
              type="button"
              onClick={handleMinimize}
              onMouseDown={(e) => e.stopPropagation()}
              className="group mac-btn w-[14px] h-[14px] rounded-full bg-[#febc2e] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[9px] text-black font-bold">
                −
              </span>
            </button>

            {/* GREEN - MAXIMIZE */}

            <button
              type="button"
              onClick={handleMaximize}
              onMouseDown={(e) => e.stopPropagation()}
              className="group mac-btn w-[14px] h-[14px] rounded-full bg-[#28c840] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">
                +
              </span>
            </button>
          </div>

          {/* WINDOW TITLE */}

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none z-10">
            <div className="coffee-icon-wrap w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
              <span className="coffee-emoji">☕</span>
            </div>

            <span className="text-sm font-medium text-white/80 title-text">
              Buy Me a Coffee
            </span>
          </div>

          {/* WEBSITE */}

          <div className="ml-auto text-xs text-white/30 font-mono relative z-10">
            almarzan.com
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        {!minimized && (
          <div className="relative h-[calc(100%-62px)] overflow-hidden">
            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-pink-500/30 blur-[150px] pointer-events-none glow-pulse-1" />

            <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-fuchsia-600/30 blur-[150px] pointer-events-none glow-pulse-2" />

            <div className="absolute top-[-200px] right-[-100px] w-[450px] h-[450px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none glow-pulse-3" />

            {/* Soft floating particles */}
            <span className="float-particle fp-1" />
            <span className="float-particle fp-2" />
            <span className="float-particle fp-3" />
            <span className="float-particle fp-4" />
            <span className="float-particle fp-5" />
            <span className="float-particle fp-6" />
            <span className="float-particle fp-7" />
            <span className="float-particle fp-8" />

            {/* =================================================
                CONTENT WRAPPER
            ================================================= */}

            <div className="relative z-10 h-full flex flex-col items-center justify-between px-8 py-7">
              {/* TOP BADGE */}

              <div className="badge-enter flex items-center gap-3 px-5 py-2 rounded-full bg-black/20 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                <div className="badge-shine" />
                <span className="text-pink-300 font-mono text-sm relative z-10">
                  {"<developer />"}
                </span>

                <span className="w-1 h-1 rounded-full bg-white/30 relative z-10 pulse-dot" />

                <span className="text-white/60 text-sm relative z-10">
                  Support My Work
                </span>
              </div>

              {/* =================================================
                  THREE COLUMN AREA
              ================================================= */}

              <div className="w-full flex-1 flex items-center justify-center">
                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-6 items-center">
                  {/* =================================================
                      LEFT VIDEO
                  ================================================= */}

                  <div className="relative h-[350px] lg:h-[480px] rounded-[28px] overflow-hidden border border-white/15 bg-black/30 shadow-2xl video-card video-card-left group">
                    <div className="video-border-glow" />
                    <video
                      src="/gril%201.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover video-img"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-pink-500/10 pointer-events-none" />

                    {/* Scan line */}
                    <div className="video-scan" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 video-label">
                        <p className="text-xs text-white/50 font-mono">
                          animation_01.mp4
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      MAIN COFFEE CARD
                  ================================================= */}

                  <div className="flex justify-center">
                    <div className="w-full max-w-[600px] rounded-[35px] border border-white/15 bg-black/25 backdrop-blur-2xl p-7 md:p-9 shadow-2xl main-card relative overflow-hidden">
                      {/* Card ambient lights */}
                      <div className="card-glow card-glow-1" />
                      <div className="card-glow card-glow-2" />

                      {/* Moving top line */}
                      <div className="card-top-line" />

                      {/* CODE HEADER */}

                      <div className="flex items-center gap-2 mb-6 relative z-10">
                        <span className="w-2 h-2 rounded-full bg-pink-400 header-dot dot-1" />
                        <span className="w-2 h-2 rounded-full bg-purple-400 header-dot dot-2" />
                        <span className="w-2 h-2 rounded-full bg-rose-300 header-dot dot-3" />

                        <span className="ml-auto text-xs font-mono text-white/30">
                          support.jsx
                        </span>
                      </div>

                      {/* COFFEE ICON */}

                      <div className="flex justify-center mb-4 relative z-10">
                        <div className="coffee-icon-box w-20 h-20 rounded-[25px] bg-gradient-to-br from-pink-400/30 to-fuchsia-700/30 border border-white/15 flex items-center justify-center shadow-xl relative overflow-hidden">
                          <div className="icon-shine" />
                          <span className="text-5xl coffee-main-emoji relative z-10">
                            ☕
                          </span>
                        </div>
                      </div>

                      {/* TITLE */}

                      <h1 className="text-center text-4xl md:text-5xl font-black tracking-tight mb-4 relative z-10 title-enter">
                        Buy Me a{" "}
                        <span className="text-pink-300 title-highlight">
                          Coffee
                        </span>
                      </h1>

                      {/* DESCRIPTION */}

                      <p className="text-center text-white/60 leading-relaxed max-w-lg mx-auto mb-6 relative z-10 desc-enter">
                        If you enjoy my web development projects
                        and want to support what I create, you can
                        buy me a coffee.
                      </p>

                      {/* CODE BOX */}

                      <div className="rounded-2xl bg-black/30 border border-white/10 p-4 mb-6 font-mono text-sm relative z-10 code-box overflow-hidden">
                        <div className="code-box-shine" />
                        <div className="flex gap-2 relative z-10">
                          <span className="text-pink-300">
                            const
                          </span>

                          <span className="text-white/80">
                            support
                          </span>

                          <span className="text-white/40">
                            =
                          </span>

                          <span className="text-purple-300">
                            "coffee"
                          </span>

                          <span className="text-white/40">
                            ;
                          </span>
                        </div>

                        <div className="mt-2 text-white/30 relative z-10">
                          // Every contribution helps 🚀
                        </div>
                      </div>

                      {/* =================================================
                          BKASH SECTION
                      ================================================= */}

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        {/* QR CODE */}

                        <div className="relative qr-wrap">
                          <div className="qr-glow" />
                          <div className="p-3 bg-white rounded-2xl shadow-xl qr-box relative overflow-hidden">
                            <div className="qr-shine" />
                            <img
                              src="/icons8-qr-code-94.png"
                              alt="bKash QR Code"
                              className="block w-[155px] h-[155px] object-contain relative z-10"
                            />
                          </div>

                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#e2136e] text-white text-xs font-bold shadow-lg bkash-badge">
                            bKash
                          </div>
                        </div>

                        {/* QR INFORMATION */}

                        <div className="text-center sm:text-left">
                          <p className="text-sm text-white/40 mb-2">
                            Scan to support
                          </p>

                          <p className="text-xl font-bold mb-1">
                            Buy Me a Coffee ☕
                          </p>

                          <p className="text-sm text-white/50 max-w-[220px]">
                            Send your support through bKash
                          </p>
                        </div>
                      </div>

                      {/* BUY BUTTON */}

                      <a
                        href="https://www.buymeacoffee.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 w-full h-14 rounded-2xl bg-white text-pink-600 flex items-center justify-center gap-3 font-bold text-lg shadow-xl hover:bg-pink-50 hover:scale-[1.02] transition-all duration-300 relative z-10 buy-btn overflow-hidden"
                      >
                        <span className="btn-shine" />
                        <span className="relative z-10">☕ Buy Me a Coffee</span>
                        <span className="text-sm relative z-10">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* =================================================
                      RIGHT VIDEO
                  ================================================= */}

                  <div className="relative h-[350px] lg:h-[480px] rounded-[28px] overflow-hidden border border-white/15 bg-black/30 shadow-2xl video-card video-card-right group">
                    <div className="video-border-glow" />
                    <video
                      src="/gril%202.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover video-img"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-pink-500/10 pointer-events-none" />

                    {/* Scan line */}
                    <div className="video-scan scan-delay" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 video-label">
                        <p className="text-xs text-white/50 font-mono">
                          animation_02.mp4
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <div className="flex flex-col items-center gap-2 footer-enter">
                <p className="text-sm text-white/50">
                  Thank you for supporting my work ❤️
                </p>

                <div className="flex items-center gap-2 text-[11px] text-white/25 font-mono">
                  <span className="tech-item">HTML</span>
                  <span>•</span>
                  <span className="tech-item">CSS</span>
                  <span>•</span>
                  <span className="tech-item">React</span>
                  <span>•</span>
                  <span className="tech-item">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            ANIMATION STYLES
        ====================================================== */}

        <style>{`
          /* Title bar shine */
          .title-bar-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.06),
              transparent
            );
            animation: titleShine 6s ease-in-out infinite;
            pointer-events: none;
          }

          @keyframes titleShine {
            0% { left: -100%; }
            40% { left: 140%; }
            100% { left: 140%; }
          }

          /* Mac buttons subtle pulse */
          .mac-btn {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .mac-btn:hover {
            box-shadow: 0 0 10px rgba(255,255,255,0.25);
          }

          /* Coffee icon in title */
          .coffee-icon-wrap {
            animation: iconFloat 3.5s ease-in-out infinite;
          }

          .coffee-emoji {
            display: inline-block;
            animation: emojiWiggle 4s ease-in-out infinite;
          }

          @keyframes iconFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }

          @keyframes emojiWiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-6deg); }
            75% { transform: rotate(6deg); }
          }

          .title-text {
            animation: titleGlow 4s ease-in-out infinite;
          }

          @keyframes titleGlow {
            0%, 100% { text-shadow: 0 0 0 transparent; }
            50% { text-shadow: 0 0 12px rgba(255,182,193,0.25); }
          }

          /* Background glow pulses */
          .glow-pulse-1 {
            animation: glowPulse 8s ease-in-out infinite;
          }

          .glow-pulse-2 {
            animation: glowPulse 9s ease-in-out 2s infinite;
          }

          .glow-pulse-3 {
            animation: glowPulse 7s ease-in-out 1s infinite;
          }

          @keyframes glowPulse {
            0%, 100% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.08);
            }
          }

          /* Floating particles */
          .float-particle {
            position: absolute;
            width: 3px;
            height: 3px;
            border-radius: 999px;
            background: rgba(255,182,193,0.5);
            box-shadow: 0 0 8px rgba(255,105,180,0.4);
            pointer-events: none;
            animation: particleFloat 9s ease-in-out infinite;
          }

          .fp-1 { left: 8%; top: 20%; animation-delay: 0s; }
          .fp-2 { left: 22%; top: 65%; animation-delay: 1.2s; }
          .fp-3 { left: 45%; top: 12%; animation-delay: 2.4s; }
          .fp-4 { left: 68%; top: 55%; animation-delay: 0.8s; }
          .fp-5 { left: 85%; top: 28%; animation-delay: 3s; }
          .fp-6 { left: 15%; top: 80%; animation-delay: 1.8s; }
          .fp-7 { left: 55%; top: 75%; animation-delay: 2.8s; }
          .fp-8 { left: 78%; top: 18%; animation-delay: 0.4s; }

          @keyframes particleFloat {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.5);
            }
            20% {
              opacity: 0.8;
            }
            50% {
              opacity: 0.6;
              transform: translateY(-40px) scale(1.2);
            }
            80% {
              opacity: 0.4;
            }
            100% {
              opacity: 0;
              transform: translateY(-80px) scale(0.4);
            }
          }

          /* Badge */
          .badge-enter {
            animation: badgeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
          }

          @keyframes badgeIn {
            from {
              opacity: 0;
              transform: translateY(-12px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .badge-shine {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              105deg,
              transparent 30%,
              rgba(255,255,255,0.08),
              transparent 70%
            );
            animation: badgeShine 5s ease-in-out infinite;
          }

          @keyframes badgeShine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }

          .pulse-dot {
            animation: pulseDot 2s ease-in-out infinite;
          }

          @keyframes pulseDot {
            0%, 100% {
              transform: scale(1);
              opacity: 0.4;
            }
            50% {
              transform: scale(1.6);
              opacity: 1;
            }
          }

          /* Video cards */
          .video-card {
            animation: videoEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
            transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
          }

          .video-card-left {
            animation-delay: 0.25s;
          }

          .video-card-right {
            animation-delay: 0.4s;
          }

          @keyframes videoEnter {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .video-card:hover {
            transform: translateY(-6px);
            border-color: rgba(255,182,193,0.35);
            box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(255,105,180,0.15);
          }

          .video-border-glow {
            position: absolute;
            inset: -1px;
            border-radius: 28px;
            background: linear-gradient(
              135deg,
              rgba(255,105,180,0.25),
              transparent 40%,
              transparent 60%,
              rgba(255,20,147,0.2)
            );
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
            z-index: 5;
          }

          .video-card:hover .video-border-glow {
            opacity: 1;
          }

          .video-img {
            transition: transform 0.6s ease;
          }

          .video-card:hover .video-img {
            transform: scale(1.04);
          }

          .video-scan {
            position: absolute;
            left: 0;
            top: -5%;
            width: 100%;
            height: 2px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,182,193,0.5),
              transparent
            );
            box-shadow: 0 0 12px rgba(255,105,180,0.4);
            animation: videoScan 5s ease-in-out infinite;
            pointer-events: none;
            z-index: 6;
          }

          .video-scan.scan-delay {
            animation-delay: 2.5s;
          }

          @keyframes videoScan {
            0% {
              top: -5%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              top: 105%;
              opacity: 0;
            }
          }

          .video-label {
            transition: transform 0.3s ease, background 0.3s ease;
          }

          .video-card:hover .video-label {
            transform: translateY(-2px);
            background: rgba(0,0,0,0.45);
          }

          /* Main card */
          .main-card {
            animation: mainCardEnter 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }

          @keyframes mainCardEnter {
            from {
              opacity: 0;
              transform: translateY(35px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .card-glow {
            position: absolute;
            border-radius: 999px;
            filter: blur(50px);
            pointer-events: none;
          }

          .card-glow-1 {
            width: 180px;
            height: 180px;
            top: -60px;
            right: -40px;
            background: rgba(255,105,180,0.15);
            animation: cardGlow 6s ease-in-out infinite;
          }

          .card-glow-2 {
            width: 150px;
            height: 150px;
            bottom: -50px;
            left: -30px;
            background: rgba(168,85,247,0.12);
            animation: cardGlow 7s ease-in-out 1.5s infinite;
          }

          @keyframes cardGlow {
            0%, 100% {
              opacity: 0.5;
              transform: scale(0.9);
            }
            50% {
              opacity: 1;
              transform: scale(1.15);
            }
          }

          .card-top-line {
            position: absolute;
            top: 0;
            left: -100px;
            width: 120px;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,182,193,0.7),
              transparent
            );
            animation: cardLine 4.5s ease-in-out infinite;
          }

          @keyframes cardLine {
            0% { left: -120px; }
            50% { left: 100%; }
            100% { left: 100%; }
          }

          /* Header dots */
          .header-dot {
            animation: headerDot 2.2s ease-in-out infinite;
          }

          .dot-1 { animation-delay: 0s; }
          .dot-2 { animation-delay: 0.25s; }
          .dot-3 { animation-delay: 0.5s; }

          @keyframes headerDot {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.35);
              opacity: 1;
            }
          }

          /* Coffee icon box */
          .coffee-icon-box {
            animation: iconBoxFloat 4s ease-in-out infinite;
          }

          @keyframes iconBoxFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          .icon-shine {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              120deg,
              transparent 30%,
              rgba(255,255,255,0.2),
              transparent 70%
            );
            animation: iconShine 4s ease-in-out infinite;
          }

          @keyframes iconShine {
            0% { transform: translateX(-100%); }
            40% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }

          .coffee-main-emoji {
            display: inline-block;
            animation: mainEmoji 3.5s ease-in-out infinite;
          }

          @keyframes mainEmoji {
            0%, 100% { transform: scale(1) rotate(0deg); }
            30% { transform: scale(1.08) rotate(-4deg); }
            70% { transform: scale(1.05) rotate(4deg); }
          }

          /* Title + description */
          .title-enter {
            animation: textIn 0.7s ease 0.45s both;
          }

          .title-highlight {
            animation: highlightGlow 3.5s ease-in-out infinite;
          }

          @keyframes highlightGlow {
            0%, 100% {
              text-shadow: 0 0 0 transparent;
            }
            50% {
              text-shadow: 0 0 20px rgba(255,182,193,0.4);
            }
          }

          .desc-enter {
            animation: textIn 0.7s ease 0.55s both;
          }

          @keyframes textIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Code box */
          .code-box {
            animation: textIn 0.7s ease 0.65s both;
          }

          .code-box-shine {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              100deg,
              transparent 40%,
              rgba(255,255,255,0.04),
              transparent 60%
            );
            animation: codeShine 5s ease-in-out infinite;
          }

          @keyframes codeShine {
            0% { transform: translateX(-80%); }
            50% { transform: translateX(80%); }
            100% { transform: translateX(80%); }
          }

          /* QR */
          .qr-wrap {
            animation: qrEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
          }

          @keyframes qrEnter {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(15px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .qr-glow {
            position: absolute;
            inset: -15px;
            border-radius: 24px;
            background: radial-gradient(
              circle,
              rgba(226,19,110,0.25),
              transparent 70%
            );
            filter: blur(15px);
            animation: qrGlow 3s ease-in-out infinite;
            pointer-events: none;
          }

          @keyframes qrGlow {
            0%, 100% {
              opacity: 0.5;
              transform: scale(0.95);
            }
            50% {
              opacity: 1;
              transform: scale(1.08);
            }
          }

          .qr-box {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .qr-wrap:hover .qr-box {
            transform: scale(1.03);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          }

          .qr-shine {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              125deg,
              transparent 35%,
              rgba(255,255,255,0.25),
              transparent 65%
            );
            animation: qrShine 4.5s ease-in-out infinite;
          }

          @keyframes qrShine {
            0% { transform: translateX(-100%); }
            40% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }

          .bkash-badge {
            animation: badgePulse 2.5s ease-in-out infinite;
          }

          @keyframes badgePulse {
            0%, 100% {
              box-shadow: 0 4px 12px rgba(226,19,110,0.4);
            }
            50% {
              box-shadow: 0 4px 20px rgba(226,19,110,0.7);
            }
          }

          /* Buy button */
          .buy-btn {
            animation: textIn 0.7s ease 0.85s both;
          }

          .btn-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.35),
              transparent
            );
            animation: btnShine 3.5s ease-in-out infinite;
          }

          @keyframes btnShine {
            0% { left: -100%; }
            40% { left: 150%; }
            100% { left: 150%; }
          }

          /* Footer */
          .footer-enter {
            animation: footerIn 0.7s ease 0.9s both;
          }

          @keyframes footerIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .tech-item {
            transition: color 0.3s ease;
          }

          .tech-item:hover {
            color: rgba(255,182,193,0.7);
          }
        `}</style>
      </Box>
    </Modal>
  );
};

export default Coffee;