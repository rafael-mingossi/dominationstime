import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPos;
};
