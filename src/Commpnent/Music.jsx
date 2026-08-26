import React, { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { CiClock2 } from "react-icons/ci";
import {
  FaMusic,
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";

const Music = ({ open, onClose }) => {
  const AllMusic = [
    {
      title: "50 Cent - In Da Club",
      artist: "50 Cent",
      file: "/Allmusic/50 Cent - In Da Club (Official Music Video).mp3",
    },
    {
      title: "Coolio - Gangsta's Paradise",
      artist: "Coolio ft. L.V.",
      file: "/Allmusic/Coolio - Gangsta's Paradise (feat. L.V.) [Official Music Video].mp3",
    },
    {
      title: "Imagine Dragons - Believer",
      artist: "Imagine Dragons",
      file: "/Allmusic/Imagine Dragons - Believer (Official Music Video).mp3",
    },
    {
      title: "KALEO - Way Down We Go",
      artist: "KALEO",
      file: "/Allmusic/KALEO - Way Down We Go (Official Music Video).mp3",
    },
    {
      title: "Purnota ｜｜ পূর্ণতা",
      artist: "Warfaze",
      file: "/Allmusic/Purnota ｜｜ পূর্ণতা ｜｜ Warfaze ｜｜Album： Shotto..mp3",
    },
    {
      title: "Shironamhin ｜ Ei Obelay",
      artist: "Shironamhin",
      file: "/Allmusic/Shironamhin ｜ Ei Obelay ｜ Official Music Video.mp3",
    },
    {
      title: "Tame Impala - The Less I Know The Better",
      artist: "Tame Impala",
      file: "/Allmusic/Tame Impala - The Less I Know The Better (Audio).mp3",
    },
    {
      title: "The Weeknd - After Hours",
      artist: "The Weeknd",
      file: "/Allmusic/The Weeknd - After Hours (Audio).mp3",
    },
    {
      title: "তুমি এত সহজে ভুলতে পারো",
      artist: "Obosthan",
      file: "/Allmusic/তুমি এত সহজে ভুলতে পারো ｜｜ Tumi Eto Sohoje Vulte Paro ｜｜ Obosthan ｜｜ Lyrics ⧸ Bangla Song ⧸ SA Music.mp3",
    },
    {
      title: "লাল শাড়ি",
      artist: "Shohag",
      file: "/Allmusic/songfix.mp3",
    },
    {
      title: "𝑺𝒕𝒆𝒓𝒆𝒐 𝒍𝒐𝒗𝒆",
      artist: "Unknown",
      file: "/Allmusic/𝑺𝒕𝒆𝒓𝒆𝒐 𝒍𝒐𝒗𝒆.mp3",
    },
    {
      title: "আমার দেহখান",
      artist: "Odd Signature",
      file: "/Allmusic/＂ আমার দেহখান ＂ ｜ Amar Dehokhan ｜ Odd Signature ｜ Lyrics Video.mp3",
    },
  ];

  // ==============================
  // WINDOW STATES
  // ==============================

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);

  // ==============================
  // MUSIC STATES
  // ==============================

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const currentSong = AllMusic[currentIndex];

  // ==============================
  // DRAG
  // ==============================

  const dragOffset = useRef({
    x: 0,
    y: 0,
  });

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

  // ==============================
  // CLOSE
  // ==============================

  const handleClose = (e) => {
    e.stopPropagation();

    if (audioRef.current) {
      audioRef.current.pause();
    }

    setIsPlaying(false);
    setDragging(false);
    setMaximized(false);
    setMinimized(false);

    setPosition({
      x: 0,
      y: 0,
    });

    onClose();
  };

  // ==============================
  // MINIMIZE
  // ==============================

  const handleMinimize = (e) => {
    e.stopPropagation();

    setMinimized((prev) => !prev);
  };

  // ==============================
  // MAXIMIZE
  // ==============================

  const handleMaximize = (e) => {
    e.stopPropagation();

    setMaximized((prev) => !prev);
    setMinimized(false);

    setPosition({
      x: 0,
      y: 0,
    });
  };

  // ==============================
  // FORMAT TIME
  // ==============================

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // ==============================
  // PLAY / PAUSE
  // ==============================

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log("Audio error:", error);
      });
    }
  };

  // ==============================
  // SELECT SONG
  // ==============================

  const selectSong = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  // ==============================
  // NEXT SONG
  // ==============================

  const nextSong = () => {
    const nextIndex =
      currentIndex === AllMusic.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  // ==============================
  // PREVIOUS SONG
  // ==============================

  const previousSong = () => {
    const previousIndex =
      currentIndex === 0
        ? AllMusic.length - 1
        : currentIndex - 1;

    setCurrentIndex(previousIndex);
    setIsPlaying(true);
  };

  // ==============================
  // WHEN SONG CHANGES
  // ==============================

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((error) => {
          console.log("Audio play error:", error);
        });
    }
  }, [currentIndex]);

  // ==============================
  // AUDIO EVENTS
  // ==============================

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;

    setDuration(audioRef.current.duration);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSongEnded = () => {
    nextSong();
  };

  const handleSeek = (e) => {
    const value = Number(e.target.value);

    if (!audioRef.current) return;

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="music-modal"
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

          width: maximized ? "100vw" : "min(1500px, 95vw)",

          height: maximized
            ? "100vh"
            : minimized
            ? "62px"
            : "min(820px, 92vh)",

          background: "rgba(8, 8, 15, 0.65)",

          color: "#fff",

          border: "1px solid rgba(255,255,255,0.15)",

          borderRadius: maximized ? "0px" : "22px",

          boxShadow:
            "0 30px 100px rgba(0,0,0,0.7), 0 0 80px rgba(99,102,241,0.15)",

          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",

          overflow: "hidden",
          outline: "none",

          userSelect: dragging ? "none" : "auto",

          transition: dragging
            ? "none"
            : "width 0.3s ease, height 0.3s ease, border-radius 0.3s ease",

          animation:
            "musicWindowOpen 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",

          "@keyframes musicWindowOpen": {
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
        {/* ==============================
            MAC TITLE BAR
        ============================== */}

        <div
          onMouseDown={handleMouseDown}
          className="relative h-[62px] w-full flex items-center px-5 border-b border-white/[0.08] bg-black/30 cursor-grab active:cursor-grabbing overflow-hidden"
        >
          {/* Title bar shine */}
          <div className="music-title-shine" />

          <div className="flex items-center gap-2 relative z-10">
            {/* RED */}

            <button
              type="button"
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              className="group mac-btn w-[14px] h-[14px] rounded-full bg-[#ff5f57] flex items-center justify-center hover:scale-125 transition-all duration-200"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[9px] text-black font-bold">
                ×
              </span>
            </button>

            {/* YELLOW */}

            <button
              type="button"
              onClick={handleMinimize}
              onMouseDown={(e) => e.stopPropagation()}
              className="group mac-btn w-[14px] h-[14px] rounded-full bg-[#febc2e] flex items-center justify-center hover:scale-125 transition-all duration-200"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[9px] text-black font-bold">
                −
              </span>
            </button>

            {/* GREEN */}

            <button
              type="button"
              onClick={handleMaximize}
              onMouseDown={(e) => e.stopPropagation()}
              className="group mac-btn w-[14px] h-[14px] rounded-full bg-[#28c840] flex items-center justify-center hover:scale-125 transition-all duration-200"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">
                +
              </span>
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium flex items-center gap-2 z-10">
            <span className="music-title-icon">
              <FaMusic className="text-purple-300 text-xs" />
            </span>
            <span className="music-title-text">Music</span>
          </div>
        </div>

        {!minimized && (
          <div className="flex h-[calc(100%-62px)]">
            {/* ==============================
                SIDEBAR
            ============================== */}

            <div className="w-[300px] shrink-0 h-full bg-gradient-to-b from-black/90 via-purple-950/30 to-black/95 border-r border-white/[0.08] backdrop-blur-2xl relative overflow-hidden">
              {/* Sidebar soft glow */}
              <div className="sidebar-glow" />

              <div className="px-5 pt-6 relative z-10">
                <div className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase sidebar-label">
                  Apple Music
                </div>
              </div>

              <div className="mt-5 px-4 relative z-10">
                <button className="sidebar-btn w-full h-11 px-4 rounded-xl hover:bg-white/[0.08] transition-all duration-200 flex items-center text-white/80 hover:text-white group">
                  <CiClock2 className="mr-3 text-xl group-hover:text-purple-300 transition-colors" />
                  <span className="text-sm font-medium">
                    Listen Now
                  </span>
                </button>
              </div>

              <div className="px-5 mt-7 text-white/40 text-xs font-semibold tracking-[0.2em] relative z-10 sidebar-label">
                LIBRARY
              </div>

              <div className="mt-3 px-4 relative z-10">
                <button className="sidebar-btn active-nav w-full h-11 px-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/10 border border-purple-400/10 text-white flex items-center relative overflow-hidden">
                  <div className="nav-shine" />
                  <FaMusic className="mr-3 text-purple-300 relative z-10" />
                  <span className="text-sm font-medium relative z-10">
                    Songs
                  </span>
                </button>
              </div>

              <div className="mt-2 px-4 relative z-10">
                <button className="sidebar-btn w-full h-11 px-4 rounded-xl hover:bg-white/[0.08] transition-all duration-200 flex items-center text-white/60 hover:text-white group">
                  <FaMusic className="mr-3 group-hover:text-blue-300 transition-colors" />
                  <span className="text-sm font-medium">
                    Playlists
                  </span>
                </button>
              </div>
            </div>

            {/* ==============================
                MUSIC AREA
            ============================== */}

            <div className="relative flex-1 min-w-0 h-full overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-blue-950/30">
              {/* GLOW */}

              <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none glow-a" />

              <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none glow-b" />

              <div className="absolute top-1/2 right-10 w-[200px] h-[200px] rounded-full bg-pink-600/5 blur-[80px] pointer-events-none glow-c" />

              {/* Soft particles */}
              <span className="music-particle mp-1" />
              <span className="music-particle mp-2" />
              <span className="music-particle mp-3" />
              <span className="music-particle mp-4" />
              <span className="music-particle mp-5" />
              <span className="music-particle mp-6" />

              {/* HEADER */}

              <div className="relative px-8 pt-8 header-enter">
                <p className="text-xs uppercase tracking-[0.3em] text-purple-300/50 mb-3">
                  Your Library
                </p>

                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-100 to-blue-300 bg-clip-text text-transparent header-title">
                  Coding Focus
                </h1>

                <p className="mt-2 text-sm text-white/30">
                  Deep focus tracks to get you in the zone.
                </p>
              </div>

              {/* SONG LIST */}

              <div className="relative px-8 mt-8 h-[calc(100%-260px)] overflow-y-auto song-list-scroll">
                <div className="grid grid-cols-[55px_minmax(0,1fr)_100px] px-4 pb-3 border-b border-white/[0.06] text-[10px] uppercase tracking-[0.2em] text-white/25">
                  <span>#</span>
                  <span>Song</span>
                  <span className="text-right">Time</span>
                </div>

                {AllMusic.map((music, index) => {
                  const selected = currentIndex === index;

                  return (
                    <div
                      key={index}
                      onClick={() => selectSong(index)}
                      className={`
                        group relative grid grid-cols-[55px_minmax(0,1fr)_100px]
                        items-center min-h-[68px] px-4 rounded-2xl
                        cursor-pointer transition-all duration-300 song-row
                        ${
                          selected
                            ? "bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-transparent border border-purple-400/20 selected-row"
                            : "border border-transparent hover:bg-white/[0.05] hover:border-white/[0.06]"
                        }
                      `}
                      style={{
                        animationDelay: `${0.05 * index}s`,
                      }}
                    >
                      {/* NUMBER / EQUALIZER */}

                      <div className="flex items-center">
                        {selected && isPlaying ? (
                          <div className="flex items-end gap-[2px] h-5 equalizer">
                            <span className="eq-bar eq-1" />
                            <span className="eq-bar eq-2" />
                            <span className="eq-bar eq-3" />
                            <span className="eq-bar eq-4" />
                          </div>
                        ) : (
                          <>
                            <span className="text-sm text-white/30 group-hover:hidden">
                              {index + 1}
                            </span>

                            <FaPlay className="hidden group-hover:block text-xs text-white play-hover-icon" />
                          </>
                        )}
                      </div>

                      {/* INFO */}

                      <div className="min-w-0">
                        <h2
                          className={`truncate text-sm font-medium ${
                            selected
                              ? "text-white"
                              : "text-white/75 group-hover:text-white"
                          }`}
                        >
                          {music.title}
                        </h2>

                        <p className="truncate mt-1 text-xs text-white/30">
                          {music.artist}
                        </p>
                      </div>

                      {/* DURATION */}

                      <div className="text-right text-xs text-white/30">
                        {selected && duration
                          ? formatTime(duration)
                          : "--:--"}
                      </div>

                      {/* Selected left accent */}
                      {selected && (
                        <div className="selected-accent" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* ==============================
                  PLAYER
              ============================== */}

              <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-black/70 backdrop-blur-2xl border-t border-white/[0.08] px-8 player-bar">
                {/* Player top line */}
                <div className="player-top-line" />

                {/* PROGRESS */}

                <div className="flex items-center gap-3 pt-4 relative z-10">
                  <span className="text-[10px] text-white/30 w-10">
                    {formatTime(currentTime)}
                  </span>

                  <div className="flex-1 relative progress-wrap">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full accent-purple-500 cursor-pointer progress-input"
                    />
                    {/* Soft glow under progress when playing */}
                    {isPlaying && (
                      <div className="progress-glow" />
                    )}
                  </div>

                  <span className="text-[10px] text-white/30 w-10 text-right">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* PLAYER CONTROLS */}

                <div className="flex items-center justify-between mt-4 relative z-10">
                  {/* SONG */}

                  <div className="flex items-center gap-3 w-[280px] min-w-0">
                    <div
                      className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.3)] album-art ${
                        isPlaying ? "album-spinning" : ""
                      }`}
                    >
                      <FaMusic className="text-white text-sm" />
                      {isPlaying && <div className="album-ring" />}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white truncate now-playing-title">
                        {currentSong.title}
                      </p>

                      <p className="text-xs text-white/35 mt-1 truncate">
                        {currentSong.artist}
                      </p>
                    </div>
                  </div>

                  {/* CONTROLS */}

                  <div className="flex items-center gap-7">
                    {/* PREVIOUS */}

                    <button
                      onClick={previousSong}
                      className="control-btn text-white/50 hover:text-white transition-all"
                    >
                      <FaStepBackward />
                    </button>

                    {/* PLAY */}

                    <button
                      onClick={togglePlay}
                      className={`w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all shadow-[0_0_30px_rgba(168,85,247,0.35)] play-btn ${
                        isPlaying ? "play-active" : ""
                      }`}
                    >
                      {isPlaying ? (
                        <FaPause className="text-sm" />
                      ) : (
                        <FaPlay className="text-sm ml-[2px]" />
                      )}
                      {isPlaying && (
                        <>
                          <span className="play-ring" />
                          <span className="play-ring play-ring-delay" />
                        </>
                      )}
                    </button>

                    {/* NEXT */}

                    <button
                      onClick={nextSong}
                      className="control-btn text-white/50 hover:text-white transition-all"
                    >
                      <FaStepForward />
                    </button>
                  </div>

                  {/* EMPTY RIGHT SPACE */}

                  <div className="w-[280px]" />
                </div>
              </div>

              {/* AUDIO */}

              <audio
                ref={audioRef}
                src={currentSong.file}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleSongEnded}
              />
            </div>
          </div>
        )}

        {/* ==============================
            ANIMATION STYLES
        ============================== */}

        <style>{`
          /* Title bar */
          .music-title-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 55%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.05),
              transparent
            );
            animation: musicTitleShine 7s ease-in-out infinite;
            pointer-events: none;
          }

          @keyframes musicTitleShine {
            0% { left: -100%; }
            35% { left: 140%; }
            100% { left: 140%; }
          }

          .mac-btn:hover {
            box-shadow: 0 0 10px rgba(255,255,255,0.2);
          }

          .music-title-icon {
            display: inline-flex;
            animation: titleIconPulse 3s ease-in-out infinite;
          }

          @keyframes titleIconPulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.15); opacity: 1; }
          }

          .music-title-text {
            animation: titleTextGlow 4s ease-in-out infinite;
          }

          @keyframes titleTextGlow {
            0%, 100% { text-shadow: 0 0 0 transparent; }
            50% { text-shadow: 0 0 12px rgba(167,139,250,0.3); }
          }

          /* Sidebar */
          .sidebar-glow {
            position: absolute;
            top: 20%;
            left: -40%;
            width: 180px;
            height: 180px;
            border-radius: 999px;
            background: rgba(139,92,246,0.12);
            filter: blur(50px);
            animation: sidebarGlow 8s ease-in-out infinite;
            pointer-events: none;
          }

          @keyframes sidebarGlow {
            0%, 100% { opacity: 0.4; transform: scale(0.9); }
            50% { opacity: 0.9; transform: scale(1.15); }
          }

          .sidebar-label {
            animation: labelFade 0.6s ease both;
          }

          @keyframes labelFade {
            from { opacity: 0; transform: translateX(-8px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .sidebar-btn {
            transition: transform 0.25s ease, background 0.25s ease;
          }

          .sidebar-btn:hover {
            transform: translateX(4px);
          }

          .active-nav {
            box-shadow: 0 0 20px rgba(139,92,246,0.15);
          }

          .nav-shine {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              105deg,
              transparent 30%,
              rgba(255,255,255,0.06),
              transparent 70%
            );
            animation: navShine 5s ease-in-out infinite;
          }

          @keyframes navShine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }

          /* Main area glows */
          .glow-a {
            animation: mainGlow 9s ease-in-out infinite;
          }

          .glow-b {
            animation: mainGlow 10s ease-in-out 2s infinite;
          }

          .glow-c {
            animation: mainGlow 7s ease-in-out 1s infinite;
          }

          @keyframes mainGlow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }

          /* Particles */
          .music-particle {
            position: absolute;
            width: 2px;
            height: 2px;
            border-radius: 999px;
            background: rgba(167,139,250,0.5);
            box-shadow: 0 0 8px rgba(139,92,246,0.4);
            pointer-events: none;
            animation: musicParticle 10s ease-in-out infinite;
          }

          .mp-1 { left: 12%; top: 25%; animation-delay: 0s; }
          .mp-2 { left: 35%; top: 15%; animation-delay: 1.5s; }
          .mp-3 { left: 60%; top: 30%; animation-delay: 3s; }
          .mp-4 { left: 80%; top: 20%; animation-delay: 0.8s; }
          .mp-5 { left: 25%; top: 55%; animation-delay: 2.2s; }
          .mp-6 { left: 70%; top: 50%; animation-delay: 4s; }

          @keyframes musicParticle {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.5);
            }
            20% { opacity: 0.8; }
            50% {
              opacity: 0.5;
              transform: translateY(-35px) scale(1.2);
            }
            80% { opacity: 0.3; }
            100% {
              opacity: 0;
              transform: translateY(-70px) scale(0.4);
            }
          }

          /* Header */
          .header-enter {
            animation: headerIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
          }

          @keyframes headerIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .header-title {
            animation: titleShimmer 5s ease-in-out infinite;
          }

          @keyframes titleShimmer {
            0%, 100% {
              filter: brightness(1);
            }
            50% {
              filter: brightness(1.15);
            }
          }

          /* Song rows */
          .song-row {
            animation: songRowIn 0.5s ease both;
            position: relative;
          }

          @keyframes songRowIn {
            from {
              opacity: 0;
              transform: translateX(-12px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .song-row:hover {
            transform: translateX(3px);
          }

          .selected-row {
            box-shadow: 0 0 25px rgba(139,92,246,0.08);
          }

          .selected-accent {
            position: absolute;
            left: 0;
            top: 20%;
            bottom: 20%;
            width: 3px;
            border-radius: 0 4px 4px 0;
            background: linear-gradient(
              to bottom,
              rgb(167,139,250),
              rgb(96,165,250)
            );
            animation: accentPulse 2s ease-in-out infinite;
          }

          @keyframes accentPulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }

          /* Equalizer */
          .equalizer {
            display: flex;
            align-items: flex-end;
            gap: 2px;
            height: 16px;
          }

          .eq-bar {
            width: 2.5px;
            border-radius: 999px;
            background: rgb(167,139,250);
            box-shadow: 0 0 6px rgba(139,92,246,0.5);
          }

          .eq-1 {
            animation: eqAnim 0.45s ease-in-out infinite alternate;
          }
          .eq-2 {
            animation: eqAnim 0.35s ease-in-out 0.1s infinite alternate;
          }
          .eq-3 {
            animation: eqAnim 0.55s ease-in-out 0.15s infinite alternate;
          }
          .eq-4 {
            animation: eqAnim 0.4s ease-in-out 0.05s infinite alternate;
          }

          @keyframes eqAnim {
            0% { height: 4px; }
            100% { height: 16px; }
          }

          .play-hover-icon {
            animation: playIconPop 0.25s ease;
          }

          @keyframes playIconPop {
            from { transform: scale(0.7); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          /* Player bar */
          .player-bar {
            animation: playerIn 0.6s ease 0.3s both;
          }

          @keyframes playerIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .player-top-line {
            position: absolute;
            top: 0;
            left: -100px;
            width: 120px;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(167,139,250,0.6),
              transparent
            );
            animation: playerLine 5s ease-in-out infinite;
          }

          @keyframes playerLine {
            0% { left: -120px; }
            50% { left: 100%; }
            100% { left: 100%; }
          }

          /* Progress */
          .progress-wrap {
            position: relative;
          }

          .progress-glow {
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            height: 6px;
            transform: translateY(-50%);
            background: rgba(139,92,246,0.2);
            filter: blur(6px);
            pointer-events: none;
            animation: progressGlow 2s ease-in-out infinite;
          }

          @keyframes progressGlow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }

          /* Album art */
          .album-art {
            position: relative;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .album-art.album-spinning {
            box-shadow: 0 0 30px rgba(139,92,246,0.45);
            animation: albumPulse 2.5s ease-in-out infinite;
          }

          @keyframes albumPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .album-ring {
            position: absolute;
            inset: -4px;
            border-radius: 14px;
            border: 1px solid rgba(167,139,250,0.4);
            animation: albumRing 1.8s ease-out infinite;
            pointer-events: none;
          }

          @keyframes albumRing {
            0% {
              transform: scale(0.95);
              opacity: 1;
            }
            100% {
              transform: scale(1.35);
              opacity: 0;
            }
          }

          .now-playing-title {
            animation: nowPlaying 3.5s ease-in-out infinite;
          }

          @keyframes nowPlaying {
            0%, 100% { text-shadow: 0 0 0 transparent; }
            50% { text-shadow: 0 0 10px rgba(167,139,250,0.25); }
          }

          /* Controls */
          .control-btn {
            transition: transform 0.25s ease, color 0.25s ease, filter 0.25s ease;
          }

          .control-btn:hover {
            transform: scale(1.2);
            filter: drop-shadow(0 0 6px rgba(167,139,250,0.4));
          }

          .control-btn:active {
            transform: scale(0.9);
          }

          .play-btn {
            position: relative;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          }

          .play-btn:hover {
            transform: scale(1.12);
            box-shadow: 0 0 40px rgba(168,85,247,0.5);
          }

          .play-btn:active {
            transform: scale(0.92);
          }

          .play-btn.play-active {
            box-shadow: 0 0 35px rgba(139,92,246,0.5);
          }

          .play-ring {
            position: absolute;
            inset: -5px;
            border-radius: 999px;
            border: 1px solid rgba(167,139,250,0.45);
            animation: playRingOut 1.6s ease-out infinite;
            pointer-events: none;
          }

          .play-ring-delay {
            animation-delay: 0.5s;
            opacity: 0.6;
          }

          @keyframes playRingOut {
            0% {
              transform: scale(0.9);
              opacity: 1;
            }
            100% {
              transform: scale(1.55);
              opacity: 0;
            }
          }
        `}</style>
      </Box>
    </Modal>
  );
};

export default Music;