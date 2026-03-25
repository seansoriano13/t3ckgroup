import { useState, useEffect } from "react";

// Helper hook to track the navbar's dynamic height
export function useNavbarHeight() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const updateHeight = () => setNavHeight(nav.offsetHeight);

    // Initial height
    updateHeight();

    // Use ResizeObserver to detect any height changes (e.g., banner animating out)
    const observer = new ResizeObserver(() => updateHeight());
    observer.observe(nav);

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return navHeight;
}
