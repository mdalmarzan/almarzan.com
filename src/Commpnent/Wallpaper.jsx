import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Wallpaper = ({ open, onClose }) => {
  // ==========================================
  // DEFAULT WALLPAPERS
  // ==========================================
  const DefaultWallpaper = [
    { source: "/Wallpaper/img10.mp4", id: "1", type: "video" },
    { source: "/Wallpaper/img7.mp4", id: "2", type: "video" },
    { source: "/Wallpaper/img3.mp4", id: "3", type: "video" },
  
   
    { source: "/Wallpaper/img2.mp4", id: "6", type: "video" },
 
  
    { source: "/Wallpaper/img6.mp4", id: "9", type: "video" },
    { source: "/Wallpaper/img5.mp4", id: "9", type: "video" },
  ];

  // ==========================================
  // WALLPAPER STATE
  // ==========================================
  const [AllWallpaper, setAllWallpaper] = useState(DefaultWallpaper);
  const [Wallpaper, setWallpaper] = useState(DefaultWallpaper[0]);

  // ==========================================
  // FILE INPUT
  // ==========================================
  const fileInputRef = useRef(null);

  // ==========================================
  // WINDOW STATES
  // ==========================================
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // ==========================================
  // CHANGE WALLPAPER
  // ==========================================
  const WallpaperChange = (newWallpaper) => {
    setWallpaper(newWallpaper);
  };

  // ==========================================
  // UPLOAD BUTTON
  // ==========================================
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // ==========================================
  // HANDLE UPLOAD
  // ==========================================
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (
      !file.type.startsWith("image/") &&
      !file.type.startsWith("video/")
    ) {
      alert("Please upload an image or video wallpaper.");
      return;
    }

    const fileURL = URL.createObjectURL(file);
    const newWallpaper = {
      source: fileURL,
      id: `uploaded-${Date.now()}`,
      type: file.type.startsWith("video/") ? "video" : "image",
      name: file.name,
      uploaded: true,
    };

    setAllWallpaper((prev) => [...prev, newWallpaper]);
    setWallpaper(newWallpaper);
    e.target.value = "";
  };

  // ==========================================
  // FULL PAGE BACKGROUND VIDEO
  // ==========================================
  useEffect(() => {
    if (Wallpaper.type !== "video") return;
    const video = document.getElementById("global-wallpaper-video");
    if (video) {
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [Wallpaper]);

  // ==========================================
  // DRAG START
  // ==========================================
  const handleMouseDown = (e) => {
    if (maximized) return;
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  // ==========================================
  // DRAG MOVE
  // ==========================================
  const handleMouseMove = (e) => {
    if (!dragging || maximized) return;
    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  // ==========================================
  // DRAG END
  // ==========================================
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
    setPosition({ x: 0, y: 0 });
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
    setPosition({ x: 0, y: 0 });
  };

  return (
    <>
      {/* ==========================================
          FULL PAGE WALLPAPER
      ========================================== */}
      {Wallpaper.type === "video" ? (
        <video
          id="global-wallpaper-video"
          key={Wallpaper.source}
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-screen h-screen object-cover pointer-events-none transition-opacity duration-700 ease-out"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -9999,
            pointerEvents: "none",
          }}
        >
          <source src={Wallpaper.source} type="video/mp4" />
        </video>
      ) : (
        <img
          key={Wallpaper.source}
          src={Wallpaper.source}
          alt="Wallpaper"
          className="fixed inset-0 w-screen h-screen object-cover pointer-events-none transition-opacity duration-700 ease-out"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -9999,
            pointerEvents: "none",
          }}
        />
      )}

      {/* ==========================================
          DARK OVERLAY
      ========================================== */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.12)",
          zIndex: -9998,
        }}
      />

      {/* ==========================================
          HIDDEN FILE INPUT
      ========================================== */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* ==========================================
          WALLPAPER WINDOW
      ========================================== */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          overflow: "hidden",
          "& .MuiBackdrop-root": {
            transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important",
          },
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
              : `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
            width: maximized ? "100vw" : "min(1000px, 95vw)",
            height: maximized
              ? "100vh"
              : minimized
              ? "62px"
              : "min(640px, 92vh)",
            background: "rgba(10, 10, 15, 0.72)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: maximized ? "0px" : "20px",
            boxShadow: "0 30px 100px rgba(0,0,0,0.6)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            overflow: "hidden",
            outline: "none",
            userSelect: dragging ? "none" : "auto",
            transition: dragging
              ? "none"
              : "width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), border-radius 0.4s ease, box-shadow 0.4s ease, transform 0.15s ease",
            animation: open
              ? "wallpaperWindowIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
              : "none",
            "@keyframes wallpaperWindowIn": {
              "0%": {
                opacity: 0,
                transform: maximized
                  ? "scale(0.92)"
                  : "translate(calc(-50% + 0px), calc(-50% + 0px)) scale(0.88)",
              },
              "100%": {
                opacity: 1,
                transform: maximized
                  ? "scale(1)"
                  : `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(1)`,
              },
            },
          }}
        >
          {/* ==========================================
              MAC TITLE BAR
          ========================================== */}
          <div
            onMouseDown={handleMouseDown}
            className="relative h-[62px] w-full flex items-center px-5 border-b border-white/10 bg-black/30 cursor-grab active:cursor-grabbing transition-colors duration-300 hover:bg-black/40"
          >
            {/* MAC BUTTONS */}
            <div className="flex items-center gap-2">
              {/* RED */}
              <button
                type="button"
                onClick={handleClose}
                onMouseDown={(e) => e.stopPropagation()}
                className="group w-[14px] h-[14px] rounded-full bg-[#ff5f57] flex items-center justify-center hover:scale-125 active:scale-95 transition-all duration-200 ease-out shadow-sm hover:shadow-[0_0_12px_rgba(255,95,87,0.6)]"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[9px] text-black font-bold transition-opacity duration-150">
                  ×
                </span>
              </button>

              {/* YELLOW */}
              <button
                type="button"
                onClick={handleMinimize}
                onMouseDown={(e) => e.stopPropagation()}
                className="group w-[14px] h-[14px] rounded-full bg-[#febc2e] flex items-center justify-center hover:scale-125 active:scale-95 transition-all duration-200 ease-out shadow-sm hover:shadow-[0_0_12px_rgba(254,188,46,0.55)]"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[9px] text-black font-bold transition-opacity duration-150">
                  −
                </span>
              </button>

              {/* GREEN */}
              <button
                type="button"
                onClick={handleMaximize}
                onMouseDown={(e) => e.stopPropagation()}
                className="group w-[14px] h-[14px] rounded-full bg-[#28c840] flex items-center justify-center hover:scale-125 active:scale-95 transition-all duration-200 ease-out shadow-sm hover:shadow-[0_0_12px_rgba(40,200,64,0.55)]"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold transition-opacity duration-150">
                  +
                </span>
              </button>
            </div>

            {/* TITLE */}
            <div className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white hover:tracking-wide">
              Wallpaper
            </div>
          </div>

          {/* ==========================================
              CONTENT
          ========================================== */}
          {!minimized && (
            <div
              className="w-full h-[calc(100%-62px)] overflow-y-auto p-5 bg-black/20"
              style={{
                animation: "contentFadeSlide 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
              }}
            >
              <style>{`
                @keyframes contentFadeSlide {
                  from { opacity: 0; transform: translateY(12px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes gridItemIn {
                  from { opacity: 0; transform: scale(0.92) translateY(10px); }
                  to { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes softPulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.15); }
                  50% { box-shadow: 0 0 24px 4px rgba(255,255,255,0.22); }
                }
              `}</style>

              {/* ==========================================
                  TOP BUTTONS
              ========================================== */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-semibold text-white transition-colors duration-300">
                    Choose Wallpaper
                  </h2>
                  <p className="text-xs text-white/50 mt-1 transition-colors duration-300">
                    Select an image or live video wallpaper
                  </p>
                </div>

                {/* UPLOAD */}
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="
                    px-4 py-2 rounded-xl
                    bg-white text-black text-sm font-semibold
                    hover:bg-white/90 hover:scale-105 active:scale-95
                    transition-all duration-250 ease-out
                    shadow-md hover:shadow-lg
                  "
                >
                  + Upload
                </button>
              </div>

              {/* ==========================================
                  WALLPAPER GRID
              ========================================== */}
              <div className="grid grid-cols-3 gap-4">
                {AllWallpaper.map((wallpaper, index) => (
                  <div
                    key={wallpaper.id}
                    onClick={() => WallpaperChange(wallpaper)}
                    style={{
                      animation: `gridItemIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                      animationDelay: `${index * 0.045}s`,
                      opacity: 0,
                    }}
                    className={`
                      relative overflow-hidden rounded-xl cursor-pointer border
                      transition-all duration-350 ease-out
                      ${
                        Wallpaper.id === wallpaper.id
                          ? "border-white scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                          : "border-white/10 hover:border-white/40 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
                      }
                    `}
                  >
                    {/* VIDEO / IMAGE */}
                    {wallpaper.type === "video" ? (
                      <video
                        src={wallpaper.source}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[170px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={wallpaper.source}
                        alt="Uploaded wallpaper"
                        className="w-full h-[170px] object-cover transition-transform duration-500 ease-out"
                      />
                    )}

                    {/* OVERLAY */}
                    <div
                      className={`
                        absolute inset-0 transition-all duration-400 ease-out
                        ${
                          Wallpaper.id === wallpaper.id
                            ? "bg-black/5"
                            : "bg-black/15 hover:bg-transparent"
                        }
                      `}
                    />

                    {/* UPLOADED LABEL */}
                    {wallpaper.uploaded && (
                      <div className="absolute top-2 left-2 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] text-white transition-all duration-300 hover:scale-105">
                        Uploaded
                      </div>
                    )}

                    {/* SELECTED RING + PULSE */}
                    {Wallpaper.id === wallpaper.id && (
                      <div
                        className="absolute inset-0 rounded-xl border-2 border-white pointer-events-none"
                        style={{
                          animation: "softPulse 2.2s ease-in-out infinite",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* ==========================================
                  DONE BUTTON
              ========================================== */}
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleClose}
                  className="
                    px-6 py-2.5 rounded-xl
                    bg-white text-black font-semibold text-sm
                    hover:bg-white/90 hover:scale-105 active:scale-95
                    transition-all duration-250 ease-out
                    shadow-md hover:shadow-xl
                  "
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Wallpaper;