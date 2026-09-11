import React, { useEffect, useMemo, useState } from "react";
const Clock = () => {
  // =========================================================
  // CLOCK
  // =========================================================
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showSeconds, setShowSeconds] = useState(true);
  const [is24Hour, setIs24Hour] = useState(false);
  // =========================================================
  // CALENDAR
  // =========================================================
  const [selectedDate, setSelectedDate] = useState(new Date());
  // =========================================================
  // WEATHER
  // =========================================================
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(false);
  // Fallback location
  // Change these if you want a different default location.
  const DEFAULT_LOCATION = {
    latitude: 23.8103,
    longitude: 90.4125,
    name: "Dhaka",
  };
  // =========================================================
  // LIVE CLOCK
  // =========================================================
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // =========================================================
  // FETCH WEATHER
  // =========================================================
  const fetchWeather = async (latitude, longitude, locationName) => {
    try {
      setWeatherLoading(true);
      setWeatherError(false);
      const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset` +
        `&timezone=auto`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather request failed");
      }
      const data = await response.json();
      setWeather({
        ...data,
        locationName,
      });
    } catch (error) {
      console.error("Weather error:", error);
      setWeatherError(true);
    } finally {
      setWeatherLoading(false);
    }
  };
  // =========================================================
  // GET USER LOCATION
  // =========================================================
  useEffect(() => {
    if (!navigator.geolocation) {
      fetchWeather(
        DEFAULT_LOCATION.latitude,
        DEFAULT_LOCATION.longitude,
        DEFAULT_LOCATION.name
      );
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude, "Your Location");
      },
      () => {
        fetchWeather(
          DEFAULT_LOCATION.latitude,
          DEFAULT_LOCATION.longitude,
          DEFAULT_LOCATION.name
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 600000,
      }
    );
  }, []);
  // =========================================================
  // WEATHER CODE
  // =========================================================
  const getWeatherInfo = (code, isDay = 1) => {
    if (code === 0) {
      return {
        label: "Clear Sky",
        icon: isDay ? "☀️" : "🌙",
        description: isDay ? "Clear and sunny" : "Clear night",
      };
    }
    if (code === 1 || code === 2) {
      return {
        label: "Partly Cloudy",
        icon: isDay ? "🌤️" : "☁️",
        description: "Some clouds around",
      };
    }
    if (code === 3) {
      return {
        label: "Overcast",
        icon: "☁️",
        description: "Cloudy skies",
      };
    }
    if ([45, 48].includes(code)) {
      return {
        label: "Foggy",
        icon: "🌫️",
        description: "Low visibility",
      };
    }
    if ([51, 53, 55].includes(code)) {
      return {
        label: "Drizzle",
        icon: "🌦️",
        description: "Light drizzle",
      };
    }
    if ([61, 63, 65].includes(code)) {
      return {
        label: "Rain",
        icon: "🌧️",
        description: "Rainy weather",
      };
    }
    if ([66, 67].includes(code)) {
      return {
        label: "Freezing Rain",
        icon: "🌧️",
        description: "Freezing rain",
      };
    }
    if ([71, 73, 75, 77].includes(code)) {
      return {
        label: "Snow",
        icon: "❄️",
        description: "Snowy weather",
      };
    }
    if ([80, 81, 82].includes(code)) {
      return {
        label: "Rain Showers",
        icon: "🌦️",
        description: "Passing showers",
      };
    }
    if ([85, 86].includes(code)) {
      return {
        label: "Snow Showers",
        icon: "🌨️",
        description: "Snow showers",
      };
    }
    if ([95, 96, 99].includes(code)) {
      return {
        label: "Thunderstorm",
        icon: "⛈️",
        description: "Stormy weather",
      };
    }
    return {
      label: "Unknown",
      icon: "🌡️",
      description: "Weather unavailable",
    };
  };
  // =========================================================
  // TIME FORMAT
  // =========================================================
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    if (is24Hour) {
      return `${String(hours).padStart(2, "0")}:${minutes}${
        showSeconds ? `:${seconds}` : ""
      }`;
    }
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes}${
      showSeconds ? `:${seconds}` : ""
    } ${period}`;
  };
  // =========================================================
  // DATE FORMAT
  // =========================================================
  const formatLongDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  // =========================================================
  // MONTH
  // =========================================================
  const monthName = selectedDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const year = selectedDate.getFullYear();
  const daysInMonth = new Date(
    year,
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    year,
    selectedDate.getMonth(),
    1
  ).getDay();
  // =========================================================
  // CALENDAR DAYS
  // =========================================================
  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  }, [firstDay, daysInMonth]);
  // =========================================================
  // MONTH NAVIGATION
  // =========================================================
  const previousMonth = () => {
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() - 1,
        1
      )
    );
  };
  const nextMonth = () => {
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        1
      )
    );
  };
  const goToday = () => {
    setSelectedDate(new Date());
  };
  // =========================================================
  // TODAY CHECK
  // =========================================================
  const isToday = (day) => {
    if (!day) return false;
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === selectedDate.getMonth() &&
      today.getDate() === day
    );
  };
  // =========================================================
  // WEATHER DATA
  // =========================================================
  const weatherInfo = weather
    ? getWeatherInfo(
        weather.current.weather_code,
        weather.current.is_day
      )
    : null;
  const temperature = weather
    ? Math.round(weather.current.temperature_2m)
    : "--";
  const feelsLike = weather
    ? Math.round(weather.current.apparent_temperature)
    : "--";
  const humidity = weather
    ? weather.current.relative_humidity_2m
    : "--";
  const wind = weather
    ? Math.round(weather.current.wind_speed_10m)
    : "--";
  // =========================================================
  // SUNRISE / SUNSET
  // =========================================================
  const sunrise = weather
    ? new Date(weather.daily.sunrise[0]).toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
        }
      )
    : "--";
  const sunset = weather
    ? new Date(weather.daily.sunset[0]).toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
        }
      )
    : "--";
  // =========================================================
  // WEEK DAYS
  // =========================================================
  const weekDays = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];
  // =========================================================
  // RETURN
  // =========================================================
  return (
    <div
      id="clock-calendar"
      popover="auto"
      className="
        fixed
        left-430
        top-16
        z-[9999]
        m-0
        w-[390px]
        max-w-[calc(100vw-20px)]
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.12]
        bg-[#08090d]/[0.78]
        text-white
        shadow-[0_35px_120px_rgba(0,0,0,0.7)]
        backdrop-blur-[45px]
        backdrop-saturate-150
        outline-none
        animate-[clockPopup_0.4s_cubic-bezier(0.22,1,0.36,1)]
      "
      style={{
        transform: "translateX(-50%)",
      }}
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-100px]
          h-[220px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.09]
          blur-[80px]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          right-[-100px]
          h-[220px]
          w-[220px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[90px]
        "
      />
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}
      <div className="relative px-6 pt-6">
        <div
          className="
            mb-2
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            Date & Time
          </span>
          <span
            className="
              flex
              items-center
              gap-1.5
              text-[9px]
              font-medium
              uppercase
              tracking-wider
              text-emerald-300/70
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,0.9)]
              "
            />
            Live
          </span>
        </div>
        {/* CLOCK */}
        <div
          className="
            flex
            items-end
            justify-between
          "
        >
          <div>
            <div
              key={formatTime(currentTime)}
              className="
                text-[43px]
                font-semibold
                leading-none
                tracking-[-0.045em]
                text-white
                drop-shadow-[0_0_25px_rgba(255,255,255,0.14)]
                animate-[clockTick_0.4s_ease-out]
              "
            >
              {formatTime(currentTime)}
            </div>
            <div
              className="
                mt-3
                text-[12px]
                text-white/40
              "
            >
              {formatLongDate(currentTime)}
            </div>
          </div>
          <div
            className="
              mb-1
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.045]
              text-xl
              shadow-inner
              shadow-white/[0.03]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/[0.08]
            "
          >
            🕐
          </div>
        </div>
      </div>
      {/* ================================================= */}
      {/* WEATHER CARD */}
      {/* ================================================= */}
      <div className="relative px-6 pt-5">
        <div
          className="
            relative
            overflow-hidden
            rounded-[23px]
            border
            border-white/[0.08]
            bg-gradient-to-br
            from-white/[0.07]
            via-white/[0.035]
            to-white/[0.015]
            p-4
            shadow-inner
            shadow-white/[0.025]
            transition-all
            duration-500
            hover:border-white/[0.13]
          "
        >
          {/* Weather Glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-40px]
              top-[-50px]
              h-[130px]
              w-[130px]
              rounded-full
              bg-cyan-400/[0.07]
              blur-[50px]
            "
          />
          {weatherLoading ? (
            <div className="flex items-center gap-4">
              <div
                className="
                  h-16
                  w-16
                  animate-pulse
                  rounded-2xl
                  bg-white/[0.06]
                "
              />
              <div className="flex-1">
                <div
                  className="
                    h-4
                    w-28
                    animate-pulse
                    rounded
                    bg-white/[0.06]
                  "
                />
                <div
                  className="
                    mt-2
                    h-3
                    w-20
                    animate-pulse
                    rounded
                    bg-white/[0.04]
                  "
                />
              </div>
            </div>
          ) : weatherError ? (
            <div
              className="
                py-3
                text-center
                text-xs
                text-white/40
              "
            >
              Unable to load weather
            </div>
          ) : (
            <>
              {/* Weather Main */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div className="flex items-center gap-4">
                  {/* Weather Icon */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-[20px]
                      border
                      border-white/[0.07]
                      bg-white/[0.04]
                      text-[34px]
                      drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]
                      transition-transform
                      duration-500
                      hover:scale-110
                    "
                  >
                    {weatherInfo.icon}
                  </div>
                  <div>
                    <div
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/30
                      "
                    >
                      {weather.locationName}
                    </div>
                    <div
                      className="
                        mt-1
                        text-[30px]
                        font-semibold
                        leading-none
                        tracking-tight
                      "
                    >
                      {temperature}°
                    </div>
                    <div
                      className="
                        mt-1
                        text-[11px]
                        text-white/45
                      "
                    >
                      {weatherInfo.label}
                    </div>
                  </div>
                </div>
                {/* Feels Like */}
                <div className="text-right">
                  <div
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-white/25
                    "
                  >
                    Feels
                  </div>
                  <div
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-white/65
                    "
                  >
                    {feelsLike}°
                  </div>
                </div>
              </div>
              {/* Weather Stats */}
              <div
                className="
                  mt-4
                  grid
                  grid-cols-4
                  divide-x
                  divide-white/[0.07]
                  rounded-xl
                  border
                  border-white/[0.05]
                  bg-black/[0.12]
                "
              >
                {/* Humidity */}
                <div className="px-2 py-2 text-center">
                  <div className="text-[12px]">💧</div>
                  <div
                    className="
                      mt-1
                      text-[10px]
                      text-white/55
                    "
                  >
                    {humidity}%
                  </div>
                  <div
                    className="
                      mt-0.5
                      text-[8px]
                      uppercase
                      text-white/25
                    "
                  >
                    Humidity
                  </div>
                </div>
                {/* Wind */}
                <div className="px-2 py-2 text-center">
                  <div className="text-[12px]">💨</div>
                  <div
                    className="
                      mt-1
                      text-[10px]
                      text-white/55
                    "
                  >
                    {wind}
                  </div>
                  <div
                    className="
                      mt-0.5
                      text-[8px]
                      uppercase
                      text-white/25
                    "
                  >
                    km/h
                  </div>
                </div>
                {/* Sunrise */}
                <div className="px-2 py-2 text-center">
                  <div className="text-[12px]">🌅</div>
                  <div
                    className="
                      mt-1
                      text-[10px]
                      text-white/55
                    "
                  >
                    {sunrise}
                  </div>
                  <div
                    className="
                      mt-0.5
                      text-[8px]
                      uppercase
                      text-white/25
                    "
                  >
                    Sunrise
                  </div>
                </div>
                {/* Sunset */}
                <div className="px-2 py-2 text-center">
                  <div className="text-[12px]">🌇</div>
                  <div
                    className="
                      mt-1
                      text-[10px]
                      text-white/55
                    "
                  >
                    {sunset}
                  </div>
                  <div
                    className="
                      mt-0.5
                      text-[8px]
                      uppercase
                      text-white/25
                    "
                  >
                    Sunset
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* ================================================= */}
      {/* CLOCK SETTINGS */}
      {/* ================================================= */}
      <div
        className="
          mx-6
          mt-4
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/[0.06]
          bg-white/[0.025]
          p-1.5
        "
      >
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className="
            flex-1
            rounded-xl
            px-3
            py-2
            text-[9px]
            font-medium
            uppercase
            tracking-wider
            text-white/45
            transition-all
            duration-200
            hover:bg-white/[0.07]
            hover:text-white
            active:scale-95
          "
        >
          {is24Hour ? "24 Hour" : "12 Hour"}
        </button>
        <button
          onClick={() => setShowSeconds(!showSeconds)}
          className={`
            flex-1
            rounded-xl
            px-3
            py-2
            text-[9px]
            font-medium
            uppercase
            tracking-wider
            transition-all
            duration-200
            active:scale-95
            ${
              showSeconds
                ? `
                  bg-cyan-400/[0.10]
                  text-cyan-300
                `
                : `
                  text-white/40
                  hover:bg-white/[0.07]
                  hover:text-white
                `
            }
          `}
        >
          Seconds {showSeconds ? "On" : "Off"}
        </button>
      </div>
      {/* ================================================= */}
      {/* DIVIDER */}
      {/* ================================================= */}
      <div
        className="
          mx-6
          my-5
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.10]
          to-transparent
        "
      />
      {/* ================================================= */}
      {/* CALENDAR */}
      {/* ================================================= */}
      <div className="px-6 pb-6">
        {/* MONTH HEADER */}
        <div
          className="
            mb-4
            flex
            items-center
            justify-between
          "
        >
          {/* Previous */}
          <button
            onClick={previousMonth}
            aria-label="Previous month"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.06]
              bg-white/[0.035]
              text-lg
              text-white/40
              transition-all
              duration-200
              hover:scale-105
              hover:bg-white/[0.08]
              hover:text-white
              active:scale-90
            "
          >
            ‹
          </button>
          {/* Month Name */}
          <div className="text-center">
            <div
              className="
                text-[15px]
                font-semibold
                text-white/90
              "
            >
              {monthName}
            </div>
            <div
              className="
                mt-0.5
                text-[10px]
                text-white/30
              "
            >
              {year}
            </div>
          </div>
          {/* Next */}
          <button
            onClick={nextMonth}
            aria-label="Next month"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.06]
              bg-white/[0.035]
              text-lg
              text-white/40
              transition-all
              duration-200
              hover:scale-105
              hover:bg-white/[0.08]
              hover:text-white
              active:scale-90
            "
          >
            ›
          </button>
        </div>
        {/* WEEKDAYS */}
        <div
          className="
            mb-1
            grid
            grid-cols-7
          "
        >
          {weekDays.map((day) => (
            <div
              key={day}
              className="
                py-2
                text-center
                text-[8px]
                font-semibold
                tracking-wider
                text-white/25
              "
            >
              {day}
            </div>
          ))}
        </div>
        {/* DAYS */}
        <div
          className="
            grid
            grid-cols-7
            gap-1
          "
        >
          {calendarDays.map((day, index) => {
            const today = isToday(day);
            return (
              <button
                key={index}
                disabled={!day}
                onClick={() =>
                  day &&
                  setSelectedDate(
                    new Date(
                      year,
                      selectedDate.getMonth(),
                      day
                    )
                  )
                }
                className={`
                  relative
                  flex
                  h-[15px]
                  items-center
                  justify-center
                  rounded-xl
                  text-[11px]
                  transition-all
                  duration-200
                  ${
                    !day
                      ? "cursor-default"
                      : `
                        cursor-pointer
                        text-white/50
                        hover:scale-105
                        hover:bg-white/[0.07]
                        hover:text-white
                        active:scale-90
                      `
                  }
                  ${
                    today
                      ? `
                        bg-cyan-400/[0.13]
                        text-cyan-300
                        ring-1
                        ring-cyan-300/[0.22]
                        shadow-[0_0_20px_rgba(34,211,238,0.10)]
                        hover:bg-cyan-400/[0.20]
                      `
                      : ""
                  }
                `}
              >
                {day}
                {today && (
                  <span
                    className="
                      absolute
                      bottom-1.5
                      h-1
                      w-1
                      rounded-full
                      bg-cyan-300
                      shadow-[0_0_8px_rgba(103,232,249,0.9)]
                      animate-pulse
                    "
                  />
                )}
              </button>
            );
          })}
        </div>
        {/* ================================================= */}
        {/* TODAY BUTTON */}
        {/* ================================================= */}
        <button
          onClick={goToday}
          className="
            mt-5
            w-full
            rounded-2xl
            border
            border-cyan-300/[0.12]
            bg-cyan-400/[0.055]
            px-4
            py-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-cyan-300/80
            transition-all
            duration-300
            hover:border-cyan-300/[0.25]
            hover:bg-cyan-400/[0.11]
            hover:text-cyan-200
            active:scale-[0.98]
          "
        >
          Jump to Today
        </button>
        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}
        <div
          className="
            mt-3
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/[0.05]
            bg-white/[0.025]
            px-4
            py-3
          "
        >
          <div>
            <div
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Today
            </div>
            <div
              className="
                mt-1
                text-[11px]
                font-medium
                text-white/60
              "
            >
              {currentTime.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
          <div
            className="
              h-7
              w-px
              bg-white/[0.08]
            "
          />
          <div className="text-right">
            <div
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Time Zone
            </div>
            <div
              className="
                mt-1
                text-[11px]
                font-medium
                text-cyan-300/60
              "
            >
              {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </div>
          </div>
        </div>
        {/* Weather Provider */}
        <div
          className="
            mt-3
            text-center
            text-[8px]
            tracking-wide
            text-white/20
          "
        >
          Weather data by Open-Meteo
        </div>
      </div>
      {/* ================================================= */}
      {/* ANIMATIONS */}
      {/* ================================================= */}
      <style>
        {`
          @keyframes clockPopup {
            0% {
              opacity: 0;
              transform:
                translateX(-50%)
                translateY(-14px)
                scale(0.95);
              filter: blur(8px);
            }
            100% {
              opacity: 1;
              transform:
                translateX(-50%)
                translateY(0)
                scale(1);
              filter: blur(0);
            }
          }
          @keyframes clockTick {
            0% {
              opacity: 0.45;
              transform: translateY(2px);
              filter: blur(2px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
          #clock-calendar::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
          #clock-calendar {
            scrollbar-width: none;
          }
          @media (max-width: 480px) {
            #clock-calendar {
              top: 60px;
              width: calc(100vw - 20px);
            }
          }
        `}
      </style>
    </div>
  );
};
export default Clock;