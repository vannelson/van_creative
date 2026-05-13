import { useEffect } from "react";

export default function useCursorFx(pageRef, cursorRef, ringRef) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const root = pageRef.current;

    if (!cursor || !ring || !root) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame = 0;

    const handleMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX - 4}px`;
      cursor.style.top = `${mouseY - 4}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX - 16) * 0.15;
      ringY += (mouseY - ringY - 16) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationFrame = window.requestAnimationFrame(animateRing);
    };

    const interactiveElements = root.querySelectorAll(
      "a, button, input, select, textarea, [data-cursor='hover']",
    );

    const growCursor = () => {
      cursor.style.transform = "scale(2)";
      ring.style.transform = "scale(1.5)";
      ring.style.borderColor = "rgba(255, 215, 0, 0.8)";
    };

    const resetCursor = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
      ring.style.borderColor = "rgba(255, 215, 0, 0.4)";
    };

    window.addEventListener("mousemove", handleMove);
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", growCursor);
      element.addEventListener("mouseleave", resetCursor);
    });
    animationFrame = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", growCursor);
        element.removeEventListener("mouseleave", resetCursor);
      });
      window.cancelAnimationFrame(animationFrame);
    };
  }, [cursorRef, pageRef, ringRef]);
}
