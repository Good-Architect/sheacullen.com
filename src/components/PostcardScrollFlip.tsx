"use client";

import { useEffect } from "react";

export function PostcardScrollFlip() {
  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) return;

    const cards = document.querySelectorAll(".postcard-wrapper");

    const update = () => {
      // Flip when scrolled past halfway down the page
      const halfway = (document.documentElement.scrollHeight - window.innerHeight) / 2;
      const flipped = window.scrollY > halfway;
      cards.forEach((card) => card.classList.toggle("scroll-flipped", flipped));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return null;
}
