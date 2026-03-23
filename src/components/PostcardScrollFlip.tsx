"use client";

import { useEffect } from "react";

export function PostcardScrollFlip() {
  useEffect(() => {
    // Only activate on devices without hover (touch/mobile)
    if (window.matchMedia("(hover: hover)").matches) return;

    const cards = document.querySelectorAll(".postcard-wrapper");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("scroll-flipped", entry.isIntersecting);
        }
      },
      { threshold: 0.5 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return null;
}
