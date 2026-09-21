import { useEffect } from "react";

const FullScreen = () => {
  useEffect(() => {
    const enterFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
        }
      } catch (error) {
        console.log("Fullscreen request blocked:", error);
      }
    };

    const handleClick = () => {
      enterFullscreen();

      // Only need the first click
      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default FullScreen;