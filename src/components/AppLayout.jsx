import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
  const { pathname } = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page-shell">
      <Navbar />
      <Outlet />
      {showScrollButton && (
        <button className="scroll-top-button" type="button" onClick={handleScrollToTop} aria-label="Scroll to top">
          ^
        </button>
      )}
    </div>
  );
}
