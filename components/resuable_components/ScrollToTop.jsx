"use client";
import { useEffect, useState } from "react";
import {MoveUp } from "lucide-react"; // Icon for the button

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed flex items-center justify-center bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-40 border-2 border-white transition-opacity cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <MoveUp size={24} className="animate-pulse" strokeWidth={2} />
    </button>
  );
};

export default ScrollToTop;
