import React, { useEffect, useState } from "react";

import { HiBattery100 } from "react-icons/hi2";
import { IoWifi } from "react-icons/io5";
import { MdOutlineControlCamera } from "react-icons/md";
import { IoIosBluetooth } from "react-icons/io";
import { MdDisplaySettings } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

import Button from "@mui/material/Button";
import Clock from "../Commpnent/Clock";

const navItemClass = `
  group relative
  whitespace-nowrap
  text-xs sm:text-sm lg:text-[15px] xl:text-base
  font-medium
  tracking-[0.06em] sm:tracking-wide
  text-white/90
  transition-all duration-300
  hover:text-white hover:-translate-y-[1px]
  after:absolute after:left-1/2 after:-bottom-2
  after:h-[2px] after:w-0 after:-translate-x-1/2
  after:rounded-full
  after:bg-gradient-to-r after:from-transparent after:via-cyan-400 after:to-transparent
  after:shadow-[0_0_10px_rgba(34,211,238,0.8)]
  after:transition-all after:duration-300
  hover:after:w-full
`;

const Navbar = () => {
  const [wifiOn, setWifiOn] = useState(true);
  const [bluetoothOn, setBluetoothOn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
    ];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNumber = date.getDate();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${day} ${month} ${dateNumber} ${hours}:${minutes} ${period}`;
  };

  const clickSection = (id) => {
    document.getElementById(id)?.click();
    setMobileMenuOpen(false);
  };

  const openClock = () => {
    document.getElementById("clock-calendar")?.showPopover();
  };

  return (
    <>
      <nav
        className="
          navbar-enter relative z-50
          w-full max-w-full
          px-3 py-3
          sm:px-5 sm:py-3.5
          md:px-6 md:py-4
          lg:px-7 xl:px-8 2xl:px-10
          text-white
        "
      >
        <div
          className="
            flex w-full min-w-0 items-center justify-between gap-2
            rounded-2xl
          "
        >
          {/* LEFT / BRAND */}
          <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <a
              href="#portfolio"
              aria-label="Portfolio home"
              className="
                group flex shrink-0 items-center justify-center
                transition-all duration-300
              "
            >
              <img
                src="/icons8-apple-50.png"
                alt="Apple"
                className="
                  h-7 w-7 object-contain opacity-90
                  sm:h-8 sm:w-8
                  transition-all duration-300
                  group-hover:scale-110 group-hover:opacity-100
                  group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]
                "
              />
            </a>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex min-w-0 items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
              <button className={navItemClass}>PORTFOLIO</button>

              <button
                onClick={() => clickSection("resume")}
                className={navItemClass}
              >
                RESUME
              </button>

              <Button
                onClick={() => clickSection("about-button")}
                disableRipple
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  background:
                    "linear-gradient(90deg, #000000, #ffffff, #ff0000, #000000)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradientMove 4s ease-in-out infinite",
                  transition: "all 300ms ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    filter: "drop-shadow(0 0 10px rgba(255,0,0,0.75))",
                  },
                }}
              >
                ABOUT
              </Button>

              <button
                onClick={() => clickSection("project-button")}
                className={navItemClass}
              >
                PROJECT
              </button>

              <button
                onClick={() => clickSection("experience-button")}
                className={navItemClass}
              >
                EXPERIENCE
              </button>

              <button
                onClick={() => clickSection("skills-button")}
                className={navItemClass}
              >
                SKILLS
              </button>

              <button
                onClick={() => clickSection("contact-button")}
                className={navItemClass}
              >
                CONTACT
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3 text-white">
            <div className="hidden sm:flex items-center gap-1.5">
              <h4 className="text-xs sm:text-sm font-medium tracking-wide text-white/80">
                100%
              </h4>

              <HiBattery100
                className="
                  text-lg sm:text-xl text-white/80
                  transition-all duration-300
                  hover:text-green-400 hover:scale-110
                  hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]
                "
              />
            </div>

            <IoWifi
              className="
                text-lg sm:text-xl text-white/80
                transition-all duration-300
                hover:text-cyan-400 hover:scale-110
                hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
              "
            />

            {/* CONTROL */}
            <button
              aria-label="Open system controls"
              className="
                group flex shrink-0 items-center justify-center
                rounded-lg border-0 bg-transparent p-1.5
                text-white/80 outline-none shadow-none
                transition-all duration-300
                hover:bg-white/[0.06] hover:text-cyan-400 hover:scale-110
                focus:bg-transparent active:bg-transparent
              "
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              <MdOutlineControlCamera
                className="
                  text-lg sm:text-xl
                  transition-all duration-300
                  group-hover:text-cyan-400 group-hover:rotate-6
                  group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
                "
              />
            </button>

            {/* MOBILE MENU */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="
                flex lg:hidden shrink-0 items-center justify-center
                rounded-lg p-1.5 sm:p-2
                text-white/85 transition-all duration-300
                hover:bg-white/[0.08] hover:text-white
              "
            >
              {mobileMenuOpen ? (
                <FiX className="text-xl sm:text-2xl" />
              ) : (
                <FiMenu className="text-xl sm:text-2xl" />
              )}
            </button>

            {/* CLOCK */}
            <h1
              className="
                hidden sm:block
                whitespace-nowrap
                text-[10px] sm:text-xs md:text-sm
                font-medium tracking-wide
                text-white/80 transition-all duration-300
                hover:text-white
              "
            >
              <button
                id="time"
                onClick={openClock}
                className="cursor-pointer"
              >
                {formatDateTime(currentTime)}
              </button>
            </h1>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-out
            ${mobileMenuOpen ? "mt-3 max-h-[28rem] opacity-100" : "mt-0 max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              grid grid-cols-2 gap-2
              rounded-2xl border border-white/[0.08]
              bg-black/30 p-3
              backdrop-blur-xl
              sm:grid-cols-3
            "
          >
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-left text-xs font-medium tracking-wide text-white/85 transition hover:bg-white/[0.06] hover:text-white"
            >
              PORTFOLIO
            </a>

            <button
              onClick={() => clickSection("resume")}
              className="rounded-xl px-3 py-3 text-left text-xs font-medium tracking-wide text-white/85 transition hover:bg-white/[0.06] hover:text-white"
            >
              RESUME
            </button>

            <button
              onClick={() => clickSection("about-button")}
              className="rounded-xl px-3 py-3 text-left text-xs font-medium tracking-wide text-white/85 transition hover:bg-white/[0.06] hover:text-white"
            >
              ABOUT
            </button>

            <button
              onClick={() => clickSection("project-button")}
              className="rounded-xl px-3 py-3 text-left text-xs font-medium tracking-wide text-white/85 transition hover:bg-white/[0.06] hover:text-white"
            >
              PROJECT
            </button>

            <button
              onClick={() => clickSection("experience-button")}
              className="rounded-xl px-3 py-3 text-left text-xs font-medium tracking-wide text-white/85 transition hover:bg-white/[0.06] hover:text-white"
            >
              EXPERIENCE
            </button>

            <button
              onClick={() => clickSection("skills-button")}
              className="rounded-xl px-3 py-3 text-left text-xs font-medium tracking-wide text-white/85 transition hover:bg-white/[0.06] hover:text-white"
            >
              SKILLS
            </button>

            <button
              onClick={() => clickSection("contact-button")}
              className="col-span-2 rounded-xl px-3 py-3 text-left text-xs font-medium tracking-wide text-white/85 transition hover:bg-white/[0.06] hover:text-white sm:col-span-1"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* CONTROL POPOVER */}
        <ul
          className="
            bg-black/30 text-white dropdown menu
            w-[calc(100vw-1.5rem)] max-w-72
            p-2.5 sm:p-3
            backdrop-blur-3xl backdrop-saturate-150
            border border-white/[0.08]
            shadow-[0_20px_70px_rgba(0,0,0,0.45)]
            rounded-[20px] space-y-1
          "
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}
        >
          <li className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setWifiOn(!wifiOn)}
              className={`
                group relative flex h-24 flex-col items-start justify-between
                overflow-hidden rounded-[16px] border p-3
                transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08]
                ${
                  wifiOn
                    ? "bg-cyan-400/[0.10] border-cyan-300/[0.15]"
                    : "bg-white/[0.03] border-white/[0.06]"
                }
              `}
            >
              <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl" />

              <div className="relative flex w-full items-center justify-between">
                <IoWifi
                  className={`
                    text-2xl transition-all duration-300
                    ${wifiOn
                      ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      : "text-white/40"}
                  `}
                />
                <span
                  className={`
                    h-2 w-2 rounded-full transition-all duration-300
                    ${wifiOn
                      ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                      : "bg-white/20"}
                  `}
                />
              </div>

              <div className="relative flex flex-col items-start">
                <span className="text-sm font-medium">WiFi</span>
                <span className="text-[11px] text-white/45">
                  {wifiOn ? "Connected" : "Off"}
                </span>
              </div>
            </button>

            <button
              onClick={() => setBluetoothOn(!bluetoothOn)}
              className={`
                group relative flex h-24 flex-col items-start justify-between
                overflow-hidden rounded-[16px] border p-3
                transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08]
                ${
                  bluetoothOn
                    ? "bg-cyan-400/[0.10] border-cyan-300/[0.15]"
                    : "bg-white/[0.03] border-white/[0.06]"
                }
              `}
            >
              <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl" />

              <div className="relative flex w-full items-center justify-between">
                <IoIosBluetooth
                  className={`
                    text-2xl transition-all duration-300
                    ${bluetoothOn
                      ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      : "text-white/40"}
                  `}
                />
                <span
                  className={`
                    h-2 w-2 rounded-full transition-all duration-300
                    ${bluetoothOn
                      ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                      : "bg-white/20"}
                  `}
                />
              </div>

              <div className="relative flex flex-col items-start">
                <span className="text-sm font-medium">Bluetooth</span>
                <span className="text-[11px] text-white/45">
                  {bluetoothOn ? "Connected" : "Off"}
                </span>
              </div>
            </button>
          </li>

          <div className="mx-1 my-2 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

          <li>
            <a className="group flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] transition-all duration-300 group-hover:bg-cyan-400/10">
                <MdDisplaySettings className="text-lg text-cyan-300/70 transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">Display</span>
                <span className="text-[11px] text-white/40">Screen settings</span>
              </div>
            </a>
          </li>

          <li>
            <a className="group flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] transition-all duration-300 group-hover:bg-cyan-400/10">
                <MdVolumeUp className="text-lg text-cyan-300/70 transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">Sound</span>
                <span className="text-[11px] text-white/40">Volume & output</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>

      <Clock />
    </>
  );
};

export default Navbar;
