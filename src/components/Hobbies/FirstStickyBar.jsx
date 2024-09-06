import Reac, { useEffect, useRef, useState } from "react";

function FirstStickyBar() {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const originalPositionRef = useRef(0); // To store the original position of the sticky element

  const handleScroll = () => {
    if (stickyRef.current) {
      const stickyTop = stickyRef.current.getBoundingClientRect().top;
      const offsetY = window.scrollY;

      // Check if we've scrolled past the element's original position
      if (offsetY > originalPositionRef.current) {
        setIsSticky(true); // Make it sticky
      } else {
        setIsSticky(false); // Revert to normal
      }
    }
  };

  useEffect(() => {
    // Store the initial top offset (original position) of the element
    if (stickyRef.current) {
      originalPositionRef.current = stickyRef.current.offsetTop;
    }

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`border border-b-gray-200 h-[100px] bg-slate-100 ${
        isSticky ? "fixed top-0 w-full z-[1000]" : ""
      }`}
      ref={stickyRef}
    ></div>
  );
}

export default FirstStickyBar;
