import React, { useEffect, useState } from "react";

import { HiBattery100 } from "react-icons/hi2";
import { IoWifi } from "react-icons/io5";
import { MdOutlineControlCamera } from "react-icons/md";
import { IoIosBluetooth } from "react-icons/io";
import { MdDisplaySettings } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";

import Button from "@mui/material/Button";
import Clock from "../Commpnent/Clock";


const Navbar = () => {
  const [wifiOn, setWifiOn] = useState(true);
  const [bluetoothOn, setBluetoothOn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const days = [
      "SUN",
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
    ];

    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
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

  const handleAboutClick = () => {
    document.getElementById("about-button")?.click();
  };

  const handleAboutClicks = () => {
    document.getElementById("project-button")?.click();
  };

  const handleAboutClickss = () => {
    document.getElementById("resume")?.click();
  };

  const handleAboutClicksss = () => {
    document.getElementById("experience-button")?.click();
  };

  const handleAboutClickssss = () => {
    document.getElementById("skills-button")?.click();
  };

  const handleAboutClicksssss = () => {
    document.getElementById("contact-button")?.click();
  };

  const openClock = () => {
    document
      .getElementById("clock-calendar")
      ?.showPopover();
  };

  return (
    <>
      <nav className="navbar-enter flex justify-between items-center bg-transparent text-white px-6 py-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-5">

          {/* APPLE LOGO */}
          <a
            href="#portfolio"
            className="
              group
              flex
              items-center
              justify-center
              transition-all
              duration-300
            "
          >
            <img
              src="/icons8-apple-50.png"
              alt="Apple"
              className="
                w-8
                h-8
                object-contain
                opacity-90
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:opacity-100
                group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]
              "
            />
          </a>

          {/* PORTFOLIO */}
          <button
            className="
              group
              relative
              text-base
              font-medium
              tracking-wide
              text-white/90
              transition-all
              duration-300
              hover:text-white
              hover:-translate-y-[1px]

              after:absolute
              after:left-1/2
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:-translate-x-1/2
              after:rounded-full

              after:bg-gradient-to-r
              after:from-transparent
              after:via-cyan-400
              after:to-transparent

              after:shadow-[0_0_10px_rgba(34,211,238,0.8)]

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            PORTFOLIO
          </button>

          {/* RESUME */}
          <button
            onClick={handleAboutClickss}
            className="
              group
              relative
              text-base
              font-medium
              tracking-wide
              text-white/90
              transition-all
              duration-300
              hover:text-white
              hover:-translate-y-[1px]

              after:absolute
              after:left-1/2
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:-translate-x-1/2
              after:rounded-full

              after:bg-gradient-to-r
              after:from-transparent
              after:via-cyan-400
              after:to-transparent

              after:shadow-[0_0_10px_rgba(34,211,238,0.8)]

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            RESUME
          </button>

          {/* ABOUT */}
          <Button
            onClick={handleAboutClick}
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

              animation:
                "gradientMove 4s ease-in-out infinite",

              transition: "all 300ms ease",

              "&:hover": {
                transform: "scale(1.08)",
                filter:
                  "drop-shadow(0 0 10px rgba(255,0,0,0.75))",
              },
            }}
          >
            ABOUT
          </Button>

          {/* PROJECT */}
          <button
            onClick={handleAboutClicks}
            className="
              group
              relative
              text-base
              font-medium
              tracking-wide
              text-white/90
              transition-all
              duration-300
              hover:text-white
              hover:-translate-y-[1px]

              after:absolute
              after:left-1/2
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:-translate-x-1/2
              after:rounded-full

              after:bg-gradient-to-r
              after:from-transparent
              after:via-cyan-400
              after:to-transparent

              after:shadow-[0_0_10px_rgba(34,211,238,0.8)]

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            PROJECT
          </button>

          {/* EXPERIENCE */}
          <button
            onClick={handleAboutClicksss}
            className="
              group
              relative
              text-base
              font-medium
              tracking-wide
              text-white/90
              transition-all
              duration-300
              hover:text-white
              hover:-translate-y-[1px]

              after:absolute
              after:left-1/2
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:-translate-x-1/2
              after:rounded-full

              after:bg-gradient-to-r
              after:from-transparent
              after:via-cyan-400
              after:to-transparent

              after:shadow-[0_0_10px_rgba(34,211,238,0.8)]

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            EXPERIENCE
          </button>

          {/* SKILLS */}
          <button
            onClick={handleAboutClickssss}
            className="
              group
              relative
              text-base
              font-medium
              tracking-wide
              text-white/90
              transition-all
              duration-300
              hover:text-white
              hover:-translate-y-[1px]

              after:absolute
              after:left-1/2
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:-translate-x-1/2
              after:rounded-full

              after:bg-gradient-to-r
              after:from-transparent
              after:via-cyan-400
              after:to-transparent

              after:shadow-[0_0_10px_rgba(34,211,238,0.8)]

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            SKILLS
          </button>

          {/* CONTACT */}
          <button
            onClick={handleAboutClicksssss}
            className="
              group
              relative
              text-base
              font-medium
              tracking-wide
              text-white/90
              transition-all
              duration-300
              hover:text-white
              hover:-translate-y-[1px]

              after:absolute
              after:left-1/2
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:-translate-x-1/2
              after:rounded-full

              after:bg-gradient-to-r
              after:from-transparent
              after:via-cyan-400
              after:to-transparent

              after:shadow-[0_0_10px_rgba(34,211,238,0.8)]

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            CONTACT
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 text-white">

          {/* BATTERY */}
          <h4
            className="
              text-sm
              font-medium
              tracking-wide
              text-white/80
            "
          >
            100%
          </h4>

          <HiBattery100
            className="
              text-xl
              text-white/80
              transition-all
              duration-300
              hover:text-green-400
              hover:scale-110
              hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]
            "
          />

          {/* WIFI */}
          <IoWifi
            className="
              text-xl
              text-white/80
              transition-all
              duration-300
              hover:text-cyan-400
              hover:scale-110
              hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "
          />

          {/* CONTROL BUTTON */}
          <button
            className="
              group
              appearance-none
              bg-transparent
              text-white/80
              border-0
              outline-none
              shadow-none
              p-1
              m-0
              flex
              items-center
              justify-center
              rounded-lg
              transition-all
              duration-300
              hover:bg-white/[0.06]
              hover:text-cyan-400
              hover:scale-110
              focus:bg-transparent
              active:bg-transparent
            "
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" }}
          >
            <MdOutlineControlCamera
              className="
                text-xl
                transition-all
                duration-300
                group-hover:text-cyan-400
                group-hover:rotate-6
                group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
              "
            />
          </button>

          {/* CONTROL POPOVER */}
          <ul
            className="
              bg-transparent
              text-white
              dropdown
              menu
              w-72
              p-3
              backdrop-blur-3xl
              backdrop-saturate-150
              border
              border-white/[0.08]
              shadow-[0_20px_70px_rgba(0,0,0,0.45)]
              rounded-[20px]
              space-y-1
            "
            popover="auto"
            id="popover-1"
            style={{ positionAnchor: "--anchor-1" }}
          >

            {/* WIFI + BLUETOOTH */}
            <li className="grid grid-cols-2 gap-2">

              {/* WIFI */}
              <button
                onClick={() => setWifiOn(!wifiOn)}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  items-start
                  justify-between
                  h-24
                  p-3
                  overflow-hidden
                  rounded-[16px]
                  border
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-white/[0.08]

                  ${
                    wifiOn
                      ? "bg-cyan-400/[0.10] border-cyan-300/[0.15]"
                      : "bg-white/[0.03] border-white/[0.06]"
                  }
                `}
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-20
                    w-20
                    rounded-full
                    bg-cyan-400/10
                    blur-2xl
                  "
                />

                <div className="relative flex w-full items-center justify-between">

                  <IoWifi
                    className={`
                      text-2xl
                      transition-all
                      duration-300

                      ${
                        wifiOn
                          ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                          : "text-white/40"
                      }
                    `}
                  />

                  <span
                    className={`
                      h-2
                      w-2
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        wifiOn
                          ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                          : "bg-white/20"
                      }
                    `}
                  />
                </div>

                <div className="relative flex flex-col items-start">
                  <span className="text-sm font-medium">
                    WiFi
                  </span>

                  <span className="text-[11px] text-white/45">
                    {wifiOn ? "Connected" : "Off"}
                  </span>
                </div>
              </button>

              {/* BLUETOOTH */}
              <button
                onClick={() => setBluetoothOn(!bluetoothOn)}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  items-start
                  justify-between
                  h-24
                  p-3
                  overflow-hidden
                  rounded-[16px]
                  border
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-white/[0.08]

                  ${
                    bluetoothOn
                      ? "bg-cyan-400/[0.10] border-cyan-300/[0.15]"
                      : "bg-white/[0.03] border-white/[0.06]"
                  }
                `}
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-20
                    w-20
                    rounded-full
                    bg-cyan-400/10
                    blur-2xl
                  "
                />

                <div className="relative flex w-full items-center justify-between">

                  <IoIosBluetooth
                    className={`
                      text-2xl
                      transition-all
                      duration-300

                      ${
                        bluetoothOn
                          ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                          : "text-white/40"
                      }
                    `}
                  />

                  <span
                    className={`
                      h-2
                      w-2
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        bluetoothOn
                          ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                          : "bg-white/20"
                      }
                    `}
                  />
                </div>

                <div className="relative flex flex-col items-start">
                  <span className="text-sm font-medium">
                    Bluetooth
                  </span>

                  <span className="text-[11px] text-white/45">
                    {bluetoothOn ? "Connected" : "Off"}
                  </span>
                </div>
              </button>

            </li>

            {/* DIVIDER */}
            <div
              className="
                my-2
                mx-1
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/[0.12]
                to-transparent
              "
            />

            {/* DISPLAY */}
            <li>
              <a
                className="
                  group
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-[12px]
                  text-white/80
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-lg
                    bg-white/[0.05]
                    transition-all
                    duration-300
                    group-hover:bg-cyan-400/10
                  "
                >
                  <MdDisplaySettings
                    className="
                      text-lg
                      text-cyan-300/70
                      transition-all
                      duration-300
                      group-hover:text-cyan-300
                      group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                    "
                  />
                </span>

                <div className="flex flex-col">
                  <span className="text-sm">
                    Display
                  </span>

                  <span className="text-[11px] text-white/40">
                    Screen settings
                  </span>
                </div>
              </a>
            </li>

            {/* SOUND */}
            <li>
              <a
                className="
                  group
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-[12px]
                  text-white/80
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-lg
                    bg-white/[0.05]
                    transition-all
                    duration-300
                    group-hover:bg-cyan-400/10
                  "
                >
                  <MdVolumeUp
                    className="
                      text-lg
                      text-cyan-300/70
                      transition-all
                      duration-300
                      group-hover:text-cyan-300
                      group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                    "
                  />
                </span>

                <div className="flex flex-col">
                  <span className="text-sm">
                    Sound
                  </span>

                  <span className="text-[11px] text-white/40">
                    Volume & output
                  </span>
                </div>
              </a>
            </li>

          </ul>

          {/* CLOCK */}
          <h1
            className="
              text-sm
              font-medium
              whitespace-nowrap
              tracking-wide
              text-white/80
              transition-all
              duration-300
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

      </nav>

      {/* SEPARATE CLOCK COMPONENT */}
      <Clock />
    </>
  );
};

export default Navbar;