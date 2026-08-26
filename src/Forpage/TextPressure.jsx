import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;

  return Math.sqrt(dx * dx + dy * dy);
};

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  if (maxDist <= 0) return minVal;

  const strength = clamp(1 - distance / maxDist, 0, 1);

  return minVal + (maxVal - minVal) * strength;
};

const TextPressure = ({
  text = "Compressa",
  fontFamily = "Roboto Flex",
  fontUrl =
    "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap",

  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = false,
  stroke = false,
  scale = false,

  textColor = "#FFFFFF",
  strokeColor = "#FF0000",
  strokeWidth = 2,

  className = "",
  minFontSize = 24,
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const cursorRef = useRef({
    x: 0,
    y: 0,
  });

  const velocityRef = useRef({
    x: 0,
    y: 0,
  });

  const previousCursorRef = useRef({
    x: 0,
    y: 0,
  });

  const animationTimeRef = useRef(0);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = useMemo(() => {
    return text.split("");
  }, [text]);

  /*
   * ---------------------------------------------------------
   * MOUSE / TOUCH
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorRef.current.x = event.clientX;
      cursorRef.current.y = event.clientY;
    };

    const handleTouchMove = (event) => {
      if (!event.touches?.[0]) return;

      cursorRef.current.x = event.touches[0].clientX;
      cursorRef.current.y = event.touches[0].clientY;
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      cursorRef.current.x = rect.left + rect.width / 2;
      cursorRef.current.y = rect.top + rect.height / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    window.addEventListener("mouseleave", handleMouseLeave);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseRef.current.x = centerX;
      mouseRef.current.y = centerY;

      cursorRef.current.x = centerX;
      cursorRef.current.y = centerY;

      previousCursorRef.current.x = centerX;
      previousCursorRef.current.y = centerY;
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * RESPONSIVE FONT SIZE
   * ---------------------------------------------------------
   */

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const {
      width: containerWidth,
      height: containerHeight,
    } = containerRef.current.getBoundingClientRect();

    if (!containerWidth) return;

    /*
     * Better text sizing.
     *
     * The previous formula was too aggressive on some
     * screen sizes.
     */

    const characterCount = Math.max(chars.length, 1);

    let calculatedSize =
      containerWidth / Math.max(characterCount * 0.52, 1);

    calculatedSize = clamp(
      calculatedSize,
      minFontSize,
      Math.min(containerWidth * 0.22, 160)
    );

    setFontSize(calculatedSize);

    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;

      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0 && containerHeight > 0) {
        const ratio = clamp(
          containerHeight / textRect.height,
          0.7,
          1.5
        );

        setScaleY(ratio);
        setLineHeight(ratio);
      }
    });
  }, [chars.length, minFontSize, scale]);

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        setSize();
      }, 80);
    };

    setSize();

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [setSize]);

  /*
   * ---------------------------------------------------------
   * MAIN ANIMATION
   * ---------------------------------------------------------
   */

  useEffect(() => {
    let rafId;

    const animate = (time) => {
      animationTimeRef.current = time * 0.001;

      /*
       * Smooth cursor movement
       */

      const mouse = mouseRef.current;
      const cursor = cursorRef.current;

      const smoothness = 0.11;

      mouse.x += (cursor.x - mouse.x) * smoothness;
      mouse.y += (cursor.y - mouse.y) * smoothness;

      /*
       * Cursor velocity
       */

      const previous = previousCursorRef.current;

      velocityRef.current.x =
        cursor.x - previous.x;

      velocityRef.current.y =
        cursor.y - previous.y;

      previous.x += (cursor.x - previous.x) * 0.15;
      previous.y += (cursor.y - previous.y) * 0.15;

      if (titleRef.current) {
        const titleRect =
          titleRef.current.getBoundingClientRect();

        const titleCenter = {
          x: titleRect.left + titleRect.width / 2,
          y: titleRect.top + titleRect.height / 2,
        };

        /*
         * Pressure radius.
         *
         * Bigger than the old version so the whole word
         * reacts smoothly.
         */

        const maxDist = Math.max(
          titleRect.width * 0.42,
          180
        );

        spansRef.current.forEach((span, index) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();

          const charCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };

          const distance = dist(
            mouse,
            charCenter
          );

          /*
           * -------------------------------------------------
           * PRESSURE
           * -------------------------------------------------
           */

          const pressure = clamp(
            1 - distance / maxDist,
            0,
            1
          );

          /*
           * Smooth curve.
           *
           * This makes the center react more strongly.
           */

          const strength = pressure * pressure;

          /*
           * Font variations
           */

          const wdth = width
            ? Math.round(
                getAttr(
                  distance,
                  maxDist,
                  65,
                  150
                )
              )
            : 100;

          const wght = weight
            ? Math.round(
                getAttr(
                  distance,
                  maxDist,
                  180,
                  1000
                )
              )
            : 400;

          const italVal = italic
            ? getAttr(
                distance,
                maxDist,
                0,
                0.65
              )
            : 0;

          const alphaVal = alpha
            ? getAttr(
                distance,
                maxDist,
                0.35,
                1
              )
            : 1;

          /*
           * -------------------------------------------------
           * IDLE ANIMATION
           * -------------------------------------------------
           *
           * Even without mouse movement, the text has
           * subtle organic movement.
           */

          const idle =
            Math.sin(
              animationTimeRef.current * 1.8 +
                index * 0.35
            ) * 0.5;

          const idleScale =
            1 +
            Math.sin(
              animationTimeRef.current * 1.5 +
                index * 0.28
            ) *
              0.012;

          /*
           * -------------------------------------------------
           * LETTER MOVEMENT
           * -------------------------------------------------
           */

          const wave =
            Math.sin(
              animationTimeRef.current * 2.2 +
                index * 0.5
            );

          const translateY =
            wave * 2.5 +
            strength * -8;

          const translateX =
            Math.sin(
              animationTimeRef.current * 1.8 +
                index
            ) *
              1.2;

          /*
           * Mouse velocity adds a little dynamic motion.
           */

          const velocityInfluence = clamp(
            Math.abs(velocityRef.current.x) +
              Math.abs(velocityRef.current.y),
            0,
            30
          );

          const velocityY =
            velocityRef.current.y *
            0.08 *
            strength;

          /*
           * -------------------------------------------------
           * ROTATION
           * -------------------------------------------------
           */

          const rotation =
            Math.sin(
              animationTimeRef.current * 1.6 +
                index * 0.4
            ) *
              0.7 +
            (mouse.x - charCenter.x) *
              0.012 *
              strength;

          /*
           * -------------------------------------------------
           * SCALE
           * -------------------------------------------------
           */

          const scaleX =
            idleScale +
            strength * 0.12;

          const scaleLetterY =
            1 +
            strength * 0.09 +
            velocityInfluence * 0.0005;

          /*
           * -------------------------------------------------
           * GLOW
           * -------------------------------------------------
           */

          const glowStrength = Math.round(
            strength * 35
          );

          const glowBlur = Math.round(
            strength * 18
          );

          /*
           * Font variation
           */

          const fontVariationSettings = `
            "wght" ${wght},
            "wdth" ${wdth},
            "ital" ${italVal}
          `;

          span.style.fontVariationSettings =
            fontVariationSettings;

          /*
           * Opacity
           */

          span.style.opacity = alphaVal;

          /*
           * Transform
           */

          span.style.transform = `
            translate3d(
              ${translateX}px,
              ${translateY + velocityY + idle}px,
              0
            )
            rotate(${rotation}deg)
            scale(${scaleX}, ${scaleLetterY})
          `;

          /*
           * Glow
           */

          if (!stroke) {
            span.style.textShadow =
              glowStrength > 1
                ? `
                  0 0 ${glowBlur}px
                  rgba(139, 92, 246, ${
                    strength * 0.35
                  }),

                  0 0 ${glowStrength}px
                  rgba(255, 255, 255, ${
                    strength * 0.12
                  })
                `
                : "none";
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [
    width,
    weight,
    italic,
    alpha,
    stroke,
  ]);

  /*
   * ---------------------------------------------------------
   * FONT + STROKE STYLES
   * ---------------------------------------------------------
   */

  const styleElement = useMemo(() => {
    return (
      <style>
        {`
          @import url('${fontUrl}');

          .text-pressure-wrapper {
            font-family: '${fontFamily}', sans-serif;
          }

          .text-pressure-title {
            font-family: '${fontFamily}', sans-serif;
            font-variation-settings:
              'wght' 400,
              'wdth' 100,
              'ital' 0;

            white-space: nowrap;
            user-select: none;
            -webkit-user-select: none;

            will-change: transform;

            transform-style: preserve-3d;

            letter-spacing: -0.045em;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .text-pressure-title span {
            position: relative;

            display: inline-block;

            will-change:
              transform,
              font-variation-settings,
              opacity,
              text-shadow;

            transform-origin: center center;

            backface-visibility: hidden;

            transition:
              color 0.25s ease;
          }

          .text-pressure-title span::before {
            content: '';

            position: absolute;

            left: 50%;
            top: 50%;

            width: 100%;
            height: 100%;

            transform:
              translate(-50%, -50%)
              scale(0.7);

            background:
              radial-gradient(
                circle,
                rgba(139, 92, 246, 0.18),
                transparent 70%
              );

            opacity: 0;

            filter: blur(15px);

            pointer-events: none;

            transition:
              opacity 0.2s ease;
          }

          .text-pressure-title span:hover::before {
            opacity: 1;
          }

          .text-pressure-title.stroke span {
            position: relative;

            color: ${textColor};
          }

          .text-pressure-title.stroke span::after {
            content: attr(data-char);

            position: absolute;

            inset: 0;

            color: transparent;

            z-index: -1;

            -webkit-text-stroke-width:
              ${strokeWidth}px;

            -webkit-text-stroke-color:
              ${strokeColor};
          }

          @media (max-width: 768px) {
            .text-pressure-title {
              letter-spacing: -0.055em;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .text-pressure-title span {
              transform: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
    );
  }, [
    fontFamily,
    fontUrl,
    textColor,
    strokeColor,
    strokeWidth,
  ]);

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <div
      ref={containerRef}
      className={`
        text-pressure-wrapper
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-visible
        bg-transparent
        ${className}
      `}
    >
      {styleElement}

      <h1
        ref={titleRef}
        className={`
          text-pressure-title
          relative
          m-0
          flex
          w-fit
          items-center
          justify-center
          text-center
          uppercase
          ${stroke ? "stroke" : ""}
        `}
        style={{
          fontFamily,
          fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: "center center",
          margin: 0,
          padding: "0.05em 0.1em",
          fontWeight: 400,
          color: stroke ? undefined : textColor,
          WebkitTextFillColor: stroke
            ? "transparent"
            : textColor,
        }}
      >
        {chars.map((char, index) => (
          <span
            key={`${char}-${index}`}
            ref={(element) => {
              spansRef.current[index] = element;
            }}
            data-char={char}
            className="inline-block"
            style={{
              minWidth:
                char === " "
                  ? "0.28em"
                  : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;