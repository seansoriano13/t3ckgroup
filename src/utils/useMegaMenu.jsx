import { useState } from "react";
import { useRef } from "react";

function useMegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const enterTimer = useRef(null);
  const leaveTimer = useRef(null);

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
