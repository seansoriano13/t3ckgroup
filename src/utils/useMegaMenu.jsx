import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";

function useMegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const enterTimer = useRef(null);
  const leaveTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
  }, [location]);

  const handleMouseEnter = (menuId) => {
    clearTimeout(leaveTimer.current);

    enterTimer.current = setTimeout(() => {
      setActiveMenu(menuId);
    }, ENTER_DELAY);
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimer.current);

    leaveTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, LEAVE_DELAY);
  };

  const ENTER_DELAY = 150;
  const LEAVE_DELAY = 300;

  return { activeMenu, handleMouseEnter, handleMouseLeave };
}

export default useMegaMenu;
