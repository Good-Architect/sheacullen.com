"use client";

import { useEffect } from "react";

export function PostcardScrollFlip() {
  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) return;

    const cards = document.querySelectorAll(".postcard-wrapper");
    const observer = new IntersectionObserver(
      (entries) => {
        const nearTop = window.scrollY < 100;
        for (const entry of entries) {
          if (nearTop) {
            entry.target.classList.remove("scroll-flipped");
          } else {
            entry.target.classList.toggle("scroll-flipped", entry.isIntersecting);
          }
        }
      },
      { threshold: 0.5 },
    );

    cards.forEach((card) => observer.observe(card));

    // Also close cards when user scrolls back to top
    const onScroll = () => {
      if (window.scrollY < 100) {
        cards.forEach((card) => card.classList.remove("scroll-flipped"));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
