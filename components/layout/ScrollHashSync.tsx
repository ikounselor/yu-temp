"use client";
import { useEffect } from "react";

export default function ScrollHashSync() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );

    if (!sections.length) return;

    let ticking = false;

    const updateHash = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section;
        } else {
          break;
        }
      }

      const newHash = `#${currentSection.id}`;

      if (window.location.hash !== newHash) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}${newHash}`
        );
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHash);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    updateHash();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return null;
}
